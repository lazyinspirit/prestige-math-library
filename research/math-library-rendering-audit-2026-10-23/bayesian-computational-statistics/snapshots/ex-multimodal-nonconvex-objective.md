---
id: ex-multimodal-nonconvex-objective
kind: example
title: "A multimodal nonconvex objective"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-damped-newton
  - alg-gradient-descent
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Mario A. T. Figueiredo, Lecture Notes on the EM Algorithm (2004)"
      url: "https://www2.stat.duke.edu/courses/Spring06/sta376/Support/EM/EM.Mixtures.Figueiredo.2004.pdf"
      locator: "§2, PDF pp. 3–5, and §6.2 Gaussian-mixture local-maxima discussion, PDF pp. 28–29"
---
## Example

On $\mathbb R$, consider $f(x)=(x^2-1)^2$. It has two distinct global
minimizers and a strict local maximum between them. The algorithms
[[alg-gradient-descent]] and [[alg-damped-newton]] specify local update rules;
this example proves no global convergence or initialization-independent
claim for either procedure.

## Facts & Assumptions

**Given:** The real objective $f(x)=(x^2-1)^2$.

[F1] [[alg-gradient-descent]] defines an update from the current negative
gradient and its selected step.

[F2] [[alg-damped-newton]] defines a Hessian-based local update with line
search and does not assert global minimization.

## Verification

1.1 Factor $f(x)=(x-1)^2(x+1)^2\ge0$ for every real $x$, with equality at $x=1$ and $x=-1$. Thus these are distinct global minimizers and the minimum value is zero. [given, algebra]

1.2 For $|x|<1$, $f(x)=(1-x^2)^2\le1$, with strict inequality for $x\ne0$; since $f(0)=1$, $x=0$ is a strict local maximum. [given, algebra]

2.1 Steps 1.1–1.2 exhibit a smooth objective with two global minima and an intervening local maximum. The procedures in [F1]–[F2] are defined by local updates and make no global-minimization or initialization-independent claim. [step 1.1, step 1.2, F1, F2] ∎
