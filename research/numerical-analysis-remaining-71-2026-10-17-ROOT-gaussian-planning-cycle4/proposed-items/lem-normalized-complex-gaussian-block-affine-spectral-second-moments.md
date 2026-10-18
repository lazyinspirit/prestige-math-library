---
id: lem-normalized-complex-gaussian-block-affine-spectral-second-moments
kind: lemma
title: Affine second-moment bounds for normalized complex Gaussian block products
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence, lem-wide-gaussian-matrix-has-full-row-rank-almost-surely, lem-wide-gaussian-pseudoinverse-frobenius-moments, thm-real-beta-gamma-identity, def-real-gamma-function-by-the-euler-integral, thm-real-gamma-functional-equation, thm-logarithm-derivative-and-integral, thm-finite-jensen-inequality, thm-finite-jensen-inequality-in-euclidean-space, thm-jensen-inequality-for-expectation, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-singular-value-decomposition, thm-operator-norm-is-the-largest-singular-value, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-moore-penrose-pseudoinverse-exists-and-is-unique, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, §10 and Appendix A; contextual Gaussian block setting, with the present coarse complex estimates derived locally"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $k\ge1$, $p\ge2$, $\ell=k+p$, and $d,a\ge1$ be integers. Let
$G_1\in\mathbb C^{k\times\ell}$ and $G_2\in\mathbb C^{d\times\ell}$ be
independent matrices with iid normalized complex Gaussian entries,
$\mathbb E|g|^2=1$. Set $Z=G_2G_1^\dagger$. For every fixed
$S\in\mathbb C^{a\times d}$, writing $C=2\sqrt2e$, one has
$$\mathbb E\|SZ\|_2^2\le\frac{C\ell}{p^2}\left(\|S\|_F^2+\frac p4\|S\|_2^2\right),$$
$$\mathbb E\|SZ\|_2^2\le\frac{e^2\ell}{p^2}\left(\|S\|_F^2+\frac p2\|S\|_2^2\right).$$
These are coarse second-moment bounds; no sharp complex Chevet comparison is assumed.

## Facts & Assumptions

**Given:** Countable Choice, the stated independent normalized complex Gaussian blocks, and a fixed compatible matrix $S$.

