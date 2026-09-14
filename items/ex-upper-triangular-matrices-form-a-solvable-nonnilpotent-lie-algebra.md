---
id: ex-upper-triangular-matrices-form-a-solvable-nonnilpotent-lie-algebra
kind: example
title: Upper triangular matrices are solvable but not nilpotent
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-derived-series-and-solvable-lie-algebra, def-lower-central-series-and-nilpotent-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, triangular matrix examples"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§§2–3, printed pp. 11–17"
---

## Example

For every $n\geq2$, the Lie algebra $\mathfrak b_n(k)$ of upper triangular
$n\times n$ matrices is solvable but not nilpotent.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\geq2$, and the standard matrix units.

[L1] Solvability is termination of the derived series
([[def-derived-series-and-solvable-lie-algebra]]).

[L2] Nilpotence is termination of the lower central series
([[def-lower-central-series-and-nilpotent-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 The diagonal entry of a commutator of two upper triangular matrices is zero, so $\mathfrak b_n^{(1)}$ lies in the strictly upper triangular subspace $F_1$. More generally, if $F_p$ is spanned by $E_{ij}$ with $j-i\geq p$, matrix-unit multiplication gives $[F_p,F_q]\subseteq F_{p+q}$ and $F_n=0$. Induction yields $\mathfrak b_n^{(r)}\subseteq F_{2^{r-1}}$ for $r\geq1$, so a derived term vanishes once $2^{r-1}\geq n$. Thus $\mathfrak b_n$ is solvable by [L1]. [given, L1, algebra]

1.2 Let $H=E_{11}$ and $X=E_{12}$. Then $[H,X]=X$, so $X\in\gamma_2(\mathfrak b_n)$. If $X\in\gamma_r$, the same bracket puts $X$ in $[\mathfrak b_n,\gamma_r]=\gamma_{r+1}$. Hence $X$ belongs to every $\gamma_r$ for $r\geq2$, and none of these terms is zero. Therefore $\mathfrak b_n$ is not nilpotent by [L2]. [given, L2, algebra]

2.1 Steps 1.1 and 1.2 prove the two promised properties over every field. The restriction $n\geq2$ is sharp for this conclusion: $\mathfrak b_1=kE_{11}$ is one-dimensional abelian and therefore nilpotent. All witnesses are explicit and no choice is used. [step 1.1, step 1.2] ∎
