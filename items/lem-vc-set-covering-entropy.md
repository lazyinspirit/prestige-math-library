---
id: lem-vc-set-covering-entropy
kind: lemma
title: "Logarithmic L-r covering bound for VC classes of sets"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-binomial-coefficient
  - def-canonical-natural
  - def-covering-packing-bracketing-number-and-metric-entropy
  - def-integer-power
  - def-natural-logarithm
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-probability-measure
  - def-real-exponential-function-and-e
  - def-real-power
  - def-vc-class-of-sets-and-index
  - lem-exponential-dominates-one-plus-x
  - lem-integer-part
  - lem-packing-covering-number-comparison
  - lem-power-monotone
  - lem-probability-measure-basic-identities
  - lem-real-power-preserves-measurability
  - thm-algebra-of-derivatives
  - thm-binomial-theorem
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-real-power-laws
  - thm-sauer-shelah
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - cor-mean-value-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Section 8, Theorem 8.1 inequality (2)"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
    - title: "David Pollard, Probability Tools, Tricks, and Miracles, 2026 manuscript, Chapter 14"
      url: "http://www.stat.yale.edu/~pollard/Books/Pttm/Pttm26-06-22.pdf"
---

## Statement

Let $\mathcal C$ be a nonempty class of measurable subsets of a measurable space, with finite VC index $V$ as in [[def-vc-class-of-sets-and-index]]. Let $Q$ be a probability measure, $1\le r<\infty$, and $0<\delta<1$. Put $K:=3e^2/(e-1)$. Then

$$N(\delta,\mathcal C,L^r(Q))\le\left[K\delta^{-r}\log\left(\frac{3e}{\delta^r}\right)\right]^{V-1}.$$

For sets, $\|\mathbf1_C-\mathbf1_D\|_{Q,r}=Q(C\triangle D)^{1/r}$. In the case $V=1$, the exponent is zero and the class consists of one set modulo equality, so the bound is $N=1$.

## Facts & Assumptions

**Given:** A nonempty measurable set class $\mathcal C$ with finite VC index $V$, a probability measure $Q$, $1\le r<\infty$, and $0<\delta<1$.

[F1] For a set class, the $L^r(Q)$ distance is $Q(C\triangle D)^{1/r}$; $N$ is the covering number with centers in the class, and $D$ uses strict pairwise separation ([[def-covering-packing-bracketing-number-and-metric-entropy]]).

[F2] A nonempty class has VC dimension $d=V-1$ when $V$ is its least positive unshattered size; traces on arbitrary finite ground sets define shattering ([[def-vc-class-of-sets-and-index]]).

[F3] A family of subsets of $[n]$ with VC dimension at most $d$ has size at most $\sum_{j=0}^{d}\binom nj$ ([[thm-sauer-shelah]]).

[F4] The finite product probability $Q^{\otimes n}$ exists and assigns a measurable rectangle $A_1\times\cdots\times A_n$ mass $\prod_iQ(A_i)$ ([[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]).

[F5] A finite union of events has probability at most the sum of their probabilities ([[lem-probability-measure-basic-identities]]).

[F6] For $0\le u\le1$ and a natural $n$, $(1-u)^n\le e^{-nu}$, and $1+x\le e^x$ for real $x$ ([[lem-exponential-dominates-one-plus-x]]).

[F7] The finite binomial theorem is $(1+x)^n=\sum_{j=0}^n\iota\binom njx^j$, where $\iota$ is the canonical embedding of naturals into reals and powers are natural powers ([[thm-binomial-theorem]], [[def-binomial-coefficient]], [[def-canonical-natural]], [[def-integer-power]]).

[F8] $N(\epsilon,\mathcal C,d)\le D(\epsilon,\mathcal C,d)\le N(\epsilon/2,\mathcal C,d)$ with strict separation and closed-ball radii as stated ([[lem-packing-covering-number-comparison]]).

[F9] $\log$ is the increasing inverse of the exponential, $\log e=1$, and $\exp(u+v)=\exp(u)\exp(v)$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]]).

[F10] For $u>0$, $\log'(u)=1/u$; derivative rules and the mean value theorem apply on compact intervals ([[thm-logarithm-derivative-and-integral]], [[thm-algebra-of-derivatives]], [[cor-mean-value-theorem]]).

[F11] Natural powers obey their recursive definition and are monotone in nonnegative bases ([[def-integer-power]], [[lem-power-monotone]]).

[F12] For $a>0$, $a^r=\exp(r\log a)$ and positive-base real powers obey their product and iterated-power laws ([[def-real-power]], [[thm-real-power-laws]]).

[F13] For every $r>0$, $t\mapsto t^r$ is strictly increasing on $[0,\infty)$ ([[lem-real-power-preserves-measurability]]).

[F14] The inequality $1+x\le e^x$ for $x\ge0$ gives $e\ge2$ by taking $x=1$ ([[lem-exponential-dominates-one-plus-x]]).

[F15] For a real $s$, its integer part $k$ satisfies $k\le s<k+1$, so $n:=k+1$ obeys $s<n\le s+1$ ([[lem-integer-part]]).

## Proof

**Given:** The class, measure, index, and radii in the statement.

