---
id: lem-finite-measure-uniqueness-on-a-pi-system
kind: lemma
title: "Finite measures agreeing on a generating pi-system and on the whole space are equal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pi-system, thm-dynkin-pi-lambda, def-measure, def-generated-sigma-algebra, thm-continuity-from-below-for-measures, prop-measure-of-a-set-difference]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Pollard, A User's Guide to Measure Theoretic Probability, §10"
      url: "https://web.archive.org/web/20210415110203if_/http://www.stat.yale.edu/~pollard/Courses/600.spring2011/Handouts/Extract-from-UGMTP.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal P$ be a pi-system on $X$ and let $\mathcal A=\sigma_X(\mathcal P)$. If finite measures $\mu$ and $\nu$ on $(X,\mathcal A)$ agree on $\mathcal P$ and satisfy $\mu(X)=\nu(X)$, then $\mu=\nu$ on $\mathcal A$.

The total-mass equality is separate because this library's pi-system convention does not require $X\in\mathcal P$.

## Facts & Assumptions

**Given:** A pi-system $\mathcal P$ generating $\mathcal A$, and finite measures $\mu,\nu$ agreeing on $\mathcal P$ and on $X$.

[L1] A pi-system is a nonempty family closed under binary intersections and need not contain $X$ ([[def-pi-system]]).

[L2] If a lambda-system contains a pi-system $\mathcal P$, then it contains $\sigma_X(\mathcal P)$ ([[thm-dynkin-pi-lambda]]).

[L3] Measures are finitely and countably additive ([[def-measure]]) and continuous from below ([[thm-continuity-from-below-for-measures]]).

[L4] For finite measures, the value on a relative difference is obtained by subtracting the smaller-set value ([[prop-measure-of-a-set-difference]]).

[L5] The generated sigma-algebra is the intersection of all sigma-algebras containing the generating family ([[def-generated-sigma-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal D:=\{A\in\mathcal A:\mu(A)=\nu(A)\}$. Then $X\in\mathcal D$ by the total-mass hypothesis and $\mathcal P\subseteq\mathcal D$ by the agreement hypothesis. [given, L1]

1.2 If $A\subseteq B$ lie in $\mathcal D$, finiteness and [L4] give $\mu(B\setminus A)=\mu(B)-\mu(A)=\nu(B)-\nu(A)=\nu(B\setminus A)$, so $B\setminus A\in\mathcal D$. [given, L4, algebra]

1.3 If $A_n\uparrow A$ and each $A_n\in\mathcal D$, continuity from below gives $\mu(A)=\sup_n\mu(A_n)=\sup_n\nu(A_n)=\nu(A)$, so $A\in\mathcal D$. [given, L3]

2.1 Steps 1.1, 1.2 and 1.3 show that $\mathcal D$ is a lambda-system containing $\mathcal P$. [step 1.1, step 1.2, step 1.3]

3.1 Dynkin's theorem gives $\mathcal A=\sigma_X(\mathcal P)\subseteq\mathcal D$, so $\mu(A)=\nu(A)$ for every $A\in\mathcal A$. [step 2.1, L2, L5] ∎

