---
id: def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks
kind: definition
title: "Residue-sequence idempotents and cyclotomic Hecke blocks"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 30
deps: [def-affine-and-cyclotomic-type-a-hecke-algebras,
       def-cyclotomic-hecke-central-content-sector-notation,
       lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors,
       thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks,
       lem-cyclotomic-hecke-algebra-basis-and-dimension,
       prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras,
       def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents,
       thm-hecke-jucys-murphy-action-is-dominance-triangular]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Brundan and Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov–Lauda algebras, arXiv:0808.2032v3, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. AMS 47 (2010) 419–481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Sections 2.7–2.8: Definition 2.7 and Theorem 2.8 with Corollaries 2.9–2.10 (pp. 12–13); Section 2.11 Definition 2.14 (affine KLR), pp. 22–23."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (AMS University Lecture Series 15, 1999), 79 pages"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapters 1–5, printed pp. 1–65: generic Hecke algebra, cellular and Murphy bases, Jucys–Murphy elements, decomposition matrices; the manuscript treats the finite type-A Hecke algebra (level one), not the affine/cyclotomic or KLR side."
---

## Definition

Work in the charged finite-$e$ field conventions of
[[def-affine-and-cyclotomic-type-a-hecke-algebras]]. By
[[lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors]],
$H^\Lambda_d$ is finite-dimensional and each minimal polynomial of the
polynomial generator $z_r=X_r$ (nondegenerate normalization) respectively
$x_r$ (degenerate normalization) splits over the residues $c_i=q_H^i$
respectively $i\cdot1_F$.

**Residue-sequence idempotents.** Let $\varepsilon_r(i)$ be the canonical CRT
primary idempotent of that generator at the spectral value $c_i$ associated with residue label $i$ (zero when that value is
absent), and put
$$e(\nu)=\prod_{r=1}^{d}\varepsilon_r(\nu_r)$$
for a residue sequence $\nu=(\nu_1,\dots,\nu_d)\in(\mathbb Z/e\mathbb Z)^d$. On
every finite $H$-module the element $e(\nu)$ projects onto the joint
generalized residue space, and these mutually orthogonal idempotents sum to
$1$. At content $\alpha$ put
$$e_\alpha=\sum_{\nu\in I_\alpha}e(\nu),$$
the sum over residue sequences of content $\alpha$; it is central, and
$H^\Lambda_d$ is the direct sum of its central ideals
$$H^\Lambda_\alpha=e_\alpha H^\Lambda_d=e_\alpha H^\Lambda_d\,e_\alpha.$$
By
[[thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks]],
every nonzero $e_\alpha$ is primitive, so every nonzero $H^\Lambda_\alpha$ is
an actual block
([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]);
this block assertion is proved there, not retained as an unused citation.
The algebra basis and dimension convention is that of
[[lem-cyclotomic-hecke-algebra-basis-and-dimension]].

**Level one.** At level one, $\Lambda=\Lambda_j$, the polynomial generators
correspond under the explicit finite-Hecke inverse of
[[prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras]] to
$$X_r=q_H^j\bigl(1+(q_H-1)L_r\bigr)\quad\text{(nondegenerate)},\qquad x_r=j+L_r\quad\text{(degenerate)},$$
where $L_r$ is the ordinary additive Jucys–Murphy element. Thus on a standard
tableau node of content $m$ their eigenvalues are $q_H^{j+m}$ respectively
$j+m$, while $L_r$ itself has additive $q$-content $[m]_{q_H}$. The nonzero
joint projectors are precisely the residue words of standard tableaux
([[thm-hecke-jucys-murphy-action-is-dominance-triangular]]), and grouping
those words by content gives the block labels.

**Boundary conventions.** At rank zero the empty projector is $1$ and the
unique block is $F$; at level zero and positive rank all projectors and blocks
are zero. The projection, centrality, and block-decomposition assertions
recorded here are exactly the proved content-sector statements of the linked
suppliers; this definition introduces no new primitive-block classification
of its own. It uses no choice principle: all spectra, projectors, and sums are
finite.
