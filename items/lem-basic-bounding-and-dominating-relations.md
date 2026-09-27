---
id: lem-basic-bounding-and-dominating-relations
kind: lemma
title: Basic bounding and dominating relations
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-eventual-domination-bounding-and-dominating-numbers, def-cofinality, thm-cofinality-basics, lem-cofinality-is-well-defined, def-axiom-of-choice, def-cardinal, lem-cardinality-of-a-well-orderable-set, def-cardinal-arithmetic, cor-cardinal-absorption, thm-cardinal-power-set-and-cantor, thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero, def-aleph-and-beth-hierarchies, thm-nat-linear-order, def-nat-order, def-natural-numbers, thm-recursion]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "J. D. Monk, Continuum cardinals, Theorem 1, printed p.1"
      url: "https://euclid.colorado.edu/~monkd/cont_card.pdf"
    - title: "Tomek Bartoszynski, Invariants of Measure and Category, Section 2, printed pp.2-3"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

In ZFC, with $b$ and $d$ the bounding and dominating numbers
([[def-eventual-domination-bounding-and-dominating-numbers]]) and
$\operatorname{cf}$ the cofinality function ([[def-cofinality]]),

$$\aleph_1\le b=\operatorname{cf}(b)\le\operatorname{cf}(d)\le d\le\mathfrak c=2^{\aleph_0}.$$

The right-hand bound is the observation that ${}^{\omega}\omega$ is a
dominating family and has size $\mathfrak c$; the left-hand bounds are the
countable pointwise-maximum argument; $b=\operatorname{cf}(b)$ is the standard
singular-cardinal contradiction; and $b\le\operatorname{cf}(d)$ partitions a
dominating family of size $d$ along a cofinal sequence of length
$\operatorname{cf}(d)$ and diagonalizes against the non-dominating pieces.

## Facts & Assumptions
**Given:** the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] $f\le^{*}g$ means that $f(n)\le g(n)$ for all but finitely many $n$; $\mathcal B$ is $\le^{*}$-unbounded when no single $g$ lies $\le^{*}$-above every member, $\mathcal D$ is $\le^{*}$-dominating when every $f$ lies $\le^{*}$-below some member, and $b,d$ are the least cardinalities of such families, the minima being attained. ([[def-eventual-domination-bounding-and-dominating-numbers]])

[F2] $\operatorname{cf}(\alpha)\le\alpha$; for a limit ordinal $\lambda$, $\operatorname{cf}(\lambda)$ is an infinite cardinal with $\operatorname{cf}(\operatorname{cf}(\lambda))=\operatorname{cf}(\lambda)$, and there is a strictly increasing cofinal map $\operatorname{cf}(\lambda)\to\lambda$. ([[def-cofinality]], [[thm-cofinality-basics]], [[lem-cofinality-is-well-defined]])

[F3] Under AC every set has a cardinality, cardinals are comparable, and every family of nonempty sets has a choice function. ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]], [[def-axiom-of-choice]])

[F4] $\lvert A\times B\rvert=\lvert A\rvert\otimes\lvert B\rvert$ and $\lvert{}^{B}A\rvert=\lvert A\rvert^{\lvert B\rvert}$; $\aleph_0\otimes\aleph_0=\aleph_0$; $2^{\lvert X\rvert}=\lvert\mathcal P(X)\rvert$; and $2^{\aleph_0}=\mathfrak c$. ([[def-cardinal-arithmetic]], [[cor-cardinal-absorption]], [[thm-cardinal-power-set-and-cantor]], [[thm-the-cardinality-of-the-continuum-is-two-to-aleph-zero]], [[def-aleph-and-beth-hierarchies]])

[F5] $\le$ is a linear order on $\mathbb N$, so every nonempty finite subset of $\mathbb N$ has a greatest element, and recursion on $\mathbb N$ defines sequences with prescribed initial value and successor step. ([[thm-nat-linear-order]], [[def-nat-order]], [[thm-recursion]], [[def-natural-numbers]])

## Proof

1.1 Every countable family is bounded: given $\langle f_n:n\in\mathbb N\rangle$ in ${}^{\omega}\omega$, define $g(n)$ as the greatest element of the finite nonempty set $\{f_0(n),\dots,f_n(n)\}$, which exists by [F5]; then for each $i$ and every $n\ge i$ one has $f_i(n)\le g(n)$, so $f_i\le^{*}g$. Hence no family of size at most $\aleph_0$ is $\le^{*}$-unbounded, and since $b$ is a cardinal that is the least size of an unbounded family, $b>\aleph_0$, that is, $\aleph_1\le b$. [F1, F5]

