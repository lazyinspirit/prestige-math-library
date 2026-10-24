---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-doubling-dyadic-preimage-computation.json
  precheck: pass
id: ex-doubling-dyadic-preimage-computation
kind: example
title: Dyadic preimages under doubling
deps: ["prop-doubling-map-preserves-lebesgue-measure", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: E–W Example 2.4
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

Assume countable choice. For doubling $D(x)=\{2x\}$ on the circle, $D^{-1}[0,1/2)=[0,1/4)\cup[1/2,3/4)$, of measure $1/2$. In contrast, $D[0,1/2)=[0,1)$ has measure one.

## Facts & Assumptions

[F1] Doubling preserves Lebesgue probability by inverse images. [[prop-doubling-map-preserves-lebesgue-measure]].

## Verification

**Given:** Assume countable choice. For doubling $D(x)=\{2x\}$ on the circle, $D^{-1}[0,1/2)=[0,1/4)\cup[1/2,3/4)$, of measure $1/2$. In contrast, $D[0,1/2)=[0,1)$ has measure one.

1.1 On $[0,1/2)$, $D(x)=2x$, and $0\le2x<1/2$ is equivalent to $0\le x<1/4$. On $[1/2,1)$, $D(x)=2x-1$, and $0\le2x-1<1/2$ is equivalent to $1/2\le x<3/4$. These two branches exhaust the circle and their solution intervals are disjoint. Each interval has length $1/4$, so their union has measure $1/2$, agreeing with the preservation in [F1]. [F1]

2.1 For $x\in[0,1/2)$, the image $2x$ ranges through every $y\in[0,1)$, with inverse $x=y/2$. Thus the forward image has measure one although the source has measure $1/2$. In particular inverse-image preservation does not assert equality of forward-image measures. The included points 0 and 1/2 map to 0, and the excluded right endpoints 1/4 and 3/4 map to 1/2. Countable choice is inherited from the Lebesgue probability in [F1]. [1.1, F1] ∎

## Remarks

In the interval model of the circle, filled endpoints are included and hollow endpoints are excluded. The upper pair of rows shows the two branches over $A=[0,1/2)$; the lower pair shows the forward image of $B=[0,1/2)$. All rows use the same scale. The verification above is independent of the picture.

```tikz
\begin{tikzpicture}[x=8cm,y=1cm]
\draw[gray] (0,6)--(1,6);
\draw[very thick,blue] (0,6)--(.25,6);
\draw[very thick,blue] (.5,6)--(.75,6);
\node[left] at (-.04,6) {$D^{-1}(A)$};
\fill[blue] (0,6) circle (2pt);
\fill[blue] (.5,6) circle (2pt);
\draw[blue,fill=white] (.25,6) circle (2pt);
\draw[blue,fill=white] (.75,6) circle (2pt);
\node[above] at (0,6.1) {$0$};
\node[above] at (.25,6.1) {$1/4$};
\node[above] at (.5,6.1) {$1/2$};
\node[above] at (.75,6.1) {$3/4$};
\node[above] at (1,6.1) {$1$};
\draw[->] (.125,5.75)--(.22,4.3) node[midway,left] {$2x$};
\draw[->] (.625,5.75)--(.28,4.3) node[midway,right] {$2x-1$};
\draw[gray] (0,4)--(1,4);
\draw[very thick,blue] (0,4)--(.5,4);
\node[left] at (-.04,4) {$A$};
\fill[blue] (0,4) circle (2pt);
\draw[blue,fill=white] (.5,4) circle (2pt);
\node[below] at (0,3.9) {$0$};
\node[below] at (.5,3.9) {$1/2$};
\node[below] at (1,3.9) {$1$};
\draw[gray] (0,1)--(1,1);
\draw[very thick,blue] (0,1)--(.5,1);
\node[left] at (-.04,1) {$B$};
\fill[blue] (0,1) circle (2pt);
\draw[blue,fill=white] (.5,1) circle (2pt);
\node[above] at (0,1.1) {$0$};
\node[above] at (.5,1.1) {$1/2$};
\node[above] at (1,1.1) {$1$};
\draw[->] (.25,.75)--(.5,-.7) node[midway,right] {$2x$};
\draw[very thick,blue] (0,-1)--(1,-1);
\node[left] at (-.04,-1) {$D(B)$};
\fill[blue] (0,-1) circle (2pt);
\draw[blue,fill=white] (1,-1) circle (2pt);
\node[below] at (0,-1.1) {$0$};
\node[below] at (1,-1.1) {$1$};
\end{tikzpicture}
```
