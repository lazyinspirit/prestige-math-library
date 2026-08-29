---
id: thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel
kind: theorem
title: "The kernel of a complex character agrees with the kernel of any representation affording it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kernel-and-image-of-group-homomorphism, def-kernel-of-a-complex-character, prop-basic-value-properties-of-a-complex-character]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 3.1.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Shani Meynet and Robert Moscrop, McKay quivers and decomposition, Appendix A.3"
      url: "https://link.springer.com/article/10.1007/s11005-023-01685-9"
---

## Statement

Let $\rho:G\to\operatorname{GL}(V)$ be a finite-dimensional complex
representation of a finite group $G$, with character $\chi=\chi_V$. Then

$$\ker\chi=\ker\rho,$$

where $\ker\rho$ is the kernel of the group homomorphism $\rho$ and
$\ker\chi=\{g\in G:\chi(g)=\chi(1)\}$ is the kernel of the character.

## Facts & Assumptions

**Given:** A finite group $G$ and a finite-dimensional complex representation $\rho:G\to\operatorname{GL}(V)$ with character $\chi$.

[F1] The kernel of a group homomorphism is the set of elements sent to the identity ([[def-kernel-and-image-of-group-homomorphism]]).

[F2] The kernel of the character is $\ker\chi=\{g\in G:\chi(g)=\chi(1)\}$ ([[def-kernel-of-a-complex-character]]).

[F3] For the character, $\chi(1)=\dim V$, and $|\chi(g)|=\chi(1)$ holds exactly when $\rho(g)$ is a scalar operator ([[prop-basic-value-properties-of-a-complex-character]]).

## Proof

**Proof technique:** direct.

1.1 If $g\in\ker\rho$, then $\rho(g)=\operatorname{id}_V$ by [F1], so $\chi(g)=\operatorname{tr}(\operatorname{id}_V)=\chi(1)$ by [F3]. Hence $g\in\ker\chi$ by [F2], which proves $\ker\rho\subseteq\ker\chi$. [F1, F2, F3, given]

1.2 Conversely, let $g\in\ker\chi$, so $\chi(g)=\chi(1)$ by [F2]. Then in particular $|\chi(g)|=\chi(1)$, and the equality clause of [F3] gives $\rho(g)=\lambda\operatorname{id}_V$ for a scalar $\lambda$. Evaluating the character at $g$ and at $1$ with [F3] gives $\chi(g)=\lambda\chi(1)=\chi(1)$. [F2, F3, given]

1.3 If $\dim V=0$, then $V=\{0\}$ is the zero space, $\rho(g)= \operatorname{id}_V$ holds for every $g$, and $\chi\equiv0$, so $\ker\rho=G= \ker\chi$ by [F1] and [F2]; the statement is immediate. Hence assume $\dim V\ge1$. [F1, F2, given]

2.1 Since $\chi(1)=\dim V\ge1$ by [F3], the equality $\lambda\chi(1)=\chi(1)$ of step 1.2 forces $\lambda=1$; therefore $\rho(g)=\operatorname{id}_V$, so $g\in\ker\rho$ by [F1]. Together with step 1.1 and step 1.3 this proves $\ker\chi=\ker\rho$. [F1, F3, step 1.2, step 1.3, algebra] ∎
