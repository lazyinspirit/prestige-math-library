---
id: def-group-scheme-over-a-field
kind: definition
title: Group schemes of finite type over a field
deps:
- def-scheme-over-base
- def-locally-finite-type-and-finite-type-morphism
- thm-fibre-products-of-schemes-exist
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
status: draft
origin: pipeline
---
## Definition

Let $k$ be a field. A **group scheme of finite type over $k$** is a finite-type $k$-scheme $G$ with $k$-morphisms
$$m:G\times_kG\to G,\qquad e:\operatorname{Spec}k\to G,\qquad i:G\to G$$
satisfying the following identities of scheme morphisms. Multiplication is associative, $m\circ(m\times\operatorname{id})=m\circ(\operatorname{id}\times m)$ on $G^3$; $m\circ(e\times\operatorname{id})=\operatorname{id}=m\circ(\operatorname{id}\times e)$ under the canonical identifications; and $m\circ(i,\operatorname{id})=e\circ p=m\circ(\operatorname{id},i)$, where $p:G\to\operatorname{Spec}k$ is the structure map. The products exist by [[thm-fibre-products-of-schemes-exist]]; the base and finite-type conventions are [[def-scheme-over-base]] and [[def-locally-finite-type-and-finite-type-morphism]].

For every $k$-scheme $T$, put $G(T)=\operatorname{Hom}_k(T,G)$. The three structure morphisms give a group law on $G(T)$, naturally under precomposition in $T$. In particular for every commutative unital $k$-algebra $R$, $G(R)$ means $G(\operatorname{Spec}R)$ and is a group, including for algebras with nilpotents. The definition imposes neither reducedness nor smoothness, and allows finite nonreduced group schemes. A group scheme is called **commutative** if $m$ agrees with its composition with the factor-exchange map.
