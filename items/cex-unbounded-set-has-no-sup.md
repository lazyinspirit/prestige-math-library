---
id: cex-unbounded-set-has-no-sup
kind: counterexample
title: "An unbounded set has no supremum: the naturals inside $\\mathbb{R}$"
status: published
origin: session
deps: [fs-every-set-has-sup, thm-of-archimedean, lem-of-naturals-positive,
       def-archimedean-field, def-bounded-set, def-complete-ordered-field,
       def-ordered-field]
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
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every subset of $\mathbb{R}$ has a supremum in $\mathbb{R}$
([[fs-every-set-has-sup]]).

The witness here is the canonical copy of the natural numbers inside
$\mathbb{R}$,
$$A = \{\, n \cdot 1 \ : \ n \ge 1 \,\},$$
where $n \cdot 1$ denotes the canonical natural $\underbrace{1 + \cdots + 1}_{n}$
of the field ([[lem-of-naturals-positive]]). The set $A$ is nonempty, so the
nonemptiness hypothesis of the least-upper-bound property
([[def-complete-ordered-field]]) is satisfied; what fails is boundedness above,
and it fails as badly as possible, since $A$ has no upper bound whatsoever. That
is precisely the Archimedean property of $\mathbb{R}$ ([[thm-of-archimedean]]),
so this failure is a theorem about $\mathbb{R}$, not an accident of the set
chosen.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$ and the set $A := \{\, n \cdot 1 : n \ge 1 \,\}$ of its canonical naturals.

[L1] Canonical naturals: $1 \cdot 1 = 1$ and $n \cdot 1 > 0$ for every $n \ge 1$ ([[lem-of-naturals-positive]]).

[L2] Archimedean property: $\mathbb{R}$ is a complete ordered field, hence Archimedean, so for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n \cdot 1$ ([[thm-of-archimedean]], [[def-archimedean-field]]).

[L3] Upper bound, bounded above, supremum: $u$ is an upper bound of $X$ when $x \le u$ for every $x \in X$; $X$ is bounded above when it has an upper bound; and a supremum of $X$ is an upper bound of $X$ that is $\le$ every upper bound of $X$, so in particular every supremum is an upper bound ([[def-complete-ordered-field]], [[def-bounded-set]]).

[L4] The refuted claim: every $S \subseteq \mathbb{R}$ has a supremum in $\mathbb{R}$ ([[fs-every-set-has-sup]]).

[L5] Order: trichotomy holds, so $a < b$ and $b \le a$ cannot both be true ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Counterexample

**Proof technique:** direct.

1.1 $A$ is a nonempty subset of $\mathbb{R}$: taking $n = 1$ gives $1 \cdot 1 = 1 \in A$. [L1]

1.2 Let $x \in \mathbb{R}$ be arbitrary. [assume-hyp]

2.1 $x$ is not an upper bound of $A$: the Archimedean property supplies a natural $n \ge 1$ with $x < n \cdot 1$, and $n \cdot 1$ is an element of $A$, so the requirement $n \cdot 1 \le x$ for an upper bound fails by trichotomy. [step 1.2, L2, L3, L5]

3.1 Since $x$ was an arbitrary real number, no real number is an upper bound of $A$; hence $A$ is not bounded above. [step 2.1, step 1.2, L3]

4.1 A supremum of $A$ would in particular be an upper bound of $A$, and there is none, so $A$ has no supremum in $\mathbb{R}$ even though $A$ is nonempty; the claim that every subset of $\mathbb{R}$ has a supremum is refuted, and the boundedness hypothesis of the least-upper-bound property cannot be dropped. [step 3.1, step 1.1, L3, L4] ∎

## Remarks

- The failure is of a specific shape: the set of upper bounds of $A$ is empty, so there is nothing among which to be least. The companion witness [[cex-empty-set-has-no-sup]] fails for the opposite reason, with a set of upper bounds so large that it has no least element either. Both are needed, since each alone would suggest that a single hypothesis carries all the weight.
- In a non-Archimedean ordered field the same set is bounded above ([[cex-ordered-field-not-archimedean]]), so this counterexample really is using completeness by way of [[thm-of-archimedean]] and is not a formal consequence of the ordered-field axioms.
- Adjoining $+\infty$ repairs the statement, at the price of leaving the field; this library does not adopt that convention silently ([[rem-sup-conventions]]).
