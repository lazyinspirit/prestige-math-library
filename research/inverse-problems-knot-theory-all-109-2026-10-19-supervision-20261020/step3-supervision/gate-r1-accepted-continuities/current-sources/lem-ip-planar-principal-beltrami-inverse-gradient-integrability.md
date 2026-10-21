---
id: lem-ip-planar-principal-beltrami-inverse-gradient-integrability
kind: lemma
title: Principal Beltrami solutions and uniform inverse-gradient integrability
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-measurable-riemann-mapping-sphere
  - thm-one-quasiconformal-is-conformal
  - lem-inverse-of-a-quasiconformal-map-is-quasiconformal
  - lem-analytic-quasiconformality-implies-modulus-distortion
  - lem-ip-planar-cauchy-beurling-and-near-two-inversion
  - thm-weyl-lemma-for-the-laplacian
  - thm-liouville-bounded-entire-function
  - cor-injective-holomorphic-derivative-nonzero
  - thm-young-convolution-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 3.1, Theorems 3.3–3.4, printed pp. 10–11; Section 6.2, equation (6.6), printed p. 43. The small positive inverse-gradient exponent here is derived from the locally proved near-two inverse and QC change of variables."
dependency_level: 1
---

## Statement

Assume the Axiom of Choice and Countable Choice. Fix $0\le\kappa<1$ and $R,S>0$. For every measurable $\mu$ supported in $D_R=\{|z|<R\}$ with $\|\mu\|_\infty\le\kappa$, there is a unique quasiconformal homeomorphism $\Phi:\mathbb C\to\mathbb C$ satisfying
$$\bar\partial\Phi=\mu\partial\Phi,\qquad \Phi(z)=z+O(1/z)\quad(z\to\infty).$$
Choose any fixed $2<r\le p_\kappa$ from the near-two inversion result, and put $\sigma=r-2>0$. Uniformly over all these coefficients,
$$\|\Phi-z\|_{W^{1,r}(\mathbb C)}+\|\Phi-z\|_\infty+[\Phi-z]_{C^{0,1-2/r}}\le C_{\kappa,r,R},\qquad \int_{D_S}|\partial\Phi|^{-\sigma}\,dA\le C_{\kappa,r,R,S}.$$
The Jacobian and $\partial\Phi$ are positive and nonzero almost everywhere, respectively, so the negative power is well-defined almost everywhere. In particular, for any $|k|=1$ and $f(z)=e^{ik\Phi(z)}$,
$$\|f\|_{W^{1,r}(D_S)}+\bigl\||\partial f|^{-1}\bigr\|_{L^\sigma(D_S)}\le C_{\kappa,r,R,S}.$$
For $0<\sigma<1$ the displayed $L^\sigma$ quantity means $(\int|\partial f|^{-\sigma})^{1/\sigma}$, without asserting a norm triangle inequality.

## Statement references

[[thm-measurable-riemann-mapping-sphere|Measurable normalized quasiconformal solutions and uniqueness.]]

[[lem-ip-planar-cauchy-beurling-and-near-two-inversion|The local analytic inverse near exponent two.]]

