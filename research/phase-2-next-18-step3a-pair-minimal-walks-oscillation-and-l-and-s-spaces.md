# Step 3a scope review — Minimal walks, oscillation, and L- and S-spaces

Run: `phase-2-next-18`  
Role: `alpha`  
A page: `minimal-walks-oscillation-and-l-and-s-spaces`  
B page: `minimal-walks-oscillation-and-l-and-s-spaces-examples`  
Review type: scope only; no item or proof approvals

## Scope decision

**Insufficient.** Enrich the existing A page; no pair merger is recommended.

## Exact omission

The binding SET-29 prose design expressly requires **Moore's topology on a
subspace of `T^{omega_1}`**. The current manifest instead stops at the abstract
clopen-generated space `(X,tau[X])`: `def-moore-l-space-topology` defines the
sets `W_xi intersect X`, and the subsequent items prove nonseparability,
hereditary Lindelöfness and the ZFC L-space theorem for that topology. Neither
that definition, its strategy, any later A item, nor the B-page membership
example states or proves the promised product-space realization. A search of
the owned run artifacts finds no `T^{omega_1}` or coordinate-embedding
contract.

This is a scope mismatch rather than a suspected error in Moore's argument.
Moore's complete paper defines `tau[X]` abstractly in Section 7 and proves its
topological properties in Theorems 7.6--7.7 and Corollary 7.8; it does not make
the prose design's product realization explicit. The coverage row's general
description “L-space topology” therefore does not itself discharge that extra
designed clause.

## Recommended owner action

Enrich `def-moore-l-space-topology`, or add one immediately following lemma,
with the canonical coordinate realization. For uncountable
`X subseteq omega_1`, define

`e_X(x)(xi) = -1` exactly when `x in W_xi intersect X`, and `e_X(x)(xi) = 1`
otherwise, padding unused coordinates by `1`. Then verify:

- `e_X` is injective: if `x < y`, the `y`-coordinate separates them because
  `y in W_y` while `x notin W_y`;
- the topology induced from the product on the image is exactly `tau[X]`, since
  its coordinate cylinders are the clopen subbasic sets and their complements;
- `{ -1,1 } subseteq T`, so this realizes `(X,tau[X])` as a subspace of
  `T^{omega_1}` (with the convention for `T` stated explicitly).

This repair is short and local, but it must be part of the planned contract
rather than left for an author to infer. After the enrichment and refreshed
coverage, the owner can decide whether to record `proceed`.

## Remaining scope evidence

- The 24-item A inventory otherwise covers every SET-29 strand: C-sequences,
  traces and minimal walks; coherent finite-to-one functions; oscillation and
  the finite-pattern colouring; Moore's clopen topology, nonseparability and
  hereditary Lindelöfness; the ZFC L-space; the Hart--Kunen CH S-space
  construction; the simple ideal dichotomy and its topology witness; PFA
  nonexistence of S-spaces; supercompact-relative consistency; and the final
  asymmetry statement.
- The three-item B page supplies the part of the joint SET-27--29 companion
  contract assigned naturally here: an explicit finite minimal walk/lower
  trace, an oscillation-pattern/clopen-membership computation, and the false
  dual-ZFC conclusion. The master-condition and other PFA examples belong to
  SET-27, and the Moore-development example belongs to SET-28.
- The overlap with SET-27 is real but does not justify merging the pairs.
  SET-27 owns generic proper-forcing/PFA and formal-consistency machinery;
  SET-29's local simple-dichotomy and topology-witness chain supplies the
  designed reflection application. Any final deduplication is an owner
  placement decision, not this scope blocker.
- The published `rem-l-spaces-and-s-spaces` replacement target asks for the ZFC
  L-space, PFA nonexistence/relative consistency, and CH existence directions;
  all have planned destinations. Current same-run PFA suppliers are marked
  ready, while the dependency ledger remains open only because they are not yet
  published. No item depends on the Recorded replacement target.
- I read Moore's complete 27-page paper, including the complete relevant
  arguments in Sections 2, 4, 5 and 7; Hart and Kunen's construction through
  Corollary 4.18, including the recursive refinement and CH scheduling proof;
  and Abraham's complete no-S-space topology reduction together with the
  recorded two-form ideal-dichotomy argument. The inaccessible Abraham-notes
  URL remains an honestly documented source drop; the official slides and the
  explicit local reconstruction cover the consumer claims, but neither bears
  on the product-space omission.

## Checks

- Whole-run `manifest-deps`: 533 items, 0 errors.
- Whole-run `content-policy --manifest-only`: 533 scoped items, 0 errors or
  warnings.
- Batch-9 `coverage-checklist --require-destination`: 2 pages, 36 harvested
  results, 0 errors or warnings.
- Batch-9 `source-fetch-check`: 6/7 sources fetch-verified and all 7 resolved,
  with one documented drop.
- No current Step-3a owner receipt exists for this A page.

This decision concerns scope only. It approves no statement, proof,
dependency proof, item, source interpretation beyond the evidence stated
above, or owner transition.
