# subjects-01 scaffold amendment application report

Date: 2026-08-14  
Scope: prose scaffolds only

## 1. Result

All 48 routes classified `apply` and all five routes classified `conflicts`
were applied to their receiving scaffolds. Of the 19 `owner` routes, ten were
applied under the owner's explicit list or rulings R-5/R-7/R-8, and nine were
skipped because this commission expressly excludes them or does not authorise
them. All 81 `stale` routes were skipped without edits. No prescribed route is
blocked.

The prompt describes 152 routes and 85 stale routes. The Markdown routing table
on disk contains **153** classified rows: **48 `apply`, 5 `conflicts`, 19
`owner`, and 81 `stale`**. This report follows the rows actually present on
disk and accounts for all 153. Route keys below use the routing table's line
number in the pre-application disk version.

No file under `items/` or `library/` was touched. `DEFERRED.md`,
`research/plan-spec.json`, `SCHEMA.md`, and `CLAUDE.md` were not touched.

## 2. Routes classified `apply` — 48 applied

| Route | From → receiving track | Result and scaffold change |
|---|---|---|
| A-018 | measure theory → complex analysis | Applied under R-6: MT-17 now mints `thm-riesz-thorin-interpolation`; CA-6 cites it beside `thm-hadamard-three-lines` and does not mint the operator theorem. |
| A-021 | measure theory → differential geometry / measure theory | Applied under R-9: MT-11's general Lebesgue $C^1$ change-of-variables block is unconditional; DG cites it. |
| A-023 | measure theory → orchestrator | Applied at scaffold level: the publication-time `_category.md` draft-status flip is retained as an explicit instruction; the file itself is outside scope and unchanged. |
| A-024 | measure theory → orchestrator | Applied at scaffold level: the spec/disk inventory divergence warning is retained for successor seams and builders. |
| A-041 | abstract algebra → orchestrator / plan spec | Applied at scaffold level: X-1's future `requires` repoint is recorded with the exact three suppliers; `plan-spec.json` is unchanged. |
| A-042 | abstract algebra → orchestrator / plan spec | Applied at scaffold level: RT-3's future removal of the inner-product prerequisite is recorded because the pairing is bilinear; `plan-spec.json` is unchanged. |
| A-044 | abstract algebra → orchestrator | Applied: the algebra scaffold now explicitly forbids treating spec item arrays as a complete authored-disk inventory. |
| A-049 | abstract algebra → number theory | Applied: NT MT-9 adds `cor-number-of-monic-irreducible-polynomials-over-a-finite-field` with $N_n(q)=n^{-1}\sum_{d\mid n}\mu(d)q^{n/d}$. |
| A-057 | abstract algebra → abstract-algebra builder | Applied as a binding authoring gate: X-2 interlacing/Weyl requires a verified second independent treatment and exact locator. No unruled source was invented. |
| A-073 | combinatorics → abstract algebra | Applied: LA-7 mints `thm-cauchy-binet-formula`; GT-7a cites it and has no local fallback. |
| A-078 | combinatorics → number theory | Applied: NT MT-22 adds successive minima and Minkowski's second theorem; CB-32 cites them for full Freiman. |
| A-082 | combinatorics → retained §16 | Applied: the Erdős--Hajnal block cites GT-19's ordinary regularity lemma. |
| A-083 | combinatorics → CB-21 | Applied: CB-21 adds `rem-lattice-fkg-and-probabilistic-fkg-agree` pointing to CB-29. |
| A-088 | combinatorics → Ramsey theory | Applied: CB-11 adds the requested power-form finite Ramsey corollary. |
| A-089 | combinatorics → finite probability | Applied: CB-12 adds Erdős's finite $G(n,1/2)$ construction with clique/stable-set bound $2\log_2n+O(1)$. |
| A-090 | combinatorics → real analysis | Applied: RA-12 owns floor/ceiling; RA-8/9 supply finite geometric sums/tails; RA-26/27 supply the elementary power/exponential bounds. |
| A-106 | monoidal/abelian categories → legacy combined scaffold | Applied: the combined scaffold marks CT/AB/MO prose historical and points to the dedicated category scaffold. |
| A-109 | monoidal/abelian categories → orchestrator / plan spec | Applied at scaffold level: HA records the chain-complex dependency repoint to the actual MA exactness/diagram pages; the global spec splice is untouched. |
| A-111 | monoidal/abelian categories → legacy combined scaffold | Applied: the legacy accessible-category stance is superseded by the subject-size denial. |
| A-113 | monoidal/abelian categories → orchestrator / SCHEMA | Applied at scaffold level: the category scaffold records stale prose value 100 versus enforced ceiling 60 and sizes every inventory at 60; `SCHEMA.md` is unchanged. |
| A-120 | functional analysis → topology | Applied: topology adds `thm-complex-stone-weierstrass-self-adjoint` with the compact-Hausdorff, unital, separating, self-adjoint hypotheses for FA-18. |
| A-125 | functional analysis → measure theory | Applied: MT-20 adds the RMK orientation links to FA-9, FA-18, and FA-20. |
| A-129 | functional analysis → functional analysis | Applied: the unnamed PDE orientations now name PDE-11, PDE-12, PDE-16, PDE-18, and PDE-19. |
| A-148 | group theory → abstract algebra | Applied: AG-4 adds stable Frattini/Fitting consequence ids and GT-1 cites them. |
| A-149 | group theory → abstract algebra | Applied: RT-1 adds arbitrary-group `def-group-ring`, augmentation/ideal, and the group-action/module dictionary over a commutative ring. |
| A-151 | group theory → commutative algebra | Applied: CA-13B cites GT-17 for compatible residue tuples and proves only the topology/completion agreement. |
| A-152 | group theory → combinatorics | Applied: the published spanning-tree page is explicitly finite; GT-14 owns the arbitrary simplicial-tree bridge. |
| A-153 | group theory → orchestrator / plan spec | Applied at scaffold level: the 32 authored free-group components are retained as a future summary-harvest obligation without renaming; `plan-spec.json` is unchanged. |
| A-154 | group theory → page summary | Applied at scaffold level: the arbitrary free-product transversal's AC charge is preserved for the future summary. |
| A-162 | homological algebra → orchestrator / plan spec | Applied at scaffold level: HA-1/HA-4 record the exact MA exactness and diagram-lemma suppliers; `plan-spec.json` is unchanged. |
| A-165 | homological algebra → abstract algebra | Applied: HA-12 cites RT-1's arbitrary-group ring/augmentation/action ids instead of minting a second group ring. |
| A-169 | homological algebra → legacy combined scaffold | Applied: the combined scaffold points its historical HA prose to the dedicated HA file. |
| A-171 | homological algebra → orchestrator | Applied at scaffold level: the two-paragraph A-summary, 60-item ceiling, and B-leaf sweep are explicit splice obligations. |
| A-172 | homological algebra → abstract algebra | Applied: MOD-4 fixes exact semisimplicity-equivalence ids, and HA-9/10 cite them. |
| A-178 | probability → measure theory | Applied: MT-2/MT-11/MT-13 point respectively to PT-2 Borel--Cantelli refinements, PT-3 products, and PT-10 conditional expectation. |
| A-179 | probability → functional analysis | Applied: FA records $\varphi_X(t)=\widehat{P_X}(-t/(2\pi))$ and PT-9's finite-dimensional use of positive square root. |
| A-180 | probability → combinatorics | Applied: the finite-probability pages point forward to PT-1/PT-2 only for restriction/agreement, with no dependency reversal. |
| A-181 | probability → topology | Applied: topology owns stable `def-polish-space` and names PT-3/PT-7/PT-11/PT-18 as consumers. |
| A-189 | PDE → measure theory / future GMT | Applied: MT adds the chart-surface-integration/Hausdorff-measure agreement obligation; PDE marks the receipt. |
| A-209 | differential geometry → multivariable calculus | Applied: RA-36 adds the open invertible-derivative locus, local-inverse derivative, parameterised IFT, and local/global qualification remark. |
| A-213 | differential geometry → topology | Applied: HT-3/HT-6 expose stable covering, unique/path/homotopy lifting, universal-cover, deck, regular-covering, and classification ids with exact hypotheses. |
| A-214 | differential geometry → topology / orchestrator | Applied: topology states that DG smoothing inherits the partition supplier's AC/DC ledger. |
| A-215 | differential geometry → abstract algebra | Applied: MOD-3 adds tensor algebra, its universal property/functoriality, tensoring algebra maps, and quotient-by-relations mapping ids. |
| A-217 | differential geometry → measure theory | Applied under R-9: MT-11 owns the unconditional general Lebesgue $C^1$ change-of-variables theorem. |
| A-219 | differential geometry → orchestrator | Applied at scaffold level: DG preserves the Riemann/Jordan versus Lebesgue integration distinction. |
| A-228 | complex analysis → real analysis | Applied: RA-33's prerequisites include `field-extensions-and-the-complex-numbers`. |
| A-236 | complex analysis → topology / conformal consumers | Applied: pointwise Euclidean-boundary transport requires a closure-homeomorphic extension; general prime ends remain forward/out of scope. |
| A-237 | complex analysis → orchestrator / plan spec | Applied at scaffold level: the enriched stable supplier lists are recorded as the future metadata replacement; `plan-spec.json` is unchanged. |

