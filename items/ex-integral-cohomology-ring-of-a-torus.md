---
id: "ex-integral-cohomology-ring-of-a-torus"
kind: "example"
title: "Integral cohomology ring of a torus"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism","cor-homology-of-spheres","thm-topological-universal-coefficient-short-exact-sequence-for-cohomology","def-axiom-of-choice","thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses","def-singular-chain-cross-product-on-generators","lem-singular-chain-cross-product-boundary-formula","thm-topological-kunneth-short-exact-sequence-for-homology","def-exterior-algebra-of-a-finite-free-module"]
sources:
  references:
    - title: Hatcher, Example 3.16, printed p.216 (products of odd-dimensional
        spheres)
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Example

Assume AC. Orient both circles counterclockwise and give $T^2=S^1\times S^1$ the product orientation, first circle followed by second. Then
$$H^*(T^2;\mathbb Z)\cong\Lambda_{\mathbb Z}(x,y),\qquad |x|=|y|=1,$$
with $x^2=y^2=0$, $xy=-yx$, and $xy$ the positive degree-two generator: it evaluates to $+1$ on the oriented product cycle. AC is inherited from the current additive UCT and Künneth suppliers; the product and sign computations below are choice-free.

## Facts & Assumptions

[F1] [[cor-homology-of-spheres]] computes the circle's integral homology groups.

[F2] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives the evaluation exact sequence with left term $\operatorname{Ext}^1(H_{n-1},\mathbb Z)$, under AC.

[F3] [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]] gives the actual external ring isomorphism when one factor has finite-free integral homology in every degree, under AC for bijectivity.

[F4] [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]] gives $AS-1=dL+Ld$, with $A$ the AW map and $S$ the signed shuffle map.

[F5] [[def-singular-chain-cross-product-on-generators]] gives the two signed triangles of a product of edges; [[lem-singular-chain-cross-product-boundary-formula]] shows that products of cycles are cycles.

[F6] [[thm-topological-kunneth-short-exact-sequence-for-homology]] gives the homological cross-product exact sequence with Tor correction, under AC.

[F7] [[def-exterior-algebra-of-a-finite-free-module]] defines the exterior algebra as the tensor algebra modulo $v\otimes v$ for every degree-one vector $v$.

[F8] [[def-axiom-of-choice]] supplies the arbitrary-rank PID projections and sections and the simultaneous homology sections used by [F2], [F3] and [F6].

## Verification

**Given:** Let $z$ be the counterclockwise triangle-boundary singular cycle on $S^1$. The radial map from a triangle enclosing the origin to the unit circle sends its three successively oriented edges to three counterclockwise arcs, so it realizes the specified orientation. Write $\times$ for external product and omit the cup symbol in products of cohomology classes.

1.1 By [F1], $H_0(S^1;\mathbb Z)=\mathbb Z$, $H_1(S^1;\mathbb Z)=\mathbb Z$ and all higher groups are zero. Radial projection identifies the oriented triangle boundary with the circle. Its three successively oriented edges have primitive all-ones cycle: the simplicial one-cycle condition forces their coefficients to agree and there are no two-simplices in the boundary complex. The simplicial-to-singular comparison used in [F1] carries this positive generator to $[z]$. The Ext groups in [F2] vanish in every degree: for first variable $0$ use the zero resolution; for first variable $\mathbb Z$ use the resolution with $\mathbb Z$ in degree zero augmented by identity and no higher terms, whose Hom has no degree-one cohomology. Thus evaluation identifies $H^0(S^1;\mathbb Z)=\mathbb Z\mathbf1$ and $H^1(S^1;\mathbb Z)=\mathbb Zu$, with the unique $u$ satisfying $\langle u,[z]\rangle=1$, and higher cohomology is zero. In particular $u^2=0$ because its target is $H^2(S^1;\mathbb Z)=0$. [F1, F2, given]

