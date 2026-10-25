---
id: "def-minkowski-gauge-of-an-open-convex-zero-neighborhood"
kind: "definition"
title: "Minkowski gauge for an open convex zero-neighborhood"
status: published
origin: "pipeline"
deps: ["def-topological-vector-space-for-local-convexity", "def-locally-convex-topological-vector-space", "lem-topological-vector-space-translation-scaling-and-absorption", "thm-infimum-property", "def-infimum"]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis (17 November 2017)"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: "phase-2-next-20"
---

## Definition

Let $X$ be a real or complex TVS ([[def-topological-vector-space-for-local-convexity]]) and let $U$ be an open convex zero-neighborhood, with convexity as in [[def-locally-convex-topological-vector-space]]. The **Minkowski gauge** of $U$ is
$$p_U:X\longrightarrow[0,\infty),\qquad p_U(x)=\inf\{t>0:x\in tU\}.$$

This is a well-defined finite real number for each $x$. Indeed, [[lem-topological-vector-space-translation-scaling-and-absorption]] gives $x\in tU$ for every sufficiently large positive real $t$, so the defining set is nonempty; zero is a lower bound. The infimum therefore exists in $\mathbb R$ by [[thm-infimum-property]] and is unique by the infimum convention of [[def-infimum]]. It is nonnegative, since zero is a lower bound.

For $x=0$ every $t>0$ is admissible, so $p_U(0)=0$: zero is a lower bound and a proposed positive lower bound $b$ fails at $t=b/2$. If $U=X$, the same argument gives $p_U(x)=0$ for every $x$.

The gauge is interpreted on the underlying real vector space. No symmetry, balance or positive definiteness is imposed on it by this definition. Convexity uses real coefficients even in the complex case. Neither local convexity of the whole space nor any choice principle is required.
