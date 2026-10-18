# Step 3a reader report — batch 57

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: `reader-57`  
Date: 2026-10-18

## Scope and run state

Read the batch-57 page manifest, reader brief, coverage record, cross-batch dependency record, authoring notes, and proof contracts. The autopilot status command reported the run active at stage `3a-read`; at audit start it listed 40 of 81 batches covered. All eleven batch-57 items and both assigned pages were current-run drafts. The authoring notes and contract data were used as navigation and compared with the authored carriers; their recorded decisions and checks were not treated as proof of correctness.

## Opened inventory

### Assigned pages

- `temperley-lieb-diagram-algebra-and-catalan-basis` (A page): opened and checked its summary, scope boundaries, prerequisites, and links.
- `temperley-lieb-diagram-algebra-and-catalan-basis-examples` (B page): opened and checked its summary, example list, and companion link.

### Assigned items, read in manifest dependency-level order

- Level 0: `def-temperley-lieb-diagram-category`; `def-temperley-lieb-generator-presentation`.
- Level 1: `thm-temperley-lieb-diagram-category-laws`; `thm-temperley-lieb-diagrams-have-catalan-cardinality`; `thm-temperley-lieb-generator-normal-form`.
- Level 2: `lem-temperley-lieb-generators-satisfy-local-relations`; `thm-temperley-lieb-diagram-generators-span`.
- Level 3: `thm-temperley-lieb-presentation-isomorphism`.
- Level 4: `ex-temperley-lieb-ranks-zero-through-two`; `ex-temperley-lieb-three-strand-normal-forms`; `cex-temperley-lieb-zero-loop-generator-is-zero`.

### Dependencies and context opened

Opened the direct item suppliers named in the assigned carriers, including the commutative-ring/algebra and free-module suppliers; the free-associative-algebra and relations-descent lemma; the category, functor, natural-transformation, natural-isomorphism and monoidal-category definitions; the natural-addition associativity lemma; the lattice-path, Dyck-path, balanced-word and Catalan suppliers; and the matrix, determinant, determinant-multiplicativity and determinant-unit suppliers. For the cited constructions used by those suppliers, also opened the finite-cardinality and function-bijection results, the relevant tensor-product and quotient-ring universal-property items, and the adjugate/cofactor items.

Opened the contextual pages `lattice-paths-and-catalan-numbers`, `generic-coxeter-hecke-algebras-and-the-standard-basis`, `tensor-and-fusion-categories`, and the current-run page `algebraic-representation-and-tensor-symmetry-map` with its two assigned A-page carriers. The latter is a field-level representation/module interface; the Temperley–Lieb page explicitly treats it as reading context and proves its ring-level claims locally. Also opened the linked published item `def-temperley-lieb-quotient-and-jones-specialization`; its idempotent generators and localization are distinct from the unscaled diagram convention here.

## Review and page verdicts

### A page: `temperley-lieb-diagram-algebra-and-catalan-basis`

No defect found in the page summary, conventions, scope boundary, or proof route. The summary accurately describes the raw diagram data, local category and generator relations, Catalan indexing, normal-form spanning, generation, and the final isomorphism. The page correctly separates the all-commutative-ring determinant argument from the cited complex-field treatment and does not infer linear independence from spanning. Its description of the Hecke, representation-map, and tensor-category routes as context is consistent with the opened pages and carriers.

The diagram and generator definitions preserve endpoint order and the loop convention. The category-law proof checks closure, associativity by cycle components in the three-layer graph, identities, the tensor bifunctor, strict associativity/unit constraints, endpoint tagging, and the central scalar action. The Catalan proof gives inverse matching/parenthesis constructions and the semilength- $n$ path correspondence, including $n=0$. The normal-form proof gives terminating length reductions, a reduced-word block form, a corner/path bijection and spanning only. The generator-generation argument separates through-line moves from nested-cap restoration and checks that its local operations create no cycles. The presentation-isomorphism proof uses a surjection between equal finite free ranks, constructs a right inverse by finitely many preimage choices, and applies determinant multiplicativity and the positive-size determinant-unit criterion; its rank is positive because the identity diagram exists. These arguments preserve the hypotheses on $R$, $\delta$, and $n$.

