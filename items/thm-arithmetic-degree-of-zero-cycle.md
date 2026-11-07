---
id: thm-arithmetic-degree-of-zero-cycle
kind: theorem
title: "Arithmetic degree of a zero-cycle on a projective arithmetic variety"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-absolute-norm-of-an-ideal
  - def-archimedean-embeddings-and-number-field-signature
  - def-arithmetic-chow-group-with-green-currents
  - def-arithmetic-variety-over-the-integers
  - def-degree-divisor-proper-curve
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - cor-ring-of-integers-is-a-dedekind-domain
  - lem-finite-algebra-norm-order-formula
  - thm-normalization-reduced-curve-exists-finite
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-product-formula-for-number-fields
  - thm-proper-quasi-finite-is-finite
  - thm-projective-morphism-proper
  - cor-finite-morphism-proper
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - thm-transitivity-of-integrality
  - def-integral-closure-and-integrally-closed-domain
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Henri Gillet and Christophe Soulé, Arithmetic intersection theory"
      url: "https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf"
      locator: "§3.4.3, printed pp. 130–132, and §§4.3.1–4.3.2, printed pp. 147–151"
    - title: "Ziyang Jeremy Gao, An Introduction to Arakelov Geometry"
      url: "https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf"
      locator: "§2.4.2, printed pp. 31–32, including Definition 2.4.8 and Theorem 2.4.9"
---

## Statement

Assume the Axiom of Choice. Let $X$ be a nonempty projective regular arithmetic variety over $\mathcal O_K$, where $K$ is a number field, the total scheme has pure dimension $d+1$, and the smooth projective generic fibre $X_K$ has pure dimension $d$. For an arithmetic zero-cycle $(Z,g)\in\widehat Z^{d+1}(X)$, write $Z=\sum_x n_x[x]$ over its closed points and let $g_\sigma$ be the top-degree current on $X_\sigma(\mathbb C)$ for each embedding $\sigma:K\hookrightarrow\mathbb C$. Then
$$\widehat{\deg}(Z,g):=\sum_x n_x\log\#\kappa(x)+\frac12\sum_{\sigma:K\hookrightarrow\mathbb C}\int_{X_\sigma(\mathbb C)}g_\sigma$$
vanishes on the defining relations of the arithmetic Chow group and therefore induces a homomorphism $\widehat{\deg}:\widehat{\operatorname{CH}}^{d+1}(X)\to\mathbb R$.

## Statement references

[Gillet–Soulé, §3.4.3 and Theorem 4.3.2](https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf)

