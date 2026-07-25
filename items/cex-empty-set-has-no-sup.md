---
id: cex-empty-set-has-no-sup
kind: counterexample
title: "The empty set is bounded and has no supremum"
status: published
origin: session
deps: [fs-every-set-has-sup, cex-unbounded-set-has-no-sup, def-bounded-set,
       rem-sup-conventions, def-complete-ordered-field, def-ordered-field,
       cor-of-one-positive, lem-of-add-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "Extended real number line (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Extended_real_number_line"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every subset of $\mathbb{R}$ has a supremum in $\mathbb{R}$
([[fs-every-set-has-sup]]).

The witness here is $\emptyset$, and it fails for the opposite reason to the
unbounded witness [[cex-unbounded-set-has-no-sup]]. The empty set is bounded, in
fact bounded above and below by every real number at once
([[def-bounded-set]]), so the set of its upper bounds is all of $\mathbb{R}$.
A supremum would be a least element of that set, and $\mathbb{R}$ has no least
element, because $w - 1 < w$ for every $w$. What fails is therefore the
nonemptiness hypothesis of the least-upper-bound property
([[def-complete-ordered-field]]), not boundedness.

Some texts repair the statement by declaring $\sup \emptyset = -\infty$ in the
extended reals. That convention is consistent and is discussed in
[[rem-sup-conventions]]; this library does not adopt it, because $-\infty$ is
not an element of $\mathbb{R}$.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ and its empty subset $\emptyset$.

[L1] Upper bound, lower bound, bounded, supremum: $u$ is an upper bound of $X$ when $x \le u$ for every $x \in X$ and $\ell$ is a lower bound when $\ell \le x$ for every $x \in X$; $X$ is bounded when it has both; and a supremum of $X$ is an upper bound $u$ of $X$ with $u \le u'$ for every upper bound $u'$ of $X$ ([[def-complete-ordered-field]], [[def-bounded-set]]).

[L2] Order: $0 < 1$; adding a constant preserves the order, so $0 < 1$ gives $w - 1 < w$ for every $w$; and trichotomy holds, so $a < b$ and $b \le a$ cannot both be true ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L3] The refuted claim: every $S \subseteq \mathbb{R}$ has a supremum in $\mathbb{R}$ ([[fs-every-set-has-sup]]).

[L4] Conventions: the extended-real conventions $\sup \emptyset = -\infty$ and $\inf \emptyset = +\infty$ are not adopted in this library, and $\sup \emptyset$ is simply undefined ([[rem-sup-conventions]]).

## Counterexample

**Proof technique:** direct.

1.1 Every $w \in \mathbb{R}$ is both an upper bound and a lower bound of $\emptyset$: the defining condition quantifies over no elements and so holds vacuously. In particular $\emptyset$ is bounded, and its set of upper bounds is all of $\mathbb{R}$. [L1]

1.2 Let $w \in \mathbb{R}$ be an arbitrary upper bound of $\emptyset$. [assume-hyp]

2.1 The number $w - 1$ is also an upper bound of $\emptyset$, by 1.1, and $w - 1 < w$, since $0 < 1$ gives $w - 1 < (w - 1) + 1 = w$ on adding $w - 1$ to both sides. [step 1.1, step 1.2, L2]

3.1 Hence $w \le w - 1$ fails by trichotomy, so $w$ is not $\le$ every upper bound of $\emptyset$ and is therefore not a supremum of $\emptyset$; as $w$ was an arbitrary upper bound, and every real is one, no real number is a supremum of $\emptyset$. [step 2.1, step 1.2, L1, L2]

4.1 So $\emptyset$ is a bounded subset of $\mathbb{R}$ with no supremum in $\mathbb{R}$: the claim that every subset of $\mathbb{R}$ has a supremum is refuted, this time by a set that is bounded but not nonempty, and the nonemptiness hypothesis of the least-upper-bound property cannot be dropped either. [step 3.1, step 1.1, L3, L4] ∎

## Remarks

- The same argument, applied to lower bounds, shows that $\emptyset$ has no infimum either: every real is a lower bound and there is no greatest real, since $w < w + 1$ for every $w$.
- Together with [[cex-unbounded-set-has-no-sup]] this shows that both hypotheses of the least-upper-bound property are load bearing, and that they fail independently: $\emptyset$ is bounded and not nonempty, while the naturals inside $\mathbb{R}$ are nonempty and not bounded above. Neither witness alone would establish that.
- The convention $\sup \emptyset = -\infty$ is exactly the assertion that the empty set has a least upper bound in a larger ordered set in which every element bounds $\emptyset$ above and $-\infty$ is least. That larger set is not a field, which is why [[rem-sup-conventions]] keeps it out of the statements proved here rather than adopting it by default.
