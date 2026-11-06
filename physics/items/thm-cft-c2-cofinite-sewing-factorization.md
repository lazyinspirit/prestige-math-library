---
id: thm-cft-c2-cofinite-sewing-factorization
kind: theorem
title: Sewing-factorization for C2-cofinite VOA conformal blocks
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
deps:
- thm-cft-dual-fusion-product-existence
- thm-cft-dual-fusion-product-sewing-factorization
- thm-cft-conformal-block-sheaves-locally-free
- thm-cft-c2-cofinite-analytic-sewing-convergence
- lem-cft-plumbing-proper-analytic-family
- thm-cft-dual-fusion-hom-sheaf-finite-locally-free
- thm-cft-dual-fusion-hom-block-identification
- def-cft-voa-conformal-block-and-dual-fusion-product
- def-cft-plumbing-and-sewing-parameter
- lem-cft-plumbing-local-smoothing-node
- def-cft-contragredient-generalized-module
- thm-cft-contragredient-generalized-module
- def-c2-cofinite-vertex-algebra
- def-grading-restricted-generalized-vertex-module
- def-axiom-of-choice
- thm-cft-contragredient-double-dual-isomorphism
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  thm-cft-dual-fusion-product-existence: mathematical-premise
  thm-cft-dual-fusion-product-sewing-factorization: mathematical-premise
  thm-cft-conformal-block-sheaves-locally-free: mathematical-premise
  thm-cft-c2-cofinite-analytic-sewing-convergence: mathematical-premise
  lem-cft-plumbing-proper-analytic-family: mathematical-premise
  thm-cft-dual-fusion-hom-sheaf-finite-locally-free: mathematical-premise
  thm-cft-dual-fusion-hom-block-identification: mathematical-premise
  def-cft-voa-conformal-block-and-dual-fusion-product: mathematical-premise
  def-cft-plumbing-and-sewing-parameter: mathematical-premise
  lem-cft-plumbing-local-smoothing-node: mathematical-premise
  def-cft-contragredient-generalized-module: mathematical-premise
  thm-cft-contragredient-generalized-module: mathematical-premise
  def-c2-cofinite-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-cft-contragredient-double-dual-isomorphism: mathematical-premise
axiom_use: Full AC is inherited through the pointed-surface and analytic sewing suppliers;
  the coend argument uses no additional physical hypothesis.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex
      Operator Algebras III: The Sewing-Factorization Theorems'
    url: https://arxiv.org/pdf/2503.23995v4
    locator: Theorems 3.7 and 3.13–3.14, §§3.2–3.3, PDF pp. 54–59; the coend and family
      maps are reconstructed below. Definition 3.11 gives the assumed family-product
      convention.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be a C2-cofinite conformal vertex algebra of CFT type over $\mathbb C$, and let $F$ and $G$ be compact pointed Riemann surfaces with finitely many incoming points and $R\geq1$ paired outgoing points carrying disjoint local coordinates. Assume every component of $F$ meets an incoming point and every component of $G$ meets an incoming or paired outgoing point. Assign grading-restricted generalized $V^{\otimes N}$- and $V^{\otimes K}$-modules $W$ and $X$ to the incoming points. For nonzero sewing parameters in the allowed polydisk with fixed arguments, let $F\#_{\mathbf q}G$ be the sewn surface. Let $\mathcal C_R$ be the category of grading-restricted generalized $V^{\otimes R}$-modules. For $M\in\mathcal C_R$, set $F(M)=\mathcal T_F^*(W\otimes M)$ and $G(M)=\mathcal T_G^*(X\otimes M')$, with incoming factors ordered before outgoing factors. For a module map $f:M\to N$, precomposition defines $F(f):F(N)\to F(M)$, while the contragredient map $f':N'\to M'$ defines $G(f):G(M)\to G(N)$. A family $\delta_M:F(M)\otimes G(M)\to Z$ is **dinatural** if $\delta_M(F(f)x\otimes y)=\delta_N(x\otimes G(f)y)$ for every $f:M\to N$, $x\in F(N)$, and $y\in G(M)$. The **coend** is a vector space with a dinatural family universal among such families; its existence is established in the Proof by an explicit representing object. Take a dual fusion product $(D_F(W),\gamma_F)$ with representing bijections $\operatorname{Hom}_{V^{\otimes R}}(M,D_F(W))\cong F(M)$. Then convergent sewing induces an isomorphism
