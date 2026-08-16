---
id: thm-torsion-free-abelian-groups-are-reflective-in-abelian-groups
kind: theorem
title: "Torsion-free abelian groups form a reflective full subcategory of abelian groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, def-annihilator-and-torsion-of-a-module, thm-quotient-group-universal-property, thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
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

[L3] A full subcategory $\mathcal A$ of $\mathcal C$ is **reflective** when the inclusion $I$ has a left adjoint $R\dashv I$ ([[def-reflective-subcategory-and-reflector]]).

[L4] For a full subcategory, supplying a reflector $R$ with an adjunction $R\dashv I$ is equivalent to supplying, for every object $C\in\mathcal C$, a specified universal arrow $(R_C,\eta_C)$ from $C$ to $I$; under that equivalence the specified universal arrows are the components of the reflection unit ([[thm-a-full-subcategory-is-reflective-exactly-when-each-object-has-a-universal-arrow]]).

## Proof

**Proof technique:** constructive.

1.1 If nonzero integers $m,n$ kill $x,y\in G$, then $mn$ kills $x+y$, and $m$ kills $-x$; hence $\operatorname{Tor}(G)$ is a subgroup. If $n(g+\operatorname{Tor}(G))=0$ in the quotient for nonzero $n$, then $ng$ is torsion, so some nonzero $m$ has $mng=0$; since $mn\ne0$ in $\mathbb Z$, $g$ is torsion. Thus the quotient is torsion-free. [L1, algebra, construct]

2.1 If $f:G\to H$ and $H$ is torsion-free, every torsion element $x$ has nonzero $n$ with $nf(x)=f(nx)=0$, so [L1] gives $f(x)=0$. Hence $\operatorname{Tor}(G)\subseteq\ker f$, and [L2] gives a unique $\bar f:G/\operatorname{Tor}(G)\to H$ through which $f$ factors. [step 1.1, L1, L2]

3.1 Step 2.1 supplies, for every abelian group $G$, the quotient map $G\to G/\operatorname{Tor}(G)$ together with the unique factorisation of any map into a torsion-free group; that is exactly a specified universal arrow from $G$ to the inclusion. By the equivalence in [L4] these supplied arrows assemble into a reflector $R$ with $R\dashv I$, which by [L3] says the full torsion-free subcategory is reflective, with unit the quotient map. [step 2.1, L3, L4, discharge-construct] ∎
