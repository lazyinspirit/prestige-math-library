---
id: lem-of-sequence-basics
kind: lemma
title: "Sequence basics in an arbitrary ordered field: limits are unique, limits preserve non-strict inequalities, convergent sequences are Cauchy, Cauchy sequences are bounded, and a Cauchy sequence with a convergent subsequence converges"
status: published
origin: session
deps: [rem-sequence-conventions, def-sequences-in-an-ordered-field, def-ordered-field, lem-of-abs-value, lem-of-triangle-inequality, lem-of-add-order, lem-index-map-grows, lem-of-inverse-positive, lem-of-naturals-positive, cor-of-one-positive, thm-induction-principle, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §2.1 and §2.4"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $(x_k)$, $(y_k)$ be
sequences in $F$, with convergence in $F$, Cauchyness in $F$, boundedness and
subsequences as in [[def-sequences-in-an-ordered-field]]. Then:

1. **Limits are unique.** If $x_k \to L$ and $x_k \to L'$ in $F$, then $L = L'$.
   A convergent sequence therefore has exactly one limit in $F$ and the notation
   $\lim_k x_k$ denotes it unambiguously. This is the licence under which the
   remaining clauses are written as equations between limits, and it is not new
   here: [[def-sequences-in-an-ordered-field]] already establishes it, in an
   arbitrary ordered field and with no completeness or Archimedean hypothesis.
   It is restated as clause 1 so that this lemma is self-contained as the
   citation target of the whole abstract chain on this page.
2. **Limits preserve non-strict inequalities.** If $(x_k)$ and $(y_k)$ both
   converge in $F$ and $x_k \le y_k$ for every $k$, then

   $$\lim_k x_k \;\le\; \lim_k y_k .$$

3. **Convergent implies Cauchy.** If $(x_k)$ converges in $F$, it is Cauchy in
   $F$.
4. **Cauchy implies bounded.** If $(x_k)$ is Cauchy in $F$, it is bounded.
5. **A Cauchy sequence with a convergent subsequence converges.** If $(x_k)$ is
   Cauchy in $F$ and some subsequence $(x_{n_j})$ converges in $F$, then $(x_k)$
   converges in $F$ as well, and

   $$\lim_k x_k \;=\; \lim_j x_{n_j} .$$

   Both sides are asserted to exist: the right-hand side by hypothesis, the
   left-hand side as part of the conclusion.

**Why this is a separate item.** Each of the five is proved in this library for
sequences of *reals*, and none of those proofs may be cited here.
[[rem-sequence-conventions]] is explicit about it: a theorem about sequences of
reals is a theorem about $\mathbb{R}$, and the fact that its argument would
transfer to an arbitrary ordered field is a statement about the argument, not a
licence to cite the result. The five are collected here, proved from the ordered
field axioms alone, so that the completeness equivalences of this page have one
place to cite instead of five inline reconstructions.

## Facts & Assumptions

**Given:** An ordered field $F$ and sequences $(x_k)$, $(y_k)$ in $F$. Each of the five claims is proved under its own stated hypotheses; nothing is assumed of $(x_k)$ or $(y_k)$ outside the claim being proved.

[L1] Sequences in an ordered field: $(x_k)$ converges to $L$ in $F$ when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with $|x_k - L| < \varepsilon$ for all $k \ge N$; $(x_k)$ is Cauchy in $F$ when for every $\varepsilon > 0$ in $F$ there is $N \in \mathbb{N}$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge N$; $(x_k)$ is bounded when there is $M \in F$ with $|x_k| \le M$ for every $k$; and a subsequence of $(x_k)$ is a sequence $(x_{n_j})_{j \in \mathbb{N}}$ for a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ ([[def-sequences-in-an-ordered-field]]).

[L2] Triangle inequality: $|u + v| \le |u| + |v|$ for $u, v \in F$ ([[lem-of-triangle-inequality]]).

[L3] Absolute value: $|u| \ge 0$; $|u| = 0$ if and only if $u = 0$; $|-u| = |u|$; and $u \le |u|$ ([[lem-of-abs-value]]).

[L4] Order in $F$: exactly one of $u < v$, $u = v$, $v < u$ holds, so the order is total, and both $<$ and $\le$ are transitive; adding a constant preserves the strict order and two strict inequalities may be added ([[lem-of-add-order]]); the nonstrict forms of those two, used below, are the strict forms together with the equality cases, which trichotomy settles ([[def-ordered-field]]).

[L5] Halving: $0 < 1_F$ ([[cor-of-one-positive]]), so $2 \cdot 1_F = 1_F + 1_F > 0$ ([[lem-of-naturals-positive]]) and $2 \cdot 1_F$ is nonzero, hence invertible with $(2 \cdot 1_F)^{-1} > 0$ ([[lem-of-inverse-positive]]). Writing $\varepsilon/2$ for $\varepsilon \cdot (2 \cdot 1_F)^{-1}$, an $\varepsilon > 0$ gives $\varepsilon/2 > 0$ and $\varepsilon/2 + \varepsilon/2 = \varepsilon$ ([[def-ordered-field]]).

[L6] Induction principle on $\mathbb{N}$ ([[thm-induction-principle]]).

[L7] Growth of an index map: a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ satisfies $n_j \ge j$ for every $j$ ([[lem-index-map-grows]]).

[L8] The order on $\mathbb{N}$ is total and transitive, so of any two indices one is $\ge$ the other, and every index $k$ satisfies $k \le N$ or $k \ge N$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** direct.

1.1 If $d \in F$ satisfies $d < \varepsilon$ for every $\varepsilon > 0$ in $F$, then $d \le 0$: were $d > 0$, the instance $\varepsilon = d$ would give $d < d$, which trichotomy forbids, so $d > 0$ fails and totality leaves $d \le 0$. [L4, algebra]

1.2 For every $\varepsilon > 0$ in $F$ one has $\varepsilon/2 > 0$ and $\varepsilon/2 + \varepsilon/2 = \varepsilon$. [L5]

1.3 **Claim 1.** Assume $x_k \to L$ and $x_k \to L'$, and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N_1$ with $|x_k - L| < \varepsilon/2$ for $k \ge N_1$, choose $N_2$ with $|x_k - L'| < \varepsilon/2$ for $k \ge N_2$, and let $N$ be whichever of $N_1, N_2$ is the larger. [L1, L8, choose]

1.4 **Claim 2.** Assume $x_k \to L$, $y_k \to M$ and $x_k \le y_k$ for every $k$, and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N_1$ with $|x_k - L| < \varepsilon/2$ for $k \ge N_1$, choose $N_2$ with $|y_k - M| < \varepsilon/2$ for $k \ge N_2$, and let $N$ be the larger of the two. [L1, L8, choose]

1.5 **Claim 3.** Assume $x_k \to L$ and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N$ with $|x_k - L| < \varepsilon/2$ for all $k \ge N$. [L1, choose]

1.6 **Claim 4.** For every $n \in \mathbb{N}$ there is $B \in F$ with $|x_j| \le B$ for all $j \le n$, by induction on $n$: for $n = 0$ take $B = |x_0|$; and given such a $B$ for $n$, totality of the order on $F$ gives either $|x_{n+1}| \le B$, in which case the same $B$ serves for $n + 1$, or $B < |x_{n+1}|$, in which case $|x_{n+1}|$ serves for $n+1$ by transitivity. [L1, L4, L6]

1.7 **Claim 4, continued.** Assume $(x_k)$ is Cauchy; since $1_F > 0$, choose $N$ with $|x_k - x_l| < 1_F$ for all $k, l \ge N$, so that for $k \ge N$ one has $|x_k| = |(x_k - x_N) + x_N| \le |x_k - x_N| + |x_N| < 1_F + |x_N|$. [L1, L2, L4, L5, choose]

1.8 **Claim 5.** Assume $(x_k)$ is Cauchy and $x_{n_j} \to L$ along a strictly increasing $n$, and let $\varepsilon > 0$ in $F$ be arbitrary; choose $N_1$ with $|x_k - x_l| < \varepsilon/2$ for $k, l \ge N_1$, choose $N_2$ with $|x_{n_j} - L| < \varepsilon/2$ for $j \ge N_2$, and let $N$ be the larger of the two, so that $n_N \ge N \ge N_1$ and $N \ge N_2$. [L1, L7, L8, choose]

2.1 For every $k \ge N$ in the situation of step 1.3: $|L - L'| = |(L - x_k) + (x_k - L')| \le |L - x_k| + |x_k - L'| = |x_k - L| + |x_k - L'| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.2, step 1.3, L2, L3, L4]

