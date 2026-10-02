---
id: ex-cartier-divisor-hyperplane-projective-space
kind: example
title: "A hyperplane in projective space is effective Cartier with O(H) = O(1)"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - thm-projective-space-as-proj
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-twisting-sheaf-invertible-standard-graded
  - def-twisting-sheaf-proj
  - thm-proj-structure-sheaf-scheme
  - def-standard-open-proj
  - def-relative-projective-space-standard-charts
  - def-sheaf-on-topological-space
  - def-sheaf-total-quotient-rings
  - def-effective-cartier-divisor
  - lem-finite-variable-polynomial-rings-over-fields-are-ufds
  - lem-global-section-effective-divisor
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.15 (Definition 15.1, Lemma 15.2 and Remark 15.11; regular sections of invertible sheaves and effective Cartier divisors)"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "The Stacks Project, Constructions of Schemes, §27.8 (Tag 01M3, standard opens of Proj) and §27.10 (Tag 01MM, twisting sheaves)"
      url: "https://stacks.math.columbia.edu/download/constructions.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1-15.3 (invertible sheaves, regular sections and effective Cartier divisors) and Ch. 4.5 (Proj and its standard charts)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Example

Assume the Axiom of Choice, inherited from the Proj and twisting-sheaf
constructions ([[def-axiom-of-choice]],
[[thm-projective-space-as-proj]],
[[thm-twisting-sheaf-invertible-standard-graded]]). Let $k$ be a field, let
$n\ge1$, and let $H=\{x_0=0\}\subseteq\mathbb P^n_k$ be the hyperplane cut out
by the first coordinate. Then $H$ is an effective Cartier divisor on
$\mathbb P^n_k$, and there is an isomorphism of invertible sheaves
$$\mathcal O_{\mathbb P^n_k}(H)\;\cong\;\mathcal O_{\mathbb P^n_k}(1).$$
The verification uses the canonical identification
$\mathbb P^n_k\cong\operatorname{Proj}k[x_0,\dots,x_n]$ of
[[thm-projective-space-as-proj]], and it writes $\mathcal O_{\mathbb P^n_k}(d)$
for the twisting sheaf of that Proj, so that $x_0$ is a global section of
$\mathcal O_{\mathbb P^n_k}(1)$.

## Facts & Assumptions

**Given:** a field $k$, an integer $n\ge1$, the polynomial ring
$S=k[x_0,\dots,x_n]$ graded by total degree with $\deg x_i=1$, the scheme
$X=\operatorname{Proj}S$ with its twisting sheaf $\mathcal O_X(1)$, and the
closed subscheme $H=\{x_0=0\}=V_+(x_0)$ of the projective space
$\mathbb P^n_k$.

[F1] The Axiom of Choice is the statement that every family of nonempty sets
has a choice function ([[def-axiom-of-choice]]).

[F2] For a commutative ring $A$ and $n\ge0$ there is a canonical isomorphism
of $\operatorname{Spec}A$-schemes
$\operatorname{Proj}A[x_0,\dots,x_n]\cong\mathbb P^n_A$ carrying the standard
chart $D_+(x_i)$ to the standard chart $U_i$ and the coordinate $x_\ell/x_i$ to
$x^{(i)}_\ell$; it is natural in $A$, and for $n=0$ both sides are
$\operatorname{Spec}A$. Its proof assumes the Axiom of Choice, inherited from
the affine-scheme construction ([[thm-projective-space-as-proj]]).

[F3] For a field $k$ and $n\ge0$, with $S=k[x_0,\dots,x_n]$ standard graded,
the chart of $\operatorname{Proj}S$ at $x_i$ is
$D_+(x_i)=\operatorname{Spec}k[x_\ell/x_i:\ell\ne i]$ in the coordinates
$x^{(i)}_\ell=x_\ell/x_i$ of the standard charts $U_i$ of
$\mathbb P^n_k$, and the overlap identifications are the transition formulas
$x^{(i)}_a\mapsto x^{(j)}_a/x^{(j)}_i$ of those charts; the identification
$\operatorname{Proj}S=\mathbb P^n_k$ is the canonical one
([[thm-projective-space-as-proj]],
[[def-relative-projective-space-standard-charts]]).

