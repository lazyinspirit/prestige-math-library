---
id: lem-affine-morphism-cohomology-pushforward
kind: lemma
title: "Affine pushforward is compatible with sheaf cohomology"
status: published
origin: pipeline
deps:
  - def-affine-morphism-schemes
  - def-direct-image-sheaf
  - def-flasque-sheaf
  - thm-godement-resolution-flasque
  - lem-ringed-space-module-sheaves-enough-injectives
  - thm-flasque-sheaves-acyclic
  - thm-acyclic-resolution-theorem-for-right-derived-functors
  - lem-higher-direct-image-local-section-formula
  - def-higher-direct-image-sheaf
  - thm-affine-morphism-higher-direct-images-qc-vanish
  - def-sheaf-cohomology-derived-global-sections
  - def-quasi-coherent-module-scheme
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice and Dependent Choice, inherited from the derived
functors and the Godement resolution. Let $f:X\to S$ be an affine morphism of
schemes ([[def-affine-morphism-schemes]]) and let $\mathcal F$ be a
quasi-coherent $\mathcal O_X$-module
([[def-quasi-coherent-module-scheme]]). Then the natural maps
$$H^q(S,f_*\mathcal F)\longrightarrow H^q(X,\mathcal F)$$
of sheaf cohomology ([[def-sheaf-cohomology-derived-global-sections]]) are
isomorphisms for every $q\ge0$; the pushforward $f_*\mathcal F$ is the direct
image sheaf ([[def-direct-image-sheaf]]). The empty source, empty target, zero
module and identity morphism are included, and $q=0$ is the identity
$f_*\mathcal F(S)=\mathcal F(X)$ under the definition of the direct image.

## Facts & Assumptions

**Given:** An affine morphism $f:X\to S$ and a quasi-coherent
$\mathcal O_X$-module $\mathcal F$.

[F1] Godement resolution: every abelian sheaf $\mathcal G$ on a space $X$ has a
resolution $0\to\mathcal G\to C^\bullet(\mathcal G)$ by flasque sheaves, and
there are natural isomorphisms $H^q(X,\mathcal G)\cong H^q(\Gamma(X,C^\bullet(\mathcal G)))$
for all $q\ge0$; the Axiom of Choice is used in its construction.
([[thm-godement-resolution-flasque]])

[F2] Flasque means that every restriction map on open subsets is surjective;
restrictions of flasque sheaves to open subspaces are flasque.
([[def-flasque-sheaf]])

[F3] The direct image is defined on open $V\subseteq S$ by
$(f_*\mathcal G)(V)=\mathcal G(f^{-1}V)$ with the restriction maps of
$\mathcal G$. ([[def-direct-image-sheaf]])

[F4] Flasque sheaves are acyclic for global sections on every open subspace:
$H^q(W,\mathcal G|_W)=0$ for $q>0$ and $W$ open.
([[thm-flasque-sheaves-acyclic]])

[F5] Local-section formula: $R^qf_*\mathcal G$ is the sheafification of
$V\mapsto H^q(f^{-1}V,\mathcal G)$ over open $V\subseteq S$; equivalently its
stalks are the corresponding filtered colimits over the affine opens of $S$.
([[lem-higher-direct-image-local-section-formula]],
[[def-higher-direct-image-sheaf]])

[F6] $f$ affine means that $f^{-1}V$ is affine for every affine open
$V\subseteq S$. ([[def-affine-morphism-schemes]])

[F7] Acyclic-resolution theorem: if $J^\bullet$ is a resolution of an object
$A$ by $F$-acyclic objects for an additive left exact functor $F$, then
$R^nF(A)\cong H^n(F(J^\bullet))$ canonically, under the stated
supplied-injective-data hypotheses, which hold for the module categories of
schemes and their direct-image functors. Dependent Choice is assumed.
([[thm-acyclic-resolution-theorem-for-right-derived-functors]])

[F8] Affine vanishing: for affine $f$ and quasi-coherent $\mathcal F$ one has
$R^qf_*\mathcal F=0$ for every $q>0$.
([[thm-affine-morphism-higher-direct-images-qc-vanish]])

[F9] The category of $\mathcal O_X$-modules is abelian; its kernels and cokernels have the same underlying abelian sheaves as the corresponding kernels and cokernels in the abelian-sheaf category. ([[lem-ringed-space-module-sheaves-enough-injectives]])

## Proof

**Proof technique:** direct: push the Godement flasque resolution forward along the affine morphism, where flasque terms stay flasque and the cohomology sheaves vanish above degree zero, and compare the two acyclic resolutions.

