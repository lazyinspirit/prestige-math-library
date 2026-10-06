---
id: lem-picard-group-of-a-point-blowup-of-the-projective-plane
kind: lemma
title: "The Picard group of a point blowup of the projective plane"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - cor-h0-projective-space-o-d-homogeneous-polynomials
  - cor-intermediate-cohomology-o-d-projective-space-vanishes
  - cor-multivariate-polynomial-ring-over-a-domain-is-a-domain
  - cor-top-cohomology-projective-space-o-d
  - def-axiom-of-choice
  - def-blowup-scheme-along-ideal
  - def-cartier-divisor
  - def-dimension-noetherian-topological-space
  - def-discrete-valuation
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-euler-characteristic-coherent-sheaf
  - def-exceptional-divisor-blowup
  - def-integral-scheme
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-factorial-scheme
  - def-order-codimension-one-rational-function
  - def-picard-group-scheme
  - def-principal-weil-divisor-and-class-group
  - def-projective-morphism-pre-proj
  - def-pullback-cartier-divisor
  - def-relative-projective-space-standard-charts
  - def-strict-transform-closed-subscheme
  - def-smooth-morphism-to-field-classical
  - def-unique-factorisation-domain
  - def-weil-divisor-normal-noetherian-scheme
  - lem-blowup-intersection-matrix-at-smooth-point
  - lem-blowup-isomorphism-off-center
  - lem-chain-dimension-open-cover
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-global-section-effective-divisor
  - lem-invertible-sheaf-dual-tensor-inverse
  - lem-pullback-cartier-divisor-line-bundle
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-cartier-weil-isomorphism-locally-factorial
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-projective-morphism-proper
  - thm-projective-space-as-proj
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Divisors, §§31.14-31.33 (Cartier and Weil divisors, class groups)"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X=\mathbb P^2_k$, let $p\in X(k)$ be a $k$-rational point, let
$\pi:X'=\operatorname{Bl}_pX\to X$ be the blowup
([[def-blowup-scheme-along-ideal]]) and let $E=\pi^{-1}(p)$ be the exceptional
curve ([[def-exceptional-divisor-blowup]]). Put
$\ell:=\pi^*\mathcal O_X(1)\in\operatorname{Pic}(X')$. Then
$\operatorname{Pic}(X')=\mathbb Z\ell\oplus\mathbb ZE$; moreover $X'$ is an
integral smooth projective surface over $k$ and
$\ell\cdot\ell=1$, $\ell\cdot E=0$, $E\cdot E=-1$
([[lem-blowup-intersection-matrix-at-smooth-point]]).

## Facts & Assumptions

**Given:** a field $k$, the projective plane $X=\mathbb P^2_k$ with its twisting sheaves $\mathcal O_X(d)$, a $k$-rational point $p\in X(k)$, the blowup $\pi:X'=\operatorname{Bl}_pX\to X$ with exceptional curve $E=\pi^{-1}(p)$, and the class $\ell=\pi^*\mathcal O_X(1)$.

[F1] The plane: $X$ is an integral regular projective surface over $k$ of pure dimension two. Its standard charts are the affine planes $\operatorname{Spec}k[y_1,y_2]$ with coordinate rings polynomial domains of dimension two and regular local rings, the charts are Noetherian and form a finite cover, and $X$ is projective over $k$ hence proper ([[thm-projective-space-as-proj]], [[def-relative-projective-space-standard-charts]], [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]], [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]], [[lem-chain-dimension-open-cover]], [[thm-localisation-and-polynomial-extension-of-regular-rings]], [[def-integral-scheme]], [[def-divisor-intersection-number-on-smooth-projective-surface]], [[def-projective-morphism-pre-proj]], [[thm-projective-morphism-proper]]). As a smooth finite-type $k$-scheme, $X$ is locally factorial ([[thm-nonaffine-regular-local-ring-is-ufd]], [[def-locally-factorial-scheme]]).

