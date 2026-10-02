---
id: def-order-codimension-one-rational-function
kind: definition
title: "Order codimension one rational function"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-weil-divisor-normal-noetherian-scheme
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - def-discrete-valuation-ring
  - def-discrete-valuation
  - thm-equivalent-characterisations-of-a-dvr
  - def-normal-noetherian-ring
  - def-local-ring
  - def-sheaf-total-quotient-rings
  - def-integral-scheme
  - def-generic-point-irreducible-closed-subset
  - def-field-of-fractions
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
    - title: "The Stacks Project, Weil divisors, Definitions 31.27.2–3"
      url: "https://stacks.math.columbia.edu/tag/0BE0"
    - title: "The Stacks Project, Exercises, Definition 111.49.1(6)–(8)"
      url: "https://stacks.math.columbia.edu/tag/02AR"
verification:
  audited: 2026-10-02
---

## Definition

Let $X$ be a normal locally Noetherian scheme ([[def-normal-noetherian-ring]])
and let $Z\subseteq X$ be an integral closed subscheme with generic point
$\xi$ and $\dim\mathcal O_{X,\xi}=1$
([[def-integral-scheme]], [[def-generic-point-irreducible-closed-subset]]).
We call such a $Z$ a **prime divisor** also in this locally Noetherian
setting. This extends the same codimension-one definition in
[[def-weil-divisor-normal-noetherian-scheme]]; it requires no
quasi-compactness of $X$.

The local ring $\mathcal O_{X,\xi}$ is a discrete valuation ring. It is a
Noetherian local ring, because $X$ is locally Noetherian; it is a domain with
fraction field equal to the function field of the irreducible component
containing $Z$, because $\xi$ lies in a unique irreducible component of the
normal scheme $X$; it is integrally closed, by normality; and it has dimension
equal to one, by the definition of a prime divisor. A one-dimensional
Noetherian local integrally closed domain is a discrete valuation ring by the
characterisation of discrete valuation rings, and
[[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]] is exactly
this statement in global form
([[thm-equivalent-characterisations-of-a-dvr]],
[[def-discrete-valuation-ring]]).

Let $v_\xi$ denote the discrete valuation of the fraction field
$K=\operatorname{Frac}(\mathcal O_{X,\xi})$ whose valuation ring is
$\mathcal O_{X,\xi}$, normalised so that $v_\xi(\pi)=1$ for a uniformiser
$\pi$ of $\mathcal O_{X,\xi}$
([[def-discrete-valuation]], [[def-field-of-fractions]]). Now let
$$f\ \in\ \Gamma(X,\,K_X^{\times})$$
be a global meromorphic unit ([[def-sheaf-total-quotient-rings]]). The generic
point $\xi$ lies in a unique irreducible component $X_i$ of $X$; the sheaf
$K_X$ restricts on the integral scheme $X_i$ to the constant sheaf with value
the function field $K(X_i)$, and $\mathcal O_{X,\xi}=\mathcal O_{X_i,\xi}$ has
fraction field $K(X_i)$. The restriction of $f$ to $X_i$ is therefore an
element of $K(X_i)^{\times}=K^{\times}$, written $f_\xi$, and the **order of
vanishing of $f$ along $Z$** is the integer
$$\operatorname{ord}_Z(f)\;:=\;v_\xi(f_\xi)\;\in\;\mathbb Z .$$
Since $v_\xi$ is a group homomorphism $K^{\times}\to\mathbb Z$ and $f_\xi$
depends only on the restriction of $f$ to $X_i$, this is well defined:
$\operatorname{ord}_Z(1)=0$, $\operatorname{ord}_Z(fg)=
\operatorname{ord}_Z(f)+\operatorname{ord}_Z(g)$ and
$\operatorname{ord}_Z(f^{-1})=-\operatorname{ord}_Z(f)$.

If $X$ is integral ([[def-integral-scheme]]) then $K_X$ is the constant sheaf
with value $K(X)$, so a meromorphic unit is simply an element of
$K(X)^{\times}$, and $\operatorname{ord}_Z(f)=v_\xi(f)$ for the element
$f\in K(X)^{\times}=\operatorname{Frac}(\mathcal O_{X,\xi})^{\times}$. In this
case $\operatorname{ord}_Z(f)\ge 0$ if and only if $f$ lies in
$\mathcal O_{X,\xi}$, and $\operatorname{ord}_Z(f)=0$ if and only if $f$ is a
unit of $\mathcal O_{X,\xi}$, since $v_\xi$ is the normalised valuation of a
discrete valuation ring.

For $X=\varnothing$ there are no prime divisors, so the order domain is
empty. The meromorphic-unit group is trivial, with its unique identity;
this does not give an order without a prime divisor.
