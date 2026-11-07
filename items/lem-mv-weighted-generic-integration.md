---
id: lem-mv-weighted-generic-integration
kind: lemma
title: "Conditional weighted integration of the Michel–Venkatesh generic term"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-mv-degenerate-finite-part-and-conductor-balance
  - thm-holder-inequality-for-integrals
  - thm-integral-triangle-inequality
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michel–Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2, §5.2.8; explicit conditional integration adaptation"
      url: "https://arxiv.org/pdf/0903.3591v2"
---

## Statement

Let $(\Omega,\mathcal A,\mu)$ be a measure space and $\mathcal T$ any parameter set. Let $c:\Omega\to[1,\infty)$ be measurable. Fix finite constants $C_1,C_2,X,U,h\ge1$, $Q=C_1C_2$, $K,M\ge0$, $A,B,L,\kappa,\epsilon\ge0$, and $d,b>0$, with $X\le hC_1$ and $\kappa\epsilon<\min(d,b)$. For each $\tau\in\mathcal T$, suppose measurable functions $a_\tau,q_\tau:\Omega\to[0,\infty)$ and $k_\tau:\Omega\to\mathbb C$ satisfy
$$|k_\tau(\omega)|\le a_\tau(\omega)q_\tau(\omega),\qquad q_\tau(\omega)^2\le Kc(\omega)^BU^AC_1^{\kappa\epsilon}X^{-d}(C_1/X)^{-b}.$$
Suppose also that the following weighted moment holds uniformly in $\tau$:
$$\int_\Omega c^{B/2}a_\tau\,d\mu\le MU^L.$$
Then $k_\tau$ is absolutely integrable. Put $\delta=(\min(d,b)-\kappa\epsilon)/2>0$. Its integral $G_\tau$ satisfies, uniformly in $\tau$,
$$G_\tau:=\int_\Omega k_\tau\,d\mu,\qquad |G_\tau|\le \sqrt K\,M h^{\max(b-d,0)/2}C_2^\delta U^{L+A/2}Q^{-\delta}.$$

One sufficient condition for the weighted moment is the existence of finite $J,N\ge0$ and $r>0$, independent of $\tau$, such that
$$\int_\Omega c^{-r}\,d\mu\le J,\qquad \int_\Omega c^{B+r}a_\tau^2\,d\mu\le N^2U^{2L}.$$
In that case one may take $M=\sqrt J\,N$. These measure and norm inequalities are hypotheses, not assertions about an automorphic spectrum. No finiteness of $\mu(\Omega)$ is required.

## Statement references

