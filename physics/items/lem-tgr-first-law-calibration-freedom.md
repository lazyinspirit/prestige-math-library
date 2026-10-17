---
id: lem-tgr-first-law-calibration-freedom
kind: lemma
title: Classical first-law product leaves entropy-temperature calibration free
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Pietro Benetti Genolini, Introduction to black hole thermodynamics, 78-page lecture notes, §§1.3 and 2.1, arXiv:2512.24929v1"
      url: https://arxiv.org/html/2512.24929v1
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6, §§2–3, arXiv:gr-qc/9912119v2"
      url: https://arxiv.org/html/gr-qc/9912119v2
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $X$ be a nonempty connected smooth manifold, let $E,A,\kappa\in C^\infty(X,\mathbb R)$, and let $C>0$ be a constant with $\kappa(x)>0$ for every $x\in X$. Here $dE$ and $dA$ are the differential one-forms of the indicated functions, and equality of one-forms means pointwise equality on $X$. Assume the classical first-law product identity
$$dE=C\kappa\,dA.$$
For every constant $b>0$ and offset $s_*\in\mathbb R$, set $T_b:=b\kappa$ and $S_{b,s_*}:=(C/b)A+s_*$. Then $T_b dS_{b,s_*}=dE$. Distinct positive $b$ give distinct functions $T_b$, and changing $s_*$ changes $S_{b,s_*}$ without changing its differential. Thus this product identity alone does not determine the temperature scale or the absolute entropy offset.

The names $T_b$ and $S_{b,s_*}$ denote real-valued functions here; no operational temperature or physical entropy is assumed. If the symbols carry dimensions, consistency requires $[T]=[b][\kappa]$, $[S]=[C][A]/[b]$, and $[E]=[T][S]$. No particular unit system is used.

## Facts & Assumptions

**Given:** A nonempty connected smooth manifold $X$, smooth real-valued functions $E,A,\kappa$, a constant $C>0$, pointwise $\kappa>0$, and the one-form identity $dE=C\kappa\,dA$.

[A1] $X$ is nonempty and connected, $E,A,\kappa\in C^\infty(X,\mathbb R)$, $C>0$ is constant, and $\kappa(x)>0$ for every $x\in X$.

[A2] The assumed one-form identity is $dE=C\kappa\,dA$ on $X$.

## Proof

1.1 For any fixed constants $b>0$ and $s_*\in\mathbb R$, the function $S_{b,s_*}=(C/b)A+s_*$ is smooth and its differential is $dS_{b,s_*}=(C/b)dA$, since $C/b$ is constant and $d(s_*)=0$. [given, A1, algebra]

2.1 Multiplication by $T_b=b\kappa$ gives $T_b dS_{b,s_*}=(b\kappa)(C/b)dA=C\kappa dA=dE$, using $b>0$ and [A2]. [given, A2, step 1.1, algebra]

3.1 If $b_1\ne b_2$, then for every $x\in X$, $T_{b_1}(x)-T_{b_2}(x)=(b_1-b_2)\kappa(x)\ne0$ by [A1]; hence the temperature functions differ. For fixed $b$, offsets $s_{*,1}\ne s_{*,2}$ give $S_{b,s_{*,1}}-S_{b,s_{*,2}}=s_{*,1}-s_{*,2}\ne0$, while step 1.1 gives the same differential and step 2.1 gives the same product identity. The factorization and its offset are therefore not uniquely determined. [given, A1, step 1.1, step 2.1, algebra] ∎

## Remarks

This is only a mathematical factorization result. It does not assert that every pair $(T_b,S_{b,s_*})$ describes measured thermodynamic quantities or derive a quantum calibration. The cited treatments distinguish the classical black-hole-mechanics identity from the additional quantum calculation that fixes a Hawking-temperature/entropy normalization. Any application with charge, angular momentum, or other work terms must retain those terms and its stated restrictions.
