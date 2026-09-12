---
id: "lem-relative-singular-product-chain-equivalence-for-cw-pairs"
kind: "lemma"
title: "Relative singular product comparison for CW pairs"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-relative-cw-inclusions-are-cofibrations","thm-cover-small-inclusion-is-a-chain-homotopy-equivalence","def-prism-operator-for-a-homotopy","lem-the-prism-triangulation-has-the-stated-oriented-boundary","thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses","def-relative-singular-cochain-complex","def-relative-cup-product"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.B, printed p.276 relative quotient
        comparison and pp.277–278 shuffle; local proof gives the singular
        chain/cochain comparison
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $(X,A)$ and $(Y,B)$ be CW pairs with their characteristic maps supplied, and let $R$ be a commutative unital ring. Give products their ordinary product topologies and use unnormalized singular chains. Put $U=(A\times Y)\cup(X\times B)$. The natural shuffle map descends to a chain homotopy equivalence
$$C_*(X,A;R)\otimes_R C_*(Y,B;R)\longrightarrow C_*(X\times Y,U;R).$$
There is a compatible Alexander–Whitney inverse through the quotient by $C_*(A\times Y;R)+C_*(X\times B;R)$. Dualizing gives a cochain homotopy equivalence, and the induced relative external product is the relative cup product of the two projection pullbacks. These cohomology comparisons are natural in maps of pairs. No dimension bound, finite-rank chain hypothesis, or AC is required.

## Facts & Assumptions

[F1] [[prop-relative-cw-inclusions-are-cofibrations]] supplies HEP into every topological target with ordinary products, arbitrary CW dimension and supplied characteristic maps, without choice.

[F2] [[thm-cover-small-inclusion-is-a-chain-homotopy-equivalence]] supplies a small-chain retraction $r$ and homotopy $D$ with $1-ir=dD+Dd$. Its proof constructs them from finite affine subdivision sums and least subdivision counts; hence each preserves the chains on every subspace.

[F3] [[def-prism-operator-for-a-homotopy]] and [[lem-the-prism-triangulation-has-the-stated-oriented-boundary]] give a prism $P$ with $dP+Pd=H_{1\#}-H_{0\#}$. Its formula preserves chains in a subspace which the homotopy preserves.

[F4] [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]] supplies natural AW and shuffle chain maps and natural homotopies for both inverse identities, over $R$ and without choice.

[F5] [[def-relative-singular-cochain-complex]] identifies relative cochains with Hom on the relative free chain complex, with positive coboundary. [[def-relative-cup-product]] defines the product first on the quotient by the sum of subspace chain complexes, and then uses a proved quotient-cochain comparison.

## Proof

**Given:** Write $W=X\times Y$, $C(Z)=C_*(Z;R)$, $N=C(A\times Y)+C(X\times B)$, $E=C(W)/N$, and $Q=C(W)/C(U)$. The degreewise bases of these quotients are exactly the singular simplices not in their respective indicated subspace bases. Tensor differentials have the sign $d(c\otimes e)=dc\otimes e+(-1)^{|c|}c\otimes de$.

1.1 Let $T_X=(X\times\{0\})\cup(A\times I)$ with its subspace topology in $X\times I$. Apply [F1] with target $T_X$, initial map $x\mapsto(x,0)$ and prescribed homotopy $(a,t)\mapsto(a,t)$. These maps are continuous into the subspace because their ambient maps are continuous and land in it. The resulting $r_X:X\times I\to T_X$ fixes $T_X$. Write its coordinates as $(H_X,h_X)$. Then $H_X(x,0)=x$, $H_X(a,t)=a$, and the open set $O_X=\{x:h_X(x,1)>0\}$ contains $A$ and satisfies $H_X(O_X,1)\subset A$. Indeed a point of $T_X$ with positive second coordinate has its first coordinate in $A$. Repeat this construction for $(Y,B)$ to obtain $H_Y,O_Y$. Only two applications of the choice-free HEP construction are involved. [F1, given]
1.2 Put $M=C(A)\otimes C(Y)+C(X)\otimes C(B)\subset C(X)\otimes C(Y)$. The quotient by $M$ is canonically $V=C(X,A)\otimes C(Y,B)$: its basis tensors are precisely pairs of simplices with the first not wholly in $A$ and the second not wholly in $B$. This identification commutes with the tensor differential since faces in the subspace become zero on either side. Naturality in [F4], applied to each of the two inclusions of pairs of spaces, shows that AW maps $N$ into $M$, shuffle maps $M$ into $N$, and their homotopies preserve $N$ and $M$ on their respective sides. They therefore descend to maps $a:E\to V$, $b:V\to E$ and homotopies $ab\simeq1_V$, $ba\simeq1_E$. This uses naturality of the homotopies as well as of the chain maps; it does not assume that an individual AW cut of a simplex in $U$ belongs to $M$. [F4, given]

