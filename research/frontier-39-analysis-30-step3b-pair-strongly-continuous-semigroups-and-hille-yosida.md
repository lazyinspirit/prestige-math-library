# Step 3b report — pair `strongly-continuous-semigroups-and-hille-yosida`

- Run: `frontier-39-analysis-30`
- A page: `strongly-continuous-semigroups-and-hille-yosida` (batch 17, order 458.043, `pde`)
- B page: `strongly-continuous-semigroups-and-hille-yosida-examples` (batch 17, order 458.044)
- Role: alpha-high step3b scaffold auditor and item author (42-scaffold-ID batch 17 pair (33 A + 9 B))
- Report created at entry, 2026-10-05.
- The 42-item figures below are the original Step3b handoff baseline; the owner-approved
  Hille–Yosida enrichment is recorded in the addendum at the end.

## Owned items (dependency order, as dispatched)

Level 0: `def-dissipative-operator`, `def-resolvent-of-a-closed-operator`,
`def-strongly-continuous-semigroup`, `lem-exponential-series-of-a-bounded-operator`,
`lem-linearity-of-the-bochner-integral`,
`lem-mean-value-inequality-for-a-differentiable-banach-valued-curve`,
`thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class`.

Level 1: `def-infinitesimal-generator-of-a-c-zero-semigroup`,
`lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval`,
`lem-average-convergence-of-a-continuous-banach-valued-function`,
`cex-translation-semigroup-is-not-strongly-continuous-on-linfinity` (B).

Level 2: `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves`,
`lem-integrated-semigroup-orbits-belong-to-the-generator-domain`,
`lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity`,
`lem-strong-continuity-at-zero-implies-orbit-continuity`,
`thm-exponential-bound-for-a-c-zero-semigroup`,
`ex-bounded-operator-exponential-semigroup` (B),
`ex-multiplication-semigroup-and-its-generator` (B),
`ex-right-translation-semigroup-on-lp` (B).

Level 3: `cor-closed-invariant-subspace-restriction-is-a-c-zero-semigroup`,
`lem-semigroup-generator-commutes-with-orbits-on-its-domain`,
`lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing`,
`cex-strong-continuity-does-not-imply-operator-norm-continuity` (B).

Level 4: `def-classical-strong-and-mild-abstract-cauchy-solutions`,
`thm-generators-are-closed-and-densely-defined`,
`thm-semigroup-orbit-is-right-differentiable-at-zero-if-and-only-if-the-vector-is-in-the-generator-domain` (B).

Level 5: `def-yosida-approximants`,
`thm-laplace-transform-formula-for-the-semigroup-resolvent`,
`thm-variation-of-constants-formula`,
`thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`,
`cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero` (B).

Level 6: `cor-resolvent-power-estimates-for-semigroup-generators`,
`lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups`,
`cex-a-mild-solution-need-not-be-classical` (B).

Level 7: `lem-yosida-resolvent-converges-strongly-to-the-identity`.

Level 8: `lem-yosida-approximants-are-bounded-and-converge-on-the-domain`.

Level 9: `thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup`.

Level 10: `thm-hille-yosida-generation-theorem`.

Level 11: `cor-contraction-hille-yosida-theorem`,
`rem-semigroup-sign-and-generator-conventions`.

Level 12: `thm-lumer-phillips-generation-theorem`.

Level 13: `ex-dirichlet-heat-semigroup-from-the-laplacian` (B).

## Open obligations entered at start

1. All 42 item files are absent from `items/` (scaffold only). Each must be
   fully authored, registered and checked.
2. The two pages (`library/pde/strongly-continuous-semigroups-and-hille-yosida.md`,
   `library/pde/strongly-continuous-semigroups-and-hille-yosida-examples.md`)
   must be authored and must list only the assigned item IDs.
3. Page-level in-run prerequisite `constrained-variational-problems-and-variational-inequalities`
   (batch 16) is declared `requires`, status open; no item-level consumer exists
   (page edge only). Verify at handoff whether it is authored.
4. Five in-run item suppliers for `ex-dirichlet-heat-semigroup-from-the-laplacian`
   are absent from `items/` at entry:
   `def-ltwo-operator-associated-with-a-symmetric-elliptic-form` (batch 11),
   `lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded` (batch 11),
   `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent` (batch 11),
   `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator` (batch 11),
   `thm-poincare-inequality-for-w-one-p-zero` (batch 4).
   The consumer must be authored with these obligations stated and its decision
   left escalated until the suppliers and actual proof uses are reconciled.
