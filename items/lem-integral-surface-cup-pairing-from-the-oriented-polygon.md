---
id: "lem-integral-surface-cup-pairing-from-the-oriented-polygon"
kind: "lemma"
title: "Integral surface cup pairing from the oriented polygon"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-cellular-homology-computes-singular-homology","def-cellular-boundary-from-three-consecutive-skeleta","def-oriented-cellular-chain-group","thm-long-exact-sequence-of-a-pair-in-singular-homology","cor-contractible-nonempty-spaces-have-the-homology-of-a-point","thm-topological-universal-coefficient-short-exact-sequence-for-cohomology","def-singular-cup-product-on-cochains","prop-cup-product-is-natural-unital-and-associative","thm-singular-cohomology-is-graded-commutative","def-axiom-of-choice"]
sources:
  references:
    - title: Hatcher, Example 3.7, pp207–208; complete signed singular fan calculation
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. For the closed oriented genus-$g$ surface $\Sigma_g$, $g\ge0$, there are bases $1$ of $H^0$, $a_1,b_1,\ldots,a_g,b_g$ of $H^1$, and $\omega$ of $H^2$, all with integral coefficients, and no higher cohomology. Normalize $\omega$ to evaluate to $+1$ on the oriented surface cycle. Then
$$a_i b_j=\delta_{ij}\omega,\qquad b_i a_j=-\delta_{ij}\omega,\qquad a_i a_j=b_i b_j=0.$$
All products of $\omega$ with a positive-degree class vanish, and $1$ is the unit. The degree-one basis is dual to the ordered edges of the polygon word $\prod_{i=1}^g[A_i,B_i]$. AC is used only through the current UCT supplier; the cup calculation uses actual singular cocycles and finite sums.

## Facts & Assumptions

[F1] [[thm-cellular-homology-computes-singular-homology]] identifies cellular and singular homology naturally for cellular maps.

[F2] [[def-cellular-boundary-from-three-consecutive-skeleta]] defines the cellular differential by the pair connecting map and a relative quotient. [[def-oriented-cellular-chain-group]] identifies a chosen oriented characteristic disk with the generator of its cell summand.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives the exact pair sequence; its connecting map sends a relative cycle to the class of its boundary.

[F4] [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] applies to a convex polygon by straight contraction.

[F5] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives the natural evaluation exact sequence under AC.

[F6] [[def-singular-cup-product-on-cochains]] evaluates a product of one-cochains on a triangle as the value on its first edge times the value on its last edge, with positive coboundary.

[F7] [[prop-cup-product-is-natural-unital-and-associative]] supplies the unit and associativity, and [[thm-singular-cohomology-is-graded-commutative]] gives the general signed commutativity identity.

[F8] [[def-axiom-of-choice]] supplies the arbitrary-rank integral cycle projections and sections used by [F5].

## Proof

**Given:** For $g\ge1$, use an oriented convex $4g$-gon $P$ with vertices $v_0,\ldots,v_{4g-1}$ in positive boundary order. Identify its edges in the order $A_1,B_1,A_1^{-1},B_1^{-1},\ldots,A_g,B_g,A_g^{-1},B_g^{-1}$. The quotient is the standard oriented genus-$g$ surface, with all boundary vertices identified to $v$. Write $c$ for the polygon center, and read vertex subscripts modulo $4g$. The case $g=0$ is the oriented sphere and is treated separately below.

