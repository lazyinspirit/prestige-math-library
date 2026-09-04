---
id: lem-section-zero-if-all-germs-zero
kind: lemma
title: "A section of a sheaf of groups is zero exactly when all of its germs are zero"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sheaf-on-topological-space, def-presheaf-of-groups-rings-modules, def-germ-of-section]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 4"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
    - title: "The Stacks Project, Sheaves on Spaces, Section 15"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement

Let $\mathcal F$ be a sheaf of groups on a topological space $X$, let
$U \subseteq X$ be open, and let $s\in\mathcal F(U)$. Then
$$s=0\text{ in }\mathcal F(U)\qquad\Longleftrightarrow\qquad s_x=0\text{ in }\mathcal F_x\text{ for every }x\in U.$$

## Facts & Assumptions

**Given:** A sheaf of groups $\mathcal F$, an open set $U$, and a section $s\in\mathcal F(U)$.

[F1] A sheaf of groups has an identity section on every open set; when the group law is written additively, this section is denoted by $0$, and all restrictions preserve it ([[def-presheaf-of-groups-rings-modules]]).

[L1] A sheaf is determined by local agreement of sections on an open cover ([[def-sheaf-on-topological-space]]).

[F2] The germ $s_x$ is the class of $s$ in the stalk at $x$ ([[def-germ-of-section]]).

## Proof

**Proof technique:** direct.

1.1 If $s=0$ in $\mathcal F(U)$, then for every $x\in U$ the induced germ is $s_x=0_x$ because the stalk map respects restriction and the zero section by [F1] and [F2]. [F1, F2]

1.2 Assume $s_x=0$ for every $x\in U$. Fix $x\in U$. By [F2], equality of germs means that there exists an open neighbourhood $V_x\subseteq U$ of $x$ such that $s|_{V_x}=0|_{V_x}$. The sets $V_x$ cover $U$. [F2, given]

2.1 On the open cover $\{V_x\}_{x\in U}$, the sections $s$ and $0$ have the same restriction by step 1.2. Locality in [L1] therefore gives $s=0$ in $\mathcal F(U)$. Together with step 1.1, this proves both directions. [L1, step 1.1, step 1.2] ∎
