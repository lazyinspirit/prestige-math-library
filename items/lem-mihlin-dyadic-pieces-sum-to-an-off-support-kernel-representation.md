---
id: lem-mihlin-dyadic-pieces-sum-to-an-off-support-kernel-representation
kind: lemma
title: "Dyadic Mihlin pieces sum to an off-support kernel representation"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-dominated-convergence, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-countable-choice, def-fourier-transform-of-a-tempered-distribution, def-mihlin-symbol-with-more-than-half-dimension-derivatives, lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "proof of Theorem 6.2.7: the S' convergence, the a.e. convergence of the dyadic series and condition (6.2.20), printed pp. 447–449"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). In the setting of
[[lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control]] — $m$ a
Mihlin symbol with constants $C_\alpha$
([[def-mihlin-symbol-with-more-than-half-dimension-derivatives]]),
$\zeta$ the annulus cutoff with $\sum_{j\in\mathbb Z}\zeta(2^{-j}\xi)=1$ for
$\xi\ne0$, $m_j=m\,\zeta(2^{-j}\cdot)$, $K_j=\mathcal F^{-1}(u_{m_j})$ — the
following hold, with $W:=m^\vee$ and $A\ge\max\{\|m\|_\infty,\max_{|\alpha|\le n_0}C_\alpha\}$:

1. $\sum_{|j|\le N}K_j\to W$ in $\mathcal S'(\mathbb R^n)$ as $N\to\infty$;
2. the series $\sum_{j\in\mathbb Z}K_j(x)$ converges for almost every
   $x\in\mathbb R^n\setminus\{0\}$ to a function $k$ that coincides with $W$ on
   $\mathbb R^n\setminus\{0\}$; and
3. that function $k$ satisfies the annular size bound
   $\sup_{\delta>0}\int_{\delta\le|x|\le2\delta}|k(x)|\,dx\le C_nA$ and
   Hörmander's condition
   $\sup_{y\ne0}\int_{|x|\ge2|y|}|k(x-y)-k(x)|\,dx\le C_nA$.

## Facts & Assumptions

**Given:** Countable Choice; the Mihlin symbol $m$ with constants $C_\alpha$ and $q=n_0=\lfloor n/2\rfloor+1$; the cutoff $\zeta$ and the pieces $m_j,K_j$; a finite $A\ge\max\{\|m\|_\infty,\max_{|\alpha|\le n_0}C_\alpha\}$; a scale $\delta>0$; a dyadic integer $k$ and a vector $y\ne0$.

[F1] $\mathcal S'$ is endowed with the pairing $\langle u,\varphi\rangle$; the Fourier transform $\mathcal F$ is a linear automorphism of $\mathcal S'$ with inverse $\mathcal F^{-1}$, and $\mathcal F$ maps $\mathcal S$ into $\mathcal S$; and for every $\psi\in\mathcal S$ the regular distribution $u_{m_j}$ of the $L^1$ function $m_j$ satisfies $\langle u_{m_j},\psi\rangle=\int m_j\psi$. Hence $\langle K_j,\varphi\rangle=\langle\mathcal F^{-1}u_{m_j},\varphi\rangle=\langle u_{m_j},\mathcal F^{-1}\varphi\rangle=\int m_j(\xi)\,(\mathcal F^{-1}\varphi)(\xi)\,d\xi$ for $\varphi\in\mathcal S$ ([[def-fourier-transform-of-a-tempered-distribution]]).

[F2] $m$ agrees with a $C^{n_0}$ function off the origin, $|m|\le\|m\|_\infty\le A$ almost everywhere, and the cutoff $\zeta$ is nonnegative, supported in $1/2\le|\xi|\le2$, bounded by $1$, with $\sum_{j\in\mathbb Z}\zeta(2^{-j}\xi)=1$ for $\xi\ne0$; consequently $\sum_{|j|\le N}m_j(\xi)=m(\xi)\sum_{|j|\le N}\zeta(2^{-j}\xi)\to m(\xi)$ for every $\xi\ne0$, with $|\sum_{|j|\le N}m_j|\le\|m\|_\infty$ ([[def-mihlin-symbol-with-more-than-half-dimension-derivatives]], [[lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control]]).

