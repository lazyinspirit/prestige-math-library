---
id: lem-qft-example-deterministic-ratio-error
kind: lemma
title: Deterministic ratio error and Taylor remainder
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "L. S. Brown and G. Gabrielse, Geonium theory: Physics of a single electron or ion in a Penning trap, Reviews of Modern Physics 58 (1986), §II.A and §II.D"
      url: https://cfp.physics.northwestern.edu/documents/GeoniumTheoryReview.pdf
    - title: "Manuel Vogel, Particle Confinement in Penning Traps: An Introduction, Springer Series on Atomic, Optical, and Plasma Physics 100 (2018), Chapter 5"
      url: https://ndl.ethernet.edu.et/bitstream/123456789/72726/1/243.pdf
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Define $R:\mathbb R\times(0,\infty)\to\mathbb R$ by $R(a,c):=1+a/c$. Here $c$ is only the positive denominator variable in this lemma, not the speed of light. For real $\delta a,\delta c$ and nonnegative bounds $\epsilon_a,\epsilon_c$ satisfying $|\delta a|\le\epsilon_a$ and $|\delta c|\le\epsilon_c<c$, both denominators are positive and

$$\left|R(a+\delta a,c+\delta c)-R(a,c)\right|\le\frac{c\epsilon_a+|a|\epsilon_c}{c(c-\epsilon_c)}.$$

For the first-order statement, write $x=(a,c)$, $h=(u,v)$, and $\|h\|_2:=\sqrt{u^2+v^2}$. Suppose the segment $\{x+th:0\le t\le1\}$ lies in the closed rectangle $Q=[A_-,A_+]\times[c_-,c_+]$, where $A_-\le A_+$ and $0<c_-\le c_+$. Define $A_*:=\max(|A_-|,|A_+|)$, $K_Q:=(A_*+c_+/2)/c_-^3$, and the real-linear map $L_x(u,v):=u/c-av/c^2$. The total derivative of $R$ at $x$ means a real-linear map $L$ such that $\lim_{h\to0}|R(x+h)-R(x)-L(h)|/\|h\|_2=0$. Then $L_x$ is the total derivative, and

$$\left|R(x+h)-R(x)-L_x(h)\right|\le K_Q\|h\|_2^2.$$

## Facts & Assumptions

**Given:** Let $c>0$, $\epsilon_a,\epsilon_c\ge0$, and $x,h,Q$ satisfy the conditions in the statement. All variables are real; the inequalities are deterministic interval conditions, with no probability space or sampling assumption.

[A1] $R(a,c)=1+a/c$, $c>0$, $|\delta a|\le\epsilon_a$, $|\delta c|\le\epsilon_c<c$, and $\epsilon_a,\epsilon_c\ge0$.

[A2] For the derivative bound, $x=(a,c)$, $h=(u,v)$, $\|h\|_2^2=u^2+v^2$, the segment $x+th$ lies in $Q=[A_-,A_+]\times[c_-,c_+]$, $A_-\le A_+$, and $0<c_-\le c_+$. Put $A_*=\max(|A_-|,|A_+|)$ and $K_Q=(A_*+c_+/2)/c_-^3$.

## Proof
1.1 From [A1], $c+\delta c\ge c-\epsilon_c>0$. Thus both ratio values are defined, and subtracting their fractions gives
$R(a+\delta a,c+\delta c)-R(a,c)=\frac{c\delta a-a\delta c}{c(c+\delta c)}$. [A1, algebra]

1.2 For $\eta\to0$ with $c+\eta>0$, the coordinate difference quotients are
$\frac{R(a+\eta,c)-R(a,c)}{\eta}=\frac1c$ and
$\frac{R(a,c+\eta)-R(a,c)}{\eta}=-\frac{a}{c(c+\eta)}$.
Their limits give the candidate linear map $L_x(u,v)=u/c-av/c^2$; the total-derivative conclusion follows from the full remainder estimate below. [A2, algebra]

1.3 Direct subtraction gives
$R(x+h)-R(x)-L_x(h)=\frac{av^2-cuv}{c^2(c+v)}$. [A2, algebra]

2.1 The triangle inequality gives $|c\delta a-a\delta c|\le c\epsilon_a+|a|\epsilon_c$, while [A1] gives $c(c+\delta c)\ge c(c-\epsilon_c)>0$. Dividing these positive-denominator bounds proves the displayed deterministic ratio-error inequality. [A1, step 1.1, algebra]

2.2 Since the segment lies in $Q$, $c,c+v\ge c_-$, $c\le c_+$, and $|a|\le A_*$. Also $2|uv|\le u^2+v^2$, because $(|u|-|v|)^2\ge0$. Therefore
$|av^2-cuv|\le A_*v^2+c_+|uv|\le(A_*+c_+/2)(u^2+v^2)$, and $c^2(c+v)\ge c_-^3$. Combining these estimates with the exact remainder in step 1.3 gives
$|R(x+h)-R(x)-L_x(h)|\le K_Q\|h\|_2^2$. [A2, step 1.3, algebra]

3.1 For fixed $x=(a,c)$ with $c>0$, choose $Q=[a-1,a+1]\times[c/2,3c/2]$, so $x$ is interior and its lower second-coordinate bound is positive. For every sufficiently small $h$, both endpoints lie in $Q$, and convexity places the segment there. Step 2.2 then gives
$\frac{|R(x+h)-R(x)-L_x(h)|}{\|h\|_2}\le K_Q\|h\|_2\to0$.
By the stated definition, $DR(x)=L_x$. [A2, step 2.2, algebra] ∎

## Remarks

The two local bounds are deterministic consequences of positive denominators and algebra. The proof uses no statistical uncertainty model, independence assumption, Taylor theorem, chain rule, compactness theorem, or probability supplier. Penning-trap frequency ratios motivate the application; the exact finite-error and quadratic-remainder bounds are proved here and are not attributed to an external source.
