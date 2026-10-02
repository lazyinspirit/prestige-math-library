# Step 3b — pair `pure-braids-fadell-neuwirth-and-asphericity`

- Run: `frontier-37-owner-30`; role: alpha-high Step-3b auditor and item
  author; dispatch label
  `step3b-pair-pure-braids-fadell-neuwirth-and-asphericity-74b92a0341b4208b`.
- A page `pure-braids-fadell-neuwirth-and-asphericity` (batch 21, order 737,
  12 items: 1 definition, 4 lemmas, 5 theorems, 2 corollaries); B page
  `pure-braids-fadell-neuwirth-and-asphericity-examples` (order 738, 4 items:
  3 examples, 1 counterexample). 16 items total, every one an original
  scaffold id from the pre-author inventory; no new id was added and no
  promised item was dropped.
- All 16 items are authored, proof-contracted and decided (`accept` or
  `repaired`, confidence 1). Both page files are written. The pair's Step-3a
  scope decision `sufficient` is still current (`step3-decisions check
  --phase scope` lists this page under no open work).
- Supersedes the stale report that carried dispatch label
  `...-b0d5cce878209364` and an 11-row table.

## Inputs and control documents

- Read this dispatch: `CLAUDE.md` (normative entrypoint), the batch-21
  manifest `research/frontier-37-owner-30-batch-21.pages.json`, coverage
  `...-batch-21.coverage.json`, Step-1 notes `...-batch-21.notes.md`, the
  Step-3a scope review
  `research/frontier-37-owner-30-step3a-pair-pure-braids-fadell-neuwirth-and-asphericity.md`,
  the run's `-pre-splice-plan-findings.json` and
  `-owner-authoring-direction.md`, the batch-21 cross-batch input, the
  current item files, and — for the supplier reconciliation and dependency
  checks — the batch-20 and batch-22 sibling manifests and the batch-20
  supplier items listed below. The design sections
  (`research/plan-braid-groups-track.md` lines 340–374) and `SCHEMA.md` were
  read in the authoring session whose checkpoints are recorded in
  `...-batch-21.notes.md`.
- Step-3a observations carried into authoring and resolved or reported here:
  (i) the image-only Fadell–Neuwirth scan means FN rows rest on the Step-1
  visual inspection (pp. 111–117) plus the two published local proofs that
  cite FN (see Open obligations); (ii) the GM locator parenthetical "PDF
  pp. 12–14" is off by one — §2.1 runs printed pp. 11–14 — and the authored
  items cite that locator consistently; (iii) the design's citation of FN
  Corollary 2.2 was narrowed to the locally proved planar case
  (`lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction`);
  (iv) the classical pure-braid relation presentation remains unowned and
  unclaimed, as the scope review recorded; this pair promises generation
  only.
- Owner authoring direction (`...-owner-authoring-direction.md`): transport
  recovery after provider failure; concurrent-ownership restriction (batch
  5, 9, 16, 19 and five batch-1 Markov items belong to other writers). This
  pair is not among the restricted files; no conflict arose. The direction's
  item-level corrections concern other batches and were not touched.

## Pre-splice plan findings recheck

`research/frontier-37-owner-30-pre-splice-plan-findings.json` contains exactly
one finding naming this pair:

> page `pure-braids-fadell-neuwirth-and-asphericity` has an item depending on
> `group-extensions-complements-and-schur-zassenhaus`, which is NOT in the
> closure of its declared requires — either add it or drop the dependency.

Rechecked against current inputs: **resolved**. The A page's `requires` now
lists `group-extensions-complements-and-schur-zassenhaus`, and the consuming
item is `cor-the-pure-braid-extension-splits`, whose deps include
`thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products`
and whose facts cite `thm-splitting-lemma-for-group-extensions`; both live on
that prerequisite page. No other finding names this pair, and no finding
naming this pair remains open.

## Supplier reconciliation — batch-20 (`punctured-disks-mapping-classes-and-point-pushing`) and published items

