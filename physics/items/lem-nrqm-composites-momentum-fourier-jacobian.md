---
id: lem-nrqm-composites-momentum-fourier-jacobian
aliases: [nrqm-composites-momentum-fourier-jacobian]
kind: lemma
domain: mathematics
title: "Momentum Fourier Jacobian: the unitary momentum representation"
status: draft
origin: pipeline
dependency_level: 0
deps:
  [
    thm-plancherel,
    def-fourier-transform-on-l-one-of-rn,
    thm-dominated-convergence,
    thm-linear-change-of-variables-for-lebesgue-measure,
    thm-monotone-convergence-for-the-integral,
    lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set,
    thm-extension-of-a-bounded-map-from-a-dense-subspace,
    thm-riesz-fischer-completeness-of-l-p,
    def-schwartz-space-and-its-seminorms,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-lebesgue-measure-and-the-lebesgue-sigma-algebra,
    def-hilbert-space,
    def-countable-choice,
  ]
dependency_roles:
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  thm-extension-of-a-bounded-map-from-a-dense-subspace: mathematical-premise
  thm-riesz-fischer-completeness-of-l-p: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §7.1 pp. 161-165 (Fourier conventions and momentum domains)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §2.4 pp. 28-32 (momentum-space wavefunction)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]), let $d\ge1$ and $\hbar>0$. Write $\mathcal F_2$ for the unitary Plancherel transform extending $\widehat f(\xi)=\int_{\mathbb R^d}f(x)e^{-2\pi ix\cdot\xi}dx$ ([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]]); the $L^2$ spaces are Hilbert spaces by [[thm-riesz-fischer-completeness-of-l-p]] and [[def-hilbert-space]]. For $\psi\in\mathcal S(\mathbb R^d)$, denote by $\widehat\psi$ the continuous representative of $\mathcal F_2\psi$ given by that absolutely convergent integral.

(a) For $\psi\in\mathcal S(\mathbb R^d)$ the momentum wavefunction

$$\psi_p(p):=(2\pi\hbar)^{-d/2}\int_{\mathbb R^d}e^{-ip\cdot x/\hbar}\psi(x)\,dx$$

is well defined, bounded and continuous, and $\psi_p(p)=(2\pi\hbar)^{-d/2}\widehat\psi\bigl(p/(2\pi\hbar)\bigr)$ for every $p$; here $\widehat\psi$ is the stated continuous representative, not a point evaluation of an $L^2$ equivalence class.

(b) The dilation operator $D_\hbar g(p):=(2\pi\hbar)^{-d/2}g\bigl(p/(2\pi\hbar)\bigr)$ is a surjective linear isometry of $L^2(\mathbb R^d;\mathbb C)$ onto itself, with inverse $D_\hbar^{-1}g(\xi)=(2\pi\hbar)^{d/2}g(2\pi\hbar\,\xi)$.

(c) The formula $U_0\psi:=\psi_p$ defines a linear isometry $\mathcal S(\mathbb R^d)\to L^2(\mathbb R^d)$ (for the Lebesgue spaces $dx$ and $dp$) that extends uniquely to a surjective linear isometry $U:L^2(\mathbb R^d,dx)\to L^2(\mathbb R^d,dp)$; on Schwartz functions $U=D_\hbar\mathcal F_2$, and for every $\psi\in L^2(\mathbb R^d)$,

$$\|U\psi\|_{L^2(dp)}=\|\psi\|_{L^2(dx)} .$$

The normalization statement is: the substitution $\xi=p/(2\pi\hbar)$ carries $d\xi=(2\pi\hbar)^{-d}dp$, and the factor $(2\pi\hbar)^{-d/2}$ in $U_0$ is exactly what makes $U$ an isometry with respect to $dp$. No physical identification of $U\psi$ with a measured momentum distribution is made.

## Facts & Assumptions

**Given:** $d\ge1$, $\hbar>0$; a Schwartz function $\psi\in\mathcal S(\mathbb R^d)$; the Plancherel transform $\mathcal F_2$ and the $L^1$ transform $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$.

[F1] $\mathcal F_2$ is a surjective complex-linear isometry $L^2(\mathbb R^d)\to L^2(\mathbb R^d)$ that extends the $L^1$ Fourier transform $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ ([[thm-plancherel]], [[def-fourier-transform-on-l-one-of-rn]]).

[F2] If $f_n\to f$ pointwise and $|f_n|\le g$ for a fixed integrable $g$, then $\int f_n\to\int f$ ([[thm-dominated-convergence]]).

