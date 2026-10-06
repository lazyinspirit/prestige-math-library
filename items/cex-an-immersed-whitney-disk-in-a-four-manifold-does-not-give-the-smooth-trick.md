---
id: cex-an-immersed-whitney-disk-in-a-four-manifold-does-not-give-the-smooth-trick
kind: counterexample
title: An immersed disk in the four-ball cannot always be cleaned relative to its boundary
deps:
- def-smooth-manifold
- def-smooth-embedding
- def-smooth-map-between-manifolds-with-boundary
- lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball
- def-countable-choice
- lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball
- lem-rational-homology-four-ball-boundary-has-square-torsion-order
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: R. H. Fox and J. W. Milnor, Singularities of 2-spheres in 4-space and cobordism of knots, Osaka Journal
      of Mathematics 3 (1966), 257-267
    url: https://www.i-repository.net/contents/osakacu/sugaku/111F0000002-00302-8.pdf
    locator: Theorem 2 and §3, pp. 259-266 (a slice knot has Alexander polynomial $A(t)=p(t)p(1/t)$; the clover-leaf
      knot $3_1$, i.e. the trefoil, is not slice)
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Remark 7.29, printed p. 140 (the four-dimensional Whitney trick is much harder; Freedman, Freedman-Quinn)
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Remark 2 after Corollary 6.5, printed p. 70 (the dimension restriction on the cancellation theorems)
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
dependency_level: 2
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

"Every smooth properly immersed disk in $B^4$ with embedded boundary can be homotoped relative to the boundary to a smooth properly embedded disk."

## Facts & Assumptions

[F2] The trefoil cannot bound a smooth proper disk, since its branched boundary cover has first-homology order three rather than a square. [[lem-the-trefoil-does-not-bound-a-smooth-proper-disk-in-the-four-ball]]

## Counterexample


Assume AC for the local duality and nonsliceness suppliers. The trefoil $K\subset S^3=\partial B^4$ bounds a smooth properly immersed disk with exactly one transverse interior double point. Use the trefoil diagram given by the closure of the two-strand braid $\sigma_1^3$. Changing its middle crossing gives $\sigma_1\sigma_1^{-1}\sigma_1$, whose inverse pair cancels by the explicit cylinder rotation below; the remaining one-crossing closure bounds an embedded disk formed from two disks and one band. The trace of this single crossing change in a collar $S^3\times[0,\varepsilon]\subset B^4$ is an immersed annulus with exactly one transverse double point. Cap its inner unknot boundary by an embedded disk deeper in $B^4$ and smooth the join. No smooth properly embedded disk with boundary $K$ exists: the locally proved branched-cover nonsliceness lemma excludes it. The boundary cover has first homology of order $3$, whereas a slice-disk cover would be a rational homology ball whose boundary first homology has square order. Hence this immersed disk cannot be cleaned relative to its boundary. It witnesses the failure of unrestricted disk cleaning in smooth dimension four; by itself it does not specify two transverse sheets making $K$ a Whitney circle or supply the boundary framing data of a Whitney disk.

**Given:** The trefoil $K$ as the closure of $\sigma_1^3$ and AC.

1.1 Change the middle positive crossing to a negative crossing, giving $\sigma_1\sigma_1^{-1}\sigma_1$. Cancel the first inverse pair by an explicit local ambient isotopy. In a braid cylinder $D^2\times I$, write its two strands as $(\pm r e^{i\theta(u)},u)$, where $\theta$ makes one half-turn and then its inverse and is zero near both cylinder ends. Choose a smooth cutoff $\eta$ of the squared radius, equal to one near $r^2$ and zero near the boundary value. The maps $(z,u)\mapsto(e^{-is\eta(|z|^2)\theta(u)}z,u)$ preserve radius, have inverse obtained by changing $s$ to $-s$, and are the identity near the cylinder boundary. They extend by the identity to ambient isotopies of $S^3$ and straighten these two strands at $s=1$. The remaining one-crossing closure bounds an explicit embedded disk in $S^3$: take the two disks spanning its oriented smoothing circles at separate heights and join them by the single narrow half-twisted crossing band. This surface is embedded, and two disks joined by one band connecting their components form a disk. Its boundary is exactly the one-crossing closure. Thus the knot movie from the trefoil reaches a disk-bounding knot with one crossing change and otherwise only the displayed ambient isotopy; no external Reidemeister theorem is used. [given, construct, algebra]

2.1 Put this movie into $S^3\times[0,\varepsilon]$ by sending a strand point at movie time $t$ to $(k_t(u),t)$. Away from the crossing-change time, each time slice is embedded and the time coordinate separates distinct slices. Near the event use spatial coordinates $(x,y,z)$ and time $t$, with the two sheets parametrized by $(u,t)\mapsto(u,0,t,t)$ and $(v,t)\mapsto(0,v,-t,t)$. They coincide only at $u=v=t=0$. Their tangent planes are spanned by $(1,0,0,0),(0,0,1,1)$ and by $(0,1,0,0),(0,0,-1,1)$, respectively; these four vectors are independent. Both branches are immersions and meet transversely at this single point. Patch this local movie to the stationary outside strands, and choose stationary time collars at both endpoints. This constructs an immersed annulus with exactly one transverse interior double point. [step 1.1, construct, algebra]

3.1 Use the embedded disk in the inner collar sphere constructed in step 1.1 as a cap. In a fresh inward collar write its graph as $(d(x),\varepsilon+\tau(x))$, where $d:D^2\hookrightarrow S^3$ is that disk, $\tau$ vanishes on its boundary, is positive in its interior, and has positive inward derivative near its boundary. The graph is embedded because $d$ is, and its boundary is the inner movie knot. Its interior lies deeper than the movie annulus, so there are no new coincidences. Glue along their stationary boundary collars and round the corner. Annulus plus disk is a properly immersed disk whose only double point is the transverse crossing-change event of step 2.1. [step 1.1, step 2.1, construct]

4.1 The local trefoil nonsliceness lemma proves that no smooth proper embedded disk has boundary $K$: a putative slice disk would have a rationally acyclic branched double cover, but its trefoil boundary cover has first homology of order $3$, contradicting the locally proved square-order consequence of duality. Thus the immersed disk cannot be homotoped relative to its boundary to a proper embedding. This is a disk-cleaning obstruction; calling the disk a Whitney disk additionally requires sheet arcs and their boundary data, which are not part of this witness. [given, step 3.1, F2] ∎