1.1 Parameterize each paired boundary edge by its positive generator $A_i$ or $B_i$, giving a singular loop in the quotient based at $v$. Put $\epsilon_k=+1$ on the positive traversal of an edge in the polygon word and $\epsilon_k=-1$ on its negative traversal. Let $r_k$ be the radial singular edge from $c$ to $v_k$, followed by the quotient map. For $\epsilon_k=+1$, let $T_k$ have ordered vertices $(c,v_k,v_{k+1})$; for $\epsilon_k=-1$, use $(c,v_{k+1},v_k)$. The affine maps of these triangles into $P$ followed by the quotient are genuine singular simplices. The last edge of either ordered triangle is the same positively parameterized loop $E_k=A_i$ or $B_i$, so paired occurrences have literally identical last singular edges, rather than only homotopic ones. The two boundary formulas are $$\partial T_k=E_k-r_{k+1}+r_k\quad(\epsilon_k=1),\qquad\partial T_k=E_k-r_k+r_{k+1}\quad(\epsilon_k=-1).$$ Thus $Z=\sum_k\epsilon_k T_k$ has boundary $\sum_k\epsilon_k E_k$: radial terms telescope, and every $A_i,B_i$ occurs once with each sign. Consequently $\partial Z=0$. [given]

1.2 The positive polygon-boundary cycle is a generator of $H_1(\partial P;\mathbb Z)$. Indeed, the polygon boundary has $4g$ vertices and successively oriented edges; its cellular boundary sends the edge from $v_k$ to $v_{k+1}$ to $v_{k+1}-v_k$ by [F2], so a one-chain is a cycle exactly when all its edge coefficients are equal, and there are no two-cells. The all-ones chain is therefore a primitive positive generator, with its sign fixed by the given boundary order. [F1, F2, given]

2.1 Before taking the quotient, the signed fan of step 1.1 is a relative cycle $\widetilde Z$ of $(P,\partial P)$, with boundary the positive polygon-boundary cycle. The polygon contracts linearly to $c$, so [F4] gives $H_1(P)=H_2(P)=0$; explicitly the point singular complex has one generator in every degree with differential identity in positive even degrees and zero in odd degrees, hence no positive homology. Therefore [F3] identifies $H_2(P,\partial P)$ with $H_1(\partial P)$ by boundary. Since its connecting image is the primitive positive generator computed in step 1.2, $[\widetilde Z]$ is precisely the positive relative generator, with no orientation sign left unspecified. [F3, F4, step 1.1, step 1.2]

3.1 In the surface CW structure there is one vertex, $2g$ oriented edges and one oriented two-cell. Each edge has coincident endpoints, so $d_1=0$ by [F2]. Under the quotient map of pairs $(P,\partial P)\to(\Sigma_g,\Sigma_g^1)$, the relative chain $\widetilde Z$ becomes $Z$ modulo $\Sigma_g^1$; hence step 2.1 and [F2] identify its relative class with the positive face generator. Its connecting boundary is zero by step 1.1, so $d_2=0$. There are no higher cells. Applying [F1] gives $$H_0(\Sigma_g)=\mathbb Z,\quad H_1(\Sigma_g)=\bigoplus_i(\mathbb Z[A_i]\oplus\mathbb Z[B_i]),\quad H_2(\Sigma_g)=\mathbb Z,$$ and zero higher homology. More precisely, [F1] applied to the one-skeleton gives $H_2(\Sigma_g^1)=0$; exactness of the pair sequence [F3] then injects $H_2(\Sigma_g)$ into $H_2(\Sigma_g,\Sigma_g^1)$, while the vanishing connecting image just proved makes the positive face generator lie in its image. Since $Z$ maps to that generator, $H_2(\Sigma_g)=\mathbb Z[Z]$, with no unlicensed comparison normalization. The stated edge loops have their specified cellular edge coordinates by their relative characteristic-interval classes. The signed fan carries the given surface orientation: positive triangles agree with the polygon orientation, negatively ordered triangles have coefficient minus one, and the prescribed edge identifications glue opposite boundary orientations. [F1, F2, F3, step 1.1, step 2.1]

