---
id: lem-mv-local-product-pairing-and-weighted-reduction
kind: lemma
title: "Local Whittaker product pairing and its weighted deformation reduction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michel–Venkatesh, The Subconvexity Problem for GL2, Lemma 3.2.7 and §§5.2.10–5.2.11; explicit model-conditional adaptation"
      url: "https://arxiv.org/pdf/0903.3591v2"
---

## Statement

Let $k$ be a local field, $G=\mathrm{GL}_2(k)$, $N$ its upper unipotent subgroup, $Z$ its center, $K$ a compact subgroup with probability Haar measure, and $a(y)=\operatorname{diag}(y,1)$. Fix a unitary additive character $\psi$ and unitary multiplicative characters $\omega,\alpha,\beta$ of $k^\times$. Suppose a right-translation-invariant complex inner product space $\mathcal W$ of measurable functions on $G$ satisfies
$$W(z(c)n(x)g)=\omega(c)\psi(x)W(g),\qquad \langle W,W'\rangle_{\mathcal W}=\int_{k^\times}W(a(y))\overline{W'(a(y))}\,d^\times y.$$
Right translation on $\mathcal W$ is assumed unitary. Let $I(\alpha,\beta)$ consist of measurable functions with transformation rule
$$f\left(\begin{pmatrix}a&b\\0&d\end{pmatrix}g\right)=|a/d|^{1/2}\alpha(a)\beta(d)f(g),\qquad \|f\|_I^2=\int_K|f(h)|^2\,dh<\infty.$$
Suppose its right translation is unitary. Use the following supplied quotient-measure convention for products of these functions:
$$\int_{NZ\backslash G} P(g)\,dg=\int_K\int_{k^\times}P(a(y)h)|y|^{-1}\,d^\times y\,dh.$$
Assume the measures are sigma-finite, all functions used in these integrals are product-measurable, and right translation preserves the quotient measure. For $J(W,f)=Wf$ the pairing is well-defined and
$$\langle J(W,f),J(W',f')\rangle_{NZ\backslash G}=\langle W,W'\rangle_{\mathcal W}\langle f,f'\rangle_I.$$
Here the quotient pairing means integration of the product with its complex conjugate; the individual functions have the fixed unitary $N$ and central equivariance. In particular, writing $R_uF(g)=F(gu)$,
$$|\langle R_uJ(W,f),J(W',f')\rangle|\le\|W\|\|f\|\|W'\|\|f'\|.$$
For matching pairs it also factors exactly as
$$\langle R_uJ(W,f),J(W,f)\rangle=\langle R_uW,W\rangle\langle R_uf,f\rangle.$$

