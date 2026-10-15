---
dependency_level: 2
id: lem-geometric-strong-mixing-gives-lp-poisson-solution
kind: lemma
title: Geometric strong mixing gives an Lp Poisson solution
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-moments-variance-and-covariance
  - lem-strong-mixing-quantile-covariance-bound
  - lem-square-integrable-markov-transition-conditional-expectation
  - cor-conditional-lp-contraction
  - thm-chapman-kolmogorov-equations
  - thm-finite-measure-l-r-includes-into-l-p-for-p-less-r
  - thm-generalized-holder-inequality-for-products
  - thm-holder-inequality-for-integrals
  - thm-minkowski-inequality-for-integrals
  - thm-riesz-fischer-completeness-of-l-p
  - thm-monotone-convergence-for-the-integral
  - thm-covariance-bilinearity-and-symmetry
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: P. Doukhan, P. Massart and E. Rio, The functional central limit theorem for strongly mixing processes, Lemma 1 and Proposition 1
      url: https://www.numdam.org/item/AIHPB_1994__30_1_63_0.pdf
      locator: Printed p. 66/PDF p. 5, including the square-integrability condition on the covariance inequality, inspected in the rendered full PDF. The Lp solution and bounded-dual argument below are local deductions from the proved local quantile supplier.
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, §§3–4
      url: https://arxiv.org/pdf/math/0409112
      locator: Full PDF retrieved; Theorem 2's mixing-rate implication and Theorem 5's covariance variance in §§3–4 inspected. No external theorem supplies the Poisson solution below.
axiom_use: AC is assumed through the conditional-expectation and Markov interfaces and Lp completeness, including the choice of a measurable representative of the norm limit.
---

## Statement

Assume AC. Let $P$ be a probability kernel on an arbitrary measurable space $(\mathsf X,\mathcal X)$ with invariant probability $\pi$. Let $(X_k)_{k\ge0}$ be its stationary Markov chain, and suppose its strong-mixing coefficients satisfy $\alpha_X(n)\le Cr^n$ for $n\ge1$, with $0\le C<\infty$ and $0<r<1$. Let $f:\mathsf X\to\mathbb R$ be measurable with $\pi f=0$ and $\pi|f|^q<\infty$ for some finite $q>2$.

For every $2<p<q$, put $\theta=1/p-1/q$. The kernel operators are understood on $\pi$-almost-everywhere classes, with finite measurable versions obtained by setting divergent integrals to zero on their $\pi$-null exceptional sets. Then
$$\|P^nf\|_{L^p(\pi)}\le4\alpha_X(n)^\theta\|f\|_{L^q(\pi)}\qquad(n\ge1),$$
and the series $g=\sum_{n=0}^\infty P^nf$ converges in $L^p(\pi)$, with
$$f=g-Pg\qquad\pi\text{-almost everywhere}.$$
Moreover, writing $c_n=\operatorname{Cov}_\pi(f(X_0),f(X_n))$, one has
$$|c_n|\le4\alpha_X(n)^{1-2/q}\|f\|_{L^q(\pi)}^2\quad(n\ge1),\qquad\sum_{n\ge1}|c_n|<\infty.$$
The covariance sum $v=\pi(f^2)+2\sum_{n\ge1}c_n$ is finite and nonnegative, and
$$\frac1n\mathbb E_\pi\left(\sum_{k=0}^{n-1}f(X_k)\right)^2\longrightarrow v.$$

## Facts & Assumptions

**Given:** AC, the stationary kernel and invariant probability, the geometric strong-mixing bound, centered real $f\in L^q(\pi)$, and $2<p<q$.

[A1] AC is assumed. [[def-axiom-of-choice]]

[F1] For square-integrable variables in sigma-algebras with event mixing coefficient $a$, $|\operatorname{Cov}(U,V)|\le4\int_0^aQ_UQ_V$, and $\int_0^1\psi(Q_U(u))\,du=\mathbb E\psi(|U|)$ for nonnegative Borel $\psi$. Separation by $n$ bounds $a$ by $\alpha_X(n)$. [[lem-strong-mixing-quantile-covariance-bound]], [[def-mixing-coefficients-for-stationary-markov-chain]]

