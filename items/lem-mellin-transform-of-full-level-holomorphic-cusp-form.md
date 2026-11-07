---
id: lem-mellin-transform-of-full-level-holomorphic-cusp-form
kind: lemma
title: "Mellin Transform of a Full-Level Holomorphic Cusp Form"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-standard-l-function-of-a-gl2-eigenform
  - thm-q-expansion-principle-at-the-cusp
  - def-euler-gamma-function
  - lem-full-level-holomorphic-cusp-form-coefficient-growth
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 9, Mellin-transform identity and Theorem 9.3, printed pp. 101–103."
    - title: "Avi Zeff, The Rankin–Selberg Method, Columbia graduate notes"
      url: "https://www.math.columbia.edu/~avizeff/quals/Rankin-Selberg.pdf"
      locator: "§1, Mellin transform of the Fourier expansion, PDF pp. 4–6."
forward_refs: []
---

## Statement

Let $k\ge2$ be even and let $f(z)=\sum_{n\ge1}a_f(n)e^{2\pi inz}$ be a
normalized full-level holomorphic cusp Hecke eigenform. For
$\operatorname{Re}s>3/2$, put $t=s+(k-1)/2$. Then

$$
\int_0^\infty f(iy)y^t\,\frac{dy}{y}
=(2\pi)^{-t}\Gamma(t)L(s,f).
$$

## Statement references

[[def-standard-l-function-of-a-gl2-eigenform|the unitary standard L-function]]

[[thm-q-expansion-principle-at-the-cusp|the Fourier expansion at infinity]]

## Facts & Assumptions

**Given:** The cusp form $f$, its unitary standard L-function, and $\operatorname{Re}s>3/2$.

[F1] [[def-standard-l-function-of-a-gl2-eigenform]]: $\lambda_f(n)=a_f(n)n^{-(k-1)/2}$ and $L(s,f)=\sum_{n\ge1}\lambda_f(n)n^{-s}$.

[F2] [[thm-q-expansion-principle-at-the-cusp]]: for $y>0$, the Fourier series $\sum_{n\ge1}a_f(n)e^{-2\pi ny}$ converges uniformly in $x\in[0,1]$ to $f(x+iy)$.

[F3] [[def-euler-gamma-function]]: for $\operatorname{Re}t>0$, $\Gamma(t)=\int_0^\infty u^{t-1}e^{-u}\,du$.

[F4] [[lem-full-level-holomorphic-cusp-form-coefficient-growth]]: $|a_f(n)|\le C_fn^{k/2}$.

## Proof

**Given:** The form and parameters above; write $\sigma=\operatorname{Re}s$ and $t=s+(k-1)/2$.

1.1 Since $\sigma>3/2$, one has $\operatorname{Re}t>0$. By [F4], $\sum_{n\ge1}|a_f(n)|\int_0^\infty e^{-2\pi ny}y^{\operatorname{Re}t}\,dy/y=\Gamma(\operatorname{Re}t)(2\pi)^{-\operatorname{Re}t}\sum_{n\ge1}|a_f(n)|n^{-\operatorname{Re}t}<\infty$, because the nth summand is $O_f(n^{1/2-\sigma})$. Thus the Fourier expansion may be integrated termwise by absolute convergence. [F3, F4, given, algebra]

2.1 Use [F2] on the imaginary axis and the justified interchange from step 1.1 to get $\int_0^\infty f(iy)y^t\,dy/y=\sum_{n\ge1}a_f(n)\int_0^\infty e^{-2\pi ny}y^t\,dy/y$. For each $n$, the substitution $u=2\pi ny$ and [F3] make the inner integral $(2\pi n)^{-t}\Gamma(t)$. [F2, F3, step 1.1, algebra]

3.1 Therefore the integral is $(2\pi)^{-t}\Gamma(t)\sum_{n\ge1}a_f(n)n^{-t}$. Since $t=s+(k-1)/2$, [F1] identifies this series with $L(s,f)$, proving the formula. [F1, step 2.1, algebra] ∎