[F2] Blowup calculus at a $k$-rational point: the residue degree is $r=[\kappa(p):k]=1$; $X'$ is an integral regular projective surface over $k$; $E$ is an effective Cartier divisor with $E\cong\mathbb P^1_k$ and $\mathcal O_E(E)\cong\mathcal O_{\mathbb P^1_k}(-1)$, so $E\cdot E=-r=-1$; and for all Cartier divisors $D,D'$ on $X$ one has $E\cdot\pi^*D=0$ and $\pi^*D\cdot\pi^*D'=D\cdot D'$ ([[lem-blowup-intersection-matrix-at-smooth-point]], [[def-exceptional-divisor-blowup]], [[def-divisor-intersection-number-on-smooth-projective-surface]]).

[F3] Cohomology of twists on the plane: $H^0(X,\mathcal O_X(m))$ is the degree-$m$ part of $k[x_0,x_1,x_2]$ for $m\ge0$ and vanishes for $m<0$; $H^1(X,\mathcal O_X(m))=0$ for every $m$; $H^2(X,\mathcal O_X(m))=0$ for $m>-3$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]], [[cor-intermediate-cohomology-o-d-projective-space-vanishes]], [[cor-top-cohomology-projective-space-o-d]]). Hence $\chi(X,\mathcal O_X)=1$, $\chi(X,\mathcal O_X(-1))=0$ and $\chi(X,\mathcal O_X(-2))=0$ ([[def-euler-characteristic-coherent-sheaf]]).

[F4] Lines are effective Cartier divisors with associated sheaf $\mathcal O_X(1)$: a nonzero linear form is a global section of $\mathcal O_X(1)$ ([[cor-h0-projective-space-o-d-homogeneous-polynomials]]), it is regular on the integral scheme $X$, and its zero scheme is an effective Cartier divisor $L$ with $\mathcal O_X(L)\cong\mathcal O_X(1)$ ([[lem-global-section-effective-divisor]], [[def-invertible-sheaf-of-cartier-divisor]]).

[F5] Total transform: for a reduced effective Cartier divisor $C$ on the regular surface $X$ with a closed point $p$ at which the multiplicity $m=\operatorname{mult}_p(C)$ is finite and positive, $\pi^*C=C'+mE$ as effective Cartier divisors, where $C'$ is the strict transform ([[lem-total-transform-strict-plus-exceptional-multiplicity]], [[def-strict-transform-closed-subscheme]]); passage to associated invertible sheaves uses $\mathcal O_{X'}(\pi^*C)\cong\pi^*\mathcal O_X(C)$ ([[lem-pullback-cartier-divisor-line-bundle]], [[def-pullback-cartier-divisor]]).

[F6] Divisors and classes: a Weil divisor on a Noetherian normal scheme is a finite integral combination of prime divisors, the principal Weil divisor of $f\in K(X)^\times$ is $\operatorname{div}_W(f)=\sum_Z\operatorname{ord}_Z(f)[Z]$, and $\operatorname{Cl}$ is the quotient by principal divisors ([[def-weil-divisor-normal-noetherian-scheme]], [[def-principal-weil-divisor-and-class-group]], [[def-order-codimension-one-rational-function]]). The order along a prime divisor with generic point $\xi$ is the valuation of the discrete valuation ring $\mathcal O_{X,\xi}$, which is a DVR because $X$ is normal and Noetherian ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]], [[def-discrete-valuation]]); orders are additive, vanish on units, and a uniformiser has order one.

[F7] On a locally factorial Noetherian integral scheme, Cartier and Weil divisors agree compatibly with principal divisors, and the canonical map $\operatorname{Pic}(X)\to\operatorname{Cl}(X)$ carrying $[\mathcal O_X(D)]$ to the class of the associated Weil divisor is an isomorphism ([[thm-cartier-weil-isomorphism-locally-factorial]]); the map $D\mapsto[\mathcal O_X(D)]$ induces an isomorphism $\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)\xrightarrow{\sim}\operatorname{Pic}(X)$ ([[thm-cartier-divisors-mod-principal-to-picard]], [[def-invertible-sheaf-of-cartier-divisor]]).

