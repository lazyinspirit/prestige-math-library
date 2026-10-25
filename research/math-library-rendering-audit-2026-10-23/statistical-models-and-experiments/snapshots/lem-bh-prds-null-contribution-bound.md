---
id: lem-bh-prds-null-contribution-bound
kind: lemma
title: "A PRDS bound for each BH true-null contribution"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - alg-benjamini-hochberg-step-up-procedure
  - def-prds-on-true-null-coordinates
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - lem-step-up-leave-one-out-rejection-partition
  - def-subspace-topology-top
  - lem-rat-embeds-dense
  - lem-real-line-is-a-metric-space
  - thm-finite-and-countable-subadditivity-of-measures
  - lem-countable-iff-surjection-from-n
  - thm-product-of-countable
  - thm-rationals-countable
  - def-null-valid-p-value-and-fwer-fdr
  - def-conditional-law-given-a-random-element
  - cor-expectation-of-an-indicator-is-probability
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Yoav Benjamini and Daniel Yekutieli, The Control of the False Discovery Rate in Multiple Testing under Dependency, The Annals of Statistics 29(4) (2001), Section 4, PDF pp. 13–16"
      url: "https://www.researchgate.net/publication/38348313_The_control_of_the_false_discovery_rate_in_multiple_testing_under_dependency"
    - title: "Yoav Benjamini, Discovering the False Discovery Rate, full 75-slide lecture, slides 31–35"
      url: "https://sites.uclouvain.be/IAP-Stat-Phase-V-VI/PhaseV/download/Leoven1.pdf"
---

## Statement

Let $P=(P_1,\ldots,P_m)$ be p-value random variables in a probability space, let $m\ge1$, $q\in(0,1)$, and fix an index $i$ in a designated true-null set $I_0$. Suppose $P_i$ is valid under this law and the law of $P$ is PRDS on $I_0$ as defined in [[def-prds-on-true-null-coordinates]]. Apply BH at level $q$, and let $I_i$ indicate that $i$ is rejected and $R$ be the total number rejected. Then

$$\mathbb E\!\left[\frac{I_i}{R\vee1}\right]\le\frac qm.$$

## Facts & Assumptions

**Given:** A finite vector of p-values, a fixed true-null set containing $i$, $q\in(0,1)$, validity of $P_i$, and PRDS on that set. The PRDS conditional-law existence convention carries the Axiom of Choice as stated in [[def-prds-on-true-null-coordinates]].

[F1] [[def-prds-on-true-null-coordinates]]: for each $i\in I_0$ and each increasing Borel $D\subseteq[0,1]^m$, there is a regular conditional-law version $K_i(x,D)$ that is nondecreasing on the support of $P_i$.

[F2] [[lem-step-up-leave-one-out-rejection-partition]]: for $c_k=kq/m$, the events $\{I_i=1,R=k\}$ are $\{P_i\le c_k\}\cap\{P_{-i}\in C_{i,k}\}$; the sets $C_{i,k}$ partition the remaining-coordinate space, and $D_{i,k}:=\bigcup_{j\le k}C_{i,j}$ are increasing Borel sets with $D_{i,m}$ the whole space.

[F3] [[def-null-valid-p-value-and-fwer-fdr]]: validity means $P(P_i\le u)\le u$ for every $u\in[0,1]$ under the corresponding true-null law.

[F4] [[def-conditional-law-given-a-random-element]]: if $K_i$ is a conditional law of $P$ given $P_i$, then for every Borel event $D$, $P(P_i\in A, P\in D)=\int_A K_i(x,D)\,P_{P_i}(dx)$ for Borel $A\subseteq[0,1]$.

[F5] [[cor-expectation-of-an-indicator-is-probability]]: an event indicator has expectation equal to its probability.

[F6] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: expectation is linear on finite sums of integrable terms.

[F7] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation of a bounded measurable random variable is its integral under the law.

