---
id: thm-self-intersection-is-the-euler-number-of-the-normal-bundle
kind: theorem
title: "The self-intersection number is the Euler number of the normal bundle"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-self-intersection-number-of-an-oriented-submanifold, lem-normal-push-off-zeros-are-self-intersection-points, prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual, lem-pullback-of-the-thom-class-along-a-transverse-section, lem-normal-bundle-of-the-zero-locus-of-a-transverse-section, def-euler-class-by-zero-section-pullback-of-the-thom-class, def-kronecker-evaluation-pairing, cor-poincare-duality-gives-a-nonsingular-cup-pairing, def-cap-duality-map-for-an-oriented-manifold, def-fundamental-class-of-a-compact-oriented-manifold, thm-oriented-intersection-number-is-homotopy-invariant, thm-intersection-number-under-factor-interchange, def-local-oriented-intersection-sign, def-oriented-intersection-number, def-axiom-of-choice, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, prop-two-tubular-neighbourhood-germs-are-isomorphic-near-the-zero-section, thm-parametric-transversality, lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section, lem-second-countable-smooth-manifolds-have-cw-homotopy-type]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
dependency_level: 3
---

## Statement

Assume AC. Let $M$ be an oriented boundaryless smooth $n$-manifold, $A^a\subseteq M$ a compact boundaryless oriented embedded submanifold with $2a=n$, and let $\nu_A=TM|_A/TA$ carry the orientation induced by $M$ and $A$ ([[prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold]]). Then the self-intersection number of [[def-self-intersection-number-of-an-oriented-submanifold]] is well defined and $$A\cdot A=\langle e(\nu_A),[A]\rangle\in\mathbb Z,$$ where $e(\nu_A)\in H^{a}(A;\mathbb Z)$ is the Euler class of [[def-euler-class-by-zero-section-pullback-of-the-thom-class]] and $[A]\in H_a(A;\mathbb Z)$ is the fundamental class. In particular the self-intersection number is independent of the tubular embedding and of the transverse push-off, and it is an invariant of the pair $(A,\nu_A)$. For a rank-$r$ oriented bundle $E\to M$ with $M$ closed oriented of dimension $n=r$ and a transverse section $s$, the signed zero count equals $\langle e(E),[M]\rangle$; this is the form in which the theorem is applied below.

## Facts & Assumptions

**Given:** The oriented boundaryless $M$, the closed oriented embedded $A^a$ with $2a=n$, the normal bundle $\nu_A$ oriented by the tangent-first convention of the statement, a small transverse push-off section $s$ and its push-off $A_s$.

[F1] The local oriented intersection sign of the push-off equals the local zero index of the section: $\varepsilon_{(A,A_s)}(\varphi(x))=\operatorname{sign}\det\partial_\nu s_x$ at every zero $x$ of $s$, with the vertical derivative computed in the orientations of $A$ and of $\nu_A$ ([[lem-normal-push-off-zeros-are-self-intersection-points]]).

[F2] The zero locus of a transverse section of an oriented bundle represents a Koszul multiple of the Euler dual: $e(E)\cap[A]=(-1)^{r(n-r)}(i_Z)_*[Z]$, and for a $0$-dimensional zero locus the factor is $1$ ([[prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual]]).

[F3] The Kronecker pairing is $\langle[\varphi],[c]\rangle=\varphi(c)$, and the fundamental class of a compact oriented manifold is the unique class restricting to the prescribed local generator at each point ([[def-kronecker-evaluation-pairing]], [[def-fundamental-class-of-a-compact-oriented-manifold]]).

[F4] The self-intersection number is $A\cdot A:=I(A,A_s)$, using the oriented intersection number with the first factor $A$ and the second factor the push-off ([[def-self-intersection-number-of-an-oriented-submanifold]]).

[F7] The Euler class is $e(\xi)=e_{\rm Th}(\xi):=s^*j^*(u_\xi)$, the zero-section pullback of the normalized Thom class ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

## Proof

**Proof technique:** count the zeros of the push-off section and identify that count with the Euler number through the zero-locus duality; then discharge well-definedness.

1.1 The finite spanning-section construction in [[def-self-intersection-number-of-an-oriented-submanifold]], using [[lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section]] and [[thm-parametric-transversality]], supplies a small section $s$ transverse to the zero section. Smooth bundles on $A$ meet the Thom hypotheses by [[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]. Use a normalized tube and let $A_s=\varphi(s(A))$ be its push-off. By [F1], $A\cap A_s=\varphi(Z(s))$ with $\varepsilon_{(A,A_s)}(\varphi(x))=\operatorname{sign}\det\partial_\nu s_x$ for every $x\in Z(s)$, so $A\cdot A=I(A,A_s)=\sum_{x\in Z(s)}\operatorname{sign}\det\partial_\nu s_x$ by [F4]. [F1, F4, given]

2.1 The Euler number of the section. Apply [F2] to the bundle $\nu_A\to A$ and the section $s$: with the orientation of $Z(s)$ induced by $A$ and $\nu_{Z(s)}\cong \nu_A|_{Z(s)}$, and with $z=\dim Z(s)=a-a=0$ so that the Koszul factor is $1$, $e(\nu_A)\cap[A]=(i_{Z(s)})_*[Z(s)]$. Applying zero-chain augmentation to this cap class (the top-degree cap formula evaluates the cocycle on each simplex) gives $\langle e(\nu_A),[A]\rangle=\sum_x\sigma_x$ with $\sigma_x$ the orientation sign of $x\in Z(s)$, where $e(\nu_A)$ is the class of [F7]. Comparing with step 1.1, it remains to identify $\sigma_x$ with $\operatorname{sign}\det\partial_\nu s_x$: the normal bundle of the zero locus in $A$ is $\nu_A|_{Z(s)}$ oriented by [[lem-normal-bundle-of-the-zero-locus-of-a-transverse-section]], and its fibre orientation is exactly the one in which $\partial_\nu s_x$ is measured in the determinant computation of [F1]; hence the signs agree. [F1, F2, F3, F7, step 1.1, algebra]

3.1 Well-definedness. Every small transverse section in every normalized tube gives the same Euler number by steps 1.1–2.1, so no tube-isotopy theorem is needed. This also proves the signed-zero-count clause for a rank-$r$ oriented bundle over a closed $r$-manifold by applying [F2] and the same augmentation argument. Hence the value depends only on $(A,\nu_A)$, and the definition is well posed. The closed-oriented assumption on $A$ and the compactness of $A$ are used; compactness of $M$ is not. [F2, step 1.1, step 2.1] ∎