5. Batch-17 manifest, coverage and cross-batch files must be preserved for
   sibling pairs in other batches; only batch-17 records may be touched.
6. Run `node tools/proof-layout.mjs items/<changed>.md ...` once at the end over
   all changed item paths; run precheck/rendercheck/content-policy/
   item-dependency-levels/validate-plan per containing batch (17).

## Checkpoints

**Level 0 (7/7 authored).** `def-dissipative-operator`,
`def-resolvent-of-a-closed-operator`, `def-strongly-continuous-semigroup`,
`lem-exponential-series-of-a-bounded-operator`,
`lem-linearity-of-the-bochner-integral`,
`lem-mean-value-inequality-for-a-differentiable-banach-valued-curve`,
`thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class`.
Each file written with the audited manifest statement (verbatim except two
LaTeX repairs, see below), frontmatter deps/level/provenance/sources from the
manifest, and a full proof. Checked per item with
`tools/precheck.mts` (fail→adopt canonical numbering) and `tools/rendercheck.mjs`;
all pass individually. Two statement-text LaTeX repairs inside item files only
(claims unchanged, scope-hash-bearing manifest text untouched):
`thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class`
(literal `\n` before `\le` removed) and
`thm-semigroup-orbit-is-right-differentiable-at-zero-if-and-only-if-the-vector-is-in-the-generator-domain`
(unclosed `$(A,D(A))` closed) — the latter authored at level 4; Step 4/5 should
reconcile the manifest text.

**Level 1 (4/4 authored).** `def-infinitesimal-generator-of-a-c-zero-semigroup`,
`lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval`,
`lem-average-convergence-of-a-continuous-banach-valued-function`,
`cex-translation-semigroup-is-not-strongly-continuous-on-linfinity`. All pass
precheck/rendercheck. Choice note: the local-boundedness lemma selects a
sequence $t_n$ (Countable Choice, implied by the DC carried by the cited
uniform boundedness principle); the item body states this exactly. Deps added
in the manifest and item: `thm-heine-cantor-metric`, `thm-heine-borel-rn` for
`lem-average-convergence-of-a-continuous-banach-valued-function` (uniform step
approximation) — these are published A-page suppliers.

**Level 2 (8/8 authored).** `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves`,
`lem-integrated-semigroup-orbits-belong-to-the-generator-domain`,
`lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity`,
`lem-strong-continuity-at-zero-implies-orbit-continuity`,
`thm-exponential-bound-for-a-c-zero-semigroup`,
`ex-bounded-operator-exponential-semigroup`,
`ex-multiplication-semigroup-and-its-generator`,
`ex-right-translation-semigroup-on-lp`. All pass precheck/rendercheck. Deps
added: `thm-bounded-linear-maps-commute-with-bochner-integration` and
`thm-lebesgue-outer-measure-and-measurability-are-translation-invariant` for
the integrated-orbits lemma; `thm-holder-inequality-for-integrals`,
`thm-locally-integrable-functions-embed-in-distributions`, `def-countable-choice`,
`lem-average-convergence-of-a-continuous-banach-valued-function`,
`thm-bounded-linear-maps-commute-with-bochner-integration`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`def-conjugate-exponents` for the right-translation example (forward direction
uses the distribution-embedding injectivity, which assumes AC_ω; the example
body now declares that the verification assumes Countable Choice — the
scaffold's "translation example needs no choice" note is inaccurate because the
cited translation-continuity theorem already assumes AC_ω).

**Level 3 (4/4 authored).** `cor-closed-invariant-subspace-restriction-is-a-c-zero-semigroup`,
`lem-semigroup-generator-commutes-with-orbits-on-its-domain`,
`lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing`,
`cex-strong-continuity-does-not-imply-operator-norm-continuity`. All pass
precheck/rendercheck; no new deps.

**Level 4 (3/3 authored).** `def-classical-strong-and-mild-abstract-cauchy-solutions`
(the four solution notions, their hierarchy and the exact differentiability each
requires), `thm-generators-are-closed-and-densely-defined` (closedness by passing
a convergent graph sequence through the integral identity; density by orbit
averages), `thm-semigroup-orbit-is-right-differentiable-at-zero-if-and-only-if-the-vector-is-in-the-generator-domain`
(B; both directions with the `t=0` case from the generator definition). The B
item's statement carries a LaTeX repair (unclosed `$(A,D(A))`); claims unchanged,
Step 4 reconciliation noted below.

