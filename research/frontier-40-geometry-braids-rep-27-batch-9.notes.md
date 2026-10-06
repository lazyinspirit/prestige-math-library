# Batch 9 Step 1 scaffold — Rouquier Complexes and Categorical Braid Relations

Run: `frontier-40-geometry-braids-rep-27` · pair `rouquier-complexes-and-categorical-braid-relations`
(A, order 761, `braid-groups`) / `rouquier-complexes-and-categorical-braid-relations-examples` (B, order 762).
Outputs: `research/frontier-40-geometry-braids-rep-27-batch-9.pages.json` (15 A + 4 B = 19 items),
`research/frontier-40-geometry-braids-rep-27-batch-9.coverage.json`,
`research/frontier-40-geometry-braids-rep-27-batch-9.cross-batch-dependencies.json`, this note,
and 19 item-readiness records `research/frontier-40-geometry-braids-rep-27-step1-<id>.json`.

## Owner direction and design control

`research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` was read before constructing
anything. It keeps the 27-pair scope, forbids changing the selected pairs, and explicitly permits
lower-order dependencies on other selected pairs in this exact run ("Scaffold and certify suppliers
before consumers"). It changes nothing specific to this pair; the one in-run supplier used here is
`categorical-braid-actions-and-decategorification` (order 757, batch 8), which precedes this page.

Design locations read: `research/plan-braid-groups-track.md` **L829** = the heading of
`## BG-17 — Rouquier Complexes and Categorical Braid Relations` plus its 14-row A table (L829–L854),
and **L855** = the heading of `### BG-17 — … — Examples` plus its 4-row B table (L855–L865). The two
are sections of one commissioned design; **L829 controls the A inventory and L855 the B inventory**,
and there is no competing design for this pair. The complete BG-17 section, its `Requires` list
(`type-a-soergel-bimodules-and-hecke-categorification`, `graded-quiver-algebras-and-derived-tensor-functors`,
`categorical-braid-actions-and-decategorification`, `derived-categories`,
`bounded-bimodule-complexes-and-derived-tensor`), its conventions (Rouquier-positive generator,
balanced roots, shifts matched to Rouquier), its warnings (weak vs coherent action, no Hecke
identification in the rigidification theorem) and its proof routes were preserved, with the
corrections recorded below.

## Design versus plan

`research/plan-spec.json` carries the page records 761/762 with the same ids, kinds, category,
companion pointers, titles and the identical A-page `requires` chain, and with **empty item lists**.
The plan therefore fixes the page frame and delegates the item inventory to the design; the design's
routes are the only item-level mandate. **No design-versus-plan conflict exists**; the earlier run
drift review (`frontier-40-geometry-braids-rep-27-alpha-step1-drift.md`, BG-17 entry) also returned
`no-drift` for this page.

Recorded design-level corrections (imprecisions, not plan conflicts):

1. **Decategorification normalization.** The design's route text says "match $T_i^{\pm1}$". In the
   library's published normalization ($\Phi([B_i])=H_i=v(T_i+1)$, $\Phi(vX)=v\Phi(X)$, $q=v^{-2}$)
   the exact classes are $\chi(F_i)=H_i-v=vT_i$ and $\chi(F_i^{-1})=H_i-v^{-1}=v^{-1}T_i^{-1}$;
   the unit factors $v^{\pm1}$ were verified by direct computation and cannot be dropped. The
   scaffold states the exact equalities and notes the shorthand.
2. **Stale "RG-13 normalization" phrase.** The route text cites the RG-13 normalization, but the
   only Hecke normalization on the page (and in the declared supplier closure) is the published
   BG-16 one; RG-13 (`principal-series-representations-of-gl-n-over-a-finite-field`) is not consumed.
   The proposition is stated in the local normalization.
3. **Informal decategorification sentence.** The rigidification row repeats Rouquier's informal
   "its decategorification is a quotient of the braid group". The scaffold proves strict rigidity
   and the multiplicative generator assignment but does not assert an unqualified quotient
   statement; the precise generator-level decategorification is the separate proposition, and no
   consumer needs more.
4. **Convention drift between sources.** Khovanov, Elias–Krasner and Stroppel attach the
   "positive" crossing to a complex that is the library's $F_i^{-1}$ up to a homological or internal
   shift. The design correctly says the definitions are "matched to Rouquier's convention"; the
   scaffold follows Rouquier ($F_i=[B_i\to R(1)]$ positive) and records the convention difference
   for the downstream Khovanov-convention pair (BG-19), whose dictionary item will need it.
5. **Three-term braid relation route.** The design's route (expand the 8-term complexes, apply the
   published rank-two decompositions, cancel contractible summands by Gaussian elimination) is the
   GKS/Khovanov route and is kept; Rouquier's different simplicial-complex proof is recorded as
   corroboration only.

