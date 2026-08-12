---
id: thm-chosen-limits-and-colimits-assemble-into-functors
kind: theorem
title: "Chosen limits and colimits of a fixed small shape assemble into limit and colimit functors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limit-and-colimit-of-a-diagram, def-functor-category, def-natural-transformation, def-cardinality-of-a-small-category-and-kappa-small-diagram, lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic, prop-limit-colimit-duality]
justified_by: []
aliases: [thm-limit-functor, thm-colimit-functor]
landmark: true
proof_strategy: universal-property
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Lemma 3.4.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Let $\mathcal J$ be small. If a particular limiting cone is chosen for every
$D:\mathcal J\to\mathcal C$, these choices define a functor

$$\lim_{\mathcal J}:[\mathcal J,\mathcal C]\to\mathcal C.$$

Chosen colimiting cocones similarly define
$\operatorname{colim}_{\mathcal J}:[\mathcal J,\mathcal C]\to\mathcal C$.

## Facts & Assumptions

**Given:** A small $\mathcal J$ and, for every $D$, a chosen limit
$(L_D,\lambda^D)$.

[F1] Objects and arrows of a functor category are functors and natural
transformations ([[def-functor-category]], [[def-natural-transformation]]).

[F2] A chosen limit supplies a unique factor from every cone
([[def-limit-and-colimit-of-a-diagram]]).

[F3] Smallness is cardinality of the indexing category
([[def-cardinality-of-a-small-category-and-kappa-small-diagram]]).

[L1] Limit legs are jointly monic
([[lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic]]).

[L2] The colimit construction is the formal dual
([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** universal property.

1.1 For $\alpha:D\Rightarrow E$, the family $\alpha_j\lambda^D_j:L_D\to E(j)$ is a cone: for $u:j\to k$, naturality of $\alpha$ and the cone equation give $E(u)\alpha_j\lambda^D_j=\alpha_kD(u)\lambda^D_j= \alpha_k\lambda^D_k$. [F1, F2]

2.1 By [F2], there is a unique morphism $\lim\alpha:L_D\to L_E$ satisfying $\lambda^E_j\lim\alpha=\alpha_j\lambda^D_j$ for every $j$. [F2, step 1.1]

3.1 For $1_D$, both $\lim(1_D)$ and $1_{L_D}$ have the same composites with all $\lambda^D_j$; [L1] gives $\lim(1_D)=1_{L_D}$. [L1, step 2.1]

3.2 For $D\xRightarrow\alpha E\xRightarrow\beta H$, the maps $\lim(\beta\alpha)$ and $(\lim\beta)(\lim\alpha)$ have composite $\beta_j\alpha_j\lambda^D_j$ with every $\lambda^H_j$. By [L1] they are equal. Thus the assignments satisfy the functor laws. [L1, step 2.1]

4.1 The smallness in [F3] ensures that the functor category is used under the library's set-based indexing convention. Reversing every arrow in steps 1.1, 2.1, 3.1, and 3.2 by [L2] gives the chosen-colimit functor. [F3, L2, step 1.1, step 2.1, step 3.1, step 3.2] ∎
