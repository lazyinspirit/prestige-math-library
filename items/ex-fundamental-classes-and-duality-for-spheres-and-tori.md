---
id: "ex-fundamental-classes-and-duality-for-spheres-and-tori"
kind: "example"
title: "Fundamental classes and duality for spheres and tori"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-poincare-duality-for-oriented-topological-manifolds","thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism","cor-homology-of-spheres","def-axiom-of-choice","thm-topological-universal-coefficient-short-exact-sequence-for-cohomology","thm-topological-kunneth-short-exact-sequence-for-homology","thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses","def-singular-chain-cross-product-on-generators","lem-singular-chain-cross-product-boundary-formula","prop-cap-product-naturality-and-projection-formula","def-cap-product-with-cohomology-first","def-fundamental-class-of-a-compact-oriented-manifold","thm-top-homology-characterizes-compact-orientable-manifolds","thm-heine-borel-rn","prop-cup-product-is-natural-unital-and-associative"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.3
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Assume AC. With the standard boundary orientation, $[S^n]$ generates $H_n(S^n;\mathbb Z)$ for $n\ge1$. In dimension zero the statement is instead $[S^0]=[+1]-[-1]$ in $H_0(S^0;\mathbb Z)=\mathbb Z^2$.

Let $T^m=(S^1)^m$, $m\ge0$, with its ordered product orientation and basepoint $1$ in each circle. Its fundamental class is the ordered iterated singular cross product of the $m$ positive circle classes. Let $u\in H^1(S^1;\mathbb Z)$ evaluate to $1$ on the positive circle class, put $x_i=\operatorname{pr}_i^*u$, and write $x_I=x_{i_1}\cdots x_{i_k}$ for $I=\{i_1<\cdots<i_k\}\subset\{1,\ldots,m\}$. These monomials form the exterior-algebra basis. Let $b_J\in H_{|J|}(T^m;\mathbb Z)$ be the class of the coordinate subtorus with its factors in increasing order, inserting the basepoint in the other positions. Cohomology-first Poincaré duality is
$$x_I\cap[T^m]=(-1)^{\sum_{r=1}^k(i_r-r)}b_{I^c}.$$
Empty products and sums have their usual values: $T^0$ is a positively oriented point, $x_\varnothing=1$, and $b_\varnothing$ is its basepoint class. AC is inherited from the UCT, additive Künneth and Poincaré-duality suppliers, in the exact uses listed below.

## Facts & Assumptions

[F1] [[cor-homology-of-spheres]] gives the sphere homology groups.

[F2] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives the evaluation exact sequence under AC.

[F3] [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]] gives the actual external ring isomorphism for a degreewise finite-free homology factor, under AC for bijectivity.

[F4] [[thm-topological-kunneth-short-exact-sequence-for-homology]] gives the actual singular cross-product sequence and its Tor correction, under AC.

[F5] [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]] supplies $AS-1=dL+Ld$. [[def-singular-chain-cross-product-on-generators]] specifies the shuffle signs, and [[lem-singular-chain-cross-product-boundary-formula]] proves the boundary rule.

[F6] [[def-fundamental-class-of-a-compact-oriented-manifold]] specifies the orientation class. [[thm-top-homology-characterizes-compact-orientable-manifolds]] makes its restriction to one stalk injective for a nonempty connected compact manifold.

[F7] [[thm-poincare-duality-for-oriented-topological-manifolds]] identifies cap by that class as $H^p(M;\mathbb Z)\cong H_{n-p}(M;\mathbb Z)$ for compact oriented manifolds, under AC.

[F8] [[prop-cap-product-naturality-and-projection-formula]] gives $(\alpha\beta)\cap z=\beta\cap(\alpha\cap z)$. [[def-cap-product-with-cohomology-first]] specifies the retained last vertex in top-degree cap.

[F9] [[thm-heine-borel-rn]] gives compactness of closed bounded Euclidean subsets.

[F10] [[prop-cup-product-is-natural-unital-and-associative]] gives projection pullback multiplicativity and the constant vertex unit.

[F11] [[def-axiom-of-choice]] supplies the choices in [F2]–[F4] and [F7].

## Verification

**Given:** All coefficients are integral. The circle generator $z$ is its counterclockwise oriented triangle-boundary cycle. Iterated chain products are associated from the left. No assertion of strict associativity of an arbitrary chosen singular inverse is needed.

