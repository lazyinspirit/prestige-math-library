---
id: lem-temperley-lieb-critical-standard-modules-are-simple
kind: lemma
title: "Critical complex Temperley–Lieb standard modules are simple"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-temperley-lieb-complex-critical-labels-and-reflection
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - def-temperley-lieb-link-state-standard-modules
  - lem-temperley-lieb-link-state-gram-determinant
  - cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules
  - lem-temperley-lieb-link-state-gram-form-is-invariant
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4, Theorem 4.7 and Corollary 4.8, PDF pp. 20–21: determinant and critical-form nondegeneracy."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §§1–2, printed pp. 9–16: cellular forms, their radicals, and simple cell quotients; the Temperley–Lieb-specific determinant is proved locally."
---

## Statement

Let $q\in\mathbb C^\times$, $\delta=q+q^{-1}$, $n\ge0$, and $0\le p\le\lfloor n/2\rfloor$. Put $t=n-2p$, let $\kappa=\operatorname{ord}(q^2)$, and let $\phi_{n,t}$ be the link-state capping form on $W_{n,t}(\mathbb C,\delta)$. If $(n,p)$ is critical in the sense of [[def-temperley-lieb-complex-critical-labels-and-reflection]], then $\phi_{n,t}$ is nondegenerate and $W_{n,t}(\mathbb C,\delta)$ is simple.

## Facts & Assumptions

**Given:** $q\in\mathbb C^\times$, $\delta=q+q^{-1}$, an allowed $(n,p)$, and the critical-label convention.

[F1] The complex quantum integers satisfy $[r]_q=(q^r-q^{-r})/(q-q^{-1})$ for $q\ne\pm1$, and $[r]_q=rq^{r-1}$ for $q=\pm1$; the recurrence quantum characteristic is distinct from $\kappa$ at $q=\pm1$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

[F2] $W_{n,t}$ has the link-state basis indexed by $p$-arc partial matchings, and $\phi_{n,t}$ is the reflection-and-capping form ([[def-temperley-lieb-link-state-standard-modules]], [[lem-temperley-lieb-link-state-gram-form-is-invariant]]).

[F3] For $d_{n,r}=\binom nr-\binom n{r-1}$ with $\binom n{-1}=0$, its Gram determinant is $\displaystyle\det G_{n,p}=\prod_{j=1}^{p}\left(\frac{[t+1+j]_q}{[j]_q}\right)^{d_{n,p-j}}$, where removable zero-over-zero factors mean their polynomial continuation ([[lem-temperley-lieb-link-state-gram-determinant]]).

[F4] The nonzero cell-form quotient is simple; when the cell form is nondegenerate its radical is zero, so the quotient is the entire standard module ([[cor-temperley-lieb-nonzero-cell-forms-classify-simple-modules]]).

[F5] Criticality means $\kappa<\infty$ and $\kappa\mid(t+1)$; at $\kappa=1$ this includes every allowed label ([[def-temperley-lieb-complex-critical-labels-and-reflection]]).

## Proof

**Proof technique:** Evaluate each determinant factor, including its removable root limit.

1.1 If $\kappa=1$, then $q=\pm1$. By [F1], every positive quantum integer is nonzero, so each factor $[t+1+j]_q/[j]_q$ in [F3] is nonzero. Therefore $\det G_{n,p}\ne0$ in this case. [F1, F3, F5, given, algebra]

1.2 Suppose $\kappa\ge2$. By [F5], there is an integer $m\ge1$ with $t+1=m\kappa$. Fix a root $q_0=q$ and write $\epsilon=q_0^{m\kappa}\in\{1,-1\}$. For any $j$ not divisible by $\kappa$, $[j]_{q_0}\ne0$ and $[m\kappa+j]_{q_0}=\epsilon[j]_{q_0}$, by substituting $q_0^{m\kappa}=q_0^{-m\kappa}=\epsilon$ in the quantum-integer formula. Thus this quotient is nonzero. [F1, F3, F5, given, algebra]

2.1 If $j=s\kappa$ with $s\ge1$, the quotient in [F3] has a removable zero-over-zero. Write nearby parameters as $q=e^u$, with $u_0$ satisfying $e^{\kappa u_0}=\epsilon_0\in\{1,-1\}$. Since $\kappa\ge2$, $q_0\ne\pm1$ and $\sinh u_0\ne0$. From $[a\kappa]_{e^u}=\sinh(a\kappa u)/\sinh u$, the ratio has limit $\lim_{u\to u_0}\frac{[(m+s)\kappa]_{e^u}}{[s\kappa]_{e^u}}=\frac{m+s}{s}(-1)^{mv}\ne0$, where $\kappa u_0=\pi i v$ for an integer $v$; this follows by taking the ratio of the first derivatives of the two vanishing numerators. Also $d(q+q^{-1})/dq=1-q^{-2}\ne0$ at $q_0$, so this is the same removable continuation in $\delta$ used in [F3]. Hence every factor in [F3] has a nonzero value. [F1, F3, step 1.2, algebra]

3.1 The exponents $d_{n,p-j}$ in [F3] are nonnegative integers, and an empty product is $1$. Steps 1.1–2.2 therefore give $\det G_{n,p}\ne0$ for every critical label, so the finite-dimensional form $\phi_{n,t}$ is nondegenerate. [F2, F3, step 1.1, step 2.1, algebra]

4.1 By [F4], a nondegenerate cell form has zero radical and its quotient by that radical is simple. The quotient is $W_{n,t}$ itself, so this standard module is simple. [F2, F4, step 3.1] ∎
