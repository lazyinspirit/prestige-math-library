---
id: ex-hh-finite-group-dual-hopf-algebra
kind: example
title: "The dual Hopf algebra of a finite group algebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps:
  - def-hh-finite-dual-of-an-associative-algebra
  - thm-hh-finite-dimensional-dual-hopf-algebra
  - lem-hh-group-and-polynomial-hopf-algebras-exist
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew Baker, Hopf algebras over fields: an introduction, §3.4"
      url: "https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf"
---

## Example

Let $G$ be a finite group and $k$ any field. The group algebra $kG$ has basis $G$, with $\Delta(g)=g\otimes g$, $\varepsilon(g)=1$, and $S(g)=g^{-1}$. Identify $(kG)^*$ with the function algebra $k^G$ using the dual basis $\delta_g(h)=1$ if $h=g$ and $0$ otherwise. Then $k^G$ has pointwise multiplication, and
$$
\Delta(\delta_g)=\sum_{ab=g}\delta_a\otimes\delta_b,\quad \varepsilon(\delta_g)= \begin{cases}1,&g=e,\\0,&g\ne e,\end{cases} \quad S(\delta_g)=\delta_{g^{-1}}, \quad 1_{k^G}=\sum_{g\in G}\delta_g.
$$

## Verification

**Given:** A finite group $G$, a field $k$, and the group algebra Hopf structure supplied by the planned HH-4 construction.

[F1] [[lem-hh-group-and-polynomial-hopf-algebras-exist]]: $kG$ is the free vector space on $G$, with group multiplication and $\Delta(g)=g\otimes g$, $\varepsilon(g)=1$, $S(g)=g^{-1}$.

[F2] [[thm-hh-finite-dimensional-dual-hopf-algebra]]: for finite-dimensional Hopf $H$, $H^*$ is Hopf with product transposed from $\Delta_H$, coproduct transposed from multiplication, and antipode $S_H^*$.

[F3] [[def-hh-finite-dual-of-an-associative-algebra]]: $A^\circ$ consists of functionals vanishing on a finite-codimensional two-sided ideal.

1.1 The group basis makes $\dim_k(kG)=|G|<\infty$, so the zero ideal has finite codimension and [F3] gives $kG^\circ=(kG)^*$; [F2] gives its dual Hopf structure. Since $G$ is finite, the functions $\delta_g$ form a basis of $k^G$: every function $f$ is $\sum_{g\in G}f(g)\delta_g$, and evaluation at each group element proves linear independence. [given, F1, F2, F3, algebra]

2.1 For $a,b,u\in G$, the dual multiplication gives $(\delta_a\delta_b)(u)=(\delta_a\otimes\delta_b)(u\otimes u)=\delta_a(u)\delta_b(u)$, so $\delta_a\delta_b=0$ if $a\ne b$ and $\delta_a\delta_a=\delta_a$. Thus multiplication is pointwise, and the constant-one function is $\sum_{g\in G}\delta_g$. [step 1.1, F1, F2, algebra]

2.2 The coproduct is determined by $\Delta(\delta_g)(u\otimes v)=\delta_g(uv)$. The right-hand side is $1$ exactly for pairs with $uv=g$, hence $\Delta(\delta_g)=\sum_{ab=g}\delta_a\otimes\delta_b$; the sum is finite because $G$ is finite. [step 1.1, F2, algebra]

3.1 The dual counit is $\varepsilon(\delta_g)=\delta_g(1_{kG})=\delta_g(e)$, and the dual antipode is $S^*(\delta_g)(h)=\delta_g(S(h))=\delta_g(h^{-1})=\delta_{g^{-1}}(h)$. These formulas give the stated counit and antipode, so [F2] verifies that the listed maps form a Hopf algebra. [given, step 1.1, step 2.2, F1, F2, algebra] ∎
