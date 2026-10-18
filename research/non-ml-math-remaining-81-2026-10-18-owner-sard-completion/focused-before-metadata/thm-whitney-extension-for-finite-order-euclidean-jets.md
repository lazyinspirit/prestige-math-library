---
id: thm-whitney-extension-for-finite-order-euclidean-jets
kind: theorem
title: Whitney extension for finite-order Euclidean jets
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multivariable-taylor-formula-with-lagrange-remainder]
proof_strategy: direct
sources:
  references:
    - title: "Hassler Whitney, Analytic Extensions of Differentiable Functions Defined in Closed Sets, Transactions of the AMS 36 (1934), Theorem I"
      url: "https://www.jstor.org/stable/1989708"
    - title: "Azagra, Ferrera and Gómez-Gil, The Morse-Sard theorem revisited, Section 2, arXiv:1511.05822"
      url: "https://arxiv.org/pdf/1511.05822"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical new_item review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $d,N\ge1$, let $A$ be a closed subset of $\mathbb R^d$, $r$ a nonnegative integer,
and, for each $a\in A$, let $P_a$ be a polynomial of degree at most $r$
with values in $\mathbb R^N$. Suppose that on each compact part of $A$,
for every multi-index $|\alpha|\le r$,
$$D^\alpha P_a(b)-D^\alpha P_b(b)=o(|a-b|^{r-|\alpha|})\quad(a,b\in A,\ |a-b|\to0)$$
uniformly in $a,b$. Then there is a $C^r$ map
$H:\mathbb R^d\to\mathbb R^N$ whose order-$r$ Taylor polynomial at
each $a\in A$ is $P_a$. The construction needs no choice axiom.

## Facts & Assumptions

**Given:** The closed set, integer order, and compatible polynomial jets of the statement.

[F1] Ordinary finite-order Taylor estimates apply to the polynomial jets and smooth cutoff functions ([[thm-multivariable-taylor-formula-with-lagrange-remainder]]).

## Proof

**Proof technique:** explicit dyadic Whitney-cube construction.

1.1 The cases $A=\varnothing$ and $A=\mathbb R^d$ are immediate: use zero in the first case, and in the second define $H(a)=P_a(a)$; the compatibility condition is precisely the Taylor criterion for its derivatives $D^\alpha H(a)=D^\alpha P_a(a)$. Assume $A$ is nonempty and proper. Subdivide the standard integer-translated dyadic grid into closed cubes. Retain every dyadic cube $Q\subset\mathbb R^d\setminus A$ satisfying $4\sqrt d\,\ell(Q)\le\operatorname{dist}(Q,A)$ which is maximal under dyadic parent inclusion. Every $z\notin A$ belongs to the closure of one of these cubes: arbitrarily small cubes about $z$ satisfy the inequality, while sufficiently large ancestors fail it. Their interiors are disjoint. A retained cube has $4\sqrt d\,\ell(Q)\le\operatorname{dist}(Q,A)\le10\sqrt d\,\ell(Q)$: the upper bound follows because its parent fails the retention test and every point of the parent lies within $2\sqrt d\,\ell(Q)$ of $Q$. Consequently cubes whose fixed small enlargements meet have comparable side lengths, and only a dimension-dependent bounded number of those enlargements meet any one point. All cubes are obtained from a countable, explicitly ordered grid. [given, construct, algebra]

2.1 Fix one nonnegative $C^\infty$ bump on the unit cube, equal to one on that cube and supported in its concentric $9/8$ enlargement. Rescale it to each retained cube to get $\phi_Q$. Set $\psi_Q=\phi_Q/\sum_R\phi_R$ on $\mathbb R^d\setminus A$. The denominator is at least one because the cubes cover the complement, and the sum is locally finite by step 1.1. Thus $\sum_Q\psi_Q=1$ and $|D^\alpha\psi_Q|\le C_\alpha\ell(Q)^{-|\alpha|}$; the constants are locally uniform because intersecting enlarged cubes have comparable sizes and bounded overlap. For each cube choose the nearest point $a_Q\in A$ to its centre, breaking ties by successive minimum coordinates on the compact nearest-point set. This specifies $a_Q$ without arbitrary selections. Define $H(z)=\sum_Q\psi_Q(z)P_{a_Q}(z)$ off $A$, and $H(a)=P_a(a)$ on $A$. [step 1.1, construct, algebra]

3.1 Fix $a\in A$ and let $z\to a$ through the complement. Write $t=\operatorname{dist}(z,A)$ and choose its lexicographically first nearest point $a_z$. If $\psi_Q(z)\ne0$, step 1.1 gives $\ell(Q)\asymp t$ and $|a_Q-a_z|=O(t)$. Taylor expansion of the polynomial $P_{a_Q}-P_{a_z}$ about $a_z$, combined with the assumed compatibility of every derivative order, gives $$D^\beta(P_{a_Q}-P_{a_z})(z)=o(t^{r-|\beta|}) \qquad(|\beta|\le r),$$ locally uniformly as $z\to a$. Differentiating the partition sum and using $\sum_Q\psi_Q=1$ and the derivative bound in step 2.1 yields $$D^\alpha H(z)-D^\alpha P_{a_z}(z) =\sum_Q\sum_{\beta\le\alpha}{\alpha\choose\beta} D^{\alpha-\beta}\psi_Q(z) D^\beta(P_{a_Q}-P_{a_z})(z) =o(t^{r-|\alpha|})$$ for $|\alpha|\le r$. There are only boundedly many terms at $z$, and each has the displayed order. [F1, step 1.1, step 2.1, given, algebra]

4.1 Compatibility again gives $D^\alpha P_{a_z}(z)-D^\alpha P_a(z)=o(|z-a|^{r-|\alpha|})$: $|a_z-a|\le2|z-a|$, and the polynomial Taylor sum converts every jet discrepancy into that bound. Since $t\le|z-a|$, step 3.1 implies $D^\alpha H(z)-D^\alpha P_a(z)=o(|z-a|^{r-|\alpha|})$ as $z\to a$ through the complement. The same estimate at points of $A$ is exactly the given compatibility. Starting with $|\alpha|=0$, these estimates prove by induction that each derivative of order at most $r$ extends continuously across $A$ with value $D^\alpha P_a(a)$: for $|\alpha|<r$ subtract the linear part of $P_a$ and divide by $|z-a|$ to verify differentiability, and for $|\alpha|=r$ use the zero-order continuity estimate. Thus $H\in C^r$ and has the required jets. Every selection in the construction was by an ordered grid or a compact-set coordinate minimum. [step 2.1, step 3.1, given, algebra] ∎
