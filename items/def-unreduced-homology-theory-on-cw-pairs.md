---
id: "def-unreduced-homology-theory-on-cw-pairs"
kind: "definition"
title: "Unreduced homology theory on cw pairs"
deps: ["def-skeleta-cw-subcomplex-and-relative-cw-complex"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Miller, Algebraic Topology I lecture notes, Definition 11.1, printed pp.25–26"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/64c56d8bcc2967c1d289a61c959f3095_MIT18_905F16_lec11.pdf"
      locator: "Definition 11.1, printed pp.25–26"
    - title: "May, A Concise Course in Algebraic Topology, 14§4, pp.110–111, CW-pair formulation"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "14§4, pp.110–111, CW-pair formulation"
status: "draft"
origin: "pipeline"
---

## Definition

A **CW pair** is $(X,A)$ with $A$ a CW subcomplex of $X$, as in [[def-skeleta-cw-subcomplex-and-relative-cw-complex]]. Morphisms are all continuous maps of pairs, not just cellular maps. An **ordinary unreduced homology theory** assigns covariant functors $h_n$ from CW pairs to abelian groups, for every $n\in\mathbb Z$, and natural homomorphisms $\partial:h_n(X,A)\to h_{n-1}(A)$, where $h_n(X)=h_n(X,\varnothing)$, satisfying:

- Homotopic maps of pairs induce equal homomorphisms.
- The inclusion maps and $\partial$ form an exact sequence $\cdots\to h_n(A)\to h_n(X)\to h_n(X,A)\to h_{n-1}(A)\to\cdots$.
- For CW subcomplexes $U,V$ of $X=U\cup V$, inclusion induces $h_n(U,U\cap V)\cong h_n(X,V)$.
- For a point $*$, $h_n(*)=0$ when $n\ne0$; write $G=h_0(*)$.
- For every set-indexed family of CW pairs, including the empty family, the inclusions induce $\bigoplus_\alpha h_n(X_\alpha,A_\alpha)\cong h_n(\bigsqcup_\alpha X_\alpha,\bigsqcup_\alpha A_\alpha)$.

Thus $h_n(\varnothing)=0$. No finite-dimensionality or finite-cell restriction is implicit.