## 3. Routes classified `conflicts` — five applied by binding rulings

| Route | Seam | Result and scaffold change |
|---|---|---|
| C-081 | finite-abelian characters | Applied by R-3: abstract algebra RT-3 owns the character definition and orthogonality; CB-27/31/14c cite them and mint neither. |
| C-138 | commutative-algebra flatness route | Applied by R-1: MOD-3 owns `def-flat-module` and basic module flatness; CA-12 cites it and retains faithful flatness, local criteria, and descent. The noetherian/artinian/integrality requests remain as written. |
| C-164 | homological-algebra flatness route | Applied by R-1: HA-10/11 cite MOD-3 flatness and do not re-prove projective-implies-flat; the remaining tensor/bimodule/Hom--tensor payload stays in MOD-3. |
| C-190 | PDE → complex-analysis harmonic seam | Applied by R-2: PDE-3--PDE-6 retain dimension-uniform statements including $n=2$, add CA-13/14/HM/PT cross-links, and add no plane-specific proof. |
| C-234 | complex analysis → PDE harmonic seam | Applied by R-2: CA's harmonic pages cite PDE's dimension-uniform results while retaining the sharper holomorphic plane arguments; no theorem statement changed. |

## 4. Routes classified `owner` — 19 accounted for

| Route | Owner question | Result |
|---|---|---|
| O-022 | Measure-theory category value / empty nested directory | **Skipped.** Taxonomy and directory disposition were not in the authorised owner subset; no directory or category file was changed. |
| O-025 | Delete discharged `DEFERRED.md` rows | **Skipped.** Explicitly excluded; `DEFERRED.md` is unchanged. |
| O-043 | Four Galois A/B pairs | **Applied.** GA-1/GA-2 use 98--101 and GA-3/GA-4 use 101.2/101.4/101.6/101.8. |
| O-048 | Include Kronecker--Weber | **Applied.** GA-3 mints `thm-kronecker-weber`; NT MT-24 cites it and owns the arithmetic ramification consequence. |
| O-055 | Retain GA-1 algebraic closure | **Applied.** GA-1 keeps the algebraic-closure block and no ambient-normal-extension fallback is inserted. |
| O-056 | Pair the concrete insoluble quintic with X-1 if order changes | **Skipped.** No specific owner authorisation or order change was supplied for this separate pairing question. |
| O-072 | Rehome five published graph items | **Skipped.** Explicitly excluded as published-content work; no `items/` or `library/` file was touched. |
| O-110 | Open a Grothendieck-category sequel | **Skipped.** The user directed that the no-current-consumer sequel offer remain recorded. |
| O-112 | Assign a floor/ceiling owner | **Applied by R-7.** RA-12 owns `def-floor-and-ceiling`; MA-1 and combinatorics cite it. |
| O-121 | Reconcile discharged FA catalogue remarks | **Skipped.** Catalogue deletion/rehoming is outside the authorised subset. |
| O-139 | Place CA-15 | **Applied.** CA-15 is explicitly after topology and compactness. |
| O-163 | Retire two empty HA omnibus ids and order HA-1--17 | **Applied.** The two empty omnibus A/B ids are retired at scaffold level and the 17-pair order is fixed; no published id moves. |
| O-167 | Repoint DG to HA-17 final companion | **Applied.** Both HA and DG name `grothendieck-spectral-sequences-and-computations-examples`. |
| O-203 | Open a quadratic-order sequel | **Skipped.** The no-current-consumer offer remains recorded as directed. |
| O-210 | Repoint DG anchor (duplicate originating route) | **Applied.** Same owner-authorised HA-17 final-companion result as O-167. |
| O-216 | Replace DG-30 Jordan--Chevalley fallback | **Applied by R-5.** X-2 owns the stable operator definition/theorem; DG-30 items 1--2 are citation/agreement remarks. |
| O-227 | Choose the $\mathbb C\cong\mathbb R^2$ dictionary owner | **Applied by R-8.** CA-1 owns `rem-complex-plane-euclidean-dictionary`; RA-33 cites it. |
| O-229 | Move two branch-law examples from RA B to A, or rebuild in CA | **Skipped.** This separate item rehome was not in the authorised owner subset. |
| O-233 | Reconcile orphan `rem-riemann-surface-of-log` | **Skipped.** Deferred-catalogue/immutable-id work is outside scope. |

