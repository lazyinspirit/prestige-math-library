---
id: lem-germ-neighborhoods-form-a-riemann-surface-basis
kind: lemma
title: "The germ neighborhoods form a Hausdorff, second-countable Riemann-surface atlas"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-surface-of-a-complete-analytic-function, thm-basis-criterion, thm-identity-theorem-holomorphic-functions, def-hausdorff-space, def-second-countable-space, thm-open-connected-subsets-of-rn-are-polygonally-connected]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Theorem 4.3"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
    - title: "Henry Wilton, Riemann Surfaces lecture notes, §8.2"
      url: "https://www.scribd.com/document/833386016/II-Riemann-Surfaces-Notes-Henry-Wilton"
---

## Statement

Let $\mathcal R(\xi_0,\Omega)$ be the germ space of a complete analytic
function. Then the sets $N(f,U)$ of
[[def-riemann-surface-of-a-complete-analytic-function]] form a basis for a
topology on $\mathcal R(\xi_0,\Omega)$. With that topology, the maps

$$\phi_{f,U}:N(f,U)\to U,\qquad \phi_{f,U}([f]_z)=z,$$

form a holomorphic atlas. The resulting space is Hausdorff and second countable.

## Facts & Assumptions

**Given:** The germ space $\mathcal R(\xi_0,\Omega)$ and its subsets $N(f,U)$.

[L1] The germ space, its basic candidate sets $N(f,U)$, and the projection
$p([f]_z)=z$ are those of
[[def-riemann-surface-of-a-complete-analytic-function]].

[L2] A family is a basis exactly when it covers the set and every point of an
intersection of two members lies in a third member inside that intersection
([[thm-basis-criterion]]).

[L3] If two holomorphic functions agree on a set with an accumulation point in a
complex domain, then they agree on that whole domain
([[thm-identity-theorem-holomorphic-functions]]).

[L4] Hausdorff means that distinct points admit disjoint open neighbourhoods, and
second countable means that the topology has a countable basis
([[def-hausdorff-space]], [[def-second-countable-space]]).

[L5] Every open connected subset of $\mathbb R^2$ is polygonally connected
([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

## Proof

**Proof technique:** direct.

1.1 Every point of $\mathcal R(\xi_0,\Omega)$ is, by [L1], a germ $[f]_z$ coming from some function element $(f,U)$, and then $[f]_z \in N(f,U)$. So the family $\{N(f,U)\}$ covers the germ space. [L1]

1.2 Suppose $\xi=[f]_z$ lies in $N(f,U)\cap N(g,V)$. Then $\xi=[g]_z$ as well, so [L1] gives equality of the germs of $f$ and $g$ at $z$. Hence there is a disc $D$ centered at $z$ with $D \subseteq U \cap V$ and $f=g$ on $D$. For each $w \in D$ this implies $[f]_w=[g]_w$, so $N(f,D)=N(g,D)\subseteq N(f,U)\cap N(g,V)$. Thus [L2] makes the family $\{N(f,U)\}$ a basis for a topology on the germ space. [L1, L2]

1.3 The space is Hausdorff. If $[f]_z$ and $[g]_w$ have $z\ne w$, choose disjoint discs $D_z \ni z$ and $D_w \ni w$; then $N(f,D_z)$ and $N(g,D_w)$ are disjoint basis neighbourhoods. If $z=w$ but $[f]_z\ne[g]_z$, choose discs $D_f \subseteq U$ and $D_g \subseteq V$ centered at $z$ so small that $D_f \cap D_g$ is connected. If $N(f,D_f)$ and $N(g,D_g)$ met, then $f$ and $g$ would agree as germs at some point of $D_f \cap D_g$, and [L3] would force $f=g$ on that connected overlap, hence near $z$, contradiction. So distinct germs have disjoint neighbourhoods, exactly as [L4] requires. [L3, L4, cases]

1.4 To prove second countability, let $\mathcal D$ be the countable family of rational open discs contained in $\Omega$. For every finite chain $D_0,\dots,D_m$ of discs in $\mathcal D$ with $a_0 \in D_0$ and $D_{j-1}\cap D_j\ne\varnothing$, at most one branch of the complete analytic function is determined on $D_m$ by continuing the initial germ successively across that chain. So the basis sets arising from such rational-disc chains form a countable family. [L1, algebra]

2.1 On each basis element, $\phi_{f,U}$ is bijective with inverse $z \mapsto [f]_z$. If $N(f,U)\cap N(g,V)\ne\varnothing$, then step 1.2 gives a disc $D \subseteq U \cap V$ on which $f=g$, so on $\phi_{f,U}(N(f,D))=D$ the transition map $\phi_{g,V}\circ\phi_{f,U}^{-1}:D\to D$ is the identity. Therefore the charts are holomorphically compatible. [step 1.2, L3, algebra]

3.1 Let $[f]_z \in N(f,U)$. By [L5], there is a polygonal path in $\Omega$ from $a_0$ to $z$. Cover its compact image by finitely many rational discs from $\mathcal D$ that lie inside the function-element neighborhoods of one continuation chain to $[f]_z$, and choose them in the order encountered along the path, with the last disc contained in $U$ and containing $z$. The resulting rational-disc chain determines the same terminal branch on that last disc, so it produces a countable-basis neighbourhood of $[f]_z$ contained in $N(f,U)$. Thus the topology has a countable basis, and [L4] makes the germ space second countable. [L1, L4, L5, step 1.4, construct] ∎
