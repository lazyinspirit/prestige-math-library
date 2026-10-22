---
id: thm-ip-exact-triangular-transport-disintegrates-to-posterior
kind: theorem
title: An exact triangular transport disintegrates to the posterior
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-finite-euclidean-space-is-standard-borel
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-measurable-function-between-measurable-spaces
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-measure-kernel-and-probability-kernel
  - thm-disintegration-of-a-joint-law-on-standard-borel-spaces
  - thm-measurability-of-integration-against-a-kernel
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-ip-lipschitz-ode-triangular-flow-and-c1-density
  - def-ip-misfit-evidence-and-posterior-law
justified_by: []
forward_refs: []
proof_strategy: direct
axiom_use: The Axiom of Choice is required by the standard-Borel disintegration supplier for existence and simultaneous almost-everywhere uniqueness of the conditional posterior kernel. The pushforward and Tonelli calculations are choice-free once the kernels are supplied. The ODE flow supplier uses only Countable Choice and Dependent Choice, both consequences of AC.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed."
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "§2.1, Theorem 2.1.22 shows that Borel subsets of complete separable metric spaces are standard Borel ('nice'); §4.1.3, Theorem 4.1.17 constructs regular conditional distributions on nice spaces. The local proof supplies the rectangle identity and common-null-set uniqueness interfaces used here."
    - title: "S. R. S. Varadhan, Probability Theory, Chapter 4"
      url: "https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf"
      locator: "§4.3, Theorem 4.7 constructs regular conditional distributions on [0,1] for a sub-sigma-algebra and gives the conditional integration identity; Exercise 4.10 formulates disintegration on R². These passages provide context, while the local proof supplies the full standard-Borel rectangle identity and common-null-set uniqueness used here."
---

## Statement

