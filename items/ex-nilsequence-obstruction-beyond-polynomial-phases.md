---
id: ex-nilsequence-obstruction-beyond-polynomial-phases
kind: example
title: "A cubic nilsequence obstruction is not captured by linear phases"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
aliases: []
deps:
  - def-gowers-uniformity-norm-on-intervals
  - def-gowers-uniformity-norm-on-finite-cyclic-groups
  - def-bounded-complexity-nilsequence-on-an-interval
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - def-polynomial-sequence-on-a-filtered-group
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
justified_by: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf"
      locator: "Example 4.3, printed pp. 1242–1243: polynomial phases are polynomial nilsequences; the displayed asymptotic is proved locally."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142, author PDF"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf"
      locator: "Section 1.6, printed pp. 126–129: polynomial phases and the role of higher-step nilsequences."
---

## Example

For every irrational real \(\alpha\), let \(f_N(n)=e(\alpha n^3)\) on \([N]\), where \(e(t)=\exp(2\pi i t)\). The sequence is a degree-three polynomial nilsequence on the circle nilmanifold \(\mathbb R/\mathbb Z\), its normalized interval norm satisfies \(\|f_N\|_{U^4[N]}=1\), and it is uniformly asymptotically orthogonal to all linear phases:

$$
\lim_{N\to\infty}\sup_{\beta\in\mathbb R}\left|\frac1N\sum_{n=1}^N e(\alpha n^3-\beta n)\right|=0.
$$

This gives a higher-degree nilsequence obstruction that no linear Fourier character detects with nonvanishing correlation.

## Example references

[[thm-green-tao-ziegler-inverse-theorem-for-gowers-norms]]

[[def-gowers-uniformity-norm-on-intervals]]

[[def-gowers-uniformity-norm-on-finite-cyclic-groups]]

[[def-bounded-complexity-nilsequence-on-an-interval]]

