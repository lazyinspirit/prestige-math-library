---
id: thm-measures-on-finite-sigma-algebras-are-atomic
kind: theorem
title: "A measure on a finite sigma-algebra is a finite weighted sum over its atoms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-measure, def-dirac-measure, prop-dirac-measure-is-a-probability-measure, def-nonnegative-weighted-sum-of-measures, def-nonnegative-extended-series, def-finite-sum, def-countable, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.21"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal A$ be a finite sigma-algebra on $X$. Its **atoms** are the nonempty measurable sets containing no proper nonempty measurable subset. The atoms form a finite partition of $X$, every measurable set is the union of the atoms it contains, and every measure $\mu$ on $(X,\mathcal A)$ has the representation

$$\mu=\sum_{C\text{ an atom}}\mu(C)\,\delta_{x_C},$$

where $x_C\in C$ is chosen once for each atom and scalar multiplication uses the explicit infinite-coefficient branch. If $X=\varnothing$, there are no atoms and the representation is the empty weighted sum.

## Facts & Assumptions

**Given:** A finite sigma-algebra $\mathcal A$ on $X$ and a measure $\mu$ on it.

[L1] A measure is finitely additive on disjoint measurable families ([[def-measure]]).

[L2] A Dirac measure at $x$ has value $1$ exactly on sets containing $x$ ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]]).

[L3] A coefficient $+\infty$ times a measure is $0$ on its null sets and $+\infty$ elsewhere; finite and empty weighted sums are defined pointwise ([[def-nonnegative-weighted-sum-of-measures]], [[def-nonnegative-extended-series]], [[def-finite-sum]]).

[L4] A finite set is equinumerous with some natural number ([[def-countable]]), and a natural-number-indexed finite family of nonempty sets has a choice function in ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in X$ define $C_x:=\bigcap\{A\in\mathcal A:x\in A\}$. The intersected family is nonempty because it contains $X$, and it is finite, so $C_x\in\mathcal A$ and $x\in C_x$. [given]

1.2 Enumerate the finite family of atoms by a natural number. Applying finite choice to that enumeration selects one representative $x_C\in C$ for every atom; when $X=\varnothing$, the family and the choice function are empty. [given, L4, choose]

2.1 If $y\in C_x$, then $x$ and $y$ belong to exactly the same members of $\mathcal A$: otherwise the complement of a measurable set separating them would contradict $y\in C_x$. Hence $C_y=C_x$, while $y\notin C_x$ gives $C_y\cap C_x=\varnothing$; the distinct $C_x$ form a finite measurable partition of $X$. [step 1.1]

3.1 Every $C_x$ is an atom, and if $A\in\mathcal A$ and $x\in A$, then $C_x\subseteq A$ by definition; conversely, if $C$ is an atom and $x\in C$, then the nonempty measurable set $C_x\subseteq C$ forces $C_x=C$. Consequently every atom is one of the partition blocks and every measurable $A$ is the disjoint union of the atoms it contains. [step 1.1, step 2.1]

4.1 For measurable $A$, finite additivity and step 3.1 give $\mu(A)=\sum_{C\subseteq A}\mu(C)$. [step 3.1, L1, L3]

4.2 For each atom $C$, the term $\mu(C)\delta_{x_C}(A)$ equals $\mu(C)$ when $C\subseteq A$ and $0$ otherwise; this remains true when $\mu(C)=+\infty$ because [L3] uses the null/non-null infinite branch. [step 3.1, step 1.2, L2, L3]

5.1 Summing step 4.2 over the atoms and comparing with step 4.1 proves the representation. For $X=\varnothing$ both sides are the zero measure and the sum is empty. [step 4.1, step 4.2, L3] ∎
