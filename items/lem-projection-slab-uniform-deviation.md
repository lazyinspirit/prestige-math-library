---
id: lem-projection-slab-uniform-deviation
kind: lemma
title: Uniform deviation for squared-projection slabs
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-probability-measure
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-independent-random-elements
  - def-inner-product-norm
  - cor-triangle-inequality-for-inner-product-norm
  - lem-rat-embeds-dense
  - thm-rationals-countable
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-independent-random-elements-have-product-joint-law
  - thm-dominated-convergence
  - thm-continuity-from-below-for-measures
  - thm-jensens-integral-inequality
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-hyperbolic-functions
  - thm-hyperbolic-identities-and-derivatives
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, Lemma 7.3"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 4"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
dependency_level: 0
---


## Statement

Let $X_1,\ldots,X_N$ be independent random elements of $\mathbb R^p$ with
common Borel probability law $P$. Let $S_1,\ldots,S_m\subseteq[p]$ be
nonempty coordinate sets with $|S_j|\le s$, where $m,s\ge1$, and define
$$V_{S_j}:=\{u\in\mathbb R^p:\|u\|_2=1,\ u_i=0\text{ for }i\notin S_j\}.$$
For $u\in V_{S_j}$ and $t\in\mathbb R$, put
$A_{u,t}:=\{x\in\mathbb R^p:|u^Tx|^2\le t\}$ and
$P_N(A):=N^{-1}\sum_{i=1}^N\mathbf1\{X_i\in A\}$. There is a universal
constant $C$ such that, for every $0<\delta<1$,
$$\mathbb P\!\left(\max_{1\le j\le m}\sup_{\substack{u\in V_{S_j}\\t\in\mathbb R}}|P_N(A_{u,t})-P(A_{u,t})|\le C\left[\sqrt{\frac{s+1}{N}}+\sqrt{\frac{\log(m/\delta)}{N}}\right]\right)\ge1-\delta.$$
The same bound holds for the upper-tail sets
$\{x:|u^Tx|^2\ge t\}$.

## Facts & Assumptions

**Given:** Independent random elements, their common law $P$, a finite
support family $(S_j)_{j=1}^m$, and $0<\delta<1$.

[F1] [[def-independent-random-elements]]: independence means the generated
event sigma-algebras factor on finite intersections.

[F2] [[def-probability-measure]] and
[[def-expectation-of-a-nonnegative-or-integrable-random-variable]] define
the probabilities and expectations used below.

[F3] [[thm-dominated-convergence]]: pointwise convergence of indicators
bounded by $1$ passes to their probabilities.

[F4] [[thm-continuity-from-below-for-measures]]: probabilities of increasing
measurable sets converge to the probability of their union.

[F5] [[thm-jensens-integral-inequality]]: Jensen's inequality applies to
the bounded empirical-process suprema below.

[F6] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]],
[[def-product-measure-on-sigma-finite-spaces]],
[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]],
and [[thm-independent-random-elements-have-product-joint-law]]: finite
ghost samples and independent signs can be realized on finite product
spaces with their stated independent laws.

[F7] [[def-inner-product-norm]] and
[[thm-cauchy-schwarz-in-an-inner-product-space]] give the Euclidean norm
and Cauchy--Schwarz inequality.
[[cor-triangle-inequality-for-inner-product-norm]] gives homogeneity and
the triangle inequality, hence $|\|v\|_2-\|w\|_2|\le\|v-w\|_2$.

[F8] [[def-hyperbolic-functions]],
[[thm-hyperbolic-identities-and-derivatives]],
[[def-real-exponential-function-and-e]],
[[thm-exponential-is-strictly-increasing]], [[def-natural-logarithm]],
[[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]],
[[thm-chain-rule]], [[thm-algebra-of-derivatives]], and
[[cor-mean-value-theorem]]: $\cosh$ is positive and even,
$(\tanh t)'=\operatorname{sech}^2t$, and $\log'=1/t$ on positive
arguments; the mean value theorem turns nonnegative derivatives into
monotonicity.

[F9] [[lem-rat-embeds-dense]] places a rational strictly between any two
reals; [[thm-rationals-countable]] gives a fixed enumeration of the rationals.

## Proof

