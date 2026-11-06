---
id: def-cmp-field-space-variation-splitting
kind: definition
title: Retained and omitted variation spaces
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: cmp-kaluza-klein-reduction-and-effective-theory
dependency_level: 0
deps: []
dependency_roles: {}
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Josep M. Pons and Pere Talavera, Consistent and Inconsistent Truncations: Some Results and the Issue of the Correct Uplifting of Solutions, arXiv:hep-th/0309079v2"
      url: "https://arxiv.org/pdf/hep-th/0309079v2"
      locator: "§§1 and 2.2–2.4: variation of the full and reduced actions and the omitted-equation criterion"
---

## Definition

All Banach spaces below are real complete normed vector spaces. A $C^1$ Banach manifold is a Hausdorff space with charts to open subsets of real Banach spaces whose transition maps are $C^1$; a map is $C^1$ when its chart representatives have Fréchet derivatives that are continuous in operator norm. In charts, $DF_x$ is the bounded linear map for which $F(x+h)=F(x)+DF_xh+o(\|h\|)$. Tangent vectors are model vectors identified by derivatives of chart transitions, and $T_x^*$ is the space of bounded real-linear functionals on $T_x$. A topological direct sum $T=V\oplus W$ means that addition $V\times W\to T$ is a bounded linear isomorphism.

Let $X$ and $X_r$ be specified smooth manifolds, possibly with boundary, and let the full and retained fields be sections of specified smooth bundles over them. Choose integers $k\geq1$ sufficient for the chosen action and boundary data. Let $\mathcal C$ and $\mathcal C_r$ be specified $C^1$ Banach manifolds of admissible $C^k$ full and retained fields, respectively; their boundary conditions and gauge fixing, or their smooth gauge quotients, are part of these spaces. Let $S:\mathcal C\to\mathbb R$ and $I:\mathcal C_r\to\mathcal C$ be $C^1$, and fix $\phi\in\mathcal C_r$ with $\psi=I(\phi)$. The admissible full variations are exactly $T_\psi\mathcal C$, and the retained variations are
$$V_{\rm ret}(\phi):=\operatorname{im}D I_\phi\subseteq T_\psi\mathcal C.$$
Suppose a closed subspace $V_{\rm omit}(\phi)\subseteq T_\psi\mathcal C$ has been specified such that
$$T_\psi\mathcal C=V_{\rm ret}(\phi)\oplus V_{\rm omit}(\phi)$$
as a topological direct sum. The reduced action is $S_r:=S\circ I$. Its derivative is the continuous covector
$$D S_r|_\phi=(D I_\phi)^*(D S|_\psi),$$
where $(D I_\phi)^*:T_\psi^*\mathcal C\to T_\phi^*\mathcal C_r$ is the continuous-dual pullback. For every $w\in T_\phi\mathcal C_r$, $D S_r|_\phi(w)=D S|_\psi(D I_\phi w)$, so $D S_r|_\phi=0$ if and only if $D S|_\psi$ annihilates $V_{\rm ret}(\phi)$. The reduced covector and the restriction of $D S|_\psi$ have different domains in general; they are not identified unless $D I_\phi$ identifies $T_\phi\mathcal C_r$ with its image. The omitted first variation is the restriction of $D S|_\psi$ to $V_{\rm omit}(\phi)$. The stated tangent-space split, boundary conditions, and gauge treatment are part of the data; without a declared complement there is no defined omitted variation space.

## Facts & Assumptions

**Given:** Differentiable configuration spaces $\mathcal C_r,\mathcal C$, a differentiable map $I:\mathcal C_r\to\mathcal C$, and a differentiable action $S:\mathcal C\to\mathbb R$.

[A1] At each configuration under consideration, the direct sum is topological and both summands are closed. Boundary and gauge conditions are encoded in the configuration manifolds and their tangent spaces; no additional boundary or gauge variations are silently admitted.

## Proof

1.1  By the direct-sum hypothesis, each $v\in T_\psi\mathcal C$ has a unique expression $v=v_{\rm ret}+v_{\rm omit}$ with the two terms in the declared summands. Restricting a continuous covector to either summand is therefore well-defined. [given, A1, algebra]

2.1  In local charts, write $I(x+h)=I(x)+Lh+r_I(h)$ with $r_I(h)=o(\|h\|)$, and $S(y+k)=S(y)+Mk+r_S(k)$ with $r_S(k)=o(\|k\|)$, where $L=D I_\phi$ and $M=D S|_\psi$. Then $k=Lh+r_I(h)=O(\|h\|)$, so $r_S(k)=o(\|h\|)$; substitution gives $S(I(x+h))=S(I(x))+MLh+o(\|h\|)$. Thus $D S_r|_\phi=M\circ L=(D I_\phi)^*(D S|_\psi)$. Its vanishing is equivalent to $D S|_\psi$ annihilating $\operatorname{im}D I_\phi=V_{\rm ret}(\phi)$, while the restriction to $V_{\rm omit}(\phi)$ remains independent. [given, A1, algebra] ∎
