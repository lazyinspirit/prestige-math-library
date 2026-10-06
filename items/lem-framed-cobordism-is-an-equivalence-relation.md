---
id: lem-framed-cobordism-is-an-equivalence-relation
kind: lemma
title: "Framed cobordism is an equivalence relation"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps:
  - thm-heine-borel-r
  - thm-finite-products-of-compact-spaces
  - def-framed-cobordism-of-embedded-submanifolds
  - def-framing-of-a-normal-bundle
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - thm-chain-rule-for-differentials-of-smooth-maps
  - def-equivalence-relation
  - def-neat-submanifold-of-a-manifold-with-boundary
  - def-smooth-manifold
  - def-compact-space
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - thm-compactness-under-continuous-maps
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "Section 7, 'Again this is an equivalence relation', printed p.43; proof of Theorem B, printed p.50"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Lemma 1.25 and Exercise 1.26 (reflexivity, symmetry, transitivity of bordism), printed pp.9-10"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Definition 6.16 and Remark 6.19, electronic p.114"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For every closed smooth
manifold $X$ and every $k\ge0$, framed cobordism of closed framed
codimension-$k$ submanifolds of $X$
([[def-framed-cobordism-of-embedded-submanifolds]]) is an equivalence relation.

Reflexivity is realised by the cylinder $N\times I\subseteq X\times I$ together
with the pullback of $\varphi$ along $\operatorname{pr}_N$; symmetry is realised
by the reflection $\rho(x,t)=(x,1-t)$ of $X\times I$ with the framing transported
across $d\rho$; transitivity is realised by gluing two framed cobordisms along
their common product end, the framings agreeing on the whole overlap collar.

## Facts & Assumptions

**Given:** A closed smooth manifold $X$, an integer $k\ge0$, and the definition of a framed cobordism $(W,\varepsilon,\Psi)$ from $(N_0,\varphi_0)$ to $(N_1,\varphi_1)$.

[F1] A framed cobordism consists of a compact neat embedded submanifold $W\subseteq X\times I$ with $\partial W=N_0\times\{0\}\sqcup N_1\times\{1\}$, product ends $W\cap(X\times[0,\varepsilon))=N_0\times[0,\varepsilon)$ and $W\cap(X\times(1-\varepsilon,1])=N_1\times(1-\varepsilon,1]$, and a framing $\Psi:\nu(W\subseteq X\times I)\to W\times\mathbb R^k$ that on each end collar is the pullback of $\varphi_i$ under the canonical identification $\nu(W)|_{N_i\times\Theta_i}\cong\operatorname{pr}^*\nu(N_i\subseteq X)$ ([[def-framed-cobordism-of-embedded-submanifolds]], [[def-framing-of-a-normal-bundle]], [[def-neat-submanifold-of-a-manifold-with-boundary]]).

[F2] If $N\subseteq X$ is a closed embedded submanifold then $N\times I\subseteq X\times I$ is a closed embedded submanifold for the product smooth structures, and the product structure identifies $\nu(N\times I\subseteq X\times I)$ with $\operatorname{pr}_N^*\nu(N\subseteq X)$ because the $I$-direction is tangent to $N\times I$ ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]], [[def-smooth-manifold]]).

[F3] The maps $\rho(x,t)=(x,1-t)$ of $X\times I$ to itself, $\sigma_1(x,t)=(x,t/2)$ of $X\times I$ onto $X\times[0,\tfrac12]$ and $\sigma_2(x,t)=(x,(t+1)/2)$ of $X\times I$ onto $X\times[\tfrac12,1]$ are diffeomorphisms, and a diffeomorphism carries neat embedded submanifolds onto neat embedded submanifolds; its differential, by the chain rule, intertwines tangent and normal quotients and preserves the product splittings $T(X\times I)=TX\oplus TI$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[thm-chain-rule-for-differentials-of-smooth-maps]]).

