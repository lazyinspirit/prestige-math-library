---
id: "def-regular-conditional-distribution"
kind: "definition"
title: "Regular conditional distribution"
deps: ["def-measure-kernel-and-probability-kernel", "def-conditional-expectation-given-a-sigma-algebra"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
---

## Definition

Let $X:(\Omega,\mathcal F,P)\to(T,\Tau)$ be a measurable random element and $\mathcal G\subseteq\mathcal F$ a sub-sigma-algebra. A **regular conditional distribution of X given $\mathcal G$** is a probability kernel $K:(\Omega,\mathcal G)\to(T,\Tau)$ satisfying
$$\int_H K(\omega,A)\,P(d\omega)=P(H\cap\{X\in A\})\qquad(H\in\mathcal G,\ A\in\Tau).$$

“Probability kernel” has the pointwise meaning of [[def-measure-kernel-and-probability-kernel]]: every $K(\omega,\cdot)$ is a probability measure, and every evaluation is $\mathcal G$-measurable. Its evaluations lie in $[0,1]$ and are integrable. Thus the testing identity says exactly that $K(\cdot,A)$ is a conditional-expectation version of $1_{\{X\in A\}}$ in [[def-conditional-expectation-given-a-sigma-algebra]]. Conversely, a probability kernel with these version identities satisfies the displayed definition.

The kernel requirement holds at every sample point. Separate eventwise choices of conditional-expectation versions do not imply it and do not by themselves provide one exceptional set valid for all A. When A is empty the testing identity is zero on both sides, and when A=T it is P(H) on both sides. This defines a property of a supplied kernel and makes no existence or AC assertion.
