---
id: prop-basic-arithmetic-and-bounded-quantification-are-primitive-recursive
kind: proposition
title: "Basic arithmetic operations and bounded quantification are primitive recursive"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-primitive-recursive-function]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jeremy Avigad and Richard Zach, Recursive Functions"
      url: "https://builds.openlogicproject.org/content/computability/recursive-functions/recursive-functions.pdf"
    - title: "Klaus Sutner, Primitive Recursion"
      url: "https://www.cs.cmu.edu/~cdm/resources/00-primrec.pdf"
---

## Statement

The following total functions are primitive recursive:

- addition and multiplication on $\mathbb N$,
- predecessor $p(0)=0$, $p(n+1)=n$,
- truncated subtraction
  $m \mathbin{\overset{\scriptscriptstyle\bullet}{-}} n:=\max(m-n,0)$,
- the characteristic functions of $0$, equality, and order,
- for every primitive recursive $g:\mathbb N^{k+1}\to\mathbb N$, the bounded
  sum and bounded product
  $$ \Sigma_g(n,x):=\sum_{y\le n} g(y,x),\qquad \Pi_g(n,x):=\prod_{y\le n} g(y,x), $$
- and therefore bounded existential and universal quantifiers of
  primitive-recursive predicates.

## Facts & Assumptions

**Given:** The closure clauses in [[def-primitive-recursive-function]].

[L1] Primitive recursive functions are exactly the total functions obtained from the initial arithmetic functions by finitely many compositions and primitive recursions, by [[def-primitive-recursive-function]].

## Proof

**Proof technique:** direct.

1.1 Addition is obtained by primitive recursion from the clauses $\operatorname{add}(0,n)=n$ and $\operatorname{add}(m+1,n)=S(\operatorname{add}(m,n))$. Multiplication is then obtained by primitive recursion from $0$ and addition via $\operatorname{mul}(0,n)=0$ and $\operatorname{mul}(m+1,n)=\operatorname{add}(\operatorname{mul}(m,n),n)$. By [L1], both functions are primitive recursive. [L1, given, construct]

2.1 The predecessor function is primitive recursive from $p(0)=0$ and $p(n+1)=P_1^2(n,p(n))$. Then truncated subtraction is primitive recursive by $m \mathbin{\overset{\scriptscriptstyle\bullet}{-}} 0=m$ and $m \mathbin{\overset{\scriptscriptstyle\bullet}{-}} (n+1)=p(m \mathbin{\overset{\scriptscriptstyle\bullet}{-}} n)$. From this, the zero-test $\chi_0$ is primitive recursive via $\chi_0(0)=1$ and $\chi_0(n+1)=0$, the sign function $\operatorname{sg}(n)=1-\chi_0(n)$ is primitive recursive, equality is given by $\chi_{=}(m,n)=\chi_0((m \mathbin{\overset{\scriptscriptstyle\bullet}{-}} n)+(n \mathbin{\overset{\scriptscriptstyle\bullet}{-}} m))$, and order is given by $\chi_{\le}(m,n)=\chi_0(m \mathbin{\overset{\scriptscriptstyle\bullet}{-}} n)$. So the listed basic arithmetic and characteristic functions are primitive recursive by [L1]. [L1, step 1.1, construct]

2.2 If $g:\mathbb N^{k+1}\to\mathbb N$ is primitive recursive, then bounded sums and products are obtained by primitive recursion through $\Sigma_g(0,x)=g(0,x)$, $\Sigma_g(n+1,x)=\Sigma_g(n,x)+g(n+1,x)$, $\Pi_g(0,x)=g(0,x)$, and $\Pi_g(n+1,x)=\Pi_g(n,x)\cdot g(n+1,x)$. Hence $\Sigma_g$ and $\Pi_g$ are primitive recursive by [L1]. [L1, step 1.1, construct]

3.1 If $r(y,x)\in\{0,1\}$ is a primitive-recursive characteristic function, then $\chi_{\exists y\le n\,r(y,x)=1}(n,x)=\operatorname{sg}(\Sigma_r(n,x))$ and $\chi_{\forall y\le n\,r(y,x)=1}(n,x)=\Pi_r(n,x)$. Thus bounded existential and bounded universal quantification preserve primitive recursiveness. [step 2.1, step 2.2, algebra]

4.1 The displayed constructions establish every operation and quantifier listed in the statement. [step 1.1, step 2.1, step 3.1] ∎
