---
id: lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants
kind: lemma
title: "Weyl-invariant polynomials on the Cartan extend to invariant polynomials on $\\mathfrak g$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-root-reflections-and-the-weyl-group-action, def-fundamental-weights-for-a-chosen-simple-root-system, thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights, lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
    - title: "Lin Chen, Geometric Representation Theory I, Lecture 5"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture5.pdf"
pipeline_run: null
---

## Statement

Every Weyl-invariant polynomial on a Cartan subalgebra extends uniquely to an adjoint-invariant polynomial on $\mathfrak g$.

## Facts & Assumptions

**Given:** A Weyl-invariant polynomial $p\in S(\mathfrak h)^W$.

[F1] For a finite group in characteristic $0$, averaging over the group is a projection from a representation onto its invariant subspace.

[F2] For each dominant integral weight $\lambda$, the weights of $L(\lambda)$ give a triangular character expansion in Weyl-orbit sums, with leading orbit $W\lambda$ having coefficient $1$.

## Proof

**Proof technique:** direct.

1.1 Fix a degree $n$. For each dominant integral weight $\lambda$, let $L(\lambda)$ be supplied by [[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]] and define $$F_{\lambda,n}(x):=\operatorname{tr}_{L(\lambda)}(\rho_\lambda(x)^n).$$ Conjugation of $\rho_\lambda(x)$ does not change its trace, so $F_{\lambda,n}\in S^n(\mathfrak g)^{\mathfrak g}$. On $h\in\mathfrak h$ its value is the sum of $\mu(h)^n$ over the weights $\mu$ of $L(\lambda)$, with multiplicity. [given, construct, algebra]

2.1 Let $$M_{\lambda,n}(h):=\sum_{\mu\in W\lambda}\mu(h)^n.$$ The unitriangular orbit-sum expansion [F2] and step 1.1 imply, by induction in the dominance order, that every $M_{\lambda,n}$ is a linear combination of restrictions of the $F_{\nu,n}$. [F2, step 1.1, algebra]

3.1 The pure powers $\ell^n$ with $\ell\in\mathfrak h^*$ span $S^n(\mathfrak h)$ by polarization. Dominant integral weights are Zariski dense in $\mathfrak h^*$, so their powers still span. Applying the averaging projection [F1] shows that the orbit averages $M_{\lambda,n}/|W\lambda|$ span $S^n(\mathfrak h)^W$. Together with step 2.1, this proves that every homogeneous Weyl invariant of degree $n$ is the restriction of an element of $S^n(\mathfrak g)^{\mathfrak g}$. [F1, step 2.1, algebra]

4.1 Apply step 3.1 to every homogeneous component of $p$ and sum the resulting invariant extensions to obtain $P\in S(\mathfrak g)^{\mathfrak g}$ with $P|_{\mathfrak h}=p$. If $P'$ is another extension, then $P-P'$ restricts to zero, so [[lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction]] gives $P=P'$. Thus the extension is unique. [step 3.1] ∎
