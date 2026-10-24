---
id: lem-tangent-vectors-as-dual-number-points
kind: lemma
title: "Tangent vectors at rational points are dual-number points"
status: published
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-zariski-tangent-space-point
  - def-dual-numbers-scheme
  - thm-affine-scheme-ring-anti-equivalence
  - lem-cotangent-localization-at-rational-point
  - def-scheme
  - def-scheme-over-base
  - def-affine-open-subscheme
  - def-open-immersion-schemes
  - def-affine-scheme-spectrum
  - thm-stalk-structure-sheaf-prime-localization
  - def-prime-and-maximal-ideals
  - def-quotient-ring
  - thm-quotient-is-field-iff-ideal-maximal
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, v6.10, §4f, Definitions 4.25 and 4.28, Propositions 4.27 and 4.29, and item 4.30"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "J. S. Milne, Algebraic Geometry Chapter 10 supplement, §f, item 10.60"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---

## Statement

Let $X$ be any $k$-scheme and let $x\in X(k)$ be a $k$-rational point. The
intrinsic Zariski tangent space $T_xX$ is naturally isomorphic, as a
$k$-vector space, to the fibre over $x$ of
$$\operatorname{Hom}_k(\operatorname{Spec}(k[\epsilon]/(\epsilon^2)),X)\longrightarrow X(k),$$
where the map is induced by $\epsilon\mapsto0$. Equivalently,
$$T_xX\cong\operatorname{Der}_k(\mathcal O_{X,x},k),$$
where $\mathcal O_{X,x}$ acts on $k$ through evaluation at $x$. The bijection
is induced by writing a local $k$-algebra map as
$a\mapsto a(x)+\epsilon D(a)$. No identification at a nonrational point is
asserted.

## Facts & Assumptions

**Given:** A field $k$, a $k$-scheme $X$, and a $k$-rational point $x\in X(k)$. Put $D=k[\epsilon]/(\epsilon^2)$ and let $\rho:D\to k$ send $\epsilon$ to zero.

[F1] [[def-zariski-tangent-space-point]]: $T_xX$ is the $k$-linear dual of $\mathfrak m_x/\mathfrak m_x^2$ when $\kappa(x)=k$.

[F2] [[def-dual-numbers-scheme]]: $\operatorname{Spec}D$ is the dual-numbers scheme, with $\epsilon^2=0$.

[F3] [[thm-affine-scheme-ring-anti-equivalence]]: for commutative rings $A,B$, ring maps $A\to B$ correspond contravariantly to morphisms $\operatorname{Spec}B\to\operatorname{Spec}A$.

[F4] [[lem-cotangent-localization-at-rational-point]]: if $A/\mathfrak m=k$, localization induces an isomorphism $\mathfrak m/\mathfrak m^2\to(\mathfrak m A_{\mathfrak m})/(\mathfrak m A_{\mathfrak m})^2$.

[F5] [[def-scheme]]: every point of a scheme has an affine open neighborhood.

[F6] [[def-affine-open-subscheme]]: an open subscheme has the restricted structure sheaf; an affine open is affine with this structure.

[F7] [[def-open-immersion-schemes]]: the inclusion of an open subscheme is an open immersion.

[F8] [[def-affine-scheme-spectrum]]: the points of $\operatorname{Spec}A$ are the prime ideals of $A$.

[F9] [[thm-stalk-structure-sheaf-prime-localization]]: at $\mathfrak p\in\operatorname{Spec}A$, $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.

[F10] [[def-scheme-over-base]]: a $k$-morphism commutes with the structure maps to $\operatorname{Spec}k$.

[F11] [[def-prime-and-maximal-ideals]]: a proper ideal $P$ is prime when $ab\in P$ implies $a\in P$ or $b\in P$; a maximal ideal has no proper ideal strictly between it and the ring.

[F12] [[def-quotient-ring]]: $R/I$ is formed from cosets with $(r+I)(s+I)=rs+I$.

[F13] [[thm-quotient-is-field-iff-ideal-maximal]]: for a commutative ring $R$, $R/M$ is a field exactly when $M$ is maximal.

## Proof

**Proof technique:** direct.

1.1 The dual-numbers scheme has one point. If $\mathfrak p$ is a prime ideal of $D$, then $\epsilon^2=0\in\mathfrak p$ implies $\epsilon\in\mathfrak p$ by [F11]. The quotient $D/(\epsilon)$ is $k$, so $(\epsilon)$ is maximal by [F12, F13]. Every prime containing this maximal ideal equals it. Thus $\operatorname{Spec}D$ has the single point defined by $(\epsilon)$, and the map $\operatorname{Spec}k\to\operatorname{Spec}D$ induced by $\rho$ selects that point. [F2, F11, F12, F13, given, algebra]

