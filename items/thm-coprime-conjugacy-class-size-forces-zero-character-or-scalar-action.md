---
id: thm-coprime-conjugacy-class-size-forces-zero-character-or-scalar-action
kind: theorem
title: "A conjugacy class of size coprime to $\\chi(1)$ forces either $\\chi(g)=0$ or scalar action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-central-character-of-an-irreducible-complex-character, lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant, prop-basic-value-properties-of-a-complex-character, thm-central-characters-are-algebraic-integers]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 4.21"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Anupam Singh, Representation Theory of Finite Groups, Lemma 16.2"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
  audited: 2026-08-30
  precheck: pass
---

## Statement

Let $G$ be a finite group, let $V$ be an irreducible complex representation of
$G$ with character $\chi$, and let $g\in G$. If the size of the conjugacy class
of $g$ is coprime to $\chi(1)$, then either $\chi(g)=0$ or $g$ acts as a scalar
on $V$.

## Facts & Assumptions

**Given:** A finite group $G$, an irreducible complex representation $V$ of $G$ with character $\chi$, and an element $g\in G$.

[F1] Central-character values are algebraic integers ([[thm-central-characters-are-algebraic-integers]]).

[F2] An algebraic-integer average of roots of unity is either $0$ or constant ([[lem-an-algebraic-integer-average-of-roots-of-unity-is-zero-or-constant]]).

[F3] The character value $\chi(g)$ is the sum of the eigenvalues of $g$, which are roots of unity, and equality in the modulus bound means scalar action ([[prop-basic-value-properties-of-a-complex-character]]).

[F4] For the conjugacy class $C$ of $g$, the central character satisfies $\omega_\chi(\widehat C)=|C|\chi(g)/\chi(1)$ ([[def-central-character-of-an-irreducible-complex-character]]).

## Proof

**Proof technique:** direct.

1.1 Let $m=|\operatorname{Cl}_G(g)|$ and $n=\chi(1)$. By [F4], $m\chi(g)/n=\omega_\chi(\widehat C)$ for the class sum of $\operatorname{Cl}_G(g)$, so [F1] makes $m\chi(g)/n$ an algebraic integer. Since $\gcd(m,n)=1$, choose integers $a,b$ with $am+bn=1$. Then $\chi(g)/n=a(m\chi(g)/n)+b\chi(g)$ is an algebraic integer because [F3] shows that $\chi(g)$ is an algebraic integer. [F1, F3, F4, given, choose, algebra]

2.1 Let $\zeta_1,\dots,\zeta_n$ be the eigenvalues of $\rho_V(g)$. By [F3], they are roots of unity and $\chi(g)/n=(\zeta_1+\cdots+\zeta_n)/n$. Applying [F2] to this average and step 1.1 gives either $\chi(g)=0$ or $\zeta_1=\cdots=\zeta_n$. [F2, F3, step 1.1, algebra]

3.1 If $\zeta_1=\cdots=\zeta_n$, then the diagonalizable operator $\rho_V(g)$ from [F3] is that common root of unity times the identity, so $g$ acts as a scalar on $V$. [F3, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 prove the stated dichotomy. [step 2.1, step 3.1] ∎
