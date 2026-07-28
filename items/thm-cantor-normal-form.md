---
id: thm-cantor-normal-form
kind: theorem
title: "Cantor normal form: every nonzero ordinal is $\\omega^{\\beta_0}\\cdot c_0 + \\cdots + \\omega^{\\beta_{k-1}}\\cdot c_{k-1}$ with $\\beta_0 > \\cdots > \\beta_{k-1}$ and each $c_i$ a nonzero natural number, in exactly one way"
status: draft
origin: session
deps: [thm-ordinal-exponent-laws, thm-ordinal-division-with-remainder, thm-ordinal-arithmetic-monotonicity, thm-ordinal-multiplication-associative-and-left-distributive, thm-ordinal-addition-associative, lem-recursion-on-the-ordinals, def-ordinal-exponentiation, def-ordinal-multiplication, def-ordinal-addition, lem-omega-least-limit-ordinal, thm-transfinite-induction, def-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal, def-natural-numbers]
justified_by: []
aliases: [thm-cnf, cantor-normal-form]
landmark: true
short: "unique base-$\\omega$ normal form of a nonzero ordinal"
proof_strategy: direct
verification:
  precheck: pass
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

Let $\alpha$ be an ordinal ([[def-ordinal]]) with $\alpha > 0$. Then there is a
natural number $k \ge 1$, a strictly decreasing list of ordinals
$\beta_0 > \beta_1 > \cdots > \beta_{k-1}$ and a list of natural numbers
$c_0, \dots, c_{k-1}$ with $0 < c_i < \omega$, such that

$$\alpha \;=\; \omega^{\beta_0} \cdot c_0 \;+\; \omega^{\beta_1} \cdot c_1 \;+\; \cdots \;+\; \omega^{\beta_{k-1}} \cdot c_{k-1},$$

and **$k$, the exponents $\beta_i$ and the coefficients $c_i$ are uniquely
determined by $\alpha$**. This expression is the **Cantor normal form** of
$\alpha$; the uniqueness is what licenses the definite article.

Indices run over the von Neumann natural $k = \{0, 1, \dots, k-1\}$, so the
leading term is the one with index $0$. Sums are unbracketed because ordinal
addition is associative ([[thm-ordinal-addition-associative]]), and powers bind
tighter than products, which bind tighter than sums
([[def-ordinal-exponentiation]]).

**No choice principle is used.**

## Facts & Assumptions

**Given:** An ordinal $\alpha > 0$. A **normal-form datum of length $k$**, for a natural number $k \ge 1$, is a pair of functions $i \mapsto \beta_i$ and $i \mapsto c_i$ with domain the von Neumann natural $k$ ([[def-natural-numbers]]), the $\beta_i$ ordinals with $\beta_i \in \beta_j$ whenever $j \in i$, and the $c_i$ ordinals with $0 < c_i < \omega$. Its **value** is $S_k$, where $S_0 = 0$ and $S_{j^{+}} = S_j + \omega^{\beta_j} \cdot c_j$ for $j \in k$; this recursion is legitimate by [[lem-recursion-on-the-ordinals]], and by associativity of $+$ its value is the unbracketed sum displayed in the Statement.

[L1] Exponent laws for a base $> 1$, in particular for $\omega$: $\beta < \gamma$ implies $\omega^{\beta} < \omega^{\gamma}$; $\beta \le \omega^{\beta}$; $\omega^{\lambda} = \sup\{\omega^{\xi} : \xi \in \lambda\}$ is a limit ordinal for limit $\lambda$; $\omega^{0} = 1$, $\omega^{1} = \omega$, $\omega^{\beta} > 0$, and $\omega^{\beta + \gamma} = \omega^{\beta} \cdot \omega^{\gamma}$ ([[thm-ordinal-exponent-laws]], [[def-ordinal-exponentiation]]).

[L2] For $\mu > 0$ and any $\nu$ there are unique $\xi, \rho$ with $\nu = \mu \cdot \xi + \rho$ and $\rho < \mu$ ([[thm-ordinal-division-with-remainder]]).

