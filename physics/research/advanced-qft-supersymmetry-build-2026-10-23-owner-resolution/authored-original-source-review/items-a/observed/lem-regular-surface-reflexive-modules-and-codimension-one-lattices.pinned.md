---
id: lem-regular-surface-reflexive-modules-and-codimension-one-lattices
kind: lemma
title: Reflexive surface modules and codimension-one lattice extension
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- cor-localisations-of-regular-local-rings-are-regular
- def-axiom-of-choice
- def-dependent-choice
- lem-r-one-s-two-intersection-of-height-one-localisations
- thm-auslander-buchsbaum-formula
- thm-long-exact-ext-sequence-in-the-second-variable
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- thm-auslander-buchsbaum-serre-regularity-criterion
- thm-depth-zero-associated-prime-criterion
- thm-serre-normality-criterion
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project, Resolution of Surfaces, Sections 54.8–54.9: complete source arguments with local
      prerequisite replacements'
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
---

## Statement

Assume AC and DC. On a regular Noetherian surface a coherent reflexive module is locally free. For a finite module $M$ over a normal Noetherian domain, a generic vector belonging to $M^{**}$ at every height-one localization belongs to $M^{**}$. For a coherent generic-rank-$r$ module on a regular surface, $(\wedge^rM)^{**}$ is the determinant line of $M^{**}$.

## Facts & Assumptions

**Given:** A regular Noetherian surface $X$ (a regular Noetherian scheme of pure dimension two) and a coherent sheaf $M$ on $X$ of generic rank $r$; for the height-one assertion, a finite module over a normal Noetherian domain.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *cor-localisations-of-regular-local-rings-are-regular.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every prime localization $R_{\mathfrak p}$ of a regular local ring $R$ is regular, and $\operatorname{edim}R_{\mathfrak p}=\operatorname{ht}\mathfrak p$. ([[cor-localisations-of-regular-local-rings-are-regular]])

[F4] *thm-regular-local-rings-are-domains-and-cohen-macaulay.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). A regular local ring $R$ of dimension $d$ is a domain and Cohen–Macaulay. For every regular system $(x_1,\ldots,x_d)$, the tuple is $R$-regular and $R/(x_1,\ldots,x_c)$ is regular local of dimension $d-c$ for all $0\le c\le d$. ([[thm-regular-local-rings-are-domains-and-cohen-macaulay]])

[F5] *thm-auslander-buchsbaum-formula.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). For a nonzero finite module $M$ of finite projective dimension over a nonzero Noetherian local ring $R$, $\operatorname{pd}_RM+\operatorname{depth}_RM=\operatorname{depth}R$. Consequently such an $M$ with $\operatorname{depth}M=\operatorname{depth}R$ is free. ([[thm-auslander-buchsbaum-formula]])

[F6] *thm-long-exact-ext-sequence-in-the-second-variable.* Assume the Axiom of Dependent Choice. Let $\mathcal A$ be abelian with enough projectives and enough injectives, and fix supplied projective and injective resolution data on all its objects. ([[thm-long-exact-ext-sequence-in-the-second-variable]])

[F7] *lem-r-one-s-two-intersection-of-height-one-localisations.* Assume the Axiom of Choice. If $R$ is a commutative Noetherian domain satisfying $(S_2)$, then inside its fraction field $K$ one has $R=\bigcap_{\operatorname{ht}\mathfrak p=1}R_{\mathfrak p}$. For a field the empty intersection is interpreted as $K=R$. ([[lem-r-one-s-two-intersection-of-height-one-localisations]])

[F8] *thm-auslander-buchsbaum-serre-regularity-criterion.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). For a nonzero Noetherian local ring $(R,\mathfrak m,k)$ the following are equivalent: $R$ is regular; $\operatorname{pd}_Rk<\infty$; $\operatorname{gldim}R<\infty$; and every finite $R$-module has finite projective dimension. When these hold, $\operatorname{gldim}R=\operatorname{pd}_Rk=\dim R$. ([[thm-auslander-buchsbaum-serre-regularity-criterion]])

[F9] *thm-depth-zero-associated-prime-criterion.* Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M\ne0$ be a finite $R$-module. Then $\operatorname{depth}(M)=0\quad\Longleftrightarrow\quad \mathfrak m\in\operatorname{Ass}_R(M).$ ([[thm-depth-zero-associated-prime-criterion]])

[F10] A normal Noetherian ring satisfies $(S_2)$; conversely $(R_1)$ and $(S_2)$ imply normality. ([[thm-serre-normality-criterion]])

