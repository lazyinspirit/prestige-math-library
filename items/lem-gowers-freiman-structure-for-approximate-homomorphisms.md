---
id: lem-gowers-freiman-structure-for-approximate-homomorphisms
kind: lemma
title: "Freiman-type structure for approximate homomorphisms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-gowers-additive-sixteen-tuple-lower-bound
  - lem-gowers-riesz-product-restriction-to-approximate-homomorphism
  - def-relative-density-in-a-finite-group
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemerédi’s theorem"
      url: "https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf"
      locator: "§9, Lemmas 9.1–9.3 and Corollary 9.4; §10, Theorem 10.13 and Corollary 10.14"
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "Chapter 11, §§11.2–11.3, discussion of Gowers’s higher-order structure arguments"
---

## Statement

Let $N\ge1$, let $G=\mathbb Z/N\mathbb Z$, and let $B\subseteq G$ have size $\beta N$, where $0<\beta\le1$. For $0<\gamma\le1$, call a map $\phi:B\to G$ $\gamma\beta^3$-additive if at least $\gamma\beta^3N^3$ ordered quadruples $(a_1,a_2,a_3,a_4)\in B^4$ satisfy both $a_1+a_2=a_3+a_4$ and $\phi(a_1)+\phi(a_2)=\phi(a_3)+\phi(a_4)$. For any subset $B'\subseteq B$ and $0<\eta<1$, call the restriction $\phi|_{B'}$ an $(1-\eta)$-homomorphism of order eight if at least a proportion $1-\eta$ of the ordered tuples $(a_1,\ldots,a_{16})\in(B')^{16}$ satisfying $a_1+\cdots+a_8=a_9+\cdots+a_{16}$ also satisfy $\phi(a_1)+\cdots+\phi(a_8)=\phi(a_9)+\cdots+\phi(a_{16})$. For every fixed $\beta,\gamma,\eta$ in these ranges, there is an integer $N_0$ such that for every $N\ge N_0$ and every $\gamma\beta^3$-additive map $\phi:B\to G$, there is a subset $B'\subseteq B$ containing at least

$$\left(\frac{\gamma^7\beta^6\eta}{4}\right)^{2^{19}}\beta^{15}N^{15}$$

ordered tuples $(a_1,\ldots,a_{16})\in(B')^{16}$ satisfying $a_1+\cdots+a_8=a_9+\cdots+a_{16}$, and at least a proportion $1-\eta$ of these tuples also satisfy $\phi(a_1)+\cdots+\phi(a_8)=\phi(a_9)+\cdots+\phi(a_{16})$.
## Statement references

[Gowers, *A new proof of Szemerédi’s theorem*, §9, Corollary 9.4](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Gowers, *A new proof of Szemerédi’s theorem*, §10, Theorem 10.13](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

[Tao and Vu, *Additive Combinatorics*, Chapter 11, §§11.2–11.3 (higher-order uniformity context; not a proof of Corollary 9.4)](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

## Facts & Assumptions

**Given:** The group, map, positive densities and error parameter in the Statement.

[F1] At least $\kappa N^3$ graph-additive quadruples imply at least $\kappa^7N^{15}$ graph-additive sixteen-tuples for every cyclic modulus ([[lem-gowers-additive-sixteen-tuple-lower-bound]]).

[F2] If $|B|=\beta N$ and the joint sixteen-tuple count is at least $\alpha\beta^{15}N^{15}$, then for every $0<\eta<1$ and all sufficiently large $N$ there is $B'\subseteq B$ with at least $(\alpha\eta/4)^{2^{19}}\beta^{15}N^{15}$ additive sixteen-tuples, of which a proportion at least $1-\eta$ obey the map equation ([[lem-gowers-riesz-product-restriction-to-approximate-homomorphism]]).

[F3] Relative density is cardinality divided by ambient cardinality ([[def-relative-density-in-a-finite-group]]).

## Proof

1.1 Set $\kappa=\gamma\beta^3$. This lies in $(0,1]$, and the assumed quadruple count is at least $\kappa N^3$. Apply [F1] to obtain at least $\gamma^7\beta^{21}N^{15}$ joint sixteen-tuples. Put $\alpha=\gamma^7\beta^6\in(0,1]$. The lower bound is exactly $\alpha\beta^{15}N^{15}$, with the original $\beta$ in [F3]. [given, F1, F3, algebra]

2.1 Apply [F2] with this $\alpha$, the original $\beta$ and $\eta$. Its threshold depends only on $\alpha,\beta,\eta$, hence only on $\gamma,\beta,\eta$. The resulting lower bound is precisely $(\gamma^7\beta^6\eta/4)^{2^{19}}\beta^{15}N^{15}$ and its proportion statement is the asserted order-eight homomorphism property. The two suppliers prove their finite character and restriction arguments for every cyclic modulus, so no prime restriction is introduced. [F2, step 1.1, algebra] ∎

## Remarks

This proves the complete stated Corollary 9.4 interface, including arbitrary cyclic moduli and its exact sixteen-tuple lower bound. It does not assert the stronger Fourier-controlled structure of Theorem 10.13, the multilinear lifting in sections12--16, or the partition transition used by the full density-increment theorem. Those are separate local proof obligations.
