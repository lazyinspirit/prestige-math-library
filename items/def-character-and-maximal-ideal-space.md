---
id: def-character-and-maximal-ideal-space
kind: definition
title: Character and maximal ideal space
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-complex-numbers-form-a-field, def-vector-space, def-linear-map]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Chapter 3 §3.1 and §3.3, printed pp. 54–69 and 80–87"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Chapter 5 §5.5, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Definition

An **associative complex algebra** is a complex vector space $A$
([[def-vector-space]]) equipped with a multiplication $A \times A \to A$,
$(a,b) \mapsto ab$, which is complex-bilinear and associative:
$(\lambda a + \mu b)c = \lambda ac + \mu bc$, $a(\lambda b + \mu c) =
\lambda ab + \mu ac$, and $(ab)c = a(bc)$ for all $a,b,c \in A$ and
$\lambda,\mu \in \mathbb C$. **No multiplicative identity is assumed**, and no
scalar-algebra or real-algebra convention is imported here; all algebras in this
page are complex and the only structure used below is the one just displayed.

A **character** on $A$ is a map $\chi : A \to \mathbb C$ which is **nonzero**,
**complex-linear** ([[def-linear-map]]) and **multiplicative**:

$$\chi(\lambda a + \mu b) = \lambda \chi(a) + \mu \chi(b), \qquad \chi(ab) = \chi(a)\chi(b) \qquad (a,b \in A,\ \lambda,\mu \in \mathbb C).$$

Two things are deliberately *not* part of the definition:

- continuity is **not** assumed; for a unital Banach algebra it is a theorem
  below, and for a commutative Banach algebra it then follows for free;
- preservation of a unit is **not** assumed either. If $A$ happens to have an
  identity $1$, a character is not required to satisfy $\chi(1) = 1$ by
  definition; for a unital Banach algebra this too is proved later on this
  page.

The **character space** of $A$ is

$$\Delta(A) \;:=\; \{\, \chi : \chi \text{ is a character on } A \,\},$$

a set by Separation, since every character is a subset of $A \times \mathbb C$
and $A \times \mathbb C$ is a set. Initially $\Delta(A)$ carries the **topology
of pointwise evaluation**: the coarsest topology for which all the evaluation
maps $e_a : \Delta(A) \to \mathbb C$, $e_a(\chi) := \chi(a)$, are continuous.
Equivalently, a basic neighbourhood of $\chi_0$ is
$\{\chi : |\chi(a_i) - \chi_0(a_i)| < \varepsilon,\ i \le k\}$ for finitely many
$a_i \in A$ and $\varepsilon > 0$. Once characters are known to be bounded
linear functionals they are points of the dual $A^*$, and this topology is
exactly the subspace topology induced by the weak-star topology $\sigma(A^*,A)$
(as proved later on this page); no duality theory is used before that point.
For a nonzero commutative unital Banach algebra, under the Axiom of Choice,
$\Delta(A)$ is also called the **maximal ideal space**: only in that setting
does the later maximal-ideal correspondence identify its points with all
maximal ideals.

## Remarks

- **Why "nonzero" is part of the definition.** The zero map is linear and
  multiplicative and would otherwise be a character of every algebra; excluding
  it is what makes characters the algebraic counterparts of points, and it is
  used already in the first unitality computation.
- **The empty character space is allowed here.** For an algebra with no
  characters at all $\Delta(A) = \varnothing$ is a perfectly good value of the
  definition; compact Hausdorffness and nonemptiness of $\Delta(A)$ are
  theorems requiring a nonzero commutative unital Banach algebra.
- **A character need not exist.** For a general associative complex algebra
  nothing in this definition produces a character, and the existence statements
  below spend the Axiom of Choice precisely there.
