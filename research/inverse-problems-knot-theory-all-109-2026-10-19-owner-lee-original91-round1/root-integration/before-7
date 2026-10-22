---
id: lem-rasmussen-s-mirror
kind: lemma
title: Rasmussen's invariant changes sign under mirror image
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - thm-lee-homology-of-a-knot-has-two-generators
  - def-rasmussen-s-invariant
  - def-lee-deformed-khovanov-complex
  - def-reverse-mirror-of-oriented-knot
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC_omega enters only through the diagram-independent definition of s;
  the dual-cube calculation is finite and choice-free.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: Jacob Rasmussen, Khovanov homology and the slice genus,
        arXiv:math/0402131v1
      url: https://arxiv.org/pdf/math/0402131v1
      locator: §3.2, printed pp. 8–9
    - title: Curtis T. McMullen, 4-Manifolds, Stanford lecture notes
      url: https://web.stanford.edu/~cm5/4Mnotes.pdf
      locator: §5.6, mirror-duality discussion
---

## Statement

Assume the Axiom of Countable Choice.

Let $K^\dagger$ be the reverse mirror of an oriented knot $K$. Then
$$
s(K^\dagger)=-s(K).
$$

## Statement references

[[def-reverse-mirror-of-oriented-knot|Reverse-mirror convention]]

[[def-lee-deformed-khovanov-complex|Lee complex and quantum filtration]]

[[def-rasmussen-s-invariant|Filtration-level definition of $s$]]

[Rasmussen, *Khovanov homology and the slice genus* (2004), §3.2](https://arxiv.org/pdf/math/0402131v1)

[McMullen, *4-Manifolds*, §5.6](https://web.stanford.edu/~cm5/4Mnotes.pdf)

## Facts & Assumptions

**Given:** A finite regular diagram $D$ of $K$.

[F1] The normalized Lee cube has state quantum degree $|v|+n_+-2n_-+\sum\deg_q(a)$ and the deformation differential preserves or raises this grading ([[def-lee-deformed-khovanov-complex]]).

[F2] For a knot, the two extremal Lee filtration levels differ by $2$, with $s=s_{\max}-1=s_{\min}+1$ ([[thm-lee-homology-of-a-knot-has-two-generators]], [[def-rasmussen-s-invariant]]).

[F3] The reverse mirror is obtained by the fixed orientation-reversing reflection followed by reversal of the knot orientation ([[def-reverse-mirror-of-oriented-knot]]).

[A1] $\mathrm{AC}_\omega$ is the axiom branch inherited from diagram independence of Lee filtration levels ([[def-countable-choice]], [[def-rasmussen-s-invariant]]).

## Proof

**Given:** $\mathrm{AC}_\omega$, the two-dimensional Lee homology of $K$, and its reverse mirror.

1.1 On $A_L=\mathbb Q[X]/(X^2-1)$ use the nondegenerate symmetric pairing $\langle u,v\rangle=\epsilon_L(uv)$. Its matrix in the basis $1,X$ is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, so $1$ and $X$ are dual and their quantum degrees are opposite. Frobenius adjunction identifies the dual of a merge with the corresponding split and the dual of a split with the corresponding merge. Reflecting the diagram interchanges the two resolutions at every crossing; complementing the cube vertex $v$ therefore identifies the mirror Lee complex with the graded dual of the original, with $(i,q)$ replaced by $(-i,-q)$. Indeed, if $n=n_++n_-$, then the reflected state has $|v'|=n-|v|$, $n'_+=n_-$ and $n'_-=n_+$, and the displayed quantum-degree formula gives $q'=-q$. Reversing the knot orientation leaves both crossing signs and the underlying cube unchanged, so this also applies to $K^\dagger$. [F1, F3, algebra]

2.1 For a finite filtered vector space, the dual filtration is the annihilator filtration; the dual of the quotient $F^pH/F^{p+1}H$ is the corresponding quotient of the dual filtration at degree $-p$. Applying this to the finite filtered complexes and their cohomology identifies the limiting filtration degrees for the reverse mirror as $-s_{\max}(K)$ and $-s_{\min}(K)$. Thus $s_{\max}(K^\dagger)=-s_{\min}(K),\qquad s_{\min}(K^\dagger)=-s_{\max}(K).$ By [A1] and [F2], $s_{\max}(K)=s(K)+1$ and $s_{\min}(K)=s(K)-1$ are diagram-independent. Consequently $s(K^\dagger)=s_{\max}(K^\dagger)-1=-s(K)$. [A1, F2, step 1.1, algebra] ∎
