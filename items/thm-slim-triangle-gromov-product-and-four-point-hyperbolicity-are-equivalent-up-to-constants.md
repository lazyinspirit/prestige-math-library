---
id: thm-slim-triangle-gromov-product-and-four-point-hyperbolicity-are-equivalent-up-to-constants
kind: theorem
title: "Slim triangles, the Gromov product, and the four-point condition are equivalent up to constants"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-delta-slim-geodesic-triangle-and-hyperbolic-space, def-gromov-product, lem-slim-triangles-imply-the-gromov-product-inequality, lem-the-four-point-condition-implies-slim-triangles]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Sections 6.1.2-6.2.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
    - title: "Brian H. Bowditch, A course on geometric group theory, Sections 1.2-2.1"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $(X,d)$ be a nonempty geodesic metric space. The following are equivalent
up to changing the constant:

1. $X$ is hyperbolic, that is, all geodesic triangles are $\delta$-slim for
some $\delta \ge 0$.
2. For every basepoint $o \in X$ there exists $\delta'_o \ge 0$ such that one has

$$ (x,z)_o \ge \min\{(x,y)_o,(y,z)_o\} - \delta'_o $$

for all $x,y,z \in X$.
3. For some $\delta'' \ge 0$, one has

$$ d(x,z)+d(y,w) \le \max\{d(x,y)+d(z,w),\, d(x,w)+d(y,z)\} + \delta'' $$

for all $x,y,z,w \in X$.

## Facts & Assumptions

**Given:** A nonempty geodesic metric space $(X,d)$.

[F1] $\delta$-slim triangles give the product inequality with constant $3\delta$ at every basepoint ([[lem-slim-triangles-imply-the-gromov-product-inequality]]).

[F2] A geodesic space satisfying the four-point condition with constant $\kappa$ has $4\kappa$-slim triangles ([[lem-the-four-point-condition-implies-slim-triangles]]).

## Proof

**Proof technique:** direct.

1.1 If triangles are $\delta$-slim, [F1] proves condition (2) with the same constant $3\delta$ at every basepoint. [F1]

1.2 Now assume (2) and fix just one point $o\in X$. Let $\kappa=\delta'_o$. For any four points $a,b,c,d$, write $p_{uv}=(u|v)_o$ and $r_u=d(o,u)$. On these four points define $q_{uv}$ to be the maximum, over all simple edge paths from $u$ to $v$ in the complete graph, of the least $p$-value of an edge on the path; put $q_{uu}=r_u$. There are finitely many paths. The one-edge path gives $q_{uv}\ge p_{uv}$. Along a two-edge path the assumed product inequality gives $p_{uv}\ge\min(p_{us},p_{sv})-\kappa$, and along a three-edge path it gives $p_{uv}\ge\min(p_{us},p_{st},p_{tv})-2\kappa$. Hence $0\le q_{uv}-p_{uv}\le2\kappa$. Also $q_{uv}\le\min(r_u,r_v)$, since the first and last edges of every path satisfy these respective bounds. [given, algebra]

2.1 Concatenate paths attaining $q_{uv}$ and $q_{vw}$ and erase any loops. Erasing loops cannot lower the minimum edge value. Thus $q_{uw}\ge\min(q_{uv},q_{vw})$: $q$ is an exact ultrametric similarity on these four labels. For completeness, its positive threshold relations $u\sim_t v\iff q_{uv}\ge t$ are nested equivalence relations (on labels with $r_u\ge t$). Make a finite rooted tree from these nested clusters, with each leaf $u$ at height $r_u$ and each common ancestor of $u,v$ at height $q_{uv}$. Nonnegative edge lengths follow from the bound in step 1.2. The tree distance between leaves is $D(u,v)=r_u+r_v-2q_{uv}$. Removing the finite subtree spanned by four leaves at its central edge or central vertex shows that the largest two of its three opposite-pair distance sums are equal: each uses the central edge twice, while the third uses it zero times; zero-length edges and repeated leaves follow by the same calculation. [step 1.2, algebra]

3.1 The original metric satisfies $d(u,v)=r_u+r_v-2p_{uv}$, so $0\le d(u,v)-D(u,v)\le4\kappa$. Each opposite-pair sum therefore differs from its tree counterpart by a number in $[0,8\kappa]$. Since the two largest tree sums are equal, the largest and second-largest original sums differ by at most $8\kappa$: the two original sums corresponding to those equal tree sums both lie in one interval of length $8\kappa$, while the remaining original sum can only increase the second-largest if it becomes larger. This is the four-point condition with constant $4\kappa$ (additive error $8\kappa$). The bound uses the one fixed basepoint $o$, so condition (2)'s per-basepoint quantifier causes no uniformity gap. [step 2.1, algebra]

4.1 Finally (3) is the four-point condition with constant $\kappa=\delta''/2$. By [F2] every triangle is $4\kappa=2\delta''$-slim. This proves (1) and closes the cycle. [F2, step 3.1] ∎
