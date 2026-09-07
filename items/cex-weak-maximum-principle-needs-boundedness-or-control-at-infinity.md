---
id: cex-weak-maximum-principle-needs-boundedness-or-control-at-infinity
kind: counterexample
title: "Weak maximum principle needs boundedness or control at infinity"
status: draft
origin: pipeline
deps: [thm-weak-maximum-principle-for-the-laplacian]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Thomas Schmidt, Lectures Notes, PDE"
      url: https://www.math.uni-hamburg.de/home/schmidt/lectures/PDE.pdf
      locator: "§2.4 Remarks (on Phragmen-Lindelof principles), (1), printed p.22 / PDF p.24"
---

## Statement refuted

Without boundedness or control at infinity, a harmonic function continuous on the closure of an open set and zero on its nonempty boundary need not be nonpositive inside. For $n\ge2$, take $\Omega=\{x\in\mathbb R^n:x_n>0\}$ and $u(x)=x_n$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted.

[F1] The weak maximum principle assumes a bounded nonempty open set and a subharmonic $C^2$ function continuous on the closure. ([[thm-weak-maximum-principle-for-the-laplacian]]).

## Counterexample

**Proof technique:** direct.

1.1 The half-space is open, connected and unbounded, with nonempty boundary $\{x_n=0\}$. The affine function is smooth on all of $\mathbb R^n$, has Laplacian zero, and vanishes on that boundary. [given, algebra]

2.1 For every $t>0$, $u(te_n)=t>0$, and these values tend to infinity as $t\to\infty$. Hence the proposed interior bound fails. The bounded-open-set hypothesis of the weak maximum principle does not hold for this example. [F1, step 1.1, algebra] ∎