1.1 The spaces here satisfy the manifold hypotheses. The sphere is a closed bounded subset of $\mathbb R^{n+1}$, and the torus is the closed bounded subset of $\mathbb R^{2m}$ defined by one unit-circle equation in each coordinate pair; both are compact by [F9] and Hausdorff as metric subspaces. On the sphere the sets where one coordinate is strictly positive or strictly negative are graph charts over an open unit ball, with the omitted coordinate $\pm\sqrt{1-|v|^2}$. On the torus take products of open arc charts. Both have finite chart covers; pulling back rational Euclidean ball bases in these finitely many charts gives a countable base. The sphere for $n\ge1$ is path connected: normalize the straight segment between nonantipodal points, and for antipodal points concatenate via any fixed perpendicular unit vector. Each circle is path connected by an arc, and finitely many such paths give paths in the product. The sphere carries its outward boundary orientation. Increasing angular coordinates on each circle, in factor order, give the product orientation; transitions between angular lifts are translations by integers and preserve it. At $m=0$ use the positive point, and $S^0$ is two open points with the two boundary signs. [F9, given]

1.2 By [F1], the only nonzero circle homology groups are $H_0=\mathbb Z$ and $H_1=\mathbb Z[z]$. The Ext terms in [F2] vanish: $0$ has the zero resolution and a finite free group has its identity augmentation as a length-zero free resolution, whose Hom has zero degree-one cohomology. Thus evaluation gives $H^0(S^1)=\mathbb Z1$, $H^1(S^1)=\mathbb Zu$ with $u(z)=1$, and no higher groups. In particular $u^2=0$. A point has $H^0=H_0=\mathbb Z$ and no higher groups: its unnormalized chain differential is identity in positive even degrees and zero in odd degrees, and dualizing has the corresponding zero positive cohomology. [F1, F2, given]

2.1 For $n\ge1$, take the alternating facet cycle of an oriented $(n+1)$-simplex containing the origin and transport it by radial projection to $S^n$. The radial projection is a homeomorphism from the simplex boundary onto the sphere: every ray meets that boundary once, and its piecewise radial inverse is continuous, with matching values at facet boundaries. The facet signs give precisely the boundary orientation. In the simplicial calculation underlying [F1], the alternating facet cycle is primitive: every simplicial top cycle has equal signed facet coefficients, there are no higher chains in the boundary complex, and comparison carries this generator to singular homology. It has positive local coefficient at the interior of any outward oriented facet, so its class and the fundamental class in [F6] have the same positive restriction at one such point and are equal by the injectivity in [F6], using step 1.1. For $S^0=\{-1,+1\}$ the outward endpoint signs of the interval give $[+1]-[-1]$ by [F6]'s componentwise definition. Both point classes are independent by [F1], so this element does not generate the entire $H_0$. [F1, F6, step 1.1]

2.2 Inductively apply [F3] to $T^{m-1}\times S^1$, always using the last circle as the finite-free homology factor from step 1.2. Its cohomology is the graded tensor of the preceding ring with $\mathbb Z1\oplus\mathbb Zu$, $u^2=0$. Thus $x_I$ for increasing subsets $I$ is a basis; repeated factors square to zero, and interchanging distinct degree-one factors changes the sign. There are no groups above degree $m$. This is the exterior presentation: the tensor algebra modulo all squares maps to this ring, the relations sort and remove repeated generators, and the resulting increasing monomials have independent images by the tensor bases. Similarly [F4] gives a homology basis $b_J$ by induction. Its Tor terms vanish since both factors' homology groups are finite free, and their length-zero free resolutions tensor to complexes with no degree-one homology. The cycle representatives insert point cycles at the missing coordinates and $z$ at the others, using the prescribed shuffle. The initial induction case is the point in step 1.2. [F3, F4, F5, step 1.2]

3.1 For any two factor cycles $c,d$ and matching-degree cocycles $\varphi,\psi$, tensor evaluation $J$ is closed and [F5] gives $$JA S(c\otimes d)=J(c\otimes d)+J(dL+Ld)(c\otimes d)=\varphi(c)\psi(d).$$ Indeed $Jd=0$ follows by the cocycle equations on the two tensor summands, and $d(c\otimes d)=0$ follows by the signed tensor boundary. Thus iteration, starting with $u(z)=1$, gives $\langle x_1\cdots x_m,b_{\{1,\ldots,m\}}\rangle=1$. More generally, let $|I|=|J|$ and pull $x_I$ back to the coordinate subtorus indexed by $J$. By [F10], a factor $x_i$ with $i\notin J$ pulls back to zero: its projection is constant and factors through a point, whose positive cohomology is zero by step 1.2. If $I=J$, the same iteration gives value one. As equal-size distinct subsets have an element of $I\setminus J$, this proves $$\langle x_I,b_J\rangle=\delta_{IJ}\qquad(|I|=|J|).$$ Evaluation therefore detects every homology coefficient in this basis. [F5, F10, step 1.2, step 2.2]

