# Step 3b — pair audit and authoring: `handle-cancellation-slides-and-elementary-moves` / `...-examples`

- **Run:** frontier-41-ha-dt-29, role `alpha-high`, label
  `step3b-pair-handle-cancellation-slides-and-elementary-moves-77dedf7ed140bfec`.
- **Pair:** A `handle-cancellation-slides-and-elementary-moves` (order 533,
  differential topology, 19 items) / B
  `handle-cancellation-slides-and-elementary-moves-examples` (order 534, 5 items).
- **Batch:** 3; this pair alone in the batch manifest.
- **Owned IDs (24 scaffold items):** the 19 A items and 5 B items listed in the
  dispatch, audited and authored in the dispatch's dependency-level order.
- **Direct in-run prerequisite pair inspected:** `handle-decompositions-duality-and-rearrangement`
  (batch 1, order 527).
- **Entry state (2026-10-06, Sydney).** Item files for all 24 owned IDs exist on
  disk with statements, facts, strategies and proofs, written by the interrupted
  first pass of this dispatch (item mtimes 2026-10-05T14:48Z; scope refresh
  recorded 14:37Z). Both page files exist. Step 3a recorded `sufficient` for
  the pair (report `...-step3a-pair-handle-cancellation-slides-and-elementary-moves.md`),
  with a refreshed scope receipt after the one local statement repair
  (`lem-transverse-complementary-spheres-have-product-charts` general clause).
  No item decision (`step3b-review-<id>.json`) is recorded yet: all 24 items
  report `current item audit required`.

## Open obligations at entry

1. Re-audit every owned item end to end (statement, hypotheses, supplier
   facts, proof steps, layout), repair local gaps, and checkpoint each item
   here in dependency order.
2. Discharge the two Step 3a auditing flags: (a) the relative-transversality
   supplier of `lem-embedded-bands-joining-two-framed-spheres-exist`; (b) the
   `k=1` slide case against Wall Theorem 5.4.5 / Figure 5.9.
3. Flag every not-yet-authored in-run supplier with exact supplier ID,
   consumer ID and consuming step; author the consumer anyway and leave that
   item decision `escalate` until the supplier and the actual use are
   reconciled.
4. Run explicit-path `precheck`, `rendercheck`, `content-policy`, strict
   `proof-contract`, `boundary-audit`, `manifest-deps`,
   `item-dependency-levels` and `validate-plan`; one batched final
   `proof-layout` over all changed item paths.
5. Record `step3-decisions.mjs record-item` for every owned item with the exact
   examined dependency list (accept/repaired at confidence 1, or escalate with
   the exact unfinished supplier named).

## Flagged unfinished in-run suppliers (supplier → consumer → consuming step)

| Supplier (batch 1, no file on disk at entry) | Consumer (this pair) | Consuming step | Status |
| --- | --- | --- | --- |
| `lem-handles-of-equal-index-can-be-attached-on-one-level` | `lem-handle-slides-preserve-the-relative-diffeomorphism-type` | 2.1 (reorder the equal-index handles after the diffeotopy; precheck-canonical numbering) | File authored on disk during the run; supplier decision recorded as `escalate` (owner-held reading gap on its final isotopy clause). Consumer authored, its decision also `escalate` (receipt `403343570e45`); owner reconciliation required. |

## Checkpoints

All checkpoints below are from the completed audit (2026-10-06), in the
dispatch's dependency order (level ascending; ties by page order and item ID).
Each item records its claim and conventions, source locators actually read,
declared dependencies examined, the recorded decision and receipt prefix, the
checks run, and any open gap. Every item was read end to end against its
suppliers' current bytes; the ten cross-batch supplier rows were reconciled
separately (see the cross-batch file and the handoff section below).

### Level 0