[F8] Off the centre: $\pi$ restricts to an isomorphism $\pi^{-1}(X\setminus\{p\})\to X\setminus\{p\}$ ([[lem-blowup-isomorphism-off-center]]), and $\pi^{-1}(X\setminus\{p\})=X'\setminus E$ ([[def-exceptional-divisor-blowup]]). For a reduced effective Cartier divisor $L$ through $p$ with strict transform $m$, this identifies $m\setminus E$ with $L\setminus\{p\}$ ([[def-strict-transform-closed-subscheme]]).

[F9] Standard charts: after a linear change of homogeneous coordinates taking the line $L$ to $V(x_0)$, $X\setminus L$ is the affine chart $U_0=\operatorname{Spec}k[x_1/x_0,x_2/x_0]\cong\mathbb A^2$, a polynomial domain over $k$ ([[def-relative-projective-space-standard-charts]], [[thm-projective-space-as-proj]], [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]).

[F10] In a polynomial ring $k[y_1,y_2]$ every height-one prime is principal, generated by an irreducible element, and every irreducible element is prime ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[def-unique-factorisation-domain]]). Consequently every Weil divisor on $\operatorname{Spec}k[y_1,y_2]$ is principal: a prime divisor is $V(g)$ for an irreducible $g$, and for a finite combination $\sum_in_i[V(g_i)]$ the rational function $\prod_ig_i^{n_i}$ has divisor $\sum_in_i[V(g_i)]$, because each $g_i$ has order one along $V(g_i)$ and order zero along the other $V(g_j)$ by [F6], [F10].

[F11] Excision for class groups: if $Z$ is a prime divisor on an integral Noetherian normal scheme $X$ with $U=X\setminus Z$, restriction of Weil divisors (closure in $X$ of each prime divisor of $U$) is surjective with kernel $\mathbb Z[Z]$, and principal divisors restrict to principal divisors; hence the induced map $\operatorname{Cl}(X)\to\operatorname{Cl}(U)$ is surjective and its kernel is the image of $\mathbb Z[Z]$ ([[def-weil-divisor-normal-noetherian-scheme]], [[def-principal-weil-divisor-and-class-group]], [[def-order-codimension-one-rational-function]]). The same statement holds with $Z$ replaced by a union of finitely many prime divisors, with kernel the direct sum of their classes. To verify the class-group kernel, a prime divisor meeting $U$ has the same codimension-one local ring at its generic point on $U$ and on the whole scheme, so restriction preserves its valuation and the divisor of every rational function. Prime divisors of $U$ extend by closure, proving surjectivity. If a divisor restricts to $\operatorname{div}_U(f)$, use the same $f$ in the common function field and subtract its divisor on the whole scheme; the difference is supported on the removed prime divisors. Conversely those boundary divisors restrict to zero. This proves the asserted exactness.

[F12] Intersection numbers depend only on the linear equivalence classes ([[def-divisor-intersection-number-on-smooth-projective-surface]], [[thm-surface-intersection-product-bilinear-and-symmetric]], [[def-cartier-divisor]]); in particular a Cartier divisor linearly equivalent to $0$ has zero intersection with every Cartier divisor.

[F13] A nonzero global section of an invertible sheaf on the integral scheme $X$ is regular with effective Cartier zero scheme ([[lem-global-section-effective-divisor]]); duals and tensor products of invertible sheaves are invertible and $\mathcal L^\vee\otimes\mathcal L\cong\mathcal O_X$ ([[lem-invertible-sheaf-dual-tensor-inverse]], [[def-invertible-sheaf]]).

[F14] The Axiom of Choice is inherited from the projective-space, blowup and divisor-class suppliers above; all selections below are finite (a line, a point, finitely many prime divisors).



