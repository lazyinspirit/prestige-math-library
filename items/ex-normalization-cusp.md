---
id: ex-normalization-cusp
kind: example
title: Normalizing the cuspidal plane curve
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 6
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-normalization-affine-variety, thm-normalization-finite-birational-surjective, def-conductor-normalization, lem-conductor-ideal-common-ideal, thm-affine-morphisms-coordinate-ring-anti-equivalence, thm-integral-closure-finite-finite-type-domain-over-field, def-unibranch-point-classical, thm-normalization-glues-variety, ex-normal-affine-space, thm-quotient-ring-universal-property, def-quotient-ring, lem-polynomial-algebras-over-fields-are-integrally-closed, def-integral-closure-and-integrally-closed-domain, def-integral-element-and-algebraic-integer, thm-transitivity-of-integrality, cor-integral-elements-form-a-subring, def-field-of-fractions, thm-monic-polynomial-division, def-polynomial-degree-leading-coefficient-and-monic, def-zero-divisor-and-integral-domain, cor-polynomial-ring-over-a-domain-is-a-domain, def-polynomial-evaluation-and-root]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 Example 8.6(a): the cusp t mapsto (t^2,t^3)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X=V(y^2-x^3)\subseteq\mathbf A^2$ over an algebraically closed field of
characteristic not two. The normalization of $X$ is $\mathbf A^1\to X$,
$t\mapsto(t^2,t^3)$, with coordinate ring inclusion
$k[x,y]/(y^2-x^3)\cong k[t^2,t^3]\hookrightarrow k[t]$. The map is finite,
birational and bijective, the cusp is the unique non-normal point, its fibre is
a single point, and the conductor of the extension is the maximal ideal
$(t^2,t^3)$ of $k[t^2,t^3]$.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$ with $\operatorname{char}k\ne2$, the polynomial $P=y^{2}-x^{3}$, the cusp $X=V(P)\subseteq\mathbf A^2$ with coordinate ring $A=k[x,y]/(P)$, the substitution $\sigma(x)=t^{2}$, $\sigma(y)=t^{3}$, and the induced map $\varphi\colon A\to k[t]$.

[F1] A ring homomorphism whose kernel contains an ideal factors uniquely through the quotient, so $\sigma$ induces a unique $k$-algebra homomorphism $\varphi\colon A\to k[t]$ once it kills $P$ ([[thm-quotient-ring-universal-property]], [[def-quotient-ring]], [[def-polynomial-evaluation-and-root]]).

[F2] Division by the monic polynomial $y^{2}-x^{3}\in(k[x])[y]$ gives every class in $A$ a unique representative $a(x)+b(x)y$; over a field the polynomial ring is a domain, and a product of nonzero polynomials has the product of leading coefficients as leading coefficient ([[thm-monic-polynomial-division]], [[def-polynomial-degree-leading-coefficient-and-monic]], [[cor-polynomial-ring-over-a-domain-is-a-domain]], [[def-zero-divisor-and-integral-domain]]).

[F3] $k[t]$ is an integrally closed domain, integral elements form a subring, integrality is transitive, and an integrally closed domain contains the integral elements of its fraction field ([[lem-polynomial-algebras-over-fields-are-integrally-closed]], [[def-integral-closure-and-integrally-closed-domain]], [[def-integral-element-and-algebraic-integer]], [[thm-transitivity-of-integrality]], [[cor-integral-elements-form-a-subring]], [[def-field-of-fractions]]).

[F4] The normalization of the affine curve is the affine variety with coordinate ring the integral closure of $A$ in its fraction field, with structure morphism induced by the inclusion; it is finite, surjective and birational, and the affine line is normal ([[def-normalization-affine-variety]], [[thm-normalization-finite-birational-surjective]], [[thm-integral-closure-finite-finite-type-domain-over-field]], [[thm-affine-morphisms-coordinate-ring-anti-equivalence]], [[thm-normalization-glues-variety]], [[ex-normal-affine-space]]).

[F5] The conductor over the chart is $\mathfrak c=\operatorname{Ann}_A(k[t]/A)=\{a\in A: a\,k[t]\subseteq A\}$; it is an ideal of both $A$ and $k[t]$, and the support of $A/\mathfrak c$ is the non-normal locus, i.e. the set of points at which the normalization is not an isomorphism ([[def-conductor-normalization]], [[lem-conductor-ideal-common-ideal]]).

[F6] A point is unibranch when its normalization fibre is a single point, and every normal point is unibranch ([[def-unibranch-point-classical]]).

[F7] AC is inherited through the classical localization, normalization, or finite-morphism suppliers cited above ([[def-axiom-of-choice]]).

## Proof

1.1 The substitution kills $P$: $\sigma(y)^{2}-\sigma(x)^{3}=t^{6}-t^{6}=0$, so by [F1] there is a unique $k$-algebra homomorphism $\varphi\colon A\to k[t]$ with $\varphi(\bar x)=t^{2}$ and $\varphi(\bar y)=t^{3}$. [F1, given, F7]

