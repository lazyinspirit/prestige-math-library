---
id: cex-rational-map-singular-curve-not-extend-uniquely
kind: counterexample
title: "Smoothness of the source cannot be dropped in the extension of rational maps"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-affine-schemes-separated
  - cor-morphisms-equal-on-dense-open-reduced-source
  - def-ag-standard-smooth-algebra
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-dimension-noetherian-topological-space
  - def-embedding-dimension-and-regular-local-ring
  - def-integral-scheme
  - def-krull-dimension-of-a-ring
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-rational-map-integral-schemes
  - def-smooth-morphism-classical
  - def-smooth-morphism-to-field-classical
  - lem-affine-local-dimension-residue-transcendence
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-gauss-lemma-over-a-ufd
  - lem-curve-closed-subsets-finite
  - lem-rational-map-smooth-curve-to-proper-scheme-extends
  - thm-affine-domain-dimension-transcendence-degree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-irreducible-closed-subsets-and-prime-ideals
  - thm-noetherian-ring-has-noetherian-spectrum
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-projective-space-proper-over-base
  - thm-quotient-is-domain-iff-ideal-prime
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Statement refuted

The claim that the smoothness hypothesis on the source can be weakened in the
extension theorem for rational maps: for a curve $X$ that is integral but not
smooth and a proper target, not every rational map $X\dashrightarrow Y$ extends
to a morphism. Concretely, on the nodal plane cubic the rational map given by
the slope of the branch is defined on the smooth locus, its two branches carry
two different boundary values at the node, and no morphism from the whole
curve extends it. When an extension does exist on such a curve it is unique
(source reduced, target separated), so the failure is existence, not
uniqueness.

## Facts & Assumptions

**Given:** A field $k$ of characteristic different from $2$, the nodal cubic $X=\operatorname{Spec}k[x,y]/(y^2-x^2(x+1))$, the morphism $\nu:\mathbf A^1=\operatorname{Spec}k[t]\to X$ with $x\mapsto t^2-1$, $y\mapsto t(t^2-1)$, and the projective line $\mathbb P^1_k$ with chart $U_0=\operatorname{Spec}k[\hat t]$. We work under the Axiom of Choice [A1].

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[A2] In ZF, AC implies Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]). This supplies the DC use in the curve closed-subset finiteness route used by the smooth-curve extension theorem.

[F1] A curve over $k$ is nonempty, geometrically integral, separated, finite type, and of chain dimension one; an affine scheme is integral exactly when its coordinate ring is a domain. ([[def-algebraic-curve-over-field]], [[def-integral-scheme]])

[F2] A rational map of integral finite-type $k$-schemes into a separated finite-type $k$-scheme is represented by a morphism on a nonempty open subscheme. ([[def-rational-map-integral-schemes]])

[F3] If $W$ is reduced, $V\subseteq W$ is a dense open subscheme and $Y\to S$ is separated, then two $S$-morphisms $W\to Y$ agreeing on $V$ are equal. ([[cor-morphisms-equal-on-dense-open-reduced-source]])

[F4] The projective line is glued from the charts $U_0=\operatorname{Spec}k[\hat t]$ and $U_\infty=\operatorname{Spec}k[\hat u]$; the chart coordinate defines a morphism to $\mathbb P^1$. ([[def-projective-line-two-affine-cover-and-twisting-sheaf]])

[F5] $\mathbb P^n_S\to S$ is proper, and every proper morphism is separated; in particular $\mathbb P^1_k$ is separated over $k$. ([[thm-projective-space-proper-over-base]])

[F6] Under AC, every rational map from a smooth curve to a proper $k$-scheme extends to a morphism. Its proof uses DC through the finiteness of proper closed subsets of a curve. ([[lem-rational-map-smooth-curve-to-proper-scheme-extends]], [[lem-curve-closed-subsets-finite]])

