---
id: ex-csm-frontier-nonexposed-energy
kind: example
title: A strictly convex entropy interval with no canonical energies
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-mean-field-ensemble
  - thm-csm-frontier-mean-field-supporting-lines
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-chain-rule
  - cor-mean-value-theorem
dependency_roles:
  def-csm-frontier-mean-field-ensemble: mathematical-premise
  thm-csm-frontier-mean-field-supporting-lines: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Hugo Touchette, The large deviation approach to statistical mechanics
      url: https://arxiv.org/pdf/0804.0327
      locator: "Section V.E, printed pp. 52–54: ensemble non-equivalence for nonconcave entropy and the supporting-line perspective."
    - title: Julien Poisat, Introduction to Large Deviations, complete author-hosted lecture notes
      url: https://www.ceremade.dauphine.fr/~poisat/files/M2-largedeviations/lecturenotes.pdf
      locator: "Section 3.4, Theorem 3.8 and Exercise 19, printed pp. 10–11: continuous exponential tilting and mean-field variational criteria."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

Take the binary alphabet $\mathcal A=\{1,0\}$ with uniform reference $p=(1/2,1/2)$ and continuous energy-density map $h(q)=q(1)^{1/4}$ on $\Delta(\mathcal A)$. With $H_2(x):=-x\ln x-(1-x)\ln(1-x)$ and $0\ln0:=0$, the constrained entropy from the finite-alphabet mean-field model is $s(u)=H_2(u^4)-\ln2$ for $0\leq u\leq1$. For $0<u\leq1/10$,
$$s''(u)=u^2\left[12\ln\frac{1-u^4}{u^4}-\frac{16}{1-u^4}\right]>0.$$
Each such energy lies in an interval of strict convexity and therefore has no affine upper supporting line of any slope. Consequently none of these microcanonical energies is realized by a canonical mean-field ensemble at any $\beta\in\mathbb R$.

## Example references

[[def-csm-frontier-mean-field-ensemble]]

[[thm-csm-frontier-mean-field-supporting-lines]]

[[def-natural-logarithm]]

[[thm-natural-logarithm-laws]]

[[thm-logarithm-derivative-and-integral]]

[[thm-chain-rule]]

[[cor-mean-value-theorem]]

## Facts & Assumptions

**Given:** The binary alphabet, uniform reference, energy map, entropy convention, and the definitions and suppliers listed below.

[F1] [[def-csm-frontier-mean-field-ensemble]]: $d(u)=\inf_{h(q)=u}D(q\|p)$, $s(u)=-d(u)$, and the canonical variational objective is $D(q\|p)+\beta h(q)$.

[F2] [[thm-csm-frontier-mean-field-supporting-lines]]: an energy is canonical at slope $\beta$ only if $s(v)\leq s(u)+\beta(v-u)$ on the whole energy range.

[F3] [[def-natural-logarithm]] and [[thm-natural-logarithm-laws]]: $\ln$ is the inverse of $\exp$ on $(0,\infty)$, is strictly increasing, and satisfies $\ln(xy)=\ln x+\ln y$.

[F4] [[thm-logarithm-derivative-and-integral]]: $\ln'(x)=1/x$ for $x>0$ and $\ln x=\int_1^x dt/t$.

[F5] [[thm-chain-rule]]: derivatives of real function compositions obey the chain rule under the stated domain hypotheses.

[F6] [[cor-mean-value-theorem]]: for a continuous function on a closed interval differentiable in its interior, the endpoint secant slope equals an interior derivative.

## Verification
1.1 If $u=0$, then $h(q)=0$ forces $q(1)=0$ and $q(0)=1$, so the constraint fiber is the singleton $(0,1)$. By [F1], $D((0,1)\|p)=\ln2$, and therefore $s(0)=-\ln2=H_2(0)-\ln2$. If $0<u\leq1$, then $h(q)=u$ forces $q(1)=u^4$ and $q(0)=1-u^4$, again a singleton fiber. The relative-entropy formula in [F1] gives $D(q\|p)=u^4\ln(2u^4)+(1-u^4)\ln(2(1-u^4))=\ln2-H_2(u^4)$; hence $s(u)=H_2(u^4)-\ln2$. [given, F1, F3, algebra]

2.1 For $0<u<1$, [F4]–[F5] give $H_2'(x)=\ln((1-x)/x)$ and therefore $s'(u)=4u^3\ln((1-u^4)/u^4)$. Differentiating once more yields $s''(u)=u^2 B(u)$, where $B(u):=12\ln((1-u^4)/u^4)-16/(1-u^4)$. [F3, F4, F5, step 1.1, algebra]

3.1 On $0<u\leq1/9$, $R(u):=(1-u^4)/u^4=u^{-4}-1$ decreases and $1/(1-u^4)$ increases, so $B(u)$ decreases. At $u=1/9$, $R(u)=6560$ and $B(1/9)=12\ln6560-16\cdot6561/6560$. Since $6560>16$, [F3] gives $\ln6560>\ln16=4\ln2$; and [F4] gives $\ln2=\int_1^2dt/t>1/2$ because $1/t\geq1/2$ on $[1,2]$ with strict inequality on $[1,2)$. Thus $12\ln6560>24$. Also $16\cdot6561/6560<17$ by integer multiplication, so $B(1/9)>7$ and $B(u)>0$ throughout $(0,1/9]$. In particular $s''(u)>0$ on that interval. By applying [F6] first to $s'$ and then to $s$, positive second derivative makes $s'$ strictly increasing and every interior chord lie strictly above the graph; hence $s$ is strictly convex on $(0,1/9)$. [F3, F4, F6, step 2.1, algebra]

4.1 Fix $u\in(0,1/10]$ and choose $t>0$ so that $0<u-t<u+t<1/9$, possible because $1/10<1/9$. Strict convexity from step 3.1 gives $s(u-t)+s(u+t)>2s(u)$. If an upper supporting line with slope $\beta$ existed at $u$, its inequalities at $u-t$ and $u+t$ would instead give $s(u-t)+s(u+t)\leq[s(u)-\beta t]+[s(u)+\beta t]=2s(u)$, a contradiction. By [F2], no such energy is canonical for any real $\beta$. [F2, step 3.1, choose, algebra] ∎

