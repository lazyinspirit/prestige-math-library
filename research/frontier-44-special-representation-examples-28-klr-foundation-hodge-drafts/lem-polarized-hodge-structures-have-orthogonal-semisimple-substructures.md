---
id: "lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures"
kind: "lemma"
title: "Polarized rational Hodge structures split orthogonally"
status: "draft"
origin: "session"
deps: ["def-compact-kahler-manifold-and-hodge-polarization-conventions"]
provenance: {"statement": "literature-derived", "proof": "ai-altered"}
sources: {"references": [{"title": "Christian Schnell, Complex Manifolds, MAT 545, Fall 2024, classes 16–18", "url": "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"}, {"title": "Pierre Deligne, Théorie de Hodge II, §§2.1.12–2.1.17 and Lemma 4.2.3", "url": "https://www.numdam.org/item/PMIHES_1971__40__5_0.pdf"}]}
proof_strategy: direct
---

## Statement

If $(V,Q)$ is a polarized rational pure Hodge structure and $U\subseteq V$ is a rational sub-Hodge structure, then $Q|_U$ is a polarization and $V=U\oplus U^{\perp_Q}$ as rational Hodge structures, with polarized complement. Every short exact sequence of polarizable rational pure Hodge structures of a fixed weight splits as Hodge structures; every such structure is a finite direct sum of simple Hodge structures. These are claims about rational Hodge substructures. They do not assert a splitting for an arbitrary local subsystem. Every rational splitting persists under extension to any characteristic-zero field.

## Facts & Assumptions

**Given:** The data and hypotheses of the Statement.



## Proof

1.1 The Weil operator $C$ and conjugation preserve $U_{\mathbb C}$. Hence the positive Hermitian form $h(u,v)=Q(Cu,\bar v)$ restricts positively to it. If $u$ is in the radical of $Q|_U$, then $Cu\in U_{\mathbb C}$ is also in that radical because type orthogonality makes $Q(Cx,y)=Q(x,C^{-1}y)$. Thus $h(u,u)=0$ and positivity forces $u=0$. A rational matrix for $Q|_U$ is therefore invertible, so the equations $Q(x,U)=0$ define a rational complement of dimension $\dim V-\dim U$ with zero intersection with $U$. [given, algebra]

2.1 Decompose $x=\sum x^{p,q}$ in $U^{\perp_Q}_{\mathbb C}$. Testing against each type $U^{q,p}$ and using Hodge orthogonality shows separately that each $x^{p,q}$ is orthogonal to all of $U$. Hence this complement is a Hodge substructure. The restriction of $h$ to it is positive, so its restricted $Q$ is a polarization by the argument of step 1.1. This proves the orthogonal Hodge direct sum. In a short exact sequence, identify the subobject with its image in the middle Hodge structure; its image is a sub-Hodge structure because a type-preserving linear map has typewise image and kernel. The complement maps bijectively to the quotient, giving a type-preserving rational section. [step 1.1, given, algebra]

3.1 In a nonzero finite-dimensional Hodge structure, select a nonzero rational sub-Hodge structure of least dimension. It is simple. Split it off by step 2.1 and repeat on the smaller-dimensional complement; induction terminates and proves semisimplicity. A rational splitting is expressed by matrices satisfying linear identities, which remain identities after extending scalars to any characteristic-zero field. This last assertion does not put a positivity order on that field and does not claim every new subobject over it is rationally defined. [step 2.1, given, algebra, induction] ∎
