---
id: thm-morse-stability-of-quasi-geodesics
kind: theorem
title: "Morse stability of quasi-geodesics"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quasi-geodesic-and-quasi-geodesic-metric-space, thm-morse-stability-with-explicit-parameter-dependence, def-axiom-of-choice]
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.1"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. For every $\delta \ge 0$ and every quasi-geodesic constants $\lambda \ge 1$,
$\varepsilon \ge 0$, there exists $R=R(\delta,\lambda,\varepsilon)$ with the
following property: if $X$ is a geodesic $\delta$-hyperbolic space and
$q_1,q_2$ are $(\lambda,\varepsilon)$-quasi-geodesics in $X$ with the same
endpoints, then the Hausdorff distance between the images of $q_1$ and $q_2$ is
at most $R=184\lambda^2(\varepsilon+3\delta)$. No properness or continuity of the quasi-geodesics is required.

## Facts & Assumptions

**Given:** AC, a geodesic $\delta$-hyperbolic space $X$ and two $(\lambda,\varepsilon)$-quasi-geodesics $q_1,q_2$ with the same endpoints.

[F1] Under AC, every such quasi-geodesic has Hausdorff distance at most $M=92\lambda^2(\varepsilon+3\delta)$ from every specified endpoint geodesic, including both Hausdorff inclusions ([[thm-morse-stability-with-explicit-parameter-dependence]]).

[A1] AC is used through [F1] to choose its projection family ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose one geodesic $\gamma$ joining the common endpoints. By [F1], each image $Q_i=\operatorname{im}(q_i)$ has Hausdorff distance at most $M$ from $\gamma$. This means both that every point of $Q_i$ is within distance $M$ of $\gamma$ and that every point of $\gamma$ is within distance $M$ of $Q_i$, with infimum distances understood as in [F1]. [given, F1, A1]

2.1 Fix $x\in Q_1$ and $h>0$. Choose $z\in\gamma$ with $d(x,z)<M+h$, then $y\in Q_2$ with $d(z,y)<M+h$. Thus $d(x,Q_2)\le2M+2h$; letting $h$ decrease to zero gives $d(x,Q_2)\le2M$. Reverse the roles of $Q_1,Q_2$ for the other inclusion. Therefore their Hausdorff distance is at most $2M=184\lambda^2(\varepsilon+3\delta)$, as claimed. [step 1.1, algebra] ∎
