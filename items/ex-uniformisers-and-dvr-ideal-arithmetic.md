---
id: ex-uniformisers-and-dvr-ideal-arithmetic
kind: example
title: "Uniformisers and ideal arithmetic in a DVR"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniformising-parameter, thm-ideals-in-a-dvr]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Remark 8.9"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Discrete valuation rings after Example 20.1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Let $V$ be a discrete valuation ring. If $\pi$ and $\pi'$ are uniformisers,
then $\pi'=u\pi$ for a unit $u\in V^\times$. For all integers $m,n\ge0$,
$$ (\pi^m)+(\pi^n)=(\pi^{\min\{m,n\}}),\qquad (\pi^m)\cap(\pi^n)=(\pi^{\max\{m,n\}}). $$

## Facts & Assumptions

**Given:** A discrete valuation ring $V$ and two uniformisers $\pi,\pi'$.

[F1] A uniformiser generates the maximal ideal of a DVR
([[def-uniformising-parameter]]).

[L1] Every nonzero ideal of a DVR is a power of the maximal ideal
([[thm-ideals-in-a-dvr]]).

## Verification

**Proof technique:** direct.

1.1 By [F1], both $\pi$ and $\pi'$ generate the maximal ideal, so $(\pi)=(\pi')$. Hence $\pi'\in(\pi)$, say $\pi'=u\pi$, and similarly $\pi=v\pi'$. Multiplying gives $\pi=vu\pi$, so $vu=1$ in the domain $V$ and $u$ is a unit. [F1, given, algebra]

2.1 The sum $(\pi^m)+(\pi^n)$ is one of the two comparable ideals $(\pi^m)$ and $(\pi^n)$, namely the larger one, so [L1] makes it $(\pi^{\min\{m,n\}})$. Likewise the intersection is the smaller one, namely $(\pi^{\max\{m,n\}})$. [L1, step 1.1, algebra] ∎
