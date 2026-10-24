# Group Theory rendering audit — lane 09

Reviewed all 97 assigned items and all 117 screenshot tiles individually with tools.view_image at original resolution. The JSON records the frozen title, page placements, source/snapshot/HTML hashes, screenshot metadata, and SHA-256 for every tile. All source, snapshot, HTML, and tile hashes match the assignment/capture records; no source or snapshot drift was found.

## Confirmed rendering finding

- **ex-transgression-for-the-integral-heisenberg-extension**, Facts & Assumptions line 33: the factor-cocycle formula is raw ASCII notation (eta(q), alpha(q), f(q,r), eta(qr), d(f(q,r))) instead of formatted mathematical notation. The standalone original tile screenshots/ex-transgression-for-the-integral-heisenberg-extension--01.png (SHA-256 a760996f48f43437984a66f466d3ea85ede2e5287f57d10dac77fb9a66c16a6c) shows the defect. The formula also appears ambiguous as written, so it should be checked against the cited transgression definition when corrected.

## Optional title typography

Several titles preserve caret, underscore, or plain-text formula notation even though the body math is typeset, including H^2 on the Baer-sum item, [G,G]G^p on the Frattini-formula item, Fp on the topological Burnside-basis item, and the falling-factorial title on the sharply transitive action item. These are presentation observations separate from the confirmed body rendering finding.

## Diagram review

No TikZ or tikzcd source diagram occurs among the 97 assigned items. The explicit Schreier coset graph in ex-a-schreier-coset-graph-and-its-tree-basis (lines 27–40, 56–58) is a possible, optional diagram: four cosets, eight positive-letter transitions, the three specified spanning-tree edges, and five non-tree edges labeled by the listed basis generators. Its current text is complete, so this is not a confirmed omission. Existing inline coset maps, Bass–Serre stabilizer conjugations, the inflation-restriction arrows, and the central-product quotient relation were checked; no displayed map-direction, orientation, index, or sign mismatch was found, apart from the ambiguous raw F1 formula noted above.

No clipping was confirmed. Tall bodies continue across their individual fixed-height captures; apparent breaks align with screenshot boundaries. Wikilink titles render as block lines, and uppercase CSS technique banners are expected. No reference-title leaks were observed.
