---
id: lem-full-rank-integer-torus-maps-preserve-lebesgue-measure
kind: lemma
title: "A full-rank integer torus map preserves normalized Lebesgue measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-countable-choice
  - cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Victor Beresnevich and Sanju Velani, Classical Metric Diophantine Approximation Revisited: the Khintchine–Groshev Theorem, Lemma 3"
      url: "https://arxiv.org/pdf/0811.0809v3"
    - title: "Dani, Laurent, and Nogueira, Multi-dimensional metric approximation by primitive points, §5.2"
      url: "https://arxiv.org/pdf/1310.5535v2"
---

## Statement

Assume the Axiom of Countable Choice. For $r\ge1$, write $\mathbb T^r=\mathbb R^r/\mathbb Z^r$ and equip it with the probability measure obtained from Lebesgue measure on the unique representatives in $[0,1)^r$. If $A\in M_r(\mathbb Z)$ has nonzero determinant, then the map $T_A:\mathbb T^r\to\mathbb T^r$, $[x]\mapsto[Ax]$, is well defined and measure preserving: for every Borel set $E\subseteq\mathbb T^r$, the normalized Lebesgue measure of $T_A^{-1}(E)$ equals that of $E$.

## Statement references

[Beresnevich and Velani, *Classical Metric Diophantine Approximation Revisited*, Lemma 3](https://arxiv.org/pdf/0811.0809v3)

[Dani, Laurent, and Nogueira, *Multi-dimensional metric approximation by primitive points*, §5.2](https://arxiv.org/pdf/1310.5535v2)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, an integer $r\ge1$, an integer matrix $A\in M_r(\mathbb Z)$ with $\det A\ne0$, and a Borel set $E\subseteq\mathbb T^r$.

[A1] Countable Choice supplies the complete countably additive Lebesgue measure used on each fundamental cube. ([[def-countable-choice]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F1] For $L=A\mathbb Z^r$, the quotient $\mathbb Z^r/L$ has exactly $D:=|\det A|$ elements. ([[cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant]])

[F2] An invertible linear map scales Lebesgue measure by the absolute value of its determinant; translations preserve Lebesgue measure. ([[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[F3] The half-open unit cube $[0,1)^r$ is a Borel fundamental cube of Lebesgue measure $1$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Proof




1.1 The integer entries of $A$ make $T_A$ independent of the representative $x$: replacing $x$ by $x+z$ with $z\in\mathbb Z^r$ changes $Ax$ by $Az\in\mathbb Z^r$. The real invertibility of $A$ makes $T_A$ surjective, since $A^{-1}y$ is a preimage of any representative $y\in\mathbb R^r$. [given, construct, algebra]

1.2 Let $L=A\mathbb Z^r$ and choose one representative from each of the finite quotient classes in [F1], forming a set $C\subseteq\mathbb Z^r$ with $|C|=D$. The half-open parallelepiped $P=A[0,1)^r$ is a fundamental domain for $L$: every $x\in\mathbb R^r$ has $A^{-1}x=z+u$ with $z\in\mathbb Z^r$, $u\in[0,1)^r$, so $x=Az+Au$; uniqueness follows because $u-u'\in\mathbb Z^r$ and $u,u'\in[0,1)^r$ force $u=u'$. The union $F=\bigcup_{c\in C}(c+[0,1)^r)$ is also a fundamental domain for $L$, since $\mathbb Z^r$ is the disjoint union of the cosets $c+L$. [given, F1, F3, construct]

2.1 The set $F$ is a disjoint union of $D$ translates of $[0,1)^r$, so [F2]–[F3] give $\lambda(F)=D$. By the change-of-variables formula in [F2], $\lambda(P)=|\det A|\lambda([0,1)^r)=D$. [step 1.2, F1, F2, F3]

2.2 Let $f$ be the indicator of the $\mathbb Z^r$-periodic lift $\widetilde E=\bigcup_{z\in\mathbb Z^r}(E+z)$. Since $L\subseteq\mathbb Z^r$, $f$ is also $L$-periodic. Integrals of an $L$-periodic Borel function over two fundamental domains agree: partition the first domain by its intersections with translates of the second, translate each piece into the second domain, and use periodicity and translation invariance [F2]. Applying this to $P$ and $F$ gives $\int_P f=\int_F f$. [step 1.2, F2, construct]

3.1 On $F=\bigcup_{c\in C}(c+[0,1)^r)$, the function $f$ has the same integral on each translated cube, so $\int_F f=D\lambda(E)$ by [F3]. Therefore $\int_P f=D\lambda(E)$ by step 2.2. [step 2.1, step 2.2, F2, F3]

4.1 The change of variables $u=Ax$ and [F2] give $\displaystyle \lambda\{x\in[0,1)^r:T_A([x])\in E\}=D^{-1}\int_P f(u)\,du=\lambda(E).$ Thus $T_A^{-1}(E)$ has the same normalized measure as $E$, which proves the claim. [step 3.1, F1, F2] ∎
