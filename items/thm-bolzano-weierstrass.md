---
id: thm-bolzano-weierstrass
kind: theorem
title: "Bolzano-Weierstrass: every bounded real sequence has a convergent subsequence"
status: published
origin: session
deps: [lem-peak-monotone-subsequence, cor-monotone-converges-iff-bounded, def-subsequential-limit, def-sequence, def-monotone-sequence]
justified_by: []
forward_refs: [cex-unbounded-with-convergent-subsequence]
aliases: []
landmark: true
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
    - title: "Bolzano-Weierstrass theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bolzano%E2%80%93Weierstrass_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.6(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.6 (Thm 6.6.8)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.3 (Thm 2.3.8)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Every bounded sequence of reals has a convergent subsequence: if $(x_k)$ is a
sequence of reals and there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$ ([[def-sequence]]), then there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ and a real $L$ with $x_{n_j} \to L$.

Equivalently: the subsequential limit set of a bounded sequence is nonempty
([[def-subsequential-limit]]).

The theorem is the exact repair of the false claim that a bounded sequence
converges. A bounded
sequence need not converge, and the alternating sequence is the standing witness;
what boundedness does force is that *some* subsequence converges. The converse of
the theorem is false, and badly so: a sequence with a convergent subsequence need
not be bounded.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and a real $M$ with $|x_k| \le M$ for every $k \in \mathbb{N}$.

[L1] Every sequence of reals has a monotone subsequence ([[lem-peak-monotone-subsequence]]).

[L2] A monotone sequence of reals converges if and only if it is bounded ([[cor-monotone-converges-iff-bounded]]).

[L3] A subsequence $(x_{n_j})$ of $(x_k)$ along a strictly increasing $n$ is again a sequence of reals, and each of its terms is a term of $(x_k)$; a sequence is bounded when some $M$ satisfies $|{\cdot}| \le M$ at every index ([[def-sequence]]).

[L4] Monotone means nondecreasing or nonincreasing ([[def-monotone-sequence]]).

[L5] $L$ is a subsequential limit of $(x_k)$ when some subsequence of $(x_k)$ converges to $L$ ([[def-subsequential-limit]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] fix a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ such that the subsequence $(x_{n_j})$ is monotone; no hypothesis on $(x_k)$ is needed for this step. [given, L1, L4, choose]

2.1 $(x_{n_j})$ is bounded: each of its terms is a term of $(x_k)$, so $|x_{n_j}| \le M$ for every $j$, with the same $M$. [step 1.1, given, L3]

3.1 Being monotone and bounded, $(x_{n_j})$ converges; write $L$ for its limit. [step 1.1, step 2.1, L2]

4.1 So $(x_k)$ has a convergent subsequence, and $L$ is a subsequential limit of $(x_k)$; in particular the subsequential limit set of a bounded sequence is nonempty. [step 3.1, L5] ∎

## Remarks

- **The proof is two citations, and that is the point of the page order.** All
  the work sits in [[lem-peak-monotone-subsequence]], which needs nothing about
  $\mathbb{R}$ beyond trichotomy, and in [[cor-monotone-converges-iff-bounded]],
  which is where the least-upper-bound property is actually spent. Splitting the
  argument this way isolates the use of completeness in a single place instead of
  burying it in a bisection.

- **Bisection is the other standard proof and is not used here.** Halving the
  interval $[-M, M]$ repeatedly and keeping a half containing infinitely many
  terms produces a nested sequence of intervals whose lengths tend to $0$, and
  [[thm-nested-interval-property]] then yields the limit. That route is
  available in this library, since the nested interval property is proved on this
  page, but it needs an extra argument to choose the terms and to see that the
  chosen indices increase, whereas the monotone-subsequence route needs neither.

- **The limit is not determined by the theorem.** A bounded sequence may have
  many subsequential limits, and the theorem asserts only that there is at least
  one. Which subsequential limits exist, and that there is a largest and a
  smallest, is the subject of the $\limsup$ page.

- **Boundedness is sufficient but not necessary.** The converse fails, by
  [[fs-convergent-subsequence-implies-bounded]] and its witness
  [[cex-unbounded-with-convergent-subsequence]]: a wildly unbounded sequence can
  still have a constant, hence convergent, subsequence.
