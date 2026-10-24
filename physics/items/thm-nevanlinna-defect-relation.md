---
id: thm-nevanlinna-defect-relation
kind: theorem
title: "Nevanlinna deficiency and ramification defect relations"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-nevanlinna-deficiency-and-ramification-index
  - thm-nevanlinna-second-main-theorem
  - lem-nevanlinna-growth-dominates-logarithm
  - thm-nevanlinna-first-main-theorem
  - def-countable-choice
  - lem-nevanlinna-ramification-counting-identity
  - thm-countable-union-of-countable
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Goldberg and I. Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §§1-2, printed pp. 87-98; Ch. 4 §3, printed pp. 121-122: deficiencies, ramification indices and the defect relation"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5-6.1, printed pp. 35-43: deficiency and ramification defect relations"
verification:
  audited: 2026-10-02
---

## Statement

Assume Countable Choice. For every nonconstant meromorphic function $f$ on
$\mathbb C$,
$$\sum_{a\in\widehat{\mathbb C}}\bigl(\delta(a,f)+\varepsilon(a,f)\bigr)\le2, \qquad\text{and hence}\qquad \sum_{a\in\widehat{\mathbb C}}\delta(a,f)\le2.$$
Also $\delta(a,f)+\varepsilon(a,f)\le1$ for every $a\in\widehat{\mathbb C}$,
and the set of targets at which either index is positive is at most countable.
Sums over $\widehat{\mathbb C}$ mean suprema of finite subsums.

## Facts & Assumptions

**Given:** A nonconstant meromorphic function $f$ on $\mathbb C$; Countable Choice is assumed ([[def-countable-choice]]).

[F1] Deficiency and ramification index: for every sphere target $a$, $\delta(a,f)=\liminf_{r\to\infty}\frac{m(r,a;f)}{T(r,f)}=1-\limsup_{r\to\infty}\frac{N(r,a;f)}{T(r,f)}$ and $\varepsilon(a,f)=\liminf_{r\to\infty}\frac{N_1(r,a;f)}{T(r,f)}$, both in $[0,1]$; the target sum is the supremum of finite subsums, and the identities rest on the First Main Theorem $m(r,a;f)+N(r,a;f)=T(r,f)+C(f,a)$ with $C(f,a)$ independent of $r$ ([[def-nevanlinna-deficiency-and-ramification-index]], [[thm-nevanlinna-first-main-theorem]]).

[F2] Second Main Theorem: for every finite set $A$ of distinct sphere targets with $|A|\ge3$, $\sum_{a\in A}m(r,a;f)+N_1(r,f)\le2T(r,f)+S(r,f)$ outside a set of finite linear measure, where $S(r,f)\le C(\log^+T(r,f)+\log r)$ off that set; when $f$ is rational the error is $O_f(1)$ at every sufficiently large radius. Moreover for every finite set $A$ of distinct sphere targets and $r\ge1$, $\sum_{a\in A}N_1(r,a;f)\le N_1(r,f)$ ([[thm-nevanlinna-second-main-theorem]], [[lem-nevanlinna-ramification-counting-identity]]).

[F3] Growth separation input: $T(r,f)\to\infty$, with $T(r,f)/\log r\to\infty$ when $f$ is transcendental and $T(r,f)=d\log r+O(1)$ when $f$ is rational of degree $d\ge1$ ([[lem-nevanlinna-growth-dominates-logarithm]]).

[F4] Countable unions: under Countable Choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## Proof

**Proof technique:** bound each combined index by one, apply the ramified Second Main Theorem to finite target sets, divide by the characteristic and pass to the lower limit using growth separation, take the supremum over finite target sets, and finish the countability clause with a threshold union.

1.1 (Per-target bound) Since $N_1(r,a;f)\le N(r,a;f)$ and $T(r,f)>0$ for all large $r$, $\varepsilon(a,f)=\liminf_r\frac{N_1(r,a;f)}{T(r,f)}\le\liminf_r\frac{N(r,a;f)}{T(r,f)}\le\limsup_r\frac{N(r,a;f)}{T(r,f)}=1-\delta(a,f)$, so $\delta(a,f)+\varepsilon(a,f)\le1$, and both indices are nonnegative by [F1]. [F1, algebra]

1.2 (Second Main Theorem bound for finite target sets) Let $A$ be a finite set of distinct sphere targets with $|A|\ge3$. By [F2], $\sum_{a\in A}m(r,a;f)+N_1(r,f)\le2T(r,f)+S(r,f)$ outside a set $E$ of finite linear measure; since $\sum_{a\in A}N_1(r,a;f)\le N_1(r,f)$ by [F2], also $\sum_{a\in A}\bigl(m(r,a;f)+N_1(r,a;f)\bigr)\le2T(r,f)+S(r,f)$ outside $E$. [F2, algebra]

2.1 (Target sets of at most two points) If $|A|\le2$ then $\sum_{a\in A}(\delta(a,f)+\varepsilon(a,f))\le|A|\le2$ by step 1.1, so the asserted bound holds for every finite target set of at most two points. [step 1.1, algebra]

2.2 (Growth separation) If $f$ is transcendental, [F3] gives $T(r,f)/\log r\to\infty$ and $T(r,f)\to\infty$, so the general error bound in [F2] satisfies $S(r,f)/T(r,f)\to0$ off $E$. If $f$ is rational of degree $d\ge1$, [F2] supplies the stronger error $O_f(1)$ at every large radius, while [F3] gives $T(r,f)=d\log r+O(1)\to\infty$; thus this error divided by $T$ also tends to zero. [F1, F2, F3, step 1.2, algebra]

3.1 (Defect bound for finite target sets) For $|A|\ge3$, dividing step 1.2 by $T(r,f)$ and using step 2.2 gives $\sum_{a\in A}\bigl(\frac{m(r,a;f)}{T(r,f)}+\frac{N_1(r,a;f)}{T(r,f)}\bigr)\le2+o(1)$ along $r\notin E$; since $E$ has finite measure its complement is unbounded, so the lower limit of the left side is at most $2$. As a finite sum of lower limits is at most the lower limit of the sum, $\sum_{a\in A}(\delta(a,f)+\varepsilon(a,f))\le2$; with step 2.1 this covers every finite target set $A$. [step 2.1, step 1.2, step 2.2, algebra]

4.1 (Supremum over finite sets) By [F1] the total deficiency sum is the supremum of the finite subsums, each of which is at most $2$ by step 3.1, so $\sum_{a}(\delta(a,f)+\varepsilon(a,f))\le2$; since $\delta\ge0$, also $\sum_a\delta(a,f)\le2$. [F1, step 3.1, algebra]

5.1 (The positive set is at most countable) For every integer $k\ge1$ put $F_k=\{a\in\widehat{\mathbb C}:\delta(a,f)+\varepsilon(a,f)>1/k\}$; were $|F_k|\ge2k+1$, then the finite subsum over any $2k+1$ points of $F_k$ would exceed $\frac{2k+1}{k}=2+\frac1k>2$, contradicting step 4.1, so each $F_k$ is finite and hence at most countable. Since $\delta+\varepsilon\ge0$, the set where either index is positive equals $\bigcup_{k\ge1}F_k$, a countable union of at most countable sets, which is at most countable by [F4]. [F4, step 4.1, algebra] ∎