2.1 The homotopy $H((x,y),t)=(H_X(x,t),H_Y(y,t))$ preserves both $A\times Y$ and $X\times B$, and therefore $U$. The sets $V_1=U\cap(O_X\times Y)$ and $V_2=U\cap(X\times O_Y)$ form an open cover of $U$: points in $A\times Y$ lie in $V_1$, and points in $X\times B$ lie in $V_2$. At time one, $H$ maps $V_1$ into $A\times Y$ and $V_2$ into $X\times B$. Put $F=H_{1\#}:C(U)\to C(U)$, and let $P$ be its prism. Thus $F-1=dP+Pd$, with $P(N)\subset N$ by the explicit simplex formula in [F3]. [F3, step 1.1]

3.1 Apply [F2] to this open cover of $U$, writing $R=ir$ for the small-chain retraction regarded as an endomorphism of $C(U)$. We have $1-R=dD+Dd$. Both $R$ and $D$ preserve chains in $A\times Y$ and in $X\times B$: in the cited construction every affine term on a simplex has image inside that simplex's image, and taking finite sums, boundaries and least subdivision counts does not change this property. Hence they preserve $N$. Since $R$ lands in cover-small chains, step 2.1 gives $FR(C(U))\subset N$. Combining the two homotopy identities gives $$1-FR=(1-R)+(1-F)R=d(D-PR)+(D-PR)d.$$ Consequently $K=D-PR$ preserves $N$ and descends to a contraction $k$ of $J=C(U)/N$: $dk+kd=1_J$. This contraction is prescribed by the constructions and requires no basis selection. [F2, step 2.1]

4.1 Regard $J$ as the subcomplex of $E$ spanned by simplices wholly in $U$ but not wholly in either of its two members. Extend $k$ to a graded map $e:E\to J\subset E$ by zero on all the remaining simplex basis vectors. There is no claim that $e$ commutes with $d$. The map $T=1-de-ed$ does commute with $d$ and kills $J$, by step 3.1. Hence it factors as $s q$, where $q:E\to Q$ is the canonical quotient and $s:Q\to E$ is a chain map. Since $e$ lands in $J$, $qT=q$, so $qs=1_Q$ by surjectivity of $q$. Also $sq=1-de-ed$. Thus $q$ and $s$ are chain homotopy inverses. With positive coboundary, precomposition by $e$ obeys $\delta(\phi e)+(\delta\phi)e=\phi(de+ed)$ in the corresponding degrees. This explicitly dualizes the homotopy equivalence, without any appeal to exactness of Hom. [F5, step 3.1]


5.1 The relative shuffle is $qb:V\to Q$, which is well-defined already on the original quotient tensors. Its homotopy inverse is $as:Q\to V$: $(as)(qb)=a(sq)b\simeq ab\simeq1_V$ and $(qb)(as)=q(ba)s\simeq qs=1_Q$. Composing the homotopies just written gives actual chain homotopies, and precomposition dualizes each identity as in step 4.1. Since $q,a,b$ come from natural inclusions, quotient maps and [F4], their induced cohomology maps are natural. The inverse of the isomorphism $q^*$ on cohomology is unique and hence natural too: invert $q^*$ in each commuting square. No natural choice of the auxiliary $s$ is asserted or needed. [F4, step 1.2, step 4.1]

6.1 For relative cocycles $\varphi\in C^p(X,A;R)$ and $\psi\in C^q(Y,B;R)$ define $J(\varphi,\psi)(c\otimes e)=\varphi(c)\psi(e)$ on the $(p,q)$ summand and zero on all other total-degree summands. Evaluation on the signed tensor differential gives $\delta J(\varphi,\psi)=J(\delta\varphi,\psi)+(-1)^pJ(\varphi,\delta\psi)$. Thus cocycles give cocycles and changing a representative by a coboundary changes $Ja$ by a coboundary; for a second-factor change the primitive is $(-1)^pJ(\varphi,\theta)a$. On $E$ the AW front/back formula for $Ja$ is exactly $\operatorname{pr}_X^*\varphi\smile\operatorname{pr}_Y^*\psi$. By [F5] and step 4.1 the corresponding class in $H^{p+q}(W,U;R)$ is $(q^*)^{-1}[Ja]=[Jas]$. This is the claimed relative external product and its compatibility with the cup construction. Pair pullbacks commute with the evaluations and AW, so step 5.1 also proves its naturality. [F4, F5, step 1.2, step 4.1, step 5.1]

7.1 If either space is empty or $R=0$, all product complexes are zero. If $A=X$ or $B=Y$, then $N=C(U)=C(W)$ and $V=Q=0$. If $A=B=\varnothing$, then $N=C(U)=0$ and $q$ is the identity, recovering [F4]; with just one empty member the same open-cover and quotient formulas still apply. In degree zero the AW and shuffle identifications are the vertex-pair tensor identification, and prisms still have the top-minus-bottom boundary. A one-point factor retains all its unnormalized higher simplices. No step discards degenerate simplices. The only degree sums are finite sums along a fixed total degree; all negative chain groups are zero. Homotopy times zero and one were checked in steps 1.1–2.1. Finite formulas, least subdivision counts and extension by zero are specified throughout, so the argument uses no choice axiom even in unbounded dimensions. [F3, F4, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1] ∎
