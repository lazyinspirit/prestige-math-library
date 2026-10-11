---
id: def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras
kind: definition
title: "The type-A cyclotomic specialization of the QG-KLR algebras"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps: [def-cyclic-affine-type-a-cartan-datum,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-quantum-characteristic-of-an-invertible-hecke-parameter,
       def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-affine-and-cyclotomic-type-a-hecke-algebras,
       def-klr-grading-and-diagrammatic-composition]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v3, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883–1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 2.2 relations (2.9)–(2.12) and the grading statement after (2.12); Sections 4.1–4.3, Theorem 4.1 and Remark 4.2, pp. 30–32."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, arXiv:0803.4121v3, Represent. Theory 13 (2009) 309–347 (complete 53-page article)"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Sections 2.1–2.2: local relations (2.3)–(2.8) and the grading (2.12) (deg dot = 2, deg crossing = −i·j); Section 2.3 polynomial representation and Theorem 2.5."
---

## Definition

Let $F,q,e,I,\Lambda,\lambda_i$ be as in
[[def-affine-and-cyclotomic-type-a-hecke-algebras]]
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]],
[[def-cyclic-affine-type-a-cartan-datum]]). On the cyclic affine type-A Cartan
datum take the normalized symmetrizers $d_i=1$ and define the **type-A KLR
datum** $Q^{\mathrm A}$ by
$$Q^{\mathrm A}_{ii}=0,\qquad Q^{\mathrm A}_{ij}=1\quad\text{if }a_{ij}=0,$$
$$Q^{\mathrm A}_{i,i+1}(u,v)=v-u,\qquad Q^{\mathrm A}_{i+1,i}(u,v)=u-v\qquad(e\ge3),$$
$$Q^{\mathrm A}_{01}(u,v)=Q^{\mathrm A}_{10}(u,v)=-(u-v)^2\qquad(e=2).$$
Write $R_\alpha$ for the resulting generalized KLR algebra over $F$
([[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]],
[[def-klr-grading-and-diagrammatic-composition]]) and $R^\Lambda_\alpha$ for
the standard cyclotomic quotient of
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]] (monic first-strand
relations $x_1^{\lambda_{i_1}}e(\nu)=0$).

**The specialization dictionary.** Put $y_r:=x_r$ and $\psi_r:=-\tau_r$. With
these normalizations, the relations (1.6)–(1.15) of the source hold in
$R^\Lambda_\alpha$, and conversely the quotient presented by those relations
is the same algebra; in other words $R^\Lambda_\alpha$ is the sign-modified
cyclotomic Khovanov–Lauda algebra of the source for the cyclic quiver of
quantum characteristic $e$. The verification of the dictionary is elementary
and is recorded here so that no hidden convention is imported:

1. **(Q1)–(Q4).** Non-adjacent pairs have $a_{ij}=0$ and
   $Q^{\mathrm A}_{ij}=1$, homogeneous of degree $0$. For an adjacent pair
   $(i,i+1)$ with $e\ge3$ one has $b_{ij}=a_{ij}=-1$, and $v-u$ is homogeneous
   of degree $2=-2b_{ij}$ with nonzero extremal coefficients of
   $u^{-a_{ij}}=u$ and $v^{-a_{ji}}=v$; the opposite orientation is the
   transpose, so (Q2) is built into the two formulae. For $e=2$ the pair
   $\{0,1\}$ has $a_{01}=a_{10}=-2$ and $b_{01}=-2$, and $-(u-v)^2$ is
   symmetric, homogeneous of degree $4=-2b_{01}$, with top coefficient $-1\ne0$.
2. **Dot sliding.** Relation (1.8) comes from $\tau_re(i)=e(s_ri)\tau_r$;
   relations (1.12)–(1.13) reduce to the dot-sliding constants
   $\tau_ax_a-x_{a+1}\tau_a=e(\nu)$ and
   $\tau_ax_{a+1}-x_a\tau_a=-e(\nu)$ on equal colours, whose sign changes to
   the source's constants $+1$ under $\psi=-\tau$.
3. **Quadratic and braid relations.** Relation (1.14): equal colours give
   $\tau^2=Q_{ii}=0$; non-adjacent colours give $\tau^2=1=e(i)$; a forward
   arrow gives $\tau^2=v-u$, evaluated at $(y_r,y_{r+1})$ as
   $y_{r+1}-y_r$; a backward arrow gives $y_r-y_{r+1}$; the $e=2$ double edge
   gives $(y_{r+1}-y_r)(y_r-y_{r+1})$. Relation (1.15): the divided-difference
   numerator
   $\bigl[Q^{\mathrm A}(x_a,x_{a+1})-Q^{\mathrm A}(x_{a+2},x_{a+1})\bigr]/(x_{a+2}-x_a)$
   equals $\pm1$ in the two single-edge cases with $i_{r+2}=i_r$, equals
   $y_r+y_{r+2}-2y_{r+1}$ in the $e=2$ double-edge case, and vanishes
   otherwise; the global sign $\psi=-\tau$ matches the source's three cases.
   The product order is explicit: the source difference is
   $\psi_r\psi_{r+1}\psi_r-\psi_{r+1}\psi_r\psi_{r+1}$, which under
   $\psi=-\tau$ equals the native reversed-word difference
   $\tau_{r+1}\tau_r\tau_{r+1}-\tau_r\tau_{r+1}\tau_r$; for
   $Q=-(u-v)^2$ the displayed quotient is $u+w-2v$. Thus no braid-order sign
   is suppressed, also in characteristic two.

Degrees of products are read on the successive permuted colour pairs as in
[[def-klr-grading-and-diagrammatic-composition]]. This definition introduces
no new basis, trace or primitive-block assertion, and uses no choice
principle.
