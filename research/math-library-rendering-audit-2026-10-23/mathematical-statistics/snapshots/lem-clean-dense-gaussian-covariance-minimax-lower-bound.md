---
id: lem-clean-dense-gaussian-covariance-minimax-lower-bound
kind: lemma
title: Clean Gaussian covariance has a capped squared operator lower rate
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - def-bounded-spectrum-covariance-class
  - def-multivariate-normal-law
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-frobenius-matrix-norm
  - thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison
  - lem-epsilon-net-of-unit-sphere-has-cardinality-bound
  - lem-gaussian-kullback-leibler-covariance-formula
  - thm-pinsker
  - thm-fano-packing
  - thm-product-kl-additivity
  - thm-two-point-le-cam-risk-bound
  - def-axiom-of-choice
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - def-randomized-procedure-as-a-markov-kernel
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
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
  - thm-composition-with-borel-functions-preserves-measurability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: AC is inherited through the finite-dimensional Gaussian-law supplier and Fano packing theorem. The sign families and finite codes are chosen from explicit finite sets, so they require no further choice.
sources:
  references:
    - title: "Mengjie Chen, Chao Gao and Zhao Ren, Robust Covariance and Scatter Matrix Estimation under Huber's Contamination Model, proof of Theorem 3.2"
      url: "https://arxiv.org/pdf/1506.00691"
    - title: "Philippe Rigollet, 18.S997 High-Dimensional Statistics Lecture Notes, MIT OpenCourseWare, Chapter 5"
      url: "https://ocw.mit.edu/courses/18-s997-high-dimensional-statistics-spring-2015/619e4ae252f1b26cbe0f7a29d5932978_MIT18_S997S15_CourseNotes.pdf"
dependency_level: 6
---


## Statement

Assume AC. Fix $M>0$. There are constants $c_M,c_1>0$ such that if $p/n\le c_1$,
$$\inf_{\widehat\Sigma}\sup_{\Sigma\in\mathcal F_p(M)} P_\Sigma^{\otimes n}\!\left\{\|\widehat\Sigma-\Sigma\|_{\rm op}^2 \ge c_M\frac pn\right\}\ge c_1.$$
The infimum is over Borel maps $(\mathbb R^p)^n\to\mathbb R^{p\times p}$.
The constants
may depend on $M$, but not on $p$ or $n$.

In addition, there is $a_M>0$ such that for every $p,n\ge1$,
$$\inf_{\widehat\Sigma}\sup_{\Sigma\in\mathcal F_p(M)}P_\Sigma^{\otimes n}\left\{\|\widehat\Sigma-\Sigma\|_{\rm op}^2\ge a_M\min\{1,p/n\}\right\}\ge c_1.$$
One may choose $0<c_1\le1/16$ and $a_M=\min\{c_Mc_1/2,M^2c_1/64\}$ after fixing the constants of the first assertion. Thus the original small-ratio lower bound is retained and the capped extension covers every dimension and sample size.

## Facts & Assumptions

**Given:** AC, $M>0$, integers $p,n\ge1$, and clean iid observations with law
$N_p(0,\Sigma)$ for an unknown $\Sigma\in\mathcal F_p(M)$.

[F1] [[def-bounded-spectrum-covariance-class]]: $\mathcal F_p(M)$ consists
of positive semidefinite symmetric matrices with operator norm at most $M$.

[F2] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]] and
[[lem-epsilon-net-of-unit-sphere-has-cardinality-bound]]: a symmetric matrix
has operator norm $\sup_{\|u\|_2=1}|u^TAu|$, and the Euclidean unit sphere
has a $1/4$-net of size at most $9^p$.

[F3] [[lem-gaussian-kullback-leibler-covariance-formula]]: for positive
definite covariance matrices, Gaussian KL equals
$\frac12[\operatorname{tr}(\Sigma_1^{-1}\Sigma_0)-p+
\log(\det\Sigma_1/\det\Sigma_0)]$.

[F4] [[thm-product-kl-additivity]]: KL divergence of finite product laws is
the sum of the component divergences.

[F5] [[thm-fano-packing]]: for a uniform finite family with pairwise
target separation $\Delta$ in a metric space and reference law $Q$, the
average squared-metric risk of any estimator kernel is at least
$\frac{\Delta^2}{4}\bigl(1-(K_Q+\log2)/\log N\bigr)$, where
$K_Q=N^{-1}\sum_{j=1}^N D(P_j\|Q)$. A classifier with the discrete metric
has risk equal to its error probability.

