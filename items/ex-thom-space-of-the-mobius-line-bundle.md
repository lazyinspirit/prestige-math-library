---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-thom-space-of-the-mobius-line-bundle.json
  precheck: pass
id: ex-thom-space-of-the-mobius-line-bundle
kind: example
title: "Möbius line Thom space as a projective-plane quotient"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-disk-bundle-sphere-bundle-and-thom-space", "prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §5"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.194–196; disk/sphere models, Thom normalization; stabilization on p.196"
---

## Example

For the Möbius line $L\to S^1$, $\operatorname{Th}(L)=D(L)/S(L)$ is homeomorphic to $\mathbb{RP}^2$ with the center of a complementary disk as basepoint. Equivalently it is the quotient $\mathbb{RP}^2/D^2$ for a closed disk whose complement is the interior of a Möbius band. This describes its twisting, beyond the AT mod-two Thom class example.

## Facts & Assumptions

**Given:** $D(L)=[0,1]\times[-1,1]/((0,t)\sim(1,-t))$.

[F1] [[def-disk-bundle-sphere-bundle-and-thom-space]] collapses the sphere boundary to one basepoint.

[F2] [[prop-thom-space-of-a-trivial-rank-r-bundle-is-a-suspension-smash-product]] identifies the trivial line's Thom space over $S^1$ with $\Sigma(S^1_+)$.

## Verification

1.1 The disk bundle $D(L)=[0,1]\times[-1,1]/((0,t)\sim(1,-t))$ is a Möbius band and its sphere bundle $S(L)$ is its single boundary circle. Realize $\mathbb{RP}^2$ as the disk with antipodal boundary points identified. Removing from it a smaller concentric open disk leaves the closed annulus with its outer circle antipodally identified, which is again a Möbius band: the outer identification reverses the inward transverse direction on one traversal, which is the defining twist. Since the removed disk is complementary to that Möbius band, $\mathbb{RP}^2$ is obtained from $D(L)$ by attaching a closed disk along $\partial D(L)$, and collapsing that attached disk turns the pushout into $D(L)/\partial D(L)$, which is $\operatorname{Th}(L)$ by [F1]. [F1, given, construct]

2.1 On a disk pair $D_1\subset D_2$ of concentric Euclidean disks, the radial map that sends $D_1$ to the center of $D_2$ and rescales the annulus $D_2\setminus D_1$ onto $D_2$ minus its center, while fixing the complement of $D_2$, is continuous, injective off $D_1$, and onto; it therefore descends to a continuous bijection $D_2/D_1\to D_2$ from the compact quotient to the Hausdorff disk, hence a homeomorphism. Applying this inside the projective plane to a disk containing the attached disk exhibits $\operatorname{Th}(L)\cong\mathbb{RP}^2/D^2\cong\mathbb{RP}^2$ with the basepoint corresponding to the centre of the complementary disk. The trivial line over $S^1$ instead has Thom space $\Sigma(S^1_+)$ by [F2]: its two boundary circles are collapsed to the same basepoint, whereas the unreduced suspension $\Sigma S^1\cong S^2$ keeps its two suspension points distinct. [F2, step 1.1, construct] ∎

## Remarks

The left panel displays the rectangle model of $D(L)$: the vertical sides are identified in the opposite arrow directions, so the two blue horizontal edges join into the single circle $S(L)$. The middle panel is the projective-disk model, with antipodal points on the outer circle identified. Its blue inner disk is the complementary $D^2$, and the surrounding annulus with the outer identification is $D(L)$. Collapsing that inner disk gives the right panel after the radial reparametrization of step 2.1; its center is the Thom basepoint. The picture illustrates steps 1.1–2.1 and is not used in their proof.

```tikz
\begin{tikzpicture}[scale=1.5, every node/.style={font=\large}]
\node at (0,1.7) {Bundle rectangle};
\draw[blue,thick] (-1.3,0.8)--(1.3,0.8);
\draw[blue,thick] (-1.3,-0.8)--(1.3,-0.8);
\draw[thick,->] (-1.3,-0.8)--(-1.3,0.8);
\draw[thick,->] (1.3,0.8)--(1.3,-0.8);
\draw[dashed] (-1.3,0)--(1.3,0);
\node[above,blue] at (0,0.8) {$S(L)$};
\node[below] at (0,0) {zero section};
\node at (0,-1.4) {$(0,t)\sim(1,-t)$};
\node at (4,1.7) {$\mathbb{RP}^2=D(L)\cup D^2$};
\draw[thick] (4,0) circle (1.1);
\filldraw[fill=blue!10,draw=blue,thick] (4,0) circle (0.45);
\node at (4,0) {$D^2$};
\node at (4,0.78) {$D(L)$};
\node[below,blue] at (4,-0.45) {$S(L)$};
\fill (2.9,0) circle (0.035);
\fill (5.1,0) circle (0.035);
\node at (4,-1.4) {outer circle: $x\sim -x$};
\draw[->,thick] (5.4,0)--(7.1,0);
\node[above,align=center] at (6.25,0.15) {collapse $D^2$};
\node[below] at (6.25,-0.15) {then rescale};
\node at (8.5,1.7) {$\mathrm{Th}(L)\cong\mathbb{RP}^2$};
\draw[thick] (8.5,0) circle (1.1);
\fill (7.4,0) circle (0.035);
\fill (9.6,0) circle (0.035);
\fill[blue] (8.5,0) circle (0.055);
\node[above,blue] at (8.5,0.07) {$*$};
\node[below] at (8.5,-0.12) {basepoint};
\node at (8.5,-1.4) {outer circle: $x\sim -x$};
\end{tikzpicture}
```
