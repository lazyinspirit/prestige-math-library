---
id: thm-median-influence-function
kind: theorem
title: Influence function and sensitivity of the median
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 11
deps:
  - def-gross-error-path
  - def-gross-error-sensitivity
  - def-lower-median-functional
  - def-statistical-functional-and-influence-function
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §§1.2–1.3, PDF pp. 2–3, 13–18"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 15–23"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
    - title: "Pavlo Mozharovskyi, Introduction to Robust Statistics, slide ‘Sample median: influence function’ (PDF p. 32)"
      url: "https://perso.telecom-paristech.fr/mozharovskyi/resources/ExtremeDepth_Lecture1.pdf"
---

## Statement

Let $F$ be a Borel probability law on $\mathbb R$, let $m=m(F)$ be its lower median, and assume $F(m)=1/2$. Suppose that on an open interval $I$ containing $m$ there is a continuous density version $f$ satisfying

$$F((s,t])=\int_s^t f(u)\,du\quad(s<t,\ s,t\in I),\qquad f(m)>0.$$

For each fixed $x\in\mathbb R$, the right point-contamination influence function of the lower-median functional is

$$\operatorname{IF}(x;m,F)=\begin{cases}-\dfrac1{2f(m)},&x<m,\\[4pt]0,&x=m,\\[4pt]+\dfrac1{2f(m)},&x>m.\end{cases}$$

Consequently, its gross-error sensitivity is $\gamma^*(m,F)=1/(2f(m))$.

## Facts & Assumptions

**Given:** A Borel probability law $F$, its lower median $m$, the equality $F(m)=1/2$, and a continuous local density $f$ on an interval $I$ with $f(m)>0$. Fix a contamination point $x\in\mathbb R$.

[F1] [[def-gross-error-path]]: $F_{\epsilon,x}=(1-\epsilon)F+\epsilon\delta_x$ for $0\le\epsilon\le1$.

[F2] [[def-lower-median-functional]]: $m(G)=\inf\{t:G(( -\infty,t])\ge1/2\}$ on its stated domain.

[F3] [[def-statistical-functional-and-influence-function]]: $\operatorname{IF}(x;m,F)$ is the right derivative of $m(F_{\epsilon,x})$ at $\epsilon=0$, when finite.

[F4] [[def-gross-error-sensitivity]]: $\gamma^*(m,F)$ is the supremum of the absolute influence values over the directions where they exist.

## Proof

**Proof technique:** direct.

1.1 Since $I$ is open, $f$ is continuous at $m$, and $f(m)>0$, choose $\delta>0$ and $c>0$ so that $[m-\delta,m+\delta]\subset I$ and $f(u)\ge c$ throughout this closed interval. For $s<t$ in it, the density identity gives $F(t)-F(s)=\int_s^t f(u)\,du\ge c(t-s)>0$. Thus $F$ is continuous and strictly increasing there, with $F(m)=1/2$. [given, algebra]

2.1 Suppose first that $x<m$, and shrink $\delta$ so that $m-\delta>x$. For sufficiently small $\epsilon>0$, the number $r_\epsilon=(1/2-\epsilon)/(1-\epsilon)$ lies strictly between $F(m-\delta)$ and $1/2$. Continuity and strict increase give a unique $q_\epsilon\in(m-\delta,m)$ with $F(q_\epsilon)=r_\epsilon$. Since $r_\epsilon\uparrow1/2$ as $\epsilon\downarrow0$, for every $0<\eta<\delta$ eventually $r_\epsilon>F(m-\eta)$, so $m-\eta<q_\epsilon<m$ and $q_\epsilon\to m$. Since $q_\epsilon>x$, the mixture cdf at $q_\epsilon$ is $(1-\epsilon)F(q_\epsilon)+\epsilon=1/2$. For $t<x$, the contamination term is zero and, by monotonicity and $F(m)=1/2$, the mixture cdf is $(1-\epsilon)F(t)\le(1-\epsilon)/2<1/2$. At $t=x$, monotonicity gives $F(x)\le F(m-\delta)<r_\epsilon$, so $(1-\epsilon)F(x)+\epsilon<(1-\epsilon)r_\epsilon+\epsilon=1/2$. For $x<t<q_\epsilon$, the contamination term is $\epsilon$ and $F(t)<F(q_\epsilon)=r_\epsilon$: below the local interval this follows from monotonicity and $F(t)\le F(m-\delta)<F(q_\epsilon)$, and inside it from strict increase. Therefore the mixture cdf at such $t$ is $(1-\epsilon)F(t)+\epsilon<(1-\epsilon)r_\epsilon+\epsilon=1/2$. Together with the cases $t<x$ and $t=x$, this puts the mixture cdf below $1/2$ for every $t<q_\epsilon$, while it equals $1/2$ at $q_\epsilon$, so [F2] gives $m(F_{\epsilon,x})=q_\epsilon$. [step 1.1, F1, F2, given, algebra]

