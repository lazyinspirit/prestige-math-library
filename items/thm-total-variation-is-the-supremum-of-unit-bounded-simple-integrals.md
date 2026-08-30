---
id: thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals
kind: theorem
title: "Total variation is the supremum of simple integrals over unit-bounded test functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-complex-conjugate-real-imaginary-part-and-modulus, def-simple-integral-against-a-signed-or-complex-measure, prop-simple-integrals-are-bounded-by-total-variation, def-total-variation-of-a-signed-or-complex-measure]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 12.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Chapter 9A"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $\nu$ be a signed measure or complex measure on $(X,\mathcal A)$ and let
$E\in\mathcal A$ satisfy $|\nu|(E)<+\infty$. Then every complex simple
function $s$ on $(X,\mathcal A)$ with $|s|\le1$ has a defined simple integral
over $E$, and
$$|\nu|(E)=\sup\left\{\left|\int_E s\,d\nu\right|:\ s\text{ is a complex simple function and }|s|\le1\right\}.$$

## Facts & Assumptions

**Given:** A signed measure or complex measure $\nu$ and a measurable set $E$ with $|\nu|(E)<+\infty$.

[L1] Simple integrals are bounded by total variation: $|\int_E s\,d\nu|\le\int_E |s|\,d|\nu|$. ([[prop-simple-integrals-are-bounded-by-total-variation]])

[L2] The simple integral over $E$ is computed from the measurable level-set representation of $s$. ([[def-simple-integral-against-a-signed-or-complex-measure]])

[L3] Every complex number $z\neq0$ has unit-modulus phase $\overline z/|z|$. ([[def-complex-conjugate-real-imaginary-part-and-modulus]])

[L4] The total variation $|\nu|(E)$ is the supremum of countable partition sums $\sum_n |\nu(E_n)|$. ([[def-total-variation-of-a-signed-or-complex-measure]])

## Proof

**Proof technique:** direct.

1.1 Let $s=\sum_{j=1}^m c_j\mathbf 1_{E_j}$ be the canonical disjoint representation of a complex simple function using only its nonzero level sets. Every countable measurable partition of $E_j\cap E$ extends to one of $E$ by adding $E\setminus E_j$, so [L4] gives $|\nu|(E_j\cap E)\le |\nu|(E)<+\infty$ for each $j$. Thus [L1] applies to $F=E$ and gives [L1] $$\left|\int_E s\,d\nu\right|\le \int_E |s|\,d|\nu|\le |\nu|(E).$$ Therefore the displayed supremum is at most $|\nu|(E)$. [L1, L4]

1.2 Fix $\varepsilon>0$. By [L4], choose a countable measurable partition [L3, L4, choose] $E=\bigsqcup_{n\ge0} E_n$ such that $$\sum_{n=0}^\infty |\nu(E_n)|>|\nu|(E)-\varepsilon.$$ Because $|\nu|(E)<+\infty$, every term $|\nu(E_n)|$ is finite. Choose $N$ so that the first $N+1$ terms already satisfy $$\sum_{n=0}^N |\nu(E_n)|>|\nu|(E)-2\varepsilon.$$ For each $0\le n\le N$ with $\nu(E_n)\neq0$, define $c_n:=\overline{\nu(E_n)}/|\nu(E_n)|$, and put $c_n:=0$ when $\nu(E_n)=0$. After deleting the zero-coefficient terms, the simple function $$s:=\sum_{n=0}^N c_n\mathbf 1_{E_n}$$ satisfies $|s|\le1$. [L3, L4, choose]

2.1 Using [L2], [L2, step 1.2] $$\int_E s\,d\nu=\sum_{n=0}^N c_n\nu(E_n)=\sum_{n=0}^N |\nu(E_n)|,$$ so step 1.2 gives $$\left|\int_E s\,d\nu\right|>|\nu|(E)-2\varepsilon.$$ Because $\varepsilon>0$ was arbitrary, the supremum is at least $|\nu|(E)$. [L2, step 1.2]

3.1 Steps 1.1 and 2.1 prove the equality. [step 1.1, step 2.1] ∎
