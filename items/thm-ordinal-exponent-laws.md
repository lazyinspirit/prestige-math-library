---
id: thm-ordinal-exponent-laws
kind: theorem
title: "$\\alpha^{\\beta+\\gamma} = \\alpha^{\\beta}\\cdot\\alpha^{\\gamma}$ and $(\\alpha^{\\beta})^{\\gamma} = \\alpha^{\\beta\\cdot\\gamma}$; and for $\\alpha > 1$ exponentiation is strictly increasing with $\\beta \\le \\alpha^{\\beta}$"
status: published
origin: session
deps: [def-ordinal-exponentiation, def-ordinal-multiplication, def-ordinal-addition, thm-ordinal-multiplication-associative-and-left-distributive, thm-ordinal-arithmetic-monotonicity, thm-transfinite-induction, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal]
justified_by: []
aliases: [thm-ordinal-exponentiation-laws]
landmark: true
short: "exponent laws, strict monotonicity, continuity, $\\beta \\le \\alpha^{\\beta}$"
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
pipeline_run: null
---

## Statement

Let $\alpha$, $\beta$, $\gamma$ be ordinals ([[def-ordinal]]) and $\lambda$ a
limit ordinal, with $\cdot$ and $\alpha^{\beta}$ as in
[[def-ordinal-multiplication]] and [[def-ordinal-exponentiation]]. Then:

**(a) Base values.** $\alpha^{1} = \alpha$; $1^{\beta} = 1$; $0^{\beta} = 0$ for
every $\beta > 0$; $\alpha^{\beta} > 0$ whenever $\alpha > 0$; and
$\alpha^{\beta} > 1$ whenever $\alpha > 1$ and $\beta > 0$.

**(b) Strictly increasing in the exponent, for $\alpha > 1$.**
$\beta < \gamma$ implies $\alpha^{\beta} < \alpha^{\gamma}$.

**(c) Continuity in the exponent, for $\alpha > 1$.**
$\alpha^{\lambda} = \sup\{\alpha^{\eta} : \eta \in D\}$ for every nonempty
$D \subseteq \lambda$ with $\sup D = \lambda$; in particular
$\alpha^{\lambda} = \sup\{\alpha^{\beta} : \beta \in \lambda\}$, and
$\alpha^{\lambda}$ is a limit ordinal.

**(d) The fixed-point bound, for $\alpha > 1$.** $\beta \le \alpha^{\beta}$ for
every ordinal $\beta$.

**(e) Sum law.** $\alpha^{\beta + \gamma} = \alpha^{\beta} \cdot \alpha^{\gamma}$
for all ordinals $\alpha$, $\beta$, $\gamma$.

**(f) Product law.** $(\alpha^{\beta})^{\gamma} = \alpha^{\beta \cdot \gamma}$
for all ordinals $\alpha$, $\beta$, $\gamma$.

Clause (d) is what makes "the largest $\beta$ with $\omega^{\beta} \le \alpha$"
a legitimate object when the Cantor normal form is extracted later on this page:
it bounds the candidates by $\alpha$ itself, and clause (c) is what makes the
collection of candidates attain its supremum.

**No choice principle is used.** Note that the law
$(\alpha \cdot \beta)^{\gamma} = \alpha^{\gamma} \cdot \beta^{\gamma}$ is **not**
claimed and is **not** true; the Remarks below compute a witness at
$\alpha = \omega$, $\beta = \gamma = 2$.

## Facts & Assumptions

**Given:** Ordinals $\alpha$, $\beta$, $\gamma$ and a limit ordinal $\lambda$. For a set $A$ of ordinals, $\sup A = \bigcup A$ is its least upper bound ([[lem-ordinal-basics]], claim (e)).

[L1] $\alpha^{0} = 1$, $\alpha^{\delta^{+}} = \alpha^{\delta} \cdot \alpha$, and $\alpha^{\lambda} = \sup\{\alpha^{\beta} : 0 < \beta < \lambda\}$ for limit $\lambda$ ([[def-ordinal-exponentiation]]).

