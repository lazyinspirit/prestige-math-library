---
id: lem-cone-triangles-satisfy-the-octahedral-axiom
kind: lemma
title: "Cone triangles satisfy the octahedral axiom"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-distinguished-cone-triangle-in-the-homotopy-category, lem-the-three-cone-calculation-for-a-composite-chain-map, def-triangulated-category-axiom-tr-four-octahedral]
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Proposition 13.10.3"
      url: "https://stacks.math.columbia.edu/tag/014P"
---

## Statement

The distinguished cone triangles in $K(\mathcal A)$ satisfy TR4.

## Facts & Assumptions

**Given:** Composable chain maps $C_\bullet\xrightarrow fD_\bullet\xrightarrow gE_\bullet$.

## Proof

1.1 Let $$\alpha:\operatorname{Cone}(f)\longrightarrow\operatorname{Cone}(gf), \qquad \beta:\operatorname{Cone}(gf)\longrightarrow\operatorname{Cone}(g)$$ be the cone maps induced by the squares $(1_C,g)$ and $(f,1_E)$.  In the coordinates of [[lem-the-three-cone-calculation-for-a-composite-chain-map]], write an element of $\operatorname{Cone}(\alpha)$ as $(e,c,d,c')$ and define $$r(e,c,d,c')=(e,d+f(c)),\qquad s(e,d)=(e,0,d,0).$$ The displayed cone-differential calculation in that lemma shows that $r$ and $s$ are chain maps, $rs=1$, and $sr\simeq1$: under its isomorphism $\Theta$, $r$ is projection off the contractible $\operatorname{Cone}(1_{C[1]})$ summand and $s$ is inclusion of the $\operatorname{Cone}(g)$ summand. [given]

2.1 If $j_\alpha$ and $q_\alpha$ are the canonical maps in the standard cone triangle of $\alpha$, then the formulas give $$rj_\alpha=\beta,\qquad q_\alpha s=j_f[1]\circ q_g.$$ Indeed, $j_\alpha(e,c)=(e,c,0,0)$ and $\beta(e,c)=(e,f(c))$, while $q_\alpha(e,c,d,c')=(d,c')$ and $j_f[1]q_g(e,d)=(d,0)$. [step 1.1, algebra]

3.1 Thus the standard distinguished cone triangle of $\alpha$ is isomorphic in $K(\mathcal A)$ to $$\operatorname{Cone}(f)\xrightarrow{\alpha} \operatorname{Cone}(gf)\xrightarrow{\beta} \operatorname{Cone}(g)\xrightarrow{j_f[1]\circ q_g} \operatorname{Cone}(f)[1].$$ The definitions of $\alpha$ and $\beta$ make the other two faces the required morphisms of cone triangles, and the displayed final map is precisely the typed fourth arrow in TR4. [step 1.1, step 2.1, given] ∎