## Proof
**Proof technique:** direct: establish the surface and intersection data of the blowup, reduce $\operatorname{Pic}$ to the class group, exhibit an affine plane as the complement of the two curves $E$ and $m$, and use the excision sequence for class groups and the intersection matrix for injectivity.

1.1 Surface properties and intersection numbers of $X'$. Since $p$ is $k$-rational, $r=1$, and [F2] gives: $X'$ is an integral regular projective surface over $k$, $E$ is an effective Cartier divisor with $E\cong\mathbb P^1_k$ and $E\cdot E=-1$, and $\pi^*D\cdot\pi^*D'=D\cdot D'$, $E\cdot\pi^*D=0$ for all Cartier divisors $D,D'$ on $X$. The intersection product on $X$ is defined because $X$ is an integral regular projective surface [F1], so for $D=D'$ a line on $X$ with class $\mathcal O_X(1)$ this gives $\ell\cdot E=0$ and $\ell\cdot\ell=\mathcal O_X(1)\cdot\mathcal O_X(1)$. [F2, F1, F4]

2.1 Smoothness over $k$. A change of homogeneous coordinates over $k$ takes the rational point $p$ to $[1:0:0]$. On the chart $x_0\ne0$ put $u=x_1/x_0$, $v=x_2/x_0$, so the point ideal is $(u,v)$. From the Rees construction of the blowup, the degree-zero rings on the two standard Proj opens are $k[u,v,v/u]=k[u,t]$ with $v=ut$, and $k[u,v,u/v]=k[s,v]$ with $u=sv$; these identifications follow inside $k(u,v)$, where $u,v/u$ and $u/v,v$ are algebraically independent. These two affine planes cover the inverse image of this chart. Outside $p$, [F8] identifies the blowup with the plane; the two other standard plane charts cover that complement together with the preceding opens. After every field extension $K/k$ this same cover has polynomial coordinate rings $K[u,t]$, $K[s,v]$ and the two polynomial plane rings, whose localizations are regular by [[thm-localisation-and-polynomial-extension-of-regular-rings]]. Thus the blowup is geometrically regular, hence smooth over $k$ ([[def-smooth-morphism-to-field-classical]]). [F8, F1, step 1.1]

2.2 Computation of $\ell^2$. By [F4] a line $L$ on $X$ is an effective Cartier divisor with $\mathcal O_X(L)\cong\mathcal O_X(1)$, so the defining alternating sum gives $$\mathcal O_X(1)\cdot\mathcal O_X(1)=\chi(X,\mathcal O_X)-2\chi(X,\mathcal O_X(-1))+\chi(X,\mathcal O_X(-2))=1-0+0=1,$$ using the twisting dictionary $\mathcal O_X(1)^\vee\cong\mathcal O_X(-1)$, $\mathcal O_X(1)^{\vee\otimes2}\cong\mathcal O_X(-2)$ ([[lem-invertible-sheaf-dual-tensor-inverse]], [F13]) and [F3]. Hence $\ell\cdot\ell=1$ by step 1.1. [F4, F13, F3, step 1.1]

