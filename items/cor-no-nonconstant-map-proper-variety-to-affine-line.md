---
id: cor-no-nonconstant-map-proper-variety-to-affine-line
kind: corollary
title: "Maps from proper integral schemes to the affine line have closed-point image"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-global-functions-proper-integral-variety
  - thm-morphisms-into-affine-scheme-global-sections
  - def-scheme-over-base
  - thm-global-sections-affine-scheme
  - thm-affine-scheme-ring-anti-equivalence
  - cor-spectrum-is-a-contravariant-topological-functor
  - def-prime-spectrum-and-vanishing-sets
  - def-prime-and-maximal-ideals
  - def-closed-point-scheme
  - cor-closed-points-of-spectrum-are-maximal-ideals
  - def-residue-field-scheme-point
  - def-zero-divisor-and-integral-domain
  - def-morphism-ringed-spaces
  - thm-dimension-of-a-linear-subspace
  - thm-rank-nullity
  - thm-universal-property-of-a-polynomial-ring
  - cor-factor-theorem-over-a-commutative-ring
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Varieties, Section 33.9 (global functions on proper varieties and morphisms to the affine line)"
      url: https://stacks.math.columbia.edu/download/varieties.pdf
    - title: "Vakil, The Rising Sea, Sections 8.3 and 11.3"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field and let $X$ be a nonempty proper
integral finite-type $k$-scheme. Then for every $k$-morphism
$f:X\to\mathbf A^1_k$ there is a closed point $\mathfrak m$ of the affine line
$\mathbf A^1_k$ with
$$f(X)=\{\mathfrak m\},$$
and the residue field $\kappa(\mathfrak m)$ is finite over $k$.

If in addition $X$ is geometrically integral over $k$ for the chosen algebraic
closure $\bar k$ of $k$, then $f$ factors through a $k$-rational point of
$\mathbf A^1_k$: there is an element $a\in k$ with $f=a\circ s$, where
$s:X\to\operatorname{Spec}k$ is the structure morphism of $X$ and
$a:\operatorname{Spec}k\to\mathbf A^1_k$ is the $k$-point corresponding to the
ring map $k[x]\to k$, $x\mapsto a$.

## Facts & Assumptions

**Given:** A field $k$, a nonempty proper integral finite-type $k$-scheme $X$ with structure morphism $s:X\to\operatorname{Spec}k$, a $k$-morphism $f:X\to\mathbf A^1_k$, and, for the second assertion, a chosen algebraic closure $\bar k$ with $X$ geometrically integral over $k$; the affine line is $\mathbf A^1_k=\operatorname{Spec}k[x]$.

[F1] Assume AC. Let $k$ be a field and let $X$ be a nonempty proper integral finite-type $k$-scheme with function field $K=k(X)$. Then $\Gamma(X,\mathcal O_X)$ is a finite field extension of $k$ contained in $K$. If in addition $X$ is geometrically integral over $k$ for the chosen algebraic closure $\bar k$ of $k$, then $\Gamma(X,\mathcal O_X)=k$. ([[thm-global-functions-proper-integral-variety]])

[F2] For a scheme $X$ and a ring $A$, taking global sections induces a natural bijection $$\operatorname{Hom}(X,\operatorname{Spec}A)\cong\operatorname{Hom}_{\mathrm{CRing}}(A,\Gamma(X,\mathcal O_X));$$ the forward direction sends a morphism to its ring map on global sections, and the bijection is natural in $X$ and in $A$. ([[thm-morphisms-into-affine-scheme-global-sections]])

[F3] An $S$-scheme is a scheme $X$ equipped with a morphism $X\to S$, and an $S$-morphism is a scheme morphism commuting with the maps to $S$; for an affine base $S=\operatorname{Spec}A$ the relative affine space is $\mathbf A^1_S=\operatorname{Spec}A[t]$, with structure morphism induced by the coefficient map $A\to A[t]$. In particular $\mathbf A^1_k=\operatorname{Spec}k[x]$ with structure morphism $\pi:\mathbf A^1_k\to\operatorname{Spec}k$ corresponding to the coefficient inclusion $k\hookrightarrow k[x]$. ([[def-scheme-over-base]])

[F4] The canonical map $A\to\Gamma(\operatorname{Spec}A,\mathcal O)$ is an isomorphism, including when $A=0$; hence $\Gamma(\mathbf A^1_k,\mathcal O)=k[x]$ and $\Gamma(\operatorname{Spec}k,\mathcal O)=k$. ([[thm-global-sections-affine-scheme]])