**`lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type`** (A, level 0) — decision `repaired` (`53d84867f1fc`).
Claim/conventions: $\mathrm{AC}_\omega$; a smooth isotopy $\varphi_t$ of
attaching embeddings constant near the parameter ends and on the far collar of
the disk factor gives diffeomorphic rounded attachments, the diffeomorphism
being the identity outside a collar of the swept region and carrying the
attaching data of later handles. Sources read: Wall §5.4, printed pp. 147-148
(deformation of attaching data across a handle); Lück Isotopy Lemma 1.8,
printed p. 5, and Milnor Theorem 5.8 (isotopy extension), printed p. 64.
Dependencies examined: the twelve declared deps, including the newly added
published supplier `prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law`.
Repair: step 6.1 of the interrupted pass used $H_1$, defined only on
$\partial W$, as a diffeomorphism of $W$; the proof was rewritten as steps
1.1-9.1 with the collar deformation
$K(c(p,s))=c(H_{\chi(s)}(p),s)$ (step 5.1), the seam identification (7.1) and
the transport to later handles (9.1). Checks: precheck PASS, strict contract 0
errors, layout clean, rendercheck OK. Open: none.

**`lem-standard-complementary-pair-fills-an-n-ball`** (A, level 0) — decision `repaired` (`14d1db96bf9a`).
Claim/conventions: $\mathrm{AC}_\omega$, $0\le k\le n-1$; (i)
$(S^k\times D^{n-k})\cup_{1\times\varphi_0}(D^{k+1}\times D^{n-k-1})\cong D^n$
after rounding, (ii)
$D^n\cup_\sigma(D^k\times D^{n-k})\cong S^k\times D^{n-k}$, compatibly.
Sources read: Wall Lemma 5.4.2, printed pp. 144-146 (confocal coordinates, the
displayed $\psi$-map, the tube
$R=\{(\lVert x\rVert-1)^2+\lVert y\rVert^2\le 1/4\}\cong S^k\times D^{n-k}$,
ray-straightening); Lück Example 1.11, printed pp. 6-7. Dependencies examined:
the seven declared deps. Repairs: steps 1.2/1.3/2.1/3.1 were rewritten to
Wall's computation (region
$\Omega=\{\tfrac12\lVert x\rVert^2+\lVert y\rVert^2\le1,\ 2\lVert x\rVert^2-2\lVert y\rVert^2\le1\}$,
injectivity and differential of $\psi$, the inverses
$(u,w,t)=(x/\lVert x\rVert,2y,2(\lVert x\rVert-1))$, and the straightening).
Convention note recorded in step 2.1: the corner of $\Omega$ sits at
$\lVert y\rVert=1/\sqrt2$, while the corner introduced in the tube model is
Wall's locus $\{t=0,\lVert w\rVert=1\}=\{\lVert x\rVert=1,\lVert y\rVert=1/2\}$;
both readings are consistent with Wall's text and are kept distinct. Checks
clean. Open: none.

**`lem-transverse-complementary-spheres-have-product-charts`** (A, level 0) — decision `repaired` (`b16ca2eb6e72`).
Claim: complementary-dimensional transverse embedded submanifolds through $p$
admit one chart carrying them to coordinate subspaces; likewise a finite family
with $T_pN=T_pS_1\oplus\cdots\oplus T_pS_r$. Source read: Wall Lemma 4.8.1,
printed pp. 122-123. Dependencies examined: the five declared deps. Repairs
found by audit: (a) the defining-function counts were swapped — $S_1$ of
dimension $a$ needs $b=m-\dim S_1$ functions and $S_2$ of dimension $b$ needs
$a=m-\dim S_2$, so the chart is $F=(g_1,\dots,g_a,f_1,\dots,f_b)$; (b) the
general-clause argument was invalid for $r\ge3$ (the total family has
$m(r-1)$ covectors, not $m$) and was replaced by the sum map
$H(s_1,\dots,s_r)=\sum s_i$, whose differential is the sum isomorphism, with
injectivity giving $q\in S_i\iff a_j(q)=p$ for $j\ne i$. Steps are canonical
(1.1, 2.1, 2.2, 3.1, 4.1, 5.1). Checks clean. Open: none.

### Level 1

