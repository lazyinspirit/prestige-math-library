---
id: cex-genus-zero-without-rational-point-not-p1
kind: counterexample
title: "A genus-zero curve need not be the projective line"
status: published
origin: pipeline
deps:
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - cor-complex-numbers-are-a-quadratic-real-extension
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-irreducible-real-polynomials-have-degree-one-or-two
  - cor-transcendence-degree-tower-additivity
  - def-ag-standard-smooth-algebra
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-algebraic-closure
  - def-dimension-noetherian-topological-space
  - def-degree-divisor-proper-curve
  - def-genus-euler-characteristic-curve
  - def-geometric-fibre
  - def-geometrically-reduced-integral-connected-fibre
  - def-krull-dimension-of-a-ring
  - def-proper-morphism
  - def-relative-projective-space-standard-charts
  - def-residue-field-scheme-point
  - def-smooth-morphism-classical
  - lem-chain-dimension-open-cover
  - lem-closed-immersion-proper
  - lem-field-valued-points-of-schemes
  - lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - lem-proper-stable-composition
  - thm-affine-domain-dimension-transcendence-degree
  - thm-evaluation-kernel-and-minimal-polynomial
  - thm-genus-zero-point-implies-projective-line
  - thm-irreducible-closed-subsets-and-prime-ideals
  - thm-noetherian-ring-has-noetherian-spectrum
  - thm-plane-curve-arithmetic-genus
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-polynomial-degree-of-a-product-over-a-domain
  - thm-projective-space-proper-over-base
  - thm-simple-algebraic-extension-quotient-power-basis-and-degree
  - thm-the-complex-numbers-are-algebraically-closed
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20230417084901id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Counterexample

Assume the Axiom of Choice inherited from the current smoothness, properness, plane-genus and rational-point suppliers.

Let $k=\mathbb R$ and let
$$C=V_+(x^2+y^2+z^2)\subseteq\mathbb P^2_{\mathbb R}$$
be the real projective conic. Then:

1. **$C$ is a smooth proper geometrically integral curve over $\mathbb R$.**
   On each of the three standard affine charts, after permuting coordinates,
   the equation is $1+u^2+v^2=0$. In its chart ring the Jacobian entries
   $2u,2v$ generate the unit ideal, since
   $1=(-u/2)(2u)+(-v/2)(2v)$; each prime therefore has a neighborhood on which
   one Jacobian minor is invertible, giving a standard smooth presentation.
   Thus all three charts are smooth over $\mathbb R$. The conic is a closed
   subscheme of the proper $\mathbb R$-scheme $\mathbb P^2_{\mathbb R}$, hence
   proper. Over $\mathbb C$ the form $F$ is
   irreducible: a factorisation $x^2+y^2+z^2=L_1L_2$ into linear forms would,
   after setting $z=0$, make $x^2+y^2=(x+iy)(x-iy)$ the product of the
   restrictions of $L_1,L_2$, so by unique factorisation in $\mathbb C[x,y]$
   the restrictions are units times $x+iy$ and $x-iy$. After rescaling and, if
   necessary, interchanging the factors, write $L_1=x+iy+\alpha z$ and
   $L_2=x-iy+\gamma z$. Expanding gives
   $$L_1L_2=x^2+y^2+(\alpha+\gamma)xz+i(\gamma-\alpha)yz+\alpha\gamma z^2.$$
   Comparing with $F$ gives $\alpha+\gamma=0$,
   $i(\gamma-\alpha)=0$, and $\alpha\gamma=1$. The first two equations force
   $\gamma=\alpha$ and $2\alpha=0$, hence $\alpha=\gamma=0$ in characteristic
   zero, contradicting $\alpha\gamma=1$. Thus $F$ is irreducible over
   $\mathbb C$. The scheme $C_{\mathbb C}=V_+(F)$ is reduced and irreducible;
   it is nonempty since it contains $[i:0:1]$. The field $\mathbb C$ is an
   algebraic closure of $\mathbb R$, so this is the geometric fibre used to
   establish geometric integrality over $\mathbb R$; since $\mathbb C$ is
   algebraically closed, the same scheme is geometrically integral over
   $\mathbb C$. Its chain dimension, and that of $C$ over $\mathbb R$, are one
   by the direct affine-chart calculation in [F4].
