---
id: def-finite-randomized-treatment-assignment-model
kind: definition
title: "Finite randomized treatment-assignment models"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-scientific-statistical-model-contract
  - def-finite-probability-space-and-event
  - def-statistical-experiment
  - def-random-element-and-real-random-variable
  - def-measurable-function-between-measurable-spaces
  - def-measurable-space
  - def-sigma-algebra
  - def-law-or-distribution-of-a-random-element
  - lem-law-of-a-random-element-is-a-probability-measure
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 2, §2.4"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Susan Holmes and Wolfgang Huber, Modern Statistics for Modern Biology, Chapter 13, §§13.2 and 13.4.4"
      url: "https://www.huber.embl.de/msmb/13-chap.html"
    - title: "Siva Balakrishnan, CMU 36-705 Lecture 28, §28.5 Fisher's Exact p-values"
      url: "https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf"
---

## Definition

Let $N\ge1$, and let $\mathcal I=\{1,\ldots,N\}$ index the fixed
experimental units at the actual treatment-assignment level. Let
$\mathcal Z$ be a nonempty finite set of allowed assignments. If treatment
is assigned to clusters, each cluster is one indexed unit; no separate
probability-sampling unit is present. The index $i$ identifies that unit,
and no visit or repeated-measurement index is modeled here.

A known assignment law is a function $p:\mathcal Z\to[0,1]$ satisfying
$\sum_{z\in\mathcal Z}p(z)=1$, so $(\mathcal Z,p)$ is a finite probability
space ([[def-finite-probability-space-and-event]]); assignments of probability
zero may remain in $\mathcal Z$. A **potential-outcome schedule** is a function
$\theta:\mathcal I\times\mathcal Z\to\mathbb R$, with
$Y_i(z):=\theta(i,z)$. The schedule and the units are fixed; the assignment
$Z$ is the only randomness supplied by the design, and the observed response
vector is $Y_\theta(Z)=(Y_i(Z))_{i\in\mathcal I}$. The schedule is defined
for every allowed assignment, including zero-probability assignments, and
may depend on the full assignment vector, so no no-interference assumption is
implicit. The scientific statistical model contract
[[def-scientific-statistical-model-contract]] requires the observation space,
units, quantity status, observation mechanism, support, conditioning
convention, and adequacy assumptions to be recorded; this model specifies
those fields as follows.

To express this as a statistical experiment, take the data space
$\mathcal X=\mathcal Z\times\mathbb R^{\mathcal I}$ with its full power-set
sigma-algebra, which is a sigma-algebra by [[def-sigma-algebra]] and makes
$\mathcal X$ a measurable space ([[def-measurable-space]]), and parameter
set $\Theta=\mathbb R^{\mathcal I\times\mathcal Z}$. For each $\theta\in\Theta$
let $P_\theta$ be the law
([[def-law-or-distribution-of-a-random-element]]) of the deterministic
observation map $O_\theta(z)=(z,Y_\theta(z))$ from $(\mathcal Z,p)$. The map
is measurable because its domain has the full power set, in the preimage
sense of [[def-measurable-function-between-measurable-spaces]], and its law
is a probability measure by
[[lem-law-of-a-random-element-is-a-probability-measure]]. Thus
$((\mathcal X,2^{\mathcal X}),\Theta,(P_\theta)_{\theta\in\Theta})$ is an
experiment in the sense of [[def-statistical-experiment]]. The assignment
law asserts no response-error model, Gaussian law, superpopulation
randomization, or sampling representativeness beyond the stated finite
assignment mechanism. Its finite full-measure support set is
$$S_\theta:=\{(z,Y_\theta(z)):z\in\mathcal Z,\ p(z)>0\},$$
since $P_\theta(S_\theta)=\sum_{z:p(z)>0}p(z)=1$. The record contains the
assigned vector and every unit's response; missing or censored outcomes and
repeated visits require a separately declared observation mechanism. The
inferential target is the assignment-invariance hypothesis for these $N$
units, not an estimand for a wider population.

Inference in this page holds $\mathcal I$ and $\theta$ fixed and averages
over the declared law $p$; it does not condition on the realized assignment.
The status of the quantities is explicit: $\theta$ and all
$Y_i(z)$ are fixed, $Z$ is random, $(Z,Y_\theta(Z))$ is observed, and
potential responses under unassigned vectors are fixed but latent. The
assignment set, weights, and implemented randomization protocol are
design-controlled and should be checked against protocol records. Assignment
logs and response records are empirically assessable, but those checks do not
prove that the declared law generated the data. Potential outcomes under
unassigned vectors are fixed and latent in the realized record. This does
not imply nonidentifiability from the observed-data law: for each $z$ with
$p(z)>0$, the law assigns mass $p(z)$ to $(z,Y_\theta(z))$, and therefore
determines $Y_\theta(z)$. Assignment invariance on this positive-probability
set is **empirically assessable**, and the theorem tests the stronger
invariance hypothesis on all allowed assignments. Values at assignments
with $p(z)=0$, and restrictions on those values, are **substantively
untestable** from this law, since changing them leaves $P_\theta$ unchanged.
One realized assignment does not reveal responses at other assignments.
These classifications do not make the design or scientific model
empirically true.