**`lem-embedded-bands-joining-two-framed-spheres-exist`** (A, level 1) — decision `accept` (`8274648d05a4`).
Claim/conventions: $\mathrm{AC}_\omega$; connected $N^m$ with $m\ge2$,
disjoint embedded $(k-1)$-spheres with normal trivializations near chosen
points, $1\le k\le m-1$: an embedded band $D^{k-1}\times I$ with a normal
framing meeting $S_1\cup S_2$ exactly in the end discs, interior disjoint, and
framings matching; for $k=1$ the band is an arc. Sources read: Wall §5.4,
printed pp. 147-148 (path $\lambda$, framing, exponentiation) with Figure 5.9;
Milnor Theorem 5.8 p. 64. Dependencies examined: all declared deps.
Audit notes: complement path-connectivity via slice charts and the puncture
lemma; minimizing geodesic on the properly embedded complement; connectivity
of the $(k-1)$-frame bundle $V_{k-1}(\mathbb R^{m-1})$; band as the
exponentiation of a plane field with framing completed globally. No repair
needed. Checks clean. Open: none.

### Level 2

**`def-attaching-belt-intersection-matrix-of-adjacent-index-handles`** (A, level 2) — decision `repaired` (`0e7a0bbbdd1e`).
Claim/conventions: $\mathrm{AC}_\omega$, $1\le k\le n-2$, an index-ordered
presentation with transverse pairs, $M_{ij}=I(A_i,B_j)\in\mathbb Z$ or
$\mathbb Z_2$; the matrix depends on presentation, framings and the transverse
isotopy; endpoints excluded. Repair: the endpoint sentence no longer cites
`def-geometric-cancelling-handle-pair` (the two definitions formed a
`cited-not-in-deps` cycle); it now reads that the definition is restricted to
$1\le k\le n-2$ with the endpoints treated separately. Manifest statement
resynced. Checks: content-policy, manifest-deps, depcheck (0 owned hits). Open:
none.

**`def-geometric-cancelling-handle-pair`** (A, level 2) — decision `repaired` (`480ccbe85a08`).
Claim/conventions: consecutive $h^k,h^{k+1}$ with attaching sphere $A$ and belt
sphere $B$ meeting transversely in exactly one point; endpoint conventions
$k=0$ (the belt sphere is the whole new boundary sphere) and $k=n-1$ (dual);
the definition asserts no cancellation. Repair: the non-load-bearing wikilink
to the matrix definition was replaced by self-contained wording, breaking the
cycle; the promised configuration is unchanged. Manifest statement resynced.
Checks clean. Open: none.

**`def-handle-slide-of-one-k-handle-over-another`** (A, level 2) — decision `repaired` (`330acf87f091`).
Claim/conventions: $\mathrm{AC}_\omega$; a slide datum is a pair of points with
normal trivializations plus a band with framing; the slid core is
$S_1\setminus\operatorname{int}\beta_0$ together with the band sides and the
band-framing pushoff of $S_2\setminus\operatorname{int}\beta_1$, framed from
both handles and the band; $k=1$ read $0$-dimensionally; no uniqueness.
Repair: the pushoff clause was inserted so that the slid attachment is
disjoint from $h_2$ and the following "framed parallel copy" sentence is
literally equivalent; this matches Wall Theorem 5.4.5's conclusion (the new
embedding is disjoint from the old one). Sources read: Wall §5.4 pp. 147-148;
Lück §1.1 pp. 4-7. Manifest statement resynced. Checks clean. Open: none.

### Level 3

**`lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix`** (A, level 3) — decision `accept` (`236580208e6e`).
Claim: a single transverse point gives $M_{ij}=\pm1$ over $\mathbb Z$ (the
local sign) and $1$ over $\mathbb Z_2$. Sources read: Milnor §6 pp. 67-70;
Wall §5.4 pp. 143-148. Dependencies examined: the six declared deps. Checks
clean. Open: none.

**`lem-one-intersection-gives-the-standard-local-cancelling-model`** (A, level 3) — decision `repaired` (`533988fc8e7f`).
Claim: a geometrically cancelling pair can be isotoped (fixed outside a compact
neighbourhood of the two attaching regions) to the standard complementary pair
attached to an embedded disc $E$ containing $P$, and the affected region lies
in $E$. Sources read: Wall Theorem 5.4.3 pp. 146-147 (chart at $P$, the disc
containing both images, Lemma 5.4.2); Lück Cancellation Lemma 1.12 pp. 6-7
(the push-off diffeotopy stationary on the transverse sphere). Repair: the
previous steps 3.1/4.1 claimed that straightening the two tubular
neighbourhoods inside the chart at $P$ yields the global standard model, which
is not a valid inference; they were replaced by Lück's route — the disc-bundle
sweep of $R\setminus W$ across the rounded corner into the other summand, the
standardization of the unique crossing to the fibre $D^k\times\{x\}$, and
Wall's single-disc conclusion. Precheck renumbered the steps canonically to
1.1-4.1 and the contract follows. Checks clean. Open: none within the item;
the sweep is the published construction and is rendered with its source
locators, with independent audit to follow in Steps 5-8.

