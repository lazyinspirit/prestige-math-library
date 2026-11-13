---
id: lem-author-cc4f5d837ae1-uniform-centered-normalization
title: Uniform centered normalization across the full Bernoulli density range
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-centered-matrices
  - math:def-operator-norm-on-a-finite-dimensional-inner-product-space
  - math:thm-logarithm-slower-than-every-positive-power
  - math:thm-integral-logarithm-is-unbounded
  - math:cor-integral-logarithm-agrees-with-natural-logarithm
  - math:cor-integral-logarithm-is-strictly-increasing
  - math:lem-cauchy-reals-archimedean
  - math:def-cartesian-product
  - math:lem-standard-basis-of-f-n
  - math:def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - math:thm-the-complex-numbers-are-algebraically-closed
  - math:cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue
  - math:cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues
  - math:def-complex-conjugate-real-imaginary-part-and-modulus
  - math:lem-finite-set-has-max
  - math:def-expectation-on-a-finite-probability-space
  - math:def-variance-and-covariance
dependency_roles:
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  math:def-operator-norm-on-a-finite-dimensional-inner-product-space: mathematical-premise
  math:thm-logarithm-slower-than-every-positive-power: mathematical-premise
  math:thm-integral-logarithm-is-unbounded: mathematical-premise
  math:cor-integral-logarithm-agrees-with-natural-logarithm: mathematical-premise
  math:cor-integral-logarithm-is-strictly-increasing: mathematical-premise
  math:lem-cauchy-reals-archimedean: mathematical-premise
  math:def-cartesian-product: mathematical-premise
  math:lem-standard-basis-of-f-n: mathematical-premise
  math:def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  math:thm-the-complex-numbers-are-algebraically-closed: mathematical-premise
  math:cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue: mathematical-premise
  math:cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues: mathematical-premise
  math:def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  math:lem-finite-set-has-max: mathematical-premise
  math:def-expectation-on-a-finite-probability-space: mathematical-premise
  math:def-variance-and-covariance: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 3
---

## Statement

Fix $g>0$. Let $n\ge1$ be an integer and $0<p\le1$, $\mu=np\ge g\log n$, and let $A$ be the zero-diagonal adjacency matrix of $G(n,p)$. Put $H=(A-p(J-I))/\sqrt\mu$ and $q=\min\{\sqrt\mu,n^{1/10}\}$. For all sufficiently large $n$, uniformly in this range of $p$, $H$ is real symmetric with independent centered upper entries and zero diagonal, and
$$\max_i\sum_j\mathbb E|H_{ij}|^2\le1,\quad\max_{ij}\mathbb E|H_{ij}|^2\le1/n,\quad\max_{ij}|H_{ij}|\le1/\sqrt\mu\le1/q.$$
Moreover $1\le q\le n^{1/10}$, $q\ge\sqrt{g\log n}$ eventually, and $A-pJ=\sqrt\mu H-pI$.

For this $H$, let $[n]=\{1,\ldots,n\}$ and let $B$ be the complex endomorphism of $\mathbb C^{[n]^2}$ whose rows and columns are indexed by all ordered pairs in $[n]^2=[n]\times[n]$, including $(i,i)$, with entries $B_{(i,j),(k,l)}=H_{kl}\mathbf1_{j=k}\mathbf1_{i\ne l}$. Define $\rho(B)=\max\{|z|:z\in\mathbb C\text{ is an eigenvalue of }B\}$. This maximum exists for every $n\ge1$.

## Facts & Assumptions

[F1] The graph has independent Bernoulli edge coordinates and zero diagonal ([[def-expander-sync-erdos-renyi]]); the reference centering is $A-pJ$ ([[def-expander-sync-centered-matrices]]).

[F2] The Euclidean operator norm is [[math:def-operator-norm-on-a-finite-dimensional-inner-product-space]]. For each $a>0$, $\log n/n^a\to0$ ([[math:thm-logarithm-slower-than-every-positive-power]]).

[F3] For $x>0$, the integral logarithm satisfies $L(x)=\log x$ ([[math:cor-integral-logarithm-agrees-with-natural-logarithm]]) and is strictly increasing ([[math:cor-integral-logarithm-is-strictly-increasing]]). For every real $M$ there is $b>0$ with $L(b)>M$ ([[math:thm-integral-logarithm-is-unbounded]]). The natural numbers are cofinal in the reals ([[math:lem-cauchy-reals-archimedean]]).