[F6] [[thm-pinsker]]: under the event-supremum total-variation convention,
$\|P-Q\|_{\rm TV}\le\sqrt{D(P\|Q)/2}$.

[F7] [[thm-two-point-le-cam-risk-bound]]: for two scalar targets at
distance $\Delta$, every estimator has maximum squared-error risk at
least $\frac{\Delta^2}{8}(1-\|P_0-P_1\|_{\rm TV})$. With binary targets
$0,1$ and binary actions, this is a testing-error lower bound.

[F8] [[def-frobenius-matrix-norm]] and
[[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]:
for a symmetric $p\times p$ matrix $A$,
$\|A\|_F\le\sqrt p\,\|A\|_{\rm op}$.

[F9] [[def-hyperbolic-functions]],
[[thm-hyperbolic-identities-and-derivatives]],
[[def-real-exponential-function-and-e]],
[[thm-exponential-is-strictly-increasing]], [[def-natural-logarithm]],
[[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]],
[[thm-chain-rule]], [[thm-algebra-of-derivatives]], and
[[cor-mean-value-theorem]]: $\cosh$ is positive and even,
$(\tanh t)'=\operatorname{sech}^2t$, and $\log'=1/t$ on positive
arguments; the mean value theorem turns nonnegative derivatives into
monotonicity.

[F10] [[def-measurable-function-between-measurable-spaces]],
[[def-borel-sigma-algebra]], [[def-randomized-procedure-as-a-markov-kernel]],
[[def-dirac-measure]], and
[[prop-dirac-measure-is-a-probability-measure]]: a Borel finite-valued
classifier defines a deterministic probability kernel by its Dirac law.

[F11] [[def-multivariate-normal-law]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], and [[thm-composition-with-borel-functions-preserves-measurability]]: a fixed zero-padding linear map carries a centered Gaussian to the corresponding covariance-block embedding, including singular covariance; compositions with continuous coordinate embeddings and block extractions preserve Borel measurability. The compression norm inequality used below is proved directly from the operator-norm definition.

## Proof

1.1 First suppose $p\ge16$. Put $N_0=p(p-1)/2$ and let $W$ range over symmetric sign matrices with zero diagonal and independent $\{-1,1\}$ entries above the diagonal. For fixed unit $v$, $v^TWv=2\sum_{i<j}W_{ij}v_iv_j$. For $t\ge0$, put $h(t)=t-\tanh t$ and $g(t)=t^2/2-\log(\cosh t)$. By [F9], $h(0)=0$ and $h'(t)=1-\operatorname{sech}^2t=\tanh^2t\ge0$, so the mean value theorem gives $h(t)\ge0$; then $g(0)=0$ and $g'(t)=h(t)\ge0$. Evenness gives $g(t)\ge0$ for all real $t$, so $\cosh t\le e^{t^2/2}$. Since each $W_{ij}$ is a uniform sign and the signs are independent, $\mathbb E e^{\lambda v^TWv}=\prod_{i<j}\mathbb E e^{2\lambda v_iv_jW_{ij}}=\prod_{i<j}\cosh(2\lambda v_iv_j) \le\exp\!\left(2\lambda^2\sum_{i<j}v_i^2v_j^2\right)\le e^{\lambda^2}.$ Chernoff's inequality applied to both signs gives $\Pr(|v^TWv|>t)\le2e^{-t^2/4}$. By [F2], use a $1/4$-net with at most $9^p$ points; approximating each unit vector changes its quadratic form by at most $\frac12\|W\|_{\rm op}$. Thus $\|W\|_{\rm op}\le2\max_{v\text{ in net}}|v^TWv|$. A union bound at $t=8\sqrt p$ gives failure probability at most $2\cdot9^pe^{-16p}<1/2$. At least half of the sign matrices therefore satisfy $\|W\|_{\rm op}\le16\sqrt p$. [F2, F9, algebra]

1.2 In the finite Hamming cube of upper-triangular signs, greedily retain a good matrix and delete all good matrices within Hamming distance $\lfloor N_0/8\rfloor$. Each deleted ball contains at most $\sum_{j\le N_0/8}\binom{N_0}{j}\le e^{N_0h(1/8)}$ words, where $h(t)=-t\log t-(1-t)\log(1-t)$. For $\alpha=1/8$, the binomial theorem gives $1=\sum_{j=0}^{N_0}\binom{N_0}{j}\alpha^j(1-\alpha)^{N_0-j}$. Each weight with $j\le\alpha N_0$ is at least $\alpha^{\alpha N_0}(1-\alpha)^{(1-\alpha)N_0}=e^{-N_0h(\alpha)}$, which proves the ball bound. Greedy deletion retains at least $2^{N_0-1}e^{-N_0h(1/8)}$ words. The resulting code $\mathcal W$ has pairwise Hamming distance greater than $N_0/8$ and $$\log|\mathcal W|\ge N_0(\log2-h(1/8))-\log2 \ge\frac1{20}p^2.$$ Here $h(1/8)<\frac{19}{50}$, $N_0\ge p^2/3$, and $p\ge16$. For distinct code matrices, $\|W-W'\|_F^2$ is eight times their upper-triangular Hamming distance, hence at least $N_0$. [F8, construct, algebra]

1.3 Now suppose $1\le p\le15$. Set $\Sigma_0=(M/2)I$ and $\Sigma_1=(M/2)I+h e_1e_1^T$, where $h=\gamma M\sqrt{p/n}$. The condition $p/n\le c_1$ and small $\gamma$ make both matrices members of $\mathcal F_p(M)$. With $t=2h/M\le1/2$, [F3] gives $$D(N_p(0,\Sigma_0)\|N_p(0,\Sigma_1)) =\frac12[\log(1+t)+(1+t)^{-1}-1]\le t^2/4.$$ The derivative of the bracket is $t/(1+t)^2\le t$, proving the bound. By [F4], the $n$-sample KL is at most $\gamma^2p\le15\gamma^2$; choose $\gamma$ so it is at most $1/2$. [F1, F3, F4, algebra]

2.1 Set $\Sigma_W=(M/2)I+(a/\sqrt p)W$ with $a=\gamma M\sqrt{p/n}$, where $\gamma>0$ is sufficiently small. Since $\|W\|_{\rm op}\le16\sqrt p$, the perturbation has norm at most $16a$; choose $\gamma\sqrt{c_1}\le1/64$ so $16a\le M/4$. Thus each $\Sigma_W$ is positive definite and belongs to $\mathcal F_p(M)$ by [F1]. If $W\ne W'$, [F8] gives $$\|\Sigma_W-\Sigma_{W'}\|_{\rm op} \ge\frac ap\|W-W'\|_F \ge a\sqrt{\frac{N_0}{p^2}}\ge\frac a2.$$ [F1, F8, step 1.2, algebra]

