---
id: "cor-poincare-duality-gives-a-nonsingular-cup-pairing"
kind: "corollary"
title: "Poincaré duality gives a nonsingular cup pairing"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-poincare-duality-for-oriented-topological-manifolds","lem-closed-oriented-pid-manifolds-have-finitely-generated-homology","def-cap-product-with-cohomology-first","def-singular-cup-product-on-cochains","thm-singular-cohomology-is-graded-commutative","thm-topological-universal-coefficient-short-exact-sequence-for-cohomology","lem-singular-uct-extension-from-cycle-projections","def-singular-cochain-complex-with-coefficients","cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules","def-axiom-of-choice"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, pp.249–250
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: Miller, Lectures on Algebraic Topology, Theorem 38.8
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. If $M$ is a closed $R$-oriented $n$-manifold and $R$ is a field, the pairing
$$H^p(M;R)\times H^{n-p}(M;R)\longrightarrow R,\qquad(a,b)\longmapsto\langle a\smile b,[M]\rangle$$
is perfect: both adjoint maps into the $R$-linear dual of the other factor are isomorphisms. The relevant groups are finite-dimensional, as proved by the preceding finite-generation lemma; thus in particular the assertion holds under the originally stated finite-dimensionality hypothesis.

For $R=\mathbb Z$ and an integral orientation, the same formula induces a unimodular pairing on $H^p(M;\mathbb Z)/\operatorname{Tor}$ and $H^{n-p}(M;\mathbb Z)/\operatorname{Tor}$: these are finite free abelian groups and both adjoints to their integer duals are isomorphisms. Here $\operatorname{Tor}$ denotes the subgroup of elements annihilated by some positive integer. No perfectness assertion is made for arbitrary coefficient rings.

## Facts & Assumptions

[F1] [[thm-poincare-duality-for-oriented-topological-manifolds]] gives $D_M(a)=a\cap[M]$ as an isomorphism on a closed oriented manifold.

[F2] [[lem-closed-oriented-pid-manifolds-have-finitely-generated-homology]] proves finite generation and vanishing outside degrees $0,\ldots,n$ over a PID.

[F3] [[def-cap-product-with-cohomology-first]] and [[def-singular-cup-product-on-cochains]] give the front-evaluation/back-face formulas, with no extra sign.

[F4] [[thm-singular-cohomology-is-graded-commutative]] gives $a\smile b=(-1)^{p(n-p)}b\smile a$.

[F5] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] gives the exact integral-homology evaluation sequence. [[lem-singular-uct-extension-from-cycle-projections]] proves the same sequence for any free complex over a PID, and proves comparison independence when Ext is computed using another projective resolution.

[F6] [[def-singular-cochain-complex-with-coefficients]] identifies field cochains with $\operatorname{Hom}_R(C_*(M;R),R)$ and the positive dual differential.

[F7] [[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]] decomposes a finitely generated abelian group as a finite free part plus finitely many finite cyclic groups.

[F8] [[def-axiom-of-choice]] is assumed for [F1] and the free-module projections and comparison lifts in [F5].

## Proof

**Given:** $M,n,R$ and the specified orientation, with $R$ a field or $\mathbb Z$. First take $0\le p\le n$ and put $q=n-p$. Let $z$ be a cycle representing $[M]$, and let $\alpha,\beta$ be cocycles representing $a,b$.

1.1 For each singular $n$-simplex $\sigma$, the formulas [F3] give $$\beta(\alpha\cap\sigma)=\alpha(\sigma[0,\ldots,p])\,\beta(\sigma[p,\ldots,n])=(\alpha\smile\beta)(\sigma).$$ Linearity gives $\beta(\alpha\cap z)=(\alpha\smile\beta)(z)$. Evaluation on a cycle is unchanged if a cocycle changes by $\delta h$, because $(\delta h)(c)=h(\partial c)=0$; it is unchanged if the cycle changes by $\partial d$, because a cocycle vanishes on such a boundary. Thus the identity descends, using [F1], to $$\langle a\smile b,[M]\rangle=\langle b,D_M(a)\rangle.$$ It is bilinear in both classes and is independent of all three representatives. [F1, F3, F6, given]

