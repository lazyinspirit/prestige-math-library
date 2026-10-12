---
id: thm-intermediate-value
kind: theorem
title: "Intermediate value theorem, by bisection with a canonical left-half rule: a continuous function on $[a,b]$ takes every value between $f(a)$ and $f(b)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-continuity-real, thm-algebra-of-continuous-functions, thm-sequential-criterion-for-continuity, thm-nested-interval-property, def-interval, def-complete-ordered-field, thm-recursion, lem-geometric-sequence-null, thm-algebra-of-limits, lem-limit-preserves-order, def-real-limit, def-sequence, def-integer-power, lem-power-laws, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-ivt]
landmark: true
short: "intermediate value theorem"
proof_strategy: constructive
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.23)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.3"
      url: "https://www.jirka.org/ra/"
    - title: "E. Zakon, Mathematical Analysis, §4.9: The Intermediate Value Property"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/04%3A_Function_Limits_and_Continuity/4.09%3A_The_Intermediate_Value_Property"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $f : [a,b] \to \mathbb{R}$ be
continuous on the closed bounded interval $[a,b]$ ([[def-interval]],
[[def-continuity-real]]), and let $y \in \mathbb{R}$ satisfy

$$f(a) \le y \le f(b) \qquad \text{or} \qquad f(b) \le y \le f(a) .$$

Then there is $c \in [a,b]$ with $f(c) = y$.

**The construction is canonical, so no choice principle is used.** The bisection
below tests the left half first and takes the right half only when the left one
has been ruled out, so the passage from one interval to the next is a *function*
of that interval, and [[thm-recursion]] applies with nothing selected. This is
the same discipline the library uses wherever a sequence is built one term at a
time.

**Completeness of $\mathbb{R}$ is what does the work.** The bisection produces a
nested sequence of closed bounded intervals whose lengths tend to $0$, and it is
[[thm-nested-interval-property]] — hence the least-upper-bound property — that
supplies the point. Over an ordered field that is not complete the theorem
fails; the witness for that, stated for an arbitrary ordered field and worked
over $\mathbb{Q}$, is
[[cex-evt-and-ivt-fail-over-a-non-complete-field]], which states its own
$\varepsilon$-$\delta$ continuity inline and is not an instance of this page's
definition.

## Facts & Assumptions

**Given:** Reals $a \le b$, a function $f : [a,b] \to \mathbb{R}$ continuous on $[a,b]$, and a real $y$ with $f(a) \le y \le f(b)$ or $f(b) \le y \le f(a)$.

[L1] Scalar multiples of continuous functions are continuous, so $(-1)f$ is continuous on $[a,b]$ ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] Recursion: for a set $X$, an element $x_0 \in X$ and a function $F : X \to X$ there is a unique $g : \mathbb{N} \to X$ with $g(0) = x_0$ and $g(k+1) = F(g(k))$ for every $k$ ([[thm-recursion]]).

[L3] Nested intervals: if $I_k = [a_k,b_k]$ with $a_k \le b_k$ and $I_{k+1} \subseteq I_k$ for every $k \in \mathbb{N}$, then $\bigcap_{k} I_k$ is nonempty, and it is a single point exactly when the lengths $b_k - a_k$ tend to $0$ ([[thm-nested-interval-property]], [[def-interval]], [[def-real-limit]]).

[L4] Null geometric sequences: $|r| < 1$ implies $r^{k} \to 0$; and a constant multiple of a null sequence is null, while a constant sequence converges to that constant ([[lem-geometric-sequence-null]], [[thm-algebra-of-limits]], [[def-integer-power]], [[def-sequence]]).

[L5] Powers: $(2^{-1})^{k} = (2^{k})^{-1}$ for every $k \in \mathbb{N}$ ([[lem-power-laws]], [[def-integer-power]]).

[L6] Sequential criterion, the choice-free direction: if $f$ is continuous at $c$ and $x_k \in [a,b]$ with $x_k \to c$, then $f(x_k) \to f(c)$ ([[thm-sequential-criterion-for-continuity]], [[def-continuity-real]]).

[L7] Limits preserve non-strict inequalities ([[lem-limit-preserves-order]]).

