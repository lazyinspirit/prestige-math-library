---
id: lem-exceptional-curve-normal-bundle-minus-one
kind: lemma
title: "The normal bundle of the exceptional curve is O(-1)"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-exceptional-divisor-smooth-center-normal-bundle
  - thm-blowup-smooth-surface-point-charts
  - thm-blowup-regular-surface-closed-point-regular
  - def-projective-bundle-scheme
  - lem-uniqueness-of-twists-on-the-projective-line
  - def-twisting-sheaf-proj
  - thm-pullback-center-ideal-invertible
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.3.5 normal bundles to exceptional divisors, p. 387, and Exercise 19.3.A, p. 388"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.4(3) O_{X'}(-1)=O_{X'}(E)"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $p$ be a closed point of a regular surface $S$
over a field $k$, let $\pi\colon S'\to S$ be the blowup of $p$ and $E$ its
exceptional curve. Then $E$ is isomorphic to the projective line over
$\kappa(p)$, and the restriction to $E$ of the invertible sheaf
$\mathcal O_{S'}(E)$ is the dual tautological bundle
$\mathcal O_{\mathbb P^1_{\kappa(p)}}(-1)$; equivalently
$\mathcal O_E(E)$ has degree $-1$ and $\mathcal O_E(-E)=\mathcal O(1)$ has
degree $1$. For $p$ $k$-rational,
$\mathcal O_E(E)=\mathcal O_{\mathbb P^1_k}(-1)$ and this twist index is an
isomorphism invariant of $E$.

## Facts & Assumptions

**Given:** A regular surface $S$ over $k$, a closed point $p\in S$, the blowup
$\pi\colon S'\to S$ of $p$ with exceptional curve $E$ and $A=\mathcal O_{S,p}$.

[A1] **Choice.** The Axiom of Choice is assumed, as in the statement; the
cited suppliers used below are stated under it ([[def-axiom-of-choice]]).

[F1] [[cor-exceptional-divisor-smooth-center-normal-bundle]]: For a closed
point $p$ of a regular surface $S$ over a field $k$, the conormal sheaf
$\mathcal I/\mathcal I^2=\mathfrak m_p/\mathfrak m_p^2$ is free of rank two
over $\kappa(p)$ and the exceptional divisor is isomorphic to the projective
line $\mathbb P^1_{\kappa(p)}$ over $\kappa(p)$; the corollary identifies it
with the projective bundle $\mathbb P_Z(\mathcal I/\mathcal I^2)$ in the
quotient convention.

[F2] [[thm-blowup-smooth-surface-point-charts]]: Let $S$ be a smooth surface
over $k$ and $p$ a $k$-rational point. Then $\operatorname{Bl}_p S$ is smooth
over $k$, with exceptional curve $E=\mathbb P^1_k$ and
$\mathcal O_E(E)=\mathcal O_{\mathbb P^1_k}(-1)$; over an affine neighbourhood
the blowup is the incidence subscheme $V(xv-yu)\subseteq U\times_k\mathbb
P^1_k$ with charts $\operatorname{Spec}R[T]/(xT-y)$ and
$\operatorname{Spec}R[U_1]/(yU_1-x)$ glued by $TU_1=1$.

[F3] [[thm-blowup-regular-surface-closed-point-regular]]: The blowup of a
closed point of a regular surface is regular of pure dimension two, its
exceptional divisor $E$ is an effective Cartier divisor canonically
isomorphic to $\mathbb P^1_{\kappa(p)}$, and
$\mathcal O_E(E)=\mathcal O_{\mathbb P^1_{\kappa(p)}}(-1)$. For regular
parameters $x,y$ of $A$, the base change to $\operatorname{Spec}A$ has the
charts $\operatorname{Spec}A[T]/(xT-y)=\operatorname{Spec}A[y/x]$ and
$\operatorname{Spec}A[U]/(yU-x)=\operatorname{Spec}A[x/y]$, glued by
inverting $T$ and $U$ with $U=T^{-1}$; $E$ is cut by $x$ in the first chart
and by $y$ in the second.

[F4] [[def-projective-bundle-scheme]]: The projective bundle of a finite
locally free module $E$ of rank $r$ over $S$ is the relative Proj
$\mathbb P_S(E)=\operatorname{Proj}_S\operatorname{Sym}(E)\to S$, in the
quotient convention in which an $S$-morphism $T\to\mathbb P_S(E)$ amounts to
an isomorphism class of surjections $g^*E\to L$ with $L$ invertible on $T$.

[F5] [[lem-uniqueness-of-twists-on-the-projective-line]]: For the twists of
the relative projective line over a field, $\mathcal O_{\mathbb
P^1_k}(n)\cong\mathcal O_{\mathbb P^1_k}(m)$ if and only if $n=m$; hence the
twist index attached to an invertible sheaf on $\mathbb P^1_k$ is an
isomorphism invariant.

[F6] [[def-twisting-sheaf-proj]]: For a commutative nonnegatively graded ring
$S$, the twisting sheaf on $\operatorname{Proj}S$ is
$\mathcal O_X(n)=\widetilde{S(n)}$, the associated sheaf of the shifted graded
module, with $\Gamma(D_+(f),\mathcal O_X(n))=S(n)_{(f)}$ on standard opens.

[F7] [[thm-pullback-center-ideal-invertible]]: For the blowup of a
quasi-coherent ideal sheaf $\mathcal I$ of finite type with exceptional
subscheme $E=V(\mathcal I\mathcal O_{\operatorname{Bl}})$: $\mathcal O(1)$ is
invertible, the inverse-image ideal $\mathcal I\mathcal O_{\operatorname{Bl}}$
is invertible and equals $\mathcal O(1)$, and the exceptional divisor is
effective Cartier with
$\mathcal O_{\operatorname{Bl}}(-E)=\mathcal I\mathcal
O_{\operatorname{Bl}}=\mathcal O(1)$ and
$\mathcal O_{\operatorname{Bl}}(E)=\mathcal O(-1)$.

## Proof

1.1 By [F7] applied to the ideal sheaf $\mathcal I$ of $p$, the inverse-image ideal $\mathcal I\mathcal O_{S'}$ is invertible, the exceptional curve is $E=V(\mathcal I\mathcal O_{S'})$, and on $S'$ one has $\mathcal O_{S'}(-E)=\mathcal I\mathcal O_{S'}=\mathcal O(1)$ for the positive relative twist of the Rees algebra, while $\mathcal O_{S'}(E)=\mathcal O(-1)$ is its dual. [F7, A1]