[F2] The bounded Markov identity is $\mathbb E[h(X_{j+n})\mid\mathcal F_j]=P^nh(X_j)$; its square-integrable extension identifies the conditional mean with the kernel integral on a full invariant-measure set. [[thm-chapman-kolmogorov-equations]], [[lem-square-integrable-markov-transition-conditional-expectation]]

[F3] Conditional expectation is an $L^p$ contraction, and on a probability space $L^q\subset L^p\subset L^2$ when $q>p>2$. [[cor-conditional-lp-contraction]], [[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]

[F4] Hölder and its product form bound products in the corresponding $L^s$ spaces; Minkowski bounds the norm of a finite sum by the sum of norms. [[thm-holder-inequality-for-integrals]], [[thm-generalized-holder-inequality-for-products]], [[thm-minkowski-inequality-for-integrals]]

[F5] Under AC, $L^p$ is complete, consists of almost-everywhere classes of measurable representatives, and norm-convergent sequences have almost-everywhere convergent representative subsequences. [[thm-riesz-fischer-completeness-of-l-p]], [[def-l-p-space-as-a-quotient-by-null-functions]]

[F6] Increasing nonnegative measurable functions pass through integration by monotone convergence. [[thm-monotone-convergence-for-the-integral]]

[F7] Invariance means $\pi P=\pi$; the identity extends from indicators to nonnegative measurable functions by increasing simple approximations. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]]

[F8] Centered second moments are variances, covariance is the centered product expectation, and covariance is bilinear and symmetric. [[def-moments-variance-and-covariance]], [[thm-covariance-bilinearity-and-symmetry]]

## Proof

1.1 Invariance [F7], extended with [F6], gives $\pi P|h|=\pi|h|$ for integrable $h$, so the absolute kernel integral is finite off a measurable $\pi$-null set. A change of representative on a $\pi$-null set $A$ does not change its image class, since $\pi P1_A=\pi(A)=0$ implies $P1_A=0$ almost everywhere. For $h\in L^p$, [F3] gives $h\in L^2$, and [F2] identifies $Ph(X_0)$ with $\mathbb E[h(X_1)\mid X_0]$. Conditional contraction [F3] and stationarity give $\|Ph\|_p\le\|h\|_p$. The bounded iteration identity in [F2] extends to these $L^p$ classes by replacing $h$ with its bounded clipped truncations: their $L^p$ error tends to zero because the integrable tail $|h|^p1_{\{|h|>K\}}$ tends to zero, as follows from [F6] applied to its complementary truncations; conditional and kernel contractions pass this error to zero. Thus $P$ is a well-defined linear contraction on $L^p$, its iterates agree with the kernel iterates, and $P^nh(X_0)=\mathbb E[h(X_n)\mid X_0]$. This also proves $P^nf\in L^p$ before any covariance estimate is used. [A1, F2, F3, F6, F7, given]

2.1 Fix $n\ge1$, put $Z=P^nf$, and let $p'=p/(p-1)$ and $W_K(x)=\operatorname{sgn}(Z(x))|Z(x)|^{p-1}1_{\{|Z(x)|\le K\}}$ for integers $K\ge1$. This function is bounded, belongs to $L^2$, and satisfies $\|W_K\|_{p'}\le\|Z\|_p^{p-1}$. The centered $f(X_n)$ is in $L^2$ by [F3]. Step 1.1 and bounded conditional multiplication give $\mathbb E[W_K(X_0)f(X_n)]=\pi(W_KP^nf)=\pi(|Z|^p1_{\{|Z|\le K\}})$; since $\pi f=0$, this expectation is the covariance of $W_K(X_0)$ and $f(X_n)$. Bounded conditional multiplication here follows directly from the defining conditional expectation event identity, first for simple $W_K$ and then by uniform bounded approximation. Thus [F1] is applied only to square-integrable variables, even though $p'<2$. [F1, F3, step 1.1, given, construct, algebra]

