---
id: thm-qftx-tempered-massive-gaussian-field
kind: theorem
domain: mathematics
library: mathematics
title: A massive Euclidean Gaussian generalized field exists
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-standard-borel-space
  - def-schwartz-space-and-its-seminorms
  - def-schwartz-topology-and-convergence
  - thm-uniqueness-of-a-law-from-its-characteristic-function
  - def-fourier-transform-on-l-one-of-rn
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - lem-qft-hermite-oscillator-research-supplier
  - lem-qftx-hermite-coefficient-decay
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-hilbert-space-fourier-expansion
  - thm-kolmogorov-extension-for-standard-borel-coordinate-spaces
  - thm-parseval-pairing-on-schwartz-space
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-standard-borel-space: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-schwartz-topology-and-convergence: mathematical-premise
  thm-uniqueness-of-a-law-from-its-characteristic-function: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  lem-qft-hermite-oscillator-research-supplier: mathematical-premise
  lem-qftx-hermite-coefficient-decay: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  thm-kolmogorov-extension-for-standard-borel-coordinate-spaces: mathematical-premise
  thm-parseval-pairing-on-schwartz-space: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bruce K. Driver, Probability Tools with Examples, §21.7, Theorem 21.68"
      url: "https://mathweb.ucsd.edu/~bdriver/280_18-19_prob/Lecture_Notes/Older%20Versions/2018-19-Lecture.v5a.pdf"
      locator: "§21.7, printed pp.303–304: Kolmogorov extension for arbitrary-index standard Borel coordinates, reducing continuity to countable coordinate unions."
    - title: "Charles Shalizi, Building Processes from Finite-Dimensional Distributions, §2.2, Theorem 29"
      url: "https://www.stat.cmu.edu/~cshalizi/754/notes/lecture-02.pdf"
      locator: "Chapter 2, §2.2, printed pp.19–20: consistency, countable-index construction, and extension to arbitrary index sets."
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §8.3"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§8.3, printed pp.212–214: Hermite basis and oscillator eigenvalues."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations, Chapter 3"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 3, printed pp.21–24: Hermite oscillator eigenfunctions and basis construction."
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, Theorem 14.10"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Chapter 14: Theorem 14.7, printed p.382, gives Gaussian-regularized L1 Fourier inversion; Lemma 14.9, printed p.383, gives the L2 norm identity when f and its transform are L1; Theorem 14.10, printed p.383, gives the unitary L2 extension. The source uses symmetric Fourier normalization; the proof below uses the explicitly stated 2pi convention."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and let $m>0$. Write $\mathcal S_\mathbb R(\mathbb R^2)$ for the smooth real-valued functions with finite seminorms $p_{\alpha\beta}(f)=\sup_x|x^\alpha\partial^\beta f(x)|$ for all $\alpha,\beta\in\mathbb N_0^2$, with the topology whose basic neighborhoods of $f_0$ impose finitely many inequalities $p_{\alpha\beta}(f-f_0)<\varepsilon$ with positive tolerances. Define $\widehat f(p)=\int_{\mathbb R^2}e^{-ip\cdot x}f(x)\,d^2x$; this convention has inverse factor $(2\pi)^{-2}$. For real $f,g\in\mathcal S_\mathbb R(\mathbb R^2)$ set

$$C_m(f,g):=\int_{\mathbb R^2}\frac{\overline{\widehat f(p)}\,\widehat g(p)}{|p|^2+m^2}\,\frac{d^2p}{(2\pi)^2}.$$

For $v>0$, the centered scalar normal law $N(0,v)$ has density $(2\pi v)^{-1/2}e^{-x^2/(2v)}$ on $\mathbb R$; $N(0,0)$ is the point mass at zero. A finite real vector $X=(X_1,\ldots,X_k)$ is centered jointly Gaussian with covariance matrix $\Sigma$ when $\sum_j t_jX_j$ has law $N(0,\sum_{i,j}t_it_j\Sigma_{ij})$ for every $t\in\mathbb R^k$. Let $\mathcal S'_\mathbb R(\mathbb R^2)$ be the continuous real-linear dual of $\mathcal S_\mathbb R(\mathbb R^2)$, and give it the cylinder $\sigma$-algebra generated by the evaluation maps $u\mapsto u(f)$. There is a probability measure on this cylinder $\sigma$-algebra, equivalently a measurable $\mathcal S'_\mathbb R(\mathbb R^2)$-valued random variable $\Phi$, such that every finite vector $(\Phi(f_1),\ldots,\Phi(f_k))$ is centered jointly Gaussian and $\mathbb E[\Phi(f)\Phi(g)]=C_m(f,g)$. The construction gives tempered-distribution samples on one common full-measure set; it makes no pointwise-sample-field or interaction-measure claim.

## Statement references

