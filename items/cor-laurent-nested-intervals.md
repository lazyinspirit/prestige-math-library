---
id: cor-laurent-nested-intervals
kind: corollary
title: "$\\mathbb{R}((t^{-1}))$ has the nested interval property for lengths tending to $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-sequences-in-an-ordered-field, thm-laurent-cauchy-complete, thm-laurent-ordered-field, lem-laurent-non-archimedean, def-formal-laurent-series, def-ordered-field, def-abs-value, lem-of-abs-value, lem-of-add-order, thm-induction-principle, def-nat-order, thm-nat-linear-order, def-natural-numbers]
aliases: []
landmark: true
short: "shrinking nested intervals in $K$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-08
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Cantor theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Cantor_theorem"
    - title: "Cauchy sequences in ordered fields (University of Tennessee notes)"
      url: "https://web.math.utk.edu/~freire/teaching/m300f12/m300s12handout7.pdf"
pipeline_run: null
---

## Statement

Let $K = \mathbb{R}((t^{-1}))$ and let $(I_n)_{n \in \mathbb{N}}$ with
$I_n = [a_n, b_n]_K$ be a nested sequence of closed intervals in $K$ whose
lengths tend to $0$ in $K$, that is, for every $\varepsilon > 0$ in $K$ there is
$N$ with $b_n - a_n < \varepsilon$ for all $n \ge N$
([[def-sequences-in-an-ordered-field]]). Then

$$\bigcap_{n \in \mathbb{N}} I_n$$

contains exactly one element of $K$.

**The hypothesis that the lengths tend to $0$ may not be dropped**: this is the
nested interval property in its *shrinking* form only, and nothing on this page
establishes the unrestricted form for $K$. The remarks below record what happens
without the hypothesis.

## Facts & Assumptions

**Given:** A nested sequence $(I_n)_{n \in \mathbb{N}}$ of closed intervals $I_n = [a_n,b_n]_K$ in $K$, so $a_n \le b_n$ and $I_{n+1} \subseteq I_n$ for every $n$, whose lengths tend to $0$ in $K$.

[L1] $[a,b]_K = \{x \in K : a \le x \le b\}$ for $a \le b$; a sequence $(x_n)$ in $K$ is Cauchy in $K$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - x_m| < \varepsilon$ for all $n,m \ge N$, and converges to $L$ when for every $\varepsilon > 0$ in $K$ there is $N$ with $|x_n - L| < \varepsilon$ for all $n \ge N$; the lengths $b_n - a_n$ tend to $0$ when for every $\varepsilon > 0$ in $K$ they are eventually $< \varepsilon$ ([[def-sequences-in-an-ordered-field]]).

[L2] Every Cauchy sequence in $K$ converges in $K$ ([[thm-laurent-cauchy-complete]]).

[L3] $K$ is an ordered field ([[thm-laurent-ordered-field]], [[def-ordered-field]]), so its order is total and transitive and $x < y$ means $0 < y - x$. Compatibility with addition is used below in its NONSTRICT form, $x \le y \Rightarrow x + z \le y + z$, whereas [[lem-of-add-order]] states the STRICT forms and only those ($x < y \Rightarrow x + z < y + z$, and $x < y$ with $z < w$ giving $x + z < y + w$); the nonstrict form is the first strict form together with the case $x = y$, where the two sides are equal, the order being total ([[def-ordered-field]]).

