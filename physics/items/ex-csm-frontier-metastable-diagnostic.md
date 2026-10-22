---
id: ex-csm-frontier-metastable-diagnostic
kind: example
title: A finite Metropolis chain can equilibrate within a well and remain far from equilibrium
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-standard-borel-space
  - def-polish-space
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - alg-metropolis-hastings-kernel
  - thm-metropolis-hastings-kernel-is-reversible-and-invariant
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-standard-borel-space: mathematical-premise
  def-polish-space: mathematical-premise
  def-probability-measure: mathematical-premise
  def-measure-kernel-and-probability-kernel: mathematical-premise
  def-invariant-and-stationary-distribution-for-a-markov-kernel: mathematical-premise
  alg-metropolis-hastings-kernel: mathematical-premise
  thm-metropolis-hastings-kernel-is-reversible-and-invariant: mathematical-premise
justified_by: []
aliases: []
axiom_use: AC is assumed because the imported general-state Metropolis–Hastings algorithm and invariance theorem state it; the finite transition calculations themselves use only finite sums.
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: "Chapter 3, §3.1, printed pp. 80–82: finite-volume Gibbs weights and conditional distributions. The five-state barrier calculation is proved locally."
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "Chapter 3, §3.2, printed pp. 38–41: finite-state Metropolis transitions and the proposal-acceptance ratio. The five-state transition and all bottleneck bounds below are proved directly."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Assume AC. Fix $\beta>0$ in reciprocal-energy units and a finite barrier height $B>0$ in the corresponding energy unit, so $\beta B$ is dimensionless; put $\epsilon=e^{-\beta B}\in(0,1)$, and let the five states be $\Omega=\{L_0,L_1,H,R_0,R_1\}$. Equip $\Omega$ with the discrete metric $\rho(x,y)=\mathbf1_{\{x\ne y\}}$, whose Borel sigma-algebra is $2^\Omega:=\{A:A\subseteq\Omega\}$; the target and proposal are defined on the measurable carrier $(\Omega,2^\Omega)$. The energies are $E(L_0)=E(L_1)=E(R_0)=E(R_1)=0$ and $E(H)=B$, so the Gibbs law is $\pi(x)=e^{-\beta E(x)}/(4+\epsilon)$. Let $Q$ be the symmetric proposal matrix specified by
$$Q(L_i,L_i)=Q(R_i,R_i)=\frac12,\quad Q(L_i,L_{1-i})=Q(R_i,R_{1-i})=\frac14,\quad Q(L_i,H)=Q(R_i,H)=\frac14\quad(i=0,1),$$
and $Q(H,x)=1/4$ for $x\in\{L_0,L_1,R_0,R_1\}$, with all other entries zero. Each row sums to one. Apply the Metropolis–Hastings procedure with target $\pi$ and proposal $Q$, and denote its transition matrix by $P$. Write $L=\{L_0,L_1\}$ for the left well and, for each $t\in\mathbb Z_{\geq0}$, define
$$d(t)=\max_{x\in\Omega}\|P^t(x,\cdot)-\pi\|_{\rm TV},\qquad \|\mu-\nu\|_{\rm TV}=\frac12\sum_{x\in\Omega}|\mu(x)-\nu(x)|.$$
The Gibbs law is invariant, but the chain started with law $\pi(\cdot\mid L)$ has probability $(1-\epsilon/4)^t$ of making no exit from $L$ during its first $t$ steps. Conditional on no exit, its two-state within-well transition flips between $L_0$ and $L_1$ with probability $1/(4-\epsilon)$; the conditional stationary law within the well is uniform, and from either state its within-well total-variation error after $t$ such updates is at most $\frac12((2-\epsilon)/(4-\epsilon))^t\leq2^{-t-1}$. Nevertheless,
$$d(t)\geq(1-\epsilon/4)^t-\frac{2}{4+\epsilon}\geq\frac14\qquad\text{for every integer }0\leq t\leq\lfloor\epsilon^{-1}\rfloor.$$
Thus the conventional worst-start mixing time $t_{\rm mix}(1/8):=\min\{t\in\mathbb Z_{\geq0}:d(t)\leq1/8\}$ exceeds $\lfloor e^{\beta B}\rfloor$, even though the chain can equilibrate quickly within one well. This is an exact finite mathematical example; it reports no simulated or measured data.

## Example references

[[def-axiom-of-choice]]

[[def-standard-borel-space]]

[[def-polish-space]]

[[def-probability-measure]]

[[def-measure-kernel-and-probability-kernel]]