2.2 If $x>m$, shrink $\delta$ so that $m+\delta<x$. For small $\epsilon>0$, $s_\epsilon=1/(2(1-\epsilon))$ lies strictly between $1/2$ and $F(m+\delta)$. There is a unique $q_\epsilon\in(m,m+\delta)$ with $F(q_\epsilon)=s_\epsilon$. Since $s_\epsilon\downarrow1/2$ as $\epsilon\downarrow0$, for every $0<\eta<\delta$ eventually $s_\epsilon<F(m+\eta)$, so $m<q_\epsilon<m+\eta$ and $q_\epsilon\to m$. Now $q_\epsilon<x$, so the mixture cdf at $q_\epsilon$ is $(1-\epsilon)F(q_\epsilon)=1/2$. For every $t<q_\epsilon$, the contamination term is zero; if $m\le t<q_\epsilon$, strict increase on the local interval gives $F(t)<F(q_\epsilon)$, and if $t<m$ then monotonicity gives $F(t)\le F(m)<F(q_\epsilon)$. Thus the mixture cdf is below $1/2$ for every $t<q_\epsilon$, while it equals $1/2$ at $q_\epsilon$, so [F2] gives $m(F_{\epsilon,x})=q_\epsilon$. [step 1.1, F1, F2, given, algebra]

3.1 In the case $x<m$, step 2.1 gives $F(q_\epsilon)-F(m)=-\epsilon/[2(1-\epsilon)]$ and $q_\epsilon\to m$. The density identity and continuity of $f$ imply $[F(q_\epsilon)-F(m)]/(q_\epsilon-m)\to f(m)$. Dividing these two relations yields $(q_\epsilon-m)/\epsilon\to-1/(2f(m))$. [step 2.1, given, algebra]

3.2 In the case $x>m$, step 2.2 gives $F(q_\epsilon)-F(m)=\epsilon/[2(1-\epsilon)]$ and $q_\epsilon\to m$. The same density quotient tends to $f(m)$, hence $(q_\epsilon-m)/\epsilon\to+1/(2f(m))$. [step 2.2, given, algebra]

4.1 If $x=m$, continuity of $F$ at $m$ gives $F_{\epsilon,m}(m-)=(1-\epsilon)/2<1/2$ and $F_{\epsilon,m}(m)=(1+\epsilon)/2>1/2$. Monotonicity then puts every $t<m$ below the median threshold, while $m$ itself is above it, so the lower median remains exactly $m$ and its right derivative is $0$. By [F3] and steps 3.1–3.2, these three cases give the displayed pointwise influence function. [step 1.1, F1, F2, F3, step 3.1, step 3.2, given, algebra]

5.1 The absolute influence value is $1/(2f(m))$ for every $x\ne m$ and zero at $m$. Both sides of $m$ are nonempty in $\mathbb R$, so the supremum over all directions is $1/(2f(m))$ by [F4]. Since $F$ has a density near $m$, $F\{m\}=0$; therefore the conventional expression $(1/2-\mathbf1\{x\le m\})/f(m)$ agrees with this pointwise derivative $F$-almost everywhere, though its value at $x=m$ is not the literal right derivative. [given, F4, step 1.1, step 3.1, step 3.2, step 4.1, algebra] ∎

## Remarks

The conventional indicator formula in the Statement of the controlling design is an $F$-almost-everywhere representative. At the single point $x=m$, the right point-contamination derivative of the lower median is $0$; retaining this pointwise value makes the definition agree exactly with the computed limit.

