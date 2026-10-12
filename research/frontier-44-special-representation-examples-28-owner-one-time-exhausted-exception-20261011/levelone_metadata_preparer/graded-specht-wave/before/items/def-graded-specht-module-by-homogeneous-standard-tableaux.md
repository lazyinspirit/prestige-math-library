---
id: def-graded-specht-module-by-homogeneous-standard-tableaux
kind: definition
title: "The graded Specht module by homogeneous standard tableaux"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 34
deps: [def-nondegenerate-root-of-unity-level-one-hecke-regime,
       def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
       def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras,
       def-klr-grading-and-diagrammatic-composition,
       cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading,
       def-young-tableau-standard-tableau-and-shape,
       def-removable-and-addable-nodes-of-a-partition,
       def-partition-young-diagram-and-conjugate-partition,
       lem-dj-bridge-sign-automorphism-and-star-dual,
       thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual,
       thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]
justified_by: [thm-graded-specht-module-has-homogeneous-tableau-basis]
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan, Alexander Kleshchev and Weiqiang Wang, Graded Specht modules, arXiv:0901.0218v3, J. reine angew. Math. 655 (2011) 61-87 (complete 23-page article)"
      url: "https://arxiv.org/pdf/0901.0218"
      locator: "Section 3.5, printed pp. 13-15: degree and codegree (3.1)-(3.6) and Lemmas 3.11-3.12; Section 4.1-4.3, printed pp. 15-21: the Specht module S(mu)=H_d^Lambda z_mu, the standard basis theorem and the vectors v_T. Complete passages read."
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 4.11, printed pp. 42-43: the degree (4.33) of a standard tableau; Section 4.1-4.5, printed pp. 30-34: cyclotomic quotient, Hecke block and the relations (4.10). Complete passages read."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page prepublication manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapters 2-5, printed pp. 1-65: the Murphy cellular basis of the finite type-A Hecke algebra and the cell/Specht modules with their standard bases."
verification:
  precheck: pass
---

## Definition

Work in the regime of
[[def-nondegenerate-root-of-unity-level-one-hecke-regime]]. Fix a partition
$\mu$, put $d=|\mu|$, $\alpha=\operatorname{cont}(\mu)$, and let $K(\mu)$ be
the $F$-span of the Murphy elements $m_{S,T}$ of
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]] with
$S,T$ standard tableaux of a multipartition strictly dominating $\mu$; by
`thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular` $K(\mu)$ is a
two-sided ideal of $H^\Lambda_d$ and $z_\mu:=m_{t^\mu t^\mu}+K(\mu)$ is
defined. Define the (level-one) **cell/Specht module**
$$S(\mu):=H^\Lambda_d\,z_\mu\subseteq H^\Lambda_d/K(\mu),$$
a LEFT $H^\Lambda_d$-module lying in the block $H^\Lambda_\alpha$.

For every standard $\mu$-tableau $T$
([[def-young-tableau-standard-tableau-and-shape]]) fix a reduced decomposition
$w_T=s_{r_1}\cdots s_{r_m}$ of the associated permutation and put
$z_T:=T_{w_T}z_\mu$, $v_T:=\psi_{w_T}z_\mu$ in the Khovanov--Lauda presentation
of `def-type-a-cyclotomic-specialization-of-the-qg-klr-algebras`. For a
removable $i$-node $A$ of a partition $\lambda$
([[def-removable-and-addable-nodes-of-a-partition]]) define
$$d_A(\lambda):=\#\{\text{addable }i\text{-nodes strictly below }A\}-\#\{\text{removable }i\text{-nodes strictly below }A\}$$
(equivalently in the level-one symmetric residue convention of the regime) and
define the **degree** of a standard tableau inductively by
$\deg(\varnothing):=0$ and, for $d>0$,
$\deg(T):=\deg(T_{\le d-1})+d_A(\mu)$ where $A$ is the node of $T$ containing
$d$.