[F8] The usual topology of $\mathbb R$ has interval neighborhoods, relatively open subsets of $[0,1]$ are traces of open subsets of $\mathbb R$, the rationals are dense and countable, products of two countable sets are countable, and measures are countably subadditive ([[lem-real-line-is-a-metric-space]], [[def-subspace-topology-top]], [[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[thm-product-of-countable]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[F9] Every nonempty at-most-countable set has a surjection from $\mathbb N$ ([[lem-countable-iff-surjection-from-n]]).

[A1] The conditional-law version in [F1] has the monotonicity required by PRDS on the support of the marginal law of $P_i$.

[A2] The standard-Borel conditional-law existence interface is used under the Axiom of Choice ([[def-axiom-of-choice]]) as recorded in [[def-prds-on-true-null-coordinates]].

## Proof

**Proof technique:** decompose by the rejection count and use PRDS to fold the conditional event probabilities.

**Given:** $m,q,P,I_0,i$ as in the Statement.

1.1 Put $c_k=kq/m$, $A_k:=\{P_i\le c_k\}$, and $B_{i,k}:=\{P_{-i}\in C_{i,k}\}$. If $P(A_k)>0$, set $a_k:=P(A_k\cap B_{i,k})/P(A_k)$; otherwise set $a_k=0$. By [F2], $I_i/(R\vee1)=\sum_{k=1}^m k^{-1}\mathbf1_{A_k\cap B_{i,k}}$. The terms are bounded and the sum is finite, so [F5]–[F7] give $\mathbb E[I_i/(R\vee1)]=\sum_{k=1}^m(P(A_k)/k)a_k$; a zero-probability $A_k$ contributes zero by the definition of $a_k$. [F2, F5, F6, F7, given, construct]

1.2 For each $k$, lift $D_{i,k}$ to $\widetilde D_{i,k}:=\{p\in[0,1]^m:p_{-i}\in D_{i,k}\}$. The coordinate-deletion map from $[0,1]^m$ to the remaining-coordinate product is measurable: the preimage of each measurable rectangle is a finite intersection of coordinate cylinders, and such rectangles generate the product sigma-algebra. Hence $\widetilde D_{i,k}$ is Borel, and it is coordinatewise increasing. Let $g_k(x):=K_i(x,\widetilde D_{i,k})$, nondecreasing on the support by [F1] and [A1]; the kernel exists on this standard-Borel interface under [A2]. [F1, A1, A2, F2, given]

1.3 Write $S_i=\operatorname{supp}(\mu_i)$. The family $\mathcal U:=\{(a,b)\cap[0,1]:a,b\in\mathbb Q,\ a<b\}$ is a basis for the relative topology on $[0,1]$. If $U$ is relative open and $x\in U$, write $U=O\cap[0,1]$ with $O$ open in $\mathbb R$ by [F8]; choose $\varepsilon>0$ with $(x-\varepsilon,x+\varepsilon)\subseteq O$ using [F8], then use rational density from [F8] to choose $a,b\in\mathbb Q$ with $x-\varepsilon<a<x<b<x+\varepsilon$. Thus $x\in(a,b)\cap[0,1]\subseteq U$. Since $\mathbb Q\times\mathbb Q$ is nonempty and at most countable by [F8], [F9] gives an enumeration $((a_n,b_n))_{n\in\mathbb N}$ of it, whose interval images enumerate $\mathcal U$; hence the basis is countable. Let $E_n=(a_n,b_n)\cap[0,1]$ if $a_n<b_n$ and $\mu_i((a_n,b_n)\cap[0,1])=0$, and $E_n=\varnothing$ otherwise. By the definition of support in [[def-prds-on-true-null-coordinates]], $$[0,1]\setminus S_i=\bigcup_{n\in\mathbb N}E_n.$$ Indeed, a point outside the support has a relative open null neighborhood and hence a basis neighborhood contained in it, which occurs in the enumeration; conversely, membership in any such null basis neighborhood excludes support membership. The right-hand side is a countable union of null Borel sets, so [F8] gives $\mu_i([0,1]\setminus S_i)=0$. Thus $S_i$ is Borel and $\mu_i(S_i)=1$. [F1, F8, F9, given, construct]

2.1 By [F4], whenever $P(A_k)>0$, $$\frac{P(A_k\cap\{P_{-i}\in D_{i,k}\})}{P(A_k)}=\frac{\int_{[0,c_k]}g_k(x)\,\mu_i(dx)}{\mu_i([0,c_k])}.$$ For fixed $k<m$, this average is at most the corresponding average over $[0,c_{k+1}]$. By step 1.3, both averages may be restricted to $S_i$ without changing them. Every supported $x\le c_k$ is below every supported $y\in(c_k,c_{k+1}]$, so $g_k(x)\le g_k(y)$ by [F1] and [A1]. The larger-cutoff average is a mixture of the first average and the average over the added interval; the latter is at least the first whenever it has positive mass, and if it has zero mass the two averages agree. [F1, A1, F4, F2, step 1.3, given, algebra]

2.2 By [F3], $P(A_k)\le c_k=kq/m$ for every $k$. Substituting into step 1.1 yields $\mathbb E[I_i/(R\vee1)]\le(q/m)\sum_{k=1}^m a_k$. [F3, step 1.1, algebra]

3.1 Let $k_0$ be the first index with $P(A_{k_0})>0$, if one exists; then $a_j=0$ for $j<k_0$, and $C_{i,k_0}\subseteq D_{i,k_0}$ gives $a_{k_0}\le P(P_{-i}\in D_{i,k_0}\mid A_{k_0})\le1$ by step 2.1. For $k>k_0$, suppose $\sum_{j<k}a_j\le P(P_{-i}\in D_{i,k-1}\mid A_{k-1})$. Since $P(A_{k-1})>0$ and $A_{k-1}\subseteq A_k$, step 2.1 applied to the nondecreasing $g_{k-1}$ makes this at most $P(P_{-i}\in D_{i,k-1}\mid A_k)$. Also $P(A_k)>0$, so [F4] gives $a_k=P(P_{-i}\in C_{i,k}\mid A_k)$. The disjoint union $D_{i,k}=D_{i,k-1}\,\dot\cup\,C_{i,k}$ from [F2] then yields $\sum_{j\le k}a_j\le P(P_{-i}\in D_{i,k}\mid A_k)$, completing the induction. [F2, F4, step 1.1, step 2.1, given, algebra]

4.1 If $k_0$ exists, step 3.1 at $k=m$ and $D_{i,m}$ equal to the whole space give $\sum_{k=1}^ma_k\le1$. If no such $k_0$ exists, all $P(A_k)=0$ and every $a_k=0$, so the same bound holds. Substituting into step 2.2 proves the contribution inequality. [F2, step 2.2, step 3.1, algebra] ∎

## Remarks

The algebraic contribution bound uses only the PRDS monotonicity for the finite family of sets $\widetilde D_{i,k}$. The inherited Axiom of Choice is used to formulate the standard-Borel conditional-law interface; no choice is used in the finite event decomposition or induction.