[[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[[alg-metropolis-hastings-kernel]]

[[thm-metropolis-hastings-kernel-is-reversible-and-invariant]]

## Facts & Assumptions

**Given:** $\beta>0$ in reciprocal-energy units, $B>0$ in the corresponding energy unit, the finite discrete state space $\Omega$, the target $\pi$, and proposal matrix $Q$ from the Example.

[A1] [[def-axiom-of-choice]]: AC is assumed, as required by the imported general-state Metropolis–Hastings suppliers.

[F1] [[def-standard-borel-space]]: a measurable space is standard Borel when it is measurably bijective to a Polish space's Borel measurable space.

[F2] [[def-polish-space]]: a topological space is Polish when it is separable and its topology is induced by a complete metric.

[F3] [[def-probability-measure]]: a probability measure has total mass one.

[F4] [[def-measure-kernel-and-probability-kernel]]: a probability kernel is a measurable family of probability measures, with mass one at every source state.

[F5] [[alg-metropolis-hastings-kernel]]: on a standard Borel space with target probability $\pi$ and proposal probability kernel $Q$, the procedure accepts the common part of the forward and reversed proposal flows and retains rejected mass as a self-transition.

[F6] [[thm-metropolis-hastings-kernel-is-reversible-and-invariant]]: under the algorithm's hypotheses, its output is a probability kernel and $\pi$ is invariant; the supplier asserts no irreducibility, uniqueness, convergence-rate, or mixing-time conclusion.

[F7] [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]: invariance means $\pi P=\pi$, or on this finite space $\pi(y)=\sum_x\pi(x)P(x,y)$ for every $y$.

## Verification
**Given:** AC, the finite target and symmetric proposal, and the imported Metropolis–Hastings algorithm and invariance result.

1.1 The finite discrete metric on $\Omega$ is complete and separable, so [F2] makes it Polish; the identity map then verifies [F1]. The weights sum to $4+\epsilon$, so $\pi$ is a probability measure by [F3]. Each row of $Q$ is nonnegative and sums to one, and on a finite discrete space every function is measurable; thus [F4] makes $Q$ a probability kernel. Consequently the inputs satisfy [F5]. [A1, F1, F2, F3, F4, F5, algebra]

2.1 For states $x,y$ with $Q(x,y)>0$, the forward proposal-flow mass is $\mu(x,y)=\pi(x)Q(x,y)$ and the reversed mass is $\mu^{\mathsf T}(x,y)=\pi(y)Q(y,x)$. On a finite set the greatest measure dominated by both has point mass $\min\{\mu(x,y),\mu^{\mathsf T}(x,y)\}$, so [F5] accepts with probability $\min\{1,\pi(y)Q(y,x)/(\pi(x)Q(x,y))\}$. Symmetry of $Q$ reduces this to $\min\{1,e^{-\beta(E(y)-E(x))}\}$. Hence each $L_i$ and $R_i$ jumps to its partner with probability $1/4$, jumps to $H$ with probability $\epsilon/4$, and stays put with probability $3/4-\epsilon/4$; from $H$ it jumps to each of the four well states with probability $1/4$. [F1, F5, step 1.1, algebra]

3.1 By [F6] and [F7], $\pi$ is invariant for $P$. Also $P^4(x,y)>0$ for all $x,y$: every state reaches $L_0$ in at most two positive-probability transitions, $L_0$ reaches every state in at most two, and any unused steps can be filled by the positive self-transition at $L_0$. Since $\Omega$ is finite, let $\kappa=\min_{x,y}P^4(x,y)>0$, $N=|\Omega|=5$, and $\lambda=N\kappa\in(0,1]$. If $\lambda<1$, each row of $P^4$ is $\lambda$ times the uniform law plus $1-\lambda$ times a probability row. For $\Delta=\mu-\nu$ with total mass zero, its positive and negative parts each have mass $\|\mu-\nu\|_{\rm TV}$; since every residual row assigns a number in $[0,1]$ to an event, integration against $\Delta$ is bounded in absolute value by $\|\mu-\nu\|_{\rm TV}$. Thus for every two laws $\mu,\nu$, $\|\mu P^4-\nu P^4\|_{\rm TV}\leq(1-\lambda)\|\mu-\nu\|_{\rm TV}$. If $\lambda=1$, all rows are uniform. Therefore $\pi$ is the unique invariant law and the chain converges to it. [F6, F7, step 2.1, algebra]

3.2 The target assigns equal mass $1/(4+\epsilon)$ to $L_0,L_1$, so $\pi(\cdot\mid L)$ is uniform and $\pi(L)=2/(4+\epsilon)$. From either state in $L$, the exit probability to $H$ is $\epsilon/4$, while the transition to the other state of $L$ has probability $1/4$. Conditioning a step on no exit gives flip probability $(1/4)/(1-\epsilon/4)=1/(4-\epsilon)$ and stay probability $(3-\epsilon)/(4-\epsilon)$. This symmetric two-state chain preserves the uniform law and has nonconstant eigenvalue $(2-\epsilon)/(4-\epsilon)\leq1/2$, giving the stated within-well total-variation bound. The exit probability is constant across both states, so survival for $t$ steps has probability $(1-\epsilon/4)^t$. [step 2.1, algebra]

4.1 Survival implies $X_t\in L$, so for the initial law $\pi(\cdot\mid L)$, $\Pr(X_t\in L)\geq(1-\epsilon/4)^t$. On a finite space, if $\Delta=\mu-\nu$ has total mass zero then $\sup_A|\Delta(A)|=\frac12\sum_x|\Delta(x)|$, so the event $L$ gives $$\|\pi(\cdot\mid L)P^t-\pi\|_{\rm TV}\geq(1-\epsilon/4)^t-\pi(L).$$ For any mixture of starting states, the half-$\ell^1$ triangle inequality bounds its distance from $\pi$ by the largest component distance. Since $\pi(\cdot\mid L)P^t$ is the mixture of $P^t(L_0,\cdot)$ and $P^t(L_1,\cdot)$ with weights $1/2$, it follows that $d(t)\geq(1-\epsilon/4)^t-2/(4+\epsilon)$. If $t\leq\lfloor\epsilon^{-1}\rfloor$, Bernoulli's inequality gives $(1-\epsilon/4)^t\geq1-t\epsilon/4\geq3/4$, while $2/(4+\epsilon)<1/2$; hence $d(t)\geq1/4>1/8$. The definition of $t_{\rm mix}(1/8)$ therefore gives the claimed lower bound. [F3, F7, step 3.2, algebra] ∎
