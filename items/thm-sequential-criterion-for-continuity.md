---
id: thm-sequential-criterion-for-continuity
kind: theorem
title: "$f$ is continuous at $c \\in A$ if and only if $f(x_k) \\to f(c)$ for every sequence in $A$ converging to $c$, the converse direction costing countable choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-continuity-real, thm-sequential-criterion-for-function-limits, rem-heine-criterion-choice-cost, def-countable-choice, def-function-limit, def-limit-point-r, def-neighbourhood-r, def-sequence, def-real-limit, lem-rat-embeds-dense, lem-of-abs-value]
justified_by: []
aliases: [thm-heine-criterion-for-continuity]
forward_refs: [cex-dirichlet-is-nowhere-continuous]
landmark: true
short: "sequential criterion for continuity"
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
    - title: "Continuous function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuous_function"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c \in A$. The
following are equivalent.

1. $f$ is continuous at $c$ ([[def-continuity-real]]).
2. For **every** sequence $(x_k)_{k \in \mathbb{N}}$ with $x_k \in A$ for every
   $k$ and $x_k \to c$ ([[def-sequence]], [[def-real-limit]]), the sequence
   $\bigl(f(x_k)\bigr)_{k \in \mathbb{N}}$ converges to $f(c)$.

**The sequences here are not required to avoid $c$**, which is the one
difference from [[thm-sequential-criterion-for-function-limits]] and is exactly
what makes the criterion available at an isolated point of $A$, where no limit
exists.

**The two directions do not cost the same.** The implication from 1 to 2 is
proved in ZF: the sequence is handed to the proof and nothing is selected. The
implication from 2 to 1 is obtained below from
[[thm-sequential-criterion-for-function-limits]], and therefore inherits the one
use of the axiom of countable choice ([[def-countable-choice]]) made in that
theorem's converse direction. What this library does and does not claim about
that cost is recorded once, in [[rem-heine-criterion-choice-cost]], and is not
restated here.

**Nothing else on this page is routed through this theorem.** The algebra of
continuous functions, composition, the intermediate value theorem, the extreme
value theorem and Heine-Cantor are all proved from $\varepsilon$ and $\delta$,
or from compactness, exactly as the previous page organised itself. The
choice-free direction 1 to 2 *is* used, in the intermediate value theorem and in
Heine-Cantor, and each of those two items says which direction it uses.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a point $c \in A$.

[L1] Continuity at $c$: for every real $\varepsilon > 0$ there is a real $\delta > 0$ such that every $x \in A$ with $|x - c| < \delta$ satisfies $|f(x) - f(c)| < \varepsilon$ ([[def-continuity-real]]).

[L2] A point of $A$ is either a limit point of $A$ or an isolated point of $A$, and never both; $c$ is isolated in $A$ when $N_{\eta}(c) \cap A = \{c\}$ for some real $\eta > 0$ ([[def-limit-point-r]], [[def-neighbourhood-r]]).

[L3] At a limit point $c$ of $A$, $f$ is continuous at $c$ if and only if the limit of $f$ at $c$ exists and equals $f(c)$; at an isolated point of $A$ every function is continuous ([[def-continuity-real]], [[def-function-limit]]).

[L4] Heine criterion for limits: at a limit point $c$ of $A$, $\lim_{x \to c} f(x) = L$ holds if and only if $f(x_k) \to L$ for every sequence $(x_k)$ with $x_k \in A$, $x_k \ne c$ for every $k$, and $x_k \to c$. The direction from the limit to sequences is a theorem of ZF; the converse uses the axiom of countable choice exactly once ([[thm-sequential-criterion-for-function-limits]], [[def-countable-choice]]).

