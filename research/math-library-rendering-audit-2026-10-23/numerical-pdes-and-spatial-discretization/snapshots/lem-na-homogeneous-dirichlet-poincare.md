---
id: lem-na-homogeneous-dirichlet-poincare
kind: lemma
title: "A bounded-domain Poincare inequality for H1-zero fields"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    "def-wkp-zero-as-a-sobolev-closure",
    "def-sobolev-space-wkp-and-its-norm",
    "thm-holder-inequality-for-integrals",
    "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces",
    "def-countable-choice",
    "cor-cauchy-schwarz-inequality-for-l-two"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 53–54 (complete course
        notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.1–53.4: weak Stokes problem, divergence lift and
        inf-sup; Chapter 54, §§54.1–54.2: Fortin criteria and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element
        Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1 and
        8.7.1."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$ be bounded and open, and suppose its first coordinate projection is contained in an interval $(a,b)$ of width $L=b-a$. For every real $v\in H^1_0(D)$,
$$\|v\|_{L^2(D)}\le L\|\partial_1v\|_{L^2(D)}\le L\|\nabla v\|_{L^2(D)}.$$

## Facts & Assumptions

**Given:** A bounded open $D\subset(a,b)\times\mathbb R^{d-1}$ and $v\in H^1_0(D)$, where $H^1_0$ is the $H^1$-closure of $C_c^\infty(D)$.

[A1] Countable Choice permits selecting the approximating test functions from the H0 closure at each n. ([[def-countable-choice]])

[F1] $H^1_0(D)$ is the closure of compactly supported smooth functions in the $W^{1,2}$ norm. ([[def-wkp-zero-as-a-sobolev-closure]])

[F2] The $W^{1,2}$ norm includes the $L^2$ norm and the $L^2$ norms of all first weak derivatives. ([[def-sobolev-space-wkp-and-its-norm]])

[F3] Fubini permits iterated integration of the nonnegative integrand on the bounded coordinate slab. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F4] The L2 Cauchy--Schwarz inequality gives $\int|fg|\le\|f\|_2\|g\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 First take $v\in C_c^\infty(D)$ and extend it by zero to $(a,b)\times\mathbb R^{d-1}$. For every $x'\in\mathbb R^{d-1}$ and $x_1\in(a,b)$, the fundamental theorem of calculus gives $v(x_1,x')=\int_a^{x_1}\partial_1v(t,x')\,dt$. Cauchy--Schwarz yields $|v(x_1,x')|^2\le L\int_a^b|\partial_1v(t,x')|^2dt$. [given, F1, F4]

2.1 Integrating the last inequality over $x_1$ gives a second factor $L$; integrating over $x'$ and using the zero extension proves $\|v\|_2^2\le L^2\|\partial_1v\|_2^2$. [F2, F3, step 1.1]

3.1 For general $v\in H^1_0(D)$, [A1, F1] supplies a sequence $v_n\in C_c^\infty(D)$ converging to $v$ in $W^{1,2}$. The two norms in step 2.1 converge by [F2], so passing to the limit gives the same inequality for $v$. Finally $|\partial_1v|\le|\nabla v|$ almost everywhere. [A1, F1, F2, F3, algebra, step 2.1] ∎
