---
id: def-associated-graded-object-of-a-filtered-object
kind: definition
title: Associated graded object of a filtered object
deps: ["def-increasing-and-decreasing-filtration-of-an-object", "def-the-quotient-of-an-object-by-a-subobject"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
justified_by: ["lem-associated-graded-quotients-are-well-defined-subquotients"]
---




## Definition

For an increasing filtration, the **associated graded object** is the indexed family
$$\operatorname{gr}^F_pA=\operatorname{coker}(F_{p-1}A\hookrightarrow F_pA)=F_pA/F_{p-1}A\quad(p\in\mathbb Z).$$
For a decreasing filtration it is $\operatorname{gr}^p_FA=F^pA/F^{p+1}A$. Here the inclusions come from [[def-increasing-and-decreasing-filtration-of-an-object]], and quotient means [[def-the-quotient-of-an-object-by-a-subobject]]. This definition uses a family; it assumes no infinite direct sum. With $F^p=F_{-p}$, the decreasing piece at $p$ is the increasing piece at $-p$.

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.