[F4] Let $k$ be a field, $n\ge0$ and $0\ne F\in k[x_0,\dots,x_n]$ homogeneous
of degree $e\ge1$. The theorem on closed subschemes cut out by homogeneous
ideals identifies $V_+(F)=\operatorname{Proj}(k[x_0,\dots,x_n]/(F))$ with a
closed subscheme of $\mathbb P^n_k$ and gives its standard-chart ring as
$B_{(x_i)}/(F)_{(x_i)}$, where $B=k[x_0,\dots,x_n]$; in the standard chart
$B_{(x_i)}=k[x_a/x_i:a\ne i]$, and the degree-zero localized ideal is
$(F/x_i^e)$. Thus the chart ring is
$k[x_a/x_i:a\ne i]/(F/x_i^e)$, so these charts cover $V_+(F)$
([[thm-closed-subschemes-projective-space-homogeneous-ideals]]).

[F5] If $S$ is a commutative nonnegatively graded ring generated as an
$S_0$-algebra by $S_1$ and $X=\operatorname{Proj}S$, then every twisting sheaf
$\mathcal O_X(n)$ is invertible and the multiplication maps
$\mathcal O_X(m)\otimes\mathcal O_X(n)\to\mathcal O_X(m+n)$ are isomorphisms;
the proof assumes the Axiom of Choice, inherited from the Proj sheaf
construction ([[thm-twisting-sheaf-invertible-standard-graded]]).

[F6] $\mathcal O_X(n)=\widetilde{S(n)}$ is the associated sheaf of the shifted
graded module $S(n)$, so that for a homogeneous $f\in S_+$ of positive degree
one has $\Gamma(D_+(f),\mathcal O_X(n))=S(n)_{(f)}$, the degree-zero part of
the homogeneous localisation $S(n)[f^{-1}]$, and $\mathcal O_X(0)=\mathcal
O_X$; no invertibility is asserted by the definition itself
([[def-twisting-sheaf-proj]]).

[F7] There is a scheme $\operatorname{Proj}S$ whose charts
$D_+(f)\cong\operatorname{Spec}S_{(f)}$ for homogeneous $f\in S_+$ form an
affine open cover, compatibly with the standard-open basis
([[thm-proj-structure-sheaf-scheme]], [[def-standard-open-proj]]).

[F8] The standard opens satisfy
$D_+(f)=\{\mathfrak p\in\operatorname{Proj}S:f\notin\mathfrak p\}$ and
$D_+(f)\cap D_+(g)=D_+(fg)$ for homogeneous $f,g\in S_+$
([[def-standard-open-proj]]).

[F9] Sections of a sheaf on the members of an open cover that agree on
overlaps glue to a unique global section
([[def-sheaf-on-topological-space]]).

[F10] A section of $\mathcal O_X$ over $U$ is **regular** when multiplication
by each of its germs is injective on the corresponding local ring; the regular
sections form the multiplicative set $S_X(U)$ used to build the sheaf
$\mathcal K_X$ of meromorphic functions
([[def-sheaf-total-quotient-rings]]).

[F11] For a field $k$ and $r\ge0$ the polynomial ring $k[x_1,\dots,x_r]$ is a
unique factorisation domain, hence an integral domain
([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]).