Every declared cross-batch edge out of batch 21 was re-read in the current
supplier item and compared with the consumer's fact line and proof step. All
batch-20 suppliers are authored on disk and carry current `accept`
confidence-1 review receipts, so no escalated decision is retained for the
two point-pushing consumers.

| Consumer (step) | Supplier | Exact use verified |
| --- | --- | --- |
| `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture` [F5], steps 1.3, 3.1 | `def-point-pushing-homomorphism-for-a-puncture` | Push_n = delta([p_n o L_gamma]) in PMod, multiplicativity, no injectivity asserted, Psi([L_gamma]) = Push_n([gamma])^{-1}; the supplier explicitly defers injectivity, which the consumer proves from kappa. |
| same [F4], step 1.3 | `cor-pure-braids-are-pure-punctured-disk-mapping-classes` | Psi(G_n^pure) = PMod(D^2,Q_n;dD^2) under the braid-to-mapping-class isomorphism. |
| same [F5], step 1.3 | `thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk` | delta is the connecting isomorphism of the evaluation fibration. |
| same [F5] | `def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes` | delta([alpha]) = [lift(1)^{-1}] in pi_0(F) with the inverse-endpoint convention. |
| same [F6], steps 1.2, 2.1 | `def-pure-mapping-class-group-of-a-punctured-disk` | PMod = pi_0 of the pointwise stabiliser, product [f][g]=[f o g], injective comparison into Mod. |
| same statement, [F6], [F10], step 1.2 | `def-boundary-fixed-mapping-class-group-of-a-punctured-disk` | Q_n, Homeo^+(D^2,dD^2), compact-open topology and Mod=pi_0. |
| same [F7], step 2.1 | `lem-configuration-loops-admit-smooth-separated-point-motion-representatives` | Choice-free smooth separated representative of a based unordered loop. |
| same [F7], step 2.1 | `lem-smooth-finite-point-motions-extend-to-boundary-fixed-disk-isotopies` | Under AC_omega, extension of smooth collision-free paths to a boundary-fixed isotopy Phi with Phi_s(z_j(0))=z_j(s). |
| same [F5] | `lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism` | delta well defined and multiplicative; agrees with the connecting map. |
| same [F4], steps 1.3, 1.4 | `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk` | Psi = delta o (iota^C_*)^{-1} o Phi is an isomorphism and Psi([beta])=[g(1)] for a lift with g(0)=id. |
| `ex-pure-braid-generators-as-point-pushes` [F8], steps 2.1, 4.1 | `def-point-pushing-homomorphism-for-a-puncture` | Same definition/sign clauses as above; no injectivity is used. |
| same [F10], step 1.3 | `def-boundary-fixed-mapping-class-group-of-a-punctured-disk` | Notation and groups for the relabeling computation. |
| same [F11], step 1.4 base case | `ex-point-pushing-one-puncture-around-another` | n=2 computation: step 1.2 gives [S(sigma_1)]^{-2}=[rho_-], step 3.1 the ordered homotopy from the clockwise push to rho_-, step 4.1 Push_2([gamma]) = delta([S(sigma_1)]^{-2}) = Psi([sigma_1])^2. |
| same [F11] | `thm-ordered-configurations-cover-unordered-configurations-regularly` | Published (frontier-35-ten-categories): regular S_n-cover used to lift the n=2 equality to ordered loops. |

The page edge `pure-braids-fadell-neuwirth-and-asphericity -> punctured-disks-mapping-classes-and-point-pushing` is likewise verified: the batch-20 pair's A and B pages are authored on disk with their items, including the inverse-endpoint convention and the deferred-injectivity clause.

Reverse edges owned by batch 22 (not editable here): the review receipts for
`thm-the-artin-presentation-is-complete-for-geometric-braids`,
`lem-the-combed-geometric-decomposition-is-unique` and
`ex-the-free-kernel-words-for-three-strand-braid-combing` are escalated
pending certification of their batch-21 suppliers
(`def-standard-pure-braid-generators`,
`lem-standard-pure-braids-generate-each-free-kernel`,
`thm-pure-braid-forgetting-a-strand-short-exact-sequence`,
`cor-the-pure-braid-extension-splits`). Those suppliers are now authored and
decided here, so the batch-22 owner should refresh those receipts.

