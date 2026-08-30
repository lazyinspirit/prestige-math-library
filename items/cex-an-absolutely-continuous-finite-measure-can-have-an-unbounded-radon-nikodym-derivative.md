---
id: cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative
kind: counterexample
title: "An absolutely continuous finite measure can have an unbounded Radon-Nikodym derivative"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-measure-with-density, def-radon-nikodym-derivative,
       cor-integral-over-a-null-set-vanishes]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
---

## Statement refuted

Every absolutely continuous finite measure has a bounded Radon-Nikodym derivative.

## Facts & Assumptions

**Given:** The measure $\nu(E)=\int_E x^{-1/2}\chi_{(0,1]}(x)\,d\lambda(x)$ on $\mathbb R$.

[L1] A nonnegative measurable density defines a positive measure; when that
measure is absolutely continuous with respect to a sigma-finite base and
satisfies the common finite-exhaustion hypothesis, a density recovering all
measurable-set values represents its Radon--Nikodym derivative
([[def-measure-with-density]], [[def-radon-nikodym-derivative]]).

[L2] The integral over a null set vanishes
([[cor-integral-over-a-null-set-vanishes]]).

## Counterexample

**Proof technique:** direct.

1.1 The density $x^{-1/2}\chi_{(0,1]}$ is integrable on $(0,1]$, since $$\int_0^1x^{-1/2}\,d\lambda=2.$$ Therefore [L1] makes $\nu$ a finite measure, and [L2] shows that it vanishes on every Lebesgue-null set. Thus $\nu\ll\lambda$; the exhaustion $[-n,n]$ verifies the remaining Radon--Nikodym hypotheses. [L1, L2, given, algebra]

2.1 The same density represents $d\nu/d\lambda$, but it is unbounded near $0$. Hence a finite absolutely continuous measure need not have a bounded derivative. [step 1.1, L1] ∎
