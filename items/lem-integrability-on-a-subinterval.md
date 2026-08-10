---
id: lem-integrability-on-a-subinterval
kind: lemma
title: "A function integrable on $[a,b]$ is integrable on every closed subinterval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-oriented-integral, def-darboux-integral, thm-riemann-criterion, lem-refinement-inequalities, def-darboux-sums, def-partition-and-refinement, lem-finite-sum-laws, def-finite-sum, def-bounded-set, def-interval]
justified_by: []
aliases: []
landmark: false
short: "integrability passes to subintervals"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Darboux integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Darboux_integral"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 6"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, Properties of the Riemann integral"
      url: "https://www.jirka.org/ra/html/sec_rintprop.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), and let $c, d$ satisfy

$$a \;\le\; c \;<\; d \;\le\; b .$$

Then the restriction of $f$ to $[c,d]$ is bounded ([[def-bounded-set]]) and
integrable on $[c,d]$.

The degenerate case $c = d$ is not an omission: there $\int_c^c f = 0$ by
[[def-oriented-integral]], and no partition of $[c,d]$ exists to speak of
([[def-partition-and-refinement]]).

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, and reals $c, d$ with $a \le c < d \le b$. Write $g$ for the restriction of $f$ to $[c,d]$.

[L1] Riemann's criterion: a bounded function on a closed bounded interval with distinct endpoints is integrable if and only if for every real $\varepsilon > 0$ there is a partition $P$ of that interval with $U(\cdot,P) - L(\cdot,P) < \varepsilon$ ([[thm-riemann-criterion]], [[def-darboux-integral]]).

[L2] For a partition $P$ of $[a,b]$ and a point $p \in [a,b]$, the partition $P + p$ satisfies $\operatorname{pts}(P+p) = \operatorname{pts}(P) \cup \{p\}$ and refines $P$; a refinement of a refinement refines the original, since the point-set inclusions compose ([[def-partition-and-refinement]]).

[L3] If $P'$ refines $P$ then $L(f,P) \le L(f,P') \le U(f,P') \le U(f,P)$ ([[lem-refinement-inequalities]], claim 1).

[L4] For a partition $R = (n,t)$ of an interval and bounded $h$ on it: $L(h,R) = \sum_{i<n} m_i \Delta_i$, $U(h,R) = \sum_{i<n} M_i\Delta_i$ with $m_i = \inf h[I_i]$, $M_i = \sup h[I_i]$, $I_i = [t_i,t_{i+1}]$, $\Delta_i = t_{i+1}-t_i > 0$, and $M_i - m_i \ge 0$ ([[def-darboux-sums]], [[def-partition-and-refinement]], [[def-interval]]).

[L5] Finite sums: additivity, scaling, splitting at an intermediate index with $\sum_{k=m}^{n-1}a_k = \sum_{j<n-m}a_{m+j}$, and monotonicity in the terms, so that a sum of nonnegative terms is at most a sum containing those terms among others ([[def-finite-sum]], [[lem-finite-sum-laws]], clauses 1 to 4).

[L6] A partition $P' = (n',t')$ of $[a,b]$ has $t'$ strictly increasing on indices $\le n'$, hence injective there, so a point of $\operatorname{pts}(P')$ is $t'_j$ for exactly one $j \le n'$; and $j < k$ gives $t'_j < t'_k$ ([[def-partition-and-refinement]]).

[L7] A restriction of a bounded function is bounded: the same $M$ serves fewer points ([[def-bounded-set]]).

## Proof

**Proof technique:** direct.

1.1 $g$ is bounded on $[c,d]$, since $[c,d] \subseteq [a,b]$ and $f$ is bounded on $[a,b]$, integrability presupposing boundedness. [given, L7]

1.2 Let a real $\varepsilon > 0$ be given, and fix a partition $P$ of $[a,b]$ with $U(f,P) - L(f,P) < \varepsilon$. [given, L1, choose]

2.1 Put $P' := (P + c) + d$, a partition of $[a,b]$ refining $P$ whose point set contains $c$ and $d$. [step 1.2, L2, construct]

3.1 By [L3] applied to the pair $(P, P')$, $U(f,P') - L(f,P') \le U(f,P) - L(f,P) < \varepsilon$. [step 1.2, step 2.1, L3]

3.2 Write $P' = (n',t')$ and fix the unique indices $p, q \le n'$ with $t'_p = c$ and $t'_q = d$; then $p < q$, because $c < d$ and $t'$ is increasing on those indices. [step 2.1, L6, choose]

4.1 Define $Q := (q-p,\ s)$ by $s_i := t'_{p+i}$ for $i \le q-p$ and $s_k := d$ for $k \ge q-p$. Then $s_0 = t'_p = c$, $s_{q-p} = t'_q = d$, and $s_i < s_{i+1}$ for $i < q-p$ by [L6], with $q - p \ge 1$; so $Q$ is a partition of $[c,d]$, its $i$-th subinterval is $[t'_{p+i}, t'_{p+i+1}] = I'_{p+i}$ and its $i$-th length is $\Delta'_{p+i}$. [step 3.2, L6, construct]

5.1 For $i < q-p$ the $i$-th subinterval of $Q$ is $I'_{p+i} \subseteq [c,d]$, and $g$ agrees with $f$ there, so the extreme values of $g$ on it are $M'_{p+i}$ and $m'_{p+i}$; hence $U(g,Q) - L(g,Q) = \sum_{i<q-p}\bigl(M'_{p+i} - m'_{p+i}\bigr)\Delta'_{p+i}$ by [L4] and [L5]. [step 4.1, L4, L5]

6.1 Every term $\bigl(M'_j - m'_j\bigr)\Delta'_j$ is nonnegative by [L4], and splitting $\sum_{j<n'}$ first at $p$ and then at $q$ exhibits $\sum_{i<q-p}\bigl(M'_{p+i}-m'_{p+i}\bigr)\Delta'_{p+i}$ as one of the three pieces of $\sum_{j<n'}\bigl(M'_j-m'_j\bigr)\Delta'_j$, the other two being nonnegative; so the displayed sum is at most $U(f,P') - L(f,P')$. [step 5.1, L4, L5]

7.1 Combining, $U(g,Q) - L(g,Q) \le U(f,P') - L(f,P') < \varepsilon$. [step 3.1, step 5.1, step 6.1]

8.1 Since $\varepsilon > 0$ was arbitrary and $g$ is bounded, [L1] applies on $[c,d]$ and $g$ is integrable there. [step 1.1, step 1.2, step 7.1, L1] ∎

## Remarks

- **The one step that is not bookkeeping is the re-indexing.** A partition in this library is a pair $(n,t)$ with a tail convention ([[def-partition-and-refinement]]), not a set of points, so "restrict $P'$ to $[c,d]$" is not a defined operation; step 4.1 writes the restricted list out, shifts its index by $p$ and resets its tail to $d$. Everything else follows from the fact that dropping nonnegative terms from a finite sum cannot increase it.

- **The converse is also true, and is proved separately.** Integrability on $[a,c]$ and on $[c,b]$ gives integrability on $[a,b]$; that direction needs a splice rather than a restriction and is the second half of [[thm-additivity-over-subintervals]].