2.1 By [F1] the exceptional curve is $\mathbb P_Z(\mathcal I/\mathcal I^2)$ in the quotient convention, and for a closed point $p$ of a regular surface the conormal sheaf is free of rank two over $\kappa(p)$; hence $E\cong\mathbb P^1_{\kappa(p)}$ over $\kappa(p)$, as also recorded in [F3], and in the two charts of [F3] the curve $E$ is cut by $x$ in the first chart and by $y$ in the second, these being the local equations of the invertible ideal $\mathcal I\mathcal O_{S'}$ there. [F1, F3, F4, step 1.1]

3.1 Restrict the invertible sheaf $\mathcal O_{S'}(-E)=\mathcal O(1)$ of step 1.1 to $E$: on the first chart $\operatorname{Spec}A[y/x]=\operatorname{Spec}A[T]$ (with $T=y/x$) the ideal $\mathcal I\mathcal O_{S'}$ is generated by $x$, a nonzerodivisor, and on the second chart $\operatorname{Spec}A[x/y]=\operatorname{Spec}A[U]$ it is generated by $y$, with $x=yU$ and $U=T^{-1}$ on the overlap; writing $e_0=x|_E$ and $e_1=y|_E$ for the two trivializations, the relation $x=yU$ reads $e_1=Te_0$, which is exactly the gluing of the twist $\mathcal O_{\mathbb P^1_{\kappa(p)}}(1)$ in the convention of [F5] and [F6] (transition function $u^n$ with $u=T$ and $n=1$). Hence $\mathcal O_E(-E)\cong\mathcal O_{\mathbb P^1_{\kappa(p)}}(1)$. [F3, F5, F6, step 2.1]

4.1 Dualizing the identification of step 3.1 gives $\mathcal O_E(E)=\mathcal O_{\mathbb P^1_{\kappa(p)}}(-1)$, the dual tautological bundle in the quotient convention of [F4], whose twist index is $-1$, while $\mathcal O_E(-E)=\mathcal O(1)$ has twist index $1$; these indices are exactly the degrees of the two twists on $\mathbb P^1_{\kappa(p)}$, and by [F5] the twist index is an isomorphism invariant, so no other twist can occur and the identification does not depend on the chosen charts. [F4, F5, step 3.1]

5.1 If $p$ is $k$-rational, then $\kappa(p)=k$ and step 4.1 specializes to $\mathcal O_E(E)=\mathcal O_{\mathbb P^1_k}(-1)$; the explicit incidence model of [F2] exhibits the same charts and overlap $TU_1=1$ and states the same normal bundle, so the two descriptions agree. [F2, step 4.1] ∎
