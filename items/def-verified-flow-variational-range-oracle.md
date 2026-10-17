---
id: def-verified-flow-variational-range-oracle
kind: definition
title: "Exact range-oracle contract for validated flow and monodromy enclosures"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
    - title: "R. B. Kearfott, Interval Computations: Introduction, Uses, and Resources, Euromath Bulletin 2(1) (1996)"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
      locator: "Full PDF retrieved and verified as 23 pages; inspected §§1–2 on interval sets, outward enclosure, Brouwer, and interval Newton/Krawczyk."
---

## Definition

Fix an integer $d\ge1$, an open set $\Omega\subset\mathbb R^{d+d^2+1}$, and a continuously differentiable map $H:\Omega\to\mathbb R^{d+d^2+1}$. A rational box is a finite product of closed intervals with rational endpoints. A sound range provider on a compact convex rational box $K\subset\Omega$ is a procedure which, on each rational box $Q\subseteq K$, returns either a rational box $H^\#(Q)$ satisfying
$$
\{H(y):y\in Q\}\subseteq H^\#(Q),
$$
or the status inconclusive. It may not report a finite box without this inclusion. The provider also supplies rational bounds $L,M\ge0$ satisfying
$$
\|H(y)-H(z)\|_\infty\le L\|y-z\|_\infty,\qquad \|H(y)\|_\infty\le M\quad(y,z\in K).
$$
The function bounds are part of the input certificate and must hold on all of $K$. This interface says what a successful range computation means; it does not assert that a provider succeeds on every field or box.
