---
id: cex-evt-and-ivt-fail-over-a-non-complete-field
kind: counterexample
title: "On a closed interval of $\\mathbb{Q}$ there is a continuous unbounded function, a bounded one with no maximum, and one without the intermediate value property"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sequences-in-an-ordered-field, def-completeness-properties, def-rationals, thm-rat-ordered-field, lem-rat-archimedean, thm-of-square-roots, fs-sqrt2-rational, def-integer-power, lem-power-monotone, lem-bernoulli-inequality, thm-recursion, thm-induction-principle, lem-of-abs-value, lem-of-triangle-inequality, lem-of-inverse-positive, lem-of-sign-rules, lem-of-add-order, lem-of-naturals-positive, def-ordered-field, def-complete-ordered-field, def-field]
justified_by: []
aliases: []
landmark: true
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
    - title: "Extreme value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extreme_value_theorem"
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement refuted

**The notion of continuity used here is stated in full, and is not imported.**
Let $F$ be an ordered field, $D \subseteq F$ and $\varphi : D \to F$. Say
$\varphi$ is **continuous at** $c \in D$ when

$$\text{for every } \varepsilon > 0 \text{ in } F \text{ there is } \delta > 0 \text{ in } F \text{ with } |\varphi(x) - \varphi(c)| < \varepsilon \text{ whenever } x \in D \text{ and } |x - c| < \delta,$$

and **continuous on $D$** when it is continuous at every point of $D$. This is
the ordinary $\varepsilon$-$\delta$ condition, read entirely inside $F$. Nothing
below cites a definition of continuity from elsewhere in this library, because
there is none yet.

**Refuted claim:** over every ordered field $F$, a function
$\varphi : [a,b]_F \to F$ that is continuous on the closed interval $[a,b]_F$
([[def-sequences-in-an-ordered-field]]) is bounded there, attains a maximum
there, and takes every value between $\varphi(a)$ and $\varphi(b)$. In other
words, the extreme value theorem and the intermediate value theorem hold over an
arbitrary ordered field.

The witness is $F = \mathbb{Q}$ and $D = [0,2]_{\mathbb{Q}}$, with three
functions, one for each clause:

$$f(x) = \frac{1}{x^2 - 2}, \qquad g(x) = -\,(x^2-2)^2, \qquad h(x) = x^2 - 2 .$$

All three are continuous on $D$ in the sense above. $f$ is unbounded; $g$ is
bounded and has no maximum; $h$ satisfies $h(0) = -2 < 0 < 2 = h(2)$ and never
takes the value $0$. What $\mathbb{Q}$ lacks is the least-upper-bound property
(LUB) of [[def-completeness-properties]], and each of the three clauses fails
because of that single omission.

## Facts & Assumptions

**Given:** The ordered field $\mathbb{Q}$; the set $D := [0,2]_{\mathbb{Q}} = \{x \in \mathbb{Q} : 0 \le x \le 2\}$; the functions $f, g, h$ above; and the map $T(x) := (2x+2)(x+2)^{-1}$.

[L1] $\mathbb{Q}$ is an ordered field ([[thm-rat-ordered-field]], [[def-rationals]], [[def-field]], [[def-ordered-field]]) and is Archimedean ([[lem-rat-archimedean]]).

[L2] No rational squares to $2$ ([[fs-sqrt2-rational]]).

[L3] In a complete ordered field every element $\ge 0$ has a square root ([[thm-of-square-roots]], [[def-complete-ordered-field]]).

[L4] Closed intervals $[a,b]_F$ of an ordered field ([[def-sequences-in-an-ordered-field]]); the properties (LUB) and the rest ([[def-completeness-properties]]).

[L5] Absolute value: $|uv| = |u||v|$, $|u| \ge 0$, $|u| = u$ for $u \ge 0$, and $|u| < c$ exactly when $-c < u < c$ ([[lem-of-abs-value]]); $|u+v| \le |u|+|v|$ ([[lem-of-triangle-inequality]]).

[L6] Powers: $a^0 = 1$, $a^{n+1} = a^n a$ ([[def-integer-power]]); for $0 \le a < b$ and $n \ge 1$, $a^n < b^n$ ([[lem-power-monotone]]); $(1+x)^n \ge 1 + nx$ for $x \ge -1$ ([[lem-bernoulli-inequality]]).

[L7] Recursion theorem ([[thm-recursion]]) and induction principle ([[thm-induction-principle]]).