[F5] For commutative unital rings $A,B$ the assignment $\varphi\mapsto\operatorname{Spec}(\varphi)$ gives a natural bijection $$\operatorname{Hom}_{\rm CRing}(A,B)\cong \operatorname{Hom}_{\rm LRS}(\operatorname{Spec}B,\operatorname{Spec}A),$$ so $A\mapsto\operatorname{Spec}A$ is a contravariant equivalence from commutative rings to affine schemes, with quasi-inverse global sections. ([[thm-affine-scheme-ring-anti-equivalence]])

[F6] For every ring homomorphism $\varphi:R\to A$, contraction defines a continuous map $\operatorname{Spec}(\varphi):\operatorname{Spec}(A)\to\operatorname{Spec}(R)$, and $\operatorname{Spec}(\psi\circ\varphi) =\operatorname{Spec}(\varphi)\circ\operatorname{Spec}(\psi)$. ([[cor-spectrum-is-a-contravariant-topological-functor]])

[F7] The prime spectrum of a commutative ring $R$ is the set $\operatorname{Spec}(R)=\{\mathfrak p\trianglelefteq R:\mathfrak p\text{ is prime}\}$, and for an ideal $I\trianglelefteq R$ the vanishing set is $V(I)=\{\mathfrak p\in\operatorname{Spec}(R):I\subseteq\mathfrak p\}$. ([[def-prime-spectrum-and-vanishing-sets]])

[F8] A proper ideal $M\subsetneq R$ of a commutative ring is **maximal** when there is no proper ideal strictly between $M$ and $R$; equivalently, $M$ is a maximal element of the poset of proper ideals ordered by inclusion. ([[def-prime-and-maximal-ideals]])

[F9] A point $x$ of a scheme is **closed** when $\{x\}$ is closed in its underlying topology. Assuming the Axiom of Choice, the closed points of $\operatorname{Spec}A$ are exactly the maximal ideals of $A$. ([[def-closed-point-scheme]])

[F10] Assume the Axiom of Choice. Let $R$ be a commutative ring and let $\mathfrak p\in\operatorname{Spec}(R)$. Then the singleton $\{\mathfrak p\}$ is closed in $\operatorname{Spec}(R)$ if and only if $\mathfrak p$ is a maximal ideal. ([[cor-closed-points-of-spectrum-are-maximal-ideals]])

[F11] For a point $x$ of a locally ringed space, $\kappa(x)=\mathcal O_{X,x}/\mathfrak m_x$. If $x=\mathfrak p$ in an affine spectrum, the canonical isomorphism $\mathcal O_{X,\mathfrak p}\cong A_{\mathfrak p}$ induces canonical field isomorphisms $$\kappa(\mathfrak p)\cong A_{\mathfrak p}/\mathfrak pA_{\mathfrak p} \cong\operatorname{Frac}(A/\mathfrak p).$$ ([[def-residue-field-scheme-point]])

[F12] An element $a$ of a ring $R$ is a zero divisor when $a\ne0$ and $ab=0$ or $ba=0$ for some $b\ne0$; $R$ has no zero divisors when $ab=0$ implies $a=0$ or $b=0$. An **integral domain**, or **domain**, is a commutative ring $R$ with $1\ne0$ and no zero divisors. In particular a field is a domain. ([[def-zero-divisor-and-integral-domain]])

[F13] A morphism of ringed spaces $(f,f^\sharp):(X,\mathcal O_X)\to(Y,\mathcal O_Y)$ consists of a continuous map $f$ and a morphism of sheaves of rings $f^\sharp:\mathcal O_Y\to f_*\mathcal O_X$; equivalently it gives ring homomorphisms $f^\sharp_V:\mathcal O_Y(V)\to\mathcal O_X(f^{-1}(V))$ compatible with restriction, hence a ring map on global sections, and composition of morphisms composes these maps in reverse order. ([[def-morphism-ringed-spaces]])

[F14] Let $V$ be a finite-dimensional vector space over a field $F$ with $\dim_FV=n$ and let $U$ be a linear subspace. Then $U$ is finite-dimensional with $\dim_FU\le n$, and $\dim_FU=n$ if and only if $U=V$. ([[thm-dimension-of-a-linear-subspace]])

[F15] For a linear map $T:V\to W$ of vector spaces over $F$ with $V$ finite-dimensional, $\dim_FV=\dim_F(\ker T)+\dim_F(\operatorname{im}T)$. ([[thm-rank-nullity]])