1.1 Apply the Godement construction of [F1] to the underlying abelian sheaf of $\mathcal F$, retaining its module structure at every stage. Explicitly, for an $\mathcal O_X$-module $\mathcal G$, the first Godement term has $C^0(\mathcal G)(V)=\prod_{x\in V}\mathcal G_x$, with $a\in\mathcal O_X(V)$ acting in the $x$-coordinate through $a_x\in\mathcal O_{X,x}$. The germ map $\mathcal G\to C^0(\mathcal G)$ is $\mathcal O_X$-linear; take its cokernel in $\mathrm{Mod}(\mathcal O_X)$ and repeat. By [F9] the resulting kernels and cokernels have the same underlying abelian sheaves as in the abelian-sheaf construction, so this gives an exact resolution $0\to\mathcal F\to G^\bullet$ by $\mathcal O_X$-modules whose underlying abelian complex is the Godement resolution. Every $G^p$ is flasque and $H^q(X,\mathcal F)\cong H^q(\Gamma(X,G^\bullet))$ naturally in $\mathcal F$ by [F1]. [F1, F9, construct]

1.2 For every $p$ the sheaf $f_*G^p$ is flasque: by [F3] its sections on an open $V\subseteq S$ are those of $G^p$ on $f^{-1}V$, and for $V'\subseteq V$ the restriction map of $f_*G^p$ is the restriction map of $G^p$ along the open inclusion $f^{-1}V'\subseteq f^{-1}V$, which is surjective by [F2]. [F2, F3]

1.3 Every flasque sheaf $\mathcal G$ on $X$ is $f_*$-acyclic, that is $R^qf_*\mathcal G=0$ for all $q>0$. Indeed, let $V\subseteq S$ be affine; then $f^{-1}V$ is affine by [F6] and $H^q(f^{-1}V,\mathcal G)=0$ for $q>0$ by [F4]. The local-section formula [F5] exhibits $R^qf_*\mathcal G$ as the sheafification of the presheaf $V\mapsto H^q(f^{-1}V,\mathcal G)$, and as in the proof of [F8] its stalks are filtered colimits over the affine opens of $S$, all of whose values vanish; hence these stalks are zero and $R^qf_*\mathcal G=0$. [F4, F5, F6, F8]

2.1 Apply the acyclic-resolution theorem [F7] to the left exact functor $f_*$ and the resolution $G^\bullet$ of $\mathcal F$, all of whose terms are $f_*$-acyclic by step 1.3: there are canonical isomorphisms $R^qf_*\mathcal F\cong H^q(f_*G^\bullet)$ for every $q\ge0$. Since $f$ is affine and $\mathcal F$ quasi-coherent, [F8] gives $R^qf_*\mathcal F=0$ for $q>0$; therefore the complex $f_*G^\bullet$ is a resolution of $f_*\mathcal F$ by flasque sheaves, the degree-zero cohomology being $H^0(f_*G^\bullet)=f_*\mathcal F$ by left exactness of $f_*$. [F7, F8, step 1.2, step 1.3]

3.1 Apply [F7] to the global-sections functor $\Gamma_S$ and the resolution $f_*G^\bullet$ of $f_*\mathcal F$ from step 2.1, whose terms are flasque, hence $\Gamma_S$-acyclic by [F4]: there are canonical isomorphisms $H^q(S,f_*\mathcal F)\cong H^q(\Gamma(S,f_*G^\bullet))$ for every $q\ge0$. Since $\Gamma(S,f_*G^p)=G^p(X)=\Gamma(X,G^p)$ by [F3], the right-hand cohomology is $H^q(\Gamma(X,G^\bullet))$, which is $H^q(X,\mathcal F)$ through the natural isomorphism of step 1.1. Composing gives an isomorphism $H^q(S,f_*\mathcal F)\to H^q(X,\mathcal F)$ for every $q\ge0$. [F3, F4, F7, step 1.1, step 2.1]

4.1 Naturality and canonical identification. The Godement construction in step 1.1 is functorial in $\mathcal F$, and the acyclic-resolution comparison isomorphisms in steps 2.1 and 3.1 are natural by [F7]. Their composite is therefore the canonical map obtained by evaluating the same complex first as $\Gamma_S(f_*G^\bullet)$ and then as $\Gamma_X(G^\bullet)$ under the identity of functors $\Gamma_S\circ f_*=\Gamma_X$; in degree zero it is the identity on $\mathcal F(X)$. Boundary cases: if $X=\varnothing$ or $\mathcal F=0$ then $f_*\mathcal F=0$ and both sides vanish; if $S=\varnothing$ both sides are zero sheaves on the empty space; if $f$ is the identity then the comparison is the identity map. The Axiom of Choice is inherited from [F1] and [F4], and Dependent Choice from [F7]; no other selection is made. [F7, step 1.1, step 2.1, step 3.1] ∎
