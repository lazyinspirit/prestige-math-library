---
id: lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction
kind: lemma
title: "An invariant polynomial is determined by its restriction to a Cartan subalgebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, lem-finite-semisimple-cartan-root-and-string-structure, thm-holomorphic-inverse-function-theorem-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (lem-an-invariant-polynomial-is-determined-by-its-cartan-restriction). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra and let
$\mathfrak h\subseteq\mathfrak g$ be a Cartan subalgebra. If an
adjoint-invariant polynomial on $\mathfrak g$ vanishes on $\mathfrak h$, then
it vanishes identically on $\mathfrak g$. Equivalently, an invariant polynomial
is determined by its restriction to $\mathfrak h$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$ in the nilpotent self-normalizing sense, and an infinitesimally adjoint-invariant polynomial function $f\in S(\mathfrak g)^{\mathfrak g}$ whose restriction to $\mathfrak h$ is zero. The Killing form identifies the notation $S(\mathfrak g)$ with polynomial functions on $\mathfrak g$.

[A1] AC is [[def-axiom-of-choice]]; under it every such Cartan subalgebra is maximal toral by [[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]].

[F1] For a maximal toral Cartan, [[lem-finite-semisimple-cartan-root-and-string-structure]] gives $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$, with finite $\Phi$, one-dimensional root spaces, and nilpotent $\operatorname{ad}e_\alpha$ for every root vector.

[F2] A holomorphic map between equal-dimensional complex affine spaces with invertible differential maps a neighbourhood onto a nonempty open set ([[thm-holomorphic-inverse-function-theorem-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathfrak g=0$, the conclusion is immediate. Otherwise [A1, F1] give the displayed root decomposition. Choose a nonzero vector $e_\alpha\in\mathfrak g_\alpha$ for each of the finitely many roots and fix an order on $\Phi$. Since each root is a nonzero linear functional and $\mathbb C$ is infinite, the finite product $\prod_{\alpha\in\Phi}\alpha$ is a nonzero polynomial; choose $h_0\in\mathfrak h$ where it does not vanish. [given, A1, F1, algebra]

2.1 For $\mathbf t=(t_\alpha)_{\alpha\in\Phi}$ define the following polynomial map. [F1, step 1.1]
$$F(\mathbf t,h)=\Bigl(\prod_{\alpha\in\Phi}^{\mathrm{fixed\ order}}\exp(t_\alpha\operatorname{ad}e_\alpha)\Bigr)h,\qquad F:\mathbb C^{|\Phi|}\times\mathfrak h\longrightarrow\mathfrak g.$$
Every exponential is a finite polynomial because its adjoint operator is nilpotent. It is an automorphism of the Lie algebra: the derivation identity implies $\exp(tD)[x,y]=[\exp(tD)x,\exp(tD)y]$ for $D=\operatorname{ad}e_\alpha$, and its inverse is $\exp(-tD)$. Thus $F$ is a polynomial map. [F1, step 1.1, algebra]

3.1 The source and target of $F$ have the same dimension by [F1]. At $(0,h_0)$, its derivative has the following form. [F1, step 1.1, step 2.1]
$$dF_{(0,h_0)}((s_\alpha),k)=k+\sum_{\alpha\in\Phi}s_\alpha[e_\alpha,h_0]=k-\sum_{\alpha\in\Phi}s_\alpha\alpha(h_0)e_\alpha.$$
Every $\alpha(h_0)$ is nonzero, and the root spaces are distinct one-dimensional summands, so this derivative is an isomorphism. By [F2], the image of $F$ contains a nonempty Euclidean open subset of $\mathfrak g$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Infinitesimal invariance means the derivative of $f$ along each curve $t\mapsto\exp(t\operatorname{ad}e_\alpha)x$ is zero at every point of that curve. Hence $f$ is constant along each such curve, and $f(F(\mathbf t,h))=f(h)=0$ for all $(\mathbf t,h)$. By step 3.1 it vanishes on a nonempty Euclidean open subset of $\mathfrak g$. A complex polynomial that vanishes on a nonempty open set is zero identically (successively apply the one-variable polynomial identity theorem in local coordinates). Thus $f=0$. [given, step 2.1, step 3.1, algebra] ∎
