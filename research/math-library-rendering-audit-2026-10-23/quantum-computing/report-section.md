## Quantum Computing

Completed visual review of **565 items across 54 pages**, with **878 image tiles**. Findings: 6 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/quantum-computing/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/quantum-computing/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/quantum-computing/category-review-receipt.json).

### Confirmed rendering defects

#### quantum-computing / confirmed 001: `lem-qc-rz-epsilon-region-equivalence`

- Location: **Facts & Assumptions, F3 reference title**; source lines 50.
- Pages: `clifford-t-exact-and-approximate-synthesis`.
- Visible defect: The resolved linked title displays `max_{||v||=1} ||Tv||` as literal formula text, with underscores and braces, rather than typeset mathematics. It is difficult to read as the operator-norm definition in the standalone original-resolution tile.
- Future repair: Typeset the formula in the linked title with supported inline math delimiters, or revise the display title to use prose; then inspect the rendered body.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-computing/screenshots/lem-qc-rz-epsilon-region-equivalence--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-computing/snapshots/lem-qc-rz-epsilon-region-equivalence.md).

Exact frozen source lines:

```text
50: [F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]:
```

#### quantum-computing / confirmed 002: `thm-qc-solovay-kitaev-error-and-resource-bound`

- Location: **Facts & Assumptions, F4 reference text**; source lines 63.
- Pages: `approximate-universality-and-solovay-kitaev`.
- Visible defect: The resolved operator-norm title displays `max_{||v||=1} ||Tv||` literally, including underscores and braces, rather than typeset mathematics. The same tile shows the surrounding math rendered correctly.
- Future repair: Typeset the formula in the linked title with supported inline math delimiters, or revise the display title to use prose; then inspect the rendered body.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-computing/screenshots/thm-qc-solovay-kitaev-error-and-resource-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-computing/snapshots/thm-qc-solovay-kitaev-error-and-resource-bound.md).

Exact frozen source lines:

```text
63: [F4] Every compiled gate word is unitary because its letters lie in $G\subset SU(2)$ ([[def-qc-inverse-closed-dense-su2-gate-set]]). From the operator-norm definition ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]), left multiplication by a unitary preserves norm because it preserves vector norms, and right multiplication preserves norm because it maps the unit sphere bijectively to itself.
```

#### quantum-computing / confirmed 003: `thm-qc-trace-norm-rank-one-formula`

- Location: **Facts & Assumptions, F4 linked title**; source lines 64.
- Pages: `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`.
- Visible defect: The resolved linked title renders `T^*T` literally with a caret and asterisk in the standalone original-resolution tile instead of typeset mathematics.
- Future repair: Typeset the formula in the linked title with supported inline math delimiters, or revise the display title to use prose; then inspect the rendered body.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-computing/screenshots/thm-qc-trace-norm-rank-one-formula--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-computing/snapshots/thm-qc-trace-norm-rank-one-formula.md).

Exact frozen source lines:

```text
64: $|A|=\sqrt{A^*A}$ ([[def-singular-values-of-an-endomorphism]]).
```

#### quantum-computing / confirmed 004: `thm-qc-tqc-hexagon-coordinates`

- Location: **Hexagon diagrams**; source lines 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101.
- Pages: `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models`.
- Visible defect: Confirmed local TikZ render failure for both diagrams; raw diagram source is shown in place of the diagrams.
- Future repair: Repair the `tikzcd` source or supported diagram syntax so both route diagrams render; preserve the stated source/target objects and arrow labels.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/quantum-computing/screenshots/thm-qc-tqc-hexagon-coordinates--02.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-computing/snapshots/thm-qc-tqc-hexagon-coordinates.md).

Exact frozen source lines:

```text
73: ```tikzcd
74: ((X\otimes Y)\otimes Z)
75:   \arrow[r,"\alpha_{X,Y,Z}"]
76:   \arrow[d,"c_{X,Y}\otimes\operatorname{id}_Z"']
77: & X\otimes(Y\otimes Z)
78:   \arrow[r,"c_{X,Y\otimes Z}"]
79: & (Y\otimes Z)\otimes X
80:   \arrow[d,"\alpha_{Y,Z,X}"] \\
81: (Y\otimes X)\otimes Z
82:   \arrow[r,"\alpha_{Y,X,Z}"']
83: & Y\otimes(X\otimes Z)
84:   \arrow[r,"\operatorname{id}_Y\otimes c_{X,Z}"']
85: & Y\otimes(Z\otimes X)
86: ```
88: ```tikzcd
89: X\otimes(Y\otimes Z)
90:   \arrow[r,"\operatorname{id}_X\otimes c_{Y,Z}"]
91:   \arrow[d,"\alpha_{X,Y,Z}^{-1}"']
92: & X\otimes(Z\otimes Y)
93:   \arrow[r,"\alpha_{X,Z,Y}^{-1}"]
94: & (X\otimes Z)\otimes Y
95:   \arrow[d,"c_{X,Z}\otimes\operatorname{id}_Y"] \\
96: (X\otimes Y)\otimes Z
97:   \arrow[r,"c_{X\otimes Y,Z}"']
98: & Z\otimes(X\otimes Y)
99:   \arrow[r,"\alpha_{Z,X,Y}^{-1}"']
100: & (Z\otimes X)\otimes Y
101: ```
```

#### quantum-computing / confirmed 005: `ex-qc-zero-plus-bloch-and-hadamard`

- Location: **Title**; source lines 4.
- Pages: `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates-examples`.
- Visible defect: The title contains quantum state notation without math delimiters, unlike the typeset notation in the body.
- Future repair: Typeset the state expressions in the title, for example `$|0angle$` and `$H|0angle$`.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-computing/screenshots/ex-qc-zero-plus-bloch-and-hadamard--01.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-computing/snapshots/ex-qc-zero-plus-bloch-and-hadamard.md).

Exact frozen source lines:

```text
4: title: "Bloch coordinates of |0> and H|0>"
```

#### quantum-computing / confirmed 006: `thm-qc-tqc-pentagon-coordinates`

- Location: **Pentagon diagram**; source lines 64, 66, 69, 71, 83.
- Pages: `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models`.
- Visible defect: The frozen HTML and original-resolution tiles show a red “diagram failed to render” panel with the raw tikzcd source instead of the pentagon. The adjacent prose and proof specify the intended five parenthesizations and route products, but the visual diagram is absent. Receipt sidecar reports one tikzcd diagram failure and zero KaTeX errors.
- Future repair: Repair the tikzcd source or adapt it to syntax accepted by the frozen local renderer, then recapture and verify all five parenthesized objects and the five associator arrows against the Statement and proof. The required composites are the three-arrow route A_3 A_2 A_1 and the two-arrow route A_5 A_4.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/quantum-computing/screenshots/thm-qc-tqc-pentagon-coordinates--01.png), [tile 02](math-library-rendering-audit-2026-10-23/quantum-computing/screenshots/thm-qc-tqc-pentagon-coordinates--02.png); [frozen source](math-library-rendering-audit-2026-10-23/quantum-computing/snapshots/thm-qc-tqc-pentagon-coordinates.md).

Exact frozen source lines:

```text
64: ## Pentagon diagram
66: The vertices are the five parenthesizations of $a\otimes b\otimes c\otimes d$;
69: expansion, not the drawing.
71: ```tikzcd
83: ```
```