**Level 5 (5/5 authored; one level recomputed).** `def-yosida-approximants`
(both formulae, commutativity, approximation property explicitly deferred),
`thm-laplace-transform-formula-for-the-semigroup-resolvent` (improper integral,
closedness, density, norm bound), `thm-variation-of-constants-formula`
(Duhamel rigidity, integral-solution uniqueness, classical upgrade; a stale step
reference corrected to `[steps 1.5, 2.1]`), `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`
(EN II.6 graph-norm reduction; `Assume Dependent Choice` added to the Statement
because the proof cites the closed graph theorem, and the sequence selections in
steps 1.3 and 4.2 are `AC_ω` instances; the declared level was recomputed
5 → 6 because `thm-laplace-transform-formula…` is level 5), and the B item
`cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero`
(Neumann-series inversion of the short-time integral; `Assume Dependent Choice`
added for the closed graph theorem).

**Level 6 (3/3 authored).** `cor-resolvent-power-estimates-for-semigroup-generators`
(induction from the Laplace formula), `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups`
(HB declared in the Statement; scalarisation by a norming functional), and the B
item `cex-a-mild-solution-need-not-be-classical` (the indicator is outside
`W^{1,p}` by a local one-dimensional computation, so the cross-B-page dependency
was removed and the item is self-contained; the mild solution is identified via
variation of constants and shown non-classical).

**Level 7 (1/1 authored).** `lem-yosida-resolvent-converges-strongly-to-the-identity`
(λR(λ,A)x → x first on D(A), then for all x by density, with the uniform bound).

**Level 8 (1/1 authored).** `lem-yosida-approximants-are-bounded-and-converge-on-the-domain`
(uniform bound on `A_λ` and `A_λx → Ax` from the resolvent power estimates).

**Level 9 (1/1 authored).** `thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup`
(Cauchy estimate for `E_λ(t)x` on `D(A)`, uniform convergence on compacts, limit
shown to be the generated semigroup; a duplicated wikilink was removed from [F2]).

**Level 10 (1/1 authored).** `thm-hille-yosida-generation-theorem` (necessity from
the Laplace formula and the power estimates, sufficiency through the bounded
Yosida approximants; forward wikilink to the level-11 corollary replaced by the
inline contraction-case clause, since a theorem may not use `forward_refs`).

**Level 11 (2/2 authored).** `cor-contraction-hille-yosida-theorem` (first-power
estimate implies all powers by submultiplicativity),
`rem-semigroup-sign-and-generator-conventions` (sign, resolvent and contraction
dictionaries; no proof obligations).

**Level 12 (1/1 authored).** `thm-lumer-phillips-generation-theorem` (equivalence
of (a)–(c), propagation of the resolvent set by the resolvent series, maximal
dissipativity; the cross-B-page Banach-algebra dependency was replaced by
A-page suppliers `thm-bounded-operator-space-is-banach`,
`lem-composition-operator-norm-inequality`, `def-unital-banach-algebra` and
`def-operator-norm`, with the telescoping computation covering real `X`).

**Level 13 (1/1 authored, decision escalated).** `ex-dirichlet-heat-semigroup-from-the-laplacian`
was reconciled with the now-authored batch-11/batch-4 suppliers: with
`a^{ij}=δ^{ij}`, `b=0`, `c=0` the Gårding constant is `β=1/2`, `μ₀=1≥β`, `L`
is self-adjoint with compact inverse and `I+L` is bijective; the discrete
spectrum supplies the orthonormal basis and the weak eigenvalue list; `λ₁>0`
follows from positivity of the form plus the Poincaré inequality (0 is not an
eigenvalue). Each supplier use is cited at the consuming step, and steps 1.1–1.2
were rewritten to the suppliers' exact claims. All five suppliers exist and pass
`precheck` at handoff time; because one of them was still being written during
this session, the item decision is left **escalated** for the owner (see Open
obligations).

## Structural repairs made after the first authoring pass

1. **Proof-section headings.** 27 theorem/lemma/corollary items carried their
   numbered steps directly under `## Facts & Assumptions`, and two
   counterexamples under `## Facts & Assumptions` as well. The content schema
   and every published item use `## Proof` (theorems/lemmas/corollaries),
   `## Counterexample` (counterexamples) or `## Verification` (examples), and
   `tools/proof-contract.mjs` can only parse steps inside those sections. A
   `## Proof` (resp. `## Counterexample`) heading was inserted before the
   `**Proof technique:**` paragraph of each affected item; 35 proof-bearing
   items now parse, 197 steps in total.
