---
id: ex-sup-of-sum-of-sets
kind: example
title: "$(0,1) + (2,3) = (2,4)$, with supremum $4 = \\sup(0,1) + \\sup(2,3)$"
status: draft
origin: session
deps: [lem-sup-sum, lem-sup-translate, ex-sup-of-open-interval, lem-of-add-order,
       lem-of-sign-rules, lem-max-is-sup, def-max-min, def-complete-ordered-field,
       def-ordered-field, def-field, cor-of-one-positive, lem-of-zero-mult]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Infimum and supremum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Infimum_and_supremum"
    - title: "Minkowski addition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Minkowski_addition"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Take $S = (0,1)$ and $T = (2,3)$ and form the sumset
$S + T = \{\, s + t : s \in S,\ t \in T \,\}$. Then
$$S + T = (2,4), \qquad \sup(S+T) = 4 = 1 + 3 = \sup S + \sup T,$$
which is the identity of [[lem-sup-sum]] on a concrete pair of intervals.

Two things are actually computed here, and it is worth keeping them apart. The
set identity $S + T = (2,4)$ is not a supremum statement at all: the inclusion
$\subseteq$ comes from adding inequalities, and the inclusion $\supseteq$ needs a
construction, namely a decomposition $x = s_x + t_x$ of each $x \in (2,4)$ with
$s_x \in S$ and $t_x \in T$. The supremum statement is then supplied by
[[lem-sup-sum]] together with $\sup S = 1$ ([[ex-sup-of-open-interval]]) and
$\sup T = 3$, the latter obtained from $\sup S$ by translation
([[lem-sup-translate]]) rather than by a second epsilon argument.

The value $4$ is not attained: it fails the strict inequality $x < 4$ that defines
$(2,4)$, so $S + T$ has no maximum ([[lem-max-is-sup]], [[def-max-min]]). The
identity $\sup(S+T) = \sup S + \sup T$ therefore holds with the supremum on the
left unattained, just as $\sup S = 1$ is unattained in
[[ex-sup-of-open-interval]].

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$; the abbreviations $2 := 1 + 1$, $3 := 2 + 1$, $4 := 3 + 1$; the sets $S := \{x \in \mathbb{R} : 0 < x < 1\}$, $T := \{x \in \mathbb{R} : 2 < x < 3\}$, $U := \{x \in \mathbb{R} : 2 < x < 4\}$; the translate $2 + S := \{2 + s : s \in S\}$ and the sumset $S + T := \{s + t : s \in S,\ t \in T\}$.

[L1] The open unit interval: $S$ is nonempty and bounded above, and $\sup S = 1$ ([[ex-sup-of-open-interval]]).

[L2] Translation: for nonempty $X \subseteq \mathbb{R}$ bounded above and $a \in \mathbb{R}$, the translate $a + X$ is nonempty and bounded above and $\sup(a + X) = a + \sup X$ ([[lem-sup-translate]]).

[L3] Sumset: for nonempty $X, Y \subseteq \mathbb{R}$ both bounded above, the sumset $X + Y$ is nonempty and bounded above and $\sup(X + Y) = \sup X + \sup Y$ ([[lem-sup-sum]]).

[L4] Order and addition: $a < b$ implies $a + c < b + c$, and strict inequalities add, so $a < b$ together with $c < d$ gives $a + c < b + d$ (claims 1 and 2 of [[lem-of-add-order]]). Applying the first claim with the constant $c$ and then with the constant $-c$ turns it into the equivalence $a < b$ if and only if $a + c < b + c$, which is the form used below whenever a constant is subtracted from each part of a chain of inequalities ([[def-ordered-field]]).

[L5] Halving: $0 < 1$, hence $2 = 1 + 1 > 0$, so $2 \ne 0$ and $2^{-1}$ exists with $c = (c \cdot 2^{-1}) \cdot 2$ for every $c$; $0 \cdot 2 = 0$ and $1 \cdot 2 = 2$ ([[lem-of-zero-mult]], [[def-field]]); and multiplying by the positive constant $2$ is an order equivalence, so $x < y$ if and only if $x \cdot 2 < y \cdot 2$ (claim 4 of [[lem-of-sign-rules]]) ([[cor-of-one-positive]], [[def-field]], [[def-ordered-field]]).

[L6] Arithmetic of the named constants, from the field axioms: $2 + 1 = 3$, $3 + 1 = 4$, $2 + 2 = 4$, $1 + 3 = 4$, $x + x = x \cdot 2$ for every $x$, $2 \cdot 2 = 4$ and $3 \cdot 2 = 4 + 2$ ([[def-field]], [[def-complete-ordered-field]]).

[L7] Order: trichotomy holds in an ordered field, so $a < a$ is impossible for every $a$ ([[def-ordered-field]], [[def-complete-ordered-field]]).

