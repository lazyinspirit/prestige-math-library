---
id: ex-weighted-norm-invariance-for-a-mobius-transformation
kind: example
title: Weighted norm invariance for the inversion generator
status: published
origin: pipeline
deps:
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - lem-the-weighted-discrete-series-space-is-a-hilbert-space
  - lem-the-weighted-area-form-is-sl2-r-invariant
  - thm-algebra-of-complex-derivatives
  - cor-jacobian-determinant-of-a-holomorphic-map
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
  - def-axiom-of-choice
dependency_level: 8
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "AC supplies Countable Choice for the nonnegative C1 change-of-variables theorem. The explicit inversion and exponent calculation add no further choice."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Proposition 7.4.16(1), printed pp. 305–307 (unitarity of π_n)"
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "Appendix I §7, Exercise 7.1, printed p. 27 (unitarity of the weighted holomorphic model)"
---
## Statement

For $w=\begin{pmatrix}0&1\\-1&0\end{pmatrix}\in K$, one has $w\cdot z=-1/z$ and $j(w^{-1},z)=z$. Thus at $n=2$,
$$\pi_2(w)f(z)=z^{-2}f(-1/z)=(-z)^{-2}f(-1/z).$$
For every $f\in\mathcal H_2^+$ this is a bijective isometry of $\mathcal H_2^+$; explicitly, substituting $z=-1/u$ in its squared norm cancels the factor $|u|^4$ from $|z|^{-4}$ against the real Jacobian $|u|^{-4}$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the model, norm and action conventions of [[def-holomorphic-and-antiholomorphic-discrete-series-models]].

[F1] The fractional maps $g\cdot z=\frac{az+b}{cz+d}$ and $j(g,z)=cz+d$ define the model action of [[def-holomorphic-and-antiholomorphic-discrete-series-models]]; the matrix identities used below are verified directly in step 1.1.

[F2] The derivative of $z\mapsto-1/z$ is $z^{-2}$, and its real Jacobian determinant is the squared modulus of that derivative ([[thm-algebra-of-complex-derivatives]], [[cor-jacobian-determinant-of-a-holomorphic-map]]).

[F3] Nonnegative Lebesgue integrals transform under a C1 diffeomorphism ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F4] $\mathcal H_2^+$ is the Hilbert space with squared norm $\int_{\mathfrak H}|f(z)|^2dx\,dy$, and the model formula defines a group action on it ([[lem-the-weighted-discrete-series-space-is-a-hilbert-space]], [[def-holomorphic-and-antiholomorphic-discrete-series-models]]).

[F5] The same automorphy/Jacobian cancellation is the $n=2$ case of the general weighted invariance calculation ([[lem-the-weighted-area-form-is-sl2-r-invariant]]).

[A1] AC implies Countable Choice, as required by [F3] ([[def-axiom-of-choice]], [[def-countable-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

## Proof

**Proof technique:** direct.

**Given:** $f\in\mathcal H_2^+$ and the matrix $w$ of the Statement.

1.1 Direct matrix multiplication gives $w^2=-I$ and $w^{-1}=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, so $w\cdot z=-1/z$ and $j(w^{-1},z)=z$. Since $w^{-1}\cdot z=-1/z$ and $j(w^{-1},z)=z$, the model action is $\pi_2(w)f(z)=z^{-2}f(-1/z)$. The map $z\mapsto-1/z$ is an involutive C1 diffeomorphism of $\mathfrak H$, so this formula defines a holomorphic function there. [F1, F4, algebra]

1.2 Apply [F3] to $z=-1/u$. By [F2], $dA_z=|u|^{-4}dA_u$, while $|z^{-2}|^2=|u|^4$; hence $\|\pi_2(w)f\|_2^2=\int_{\mathfrak H}|u|^4|f(u)|^2|u|^{-4}dA_u=\|f\|_2^2$. The integrand is nonnegative, so the change-of-variables identity also holds as an extended integral; for $f\in\mathcal H_2^+$ it is finite. [F2, F3, F4, algebra, A1]

2.1 Since $w^2=-I$ and the scalar automorphy factor of $-I$ at weight $2$ is $(-1)^{-2}=1$, the group law in [F4] gives $\pi_2(w)^2=I$. Therefore the norm-preserving map of step 1.2 is onto and is a bijective linear isometry. The cancellation is the special $n=2$ instance of [F5], where the density weight is $y^0=1$. [F1, F4, F5, step 1.2] ∎
