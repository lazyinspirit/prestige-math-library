---
id: def-multiset
kind: definition
title: "Finite multisets as finitely supported multiplicity functions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§§2 and 4.1, neighborhood multisets and the bounded-size multiset encoding results."
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§2, Notation and Background, multisets of neighbor colors."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §§5.3.3–5.3.4, color multisets, sum aggregation, and multiplicity."
verification:
  precheck: n/a
---

## Definition

Let $X$ be a set. A finite multiset on $X$ is a function $m:X\to\mathbb N_0$ with finite support $\operatorname{supp}(m)=\{x\in X:m(x)>0\}$. The multiplicity $m(x)$ is the number of occurrences of $x$, and the size is $|m|=\sum_{x\in\operatorname{supp}(m)}m(x)$. Two finite multisets are equal exactly when their multiplicity functions agree at every element of $X$. We write $\{\!\{x_1,\ldots,x_n\}\!\}$ for the multiset whose multiplicity at $x$ is the number of indices $i$ with $x_i=x$; $n=0$ denotes the empty multiset.

## Definition references

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §§2 and 4.1](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Morris et al., “Weisfeiler and Leman Go Neural,” §2](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §§5.3.3–5.3.4](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)
