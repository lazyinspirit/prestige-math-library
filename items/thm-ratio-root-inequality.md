---
id: thm-ratio-root-inequality
kind: theorem
title: "For $a_k > 0$: $\\liminf a_{k+1}/a_k \\le \\liminf a_k^{1/k} \\le \\limsup a_k^{1/k} \\le \\limsup a_{k+1}/a_k$"
status: draft
origin: session
deps: [def-limsup-liminf, lem-limsup-epsilon-characterisation, lem-liminf-le-limsup, lem-limsup-monotone-comparison, lem-limsup-exists, lem-extended-reals-complete, thm-convergence-iff-limsup-equals-liminf, def-extended-reals, def-divergence-to-infinity, thm-nth-roots-exist, def-rational-power, lem-rational-power-monotone, lem-rational-power-laws, lem-nth-root-of-constant-tends-to-one, lem-power-monotone, def-integer-power, lem-power-laws, thm-of-archimedean, cor-archimedean-reciprocal, lem-of-inverse-positive, thm-algebra-of-limits, thm-induction-principle, lem-rat-embeds-dense, lem-of-add-order, lem-of-sign-rules, prop-of-multiply-inequalities, def-sequence, def-real-limit, def-upper-bound, def-partial-order, def-nat-order, thm-nat-linear-order]
justified_by: []
forward_refs: [ex-ratio-fails-root-succeeds, ex-strict-ratio-root-chain]
aliases: []
landmark: true
short: "ratio-to-root chain"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Root test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Root_test"
    - title: "Ratio test (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ratio_test"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.37)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(a_k)_{k \in \mathbb{N}}$ be a sequence of reals ([[def-sequence]]) with
$a_k > 0$ for every $k$. Put

$$q_k := \frac{a_{k+1}}{a_k}, \qquad r_k := a_{k+1}^{1/(k+1)} \qquad (k \in \mathbb{N}),$$

with roots as in [[thm-nth-roots-exist]] and [[def-rational-power]]. Then, in
$\overline{\mathbb{R}}$ ([[def-limsup-liminf]], [[def-extended-reals]]),

$$\liminf_{k} q_k \;\le\; \liminf_{k} r_k \;\le\; \limsup_{k} r_k \;\le\; \limsup_{k} q_k .$$

**The root sequence must start at index $1$, and $(r_k)$ is the shift that makes
it a sequence on $\mathbb{N}$.** The classical statement writes $a_n^{1/n}$, which
is meaningful only for $n \ge 1$, since $1/0$ is not a rational number; sequences
here are functions on $\mathbb{N}$ and $\mathbb{N}$ contains $0$
([[def-sequence]]), so the root family is written $r_k = a_{k+1}^{1/(k+1)}$,
which is $a_n^{1/n}$ reindexed by $n = k+1$. The ratio family $q_k$ needs no
shift, and the four quantities in the display are those of the two sequences
$(q_k)$ and $(r_k)$ exactly as written here.

**This is why the root test dominates the ratio test.** If the ratios converge,
the outer two quantities coincide and the chain forces the roots to converge to
the same value; but the roots can converge when the ratios do not, and then the
chain is strict at both ends. Both phenomena are exhibited by named examples on
the companion page.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k > 0$ for every $k$; the ratio sequence $q_k = a_{k+1}/a_k$; the root sequence $r_k = a_{k+1}^{1/(k+1)}$; and $\iota(n) = n \cdot 1_{\mathbb{R}}$ for the canonical naturals.

[L1] Tail ranges, extended tail bounds and the two quantities exist for every sequence, with $s_n$ the least upper bound of the $n$-th tail range and $i_n$ its greatest lower bound, $\limsup = \inf\{s_n\}$ and $\liminf = \sup\{i_n\}$ ([[def-limsup-liminf]], [[lem-limsup-exists]], [[lem-extended-reals-complete]], [[def-upper-bound]], [[def-partial-order]]).

[L2] The order on $\overline{\mathbb{R}}$ is total and transitive, $+\infty$ is greatest and $-\infty$ least, it restricts on $\mathbb{R}$ to the order of $\mathbb{R}$, and an element between two reals is real ([[def-extended-reals]], [[def-partial-order]]).

[L3] Epsilon characterisation, for a real $L$: $L = \limsup_k z_k$ gives $z_k < L + \varepsilon$ eventually for every real $\varepsilon > 0$; $L = \liminf_k z_k$ gives $z_k > L - \varepsilon$ eventually for every real $\varepsilon > 0$ ([[lem-limsup-epsilon-characterisation]]).

[L4] $\liminf_k z_k \le \limsup_k z_k$ ([[lem-liminf-le-limsup]]).

[L5] Comparison: $z_k \le w_k$ eventually implies $\limsup_k z_k \le \limsup_k w_k$ and $\liminf_k z_k \le \liminf_k w_k$ ([[lem-limsup-monotone-comparison]]).

[L6] A sequence converging to a real $c$ has $\limsup = \liminf = c$; and $\liminf_k z_k = +\infty$ implies $z_k \to +\infty$, hence $z_k > M$ eventually for every real $M$ ([[thm-convergence-iff-limsup-equals-liminf]], [[def-divergence-to-infinity]]).