[Gao, Definition 2.4.8 and Theorem 2.4.9](https://ziyangjeremygao.github.io/teaching/Arakelov/ArakelovGeometry.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a projective regular arithmetic variety $X$ over $\mathcal O_K$ with pure total dimension $d+1$, a smooth projective generic fibre of pure dimension $d$, and an arithmetic zero-cycle $(Z,g)$.

[A1] The Axiom of Choice is assumed through the number-field product formula and the principal-divisor degree theorem for proper curves ([[def-axiom-of-choice]], [[thm-product-formula-for-number-fields]], [[thm-principal-divisor-degree-zero-proper-curve]]).

[F1] Arithmetic Chow groups quotient Green arithmetic cycles by principal arithmetic cycles and exact-current relations, and their differential operators extend to currents by duality; arithmetic varieties are flat and finite type over the number ring, their complex manifolds are compact when projective, and projectivity makes their structural morphisms proper ([[def-arithmetic-chow-group-with-green-currents]], [[def-arithmetic-variety-over-the-integers]], [[thm-projective-morphism-proper]]).

[F2] For every number field $L$ and $a\in L^\times$, the normalized finite and archimedean absolute values satisfy $\prod_v|a|_v=1$, with real factors $|\sigma(a)|$ and one complex factor $|\tau(a)|^2$ per conjugate pair ([[thm-product-formula-for-number-fields]]).

[F3] A principal divisor on a normal proper curve over a field has degree zero; a reduced finite-type curve has a finite normalization, and finite morphisms are proper ([[thm-principal-divisor-degree-zero-proper-curve]], [[thm-normalization-reduced-curve-exists-finite]], [[cor-finite-morphism-proper]]).

[F4] For a finite domain extension of one-dimensional Noetherian local domains, the field norm order is the sum of local orders weighted by residue-field degrees ([[lem-finite-algebra-norm-order-formula]]).

[F5] A proper quasi-finite morphism is finite ([[thm-proper-quasi-finite-is-finite]]).

[F6] The degree of a divisor on a proper curve over a field is the sum of its coefficients weighted by the residue-field degrees ([[def-degree-divisor-proper-curve]]).

[F7] For a nonzero integral ideal $\mathfrak a\subseteq\mathcal O_K$, its absolute norm is $N\mathfrak a=\#(\mathcal O_K/\mathfrak a)$ ([[def-absolute-norm-of-an-ideal]]).

[F8] The integral closure of $\mathcal O_K$ in any finite separable extension $L/K$ is finite over $\mathcal O_K$; it equals $\mathcal O_L$ by transitivity of integrality and the definition of the ring of integers ([[cor-ring-of-integers-is-a-dedekind-domain]], [[thm-finite-integral-closure-in-a-finite-separable-extension]], [[thm-transitivity-of-integrality]], [[def-integral-closure-and-integrally-closed-domain]], [[def-ring-of-integers-of-a-number-field]]).

[F9] On the pure-dimensional arithmetic variety used here, codimension $d$ means dimension one and codimension $d+1$ means dimension zero ([[def-arithmetic-chow-group-with-green-currents]]).

## Proof

**Given:** The hypotheses and notation of the Statement.

1.1 Define $\Phi(Z,g)$ by the displayed formula. It is additive in the cycle coefficients and in the current, so it is a homomorphism on the group of arithmetic cycles before quotienting. [given, construct, algebra]

1.2 A generator $(0,\partial u+\bar\partial v)$ has zero image. Each $X_\sigma(\mathbb C)$ is compact without boundary by [F1]. By the definition of the differential on currents, pairing $\partial u$ or $\bar\partial v$ with the constant test function $1$ gives, up to its degree sign, the pairing of $u$ or $v$ with $\partial1$ or $\bar\partial1$, both zero. Hence both integrals vanish. [F1, given, algebra]

2.1 Let $W$ be a horizontal integral curve in a principal relation and $f\in K(W)^\times$. Since $W$ is closed in the projective $X$, $W\to\operatorname{Spec}\mathcal O_K$ is proper by [F1]. Its generic fibre is a zero-dimensional integral finite-type $K$-scheme, hence $\operatorname{Spec}L$ for a finite extension $L/K$. Every closed fibre is zero-dimensional: a positive-dimensional closed subset of the integral curve $W$ would equal $W$, contradicting horizontality. Thus the map is quasi-finite and finite by [F5]. Let $A$ be the finite $\mathcal O_K$-algebra defining $W$. Because $W$ is horizontal, the structural map gives an inclusion $\mathcal O_K\subseteq A$; $A$ is integral over $\mathcal O_K$ and has fraction field $L$. By [F8], $\mathcal O_L$ is the integral closure of $\mathcal O_K$ in $L$; transitivity of integrality shows it is also the integral closure of $A$ in $L$. Since $\mathcal O_L$ is finite over $\mathcal O_K$ and $\mathcal O_K\subseteq A\subseteq\mathcal O_L$, the same generators make it finite over $A$. Thus $\operatorname{Spec}\mathcal O_L$ is the normalization of $W$. For each closed point $x\in W$, apply [F4] to the finite normalization over $\mathcal O_{W,x}$; its function-field norm is the identity. The equality $\log\#\kappa(\mathfrak q)=[\kappa(\mathfrak q):\kappa(x)]\log\#\kappa(x)$ holds because the residue fields are finite and a degree-$n$ extension of finite fields has $q^n$ elements when the base has $q$ elements. It shows that the finite cycle contribution equals $\sum_{\mathfrak q\subset\mathcal O_L}\operatorname{ord}_{\mathfrak q}(f)\log N\mathfrak q$. The archimedean pushforward is the sum over all embeddings $\tau:L\hookrightarrow\mathbb C$, so the value of $\Phi$ on this principal relation is
$$\sum_{\mathfrak q}\operatorname{ord}_{\mathfrak q}(f)\log N\mathfrak q-\frac12\sum_{\tau:L\hookrightarrow\mathbb C}\log|\tau(f)|^2=0$$
by [F2], with the factor $1/2$ converting the sum over all embeddings to the real-place and complex-pair normalization. [A1, F1, F2, F4, F5, F7, F8, given, algebra]

2.2 Let $W$ instead be a vertical integral curve lying over a prime $\mathfrak p\subset\mathcal O_K$. Its complexification is empty, so the Green term contributes zero. The finite term equals
$$\log N\mathfrak p\cdot\sum_{x\in W\text{ closed}}\operatorname{ord}_x(f)[\kappa(x):\kappa(\mathfrak p)].$$
Indeed, if $q=\#\kappa(\mathfrak p)$ and $n=[\kappa(x):\kappa(\mathfrak p)]$, a basis of the $n$-dimensional residue-field extension gives $\#\kappa(x)=q^n$, so $\log\#\kappa(x)=n\log q$. The finite normalization $\nu:W^{\mathrm{nu}}\to W$ is proper by [F3], normal, and birational by the normalization theorem in [F3]. For each closed $x\in W$, [F4] with $A=\mathcal O_{W,x}$ and its finite normalization gives $\operatorname{ord}_x(f)=\sum_{y\mapsto x}[\kappa(y):\kappa(x)]\operatorname{ord}_y(f)$, since the function-field norm is the identity. Summing with residue degrees over $\kappa(\mathfrak p)$ identifies the sum in the display with the degree of the principal divisor on $W^{\mathrm{nu}}$. The normalized curve is a normal proper curve, and [F3] makes that degree zero. Hence $\Phi$ vanishes on every vertical principal relation as well. [A1, F3, F4, F6, F7, given, algebra]

3.1 Every codimension-$d$ integral subscheme $W$ is a curve by [F9]. Its image in the one-dimensional base is either the generic point, making $W$ horizontal, or a closed point, making $W$ vertical. The relation subgroup is generated by the two types of relations checked in steps 1.2, 2.1, and 2.2. Therefore $\Phi$ vanishes on the full relation subgroup and descends to the claimed homomorphism on $\widehat{\operatorname{CH}}^{d+1}(X)$. [F1, F9, step 1.2, step 2.1, step 2.2, given] ∎