**`prop-morse-cancellation-criterion-via-a-unique-connecting-orbit`** (A, level 3) — decision `accept` (`873c97a92f03`).
Claim: two consecutive critical points of indices $k,k+1$ whose crossing
spheres $A_q,B_p$ meet transversely once give a product slab. Sources read:
Milnor Theorem 5.4 with Hypothesis 5.5 and Theorem 5.6 (Lemmas 5.7-5.9),
printed pp. 48-66; Wall Theorem 5.4.3 pp. 146-147. Dependencies examined: the
eight declared deps; the adapted-field convention ($df(X)<0$,
$X=(2u,-2v)$, classical upward field $-X$) matches
`def-morse-function-adapted-to-a-cobordism`. Checks clean. Open: none.

### Level 4

**`lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation`** (A, level 4) — decision `accept` (`e0dc761ce25f`).
Claim: on $S^2\times S^1$ a finger move of $S^2\times\{u_0\}$ across the belt
circle gives three transverse points with signs $+1,+1,-1$, so $I=1$ while the
geometric intersection has three points; a unit matrix entry does not exhibit a
cancelling pair and the Whitney trick is not available here. Sources read:
Milnor §6 pp. 67-79; Wall §5.4 pp. 143-148. Checks clean. Open: none.

**`lem-cancellation-modification-can-be-supported-in-a-trajectory-neighbourhood`** (A, level 4) — decision `accept` (`ff1b69916442`).
Claim: the modification can be supported in any prescribed neighbourhood of
$\overline T\cup\{p,q\}$; $f'$ has no critical points in the slab, $X'$ is
nowhere zero and descends, and the product diffeomorphism agrees with the flow
of $X$ outside $U$. Source read: Milnor Theorem 5.4 with Theorems 5.5/5.6,
pp. 48-66. Dependencies examined: six declared deps. Checks clean. Open: none.

**`thm-handle-cancellation`** (A, level 4) — decision `accept` (`6c904f09a378`).
Claim: $\mathrm{AC}_\omega$; a geometrically cancelling consecutive pair may be
deleted, $W\cup h^k\cup h^{k+1}\cong W$ relative to $\partial_0W$, with the
diffeomorphism acting in a collar of the affected disc and the two handles and
carrying later attaching data; $0\le k\le n-1$. Sources read: Wall Theorem
5.4.3 pp. 146-147; Lück Cancellation Lemma 1.12 pp. 6-7. Dependencies examined:
nine declared deps; the contract quote for the local model was resynced after
that item's statement stayed fixed and its proof was repaired. Checks clean.
Open: none.

### Level 5