2. **B-leaf content boundaries.** Four items were repaired so no A-page item and
   no cross-page B item depends on examples-page content:
   `lem-exponential-series-of-a-bounded-operator`,
   `cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero`
   and `thm-lumer-phillips-generation-theorem` no longer cite
   `ex-bounded-operators-form-a-noncommutative-banach-algebra` (A-page suppliers
   `thm-bounded-operator-space-is-banach`,
   `lem-composition-operator-norm-inequality`, `def-unital-banach-algebra` are
   used instead), and `cex-a-mild-solution-need-not-be-classical` no longer
   cites the B item `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p`
   (the one-dimensional computation is carried locally in step 1.2).
   `depcheck` now reports no finding for any of the 42 items.
3. **Choice declarations.** `Assume Dependent Choice ([[def-dependent-choice]])`
   was added to the Statements of `lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval`,
   `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation` and
   `cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero`,
   with the exact uses stated in each Given (DC via the uniform boundedness
   principle and the closed graph theorem; `AC_ω` sequence selections declared
   as consequences of DC). The Definition of
   `def-resolvent-of-a-closed-operator` states the DC cost of the bounded inverse.
   `def-dissipative-operator` declares HB only for the norm-duality form,
   `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups`
   declares HB in its Statement, and the examples declare Countable Choice
   (`ex-multiplication-semigroup-and-its-generator` in the Statement;
   `ex-right-translation-semigroup-on-lp` and
   `ex-dirichlet-heat-semigroup-from-the-laplacian` in the Statement/Given with
   AC where the batch-11 suppliers require it).
4. **Choice-free repair.** The sequence `p_n` of polynomials in step 4.1 of
   `thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class`
   was replaced by a uniform `η`-argument with one polynomial per `η`, so that
   proof is choice-free.
5. **Level recomputation.** `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`
   moved from dependency level 5 to 6 (its actual deps include the level-5
   Laplace-formula theorem); item metadata and manifest entry agree.
6. **Mechanics.** A stray `<!-- BODY -->` marker was removed from
   `def-strongly-continuous-semigroup`; the stale step reference
   `[steps 1.5-2.2]` in `thm-variation-of-constants-formula` became
   `[steps 1.5, 2.1]`; the unused norm-inequality fact in
   `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves` was
   removed so every fact is cited; a duplicate wikilink in
   `thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup` was
   removed. `proof-layout` reported 42 items / 197 steps / 0 defects.

## Statement amendments owed to Step 4 (manifest text unchanged)

The following item-file Statement sections differ from the scope-hash-bearing
manifest text; every promised claim is preserved, but Step 4 must reconcile the
plan/manifest text with the authored items:

1. `lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval`:
   prefix `Assume Dependent Choice ([[def-dependent-choice]]).`
2. `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`:
   prefix `Assume Dependent Choice ([[def-dependent-choice]]).`
3. `cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero`:
   prefix `Assume Dependent Choice ([[def-dependent-choice]]).`
4. `thm-hille-yosida-generation-theorem`: the clause
   `(the first power alone is sufficient exactly in the contraction case ([[cor-contraction-hille-yosida-theorem]]))`
   became `(the first power alone is sufficient exactly when $M=1$, the
   contraction case, where all higher power estimates follow from the single one
   by submultiplicativity (treated later on this page))`, removing a
   theorem-level forward link to a later item.
5. `thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class`:
   literal `\n` before `\le` removed.
6. `thm-semigroup-orbit-is-right-differentiable-at-zero-if-and-only-if-the-vector-is-in-the-generator-domain`:
   unclosed `$(A,D(A))` closed.
7. Definition sections of the definition items
   (`def-strongly-continuous-semigroup`, `def-infinitesimal-generator-of-a-c-zero-semigroup`,
   `def-resolvent-of-a-closed-operator`, `def-dissipative-operator`,
   `def-classical-strong-and-mild-abstract-cauchy-solutions`, `def-yosida-approximants`)
   carry the manifest Definition text plus an authoring elaboration; the claims
   are unchanged. Counterexample items carry the manifest statement texts plus a
   `**Refuted claim.**` paragraph. Page prose was corrected (the A-page closing
   sentence now states the DC/HB bookkeeping accurately).

## Choice ledger (exact uses)