For an off-axis version, let $\widetilde W_s$ be measurable with the same unitary $N$ and central equivariance as $W$, and let $\widetilde f_t$ have the transformation rule of $I(\alpha|\cdot|^t,\beta|\cdot|^{-t})$. Its restriction $g_t=\widetilde f_t|_K$ is allowed to vary with $t$. For $\eta\ge2|\Re t|$, suppose the supplied bound
$$\int_{k^\times}|\widetilde W_s(a(y)h)|^2\max(|y|,|y|^{-1})^\eta\,d^\times y\le M_s\quad\text{for almost every }h\in K$$
holds with $M_s<\infty$. Then
$$\|\widetilde W_s\widetilde f_t\|_{NZ\backslash G}\le M_s^{1/2}\|g_t\|_{L^2(K)},\qquad |\langle R_uJ(W,f),\widetilde W_s\widetilde f_t\rangle|\le\|W\|\|f\|M_s^{1/2}\|g_t\|_{L^2(K)}.$$
For fixed compact-picture deformation $g_t=f'|_K$, its final norm is exactly $\|f'\|$. If instead $g_t=(\overline M_t f'_t)|_K$ for a supplied normalized intertwiner, that norm remains $\|g_t\|$ unless an additional bound is supplied. These assertions do not establish the existence of the models, their invariant pairing, the quotient formula, the weighted bound, or any intertwiner estimate.

## Statement references

[Michel–Venkatesh, Lemma 3.2.7; (5.22) and the off-axis reductions in §§5.2.10–5.2.11](https://arxiv.org/pdf/0903.3591v2).

## Facts & Assumptions

**Given:** The explicit model, measure, invariance, measurability and weighted-moment hypotheses in the Statement. Inner products are linear in the first variable. No existence theorem for a Whittaker model, local functional equation, or normalized intertwiner is assumed as a proved Fact.

[F1] Nonnegative measurable integrands on sigma-finite product spaces satisfy Tonelli, and absolutely integrable complex integrands satisfy Fubini: [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

[F2] In a real or complex inner product space, the absolute inner product is at most the product of norms: [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]. Applied in $L^2$, this also proves integrability of products of two square-integrable functions.

## Proof

**Given:** The stated local data and supplied hypotheses.

1.1 For each $h\in K$, right invariance of the supplied Kirillov pairing gives $\int W(a(y)h)\overline{W'(a(y)h)}\,d^\times y=\langle R_hW,R_hW'\rangle=\langle W,W'\rangle$. In particular the integral of $|W(a(y)h)|^2$ is $\|W\|^2$. The induced transformation rule gives $|f(a(y)h)|^2=|y||f(h)|^2$. The quotient formula and Tonelli now give $\|J(W,f)\|^2=\|W\|^2\|f\|^2<\infty$. [given, F1, algebra]

1.2 The deformed transformation rule gives $|\widetilde f_t(a(y)h)|^2=|y|^{1+2\Re t}|g_t(h)|^2$. For $\eta\ge2|\Re t|$, $|y|^{2\Re t}\le\max(|y|,|y|^{-1})^\eta$. The quotient formula, Tonelli and the supplied weighted bound therefore give $\|\widetilde W_s\widetilde f_t\|^2\le M_s\int_K|g_t(h)|^2\,dh$. This is valid for both signs of $\Re t$ and also for $\eta=0$. [given, F1, algebra]

2.1 The absolute value of the mixed integrand in quotient coordinates is $|W(a(y)h)W'(a(y)h)f(h)f'(h)|$. Its iterated integral is at most $\|W\|\|W'\|\int_K|f(h)f'(h)|\,dh\le\|W\|\|W'\|\|f\|\|f'\|$ by Cauchy–Schwarz, first in $y$ using step 1.1 and then in $h$. Tonelli shows absolute integrability, and Fubini permits the mixed calculation. The factors from the inducing characters cancel, as they are the same unitary characters for $f,f'$. Step 1.1 then evaluates the inner integral, proving the pairing identity. [step 1.1, F1, F2, given, algebra]

3.1 The pointwise equality $R_uJ(W,f)=J(R_uW,R_uf)$ and unitarity imply that its norm is $\|W\|\|f\|$. Apply Cauchy–Schwarz and step 1.1 to get the four-norm bound. Apply step 2.1 with $R_uW,R_uf,W,f$ to get the matrix-coefficient factorization. This calculation proves the pure-tensor pairing identity; bilinear extension gives the same identity for finite sums of pure tensors if a tensor-product realization is desired. [step 1.1, step 2.1, F2, given, algebra]

4.1 Use Cauchy–Schwarz on the pairing, step 3.1 on its first vector and step 1.2 on its second. The compact-picture norm equals $\|f'\|$ when $g_t=f'|_K$ by definition. With an intertwiner it remains its actual compact-picture norm; if a separate estimate $\|g_t\|\le B_t\|f'\|$ is supplied, multiplication gives the corresponding factor $B_t$. This proves every stated inequality without assuming an unproved isometry for that intertwiner. [step 3.1, step 1.2, F2, given, algebra] ∎

## Remarks

For the source's H term on the unitary axes, take the products $W_{2,v}f_{3,v}$ and $W_{2,v}(s)f_{3,v}(t)$. Unit norms give (5.22) once the stated invariant model conventions are realized. This gives a bound of one at any translated place, but gives no decay with the translation. For J, interchange the roles of representations 2 and 3 and keep the actual norms of the normalized intertwiner images. The source permits a scalar depending on the additive character; setting that scalar to one requires a normalization proof.

Off the unitary axes the remaining input is a uniform weighted estimate for all compact translates of the chosen Whittaker vector, together with the compact norm bound for the intertwiner image. Neither follows from its unweighted norm being one. The quotient conventions here are precisely supplied hypotheses, rather than a local construction of Haar disintegration or invariant Kirillov norms.
