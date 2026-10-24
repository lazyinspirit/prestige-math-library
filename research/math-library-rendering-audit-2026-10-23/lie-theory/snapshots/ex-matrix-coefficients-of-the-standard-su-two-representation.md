---
id: ex-matrix-coefficients-of-the-standard-su-two-representation
kind: example
title: Matrix coefficients of the standard SU(2) representation
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-schur-orthogonality-for-compact-lie-groups, def-axiom-of-choice, def-matrix-coefficient-and-character-of-a-compact-group-representation]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §1–§2 (the standard SU(2) example)"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. Write an element of $SU(2)$ as
$g=\begin{pmatrix}a&b\\-\overline b&\overline a\end{pmatrix}$ with
$|a|^2+|b|^2=1$. Then the four coordinate functions
$a,\ b,\ -\overline b,\ \overline a$ are the matrix coefficients of the standard
two-dimensional representation in the standard orthonormal basis, and they are
pairwise orthogonal in $L^2(SU(2))$ with squared norm $\tfrac12$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice; the standard representation of $SU(2)$ on $\mathbb C^2$ with orthonormal basis $e_1,e_2$ and normalized Haar measure.

[L1] Matrix coefficients are $\pi_{ij}(g)=\langle\pi(g)e_j,e_i\rangle$ for an orthonormal basis ([[def-matrix-coefficient-and-character-of-a-compact-group-representation]]).

[L2] Schur orthogonality: for an irreducible unitary representation of dimension $d$, $\int_G\pi_{ij}(g)\overline{\pi_{kl}(g)}\,dg=\delta_{ik}\delta_{jl}/d$ ([[thm-schur-orthogonality-for-compact-lie-groups]]).

## Verification

**Proof technique:** direct.

1.1 With $g e_1=(a,-\overline b)$ and $g e_2=(b,\overline a)$, the matrix coefficients in the standard basis are $\pi_{11}=a$, $\pi_{21}=-\overline b$, $\pi_{12}=b$ and $\pi_{22}=\overline a$, by [L1]; these are exactly the four displayed coordinate functions. [L1]

2.1 The standard representation is irreducible. Indeed, for every unit vector $(u,v)\in\mathbb C^2$, the matrix $\begin{pmatrix}u&-\overline v\\v&\overline u\end{pmatrix}$ lies in $SU(2)$ and sends $e_1$ to $(u,v)$; hence $SU(2)$ acts transitively on the unit sphere. Any nonzero invariant subspace therefore contains the whole unit sphere and equals $\mathbb C^2$. Since the representation has dimension two, [L2] applies with $d=2$: $\int_{SU(2)}\pi_{ij}\overline{\pi_{kl}}\,dg=\delta_{ik}\delta_{jl}/2$. [L2, step 1.1, algebra]

3.1 Reading off the four cases gives that each of $a,b,-\overline b,\overline a$ has squared norm $\tfrac12$ and that distinct coordinate functions are orthogonal, which is the assertion. [L2, step 2.1] ∎