- **DC via the closed graph theorem**: `def-resolvent-of-a-closed-operator`
  (boundedness of the inverse in its Definition), `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`
  (steps 2.1, 3.1, 4.1–4.2), `cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero`
  (step 4.1). These statements now declare DC and its consumers inherit it.
- **DC via the uniform boundedness principle**: `lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval`
  (step 1.1 selects `t_n`; `AC_ω`, a consequence of DC). Its consumers
  (`lem-strong-continuity-at-zero-implies-orbit-continuity`,
  `thm-exponential-bound-for-a-c-zero-semigroup`,
  `thm-generators-are-closed-and-densely-defined`, and downstream) inherit the
  assumption through the cited supplier.
- **Hahn–Banach**: `def-dissipative-operator` (norm-duality form only; the
  primary inequality and Hilbert real-part form are stated choice-free) and
  `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups`
  (step 4.1, point separation through the norming corollary).
- **Axiom of Choice + Countable Choice**: `ex-dirichlet-heat-semigroup-from-the-laplacian`
  (Statement; used only through the batch-11 compactness/spectral suppliers in
  steps 1.1–1.2).
- **Countable Choice**: `ex-multiplication-semigroup-and-its-generator`
  (Statement/Given) and `ex-right-translation-semigroup-on-lp` (Given; the
  translation-continuity theorem and the distribution embedding assume it).
- **Choice-free by construction**: the Bochner-calculus lemmas, the mean value
  inequality, the exponential series (its body says so), the exponential bound,
  and `thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class`
  after repair 4 above.
- One standard `AC_ω` density selection remains unremarked in
  `thm-laplace-transform-formula-for-the-semigroup-resolvent` (step 4.1 selects
  `y_n∈D(A)` with `y_n→y`), consistent with published-corpus practice, which
  declares only load-bearing choice principles; it is reported here for
  completeness.

## Proof contracts and boundary audit

`research/frontier-39-analysis-30-batch-17.proof-contracts.json` (version 1) now
holds 42 entries: 231 citation contracts over the 35 proof-bearing items (each
quoting the cited item's own Statement/Definition/Example/Remark section and
listing every numbered step that cites the fact), 197 derivations mapping every
numbered proof step with its stated inputs, and 336 boundary rows (all eight
axes for every item), each with item-specific evidence. Checks run and results:

- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-17.proof-contracts.json --strict`
  → `0 error(s), 0 warning(s), 42/42 item(s) checked`.
- `node tools/boundary-audit.mjs research/frontier-39-analysis-30-batch-17.proof-contracts.json --fail-on-contradicted --fail-on-template`
  → 336 rows, 0 `not_applicable`, no template cluster and no contradicted
  disposition.
- `node tools/regen-contract-entries.mjs` was used to regenerate citations and
  derivations from the current item text after every repair.

## Checks actually run at handoff

- `node tools/tsx-run.mjs tools/precheck.mts <all 42 item paths>` →
  `35 checked, 0 failing — all clean` (7 definitions/remarks are n/a).
- `node tools/rendercheck.mjs <all 42 item paths>` → OK, 42 files; and OK for
  the two page files.
- `node tools/proof-layout.mjs <all 42 item paths>` → `42 items, 197 steps, 0 defects`
  (run once, batched, after the final edits).
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-17.pages.json`
  → 42 items, 0 errors.
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-17.pages.json`
  → 42 scoped items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-17.coverage.json --require-destination`
  → 2 pages, 100 harvested results, 0 errors, 1 warning (confirmed B-page
  low-yield decline set).
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` →
  one remaining error, in another pair (`thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`,
  declared 14 vs computed 13); all 42 owned items now agree with their computed
  levels.
- `node tools/validate-plan.mjs research/plan-spec.json` → OK (acyclic, ordered,
  no unresolved ids among pages with item lists).
- `node tools/depcheck.mjs --items-file <42 ids>` → no finding naming any owned
  item (the repo-wide run still fails on other pairs' pre-existing defects).
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase final`
  → all 41 accept receipts current; the Dirichlet example remains the only owned
  escalation; the pair scope decision is closed.

## Dependency changes recorded in items and in the batch-17 manifest