2.2 Pinsker [F6] gives $\|P_0^{\otimes n}-P_1^{\otimes n}\|_{\rm TV}\le1/2$. By [F7], every binary test has maximum error probability at least $1/16$. The nearest-covariance test from an arbitrary estimator is wrong only when its operator error is at least $h/2$; its two decision cells are Borel by finite distance comparisons, so [F10] makes it an admissible test kernel. Therefore one of the two laws has probability at least $1/16$ of squared error at least $h^2/4=\gamma^2M^2p/(4n)$. This proves the rate for $p\le15$. [F6, F7, F10, step 1.3, algebra]

3.1 Let $Q_0=N_p(0,(M/2)I)$ be a reference law. For each $W$, the relative perturbation has eigenvalues $r_i$ with $|r_i|\le1/2$ and $\sum_i r_i=0$. By [F3], $$D(N_p(0,\Sigma_W)\|Q_0) =\frac12\sum_i(r_i-\log(1+r_i)) \le\frac12\sum_i r_i^2\le2(a/M)^2p.$$ The scalar inequality follows by integrating $t/(1+t)$ from zero to $r_i$ and using $|t/(1+t)|\le2|t|$ for $|t|\le1/2$. Also $\sum_i r_i^2=4a^2\|W\|_F^2/(M^2p)$ and $\|W\|_F^2=2N_0$. By [F4], the average $n$-sample KL to $Q_0^{\otimes n}$ is at most $2\gamma^2p^2$. Choose $\gamma$ smaller if needed so this is at most $\frac1{10}\log|\mathcal W|$. [F3, F4, step 1.2, step 2.1, algebra]

4.1 The Fano factor in [F5] satisfies $$1-\frac1{10}-\frac{\log2}{\log|\mathcal W|}>\frac12,$$ using $\log|\mathcal W|\ge p^2/20$ and $p\ge16$. Thus every classifier of the uniform index has error probability greater than $1/8$. Classify an estimator by its nearest $\Sigma_W$, resolving ties by least index. This rule is Borel: its decision cell for index $j$ is the finite intersection of strict distance comparisons against earlier indices and weak comparisons against later indices. If it is wrong, the triangle inequality and step 2.1 force operator error at least $a/4$. Thus the supremum tail probability at threshold $a^2/16$ is greater than $1/8$. Since $a^2=\gamma^2M^2p/n$, this proves the rate for $p\ge16$. [F5, F10, step 2.1, step 3.1, algebra]

