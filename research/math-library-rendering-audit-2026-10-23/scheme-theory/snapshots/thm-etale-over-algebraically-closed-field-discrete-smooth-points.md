---
id: thm-etale-over-algebraically-closed-field-discrete-smooth-points
kind: theorem
title: "Finite and finite type etale schemes over an algebraically closed field"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - thm-etale-equivalent-flat-unramified-fp
  - def-unramified-morphism-finite-type
  - thm-formally-unramified-differentials-zero
  - lem-etale-residue-extensions-finite-separable
  - def-finite-morphism-schemes
  - def-locally-finite-type-and-finite-type-morphism
  - def-locally-finite-presentation-morphism
  - def-algebraically-closed-field
  - cor-factor-theorem-over-a-commutative-ring
  - def-algebraic-and-transcendental-elements
  - cor-element-algebraic-iff-simple-extension-finite
  - def-extension-degree-and-finite-extension
  - thm-prime-spectrum-of-a-localisation-bijection
  - thm-artinian-ring-characterisation-by-primes
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-structure-theorem-for-artinian-rings
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented
  - ex-noetherian-integers-and-fields
  - def-krull-dimension-of-a-ring
  - cor-derivations-represented-by-differentials
  - def-kahler-differentials-algebra
  - def-finitely-presented-module-and-algebra
  - cor-product-schemes-over-base-exists
  - cor-free-modules-are-projective-and-flat
  - cor-affine-scheme-quasi-compact
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.36 (etale morphisms, tag 02G4) and Algebra, Section 10.144"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26 (etale morphisms) and Exercise 26.1.B"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be an
algebraically closed field ([[def-algebraically-closed-field]]).

1. If $X$ is a finite \'etale $k$-scheme ([[def-finite-morphism-schemes]],
   [[def-etale-morphism-schemes]]), then $X$ is a finite disjoint union of
   copies of $\operatorname{Spec}k$: there is $r\ge0$ with an isomorphism of
   $k$-schemes
   $$X\;\cong\;\coprod_{i=1}^{r}\operatorname{Spec}k .$$
2. More generally the same conclusion holds whenever $X$ is merely \'etale and
   of finite type over $k$
   ([[def-locally-finite-type-and-finite-type-morphism]]); such an $X$ is then
   automatically finite over $k$. In particular a finite type \'etale
   $k$-scheme is the same thing as a finite \'etale $k$-scheme.
3. Conversely, for every $r\ge0$ the disjoint union
   $\coprod_{i=1}^{r}\operatorname{Spec}k=\operatorname{Spec}(k^{r})$, with its
   coproduct of identity structure morphisms, is a finite \'etale $k$-scheme;
   for $r=0$ it is the empty scheme.
4. The number $r$ is determined by $X$ (it is the number of points), so the
   decomposition is unique up to permutation of the factors: two finite \'etale
   $k$-schemes are isomorphic if and only if they have the same number of
   points.
5. The finite type hypothesis cannot be dropped: the infinite disjoint union
   $\coprod_{n\ge1}\operatorname{Spec}k$ is \'etale over $k$, but it is not
   quasi-compact, hence not finite and not even of finite type over $k$.

The Axiom of Choice is used through the étale criterion and residue-field
lemma in step 1.1 and the Artinian and maximal-ideal results in step 3.1.
The converse in step 1.2 and the infinite-union example in step 4.2 are
choice-free: their étaleness is checked directly on identity components.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] \'Etale at $x$ means smooth at $x$ of relative dimension $0$: $f$ is locally of finite presentation at $x$, flat at $x$, and every point of every geometric fibre over $x$ is geometrically regular of local dimension $0$; \'etaleness is a condition on the germ of $f$ at $x$, preserved in both directions by shrinking the source to an open neighbourhood of $x$ or the target to an open neighbourhood of $f(x)$ ([[def-etale-morphism-schemes]]).

[F2] Assume AC. For $f$ locally of finite presentation, $f$ is \'etale at $x$ if and only if $f$ is flat at $x$ and unramified at $x$, and unramified at $x$ means locally of finite type at $x$ together with formal unramifiedness at $x$, equivalently $\Omega_{X/S,x}=0$ ([[thm-etale-equivalent-flat-unramified-fp]], [[def-unramified-morphism-finite-type]], [[thm-formally-unramified-differentials-zero]]).

