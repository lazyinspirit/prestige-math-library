# Batch 20 bounded boundary-contract repair

Scope: only `research/frontier-42-coxeter-32-batch-20.proof-contracts.json` and this report. Read CLAUDE.md, README.md and SCHEMA.md fully, the complete current Statements and proofs of the eight flagged carriers, and both prior invariant algebra/spectrum repair reports. This is a case-evidence repair and review, not a new broad invariant-theory/source audit. No item, manifest, merged contract, scope, certificate, native gate or run control was edited.

The earlier spectrum owner actually read all twelve Casselman PDF pages; that attribution remains theirs. No new full PDF reading is claimed here. The earlier reports close the frozen batch19 Definition/Steinberg uses, regular-degree theorem and E6/H3 downstream transfer; those locally proved supplier routes remain unchanged. There is no newly identified mathematical gap or supplier-interface change, hence no affected item consumers requiring edits.

## Exact cases

Fourteen previously identical no-iff rows now distinguish actual obligations from definitions, identities and deferred assertions, with separate forward/reverse rationales:

- Complexification: fixed finite-type canonical action implies faithful complexification, reflections, essentiality and invariant structure. Neither a complex reflection action nor polynomial invariants are claimed to reconstruct a Coxeter system. F4/F11 supplier equivalences are distinguished from this Statement.
- Classical spectra: the named diagrams and rank bounds precede the matrix/spectrum calculations. Spectral residues are defined notation, not a converse type criterion; invariant-degree transfer is expressly deferred.
- Basic degrees/series: both families must already be minimal basic families of the same ideal. Factor recovery proves degree multiset equality; equal degree lists are not claimed to imply generation or algebraic independence. Hilbert/Molien formula equalities do not change this.
- Rational differentials: the scalar bridge and BJ=I are equivalent notation with the corrected matrix indexing. Nonzero Jacobian is a conclusion, not a converse invariant-generation criterion. The minimal-polynomial divisibility iff belongs to F5.
- Exceptional spectra: diagrams are fixed premises, not inferred from polynomials. The internal order-transfer equivalence is discharged in step 5.1: matrix identity implies group identity by faithfulness; group identity implies matrix identity by the homomorphism law.
- Regular-degree theorem: finite type, AC and local regular-vector proof imply exponent/residue equality; tables do not test arbitrary vectors or basic families. Both inclusions in the reducible invariant tensor identity are explicit in step 1.2, and its positive-degree ideal equality supplies the quotient identity.
- E6/H3 example: exact diagrams and orders are premises; characteristic polynomials and group sizes are outputs, not converse type criteria. Degree transfer is through the closed regular-degree theorem.

A2 empty row now records the actual fixed families. Its hypothesis is rank-two A2, step 1.1 enumerates three positive roots and the discriminant product, and steps 2.1–3.1 prove that (a,b) is a nonempty basic family. Empty polynomial sums yield zero; the empty monomial product is the constant one retained in step 4.1. The current A2 Statement has no variable fixed-space family, empty fixed-space intersection or moved-space sum. In a claim admitting such a family the ambient convention would be intersection(empty)=E and sum(empty)=0; it would be incorrect to import that hypothetical claim into this example.

Root authorized one additional exact correction found while reading: the rational-differentials empty row had falsely credited step 3.1 with empty Jacobian determinant 1. Its Statement actually assumes n>=1 and current final step 3.1 explicitly makes no n=0 assertion. The corrected not_applicable row names the nonempty coordinate/basic families and orbit indexing group containing 1. It preserves internal empty monomial sums for zero polynomials, supported by linearity/chain-rule expansion in step 1.2. A concrete reviewed false-positive rationale upholds this family-detector candidate. The current boundary tool uses `reviewed: {upheld,by,reason}`. This is the current tool-specific uphold with actual trace guards recorded below; the validator does not enforce these trace hashes for the reviewed escape. No new guard API or tool change is required.

## Local diagnostics

Actual commands after these edits:

- `node tools/proof-contract.mjs research/frontier-42-coxeter-32-batch-20.proof-contracts.json --strict --json`: PASS, 11/11, zero errors/warnings.
- `node tools/boundary-audit.mjs research/frontier-42-coxeter-32-batch-20.proof-contracts.json --json --fail-on-template --fail-on-contradicted`: PASS, 88 rows, zero template clusters, zero contradicted candidates, one reviewed rational-empty false positive.

No native gate was attempted. Root retains the required fresh dependency-ordered 304-item acceptance pass before each gate.

Current unchanged itemHashGuard values:

| Item | Guard |
| --- | --- |
| complexification | e768c147b5e77d557e0aa5344e20f5e075329c2573547fd3f5d243c8fae2fdc2 |
| classical spectra | 5c77d7f21c8e4954b296621aeb3249969099ccfe47d00fbb0f815e753737085d |
| basic degrees/series | 65266f5070ad112eaf9fb49ecf2ba8641e4083c9fd5049b974de10284af20e4c |
| rational differentials | 16f030a5a80fab3d11638e603f51f62469053221b89db6148961266933f1e224 |
| exceptional spectra | 27f12a79f601ca699b64989230d13b26c3d17c41233136e2a1a2d8a20163a84e |
| regular-degree theorem | 99ec504ea0eb5875f0325dc77031b0bb85b3472159d0587b90ee49e277141695 |
| E6/H3 example | 115bf25c58fe0e9d7b986832647ba8c9ce4af243158baece36d5f68d9b303f24 |
| A2 example | 0b8b3024ae96fecec083a0c380b02f38a59a78ce937b8ec1852db7fb056dc7c8 |

Case-evidence and schema diagnostics are READY. No mathematics remains held in this bounded task. This writer is drained. The rational-empty review uses the current tool-specific uphold with the actual trace guards below. These trace guards document the exact inspected item and row; they do not claim validator-enforced review binding.

## Rational-empty review trace

The actual `itemHashGuard` utility from `tools/item-hash.mjs` gives `16f030a5a80fab3d11638e603f51f62469053221b89db6148961266933f1e224` for `lem-cg-formal-rational-differentials-and-invariant-jacobian`. The current boundary tool's row-hash expression, `sha256(JSON.stringify({case:row.case,status:row.status,text:row.reason??row.evidence??''}))`, gives `bd59c324893e5cff187df519c64da8e96e31d31bd780d51d74f29dfa0fe8117b` for its corrected empty row. The item guard includes the mathematical body and proof and excludes verification metadata. These hashes were computed from the current disk bytes after the row correction; no item or contract edits were made during this clarification. The preceding strict 11/11 and 88-row boundary checks remain applicable.
