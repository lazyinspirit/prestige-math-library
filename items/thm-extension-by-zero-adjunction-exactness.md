---
id: thm-extension-by-zero-adjunction-exactness
kind: theorem
title: "Extension by zero is left adjoint to restriction and is exact on abelian sheaves"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-sequence-sheaves, def-extension-by-zero-abelian-sheaf, def-restriction-sheaf-open-subspace, thm-exactness-of-sheaves-stalkwise]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, Sections 2.7.D and 2.7.F"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
    - title: "The Stacks Project, Section 6.31"
      url: "https://stacks.math.columbia.edu/tag/009Z"
---

## Statement

Let $j:U\hookrightarrow X$ be the inclusion of an open subspace.

1. For every sheaf of abelian groups $\mathcal F$ on $U$ and every sheaf of
   abelian groups $\mathcal G$ on $X$, there is a natural bijection
   $$\operatorname{Hom}_X(j_!\mathcal F,\mathcal G) \cong \operatorname{Hom}_U(\mathcal F,j^{-1}\mathcal G).$$
2. The functor $j_!$ is exact on sheaves of abelian groups.

## Facts & Assumptions

**Given:** An open inclusion $j:U\hookrightarrow X$.

[F1] Restriction to $U$ is the inverse image sheaf $j^{-1}$ ([[def-restriction-sheaf-open-subspace]]).

[F2] A section of $j_!\mathcal F$ over an open $V \subseteq X$ is a section of $\mathcal F(V\cap U)$ whose support is closed in $V$ ([[def-extension-by-zero-abelian-sheaf]]).

[L1] Exactness of abelian sheaf sequences can be tested stalkwise ([[thm-exactness-of-sheaves-stalkwise]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Phi:j_!\mathcal F\to\mathcal G$ be a morphism on $X$. If $W \subseteq U$ is open, then [F2] gives $(j_!\mathcal F)(W)=\mathcal F(W)$, so the components $\Phi_W$ define a morphism $\mathcal F\to j^{-1}\mathcal G$ on $U$. [F1, F2, given]

1.2 Conversely, let $\Psi:\mathcal F\to j^{-1}\mathcal G$ be a morphism on $U$. For an open set $V \subseteq X$ and a section $s\in (j_!\mathcal F)(V)$, use $\Psi$ to obtain a section on $V\cap U$. For each point $x\in V\setminus U$, the support condition in [F2] gives an open neighbourhood $W_x \subseteq V$ with $s|_{W_x\cap U}=0$, so we may assign the zero section of $\mathcal G$ on $W_x$. These local sections agree on overlaps, so they glue uniquely to a section of $\mathcal G(V)$. This defines a morphism $j_!\mathcal F\to\mathcal G$. [F1, F2, construct]

1.3 Let $x\in X$. If $x\in U$, then the neighbourhoods of $x$ that lie inside $U$ are cofinal among all neighbourhoods of $x$, so $(j_!\mathcal F)_x\cong\mathcal F_x$. If $x\notin U$ and $s\in (j_!\mathcal F)(V)$ for some neighbourhood $V$ of $x$, then [F2] gives an open neighbourhood $W_x\subseteq V$ with $s|_{W_x\cap U}=0$, so the germ of $s$ at $x$ is zero. Therefore $(j_!\mathcal F)_x=0$. [F2, given]

2.1 The constructions in steps 1.1 and 1.2 are inverse, because on opens contained in $U$ they both recover the original morphism on $\mathcal F$, and outside $U$ the support condition forces the extension to vanish locally. Therefore $j_!$ is left adjoint to $j^{-1}$. [step 1.1, step 1.2]

3.1 Apply step 1.3 to a short exact sequence on $U$. At points of $U$ the stalk sequence after $j_!$ is the original exact stalk sequence, and outside $U$ it is $0\to0\to0\to0$. Hence [L1] implies that $j_!$ preserves exact sequences. [L1, step 1.3] ∎
