---
id: cex-boundary-point-values-are-not-defined-by-an-lp-class
kind: counterexample
title: "Boundary point values are not a function of the interior $L^p$ class"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-l-p-space-as-a-quotient-by-null-functions, thm-lp-trace-operator-on-a-bounded-c-one-domain, lem-sobolev-trace-agrees-with-continuous-boundary-values, def-sobolev-space-wkp-and-its-norm, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, thm-polar-coordinates-formula-for-lebesgue-measure, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Section 3.7, the opening example $(1-|x|)^{-1/4}\\in L^2(B)$ with infinite boundary values, printed p. 62."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Problems 9.19 and 9.22, printed p. 211: classical restriction on continuous functions is unbounded with respect to the $L^p(U)$ norm, so boundary values cannot be recovered from an $L^p$ class."
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 3, Section 3.9, printed pp. 71-72: the sequence $\\varphi_\\varepsilon(x)=e^{-x^2/\\varepsilon}$ with $\\|\\varphi_\\varepsilon\\|_{L^1}\\to0$ but $\\varphi_\\varepsilon(0)=1$."
---

## Statement refuted

Assume the Axiom of Choice. The following two claims are false. (1) On a bounded
$C^1$ domain $\Omega$, boundary values are a function of the interior class:
for every $L^p(\Omega)$ class the pointwise boundary values of a
representative are determined by the class, so that classical restriction
would descend to $L^p(\Omega)$. (2) Every $L^p(\Omega)$ class is bounded near
$\partial\Omega$, so that pointwise evaluation on $\partial\Omega$ could be
recovered from the interior class. In fact two functions with the same
interior class can have different classical boundary restrictions, and a
single $L^2$ class can be unbounded on every neighbourhood of the boundary;
the Sobolev trace is defined on $W^{1,p}$ classes and does not assign a
trace to every $L^p$ class.

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$; the unit ball $\Omega=B(0,1)$; the functions $f=0$ and $\tilde f=\mathbf 1_{\partial\Omega}$ on $\overline\Omega$; the trace operator $T$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]; and $1\le p<\infty$, $k\ge0$.

[F1] $L^p(\Omega)$ is the quotient of the $p$-integrable measurable functions by almost-everywhere equality. Two such functions differing only on a null set define the same $L^p$ class; if that class belongs to $W^{k,p}(\Omega)$, they represent the same Sobolev element. The zero class belongs to every $W^{k,p}(\Omega)$, since all its weak derivatives are zero. ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-sobolev-space-wkp-and-its-norm]])

[F2] The unit sphere has zero ambient Lebesgue measure: the polar formula applied to its indicator has nonzero sections only at the radial singleton $r=1$, which has one-dimensional measure zero by the box formula. ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F3] For a $W^{1,p}(\Omega)$ class admitting a representative continuous on $\overline\Omega$, the trace is that representative's classical restriction. ([[lem-sobolev-trace-agrees-with-continuous-boundary-values]])

[F4] Assume the Axiom of Countable Choice. Polar coordinates give $\int_{B(0,1)}h\,dx=\int_0^1\int_{S^{n-1}}h(r\omega)r^{n-1}d\sigma(\omega)dr$ for $h\ge0$ Borel. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

## Counterexample

On $\Omega=B(0,1)$ the functions $f=0$ and $\tilde f=\mathbf 1_{\partial\Omega}$ differ only on the Lebesgue-null set $\partial\Omega$, so they represent the same element of $L^p(\Omega)$ and of $W^{k,p}(\Omega)$ for every $k,p$; yet their classical restrictions to $\partial\Omega$ are the zero function and the constant-one function, which differ on the whole boundary, while $Tf=T\tilde f=0$ by [[thm-lp-trace-operator-on-a-bounded-c-one-domain]].

1.1 Two different boundary restrictions, one class. The set $\partial\Omega$ has measure zero by [F2], so $f$ and $\tilde f$ agree off a null set; their restrictions to $\Omega$ are both identically zero, so [F1] identifies their common $L^p(\Omega)$ class with the zero element of $W^{k,p}(\Omega)$ for every $k$ and $p$. Their classical restrictions to $\partial\Omega$ are $0$ and $1$ respectively, which differ at every point of $\partial\Omega$. Since $f$ is continuous on $\overline\Omega$, $Tf=0$ by [F3]; and $T\tilde f=Tf$ because $\tilde f$ is a representative of the class of $f$ and $T$ is defined on classes. Hence the boundary values of a representative carry information invisible to $T$. [F1, F2, F3, algebra, given]

1.2 An $L^2$ class with no finite boundary values. On the unit ball $B(0,1)\subset\mathbb R^n$ put $g(x):=(1-|x|)^{-1/4}$. Then $\int_Bg^2dx=\int_B(1-|x|)^{-1/2}dx=\int_0^1(1-r)^{-1/2}r^{n-1}\sigma(S^{n-1})dr\le\sigma(S^{n-1})\int_0^1(1-r)^{-1/2}dr=2\sigma(S^{n-1})<\infty$ by [F4], so $g\in L^2(B)$. On the other hand $g(x)\to\infty$ as $|x|\to1$, so $g$ is unbounded on every neighbourhood of $\partial B$: no finite boundary values can be assigned from pointwise evaluation. [F4, algebra, given]

2.1 Conclusion. Step 1.1 shows that two functions with the same interior class can have different classical boundary restrictions, while both have zero trace; step 1.2 shows that a single $L^p$ class need not be bounded near the boundary, so pointwise boundary evaluation is not a well-defined operation on $L^p(\Omega)$ classes. For $W^{1,p}$ classes the Sobolev trace supplies boundary data independent of representatives; this does not extend pointwise evaluation to all $L^p$ classes. [step 1.1, step 1.2, algebra, given] ∎

## Source notes

Laugesen's opening example (printed p. 62) is the function $(1-|x|)^{-1/4}$ with infinite boundary values; Teschl's Problem set on traces (Problems 9.19 and 9.22, printed p. 211) records that classical restriction is not controlled by the interior $L^p$ norm, and Hunter's boundary-layer sequence (printed pp. 71-72) is the same failure in one dimension. The example above separates the two independent mechanisms: a null-set change of representative and an unbounded near-boundary profile.
