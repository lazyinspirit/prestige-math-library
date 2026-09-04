---
id: lem-morphisms-of-sheaves-determined-by-stalks
kind: lemma
title: "Morphisms of sheaves are determined by their maps on stalks"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sheaf-on-topological-space, def-morphism-of-presheaves, def-stalk-of-presheaf, def-germ-of-section]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3, Exercise 4.4"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Statement

Let $\varphi,\psi:\mathcal F\to\mathcal G$ be morphisms of sheaves of sets on a
topological space $X$. If the induced maps on stalks
$$\varphi_x,\psi_x:\mathcal F_x\longrightarrow\mathcal G_x$$
are equal for every $x\in X$, then $\varphi=\psi$.

## Facts & Assumptions

**Given:** Two morphisms of sheaves $\varphi,\psi:\mathcal F\to\mathcal G$.

[F1] A morphism of presheaves is given by component maps compatible with restriction ([[def-morphism-of-presheaves]]).

[F2] The stalk construction sends a morphism of presheaves to induced maps on stalks, and for every $s\in\mathcal F(U)$ and $x\in U$ one has $$(\varphi_U(s))_x=\varphi_x(s_x)$$ ([[def-morphism-of-presheaves]], [[def-stalk-of-presheaf]], [[def-germ-of-section]]).

[F3] Two germs at $x$ are equal exactly when their representing sections agree on some smaller neighbourhood of $x$ ([[def-stalk-of-presheaf]]).

[L1] Sections of a sheaf are equal once they agree on an open cover ([[def-sheaf-on-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Fix an open set $U\subseteq X$ and a section $s\in\mathcal F(U)$. For every $x\in U$, the hypothesis $\varphi_x=\psi_x$ and [F2] give $$(\varphi_U(s))_x=\varphi_x(s_x)=\psi_x(s_x)=(\psi_U(s))_x.$$ [F2, given]

2.1 By [F3], equality of the germs in step 1.1 means that for each $x\in U$ there exists an open neighbourhood $V_x\subseteq U$ such that $$\varphi_U(s)|_{V_x}=\psi_U(s)|_{V_x}.$$ The sets $V_x$ cover $U$. [F3, step 1.1]

3.1 By [L1], the two sections $\varphi_U(s)$ and $\psi_U(s)$ are equal on $U$. Since $U$ and $s$ were arbitrary, the component maps $\varphi_U$ and $\psi_U$ agree for every open $U$. Therefore $\varphi=\psi$ by [F1]. [F1, L1, step 2.1] ∎
