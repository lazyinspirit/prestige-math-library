---
id: thm-plane-not-homeomorphic-to-other-euclidean-spaces
kind: theorem
title: '$\mathbb R^2$ is not homeomorphic to $\mathbb R^n$ for $n\ne2$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-fundamental-groups-of-punctured-euclidean-spaces, thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space, def-homeomorphism-and-open-maps, def-injection-surjection-bijection, thm-induced-fundamental-group-map-functoriality, lem-standard-basis-of-f-n, thm-componentwise-limits-and-continuity]
justified_by: []
aliases: []
landmark: true
short: '$\mathbb R^2\not\cong\mathbb R^n$ for $n\ne2$'
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Corollary 1.16"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

For every natural number $n\ne2$, there is no homeomorphism $\mathbb R^2\to\mathbb R^n$.

## Facts & Assumptions

**Given:** A natural number $n\ne2$.

[L1] At the standard basepoint, the punctured plane has fundamental group isomorphic to $\mathbb Z$; if the given $n\ge3$, the punctured space $\mathbb R^n\setminus\{0\}$ is simply connected ([[prop-fundamental-groups-of-punctured-euclidean-spaces]]).

[L2] For every $n\ge2$, there is no homeomorphism $\mathbb R\to\mathbb R^n$ ([[thm-r-is-not-homeomorphic-to-higher-dimensional-euclidean-space]]).

[F1] A homeomorphism is a continuous bijection with continuous inverse ([[def-homeomorphism-and-open-maps]], [[def-injection-surjection-bijection]]).

[L3] Pointed continuous maps induce homomorphisms on fundamental groups, functorially; in particular a pointed homeomorphism induces an isomorphism ([[thm-induced-fundamental-group-map-functoriality]]).

[L4] The space $\mathbb R^0$ has exactly one element, while for $m\ge1$ the standard vector $e_0\in\mathbb R^m$ is nonzero ([[lem-standard-basis-of-f-n]]).

[L5] A map into $\mathbb R^m$ is continuous exactly when its component functions are continuous; sums and scalar multiples of continuous Euclidean-valued maps are continuous ([[thm-componentwise-limits-and-continuity]]).

## Proof

**Proof technique:** cases.

1.1 If $n=0$, then $\mathbb R^0$ is a singleton by [L4], while $0$ and $e_0$ are distinct points of $\mathbb R^2$; hence no bijection, and therefore no homeomorphism, exists. [L4, F1, assume-case zero]

1.2 If $n=1$, a homeomorphism $\mathbb R^2\to\mathbb R$ would have an inverse homeomorphism $\mathbb R\to\mathbb R^2$, contrary to [L2]. [L2, F1, assume-case one]

1.3 It remains to treat $n\ge3$. Suppose $h:\mathbb R^2\to\mathbb R^n$ is a homeomorphism. Translating the target gives a homeomorphism $h_0(x)=h(x)-h(0)$ with $h_0(0)=0$; its value $y=h_0(e_0)$ is nonzero because $h_0$ is injective. Choose $j<n$ with $y_j\ne0$. [given, F1, L4, L5, assume-case high]

2.1 Let $P$ permute coordinate $j$ into coordinate $0$, put $u=P(y)$, and define $A:\mathbb R^n\to\mathbb R^n$ by $A(z)_0=z_0/u_0$ and $A(z)_k=z_k-(u_k/u_0)z_0$ for $1\le k<n$. Its inverse is $A^{-1}(w)_0=u_0w_0$ and $A^{-1}(w)_k=w_k+u_kw_0$, so [L5] makes $A$ a homeomorphism fixing $0$ and carrying $u$ to $e_0$. Thus $g=A\circ P\circ h_0$ is a homeomorphism with $g(0)=0$ and $g(e_0)=e_0$. [step 1.3, L5, algebra, construct]

3.1 Restriction gives a pointed homeomorphism $(\mathbb R^2\setminus\{0\},e_0)\to(\mathbb R^n\setminus\{0\},e_0)$, so [L3] gives an isomorphism of their fundamental groups. This contradicts [L1], because the source is isomorphic to the nontrivial group $\mathbb Z$ and the target is trivial. Hence no homeomorphism exists when $n\ge3$. [step 2.1, L1, L3]

4.1 Since $n\ne2$, exactly one of $n=0$, $n=1$, or $n\ge3$ holds, and steps 1.1, 1.2, and 3.1 exclude a homeomorphism in every case. [step 1.1, step 1.2, step 3.1, cases-exhaustive] ∎