2.1 Based morphisms can be computed in an affine neighborhood. Choose an affine open $U=\operatorname{Spec}A$ containing $x$ by [F5, F6]. Its inclusion into $X$ is an open immersion by [F7]. Since $\operatorname{Spec}D$ has only one point, every morphism in the fibre over $x$ factors uniquely through $U$. The affine anti-equivalence [F3], together with the $k$-morphism condition [F10], identifies such maps with $k$-algebra homomorphisms $\varphi:A\to D$ whose reduction $\rho\circ\varphi:A\to k$ is the point $x$. Conversely every such homomorphism gives a based morphism. If $\mathfrak m=\ker(A\to k)$, then $\mathfrak m$ is the point of $U$ by [F8]. [F3, F5, F6, F7, F8, F10, step 1.1, given, algebra]

3.1 These homomorphisms are exactly derivations. Each $a\in A$ has a unique image $\varphi(a)=\bar a+\epsilon\delta(a)$, where $\bar a=x^\#(a)$. Since $\varphi$ is a $k$-algebra homomorphism, $\delta$ is $k$-linear and vanishes on $k$. Comparing the $\epsilon$-coefficients of $\varphi(ab)=\varphi(a)\varphi(b)$ gives $\delta(ab)=\bar a\delta(b)+\bar b\delta(a)$, so $\delta$ is a derivation for the $A$-module structure on $k$ given by evaluation at $x$. Conversely each such derivation defines a homomorphism by this formula, since $\epsilon^2=0$. These constructions are inverse. [F2, F10, step 2.1, given, algebra]

4.1 Derivations on $A$ are the dual of its cotangent space at $x$. The structure map $k\to A$ splits evaluation $A\to k$, so $A=k\oplus\mathfrak m$ as $k$-vector spaces. The derivation identity makes $\delta$ vanish on $\mathfrak m^2$, and restriction gives a linear form on $\mathfrak m/\mathfrak m^2$. Conversely, for $\ell\in\operatorname{Hom}_k(\mathfrak m/\mathfrak m^2,k)$, define $\delta(c+u)=\ell(u+\mathfrak m^2)$ for $c\in k$, $u\in\mathfrak m$. For $c+u,c'+u'\in A$, the product has $\mathfrak m$-part $cu'+c'u+uu'$, and $uu'\in\mathfrak m^2$; hence this formula satisfies the Leibniz rule. It is inverse to restriction. [step 3.1, given, algebra]

5.1 Passing to the stalk gives the claimed intrinsic tangent and local derivation formulation. By [F9], $\mathcal O_{X,x}\cong A_{\mathfrak m}$ with maximal ideal $\mathfrak m_x=\mathfrak m A_{\mathfrak m}$. The rational-point localization isomorphism [F4] identifies $\mathfrak m/\mathfrak m^2$ with $\mathfrak m_x/\mathfrak m_x^2$, so their $k$-linear duals agree; [F1] identifies the latter dual with $T_xX$. Also every $s\in A\setminus\mathfrak m$ has $\varphi(s)=\bar s+\epsilon\delta(s)$ with $\bar s\ne0$, which is a unit in $D$ with inverse $\bar s^{-1}-\bar s^{-2}\delta(s)\epsilon$. Thus $\varphi$ extends uniquely to a local $k$-algebra map $\mathcal O_{X,x}=A_{\mathfrak m}\to D$. Conversely, every local $k$-algebra map $\alpha:\mathcal O_{X,x}\to D$ has a unique form $\alpha(u)=u(x)+\epsilon d(u)$, where multiplicativity makes $d$ a $k$-derivation through the residue action. Every such derivation defines a local map by this formula, since units have nonzero residue. Applying the decomposition $\mathcal O_{X,x}=k\oplus\mathfrak m_x$ as in step 4.1 gives $\operatorname{Der}_k(\mathcal O_{X,x},k)\cong \operatorname{Hom}_k(\mathfrak m_x/\mathfrak m_x^2,k)$. The localization, extension, and restriction maps commute on smaller affine neighborhoods, so the identifications are independent of $U$ and natural. Scaling $\epsilon$ by $c\in k$ scales the derivation and tangent vector by $c$. [F1, F2, F4, F9, F10, step 2.1, step 3.1, step 4.1, algebra] ∎
