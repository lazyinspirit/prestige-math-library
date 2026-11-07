---
id: thm-dirichlet-twist-mellin-continuation-for-cusp-form
kind: theorem
title: "Entire Continuation of Dirichlet Twists of Cusp-Form L-Series"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-congruence-modular-form-with-nebentypus
  - def-dirichlet-character-modulo-q
  - lem-cusp-form-fourier-coefficients-polynomial-growth
  - def-euler-gamma-function
  - thm-gamma-weierstrass-product
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

Let $N\ge1$, let $k\ge2$ be even, let $\chi$ be a Dirichlet character modulo $N$ with $\chi(-1)=(-1)^k$, and let $f(z)=\sum_{n\ge1}a_ne^{2\pi inz}$ be a cusp form of weight $k$, level $\Gamma_0(N)$, and character $\chi$. For any integer $q\ge1$ and Dirichlet character $\tau$ modulo $q$, the Dirichlet series
$$L(f,\tau,s):=\sum_{n\ge1}a_n\tau(n)n^{-s}$$
converges absolutely for $\operatorname{Re}s>k/2+1$ and has an entire continuation to $\mathbb C$.

## Statement references

[J. S. Milne, Modular Functions and Modular Forms, full course notes](https://www.jmilne.org/math/CourseNotes/MF.pdf)

[Kimball Martin, Modular Forms: A Classical Introduction, full course notes](https://kimballmartin.github.io/mfs/mfs.pdf)

## Facts & Assumptions

**Given:** A cusp form $f$ of even weight $k\ge2$, its Dirichlet nebentypus, and a Dirichlet character $\tau$ modulo $q\ge1$.

[F1] [[def-congruence-modular-form-with-nebentypus]]: the nebentypus is a finite-order character, and at every rational cusp the slash transform has a positive-period Fourier expansion with zero constant term.

[F2] [[lem-cusp-form-fourier-coefficients-polynomial-growth]]: there is $C_f>0$ with $|a_n|\le C_fn^{k/2}$.

[F3] [[def-dirichlet-character-modulo-q]]: $\tau$ is periodic modulo $q$ and $|\tau(n)|\le1$.

[F4] [[def-euler-gamma-function]]: for $\operatorname{Re}s>0$, $\Gamma(s)=\int_0^\infty y^{s-1}e^{-y}\,dy$.

[F5] [[thm-gamma-weierstrass-product]]: $1/\Gamma(s)$ extends to an entire function.

## Proof

**Proof technique:** cusp Mellin integrals and finite Fourier inversion.

1.1 Since $|\tau(n)|\le1$, [F2] gives $|a_n\tau(n)n^{-s}|\le C_fn^{k/2-\sigma}$ for $\sigma=\operatorname{Re}s$. The comparison $\sum_{n\ge1}n^{k/2-\sigma}<\infty$ when $\sigma>k/2+1$ proves absolute convergence. [given, F2, F3, algebra]

1.2 For each residue class $a\bmod q$, put $I_a(s)=\int_0^\infty f(a/q+iy)y^{s-1}\,dy$. At $y\to\infty$, the Fourier expansion at $\infty$ and [F2] give $f(a/q+iy)=O(e^{-2\pi y})$. At $y\to0^+$, reduce $a/q=A/C$ and choose $\sigma_0=\begin{pmatrix}A&B\\C&D\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$ with $\sigma_0\infty=A/C$. Then $w=\sigma_0^{-1}(A/C+iy)=-D/C+i/(C^2y)$ and $Cw+D=i/(Cy)$. By [F1], $f|_k\sigma_0$ has a zero-constant Fourier expansion of positive period, so it is $O(e^{-c\operatorname{Im}w})$ as $\operatorname{Im}w\to\infty$. The slash identity gives $f(A/C+iy)=O(y^{-k}e^{-c'/y})$. These bounds, also after multiplying by any power of $|\log y|$, are integrable against $y^{s-1}$ locally uniformly for $s$ in compact sets. Therefore $I_a(s)$ is entire. [F1, F2, algebra]

1.3 Define $c_a=q^{-1}\sum_{b\bmod q}\tau(b)e^{-2\pi iab/q}$. Finite Fourier orthogonality gives $\sum_{a\bmod q}c_ae^{2\pi ian/q}=q^{-1}\sum_{b\bmod q}\tau(b)\sum_{a\bmod q}e^{2\pi ia(n-b)/q}=\tau(n)$ for every integer $n$. [F3, algebra]

2.1 For $\operatorname{Re}s>k/2+1$, [F2] justifies termwise integration and the substitution $u=2\pi ny$ gives $I_a(s)=\sum_{n\ge1}a_ne^{2\pi ian/q}\int_0^\infty e^{-2\pi ny}y^{s-1}\,dy=\Gamma(s)(2\pi)^{-s}\sum_{n\ge1}a_ne^{2\pi ian/q}n^{-s}$. Thus $D_a(s):=(2\pi)^sI_a(s)/\Gamma(s)$ agrees with the additive-twist series on this half-plane; by [F5] it extends to an entire function. [F2, F4, F5, step 1.2, algebra]

3.1 In the absolute-convergence half-plane, the finite Fourier identity in step 1.3 yields $L(f,\tau,s)=\sum_{a\bmod q}c_aD_a(s)$. Step 2.1 makes every summand entire, so this finite sum is an entire continuation of the stated Dirichlet series. [step 2.1, step 1.3, algebra] ∎
