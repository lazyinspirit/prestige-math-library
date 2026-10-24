---
id: lem-blowup-lowers-contact-order
kind: lemma
title: "A point blowup lowers pairwise contact order by one and separates transverse branches"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-regular-local-quotient-by-parameter-is-regular
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - def-contact-order-regular-components
  - thm-exceptional-divisor-normal-cone-proj
  - thm-associated-graded-ring-of-a-regular-local-ring
  - thm-blowup-base-change-flat
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - def-effective-cartier-divisor
  - def-cartier-divisor
  - def-axiom-of-choice
  - thm-dimension-at-most-embedding-dimension
justified_by: []
landmark: false
proof_strategy: "Choose regular parameters with y a local equation of Y, read the contact order as the x-adic valuation on the DVR O_{Y,p}, and compute the strict transforms in the standard blowup chart y equals x t"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.4.3 on the nodal curve, separation of branches and the local chart computation, pp. 389-390"
    - title: "Roman Bezrukavnikov et al., MIT 18.725 Algebraic Geometry (Fall 2015) consolidated lecture notes"
      url: "https://math.mit.edu/~higgs/18.725_2015.pdf"
      locator: "Lecture 9, blowup charts and the tangent-cone description, PDF pp. 23-25"
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.4 and the description of the strict transform in Section 31.34"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "amended_repair"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a adjudication; evidence: research/frontier-38-owner-30-alpha-batch-2-5a.md; immutable carrier: research/frontier-38-owner-30-step5-hash-2-post-5a.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 5a-batch-2 dispatch"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

Assume the Axiom of Choice, inherited from the blowup construction
([[def-axiom-of-choice]]). Let $S$ be a regular surface over a field $k$
([[def-contact-order-regular-components]]), let $p$ be a closed point, and let
$Y,Z\subseteq S$ be distinct curves that are regular at $p$ and pass through
$p$, with contact order $n=n_p(Y,Z)\ge1$
([[def-contact-order-regular-components]]). Let
$\pi\colon S'\to S$ be the blowup of $p$, with exceptional curve $E$, and let
$Y',Z'$ be the strict transforms of $Y,Z$. Then:

1. if $n=1$, then $Y'$ and $Z'$ meet $E$ at distinct points, so they are
   disjoint in a neighbourhood of $E$;
2. if $n>1$, then $Y'$ and $Z'$ meet at the point of $E$ corresponding to
   their common tangent direction, the contact order of $Y'$ and $Z'$ there is
   $n-1$, and every intersection of a strict transform with $E$ has order one.

## Facts & Assumptions

**Given:** A regular surface $S$ over $k$, a closed point $p$ with local ring $A=\mathcal O_{S,p}$, a regular system of parameters $x,y\in A$, local equations $y$ of $Y$ and $z$ of $Z$ at $p$, the blowup $\pi\colon S'\to S$ of $p$ with exceptional curve $E$ and strict transforms $Y',Z'$, and the contact order $n=n_p(Y,Z)$ of [[def-contact-order-regular-components]].

[F1] [[def-contact-order-regular-components]]: $n=\operatorname{length}_{A/(y)} \bigl((A/(y))/(z)\bigr)$ and $\mathcal O_{Y,p}=A/(y)$ is a one-dimensional reduced Noetherian local ring; every component of $Y$ and of $Z$ through $p$ is regular at $p$.

[F2] [[thm-affine-blowup-standard-charts]], [[lem-affine-blowup-algebra-properties]], [[thm-blowup-base-change-flat]], [[thm-exceptional-divisor-normal-cone-proj]] and [[thm-associated-graded-ring-of-a-regular-local-ring]]: Localizing the base at $p$ gives the charts $A[(x,y)/x]$ and $A[(x,y)/y]$, with inverse ratio overlap. The exceptional curve is $\operatorname{Proj}\operatorname{gr}_{\mathfrak m}A$, hence $\mathbb P^1_{\kappa(p)}$ after choosing parameters, since $\dim A=2$ at the contact point. The quotient presentations follow from the regular-sequence torsion calculation below.

