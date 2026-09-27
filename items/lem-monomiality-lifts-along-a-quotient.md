---
id: lem-monomiality-lifts-along-a-quotient
kind: lemma
title: Monomiality lifts along a quotient
status: published
origin: pipeline
deps: [def-supersolvable-groups-and-monomial-characters, thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel, prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient, def-induced-r-linear-g-module-by-h-covariant-functions, def-induced-character-of-a-complex-representation, def-quotient-group]
proof_strategy: construct
verification:
  audited: 2026-09-24
sources:
  references:
    - title: Tammo tom Dieck, Representation Theory, Lemma 4.3.4
      url: https://www.uni-math.gwdg.de/tammo/d01.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

Let $G$ be a finite group and $N\triangleleft G$. If every irreducible character of $G/N$ is monomial, then every irreducible character of $G$ with $N$ in its kernel is monomial.

## Facts & Assumptions

[F1] For a finite-dimensional complex representation $\rho$ of a finite group with character $\chi$, $\ker\chi=\ker\rho$ ([[thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel]]).

[F2] A representation with $N$ in its kernel factors through $G/N$, and irreducibility is unchanged by this factorization ([[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]).

[F3] A monomial character is induced from a one-dimensional character of a subgroup ([[def-supersolvable-groups-and-monomial-characters]]).

[F4] The induced module consists of functions satisfying $f(gh)=h^{-1}\cdot f(g)$, with group action $(x\cdot f)(g)=f(x^{-1}g)$ ([[def-induced-r-linear-g-module-by-h-covariant-functions]]). Its character is the induced character ([[def-induced-character-of-a-complex-representation]]).

[F5] In $G/N$, the coset product is $(gN)(hN)=ghN$ ([[def-quotient-group]]).

## Proof

**Given:** A finite group $G$, a normal subgroup $N$, and an irreducible complex character $\chi$ of $G$ with $N\subseteq\ker\chi$.

1.1 Choose a representation $\rho$ affording $\chi$. By [F1], $N\subseteq\ker\rho$, so [F2] factors $\rho$ through an irreducible representation $\bar\rho$ of $Q:=G/N$. Its character $\bar\chi$ satisfies $\chi(g)=\bar\chi(gN)$. By the hypothesis and [F3], choose $\bar H\le Q$ and a one-dimensional $\bar H$-module $W$ with character $\bar\lambda$ such that $\bar\chi=\operatorname{Ind}_{\bar H}^{Q}\bar\lambda$. [F1, F2, F3, given]

2.1 Let $\pi:G\to Q$ be the quotient map and $H=\pi^{-1}(\bar H)$. Then $N\le H\le G$ and $H/N=\bar H$. Make $W$ an $H$-module by $h\cdot w:=(hN)\cdot w$; its linear character is $\lambda(h)=\bar\lambda(hN)$. In particular, $N$ acts trivially on $W$. [F2, F5, step 1.1]

3.1 For $\bar f\in\operatorname{Ind}_{\bar H}^{Q}W$, define $\Phi(\bar f)(g):=\bar f(gN)$. If $h\in H$, then [F4] and [F5] give $\Phi(\bar f)(gh)=\bar f((gN)(hN))=(hN)^{-1}\cdot\bar f(gN)=h^{-1}\cdot\Phi(\bar f)(g)$. Thus $\Phi(\bar f)\in\operatorname{Ind}_{H}^{G}W$, and $\Phi$ is linear. [F4, F5, step 2.1]

4.1 Conversely, for $F\in\operatorname{Ind}_{H}^{G}W$ and $n\in N$, [F4] gives $F(gn)=n^{-1}\cdot F(g)=F(g)$ by step 2.1. Hence $\bar f(gN):=F(g)$ is well defined; the same covariance calculation shows that $\bar f\in\operatorname{Ind}_{\bar H}^{Q}W$. This construction is inverse to $\Phi$, so $\Phi$ is a linear bijection. [F4, step 2.1, step 3.1]

4.2 For $x,g\in G$, the action in [F4] gives $\Phi((xN)\cdot\bar f)(g)=\bar f((x^{-1}g)N)=(x\cdot\Phi(\bar f))(g)$. Thus $\Phi$ is $G$-equivariant when the $Q$-module on the left is inflated along $\pi$. [F4, F5, step 3.1]

5.1 Taking characters of the isomorphic $G$-modules in steps 4.1–4.2, [F4] gives $\chi(g)=\bar\chi(gN)=\operatorname{Ind}_{H}^{G}\lambda(g)$ for every $g\in G$. By [F3], $\chi$ is monomial. [F3, F4, step 1.1, step 2.1, step 4.1, step 4.2] ∎
