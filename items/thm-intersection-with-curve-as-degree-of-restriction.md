---
id: thm-intersection-with-curve-as-degree-of-restriction
kind: theorem
title: "Intersection with a curve is the degree of the restriction"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-degree-additive-proper-curve
  - cor-minimal-prime-over-a-nonzerodivisor-has-height-one
  - cor-twist-exact-sequence-effective-divisor
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-closed-immersion-schemes
  - def-degree-divisor-proper-curve
  - def-degree-invertible-sheaf-proper-dimension-one
  - def-dimension-noetherian-topological-space
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-integral-scheme
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-noetherian-and-noetherian-scheme
  - def-proper-morphism
  - lem-closed-immersion-projection-formula-invertible
  - lem-effective-cartier-divisor-exact-sequence
  - lem-euler-characteristic-additive-short-exact
  - thm-cartier-weil-divisors-curves-agree
  - thm-euler-characteristic-degree-shift-curve
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Varieties, Section 33.45 (Numerical intersections)"
      url: "https://stacks.math.columbia.edu/tag/0BEL"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral regular projective surface over $k$
([[def-divisor-intersection-number-on-smooth-projective-surface]]) and let
$C$ and $D$ be effective Cartier divisors on $X$
([[def-effective-cartier-divisor]], [[def-cartier-divisor]]) with associated
line bundles $\mathcal O_X(C)$ and $\mathcal O_X(D)$
([[def-invertible-sheaf-of-cartier-divisor]]). Then
$$C\cdot D=\deg_C\bigl(\mathcal O_X(D)|_C\bigr)=\deg_D\bigl(\mathcal O_X(C)|_D\bigr),$$
where $\cdot$ is the intersection product of
[[def-divisor-intersection-number-on-smooth-projective-surface]] and $\deg$ is
the degree of [[def-degree-invertible-sheaf-proper-dimension-one]] on the
proper curves $C$ and $D$.

More generally, if only $C$ is assumed effective, then the first identity
$C\cdot D=\deg_C(\mathcal O_X(D)|_C)$ holds for every Cartier divisor $D$ on
$X$, with $\deg_C$ taken on the curve $C$. If $C$ is moreover a smooth proper
geometrically integral curve, then $\deg_C$ agrees with the closed-point
divisor degree of [[def-degree-divisor-proper-curve]] on $C$. The empty curve
case $C=\varnothing$ is included: both sides are then $0$.

## Facts & Assumptions

**Given:** a field $k$, an integral regular projective surface $X$ over $k$, an effective Cartier divisor $C\subseteq X$, and a Cartier divisor $D$ on $X$.

[F1] Effective Cartier divisors and closed immersions: an effective Cartier divisor $C$ is given by local equations that are nonzerodivisors, its ideal sheaf $I_C=\mathcal O_X(-C)$ is invertible, the inclusion $i:C\hookrightarrow X$ is a closed immersion, and there is a short exact sequence $0\to\mathcal O_X(-C)\to\mathcal O_X\to i_*\mathcal O_C\to0$ with $\mathcal O_X(-C)$ invertible ([[def-effective-cartier-divisor]], [[def-invertible-sheaf-of-cartier-divisor]], [[lem-effective-cartier-divisor-exact-sequence]], [[def-closed-immersion-schemes]]).

[F2] The curve $C$ is a proper $k$-scheme of dimension at most one: its irreducible components are minimal primes over the principal ideals cut out by local equations of $C$, hence have height one by the principal ideal theorem, so $\dim C\le\dim X-1\le1$ ([[cor-minimal-prime-over-a-nonzerodivisor-has-height-one]], [[def-dimension-noetherian-topological-space]]); $C$ is a closed subscheme of the proper $k$-scheme $X$, hence proper over $k$ ([[def-proper-morphism]]). The degree $\deg_C$ is therefore defined on invertible $\mathcal O_C$-modules ([[def-degree-invertible-sheaf-proper-dimension-one]]), and $X$ is Noetherian, locally Noetherian and of finite type over $k$ ([[def-locally-noetherian-and-noetherian-scheme]]).

