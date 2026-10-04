---
id: ex-sign-twist-conjugates-the-s31-character
kind: example
title: "Sign twist conjugates the $(3,1)$ character of $S_4$"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - prop-sign-twist-corresponds-to-the-omega-involution
  - cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - lem-complete-homogeneous-expansion-in-power-sums
  - cor-sign-from-disjoint-cycle-structure
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - prop-omega-conjugates-schur-functions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "(7.5)–(7.7) and the omega rule (2.13), printed pp. 24, 114–115"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6 and §16"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26; §16, printed pp. 60–64 (sign twist and conjugate partitions)"
---

## Example

In $S_4$, the character $\chi^{(3,1)}$ has values $(3,1,-1,0,-1)$ on the cycle
types $(1^4),(2,1,1),(2,2),(3,1),(4)$, and multiplication by the sign
character, $\operatorname{sgn}(\rho)=(-1)^{4-\ell(\rho)}$, gives
$(3,-1,-1,0,1)$, which are the values of $\chi^{(2,1,1)}$. Thus
$S^{(3,1)}\otimes\operatorname{sgn}\cong S^{(2,1,1)}$, in agreement with
$\omega(s_{(3,1)})=s_{(2,1,1)}$.

## Facts & Assumptions

**Given:** The partitions $(3,1)$ and $(2,1,1)=(3,1)'$ of $4$ and the cycle types $(1^4),(2,1,1),(2,2),(3,1),(4)$ of $S_4$.

[F1] Jacobi–Trudi and dual Jacobi–Trudi give $s_{(3,1)}=h_3h_1-h_4$ and $s_{(2,1,1)}=e_3e_1-e_4$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F2] $h_4=\sum_{\rho\vdash4}p_\rho/z_\rho=\frac{p_1^4+6p_1^2p_2+8p_1p_3+3p_2^2+6p_4}{24}$, since $z_{(1^4)}=24$, $z_{(2,1,1)}=4$, $z_{(2,2)}=8$, $z_{(3,1)}=3$, $z_{(4)}=4$ ([[lem-complete-homogeneous-expansion-in-power-sums]]).

[F3] The involution $\omega$ satisfies $\omega(h_r)=e_r$ and $\omega(p_r)=(-1)^{r-1}p_r$, and $\omega(s_\lambda)=s_{\lambda'}$; consequently $e_4=\omega(h_4)=\frac{p_1^4-6p_1^2p_2+8p_1p_3+3p_2^2-6p_4}{24}$ and $\omega(s_{(3,1)})=s_{(2,1,1)}$ ([[prop-omega-conjugates-schur-functions]]).

[F4] $\operatorname{ch}(\chi^\lambda)=s_\lambda$ and $\chi^\lambda(\rho)$ is the coefficient of $p_\rho/z_\rho$ in the power-sum expansion of $s_\lambda$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]], [[cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients]]).

[F5] For $w\in S_n$ of cycle type $\rho$, the sign is $\operatorname{sgn}(w)=(-1)^{n-\ell(\rho)}$, and the tensor-product character satisfies $\chi_{V\otimes\operatorname{sgn}}(w)=\chi_V(w)\operatorname{sgn}(w)$; moreover $S^\lambda\otimes\operatorname{sgn}\cong S^{\lambda'}$ and $\chi^{\lambda'}(w)=(-1)^{n-\ell(\rho)}\chi^\lambda(w)$ ([[cor-sign-from-disjoint-cycle-structure]], [[prop-sign-twist-corresponds-to-the-omega-involution]]).

## Verification

**Proof technique:** direct.

1.1 The cycle types of $S_4$ together with their centralizer orders are $(1^4)\!:24$, $(2,1,1)\!:4$, $(2,2)\!:8$, $(3,1)\!:3$ and $(4)\!:4$; hence by [F2] and [F3], $h_4=\frac{p_1^4+6p_1^2p_2+8p_1p_3+3p_2^2+6p_4}{24}$ and $e_4=\frac{p_1^4-6p_1^2p_2+8p_1p_3+3p_2^2-6p_4}{24}$. [F2, F3, given]

1.2 With $h_1=p_1$ and $h_3=\frac{p_1^3+3p_1p_2+2p_3}{6}$ and $e_3=\omega(h_3)=\frac{p_1^3-3p_1p_2+2p_3}{6}$, [F1] gives $s_{(3,1)}=h_3h_1-h_4$ and $s_{(2,1,1)}=e_3e_1-e_4$. [F1, F3]

2.1 Substituting step 1.1 into step 1.2: $s_{(3,1)}=\frac{p_1^4+3p_1^2p_2+2p_1p_3}{6}-\frac{p_1^4+6p_1^2p_2+8p_1p_3+3p_2^2+6p_4}{24}=\frac{p_1^4+2p_1^2p_2-p_2^2-2p_4}{8}$, and $s_{(2,1,1)}=\frac{p_1^4-3p_1^2p_2+2p_1p_3}{6}-\frac{p_1^4-6p_1^2p_2+8p_1p_3+3p_2^2-6p_4}{24}=\frac{p_1^4-2p_1^2p_2-p_2^2+2p_4}{8}$. [F3, step 1.1, step 1.2, algebra]

3.1 By [F4] the values $\chi^\lambda(\rho)$ are the coefficients of $p_\rho/z_\rho$ in step 2.1; with the centralizer orders of step 1.1 this gives $\chi^{(3,1)}=(3,1,-1,0,-1)$ and $\chi^{(2,1,1)}=(3,-1,-1,0,1)$ on the cycle types $(1^4),(2,1,1),(2,2),(3,1),(4)$. [F4, step 2.1, algebra]

4.1 Multiplying pointwise by the sign values $\operatorname{sgn}(\rho)=(-1)^{4-\ell(\rho)}$, namely $(+1,-1,+1,+1,-1)$, turns the values of step 3.1 into $(3\cdot1,\,1\cdot(-1),\,(-1)\cdot1,\,0\cdot1,\,(-1)\cdot(-1))=(3,-1,-1,0,1)$, which are exactly the values of $\chi^{(2,1,1)}$; this agrees with the module isomorphism $S^{(3,1)}\otimes\operatorname{sgn}\cong S^{(2,1,1)}$ and with $\omega(s_{(3,1)})=s_{(2,1,1)}$ of [F3]. [F3, F5, step 3.1, algebra] ∎