[L3] From [[thm-ordinal-arithmetic-monotonicity]]: $0 + \mu = \mu + 0 = \mu$, $1 \cdot \mu = \mu \cdot 1 = \mu$, $\mu \cdot 0 = 0$ (claim (a)); $\nu < \theta$ implies $\mu + \nu < \mu + \theta$, and $\mu \le \mu + \nu$ (claim (b)); $\nu \le \mu + \nu$ (claim (c)); for $\mu > 0$, $\nu < \theta$ implies $\mu\nu < \mu\theta$ (claim (d)); $\mu \le \nu$ implies $\mu\theta \le \nu\theta$ (claim (e)); if $\theta$ is a limit and $D \subseteq \theta$ is nonempty with $\sup D = \theta$ then $\mu + \theta = \sup\{\mu + \eta : \eta \in D\}$ (claim (f)); and $\mu \cdot \lambda$ is a limit ordinal for $\mu > 0$ and $\lambda$ a limit (claim (g)).

[L4] $\mu \cdot (\nu + \theta) = \mu\nu + \mu\theta$, and $\cdot$ is associative ([[thm-ordinal-multiplication-associative-and-left-distributive]]).

[L5] $\mu \cdot 0 = 0$, $\mu \cdot \delta^{+} = \mu \cdot \delta + \mu$, $\mu \cdot \lambda = \sup\{\mu \cdot \xi : \xi \in \lambda\}$ ([[def-ordinal-multiplication]]); $\mu + 0 = \mu$ and $\mu + \delta^{+} = (\mu + \delta)^{+}$ ([[def-ordinal-addition]]).

[L6] $\mu^{+}$ is an ordinal; $\bigcup A$ is an ordinal and the least upper bound of a set $A$ of ordinals; $\mu \subseteq \nu$ iff $\mu \in \nu$ or $\mu = \nu$; $\mu \notin \mu$ ([[lem-ordinal-basics]]); hence $\mu < \nu$ iff $\mu^{+} \le \nu$. Exactly one of $\mu \in \nu$, $\mu = \nu$, $\nu \in \mu$ holds, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]).

[L7] Every ordinal is exactly one of $0$, a successor or a limit; a limit $\lambda$ has $0, 1 \in \lambda$ and is closed under successor ([[def-limit-ordinal]]). $\omega$ is a limit ordinal and every ordinal in $\omega$ is $0$ or a successor (claims (iii) and (iv) of [[lem-omega-least-limit-ordinal]]).

[L8] Transfinite induction over the ordinals: if a property $P$ of ordinals fails at some $\beta_0$, apply [[thm-transfinite-induction]] to the well-order $(\beta_0^{+}, \in)$ and to $S = \{\xi \in \beta_0^{+} : P(\xi)\}$; so if $P$ holds at $\xi$ whenever it holds at every ordinal in $\xi$, then $P$ holds at every ordinal.

## Proof

**Proof technique:** direct.

1.1 Preliminaries on $\omega$ and on powers of $\omega$: for $n, m \in \omega$ one has $n + m \in \omega$, by induction on $m$ over the ordinals in $\omega$, since $n + 0 = n$, since $n + m^{+} = (n + m)^{+} \in \omega$ as $\omega$ is closed under successor, and since no ordinal in $\omega$ is a limit by [L7]; and $\omega^{\delta^{+}} = \omega^{\delta} \cdot \omega = \sup\{\omega^{\delta} \cdot n : n \in \omega\}$ is a limit ordinal, with $\omega^{\delta} \cdot n < \omega^{\delta^{+}}$ for every $n \in \omega$, by [L1], [L5] and claims (d) and (g) of [L3]. [L1, L3, L5, L7]

2.1 **Additive indecomposability:** for every ordinal $\beta$ and every $\mu < \omega^{\beta}$ one has $\mu + \omega^{\beta} = \omega^{\beta}$. By induction on $\beta$. At $\beta = 0$, $\omega^{0} = 1$ forces $\mu = 0$ and $0 + 1 = 1$. At $\beta = \delta^{+}$: $\mu < \omega^{\delta^{+}} = \sup\{\omega^{\delta} n : n \in \omega\}$ gives $n \in \omega$ with $\mu < \omega^{\delta} \cdot n$, and claim (f) of [L3] applied to the nonempty $D = \{\omega^{\delta} \cdot m : m \in \omega\} \subseteq \omega^{\delta^{+}}$ gives $\mu + \omega^{\delta^{+}} = \sup\{\mu + \omega^{\delta} m : m \in \omega\}$, where each $\mu + \omega^{\delta} m \le \omega^{\delta} n + \omega^{\delta} m = \omega^{\delta}(n + m) < \omega^{\delta^{+}}$ by [L4], step 1.1 and claim (d) of [L3]; so $\mu + \omega^{\delta^{+}} \le \omega^{\delta^{+}}$, and the reverse inequality is claim (c) of [L3]. At $\beta = \lambda$ a limit: $\mu < \omega^{\lambda} = \sup\{\omega^{\xi} : \xi \in \lambda\}$ gives $\xi_0 \in \lambda$ with $\mu < \omega^{\xi_0}$, and $D = \{\omega^{\xi} : \xi \in \lambda \text{ and } \xi_0 \le \xi\}$ is nonempty, contained in $\omega^{\lambda}$ and has supremum $\omega^{\lambda}$, because any $\eta < \omega^{\lambda}$ satisfies $\eta < \omega^{\xi}$ for some $\xi \in \lambda$ and $\xi$ may be replaced by the larger of $\xi$ and $\xi_0$; so claim (f) of [L3] gives $\mu + \omega^{\lambda} = \sup\{\mu + \omega^{\xi} : \xi_0 \le \xi \in \lambda\} = \sup\{\omega^{\xi} : \xi_0 \le \xi \in \lambda\} = \omega^{\lambda}$, using the claim at each such $\xi$, legitimate since $\mu < \omega^{\xi_0} \le \omega^{\xi}$. [step 1.1, L1, L3, L4, L5, L6, L7, L8]

