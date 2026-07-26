---
id: thm-limsup-subadditive
kind: theorem
title: "$\\limsup(x_k + y_k) \\le \\limsup x_k + \\limsup y_k$ whenever the right-hand side is defined in $\\overline{\\mathbb{R}}$, and dually for $\\liminf$"
status: published
origin: session
deps: [def-limsup-liminf, lem-limsup-exists, lem-limsup-epsilon-characterisation, lem-limsup-reflection, lem-liminf-le-limsup, thm-convergence-iff-limsup-equals-liminf, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, def-divergence-to-infinity, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-add-order, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [cex-limsup-subadditivity-strict]
aliases: []
landmark: true
short: "$\\limsup$ is subadditive"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ and $(y_k)$ be sequences of reals ([[def-sequence]]) and write
$\Lambda := \limsup_{k} x_k$, $M := \limsup_{k} y_k$
([[def-limsup-liminf]]).

1. If the sum $\Lambda + M$ is defined in $\overline{\mathbb{R}}$
   ([[def-extended-reals]]), that is if $\{\Lambda, M\} \ne \{+\infty, -\infty\}$,
   then
   $$\limsup_{k}(x_k + y_k) \;\le\; \Lambda + M .$$
2. Dually, writing $\lambda := \liminf_k x_k$ and $\mu := \liminf_k y_k$, if
   $\lambda + \mu$ is defined in $\overline{\mathbb{R}}$ then
   $$\liminf_{k}(x_k + y_k) \;\ge\; \lambda + \mu .$$

**The hypothesis is exactly the one [[def-extended-reals]] forces, and it cannot
be dropped.** When one of $\Lambda$, $M$ is $+\infty$ and the other $-\infty$ the
right-hand side is not an element of $\overline{\mathbb{R}}$ at all, so there is
nothing to compare. The inequality is genuinely an inequality: equality can fail,
and does, for an alternating pair of sequences; the failure of additivity is
recorded as a false statement among this page's examples, and the witness is a
named counterexample on the companion page.

## Facts & Assumptions

**Given:** Sequences $(x_k)$ and $(y_k)$ of reals, their termwise sum $(x_k + y_k)$, and $\Lambda := \limsup_k x_k$, $M := \limsup_k y_k$, assumed to have a sum defined in $\overline{\mathbb{R}}$.

[L1] Tail bounds and the two quantities exist in $\overline{\mathbb{R}}$ for every sequence, $s_n$ being the least upper bound of the $n$-th tail range and $\limsup$ the greatest lower bound of $\{s_n\}$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-limsup-liminf]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total and transitive, $+\infty$ is its greatest element and $-\infty$ its least, and it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Partial addition on $\overline{\mathbb{R}}$: a sum is undefined only for the pairs $(+\infty, -\infty)$ and $(-\infty, +\infty)$; a sum with one summand $+\infty$ and the other $\ne -\infty$ is $+\infty$; a sum with one summand $-\infty$ and the other $\ne +\infty$ is $-\infty$; and $-(a+b) = (-a) + (-b)$, each side defined exactly when the other is ([[def-extended-reals]]).

[L4] Epsilon characterisation for a real limit superior: $\Lambda = \limsup_k x_k$ real implies that for every real $\varepsilon > 0$ one has $x_k < \Lambda + \varepsilon$ eventually ([[lem-limsup-epsilon-characterisation]]).

[L5] $\limsup_k z_k = -\infty$ implies $z_k \to -\infty$; and $z_k \to -\infty$ implies $\limsup_k z_k = -\infty$ ([[lem-liminf-le-limsup]], [[thm-convergence-iff-limsup-equals-liminf]], [[def-divergence-to-infinity]]).

[L6] Reflection: $\limsup_k(-z_k) = -\liminf_k z_k$ and $\liminf_k(-z_k) = -\limsup_k z_k$ ([[lem-limsup-reflection]]).

[L7] Order arithmetic in $\mathbb{R}$: [[lem-of-add-order]] states the strict forms, that inequalities may be translated and added, so $a < a'$ and $b < b'$ give $a + b < a' + b'$; adjoining the case of equality, in which both sides move by the same amount, gives the nonstrict forms used below. In particular $a \le b$ if and only if $-b \le -a$: translation by $-a-b$ turns $a < b$ into $-b < -a$ and back, while $a = b$ holds exactly when $-a = -b$.

[L8] Reciprocal Archimedean property and canonical naturals: for every real $\delta > 0$ there is a natural $m \ge 1$ with $1/m < \delta$; for a natural $m \ge 1$ the element $2m$ is a natural $\ge 1$ with $(2m) \cdot 1_{\mathbb{R}} = 2\big(m \cdot 1_{\mathbb{R}}\big) > 0$, so $1/(2m) > 0$ and $1/(2m) + 1/(2m) = 1/m$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]], [[lem-of-naturals-positive]]).

[L9] Two properties each holding eventually hold together from the larger of the two thresholds on ([[def-sequence]], [[thm-nat-linear-order]], [[def-nat-order]]).

## Proof

**Proof technique:** direct.

1.1 Since $\Lambda + M$ is defined, exactly one of the following three situations holds: at least one of $\Lambda$, $M$ equals $+\infty$, and then the other is $\ne -\infty$; both are real; or neither equals $+\infty$ and at least one equals $-\infty$. Both the hypothesis and the conclusion of claim 1 are unchanged by exchanging the two sequences, so in the third situation it may be assumed that $\Lambda = -\infty$. [given, L2, L3]