## Checkpoint log (one row per item; ascending dependency level, page order)

| Lvl | Item | Claim and conventions authored | Source locators (item `sources`) | Decision |
| --- | --- | --- | --- | --- |
| 0 | `def-standard-pure-braid-generators` | W_ij = sigma_{j-1}...sigma_{i+1} sigma_i^2 sigma_{i+1}^{-1}...sigma_{j-1}^{-1}; A_ij = [W_ij]; pure because the endpoint homomorphism kills the cancelled outer word; identified with Psi^conf of the configuration page. **Repaired orientation:** right factor of a stacking is lower and runs first, so the rightmost factor is the bottom one; W_{i,i+1}=sigma_i^2. Choice-free. | Birman–Brendle §1.2 pp. 4–5; González-Meneses §2.1. | repaired |
| 0 | `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles` | k punctures: explicit radial model, disjoint squares, collar retraction, arc cutting, collapse to the meridian-and-stem graph, stem-tree contraction; wedge theorem gives the free meridian basis; the reduced-word tree cover of the wedge is contractible so degree >= 2 based spheres lift and nullhomotope; k=0 gives a point. Choice-free. **Dep repair:** dropped `thm-homotopy-lifting-for-covering-maps`; declared the seven suppliers actually used. | Hatcher §1.A–1.B pp. 83–88; Fadell–Neuwirth §II pp. 111–114. | repaired |
| 1 | `lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction` | AC; AC=>DC only to obtain the numerable Fadell–Neuwirth fibration; base n=1 from the k=0 spine case; step: exact pi_2(F)->pi_2(E)->pi_2(B) has trivial outer terms (fibre punctured disc, base by IH), forcing pi_2(F_n,q)=0 for arbitrary q; plane/closed-disc transfers. | González-Meneses §2.1 (2.3) pp. 11–14; Fadell–Neuwirth §II–III. | accept |
| 1 | `lem-the-planar-forgetful-map-has-a-continuous-section` | Explicit s(z)=(z,1+sum|z_i|) with p o s = id, transported to the disc; finite complements of the disc are path-connected by an explicit two-segment route; a single fibre path conjugates the section to the given basepoint, giving p_* o sigma = id. Choice-free. **Dep repair:** added `thm-fundamental-group-laws`. | González-Meneses §2.1 (explicit cross-section) p. 12. | repaired |
| 2 | `thm-pure-braid-forgetting-a-strand-short-exact-sequence` | AC; LES of the Fadell–Neuwirth fibration: ker p_* = im i_*, fibre free on the n-1 positively oriented meridian classes, kappa injective from pi_2(base)=0, p_* onto by the terminal exact segment; PB_1 trivial; open-to-closed transport. | González-Meneses §2.1 (2.2) pp. 11–13; Birman–Brendle (5) p. 6. | accept |
| 2 | `thm-ordered-planar-configuration-spaces-are-aspherical` | AC; fixed k>=3 induction over the fibration (fibre vanishes in degrees k and k-1, base in degree k by IH, exactness); k=2 is the pi_2 lemma; n=1 contractible; plane/closed-disc transfer. | González-Meneses Theorem 2.2 pp. 13–14; Fadell–Neuwirth §III pp. 114–115. | accept |
| 3 | `cor-the-pure-braid-extension-splits` | AC; the based section of the planar lemma transported through the open-to-closed isomorphism is homomorphic with varphi o s = id; the published extension-splitting criteria give PB_n = F_{n-1} x| PB_{n-1} with action g.x = s(g)x s(g)^{-1}; explicit no-direct-product caveat. | González-Meneses Theorem 2.1; Birman–Brendle p. 6. | accept |
| 3 | `cor-unordered-planar-configuration-spaces-are-aspherical` | AC; lift the basepoint to the ordered cover, lift each based sphere (simply connected source plus lifting criterion), project the ordered nullhomotopy; K(B_n^conf,1) in the higher-homotopy sense. **Repair:** step 1.1 now cites [A1, F1] to discharge the AC hypothesis of the ordered supplier. | González-Meneses Theorem 2.2; branching/covering argument local. | repaired |
| 3 | `lem-standard-pure-braids-generate-each-free-kernel` | AC; kappa carries the counterclockwise meridian basis to a free basis of ker varphi; recursion A_in = sigma_{n-1} A_{i,n-1} sigma_{n-1}^{-1}; explicit point-push braid P_in with Psi([P_in]) = (kappa_*[gamma_i])^{-1}; induction via collar-sliding identifies [A_in]=[P_in]. Weakest geometric step flagged below. | González-Meneses §2.1 p. 13; Birman–Brendle §1.2. | accept |
| 3 | `thm-pure-braid-groups-are-torsion-free` | AC; induction on n; PB_0, PB_1 trivial; if g^m=1 then varphi(g) has finite order hence is trivial by IH, so g lies in the free fibre and is trivial by the published free-group torsion theorem; exponent clause stated exactly as consumers use it. | González-Meneses Corollary 2.3 p. 14. | accept |
| 4 | `thm-standard-pure-braids-generate-the-pure-braid-group` | AC; open-disc induction: last-column generators freely generate the kernel, and the explicit affine comparison g_t(z)=(1+t/n)z+t h_{n-1} plus basepoint transport [u]=beta_eta[v] turns a generator of PB_{n-1} into a product of A_{ij}; canonical-basepoint statement with path-conjugation transfer. **Dep repair:** dropped the unused `cor-the-pure-braid-extension-splits`; added the five suppliers actually used. | González-Meneses §2.1; Birman–Brendle §1.2. | repaired |
| 4 | `cex-the-short-exact-sequence-to-s-n-does-not-prove-b-n-torsion-free` | 1 -> Z -> Z x (Z/2) -> Z/2 -> 1: torsion-free kernel and finite quotient with an element of order two; the braid-to-symmetric sequence therefore cannot prove torsion-freeness of B_n^conf by itself, and no torsion claim about B_n^conf is made. **Repair:** step 4.1 cites [A1] when discharging the AC hypothesis attached to the torsion-freeness citation. | Local abstract computation. | repaired |
| 4 | `ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension` | AC; rank three: <b,c> = ker varphi free, PB_2 = <a> infinite cyclic; with the far-right section adjusted on a small representative of a, PB_3 = (F_2) x| Z and a acts by x -> w^{-1} x w with w=bc; no direct product, no centre claim. | Birman–Brendle §1.2–1.3 pp. 4–7; local computation. | accept |
| 4 | `ex-the-pure-two-strand-braid-group-is-infinite-cyclic` | AC; PB_1 trivial makes kappa : F_1 -> PB_2 an isomorphism; F_1 = Z gives PB_2 infinite cyclic generated by A_12; A_12 is the clockwise meridian (winding -1 against the counterclockwise spine basis) via inverse slicing; agrees with the torsion theorem. **Repair:** [F5] restated with the theorem's own group variable n (auditor widening candidate removed; citation-fidelity now clean). | Birman–Brendle §1.2 p. 5 (P_2 infinite cyclic). | repaired |
| 8 | `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture` | AC; Push_n = Theta_n o kappa proved from the two braid-to-mapping-class identifications (no injectivity imported); naturality square psi o Theta_n = Theta_{n-1} o varphi computed on smooth separated motion representatives under countable choice; injectivity, image = ker psi, surjectivity of psi. **Repairs:** removed unused fact [F11]; all batch-20 supplier uses reconciled (table above). | Birman–Brendle Theorem 1 pp. 5–7; Farb–Margalit §§4.2.1–4.2.3 pp. 101–105; Fadell–Neuwirth §IV pp. 118–120. | repaired |
| 9 | `ex-pure-braid-generators-as-point-pushes` | AC; claim 1: A_ij = point push of strand j clockwise around puncture i (base case the transported n=2 computation, induction by collar-sliding); claim 2: relabeling homeomorphism R transports it to the terminal slot; claim 3: double inversion through Psi^conf and Psi^mc makes the positive generator correspond to the clockwise point push. **Repairs:** canonical step numbering (1.1–4.1) with cross-references updated; [ih] removed from a non-induction step; two undeclared suppliers declared (`lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`, `thm-ordered-configurations-cover-unordered-configurations-regularly`); batch-20 uses reconciled. | Birman–Brendle §1.2 pp. 4–5; González-Meneses §2.1; Farb–Margalit §§4.2.1–4.2.3. | repaired |

