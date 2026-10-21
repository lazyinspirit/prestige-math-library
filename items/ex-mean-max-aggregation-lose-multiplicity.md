---
id: ex-mean-max-aggregation-lose-multiplicity
kind: example
title: "Mean and max aggregation can lose multiset multiplicity"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-multiset, def-message-passing-gnn]
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
      locator: "§5.2 and Appendices G–H, mean and max pooling fail to distinguish multisets with different multiplicities."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.4, Remark 5.5 on mean pooling and multiplicity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Example

Let $d\ge1$ and $x\in\mathbb R^d$. For a nonempty finite multiset $S$ of vectors, define its mean as $|S|^{-1}\sum_{y\in S}y$ and its coordinatewise maximum to have $j$-th coordinate $\max_{y\in S}y_j$. The distinct multisets $S_1=\{\!\{x\}\!\}$ and $S_2=\{\!\{x,x\}\!\}$ have the same mean $x$ and the same coordinatewise maximum $x$. Thus both mean aggregation and coordinatewise max aggregation can identify different multisets when multiplicities differ.

## Example references

[[def-multiset|finite multisets and multiplicities]]

[[def-message-passing-gnn|neighbor aggregation as a function on multisets]]

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §5.2 and Appendices G–H](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.3.4](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)

## Facts & Assumptions

**Given:** $d\ge1$, a vector $x\in\mathbb R^d$, and the two finite multisets in the Example. Verify their inequality and aggregator outputs.

[F1] [[def-multiset]]: Multiset equality requires equality of each element's multiplicity, and size is total multiplicity.

## Verification

1.1 The multiplicity of $x$ is $1$ in $S_1$ and $2$ in $S_2$, so $S_1\ne S_2$ by [F1]. [given, F1, algebra]

2.1 The sums are $x$ and $2x$, with sizes $1$ and $2$, so both means equal $x$. In each coordinate, the maximum of one copy of $x_j$ and the maximum of two equal copies of $x_j$ are both $x_j$. Thus both aggregators return the same value on the distinct multisets. [given, step 1.1, algebra] ∎