[F7] A finite-variable polynomial ring over a field is a UFD and each irreducible is prime. For a UFD $R$, a primitive polynomial in $R[y]$ is irreducible when it is irreducible over $\operatorname{Frac}(R)[y]$; polynomial degrees add over a domain. ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[lem-gauss-lemma-over-a-ufd]], [[thm-polynomial-degree-of-a-product-over-a-domain]], [[thm-quotient-is-domain-iff-ideal-prime]])

[F8] A finite-type domain over $k$ has Krull dimension equal to the transcendence degree of its fraction field. The prime-spectrum correspondence identifies this with the chain dimension of its Noetherian spectrum; for a closed point, the affine local-dimension formula identifies the local dimension with the local-ring dimension when its residue field is algebraic over $k$. ([[thm-affine-domain-dimension-transcendence-degree]], [[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]], [[thm-noetherian-ring-has-noetherian-spectrum]], [[thm-irreducible-closed-subsets-and-prime-ideals]], [[def-krull-dimension-of-a-ring]], [[def-dimension-noetherian-topological-space]], [[lem-affine-local-dimension-residue-transcendence]])

[F9] A smooth finite-type $k$-scheme has regular local rings. A localization $k[t,s]/(s(t^2-1)-1)$ is standard smooth over $k$ when the derivative with respect to $s$ is a unit. ([[def-smooth-morphism-to-field-classical]], [[def-smooth-morphism-classical]], [[def-ag-standard-smooth-algebra]], [[def-embedding-dimension-and-regular-local-ring]])

[F10] Every affine scheme is separated over its base. ([[cor-affine-schemes-separated]])

## Refutation

**Construction (nodal cubic).** Let $k$ be a field of characteristic $\neq2$. Put $$A:=k[x,y]/(y^2-x^2(x+1)),\qquad X:=\operatorname{Spec}A,$$ and let $o\in X$ be the point $\mathfrak m=(x,y)$. Let $\widetilde C:=\operatorname{Spec}k[t]=\mathbf A^1$ and let $\nu:\widetilde C\to X$ be the $k$-morphism with $\nu^\sharp(x)=t^2-1$, $\nu^\sharp(y)=t(t^2-1)$. Let $\mathbb P^1=\mathbb P^1_k$ with chart $U_0=\operatorname{Spec}k[\hat t]$.

**Verification.**

1.1 Geometric integrality over every field extension. Let $K/k$ be any field extension. In $K(x)$, the order valuation $v_{x+1}$ gives $v_{x+1}(x^2(x+1))=1$ because $x$ is a unit at the prime $(x+1)$ of $K[x]$; a square has even valuation, so $x^2(x+1)$ is not a square in $K(x)$. Since $\operatorname{char}K\neq2$, the quadratic $y^2-x^2(x+1)$ has no root and is irreducible in $K(x)[y]$. It is monic, hence primitive, over the UFD $K[x]$, so Gauss's lemma makes it irreducible in $K[x,y]$ [F7]. The ring $K[x,y]$ is a UFD, so this irreducible polynomial is prime. Thus $K[x,y]/(y^2-x^2(x+1))$ is a nonzero domain and its spectrum is integral [[def-integral-scheme]]. This holds for every extension $K/k$, in particular for $\bar k/k$, so $X$ is geometrically integral. [F7]

1.2 The point $o$ is closed since $A/\mathfrak m=k$. Moreover $A/(x)\cong k[y]/(y^2)$ has the unique prime $(y)$, so $D(x)=X\smallsetminus\{o\}$. The local ring at $o$ has dimension one: every open neighbourhood of the closed point $o$ contains the generic point of the integral curve $X$ and hence has chain dimension one, and [F8] identifies that local dimension with $\dim\mathcal O_{X,o}$. The maximal ideal modulo its square has basis given by the classes of $x,y$, since $y^2-x^2(x+1)\in(x,y)^2$. Therefore $\operatorname{edim}\mathcal O_{X,o}=2\neq1=\dim\mathcal O_{X,o}$, so $\mathcal O_{X,o}$ is not regular and $X$ is not smooth at $o$ [[def-embedding-dimension-and-regular-local-ring]] and [F9]. [F8, F9]

