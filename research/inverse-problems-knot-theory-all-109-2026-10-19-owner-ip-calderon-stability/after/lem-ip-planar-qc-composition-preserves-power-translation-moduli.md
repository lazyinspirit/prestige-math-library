---
id: lem-ip-planar-qc-composition-preserves-power-translation-moduli
kind: lemma
title: Positive power translation moduli after principal quasiconformal composition
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ip-planar-principal-beltrami-inverse-gradient-integrability
  - lem-inverse-of-a-quasiconformal-map-is-quasiconformal
  - lem-analytic-quasiconformality-implies-modulus-distortion
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Faraco and Prats, Characterization for stability in planar conductivities"
      url: "https://arxiv.org/pdf/1701.06480"
      locator: "Section 4.3, Lemma 4.10 and its proof, printed pp. 23–25; the power-modulus specialization here uses mollification and the locally proved near-two Jacobian integrability."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Fix $0\le\kappa<1$, $2<r\le p_\kappa$, $q\ge1$, and $L,R,A,B>0$. Put $p=qr/(r-2)$ and $\theta_0=1-2/r$. Let $\Phi$ be a principal quasiconformal homeomorphism with coefficient supported in $D_L$ and bounded by $\kappa$, and let $\Psi=\Phi^{-1}$. Suppose $v$ is measurable, supported in $D_R$, with $\|v\|_\infty\le B$ and
$$\omega_p(v,t):=\sup_{|h|\le t}\|v(\cdot-h)-v\|_p\le At^\theta\qquad(0<t\le1),$$
where $0<\theta\le1$. Then $v\circ\Psi$ is a well-defined almost-everywhere class, is supported in a fixed disk depending only on the listed parameters, and
$$\omega_q(v\circ\Psi,t)\le C t^{\theta\theta_0/(1+\theta)}\qquad(0<t\le1).$$
The constant is uniform over all such $v,\Phi$. Thus the positive power translation moduli furnished by bounded BV conductivities remain positive power moduli after these changes of variables.

## Statement references

[[lem-ip-planar-principal-beltrami-inverse-gradient-integrability|Uniform near-two derivative integrability and global Hölder deformation of principal maps and their inverses.]]

[[lem-analytic-quasiconformality-implies-modulus-distortion|The weighted area formula.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice and the parameters and functions in the statement.

[F1] The principal maps $\Phi,\Psi$ have uniform bounded deformations and $C^{0,\theta_0}$ deformation seminorms; their derivatives are uniformly $L^r$ on fixed disks. Their Jacobians are positive almost everywhere, and both maps preserve null sets and satisfy the weighted area formula. ([[lem-ip-planar-principal-beltrami-inverse-gradient-integrability]], [[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]], [[lem-analytic-quasiconformality-implies-modulus-distortion]])

[F2] Hölder applies with conjugate exponents $a=r/2>1$ and $a'=r/(r-2)$, and to the probability integral defining a nonnegative unit-mass mollification. ([[thm-holder-inequality-for-integrals]])

[A1] The Axiom of Choice and Countable Choice are used in the quoted quasiconformal and integration interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Choose a fixed nonnegative smooth unit-mass mollifier supported in the unit disk and let $v_h=\rho_h*v$, $0<h\le1$. The probability form of Hölder, followed by integration, gives $\|v-v_h\|_p\le\omega_p(v,h)\le Ah^\theta$. Also $\|v_h\|_\infty\le B$, $\|\nabla v_h\|_\infty\le C_\rho B/h$, and its support is contained in $\overline D_{R+1}$. The latter derivative bound follows by differentiating the smooth convolution kernel and taking its derivative's $L^1$ norm. All supports involved in $v_h\circ\Psi$ and $v\circ\Psi$ lie in $\Phi(\overline D_{R+1})$, hence inside one fixed disk by [F1]. Null-set preservation of $\Phi$ makes composition with $\Psi$ independent of the representative of $v$. [A1, F1, F2, given, algebra]

2.1 Apply the weighted area formula with $w=\Phi(z)$ and then Hölder. Since $J_\Phi\le|\partial\Phi|^2$, its $L^a$ norm on $D_{R+1}$ is uniformly bounded by [F1]. Thus $\|(v-v_h)\circ\Psi\|_q^q=\int|v-v_h|^qJ_\Phi\,dA\le\|v-v_h\|_{qa'}^q\|J_\Phi\|_{a}\le C A^qh^{q\theta}$, using $qa'=p$. Therefore the translation difference of this error has $L^q$ norm at most $2CAh^\theta$, by translation invariance of Lebesgue measure. [F1, F2, step 1.1, algebra]

3.1 For $|y|\le t\le1$, the inverse deformation estimate gives $|\Psi(w-y)-\Psi(w)|\le|y|+C|y|^{\theta_0}\le C t^{\theta_0}$. The Lipschitz bound for $v_h$ therefore bounds $|v_h(\Psi(w-y))-v_h(\Psi(w))|$ by $CBh^{-1}t^{\theta_0}$. The support of this difference lies in the fixed disk from step 1.1 enlarged by one, whose area is uniformly bounded. Its $L^q$ norm is consequently at most $CBh^{-1}t^{\theta_0}$. Combine with step 2.1 and take $h=t^{\theta_0/(1+\theta)}$, which lies in $(0,1]$. The two powers $h^\theta$ and $h^{-1}t^{\theta_0}$ coincide with $t^{\theta\theta_0/(1+\theta)}$. Taking the supremum over the shifts proves the estimate. [F1, step 1.1, step 2.1, algebra] ∎
