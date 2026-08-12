---
id: thm-conservative-path-independent-and-zero-loop-equivalence
kind: theorem
title: "Conservative, path-independent, and zero-closed-loop conditions are equivalent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-conservative-fields-are-path-independent-and-have-zero-circulation, thm-path-independence-iff-zero-closed-loop-integrals, thm-path-independent-field-has-a-potential-by-line-integrals]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 9.3.3"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb R^n$ be nonempty, open, and piecewise-$C^1$ path-connected, and let $F:U\to\mathbb R^n$ be continuous. The following are equivalent:

1. $F$ is conservative;
2. $F$ is path-independent;
3. every closed piecewise-$C^1$ path $\gamma$ in $U$ satisfies $\int_\gamma F\cdot d\mathbf r=0$.

When condition 2 holds, choosing $a\in U$ gives the normalized potential $\phi(x)=\int_a^xF\cdot d\mathbf r$ with $\phi(a)=0$.

## Facts & Assumptions

**Given:** The domain and field in the Statement.

[L1] Every conservative field is path-independent and has zero integral around every closed path ([[cor-conservative-fields-are-path-independent-and-have-zero-circulation]]).

[L2] On a piecewise-$C^1$ path-connected open set, path independence is equivalent to zero integral around every closed piecewise-$C^1$ path ([[thm-path-independence-iff-zero-closed-loop-integrals]]).

[L3] A continuous path-independent field on such a nonempty domain has the normalized line-integral potential stated above ([[thm-path-independent-field-has-a-potential-by-line-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Condition 1 implies condition 2, and also condition 3, by [L1]. [given, L1]

1.2 Conditions 2 and 3 imply each other by [L2]. [given, L2]

1.3 Condition 2 implies condition 1 by [L3], which also supplies the displayed normalized potential. [given, L3]

2.1 Thus each of the three conditions implies the other two, proving their equivalence and the final assertion. [step 1.1, step 1.2, step 1.3] ∎
