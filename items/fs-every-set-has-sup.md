---
id: fs-every-set-has-sup
kind: false-statement
title: "FALSE: every subset of $\\mathbb{R}$ has a supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complete-ordered-field, thm-of-archimedean, cor-of-one-positive, def-ordered-field, lem-of-add-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Least-upper-bound property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Least-upper-bound_property"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "MIT 18.100A, Complete Lecture Notes"
      url: "https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/mit18_100af20_lec_full.pdf"
pipeline_run: null
---

## Statement

**False claim:** every subset $S \subseteq \mathbb{R}$ has a supremum in
$\mathbb{R}$.

The least-upper-bound property of $\mathbb{R}$ ([[def-complete-ordered-field]])
carries two hypotheses, that $S$ is nonempty and that $S$ is bounded above, and
neither may be dropped. Two independent witnesses are given below, one failing
each hypothesis on its own.

## Facts & Assumptions

**Given:** The complete ordered field $\mathbb{R}$, the empty subset $\emptyset \subseteq \mathbb{R}$, and the set $A := \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of $\mathbb{R}$.

[L1] Least upper bound: $w$ is a supremum of $X$ when $w$ is an upper bound of $X$ and $w \le w'$ for every upper bound $w'$ of $X$; the least-upper-bound property asserts the existence of such a $w$ only for $X$ that is nonempty AND bounded above ([[def-complete-ordered-field]]).

[L2] Archimedean property: $\mathbb{R}$ is Archimedean, so for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[L3] Order: $0 < 1$; trichotomy holds, so $a \le b$ and $b < a$ cannot both be true; and adding a constant preserves the order ([[cor-of-one-positive]], [[def-ordered-field]], [[lem-of-add-order]]).

## Refutation

**Proof technique:** direct.

1.1 Every real number $w$ is an upper bound of $\emptyset$: the requirement "$x \le w$ for all $x \in \emptyset$" quantifies over no elements and so holds vacuously. In particular $\emptyset$ is bounded above. [L1]

1.2 The set $A$ is a nonempty subset of $\mathbb{R}$, since $1 \cdot 1_{\mathbb{R}} = 1_{\mathbb{R}} \in A$. [given]

2.1 The empty set has no least upper bound: were $w$ one, then $0 < 1$ gives $w - 1 < w$, while $w - 1$ is an upper bound of $\emptyset$, so leastness of $w$ would force $w \le w - 1$ and hence, adding $1 - w$ to both sides, $1 \le 0$, which contradicts $0 < 1$ by trichotomy. So the first witness $\emptyset$ has no supremum although it is bounded above. [step 1.1, L1, L3]

2.2 The set $A$ has no upper bound whatsoever: given any $x \in \mathbb{R}$, the Archimedean property produces $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$, and $n \cdot 1_{\mathbb{R}} \in A$, so by trichotomy $n \cdot 1_{\mathbb{R}} \le x$ fails and $x$ does not bound $A$ above. A supremum is in particular an upper bound, so the second witness $A$ has no supremum although it is nonempty. [step 1.2, L1, L2, L3]

3.1 Each witness refutes the claim on its own, and they refute it for different reasons: $\emptyset$ is bounded above but not nonempty, while $A$ is nonempty but not bounded above. So the claim is false, and moreover neither hypothesis of the least-upper-bound property can be dropped, since each fails alone on one of these two sets. [step 2.1, step 2.2, L1] ∎

## Remarks

- The two failures are of genuinely different types. For $\emptyset$ the set of upper bounds is all of $\mathbb{R}$, which is nonempty but has no least element; for $A$ the set of upper bounds is empty. Only one witness would therefore leave the impression that a single hypothesis is doing all the work.
- The failure for $A$ is exactly the Archimedean property ([[thm-of-archimedean]]) and so is a theorem about $\mathbb{R}$, not an accident of the chosen set: in a non-Archimedean ordered field the canonical naturals can be bounded above ([[cex-ordered-field-not-archimedean]]).
- Some texts repair the statement by working in the extended reals, where $\sup \emptyset = -\infty$ and $\sup A = +\infty$. This library does not adopt that convention; see [[rem-sup-conventions]].
