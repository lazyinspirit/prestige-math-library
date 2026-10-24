---
id: alg-finite-image-string-method
kind: algorithm
title: "Finite-image projected-gradient string with arc-length redistribution"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-minimum-energy-path-in-a-collision-free-tube
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (4)–(6): projected string evolution and equal-arc-length reparameterization"
---

## Definition

Let $U,V,a,b$ satisfy [[def-regular-minimum-energy-path-in-a-collision-free-tube]]. **Inputs:** an integer $M\ge2$, images $R_0=a,R_1,\ldots,R_{M-1},R_M=b$ in $U$, a step size $\eta>0$, force and spacing tolerances $\tau_F,\tau_s\ge0$, and a finite update budget $N\in\mathbb N_0$. **Output:** the last image chain and one of `tolerances-met`, `geometry-failure`, `nonfinite-evaluation`, or `budget-exhausted`. A stop status is an algorithmic report, not a continuum-error certificate.

At iteration $k=0,\ldots,N$, perform the following in order. After every arithmetic operation or norm evaluation below, return `nonfinite-evaluation` if its scalar or vector result is nonfinite, before using that result in a comparison, normalization, segment lookup, or subsequent operation. In particular, this check applies to chords, lengths, cumulative lengths, target lengths, and interpolated images.

1. For each interior $i=1,\ldots,M-1$, form the centered chord $c_i=R_{i+1}-R_{i-1}$. If $c_i=0$, return `geometry-failure`. Otherwise put $t_i=c_i/\|c_i\|_2$ and $F_i^\perp=-(I-t_it_i^T)\nabla V(R_i)$. If any force is nonfinite, return `nonfinite-evaluation`.
2. For the current chain set $\ell_i=\|R_i-R_{i-1}\|_2$ for $1\le i\le M$, $\bar\ell=M^{-1}\sum_{i=1}^M\ell_i$, $r_F=\max_{1\le i<M}\|F_i^\perp\|_2$, and $r_s=\max_{1\le i\le M}|\ell_i-\bar\ell|$. If $r_F\le\tau_F$ and $r_s\le\tau_s$, return `tolerances-met`.
3. If $k=N$, return `budget-exhausted`. Otherwise set $Y_0=a$, $Y_M=b$, and $Y_i=R_i+\eta F_i^\perp$ for interior images. Reject any nonfinite $Y_i$ with `nonfinite-evaluation`; if any $Y_i\notin U$, return `geometry-failure`.
4. Compute cumulative lengths $s_0=0$, $s_j=\sum_{i=1}^j\|Y_i-Y_{i-1}\|_2$, and total length $S=s_M$. If $S=0$ or the computed cumulative lengths are not strictly increasing, return `geometry-failure`. For $j=1,\ldots,M-1$, place the new image at the unique point of the piecewise-linear polygon $Y_0,\ldots,Y_M$ whose cumulative length is $jS/M$; if that target is a vertex, use that vertex, and otherwise use linear interpolation on its unique containing segment. If any redistributed image lies outside $U$, return `geometry-failure`. Set $R_0^{k+1}=a,R_M^{k+1}=b$ and use the checked redistributed points as the new interior images.

This is the specified projected-force string variant. No convergence from arbitrary initial images, no automatic endpoint minimization, and no error estimate follow from the procedure alone.


## Remarks

The planar illustration separates the force update from redistribution. Take $M=4$, $U=\mathbb R^2$, $\eta=1$, $V(x,y)=-y$, and initial images $(0,0),(4/5,0),(3,0),(26/5,0),(6,0)$. Every centered unit chord is $(1,0)$, so the interior projected forces are $(0,1)$; the endpoints stay fixed. In the lower panel, squares mark equal cumulative-length targets on the updated polygon, not equal Euclidean distances between consecutive new images. Here $L=\sqrt{41}/5$, $S=2L+22/5$, and the new interior images are $(19/10-L/2,1)$, $(3,1)$, and $(41/10+L/2,1)$. The picture illustrates an update when the preceding stopping tests permit it; it supplies no convergence or error certificate.

```tikz
\begin{tikzpicture}[scale=0.95]
\node at (3,2.05) {Force update};
\draw[dashed] (0,0)--(0.8,0)--(3,0)--(5.2,0)--(6,0);
\draw[thick,cyan] (0,0)--(0.8,1)--(3,1)--(5.2,1)--(6,0);
\draw[->,orange,thick] (0.8,0.12)--(0.8,0.88);
\draw[->,orange,thick] (3,0.12)--(3,0.88);
\draw[->,orange,thick] (5.2,0.12)--(5.2,0.88);
\foreach \x/\i in {0.8/1,3/2,5.2/3} {
  \fill (\x,0) circle (2pt);
  \node[below] at (\x,0) {$R_\i$};
  \fill[cyan] (\x,1) circle (2pt);
  \node[above] at (\x,1) {$Y_\i$};
}
\fill (0,0) circle (2pt);
\fill (6,0) circle (2pt);
\node[left] at (0,0) {$a$};
\node[right] at (6,0) {$b$};
\node[right] at (3.12,0.48) {$\eta F_2^\perp$};
\node at (3,-1.25) {Arc-length redistribution};
\draw[thick,cyan] (0,-3)--(0.8,-2)--(3,-2)--(5.2,-2)--(6,-3);
\foreach \x in {0.8,3,5.2} {\fill[cyan] (\x,-2) circle (2pt);}
\foreach \x in {1.259688,3,4.740312} {
  \draw[orange,thick] (\x-0.065,-2.065) rectangle (\x+0.065,-1.935);
}
\fill (0,-3) circle (2pt);
\fill (6,-3) circle (2pt);
\node[left] at (0,-3) {$a$};
\node[right] at (6,-3) {$b$};
\node[above] at (1.259688,-1.9) {$S/4$};
\node[above] at (3,-1.9) {$S/2$};
\node[above] at (4.740312,-1.9) {$3S/4$};
\node at (3,-3.65) {Squares: new interior images; labels: cumulative length};
\end{tikzpicture}
```