4.1 Every homology group in step 3.1 is finite free. Its Ext term in [F5] is zero, by using the identity augmentation as a length-zero free resolution; for the zero group use the zero resolution. Hence evaluation identifies $H^n(\Sigma_g;\mathbb Z)$ with $\operatorname{Hom}(H_n(\Sigma_g;\mathbb Z),\mathbb Z)$ in every degree. Define $a_i,b_i$ by the coordinate duals of $[A_i],[B_i]$, and define $\omega$ by $\omega([Z])=1$. These classes exist and are unique. In particular there are actual singular cocycles representing all these classes; no cellular cochain is being evaluated by a singular formula. Evaluation is injective in degree two, so a product there is determined by its value on $Z$. [F5, step 3.1]

5.1 Take any two singular one-cocycles $u,w$. Put $u_i=u(A_i)$, $u'_i=u(B_i)$, $w_i=w(A_i)$, $w'_i=w(B_i)$ and $t_k=u(r_k)$. Since $u(\partial T_k)=0$, the two boundary formulas of step 1.1 give $$t_{k+1}=t_k+\epsilon_k u(E_k).$$ By [F6], the contribution of $\epsilon_k T_k$ to $(u\smile w)(Z)$ is $t_k w(E_k)$ when $\epsilon_k=+1$ and $-t_{k+1}w(E_k)$ when $\epsilon_k=-1$. This uses the actual first edge of the ordered triangle in each case. Coincident quotient vertices do not make its radial or boundary singular edge constant. [F6, step 1.1, step 4.1]
5.2 For $g=0$, use $S^2=D^2/\partial D^2$ with one vertex and one oriented two-cell. The cellular complex has $\mathbb Z$ in degrees zero and two and zero in all other degrees, so [F1] and the length-zero resolution argument of step 4.1 give $H^0=H^2=\mathbb Z$, $H^1=0$ and all higher groups zero. The positive cell orientation of [F2] specifies the generator dual to $\omega$; the empty list of degree-one classes has no asserted pair products, and $\omega^2=0$ by degree. [F1, F2, F5, step 4.1]

6.1 In the $i$th block $A_i,B_i,A_i^{-1},B_i^{-1}$, write $t$ for the initial radial value. The recurrence in step 5.1 gives successive values $t,t+u_i,t+u_i+u'_i,t+u'_i,t$. The four cup contributions are consequently $$tw_i+(t+u_i)w'_i-(t+u'_i)w_i-tw'_i=u_iw'_i-u'_iw_i.$$ The radial value returns to $t$ at the block's end, and in any event it has canceled from the formula. Summing all blocks gives the full calculation $$\langle[u]\smile[w],[Z]\rangle=\sum_{i=1}^g(u_iw'_i-u'_iw_i).$$ It holds for any representatives of the two classes, since their values on the edge cycles are their homology evaluations. [step 5.1]

7.1 Insert the coordinate duals from step 4.1 into step 6.1. For $u=a_i,w=b_j$ the sum is $\delta_{ij}$; for $u=b_i,w=a_j$ it is $-\delta_{ij}$; for two $a$'s or two $b$'s it is zero. The injectivity of degree-two evaluation in step 4.1 gives all four asserted equalities. These signs also agree with [F7]'s graded commutativity. Every product involving $\omega$ and a positive-degree class lands above degree two and is zero by step 4.1. The vertex-value unit from [F7] gives the remaining products and associativity. Thus the listed bases and multiplication specify the entire ring. [F7, step 4.1, step 6.1]


8.1 At $g=1$, step 6.1 is the single determinant $u_1w'_1-u'_1w_1$, with the positive product sign. Zero or repeated degree-one inputs give zero by that formula, and reversing orientation negates $Z$ and its normalized dual $\omega$ consistently. There is no empty surface or zero coefficient ring in this example. Radial edges are allowed to repeat as maps after the quotient, and all singular simplices, including degeneracies, are retained. AC occurs only in [F5]'s integral cycle projections and sections, as supplied by [F8]; the finite fan and its cocycle recurrence need none. [F8, step 4.1, step 6.1, step 7.1] ∎
