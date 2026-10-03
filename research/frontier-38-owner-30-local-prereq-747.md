# A747/B748: absolute integral LKB prerequisite investigation

Run: `frontier-38-owner-30`. Subject: `lawrence-krammer-bigelow-and-linearity` and its examples companion. Date: 2026-10-02.

**Disposition: four local prerequisite drafts authored; the complete commissioned pair is not certified.** The local equivariant model, absolute rank calculation, integral support inclusion, and small-end stabilization now have explicit proofs. The closed-surface integral spanning packet and downstream faithfulness items remain owed. No plan, manifest, shared design, scope-ledger, task, or autopilot-state file was changed. The pair remains selected with every commissioned claim retained; no unbuilt pair was imported.

## Controlling contract and source reading

Read `CLAUDE.md`, `SCHEMA.md`, and `README.md` fully. The controlling mathematical design is BG-10 in `research/plan-braid-groups-track.md`, from its A-page section through the complete examples table. The assignment is `research/frontier-38-owner-30-beta-14.task.md`; the exact engine finding in `research/frontier-38-owner-30-step1-blockers.json` is: “a justified equivariant two-dimensional cellular model and its absolute H2 injectivity/rank calculation must precede the integral basis theorem.” The current git head on inspection was `8868806d9`, publication of Frontier 37; `.autopilot/frontier-38-owner-30/state.json` exists. No concluded RESUME record was treated as live state.

Read in full:

- Bigelow, *Braid groups are linear*, cached arXiv:math/0005038v1 (`scratchpad/source-cache/braid-groups/bigelow-linear.txt`, 963 lines), and the authoritative final JAMS article, 14 (2001), 471–486, fetched from <https://web.math.ucsb.edu/~bigelow/publications/03.pdf>. Its final §4 explicitly labels the two-complex construction as involving “hand-waving” and leaving details to the reader. The final article is materially safer than v1: its Theorem 4.1 is a field-basis theorem, not an integral-basis theorem.
- Bigelow, *The Lawrence-Krammer representation*, arXiv:math/0204057v1, complete cached text (`scratchpad/source-cache/braid-groups/bigelow-lawrence-krammer.txt`, 1255 lines). The author-hosted published version at <https://web.math.ucsb.edu/~bigelow/publications/08.pdf> was also fetched and its relevant geometric/basis sections inspected. Its extracted text has a damaged font encoding; I do not claim a clean complete reading of that extracted published version. The complete readable arXiv version supplies the §4 basis argument used below.
- Krammer, *Braid groups are linear*, Annals 155 (2002), 131–156, complete cached author text arXiv:math/0405198v1 (`scratchpad/source-cache/braid-groups/krammer-linear.txt`, 1868 lines). Krammer §3 explicitly defines a formal matrix module; it supplies no proof of the equivariant geometric model at issue here.
- Paoluzzi–Paris, *A note on the Lawrence–Krammer–Bigelow representation*, AGT 2 (2002), 499–518, all 20 pages, fetched from <https://msp.org/agt/2002/2-1/agt-v2-n1-p24-p.pdf>. Its §§2–3 give the most useful explicit cell/differential route, but its Theorem 2.1 imports Salvetti 1987 and its equivariant paragraph also points to Salvetti 1994.

The fetched files/texts are temporary working copies in `/tmp/lkb-*`; the primary URLs above are the durable source locators. No source fetch failure was reported as a mathematical disproof.

## Correction needed in the local rank-row description

Bigelow 2002 Lemma 4.2 states exactly that

$$H_2(\widetilde C;\mathbb Z)\longrightarrow\mathbb Q(q,t)\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$$

is injective, and that the target has dimension $\binom n2$. This is **absolute homology to its fraction-field extension**. It is not a theorem that absolute homology injects into $H_2(\widetilde C,\widetilde\nu)$, and it is not a relative-cell-filtration computation. The design identifier `lem-the-lkb-absolute-module-injects-into-relative-homology-with-fraction-field-dimension-n-choose-two` and its proof-route text therefore overattribute their end-relative assertion to Lemma 4.2. An absolute-to-relative injection, if retained as an additional commissioned claim, needs its own exact proof. This report leaves the shared design unchanged as assigned.

