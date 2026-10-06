---
id: lem-inertia-of-a-stack-in-setoids
kind: lemma
title: "The inertia of a stack in setoids is trivial"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-descent-data-and-stack-in-groupoids
  - def-algebraic-stack-and-inertia
  - def-category-fibred-in-groupoids
  - def-algebraic-space-as-fppf-sheaf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chapter 8 (Stacks), Section 8.7 and Chapter 4 (Categories), Section 4.34"
      url: "https://stacks.math.columbia.edu/download/stacks.pdf"
      locator: "Section 8.7 (tag 036X) and Lemma 8.7.1 (tag 036Y); relative inertia in Section 4.34 (tag 04Z2)"
---

## Statement

Let $\mathcal X$ be a stack in groupoids over $(\mathit{Sch}/S)_{fppf}$
([[def-descent-data-and-stack-in-groupoids]]) all of whose fibre categories
are setoids, i.e. all of whose automorphism groups are trivial. Then the
projection $\mathcal I_{\mathcal X}\to\mathcal X$ from the inertia stack
([[def-algebraic-stack-and-inertia]]) is an equivalence of stacks in groupoids
([[def-category-fibred-in-groupoids]]); conversely, if this projection is an
equivalence, then every fibre category of $\mathcal X$ is a setoid. In
particular, for an algebraic space $Z$ over $S$
([[def-algebraic-space-as-fppf-sheaf]]), the fibre category of
$\mathcal I_{\mathcal S_Z}$ over $T$ is the discrete groupoid on
$\operatorname{Mor}_S(T,Z)$, so
$\mathcal I_{\mathcal S_Z}\cong\mathcal S_Z$.

## Facts & Assumptions

**Given:** A stack in groupoids $\mathcal X$ over the fppf site, its inertia stack $\mathcal I_{\mathcal X}$ with projection $\pi$, and, in the last clause, the stack in setoids $\mathcal S_Z$ of an algebraic space $Z$.

[F1] $\mathcal I_{\mathcal X}$ has objects $(x,\alpha)$ with $x\in\mathcal X_T$ and $\alpha\in\operatorname{Aut}(x)$, for $f:T'\to T$, a morphism from $(y,\beta)$ over $T'$ to $(x,\alpha)$ over $T$ is a base arrow $\gamma:y\to x$ over $f$ with $\gamma\beta=\alpha\gamma$; in a fixed fibre this is exactly an isomorphism intertwining the two automorphisms; the projection $\pi$ forgets $\alpha$ ([[def-algebraic-stack-and-inertia]]).

[F2] An equivalence of categories fibred in groupoids induces fully faithful, essentially surjective functors on every fibre; an explicit inverse over the base up to natural isomorphisms establishes equivalence without making choices; a stack in setoids has only identity automorphisms, and the stack in setoids of an algebraic space $Z$ has fibre category the discrete groupoid on the set of morphisms $T\to Z$ ([[def-category-fibred-in-groupoids]], [[def-descent-data-and-stack-in-groupoids]], [[def-algebraic-space-as-fppf-sheaf]]).



## Proof

1.1 Full faithfulness in the setoid case. Suppose every fibre category of $\mathcal X$ is a setoid. Then the only objects of $\mathcal I_{\mathcal X}(T)$ are $(x,\mathrm{id}_x)$. For any two such objects, every isomorphism $\gamma\colon x\to y$ in $\mathcal X_T$ satisfies $\gamma\mathrm{id}_x=\mathrm{id}_y\gamma$, so it lifts uniquely to a morphism $(x,\mathrm{id}_x)\to(y,\mathrm{id}_y)$. Thus the projection is fully faithful on each fibre. [F1]

1.2 Essential surjectivity in the setoid case. For every $x\in\mathcal X_T$, the object $(x,\mathrm{id}_x)$ of $\mathcal I_{\mathcal X}(T)$ maps to $x$, so the projection is essentially surjective on every fibre. The functor $x\mapsto(x,\mathrm{id}_x)$, sending an arrow $\gamma$ to the same arrow $\gamma$, is an explicit inverse over the base: the inertia condition holds for identity automorphisms, and both composites are identities because every automorphism is the identity. Thus $\pi$ is an equivalence of stacks in groupoids, without using a choice-based converse to fibrewise essential surjectivity. Conversely, suppose $\pi$ is an equivalence. For any $x\in\mathcal X_T$ and $\alpha\in\operatorname{Aut}(x)$, full faithfulness applied to $(x,\mathrm{id}_x)$ and $(x,\alpha)$ lifts the identity $x\to x$ to a morphism between them. The inertia-morphism condition in [F1] then gives $\mathrm{id}_x=\alpha$, so every fibre category is a setoid. [F1, F2]

2.1 The stack in setoids of an algebraic space. If $\mathcal X=\mathcal S_Z$ then $\mathcal X_T$ is the discrete groupoid on $\operatorname{Mor}_S(T,Z)$ by [F2], so its only automorphisms are identities and step 1.2 shows that $\mathcal I_{\mathcal S_Z}\to\mathcal S_Z$ is an equivalence; the fibre category of $\mathcal I_{\mathcal S_Z}$ over $T$ is therefore the discrete groupoid on $\operatorname{Mor}_S(T,Z)$, which is exactly the fibre category of $\mathcal S_Z$. [F2, step 1.2] ∎ 
