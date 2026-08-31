---
id: fs-state-elimination-has-a-unique-output-expression
kind: false-statement
title: "FALSE: state elimination has a unique output expression"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-gnfa-state-elimination, thm-dfa-to-regular-expression]
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
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Statement

**False claim:** once a GNFA is fixed, state elimination always produces one
unique final regular expression.

## Facts & Assumptions

**Given:** The GNFA with start state $s$, accept state $t$, interior states
$p,q$, labels $\lambda(s,p)=a$, $\lambda(p,t)=b$, $\lambda(s,q)=a$,
$\lambda(q,t)=c$, and every other label equal to $\varnothing$.

[A1] The statement refuted is: once a GNFA is fixed, state elimination always produces one unique final regular expression.

[L1] By [[def-gnfa-state-elimination]], eliminating a state $r$ replaces each surviving label by $\lambda(p,q)+\lambda(p,r)(\lambda(r,r))^*\lambda(r,q)$.

## Refutation

**Proof technique:** direct.

1.1 Eliminate $p$ first. Applying [L1] without any algebraic simplification, and then eliminating $q$, gives the final label $(\varnothing+a\varnothing^*b)+(a+a\varnothing^*\varnothing)(\varnothing+\varnothing\varnothing^*\varnothing)^*(c+\varnothing\varnothing^*b)$. [L1, given]

1.2 Eliminating $q$ first and then $p$ instead gives $(\varnothing+a\varnothing^*c)+(a+a\varnothing^*\varnothing)(\varnothing+\varnothing\varnothing^*\varnothing)^*(b+\varnothing\varnothing^*c)$. [L1, given]

2.1 These are different formal expression trees: already the first displayed outer summand ends in $b$ in step 1.1 and in $c$ in step 1.2. Thus [A1] is false even without imposing any simplification rules. [A1, step 1.1, step 1.2] ∎
