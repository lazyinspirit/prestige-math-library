---
id: fs-every-borel-measure-on-r-is-finite-on-compact-sets
kind: false-statement
title: "FALSE: every Borel measure on $\\mathbb{R}$ is finite on compact sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-counting-measure, prop-counting-measure-is-a-measure]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

**False claim.** Every Borel measure on $\mathbb{R}$ is finite on compact sets.
The finiteness-on-compacts hypothesis in the Lebesgue-Stieltjes correspondence is
therefore a genuine hypothesis, not a consequence of being a Borel measure.

## Facts & Assumptions

**Given:** Counting measure $\#_{\mathbb{R}}$ on $\mathbb{R}$.

[L1] Counting measure is a measure on $(\mathbb{R},\mathcal{P}(\mathbb{R}))$.
([[prop-counting-measure-is-a-measure]])

[L2] Counting measure assigns an infinite set the value $+\infty$.
([[def-counting-measure]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], counting measure restricts to a Borel measure on $\mathbb{R}$. The [L1, given]
compact interval $[0,1]$ is infinite. [L1, given]

2.1 Therefore [L2] gives [step 1.1, L2]
$\#_{\mathbb{R}}([0,1]) = +\infty$. So this Borel measure is not finite on the
compact set $[0,1]$, and the claim is false. [step 1.1, L2] ∎
