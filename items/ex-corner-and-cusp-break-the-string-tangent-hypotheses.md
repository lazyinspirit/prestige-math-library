---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-corner-and-cusp-break-the-string-tangent-hypotheses.json
  precheck: pass
id: ex-corner-and-cusp-break-the-string-tangent-hypotheses
kind: example
title: "A corner has no unique tangent and a cusp gives a zero centered chord"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-finite-image-string-method
  - lem-centered-chord-and-unequal-step-tangent-error
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Weinan E, Weiqing Ren, and Eric Vanden-Eijnden, String method for the study of rare events"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/stoch_topics2017/lect02/string.pdf"
      locator: "§II, equations (2)–(4): the string tangent and normal projection require a regular path"
---

## Example

Two elementary paths show why regularity and nondegenerate centered chords are explicit hypotheses. The corner path is $R_c(s)=(s,0)$ for $s\le0$ and $R_c(s)=(0,s)$ for $s\ge0$. The cusp path is $R_u(s)=(s^2,0)$. For equal samples at $-h$ and $h$, the centered chord is $R(h)-R(-h)$.

## Facts & Assumptions

**Given:** The two displayed paths and any $h>0$ small enough that their samples lie in the stated parameter intervals.

[F1] [[lem-centered-chord-and-unequal-step-tangent-error]] assumes a regular $C^3$ curve and a nonzero centered chord before normalizing it.

[F2] [[alg-finite-image-string-method]] returns `geometry-failure` if an interior centered chord is zero.

## Proof

**Given:** The paths and sample spacing in the Example.

1.1 For the corner, the one-sided derivatives at $0$ are $R_c'(0^-)=(1,0)$ and $R_c'(0^+)=(0,1)$. They are distinct, so there is no single tangent at the corner. The centered chord is $R_c(h)-R_c(-h)=(h,h)$, whose unit direction is $(1,1)/\sqrt2$; it agrees with neither one-sided tangent. [given, algebra]

1.2 For the cusp, $R_u(h)=R_u(-h)=(h^2,0)$, so its centered chord is exactly zero. Also $R_u'(0)=(0,0)$, so the path is not regular there. [given, algebra]

2.1 The corner violates the differentiability/unique-tangent hypotheses of [F1], while the cusp violates regularity and makes the algorithmic centered direction undefined. By [F2], a finite string update encountering this zero chord must return `geometry-failure`; neither example can be covered by the second-order normalized-tangent estimate of [F1]. [F1, F2, step 1.1, step 1.2] ∎


## Remarks

The two panels show the path images and samples for $h>0$ schematically. In the left panel, the dashed arrow is the centered chord from $R_c(-h)$ to $R_c(h)$; the short arrows at the origin give the two one-sided tangent directions. In the right panel, the path retraces the same ray, so the two samples occupy one point and there is no nonzero chord arrow. These illustrations summarize steps 1.1 and 1.2; the proof is independent of them.

```tikz
\begin{tikzpicture}[scale=1.05,>=stealth]
\node at (-0.2,3.0) {Corner};
\draw[very thick] (-2.1,0) -- (0,0) -- (0,2.2);
\draw[->,thick,dashed] (-1.5,0) -- (0,1.5);
\node at (-1.3,1.1) {$(h,h)$};
\draw[->,thick] (0,0) -- (0.9,0);
\node[below] at (0.65,-0.1) {$(1,0)$};
\draw[->,thick] (0,0) -- (0,0.85);
\node[right] at (0.05,0.6) {$(0,1)$};
\fill (-1.5,0) circle (2pt);
\fill (0,1.5) circle (2pt);
\fill (0,0) circle (2pt);
\node[below] at (-1.5,-0.1) {$R_c(-h)$};
\node[right] at (0.1,1.5) {$R_c(h)$};
\node[below left] at (0,0) {$0$};
\begin{scope}[xshift=5.5cm]
\node at (1.2,3.0) {Retraced ray};
\draw[very thick] (0,0) -- (3.1,0);
\fill (0,0) circle (2pt);
\fill (1.9,0) circle (2pt);
\node[below] at (0,-0.1) {$0$};
\node[above] at (1.9,0.15) {$R_u(-h)=R_u(h)$};
\node[below] at (1.9,-0.1) {$(h^2,0)$};
\node at (1.2,1.5) {$R_u(h)-R_u(-h)=0$};
\node at (1.2,0.85) {$R_u'(0)=0$};
\end{scope}
\end{tikzpicture}
```
