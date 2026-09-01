---
id: thm-bounded-linear-operator-equivalences
kind: theorem
title: "For a linear operator, boundedness, continuity at 0, continuity, and Lipschitz continuity are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-operator, def-lipschitz-holder-contraction,
       thm-metric-regularity-hierarchy, def-metric-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Statement

Let $X$ and $Y$ be normed spaces over the same scalar field, and let
$T:X\to Y$ be linear. Then the following are equivalent:

1. $T$ is bounded.
2. $T$ is continuous at $0$.
3. $T$ is continuous on $X$.
4. $T$ is Lipschitz.

## Facts & Assumptions

**Given:** Normed spaces $X$ and $Y$, a linear map $T:X\to Y$, a real
$\varepsilon > 0$, and a vector $x_0 \in X$.

[L1] A bounded linear operator has a constant $C \ge 0$ with
$\|Tx\| \le C\|x\|$ for every $x \in X$
([[def-bounded-linear-operator]]).

[L2] A map is Lipschitz when one constant controls all distances, and every
Lipschitz map between metric spaces is continuous ([[def-lipschitz-holder-contraction]],
[[thm-metric-regularity-hierarchy]]).

[L3] Continuity at a point in a metric space is the $\varepsilon$-$\delta$
condition of [[def-metric-continuity]].

## Proof

**Proof technique:** direct.

1.1 Assume $T$ is bounded, with constant $C$ from [L1]. Then $\|Tx-Ty\|=\|T(x-y)\| \le C\|x-y\|$ for all $x,y \in X$, so $T$ is Lipschitz. [L1, L2]

1.2 If $T$ is continuous on $X$, then in particular it is continuous at $0$, so $(3)\Rightarrow(2)$. [L3]

1.3 Assume $T$ is continuous at $0$. Applying [L3] with $\varepsilon = 1$ gives $\delta > 0$ such that $\|u\| < \delta$ implies $\|Tu\| < 1$. [L3, choose]

2.1 Step 1.1 proves $(1)\Rightarrow(4)$, and [L2] gives $(4)\Rightarrow(3)$. [step 1.1, L2]

2.2 Let $x \in X$ with $x \ne 0$ and put $u := \dfrac{\delta}{2\|x\|}x$. Then $\|u\|=\delta/2 < \delta$, so $\|Tu\| < 1$ by step 1.3. By linearity, $Tu = \dfrac{\delta}{2\|x\|}Tx$, hence $\|Tx\| < \dfrac{2}{\delta}\|x\|$. The same inequality is trivial at $x=0$, so $T$ is bounded. [step 1.3, L1, algebra]

3.1 Thus $(2)\Rightarrow(1)$. Combining steps 2.1, 1.2, and 2.2 gives all four equivalences. [step 2.1, step 1.2, step 2.2] ∎
