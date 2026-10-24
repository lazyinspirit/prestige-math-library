---
id: def-twist-quasi-coherent-sheaf-projective
kind: definition
title: "Twists of a quasi-coherent sheaf"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-twisting-sheaf-proj
  - def-sheaf-tensor-product
  - def-invertible-sheaf
  - def-ample-invertible-sheaf
  - thm-twisting-sheaf-invertible-standard-graded
  - lem-tensor-qc-modules-quasi-coherent
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  audited: 2026-09-30
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $S=\bigoplus_{d\ge0}S_d$ be a commutative nonnegatively graded ring that
is generated as an $S_0$-algebra by its degree one part $S_1$, and let
$$X=\operatorname{Proj}S$$
with twisting sheaves $\mathcal O_X(d)=\widetilde{S(d)}$
([[def-twisting-sheaf-proj]]). By
[[thm-twisting-sheaf-invertible-standard-graded]] each $\mathcal O_X(d)$ is
invertible ([[def-invertible-sheaf]]), and the multiplication maps
$\mathcal O_X(m)\otimes_{\mathcal O_X}\mathcal O_X(n)\to\mathcal O_X(m+n)$ are
isomorphisms.

**Fixed embedding.** The scheme $X$ is considered together with this fixed
choice of degree-one generated presentation. Let $\mathcal F$ be an
$\mathcal O_X$-module. For every integer $d\in\mathbb Z$ the **$d$-th twist**
of $\mathcal F$ is the tensor product of sheaves of modules
([[def-sheaf-tensor-product]])
$$\mathcal F(d)\;:=\;\mathcal F\otimes_{\mathcal O_X}\mathcal O_X(d).$$
Thus $\mathcal F(d)$ is again an $\mathcal O_X$-module, and for $d=0$ one has
$\mathcal F(0)=\mathcal F\otimes_{\mathcal O_X}\mathcal O_X$, with the
canonical morphism $\mathcal F(0)\to\mathcal F$ induced by the multiplication
maps of [[def-twisting-sheaf-proj]]; this morphism is an isomorphism because
$\mathcal O_X(0)=\mathcal O_X$. For all integers $m,n$ the isomorphisms above
induce canonical isomorphisms
$$\mathcal F(m)\otimes_{\mathcal O_X}\mathcal O_X(n)\cong\mathcal F(m+n),\qquad \mathcal O_X(m)\otimes_{\mathcal O_X}\mathcal F(n)\cong\mathcal F(m+n).$$

**Quasi-coherence.** If $\mathcal F$ is quasi-coherent then so is every twist
$\mathcal F(d)$: the invertible sheaf $\mathcal O_X(d)$ is quasi-coherent, and
the tensor product of two quasi-coherent modules is quasi-coherent by
[[lem-tensor-qc-modules-quasi-coherent]].

**General ample line bundles.** If instead $L$ is an invertible
$\mathcal O_X$-module ([[def-invertible-sheaf]]) — for instance an ample one
([[def-ample-invertible-sheaf]]) — then for $d\ge0$ one writes
$$L^d:=L^{\otimes d}=L\otimes_{\mathcal O_X}\cdots\otimes_{\mathcal O_X}L$$
($d$ factors, $L^0=\mathcal O_X$) and for $d<0$ one writes
$L^d:=(L^{\vee})^{-d}$, where $L^{\vee}=\mathcal{H}om_{\mathcal O_X}(L,\mathcal O_X)$ is the inverse invertible sheaf of
[[def-invertible-sheaf]]; the corresponding twist of $\mathcal F$ is
$\mathcal F\otimes_{\mathcal O_X}L^d$. For these powers only the pair
$(X,L)$ is used, with no presentation of $X$ implicit.

**No silent change of embedding.** The notation $\mathcal F(d)$ is reserved
for the twisting determined by the fixed invertible sheaf
$\mathcal O_X(1)$ of the chosen presentation $\operatorname{Proj}S$ (or, for a
projectively embedded scheme, by the pullback of $\mathcal O(1)$ along the
fixed embedding). When the embedding or the line bundle changes, the twist is
written explicitly as $\mathcal F\otimes_{\mathcal O_X}L^d$, so that
$\mathcal F(d)$ never silently switches the embedding.
