---
id: def-morphism-of-presheaves
kind: definition
title: "Morphisms of presheaves"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-presheaf-on-topological-space, def-natural-transformation]
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Definition 3.1"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 3"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Definition

Let $\mathcal F$ and $\mathcal G$ be presheaves on a topological space $X$.
A **morphism of presheaves**
$$\varphi:\mathcal F\longrightarrow\mathcal G$$
is a natural transformation ([[def-natural-transformation]]) between the two
contravariant functors on $\operatorname{Open}(X)$.

Equivalently, it is a family of maps
$$\varphi_U:\mathcal F(U)\longrightarrow\mathcal G(U)$$
for every open $U \subseteq X$, such that for every inclusion $V \subseteq U$
the square
$$ \begin{aligned} \mathcal F(U) &\xrightarrow{\ \varphi_U\ } \mathcal G(U)\\ \downarrow && \downarrow\\ \mathcal F(V) &\xrightarrow{\ \varphi_V\ } \mathcal G(V) \end{aligned} $$
commutes, that is,
$$\varphi_V(s|_V)=\varphi_U(s)|_V\qquad\text{for all }s\in\mathcal F(U).$$

Composition and identities are taken componentwise.
