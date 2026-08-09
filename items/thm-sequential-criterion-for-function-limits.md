---
id: thm-sequential-criterion-for-function-limits
kind: theorem
title: "Heine criterion: $\\lim_{x \\to c} f(x) = L$ iff $f(x_k) \\to L$ for every sequence in $A \\setminus \\{c\\}$ converging to $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-function-limit, def-sequence, def-natural-numbers, def-real-limit, def-limit-point-r, def-neighbourhood-r, def-countable-choice, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, lem-of-abs-value, def-ordered-field]
justified_by: []
aliases: [thm-heine-criterion-for-function-limits]
landmark: true
short: "Heine (sequential) criterion"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §3.1: Limits of functions"
      url: "https://www.jirka.org/ra/html/sec_limoffunc.html"
    - title: "Limit of a function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$, let $c$ be a limit
point of $A$ ([[def-limit-point-r]]) and let $L \in \mathbb{R}$. The following
are equivalent.

1. $\lim_{x \to c} f(x) = L$ ([[def-function-limit]]).
2. For **every** sequence $(x_k)_{k \in \mathbb{N}}$ with $x_k \in A$ and
   $x_k \ne c$ for every $k$, and $x_k \to c$ ([[def-sequence]],
   [[def-real-limit]]), the sequence $(f(x_k))_{k \in \mathbb{N}}$ converges to
   $L$.

**The two directions do not cost the same.** The implication from 1 to 2 is
proved in ZF: the sequence is handed to the proof, and nothing is selected. The
implication from 2 to 1, as proved below, invokes the axiom of countable choice
([[def-countable-choice]]) exactly once, at step 3.2, to select one bad point
from each of countably many nonempty sets. What this library does and does not
claim about that cost is recorded in [[rem-heine-criterion-choice-cost]]; the
same asymmetry appears, for the same reason, in
[[lem-sequential-characterisation-of-closure-r]].

Because of this, the results on this page that can be proved directly from
$\varepsilon$ and $\delta$ — the algebra of limits, order preservation, the
squeeze theorem, composition — **are** proved that way, and not through this
criterion. What the criterion is for is the transfer of sequential results to
functions, and above all the *negative* use recorded in
[[cor-sequential-criterion-for-nonexistence]], which needs only the choice-free
direction.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$, a limit point $c$ of $A$ and a real $L$. Sequences are functions on $\mathbb{N}$, and $\mathbb{N}$ contains $0$ ([[def-sequence]], [[def-natural-numbers]]), so the shrinking radii used below are $1/(k+1)$ and never $1/k$.

[L1] The function limit: $\lim_{x \to c} f(x) = L$ means that for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$ ([[def-function-limit]]).

[L2] Sequential convergence: $(y_k) \to y$ means that for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|y_k - y| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]], [[def-sequence]]). Testing instead against every positive REAL $\varepsilon$ defines the same relation: every positive rational is a positive real, and below every positive real lies a positive rational ([[lem-rat-embeds-dense]]), which is the passage sanctioned in the remarks of [[def-sequence]].

[L3] Limit point: for every real $\delta > 0$ there is $x \in A$ with $0 < |x - c| < \delta$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); the canonical naturals satisfy $n \cdot 1_{\mathbb{R}} > 0$ and are strictly increasing in $n$ ([[lem-of-naturals-positive]]); and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

[L5] Countable choice: for every family $(X_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function $k \mapsto x_k$ with $x_k \in X_k$ for every $k$ ([[def-countable-choice]]).

[L6] Absolute value ([[lem-of-abs-value]]); and trichotomy, so the negation of $|u| < \varepsilon$ is $|u| \ge \varepsilon$, and the negation of "for every $\varepsilon$ there is $\delta$ such that P" is "there is $\varepsilon_0$ such that for every $\delta$, not P" ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume condition 1, let $(x_k)$ be a sequence with $x_k \in A$ and $x_k \ne c$ for every $k$ and $x_k \to c$, and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1, L2, L3]

1.2 Assume condition 1 FAILS. Negating the quantifiers of [L1], there is a real $\varepsilon_0 > 0$ such that for every real $\delta > 0$ some $x \in A$ has $0 < |x - c| < \delta$ and $|f(x) - L| \ge \varepsilon_0$. [assume-hyp, L1, L6]

2.1 By [L1] fix a real $\delta > 0$ such that every $x \in A$ with $0 < |x - c| < \delta$ satisfies $|f(x) - L| < \varepsilon$; and by [L2], $\delta$ being a positive real, fix $K \in \mathbb{N}$ with $|x_k - c| < \delta$ for every $k \ge K$. [step 1.1, L1, L2, choose]

2.2 For $k \in \mathbb{N}$ put $X_k := \{\, x \in A \ : \ 0 < |x - c| < 1/(k+1) \ \text{ and } \ |f(x) - L| \ge \varepsilon_0 \,\}$. Each $X_k$ is nonempty, since $k + 1 \ge 1$ makes $1/(k+1)$ a positive real and step 1.2 applies to that radius. [step 1.2, L4, L6]

3.1 For every $k \ge K$ we have $x_k \in A$ and $x_k \ne c$, so $0 < |x_k - c| < \delta$ and hence $|f(x_k) - L| < \varepsilon$. Since $\varepsilon > 0$ was an arbitrary real, $f(x_k) \to L$; condition 1 therefore implies condition 2. [step 2.1, L1, L2, L6]

3.2 By countable choice applied to the family $(X_k)_{k \in \mathbb{N}}$, fix a function $k \mapsto x_k$ with $x_k \in X_k$ for every $k \in \mathbb{N}$. [step 2.2, L5, choose]

4.1 That sequence has $x_k \in A$ and $x_k \ne c$ for every $k$, and it converges to $c$: given a real $\varepsilon > 0$, [L4] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and every $k \ge n$ has $k + 1 > n \ge 1$, hence $|x_k - c| < 1/(k+1) < 1/n < \varepsilon$. [step 3.2, L2, L4, L6]

4.2 Yet $(f(x_k))$ does not converge to $L$: every $k$ has $|f(x_k) - L| \ge \varepsilon_0$, while a rational $\varepsilon$ with $0 < \varepsilon < \varepsilon_0$ ([L2]) would require some $K$ with $|f(x_k) - L| < \varepsilon < \varepsilon_0$ for all $k \ge K$. [step 3.2, L2, L6]

5.1 So the failure of condition 1 produces a sequence witnessing the failure of condition 2; contrapositively, condition 2 implies condition 1, and with step 3.1 the two conditions are equivalent. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Where the choice is spent, and where it is not.** Step 3.2 is the only use of [[def-countable-choice]] in this proof, and it occurs only in the direction from condition 2 to condition 1. Steps 1.1, 2.1 and 3.1, which prove the other direction, use no choice principle. [[rem-heine-criterion-choice-cost]] says what may and may not be concluded from that.

- **The sets $X_k$ genuinely have no canonical element.** They are cut out by an inequality involving $f$, about which nothing is assumed, so there is no rule in this library that picks a point of $X_k$ uniformly in $k$. That is exactly the situation [[def-countable-choice]] exists for, and it is the same situation as in [[lem-sequential-characterisation-of-closure-r]].

- **Why $1/(k+1)$ and not $1/k$.** Sequences here are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), so the index $k = 0$ occurs and $1/k$ would be undefined there. The same convention is used in [[lem-sequential-characterisation-of-closure-r]].