[L7] For every real $C > 0$ the sequence $C^{1/(k+1)}$ converges to $1$ ([[lem-nth-root-of-constant-tends-to-one]]).

[L8] Algebra of limits: a scalar multiple of a convergent sequence converges to the scalar multiple of the limit ([[thm-algebra-of-limits]]).

[L9] Roots and powers of positive reals: $x^{1/n}$ exists, is unique and is $> 0$ for $x > 0$ and $n \ge 1$; $(xy)^{1/n} = x^{1/n} y^{1/n}$; the integer power $x^n$ is the rational power at exponent $n$, so $(x^n)^{1/n} = x^{n \cdot (1/n)} = x$; $x^{-m} = 1/x^m$ and $x^{m} x^{m'} = x^{m+m'}$ for integer exponents and $x \ne 0$; $x^n > 0$ for $x > 0$; and $0 \le x \le y$ implies $x^{1/n} \le y^{1/n}$ ([[thm-nth-roots-exist]], [[def-rational-power]], [[lem-rational-power-laws]], [[lem-rational-power-monotone]], [[def-integer-power]], [[lem-power-laws]], [[lem-power-monotone]]).

[L10] Induction principle ([[thm-induction-principle]]).

[L11] Archimedean facts: for every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; and $0 < x < y$ gives $0 < 1/y < 1/x$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L12] Order arithmetic: [[lem-of-add-order]] and claim 4 of [[lem-of-sign-rules]] state the strict forms, that inequalities may be translated and added and that multiplication by a positive element preserves $<$; adjoining the case of equality, where both sides move or scale alike, gives the nonstrict forms used below. Products of nonnegative inequalities multiply in the nonstrict form stated by [[prop-of-multiply-inequalities]], and the order on $\mathbb{R}$ is total.

[L13] Strictly between any two reals lies a rational ([[lem-rat-embeds-dense]]).

[L14] The order on $\mathbb{N}$ is total and transitive ([[def-nat-order]], [[thm-nat-linear-order]], [[def-real-limit]]).

## Proof

**Proof technique:** direct.

1.1 Every $q_k$ is positive, being a quotient of positive reals, and every $r_k$ is positive, being a root of the positive real $a_{k+1}$. Hence $0$ is a lower bound of every tail range of $(q_k)$ and of $(r_k)$, so every tail infimum is $\ge 0$ and therefore $\liminf_k q_k \ge 0$ and $\liminf_k r_k \ge 0$; with [L4] this also gives $\limsup_k q_k \ge 0$. [given, L1, L2, L4, L9, L11]

1.2 Let $c > 0$ be real, let $N \in \mathbb{N}$ and put $C := a_N c^{-N}$, a positive real. If $a_{k+1} \le c\,a_k$ for every $k \ge N$ then $a_n \le C c^n$ for every $n \ge N$; if $a_{k+1} \ge c\,a_k$ for every $k \ge N$ then $a_n \ge C c^n$ for every $n \ge N$. Both are inductions on $j$ for $n = N + j$: at $j = 0$ one has $C c^N = a_N c^{-N} c^N = a_N c^0 = a_N$, and the inductive step multiplies the bound at $n$ by the positive $c$ and uses the hypothesis at $k = n$. [given, L9, L10, L12]

1.3 Let $C > 0$ and $c > 0$ be real and $n \ge 1$ a natural. Then $(C c^n)^{1/n} = C^{1/n} (c^n)^{1/n} = C^{1/n} c$. Consequently $0 < a_n \le C c^n$ gives $a_n^{1/n} \le C^{1/n} c$, and $a_n \ge C c^n > 0$ gives $a_n^{1/n} \ge C^{1/n} c$, since $x \mapsto x^{1/n}$ is nondecreasing on the nonnegative reals. [given, L9]

1.4 For real $C > 0$ and $c > 0$ the sequence $u_k := C^{1/(k+1)} c$ converges to $c$, by [L7] and the scalar rule; hence $\limsup_k u_k = \liminf_k u_k = c$. [given, L6, L7, L8]

1.5 If $\limsup_k q_k = +\infty$ then $\limsup_k r_k \le \limsup_k q_k$, since $+\infty$ is the greatest element of $\overline{\mathbb{R}}$. [given, L2]

2.1 Suppose $\beta := \limsup_k q_k$ is real, and let $\varepsilon > 0$ be an arbitrary real. Put $c := \beta + \varepsilon$, which is positive since $\beta \ge 0$. By [L3] there is $N$ with $q_k < c$ for all $k \ge N$, that is $a_{k+1} < c\,a_k$ after multiplying by $a_k > 0$; so $a_{k+1} \le c\,a_k$ for $k \ge N$, and step 1.2 gives $a_n \le C c^n$ for all $n \ge N$ with $C := a_N c^{-N} > 0$. For $k \ge N$ the index $n := k+1$ satisfies $n \ge N$ and $n \ge 1$, so step 1.3 gives $r_k \le C^{1/(k+1)} c = u_k$. By step 1.4 and [L5], $\limsup_k r_k \le \limsup_k u_k = c = \beta + \varepsilon$. [step 1.1, step 1.2, step 1.3, step 1.4, L3, L5, L12, L14]

