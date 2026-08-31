---
id: thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic
kind: theorem
title: "A chain map is a quasi-isomorphism exactly when its cone is acyclic"
status: draft
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-mapping-cone-of-a-chain-map, def-quasi-isomorphism, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex, thm-a-chain-map-induces-a-well-defined-map-on-homology]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

Let $f:C_\bullet\to D_\bullet$ be a chain map in an abelian category. Then $f$
is a quasi-isomorphism if and only if $\operatorname{Cone}(f)$ is acyclic.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$ and an integer $n$.

[L1] A quasi-isomorphism is a chain map inducing isomorphisms $$H_n(f):H_n(C)\to H_n(D)$$ for all $n$ ([[def-quasi-isomorphism]]).

[L2] The cone differential is $$d_n^{\operatorname{Cone}(f)}(y,x)=(d_n^D(y)+f_{n-1}(x),-d_{n-1}^C(x))$$ ([[def-mapping-cone-of-a-chain-map]]).

[L3] Acyclic means vanishing homology in every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[L4] Every chain map induces a well-defined map on homology ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\operatorname{Cone}(f)$ is acyclic. If $[x]\in H_{n-1}(C)$ satisfies $H_{n-1}(f)([x])=0$, choose $y\in D_n$ with $d_n^D(y)=f_{n-1}(x)$. Then $(-y,x)$ is an $n$-cycle of the cone by [L2], so [L3] gives $(-y,x)=d_{n+1}^{\operatorname{Cone}(f)}(z,w)$ for some $(z,w)$. Hence $x=-d_n^C(w)$, so $H_{n-1}(f)$ is injective. Likewise, if $y\in Z_n(D)$, then $(y,0)$ is an $n$-cycle of the cone, so acyclicity gives $(y,0)=d_{n+1}^{\operatorname{Cone}(f)}(z,w)$. Thus $y=d_{n+1}^D(z)+f_n(w)$, and $H_n(f)$ is surjective. [L2, L3, L4, given, algebra]

2.1 Conversely, assume $f$ is a quasi-isomorphism. Let $(y,x)$ be an $n$-cycle of $\operatorname{Cone}(f)$. Then $x\in Z_{n-1}(C)$ and $f_{n-1}(x)=-d_n^D(y)$ is a boundary in $D$, so [L1] gives $x=d_n^C(w)$ for some $w\in C_n$. Then $y+f_n(w)$ is an $n$-cycle in $D$, so [L1] again gives $z\in Z_n(C)$ and $v\in D_{n+1}$ with $$y+f_n(w)=f_n(z)+d_{n+1}^D(v).$$ Therefore $$(y,x)=d_{n+1}^{\operatorname{Cone}(f)}(v,z-w),$$ so every cone cycle is a boundary. By [L3], $\operatorname{Cone}(f)$ is acyclic, and together with [L1] this proves the equivalence. [L1, L2, L3, given, algebra] ∎
