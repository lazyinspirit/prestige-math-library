---
id: cor-sequential-criterion-for-nonexistence
kind: corollary
title: "A function has no limit at $c$ as soon as two sequences in $A \\setminus \\{c\\}$ tending to $c$ give different limits of the values"
status: published
origin: session
deps: [thm-sequential-criterion-for-function-limits, def-function-limit, def-limit-point-r, def-sequence, def-real-limit, lem-limit-unique]
justified_by: []
aliases: [cor-divergence-test-for-function-limits]
landmark: true
short: "sequential test for no limit"
proof_strategy: contrapositive
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Cor. to Thm 4.2)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.1"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$, let $f : A \to \mathbb{R}$ and let $c$ be a limit
point of $A$ ([[def-limit-point-r]]). Then $f$ has **no** limit at $c$ — that
is, no $L \in \mathbb{R}$ satisfies $\lim_{x \to c} f(x) = L$
([[def-function-limit]]) — as soon as either of the following occurs.

1. There are sequences $(x_k)$ and $(y_k)$ with all terms in $A \setminus \{c\}$,
   both converging to $c$, and reals $P \ne Q$ with $f(x_k) \to P$ and
   $f(y_k) \to Q$ ([[def-sequence]], [[def-real-limit]]).
2. There is a sequence $(x_k)$ with all terms in $A \setminus \{c\}$, converging
   to $c$, for which $(f(x_k))$ does not converge.

**Only the choice-free half of the Heine criterion is used.** The proof runs the
implication from condition 1 to condition 2 of
[[thm-sequential-criterion-for-function-limits]], which is a theorem of ZF; no
sequence is constructed here, both being supplied by the hypothesis. So this
corollary, the workhorse for showing that a limit fails to exist, costs no
choice principle at all.

## Facts & Assumptions

**Given:** A set $A \subseteq \mathbb{R}$, a function $f : A \to \mathbb{R}$ and a limit point $c$ of $A$ ([[def-limit-point-r]], [[def-function-limit]]).

[L1] Heine criterion, the direction from the $\varepsilon$-$\delta$ limit to sequences: if $\lim_{x \to c} f(x) = L$ then $f(z_k) \to L$ for every sequence $(z_k)$ with all terms in $A \setminus \{c\}$ converging to $c$ ([[thm-sequential-criterion-for-function-limits]]). That direction is proved without any choice principle.

[L2] A sequence of reals has at most one limit, so two limits of the same sequence are equal, and a sequence with a limit converges ([[lem-limit-unique]], [[def-real-limit]], [[def-sequence]]).

## Proof

**Proof technique:** contrapositive.

1.1 Each of the two claims has the form "hypothesis $\Rightarrow$ $f$ has no limit at $c$"; we prove the contrapositive of each, namely that if some $L \in \mathbb{R}$ satisfies $\lim_{x \to c} f(x) = L$ then neither hypothesis can hold. [contrapositive-reduce]

1.2 Assume there is $L \in \mathbb{R}$ with $\lim_{x \to c} f(x) = L$. [assume-hyp]

2.1 Let $(z_k)$ be an arbitrary sequence with all terms in $A \setminus \{c\}$ converging to $c$. By [L1], $(f(z_k))$ converges, with limit $L$. [step 1.2, L1]

3.1 Under hypothesis 1 this applies to $(x_k)$ and to $(y_k)$: $f(x_k) \to P$ and $f(x_k) \to L$ give $P = L$ by [L2], and likewise $Q = L$, so $P = Q$; hypothesis 1, which asserts $P \ne Q$, therefore fails. [step 2.1, L2]

3.2 Under hypothesis 2 it applies to $(x_k)$ and gives that $(f(x_k))$ converges; hypothesis 2, which asserts that it does not, therefore fails. [step 2.1, L2]

4.1 So the existence of a limit of $f$ at $c$ excludes both hypotheses; contrapositively, either hypothesis excludes the existence of a limit of $f$ at $c$. [step 3.1, step 3.2, discharge-contrapositive] ∎

## Remarks

- **This is the standard way a limit is shown not to exist**, and the reason is that the direct route would have to refute a statement beginning "there exists $L$": one would have to argue about every real $L$ at once. Two sequences reduce that to a single computation, as on the companion page for $\psi(1/x)$ at $0$ and for the indicator of $\mathbb{Q}$ at every point.

- **The hypothesis "all terms in $A \setminus \{c\}$" is not decorative.** A sequence allowed to take the value $c$ carries information about $f(c)$, which [[def-function-limit]] deliberately ignores; the constant sequence $z_k = c$ would then refute every limit at once.

- **What the corollary does not say.** It gives a sufficient condition for the limit not to exist, not a necessary one in any weaker form: the converse statement, that a limit exists as soon as all such image sequences converge to one value, is the other direction of [[thm-sequential-criterion-for-function-limits]] and is exactly the direction that spends countable choice ([[rem-heine-criterion-choice-cost]]).
