---
id: ex-ivt-gives-nth-roots
kind: example
title: "The intermediate value theorem gives a second proof that every nonnegative real has an $n$-th root, applied to $x^n$ on a closed bounded interval"
status: published
origin: session
deps: [thm-intermediate-value, cor-continuous-image-of-an-interval-is-an-interval, thm-nth-roots-exist, thm-algebra-of-continuous-functions, def-continuity-real, def-integer-power, lem-power-monotone, def-interval, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "IVT gives $n$-th roots"
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
    - title: "Intermediate value theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Intermediate_value_theorem"
    - title: "Nth root (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nth_root"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 and Ch. 4"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $a \in \mathbb{R}$ with $a \ge 0$ and let $n \in \mathbb{N}$ with $n \ge 1$.
Put $M := a + 1$ and consider

$$f : [0, M] \to \mathbb{R}, \qquad f(x) := x^{n}$$

([[def-integer-power]], [[def-interval]]). Then $f$ is continuous on $[0,M]$,
$f(0) = 0 \le a \le M^{n} = f(M)$, and the intermediate value theorem
([[thm-intermediate-value]]) supplies $c \in [0,M]$ with

$$c^{n} = a .$$

Moreover $c$ is the **only** nonnegative real with this property, so
$c = a^{1/n}$ in the notation of [[thm-nth-roots-exist]].

**This is a second proof of an existing theorem, not a new one.**
[[thm-nth-roots-exist]] already proves existence and uniqueness of $n$-th roots,
by an argument that runs directly from the least-upper-bound property and the
factorisation of $b^{n} - a^{n}$; it is the item the rest of the library cites,
and no second identifier is minted for the same statement. What is recorded here
is that the intermediate value theorem gives the existence half in three lines
once continuity of $x \mapsto x^{n}$ is available, which is the standard modern
route and the reason the theorem is usually met in this form.

**No circularity.** [[thm-intermediate-value]] rests on
[[thm-nested-interval-property]], on the algebra of continuous functions and on
the sequential criterion, none of which uses $n$-th roots; and the uniqueness
half below is [[lem-power-monotone]], which is pure ordered-field arithmetic. So
this argument could have been the library's definition of $a^{1/n}$; it is not,
only because the roots were needed at order $16$, long before continuity
existed.

## Facts & Assumptions

**Given:** A real $a \ge 0$, a natural $n \ge 1$, and $M := a + 1$; the function $f(x) = x^{n}$ on $[0,M]$.

[L1] Polynomial functions, in particular $x \mapsto x^{n}$, are continuous on every subset of $\mathbb{R}$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]], [[def-integer-power]]).

[L2] Intermediate value theorem: for $u \le v$, a function continuous on $[u,v]$ takes every value between $f(u)$ and $f(v)$ ([[thm-intermediate-value]]).

[L3] Powers and order: $0^{n} = 0$ for $n \ge 1$; if $t \ge 1$ and $n \ge 1$ then $t^{n} \ge t$; and $x \mapsto x^{n}$ is strictly increasing on the nonnegative reals for $n \ge 1$, hence injective there ([[lem-power-monotone]], [[def-integer-power]]).

[L4] Existence and uniqueness of $n$-th roots: for $a \ge 0$ and $n \ge 1$ there is a unique $s \ge 0$ with $s^{n} = a$, written $a^{1/n}$ ([[thm-nth-roots-exist]]).

[L5] Ordered-field arithmetic: $a \ge 0$ gives $M = a + 1 \ge 1 > 0$ and $M > a$; and $0 \le M$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 $M = a + 1 \ge 1 > 0$ by [L5], so $[0,M]$ is a nonempty closed bounded interval, and $f$ is continuous on it by [L1]. [L1, L5]

1.2 $f(0) = 0^{n} = 0 \le a$ by [L3] and the hypothesis $a \ge 0$; and $f(M) = M^{n} \ge M = a + 1 > a$ by [L3] and [L5]. So $f(0) \le a \le f(M)$. [L3, L5]

2.1 By [L2] applied on $[0,M]$ with the value $a$, there is $c \in [0,M]$ with $c^{n} = a$; in particular $c \ge 0$. [step 1.1, step 1.2, L2, choose]

3.1 $c$ is the only nonnegative real with $c^{n} = a$: by [L3] the map $t \mapsto t^{n}$ is injective on the nonnegative reals, so two nonnegative solutions would coincide. Hence $c = a^{1/n}$ in the notation of [L4], and the existence half of [L4] has been re-proved from the intermediate value theorem. [step 2.1, L3, L4] ∎

## Remarks

- **Why $M = a + 1$ and not $M = a$.** For $0 \le a < 1$ the value $a^{n}$ is at most $a$, so $[0,a]$ need not reach $a$ at its right endpoint; adding $1$ makes $M \ge 1$, and then $M^{n} \ge M > a$ by [[lem-power-monotone]]. Taking $M := \max\{1, a\}$ works equally well and is the usual textbook choice; $a+1$ avoids naming a maximum.

- **The same argument through the image.** [[cor-continuous-image-of-an-interval-is-an-interval]] says $f\bigl[\,[0,M]\,\bigr]$ is a closed bounded interval containing $f(0) = 0$ and $f(M) = M^{n}$, hence containing $a$; that is the intermediate value theorem repackaged, and it is the form in which the statement generalises to other continuous increasing functions.

- **What this does not give.** The argument produces a root but no way to compute it, and no rate: it is a pure existence proof, exactly like the bisection that underlies [[thm-intermediate-value]]. The companion example [[ex-fixed-point-from-the-ivt]] identifies the same number, for $n = 2$ and $a = 2$, as the fixed point of $x \mapsto (x + 2/x)/2$ on $[1,2]$.
