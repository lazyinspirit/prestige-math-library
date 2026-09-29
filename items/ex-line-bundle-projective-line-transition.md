---
id: ex-line-bundle-projective-line-transition
kind: example
title: Twists on the two-affine projective line
status: draft
origin: pipeline
deps:
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - lem-invertible-sheaf-dual-tensor-inverse
  - def-sheaf-hom
  - def-sheaf-tensor-product
  - thm-universal-property-of-module-tensor-products
  - thm-gluing-sheaves
  - def-gluing-datum-sheaves
  - def-module-on-ringed-space
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "Gao and Zhang, Lectures on Algebraic Geometry, projective-line gluing"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
pipeline_run: frontier-36-complete
---

## Example

Assume the Axiom of Choice, inherited from the gluing construction. Let $k$ be
a field and let $\mathbb P^1_k=U_0\cup U_\infty$ be the two-affine projective
line, with charts $U_0=\operatorname{Spec}k[t]$ and
$U_\infty=\operatorname{Spec}k[u]$, whose coordinates satisfy $u=t^{-1}$ on
the overlap $W=U_0\cap U_\infty=\operatorname{Spec}k[t,t^{-1}]$, and with
$\mathcal O(n)$, $n\in\mathbb Z$, the sheaves glued from the structure sheaves
of the two charts by the frame relation $e_\infty=t^ne_0$
([[def-projective-line-two-affine-cover-and-twisting-sheaf]]).

Then:

1. For every $n\in\mathbb Z$ the sheaf $\mathcal O(n)$ is invertible, with
   $e_0$ and $e_\infty$ nowhere-vanishing local generators on $U_0$ and
   $U_\infty$; the relation inverts to $e_0=t^{-n}e_\infty$, and
   $\mathcal O(0)=\mathcal O_{\mathbb P^1_k}$
   ([[def-invertible-sheaf]]).
2. The dual has the negated index,
   $$\mathcal O(n)^\vee\cong\mathcal O(-n),$$
   where $\mathcal O(n)^\vee=\mathcal H om_{\mathcal O_X}(\mathcal O(n),\mathcal O_X)$
   ([[def-sheaf-hom]]) and the dual frames satisfy
   $e_\infty^\vee=t^{-n}e_0^\vee$ on $W$.
3. The tensor product adds the indices,
   $$\mathcal O(n)\otimes_{\mathcal O_X}\mathcal O(m)\cong\mathcal O(n+m),$$
   compatibly with the frames: $e_0^{(n)}\otimes e_0^{(m)}\mapsto e_0^{(n+m)}$
   and $e_\infty^{(n)}\otimes e_\infty^{(m)}\mapsto e_\infty^{(n+m)}$.
4. In particular $\mathcal O(n)\otimes\mathcal O(-n)\cong\mathcal O_X$ and
   $\mathcal O(n)^{\vee\vee}\cong\mathcal O(n)$, and the example contains the
   degenerate values $n=0$ (trivial twist), $n=1$ (transition $t$) and
   negative $n$ (transition $t^n=u^{-n}$).

## Facts & Assumptions

**Given:** A field $k$; the two-affine projective line
$\mathbb P^1_k=U_0\cup U_\infty$ with $U_0=\operatorname{Spec}k[t]$,
$U_\infty=\operatorname{Spec}k[u]$, $u=t^{-1}$ on $W=U_0\cap U_\infty$; the
sheaves $\mathcal O(n)$ for $n\in\mathbb Z$ with frames $e_0,e_\infty$ related
by $e_\infty=t^ne_0$ on $W$.

[F1] The two-affine definition
([[def-projective-line-two-affine-cover-and-twisting-sheaf]]): the two charts
cover $\mathbb P^1_k$ and intersect in $W=\operatorname{Spec}k[t,t^{-1}]$ with
$tu=1$; for every $n\in\mathbb Z$ the sheaf $\mathcal O(n)$ is glued from
$\mathcal O_{U_0}$ and $\mathcal O_{U_\infty}$ with frames $e_0=1$ on $U_0$ and
$e_\infty=1$ on $U_\infty$ related on $W$ by $e_\infty=t^ne_0$, equivalently
$e_0=t^{-n}e_\infty$; each $\mathcal O(n)$ is free of rank one on each chart
with the displayed frame, hence invertible, and
$\mathcal O(0)=\mathcal O_{\mathbb P^1_k}$.

[F2] Invertible means locally free of rank one
([[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]]); the dual is
$\mathcal L^\vee=\mathcal H om_{\mathcal O_X}(\mathcal L,\mathcal O_X)$
([[def-sheaf-hom]]), the tensor product of two invertible sheaves is
invertible, and restriction to an open subscheme preserves invertibility.

[F3] For an invertible $\mathcal L$ the evaluation morphism
$\mathcal L^\vee\otimes\mathcal L\to\mathcal O_X$ is an isomorphism, and the
dual is described by transition units: if $\tau_i:\mathcal L|_{U_i}\to
\mathcal O_{U_i}$ are trivialisations with
$\tau_i\circ\tau_j^{-1}$ equal to multiplication by the unit $u_{ij}$, then the
induced trivialisations $\tau_i^\vee$ of $\mathcal L^\vee$ have transition
units $u_{ij}^{-1}$
([[lem-invertible-sheaf-dual-tensor-inverse]]).

[F4] A gluing datum on an open cover consists of sheaves on the members and
overlap isomorphisms satisfying the cocycle condition
([[def-gluing-datum-sheaves]]); the glued sheaf exists and is unique up to
unique isomorphism, so two sheaves of modules on $X$ whose restrictions to the
members of a common cover carry trivialisations with the same overlap
identifications are canonically isomorphic
([[thm-gluing-sheaves]]).