Assume the Axiom of Choice. Let $\pi$ be a probability measure on $\mathbb R^d\times\mathbb R^m$, where $d,m\ge1$, and let $\pi_Y(B):=\pi(\mathbb R^d\times B)$ be its second marginal. Let $\eta$ be a probability measure on $\mathbb R^d$, and let $y\mapsto\pi_y$ be a probability kernel satisfying
$$\pi(A\times B)=\int_B\pi_y(A)\,\pi_Y(dy)$$
for all Borel $A\subseteq\mathbb R^d$ and $B\subseteq\mathbb R^m$. Suppose $T:\mathbb R^d\times\mathbb R^m\to\mathbb R^d\times\mathbb R^m$ is Borel and triangular, $T(x,y)=(T_y(x),y)$, with each $T_y$ a Borel bijection, and define the image measure by $T_{\#}\mu(E):=\mu(T^{-1}(E))$. If
$$T_{\#}(\eta\otimes\pi_Y)=\pi,$$
then $T_y{}_{\#}\eta=\pi_y$ as probability measures for $\pi_Y$-almost every $y$. By disintegration on standard Borel spaces, such a kernel $\pi_y$ exists and is unique outside one $\pi_Y$-null set. In a proper Bayesian model, when $\pi$ is the joint parameter/data law, this conditional kernel is the posterior kernel; the conclusion says an exact triangular transport maps the reference law to the data-conditioned posterior for almost every datum.

For the triangular terminal flow in the preceding ODE lemma, joint continuity supplies the Borel map and each fiber is a bijection. The theorem requires only the exact joint pushforward identity; it does not require a density or a Jacobian formula.

## Statement references

[[lem-ip-lipschitz-ode-triangular-flow-and-c1-density|The ODE flow result supplies a jointly continuous triangular terminal map with bijective fibers.]]

[[def-ip-misfit-evidence-and-posterior-law|The Bayesian model definition identifies the conditional kernel of the proper joint law as a posterior version.]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the joint law $\pi$, its second marginal $\pi_Y$, the reference probability $\eta$, the supplied probability kernel $\pi_y$, and the Borel triangular map and exact joint pushforward identity in the Statement.

[A1] Assume the Axiom of Choice for standard-Borel disintegration existence and simultaneous almost-everywhere uniqueness; the choice-implication theorem gives Dependent Choice and Countable Choice from AC for the ODE supplier. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[F1] Finite-dimensional Euclidean spaces with their Borel sigma-algebras are standard Borel. [[lem-finite-euclidean-space-is-standard-borel]]

[F2] For a probability measure on a product of standard-Borel spaces, a probability-kernel disintegration satisfies the rectangle identity and is unique outside one common marginal-null set. The theorem also gives the corresponding iterated-integral identity for nonnegative product-measurable functions. [[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]]

[F3] A probability kernel has a probability-measure section at every parameter, and each fixed-set evaluation is measurable in the parameter. [[def-measure-kernel-and-probability-kernel]]

[F4] Borel coordinate maps and finite coordinate permutations are measurable for the relevant finite-product Borel sigma-algebras, which agree with the product sigma-algebras. [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[def-measurable-function-between-measurable-spaces]], [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]]

[F5] Integrating a nonnegative product-measurable function against a probability kernel gives a measurable function of the parameter. [[thm-measurability-of-integration-against-a-kernel]]

[F6] The product of probability measures has the rectangle formula, and Tonelli identifies its nonnegative integral with either iterated integral. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F7] Under the Countable Choice and Dependent Choice supplied by [A1], the stated ODE hypotheses give a jointly continuous triangular terminal flow with bijective fibers; the optional C$^1$ density clause is separate. [[lem-ip-lipschitz-ode-triangular-flow-and-c1-density]]

[F8] In a proper Bayesian model on standard-Borel parameter and data spaces, the data-indexed conditional posterior kernel is a version of the posterior and is unique as a probability measure outside one data-marginal-null set. [[def-ip-misfit-evidence-and-posterior-law]]

## Proof

**Given:** [A1], [F1]–[F8], and the hypotheses and notation in the Statement.

1.1 By [A1], [F1], and [F2], the supplied $\pi_y$ is a disintegration of $\pi$ given its second coordinate. For Borel $A\subseteq\mathbb R^d$, define $\kappa_y(A):=\eta(\{x:T_y(x)\in A\})=\int_{\mathbb R^d}\mathbf1_A(T_y(x))\,\eta(dx)$. Since $T_y$ is Borel, each $\kappa_y$ is the image probability measure $T_y{}_{\#}\eta$. For fixed $A$, [F4] makes $(y,x)\mapsto\mathbf1_A(T_y(x))$ product-measurable; applying [F5] to the constant probability kernel $y\mapsto\eta$ makes $y\mapsto\kappa_y(A)$ measurable. Thus [F3] shows that $\kappa$ is a probability kernel. [A1, F1, F2, F3, F4, F5, given, construct]

2.1 Fix Borel $A\subseteq\mathbb R^d$ and $B\subseteq\mathbb R^m$. By [F6] and the definition of $\kappa_y$, $\int_B\kappa_y(A)\,\pi_Y(dy)=(\eta\otimes\pi_Y)(\{(x,y):T_y(x)\in A,\ y\in B\})=(\eta\otimes\pi_Y)(T^{-1}(A\times B))$. The exact joint pushforward identity makes this $\pi(A\times B)$, and the disintegration identity in the Statement makes it $\int_B\pi_y(A)\,\pi_Y(dy)$. Hence $\kappa$ also disintegrates $\pi$. [F2, F4, F6, step 1.1, given, algebra]

3.1 Apply the simultaneous almost-everywhere uniqueness in [F2] to the disintegration kernels $\kappa$ and $\pi_y$. There is one Borel $\pi_Y$-null set $N$ such that for every $y\notin N$, $\kappa_y=\pi_y$ as measures on every Borel subset of $\mathbb R^d$. Since $\kappa_y=T_y{}_{\#}\eta$, this proves the asserted fiber identity. [F2, step 2.1, given]

4.1 For a terminal map satisfying the ODE flow hypotheses, [F7] gives joint continuity and bijectivity of every fiber, so the exact pushforward case is covered by steps 1.1–3.1. By [F8], when $\pi$ is the proper Bayesian parameter/data joint law, the conditional kernel is a posterior version. No step uses the separate C$^1$ clause or its density formula. [F7, F8, step 1.1, step 3.1, given] ∎
