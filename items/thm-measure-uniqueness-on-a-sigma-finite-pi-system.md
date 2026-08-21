---
id: thm-measure-uniqueness-on-a-sigma-finite-pi-system
kind: theorem
title: "Measures agreeing on a generating pi-system are equal under an increasing finite-measure exhaustion from that pi-system"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-measure-uniqueness-on-a-pi-system, thm-continuity-from-below-for-measures, def-finite-sigma-finite-and-semifinite-measures, def-pi-system, prop-restriction-is-a-measure]
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

Let $\mathcal P$ be a pi-system on $X$ generating $\mathcal A$, and let $\mu,\nu$ be measures on $(X,\mathcal A)$ that agree on $\mathcal P$. Suppose there is an increasing sequence $(P_n)$ in $\mathcal P$ with

$$X=\bigcup_nP_n,\qquad \mu(P_n)=\nu(P_n)<+\infty\quad(n\in\mathbb N).$$

Then $\mu=\nu$ on $\mathcal A$.

## Facts & Assumptions

**Given:** Measures $\mu,\nu$, a generating pi-system $\mathcal P$, and an increasing finite-measure exhaustion $(P_n)$ as in the Statement.

[L1] Finite measures agreeing on a generating pi-system and on the whole space are equal ([[lem-finite-measure-uniqueness-on-a-pi-system]]).

[L2] Measures are continuous from below ([[thm-continuity-from-below-for-measures]]).

[L3] A pi-system is closed under binary intersections ([[def-pi-system]]).

[L4] For a measurable $P_n$, the set function $A\mapsto\mu(A\cap P_n)$ is a measure on the original sigma-algebra ([[prop-restriction-is-a-measure]]).

## Proof

**Proof technique:** direct.

1.1 Fix $n$ and define $\mu_n(A):=\mu(A\cap P_n)$ and $\nu_n(A):=\nu(A\cap P_n)$ on $\mathcal A$. By [L4] these are measures, and their total masses are the common finite value $\mu(P_n)=\nu(P_n)$. [given, L4]

1.2 If $Q\in\mathcal P$, then $Q\cap P_n\in\mathcal P$ by [L3], so $\mu_n(Q)=\mu(Q\cap P_n)=\nu(Q\cap P_n)=\nu_n(Q)$. [given, L3]

2.1 The finite uniqueness lemma applied to steps 1.1 and 1.2 gives $\mu(A\cap P_n)=\nu(A\cap P_n)$ for every $A\in\mathcal A$ and every $n$. [step 1.1, step 1.2, L1]

3.1 For fixed $A$, the sets $A\cap P_n$ increase to $A$; continuity from below and step 2.1 give $\mu(A)=\sup_n\mu(A\cap P_n)=\sup_n\nu(A\cap P_n)=\nu(A)$. Thus the measures agree everywhere. [step 2.1, L2] ∎
