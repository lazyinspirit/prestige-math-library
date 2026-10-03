# Step 3b — pair `oriented-and-mod-two-intersection-numbers` (alpha-high author)

- Run: `frontier-38-owner-30` (stage `3b-author`), dispatch label
  `step3b-pair-oriented-and-mod-two-intersection-numbers-57427612e3e668d5`.
- Role: alpha-high pair author (audit scaffolds, repair local gaps, author every
  assigned item and page, register contracts, record item decisions).
- A page: `oriented-and-mod-two-intersection-numbers` (batch 12, order 529,
  20 items). B page: `oriented-and-mod-two-intersection-numbers-examples`
  (batch 12, order 530, 5 items). Owned IDs: the 25 manifest items below.
- Inputs read: `AGENTS.md`, `CLAUDE.md`, `SCHEMA.md`; dispatch task; batch-12
  manifest, coverage and scaffold notes; Step 3a scope report and receipt;
  owner authoring direction; DT-11 design (`plan-differential-topology-track.md`
  L719–761, convention rows L163–164, reorder table L2198, requires row L2223);
  `plan-spec.json` orders 529/530; all 61 published external dependency items
  and the published page-level `requires` targets; the three full sources
  (Guillemin–Pollack, Milnor, Stanford 215B) re-downloaded and re-read at the
  load-bearing locators (hashes re-verified: GP `e4d815443ae77128`, Milnor
  `2c3b7412deda8aa9`, Stanford `7ac76c813f493ed7`).

## Owned IDs in the required dependency-level order

| level | item | page |
|---:|---|---|
| 0 | `def-transverse-complementary-dimensional-intersection-set` | A |
| 0 | `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign` | A |
| 0 | `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold` | A |
| 0 | `thm-transverse-preimage-for-manifolds-with-boundary` | A |
| 1 | `cor-negative-expected-dimension-generic-intersections-are-empty` | A |
| 1 | `def-local-oriented-intersection-sign` | A |
| 1 | `lem-boundary-of-a-compact-one-manifold-has-even-cardinality` | A |
| 1 | `lem-compact-transverse-complementary-intersections-are-finite` | A |
| 2 | `def-mod-two-intersection-number` | A |
| 2 | `def-oriented-intersection-number` | A |
| 2 | `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count` | A |
| 2 | `lem-preimage-orientation-agrees-with-the-local-intersection-sign` | A |
| 3 | `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs` | A |
| 3 | `thm-mod-two-intersection-number-is-homotopy-invariant` | A |
| 4 | `thm-oriented-intersection-number-is-homotopy-invariant` | A |
| 4 | `cex-geometric-cardinality-is-not-homotopy-invariant` | B |
| 4 | `ex-latitude-and-meridian-intersections-on-the-torus` | B |
| 4 | `ex-two-projective-lines-have-one-mod-two-intersection` | B |
| 5 | `cor-oriented-intersection-reduces-to-mod-two-intersection` | A |
| 5 | `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact` | A |
| 5 | `thm-intersection-number-under-factor-interchange` | A |
| 6 | `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary` | A |
| 6 | `prop-two-map-intersection-as-a-diagonal-preimage` | A |
| 6 | `cex-noncompact-intersections-can-escape-during-a-homotopy` | B |
| 7 | `ex-degree-as-intersection-with-a-regular-value` | B |

## Open obligations at entry

1. Author all 25 item files, both page files, this report, and
   `research/frontier-38-owner-30-batch-12.proof-contracts.json`.
