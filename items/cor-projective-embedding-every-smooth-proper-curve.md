---
id: cor-projective-embedding-every-smooth-proper-curve
kind: corollary
title: "Every smooth proper curve admits a projective embedding"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-degree-divisor-proper-curve
  - def-finite-morphism-schemes
  - def-integral-scheme
  - def-normal-noetherian-ring
  - def-projective-morphism-pre-proj
  - def-proper-morphism
  - def-relative-projective-space-standard-charts
  - def-very-ample-invertible-sheaf-relative
  - lem-ample-pullback-finite-morphism
  - lem-curve-closed-subsets-finite
  - lem-integral-finite-type-scheme-function-field
  - lem-proper-normal-curve-rational-function-map
  - lem-twisting-sheaf-projective-space-ample
  - thm-affine-domain-dimension-transcendence-degree
  - thm-ample-powers-very-ample-proper-base
  - thm-local-ring-smooth-curve-dvr
  - thm-valuation-ring-is-integrally-closed
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the rational-function,
projective-space and finite-morphism suppliers. Let $C$ be a smooth proper
geometrically integral curve over a field $k$. Then there is an integer
$N\ge0$ and a closed immersion $i\colon C\to\mathbf P^N_k$ over $k$;
equivalently the structure morphism $C\to\operatorname{Spec}k$ is projective in
the H-projective convention of [[def-projective-morphism-pre-proj]]. The proof
uses no Serre duality, no Riemann-Roch and no residue theory, so this corollary
may be used by the duality items of this page without circularity.

## Facts & Assumptions

**Given:** the Axiom of Choice; a field $k$; a smooth proper geometrically integral curve $C$ over $k$; and its structure morphism $C\to\operatorname{Spec}k$.

[F1] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F2] A smooth proper geometrically integral curve is a nonempty integral finite-type $k$-scheme whose structure morphism is proper and whose underlying space has chain dimension one. Every point other than its generic point is closed ([[def-algebraic-curve-over-field]], [[lem-curve-closed-subsets-finite]]). Its structure morphism is proper in the sense of [[def-proper-morphism]]. This is also a proper curve in the sense required by the rational-function map supplier ([[def-degree-divisor-proper-curve]]).

[F3] For every nonempty affine open $U=\operatorname{Spec}A\subseteq C$, $A$ is a domain and $k(C)=\operatorname{Frac}(A)$; this function field is finitely generated over $k$ ([[lem-integral-finite-type-scheme-function-field]]).

[F4] If $A$ is a finite-type $k$-domain, then $\dim A=\operatorname{trdeg}_k\operatorname{Frac}(A)$ ([[thm-affine-domain-dimension-transcendence-degree]]).

[F5] At every closed point $x$ of a smooth curve over $k$, the local ring $\mathcal O_{C,x}$ is a discrete valuation ring ([[thm-local-ring-smooth-curve-dvr]]).

[F6] A discrete valuation ring is a valuation ring, and every valuation ring is an integrally closed domain ([[thm-valuation-ring-is-integrally-closed]]).

[F7] The rational-function map supplier applies to a proper curve whose local rings are integrally closed domains. Its generic local ring is the function field $k(C)$, a field [F3]; each closed-point local ring is a DVR [F5] and therefore an integrally closed domain [F6]; and all points are generic or closed [F2]. Thus $C$ satisfies the normality hypothesis of [[lem-proper-normal-curve-rational-function-map]] ([[def-normal-noetherian-ring]], [[def-integral-scheme]]).

[F8] If $f\in k(C)^\times$ is transcendental over $k$, then the proper-normal-curve map result supplies a finite locally free morphism $\varphi_f\colon C\to\mathbf P^1_k$ ([[lem-proper-normal-curve-rational-function-map]]). Only the finite-map conclusion is needed here; its separate chart-algebra assertion is not used. Finiteness is in the sense of [[def-finite-morphism-schemes]].

[F9] The twisting sheaf $\mathcal O_{\mathbf P^1_k}(1)$ is ample ([[lem-twisting-sheaf-projective-space-ample]]).

[F10] Pullback of an ample invertible sheaf along a finite morphism is ample ([[lem-ample-pullback-finite-morphism]]).