[L4] $|z| \ge 0$, $|z| = 0$ only for $z = 0$, and $|z|$ equals $z$ or $-z$; so $|z| = z$ when $z \ge 0$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L5] The order on $\mathbb{N}$ is total ([[thm-nat-linear-order]], [[def-nat-order]]) and induction is available ([[thm-induction-principle]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For each $n$, the endpoints $a_{n+1}$ and $b_{n+1}$ belong to $I_{n+1}$ because $a_{n+1} \le b_{n+1}$, and $I_{n+1} \subseteq I_n$, so both belong to $I_n$; by [L1] this says $a_n \le a_{n+1}$ and $b_{n+1} \le b_n$. Hence $a_n \le a_{n+1} \le b_{n+1} \le b_n$. [given, L1, L3]

1.2 The intersection contains at most one element. Suppose $x, y \in \bigcap_n I_n$ with $x \ne y$, so $|x - y| > 0$ by [L4]. For each $n$ both $x$ and $y$ lie in $[a_n,b_n]_K$, so $x - y \le b_n - a_n$ and $y - x \le b_n - a_n$ by [L1] and [L3], and since $|x-y|$ is one of $x-y$, $y-x$ by [L4] we get $|x - y| \le b_n - a_n$ for every $n$. Applying the shrinking hypothesis with $\varepsilon := |x-y|$ produces some $n$ with $b_n - a_n < |x-y|$, a contradiction. [given, L1, L3, L4]

2.1 Whenever $n \le m$ one has $a_n \le a_m \le b_m \le b_n$: this is [step 1.1] for $m = n+1$, it is trivial for $m = n$, and the general case follows by induction on $m$ using transitivity of the order. [step 1.1, L3, L5]

3.1 $(a_n)_{n \in \mathbb{N}}$ is Cauchy in $K$. Let $\varepsilon > 0$ in $K$ and take $N$ with $b_n - a_n < \varepsilon$ for all $n \ge N$. Let $n, m \ge N$; by [L5] we may assume $n \le m$, the other case being the same with the roles exchanged. By [step 2.1], $a_n \le a_m \le b_m \le b_n$, so $0 \le a_m - a_n \le b_n - a_n < \varepsilon$, and $|a_m - a_n| = a_m - a_n < \varepsilon$ by [L4]. [step 2.1, given, L1, L3, L4, L5]

4.1 By [L2] there is $L \in K$ with $a_n \to L$ in $K$. [step 3.1, L2]

5.1 $a_n \le L$ for every $n$. Otherwise $L < a_n$ for some $n$; put $\varepsilon := a_n - L > 0$ and use [step 4.1] to fix $N$ with $|a_m - L| < \varepsilon$ for all $m \ge N$. Pick $m$ with $m \ge N$ and $m \ge n$ ([L5]). By [step 2.1], $a_n \le a_m$, so $a_m - L \ge a_n - L = \varepsilon > 0$ and hence $|a_m - L| = a_m - L \ge \varepsilon$ by [L4], contradicting $|a_m - L| < \varepsilon$. [step 2.1, step 4.1, L1, L3, L4, L5]

5.2 $L \le b_n$ for every $n$. Otherwise $b_n < L$ for some $n$; put $\varepsilon := L - b_n > 0$ and fix $N$ with $|a_m - L| < \varepsilon$ for all $m \ge N$. Pick $m$ with $m \ge N$ and $m \ge n$. By [step 2.1], $a_m \le b_m \le b_n$, so $L - a_m \ge L - b_n = \varepsilon > 0$ and hence $|a_m - L| = L - a_m \ge \varepsilon$ by [L4], again a contradiction. [step 2.1, step 4.1, L1, L3, L4, L5]

6.1 By [step 5.1] and [step 5.2], $a_n \le L \le b_n$ for every $n$, so $L \in \bigcap_n I_n$ by [L1] and the intersection is nonempty; by [step 1.2] it has no second element. Hence $\bigcap_n I_n = \{L\}$. [step 5.1, step 5.2, step 1.2, L1] ∎

## Remarks

- **This is the shrinking form, and the restriction is real.** The unrestricted nested interval property — every nested sequence of nonempty closed intervals meets — is **false** in $K$, and [[cex-laurent-nested-intervals-empty]] exhibits a nested sequence with empty intersection. So the hypothesis here is not a convenience of the proof, and no item on this page may be cited for the unrestricted form.

- **A trap in the hypothesis: "lengths $2/n$" does not mean shrinking.** The condition is that the lengths tend to $0$ *in the order of $K$*, tested against every positive $\varepsilon \in K$, not merely against positive real constants. A nested sequence whose $n$-th length is the constant series $\iota(2/(n+1))$ does **not** satisfy it: since $\iota(c)$ takes the nonzero value $c$ at index $0$, clause 4 of [[lem-laurent-non-archimedean]] forbids $|\iota(c)| < t^{-1}$, so no such length ever gets below $\varepsilon = t^{-1}$. Real-indexed shrinking is strictly weaker than shrinking in $K$, and a proof that assumed the former would be proving a different theorem.

- **Where completeness enters.** Exactly once, at [step 4.1]. Everything before it is monotonicity bookkeeping valid in any ordered field, and everything after it uses only the order and the absolute value. That is why the corollary is a corollary of [[thm-laurent-cauchy-complete]] and not an independent argument about series.
