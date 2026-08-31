---
id: cex-a-cauchy-sequence-in-calligraphic-l-p-can-converge-to-two-distinct-functions
kind: counterexample
title: "A Cauchy sequence in calligraphic $L^p$ can converge to two distinct functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm, def-calligraphic-l-p-on-a-measure-space]
proof_strategy: "Take the constant sequence equal to a nonzero function supported on a null set. Its distance to the zero function is 0, so it converges to both itself and 0 in the pseudometric on calligraphic L^p."
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement refuted

In the representative space $\mathcal L^p(\mu)$, the $p$-distance always gives
unique limits.

## Facts & Assumptions

**Given:** A nonzero null-supported function from
[[cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm]].

[L1] The previous counterexample supplies a measurable function $h\not\equiv0$
with $\|h\|_p=0$
([[cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm]]).

[L2] $\mathcal L^p(\mu)$ is the representative function space before quotienting
([[def-calligraphic-l-p-on-a-measure-space]]).

## Counterexample

**Proof technique:** Take the constant sequence equal to a nonzero function
supported on a null set. Its distance to the zero function is $0$, so it
converges to both itself and $0$ in the pseudometric on calligraphic $L^p$.

1.1 Let $f_n:=h$ for every $n$, where $h$ is the function from [L1]. Then [L1, L2]
$(f_n)$ is constant, hence Cauchy in the representative $p$-distance.

2.1 Also [L1, step 1.1]
$$\|f_n-h\|_p=0,\qquad \|f_n-0\|_p=\|h\|_p=0$$
for every $n$. So the same sequence converges both to $h$ and to $0$, even
though those two functions are distinct pointwise.

3.1 Therefore the representative-space distance does not have unique limits [step 2.1]
before passing to almost-everywhere classes. ∎
