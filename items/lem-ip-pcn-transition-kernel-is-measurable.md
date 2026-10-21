---
id: lem-ip-pcn-transition-kernel-is-measurable
kind: lemma
title: The pCN accept-reject procedure defines a probability kernel
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - alg-ip-prior-preserving-crank-nicolson
  - def-borel-sigma-algebra
  - def-measure-kernel-and-probability-kernel
  - def-metric-ball
  - def-metric-topology
  - def-norm-and-normed-space
  - def-separable-space
  - def-second-countable-space
  - def-real-exponential-function-and-e
  - lem-borel-product-of-second-countable-spaces
  - lem-rat-embeds-dense
  - lem-subset-of-countable
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-exponential-is-strictly-increasing
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-measurability-of-integration-against-a-kernel
  - thm-metric-open-set-algebra
  - thm-product-of-countable
  - thm-rationals-countable
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice is used to prove kernel measurability or the pointwise probability property once the algorithm inputs are supplied."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "S. L. Cotter, G. O. Roberts, A. M. Stuart, and D. White, MCMC Methods for Functions: Modifying Old Algorithms to Make Them Faster, Statistical Science 28(3) (2013)"
      url: "https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf"
      locator: "§4.2, equation (4.7); §6.1, Theorem 6.2."
    - title: "Yury Korolev and Jonas Latz, Inverse Problems: Lecture Notes, Michaelmas Term 2020 (University of Cambridge, 18 May 2021)"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2020/LectureNotes2020.pdf"
      locator: "Chapter 8, §8.2, Definition 8.2.3 and Proposition 8.2.4."
---

## Statement

Under the inputs and instructions of the prior-preserving Crank–Nicolson
algorithm, for every $\beta\in[0,1]$ its proposal rule is a Borel probability
kernel and its accept-reject transition $P_\beta$ is a Borel probability
kernel on $H$.

## Statement references

[[alg-ip-prior-preserving-crank-nicolson|The proposal and accept-reject instructions, including the extended potential convention.]]

[[def-measure-kernel-and-probability-kernel|A probability kernel has probability-measure rows and measurable event evaluations.]]

## Facts & Assumptions

**Given:** The inputs of [[alg-ip-prior-preserving-crank-nicolson]], a scale $\beta\in[0,1]$, the proposal $v=\sqrt{1-\beta^2}u+\beta\xi$, and the acceptance function specified there.

[F1] The algorithm supplies Borel $D$ and $\Phi_D$, extends $\Phi_D$ by $+\infty$ off $D$, proposes $\rho u+\beta\xi$ with independent $\xi\sim\mu_0$, and sets acceptance to zero when either potential value is infinite. [[alg-ip-prior-preserving-crank-nicolson]]

[F2] A probability kernel has probability-measure rows and measurable event evaluations. [[def-measure-kernel-and-probability-kernel]]

[F3] Integrating a nonnegative product-measurable function against a probability kernel gives a measurable function of the source point. [[thm-measurability-of-integration-against-a-kernel]]

[F4] For a measure $\lambda$ and nonnegative measurable function $f$, the set function $A\mapsto\int_A f\,d\lambda$ is a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]

[F5] The preimage of a Borel set under a continuous map is Borel. [[thm-continuous-preimages-of-borel-sets-are-borel]]

[F6] Since $H$ is separable by the algorithm, let $D$ be a countable dense subset. The norm topology is the induced metric topology, whose positive-radius balls are open; the norm balls with centers in $D$ and positive rational radii are countable and form a base: if $x\in U$ with $U$ open, choose $r>0$ with $B(x,r)\subseteq U$, then choose $d\in D$ with $\|d-x\|<r/3$ and a rational $s$ with $\|d-x\|<s<r-\|d-x\|$; the triangle inequality gives $x\in B(d,s)\subseteq U$. Thus $H$ is second-countable. The Borel sigma- algebra on $H\times H$ therefore equals $\mathcal B(H)\otimes\mathcal B(H)$. [[alg-ip-prior-preserving-crank-nicolson]] [[def-separable-space]] [[def-second-countable-space]] [[thm-product-of-countable]] [[thm-rationals-countable]] [[lem-rat-embeds-dense]] [[def-norm-and-normed-space]] [[def-metric-ball]] [[def-metric-topology]] [[thm-metric-open-set-algebra]] [[lem-subset-of-countable]] [[lem-borel-product-of-second-countable-spaces]]