## 5. Routes classified `stale` — 81 skipped without edits

Each row below was skipped because the reconciliation already verified the
requested state. “No edit” is intentional: stale routes were expressly outside
this commission.

| Route | From → receiving track | Result |
|---|---|---|
| S-016 | measure theory → functional analysis | Skipped — stale; already true, no edit. |
| S-017 | measure theory → complex analysis | Skipped — stale; already true, no edit. |
| S-019 | measure theory → probability | Skipped — stale; already true, no edit. |
| S-020 | measure theory → PDE | Skipped — stale; already true, no edit. |
| S-035 | abstract algebra → algebra main scaffold | Skipped — stale; already true, no edit. |
| S-036 | abstract algebra → algebra main scaffold | Skipped — stale; already true, no edit. |
| S-037 | abstract algebra → algebra main scaffold | Skipped — stale; already true, no edit. |
| S-038 | abstract algebra → algebra main scaffold | Skipped — stale; already true, no edit. |
| S-039 | abstract algebra → algebra main scaffold | Skipped — stale; already true, no edit. |
| S-040 | abstract algebra → orchestrator | Skipped — stale; obsolete orders already retired, no edit. |
| S-045 | abstract algebra → commutative algebra | Skipped — stale; already true, no edit. |
| S-046 | abstract algebra → functional analysis | Skipped — stale; already true, no edit. |
| S-047 | abstract algebra → number theory | Skipped — stale; already true, no edit. |
| S-050 | abstract algebra → combinatorics | Skipped — stale no-change record; no edit. |
| S-051 | abstract algebra → group theory | Skipped — stale; already true, no edit. |
| S-052 | abstract algebra → group theory | Skipped — stale; already true, no edit. |
| S-053 | abstract algebra → monoidal/abelian categories | Skipped — stale; already true, no edit. |
| S-054 | abstract algebra → differential geometry | Skipped — stale; already true, no edit. |
| S-058 | abstract algebra → orchestrator | Skipped — stale; Part II already supersedes it, no edit. |
| S-059 | abstract algebra → algebra main scaffold | Skipped — stale; already true, no edit. |
| S-060 | abstract algebra → algebra main scaffold | Skipped — stale; already true, no edit. |
| S-061 | abstract algebra → orchestrator/future builders | Skipped — stale; source harvest already replaces it, no edit. |
| S-074 | combinatorics → abstract algebra | Skipped — stale; X-2 already contains the requested results, no edit. |
| S-075 | combinatorics → abstract algebra | Skipped — stale withdrawal, no edit. |
| S-076 | combinatorics → number theory | Skipped — stale; MT-5 already supplies it, no edit. |
| S-077 | combinatorics → number theory | Skipped — stale; NT already supplies it, no edit. |
| S-079 | combinatorics → abstract algebra | Skipped — stale; already true, no edit. |
| S-080 | combinatorics → abstract algebra | Skipped — stale; already true, no edit. |
| S-084 | combinatorics → probability | Skipped — stale; ownership already correct, no edit. |
| S-085 | combinatorics → monoidal/abelian categories | Skipped — stale; already true, no edit. |
| S-086 | combinatorics → graph prerequisites | Skipped — stale; already authored, no edit. |
| S-087 | combinatorics → graph colouring | Skipped — stale; published supplier already exists, no edit. |
| S-091 | combinatorics → real analysis | Skipped — stale; superseded route, no edit. |
| S-092 | combinatorics → real analysis | Skipped — stale; current Gamma/Stirling route already settles it, no edit. |
| S-093 | combinatorics → abstract algebra | Skipped — stale; current algebra already consumes finite counting, no edit. |
| S-094 | combinatorics → abstract algebra | Skipped — stale; published Cauchy--Frobenius supplier already cited, no edit. |
| S-095 | combinatorics → abstract algebra | Skipped — stale; one multivariate-polynomial supplier already exists, no edit. |
| S-096 | combinatorics → number theory | Skipped — stale historical proof-route offer, no edit. |
| S-097 | combinatorics → topology | Skipped — stale; polygonal/general Jordan split already recorded, no edit. |
| S-098 | combinatorics → old module scaffold | Skipped — stale; superseded by current algebra/HA interfaces, no edit. |
| S-099 | combinatorics → deferred catalogue | Skipped — stale historical warning, no edit. |
| S-105 | monoidal/abelian categories → abstract algebra | Skipped — stale; MOD-3 already supplies it, no edit. |
| S-107 | monoidal/abelian categories → algebra/group theory | Skipped — stale; MA-15 fallback already settled, no edit. |
| S-108 | monoidal/abelian categories → homological algebra | Skipped — stale; ownership division already implemented, no edit. |
| S-114 | monoidal/abelian categories → future authors | Skipped — stale; smallness qualification already present, no edit. |
| S-122 | functional analysis → topology | Skipped — stale; ownership already retained, no edit. |
| S-123 | functional analysis → topology | Skipped — stale; no competing mint exists, no edit. |
| S-124 | functional analysis → measure theory | Skipped — stale; reciprocal dictionaries already present, no edit. |
| S-126 | functional analysis → measure theory/FA | Skipped — stale; convolution/Fourier split already correct, no edit. |
| S-127 | functional analysis → PDE | Skipped — stale; PDE already owns Lax--Milgram/Sobolev, no edit. |
| S-128 | functional analysis → PDE | Skipped — stale; PDE already complies, no edit. |
| S-130 | functional analysis → complex analysis | Skipped — stale content route; placement remains a separate global-splice issue, no scaffold edit. |
| S-131 | functional analysis → algebra/topology | Skipped — stale; ids already reused, no edit. |
| S-137 | commutative algebra → abstract algebra | Skipped — stale; algebra enrichment already supplies it, no edit. |
| S-140 | commutative algebra → homological algebra | Skipped — stale; HA already exposes the concepts, no edit. |
| S-141 | commutative algebra → number theory | Skipped — stale; CA/NT split already correct, no edit. |
| S-147 | group theory → abstract algebra | Skipped — stale; AG-3 already supplies it, no edit. |
| S-150 | group theory → homological algebra | Skipped — stale; division already correct, no edit. |
| S-155 | group theory → future topology | Skipped — stale; load-bearing combinatorial proofs already retained, no edit. |
| S-156 | group theory → differential geometry | Skipped — stale; Lie boundary already correct, no edit. |
| S-166 | homological algebra → group theory | Skipped — stale; derived/low-degree division already implemented, no edit. |
| S-168 | homological algebra → commutative algebra | Skipped — stale; CA already follows it, no edit. |
| S-170 | homological algebra → HA builder | Skipped — stale; MA ids already preserved, no edit. |
| S-182 | probability → future stochastic work | Skipped — stale reservation with no current target, no edit. |
| S-188 | PDE → functional analysis | Skipped — stale; existing seam already correct, no edit. |
| S-191 | PDE → differential geometry | Skipped — stale; Euclidean/general-Stokes split already correct, no edit. |
| S-192 | PDE → calculus | Skipped — stale no-change finding, no edit. |
| S-198 | number theory → complex analysis | Skipped — stale; CA-18 ids already proposed, no edit. |
| S-199 | number theory → complex analysis | Skipped — stale; CA-21/22 contract already correct, no edit. |
| S-200 | number theory → functional analysis | Skipped — stale; Fourier suppliers already present, no edit. |
| S-201 | number theory → group theory | Skipped — stale; $\mathbb Z_p/\mathbb Q_p$ boundary already correct, no edit. |
| S-202 | number theory → abstract algebra | Skipped — stale; cyclotomic/character ownership already correct, no edit. |
| S-211 | differential geometry → homological algebra | Skipped — stale; HA already scaffolds the requested ids, no edit. |
| S-212 | differential geometry → homological algebra | Skipped — stale; geometric/Lie material already remains in DG, no edit. |
| S-218 | differential geometry → measure theory/DG | Skipped — stale; RMK/recurrence/Haar split already correct, no edit. |
| S-220 | differential geometry → functional analysis | Skipped — stale; Peter--Weyl boundary already correct, no edit. |
| S-221 | differential geometry → future Hodge/PDE | Skipped — stale clean scope boundary, no edit. |
| S-230 | complex analysis → abstract algebra | Skipped — stale; X-1 wording already reading-relative, no edit. |
| S-231 | complex analysis → topology | Skipped — stale no-change finding, no edit. |
| S-232 | complex analysis → topology/set theory | Skipped — stale; winding link already non-load-bearing, no edit. |
| S-235 | complex analysis → number theory | Skipped — stale; zeta supplier split already correct, no edit. |

