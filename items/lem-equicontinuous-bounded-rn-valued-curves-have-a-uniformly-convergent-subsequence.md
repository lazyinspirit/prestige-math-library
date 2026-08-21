---
id: lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence
kind: lemma
title: "A uniformly bounded equicontinuous sequence of $\\mathbb R^n$-valued curves on a nonempty compact interval has a uniformly convergent subsequence"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-rationals-countable, lem-q-and-irrationals-dense-r, lem-vector-valued-continuous-curve-space-is-complete, thm-heine-borel-r, thm-euclidean-space-complete, thm-recursion, thm-well-ordering-principle, lem-geometric-sequence-null]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $J$ be a nonempty compact interval and $n\ge1$. Say that a sequence of continuous maps $x_m:J\to\mathbb R^n$ is uniformly bounded when one $M$ satisfies $\|x_m(t)\|_2\le M$ for all $m,t$, and equicontinuous when for every $\varepsilon>0$ there is $\delta>0$ such that $|s-t|<\delta$ implies $\|x_m(s)-x_m(t)\|_2<\varepsilon$ for every $m$. Every such sequence has a subsequence that converges uniformly to a continuous map $x:J\to\mathbb R^n$. The construction requires no choice principle.

A uniformly bounded equicontinuous sequence of $\mathbb R^n$-valued curves on a nonempty compact interval has a uniformly convergent subsequence.

## Facts & Assumptions

**Given:** The uniformly bounded equicontinuous sequence in the Statement.

[L1] The rationals are countably infinite: $\mathbb Q\approx\mathbb N$ ([[thm-rationals-countable]]).

[L3] Continuous $\mathbb R^n$-valued curves on a compact interval are complete in the supremum metric ([[lem-vector-valued-continuous-curve-space-is-complete]]).

[L4] Every closed bounded interval in $\mathbb R$ is compact ([[thm-heine-borel-r]]).

[L5] The rationals are dense in $\mathbb R$ ([[lem-q-and-irrationals-dense-r]]).

[L6] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L7] Euclidean space $\mathbb R^n$ is complete for $n\ge1$ ([[thm-euclidean-space-complete]]).

[L8] A total self-map and an initial value determine a unique sequence of iterates ([[thm-recursion]]).

[L9] If $0<r<1$, then $r^k\to0$ ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** constructive.

1.1 Fix a time $q\in J$ and a strictly increasing index map $s:\mathbb N\to\mathbb N$. Enclose the bounded sequence $(x_{s(j)}(q))_j$ in the cube $[-M,M]^n$. Repeatedly bisect the current cube into its finitely many coordinate subcubes, retain the lexicographically first subcube containing infinitely many remaining terms, and take the least unused index whose value lies in it. The retained cubes are nested and their diameters tend to zero by [L9]; the selected values are therefore Cauchy and converge in $\mathbb R^n$ by [L7]. Least indices exist by [L6]. This defines a specific strictly increasing extractor $E_q(s)$ whose selected values converge at $q$, without making a choice from an unspecified family. [given, L6, L7, L9, construct]

2.1 If $J=\{a\}$, use $E_a$ from step 1.1. Otherwise [L1] and [L5] give an enumeration $(q_j)$ of the dense set $J\cap\mathbb Q$. Apply [L8] to the total update $(j,s)\mapsto(j+1,s\circ E_{q_j}(s))$, starting with the identity index map, and write the nested maps as $s_j$. The diagonal indices $d_j=s_j(j)$ are strictly increasing. For each fixed $k$, every sufficiently late $d_j$ lies in the range of $s_{k+1}$, so $(x_{d_j}(q_k))_j$ is a subsequence of the convergent sequence selected at $q_k$. Thus $(x_{d_j})_j$ converges at every enumerated dense time, and the singleton construction has the same conclusion at its sole point. [step 1.1, L1, L5, L8, construct]

3.1 Given $\varepsilon>0$, equicontinuity, [L4], and [L5] give a finite net of the dense times from step 2.1 on which the diagonal subsequence is eventually $\varepsilon/3$-close; in the singleton case use its sole point. The triangle inequality then makes the subsequence uniformly Cauchy on all of $J$. [step 2.1, L4, L5, algebra]

4.1 Applying [L3] to the uniformly Cauchy subsequence gives a continuous uniform limit, completing the construction. [step 3.1, L3, discharge-construct] ∎