[F7] Composing a measurable function with a Borel scalar function preserves measurability; the real exponential is continuous by the supplied smoothness result, and finite arithmetic and lattice operations preserve measurability. [[thm-composition-with-borel-functions-preserves-measurability]] [[thm-exponential-is-strictly-increasing]] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]

## Proof

**Given:** The hypotheses and algorithm inputs in the Statement.

1.1 For each Borel set $B$ in the extended potential range, the preimage $\bar\Phi^{-1}(B)$ is the union of $D\cap\Phi_D^{-1}(B)$ and $H\setminus D$ when $+\infty\in B$, and is just $D\cap\Phi_D^{-1}(B)$ otherwise. Since $D$ is Borel and $\Phi_D$ is Borel on the trace Borel structure of $D$, every such preimage is Borel in $H$. Thus the extended potential used by the algorithm is Borel. [F1, given, algebra]

1.2 Write $\rho=\sqrt{1-\beta^2}$ and define $Q_\beta(u,B)=\int_H\mathbf1_B(\rho u+\beta z)\,\mu_0(dz)$ for Borel $B\subseteq H$. For fixed $u$, this is the pushforward of the probability $\mu_0$ under the continuous map $z\mapsto\rho u+\beta z$, so it is a probability measure in $B$. The joint map $(u,z)\mapsto\rho u+\beta z$ is continuous; by [F6], its Borel preimages are product-measurable for $\mathcal B(H)\otimes\mathcal B(H)$. Hence $(u,z)\mapsto\mathbf1_B(\rho u+\beta z)$ is product-measurable. The constant kernel $u\mapsto\mu_0$ is a probability kernel, so [F3] makes $u\mapsto Q_\beta(u,B)$ measurable. Therefore $Q_\beta$ is a probability kernel by [F2]. [F1, F2, F3, F5, F6, given, construct]

2.1 The finite-potential set $E=\{u:\bar\Phi(u)<+\infty\}$ is Borel by step 1.1. The coordinate projections on $H\times H$ are continuous and hence Borel by [F5]; [F6] identifies their source Borel sigma-algebra with the product sigma-algebra. Composing them with the Borel $\bar\Phi$ makes $(u,v)\mapsto\bar\Phi(u)$ and $(u,v)\mapsto\bar\Phi(v)$ Borel. On $E\times E$ their difference is real- valued and Borel, and [F7] makes its exponential Borel. Extending $\min\{1,\exp(\bar\Phi(u)-\bar\Phi(v))\}$ by $0$ off $E\times E$ therefore makes the algorithm's $\alpha$ a Borel function with values in $[0,1]$. Put $a(u)=\int_H\alpha(u,v)Q_\beta(u,dv)$. By [F3], $a$ is measurable; the probability rows of $Q_\beta$ give $0\le a(u)\le1$. [F1, F2, F3, F5, F6, F7, step 1.1, step 1.2, given]

3.1 For each $u$ and Borel $A\subseteq H$, define $$P_\beta(u,A)=\int_A\alpha(u,v)Q_\beta(u,dv)+\mathbf1_A(u)(1-a(u)).$$ The first term is a measure in $A$ by [F4] and step 2.1. The second term is also a measure: among any pairwise-disjoint sequence of sets, at most one contains $u$, so the indicator of their union is the sum of their indicators at $u$. Their sum has total mass $a(u)+1-a(u)=1$. For fixed $A$, the first term is measurable in $u$ by [F3], and the second is measurable because both $\mathbf1_A(u)$ and $a(u)$ are measurable. Thus $P_\beta$ is a probability kernel by [F2]. [F2, F3, F4, step 2.1, construct, algebra]

4.1 Steps 1.1, 1.2, 2.1, and 3.1 establish that the potential extension, the proposal, the acceptance function, and the accept-reject transition have the claimed Borel and probability properties. [step 1.1, step 1.2, step 2.1, step 3.1] ∎

