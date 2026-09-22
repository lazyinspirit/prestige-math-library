# Step-8 external-result inclusion review

Run: `phase-2-remaining-27`  
Role: Step-8 lead, second owner-authorized authoring pass  
Date: 2026-09-22

## Completed bounded authoring

The bounded mathematical carriers, page records and required metadata have been
authored and integrated.  All new items remain draft.

- `rem-lca-group-algebra-and-character-space-external` records, under AC, the
  general LCA $L^1$ convolution/star algebra, unit criterion, all-character
  classification and compact-open/one-point-compactification topology. Source:
  Williams, Example 3.10, printed p. 9,
  <https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf>; reused
  cached PDF `/tmp/prestige-batch5-sources/williams.pdf` and extraction lines
  716–762. The extraction drops the conjugation bar in the involution, so the
  item independently uses the correct $f^*(s)=\overline{f(-s)}$.
- `ex-gelfand-transform-of-l-one-of-an-lca-group` proves the sum-norm
  unitization estimates, completeness, associativity and star identities, then
  evaluates the Gelfand transform relative to that external record. Exact
  external assumption: the preceding LCA algebra/character-space package.
- `rem-external-separable-trace-class-fredholm-determinant-theorem` records the
  separable complex trace-class determinant package, including AC, algebraic
  multiplicity, empty/zero-space conventions, Weyl summability, trace-norm
  approximation, product/growth/continuity, multiplicativity, derivative and
  zero-order claims. Source: Kostenko, §3.4, printed pp. 34–41,
  <https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf>; reused
  `/tmp/lidskii-investigation.Z5IbAE/IdealsNotes.pdf`, including the corrected
  complementary factor $I+z(I-P_\lambda)A$ where the source has a typographical
  omission.
- `def-fredholm-determinant` extends the recorded determinant to an arbitrary
  complex Hilbert space by a nuclear input/output support $M$, proving
  $T=S\oplus0$, equality of trace norms and nonzero singular/generalized
  eigenvalue data, and independence of representation/support. Dependencies
  include the draft nuclear-series, trace, positive-square-root and external
  determinant records and the batch-1 orthogonal decomposition theorem.
- `prop-fredholm-determinant-properties-for-trace-class-operators` transfers
  the external single-operator formulas, proves common-support
  multiplicativity and trace-norm approximation, and derives the logarithmic
  derivative locally.
- `thm-lidskii-for-trace-class-operators` proves
  $\operatorname{tr}T=\sum_j\lambda_j(T)$ for arbitrary complex Hilbert space
  from the determinant product and its derivative at zero, with an explicit
  quadratic product remainder; no normality or separability is assumed.
- `rem-fredholm-maps-have-countable-proper-local-restrictions` and
  `rem-critical-images-of-proper-local-fredholm-restrictions-are-nowhere-dense`
  record exactly the two external Smale inputs on the existing batch-3 Banach
  manifold page. Source: Smale (1965), Theorem (1.6) and proof of Theorem
  (1.3), pp. 862–863,
  <https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf>;
  reused `/tmp/step8-sard-smale-original.pdf`. The page order is supported by
  the earlier local Fredholm normal-form lemma and creates no forward proof
  dependency.
- The stable published identity
  `thm-sard-smale-residual-regular-values-for-fredholm-maps` now gives a
  complete relative countable-union proof from those two external records and
  explicitly assumes AC. Its stale judge row was removed. The AC interface was
  propagated to its actual direct consumer
  `lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics` and to
  the latter's only direct consumer
  `thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function`; the second
  stale judge row was removed.

Every new ordinary proof-bearing carrier contains the exact visible text
“proof uses external results not yet established in this library”. New items
remain draft. No judge verdict, audit stamp, auditor certificate, baseline or
engine state has been written.

## Integration and dependency disposition

- The two LCA records were added to the existing batch-4 Gelfand A page; the
  four determinant/Lidskii records were added to the existing batch-3
  trace-class A page; and the two Smale records were inserted after the local
  Fredholm normal-form lemma on the existing batch-3 Banach-manifold A page.
  No page, batch, theorem duplicate, or forward proof dependency was created.
- The batch-3/4 manifests and proof contracts, `research/plan-spec.json`, the
  three page records, batch coverage ledgers, planning prose and relevant
  published-consumer ledger row were reconciled to the exact new identities.
  The four former deferral rows now record included or already-published
  status rather than a hopeful future label.  The later determinant and FR-16
  modules now explicitly own internalization of the external assumptions, not
  duplicate stable definitions or theorems.
