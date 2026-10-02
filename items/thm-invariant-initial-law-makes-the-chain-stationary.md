---
id: thm-invariant-initial-law-makes-the-chain-stationary
kind: theorem
title: "Invariant initial law makes a Markov chain stationary"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-iterated-transition-kernels
  - def-initial-distribution-of-a-markov-chain
  - def-stochastic-process-and-finite-dimensional-distributions
  - thm-finite-dimensional-laws-of-a-markov-chain
  - thm-dynkin-pi-lambda
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5–5.6 and §6.2, stationary chains"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $K$ be a probability kernel on a
measurable space $(E,\mathcal E)$, let $\pi$ be an invariant probability for $K$
([[def-invariant-and-stationary-distribution-for-a-markov-kernel]]), and let
$X$ be a $K$-chain with initial law $\pi$
([[def-initial-distribution-of-a-markov-chain]]). Then every finite-dimensional
law of $X$ is invariant under every nonnegative integer time shift: for every
$r\ge1$, every $0\le n_1<\cdots<n_r$ and every $m\ge0$,

$$\mathcal L(X_{m+n_1},\ldots,X_{m+n_r})=\mathcal L(X_{n_1},\ldots,X_{n_r}).$$

Equivalently, the canonical path law
$\mathbb P_X:=\mathcal L\bigl((X_n)_{n\ge0}\bigr)$ on
$(E^{\mathbb N_0},\mathcal E^{\otimes\mathbb N_0})$ is invariant under the left
shift $\theta(z)_n=z_{n+1}$.

## Facts & Assumptions

**Given:** AC, a probability kernel $K$ on $(E,\mathcal E)$, an invariant probability $\pi$ for $K$, and a $K$-chain $X$ with initial law $\pi$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used exactly through the finite-dimensional-law supplier [F3] below. ([[def-axiom-of-choice]])

[F1] $\pi$ is invariant for $K$ when $(\pi K)(A)=\int_EK(x,A)\,\pi(dx)=\pi(A)$ for every $A\in\mathcal E$, so $\pi K=\pi$ as measures. ([[def-invariant-and-stationary-distribution-for-a-markov-kernel]])

[F2] The initial law of $X$ is $\pi=\mathcal L(X_0)$, that is, $\mathbb P(X_0\in A)=\pi(A)$ for all $A\in\mathcal E$. ([[def-initial-distribution-of-a-markov-chain]])

[F3] Assume Choice. For a $K$-chain with initial law $\mu$, times $0\le n_0<\cdots<n_r$ and bounded measurable real $f_0,\ldots,f_r$, $\mathbb E\prod_{j=0}^rf_j(X_{n_j})=\int_E\mu(dx)\int_EK^{n_0}(x,dx_0)f_0(x_0)\prod_{j=1}^r\int_EK^{n_j-n_{j-1}}(x_{j-1},dx_j)f_j(x_j)$, the $n_0=0$ factor being evaluation at $x$; taking indicators $f_j=\mathbf 1_{A_j}$ gives the joint probability of the cylinder $\{X_{n_j}\in A_j,\ 0\le j\le r\}$. ([[thm-finite-dimensional-laws-of-a-markov-chain]])

[F4] $K^0$ is the identity kernel and $K^{n+1}=K^nK$ in chronological composition; each $K^n$ is a probability kernel and products of copies of $K$ are unambiguous by associativity. ([[def-iterated-transition-kernels]])

[F5] If a lambda-system $\mathcal D$ on $X$ contains a pi-system $\mathcal P$, then $\sigma_X(\mathcal P)\subseteq\mathcal D$; in particular two probability measures that agree on a pi-system generating the whole sigma-algebra agree on that sigma-algebra. ([[thm-dynkin-pi-lambda]])

[F6] The law of the process $(X_n)_{n\ge0}$ is the pushforward of $\mathbb P$ under the coordinate map, a probability measure on the product space with its product sigma-algebra; its finite-dimensional distributions are the pushforward laws of the tuples $(X_{n_1},\ldots,X_{n_r})$. ([[def-stochastic-process-and-finite-dimensional-distributions]])

## Proof

**Given:** AC, a probability kernel $K$ on $(E,\mathcal E)$, an invariant probability $\pi$ with $\pi K=\pi$, and a $K$-chain $X$ with initial law $\pi$.

**Proof technique:** first show $\pi K^m=\pi$ by induction, then compare the iterated-integral formulas for shifted and unshifted cylinder probabilities, and extend cylinder invariance to the product sigma-algebra by Dynkin's theorem.

