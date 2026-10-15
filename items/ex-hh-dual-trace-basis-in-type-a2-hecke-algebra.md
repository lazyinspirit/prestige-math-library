---
id: ex-hh-dual-trace-basis-in-type-a2-hecke-algebra
kind: example
title: "The dual trace basis for the type-A2 Hecke algebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-canonical-hecke-trace-and-symmetrizing-form, thm-hh-canonical-hecke-trace-is-symmetric-and-perfect, def-hh-universal-coxeter-hecke-parameters-and-presentation, lem-hh-reduced-word-independence-and-length-multiplication, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Andrew Mathas, Iwahori-Hecke Algebras and Schur Algebras of the Symmetric Group (self-contained notes, 1998; complete 79-page text)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 1, §2, printed pp. 4-5: Definition of the coefficient-at-identity form and Proposition 1.14, including its type-A2 dual-basis formula"
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras (EPFL lecture notes, arXiv:math/0511548v2)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Section 2, printed pp. 6-7: the generic trace pairing formula for finite Coxeter Hecke algebras"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take the equal-parameter Hecke algebra of $W=S_3$ over $R=\mathbb Z[v^{\pm1}]$, with basis
$$
1,T_1,T_2,T_{12},T_{21},T_{w_0},\qquad T_{12}=T_1T_2,\quad T_{21}=T_2T_1,\quad T_{w_0}=T_1T_2T_1=T_2T_1T_2.
$$
For the canonical trace $\tau(T_w)=\delta_{w,1}$, the inverse map on $W$ is
$$
1^{-1}=1,\quad s_1^{-1}=s_1,\quad s_2^{-1}=s_2,\quad (s_1s_2)^{-1}=s_2s_1,\quad (s_2s_1)^{-1}=s_1s_2,\quad w_0^{-1}=w_0.
$$
Thus the Gram matrix $(\tau(T_xT_y))_{x,y\in W}$ in the displayed ordered basis is
$$
\begin{pmatrix}1&0&0&0&0&0\\0&1&0&0&0&0\\0&0&1&0&0&0\\0&0&0&0&1&0\\0&0&0&1&0&0\\0&0&0&0&0&1\end{pmatrix}
$$
The trace-dual basis is $(1,T_1,T_2,T_{21},T_{12},T_{w_0})$, so the dual vector to $T_w$ is $T_{w^{-1}}$. It is not generally the algebra inverse: if $a=v-v^{-1}$, then $T_1^{-1}=T_1-a$, whereas the trace-dual vector to $T_1$ is $T_1$.

## Facts & Assumptions

**Given:** The equal-parameter type-A2 Hecke algebra over $R=\mathbb Z[v^{\pm1}]$, its standard basis, and the coefficient-at-identity trace.

[F1] For finite $W$, the canonical trace sends $\sum_wr_wT_w$ to $r_1$. ([[def-hh-canonical-hecke-trace-and-symmetrizing-form]])

[F2] For all $x,y\in W$, $\tau(T_xT_y)=\delta_{x^{-1},y}$, and the trace-dual basis is $\{T_{w^{-1}}:w\in W\}$. ([[thm-hh-canonical-hecke-trace-is-symmetric-and-perfect]])

[F3] $R=\mathbb Z[v^{\pm1}]$ is the Laurent polynomial ring and $T_i^2=(v-v^{-1})T_i+1$. ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]])

[F4] The standard elements $T_w$ form an $R$-basis, with multiplication $T_xT_y=T_{xy}$ for additive lengths. ([[thm-hh-generic-coxeter-hecke-standard-basis]], [[lem-hh-reduced-word-independence-and-length-multiplication]])

## Verification

**Given:** The data in Facts & Assumptions.

1.1 The reduced words for the six elements of $S_3$ give exactly the listed standard basis. Reversing each reduced word gives the displayed inverse map; in particular $w_0=s_1s_2s_1$ is its own inverse. [F4, given]

2.1 By [F1], $\tau$ is the coefficient-at-identity functional; applying [F2] to the ordered basis in step 1.1 gives $\tau(T_xT_y)=1$ exactly when the column index is $y=x^{-1}$, and $0$ otherwise. The resulting matrix is the displayed permutation matrix. [F1, F2, step 1.1]

3.1 The matrix in step 2.1 permutes the coordinate basis by $x\mapsto x^{-1}$, so it has an inverse equal to itself and determinant $-1$, a unit in $R$. Its dual vectors are therefore $T_{x^{-1}}$; directly, $\tau(T_xT_{y^{-1}})=\delta_{x,y}$. [F2, step 2.1, algebra]

4.1 The quadratic relation in [F3] gives $T_1^2=aT_1+1$, so $T_1(T_1-a)=1=(T_1-a)T_1$ and $T_1^{-1}=T_1-a$. The Laurent ring $R$ has distinct basis monomials $v$ and $v^{-1}$, hence $a=v-v^{-1}\ne0$; thus $T_1^{-1}\ne T_1$, while step 3.1 shows $T_1$ itself is trace-dual to $T_1$. This distinguishes the two notions explicitly. [F3, step 3.1, algebra] ∎