- The determinant definition has two current cross-batch dependencies:
  `thm-orthogonal-decomposition-by-a-closed-subspace` and
  `thm-sequential-characterization-of-compact-operators`.  Both supplier
  interfaces were read and verified in
  `research/phase-2-remaining-27-batch-3.cross-batch-dependencies.json`.
  The unified frontier ledger was refreshed after these rows: all 15 batches
  are reviewed and all 1,113 current edges have review evidence; 1,098 are
  verified and the retained non-verified dispositions are historical removed
  edges, not open dependencies of these additions.
- Shared-metadata writes used the short write lock and reread the target files
  under that lock.  The merged run proof contract now has 990 scoped items;
  the regenerated audit manifest reports 9,330 relationships over 1,040 items
  and zero defects.  The original `alpha-step8-review.md` and Step-8 attempt
  evidence were not overwritten.

## Exact remaining external assumptions and publication limits

1. `rem-lca-group-algebra-and-character-space-external` still assumes the
   general LCA Haar-convolution Banach-star-algebra facts, the unit iff
   discrete criterion, classification of every unitization character, local
   compactness of the compact-open dual, and the one-point-compactification
   topology identification.
2. `rem-external-separable-trace-class-fredholm-determinant-theorem` still
   assumes the separable complex determinant construction, nonnormal Weyl
   summability, trace-norm finite-rank limit, spectral product, minimal-type
   growth, continuity, multiplicativity, derivative and zero-order theorem.
   The arbitrary-space support reduction and final Lidskii differentiation are
   proved locally relative to that package.
3. The two Smale remarks still assume the countable closed proper-localization
   package and the closed nowhere-dense critical-image conclusion at the exact
   fixed-index differentiability threshold.  Sard--Smale's countable category
   argument is now local and explicit relative to those assumptions.

The published Sard--Smale theorem now directly rests on two draft external
records, and the Baire-diagonal and Morse--Smale theorems inherit that marker.
Consequently none is publication-ready merely because the logical repair is
present.  The materially changed published theorem and its two direct consumer
levels need fresh engine-owned judgment; the draft external records need their
normal engine-owned author-origin evidence and publication transition (or
later replacement by full local proofs).  No verdict, audit stamp,
certification, baseline or engine state was written in this dispatch.

## Checks actually run

- Focused proof precheck: six proof-bearing changed items passed cleanly; the
  three new proof items and the three changed published items record
  `verification.precheck: pass` only after that run.  External remarks retain
  `precheck: n/a` and contain no Proof/Refutation section.
- Strict proof contracts: all six selected batch-3 entries and both selected
  batch-4 entries passed with zero errors/warnings.  Risk review routed the
  determinant/Lidskii and LCA records as expected and found complete recorded
  reviews.  Finite smoke found no mathematically applicable registered finite
  model.  Boundary audit found no contradicted disposition; its repeated
  not-applicable wording is non-load-bearing and was read rather than treated
  as a verdict.
- Targeted rendercheck: all 14 changed item/page files passed real KaTeX,
  delimiter, wikilink-in-math and YAML rendering checks after reflowing display
  math to the renderer's one-source-line form.
- Batch-3 and batch-4 content policy passed with 151 scoped items and no
  errors/warnings.  Both coverage checklists now pass with 61 and 102 harvested
  results respectively.  Manifest dependency check passed for 151 items, and
  splice-plan verification found the plan byte-equivalent to all 54 pages in
  all 15 manifests.
- `depcheck --quiet` completed with no dependency errors (only repository-wide
  legacy warnings).  `extcheck` passed: every recorded-not-proved statement is
  a cited proofless remark and every consequence is marked; it correctly
  reports the Sard--Smale published cone as resting on external material.
  The refreshed frontier ledger passes `--require-reviewed`.
- Two repository-wide checks retain unrelated existing residue.  `fwdcheck`
  reports two undeclared forward references in the published Polish-space
  items `thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space`
  and `thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space`;
  neither is in this dispatch's allowed repair scope.  The scope-decision
  refresh removed the four superseded deferrals, but the global decision check
  still reports seven pre-existing pending and several stale group-B rows.
  No out-of-scope owner decision or hash was invented to hide those failures.
