---
id: lem-limsup-epsilon-characterisation
kind: lemma
title: "For finite $L$: $L = \\limsup x_k$ iff for every $\\varepsilon > 0$ one has $x_k < L + \\varepsilon$ eventually and $x_k > L - \\varepsilon$ frequently"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-limsup-liminf, lem-limsup-exists, lem-limsup-reflection, lem-extended-reals-complete, def-extended-reals, def-upper-bound, def-partial-order, def-sequence, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-add-order, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$\\varepsilon$ test for $\\limsup$"
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

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $L \in \mathbb{R}$,
with *eventually* and *frequently* as in [[def-sequence]] and $\limsup$,
$\liminf$ as in [[def-limsup-liminf]].

1. $L = \limsup_{k} x_k$ **if and only if** for every real $\varepsilon > 0$
   $$x_k < L + \varepsilon \ \text{ eventually} \qquad \text{and} \qquad x_k > L - \varepsilon \ \text{ frequently}.$$
2. Dually, $L = \liminf_{k} x_k$ **if and only if** for every real
   $\varepsilon > 0$
   $$x_k > L - \varepsilon \ \text{ eventually} \qquad \text{and} \qquad x_k < L + \varepsilon \ \text{ frequently}.$$

**The hypothesis $L \in \mathbb{R}$ is not a restriction that can be lifted.**
Both conditions are stated with real $\varepsilon$ and real $L \pm \varepsilon$,
so neither has a reading at $L = \pm\infty$; the infinite cases are handled
instead by the convergence theorem later on this page. What the lemma does say
is that whenever $\limsup_k x_k$ happens to be a real number, it is pinned down by
the familiar two-sided test: nothing exceeds it by a fixed positive amount from
some index on, and something comes within any fixed positive amount of it
arbitrarily late.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, a real number $L$, the tail ranges $T_n = \{x_k : k \ge n\}$, the extended tail suprema $s_n = \sup T_n$, and $\Lambda := \limsup_k x_k = \inf\{s_n : n \in \mathbb{N}\}$ ([[def-limsup-liminf]]).

