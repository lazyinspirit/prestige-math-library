---
id: ex-strictly-upper-triangular-matrices-form-a-nilpotent-lie-algebra
kind: example
title: Strictly upper triangular matrices form a nilpotent Lie algebra
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-lower-central-series-and-nilpotent-lie-algebra, def-nilpotency-class-of-a-lie-algebra]
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
    - title: "Milne, Lie Algebras, strictly upper triangular example"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§2.1, printed pp. 11–12"
---

## Example

For $n\geq2$, the Lie algebra $\mathfrak n_n(k)$ of strictly upper triangular
$n\times n$ matrices is nilpotent of class $n-1$.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\geq2$, and the matrix units $E_{ij}$.

[L1] The lower central series satisfies
$\gamma_{r+1}=[\mathfrak n_n,\gamma_r]$
([[def-lower-central-series-and-nilpotent-lie-algebra]]).

[L2] Class $c$ means $\gamma_c\neq0$ and $\gamma_{c+1}=0$ for a nonzero
nilpotent algebra ([[def-nilpotency-class-of-a-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 For $p\geq1$, let $F_p$ be the span of $E_{ij}$ with $j-i\geq p$; thus $F_1=\mathfrak n_n$ and $F_n=0$. The identity $E_{ij}E_{\ell m}=\delta_{j\ell}E_{im}$ shows that $[F_p,F_q]\subseteq F_{p+q}$: either product is zero, or its surviving matrix unit has superdiagonal distance equal to the sum of the two input distances. [given, algebra]

2.1 Induction using [L1] and step 1.1 gives $\gamma_r(\mathfrak n_n)\subseteq F_r$. Conversely, $F_1=\gamma_1$, and if $r\geq2$ and $E_{ij}\in F_r$, then $j-i\geq r$ and $E_{ij}=[E_{i,i+1},E_{i+1,j}]$; induction puts $E_{i+1,j}\in F_{r-1}=\gamma_{r-1}$, so $E_{ij}\in\gamma_r$. Hence $\gamma_r(\mathfrak n_n)=F_r$ for every $r\geq1$. [L1, step 1.1, algebra]

3.1 In particular, $\gamma_n=F_n=0$, while $\gamma_{n-1}=F_{n-1}=kE_{1n}\neq0$. Equivalently, the explicit left-normed chain $[E_{12},E_{23},\ldots,E_{n-1,n}]=E_{1n}$ witnesses sharpness. Thus [L2] gives class $n-1$. When $n=2$, the chain has one entry and $\mathfrak n_2=kE_{12}$ is abelian of class one; for $n=1$, outside the stated range, $\mathfrak n_1=0$ has class zero. No choice is used. [L2, step 2.1, algebra] ∎
