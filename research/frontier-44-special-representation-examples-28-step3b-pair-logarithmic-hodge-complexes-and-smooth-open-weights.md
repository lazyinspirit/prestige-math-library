# Step 3b — pair `logarithmic-hodge-complexes-and-smooth-open-weights`

Run: `frontier-44-special-representation-examples-28`. Role: alpha-high. Batch: 38.
A page: `logarithmic-hodge-complexes-and-smooth-open-weights` (order 1812); B page:
`logarithmic-hodge-complexes-and-smooth-open-weights-examples` (order 1816).

## Owned IDs, authoring order, final decisions

1. `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications` (level 0)
   — **repaired**, defects `["dependency","proof"]`.
2. `lem-smooth-projective-modification-preserves-open-cohomology-images` (level 10)
   — **repaired**, defects `["dependency"]`. The scaffold label was 1; the recomputed
   in-run level is 10 (see below) and the manifest now records 10.
3. `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` (level 11)
   — **escalate**, defects `["dependency"]` (inherited batch-34 supplier obligation plus
   the item's own step-3.1 write-up obligation).
4. `ex-the-logarithmic-class-of-the-punctured-line-has-weight-two` (level 12)
   — **escalate**, defects `["dependency"]` (inherits the theorem's escalation).

All four IDs are original scaffold IDs of batch 38, so all four take ordinary
`step3-decisions record-item` receipts; the receipts above were recorded through the
normal (non-owner) API with the input hash current at recording time. No new item IDs
were added, and no published item, sibling manifest row, sibling item, plan-spec entry
or engine state was edited. The four item files, the two draft library pages, the batch
manifest, the coverage file, the owned cross-batch input, the batch proof contracts and
the ledger refresh are the batch-38 artefacts written or updated here.

## Per-item checkpoints

### 1. `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications` — level 0

- Claim and conventions. AC; smooth quasiprojective complex variety $U$ (separated
  finite-type H-quasi-projective $\mathbb C$-scheme, possibly disconnected); every such
  $U$ admits a smooth projective compactification whose reduced boundary is an SNC
  divisor; finitely many such compactifications are dominated by another one restricting
  to the identity on $U$; a morphism extends to the compactifications after modifying the
  source outside the open variety. The closing remark states explicitly that the
  domination/extension clauses hold for *arbitrary* smooth projective compactifications,
  which is the form consumed by item 2 step 6.1 and item 3 [F7].
- Dependencies (load bearing). Published blowup/Proj development
  (`thm-blowup-base-change-flat`, `thm-affine-blowup-standard-charts`, `thm-blowup-projective`,
  `lem-blowup-*`, `def-blowup-scheme-along-ideal`), resolution/principalization
  (`thm-weak-embedded-desingularization`, `thm-principalization-of-ideals`,
  `prop-canonical-resolution-of-marked-ideals`, `def-multiple-test-blowup-and-controlled-transform`),
  projectivity devices (`lem-eventual-global-generation-coherent-twists`,
  `cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup`,
  `thm-segre-line-bundle-external-tensor`, `lem-very-ample-implies-ample`), regularity
  (`lem-smooth-immersion-normal-sequence-and-deformation-charts`,
  `lem-regular-point-lies-on-one-component`, `lem-ag-geometric-regularity-field-tests`),
  and `def-simple-normal-crossings-divisors`, `lem-graph-closed-separated-target`.
  All are published; the computed level is 0.
- Sources and locators. Deligne, Théorie de Hodge II, 3.2.1 (printed p. 34, quasiprojective
  SNC-projective completion); Włodarczyk, Simple Hironaka resolution in characteristic
  zero, arXiv math/0401401; Hauser, The Hironaka theorem on resolution of singularities,
  Bull. AMS 40 (2003) 323–403. Fetch stamps: 5/5 source instances over the two pages,
  hash-matched, from the batch coverage file.
- Proof route and checker results. Step 1.1 scheme-theoretic closure, 1.2 projectivity of
  blowups of integral projective schemes (Serre twist + graph-closure corollary), 1.3
  finite disjoint unions, 1.4 local reduction, 2.1–2.3 étale-local smoothness of blowups
  along regular centers, 3.1–3.2 embedded desingularization of the closure, 4.1
  principalization of the boundary, 5.1 existence, 6.1 domination, 7.1 extension, 8.1
  choice and boundary accounting. 14 steps; precheck PASS, rendercheck OK,
  proof-layout 0 defects, contract derivations complete.
- Repair made in this dispatch. Step 2.1 previously inferred that *every* reduced
  Noetherian $Z$ with a dense open regular subscheme $W$ has pairwise disjoint components
  ("a common point would be regular"), which is false (two lines meeting at a point with
  $W$ the complement of the node). The step now proves separately: every component of
  $Z$ meets the dense open $W$ (finiteness of the component set plus irreducibility), and
  for a *smooth* finite-type $\mathbb C$-scheme the components are pairwise disjoint
  (two minimal primes would make the local ring a non-domain, while regular local rings
  are domains). Every use — steps 3.2, 4.1, 5.1 — applies only the corrected statements,
  and the contract derivation `d-2.1` was resynchronised.
- Decision and open gaps. `repaired`; no open obligation recorded on the item.

### 2. `lem-smooth-projective-modification-preserves-open-cohomology-images` — level 10

- Claim and conventions. AC; $p:X'\to X$ proper between smooth projective complex
  varieties of the same pure dimension $d$, with open dense $j:U\hookrightarrow X$,
  $j':U\hookrightarrow X'$ and $p\circ j'=j$. Then $H^n(X;\mathbb Q)$ and
  $H^n(X';\mathbb Q)$ have the same image in $H^n(U;\mathbb Q)$ for every $n$; hence the
  compactification-image formula of logarithmic weights transfers from an SNC
  compactification to *every* smooth projective compactification. Singular cohomology of
  the analytic spaces; Poincaré duality, cap–cup, Kronecker evaluation and compact
  supports as calibrated in [F1]–[F7].
- Dependencies (load bearing). Item 1 (domination/extension clauses),
  `lem-smooth-projective-analytification-has-rational-kahler-polarization` (batch 39,
  level 9), `thm-poincare-duality-for-oriented-topological-manifolds`,
  `thm-excision-for-singular-cohomology`,
  `def-compactly-supported-singular-cohomology-of-a-locally-compact-space`,
  `prop-cap-product-naturality-and-projection-formula`, `thm-cap-product-boundary-identity`,
  `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`,
  `lem-proper-source-to-separated-target-proper`, `thm-choice-implies-dependent-implies-countable-choice`.
  The level-9 supplier is why the computed level is **10**, not the scaffold's 1; the
  manifest and item frontmatter were both corrected, and `item-dependency-levels check`
  shows no error for this item.
- Sources and locators. Deligne, Théorie de Hodge II, 3.2.16–3.2.18 (printed pp. 34,
  39–40): the independence of the image subgroup under smooth compactification, the SNC
  identification with $W_n$, and the strictness-based proof comparing the images under a
  proper smooth morphism. The duality computation is rewritten with the library's
  Poincaré-duality, cap and Kronecker suppliers.
- Proof route and checker results. Step 1.1 structure of the spaces, 1.2 $p$ is the
  identity over $U$ (countable selection supplied by AC through $\mathrm{AC}_\omega$),
  1.3–1.4 augmentation/Kronecker pairings, 2.1–2.3 cap–cup and the compact-support
  identity $p^*(e_Xc)=e_{X'}c$ via excision, 3.1 transfer
  $T_n=D_X^{-1}p_*D_{X'}$ with $j^*(T_na)=(j')^*(a)$, 5.1 equality of images, 6.1 the
  arbitrary-compactification corollary through the extension clause of item 1, 7.1
  accounting. 12 steps; precheck PASS, rendercheck OK, proof-layout 0 defects,
  contract derivations complete.
- Decision and open gaps. `repaired` (dependencies completed; level corrected from the
  scaffold label 1 to the computed 10). No open obligation recorded.

### 3. `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` — level 11

- Claim and conventions. AC; $U$ smooth quasiprojective over $\mathbb C$ with an SNC
  compactification $j:U\hookrightarrow X$, boundary $D$; the logarithmic de Rham complex
  $\Omega^\bullet_X(\log D)$ with the pole-count weight filtration $W$ and degree Hodge
  filtration $F$ constructs a functorial rational mixed Hodge structure on
  $H^n(U;\mathbb Q)$, independent of the compactification, with weights $\ge n$ and
  $W_nH^n(U;\mathbb Q)=\operatorname{im}(H^n(X;\mathbb Q)\to H^n(U;\mathbb Q))$.
  Conventions: $D^{[a]}$ the $a$-fold stratum intersections ($D^{[0]}=X$); weight
  spectral sequence $E_1^{-a,q}=H^{q-2a}(D^{[a]};\mathbb Q)(-a)\Rightarrow H^{q-a}(U;\mathbb Q)$
  degenerating at $E_2$ with $\operatorname{Gr}^W_mH^n\cong E_2^{n-m,m}$; Tate twist
  normalised so that $(2\pi i)^{-q}dz_I/z_I$ is the rational generator.
- Dependencies (load bearing). Item 1, item 2,
  `lem-smooth-projective-analytification-has-rational-kahler-polarization` (level 9),
  `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms` (batch 35),
  `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights` (batch 34,
  see flagged supplier below), `lem-morphisms-of-mixed-hodge-structures-are-strict`,
  `def-cohomological-mixed-hodge-complex`, `def-rational-mixed-hodge-structure`,
  `def-simple-normal-crossings-divisors`, `def-sheaf-cohomology-derived-global-sections`,
  `thm-de-rham-theorem`, `thm-dolbeault-lemma-polydisc`,
  `thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses`,
  `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`,
  and the analytic-topology/constructible definitions. Computed level 11.
- Sources and locators. Deligne, Théorie de Hodge II, 3.1.1–3.1.11 (printed pp. 31–34:
  logarithmic poles, pole-order filtration, residue identification
  $\operatorname{Gr}^W_a\cong\Omega^\bullet_{D^{[a]}}[-a]$, filtered comparison with the
  truncated open de Rham complex) and 3.2.1–3.2.7, 3.2.12–3.2.17 (printed pp. 34–39:
  SNC compactification, bifiltered resolutions, the weight spectral sequence
  $E_1^{-a,q}=H^{q-2a}(Y^a,\mathbb Q)(-a)$, functoriality/independence, $W_n=\operatorname{im}j^*$).
  Robles, Hodge Theory of Complex Projective Varieties, Definition 6.24, Exercise 92 and
  Theorem 6.25(i)–(iv) (pp. 95–101). The meromorphic-function citation from an earlier
  draft was dropped because its page is outside the declared `requires` closure and the
  final proof does not use it; the stale contract row was removed.
- Proof route and checker results. 1.1 strata, 1.2 the log complex and its two
  filtrations, 2.1 the residue isomorphism, 3.1 the local polydisc computation and the
  filtered comparison $Rj_*\mathbb Q_U\to\Omega^\bullet_X(\log D)$, 4.1 the weight
  spectral sequence and $E_2$-degeneracy, 4.2 the rational cohomological mixed Hodge
  complex, 5.1 the resulting structure, 6.1 weights $\ge n$, 6.2
  $W_n=\operatorname{im}(H^n(X)\to H^n(U))$, 7.1 functoriality and independence
  (including arbitrary smooth projective compactifications via item 2), 8.1 accounting.
  11 steps; precheck PASS, rendercheck OK, proof-layout 0 defects, contracts complete.
- Open obligations (both escalated). (a) The detailed write-up of the local filtered
  comparison at step 3.1 — the monomial recursion on polydiscs with zero exponents and
  the compatibility with every truncation $\tau_{\le a}$ — remains an obligation of this
  item; the identification of the log complex with $Rj_*\mathbb C_U$ and the
  $W$/truncation correspondence are the load-bearing inherited inputs of steps 4.1–7.1.
  (b) The Hodge-opposition clause of the constructed mixed Hodge structure is inherited
  from the batch-34 supplier and is not available in the published library
  (recurrent-versus-induced filtration comparison, Deligne II 1.3.15–1.3.17); the
  weight-side conclusions (purity of $E_1/E_2$, degeneration, the weight bound and the
  image formula) do not depend on it and are proved.
- Decision. `escalate`, defects `["dependency"]`; owner must resolve both obligations
  before the item can be accepted.

### 4. `ex-the-logarithmic-class-of-the-punctured-line-has-weight-two` — level 12

- Claim and conventions. $U=\mathbb C^\times\subset\mathbb P^1$, $D=\{0,\infty\}$;
  computing the weight spectral sequence of item 3 on this compactification gives
  $\operatorname{Gr}^W_2H^1(U;\mathbb Q)=\mathbb Q(-1)$ and all other weight-graded
  pieces zero, so $H^1(U,\mathbb Q)=\mathbb Q(-1)$ has weight 2 $>$ degree 1 and type
  $(1,1)$; the generator is $(2\pi i)^{-1}dz/z$ with residues $1$ and $-1$.
- Dependencies. Item 3; `cor-homology-of-spheres`,
  `cor-cohomology-over-a-field-is-dual-to-homology-over-that-field`,
  `def-rational-mixed-hodge-structure`, `def-simple-normal-crossings-divisors`,
  `def-axiom-of-choice`. Computed level 12.
- Sources and locators. Deligne, Théorie de Hodge II, 2.1.16 (Tate structure), 3.1.5 and
  3.2.17 (pole-order filtration, graded pieces on the strata, $W_n=\operatorname{im}j^*$);
  Robles, Theorem 6.25(ii)–(iv), pp. 100–101.
- Proof route and checker results. 5 steps: cohomology of iterated spheres, the
  logarithmic generator, the two-column spectral sequence with the residue-sum
  differential $d_1:E_1^{-1,2}\to E_1^{0,2}$ and kernel the line $(1,-1)$, the weight
  identification, and the boundary/choice accounting. Precheck PASS, rendercheck OK,
  proof-layout 0 defects, contracts complete.
- Decision and open gaps. `escalate`, defects `["dependency"]`: the example is a leaf and
  its finite computation is complete, but its only non-published supplier is item 3, so
  it inherits the theorem's escalation.

## Flagged suppliers (exact IDs and consuming steps)

- **`lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`**
  (batch 34, page `mixed-hodge-structures-and-strictness`; its own Step-3b receipt is
  `escalate`). Its remark records that the recurrent-versus-induced filtration comparison
  (Deligne II 1.3.15–1.3.17) is not available in the published library, so its Hodge
  clause — and the functoriality conclusion built on it — is conditional. **Consumer:
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`**, consuming
  proof step 5.1 (fact [F5], Hodge-opposition clause), and through the structure produced
  there steps 6.1 and 7.1 (and the example's remark). The consumer is authored with the
  obligation stated plainly and its decision is left escalated until the supplier's
  obligation is discharged and the actual use re-verified.
- `lem-smooth-projective-analytification-has-rational-kahler-polarization` (batch 39,
  order 1811; receipt `repaired`) and
  `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms` (batch 35,
  order 1802; receipt `repaired`) are now authored; they are consumed in facts [F1]/[F3]
  of items 2 and 3 and carry no open obligation. The earlier entry-time flags for these
  two suppliers are closed at declaration level; the uses were reconciled.
- Informational cross-group note: `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`
  (another batch) consumes item 3 at its steps 2.1/6.1 and its own receipt remains
  escalated pending this item; that scroll is not owned here. The Step-1 notes also list
  `geometric-fixed-parts-and-gauss-manin-semisimplicity` and
  `proper-hyperresolutions-and-mixed-hodge-restriction-images` as pages requiring this A
  page.

## Published concerns (reported, not repaired here)

- Suspicion only, no confirmed published defect found by this pair. Published interface
  note carried from Step 1 and preserved: `thm-resolution-of-singularities-in-characteristic-zero`
  and `thm-principalization-of-ideals` state *proper* (not projective) resolution; item 1
  supplies the projectivity of its blowup sequence from global generation of a twist and
  the graph-closure corollary. The published statements are true as stated; no defect row.
- `validate-plan --run` FAILS with 2 sibling `undeclared-prereq` errors (not this pair):
  `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`
  (an item depends on `divisors-riemann-roch-and-duality` outside its requires closure)
  and `ariki-categorification-and-graded-decomposition-numbers` (an item depends on
  `kazhdan-lusztig-bases-polynomials-and-cells`). Our page shows only `redundant-prereq`
  advisories, including on the newly added `chow-groups…` edge.
- `item-dependency-levels check --run` reports 5 sibling label mismatches (perverse/Hodge
  items: levels 18 vs 20, 21 vs 23, 22 vs 24, 23 vs 25, 24 vs 26). None names a batch-38
  item; our four labels equal the computed levels.
- `coverage-checklist --require-destination`: 0 errors, 1 advisory `coverage-low-yield`
  on the A page (4 of 37 harvested results separately scaffolded, because the planned
  three A items absorb the log-complex/residue/spectral-sequence machinery inline); every
  decline carries a written reason in the batch coverage file. Advisory, no repair.
- Contract hygiene fixed here: a stale citation row `F1 -> def-meromorphic-function-in-several-complex-variables`
  left from an earlier draft of item 3 was removed (the item no longer links that ID),
  and contract derivation `d-2.1` was resynchronised after the step-2.1 repair;
  `proof-contract --strict` now reports 0 errors, `citation-fidelity` no missing quote,
  `boundary-audit` no contradiction.

## Additions, scope and preserved sibling content

No new item IDs and no page additions: the pair keeps its scaffolded inventory
(3 A items on the A page, 1 B example on the examples page) and every original ID and
promised claim. Shared files were written only where owned: the batch manifest keeps its
two page rows, the coverage file its 42 harvested results, the owned cross-batch input
its 17 rows (all `verified`, updated before the ledger refresh), and the proof contracts
their four entries. No sibling rows were changed; `manifest-integrity` reports 100/100
pages with no scope drift.

## Pre-splice plan mismatches for Step 4

`research/plan-spec.json` still carries the scaffold declarations; the final manifest and
the two library pages carry the authored ones. Step 4 must reconcile:

- A page `requires`: `chow-groups-intersection-products-and-grothendieck-riemann-roch`
  added (needed by item 1 through the published `lem-smooth-immersion-normal-sequence-and-deformation-charts`).
  Present in the manifest and the library page; absent from plan-spec.
- Item dependency expansions relative to plan-spec: item 1 +43 added / 1 dropped
  (`thm-resolution-of-singularities-in-characteristic-zero`, which the projectivity route
  deliberately does not consume), item 2 +19, item 3 +14, the example +3. All additions
  are published or in-run suppliers actually used by the authored proofs.
- Item 2 `dependency_level` is **10** (scaffold label 1; consumes the batch-39 level-9
  analytification lemma); items 1/3/4 are 0/11/12. Item metadata and manifest agree, and
  the repository level check is clean for these four.
- No item ID, kind, title, order or claim differs from plan-spec; the B page `requires`
  and example ID are unchanged. The page prose written in this dispatch already reflects
  the authored claims, the two open obligations and the modified image formula.

## Checks actually run (explicit paths, this session)

- `node tools/tsx-run.mjs tools/precheck.mts <4 item paths>` — 4 checked, 0 failing.
- `node tools/rendercheck.mjs <4 item paths>` — OK; no wikilink in math, balanced
  delimiters, all math parses under KaTeX, frontmatter parses.
- `node tools/proof-layout.mjs <4 item paths>` (single command) — 4 items, 42 steps,
  0 defects.
- `node tools/proof-contract.mjs research/…-batch-38.proof-contracts.json --strict` —
  0 errors, 0 warnings, 4/4 items.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote` — 93 citations, no
  missing quote, no widening candidate.
- `node tools/boundary-audit.mjs …` — 32 rows, 9 not_applicable, no contradicted
  disposition, no template reuse.
- `depcheck`/`fwdcheck`/`extcheck --items-file /tmp/b38-items.json` — all OK; fwdcheck
  reports the three inherited "rests on later material" markers with 0 errors/warnings;
  extcheck 0 recorded-not-proved.
- `depsource research/plan-spec.json --items-file /tmp/b38-items.json` — selected
  consumer coverage 4/4, 0 unresolved.
- `manifest-deps` on the batch manifest — 4 items, 0 errors.
- `content-policy` on the batch manifest — 4 scoped items, 0 errors, 0 warnings.
- `coverage-checklist --require-destination` — 2 pages, 42 harvested results, 0 errors,
  1 advisory (above).
- `manifest-integrity --run` — 100 pages owed, 100 present, no scope drift.
- `item-dependency-levels check --run` — no error for the four owned items (sibling
  errors listed above).
- `validate-plan research/plan-spec.json --run` — the two sibling `undeclared-prereq`
  errors above; the owned pages produce only adjudged `redundant-prereq` advisories.
- `frontier-dependency-ledger.mjs refresh --run` — refreshed and deduplicated after the
  owned input update.
- `step3-decisions.mjs record-item` — four receipts written (accept/repaired/escalate
  per item above); `check --phase final` shows items 1–2 accepted and items 3–4 as
  owner-held escalations.

## Handoff status and next actions

Items, pages, coverage rows, manifest rows and contracts are all present; items 1 and 2
are accepted (`repaired` with current receipts), items 3 and 4 are deliberately escalated
with exact supplier IDs and consuming steps recorded here and in their remarks. Next
actions: (a) owner resolution of the batch-34 `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`
Hodge-opposition obligation and of the item-3 step-3.1 detailed local write-up, then
re-record items 3–4 (and the downstream batch-42 consumer re-verified against the
completed theorem); (b) Step 4 splice to sync plan-spec with the manifest/`requires`
differences listed above; (c) thorough independent audit in Steps 5–7. No unresolved
Step-3 gate finding remains on this pair other than the two declared escalations.