2.2 **The leading exponent exists:** for $\alpha > 0$ the set $B = \{\beta \in \alpha^{+} : \omega^{\beta} \le \alpha\}$ contains $0$, because $\omega^{0} = 1 \le \alpha$, and it contains every $\beta$ with $\omega^{\beta} \le \alpha$, because $\beta \le \omega^{\beta} \le \alpha$ by [L1]; it has a greatest element $\beta_0 = \bigcup B$, since $\bigcup B = 0$ forces $B = \{0\}$ and $0 \in B$, since $\bigcup B = \delta^{+}$ gives $\delta \in \beta$ for some $\beta \in B$ and hence $\delta^{+} \le \beta \le \bigcup B = \delta^{+}$ with $\beta \in B$, and since $\bigcup B = \lambda$ a limit gives $\omega^{\xi} < \omega^{\beta} \le \alpha$ for every $\xi \in \lambda$, whence $\omega^{\lambda} = \sup\{\omega^{\xi} : \xi \in \lambda\} \le \alpha$ and $\lambda \in B$; and then $\omega^{\beta_0} \le \alpha < \omega^{\beta_0^{+}}$, the second inequality because $\beta_0^{+} \notin B$. [step 1.1, L1, L6, L7]

3.1 **Closure below a power of $\omega$:** if $\mu < \omega^{\beta}$ and $\nu < \omega^{\beta}$ then $\mu + \nu < \mu + \omega^{\beta} = \omega^{\beta}$, by claim (b) of [L3] and step 2.1. [step 2.1, L3]

3.2 **Existence**, by induction on $\alpha > 0$: take $\beta_0$ from step 2.2, so $\omega^{\beta_0} \le \alpha < \omega^{\beta_0^{+}} = \omega^{\beta_0} \cdot \omega$; divide by $\omega^{\beta_0} > 0$ using [L2] to get $\alpha = \omega^{\beta_0} \cdot c_0 + \rho$ with $\rho < \omega^{\beta_0}$; here $c_0 \ne 0$, since $c_0 = 0$ would give $\alpha = \rho < \omega^{\beta_0} \le \alpha$, and $c_0 < \omega$, since $\omega \le c_0$ would give $\omega^{\beta_0} \cdot \omega \le \omega^{\beta_0} c_0 \le \alpha$ by claims (d) and (b) of [L3], contradicting $\alpha < \omega^{\beta_0} \cdot \omega$. If $\rho = 0$ then $\alpha = \omega^{\beta_0} c_0$ is a normal form of length $1$. Otherwise $0 < \rho < \omega^{\beta_0} \le \alpha$, so the claim at $\rho$ gives a normal-form datum for $\rho$ with leading exponent $\gamma_0$ and leading coefficient $d_0 \ge 1$, and $\omega^{\gamma_0} \le \omega^{\gamma_0} d_0 \le \rho < \omega^{\beta_0}$ by [L3], so $\gamma_0 < \beta_0$ by [L1] and [L6]; prefixing $(\beta_0, c_0)$ to that datum therefore yields a normal-form datum whose value is $\alpha$. [step 2.2, L1, L2, L3, L6, L8]