2.1 In the first situation $\Lambda + M = +\infty$ by the addition table, and every element of $\overline{\mathbb{R}}$ is $\le +\infty$, so $\limsup_k(x_k + y_k) \le \Lambda + M$. [step 1.1, L2, L3]

2.2 In the second situation let $\delta > 0$ be an arbitrary real, take a natural $m \ge 1$ with $1/m < \delta$ and put $\varepsilon := 1/(2m) > 0$, so that $\varepsilon + \varepsilon = 1/m < \delta$. By [L4] there are thresholds beyond which $x_k < \Lambda + \varepsilon$ and beyond which $y_k < M + \varepsilon$; beyond the larger of them both hold, so adding the two inequalities gives $x_k + y_k < \Lambda + M + \varepsilon + \varepsilon$ for all $k \ge N$, where $N$ is that larger threshold. Hence $\Lambda + M + \varepsilon + \varepsilon$ is an upper bound of the $N$-th tail range of $(x_k + y_k)$, so the $N$-th tail supremum is $\le \Lambda + M + \varepsilon + \varepsilon$, and therefore $\limsup_k(x_k + y_k) \le \Lambda + M + \varepsilon + \varepsilon < \Lambda + M + \delta$. [step 1.1, L1, L2, L4, L7, L8, L9]

2.3 In the third situation, with $\Lambda = -\infty$, first note that there is a real $B$ with $y_k < B$ eventually: if $M$ is real, [L4] with $\varepsilon = 1$ gives $y_k < M + 1$ eventually, so $B := M + 1$ serves; and if $M = -\infty$ then $y_k \to -\infty$ by [L5], so $y_k < 0$ eventually and $B := 0$ serves. Also $\Lambda = -\infty$ gives $x_k \to -\infty$ by [L5]. Now let $c$ be an arbitrary real: since $c - B$ is real, $x_k < c - B$ eventually, and beyond the larger threshold both that and $y_k < B$ hold, so $x_k + y_k < (c - B) + B = c$ there. As $c$ was arbitrary, $x_k + y_k \to -\infty$, hence $\limsup_k(x_k + y_k) = -\infty = \Lambda + M$ by [L5] and the addition table. [step 1.1, L3, L4, L5, L7, L9]

3.1 In the second situation the conclusion follows from step 2.2: taking $\delta = 1$ shows $\limsup_k(x_k + y_k) \le \Lambda + M + 1$, a real number, so the left-hand side is not $+\infty$; if it is $-\infty$ then it is $\le \Lambda + M$ because $-\infty$ is least; and if it is a real $S$ with $S > \Lambda + M$, then $\delta_0 := S - (\Lambda + M) > 0$ and step 2.2 applied with $\delta = \delta_0$ gives $S < \Lambda + M + \delta_0 = S$, which is impossible. So $\limsup_k(x_k + y_k) \le \Lambda + M$ by totality. [step 2.2, L2, L7]

4.1 Claim 1 now holds in all three situations, by steps 2.1, 3.1 and 2.3. [step 2.1, step 3.1, step 2.3, step 1.1]

5.1 For claim 2, suppose $\lambda + \mu$ is defined. By [L6] the reflected sequences have $\limsup_k(-x_k) = -\lambda$ and $\limsup_k(-y_k) = -\mu$, and $(-\lambda) + (-\mu) = -(\lambda + \mu)$ is defined exactly when $\lambda + \mu$ is, by [L3]. Claim 1 applied to $(-x_k)$ and $(-y_k)$, whose termwise sum is $(-(x_k + y_k))$, therefore gives $-\liminf_k(x_k + y_k) = \limsup_k\big(-(x_k+y_k)\big) \le (-\lambda) + (-\mu) = -(\lambda + \mu)$; reflecting this inequality reverses it into $\liminf_k(x_k + y_k) \ge \lambda + \mu$. [step 4.1, L3, L6, L7] ∎

## Remarks

- **The three situations are not decoration.** The middle one is the analytic
  content and the outer two are genuinely different arguments: the first is
  vacuous because $+\infty$ bounds everything, and the third is a statement about
  divergence to $-\infty$ that has to be proved, since a sum of two sequences each
  running off to $-\infty$, or one running off with the other merely bounded
  above, is not covered by any algebra of limits
  ([[def-divergence-to-infinity]] forbids that).

- **Why the real supremum of a sumset is not used.** The natural one-line route,
  $s_n(x+y) \le s_n(x) + s_n(y)$ followed by a passage to the infimum, needs the
  first inequality in $\overline{\mathbb{R}}$ and then still needs an $\varepsilon$
  argument to compare $\inf_n\big(s_n(x) + s_n(y)\big)$ with
  $\Lambda + M$. The identity $\sup(S+T) = \sup S + \sup T$ of [[lem-sup-sum]]
  does not apply, since it requires both sets to be nonempty subsets of
  $\mathbb{R}$ bounded above, and a tail range of an unbounded sequence is not.
  The $\varepsilon$ argument is therefore made directly, once.

- **Both halves of the $\varepsilon$ split are reciprocals of natural numbers, not halvings in
  $\mathbb{R}$.** Choosing $m$ with $1/m < \delta$ and then working with
  $1/(2m)$ keeps every quantity a reciprocal of a canonical natural, so the only
  field facts used are that positives are invertible and that inequalities add.

- **Equality is the exception.** Without a hypothesis on one of the two
  sequences the gap can be as large as the whole oscillation, as
  [[cex-limsup-subadditivity-strict]] shows. It is standard, and neither needed
  nor proved on this page, that the inequality becomes an equality as soon as one
  of the two sequences converges to a real limit.