[F16] Let $R,S$ be commutative rings, $\varphi:R\to S$ a unital ring homomorphism and $s\in S$. There is a unique unital ring homomorphism $\operatorname{ev}_{\varphi,s}:R[x]\to S$ that extends $\varphi$ on constant polynomials and sends $x$ to $s$, given by $\operatorname{ev}_{\varphi,s}(\sum_ia_ix^i)=\sum_i\varphi(a_i)s^i$. ([[thm-universal-property-of-a-polynomial-ring]])

[F17] Let $R$ be a commutative ring, $a\in R$ and $f\in R[x]$. Then $f(a)=0$ if and only if $x-a$ divides $f$ in $R[x]$; more precisely there is a unique $q\in R[x]$ with $f=q(x-a)+f(a)$. ([[cor-factor-theorem-over-a-commutative-ring]])

[F18] The Axiom of Choice (AC) states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** direct: the $k$-morphism corresponds to a $k$-algebra map $k[x]\to\Gamma(X,\mathcal O_X)$ out of the polynomial ring, whose quotient by the kernel is a finite-dimensional $k$-domain inside the finite field extension $\Gamma(X,\mathcal O_X)$, hence a field, so the kernel is a maximal ideal and the image is the single closed point it defines. Geometric integrality forces $\Gamma(X,\mathcal O_X)=k$, so the kernel is generated by $x-a$.

1.1 The affine line is $\mathbf A^1_k=\operatorname{Spec}k[x]$ with structure morphism $\pi$ induced by the coefficient inclusion $k\hookrightarrow k[x]$, and by [F4] its global sections are $\Gamma(\mathbf A^1_k,\mathcal O)=k[x]$ while $\Gamma(\operatorname{Spec}k,\mathcal O)=k$. By [F2] with $A=k[x]$ the $k$-morphism $f$ corresponds to the ring map $\theta:=f^\sharp:k[x]\to\Gamma$ on global sections, where $\Gamma:=\Gamma(X,\mathcal O_X)$; the canonical morphism $c:X\to\operatorname{Spec}\Gamma$ corresponds to $\operatorname{id}_\Gamma$, so naturality of the bijection gives $f=\operatorname{Spec}(\theta)\circ c$. [F2, F3, F4]

1.2 By [F1], $\Gamma$ is a finite field extension of $k$ contained in $K$: in particular $\Gamma$ is a field and $\dim_k\Gamma<\infty$; if $X$ is geometrically integral over $k$ for the chosen algebraic closure, then $\Gamma=k$. [F1]

2.1 Since $f$ is a $k$-morphism, $\pi\circ f=s$; applying the global-sections functor, which reverses composition, gives $\theta\circ(k\hookrightarrow k[x])=s^\sharp:k\to\Gamma$ by [F13] and [F4], where $s^\sharp$ is the $k$-algebra structure of $\Gamma$. Hence $\theta$ is a $k$-algebra homomorphism: it is a unital ring map and $\theta(\lambda)=s^\sharp(\lambda)=\lambda$ for $\lambda\in k$. [F4, F13, step 1.1]

3.1 Put $I:=\ker\theta$. Then $\theta$ factors as $k[x]\twoheadrightarrow k[x]/I\xrightarrow{\ \bar\theta\ }\Gamma$ with $\bar\theta$ injective, and $\bar\theta$ is $k$-linear by step 2.1, so $k[x]/I$ is a $k$-subspace of $\Gamma$ and by [F14] is finite-dimensional over $k$ with $\dim_kk[x]/I\le\dim_k\Gamma<\infty$. Since $\Gamma$ is a field by step 1.2, it has no zero divisors, so its subring $k[x]/I$ has none and, having $1\ne0$, is a domain by [F12]. [F12, F14, step 2.1, step 1.2]

3.2 For the second assertion assume that $X$ is geometrically integral over $k$ for the chosen algebraic closure; then $\Gamma=k$ by [F1]. Put $a:=\theta(x)\in k$. With $\theta$ a $k$-algebra homomorphism by step 2.1, the universal property [F16] applied to $\varphi=\operatorname{id}_k$ and $s=a$ gives $\theta=\operatorname{ev}_{\operatorname{id}_k,a}$, that is, $\theta(g)=g(a)$ for every $g\in k[x]$. [F1, F16, step 2.1]