In particular, the long exact sequence gives a potential kernel from $H_2(\widetilde\nu_\varepsilon)$; exactness alone does not say that kernel vanishes. The field dimension and integral torsion-freeness are separate conclusions. Neither entails integral spanning by closed surfaces.

## Explicit absolute chain calculation

The following algebraic calculation is implemented in the second local supplier draft below. The first draft supplies the geometric model by an explicit finite good-cover proof, rather than treating a presentation as a homotopy model. These are local authored proofs awaiting independent review; this report is not their audit certification.

Write $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$, $K=\mathbb Q(q,t)$. Paoluzzi–Paris use $x=q$, $y=t$. Their collapsed two-complex has one vertex, edges $a_i,b_i$ ($1\le i\le n$), $c_i$ ($1\le i\le n+1$), and faces $A_{ij}$ ($i<j$), $B_{ir}$ ($1\le r\le3$). Its attaching words are

$$\partial A_{ij}=(b_i a_j)(a_j b_i)^{-1},\quad\partial B_{i1}=(a_i c_{i+1})(c_i a_i)^{-1},$$

$$\partial B_{i2}=(c_{i+1}b_i)(c_i a_i)^{-1},\quad\partial B_{i3}=(c_{i+1}b_i)(b_i c_i)^{-1}.$$

The cover sends $a_i,b_i$ to $q$ and $c_i$ to $t$. Lifting these four words gives

$$dA_{ij}=(q-1)(a_j-b_i),$$

$$dB_{i1}=(1-t)a_i-c_i+q c_{i+1},\quad dB_{i2}=-t a_i+t b_i-c_i+c_{i+1},$$

$$dB_{i3}=(t-1)b_i-q c_i+c_{i+1}.$$

For example, the lifted word $a_i c_{i+1}a_i^{-1}c_i^{-1}$ has successive edge contributions $a_i,qc_{i+1},-ta_i,-c_i$, yielding the first $B$ formula; the same prefix rule gives the other three. These are ordinary **absolute** cellular chains of the covering complex, not the end-relative groups used by squares and triangles.

The $B$-only differential is injective over $K$, by a shorter direct calculation than the auxiliary triangular matrix in PP Proposition 3.4. If $\sum_i(r_iB_{i1}+s_iB_{i2}+u_iB_{i3})$ is a cycle, its $a_i$ and $b_i$ coefficients give

$$s_i=(1-t)t^{-1}r_i,\qquad u_i=r_i.$$

The remaining differential is

$$ (q+t^{-1})\sum_{i=1}^n r_i(c_{i+1}-c_i).$$

Since $q+t^{-1}\ne0$ in $K$, the $c_1$ coefficient forces $r_1=0$, and successively the $c_2,\ldots,c_n$ coefficients force every $r_i=0$. Then every $s_i,u_i$ is zero. Projection of the full kernel onto the $\binom n2$ $A$-coordinates is consequently injective.

For completeness, put $S=(t-1)(qt+1)$ and define

$$V_{ib}=-qtB_{i1}+q(t-1)B_{i2}+B_{i3},\quad V_{ia}=B_{i1}+q(t-1)B_{i2}-qtB_{i3},$$

$$V_{i0}=-tB_{i1}+(t-1)B_{i2}-tB_{i3}.$$

Substitution in the displayed differential gives

$$dV_{ib}=Sb_i-(q-1)(qt+1)c_{i+1},\quad dV_{ia}=-Sa_i+(q-1)(qt+1)c_i,$$

$$dV_{i0}=(qt+1)(c_i-c_{i+1}).$$

Thus

$$E_{ij}=SA_{ij}+(q-1)V_{ib}+(q-1)V_{ja}+\sum_{i<k<j}(q-1)^2V_{k0}$$