2.2 If $\alpha := \liminf_k q_k = 0$ then $\liminf_k r_k \ge 0 = \alpha$ by step 1.1. [step 1.1]

2.3 Suppose $\alpha := \liminf_k q_k > 0$ and let $c$ be a real with $0 < c < \alpha$. Then $q_k > c$ eventually: if $\alpha$ is real this is [L3] applied with $\varepsilon := \alpha - c > 0$, and if $\alpha = +\infty$ then $q_k \to +\infty$ by [L6], so $q_k > c$ eventually. Fix $N$ with $q_k > c$ for all $k \ge N$; then $a_{k+1} \ge c\,a_k$ for $k \ge N$, so step 1.2 gives $a_n \ge C c^n$ for all $n \ge N$ with $C := a_N c^{-N} > 0$, and step 1.3 gives $r_k \ge C^{1/(k+1)} c = u_k$ for every $k \ge N$. By step 1.4 and [L5], $\liminf_k r_k \ge \liminf_k u_k = c$. [step 1.1, step 1.2, step 1.3, step 1.4, L3, L5, L6, L12, L14]

3.1 Hence $\limsup_k r_k \le \limsup_k q_k$. By step 1.1 the element $\beta = \limsup_k q_k$ is $\ge 0$, so it is either $+\infty$, which is step 1.5, or real. In the real case step 2.1 with $\varepsilon = 1$ gives $\limsup_k r_k \le \beta + 1$, a real, so $\limsup_k r_k \ne +\infty$; if $\limsup_k r_k = -\infty$ it is $\le \beta$; and otherwise it is a real $S$, and $S > \beta$ would give, on choosing a natural $m \ge 1$ with $1/m < S - \beta$ and applying step 2.1 with $\varepsilon = 1/m$, the impossibility $S \le \beta + 1/m < S$. By totality $\limsup_k r_k \le \beta$. [step 2.1, step 1.5, step 1.1, L2, L11, L12]

3.2 Hence $\liminf_k q_k \le \liminf_k r_k$. By step 1.1 the element $\alpha = \liminf_k q_k$ is $\ge 0$, so it is $0$, or a positive real, or $+\infty$. The first case is step 2.2. If $\alpha$ is a positive real and $\liminf_k r_k < \alpha$, then $\liminf_k r_k$ lies between the reals $0$ and $\alpha$ by step 1.1 and is therefore real, so [L13] supplies a real $c$ with $\liminf_k r_k < c < \alpha$, necessarily $c > 0$; step 2.3 then gives $\liminf_k r_k \ge c$, contradicting $c > \liminf_k r_k$, so $\liminf_k r_k \ge \alpha$ by totality. If $\alpha = +\infty$, step 2.3 gives $\liminf_k r_k \ge c$ for every real $c$ with $c > 0$, so $\liminf_k r_k$ is not $-\infty$, and it is not a real $t$ either, since $t \ge 0$ by step 1.1 and then $c := t+1 > 0$ would give $t \ge t+1$; hence $\liminf_k r_k = +\infty = \alpha$. [step 2.2, step 2.3, step 1.1, L2, L12, L13]

4.1 Combining the three links, $\liminf_k q_k \le \liminf_k r_k$ by step 3.2, $\liminf_k r_k \le \limsup_k r_k$ by [L4], and $\limsup_k r_k \le \limsup_k q_k$ by step 3.1. [step 3.1, step 3.2, L4] ∎

## Remarks

- **The mechanism is that a ratio bound integrates to a geometric bound.** If the
  ratios are eventually below $c$ then the terms are eventually below a constant
  times $c^n$, and taking $n$-th roots turns the constant into $C^{1/n}$, which
  tends to $1$ by [[lem-nth-root-of-constant-tends-to-one]]. That single lemma is
  what makes the constant disappear, and it is the only analytic input; everything
  else is the comparison lemma [[lem-limsup-monotone-comparison]] and order
  bookkeeping.

- **All four quantities can be different, and the two outer inequalities can both
  be strict.** [[ex-strict-ratio-root-chain]] gives a positive sequence with
  chain $0 < 1/3 < 1/2 < +\infty$, so no two of the four coincide, and
  [[ex-ratio-fails-root-succeeds]] is the standard witness in which the roots
  converge while the ratios oscillate across $1$.

- **The chain also explains the practical rule.** When
  $\limsup_k q_k < 1$ the chain forces $\limsup_k r_k < 1$, so any conclusion
  drawn from the roots is available from the ratios; but
  $\limsup_k r_k < 1$ can hold with $\limsup_k q_k > 1$, and then only the root
  side is usable. This is the sense in which the root criterion is the stronger
  of the two.

- **The hypothesis $a_k > 0$ is needed at every index, not merely eventually.**
  The ratios must be defined, which needs $a_k \ne 0$, and the roots must be
  defined, which needs $a_{k+1} \ge 0$; positivity also lets the ratio
  inequalities be cleared of denominators. A sequence positive only from some
  index on can be handled by passing to that tail, which changes none of the four
  quantities.
