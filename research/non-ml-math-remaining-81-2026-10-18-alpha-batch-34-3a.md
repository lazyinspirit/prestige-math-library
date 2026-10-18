# Batch 34 Step 3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-34`.

Scope contains exactly one owed decision, `touched:34:lem-clifford-exterior-wedge-contraction-relations`; reader findings, refuter findings and page obligations are empty. Six HIGH/CRITICAL risk reviews are owed, in the generated dependency order. No engine transition, judgment or stamp is performed.

## Level 0 completed

`def-clifford-algebra-of-a-quadratic-space`: independently checked the nonempty intersection ideal, scalar closure, quotient operations, plus-Q relation and zero-dimensional/degenerate cases against `def-tensor-algebra-of-a-vector-space` and `def-left-right-and-two-sided-ideal`. No defect; risk review complete. Source: Atiyah–Bott–Shapiro, Part I §1, pp. 4–5, https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf. No decision is owed for this untouched definition.

`lem-clifford-exterior-wedge-contraction-relations`: **amended_repair**, confidence 1. The reader replaced background references with Meinrenken. The current pre-amendment raw hash is `fceab8fb51e82de76147c5bd8f9a44e00d917f49d9aa0d1de5e5b0014c587a21`, identical to the immutable post-reader carrier. Replacing only that references block with the two references described in the reader report reproduces `a388c93f8ae998d65498f9a146fc3aef904e8d4da2e9e8ad834a8e08458fed84`, exactly the immutable pre-reader hash. Thus the historical delta is fully bound and citation-only.

The six proof steps are sound: multilinear deletion defines an odd derivation on tensors; its value on every square relation is zero and the Leibniz rule preserves the generated ideal; distinct-position deletions cancel; the mixed anticommutator comes from the first-factor deletion. Symmetry and cancellation of 2 give the claimed square identity. Degree zero/one, V=0, zero vectors and zero/degenerate B all satisfy the formulas. No arbitrary choice is used. Actual suppliers checked: tensor-algebra definition, exterior-algebra quotient definition, finite iterated multilinear universal-property corollary, two-sided ideals, and the corollary’s binary tensor universal property, symmetry/associativity and unit-isomorphism prerequisites. Risk review complete.

