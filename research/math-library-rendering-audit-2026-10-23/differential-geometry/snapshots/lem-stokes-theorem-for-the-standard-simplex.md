---
id: "lem-stokes-theorem-for-the-standard-simplex"
kind: "lemma"
title: "Stokes theorem for the standard simplex"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-integral-of-a-form-over-a-smooth-singular-simplex","def-standard-orientation-of-the-affine-simplex","thm-local-coordinate-formula-for-the-exterior-derivative","thm-newton-leibniz-with-interior-derivative","thm-jordan-fubini-by-sections","thm-change-of-variables-for-compact-jordan-sets","thm-continuous-functions-on-compact-jordan-sets-are-integrable","thm-multidimensional-integral-properties"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Peter S. Park, Proof of de Rham's Theorem
      url: https://people.math.harvard.edu/~pspark/derham.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For $k\ge1$ and a smooth $(k-1)$-form $\eta$ on a neighbourhood of $\Delta^k$ in its affine span,
$$\int_{\Delta^k}d\eta=\sum_{i=0}^k(-1)^i\int_{\Delta^{k-1}}\delta_i^*\eta,$$
where the integrals and ordered face maps use the standard affine-simplex conventions. No Stokes theorem for manifolds with corners is assumed.

## Facts & Assumptions

[F1] [[def-integral-of-a-form-over-a-smooth-singular-simplex]] defines the integrals by affine coordinates, proves the coordinate simplex compact Jordan and uses evaluation in dimension zero.

[F2] [[def-standard-orientation-of-the-affine-simplex]] gives the ordered faces and the outward boundary sign $(-1)^i$.

[F3] [[thm-local-coordinate-formula-for-the-exterior-derivative]] computes $d$ by differentiating coefficients and wedging the corresponding coordinate differential.

[F4] [[thm-newton-leibniz-with-interior-derivative]] integrates a continuous derivative on a nondegenerate closed interval to the endpoint difference.

[F5] [[thm-jordan-fubini-by-sections]] integrates an integrable function on a bounded Jordan set by its integrable coordinate sections.

[F6] [[thm-change-of-variables-for-compact-jordan-sets]] applies to affine coordinate permutations and to invertible affine changes with absolute determinant one.

[F7] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]] makes all coefficient and derivative restrictions on the compact simplices integrable.

[F8] [[thm-multidimensional-integral-properties]] gives linearity of the rectangle integral, hence of Jordan integrals by zero extension.

## Proof

**Given:** A positive integer $k$ and the smooth form $\eta$ in the statement. Work in the positive coordinates $x_1,\ldots,x_k$ with domain $T_k=\{x_j\ge0,\ \sum_jx_j\le1\}$.

1.1 First let $k\ge2$. Write $$\eta=\sum_{i=1}^k(-1)^{i-1} f_i\,dx_1\wedge\cdots\wedge\widehat{dx_i}\wedge\cdots\wedge dx_k.$$ All $f_i$ are smooth near $T_k$. In [F3], every derivative except $\partial_if_i$ wedges a repeated differential and vanishes; moving $dx_i$ past $i-1$ factors cancels the coefficient sign. Hence $$d\eta=\left(\sum_{i=1}^k\partial_if_i\right)dx_1\wedge\cdots\wedge dx_k.$$ [F1, F3, given]

2.1 Fix $i$. Let $z$ denote the increasing list of all coordinates except $x_i$, let $D_i=\{z\ge0:\sum z\le1\}$ and put $b(z)=1-\sum z$. The $x_i$ section of $T_k$ is $[0,b(z)]$ for $z\in D_i$, and it is empty off $D_i$. Coordinate permutation has absolute determinant one by [F6]. The full integrand $\partial_if_i$ is integrable by [F7], and every nonempty section is continuous on its closed interval. Applying [F5] after that permutation and [F4] on sections with $b(z)>0$ gives $$\int_{T_k}\partial_if_i\,dx=\int_{D_i}\bigl(f_i(z,x_i=b(z))-f_i(z,x_i=0)\bigr)\,dz.$$ When $b(z)=0$, both the section integral and the endpoint difference are zero, so the formula holds on these sections too. No exceptional family is discarded. [F1, F4, F5, F6, F7, step 1.1]

2.2 Parametrize face zero by $y=(x_2,\ldots,x_k)\in T_{k-1}$, with $x_1=1-\sum_{j=2}^kx_j$. For $i=1$ the omitted differential wedge pulls back to $dy$. For $i>1$, substitute $dx_1=-\sum_{j=2}^kdx_j$; only its $-dx_i$ term survives, and moving $dx_i$ to its increasing position contributes $(-1)^{i-2}$. Thus the omitted wedge pulls back to $(-1)^{i-1}dy$. The coefficient sign in step 1.1 cancels it, giving $$\delta_0^*\eta=\left(\sum_{i=1}^kf_i\big|_{\mathrm{face}\ 0}\right)dy.$$ [F1, F2, step 1.1]

3.1 On face $i\ge1$, $x_i=0$ and the remaining vertex ordering gives precisely the increasing remaining coordinate basis. All summands of $\eta$ except the one indexed by $i$ pull back to zero, because they contain $dx_i$. The signed contribution of this face is therefore $$(-1)^i\int\delta_i^*\eta=-\int_{D_i} f_i(z,x_i=0)\,dz.$$ This matches the lower endpoint term in step 2.1. [F1, F2, step 1.1, step 2.1]

3.2 For each $i>1$, the map from $y$ to the increasing coordinates $z$ omitting $x_i$ replaces the missing coordinate by $x_1=1-\sum y_j$. Its derivative has determinant $(-1)^{i-1}$: expand along the identity rows, leaving the entry $-1$ in the position corresponding to $x_i$. It maps $T_{k-1}$ bijectively onto $D_i$, with inverse obtained by solving $x_i=1-\sum z$. Thus [F6] transforms the upper endpoint integral in step 2.1 into the integral of $f_i$ over the face-zero parametrization, with absolute determinant one. For $i=1$ the map is the identity. Summing over $i$, step 2.2 identifies all upper endpoint terms with $\int\delta_0^*\eta$. [F6, step 2.1, step 2.2]

4.1 By [F8], sum the identities of step 2.1 and use step 1.1 for the left side, step 3.1 for the lower endpoints and step 3.2 for the upper endpoints. This gives the displayed Stokes identity for $k\ge2$, with sign $+1$ on face zero and $(-1)^i$ on face $i$. All sums are finite. [F8, step 1.1, step 2.1, step 3.1, step 3.2]

5.1 For $k=1$, $\eta=f$ is a function, and [F3] and [F4] give $\int_0^1df=f(1)-f(0)$. The face-zero map is the terminal vertex and the face-one map the initial vertex, whose integrals are evaluations by [F1]. This is the same formula. The assertion excludes $k=0$ and does not introduce forms of degree minus one. Zero forms give zero on both sides; all collapsed sections were treated in step 2.1, including intersections of faces. All coordinates, changes and sums are explicit and finite, so the proof uses no choice. [F1, F2, F3, F4, step 2.1, step 4.1] ∎