Added: `thm-heine-cantor-metric`, `thm-heine-borel-rn`
(`lem-average-convergence-of-a-continuous-banach-valued-function`);
`thm-bounded-linear-maps-commute-with-bochner-integration`,
`thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`,
`def-bounded-linear-operator` (`lem-integrated-semigroup-orbits-belong-to-the-generator-domain`);
`thm-holder-inequality-for-integrals`,
`thm-locally-integrable-functions-embed-in-distributions`, `def-countable-choice`,
`lem-average-convergence-of-a-continuous-banach-valued-function`,
`thm-bounded-linear-maps-commute-with-bochner-integration`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`def-conjugate-exponents` (`ex-right-translation-semigroup-on-lp`);
`thm-generators-are-closed-and-densely-defined`,
`lem-average-convergence-of-a-continuous-banach-valued-function`,
`def-infinitesimal-generator-of-a-c-zero-semigroup` (`thm-variation-of-constants-formula`);
`thm-closed-graph-theorem`, `thm-exponential-bound-for-a-c-zero-semigroup`,
`thm-laplace-transform-formula-for-the-semigroup-resolvent`,
`lem-semigroup-generator-commutes-with-orbits-on-its-domain`, `def-normed-subspace`,
`def-dependent-choice` (`thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`);
`thm-laplace-transform-formula-for-the-semigroup-resolvent`,
`lem-average-convergence-of-a-continuous-banach-valued-function`
(`thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup`);
`def-dissipative-operator`, `def-uniformly-elliptic-divergence-form-operator`,
`thm-garding-inequality-for-a-divergence-form-elliptic-operator`
(`ex-dirichlet-heat-semigroup-from-the-laplacian`);
`def-dependent-choice`, `thm-bounded-operator-space-is-banach`,
`lem-composition-operator-norm-inequality`, `def-unital-banach-algebra`
(`cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero`);
`def-dependent-choice` (`lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval`);
`thm-bounded-operator-space-is-banach`, `lem-composition-operator-norm-inequality`,
`def-unital-banach-algebra`, `def-operator-norm` (`thm-lumer-phillips-generation-theorem`).
Removed: `ex-bounded-operators-form-a-noncommutative-banach-algebra` from three
items and `cex-a-jump-across-a-hypersurface-is-not-in-w-one-p` from
`cex-a-mild-solution-need-not-be-classical` (B-leaf repairs); the dependency on
the cross-B-page example was the only removal. Manifest and item frontmatter
agree for all 42 items.

## Concerns in other pairs (reported, not edited)

1. `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation` (in-run,
   another pair) declares `dependency_level: 14` against a computed 13
   (`item-dependency-levels check`).
2. `library/pde/interior-and-boundary-sobolev-elliptic-regularity.md` lists 19
   items that are not on disk (`depcheck page-item-missing`); that page belongs
   to another pair of this run.
3. The repo-wide `depcheck` run keeps pre-existing failures in unrelated pairs
   (B-leaf edges such as `cex-sharp-frequency-cutoffs-do-not-have-uniform-lone-kernels`,
   and the `lax-milgram-and-weak-elliptic-solutions` owner scope pending).
   None of them names an owned item.

## Open obligations and escalations at handoff

1. **`ex-dirichlet-heat-semigroup-from-the-laplacian` (decision escalated).**
   The consumer is fully authored and reconciled with
   `def-ltwo-operator-associated-with-a-symmetric-elliptic-form`,
   `lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded`,
   `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent`
   and `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`; the
   remaining flagged supplier is `thm-poincare-inequality-for-w-one-p-zero`
   (batch 4), used in step 1.2 for `λ₁>0`. That supplier was still being written
   during this session (it failed `precheck` mid-session and passes at handoff);
   the owner must verify its completed statement/proof against the step-1.2 use
   before resolving the escalation to `accept`.
2. **Six statement amendments vs the scope-hash-bearing manifest** (listed
   above) require Step-4 reconciliation; none removes a promised claim.
3. The A page's plan `requires` edge to
   `constrained-variational-problems-and-variational-inequalities` (batch 16)
   points at a page that is not yet authored; no item of this pair consumes it —
   a Step-4 splice/declaration matter.
4. `def-resolvent-of-a-closed-operator` carries the DC cost of the closed graph
   theorem in its Definition body rather than in a separate declaration; if the
   owner prefers the DC convention in the statement text, that is a scope-text
   decision for Step 4.
5. **Sharpness clause witnessed by owner-approved enrichment.** The new B-page
   item below supports the statement that all resolvent powers are required in
   general when $M>1$. The neighbouring contraction-case clause remains aligned
   with `cor-contraction-hille-yosida-theorem` ($M=1$).

## Handoff checklist

- [x] All 42 owned item files authored under `items/`, all passing precheck
      (35 proof-bearing) and rendercheck (42).