2. **$g(C)=0$.** By [[thm-plane-curve-arithmetic-genus]] applied to the curve
   $C$ cut out by the degree-two form, the arithmetic genus is
   $p_a(C)=\frac{(2-1)(2-2)}{2}=0$, and for a smooth curve the arithmetic genus
   is the genus ([[def-genus-euler-characteristic-curve]]), so $g(C)=0$.
3. **$C$ has no $\mathbb R$-rational point.** If $x,y,z\in\mathbb R$ with
   $x^2+y^2+z^2=0$, then $x=y=z=0$; since $[0:0:0]$ is not a point of
   $\mathbb P^2_{\mathbb R}$, the conic has no $\mathbb R$-point, $C(\mathbb R)=\varnothing$.
4. **The hypothesis of [[thm-genus-zero-point-implies-projective-line]] is
   not satisfied.** For every closed point $p\in C$, its residue field is a
   finite extension of $\mathbb R$; it is separable and simple, so an
   irreducible real minimal polynomial for a generator has degree $1$ or $2$
   ([[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]],
   [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]],
   [[cor-algebraic-extensions-of-perfect-fields-are-separable]],
   [[thm-primitive-element-theorem-for-finite-separable-extensions]],
   [[thm-evaluation-kernel-and-minimal-polynomial]],
   [[thm-simple-algebraic-extension-quotient-power-basis-and-degree]],
   [[cor-irreducible-real-polynomials-have-degree-one-or-two]]). Degree $1$
   would make $\kappa(p)=\mathbb R$ and give an $\mathbb R$-point by
   [[lem-field-valued-points-of-schemes]], contradicting item 3. Thus every
   closed point has degree $2$. Every divisor, including a signed divisor
   $D=\sum_p n_p[p]$ with arbitrary integers $n_p$, has degree
   $\deg_{\mathbb R}D=2\sum_p n_p$, which is even
   ([[def-degree-divisor-proper-curve]]). In particular, no divisor has
   degree one, so the theorem's degree-one-divisor hypothesis fails.
5. **Geometrically the conic is a projective line.** Over $\mathbb C$ the
   point $[i:0:1]$ satisfies $i^2+0^2+1=0$, so $C_{\mathbb C}$ has a
   $\mathbb C$-rational point; $C_{\mathbb C}$ is a smooth proper geometrically
   integral genus-zero curve over $\mathbb C$ by items 1 and 2 applied over
   $\mathbb C$, and
   [[thm-genus-zero-point-implies-projective-line]] therefore gives
   $C_{\mathbb C}\cong\mathbb P^1_{\mathbb C}$. Thus the same curve becomes a
   projective line after base change to $\mathbb C$.
6. **$C\not\cong\mathbb P^1_{\mathbb R}$.** The line
   $\mathbb P^1_{\mathbb R}$ has the $\mathbb R$-rational point $[1:0]$, and
   an $\mathbb R$-isomorphism would induce a bijection on $\mathbb R$-rational
   points; since $C(\mathbb R)=\varnothing$ by item 3, no such isomorphism
   exists.

Over a non-algebraically-closed field, genus zero therefore does not
determine the curve: the real conic is a projective line geometrically and a
form of $\mathbb P^1$ with no rational point arithmetically.

*Scaffold repair, recorded for the owner.* The frozen scaffold cited the
examples-page items `ex-base-change-real-conic-to-complex` and
`ex-projective-conic-standard-charts`; examples-page items are leaves and
cannot carry a load, and both uses are replaced here by the explicit
computations in items 1, 3, 5 and 6 ($F$ and its partials, the sign of a sum of
squares over $\mathbb R$, the evaluation at $[i:0:1]$, and the transport of
rational points along an isomorphism).

