---
id: thm-integration-by-parts
kind: theorem
title: "If $u,v$ are differentiable on $[a,b]$ with $u',v'$ integrable, then $\\int_a^b u v' = u(b)v(b)-u(a)v(a) - \\int_a^b u'v$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-ftc-second-part, thm-algebra-of-derivatives, cor-differentiable-implies-continuous, thm-continuous-implies-integrable, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-linearity-of-the-integral, def-derivative, def-continuity-real, def-darboux-integral, def-interval, def-limit-point-r]
forward_refs: [fs-integration-by-parts-needs-no-integrability-hypothesis]
justified_by: []
aliases: []
landmark: true
short: "integration by parts"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Integration by parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integration_by_parts"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Carnegie Mellon 21-269, Riemann integration notes"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/rint.html"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $u, v : [a,b] \to \mathbb{R}$ be differentiable at
every point of $[a,b]$ as functions on $[a,b]$ ([[def-derivative]]). Suppose
$u'$ and $v'$ are integrable on $[a,b]$ ([[def-darboux-integral]]). Then $uv'$
and $u'v$ are integrable and

$$\int_a^b u\,v' \;=\; u(b)v(b) - u(a)v(a) \;-\; \int_a^b u'\,v .$$

**The integrability of $u'$ and $v'$ is a hypothesis, not a formality.** Without
it the two integrals in the display need not exist at all, and the identity is
then not false but ill-formed; that is
the false statement that deletes it on the companion
page. The hypothesis is automatic when $u$ and $v$ are continuously
differentiable, since a continuous function on $[a,b]$ is integrable
([[thm-continuous-implies-integrable]]).

## Facts & Assumptions

**Given:** Reals $a < b$ and functions $u, v : [a,b] \to \mathbb{R}$, differentiable at every point of $[a,b]$, with $u'$ and $v'$ integrable on $[a,b]$.

[L1] Product rule: if $u$ and $v$ are differentiable at $c$ then so is $uv$, with $(uv)'(c) = u'(c)v(c) + u(c)v'(c)$ ([[thm-algebra-of-derivatives]], claim 3); every point of $[a,b]$ is a limit point of it, so the rule applies at every point ([[def-limit-point-r]], [[def-interval]], [[def-derivative]]).

[L2] A function differentiable at every point of $[a,b]$ is continuous there ([[cor-differentiable-implies-continuous]], [[def-continuity-real]]).

[L3] A continuous function on $[a,b]$ is integrable there ([[thm-continuous-implies-integrable]]).

[L4] A product of two integrable functions on $[a,b]$ is integrable ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claim 1).

[L5] Sums of integrable functions are integrable, and $\int_a^b(w_1+w_2) = \int_a^b w_1 + \int_a^b w_2$ ([[thm-linearity-of-the-integral]]).

[L6] If $H$ is differentiable at every point of $[a,b]$ with $H'$ integrable there, then $\int_a^b H' = H(b)-H(a)$ ([[thm-ftc-second-part]]).

## Proof

**Proof technique:** direct.

1.1 $u$ and $v$ are continuous on $[a,b]$ by [L2], hence integrable there by [L3]. [given, L2, L3]

1.2 $uv$ is differentiable at every point of $[a,b]$ with $(uv)' = u'v + uv'$ by [L1]. [given, L1]

2.1 $u'v$ and $uv'$ are integrable on $[a,b]$ by [L4], being products of the integrable $u'$ with $v$ and of $u$ with the integrable $v'$. [step 1.1, given, L4]

3.1 Hence $(uv)' = u'v + uv'$ is integrable by [L5], and $\int_a^b (uv)' = \int_a^b u'v + \int_a^b uv'$. [step 1.2, step 2.1, L5]

4.1 By [L6] applied to $H := uv$, $\int_a^b (uv)' = u(b)v(b) - u(a)v(a)$. [step 1.2, step 3.1, L6]

5.1 Comparing steps 3.1 and 4.1 and subtracting $\int_a^b u'v$ gives $\int_a^b uv' = u(b)v(b)-u(a)v(a) - \int_a^b u'v$. [step 3.1, step 4.1, algebra] ∎

## Remarks

- **Step 2.1 is the step usually skipped, and it is why the hypotheses are what they are.** The identity is an application of the second fundamental theorem to $uv$, and that theorem needs $(uv)'$ to be integrable. Integrability of $u'$ and $v'$ plus continuity of $u$ and $v$ delivers it, through the product clause of [[cor-integrability-of-absolute-values-products-and-lattice-operations]]; nothing weaker is used, and nothing weaker is claimed to suffice.

- **The boundary term is exactly the increment of $uv$.** Writing the identity as $\int_a^b uv' + \int_a^b u'v = (uv)(b) - (uv)(a)$ makes the symmetry in $u$ and $v$ visible and is the form worth remembering.

- **Discrete counterpart.** Abel's summation by parts ([[lem-abel-summation-by-parts]]) is the same manipulation for finite sums, and it is what [[thm-second-mean-value-theorem-for-integrals]] below uses in place of this theorem, precisely because that theorem assumes no differentiability.

- **Forward reference, orientation only.** The false statement that deletes the integrability hypothesis is [[fs-integration-by-parts-needs-no-integrability-hypothesis]] on the companion page; nothing above depends on it.
