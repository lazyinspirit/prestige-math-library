---
id: def-cm18-sampling-model
kind: definition
title: "Repeated-observation protocols of the force branch: adopted IID and second-moment sampling hypotheses and the sample mean"
status: draft
origin: pipeline
domain: physics
deps: [def-cm18-observable-model, def-cm-iid-sampling-model, def-identically-distributed-and-iid-random-variables, def-moments-variance-and-covariance, def-probability-measure, def-random-element-and-real-random-variable, rem-cm-inference-and-uncertainty-scope, lem-cm-finite-iid-sample-mean-bound]
dependency_roles:
  def-cm18-observable-model: formulation-prerequisite
  def-cm-iid-sampling-model: mathematical-premise
  def-identically-distributed-and-iid-random-variables: mathematical-premise
  def-moments-variance-and-covariance: mathematical-premise
  def-probability-measure: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
  rem-cm-inference-and-uncertainty-scope: mathematical-premise
  lem-cm-finite-iid-sample-mean-bound: mathematical-premise
dependency_level: 12
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Repeated-observation protocols with a scalar readout for an operational observable model of the force branch: a repetition count, one error random element per repetition on a common probability space, the resulting observations, and the adopted IID and second-moment hypotheses on the repeated preparation. The item records what the sampling hypotheses assume about repetitions and what follows for the sample mean by the cited mathematical supplier; it does not assert that any physical sequence of repetitions satisfies the hypotheses and reports no observed value."
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (BIPM, 2008 corrected version), clause 4.2.1 on repeated observations, the arithmetic mean and the experimental standard deviation, with the conditions attached to repeated observations"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.2.1 (independent and identically distributed sequences) and Section 2.1 (independence); Section 1.6.3 on expectation and variance of a real random variable"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "L. Wasserman, All of Statistics: A Concise Course in Statistical Inference (Springer, 2004), Section 4.1 on the law of large numbers for i.i.d. sequences; full text copy at the cited URL"
      url: "https://egrcc.github.io/docs/math/all-of-statistics.pdf"
verification:
  precheck: n/a
---

## Definition

Fix an operational observable model of the force branch
([[def-cm18-observable-model]]) in a fixed inertial frame, with parameter set
$\Theta$, preparation settings $Z$, prediction map $\Phi:\Theta\times Z\to
\mathbb R$, probability space $(\Omega,\mathfrak F,\mathbb P)$, error domain
$V\subseteq\mathbb R$ and error random element $\varepsilon$; the readout is
scalar here ($d=1$), since the mathematical sampling interface used below is
stated for real random variables, and vector readouts are treated
coordinatewise where needed.

A **repeated-observation protocol** for this model consists of

1. a **repetition count** $n\ge1$ and one error random element
   $\varepsilon_{k}:\Omega\to\mathbb R$ for each $k=1,\dots,n$, with
   $\varepsilon_{k}(\omega)\in V$ for every $\omega$, the error of the $k$-th
   repetition on the common probability space
   ([[def-probability-measure]],
   [[def-random-element-and-real-random-variable]]);
2. the **observations** $Y_{k}:=\Phi(\theta,z)+\varepsilon_{k}$ at a fixed
   pair $(\theta,z)\in\Theta\times Z$: the same parameter value and the same
   preparation are declared for every repetition, so that the repetition
   changes only the error.

The protocol **satisfies the IID sampling hypothesis** when the family
$(\varepsilon_{1},\dots,\varepsilon_{n})$ — equivalently the family
$(Y_{1},\dots,Y_{n})$ — is independent and identically distributed in the
sense of [[def-identically-distributed-and-iid-random-variables]]; it
**satisfies the second-moment hypothesis** when $E\bigl[Y_{1}^{2}\bigr]<+\infty$.
Under both hypotheses the common mean and variance
$$\mu:=E[Y_{1}]\in\mathbb R,\qquad\sigma^{2}:=\operatorname{Var}(Y_{1})\in[0,+\infty)$$
are defined by [[def-moments-variance-and-covariance]], the **sample mean** is
$$\overline Y:=\frac1n\sum_{k=1}^{n}Y_{k},$$
and the mathematical consequences of the two hypotheses are those of the
sampling model [[def-cm-iid-sampling-model]], namely the conclusions of
[[lem-cm-finite-iid-sample-mean-bound]]: $E\bigl\lvert\overline Y-\mu\bigr\rvert^{2}
=\sigma^{2}/n$ and, for every $a>0$,
$$\mathbb P\bigl(\bigl\lvert\overline Y-\mu\bigr\rvert\ge a\bigr) \le\frac{\sigma^{2}}{n\,a^{2}}.$$

The equivalence uses the same constant $c:=\Phi(\theta,z)$ in every repetition. For any finite selection of indices and Borel sets $B_k$, $\{Y_k\in B_k\}=\{\varepsilon_k\in B_k-c\}$. Since translation and its inverse preserve Borel sets, independence factorizes these intersection probabilities for the $Y_k$ exactly when it does for the $\varepsilon_k$. Each observation law is the pushforward of its error law under $u\mapsto u+c$; applying the inverse translation shows that identical distribution is also equivalent. This argument requires the fixed common prediction; random or varying predictions need separate hypotheses.

### Well-definedness and conventions

The IID and second-moment hypotheses are **adopted model hypotheses about the
repetitions**, not consequences of the protocol and not properties of the
data. Independence of the errors fails when successive repetitions share a
systematic effect, when the apparatus drifts between repetitions or when the
same recorded data are reused; identical distribution fails when the
preparation or the conditions change between repetitions. A use of the
displayed bounds must state both hypotheses, the declared law (if any) of
$\varepsilon$, and the conditions under which the repetitions are claimed to
be comparable.

The sample mean $\overline Y$ is a random variable of the model. The
definition attaches no observed value to $\mu$ or $\sigma^{2}$; in
particular $\sigma^{2}$ is model data and not a measured uncertainty, as
[[rem-cm-inference-and-uncertainty-scope]] records for the mathematical
interface. A physical claim that a stated procedure satisfies the IID
sampling hypothesis requires separate empirical evidence and is not part of
this item.
