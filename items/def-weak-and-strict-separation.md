---
id: def-weak-and-strict-separation
kind: definition
title: Weak, strict, and strong separation
status: draft
origin: pipeline
deps: [def-dual-space-of-a-normed-space, rem-real-and-complex-normed-space-convention]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Theo Buehler and Dietmar Salamon, Functional Analysis, §2.3.3
      url: https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf
---

## Definition

For nonempty $A,B\subseteq X$, a nonzero $f\in X^*$ **weakly separates** $A$
and $B$ if $\sup_{a\in A}\operatorname{Re}f(a)\le\inf_{b\in B}\operatorname{Re}f(b)$.
It **strictly separates** them if $\operatorname{Re}f(a)<\operatorname{Re}f(b)$
for every $a\in A,b\in B$, and **strongly separates** them if
there are $\alpha<\beta$ with $\operatorname{Re}f(a)\le\alpha<\beta\le
\operatorname{Re}f(b)$ for all $a,b$.  Over $\mathbb R$, $\operatorname{Re}f=f$;
over $\mathbb C$ these real parts are essential, since complex values are not ordered.
