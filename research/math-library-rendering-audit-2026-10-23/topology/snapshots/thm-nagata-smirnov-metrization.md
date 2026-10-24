---
id: thm-nagata-smirnov-metrization
kind: theorem
title: 'Under choice, a space is metrizable if and only if it is regular, $T_1$, and has a $\sigma$-locally-finite basis'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-metric-spaces-have-sigma-locally-finite-bases, lem-locally-finite-unions-and-closures, thm-urysohn-lemma, def-axiom-of-choice, def-regular-and-t3-spaces, def-t0-and-t1-spaces, def-metrizable-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Metrizable space"
      url: "https://encyclopediaofmath.org/wiki/Metrizable_space"
    - title: "ProofWiki, Nagata-Smirnov Metrization Theorem, sufficient-condition Hilbert-coordinate outline; details independently checked below"
      url: "https://proofwiki.org/wiki/Nagata-Smirnov_Metrization_Theorem"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-09-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice. A space is metrizable if and only if it is regular, $T_1$, and has a $\sigma$-locally-finite basis. Here regularity and $T_1$ are separate hypotheses.

## Facts & Assumptions

**Given:** The Axiom of Choice and a topological space $X$.

[L1] Under choice every metric space has a $\sigma$-locally-finite basis ([[lem-metric-spaces-have-sigma-locally-finite-bases]]).

[L2] For a locally finite family, taking closures preserves local finiteness and the closure of its union is the union of its closures ([[lem-locally-finite-unions-and-closures]]).

[L3] Under DC, disjoint closed sets of a normal space admit a continuous separating function into $[0,1]$ ([[thm-urysohn-lemma]]). AC supplies DC and the indexed function choices below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** cases.

1.1 If $X$ is metrizable, it is regular and $T_1$, and [L1] gives the required basis. [assume-case forward, L1]

1.2 Conversely write the supplied basis as $\mathcal B=\bigcup_{n\ge0}\mathcal B_n$ with every $\mathcal B_n$ locally finite. We first prove normality, rather than assuming it. For disjoint closed $F,H$, let $U_n$ be the union of those $B\in\mathcal B_n$ with $\overline B\cap H=\varnothing$, and define $V_n$ symmetrically for $H$ against $F$. Regularity and the basis property say the $U_n$ cover $F$ and the $V_n$ cover $H$: each point outside a closed set has a basis neighborhood whose closure misses it. By [L2], $\overline{U_n}$ misses $H$ and $\overline{V_n}$ misses $F$. Now put $$U=\bigcup_{n\ge0}\left(U_n\setminus\bigcup_{k\le n}\overline{V_k}\right),\qquad V=\bigcup_{n\ge0}\left(V_n\setminus\bigcup_{k\le n}\overline{U_k}\right).$$ Both are open, $F\subseteq U$, and $H\subseteq V$. If a point belonged to the $n$th piece of $U$ and the $m$th piece of $V$, then $m\le n$ would contradict its exclusion from $\overline{V_m}$, while $n\le m$ would contradict its exclusion from $\overline{U_n}$. Thus $U\cap V=\varnothing$ and $X$ is normal. [assume-case reverse, L2, construct]

2.1 Every basis member $B$ is the cozero set of a continuous function. For each $n$, let $F_{B,n}$ be the union of $\overline C$ over $C\in\mathcal B_n$ with $\overline C\subseteq B$. It is closed and contained in $B$ by [L2]. The union of these $F_{B,n}$ over $n$ is $B$: for $x\in B$, regularity gives an open $O$ with $x\in O\subseteq\overline O\subseteq B$, and some basis member $C\ni x$ lies in $O$. By [L3] applied to the disjoint closed sets $F_{B,n}$ and $X\setminus B$, choose $f_{B,n}:X\to[0,1]$ equal to $1$ on $F_{B,n}$ and $0$ outside $B$. AC makes these simultaneous choices for all $(B,n)$. The uniformly convergent sum $u_B=\sum_{n\ge0}2^{-n-1}f_{B,n}$ is continuous, zero outside $B$, and positive at every point of $B$. Hence $B=\{u_B>0\}$. [L2, L3, step 1.2]

3.1 Index repeated basis members by their layer, writing $i=(n,B)$ with $B\in\mathcal B_n$. At each $x$, only finitely many members of $\mathcal B_n$ contain $x$, so the finite sum $S_n(x)=\sum_{B\in\mathcal B_n}u_B(x)^2$ is well defined. It is continuous: around any $x$, local finiteness makes all but finitely many summands identically zero. Define $$a_{nB}(x)=2^{-n-1}\frac{u_B(x)}{\sqrt{1+S_n(x)}}.$$ Each coordinate is continuous and $\sum_{B\in\mathcal B_n}a_{nB}(x)^2\le4^{-n-1}$ uniformly in $x$. Consequently the nonnegative generalized sum $$d(x,y)^2=\sum_{n\ge0}\sum_{B\in\mathcal B_n}(a_{nB}(x)-a_{nB}(y))^2$$ is finite. It is the squared $\ell^2$ distance of the two coordinate vectors; the triangle inequality follows from finite-sum Cauchy--Schwarz and passage to the supremum over finite index sets. Symmetry and $d(x,x)=0$ are immediate. If $x\ne y$, $T_1$ and the basis give a $B$ with $x\in B$, $y\notin B$; then $a_{nB}(x)>0=a_{nB}(y)$ for a layer containing $B$. Thus $d$ is a metric. [step 2.1, algebra]

4.1 The metric induces the original topology. Given $x\in O$ open, choose a basis member $B$ with $x\in B\subseteq O$ and a layer $n$ containing it. If $d(x,y)<a_{nB}(x)/2$, then $a_{nB}(y)>0$, so $y\in B\subseteq O$. Conversely fix $x$ and $\varepsilon>0$. Choose $N$ so that $4\sum_{n>N}4^{-n-1}<\varepsilon^2/2$. For each of the finitely many layers $n\le N$, take a neighborhood of $x$ meeting only finitely many $B\in\mathcal B_n$. On the intersection of these neighborhoods, every other coordinate in those layers vanishes both at $x$ and at nearby $y$. Continuity of the remaining finitely many coordinates makes their squared-difference sum $<\varepsilon^2/2$ on a smaller neighborhood. The tail estimate $(a-b)^2\le2a^2+2b^2$ and the uniform layer bound make its contribution $<\varepsilon^2/2$. Thus $d(x,y)<\varepsilon$ there. [step 3.1]

5.1 Step 1.1 proves the forward implication, and steps 1.2--3.1 construct a compatible metric for the reverse implication under the stated AC. [step 1.1, step 1.2, step 4.1, cases-exhaustive] ∎
