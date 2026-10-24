# Algebraic Topology rendering audit — lane 07

Reviewed all 92 assigned items and all 150 revision-2 screenshot tiles at original resolution. Titles and every rendered ItemBody section were checked against the frozen snapshots. Findings record confirmed instances where mathematical notation remained plain text in the rendered body.

## Findings

- **lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q — Statement**, snapshot line(s) 55: The mathematical statement appears as plain text: expressions such as K_q=K(Z/2,q) and H_n(K_q;Z) are not typeset, leaving subscripts and formula syntax visible.
- **lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q — Proof**, snapshot line(s) 75: The proof’s mathematical notation is plain text, including K_1, RP∞, BSO(1), π₁, and F-cohomology expressions, rather than rendered formulas.
- **lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms — Statement**, snapshot line(s) 33: The entire statement’s formulas are displayed as ordinary text, including f:W→X, π_i(f)⊗Q, and H_i(f;Q).
- **lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms — Proof**, snapshot line(s) 49, 51: Proof formulas are shown as plain text, including the mapping-path fibration and homotopy groups, so indices and mathematical structure are not typeset.
- **lem-oriented-grassmannian-has-two-lifted-schubert-cells — Statement**, snapshot line(s) 37: The statement presents its formulas literally as text (for example Gr⁺_n(R∞), BSO(n), and RP∞) rather than rendered mathematical notation.
- **lem-oriented-grassmannian-has-two-lifted-schubert-cells — Proof**, snapshot line(s) 55, 57, 59: The proof uses unformatted formula text for key names and maps, including BSO(n), Gr⁺_n(R∞), and v↦Rv.
- **lem-weak-join-classifying-model-is-a-cw-k-g-one — Statement**, snapshot line(s) 40: The weak-join notation is rendered as ordinary text, e.g. B_wG, J(G), and K(G,1), exposing the underscore and untypeset formulas.
- **lem-weak-join-classifying-model-is-a-cw-k-g-one — Proof**, snapshot line(s) 60, 62, 66: The proof likewise leaves mathematical notation such as J(G), B_wG, U_s, and t_s in plain text; formula typography is inconsistent with the rendered Facts section.
- **thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2 — Statement**, snapshot line(s) 39: The statement formulas appear as plain text, including π_i(T_r), f_r, and F₂^{B_n}; the target and index notation is not mathematically typeset.
- **thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2 — Proof**, snapshot line(s) 55, 57: The proof contains extensive unformatted formula text (including T_r, P_r, K(F₂,q), and π_i), visible as literal underscores and baseline indices.

## Coverage

The JSON coverage table contains exactly the 92 assignment IDs, in assignment order, with each item’s complete page list, checked section headings, and all 150 listed screenshot paths.