## 6. Silent-seam rulings R-6--R-9

| Ruling | Result |
|---|---|
| R-6 Riesz--Thorin | MT-17 mints `thm-riesz-thorin-interpolation` with the special strip argument; CA-6 and FA cite it. |
| R-7 floor and ceiling | RA-12 mints `def-floor-and-ceiling`; MA-1 and combinatorics cite it. |
| R-8 $\mathbb C\cong\mathbb R^2$ | CA-1 owns `rem-complex-plane-euclidean-dictionary`; RA-33 cites it. |
| R-9 general $C^1$ change of variables | MT-11's four-item Lebesgue change-of-variables block is unconditional; DG and PDE cite it. |

## 7. Id ownership changes and settled allocations

### Existing proposed ids whose owner changed or was definitively selected

| Id | Previous proposal/seam | Final scaffold owner |
|---|---|---|
| `def-flat-module` | Conflicting CA/AA/HA routing | abstract algebra MOD-3 (R-1); CA owns only the advanced commutative flatness theory. |
| `def-character-of-a-finite-abelian-group` | CB-27 local-mint proposal versus RT | abstract algebra RT-3 (R-3). |
| `thm-orthogonality-relations-for-characters-of-a-finite-abelian-group` | CB-27/31/14c local use without one supplier | abstract algebra RT-3 (R-3). |
| `thm-cauchy-binet-formula` | GT-7a fallback | abstract algebra LA-7. |
| `def-semisimple-and-nilpotent-linear-endomorphisms` | DG-30 fallback | abstract algebra X-2 (R-5). |
| `thm-additive-jordan-chevalley-decomposition` | DG-30 fallback | abstract algebra X-2 (R-5). |
| `thm-riesz-thorin-interpolation` | Unowned / earlier CA offer | measure theory MT-17 (R-6). |
| `def-floor-and-ceiling` | Unowned shared request | real analysis RA-12 (R-7). |
| `rem-complex-plane-euclidean-dictionary` | CA-1/RA-33 each waiting on the other | complex analysis CA-1 (R-8). |