4.1 **Tail bound:** if $(\beta_i, c_i)_{i \in k}$ is a normal-form datum then the value $\tau$ of its tail $(\beta_i, c_i)_{1 \le i < k}$ satisfies $\tau < \omega^{\beta_0}$; indeed $\tau = 0 < \omega^{\beta_0}$ when $k = 1$, and for $i \ge 1$ each term satisfies $\omega^{\beta_i} c_i < \omega^{\beta_i} \cdot \omega = \omega^{\beta_i^{+}} \le \omega^{\beta_0}$ by claim (d) of [L3], [L1] and $\beta_i^{+} \le \beta_0$, so induction on the number of terms using step 3.1 gives $\tau < \omega^{\beta_0}$. [step 3.1, step 1.1, L1, L3, L6, L7, L8]

5.1 **Uniqueness**, by induction on $\alpha > 0$: let $(\beta_i, c_i)_{i \in k}$ be a normal-form datum of value $\alpha$, with tail value $\tau$, so that $\alpha = \omega^{\beta_0} c_0 + \tau$ with $\tau < \omega^{\beta_0}$ by step 4.1; then $\omega^{\beta_0} = \omega^{\beta_0} \cdot 1 \le \omega^{\beta_0} c_0 \le \alpha$ by [L3], and $\alpha < \omega^{\beta_0} c_0 + \omega^{\beta_0} = \omega^{\beta_0}(c_0 + 1) \le \omega^{\beta_0} \cdot \omega = \omega^{\beta_0^{+}}$ by [L3], [L4] and $c_0 + 1 \le \omega$; so $\omega^{\beta_0} \le \alpha < \omega^{\beta_0^{+}}$, which pins $\beta_0$ down, since a second datum with leading exponent $\gamma_0 \ne \beta_0$ would satisfy the same two inequalities and, say, $\beta_0 < \gamma_0$ would give $\alpha < \omega^{\beta_0^{+}} \le \omega^{\gamma_0} \le \alpha$ by [L1] and [L6]; with $\beta_0$ fixed, the two representations $\alpha = \omega^{\beta_0} c_0 + \tau = \omega^{\beta_0} d_0 + \sigma$ with $\tau, \sigma < \omega^{\beta_0}$ agree by the uniqueness in [L2], so $c_0 = d_0$ and $\tau = \sigma$; and $\tau < \omega^{\beta_0} \le \alpha$, so the claim at $\tau$ makes the two tails identical when $\tau > 0$, while $\tau = 0$ forces both data to have length $1$, since a tail of length at least $1$ has value at least $\omega^{\beta_1} c_1 > 0$. [step 4.1, step 2.2, L1, L2, L3, L4, L6, L8]

6.1 Existence is step 3.2 and uniqueness is step 5.1, so every ordinal $\alpha > 0$ has exactly one Cantor normal form. [step 5.1, step 3.2] ∎

## Remarks

**Where each hypothesis of [[thm-ordinal-exponent-laws]] is spent.** The bound $\beta \le \omega^{\beta}$ is what makes $B$ in step 2.2 a *set*: without it, "the largest $\beta$ with $\omega^{\beta} \le \alpha$" ranges over the ordinals, which is not a set, and Separation has nothing to cut. Continuity of $\beta \mapsto \omega^{\beta}$ at limits is what makes $B$ attain its supremum; without it the maximum could fail to exist and the leading exponent would not be defined.

**Additive indecomposability is the whole content of uniqueness.** Step 2.1 says that adding anything strictly smaller than $\omega^{\beta}$ on the left of $\omega^{\beta}$ changes nothing. Its consequence, step 3.1, is that the ordinals below $\omega^{\beta}$ are closed under addition, and that is exactly why a tail with strictly smaller exponents cannot reach up to the leading term and disturb it.

**Base $\omega$ is not special.** The same argument with $\omega$ replaced by any ordinal $\gamma > 1$ gives a base-$\gamma$ normal form, with coefficients in $\gamma$ rather than in $\omega$. Only the base-$\omega$ case is stated here, because it is the one used, and because its coefficients are then ordinary natural numbers.

**What is not claimed.** Nothing here says the normal form is computable, and nothing here uses or proves anything about $\varepsilon_0$. The ordinals $\alpha$ with $\alpha = \omega^{\alpha}$ have normal form $\omega^{\alpha} \cdot 1$, whose exponent is $\alpha$ itself, so the normal form does not always reduce a problem to strictly smaller data; one such ordinal, $\varepsilon_0$, is exhibited on the companion examples page, where it is shown to satisfy $\omega^{\varepsilon_0} = \varepsilon_0$ and where it is recorded that its *leastness* among such fixed points is not proved.