2.1 The map $\varphi$ is injective. By [F2] every element of $A$ is uniquely $a(x)+b(x)y$ with $a,b\in k[x]$, and $\varphi(a+by)=a(t^{2})+t^{3}b(t^{2})$ separates into an even part $a(t^{2})$ and an odd part $t^{3}b(t^{2})$, so $\varphi(a+by)=0$ forces both to vanish. If $c\in k[x]$ is nonzero then $c(t^{2})\ne0$, because the term of highest degree $2\deg c$ has coefficient equal to the leading coefficient of $c$; hence $a=0$, and then $t^{3}b(t^{2})=0$ with $k[t]$ a domain gives $b(t^{2})=0$, hence $b=0$. So $A$ is a domain isomorphic to $k[t^{2},t^{3}]$.  If a polynomial $Q(x,y)$ vanishes on $X$, its substitution vanishes at every $t\in k$ under the displayed parametrization. The field $k$ is infinite, so this substituted polynomial is zero. The kernel just computed is $(P)$, hence $I(X)=(P)$, justifying the coordinate-ring identification in the Given. [F2, step 1.1]

3.1 In $\operatorname{Frac}(A)$ one has $\bar y/\bar x=t^{3}/t^{2}=t$, so $k(t)\subseteq\operatorname{Frac}(A)$ and, since $A\subseteq k[t]$, equality $\operatorname{Frac}(A)=k(t)$ holds. Moreover $t^{2}=\bar x\in A$, so $t$ is integral over $A$, and every even power of $t$ belongs to $A$ as a power of $t^2$, and every odd power belongs to $At$; hence $k[t]=A+At$ is a finite $A$-module. [F2, F3, step 2.1]

4.1 If $z\in k(t)=\operatorname{Frac}(A)$ is integral over $A$, then a monic equation for $z$ over $A$ has coefficients in $k[t]$, so $z$ is integral over $k[t]$ and therefore lies in $k[t]$ because $k[t]$ is integrally closed [F3]; conversely every element of $k[t]=A+At$ is integral over $A$. Hence the integral closure of $A$ in its fraction field is exactly $k[t]$. By [F4] the normalization of the cusp is $\nu\colon\mathbf A^1\to X$ induced by $A\hookrightarrow k[t]$, namely $\nu(t)=(t^{2},t^{3})$, a finite birational map. [F3, F4, step 3.1]

5.1 The map $\nu$ is bijective. If $u=0$ for a point $(u,v)$ of the cusp, then $v^{2}=u^{3}=0$, so $v=0$ and the unique parameter is $t=0$; if $u\ne0$, then $t=v/u$ satisfies $t^{2}=v^{2}/u^{2}=u^{3}/u^{2}=u$ and $t^{3}=v\cdot v^{2}/u^{3}=v$, so $(u,v)$ is the image of the unique parameter $v/u$. Hence every point of $X$ has exactly one preimage. [F2, step 4.1]

6.1 The pullback $\varphi\colon k[t^{2},t^{3}]\hookrightarrow k[t]$ is not surjective: its image consists of sums of monomials $t^{n}$ with $n\in\langle2,3\rangle=\{0,2,3,4,\dots\}$, and $t$ has exponent $1$, so $t$ is not in the image. By the anti-equivalence [F4] the map $\nu$ is not an isomorphism, although it is bijective. Its fibre over the cusp is the singleton $\{0\}$, because $t^{2}=0$ forces $t=0$ in the field $k$; hence the cusp is unibranch [F6]. [F4, F6, step 5.1]

7.1 The conductor is the maximal ideal $\mathfrak m=(t^{2},t^{3})$ of $A$: indeed $t^{2}\,k[t]\subseteq A$ and $t^{3}\,k[t]\subseteq A$ because every exponent $\ge2$ lies in $\langle2,3\rangle$, so $\mathfrak m\subseteq\mathfrak c$; conversely an $a\in A$ outside $\mathfrak m$ has nonzero constant coefficient $c$. All its other monomials have exponent at least two, so $at$ has a nonzero coefficient $c$ at exponent one and cannot belong to $A$, so $\mathfrak c\subseteq\mathfrak m$. By [F5] $V(\mathfrak c)$ is the non-normal locus, and $V(t^{2},t^{3})$ is the single point $(0,0)$; hence the cusp is the unique non-normal point of $X$. [F5, step 6.1]

8.1 Summing up: the normalization of the cusp is $\nu\colon\mathbf A^1\to X$, $t\mapsto(t^{2},t^{3})$, a finite birational bijection which is not an isomorphism; the cusp is its unique non-normal point, with singleton fibre $\{0\}$, so it is unibranch but not normal; and the conductor of the extension is the maximal ideal $(t^{2},t^{3})$ of $k[t^{2},t^{3}]$. [F4, F5, F6, step 7.1] ∎