[Michel–Venkatesh, §5.2.8, printed pp.101–102](https://arxiv.org/pdf/0903.3591v2). This is the conditional integration step, with explicit constants and a squared input convention. It does not establish the automorphic hypotheses of that section.

## Facts & Assumptions

**Given:** The measurable functions and uniform inequalities in the Statement; all nonnegative functions are finite-valued. The inequalities are imposed on the whole supplied measure space. When an application gives inequalities off a common measurable null set, it may first restrict the measure space to that complement. No spectral decomposition, local trilinear bound, or choice principle is assumed implicitly.

[F1] [[thm-holder-inequality-for-integrals]] with conjugate exponents $2,2$: the integral of the product of two measurable real $L^2$ functions is bounded by the product of their $L^2$ norms.

[F2] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral preserves pointwise inequalities and nonnegative scalar multiplication, with zero scalar handled separately.

[F3] [[def-integrable-real-and-complex-functions-and-their-integrals]] and [[thm-integral-triangle-inequality]]: finiteness of the integral of the modulus gives complex integrability and bounds the modulus of its integral.

[F4] The conductor calculation in [[lem-mv-degenerate-finite-part-and-conductor-balance]]: if $C_1,C_2,X\ge1$, $X\le hC_1$, $Q=C_1C_2$ and $\lambda=\min(d',b')-\kappa'\epsilon>0$, then
$$C_1^{\kappa'\epsilon}X^{-d'}(C_1/X)^{-b'}\le h^{\max(b'-d',0)}C_2^\lambda Q^{-\lambda}.$$
Only this elementary calculation is used, not that lemma's finite-part or automorphic interpretation.

## Proof

**Given:** The data and inequalities of the Statement.

1.1 Under the optional sufficient conditions, set $f=c^{-r/2}$ and $g_\tau=c^{(B+r)/2}a_\tau$. Both are measurable real functions with squared integrals at most $J$ and $N^2U^{2L}$, respectively. Their product is $c^{B/2}a_\tau$. Applying [F1] gives $\int c^{B/2}a_\tau\,d\mu\le\sqrt J\,NU^L$, including $J=0$ or $N=0$. Thus these conditions imply precisely the required moment with $M=\sqrt J\,N$. [given, F1, algebra]

1.2 All factors in the squared bound are nonnegative and finite. Taking square roots and multiplying by $a_\tau$ gives $|k_\tau|\le Hc^{B/2}a_\tau$, where $H=\sqrt K\,U^{A/2}C_1^{\kappa\epsilon/2}X^{-d/2}(C_1/X)^{-b/2}$. If $K=0$ then $q_\tau=k_\tau=0$ everywhere and the claimed result follows. Otherwise $H>0$; [F2] and the assumed weighted moment give $\int|k_\tau|\,d\mu\le HMU^L<\infty$. This also covers $M=0$. [given, F2, algebra]

2.1 By [F3] and step 1.2 the integral $G_\tau$ exists and $|G_\tau|\le\sqrt K\,MU^{L+A/2}C_1^{\kappa\epsilon/2}X^{-d/2}(C_1/X)^{-b/2}$. Apply [F4] with $d'=d/2$, $b'=b/2$ and $\kappa'=\kappa/2$. Its positive exponent is $\lambda=\delta$, so it bounds the last conductor expression by $h^{\max(b-d,0)/2}C_2^\delta Q^{-\delta}$. This is the asserted estimate. Every constant is independent of $\tau$ by hypothesis; no exchange of a limit and the integral is involved. [step 1.2, F3, F4, given, algebra] ∎

## Scope of the automorphic application

For the intended application, $\Omega$ is the generic PGL2 spectrum with the source's Plancherel measure, $c(\pi)=C(\pi)$, $a_\tau(\pi)=S_{d_0}^\pi(\Pi_\pi\Phi_2(s))$, $q_\tau(\pi)=S_{-d_0}^\pi(\Pi_\pi\Phi_3(t))$, and $k_\tau(\pi)$ is the spectral inner product, with $\tau=(s,t)=(t/2,t)$ on (5.15). Sobolev duality must establish the first inequality. This notation follows the explicit proof of §5.2.8; the displayed spectral term (5.16) interchanges the letters $s,t$ inside the projections, so that display alone should not define the application.

Use $C_i=C(\pi_i)$, $X=C(\chi_3)$, $U=\|u\|$ and a proved bound $C(\chi_3)\le hC(\pi_1)$. The proposed squared estimate for $q_\tau$ must be obtained from (4.23), ramified estimates such as (3.47), the movement estimate (5.17), the canonical deformation norms, and the character-twist estimate of Theorem 5.1. If a supplier instead bounds $q_\tau$ itself by a product with exponents $d_0',b_0',\kappa_0',A_0',B_0'$, square that inequality before substitution: use twice those exponents and the squared constant. A squared period estimate cannot be substituted as an unsquared norm estimate without changing exponents.

The weighted moment still requires an automorphic proof, uniformly on the stated deformation path. In the source it uses the degree shift preceding (4.24), (4.24) itself, and control of Sobolev norms under translation by $u$. The optional sufficient condition above is an alternative interface only; it supplies no automorphic counting or trace estimate. Any constants $K,M,h$ must have the required polynomial dependence on $C(\pi_2)$, with absolute exponents, and no hidden dependence on $C_1$ or the spectral representation. To reach the source notation $\ll_{\pi_2}\|u\|^{A'}Q^{-\delta}$, all these uniformities must first be proved. An available small loss $C_1^{\kappa\epsilon}$ is retained and requires $\kappa\epsilon<\min(d,b)$.

No regularized spectral identity, continuity at the origin, amplifier existence, degenerate-term estimate, Proposition 5.2.4, or parent subconvexity theorem is proved here. In particular, a uniform bound on the punctured path alone does not prove continuity of $G_\tau$ at zero.
