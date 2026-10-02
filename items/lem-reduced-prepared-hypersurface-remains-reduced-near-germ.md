---
id: lem-reduced-prepared-hypersurface-remains-reduced-near-germ
kind: lemma
title: "A reduced prepared hypersurface stays reduced nearby"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-discriminant-and-branch-locus-weierstrass-hypersurface
  - def-irreducible-and-prime-elements-in-a-domain
  - def-regular-holomorphic-germ
  - def-reduced-holomorphic-germ-for-hypersurface
  - def-weierstrass-polynomial
  - lem-reduced-prepared-polynomial-has-nonzero-discriminant
  - lem-stability-of-slice-zero-count-under-holomorphic-parameters
  - prop-units-in-the-holomorphic-germ-ring
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - thm-identity-theorem-in-several-complex-variables
  - thm-repeated-root-derivative-criterion
  - thm-weierstrass-preparation-theorem
  - thm-zero-order-factorization-holomorphic-function
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Chapter 6 §§6.1–6.7"
      url: "https://www.jirka.org/scv/scv.pdf"
      locator: "Theorem 6.3.3 dependence of zeros and the discriminant set (p. 178); §6.5 regular and singular sets (p. 187); §6.6 vanishing ideals (pp. 188–189)."
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §§2, 4 and 6"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "II (4.19) discriminant and the unramified part (p. 95); II (4.23) regular and singular points (p. 98)."
verification:
  precheck: pass
---

## Statement

Let $n\ge1$ and let $W$ be a Weierstrass polynomial of degree $d\ge1$ in the
last variable which is reduced as a germ at the origin of $\mathbb C^n$
([[def-reduced-holomorphic-germ-for-hypersurface]]); write $Z(W)$ for its zero
set. Then, after shrinking to the product representative $V\times D$ of the
finite local projection, every local equation germ of $W$ is reduced: for every
$q\in Z(W)\cap(V\times D)$ the translate of the germ of $W$ at $q$ is a
reduced germ at the origin of $\mathbb C^n$ in the sense of
[[def-reduced-holomorphic-germ-for-hypersurface]].

The assertion concerns this principal hypersurface equation and its zero set;
it is not a statement about arbitrary analytic germs.

## Facts & Assumptions

**Given:** A Weierstrass polynomial $W$ of degree $d\ge1$ in the last variable, reduced as a germ at the origin, and the product neighbourhood $V\times D$ of the finite local projection of $W$.

[F1] A Weierstrass polynomial of degree $d$ is monic in the last variable, its lower coefficients vanish at the origin, and it is regular in the last variable of order $d$; a germ is regular of order $d$ when its vertical slice has a zero of exact order $d$ at the origin ([[def-weierstrass-polynomial]], [[def-regular-holomorphic-germ]]).

[F2] For a reduced germ that is regular of order $d$ with preparation $W$, the discriminant $D_W=\operatorname{Disc}_T(W)$ is a nonzero base germ and $W$ is square-free over $K=\operatorname{Frac}(\mathcal O_{n-1,0})$ ([[lem-reduced-prepared-polynomial-has-nonzero-discriminant]]); here the reduced regular germ is $W$ itself, prepared as $W=1\cdot W$.

[F3] $D_W(z')=\operatorname{Disc}(W(z',\cdot))$ is the coefficient discriminant of the monic slice, and it vanishes exactly when that slice has a repeated root ([[def-discriminant-and-branch-locus-weierstrass-hypersurface]], [[thm-discriminant-root-formula-and-repeated-root-criterion]]).

[F4] A nonzero holomorphic function on a connected open set does not vanish on a nonempty open subset ([[thm-identity-theorem-in-several-complex-variables]]).

[F5] Units of a germ ring are exactly the germs with nonzero value at the base point; irreducible elements are nonzero nonunits, so an irreducible germ vanishes at its base point ([[prop-units-in-the-holomorphic-germ-ring]], [[def-irreducible-and-prime-elements-in-a-domain]]).

[F6] A germ regular in the last variable of order $m\ge1$ has, after preparation, a neighbourhood on which every nearby slice has exactly $m$ zeros in a fixed vertical disc, counted with multiplicity ([[lem-stability-of-slice-zero-count-under-holomorphic-parameters]], [[thm-weierstrass-preparation-theorem]]).