[F12] Let $X$ be a scheme, $\mathcal L$ an invertible $\mathcal O_X$-module and
$s\in\Gamma(X,\mathcal L)$ a regular global section, with generators $e_i$ of
$\mathcal L$ on an open cover $\{U_i\}$ and coefficients $f_i$ defined by
$s|_{U_i}=f_ie_i$. Then the coefficients are regular sections of
$\mathcal O_{U_i}$, their ratios are units on overlaps, they glue to an
effective Cartier divisor $D$ with local-equation datum $\{(U_i,f_i)\}$, there
is a canonical isomorphism $\varphi:\mathcal O_X(D)\to\mathcal L$ with
$\varphi(1_D)=s$, and the ideal sheaf of the vanishing subscheme $Z_D$
satisfies $I_D|_{U_i}=f_i\mathcal O_{U_i}$
([[lem-global-section-effective-divisor]]).

[F13] An effective Cartier divisor on $X$ is a Cartier divisor admitting a
local-equation datum $\{(U_i,f_i)\}$ with $f_i\in\mathcal O_X(U_i)$ regular;
such a divisor has a vanishing subscheme whose ideal sheaf is locally
$(f_i)$, and the unit equation $1$ gives the empty effective divisor
([[def-effective-cartier-divisor]]).

## Verification

**Proof technique:** exhibit the coordinate $x_0$ as a regular global section
of the invertible twisting sheaf $\mathcal O_X(1)$ on
$X=\operatorname{Proj}k[x_0,\dots,x_n]$, let the regular-section lemma turn it
into an effective Cartier divisor with local equations $x_0/x_i$, and identify
the vanishing subscheme with the hyperplane $\{x_0=0\}$ under the canonical
isomorphism $\mathbb P^n_k\cong X$.

1.1 **Setup and the standard cover.** The ring $S=k[x_0,\dots,x_n]$ is standard graded with $S_0=k$ and generated as an $S_0$-algebra by $S_1=\langle x_0,\dots,x_n\rangle_k$, so by [F5] the twisting sheaf $\mathcal O_X(1)$ on $X=\operatorname{Proj}S$ is invertible. The standard opens $D_+(x_i)$ cover $X$: by [F7] the opens $D_+(f)$ with $f\in S_+$ homogeneous cover $X$, and if $\mathfrak p\in D_+(f)$ then some monomial of $f\notin\mathfrak p$, hence some $x_i\notin\mathfrak p$ and $\mathfrak p\in D_+(x_i)$; moreover $D_+(x_i)\cap D_+(x_j)=D_+(x_ix_j)$ by [F8], and by [F3] the chart $D_+(x_i)$ has coordinate ring $S_{(x_i)}=k[x_\ell/x_i:\ell\ne i]$ and is the $i$-th standard chart $U_i$ of $\mathbb P^n_k$ under the canonical isomorphism of [F2]. The Axiom of Choice is used only through [F2] and [F5], which assume it. [F1, F2, F3, F5, F7, F8]

1.2 **The hyperplane $H=\{x_0=0\}$.** Applying [F4] to the homogeneous polynomial $F=x_0$ of degree $1$ exhibits $H=V_+(x_0)=\{x_0=0\}\subseteq\mathbb P^n_k$ as the closed subscheme cut out by $x_0$, with chart $D_+(x_i)\cap H$ equal to $\operatorname{Spec}k[x_a/x_i:a\ne i]/(x_0/x_i)$ for $i\ne0$, and empty for $i=0$ because then $F/x_0=1$; in particular the ideal sheaf of $H$ is generated on $U_i=D_+(x_i)$ by $x_0/x_i$ for $i\ne0$ and by $1$ for $i=0$. [F3, F4, F13]

1.3 **The global section $x_0$.** For every $i$ the element $x_0/1$ lies in $S(1)_{(x_i)}=\Gamma(D_+(x_i),\mathcal O_X(1))$ by [F6]; on the overlap $D_+(x_i)\cap D_+(x_j)=D_+(x_ix_j)$ the restrictions of $x_0/1$ from the $i$-th and $j$-th charts are both the image of $x_0\in S(1)$ under the localisation map to $S(1)_{(x_ix_j)}$, so they agree, and by [F9] the local sections glue to a unique global section $s\in\Gamma(X,\mathcal O_X(1))$. [F6, F8, F9]

