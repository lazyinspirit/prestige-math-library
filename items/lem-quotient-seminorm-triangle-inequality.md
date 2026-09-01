---
id: lem-quotient-seminorm-triangle-inequality
kind: lemma
title: "The quotient seminorm satisfies the triangle inequality"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-seminorm,
       lem-quotient-seminorm-is-representative-independent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Statement

Let $X$ be a normed space and let $M \le X$. Then for all $x,y \in X$,

$$\|(x+y)+M\|_{X/M} \le \|x+M\|_{X/M} + \|y+M\|_{X/M}.$$

## Facts & Assumptions

**Given:** A normed space $X$, a linear subspace $M \le X$, vectors $x,y \in X$,
and a real $\varepsilon > 0$.

[L1] The quotient seminorm is
$\|x+M\|_{X/M} = \inf_{m \in M}\|x+m\|$ ([[def-quotient-seminorm]]).

[L2] The quotient seminorm is representative-independent, so
$(x+y)+(m_1+m_2)+M = (x+y)+M$ may be read with any $m_1,m_2 \in M$
([[lem-quotient-seminorm-is-representative-independent]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose $m_1,m_2 \in M$ such that $\|x+m_1\| < \|x+M\|_{X/M} + \varepsilon/2$ and $\|y+m_2\| < \|y+M\|_{X/M} + \varepsilon/2$. [L1, choose]

2.1 Since $m_1+m_2 \in M$, [L2] lets us evaluate the quotient seminorm of $(x+y)+M$ at the representative $x+y+m_1+m_2$. Hence $\|(x+y)+M\|_{X/M} \le \|x+y+m_1+m_2\| \le \|x+m_1\|+\|y+m_2\| < \|x+M\|_{X/M} + \|y+M\|_{X/M} + \varepsilon$ by step 1.1. [step 1.1, L1, L2, algebra]

3.1 Since $\varepsilon > 0$ was arbitrary, the displayed strict inequality of step 2.1 implies the stated triangle inequality. [step 2.1, given] ∎
