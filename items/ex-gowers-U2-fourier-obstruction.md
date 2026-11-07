---
id: ex-gowers-U2-fourier-obstruction
kind: example
title: "A U² obstruction is an ordinary Fourier character"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
aliases: []
deps:
  - def-gowers-uniformity-norm-on-intervals
  - def-gowers-uniformity-norm-on-finite-cyclic-groups
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
      locator: "Section 1, printed p. 1234, definition of the interval Gowers norm; the linear phase is directly verified here."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142, author PDF"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf"
      locator: "Section 1.6.14, printed p. 128, the linear Fourier case of the inverse theorem."
---

## Example

Let \(N\ge1\), \(\alpha\in\mathbb R\), \(e(t)=\exp(2\pi i t)\), and \(f(n)=e(\alpha n)\) for \(n\in[N]\). Then \(\|f\|_{U^2[N]}=1\), and the ordinary Fourier character \(\psi(n)=e(\alpha n)\) gives

$$
\left|\frac1N\sum_{n=1}^N f(n)\overline{\psi(n)}\right|=1.
$$

Thus this \(U^2\) example has a perfect linear Fourier obstruction.

## Example references

[[def-gowers-uniformity-norm-on-intervals]]

[[def-gowers-uniformity-norm-on-finite-cyclic-groups]]

[Green, Tao, and Ziegler, Section 1](https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.6.14](https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf)

## Facts & Assumptions

**Given:** An integer \(N\ge1\), a real number \(\alpha\), and \(f(n)=e(\alpha n)\) on \([N]\).

[F1] The interval \(U^2[N]\) norm is the ratio of the zero-extension \(U^2\) norm on a cyclic ambient group to the \(U^2\) norm of the interval indicator ([[def-gowers-uniformity-norm-on-intervals]]).

[F2] The finite-group \(U^2\) fourth power is the normalized alternating square average, and the norm is its nonnegative fourth root ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

## Verification

1.1 Choose an ambient modulus \(M\ge4N\). For a modular parallelogram whose four vertices lie in \([N]\), choose the representative \(n\in[N]\) of its base and increments \(k_1,k_2\in[-(N-1),N-1]\) from its two one-coordinate vertices. The fourth integer vertex \(q=n+k_1+k_2\) lies in \([3-2N,3N-2]\); if \(q<1\), then \(q+M>N\), and if \(q>N\), then \(q<M\). Hence no such cube wraps to another point of \([N]\). Its alternating phase product is \(e(\alpha(n-(n+k_1)-(n+k_2)+(n+k_1+k_2)))=1\). If any vertex is outside \([N]\), the zero-extension product is zero. Therefore the cube products for the zero extension of \(f\) and for the interval indicator agree term by term. [given, F1, F2, choose, algebra]

1.2 The equal cube products in step 1.1 give equal finite-group \(U^2\) norms by [F2]; dividing by the same positive interval-indicator norm in [F1] yields \(\|f\|_{U^2[N]}=1\). [F1, F2, step 1.1, algebra]

2.1 For every \(n\in[N]\), \(f(n)\overline{\psi(n)}=e(\alpha n)\overline{e(\alpha n)}=1\). Its normalized average is therefore \(1\), and the asserted absolute correlation equals \(1\). [given, step 1.2, algebra] ∎