**`lem-handle-slides-preserve-the-relative-diffeomorphism-type`** (A, level 5) — decision **`escalate`** (`403343570e45`).
Claim: a slide of $h_1$ over $h_2$ gives a diffeomorphism
$W\cup_{f_1}h_1\cup_{f_2}h_2\to W\cup_{f_1'}h_1'\cup_{f_2}h_2$ relative to
$\partial_0W$, supported near the handles and the band. The item is fully
authored (steps 1.1-4.1; precheck PASS) and its actual use of the supplier is
the equal-index reordering clause in step 2.1. Open obligation: the supplier
`lem-handles-of-equal-index-can-be-attached-on-one-level` is now authored on
disk, but its own decision is recorded as `escalate` (owner-held reading gap on
its final clause about arbitrary isotopies of attaching embeddings); since that
decision can still alter the supplier statement, this consumer's decision is
left escalated for owner reconciliation. Recorded in the cross-batch file and
in the flagged-supplier table above.

**`thm-creation-of-a-cancelling-handle-pair`** (A, level 5) — decision `accept` (`33828d2d84d6`).
Claim: at any point of $\partial_1W$ a geometrically cancelling pair of
consecutive indices can be introduced inside any prescribed disc, with the
manifold unchanged relative to $\partial_0W$; $0\le k\le n-1$. Sources read:
Wall Theorem 5.4.4 p. 147; Lück Lemma 1.13 p. 7. Dependencies examined: eight
declared deps. Checks clean. Open: none.

**`cex-adjacent-index-handles-with-zero-intersection-do-not-cancel`** (B, level 5) — decision `repaired` (`4647116de401`).
Claim refuted: in the solid torus $S^1\times D^2$ a 2-handle attached along an
embedded circle that bounds a boundary disc disjoint from the belt circle has
matrix entry $0$ over $\mathbb Z$ and $\mathbb Z_2$, is not geometrically
cancelling, and does not cancel since $\pi_1$ stays $\mathbb Z$. Repair: the
interrupted pass claimed the circle was "parallel to the belt circle"; the
correct claim is that it bounds a closed disc in the boundary, hence is
disjoint from the belt circle and null-homotopic (the previous sentence was
false and was replaced, together with the matching sentence in the B-page
prose). Checks clean. Open: none.

**`cex-algebraic-intersection-one-with-three-geometric-points`** (B, level 5) — decision `accept` (`c6cefa403cba`).
Claim refuted: in the model $W=D^4\cup h^2$ with middle boundary
$S^2\times S^1$, the finger-moved sphere meets the belt circle in three points
with signs $+1,+1,-1$, so the entry is a unit while the pair is not
geometrically cancelling. Sources: Milnor §6 pp. 67-79; Wall §5.4. Checks
clean. Open: none.

**`ex-cancelling-one-two-handle-pair-on-a-surface`** (B, level 5) — decision `accept` (`1b1f3c3d5c46`).
Claim: in dimension $2$ the annulus model has the attaching circle meeting the
belt $0$-sphere once, the pair cancels, and the matrix definition (which needs
$1\le k\le n-2$) deliberately does not cover the endpoint $k=n-1$. Sources:
Wall §5.4 pp. 143-148; Milnor §6 pp. 67-70. Checks clean. Open: none.

**`ex-cancelling-zero-one-handle-pair`** (B, level 5) — decision `accept` (`47aaabfd73ab`).
Claim: in dimension $n\ge1$ a 0-handle joined by a 1-handle whose attaching
$0$-sphere has exactly one point on the belt sphere cancels; local model
$(S^0\times D^n)\cup h^1\cong D^n$. Sources: Wall Lemma 5.4.2 with Theorem
5.4.3 pp. 144-147; Lück Example 1.11 and Lemma 1.12 for $q=0$ pp. 6-7. Checks
clean. Open: none.

### Level 6

**`lem-handle-slides-act-by-elementary-basis-change-on-handle-chains`** (A, level 6) — decision `accept` (`9cc9d89889b4`).
Claim: the slid core satisfies $[C_1']=[C_1]\pm[C_2]$ in the handle chain
group, so a slide acts by $e_1\mapsto e_1\pm e_2$. Sources: Wall Theorem 5.4.5
and the closing bookkeeping sentence, pp. 147-148; Lück §§1.1-1.2 pp. 4-9.
Dependencies examined: five declared deps. Checks clean. Open: none.

**`rem-elementary-moves-do-not-constitute-full-cerf-theory-here`** (A, level 6) — decision `accept` (`b7de72915531`).
Remark fixing the page boundary; no proof obligation; the deliberate
`forward_refs` declaration points at the Whitney-trick page. Checks clean.
Open: none.

### Level 7

**`prop-elementary-matrix-operations-are-realized-by-handle-slides`** (A, level 7) — decision `accept` (`05d164a09727`).
Claim: (i) sliding $e_{j'}$ over $e_j$ gives the column operation
$C_{j'}\mapsto C_{j'}\pm C_j$; (ii) sliding $g_{i'}$ over $g_i$ (when
$k+1\le n-2$) gives the row operation $R_{i'}\mapsto R_{i'}\pm R_i$; (iii)
reorientations multiply a row or column by $-1$. Sources: Wall Theorem 5.4.5
and §5.5 pp. 147-151; Lück §1.1 pp. 5-7. Checks clean. Open: none.

**`rem-handle-slides-are-not-handle-cancellations`** (A, level 7) — decision `accept` (`d6bacf014326`).
Remark contrasting the two moves (slides keep handle counts and act by basis
change; cancellation removes a consecutive pair) with the Euler-characteristic
obstruction to removing a single handle; no proof obligation. Checks clean.
Open: none.

### Level 8

**`ex-a-handle-slide-realizes-an-elementary-row-operation`** (B, level 8) — decision `repaired` (`db6843e6c6e4`).
Claim: in dimension $4$ a standard 1-handle gives middle boundary
$S^1\times S^2$ with belt sphere $B=\{p\}\times S^2$; two 2-handles with
$\gamma_1$ meeting $B$ once and $\gamma_2$ disjoint give the column
$(\pm1,0)^T$, and sliding $g_2$ over $g_1$ changes it to $(\pm1,\pm1)^T$, the
row operation $R_2\mapsto R_2\pm R_1$ (case (ii), $k+1=2\le n-2$). Repair: the
interrupted pass exhibited a *column* operation in the genus-two handlebody
($n=3$) while the item ID, title and page prose promised a *row* operation;
the example was rebuilt in $n=4$ as the genuine row case, with deps, manifest
statement and B-page prose resynced. Sources: Wall Theorem 5.4.5 and §5.5
pp. 147-151 with Figure 5.9; Lück §1.1 pp. 4-7. Checks clean. Open: none.

## Step 3a flag dispositions

(a) **Band lemma relative transversality** — discharged by a different route.
The authored proof of `lem-embedded-bands-joining-two-framed-spheres-exist`
does not invoke a relative-transversality supplier: it uses slice-chart
complements for path-connectivity of $N\setminus(S_1\cup S_2)$ plus the
Whitney proper-embedding/Hopf-Rinow route for the embedded arc (facts [F3]-[F5],
steps 1.1-2.1). The flag recorded at Step 3a therefore has no remaining open
obligation on this item.

(b) **$k=1$ slide case versus Wall Theorem 5.4.5** — resolved by reading the
source. Theorem 5.4.5 is stated for $2\le r\le m-2$, but its proof deforms the
attaching map by a diffeotopy and Figure 5.9 explicitly illustrates the case
$r=1$ (Wall, printed pp. 147-148: "This procedure (with $r=1$) is illustrated
in Figure 5.9"); `def-handle-slide-of-one-k-handle-over-another` records the
$k=1$ reading as the $0$-dimensional one (the band is an arc, the end discs are
points). The two $k=1$ users on this page
(`ex-cancelling-zero-one-handle-pair`, `ex-cancelling-one-two-handle-pair-on-a-surface`)
use only the endpoint conventions, and the $n=3$, $k=1$ matrix example now
realizes the column operation in the genus-two handlebody only through
`prop-elementary-matrix-operations-are-realized-by-handle-slides` case (i),
whose range $1\le k\le n-2$ includes $k=1$; no citation uses the $r=1$ case of
5.4.5 as if it were proved for $r\ge2$.

## Gates and receipts (final pass, 2026-10-06)

- `precheck` on the 24 owned item paths: 19 proof-bearing items PASS, 0 failing.
- `proof-layout` on the 24 owned paths in one command: 24 items, 86 steps, 0 defects.
- `rendercheck` on the 24 items plus both page files: OK, 26 files.
- `proof-contract --strict` on `research/frontier-41-ha-dt-29-batch-3.proof-contracts.json`: 0 errors, 0 warnings, 24/24 items.
- `boundary-audit` on the same contract: 192 rows, no template cluster at or above 3 members, no contradicted dispositions.
- `content-policy` on the batch-3 manifest: 24 scoped items, 0 errors, 0 warnings.
- `manifest-deps` on the batch-3 manifest: 24 items, 0 errors.
- `depcheck` on the 24 paths: 0 findings naming an owned item (repo-wide output still lists unrelated published debt of other pages).
- `item-dependency-levels check --run frontier-41-ha-dt-29`: 0 errors naming an owned item (22 errors remain in other batches, none in batch 3).
- `validate-plan research/plan-spec.json`: OK — acyclic page order, no item cycles, forward references or unresolved ids among the pages with item lists.
- Step 3 receipts: scope `sufficient` (sha `3a417f87ab31bfa2da68914e3c86b2357c0c515902e6d0862a037e3de06f06b3`); 23 item decisions closed (`repaired`/`accept`, confidence 1); 1 item escalated (`lem-handle-slides-preserve-the-relative-diffeomorphism-type`, receipt `403343570e45`).

## Handoff

**Completed:** all 24 assigned items (19 on A, 5 on B) authored, locally
repaired where the audit found defects, checked and receipted as above. Nine
items were repaired in this dispatch
(`lem-attaching-...-isotopic-attaching-embeddings...`, `lem-standard-complementary-pair-fills-an-n-ball`,
`lem-transverse-complementary-spheres-have-product-charts`,
`def-geometric-cancelling-handle-pair`,
`def-attaching-belt-intersection-matrix-of-adjacent-index-handles`,
`def-handle-slide-of-one-k-handle-over-another`,
`lem-one-intersection-gives-the-standard-local-cancelling-model`,
`cex-adjacent-index-handles-with-zero-intersection-do-not-cancel`,
`ex-a-handle-slide-realizes-an-elementary-row-operation`). Both page files are
present and render; the B-page prose was corrected for the row-operation
example and the zero-intersection counterexample.

**Added suppliers/deps:** one new dependency edge on
`lem-attaching-...-isotopic-attaching-embeddings...` to the published
`prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law`; on
`ex-a-handle-slide-realizes-an-elementary-row-operation` to
`lem-standard-complementary-pair-fills-an-n-ball` and
`def-attaching-a-smooth-handle-with-corner-rounding`. No new items were
created and none was dropped.

**Cross-batch reconciliation:** the batch-3 cross-batch file now records 10
supplier rows as `verified` (files present, decisions recorded, interface
read clause by clause against the consumers' uses) and 2 rows open: the
page-level row for `handle-decompositions-duality-and-rearrangement` (28/29
supplier-page items decided; one open) and the
`lem-handle-slides-preserve-the-relative-diffeomorphism-type` row described
above.

**Open obligations for the owner/engine:**

1. Reconcile `lem-handles-of-equal-index-can-be-attached-on-one-level`
   (owner-held reading gap). The consumer
   `lem-handle-slides-preserve-the-relative-diffeomorphism-type` stays
   escalated (consuming step 2.1) until then; no batch-3 edit can close it.
2. The run-level merged contract
   `research/frontier-41-ha-dt-29-proof-contracts.json` is engine-owned and was
   last merged before this session's statement edits; the engine's
   `merge-contracts` gate rebuilds it from the per-batch files before
   `proof-contract --strict`. A scan of all sibling batch contract files found
   no stale quotes of the three edited statements, so the re-merge only needs
   the batch-3 file, which is clean.
3. Independent mathematical audit and defect repair of this pair remain
   scheduled for Steps 5-8 as usual; the two proof routes rendered from
   sources at the edge of a Step-3 authoring pass are
   `lem-one-intersection-gives-the-standard-local-cancelling-model` (Lück
   1.12 push-off diffeotopy) and `lem-embedded-bands-joining-two-framed-spheres-exist`
   (Wall 5.4.5 deformation), each carrying exact locators for that audit.

**Steps 4-8 splice notes.** Only the B-page prose was amended (the
row-operation example now describes the $n=4$ row case; the zero-intersection
counterexample sentence now says the attaching circle bounds a boundary disc).
The A-page prose is unchanged. Manifest statements were re-synced for
`def-handle-slide-of-one-k-handle-over-another` and
`ex-a-handle-slide-realizes-an-elementary-row-operation` (plus the two
already-synced definitions), which is why this pair's Step 3a scope receipt was
re-recorded; no `research/plan-spec.json` amendment is requested.

**Published concerns:** none raised by this dispatch. No published item was
edited, and the only dependency warnings inside the pair (the mutual
`cited-not-in-deps` links between the two adjacent-index definitions) were
resolved in-run by rewording the two definition sentences without weakening any
claim. The repo-wide `depcheck` scan still reports unrelated published debt on
other pages; it does not block this pair.