1.1 For every $m\ge0$ one has $\pi K^m=\pi$ as probability measures: for $m=0$ this is $\pi K^0=\pi I=\pi$, and if $\pi K^m=\pi$ then associativity of iterated kernel composition gives $\pi K^{m+1}=(\pi K^m)K=\pi K=\pi$ by [F1]. [F1, F4, given]

1.2 For fixed $m$ the family $\mathcal D_m:=\{B\in\mathcal E^{\otimes\mathbb N_0}:\mathbb P_X(\theta^{-m}B)=\mathbb P_X(B)\}$ is a lambda-system: it contains $E^{\mathbb N_0}$, and $\theta^{-m}(B^c)=(\theta^{-m}B)^c$ together with $\theta^{-m}\bigl(\bigcup_lB_l\bigr)=\bigcup_l\theta^{-m}B_l$ for pairwise disjoint families give closure under complements and disjoint countable unions by additivity of the probability measure $\mathbb P_X$ of [F6]. [F5, F6, given]

2.1 Fix $m\ge0$, times $0\le n_0<\cdots<n_r$ and bounded measurable $f_0,\ldots,f_r$. [F3] applied to the shifted tuple $(m+n_0,\ldots,m+n_r)$, whose successive gaps are again $n_1-n_0,\ldots,n_r-n_{r-1}$, expresses $\mathbb E\prod_{j=0}^rf_j(X_{m+n_j})$ as $\int_E\pi(dx)\int_EK^{m+n_0}(x,dx_0)f_0(x_0)\prod_{j=1}^r\int_EK^{n_j-n_{j-1}}(x_{j-1},dx_j)f_j(x_j)$, while [F3] applied to $(n_0,\ldots,n_r)$ gives the same expression with $K^{n_0}$ in place of $K^{m+n_0}$; associativity [F4] gives $K^{m+n_0}=K^mK^{n_0}$, so step 1.1 gives $\pi K^{m+n_0}=(\pi K^m)K^{n_0}=\pi K^{n_0}$, the two outermost integrals over $\pi$ coincide, and all remaining factors are identical. [F2, F3, F4, step 1.1, given]

3.1 Taking $f_j=\mathbf 1_{A_j}$ in step 2.1 shows $\mathbb P(X_{m+n_j}\in A_j,\ 0\le j\le r)=\mathbb P(X_{n_j}\in A_j,\ 0\le j\le r)$ for all measurable $A_0,\ldots,A_r$; measurable rectangles form a pi-system generating $\mathcal E^{\otimes(r+1)}$, and by [F5] two probability measures agreeing on it agree on the whole product sigma-algebra, so $\mathcal L(X_{m+n_0},\ldots,X_{m+n_r})=\mathcal L(X_{n_0},\ldots,X_{n_r})$, which is the asserted shift invariance of every finite-dimensional law. [F3, F5, step 2.1, given]

4.1 Let $\mathbb P_X:=\mathcal L((X_n)_{n\ge0})$ be the canonical path law on $(E^{\mathbb N_0},\mathcal E^{\otimes\mathbb N_0})$ [F6], and fix $m\ge0$; for the cylinder $C=\{z:z_{n_j}\in A_j,\ 0\le j\le r\}$ one has $\theta^{-m}C=\{z:(z_{m+n_j})_j\in\prod_jA_j\}$, so step 3.1 gives $\mathbb P_X(\theta^{-m}C)=\mathbb P(X_{m+n_j}\in A_j\text{ for all }j)=\mathbb P(X_{n_j}\in A_j\text{ for all }j)=\mathbb P_X(C)$. [F6, step 3.1, given]

5.1 By step 4.1 the family $\mathcal D_m$ contains every finite-dimensional cylinder, and cylinders form a pi-system generating $\mathcal E^{\otimes\mathbb N_0}$, so [F5] gives $\mathcal D_m=\mathcal E^{\otimes\mathbb N_0}$; hence $\mathbb P_X(\theta^{-m}B)=\mathbb P_X(B)$ for every measurable $B$, and for $m=1$ the left shift preserves the canonical path law. [F5, step 4.1, step 1.2, given]

6.1 Boundary and axiom cases: if $E$ is a singleton the canonical path law is the point mass at the constant path and every shift preserves it; if $r=1$ and $m=0$ the identities in steps 2.1–3.1 are trivial; the equivalence between the finite-dimensional and canonical formulations is proved in both directions, steps 1.1–3.1 giving the finite-dimensional statement and steps 4.1–5.1 the path-space statement; and AC [A1] enters exactly through the finite-dimensional-law supplier [F3], whose statement itself assumes Choice, while the induction, the rectangle comparison and the lambda-system computation are ordinary measure-theoretic algebra. [A1, F3, step 1.1, step 3.1, step 5.1, given] ∎