[F3] [[lem-affine-blowup-algebra-properties]]: The chart ring is the affine blowup algebra $A[I/x]$ with $IA[I/x]=xA[I/x]$ and $x$ a nonzerodivisor, so on the first chart the inverse image ideal of the centre is $(x)$.

[F4] [[lem-total-transform-strict-plus-exceptional-multiplicity]]: For a reduced curve $C\subseteq S$ through $p$ whose local equation has multiplicity $m$ at $p$, one has $\pi^*C=C'+mE$ and $C'$ meets $E$ in the $0$-cycle of degree $m$ cut out by the degree-$m$ leading form of a local equation of $C$ at $p$.

[F5] [[def-contact-order-regular-components]] and [[lem-regular-local-quotient-by-parameter-is-regular]]: In a two-dimensional regular local ring, a regular curve germ has a prime equation with nonzero cotangent class, as shown in the definition's local-equation argument. Conversely, quotienting by an equation with nonzero cotangent class gives a regular one-dimensional local ring. Thus regularity of such a curve germ is equivalent to its equation having order one.

[F6] [[def-effective-cartier-divisor]] and [[def-cartier-divisor]]: The exceptional curve $E$ is an effective Cartier divisor on $S'$, so the total transform $\pi^*C$ and the expression $C'+mE$ of [F4] are well defined as divisors.

[F7] [[lem-regular-local-quotient-by-parameter-is-regular]], [[thm-one-dimensional-regular-local-rings-are-dvrs]] and [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]: A quotient of a regular local ring by an element with nonzero cotangent class is regular of dimension one less; in dimension one it is a discrete valuation domain.

[F8] [[thm-dimension-at-most-embedding-dimension]]: The dimension of a nonzero Noetherian local ring is at most its embedding dimension.

## Proof

1.1 The regular curve germ $Y$ has prime ideal $P$ with $A/P$ regular of dimension one. Its cotangent space has dimension one, so the kernel of $\mathfrak m/\mathfrak m^2\to\mathfrak m/(P+\mathfrak m^2)$ is nonzero. Choose $y\in P$ with nonzero cotangent class and extend it to a parameter system $x,y$. The ring $A/(y)$ is a one-dimensional regular local domain, hence a DVR. The prime $P/(y)$ must be zero, since its quotient has dimension one, whereas the only nonzero prime in a DVR is maximal and has zero-dimensional quotient. Thus $P=(y)$. The same argument gives a principal equation $z$ of $Z$. In the DVR $A/(y)$, $\bar x$ is a uniformizer and the contact order is $n=\operatorname{ord}_{\bar x}\bar z$. [F1, F5, F7]

2.1 Write $\ell_Y$ and $\ell_Z$ for the leading forms of $y$ and $z$ in the symmetric algebra of $\mathfrak m/\mathfrak m^2$, so $\ell_Y=y$ and $\ell_Z=\alpha x+\beta y$ with $(\alpha,\beta)\ne(0,0)$ by the regularity of $Z$ at $p$ in [F5]. Since $\bar z=z(x,0)=\alpha x+O(x^2)$ in the DVR $A/(y)$ with uniformizer $x$, the order is $n=1$ exactly when $\alpha\ne0$: the tangent directions of $Y$ and $Z$ at $p$, cut out by $\ell_Y$ and $\ell_Z$, agree exactly when $\ell_Z$ is a nonzero multiple of $y$, that is exactly when $\alpha=0$ and $\beta\ne0$; hence $n=1$ if and only if the tangent directions differ, and in that case $\beta$ may be zero or not, while for $n>1$ the two curves have the common tangent direction cut out by $y$. [F1, F5, step 1.1]