[F5] Tensor product of modules and sheaves
([[def-sheaf-tensor-product]],
[[thm-universal-property-of-module-tensor-products]]): for a commutative ring
$R$ the multiplication $R\times R\to R$ induces an isomorphism
$R\otimes_RR\to R$ with $1\otimes1\mapsto1$; consequently if
$\mathcal F|_U$ and $\mathcal G|_U$ are free of rank one with generators $e$ and
$f$, then $(\mathcal F\otimes_{\mathcal O_X}\mathcal G)|_U$ is free of rank one
with generator $e\otimes f$, because restriction commutes with the
tensor-product construction.

[F6] The Axiom of Choice as used by the gluing construction of [F1] and the
existence theorem of [F4] ([[def-axiom-of-choice]]).

**Proof technique:** direct; read off the transition units of frames, multiply
them for the tensor product and invert them for the dual, then apply the
uniqueness of glued sheaves.



## Proof

1.1 The transition units: on the overlap $W=\operatorname{Spec}k[t,t^{-1}]$ the element $t$ is a unit with inverse $u$, so for every $n\in\mathbb Z$ the relation $e_\infty=t^ne_0$ of [F1] is a relation between generators of free rank-one modules and inverts to $e_0=t^{-n}e_\infty$; the two charts cover $\mathbb P^1_k$, so each $\mathcal O(n)$ is locally free of rank one with the displayed frames, hence invertible, and $\mathcal O(0)=\mathcal O_{\mathbb P^1_k}$. [F1, F2]

2.1 The tensor product adds the indices: fix $n,m\in\mathbb Z$ and write $e_0^{(n)}$ and $e_\infty^{(n)}$ for the frames of $\mathcal O(n)$, and similarly for $m$; by [F5] the tensor product $\mathcal O(n)\otimes\mathcal O(m)$ is free of rank one on $U_0$ with generator $g_0=e_0^{(n)}\otimes e_0^{(m)}$, and free of rank one on $U_\infty$ with generator $g_\infty=e_\infty^{(n)}\otimes e_\infty^{(m)}$. On $W$ the frame relations give $g_\infty=(t^ne_0^{(n)})\otimes(t^me_0^{(m)})=t^{n+m}g_0$, and inverting gives $g_0=t^{-(n+m)}g_\infty$, so the trivialisations of $\mathcal O(n)\otimes\mathcal O(m)$ on the two charts have exactly the overlap identification $e_\infty^{(n+m)}=t^{n+m}e_0^{(n+m)}$ that defines $\mathcal O(n+m)$ in [F1]; by the uniqueness clause of [F4] there is a canonical isomorphism $\mathcal O(n)\otimes\mathcal O(m)\cong\mathcal O(n+m)$ carrying $g_0$ to $e_0^{(n+m)}$ and $g_\infty$ to $e_\infty^{(n+m)}$. [F1, F4, F5, step 1.1]

2.2 The dual negates the index: since $\mathcal O(n)$ is invertible with the trivialisations determined by the frames $e_0$ and $e_\infty$, its dual $\mathcal O(n)^\vee$ is invertible and free of rank one on each chart with the dual frames $e_0^\vee$ and $e_\infty^\vee$ characterised by $e_0^\vee(e_0)=1$ and $e_\infty^\vee(e_\infty)=1$ [F2, F3]. On $W$ one has $e_\infty=t^ne_0$, hence $(t^{-n}e_0^\vee)(e_\infty)=t^{-n}e_0^\vee(t^ne_0)=t^{-n}t^n=1$, and since the dual is free of rank one there the section with this property is unique, so $e_\infty^\vee=t^{-n}e_0^\vee$; equivalently $e_0^\vee=t^ne_\infty^\vee$, which is the overlap identification defining $\mathcal O(-n)$ in [F1], so the uniqueness clause of [F4] gives a canonical isomorphism $\mathcal O(n)^\vee\cong\mathcal O(-n)$ carrying $e_0^\vee$ to the frame of $\mathcal O(-n)$ on $U_0$ and $e_\infty^\vee$ to its frame on $U_\infty$. [F1, F2, F3, F4, step 1.1]

3.1 The degenerate values and choice accounting: taking $n=0$ in step 2.1 gives $\mathcal O(0)\otimes\mathcal O(m)\cong\mathcal O(m)$, and $\mathcal O(0)=\mathcal O_{\mathbb P^1_k}$ by step 1.1, so $\mathcal O(0)$ is the tensor unit; taking $m=-n$ and using step 2.2 gives $\mathcal O(n)\otimes\mathcal O(-n)\cong\mathcal O(n)\otimes\mathcal O(n)^\vee\cong\mathcal O(0)=\mathcal O_X$, in agreement with the evaluation isomorphism $\mathcal O(n)^\vee\otimes\mathcal O(n)\to\mathcal O_X$ of [F3], whose transition unit is $t^nt^{-n}=1$; applying step 2.2 twice gives $\mathcal O(n)^{\vee\vee}\cong\mathcal O(-n)^\vee\cong\mathcal O(n)$; for $n=1$ the transition is $t$ and for negative $n$ it is $t^n=u^{-n}$ with $u=t^{-1}$, both units on $W$. All frames, transition units and isomorphisms used above come from the fixed two-chart cover and the canonical dual and tensor structures, so no selection is made and the only use of the Axiom of Choice is the inherited one recorded in [F6]. [F1, F2, F3, F6, step 1.1, step 2.1, step 2.2] ∎
