---
id: lem-limit-is-local
kind: lemma
title: "The limit at $c$ depends only on the restriction of $f$ to a punctured neighbourhood of $c$, and passes to any subset of the domain having $c$ as a limit point"
status: published
origin: session
deps: [def-function-limit, def-neighbourhood-r, def-limit-point-r, lem-function-limit-unique, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [lem-locality-of-function-limits]
landmark: false
short: "locality and restriction"
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
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "T. Tao, Analysis I, 3rd ed., §9.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and let $c$ be a limit point of $A$
([[def-limit-point-r]]).

1. **Locality.** Let $f, g : A \to \mathbb{R}$ and $L \in \mathbb{R}$, and
   suppose there is a real $\eta > 0$ with $f(x) = g(x)$ for every $x \in A$
   satisfying $0 < |x - c| < \eta$. Then
   $$\lim_{x \to c} f(x) = L \iff \lim_{x \to c} g(x) = L$$
   ([[def-function-limit]]).

2. **Restriction.** Let $B \subseteq A$ with $c$ a limit point of $B$, let
   $f : A \to \mathbb{R}$ and suppose $\lim_{x \to c} f(x) = L$. Then $c$ is a
   limit point of $A$ as well, and $\lim_{x \to c} f|_B(x) = L$, where
   $f|_B : B \to \mathbb{R}$ is the restriction of $f$.

So the limit at $c$ sees only the values of $f$ on an arbitrarily small
punctured neighbourhood of $c$, and it survives shrinking the domain, provided
the smaller domain still accumulates at $c$. Together with
[[lem-function-limit-unique]] this is what makes the phrase *the* limit at $c$ a
local notion.

**The converse of claim 2 is false in general**: a restriction may have a limit
where the function has none, as the one-sided limits of the sign function on the
companion page show.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$ and a limit point $c$ of $A$; for claim 1 functions $f, g : A \to \mathbb{R}$, a real $L$ and a real $\eta > 0$ with $f(x) = g(x)$ for every $x \in A$ satisfying $0 < |x - c| < \eta$; for claim 2 a subset $B \subseteq A$ having $c$ as a limit point, a function $f : A \to \mathbb{R}$ and a real $L$ with $\lim_{x \to c} f(x) = L$ ([[def-function-limit]], [[def-limit-point-r]]).

[L1] The limit condition: $\lim_{x \to c} h(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x$ in the domain of $h$ with $0 < |x - c| < \delta$ satisfies $|h(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Limit point: $c$ is a limit point of a set $S$ when for every real $\delta > 0$ there is $x \in S$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] Order arithmetic: of two positive reals the smaller is positive, the order being total; and $u < v \le w$ gives $u < w$ ([[def-ordered-field]]).

[L4] Absolute value ([[lem-of-abs-value]]); and uniqueness of the limit at a limit point ([[lem-function-limit-unique]]), which is what makes the phrase "the limit" in the statement denote.

## Proof

**Proof technique:** direct.

1.1 For claim 1, assume $\lim_{x \to c} f(x) = L$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

1.2 For claim 2, $B \subseteq A$ and $c$ is a limit point of $B$; hence $c$ is a limit point of $A$, since for every real $\delta > 0$ a point $x \in B$ with $0 < |x - c| < \delta$ is also a point of $A$ with $0 < |x - c| < \delta$. [L2]

1.3 For claim 2, assume $\lim_{x \to c} f(x) = L$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

2.1 By [L1] fix a real $\delta_0 > 0$ such that every $x \in A$ with $0 < |x - c| < \delta_0$ satisfies $|f(x) - L| < \varepsilon$, and put $\delta$ to be the smaller of $\delta_0$ and $\eta$, so $\delta > 0$. [step 1.1, L1, L3, choose]

2.2 By [L1] fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$. [step 1.3, L1, choose]

3.1 Every $x \in A$ with $0 < |x - c| < \delta$ satisfies both $0 < |x - c| < \delta_0$ and $0 < |x - c| < \eta$, so $g(x) = f(x)$ and $|g(x) - L| = |f(x) - L| < \varepsilon$; as $\varepsilon > 0$ was arbitrary, $\lim_{x \to c} g(x) = L$. [step 2.1, L1, L3, L4]

3.2 Every $x \in B$ with $0 < |x - c| < \delta$ lies in $A$ and satisfies $0 < |x - c| < \delta$, so $f|_B(x) = f(x)$ and therefore $|f(x) - L| < \varepsilon$; as $\varepsilon > 0$ was arbitrary, and $c$ is a limit point of $B$, $\lim_{x \to c} f|_B(x) = L$. [step 2.2, L1, L4]

4.1 The hypothesis of claim 1 is symmetric in $f$ and $g$, so interchanging their roles in steps 1.1, 2.1 and 3.1 gives the implication in the other direction, and claim 1 is proved; claim 2 is steps 1.2 and 3.2. [step 1.2, step 3.1, step 3.2] ∎

## Remarks

- **What claim 1 is used for.** It is the licence to modify a function outside a punctured neighbourhood of $c$, or at $c$ itself, without changing the limit; the change at $c$ alone is already invisible to [[def-function-limit]], since the condition $0 < |x - c|$ excludes that point.

- **What claim 2 is used for.** It is the step that lets a statement proved on $A$ be transported to a smaller domain: the one-sided limits of [[def-one-sided-limits]] are exactly limits of restrictions, and the quotient case of [[thm-algebra-of-function-limits]] is proved on the smaller domain where the denominator does not vanish.

- **Both claims are choice free.** Only the $\varepsilon$-$\delta$ definition is used; no sequence is constructed anywhere in the proof.