[F4] A Cartesian product consists of all ordered pairs of elements from its two factors ([[math:def-cartesian-product]]). Over any field, the coordinate space $F^m$, indexed from $0$ to $m-1$, has the standard basis and dimension $m$ ([[math:lem-standard-basis-of-f-n]]). The spectrum consists of the scalars admitting a nonzero eigenvector ([[math:def-eigenvalue-eigenvector-eigenspace-and-spectrum]]). The field $\mathbb C$ is algebraically closed ([[math:thm-the-complex-numbers-are-algebraically-closed]]); every endomorphism of a nonzero finite-dimensional space over such a field has an eigenvalue ([[math:cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]]), and an endomorphism of dimension $m$ has at most $m$ distinct eigenvalues ([[math:cor-an-operator-has-at-most-dimension-many-distinct-eigenvalues]]).

[F5] For $z=a+bi\in\mathbb C$, its modulus is the nonnegative real number $|z|=\sqrt{a^2+b^2}$ ([[math:def-complex-conjugate-real-imaginary-part-and-modulus]]). A nonempty finite set of real numbers has a maximum ([[math:lem-finite-set-has-max]]).

[F6] On the finite graph probability space, $\mathbb E[X]=\sum_{\omega\in\Omega}X(\omega)w(\omega)$ for a real random variable $X$ ([[math:def-expectation-on-a-finite-probability-space]]); its mean is $\mathbb E[X]$, and centered means this is zero. Also $\operatorname{Var}(X)=\mathbb E[(X-\mathbb E[X])^2]$ ([[math:def-variance-and-covariance]]).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove all stated conclusions.

1.1 By [F1], the graph outcomes form a finite probability space, and for $i\ne j$ the entry $H_{ij}$ takes values $(1-p)/\sqrt\mu$ and $-p/\sqrt\mu$ with probabilities $p$ and $1-p$. Grouping the finite sum in [F6] by the two edge outcomes gives $\mathbb E[H_{ij}]=(p(1-p)-(1-p)p)/\sqrt\mu=0$ and $\mathbb E|H_{ij}|^2=(p(1-p)^2+(1-p)p^2)/\mu=p(1-p)/\mu=(1-p)/n\le1/n$. By [F6] this second moment is also the variance. Each value has absolute value at most $1/\sqrt\mu$, and the row second-moment sum is $(n-1)(1-p)/n\le1$. Symmetry and independence follow from [F1], since each upper entry is a function of its own independent edge coordinate. The zero diagonal entries are deterministic centered variables and are independent of the others. The centering identity follows entry by entry, including the diagonal. [F1, F6, given, algebra]

1.2 Fix any $M\in\mathbb R$. By [F3], choose $b>0$ with $L(b)>M$ and an integer $N>b$. For every integer $n\ge N$, monotonicity and agreement give $\log n=L(n)\ge L(N)>L(b)>M$. Therefore $\log n\to+\infty$, so $g\log n\ge1$ eventually. [F3, given, choose, algebra]

1.3 The pairs in $[n]^2$ are put in bijection with $\{0,\ldots,n^2-1\}$ by $(i,j)\mapsto(i-1)n+(j-1)$, listing successive blocks of $n$ coordinates. Thus [F4] identifies $\mathbb C^{[n]^2}$ with a coordinate space of dimension $n^2>0$. The displayed entries define the action $(Bv)_{ij}=\sum_{k=1}^n\sum_{l=1}^nH_{kl}\mathbf1_{j=k}\mathbf1_{i\ne l}v_{kl}$. These are finite sums of complex scalar multiples of coordinates; distributivity gives $B(\alpha v+\beta w)=\alpha Bv+\beta Bw$. Hence $B$ is an endomorphism of that nonzero finite-dimensional complex space. [F4, given, algebra]

2.1 By [F2] with $a=1/5$, $g\log n\le n^{1/5}$ eventually. Together with $\mu\ge g\log n$ and step 1.2, this shows that both terms in the minimum defining $q$ are eventually at least $\sqrt{g\log n}\ge1$. Thus $1\le q\le n^{1/10}$ and $q\ge\sqrt{g\log n}$, while $q\le\sqrt\mu$ implies $1/\sqrt\mu\le1/q$. All cutoffs depend only on $g$, so the estimates in step 1.1 hold uniformly in $p$, including $p=1$, where $H=0$. [F2, step 1.1, step 1.2, given, algebra]

3.1 By [F4] and step 1.3, $B$ has at least one and at most $n^2$ distinct complex eigenvalues. Their moduli therefore form a nonempty finite subset of $\mathbb R$, which has a maximum by [F5]. This proves that $\rho(B)$ is well defined for each realization and every $n\ge1$, including $H=0$, when $B=0$ and its only eigenvalue is $0$. Combining this with steps 1.1 and 2.1 proves every conclusion. [F4, F5, step 1.1, step 2.1, step 1.3, algebra] ∎
