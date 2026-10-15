---
id: lem-countable-norming-family-determines-borel-laws
kind: lemma
title: "A countable norming family determines Borel laws"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-borel-probability-law-on-a-polish-space
  - def-pi-system
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "M. Hairer, An Introduction to Stochastic PDEs"
      url: "https://www.hairer.org/notes/SPDEs_Course.pdf"
      locator: "Proposition 4.11: a countable separating family determines the Borel Gaussian law."
    - title: "A. Lunardi, M. Miranda, and D. Pallara, Infinite Dimensional Analysis"
      url: "https://www.mathematik.tu-darmstadt.de/media/analysis/lehrmaterial_anapde/hallerd/Lectures.pdf"
      locator: "Sections 2.1 and 3.1: Borel sigma-algebras and Gaussian measures on separable Banach spaces."
---

## Statement

Let $B$ be a separable Banach space, and let $(\ell_j)_{j\ge1}\subseteq B^*$ satisfy the norming identity $\|x\|=\sup_{j\ge1}|\ell_j(x)|$ for every $x\in B$. If Borel probabilities $\mu,\nu$ on $B$ have equal finite-dimensional pushforwards under every finite subfamily of $(\ell_j)$, then $\mu=\nu$.
## Facts & Assumptions

[F1] Measures agreeing on a generating pi-system containing the whole space, with equal finite total masses, agree on the generated sigma-algebra ([[thm-measure-uniqueness-on-a-sigma-finite-pi-system]]). Here the full space is itself a finite-coordinate cylinder and both probabilities have mass one.

## Proof


**Given:** A separable Banach space $B$, a countable norming family $(\ell_j)$, and Borel probabilities $\mu,\nu$ whose finite-coordinate pushforwards agree.

1.1 For every $x\in B$ and $r>0$, the given norming identity gives the identity $B(x,r)=\bigcup_{\substack{q\in\mathbb Q\\0\le q<r}} \ \bigcap_{j\ge1}\{y:|\ell_j(y-x)|\le q\}.$ If $\|y-x\|<r$, choose rational $q$ between that norm and $r$; conversely, membership in one intersection implies $\|y-x\|\le q<r$. Thus every open ball belongs to $\sigma(\ell_j:j\ge1)$. A separable metric space has a countable base of balls, so this sigma-algebra is the Borel sigma-algebra. [given]

2.1 The finite-coordinate cylinder sets form a pi-system generating $\sigma(\ell_j:j\ge1)$. The assumed equality of finite-dimensional pushforwards makes $\mu$ and $\nu$ agree on each such cylinder. The cylinder pi-system contains $B$, and both probabilities assign it mass one; the constant exhaustion by $B$ meets [F1], which gives equality on the generated Borel sigma-algebra. [F1, step 1.1, given] ∎

