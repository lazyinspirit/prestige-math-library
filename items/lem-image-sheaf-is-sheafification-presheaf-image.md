---
id: lem-image-sheaf-is-sheafification-presheaf-image
kind: lemma
title: "The image sheaf is the sheafification of the presheaf image"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subsheaf, def-sheafification, thm-sheafification-universal-property, def-morphism-of-presheaves]
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
    - title: "The Stacks Project, Sheaves on Spaces, Section 29"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Statement

Let $\varphi:\mathcal F\to\mathcal G$ be a morphism of sheaves of sets on a
topological space $X$, and let $I$ be the **presheaf image**
$$I(U):=\varphi_U(\mathcal F(U))\subseteq\mathcal G(U).$$
Define the **image sheaf** $J$ by
$$ J(U):=\left\{\,t\in\mathcal G(U): \text{ for every }x\in U\text{ there exists }x\in V\subseteq U \text{ and }s\in\mathcal F(V)\text{ with }\varphi_V(s)=t|_V\,\right\}. $$
Then $J$ is a subsheaf of $\mathcal G$, $\varphi$ factors through $J$, and the
canonical map
$$aI\longrightarrow J$$
is an isomorphism. In particular, the image sheaf is the sheafification of the
objectwise image presheaf.

## Facts & Assumptions

**Given:** A morphism of sheaves $\varphi:\mathcal F\to\mathcal G$.

[F1] A subsheaf is a sheaf whose sections embed objectwise into the ambient
sheaf ([[def-subsheaf]]).

[F2] A morphism of presheaves is a compatible family of component maps
([[def-morphism-of-presheaves]]).

[L1] Maps from a presheaf to a sheaf factor uniquely through sheafification
([[thm-sheafification-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 The assignment $U\mapsto I(U)$ is a subpresheaf of $\mathcal G$: if $t=\varphi_U(s)\in I(U)$ and $V\subseteq U$, then $t|_V=\varphi_V(s|_V)\in I(V)$ by [F2]. [F2, given]

1.2 The assignment $J$ is a subsheaf of $\mathcal G$. Indeed, restriction clearly preserves local representability. If sections $t_i\in J(U_i)$ on an open cover of $U$ agree on overlaps, then because $\mathcal G$ is a sheaf they glue to a unique $t\in\mathcal G(U)$. The local witnesses for each $t_i$ also witness that $t$ lies in $J(U)$. Thus $J$ is a sheaf, and [F1] makes it a subsheaf. The factorization $\mathcal F\to J$ is immediate from the definition of $J$. [F1, F2, given]

2.1 Since $I$ maps into the sheaf $J$, [L1] gives a unique morphism $$\alpha:aI\longrightarrow J$$ extending the inclusion $I\hookrightarrow J$. [L1, step 1.1, step 1.2]

2.2 Conversely, let $t\in J(U)$. Choose an open cover $U=\bigcup_iU_i$ and sections $s_i\in\mathcal F(U_i)$ with $\varphi_{U_i}(s_i)=t|_{U_i}$. Then the sections $\varphi_{U_i}(s_i)\in I(U_i)$ are compatible on overlaps because they all come from $t$. Hence they define a section $\beta_U(t)\in aI(U)$ by the very construction of sheafification. These assignments are compatible with restriction, so they define a morphism $\beta:J\to aI$. [L1, step 1.2, construct]

3.1 The composites $\alpha\circ\beta$ and $\beta\circ\alpha$ are identities, because both are identities locally on the chosen image sections that generate $J$ and $aI$, and both targets are sheaves. Therefore $\alpha$ is an isomorphism. [L1, step 2.1, step 2.2] ∎
