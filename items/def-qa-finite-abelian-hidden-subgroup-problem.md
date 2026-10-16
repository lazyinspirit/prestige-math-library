---
id: def-qa-finite-abelian-hidden-subgroup-problem
kind: definition
title: Finite abelian hidden-subgroup promise and output encoding
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-qa-finite-abelian-character-dual
  - def-qa-finite-abelian-subgroup-annihilator
  - lem-qa-cyclic-group-has-n-characters
  - lem-qa-character-dual-of-a-product-factors
  - def-qc-coherent-function-oracle
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

An input group is given in explicit invariant-factor coordinates
$$G=\prod_{i=1}^r\mathbb Z/n_i\mathbb Z,\qquad 2\le n_1\mid n_2\mid\cdots\mid n_r,$$
with componentwise addition and $N:=|G|=\prod_i n_i$. The empty product has $G=\{0\}$ and $N=1$. No procedure for finding these coordinates from a black-box group is included. A character label is a tuple $\mathbf k=(k_1,\ldots,k_r)$ with $k_i\in\mathbb Z/n_i\mathbb Z$, representing
$$\chi_{\mathbf k}(\mathbf g):=\prod_{i=1}^r\exp(2\pi i k_i g_i/n_i).$$
The cyclic-character and product-character suppliers identify these labels with all of $\widehat G$.

The hiding input is a finite set $S$, an injective encoding $\eta:S\to\{0,1\}^m$, and a total function $F:G\to S$ for which there is an unknown subgroup $H\le G$ such that
$$F(\mathbf g)=F(\mathbf g')\quad\Longleftrightarrow\quad \mathbf g-\mathbf g'\in H.$$
This is the hiding promise. Put $b_i:=\lceil\log_2 n_i\rceil$ and $b:=\sum_i b_i$. Encode $g_i\in\mathbb Z/n_i\mathbb Z$ by the $b_i$-bit big-endian binary word of its least residue in $\{0,\ldots,n_i-1\}$, and encode $\mathbf g$ by concatenating these words in coordinate order; denote this injective code by $\operatorname{code}_G(\mathbf g)$. This uses the first-wire-most-significant-bit convention of [[def-qc-ordered-bitstring-encoding]]. Use the same coordinate widths and convention to encode character labels $\mathbf k$ as $\operatorname{code}_{\widehat G}(\mathbf k)$.

The hiding input also supplies a total Boolean function $\widetilde F:\{0,1\}^b\to\{0,1\}^m$ agreeing with $\eta\circ F$ on valid group codes; its values on invalid bit strings are part of the declared extension. The coherent XOR oracle acts by
$$O_{\widetilde F}|x,y\rangle=|x,y\oplus\widetilde F(x)\rangle$$
on all ordered input and target bit-string basis states. In particular, on valid codes it adds $\eta(F(\mathbf g))$ to the target. A named oracle call is charged as one query; a Boolean-circuit implementation is charged for its reversible gates. The model makes no claim that an arbitrary function has an efficient circuit.

The recovery algorithm outputs a finite list of character labels $\mathbf k^{(1)},\ldots,\mathbf k^{(M)}$. It denotes the constraint set
$$K:=\{\mathbf g\in G:\chi_{\mathbf k^{(j)}}(\mathbf g)=1\text{ for every }1\le j\le M\}=\bigcap_{j=1}^M\ker\chi_{\mathbf k^{(j)}},$$
where $\ker\chi:=\{\mathbf g:\chi(\mathbf g)=1\}$ and the empty intersection is defined to be $G$. Success means $K=H$. The output remains this implicit common-kernel presentation; converting it to subgroup generators is outside the definition.

## Remarks

Character-coordinate labels and the exact extension of the oracle on invalid encodings are input-model data. Their existence or efficient construction is not inferred from query access.
