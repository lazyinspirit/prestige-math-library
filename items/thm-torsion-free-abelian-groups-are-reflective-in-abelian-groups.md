---
id: thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups
kind: theorem
title: "Torsion-free abelian groups form a reflective full subcategory of abelian groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, def-annihilator-and-torsion-of-a-module, thm-quotient-group-universal-property]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, example 4.5.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The full subcategory of torsion-free abelian groups is reflective in $\mathbf{Ab}$. For an abelian group $G$, regarded as a $\mathbb Z$-module, its reflector is
$$G\longmapsto G/\operatorname{Tor}(G),$$
with unit the quotient map.

## Facts & Assumptions

**Given:** An abelian group $G$, regarded as a $\mathbb Z$-module.

[L1] An element is torsion when a nonzero integer annihilates it, and a module is torsion-free when its torsion set is the zero subgroup ([[def-annihilator-and-torsion-of-a-module]]).

[L2] A homomorphism killing a normal subgroup factors uniquely through the corresponding quotient group ([[thm-quotient-group-universal-property]]).

[L3] A full subcategory is reflective when every object has a supplied universal reflection arrow, equivalently when the inclusion has a left adjoint ([[def-reflective-subcategory-and-reflector]]).

## Proof

**Proof technique:** constructive.

1.1 If nonzero integers $m,n$ kill $x,y\in G$, then $mn$ kills $x+y$, and $m$ kills $-x$; hence $\operatorname{Tor}(G)$ is a subgroup. If $n(g+\operatorname{Tor}(G))=0$ in the quotient for nonzero $n$, then $ng$ is torsion, so some nonzero $m$ has $mng=0$; since $mn\ne0$ in $\mathbb Z$, $g$ is torsion. Thus the quotient is torsion-free. [L1, algebra, construct]

2.1 If $f:G\to H$ and $H$ is torsion-free, every torsion element $x$ has nonzero $n$ with $nf(x)=f(nx)=0$, so [L1] gives $f(x)=0$. Hence $\operatorname{Tor}(G)\subseteq\ker f$, and [L2] gives a unique $\bar f:G/\operatorname{Tor}(G)\to H$ through which $f$ factors. [step 1.1, L1, L2]

3.1 The quotient maps are therefore supplied universal arrows from abelian groups to the full torsion-free subcategory. By [L3] they assemble into the reflector. [step 2.1, L3, discharge-construct] ∎
