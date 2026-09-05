---
id: thm-gluing-sheaves
kind: theorem
title: "Compatible local sheaves glue uniquely up to unique isomorphism"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-gluing-datum-sheaves, def-sheaf-on-topological-space]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Lemma 26.14.1 specialized to sheaves"
      url: "https://stacks.math.columbia.edu/tag/01JA"
    - title: "Ravi Vakil, The Rising Sea, Section 2.5.D"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let $X=\bigcup_i U_i$ be an open cover, and let
$$
(\mathcal F_i,\varphi_{ij})
$$
be a gluing datum for sheaves on that cover. Then there exists a sheaf
$\mathcal F$ on $X$ together with isomorphisms
$$
\mathcal F|_{U_i}\xrightarrow{\ \cong\ }\mathcal F_i
$$
whose induced overlap identifications are the given $\varphi_{ij}$. This glued
sheaf is unique up to unique isomorphism.

The same objectwise construction gives the analogous gluing result for sheaves
of abelian groups, commutative rings, and modules on a fixed ringed space.

## Facts & Assumptions

**Given:** An open cover $X=\bigcup_i U_i$ and a gluing datum $(\mathcal F_i,\varphi_{ij})$ on it.

[F1] A gluing datum consists of local sheaves and overlap isomorphisms satisfying identity and cocycle conditions ([[def-gluing-datum-sheaves]]).

[L1] A sheaf is exactly a presheaf whose compatible local sections glue uniquely on open covers ([[def-sheaf-on-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 For an open set $W \subseteq X$, define $\mathcal F(W)$ to be the set of families $(s_i)$ with $s_i\in\mathcal F_i(W\cap U_i)$ such that on every overlap $W\cap U_i\cap U_j$ one has $$ \varphi_{ij}(s_i|_{W\cap U_i\cap U_j})=s_j|_{W\cap U_i\cap U_j}. $$ Restriction is taken componentwise. This defines a presheaf on $X$. [F1, construct]

1.2 Fix $k$. If $W \subseteq U_k$, the map $\mathcal F(W)\to\mathcal F_k(W)$ sending $(s_i)$ to $s_k$ is an isomorphism: given $t\in\mathcal F_k(W)$, define $s_i:=\varphi_{ki}(t|_{W\cap U_i})$, and [F1] makes these sections compatible. Therefore $\mathcal F|_{U_k}\cong\mathcal F_k$, and the overlap maps are exactly the prescribed $\varphi_{ij}$. [F1, construct]

2.1 Let $W=\bigcup_\alpha W_\alpha$ and let $(s_i^{(\alpha)})$ be compatible sections of the presheaf from step 1.1 on the cover. For each fixed $i$, the sections $s_i^{(\alpha)}\in \mathcal F_i(W_\alpha\cap U_i)$ are compatible, so [L1] glues them uniquely to a section $s_i\in\mathcal F_i(W\cap U_i)$. The cocycle condition from [F1] is preserved under these gluings, hence $(s_i)$ is a glued section of $\mathcal F(W)$. Uniqueness is again componentwise, so the presheaf is a sheaf. If the $\mathcal F_i$ carry abelian-group, ring, or module structures and each $\varphi_{ij}$ preserves them, then the componentwise operations on the families $(s_i)$ make the glued sheaf a sheaf of the same kind. [F1, L1, step 1.1]

3.1 If $\mathcal G$ is another sheaf with the same local identifications, then on every open $W$ its sections are exactly the compatible families of local sections on the cover $\{W\cap U_i\}$. By [L1], the correspondence of step 1.1 is therefore forced, so there is a unique isomorphism $\mathcal G\cong\mathcal F$. This proves uniqueness up to unique isomorphism. [L1, step 1.1, step 1.2] ∎
