---
id: ex-level-one-e2-hecke-klr-block
kind: example
title: "The level-one e=2, one-strand Hecke and KLR blocks are both scalar"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-category-o-klr-and-hecke-route-conventions
  - def-affine-and-cyclotomic-type-a-hecke-algebras
  - def-nondegenerate-root-of-unity-level-one-hecke-regime
  - def-cyclic-affine-type-a-cartan-datum
  - def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum
  - def-cyclotomic-klr-quotient-at-a-dominant-weight
  - def-klr-grading-and-diagrammatic-composition
  - def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks
  - thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov–Lauda algebras, Invent. Math. 178 (2009), complete 32-page preprint"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction, printed pp. 1–5, and §§2–4: residue blocks and the blockwise Hecke–KLR isomorphism."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, Bull. Amer. Math. Soc. 47 (2010), complete 66-page survey"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "§§2.7–2.11, printed pp. 12–23: cyclotomic Hecke blocks and KLR conventions."

---

## Statement

Take $F=\mathbb C$, Hecke parameter $\xi=-1$, quantum characteristic $e=2$,
level-one weight $\Lambda_0$, and content $\alpha_0$ of height one in the
cyclic type-$A$ datum. Then the cyclotomic Hecke block
$H^{\Lambda_0}_{\alpha_0}$ and the standard cyclotomic KLR algebra
$R^{\Lambda_0}(\alpha_0)$ are each isomorphic to $\mathbb C$, and the
Brundan–Kleshchev block isomorphism identifies them. The KLR algebra is
concentrated in degree zero. Its unique ungraded simple has the representative
concentrated in degree zero; its grading shifts give the other graded simple
representatives.

## Facts & Assumptions

**Given:** $F=\mathbb C$, $\xi=-1$, $e=2$, the charge-zero fundamental weight
$\Lambda_0$, height-one content $\alpha_0$, and the standard homogeneous
cyclotomic KLR quotient.

[F1] [[def-category-o-klr-and-hecke-route-conventions]]: the cyclic nondegenerate
route writes the Hecke parameter as $\xi\ne1$, uses finite $e\ge2$, and keeps
the grading variable $q$ independent of $\xi$.

[F2] [[def-nondegenerate-root-of-unity-level-one-hecke-regime]]: the
nondegenerate level-one branch has $\Lambda_0$ of charge zero and
$\langle h_i,\Lambda_0\rangle=\delta_{i,0}$; the grading variable is
independent of the Hecke parameter, which is written $\xi$ here and is the
letter $q$ in the affine presentation.

[F3] [[def-affine-and-cyclotomic-type-a-hecke-algebras]]: in the nondegenerate
branch the affine algebra has generators $X_r^{\pm1},T_r$ with the displayed
quadratic relation, and $H^\Lambda_d$ is its quotient by
$\prod_i(X_1-q^i)^{\langle h_i,\Lambda\rangle}$; at $d=1$ only $X_1^{\pm1}$
remain.

[F4] [[def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum]]: in
height one there is one residue idempotent $e(i)$, one dot $x_1$, and no
crossing generator; the idempotents sum to one and the dots commute.

[F5] [[def-cyclotomic-klr-quotient-at-a-dominant-weight]]: for the standard
homogeneous quotient the first-strand relation in color $i$ is
$x_1^{\langle h_i,\Lambda\rangle}e(i)=0$.

[F6] [[def-klr-grading-and-diagrammatic-composition]]: in the cyclic type-A
datum $\deg e(i)=0$ and $\deg x_1=2$.

[F7] [[def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks]]: $e(i)$
is the projector to residue sequence $i$, and the central content projector is
$e_\alpha=\sum_{i\in I_\alpha}e(i)$.

[F8] [[thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism]]: over any field,
finite quantum characteristic $e\ge2$ and nonzero content sector, the
corresponding cyclotomic Hecke and KLR blocks are isomorphic; the $q=1$ and
$q\ne1$ cases are proved separately.

## Proof

1.1 In $\mathbb C$, $\xi=-1$ has order two, so $e=2$ and $\xi\ne1$ is the nondegenerate branch [F1,F2]. By [F2], the $q$ in the cyclotomic presentation [F3] is $\xi=-1$. Since $\langle h_0,\Lambda_0\rangle=1$ and the other level-one pairing is zero, the height-one cyclotomic relation is $X_1-1=0$. At $d=1$ the only affine generators are $X_1^{\pm1}$ [F3], so both become $1$ in the quotient; the scalar map sending its unit to $1$ is inverse to the scalar inclusion, hence $H^{\Lambda_0}_1\cong\mathbb C$. The residue values $\xi^0=1$ and $\xi^1=-1$ are distinct; thus [F7] gives sole projector $e(0)=1$ and $e_{\alpha_0}=1\ne0$. [given, F1, F2, F3, F7, algebra]

1.2 Since $\alpha_0$ has height one, its only sequence is $(0)$; [F4] gives the idempotent $e(0)=1$, the dot $x_1$, and no crossing. The sole dot commutes with itself, so the presented algebra is $\mathbb C[x_1]e(0)$. The standard first-strand relation [F5] is $x_1e(0)=0$, and evaluation at zero maps $e(0)$ to $1$, so the quotient is nonzero and equals $\mathbb C e(0)\cong\mathbb C$. Its unit has degree zero and its dot is zero [F6], so the quotient is concentrated in degree zero. Every nonzero simple over this field algebra is one-dimensional because any nonzero vector spans a nonzero submodule; a graded simple is concentrated in one degree because the span of a homogeneous vector is a graded submodule. Thus the degree-zero representative and its grading shifts are exactly the graded simples. [given, F2, F4, F5, F6, algebra]

2.1 In this rank-one data, [F3] sets $X_1=1$ and the distinct spectral values $1,-1$ make [F7] give $e_{\alpha_0}=e(0)=1\ne0$. Also [F4] and [F5] give the nonzero quotient $\mathbb C e(0)$ at $\alpha_0$. Thus the hypotheses of [F8] hold over $\mathbb C$ with $e=2$, and its block isomorphism identifies the two scalar algebras. [given, F1, F2, F3, F4, F5, F7, F8, algebra] ∎
