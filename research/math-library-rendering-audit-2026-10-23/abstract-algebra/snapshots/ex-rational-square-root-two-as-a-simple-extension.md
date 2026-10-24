---
id: ex-rational-square-root-two-as-a-simple-extension
kind: example
title: '$\mathbb Q(\sqrt2)\cong\mathbb Q[x]/(x^2-2)$ with basis $1,\sqrt2$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-and-transcendental-elements, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-evaluation-kernel-and-minimal-polynomial, thm-eisenstein-irreducibility-criterion, thm-rat-field, cor-cauchy-reals-lub-complete, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-11
---

## Example

Over the rational field $\mathbb Q$ ([[thm-rat-field]]), let
$a=\sqrt2$, whose existence and positive choice are supplied by
the completeness of $\mathbb R$ ([[cor-cauchy-reals-lub-complete]]) and
[[thm-of-square-roots]]. Then
$$\mathbb Q(a)\cong\mathbb Q[x]/(x^2-2),$$
and every element is uniquely $r+sa$ with $r,s\in\mathbb Q$.

## Facts & Assumptions

**Given:** The element $a=\sqrt2$ over $\mathbb Q$.

[F1] Eisenstein's criterion makes a primitive integer polynomial irreducible over $\mathbb Q$ when some prime divides every nonleading coefficient, does not divide the leading coefficient, and its square does not divide the constant coefficient ([[thm-eisenstein-irreducibility-criterion]]).

[F2] A simple algebraic extension is its minimal-polynomial quotient and has the associated power basis ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[F3] The real numbers are a complete ordered field, so $\sqrt2$ exists and satisfies $(\sqrt2)^2=2$ ([[cor-cauchy-reals-lub-complete]], [[thm-of-square-roots]]).

[F4] An element is algebraic when a nonzero polynomial vanishes at it ([[def-algebraic-and-transcendental-elements]]); for an algebraic element with minimal polynomial $m_a$, $f(a)=0$ exactly when $m_a$ divides $f$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Verification

**Proof technique:** direct.

1.1 The polynomial $x^2-2$ satisfies [F1] at the prime $2$, so it is monic and irreducible over $\mathbb Q$; since it vanishes at $a$, [F4] makes it the minimal polynomial of $a$. [F1, F3, F4, algebra]

2.1 Apply [F2] to obtain the quotient isomorphism, the basis $1,a$, and the unique form $r+sa$. [F2, step 1.1]

3.1 For instance, $(1+a)^{-1}=a-1$, because $(1+a)(a-1)=a^2-1=1$. [step 2.1, algebra] ∎
