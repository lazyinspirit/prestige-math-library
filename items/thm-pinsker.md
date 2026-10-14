---
id: thm-pinsker
kind: theorem
title: "Pinsker’s inequality with event-supremum total variation"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-higher-derivatives-and-smoothness
  - def-kullback-leibler-divergence
  - def-natural-logarithm
  - def-total-variation-distance-for-probability-laws
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - cor-mean-value-theorem
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - def-integral-logarithm
  - thm-integral-logarithm-derivative-and-normalisation
  - thm-natural-logarithm-laws
  - thm-likelihood-ratio-change-of-measure
  - thm-jensens-integral-inequality
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, Lemma 4.8"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §8.2.2; Chapter 2, Proposition 2.2.8"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Assume AC. For probability measures $P,Q$ on one measurable space, with
$$\|P-Q\|_{\rm TV}:=\sup_{A}|P(A)-Q(A)|,$$
the event-supremum convention without a factor $1/2$,
$$\|P-Q\|_{\rm TV}\le\sqrt{\frac12D(P\|Q)}.$$
If $P\not\ll Q$, the right side is $+\infty$ by the definition of KL
divergence.

## Facts & Assumptions

**Given:** AC and probability measures $P,Q$ on the same measurable space.

[A1] [[def-axiom-of-choice]]: AC supplies the Radon–Nikodym construction used by the KL divergence.

[F1] [[def-kullback-leibler-divergence]] and [[thm-likelihood-ratio-change-of-measure]]: if $P\not\ll Q$, then $D(P\|Q)=+\infty$; if $P\ll Q$ with $r=dP/dQ$, then $P(B)=\int_Br\,dQ$ for every measurable $B$, so $\int r\,dQ=1$, and $D(P\|Q)=\int r\log r\,dQ$ with $0\log0=0$ and finite negative part.

[F2] [[def-total-variation-distance-for-probability-laws]]: $\|P-Q\|_{\rm TV}=\sup_A|P(A)-Q(A)|\in[0,1]$; this convention has no factor $1/2$.

[F3] [[thm-jensens-integral-inequality]]: for a probability measure, an integrable real function $f$, and convex $\varphi$ with $\varphi\circ f$ integrable, $\varphi(\int f)\le\int\varphi(f)$.

[F4] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-higher-derivatives-and-smoothness]], [[thm-integral-logarithm-derivative-and-normalisation]], [[cor-integral-logarithm-agrees-with-natural-logarithm]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], and [[cor-mean-value-theorem]]: the identity $L=\log$ transfers $L'(x)=1/x$ to $\log'(x)=1/x$; products and compositions obey the derivative rules; and the mean value theorem applies on closed subintervals of $(0,1)$. Also $t\log t\to0$ as $t\downarrow0$: for $s\ge1$, $0\le\log(s)/s\le2/\sqrt{s}$ using $\log s=\int_1^sdu/u$ and $1/u\le1/\sqrt u$.

## Proof

1.1 If $P\not\ll Q$ or $D(P\|Q)=+\infty$, the inequality is immediate. Otherwise let $r=dP/dQ$ and $\varphi(t)=t\log t$ for $t>0$, with $\varphi(0)=0$. By [F4] and the product rule, $\varphi''(t)=1/t>0$ for $t>0$. The mean value theorem in [F4] makes $\varphi'$ increasing and hence $\varphi$ convex on $(0,\infty)$. The limit in [F4] makes this extension continuous at zero, so $\varphi$ is convex on $[0,\infty)$. Since $D(P\|Q)$ is finite and its negative part is bounded by [F1], $\varphi(r)$ is $Q$-integrable. Jensen [F3] and $\int r\,dQ=1$ give $D(P\|Q)=\int\varphi(r)\,dQ\ge\varphi(1)=0$. [A1, F1, F3, F4, given]

2.1 Fix a measurable event $A$, and put $a=P(A)$, $b=Q(A)$. If $b\in\{0,1\}$, absolute continuity gives $a=b$, so step 1.1 yields $D(P\|Q)\ge k(a,b)=0$. If $0<b<1$, normalize $Q$ on $A$ and on $A^c$. Their averages of $r$ are $a/b$ and $(1-a)/(1-b)$. Applying [F3] on each normalized probability space and adding yields $D(P\|Q)\ge a\log\frac ab+(1-a)\log\frac{1-a}{1-b}=:k(a,b),$ with $0\log0=0$ by continuity. [A1, F1, F3, given, step 1.1, algebra]

3.1 For fixed $0<b<1$, define $g(a)=k(a,b)-2(a-b)^2$ on $[0,1]$. Differentiating by [F4] gives $g''(a)=\frac1{a(1-a)}-4=\frac{(2a-1)^2}{a(1-a)}\ge0$ on $(0,1)$. For $a,b\in(0,1)$ with $a>b$, the mean value theorem applied to $g'$ on $[b,a]$ shows $g'(a)\ge g'(b)=0$, and applied to $g$ on $[b,a]$ shows $g(a)\ge g(b)=0$. For $a,b\in(0,1)$ with $a<b$, the same two applications on $[a,b]$ show $g'(a)\le g'(b)=0$ and $g(a)\ge g(b)=0$. The limit in [F4] makes $g$ continuous at $a=0,1$, so the inequality extends to those endpoints. If $b=0$ or $b=1$, absolute continuity gives $a=b$ and equality. Thus $k(a,b)\ge2(a-b)^2$ in every case. [F4, step 2.1, algebra]

4.1 Combining steps 2.1 and 3.1 gives $D(P\|Q)\ge2|P(A)-Q(A)|^2$ for every measurable $A$. Since the square is increasing on $[0,1]$, its supremum is the square of the supremum; using [F2] yields $D(P\|Q)\ge2\|P-Q\|_{\rm TV}^2$, which is the claimed inequality. [F2, step 2.1, step 3.1, algebra] ∎
