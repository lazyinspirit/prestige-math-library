---
id: ex-gin-irrational-self-weight-encoding
kind: example
title: "An irrational GIN self-weight separates two bounded color neighborhoods"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-multiset
  - lem-countable-bounded-multiset-sum-encoding
  - def-graph-isomorphism-network
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§4.1, Eq. (4.1), Corollary 6, and its complete proof in Appendix E."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.4, GIN sum update and injective multiset construction."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let the countable feature set be $\mathcal X=\{r,b\}$ with code $\phi(r)=1$, $\phi(b)=2$, the base-$2$ code $\phi(x)=2^{\nu(x)}$ for $\nu(r)=0,\nu(b)=1$. Set the GIN self-weight parameter to $\varepsilon=\sqrt2$. On a center feature $c$ and a one-neighbor multiset $S$, the scalar preactivation is $J_\varepsilon(c,S)=(1+\varepsilon)\phi(c)+\sum_{x\in S}\phi(x)$. For the distinct center/neighbor pairs $(r,\{\!\{b\}\!\})$ and $(b,\{\!\{r\}\!\})$, the preactivations are $3+\sqrt2$ and $3+2\sqrt2$, respectively, so this GIN sum code separates the pair under the size bound $|S|\le1$.

## Example references

[[def-multiset|finite multisets and their sizes]]

[[def-graph-isomorphism-network|the GIN sum preactivation]]

[[lem-countable-bounded-multiset-sum-encoding|the countable bounded-multiset encoding theorem]]

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §4.1 and Corollary 6](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.3.4](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)

## Facts & Assumptions

**Given:** The two feature values, code, and center/neighbor pairs in the Example. Verify the irrationality condition and the two preactivation values.

[F1] [[def-multiset]]: A multiset records each feature with its number of occurrences.

[F2] [[def-graph-isomorphism-network]]: A GIN preactivation is $(1+\varepsilon)h_v+\sum_{u\in N(v)}h_u$ before the layer MLP.

[F3] [[lem-countable-bounded-multiset-sum-encoding]]: For countable features and bounded neighbor-multiset size, an irrational self-weight makes the coded center/multiset sum injective.

## Verification

1.1 The number $\sqrt2$ is irrational: if $\sqrt2=p/q$ for coprime positive integers $p,q$, then $p^2=2q^2$ makes $p$ even, say $p=2s$, and substitution gives $q^2=2s^2$, so $q$ is even as well, contradicting coprimality. [given, algebra, contradiction]

2.1 By [F2], $J_{\sqrt2}(r,\{\!\{b\}\!\})=(1+\sqrt2)\cdot1+2=3+\sqrt2$, while $J_{\sqrt2}(b,\{\!\{r\}\!\})=(1+\sqrt2)\cdot2+1=3+2\sqrt2$. Their difference is $\sqrt2\ne0$, so the distinct pairs have distinct preactivations. [given, F1, F2, step 1.1, algebra]

3.1 The feature set has two elements and both neighbor multisets have size one. Thus the example meets the countability and bound hypotheses of [F3], with irrational $\varepsilon$ established in step 1.1; the computed separation is a concrete instance of that injective coding condition. [given, F1, F3, step 1.1, step 2.1, algebra] ∎
