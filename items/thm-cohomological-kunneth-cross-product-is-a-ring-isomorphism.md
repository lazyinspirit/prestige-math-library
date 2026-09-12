---
id: "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism"
kind: "theorem"
title: "Cohomological Kunneth cross product is a ring isomorphism"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses","thm-singular-cohomology-is-graded-commutative","prop-cup-product-is-natural-unital-and-associative","def-relative-cup-product","def-axiom-of-choice","lem-relative-singular-product-chain-equivalence-for-cw-pairs","lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses","lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal","thm-cup-product-leibniz-identity","def-singular-cup-product-on-cochains","thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses","lem-additive-singular-cohomology-cross-product-is-well-defined"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Theorems 3.15 and 3.18; Miller Proposition 29.2 and Theorem 33.3
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $R$ be a commutative unital ring. Give the graded tensor product the multiplication
$$(a\otimes b)(a'\otimes b')=(-1)^{|b||a'|}(a\smile a')\otimes(b\smile b').$$
For arbitrary spaces $X,Y$, external product $a\times b=\operatorname{pr}_X^*a\smile\operatorname{pr}_Y^*b$ gives a unital graded-ring homomorphism to $H^*(X\times Y;R)$. This multiplicativity requires no AC.

Assume in addition AC, that $R$ is a PID, and that either every $H_q(Y;R)$ or every $H_p(X;R)$ is finite free over $R$. Then this homomorphism is an isomorphism.

For CW pairs $(X,A),(Y,B)$ with supplied characteristic maps, relative external product is likewise a graded-ring homomorphism
$$H^*(X,A;R)\mathbin{\widehat\otimes}_R H^*(Y,B;R)\longrightarrow H^*(X\times Y,(A\times Y)\cup(X\times B);R),$$
where the hat denotes the displayed graded multiplication on the ordinary graded direct-sum tensor product, not a completion. Relative rings need not have units. This relative multiplicativity is choice-free for every commutative unital $R$. Under AC and the PID hypothesis it is an isomorphism if either every $H_q(Y,B;R)$ or every $H_p(X,A;R)$ is finite free. Neither additive assertion requires bounded dimension or finite-rank singular chain groups. Products have their ordinary product topologies; AC enters only in additive bijectivity.

## Facts & Assumptions

[F1] [[prop-cup-product-is-natural-unital-and-associative]] gives cochain associativity and naturality, and the vertex-value unit.

[F2] [[thm-singular-cohomology-is-graded-commutative]] gives the sign $(-1)^{pq}$ when interchanging absolute classes.

[F3] [[thm-cohomological-kunneth-isomorphism-under-finite-free-hypotheses]] gives additive bijectivity for arbitrary spaces under the stated PID, AC and degreewise finite-free homology hypotheses, in either factor.

[F4] [[lem-relative-singular-product-chain-equivalence-for-cw-pairs]] gives the quotient-cochain comparison for the CW product triad and identifies the actual relative external product with the cup of projection pullbacks. [[def-relative-cup-product]] defines the relative product through that comparison.

[F5] [[lem-relative-cohomological-kunneth-under-finite-free-homology-hypotheses]] supplies additive bijectivity for CW pairs with exactly the stated relative homology hypothesis, in either factor.

[F6] [[lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal]] gives a natural diagonal homotopy $H$ with $dH+Hd=WD-D$. Naturality for an inclusion $Z\hookrightarrow W$ makes $H(C_*(Z))\subset C_*(Z)\otimes C_*(Z)$.

[F7] [[thm-cup-product-leibniz-identity]] gives the positive-coboundary product rule and its explicit primitives for changing representatives.

[F8] [[def-axiom-of-choice]] supplies the arbitrary-rank PID splittings and simultaneous homology sections and bases used only in [F3] and [F5].

[F9] [[def-singular-cup-product-on-cochains]] gives the front/back formula. [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]] gives $A-T=dK+Kd$ between AW and the additive supplier's shuffle inverse. [[lem-additive-singular-cohomology-cross-product-is-well-defined]] gives $Jd=0$ on cocycles, descent, and independence of inverse.

## Proof

**Given:** First allow any commutative unital $R$. Every cohomology element and every tensor is a finite sum of homogeneous elements. For the relative calculation write $W=X\times Y$, $U=(A\times Y)\cup(X\times B)$, and $N=C_*(A\times Y;R)+C_*(X\times B;R)$.

1.1 The displayed tensor multiplication is well-defined by bilinearity and the $R$-balanced tensor relations, degree by degree. Its two three-factor parenthesizations have signs with exponents $|b||a'|+(|b|+|b'|)|a''|$ and $|b'||a''|+|b|(|a'|+|a''|)$, respectively, which agree. Associativity of the two cup products in [F1] therefore gives associativity of this multiplication. In the absolute case $1\otimes1$ is its unit because both degrees are zero. The same argument works for the relative cup algebra once its multiplication is specified below; it asserts no unit there. [F1, given]

1.2 For absolute cocycles $\varphi,\psi$, the AW external cochain $JA$ on $X\times Y$ is exactly $\operatorname{pr}_X^*\varphi\smile\operatorname{pr}_Y^*\psi$, by evaluating its single surviving $(p,q)$ cut. The additive external cochain is $JT$. By [F9], $$JA-JT=J(dK+Kd)=\delta(JK),$$ since $Jd=0$. Hence the external map in the statement is the very map of [F3], before any bijectivity assumption. For four absolute classes, write $\alpha=\operatorname{pr}_X^*a$, $\beta=\operatorname{pr}_Y^*b$, $\alpha'=\operatorname{pr}_X^*a'$, $\beta'=\operatorname{pr}_Y^*b'$. By [F1] and [F2], $$\alpha\beta\alpha'\beta'=(-1)^{|b||a'|}\alpha\alpha'\beta\beta'=(-1)^{|b||a'|}\operatorname{pr}_X^*(aa')\operatorname{pr}_Y^*(bb').$$ Thus the map is multiplicative, and $1\times1=1$ follows directly from the constant vertex cochains. [F1, F2, F9, given]