The current [[thm-plane-curve-arithmetic-genus]] supplies the genus computation,
and the current [[thm-genus-zero-point-implies-projective-line]] is used only
to state the missing rational-point hypothesis. The explicit smoothness,
geometric-integrality, residue-degree, and real-point arguments below establish
the counterexample directly.

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the current smoothness, properness, plane-genus and rational-point suppliers; the field $k=\mathbb R$, the form $F=x^2+y^2+z^2$, the closed subscheme $C=V_+(F)\subseteq\mathbb P^2_{\mathbb R}$, and its base change $C_{\mathbb C}$ to $\mathbb C$.

[F1] Smoothness: for either $K=\mathbb R$ or $K=\mathbb C$, each of the three standard affine charts of $C_K$ is presented as $A_K=K[u,v]/(1+u^2+v^2)$. Its Jacobian row is $(2u,2v)$, and in $A_K$ one has $1=(-u/2)(2u)+(-v/2)(2v)$. Thus no prime contains both entries; around every prime one of them is invertible, so the one-equation presentation is standard smooth there by [[def-ag-standard-smooth-algebra]]. By [F2] the structure map $C_K\to\operatorname{Spec}K$ is proper, hence of finite type by [[def-proper-morphism]], so the finite-type hypothesis in [[def-smooth-morphism-classical]] holds. Therefore every chart, and hence $C_K$, is smooth over $K$.

[F2] Properness: for either $K=\mathbb R$ or $K=\mathbb C$, $\mathbb P^2_K$ is proper over $K$; the closed immersion $C_K\hookrightarrow\mathbb P^2_K$ is proper, and its composition with the structure morphism is proper ([[thm-projective-space-proper-over-base]], [[lem-closed-immersion-proper]], [[lem-proper-stable-composition]], [[def-proper-morphism]]).

[F3] Geometric integrality: over $\mathbb C$ the form $F$ has no factorisation into linear forms. Any proper factorisation of a homogeneous quadratic over a field has two degree-one factors; writing each as its degree-one homogeneous part plus a constant, the degree-zero and degree-one parts of their product force both constants to vanish. Thus it suffices to test homogeneous linear factors. If $F=L_1L_2$, then restricting to $z=0$ and using unique factorisation in $\mathbb C[x,y]$ lets us rescale and order the factors as $L_1=x+iy+\alpha z$ and $L_2=x-iy+\gamma z$. Their product has $xz$, $yz$, and $z^2$ coefficients $\alpha+\gamma$, $i(\gamma-\alpha)$, and $\alpha\gamma$, respectively. Equality with $F$ requires $\alpha+\gamma=0$, $i(\gamma-\alpha)=0$, and $\alpha\gamma=1$; the first two force $\alpha=\gamma=0$ in characteristic zero, contradicting the third. Thus $F$ is irreducible in $\mathbb C[x,y,z]$; its principal ideal is prime by the finite-variable UFD lemma, so $C_{\mathbb C}$ is reduced and irreducible. It is nonempty since $[i:0:1]\in C_{\mathbb C}$. The extension $\mathbb C/\mathbb R$ is algebraic ([[cor-complex-numbers-are-a-quadratic-real-extension]]) and $\mathbb C$ is algebraically closed ([[thm-the-complex-numbers-are-algebraically-closed]]), so $\mathbb C$ is an algebraic closure of $\mathbb R$ ([[def-algebraic-closure]]). Hence $C_{\mathbb C}$ is the geometric fibre defining geometric integrality of $C$ over $\mathbb R$; for $C_{\mathbb C}$ over $\mathbb C$, take the algebraic closure to be $\mathbb C$ itself. The fibres are integral in the sense of [[def-geometrically-reduced-integral-connected-fibre]], giving the geometric-integrality assertions in [[def-algebraic-curve-over-field]] ([[def-geometric-fibre]], [[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]).

[F4] Scheme chain dimension: for $K\in\{\mathbb R,\mathbb C\}$, the three standard affine charts of $C_K$ have coordinate ring $A_K=K[u,v]/(1+u^2+v^2)$ ([[def-relative-projective-space-standard-charts]]). By [F3], $F$ is irreducible over $\mathbb C$ and therefore over $\mathbb R$; for either field $K$ its homogeneous ideal is prime by the UFD property of $K[x,y,z]$ ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]). Each chart ring is the degree-zero subring of the localization of this homogeneous domain at one coordinate, hence is a nonzero domain. The map $K[u]\to A_K$ is injective: if a nonzero $q(u)$ lay in $(1+u^2+v^2)$, then in $K[u][v]$ it would equal $(1+u^2+v^2)h$ for nonzero $h$, contradicting additivity of degree in $v$ ([[thm-polynomial-degree-of-a-product-over-a-domain]]). Thus $u$ is transcendental over $K$, while $v$ is algebraic over $K(u)$ by $v^2+u^2+1=0$; the transcendence-degree tower formula gives $\operatorname{trdeg}_K\operatorname{Frac}(A_K)=1$ ([[cor-transcendence-degree-tower-additivity]]). The affine-domain dimension theorem gives Krull dimension $\dim A_K=1$ ([[thm-affine-domain-dimension-transcendence-degree]]). The ring $A_K$ is Noetherian as a quotient of a finite-variable polynomial ring, so its spectrum is Noetherian ([[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]], [[thm-noetherian-ring-has-noetherian-spectrum]]). Every nonempty irreducible closed subset of this spectrum has a prime ideal as its unique generic point, and distinct primes have distinct closures; thus chains of nonempty irreducible closed subsets have exactly the lengths of chains of prime ideals. The chart's chain dimension is therefore its Krull dimension, one ([[thm-irreducible-closed-subsets-and-prime-ideals]], [[def-krull-dimension-of-a-ring]], [[def-dimension-noetherian-topological-space]]). Each of the three charts is Noetherian. A descending chain of closed subsets of $C_K$ stabilizes after restriction to each chart; since the cover is finite, the maximum of those three stabilization indices works on all of $C_K$. Thus $C_K$ is Noetherian, and the open-cover dimension lemma gives its chain dimension as the supremum of the three chart dimensions, namely one ([[lem-chain-dimension-open-cover]]).

