---
id: cex-cm18-finite-sample-may-miss-the-signal
kind: counterexample
title: "A finite sample can miss a predicted outcome with positive probability: an elementary product-model counterexample"
status: draft
origin: pipeline
domain: physics
deps: [def-cm18-sampling-model, def-cm18-observable-model, rem-cm18-model-test, def-product-of-finite-probability-spaces, thm-product-probability-has-independent-coordinate-events, def-bernoulli-and-binomial-random-variables, def-finite-probability-space-and-event, lem-finite-probability-basic-laws]
dependency_roles:
  def-cm18-sampling-model: formulation-prerequisite
  def-cm18-observable-model: formulation-prerequisite
  rem-cm18-model-test: formulation-prerequisite
  def-product-of-finite-probability-spaces: mathematical-premise
  thm-product-probability-has-independent-coordinate-events: mathematical-premise
  def-bernoulli-and-binomial-random-variables: mathematical-premise
  def-finite-probability-space-and-event: mathematical-premise
  lem-finite-probability-basic-laws: mathematical-premise
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A counterexample to a stated inference rule for finite samples: it exhibits a finite probability model, of the product form used for independent repetitions, in which a designated outcome occurs with probability p in (0,1) at every trial while a finite sample avoids it with probability (1-p)^n in (0,1). The item refutes only the implication from a finite sample without the outcome to the falsehood of the declared sampling model; it asserts no experiment, no observed sequence and nothing about the truth or falsity of any physical model."
sources:
  references:
    - title: "S. Greenland, S. J. Senn, K. J. Rothman, J. B. Carlin, C. Poole, S. N. Goodman and D. G. Altman, Statistical tests, P values, confidence intervals, and power: a guide to misinterpretations, European Journal of Epidemiology 31 (2016), 337-350, sections on absence of evidence and on the interpretation of non-significant results"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4877414/"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 2.1 on independence and Section 2.2.1 on i.i.d. sequences and their finite product laws"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "NIST/SEMATECH e-Handbook of Statistical Methods, section 7.1.3.5, 'What are Type I and Type II errors?', on failing to reject a hypothesis and the meaning of false negatives"
      url: "https://www.itl.nist.gov/div898/handbook/prc/section1/prc135.htm"
verification:
  precheck: pass
---

## Statement refuted

Let a repeated-observation protocol of [[def-cm18-sampling-model]] satisfy
its IID sampling hypothesis and its second-moment hypothesis, and let $A$ be
an event of a single observation with $0<\mathbb P(A)=p<1$. Then **every
finite sample $(Y_{1},\dots,Y_{n})$ of the protocol contains at least one
outcome in $A$** for every $n\ge1$; equivalently, if a finite sample
contains no outcome in $A$, the declared sampling model is refuted.

## Facts & Assumptions

**Given:** The notation of [[def-cm18-sampling-model]] and
[[def-cm18-observable-model]] for the stated protocol, and a probability
$p\in(0,1)$.

[L1] Finite probability spaces: a finite set $\Omega_{i}$ with weights
$w_{i}\ge0$ summing to $1$, every subset an event, and event probability the
sum of the weights of its outcomes; for events $A\subseteq B$ one has
$\mathbb P(A^{c})=1-\mathbb P(A)$ ([[def-finite-probability-space-and-event]],
[[lem-finite-probability-basic-laws]]).

[L2] Products: the product probability space of a finite family
$((\Omega_{i},w_{i}))_{i\le n}$ has outcome set $\prod_{i}\Omega_{i}$ and
weights $w(\omega)=\prod_{i}w_{i}(\omega_{i})$; coordinate events are
mutually independent and $\mathbb P(\bigcap_{i\in J}C_{i})=\prod_{i\in J}\mathbb P_{i}(A_{i})$
for every $J\subseteq\{1,\dots,n\}$
([[def-product-of-finite-probability-spaces]],
[[thm-product-probability-has-independent-coordinate-events]]).

