---
id: ex-continuous-inverse-gives-the-nth-root
kind: example
title: "The $n$-th root as a continuous inverse: for a natural $n \\ge 1$ the map $x \\mapsto x^{n}$ is continuous and strictly increasing on $[0,\\infty)$ with image $[0,\\infty)$, so its inverse $x \\mapsto x^{1/n}$ is continuous and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [thm-continuous-inverse, thm-continuous-injection-on-an-interval-is-strictly-monotone, def-monotone-function, thm-nth-roots-exist, lem-power-monotone, def-integer-power, def-rational-power, thm-algebra-of-continuous-functions, def-interval, def-continuity-real, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "$x \\mapsto x^{1/n}$ is continuous"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "MATH 320 Lecture Notes, October 21 (Stony Brook University)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math320.F21/lecOct21.pdf"
    - title: "Real Analysis Notes 10 (California State University, Dominguez Hills)"
      url: "https://math.csudh.edu/~pong/a3/Notes_10.html"
pipeline_run: null
---

## Example

Let $n \in \mathbb{N}$ with $n \ge 1$ and put $I := [0,\infty)$
([[def-interval]]) and $p : I \to \mathbb{R}$, $p(x) := x^{n}$
([[def-integer-power]]). Then:

1. $p$ is continuous on $I$ ([[def-continuity-real]]);
2. $p$ is increasing on $I$ ([[def-monotone-function]]), hence injective
   ([[def-injection-surjection-bijection]]);
3. $p[I] = I$;
4. consequently the inverse map $g : I \to I$ of $p$ is continuous on $I$ and
   increasing, and $g(a) = a^{1/n}$ is the unique nonnegative $n$-th root of $a$
   ([[thm-nth-roots-exist]]).

So the $n$-th root function is continuous, and it is obtained from
[[thm-continuous-inverse]] rather than from a direct
$\varepsilon$-$\delta$ estimate.

## Facts & Assumptions

**Given:** A natural $n \ge 1$, the order-convex set $I = [0,\infty)$ and $p : I \to \mathbb{R}$ with $p(x) = x^{n}$.

[L1] Every polynomial function is continuous, in particular $x \mapsto x^{n}$ on any subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], claim 5, [[def-integer-power]]).

[L2] If $0 \le a < b$ and $n \ge 1$ then $a^{n} < b^{n}$; and $a \ge 0$ gives $a^{n} \ge 0$ ([[lem-power-monotone]], claims 1 and 2).

[L3] For every real $a \ge 0$ and every natural $n \ge 1$ there is a unique real $s \ge 0$ with $s^{n} = a$, written $a^{1/n}$ ([[thm-nth-roots-exist]], [[def-rational-power]]).

[L4] A continuous injective function on an order-convex $I \subseteq \mathbb{R}$ is strictly monotone, its image is order-convex, and its inverse on that image is continuous and strictly monotone in the same sense ([[thm-continuous-inverse]], [[thm-continuous-injection-on-an-interval-is-strictly-monotone]], [[def-monotone-function]]).

[L5] $[0,\infty)$ is order-convex ([[def-interval]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1: $p$ is the restriction to $I$ of a polynomial function, hence continuous on $I$. [L1]

1.2 Claim 2: for $0 \le x < y$ one has $x^{n} < y^{n}$ since $n \ge 1$, so $p$ is increasing on $I$; an increasing function is injective. [L2]

1.3 Claim 3: $p[I] \subseteq I$, since $x \ge 0$ gives $x^{n} \ge 0$; and $I \subseteq p[I]$, since for $a \ge 0$ the real $s := a^{1/n} \ge 0$ lies in $I$ and satisfies $p(s) = s^{n} = a$. [L2, L3]

2.1 Claim 4: $I$ is order-convex and $p$ is continuous and injective on it, so by the continuous inverse theorem $p$ is a bijection onto the order-convex set $p[I]$, which is $I$ by step 1.3, and the inverse $g : I \to I$ is continuous and strictly monotone in the same sense as $p$, that is increasing. [step 1.1, step 1.2, step 1.3, L4, L5]

3.1 The value $g(a)$ is the unique $s \ge 0$ with $s^{n} = a$, since $g$ inverts $p$ and $p(s) = s^{n}$; so $g(a) = a^{1/n}$ in the notation of the root theorem. [step 2.1, L3] ∎

## Remarks

- **Why $n \ge 1$.** At $n = 0$ the map $x \mapsto x^{0}$ is constantly $1$
  ([[def-integer-power]]), so it is neither injective nor surjective onto
  $[0,\infty)$, and no inverse exists. Every claim above is stated for
  $n \ge 1$ and the hypothesis is used in step 1.2.

- **Why the domain is $[0,\infty)$ and not $\mathbb{R}$.** For even $n$ the map
  $x \mapsto x^{n}$ is not injective on $\mathbb{R}$, since $(-x)^{n} = x^{n}$,
  so the continuous inverse theorem does not apply there; restricting to the
  nonnegative reals is what makes it injective, and it is also where
  [[thm-nth-roots-exist]] provides the roots.

- **What is gained over the root theorem alone.** [[thm-nth-roots-exist]]
  produces the number $a^{1/n}$ for each $a$ separately and says nothing about
  how it varies with $a$. Claim 4 is the statement that $a \mapsto a^{1/n}$ is a
  continuous increasing function, and it comes from the structure of the
  situation rather than from any estimate on roots.
