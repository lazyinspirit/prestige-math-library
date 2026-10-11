---
id: cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading
kind: corollary
title: "Cyclotomic Hecke blocks inherit $\\mathbb Z$-gradings"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 32
deps: [thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism,
       def-klr-grading-and-diagrammatic-composition,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]
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
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov–Lauda algebras, arXiv:0808.2032v3, Invent. Math. 178 (2009) 451–484 (complete 32-page article)"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Introduction pp. 1–5 (quiver, (1.1)–(1.4), Main Theorem (1.6)–(1.15), Corollaries 1–2); Section 2 (2.1)–(2.7), Lemmas 2.1–2.2; Sections 3.1–3.5 pp. 7–19; Sections 4.1–4.5 pp. 19–27; Section 6 pp. 29–31."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883–1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 2.2 relations (2.9)–(2.12) and the grading statement after (2.12); Sections 4.1–4.3, Theorem 4.1 and Remark 4.2, pp. 30–32."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. AMS 47 (2010) 419–481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Sections 2.7–2.8: Definition 2.7 and Theorem 2.8 with Corollaries 2.9–2.10 (pp. 12–13); Section 2.11 Definition 2.14 (affine KLR), pp. 22–23."
---

## Statement

In the situation of
[[thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism]], each fixed choice
of admissible local normalising series transports the KLR homogeneous
decomposition to a $\mathbb Z$-grading on $H^\Lambda_\alpha$. This is the
unique grading for those fixed generator images with $\deg e(i)=0$,
$\deg y_r=2$ and
$\deg\psi_re(i)=-a_{i_r,i_{r+1}}$
([[def-klr-grading-and-diagrammatic-composition]]). Different admissible
series choices give graded-isomorphic transported algebras via
$\rho'\circ\rho^{-1}$; their underlying identity map need not be graded. The
grading can be nontrivial, but it may be trivial on an individual block,
including the one-dimensional level-one rank-two $e=3$ blocks. The ordinary
Hecke presentation always has the trivial assignment of degree zero to all
its generators; the transported grading is generally expressed using the
nilpotent dots and local crossings, and ordinary Hecke generators can be sums
of different homogeneous pieces and may be homogeneous in special cases. No
claim forbids the degree-zero assignment or asserts that every block grading
is nontrivial.

## Facts & Assumptions

**Given:** The blockwise Hecke–KLR isomorphism [F1], the KLR grading conventions [F2], the cyclotomic quotient conventions [F3], and the type-A specialization conventions [F4].

[F1] For every content $\alpha$ with $e_\alpha\ne0$ there are mutually inverse $F$-algebra isomorphisms $\rho\colon R^\Lambda_\alpha\to H^\Lambda_\alpha$ and $\sigma$, normalized by $\rho(e(i))=e(i)$ and the dot images $1-q^{-i_r}X_r$ or $x_r-i_r$ ([[thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism]]).

[F2] The KLR algebra $R^\Lambda_\alpha$ is graded by $\deg e(i)=0$, $\deg y_r=2$ and $\deg\psi_re(i)=-a_{i_r,i_{r+1}}$, with homogeneous local relations ([[def-klr-grading-and-diagrammatic-composition]], [[def-cyclotomic-klr-quotient-at-a-dominant-weight]]).

[F3] The charged type-A specialization and its presentation conventions ([[def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras]]).

## Proof

**Proof technique:** direct.

**Given:** The field $F$, the finite quantum characteristic $e\ge2$, the

dominant weight $\Lambda$, and the suppliers of [F1]–[F3].

1.1 Transport of the grading. Fix a choice of admissible local normalising series, hence the isomorphism $\rho$ of [F1]. Declare each image of a homogeneous KLR generator to be homogeneous of the same degree; the images generate $H^\Lambda_\alpha$ and the KLR relations of [F2] are homogeneous, so the resulting degree assignment is well defined. Products retain degree addition because $\rho$ is an algebra map, so the degree summands are exactly the transported homogeneous summands. Since the generator images span the algebra, their assigned degrees determine every degree summand and give uniqueness of the grading for that fixed choice, with $\deg e(i)=0$, $\deg y_r=2$ and $\deg\psi_re(i)=-a_{i_r,i_{r+1}}$. [F1, F2, F3, algebra]

2.1 Independence of the series choice. If $\rho'$ is the isomorphism attached to another admissible series, then $\rho'\circ\rho^{-1}$ sends each homogeneous native generator image of the first choice to the corresponding new image and hence is graded by construction; the two transported algebras are graded-isomorphic, while the underlying identity map on $H^\Lambda_\alpha$ need not be graded because the two series differ by units that need not be homogeneous of degree zero. [F1, F2, step 1.1]

2.2 Triviality is not excluded. Assigning degree zero to every ordinary Hecke generator makes all defining relations homogeneous, so the degree-zero assignment is a legitimate grading of the ordinary Hecke presentation and no impossibility statement is asserted. A one-dimensional sector has only degree zero, because its unit has degree zero and it equals $F$; in particular the one-dimensional level-one rank-two $e=3$ blocks are trivially graded. [F1, step 1.1]

2.3 A concrete nontrivial witness. Consider level one, $e=2$, rank two. Of the four colour words only $(0,1)$ survives: the first-strand exponent zero kills $(1,0)$, and on $(0,0)$ the equal-colour mixed identities give $\psi_1y_2=1$ together with $\psi_1^2=0$, hence $\psi_1=0$ after left multiplication by $\psi_1$, giving $1=0$; so the equal-colour sector is zero, with $y_1=0$ and the crossing zero. The quadratic double-edge relation gives $y_2^2=0$. Conversely $e(0,1)=1$, $y_2=t$, $y_1=\psi_1=0$ in $F[t]/(t^2)$ satisfy all rank-two relations, so that sector is $F[t]/(t^2)$ with $\deg t=2$, and its Brundan–Kleshchev image supplies an actual nontrivial transported grading, including in the characteristic-two degeneration. This is a witness that the construction can be nontrivial, not a claim about all sectors. [F1, F2, step 1.1]

3.1 Conclusion. Each fixed admissible series choice transports the KLR homogeneous decomposition to a $\mathbb Z$-grading of $H^\Lambda_\alpha$, unique for the induced generator degrees; different choices give graded-isomorphic transported algebras; and the grading may be nontrivial on some blocks while trivial on others, with the ordinary presentation retaining its degree-zero assignment. [F1, step 1.1, step 2.1, step 2.3] ∎

## Remarks

The corollary records exactly what the blockwise isomorphism yields: a transported grading attached to a chosen normalising series, not a canonical intrinsic grading of the Hecke presentation, and not a claim of nontriviality on every block. No choice principle is used: the series choices and the gradings are explicit and finite.