[F5] Arithmetic genus: a curve $X=V_+(G)$ cut out by a nonzero homogeneous form of degree $d\ge1$ has $p_a(X)=\frac{(d-1)(d-2)}{2}$; for $d=2$ this is $0$, and for a smooth curve $p_a=g$ ([[thm-plane-curve-arithmetic-genus]], [[def-genus-euler-characteristic-curve]]).

[F6] Residue-field degrees: if $p$ is a closed point, an affine neighborhood $\operatorname{Spec}A$ of $p$ is of finite type over $\mathbb R$, and $p$ remains closed there, so $\kappa(p)=A/\mathfrak m_p$ is finite over $\mathbb R$ ([[def-algebraic-curve-over-field]], [[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]). The field $\mathbb R$ is perfect because it has characteristic zero ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]), so the finite extension $\kappa(p)/\mathbb R$ is separable ([[cor-algebraic-extensions-of-perfect-fields-are-separable]]) and simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]). If $\kappa(p)=\mathbb R(\alpha)$, the minimal polynomial of $\alpha$ is irreducible and has degree $[\kappa(p):\mathbb R]$ ([[thm-evaluation-kernel-and-minimal-polynomial]], [[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]); every irreducible real polynomial has degree $1$ or $2$ ([[cor-irreducible-real-polynomials-have-degree-one-or-two]]). If this degree were $1$, then $\kappa(p)=\mathbb R$ and the residue-field point would give an $\mathbb R$-morphism $\operatorname{Spec}\mathbb R\to C$ ([[lem-field-valued-points-of-schemes]]).

[F7] No real points and even divisor degrees: every real sum of squares $x^2+y^2+z^2$ vanishes only at the origin, so $C(\mathbb R)=\varnothing$. Therefore [F6] excludes residue degree $1$ for every closed point, and every closed point has residue degree $2$. A divisor is a finite signed combination $D=\sum_p n_p[p]$ of closed points and has degree $\deg_{\mathbb R}D=\sum_p n_p[\kappa(p):\mathbb R]$ ([[def-degree-divisor-proper-curve]], [[def-residue-field-scheme-point]]); hence $\deg_{\mathbb R}D=2\sum_pn_p$ is even.

[F8] The rational-point theorem: a smooth proper geometrically integral curve of genus $0$ over a field $K$ that admits a divisor of degree one (equivalently a $K$-rational closed point) is isomorphic to $\mathbb P^1_K$ ([[thm-genus-zero-point-implies-projective-line]]); and an isomorphism of $K$-schemes induces a bijection of $K$-rational points, while $\mathbb P^1_K$ has the $K$-point $[1:0]$.

[F9] The Axiom of Choice is assumed in the local-standard-smooth definition used in [F1], in the three properness results used in [F2], in the Noetherian-spectrum and irreducible-closed-subset correspondences used in [F4], and in the genus-zero rational-point theorem [F8]; the arithmetic-genus route in [F5] also inherits the properness suppliers. The factorisation, chart-dimension computations, and residue-field degree argument require no further choice principle, and the algebraic closure used here is the explicitly given $\mathbb C$ ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** verify by explicit computation that the real conic is a smooth proper geometrically integral genus-zero curve with no real point, acquire a complex point after base change, and compare $\mathbb R$-points to separate it from $\mathbb P^1_{\mathbb R}$.

1.1 The conic is a smooth proper geometrically integral curve. By [F1], for each $K=\mathbb R,\mathbb C$, the Jacobian row on each of the three charts has a unit entry in a neighborhood of every prime; the standard smooth presentation criterion gives smoothness at every point. In particular $C$ is smooth over $\mathbb R$. By [F2], $C$ is proper over $\mathbb R$; by [F3], the algebraic-closure fibre $C_{\mathbb C}$ is integral, so $C$ is geometrically integral over $\mathbb R$; and [F4] directly computes chain dimension one for both $C$ and $C_{\mathbb C}$. Therefore $C$ is a smooth proper geometrically integral curve over $\mathbb R$. [F1, F2, F3, F4]

1.2 No rational point, hence no degree-one divisor. Every real solution of $x^2+y^2+z^2=0$ is $(0,0,0)$, which is not a point of $\mathbb P^2_{\mathbb R}$, so $C(\mathbb R)=\varnothing$. By [F6] every closed point has residue degree either $1$ or $2$, and degree $1$ would give a real point; hence every closed point has degree $2$. For any signed divisor $D=\sum_p n_p[p]$, [F7] gives $\deg_{\mathbb R}D=2\sum_pn_p$, an even integer. Thus no divisor has degree one and the hypothesis of [F8] fails. [F6, F7]

2.1 Genus zero. Applying [F5] to the curve $C$ cut out by the degree-two form gives $p_a(C)=(2-1)(2-2)/2=0$, and since $C$ is smooth the arithmetic genus equals the genus, so $g(C)=0$. [F5, step 1.1]

3.1 The complex picture. Over $\mathbb C$ the point $[i:0:1]$ satisfies $i^2+0^2+1=0$, so $C_{\mathbb C}$ has a $\mathbb C$-rational point; by steps 1.1 and 2.1 applied over $\mathbb C$ (with [F1]–[F5] read over the algebraically closed field $\mathbb C$ of characteristic $0$), $C_{\mathbb C}$ is a smooth proper geometrically integral curve of genus $0$, and [F8] gives $C_{\mathbb C}\cong\mathbb P^1_{\mathbb C}$. [F1, F2, F3, F4, F5, F8, step 1.1, step 2.1]

4.1 The two curves are not isomorphic over $\mathbb R$. The line $\mathbb P^1_{\mathbb R}$ has the $\mathbb R$-rational point $[1:0]$, while $C$ has none by step 1.2; an $\mathbb R$-isomorphism would induce a bijection on $\mathbb R$-rational points (an isomorphism of functors of points), so $C\not\cong\mathbb P^1_{\mathbb R}$. Hence a genus-zero curve over a non-algebraically-closed field need not be a projective line, and the rational-point hypothesis of [F8] cannot be dropped; geometrically the conic is a projective line, so genus zero does not determine the curve arithmetically. The Axiom of Choice is inherited only through the suppliers of [F9]; nothing is selected. [F8, F9, step 1.2, step 3.1] ∎