## Proof

1.1 At a point $x\in X$ with $\dim\mathcal O_{X,x}=2$ the local ring $A=\mathcal O_{X,x}$ is a regular local ring of dimension two, hence a domain with depth two; the localizations of $A$ are regular by [F3], and those of dimension at most one are fields or discrete valuation rings in which finite torsion-free modules are free. [F3, F4, given]

1.2 For the second assertion, let $A$ be the given normal Noetherian domain, $K$ its fraction field, and $v\in M^{**}\otimes_AK$. By [F10], $A$ satisfies $(S_2)$, so [F7] applies. For every $\varphi\in M^*=\operatorname{Hom}_A(M,A)$, evaluation of $v$ on $\varphi$ belongs to each $A_{\mathfrak p}$ of height one, because $v\in(M^{**})_{\mathfrak p}$. It therefore lies in $A$ by [F7]. Thus $\varphi\mapsto v(\varphi)$ is an $A$-linear map $M^*\to A$, that is, an element of $M^{**}$ with generic value $v$. This also treats a field, using the empty-intersection convention. [F7, F10, given]

2.1 Let $N$ be a finite $A$-module with a finite presentation $A^b\to A^a\to N\to0$ for $A=\mathcal O_{X,x}$. Dualizing gives an exact sequence $0\to N^*\to A^a\to A^b$ whose image $I$ is torsion-free. If $I=0$, then $N^*=A^a$ is free, and the asserted depth bound holds (with the zero module treated separately). Otherwise $I$ is a nonzero finite module over the domain $A$, hence has depth at least one by the depth-zero criterion for torsion-free modules over a domain; applying the long exact sequence of Ext groups from the residue field to $0\to N^*\to A^a\to I\to0$ gives $\operatorname{depth}N^*\ge2$. [F4, F6, F9, step 1.1]

3.1 If $N^{**}=0$, it is already free. Otherwise applying the same computation to the finite module $N^*$ shows $\operatorname{depth}N^{**}\ge2$. Since $A$ is regular, every finite module over it has finite projective dimension by the Auslander--Buchsbaum--Serre criterion, so the Auslander--Buchsbaum formula gives $\operatorname{pd}N^{**}=2-\operatorname{depth}N^{**}=0$; a finite module of projective dimension zero over a local ring is free, so $N^{**}$ is free. [F5, F8, step 2.1]

4.1 A coherent reflexive module equals its double dual, so on an affine cover of $X$ the module of sections of $M$ is isomorphic to its double dual and is free at every point of local dimension two by step 3.1, free at points of local dimension one because their local rings are discrete valuation rings and the module is torsion-free, and free at points of local dimension zero because their local rings are fields. Over a DVR, a finite torsion-free module is free: in a nonzero relation between a minimal generating family divide the coefficients by their common lowest uniformizer power and cancel that power by torsion-freeness; one coefficient is a unit, contradicting minimality. Hence $M$ is locally free. [F3, step 3.1]

5.1 Work locally on an integral component of the regular surface and put $N=M/\operatorname{tors}(M)$. A map from a torsion module to the domain $A$ vanishes, so $N^*=M^*$ and $N^{**}=M^{**}$. At every height-one point $N$ is finite torsion-free over a DVR and hence free; there $N\to N^{**}$ is an isomorphism. The surjection $\wedge^rM\to\wedge^rN$ has torsion kernel, since it becomes an isomorphism over $K$, so its double dual is an isomorphism. The map $\wedge^rN\to\wedge^rN^{**}$ is also generically an isomorphism and an isomorphism at height one. Applying step 1.2 to these two finite modules identifies their double duals inside their common generic exterior power. By steps 3.1 and 4.1, $N^{**}=M^{**}$ is locally free; hence $\wedge^rM^{**}$ is already an invertible sheaf. The canonical identifications glue, giving $(\wedge^rM)^{**}\cong\det(M^{**})$. For $r=0$, both sides are $\mathcal O_X$. [F3, F7, step 3.1, step 4.1, step 1.2]

6.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited commutative-algebra and Ext suppliers; no further choice is used. [F1, F2, step 3.1, step 5.1] ∎

## Remarks

- The two-dimensional hypothesis is used exactly at step 3.1, where depth two forces projective dimension zero; in dimension one the analogous statement is that finite torsion-free modules are free over discrete valuation rings.
- The determinant statement is the surface case of the usual identification of top exterior powers with determinants after reflexive hulls.
