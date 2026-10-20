---
id: lem-polynomial-activation-bounded-degree-obstruction
kind: lemma
title: "Polynomial activations have a bounded-degree obstruction"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-countable-choice
  - def-single-hidden-layer-network
  - lem-linear-ridge-pullback-of-null-sets-is-null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, proof of Theorem 1, Step 1"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
---

## Statement

Assume Countable Choice. Let $d\ge1$, $q\in\mathbb N_0$, and let $\sigma:\mathbb R\to\mathbb R$ be measurable and equal almost everywhere to a polynomial of degree at most $q$ (including the zero polynomial). For every finite single-hidden-layer network with activation $\sigma$, its restriction to the segment $K=\{te_1:0\le t\le1\}\subset\mathbb R^d$ cannot approximate the target $f(te_1)=t^{q+1}$ uniformly with error less than

$$\varepsilon_q=\frac{(q+1)!}{2^{q+2}(q+1)^{q+1}}>0.$$

Consequently these networks are not uniformly dense in $C(K,\mathbb R)$.

## Statement references

[Leshno et al., proof of Theorem 1, polynomial-activation obstruction](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

## Facts & Assumptions

**Given:** Countable Choice, $d\ge1$, a measurable activation $\sigma=p$ outside a Lebesgue-null set $E$, and a finite network $N\in\mathcal N_\sigma^{(d)}$.

[F1] A single-hidden-layer network is $c+\sum_{j=1}^m a_j\sigma(w_j\cdot x+b_j)$ with finite width and arbitrary real parameters ([[def-single-hidden-layer-network]]).

[F2] For $w\ne0$, the pullback of a one-dimensional Lebesgue-null set under $x\mapsto w\cdot x+b$ is null; in dimension one its complement is dense in every interval ([[lem-linear-ridge-pullback-of-null-sets-is-null]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]); it is assumed in [F2].

## Proof

1.1 Restrict each unit of $N$ to $te_1$. If its first weight coordinate is zero, that unit is constant in $t$. If that coordinate is nonzero, [F2] says the set of $t$ for which its preactivation lies in $E$ is null. There are finitely many units, so outside their finite union of null sets, a dense subset of $[0,1]$, every nonconstant unit equals $p(w_{j1}t+b_j)$. Thus on a dense subset $N(te_1)$ agrees with a polynomial $P_N(t)$ of degree at most $q$; the constant units are absorbed into its constant term. [given, F1, F2, A1, algebra]

2.1 Suppose $\sup_{0\le t\le1}|N(te_1)-t^{q+1}|<\varepsilon_q$. On the dense subset from step 1.1, $|P_N(t)-t^{q+1}|<\varepsilon_q$; continuity of both polynomials extends the weak bound $\le\varepsilon_q$ to all of $[0,1]$. [step 1.1, algebra]

3.1 Put $h=1/(q+1)$. The forward-difference operation $Q(t)\mapsto Q(t+h)-Q(t)$ lowers the degree of every nonconstant polynomial by one and multiplies its leading coefficient by its degree times $h$. Iterating it $q+1$ times therefore annihilates $P_N$ and gives $(q+1)!h^{q+1}$ on $t^{q+1}$. The resulting sum is bounded using [step 2.1] by $2^{q+1}\varepsilon_q$, since the binomial coefficients sum to $2^{q+1}$. But this is half of $(q+1)!h^{q+1}$ by the definition of $\varepsilon_q$, a contradiction. [step 2.1, algebra]

4.1 Hence no network attains the stated error on this target, so the family is not uniformly dense on $K$. The argument includes $q=0$, where it says constants cannot approximate $t$ to arbitrary accuracy. [step 3.1, given] ∎