1.2 Suppose $R=F$ is a field. It is a PID: every nonzero ideal contains a nonzero $u$, hence contains $u^{-1}u=1$ and is the whole ring, while the zero ideal is principal. Apply [F5]'s general PID-complex lemma to the free singular complex $C_*(M;F)$ and the coefficient module $F$, with the cochain identification [F6]. By [F2] the groups $H_j(M;F)$ are finitely generated. A finite spanning list over a field can be reduced to a basis: whenever it is dependent, solve a nonzero dependence coefficient for one vector and delete that vector without changing the span; the list shortens, so the procedure terminates with a finite independent spanning list. Thus these groups are finite-dimensional and finite free. A finite free module has a length-zero free resolution, so the degree-one Hom cohomology computing its Ext is zero. The comparison assertion in [F5] consequently kills the Ext term in every degree, including $H_{-1}=0$. Thus evaluation is an isomorphism $$h_j:H^j(M;F)\xrightarrow{\sim}\operatorname{Hom}_F(H_j(M;F),F).$$ It is this field-complex application, rather than an unjustified replacement of integral homology by field homology in the topological UCT statement, that gives the required map. [F2, F5, F6, F8, given]

1.3 Suppose $R=\mathbb Z$. By [F2] and [F7], write $H_{j-1}(M;\mathbb Z)\cong\mathbb Z^r\oplus\bigoplus_{i=1}^t\mathbb Z/(d_i)$ with $d_i>1$. Use the free resolution whose degree-zero term is $\mathbb Z^{r+t}$, whose degree-one term is $\mathbb Z^t$, and whose differential sends its $i$th basis vector to $d_i$ times the $(r+i)$th basis vector. Its cokernel is the displayed group and its differential is injective. Applying Hom into $\mathbb Z$ gives degree-one cokernel $\bigoplus_i\mathbb Z/(d_i)$, a finite group. By comparison in [F5] this computes the Ext term in the integral UCT. Therefore the kernel of evaluation $h_j:H^j(M;\mathbb Z)\to\operatorname{Hom}_{\mathbb Z}(H_j(M;\mathbb Z),\mathbb Z)$ is finite, and hence consists of torsion elements. Conversely every torsion element maps to zero: the Hom target is torsion-free, since an integer multiple of a homomorphism is zero only when each of its integer values is zero. Thus $\ker h_j=\operatorname{Tor}H^j(M;\mathbb Z)$. Every integer homomorphism from $H_j$ kills its torsion, so UCT surjectivity gives an induced isomorphism $$\bar h_j:H^j(M;\mathbb Z)/\operatorname{Tor}\xrightarrow{\sim}\operatorname{Hom}_{\mathbb Z}(H_j(M;\mathbb Z)/\operatorname{Tor},\mathbb Z).$$ These torsion-free quotients are finite free by [F2] and [F7]. At $j=0$ take $r=t=0$ for $H_{-1}=0$. [F2, F5, F7, F8, given]

2.1 Over the field, the adjoint in the $b$ variable of the pairing in step 1.1 is the composite $$H^q(M;F)\xrightarrow{h_q}\operatorname{Hom}_F(H_q(M;F),F)\xrightarrow{D_M^*}\operatorname{Hom}_F(H^p(M;F),F).$$ Its first map is the evaluation isomorphism of step 1.2, and its second map is precomposition with the isomorphism [F1]; its inverse is precomposition with $D_M^{-1}$. Thus this adjoint is an isomorphism. Over $\mathbb Z$, the pairing vanishes on torsion in either variable, since its values are integers and it is bilinear. Duality [F1] sends torsion onto torsion, since it and its inverse commute with integer multiplication, so it induces an isomorphism on the free quotients. The same composite with $\bar h_q$ of step 1.3 gives an isomorphism from the second free quotient onto the integer dual of the first. [F1, step 1.1, step 1.2, step 1.3]

3.1 Repeat step 2.1 with $p,q$ interchanged. It says that the map sending $a$ to the functional $b\mapsto\langle b\smile a,[M]\rangle$ is an isomorphism, over the field or on the integer free quotients. By [F4], the other adjoint of our original pairing is this map multiplied by $(-1)^{pq}$. Multiplication by that unit is its own inverse, so this adjoint is an isomorphism too. This proves perfectness and integral unimodularity with both arguments in the stipulated order; no identification with an infinite-dimensional double dual has been assumed. [F4, step 2.1]

4.1 When $M$ is empty all groups are zero and both adjoints are isomorphisms of zero modules. For a point with orientation unit $u$, $n=p=q=0$ and the pairing is $(a,b)\mapsto uab$, whose adjoints multiply by the unit $u$. The same proof includes disconnected closed manifolds and degree endpoints $p=0,n$. If $p$ is outside $0,\ldots,n$, both factors vanish by [F2] and the negative-degree conventions, so perfectness holds for the zero modules. A field and $\mathbb Z$ are nonzero, so the zero ring is outside the hypotheses. Degenerate simplices satisfy step 1.1 without alteration. All AC use is inherited from [F1] and [F5] as specified in [F8]; finite cyclic resolutions and the two adjoint compositions add no infinite selection. [F1, F2, F3, F5, F8, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1] ∎
