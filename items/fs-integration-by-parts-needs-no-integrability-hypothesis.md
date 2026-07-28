---
id: fs-integration-by-parts-needs-no-integrability-hypothesis
kind: false-statement
title: "FALSE: if $u$ and $v$ are differentiable on $[a,b]$ then $\\int_a^b uv' = u(b)v(b)-u(a)v(a)-\\int_a^b u'v$"
status: draft
origin: session
deps: [thm-integration-by-parts, cex-a-function-with-a-primitive-that-is-not-integrable, thm-continuous-implies-integrable, cor-differentiable-implies-continuous, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-derivative, def-darboux-sums, def-darboux-integral, def-bounded-set, def-continuity-real, def-canonical-natural, lem-of-naturals-positive, thm-of-archimedean, def-integer-power, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "FALSE: parts without integrability"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Integration by parts (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integration_by_parts"
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
pipeline_run: null
---

## Statement

**False claim:** if $u, v : [a,b] \to \mathbb{R}$ are differentiable at every
point of $[a,b]$ ([[def-derivative]]), then

$$\int_a^b u\,v' \;=\; u(b)v(b) - u(a)v(a) \;-\; \int_a^b u'\,v .$$

That is [[thm-integration-by-parts]] with the hypothesis "$u'$ and $v'$ are
integrable" deleted, and it is false.

**The falsity is undefinedness, not a wrong number.** Take $[a,b] = [0,1]$, let
$u := G$ be the everywhere-differentiable function of
[[cex-a-function-with-a-primitive-that-is-not-integrable]], and let $v(x) := x$.
Then $u$ and $v$ are differentiable at every point of $[0,1]$, and $uv' = G$ is
continuous hence integrable, so the left-hand side exists. But $u'v$ is the
function $x \mapsto x\,G'(x)$, which is **unbounded** on $[0,1]$, hence has no
Darboux sums at all ([[def-darboux-sums]]) and is not Riemann integrable: the
symbol $\int_0^1 u'v$ on the right-hand side does not denote. An equation one of
whose sides is undefined is not a true equation.

**The correct hypothesis, and when it is automatic.**
[[thm-integration-by-parts]] asks that $u'$ and $v'$ be integrable, which is what
makes $(uv)' = u'v + uv'$ integrable and lets the second fundamental theorem be
applied to $uv$. It holds automatically when $u$ and $v$ are continuously
differentiable, since a continuous function on $[a,b]$ is integrable
([[thm-continuous-implies-integrable]]).

## Facts & Assumptions

**Given:** The function $G : [0,1] \to \mathbb{R}$ of [[cex-a-function-with-a-primitive-that-is-not-integrable]], differentiable at every point of $[0,1]$, together with the points $u_n := \alpha_n + \tfrac14 h_n$ of that item, where $\alpha_n = 1/\iota(n+2)$, and $v(x) := x$ on $[0,1]$.

[A1] The false claim above.

[L1] $G$ is differentiable at every point of $[0,1]$, $G'$ is unbounded there, and $G'(u_n) = \tfrac{3}{16}\,\iota(n+2)^{2}$ with $u_n > \alpha_n = 1/\iota(n+2)$ ([[cex-a-function-with-a-primitive-that-is-not-integrable]]).

[L2] $v(x) = x$ is differentiable at every real with $v'(x) = 1$, and every polynomial function is differentiable ([[lem-derivative-of-a-power]], claim 2, [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-integer-power]]).

[L3] A function differentiable at every point of $[0,1]$ is continuous there, and a continuous function on $[0,1]$ is integrable there ([[cor-differentiable-implies-continuous]], [[thm-continuous-implies-integrable]], [[def-continuity-real]], [[def-darboux-integral]]).

[L4] Darboux sums, and hence Riemann integrability, are defined only for bounded functions ([[def-darboux-sums]], [[def-bounded-set]], [[def-darboux-integral]]).

[L5] $\iota(n+2) \ge 2 > 0$, and for every real $w$ there is a natural $n$ with $w < \iota(n+2)$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[thm-of-archimedean]]).

[L6] Ordered-field arithmetic: multiplying an inequality by a positive real preserves it, the order is total and transitive, and a positive real has a positive inverse ([[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]).

## Refutation

**Proof technique:** direct.

1.1 $u := G$ and $v$ are differentiable at every point of $[0,1]$, by [L1] and [L2]; so the hypothesis of [A1] is satisfied by this pair. [given, A1, L1, L2]

2.1 $uv' = G \cdot 1 = G$, which is continuous on $[0,1]$ by [L3] and therefore integrable there; so the left-hand side of [A1] exists. [step 1.1, L2, L3]

2.2 $u'v$ is the function $x \mapsto x\,G'(x)$ on $[0,1]$. At the point $u_n$ its value is $u_n\,G'(u_n) > \alpha_n \cdot \tfrac{3}{16}\iota(n+2)^{2} = \tfrac{3}{16}\,\iota(n+2)$, using $\alpha_n = 1/\iota(n+2) > 0$ and [L1]. [step 1.1, L1, L5, L6]

3.1 Given a real $M \ge 0$, [L5] supplies $n$ with $\tfrac{16}{3}M < \iota(n+2)$, so $u_n G'(u_n) > M$ by step 2.2; hence $u'v$ is unbounded on $[0,1]$. [step 2.2, L5, L6]

4.1 By [L4] the function $u'v$ has no Darboux sums and is not Riemann integrable on $[0,1]$, so the symbol $\int_0^1 u'v$ appearing in [A1] does not denote a real number. [step 3.1, L4]

5.1 So [A1] fails at this pair: its left-hand side is defined by step 2.1 and its right-hand side is not, by step 4.1, and the asserted identity is therefore not a true statement about them. [step 2.1, step 4.1, A1] ∎

## Remarks

- **A second, even simpler witness.** Taking $v \equiv 1$ instead, so $v' = 0$, makes the left-hand side $\int_0^1 0 = 0$ and the right-hand side $G(1)\cdot 1 - G(0)\cdot 1 - \int_0^1 G'$, whose last term is undefined for the same reason. That version is the observation that the second fundamental theorem itself needs its integrability hypothesis; the witness in the refutation is given instead because it keeps both integrands genuinely non-constant.

- **This is the same defect as in the fundamental theorem, seen through a product.** [[thm-integration-by-parts]] is proved by applying [[thm-ftc-second-part]] to $uv$, and that theorem needs $(uv)'$ integrable. Deleting the hypothesis here deletes it there.

- **Nothing is claimed about the identity holding whenever both sides happen to exist.** If $u'$ and $v'$ are integrable the identity is [[thm-integration-by-parts]]; what happens when $u'v$ and $uv'$ are integrable without $u'$ and $v'$ being so is not addressed anywhere on this page.