[L2] $\alpha \cdot 0 = 0$, $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$, and $\alpha \cdot \lambda = \sup\{\alpha \cdot \xi : \xi \in \lambda\}$ for limit $\lambda$ ([[def-ordinal-multiplication]]); $\alpha + 0 = \alpha$, $\alpha + \delta^{+} = (\alpha + \delta)^{+}$, and $\alpha + \lambda = \sup\{\alpha + \xi : \xi \in \lambda\}$ ([[def-ordinal-addition]]).

[L3] From [[thm-ordinal-arithmetic-monotonicity]]: $1 \cdot \mu = \mu \cdot 1 = \mu$, $\mu \cdot 0 = 0 \cdot \mu = 0$ and $0 + \mu = \mu + 0 = \mu$ (claim (a)); for $\mu > 0$, $\nu < \theta$ implies $\mu\nu < \mu\theta$, and $\mu\nu = 0$ exactly when $\mu = 0$ or $\nu = 0$ (claim (d)); if $\theta$ is a limit and $D \subseteq \theta$ is nonempty with $\sup D = \theta$, then $\mu \cdot \theta = \sup\{\mu\eta : \eta \in D\}$ for $\mu > 0$ (claim (f)); and $\mu + \lambda$, and $\mu \cdot \lambda$ for $\mu > 0$, are limit ordinals (claim (g)).

[L4] Ordinal multiplication is associative and $\mu(\nu + \theta) = \mu\nu + \mu\theta$ ([[thm-ordinal-multiplication-associative-and-left-distributive]]).

[L5] $\mu^{+}$ is an ordinal, $\mu \subseteq \nu$ if and only if $\mu \in \nu$ or $\mu = \nu$, and $\mu \notin \mu$ (claims (b), (c), (f) of [[lem-ordinal-basics]]); consequently $\mu < \nu$ if and only if $\mu^{+} \le \nu$; and exactly one of $\mu \in \nu$, $\mu = \nu$, $\nu \in \mu$ holds ([[lem-ordinal-trichotomy]]).

[L6] Every ordinal is exactly one of $0$, a successor, or a limit; a limit $\lambda$ satisfies $0 \in \lambda$, $1 \in \lambda$ and $\xi \in \lambda \Rightarrow \xi^{+} \in \lambda$ ([[def-limit-ordinal]], [[lem-ordinal-basics]]).

[L7] Transfinite induction over the ordinals: if a property $P$ of ordinals fails at some $\beta_0$, apply [[thm-transfinite-induction]] to the well-order $(\beta_0^{+}, \in)$ and to $S = \{\xi \in \beta_0^{+} : P(\xi)\}$; since every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]), if $P$ holds at $\xi$ whenever it holds at every ordinal in $\xi$, then $P$ holds at every ordinal.

## Proof

**Proof technique:** direct.

1.1 $\alpha^{1} = \alpha^{0^{+}} = \alpha^{0} \cdot \alpha = 1 \cdot \alpha = \alpha$. [L1, L3]

1.2 $1^{\beta} = 1$ for every $\beta$, by induction: $1^{0} = 1$; $1^{\delta^{+}} = 1^{\delta} \cdot 1 = 1 \cdot 1 = 1$; and at a limit $\lambda$ the set $\{1^{\beta} : 0 < \beta < \lambda\}$ is $\{1\}$, nonempty because $1 \in \lambda$, so its supremum is $\bigcup\{1\} = 1$. [L1, L3, L6, L7]

1.3 $0^{\beta} = 0$ for every $\beta > 0$, by induction: at a successor $\delta^{+}$ this needs no hypothesis, since $0^{\delta^{+}} = 0^{\delta} \cdot 0 = 0$ by [L3]; and at a limit $\lambda$ every $\beta$ with $0 < \beta < \lambda$ has $0^{\beta} = 0$, so $0^{\lambda} = \bigcup\{0\} = 0$, the set being nonempty because $1 \in \lambda$. [L1, L3, L6, L7]