[F3] Assume AC. If $f$ is locally of finite type at $x$ and $\Omega_{X/S,x}=0$, then $\kappa(x)/\kappa(s)$ is a finite separable extension and $\mathfrak m_s\mathcal O_{X,x}=\mathfrak m_x$ ([[lem-etale-residue-extensions-finite-separable]]).

[F4] Over an algebraically closed field $k$ every nonconstant polynomial has a root in $k$ ([[def-algebraically-closed-field]]); $a\in k$ is a root of $P\in k[T]$ if and only if $T-a$ divides $P$ ([[cor-factor-theorem-over-a-commutative-ring]]). A finite extension $L/k$ is finite-dimensional over $k$ ([[def-extension-degree-and-finite-extension]]), and an element $\alpha$ is algebraic over $k$ exactly when $k(\alpha)/k$ is finite, in which case it has a minimal polynomial ([[def-algebraic-and-transcendental-elements]], [[cor-element-algebraic-iff-simple-extension-finite]]).

[F5] A localization correspondence: for a multiplicative set $S\subseteq R$, contraction along $R\to S^{-1}R$ is an inclusion-preserving bijection from $\operatorname{Spec}(S^{-1}R)$ onto the primes of $R$ disjoint from $S$ ([[thm-prime-spectrum-of-a-localisation-bijection]]). The Krull dimension of a nonzero ring is the supremum of the lengths of strict chains of primes, so a ring with no strict chain of primes has dimension $0$ ([[def-krull-dimension-of-a-ring]]); a finite type algebra over the field $k$ is Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[ex-noetherian-integers-and-fields]]).

[F6] Assume AC. A Noetherian commutative ring is Artinian if and only if every prime ideal is maximal ([[thm-artinian-ring-characterisation-by-primes]]), and in a nonzero commutative ring every proper ideal is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[F7] Assume AC. A commutative Artinian ring $R$ with maximal ideals $\mathfrak m_1,\dots,\mathfrak m_r$ satisfies $R\cong\prod_{i=1}^{r}R_{\mathfrak m_i}$; for $R=0$ there are no maximal ideals ([[thm-structure-theorem-for-artinian-rings]]).

[F8] For a ring map $A\to B$ with K\"ahler differential module $(\Omega_{B/A},\mathrm d)$ and any $B$-module $M$, composition with $\mathrm d$ is a bijection $\operatorname{Hom}_B(\Omega_{B/A},M)\to\operatorname{Der}_A(B,M)$, so $\Omega_{B/A}$ represents the derivations and vanishes exactly when every $A$-derivation of $B$ into every $B$-module vanishes ([[cor-derivations-represented-by-differentials]], [[def-kahler-differentials-algebra]]).

[F9] For every scheme $S$, disjoint unions are coproducts of $S$-schemes: the components are open, carry their own structure sheaves, and maps out of the disjoint union are exactly the independent component maps ([[cor-product-schemes-over-base-exists]]). A finite morphism to an affine base has affine source: for $U=\operatorname{Spec}A\subseteq S$ the inverse image is $\operatorname{Spec}B$ with $B$ a module-finite $A$-algebra ([[def-finite-morphism-schemes]]), and affine schemes are quasi-compact ([[cor-affine-scheme-quasi-compact]]).

[F10] A free module is flat, regardless of choice ([[cor-free-modules-are-projective-and-flat]]); a finite type algebra over the Noetherian ring $k$ is finitely presented ([[cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented]], [[def-finitely-presented-module-and-algebra]]), and a morphism is locally of finite presentation when it has affine charts with finitely presented algebra maps ([[def-locally-finite-presentation-morphism]]).

[F11] A morphism is of finite type when it is locally of finite type and quasi-compact ([[def-locally-finite-type-and-finite-type-morphism]]); a locally finite type morphism whose every point has a finitely presented chart is locally of finite presentation ([[def-locally-finite-presentation-morphism]]).

[F12] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Local structure at an \'etale point. Let $X$ be \'etale and of finite type over $k$ (this covers the finite case of claim 1, since a finite morphism is of finite type), let $f\colon X\to\operatorname{Spec}k$ be the structure morphism and let $x\in X$. By [F1] $f$ is locally of finite presentation and flat at $x$ and is smooth of relative dimension $0$ at $x$; since this holds at every point, $f$ is locally of finite presentation [F11]. By [F2] in the forward direction $f$ is unramified at $x$, so $\Omega_{X/k,x}=0$. The base $\operatorname{Spec}k$ has the single point $s$ with residue field $\kappa(s)=k$ and maximal ideal $\mathfrak m_s=0$, so [F3] (AC) gives that $\kappa(x)/k$ is finite separable and that $\mathfrak m_x=\mathfrak m_s\mathcal O_{X,x}=0$. Thus $\mathcal O_{X,x}$ is a field and $\mathcal O_{X,x}=\kappa(x)$. [F1, F2, F3, F11]

