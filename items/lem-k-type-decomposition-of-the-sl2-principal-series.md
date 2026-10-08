---
id: lem-k-type-decomposition-of-the-sl2-principal-series
kind: lemma
title: K-type decomposition of the SL2(R) principal series
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 3
deps:
  - thm-compact-picture-of-the-sl2-principal-series
  - def-fourier-coefficients-and-trigonometric-polynomials
  - thm-trigonometric-system-is-complete-in-l-two-of-the-torus
  - thm-l-two-fourier-series-converges-in-mean-square
  - def-the-one-dimensional-torus-and-normalized-haar-integral
  - def-countable-choice
  - def-axiom-of-choice
  - cor-finite-dimensional-subspaces-are-closed
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, printed p. 8 (the basis f_n=e^{inθ} with n of parity ε)"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.1–§9.2, printed pp. 48–51 (weight decomposition and circle realization)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the compact picture
of [[thm-compact-picture-of-the-sl2-principal-series]], put
$f_n(k_\theta)=e^{in\theta}$ for $n\in\mathbb Z$. Then:

Here, a vector is **$K$-finite** when the span of its right $K$-orbit is
finite-dimensional.

- $f_n\in C^\infty_\varepsilon(K)$ exactly when $n\equiv\varepsilon\pmod2$, and
  $\{f_n:n\equiv\varepsilon\pmod2\}$ is an orthonormal basis of
  $L^2_\varepsilon(K)$;
- the right $K$-action is $k_\phi\cdot f_n=e^{in\phi}f_n$, so every $K$-type
  is one-dimensional, spanned by one such $f_n$, and occurs with multiplicity
  one;
- the algebraic direct sum
  $\bigoplus_{n\equiv\varepsilon\ (2)}\mathbb C f_n$ is exactly the space of
  $K$-finite vectors and is dense in $L^2_\varepsilon(K)$; every closed
  $K$-invariant subspace of $L^2_\varepsilon(K)$ is the closed span of the
  $f_n$ it contains.

## Facts & Assumptions

**Given:** AC, $\varepsilon\in\{0,1\}$, and the compact picture from part (1).

[F1] Restriction identifies the compact picture with parity-$\varepsilon$ functions on $K$, and the right $K$-action is translation ([[thm-compact-picture-of-the-sl2-principal-series]]).

[F2] The characters $e_n([x])=e^{2\pi inx}$ form an orthonormal basis of $L^2(\mathbb R/\mathbb Z)$, and their symmetric Fourier sums converge in mean square ([[def-fourier-coefficients-and-trigonometric-polynomials]], [[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]], [[thm-l-two-fourier-series-converges-in-mean-square]]).

[F3] The angle map $k_\theta\mapsto[\theta/(2\pi)]$ identifies normalized Haar measure on $K$ with normalized Haar measure on the one-dimensional torus ([[def-the-one-dimensional-torus-and-normalized-haar-integral]]).

[F4] A finite-dimensional subspace of a normed space is closed, including the zero subspace ([[cor-finite-dimensional-subspaces-are-closed]]).

[A1] AC supplies normalized Haar measure and implies the AC$_\omega$ hypothesis of the Fourier suppliers; this implication is the stated [[def-countable-choice]] consequence of [[def-axiom-of-choice]]. The finite parity and cyclic-average calculations make no further choice.

## Proof

**Proof technique:** direct.

1.1 Since $k_{\theta+\pi}=-k_\theta$, $f_n(k_{\theta+\pi})=e^{in\pi}f_n(k_\theta)=(-1)^n f_n(k_\theta)$. This equals $(-1)^\varepsilon f_n(k_\theta)$ exactly when $n\equiv\varepsilon\pmod2$, proving both directions of the parity criterion. By [F3], for matching parities the inner product is $\langle f_n,f_m\rangle=\frac1{2\pi}\int_0^{2\pi}e^{i(n-m)\theta}\,d\theta=\begin{cases}1,&n=m,\\0,&n\ne m.\end{cases}$ [F1, F3, A1, algebra]

2.1 The full Fourier basis in [F2], transported by [F3], is $\{f_n:n\in\mathbb Z\}$. If $f\in L^2_\varepsilon(K)$, translation invariance of the coefficient integral by $1/2$ in the torus coordinate gives $\widehat f(n)=(-1)^{\varepsilon-n}\widehat f(n)$. Thus $\widehat f(n)=0$ when $n\not\equiv\varepsilon\pmod2$. The mean-square Fourier expansion of $f$ therefore uses only matching parity indices, proving the asserted orthonormal basis of $L^2_\varepsilon(K)$. [A1, F2, F3, step 1.1, algebra]

2.2 For $k_\phi\in K$, right translation gives $(k_\phi\cdot f_n)(k_\theta)=f_n(k_{\theta+\phi})=e^{in\phi}f_n(k_\theta)$. The characters $\phi\mapsto e^{in\phi}$ are distinct for distinct integers $n$, so these are pairwise inequivalent one-dimensional $K$-types. [F1, step 1.1, algebra]

3.1 Let $W\subseteq L^2_\varepsilon(K)$ be closed and $K$-invariant, and let $f\in W$. For $J\ge0$, set $s_J=\sum_{|m|\le J}\widehat f(m)f_m$, so $s_J\to f$ in $L^2$ by [F2]. For an integer $n$, $J\ge|n|$, and $L>J+|n|$, define $Q_{n,L}h=\frac1L\sum_{j=0}^{L-1}e^{-2\pi i n j/L}(k_{2\pi j/L}\cdot h)$. Each $Q_{n,L}f$ belongs to $W$, and $\|Q_{n,L}\|\le1$ because it is an average of unitary operators with coefficients of modulus one. On $s_J$, the finite geometric sum $\frac1L\sum_{j=0}^{L-1}e^{2\pi i(m-n)j/L}$ is $1$ for $m=n$ and $0$ for all other $|m|\le J$, since then $0<|m-n|<L$. Hence $Q_{n,L}s_J=\widehat f(n)f_n$. Taking $J\to\infty$ with $L=J+|n|+1$ gives $Q_{n,L}f\to\widehat f(n)f_n$; closedness of $W$ implies $f_n\in W$ whenever $\widehat f(n)\ne0$. By the Fourier expansion from step 2.1, every $f\in W$ is the $L^2$ limit of finite sums of modes it contains. Therefore $W$ is their closed span. [A1, F1, F2, step 2.1, algebra]

4.1 A finite sum of the $f_n$ has a finite-dimensional right $K$-orbit span. Conversely, if $f$ is $K$-finite in the local sense stated above, its orbit span $V$ is $K$-invariant and closed by [F4]. Step 3.1 makes $V$ the closed span of the modes it contains. Since distinct $f_n$ are linearly independent by step 1.1, only finitely many can lie in $V$; hence $f$ is a finite sum of them. Thus the $K$-finite vectors are exactly the algebraic direct sum of the parity-matching lines. By step 2.1 their $K$-types each have multiplicity one, and that direct sum is dense in $L^2_\varepsilon(K)$. [A1, F2, F4, step 1.1, step 2.1, step 2.2, step 3.1, algebra] ∎
