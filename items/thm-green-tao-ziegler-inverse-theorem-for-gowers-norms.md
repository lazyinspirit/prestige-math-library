---
id: thm-green-tao-ziegler-inverse-theorem-for-gowers-norms
kind: theorem
title: "Green–Tao–Ziegler inverse theorem for Gowers norms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
aliases: []
deps:
  - def-gowers-uniformity-norm-on-intervals
  - def-bounded-complexity-nilsequence-on-an-interval
  - def-inverse-gowers-correlation-obstruction
  - def-gowers-limit-multidegree-nilcharacters-for-linearisation
  - lem-gowers-inverse-theorem-corrected-linearisation
  - lem-frechet-filter-extends-to-nonprincipal-ultrafilter
  - def-ultrafilter-extension-principle
  - ex-frechet-filter
  - thm-green-tao-quantitative-nil-orbit-factorization
justified_by: []
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf"
      locator: "Theorem 1.3 and Conjecture 1.2, printed pp. 1235–1236; proof architecture in Sections 2, 4–13 and Appendices A–F."
    - title: "James Leng, Ashwin Sah, and Mehtaab Sawhney, Quasipolynomial bounds on the inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://arxiv.org/pdf/2402.17994"
      locator: "Theorem 1.2 and proof architecture in Sections 4–12, printed pp. 1–2, 16–18, 26–66."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142, author PDF"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf"
      locator: "Theorem 1.6.14, printed p. 128; the text refers to Green–Tao–Ziegler for the proof."
    - title: "Ben Green, Terence Tao, and Tamar Ziegler, Erratum for An inverse theorem for the Gowers U^{s+1}[N]-norm"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2024/04/erratum-4.pdf"
      locator: "Sections 2–3, printed pp. 2–5; mandatory corrected filtration and linearisation interfaces."
---

## Statement

For every integer \(s\ge3\) and every \(0<\delta\le1\), there are a finite family \(\mathcal M_{s,\delta}\) of compact filtered nilmanifolds of degree at most \(s\), smooth Riemannian metrics on its members, and constants \(C(s,\delta),c(s,\delta)>0\) such that the following holds for every \(N\ge1\). If \(f:[N]\to\mathbb C\) satisfies \(|f(n)|\le1\) for all \(n\) and \(\|f\|_{U^{s+1}[N]}\ge\delta\), then some \(G/\Gamma\in\mathcal M_{s,\delta}\), \(g\in G\), \(x\in G/\Gamma\), and Lipschitz function \(F:G/\Gamma\to\mathbb C\) satisfy \(\|F\|_\infty\le1\), \(\operatorname{Lip}(F)\le C(s,\delta)\), and

$$
\left|\frac1N\sum_{n=1}^{N} f(n)F(g^n x)\right|\ge c(s,\delta).
$$

## Statement references

[[def-gowers-uniformity-norm-on-intervals]]

[[def-bounded-complexity-nilsequence-on-an-interval]]

[[def-inverse-gowers-correlation-obstruction]]

[[thm-green-tao-quantitative-nil-orbit-factorization]]

[[lem-gowers-inverse-theorem-corrected-linearisation]]

[Green, Tao, and Ziegler, Theorem 1.3 and Conjecture 1.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v176-n2-p11-p.pdf)

[Leng, Sah, and Sawhney, Theorem 1.2](https://arxiv.org/pdf/2402.17994)

[Tao, Higher Order Fourier Analysis, Theorem 1.6.14](https://terrytao.wordpress.com/wp-content/uploads/2011/03/higher-book.pdf)

[Green, Tao, and Ziegler, Erratum, Sections 2–3](https://terrytao.wordpress.com/wp-content/uploads/2024/04/erratum-4.pdf)

## Facts & Assumptions

**Given:** \(s\ge3\), \(0<\delta\le1\), \(N\ge1\), and \(f:[N]\to\mathbb C\) with \(|f|\le1\).

[A1] The ultrafilter extension principle says that every filter on a set is contained in an ultrafilter. Together with the proper Fréchet filter on \(\mathbb N\), it supplies a nonprincipal ultrafilter for the source's ultralimit proof route; this establishes only the existence of the chosen ultrafilter, not the limit-selection or compactness arguments needed for the inverse theorem ([[def-ultrafilter-extension-principle]], [[ex-frechet-filter]], [[lem-frechet-filter-extends-to-nonprincipal-ultrafilter]]).

[F1] The interval \(U^d[N]\) norm is the ratio of the zero-extension \(U^d\) norm to the interval-indicator \(U^d\) norm in a cyclic ambient group ([[def-gowers-uniformity-norm-on-intervals]]).

[F2] A bounded-complexity linear nilsequence is \(F(g^n x)\) from a finite family of filtered nilmanifolds with \(\|F\|_\infty\le1\) and a uniform Lipschitz bound ([[def-bounded-complexity-nilsequence-on-an-interval]]).

[L1] The current batch-18 factorization supplier states the one-parameter Green–Tao factorization with an \((M,N)\)-smooth factor, a totally \(M^{-A}\)-equidistributed factor, and an \(M\)-rational periodic factor; a local proof is now supplied in that draft carrier; this records current authoring status without implying native acceptance, and the inverse theorem's own local proof remains unsupplied ([[thm-green-tao-quantitative-nil-orbit-factorization]]).

[L2] The corrected linearisation statement is the erratum's replacement for Proposition 8.3, but its local proof is not supplied in this batch ([[lem-gowers-inverse-theorem-corrected-linearisation]]).

## Proof obligations

No local proof is supplied. The published ultralimit route assumes full AC (Appendix A, footnote 8); [A1] alone has not been shown here to justify its limit choice functions. A local justification of the required selections under the recorded foundations, or a local reconstruction of the choice-free route, remains necessary. Section 7 starts at \(s\ge3\) and assumes the cases \(s=1,2\): the missing nontrivial base input is GI(2), the interval \(U^3\) inverse theorem. A separate GI(3) base theorem is not required by that induction. The higher-order induction and polynomial-to-linear conversion also remain unsupplied.
