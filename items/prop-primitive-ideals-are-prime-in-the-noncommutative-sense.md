---
id: prop-primitive-ideals-are-prime-in-the-noncommutative-sense
kind: proposition
title: "Primitive ideals are prime in the noncommutative sense"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-primitive-ideal-of-an-enveloping-algebra, def-annihilator-ideal-of-a-lie-algebra-module, def-simple-module, def-sum-and-product-of-ideals, thm-sum-and-product-of-ideals-are-ideals, def-left-right-and-two-sided-ideal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Representations of Lie Groups (18.757, MIT OCW 2023 full notes)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 25.1, Definition 25.1 and the proof after Definition 25.2, printed pp.123-124"
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 2.1, printed pp.6-7"
---

## Statement

Let $I$ be a primitive ideal of $U(\mathfrak g)$ and let $A,B$ be two-sided
ideals of $U(\mathfrak g)$ with $AB\subseteq I$. Then $A\subseteq I$ or
$B\subseteq I$. The claim holds for every complex Lie algebra $\mathfrak g$,
and equivalently the quotient ring $U(\mathfrak g)/I$ is prime.

## Facts & Assumptions

**Given:** A complex Lie algebra $\mathfrak g$, a primitive ideal $I$, a simple left $U(\mathfrak g)$-module $M$ with $I=\operatorname{Ann}_{U(\mathfrak g)}(M)$, and two-sided ideals $A,B\mathrel{\trianglelefteq}U(\mathfrak g)$ with $AB\subseteq I$.

[F1] $I$ is the annihilator of the simple module $M$; the annihilator of a module is a two-sided ideal ([[def-primitive-ideal-of-an-enveloping-algebra]], [[def-annihilator-ideal-of-a-lie-algebra-module]]).

[F2] The product $AB$ consists of finite sums $\sum_ka_kb_k$ and is a two-sided ideal ([[def-sum-and-product-of-ideals]], [[thm-sum-and-product-of-ideals-are-ideals]]). For an ideal $C$ and submodule $N$, write $CN$ for the finite sums $\sum_k c_kn_k$; these form a submodule since $u(c_kn_k)=(uc_k)n_k$ and $uc_k\in C$ ([[def-left-right-and-two-sided-ideal]]). Distributing finite sums and using associativity gives $A(BM)=(AB)M$.

[F3] $M$ is nonzero and its only submodules are $0$ and $M$; in particular a submodule $N\subseteq M$ with $N\ne0$ equals $M$ ([[def-simple-module]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $B\not\subseteq I$, i.e. $B\not\subseteq\operatorname{Ann}_{U(\mathfrak g)}(M)$. Then some $b\in B$ has $bM\ne0$, and $BM$ is a nonzero submodule of $M$: for $u\in U(\mathfrak g)$, one has $u\sum_kb_km_k=\sum_k(ub_k)m_k\in BM$ because $ub_k\in B$. By [F3], $BM=M$. [F1, F2, F3, given]

2.1 Using the associativity of the action and the containment $AB\subseteq I$: $AM=A(BM)=(AB)M\subseteq IM=0$, so every $a\in A$ annihilates $M$ and therefore $A\subseteq\operatorname{Ann}_{U(\mathfrak g)}(M)=I$. [step 1.1, F1, F2, algebra]

3.1 The argument shows that $B\not\subseteq I$ forces $A\subseteq I$; contrapositively, if $A\not\subseteq I$ then $B\subseteq I$. Hence $A\subseteq I$ or $B\subseteq I$, and no finite-dimensionality of $\mathfrak g$ was used. Passing to $U(\mathfrak g)/I$, two-sided ideals of the quotient correspond to two-sided ideals of $U(\mathfrak g)$ containing $I$, and the product condition becomes $\bar A\bar B=0$; the displayed alternative is exactly the primeness of $U(\mathfrak g)/I$. [step 1.1, step 2.1, F2, algebra] ∎
