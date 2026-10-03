---
id: ex-normalization-node
kind: example
title: Normalizing the nodal plane curve
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 5
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-normalization-affine-variety, thm-normalization-finite-birational-surjective, thm-integral-closure-finite-finite-type-domain-over-field, def-unibranch-point-classical, lem-finite-normalization-compatible-with-principal-opens, thm-affine-morphisms-coordinate-ring-anti-equivalence, ex-normal-affine-space, thm-quotient-ring-universal-property, def-quotient-ring, lem-polynomial-algebras-over-fields-are-integrally-closed, def-integral-closure-and-integrally-closed-domain, def-integral-element-and-algebraic-integer, thm-transitivity-of-integrality, cor-integral-elements-form-a-subring, def-field-of-fractions, thm-monic-polynomial-division, def-polynomial-degree-leading-coefficient-and-monic, def-zero-divisor-and-integral-domain, cor-polynomial-ring-over-a-domain-is-a-domain, def-polynomial-evaluation-and-root]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 Example 8.6(b): the node t mapsto (t^2-1, t^3-t)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
---

## Statement

Assume the Axiom of Choice. Let $X=V(y^2-x^2(x+1))\subseteq\mathbf A^2$ over an algebraically closed field
of characteristic not two. Its normalization is
$\mathbf A^1\to X$, $t\mapsto(t^2-1,t(t^2-1))$, a finite birational map whose
fibre over the node consists of the two points $t=\pm1$. The node is not
unibranch, so it is not normal.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$ with $\operatorname{char}k\ne2$, the polynomial $P=y^{2}-x^{2}(x+1)$, the curve $X=V(P)\subseteq\mathbf A^2$, its coordinate ring $A=k[X]=k[x,y]/(P)$, the substitution $\sigma(x)=t^{2}-1$, $\sigma(y)=t(t^{2}-1)$, and the induced map $\varphi\colon A\to k[t]$.

[F1] A ring homomorphism whose kernel contains an ideal factors uniquely through the quotient, so $\sigma$ induces a unique $k$-algebra homomorphism $\varphi\colon A\to k[t]$ once it kills $P$ ([[thm-quotient-ring-universal-property]], [[def-quotient-ring]], [[def-polynomial-evaluation-and-root]]).

[F2] Division by the monic polynomial $y^{2}-x^{2}(x+1)\in(k[x])[y]$ gives every class in $A$ a unique representative $a(x)+b(x)y$; over a field the polynomial ring is a domain and a product of nonzero polynomials has the product of leading coefficients as leading coefficient ([[thm-monic-polynomial-division]], [[def-polynomial-degree-leading-coefficient-and-monic]], [[cor-polynomial-ring-over-a-domain-is-a-domain]], [[def-zero-divisor-and-integral-domain]]).

[F3] $k[t]$ is an integrally closed domain, integral elements form a subring, integrality is transitive, and an integrally closed domain contains the integral elements of its fraction field ([[lem-polynomial-algebras-over-fields-are-integrally-closed]], [[def-integral-closure-and-integrally-closed-domain]], [[def-integral-element-and-algebraic-integer]], [[thm-transitivity-of-integrality]], [[cor-integral-elements-form-a-subring]], [[def-field-of-fractions]]).

[F4] The normalization of the affine curve is the affine variety with coordinate ring the integral closure of $A$ in its fraction field, with structure morphism induced by the inclusion; it is finite, surjective and birational ([[def-normalization-affine-variety]], [[thm-normalization-finite-birational-surjective]], [[lem-finite-normalization-compatible-with-principal-opens]], [[thm-integral-closure-finite-finite-type-domain-over-field]], [[thm-affine-morphisms-coordinate-ring-anti-equivalence]]); the affine line is normal ([[ex-normal-affine-space]]).

[F5] A point is unibranch when its normalization fibre is a single point, and every normal point is unibranch ([[def-unibranch-point-classical]]).

[F7] AC is inherited through the classical localization, normalization, or finite-morphism suppliers cited above ([[def-axiom-of-choice]]).

## Proof

