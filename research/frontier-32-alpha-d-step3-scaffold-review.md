# frontier-32 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batches `7`, `16`, and `17`, comprising four A/B pairs. I
reviewed every pair's manifest, coverage, notes, controlling design section,
and current `research/plan-spec.json` record. I also read the exact statements
of every external dependency used by the four item graphs and the complete
relevant source passages identified below.

| A page | batch | A/B items | verdict |
|---|---:|---:|---|
| `perron-inversion-and-the-explicit-formula` | 7 | 14 / 7 | **sufficient** |
| `prime-ideal-decomposition-ramification-and-the-different` | 7 | 23 / 8 | **insufficient** |
| `homomorphisms-between-verma-modules-and-linkage` | 16 | 20 / 5 | **sufficient** |
| `schur-indices-and-fields-of-definition` | 17 | 15 / 4 | **sufficient** |

The insufficient verdict names two authoring defects in the existing page,
source range, and backward interface. It does not request a new page, forward
edge, or reading-order change.

## Authority, routes, and pair boundaries

The manifests and current plan agree on every page id, kind, category, title,
order, companion, and page-level prerequisite:

- NT-15 is at `348.013/348.014` and requires
  `primitive-dirichlet-l-functions-and-functional-equations-examples`.
- NT-20 is at `365.913/365.914` and requires
  `number-fields-rings-of-integers-and-discriminants-examples`.
- RL-3 is at `510.005/510.006` and requires
  `verma-modules-and-shapovalov-forms-examples`.
- RG-3 is at `510.035/510.036` and requires
  `brauer-induction-and-elementary-subgroups-examples`.

The plan's item arrays are still empty, as expected before splicing. Dry-run
splicing reports exactly `4 pages / 52 items` for batch 7, `2 / 25` for batch
16, and `2 / 19` for batch 17. Every external item dependency either occurs
on the declared prerequisite page or in its transitive backward closure; every
B item is a leaf depending only on its A page or earlier published material.
The one batch-17 dependency not represented by a current plan item array,
`def-finite-symmetric-group-and-permutation-notation`, is already published on
the backward prerequisite page
`symmetric-groups-and-the-sign-homomorphism`.

## Pair reviews

### `perron-inversion-and-the-explicit-formula` — sufficient

The A spine is coherent and closed: `def-starred-summatory-function`,
`lem-perron-kernel`, `lem-truncated-perron-kernel`, `thm-perron-formula`,
`thm-truncated-perron-formula`, `def-half-weighted-chebyshev-psi`,
`def-riemann-zeta-zero-counting`,
`thm-riemann-von-mangoldt-zero-counting`,
`cor-zeta-zero-count-unit-interval`,
`lem-local-logarithmic-derivative-zeta`,
`lem-logarithmic-derivative-zeta-left-half-plane`,
`lem-von-mangoldt-explicit-formula-residues`,
`thm-von-mangoldt-explicit-formula-smoothed`, and
`thm-von-mangoldt-explicit-formula-truncated`. The seven B items test the jump,
finite-polynomial inversion, every residue, smoothing versus sharp cutoff,
admissible heights, unordered zero sums, and the right-continuous endpoint.

The conventions needed for exact authoring are explicit: symmetric vertical
limits; half weight only at positive integral endpoints; real logarithm in
`x^rho`; a finite symmetric zero sum in the sharp formula; convergence stated
for the smoothed sum; and residues at `1`, every nontrivial zero with
multiplicity, the negative even integers, and `0`. The hypotheses in the
published zeta, xi, functional-equation, argument-principle, Stirling, and
Hadamard-product dependencies match those uses.

Kedlaya Chapter 10, complete HTML §§10.1–10.4, supplies the Perron kernel,
truncation, residue ledger, zero-separated height choice, and logarithmic
derivative bounds. Andersen Chapters 11–12, PDF pp. 40–48 through Theorem
12.6, independently supply zero counting, smoothing, contour integration, and
the quantitative formula. The PNT, RH-error, and converse zero-location rows
are consequences rather than premises, so their out-of-scope dispositions
stand.

