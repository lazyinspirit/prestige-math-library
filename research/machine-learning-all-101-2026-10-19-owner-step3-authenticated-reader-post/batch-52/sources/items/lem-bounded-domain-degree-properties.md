---
id: lem-bounded-domain-degree-properties
kind: lemma
title: Properties of bounded-domain degree
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-relative-singular-homology, def-r-orientation-of-a-topological-manifold, thm-local-homology-detects-interior-points-boundary-points-and-dimension, lem-compatible-local-orientation-classes-exist-over-compact-subsets, prop-relative-homology-is-functorial-for-maps-of-pairs, thm-excision-for-singular-homology]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
    - title: "Allen Hatcher, Algebraic Topology, Chapter 2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
---
## Statement

Let $d\ge1$, let $U\subset\mathbb R^d$ be bounded and open, and let $f:\overline U\to\mathbb R^d$ be continuous. For $y\notin f(\partial U)$, put $K=f^{-1}(\{y\})\cap U$ and define $D(f,U,y)$ by

$$f_*[U]_K=D(f,U,y)[\mathbb R^d]_{\{y\}}\quad\text{in }H_d(\mathbb R^d,\mathbb R^d\setminus\{y\};\mathbb Z),$$

where $[U]_K$ is the unique relative orientation class restricting to the standard local generator on $K$, and $[\mathbb R^d]_{\{y\}}$ is the positive local generator. This integer is well-defined. It is nonzero only if $f^{-1}(y)\cap U\ne\varnothing$, and $D(\operatorname{id},U,y)=1$ whenever $y\in U$. If $U_1,U_2\subset U$ are disjoint bounded open sets, $y\notin f(\partial U_i)$ for $i=1,2$, and every point of $f^{-1}(y)\cap U$ lies in $U_1\cup U_2$, then

$$D(f,U,y)=D(f,U_1,y)+D(f,U_2,y).$$

If $H:[0,1]\times\overline U\to\mathbb R^d$ and $y:[0,1]\to\mathbb R^d$ are continuous and $y(t)\notin H_t(\partial U)$ for every $t$, then $D(H_0,U,y(0))=D(H_1,U,y(1))$.

## Statement references

[[lem-compatible-local-orientation-classes-exist-over-compact-subsets]]

[Chizat and Bach, Appendix C.3.1](https://arxiv.org/pdf/1805.09545)

[Hatcher, Algebraic Topology, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

## Facts & Assumptions

**Given:** The oriented open domains, maps, targets, and relative-homology construction in the Statement.

[F1] Every compact subset $K$ of a boundaryless $d$-manifold has a unique relative orientation class in $H_d(M,M\setminus K;\mathbb Z)$ restricting to the chosen local generator at every point; these classes commute with restriction to smaller compact supports. [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]]

[F2] A continuous map of pairs induces a homomorphism on relative singular homology, and induced maps respect composition. [[prop-relative-homology-is-functorial-for-maps-of-pairs]]

[F3] Relative homology is the homology of the quotient singular-chain complex; excision identifies relative groups after removing a closed set lying in the interior of the relative subspace. [[def-relative-singular-homology]] [[thm-excision-for-singular-homology]]

[F4] At an interior point of $\mathbb R^d$, the local relative homology group $H_d(\mathbb R^d,\mathbb R^d\setminus\{y\};\mathbb Z)$ is free of rank one. [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]]

## Proof

**Given:** The objects in the Statement and the relative-homology degree definition.

1.1 If $f^{-1}(y)\cap U=\varnothing$, then $K=\varnothing$ and $H_d(U,U\setminus K)=H_d(U,U)=0$, so $D(f,U,y)=0$. For the identity and $y\in U$, $K=\{y\}$ and the induced map sends the chosen local orientation generator to itself, so $D(\operatorname{id},U,y)=1$. [F1, F2, F3]

2.1 Under the additivity hypotheses, $K$ is the disjoint union of $K_i=K\cap U_i$. The closed set $Z=U\setminus(U_1\cup U_2)$ has closure in $U$ disjoint from $K$: the compact set $K$ lies in the open set $U_1\cup U_2$. Excision [F3] identifies $H_d(U,U\setminus K)$ with $H_d(U_1\cup U_2,(U_1\cup U_2)\setminus K)$. Since $U_1,U_2$ are disjoint open sets, every singular simplex in their union lies in exactly one of them, so this relative group and its chains split as the direct sum of the two relative groups. The unique orientation class [F1] therefore corresponds to $[U_1]_{K_1}+[U_2]_{K_2}$. The restrictions of $f$ commute with the inclusions of these pairs, so functoriality [F2] maps this sum to the sum of the two target classes. Their integer coefficients consequently satisfy $D(f,U,y)=D(f,U_1,y)+D(f,U_2,y)$. [F1, F2, F3, step 1.1]

3.1 For moving-target invariance set $g_t(x)=H_t(x)-y(t)$; translation identifies the target generator with the standard generator at $0$. The zero set $S=\{(t,x):g_t(x)=0\}$ is a closed subset of compact $[0,1]\times\overline U$ and is disjoint from $[0,1]\times\partial U$. Thus its projection $K_*\subset U$ is compact. Every $g_t$ defines a map of the fixed pair $(U,U\setminus K_*)$ into $(\mathbb R^d,\mathbb R^d\setminus\{0\})$. The singular prism operator for the homotopy satisfies $\partial P+P\partial=(g_1)_\#-(g_0)_\#$; each prism over a simplex in $U\setminus K_*$ avoids $0$, so the chain homotopy descends to relative chains. Hence $(g_0)_*=(g_1)_*$ on $H_d(U,U\setminus K_*)$. Restriction compatibility in [F1] sends $[U]_{K_*}$ to $[U]_{K_t}$ for the actual time-$t$ zero set, so these two induced integers are exactly $D(H_0,U,y(0))$ and $D(H_1,U,y(1))$. They are equal, proving moving-target invariance. [F1, F2, F3, construct, step 2.1]

4.1 The target group is $\mathbb Z$ by [F4]; the source class is unique by [F1]; and the induced map exists by [F2]. Thus the integer in the Statement is well-defined. Steps 1.1–3.1 establish all asserted properties. [F1, F2, F4, step 1.1, step 2.1, step 3.1] ∎

## Degree construction diagram

For a compact preimage $K$, the definition applies the map of relative homology groups induced by $f$; the diagram records that map and its local orientation generators. The proof above establishes the properties independently of the diagram.

```tikzcd
{[U]_K\in H_d(U,U\setminus K;\mathbb Z)}
  \arrow[r,"f_*"]
& {f_*[U]_K=D(f,U,y)[\mathbb R^d]_{\{y\}}\in H_d(\mathbb R^d,\mathbb R^d\setminus\{y\};\mathbb Z)}
```
