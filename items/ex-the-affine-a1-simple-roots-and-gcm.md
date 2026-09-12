---
id: ex-the-affine-a1-simple-roots-and-gcm
kind: example
title: The affine A1 simple roots and GCM
deps: ["lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root", "thm-loop-and-affine-gcm-presentations-are-isomorphic"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Sections 6.1
        and 7.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Proposition
        12.2.13
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

For finite $\mathfrak{sl}_2$ with root $\alpha$ and coroot $h$, the affine simple roots and coroots are $\alpha_0=\delta-\alpha$, $\alpha_1=\alpha$, $h_0=c-h$, $h_1=h$. Their Cartan matrix is
$$\widehat A=\begin{pmatrix}2&-2\\-2&2\end{pmatrix}.$$

## Facts & Assumptions

**Given:** The rank-one root convention $\alpha(h)=2$.

[F1] Highest-root affine data are [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]].

[F2] The loop generators give the GCM realization by [[thm-loop-and-affine-gcm-presentations-are-isomorphic]].

## Verification

1.1 The finite roots are $\alpha,-\alpha$, so the highest root is $\theta=\alpha$. F1 gives the displayed data. Since $\delta(c)=\delta(h)=\alpha(c)=0$, we compute $\alpha_0(h_0)=0-\alpha(c-h)=2$, $\alpha_1(h_0)=\alpha(c-h)=-2$, $\alpha_0(h_1)=-\alpha(h)=-2$, and $\alpha_1(h_1)=2$. These are all four entries in the stated row-coroot, column-root convention. [F1, given, algebra]

2.1 By F2, $e_0=f\otimes t$ and $f_0=e\otimes t^{-1}$, with $[e_0,f_0]=c-h=h_0$; the finite generators lie in degree zero. The matrix has rank one since its second row is the negative of its first, and its null vector is $(1,1)$. Accordingly $\alpha_0+\alpha_1=\delta$ and $h_0+h_1=c$, both nonzero in the full realization. Thus the two off-diagonal double entries describe an affine, not finite rank-one, matrix. All data are explicit and choice-free. [F2, step 1.1, algebra] ∎
