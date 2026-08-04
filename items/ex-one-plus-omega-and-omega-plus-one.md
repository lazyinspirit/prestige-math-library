---
id: ex-one-plus-omega-and-omega-plus-one
kind: example
title: "$1 + \\omega = \\omega$ and $\\omega + 1 > \\omega$, computed both from the recursion and as order types"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordinal-addition, lem-ordinal-sum-as-an-order-type, thm-mostowski-collapse, def-order-isomorphism, thm-ordinal-arithmetic-monotonicity, thm-ordinal-arithmetic-agrees-on-omega, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "the two computations of $1+\\omega$ and $\\omega+1$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Ordinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 2 (Ordinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
    - title: "R. Moosa, Set Theory course notes"
      url: "https://www.math.uwaterloo.ca/~rmoosa/pm433-notes.pdf"
pipeline_run: null
---

## Example

The two smallest infinite sums behave differently:

$$1 + \omega = \omega, \qquad \omega + 1 = \omega^{+} > \omega.$$

Each is computed twice below: once from the recursive clauses of
[[def-ordinal-addition]], and once from the order-type description of
[[lem-ordinal-sum-as-an-order-type]], where $\alpha + \beta$ is the order type
of a copy of $\alpha$ followed by a copy of $\beta$. The two routes are
independent, and agreeing is the point of the exercise.

In pictures: putting one extra point **before** a copy of $\omega$ gives a copy
of $\omega$ again, since the result still looks like $0, 1, 2, \dots$; putting
one extra point **after** it gives something with a greatest element, which
$\omega$ does not have.

## Facts & Assumptions

**Given:** The ordinals with the addition of [[def-ordinal-addition]], and $\omega$ the least limit ordinal ([[lem-omega-least-limit-ordinal]], [[def-natural-numbers]]).

[L1] $\alpha + 0 = \alpha$, $\alpha + 1 = \alpha^{+}$, and $\alpha + \lambda = \bigcup\{\alpha + \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-addition]]).

[L2] $\beta \le \alpha + \beta$ (claim (c) of [[thm-ordinal-arithmetic-monotonicity]]).

[L3] For $m, n \in \omega$ the ordinal $m + n$ lies in $\omega$ (claim (a) of [[thm-ordinal-arithmetic-agrees-on-omega]]).

[L4] $\omega$ is a limit ordinal, so $\bigcup \omega = \omega$ and $\omega$ is closed under successor; every nonzero natural number is a successor, and every ordinal in $\omega$ is $0$ or a successor (claims (iii) and (iv) of [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]).

[L5] Every ordinal is transitive, $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

[L6] $\alpha + \beta = \mathrm{ot}(\alpha \oplus \beta)$, where $\alpha \oplus \beta$ is a copy of $\alpha$ with a copy of $\beta$ placed entirely above it ([[lem-ordinal-sum-as-an-order-type]]); every well-order has exactly one order type and order isomorphic well-orders have the same one ([[thm-mostowski-collapse]]); a strictly increasing bijection between total orders is an order isomorphism ([[def-order-isomorphism]]).

## Verification

**Proof technique:** direct.

1.1 From the recursion: for $n \in \omega$ the ordinal $1 + n$ lies in $\omega$ by [L3], hence $1 + n \subseteq \omega$ by [L5]; and $n \le 1 + n$ by [L2], hence $n \subseteq 1 + n$. [L2, L3, L5]

1.2 From the recursion: $\omega + 1 = \omega^{+} = \omega \cup \{\omega\}$ by [L1], so $\omega \in \omega + 1$ while $\omega \notin \omega$ by [L5], giving $\omega + 1 \ne \omega$ and $\omega < \omega + 1$. [L1, L5]

2.1 From the recursion: $1 + \omega = \bigcup\{1 + n : n \in \omega\}$ by [L1], and this equals $\omega$, since it is contained in $\omega$ by step 1.1 and contains $\bigcup\{n : n \in \omega\} = \bigcup \omega = \omega$ by step 1.1 and [L4]. [step 1.1, L1, L4]

2.2 From order types: the map $u : 1 \oplus \omega \to \omega$ with $u(0,0) = 0$ and $u(1,n) = n^{+}$ is a bijection, because every nonzero natural number is a successor by [L4] and $n \mapsto n^{+}$ is injective, and it is strictly increasing, because $(0,0)$ is below every $(1,n)$ and $u(0,0) = 0 \in n^{+}$, while $(1,m) < (1,n)$ means $m \in n$ and then $m^{+} \in n^{+}$ by [L5]; so $1 + \omega = \mathrm{ot}(1 \oplus \omega) = \mathrm{ot}(\omega) = \omega$ by [L6]. [step 1.2, L4, L5, L6]

2.3 From order types: $\omega \oplus 1$ has a greatest element, namely the single point of its upper copy, whereas $\omega$ has none, since $\xi \in \omega$ implies $\xi \in \xi^{+} \in \omega$ by [L4]; so the two are not order isomorphic and $\omega + 1 = \mathrm{ot}(\omega \oplus 1) \ne \mathrm{ot}(\omega) = \omega$ by [L6]. [step 1.2, L4, L5, L6]

3.1 Both routes give $1 + \omega = \omega$ and $\omega + 1 \ne \omega$, so $1 + \omega \ne \omega + 1$; explicitly $1 + \omega = \omega < \omega + 1$. [step 2.1, step 2.2, step 2.3, step 1.2] ∎

## Remarks

**What the two routes cost.** The recursive computation needs the limit clause of [[def-ordinal-addition]] together with the fact that $\omega$ is closed under adding a natural number, which is [[thm-ordinal-arithmetic-agrees-on-omega]]. The order-type computation needs only an explicit bijection and [[lem-ordinal-sum-as-an-order-type]]. Neither is shorter than the other; the second is the one that generalises, since it makes the answer visible before it is computed.

**This is the whole of non-commutativity, in miniature.** The general statement is [[fs-ordinal-addition-is-commutative]], and its proof is exactly the computation above. Everything else about the failure of commutativity is a variation on prepending versus appending.

**$\omega + 1$ is not $\omega$ even though the two sets have the same size.** $\omega + 1 = \omega \cup \{\omega\}$ is countably infinite, being $\omega$ with one point added, so the difference between $\omega$ and $\omega + 1$ is entirely a difference of order type. That distinction is taken up in [[ex-omega-plus-omega-is-countable]].