[Driver, *Probability Tools with Examples*, Theorem 21.68](https://mathweb.ucsd.edu/~bdriver/280_18-19_prob/Lecture_Notes/Older%20Versions/2018-19-Lecture.v5a.pdf)

[Shalizi, *Building Processes from Finite-Dimensional Distributions*, Theorem 29](https://www.stat.cmu.edu/~cshalizi/754/notes/lecture-02.pdf)

[Teschl, *Mathematical Methods in Quantum Mechanics*, §8.3](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf)

[Teschl, *Topics in Real and Functional Analysis*, Theorem 14.10](https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf)

## Facts & Assumptions

**Given:** the Axiom of Choice, its countable-family consequence, $m>0$, the real Schwartz test space, and the Fourier convention from the Statement.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this is the countable-family instance of [A1].

[F1] [[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]]: under the Axiom of Choice, a consistent family of finite-dimensional probability laws on standard-Borel coordinate spaces has a unique probability law on the cylinder $\sigma$-algebra of the full product.

[F2] [[lem-qft-hermite-oscillator-research-supplier]]: under Countable Choice, for $N=2$ and $a_1=a_2=c=1$ there is a complete orthonormal product Hermite basis with oscillator eigenvalues $2|\alpha|+2$.

[F3] [[lem-qftx-hermite-coefficient-decay]]: for this basis, every Schwartz test has weighted-square-summable Hermite coefficients of every polynomial order, and Parseval gives its unweighted coefficient norm.

[F4] [[def-standard-borel-space]]: the Borel measurable space of a Polish space is standard Borel; $\mathbb R$ with its usual complete separable metric is such a space.

[F5] [[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]: the Gaussian integral normalizes $\gamma(dx)=(2\pi)^{-1/2}e^{-x^2/2}\,dx$ to a probability measure.

[F6] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: finite products of the Gaussian density have the stated lower-dimensional marginals after integrating out the other coordinates.

[F7] [[def-fourier-transform-on-l-one-of-rn]]: $\mathcal F_{2\pi}f(\xi)=\int e^{-2\pi i x\cdot\xi}f(x)\,d^2x$.

[F8] [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]: $\mathcal F_{2\pi}$ maps Schwartz space continuously and bijectively to itself, with inverse $R\mathcal F_{2\pi}$.

[F9] [[thm-parseval-pairing-on-schwartz-space]]: for Schwartz functions, $\int\mathcal F_{2\pi}f\,\overline{\mathcal F_{2\pi}g}=\int f\overline g$.

[F10] [[thm-hilbert-space-fourier-expansion]]: for a complete orthonormal family, the coefficient expansion converges in norm and Parseval's identity holds.

[F11] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for a square-summable family, $\left|\sum a_\alpha b_\alpha\right|\le(\sum|a_\alpha|^2)^{1/2}(\sum|b_\alpha|^2)^{1/2}$, first for finite sums and then by limits.

[F12] [[def-schwartz-topology-and-convergence]]: the Schwartz topology is generated by finite intersections of positive-radius seminorm balls. The real test space has the induced real topology.

[F13] [[thm-uniqueness-of-a-law-from-its-characteristic-function]]: under AC, two Borel probability laws on $\mathbb R$ with the same characteristic function $t\mapsto\int e^{itx}d\mu(x)$ are equal.

## Proof

**Proof technique:** direct.

**Given:** [A1]–[A2], $m>0$, the suppliers [F1]–[F9], and real Schwartz tests on $\mathbb R^2$.

1.1 Let $I=\mathbb N_0^2$, enumerated by total degree and lexicographic order. For each finite $F\subset I$, let $\mu_F$ have density $\prod_{\alpha\in F}(2\pi)^{-1/2}e^{-x_\alpha^2/2}$ on $\mathbb R^F$. [F5] makes these probability laws; integrating out coordinates with [F6] proves their consistency. Each coordinate space $(\mathbb R,\mathcal B(\mathbb R))$ is standard Borel by [F4]. Applying [F1] with [A1] yields $\Omega=\mathbb R^I$ with its cylinder $\sigma$-algebra and a probability $\mathbb P$ having these finite marginals. The coordinate variables $\xi_\alpha(\omega)=\omega_\alpha$ are therefore independent standard normals. [A1, F1, F4, F5, F6, construct]

1.2 For $p\in\mathbb R^2$ put $w_m(p)=(|p|^2+m^2)^{-1/2}$. Since $m>0$, $w_m$ is smooth, and every derivative is bounded: its derivatives are finite sums of polynomial factors divided by positive powers of $|p|^2+m^2$, bounded near the origin and decaying at infinity. The product rule therefore shows multiplication by $w_m$ maps Schwartz space continuously to itself. Define $T_mf=\mathcal F_{2\pi}^{-1}\bigl(w_m(2\pi\cdot)\mathcal F_{2\pi}f\bigr)$. By [F8], $T_mf$ is Schwartz; because $w_m$ is real and even, $T_mf$ is real for real $f$. Under the exact convention in the Statement, $\widehat f(p)=\mathcal F_{2\pi}f(p/(2\pi))$, and the change of variables $p=2\pi\xi$ gives $\widehat{T_mf}(p)=w_m(p)\widehat f(p)$. [F7, F8, given, algebra]

2.1 For a finite initial segment $I_N$ of the fixed enumeration set $S_N=\sum_{\alpha\in I_N}(1+|\alpha|)^{-4}\xi_\alpha^2$. The density in [F5] is normalized, and integration by parts using $(-xe^{-x^2/2})'=(x^2-1)e^{-x^2/2}$ gives $\mathbb E\xi_\alpha^2=1$. Hence $\mathbb E S_N=\sum_{\alpha\in I_N}(1+|\alpha|)^{-4}\le\sum_{n\ge0}(n+1)(n+1)^{-4}=\sum_{n\ge0}(n+1)^{-3}=:C<\infty$: grouping $n+1$ in dyadic blocks $[2^j,2^{j+1})$ bounds each block by $2^j2^{-3j}=2^{-2j}$, a summable geometric series. Markov's inequality, which follows from $\mathbf1_{\{S_N>M\}}\le S_N/M$, gives $\mathbb P(S_N>M)\le C/M$. Since the events increase to $\{S:=\sum_\alpha(1+|\alpha|)^{-4}\xi_\alpha^2>M\}$, countable additivity gives $\mathbb P(S>M)\le C/M$; letting integer $M\to\infty$ shows $S<\infty$ on a common event $\Omega_0$ of probability one. [F5, F6, step 1.1, algebra]

3.1 For $f\in\mathcal S_\mathbb R(\mathbb R^2)$ put $c_\alpha(f)=\langle f,h_\alpha\rangle$. On $\Omega_0$, [F11] and [F3] give $\sum_\alpha|\xi_\alpha c_\alpha(f)|\le S^{1/2}\bigl(\sum_\alpha(1+|\alpha|)^4|c_\alpha(f)|^2\bigr)^{1/2}<\infty$. Thus $W_0(f):=\sum_\alpha\xi_\alpha c_\alpha(f)$ converges absolutely for every $f$ on the same event, is real-linear, and satisfies $|W_0(f)|\le S^{1/2}\|H^2f\|_2$. The last quantity is a continuous Schwartz seminorm by [F3], so each sample is a tempered distribution. Set $W_0=0$ outside $\Omega_0$. Every evaluation $W_0(f)$ is measurable as the almost-sure limit of measurable finite sums, hence $W_0$ is measurable for the cylinder $\sigma$-algebra. [A2, F2, F3, F11, F12, step 2.1, algebra]

4.1 The partial sums for $W_0(f)$ converge in $L^2(\Omega,\mathbb P)$ as well: independence, unit variance, and Parseval in [F10] make their squared $L^2$ tail equal to the corresponding tail of $\sum_\alpha|c_\alpha(f)|^2=\|f\|_2^2$. For any finite real combination $\sum_j t_jW_0(f_j)$, a finite partial sum is a linear combination of independent standard normals, with characteristic function $\prod_\alpha e^{-t^2c_\alpha^2/2}=e^{-t^2\sum_\alpha c_\alpha^2/2}$; by [F10] its variance converges to $\|\sum_jt_jf_j\|_2^2$. If $X_N\to X$ in $L^2$, then $|\mathbb E e^{itX_N}-\mathbb E e^{itX}|\le|t|\,\mathbb E|X_N-X|\le|t|\|X_N-X\|_2\to0$, so the limit has the centered normal characteristic function with that variance. For positive variance this is the characteristic function of the density defining $N(0,v)$, by [F5] and scaling; at zero variance it is the characteristic function of the point mass at zero. Applying [F13] to these Borel probability laws identifies the limit law. Hence the family is jointly Gaussian, centered, and $\mathbb E[W_0(f)W_0(g)]=\int f(x)g(x)\,d^2x$. [F2, F5, F10, F13, step 1.1, step 3.1, algebra]

5.1 Set $\Phi(f)=W_0(T_mf)$. Each sample in $\Omega_0$ is a continuous real-linear functional of $f$ because both $W_0$ and $T_m$ are continuous on Schwartz space; outside $\Omega_0$ it is zero. Thus $\Phi$ is a measurable $\mathcal S'_\mathbb R$-valued random variable for the cylinder $\sigma$-algebra. From step 4.1 its covariance is $\mathbb E[\Phi(f)\Phi(g)]=\int T_mf(x)T_mg(x)\,d^2x$. Applying [F9] and changing variables $p=2\pi\xi$ gives $(2\pi)^{-2}\int\widehat{T_mf}(p)\overline{\widehat{T_mg}(p)}\,d^2p$. Since $f,g$ are real, $\widehat f(-p)=\overline{\widehat f(p)}$ and $\widehat g(-p)=\overline{\widehat g(p)}$; the substitution $p\mapsto-p$ changes this to $(2\pi)^{-2}\int\overline{\widehat f(p)}\widehat g(p)w_m(p)^2\,d^2p=C_m(f,g)$ by step 1.2. The finite-dimensional distributions remain centered Gaussian by step 4.1 and linearity of $T_m$. [F7, F9, F12, step 4.1, step 1.2, algebra] ∎