3.1 The first chart is $A[T]/(xT-y)$: if $xg=(xT-y)h$, reduction modulo $x$ and regularity of $y$ modulo $x$ give $h=xh_1$, then cancellation gives $g=(xT-y)h_1$. Thus no $x$-power torsion remains in the incidence quotient. Work in the first chart $\operatorname{Spec}A[T]/(xT-y)$, $T=y/x$, so $y=xT$ and $E=V(x)$; by [F2] and [F3] this chart contains the point of $E$ corresponding to the tangent direction cut out by $y$, namely $T=0$, and the other chart covers the remaining points, so the two charts together see all of $E$. By [F4] applied to $Y$ and $Z$, whose local equations have multiplicity one at $p$, one has $\pi^*Y=Y'+E$ and $\pi^*Z=Z'+E$ as identities of effective Cartier divisors, well defined by [F6]; and $Y'$ meets $E$ in the reduced point cut out by $\ell_Y$, $Z'$ in the reduced point cut out by $\ell_Z$; explicitly in this chart the total transform of $Z$ is $V(z)$ with $z=xh$, $h=z/x\in A[y/x]$, and $Z'=V(h)$. [F2, F3, F4, step 2.1, F6]

4.1 If $n=1$, then $\alpha\ne0$ by step 2.1, so $h(0,0)=\alpha\ne0$: the strict transform $Z'$ does not pass through the point $Y'\cap E=\{T=0\}$, and its intersection with $E$ is cut out by $\ell_Z$ at the point of $E$ corresponding to the tangent direction of $Z$, which differs from that of $Y$ by step 2.1. On the open complement of $Z'\cap Y'$ (a closed subset missing $E$) the curves $Y'$ and $Z'$ are disjoint: they meet $E$ at distinct points and are therefore disjoint near $E$. [F4, step 2.1, step 3.1]

4.2 If $n>1$, then $\alpha=0$ and $\beta\ne0$, so $\ell_Z=\beta y$: both $Y'$ and $Z'$ meet $E$ at the single point $q$ corresponding to the common tangent direction cut out by $y$, namely $T=0$; and $h(x,0)=\bar z/x=x^{n-1}u(x)$ for a unit $u$ of the DVR $A/(y)$, because $\operatorname{ord}_x\bar z=n$ by step 1.1. The ambient local ring at $q$ is regular: the domain chart $B=A[T]/(xT-y)$ has $B/xB=\kappa(p)[T]$, and $\mathcal O_{S',q}=B_{(x,T)}$ has maximal ideal generated by $x,T$. The strict prime chain $(0)\subsetneq(x)\subsetneq(x,T)$ gives dimension at least two, while [F8] bounds it above by its embedding dimension at most two. Hence it is regular, with $x,T$ a cotangent basis. Since $h\bmod x=\beta T$ is a nonzero linear form, $Z'$ is regular at $q$ by [F5], and $Y'=V(T)$ is regular there; in the DVR $\mathcal O_{Y',q}\cong (A/(y))$ with uniformizer $x$, the ideal of $Z'$ is generated by $h(x,0)=x^{n-1}u(x)$, so the contact order of $Y'$ and $Z'$ at $q$ is $n-1$. Finally each of $Y',Z'$ meets $E$ in a $0$-cycle of degree one by [F4], so every intersection of a strict transform with $E$ has order one. [F2, F4, F5, F7, F8, step 1.1, step 2.1, step 3.1]

5.1 Steps 4.1 and 4.2 prove the two assertions: for transverse branches ($n=1$) the strict transforms meet $E$ at distinct points and are disjoint near $E$, while for $n>1$ they meet at the common tangent direction with contact order $n-1$, every intersection with $E$ having order one. [step 4.1, step 4.2] ∎

## Remarks

- The computation uses only the first chart because the point of $E$ cut out by $y$ is $T=0$ there; when the common tangent direction is the other coordinate direction the same argument runs in the second chart with $x$ and $y$ interchanged.
- The statement is the local input for resolving plane curve singularities by repeated point blowups, where it shows that the contact order of two branches drops by exactly one at each step at which they still share a tangent direction.