[F7] A holomorphic function of one variable with a zero at $\zeta_0$ factors as $(z-\zeta_0)^m$ times a nonvanishing holomorphic factor there, and a zero of a holomorphic function is a repeated root of a slice exactly when the slice derivative vanishes there ([[thm-zero-order-factorization-holomorphic-function]], [[thm-repeated-root-derivative-criterion]]).



**Proof technique:** direct — a nonreduced local germ would force the slice discriminant to vanish identically on a base neighbourhood, contradicting the nonzero discriminant.

## Proof

1.1 By [F1] the germ $W$ is regular in the last variable of order $d$ and is its own preparation, so [F2] applies to it: $D_W$ is a nonzero base germ and [F3] identifies its vanishing with the existence of a repeated root in the slice $W(z',\cdot)$. Shrink the product representative so that $W$ and $D_W$ are defined on the connected base $V$ and the finite-projection conclusions hold. [given, F1, F2, F3]

1.2 Suppose for contradiction that some $q=(q',\tau)\in Z(W)\cap(V\times D)$ has a nonreduced germ: $W_q=g^2h$ for an irreducible germ $g$ at $q$. By [F5] the germ $g$ is a nonzero nonunit, so $g(q',\tau)=0$. [given, F5, assume-contra]

2.1 The vertical slice $\zeta\mapsto g(q',\zeta)$ is not identically zero near $\tau$: the identity $W=g^2h$ holds on a neighbourhood of $q$, so if that slice vanished identically then the slice $\zeta\mapsto W(q',\zeta)$ would vanish identically near $\tau$, contradicting that this slice is the monic polynomial of degree $d$ from step 1.1, which has only finitely many zeros. Hence $g$ is regular in the last variable of some order $m\ge1$ at $q$, by [F1] and the vanishing of $g$ at $q$. [step 1.1, step 1.2, F1]

3.1 Choose a product neighbourhood $U_0\times\{|\zeta-\tau|<\rho_0\}$ of $q$ contained in the neighbourhood where $W=g^2h$ holds, and shrink $\rho_0$ so the slice $g(q',\cdot)$ has no zero on $|\zeta-\tau|=\rho_0$. Prepare the regular germ $g$ at $q$: $g=u_gG$ with $G$ a Weierstrass polynomial of degree $m\ge1$ in the translated coordinates. Apply the stability of the slice zero count [F6] on this chosen disc and shrink the base to a neighbourhood $U\subseteq U_0$ of $q'$; every slice $g(z',\cdot)$, $z'\in U$, then has exactly $m\ge1$ zeros counted with multiplicity in $|\zeta-\tau|<\rho_0$. In particular the product used below remains inside the factorization neighbourhood. [step 2.1, F6]

4.1 Fix $z'\in U$ and let $\zeta$ be one of the $m\ge1$ zeros of $g(z',\cdot)$ supplied by step 3.1. Because the identity $W=g^2h$ holds on a neighbourhood of $q$, the slices satisfy $W(z',\cdot)=g(z',\cdot)^2h(z',\cdot)$ near $\zeta$; by [F7] the slice of $g$ has a zero of some order $m_y\ge1$ at $\zeta$, so the slice of $W$ vanishes there to order at least $2m_y\ge2$. Thus $\zeta$ is a repeated root of $W(z',\cdot)$, and [F7] gives $\partial_TW(z',\zeta)=0$ while [F3] gives $D_W(z')=0$. [step 2.1, step 3.1, F3, F7]

5.1 Every $z'\in U$ therefore lies in the zero set of $D_W$. If $n=1$, the base $V$ is the single point of $\mathbb C^0$; step 4.1 gives $D_W=0$ there, contradicting the nonzero constant $D_W$ from step 1.1. If $n\ge2$, $D_W$ vanishes on the nonempty open set $U$, contradicting [F4] on the connected base $V$ because $D_W$ is the nonzero base germ from step 1.1. Hence no point $q\in Z(W)\cap(V\times D)$ has a nonreduced local germ. [step 1.1, step 4.1, F4, discharge-contradiction]

6.1 Shrinking to the product representative $V\times D$ fixed in step 1.1, every local equation germ of $W$ at a point of its zero set is reduced, which is the assertion. [step 5.1] ∎
