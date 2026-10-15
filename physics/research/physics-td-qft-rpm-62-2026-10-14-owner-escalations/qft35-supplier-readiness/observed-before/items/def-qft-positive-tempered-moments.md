---
id: def-qft-positive-tempered-moments
kind: definition
title: Positive tempered moments on the tensor test algebra
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-schwartz-space-and-its-seminorms
  - def-schwartz-topology-and-convergence
  - def-tempered-distribution
dependency_roles:
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-schwartz-topology-and-convergence: mathematical-premise
  def-tempered-distribution: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jens Mund, General Aspects of Relativistic Quantum Field Theory, lecture notes, DF-UFJF (2012), §2.1, Theorem 2.6 and proof"
      url: https://www.ufjf.br/fisica/files/2022/03/AQFT.pdf
      locator: "PDF pp. 15–17: the tensor test algebra, positive Wightman functional, and its GNS construction. The notes identify themselves as incomplete course notes; this item uses only the explicitly stated algebraic definitions."
    - title: "Konrad Schmüdgen, An Invitation to Unbounded Representations of *-Algebras on Hilbert Space, Graduate Texts in Mathematics 285, Springer Nature (2020)"
      url: https://dokumen.pub/an-invitation-to-unbounded-representations-of-algebras-on-hilbert-space-1nbsped-3030463656-9783030463656.html
      locator: "§2.4, printed pp. 20–21, Definition 2.32: positive functionals on unital *-algebras."
    - title: "Christopher J. Fewster and Kasia Rejzner, Algebraic Quantum Field Theory—an introduction, arXiv:1904.04051v2 (2019)"
      url: https://arxiv.org/pdf/1904.04051
      locator: "§2.3, printed pp. 7–9: algebraic states and the GNS construction."
---

## Definition

Use the Schwartz spaces and their seminorm topologies of
[[def-schwartz-space-and-its-seminorms]] and
[[def-schwartz-topology-and-convergence]]. Put
$S:=\mathcal S(\mathbb R^4;\mathbb C)$ and
$S_n:=\mathcal S(\mathbb R^{4n};\mathbb C)$ for $n\ge1$, and set
$S_0:=\mathbb C$. A tempered distribution in $S_n'$ means a continuous
complex-linear functional on $S_n$
as in [[def-tempered-distribution]]; its pairing with a test is bilinear.

For complex vector spaces $S$, let $S^{\otimes_{\rm alg} n}$ be the algebraic
tensor product, characterized by multilinear maps out of $S^n$, with
$S^{\otimes_{\rm alg}0}:=\mathbb C1$. Define the algebraic tensor test algebra
$$T(S):=\bigoplus_{n\ge0}^{\rm alg}S^{\otimes_{\rm alg}n},$$
where the direct sum consists of finite-support sequences. Its multiplication
is concatenation of tensor factors, extended bilinearly, and its unit is $1$
in degree zero. Its conjugate-linear involution is specified on elementary
tensors by
$$(f_1\otimes\cdots\otimes f_n)^*:=\overline{f_n}\otimes\cdots\otimes\overline{f_1},\qquad (c1)^*=\overline c1.$$

For $f_j\in S$, the elementary tensor is evaluated against a distribution by
the test function
$$J_n(f_1\otimes\cdots\otimes f_n)(x_1,\ldots,x_n):=\prod_{j=1}^n f_j(x_j).$$
This is in $S_n$: for multi-indices split into four-coordinate blocks
$(\alpha_j,\beta_j)$, its Schwartz seminorm is
$$p_{(\alpha_j)_j,(\beta_j)_j}(J_n(f_1\otimes\cdots\otimes f_n))=\prod_{j=1}^n p_{\alpha_j\beta_j}(f_j).$$
Thus $J_n$ is multilinear and continuous, and the displayed formula extends
linearly to the algebraic tensor product.
In degree zero set $J_0(c1):=c$.

By these definitions concatenation is associative with the degree-zero unit,
and reversal together with complex conjugation is an involution satisfying
$(ab)^*=b^*a^*$; thus $T(S)$ is a unital complex star algebra.

A **positive tempered moment family** is a sequence consisting of $W_0=1$
and $W_n\in S_n'$ for each $n\ge1$ such that the multilinear maps
$$f_1,\ldots,f_n\longmapsto\langle W_n,J_n(f_1\otimes\cdots\otimes f_n)\rangle$$
extend, degree by degree and then over finite sums, to a complex-linear
functional $\omega:T(S)\to\mathbb C$ satisfying
$$\omega(1)=1,\qquad \omega(a^*a)\in[0,\infty)\quad(a\in T(S)).$$
Equivalently, the family supplies an actually positive normalized functional
on this algebra. Positivity is a hypothesis on the distributions; formal
coefficient families do not qualify merely because they obey algebraic
identities. No topology on $T(S)$, norm completion, C*-algebra, or existence
claim for an interacting field is part of this definition.
