---
id: ex-a-singular-cardinal-of-uncountable-cofinality
kind: example
title: "Assuming countable choice, $\\operatorname{cf}(\\aleph_{\\omega_1}) = \\aleph_1$, so singular does not mean of countable cofinality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cofinality, thm-cofinality-basics, def-aleph-and-beth-hierarchies, cor-the-aleph-and-beth-hierarchies-are-well-defined, lem-successor-cardinal-exists, def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal, thm-countable-subsets-of-omega-one-are-bounded, def-countable-choice, def-countable, lem-countable-iff-surjection-from-n, def-limit-ordinal, def-cofinal-subset-of-an-ordinal, def-cardinal, lem-cardinality-of-a-well-orderable-set, thm-cardinal-arithmetic-agrees-with-finite-counting, lem-omega-least-limit-ordinal, lem-ordinal-basics, lem-ordinal-trichotomy, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "$\\operatorname{cf}(\\aleph_{\\omega_1}) = \\aleph_1$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "UCL, Axiomatic Set Theory, Ch. 4: Cardinal Arithmetic"
      url: "https://www.homepages.ucl.ac.uk/~ucahcjm/ast/ast_notes_4.pdf"
    - title: "Cofinality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cofinality"
    - title: "Regular cardinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Regular_cardinal"
pipeline_run: null
---

## Example

**Assume the Axiom of Countable Choice** $\mathrm{AC}_\omega$
([[def-countable-choice]]). Then

$$\operatorname{cf}(\aleph_{\omega_1}) \;=\; \aleph_1 \;<\; \aleph_{\omega_1},$$

so $\aleph_{\omega_1}$ is **singular** ([[def-cofinality]]) and its cofinality is
**uncountable** ([[def-countable]]).

This separates two conditions that the first singular example runs together. A
singular cardinal is one reachable from below by a strictly shorter family; it
need not be reachable by a **countable** one. Here the reaching family has length
$\omega_1$ and no shorter one will do, and what rules out a shorter one is the
boundedness theorem for $\omega_1$
([[thm-countable-subsets-of-omega-one-are-bounded]]), which is where
$\mathrm{AC}_\omega$ is spent.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice. Write $\omega_1$ for the first uncountable ordinal ([[def-first-uncountable-ordinal]]).

[L1] $\aleph_\lambda = \bigcup\{\aleph_\beta : \beta \in \lambda\}$ at a limit ordinal $\lambda$; every $\aleph_\alpha$ is an infinite cardinal; the operation is strictly increasing; $\aleph_1 = \omega_1$ ([[def-aleph-and-beth-hierarchies]], [[cor-the-aleph-and-beth-hierarchies-are-well-defined]]).

[L2] $\omega_1$ is uncountable, is a cardinal, is a limit ordinal, and every ordinal in it is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-limit-ordinal]]).

[L3] $\aleph_1 = \aleph_0^{+}$ is the least cardinal strictly above $\aleph_0$ ([[lem-successor-cardinal-exists]], [[def-aleph-and-beth-hierarchies]]).

[L4] Assuming $\mathrm{AC}_\omega$, every at most countable $A \subseteq \omega_1$ is bounded below $\omega_1$: $\sup A = \bigcup A$ lies in $\omega_1$ and dominates every member of $A$ ([[thm-countable-subsets-of-omega-one-are-bounded]]).

[L5] A nonempty set is at most countable if and only if it is a surjective image of $\mathbb{N}$ ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L6] For a limit ordinal $\lambda$: $\operatorname{cf}(\lambda)$ is an infinite cardinal, and every cofinal $C \subseteq \lambda$ satisfies $\operatorname{cf}(\lambda) \le \lvert C\rvert$; also $\operatorname{cf}(\lambda)$ is the least length of a cofinal map into $\lambda$ ([[thm-cofinality-basics]], [[def-cofinality]], [[def-cofinal-subset-of-an-ordinal]]).

[L7] For a well-orderable set $X$, $\lvert X\rvert$ is the least ordinal equinumerous with $X$, equinumerous sets receive the same one, and $\lvert \alpha\rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]], [[def-equinumerous]]).

[L8] Every infinite cardinal is a limit ordinal, and a cardinal is infinite exactly when $\omega \le \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[lem-omega-least-limit-ordinal]]).