### Stable allocations added to close routed supplier seams

- RT-1: `def-group-ring`,
  `def-augmentation-map-and-augmentation-ideal-of-a-group-ring`, and
  `thm-group-actions-and-group-ring-modules-correspond`.
- MOD-3: `def-tensor-algebra-of-a-module`,
  `thm-universal-property-of-the-tensor-algebra`,
  `thm-tensor-algebra-is-functorial`,
  `thm-tensor-product-of-algebra-homomorphisms`, and
  `thm-maps-out-of-a-tensor-algebra-quotient-are-maps-killing-the-relations`.
- MOD-4: `thm-equivalent-characterizations-of-semisimple-modules`,
  `thm-finite-length-semisimple-module-characterizations`, and
  `thm-equivalent-characterizations-of-semisimple-rings`.
- AG-4: the four Frattini/Fitting ids listed in the group-theory receipt.
- Topology HT-3/HT-6: stable covering/lifting/deck/universal-cover/
  classification ids listed in those two scaffold interfaces.
- Topology T8c/T10: `def-polish-space` and
  `thm-complex-stone-weierstrass-self-adjoint`.
- Number theory: `cor-number-of-monic-irreducible-polynomials-over-a-finite-field`,
  `def-successive-minima-of-a-convex-body-with-respect-to-a-lattice`,
  `thm-minkowski-second-theorem-on-successive-minima`, and
  `cor-ramification-support-of-an-abelian-number-field`.

