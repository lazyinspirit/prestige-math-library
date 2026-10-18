---
id: lem-wide-gaussian-pseudoinverse-spectral-moments-and-tail
kind: lemma
title: Spectral moments and integrable tails for wide Gaussian pseudoinverses
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence, lem-wide-gaussian-pseudoinverse-frobenius-moments, thm-real-beta-gamma-identity, def-real-gamma-function-by-the-euler-integral, cor-real-gamma-one-half-is-root-pi, thm-real-gamma-functional-equation, thm-real-gamma-is-smooth, thm-logarithm-derivative-and-integral, thm-jensen-inequality-for-expectation, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-countable-choice, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-operator-norm-is-the-largest-singular-value]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Proposition 10.2 and Appendix A.1"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §11.4.2"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

For $G\in F^{k\times(k+p)}$ as in
[[lem-wide-gaussian-pseudoinverse-frobenius-moments]], put $X=\|G^\dagger\|_2$.
For $0<q<(p+1)/2$ over $\mathbb R$ and $0<q<p+1$ over normalized $\mathbb C$,
$$
\mathbb E X^{2q}\le C_R(q):=\frac{2^{-q}\sqrt\pi\,\Gamma((p+1)/2-q)\Gamma(k/2+q)}{\Gamma((p+1)/2)\Gamma(k/2)\Gamma(q+1/2)},
$$
$$
\mathbb E X^{2q}\le C_C(q):=\frac{\Gamma(p+1-q)\Gamma(k+q)}{\Gamma(p+1)\Gamma(k)\Gamma(q+1)}.
$$
For integers $p\ge2$, writing $\ell=k+p$ and $a=e\sqrt\ell/p$,
$$
\mathbb E X^p\le a^p\quad(F=\mathbb R),\qquad
\mathbb E X^{2p}\le a^{2p}\quad(F=\mathbb C).
$$
Consequently $\mathbb E X\le a$ and
$$
\mathbb P\{X>t\}\le\min(1,(a/t)^p)\quad(F=\mathbb R),\qquad
\mathbb P\{X>t\}\le\min(1,(a/t)^{2p})\quad(F=\mathbb C),
$$
for $t>0$. In the randomized range-finder application $p\ge2$, so these tails
are integrable at infinity.

## Facts & Assumptions

**Given:** $k\ge1$, an admissible oversampling parameter, and the finite Gaussian law with Countable Choice. For the sphere calculation, take an independent standard Gaussian vector $h\in F^k$ and set $v=h/\|h\|$ when $h\ne0$; define $v$ arbitrarily on the null event $h=0$.

[F1] For each $i$, $((GG^*)^{-1})_{ii}$ has the reciprocal Gamma law stated in [[lem-wide-gaussian-pseudoinverse-frobenius-moments]].

[F2] Orthogonal/unitary changes preserve Gaussian matrix law ([[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]).

[F3] The beta and gamma integrals satisfy the Beta–Gamma identity ([[thm-real-beta-gamma-identity]]).

[F4] $\Gamma$ is smooth and its derivatives are logarithmic moments ([[thm-real-gamma-is-smooth]]); in particular $\Gamma'(x)/\Gamma(x)=\mathbb E\log U$ for $U\sim\Gamma(x,1)$.

[F5] Jensen's inequality applies to integrable random variables ([[thm-jensen-inequality-for-expectation]]).

[F6] $\Gamma(1/2)=\sqrt\pi$ ([[cor-real-gamma-one-half-is-root-pi]]).

[F7] The natural logarithm has derivative $1/x$ on $(0,\infty)$ ([[thm-logarithm-derivative-and-integral]]).

[F8] Nonnegative product integrals may be interchanged ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F9] Standard real and normalized complex Gaussian coordinate densities are defined in [[def-standard-real-and-normalized-complex-gaussian-matrix-law]].

[F10] $\Gamma(x+1)=x\Gamma(x)$ for $x>0$, and $\Gamma(1)=1$ ([[thm-real-gamma-functional-equation]]).

[F11] For a matrix $B$ with $B^*B=M\succeq0$, $\|B\|_2^2=\lambda_{\max}(M)$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[thm-operator-norm-is-the-largest-singular-value]]).

[A1] Countable Choice supplies the finite-dimensional Lebesgue measures in use ([[def-countable-choice]]).

## Proof