2. Scaffold audit repairs (recorded below before authoring; each edits the
   batch-12 manifest statement so the scope receipt must be refreshed):
   - `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold` is missing
     the connectedness hypothesis of Milnor's appendix lemma (Step 3a
     observation 1; for disconnected $M$ the two-component conclusion is
     false). Repair: require $M$ connected (Milnor's appendix theorem is stated
     for connected 1-manifolds).
   - `lem-preimage-orientation-agrees-with-the-local-intersection-sign` states
     the quotient orientation with the two blocks in the order that introduces
     a spurious $(-1)^{xz}$ (its own conclusion and Guillemin–Pollack's "in
     that order" require the image of $X$ first). Repair the ordering.
   - `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`
     asserts $\partial(X\times[0,1])=X\times\{1\}-X\times\{0\}$; with the
     library product orientation that boundary is
     $(-1)^x(X\times\{1\}-X\times\{0\})$ (published
     `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary`).
     Repair: parametrize the homotopy as $[0,1]\times X$ (Guillemin–Pollack's
     $I\times X$, Milnor's order), which yields the designed end-sign statement
     verbatim.
   - `lem-compact-transverse-complementary-intersections-are-finite` needs
     closedness (or compactness of one factor) in the submanifold clause; with
     only "embedded" an infinite discrete counterexample exists in a compact
     $M$. Repair the hypotheses.
3. Run explicit-path precheck + proof-layout on every written item, rendering,
   content policy, strict proof contracts, dependency-level checks, and
   `validate-plan`; then record item decisions (`accept`/`repaired`) with full
   dependency lists, and refresh the pair's Step 3a scope receipt for the
   repaired statements.
4. Report: no in-run unfinished supplier (none listed); verify each listed
   supplier is published on disk before citing it.

## Repairs and decisions log

(appended per item during authoring; see also the manifest diff noted above)

### Checkpoint 1 (items 1–3, level 0)

- `def-transverse-complementary-dimensional-intersection-set`: written; statement
  kept (forward link dropped; manifest refreshed). Definition cites
  fibre-product theorem + intersection corollary + rank-nullity; no proof body
  (definition). precheck n/a, rendercheck clean.
- `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign`: written; manifest
  statement repaired (external swap / comparison of the two ordered direct-sum
  orientations; the old $s:V\to V$ exists only when $k=l$). Proof by transposition
  count, 3 steps; precheck PASS.
- `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold`: written with
  the connectedness hypothesis; full Milnor-appendix proof with the endpoint
  case analysis (at most two components, equal slopes in the two-component case,
  affine gluing in the one-component case, explicit circle construction in the
  two-component case). Milnor appendix re-read (pp. 56–57); structure
  cross-checked on the concrete example $I=(0,1)$, $J=(1/2,3/2)$, $M=S^1$.
  precheck PASS after adopting the dependency-layer step numbers
  (1.1, 2.1, 3.1, 4.1, 4.2, 5.1, 6.1, 7.1).
- Manifest repairs #1–#8 are recorded in the scope receipt refresh #2 and were
  listed above; no further statement edits are expected unless an item audit
  finds one.
- Next: `thm-transverse-preimage-for-manifolds-with-boundary` (level 0).

## Checkpoint 2 — final authoring pass (all 25 items, both pages)

### Repairs that landed after refresh #2

Statement-level (item file and batch-12 manifest, recorded in scope refresh #3):

- `thm-transverse-preimage-for-manifolds-with-boundary`: the zero-dimensional
  case is split off in the Statement (the preimage is discrete; its empty
  intrinsic boundary equals `F^{-1}(Z)∩∂W` exactly when the preimage avoids
  `∂W`) and `∂(F^{-1}(Z))=F^{-1}(Z)∩∂W` is stated for `dim W − codim Z ≥ 1`;
  deps add `def-embedded-submanifold-and-slice-chart` and
  `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary`.
- `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`: the
  cyclic statement link to the mod 2 invariance theorem was dropped (the trace
  setup is now described directly); a YAML escape defect in a locator was fixed.
- `ex-latitude-and-meridian-intersections-on-the-torus`: the load-bearing
  B-only dependency `ex-gauss-bonnet-for-a-flat-torus` was replaced by the
  A-page suppliers `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`,
  `def-product-orientation` and
  `thm-canonical-tangent-and-cotangent-splittings-for-products`; the two
  circles' orientations are fixed in the Given; the inherited-AC claim was
  dropped because the count uses no choice. Claims `I(A,B)=1`, `I(B,A)=−1`,
  `I_2=1` and the transverse perturbation are unchanged.
- `ex-two-projective-lines-have-one-mod-two-intersection`: the B-only citations
  were replaced — nonorientability of `RP²` now cites
  `ex-real-projective-space-is-orientable-exactly-in-odd-dimension`, and the
  standard structure of `S²` cites
  `ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds` plus
  `thm-a-regular-level-set-is-an-embedded-submanifold`; `I_2=1` and the
  non-separation reading are unchanged.

Choice bookkeeping (deps/facts; no statement change):

- `cor-oriented-intersection-reduces-to-mod-two-intersection`: `[A1]` declares
  `AC_ω` exactly for the transverse representative of step 1.1;
  `def-countable-choice` and `thm-transversality-homotopy-theorem` are
  registered in deps.
- `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`,
  `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs` and
  `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`:
  `AC_ω` inheritance through the compact-1-manifold classification supplier is
  declared in `[F1]`/`[F5]`/`[F4]` and `def-countable-choice` is registered.
  (The classification proof of
  `lem-boundary-of-a-compact-one-manifold-has-even-cardinality` fixes a
  Riemannian metric under `AC_ω`, so its consumers propagate the assumption;
  this follows the library's choice-propagation convention.)

Mechanical fixes: invalid YAML escapes in source locators of
`thm-mod-two-intersection-number-is-homotopy-invariant`,
`def-local-oriented-intersection-sign` and
`lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`
(content-policy errors); punctuation typo in step 2.1 of
`lem-compact-transverse-complementary-intersections-are-finite`.

### Item log (dispatch order; every decision receipt is on disk)

`GP` = Guillemin–Pollack 1974, `M` = Milnor, `S` = Stanford 215B (Ionel, notes
by Lin). Locators abbreviate the item's own `sources.references`; all 60
external dependencies were verified published on disk before citing.

| L | item | dec | claim and conventions | primary locators |
|---:|---|---|---|---|
| 0 | `def-transverse-complementary-dimensional-intersection-set` | repaired | fibre product and `A∩B` are 0-dimensional embedded submanifolds; tangent `ker(df_a,−dg_b)` / `T_pA∩T_pB`; empty allowed; not a number | GP Ch. 2 §4 pp. 77–78; M §4 p. 20 |
| 0 | `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign` | repaired | swapping complementary ordered blocks scales the orientation comparison by `(−1)^{kl}`; `k=0`/`l=0` recorded | GP Ch. 3 §3 p. 115 |
| 0 | `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold` | repaired | connected `M`: overlap has ≤ 2 components; one ⇒ affine gluing; two ⇒ `M ≅ S¹` | M appendix pp. 56–57 |
| 0 | `thm-transverse-preimage-for-manifolds-with-boundary` | repaired | transverse preimage over closed `Z` is an embedded submanifold with boundary of dimension `dim W − codim Z`; positive-dimensional case neat with `∂ = F^{-1}(Z)∩∂W` | GP Ch. 2 §4 pp. 78–79; M §4 pp. 20–23 |
| 1 | `cor-negative-expected-dimension-generic-intersections-are-empty` | accept | `x+z<n` plus transversality ⇒ empty; generic perturbation misses `Z`; `AC_ω` in `[F4]` | GP Ch. 2 §4 p. 77 |
| 1 | `def-local-oriented-intersection-sign` | repaired | `ε(a,b)` compares the ordered sum with the first factor `T_aX`; empty carries no signs; `x=z=0` product of point signs | GP Ch. 3 §3 pp. 107–108, 112 |
| 1 | `lem-boundary-of-a-compact-one-manifold-has-even-cardinality` | accept | compact 1-manifold ≅ finite disjoint union of `S¹` and `[0,1]`; `#∂W` even; `AC_ω` in `[A1]` for the metric | M appendix pp. 56–57 |
| 1 | `lem-compact-transverse-complementary-intersections-are-finite` | repaired | compact source ⇒ finite transverse fibre; submanifold clause one factor compact, the other closed; no choice | GP Ch. 2 §4 pp. 77–78 |
| 2 | `def-mod-two-intersection-number` | accept | `I_2` = fibre cardinality mod 2; extension by transverse representative under Countable Choice; no orientability | GP Ch. 2 §4 pp. 78–79 |
| 2 | `def-oriented-intersection-number` | accept | `I` = sum of local signs; extension under Countable Choice; submanifold case uses the inclusion | GP Ch. 3 §3 pp. 107–108, 112 |
| 2 | `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count` | repaired | signed boundary sum vanishes; `∂[a,b] = {b}−{a}`; `AC_ω` inherited via the classification | M §5 pp. 28–29 |
| 2 | `lem-preimage-orientation-agrees-with-the-local-intersection-sign` | repaired | quotient oriented with the image of `X` first; transported sign equals `ε`; `z=0` gives the regular-preimage sign | GP Ch. 3 §3 pp. 107–108 |
| 3 | `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs` | repaired | `[0,1]×X` trace: `ε_W = −ε_{F_0}` at `t=0`, `ε_W = +ε_{F_1}` at `t=1`; `Σ = I(F_1,Z)−I(F_0,Z)` | M §5 pp. 28–29; GP Ch. 3 §3 p. 108 |
| 3 | `thm-mod-two-intersection-number-is-homotopy-invariant` | repaired | transverse family: `#F_0^{-1}(Z) ≡ #F_1^{-1}(Z)` mod 2 by evenness of the compact boundary; `AC_ω` exactly in step 3.1 | GP Ch. 2 §4 pp. 78–79; M §4 pp. 20–25 |
| 4 | `thm-oriented-intersection-number-is-homotopy-invariant` | repaired | `I(F_0,Z)=I(F_1,Z)` by vanishing of the signed boundary sum; `AC_ω` exactly in step 3.1 | GP Ch. 3 §3 p. 108; M §5 pp. 28–29 |
| 4 | `cex-geometric-cardinality-is-not-homotopy-invariant` | accept | cardinality `2 →` tangency `→ 0` while signed and parity counts stay `0`; no choice | GP Ch. 2 §4 pp. 78–79; Ch. 3 §3 p. 109 |
| 4 | `ex-latitude-and-meridian-intersections-on-the-torus` | repaired | product structure/orientation; `A,B` oriented by `∂_x,∂_y`; `I(A,B)=1`, `I(B,A)=−1`, `I_2=1`; perturbation keeps `1` | GP Ch. 2 §4 p. 79; Ch. 3 §3 p. 112 |
| 4 | `ex-two-projective-lines-have-one-mod-two-intersection` | repaired | distinct projective lines meet in one transverse point; `RP²` nonorientable ⇒ only `I_2=1` and no separation | GP Ch. 2 §4 pp. 77–80; M §4 pp. 20–25 |
| 5 | `cor-oriented-intersection-reduces-to-mod-two-intersection` | repaired | `I ≡ I_2 (mod 2)`; `AC_ω` declared exactly for the representative choice | GP Ch. 2 §4 p. 79; M §4 p. 25 |
| 5 | `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact` | repaired | properness replaces compactness only where the trace is compact; endpoint properness alone insufficient | GP Ch. 2 §4 Ex. 13 p. 84; M §5 p. 26 |
| 5 | `thm-intersection-number-under-factor-interchange` | repaired | `I(g,f) = (−1)^{xz} I(f,g)`; submanifold case `(−1)^{ab}`; `x=0`/`z=0` included | GP Ch. 3 §3 p. 115 |
| 6 | `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary` | repaired | `I(A,B)=0` and `I_2(A,B)=0` for a closed cycle transverse to `W` with `B=∂W`; compactness essential; `AC_ω` inherited | GP Ch. 2 §4 p. 80; M §5 p. 28 |
| 6 | `prop-two-map-intersection-as-a-diagonal-preimage` | repaired | transversality iff diagonal transversality; `I(f,g)=(−1)^z I(f×g,Δ)`; last sentence `I(f,g)=(−1)^x I(i_Δ,f×g)` | GP Ch. 3 §3 pp. 113–114; S Lecture 15 p. 48 |
| 6 | `cex-noncompact-intersections-can-escape-during-a-homotopy` | repaired | `arctan x − t`: transverse slices with counts `1 → 0`; trace noncompact; proper endpoints insufficient | GP Ch. 2 §4 Ex. 13 p. 84; M §5 p. 26 |
| 7 | `ex-degree-as-intersection-with-a-regular-value` | accept | `deg(F) = Σ sgn(dF_p) = I(F,{y})`; closed case graph ∩ fibre; no choice | GP Ch. 3 §3 pp. 108–109; S Lecture 15 Cor. 143 |

### Checks actually run (final state; explicit paths in every command)

- `node tools/tsx-run.mjs tools/precheck.mts <all 25 item paths>` — 20 PASS,
  0 failing; the 4 definitions and the remark are precheck `n/a`.
- `node tools/rendercheck.mjs <25 items + both page files>` — OK, 27 files.
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-12.pages.json`
  — 0 errors, 0 warnings (after the three YAML-escape repairs).
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-12.proof-contracts.json --strict`
  — 0 errors, 0 warnings, 25/25.
- `node tools/proof-layout.mjs <all 25 item paths>` — 25 items, 66 steps,
  0 defects (run once, after the last edit).
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-12.pages.json`
  — 25 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` —
  exit 0; all 25 manifest labels equal the recomputed levels (0–7 as dispatched).
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0 (only
  informational `redundant-prereq` notes, see below).
- `node tools/depcheck.mjs` — repo-wide FAIL from other pairs only; after the
  B-leaf repairs, zero findings for any of the 25 ids or the two pages.
- `node tools/fwdcheck.mjs` — 0 open forward references; this pair's items
  appear only in the informational "inherited" marker list.
- `node tools/boundary-audit.mjs <contract>` — 200 rows, no template-reuse
  cluster, no contradicted disposition.
- `node tools/citation-fidelity.mjs <contract>` — 164 citations, no quote
  mismatch and no widening candidate.
- `node tools/tsx-run.mjs tools/author-check.mts frontier-38-owner-30 12` —
  `ok: true` for precheck, rendercheck, content-policy and strict
  proof-contract (fingerprint `f92ec04f5398dcad`).
- `node tools/step3-decisions.mjs check --run frontier-38-owner-30 --phase final`
  — this pair has 0 unresolved work entries.

Sources: the three full texts were re-hashed in this session and agree with the
coverage stamps — GP `e4d815443ae77128`, Milnor `2c3b7412deda8aa9`, Stanford 215B
`7ac76c813f493ed7`. Citation quotes are mechanically checked against the cited
items by the strict contract and by citation-fidelity; exact per-item locators
are in each item's `sources.references`.

### Registration

- Proof contracts: 25/25 entries; 164 citations; 66 derivations; 200 boundary
  rows (all eight axes for every item), derived from the completed arguments.
- Scope receipt refresh #3:
  `research/frontier-38-owner-30-step3a-review-oriented-and-mod-two-intersection-numbers.json`,
  sha256 `f1c4833e7342451198c4c13a1d314f25d9aaf71609cee8f1e363590678018b7c`,
  decision `sufficient`. Refreshes #1–#2 are superseded.
- Item decisions (refresh #3, superseded by Checkpoint 3 below): 25 receipts
  `research/frontier-38-owner-30-step3b-review-<id>.json` — 19 `repaired`,
  6 `accept`, all `confidence: 1`, each with its examined dependency list.
- Pages: `library/differential-topology/oriented-and-mod-two-intersection-numbers.md`
  (20 items, the six design `requires`) and
  `library/differential-topology/oriented-and-mod-two-intersection-numbers-examples.md`
  (5 examples), both `status: draft`.

## Checkpoint 3 — re-dispatch `479b0e04cee9128f`: independent re-audit and repairs

The pair was re-dispatched (label `…-479b0e04cee9128f`) after the first
attempt's process returned `ok:false` on a transient
`checkPairAuthorArtifacts` JSON-parse error raised while a sibling batch file
was mid-write; all required artifacts were in fact present (re-checked: 29/29
files, `checkPairAuthorArtifacts` ok). This pass re-read all 25 item files,
both page files, the batch-12 manifest, the coverage record and the DT-11
design rows, re-downloaded the full sources (GP `e4d815443ae77128`, Milnor
`2c3b7412deda8aa9`, Stanford 215B `7ac76c813f493ed7`) and re-derived the
load-bearing sign conventions instead of trusting the previous summary. Six
items were repaired; the thirteen downstream consumers re-opened by the
changed input closures were re-audited and refreshed as `accept`; the
remaining six receipts stayed current and their items were re-read as well.

### Repairs in this pass

1. `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold` (proof text):
   step 6.1 asserted "$d+q\notin(\inf J,\sup J)$" although the configuration
   gives $c+q<d+q\le a+p<b+p=\sup J$. Replaced by the correct contrapositive of
   step 3.1: $d+q$ lies strictly between the endpoints of $J$, so step 3.1
   excludes $d$ from the interior of $I$ and hence $d=\sup I$. Statement and
   the circle construction of 7.1 are unchanged.
2. `lem-preimage-orientation-agrees-with-the-local-intersection-sign` (proof
   text): the literal escape sequences `\u201c…\u201d` in the proof technique
   and in the locator were replaced by the intended quotation marks; no
   mathematical content changed.
3. `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`
   (proof text): step 2.1's computed sign rule had its two cases interchanged.
   The determinant computation gives $a<0$ in the first case
   ($\varepsilon_{F_0}=-1$) and $a>0$ in the second; with that correction the
   step derives $\varepsilon_W=-\varepsilon_{F_0}$ exactly as its conclusion
   states. Checked against the explicit model $[0,1]\times S^1\to\mathbb R^2$
   and the quotient-first convention of the preimage lemma.
4. `prop-two-map-intersection-as-a-diagonal-preimage` (proof text): step 2.1
   quoted the transposition count as $zl+l(l+k)$ with an undefined $k$. With
   $k=x$, $l=z$ the source computation gives $xz+z(z+x)$ transpositions, whose
   parity is $z$, matching the stated conclusion
   $I(f,g)=(-1)^zI(f\times g,\Delta_M)$ (checked numerically on
   $S^1\times S^1\to T^2$).
5. `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact`
   (statement; item and batch-12 manifest): the remark claimed that a proper
   $f$ with closed $Z$ has compact $f^{-1}(Z)$, which is false — the proper map
   $f(t)=(t,\sin t):\mathbb R\to\mathbb R^2$ is transverse to the closed
   $x$-axis and meets it in the infinite discrete set $\pi\mathbb Z$. The
   repaired statement requires a closed target (so that $Z$ is compact) for
   the finite-count extension, records compactness of the trace as the exact
   general hypothesis, and keeps the endpoint-properness and
   noncompact-homotopy conclusions. The consumer
   `cex-noncompact-intersections-can-escape-during-a-homotopy` keeps the same
   quoted clause; its use is unaffected and its receipt was refreshed.
6. `ex-degree-as-intersection-with-a-regular-value` (statement; item and
   batch-12 manifest): the graph clause asserted
   $\deg(F)=I(\Gamma_F,M\times\{y\})$. With the library convention (first
   factor first) the ordered determinant is $(-1)^n\det(dF_p)$, so the correct
   identity is $\deg(F)=I(M\times\{y\},\Gamma_F)$ — fibre first — with the
   caveat that the opposite order contributes $(-1)^n$. The proof now computes
   the sign in that order, and step 3.1 no longer invokes the undefined
   $I(F,F)$; it applies the diagonal proposition to the graph map
   $s(p)=(p,F(p))$ and the inclusion of the fibre ($n+n=\dim(M\times N)$). The
   regular-value identity $\deg(F)=\sum\operatorname{sgn}(dF_p)=I(F,\{y\})$ is
   unchanged.

### Registration refresh

- Scope receipt refresh #4: sha256 `bc0a51c5aa8d8948095690c15357d6bd1f1074929048d8b0d60a4682d0256202`,
  decision `sufficient`, covering the two statement repairs (design promises
  preserved: DT-11 item 16 "proper extension only where the trace is compact";
  B item 3 "degree as regular-value intersection").
- Item receipts: 25/25 current — 11 `repaired` (the six items above plus the
  five receipts that were already `repaired` and remain so), 14 `accept` (the
  13 closure-refresh consumers and
  `cor-negative-expected-dimension-generic-intersections-are-empty`), all
  `confidence: 1`, each with its examined dependency list.
- Contracts: the batch-12 contract was updated for the six edited items (step
  claims 6.1; 2.1; 2.1; 2.1 and 3.1; and the remark boundary worksheet).

### Checks actually run in this pass (all on the current bytes)

- `precheck` on the 25 explicit item paths — 20 PASS, 0 failing (the four
  definitions and the remark are `n/a`); `rendercheck` 27 files OK;
  `content-policy` 0 errors, 0 warnings.
- `proof-contract --strict` — 0 errors, 0 warnings, 25/25.
- `proof-layout` (once, batched, after the final edits) — 25 items, 66 steps,
  0 defects.
- `manifest-deps` 0 errors; `item-dependency-levels check --run
  frontier-38-owner-30` exit 0; `validate-plan research/plan-spec.json` exit 0.
- `citation-fidelity` — 164 citations, none missing and no widening
  candidate; `boundary-audit` — 200 rows, no template reuse and no
  contradicted disposition.
- `depcheck` / `fwdcheck` — no finding touches any of the 25 ids or the two
  pages; the repo-wide failures remain from other pairs.
- `author-check.mts frontier-38-owner-30 12` — `ok: true`, fingerprint
  `2920c4329c4fa9362cc3d9caf644978728a7c042fa91a608385b82af65363858`
  (supersedes `f92ec04f…`).
- `step3-decisions check --run frontier-38-owner-30 --phase final` — this pair
  has 0 unresolved entries; `checkPairAuthorArtifacts` — 29/29 files present.

### Handoff

- Completed IDs (25/25). A page: `def-transverse-complementary-dimensional-intersection-set`,
  `lem-compact-transverse-complementary-intersections-are-finite`,
  `def-mod-two-intersection-number`,
  `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold`,
  `lem-boundary-of-a-compact-one-manifold-has-even-cardinality`,
  `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`,
  `thm-transverse-preimage-for-manifolds-with-boundary`,
  `thm-mod-two-intersection-number-is-homotopy-invariant`,
  `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign`,
  `def-local-oriented-intersection-sign`, `def-oriented-intersection-number`,
  `lem-preimage-orientation-agrees-with-the-local-intersection-sign`,
  `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs`,
  `thm-oriented-intersection-number-is-homotopy-invariant`,
  `cor-oriented-intersection-reduces-to-mod-two-intersection`,
  `thm-intersection-number-under-factor-interchange`,
  `prop-two-map-intersection-as-a-diagonal-preimage`,
  `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary`,
  `cor-negative-expected-dimension-generic-intersections-are-empty`,
  `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact`.
  B page: `ex-latitude-and-meridian-intersections-on-the-torus`,
  `ex-two-projective-lines-have-one-mod-two-intersection`,
  `ex-degree-as-intersection-with-a-regular-value`,
  `cex-geometric-cardinality-is-not-homotopy-invariant`,
  `cex-noncompact-intersections-can-escape-during-a-homotopy`.
- Added suppliers: none. No item ids were created and no in-run supplier was
  unfinished; all 60 external dependencies are published items on disk.
- Published concerns (evidence only; no shared-ledger edits by this agent):
  1. Sibling in-run item
     `items/lem-cz-bad-part-is-integrable-away-from-expanded-cubes.md`
     (same run, different pair) carries an invalid YAML escape in a source
     locator (`\ell`/`\sqrt` inside a double-quoted scalar, frontmatter line 17),
     the class content-policy rejects. Left untouched (another pair's file).
  2. The repo-wide `depcheck`/`fwdcheck` FAILs are pre-existing and outside this
     pair: e.g. `forward-undeclared` links from
     `items/lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph.md`,
     `link-unplanned` links from the blowup-resolution items, and the schemes
     page cycle
     `schemes-subschemes-and-morphisms-locally-of-finite-type -> fibre-products-base-change-and-scheme-theoretic-fibres -> schemes-subschemes-and-morphisms-locally-of-finite-type`.
     None touches this pair.
- Open obligations for this pair: none. No escalation is outstanding; no owner
  decision was recorded or overridden (`--owner` was never used; the scope
  decisions above are reviewer receipts, `owner: false`).
- Pre-splice notes for Step 4: `validate-plan` reports informational
  `redundant-prereq` rows for the A page because the six design requirements are
  mutually reachable (for example `sard-theorem-and-transversality` through
  `whitney-embedding-tubular-neighbourhoods-and-approximation`); the
  design-mandated `requires` row was preserved rather than trimmed, and the
  pages' item/example lists match the batch-12 manifest exactly.
- Next action if work resumes: none for authoring; Steps 5–8 take over with
  independent audit. The re-dispatch (`479b0e04cee9128f`) left the pair fully
  covered: 25/25 items authored, both pages written, 25/25 current item
  receipts, refreshed scope receipt, contracts, coverage and report on disk.