1.1 The supremum is measurable. Fix $S$ with $d=|S|$. By [F9], rational vectors supported in $S$ can be enumerated by enumerating their finite tuples of rational indices in increasing sum; their nonzero normalizations form a countable subclass of $V_S$. For $u\in V_S$ and each $k\ge1$, choose the first rational tuple $q_k$ in that enumeration satisfying $|(q_k)_i-u_i|<1/(4dk^2)$ for $i\in S$. Such a tuple exists by rational density, and $\|q_k-u\|_2<1/(4k^2)$, so $q_k\ne0$. With $u_k=q_k/\|q_k\|_2$, [F7] gives $\|u_k-u\|_2\le|1-\|q_k\|_2|+\|q_k-u\|_2\le2\|q_k-u\|_2\le k^{-2}$. For $t\ge0$, choose the first rational $t_k\in(t+1/k,t+2/k)$ in the fixed enumeration. Cauchy--Schwarz yields $$|(u_k^Tx)^2-(u^Tx)^2|\le2\|x\|_2^2k^{-2}.$$ Thus $\mathbf1_{A_{u_k,t_k}}(x)\to\mathbf1_{A_{u,t}}(x)$ for every $x$, including boundary points: at equality the threshold margin $1/k$ eventually exceeds this error, while away from equality convergence preserves the strict sign. By [F3] their $P$-probabilities converge; finite empirical probabilities converge too. Negative thresholds give the empty set, already represented by rational thresholds. Hence the supremum equals that over the countable subclass of normalized rational vectors and rational thresholds, and is measurable. The first-element rules use no choice axiom. [F1, F2, F3, F7, F9, construct]

1.2 Fix a support $S$ of size $k\le s$. Trace patterns of affine halfspaces on $r$ fixed points are sign patterns of $r$ affine hyperplanes in a $(k+1)$-dimensional parameter space. The number of open regions is at most $\sum_{\ell=0}^{k+1}\binom r\ell$: adding one hyperplane creates at most the number of regions cut on that hyperplane, so induction on $r$ and the dimension gives Pascal's recurrence and this sum. Weak-boundary traces are also counted, since on a finite point set a halfspace threshold can be increased slightly without changing its trace. [F1, algebra]

2.1 A slab $A_{u,t}$ with $t\ge0$ is the intersection of the halfspaces $u^Tx\le\sqrt t$ and $-u^Tx\le\sqrt t$ in the same $k$ coordinates; when $t<0$ it is empty. Hence its trace count on $r$ points is at most $(\sum_{\ell=0}^{k+1}\binom r\ell)^2$. For $r\ge q:=k+1$, set $x=q/r$. Since $x^\ell\ge x^q$ for $\ell\le q$, $$\sum_{\ell=0}^q\binom r\ell\le x^{-q}(1+x)^r\le(er/q)^q.$$ If $r\ge16q$, then $2^r>(er/q)^{2q}$: the logarithmic difference is positive at $r/q=16$ and has positive derivative thereafter. Thus $r$ points cannot be shattered by the slab class, so its VC dimension is at most $16(k+1)\le16(s+1)$. [step 1.2, algebra]

