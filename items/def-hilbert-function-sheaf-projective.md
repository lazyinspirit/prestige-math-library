---
id: def-hilbert-function-sheaf-projective
kind: definition
title: "Hilbert function and Euler characteristic on a projective scheme"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-projective-cohomology-finite-dimensional-field
  - def-affine-scheme-spectrum
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-coherent-module-scheme
  - def-dimension
  - def-euler-characteristic-coherent-sheaf
  - def-field
  - def-invertible-sheaf
  - def-projective-morphism-pre-proj
  - def-pullback-module-ringed-spaces
  - def-relative-projective-space-standard-charts
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-tensor-product
  - def-twist-quasi-coherent-sheaf-projective
  - thm-projective-morphism-proper
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Definition

Assume the Axiom of Choice, inherited from the finiteness corollary cited
below ([[def-axiom-of-choice]]). Let $k$ be a field ([[def-field]]), let
$n\ge0$, and let
$$i:X\hookrightarrow\mathbb P^n_k$$
be a closed immersion of schemes ([[def-closed-immersion-schemes]],
[[def-relative-projective-space-standard-charts]]). Thus the structure
morphism $X\to\operatorname{Spec}k$ ([[def-affine-scheme-spectrum]]) is
projective over $k$ in the finite-dimensional H-projective convention
([[def-projective-morphism-pre-proj]]), and it is proper
([[thm-projective-morphism-proper]]). Put
$$\mathcal O_X(1)\;=\;i^*\mathcal O_{\mathbb P^n_k}(1),$$
a pullback of the twisting sheaf along the closed immersion
([[def-pullback-module-ringed-spaces]]); it is an invertible
$\mathcal O_X$-module ([[def-invertible-sheaf]]). The embedding $i$ and the
sheaf $\mathcal O_X(1)$ are fixed once and for all, and below "projective
$X/k$" always means $X$ together with this fixed embedding.

**Twists.** For $m\in\mathbb Z$ and an $\mathcal O_X$-module $\mathcal F$ the
**$m$-th twist** of $\mathcal F$ is
$$\mathcal F(m)\;=\;\mathcal F\otimes_{\mathcal O_X}\mathcal O_X(1)^{\otimes m}$$
([[def-sheaf-tensor-product]], [[def-twist-quasi-coherent-sheaf-projective]]),
where $\mathcal O_X(1)^{\otimes m}$ denotes the $m$-fold tensor power of
$\mathcal O_X(1)$ for $m\ge0$ and the dual of the $(-m)$-fold tensor power for
$m<0$ ([[def-invertible-sheaf]]).

**The two functions.** Let $\mathcal F$ be a coherent $\mathcal O_X$-module
([[def-coherent-module-scheme]]). Each twist $\mathcal F(m)$ is then coherent
again: coherence is local on $X$, and on an open set on which the invertible
sheaf $\mathcal O_X(1)$ is trivial the twist is isomorphic to $\mathcal F$
([[def-invertible-sheaf]], [[def-coherent-module-scheme]],
[[def-sheaf-tensor-product]]). Since $X$ is proper over the field $k$, the
finiteness corollary
[[cor-projective-cohomology-finite-dimensional-field]] shows that every
cohomology group $H^q(X,\mathcal F(m))$
([[def-sheaf-cohomology-derived-global-sections]]) is a finite-dimensional
$k$-vector space ([[def-dimension]]) and that only finitely many of these
groups are nonzero; hence the Euler characteristic
$$\chi(X,\mathcal F(m))=\sum_{q\ge0}(-1)^q\dim_kH^q(X,\mathcal F(m))$$
of [[def-euler-characteristic-coherent-sheaf]] is a well-defined integer. The
**Hilbert function** of $\mathcal F$ with respect to the fixed embedding is
the function
$$\mathbb Z\longrightarrow\mathbb Z_{\ge0},\qquad m\longmapsto h_{\mathcal F}(m):=\dim_kH^0(X,\mathcal F(m)),$$
and the **Euler-characteristic function** of $\mathcal F$ is the function
$$\mathbb Z\longrightarrow\mathbb Z,\qquad m\longmapsto P_{\mathcal F}(m):=\chi(X,\mathcal F(m)).$$

**Relation between the two.** Writing $h^q_{\mathcal F}(m)$ for
$\dim_kH^q(X,\mathcal F(m))$, only finitely many of which are nonzero, the two
functions are related by
$$P_{\mathcal F}(m)=\sum_{q\ge0}(-1)^qh^q_{\mathcal F}(m)=h_{\mathcal F}(m)-\sum_{q>0}(-1)^{q-1}h^q_{\mathcal F}(m).$$
In particular $P_{\mathcal F}(m)=h_{\mathcal F}(m)$ whenever the higher
cohomology groups $H^q(X,\mathcal F(m))$ with $q>0$ all vanish; the higher
groups contribute to the Euler-characteristic function but not to the Hilbert
function, and the definition imposes no vanishing of them at any particular
$m$.

**Hilbert polynomial.** If there is a polynomial $p\in\mathbb Q[t]$ with
$$p(m)=P_{\mathcal F}(m)\qquad\text{for every }m\in\mathbb Z,$$
then $p$ is called a **Hilbert polynomial** of $\mathcal F$ with respect to
the fixed embedding, and the notation $P_{\mathcal F}(t)$ is also used for it
once it is known to exist. Existence and uniqueness of such a polynomial are
not asserted by this definition.

If $X=\varnothing$ or $\mathcal F=0$, then all groups $H^q(X,\mathcal F(m))$
vanish, so $h_{\mathcal F}\equiv0$ and $P_{\mathcal F}\equiv0$, and the zero
polynomial is a Hilbert polynomial.
