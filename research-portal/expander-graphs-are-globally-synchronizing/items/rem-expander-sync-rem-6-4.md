---
id: rem-expander-sync-rem-6-4
title: Numerical coefficients and thresholds — Remark 6.4
kind: remark
domain: mathematics
status: published
origin: pipeline
deps:
  - lem-expander-sync-moment-norm-estimate
  - prop-expander-sync-prop-6-3
  - prop-expander-prereq-independent-copy-norm-symmetrization
  - def-expander-sync-erdos-renyi
  - def-expander-sync-centered-matrices
  - def-expander-sync-matrix-order
  - math:def-axiom-of-choice
  - math:lem-range-reduced-exp-log-and-arctan-series-enclosures
  - math:lem-real-interval-arithmetic-preserves-enclosure
  - math:def-bernoulli-and-binomial-random-variables
  - math:def-independence-of-finite-random-variables
  - math:def-variance-and-covariance
dependency_roles:
  lem-expander-sync-moment-norm-estimate: mathematical-premise
  prop-expander-sync-prop-6-3: mathematical-premise
  prop-expander-prereq-independent-copy-norm-symmetrization: mathematical-premise
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-centered-matrices: mathematical-premise
  def-expander-sync-matrix-order: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:lem-range-reduced-exp-log-and-arctan-series-enclosures: mathematical-premise
  math:lem-real-interval-arithmetic-preserves-enclosure: mathematical-premise
  math:def-bernoulli-and-binomial-random-variables: mathematical-premise
  math:def-independence-of-finite-random-variables: mathematical-premise
  math:def-variance-and-covariance: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 34, Remark 6.4 and immediately following paragraph; PDF p. 33,
        Proposition 6.3
      statement: The article gives four numerical upper bounds for f and proposes the
        corresponding four thresholds for Proposition 6.3. It further states
        that the lost factor of square root two is inevitable if symmetrization
        is used.
      hypotheses: The article uses the function f from its proof of Proposition 6.3
        and its asserted uniform-in-p expected-norm estimate for the loop-free
        G(n,p) model with centered matrix A − pJ.
      reading_limits: Inspected the supplied PDF text at pp. 33–34 and the
        source-bound lead for the sparse counterexample. This reference
        attributes the article's claims and does not prove them; underlying
        literature was not independently read.
dependency_level: 9
formulation_deps:
  - lem-expander-sync-moment-norm-estimate
  - def-expander-sync-erdos-renyi
  - def-expander-sync-centered-matrices
  - def-expander-sync-matrix-order
  - math:def-axiom-of-choice
  - math:def-bernoulli-and-binomial-random-variables
  - math:def-independence-of-finite-random-variables
  - math:def-variance-and-covariance
argument_deps:
  - lem-expander-sync-moment-norm-estimate
  - prop-expander-sync-prop-6-3
  - prop-expander-prereq-independent-copy-norm-symmetrization
  - def-expander-sync-erdos-renyi
  - def-expander-sync-centered-matrices
  - def-expander-sync-matrix-order
  - math:def-axiom-of-choice
  - math:lem-range-reduced-exp-log-and-arctan-series-enclosures
  - math:lem-real-interval-arithmetic-preserves-enclosure
  - math:def-bernoulli-and-binomial-random-variables
  - math:def-independence-of-finite-random-variables
  - math:def-variance-and-covariance
---

## Statement

Assume the Axiom of Choice. For $\alpha>0$ and $x\ge3$, define $f(\alpha,x)=2\sqrt2e^{1/(2\alpha)}(1+\sqrt{2\alpha\log x/x})$, with natural logarithm and positive square roots. Then $f(2,4)<7.91$, $f(3,120)<4.98$, $f(5,880)<3.994$, and $f(25,450000)<2.996$. For each fixed $\alpha$, the function decreases in $x\ge3$.

The article proposes the thresholds $n_0(8)=4$, $n_0(5)=120$, $n_0(4)=880$, and $n_0(3)=450000$ for Proposition 6.3. That proposition asserts that, for every $C>2\sqrt2$, the estimate $\mathbb E\|\Delta_A\|\le C\sqrt{np(1-p)}$ holds for all $n\ge n_0(C)$ and every $p\in(0,1)$. The uniform assertion fails for each of these constants at arbitrarily large $n$. Here $G(n,p)$ is the loop-free random graph with independent edges of probability $p$, $A$ is its adjacency matrix, $J$ is the all-ones matrix, $\Delta_A=A-pJ$, and the norm is the Euclidean operator norm.

The article also states that the lost factor $\sqrt2$ is inevitable if symmetrization is used. For independent Bernoulli-$p$ variables $X,X'$, the difference $X-X'$ has variance $2p(1-p)$, twice the variance of $X-p$. Thus a factor $\sqrt2$ occurs at the standard-deviation level in this independent-copy operation when $0<p<1$. This calculation does not establish the broader inevitability claim for every symmetrization or norm estimate.

## Statement references

[[lem-expander-sync-moment-norm-estimate]]

[[prop-expander-sync-prop-6-3]]