[F4] A closed subset of a compact Hausdorff space is compact, finite products and continuous images of compact spaces are compact, and $X$ is compact ([[def-compact-space]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-compactness-under-continuous-maps]], [[thm-finite-products-of-compact-spaces]]).

[F5] An equivalence relation on a set is a reflexive, symmetric and transitive relation ([[def-equivalence-relation]]).

## Proof

1.1 (Reflexivity.) Let $(N,\varphi)$ be a closed framed codimension-$k$ submanifold of $X$. Put $W:=N\times I\subseteq X\times I$ and $\varepsilon:=\tfrac14$. By [F2] and [F4], $W$ is a compact embedded submanifold; its boundary in $X\times I$ is $N\times\{0\}\sqcup N\times\{1\}=\partial W$, and $W$ is transverse to $\partial(X\times I)=X\times\{0,1\}$ because $TW$ contains the $I$-direction, so $W$ is neat. Its ends are the literal products $N\times[0,\tfrac14)$ and $N\times(\tfrac34,1]$. By [F2] the normal bundle $\nu(W\subseteq X\times I)$ is canonically $\operatorname{pr}_N^*\nu(N\subseteq X)$; let $\Psi$ be the pullback of $\varphi$ along $\operatorname{pr}_N$ under this identification. Then $\Psi$ is a smooth bundle isomorphism and over each end collar it is the pullback of $\varphi$, so $(W,\tfrac14,\Psi)$ is a framed cobordism from $(N,\varphi)$ to $(N,\varphi)$. [F1, F2, F4, construct]

1.2 (Symmetry.) Let $(W,\varepsilon,\Psi)$ be a framed cobordism from $(N_0,\varphi_0)$ to $(N_1,\varphi_1)$. Put $\rho(x,t):=(x,1-t)$ and $W':=\rho(W)$. By [F3] $W'$ is a compact neat embedded submanifold of $X\times I$ with $\partial W'=N_1\times\{0\}\sqcup N_0\times\{1\}$, and its ends are the literal products $\rho(N_1\times(1-\varepsilon,1])=N_1\times[0,\varepsilon)$ and $\rho(N_0\times[0,\varepsilon))=N_0\times(1-\varepsilon,1]$. The differential $d\rho$ is the identity on the $TX$ factor and multiplication by $-1$ on the $TI$ factor; along an end collar the $I$-direction is tangent to $W$ and to $W'$, so $d\rho$ induces, over $\rho$, the identity map $\nu(N_i\subseteq X)\to\nu(N_i\subseteq X)$ of the canonical product identifications. Define $\Psi'$ over $W'$ by $\Psi'_{\rho(p)}:=\Psi_p\circ(\overline{d\rho_p})^{-1}$, where $\overline{d\rho_p}:\nu(W)_p\to\nu(W')_{\rho(p)}$ is the quotient isomorphism induced by $d\rho_p$. Then $\Psi'$ is a smooth bundle isomorphism $\nu(W'\subseteq X\times I)\to W'\times\mathbb R^k$ which on the collar $N_1\times[0,\varepsilon)$ is the pullback of $\varphi_1$ and on $N_0\times(1-\varepsilon,1]$ the pullback of $\varphi_0$. Hence $(W',\varepsilon,\Psi')$ is a framed cobordism from $(N_1,\varphi_1)$ to $(N_0,\varphi_0)$. [F1, F3, construct]

1.3 (Transitivity, construction.) Let $(W_1,\varepsilon_1,\Psi_1)$ be a framed cobordism from $(N_0,\varphi_0)$ to $(N_1,\varphi_1)$ and $(W_2,\varepsilon_2,\Psi_2)$ one from $(N_1,\varphi_1)$ to $(N_2,\varphi_2)$. Put $\varepsilon:=\min(\varepsilon_1,\varepsilon_2)$, define $\sigma_1(x,t):=(x,t/2)$ and $\sigma_2(x,t):=(x,(t+1)/2)$, and set $W_1^*:=\sigma_1(W_1)\subseteq X\times[0,\tfrac12]$, $W_2^*:=\sigma_2(W_2)\subseteq X\times[\tfrac12,1]$ and $W:=W_1^*\cup W_2^*$. By [F3] each $W_i^*$ is a compact neat embedded submanifold, with $\partial W_1^*=N_0\times\{0\}\sqcup N_1\times\{\tfrac12\}$ and $\partial W_2^*=N_1\times\{\tfrac12\}\sqcup N_2\times\{1\}$. [F1, F3, construct]

