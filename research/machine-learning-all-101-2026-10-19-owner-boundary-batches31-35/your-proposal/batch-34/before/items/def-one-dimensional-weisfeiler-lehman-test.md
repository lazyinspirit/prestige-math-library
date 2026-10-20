---
id: def-one-dimensional-weisfeiler-lehman-test
kind: definition
title: "Finite-round one-dimensional Weisfeiler–Leman color refinement"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-finite-labeled-graph, def-multiset]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§2, Weisfeiler–Lehman color-refinement description."
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§2, Weisfeiler–Leman Algorithm, Eq. (1)."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.3, one-dimensional Weisfeiler–Leman test."
verification:
  precheck: n/a
---

## Definition

Let $G=(V,E,\ell)$ and $H=(W,F,m)$ be finite vertex-labeled simple undirected graphs with labels in a common set $\Sigma$. Define color sets recursively by $C_0=\Sigma$ and $C_{t+1}=C_t\times\mathsf M_{\mathrm{fin}}(C_t)$ for each integer $t\ge0$. Set $c_0^G(v)=\ell(v)$ and $c_0^H(w)=m(w)$; for $t\ge0$, update

$$ c_{t+1}^G(v)=\left(c_t^G(v),\{\!\{c_t^G(u):u\in N_G(v)\}\!\}\right),\qquad c_{t+1}^H(w)=\left(c_t^H(w),\{\!\{c_t^H(z):z\in N_H(w)\}\!\}\right). $$

The graph color multiset at round $t$ is $C_t(G)=\{\!\{c_t^G(v):v\in V\}\!\}$, and likewise for $H$. One-dimensional Weisfeiler–Leman color refinement distinguishes $G$ and $H$ at round $t$ when $C_t(G)\ne C_t(H)$; it distinguishes the pair when this holds for some finite $t$. If no finite round distinguishes them, they are one-WL-indistinguishable. In the unlabeled case, take $\Sigma$ to be a singleton. The tuple update is the canonical collision-free color encoding.

## Definition references

[[def-finite-labeled-graph|finite vertex-labeled simple undirected graphs and neighborhoods]]

[[def-multiset|finite multisets and color multiplicities]]

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §2](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Morris et al., “Weisfeiler and Leman Go Neural,” §2, Eq. (1)](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.3.3](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)