1.1 If $h=0$, define $v$ arbitrarily; this event is null under the density [F9]. If $k=1$, then $|v_1|=1$ and both displayed sphere-moment formulas equal $1$. Suppose $k\ge2$. The independent variables $|h_1|^2$ and $\sum_{j=2}^k|h_j|^2$ have Gamma shapes $(1/2,(k-1)/2)$ and common scale $2$ over $\mathbb R$, and shapes $(1,k-1)$ and common scale $1$ over $\mathbb C$. In their joint density set $s=x+y$, $t=x/(x+y)$; the Jacobian is $s$, so the density factors into a Gamma$(a+b,\theta)$ factor in $s$ and a Beta$(a,b)$ factor in $t$ after scaling by the common scale $\theta$. Thus $\mathbb E t^q=B(a+q,b)/B(a,b)$; [F3] gives $c_R(q)=\Gamma(k/2)\Gamma(q+1/2)/(\sqrt\pi\Gamma(k/2+q))$ over $\mathbb R$ and $c_C(q)=\Gamma(k)\Gamma(q+1)/\Gamma(k+q)$ over $\mathbb C$. Invariance makes the same moment hold for $|\langle v,u\rangle|$ for every fixed unit $u$. [given, F3, F6, F9, A1, choose]

1.2 For $a,s>0$, $\Gamma(a+s)/\Gamma(a)\le(a+s)^s$. If $U\sim\Gamma(x,1)$, direct integration and [F10] give $\mathbb EU=\Gamma(x+1)/\Gamma(x)=x$. The density makes $\log U$ integrable, since $u^{x-1}|\log u|$ is integrable near zero and the exponential factor controls infinity. Thus [F4] gives $\psi(x):=\Gamma'(x)/\Gamma(x)=\mathbb E\log U$. Jensen [F5] for the convex function $-\log$ yields $\mathbb E\log U\le\log\mathbb EU=\log x$. Integrating $\psi$ from $a$ to $a+s$ yields $\log\Gamma(a+s)-\log\Gamma(a)\le s\log(a+s)$ and hence the ratio bound. [F4, F5, F10, algebra]

1.3 For an integer $p\ge1$, $\Gamma((p+1)/2)\ge\sqrt\pi(p/(2e))^{p/2}$. If $p=2r$, use [F10] and [F6] to write $\Gamma(r+1/2)=\sqrt\pi\prod_{j=1}^r(j-1/2)$; [F7] gives $(\log x)''=-1/x^2<0$. For $j\ge2$, midpoint concavity yields $\log(j-1/2)\ge\int_{j-1}^j\log x\,dx$; for $j=1$, $\log(1/2)\ge\int_0^1\log x\,dx=-1$. The product is at least $\sqrt\pi(r/e)^r$. If $p=2r+1$, [F10] gives $\Gamma((p+1)/2)=r!$ and midpoint concavity gives $\log(r!)\ge\int_{1/2}^{r+1/2}\log x\,dx$; hence $r!\ge\sqrt{2e}((r+1/2)/e)^{r+1/2}\ge\sqrt\pi((r+1/2)/e)^{r+1/2}$, since $e>2$ from its series and $\pi<4$ from the unit disk lying in a square of area $4$. Also $p!\ge(p/e)^p$ follows from $\sum_{j=1}^p\log j\ge\int_1^p\log x\,dx$. [given, F6, F7, F10, algebra]

2.1 Put $M=(GG^*)^{-1}$. By the pseudoinverse identity in the proof of [F1], $X^2=\lambda_{\max}(M)$ by [F11]. For each fixed positive $M$, choose a unit eigenvector $u$ for its largest eigenvalue. Then $v^*Mv\ge\lambda_{\max}(M)|\langle v,u\rangle|^2$, so integrating over $v$ and using the sphere moment $c_F(q)$ from step 1.1 gives $\mathbb E_v(v^*Mv)^q\ge\lambda_{\max}(M)^q c_F(q)$. Tonelli [F8] interchanges the nonnegative integrals over $G$ and $v$. For each fixed $v$, invariance [F2] makes $v^*Mv$ distributed as $M_{11}$. Using the reciprocal Gamma law [F1] and dividing by $c_F(q)$ gives exactly $C_R(q)$ or $C_C(q)$ in the statement. [step 1.1, F1, F2, F8, F11, algebra]

3.1 Use the real moment bound from step 2.1 with $q=p/2$, the Gamma-ratio estimate in step 1.2, and the lower bound in step 1.3 to obtain $\mathbb E X^p\le(e\sqrt{k+p}/p)^p$. For the complex case, use the $C_C$ moment bound from step 2.1 with $q=p$, the ratio estimate from step 1.2, and the factorial bound in step 1.3 twice to obtain $\mathbb E X^{2p}\le(e\sqrt{k+p}/p)^{2p}$. Jensen for the convex powers gives $\mathbb E X\le(\mathbb E X^p)^{1/p}$ in the real case and $\mathbb E X\le(\mathbb E X^{2p})^{1/(2p)}$ in the complex case. For either exponent $r=p$ or $r=2p$, the pointwise inequality $t^r\mathbf1_{\{X>t\}}\le X^r$ implies $\mathbb P\{X>t\}\le\mathbb EX^r/t^r$; using the moment bounds and also $\mathbb P\{X>t\}\le1$ gives the displayed tails. Since $r>1$ for $p\ge2$, $t\mapsto(a/t)^r$ is integrable on $[1,\infty)$, so these tails are integrable at infinity. [step 2.1, step 1.2, step 1.3, F5, algebra] ∎
