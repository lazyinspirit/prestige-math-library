---
id: lem-wide-pullbacks-compute-intersections-independently-of-representatives
kind: lemma
title: "Wide pullbacks compute intersections of supplied set-indexed subobject representatives independently of the representatives"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-intersection-of-a-family-of-subobjects, def-limit-and-colimit-of-a-diagram, def-monomorphism-and-epimorphism, lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, section V.8"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
    - title: "E. Riehl, Category Theory in Context, section 4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $(m_i:A_i\to C)_{i\in I}$ be a supplied family of monomorphisms indexed by a set. If its wide pullback exists, the induced morphism $p:P\to C$ is monic and represents the intersection of the subobjects $[m_i]$. For $I=\varnothing$, take $p=1_C$. Replacing any $m_i$ by an equivalent representative produces the same subobject $[p]$.

## Facts & Assumptions

**Given:** A set $I$, monomorphisms $m_i:A_i\to C$, and their wide-pullback cone $(P,p_i)$ when $I$ is nonempty.

[L1] A limit is a cone with a unique mediating map from every cone, and the empty limit is a terminal object when it exists ([[def-limit-and-colimit-of-a-diagram]]).

[L2] A monomorphism is left-cancellable ([[def-monomorphism-and-epimorphism]]).

[L3] The legs of a limiting cone are jointly monic ([[lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic]]).

[L4] An intersection is the greatest lower bound in the subobject order ([[def-intersection-of-a-family-of-subobjects]]).

## Proof

**Proof technique:** direct.

1.1 If $I=\varnothing$, the identity $1_C:C\to C$ represents the greatest subobject of $C$, so it is the intersection of the empty supplied family by [L4]. [L1, L4]

1.2 Suppose $I$ is nonempty and write $p=m_i\circ p_i$, independent of $i$. If $p\circ x=p\circ y$, then monicity of every $m_i$ gives $p_i\circ x=p_i\circ y$ for all $i$, and joint monicity in [L3] gives $x=y$; hence $p$ is monic. Each equality $p=m_i p_i$ makes $[p]\le[m_i]$. If $q:Q\to C$ factors through every $m_i$, its factor maps form a cone and [L1] gives a unique $u:Q\to P$ with $q=p\circ u$, so $[q]\le[p]$. Thus [L4] makes $[p]$ the intersection. [L1, L2, L3, L4]

2.1 Equivalent representatives are connected by unique inverse isomorphisms over $C$. Composing a wide-pullback cone with these isomorphisms gives a cone for the replacement family, and [L1] supplies mutually inverse comparison maps between the two pullback apices. Their induced monomorphisms into $C$ therefore mutually factor, so they represent the same intersection subobject. [step 1.2, L1, L4] ∎
