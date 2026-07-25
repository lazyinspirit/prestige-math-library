---
id: rem-compact-operators
kind: remark
title: "Compact operators and the Riesz-Schauder theory"
status: draft
origin: session
proved_here: false
deps: [rem-spectral-theory-bounded-operators]
justified_by: []
forward_refs: []
aliases: []
landmark: false
short: "spectra of compact operators"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Compact operator on Hilbert space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_operator_on_Hilbert_space"
    - title: "Spectral theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Spectral_theorem"
    - title: "F. Albiac and N. J. Kalton, Topics in Banach Space Theory, 2nd ed., Graduate Texts in Mathematics 233, Springer (2016)"
      url: "https://doi.org/10.1007/978-3-319-31557-7"
pipeline_run: null
---

## Statement

An operator $T \in B(X, Y)$ between Banach spaces is **compact** if the image of the unit ball is
relatively compact. The compact operators form a norm closed two-sided ideal in $B(X)$, and contain
the norm limits of finite rank operators.

**Riesz-Schauder theory.** Let $T$ be a compact operator on an infinite-dimensional Banach space
$X$. Then $0 \in \sigma(T)$; every nonzero element of $\sigma(T)$ is an eigenvalue of finite
multiplicity; and $\sigma(T) \setminus \{0\}$ is finite or a sequence of eigenvalues converging to
$0$.

**Compact self-adjoint case.** If $T$ is compact and self-adjoint on a Hilbert space $H$, then $H$
has an orthonormal basis of eigenvectors of $T$, and the corresponding eigenvalues are real and, if
infinitely many, converge to $0$.

## Remarks

**Not proved in this library.** Recorded with a citation.

**What would prove it.** The Riesz theory of $I - T$ for compact $T$: the kernel is
finite-dimensional and the range is closed, the ascending chain of kernels of $(I - T)^n$
stabilises, and a compactness argument bounds the number of eigenvalues outside any disc of positive
radius. The self-adjoint case then follows by maximising the quadratic form on the unit sphere and
splitting off the resulting eigenvector, an induction which needs weak compactness of the ball or
an equivalent.

**Why it matters here.** Compact operators are the class for which infinite-dimensional linear
algebra behaves like the finite-dimensional kind, and they are the setting in which integral
operators are actually analysed. They are also the ideal that the Fredholm theory recorded next is
built on.
