---
id: ex-amalgamating-c-two-inside-c-four-and-c-six
kind: example
title: "Amalgamating C_2 inside C_4 and C_6 gives the presentation with a^2=b^3"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-presentation-of-a-free-product-with-amalgamation, cor-factors-embed-in-a-free-product-with-amalgamation, cor-factor-images-intersect-in-the-amalgamated-subgroup, thm-subgroups-of-cyclic-groups-are-cyclic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---
## Example

Embed $C_2$ as the unique order-two subgroup of $C_4=\langle a\rangle$ and $C_6=\langle b\rangle$. Their amalgamated free product has presentation $$\langle a,b\mid a^4=e,\ b^6=e,\ a^2=b^3\rangle.$$

## Facts & Assumptions

**Given:** The objects and hypotheses in the example.

[L1] Let $G=\langle X\mid R\rangle$ and $H=\langle Y\mid S\rangle$ with disjoint generators, and let $f,h$ embed $K$. If $T$ generates $K$ and words $u_t(X),v_t(Y)$ represent $f(t),h(t)$, then $$G\ast_KH\cong\langle X\sqcup Y\mid R\cup S\cup\{u_t v_t^{-1}:t\in T\}\rangle.$$ ([[thm-presentation-of-a-free-product-with-amalgamation]]).

[L2] The canonical maps $G\to G\ast_KH$ and $H\to G\ast_KH$ are injective. ([[cor-factors-embed-in-a-free-product-with-amalgamation]]).

[L3] Inside $G\ast_KH$, the images of $G$ and $H$ intersect exactly in their common image of $K$. ([[cor-factor-images-intersect-in-the-amalgamated-subgroup]]).

[L4] Every subgroup $H$ of a cyclic group $G=\langle g\rangle$ is cyclic. If $H\ne\{e\}$, then the least positive integer $d$ for which $g^d\in H$ satisfies $H=\langle g^d\rangle$. ([[thm-subgroups-of-cyclic-groups-are-cyclic]]).

## Verification

**Proof technique:** direct.

1.1 The maps send the nonidentity element of $C_2$ to $a^2$ and $b^3$, each of order $2$, so both maps are injective. [given, L1, L2, L3, L4]

2.1 The amalgamated-presentation theorem gives the displayed presentation. [step 1.1]

3.1 Factor embedding keeps copies of $C_4$ and $C_6$, and the intersection theorem says their images meet exactly in the common $C_2$. [step 2.1] ∎