$$
\int^{M\in\mathcal C_R}\mathcal T_F^*(W\otimes M)\otimes_{\mathbb C}\mathcal T_G^*(X\otimes M')\ \cong\ \mathcal T_{F\#_{\mathbf q}G}^*(W\otimes X).
$$
This coend over generalized modules is the nonsemisimple formulation; it is not replaced by a direct sum over simple modules and requires no rationality or self-duality assumption.

For analytic families $\widetilde F,\widetilde G\to B$, assume each component of every fiber of $\widetilde F$ meets an incoming section. In the first family form assume also every component of every fiber of $\widetilde G$ meets an incoming section; in the second form every component of every fiber of $\widetilde G$ must meet an incoming or paired outgoing section. Whenever the indicated dual-fusion products exist over $B$, the following family forms hold. If both $D_F(W)$ and $D_G(X)$ exist, the sewing map is an isomorphism of sheaves
$$
\mathrm{Hom}_{V^{\otimes R}}(D_G(X)',D_F(W))\otimes_{\mathbb C}\mathcal O_B\ \cong\ \mathcal T_{\widetilde F\#_{\mathbf q}\widetilde G}^*(W\otimes X).
$$
If only $D_F(W)$ is assumed and each fiber component of $\widetilde G$ meets an incoming point or a paired outgoing point, the corresponding sheaf map from $\mathcal T_{\widetilde G}^*(X\otimes D_F(W)')$ to the sewn-family conformal-block sheaf is also an isomorphism.

## Statement references

[[thm-cft-dual-fusion-product-existence]]

[[thm-cft-dual-fusion-product-sewing-factorization]]

[[thm-cft-conformal-block-sheaves-locally-free]]

[[thm-cft-c2-cofinite-analytic-sewing-convergence]]

[[thm-cft-dual-fusion-hom-sheaf-finite-locally-free]]

[[thm-cft-dual-fusion-hom-block-identification]]

[[lem-cft-plumbing-proper-analytic-family]]

[[def-cft-voa-conformal-block-and-dual-fusion-product]]

[[def-cft-contragredient-generalized-module]]

## Facts & Assumptions

**Given:** The C2-cofinite CFT-type VOA, the pointed surfaces and module assignments, nonzero sewing parameters with fixed arguments, and the dual-fusion products required by each family version.

[F1] [[thm-cft-dual-fusion-product-existence]]: every fixed-surface dual fusion product has its stated representing property; the partial-block outgoing module, its grading restriction and universal evaluation are now proved locally.

[F2] [[thm-cft-dual-fusion-product-sewing-factorization]]: for each fixed pair of surfaces, sewing through a chosen dual fusion product is a linear isomorphism; its local proof is supplied by the explicit cylinder coefficient inverse and the finite-weight contraction argument.

[F3] [[thm-cft-c2-cofinite-analytic-sewing-convergence]]: the Segal sewing series converges and defines a conformal block; ordinary and projective-trace convergence are now supplied by local proofs with their exact stated hypotheses.

[F4] [[thm-cft-conformal-block-sheaves-locally-free]]: under the component/mark conditions, the sheaves of conformal blocks on the smooth families in the family version are finite locally free; the relative pole lifting, actual Ward-preserving Virasoro matrices and common-neighborhood transport proof are now supplied locally.

[F5] [[thm-cft-contragredient-generalized-module]] and [[thm-cft-contragredient-double-dual-isomorphism]]: the joint restricted contragredient of each grading-restricted generalized module is again a module. Restricted transposition sends module maps to module maps, preserves identities, and satisfies $(g\circ f)'=f'\circ g'$. These algebraic properties are now proved locally, including the componentwise joint-weight setting.

[F6] [[thm-cft-dual-fusion-hom-sheaf-finite-locally-free]]: when both dual fusion products exist in the family setting, the constant Hom sheaf in the first family form is finite locally free. This constant-sheaf assertion is proved locally by finite generation, finite joint-weight blocks and restriction of module maps.

[F7] [[thm-cft-dual-fusion-hom-block-identification]]: for fixed worldsheets and given dual fusion products, the representing property and contragredient duality give the natural linear identification $\mathcal T_G^*(X\otimes D_F(W)')\cong\operatorname{Hom}_{V^{\otimes R}}(D_G(X)',D_F(W))$. This algebraic identification is proved locally; the explicit holomorphic family map is constructed below.

[F8] In the Statement, existence of a dual fusion product over B means a fixed admitted module together with a holomorphic family universal block whose specialization represents each fiber. This is the family object, not a claim that arbitrary fiberwise choices admit a holomorphic trivialization. For $D_G(X)$ write its specified universal block as $\gamma_{G,b}$. The construction below uses this holomorphic block and does not assert existence of family products on an arbitrary base. This spells out the family-existence hypothesis already present in the Statement, in the convention of the source's Definition3.11.

## Proof

1.1 Put $E=\mathcal T_G^*(X\otimes D_F(W)')$. For each $M\in\mathcal C_R$ and $\psi\in F(M)$, the representing bijection [F1] gives a unique module map $T_\psi:M\to D_F(W)$ with $\psi=F(T_\psi)(\gamma_F)$. Define $j_M:F(M)\otimes G(M)\to E$ on pure tensors by $j_M(\psi\otimes\chi)=G(T_\psi)(\chi)=\chi\circ(\mathrm{id}_X\otimes T_\psi')$, and extend linearly. [given, F1, F5, construct]

1.2 We construct the first-family identification. For a constant module map $g:D_G(X)'\to D_F(W)$ put $f=e_{D_G(X)}^{-1}g':D_F(W)'\to D_G(X)$, using the natural double-dual identification of F5. Define
$$\Theta(g)_b(x\otimes a')=\gamma_{G,b}(x\otimes f(a')).$$
Every evaluation on fixed x and a' is holomorphic by F8, and module-map naturality makes it a block. Extend this formula $\mathcal O_B$-linearly. The source is finite locally free by F6; the target block sheaf on G is finite locally free and has its actual block fibers by F4. On each fiber Theta is exactly the fixed algebraic isomorphism F7. In local frames its holomorphic matrix is square and has nonzero determinant on every fiber; its adjugate divided by that determinant gives a holomorphic inverse. The formula commutes with holomorphic restriction and base change because it only evaluates the specified universal block and fixed module maps; F4 identifies the pulled-back target sheaf. Hence Theta is the full required family isomorphism. For the second family form the source block sheaf is finite locally free directly by F4. In either form F3 gives a holomorphic sewing morphism and F4 identifies its target fibers. On each fiber its map is F2, using Theta and F7 in the first form. Thus both family sewing maps have invertible fiber maps, under precisely the original component hypotheses. [given, F2, F3, F4, F5, F6, F7, F8, construct]

2.1 For $f:M\to N$, $x\in F(N)$, and $y\in G(M)$, the representing bijection gives $T_{F(f)x}=T_x\circ f$. Since the contragredient reverses composition, $(T_x\circ f)'=f'\circ T_x'$, so $j_M(F(f)x\otimes y)=G(T_x\circ f)(y)=G(T_x)(G(f)y)=j_N(x\otimes G(f)y)$. Thus $(j_M)_M$ is dinatural. [given, F1, F5, step 1.1, algebra]

3.1 Let $Z$ be any vector space and let $\delta_M:F(M)\otimes G(M)\to Z$ be dinatural. Define $\Phi:E\to Z$ by $\Phi(\eta)=\delta_{D_F(W)}(\gamma_F\otimes\eta)$. Dinaturality for $T_\psi:M\to D_F(W)$ gives $\Phi(j_M(\psi\otimes\chi))=\delta_M(\psi\otimes\chi)$, so $\Phi\circ j_M=\delta_M$ for every $M$. The representing property sends $\gamma_F$ to $\mathrm{id}_{D_F(W)}$, hence $j_{D_F(W)}(\gamma_F\otimes\eta)=\eta$; therefore every element of $E$ lies in the image of $j_{D_F(W)}$ and any factorization map must equal $\Phi$. This proves the universal property and the existence of the coend. [given, F1, step 1.1, step 2.1, construct]

4.1 Compose the coend's universal identification $E\cong\int^{M\in\mathcal C_R}F(M)\otimes G(M)$ from step 3.1 with the fixed-surface sewing isomorphism [F2]. The latter is evaluated by the convergent sewing series and lands in the conformal-block space of the sewn smooth surface by [F3]. This proves the fixed-surface coend statement using the now proved inputs F1–F3. [given, F1, F2, F3, step 3.1, algebra]

5.1 Around any base point choose local frames for the two finite locally free sheaves. The sheaf morphism is represented by a holomorphic square matrix, and each fiber map is invertible by step 1.2. Its determinant is therefore nonzero on a neighborhood; the adjugate divided by that determinant gives a holomorphic local inverse. These neighborhoods cover $B$, so each family map is an isomorphism of sheaves. [given, F4, F6, step 1.2, algebra] ∎

## Coend dinaturality diagram

For a morphism $f:M\to N$, the square has top map $F(f)\otimes\mathrm{id}$, left map $\mathrm{id}\otimes G(f)$, and right/bottom maps given by the family $j$ constructed in step 1.1. Step 2.1 proves the square commutes for every $x\in F(N)$ and $y\in G(M)$; the diagram records that equality and is not used instead of the algebraic verification.

```tikzcd
F(N)\otimes G(M) \arrow[r,"F(f)\otimes\mathrm{id}"] \arrow[d,"\mathrm{id}\otimes G(f)"'] & F(M)\otimes G(M) \arrow[d,"j_M"] \\
F(N)\otimes G(N) \arrow[r,"j_N"'] & E
```

## Proof scope

The fixed-surface coend and both family forms are proved with the full generalized-module scope. The family forms retain their original hypothesis that the indicated family dual-fusion products exist, including their holomorphic universal evaluation blocks; the proof does not construct such products on an arbitrary base. The cylinder inverse is an actual coefficient inverse, and the family Hom/block map is given by the displayed evaluation formula. No semisimple replacement of the coend, rationality, or self-duality is used.