5.1 Choose $c_1\le1/16$ and $c_M\le\gamma^2M^2/16$. Steps 4.1 and 2.2 give a probability lower bound at least $c_1$ at threshold $c_Mp/n$ in their respective dimension ranges. Taking the infimum over estimators and combining the ranges proves the first, small-ratio assertion for all dimensions satisfying its premise. [step 4.1, step 2.2, algebra]

6.1 Abbreviate the constants just established by $b=c_M>0$ and $c=c_1\in(0,1/16]$, and put $a_M=\min\{bc/2,M^2c/64\}$. If $p/n\le c$, step 5.1 gives tail probability at least $c$ at threshold $bp/n$. Since $a_M\le b$ and $\min\{1,p/n\}\le p/n$, lowering the threshold gives the asserted capped bound in this case. [step 5.1, given, algebra]

7.1 Suppose $p/n>c$ and $n\ge2/c$. Put $k=\lfloor cn\rfloor$, so $1\le k\le p$ and $c/2\le k/n\le c$. Let $J:\mathbb R^k\to\mathbb R^p$ be the zero-padding coordinate isometry. For any Borel ambient matrix estimator $A$, the rule $A_k(y_1,\ldots,y_n)=J^TA(Jy_1,\ldots,Jy_n)J$ is Borel by [F11]. For any matrix $B$, including a nonsymmetric one, $\|J^TBJ\|_{\rm op}\le\|B\|_{\rm op}$: for each unit $u$, $\|J^TBJu\|_2\le\|BJu\|_2\le\|B\|_{\rm op}$ because $J$ is an isometry and $J^T$ discards coordinates. Every $\Theta\in\mathcal F_k(M)$ embeds as $J\Theta J^T\in\mathcal F_p(M)$ by [F1], and [F11] identifies its iid sample with zero-padded $N_k(0,\Theta)$ observations. Apply the small-ratio result of step 5.1 in dimension $k$ to $A_k$. Since $\|A_k-\Theta\|_{\rm op}\le\|A-J\Theta J^T\|_{\rm op}$, the ambient supremum tail probability is at least $c$ at threshold $bk/n\ge bc/2\ge a_M\min\{1,p/n\}$. This holds for every ambient Borel estimator. [F1, F11, step 5.1, step 6.1, given, algebra]

7.2 Suppose $p/n>c$ and $n<2/c$. Take $\Sigma_0=(M/2)I_p$ and $\Sigma_1=\Sigma_0+h e_1e_1^T$, where $h=M\sqrt c/4$. Both are positive definite in $\mathcal F_p(M)$ and their operator separation is $h$. Put $t=2h/M=\sqrt c/2$. The scalar KL calculation from step 1.3 and [F3] gives $D(P_0\|P_1)=\frac12[\log(1+t)+(1+t)^{-1}-1]\le t^2/4=h^2/M^2$; the bracket has derivative $t/(1+t)^2\le t$ for $t\ge0$. Thus [F4] gives $D(P_0^{\otimes n}\|P_1^{\otimes n})\le nh^2/M^2<1/8$, and [F6] gives total variation at most $1/4$. Classify an arbitrary Borel estimator by the nearer of these two covariance matrices, resolving ties by the first index. This is a Borel binary test by [F10]. Apply the expected squared-risk theorem [F7] to that test with scalar targets $0,1$: its squared risks are exactly its error probabilities, so their maximum is at least $(1-\mathrm{TV})/8\ge3/32\ge c$. A wrong classification forces the original operator error to be at least $h/2$ by the triangle inequality. The ambient maximum tail probability is therefore at least $c$ at squared threshold $h^2/4=M^2c/64\ge a_M\min\{1,p/n\}$. [F1, F3, F4, F6, F7, F10, step 1.3, step 6.1, given, algebra]

8.1 The three cases in steps 6.1, 7.1, and 7.2 cover every $p,n\ge1$. Each establishes the same probability constant $c=c_1$ at threshold $a_M\min\{1,p/n\}$ for every Borel matrix-valued estimator, so taking their infimum proves the all-regime assertion. The preceding small-ratio result remains unchanged. [step 6.1, step 7.1, step 7.2, algebra] ∎