[L3] Bernoulli variables: a Bernoulli$(p)$ random variable takes the value
$1$ with probability $p$ and $0$ with probability $1-p$
([[def-bernoulli-and-binomial-random-variables]]).

## Counterexample

**Proof technique:** direct; build the finite product model of $n$
independent trials, apply the product probability law to the event that no
trial takes the designated value, and interpret the result as a probability
statement about finite samples.

1.1 Let $p\in(0,1)$ and let $\Omega_{0}:=\{0,1\}$ with weights $w_{0}(1):=p$ and $w_{0}(0):=1-p$; these weights are nonnegative and sum to $1$, so $(\Omega_{0},w_{0})$ is a finite probability space in the sense of [L1], and the event $A_{0}:=\{1\}$ has $\mathbb P(A_{0})=p$ by [L3], with $A_{0}\neq\varnothing$ and $\mathbb P(A_{0})\in(0,1)$. [given, L1, L3]

1.2 For $n\ge1$ form the finite product of $n$ copies of $(\Omega_{0},w_{0})$: the outcome set is $\Omega:=\{0,1\}^{n}$ with weights $w(\omega)=\prod_{k=1}^{n}w_{0}(\omega_{k})$, a finite probability space by [L2]; the single-observation event of the refuted statement corresponds to the coordinate event $C_{k}:=\{\omega_{k}=1\}$ in the $k$-th coordinate, with coordinate probability $p$ by mutual independence of the coordinates in [L2], and reading $Y_{k}:=\omega_{k}$ as the $k$-th observation makes the family $(Y_{k})_{k\le n}$ identically distributed by construction and mutually independent by [L2], so it satisfies the IID sampling hypothesis of [[def-cm18-sampling-model]]; each $Y_{k}$ is bounded, so the second-moment hypothesis holds as well. [given, L2, L3]

2.1 The event "no outcome in $A$ occurs in the finite sample" is $E:=\{\omega\in\Omega:\omega_{k}=0\ \text{for every }k\le n\}=\bigcap_{k=1}^{n}\{\omega_{k}=0\}$; by the product formula of [L2] applied to the coordinate events $\{\omega_{k}=0\}$, whose coordinate probabilities are $1-p$, one has $\mathbb P(E)=\prod_{k=1}^{n}(1-p)=(1-p)^{n}$. [step 1.2, L2, algebra]

3.1 Since $0<p<1$ one has $0<1-p<1$ and therefore $0<(1-p)^{n}<1$ for every $n\ge1$; the event $E$ of a finite sample with no outcome in $A$ has strictly positive probability. [step 2.1, L1, algebra]

4.1 Under the product model of steps 1.2 and 2.1 the single observation lies in the designated event with probability $p\in(0,1)$, the coordinates are mutually independent, and yet the finite sample avoids the event with positive probability $(1-p)^{n}$ by step 3.1; therefore the implication asserted in the refuted statement is false: a finite sample with no outcome in $A$ can occur with positive probability under the declared sampling model, so its occurrence does not refute that model. [step 2.1, step 3.1]

5.1 The probability that at least one outcome in $A$ is seen in the finite sample is $1-(1-p)^{n}$, which tends to $1$ as $n$ grows but equals $1$ for no finite $n$ when $0<p<1$; the failure to exhibit the feature in a finite sample is a positive-probability event of the model, not a refutation of it. [step 3.1, step 4.1, algebra] ∎

## Remarks

The construction is a finite probability computation; it contains no
apparatus, no preparation, no data and no observed sequence. Its physical
reading is the elementary consistency statement of
[[def-cm18-sampling-model]]: a model assigning probability $p$ per trial to
an outcome class is compatible with a finite sample that misses it, and the
probability of the miss is $(1-p)^{n}$ when the trials are independent.

What the counterexample does **not** show is that the declared model is
true, or that some other model is false: consistency of one finite sample
with a model is not evidence for it, and comparing models requires a
specified test — data space, model family, null set, rejection region and
size — as in [[rem-cm18-model-test]] in its role as a scope item of the
companion page.
