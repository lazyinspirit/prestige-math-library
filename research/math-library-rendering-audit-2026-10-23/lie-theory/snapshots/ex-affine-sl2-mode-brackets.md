---
id: ex-affine-sl2-mode-brackets
kind: example
title: Affine sl2 mode brackets
deps: ["def-untwisted-affine-central-extension", "def-degree-derivation-and-full-untwisted-affine-algebra"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Sections 7.1-7.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Definition 12.2.3
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Example

For $\mathfrak{sl}_2$, take $e=\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$, $f=\left(\begin{smallmatrix}0&0\\1&0\end{smallmatrix}\right)$, $h=\operatorname{diag}(1,-1)$, and $B(x,y)=\operatorname{tr}(xy)$. For every $m,n\in\mathbb Z$,
$$[e_m,f_n]=h_{m+n}+m\delta_{m,-n}c,\qquad[h_m,h_n]=2m\delta_{m,-n}c,\qquad[d,e_m]=me_m.$$

## Facts & Assumptions

**Given:** The displayed matrices and integer modes.

[F1] The central-extension bracket is [[def-untwisted-affine-central-extension]].

[F2] The degree bracket is [[def-degree-derivation-and-full-untwisted-affine-algebra]].

## Verification

1.1 Multiplication gives $ef=\operatorname{diag}(1,0)$, $fe=\operatorname{diag}(0,1)$, so $[e,f]=h$ and $B(e,f)=1$; also $h^2=I$, so $B(h,h)=2$ and $[h,h]=0$. Trace cyclicity makes $B$ invariant; its Gram matrix on $e,f,h$ has determinant $-2$, so is nondegenerate. Thus F1 yields the first two displayed brackets. In particular $[e_1,f_{-1}]=h_0+c$, $[h_1,h_{-1}]=2c$, while $[e_0,f_n]=h_n$ and $[h_0,h_n]=0$. [F1, given, algebra]

2.1 F2 gives $[d,e_m]=me_m$, including $[d,e_0]=0$ and $[d,e_{-1}]=-e_{-1}$. If $m+n\ne0$, both central terms in step 1.1 vanish; if $m+n=0$, their coefficients are exactly $m$ and $2m$. Hence all integer signs, zero modes and the opposite-mode boundary obey the displayed formulas. No choices are needed. [F2, step 1.1, algebra] ∎