[L8] Order and field arithmetic in $\mathbb{R}$: trichotomy and totality, so exactly one of $f(m) \ge y$ and $f(m) < y$ holds; halving and the ordered-field identities ([[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| \le s$ whenever $-s \le t \le s$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** constructive.

1.1 **Reduction.** It is enough to prove the theorem under the hypothesis $f(a) \le y \le f(b)$. Indeed, in the remaining case $f(b) \le y \le f(a)$, put $h := (-1)f$ and $z := -y$; then $h$ is continuous on $[a,b]$ by [L1] and $h(a) = -f(a) \le -y = z \le -f(b) = h(b)$, so a point $c \in [a,b]$ with $h(c) = z$ is a point with $f(c) = y$. [L1, L8, suffices: assume f(a) le y le f(b)]

1.2 **The bisection map.** Assume $f(a) \le y \le f(b)$ and put $$X \;:=\; \bigl\{\, (u,v) \in \mathbb{R} \times \mathbb{R} \ : \ a \le u \le v \le b,\ f(u) \le y \le f(v) \,\bigr\},$$ so $(a,b) \in X$. For $(u,v) \in X$ write $m := (u+v)/2$, which satisfies $a \le u \le m \le v \le b$ and so lies in $[a,b]$, and define $$F(u,v) \;:=\; \begin{cases} (u,\ m) & \text{if } f(m) \ge y,\\ (m,\ v) & \text{if } f(m) < y. \end{cases}$$ By trichotomy exactly one clause applies, so $F$ is a function on $X$; and $F(u,v) \in X$ in both clauses, since in the first $f(u) \le y \le f(m)$ and in the second $f(m) \le y \le f(v)$. **The left half is tested first and the right half is taken only when the left is excluded, so nothing is selected.** [L8, construct]

2.1 **The nested sequence.** By [L2] applied to $X$, the element $(a,b)$ and the map $F$, there is a unique $g : \mathbb{N} \to X$ with $g(0) = (a,b)$ and $g(k+1) = F(g(k))$. Write $g(k) = (a_k,b_k)$ and $I_k := [a_k,b_k]$. Then for every $k$: $a \le a_k \le b_k \le b$ and $f(a_k) \le y \le f(b_k)$, because $g(k) \in X$; and $I_{k+1} \subseteq I_k$, since in either clause of the definition of $F$ the new endpoints lie in $[a_k,b_k]$ and the new interval is $[a_k,m_k]$ or $[m_k,b_k]$ with $m_k = (a_k+b_k)/2$. [step 1.2, L2, L8]

3.1 **The lengths.** In both clauses the new length is $m_k - a_k = (b_k - a_k)/2$ or $b_k - m_k = (b_k - a_k)/2$, so $b_{k+1} - a_{k+1} = (b_k - a_k)/2$; with $b_0 - a_0 = b - a$ an induction on $k$ gives $b_k - a_k = (b-a)\,(2^{-1})^{k}$ for every $k \in \mathbb{N}$, that is $(b-a)/2^{k}$ by [L5]. Since $|2^{-1}| < 1$, [L4] gives $(2^{-1})^{k} \to 0$ and hence $b_k - a_k \to 0$. [step 2.1, L4, L5, L8]

4.1 **The point.** By [L3] applied to the nested family $(I_k)$, whose lengths tend to $0$ by step 3.1, the intersection $\bigcap_k I_k$ is a single point; call it $c$. Then $c \in I_0 = [a,b]$ and $a_k \le c \le b_k$ for every $k$. [step 2.1, step 3.1, L3, construct]

5.1 **The endpoints converge to $c$.** Let a rational $\varepsilon > 0$ be given. By step 3.1 there is $K$ with $b_k - a_k < \varepsilon$ for all $k \ge K$. For such $k$, from $a_k \le c \le b_k$ we get $-(b_k - a_k) \le a_k - c \le 0$ and $0 \le b_k - c \le b_k - a_k$, so $|a_k - c| \le b_k - a_k < \varepsilon$ and $|b_k - c| \le b_k - a_k < \varepsilon$ by [L8]. Hence $a_k \to c$ and $b_k \to c$. [step 3.1, step 4.1, L8]

6.1 **Passing to the limit.** The point $c$ lies in $[a,b]$, so $f$ is continuous at $c$, and [L6] applied to the two sequences of step 5.1 gives $f(a_k) \to f(c)$ and $f(b_k) \to f(c)$. [step 4.1, step 5.1, L6]

7.1 By step 2.1, $f(a_k) \le y$ for every $k$; the constant sequence with value $y$ converges to $y$ by [L4], so [L7] gives $f(c) \le y$. Likewise $y \le f(b_k)$ for every $k$ gives $y \le f(c)$. Hence $f(c) = y$. [step 2.1, step 6.1, L4, L7, L8]

8.1 A point $c \in [a,b]$ with $f(c) = y$ has therefore been constructed, under the reduction of step 1.1 and hence in both cases of the hypothesis. [step 1.1, step 4.1, step 7.1, discharge-construct: c is the unique point of the nested intersection] ∎

## Remarks

- **Why the left half is tested first.** The bisection has to choose one of two halves at every stage, and if the rule were "choose a half in which the sign change persists" the construction would be a dependent choice, not a recursion. Testing $f(m) \ge y$ and taking the left half in that case makes the successor a function of its predecessor, so [[thm-recursion]] applies verbatim. The same device is used in [[thm-perfect-set-uncountable-r]] and in the bisection proof of Heine-Borel.

- **What the theorem does *not* say.** It does not say that $c$ is unique, and it does not say that the set of solutions is an interval; $f$ may take the value $y$ on a complicated set. It also does not say that a function with the intermediate value property is continuous — that converse is false, and the witness for it needs machinery that is not available at this point in the reading order.

- **Only the choice-free direction of the sequential criterion is used.** Step 6.1 turns a convergent sequence into a convergent image sequence, which is the implication proved in ZF ([[thm-sequential-criterion-for-continuity]]); the converse, which spends countable choice, is never invoked here.