2.1 $\alpha^{\beta} > 0$ for every $\beta$, whenever $\alpha > 0$, by induction: $\alpha^{0} = 1 > 0$; $\alpha^{\delta^{+}} = \alpha^{\delta} \cdot \alpha > 0$ by [L3] since both factors are positive; and at a limit $\lambda$, $\alpha^{1} = \alpha$ belongs to the set whose supremum is $\alpha^{\lambda}$, because $1 \in \lambda$ and $1 \ne 0$, so $\alpha^{\lambda} \ge \alpha > 0$. [step 1.1, L1, L3, L5, L6, L7]

3.1 Clause (b): let $\alpha > 1$; by induction on $\gamma$, every $\beta \in \gamma$ satisfies $\alpha^{\beta} \in \alpha^{\gamma}$. At $\gamma = 0$ there is nothing to prove. At $\gamma = \delta^{+}$, $\beta \le \delta$ gives $\alpha^{\beta} \le \alpha^{\delta}$ using the claim at $\delta$, and $\alpha^{\delta} = \alpha^{\delta} \cdot 1 < \alpha^{\delta} \cdot \alpha = \alpha^{\delta^{+}}$ by [L3], since $\alpha^{\delta} > 0$ by step 2.1 and $1 < \alpha$. At $\gamma = \lambda$ a limit: if $\beta = 0$ then $\alpha^{0} = 1 < \alpha = \alpha^{1} \le \alpha^{\lambda}$, because $1 \in \lambda$ puts $\alpha^{1}$ in the set whose supremum is $\alpha^{\lambda}$; and if $\beta > 0$ then $\beta^{+} \in \lambda$ with $\beta^{+} \ne 0$, so $\alpha^{\beta} < \alpha^{\beta^{+}} \le \alpha^{\lambda}$ by the successor computation just made. [step 1.1, step 2.1, L1, L3, L5, L6, L7]

4.1 Clause (c): let $\alpha > 1$. Including the term at $\beta = 0$ does not change the supremum in [L1], since $\alpha^{0} = 1 \le \alpha^{1}$ and $1 \in \lambda$, so $\alpha^{\lambda} = \sup\{\alpha^{\beta} : \beta \in \lambda\}$. If $D \subseteq \lambda$ is nonempty with $\sup D = \lambda$, then $\{\alpha^{\eta} : \eta \in D\}$ is a subset of that set, giving $\le$; conversely each $\beta \in \lambda = \bigcup D$ lies in some $\eta \in D$, so $\alpha^{\beta} < \alpha^{\eta}$ by step 3.1, giving $\ge$. [step 3.1, step 1.1, L1, L5, L6]

4.2 The second half of clause (c): for $\alpha > 1$ and $\lambda$ a limit, $\alpha^{\lambda} \ne 0$ by step 2.1, and $\alpha^{\lambda}$ is not a successor, since $\alpha^{\lambda} = \mu^{+}$ would put $\mu$ in $\alpha^{\beta}$ for some $\beta$ with $0 < \beta < \lambda$, whence $\mu^{+} \le \alpha^{\beta} < \alpha^{\beta^{+}} \le \alpha^{\lambda} = \mu^{+}$ by step 3.1 and [L6], which [L5] forbids; so $\alpha^{\lambda}$ is a limit ordinal. [step 3.1, step 2.1, L1, L5, L6]

