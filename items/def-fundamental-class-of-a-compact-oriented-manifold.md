---
id: "def-fundamental-class-of-a-compact-oriented-manifold"
kind: "definition"
title: "Fundamental class of a compact oriented manifold"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-compatible-local-orientation-classes-exist-over-compact-subsets","thm-excision-for-singular-homology"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem 3.26 and Lemma 3.27
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $M$ be a compact boundaryless $n$-manifold with a specified $R$-orientation $\mu$, where $R$ is a commutative unital ring. Its **fundamental class** is
$$[M]=[M]_M\in H_n(M,M\setminus M;R)=H_n(M;R),$$
using [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]] with the compact support $K=M$. The final equality holds at the chain-complex level: $C_*(\varnothing;R)=0$, so quotienting by it leaves $C_*(M;R)$. The cited lemma proves existence and uniqueness of this class with point restriction $\mu_x$ at every $x\in M$. Thus the notation denotes a class determined by the supplied orientation, not an arbitrary generator chosen afterward.

The same lemma gives finitely many open-and-closed components $M_1,\ldots,M_k$ and the restriction isomorphism
$$H_n(M;R)\longrightarrow\bigoplus_{j=1}^k H_n(M,M\setminus M_j;R).$$
The summand on the right identifies with $H_n(M_j;R)$: apply [[thm-excision-for-singular-homology]] to remove the closed set $M\setminus M_j$, which is the entire open relative subspace. The resulting pair is $(M_j,\varnothing)$. Under this identification $[M]$ corresponds to the finite tuple of the component fundamental classes.

If the orientation is negated on one component, its new fundamental-class summand is the negative of its old one. Indeed restriction is linear, so the negative class restricts to $-\mu_x$ at all points of that component, and uniqueness in the compact-set lemma identifies it with the new class. The other component summands are unchanged. In characteristic two this negation can leave the orientation and class unchanged; no distinction between $\mu$ and $-\mu$ is imposed when they are equal.

For empty $M$ the fundamental class is $0$ in the zero homology group, with an empty direct sum. For $R=0$ the unique orientation gives the zero class. A compact zero-manifold has finitely many singleton components, and its fundamental zero-cycle has at each point the coefficient prescribed by its local module generator. The definition requires a supplied orientation and uses no AC or simultaneous choice of one orientation per component.
