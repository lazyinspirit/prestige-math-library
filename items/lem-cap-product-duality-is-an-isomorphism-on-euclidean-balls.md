---
id: "lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls"
kind: "lemma"
title: "Cap duality on a Euclidean coordinate ball"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cap-duality-map-for-an-oriented-manifold","def-compactly-supported-singular-cohomology-of-a-locally-compact-space","lem-coordinate-ball-classes-identify-local-homology-stalks","lem-compatible-local-orientation-classes-exist-over-compact-subsets","cor-homology-of-spheres","thm-topological-universal-coefficient-short-exact-sequence-for-cohomology","thm-long-exact-sequence-of-a-pair-in-singular-homology","cor-homotopic-maps-induce-the-same-map-on-singular-homology","prop-cap-product-naturality-and-projection-formula","thm-heine-borel-rn","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Example 3.34 p.244 and proof of Theorem 3.35
        step (1), p.248
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: May, A Concise Course in Algebraic Topology, Chapter 20 §5, Step 1
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. If $U$ is an oriented open $n$-ball over a commutative unital ring $R$, its cap-duality map is an isomorphism
$$D_U:H_c^p(U;R)\longrightarrow H_{n-p}(U;R)$$
for every integer $p$. Both sides are zero except when $p=n$, where cap identifies $H_c^n(U;R)$ with $H_0(U;R)\cong R$. More precisely it carries the compact-support class evaluating to $1$ on the oriented relative class to the positive point class. AC is used only in the universal-coefficient argument specified below.

## Facts & Assumptions

[F1] [[def-cap-duality-map-for-an-oriented-manifold]] constructs $D_U$ and proves compatibility under enlargement of compact support.

[F2] [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] gives the explicit colimit and its cofinal-support criterion. [[thm-heine-borel-rn]] bounds compact subsets in Euclidean coordinates.

[F3] [[lem-coordinate-ball-classes-identify-local-homology-stalks]] identifies every ball-supported top class with its restriction at the center, over $\mathbb Z$ or $R$. [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]] gives the compatible classes of the supplied orientation.

[F4] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]], and [[cor-homology-of-spheres]] compute the relative groups by radial retractions and the oriented sphere cycle.

[F5] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] includes relative pairs, naturality and evaluation as its right-hand map, under [[def-axiom-of-choice]].

[F6] [[prop-cap-product-naturality-and-projection-formula]] gives the chain identity commuting cap with a map and pullback, so coordinate homeomorphisms preserve the cap calculations.

## Proof

**Given:** The oriented open ball $U$, dimension $n$, coefficient ring $R$, and AC. Use a homeomorphism $U\cong\mathbb R^n$ as coordinates; the chain identity [F6] and its inverse transfer the calculations and orientation. First suppose $n\ge1$.

1.1 Let $K_j=\{x:\lVert x\rVert\le j\}$ for integers $j\ge1$. Every compact subset lies in some $K_j$ by [F2], so these supports are cofinal. The complement of $K_j$ retracts to the sphere of radius $j+1$ by the radial homotopy with norm $(1-t)\lVert x\rVert+t(j+1)>j$. The ambient space is contractible. The pair sequence [F4] thus gives $$H_i(U,U\setminus K_j;\mathbb Z)\cong\begin{cases}\mathbb Z,&i=n,\\0,&i\ne n.\end{cases}$$ At $i=1$ the pair sequence uses the kernel of the augmentation on the complement, and at $i=0$ it gives zero because the complement is nonempty. Thus $n=1$, with two complement components, is included. Negative groups are zero. [F2, F4, F6, given]

2.1 Apply relative UCT [F5] with coefficient group the additive group of $R$. Every integral relative homology group in step 1.1 is either $0$ or $\mathbb Z$. Their $\operatorname{Ext}^1$ terms vanish: use the zero resolution for $0$ and the length-zero free resolution $\mathbb Z\xrightarrow{1}\mathbb Z$ for $\mathbb Z$ (there is no positive resolution term, so the degree-one Hom cohomology is zero). Consequently evaluation gives $$H^p(U,U\setminus K_j;R)\cong\operatorname{Hom}_{\mathbb Z}(H_p(U,U\setminus K_j;\mathbb Z),R).$$ This is $R$ for $p=n$ and zero otherwise. The isomorphism is evaluation on integral relative cycles, not an unspecified additive isomorphism. The invocation of UCT uses AC for arbitrary-rank cycle/boundary freeness, projections and free comparison lifts in its proof; no additional choice enters this calculation. [F5, step 1.1]