1.2 Converse: finite disjoint unions of copies of $\operatorname{Spec}k$ are finite \'etale. Let $X=\coprod_{i=1}^{r}\operatorname{Spec}k=\operatorname{Spec}(k^{r})$ over $k$; this is a scheme over $k$ by [F9], and it is finite since $k^{r}$ is a module-finite $k$-algebra [F9]. The ring $k^{r}$ is a free $k$-module of rank $r$, hence flat [F10], and of finite type over $k$, hence finitely presented since $k$ is Noetherian [F10], so the structure morphism is locally of finite presentation [F10]. For the differentials, let $D\colon k^{r}\to M$ be a $k$-derivation into a $k^{r}$-module $M$ and let $e_1,\dots,e_r$ be the standard idempotents; for $i\neq j$ one has $0=D(e_ie_j)=e_iD(e_j)+e_jD(e_i)$, and multiplying by $e_i$ gives $e_iD(e_j)=0$; also $D(e_i)=D(e_i^{2})=2e_iD(e_i)$, and multiplying by $e_i$ resp. by $e_j$ with $j\neq i$ gives $e_iD(e_i)=0$ and $e_jD(e_i)=0$; hence $D(e_i)=\sum_j e_jD(e_i)=0$ for all $i$, so $D=0$. By [F8] this says $\operatorname{Hom}_{k^{r}}(\Omega_{k^{r}/k},M)=0$ for every $M$, and taking $M=\Omega_{k^{r}/k}$ and the identity gives $\Omega_{k^{r}/k}=0$. For étaleness, use the definition directly on each open component: its structural map is the identity of $\operatorname{Spec}k$, a flat finitely presented map; after every extension $K/k$ its fibre is $\operatorname{Spec}K$, whose sole local ring is a field, regular of dimension zero. Thus [F1] makes each component, and hence the union, étale without the AC-qualified criterion. For $r=0$ this is the empty scheme, which is finite and \'etale vacuously, and the same computation with no idempotents gives $\Omega_{0/k}=0$. [F1, F8, F9, F10]

2.1 The residue field is $k$. Let $\alpha\in\kappa(x)$. By step 1.1 $\kappa(x)/k$ is finite, so $\kappa(x)$ is a finite-dimensional $k$-vector space and the subfield $k(\alpha)$ is a $k$-subspace of it, hence finite-dimensional; by [F4] $\alpha$ is algebraic over $k$, so there is a nonzero $P\in k[T]$ with $P(\alpha)=0$, and we choose such $P$ of least positive degree. Were $\deg P\ge2$, then $P$ is nonconstant, so by [F4] it has a root $\lambda\in k$ and the factor theorem [F4] writes $P=(T-\lambda)Q$ with $Q\neq0$ of degree $\deg P-1\ge1$; minimality of $\deg P$ gives $Q(\alpha)\neq0$, hence $0=P(\alpha)=(\alpha-\lambda)Q(\alpha)$ forces $\alpha=\lambda\in k$, and then $T-\lambda$ is a nonzero polynomial of degree $1<\deg P$ vanishing at $\alpha$, contradicting minimality. Therefore $\deg P=1$ and $\alpha\in k$, so $\kappa(x)=k$; with step 1.1, $\mathcal O_{X,x}=k$. [F4, step 1.1]

