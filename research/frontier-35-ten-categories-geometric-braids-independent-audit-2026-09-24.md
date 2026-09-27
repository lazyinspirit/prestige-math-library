# Independent mathematical audit — geometric braids and Artin generators

Read-only checkpoint, 2026-09-24 08:53 UTC, for the live Step 3b author of the
batch-15 A/B pair `geometric-braids-and-artin-generators`. Seven of fourteen
assigned items were on disk when checked (the first seven A items); the last
three A items and all four B items were still being written. This file records
review findings only. It changes no batch-15 item, page, manifest, contract, or
Step 3 decision.

The source conventions are González-Meneses, [*Basic results on braid
groups*](https://arxiv.org/pdf/1010.0321), §§1.2–1.3, 1.5, printed pp. 4–5,
7–8, and Birman–Brendle, [*Braids: A
Survey*](https://www.math.columbia.edu/~jb/Handbook-21.pdf), §§1.1–1.2.
González-Meneses p. 5 explicitly requires every intermediate strand to meet
each horizontal plane once and keeps the endpoints fixed; p. 7 describes the
standard half twists and crossing reduction. The local source of truth for
stacking is [the authored stacking
proposition](../items/prop-stacking-of-geometric-braids-is-well-defined.md):
`γ⋆β` runs `β` first, then `γ`, and its endpoint permutation is
`π(γ)∘π(β)`.

## Confirmed repairs, in proof-dependency order

1. [Braid isotopy
   definition](../items/def-braid-isotopy-relative-top-and-bottom.md), lines
   65 and 84. The definition says an individual top endpoint “may move inside”
   the finite set during an isotopy. Joint continuity plus the finite discrete
   endpoint set forces each endpoint to remain constant; the stacking
   proposition proves this. Say the *condition is imposed setwise*, and note
   that constancy follows. The last paragraph says vertical tangents are
   forbidden. A stationary vertical strand has a vertical tangent and is a
   valid braid; the actual forbidden feature is a height turnback, which
   makes one strand meet a horizontal plane more than once. Direct consumers:
   stacking, group, both geometric relations, and the planned B link-isotopy
   counterexample.

2. [Stacking
   proposition](../items/prop-stacking-of-geometric-braids-is-well-defined.md),
   step 1.3, line 91. The clopen sets
   `A_k={s:Z_j(s,1)=q_k}` partition `I`. Two chosen nonempty `A_k` need not
   cover `I` when more than two occur. For a nonempty proper `A_k`, use its
   open complement, the union of *all* other `A_l`, to contradict
   connectedness. The displayed positive minimum over `l≠k` is undefined
   for `n=1`; handle `n=1` directly with `A_1=I`, and use the minimum only for
   `n≥2` (`n=0` has no label `j`). This proves the endpoint-permutation
   invariance needed to couple all stacked isotopies. Direct consumers:
   group, elementary half twists, far commutativity, three-strand relation,
   and later Artin-surjectivity.

3. [Geometric-braid group
   theorem](../items/thm-geometric-braids-form-a-group.md), step 1.1, line
   79. The two unit reparametrisations are swapped. With
   `μ(t)=max(0,2t−1)` and `ν(t)=min(2t,1)`, the stacking formula gives
   `e⋆β=z∘ν` (run `β`, then wait) and `β⋆e=z∘μ` (wait, then run `β`).
   Rewrite the two branch calculations and assign the displayed isotopies
   accordingly. The conclusion that `[e]` is a two-sided unit remains true.

4. [Geometric-braid group
   theorem](../items/thm-geometric-braids-form-a-group.md), step 3.1, line
   87. For the right inverse, the printed formula is the reverse-then-forward
   path `z_{π(β)^{-1}(j)}(κ(t))`, with `κ(t)=1−2t` for `t≤1/2` and
   `κ(t)=2t−1` for `t≥1/2`. Contracting `κ` to parameter **0**, as written,
   ends at `z_{π(β)^{-1}(j)}(0)=q_{π(β)^{-1}(j)}`, which is not the fixed
   bottom `q_j` for a nonpure braid. Contract to parameter **1** using
   `κ_s(t)=(1−s)κ(t)+s`. Both ends of every `κ_s` equal 1, so every slice
   has bottom and top value `z_{π(β)^{-1}(j)}(1)=q_j`; collision-freeness is
   inherited from `β`. This supplies the missing two-sided inverse. Direct
   consumers: half-twist inverse, both relations, presentation map, and B
   examples.

5. [Elementary half-twist
   definition](../items/def-elementary-geometric-half-twist.md), line 99.
   The prose identifies the relabelled time reverse with
   `ρ^-(1−t)`, which starts at the wrong endpoint. For the label `i`, the
   reversed braid has relative path `−ρ(1−t)=ρ^-(t)`; for label `i+1` its
   relative path is the negative of this. The displayed inverse conclusion is
   correct once the explanation uses that equality. Direct consumers:
   half-twist word decomposition and two-strand example.

6. [Far-commutativity
   lemma](../items/lem-geometric-far-commutativity.md), step 1.1, line 80.
   The diamond path has varying norm: at `t=1/4`, its norm is
   `h/√2`, not `h`. The pair is distinct because `ρ(t)≠0` for all `t`,
   already stated in [F2] and the half-twist definition. Replace only the
   equality `∥ρ(t)∥_2=h>0` with the nonvanishing claim. The disjoint-support
   isotopy itself checks out. Direct consumer: Artin-surjectivity.

7. [Three-strand braid-relation
   lemma](../items/lem-geometric-three-strand-braid-relation.md), step 1.2,
   line 78, with steps 2.1–2.2 and 4.1, lines 80–92. The displayed rotation
   `rot_k(u)=c+R_{πu}(p_k)` is **not based at Q** when the triple is not
   centred at the origin. Step 1.1 defines the absolute points
   `p_k=q_{i+k−1}` and `c=q_{i+1}`. If `R` is a linear rotation,
   `rot_k(0)=c+p_k≠p_k` for `c≠0`; if `R` means an affine rotation about
   `c`, the extra `+c` is equally wrong. For the concrete allowed case
   `n=4`, `i=1`, `h=1/20`, one has `c=q_2=(-h,0)` and
   `p_1=q_1=(-3h,0)`, so the printed formula puts strand 1 at
   `(-4h,0)` at its bottom rather than `q_1=(-3h,0)`; it also moves the
   purportedly stationary middle strand away from `c`. Thus the interpolation
   in step 2.1 is not a braid isotopy in this case.

   A coordinate-consistent repair is to keep the step-1.1 `W_0/W_1` strand
   formulas in **absolute** coordinates, set `v_k:=p_k−c`, and let
   `R_θ` be the usual linear rotation about the origin. Then define
   `rot_k(u):=c+R_{πu}v_k` for the triple and `rot_j(u):=q_j` for all
   other labels. Now `v_1=(-2h,0)`, `v_2=0`, `v_3=(2h,0)`, so the middle
   stays at `c`, `rot_k(0)=p_k`, and `rot_k(1)=2c−p_k=p_{τ(k)}` for
   `τ=(i\ i+2)`. In step 1.2 replace `p_3=-p_1` and the top-endpoint
   equalities by their centred-vector versions. Step 2.1 then interpolates
   between two absolute-coordinate braids; step 2.2 still has
   `rot_k−rot_l=R_{πu}(p_k−p_l)`, so its collision inequalities need no
   change. In step 4.1 use `v_{τ(k)}=-v_k` to show
   `κ(rot_{τ(k)})=c-R_{πu}v_{τ(k)}=c+R_{πu}v_k=rot_k`, rather than the false
   absolute equality `p_{τ(k)}=-p_k`. This retains the source's half-turn
   argument and the local phase calculations. Direct consumers:
   Artin-surjectivity for every `n≥3` and the three-strand B example.

8. **Author-resolved at about 10:43 UTC.** The same [three-strand
   lemma](../items/lem-geometric-three-strand-braid-relation.md), step 1.1,
   line 76, originally reversed its intermediate 3-cycle. The current
   version correctly says
   `π(σ_{i+1}⋆σ_i)=(i+1\ i+2)∘(i\ i+1)` sends
   `i→i+2→i+1→i`, while `π(σ_i⋆σ_{i+1})` is its inverse. No owner edit
   is needed for this cycle wording; the off-center rotation defect above
   remains.

The currently authored base-braid definition and the remaining portions of
the stacking and far-commutativity proofs revealed no other confirmed
mathematical defect in this pass. At that checkpoint the source's
generic-diagram statement at González-Meneses p. 7 was only a watch point:
the not-yet-authored polygonal and half-twist-generation items needed local
proofs of finite generic perturbation and order-chamber reduction. The
polygonal item has since appeared and is audited below. Continue to audit
the generation item and four B items when they appear. Do not record final
decisions while the author is live.

## Update — polygonal item appeared at 09:05 UTC

The eighth A item,
[generic polygonal representatives](../items/lem-geometric-braids-admit-generic-polygonal-representatives.md),
is now on disk. The source at González-Meneses §1.5, printed p. 7, asserts
that generic crossings can be arranged, but gives no numerical margin or
finite-algebraic-avoidance proof; the authored local proof must supply both.
These defects are confirmed in the current draft:

9. Steps 1.1–1.3, lines 90–94, mishandle small `n` and the boundary margin.
   The text introduces `b` only inside `if n≥2` but uses `b/2` when `n≤1`,
   and takes the minimum over an empty set of labels for `n=0`. For `n≥2`,
   `ε=M/4` may exceed `b`, so step 1.3's claimed `b−ε>0` does not follow.
   Finish `n=0` immediately with the empty tuple. For `n≥1`, define the
   positive boundary margin `b`; use `ε=b/2` for `n=1` and
   `ε=min(M/4,b/2)` for `n≥2`. Choose the mesh with **m≥2** as well as
   `1/m<min_j δ_j`, so there is an interior vertex to perturb on the first
   and last pieces. For `n=1`, step 1.3 already finishes the theorem because
   every general-position condition involving pairs is vacuous; steps 2.1–3.1
   must be restricted to `n≥2`, as their `M_1` otherwise is undefined.

10. Step 2.3, line 100, does not prove that the simultaneous-crossing
    determinant is a nonzero polynomial. A vertex at the left end of a piece
    enters both its `A` and `B` coefficients, contrary to the claimed
    “exactly one of four coefficients” argument; varying one coefficient at
    a particular crossing is not a polynomial identity proof. Restrict the
    bad simultaneous-crossing conditions to **distinct pairs on the same
    affine piece**: two strict interiors of different pieces cannot share a
    height. For each pair `P`, write `A_P` for its first-coordinate difference
    at the left vertex and `D_P` for its difference at the right vertex;
    its difference along the piece is `(1−λ)A_P+λD_P`. The determinant
    `A_P D_Q−A_Q D_P` vanishes if distinct pairs `P,Q` cross together.
    Choose a label in `Q\P` (such a label exists for distinct unordered
    pairs). On the first piece, `A_P` is the fixed nonzero base-point
    difference, so varying that label's interior **right** vertex changes
    `D_Q` and makes the determinant nonzero. On the last piece, `D_P` is the
    fixed nonzero permuted-base-point difference, so varying the exclusive
    label's interior **left** vertex changes `A_Q`. On an internal piece,
    first specialize left vertices with `A_P≠0`, then vary the exclusive
    right vertex. Thus every listed determinant is a nonzero polynomial on
    the open parameter box, exactly what step 2.4 needs. Keep the separate
    breakpoint polynomials `X_{i,k}−X_{j,k}`. Step 3.1 should explicitly
    invoke only these distinct same-piece pairs. Direct consumer of this
    lemma: `lem-every-geometric-braid-is-a-word-in-half-twists`, then the
    Artin-surjectivity proposition and B two-strand example.

11. [F6], around line 83, says every nonempty real interval is uncountable;
    singleton intervals refute that wording. Step 2.4 uses only the
    nondegenerate open intervals `(-η_*,η_*)`, so say instead that every
    nondegenerate real interval is infinite (indeed uncountable). This is a
    factual qualification, not a new obstacle to the finite-avoidance proof.

The A8 scaffold strategy in the batch-15 manifest describes all excluded
degeneracies as “proper affine conditions.” Simultaneous projected crossings
require the determinant `A_P D_Q−A_Q D_P=0`, generally a **quadratic
polynomial** in vertex coordinates. After proving each same-piece determinant
nonzero as above, amend the strategy in both the batch manifest and canonical
plan to “finitely many proper polynomial conditions.”

## Earlier B-page source-boundary checkpoint

The two-strand example is not yet on disk. Its manifest strategy promises a
local lift of the argument of the nonzero point difference, isotopy invariance,
stacking additivity, and value `1` on the positive half twist. The authoring
report explicitly says this B item must prove its own winding/argument
invariant. A transitive traversal of the selected A-page `requires` found no
`the-fundamental-group-of-the-circle`, `simply-connected-plane-domains`,
`the-complex-exponential-and-eulers-formula`, or
`the-winding-number-and-the-global-cauchy-theorem` page. Thus the published
`def-degree-of-a-circle-loop`, circle-degree/winding classification,
complex-exponential and analytic-winding results cannot be silently used as
declared proof suppliers for this pair. When the example appears, inspect its
actual cited facts and proof: it must give a local finite-subdivision
argument-lift construction or explicitly reconcile a new prerequisite edge;
a substantial unavailable interface should be escalated or deferred, not
certified by the presence of a published theorem outside the pair closure.

## Independent bounded route for the pending half-twist generation lemma

This is an independent proof route for
`lem-every-geometric-braid-is-a-word-in-half-twists`, written before the
authored file appeared. It uses the earlier local
generic-polygonal lemma *after* that lemma's defects above are repaired, the
fixed half-twist formula, the defined braid isotopy and stacking, convexity of
the open disc and linear half-spaces, finite concatenation and pasting of
continuous paths, and the already declared finite-choice interface.
González-Meneses §1.5, printed p. 7, gives the finite-crossing reduction as a
geometric assertion; the following supplies the collision-free homotopies
that the source leaves implicit.

1. Take a generic polygonal representative `p(t)` with finitely many distinct
   projected crossing heights `c_1<⋯<c_r`. For `n=0`, there is only the empty
   braid. For `n=1`, contract the single loop by
   `H(s,t)=(1−s)z_1(t)+s q_1`; the open disc is convex and both endpoints
   remain `q_1`, so the empty word represents it. For `n≥2` and `r=0`, the
   whole path stays in one horizontal-order chamber and is likewise
   contractible to the constant braid.

2. At each crossing let `o` map horizontal rank to the **current original
   label**, and suppose the crossing pair occupies ranks `i,i+1`, with
   labels `p=o(i)`, `q=o(i+1)`. The pair is adjacent: if another strand had
   horizontal coordinate strictly between theirs immediately before the
   crossing, continuity would force a third equal coordinate at the crossing,
   contrary to genericity. The order after the crossing is
   `o'=o∘(i\ i+1)`. Define the reference labelled configuration `Q_o` by
   placing label `o(k)` at the fixed base point `q_k`; then `Q_o` and
   `Q_{o'}` are the endpoints of the standard `i`-th half twist with its
   labels relabelled by `o`.

3. The chamber
   `C_o={z∈(D°)^n: Re z_{o(1)}<⋯<Re z_{o(n)}}` is convex: it is an
   intersection of the convex product of open discs with strict linear
   half-spaces. In particular it lies in the ordered collision-free
   configuration space, and any two paths inside it with the same endpoints
   are homotopic rel endpoints by their pointwise straight-line interpolation.
   Choose disjoint short intervals `[a_r,b_r]` around the finitely many
   crossings so that, on each interval, all other horizontal inequalities
   remain strict and the crossing pair's **vertical** difference keeps its
   nonzero sign. This is possible by continuity and the isolated generic
   crossing property; only finitely many interval choices occur.

4. For one crossing define `V_{o,i,+}` by
   `Re z_{o(1)}<⋯<Re z_{o(i−1)}<Re z_p,Re z_q<Re z_{o(i+2)}<⋯<Re z_{o(n)}`
   and `Im z_p<Im z_q`, omitting empty left or right blocks. Define
   `V_{o,i,−}` with `Im z_p>Im z_q`. These are convex intersections of
   `(D°)^n` with strict linear inequalities and lie in the collision-free
   configuration space: the crossing pair is separated vertically, all
   other pairs horizontally. The chosen crossing window is wholly in exactly
   one such `V`, according to whether label `p` passes below or above label
   `q`.

5. The relabelled positive diamond half twist `L_o σ_i` has its left-ranked
   label below its right-ranked label throughout `0<t<1`; the negative
   `L_o σ_i^{-}` has it above. Pick `0<δ<1/2` and truncate the matching
   half twist to `[δ,1−δ]`. This truncated path lies in the same `V` as the
   observed crossing; its initial point `A_*` lies in `C_o∩V` and its final
   point `B_*` in `C_{o'}∩V`. The short initial and final tails of the full
   half twist lie in `C_o` and `C_{o'}` respectively.

6. Let `A=p(a_r)∈C_o∩V` and `B=p(b_r)∈C_{o'}∩V`. Straight segments
   `A→A_*` in `C_o∩V` and `B_*→B` in `C_{o'}∩V` exist because these
   intersections are convex. Their concatenation with the truncated standard
   crossing is a path in convex `V` from `A` to `B`; the actual crossing
   window is another path in `V` with the same endpoints. Pointwise linear
   interpolation, after putting the two concatenations on the same finite
   time subdivision, is a braid isotopy rel `A,B` between them. Within
   convex `C_o`, replace `A→A_*` by `A→Q_o` followed by the standard
   half-twist initial tail; within convex `C_{o'}`, replace `B_*→B` by
   the final tail followed by `Q_{o'}→B`. Thus the crossing window is
   homotopic rel endpoints to a chamber connector, one complete
   `L_o σ_i^{±}`, and a chamber connector. All straight-line homotopies
   remain in the displayed collision-free regions, and finite closed-piece
   pasting gives joint continuity.

7. Substitute this decomposition at each of the finitely many crossings.
   Between adjacent standard letters, the chamber connectors and the
   original crossing-free segment form a loop based at the same reference
   configuration `Q_o` inside convex `C_o`, so contract it. Contract the
   initial and final chamber loops likewise. The remaining path is the
   successive relabelled standard half twists in **chronological order**.
   By the already fixed stacking formula, that is the geometric braid of the
   word `σ_{i_r}^{ε_r}⋯σ_{i_1}^{ε_1}`, with the first crossing on the
   **right**; the relabelling at stage `r` is precisely the endpoint
   permutation coupling in `γ⋆β`. Different finite time subdivisions are
   related by the monotone reparametrisation isotopies used in the stacking
   proposition. This proves generation without using Artin presentation
   completeness, circle degree, a generic transversality theorem, or a
   new external page.

## A9 authored-generation lemma checkpoint (2026-09-24, 10:33 UTC)

The authored [generation lemma](../items/lem-every-geometric-braid-is-a-word-in-half-twists.md)
now uses a different but valid bounded reduction: straighten a single crossing
on both sides in the two adjacent order chambers (step 2.1), slide its wall
configuration to the midpoint of the standard diamond half twist (step 3.1),
then cut a longer braid at a reference configuration after its first crossing
and apply induction (steps 6.1–7.1). The affine homotopies remain collision-free
because, away from the crossing, the necessary first-coordinate differences
are strict; at the crossing, the two coincident first coordinates have a
strict vertical difference of constant sign. For the split at height `θ`, the
formula is exactly `β*=(γ⋆α)∘φ`, where `φ(t)=t/(2θ)` for `t≤θ` and
`φ(t)=1/2+(t−θ)/(2(1−θ))` for `t≥θ`; the endpoint permutation of `α`
matches the rank relabelling `l_k` in `γ`. Thus the basic homotopy and stacking
route needs clarification, not replacement.

Confirmed repairs while the author remains live:

1. Step 1.4, line 115, defines hypothesis `P` with strict comparisons to
   `α_{p−1}(c)` and `α_{p+2}(c)` for every `p∈{1,…,n−1}`. At `p=1` or
   `p=n−1` those indexed strands do not exist. Explicitly omit the left
   or right comparison when the neighbor is absent; do the same with the
   displayed order in part (ii). Otherwise `P` does not apply to the only
   generator of the two-strand case. This affects the one-crossing claim,
   induction, and two-strand B example.

2. Frontmatter line 17 and [F7] line 99 cite
   `ex-convex-subsets-of-rn-are-path-connected`, which is a published **B-page
   example** in `library/topology/connectedness-examples.md` and is outside
   the A-page proof scope. The use is elementary and local: for `x,y∈D°`
   and `0≤s≤1`, the triangle inequality gives
   `∥(1−s)x+sy∥₂≤(1−s)∥x∥₂+s∥y∥₂<1`; an order chamber is the
   intersection of `(D°)^n` with strict linear half-spaces, so each segment
   stays inside it and keeps distinct first coordinates. Put this short
   proof in [F7] or step 2.1, retain the declared convex-set and metric-ball
   definitions, and remove the B-leaf dependency. Direct consumers: all
   generation homotopies, the presentation map, and B examples.

3. Steps 2.2, 6.1, 7.1, and 8.1 (lines 119, 127, 129, 131) repeatedly use
   an induction assertion `A(M)`, but step 1.2, to which step 2.2 points,
   never defines it. Define `A(M)` explicitly as: every generic polygonal
   braid based at `Q` with exactly `M` projected crossing heights is isotopic
   to the signed word listed in the statement in reverse chronological
   stacking order. This formulation proves both the main generation claim
   and the more precise crossing-reading claim. In step 7.1 say why the
   relabelled upper braid `γ_k=β*_{l_k}` has the same crossing ranks and
   vertical signs as the corresponding upper crossings of `β*`; relabelling
   by current horizontal rank preserves those two measurements. The current
   proof establishes the basic word conclusion, but its sentence that the
   precise reading is “exactly” the claimed one lacks that explicit induction
   invariant.

4. Step 6.1, line 127, states `α_j(0)=γ_k(0)=q_j`. The definitions give
   `α_j(0)=q_j` and `γ_k(0)=β*_{l_k}(θ)=q_k`; repair the subscript. The
   subsequent stacking formula is correct once this is written consistently.

## A10 authored-presentation checkpoint (2026-09-24, 10:36 UTC)

The [presentation-surjectivity proposition](../items/prop-the-artin-presentation-surjects-onto-geometric-braids.md)
correctly applies the published von Dyck theorem to the two already proved
geometric relations and uses A9 for generation; it explicitly disclaims
injectivity. Its only independently observed defect is a relator-convention
slip: [F2] at line 65 says the equation `u=v` is recorded by `u^{-1}v`,
whereas step 1.1 at line 81 lists `uv^{-1}` for the adjacent braid relation.
These have the same normal closure, and both evaluate to the identity under
the proved relation, so this is not a theorem gap. To make the displayed use
of [F2] literal, use
`(σ_iσ_{i+1}σ_i)^{-1}(σ_{i+1}σ_iσ_{i+1})` and reverse the
corresponding evaluation. Direct consumers are the B examples and later
configuration/presentation pages.

## B1 authored-two-strand checkpoint (2026-09-24, 10:44 UTC)

The [two-strand example](../items/ex-geometric-two-strand-braids-are-integer-twists.md)
uses published circle covering and lifting results rather than the locally
patched argument lift promised by its manifest strategy. Its frontmatter,
lines 14–21, and [F5]–[F8], lines 99–105, are proof-bearing. In the canonical
plan, the companion B page has only the A page as a `requires` edge. The
transitive closure of that edge contains the cited Euclidean topology,
connectedness, basic continuity, and product/interval definitions, but it
does **not** contain the following:

| Cited item | Published supplier page | Order |
|---|---|---:|
| `thm-real-line-covers-real-line-mod-integers`; `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle` | `the-fundamental-group-of-the-circle` | 295 |
| `thm-path-lifting-for-covering-maps`; `thm-homotopy-lifting-for-covering-maps` | `covering-spaces-and-lifting` | 293 |
| `thm-quarter-turn-values-and-shift-formulas` | `sine-cosine-and-the-definition-of-pi` | 179 |

The circle page directly requires covering spaces and fundamental
trigonometric identities; those identities reach the sine/cosine page.
Consequently **one new B-page `requires` edge to
`the-fundamental-group-of-the-circle`** puts every B1 external supplier
inside the declared closure. The relevant published statements have been
read and match B1's use: the quotient projection is a covering; paths and
homotopies lift uniquely with specified initial data; the quotient circle is
homeomorphic to the geometric circle by `(cos 2πt,sin 2πt)`; and a π shift
negates sine and cosine. The one-edge scope amendment is a smaller proof
change than replacing the argument-lift and homotopy-invariance steps with a
new finite-subdivision construction. It needs reconciliation in
`research/plan-spec.json`, the batch-15 page manifest, the authored B-page
prose/frontmatter, and the affected Step 3 scope/item receipts; precheck,
rendercheck, plan and manifest-dependency gates should be rerun afterward.
This is a page-boundary issue even though the cited individual items exist.

The original B1 step 1.4, line 117, had a homotopy-lift orientation error:
`Θ(·,0):=θ` assigned a t-path to the s-boundary. **Author-resolved at about
10:54 UTC:** current step 4.1 prescribes the constant bottom lift
`Θ(s,0)=1/2`, correctly obtains `Θ(0,·)=θ` by uniqueness, and proves
isotopy invariance. The current parity dictionary and sign correction in
step 4.2 are also sound, apart from the following fresh copy slips:

- Step 4.2, line 120, says
  `Θ(1/2)=θ_β(1/2)=1/2+k(β)/2`. Since the same sentence establishes
  `Θ(t)=θ_β(2t)` on the lower half, the first equality must be
  **`Θ(1/2)=θ_β(1)`**. For `β=σ_1`, the printed equality says
  `3/4=1`, so it is concretely false. With the corrected argument, the
  next equality and the integer-offset calculation are valid.
- Remark line 128 says parity makes `ε/2` in the upper half an integer.
  When the lower braid transposes the strands, `ε=1`, so `ε/2=1/2`.
  Parity makes **`z=(k(β)−ε)/2`** an integer; step 4.2 correctly uses that
  quantity. Change the remark accordingly.

Conditional on those line repairs, the A-page generation/relations, and the
page-scope edge, the two-strand classification is sound.

## B2 authored-three-strand checkpoint (2026-09-24, 10:46 UTC)

The [three-strand example](../items/ex-the-three-strand-geometric-braid-relation.md)
specializes the A7 braid-relation homotopy to `n=3`, where the triple's center
is actually the origin. Its displayed window coordinates, rotation values,
and collision criterion in steps 1.1–2.3 agree with the stacking convention.
This correct specialization does not cure A7's false off-center formula for
general `n`. B2's trig dependencies in its frontmatter, lines 15–17, also
lie in the transitive closure of the proposed single B-page edge to
`the-fundamental-group-of-the-circle`.

Step 2.2, line 107, has two false intermediate permutation evaluations on
the second word. Under right-to-left composition,
`(2 3)∘(1 2)∘(2 3)` acts by the full chains
`1→1→2→3`, `2→3→3→2`, and `3→2→1→1`. Its final conclusion `(1 3)` is
correct; replace the printed partial calculations by these chains. The final
remark, line 115, says the whole isotopy lies in an open ball of radius
`1/8` around the origin; `q_1,q_3` are exactly at radius `1/8` at the
endpoints. Say **closed** ball of radius `1/8` (which lies strictly inside
the unit disc), or choose a slightly larger open radius.

## B3 authored-setwise-endpoint checkpoint (2026-09-24, 10:47 UTC)

The [setwise-endpoint counterexample](../items/cex-setwise-endpoints-do-not-make-a-braid-pure.md)
uses the two-strand positive half twist and computes its labelled endpoints
correctly: `q_1→q_2`, `q_2→q_1`, while the endpoint **set** remains `Q`.
The optional statement that it cannot be isotopic to the trivial braid
follows from the endpoint-permutation invariance once the A2 endpoint
partition proof is repaired. No new proof-scope edge or independent
mathematical repair is needed in B3.

## B4 authored-arc-isotopy checkpoint (2026-09-24, 10:48 UTC)

The [last counterexample](../items/cex-arbitrary-link-isotopy-need-not-be-braid-isotopy.md)
does refute its precise stated implication: every `α_s` is an embedded arc
with fixed endpoints, the boundary arcs are the trivial one-strand braid,
and the middle arc contains the distinct points at parameters `1/4` and
`3/4` at the same height `1/2`. The proof that the parameterisation is
injective is especially direct: equality of spatial coordinates gives
`λw(u)=λw(u')`, and equality of heights then gives `u=u'`.

Its geometric description is false as written. At the middle slice
`λ(1/2)=1/4`, the height is `H(u)=u+(1/4)w(u)`, which equals `2u` on
`[0,1/4]`, is **constant `1/2`** on `[1/4,3/4]`, and equals `2u−1`
on `[3/4,1]`. It never decreases. Thus lines 43–50 and 57, step 4.1 line
87, and remark line 91 must describe a horizontal **shelf** and failure of
*strict* increase / one-point-per-height graph property, not a height
turnback, nonmonotonicity, or a hairpin. The fixed endpoints and two-point
witness remain valid; no formula change is necessary. The title and page
scaffold should say **arc isotopy** rather than “link isotopy,” because the
proved refuted claim is expressly a deformation of an embedded interval and
the item disclaims claims about closed links. This requires coordinated
title/prose amendment in the item and the B-page plan/manifest metadata,
without adding an ambient isotopy extension theorem or an outside proof
supplier.

## Authored page-prose checkpoint (2026-09-24, 11:02 UTC)

The [A-page prose](../library/braid-groups/geometric-braids-and-artin-generators.md)
at line 54 says a generic polygonal representative has “no two vertices at
the same height.” The proof constructs a common mesh `t_k` for every strand,
so at each `t_k` there are `n` vertices at one height. Its actual genericity
condition is that **no pair has equal first coordinates at a breakpoint**
and projected crossings occur singly and transversely in piece interiors.
Replace the false vertex-height phrase accordingly.

The [B-page prose](../library/braid-groups/geometric-braids-and-artin-generators-examples.md)
at line 17 calls the two-strand relative difference `w=z_1−z_2` a
“nowhere-zero closed path.” If the braid has transposed endpoints, then
`w(1)=−w(0)`, so `w` is not closed. Say a nowhere-zero path ending at one
of the two values `±w(0)`; its normalized argument lift then has integral
half-turn change. Line 15 says the classification is “without any
presentation,” but B1 uses the A10 surjective map from the Artin
presentation for generation. Say “without assuming completeness of the
Artin presentation” or “without the published abstract `B_2` proof.” The
B-page's arc-isotopy prose at lines 49–58 is already correctly limited to
embedded arcs; its item title and manifest title still need alignment.