is an integral cycle: its $a_j,b_i$ terms cancel $d(SA_{ij})$, and its $c$ terms telescope to zero. Its unique nonzero $A$-coordinate is the $A_{ij}$ coordinate $S$. The $E_{ij}$ are therefore independent over $K$. With the preceding upper bound, they form a $K$-basis of the kernel, of dimension $\binom n2$.

If a covering homotopy equivalence has genuinely established this cellular model, the existing cellular comparison theorem makes absolute $H_2$ equal to $\ker(d:C_2\to C_1)$, since there are no 3-cells. The kernel is a submodule of the free $\Lambda$-module $C_2$, hence has no nonzero $\Lambda$-torsion. Localization is injective on it, and the displayed cycles show that its localization is exactly the $K$-kernel. This proves the actual content of Bigelow Lemma 4.2, with no PID assumption and no relative-homology substitution. The first local draft now gives the required covering homotopy equivalence, and the second implements this absolute calculation.

## Geometric sources, completed local route, and remaining basis obligation

The original access failure was overcome. EuDML <https://eudml.org/doc/143468> links to GDZPPN002104105. Its resolver is <https://gdz.sub.uni-goettingen.de/dms/resolveppn/?PPN=GDZPPN002104105>, which redirects to volume `PPN356556735_0088`; scans 609–624 are the complete printed pages 603–618. The IIIF manifest is <https://manifests.sub.uni-goettingen.de/iiif/presentation/PPN356556735_0088/manifest>. I fetched and visually read all sixteen pages, including the complete Part One and Theorem 1. The image endpoint pattern is `https://images.sub.uni-goettingen.de/iiif/image/gdz:PPN356556735_0088:00000609/full/1600,/0/default.jpg` (increment the final scan number through 624). Thus source inaccessibility is no longer the blocker.

Also fetched and read in full Budney, arXiv:math/0202246v3 (17 pages), <https://arxiv.org/pdf/math/0202246>, and Turaev, arXiv:math/0006202v1 (23 pages), <https://arxiv.org/pdf/math/0006202>. Budney's explicit distance Morse model imports Morse theory on manifolds with corners (Theorem 1 and Lemma 2, sections 3.1–3.2); ordinary interior Morse handle attachment cannot silently supply that boundary theorem. Turaev section 2 does not construct the two-complex and its integral lattice assertions predate the 2002 correction.

The selected construction avoids both imported arrangement and corners-Morse suppliers. The model draft compresses the real coordinates monotonically, triangulates a finite square cut by the arrangement, and uses products of open face stars with local imaginary chambers. Their intersections are explicitly contractible, their nerve has dimension two, and the thick-nerve proof tracks coordinate interchange. The lifted calculation is ordinary absolute homology. The third draft proves the support implication needed by integral induction using compatible smaller coordinate subcomplexes. The fourth constructs an explicit end-neighbourhood homotopy and normalized deck-equivariant lifts, including boundary collisions.

The complete integral basis proof still needs the **oriented relative divisibility calculations** in Bigelow 2002 Lemmas 4.5–4.6 and the exceptional three-puncture pairing. In the readable complete source, Lemma 4.6 says “Use a similar argument to Lemma 4.5, as suggested by Figure 7.” To author it as a complete local proof one must identify every cut piece, orientation and deck displacement, and prove that each dual square $x_{ij}$ is divisible by $(1-q)^2$ in the stabilized boundary-plus-end group. For $x_{n-1,n}$, the stronger factor is $(1-q)(1+qt)(1-t)$. The exceptional calculation is the unit-normalized pairing of the $(1,3)$ closed genus-two class with $\sigma_2 x_{23}$. I have not completed this independent chain-level verification. It is the remaining exact proof obligation, rather than an assertion that the published theorem is false. None of the four local drafts claims integral freeness, integral spanning by the commissioned closed surfaces, or the finished faithfulness theorem.

The absolute rank lemma above supplies the required input for Bigelow's closed-surface argument: construct the generic genus-one, exceptional $(1,3)$ genus-two, and adjacent genus-three surfaces with respective relative factors $(1-q)^2$, $(1-q)^2(1+qt)$, and $(1-q)^2(1+qt)(1-t)$; use the triangular pairings to prove field independence; then prove integral spanning using the separate divisibility argument. PP Proposition 3.6 instead supplies an explicit integral cellular basis, but using it as a substitute must still prove the promised identification with Bigelow's commissioned closed-surface basis. The two bases must not silently be declared identical.

