---
id: "def-cg-initial-letter-sortable-projection"
kind: "definition"
title: "The recursive initial-letter sortable projection"
status: draft
origin: pipeline
pipeline_run: "frontier-42-coxeter-32"
dependency_level: 22
deps:
  - lem-cg-weak-parabolic-projection-and-cover-joins
  - def-cg-sortable-element-skip-roots-and-cone
  - lem-cg-uniform-omega-positive-and-aligned-sortability
  - def-hh-coxeter-matrix-word-group-and-length
  - def-poset-interval-and-finiteness-conditions
  - lem-cg-coxeter-word-transport-and-form-independence
justified_by:
  - lem-cg-sortable-recursion-output-and-initial-choice-independence
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "section 6, p. 31 (the recursive definition of pi^c_down; Lemma 6.6 and Propositions 6.7-6.10)"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "section 3, p. 8 (equation (3.1) and Proposition 3.2)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 2, section 2.4 (parabolic prefixes used by the recursion)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $(W,S)$ be a Coxeter system of finite type and $c=s_1\cdots s_n$ a reduced Coxeter word. Set $\pi_c(1)=1$, also when $S=\emptyset$. For $w\ne1$, the rank is positive; choose an initial letter $s:=s_1$ and write $\langle s\rangle:=S\setminus\{s\}$; recall that $sc:=s_2\cdots s_n$ is a reduced Coxeter word for the Coxeter element $sc$ of the parabolic $W_{\langle s\rangle}$ and that $scs:=s_2\cdots s_ns_1$ is a reduced Coxeter word for the conjugate Coxeter element $scs$ of $W$ ([[lem-cg-coxeter-word-transport-and-form-independence]] (1),(3)). For $w\in W$ the **sortable projection** $\pi_c(w)$ is defined recursively by
$$\pi_c(w):=\begin{cases}1&\text{if }w=1,\\ s\cdot\pi_{scs}(sw)&\text{if }\ell(sw)<\ell(w),\\ \pi_{sc}(w_{\langle s\rangle})&\text{if }\ell(sw)>\ell(w),\end{cases}$$
where $w_{\langle s\rangle}$ is the $W_{\langle s\rangle}$-prefix of $w$ in the length-additive decomposition of [[lem-cg-weak-parabolic-projection-and-cover-joins]] (the maximal $W_{\langle s\rangle}$-factor). The recursion is well founded by the lexicographic measure (rank of the ambient parabolic, length of the current element): in the second branch the length strictly decreases, in the third the rank strictly decreases. That the recursion is independent of the initial-letter choices at every step, that $\pi_c(w)$ is always $c$-sortable, and that it is the greatest $c$-sortable element below $w$, are not part of this definition; they are proved in [[lem-cg-sortable-recursion-output-and-initial-choice-independence]] and [[lem-cg-sortable-cone-criterion-and-projection-monotonicity]]. Nothing about monotonicity, idempotence or fibers is asserted here. No Choice is used.
