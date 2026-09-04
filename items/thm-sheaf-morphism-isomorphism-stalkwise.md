---
id: thm-sheaf-morphism-isomorphism-stalkwise
kind: theorem
title: "A morphism of sheaves is an isomorphism exactly when it is an isomorphism on every stalk"
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
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 4, Exercise 4.5"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
    - title: "The Stacks Project, Sheaves on Spaces, Section 16"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement

Let $\varphi:\mathcal F\to\mathcal G$ be a morphism of sheaves of sets on a
topological space $X$. Then $\varphi$ is an isomorphism if and only if, for
every $x\in X$, the induced map on stalks
$$\varphi_x:\mathcal F_x\longrightarrow\mathcal G_x$$
is a bijection.

## Facts & Assumptions

**Given:** A morphism of sheaves $\varphi:\mathcal F\to\mathcal G$.

[F1] A morphism of presheaves is an isomorphism when it has a two-sided inverse whose components commute with restriction ([[def-morphism-of-presheaves]]).

[F2] The stalk construction sends morphisms of presheaves to induced stalk maps, and for every $s\in\mathcal F(U)$ and $x\in U$ one has $$(\varphi_U(s))_x=\varphi_x(s_x)$$ ([[def-morphism-of-presheaves]], [[def-stalk-of-presheaf]], [[def-germ-of-section]]).

[F3] Two germs at $x$ are equal exactly when their representing sections agree on some smaller neighbourhood of $x$ ([[def-stalk-of-presheaf]]).

[L2] A sheaf is glued from local sections that agree on overlaps ([[def-sheaf-on-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 If $\varphi$ is an isomorphism with inverse $\psi$, then for every $x$ the induced maps $\varphi_x$ and $\psi_x$ are inverse because taking stalks preserves composition and identities by [F2]. Hence each $\varphi_x$ is a bijection. [F1, F2]

1.2 Assume now that every $\varphi_x$ is a bijection. Fix an open set $U\subseteq X$ and a section $t\in\mathcal G(U)$. For each $x\in U$, choose $a_x\in\mathcal F_x$ with $\varphi_x(a_x)=t_x$. Pick a representative $s_x\in\mathcal F(V_x)$ of $a_x$ on some open neighbourhood $V_x\subseteq U$ of $x$. Then $(\varphi_{V_x}(s_x))_x=t_x$, so [F3] lets us shrink $V_x$ and assume $\varphi_{V_x}(s_x)=t|_{V_x}$. [F2, F3, given, choose]

1.3 If $s,s'\in\mathcal F(U)$ satisfy $\varphi_U(s)=\varphi_U(s')$, then for every $x\in U$ one has $\varphi_x(s_x)=\varphi_x(s'_x)$ by [F2]. Injectivity of $\varphi_x$ gives $s_x=s'_x$. By [F3], for each $x$ there exists an open neighbourhood $W_x\subseteq U$ with $s|_{W_x}=s'|_{W_x}$. The sets $W_x$ cover $U$, so [L2] gives $s=s'$. Thus each $\varphi_U$ is injective. [F2, F3, L2]

2.1 Let $x,y\in U$. For any $z\in V_x\cap V_y$, the two sections $s_x|_{V_x\cap V_y}$ and $s_y|_{V_x\cap V_y}$ have images under $\varphi$ whose germs at $z$ both equal $t_z$. Since $\varphi_z$ is injective, the germs of $s_x$ and $s_y$ at $z$ are equal. By [F3], there is a neighbourhood $W_z\subseteq V_x\cap V_y$ of $z$ on which $s_x|_{W_z}=s_y|_{W_z}$. The sets $W_z$ cover $V_x\cap V_y$, so [L2] gives $$s_x|_{V_x\cap V_y}=s_y|_{V_x\cap V_y}.$$ Therefore the family $(s_x)$ is compatible on the cover $\{V_x\}_{x\in U}$ of $U$. [F2, F3, L2, step 1.2]

3.1 By [L2], the compatible family of step 2.1 glues to a unique section $\psi_U(t)\in\mathcal F(U)$ satisfying $\varphi_U(\psi_U(t))=t$. Thus $\varphi_U$ is surjective for every $U$. [L2, step 2.1, construct]

4.1 Let $V\subseteq U$ and $t\in\mathcal G(U)$. Then $$\varphi_V(\psi_U(t)|_V)=\varphi_U(\psi_U(t))|_V=t|_V=\varphi_V(\psi_V(t|_V)).$$ Step 1.3 gives injectivity of $\varphi_V$, so $\psi_U(t)|_V=\psi_V(t|_V)$. Hence the maps $\psi_U$ commute with restriction and define a morphism of sheaves $\psi:\mathcal G\to\mathcal F$. By steps 3.1 and 1.3, $\psi$ is a two-sided inverse to $\varphi$, so [F1] shows that $\varphi$ is an isomorphism. Together with step 1.1 this proves both directions. [F1, step 3.1, step 1.3] ∎