The definition asserts, and
`thm-graded-specht-module-has-homogeneous-tableau-basis` on this page proves,
that $\{v_T:T\in\operatorname{Std}(\mu)\}$ is a homogeneous $F$-basis of
$S(\mu)$ making it a graded $R^\Lambda_\alpha$-module whose $q$-character is
$\operatorname{ch}_qS(\mu)=\sum_Tq^{\deg T}i_T$; forgetting the grading
recovers the ungraded cell module. **Convention.** This is the LEFT Murphy cell
module, obtained from the right cellular datum by $h\cdot m=m h^*$. Forgetting
its grading, `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual`
identifies it with the star-contragredient dual of the same-shape
independently defined ordinary Dipper--James Specht module $P(\mu)$. Separately,
`thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell` gives
$S(\mu)\cong P(\mu')^{\theta}$ after the same left-module conversion. These are
two proved module comparisons, not the identification of an untwisted conjugate
module. The sign pullback may change ordinary residue content from $-\alpha$ to
$\alpha$; these ungraded comparisons do not assert homogeneity of the ordinary
form or of a raw Hecke sign automorphism in the fixed transported grading. The
labelling of simples by $e$-restricted or $e$-regular partitions is NOT asserted
here; it is determined by the head-classification theorem later on this page.

No choice is used in the definition.

## Facts & Assumptions

**Given:** The nondegenerate level-one regime with its partition parameters
$\mu$, $d=|\mu|$ and content $\alpha$, the Murphy cellular basis of the finite
type-$A$ Hecke algebra, and the KLR presentation of the block.

[F1] The regime supplies the field $F$, the parameter $\xi$, the level-one
weight, the Hecke and KLR towers, the blocks $H^\Lambda_\alpha$, the symmetric
residue convention and the independent grading variable $q$
([[def-nondegenerate-root-of-unity-level-one-hecke-regime]]).

[F2] The Murphy elements $m_{S,T}$ and the cell/Specht modules of the
cyclotomic Hecke algebra are those of
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]; the
left module structure is obtained from the right cellular datum through the
star anti-involution.

[F3] Standard tableaux, their shapes, the row-reading initial tableau
$t^\mu$, removable and addable nodes, and the associated permutations $w_T$ are
as declared in [[def-young-tableau-standard-tableau-and-shape]],
[[def-partition-young-diagram-and-conjugate-partition]] and
[[def-removable-and-addable-nodes-of-a-partition]].

[F4] The sign automorphism $\theta$ is the involution of
[[lem-dj-bridge-sign-automorphism-and-star-dual]], and $\theta$ commutes with
the star anti-involution.

[F5] The KLR generators, their grading and the degrees $\deg e(i)=0$,
$\deg y_r=2$, $\deg\psi_re(i)=-a_{i_ri_{r+1}}$ are those of
[[def-klr-grading-and-diagrammatic-composition]].

## Proof

**Proof technique:** direct.

1.1 **The ideal and the cyclic generator.** The span $K(\mu)$ of the Murphy elements indexed by standard pairs of shape strictly dominating $\mu$ is a two-sided ideal by the cellularity theorem `thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular`, and the class $z_\mu=m_{t^\mu t^\mu}+K(\mu)$ is the canonical generator of the cell module [F2]. The left action is obtained from the right cellular datum by $h\cdot m=mh^*$, so $S(\mu)=H^\Lambda_dz_\mu$ is a left module; no right module is identified with a left module without this conversion [F2]. [F2]

1.2 **The block and the basic parameters.** The content $\alpha=\operatorname{cont}(\mu)$ and the equation $d=|\mu|$ place $S(\mu)$ in the block $H^\Lambda_\alpha$ of the level-one Hecke algebra, because the Murphy basis is block-decomposed by residue content and the cell module of $\mu$ involves only the content $\alpha$ [F1, F2]. [F1, F2]

1.3 **The vectors.** For each standard $\mu$-tableau $T$ fix a reduced decomposition $w_T=s_{r_1}\cdots s_{r_m}$; the elements $z_T=T_{w_T}z_\mu$ and $v_T=\psi_{w_T}z_\mu$ are defined by left multiplication in the Hecke and KLR presentations, and $T_{w_T}$ is independent of its Hecke reduced expression, whereas $\psi_{w_T}z_\mu$ can depend on the chosen reduced word: the KLR braid relation has correction terms [F5]. The resulting family is defined for the selected reduced words, and the theorem of this page proves that the induced grading is well defined; no basis or homogeneity claim is made at this point [F5]. [F4, F5]

1.4 **The degree recursion is well defined.** For a standard tableau $T$ of size $d>0$, $T_{\le d-1}$ is a standard tableau of the smaller shape and the node $A$ of $T$ containing $d$ is removable in that shape, so the recursion $\deg(T)=\deg(T_{\le d-1})+d_A(\mu)$ is a finite induction on $d$ with values in $\mathbb Z$ depending only on $T$ and $\mu$; the two equivalent expressions for $d_A(\lambda)$ agree in the symmetric residue convention of the regime [F1, F3]. [F1, F3]

2.1 **The ungraded comparisons and Choice.** Forgetting the grading, the star-contragredient duality of `thm-dj-bridge-murphy-cell-is-the-same-shape-specht-dual` identifies the left cell module with the same-shape Specht dual, and the signed-conjugate comparison of `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell` gives $S(\mu)\cong P(\mu')^{\theta}$ after conversion; since $\theta$ commutes with star by [F4], both comparisons keep their stated positions and neither asserts untwisted conjugate identification [F4]. Every construction selects finite sets of reduced decompositions and finite basis data, so no choice principle is used. [F2, F4, given] ∎