1.3 For a space pair $(Z,T)$, cochains vanishing on $C_*(T;R)$ form a differential graded subalgebra of $C^*(Z;R)$. Its coboundary preserves vanishing since faces remain in $T$, and its cup product preserves vanishing since the front and back faces of a simplex in $T$ remain there. By [F7], products of cocycles and all the representative-change primitives remain in this subalgebra. This defines the relative cohomology ring, with the associativity of [F1]; it is also [F4]'s relative product with the two subspaces both equal to $T$. Similarly $\mathcal E=\operatorname{Hom}_R(C_*(W;R)/N,R)$ is a differential graded subalgebra, since a simplex in either product subspace has all faces in that same subspace. The inclusion $$q^*:C^*(W,U;R)\hookrightarrow\mathcal E$$ preserves cup products literally on cochains. It induces an isomorphism on cohomology by [F4], so that isomorphism and its inverse are ring homomorphisms. [F1, F4, F7, given]

2.1 Choose four relative cocycles representing $a,b,a',b'$ and denote their projection pullbacks by $\alpha,\beta,\alpha',\beta'$ in that order; here these letters mean cochains. Then $f=\alpha\smile\beta$ and $f'=\alpha'\smile\beta'$ lie in $\mathcal E$ and represent $q^*(a\times b)$ and $q^*(a'\times b')$ by [F4]. Apply [F6] to the tensor evaluation $J(\beta,\alpha')$ on $C_*(W)\otimes C_*(W)$. As both inputs are closed, $Jd=0$ by the signed tensor calculation in [F9]. Thus $$(-1)^{|b||a'|}\alpha'\smile\beta-\beta\smile\alpha'=\delta(JH).$$ Set $k=-JH$. It vanishes on $N$: on a simplex in $A\times Y$, naturality of $H$ places both tensor factors in that subspace, where $\alpha'$ vanishes; on a simplex in $X\times B$, the same argument uses the vanishing of $\beta$. Hence $k\in\mathcal E$ and $\beta\smile\alpha'-(-1)^{|b||a'|}\alpha'\smile\beta=\delta k$ is an equality with a primitive in the required quotient complex. [F4, F6, F9, step 1.3]

3.1 Cochain associativity and the Leibniz rule now give $$ff'-(-1)^{|b||a'|}(\alpha\smile\alpha')\smile(\beta\smile\beta')=\alpha\smile\delta k\smile\beta'=(-1)^{|a|}\delta(\alpha\smile k\smile\beta').$$ This primitive belongs to $\mathcal E$: a simplex in either product subspace has its middle face in that same subspace, and $k$ vanishes there by step 2.1. Naturality of the front/back formula identifies $\alpha\smile\alpha'$ with the pullback of the relative product representatives for $aa'$, and likewise for $bb'$. Thus the equality in $H^*(\mathcal E)$ is exactly the desired multiplicative identity after applying $q^*$. Since $q^*$ is an injective ring isomorphism by step 1.3, the identity holds in $H^*(W,U;R)$. This also justifies using the relative cup products in the tensor algebra of step 1.1. [F1, F4, F7, step 1.1, step 1.3, step 2.1]

4.1 Now assume the PID and AC hypotheses of the appropriate additive assertion. In the absolute case apply [F3] to the map identified in step 1.2; in the relative case apply [F5] to the map in step 3.1. Each is bijective in every degree, and hence on the graded direct sum, since every element has finite degree support. A bijective multiplicative map has a multiplicative inverse: if $x=f(u)$ and $y=f(v)$ then $f^{-1}(xy)=uv=f^{-1}(x)f^{-1}(y)$. Thus these are ring isomorphisms. The AC uses in [F8] are precisely freeness and sections for arbitrary-rank PID cycles/boundaries, and simultaneous sections and finite bases of the homology modules across all degrees. No choice assumption occurred in steps 1.1–3.1. [F3, F5, F8, step 1.1, step 1.2, step 3.1]

5.1 At degree zero the sign in any swap of two degree-zero factors is $+1$, and the negative-degree primitive in step 2.1 is zero; its identity is ordinary commutativity of vertex values. If only one middle degree is zero, the same homotopy gives the stated positive sign without deleting the other degree. Empty spaces or $R=0$ give zero products; the zero ring is allowed for multiplicativity but excluded by the PID hypothesis for bijectivity. Full subspaces $A=X$ or $B=Y$ give zero relative rings on both sides, and empty $A,B$ recover the absolute CW case. A point factor retains its unnormalized degenerate chains and its vertex unit in the absolute case. Relative rings are not asserted unital when a subspace is nonempty. All face formulas retain degenerate simplices; zero classes give zero products by the representative-change primitives. The additive suppliers check zero-rank and rank-one homology, either finite-free factor and unbounded nonzero degrees. Only finite degree diagonals and finite sums are used, so no completed tensor product occurs. [F3, F4, F5, F7, step 1.1, step 1.2, step 1.3, step 2.1, step 3.1, step 4.1] ∎
