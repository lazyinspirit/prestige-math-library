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
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-finite-and-countable-subadditivity-of-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
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

[F2] For $w\ne0$, the pullback of a one-dimensional Lebesgue-null set under $x\mapsto w\cdot x+b$ is Lebesgue null ([[lem-linear-ridge-pullback-of-null-sets-is-null]]).

[F3] Every nondegenerate interval has positive one-dimensional Lebesgue measure ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] A finite union of measurable null sets is null by finite subadditivity ([[thm-finite-and-countable-subadditivity-of-measures]]).

[A1] Countable Choice means every sequence of nonempty sets has a function choosing one element from each ([[def-countable-choice]]); it is assumed in [F2].

## Proof

1.1 Restrict each unit of $N$ to $te_1$. If its first weight coordinate is zero, that unit is constant in $t$. If that coordinate is nonzero, [F2] says the set of $t$ for which its preactivation lies in $E$ is null. There are finitely many units, so their union is null by [F4] and cannot contain a nondegenerate interval by [F3]. Every nonempty relatively open subset of $[0,1]$ contains a nondegenerate interval, so the complement is dense in $[0,1]$. On this dense complement every nonconstant unit equals $p(w_{j1}t+b_j)$. Thus $N(te_1)$ agrees there with a polynomial $P_N(t)$ of degree at most $q$; the constant units are absorbed into its constant term. [given, F1, F2, F3, F4, A1, algebra]

2.1 Suppose $\sup_{0\le t\le1}|N(te_1)-t^{q+1}|<\varepsilon_q$. On the dense subset from step 1.1, $|P_N(t)-t^{q+1}|<\varepsilon_q$; continuity of both polynomials extends the weak bound $\le\varepsilon_q$ to all of $[0,1]$. [step 1.1, algebra]

3.1 Put $h=1/(q+1)$ and evaluate the $(q+1)$st forward difference at $t=0$. Its nodes are $jh$ for $0\le j\le q+1$, all in $[0,1]$. The forward-difference operation $Q(t)\mapsto Q(t+h)-Q(t)$ lowers the degree of every nonconstant polynomial by one and multiplies its leading coefficient by its degree times $h$. Iterating it $q+1$ times therefore annihilates $P_N$ and gives $(q+1)!h^{q+1}$ on $t^{q+1}$. The approximation bound [step 2.1] makes the absolute value of the resulting error sum at most $2^{q+1}\varepsilon_q$, since the binomial coefficients sum to $2^{q+1}$. But this is half of $(q+1)!h^{q+1}$ by the definition of $\varepsilon_q$, a contradiction. [step 2.1, algebra]

4.1 Hence no network attains the stated error on this target, so the family is not uniformly dense on $K$. The argument includes $q=0$, where it says constants cannot approximate $t$ to arbitrary accuracy. [step 3.1, given] ∎

