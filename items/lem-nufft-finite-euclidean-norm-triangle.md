---
id: lem-nufft-finite-euclidean-norm-triangle
kind: lemma
title: Triangle inequality for the finite NUFFT Euclidean norm
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
page: nonuniform-fast-fourier-transforms
dependency_level: 1
proof_strategy: direct
deps:
  - def-nufft-finite-array-norms
  - def-complete-ordered-real-field
  - lem-of-square-positive
  - lem-of-square-monotone
  - lem-complex-conjugation-and-modulus-laws
  - def-complex-conjugate-real-imaginary-part-and-modulus
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: No choice axiom is used; the proof only instantiates one coordinate
  from a single finite nonempty set when the second vector is nonzero.
sources:
  references:
    - title: Sheldon Axler, Linear Algebra Done Right, fourth edition
      url: https://linear.axler.net/LADR4e.pdf
      locator: "Section 6A, printed pp. 188–190: orthogonal decomposition 6.13,
        Cauchy–Schwarz inequality 6.14 and complete proof, triangle inequality
        6.17 and complete proof. The local finite-complex-array proof expands
        the same projection residual and squared norm directly, including the
        zero case."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For a finite index set $E$ and arrays $x,y\in\mathbb C^E$, the Euclidean norm of [[def-nufft-finite-array-norms]] satisfies
$$\|x+y\|_2\le\|x\|_2+\|y\|_2.$$

## Facts & Assumptions

**Given:** A finite set $E$ and arrays $x,y\in\mathbb C^E$ with the counting inner product and norms of [[def-nufft-finite-array-norms]].

[F1] [[def-nufft-finite-array-norms]]: $\langle x,y\rangle_E=\sum_e x_e\overline{y_e}$ and $\|x\|_2^2=\sum_e|x_e|^2$.

[F2] [[lem-complex-conjugation-and-modulus-laws]] and [[def-complex-conjugate-real-imaginary-part-and-modulus]]: $z\overline z=|z|^2$, $|z|\ge0$, and $|z|=0$ exactly when $z=0$.

[F3] [[def-complete-ordered-real-field]] and [[lem-of-square-positive]]: finite sums of nonnegative reals are nonnegative; a nonzero real square is positive, and a positive summand makes such a finite sum positive.

[F4] [[lem-of-square-monotone]]: for nonnegative reals, comparison of squares is equivalent to comparison of the numbers.

## Proof

1.1 First prove Cauchy–Schwarz for these arrays. If $y=0$, its inner product with $x$ is zero. If $y\ne0$, choose $e_0$ with $y_{e_0}\ne0$; [F2]–[F3] give $\|y\|_2^2=\sum_e|y_e|^2>0$. Put $a=\langle x,y\rangle_E$ and $c=a/\|y\|_2^2$. Expanding the finite sum using [F1] and conjugation laws gives $0\le\|x-cy\|_2^2=\|x\|_2^2-\frac{|a|^2}{\|y\|_2^2}.$ Multiplying by the positive denominator yields $|\langle x,y\rangle_E|^2\le\|x\|_2^2\|y\|_2^2$; all quantities are nonnegative, so [F4] gives $|\langle x,y\rangle_E|\le\|x\|_2\|y\|_2$. [given, F1, F2, F3, F4, choose, algebra]

2.1 Expand the squared norm: $\|x+y\|_2^2=\|x\|_2^2+2\operatorname{Re}\langle x,y\rangle_E+\|y\|_2^2\le(\|x\|_2+\|y\|_2)^2,$ where the inequality follows from step 1.1 and $\operatorname{Re}z\le|z|$, itself immediate from $|a+ib|^2=a^2+b^2\ge a^2$ and [F4]. Both sides before squaring are nonnegative, so [F4] gives the stated triangle inequality. [F1, F2, F4, step 1.1, algebra] ∎