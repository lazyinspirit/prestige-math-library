---
id: lem-qid-logarithmic-and-constant-divisibility
kind: lemma
title: "Qid logarithmic and constant divisibility"
status: draft
origin: pipeline
deps: [lem-special-copy-trichotomy-produces-a-restricted-blockade, def-subreciprocal-function-and-ell-divisibility, lem-subreciprocal-functions-close-under-the-density-recursion, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws, lem-integer-part, thm-logarithm-change-of-base]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "5.1 and paragraph on constant ell before it"
proof_strategy: direct
---

## Statement

Every nonempty finite graph $H$ is $\ell$-divisive for each of $\ell(x)=\log_2(1/x)$ and $\ell(x)=2$. Both functions are subreciprocal on $(0,1/2)$. The divisibility constants may depend on $H$.

## Facts & Assumptions

**Given:** A nonempty finite graph $H$ and the two functions $\log_2(1/x)$ and $2$ on $(0,1/2)$.

[F1] For each nonempty $H$, constants $k_1,k_2>0$ make a strict bound $\operatorname{ind}_H(G)<x^{k_1}|G|^{|H|}$ yield a QID $x$-restricted sequence of length at least $2\log_2(1/x)$ and width at least $\lfloor x^{k_2}|G|\rfloor$ when $G$ is nonempty and $0<x\leq1/(8|H|)$. At least half its indices form a subsequence uniformly $x$-sparse in $G$ or in $\overline G$, so that subsequence has length at least $\log_2(1/x)$ and the same width lower bound. ([[lem-special-copy-trichotomy-produces-a-restricted-blockade]]).

[F2] From [[def-subreciprocal-function-and-ell-divisibility]]: A function $\ell:(0,1/2)\to(0,\infty)$ is subreciprocal when it is nonincreasing and satisfies $1<\ell(x)\leq1/x$ throughout its domain. A nonempty finite $H$ is $\ell$-divisive if fixed witnesses $0<c<1/2$ and $d>1$ ensure that for every $0<x<c$ and nonempty finite $G$, the bound $\operatorname{ind}_H(G)\leq x^d|G|^{|H|}$ yields a QID sequence uniformly $x$-sparse in one of $G,\overline G$, with length at least $\ell(x)$ and width at least $\lfloor x^d|G|\rfloor$.

[F3] For every real $y$, its unique integer part satisfies $\lfloor y\rfloor\leq y<\lfloor y\rfloor+1$. ([[lem-integer-part]]).

[F4] For $b>0$, $b\ne1$, and $x>0$, $\log_bx=\frac{\log x}{\log b},\qquad b^{\log_bx}=x,\qquad \log_b(b^u)=u\quad(u\in\mathbb R)$. ([[thm-logarithm-change-of-base]]).

[F5] The natural logarithm $\log:(0,\infty)\to\mathbb R$ is strictly increasing and $\log 1=0$. ([[thm-natural-logarithm-laws]]).

## Proof

1.1 By [F5], $\log 2>0$, so [F4] implies that $\log_2$ is strictly increasing and $\log_2 2=1$. Its inverse $u\mapsto2^u$ is also strictly increasing: if $u<v$ but $2^u\geq2^v$, applying $\log_2$ would give $u\geq v$. Likewise, for any fixed $0<a<1$, [F5] gives $\log a<0$, so $\log_a$ is strictly decreasing by [F4]. If $u<v$ but $a^u\leq a^v$, applying $\log_a$ would give $u\geq v$; thus $a^u>a^v$. [F4, F5, algebra]

2.1 For $y\geq2$, let $N=\lfloor\log_2y\rfloor$ by [F3]. Then $N\geq1$ and $N\leq\log_2y<N+1$. The integer inequality $2^N\geq N+1$ follows by induction: it is equality at $N=1$, and $2^{N+1}\geq2N+2\geq N+2$. Thus [F4] and step 1.1 give $\log_2y<N+1\leq2^N\leq y$. In particular $\log_2y\leq y$ without an asymptotic restriction. [F3, F4, step 1.1, algebra]

3.1 If $0<x<1/2$, then $y=1/x>2$, so $1<\log_2(1/x)\leq1/x$ by the preceding bound. As $x$ increases, $1/x$ decreases and the increasing logarithm makes $\log_2(1/x)$ nonincreasing. The constant function 2 is nonincreasing and $1<2<1/x$. Both satisfy [F2]. [F2, step 1.1, step 2.1, algebra]

4.1 For fixed $H$ choose $k_1,k_2$ from [F1] and any $d>\max(1,k_1,k_2)$. Let $c=1/(16|H|)$. For $0<x<c$ and nonempty $G$, the premise $\operatorname{ind}_H(G)\leq x^d|G|^{|H|}$ implies $\operatorname{ind}_H(G)<x^{k_1}|G|^{|H|}$ because $0<x<1$ and $d>k_1$. The uniformly $x$-sparse subsequence supplied by [F1] has length at least $\log_2(1/x)$ and width at least $\lfloor x^{k_2}|G|\rfloor\geq\lfloor x^d|G|\rfloor$ by floor monotonicity: if $u\leq v$ but $\lfloor u\rfloor>\lfloor v\rfloor$, integrality and [F3] give $u\geq\lfloor u\rfloor\geq\lfloor v\rfloor+1>v$, a contradiction. These are the required witnesses for logarithmic divisibility. [F1, F2, F3, step 1.1, step 3.1]

5.1 The same witnesses have $c\leq1/16<1/4$, hence $x<c$ gives $\log_2(1/x)>2$. The same uniformly $x$-sparse subsequence therefore has length at least 2 and the same width. This witnesses constant divisibility, including every zero-floor-width case. [F2, step 1.1, step 4.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 5.1 and paragraph on constant ell before it.