[F3] An invertible linear map $T$ of $\mathbb R^d$ scales Lebesgue measure by $|\det T|$ on measurable sets ([[thm-linear-change-of-variables-for-lebesgue-measure]]); for nonnegative measurable $h$ the integral identity $\int h(Tx)\,dx=|\det T|^{-1}\int h(y)\,dy$ follows by approximation with simple functions and monotone convergence ([[thm-monotone-convergence-for-the-integral]]).

[F4] $\mathcal S(\mathbb R^d)$ contains $C_c^\infty(\mathbb R^d)$, which is dense in $L^2(\mathbb R^d)$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[def-schwartz-space-and-its-seminorms]]); in particular every Schwartz function lies in $L^1\cap L^2$. The $L^2$ space is complete by [[thm-riesz-fischer-completeness-of-l-p]].

[F5] A bounded linear map from a dense subspace of a normed space into a Banach space extends uniquely with the same norm ([[thm-extension-of-a-bounded-map-from-a-dense-subspace]]).

## Proof

1.1 [Absolute convergence and continuity] For $\psi\in\mathcal S(\mathbb R^d)$, $|e^{-ip\cdot x/\hbar}\psi(x)|=|\psi(x)|$ is integrable by [F4], so the defining integral converges absolutely for every $p$ and $|\psi_p(p)|\le(2\pi\hbar)^{-d/2}\|\psi\|_1$. Continuity in $p$ follows from [F2] applied to $e^{-ip_n\cdot x/\hbar}\psi\to e^{-ip\cdot x/\hbar}\psi$ with the integrable dominating function $|\psi|$. [given, F2, F4, algebra]

2.1 [Identification with the Plancherel transform] For $\psi\in\mathcal S$, put $\xi=p/(2\pi\hbar)$, so $2\pi x\cdot\xi=p\cdot x/\hbar$; comparing the defining integral of $\psi_p$ with the $L^1$ Fourier transform [F1] gives $\psi_p(p)=(2\pi\hbar)^{-d/2}\widehat\psi(\xi)=(2\pi\hbar)^{-d/2}\mathcal F_2\psi(p/(2\pi\hbar))$, the last equality because $\psi\in L^1$ and $\mathcal F_2$ extends $\widehat{\,\cdot\,}$. Hence $U_0=D_\hbar\circ\mathcal F_2$ on $\mathcal S(\mathbb R^d)$. [step 1.1, F1, algebra]

2.2 [The dilation is a unitary] For $g\in L^2$ the substitution $p=(2\pi\hbar)\xi$ is an invertible linear map with determinant $(2\pi\hbar)^d$, so by [F3] applied to $h=|g|^2$, $\int|D_\hbar g(p)|^2dp=(2\pi\hbar)^{-d}\int|g(p/(2\pi\hbar))|^2dp=(2\pi\hbar)^{-d}(2\pi\hbar)^d\int|g(\xi)|^2d\xi=\|g\|^2$. Thus $D_\hbar$ is a linear isometry; its inverse $D_\hbar^{-1}g(\xi)=(2\pi\hbar)^{d/2}g(2\pi\hbar\xi)$ is likewise an isometry and the two compositions are the identity, so $D_\hbar$ is a surjective isometry. [step 1.1, F3, algebra]

3.1 [Norm preservation on Schwartz functions] By steps 2.1 and 2.2 and unitarity of $\mathcal F_2$ [F1], $\|\psi_p\|_2=\|D_\hbar\mathcal F_2\psi\|_2=\|\mathcal F_2\psi\|_2=\|\psi\|_2$ for $\psi\in\mathcal S(\mathbb R^d)$; moreover $U_0$ is linear on $\mathcal S(\mathbb R^d)$ because the integral and the dilation are linear. [step 2.1, step 2.2, F1, algebra]

4.1 [Unique unitary extension] The subspace $\mathcal S(\mathbb R^d)$ is dense in $L^2$ because it contains the dense subspace $C_c^\infty(\mathbb R^d)$ [F4]; by [F5] the isometry $U_0$ on $\mathcal S(\mathbb R^d)$ has a unique bounded linear extension $U:L^2(\mathbb R^d,dx)\to L^2(\mathbb R^d,dp)$ with the same norm, so $\|U\psi\|=\|\psi\|$ for every $\psi\in L^2$. Surjectivity: for arbitrary $h\in L^2(\mathbb R^d,dp)$, the vector $\psi:=\mathcal F_2^*D_\hbar^{-1}h$ lies in $L^2$, and since $U$ agrees with $D_\hbar\mathcal F_2$ on the dense set $\mathcal S$ while both sides are bounded, $U\psi=h$; hence $U$ is onto. The norm identity of clause (c) is exactly $\|U\psi\|_2=\|\psi\|_2$, and the normalization discussion is the determinant computation of step 2.2 read at $g=\mathcal F_2\psi$. [step 2.2, step 3.1, F1, F4, F5, algebra] ∎