### `prime-ideal-decomposition-ramification-and-the-different` — insufficient

Most of the mathematical route is well designed. The item graph proceeds from
absolute norm and prime decomposition through the fundamental identity,
Dedekind–Kummer with its monogenic/index hypothesis, discriminant ramification,
the intrinsic trace dual and different, and finally the tame/wild exponent and
discriminant-valuation formula. Conrad §§3–4, PDF pp. 3–13, exactly support the
trace-dual, monogenic different, norm-of-the-different, prime-support, and
tame/wild claims. Milne Chapter 3, PDF pp. 60–68, exactly supports Theorems
3.34, 3.35, 3.41, and Proposition 3.53 for decomposition, discriminant
ramification, Dedekind–Kummer, and Eisenstein ramification.

Two material gaps remain:

1. The six `[M]` norm/tower targets are outside the declared Milne range.
   `def-absolute-norm-of-an-ideal`,
   `lem-nonzero-number-field-ideal-has-finite-quotient`,
   `thm-principal-ideal-norm-is-absolute-field-norm`,
   `thm-ideal-norm-is-multiplicative`, `cor-norm-of-a-prime-ideal`, and
   `thm-ramification-and-residue-degrees-in-towers` have no corresponding
   included or inline coverage row. In the live Milne v3.08 text, the exact
   support is Chapter 4, “Norms of ideals”, PDF pp. 69–71: the prime norm and
   residue degree, tower transitivity for residue degree, the numerical norm,
   and Propositions 4.1–4.2. Both `e` and `f` tower laws are stated together in
   Exercise 4-2 on PDF p. 84. These passages must be added to canonical
   coverage (with complete-range dispositions) before the source-labelled
   claims can be authored honestly.

2. The controlling design promises that all NT-20 proofs are finite algebra in
   ZF. Nevertheless, `def-ramification-index`,
   `thm-fundamental-identity-for-primes-in-number-fields`, and
   `thm-ideal-norm-is-multiplicative` import
   `thm-unique-factorisation-of-ideals-in-dedekind-domains`, whose exact
   published statement begins “Assume the Axiom of Choice” and whose proof
   invokes an AC-qualified local criterion. Carrying that dependency silently
   would change the promised foundational scope. The missing result is a
   number-field-specialized, ZF-valid ideal-factorisation interface, with the
   finite lattice/enumeration argument made explicit. Milne Theorems 3.7 and
   3.20, PDF pp. 50–54, are the identified mathematical source for integral
   and fractional ideal factorisation, but the local result must discharge the
   ZF refinement instead of importing the current AC hypothesis.

The remaining B examples are correctly bounded: the bad-index example retains
the Dedekind–Kummer qualification, the cyclotomic example is only a monogenic
preview, and the wild example asserts a lower bound rather than a false
formula determined by `e`.

### `homomorphisms-between-verma-modules-and-linkage` — sufficient

The A spine is authorable in the declared finite-dimensional complex
semisimple setting. It supplies the dot action and order, the
singular-vector/Hom identification, injectivity of nonzero Verma maps, the
simple-reflection embedding, central-character obstruction, linkage and
strong linkage, the Jantzen deformation/filtration/sum formula, the strong
linkage necessity theorem, finite composition multiplicities, and the generic
and antidominant simplicity corollaries. The 20 current item ids are exactly
the manifest ids from `def-dot-action-and-strong-linkage-order` through
`fs-equal-infinitesimal-character-implies-a-verma-homomorphism`; the five B
items specialize the route to `sl_2`, regular and singular `A_2`, and the two
false converses.

The external PBW, triangular-decomposition, Verma universal-property,
Shapovalov, root/coroot, Casimir, and Harish–Chandra interfaces are all earlier
and have compatible hypotheses. Etingof Exercises 8.14–8.15, Theorem 15.11,
Exercise 20.11, and Theorem 20.13 supply injectivity, rank-one embeddings,
central characters, the Jantzen filtration/sum formula, and strong linkage.
Sakellaridis §§1–3 and Lin Lectures 2 and 4 supply independent Verma,
category-O boundary, dot-action, and explicit low-rank support.

