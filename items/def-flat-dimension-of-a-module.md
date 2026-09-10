---
id: def-flat-dimension-of-a-module
title: "The flat dimension of a module"
kind: definition
status: published
origin: pipeline
deps: ["def-left-and-right-flat-modules-over-an-arbitrary-ring"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-06
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
---

## Definition

For a left $R$-module $M$, its flat dimension $\operatorname{fd}_R M$ is the
least $n\geq0$ for which there is an exact sequence
$$0\to F_n\to\cdots\to F_0\to M\to0$$
with every $F_j$ flat; it is $\infty$ if no such $n$ exists.  The right flat
dimension is defined with right modules and the same convention.
