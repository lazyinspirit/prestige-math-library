---
id: thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces
kind: theorem
title: "Finite probability spaces are exactly finite full-power-set probability spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-probability-measure, def-finite-probability-space-and-event, thm-measures-on-finite-sigma-algebras-are-atomic]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., Section 1.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
    - title: "J. R. Norris, Probability and Measure, Section 1.9"
      url: "https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf"
---

## Statement

Let $\Omega$ be a finite set.

1. If $(\Omega,w)$ is a finite probability space in the sense of
   [[def-finite-probability-space-and-event]], then
   $$\mathbb P_w(A):=\sum_{\omega\in A}w(\omega)\qquad(A\subseteq\Omega)$$
   is a probability measure on $(\Omega,\mathcal P(\Omega))$.
2. Conversely, if $\mathbb P$ is a probability measure on
   $(\Omega,\mathcal P(\Omega))$, then
   $$w(\omega):=\mathbb P(\{\omega\})\qquad(\omega\in\Omega)$$
   makes $(\Omega,w)$ a finite probability space and
   $$\mathbb P(A)=\sum_{\omega\in A}w(\omega)\qquad(A\subseteq\Omega).$$

These two constructions are inverse to each other. In particular, zero-weight
outcomes remain genuine outcomes in both descriptions.

## Facts & Assumptions

**Given:** A finite set $\Omega$.

[L1] A finite probability space is a finite set with nonnegative weights summing
to $1$, every subset is an event, and event probabilities are the corresponding
sub-weight sums ([[def-finite-probability-space-and-event]]).

[L2] A probability measure is a measure of total mass $1$
([[def-probability-measure]]).

[L3] On a finite sigma-algebra, the atoms partition the space, every measurable
set is the union of the atoms it contains, and a measure is the sum of the atom
masses over those atoms ([[thm-measures-on-finite-sigma-algebras-are-atomic]]).

## Proof

**Proof technique:** direct.

1.1 If $(\Omega,w)$ is a finite probability space, then [L1] already states that every subset of $\Omega$ is an event and that $A\mapsto\sum_{\omega\in A}w(\omega)$ is its probability. Therefore $\mathbb P_w$ is a probability measure on $(\Omega,\mathcal P(\Omega))$ by [L2]. [L1, L2]

1.2 Conversely, let $\mathbb P$ be a probability measure on $(\Omega,\mathcal P(\Omega))$ and put $w(\omega)=\mathbb P(\{\omega\})$. Each singleton is an atom of the full power-set sigma-algebra, and every $A\subseteq\Omega$ is the union of the singletons it contains. Thus [L3] gives $$\mathbb P(A)=\sum_{\omega\in A}\mathbb P(\{\omega\})=\sum_{\omega\in A}w(\omega).$$ Taking $A=\Omega$ yields $\sum_{\omega\in\Omega}w(\omega)=\mathbb P(\Omega)=1$, and nonnegativity of $w$ comes from the measure axioms inside [L2]. So $(\Omega,w)$ is a finite probability space. [L2, L3]

2.1 Step 1.1 constructs a full-power-set probability measure from any finite weight model, and step 1.2 recovers exactly those singleton weights from any full-power-set probability measure. Hence the two descriptions are equivalent, including the boundary case of outcomes with weight $0$. [step 1.1, step 1.2] ∎
