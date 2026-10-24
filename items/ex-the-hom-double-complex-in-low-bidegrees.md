---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-the-hom-double-complex-in-low-bidegrees.json
  precheck: pass
id: ex-the-hom-double-complex-in-low-bidegrees
kind: example
title: "The Hom double complex in low bidegrees"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-hom-double-complex-of-a-projective-and-an-injective-resolution, lem-the-two-hom-double-complex-differentials-commute-before-signing, def-direct-sum-total-complex-on-finite-diagonals]
generation:
  role: example
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Example

Display $K^{0,0}$, $K^{1,0}$, $K^{0,1}$, and $K^{1,1}$, label the two unsigned differentials, and compute the signed total differential in degrees zero and one.

## Facts & Assumptions

**Given:** Differentials $d_P:P_1\to P_0$ and $d_I:I^0\to I^1$ of supplied resolutions, and $K^{p,q}=\operatorname{Hom}(P_p,I^q)$.

## Verification

**Proof technique:** direct.

1.1 The low square has $K^{0,0}=\operatorname{Hom}(P_0,I^0)$, $K^{1,0}=\operatorname{Hom}(P_1,I^0)$, $K^{0,1}=\operatorname{Hom}(P_0,I^1)$, and $K^{1,1}=\operatorname{Hom}(P_1,I^1)$. Its unsigned arrows are $d_h(f)=f d_P$ and $d_v(f)=d_I f$, and $d_hd_v=d_vd_h$ on each $f$. [given, algebra]

2.1 With $D|_{K^{p,q}}=d_h+(-1)^p d_v$, $\operatorname{Tot}^0=K^{0,0}$ and $\operatorname{Tot}^1=K^{1,0}\oplus K^{0,1}$, so $D(f)=(fd_P,d_If)$. For $(a,b)\in\operatorname{Tot}^1$, its $K^{1,1}$ component is $-d_Ia+bd_P$, displaying the sign which makes $D^2=0$. [step 1.1, algebra] ∎

## Remarks

The unsigned low-bidegree square is commutative:

```tikzcd
\begin{tikzcd}[font=\Large, labels={font=\large}, column sep=large, row sep=large]
K^{0,0}=\mathrm{Hom}(P_0,I^0) \arrow[r,"d_h"] \arrow[d,"d_v"'] & K^{1,0}=\mathrm{Hom}(P_1,I^0) \arrow[d,"d_v"] \\
K^{0,1}=\mathrm{Hom}(P_0,I^1) \arrow[r,"d_h"'] & K^{1,1}=\mathrm{Hom}(P_1,I^1)
\end{tikzcd}
```

Here $d_h(f)=f\circ d_P$ increases the first index, while $d_v(f)=d_I\circ f$ increases the second; both routes from $K^{0,0}$ to $K^{1,1}$ send $f$ to $d_I\circ f\circ d_P$. The square displays the unsigned maps. In the total complex, $D=d_h+(-1)^p d_v$ on $K^{p,q}$, so the right-hand vertical contribution acquires a minus sign. Thus $\operatorname{Tot}^0=K^{0,0}$ and $\operatorname{Tot}^1=K^{1,0}\oplus K^{0,1}$, with $D(f)=(fd_P,d_If)$ and mixed component $-d_Ia+bd_P$ for $(a,b)\in\operatorname{Tot}^1$, as verified above.
