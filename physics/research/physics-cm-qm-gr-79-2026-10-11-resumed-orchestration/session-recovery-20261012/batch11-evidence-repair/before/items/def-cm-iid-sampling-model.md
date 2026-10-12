---
id: def-cm-iid-sampling-model
kind: definition
title: "Repeated-observation sampling models with IID and finite-variance hypotheses"
status: draft
origin: pipeline
domain: mathematics
deps: [def-identically-distributed-and-iid-random-variables, def-moments-variance-and-covariance, def-probability-measure, def-random-element-and-real-random-variable]
dependency_roles:
  def-identically-distributed-and-iid-random-variables: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  def-probability-measure: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.2.1 (i.i.d. sequences; the variance of a sum of independent variables and the L2 weak law, Theorem 2.2.3) with Section 2.1 (independence) and Section 1.6.3 (expectation and variance of a real random variable)"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement (BIPM), clause 4.2.1 on repeated observations and the arithmetic mean"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(\Omega,\mathfrak F,\mathbb P)$ be a probability space
([[def-probability-measure]]) and let $n\ge1$ be a natural number. A
**repeated-observation sampling model** for a real quantity consists of random
variables
$$Y_0,\dots,Y_{n-1}:\Omega\longrightarrow\mathbb R$$
([[def-random-element-and-real-random-variable]]) together with the following
model hypotheses, each of which is adopted as part of the model and is not a
consequence of the data:

1. **(IID hypothesis)** the family $(Y_k)_{k<n}$ is independent and
   identically distributed in the sense of
   [[def-identically-distributed-and-iid-random-variables]]; that is, the
   whole family is mutually independent and the laws of the $Y_k$ all agree;
2. **(second-moment hypothesis)** $E\bigl[Y_0^2\bigr]<+\infty$.

Under hypotheses 1 and 2 the numbers
$$\mu:=E[Y_0]\in\mathbb R,\qquad \sigma^2:=\operatorname{Var}(Y_0)\in[0,+\infty)$$
are finite by [[def-moments-variance-and-covariance]], and hypothesis 1 makes
them the common mean and variance of the family; in particular
$E[Y_k]=\mu$ and $\operatorname{Var}(Y_k)=\sigma^2$ for every $k<n$. The
**sample mean** of the model is the random variable
$$\overline Y:=\frac1n\sum_{k=0}^{n-1}Y_k .$$

### Conventions and scope

The data of the model are the probability space, the variables $Y_k$, and the
adopted hypotheses; hypotheses 1 and 2 can fail for the same family of
variables on the same probability space, so they must be stated, not inferred
from the notation. The definition assumes no particular law for the $Y_k$: it
neither assumes a normal law, nor a finite fourth moment, nor a continuous
distribution. Hypotheses of that kind, and any conclusion needing them, must
be stated separately at their point of use.

A sampling model is a mathematical description of repeated observation. It
does not assert that any physical sequence of measurements satisfies the IID
and second-moment hypotheses, and it attaches no value to $\mu$ or $\sigma^2$
beyond the one supplied by the model.
