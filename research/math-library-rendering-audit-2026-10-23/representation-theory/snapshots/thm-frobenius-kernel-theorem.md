---
id: thm-frobenius-kernel-theorem
kind: theorem
title: "Frobenius kernel theorem"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-frobenius-kernel-is-an-intersection-of-character-kernels, thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel, lem-intersection-of-normal-subgroups]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite Frobenius group with complement $H$ and let
$N=\big(G\setminus\bigcup_{x\in G}xHx^{-1}\big)\cup\{1\}$ be the associated
kernel set. Then $N$ is a normal subgroup of $G$.

## Facts & Assumptions

**Given:** A finite group $G$ with Frobenius complement $\{1\}<H<G$ and the kernel set $N$ with its associated family $\mathcal I$ of nontrivial irreducible characters of $H$.

[F1] $N=\bigcap_{\varphi\in\mathcal I}\ker\widetilde\varphi$ for a nonempty family $\{\widetilde\varphi:\varphi\in\mathcal I\}$ of irreducible complex characters of $G$ ([[lem-frobenius-kernel-is-an-intersection-of-character-kernels]]).

[F2] If $\rho$ is a finite-dimensional complex representation of $G$ with character $\chi$, then $\ker\chi=\ker\rho\mathrel{\trianglelefteq}G$ ([[thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel]]).

[F3] The intersection of a nonempty family of normal subgroups of $G$ is again a normal subgroup of $G$ ([[lem-intersection-of-normal-subgroups]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $N$ is the intersection over the nonempty family of kernels $\ker\widetilde\varphi$ of irreducible characters $\widetilde\varphi$ of $G$. [F1, given]

2.1 Each $\ker\widetilde\varphi$ occurring in [F1] is a normal subgroup of $G$: it is the kernel of the representation $\rho$ affording the character $\widetilde\varphi$, hence equals $\ker\rho$, which is normal by [F2]. [F2, step 1.1]

3.1 Therefore $N$ is an intersection of a nonempty family of normal subgroups of $G$, so by [F3] it is a subgroup of $G$ and is normal in $G$. In particular the kernel set is closed under products and inverses, a fact that the counting argument of [[lem-frobenius-kernel-cardinality]] could not supply. ∎ [F1, F3, step 1.1, step 2.1]