[L8] Order arithmetic: a positive element is invertible with positive inverse and reciprocation reverses the order ([[lem-of-inverse-positive]]); for $c > 0$, $a < b$ if and only if $ac < bc$ ([[lem-of-sign-rules]]); adding a constant preserves the order and inequalities add ([[lem-of-add-order]]); canonical naturals are positive ([[lem-of-naturals-positive]]); the order is total and transitive ([[def-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 For every $x \in D$ one has $x^2 \ne 2$, so $x^2 - 2 \ne 0$ and $|x^2-2| > 0$; and $0 \le x \le 2$ gives $0 \le x^2 \le 4$, so $|x^2 - 2| \le 2$. Hence $f$, $g$ and $h$ are defined on all of $D$. [L2, L5, L6, L8]

1.2 $\mathbb{Q}$ is an ordered field that is not complete: a complete ordered field has a square root of $2$, and no rational squares to $2$. [L1, L2, L3, L4]

1.3 For $x \in D$ one has $x + 2 \ge 2 > 0$, so $T(x) = 2 - 2(x+2)^{-1}$ is defined, and $(x+2)^{-1}$ lies between $(4)^{-1}$ and $(2)^{-1}$, so $1 \le T(x) \le 3/2$ and $T(x) \in D$; moreover $T(x)^2 - 2 = 2(x^2-2)(x+2)^{-2}$ and $(x+2)^2 \ge 4$, so $|T(x)^2 - 2| \le |x^2-2|\,(2)^{-1}$. [L5, L6, L8]

1.4 For all $x, c \in D$: $|x^2 - c^2| = |x-c|\,|x+c| \le 4\,|x-c|$, since $0 \le x + c \le 4$. [L5, L8]

2.1 $h$ is continuous on $D$: given $\varepsilon > 0$ take $\delta := \varepsilon\,(4)^{-1}$, and $|x - c| < \delta$ gives $|h(x)-h(c)| = |x^2-c^2| \le 4|x-c| < \varepsilon$. [step 1.4, L5, L8]

2.2 $g$ is continuous on $D$: $|g(x)-g(c)| = |x^2-c^2|\cdot|(x^2-2)+(c^2-2)| \le 4|x-c| \cdot 4 = 16|x-c|$, using step 1.1 for the second factor, so $\delta := \varepsilon\,(16)^{-1}$ works. [step 1.1, step 1.4, L5, L8]

2.3 $f$ is continuous on $D$: fix $c \in D$ and put $A := |c^2-2| > 0$; for $x \in D$ with $|x-c| < A\,(8)^{-1}$ one gets $|x^2 - c^2| < A\,(2)^{-1}$ and hence $|x^2-2| \ge A - |x^2-c^2| > A\,(2)^{-1}$, so $|f(x)-f(c)| = |c^2-x^2|\big(|x^2-2|\,|c^2-2|\big)^{-1} < 8|x-c|\,A^{-2}$; taking $\delta$ to be the smaller of $A(8)^{-1}$ and $\varepsilon A^2 (8)^{-1}$ gives $|f(x)-f(c)| < \varepsilon$. [step 1.1, step 1.4, L5, L8]

2.4 By the recursion theorem applied to $D$, the element $1 \in D$ and the map $T$, there is a sequence $(x_n)$ in $D$ with $x_0 = 1$ and $x_{n+1} = T(x_n)$; and by induction $|x_n^2 - 2| \le (2^n)^{-1}$, the base case being $|1 - 2| = 1$ and the step being step 1.3. [step 1.3, L6, L7]

2.5 $g$ is bounded on $D$, with $-4 \le g(x) \le 0$, and has no maximum: for every $c \in D$ the point $T(c)$ lies in $D$ and satisfies $|T(c)^2-2| \le |c^2-2|(2)^{-1} < |c^2-2|$, so $(T(c)^2-2)^2 < (c^2-2)^2$ and $g(T(c)) > g(c)$. [step 1.1, step 1.3, L6, L8]

3.1 $f$ is unbounded on $D$: $|f(x_n)| = |x_n^2-2|^{-1} \ge 2^n$, and given any $M \in \mathbb{Q}$ the Archimedean property supplies $n$ with $M < n \cdot 1$, whence $2^n \ge 1 + n \cdot 1 > M$ by Bernoulli. [step 2.4, L1, L6, L8]

3.2 $h$ is continuous on $D$ with $h(0) = -2$ and $h(2) = 2$, so $0$ lies strictly between $h(0)$ and $h(2)$, and yet $h(x) = 0$ has no solution in $D$, since that would be a rational squaring to $2$. [step 1.1, step 2.1, L2]

4.1 Over the ordered field $\mathbb{Q}$, on the closed interval $D = [0,2]_{\mathbb{Q}}$: $f$ is continuous and unbounded, $g$ is continuous and bounded with no maximum, and $h$ is continuous and omits a value strictly between its values at the endpoints. All three clauses of the claim are therefore false, and the field involved is exactly one failing (LUB). [step 1.2, step 2.2, step 2.3, step 2.5, step 3.1, step 3.2] ∎

## Remarks

- **One mechanism, three failures.** All three functions are built from $x^2 - 2$, whose zero is missing from $\mathbb{Q}$. The map $T$ is a contraction towards that missing zero: it halves $|x^2-2|$ at every step while staying inside $D$. So $|x^2-2|$ has infimum $0$ on $D$ and does not attain it, and the three failures are three ways of reading that one sentence.

- **Nothing here is peculiar to $\mathbb{Q}$.** The same construction runs in any ordered subfield of $\mathbb{R}$ that omits $\sqrt 2$, since every step above uses only the field operations, the order, and the absence of a square root of $2$. This item exhibits the cheapest witness; no claim is made here about ordered fields in general.

- **This item does not use, and does not need, a general theory of continuous functions.** The $\varepsilon$-$\delta$ condition is stated in the Statement refuted and every use of it above is a direct verification, so the item is self-contained and nothing here waits on a later page. That is deliberate and not a placeholder: the claim refuted here is a claim about an *arbitrary* ordered field, and it is refuted over $\mathbb{Q}$, so a definition of continuity written for real functions on subsets of $\mathbb{R}$ would not apply to it. This library has no notion of continuity over a general ordered field and needs none elsewhere, and inventing an id for one would put an unused definition on a page about completeness properties. The condition above is the ordinary one read inside $F$, and it specialises to the real-variable definition at $F = \mathbb{R}$.

- **What is true over $\mathbb{Q}$.** Continuity, sums and products of continuous functions, and composition all behave normally; what fails is every statement whose proof needs a supremum. That is the content of the page this one belongs to.
