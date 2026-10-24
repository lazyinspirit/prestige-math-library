---
id: lem-qa-27-even-sign-window
kind: lemma
title: "A bounded even window from an odd sign approximant"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof uses only scalar inequalities on a finite interval."
provenance:
  statement: ai-altered
  proof: ai-altered
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Lemma 25 and Lemma 29, PDF pp.26–29; the Lemma 29 displayed formula is not used."
---

## Statement

Let $0<\eta<1$, $0<g\le t$, and $s>0$ satisfy $s+t\le1$. Let $S$ be an odd real polynomial such that $|S(y)|\le1$ for $y\in[-1,1]$ and $|S(y)-\operatorname{sgn}(y)|\le\eta/2$ whenever $y\in[-1,1]$ and $|y|\ge g$. Define
$$R(x)=\frac{1-\eta}{2}\bigl(S(x+t)+S(t-x)\bigr)+\frac\eta2,\qquad D(x)=1-\frac{S(x+t)+S(t-x)}2$$
for $x\in[-s,s]$. Then $R$ and $D$ are even polynomials, each has degree at most $\deg S$, and $0\le R(x)\le1$ for all $x\in[-s,s]$. On $|x|\le t-g$, $1-\eta\le R(x)\le1$ and $|D(x)|\le\eta/(2(1-\eta))$. On $|x|\ge t+g$, $0\le R(x)\le\eta$ and $|D(x)-1|\le\eta/(2(1-\eta))$. Globally,
$$-\frac{\eta}{2(1-\eta)}\le D(x)\le1+\frac{\eta}{2(1-\eta)}.$$
The inner or outer interval may be empty, in which case its corresponding assertion is vacuous.

## Facts & Assumptions

**Given:** $\eta,g,t,s,S$ satisfy the hypotheses in the Statement; $\operatorname{sgn}(y)=1$ for $y>0$ and $-1$ for $y<0$.

[A1] $S$ is odd and $|S(y)|\le1$ on $[-1,1]$.

[A2] For $y\in[-1,1]$ with $|y|\ge g$, $S(y)$ differs from $\operatorname{sgn}(y)$ by at most $\eta/2$.

## Proof

1.1 Replacing $x$ by $-x$ interchanges the two summands in each definition, so $R$ and $D$ are even. Each summand is a translate of $S$ and has degree at most $\deg S$; addition and scalar multiplication do not increase that bound. [given, A1, algebra]

1.2 Put $u=t+x$ and $v=t-x$. Since $|x|\le s$ and $s+t\le1$, each of $u,v$ is at most $t+s\le1$ and at least $t-s\ge2t-1\ge-1$; also $u+v=2t\ge2g$. If both $u,v\ge g$, [A2] gives $S(u)+S(v)\ge2-\eta$. Otherwise one of them, say $u$, is less than $g$, and then $v=2t-u>2g-u>g$; [A1]–[A2] give $S(u)+S(v)\ge-1+(1-\eta/2)=-\eta/2$. In every case [A1] also gives $S(u)+S(v)\le2$. Thus $-\eta/2\le S(u)+S(v)\le2$, and substitution into the formula for $R$ yields $\eta(1+\eta)/4\le R(x)\le1-\eta/2$, which implies $0\le R(x)\le1$. [given, A1, A2, algebra]

2.1 If $|x|\le t-g$, both $u=t+x$ and $v=t-x$ are at least $g$. Their sign approximations lie in $[1-\eta/2,1]$ by [A1]–[A2], so $2-\eta\le S(u)+S(v)\le2$. Substituting gives $1-\eta+\eta^2/2\le R(x)\le1-\eta/2$, hence $1-\eta\le R(x)\le1$. Since $D(x)=(1-\eta/2-R(x))/(1-\eta)$, the interval $R(x)\in[1-\eta,1]$ gives $|D(x)|\le\eta/(2(1-\eta))$. [given, A1, A2, step 1.2, algebra]

3.1 If $x\ge t+g$, then $u\ge g$ and $v\le-g$. By [A1]–[A2], $S(u)\in[1-\eta/2,1]$ and $S(v)\in[-1,-1+\eta/2]$, so $|S(u)+S(v)|\le\eta$. Evenness gives the same conclusion for $x\le-(t+g)$. Substitution into $R$ gives $R(x)\in[\eta^2/2,\eta-\eta^2/2]\subseteq[0,\eta]$. The identity for $D$ in step 2.1 then gives $|D(x)-1|\le\eta/(2(1-\eta))$. [given, A1, A2, step 1.1, algebra]

4.1 Step 1.2 gives $R(x)\in[0,1]$. Using $D(x)=(1-\eta/2-R(x))/(1-\eta)$, its minimum over that interval is $-\eta/(2(1-\eta))$ and its maximum is $1+\eta/(2(1-\eta))$. This proves the global bound. [given, step 1.2, algebra] ∎

## Remarks

With $a=1+t_0$, the OP1A expression $1+(S((x-t_0)/a)-S((x+t_0)/a))/2$ is the $D$ above after substituting $x/a$ for the lemma variable and $t_0/a$ for $t$. The lemma domain uses $s=1/a$, so $s+t=1$, and $g=\delta/(4a)$ gives $t=3g$; its inner and outer thresholds are $t-g=\delta/(2a)$ and $t+g=\delta/a$. For OP1A, take $\eta=2v$ with its parameter $v=e/(1000P_{\max})$; then the required approximation error is $\eta/2=v$. Subject to the OP1A SignPoly certificate proving that error and the bound $|S|\le1$, all evaluations stay on $[-1,1]$, where OP1A states those properties. It does not prove the separate Chebyshev interpolation, inverse approximation, Bernstein-refinement termination, or bit-cost obligations of OP1A. The displayed formula in Gilyén et al. Lemma 29 is not invoked here.
