---
id: lem-discrete-sequence-spaces-are-complete-in-zf
kind: lemma
title: "Discrete sequence spaces are complete in ZF"
status: draft
origin: pipeline
deps: [def-the-set-of-functions-from-one-set-to-another, def-complete-metric-space, def-metric-ball, def-metric-topology, thm-well-ordering-principle, thm-induction-principle, cor-archimedean-reciprocal, def-axiom-schema-of-replacement, def-metric-space, def-cauchy-in-metric, def-metric-convergence]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Miller, Lecture notes on set theory without choice; p.2 cylinders; Proposition 5.4(2) implies (1), p.11"
      url: https://people.math.wisc.edu/~awmille1/old/m873-08/ac.pdf
    - title: "Karagila, Zornian Functional Analysis, Definition 4 and Chapter 2, pp. 4–5, 8–11"
      url: https://karagila.org/wp-content/uploads/2016/10/axiom-of-choice-in-analysis.pdf
---

## Statement

In ZF, let $A\ne\varnothing$ and $Y=A^\omega$. For $f,g\in Y$ define
$d(f,g)=0$ if $f=g$, and otherwise $d(f,g)=1/(k+1)$ where
$k=\min\{i\in\omega:f(i)\ne g(i)\}$.
Then $(Y,d)$ is a nonempty complete ultrametric space. For each finite function
$s:l\to A$, its cylinder $[s]=\{f\in Y:f\restriction l=s\}$ is nonempty
and clopen, and these cylinders form a basis for the metric topology.
Only this explicitly metrized constant-factor sequence space is asserted here.

## Facts & Assumptions

**Given:** ZF, a nonempty set $A$, and the formulas for $Y,d,[s]$ above.

[F1] All functions between two sets form a set ([[def-the-set-of-functions-from-one-set-to-another]]).

[F2] Every nonempty subset of $\omega$ has a least element ([[thm-well-ordering-principle]]).

[F3] Replacement makes each uniquely specified set-indexed assignment a set of values ([[def-axiom-schema-of-replacement]]).

[F4] Positive integer reciprocals become smaller than any positive real tolerance ([[cor-archimedean-reciprocal]]).

[F5] A metric satisfies separation, symmetry and the triangle inequality; an ultrametric also satisfies the strong triangle inequality ([[def-metric-space]]).

[F6] Metric balls use strict distance bounds ([[def-metric-ball]]); open sets contain balls about all their points and closed sets have open complement ([[def-metric-topology]]).

[F7] Cauchy means all sufficiently late pairwise distances are below each positive rational tolerance ([[def-cauchy-in-metric]]).

[F9] Convergence means distances to the proposed limit are eventually below each positive rational tolerance ([[def-metric-convergence]]).

[F10] Completeness requires a limit for every Cauchy sequence ([[def-complete-metric-space]]).

[F8] Induction applies to natural-number properties ([[thm-induction-principle]]).

## Proof

1.1 By the function-set construction $Y$ is a set. Fix one $a_*\in A$; the constant function $n\mapsto a_*$ belongs to $Y$. If $f\ne g$, their nonempty set of differing coordinates has a least member, so $d$ is a well-defined real-valued function (its graph is obtained by Replacement). Its values are nonnegative, it is symmetric, and it is zero exactly on the diagonal. No selection from a family of different carriers is involved. [F1, F2, F3, given]

2.1 For every $t\in\omega$, $d(f,g)<1/(t+1)$ holds exactly when $f$ and $g$ agree at all coordinates $i\le t$: a first disagreement at $k\le t$ gives distance at least $1/(t+1)$; a first disagreement at $k>t$ gives a smaller reciprocal, and equality of functions gives zero. Also, agreement at all $i<l$ implies $d(f,g)\le1/(l+1)$, including $l=0$. [step 1.1, algebra]

2.2 To prove the strong triangle inequality, equalities $f=g$ or $g=h$ reduce it to equality. Otherwise let $i$ and $j$ be the first disagreements of $(f,g)$ and $(g,h)$ and set $t=\min(i,j)$. All three functions agree below $t$, so either $f=h$ or their first disagreement is at least $t$. Thus $d(f,h)\le1/(t+1)=\max(d(f,g),d(g,h))$. Nonnegative numbers have maximum at most their sum, so the ordinary triangle inequality follows as well. Hence $d$ is an ultrametric. [F5, step 1.1, algebra]

3.1 For $s:l\to A$, define $\widehat s(i)=s(i)$ for $i<l$ and $\widehat s(i)=a_*$ otherwise. Then $\widehat s\in[s]$, including the empty prefix $l=0$, whose cylinder is $Y$. If $l\ge1$ and $f\in[s]$, the equivalence above gives $B(f,1/l)=[s]$, so $[s]$ is open. If $g\notin[s]$, there is $i<l$ with $g(i)\ne s(i)$, and $B(g,1/(i+1))$ fixes that coordinate and misses $[s]$. The complement is therefore open. For $l=0$ the complement is empty and open. Thus every cylinder is nonempty and clopen. [F6, step 1.1, step 2.1]

3.2 Let $(f_j)_{j\in\omega}$ be any Cauchy sequence in $Y$. For each $n$, its Cauchy property at the rational tolerance $1/(n+1)$ makes the set of $K$ satisfying $(\forall p,q\ge K)\ d(f_p,f_q)<1/(n+1)$ nonempty. Let $K_n$ be its least member. Define $f(n)=f_{K_n}(n)$. Leastness makes both $K_n$ and this value unique, so Replacement gives the graph of a function $f:\omega\to A$, without any choice principle. By the prefix equivalence, for $j\ge K_n$ one has $f_j(n)=f_{K_n}(n)=f(n)$. [F2, F3, F7, step 2.1]

4.1 Given $f\in O$ with $O$ open, take $\varepsilon>0$ with $B(f,\varepsilon)\subseteq O$ and take $l\ge1$ with $1/l<\varepsilon$. If $g$ extends $f\restriction l$, its distance to $f$ is at most $1/(l+1)<\varepsilon$. Thus $f\in[f\restriction l]\subseteq O$, proving the basis assertion. [F4, F6, step 2.1, step 3.1]

5.1 For a finite prefix length $l$, put $H_0=0$ and successively $H_{t+1}=\max(H_t,K_t)$ for $t<l$. This finite deterministic construction uses no selections; induction shows $H_l\ge K_t$ for every $t<l$. Hence every $j\ge H_l$ has $f_j\restriction l=f\restriction l$, and $d(f_j,f)\le1/(l+1)$. Given positive rational $\varepsilon$, take $l\ge1$ with $1/l<\varepsilon$; this bound proves $f_j\to f$. The construction works also when $A$ is a singleton, in which case every distance is zero. Thus every Cauchy sequence converges in $Y$, completing the proof. [F4, F8, F9, F10, step 2.1, step 3.2] ∎