- [x] Both pages authored and registered:
      `library/pde/strongly-continuous-semigroups-and-hille-yosida.md` (33 items),
      `library/pde/strongly-continuous-semigroups-and-hille-yosida-examples.md` (9 items),
      both rendercheck-clean and matching the batch-17 manifest.
- [x] `research/frontier-39-analysis-30-batch-17.proof-contracts.json` written and
      passing `--strict` plus the boundary audit.
- [x] Step-3 item decisions recorded: 41 `accept`, 1 `escalate`
      (`ex-dirichlet-heat-semigroup-from-the-laplacian`).
- [x] Batch-17 manifest, coverage, cross-batch records and page prose updated;
      sibling rows untouched; `manifest-integrity` reports no scope drift.
- [x] Formatter run once, batched, after the final edits
      (`proof-layout`: 42 items, 197 steps, 0 defects).

## Owner-approved enrichment — 2026-10-05

The owner authorized and added `cex-first-resolvent-estimate-does-not-give-hille-yosida-bound`
as a level-11 counterexample on the B page. Its canonical item file is
`items/cex-first-resolvent-estimate-does-not-give-hille-yosida-bound.md`; the B-page `examples`
list now has 10 items. The batch-17 manifest has 43 items, and the scope report records the
matching coverage row and proof-contract entry.

The witness uses $X=\mathbb C^2$ with the maximum norm and
$A=\begin{pmatrix}-1&4\\0&-1\end{pmatrix}=-I+4N$, where $N^2=0$. For each $\lambda>0$,
Direct inversion gives $R(\lambda,A)=\begin{pmatrix}(\lambda+1)^{-1}&4(\lambda+1)^{-2}\\0&(\lambda+1)^{-1}\end{pmatrix}$ and, with $x=\lambda/(\lambda+1)$, $\lambda\|R(\lambda,A)\|_\infty=5x-4x^2=\frac{25}{16}-4\left(x-\frac58\right)^2\le\frac{25}{16}$.
where $x=\lambda/(\lambda+1)$. At $\lambda=3$,
At $\lambda=3$, $R(3,A)^2=\begin{pmatrix}1/16&1/8\\0&1/16\end{pmatrix}$ and $\|R(3,A)^2\|_\infty=\frac{3}{16}=\frac{27}{144}>\frac{25}{144}=\frac{M}{3^2}$.
Also $e^{tA}=e^{-t}\begin{pmatrix}1&4t\\0&1\end{pmatrix}$, so
$\|e^{A/2}\|_\infty=3e^{-1/2}>25/16$. Thus the first-power resolvent estimate holds for every
positive parameter while the second-power estimate and prescribed semigroup bound fail.

The preceding checks and receipts describe the original 42-item handoff. No receipts, gates,
test suites, or Step4 controls were touched during this addition. Per CLAUDE §5, the required
post-edit formatting check was run once on the new item: `proof-layout` reported 1 item, 5 steps,
0 defects. No precheck, rendercheck, or workflow gate was run for the new item.

## Owner-authorized B17 proof and ledger repairs — 2026-10-05

The corollary `cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero` now proves boundedness without Dependent Choice or the closed graph theorem. For a short time `t`, define `Vx=integral_0^t T(s)x ds` vectorwise. Operator-norm continuity gives `||V-tI||<=t/2`, so the Neumann series makes `V` onto; the integrated-orbits identity gives `VX subset D(A)` and `AV=T(t)-I`. Therefore `D(A)=X` and `A=(T(t)-I)V^{-1}` is bounded. The unnecessary Dependent Choice and closed-graph dependencies were removed; the remaining dependencies are those used by this proof.

The heat example `ex-dirichlet-heat-semigroup-from-the-laplacian` now establishes positive-time smoothing by uniform convergence of eigen-expansion tails in the graph norm on every compact interval bounded away from zero. It asserts only the `L^2` initial trace for general data and retains classical evolution at zero for data in `D(A)`; it does not identify `D(A)` with a spatial `H^2` space. The Statement and Given now require `Omega` to be nonempty as well as bounded and open, which is needed for the infinite eigenbasis and positive-eigenvalue notation. The batch-17 manifest and empty-boundary proof-contract entry are synchronized to this text.

