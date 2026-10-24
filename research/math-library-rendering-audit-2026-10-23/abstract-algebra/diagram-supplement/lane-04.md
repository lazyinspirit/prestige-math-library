# Abstract Algebra diagram review — lane 04

Reviewed the bound source snapshot and both assigned local screenshot tiles at original resolution. The current item and snapshot SHA256 both match the assignment hash `203493688d9ca1198f4342d21f89df9b8b2eadeb2e565cb241f4a316f1a9cecb`. The first tile shows the theorem and its full proof; the second is a blank 100-pixel overlap tile.

For the trivial (H)-module, the covariance condition is (f(gh)=f(g)), so the induced functions are exactly the functions on (G) constant on each subset (gH). Thus
\[
\Phi(f)(gH)=f(g)
\]
is well-defined from \(\operatorname{Ind}_H^G\mathbf 1_H\) to \(\mathbb C^{(G/H)}\); its inverse is pullback along (q:G\to G/H\), (q(g)=gH). It sends each coset indicator to the indicator of that coset in (G), giving the stated delta-basis correspondence.

The action convention is consistent: (x\cdot(gH)=(xg)H), and the induced function action is inverse pullback. Indeed,
\[
\Phi(x\cdot f)(gH)=f(x^{-1}g)=\Phi(f)(x^{-1}gH),
\]
so \(\Phi\) is (G)-equivariant. There is no tensor balancing or double-coset indexing issue here. The map is canonical via (q); the source makes no additional naturality claim.

A small equivariance square or quotient/pullback diagram could help a reader see the descent and action convention, but the proof already gives these constructions and checks explicitly. I classify a diagram as optional; its absence is not a defect. The per-check ledger is in [lane-04.json](lane-04.json).

No live HTTP(S), item content, or publication status was changed.
