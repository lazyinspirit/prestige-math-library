---
id: lem-affine-closest-pairs-and-downward-facet-translation
kind: lemma
title: Affine closest pairs and downward translation from a lower facet
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-cg-affine-root-hyperplane-reflection-and-alcove, thm-cg-affine-alcove-transitivity-presentation-and-length, lem-cg-affine-alcove-separation-and-facet-types]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity
      url: https://arxiv.org/pdf/math/0308281v2
      locator: Lemma 11, closest-pair argument. The equality case and the order consequence under explicit downward reflection chains are proved here; weak dominance is not substituted for such chains.
---

## Statement

Let $\Phi$ be a finite simply-laced root system in its real root span, with positive roots $\Phi^+$, root lattice $Q$, Weyl group $W$ and $(\alpha,\alpha)=2$. Let $\ell>0$ and $W_\ell=W\ltimes\ell Q$, acting by affine isometries on shifted coordinates. Its walls and reflections are
$$
H_{\alpha,k}=\{z:(z,\alpha)=k\ell\},\qquad r_{\alpha,k}(z)=z-((z,\alpha)-k\ell)\alpha.
$$
Let $C$ be an open alcove, $F$ one of its facets, $x$ in the relative interior of $F$, and $y\in C$. Write $s_F$ for the facet reflection. Then, for all $u,v\in W_\ell$,
$$
\|ux-vy\|\ge\|x-y\|.
$$
Equality holds exactly when $(ux,vy)=(\tau x,\tau y)$ for some $\tau\in W_\ell$. Equivalently, the regular orbit points at minimum distance from $gx$ are precisely $gy$ and $gs_Fy$.

Call $F$ a lower facet when, for its positive finite root $\alpha$, $C$ lies in $(z,\alpha)>k\ell$. Suppose it is lower and $x'=r_N\cdots r_1x$ is obtained by strict downward reflections: $r_j=r_{\alpha_j,k_j}$ with $\alpha_j\in\Phi^+$ and $(x_{j-1},\alpha_j)>k_j\ell$. Then every $y'\in W_\ell y$ satisfying $\|x'-y'\|\le\|x-y\|$ satisfies $y'\le y$ in root order, meaning $y-y'$ is a nonnegative real combination of positive roots. At integral weights with integer $\ell$, these are nonnegative integer root combinations. No dominance condition on the intermediate points is required. The result is choice free.

## Facts & Assumptions

**Given:** These Euclidean root data, alcove and points.

[F1] The affine reflection arrangement and its alcoves are locally finite; after rescaling by $\ell$, $W_\ell$ acts simply transitively on alcoves. Facet reflection exchanges the two adjacent alcoves, and distinct alcove interiors are disjoint ([[def-cg-affine-root-hyperplane-reflection-and-alcove]], [[thm-cg-affine-alcove-transitivity-presentation-and-length]], [[lem-cg-affine-alcove-separation-and-facet-types]]).

## Proof

**Given:** The notation in the statement. A point in the relative interior of $F$ lies on its wall and on no other reflecting hyperplane.

1.1 By [F1], transport $C$ to a fundamental alcove by an affine isometry, and fix an interior point $p$. For $z=gy$ outside $C$, reflect $z$ in any defining wall $H$ of $C$ whose interior halfspace it violates. No orbit point of $y$ lies on a wall. This step strictly decreases $\|z-p\|$, since $p$ is strictly on the opposite side of $H$. The orbit $W_\ell y$ is a finite union of translates of the discrete lattice $\ell Q$, so every bounded ball contains finitely many of its points. The strictly decreasing procedure therefore terminates in $C$, at $y$: the regular orbit representative in $C$ is unique by simple transitivity and disjoint alcove interiors in [F1]. [F1, construct, algebra]

2.1 Let $d_H$ be signed distance to $H$, positive on the interior side of $C$. Orthogonal decomposition normal to $H$ gives $\|z-x\|^2-\|r_Hz-x\|^2=-4d_H(z)d_H(x)$. At each folding step $d_H(z)<0$ and $d_H(x)\ge0$, so distance to $x$ never increases, strictly decreasing unless $x\in H$. Exactly one defining wall contains $x$, namely the wall of $F$. Thus equality of the initial and terminal distances permits only $s_F$ steps. After one such step the point is on the interior side of that wall, so a second consecutive $s_F$ is impossible. Therefore $\|x-gy\|\ge\|x-y\|$, with equality exactly when $gy=y$ or $gy=s_Fy$. Conversely both these points attain equality because $s_Fx=x$. [step 1.1, algebra]

3.1 Apply step 2.1 with $g=u^{-1}v$. In the first equality case take $\tau=u$; in the second take $\tau=us_F$, using $s_Fx=x$. This proves the asserted common-isometry equality description. The stabilizer of $x$ is $\{1,s_F\}$: only two alcoves have $x$ in their closures, and simple transitivity in [F1] identifies the two possible images of either incident alcove. Consequently the minimizing regular points paired with $gx$ are precisely $gy$ and $gs_Fy$. [F1, step 2.1, algebra]

4.1 Suppose $F$ is lower. Its defining reflection subtracts the positive multiple $((y,\alpha)-k\ell)\alpha$, so $s_Fy<y$. Track both $y_0^+=y$ and $y_0^-=s_Fy$, together with $x_0=x$, through the prescribed downward reflections. At each stage the regular points lie in the two alcoves adjacent to the unique facet containing the current $x_j$. Any reflecting hyperplane missing $x_j$ has both adjacent interiors on the same side as $x_j$: an alcove interior cannot meet a wall, and if its interior lay on the other side from a point in its closure that wall would contain the closure point. A strict downward step uses a hyperplane missing $x_j$. Hence both transported regular points satisfy its same strict downward inequality and are reflected by subtracting positive multiples of its positive finite root. Induction yields $gy\le y$ and $gs_Fy\le s_Fy<y$, where $g=r_N\cdots r_1$. [F1, step 3.1, induction]

5.1 For a regular orbit point $y'$ with $\|x'-y'\|\le\|x-y\|$, step 3.1 forces equality and $y'=gy$ or $gs_Fy$. Both are at most $y$ by step 4.1. If the points are integral weights and $\ell$ is an integer, every subtracted positive-root coefficient is an integer by the weight pairings, including the initial facet reflection; this gives the asserted integral root order. The argument uses only finite reflection sequences and finite choices from fixed lists of defining walls, hence no Axiom of Choice. [step 3.1, step 4.1, algebra] ∎
