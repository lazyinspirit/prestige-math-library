---
id: thm-squeeze-for-function-limits
kind: theorem
title: "If $f \\le g \\le h$ near $c$ and $f$ and $h$ have the same limit at $c$, then so does $g$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-function-limit, def-limit-point-r, def-neighbourhood-r, lem-of-abs-value, lem-of-add-order, def-ordered-field]
justified_by: []
aliases: [thm-sandwich-theorem-for-functions]
landmark: true
short: "squeeze theorem"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Squeeze theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Squeeze_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $c$ be a limit point of $A$
([[def-limit-point-r]]) and let $f, g, h : A \to \mathbb{R}$. Suppose there is a
real $\eta > 0$ with

$$f(x) \le g(x) \le h(x) \qquad \text{for every } x \in A \text{ with } 0 < |x - c| < \eta ,$$

and suppose the limits of $f$ and of $h$ at $c$ exist and are equal, say
$\lim_{x \to c} f(x) = \lim_{x \to c} h(x) = L$ ([[def-function-limit]]). Then
the limit of $g$ at $c$ **exists**, and

$$\lim_{x \to c} g(x) \;=\; \lim_{x \to c} f(x) \;=\; \lim_{x \to c} h(x) \;=\; L .$$

**This is the one result on this page that produces a limit rather than
computing one.** No hypothesis whatever is placed on $g$ beyond the two
inequalities: $g$ may be wildly irregular, as $x \mapsto x\,\psi(1/x)$ on the
companion page is, and the theorem still delivers its limit at $c$.

The proof is a direct $\varepsilon$-$\delta$ argument and uses no choice
principle.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a limit point $c$ of $A$, functions $f, g, h : A \to \mathbb{R}$, a real $\eta > 0$ with $f(x) \le g(x) \le h(x)$ for every $x \in A$ satisfying $0 < |x - c| < \eta$, and a real $L$ with $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} h(x) = L$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$, and likewise for $h$ ([[def-function-limit]]).

[L2] Absolute value: for $t > 0$, $|u| < t$ is equivalent to $-t < u < t$ ([[lem-of-abs-value]]).

[L3] Order arithmetic in $\mathbb{R}$: the order is transitive, and mixed chains compose, so $u < v \le w$ gives $u < w$ and $u \le v < w$ gives $u < w$; adding a constant to an inequality ([[lem-of-add-order]]); of finitely many positive reals the smallest is positive, the order being total ([[def-ordered-field]]). [[lem-of-add-order]] states its moves in their STRICT forms only; the non-strict forms used below follow by adjoining the equality case, in which the two sides coincide, the order being total ([[def-ordered-field]]).

[L4] Neighbourhoods: $N^{*}_{\delta}(c) = \{\, y : 0 < |y - c| < \delta \,\}$, and a smaller radius gives a smaller punctured neighbourhood ([[def-neighbourhood-r]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be an arbitrary real. By [L1] fix reals $\delta_1, \delta_2 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_1$ satisfies $|f(x) - L| < \varepsilon$ and every $x \in A$ with $0 < |x - c| < \delta_2$ satisfies $|h(x) - L| < \varepsilon$; let $\delta$ be the smallest of $\delta_1$, $\delta_2$ and $\eta$, so $\delta > 0$. [L1, L3, L4, choose]

2.1 Let $x \in A$ with $0 < |x - c| < \delta$. Then $0 < |x - c| < \delta_1$ gives $L - \varepsilon < f(x)$, and $0 < |x - c| < \delta_2$ gives $h(x) < L + \varepsilon$, while $0 < |x - c| < \eta$ gives $f(x) \le g(x) \le h(x)$. [step 1.1, L2, L3, L4]

3.1 Chaining those four inequalities, $L - \varepsilon < f(x) \le g(x) \le h(x) < L + \varepsilon$, hence $L - \varepsilon < g(x) < L + \varepsilon$, that is $-\varepsilon < g(x) - L < \varepsilon$, that is $|g(x) - L| < \varepsilon$. [step 2.1, L2, L3]

4.1 So for every real $\varepsilon > 0$ a real $\delta > 0$ has been produced with $|g(x) - L| < \varepsilon$ for every $x \in A$ satisfying $0 < |x - c| < \delta$: the limit of $g$ at $c$ exists and equals $L$. [step 3.1, L1] ∎

## Remarks

- **Where the three hypotheses are spent.** The inequality $f \le g$ is used only for the lower estimate and $g \le h$ only for the upper one; the equality of the two outer limits is what makes the two estimates close on the same number $L$. Drop it and the argument gives only $\lim f \le \liminf$-style information, which this page does not develop.

- **The order hypothesis is local.** It is imposed only on $A \cap N^{*}_{\eta}(c)$, so the theorem is insensitive to the behaviour of the three functions far from $c$, and to their values at $c$; that is [[lem-limit-is-local]] in action.

- **Typical use.** To prove that a bounded oscillating factor is killed by a factor tending to $0$: if $|u(x)| \le B$ near $c$ then $-B|x - c| \le (x - c)u(x) \le B|x - c|$ near $c$, and both outer functions tend to $0$. That is exactly how $x\,\psi(1/x) \to 0$ is proved on the companion page.

- **The sequential analogue** is [[thm-squeeze]].
