---
id: def-cuspidal-automorphic-representation-over-function-field
kind: definition
title: "Cuspidal automorphic representation of GL_r over a function field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-global-field
  - def-adele-ring-of-a-global-field
  - thm-global-field-adeles-and-ideles-locally-compact
  - cor-existence-of-left-and-right-haar-measures
  - thm-global-field-unipotent-adelic-quotients-are-compact
  - def-axiom-of-choice
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: >-
  AC supplies the Tychonoff compactness used by the adele-local-compactness
  supplier; Countable Choice supplies its local compact-open valuation-ring input. Both
  hypotheses are retained in this function-field automorphic convention.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Introduction, printed pp. 2–3: the set A_r(F) and its finite-order central-character condition."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§1.1, cuspidal automorphic forms and the GL_r Hecke action."
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice and the Axiom of Countable Choice. Let $X/\mathbb F_q$ be a smooth projective geometrically connected curve, let $F=\mathbb F_q(X)$ be its function field, let $\mathbb A_F$ be the restricted product of the completions of $F$ with respect to their valuation rings at all places, and let $G_r=\mathrm{GL}_r$. Let $Z_r$ be the scalar-matrix center of $G_r$. A smooth automorphic form is a locally constant function $\phi:G_r(F)\backslash G_r(\mathbb A_F)\to\mathbb C$. It has central character $\omega$ if $\phi(zg)=\omega(z)\phi(g)$ for $z\in Z_r(\mathbb A_F)$. A standard proper parabolic subgroup $P_0$ of $G_r$ consists of block upper-triangular matrices with at least two diagonal blocks; its unipotent radical $N_0$ consists of the matrices whose diagonal blocks are identities and whose blocks below the diagonal are zero. For a conjugate $P=gP_0g^{-1}$, its unipotent radical is $N=gN_0g^{-1}$. The constant term is $\phi_P(g)=\int_{N(F)\backslash N(\mathbb A_F)}\phi(ng)\,dn$, using the invariant quotient measure on the compact quotient $N(F)\backslash N(\mathbb A_F)$. A **cuspidal automorphic representation of $G_r$ over $F$** is an irreducible constituent of the right-translation action $(g_0\phi)(g)=\phi(gg_0)$ on automorphic forms that are square-integrable modulo $Z_r(\mathbb A_F)$, have unitary central character, and satisfy $\phi_P(g)=0$ for every proper $P$ and every $g$. Write $\mathcal A_r(F)$ for the equivalence classes whose central character has finite order.

At a place $v$ where the local component $\pi_v$ has a nonzero $\mathrm{GL}_r(\mathcal O_v)$-fixed vector, call $\pi_v$ **unramified**. Under the normalized Satake convention, its semisimple Satake parameter has eigenvalues $z_1(\pi_v),\ldots,z_r(\pi_v)$; the local standard factor is $L_v(\pi_v,T)=\prod_{i=1}^r(1-z_i(\pi_v)T)^{-1}$.

For $r=1$, this definition specializes to continuous finite-order characters of $F^\times\backslash\mathbb A_F^\times$: there is no proper parabolic subgroup, so the cuspidality condition is vacuous. At an unramified place, the rank-one Satake parameter is $z_1(\pi_v)=\pi_v(\varpi_v)$ for any local uniformizer $\varpi_v$.

## Definition references

[[def-global-field|Function-field branch and exact constant field]]

[[def-adele-ring-of-a-global-field|Restricted-product topology on the adeles]]

[[thm-global-field-adeles-and-ideles-locally-compact|Locally compact Hausdorff adelic group]]

[Laurent Lafforgue, Introduction](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §1.1](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)
