---
id: def-affine-and-cyclotomic-type-a-hecke-algebras
kind: definition
title: "Affine and cyclotomic type-A Hecke algebras"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 12
deps: [def-cyclic-affine-type-a-cartan-datum, def-generic-type-a-hecke-algebra,
       def-quantum-characteristic-of-an-invertible-hecke-parameter,
       def-type-a-affine-presentations-and-charged-cyclotomic-quotients,
       lem-degenerate-affine-hecke-ordered-monomials-form-a-basis,
       prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras]
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
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3 (published in Math. Ann.), complete 51-page article"
      url: "https://arxiv.org/pdf/1304.0906"
      locator: "Introduction: Theorem A and Corollary 1.1, pp. 2–4; Section 2.2 Definition 2.2 and Remark 2.3 (cyclotomic Hecke algebras and degenerate specialization); Sections 2.5–2.6, Theorem 2.8, Definition 2.10, Remark 2.13, Theorem 2.14, Corollary 2.15, pp. 11–16; Section 4.1 Definition 4.1 (e-idempotent subrings)."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. AMS 47 (2010) 419–481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Sections 2.7–2.8: Definition 2.7 and Theorem 2.8 with Corollaries 2.9–2.10 (pp. 12–13); Section 2.11 Definition 2.14 (affine KLR), pp. 22–23."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (AMS University Lecture Series 15, 1999), 79 pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapters 1–5, printed pp. 1–65: generic Hecke algebra, cellular and Murphy bases, Jucys–Murphy elements, decomposition matrices; the manuscript treats the finite type-A Hecke algebra (level one), not the affine/cyclotomic or KLR side."
---

## Definition

Let $F$ be a field and $q\in F^{\times}$ with **finite** quantum characteristic
$e=e(F,q)$, $2\le e<\infty$
([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]), let
$I=\mathbb Z/e\mathbb Z$ be the residue set with integer residue labels
$0,1,\dots,e-1$, and use the cyclic affine type-A Cartan datum with dominant
weights $P^+$ and pairing $(\Lambda,\alpha_i)$
([[def-cyclic-affine-type-a-cartan-datum]]). In the nondegenerate branch the
distinct spectral values of the labels are $q^i$, while in the degenerate
branch they are $i\cdot1_F$ (here $e=\operatorname{char}F$). Fix
$\Lambda\in P^+$ of level $\ell=\sum_{i\in I}(\Lambda,\alpha_i)$ and put
$\lambda_i:=(\Lambda,\alpha_i)\ge0$.

**(NG) Nondegenerate case $q\ne1$.** The **affine Hecke algebra of type
$A_{d-1}$** at parameter $q$ is the unital $F$-algebra $H_d$ with generators
$X_1^{\pm1},\dots,X_d^{\pm1}$ and $T_1,\dots,T_{d-1}$ subject to the relations
$$X_rX_s=X_sX_r,\qquad X_rX_r^{-1}=1,$$
$$T_rX_rT_r=qX_{r+1},\qquad T_rX_s=X_sT_r\quad(s\notin\{r,r+1\}),$$
$$T_r^2=(q-1)T_r+q,\qquad T_rT_{r+1}T_r=T_{r+1}T_rT_{r+1},\qquad T_rT_s=T_sT_r\quad(|r-s|>1).$$
The **cyclotomic Hecke algebra** is
$$H^\Lambda_d:=H_d\Big/\bigl\langle\textstyle\prod_{i\in I}(X_1-q^i)^{\lambda_i}\bigr\rangle .$$

**(DG) Degenerate case $q=1$** (which forces $\operatorname{char}F=e>0$). The
**degenerate affine Hecke algebra** $H_d$ is the unital $F$-algebra with
generators $x_1,\dots,x_d$ and $s_1,\dots,s_{d-1}$ subject to the relations
$$x_rx_s=x_sx_r,\qquad s_rx_{r+1}=x_rs_r+1,\qquad s_rx_s=x_ss_r\quad(s\notin\{r,r+1\}),$$
$$s_r^2=1,\qquad s_rs_{r+1}s_r=s_{r+1}s_rs_{r+1},\qquad s_rs_t=s_ts_r\quad(|r-t|>1);$$
its ordered monomials $x_1^{m_1}\cdots x_d^{m_d}w$ form an $F$-basis by
[[lem-degenerate-affine-hecke-ordered-monomials-form-a-basis]]. The
**degenerate cyclotomic Hecke algebra** is
$$H^\Lambda_d:=H_d\Big/\bigl\langle\textstyle\prod_{i\in I}(x_1-i)^{\lambda_i}\bigr\rangle .$$

**Conventions and boundary.** Put $H^\Lambda_0=F$; the cyclotomic polynomial is
imposed on the FIRST polynomial generator, and $T_r$ acts on positions
$r,r+1$. The Hecke parameter is the one of
[[def-generic-type-a-hecke-algebra]] ($T_i^2=(q-1)T_i+q$). At level one
$\Lambda=\Lambda_j$, the algebra $H^\Lambda_d$ is the finite type-A Hecke
algebra $H_{F,q}(S_d)$ if $q\ne1$ and the group algebra $FS_d$ if $q=1$
([[prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras]]).
Only finite $e$ is treated: the source's $e=0$ branches ($q$ not a root of
unity, and the characteristic-zero degeneration, whose quiver is $A_\infty$)
are outside this page's cyclic scope and are recorded as a deferred boundary in
the batch notes. These presentations and the charged quotients are the ones of
[[def-type-a-affine-presentations-and-charged-cyclotomic-quotients]]; no
embedding of the label set $I$ into $F$ is claimed in the nondegenerate branch,
and no choice principle is used.
