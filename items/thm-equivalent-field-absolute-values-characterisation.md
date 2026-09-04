---
id: thm-equivalent-field-absolute-values-characterisation
kind: theorem
title: "Two nontrivial absolute values induce the same topology exactly when one is a positive power of the other"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-multiplicative-absolute-value-on-a-field, def-equivalent-field-absolute-values, def-natural-logarithm]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Proposition 7.1"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Keith Conrad, Ostrowski's Theorem for Q, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/ostrowskiq.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, and let $|\cdot|_1$ and $|\cdot|_2$ be nontrivial absolute
values on $F$. Then they induce the same topology on $F$ if and only if they
are equivalent in the sense of [[def-equivalent-field-absolute-values]].

## Facts & Assumptions

**Given:** A field $F$ and nontrivial absolute values $|\cdot|_1$ and
$|\cdot|_2$ on $F$.

[L1] Absolute values are multiplicative and have their open unit balls
available, and equivalence means equality up to a positive power
([[def-multiplicative-absolute-value-on-a-field]],
[[def-equivalent-field-absolute-values]]).

## Proof

**Proof technique:** direct.

1.1 If $|x|_2 = |x|_1^c$ for some $c > 0$, then $t \mapsto t^c$ is increasing on $\mathbb R_{>0}$, so the conditions $|x-a|_1 < r$ and $|x-a|_2 < r^c$ define the same neighborhoods of every point $a$. Hence the two absolute values induce the same topology. [L1, given, algebra]

1.2 Assume conversely that the two topologies agree. Then $$|x|_1 < 1 \iff x^n \to 0 \text{ in } |\cdot|_1 \iff x^n \to 0 \text{ in } |\cdot|_2 \iff |x|_2 < 1,$$ and the same argument with $x^{-1}$ gives $|x|_1 > 1 \iff |x|_2 > 1$ for every nonzero $x$. [L1, given, algebra]

2.1 Choose $a \in F^\times$ with $|a|_1 > 1$; then step 1.2 gives $|a|_2 > 1$. Set $$c := \frac{\log |a|_2}{\log |a|_1} > 0.$$ Fix $x \in F^\times$. If $m/n < \log|x|_1 / \log|a|_1$, then $|x|_1^n < |a|_1^m$, so $|x^n a^{-m}|_1 < 1$ and therefore $|x^n a^{-m}|_2 < 1$ by step 1.2. This gives $n \log|x|_2 < m \log|a|_2$. Reversing the inequality yields the opposite bound. Rational approximation therefore forces $$\frac{\log |x|_2}{\log |a|_2} = \frac{\log |x|_1}{\log |a|_1},$$ so $|x|_2 = |x|_1^c$. [step 1.2, given, algebra]

3.1 Step 1.1 proves one direction and step 2.1 proves the other, so the two topologies agree exactly when the absolute values are equivalent. [step 1.1, step 2.1] ∎