2.2 Choose one integral generator $e_0$ of the local stalk at the center. By [F3] there is a unique integral class $e_j$ supported on $K_j$ restricting to $e_0$. Its coefficient extension $\bar e_j$ is an $R$-module generator. Indeed, for $n>1$ the radial pair calculation in [F4] sends it to the corresponding reduced sphere generator; for $n=1$ it sends it to the difference of the two point generators in the augmentation kernel of $H_0(S^0)$, not to either point generator separately. Replacing integral coefficients by their images in $R$ gives the respective generator over $R$ in both cases. At the center the given $R$-orientation is $u\bar e_0$ for a unit $u\in R$: writing $\bar e_0=v(u\bar e_0)$ because the orientation generates gives $vu=1$. Point restriction is injective, so $[U]_{K_j}=u\bar e_j$ for every $j$. Restriction sends $e_{j+1}$ to $e_j$ since both have center value $e_0$. [F3, F4, step 1.1]

3.1 Naturality of evaluation in [F5] shows that the support transition in degree $n$ has the same coordinate in $R$: evaluating the transitioned class on $e_{j+1}$ equals evaluating the original class on its restriction $e_j$. Thus under step 2.1 every transition is the identity of $R$ in degree $n$. In other degrees all groups are zero. The colimit [F2] is therefore $R$ in degree $n$ and zero in all other degrees. [F2, F5, step 2.1, step 2.2]

3.2 If $a\in H^n(U,U\setminus K_j;R)$ evaluates to $r\in R$ on $e_j$, choose an integral relative cycle $z_j$ representing $e_j$ and a relative cocycle $\varphi$ representing $a$. Then [F1] represents its cap image by $\varphi\cap(u\bar z_j)$. In degree $n$ the cap formula retains the last vertex of each $n$-simplex. Applying zero-chain augmentation therefore gives $$\epsilon\bigl(\varphi\cap(u\bar z_j)\bigr)=u\,\varphi(z_j)=ur.$$ This chain is an absolute cycle and its class is independent of representatives by [F1]. Since $U$ is contractible, [F4] identifies $H_0(U;R)$ with $R$ via augmentation: the map to a point is a homotopy equivalence, and the point complex has $H_0=R$. Thus $D_U$ is multiplication by the unit $u$ in these coordinates. In particular the class with $r=u^{-1}$ evaluates to $1$ on the oriented class and maps to the positive point generator. [F1, F4, step 2.1, step 2.2]

4.1 Steps 3.1 and 3.2 prove the isomorphism in degree $n$. If $p\ne n$, the source is zero by step 3.1; the target is zero because a contractible space has zero homology in positive degrees, and negative chain degrees are zero. When $n=0$, $U$ is a point and is itself terminal compact support. Its integral point complex and its cochain complex give $H^0(U;R)=H_0(U;R)=R$ and zero in other degrees: their positive differentials alternate between identity and zero. The orientation is a unit $u$ times the point class, and degree-zero cap again multiplies by $u$. Thus the same conclusion holds. [F1, F2, F4, step 3.1, step 3.2]

5.1 Over the zero ring all displayed modules and maps are zero, with the unique unit satisfying $1=0$, and the isomorphism statement still holds. An open ball is nonempty by hypothesis; empty supports in its colimit contribute only zero. The radial retractions in step 1.1 preserve the strict complement even at $t=0,1$. The cap evaluation includes all unnormalized simplex generators. Only one base generator and finitely many representatives for an individual calculation were used beyond the stated AC in step 2.1. [F1, step 1.1, step 2.1, step 2.2, step 3.2, step 4.1] ∎
