---
id: thm-hereditary-heart-embeds-in-derived-hall-algebra
kind: theorem
title: "The opposite untwisted Hall algebra of a hereditary heart embeds in the derived Hall algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-toen-derived-hall-algebra
  - thm-toen-derived-hall-algebra-is-associative-and-unital
  - thm-toen-derived-hall-number-formula
  - def-hall-finitary-abelian-category
  - def-untwisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
  - thm-untwisted-hall-algebra-is-associative-and-unital
  - def-triangulated-category
  - def-canonical-t-structure-on-a-derived-category
  - def-truncation-functors-and-cohomology-of-a-t-structure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §6, Proposition 6.1"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Olivier Schiffmann, Lectures on Hall algebras, arXiv:math/0611617v2, §5.6"
      url: "https://arxiv.org/pdf/math/0611617v2"
---

## Statement

Let $\mathcal T$ be a locally finite dg-enhancement over $\mathbb F_q$, and let $\mathcal D=\operatorname{Perf}(\mathcal T)$. Suppose $\mathcal D$ has a bounded t-structure whose heart $\mathcal A$ is a small finitary hereditary abelian category, and suppose the inclusion induces an exact equivalence $D^b(\mathcal A)\simeq\mathcal D$ under which short exact sequences in $\mathcal A$ correspond to distinguished triangles with all three terms in the heart. Here **hereditary** means cohomological dimension at most one: $\operatorname{Hom}_{D^b(\mathcal A)}(M,N[i])=0$ for all $M,N\in\mathcal A$ and $i>1$.

The untwisted Hall product [[def-untwisted-hall-algebra]] uses the convention that $[M]*_{\mathcal A}[N]$ counts subobjects isomorphic to $N$ with quotient $M$. With this convention, the basis map
$$
\Phi:H_{\mathcal A,\mathbb Q}\longrightarrow\mathcal{DH}(\mathcal T), \qquad [M]\longmapsto\chi_M
$$
is an injective algebra anti-homomorphism:
$$
\Phi([M]*_{\mathcal A}[N])=\Phi([N])*_{\mathcal{DH}}\Phi([M]).
$$
Equivalently, it is an algebra embedding $H_{\mathcal A,\mathbb Q}^{\mathrm{op}}\hookrightarrow\mathcal{DH}(\mathcal T)$. Its image is the subalgebra spanned by the characteristic functions of heart objects.

## Facts & Assumptions

**Given:** The dg-enhancement, the bounded t-structure and the hereditary heart specified in the statement.

[F1] A t-structure has $\operatorname{Hom}(\mathcal D^{\le0},\mathcal D^{\ge1})=0$; its heart is $\mathcal D^{\le0}\cap\mathcal D^{\ge0}$, and boundedness is defined using the truncation subcategories ([[def-canonical-t-structure-on-a-derived-category]], [[def-truncation-functors-and-cohomology-of-a-t-structure]]).

[F2] The derived Hall number $g^z_{x,y}$ counts arrows $x\to z$ with homotopy cofiber $y$, with the higher-Ext factor in [[thm-toen-derived-hall-number-formula]].

[F3] The ordinary product is $[M]*_{\mathcal A}[N]=\sum_L g^L_{M,N}[L]$, where $g^L_{M,N}$ counts subobjects $U\subseteq L$ with $U\cong N$ and $L/U\cong M$ ([[def-untwisted-hall-algebra]]).

[F4] This ordinary product is well-defined and associative with unit $[0]$ ([[def-hall-finitary-abelian-category]], [[lem-untwisted-hall-product-finiteness]], [[thm-untwisted-hall-algebra-is-associative-and-unital]]).

[A1] The heart inclusion has the exact realization stated in the hypotheses: a triangle $x\to z\to y\to x[1]$ with $x,y\in\mathcal A$ has $z\in\mathcal A$ and is the triangle of a short exact sequence $0\to x\to z\to y\to0$.

## Proof

1.1 If $x,y$ lie in $\mathcal A$ and $g^z_{x,y}\ne0$, then some arrow $x\to z$ has cofiber $y$, giving a distinguished triangle $x\to z\to y\to x[1]$. By [A1], $z$ lies in $\mathcal A$ and the triangle is a short exact sequence $0\to x\to z\to y\to0$. Thus the span of heart classes is closed under the derived Hall product. [F2, A1]

1.2 For $x,z\in\mathcal A$, $x\in\mathcal D^{\le0}$ and $z[-i]\in\mathcal D^{\ge i}\subseteq\mathcal D^{\ge1}$ for every $i>0$. Orthogonality in [F1] gives $\operatorname{Ext}^{-i}_{\mathcal D}(x,z)=\operatorname{Hom}_{\mathcal D}(x,z[-i])=0$; the same holds with $z=x$. The coefficient formula [F2] therefore reduces to $g^z_{x,y}=|[x,z]_y|/|\operatorname{Aut}(x)|$. [F1, F2]

2.1 Each subobject of $z$ with domain isomorphic to $x$ and quotient isomorphic to $y$ gives, after identifying its domain with $x$, a map in $[x,z]_y$. Two such identifications give maps in the same $\operatorname{Aut}(x)$-orbit. Conversely every map in $[x,z]_y$ is the monomorphism in the short exact sequence of [A1]. The action is free because a monomorphism $f$ with $f\circ a=f$ forces $a=\mathrm{id}_x$. Thus the orbit count $|[x,z]_y|/|\operatorname{Aut}(x)|$ equals $g^z_{y,x}$ in the convention of [F3]. [F3, A1, step 1.2]

3.1 For all $M,N$, step 2.1 gives $\Phi([M]*_{\mathcal A}[N])=\sum_Lg^L_{M,N}\chi_L=\chi_N*_{\mathcal{DH}}\chi_M$. Hence $\Phi$ is an anti-homomorphism, or equivalently a homomorphism from the opposite algebra. It is injective because distinct heart isomorphism classes are distinct basis vectors of $\mathcal{DH}(\mathcal T)$; closure follows from step 1.1. The algebra and unit claims are those of [F4] and [[thm-toen-derived-hall-algebra-is-associative-and-unital]]. [F2, F4, step 1.1, step 2.1] ∎
## Convention note

Toën's product counts the source as the subobject and the cofiber as the quotient. The current finitary Hall supplier uses the opposite naming order: the second product input is the subobject and the first is the quotient. The opposite-algebra formulation above makes this convention difference explicit.
