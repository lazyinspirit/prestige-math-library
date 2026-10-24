# Lie Theory visual rendering audit — lane 07

## Scope and coverage

Reviewed all 107 assigned items against their frozen source snapshots and local ItemBody preview HTML. Opened every assigned PNG tile individually at original resolution: 159 of 159. Coverage records each item’s page memberships, source and HTML SHA-256, checked sections, and each viewed tile’s path, SHA-256, and dimensions in [lane-07.json](lane-07.json). This is local-preview evidence only.

## Findings

Two confirmed literal-math defects appear in the uppercase proof-technique banner. The banner itself is intended; its embedded raw math is not typeset.

- `cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations`, frozen source line 46: `induction on $\\dim V$` appears literally as `$\\DIM V$` in the banner. [Viewed tile](screenshots/cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations--01.png).
- `lem-kostant-laplacian-is-scalar-on-weight-components`, frozen source line 60: `$d$` appears with its dollar delimiters in the banner. [Viewed tile](screenshots/lem-kostant-laplacian-is-scalar-on-weight-components--03.png).

No other confirmed visible TeX/KaTeX, ASCII-math, reference-title, clipping, Scratch, or diagram defect was observed. No assigned item contains TikZ or other authored diagram source, and no missing-diagram candidate was sufficiently supported by the source.

## Optional typography

The H1 titles for `def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group`, `ex-cartan-subalgebra-and-roots-of-sl-two`, `ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras`, and `ex-weyl-reflection-in-sl-two` use plain `L2`, `sl_2`, or `B_2`/`C_2` typography. These are optional title-polish observations, not defects.