[[lem-inverse-of-a-quasiconformal-map-is-quasiconformal|Inverse regularity, positive Jacobian, area formula and derivative inverse.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice, a coefficient $\mu$ and the fixed parameters in the statement.

[F1] The measurable Riemann mapping theorem gives a sphere homeomorphic solution, unique up to Möbius postcomposition. A $1$-quasiconformal map is conformal, and an injective holomorphic map has nonzero derivative. ([[thm-measurable-riemann-mapping-sphere]], [[thm-one-quasiconformal-is-conformal]], [[cor-injective-holomorphic-derivative-nonzero]])

[F2] The inverse of a quasiconformal map has the same dilatation. Both maps preserve null sets, have positive Jacobian almost everywhere, and satisfy the area formula; at common differentiability points their derivatives are inverses. The weighted area formula follows from its set version by simple-function approximation. ([[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]], [[lem-analytic-quasiconformality-implies-modulus-distortion]])

[F3] The Cauchy transform has $\bar\partial\mathcal Cf=f$, $\partial\mathcal Cf=\mathcal Bf$, global $W^{1,r}$ and Hölder bounds for compact $L^r$ data with $r>2$. The inverse $I-\mu\mathcal B$ is bounded on $L^2$ and $L^r$ uniformly for $2\le r\le p_\kappa$. ([[lem-ip-planar-cauchy-beurling-and-near-two-inversion]])

[F4] Distributional harmonic functions are smooth; an entire bounded holomorphic function is constant. Convolution with an $L^1$ kernel is bounded on $L^2$. ([[thm-weyl-lemma-for-the-laplacian]], [[thm-liouville-bounded-entire-function]], [[thm-young-convolution-inequality]])

[A1] The Axiom of Choice is used at [F1]–[F2], and Countable Choice at [F3]–[F4]. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Take a solution from [F1] fixing infinity. Outside $D_R$ its coefficient is zero, so it is conformal there. In the infinity chart it is an injective holomorphic map fixing zero with nonzero derivative. Its Taylor expansion there gives $az+b+O(1/z)$ in the original chart, with $a\ne0$. Postcomposition by $(w-b)/a$ gives the principal normalization. Any two principal solutions differ by a Möbius map by [F1]; since both fix infinity this map is affine, and their leading and constant Laurent coefficients force it to be the identity. This proves existence and uniqueness of $\Phi$. [A1, F1, given, algebra]

2.1 Set $h=\bar\partial\Phi$, which is in $L^2$ and has support in $\overline D_R$ by local quasiconformal Sobolev regularity and the zero coefficient outside. The Cauchy integral for compact $L^2$ data is locally $L^2$: on a fixed target disk the kernel restricted to all differences with $D_R$ is in $L^1$, so [F4] applies; outside a larger disk its bound is $C\|h\|_1/|z|$. Approximating $h$ by smooth functions in a fixed support disk yields distributionally $\bar\partial\mathcal Ch=h$ and $\partial\mathcal Ch=\mathcal Bh$, the latter by Beurling $L^2$ boundedness. Thus $\bar\partial(\Phi-z-\mathcal Ch)=0$. Applying $\partial$ and [F4] makes this distribution smooth harmonic; the original Cauchy–Riemann equation makes its representative holomorphic. It tends to zero at infinity by the principal normalization and the exterior Cauchy bound. Liouville gives $\Phi-z=\mathcal Ch$. Therefore $\partial\Phi=1+\mathcal Bh$, and the Beltrami equation says $(I-\mu\mathcal B)h=\mu$. [F1, F3, F4, step 1.1, algebra]

3.1 Let $h_r=(I-\mu\mathcal B)^{-1}\mu$ in $L^r$. Its norm is at most $C_\kappa\|\mu\|_r\le C_{\kappa,R,r}$ by [F3]. The equation gives $h_r=0$ outside $D_R$, hence $h_r\in L^2$ by Hölder on that disk. Compatibility of the $L^2$ and $L^r$ Beurling actions and uniqueness of the $L^2$ inverse imply $h_r=h$ from step 2.1. Apply the Cauchy bounds in [F3] to $\Phi-z=\mathcal Ch$. This proves its $W^{1,r}$, supremum and Hölder bounds. In particular $\Phi(D_S)$ lies in a disk of radius $S+C_{\kappa,R,r}$, uniformly in $\mu$. [F3, step 2.1, algebra]

4.1 By [F2], $\Psi=\Phi^{-1}$ has coefficient bounded by $\kappa$, supported in $\Phi(\overline D_R)$, and has the same principal expansion at infinity. Step 3.1 puts that support inside a fixed disk; applying step 3.1 to $\Psi$ therefore gives a uniform $L^r$ bound for $\partial\Psi$ on every fixed disk. At common differentiability points, the derivative inverse formula gives $|\partial\Psi(\Phi(z))|=1/[(1-|\mu(z)|^2)|\partial\Phi(z)|]$. Thus $|\partial\Phi(z)|^{-\sigma}\le|\partial\Psi(\Phi(z))|^\sigma$. Change variables with $z=\Psi(w)$ using [F2]; the bound $J_\Psi\le|\partial\Psi|^2$ gives $\int_{D_S}|\partial\Phi|^{-\sigma}\le\int_{\Phi(D_S)}|\partial\Psi(w)|^{\sigma+2}dA(w)$. Since $\sigma+2=r$, step 3.1 and the uniform disk containing $\Phi(D_S)$ bound the right side. Null-set preservation in [F2] justifies all inverse identities and negative powers on common full-measure sets. [F2, step 3.1, algebra]

5.1 On $D_S$, $|\Phi|\le S+C_{\kappa,R,r}$. For $|k|=1$, the exponential and its derivative are bounded on this range. To justify the Sobolev chain rule, set $h=\bar\partial\Phi$ and approximate it in $L^r$ by smooth functions $h_n$ supported in one fixed larger disk; the density and Cauchy bounds in [F3] give $\Phi_n=z+\mathcal Ch_n\to\Phi$ in $W^{1,r}(D_{S+1})$ and uniformly on $D_S$. The Cauchy integrals of these smooth data are smooth, and the uniform convergence keeps their ranges on $D_S$ in a fixed bounded set. The classical chain rule for $f_n=e^{ik\Phi_n}$ gives $\partial f_n=ik e^{ik\Phi_n}\partial\Phi_n$ and the corresponding $\bar\partial$ formula. Uniform convergence of the exponential factors and $L^r$ convergence of the derivatives pass these identities to $f=e^{ik\Phi}$ in $W^{1,r}(D_S)$. Step 3.1 supplies the uniform $W^{1,r}$ bound, while $|\partial f|^{-\sigma}\le e^{\sigma(S+C)}|\partial\Phi|^{-\sigma}$ and step 4.1 supply the negative-power bound. This proves the final assertion, including the case $\sigma<1$ with its stated integral convention. [F3, step 3.1, step 4.1, algebra] ∎