[[prop-expander-prereq-independent-copy-norm-symmetrization]]

[[def-expander-sync-erdos-renyi]]

[[def-expander-sync-centered-matrices]]

[[def-expander-sync-matrix-order]]

[[math:def-axiom-of-choice]]

[[math:def-bernoulli-and-binomial-random-variables]]

[[math:def-independence-of-finite-random-variables]]

[[math:def-variance-and-covariance]]

## Facts & Assumptions

[F1] Under Choice, the corrected moment estimate defines the displayed $f$ and proves its strict decrease for $x\ge3$. Its moment argument requires an integer moment parameter ([[lem-expander-sync-moment-norm-estimate]], [[math:def-axiom-of-choice]]).

[F2] For the stated loop-free graph and centering, Proposition 6.3's original uniform-in-$p$ assertion fails for arbitrarily large $n$. The graph has zero adjacency diagonal, and the operator norm is the supremum of $\|\Delta_Av\|_2$ over Euclidean unit vectors $v$ ([[prop-expander-sync-prop-6-3]], [[def-expander-sync-erdos-renyi]], [[def-expander-sync-centered-matrices]], [[def-expander-sync-matrix-order]]).

[F3] For $|u|\le1/2$, the exponential series through degree $12$ has absolute remainder at most $|u|^{13}/(13!(1-|u|/14))$. For $1\le y\le2$, the logarithm series through index $10$, with $v=(y-1)/(y+1)$, has absolute remainder at most $2|v|^{23}/(23(1-v^2))$; also $\log(2^j y)=j\log2+\log y$. Rational interval operations preserve enclosure ([[math:lem-range-reduced-exp-log-and-arctan-series-enclosures]], [[math:lem-real-interval-arithmetic-preserves-enclosure]]).

[F4] Independent-copy norm symmetrization compares a matrix to an independent copy at its actual mean ([[prop-expander-prereq-independent-copy-norm-symmetrization]]). Bernoulli-$p$ variables take values $1$ and $0$ with probabilities $p$ and $1-p$ ([[math:def-bernoulli-and-binomial-random-variables]]). Independence makes the joint probabilities of two finite-valued copies products of their marginal probabilities ([[math:def-independence-of-finite-random-variables]]). Variance is the expectation of the squared centered variable, and standard deviation is its nonnegative square root ([[math:def-variance-and-covariance]]).

## Proof

**Given:** The function and graph conventions in the Statement.

**Goal:** Certify the numerical comparisons, identify the status of the proposed thresholds, and calculate the independent-copy variance factor.

1.1 Apply [F3] with logarithm index $10$, reducing each $n$ as $n=2^j y$ with $j=2,6,9,18$ respectively and $1\le y<2$. Exact rational evaluation of upper endpoints gives $\log4<1.386295$, $\log120<4.787492$, $\log880<6.779922$, and $\log450000<13.017003$. Applying the exponential enclosure with $u=1/4,1/6,1/10,1/50$ gives respective upper bounds $1.284026,1.181361,1.105171,1.020202$. All displayed decimals in this step and the next are exact rationals. [F3, given, algebra]

1.2 For any of the four constants $C$ and any integer $n\ge2$, choose $p=1-1/(16C^2n)$. Then $p\in(0,1)$ and $p>1/2$. By [F2], the diagonal of $\Delta_A$ is $-p$, so applying it to a coordinate unit vector gives $\|\Delta_A\|\ge p$ for every outcome. Consequently $\mathbb E\|\Delta_A\|>1/2$, whereas $C\sqrt{np(1-p)}=\sqrt p/4<1/4$. The proposed uniform bound therefore fails at arbitrarily large $n$, independently of the proposed cutoff. The corrected moment estimate in [F1] does not supply the refuted uniform estimate. [given, F1, F2, choose, algebra]

2.1 Squaring positive rational endpoints and using step 1.1 gives respective upper bounds $1.177411,0.489260,0.277570,0.038031$ for $\sqrt{2\alpha\log n/n}$ at the four indicated pairs. Also $\sqrt2<1.414214$. Substitution into $f$, with outward rational arithmetic, gives upper bounds $7.907868,4.976206,3.993552,2.995309$, respectively; each is strictly below the corresponding bound in the Statement. Monotonicity follows from [F1]. [step 1.1, F1, F3, algebra]

3.1 By independence in [F4], $\mathbb P(X-X'=1)=\mathbb P(X-X'=-1)=p(1-p)$, with the remaining probability at zero. Hence its mean is zero and its variance is $2p(1-p)$. The centered Bernoulli variable $X-p$ has mean zero and variance $p(1-p)$ by direct calculation. Taking square roots gives the stated standard-deviation ratio when $0<p<1$; at $p=0,1$ both variances vanish. [F4, algebra] ∎

## Source notes

Remark 6.4 gives the four numerical comparisons and proposed cutoffs. The next paragraph states that the lost factor $\sqrt2$ is inevitable if symmetrization is used. The article citation provides attribution only. The counterexample concerns the original uniform expected-norm assertion under its stated centering, and the variance calculation describes the particular independent-copy operation.
