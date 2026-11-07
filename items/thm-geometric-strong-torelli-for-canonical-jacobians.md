---
dependency_level: 11
id: thm-geometric-strong-torelli-for-canonical-jacobians
kind: theorem
title: Strong geometric Torelli for canonical Jacobians in characteristic zero
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-jacobian-effective-loci-containment-and-intersection-identities
- thm-curves-function-fields-equivalence
- thm-artin-fixed-field-degree-theorem
- thm-riemann-hurwitz-complete
- thm-serre-duality-curves-line-bundles
- lem-degree-pullback-divisor-finite-morphism-curves
- thm-genus-zero-point-implies-projective-line
- thm-nonaffine-abelian-multiplication-finite-faithfully-flat
- cor-birational-smooth-proper-curves-isomorphic
- lem-faithfully-flat-effective-descent-of-modules-and-algebras
- thm-full-riemann-roch-divisor
- def-axiom-of-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: AC and DC are explicit inherited scheme, Picard, divisor, cohomology and
  duality hypotheses; no unqualified choice-scope conclusion is asserted.
sources:
  references:
  - title: J. S. Milne, Abelian Varieties, version2.00
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: ChapterIII §§6,12–13, printed105–107 and120–125; actual full relevant
      proof read; local theta uniqueness and multiplicity-degree closure are proved
      here.
---

## Statement

Assume AC and DC. Let $k$ be algebraically closed of characteristic zero, let $C,C'/k$ be smooth proper geometrically connected curves of genus $g\ge2$, choose $P\in C(k)$ and $P'\in C'(k)$, and let $u:C\to J_C$, $u':C'\to J_{C'}$ be their pointed Abel maps. If $\beta:(J_C,\lambda_C)\to(J_{C'},\lambda_{C'})$ is an isomorphism of their canonically principally polarized Jacobians, there are a curve isomorphism $\alpha:C\to C'$, a sign $\epsilon\in\{1,-1\}$ and $c\in J_{C'}(k)$ such that
$$u'\alpha=\epsilon\beta u+c.$$
If $C$ is not hyperelliptic, $\alpha$, $\epsilon$ and $c$ are unique. If $C$ is hyperelliptic, either sign may be prescribed and $\alpha,c$ are unique for the prescribed sign. Here hyperelliptic means admitting a degree-two morphism to $\mathbb P^1_k$. The selected curve isomorphism is independent of the geometric basepoints: select the unique sign in the nonhyperelliptic case, and the plus sign in the hyperelliptic case.

## Facts & Assumptions

**Given:** AC/DC, the characteristic-zero algebraically closed field and the polarized-Jacobian data in the Statement.

[A1] AC/DC are explicit inherited scheme, Picard, curve and cohomology hypotheses. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] For a pointed curve, reduced Abel loci $W^r$ satisfy the containment/intersection formulas, the canonical-complement reflection $\tau$, the all-noncontained degree-$g$ theta pullback and theta translation uniqueness. A theta bundle has degree $g$ on the Abel curve, and $[m]^*$ multiplies its degree on any mapped curve by $m^2$. The reflected theta bundle is $\mathcal O([-1]^*\Theta)$, never the inverse of $\mathcal O(\Theta)$. [[lem-jacobian-effective-loci-containment-and-intersection-identities]]

[F2] Smooth proper curve models and dominant maps correspond to their function fields over a perfect field. A birational map between smooth proper curves is an isomorphism. Nonconstant curve maps are finite flat and pullback multiplies line-bundle degree by the map degree. [[thm-curves-function-fields-equivalence]] [[cor-birational-smooth-proper-curves-isomorphic]] [[lem-degree-pullback-divisor-finite-morphism-curves]]

[F3] The algebraic separable Riemann–Hurwitz formula is $2g(C)-2=n(2g(D)-2)+\deg R$; genus-zero curves with a rational point are $\mathbb P^1$. [[thm-riemann-hurwitz-complete]] [[thm-genus-zero-point-implies-projective-line]]

[F4] Curve Serre duality pairs $H^1(\mathcal O_C)$ perfectly with regular differentials, with its natural residue-normalized trace. [[thm-serre-duality-curves-line-bundles]]

[F5] Multiplication by a nonzero integer on an abelian variety is finite faithfully flat. [[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]]