1.2 No countable family is dominating: the empty family is not dominating, and any nonempty finite or countably infinite family can be listed as $D=\{h_i:i\in\omega\}$, repeating entries if necessary. Set $q(n)=1+\max\{h_i(n):i\le n\}$, so for each $i$ one has $q(n)>h_i(n)$ whenever $n\ge i$. Thus $d\ge\aleph_1$. An infinite cardinal is a limit ordinal, and [F2] gives $\operatorname{cf}(d)\le d$. [F1, F2, F3, F5]

1.3 $d\le\mathfrak c$: the map $f\mapsto\{(n,f(n)):n\in\mathbb N\}$ injects ${}^{\omega}\omega$ into $\mathcal P(\omega\times\omega)$, so by [F4]
$$\lvert{}^{\omega}\omega\rvert\le 2^{\lvert\omega\times\omega\rvert}=2^{\aleph_0\otimes\aleph_0}=2^{\aleph_0}=\mathfrak c;$$ and ${}^{\omega}\omega$ is $\le^{*}$-dominating, since $f\le^{*}f$ for every $f$. Hence some dominating family has size at most $\mathfrak c$, and $d\le\mathfrak c$. [F1, F4]

1.4 $b=\operatorname{cf}(b)$: by [F2] $\operatorname{cf}(b)\le b$, so suppose $\operatorname{cf}(b)<b$. By [F1] fix an unbounded family $\{f_{\xi}:\xi<b\}$ of size $b$, and by [F2] fix a strictly increasing cofinal map $\alpha\mapsto b_{\alpha}$ from $\lambda:=\operatorname{cf}(b)$ into $b$. For each $\alpha<\lambda$ the subfamily $B_{\alpha}=\{f_{\xi}:\xi<b_{\alpha}\}$ has cardinality at most $b_{\alpha}<b$, so by the minimality in [F1] it is bounded: choose $g_{\alpha}$ with $f_{\xi}\le^{*}g_{\alpha}$ for every $\xi<b_{\alpha}$ (the choices are made by [F3]). The family $\{g_{\alpha}:\alpha<\lambda\}$ has size at most $\lambda=\operatorname{cf}(b)<b$, so it too is bounded; fix $h$ with $g_{\alpha}\le^{*}h$ for every $\alpha<\lambda$. Every $\xi<b$ satisfies $\xi<b_{\alpha}$ for some $\alpha<\lambda$, because the map is cofinal, so $f_{\xi}\le^{*}g_{\alpha}\le^{*}h$ and $h$ bounds the allegedly unbounded family, a contradiction. Hence $\operatorname{cf}(b)=b$ and $b$ is regular. [F1, F2, F3]

1.5 $b\le\operatorname{cf}(d)$: let $D=\{h_{\xi}:\xi<d\}$ be a dominating family of size $d$ by [F1], put $\lambda=\operatorname{cf}(d)$, and fix a strictly increasing cofinal map $\alpha\mapsto d_{\alpha}$ from $\lambda$ into $d$ by [F2]. For $\alpha<\lambda$ put $D_{\alpha}=\{h_{\xi}:\xi<d_{\alpha}\}$; then $\lvert D_{\alpha}\rvert\le d_{\alpha}<d$, the sets $D_{\alpha}$ increase with $\alpha$, and $\bigcup_{\alpha<\lambda}D_{\alpha}=D$. No $D_{\alpha}$ is dominating, since $d$ is the least size of a dominating family, so by [F3] choose $f_{\alpha}\in{}^{\omega}\omega$ not dominated by any member of $D_{\alpha}$. The family $\{f_{\alpha}:\alpha<\lambda\}$ is unbounded: if some $g$ satisfied $f_{\alpha}\le^{*}g$ for every $\alpha$, then by domination some $h\in D$ satisfies $g\le^{*}h$, and $h\in D_{\alpha}$ for some $\alpha$, so $f_{\alpha}\le^{*}g\le^{*}h$ contradicts the choice of $f_{\alpha}$. Therefore $b\le\lvert\{f_{\alpha}:\alpha<\lambda\}\rvert\le\lambda=\operatorname{cf}(d)$. [F1, F2, F3]

2.1 Steps 1.1, 1.2, 1.4 and 1.5 give $\aleph_1\le b=\operatorname{cf}(b)\le\operatorname{cf}(d)\le d$, and step 1.3 adds $d\le\mathfrak c=2^{\aleph_0}$; together these are the displayed chain. This is the statement. ∎ [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5]
