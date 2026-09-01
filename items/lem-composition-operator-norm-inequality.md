---
id: lem-composition-operator-norm-inequality
kind: lemma
title: "Composition satisfies \\|ST\\|\\le\\|S\\|\\,\\|T\\|"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-operator-norm, def-space-of-bounded-linear-operators]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
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

Let $X$, $Y$, and $Z$ be normed spaces over the same scalar field. If
$T \in \mathcal B(X,Y)$ and $S \in \mathcal B(Y,Z)$, then

$$\|ST\| \le \|S\|\,\|T\|.$$

## Facts & Assumptions

**Given:** Bounded linear operators $T:X\to Y$ and $S:Y\to Z$.

[L1] The operator norm is the unit-ball supremum and satisfies
$\|Tu\| \le \|T\|\,\|u\|$ for every vector $u$
([[def-operator-norm]]).

[L2] Bounded linear operators compose to a linear map, and
$\mathcal B(X,Y)$ denotes the bounded ones ([[def-space-of-bounded-linear-operators]]).

## Proof

**Proof technique:** direct.

1.1 Let $x \in X$ satisfy $\|x\| \le 1$. Then [L1] gives $\|Tx\| \le \|T\|$, and applying [L1] again to $S$ yields $\|STx\| \le \|S\|\,\|Tx\| \le \|S\|\,\|T\|$. [L1, L2]

2.1 Step 1.1 holds for every $x$ in the unit ball of $X$, so taking the supremum over that ball gives $\|ST\| \le \|S\|\,\|T\|$. [step 1.1, L1] ∎
