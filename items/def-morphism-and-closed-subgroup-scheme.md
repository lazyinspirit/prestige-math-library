---
id: def-morphism-and-closed-subgroup-scheme
kind: definition
title: Morphisms and closed subgroup schemes of group schemes
deps:
- def-group-scheme-over-a-field
- def-closed-immersion-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: J. S. Milne, Algebraic Groups (corrected 2022 printing)
    url: https://www.jmilne.org/math/Books/iAG2022.pdf
    locator: Chapter1 Definition1.1–1.3 and sections1.4–1.5, printed pp.6–8 (PDF17–19); complete definitions and all-algebra point criterion read.
  - title: The Stacks Project, complete Groupoid Schemes chapter
    url: https://stacks.math.columbia.edu/download/groupoids.pdf
    locator: §4 Definitions4.1/4.3/4.5 and Lemmas4.2/4.4, tags022S/022T/047D/0G8L/047E, printed pp.4–5; full statement/proof text read.
status: published
origin: pipeline
---
## Definition

Let $G,H$ be group schemes of finite type over a field $k$, as in [[def-group-scheme-over-a-field]]. A **morphism of $k$-group schemes** is a $k$-morphism $f:G\to H$ satisfying
$$f\circ m_G=m_H\circ(f\times f),\qquad f\circ e_G=e_H,\qquad i_H\circ f=f\circ i_G.$$
Consequently $G(T)\to H(T)$ is a group homomorphism for every $k$-scheme $T$, naturally in $T$.

A **closed subgroup scheme** of $G$ is a closed immersion $j:H\hookrightarrow G$ in the sense of [[def-closed-immersion-schemes]], where $H$ is a group scheme and $j$ is a morphism of group schemes. Its multiplication, identity, and inverse are the restrictions of those of $G$. A closed immersion is a monomorphism: a factorization through its subscheme, when it exists, is unique, since the map of sheaves onto the subscheme's structure sheaf is surjective. Therefore these restricted structure morphisms are uniquely determined. A closed subscheme of $G$ is not assumed to be a subgroup merely because its $k$-rational points form one; all algebra-valued points, including points over nonreduced algebras, are relevant.