[L9] Ordinals satisfy trichotomy; $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$; the union of a set of ordinals is its least upper bound; every nonempty set of ordinals has an $\in$-least element; and every strictly increasing map of ordinals is injective ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-injection-surjection-bijection]]).

## Verification

**Proof technique:** direct.

1.1 The set $C = \{\aleph_\alpha : \alpha \in \omega_1\}$ exists by Replacement and is cofinal in $\aleph_{\omega_1}$: $\omega_1$ is a limit ordinal by [L2], so $\aleph_{\omega_1} = \bigcup C$ by [L1] and every $\zeta \in \aleph_{\omega_1}$ lies in some $\aleph_\alpha \in C$; moreover $\alpha \mapsto \aleph_\alpha$ is injective by the strict increase in [L1], so $C \approx \omega_1$ and $\lvert C\rvert = \lvert \omega_1\rvert = \omega_1 = \aleph_1$ by [L7], [L2] and [L1]. [L1, L2, L7, L9]

1.2 The cofinality is not smaller than $\aleph_1$. Put $\beta = \operatorname{cf}(\aleph_{\omega_1})$; it is an infinite cardinal by [L6] and [L8], since $\aleph_{\omega_1}$ is an infinite cardinal and hence a limit ordinal. If $\beta < \aleph_1$ then $\beta \le \aleph_0$ by [L3], so $\beta = \aleph_0 = \omega$ by [L8], and [L6] supplies a cofinal $f : \omega \to \aleph_{\omega_1}$. For each $n \in \omega$ let $\alpha_n$ be the $\in$-least $\alpha \in \omega_1$ with $f(n) \in \aleph_\alpha$, which exists by [L1] and [L9] and is determined rather than chosen. Then $A = \{\alpha_n : n \in \omega\}$ is a nonempty at most countable subset of $\omega_1$ by [L5], so $\gamma = \sup A \in \omega_1$ by [L4], and every $f(n)$ lies in $\aleph_{\alpha_n} \subseteq \aleph_\gamma$ by [L1] and [L9]. But $\aleph_\gamma \in \aleph_{\omega_1}$, and cofinality of $f$ would give some $n$ with $\aleph_\gamma \le f(n) \in \aleph_\gamma$, which [L9] forbids. So $\aleph_1 \le \beta$. [L1, L2, L3, L4, L5, L6, L8, L9]

2.1 By [L6] applied to the cofinal set of step 1.1, $\operatorname{cf}(\aleph_{\omega_1}) \le \lvert C\rvert = \aleph_1$. [step 1.1, L6]

3.1 Steps 2.1 and 1.2 give $\operatorname{cf}(\aleph_{\omega_1}) = \aleph_1$ by [L9]; and $\aleph_1 < \aleph_{\omega_1}$ by the strict increase in [L1], since $1 \in \omega_1$ by [L2], so $\aleph_{\omega_1}$ is singular with uncountable cofinality by [L2]. [step 1.2, step 2.1, L1, L2, L9] ∎

## Remarks

**Why countable choice appears, and where exactly.** It is used once, at [L4]: without it, $\omega_1$ can consistently be the supremum of an $\omega$-indexed family of countable ordinals, and then the argument of step 1.2 collapses. That dependence is inherited, not introduced here — the published boundedness theorem carries the same hypothesis, and states so in its own title.

**What "singular" does and does not mean.** Singular says only $\operatorname{cf}(\kappa) \ne \kappa$. The singular cardinal computed in [[ex-the-cofinality-of-aleph-omega]] has countable cofinality, and a reader who meets only that example may take the two conditions to be the same. They are not: here the cofinality is $\aleph_1$, uncountable, while the cardinal is still singular because $\aleph_1$ is far below $\aleph_{\omega_1}$.

**The pattern behind both computations.** For a limit ordinal $\lambda$ the family $\alpha \mapsto \aleph_\alpha$ restricted to $\lambda$ is cofinal in $\aleph_\lambda$, so $\operatorname{cf}(\aleph_\lambda) \le \lvert \lambda\rvert$ always. The work is entirely in the lower bound, and it is a statement about $\lambda$ rather than about $\aleph_\lambda$: it asks how short a family can be and still reach $\lambda$.
