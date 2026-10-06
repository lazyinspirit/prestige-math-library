---
id: cex-a-reeb-component-has-a-compact-boundary-leaf-with-infinite-holonomy-behaviour
kind: counterexample
title: "A Reeb component has a compact boundary leaf with infinite holonomy"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf, def-stable-leaf-of-a-foliation, def-saturated-neighbourhood-of-a-leaf, def-holonomy-representation-and-holonomy-group-of-a-leaf, def-two-dimensional-torus, def-local-transversal-to-a-regular-foliation, thm-local-reeb-stability, def-countable-choice-principle-for-foliation-pair, cor-codimension-one-frobenius-criterion, thm-frobenius-local-coordinate-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes; complete PDF)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
      locator: "§2.1–§2.2, printed pp. 11–15 (the Reeb component: compact boundary leaf with infinite holonomy)"
    - title: "Danny Calegari, Foliations and the Geometry of 3-Manifolds (Oxford Mathematical Monographs; complete author-hosted PDF)"
      url: "https://math.uchicago.edu/~dannyc/books/foliations/oupbook.pdf"
      locator: "§4.3, Example 4.7, printed pp. 144–145 (the Reeb component)"
dependency_level: 12
---

## Statement refuted

In a codimension-one foliation every compact leaf has finite holonomy and is
therefore stable, so that the finiteness hypothesis of local Reeb stability
([[thm-local-reeb-stability]]) is automatic for compact leaves.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$ ([[def-countable-choice-principle-for-foliation-pair]]). The Reeb foliation of the solid torus $X=\overline D^2\times S^1$ and its boundary torus $\partial X$.

[F1] The Reeb foliation of the solid torus is tangent to the boundary; $\partial X\cong T^2$ is a single compact leaf with infinite holonomy, represented by the non-identity contraction germ $r\mapsto r'$ with $u(r')=u(r)+1$, $u(r)=\exp(1/(1-r^2))$, and every other leaf is a plane accumulating on $\partial X$ ([[prop-reeb-foliation-of-the-solid-torus-has-the-boundary-as-a-leaf]], [[def-two-dimensional-torus]]).

[F2] For a leaf in a smooth boundaryless foliation with a two-sided one-dimensional local transversal $T$, its holonomy group is the image of $\rho_x:\pi_1(L,x)\to\operatorname{Diff}_x(T)$ ([[def-holonomy-representation-and-holonomy-group-of-a-leaf]], [[def-local-transversal-to-a-regular-foliation]]). The original boundary holonomy uses the restrictions of these transport germs to the inward half-interval: equality means equality on some relatively open half-neighbourhood. Since transports preserve the boundary and its inward side, composition and inverses restrict, so these one-sided germs also form a group.

[F3] A leaf is stable when every neighbourhood of it contains a saturated neighbourhood; a saturated neighbourhood is a union of leaves ([[def-stable-leaf-of-a-foliation]], [[def-saturated-neighbourhood-of-a-leaf]]).

[F4] Local Reeb stability requires a compact leaf with finite holonomy group ([[thm-local-reeb-stability]]).

[F5] A nowhere-zero smooth one-form with $\alpha\wedge d\alpha=0$ has integrable kernel and admits local foliation charts ([[cor-codimension-one-frobenius-criterion]], [[thm-frobenius-local-coordinate-theorem]]).

## Counterexample

**Proof technique:** direct verification.

1.1 (A compact leaf.) By [F1] the boundary $\partial X$ is a single leaf of the Reeb foliation and it is compact, diffeomorphic to the two-torus $T^2$. [F1]

1.2 (Boundaryless extension and infinite holonomy.) Near $r=1$, the interior level foliation of F1 has kernel $dr-v(r)dt$, where $v(r)=(1-r^2)^2\exp(-1/(1-r^2))/(2r)$. Extend $v$ by zero for $r\ge1$. It is smooth and flat at one: every derivative is a smooth factor times a polynomial in $(1-r^2)^{-1}$ times the rapidly decaying exponential. On the added collar in $Y=\{r<1+\varepsilon\}\times S^1$, the form $\alpha=dr-v(r)dt$ is nowhere zero and satisfies $\alpha\wedge d\alpha=0$. Its kernel agrees with the original foliation inside the collar, so F5 supplies a boundaryless extension with $r=1$ still a torus leaf. A radial interval at fixed angles is now a two-sided transversal. The holonomy of the loop in the $S^1$-factor of the Reeb component is computed in [F1] as the germ $r\mapsto r'$ determined by $u(r')=u(r)+1$; it is a non-identity one-sided contraction, so the holonomy group contains a non-identity element, and its iterates $u(r_n)=u(r)+n$ give infinitely many distinct germs near the boundary. These distinct inward restrictions force the two-sided germs in the extension to be distinct, so its compact torus leaf also has infinite holonomy in the exact sense of F2. [F1, F2, F5]

1.3 (The leaf is not stable.) Suppose the boundary leaf were stable. Then a small collar $W=\{r>1/2\}$ of it would contain a saturated neighbourhood $U$ of the boundary leaf [F3]; but $U$ is open and contains the boundary leaf, hence contains a point $p$ with $r(p)$ close to $1$, and being saturated it contains the entire leaf through $p$; by [F1] that leaf is a plane, and it meets the circle $r=1/2$ and so is not contained in $W$, a contradiction. Therefore the compact boundary leaf is not stable. [F1, F3]

2.1 (What this refutes.) A compact leaf can have infinite holonomy and can fail to be stable, so the finiteness hypothesis of [F4] cannot be dropped for compact leaves, and the failure is a failure of finiteness of holonomy, not of compactness of the ambient foliated manifold. [F1, F4, step 1.3] ∎
