---
id: lem-arith-smooth-group-identity-component-open
kind: lemma
title: "The identity model of a smooth group with abelian generic fibre"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-group-scheme-over-a-scheme
  - def-abelian-variety-over-a-field
  - lem-nonaffine-connected-group-geometrically-connected
  - def-locally-noetherian-and-noetherian-scheme
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 6.4 (identity components over a DVR)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, and let $G$ be a smooth separated finite-type $R$-group scheme ([[def-group-scheme-over-a-scheme]]) whose generic fibre $G_K$ is an abelian variety ([[def-abelian-variety-over-a-field]]). Then
$$G^0=G_K\cup(G_k)^0$$
is an open $R$-subgroup scheme of $G$, smooth, separated and of finite type over $R$, with geometrically connected fibres. On each geometric fibre of $G$, the orbits of $G^0$ are exactly the connected components of that fibre.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with fraction field $K$ and residue field $k$, a smooth separated finite-type $R$-group scheme $G$ with abelian generic fibre $G_K$, and the identity component $(G_k)^0$ of the special fibre.

[F1] $G_K$ is an abelian variety, hence connected; $G_k$ is a smooth finite-type $k$-group scheme with finitely many connected components, the identity component $(G_k)^0$ being open and a subgroup scheme ([[def-abelian-variety-over-a-field]], [[def-group-scheme-over-a-scheme]]).

[F2] A connected smooth finite-type group scheme over a field is geometrically connected, and a smooth connected such group is geometrically integral; these statements propagate through field extension ([[lem-nonaffine-connected-group-geometrically-connected]], assuming AC).

[F3] A scheme which is smooth over a discrete valuation ring is flat over it, and a closed subscheme of a scheme over a DVR whose generic and special fibres are both empty is empty; a morphism of $R$-schemes whose restriction to the generic fibre and to the special fibre both factor through an open subscheme factors through it ([[def-locally-noetherian-and-noetherian-scheme]], [[def-group-scheme-over-a-scheme]]).

## Proof

**Proof technique:** direct: the subscheme is open by construction, closed under the group operations fibrewise, and its orbits are computed by translation.

1.1 The set $G^0=G_K\cup(G_k)^0$ is open in $G$: by [F1], $G_k$ has finitely many connected components, so $G_k\setminus(G_k)^0$ is closed in $G_k$. Since the special fibre $G_k$ is closed in $G$, this complement is closed in $G$. Its complement in $G$ is exactly $G_K\cup(G_k)^0$, which is therefore open. It is an open subscheme, hence smooth, separated and of finite type over $R$. Its generic fibre is the connected abelian variety $G_K$ and its special fibre is $(G_k)^0$, connected; by [F2] the special fibre is geometrically connected and the generic fibre is geometrically connected, so the fibres over the two points of $\operatorname{Spec}R$ are geometrically connected. [F1, F2, given, construct]

2.1 The multiplication, inverse and unit of $G$ restrict to $G^0$: the multiplication $m_G$ maps $G_K\times_KG_K$ into $G_K$ and $(G_k)^0\times_k(G_k)^0$ into $(G_k)^0$ because $(G_k)^0$ is a subgroup scheme; hence the preimage $m_G^{-1}(G^0)\subseteq G\times_RG$ is an open subscheme containing both $G_K\times_KG_K$ and $(G_k)^0\times_k(G_k)^0$. The complement of this preimage inside the open subscheme $G^0\times_RG^0$ is closed with empty generic and special fibres, hence empty by [F3]; therefore $m_G$ restricts to $G^0\times_RG^0\to G^0$. The same argument with the inverse and the unit section (whose value at the closed point lies in $(G_k)^0$) shows that $G^0$ is an $R$-subgroup scheme of $G$. [F1, F3, step 1.1, algebra]

2.2 Let $\bar s$ be a geometric point of $\operatorname{Spec}R$. If $\bar s$ lies over the generic point, $G_{\bar s}=(G_K)_{\bar s}$ is connected by [F2]; if $\bar s$ lies over the closed point, $G_{\bar s}=(G_k)_{\bar s}$ and $(G^0)_{\bar s}=((G_k)^0)_{\bar s}=(G_{\bar s})^0$ because the identity component of a smooth group scheme over a field is geometrically connected by [F2]. Thus $G^0_{\bar s}$ is the identity component of the smooth group $G_{\bar s}$. [F1, F2, step 1.1, algebra]

3.1 On a geometric fibre $G_{\bar s}$, translation by a point $x$ is an isomorphism $G_{\bar s}\to G_{\bar s}$ carrying the identity component onto the connected component of $x$; since $G^0_{\bar s}$ is the identity component by step 2.2, the orbit of $x$ under $G^0_{\bar s}$ is exactly the connected component of $x$. Hence the orbits of $G^0$ on each geometric fibre are the connected components, as claimed. [F1, step 2.2, algebra] ∎ 