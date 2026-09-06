# frontier-31 batch 8 — scaffold notes

## Scope and controlling design

The controlling mathematical design is HA-8 in
`research/plan-homological-algebra-track.md` L1661–1814.  L1661 begins the
A-page entry; L1780 is its B-page continuation, rather than a competing
amendment.  Its required route is the first-quadrant double complex
`Hom(P,I)` and finite-diagonal acyclic assembly, without invoking a spectral
sequence.

The design lists direct requirements `delta-functors-and-universality` and
`derived-functors`, while `research/plan-spec.json` assigns the A page order
365.051 and the sole direct requirement
`delta-functors-and-universality-examples`.  This is recorded as design/spec
drift, not decided here: the manifest retains the spec verbatim.  The live
step-0 record, `research/frontier-31-alpha-step0-drift.md` L86–89, gives this
page `VERDICT: no-drift` and confirms the resolution, derived-functor, and
delta-functor material is in that closure.

The A page has 34 items (28 development items and six `fs-` refutations), so
it is below the 60-item split ceiling; the B page has the seven examples fixed
by the design.  No item id appeared in `items/` before this scaffold.

## Read sources and receipts

* Charles A. Weibel, *An Introduction to Homological Algebra*, Chapter 2,
  §2.7 `Balancing Tor and Ext`, printed pp. 58–65 / chapter-PDF pp. 29–36,
  <https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf>.
  The chapter PDF (36 pages) was fetch-opened in the web reader on 2026-09-05.
  It supplies the sign convention, finite-diagonal acyclic assembly, the two
  edge quasi-isomorphisms, and Theorem 2.7.6.  Its §2.7 headings and results
  are individually disposed in the batch coverage file.
* Romyar Sharifi, *Homological Algebra*, contents p. 2 and §3.5 from
  Definition 3.5.17 through Theorem 3.5.22, PDF pp. 68–70,
  <https://math.ucla.edu/~sharifi/homalg.pdf>.  This 86-page lecture-note set
  was fetch-opened in the web reader on 2026-09-05.  It supplies the
  right-derived definition, the projective-resolution computation, the
  projective-first-variable vanishing observation, and a cyclic example.
* The Stacks Project, *Derived Categories*, §13.27 `Ext groups`, Definition
  13.27.1 through the long-exact-sequence paragraphs before Definition
  13.27.4, current PDF pp. 87–89 / HTML lines 20–58,
  <https://stacks.math.columbia.edu/tag/06XP>.  The exact HTML page was
  fetch-opened in the web reader on 2026-09-05.  It independently records the
  two resolution computations and the two variance-sensitive long exact
  sequences.

The local `source-fetch-check --stamp` could not resolve external DNS for any
of these URLs (`EAI_AGAIN`).  The coverage receipts therefore truthfully mark
the successful web-open verification and page counts rather than inventing
local byte sizes.  The coverage record contains all 29 harvested headings and
their specific dispositions.  The required liveness/recovery sweep was also
attempted on 2026-09-05, with its report isolated at
`/tmp/frontier-31-batch-8-url-liveness.json`: it reported `0/3 live`, each
failure being `curl: (6) Could not resolve host` for `math.mit.edu`,
`math.ucla.edu`, and `stacks.math.columbia.edu`, and found no archive snapshot
under its host-variant probes.  This is a local DNS blocker, not a basis to
discard or re-source the three exact URLs: each exact full text had already
been opened and read through the independent web reader.  No recovery was
applied to the coverage ledger.

## Conventions and proof plan

Work in an abelian category with **supplied** projective resolution data `P`
and/or injective resolution data `I`; no statement silently asserts that every
abelian category has both.  Write `P_p(M)` homologically and `I^q(N)`
cohomologically.  For
`K^{p,q}=Hom(P_p(M),I^q(N))`, the unsiged horizontal and vertical operations
commute.  The total cochain differential is declared as
`D|K^{p,q}=d_h+(-1)^p d_v`, and
`Tot^n K = ⊕_{p+q=n} K^{p,q}`.  First-quadrantness makes every diagonal finite.