3.2 The full shuffle cycle representing $b_{\{1,\ldots,m\}}$ has the product orientation. To check its sign, decompose each circle into the signed arcs of $z$. The product of one arc from each circle is a cube with parameter order $1,\ldots,m$. Iterated shuffle divides it into the simplices whose vertex paths increment each coordinate once, in permutation order. The edge matrix for such a simplex has determinant equal to the sign of that permutation: subtract successive columns to get the ordered coordinate-unit columns. This is exactly its shuffle coefficient; induction on the last inserted coordinate gives the same sign for the left-associated shuffle. Multiplying by the arc-orientation signs consequently makes every signed simplex positive in the product orientation. Internal faces cancel by [F5], as do the outer faces from the circle cycles. At an interior point of any one simplex, the cycle has positive local coefficient one. By [F6] and the connected compact manifold verification in step 1.1, its class equals $[T^m]$. For $m=0$ the empty product is the positive point class and already satisfies [F6]. [F5, F6, step 1.1, step 2.2]

4.1 For a top-degree cochain $\theta$ and a top-dimensional cycle $c$, the augmentation of $\theta\cap c$ is $\theta(c)$: [F8] retains the last vertex with coefficient given by evaluation. Apply this to the cap/cup identity in [F8], with $\alpha=x_I$ and any $\beta\in H^{m-|I|}(T^m)$, to get $$\langle\beta,x_I\cap[T^m]\rangle=\langle x_I\beta,[T^m]\rangle.$$ By step 2.2 the product $x_Ix_J$ is zero if $I\cap J\ne\varnothing$. If $|J|=m-|I|$ and the intersection is empty, then $J=I^c$. Sorting the concatenation of the increasing lists $I,I^c$ to $1,\ldots,m$ requires one interchange for each element of $I^c$ less than an element $i_r$ of $I$. There are $i_r-r$ such elements for $i_r$, so $$x_Ix_{I^c}=(-1)^{\sum_r(i_r-r)}x_1\cdots x_m.$$ Steps 3.1 and 3.2 then make the right side evaluate to that sign. Since step 3.1 detects homology coefficients, the cap image is exactly the displayed signed complementary basis element. [F8, step 2.2, step 3.1, step 3.2]

5.1 By [F7] and step 1.1, these cap maps are the Poincaré-duality isomorphisms on each compact oriented torus. The explicit matrix in step 4.1 also shows bijectivity directly, since complementation permutes the finite bases and every coefficient is $\pm1$. On $S^n$ for $n\ge1$, step 1.2's length-zero resolution argument with [F1] and [F2] gives a normalized top class $v$ evaluating to one on $[S^n]$ and no intermediate cohomology. Thus $1\cap[S^n]=[S^n]$ and $v\cap[S^n]$ is the positive point class by [F8]'s augmentation calculation and $H_0=\mathbb Z$. On $S^0$, a zero-cocycle with values $(a_+,a_-)$ caps to $a_+[+1]-a_-[-1]$, an isomorphism of the two degree-zero groups. [F1, F2, F7, F8, step 1.1, step 1.2, step 2.1, step 4.1]

6.1 For $I=\varnothing$ or $I=\{1,\ldots,m\}$ the exponent is zero, giving respectively the whole fundamental class or the positive basepoint class. At $m=1$ these are the only two cases. At $m=2$, the formula says $x_1\cap[T^2]=b_{\{2\}}$ and $x_2\cap[T^2]=-b_{\{1\}}$, fixing the cohomology-first sign convention. The $m=0$ and $n=0$ cases were computed separately, and zero classes have zero images by bilinearity. Empty spaces and zero coefficient rings are outside this fixed integral example. Every chain calculation retains unnormalized degeneracies. AC in [F11] supplies the arbitrary-rank PID cycles, projections and sections for [F2]–[F4], the simultaneous finite-free homology sections/bases for [F3], and the coordinate-neighborhood selections and local UCT lifts used by [F7]. The displayed basis evaluation, permutation signs and cap computation themselves add no choice use. [F11, step 2.2, step 3.1, step 3.2, step 4.1, step 5.1] ∎
