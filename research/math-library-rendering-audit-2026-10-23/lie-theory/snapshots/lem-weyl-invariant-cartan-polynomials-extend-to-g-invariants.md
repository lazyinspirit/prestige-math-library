---
id: lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants
kind: lemma
title: "Weyl-invariant polynomials on the Cartan extend to invariant polynomials on $\\mathfrak g$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-the-root-set-is-a-reduced-crystallographic-root-system, def-root-reflections-and-the-weyl-group-action, def-fundamental-weights-for-a-chosen-simple-root-system, thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights, lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums, lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-weyl-invariant-cartan-polynomials-extend-to-g-invariants). No independent judge or whole-closure certification.
    delegated_by: owner
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

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra and let $\mathfrak h$ be any Cartan subalgebra in the nilpotent self-normalizing sense. Form its root system and Weyl group as in [[thm-the-root-set-is-a-reduced-crystallographic-root-system]] and [[def-root-reflections-and-the-weyl-group-action]].

Then every Weyl-invariant polynomial on $\mathfrak h$ extends uniquely to an adjoint-invariant polynomial on $\mathfrak g$.

## Facts & Assumptions

**Given:** the Axiom of Choice, an arbitrary Cartan subalgebra $\mathfrak h$ of $\mathfrak g$, and a Weyl-invariant polynomial $p\in S(\mathfrak h)^W$. Choice is used to identify the arbitrary Cartan with a maximal toral subalgebra in the root-system supplier.

[F0] Under Choice, the root system of an arbitrary Cartan is finite, reduced and crystallographic, so the Weyl action and fundamental weights used below are available ([[thm-the-root-set-is-a-reduced-crystallographic-root-system]], [[def-root-reflections-and-the-weyl-group-action]], [[def-fundamental-weights-for-a-chosen-simple-root-system]]).

[F1] For a finite group in characteristic $0$, averaging over the group is a projection from a representation onto its invariant subspace.

[F2] For each dominant integral weight $\lambda$, the weights of $L(\lambda)$ give a finite unitriangular character expansion in Weyl-orbit sums, with leading orbit $W\lambda$ having coefficient $1$, and a finite inverse expansion ([[lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums]]).

## Proof

**Proof technique:** direct.

1.1 By [F0] under the stated Choice assumption, fix a positive system for the root system of the supplied Cartan. Fix a degree $n$. For each dominant integral weight $\lambda$, let $L(\lambda)$ be supplied by [[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]] and define $$F_{\lambda,n}(x):=\operatorname{tr}_{L(\lambda)}(\rho_\lambda(x)^n).$$ Conjugation of $\rho_\lambda(x)$ does not change its trace, so $F_{\lambda,n}\in S^n(\mathfrak g)^{\mathfrak g}$. On $h\in\mathfrak h$ its value is the sum of $\mu(h)^n$ over the weights $\mu$ of $L(\lambda)$, with multiplicity. [F0, given, construct, algebra]

2.1 Let $$M_{\lambda,n}(h):=\sum_{\mu\in W\lambda}\mu(h)^n.$$ Apply the finite inverse expansion in [F2] to the linear map $e^\mu\mapsto\mu(h)^n$. Step 1.1 then makes every $M_{\lambda,n}$ a finite linear combination of restrictions of the $F_{\nu,n}$. [F2, step 1.1, algebra]

3.1 The pure powers $\ell^n$ with $\ell\in\mathfrak h^*$ span $S^n(\mathfrak h)$ by polarization. Dominant integral weights still suffice: in fundamental-weight coordinates they contain $\mathbb N_0^r$, and a polynomial vanishing on this grid is zero by induction on $r$, using the one-variable fact that a nonzero polynomial has finitely many roots. Thus the powers of dominant weights span, since any linear functional annihilating them gives a homogeneous polynomial vanishing on the grid. Averaging over the finite Weyl group [F1] shows that the orbit averages $M_{\lambda,n}/|W\lambda|$ span $S^n(\mathfrak h)^W$. Together with step 2.1, this proves that every homogeneous Weyl invariant of degree $n$ is the restriction of an element of $S^n(\mathfrak g)^{\mathfrak g}$. [F1, step 2.1, algebra]

4.1 Apply step 3.1 to every homogeneous component of $p$ and sum the resulting invariant extensions to obtain $P\in S(\mathfrak g)^{\mathfrak g}$ with $P|_{\mathfrak h}=p$. If $P'$ is another extension, then $P-P'$ restricts to zero, so [[lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction]] gives $P=P'$. Thus the extension is unique. [step 3.1] ∎