## Inventory

A page — 15 items: the 14 design ids plus **one** authorised local prerequisite. Levels are the
tool-computed in-run dependency levels (`node tools/item-dependency-levels.mjs check --run …`;
the only in-run supplier chain outside the batch is batch 8's `def-weak-action-of-a-group-on-a-category`).

1. `def-positive-and-negative-rouquier-generator-complexes` (0) — $F_i=[B_i\to R(1)]$,
   $F_i^{-1}=[R(-1)\to B_i]$ with degree-zero maps $\varepsilon_i,\eta_i$ (Rouquier §3.2.1/§3.2.4).
2. `lem-opposite-rouquier-generator-complexes-are-homotopy-inverse` (0) — $F_i\otimes F_i^{-1}\simeq R
   \simeq F_i^{-1}\otimes F_i$ by the rank-one split and Gaussian cancellation (Rouquier Lemma 3.3).
3. `lem-rouquier-complexes-satisfy-far-commutativity` (0) — the distant swap at complex level.
4. `lem-rouquier-complexes-satisfy-the-three-term-braid-relation` (0) — no shift; rank-two decompositions.
5. `def-rouquier-complex-of-a-braid-word` (0) — iterated signed tensor totalization.
6. `def-coherent-action-of-a-group-on-a-category` (1) — chosen compositors + unit with pentagon.
7. `def-rouquier-canonical-comparisons-between-standard-graph-tensors` (0) — $R_x\otimes R_y\cong R_{xy}$
   and the transitive system $c_{t,u}$.
8. `lem-rouquier-generator-complexes-have-canonical-derived-graph-models` (0) — $F_i\cong R_{s_i}(-1)$,
   $F_i^{-1}\cong R_{s_i}(1)$, $F(\sigma)\cong R_w(-e(\sigma))$ in $D^b$.
9. `lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps` (0) — $\mathrm{Hom}_{K^b}=k$
   in internal degree $0$, localization an isomorphism, unique lift $\gamma_{t,u}$.
10. `lem-rouquier-normalized-comparison-isomorphisms-are-transitive` (1) — $\gamma_{u,w}\gamma_{t,u}=\gamma_{t,w}$.
11. `thm-rouquier-complexes-form-a-coherent-braid-group-action` (2) — Rouquier Theorem 3.5.
12. `thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence` (3).
13. `thm-rouquiers-two-braid-category-is-strict-rigid-monoidal` (3) — strict, rigid, duals $G_{v^{-1}}$.
14. `lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative` (0) — **added**:
    the Euler-class infrastructure — homotopy invariance, multiplicativity, cone additivity and descent
    to $K_0^{\mathrm{tri}}$.
15. `prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator` (4) — exact
    normalization and the general $\beta\mapsto v^{-e(\beta)}\chi(F(\beta))$ statement.

B page — 4 items, the design's four rows: `ex-the-rouquier-complex-of-a-positive-three-strand-braid` (0),
`ex-the-three-term-rouquier-braid-equivalence-in-type-a-two` (0),
`ex-normalized-comparison-maps-around-a-relation-loop` (2),
`cex-isomorphic-hecke-classes-do-not-by-themselves-prove-homotopy-equivalent-complexes` (5).

### Local addition (1)

`lem-euler-class-of-a-rouquier-complex-is-homotopy-invariant-and-multiplicative` (`local_addition` only
in the sense that it is not a design row) is required for mathematical closure of the design's
proposition: the design asserts a statement about "the alternating graded class of the two-term
complexes" and about matching the Hecke generators, and the page contains no item defining the
alternating class of a complex of bimodules or proving it is a homotopy invariant and multiplicative.
The published Euler-class item `lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant`
does not apply (its complexes are termwise projective over a single ring, and the Soergel bimodules
are not projective over $R^e$); the new lemma uses the cone term formula, the published triangulated
structure of the homotopy category and the published split Grothendieck ring of $\mathrm{SBim}_n$.
No page split, no other-batch prerequisite and no new pair are required; the A page is at 15 items.

## Mathematical verification performed at scaffold time

- **Generator shifts.** $F_i$, $F_i^{-1}$ were re-derived in the library normalization
  ($M(r)_d=M_{d+r}$ = $M\{-r\}$): multiplication $B_i\to R(1)$ and $\eta_i:R(-1)\to B_i$ are
  degree-zero bimodule maps, with $s_i(\alpha_i)=-\alpha_i$ and $R=R^{s_i}\oplus\alpha_iR^{s_i}$
  the only inputs (Rouquier §3.2.1, §3.2.4; GKS Lemma 3.8, formulas (3.3)).
- **Kernel/cokernel.** $\ker\varepsilon_i=\mathbb Q\cdot(1\otimes\alpha_i-\alpha_i\otimes1)$ with right
  $s_i$-twisted action, hence kernel $\cong R_{s_i}(-1)$; the quotient $B_i/\eta_i(R)$ is rank one
  over $R$ with support $Gr(s_i)$, hence $F_i\cong R_{s_i}(-1)$ and $F_i^{-1}\cong R_{s_i}(1)$ in
  $D^b$. The failure mode "kernel is the diagonal bimodule" was checked against by an explicit
  two-variable computation and does not occur.
- **Decategorification.** $\chi(F_i)=[B_i]-[R(1)]=H_i-v=vT_i$ and
  $\chi(F_i^{-1})=[B_i]-[R(-1)]=H_i-v^{-1}=v^{-1}T_i^{-1}$, with
  $vT_i\cdot v^{-1}T_i^{-1}=1$ and $T_i^{-1}=v^2T_i-1+v^2$; equivalently $\chi(F_i(-1))=T_i$ and
  $\chi(F_i^{-1}(1))=T_i^{-1}$. The design's shorthand is corrected accordingly (see above).
- **Homs.** Invertibility of the word complexes makes
  $\mathrm{Hom}_{K^b}(X,Y)\cong\mathrm{End}_{K^b}(R)=k$ in internal degree $0$; one-dimensionality on
  both sides upgrades the localization map to an isomorphism, so no homotopical-projectivity input
  is needed and no $R^e$-projectivity of $B_i$ is claimed anywhere.
- **Published suppliers examined.** Statements and hypotheses were read for:
  `def-type-a-soergel-bimodule-for-a-simple-reflection` (shift dictionary, the $1\otimes\alpha_i$
  generator), `lem-type-a-soergel-generators-are-finite-free-on-both-sides` (two-sided finite
  freeness — exactly the projectivity hypothesis of the derived-tensor theorem),
  `lem-the-rank-one-soergel-bimodule-square-splits` (no shift), `thm-rank-two-…-decompositions`
  (no shift; hypotheses $1\le i\le n-2$), `thm-homological-gaussian-elimination-…` (invertible-block
  hypothesis), `def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization` (Koszul
  signs), `thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor`,
  `thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility`,
  `def-type-a-standard-graph-bimodules-support-filtrations-and-character` ($R_w$ conventions),
  `thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra` (the
  normalization used above), `def-split-grothendieck-rings-of-type-a-soergel-categories`
  ($v[X]=[X(1)]$, $[X][Y]=[X\otimes Y]$), `def-triangulated-grothendieck-group`,
  `thm-the-homotopy-category-of-an-abelian-category-is-triangulated`,
  `thm-homology-factors-uniquely-through-the-homotopy-category`,
  `thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible`, and the
  strict/rigid monoidal definitions. No defective published item was found, and no published item is
  consumed to prove its own replacement.

## Source harvest

Six treatments, all fetched as complete documents and stamped
(`source-fetch-check: 6/6 source(s) fetch-verified`), including one lecture-note set and two surveys:

1. **Rouquier, *Categorification of the braid groups*** (arXiv:math/0409593v1, 22 pp.) — the primary
   source: §3 in full (F_s/F_s^{-1}, Lemma 3.1, Proposition 3.2, Lemma 3.3, γ_{t,u}, Theorems 3.5 and 3.7).
2. **Gorsky–Kivinen–Simental, *Algebra and geometry of link homology*** (IHES 2021 lecture notes,
   arXiv:2108.10356) — the same conventions as the library: §3.1 with Lemma 3.4, Example 3.5,
   Remark 3.7, Lemma 3.8, Theorem 3.10 and the fully written contraction of Lemma 3.11.
3. **Khovanov, *Triply-graded link homology and Hochschild homology of Soergel bimodules***
   (arXiv:math/0510265) — the explicit F(σ_i) complexes, Proposition 1, the Hecke/KL comparison and
   the minimal-complex reduction algorithm.
4. **Elias–Krasner, *Rouquier complexes are functorial over braid cobordisms*** (arXiv:0906.4761) —
   an independent construction with explicit chain maps and the braid-group homomorphism statement.
5. **Stroppel, *Categorification: tangle invariants and TQFTs*** (ICM 2022 proceedings, EMS Press,
   CC BY 4.0) — Theorem 3.6, Remark 3.7 and Remark 3.14 with equation (3.7) for the split
   Grothendieck ring and the decategorification comparison.
6. **Libedinsky, *Gentle introduction to Soergel bimodules I*** (arXiv:1702.00039) — the S_3
   rank-one/rank-two computations and the v-normalization of the Hecke comparison.

44 harvested headings received dispositions: 19 `included` (11 distinct items), 9 `inline`
(absorptions into named items), 9 `already-published` (5 distinct published items), 9 `out-of-scope`
with specific reasons, 0 `deferred`. No result was left undisposed and no source is cited without a
full-text stamp.

## Cross-batch dependencies

- In-run supplier input (recorded in the batch-9 cross-batch file): the page-level requirement
  `categorical-braid-actions-and-decategorification` (order 757, batch 8) and, item-level,
  `def-coherent-action-of-a-group-on-a-category` consuming
  `def-weak-action-of-a-group-on-a-category`. Status `open`; the batch-8 scaffold is authoritative at
  Step 1 and the Step-3 author/reviewer must re-verify the clause on authored content.
- Outgoing edge (owned by its consumer): the plan's order 765 pair
  `hochschild-homology-and-triply-graded-link-homology` (batch 11) requires this A page, and its own
  manifest also consumes the Khovanov-convention complexes. Batch 9 does not edit that batch's file;
  the consumer owner should consult the convention note above.
- No cycle and no forward in-run edge: every in-run supplier is at order 757 or earlier, before 761.

## Checks actually run (with results)

| check | command | result |
|---|---|---|
| manifest dependency fields | `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-9.pages.json` | 19 items, 0 missing, 0 errors |
| whole-run scaffold policy | `node tools/content-policy.mjs --manifest-only research/frontier-40-geometry-braids-rep-27-batch-*.pages.json` | 576 scoped items, 0 errors, 0 warnings |
| coverage (scaffold contract) | `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-9.coverage.json --require-destination` | 1 page, 44 harvested results, 0 errors, 0 warnings |
| full-text fetch stamps | `node tools/source-fetch-check.mjs --coverage …batch-9.coverage.json --stamp` | 6/6 fetch-verified (6 newly stamped); check-mode re-run 6/6 |
| URL liveness | `node tools/url-sweep.mjs --coverage …batch-9.coverage.json --out /tmp/bg17/out/liveness.json --recover --fail-on-dead` | 6/6 live, 0 failed (temp out-path; the shared run artifact is the engine's to write) |
| source backing | `node tools/source-backing.mjs --coverage …batch-9.coverage.json --liveness /tmp/bg17/out/liveness.json --reharvest-plan /tmp/bg17/out/reharvest.json` | 11 authored results, every one backed by an openable source; 0 reharvest work |
| dependency levels (whole run) | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` | red only on sibling batches with empty inventories (16 `empty scaffold inventory` errors for batches 10, 11, 17–20, 23, 24, 26); restricted to batch 9, 0 errors over 19 items, maximum level 7 |
| readiness records | `node tools/step1-decisions.mjs record` ×19, then `check --run frontier-40-geometry-braids-rep-27` | all 19 batch-9 items closed (`ready`); the run-wide check reports 583 items / 533 ready / 66 open rows, none of them in batch 9 |
| plan validation | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; acyclic and consistent over the 1420 pages with item lists |
| external references | `node tools/extcheck.mjs` | exit 0 (the single pre-existing `thm-urysohn-lemma` note is unrelated to this batch) |

## Unresolved findings / escalation status

- No escalation is required for batch 9: every item has a complete proof strategy with met
  prerequisites (published or the scaffolded batch-8 supplier), all deps resolve, and no cycle,
  forward edge, inadequate hypothesis or missing local prerequisite was found.
- Recorded uncertainties are the five corrections in "Design versus plan" above; none changes a
  claim's mathematical content. The most consequential is the $v^{\pm1}$ normalization in the
  decategorification proposition, which the scaffold states exactly rather than as the design's
  shorthand.
- The one working convention that downstream consumers must translate is that the library's
  positive generator $F_i$ is Rouquier's $F_s$, while Khovanov's $F(\sigma_i)$ and the positive
  complexes of Elias–Krasner and Stroppel equal the library's $F_i^{-1}$ up to a homological or
  internal shift; the BG-19 Khovanov-convention item should record this explicitly.
- Owner/operator reconciliation and the full engine gate follow construction; neither this note nor
  the readiness records are independent mathematical approval. Step 3 review is the next check.

## Continuation re-verification (post-record, before worker exit)

A continuation of the same worker session re-ran the batch gates on the frozen artifacts and
re-checked the mathematics independently against the sources. No artifact was edited (the readiness
hashes bind the transitive item closure, and re-recording a closed ready record requires the owner
flag, which this role must not use).

| re-check | command | result |
|---|---|---|
| manifest dependency fields | `node tools/manifest-deps.mjs research/frontier-40-geometry-braids-rep-27-batch-9.pages.json` | 19 items, 0 errors |
| coverage contract | `node tools/coverage-checklist.mjs research/frontier-40-geometry-braids-rep-27-batch-9.coverage.json --require-destination` | 1 page, 44 results, 0 errors, 0 warnings |
| full-text stamps | `node tools/source-fetch-check.mjs --coverage …batch-9.coverage.json` | 6/6 fetch-verified, 6/6 resolved |
| URL liveness | `node tools/url-sweep.mjs --coverage …batch-9.coverage.json --recover --fail-on-dead` | 6/6 live, 0 failed |
| whole-run scaffold policy | `node tools/content-policy.mjs --manifest-only research/frontier-40-geometry-braids-rep-27-batch-*.pages.json` | 588 items, 0 errors, 0 warnings (a batch-9-only invocation reports the declared batch-8 dependency as undeclared, as expected without sibling manifests) |
| dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27` plus an independent recomputation over all 54 run pages | no batch-9 row; all 19 labels match the rule (A 0–6, B 0–7; max 7); run-wide mismatches are confined to the rational-normal-surface batch, and the empty-inventory errors to batches 10, 11, 17–20, 23, 24, 26, none of them this batch |
| readiness records | `node tools/step1-decisions.mjs check --run frontier-40-geometry-braids-rep-27` | 588 run items / 528 ready; the 76-row work list is 60 open item rows plus 16 empty-inventory page rows and contains no batch-9 item |
| plan / external references | `node tools/validate-plan.mjs research/plan-spec.json`; `node tools/extcheck.mjs` | exit 0 both (one pre-existing unrelated `thm-urysohn-lemma` note) |

Mathematical spot-check against cached complete texts: Rouquier §3.2.1 ($F_s=[A\otimes_{A^s}A\to A]$, $A$
in degree 1, $f_s:A_s\xrightarrow{\sim}F_s(1)$), §3.2.4 and Lemma 3.3 (the inverse complex and
invertibility), Proposition 3.2 (braid relations in $K^b$), §3.3.1 (the localization isomorphism
$\mathrm{Hom}_{K^b}\cong\mathrm{Hom}_{D^b}$, the unique $\gamma_{t,u}$, the transitive system and
Theorem 3.5), Theorem 3.7 (strict rigidity; the quoted informal quotient sentence) were reread and
agree with items 1–4, 8–13. Published suppliers were reread: the $B_i$ shift dictionary
($(B_i)_d=(R\otimes_{R^{s_i}}R)_{d+1}$, $1\otimes1$ of degree $-1$), the rank-two decompositions
with no shift and $1\le i\le n-2$, the invertible-block hypothesis of Gaussian elimination, and the
Hecke normalization $\Phi([B_i])=H_i=v(T_i+1)$, $\Phi(vX)=v\Phi(X)$, $q=v^{-2}$, $v[X]=[X(1)]$
used in the decategorification items; all match. The kernel/cokernel degrees behind
$F_i\cong R_{s_i}(-1)$, $F_i^{-1}\cong R_{s_i}(1)$ were recomputed directly in the library shift
convention and are correct.

Two wording observations for Step 3 (no claim or dependency changed, nothing escalated):

1. The readiness record for `prop-decategorification-of-a-rouquier-complex-is-the-hecke-braid-generator`
   says "level 4" in its reason text; the item's computed and manifest level is 6, and the recorded
   dependency array is exact. The number is stale prose only.
2. In the strategy of `lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps`, the clause
   "R having no other graded endomorphisms in the homotopy category" must be read as "no other
   internal-degree-zero endomorphisms": the full graded endomorphism algebra of $R$ is $R$ itself, and
   only its degree-zero part is $k$. The item's statement already restricts to internal degree zero and
   warns against ungraded one-dimensionality, so the intended argument is unaffected; the author should
   phrase the step by degrees.
