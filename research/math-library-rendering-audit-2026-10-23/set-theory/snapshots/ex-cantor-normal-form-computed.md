---
id: ex-cantor-normal-form-computed
kind: example
title: "The Cantor normal form of $(\\omega^{2} + \\omega\\cdot 3 + 5) \\cdot \\omega^{2}$, computed by the division algorithm"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-cantor-normal-form, thm-ordinal-division-with-remainder, thm-ordinal-exponent-laws, thm-ordinal-multiplication-associative-and-left-distributive, thm-ordinal-addition-associative, thm-ordinal-arithmetic-monotonicity, thm-ordinal-arithmetic-agrees-on-omega, def-ordinal-exponentiation, def-ordinal-multiplication, def-ordinal-addition, lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$(\\omega^{2}+\\omega\\cdot3+5)\\cdot\\omega^{2} = \\omega^{4}$"
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
    - title: "A. Marks, Set Theory"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
pipeline_run: null
---

## Example

Put $\alpha = \omega^{2} + \omega \cdot 3 + 5$, which is already in Cantor
normal form ([[thm-cantor-normal-form]]): the exponents $2 > 1 > 0$ strictly
decrease and the coefficients $1, 3, 5$ are nonzero natural numbers, since
$\omega \cdot 3 = \omega^{1} \cdot 3$ and $5 = \omega^{0} \cdot 5$. Then

$$\alpha \cdot \omega^{2} = \omega^{4},$$

whose Cantor normal form is $\omega^{4} \cdot 1$: **the entire tail
$\omega \cdot 3 + 5$ is annihilated by multiplying on the right by
$\omega^{2}$.** Multiplying on the right by a limit ordinal keeps only the
leading behaviour.

Addition behaves quite differently. Also computed below:

$$\big(\omega^{2} + \omega \cdot 3 + 5\big) + \big(\omega \cdot 2 + 7\big) = \omega^{2} + \omega \cdot 5 + 7,$$

where the coefficients of the matching power add and the lower tail of the left
summand is swallowed.

## Facts & Assumptions

**Given:** $\alpha = \omega^{2} + \omega \cdot 3 + 5$, with the operations of [[def-ordinal-addition]], [[def-ordinal-multiplication]] and [[def-ordinal-exponentiation]]; the finite ordinals $2, 3, 4, 5, 7$ are elements of $\omega$ ([[def-natural-numbers]], [[lem-omega-least-limit-ordinal]]). Products bind tighter than sums, so $\omega \cdot 3 + 5$ is $(\omega \cdot 3) + 5$.

[L1] $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$ and $\alpha \cdot \lambda = \sup\{\alpha \cdot \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-multiplication]]); $\alpha^{\delta^{+}} = \alpha^{\delta} \cdot \alpha$ and $\alpha^{0} = 1$ ([[def-ordinal-exponentiation]]); $\mu + 0 = \mu$, $\mu + \delta^{+} = (\mu + \delta)^{+}$ and $\mu + \lambda = \sup\{\mu + \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-addition]]).

[L2] From [[thm-ordinal-arithmetic-monotonicity]]: $1 \cdot \mu = \mu \cdot 1 = \mu$ and $0 + \mu = \mu$ (claim (a)); $\nu < \theta$ implies $\mu + \nu < \mu + \theta$ (claim (b)); for $\mu > 0$, $\nu < \theta$ implies $\mu\nu < \mu\theta$ (claim (d)); $\mu \le \nu$ implies $\mu\gamma \le \nu\gamma$ (claim (e)); $\mu + \lambda = \sup\{\mu + \xi : \xi \in \lambda\}$ and $\mu \cdot \lambda = \sup\{\mu\eta : \eta \in D\}$ for $\mu > 0$, $\lambda$ a limit and $D \subseteq \lambda$ nonempty with $\sup D = \lambda$ (claim (f)).

[L3] $\cdot$ is associative and $\mu(\nu + \theta) = \mu\nu + \mu\theta$ ([[thm-ordinal-multiplication-associative-and-left-distributive]]); $+$ is associative ([[thm-ordinal-addition-associative]]).

