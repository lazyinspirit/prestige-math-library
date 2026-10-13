---
id: ex-degenerate-level-one-hecke-klr-map-for-s3
kind: example
title: "The degenerate level-one Hecke–KLR map for S_3"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 31
deps: [def-affine-and-cyclotomic-type-a-hecke-algebras,
       prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras,
       def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks,
       lem-cyclotomic-hecke-intertwiners-and-local-power-series,
       lem-hecke-intertwiners-produce-local-klr-generators,
       thm-hecke-jucys-murphy-action-is-dominance-triangular]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov–Lauda algebras, arXiv:0808.2032v3, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906v3 (published in Math. Ann.), complete 51-page article"
      url: "https://arxiv.org/pdf/1304.0906"
      locator: "Introduction: Theorem A and Corollary 1.1, pp. 2–4; Section 2.2 Definition 2.2 and Remark 2.3; Sections 2.5–2.6, Theorem 2.8, Definition 2.10, Remark 2.13, Theorem 2.14, Corollary 2.15, pp. 11–16; Section 4.1 Definition 4.1."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. AMS 47 (2010) 419–481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Sections 2.7–2.8: Definition 2.7 and Theorem 2.8 with Corollaries 2.9–2.10 (pp. 12–13); Section 2.11 Definition 2.14 (affine KLR), pp. 22–23."
---

## Example

Work over $F=\mathbb F_3$ with $q=1$ (so $e=3$), $\Lambda=\Lambda_0$ at level
one and $d=3$: then $H^\Lambda_3\cong\mathbb F_3S_3$
([[prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras]],
[[def-affine-and-cyclotomic-type-a-hecke-algebras]]) and exactly one block is
nonzero, namely $\alpha=\alpha_0+\alpha_1+\alpha_2$ with $e_\alpha=1$
([[def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks]]). The
residue sequences realised by standard tableaux all have residue multiset
$\{0,1,2\}$. The degenerate KLR generators are the elements
$y_r=\sum_i(x_r-i_r)e(i)$ with $x_r$ the Jucys–Murphy elements of
$\mathbb F_3S_3$ (so $x_1=0$, $x_2=(12)$, $x_3=(13)+(23)$) and
$\psi_r=\sum_i\varphi_rq_r(i)^{-1}e(i)$ with
$\varphi_r=s_r+p_r(i)$ and
$p_r(i)=(i_r-i_{r+1}+y_r-y_{r+1})^{-1}$ on unequal components
([[lem-cyclotomic-hecke-intertwiners-and-local-power-series]],
[[lem-hecke-intertwiners-produce-local-klr-generators]]). In this block the
mixed relations $\psi_1y_2e(i)=y_1\psi_1e(i)+e(i)$ for $i_1=i_2$ and
$\psi_1y_2e(i)=y_1\psi_1e(i)$ for $i_1\ne i_2$, and the quadratic relation
$\psi_1^2e(i)=(y_2-y_1)e(i)$ for $i_1\to i_2$, are explicit identities in
the six-dimensional algebra $\mathbb F_3S_3$.

## Verification

**Proof technique:** direct.

**Given:** The group algebra $\mathbb F_3S_3$ with the transpositions

$c=(12)$, $s=(23)$, $a=(13)$, the additive Jucys–Murphy elements

$x_1=0$, $x_2=c$, $x_3=(13)+(23)$, and the level-one conventions of the

Statement.

1.1 The two residue projectors and the $y$-values. Put $C=c+a+s$. Group multiplication in $\mathbb F_3S_3$ gives $C^2=0$, because the three squares contribute $3=0$ and the six cross products contribute three copies of each 3-cycle; and $Cc=Cs=1+(123)+(132)$. Put $e_+=(1+c)/2$ and $e_-=(1-c)/2$; since $c^2=1$ and $2$ is invertible in $\mathbb F_3$, these are idempotents, and they are the actual joint CRT projectors $e(0,1,2)$ and $e(0,2,1)$ of the two standard residue words. With $x_3=C-c$ one computes $y_1=y_2=0$ and $y_3=C$: indeed $(c-1)e_+=(c-1)(1+c)/2=0$, $(c-2)e_-=(c+1)(1-c)/2=0$, and $x_3-i_3$ equals $C$ on both projectors. All other residue words vanish, and both projectors are nonzero by the group basis. [given, algebra]

1.2 There is exactly one block. The full center has basis $1$, $C$, $1+(123)+(132)$ and its augmentation ideal is spanned by the last two elements, with $(1+(123)+(132))^2=0$ and $C(1+(123)+(132))=0$; hence the augmentation ideal is square-zero and contains no nonzero idempotent. Therefore the only central idempotents are $0$ and $1$, so $\mathbb F_3S_3$ is a single block and the two projectors combine as $e_\alpha=e_++e_-=1$. [given, algebra]

2.1 The $\psi$-generators and the explicit identities. For the explicit source choice of the power series, $\psi_1=0$. On $e_+$ one has $p_2=-1+C$ and $q_2=-1$; on $e_-$ one has $p_2=1+C$ and $q_2=1$. Thus $\psi_2e_+=(1-s-C)e_+$ and $\psi_2e_-=(s+1+C)e_-$. Direct group multiplication using $c^2=s^2=1$ and $csc=scs$ gives $\psi_2e_+=e_-\psi_2$, $\psi_2e_-=e_+\psi_2$, $\psi_2^2e_+=Ce_+$, $\psi_2^2e_-=-Ce_-$, and $C\psi_2=\psi_2C=0$. These are exactly the claimed mixed and quadratic identities with $y_3=C$ and $y_2=0$; the first-crossing mixed identities vanish on every surviving unequal-colour word, equal-first-colour words are absent, so the universal equal-colour formula also holds. The six group elements $1,c,s,cs,sc,csc$ give dimension $6$, with no primitive-block citation or Hecke-basis dimension loop hidden. [step 1.1, step 1.2, algebra] ∎

