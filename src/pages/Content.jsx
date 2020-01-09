import React from 'react';

const ContentPage = () => {
    return (
        <>
            <section id="headings" className="mb-5">
                <h2>Headings</h2>
                <hr />
                <div>
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4/5/6</h4>
                </div>
            </section>

            <section id="body-copy" className="mb-5">
                <h2>Body copy</h2>
                <hr />

                <p>
                    Findaway is a global leader in digital content delivery.
                    With the invention of Playaway Preloaded Products, they
                    transformed the way that audiobooks, eBooks, videos and
                    learning tools are circulated in 40,000 libraries, schools,
                    and military installations.
                </p>

                <p>
                    Findaway also revolutionized digital audiobook delivery with
                    AudioEngine, which is quickly becoming the industry’s
                    largest B2B audiobook delivery platform that enables brands
                    to deliver one of the world’s largest collections of digital
                    audiobooks within their own experience.
                </p>

                <p>
                    To learn more about Findaway and the Findawayers who make it
                    all happen, visit www.findaway.com
                </p>
            </section>

            <section id="lead-text" className="mb-5">
                <h2>Lead text</h2>
                <hr />
                <div>
                    <p className="lead">
                        Findaway is a global leader in digital content delivery.
                        With the invention of Playaway Preloaded Products, they
                        transformed the way that audiobooks, eBooks, videos and
                        learning tools are circulated in 40,000 libraries,
                        schools, and military installations.
                    </p>
                </div>
            </section>

            <section id="links" className="mb-5">
                <h2>Links/Anchors</h2>
                <hr />

                <ul className="list-flat">
                    <li>
                        <a href="#link">Standard</a>
                    </li>
                    <li>
                        <a href="#link" className="cta">
                            Call To Action
                        </a>
                    </li>
                </ul>
            </section>

            <section id="lists" className="mb-5">
                <h2 className="mb-2">List Types</h2>
                <hr />

                <h3 className="mb-0">
                    Unordered{' '}
                    <small>
                        <code>ul</code>
                    </small>
                </h3>
                <ul>
                    <li>lorem ipsum</li>
                    <li>dolor sit amet</li>
                    <li>adipisicing elit</li>
                </ul>

                <h3 className="mb-0">
                    Ordered{' '}
                    <small>
                        <code>ol</code>
                    </small>
                </h3>
                <ol>
                    <li>lorem ipsum</li>
                    <li>dolor sit amet</li>
                    <li>adipisicing elit</li>
                </ol>

                <h3 className="mb-0">
                    Inline{' '}
                    <small>
                        <code>.list-inline</code>
                    </small>
                </h3>
                <ul className="list-inline">
                    <li>
                        <a href="#link">lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#link">dolor sit amet</a>
                    </li>
                    <li>
                        <a href="#link">adipisicing elit</a>
                    </li>
                </ul>

                <h3 className="mb-0">
                    Flat{' '}
                    <small>
                        <code>.list-flat</code>
                    </small>
                </h3>
                <ul className="list-flat">
                    <li>
                        <a href="#link">lorem ipsum</a>
                    </li>
                    <li>
                        <a href="#link">dolor sit amet</a>
                    </li>
                    <li>
                        <a href="#link">adipisicing elit</a>
                    </li>
                </ul>
            </section>
        </>
    );
};

export default ContentPage;