---
id: thm-l-one-functions-admit-dominated-complex-simple-approximations
kind: theorem
title: "Every L^1 function admits dominated complex simple approximations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-simple-function, def-integrable-real-and-complex-functions-and-their-integrals, def-positive-and-negative-parts-of-a-function, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-nonnegative-measurable-functions-admit-increasing-simple-approximations, thm-monotone-convergence-for-the-integral]
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §3A and §6B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "John K. Hunter, Measure Theory, §4.6 and §7.3"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let $f\in L^1(\mu)$. Then
there exists a sequence $(s_n)$ of complex simple functions such that:

1. $|s_n|\le 2|f|$ for every $n$;
2. $\int |f-s_n|\,d\mu\to0$.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and an integrable function
$f:X\to\mathbb C$.

[L1] An integrable complex function has measurable real and imaginary parts and
integrable modulus. ([[def-integrable-real-and-complex-functions-and-their-integrals]])

[L2] The positive and negative parts satisfy
$u=u^+-u^-$ and $|u|=u^++u^-$. ([[def-positive-and-negative-parts-of-a-function]])

[L3] Arithmetic and lattice operations preserve measurability. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]])

[L4] Every nonnegative measurable function admits increasing simple
approximations. ([[thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]])

[L5] Monotone convergence passes increasing limits through the integral.
([[thm-monotone-convergence-for-the-integral]])

## Proof

**Proof technique:** direct.

1.1 Write $f=u+iv$ with $u=\operatorname{Re}f$ and $v=\operatorname{Im}f$. [L1, L2, L3]
By [L1], the real functions $u$ and $v$ are measurable and satisfy
$|u|\le |f|$ and $|v|\le |f|$, hence are integrable. By [L2] and [L3], the
four functions $u^\pm$ and $v^\pm$ are nonnegative measurable.

2.1 Apply [L4] to choose increasing nonnegative simple functions [L2, L3, L4, step 1.1]
$u_n^\pm\uparrow u^\pm$ and $v_n^\pm\uparrow v^\pm$. Put
$$u_n:=u_n^+-u_n^-,\qquad v_n:=v_n^+-v_n^-,\qquad s_n:=u_n+iv_n.$$
Then each $s_n$ is a complex simple function, and
$$|s_n|\le u_n^++u_n^-+v_n^++v_n^-\le |u|+|v|\le 2|f|.$$

3.1 By [L5], the four increasing simple approximations in step 2.1 satisfy [L2, L5, step 2.1]
$\int u_n^\pm\,d\mu\to\int u^\pm\,d\mu$ and
$\int v_n^\pm\,d\mu\to\int v^\pm\,d\mu$. Therefore
$$\int |u-u_n|\,d\mu=\int (u^+-u_n^+)\,d\mu+\int (u^--u_n^-)\,d\mu\to0,$$
and similarly $\int |v-v_n|\,d\mu\to0$. Hence
$$\int |f-s_n|\,d\mu\le \int |u-u_n|\,d\mu+\int |v-v_n|\,d\mu\to0.$$

4.1 Steps 2.1 and 3.1 give the required dominated complex simple [step 2.1, step 3.1] ∎
approximations.