[F11] If $S$ is Noetherian, $X\to S$ is proper and of finite type, and $L$ is an ample invertible sheaf on $X$, then a positive power of $L$ is closed H-very ample relative to $S$ ([[thm-ample-powers-very-ample-proper-base]]).

[F12] Closed H-very ampleness relative to $S$ provides a closed immersion $X\to\mathbb P^N_S$ for some $N\ge0$; composing with the projective-space projection gives projectivity in the H-projective convention ([[def-very-ample-invertible-sheaf-relative]], [[def-relative-projective-space-standard-charts]], [[def-projective-morphism-pre-proj]]).

## Proof

**Proof technique:** direct; use a transcendental function on the one-dimensional function field to map the normal proper curve finitely to $\mathbf P^1$, then pull back an ample sheaf and apply the ample-powers theorem.

1.1 The curve is integral, proper and of chain dimension one. It is of finite type over $k$ by the curve definition, and $\operatorname{Spec}k$ is Noetherian. Thus $C\to\operatorname{Spec}k$ is a proper finite-type morphism, and $C$ is a proper curve in the sense required by [F2]. [F2, algebra]

1.2 The function field has transcendence degree one. Chain dimension one gives a strict chain $Z_0\subsetneq Z_1$ of nonempty irreducible closed subsets of $C$. Since $C$ is itself irreducible and closed, $Z_1=C$; otherwise $Z_0\subsetneq Z_1\subsetneq C$ would be a chain of length two. Choose $p\in Z_0$. As $Z_0\subsetneq C$, the point $p$ is not the generic point, so it is closed by [F2]. Choose an affine open $U=\operatorname{Spec}A$ containing $p$, and let $\mathfrak m$ be its maximal ideal. By [F5], $\dim A_{\mathfrak m}=\dim\mathcal O_{C,p}=1$, so $\dim A\ge1$. Any strict chain of irreducible closed subsets of $U$ remains strict after taking closures in $C$: each closed subset is recovered by intersecting its closure with $U$. Hence $\dim A=\dim U\le\dim C=1$, and $\dim A=1$. Applying [F4] and [F3] gives $\operatorname{trdeg}_k k(C)=1$. [F2, F3, F4, F5, choose]

1.3 The curve is normal in the sense used in [F7]. Every point is either the generic point or closed [F2]. The generic local ring is $k(C)$, a field [F3]. At each closed point the local ring is a DVR [F5], hence an integrally closed domain [F6]. [F2, F3, F5, F6]

2.1 Choose a transcendental element $f\in k(C)$, which exists because $\operatorname{trdeg}_k k(C)=1$ [F4, step 1.2]. It is nonzero, and step 1.3 verifies normality, so [F8] provides a finite locally free morphism $\varphi_f\colon C\to\mathbf P^1_k$. [F8, step 1.2, step 1.3, choose]

3.1 The sheaf $\mathcal O_{\mathbf P^1_k}(1)$ is ample by [F9]. Since $\varphi_f$ is finite, [F10] makes its pullback $L:=\varphi_f^*\mathcal O_{\mathbf P^1_k}(1)$ an ample invertible sheaf on $C$. [F9, F10, step 2.1]

4.1 The base $\operatorname{Spec}k$ is Noetherian; the structure morphism of $C$ is proper of finite type [F2, step 1.1]; and $L$ is ample [F10, step 3.1]. The ample-powers theorem [F11] therefore gives a positive integer d such that $L^{\otimes d}$ is closed H-very ample relative to $\operatorname{Spec}k$. [F11, F2, step 1.1, step 3.1]

5.1 By [F12], this closed H-very ample sheaf yields an integer $N\ge0$ and a closed immersion $i\colon C\to\mathbf P^N_k$. Its composite with $\mathbf P^N_k\to\operatorname{Spec}k$ is the structure morphism, proving projectivity in the stated H-projective convention. This argument uses no Serre duality, Riemann-Roch or residue theory; the Axiom of Choice is inherited through the declared curve, rational-map, projective-space and ample-power suppliers. [F1, F12, step 4.1] ∎
