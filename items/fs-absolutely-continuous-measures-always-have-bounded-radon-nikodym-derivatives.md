---
id: fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives
kind: false-statement
title: "FALSE: absolutely continuous measures always have bounded Radon-Nikodym derivatives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-measure-with-density, def-radon-nikodym-derivative,
       cor-integral-over-a-null-set-vanishes]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Chapter 13"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
---

## Statement

**False claim:** If $\nu\ll\mu$, then $d\nu/d\mu$ is bounded.

## Facts & Assumptions

**Given:** The measure $\nu(E)=\int_Ex^{-1/2}\chi_{(0,1]}(x)\,d\lambda(x)$.

[L1] A nonnegative measurable density defines a positive measure; when that
measure is absolutely continuous with respect to a sigma-finite base and
satisfies the common finite-exhaustion hypothesis, a density recovering all
measurable-set values represents its Radon--Nikodym derivative
([[def-measure-with-density]], [[def-radon-nikodym-derivative]]).

[L2] The integral over a null set vanishes
([[cor-integral-over-a-null-set-vanishes]]).

## Refutation

**Proof technique:** direct.

1.1 The function $x^{-1/2}\chi_{(0,1]}$ defines a finite measure by [L1], and [L2] makes it absolutely continuous with respect to $\lambda$. Because $\lambda$ is sigma-finite and the measure is finite, the exhaustion $[-n,n]$ verifies the remaining Radon--Nikodym hypotheses. Moreover $$\int_0^1x^{-1/2}\,d\lambda=2.$$ [L1, L2, given, algebra]

2.1 The same function is a representative of $d\nu/d\lambda$, and it is unbounded near $0$. Therefore absolute continuity alone does not force boundedness of the derivative. [step 1.1, L1] ∎