[L5] Convergence of a real sequence: $x_k \to x$ when for every rational $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all $k \ge K$; below every positive real lies a positive rational, so the test may equally be run at every real $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L6] Absolute value: $|u| \ge 0$, and $|u| = 0$ exactly when $u = 0$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 **The isolated case, both statements at once.** Suppose $c$ is an isolated point of $A$ and fix a real $\eta > 0$ with $N_{\eta}(c) \cap A = \{c\}$. Then statement 1 holds by [L3]. Statement 2 also holds: if $x_k \in A$ for every $k$ and $x_k \to c$, then by [L5] there is $K$ with $|x_k - c| < \eta$ for all $k \ge K$, so $x_k \in N_{\eta}(c) \cap A = \{c\}$ and hence $x_k = c$ and $f(x_k) = f(c)$ for all $k \ge K$; a sequence eventually equal to $f(c)$ converges to $f(c)$, since $|f(x_k) - f(c)| = 0 < \varepsilon$ for $k \ge K$. So 1 and 2 are both true, and in particular equivalent. [L2, L3, L5, L6]

1.2 **The limit-point case, from 1 to 2.** Suppose $c$ is a limit point of $A$ and that $f$ is continuous at $c$. Let $(x_k)$ satisfy $x_k \in A$ for every $k$ and $x_k \to c$, and let a rational $\varepsilon > 0$ be given. By [L1] fix a real $\delta > 0$ with $|f(x) - f(c)| < \varepsilon$ for every $x \in A$ satisfying $|x - c| < \delta$; by [L5] fix $K$ with $|x_k - c| < \delta$ for all $k \ge K$. Every such $k$ has $x_k \in A$ and $|x_k - c| < \delta$, hence $|f(x_k) - f(c)| < \varepsilon$. As the rational $\varepsilon > 0$ was arbitrary, $f(x_k) \to f(c)$. Nothing was selected, so this is a theorem of ZF. [L1, L5]

1.3 **The limit-point case, from 2 to 1.** Suppose $c$ is a limit point of $A$ and that statement 2 holds. Every sequence $(x_k)$ with $x_k \in A$, $x_k \ne c$ for every $k$, and $x_k \to c$ is in particular a sequence in $A$ converging to $c$, so statement 2 gives $f(x_k) \to f(c)$. That is the right-hand side of [L4] with $L := f(c)$, so [L4] yields that the limit of $f$ at $c$ exists and equals $f(c)$, and [L3] turns that into continuity of $f$ at $c$. This is the direction that inherits the single use of countable choice made in [L4]. [L3, L4]

2.1 By [L2] the point $c$ is either isolated in $A$ or a limit point of $A$. In the first case step 1.1 proves both statements outright; in the second, step 1.2 gives 1 implies 2 and step 1.3 gives 2 implies 1. So statements 1 and 2 are equivalent, with the first implication free of choice and the second inheriting exactly one application of countable choice. [step 1.1, step 1.2, step 1.3, L2] ∎

## Remarks

- **Why the sequences are allowed to hit $c$.** [[thm-sequential-criterion-for-function-limits]] must exclude $c$, because [[def-function-limit]] says nothing about $f(c)$ and a sequence constantly equal to $c$ would test the wrong thing. Continuity does look at $f(c)$, so no exclusion is needed, and dropping it is what makes statement 2 meaningful at an isolated point, where the only sequences converging to $c$ are those eventually equal to $c$.

- **What the choice cost is, and what it is not.** The claim recorded here is that the proof *given above* of 2 implies 1 uses countable choice, through [[thm-sequential-criterion-for-function-limits]]. No claim is made that it is necessary; [[rem-heine-criterion-choice-cost]] states in full what this library does and does not assert, including Sierpiński's ZF theorem that a function continuous sequentially at *every* point of $\mathbb{R}$ is continuous, which shows the everywhere-statement and the pointwise statement behave differently.

- **The negative use is the common one.** To show that $f$ is *not* continuous at $c$ it suffices to exhibit one sequence in $A$ converging to $c$ whose image sequence does not converge to $f(c)$, and that uses only the choice-free direction. [[cex-dirichlet-is-nowhere-continuous]] on the companion page is proved without sequences at all, directly from density, which is cheaper still.