[F6] For a finite faithful automorphism group of a field, the fixed-field extension has that group order. Faithfully flat module descent identifies invariant sections of a descended module. [[thm-artin-fixed-field-degree-theorem]] [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[F7] Curve Riemann–Roch supplies rational functions with prescribed sufficiently large poles on a finite nonempty set. [[thm-full-riemann-roch-divisor]]

## Proof

**Proof technique:** reconstruct the Abel curve by theta incidence, close generic multiplicities by polarization degrees, and prove sign-sensitive uniqueness by finite curve quotients.

**Given:** The Statement data under [A1].

1.1 Transport $C'$ and its Abel map into $J=J_C$ by $v=\beta^{-1}u'$, writing $V^r$ for its Abel loci. By [F1] its theta locus is a translate of $\Theta=W^{g-1}$. The Abel maps are finite birational onto their reduced images: equality $[Q-P]=[Q'-P]$ for distinct points would give a degree-one rational function and identify the curve with $\mathbb P^1$, contradicting $g\ge2$. Properness and characteristic zero then identify each curve with the normalization of its image by [F2]. A common theta bundle pulls back to degree $g$ on each curve: the two polarization bundles differ only by an algebraically trivial bundle, as proved in [F1]. [A1, F1, F2, given, construct, algebra]

1.2 We record the finite quotient facts needed for uniqueness. If a finite group $H$ acts faithfully on a smooth proper curve, [F6] and [F2] construct its quotient as the smooth proper model of the fixed function field, with finite map of degree $|H|$. Locally this is $\operatorname{Spec}B\to\operatorname{Spec}B^H$ on invariant affine opens: choose a disjoint finite orbit $D$ and remove it. By [F7], for large $n$ the functions in $H^0(\mathcal O_C(nD))$ having pole order exactly $n$ at each point of $D$ form the complement of finitely many proper linear subspaces; the infinite field supplies such a function. Its finite map to $\mathbb P^1$ makes $C\setminus D$ the inverse image of the affine line, hence affine. This gives the required invariant affine neighborhood. Orbit polynomials make $B$ finite over $B^H$, and $B^H$ is normal. Distinct finite orbits are separated by the Chinese remainder theorem followed by averaging over $H$; hence geometric fibres are orbits. If the action is free, a fibre has $|H|$ distinct points; the finite flat curve map has length $|H|$, so it is étale. Regular differentials then descend by [F6]. For an involution at a fixed point, choose a uniformizer $z$ with $z\mapsto-z$ by replacing a parameter $t$ with $(t-\gamma t)/2$; a nonidentity order-two automorphism cannot have derivative one in characteristic zero, as its first higher nonzero power-series coefficient would double on squaring. The invariant ring is $k[[z^2]]$, and invariant regular differentials are precisely regular multiples of $d(z^2)$. Thus invariant differentials descend also for this tame quotient. [F2, F3, F6, F7, given, construct, algebra]

2.1 Choose the least $r\ge0$ such that $V^1$ is in a translate of $W^{r+1}$ or its reflection. Such $r\le g-2$ exists: adding a fixed effective degree-$g-2$ divisor on $C'$ puts $V^1$ in a translate of $V^{g-1}$, hence of $\Theta$. Replacing $v$ by $-v$ if needed, suppose $V^1\subset W^{r+1}_a$. If $r=0$, the two irreducible curves agree up to translation and [F2] gives the required curve isomorphism. Suppose $r>0$ and set $s=g-1-r$. [F1, F2, step 1.1, choose, algebra]

2.2 An automorphism $\gamma$ with $u\gamma=u+c$ is identity. Indeed translation by $c$ preserves $W^1$, hence translation by $(g-1)c$ preserves $\Theta$. Its principal Mumford map has trivial kernel, so $(g-1)c=0$. If $c$ has order $n$, generic injectivity of $u$ makes $\gamma$ have that same order; every nonidentity power acts without fixed points. Suppose $n>1$ and take its étale quotient $C\to D$ from step 1.2. It induces identity on $J$: translating every point of a degree-zero divisor adds total zero to its Abel class. The tangent of $\operatorname{Pic}^0(C)$ is $H^1(C,\mathcal O_C)$, directly because transition functions $1+\varepsilon f_{ij}$ are exactly additive Cech cocycles modulo coboundaries. Thus $\gamma$ acts identically on this space, and [F4] makes it act identically on regular differentials. Naturality of the trace follows also from invariance of residues under uniformizer changes. Step 1.2 gives $g(D)=g(C)$, whereas the étale case of [F3] gives $g(C)-1=n(g(D)-1)$. Since $g\ge2$, this forces $n=1$. If $c=0$ to start, generic injectivity already gives $\gamma=1$. [F1, F3, F4, step 1.1, step 1.2, algebra]

3.1 Fix $x\in W^1$. For generic $y\in W^s$, $V^1$ is not contained in $\Theta_{a+x-y}$: otherwise taking intersections over all $y$ and using [F1] gives $V^1\subset W^r_{a+x}$, contrary to minimality. The bad containment locus is closed, since the containment identity for the $V$-curve identifies it with a translate of $V^{g-2}$. Thus this is an actual nonempty open condition. [F1, step 2.1, algebra]

3.2 Two solutions with the same sign differ by an automorphism of the type in step 2.2, so their curve maps and constants agree. Two opposite-sign solutions give an automorphism with $u\gamma=-u+c$. Its square is of translation type, hence identity. It is nonidentity, since otherwise $2u$ would be constant, impossible by [F5]. It acts as minus identity on $J$, hence as minus identity on regular differentials by the tangent/duality argument. Its quotient therefore has genus zero by step 1.2, and [F3] identifies that quotient with $\mathbb P^1$ over the algebraically closed field. Thus opposite signs imply hyperellipticity. Conversely a degree-two map to $\mathbb P^1$ has an involution $\iota$, whose pairs $Q+\iota Q$ are linearly equivalent fibres; hence $u\iota=-u+\text{constant}$. Composing with it changes the sign, so either sign can be prescribed. The ratio of two such involutions is of translation type and is identity by step 2.2. This proves every claimed uniqueness and sign assertion. [F1, F2, F3, F4, F5, step 1.2, step 2.2, algebra]

4.1 The finite intersection $V^1\cap W^r_{a+x}$ has at most one point. Indeed containment of the whole curve would contradict minimality. If there were two distinct fixed points, for generic $y$ the unique degree-$g$ divisor cut on $C'$ by $\Theta_{a+x-y}$ would contain them both, by the last intersection formula of [F1]. Its Abel class would therefore lie in a fixed translate of $V^{g-2}$. The degree-$g$ class identity gives $-W^s\subset d+V^{g-2}$ for some $d$, first densely and then as a closed inclusion. Write $V^{g-1}=\Theta_c$. Since $V^{g-2}=\bigcap_{z\in V^1}(\Theta+c-z)$, this inclusion gives $V^1\subset d+c+\bigcap_{y\in W^s}(\Theta+y)=d+c+\tau(W^r)$. This again contradicts minimality, as $r>0$. [F1, step 2.1, step 3.1, algebra]

5.1 Choose $x_0,y$ satisfying step 3.1 and keep $y$ fixed. Noncontainment then holds for generic $x$. The set $S_y=W^{r+1}_a\cap\tau(W^{g-2}_{y-a})$ from [F1] does not contain $V^1$, because it lies in $\Theta_{a+x_0-y}$; hence $V^1\cap S_y$ is a fixed finite set. For generic $x$, the cut divisor $D'_x$ on $C'$ has support in this finite set plus at most one other point $Q(x)$, by step 4.1. That point must occur generically: otherwise only finitely many degree-$g$ effective divisors would be possible although their Abel classes $a+x-y+\text{constant}$ vary with $x$. [F1, step 3.1, step 4.1, choose, algebra]

6.1 The reduced incidence of $x$ with the unique point in $V^1\cap W^r_{a+x}$ is proper over the parameter curve and generically has one geometric point. Its unique dominating component is birational in characteristic zero. Normalizing therefore gives a rational map $\psi:C\dashrightarrow C'$, extending to a nonconstant curve morphism by [F2]. The generic multiplicity of $Q(x)$ in $D'_x$ is a fixed integer $m\ge1$; the residual effective divisor, supported on a fixed finite set and of degree at most $g$, is generically constant. This follows either from its finitely many possibilities and irreducibility of the parameter curve, or from the universal effective-divisor family: multiplicities at the fixed sections are generically constant. The class identity consequently gives $u=m v\psi+d$ for a constant $d\in J$, first generically and then as morphisms. [F1, F2, step 5.1, construct, algebra]

7.1 Let $e=\deg\psi\ge1$. For a common theta bundle $L$, [F1] gives $\deg u^*L=\deg v^*L=g$, translation preserves these degrees, and $\deg v^*[m]^*L=m^2g$. Pulling the equality in step 6.1 back on $L$ and using [F2] yields $g=m^2eg$. Thus $m=e=1$. By [F2] $\psi$ is an isomorphism. Undoing the initial reflection and the transport by $\beta$ gives $u'\alpha=\epsilon\beta u+c$. This also proves the genus-two case already settled at $r=0$, without treating a generic multiplicity as automatically one. [F1, F2, step 2.1, step 6.1, algebra]

8.1 Changing either basepoint translates its Abel map. It leaves the sign in the displayed identity unchanged and only alters the constant. Step 3.2 therefore makes the selected curve isomorphism independent of the basepoints: the sign is unique if nonhyperelliptic; in the hyperelliptic case prescribe plus. This finishes the stated geometric theorem at its explicit AC/DC scope. [F1, step 7.1, step 3.2, algebra] ∎

## Remarks

The quotient and genus argument uses the algebraic finite-map and Riemann–Hurwitz suppliers, not an analytic Riemann-surface theorem. No arithmetic polarization-orbit, relative Picard-over-DVR or Faltings input is used.