[L1] $\Lambda$ and every $s_n$ exist in $\overline{\mathbb{R}}$ for every sequence, and $\Lambda$ is the greatest lower bound of $\{s_n\}$ while $s_n$ is the least upper bound of $T_n$ ([[lem-extended-reals-complete]], [[lem-limsup-exists]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total, so the failure of $a \le b$ is $b < a$; it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$; and every real number is $< +\infty$ and $> -\infty$ ([[def-extended-reals]], [[def-partial-order]]).

[L3] A property $P$ of indices holds *eventually* when it holds for all $k \ge K$ for some $K$, and *frequently* when for every $K$ it holds for some $k \ge K$ ([[def-sequence]]).

[L4] Reciprocal Archimedean property: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$: for $\varepsilon > 0$ one has $L - \varepsilon < L < L + \varepsilon$, and $a < b$ if and only if $-b < -a$, both by translation invariance; the order is total, so exactly one of $a < b$, $a = b$, $b < a$ holds and $a < a$ is impossible ([[lem-of-add-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L6] Reflection exchanges the two quantities: $\limsup_k(-x_k) = -\liminf_k x_k$ and $\liminf_k(-x_k) = -\limsup_k x_k$ ([[lem-limsup-reflection]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication of claim 1, assume $L = \Lambda$ and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L1]

1.2 For the converse implication of claim 1, assume that for every real $\varepsilon > 0$ the sequence satisfies $x_k < L + \varepsilon$ eventually and $x_k > L - \varepsilon$ frequently. [assume-hyp, L3]

2.1 Under the assumption of step 1.1, $L + \varepsilon > L = \Lambda$, so $L + \varepsilon$ is not a lower bound of $\{s_n\}$, since $\Lambda$ is the greatest lower bound; by totality there is $n$ with $s_n < L + \varepsilon$. For every $k \ge n$ we have $x_k \le s_n$, hence $x_k < L + \varepsilon$; so $x_k < L + \varepsilon$ eventually. [step 1.1, L1, L2, L3, L5]

2.2 Under the assumption of step 1.1, fix $n \in \mathbb{N}$. Then $\Lambda \le s_n$ because $\Lambda$ is a lower bound of $\{s_n\}$, and $L - \varepsilon < L = \Lambda$, so $L - \varepsilon < s_n$. Hence $L - \varepsilon$ is not an upper bound of $T_n$, for an upper bound $u$ of $T_n$ satisfies $s_n \le u$; by totality of the order on $\mathbb{R}$ there is therefore $k \ge n$ with $x_k > L - \varepsilon$. As $n$ was arbitrary, $x_k > L - \varepsilon$ frequently. [step 1.1, L1, L2, L3, L5]

2.3 Under the assumption of step 1.2, let $\varepsilon > 0$ be a real and take $N$ with $x_k < L + \varepsilon$ for all $k \ge N$. Then $L + \varepsilon$ is an upper bound of $T_N$, so $s_N \le L + \varepsilon$ by leastness, and $\Lambda \le s_N$ because $\Lambda$ is a lower bound of $\{s_n\}$; hence $\Lambda \le L + \varepsilon$. [step 1.2, L1, L2, L3]

2.4 Under the assumption of step 1.2, let $\varepsilon > 0$ be a real and fix $n$. There is $k \ge n$ with $x_k > L - \varepsilon$, and $x_k \le s_n$, so $L - \varepsilon < s_n$ and in particular $L - \varepsilon \le s_n$. As $n$ was arbitrary, $L - \varepsilon$ is a lower bound of $\{s_n\}$, so $L - \varepsilon \le \Lambda$ by greatest-lower-boundedness. [step 1.2, L1, L2, L3]

3.1 Taking $\varepsilon = 1$ in steps 2.3 and 2.4 gives $L - 1 \le \Lambda \le L + 1$ with $L \pm 1$ real, so $\Lambda$ is neither $+\infty$ nor $-\infty$ and is therefore a real number. Suppose $\Lambda > L$ and put $\delta := \Lambda - L > 0$; choosing a natural $m \ge 1$ with $1/m < \delta$ and applying step 2.3 with $\varepsilon = 1/m$ gives $\Lambda \le L + 1/m < L + \delta = \Lambda$, which is impossible. Suppose instead $\Lambda < L$ and put $\delta := L - \Lambda > 0$; choosing $m \ge 1$ with $1/m < \delta$ and applying step 2.4 with $\varepsilon = 1/m$ gives $L - 1/m \le \Lambda$, that is $\delta = L - \Lambda \le 1/m < \delta$, again impossible. By trichotomy $\Lambda = L$. [step 2.3, step 2.4, L2, L4, L5]

4.1 Steps 2.1 and 2.2 prove the forward implication of claim 1 and step 3.1 proves its converse, so claim 1 holds. [step 2.1, step 2.2, step 3.1]

5.1 For claim 2, note that $L = \liminf_k x_k$ holds exactly when $-L = -\liminf_k x_k = \limsup_k(-x_k)$, since negation is injective on $\overline{\mathbb{R}}$. Applying claim 1 to the sequence $(-x_k)$ and the real number $-L$, that holds exactly when for every real $\varepsilon > 0$ one has $-x_k < -L + \varepsilon$ eventually and $-x_k > -L - \varepsilon$ frequently. Negating each of the two inequalities reverses it, turning them into $x_k > L - \varepsilon$ eventually and $x_k < L + \varepsilon$ frequently, which is claim 2. [step 4.1, L5, L6] ∎

## Remarks

- **The two halves are not interchangeable.** "Eventually below $L + \varepsilon$"
  says $L$ is not exceeded in the long run; "frequently above $L - \varepsilon$"
  says $L$ is approached again and again. Weakening the first to *frequently*
  would make the condition hold for $L = \liminf$ as well, and strengthening the
  second to *eventually* would force convergence, which is exactly the extra
  content of [[thm-convergence-iff-limsup-equals-liminf]].

- **Real $\varepsilon$ is used throughout, and no rational test is involved.**
  Neither condition is a convergence statement, so [[def-real-limit]] and its
  quantification over rational $\varepsilon$ do not enter. Where a convergence
  hypothesis has to be fed into this lemma, as in
  [[thm-convergence-iff-limsup-equals-liminf]], the passage between rational and
  real $\varepsilon$ is made there, by the sanctioned remark of [[def-sequence]].

- **Why the epsilon lemmas for the real supremum are not cited.**
  [[lem-sup-epsilon]] and [[lem-inf-epsilon]] characterise the *real* supremum and
  infimum of a nonempty set bounded on the relevant side. Here $s_n$ may be
  $+\infty$ and the family $\{s_n\}$ may be unbounded below in $\mathbb{R}$, so
  neither lemma applies to the sets actually in play; the corresponding steps
  above are made directly from the least-upper-bound and greatest-lower-bound
  properties in $\overline{\mathbb{R}}$ ([[lem-extended-reals-complete]]), which
  need no hypothesis.

- **The Archimedean property is what closes the converse.** Steps 2.3 and 2.4
  give $L - \varepsilon \le \Lambda \le L + \varepsilon$ for every positive real
  $\varepsilon$, and passing from that to $\Lambda = L$ needs a positive real
  strictly below any prescribed positive gap; [[cor-archimedean-reciprocal]]
  supplies $1/m$.