[F3] Twisting the exact sequence of [F1] by an invertible $\mathcal O_X$-module $\mathcal N$ gives a short exact sequence $0\to\mathcal N(-C)\to\mathcal N\to i_*(\mathcal N|_C)\to0$ with $\mathcal N(-C)=\mathcal N\otimes\mathcal O_X(-C)$ and $\mathcal N|_C=i^*\mathcal N$ ([[cor-twist-exact-sequence-effective-divisor]]); the Euler characteristic is additive in short exact sequences of coherent modules on the proper $k$-scheme $X$ ([[lem-euler-characteristic-additive-short-exact]]), and the closed-immersion projection formula identifies $\chi(X,i_*\mathcal F)=\chi(C,\mathcal F)$ for coherent $\mathcal F$ on $C$ ([[lem-closed-immersion-projection-formula-invertible]]). Hence $\chi(C,\mathcal N|_C)=\chi(X,\mathcal N)-\chi(X,\mathcal N(-C))$ for every invertible $\mathcal N$.

[F4] Definition of the values: writing $\mathcal O_X(-C)=\mathcal O_X(C)^{\vee}$ and $\mathcal O_X(-D)=\mathcal O_X(D)^{\vee}$ and $\mathcal O_X(-C-D)=\mathcal O_X(-C)\otimes\mathcal O_X(-D)$, the definition of the intersection product gives $$C\cdot D=\chi(X,\mathcal O_X)-\chi(X,\mathcal O_X(-C))-\chi(X,\mathcal O_X(-D))+\chi(X,\mathcal O_X(-C-D)),$$ and $\deg_C(\mathcal M)=\chi(C,\mathcal M)-\chi(C,\mathcal O_C)$ for invertible $\mathcal M$; the defining expression is symmetric in the two divisors ([[def-divisor-intersection-number-on-smooth-projective-surface]]). By part 2 of [[cor-degree-additive-proper-curve]], $\deg_C(\mathcal M^{\vee})=-\deg_C(\mathcal M)$ for invertible $\mathcal M$ on the proper curve $C$ of dimension at most one.

