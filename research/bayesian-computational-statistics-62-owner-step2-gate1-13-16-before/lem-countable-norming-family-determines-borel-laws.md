---
id: lem-countable-norming-family-determines-borel-laws
kind: lemma
title: "A countable norming family determines Borel laws"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - lem-rat-embeds-dense
  - thm-rationals-countable
  - thm-product-of-countable
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

[F2] Strictly between any two reals lies a rational; the rationals are countable, and a product of two countable sets is countable [[lem-rat-embeds-dense]] [[thm-rationals-countable]] [[thm-product-of-countable]].

## Proof


**Given:** A separable Banach space $B$, a countable norming family $(\ell_j)$, and Borel probabilities $\mu,\nu$ whose finite-coordinate pushforwards agree.

1.1 For every $x\in B$ and $r>0$, the given norming identity gives the identity $B(x,r)=\bigcup_{\substack{q\in\mathbb Q\\0\le q<r}} \ \bigcap_{j\ge1}\{y:|\ell_j(y-x)|\le q\}.$ If $\|y-x\|<r$, use [F2] to choose rational $q$ between that norm and $r$; conversely, membership in one intersection implies $\|y-x\|\le q<r$. Thus every open ball belongs to $\sigma(\ell_j:j\ge1)$. Fix a countable dense set $D\subseteq B$. The balls $B(d,s)$ with $d\in D$ and positive rational $s$ form a countable family by [F2]. For any open $U$ and $y\in U$, take $a>0$ with $B(y,a)\subseteq U$, choose $d\in D$ with $\|d-y\|<a/4$, and choose rational $s$ with $a/4<s<a/2$ by [F2]. Then $y\in B(d,s)\subseteq B(y,a)\subseteq U$. Thus this family is a base, and every open set is the union of its members contained in that set, a countable union. All those balls are in $\sigma(\ell_j)$ by the first part, so every open set is in that sigma-algebra. Conversely each continuous linear $\ell_j$ is Borel measurable, giving the reverse inclusion; hence it is the Borel sigma-algebra. [given, F2]

2.1 The finite-coordinate cylinder sets form a pi-system generating $\sigma(\ell_j:j\ge1)$. The assumed equality of finite-dimensional pushforwards makes $\mu$ and $\nu$ agree on each such cylinder. The cylinder pi-system contains $B$, and both probabilities assign it mass one; the constant exhaustion by $B$ meets [F1], which gives equality on the generated Borel sigma-algebra. [F1, step 1.1, given] ∎