[L8] Maximum and attainment: $m = \max X$ means $m \in X$ and $x \le m$ for every $x \in X$ ([[def-max-min]]); and if a nonempty $X$ has a maximum then $\sup X$ exists and equals $\max X \in X$, so a set whose supremum exists and does not belong to it has no maximum ([[lem-max-is-sup]]).

## Verification

**Proof technique:** direct.

1.1 $T = 2 + S$: for $s \in \mathbb{R}$, adding $2$ to each part of $0 < s < 1$ gives $2 < 2 + s < 2 + 1 = 3$, and conversely each $y$ with $2 < y < 3$ equals $2 + (y - 2)$ where subtracting $2$ from each part gives $0 < y - 2 < 1$; the two directions are equivalences because adding a constant is one. [L4, L6]

1.2 $S + T \subseteq U$: for $s \in S$ and $t \in T$, adding $0 < s$ to $2 < t$ gives $2 = 0 + 2 < s + t$, and adding $s < 1$ to $t < 3$ gives $s + t < 1 + 3 = 4$. [L4, L6]

1.3 Let $x \in U$ be arbitrary, so $2 < x < 4$, and put $s_x := (x - 2) \cdot 2^{-1}$ and $t_x := (x + 2) \cdot 2^{-1}$. [assume-hyp, L5, choose]

2.1 $s_x \in S$ and $s_x + t_x = x$: subtracting $2$ from each part of $2 < x < 4$ gives $0 < x - 2 < 2$, that is $0 \cdot 2 < s_x \cdot 2 < 1 \cdot 2$, so $0 < s_x < 1$ by [L5]; and $s_x + t_x = \big((x - 2) + (x + 2)\big) \cdot 2^{-1} = (x + x) \cdot 2^{-1} = (x \cdot 2) \cdot 2^{-1} = x$. [step 1.3, L4, L5, L6]

2.2 $t_x \in T$: adding $2$ to each part of $2 < x < 4$ gives $2 \cdot 2 = 4 < x + 2 < 4 + 2 = 3 \cdot 2$, and $t_x \cdot 2 = x + 2$, so $2 < t_x < 3$ by [L5]. [step 1.3, L4, L5, L6]

2.3 $\sup T = 3$, and $T$ is nonempty and bounded above: applying the translation identity to the nonempty bounded-above set $S$ with $a = 2$ gives that $2 + S$ is nonempty and bounded above with $\sup(2 + S) = 2 + \sup S = 2 + 1 = 3$, and $2 + S = T$ by 1.1. [step 1.1, L1, L2, L6]

3.1 $U \subseteq S + T$, hence $S + T = U$: for arbitrary $x \in U$ the elements $s_x \in S$ and $t_x \in T$ satisfy $s_x + t_x = x$, so $x \in S + T$; combined with the inclusion of 1.2 this gives $S + T = U$, that is $(0,1) + (2,3) = (2,4)$. [step 2.1, step 2.2, step 1.2, step 1.3]

3.2 $\sup(S + T) = 4$: both $S$ and $T$ are nonempty and bounded above, so the sumset identity applies and gives $\sup(S + T) = \sup S + \sup T = 1 + 3 = 4$. [step 2.3, L1, L3, L6]

4.1 Therefore $(0,1) + (2,3)$ is exactly the interval $(2,4)$, and its supremum is $4$, which is the sum $\sup(0,1) + \sup(2,3)$ of the two suprema; in particular $\sup U = 4$. [step 3.1, step 3.2, L3]

4.2 The value $4$ does not belong to $S + T$: by 3.1 one has $S + T = U$, membership in $U$ requires $x < 4$, and $4 < 4$ is impossible. [step 3.1, L7]

5.1 Hence $S + T$ is nonempty with $\sup(S + T) = 4 \notin S + T$, so by the attainment criterion $S + T$ has no maximum: the identity $\sup(S+T) = \sup S + \sup T$ holds with the left-hand supremum unattained. [step 4.1, step 4.2, L3, L8] ∎

## Remarks

- The inclusion $S + T \subseteq U$ alone already gives $\sup(S+T) \le 4$, which is the easy half of [[lem-sup-sum]]. What the explicit decomposition $x = s_x + t_x$ buys is the reverse inclusion, and with it the fact that the sumset is the whole interval rather than a proper subset of it. The lemma proves the reverse inequality without any such decomposition, by combining two epsilon approximations at $\varepsilon/2$ each.
- $\sup T$ was obtained by translating $S$ rather than by repeating the epsilon computation. This is the normal division of labour: the general lemmas ([[lem-sup-translate]], [[lem-sup-scale]], [[lem-sup-sum]]) are proved once, and concrete suprema are then transported rather than recomputed.
- No analogue holds for products of sets. The sumset identity depends on the order being translation invariant, which multiplication is not: scaling by a negative number exchanges suprema and infima ([[lem-sup-scale]]).
