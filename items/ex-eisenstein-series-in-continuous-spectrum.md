---
id: ex-eisenstein-series-in-continuous-spectrum
kind: example
title: "An Eisenstein Series in the Continuous Spectrum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - thm-spectral-decomposition-l2-congruence-surface
  - def-eisenstein-series-for-congruence-subgroups
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
proof_strategy: direct
axiom_use: AC is assumed explicitly to apply the spectral-decomposition theorem; no additional choice is used in the specialization.
sources:
  references:
    - title: "Austin Lei, Automorphic Forms Learning Seminar Notes (Columbia University, Fall 2024)"
      url: "https://www.math.columbia.edu/~aghosh/ALNotes12.pdf"
      locator: "§3.1 and §3.16: level-one Eisenstein series and continuous Plancherel term."
    - title: "Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh"
      url: "https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf"
      locator: "§§5.3–5.6: the one-cusp Eisenstein family and its continuous spectral integral."
---

## Example

Assume the Axiom of Choice. For $N=1$ and the trivial character, let $E_\infty(z,s)$ be the Eisenstein series attached to the unique cusp, initially defined for $\operatorname{Re}s>1$ and then meromorphically continued. On the unitary axis $s=\tfrac12+it$, $t\in\mathbb R$, the family satisfies the eigen-equation with eigenvalue $\tfrac14+t^2$. Its members are nonzero generalized eigenfunctions for almost every real $t$ in the continuous part of the $L^2$ spectral decomposition; exceptional zero members are permitted and do not affect the Plancherel integral. For a smooth compactly supported automorphic function $f$, their Plancherel contribution is
$$\frac1{4\pi}\int_{-\infty}^{\infty}\left|\int_{PSL_2(\mathbb Z)\backslash\mathbb H} f(z)\overline{E_\infty(z,\tfrac12+it)}\,d\mu(z)\right|^2dt.$$

## Example references

[[thm-spectral-decomposition-l2-congruence-surface]]

[[def-eisenstein-series-for-congruence-subgroups]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice, $N=1$, the trivial character, and a smooth compactly supported automorphic function $f$.

[F1] Under AC, [[thm-spectral-decomposition-l2-congruence-surface]] supplies the meromorphic Eisenstein continuation, its critical-line eigen-equation and almost-everywhere nonvanishing, and the continuous Plancherel term with coefficient $1/(4\pi w_{\mathfrak a})$.

[F2] [[def-eisenstein-series-for-congruence-subgroups]] fixes the integral scaling $\sigma_\infty=I$ and defines the cusp width as the least positive translation in the group.

## Verification

1.1 At $N=1$ the group is $SL_2(\mathbb Z)$, acting through $PSL_2(\mathbb Z)$, and the trivial character makes every cusp singular. Every rational cusp $a/c$ can be written with coprime integers $a,c$; Bezout's identity supplies integers $b,d$ with $ad-bc=1$, so a matrix in $SL_2(\mathbb Z)$ sends $\infty$ to $a/c$. Thus there is one cusp class, represented by $\infty$. The identity scaling in [F2] has width $1$, since translation by $1$ lies in the group. [given, F2, algebra]

2.1 Apply [F1] with these data and the stated AC hypothesis. It gives the continuation of precisely the series normalized in [F2], its eigen-equation with eigenvalue $\tfrac14+t^2$, and nonzero generalized eigenfunctions for almost every real $t$, allowing the stated exceptional zero members. Setting $g=f$ in its Plancherel identity makes the product of transforms the absolute square in the Example. The single singular cusp and width $1$ from step 1.1 reduce its continuous term to exactly the displayed integral with coefficient $1/(4\pi)$. [given, F1, F2, step 1.1, algebra] ∎
