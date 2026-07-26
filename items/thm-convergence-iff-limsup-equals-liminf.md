---
id: thm-convergence-iff-limsup-equals-liminf
kind: theorem
title: "A real sequence converges to $L \\in \\mathbb{R}$ iff $\\liminf x_k = \\limsup x_k = L$, and diverges to $\\pm\\infty$ iff both equal $\\pm\\infty$"
status: published
origin: session
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-reflection, lem-limsup-exists, lem-extended-reals-complete, def-real-limit, def-divergence-to-infinity, def-extended-reals, def-extended-limits, def-upper-bound, def-partial-order, def-sequence, lem-rat-embeds-dense, lem-of-abs-value, lem-of-add-order, cor-of-one-positive, thm-nat-linear-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
forward_refs: [ex-limsup-of-alternating-sequence]
aliases: []
landmark: true
short: "convergence $\\iff \\liminf = \\limsup$"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]), with $\limsup$ and
$\liminf$ as in [[def-limsup-liminf]].

1. For $L \in \mathbb{R}$: $(x_k)$ converges to $L$ ([[def-real-limit]]) **if and
   only if** $\liminf_k x_k = \limsup_k x_k = L$.
2. $x_k \to +\infty$ ([[def-divergence-to-infinity]]) **if and only if**
   $\liminf_k x_k = \limsup_k x_k = +\infty$. Moreover $\liminf_k x_k = +\infty$
   on its own already forces $\limsup_k x_k = +\infty$.
3. $x_k \to -\infty$ **if and only if** $\liminf_k x_k = \limsup_k x_k = -\infty$,
   and $\limsup_k x_k = -\infty$ on its own already forces
   $\liminf_k x_k = -\infty$.

The three clauses combine into one statement about the extended line: for
$L \in \overline{\mathbb{R}}$, the sequence $(x_k)$ converges to $L$ in
$\overline{\mathbb{R}}$ ([[def-extended-limits]]) if and only if

$$\liminf_{k} x_k = \limsup_{k} x_k = L .$$

Since $\liminf_k x_k \le \limsup_k x_k$ always ([[lem-liminf-le-limsup]]), the
single equation $\liminf_k x_k = \limsup_k x_k$ is therefore equivalent to
convergence in $\overline{\mathbb{R}}$, and the common value is the limit. A
sequence that neither converges nor diverges to $\pm\infty$ is exactly one for
which the inequality is strict.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, its tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail bounds $s_n = \sup T_n$ and $i_n = \inf T_n$, and the quantities $\limsup_k x_k = \inf\{s_n\}$, $\liminf_k x_k = \sup\{i_n\}$ ([[def-limsup-liminf]]).

[L1] All of $s_n$, $i_n$, $\limsup_k x_k$ and $\liminf_k x_k$ exist in $\overline{\mathbb{R}}$ for every sequence; $i_n$ is the greatest lower bound of $T_n$ and $\liminf_k x_k$ the least upper bound of $\{i_n\}$, with the dual descriptions for $s_n$ and $\limsup_k x_k$ ([[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; $+\infty$ is the greatest element and $-\infty$ the least; and every real is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently; and $L = \liminf_k x_k$ exactly when for every real $\varepsilon > 0$ one has $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k x_k \le \limsup_k x_k$ ([[lem-liminf-le-limsup]]).

[L5] Reflection: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]). Also $x_k \to -\infty$ if and only if $-x_k \to +\infty$: the condition $x_k < M$ for all $k \ge K$ is equivalent to $-x_k > -M$ for all $k \ge K$ by order reversal, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]]); the order reversal used here is strict, and the form stated in [[lem-of-add-order]] is likewise strict, so nothing nonstrict is being borrowed from it.

[L6] Convergence to a real $L$ means: for every rational $\varepsilon > 0$ there is $K$ with $|x_k - L| < \varepsilon$ for all $k \ge K$; and the same relation is obtained by testing every real $\varepsilon > 0$ instead, since below any positive real lies a positive rational ([[def-real-limit]], [[def-sequence]], [[lem-rat-embeds-dense]]).

[L7] Divergence: $x_k \to +\infty$ means that for every real $M$ there is $K$ with $x_k > M$ for all $k \ge K$ ([[def-divergence-to-infinity]]).

[L8] Eventually and frequently, and the fact that a property holding eventually holds frequently, since indices beyond any two given thresholds exist by totality of the order on $\mathbb{N}$; likewise two properties each holding eventually hold together from the larger threshold on ([[def-sequence]], [[thm-nat-linear-order]]).

[L9] Absolute value: for $c > 0$, $|a| < c$ if and only if $-c < a < c$ ([[lem-of-abs-value]]).

