---
title: Independent meridian classes detected by individual winding maps
status: published
research_item: lem-author-6f173a9d0001-winding-independence
dependency_level: 4
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: §2.1, induced-chain-map construction on printed pp.110–111; Proposition
        2.9, following functoriality identities (i)–(ii), and Theorem 2.10,
        p.111
      statement: A continuous map induces a homomorphism on integral singular homology
        by postcomposition on singular simplices. These maps preserve identities
        and composition; homotopic continuous maps induce equal homomorphisms.
      hypotheses: Continuous maps of topological spaces, singular homology with
        integer coefficients, and a homotopy of the maps for the
        homotopy-invariance assertion; no CW or local-connectivity hypothesis.
      reading_limits: Read the induced-map construction on printed pp.110–111,
        Proposition 2.9, the following functoriality identities, and the
        statement of Theorem 2.10 in the online PDF during this repair. Import
        homotopy invariance without claiming a local reconstruction of its prism
        proof. Circle-generator normalization is supplied by the two declared
        published library results, not by an abstract circle-homology
        isomorphism.
---

## Prerequisites

- [lem-author-6f173a9d0001-isolated-meridians](item-lem-author-6f173a9d0001-isolated-meridians)
- [math:def-singular-chain-complex-and-singular-homology](https://alphabetamath.cc/item/def-singular-chain-complex-and-singular-homology)
- [math:def-singular-boundary-operator](https://alphabetamath.cc/item/def-singular-boundary-operator)
- [math:cor-geometric-unit-circle-has-fundamental-group-z](https://alphabetamath.cc/item/cor-geometric-unit-circle-has-fundamental-group-z)
- [math:prop-the-first-hurewicz-map-in-degree-one-is-abelianization](https://alphabetamath.cc/item/prop-the-first-hurewicz-map-in-degree-one-is-abelianization)
- [` Allen Hatcher, Algebraic Topology · §2.1, induced-chain-map construction on printed pp.110–111; Proposition 2.9, following functoriality identities (i)–(ii), and Theorem 2.10, p.111 `](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)


## Statement

For $M$ and the meridians $\gamma_k$ supplied by the isolated-meridian disk construction, the classes $[\gamma_k]$ are linearly independent in the singular homology group $H_1(M;\mathbb Z)$. Here $H_1$ is the group of singular one-cycles modulo boundaries. In particular it contains a subgroup isomorphic to $\bigoplus_{k\in\mathbb Z}\mathbb Z$.

## Statement references

[lem-author-6f173a9d0001-isolated-meridians](item-lem-author-6f173a9d0001-isolated-meridians)

[math:def-singular-chain-complex-and-singular-homology](https://alphabetamath.cc/item/def-singular-chain-complex-and-singular-homology)

## External input

Hatcher, §2.1, printed pp.110–111, constructs induced integral singular-homology homomorphisms by postcomposition on simplices; Proposition 2.9 and the following identities give their functoriality. Theorem 2.10 (p.111) gives homotopy invariance for continuous maps of arbitrary topological spaces. Only these facts are imported here. The radial deformation of $\mathbb C^*$ onto $S^1$ is explicitly $z\mapsto((1-s)+s/|z|)z$ for $0\leq s\leq1$; its endpoint is the continuous radial projection $r(z)=z/|z|$. No general arrangement-homology formula is imported.

## Facts & Assumptions

[F1] **Given:** The disks and continuous nonvanishing linear forms of [lem-author-6f173a9d0001-isolated-meridians](item-lem-author-6f173a9d0001-isolated-meridians). **Goal:** Detect every coefficient in a finite integral relation between their boundary classes.

[F2] The induced-map and homotopy-invariance facts in the External input section are imported from Hatcher at the cited locators.

[F3] [math:def-singular-chain-complex-and-singular-homology](https://alphabetamath.cc/item/def-singular-chain-complex-and-singular-homology) defines $H_1(X;\mathbb Z)=\ker\partial_1/\operatorname{im}\partial_2$. The boundary formula is supplied by [math:def-singular-boundary-operator](https://alphabetamath.cc/item/def-singular-boundary-operator). Identify the oriented singular simplex $\Delta^1$ with $[0,1]$ in its vertex order.

[F4] For the geometric unit circle $S^1\subset\mathbb C$, [math:cor-geometric-unit-circle-has-fundamental-group-z](https://alphabetamath.cc/item/cor-geometric-unit-circle-has-fundamental-group-z) identifies the based homotopy class of $t\mapsto e^{2\pi int}$ with $n\in\mathbb Z$. Here $\pi_1$ is the group of based loops modulo endpoint-fixed homotopy. For any path-connected space $X$, [math:prop-the-first-hurewicz-map-in-degree-one-is-abelianization](https://alphabetamath.cc/item/prop-the-first-hurewicz-map-in-degree-one-is-abelianization) identifies $\pi_1(X,x_0)^{\mathrm{ab}}$ with $H_1(X;\mathbb Z)$, sending a based loop to its singular homology class.

## Proof

**Proof technique:** direct.

1.1 Parametrize each boundary loop as the singular one-simplex $c_k(t)=\gamma_k(2\pi t)$ for $0\leq t\leq1$. Its endpoints agree, so $\partial_1c_k=c_k(1)-c_k(0)=0$. Thus $[\gamma_k]$ denotes precisely the class of $c_k$ in the cycle quotient of [F3]. [F1, F3]

1.2 Put $\eta(t)=e^{2\pi it}$. The circle is path-connected: writing a point as $e^{i\theta}$, the path $s\mapsto e^{is\theta}$ joins $1$ to it. By [F4], $\pi_1(S^1,1)\cong\mathbb Z$ with generator represented by $\eta$. This group is already abelian, so the degree-one Hurewicz isomorphism of [F4] sends that generator to the singular class $[\eta]$. Consequently there is an isomorphism $\lambda:H_1(S^1;\mathbb Z)\to\mathbb Z$ specified by $\lambda([\eta])=1$. [F4]

2.1 For each integer $\ell$, restriction of $L_\ell$ gives a continuous map $M\to\mathbb C^*$ by [F1]. Define the homomorphism $w_\ell=\lambda\circ(r\circ L_\ell)_*:H_1(M;\mathbb Z)\to\mathbb Z$ using [F2]. Postcomposition on singular simplices means that it sends $[c_k]$ to $\lambda([r\circ L_\ell\circ c_k])$. [F1, F2, step 1.1, step 1.2]

3.1 If $k=\ell$, [F1] gives $L_\ell(c_k(t))=\varepsilon e^{2\pi it}$, so radial projection gives $\eta$ and $w_\ell([\gamma_k])=1$. If $k\ne\ell$, $L_\ell$ is nonzero on all of $D_k$. The extension $r\circ L_\ell:D_k\to S^1$ contracts the boundary map $S^1\to S^1$ to a constant by contracting the disk linearly to its centre. By [F2] its induced image of $[\eta]$ equals that of the constant map. A constant singular one-simplex is the boundary of the constant singular two-simplex, whose alternating faces have coefficients $1,-1,1$, so this image is zero by [F3]. Hence $w_\ell([\gamma_k])$ is the Kronecker delta. [F1, F2, F3, step 1.1, step 1.2, step 2.1]

4.1 Apply $w_\ell$ to any finite integral relation $\sum_k n_k[\gamma_k]=0$. Step 3.1 gives $n_\ell=0$ for every $\ell$, proving independence. The homomorphism from the finite-support direct sum $\bigoplus_{k\in\mathbb Z}\mathbb Z$ that sends its $k$th basis element to $[\gamma_k]$ is therefore injective, giving the asserted subgroup. [step 2.1, step 3.1, algebra] ∎