4.1 The ring $k[x]/I$ is a field: for $\alpha\ne0$ in $k[x]/I$ the multiplication map $m_\alpha:k[x]/I\to k[x]/I$, $\beta\mapsto\alpha\beta$, is $k$-linear and injective because $k[x]/I$ is a domain by step 3.1, so [F15] gives $\dim_k\ker m_\alpha+\dim_k\operatorname{im}m_\alpha=\dim_kk[x]/I$ with $\ker m_\alpha=0$; hence $\dim_k\operatorname{im}m_\alpha=\dim_kk[x]/I$, and [F14] applied to the subspace $\operatorname{im}m_\alpha$ gives $\operatorname{im}m_\alpha=k[x]/I$. Thus $1=m_\alpha(\beta)=\alpha\beta$ for some $\beta$, so every nonzero element of $k[x]/I$ is invertible. [F14, F15, step 3.1]

4.2 Under the additional geometric-integrality hypothesis of step 3.2, $a\in k$ is defined and $I=\ker\theta=\{g\in k[x]:g(a)=0\}=(x-a)$ by the factor theorem [F17]: $x-a\in I$ and every element of $I$ is divisible by $x-a$. The k-point $a:\operatorname{Spec}k\to\mathbf A^1_k$ corresponding by [F5] to the ring map $\alpha:k[x]\to k$, $x\mapsto a$, has source $\operatorname{Spec}(k[x]/(x-a)) \cong\operatorname{Spec}k$ and residue field $k$ by [F11], so it is a $k$-rational point of $\mathbf A^1_k$. [F5, F11, F17, step 3.2]

5.1 Consequently $I$ is a maximal ideal of $k[x]$: since $k[x]/I$ is a field by step 4.1, $I$ is proper, and if $J$ were an ideal with $I\subsetneq J\subseteq k[x]$, then $J/I$ would be a nonzero proper ideal of the field $k[x]/I$, which is impossible; this is exactly the maximality of [F8]. [F8, step 4.1]

6.1 Therefore $V(I)=\{I\}$ in $\operatorname{Spec}k[x]$: every $\mathfrak p\in V(I)$ is a prime with $I\subseteq\mathfrak p$, hence a proper ideal containing the maximal ideal $I$, so $\mathfrak p=I$ by [F8], while $I\in V(I)$ because $I$ is prime. [F7, F8, step 5.1]

6.2 Moreover $I$ is a closed point of $\operatorname{Spec}k[x]=\mathbf A^1_k$ by [F9] (equivalently [F10], since $I$ is maximal), and [F11] gives $\kappa(I)\cong\operatorname{Frac}(k[x]/I)=k[x]/I$, which is finite-dimensional over $k$ by step 3.1; so the residue field of this closed point is finite over $k$. [F9, F10, F11, step 3.1, step 5.1]

7.1 The image of $f$ is this point: for $\mathfrak q\in\operatorname{Spec}\Gamma$, [F6] identifies $\operatorname{Spec}(\theta)(\mathfrak q)=\theta^{-1}(\mathfrak q)$, and $I=\theta^{-1}(0)\subseteq\theta^{-1}(\mathfrak q)$ is a prime of $\operatorname{Spec}k[x]$ as in [F7], so $\operatorname{Spec}(\theta)(\operatorname{Spec}\Gamma)\subseteq V(I)=\{I\}$ by step 6.1. Since $f=\operatorname{Spec}(\theta)\circ c$ by step 1.1, also $f(X)\subseteq\{I\}$, and $X\ne\varnothing$ makes $f(X)$ nonempty, so $f(X)=\{I\}$. Together with step 6.2 this is the first assertion of the statement. [F5, F6, F7, step 1.1, step 6.1, step 6.2]

8.1 Under the additional geometric-integrality hypothesis, finally $f=a\circ s$: the structure morphism $s$ corresponds under the bijection [F2] to $s^\sharp:k\to\Gamma$ by [F4], the $k$-point $a$ corresponds to $\alpha$, and the composite $a\circ s$ therefore corresponds to the composite $s^\sharp\circ\alpha:k[x]\to k\to\Gamma$; that composite is a $k$-algebra map sending $x$ to $s^\sharp(a)=a\in\Gamma$, so it equals $\theta$ by the uniqueness in [F16], and $\theta$ corresponds to $f$ by step 1.1. Injectivity of the bijection [F2] gives $f=a\circ s$, so $f$ factors through the $k$-rational point $a$ of step 4.2. The Axiom of Choice [F18] is used exactly through the AC-carrying suppliers [F1], [F9] and [F10] cited in steps 1.2 and 6.2; all other steps use no choice principle. [F2, F4, F16, F18, step 1.1, step 3.2, step 4.2] ∎
