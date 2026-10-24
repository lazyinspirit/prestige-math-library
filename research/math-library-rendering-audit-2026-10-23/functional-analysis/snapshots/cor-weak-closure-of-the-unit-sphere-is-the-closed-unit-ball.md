---
id: "cor-weak-closure-of-the-unit-sphere-is-the-closed-unit-ball"
kind: "corollary"
title: "Weak closure of the unit sphere is the closed unit ball"
deps: ["lem-basic-weak-neighborhoods", "thm-norm-closed-convex-iff-weakly-closed", "thm-intermediate-value"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Teschl, Topics in Real and Functional Analysis (2017); exact harvest in batch coverage"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume HB. In an infinite-dimensional real or complex normed space $X$, the weak closure of $S=\{x:\|x\|=1\}$ is $B=\{x:\|x\|\le1\}$.

## Facts & Assumptions

[F1] A weak neighborhood contains finitely many coordinate disk conditions ([[lem-basic-weak-neighborhoods]]).

[F2] Under HB, norm-closed convex sets are weakly closed ([[thm-norm-closed-convex-iff-weakly-closed]]).

[F3] A continuous real function on a closed bounded interval takes every value between its endpoint values, choice-free ([[thm-intermediate-value]]).

## Proof

**Given:** HB and infinite-dimensional $X$.

1.1 The ball $B$ is convex by the triangle inequality and norm closed because $|\|x\|-\|y\||\le\|x-y\|$. Thus $B$ is weakly closed and contains $S$, giving $\overline S^w\subseteq B$. [given, F2, algebra]

2.1 Fix $x\in B$ and a weak neighborhood of $x$ containing the conditions $|f_j(y-x)|<\varepsilon$, $1\le j\le m$. There is a nonzero $v$ with all $f_j(v)=0$: choose $m+1$ independent vectors in $X$ by finite induction; their images in $\mathbb K^m$ are dependent, so a nonzero linear combination of the original vectors lies in the common kernel. This also covers $m=0$. [step 1.1, F1, given, algebra]

3.1 If $\|x\|=1$, the point $x$ itself works. If $\|x\|<1$, put $T=(2+\|x\|)/\|v\|$. The real function $h(t)=\|x+tv\|$ on $[0,T]$ satisfies $|h(t)-h(s)|\le |t-s|\|v\|$, $h(0)<1$, and $h(T)\ge T\|v\|-\|x\|=2>1$. The intermediate value theorem gives $t\in[0,T]$ with $h(t)=1$. Then $y=x+tv\in S$ has $f_j(y-x)=0$ for every $j$, so lies in the given neighborhood. Every neighborhood of every $x\in B$ meets $S$, proving $B\subseteq\overline S^w$ and equality. $\square$ [step 2.1, step 1.1, F3, algebra]