4.3 Clause (d): let $\alpha > 1$; by induction on $\beta$. At $\beta = 0$, $0 \le 1 = \alpha^{0}$. At $\beta = \delta^{+}$, $\delta \le \alpha^{\delta} < \alpha^{\delta^{+}}$ by step 3.1, so $\delta < \alpha^{\delta^{+}}$ and hence $\delta^{+} \le \alpha^{\delta^{+}}$ by [L5]. At $\beta = \lambda$ a limit, every $\xi \in \lambda$ satisfies $\xi \le \alpha^{\xi} < \alpha^{\lambda}$ by step 3.1, so $\xi \in \alpha^{\lambda}$, giving $\lambda \subseteq \alpha^{\lambda}$. [step 3.1, L1, L5, L6, L7]

4.4 The last part of clause (a): for $\alpha > 1$ and $\beta > 0$, step 3.1 applied to $0 \in \beta$ gives $1 = \alpha^{0} < \alpha^{\beta}$. [step 3.1, L1]

5.1 Clause (e), by induction on $\gamma$. At $\gamma = 0$: $\alpha^{\beta + 0} = \alpha^{\beta} = \alpha^{\beta} \cdot 1 = \alpha^{\beta} \cdot \alpha^{0}$. At $\gamma = \delta^{+}$, assuming the claim at $\delta$: $\alpha^{\beta + \delta^{+}} = \alpha^{(\beta + \delta)^{+}} = \alpha^{\beta + \delta} \cdot \alpha = (\alpha^{\beta} \cdot \alpha^{\delta}) \cdot \alpha = \alpha^{\beta} \cdot (\alpha^{\delta} \cdot \alpha) = \alpha^{\beta} \cdot \alpha^{\delta^{+}}$, the fourth equality by [L4]. At $\gamma = \lambda$ a limit there are three cases. If $\alpha = 0$ then $\beta + \lambda$ is a limit and so nonzero, giving $0^{\beta + \lambda} = 0$ by step 1.3, while $0^{\beta} \cdot 0^{\lambda} = 0^{\beta} \cdot 0 = 0$ by step 1.3 and [L3]. If $\alpha = 1$ both sides are $1$ by step 1.2 and [L3]. If $\alpha > 1$ then $D = \{\beta + \xi : \xi \in \lambda\}$ is a nonempty subset of the limit ordinal $\beta + \lambda$ with supremum $\beta + \lambda$ by [L2] and [L3], so step 4.1 gives $\alpha^{\beta + \lambda} = \sup\{\alpha^{\beta + \xi} : \xi \in \lambda\} = \sup\{\alpha^{\beta} \cdot \alpha^{\xi} : \xi \in \lambda\}$ by the claim at each $\xi$; and $E = \{\alpha^{\xi} : \xi \in \lambda\}$ is a nonempty subset of the limit ordinal $\alpha^{\lambda}$ with supremum $\alpha^{\lambda}$ by steps 2.1, 3.1 and 4.2, so [L3] with $\alpha^{\beta} > 0$ gives $\alpha^{\beta} \cdot \alpha^{\lambda} = \sup\{\alpha^{\beta} \cdot \alpha^{\xi} : \xi \in \lambda\}$; the two suprema are of the same set. [step 4.1, step 4.2, step 3.1, step 1.2, step 1.3, step 2.1, L1, L2, L3, L4, L6, L7]