The balance theorem constructs quasi-isomorphisms from `Hom(M,I)` and
`Hom(P,N)` into this total complex.  Exactness of the augmented
`Hom(P,-)` complexes uses the projectivity of each `P_p`; exactness of the
augmented `Hom(-,I)` complexes uses the injectivity of each `I^q`.  The two
acyclic-assembly lemmas are proved by finite truncations and short exact
sequences, never by unnamed spectral-sequence pages.

For `0 → M' → M → M'' → 0`, the first-variable connector is fixed as
`Ext^n(M',N) → Ext^(n+1)(M'',N)` after regarding the sequence in the opposite
category.  Thus the low-degree segment starts
`0 → Hom(M'',N) → Hom(M,N) → Hom(M',N)`.  For
`0 → N' → N → N'' → 0`, the second-variable connector is
`Ext^n(M,N'') → Ext^(n+1)(M,N')`.  The agreement item proves that the balance
isomorphism commutes with these connectors, not merely with the degreewise
groups.

The two dimension shifts retain their low-degree cokernel segments and state
the stable isomorphisms only for `n ≥ 1`.  The final transport proposition is
limited to an exact functor `F : A → B` with an exact right adjoint `G`; exact
`F` makes `G` preserve injectives, exact `G` carries an injective resolution
of `N` to one of `G(N)`, and adjunction identifies the resulting Hom complexes.
Its actual conclusion will be
`Ext_B^n(FM,N) ≅ Ext_A^n(M,G N)` under precisely those hypotheses.

## Planned items, claims, and dependency rationale

The manifest is the authoritative full dependency list.  The following is the
authoring checkpoint: every listed item has its exact claim and the purpose of
its dependencies recorded here.

1. `def-ext-via-an-injective-resolution-of-the-second-variable` defines
   `Ext^n_{A,I}(M,N)=H^n Hom(M,I(N))` relative to supplied `I` data.
   It depends on supplied injective data and the right-derived-object
   construction.
2. `def-ext-via-a-projective-resolution-of-the-first-variable` defines
   `Ext^n_{A,P}(M,N)=H^n Hom(P(M),N)`, with opposite-category Hom signs.
   It depends on supplied projective data and contravariant derivation.
3. `prop-ext-zero-is-hom-for-the-injective-construction` identifies degree
   zero naturally with `Hom(M,N)`.
4. `prop-ext-zero-is-hom-for-the-projective-construction` gives the analogous
   degree-zero identification.
5. `prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable`
   constructs both variances, using direct precomposition and injective
   comparison extensions.
6. `prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable`
   checks the opposite-category comparison lift and both variances.
7. `prop-positive-ext-vanishes-on-an-injective-second-variable` is the
   positive-degree vanishing for an injective second argument.
8. `prop-positive-ext-vanishes-on-a-projective-first-variable` is the dual
   positive-degree vanishing for a projective first argument.
9. `def-hom-double-complex-of-a-projective-and-an-injective-resolution`
   defines the signed-comparison bicomplex `K`.
10. `lem-the-two-hom-double-complex-differentials-commute-before-signing`
    proves the raw operations commute and verifies the declared total sign.
11. `def-direct-sum-total-complex-on-finite-diagonals` fixes direct-sum
    totalisation and records its finite-diagonal justification.
12. `lem-acyclic-assembly-by-exact-columns` proves the finite-diagonal
    exact-columns edge augmentation is a quasi-isomorphism.
13. `lem-acyclic-assembly-by-exact-rows` proves its exact-rows dual.
14. `lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact`
    supplies the projectivity exactness input.
15. `lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact`
    supplies the injectivity exactness input.
16. `thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic`
    compares both candidate Ext groups via the two total-complex edge maps;
    it is the balance landmark.
17. `lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data`
    uses universal delta-functor uniqueness to reconcile the edge comparison
    with the resolution-data comparison.
18. `prop-the-ext-balance-isomorphism-is-natural-in-both-variables` proves
    naturality after both candidate bifunctors have been constructed.
19. `prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws`
    imports the already-proved projective and injective cocycle laws and shows
    the displayed balance maps respect them.
20. `def-balanced-ext-bifunctor` licenses unadorned `Ext^n_A(-,-)` only after
    16–19; its `justified_by` record repeats exactly those four discharge
    items.