3.1 Affine charts split as a finite product of copies of $k$. Let $U=\operatorname{Spec}A\subseteq X$ be an affine chart with $A$ a finite type $k$-algebra; such charts exist since $f$ is of finite type [F11], and in the finite case $X=\operatorname{Spec}B$ with $B$ module-finite over $k$ is itself such a chart [F9]. If $A=0$, the chart is empty and is the product with zero factors; hence assume $A\ne0$. For a prime $\mathfrak p\subseteq A$ the local ring is $A_{\mathfrak p}=\mathcal O_{X,\mathfrak p}=k$ by step 2.1, a field whose only prime is $0=\mathfrak pA_{\mathfrak p}$; by the localization correspondence [F5] the primes of $A$ contained in $\mathfrak p$ correspond to the primes of $A_{\mathfrak p}$, so the only prime of $A$ contained in $\mathfrak p$ is $\mathfrak p$ itself: every prime of $A$ is minimal, and consequently there is no strict chain of primes, so $\dim A=0$ [F5]. The ring $A$ is Noetherian [F5]; since by [F6] every prime is contained in a maximal ideal and a strict inclusion $\mathfrak p\subsetneq\mathfrak m$ would be a strict chain, every prime of $A$ is maximal, so $A$ is Artinian by [F6]. The structure theorem [F7] then gives $A\cong\prod_{\mathfrak p}A_{\mathfrak p}=\prod_{\mathfrak p}k=k^{r_U}$, the product over the finitely many primes of $A$, and hence $U=\operatorname{Spec}(k^{r_U})$ is a finite disjoint union of copies of $\operatorname{Spec}k$. [F5, F6, F7, F9, F11, step 2.1]

4.1 Global conclusion for finite type $X$. Since $f$ is of finite type it is quasi-compact [F11], so $X$ admits a finite cover by affine charts $U_1,\dots,U_n$ as in step 3.1 (in the finite case one chart suffices by [F9]). Each $U_i$ is a finite disjoint union of copies of $\operatorname{Spec}k$, so each of its points is open in $U_i$ and hence in $X$; thus the underlying space of $X$ is discrete, and quasi-compactness makes it finite, say $X=\{x_1,\dots,x_r\}$. For each $i$ the open subscheme $\{x_i\}$ has local ring $\mathcal O_{X,x_i}=k$ by step 2.1 and lies in some chart $U_j$ that is a disjoint union of copies of $\operatorname{Spec}k$, so $\{x_i\}\cong\operatorname{Spec}k$; therefore $X\cong\coprod_{i=1}^{r}\operatorname{Spec}k$ by [F9]. This proves claims 1 and 2, and since $k^{r}$ is a finite $k$-module, $X$ is finite over $k$ [F9]. [F9, F11, step 2.1, step 3.1]

4.2 The finite type hypothesis is essential. By [F9] the disjoint union $X=\coprod_{n\ge1}\operatorname{Spec}k$ is a scheme whose components are open and isomorphic to $\operatorname{Spec}k$, with structure morphism $f\colon X\to\operatorname{Spec}k$ induced by the identity on each component; at a point $x$ lying in one component, the germ of $f$ is the identity $\operatorname{Spec}k\to\operatorname{Spec}k$, which is flat, finitely presented (the algebra $k\cong k[T]/(T)$ is finitely presented [F10]) and after every field extension its fibre is the spectrum of that field, regular of dimension zero; thus it is étale directly by [F1], as in the identity-component argument of step 1.2; by the germ property [F1], $f$ is \'etale at $x$. As $x$ was arbitrary, $f$ is \'etale over $k$. The underlying set of $X$ is infinite, one point per component [F9], while a finite disjoint union $\coprod_{i=1}^{r}\operatorname{Spec}k$ has exactly $r$ points, so $X$ is not isomorphic to any such finite union: the finite type hypothesis of claims 1 and 2 cannot be dropped. The components form an open cover of $X$ with no finite subcover, since each component is nonempty and the components are pairwise disjoint, so $X$ is not quasi-compact; were $X$ finite over $k$, its inverse image $X=f^{-1}(\operatorname{Spec}k)$ would be affine [F9], hence quasi-compact [F9], a contradiction; and were $X$ of finite type over $k$ it would be quasi-compact [F11]. Hence $X$ is \'etale over $k$ but neither finite nor of finite type over $k$. The Axiom of Choice [F12] is assumed in the Statement and used exactly through [F3] in step 1.1, [F6] and [F7] in step 3.1 and [F2] in step 1.1. These identity-component arguments do not invoke the AC-qualified criterion and require no choice. [F1, F9, F10, F11, F12, step 1.2]

5.1 Conclusion. Claims 1 and 2 are steps 1.1, 2.1, 3.1 and 4.1; claim 3 is the converse step 1.2; the uniqueness statement of claim 4 is immediate from the global step since an isomorphism of $k$-schemes induces a bijection of underlying sets and $r$ is the number of points; and claim 5 is the final step. [step 1.1, step 2.1, step 3.1, step 4.1, step 1.2, step 4.2]

$\square$