1.3 The principal open $U:=D(x)$ is smooth. Set $t=y/x\in A_x$; the relation gives $x=t^2-1$ and $y=t(t^2-1)$, so $A_x\cong k[t,(t^2-1)^{-1}]\cong k[t,s]/(s(t^2-1)-1)$. The derivative with respect to $s$ is the unit $t^2-1$, so this is standard smooth over $k$ by [F9]. Since $D(x)$ is the complement of the singular point $o$, the smooth locus of $X$ is exactly $U$. [F8, F9]

1.4 The rational map. The regular function $y/x$ defines a $k$-morphism $\varphi_U:U\to\mathbb P^1$ into $U_0$ by [F4]. Let $\varphi:X\dashrightarrow\mathbb P^1$ be represented by $(U,\varphi_U)$. The target is proper and separated over $k$ by [F5], so it satisfies the target hypotheses of [F2]. [F2, F4, F5]

2.1 Curve and dimension. For $K=k$, the injection $k[x]\hookrightarrow A$ follows because a nonzero polynomial in $x$ cannot be divisible by the degree-two polynomial in $y$. Hence $x$ is transcendental over $k$ and $y$ is algebraic over $k(x)$, so $\operatorname{trdeg}_k\operatorname{Frac}(A)=1$. By [F8], $\dim A=1$ and $\operatorname{Spec}A$ has chain dimension one. The ring $A$ is finite type over $k$, its affine structure morphism is separated [F10], and it is nonempty and geometrically integral by step 1.1. Thus $X$ is a curve over $k$ [F1, F8]. [F1, F8, step 1.1]

2.2 The branch parameterization is a morphism. The ring map $A\to k[t]$, $x\mapsto t^2-1$, $y\mapsto t(t^2-1)$ is well defined because $t^2(t^2-1)^2-(t^2-1)^3-(t^2-1)^2=0$, and it induces $\nu$. Both $t=1$ and $t=-1$ map to $o$; on $t^2-1\neq0$, $\varphi_U\circ\nu$ is the chart-coordinate map $\tau:\mathbf A^1\to\mathbb P^1$ given by $\hat t=t$. [F4, step 1.4]

3.1 Suppose a morphism $\psi:X\to\mathbb P^1$ extends $\varphi$. By rational-map equivalence, $\psi|_U$ and $\varphi_U$ agree on a nonempty open of the integral scheme $U$, hence on a dense open. Since $U$ is reduced and $\mathbb P^1$ is separated, [F3] gives $\psi|_U=\varphi_U$. Thus $\psi\circ\nu$ and $\tau$ agree on $\mathbf A^1\smallsetminus\{1,-1\}$, a dense open of the reduced scheme $\mathbf A^1$; [F3] gives $\psi\circ\nu=\tau$ everywhere. [F2, F3, step 2.2]

4.1 Evaluating at $1$ and $-1$ gives $\psi(o)=\tau(1)$ and $\psi(o)=\tau(-1)$. The chart-coordinate points $\hat t=1$ and $\hat t=-1$ are distinct because $\operatorname{char}k\neq2$, a contradiction. Therefore $\varphi$ has no extension. [step 3.1]

5.1 Any two extensions of $\varphi$ agree on the dense open $U$ of the reduced scheme $X$; since $\mathbb P^1$ is separated, [F3] makes them equal. This disproves existence while preserving conditional uniqueness. It is an integral singular curve with a proper target, so the smoothness hypothesis in [F6] cannot be dropped. Choice availability is accounted for here: AC [A1] supplies DC [A2], the premise used by [F6] for the smooth-source comparison; this availability note is not part of the explicit two-branch contradiction. [A1, A2, F1, F3, F6, step 2.1, step 1.2, step 4.1] ∎
