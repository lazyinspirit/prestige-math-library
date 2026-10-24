---
id: thm-intersection-multiplicity-at-least-product-multiplicities
kind: theorem
title: Intersection multiplicity dominates the product of multiplicities, with equality for separated tangent cones
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-every-local-ring-is-its-localisation-at-its-maximal-ideal, cor-length-is-additive-in-short-exact-sequences, def-axiom-of-choice, def-composition-series-and-length-of-a-module, def-dimension, def-local-intersection-multiplicity-plane-curves, def-local-ring, def-module-homomorphism-kernel-image-and-cokernel, def-multiplicity-plane-curve-point, def-plane-projective-curve, def-radical-of-an-ideal, def-tangent-lines-plane-curve-point, def-vector-space, lem-local-intersection-length-finite, lem-plane-syzygy-truncation-injectivity, lem-tangent-cone-ideal-containment, lem-truncated-plane-local-length, thm-classical-affine-nullstellensatz-correspondence, thm-localisation-commutes-with-quotients, thm-rank-nullity]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "MIT 18.725 Algebraic Geometry (Fall 2015) lecture notes, consolidated"
      url: "https://ocw.mit.edu/courses/18-725-algebraic-geometry-fall-2015/ec341c7a2524e5dba7c3e939f322613a_MIT18_725F15_notes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C=V(F)$ and $D=V(G)$ be plane projective curves over the algebraically closed field $k$, let $p\in C\cap D$ be a point at which $C$ and $D$ have no common local component, and put $m=m_p(C)$, $n=m_p(D)$. Then $I_p(C,D)\ge mn$, with equality if and only if $C$ and $D$ have no common tangent line at $p$, that is, the tangent cones of $C$ and $D$ at $p$ share no line.

## Facts & Assumptions

**Given:** AC, plane curves $C=V(F)$, $D=V(G)$ over the algebraically closed field $k$, a point $p$ with no common local component, local equations $f,g$ at $p$, and $m=m_p(C)$, $n=m_p(D)$.

[F1] In the local ring $O=\mathcal O_{\mathbf P^2,p}$ with maximal ideal $\mathfrak m$, the orders of $f,g$ are $m,n$, and $(f,g)O$ is $\mathfrak m$-primary: some power $\mathfrak m^{N}$ lies in $(f,g)O$ [[lem-local-intersection-length-finite]], [[def-multiplicity-plane-curve-point]], [[def-local-ring]].

[F2] Choose centred chart coordinates $x,y$ and the polynomial dehomogenisations $f,g$, so $O=k[x,y]_{(x,y)}$. Write $R=k[x,y]$ with $I=(x,y)$ and $J=I^{m+n}+(f,g)$. Then $V(J)=\{0\}$; hence $J$ is $I$-primary, $R/J\cong O/JO$, and $\dim_k(R/J)=\dim_k(O/JO)$: passing to the quotient by an $I$-primary ideal makes $R/J$ a local ring with maximal ideal $I/J$, so its localisation at $I$ is an isomorphism [[def-radical-of-an-ideal]], [[thm-classical-affine-nullstellensatz-correspondence]], [[cor-every-local-ring-is-its-localisation-at-its-maximal-ideal]], [[thm-localisation-commutes-with-quotients]]. The finite-length local quotients here have $k$-dimension equal to their $O$-length by the finite maximal-ideal filtration in [[lem-local-intersection-length-finite]] (Proof 1.3). Since $J\supseteq(f,g)$, the quotient $O/JO$ is a quotient of $O/(f,g)$, so $\dim_k(O/JO)\le I_p(C,D)$ with equality if and only if $I^{m+n}\subseteq(f,g)O$ [[def-local-intersection-multiplicity-plane-curves]].

