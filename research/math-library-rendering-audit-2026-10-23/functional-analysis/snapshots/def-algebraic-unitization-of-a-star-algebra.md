---
id: def-algebraic-unitization-of-a-star-algebra
kind: definition
title: Algebraic unitization of a star algebra
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-c-star-algebra]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definition 2.1.18 and Proposition 2.1.15, printed pp. 11–13"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Definition

Let $A$ be a complex C\*-algebra ([[def-c-star-algebra]]), not assumed unital.
The **algebraic unitization** of $A$ is the complex vector space

$$A^+ \;:=\; A \oplus \mathbb C \;=\; \{\,(a,\lambda) : a \in A,\ \lambda \in \mathbb C\,\},$$

equipped with the multiplication, involution and unit

$$(a,\lambda)(b,\mu) \;:=\; (ab + \lambda b + \mu a,\ \lambda\mu), \qquad (a,\lambda)^* \;:=\; (a^*, \overline\lambda), \qquad \mathbf 1_{A^+} := (0,1).$$

The pair is written $a + \lambda 1$ for $(a,\lambda)$, so that the displayed
product is the expansion of $(a + \lambda1)(b + \mu1)$ with the convention
$\lambda b = b\lambda$. The map $\chi_\infty(a,\lambda) := \lambda$ is the
**quotient character** of $A^+$; it is complex-linear, multiplicative and
nonzero, and it vanishes exactly on $A \oplus \{0\}$.

Three algebraic facts are recorded and verified here because they are used
without further comment:

- **the product is associative and complex-bilinear**, and $(0,1)$ is a two-sided
  identity: expanding $((a,\lambda)(b,\mu))(c,\nu)$ and
  $(a,\lambda)((b,\mu)(c,\nu))$ gives in both cases
  $(abc + \lambda bc + \mu ac + \nu ab + \lambda\mu c
  + \lambda\nu b + \mu\nu a,\ \lambda\mu\nu)$;
- **the involution is involutive and anti-multiplicative**:
  $(a,\lambda)^{**} = (a,\lambda)$ and
  $((a,\lambda)(b,\mu))^* = (b^*, \overline\mu)(a^*, \overline\lambda)$, both
  direct computations from the C\*-algebra axioms;
- **$A \cong A \oplus \{0\}$ is a two-sided ideal of $A^+$** with
  $(a,\lambda)(b,0) = (ab + \lambda b, 0)$ and $(b,0)(a,\lambda) = (ba + \lambda b, 0)$
  in $A \oplus \{0\}$.

No norm is defined here. For nonzero genuinely nonunital $A$,
[[thm-minimal-c-star-unitization]] constructs a C\*-norm on $A^+$;
its operator construction uses nonunitality to be injective. That theorem
is not invoked here for unital $A$. If $A$ is the zero algebra then
$A^+ \cong \mathbb C$ is the complex numbers with their usual structure, and
the quotient character is the identity map.

## Remarks

- **The direct sum is algebraic.** The definition does not require $A$ to be
  nonunital; if $A$ happens to be unital then $A^+$ is still the direct sum with
  its product, but the unit of $A^+$ differs from the unit of the ideal $A$, and
  for that reason the C\*-norm theorem below is stated only for genuinely
  nonunital $A$.
- **The quotient character is the point at infinity.** For commutative, genuinely
  nonunital $A$ (with the zero algebra treated separately), the later
  representation theorem identifies $\chi_\infty$ with evaluation at the added point of the one-point
  compactification ([[thm-character-space-of-the-unitization-is-one-point-compactification]]).