6.1 Clause (f), by induction on $\gamma$. At $\gamma = 0$: $(\alpha^{\beta})^{0} = 1 = \alpha^{0} = \alpha^{\beta \cdot 0}$ by [L1] and [L3]. At $\gamma = \delta^{+}$, assuming the claim at $\delta$: $(\alpha^{\beta})^{\delta^{+}} = (\alpha^{\beta})^{\delta} \cdot \alpha^{\beta} = \alpha^{\beta\delta} \cdot \alpha^{\beta} = \alpha^{\beta\delta + \beta} = \alpha^{\beta \cdot \delta^{+}}$, the third equality by step 5.1 and the fourth by [L2]. At $\gamma = \lambda$ a limit there are four cases. If $\beta = 0$ then both sides are $1$, by step 1.2 and [L1] and [L3]. If $\beta > 0$ and $\alpha = 0$ then the left side is $0^{\lambda} = 0$ by step 1.3 applied twice, while $\beta \cdot \lambda$ is a limit by [L3] and so nonzero, making the right side $0$ as well. If $\beta > 0$ and $\alpha = 1$ both sides are $1$ by step 1.2. If $\beta > 0$ and $\alpha > 1$ then $\alpha^{\beta} > 1$ by step 4.4, so step 4.1 applied with base $\alpha^{\beta}$ gives $(\alpha^{\beta})^{\lambda} = \sup\{(\alpha^{\beta})^{\xi} : \xi \in \lambda\} = \sup\{\alpha^{\beta\xi} : \xi \in \lambda\}$ by the claim at each $\xi$; and $D = \{\beta\xi : \xi \in \lambda\}$ is a nonempty subset of the limit ordinal $\beta \cdot \lambda$ with supremum $\beta \cdot \lambda$ by [L2] and [L3], so step 4.1 applied with base $\alpha$ gives $\alpha^{\beta \cdot \lambda} = \sup\{\alpha^{\beta\xi} : \xi \in \lambda\}$; the two suprema are of the same set. [step 5.1, step 4.4, step 4.1, step 1.2, step 1.3, L1, L2, L3, L6, L7]

7.1 Clauses (a) to (f) are established. [step 6.1, step 5.1, step 4.1, step 4.2, step 4.3, step 4.4, step 3.1, step 1.1, step 1.2, step 1.3, step 2.1] ∎

## Remarks

**What clause (d) is for, and why it is not a fixed-point theorem.** $\beta \le \alpha^{\beta}$ says only that the exponential never falls below the identity. It does **not** say that $\beta = \alpha^{\beta}$ has a solution; that it does is a separate matter, exhibited by hand at $\varepsilon_0$ on the companion examples page and proved there from clause (c), not from any general fixed-point theory. The inequality is used in [[thm-cantor-normal-form]] to bound the exponents that can occur, which is what turns "the largest $\beta$ with $\omega^{\beta} \le \alpha$" into a search over a set.

**The law that is false, computed.** $(\alpha \cdot \beta)^{\gamma} = \alpha^{\gamma} \cdot \beta^{\gamma}$ fails at $\alpha = \omega$, $\beta = \gamma = 2$. On one side, clause (f) is not available, so compute directly: $(\omega \cdot 2)^{2} = (\omega \cdot 2) \cdot (\omega \cdot 2) = ((\omega \cdot 2) \cdot \omega) \cdot 2$ by associativity of $\cdot$, and $(\omega \cdot 2) \cdot \omega = \sup\{(\omega \cdot 2) \cdot n : n \in \omega\} = \sup\{\omega \cdot (2 \cdot n) : n \in \omega\} = \omega \cdot \omega = \omega^{2}$, the last step because $\{2 \cdot n : n \in \omega\}$ is unbounded in $\omega$ and $\cdot$ is continuous on the right (claim (f) of [[thm-ordinal-arithmetic-monotonicity]]); so $(\omega \cdot 2)^{2} = \omega^{2} \cdot 2$. On the other side $\omega^{2} \cdot 2^{2} = \omega^{2} \cdot 4$, and $\omega^{2} \cdot 2 \ne \omega^{2} \cdot 4$ by left cancellation for $\cdot$. The failure is the exponential shadow of the failure of commutativity, and it is the reason clause (f) is stated with the exponent, not the base, distributing.

**The three degenerate bases.** $\alpha = 0$ and $\alpha = 1$ have to be separated in every limit case, because clause (c) needs $\alpha > 1$: at $\alpha = 1$ the function is constant and at $\alpha = 0$ it is eventually constant, so neither is strictly increasing and neither has a limit ordinal as its value at a limit. Skipping those cases is the standard way to produce a proof that is wrong exactly at $\alpha \le 1$.
