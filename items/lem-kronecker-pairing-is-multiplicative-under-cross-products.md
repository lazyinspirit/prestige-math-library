---
id: lem-kronecker-pairing-is-multiplicative-under-cross-products
kind: lemma
title: "The Kronecker pairing is multiplicative under cross products"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-kronecker-evaluation-pairing, lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives, def-singular-chain-cross-product-on-generators, lem-singular-chain-cross-product-boundary-formula, prop-singular-chain-cross-products-are-natural, def-additive-singular-cohomology-cross-product, lem-additive-singular-cohomology-cross-product-is-well-defined, def-homology-cross-product-for-tensor-complexes, thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism, def-singular-cup-product-on-cochains, thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses, lem-the-kunneth-cross-product-map-is-well-defined-and-natural, lem-singular-product-chain-equivalence-by-simplex-models]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.B, printed pp. 268-279: singular cross products and the Eilenberg-Zilber comparison; the evaluation argument is proved locally."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.B, cross products and the Kunneth formula, printed pp. 268-274; naturality and the boundary formula for the cross product"
dependency_level: 0
---

## Statement

Let $X,Y$ be spaces, $R$ a commutative unital ring, $p,q\ge0$,
$\alpha\in H^p(X;R)$, $\beta\in H^q(Y;R)$,
$c\in H_p(X;R)$ and $d\in H_q(Y;R)$. Then
$$\langle\alpha\times\beta,c\times d\rangle=\langle\alpha,c\rangle\langle\beta,d\rangle\in R.$$
The same identity holds for $c\in H_p(X;\mathbb Z)$ and
$d\in H_q(Y;\mathbb Z)$, using coefficient extension for the homology inputs.
If $c$ and $d$ instead have degrees $m,n$ with $m+n=p+q$, the left side is
zero unless $(m,n)=(p,q)$. Pairings in unequal total degrees are not asserted.
Both the additive shuffle convention and the external cup-product convention
of the cohomology cross product give this identity. No AC is required.

## Facts & Assumptions

**Given:** Spaces $X,Y$, a commutative unital ring $R$, cocycles $\varphi,\psi$ of degrees $p,q$, and cycles $z,w$ over $R$ of degrees $m,n$ with $m+n=p+q$. In the multiplicative identity take $m=p,n=q$. Integral input cycles are extended along $\mathbb Z\to R$.

[F1] [[def-kronecker-evaluation-pairing]] and [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]] define $\langle[\varphi],[c]\rangle=\varphi(c)$ by evaluation and prove it independent of both representatives and biadditive over $R$.

[F2] [[def-additive-singular-cohomology-cross-product]] represents $\alpha\times\beta$ by the composite $J(\varphi,\psi)T$, where $J(\varphi,\psi)(x\otimes y)=\varphi(x)\psi(y)$ for $|x|=p,|y|=q$ and vanishes on the other bidegrees of total degree $p+q$, and $T:C(X\times Y;R)\to C(X;R)\otimes_RC(Y;R)$ is a natural chain homotopy inverse of the shuffle $S$. By [[lem-additive-singular-cohomology-cross-product-is-well-defined]] the functional satisfies $\delta J(\varphi,\psi)=J(\delta\varphi,\psi)+(-1)^pJ(\varphi,\delta\psi)$, so it is a cocycle when $\varphi,\psi$ are cocycles, the composite with the chain map $T$ defines a class, and the product is $R$-bilinear and natural.

[F3] [[def-singular-chain-cross-product-on-generators]] gives the shuffle expansion of the chain cross product $S(c\otimes d)=c\times d$, and [[lem-singular-chain-cross-product-boundary-formula]] gives $\partial(a\times b)=\partial a\times b+(-1)^i a\times\partial b$ for $a\in C_i$, so a cross product of cycles is a cycle and $S$ is a chain map. [[prop-singular-chain-cross-products-are-natural]] makes it natural. These integral chain identities extend $R$-bilinearly by scalar extension.

[F4] [[def-homology-cross-product-for-tensor-complexes]] and [[lem-the-kunneth-cross-product-map-is-well-defined-and-natural]] make $[x]\times[y]=[x\otimes y]$ well defined and natural on homology. For cycles $z\in C_m(X;R)$ and $w\in C_n(Y;R)$, the singular class $[z]\times[w]$ is represented by $S(z\otimes w)\in C_{m+n}(X\times Y;R)$.

[F5] [[lem-singular-product-chain-equivalence-by-simplex-models]] supplies, for the shuffle $S$, its natural inverse $T$ and natural homotopies $ST\simeq 1$ and $TS\simeq 1$; in particular there is a natural chain homotopy $K$ with $dK+Kd=TS-1$ on $C(X;R)\otimes_RC(Y;R)$.

[F6] [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]] uses the external product $a\times b=\operatorname{pr}_X^*a\smile\operatorname{pr}_Y^*b$. [[def-singular-cup-product-on-cochains]] gives its front/back cochain formula, and [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]] supplies the Alexander-Whitney map $A$ and a natural homotopy $A-T=dH+Hd$ with the shuffle inverse of [F2], without AC.

## Proof

1.1 By [F2] the class $\alpha\times\beta$ is represented by the cocycle $J(\varphi,\psi)T$, and by [F4] the class $c\times d$ is represented by the cycle $S(z\otimes w)$, which is a cycle because $S(z\otimes w)$ has boundary $\partial z\times w+(-1)^m z\times\partial w=0$ by [F3]. The shuffle equivalence [F5] supplies the inverse $T$ and a homotopy $K$ with $dK+Kd=TS-1$ on the tensor complex, so the pairing can be computed on these representatives. [given, F2, F3, F4, F5]

2.1 Evaluation gives $(JT)(S(z\otimes w))=J(TS(z\otimes w))$. Since $z\otimes w$ is a cycle, $TS(z\otimes w)-z\otimes w=dK(z\otimes w)$. The cocycle $J=J(\varphi,\psi)$ annihilates this boundary by [F2], so the value is $J(z\otimes w)$. This equals $\varphi(z)\psi(w)$ when $(m,n)=(p,q)$, and is zero for every other bidegree with $m+n=p+q$, by the defining bidegree support of $J$. [F2, F5, step 1.1]

3.1 For $(m,n)=(p,q)$, [F1] identifies these values with the two Kronecker pairings, proving the identity. Representative independence follows from [F1, F2]. The front/back formula in [F6] identifies $JA$ with $\operatorname{pr}_X^*\varphi\smile\operatorname{pr}_Y^*\psi$: only the $(p,q)$ cut survives. Since $Jd=0$, its difference from $JT$ is $J(A-T)=JHd=\delta(JH)$, so these cochains represent the same class. This comparison uses no additive Kunneth bijectivity. Extension of integral cycles to $R$ commutes with shuffle and evaluation, proving the integral-input version. This includes degree zero, empty spaces and the zero ring. [F1, F2, F6, step 2.1] ∎
