---
id: def-standard-inner-product-on-complex-class-functions
kind: definition
title: "The standard inner product on $\\mathrm{cf}(G)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-class-function-and-the-space-of-complex-class-functions, def-complex-conjugate-real-imaginary-part-and-modulus, def-inner-product-space, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.7"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Definition

For two class functions $\varphi,\psi\in\mathrm{cf}(G)$
([[def-class-function-and-the-space-of-complex-class-functions]]), define

$$\langle\varphi,\psi\rangle:=\frac{1}{|G|}\sum_{g\in G}\varphi(g)\,\overline{\psi(g)},$$

the finite sum being that of
([[def-sum-over-a-finite-index-set]]). This is the standard Hermitian form on
the complex vector space of class functions.

This assignment is an inner product in the exact sense of the published
definition ([[def-inner-product-space]]), with the inner product linear in the
first argument. Linearity in the first slot is immediate from the pointwise
vector-space structure of $\mathrm{cf}(G)$ and linearity of the finite sum. The
conjugate-symmetry clause holds because conjugation
([[def-complex-conjugate-real-imaginary-part-and-modulus]]) is an involution:
$\langle\psi,\varphi\rangle=\frac1{|G|}\sum_g\psi(g)\overline{\varphi(g)}
=\overline{\frac1{|G|}\sum_g\varphi(g)\overline{\psi(g)}}
=\overline{\langle\varphi,\psi\rangle}$. For definiteness,
$\langle\varphi,\varphi\rangle=\frac1{|G|}\sum_g|\varphi(g)|^2$ is a sum of
nonnegative real numbers, hence nonnegative real; it is $0$ exactly when every
term $|\varphi(g)|^2$ is $0$, and since $|z|=0$ holds only for $z=0$ in
$\mathbb C$, that says exactly $\varphi=0$ as a function.