[F5] The smooth case: if $C$ is a smooth proper geometrically integral curve over $k$ and $\mathcal M$ is an invertible $\mathcal O_C$-module, then $\mathcal M\cong\mathcal O_C(D')$ for a divisor $D'$ on $C$ ([[thm-cartier-weil-divisors-curves-agree]]), and $\chi(C,\mathcal O_C(D'))-\chi(C,\mathcal O_C)=\deg_k(D')$ ([[thm-euler-characteristic-degree-shift-curve]]); hence $\deg_C(\mathcal M)$ equals the closed-point divisor degree $\deg_k(D')$ of [[def-degree-divisor-proper-curve]].

[F6] Empty case: if $C=\varnothing$ then $\mathcal O_X(-C)=\mathcal O_X$ and $i_*\mathcal O_C=0$, so the defining expression for $C\cdot D$ is $\chi(\mathcal O_X)-\chi(\mathcal O_X)-\chi(\mathcal O_X(-D))+\chi(\mathcal O_X(-D))=0$ ([[def-effective-cartier-divisor]], [[lem-effective-cartier-divisor-exact-sequence]]).

[F7] The Axiom of Choice enters through the Euler-characteristic, devissage, closed-immersion and curve-degree suppliers; no selection is made in the computations below.

## Proof

**Proof technique:** direct; substitute the two twisting sequences into the defining four-term expression and identify the result with a degree.

1.1 Set-up. The curve $C$ is a proper $k$-scheme of dimension at most one, so $\deg_C$ is defined on invertible $\mathcal O_C$-modules, and the modules $\mathcal O_X(D)|_C=i^*\mathcal O_X(D)$ and $\mathcal O_X(-C)$, $\mathcal O_X(-D)$, $\mathcal O_X(-C-D)$ appearing below are invertible, hence coherent on the locally Noetherian schemes $C$ and $X$. In the closed-immersion exact sequence for $C$ the third term is $i_*\mathcal O_C$, and for an invertible $\mathcal N$ on $X$ the twist reads $0\to\mathcal N(-C)\to\mathcal N\to i_*(\mathcal N|_C)\to0$. [F1, F2, F3]

1.2 The chi-difference identity. For every invertible $\mathcal O_X$-module $\mathcal N$, additivity of $\chi$ on the twisted sequence of [F1] gives $\chi(X,\mathcal N)=\chi(X,\mathcal N(-C))+\chi(X,i_*(\mathcal N|_C))$, and the projection formula gives $\chi(X,i_*(\mathcal N|_C))=\chi(C,\mathcal N|_C)$; hence $\chi(C,\mathcal N|_C)=\chi(X,\mathcal N)-\chi(X,\mathcal N(-C))$. [F1, F3]

1.3 The smooth comparison. If $C$ is a smooth proper geometrically integral curve, then every invertible module on $C$ is $\mathcal O_C(D')$ for a divisor $D'$, and the Euler-characteristic degree shift identifies $\deg_C(\mathcal O_C(D'))=\chi(C,\mathcal O_C(D'))-\chi(C,\mathcal O_C)$ with $\deg_k(D')$; this is the asserted agreement with the closed-point divisor degree. [F5]

1.4 The empty case. If $C=\varnothing$, then the ideal sheaf of $C$ is $\mathcal O_X$ and $i_*\mathcal O_C=0$, so the four terms of the defining expression cancel in pairs and $C\cdot D=0$; on the empty curve every degree is $0$. [F6]

2.1 The main computation. Take the identity of step 1.2 for $\mathcal N=\mathcal O_X$ and for $\mathcal N=\mathcal O_X(-D)$: $$\chi(X,\mathcal O_X)-\chi(X,\mathcal O_X(-C))=\chi(C,\mathcal O_C),\qquad\chi(X,\mathcal O_X(-D))-\chi(X,\mathcal O_X(-C-D))=\chi(C,\mathcal O_X(-D)|_C),$$ the second because $\mathcal O_X(-D)(-C)=\mathcal O_X(-C-D)$. Substituting both into the defining expression of [F4], $$C\cdot D=\chi(C,\mathcal O_C)-\chi(C,\mathcal O_X(-D)|_C).$$ By [F4] applied on $C$, $\chi(C,\mathcal O_X(-D)|_C)-\chi(C,\mathcal O_C)=\deg_C(\mathcal O_X(-D)|_C)$, and by the dual-degree identity of [F4], $\deg_C(\mathcal O_X(-D)|_C)=-\deg_C(\mathcal O_X(D)|_C)$ because $\mathcal O_X(-D)|_C=(\mathcal O_X(D)|_C)^{\vee}$. Therefore $C\cdot D=\deg_C(\mathcal O_X(D)|_C)$, the first identity, valid for every Cartier divisor $D$ once $C$ is effective. [F4, step 1.2]

3.1 Both divisors effective. Assume now that $D$ is effective as well. Applying step 2.1 with the roles of $C$ and $D$ interchanged gives $D\cdot C=\deg_D(\mathcal O_X(C)|_D)$, and the defining expression of the intersection product is symmetric by [F4], so $C\cdot D=D\cdot C=\deg_D(\mathcal O_X(C)|_D)$. Together with step 2.1 this gives the two asserted identities for effective $C$ and $D$. [F4, step 2.1]

4.1 Conclusion and choice accounting. Step 2.1 proves the general identity $C\cdot D=\deg_C(\mathcal O_X(D)|_C)$ for effective $C$ and arbitrary Cartier $D$; step 3.1 adds the second identity $\deg_D(\mathcal O_X(C)|_D)$ when $D$ is effective; step 1.3 proves the agreement of $\deg_C$ with the closed-point divisor degree on a smooth proper geometrically integral curve; and step 1.4 covers the empty curve. The Axiom of Choice enters only through the suppliers listed in [F7], in particular the Euler-characteristic additivity and projection formula of [F3], the degree and dual-degree statements of [F4] and the curve-degree comparison [F5]; no selection is made in the computations. [F7, step 1.3, step 1.4, step 2.1, step 3.1] ∎
