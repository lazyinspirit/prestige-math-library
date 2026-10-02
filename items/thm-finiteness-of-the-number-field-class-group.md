---
id: thm-finiteness-of-the-number-field-class-group
kind: theorem
title: "Finiteness of the number-field class group"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-minkowski-bound-for-ideal-classes
  - lem-finitely-many-number-field-ideals-of-bounded-norm
  - def-ideal-class-group-of-a-domain
  - lem-ideal-class-group-well-defined
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Theorem 4.4, p.71."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.1 Theorem 7.1.2, pp.77-82."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every number field
$K$, the ideal class group $\operatorname{Cl}(\mathcal O_K)$
([[def-ideal-class-group-of-a-domain]]) is finite.

## Facts & Assumptions

**Given:** The Axiom of Choice and a number field $K$ of degree $n$ and
signature $(r_1,r_2)$, with Minkowski constant
$M_K=(4/\pi)^{r_2}(n!/n^n)\sqrt{|d_K|}$.

[F1] Minkowski bound: every class in $\operatorname{Cl}(\mathcal O_K)$
contains an integral ideal $\mathfrak b\subseteq\mathcal O_K$ with
$N\mathfrak b\le M_K$
([[thm-minkowski-bound-for-ideal-classes]]).

[F2] For every real $B\ge1$ there are only finitely many nonzero integral
$\mathcal O_K$-ideals $\mathfrak b$ with $N\mathfrak b\le B$
([[lem-finitely-many-number-field-ideals-of-bounded-norm]]).

[F3] $\operatorname{Cl}(\mathcal O_K)$ is the quotient of the group of
nonzero fractional ideals by the subgroup of nonzero principal fractional
ideals, and multiplication descends to a well-defined product on it; in
particular there is a canonical class map $\mathfrak b\mapsto[\mathfrak b]$
from nonzero integral ideals to $\operatorname{Cl}(\mathcal O_K)$
([[def-ideal-class-group-of-a-domain]],
[[lem-ideal-class-group-well-defined]]).

## Proof

1.1 Put $B:=\max\{M_K,1\}\ge1$; by [F2] the set $\mathcal S$ of nonzero integral ideals $\mathfrak b\subseteq\mathcal O_K$ with $N\mathfrak b\le B$ is finite. [F2, given]

2.1 $\mathcal S$ contains $\mathcal O_K$ itself, of norm $1\le B$, but only its finiteness is used below. [F2, step 1.1]

2.2 By [F3] let $\varphi:\mathcal S\to\operatorname{Cl}(\mathcal O_K)$ be the class map $\varphi(\mathfrak b)=[\mathfrak b]$. [F3, step 1.1]

3.1 The map $\varphi$ is surjective: for any class $[J]\in\operatorname{Cl}(\mathcal O_K)$, [F1] supplies an integral ideal $\mathfrak b$ with $[\mathfrak b]=[J]$ and $N\mathfrak b\le M_K\le B$, so $\mathfrak b\in\mathcal S$ and $\varphi(\mathfrak b)=[J]$. [F1, step 1.1, step 2.2]

4.1 A set admitting a surjection from the finite set $\mathcal S$ is finite, so $\operatorname{Cl}(\mathcal O_K)$ is finite. [step 1.1, step 3.1] ∎

## Remarks

The proof is a pure surjectivity argument: finiteness of the class group
follows from the bound on representatives and the finiteness of ideals of
bounded norm, with no further structure of the group used. The Choice
assumption is inherited from the Minkowski bound route; the finiteness of
ideals of bounded norm itself is choice-free. The set $\mathcal S$ is
explicit in terms of $\mathcal O_K$, the signature, and $|d_K|$ through
$M_K$.
