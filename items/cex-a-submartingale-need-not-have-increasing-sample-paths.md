---
id: "cex-a-submartingale-need-not-have-increasing-sample-paths"
kind: "counterexample"
title: "A submartingale need not have increasing sample paths"
deps: ["def-martingale-submartingale-and-supermartingale", "def-conditional-expectation-as-an-ae-class", "lem-conditional-expectation-is-unique-almost-surely", "lem-conditioning-a-known-variable-and-an-independent-variable", "thm-nonnegative-weighted-sums-of-measures", "prop-dirac-measure-is-a-probability-measure", "def-axiom-of-choice"]
provenance:
  statement: ai-generated
  proof: ai-altered
proof_strategy: "direct"
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Statement refuted

Assume AC. A submartingale need not have nondecreasing sample paths. On the equiprobable two-point space $\Omega=\{-1,1\}$, set $X_0=0$ and $X_n(e)=e$ for $n\ge1$, with $\mathcal F_0$ trivial and $\mathcal F_n$ full for $n\ge1$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement refuted.

[F1] Nonnegative finite and countable weighted sums of measures are measures. [[thm-nonnegative-weighted-sums-of-measures]].

[F2] A Dirac measure at a specified point is a probability measure. [[prop-dirac-measure-is-a-probability-measure]].

[F3] Under AC every integrable input has a measurable integrable conditional version. [[def-conditional-expectation-as-an-ae-class]].

[F4] A known integrable variable conditions to itself; an independent one conditions to its mean. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F5] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Counterexample

**Proof technique:** direct.

1.1 The measure $P=\tfrac12\delta_{-1}+\tfrac12\delta_1$ is a measure of total mass one. The displayed filtration is increasing. All $X_n$ are adapted and bounded by one, hence integrable. On the only two events of $\mathcal F_0$, the zero function has the same integrals as $X_1$, since $EX_1=(-1+1)/2=0$. It is therefore its conditional version. At later times $X_{n+1}=X_n$ is known, so $E[X_{n+1}\mid\mathcal F_n]=X_n$. Thus $X$ is a martingale and hence a submartingale [[def-martingale-submartingale-and-supermartingale]]. [F1, F2, F3, F4]

2.1 On the measurable atom $\{-1\}$, whose probability is $1/2$, one has $X_1=-1<0=X_0$. Any exceptional set outside which paths are nondecreasing must contain this atom and therefore cannot have probability zero. This refutes even almost-sure nondecreasing paths. AC is inherited from the CE class convention; the finite averages supply the displayed versions explicitly. [F5, step 1.1] ∎