2.2 For every $k \ge N$ in the situation of step 1.4: $L - M = (L - x_k) + (x_k - y_k) + (y_k - M)$, where $L - x_k \le |L - x_k| < \varepsilon/2$ and $y_k - M \le |y_k - M| < \varepsilon/2$ and $x_k - y_k \le 0$; adding, $L - M < \varepsilon$. [step 1.2, step 1.4, L3, L4]

2.3 For all $k, l \ge N$ in the situation of step 1.5: $|x_k - x_l| = |(x_k - L) + (L - x_l)| \le |x_k - L| + |x_l - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$. [step 1.2, step 1.5, L2, L3, L4]

2.4 In the situation of steps 1.6 and 1.7, let $B$ be a bound for $|x_j|$ over $j \le N$ and set $M := B + 1_F + |x_N|$; then $B \ge |x_0| \ge 0$ and $1_F + |x_N| > 0$, so $M \ge B$ and $M \ge 1_F + |x_N|$, whence $|x_k| \le B \le M$ for $k \le N$ and $|x_k| < 1_F + |x_N| \le M$ for $k \ge N$; as every index satisfies $k \le N$ or $k \ge N$, $(x_k)$ is bounded. [step 1.6, step 1.7, L1, L3, L4, L8]

2.5 For every $k \ge N$ in the situation of step 1.8: $|x_k - L| = |(x_k - x_{n_N}) + (x_{n_N} - L)| \le |x_k - x_{n_N}| + |x_{n_N} - L| < \varepsilon/2 + \varepsilon/2 = \varepsilon$, the first summand being covered because $k \ge N \ge N_1$ and $n_N \ge N_1$. [step 1.2, step 1.8, L2, L4]