1.1 Put $d:=V-1$. If $d=0$ and two sets $C,D\in\mathcal C$ differed at a point $x$, their traces on $\{x\}$ would be both $\varnothing$ and $\{x\}$, so $\{x\}$ would be shattered, contradicting [F2]. Thus all class members are equal, $N(\delta,\mathcal C,L^r(Q))=1$, and the bound holds. [F2, given]

1.2 Suppose $d\ge1$. Fix any finite subfamily $C_1,\ldots,C_m$ with pairwise $L^r(Q)$ distances greater than $\delta$, where $m\ge2$, and set $\eta:=\delta^r\in(0,1)$ and $s:=2\log(m)/\eta>0$. Let $k:=\lfloor s\rfloor$ from [F15] and $n:=k+1$; then $s<n\le s+1$. Sample $X_1,\ldots,X_n$ independently from $Q$ on the finite product probability space supplied by [F4]. [F1, F4, F15, given]

1.3 For $u\ge1$, define $h(u):=u/e-\log u$. By [F10], $h'(u)=1/e-1/u$, so the mean value theorem makes $h$ decreasing on $[1,e]$ and increasing on $[e,\infty)$. Since $h(e)=0$ by [F9], $\log u\le u/e$ for every $u\ge1$. [F9, F10, algebra]

2.1 For $j\ne k$, the probability that $C_j$ and $C_k$ have identical traces on this sample is $[1-Q(C_j\triangle C_k)]^n\le(1-\eta)^n\le e^{-n\eta}$: strict separation and [F13] give $Q(C_j\triangle C_k)>\delta^r=\eta$, and then [F4] and [F6] apply. The union bound [F5] makes the probability of any collision at most $\binom m2e^{-n\eta}\le\binom m2m^{-2}<1$. [F1, F4, F5, F6, F13, step 1.2, algebra]

2.2 Define $B:=K\eta^{-1}\log(3e/\eta)$. By [F9], $K=3e^2/(e-1)>e$; by [F14], $e\ge2$; also $\eta^{-1}>1$ and $\log(3e/\eta)>\log e=1$. Hence $B>e\ge2$. [F9, F14, given, algebra, step 1.2]

3.1 Consequently some sample has $m$ distinct traces on $[n]$. The induced trace family cannot shatter a set of indices containing a repeated sample value, because those two coordinates always have identical membership. Any shattered set of distinct sampled values is shattered by $\mathcal C$, so [F2] bounds its size by $d$. Applying [F3] to the induced family gives $m\le\sum_{j=0}^{d}\binom nj$. [F2, F3, step 2.1, choose]

3.2 If $\log m\le d$, then $m\le e^d<B^d$ by step 2.2 and monotonicity of the exponential. [F9, F11, step 2.2, algebra, step 1.2]

4.1 If $d\ge n$, [F7], [F11], and step 2.2 give $\sum_{j=0}^d\binom nj=2^n\le2^d<B^d$, so step 3.1 gives $m<B^d$. If $d<n$, put $x:=d/n\in(0,1)$. For $j\le d$, the recursion $x^{k+1}=x^kx$ and $0<x<1$ show successively that $x^d\le x^j$. Thus [F7] and [F6] give $x^d\sum_{j=0}^d\binom nj\le\sum_{j=0}^d\binom njx^j\le(1+x)^n\le e^{nx}=e^d$, hence $\sum_{j=0}^d\binom nj\le(en/d)^d$. By step 3.1, $m\le(en/d)^d$. [F6, F7, F11, step 3.1, algebra, step 2.2]

5.1 Suppose $\log m>d$. Then $n\ge2\log(m)/\eta>2d$, so $d<n$, and $\log(m)/\eta>1$ gives $n\le3\log(m)/\eta$. Combining steps 3.1 and 4.1 yields $m\le(3e\log(m)/(d\eta))^d$. Set $y:=3e/\eta$ and $z:=\exp((\log m)/d)>e$. By [F9] and [F12], $z^d=m$ and $\log z=(\log m)/d$, hence $z/\log z\le y$. [F9, F12, step 3.1, step 4.1, algebra, step 1.2]

6.1 In step 5.1, $z>e$ implies $u:=\log z>1$. From $z\le y\log z$, monotonicity and the product law in [F9] give $u\le\log y+\log u\le\log y+u/e$ by step 1.3. Thus $u\le\frac e{e-1}\log y$, and step 5.1 yields $z\le\frac e{e-1}y\log y=K\eta^{-1}\log(3e/\eta)=B$. Therefore $m=z^d\le B^d$ by [F11]. [F9, F11, step 5.1, step 1.3, algebra]

7.1 If $d=0$, step 1.1 proves the result. If $d\ge1$, step 2.2 gives $B>1$, so one-member separated families satisfy the bound, and steps 4.1, 3.2, 5.1 and 6.1 bound every larger finite $\delta$-separated subfamily by $B^d$. Thus the packing number is finite and its largest integer size is attained; [F8] then gives $N(\delta,\mathcal C,L^r(Q))\le D(\delta,\mathcal C,L^r(Q))\le B^d$. Substituting $d=V-1$ proves the statement. [F8, step 1.1, step 2.2, step 4.1, step 3.2, step 5.1, step 6.1] ∎
