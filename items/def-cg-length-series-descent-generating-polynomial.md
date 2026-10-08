---
id: def-cg-length-series-descent-generating-polynomial
kind: definition
title: "Length generating series, descent-class series, spherical subsets, and the multivariate descent polynomial"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 7
deps: [def-cg-parabolic-quotient-and-two-sided-minima, def-finite-cardinality, def-formal-power-series-and-coefficient-extraction, def-hh-coxeter-matrix-word-group-and-length, def-multivariate-polynomial-ring-by-iteration, thm-formal-power-series-unit-criterion, thm-product-rule]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "A. Björner and F. Brenti, Combinatorics of Coxeter Groups, GTM 231 (class-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 7.1, printed pp. 201-203: the definition $A(q)=\\sum_{w\\in A}q^{\\ell(w)}$ of the Poincare series, the interval convention $D^J_I=\\{w:I\\subseteq D_R(w)\\subseteq J\\}$, and Proposition 7.1.3's inclusion-exclusion formula. The finite-coefficient argument is given locally here."
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups (author manuscript of the book)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 17.1, printed pp. 315-316: equations (17.3)-(17.4) define the growth series $W(\\mathbf t)=\\sum_{w\\in W}t_w$ and its restriction to subsets; the text notes that $W_T(\\mathbf t)$ is a polynomial when $T$ is spherical."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $(W,S)$ be a Coxeter system with $S$ finite, presented group $W$, length function $\ell$ and standard parabolic subgroups $W_I=\langle s:s\in I\rangle$ ([[def-hh-coxeter-matrix-word-group-and-length]]), and let $D_L(w)=\{s\in S:\ell(sw)<\ell(w)\}$ and $D_R(w)=\{s\in S:\ell(ws)<\ell(w)\}$ be the descent sets with the conventions fixed in [[def-cg-parabolic-quotient-and-two-sided-minima]] (2).

**(1) Length generating series.** Let $A\subseteq W$. The **length generating series** (also **Poincare series**) of $A$ is
$$P_A(t):=\sum_{w\in A}t^{\ell(w)}\in\mathbb Z\llbracket t\rrbracket$$
([[def-formal-power-series-and-coefficient-extraction]]). It is well defined: for every $n\in\mathbb N$ the fiber $\{w\in W:\ell(w)=n\}$ is finite. Evaluation of the $n$-letter words gives a map $S^n\to W$, and each element of the fiber is the value of one of its reduced words; $S^n$ is finite by [[thm-product-rule]]. Hence $[t^n]P_A=|\{w\in A:\ell(w)=n\}|$ is the cardinality ([[def-finite-cardinality]]) of a finite set, viewed as an integer. This includes $S=\emptyset$: the length-zero fiber is $\{1\}$ and every positive-length fiber is empty. If $1\in A$ then $P_A(0)=1$ and $P_A(t)$ is a unit of $\mathbb Z\llbracket t\rrbracket$ with a recursively determined formal inverse ([[thm-formal-power-series-unit-criterion]]); if $1\notin A$ then $P_A(0)=0$ and $P_A(t)$ is not a unit. Thus $P_A(t)$ is a unit exactly when $1\in A$. No convergence, radius of convergence or evaluation at a real number is asserted.

**(2) Spherical subsets and descent-class series.** A subset $I\subseteq S$ is **spherical** when the standard parabolic $W_I$ is finite. For $I\subseteq J\subseteq S$ the **descent-class series** is
$$D^J_I(t):=\sum_{\substack{w\in W\\ I\subseteq D_R(w)\subseteq J}}t^{\ell(w)}\in\mathbb Z\llbracket t\rrbracket.$$

This series is well defined coefficientwise because its length-$n$ summation set is a subset of the finite length-$n$ fiber in (1).

**(3) Multivariate descent polynomial (finite $W$ only).** For finite $W$ define the **marked multivariate descent polynomial**
$$\widehat W(\mathbf x,\mathbf y,t):=\sum_{w\in W}t^{\ell(w)}\prod_{s\in D_R(w)}x_s\prod_{s\in S\setminus D_R(w)}y_s\in\mathbb Z[x_s,y_s:s\in S][t]$$
([[def-multivariate-polynomial-ring-by-iteration]]). This is a polynomial because the sum is finite. Setting every $y_s=1$ recovers the usual descent polynomial $\sum_{w\in W}t^{\ell(w)}\prod_{s\in D_R(w)}x_s$. For $I\subseteq J\subseteq S$, substitute $x_s=1,y_s=0$ for $s\in I$, $x_s=y_s=1$ for $s\in J\setminus I$, and $x_s=0,y_s=1$ for $s\notin J$. A term survives exactly when $I\subseteq D_R(w)\subseteq J$, and then its descent/non-descent factors all equal $1$; hence this evaluation is $D^J_I(t)$, also a polynomial. This includes $I=\emptyset,J=S$ (the full series $P_W$) and $I=J$ (the exact descent set $I$).

**(4) Conventions and limits.** $P_\emptyset=0$ and $P_{\{1\}}=1$. For infinite $S$ no scalar Poincare series is defined here; finite $S$ is the standing hypothesis that ensures the finite-coefficient argument in (1). This definition makes no assertion that $P_A$ is rational, that $W^J$ has a length-additive interpretation, that $D^J_I(t)$ has the inclusion-exclusion expansion, or that $W_{D_R(w)}$ is finite; those are separate results, not part of the definitions above. No choice principle is used.