## Local repairs and additions made during this dispatch

1. `def-standard-pure-braid-generators`: corrected the stacking/orientation
   clause to the library convention (right factor lower and first; rightmost
   factor bottom) and declared `prop-stacking-of-geometric-braids-is-well-defined`.
2. `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`: dropped the
   scaffold dep `thm-homotopy-lifting-for-covering-maps` (the route uses sphere
   lifting into the contractible reduced-word cover) and declared the seven
   suppliers the proof actually spends.
3. `lem-the-planar-forgetful-map-has-a-continuous-section`: added
   `thm-fundamental-group-laws` for the loop-group laws used in the basepoint
   adjustment.
4. `cor-unordered-planar-configuration-spaces-are-aspherical` and
   `cex-the-short-exact-sequence-to-s-n-does-not-prove-b-n-torsion-free`:
   explicit [A1, F1]-style discharge of the AC hypothesis attached to the
   cited suppliers.
5. `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture`: removed the
   unused fact [F11] (the proof never uses it) and reconciled every cross-batch
   supplier use.
6. `ex-pure-braid-generators-as-point-pushes`: canonical precheck numbering
   with all cross-references updated; removed an orphan `[ih]` tag; declared
   two previously undeclared suppliers; joined multi-line display blocks.
7. `thm-standard-pure-braids-generate-the-pure-braid-group`: dropped the
   unused `cor-the-pure-braid-extension-splits` and added the five suppliers
   the affine-comparison argument spends.