[L10] Order arithmetic in $\mathbb{R}$: $0 < 1$, so $t < t + 1$ for every real $t$, and no real is above every real; adding a constant preserves the order ([[cor-of-one-positive]], [[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L \in \mathbb{R}$ and that $(x_k)$ converges to $L$. [assume-hyp, L6]

1.2 For the converse implication of claim 1, assume $L \in \mathbb{R}$ and $\liminf_k x_k = \limsup_k x_k = L$. [assume-hyp, L1]

1.3 For the forward implication of claim 2, assume $x_k \to +\infty$. [assume-hyp, L7]

1.4 For the converse implication of claim 2, assume $\liminf_k x_k = +\infty$. [assume-hyp, L1]

2.1 Under the assumption of step 1.1, let $\varepsilon > 0$ be an arbitrary real. Testing convergence at $\varepsilon$ gives $K$ with $|x_k - L| < \varepsilon$, hence $L - \varepsilon < x_k < L + \varepsilon$, for all $k \ge K$. So $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ eventually, and each of the two therefore also holds frequently. Both halves of each characterisation in [L3] are met, so $\limsup_k x_k = L$ and $\liminf_k x_k = L$. [step 1.1, L3, L6, L8, L9]

2.2 Under the assumption of step 1.2, let $\varepsilon > 0$ be an arbitrary real. The forward halves of the two characterisations in [L3] give $x_k < L + \varepsilon$ for all $k$ beyond some $K_1$ and $x_k > L - \varepsilon$ for all $k$ beyond some $K_2$; beyond the larger of $K_1$ and $K_2$ both hold, so $|x_k - L| < \varepsilon$ there. This holds for every real $\varepsilon > 0$, in particular for every rational one, so $(x_k)$ converges to $L$. [step 1.2, L3, L6, L8, L9]

2.3 Under the assumption of step 1.3, let $M$ be an arbitrary real and take $K$ with $x_k > M$ for all $k \ge K$. Then $M$ is a lower bound of $T_K$, so $M \le i_K$, and $i_K \le \liminf_k x_k$ because $\liminf_k x_k$ is an upper bound of $\{i_n\}$; hence $M \le \liminf_k x_k$. Since $M$ was an arbitrary real, $\liminf_k x_k$ is not $-\infty$, which lies below every real, and it is not a real $t$ either, since $M = t + 1$ would give $t + 1 \le t$. So $\liminf_k x_k = +\infty$. [step 1.3, L1, L2, L7, L10]

2.4 Under the assumption of step 1.4, let $M$ be an arbitrary real. Since $\sup\{i_n\} = +\infty$ and $M < +\infty$, the real $M$ is not an upper bound of $\{i_n\}$, for otherwise the least upper bound would satisfy $+\infty \le M$; by totality there is $n$ with $i_n > M$. Every $k \ge n$ satisfies $x_k \ge i_n > M$, so $x_k > M$ eventually. As $M$ was arbitrary, $x_k \to +\infty$. [step 1.4, L1, L2, L7]

3.1 Steps 2.1 and 2.2 are the two implications of claim 1. [step 2.1, step 2.2, L3]

3.2 For claim 2: if $x_k \to +\infty$ then $\liminf_k x_k = +\infty$ by step 2.3, and then $+\infty = \liminf_k x_k \le \limsup_k x_k$ forces $\limsup_k x_k = +\infty$ since $+\infty$ is the greatest element; conversely if $\liminf_k x_k = \limsup_k x_k = +\infty$ then in particular $\liminf_k x_k = +\infty$ and step 2.4 gives $x_k \to +\infty$. The same use of [L4] is the additional assertion that $\liminf_k x_k = +\infty$ alone forces $\limsup_k x_k = +\infty$. [step 2.3, step 2.4, L2, L4]

4.1 For claim 3, reflection gives $x_k \to -\infty$ exactly when $-x_k \to +\infty$, which by claim 2 holds exactly when $\liminf_k(-x_k) = \limsup_k(-x_k) = +\infty$, that is $-\limsup_k x_k = -\liminf_k x_k = +\infty$, that is $\limsup_k x_k = \liminf_k x_k = -\infty$; and $\limsup_k x_k = -\infty$ alone forces $\liminf_k x_k \le -\infty$, hence $\liminf_k x_k = -\infty$, since $-\infty$ is least. Claims 1, 2 and 3 together say that for $L \in \overline{\mathbb{R}}$ the sequence converges to $L$ in $\overline{\mathbb{R}}$ exactly when $\liminf_k x_k = \limsup_k x_k = L$, since the three clauses of that definition are convergence to a real $L$, divergence to $+\infty$ and divergence to $-\infty$. [step 3.1, step 3.2, L2, L4, L5] ∎

## Remarks

- **This is the theorem that makes $\limsup$ and $\liminf$ worth defining.** They
  exist for every sequence, with no hypothesis, and their coincidence is exactly
  convergence in $\overline{\mathbb{R}}$. So a question about convergence becomes
  a question about two computable quantities, and a proof of convergence can be
  assembled from one-sided estimates without a candidate limit in hand.

- **The equation is between elements of $\overline{\mathbb{R}}$, and reading it in
  $\mathbb{R}$ would lose two thirds of the content.** Clauses 2 and 3 are
  statements about divergence, and they are true statements about
  [[def-divergence-to-infinity]], not a redefinition of it: nothing above claims
  that a sequence diverging to $+\infty$ has a limit in $\mathbb{R}$, and the
  symbol $+\infty$ occurring in them is the element of $\overline{\mathbb{R}}$
  introduced in [[def-extended-reals]].

- **A sequence with $\liminf < \limsup$ does neither.** The alternating sequence
  is the standard witness, with the two values $-1$ and $1$
  ([[ex-limsup-of-alternating-sequence]]); it is bounded, so it also does not
  diverge to $\pm\infty$, and the theorem says its failure to converge is exactly
  the gap between the two quantities.