[F3] The truncated multiplication map $\bar\psi:R/I^{n}\times R/I^{m}\to R/I^{m+n}$, $\bar\psi(A,B)=Af+Bg$, is well defined and $k$-linear, its image is exactly the kernel of the natural map $\phi:R/I^{m+n}\to R/(I^{m+n},f,g)$, and $\bar\psi$ is injective if and only if the lowest forms $f^{*},g^{*}$ have no common factor [[lem-plane-syzygy-truncation-injectivity]]. The dimension of $R/I^{t}$ is $\binom{t+1}{2}$, and $\dim\operatorname{im}\bar\psi=\dim(R/I^{n})+\dim(R/I^{m})-\dim\ker\bar\psi$ [[lem-truncated-plane-local-length]], [[thm-rank-nullity]], [[def-dimension]], [[def-vector-space]].

[F4] The tangent lines of $C$ at $p$ are the lines whose defining linear forms divide $f^{*}$; since $k$ is algebraically closed, $f^{*},g^{*}$ have a common factor if and only if they have a common linear factor [[def-tangent-lines-plane-curve-point]].

[F5] AC is assumed; it enters through the Nullstellensatz, primarity and localisation suppliers [[def-axiom-of-choice]], [[cor-length-is-additive-in-short-exact-sequences]].

[F6] If the lowest-degree forms $f^{*},g^{*}$ are coprime then $I^{m+n}\subseteq(f,g)O$, since $I^{t}\subseteq(f,g)O$ for every $t\ge m+n-1$ [[lem-tangent-cone-ideal-containment]]. The morphism $O/(f,g)\to O/JO$ is the quotient by the image of $I^{m+n}$, so [F2] makes the equality $I_p(C,D)=\dim_k(R/J)$ hold whenever the initial forms are coprime. The containment may also hold for other initial forms; the equality $I_p=mn$ additionally requires injectivity of the truncated syzygy map, as shown below.

## Proof

1.1 The linear map $\phi:R/I^{m+n}\to R/(I^{m+n},f,g)$ is surjective with kernel exactly $\operatorname{im}\bar\psi$ by [F3]; hence $\dim_k(R/I^{m+n})=\dim_k\operatorname{im}\bar\psi+\dim_k(R/J)$ with $J=I^{m+n}+(f,g)$, i.e. $\dim_k(R/J)=\binom{m+n+1}{2}-\dim_k\operatorname{im}\bar\psi$. [F3, algebra, F1]

2.1 Since $\dim_k\operatorname{im}\bar\psi\le\dim_k(R/I^{n})+\dim_k(R/I^{m})=\binom{n+1}{2}+\binom{m+1}{2}$, step 1.1 gives $\dim_k(R/J)\ge\binom{m+n+1}{2}-\binom{n+1}{2}-\binom{m+1}{2}=mn$, by direct expansion: $\frac{(m+n)(m+n+1)-(n)(n+1)-(m)(m+1)}{2}=mn$; and by [F2] $I_p(C,D)\ge\dim_k(R/J)$, so $I_p(C,D)\ge mn$. [step 1.1, F2, F3]

3.1 Equality in step 2.1 requires both the equality $I_p(C,D)=\dim_k(R/J)$ of [F2], which holds exactly when $I^{m+n}\subseteq(f,g)O$ and is therefore available whenever the initial forms are coprime by [F6], and the maximality of $\dim_k\operatorname{im}\bar\psi$, i.e. injectivity of $\bar\psi$. By [F3] injectivity happens exactly when the lowest-degree forms $f^{*}$ and $g^{*}$ have no common factor, which by [F4] (and algebraically closedness of $k$) is exactly when the tangent cones share no line. [step 2.1, F3, F4, F6]

3.2 If $f^{*}$ and $g^{*}$ have a common factor, then by [F3] the kernel of $\bar\psi$ is nonzero, so the inequality $\dim_k\operatorname{im}\bar\psi\le\dim_k(R/I^{n})+\dim_k(R/I^{m})$ is strict and step 2.1 gives the strict bound $I_p(C,D)>mn$; hence equality in step 2.1 occurs precisely in the coprime case. [step 2.1, F3]

4.1 Therefore $I_p(C,D)\ge mn$ always, with equality precisely in the coprime-tangent-cone case: when the tangent cones are coprime both equalities hold by [F6] and [F3], and otherwise the second is strict by step 3.2. [step 2.1, step 3.1, step 3.2, F5, F6] ∎ 