The retired empty HA page ids are `long-exact-sequences-and-mapping-cones` and
`ext-and-tor`, together with their companions. They were unauthored and owned
no immutable item ids.

## 8. Blocked routes and residual questions

No route application is blocked.

One authoring-time source question remains visible by design: reconciliation
route A-057 did not adjudicate a second source for X-2 Cauchy interlacing and
Weyl inequalities. The receiving scaffold now makes the second independent
treatment and exact locator a binding pre-authoring gate; it does not invent a
source or silently drop the results.

The nine skipped owner rows in §4 remain owner/orchestrator work, not blockers
to this scaffold application. The global `plan-spec.json` splice, published
graph-item rehomes, and `DEFERRED.md` cleanup remain separate orchestrator work
exactly as directed.

## 9. Files amended

- `research/plan-algebra-track.md`
- `research/plan-algebra-track-expansion.md`
- `research/plan-category-theory-track.md`
- `research/plan-combinatorics-and-categories.md`
- `research/plan-commutative-algebra-track.md`
- `research/plan-complex-analysis-track.md`
- `research/plan-differential-geometry-track.md`
- `research/plan-functional-analysis-track.md`
- `research/plan-group-theory-track.md`
- `research/plan-homological-algebra-track.md`
- `research/plan-measure-theory-track.md`
- `research/plan-number-theory-track.md`
- `research/plan-pde-track.md`
- `research/plan-probability-track.md`
- `research/plan-realanalysis-pages.md`
- `research/plan-topology-set-theory-track.md`
- `research/plan-topology-track.md`
- `research/subjects-01-APPLY-REPORT.md`
