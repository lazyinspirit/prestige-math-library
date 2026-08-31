---
id: def-gnfa-state-elimination
kind: definition
title: "The GNFA state-elimination update"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-generalized-nfa, def-language-boolean-operations, def-language-concatenation-powers-and-kleene-star]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Jean Gallier and Jocelyn Quaintance, Introduction to the Theory of Computation: Some Notes for CIS511"
      url: "https://www.scribd.com/document/977881977/Tcbook-Lang"
---

## Definition

Let $G=(Q,\Sigma,s,t,\lambda)$ be a GNFA, and let
$r\in Q\setminus\{s,t\}$ be an interior state. The **state-elimination update**
removes $r$ and keeps the surviving state set
$$ Q':=Q\setminus\{r\}. $$

For surviving states $p,q\in Q'$, the new label is
$$ \lambda'(p,q):=\lambda(p,q)+\lambda(p,r)(\lambda(r,r))^*\lambda(r,q). $$

The resulting GNFA $G\setminus r$ has the same distinguished start and accept
states $s,t$, the surviving state set $Q'$, and the label function $\lambda'$.

## Remarks

- The first summand keeps the old direct $p$-to-$q$ behavior.

- The second summand records paths that enter $r$, loop there any finite number
  of times, and then leave for $q$.
