# Braid Groups visual audit — lane 03

## Scope and coverage

Audited all 45 assigned items against revision 2 of the local ItemBody captures. Opened all 113 listed screenshot tiles at original resolution. Checked every title, all rendered body sections, proofs or verifications, remarks, internal references, and scratch material where present. The captures report no TikZ diagrams.

The per-item ledger, page memberships, checked headings, screenshots, and exact snapshot excerpts are in [lane-03.json](lane-03.json). It records 41 clean items and 4 items with confirmed title-rendering findings.

## Findings

- **Confirmed raw title subscript:** def-two-sided-projective-khovanov-seidel-bimodule-functors, line 4, displays `The two-sided projective bimodules U_i and their tensor functors` with a literal underscore in the title. Use math delimiters or Unicode subscript characters.
- **Confirmed raw title subscript:** def-vertex-khovanov-seidel-modules, line 4, displays `The vertex modules S_i and their prime quotients` with a literal underscore in the title. Use math delimiters or Unicode subscript characters.
- **Confirmed raw title subscript:** ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension, line 4, displays `PB_3 as F_2 by Z, with its section action` with a literal underscore in the title. Use math delimiters or Unicode subscript characters.
- **Confirmed raw title subscript:** lem-bounded-two-sided-projective-a-m-bimodule-complexes-act-on-c-m, line 4, displays `Bounded two-sided projective bimodule complexes act on C_m` with a literal underscore in the title. Use math delimiters or Unicode subscript characters.

No source, app, or production tooling was changed.
