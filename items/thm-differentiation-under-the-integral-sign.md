---
id: thm-differentiation-under-the-integral-sign
kind: theorem
title: "Differentiation under the integral sign"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dominated-convergence, cor-mean-value-theorem, thm-linearity-of-the-lebesgue-integral-on-l-one, lem-rat-embeds-dense]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (thm-differentiation-under-the-integral-sign). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.27"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval and let $f:X\times I\to\mathbb C$
be such that:

1. for every $t\in I$, the function $x\mapsto f(x,t)$ is integrable;
2. for almost every $x$, the map $t\mapsto f(x,t)$ is differentiable on $I$;
3. for every $t\in I$, the function
   $$x\mapsto \frac{\partial f}{\partial t}(x,t),$$
   extended by zero where the derivative is undefined, is measurable;
4. there are a measurable null set $N$ and a nonnegative measurable function
   $g$ with
   $$\int g\,d\mu<+\infty$$
   and
   $$\left|\frac{\partial f}{\partial t}(x,t)\right|\le g(x)$$
   for every $t\in I$ and every $x\in X\setminus N$.

Then
$$F(t):=\int f(x,t)\,d\mu(x)$$
is differentiable on $I$, and
$$F'(t)=\int \frac{\partial f}{\partial t}(x,t)\,d\mu(x),$$
with the same zero extension in the last integral.

## Facts & Assumptions

**Given:** An open interval $I$, a function $f$ satisfying the first three displayed hypotheses, and a measurable null set $N$ together with a nonnegative measurable majorant $g$ satisfying hypothesis 4. Choose a measurable null set $E$ outside which hypothesis 2 holds, and put $N_*=N\cup E$.

[L1] Dominated convergence applies to integrable complex-valued functions under a single $L^1$ majorant ([[thm-dominated-convergence]]).

[L2] The mean value theorem bounds difference quotients by a derivative bound on an interval ([[cor-mean-value-theorem]]).

[L3] The complex integral is linear on $L^1$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[L4] The rationals are dense in the reals ([[lem-rat-embeds-dense]]).

## Proof

**Proof technique:** direct.

1.1 Fix $t_0\in I$ and let $h_n\to0$ with $h_n\ne0$ and $t_0+h_n\in I$. Define $$q_n(x):=\frac{f(x,t_0+h_n)-f(x,t_0)}{h_n}.$$ For every $x\in X\setminus N_*$, differentiability in $t$ gives $q_n(x)\to\partial_tf(x,t_0)$. Give the derivative value zero on $N_*$; this measurable modification differs from the stated zero extension only on a null set, so it has the same integral. [given, construct]

2.1 For each $n$, hypothesis 1 makes $x\mapsto f(x,t_0+h_n)$ and $x\mapsto f(x,t_0)$ integrable and therefore measurable, so $q_n$ is measurable. Fix $x\in X\setminus N_*$ and $n$. If $q_n(x)=0$, then $|q_n(x)|\le g(x)$ is immediate. Otherwise put $$\alpha:=\overline{q_n(x)}/|q_n(x)|,$$ so $|\alpha|=1$ and $$|q_n(x)|=\operatorname{Re}\!\left(\alpha\,\frac{f(x,t_0+h_n)-f(x,t_0)}{h_n}\right).$$ Apply [L2] to the real-valued function $\tau\mapsto\operatorname{Re}(\alpha f(x,\tau))$ on the segment joining $t_0$ to $t_0+h_n$. For some interior point $\xi$ of that segment, $$|q_n(x)|=\operatorname{Re}(\alpha\,\partial_tf(x,\xi))\le|\partial_tf(x,\xi)|\le g(x).$$ Hypothesis 3 and the zero extension make the limit measurable. Therefore [L1] applies to $(q_n)$. [step 1.1, L1, L2]

3.1 By [L1], $$\lim_n\int q_n(x)\,d\mu(x)=L:=\int\partial_tf(x,t_0)\,d\mu(x).$$ Linearity of the integral gives $$\int q_n(x)\,d\mu(x)=\frac{F(t_0+h_n)-F(t_0)}{h_n}.$$ This holds for every supplied sequence of admissible nonzero increments. [step 2.1, L1, L3]

4.1 The same mean-value estimate as in step 2.1, with any $s,t\in I$ in place of $t_0,t_0+h_n$, gives $|f(x,t)-f(x,s)|\le |t-s|g(x)$ outside $N_*$. Integrating yields $|F(t)-F(s)|\le |t-s|\int g\,d\mu$, so $F$ is continuous. Consequently $Q(h)=(F(t_0+h)-F(t_0))/h$ is continuous on the punctured interval of admissible increments. If $Q(h)$ failed to tend to $L$ as $h\to0$, there would be an $\varepsilon>0$ and, for every $n\ge1$, a nonzero admissible $h$ with $|h|<1/n$ and $|Q(h)-L|\ge\varepsilon$. Continuity of $Q$ and [L4] give a rational admissible $r$ with $|r|<1/n$ and $|Q(r)-L|>\varepsilon/2$. Fix an enumeration of $\mathbb Q$ and take the first such rational $r_n$ for each $n$; this is a definable selection from a countable set and uses no Countable Choice. Then $r_n\to0$, contradicting step 3.1. Thus $Q(h)\to L$, which is precisely $F'(t_0)=L$. Since $t_0$ was arbitrary, the theorem follows. [L2, L4, step 2.1, step 3.1] ∎
