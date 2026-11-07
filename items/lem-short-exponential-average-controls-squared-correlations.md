---
id: lem-short-exponential-average-controls-squared-correlations
kind: lemma
title: "Short exponential averages control squared correlations"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
deps: ["lem-short-window-fourier-correlation-identity"]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Matom\u00e4ki\u2013Radziwi\u0142\u0142\u2013Tao"
      url: https://arxiv.org/pdf/1503.05121v3
      locator: "Proposition 5.3, PDF p. 18; local explicit-constant version"
---

## Statement

Let $H,N\ge1$ be integers and let $f:\mathbb Z\to\mathbb C$ satisfy $|f|\le1$ and $\#\operatorname{supp}f\le N$. If
$$\sup_{\alpha\in[0,1]}\int_{\mathbb R}\left|\sum_{x\le n\le x+2H}f(n)e(\alpha n)\right|dx\le EHN,$$
then $\sum_{|r|\le H}|C_f(r)|^2\le6EHN^2$. The supremum remains outside the integral.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

[F1] [[lem-short-window-fourier-correlation-identity]] supplies its stated finite identity or entropy property under its exact hypotheses.

## Proof

1.1 Except at a set of $x$ of measure zero, an interval of length $2H$ contains at most $2H+1\le3H$ integers. Hence its short sum has modulus at most $3H$, and its squared-modulus integral $A(\alpha)$ is at most $3EH^2N$. The second identity of [F1] gives $\int_0^1A(\alpha)d\alpha\le2HN$. [given, F1, algebra]

2.1 Thus $\int_0^1A^2\le6EH^3N^2$. The first identity of [F1] bounds this from below by $H^2\sum_{|r|\le H}|C_f(r)|^2$, since $2H-|r|\ge H$ there. Divide by $H^2$. [F1, step 1.1, algebra] ∎