The replacement book URL provides only subscription preview, so its exact printed locator was not independently recovered. Instead, amended the reference to the author-hosted primary notes [Meinrenken, Clifford algebras and Lie groups](https://www.math.toronto.edu/mein/teaching/LieClifford/cl12.pdf), Chapter 2 §1.2, equations (15)–(16), and §2.1 Proposition 2.2, printed pp. 24–25 (PDF pages 21–22). The complete relevant operator construction and descent argument were read. Chapter 1 opening assumes characteristic not 2; §2.1 explicitly permits degenerate forms, and its action uses epsilon(v)+iota(B-flat(v)) with anticommutator 2B(v,w), exactly the local convention. The first displayed operator identity has a transcription/typesetting error in the notes; the correct exterior identity is independently proved locally. The older separate cl2.pdf uses a half-contraction convention and was not substituted. Failed Springer/full-book-mirror and screenshot retrievals are not claimed as source reading. No mathematical body, Statement, dependency or provenance classification changed, and no judge stamp existed to invalidate. Defect row: `nm81-b34-3a-contraction-source` (citation-inaccurate; fixed).


## Level 1 completed

`lem-clifford-quotient-factorization`: all three steps checked against the current defining ideal and both cited definitions. Kernel containment gives representative independence; induced operations and quotient surjectivity give a unique unital k-algebra factor. V=0 has the zero relation (rather than a literally empty relation set); the proof still gives J_Q=0. Q=0, degenerate B and the zero target cause no failure. No choice. Risk review complete; no decision owed and no mathematical repair.

## Level 2 completed

`thm-universal-property-of-clifford-algebra`: checked the three steps and all four suppliers. The tensor extension kills the exact square relations; the quotient factor gives existence. Pulling a competing map back along q_Q and using tensor uniqueness followed by surjectivity gives uniqueness. All zero/degenerate boundaries work without injectivity or AC. Tensor-universal-property supplier proof was read, with its direct-sum prerequisite Statement. ABS §1 (1.2)–(1.3) and Gallier §1.2 Definition 1.3 agree. Risk review complete; no decision owed or repair needed.

## Level 3 completed

`thm-clifford-pbw-basis-and-associated-graded`: all eight steps and seven suppliers checked, including polarization and the exterior-basis determinant argument. Lexicographic reduction of (length,inversions) proves spanning without requiring confluence. The representation applied to 1 has the ordered wedge as top component; highest-degree comparison proves independence. These reductions preserve word bounds, yielding each filtered basis. Multiplicativity and vanishing squares in F_2/F_1 produce the exterior map, and matching graded bases prove its bijectivity. Checked n=0, degree zero, m>n, zero and degenerate B; the ordered basis is supplied, so no AC. Source: ABS §1 (1.4), printed p.5, whose terse assertion is supplemented by this complete local proof. Risk review complete; no decision owed or mathematical repair.

## Level 4 completed

`ex-zero-quadratic-clifford-algebra-is-exterior`: read both verification steps and all four actual suppliers. Both presentations use the identical square-generated ideal, so the two coset formulas are well-defined inverse algebra maps. Their common monomial basis follows from the reviewed basis suppliers; n=0 gives k with basis 1. The nonzero-space qualification on degeneracy is correct. The characteristic hypothesis is explicit in Given. Risk review complete; no decision owed or repair needed. All six ordered reviews are complete.

## Metadata, obligations and checks

Synchronized the contraction reference in the owning `batch-34.pages.json` manifest. Restored the already-declared `def-left-right-and-two-sided-ideal` dependency to the auxiliary `batch-34.items.json` inventory mirror; no carrier dependency changed. Added six specific completed risk reviews to the proof contract. Corrected its quotient-factorization zero-dimensional boundary note from “relation set is empty” to “the only defining relation is zero”; this is audit-evidence enrichment, with no change to any mathematical carrier. Provenance values and all Statement/Definition text are preserved.

The decisions file contains exactly the single routed touched obligation and references the one closed citation-defect row `nm81-b34-3a-contraction-source`, owned at `3a-adjudicate`, disposition `fixed`, repair confidence 1. The ledger append used the serialized append tool with `--no-render`; its generated aggregate view is left for engine closure. There are no reader, flagged, refuter or page decisions to invent. Risk-only unchanged items do not receive extra decisions.

Local checks completed:

- Initial `risk-report.mjs` without `--require-reviewed`: six HIGH/CRITICAL items identified, nine items routed, zero errors.
- Final `risk-report.mjs ...batch-34.proof-contracts.json --require-reviewed`: all six reviews complete, nine items routed, zero errors.
- `proof-contract.mjs ...batch-34.proof-contracts.json --strict`: 9/9 items checked, zero errors or warnings.
- Final `tsx-run.mjs tools/reflow.mts items/lem-clifford-exterior-wedge-contraction-relations.md`: unchanged.
- Final `tsx-run.mjs tools/precheck.mts items/lem-clifford-exterior-wedge-contraction-relations.md`: one checked, zero failing.
- `rendercheck.mjs items/lem-clifford-exterior-wedge-contraction-relations.md`: one file, YAML and real KaTeX parse pass.
- After the final item edit and formatter, `node tools/proof-layout.mjs items/lem-clifford-exterior-wedge-contraction-relations.md`: one item, six steps, zero defects.

No mathematical Statement or Definition changed, so no new consumer repair cascade is triggered. The frontier dependency ledger records the owned disposition and preserves stable IDs and existing withdrawals. No published source was edited, and no defective published item was established in the reviewed prerequisite uses. There are no unresolved mathematical blockers or owner escalations in this dispatch. Source access limits are stated above; the final citation uses the directly read author-hosted text. All requested local work is complete; the engine owns stamping and the gate battery.

Final integrity check: exact one-obligation coverage, all eight untouched item raw hashes match reader-post snapshots, reader-findings/refuter raw artifact hashes match the scope, and all six required risk reviews are complete. Final amended contraction item raw SHA-256: `ef15ffaaa9d8881f098b5453731a9f90c17ca22df77c375a8e62c4bff32b7df0`. These are local consistency checks, not decision stamps or a gate verdict.