Reader verdict: no defect found in the assigned A-page prose or its assigned items.

### B page: `temperley-lieb-diagram-algebra-and-catalan-basis-examples`

No defect found in the page summary or its three examples. The ranks and rank-three multiplication table follow from the local relations; the five rank-three normal forms and two triple reductions are correct; at $R=\mathbb Z$, $\delta=0$, $n=2$, the cap-cup diagram is a nonzero basis vector whose square is zero, and the isomorphism transports this to a nonzero nilpotent generator.

Reader verdict: no defect found in the assigned B-page prose or its assigned items.

## Uneditable findings

The two published matrix suppliers below have title-scope concerns. Their statements explicitly assume $n\ge1$ and are the hypotheses used by the assigned presentation-isomorphism proof. The local matrix definition nevertheless includes zero-sized shapes, while the local determinant definition defines determinants only for positive size; qualifying the titles would remove that mismatch. These published items were not edited.

1. `thm-determinant-multiplicative` — frontmatter `title`. The title says “same-sized finite square matrices” without the positive-size restriction, while the Statement is for $n\ge1$. `def-matrices-over-a-commutative-ring` explicitly includes zero-sized square shapes and `def-determinant-of-a-square-matrix` only defines determinant for $n\ge1$. The title should say positive-sized matrices. This is nonfatal to the assigned use, whose rank is proved positive. Assigned consumer: `thm-temperley-lieb-presentation-isomorphism`.
2. `cor-invertible-matrix-has-unit-determinant` — frontmatter `title`. The title says an invertible square matrix has unit determinant without the positive-size restriction, while the Statement begins “Let $n\ge1$.” The same local zero-size shape and determinant-domain definitions apply. The title should specify positive size. This is nonfatal to the assigned use through `cor-square-matrix-invertible-iff-determinant-is-a-unit`, which itself states the positive-size condition. Assigned consumer: `thm-temperley-lieb-presentation-isomorphism`.

No other assigned-item or page defect was confirmed. No page withdrawal is proposed.

## Edits and validation

No assigned item or A-page prose was edited. No proof contract or verification metadata was changed. Since no item carrier changed, reflow, precheck, and the proof-layout command were not run. No validator or judge stamp was added.

## Source checks

- Ridout–Saint-Aubin, *Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra*, arXiv:1204.4505, §2 (printed/PDF pp. 4–8): opened the diagram and relation convention, reduced-word argument, normal form, corner-to-path correspondence, and Catalan count. Its algebraic dimension argument is over $\mathbb C$; the assigned arbitrary-ring statement is proved locally.
- Ernst–Hastings–Salmon, *Factorization of Temperley–Lieb diagrams*, publisher PDF, §§2–3 and Proposition 3.6 (printed pp. 90–101): opened the type-A relations, diagram multiplication, loop-free basis discussion, and isomorphism statement. The assigned all-ring determinant proof does not rely on this source's basis route.
- Vaughan F. R. Jones, *The Jones Polynomial*, §3, printed p. 6: opened the idempotent normalization and reduced-word Catalan upper-bound passage. The local sources keep this parameter conversion separate.
- David Guichard, *Combinatorics and Graph Theory*, §3.5 (printed p. 69): fetched the official HTML source directly; lines 506–514 state that properly matched length-$2n$ parenthesis sequences are counted by $C_n$ and match the closed formula. The diagram and normal-form bijections are proved locally.

## Blocker and coverage limit

No blocker remains for batch 57. The mechanically traversed dependency graph has 264 carriers including the assigned items; this audit did not re-audit every foundational proof in that full recursive closure. It did open all assigned carriers, their declared direct item suppliers, and the relevant transitive suppliers described above. Findings are limited to the two nonfatal published title-scope issues listed above.
