---
id: thm-normal-subgroups-are-exactly-intersections-of-kernels-of-irreducible-complex-characters
kind: theorem
title: "The normal subgroups of a finite group are exactly the intersections of kernels of irreducible complex characters"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient, thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel, thm-regular-representation-is-faithful]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Shani Meynet and Robert Moscrop, McKay quivers and decomposition, Appendix A.3"
      url: "https://link.springer.com/article/10.1007/s11005-023-01685-9"
---

## Statement

Let $G$ be a finite group. A subgroup $N$ of $G$ is normal if and only if it
is an intersection of kernels of irreducible complex characters of $G$.

## Facts & Assumptions

**Given:** A finite group $G$ and a subgroup $N$ of $G$.

[F1] Every finite-dimensional representation of a finite group over a field of characteristic not dividing $|G|$ is completely reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[F2] A representation with kernel containing a normal subgroup factors through the quotient, irreducibility being preserved in both directions ([[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]).

[F3] The kernel of a character agrees with the kernel of any representation affording it ([[thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel]]).

[F4] The regular representation over a field is faithful ([[thm-regular-representation-is-faithful]]).

[A1] The kernel of a direct sum of representations is the intersection of the kernels of its summands.

[A2] A kernel of a group homomorphism is a normal subgroup, and an intersection of normal subgroups is normal.

## Proof

**Proof technique:** direct.

1.1 Assume $N\mathrel{\trianglelefteq}G$. Let $\overline\rho:G/N\to \operatorname{GL}(\mathbb C[G/N])$ be the regular representation of the quotient. Since $\overline\rho$ is faithful by [F4], its kernel in $G/N$ is the trivial subgroup $\{N\}$. [F4, given]

1.2 Conversely, if $N=\bigcap_j\ker\chi_j$ for irreducible characters $\chi_j$ of $G$, then by [F3] each $\ker\chi_j$ is the kernel of a group homomorphism, hence normal by [A2], and the intersection of normal subgroups is again normal by [A2]. Thus $N\mathrel{\trianglelefteq}G$. [F3, A2, given]

2.1 Since $\operatorname{char}\mathbb C=0$ does not divide $|G/N|$, [F1] decomposes $\mathbb C[G/N]$ as a direct sum of irreducible representations $U_1,\dots,U_m$ of $G/N$; by [A1] the trivial kernel of step 1.1 is the intersection of their kernels, so $\bigcap_{j}\ker(\overline\rho|_{U_j})=\{N\}$. [F1, A1, step 1.1, given]

3.1 For each $j$, let $V_j$ be the inflation of $U_j$ to $G$. By [F2], each $V_j$ is irreducible as a representation of $G$, and $\ker\rho_{V_j}=\pi^{-1}(\ker(\overline\rho|_{U_j}))$, which contains $N$. By [F3] each $\ker\rho_{V_j}$ equals the kernel of the corresponding irreducible character $\chi_j$ of $G$. [F2, F3, step 2.1, given]

4.1 By [A1] and steps 2.1 and 3.1, $\bigcap_j\ker\chi_j=\bigcap_j\pi^{-1}(\ker(\overline\rho|_{U_j})) =\pi^{-1}(\{N\})=N$. Hence a normal subgroup is an intersection of kernels of irreducible characters. [A1, step 2.1, step 3.1, algebra]

5.1 Steps 4.1 and 1.2 prove the two implications, hence the equivalence. [step 4.1, step 1.2] ∎