2.3 Picard and class group of $X'$. The surface $X'$ is integral and regular by step 1.1, hence locally factorial ([[thm-nonaffine-regular-local-ring-is-ufd]], [[def-locally-factorial-scheme]]) and Noetherian, so [F7] applies: the canonical map $\operatorname{Pic}(X')\to\operatorname{Cl}(X')$ is an isomorphism, and in particular every invertible sheaf is $\mathcal O_{X'}(D)$ for a Cartier divisor $D$, whose class under the isomorphism is the class of the associated Weil divisor. [F7, step 1.1]

2.4 The strict transform of a line through $p$. Let $L$ be a line through $p$ and let $m$ be its strict transform. The line is reduced (it is isomorphic to $\mathbb P^1_k$) and its multiplicity at the smooth point $p$ is one, so [F5] gives $\pi^*L=m+E$ as effective Cartier divisors; passing to associated invertible sheaves and using $\mathcal O_X(L)\cong\mathcal O_X(1)$ yields $[m]+[E]=\ell$ in $\operatorname{Pic}(X')$. The strict transform $m$ is integral: it is the scheme-theoretic closure of the integral curve $L\setminus\{p\}$ under the isomorphism [F8]; on each affine chart meeting this curve its closure ring embeds in the curve's function field and is therefore a domain. Its support is the irreducible closure of that curve. Thus $m$ is integral and a nonzero effective Cartier divisor, so it is a prime divisor of $X'$ ([[def-effective-cartier-divisor]], [[def-weil-divisor-normal-noetherian-scheme]]). [F5, F4, step 1.1]

3.1 Injectivity of the parametrisation. Let $a,b\in\mathbb Z$ with $\mathcal O_{X'}(a\ell+bE)\cong\mathcal O_{X'}$. Then $a\ell+bE$ is linearly equivalent to $0$, so by [F12] its intersection with every Cartier divisor vanishes; intersecting with $\ell$ and with $E$ and using symmetry gives $$0=(a\ell+bE)\cdot\ell=a(\ell\cdot\ell)+b(E\cdot\ell)=a,\qquad 0=(a\ell+bE)\cdot E=a(\ell\cdot E)+b(E\cdot E)=-b,$$ since $\ell\cdot\ell=1$, $\ell\cdot E=0$ and $E\cdot E=-1$ by steps 1.1 and 2.2. Hence $a=b=0$. [F12, step 1.1, step 2.2]

3.2 The complement of $E$ and $m$ is an affine plane. By [F8], $X'\setminus E\cong X\setminus\{p\}$ under $\pi$, and this isomorphism carries $m\setminus E$ onto $L\setminus\{p\}$. Hence $X'\setminus(E\cup m)\cong X\setminus L$, and by [F9] the latter is the affine chart $U_0\cong\mathbb A^2=\operatorname{Spec}k[y_1,y_2]$. [F8, F9, step 2.4]

4.1 The class group of the complement vanishes. Since $U\cong\operatorname{Spec}k[y_1,y_2]$ is the spectrum of a polynomial ring over a field, every height-one prime is principal; by [F10] every Weil divisor on $U$ is a principal divisor, so $\operatorname{Cl}(U)=0$ and (by [F7] applied to the locally factorial $U$, or directly) $\operatorname{Pic}(U)=0$. [F10, F7, F6, step 3.2]

5.1 Excision: $\operatorname{Pic}(X')$ is generated by $E$ and $m$. The complement of $E\cup m$ in $X'$ is $U$ by step 3.2, and $E,m$ are the only prime divisors of $X'$ contained in $E\cup m$ (they are irreducible curves and distinct, by step 2.4). Applying the excision statement [F11] with the union of the two prime divisors $E,m$ gives an exact sequence $$\mathbb Z[E]\oplus\mathbb Z[m]\longrightarrow\operatorname{Cl}(X')\longrightarrow\operatorname{Cl}(U)\longrightarrow0.$$ By step 4.1 the group $\operatorname{Cl}(U)$ vanishes, so $\operatorname{Cl}(X')$ is generated by the classes of $E$ and $m$. Transporting along the isomorphism $\operatorname{Pic}(X')\cong\operatorname{Cl}(X')$ of step 2.3 and using $[m]=\ell-[E]$ from step 2.4, the classes of $E$ and $\ell$ generate $\operatorname{Pic}(X')$. [F11, step 2.4, step 2.3, step 3.2, step 4.1]

6.1 Conclusion. Steps 5.1 and 3.1 show that $\mathbb Z^2\to\operatorname{Pic}(X')$, $(a,b)\mapsto a\ell+bE$, is surjective and injective, an isomorphism; with the surface properties and intersection numbers of steps 1.1, 2.1, 2.2 and 2.4 this is the stated claim. The Axiom of Choice is inherited from the suppliers recorded in [F14]; the constructions use one line, one point and finitely many prime divisors. [F14, step 1.1, step 2.1, step 2.2, step 2.4, step 5.1, step 3.1] ∎