The cross-batch input now records the two direct heat-example suppliers reviewed against step 1.1: `def-uniformly-elliptic-divergence-form-operator` (identity coefficients, ellipticity constant 1) and `thm-garding-inequality-for-a-divergence-form-elliptic-operator` (the explicit `beta=1/2`, with shift `mu_0=1`). The declared page prerequisite `constrained-variational-problems-and-variational-inequalities` is verified against its on-disk page and batch-16 manifest. The form-operator, density/lower-bound, and shifted self-adjoint compact-resolvent heat rows remain verified. The discrete-spectrum row is now verified against the final B11 supplier: both statements require nonempty open Omega, and its revised proof establishes infinite dimensionality of L^2(Omega) by disjoint positive-measure subboxes before enumerating the compact-resolvent eigenbasis. B17 uses this interface in the statement and steps 1.2, 3.1-3.2 and 4.1; its bounded nonempty Omega and mu_0=1>=beta=1/2 satisfy the supplier hypotheses. The Poincare row is verified against the B4 reviewer’s final correction: step 1.2 is covered by the p=2 slab estimate, with the consumer's bounded nonempty Omega providing a bounded coordinate direction and its eigenvectors in H^1_0(Omega). The repaired proof integrates from the lower slab face, handles n=1 directly, and extends by W^1,p_0 closure.

No scope receipts, workflow gates or test suites were touched. After the final item edits, the required focused check `node tools/proof-layout.mjs items/cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero.md items/ex-dirichlet-heat-semigroup-from-the-laplacian.md` reported 2 items, 15 steps, 0 defects; no test suite was run.

## Current Step 3b hash refresh — 2026-10-05

This addendum supersedes the earlier handoff counts above. The latest task carrier was
`research/frontier-39-analysis-30-step3b-pair-strongly-continuous-semigroups-and-hille-yosida-06f75785f8031f7f.task.md`.
The current batch has 43 items (33 A + 10 B); all 43 Step 3 item decisions are current:
40 `accept`, 3 `repaired`, 0 `escalate` or open. The three repaired receipts are
`ex-dirichlet-heat-semigroup-from-the-laplacian`,
`cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero`,
and `cex-first-resolvent-estimate-does-not-give-hille-yosida-bound`.

The heat example's owner receipt was refreshed after its input hash changed. Its current
composite item hash is
`b06e84145e62d0c94896a8606df5348d1acf7dea2fb4f536cffc812a83d3afa9`; its 22 direct
dependencies and their current supplier decisions are closed. The item now declares
`def-strongly-continuous-semigroup` directly because fact F8 cites that Definition. The
batch-17 manifest and frontmatter are synchronized for this dependency. The example's
Statement and Definition are unchanged; no outside consumer source was edited.
The late B-page counterexample's B17 owner receipt was also refreshed at its unchanged
item hash `676419c956295b47411860750ff7aebb5d934a50ac59e50f1f84ecd6d438175d`, after the
batch-17 manifest update, so its owner-repair provenance is current for the later
auditor-created certification pass.

The strict-contract recheck found stale citations, step mappings and boundary anchors in
the heat example and the norm-continuity corollary. Their B17 contract entries were
regenerated and the unsupported heat fact labels were added to the corresponding proof
steps. The final focused checks pass: `proof-contract --strict` checks 43/43 items with
0 errors and 0 warnings; `proof-layout` checks 43 items and 203 steps with 0 defects.
No test suite or workflow gate was run.

All 8 batch-17 cross-batch dependency rows are `verified`, including the page prerequisite
from batch 16 and the seven heat-example suppliers from batches 4 and 11. There are no
remaining B17 Step 3 item or supplier blockers. Existing manifest/source Statement
reconciliation notes remain for Step 4; this lane changed no B17 Statement or Definition.
The run-wide `frontier-39-analysis-30-step3-auditor-certifications.json` carrier remains
for the normal whole-run certification pass after all batch writers drain; this isolated
lane did not write that shared carrier or attempt a workflow gate.

Current carrier hashes: B17 scope `ebad71339aef3a0c8ae44549e8486117454a6215545ef6f71e301dc0edc02ca8`;
batch-17 manifest `4d177784ef334660e115b8e64e21e54725abd179b3e619b56730957fdb299c44`;
proof contracts `1f6282530c9121439daf4f65b995cedc19057174b9168ac10c28303d91ac67e2`;
cross-batch dependencies `389ceabb328cad463a776f8636c8fb71a787049362edf3a07543f1d593f736f3`;
heat source SHA-256 `3c23221523b832168f7515c0b21ebef91bea8642500fb3e2a121fe84d10ca93f`.