The category-O definitions, block decompositions, general filtrations,
Noetherianity, duality, Grothendieck-group material, and block linkage rows are
properly deferred to `category-o-finiteness-duality-and-blocks` at order
`510.007`; the self-extension row is properly deferred to
`projectives-standard-filtrations-and-bgg-reciprocity` at `510.009`. Neither
destination is used as a forward premise here. Harish–Chandra modules,
quasiparabolic stabilizers, GIT quotient language, and the full Coxeter
presentation are not load-bearing and remain out of scope.

### `schur-indices-and-fields-of-definition` — sufficient

The A route fixes a characteristic-zero field `F`, a finite group, a finite
cyclotomic splitting extension, and an absolutely irreducible constituent. It
then distinguishes character field from realization field, constructs Galois
conjugates, proves the scalar-extension orbit with common multiplicity,
identifies the character stabilizer, defines the Schur index, proves its
splitting-field independence, derives the exact smaller-field character
formula and degree divisibility, and compares multiplicity, division-algebra
index, and minimum realization degree. The final criterion separates
rational-valued from rationally realizable characters. The four B items give
the trivial, `S_3`, and quaternion cases and the rational-valued counterexample.

Wiese §§2.2, 2.3, and 2.5, PDF pp. 27–40, give the scalar-extension orbit,
absolute-irreducibility criterion, common multiplicity, endomorphism-algebra
index, realization criterion, and minimum-degree comparison. In particular,
Corollary 2.5.7 identifies multiplicity with division-algebra index, Definition
2.5.12 gives the minimum realization degree, and Remark 2.5.15 supplies the
equality omitted from the preceding upper bound. Zheng Proposition 4.3.2 and
Corollary 4.3.4, PDF pp. 150–151, independently give the orbit/multiplicity and
realization criterion; Proposition 4.6.14, p. 170, identifies the character
field with the division-algebra center and stabilizer fixed field. These exact
hypotheses match the manifest conventions.

The declined centralizer calculus, orthogonality development, finite-field and
positive-characteristic results, tensor twists, special degree bounds, and
non-splitting refinement are not premises of the selected route. Their
out-of-scope dispositions therefore stand.

## Scope decisions

I refreshed `research/frontier-32-alpha-d-scope-decisions.json` and resolved
all 52 current rows as `stands`, with row-specific evidence. For every deferred
batch-16 row, the evidence records the exact later destination and current
order; for every out-of-scope row, it records that the reviewed A/B graph has
no dependency on the named result and retains the result-specific rationale.

`node tools/scope-decisions.mjs check --run frontier-32 --group d` reports 52
current declines and 0 errors. No row requires `owner-decision` because none
requests a new page, forward dependency, or reading-order change.

## Validation and next action

The focused checks on the reviewed bytes produced these results:

- `manifest-deps`: batch 7 `52`, batch 16 `25`, batch 17 `19` items; no
  normalization or errors.
- `content-policy --manifest-only`: `0` errors and `0` warnings for each batch.
- `coverage-checklist --require-destination`: batch 7 `2 pages / 88 results`,
  `0` errors/warnings; batch 16 `1 / 75`, `0` errors and one low-yield
  advisory; batch 17 `1 / 61`, `0` errors and one low-yield advisory.
- `source-fetch-check`: batch 7 `4/4`, batch 16 `4/4`, and batch 17 `2/2`
  sources currently fetch-verified.
- `splice-plan --dry-run`: batch 7 `4 pages / 52 items`, batch 16 `2 / 25`,
  batch 17 `2 / 19`, all exit 0.
- `validate-plan research/plan-spec.json`: exit 0; the current plan is acyclic
  and consistent. Its printed redundant-prerequisite advisories are global and
  unrelated to these four pairs.

No manifest, coverage, notes, published content, plan, reading order, or judge
artifact was changed. The next action is for the owning Beta to add the exact
Milne norm/tower coverage and a ZF-valid local ideal-factorisation interface
for NT-20, after which group `d` should refresh the decision file and re-run
the focused checks on the repaired bytes.