2.1 **Generators and coefficients.** Fix $i$. Every element of $S(1)_{(x_i)}$ is a finite sum of terms $a/x_i^m$ with $a\in S(1)_m=S_{m+1}$, and $a/x_i^m=(a/x_i^{m+1})x_i$ with $a/x_i^{m+1}\in S_{(x_i)}$; hence $x_i$ freely generates the $S_{(x_i)}$-module $S(1)_{(x_i)}$, i.e. $\mathcal O_X(1)|_{D_+(x_i)}$ is freely generated by $x_i$; in this trivialisation the global section $s$ of step 1.3 has coefficient $x_0/x_i\in S_{(x_i)}$, because $s|_{D_+(x_i)}=x_0/1=(x_0/x_i)x_i$. [F6, step 1.3]

3.1 **The coefficients are regular.** By [F3] the coefficient ring is the polynomial ring $S_{(x_i)}=k[x_\ell/x_i:\ell\ne i]$ in $n$ variables over the field $k$, hence a unique factorisation domain and in particular an integral domain by [F11]. For $i=0$ the coefficient is $x_0/x_0=1$, a unit and so a regular section; for $i\ne0$ the coefficient $x_0/x_i$ is a nonzero element of this domain. A localisation of an integral domain is an integral domain, by the explicit computation in the localisation: if $(a/s)(b/t)=0$ then $uab=0$ for some $u$ in the multiplicative set, so $a=0$ or $b=0$; hence multiplication by the germ of $x_0/x_i$ at every prime is injective. By the definition of regularity in [F10] every coefficient is therefore a regular section, and so $s$ is a regular global section of the invertible sheaf $\mathcal O_X(1)$ by [F12]. [F3, F10, F11, F12, step 2.1, algebra]

4.1 **The effective Cartier divisor of $x_0$.** Apply [F12] to the regular global section $s$ of the invertible sheaf $\mathcal O_X(1)$ and the cover $\{D_+(x_i)\}_{i=0}^n$ with generators $x_i$ and coefficients $x_0/x_i$: the divisor $D:=\operatorname{div}(s)$ is an effective Cartier divisor on $X$ with local-equation datum $\{(D_+(x_i),x_0/x_i)\}$, its vanishing subscheme $Z_D$ has ideal sheaf generated by $x_0/x_i$ on $D_+(x_i)$, and there is a canonical isomorphism $\mathcal O_X(D)\to\mathcal O_X(1)$ carrying the canonical section $1_D$ to $s$. [F12, F13, step 3.1]

5.1 **Conclusion for the hyperplane.** On the chart $D_+(x_i)$, identified with the standard chart $U_i\subseteq\mathbb P^n_k$ by [F2] and [F3], the divisor $Z_D$ is cut out by the same equation $x_0/x_i$ (and by the unit $1$ on $U_0$) as the hyperplane $H$ of step 1.2; hence the canonical isomorphism carries $Z_D$ to $H$, so $H$ is an effective Cartier divisor on $\mathbb P^n_k$, and transporting the isomorphism of step 4.1 gives $\mathcal O_{\mathbb P^n_k}(H)\cong\mathcal O_{\mathbb P^n_k}(1)$. [F2, F3, F13, step 1.2, step 4.1] ∎

The case $n=1$ is the familiar statement that a $k$-rational point of
$\mathbb P^1_k$ is an effective Cartier divisor of degree one with associated
sheaf $\mathcal O(1)$; the computation above is independent of the base field,
of the characteristic and of any choice of $k$-rational point, since the
sections $x_0/x_i$ are regular for every field $k$. For $n=0$ the same
computation would give the empty divisor, which is why the statement assumes
$n\ge1$; the Axiom of Choice is inherited from the two Proj suppliers and no
further selection is made.