[[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]

[Green, Tao, and Ziegler, Example 4.3](https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.6](https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf)

## Facts & Assumptions

**Given:** An irrational real \(\alpha\), an integer \(N\ge1\), and the phase \(f_N(n)=e(\alpha n^3)\).

[F1] The interval \(U^4[N]\) norm is the ratio of the zero-extension \(U^4\) norm to the \(U^4\) norm of the interval indicator in a cyclic ambient group ([[def-gowers-uniformity-norm-on-intervals]]).

[F2] The finite \(U^4\) norm is the nonnegative sixteenth root of the normalized alternating four-cube average ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

[F3] A bounded-complexity polynomial nilsequence is \(F(u(n)\Gamma)\) for a filtered nilmanifold, a polynomial sequence \(u\), and a bounded Lipschitz function \(F\) ([[def-bounded-complexity-nilsequence-on-an-interval]]).

[F4] On a finite set with uniform probability measure, complex Cauchy–Schwarz gives \(|\mathbb E a\overline b|^2\le\mathbb E|a|^2\,\mathbb E|b|^2\) ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

## Verification

1.1 Let \(G=\mathbb R\), \(\Gamma=\mathbb Z\), \(G_0=G_1=G_2=G_3=G\), and \(G_4=\{0\}\). This is a degree-three filtration because the additive group is abelian; \(\Gamma\) is a lattice and every \(\Gamma\cap G_i\) is a lattice in \(G_i\). The polynomial \(u(n)=\alpha n^3\) has degree three. Each right difference is the ordinary additive difference \(u(n+h)-u(n)\), which lowers polynomial degree by at least one by the binomial theorem; consequently the fourth iterated difference is zero in \(G_4\). The function \(F(t+\mathbb Z)=e(t)\) is well-defined because \(e(t+m)=e(t)\) for every integer \(m\), is 1-bounded, and is \(2\pi\)-Lipschitz on the circle. Thus \(f_N(n)=F(u(n)\Gamma)\) is a polynomial nilsequence of fixed degree and complexity. [given, F3, construct, algebra]

1.2 Choose \(M\ge16N\). In a supported modular four-cube, the base has a unique representative \(n\in[N]\); each one-coordinate vertex gives an increment \(k_i\in[-(N-1),N-1]\). Every lifted vertex \(q=n+\sum_i\omega_i k_i\) lies between \(1-4(N-1)\) and \(N+4(N-1)=5N-4<M\). If \(q<1\), then \(q+M\ge1-4(N-1)+16N=12N+5>N\), so no representative of its residue lies in \([N]\); if \(q>N\), then \(q<M\), so it does not wrap down to \([N]\). Thus every supported modular cube has its unique integer lift. On an integer four-cube the alternating exponent of the cubic polynomial is zero: each monomial of degree at most three is independent of at least one of the four increments, and the alternating sum over that increment cancels. Therefore the zero-extension cube product of \(f_N\) is 1 exactly on the supported cubes and 0 on all other cubes, the same as for the interval indicator. [given, F1, F2, step 1.1, algebra]

2.1 The equal cube products in step 1.2 give equal finite \(U^4\) norms by [F2]; division by the same positive interval-indicator norm in [F1] yields \(\|f_N\|_{U^4[N]}=1\). [F1, F2, step 1.2, algebra]

3.1 Let \(H\ge1\) be an integer and let \(z_n\) be any complex sequence supported on \([N]\) with \(|z_n|=1\) there. Extend it by zero outside \([N]\), and set \(w_m=\sum_{h=1}^H z_{m+h}\) for \(1-H\le m\le N-1\), a set of \(N+H-1\) indices. The counting identity is \(\sum_{m=1-H}^{N-1}w_m=H\sum_{j=1}^N z_j\). By [F4] applied to the vectors \((w_m)_m\) and \((1)_m\), \(\left|H\sum_{j=1}^N z_j\right|^2\le(N+H-1)\sum_{m=1-H}^{N-1}|w_m|^2\). In the expansion of the last sum, the diagonal contributes \(HN\) because each \(|z_j|^2=1\) occurs \(H\) times. For each lag \(1\le r<H\), exactly \(H-r\) pairs of shifts contribute the correlation \(\sum_{n=1}^{N-r}z_{n+r}\overline{z_n}\), together with its complex conjugate. Bounding each real part by the modulus and dividing by \(H^2N^2\) gives \(\left|\frac1N\sum_{n=1}^N z_n\right|^2\le\frac{N+H-1}{NH}+\frac{2(N+H-1)}{N^2H^2}\sum_{r=1}^{H-1}(H-r)\left|\sum_{n=1}^{N-r}z_{n+r}\overline{z_n}\right|\). For \(N>H\) this is the stated bound, uniformly in the sequence. [given, F4, construct, algebra]

3.2 First take \(z_n=e(\eta n^2+\lambda n+\kappa)\), where \(\eta\) is irrational and \(\lambda,\kappa\in\mathbb R\). For each fixed \(r\ge1\), \(z_{n+r}\overline{z_n}=e(2\eta r n+\eta r^2+\lambda r)\), a geometric progression whose ratio \(q=e(2\eta r)\ne1\). The geometric-sum formula gives \(\left|\sum_{n=1}^{L}q^n\right|=|q(1-q^L)/(1-q)|\le2/|1-q|\), independently of \(\lambda,\kappa,N\). With \(H\) fixed, step 3.1 therefore gives \(\limsup_{N\to\infty}\sup_{\lambda,\kappa\in\mathbb R}\left|\frac1N\sum_{n=1}^N e(\eta n^2+\lambda n+\kappa)\right|^2\le\frac1H\). Letting \(H\to\infty\) proves uniform convergence to zero for all quadratic phases with fixed irrational leading coefficient. [given, step 3.1, algebra]

4.1 Now take \(z_n=e(\alpha n^3-\beta n)\), where \(\alpha\) is irrational. For each fixed \(r\ge1\), \(z_{n+r}\overline{z_n}=e(3\alpha r n^2+3\alpha r^2n+\alpha r^3-\beta r)\), whose quadratic leading coefficient \(3\alpha r\) is irrational. Step 3.2, applied to sums of length \(N-r\), shows that each lag sum in step 3.1 is \(o(N)\), uniformly in \(\beta\), because \((N-r)/N\to1\). Thus for every fixed \(H\), step 3.1 gives \(\limsup_{N\to\infty}\sup_{\beta\in\mathbb R}\left|\frac1N\sum_{n=1}^N e(\alpha n^3-\beta n)\right|^2\le\frac1H\). Letting \(H\to\infty\) proves the asserted uniform orthogonality to linear phases. [given, step 3.1, step 3.2, algebra] ∎
