---
id: cor-dual-separates-points
kind: corollary
title: "The dual space separates points of a normed space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dual-norms-every-vector]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Corollary 4.16"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Daniel Daners, Introduction to Functional Analysis, Remark 26.6"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
---

## Statement

Let $X$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$. If $x,y \in X$
with $x \ne y$, then there exists $f \in X^*$ such that $f(x) \ne f(y)$.

## Facts & Assumptions

**Given:** A normed space $X$ over $\mathbb{R}$ or $\mathbb{C}$ and two vectors
$x,y \in X$ with $x \ne y$.

[L1] Every nonzero vector admits a norming functional
([[thm-dual-norms-every-vector]]).

## Proof

**Proof technique:** direct.

1.1 Since $x \ne y$, the vector $x-y$ is nonzero. [given]

2.1 By [L1], there exists $f \in X^*$ with $$f(x-y)=\|x-y\|.$$ In particular $f(x-y) \ne 0$. [L1, step 1.1]

3.1 If $f(x)=f(y)$, then linearity would give $f(x-y)=0$, contradicting step 2.1. Therefore $f(x) \ne f(y)$, so the dual space separates $x$ and $y$. [step 2.1, algebra] ∎