2.1 All the homology groups in step 1.1 are finite free, so [F3] applies. Put $x=\operatorname{pr}_1^*u=u\times1$ and $y=\operatorname{pr}_2^*u=1\times u$. The graded tensor source has basis $1\otimes1$ in degree zero, $u\otimes1,1\otimes u$ in degree one, and $u\otimes u$ in degree two, with no other degrees. Its ring multiplication sends the squares of the degree-one basis elements to zero, their ordered product to $u\otimes u$, and their reversed product to $-u\otimes u$. Hence the target has basis $1,x,y,xy$ and the displayed multiplication relations. In particular $xy$ is a generator, rather than merely a nonzero class. [F3, step 1.1]
2.2 The shuffle $Z=S(z\otimes z)$ is a cycle by [F5]. By [F6], it is a generator of $H_2(T^2;\mathbb Z)$: the only nonzero tensor term in total degree two is $\mathbb Z[z]\otimes\mathbb Z[z]$, and every Tor term vanishes. To see the latter directly, each first variable is $0$ or $\mathbb Z$ by step 1.1, and tensoring its zero or length-zero identity resolution has zero degree-one homology. The generator $[Z]$ has the product orientation. Write the triangle-boundary chain as $z=\sum_i\epsilon_i\sigma_i$, where $\epsilon_i=\pm1$ is the orientation sign of its edge parameterization relative to the counterclockwise direction. On the square parameterized by $\sigma_i\times\sigma_j$, the coefficient $\epsilon_i\epsilon_j$ converts its parameter orientation to the positive product orientation. In the parameters $(s,t)$, its shuffle triangles have vertex lists $((0,0),(1,0),(1,1))$ with coefficient $+1$ and $((0,0),(0,1),(1,1))$ with coefficient $-1$. Their ordered edge determinants are respectively $+1$ and $-1$, so both signed triangles carry the positive $ds\wedge dt$ orientation. Their diagonal faces cancel; along arc boundaries the circle-cycle endpoint cancellations cancel the outer square faces. Thus $Z$ is precisely the sum of the positively oriented triangles in the product decomposition of the torus. Adjacent triangles induce opposite orientations on their shared edge, giving the same product orientation across their seams. [F5, F6, step 1.1]

3.1 For the formal degree-one module $\mathbb Ze\oplus\mathbb Zf$, the map $e\mapsto x$, $f\mapsto y$ kills every square: $$(rx+sy)^2=r^2x^2+rs(xy+yx)+s^2y^2=0.$$ It therefore induces a map from [F7]'s exterior quotient to the cohomology ring. In that quotient $e^2=f^2=0$ and $ef+fe=(e+f)^2-e^2-f^2=0$, so move every $f$ past every $e$ and delete repetitions to express every word in the span of $1,e,f,ef$. Their four images are independent by step 2.1. Thus the induced map is both surjective and injective, proving the claimed exterior-algebra presentation without assuming an abstract basis theorem. [F7, step 2.1]


3.2 Let $\varphi$ be a singular cocycle representing $u$, and let $J=J(\varphi,\varphi)$ be tensor evaluation. Then $\varphi(z)=1$, and the signed tensor differential gives $Jd=0$. The AW external cochain representing $xy$ therefore satisfies $$\langle xy,[Z]\rangle=JA S(z\otimes z)=J(z\otimes z)+J(dL+Ld)(z\otimes z)=1.$$ Here $d(z\otimes z)=0$ and $Jd=0$ kill the two homotopy terms separately. This proves the asserted positive normalization on the actual oriented cycle of step 2.2. No cellular cochain has been mistaken for a singular representative. [F4, step 1.1, step 2.1, step 2.2]

4.1 For arbitrary degree-one classes $a=rx+sy$ and $b=r'x+s'y$, the multiplication table gives $ab=(rs'-sr')xy$, including zero coefficients and repeated inputs. Products of $xy$ with a positive-degree class are zero because degrees above two vanish. The unit multiplies every class unchanged. Reversing one circle orientation replaces its generator and the oriented product cycle by their negatives, so the normalization changes consistently; interchanging the factors gives the sign $-1$ in degree two. The space and coefficients here are fixed and nonempty, so no empty-torus or zero-ring assertion is made. The shuffle and AW calculation retains degenerate simplices and checks the vertex and top degrees. AC is used exactly for the UCT cycle projections, the additive Künneth PID sections and the homological Künneth cycle/boundary constructions of [F8]. All ring arithmetic and orientation signs are the explicit finite calculations above. [F8, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2] ∎