[F3] $\sup_{j}\int|K_j(x)|(1+2^j|x|)^{1/4}dx\le C_nA$ and $\sup_j2^{-j}\int|\nabla K_j(x)|(1+2^j|x|)^{1/4}dx\le C_nA$ ([[lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control]]).



[F4] Dominated convergence permits passage to an almost-everywhere limit under an integrable majorant, and Tonelli permits interchange of nonnegative sums and integrals on the sigma-finite Euclidean product. ([[thm-dominated-convergence]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

**Proof technique:** direct.

1.1 Transposition of the inverse Schwartz transform is the inverse distribution transform: composing either way tests against $\mathcal F\mathcal F^{-1}\varphi=\varphi$. Thus the inverse in [F1] uses $\mathcal F^{-1}$ on tests. The partial sums converge in $\mathcal S'$: for $\varphi\in\mathcal S$, using [F1] and [F2], $$\Bigl\langle\sum_{|j|\le N}K_j,\varphi\Bigr\rangle=\int_{\mathbb R^n}\Bigl(\sum_{|j|\le N}m_j(\xi)\Bigr)(\mathcal F^{-1}\varphi)(\xi)\,d\xi\longrightarrow\int_{\mathbb R^n}m(\xi)(\mathcal F^{-1}\varphi)(\xi)\,d\xi=\langle W,\varphi\rangle,$$ by dominated convergence with majorant $\|m\|_\infty|\mathcal F^{-1}\varphi|\in L^1$ and pointwise convergence $\sum_{|j|\le N}m_j(\xi)=m(\xi)\sum_{|j|\le N}\zeta(2^{-j}\xi)\to m(\xi)$ for $\xi\ne0$; the limit pairing is $\langle m^\vee,\varphi\rangle=\langle W,\varphi\rangle$. [F1, F2, F4, algebra]

1.2 Two elementary estimates. First, from $K_j(x)=\int m_j(\xi)e^{2\pi ix\cdot\xi}d\xi$, which is absolutely convergent because $m_j$ is supported in the annulus $2^{j-1}\le|\xi|\le2^{j+1}$ and bounded by $\|m\|_\infty$, one has the pointwise bound $|K_j(x)|\le2^{jn}C_\zeta A$ for every $j$ and every $x$. Second, for every $\delta>0$ and $j>0$, [F3] gives $\int_{|x|\ge\delta}|K_j(x)|\,dx\le C_nA(1+2^j\delta)^{-1/4}$, so $\sum_{j>0}\int_{|x|\ge\delta}|K_j|$ is finite for every fixed $\delta>0$, and for $j\le0$ the pointwise bound gives $\int_{\delta\le|x|\le2\delta}|K_j|\le2^{jn}C_\zeta A\,|B(0,2\delta)|\le C_nA\delta^n2^{jn}$, whose sum over $j\le0$ is at most $C_nA\delta^n$, finite for every fixed $\delta$. [F2, F3, given, algebra]

2.1 Almost everywhere convergence. By step 1.2, $\sum_{j\le0}|K_j(x)|<\infty$ for every $x$; for each fixed $\delta>0$, $\sum_{j>0}\int_{|x|\ge\delta}|K_j|<\infty$ implies $\sum_{j>0}|K_j(x)|<\infty$ for almost every $x$ with $|x|\ge\delta$. Taking the union of the exceptional sets over $\delta=1/m$, $m\ge1$, the series $\sum_{j\in\mathbb Z}K_j(x)$ converges absolutely for almost every $x\in\mathbb R^n\setminus\{0\}$; denote its sum by $k(x)$, a measurable function on $\mathbb R^n\setminus\{0\}$. [F4, step 1.2, algebra]

3.1 On every compact $K\subset\mathbb R^n\setminus\{0\}$ the dominating function $\sum_j|K_j|$ is integrable: $K$ lies in some annulus $\delta\le|x|\le2^m\delta$, and the two estimates of step 1.2 (the second applied after covering the outer annulus by finitely many dyadic annuli of the same type) give $\int_K\sum_j|K_j|<\infty$. Hence for $\varphi\in C_c^\infty(\mathbb R^n\setminus\{0\})$, dominated convergence with the partial sums bounded by $\sum_j|K_j|$ gives $\langle W,\varphi\rangle=\lim_N\langle\sum_{|j|\le N}K_j,\varphi\rangle=\int k\varphi$ by step 1.1, so $k$ coincides with $W$ on $\mathbb R^n\setminus\{0\}$. [F4, step 1.1, step 1.2, step 2.1, algebra]

3.2 Annular size bound. Fix $\delta>0$. Split $\sum_j\int_{\delta\le|x|\le2\delta}|K_j|$ according to whether $2^j\delta>1$. For $2^j\delta\le1$ the pointwise bound of step 1.2 gives $\int_{\delta\le|x|\le2\delta}|K_j|\le2^{jn}C_\zeta A|B(0,2\delta)|$, so the sum over these $j$ is at most $C_nA\delta^n\sum_{2^j\le1/\delta}2^{jn}\le C_nA$. For $2^j\delta>1$, $\int_{\delta\le|x|\le2\delta}|K_j|\le(2^j\delta)^{-1/4}\int|K_j|(1+2^j|x|)^{1/4}\le C_nA(2^j\delta)^{-1/4}$ by [F3], Put $j_0=\min\{j\in\mathbb Z:2^j\delta>1\}$, so $1<2^{j_0}\delta\le2$ by minimality. The high-frequency sum is therefore bounded by $C_nA\sum_{j\ge j_0}(2^j\delta)^{-1/4}=C_nA(2^{j_0}\delta)^{-1/4}/(1-2^{-1/4})\le C_nA/(1-2^{-1/4})$, independent of $\delta$. Hence $\int_{\delta\le|x|\le2\delta}|k|\le\sum_j\int_{\delta\le|x|\le2\delta}|K_j|\le C_nA$, uniformly in $\delta$. [F3, step 1.2, step 2.1, algebra]

3.3 Hörmander's condition. Fix $y\ne0$ and choose $k\in\mathbb Z$ with $2^{-k}\le|y|\le2^{1-k}$. For $j>k$ the triangle inequality and [F3] give $\int_{|x|\ge2|y|}|K_j(x-y)-K_j(x)|\,dx\le2\int_{|x|\ge|y|}|K_j(x)|\,dx\le2C_nA(1+2^j|y|)^{-1/4}$, and summing over $j>k$ yields at most $C_nA$, since $2^j|y|\ge2^{j-k}$. For $j\le k$, the mean value theorem and translation of the integral give $\int_{|x|\ge2|y|}|K_j(x-y)-K_j(x)|\,dx\le|y|\int_{\mathbb R^n}|\nabla K_j(u)|\,du\le C_nA|y|2^j$ by [F3]. Hence the sum over $j\le k$ is bounded by $C_nA|y|\sum_{j\le k}2^j=2C_nA|y|2^k\le4C_nA$, using the upper dyadic inequality $|y|\le2^{1-k}$. Summing in $j$ yields the asserted Hörmander bound, uniformly in $y\ne0$. [F3, step 1.2, step 2.1, algebra]

4.1 Steps 1.1, 3.1, 3.2 and 3.3 are the four assertions: $\mathcal S'$ convergence, the a.e. convergent series defining $k$, its coincidence with $W$ off the origin, and the two kernel bounds with constant $C_nA$. [step 1.1, step 3.1, step 3.2, step 3.3] ∎
