---
id: lem-mv-degenerate-finite-part-and-conductor-balance
kind: lemma
title: "Finite-part cancellation and conductor balance for the Michel–Venkatesh correlation estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michel–Venkatesh, The Subconvexity Problem for GL2, arXiv:0903.3591v2, §§5.2.8 and 5.2.12; explicit finite-asymptotic adaptation"
      url: "https://arxiv.org/pdf/0903.3591v2"
---

## Statement

Let $1\le m\le8$. For $1\le\nu\le m$, suppose complex-valued functions on a punctured disc about zero have the supplied expansions
$$L_\nu(w)=\sum_{k=-4}^{0}\ell_{\nu,k}w^k+O(|w|),\qquad P_\nu(w)=\sum_{j=0}^{4}p_{\nu,j}w^j+O(|w|^5).$$
All remainders are as $w\to0$ in that disc. Let $c_\nu\in\mathbb C$, and set $T(w)=\sum_{\nu=1}^m c_\nu L_\nu(w)P_\nu(w)$. Suppose $T$ is bounded as $w\to0$ along the punctured imaginary axis. Then $T$ has a limit at zero, approached from any direction, and
$$T(0):=\lim_{w\to0}T(w)=\sum_{\nu=1}^{m}c_\nu\sum_{j=0}^{4}\ell_{\nu,-j}p_{\nu,j}.$$
In particular, let $Q,D\ge1$, $z\in\mathbb C\setminus\{0\}$, $\alpha,\beta,\zeta\ge0$, $\gamma>1/2$, and $M_0,M_1,M_2\ge0$. If, for all the indicated indices,
$$|c_\nu|\le M_0Q^\alpha,\qquad |\ell_{\nu,-j}|\le M_1|z|^{-4}Q^\beta,\qquad |p_{\nu,j}|\le M_2Q^\zeta D^{-\gamma},$$
then
$$|T(0)|\le40M_0M_1M_2Q^{\alpha+\beta+\zeta}|z|^{-4}D^{-\gamma}.$$
The hypotheses supply the finite expansions and boundedness; their existence for automorphic data is not asserted.

Separately, suppose $C_1,C_2,X,U\ge1$, $Q=C_1C_2$, $h\ge1$, $X\le hC_1$, $a\ge0$, $d,b>0$, $\kappa,\epsilon\ge0$, and a complex number $G$ satisfies
$$|G|\le M_gU^aC_1^{\kappa\epsilon}X^{-d}(C_1/X)^{-b},\qquad M_g\ge0.$$
Write $\tau=\min(d,b)$ and assume $\kappa\epsilon<\tau$. Then $\delta=\tau-\kappa\epsilon>0$ and
$$|G|\le M_gh^{\max(b-d,0)}C_2^\delta U^aQ^{-\delta}.$$
Consequently, if a supplied scalar $R$ equals $G+T(0)$ for data satisfying both sets of assumptions, then
$$|R|\le40M_0M_1M_2Q^{\alpha+\beta+\zeta}|z|^{-4}D^{-\gamma}+M_gh^{\max(b-d,0)}C_2^\delta U^aQ^{-\delta}.$$

## Statement references

