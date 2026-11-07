---
id: lem-cusp-form-fourier-coefficients-polynomial-growth
kind: lemma
title: "Polynomial Growth of Fourier Coefficients of a Cusp Form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-congruence-modular-form-with-nebentypus
  - lem-finite-index-congruence-modular-quotient-has-finite-cusp-charts
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms, full course notes"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 4, Definition 4.5 and cusp conditions; Chapter 9, §§9.1–9.3, Mellin transforms and functional equations."
    - title: "Kimball Martin, Modular Forms: A Classical Introduction, full course notes"
      url: "https://kimballmartin.github.io/mfs/mfs.pdf"
      locator: "§§7.3 and 8.4; Mellin transform, functional equation and Atkin–Lehner operators."
---

## Statement

Let $N\ge1$, let $k\ge2$ be even, and let $\chi$ be a Dirichlet character modulo $N$ with $\chi(-1)=(-1)^k$. If $f(z)=\sum_{n\ge1}a_ne^{2\pi inz}$ is a cusp form of weight $k$, level $\Gamma_0(N)$, and character $\chi$, then there is a constant $C_f>0$ such that $|a_n|\le C_fn^{k/2}$ for every $n\ge1$.

## Statement references

[J. S. Milne, Modular Functions and Modular Forms, full course notes](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Kimball Martin, Modular Forms: A Classical Introduction, full course notes](https://kimballmartin.github.io/mfs/mfs.pdf)

## Facts & Assumptions

**Given:** A cusp form $f$ as in the Statement.

[F1] [[def-congruence-modular-form-with-nebentypus]]: $f|_k\gamma=\chi(d)f$ for $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\Gamma_0(N)$, $|\chi(d)|=1$, and every cusp expansion has zero constant term.

[F2] [[lem-finite-index-congruence-modular-quotient-has-finite-cusp-charts]]: there are finitely many cusp charts and a compact complement.

## Proof

**Proof technique:** the Petersson pointwise bound and Fourier coefficient extraction.

1.1 The function $y^{k/2}|f(x+iy)|$ is $\Gamma_0(N)$-invariant: the automorphy law in [F1] gives $|f(\gamma z)|=|cz+d|^k|f(z)|$, while $\operatorname{Im}(\gamma z)=y/|cz+d|^2$. In a cusp chart given by $\sigma\in\mathrm{SL}_2(\mathbb Z)$, this invariant equals $(\operatorname{Im}w)^{k/2}|f|_k\sigma(w)|$ for $w=\sigma^{-1}z$. The zero-constant Fourier expansion in [F1] makes it tend to $0$ exponentially as $\operatorname{Im}w\to\infty$. By [F2], removing the finitely many cusp neighborhoods leaves a compact quotient, on which the invariant is bounded by continuity. Thus $M_f:=\sup_{z=x+iy\in\mathbb H}y^{k/2}|f(z)|<\infty$. [F1, F2, algebra]

2.1 Fix $n\ge1$ and $y>0$. Uniform convergence of the $q$-series on $|q|=e^{-2\pi y}$ gives $a_ne^{-2\pi ny}=\int_0^1f(x+iy)e^{-2\pi inx}\,dx$. The absolute value is at most $M_fy^{-k/2}$. Taking $y=1/n$ yields $|a_n|\le e^{2\pi}M_fn^{k/2}$. Set $C_f=e^{2\pi}M_f$. [F1, step 1.1, algebra] ∎
