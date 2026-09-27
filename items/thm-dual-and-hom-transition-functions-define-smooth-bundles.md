---
id: thm-dual-and-hom-transition-functions-define-smooth-bundles
kind: theorem
title: "Dual and Hom transition functions define smooth bundles"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dual-and-hom-vector-bundles, def-vector-bundle-chart-and-transition-function, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-product-topology, thm-product-of-countable, prop-second-countability-is-hereditary, def-quotient-topology, lem-open-or-closed-surjection-is-quotient, lem-matrix-inversion-preserves-ck-regularity, def-transpose-of-a-linear-map, thm-matrix-of-transpose-is-the-transposed-matrix, thm-real-square-matrix-invertible-iff-determinant-nonzero]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (thm-dual-and-hom-transition-functions-define-smooth-bundles). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

If $E\to M$ and $F\to M$ are smooth vector bundles, then $E^*\to M$ and
$\operatorname{Hom}(E,F)\to M$ are smooth vector bundles. In local bundle charts,
the dual transition matrices are $(g_{\beta\alpha}^{-1})^{T}$ and the Hom
transition matrices are $A\mapsto h_{\beta\alpha}Ag_{\beta\alpha}^{-1}$.

## Facts & Assumptions

**Given:** Smooth vector bundles $E\to M$ and $F\to M$ with local transition matrices $g_{\beta\alpha}$ and $h_{\beta\alpha}$.

[L1] Vector bundle chart changes are fibrewise linear and smooth ([[def-vector-bundle-chart-and-transition-function]]).

[L2] The matrix of the transpose linear map is the transpose matrix ([[thm-matrix-of-transpose-is-the-transposed-matrix]]).

[L3] Finite products of second-countable spaces are second countable, and subspaces inherit second countability ([[def-product-topology]], [[thm-product-of-countable]], [[prop-second-countability-is-hereditary]]).

[L4] An open surjection has the quotient topology on its target ([[def-quotient-topology]], [[lem-open-or-closed-surjection-is-quotient]]).

[L5] Inversion is smooth on the open set of invertible matrices ([[lem-matrix-inversion-preserves-ck-regularity]]).

## Proof

**Proof technique:** direct.

1.1 Put $A=E$ and $B=F$, of ranks $r,s$. For $r,s>0$, let $D\subseteq A^r\times B^r$ consist of tuples $(a_1,\ldots,a_r,b_1,\ldots,b_r)$ over a common base point $p$, with $(a_i)$ a basis of $A_p$. Give $D$ the finite-product subspace topology. It is second countable: choose one countable base of each supplied total space, take finite product boxes, and restrict them to $D$. Only finitely many bases are chosen, and [L3] makes the resulting family countable. [given, L3, construct]

2.1 Let $H=\coprod_{p\in M}\operatorname{Hom}(A_p,B_p)$ as a set. Send a tuple in $D$ to the unique fibre map taking $a_i$ to $b_i$. This map $q:D\to H$ is onto: a basis can be chosen for each one fibre without selecting bases for all fibres simultaneously. Give $H$ the quotient topology. On a common local trivialization over $U$, the open saturated set $D_U$ has coordinates $(p,C,V)\in U\times GL(r,\mathbb R)\times M_{s\times r}(\mathbb R)$, and the composite of $q$ with the proposed Hom matrix chart is $(p,C,V)\mapsto(p,VC^{-1})$. This is a continuous open surjection: $(p,C,V)\mapsto(p,C,VC^{-1})$ is a homeomorphism by [L5], followed by the open product projection. By [L4], the induced chart $H_U\to U\times M_{s\times r}(\mathbb R)$ is a homeomorphism and $H_U$ is open. [step 1.1, L4, L5, construct]

3.1 The map $q$ is globally open because its restriction over every such open $H_U$ is open. Images of a countable base of $D$ then form a countable base of $H$: for each $h\in W$ open, choose one $d\in q^{-1}(h)$ and a basic neighbourhood $C$ with $d\in C\subseteq q^{-1}(W)$, so $h\in q(C)\subseteq W$. Distinct maps over distinct base points separate by base neighbourhoods; distinct maps over one point separate in one Hausdorff matrix chart. Thus $H$ is Hausdorff and second countable. [step 1.1, step 2.1, L3]

4.1 If the original bundle frames change by $g_{\beta\alpha}$ and $h_{\beta\alpha}$, a Hom matrix $T$ changes to $h_{\beta\alpha}Tg_{\beta\alpha}^{-1}$. These maps and their inverses are smooth by [L1] and [L5], so the charts in step 2.1 give $H$ a smooth vector-bundle atlas; a boundary base chart yields the corresponding half-space product chart. Fibre addition and scalar multiplication are linear in these coordinates. If $r=0$ or $s=0$, $H$ is the zero bundle $M$; if $M$ is empty, it is empty. [step 2.1, step 3.1, L1, L5, algebra]

5.1 Take $B=M\times\mathbb R$ in steps 1.1–4.1 to obtain $E^*=\operatorname{Hom}(E,M\times\mathbb R)$ as a smooth bundle. A functional with row coordinates $\ell$ changes to $\ell g_{\beta\alpha}^{-1}$; by [L2], its column transition matrix is $(g_{\beta\alpha}^{-1})^T$. Step 4.1 gives the stated Hom transition matrix. [step 4.1, L2, algebra] ∎