[Michel–Venkatesh, §§5.2.8 and 5.2.12](https://arxiv.org/pdf/0903.3591v2). This is an explicit elementary adaptation of two closing calculations, conditional on their analytic data; it is not Proposition 5.2.4.

## Facts & Assumptions

**Given:** The finite expansions, boundedness, and numerical inequalities of the Statement. The notation $O(|w|^r)$ means a modulus bounded by a constant times $|w|^r$ on a sufficiently small punctured disc. These constants and the disc may depend on all supplied data. No uniform radius or automorphic meromorphic continuation is assumed implicitly. Only finite sums, elementary limits, and inequalities are used; no choice principle or analytic supplier is invoked.

## Proof

**Given:** The data and assumptions of the Statement.

1.1 Each $L_\nu$ is $O(|w|^{-4})$ and each $P_\nu$ is $O(1)$ after restricting the disc to radius at most one. Multiplying the two supplied finite expansions gives a Laurent polynomial plus $O(|w|)$: the $O(|w|^5)$ remainder times $L_\nu$ is $O(|w|)$, and the $O(|w|)$ remainder of $L_\nu$ times the polynomial part of $P_\nu$ is also $O(|w|)$. Positive-degree terms of the finite product are $O(|w|)$. Therefore $T(w)=\sum_{r=-4}^{0}a_rw^r+O(|w|)$, where $a_r=\sum_\nu c_\nu\sum_{k+j=r}\ell_{\nu,k}p_{\nu,j}$ with $-4\le k\le0$ and $0\le j\le4$. [given, algebra]

1.2 The conductor expression equals $C_1^{-b+\kappa\epsilon}X^{b-d}$. If $b\ge d$, the inequality $X\le hC_1$ bounds it by $h^{b-d}C_1^{-d+\kappa\epsilon}$. If $b<d$, the inequality $X\ge1$ bounds it by $C_1^{-b+\kappa\epsilon}$. Thus in both cases it is at most $h^{\max(b-d,0)}C_1^{-\delta}$, where $\delta=\min(b,d)-\kappa\epsilon>0$. Since $C_1=Q/C_2$, this is $h^{\max(b-d,0)}C_2^\delta Q^{-\delta}$. Multiply by $M_gU^a$ to obtain the bound for $G$. [given, algebra]

2.1 If some negative coefficient is nonzero, let $r_0<0$ be the least such index. Step 1.1 gives $w^{-r_0}T(w)\to a_{r_0}\ne0$. On the imaginary axis the assumed boundedness of $T$ instead gives $w^{-r_0}T(w)\to0$, since $-r_0>0$. Thus every negative coefficient is zero. It follows from step 1.1 that $T(w)=a_0+O(|w|)$ throughout the punctured disc. The pairs contributing to $a_0$ have $k=-j$, so its value is exactly the finite sum in the Statement. This proves the full limit without assuming that the individual summands have limits. [step 1.1, given, algebra]

3.1 There are at most $8\cdot5=40$ summands in the formula for $a_0$. Bound each by the product of the three supplied coefficient bounds and use the finite triangle inequality. This proves the asserted bound for $T(0)$, including when any $M_i$ is zero. No bound for an individual $L_\nu(w)$ at $w=0$ is used. [step 2.1, given, algebra]

4.1 For $R=G+T(0)$ use the triangle inequality and steps 3.1 and 1.2. The case $b=d$ is included in step 1.2 with $h^0=1$; $Q=1$ forces $C_1=C_2=1$ and leaves the formulas valid. The lemma does not include $z=0$, where its numerical bound is undefined. [step 3.1, step 1.2, given, algebra] ∎

## Conditional automorphic interpretation

For the intended application, $w=\overline t$, $(s,t)=(t/2,t)$, $D=\|\operatorname{Ad}(u)\|$, $U=\|u\|$, $C_i=C(\pi_i)$, and $X=C(\chi_3)$. The four $H$ terms and (when $\pi_2$ is Eisenstein) four $J$ terms of §§5.2.9–5.2.12 are candidate summands. Their meromorphic partial L-functions supply $L_\nu$ and their local products supply $P_\nu$ only after the expansions and coefficient estimates have been proved. Anti-holomorphic dependence is handled by using $w=\overline t$; no distinction between $t$ and $\overline t$ is dropped inside a Laurent expansion. The source normalization constants must be included in $c_\nu$, or absorbed into $P_\nu$ with the corresponding coefficient bounds. For cuspidal $\pi_2$, the $J$ contribution vanishes.

For the generic term, the source's conductor expression suggests $b=1-2\theta>0$, with a supplied character-twist saving $d>0$. Any loss $C_1^{\kappa\epsilon}$ reduces the final saving to $\min(d,1-2\theta)-\kappa\epsilon$. Constants in the spectral integrand must have a uniform polynomial dependence on the spectral conductor and be integrated against a proved Sobolev moment bound before asserting the assumed estimate for $G$.

For the degenerate term, a local bound $D^{\rho-(1-\theta)}$ gives $\gamma=1-\theta-\rho>1/2$ only for $0\le\rho<1/2-\theta$. The remaining $Q$ losses must be assigned to $\alpha,\beta,\zeta$ and retained. They cannot be erased by taking a limit in $w$, by reducing $\gamma$ without additional information, or by cancellation of the negative Laurent coefficients. This lemma supplies neither the automorphic estimates nor the loss-free statement of Proposition 5.2.4.