2.2 Let $\varepsilon_i$ be independent uniform signs, independent of the sample, and let $X'_1,\ldots,X'_N$ be an independent copy. Jensen's inequality [F5], conditional on the original sample, gives $$\mathbb E\sup_A|P_N(A)-P(A)| \le\mathbb E\sup_A|P_N(A)-P'_N(A)|.$$ Each pair $(X_i,X'_i)$ is exchangeable, so independently swapping its coordinates with sign $\varepsilon_i$ leaves the joint law unchanged. The triangle inequality then gives $$\mathbb E\sup_A|P_N(A)-P(A)| \le2\,\mathbb E\sup_A\left|N^{-1}\sum_{i=1}^N\varepsilon_i\mathbf1_A(X_i)\right|.$$ The ghost sample and signs exist on finite product spaces by [F6]; all suprema use the countable class from step 1.1. [F1, F2, F5, F6, step 1.1, algebra]

2.3 Replacing one observation changes every empirical set probability by at most $1/N$, so the supremum $F$ changes by at most $1/N$. In the Doob martingale of $F$, each conditional increment therefore has a range of width at most $1/N$. If a random variable lies in an interval of width $c$, the log-mgf of its centered version has second derivative equal to a tilted variance at most $c^2/4$; integrating twice gives $\mathbb E e^{\lambda(Y-\mathbb EY)}\le e^{\lambda^2c^2/8}$. Iterating these bounds and optimizing the exponential Markov inequality yields $\mathbb P(F-\mathbb EF>t)\le e^{-2Nt^2}$. [F1, F2, step 1.1, algebra]

3.1 On a fixed $N$-point sample the trace class is finite. For $0<\rho\le1$, if $M$ traces are pairwise separated by more than $\rho$ in $d(A,B)=\sqrt{P_N(A\triangle B)}$, sample $r=\lceil3\rho^{-2}\log(2M)\rceil$ coordinates uniformly with replacement. For a fixed pair the probability that the traces agree at all sampled coordinates is at most $e^{-r\rho^2}$; a union bound over pairs shows that some coordinate sample distinguishes all $M$ traces. Put $D=16(s+1)$. If $r<D$, then $M\le2^r\le2^D$. If $r\ge D$, step 2.1 bounds the trace count by $(er/q)^{2q}\le(er/D)^{2D}$, where $q=|S|+1\le D$; the inequality follows because $a\mapsto a\log(er/a)$ is increasing for $0<a\le r$. Writing $y=\log(M)/D$, the choice of $r$ gives $r\le C\rho^{-2}D(y+1)$ and hence $y\le2\log(C\rho^{-2}(y+1))$. Put $A=\log(C\rho^{-2})\ge1$. If $y\ge10$, then $\log(y+1)\le y/4$, so $y\le4A$; if $y<10$, then $y<10A$. Thus $y\le10A\le20\log(C_0/\rho)$ for a universal $C_0$. After increasing $C_0$, the same bound covers $r<D$. A maximal $\rho$-separated set is a $\rho$-net, so $\mathcal N(\rho)\le(C_0/\rho)^{20D}$. [step 2.1, algebra]

4.1 To obtain the sign MGF bound used for chaining, for $t\ge0$ put $h(t)=t-\tanh t$. Then $h(0)=0$ and $h'(t)=1-\operatorname{sech}^2t=\tanh^2t\ge0$ by [F8]; the mean value theorem gives $h(t)\ge0$. Put $g(t)=t^2/2-\log(\cosh t)$. Then $g(0)=0$ and $g'(t)=h(t)\ge0$, so $g(t)\ge0$; evenness extends the bound to every real $t$. Hence $\cosh t\le e^{t^2/2}$. Conditional on the sample, the sign process $Z_A=N^{-1}\sum_i\varepsilon_i\mathbf1_A(X_i)$ therefore has increments satisfying $\mathbb E_\varepsilon e^{\lambda(Z_A-Z_B)} \le e^{\lambda^2d(A,B)^2/(2N)}$, by multiplying the independent sign MGFs with coefficients $\lambda(\mathbf1_A(X_i)-\mathbf1_B(X_i))/N$. Choose empirical $L^2$ nets $T_j$ at radii $2^{-j}$. Telescope each trace through its nearest net points; adjacent levels differ by at most $3\cdot2^{-j}$ in $d$. For $L$ centered sub-Gaussian variables with common proxy $\sigma^2$, $\mathbb E\max_{\ell\le L}|W_\ell|\le\sigma\sqrt{2\log(2L)}$ follows by Jensen's inequality applied to the log-sum-exp of $e^{\lambda W_\ell}$ and $e^{-\lambda W_\ell}$, followed by minimization in $\lambda$. Thus the conditional expected supremum is at most $$\frac{C}{\sqrt N}\left(1+\sum_{j\ge1}2^{-j}\sqrt{\log(2\mathcal N(2^{-j})\mathcal N(2^{-j+1}))}\right).$$ The finite trace class makes the sum terminate. [F8, step 3.1, algebra]

5.1 From step 3.1, $\log\mathcal N(\rho)\le20D\log(C_0/\rho)$. Therefore the dyadic sum in step 4.1 is at most $C\sqrt D\sum_{j\ge1}2^{-j}\sqrt{j+1}\le C'\sqrt D$; the base trace contributes at most $N^{-1/2}$ by Cauchy--Schwarz. Combining the symmetrization bound from step 2.2 with the chaining bound from step 4.1 yields $\mathbb E\sup_A|P_N(A)-P(A)|\le C''\sqrt{(s+1)/N}$. [step 3.1, step 2.2, step 4.1, algebra]

6.1 Apply step 2.3 with $t=\sqrt{\log(m/\delta)/(2N)}$ separately to each support class and take a union bound over its $m$ supports. Combining with step 5.1 proves the displayed probability bound after increasing the universal constant $C$. [step 5.1, step 2.3, algebra]

7.1 For any $u,t$, $$\{x:|u^Tx|^2<t\}=\bigcup_{k\ge1}\{x:|u^Tx|^2\le t-1/k\},$$ an increasing union. Continuity from below [F4] makes both $P$ and $P_N$ probabilities converge to those of the strict lower-tail set. The deviation bound in step 6.1 holds at every threshold, so it passes to this limit. Taking complements gives the same bound for the upper weak tails $\{|u^Tx|^2\ge t\}$. [F4, step 6.1, algebra] ∎
