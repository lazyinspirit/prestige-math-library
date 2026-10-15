---
id: lem-countable-iid-baseb-digits-from-one-uniform
kind: lemma
title: "A single uniform variable supplies countably many independent base-$b$ digits"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - thm-dynkin-pi-lambda
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - lem-geometric-sequence-null
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Statement

Let $b\ge2$ be an integer and let $U$ be uniform on $[0,1)$ with Lebesgue
probability measure. Its base-$b$ digits
$D_j=\lfloor b^jU\rfloor-b\lfloor b^{j-1}U\rfloor$ are mutually independent
uniform digits in $\{0,\ldots,b-1\}$. There is a deterministic enumeration
$\phi:\mathbb N_{>0}^2\to\mathbb N_{>0}$ such that
$$\widetilde U_q:=\sum_{k=1}^{\infty}D_{\phi(q,k)}b^{-k},\qquad U_q:=\begin{cases}\widetilde U_q,&\widetilde U_q<1,\\0,&\widetilde U_q=1,\end{cases}\qquad D_j:=\lfloor b^jU\rfloor-b\lfloor b^{j-1}U\rfloor,$$
are mutually independent uniform random variables on $[0,1)$. Consequently,
after fixing a lexicographic enumeration
$\sigma_0,\ldots,\sigma_{b!-1}$ of the permutations of
$\{0,\ldots,b-1\}$, the variables
$$\pi_q:=\sigma_{\min\{b!-1,\lfloor b!U_q\rfloor\}}$$
are mutually independent uniform random permutations.

## Facts & Assumptions
**Given:** An integer $b\ge2$ and $U$ with the uniform law on $[0,1)$.

[F1] [[def-probability-measure]]: The law of $U$ assigns each Borel interval its Lebesgue length.

[F2] [[thm-dynkin-pi-lambda]]: Two finite measures agreeing on a generating $\pi$-system agree on the generated $\sigma$-algebra.

[F3] [[def-random-element-and-real-random-variable]]: Measurable maps from the probability space into $[0,1)$ are random elements.

[F4] [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]: A pointwise limit of measurable real-valued functions is measurable.

[F5] [[lem-geometric-sequence-null]]: Since $0<1/b<1$, $b^{-N}\to0$ as $N\to\infty$.



## Proof

**Proof technique:** direct.

**Given:** $U\sim\operatorname{Unif}[0,1)$ and $b\ge2$.

1.1 For $q,k\ge1$ set $\phi(q,k)=\frac{(q+k-2)(q+k-1)}2+q$. Listing pairs by increasing $q+k$ and then increasing $q$ shows that $\phi$ is a bijection. Each digit $D_j$ lies in $\{0,\ldots,b-1\}$, and prescribing the first $N$ consecutive digits specifies exactly one half-open interval of length $b^{-N}$ by [F1]. More generally, prescribing any $s$ distinct digit positions among the first $N$ leaves exactly $b^{N-s}$ such intervals, so those digits have joint probability $b^{-s}$. [given, F1, construct]

2.1 Fix distinct $q_1,\ldots,q_s$ and positive integers $n_1,\ldots,n_s$. The index sets $\{\phi(q_i,k):1\le k\le n_i\}$ are disjoint. If their digit values are prescribed, let $N$ be the largest used index. Exactly $b^{N-\sum_i n_i}$ length-$b^{-N}$ intervals have those values, so their joint probability is $b^{-\sum_i n_i}$. For each $q$ and $m\ge1$, the event $T_{q,m}=\{D_{\phi(q,k)}=b-1\text{ for every }k\ge m\}$ is contained, for every $L\ge1$, in the event that its first $L$ tail digits all equal $b-1$. Step 1.1 gives $\mathbb P(T_{q,m})\le b^{-L}$ for every $L$, so [F5] gives $\mathbb P(T_{q,m})=0$. The countable union of these events over $q,m$ is null. Outside it, each stream has no tail consisting entirely of $b-1$ digits; consequently a prescribed initial digit word places its numeric sum in the corresponding half-open base-$b$ interval, not at its right endpoint. Thus every finite family of the numeric $\widetilde U_{q_i}$ has the product uniform cylinder probabilities outside a null set. The event $\widetilde U_q=1$ is contained in $T_{q,1}$, so replacing that value by $0$ leaves every finite-dimensional law unchanged. [F5, step 1.1, F1, algebra]

3.1 Each digit $D_j$ is constant on the finite Borel partition into intervals of length $b^{-j}$. A finite partial sum defining $\widetilde U_q$ is constant on the common refinement at the largest digit index it uses, hence is measurable. Its pointwise limit is measurable by [F4]. The map $g:[0,1]\to[0,1)$ given by $g(x)=x$ for $x<1$ and $g(1)=0$ is Borel; explicitly, for Borel $A\subseteq[0,1)$, $g^{-1}(A)=(A\cap[0,1))$ together with $\{1\}$ exactly when $0\in A$. Therefore $U_q=g(\widetilde U_q)$ is measurable. For any finite set of indices $q_i$, the $b$-adic cylinder rectangles for $(U_{q_i})$ form a $\pi$-system generating the Borel sets of $[0,1)^s$: every open set is the union of the countably many such cells contained in it, since the cell diameters tend to zero. Step 2.1 gives agreement there with product Lebesgue measure; [F2] therefore gives the product law on all Borel sets. Hence the $U_q$ are mutually independent and each is uniform. [F2, F4, step 2.1]

4.1 Each map $u\mapsto\sigma_{\min\{b!-1,\lfloor b!u\rfloor\}}$ is Borel, with the preimage of $\sigma_r$ equal to $[r/b!,(r+1)/b!)$ for $0\le r<b!$. For distinct $q_1,\ldots,q_s$, independence and uniformity from step 3.1 give $\mathbb P(\pi_{q_i}=\sigma_{r_i}\text{ for every }i)=\prod_i\mathbb P(U_{q_i}\in[r_i/b!,(r_i+1)/b!))=(b!)^{-s}$. These maps are measurable and the joint probabilities show that the $\pi_q$ are mutually independent uniform permutations. [F3, step 3.1, algebra] ∎