[L4] $\alpha^{\beta + \gamma} = \alpha^{\beta} \cdot \alpha^{\gamma}$, $\alpha^{1} = \alpha$, and for $\alpha > 1$ the map $\beta \mapsto \alpha^{\beta}$ is strictly increasing ([[thm-ordinal-exponent-laws]]).

[L5] For $\mu > 0$ every $\nu$ is $\mu \cdot \xi + \rho$ with $\rho < \mu$, uniquely ([[thm-ordinal-division-with-remainder]]); every nonzero ordinal has exactly one Cantor normal form ([[thm-cantor-normal-form]]).

[L6] For $m, n \in \omega$ the ordinals $m + n$ and $m \cdot n$ lie in $\omega$ and agree with the natural-number sum and product ([[thm-ordinal-arithmetic-agrees-on-omega]]).

[L7] $\omega$ is a limit ordinal with $\bigcup \omega = \omega$ ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]]); every ordinal is transitive, $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$, and trichotomy holds ([[def-ordinal]], [[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

## Verification

**Proof technique:** direct.

1.1 Preliminary identities: $\omega^{1} = \omega$ and $\omega^{2} = \omega^{1^{+}} = \omega^{1} \cdot \omega = \omega \cdot \omega$ by [L1] and [L4]; $\omega \cdot 3 + \omega = \omega \cdot 3^{+} = \omega \cdot 4$, $\omega + \omega = \omega \cdot 1 + \omega = \omega \cdot 1^{+} = \omega \cdot 2$, and $\omega^{2} + \omega^{2} = \omega^{2} \cdot 1 + \omega^{2} = \omega^{2} \cdot 2$ by [L1] and [L2]. [L1, L2, L4]

1.2 For $n \in \omega$ the ordinals $2 \cdot n$ and $5 + n$ lie in $\omega$ by [L6], hence are subsets of $\omega$ by [L7]; and $n = 1 \cdot n \le 2 \cdot n$ and $n \le 5 + n$ by [L2], so both $\{2 \cdot n : n \in \omega\}$ and $\{5 + n : n \in \omega\}$ are nonempty subsets of $\omega$ with supremum $\bigcup \omega = \omega$. [L2, L6, L7]

2.1 $\omega^{2} \le \alpha < \omega^{2} \cdot 2$: the first inequality is $\omega^{2} = \omega^{2} + 0 \le \omega^{2} + (\omega \cdot 3 + 5)$ by [L1] and [L2]; for the second, $5 < \omega$ gives $\omega \cdot 3 + 5 < \omega \cdot 3 + \omega = \omega \cdot 4$ by [L2] and step 1.1, and $4 < \omega$ with $\omega > 0$ gives $\omega \cdot 4 < \omega \cdot \omega = \omega^{2}$ by [L2] and step 1.1, so $\alpha < \omega^{2} + \omega^{2} = \omega^{2} \cdot 2$ by [L2] and step 1.1. [step 1.1, L1, L2, L7]

2.2 The addition: $5 + \omega = \sup\{5 + n : n \in \omega\} = \omega$ by [L1] and step 1.2, so $5 + \omega \cdot 2 = 5 + (\omega + \omega) = (5 + \omega) + \omega = \omega + \omega = \omega \cdot 2$ using [L3] and step 1.1; hence $\alpha + (\omega \cdot 2 + 7) = \omega^{2} + \omega \cdot 3 + (5 + \omega \cdot 2) + 7 = \omega^{2} + (\omega \cdot 3 + \omega \cdot 2) + 7 = \omega^{2} + \omega \cdot (3 + 2) + 7 = \omega^{2} + \omega \cdot 5 + 7$, the regrouping by [L3], the last product by left distributivity in [L3] and $3 + 2 = 5$ by [L6]. [step 1.2, step 1.1, L1, L3, L6]

3.1 $\alpha \cdot \omega = \omega^{3}$: by [L1], $\alpha \cdot \omega = \sup\{\alpha \cdot n : n \in \omega\}$, and step 2.1 with claim (e) of [L2] gives $\omega^{2} \cdot n \le \alpha \cdot n \le (\omega^{2} \cdot 2) \cdot n = \omega^{2} \cdot (2 \cdot n)$ for every $n \in \omega$, using associativity of $\cdot$ from [L3]; the suprema of the outer two families are both $\omega^{2} \cdot \omega$, the first by [L1] and the second by claim (f) of [L2] applied to the set $\{2 \cdot n : n \in \omega\}$, which is unbounded in $\omega$ by step 1.2; so $\alpha \cdot \omega = \omega^{2} \cdot \omega = \omega^{2} \cdot \omega^{1} = \omega^{2 + 1} = \omega^{3}$ by [L4]. [step 2.1, step 1.2, step 1.1, L1, L2, L3, L4]

4.1 $\alpha \cdot \omega^{2} = \omega^{4}$: by step 1.1, $\omega^{2} = \omega \cdot \omega$, so associativity in [L3] gives $\alpha \cdot \omega^{2} = \alpha \cdot (\omega \cdot \omega) = (\alpha \cdot \omega) \cdot \omega = \omega^{3} \cdot \omega = \omega^{3} \cdot \omega^{1} = \omega^{3 + 1} = \omega^{4}$ by step 3.1 and [L4]. [step 3.1, step 1.1, L3, L4]

5.1 The Cantor normal form of $\omega^{4}$ is $\omega^{4} \cdot 1$: the largest $\beta$ with $\omega^{\beta} \le \omega^{4}$ is $4$, because $\beta \mapsto \omega^{\beta}$ is strictly increasing by [L4] and $4 < \beta$ would give $\omega^{4} < \omega^{\beta}$; dividing by $\omega^{4} > 0$ as in [L5] gives $\omega^{4} = \omega^{4} \cdot 1 + 0$ with remainder $0 < \omega^{4}$, so the datum of length $1$ with exponent $4$ and coefficient $1$ has value $\omega^{4}$, and it is the only normal form by the uniqueness in [L5]. [step 4.1, L1, L2, L4, L5]

6.1 So $(\omega^{2} + \omega \cdot 3 + 5) \cdot \omega^{2} = \omega^{4}$, with Cantor normal form $\omega^{4} \cdot 1$, while $(\omega^{2} + \omega \cdot 3 + 5) + (\omega \cdot 2 + 7) = \omega^{2} + \omega \cdot 5 + 7$. [step 5.1, step 4.1, step 2.2] ∎

## Remarks

**Why the tail vanishes under multiplication on the right.** The squeeze in step 3.1 is the whole mechanism: $\alpha$ is trapped between $\omega^{2}$ and $\omega^{2} \cdot 2$, and multiplying either bound on the right by $\omega$ gives $\omega^{3}$, because $\omega^{2} \cdot 2 \cdot n = \omega^{2} \cdot (2n)$ runs through the same cofinal family as $\omega^{2} \cdot n$. Anything of the form "leading term plus smaller stuff" therefore behaves, under multiplication by a limit on the right, exactly like its leading term.

**Why the tail does not vanish under addition.** In step 2.2 the lower part of the left summand, here $5$, is absorbed by the leading term of the right summand, but the term $\omega^{2}$ of the left summand survives, and the two coefficients of $\omega^{1}$ add. The general rule is the same computation: adding on the left of $\omega^{\beta}$ anything smaller than $\omega^{\beta}$ changes nothing, which is the additive indecomposability used inside the proof of [[thm-cantor-normal-form]].

**A check on the answer.** $\omega^{4}$ has Cantor normal form of length $1$, so $\alpha \cdot \omega^{2}$ is a power of $\omega$; that is consistent with the previous remark, since $\alpha$ has leading term $\omega^{2} \cdot 1$ and $\omega^{2} \cdot \omega^{2} = \omega^{4}$ by the sum law in [L4].