[F1] The normalized law has density $\pi^{-1}e^{-|z|^2}$ and is invariant under compatible unitary changes, preserving iid block independence ([[def-standard-real-and-normalized-complex-gaussian-matrix-law]], [[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]).

[F2] $G_1$ has full row rank almost surely; on that event $M=(G_1G_1^*)^{-1}=(G_1^\dagger)^*G_1^\dagger$, $M_{11}$ has the reciprocal $\Gamma(p+1,1)$ law, and $\mathbb E\operatorname{tr}M=k/p$ ([[lem-wide-gaussian-matrix-has-full-row-rank-almost-surely]], [[lem-wide-gaussian-pseudoinverse-frobenius-moments]]).

[F3] Euler Gamma integration, its functional equation, and the Beta–Gamma identity are available ([[def-real-gamma-function-by-the-euler-integral]], [[thm-real-gamma-functional-equation]], [[thm-real-beta-gamma-identity]]).

[F4] Finite Jensen and Jensen for expectation hold; the concave versions follow by negation ([[thm-finite-jensen-inequality]], [[thm-finite-jensen-inequality-in-euclidean-space]], [[thm-jensen-inequality-for-expectation]]).

[F5] Nonnegative product integrals can be interchanged ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] Finite real or complex matrices admit SVDs, and the operator norm is the largest singular value and is given by the unit-vector maximum ([[thm-singular-value-decomposition]], [[thm-operator-norm-is-the-largest-singular-value]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

[F7] $\log'(t)=1/t$, so $\log$ is concave on $(0,\infty)$ ([[thm-logarithm-derivative-and-integral]]).

[A1] Countable Choice supplies the repository's finite-dimensional Lebesgue Gaussian measures ([[def-countable-choice]]).

## Proof

1.1 The Moore–Penrose inverse is Borel: the SVD and its reciprocal formula from [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]] give $G_1^\dagger=\lim_{n\to\infty}G_1^*(G_1G_1^*+n^{-1}I)^{-1}$, a pointwise limit of continuous matrix functions. Thus $Z$ is measurable. On the full-row-rank event use $M$ from [F2]; its complement is null. For every fixed unit $v\in\mathbb C^k$, unitary invariance [F1] makes $v^*Mv$ have the same reciprocal $\Gamma(p+1,1)$ law as $M_{11}$. For fixed $G_1$, each coordinate of $G_2G_1^\dagger v$ is normalized complex Gaussian with variance $v^*Mv$, by applying a fixed unitary completion to the vector $G_1^\dagger v$; the coordinates are independent by [F1]. [given, F1, F2, F6, A1, algebra]

1.2 Polar integration in the density [F1] makes one squared complex Gaussian modulus have density $e^{-u}$ on $u>0$. The convolution of independent Gamma densities of common scale1 and shapes $a,b$ has shape $a+b$: substitute $u=st$ in $\int_0^s u^{a-1}(s-u)^{b-1}du$ and use [F3]. Thus the squared norm of $j$ independent normalized complex coordinates has the $\Gamma(j,1)$ law. Direct Euler integration gives its $q$th moment $\Gamma(j+q)/\Gamma(j)$ and the inverse moment $\Gamma(p+1-q)/\Gamma(p+1)$ of $\Gamma(p+1,1)$ for $0<q<p+1$. Integrate first over $G_2$ and then $G_1$ using step 1.1 and [F5]. If $P_j$ keeps the first $j\ge1$ rows, this proves $\mathbb E\|P_jZv\|_2^{2q}=\Gamma(j+q)\Gamma(p+1-q)/(\Gamma(j)\Gamma(p+1))$ for every fixed unit $v$. [step 1.1, F1, F3, F5, algebra]

2.1 For an independent invariant sphere vector $v=h/\|h\|$ in $\mathbb C^k$, its coordinate moment is $c_k(q)=\Gamma(k)\Gamma(q+1)/\Gamma(k+q)$. For $k=1$ both sides equal1. For $k\ge2$, step 1.2 makes $|h_1|^2$ and $\sum_{i>1}|h_i|^2$ independent Gamma variables with shapes1 and $k-1$. The substitution $s=x+y,t=x/(x+y)$ has Jacobian $s$ and factors their joint density into Gamma and Beta factors; [F3] then evaluates $\mathbb E t^q=c_k(q)$. For each fixed positive matrix $A=Z^*P_j^*P_jZ$, a unit top eigenvector $u$ gives $v^*Av\ge\lambda_{\max}(A)|u^*v|^2$. Integrating over $v$, then $Z$ by [F5], and using step 1.2 gives $\mathbb E\|P_jZ\|_2^{2q}\le\Gamma(j+q)\Gamma(k+q)\Gamma(p+1-q)/(\Gamma(j)\Gamma(k)\Gamma(q+1)\Gamma(p+1))$. The eigenvector is chosen only in this pointwise inequality; no random measurable eigenvector is selected. [step 1.2, F1, F3, F5, F6, choose, algebra]

2.2 The law of $Z$ is invariant under left unitary multiplication by [F1]. Expanding the conditional coordinate second moments gives $\mathbb E_{G_2}\|G_2G_1^\dagger\|_F^2=d\|G_1^\dagger\|_F^2$, so [F2] and [F5] give $\mathbb E\|Z\|_F^2=dk/p<\infty$. For integer $1\le q\le p$, [F4] and step 2.1 therefore imply $\mathbb E\|P_jZ\|_2^2\le[(k)_q(j)_q/(q!(p)_{\downarrow q})]^{1/q}$, where $(b)_q=b(b+1)\cdots(b+q-1)$ and $(p)_{\downarrow q}=p(p-1)\cdots(p-q+1)$; this expression follows from [F3]. [step 2.1, F1, F2, F3, F4, F5, algebra]

3.1 Concavity of $\log$ in [F7] and finite Jensen [F4] give $(k)_q^{1/q}\le k+(q-1)/2\le\ell$ and $(j)_q^{1/q}\le j+(q-1)/2$. Also $\sum_{r=1}^q\log r\ge\int_1^q\log t\,dt\ge q\log q-q$, hence $(q!)^{1/q}\ge q/e$. Pairing reversed factors yields $(p)_{\downarrow q}^{1/q}\ge\sqrt{p(p-q+1)}$, since $(p-i)(p-q+1+i)=p(p-q+1)+i(q-1-i)\ge p(p-q+1)$; the middle factor when $q$ is odd obeys the same squared inequality. Take $q=\lceil p/2\rceil$. Then $q\ge p/2$, $p-q+1\ge p/2$ and $(q-1)/2\le p/4$, so step 2.2 gives $\mathbb E\|P_jZ\|_2^2\le C\ell p^{-2}(j+p/4)$. Taking $q=p$ instead gives $\mathbb E\|P_jZ\|_2^2\le e^2\ell p^{-2}(j+p/2)$. For $j=0$ both upper bounds hold because $P_0Z=0$. [step 2.2, F3, F4, F7, algebra]

4.1 If $S=0$ both claims are immediate. Otherwise put $\sigma=\|S\|_2>0$ and diagonalize $S^*S$ by [F6]. By left invariance of $Z$, it suffices to consider $S^*S=\sigma^2\operatorname{diag}(w)$, with $0\le w_i\le1$ and $\sum_iw_i=\|S\|_F^2/\sigma^2$. The finite function $f(w)=\mathbb E\lambda_{\max}(Z^*\operatorname{diag}(w)Z)$ is convex by the unit-vector maximum in [F6], and symmetric by left permutation invariance. Choose a subset $J$ by including each $i$ with probability $w_i$ under the explicit finite distribution $\prod_{i\in J}w_i\prod_{i\notin J}(1-w_i)$. Its mean indicator is $w$ and $\mathbb E|J|=\sum_iw_i$. Finite Jensen [F4] gives $f(w)\le\mathbb E_J f(\mathbf1_J)$. For either affine upper bound $h(j)$ in step 3.1, symmetry gives $f(\mathbf1_J)=\mathbb E\|P_{|J|}Z\|_2^2\le h(|J|)$, hence $f(w)\le h(\sum_iw_i)$. Multiply by $\sigma^2$ to obtain both stated bounds. This finite-subset argument includes all $w_i=0$ or1 and the full row-count endpoint without evaluating a nonexistent $P_{d+1}$. [step 2.2, step 3.1, F4, F6, construct, algebra] ∎