There is also a local-support bridge inside Bigelow's integral induction: after subtracting all terms involving the last puncture, the remaining integral class is asserted to come from the $(n-1)$-puncture subspace. Field support alone is insufficient to justify that assertion integrally. The third local draft supplies this compatible cellular inclusion/support argument. Its proof uses the absolute covering chain coordinates, so does not assume integral freeness or relative injectivity.

Finally, Krammer's matrix lattice is not the integral absolute homology lattice. Bigelow 2002 §4.2 only identifies their fraction-field representations and reports the integral nonisomorphism for $n\ge3$. The $B_3$ matrix example must declare its field basis, the sign translation $t_{\mathrm{Krammer}}=-t_{\mathrm{Bigelow}}$, and its change from Krammer's $x_{ij}$ to the earlier fork basis if that basis is used. A representation bridge cannot be inferred from ranks alone. For $n=1$, absolute $H_2$ has rank zero and $B_1$ is trivial; the full-twist scalar detector is only usable for $n\ge2$.

## Authored local suppliers and exact directed-end convention

1. `items/lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model.md`: finite good cover, equivariant thick nerve, explicit quotient cells/collapses, covering lift and disk/plane identification.
2. `items/lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank.md`: character on cellular loops, lifted absolute differential, direct kernel calculation, torsion-free localization and rank, including $n=1$.
3. `items/lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion.md`: compatible old/new cell coordinates and the integral support implication used in Bigelow's induction.
4. `items/lem-lkb-small-end-neighbourhoods-stabilize-equivariantly.md`: actual pair homotopy inverses, boundary-preserving collision flow, normalized deck-equivariant lifts, and canonical inverse transition maps.

For $0<\delta<\varepsilon$, the natural map is $H_2(\widetilde C,\widetilde\nu_\delta)\to H_2(\widetilde C,\widetilde\nu_\varepsilon)$. The same direction applies to the boundary-plus-end groups. The fourth draft proves these maps are isomorphisms for sufficiently small radii: active-distance graphs have at most one puncture per component; radial dilation handles puncture components; a projected separation field handles collision-only components while remaining tangent to disk boundary factors. A finite Lipschitz blend and negative flow to level $\delta/2$ give actual ambient inverse maps of both pairs. Thus the downward direct-system map is the **unique inverse** of the natural relative-homology map. Compatibility and independence of vector-field choices follow from uniqueness of that inverse. No unproved reversal of epsilon arrows is being asserted. The original ambiguous `lim` notation is now given an explicit stabilized direct-limit convention.

## Next action and checks

Independently review the four local proofs before integrating their claims or certifying the Step-1 geometric blocker closed. Then finish the specified oriented closed-surface/dual-square/divisibility packet and its representation bridge, followed by the fork-noodle and mapping-class faithfulness closure in dependency order. Preserve all A747/B748 claims and the page-size bound; these four additions alone do not finish the commissioned pair.

After the final item edits, the required default command

`node tools/proof-layout.mjs items/lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model.md items/lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank.md`

failed with exit 1 because the default renderer loader parsed JSX in `ItemBody.tsx` as plain JavaScript (`SyntaxError: Unexpected token '<'`). No default-loader pass was recorded.

The orchestrator-provided read-only actual-renderer workaround was then used on all four explicit files:

`PRESTIGE_APP_DIR=/tmp/ag885-render-app node tools/proof-layout.mjs items/lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model.md items/lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank.md items/lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion.md items/lem-lkb-small-end-neighbourhoods-stabilize-equivariantly.md`

It exited 0 with `proof-layout: 4 items, 28 steps, 0 defects`. This is an actual renderer format check, not mathematical acceptance. No independent audit, judge stamp, implementation test, plan reconciliation, or autopilot-state transition was performed.
