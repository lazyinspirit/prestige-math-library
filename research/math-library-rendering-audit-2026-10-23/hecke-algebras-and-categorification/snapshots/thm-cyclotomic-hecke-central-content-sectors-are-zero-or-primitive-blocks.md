---
id: thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks
kind: theorem
title: "Central content sectors are zero or primitive cyclotomic Hecke blocks"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 29
deps: [def-cyclotomic-hecke-central-content-sector-notation,
       lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors,
       lem-degenerate-cyclotomic-hecke-center-is-the-symmetric-polynomial-image,
       lem-symmetric-polynomial-centers-have-primitive-split-content-idempotents,
       thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-connected,
       lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage,
       lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular,
       thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
       lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage,
       def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451"
      locator: "Actually read full PDF pp. 1–20; relevant Prop. 2.3/2.9/Theorem 2.11 and §3. Local proof bodies and Q/J suppliers replace citation-only use."
    - title: "Jonathan Brundan, Centers of degenerate cyclotomic Hecke algebras and parabolic category O, math/0607717v3"
      url: "https://arxiv.org/pdf/math/0607717"
      locator: "Actually read full center proof §2–§3 PDF pp. 4–12: colored-cycle centralizer, graded orbit sums and triangular center lifts; local proof fills the power expansion."
    - title: "Matthew Fayers, Core blocks of Ariki–Koike algebras, author manuscript, J. Algebraic Combin. 26 (2007), 47–81"
      url: "https://webspace.maths.qmul.ac.uk/m.fayers/papers/core.pdf"
      locator: "Actually read author PDF pp. 2–24; tight lemma Prop. 2.2/2.3 pp. 12–15, binary switches Prop. 2.4 pp. 15–16, core proof Theorem 3.1/Prop. 3.7 pp. 19–24."
    - title: "Brundan–Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov–Lauda algebras, arXiv:0808.2032v4"
      url: "https://arxiv.org/pdf/0808.2032v4"
      locator: "Parent early finite/CRT/central-sector construction and independent presentation-sector inputs; the primitive conclusion is proved by the local degenerate and charged routes."
---

## Statement

Let $F$ be any field and let $q_H\in F^\times$ have finite quantum
characteristic $e\ge2$. Use the standard cyclotomic type-A Hecke presentation
with level $\ell=\sum_i\lambda_i\ge0$ imposed on the first polynomial
variable, with $\lambda_i\ge0$ and $I=\mathbb Z/e\mathbb Z$. For $q_H\ne1$ the
roots are $q_H^i$ and $q_H$ has order $e$; for $q_H=1$ one has
$\operatorname{char}F=e>0$ and the roots are the prime-field residues $i$.
Using the central CRT notation of
[[def-cyclotomic-hecke-central-content-sector-notation]] and
[[lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors]], for
every content $\alpha$ of rank $d$ the element
$e_\alpha=\sum_{\text{word content }\alpha}e(\text{word})$ is either zero or a
primitive central idempotent. The nonzero $e_\alpha$ are exactly all
primitive central idempotents, so $H_d^\Lambda=\bigoplus_\alpha
e_\alpha H_d^\Lambda$ is precisely the block decomposition. At $d=0$ the
unique sector is $F$, regardless of level; at $d>0$, $\ell=0$ the algebra is
zero. This is an arbitrary-level result over the original field in both
branches.

## Facts & Assumptions

**Given:** The central content-sector notation and CRT [F1], the block convention [F2], the degenerate center identification [F3], the primitive split content idempotents of symmetric polynomial centers [F4], the Murphy cellular basis and finite cellular heads [F5]–[F6], the Jucys–Murphy content triangularity [F7], the fixed-content connectivity theorem [F8], and the Jantzen/block linkage lemma [F9].

[F1] The pairwise-orthogonal joint residue idempotents $e(\mathrm{word})$ sum to $1$, the sums $e_\alpha$ are central and orthogonal, and the regular/module CRT interpretation holds; no primitivity is asserted ([[def-cyclotomic-hecke-central-content-sector-notation]], [[lem-cyclotomic-hecke-polynomial-spectra-and-central-content-sectors]]).

[F2] Blocks are the primitive-central-idempotent blocks ([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]).

[F3] In the degenerate branch $q_H=1$ the center is the image of the symmetric polynomials ([[lem-degenerate-cyclotomic-hecke-center-is-the-symmetric-polynomial-image]]).

[F4] Symmetric polynomial centers have primitive split content idempotents, applying to the early CRT projectors without a field extension or a power-sum generation assertion ([[lem-symmetric-polynomial-centers-have-primitive-split-content-idempotents]]).

[F5] The arbitrary-level Murphy elements are a cellular basis with the higher two-sided ideals ([[thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular]]), so the nonzero cellular heads $D^\lambda$ are all the simple modules ([[lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage]]).

[F6] Every word on $S^\lambda$, and hence on its quotient $D^\lambda$, is the node content $C(\lambda)$ ([[lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular]]).

[F7] Multipartitions have equal node-residue content exactly when they are $J$-connected ([[thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-connected]]).

[F8] $J$-connectivity is equivalent to sharing a Hecke block ([[lem-cyclotomic-jantzen-equivalence-is-schur-and-hecke-block-linkage]]).

## Proof

**Proof technique:** direct.

**Given:** The field $F$, the finite quantum characteristic $e$, the

multiplicities $\lambda_i$, and the suppliers of [F1]–[F8].

1.1 Base cases. At rank $0$ the algebra is $F$, the empty-word projector is $1$, and this is its unique primitive central idempotent. At positive rank and level $0$ the defining polynomial is $1$, so the algebra is $0$ and every content sector is $0$, with no nonzero blocks. Hence assume rank $d\ge1$ and level $\ell\ge1$. [F1]

1.2 The degenerate branch. In the branch $q_H=1$ necessarily $\operatorname{char}F=e>0$. The center is the full symmetric-polynomial image over this $F$ by [F3], and [F4] applies to the early CRT projectors and proves that their content sums are zero or primitive. This uses neither a field extension nor a power-sum generation assertion. [F1, F3, F4]

1.3 The nondegenerate branch: labels of sectors. In the branch $q_H\ne1$ choose a charge list $c_1,\dots,c_\ell$ repeating each $i$ exactly $\lambda_i$ times, so $Q_a=q_H^{c_a}$ and the first polynomial is unchanged. The arbitrary-level Murphy cellular basis and the finite cellular head lemma [F5] supply all simple $H_d^\Lambda$-modules as nonzero Specht quotients $D^\lambda$, and the content-triangular JM action [F6] says every word on $S^\lambda$, hence on $D^\lambda$, has the node content $C(\lambda)$. Thus a simple module lying in a nonzero sector $e_\alpha$ has a label $\lambda$ with $C(\lambda)=\alpha$. [F1, F5, F6]

2.1 Primitivity of the nonzero sectors. Any two simple modules in the sector $e_\alpha$ have labels with equal content, so [F7] connects the labels by integer Jantzen edges and [F8] transfers this to a common Hecke block. If $e_\alpha$ decomposed into two nonzero orthogonal central idempotents $u,v$, the nonzero finite algebras $uH_d^\Lambda$ and $vH_d^\Lambda$ would each have a simple module, obtained from a proper right ideal of maximal dimension. Those simple modules cannot lie in one block, because the central idempotent $u$ acts as the identity on the first and as zero on the second, and all modules and extensions split by $u$. This contradicts the one-block assertion, so $e_\alpha$ is primitive. [F1, F7, F8, step 1.3]

3.1 Every block is a content sector. In either branch let $b$ be a primitive central idempotent and write $b=\sum_\alpha be_\alpha$. The terms are central orthogonal idempotents, so precisely one is nonzero and $b=be_\alpha$; primitivity of the nonzero $e_\alpha$ from step 1.2 or step 2.1 gives $b=e_\alpha$. Hence the nonzero content sums are exactly all primitive central idempotents and the decomposition $H_d^\Lambda=\bigoplus_\alpha e_\alpha H_d^\Lambda$ is precisely the block decomposition [F2]. All sums are finite, the field characteristic never reduces an integer $K_0$ adjacency, and no affine-block classification or citation-only center theorem is consumed. [F1, F2, step 1.2, step 2.1] ∎

## Remarks

The theorem identifies the primitive central idempotents of the arbitrary-level cyclotomic Hecke algebra with the nonzero content sectors, in both the degenerate and nondegenerate branches and over the original field. The two branches are routed through the symmetric-polynomial center and the content-classification theorem respectively; no primitive-block theorem is assumed. No choice principle is used: all sums, sectors and simple selections are finite.
