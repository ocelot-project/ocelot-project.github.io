import React from "react";
import Page from "../components/Page";
import Section from "../components/Section";
import Columns from "../components/Columns";
import { rhythm } from "../utils/typography";

const IndexRoute: React.FC = () => {
    return (
        <Page>
            <Section banner title={<span>(define-operating-system ocelot &#8230;)</span>}>
                The Ocelot operating system is a Lisp Machine-inspired, developer-oriented
                Linux distribution, based on <a href="https://nixos.org/">NixOS</a>. The
                driving idea behind Ocelot is that everything running on a computer, from
                the kernel to the user interface, should be easily, instantly, and safely
                extensible by the user.
            </Section>
            <Section title="Design Principles">
                <Columns>
                    <div>
                        <h3>Exploratory programming for your entire system.</h3>
                        <p>
                            The Nix package manager and a powerful Emacs-based UI come together
                            to make systems development safer, easier, and faster. Prototype
                            changes to your live system in Lisp, then use Nix to make your
                            modifications reproducible across systems.
                        </p>
                    </div>
                    <div>
                        <h3>Text is powerful.</h3>
                        <p>
                            Since the beginning of computing, nothing has ever surpassed
                            well-rendered text and keyboards in human interface efficiency.
                            Ocelot's text-first, graphics-optional UI is fully customizable,
                            and allows you to establish fast keyboard mnemonics to make any
                            task feel as natural as editing text.
                        </p>
                    </div>
                    <div>
                        <h3>Always practical.</h3>
                        <p>
                            Ocelot has been a fully functional operating system from the
                            beginning, backed by the modern Linux kernel's hardware support.
                            Graphical applications blend naturally into the Emacs-based UI,
                            and support many of the same editor actions as text-based
                            apps.
                        </p>
                    </div>
                </Columns>
            </Section>
            <Section title="Installation">
                <h3>From an existing NixOS installation</h3>
                <p>
                    <ol>
                        <li><a href="https://nixos.org/manual/nixos/stable/index.html#ch-installation">
                            Install NixOS
                        </a> if you don't already have it.</li>
                        <li>
                            As a user with wheel (<code>sudo</code>) access, clone Ocelot into your home directory:
        <p>
            <code>
                git clone https://github.com/unjordy/ocelot ~/ocelot
            </code>
        </p>
                        </li>
                        <li>
                            Create a symbolic link to it in <code>/etc/nixos</code>:
        <p>
            <pre>
                cd ~{"\n"}
                sudo ln -s ocelot /etc/nixos/ocelot
            </pre>
        </p>
                        </li>
                        <li>
                            Add a <code>./ocelot</code> entry to your
                            <code>/etc/nixos/configuration.nix</code> imports:
                            <p>
                                <pre>
                                    imports ={"\n"}
                                    {"  "}[{"\n"}
                                    {"    "}./hardware-configuration.nix{"\n"}
                                    {"    "}# ...{"\n"}
                                    {"    "}./ocelot{"\n"}
                                    {"  "}];
                                </pre>
                            </p>
                        </li>
                        <li>Set up Ocelot-related options in <code>configuration.nix</code> if desired.</li>
                        <li>Run <code>sudo nixos-rebuild switch</code>.</li>
                        <li>Logout of your current session and you should see the Ocelot Login
                            Manager (<code>olman</code>) appear.</li>
                        <li>Choose a graphical or textmode Emacs session. Ocelot should either
                            pick up your existing Emacs configuration, or offer to create a new
                            one.</li>
                    </ol>
                </p>
            </Section>
        </Page>
    );
}

export default IndexRoute;