3.1 Put $a=\alpha_X(n)$. The quantile identity in [F1] gives $\|Q_{W_K(X_0)}\|_{p'}=\|W_K\|_{p'}$ and $\|Q_{f(X_n)}\|_q=\|f\|_q$. Since $1/p'+1/q=1-\theta$, apply the product inequality [F4] to these two quantile functions in $L^{1/(1-\theta)}(0,1)$, and then Hölder with $1_{(0,a)}$, whose $L^{1/\theta}$ norm is $a^\theta$. Therefore [F1] and step 2.1 give $\pi(|Z|^p1_{\{|Z|\le K\}})\le4a^\theta\|Z\|_p^{p-1}\|f\|_q$. If $a=0$ the quantile integral and the right-hand side are zero. Let $K\to\infty$ using [F6]. If $\|Z\|_p=0$ the required bound is immediate; otherwise divide by $\|Z\|_p^{p-1}$ to obtain $\|P^nf\|_p\le4\alpha_X(n)^\theta\|f\|_q$. The restriction $p<q$ ensures $\theta>0$ and makes all Hölder exponents just used valid. [F1, F4, F6, step 2.1, algebra]

4.1 The geometric bound makes $\sum_{n\ge1}\alpha_X(n)^\theta\le C^\theta\sum_{n\ge1}r^{n\theta}<\infty$, including $C=0$. By step 3.1, [F4] makes $g_m=\sum_{n=0}^mP^nf$ a Cauchy sequence in $L^p$. Completeness [F5] gives $g_m\to g\in L^p$. The contraction in step 1.1 gives $Pg_m\to Pg$, while $g_m-Pg_m=f-P^{m+1}f\to f$ in $L^p$ by step 3.1. Thus $g-Pg=f$ as almost-everywhere classes. Choose the finite measurable representative supplied by [F5], setting it to zero on its measurable null exceptional set if necessary, and use the version convention from step 1.1 for $Pg$. These choices make the asserted almost-everywhere identity precise on the original sigma-algebra without completing the measure. [A1, F4, F5, step 1.1, step 3.1, construct, algebra]

4.2 Apply [F1] directly to $f(X_0),f(X_n)$, both square-integrable. Their quantiles have common $L^q(0,1)$ norm $\|f\|_q$. Two applications of [F4], with reciprocal exponents $1/q,1/q,1-2/q$, yield $|c_n|\le4\alpha_X(n)^{1-2/q}\|f\|_q^2$. The exponent is positive because $q>2$; the geometric bound therefore gives $\sum_{n\ge1}|c_n|<\infty$. At a zero mixing coefficient the quantile integral is zero, so no division by that coefficient is needed. [F1, F3, F4, step 3.1, given, algebra]

5.1 Centering, stationarity and [F8] give $n^{-1}\mathbb E_\pi(\sum_{k=0}^{n-1}f(X_k))^2=\pi(f^2)+2\sum_{h=1}^{n-1}(1-h/n)c_h$. To pass to its limit, choose any finite $H$; the terms $h\le H$ converge individually to $c_h$, while the absolute value of either remaining weighted or limiting tail is at most $\sum_{h>H}|c_h|$, which tends to zero as $H\to\infty$ by step 4.2. The limit is the claimed finite covariance sum $v$. Each left-hand side is nonnegative, hence $v\ge0$. When $f=0$ almost everywhere all bounds and the choice $g=0$ hold directly; no claim of uniqueness of $g$ is made. The strict exponent range and all zero-mixing cases were handled in steps 3.1, 4.1, 4.2. AC is used through the Markov/conditional and completeness suppliers, not as an imported covariance or Poisson theorem. [A1, F5, F8, step 4.1, step 4.2, given, algebra] ∎

## Source notes

The actual Doukhan–Massart–Rio full PDF was retrieved and its printed p. 66 inspected as a rendered page, including the finite-variance restriction of Lemma 1 and the covariance-sum conclusion of Proposition 1. The proof above consumes the fully proved local quantile lemma. Its test variable is bounded before that lemma is applied; the unbounded $L^{p'}$ dual variable, whose exponent is less than two, is never inserted into a result requiring square integrability. The Poisson-series construction, norm convergence and nonnegative variance limit are proved here, not replaced by a source citation.