3.1 By step 2.1 the element $|L - L'|$ is below every $\varepsilon > 0$, so $|L - L'| \le 0$; with $|L - L'| \ge 0$ this forces $|L - L'| = 0$ and hence $L = L'$, which is claim 1. [step 1.1, step 2.1, L3, L4]

3.2 By step 2.2 the element $L - M$ is below every $\varepsilon > 0$, so $L - M \le 0$, that is $L \le M$, which is claim 2. [step 1.1, step 2.2, L4]

3.3 Step 2.3 produced, for an arbitrary $\varepsilon > 0$, an $N$ beyond which all pairs are within $\varepsilon$, so $(x_k)$ is Cauchy in $F$, which is claim 3. [step 2.3, L1]

4.1 Step 2.5 produced, for an arbitrary $\varepsilon > 0$, an $N$ beyond which $|x_k - L| < \varepsilon$, so $(x_k)$ converges in $F$ with $x_k \to L$; since also $x_{n_j} \to L$, step 3.1 identifies both limits as $L$ and gives $\lim_k x_k = \lim_j x_{n_j}$, which is claim 5. [step 2.5, step 3.1, L1]

5.1 Claims 1, 2, 3, 4 and 5 are steps 3.1, 3.2, 3.3, 2.4 and 4.1 respectively, so all five hold. [step 2.4, step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

- **Nothing above uses the Archimedean property, and nothing above uses
  completeness.** The five claims hold in every ordered field, including
  $\mathbb{R}(t)$ and $\mathbb{R}((t^{-1}))$. That is what makes them safe to
  use on both sides of every implication proved on this page.

- **Claim 2 is genuinely non-strict.** From $x_k < y_k$ at every index one gets
  only $L \le M$: the sequences $x_k = 0$ and $y_k = \varepsilon/(k+1)$ in an
  Archimedean $F$ have $x_k < y_k$ and equal limits. The real-number version of
  this warning is recorded at [[lem-limit-preserves-order]].

- **There is deliberately no arithmetic clause here.** Nothing above lets one
  add, multiply or divide two limits in a general ordered field, and no item in
  this library does: [[thm-algebra-of-limits]] is stated for sequences of reals,
  and by the rule recalled above it may not be cited for a general $F$. No proof
  on this page needs such a clause; every abstract argument here works with the
  defining $\varepsilon$ and $N$ directly, or with clauses 1 to 5.

- **Claim 4 avoids any appeal to a maximum of a finite set.** The library's
  finite-maximum lemma [[lem-finite-set-has-max]] is stated for $\mathbb{R}$,
  so it is unavailable here for the same reason the other four real-valued
  lemmas are; step 1.6 replaces it by an induction that uses nothing but
  totality of the order of $F$.