2.1 (Transitivity: $W$ is a neat submanifold carrying a framing.) Near $t=\tfrac12$ one has $W_1^*\cap(X\times(\tfrac12-\tfrac{\varepsilon}{2},\tfrac12])=N_1\times(\tfrac12-\tfrac{\varepsilon}{2},\tfrac12]$ and $W_2^*\cap(X\times[\tfrac12,\tfrac12+\tfrac{\varepsilon}{2}))=N_1\times[\tfrac12,\tfrac12+\tfrac{\varepsilon}{2})$, so $W\cap(X\times(\tfrac12-\tfrac{\varepsilon}{2},\tfrac12+\tfrac{\varepsilon}{2}))=N_1\times(\tfrac12-\tfrac{\varepsilon}{2},\tfrac12+\tfrac{\varepsilon}{2})$ is a product piece. Every point of $W$ with $t\ne\tfrac12$ lies in $W_1^*\cap(X\times[0,\tfrac12))$ or in $W_2^*\cap(X\times(\tfrac12,1])$, which are open pieces of the smooth submanifolds $W_i^*$; those two pieces and the product piece cover $W$, and on their overlaps (subsets of the product piece) the three descriptions agree. Hence $W$ is a compact neat embedded submanifold of $X\times I$ with $\partial W=N_0\times\{0\}\sqcup N_2\times\{1\}$ and with the literal product ends $N_0\times[0,\tfrac{\varepsilon}{2})$ and $N_2\times(1-\tfrac{\varepsilon}{2},1]$. [F1, F3, step 1.3] Transport $\Psi_1$ across $\sigma_1$ and $\Psi_2$ across $\sigma_2$ as in step 1.2. Since $\sigma_i$ preserves the splitting $T(X\times I)=TX\oplus TI$ up to a positive scale in $TI$, the transported framings are smooth bundle isomorphisms $\nu(W_i^*\subseteq X\times I)\to W_i^*\times\mathbb R^k$, the first equal to the pullback of $\varphi_1$ on the collar $N_1\times(\tfrac12-\tfrac{\varepsilon}{2},\tfrac12]$ and the second equal to the pullback of $\varphi_1$ on $N_1\times[\tfrac12,\tfrac12+\tfrac{\varepsilon}{2})$. These two collars cover the overlap region just described, where both transported framings are the pullback of $\varphi_1$ under the canonical identification $\nu(W)|_{N_1\times\Theta}\cong\operatorname{pr}^*\nu(N_1\subseteq X)$; away from the overlap each is smooth. Hence they define one smooth bundle isomorphism $\Psi:\nu(W\subseteq X\times I)\to W\times\mathbb R^k$, which on the outer ends is the pullback of $\varphi_0$ and of $\varphi_2$. Therefore $(W,\tfrac{\varepsilon}{2},\Psi)$ is a framed cobordism from $(N_0,\varphi_0)$ to $(N_2,\varphi_2)$. [F1, F3, step 1.2, step 1.3]

3.1 (Conclusion.) Steps 1.1, 1.2 and 2.1 exhibit reflexivity, symmetry and transitivity of framed cobordism for arbitrary closed $X$, $k\ge0$ and framed submanifolds, including the empty manifold and the rank-zero case $k=0$, where all framings are unique. By [F5] framed cobordism is an equivalence relation. No orientation, no metric and no choice beyond the inherited $\mathrm{AC}_\omega$ is used: all constructions are explicit, and the only choice-dependent input is the smooth normal-bundle structure of [F1]. [F1, F5, step 1.1, step 1.2, step 2.1] ∎
