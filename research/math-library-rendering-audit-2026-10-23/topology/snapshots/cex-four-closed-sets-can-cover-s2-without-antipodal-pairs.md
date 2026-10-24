---
id: cex-four-closed-sets-can-cover-s2-without-antipodal-pairs
kind: counterexample
title: "Four closed sets can cover $S^2$ without any one containing an antipodal pair"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-three-closed-sets-covering-s2-contain-an-antipodal-pair, def-euclidean-spheres-and-closed-balls, def-euclidean-inner-product, thm-componentwise-limits-and-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, tetrahedral example after Corollary 1.11"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement refuted

The conclusion for a closed cover by three sets remains true for a closed cover by four sets: whenever four closed subsets cover $S^2$, one member contains a pair of antipodal points.

## Facts & Assumptions

**Given:** The unit sphere $S^2\subseteq\mathbb R^3$.

[F1] If three closed subsets cover $S^2$, one of them contains a pair of antipodal points ([[cor-three-closed-sets-covering-s2-contain-an-antipodal-pair]]).

[F2] The Euclidean inner product is bilinear ([[def-euclidean-inner-product]]).

[F3] The sphere $S^2$ is the set of unit vectors in $\mathbb R^3$ ([[def-euclidean-spheres-and-closed-balls]]).

[L1] A map into $\mathbb R^m$ is continuous exactly when its component functions are continuous; sums and scalar multiples of continuous Euclidean-valued maps are continuous ([[thm-componentwise-limits-and-continuity]]).

## Counterexample

**Proof technique:** constructive.

1.1 Let $$v_1=\frac{(1,1,1)}{\sqrt3},\quad v_2=\frac{(1,-1,-1)}{\sqrt3},\quad v_3=\frac{(-1,1,-1)}{\sqrt3},\quad v_4=\frac{(-1,-1,1)}{\sqrt3},$$ and for $1\le i\le4$ define $$A_i=\{x\in S^2:\langle x,v_i\rangle\ge\langle x,v_j\rangle\text{ for every }1\le j\le4\}.$$ The vectors $v_i$ are the vertices of a regular tetrahedron centred at $0$. [given, F2, F3, construct, algebra]

2.1 By [F2] and [L1], each $A_i$ is a finite intersection of sets defined by a continuous closed inequality $\langle x,v_i-v_j\rangle\ge0$, hence is closed in $S^2$. For every $x\in S^2$, the finite set of four real numbers $\langle x,v_j\rangle$ has a maximum, so $x$ belongs to at least one $A_i$. Thus $A_1,A_2,A_3,A_4$ cover $S^2$. [step 1.1, F2, L1, algebra]

2.2 Suppose $x,-x\in A_i$. Then $\langle x,v_i-v_j\rangle\ge0$ and $\langle-x,v_i-v_j\rangle\ge0$ for every $j$, so all these inner products vanish. For $i=1$, the vectors $v_1-v_2$, $v_1-v_3$, and $v_1-v_4$ are scalar multiples of $(0,1,1)$, $(1,0,1)$, and $(1,1,0)$, whose determinant is $2\ne0$; the other values of $i$ differ only by coordinate sign changes and permutations. Hence the three differences span $\mathbb R^3$, forcing $x=0$, contrary to $x\in S^2$. No $A_i$ contains an antipodal pair. [step 1.1, F2, F3, algebra]

3.1 Steps 2.1 and 2.2 give a closed four-set cover with no antipodal pair in any member, refuting the proposed extension and showing that the three-set conclusion [F1] cannot be enlarged in this way. [step 2.1, step 2.2, F1, discharge-construct] ∎