21. `thm-long-exact-ext-sequence-in-the-second-variable` creates the natural
    second-variable long exact sequence.
22. `thm-long-exact-ext-sequence-in-the-first-variable` creates the reversed,
    signed first-variable long exact sequence.
23. `prop-the-two-ext-long-exact-sequences-agree-under-balance` proves the
    balance maps commute with all connectors.
24. `thm-ext-dimension-shifting-in-the-first-variable` derives the syzygy
    shift from the first-variable sequence and projective vanishing.
25. `thm-ext-dimension-shifting-in-the-second-variable` derives the cosyzygy
    shift from the second-variable sequence and injective vanishing.
26. `cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable`
    turns the prior comparison/cocycle data into the usable projective
    computation rule.
27. `cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable`
    does the injective counterpart.
28. `prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses`
    proves the exact-adjunction transport isomorphism stated above.

The six refutations retain the design's six traps: respectively, they reject
Ext before supplied data, equality by definition, covariance in both
variables, injectivity in either variable, ambiguity on infinite diagonals,
and the supposed need for spectral-sequence pages.  Their ids are
`fs-ext-is-defined-before-choosing-or-supplying-resolutions`,
`fs-projective-ext-and-injective-ext-are-equal-by-definition`,
`fs-ext-is-covariant-in-both-variables`,
`fs-positive-ext-vanishes-whenever-either-variable-is-injective`,
`fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals`, and
`fs-balance-of-ext-requires-the-spectral-sequence-pages`.

The B-page checkpoint is the seven required items:
`ex-ext-zero-as-hom-in-both-constructions`,
`ex-ext-from-a-two-term-projective-resolution`,
`ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group`,
`ex-the-hom-double-complex-in-low-bidegrees`,
`ex-an-ext-dimension-shift`,
`cex-positive-ext-does-not-vanish-for-an-injective-first-variable`, and
`ex-naturality-of-the-balance-isomorphism`.  The counterexample uses the
injective abelian group `Q/Z` and the sequence `0 → Z → Q → Q/Z → 0` to inject
`Z` into `Ext^1(Q/Z,Z)`; it therefore refutes the false first-variable
injective-vanishing claim without assuming a value for `Ext^1(Q,Z)`.

## Known limits and next action

This scaffold does not construct Ext in an arbitrary abelian category without
the displayed resolution data, does not use product totalisations or unbounded
diagonals, and does not introduce derived-category or Yoneda-extension
definitions.  Those source results have explicit, resolvable HA-9 dispositions
in the coverage harvest.  The next action is authoring the manifest items in
dependency order, preserving the sign and connector conventions above.

## Validation checkpoint

Completed after scaffolding:

* `node tools/manifest-deps.mjs research/frontier-31-batch-8.pages.json` — 41
  items, no missing `deps` arrays.
* `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-8.pages.json`
  — 41 scoped items, no errors or warnings.
* `node tools/content-policy.mjs --manifest-only research/frontier-31-batch-*.pages.json`
  — whole-run scaffold check: 619 scoped items, no errors or warnings.
* `node tools/coverage-checklist.mjs research/frontier-31-batch-8.coverage.json --require-destination`
  — 29 harvested results, no errors or warnings.
* `node tools/source-fetch-check.mjs --coverage research/frontier-31-batch-8.coverage.json`
  — `3/3` sources fetch-verified, using the explicit web-open receipts above;
  no local DNS fetch is asserted.
* `node tools/splice-plan.mjs --run frontier-31 --batch 8 --dry-run` — two
  pages and 41 items splice cleanly; the published plan was not changed.
* `node tools/validate-plan.mjs research/plan-spec.json` — the current plan
  order is acyclic and consistent, with no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among its 746 pages with
  item lists.
* `node tools/url-sweep.mjs --coverage research/frontier-31-batch-8.coverage.json
  --out /tmp/frontier-31-batch-8-url-liveness.json --recover --fail-on-dead
  --timeout-ms 5000 --concurrency 1` — blocked by local DNS as detailed in
  the source-receipts section; it made no batch-artifact changes.