8. `ex-the-pure-two-strand-braid-group-is-infinite-cyclic`: restated [F5]
   with the cited theorem's own variable to remove the only widening candidate
   reported by `citation-fidelity`; re-verified.
9. Both page files were written: A page with the manifest `requires`/`items`
   and 11 body paragraphs; B page requiring only the A page with the four
   examples in its `examples` list.

## Proof contracts

`research/frontier-37-owner-30-batch-21.proof-contracts.json` covers all 16
items: 162 citations (one verbatim quote per cited fact from the source item's
Statement/Definition/Example/Remark), 107 numbered-step derivations with their
actual inputs, and 128 boundary rows (8 item-specific rows per item). It is
strict-clean (`proof-contract --strict`: 0 errors, 0 warnings, 16/16),
`boundary-audit` finds no template reuse at or above 3 members and no
contradicted disposition, and `citation-fidelity --fail-on-missing-quote`
finds no missing quote and no widening candidate after repair 8.

Honest limitation for Steps 5–8: the contract citation quotes were selected
by a script from the cited items' statement paragraphs and were not
individually read line-by-line by a human in this dispatch. The derivations
and boundary rows were generated from the authored step text. Treat the
quotes as candidates for a human read (the tools' own wording), not as
independently certified excerpts.

## Checks actually run (with results)

| Check | Actual result |
| --- | --- |
| `precheck.mts` on the 16 explicit item paths | 15 checked, 0 failing; `def-standard-pure-braid-generators` has no proof section (definition) and is correctly skipped |
| `rendercheck.mjs` on 16 items + 2 pages | OK — no wikilink in math, balanced delimiters, no multi-line display, all spans parse under KaTeX, frontmatter parses |
| `prosecheck.mjs` on the same 18 files | 0 errors, 0 warnings |
| `content-policy.mjs ...batch-21.pages.json` | 16 scoped items, 0 errors, 0 warnings |
| `manifest-deps.mjs ...batch-21.pages.json` | 16 items, 0 normalized, 0 errors |
| `coverage-checklist.mjs --require-destination` | 1 page, 30 harvested rows, 0 errors, 1 `coverage-low-yield` warning (pre-existing; explained in `...batch-21.notes.md` line 23 — see below) |
| `validate-plan.mjs research/plan-spec.json` | OK — page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids among the 1300 pages with item lists; unrelated redundant-prereq warnings on other pages and 367 planned pages still without item lists |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | 1 error, in batch 24 only: `thm-principle-of-descent-and-domination` has `dependency_level` 3 but computes to 2 (page `logarithmic-potential-capacity-and-riesz-decomposition`). Not this pair; all 16 owned labels match their computed levels |
| `proof-contract.mjs ... --strict` | 0 errors, 0 warnings, 16/16 items |
| `boundary-audit.mjs` on the contracts | 128 rows, 28 `not_applicable`; no template reuse ≥ 3; no contradicted disposition under the three detectors |
| `citation-fidelity.mjs --fail-on-missing-quote` | No missing quotes; one widening candidate found and repaired (`ex-the-pure-two-strand...`); re-run: no widening candidates |
| `finite-smoke.mjs` on the contracts | 0 errors, 0 checks over 0/16 items carrying obligations |
| `source-fetch-check.mjs --coverage ...batch-21.coverage.json` (check mode) | 4/4 source(s) fetch-verified; 4/4 resolved, 0 documented drops |
| `frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30` | Refreshed and deduplicated; all 14 declared batch-21 outward edges now carry `verified` reviews; 0 orphaned reviews for batch 21 |
| `step3-decisions.mjs record-item` for all 16 ids | 16 receipts written (9 `repaired`, 7 `accept`), each with examined dependencies and a concrete reason |
| `step3-decisions.mjs check --phase final` | Our 16 items: 0 open rows (all closed). Run-level exit 1 because 393 rows of other batches' items remain open — expected while sibling pairs are still in flight |
| `fwdcheck.mjs` (whole library) | Exit 1 from 45 pre-existing `link-unplanned`/`forward-dangling` errors in other batches (Cartier/divisor, canonical-bundle and logarithmic-capacity items); **none names this pair**; 0 open forward references |
| `extcheck.mjs` (whole library) | Exit 0 — every recorded-not-proved statement is a cited remark with no proof and every consequence is marked; none of this pair's items rests on recorded material |
| `depcheck.mjs` (whole library) | No error or cycle naming this pair; the A page appears at depth 43 and the B page at depth 44 with their declared prerequisites only |

## Published concerns for the owner (not repaired here; published content is out of this worker's write scope)

1. **Confirmed dependency-precision defect, high confidence**:
   `cor-metric-spaces-admit-subordinate-partitions-of-unity` states AC and DC
   in its Statement, while its direct `deps` list omits
   `def-axiom-of-choice` and `def-dependent-choice`; its proof invokes
   `thm-stone-metric-spaces-are-paracompact` and
   `thm-subordinate-partitions-of-unity-exist`. Repair strategy: add the two
   axiom dependencies directly and refresh affected consumer evidence; the
   statement needs no change. This is a transitivity-precision defect in a
   published transitive supplier of the batch-20 mapping-class chain, not a
   gap in this pair's route (our consumers declare AC directly).
2. **Confirmed dependency-precision defect, high confidence**:
   `def-time-dependent-vector-field-and-evolution-operator` assumes AC_omega
   in its Definition, but its only direct dependency is
   `def-smooth-vector-field-as-a-tangent-bundle-section`, omitting
   `def-countable-choice`. Repair strategy: add `def-countable-choice` as a
   direct dependency and audit affected smooth-flow consumers. Same
   provenance as (1); batch 20 recorded the same finding.
3. **Unrelated run-level defect**: the batch-24
   `item-dependency-levels` failure quoted above
   (`thm-principle-of-descent-and-domination`, level 3 vs computed 2). Route
   to the batch-24 owner.
4. **Unrelated library-wide defect class**: the 45 `fwdcheck` errors in other
   batches (unplanned wikilinks and dangling forward_refs in the
   divisor/canonical-bundle/capacity pages). None names this pair.
5. **Coverage-low-yield warning**: `coverage-checklist` reports 10/30
   harvested rows scaffolded for this page. This is the truthful harvest
   recorded in `...batch-21.notes.md` and revalidated in the Step-3a review
   ("Source coverage" section): 8 rows used inline in proofs, 5 already
   published, 6 out of scope with individual reasons and 1 deferred to a
   published later page. No promised claim is hidden by a decline, so the
   warning is reported, not "fixed".
6. **Fadell–Neuwirth source limitation**: the 1962 scan is image-only; the FN
   rows of the coverage and the authored proofs rest on the Step-1 visual
   inspection (printed pp. 111–117) plus the two published local proofs that
   cite FN §II/§III. Carried to Step 5 as a proof-level verification
   obligation, not resolved here.

## Open obligations and weak points for Steps 5–8

- **Collar-sliding isotopies** are the weakest geometric steps in the batch:
  `lem-standard-pure-braids-generate-each-free-kernel` step 2.1 and
  `ex-pure-braid-generators-as-point-pushes` step 1.4 (outer half twists
  absorbed into the middle excursion of the point push). The authored texts
  state the isotopy explicitly and the recursion they need, but an independent
  geometric audit is the natural Step-5 target for both items.
- **Contract citation quotes** were script-selected and not individually
  human-read (see the Proof contracts section); Step 5 should sample or read
  them.
- **In-run (not published) suppliers**: the batch-20 items are accepted
  in-run drafts. If their text changes, our receipts' input hashes change and
  the affected batch-21 decisions reopen automatically; the ledger edge then
  needs a fresh review. The same applies to changes in our own items for the
  batch-22 consumers.
- **Batch-22 consumers** (`thm-the-artin-presentation-is-complete-for-geometric-braids`,
  `lem-the-combed-geometric-decomposition-is-unique`,
  `ex-the-free-kernel-words-for-three-strand-braid-combing`) hold escalated
  receipts pending this pair's certification; their owner should refresh now
  that the batch-21 suppliers are decided.
- **Published defects (1) and (2)** above remain open for the owner/serial
  reconciler; `research/published-consumer-supplier-ledger.md` is not touched
  here.
- **Fadell–Neuwirth image-only scan** limitation as recorded above.

## Handoff

- Completed and decided (16/16, confidence 1):
  `def-standard-pure-braid-generators`,
  `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`,
  `lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction`,
  `lem-the-planar-forgetful-map-has-a-continuous-section`,
  `thm-pure-braid-forgetting-a-strand-short-exact-sequence`,
  `thm-ordered-planar-configuration-spaces-are-aspherical`,
  `cor-the-pure-braid-extension-splits`,
  `cor-unordered-planar-configuration-spaces-are-aspherical`,
  `lem-standard-pure-braids-generate-each-free-kernel`,
  `thm-pure-braid-groups-are-torsion-free`,
  `thm-standard-pure-braids-generate-the-pure-braid-group`,
  `cex-the-short-exact-sequence-to-s-n-does-not-prove-b-n-torsion-free`,
  `ex-the-pure-three-strand-group-as-a-split-free-by-cyclic-extension`,
  `ex-the-pure-two-strand-braid-group-is-infinite-cyclic`,
  `thm-point-pushing-is-the-kernel-of-forgetting-a-puncture`,
  `ex-pure-braid-generators-as-point-pushes`.
- Both pages written; batch-21 manifest and coverage preserved (no id, title or
  statement edited); batch-21 cross-batch input refreshed to 14 verified rows;
  no sibling batch file edited.
- Checks run: precheck, rendercheck, prosecheck, content-policy,
  manifest-deps, coverage-checklist, validate-plan, item-dependency-levels,
  proof-contract --strict, boundary-audit, citation-fidelity, finite-smoke,
  source-fetch-check, frontier-dependency-ledger refresh, step3-decisions
  record-item and final check, plus whole-library fwdcheck/extcheck/depcheck.
- Open items are only the Step-5–8 obligations and the published/run-level
  findings listed above; no unresolved supplier for this pair remains
  (all 14 outward edges verified against authored, accepted batch-20
  suppliers).