1.1 The substitution kills $P$: $\sigma(y)^{2}-\sigma(x)^{2}(\sigma(x)+1)=t^{2}(t^{2}-1)^{2}-(t^{2}-1)^{2}t^{2}=0$, because $\sigma(x)+1=t^{2}$. By [F1] there is a unique $k$-algebra homomorphism $\varphi\colon A\to k[t]$ with $\varphi(\bar x)=t^{2}-1$ and $\varphi(\bar y)=t(t^{2}-1)$. [F1, given, F7]

2.1 The map $\varphi$ is injective. By [F2] every element of $A$ is uniquely $a(x)+b(x)y$ with $a,b\in k[x]$, and $\varphi(a+by)=a(t^{2}-1)+t(t^{2}-1)b(t^{2}-1)$ separates into an even part $a(t^{2}-1)$ and an odd part $t\,(t^{2}-1)b(t^{2}-1)$, so $\varphi(a+by)=0$ forces both parts to vanish. If $c\in k[x]$ is nonzero then $c(t^{2}-1)\ne0$: the term of highest degree $2\deg c$ has coefficient equal to the leading coefficient of $c$ by [F2]. Hence $a=0$, and since $k[t]$ is a domain and $t^{2}-1\ne0$ we get $b(t^{2}-1)=0$, hence $b=0$. So $\varphi$ is injective and $A$ is a domain, isomorphic to $k[t^{2}-1,t(t^{2}-1)]$.  If a polynomial $Q(x,y)$ vanishes on $X$, its substitution vanishes at every $t\in k$ under the displayed parametrization. The field $k$ is infinite, so this substituted polynomial is zero. The kernel just computed is $(P)$, hence $I(X)=(P)$, justifying the coordinate-ring identification in the Given. [F2, step 1.1]

3.1 In $\operatorname{Frac}(A)$ one has $\bar y/\bar x=(t^{3}-t)/(t^{2}-1)=t$, so $k(t)\subseteq\operatorname{Frac}(A)$, and $A\subseteq k[t]$ gives the reverse inclusion; hence $\operatorname{Frac}(A)=k(t)$. Moreover $t^{2}=\bar x+1\in A$, so $t$ is integral over $A$, and since $t^{n}=t^{n-2}(\bar x+1)$ for $n\ge2$ we get $k[t]=A+At$, a finite $A$-module. [F2, F3, step 2.1]

4.1 If $z\in k(t)=\operatorname{Frac}(A)$ is integral over $A$, then a monic equation for $z$ over $A$ has coefficients in $k[t]$, so $z$ is integral over $k[t]$ and hence lies in $k[t]$ because $k[t]$ is integrally closed [F3]. Conversely every element of $k[t]=A+At$ is integral over $A$ by step 3.1. Therefore the integral closure of $A$ in $\operatorname{Frac}(A)$ is exactly $k[t]$. [F3, step 3.1]

5.1 By [F4] the normalization of $X$ is the affine variety with coordinate ring $k[t]$, namely $\mathbf A^1$, with the structure morphism $\nu\colon\mathbf A^1\to X$ induced by $A\hookrightarrow k[t]$; by [F4] applied to the parametrization this is $\nu(t)=(t^{2}-1,t(t^{2}-1))$, a finite birational map, and it is surjective. [F4, step 4.1]

6.1 The fibre of $\nu$ over the node $(0,0)$ consists of the parameters with $t^{2}-1=0$, namely $t=1$ and $t=-1$; these are distinct because $\operatorname{char}k\ne2$, and both map to the origin because $t(t^{2}-1)=0$. Hence the node has a two-point normalization fibre, so it is not unibranch [F5]; since normal points are unibranch [F5], the node is not normal. [F4, F5, step 5.1]

7.1 Summing up, the normalization of the nodal curve is the finite birational surjection $\nu\colon\mathbf A^1\to X$, $t\mapsto(t^{2}-1,t(t^{2}-1))$, whose fibre over the node is the two-point set $\{1,-1\}$; the node is therefore not unibranch and not normal. [F4, F5, step 5.1, step 6.1] ∎
