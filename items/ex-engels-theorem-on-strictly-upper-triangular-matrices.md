---
id: ex-engels-theorem-on-strictly-upper-triangular-matrices
kind: example
title: Engel's theorem for strictly upper triangular matrices
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-engels-triangularization-theorem, ex-strictly-upper-triangular-matrices-form-a-nilpotent-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Engel's theorem and the flag algebra n(F)"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "flag example and Theorem 2.8, printed pp. 27–29"
---

## Example

Let $\mathfrak n_n(k)$ act on $k^n$ by the standard action of strictly upper
triangular matrices. Every element acts nilpotently, $e_1$ is a common zero
vector, and the standard flag realizes the conclusion of Engel
triangularization.

## Facts & Assumptions

**Given:** A field $k$, an integer $n\geq1$, the standard basis
$e_1,\ldots,e_n$ of $V=k^n$, and the inclusion action of
$\mathfrak n_n(k)\subseteq\mathfrak{gl}(V)$.

[L1] Engel triangularization produces a flag
$0=V_0\subset V_1\subset\cdots\subset V_n=V$ with
$\mathfrak gV_i\subseteq V_{i-1}$ for a nil representation
([[thm-engels-triangularization-theorem]]).

[L2] For $n\geq2$, $\mathfrak n_n(k)$ is the strictly upper triangular
matrix Lie algebra and is nilpotent of class $n-1$
([[ex-strictly-upper-triangular-matrices-form-a-nilpotent-lie-algebra]]).

## Verification

**Proof technique:** direct.

1.1 Set $V_i=\operatorname{span}(e_1,\ldots,e_i)$ for $0\leq i\leq n$. If $A$ is strictly upper triangular, its $j$th column has nonzero entries only in rows smaller than $j$, so $Ae_j\in V_{j-1}$. Therefore $A(V_i)\subseteq V_{i-1}$ for every $i$. Iterating gives $A^n(V)=A^n(V_n)\subseteq V_0=0$, so every $A\in\mathfrak n_n(k)$ is a nilpotent operator. [given, algebra]

2.1 Taking $i=1$ in step 1.1 gives $Ae_1=0$ for every $A\in\mathfrak n_n(k)$, so $e_1\neq0$ is a common zero vector. The full chain $0=V_0\subset V_1\subset\cdots\subset V_n=V$ has $\dim V_i=i$ and the containment required by [L1], so this explicit standard flag realizes Engel triangularization. [L1, step 1.1]

3.1 If $n=1$, then $\mathfrak n_1(k)=0$, the sole operator is zero, and the flag $0\subset ke_1$ satisfies the same calculation. For $n\geq2$, [L2] additionally identifies the acting Lie algebra as nilpotent of class $n-1$, although elementwise nilpotence of this particular representation was proved directly in step 1.1. All basis and flag data are explicit and finite, so no choice principle is used. [L2, step 1.1, step 2.1] ∎
