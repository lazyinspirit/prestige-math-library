---
id: thm-simple-continued-fractions-parametrise-the-irrationals
kind: theorem
title: "Infinite simple continued fractions parametrise the irrational real numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-continued-fraction-coding, lem-simple-continued-fraction-convergents-and-cylinders, lem-integer-part, def-rat-operations, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

The continued-fraction coding determined by [[def-simple-continued-fraction-coding]] gives a bijection from the sequences $(a_0,a_1,\ldots)$ with $a_0\in\mathbb Z$ and $a_n\ge1$ for $n\ge1$ onto $\mathbb R\setminus\mathbb Q$. Both the coding map and its inverse are continuous for the cylinder and subspace topologies.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Define a bijection $z:\mathbb N\to\mathbb Z$ by $z(2k)=k$ and $z(2k+1)=-(k+1)$; the division algorithm makes these two cases exhaustive (thm-division-algorithm-in-z). For $x\in\mathbb N^{\mathbb N}$ put $a_0=z(x_0)$ and $a_n=x_n+1$ for $n\ge1$. Its finite simple continued fractions are $[a_0;\ldots,a_n]$, evaluated in $\mathbb Q$ (def-rationals, def-rat-operations). A finite prefix determines the cylinder of all codes extending it. Infinite continued-fraction values are established, rather than assumed, in thm-simple-continued-fractions-parametrise-the-irrationals. ([[def-simple-continued-fraction-coding]]).

[F2] With initial values $p_{-2}=0$, $p_{-1}=1$, $q_{-2}=1$, $q_{-1}=0$ and the recurrences $p_n=a_np_{n-1}+p_{n-2}$, $q_n=a_nq_{n-1}+q_{n-2}$ for $n\ge0$: $p_0=a_0$, $q_0=1$, the $q_n$ are positive and strictly increasing for $n\ge1$, and $p_nq_{n-1}-p_{n-1}q_n=(-1)^{n-1}$ for $n\ge0$. For a finite prefix, $J(a_0,\dots,a_n)$ is the closed real interval with endpoints $p_n/q_n$ and $(p_n+p_{n-1})/(q_n+q_{n-1})$; these intervals are nested as the prefix is extended and $\operatorname{diam}J(a_0,\dots,a_n)=1/(q_n(q_n+q_{n-1}))\to0$. Both endpoints are rational, being ratios of integers; the cited lemma does not decide whether an infinite code's value can equal one. ([[lem-simple-continued-fraction-convergents-and-cylinders]]).

[F3] Identify $\mathbb{Z}$ with its canonical copy inside $\mathbb{R}$, along the embeddings $\mathbb{N} \to \mathbb{Z} \to \mathbb{Q} \to \mathbb{R}$ (lem-nat-embeds-int, lem-int-embeds-rat, lem-rat-embeds-dense, def-integers). Then for every real $x$ there is **exactly one** integer $m$ with $$m \;\le\; x \;<\; m + 1 .$$ It is written $\lfloor x \rfloor$ and called the **integer part**, or **floor**, of $x$. **Two independent ingredients are needed and neither may be dropped.** Existence is the Archimedean property (thm-of-archimedean) together with the well-ordering of $\mathbb{N}$ (thm-well-ordering-principle): the first says that $x$ is caught between two integers at all, the second picks the *least* integer above $x$. Uniqueness is the discreteness of $\mathbb{Z}$: no integer lies strictly between $m$ and $m+1$. This lemma is stated once here and reused. It is what turns "the nearest integer to $x$" from a picture into an object, and the companion page's oscillator $\psi(x) = \inf_{n \in \mathbb{Z}} |x - n|$ is computed from it in one line. ([[lem-integer-part]]).

[F4] On $\mathbb{Q}$ (def-rationals) define, on representatives, $$[(a,b)] + [(c,d)] := [(ad + cb,\; bd)], \qquad [(a,b)] \cdot [(c,d)] := [(ac,\; bd)],$$ $$-[(a,b)] := [(-a, b)], \qquad 0 := [(0,1)], \qquad 1 := [(1,1)],$$ and, for $[(a,b)] \ne 0$ (equivalently $a \ne 0$), the inverse $[(a,b)]^{-1} := [(b,a)]$. ([[def-rat-operations]]).

[F5] The map $q \mapsto \hat q$ (def-real-numbers) is an embedding of ordered fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with $|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two reals lies a rational. ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** direct.

1.1 Decode the first natural coordinate by the fixed zigzag bijection with the integers and shift each later coordinate by one. [given, F3, F2, F1, F4]

2.1 By [F2] the intervals $J$ attached to the successive prefixes of a code are nested closed bounded intervals whose diameters tend to $0$, so their intersection is a single real $x$, which is the code's value. That $x$ is irrational, and in particular is not either rational endpoint: suppose $x=a/b$ with integers $a,b$ and $b\ge1$. Since $x\in J(a_0,\dots,a_n)$, [F2] gives $|x-p_n/q_n|\le1/(q_n(q_n+q_{n-1}))<1/q_n^2$ for $n\ge1$, so $|aq_n-bp_n|=bq_n\,|x-p_n/q_n|<b/q_n$. The denominators $q_n$ are strictly increasing by [F2], hence unbounded, so $|aq_n-bp_n|<1$ for all large $n$; being a natural number it is then $0$, giving $x=p_n/q_n$ for all large $n$. But consecutive convergents differ, since $p_{n+1}/q_{n+1}-p_n/q_n=(-1)^n/(q_nq_{n+1})\ne0$ by the determinant identity of [F2]. This contradiction makes $x$ irrational. [step 1.1, F2, F5, F3]

3.1 Conversely, repeatedly take the integer part and reciprocal of the positive fractional remainder of an irrational; the process never stops, and the cylinder estimates recover the original number. [step 2.1, F3, F1, F2]

4.1 Prefix agreement is exactly the neighbourhood comparison needed for continuity of both maps. [step 3.1, F3, F1, F2]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎

