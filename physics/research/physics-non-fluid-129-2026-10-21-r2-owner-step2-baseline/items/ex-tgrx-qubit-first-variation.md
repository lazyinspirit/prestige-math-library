---
id: ex-tgrx-qubit-first-variation
kind: example
title: Biased qubit entanglement variation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - prop-tgrx-entropy-first-variation
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-algebra-of-derivatives
  - def-natural-logarithm
dependency_roles:
  prop-tgrx-entropy-first-variation: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-natural-logarithm: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pending
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, author-hosted complete book manuscript, §5.2.1
      url: https://jhwatrous.github.io/TQI.pdf
    - title: Mark M. Wilde, From Classical to Quantum Shannon Theory, complete book manuscript, §11.1
      url: https://arxiv.org/pdf/1106.1445v8
---

## Example

Fix $p\in(0,1)$ and set $\sigma:=\operatorname{diag}(p,1-p)$. For $|\varepsilon|<\min\{p,1-p\}$ define $\rho(\varepsilon):=\operatorname{diag}(p+\varepsilon,1-p-\varepsilon)$ and $s(\rho(\varepsilon)):=-\operatorname{tr}(\rho(\varepsilon)\log\rho(\varepsilon))$. Then every $\rho(\varepsilon)$ is a faithful density matrix, $\rho(0)=\sigma$, and

$$\left.\frac{d}{d\varepsilon}s(\rho(\varepsilon))\right|_{\varepsilon=0}=\log\!\left(\frac{1-p}{p}\right).$$

## Example references

[[prop-tgrx-entropy-first-variation]]

[[thm-logarithm-derivative-and-integral]]

[[thm-natural-logarithm-laws]]

[[thm-algebra-of-derivatives]]

[[def-natural-logarithm]]

[John Watrous, The Theory of Quantum Information, §5.2.1](https://jhwatrous.github.io/TQI.pdf)

[Mark M. Wilde, From Classical to Quantum Shannon Theory, §11.1](https://arxiv.org/pdf/1106.1445v8)

## Facts & Assumptions

**Given:** $p\in(0,1)$ and $|\varepsilon|<\min\{p,1-p\}$.

[F1] [[prop-tgrx-entropy-first-variation]]: for a differentiable density path through a faithful finite-dimensional reference, $s'(0)=\operatorname{tr}(\rho'(0)(-\log\sigma))$.

[F2] [[thm-logarithm-derivative-and-integral]]: $\log$ is differentiable on $(0,\infty)$ with $\log'(x)=1/x$.

[F3] [[thm-natural-logarithm-laws]]: for $a,b>0$, $\log(a)-\log(b)=\log(a/b)$.

[F4] [[thm-algebra-of-derivatives]]: sums, scalar multiples, and products of differentiable real functions have the usual sum, scalar, and product derivatives.

[F5] [[def-natural-logarithm]]: $\log$ is the real inverse of the exponential on $(0,\infty)$.

## Verification

1.1 The bounds on $\varepsilon$ imply $p+\varepsilon>0$ and $1-p-\varepsilon>0$, and their sum is $1$. Thus $\rho(\varepsilon)$ is a positive diagonal trace-one matrix, $\sigma=\rho(0)$ is strictly positive, and the path satisfies the finite-dimensional hypotheses in [F1]. [given, F1, algebra]

1.2 The eigenvalues give $s(\rho(\varepsilon))=-(p+\varepsilon)\log(p+\varepsilon)-(1-p-\varepsilon)\log(1-p-\varepsilon)$. By the difference-quotient formula in [F2], $\frac{d}{d\varepsilon}\log(p+\varepsilon)=1/(p+\varepsilon)$ and, after replacing the increment by its negative, $\frac{d}{d\varepsilon}\log(1-p-\varepsilon)=-1/(1-p-\varepsilon)$. The product rule [F4] therefore gives $\frac{d}{d\varepsilon}s(\rho(\varepsilon))=\log(1-p-\varepsilon)-\log(p+\varepsilon)$; at $0$, [F3] turns this into $\log((1-p)/p)$. [given, F2, F3, F4, F5, algebra]

2.1 Directly, $\rho'(0)=\operatorname{diag}(1,-1)$ and $-\log\sigma=\operatorname{diag}(-\log p,-\log(1-p))$, so $\operatorname{tr}(\rho'(0)(-\log\sigma))=\log(1-p)-\log p=\log((1-p)/p)$. This agrees with the local calculation and the general result [F1]. [F1, step 1.2, algebra] ∎

