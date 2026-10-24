---
id: lem-regular-semisimple-elements-form-a-dense-open-subset
kind: lemma
title: "Regular semisimple elements form a dense open subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra, def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra, prop-centralizer-of-a-cartan-element-from-its-vanishing-roots, lem-regular-elements-form-a-connected-dense-open-subset, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra, thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (lem-regular-semisimple-elements-form-a-dense-open-subset). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. For a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ and any fixed Cartan subalgebra $\mathfrak h$ in the nilpotent self-normalizing sense, the set of regular semisimple elements is a dense open subset of $\mathfrak g$, and every regular semisimple element is conjugate to an element of $\mathfrak h_{\mathrm{reg}}$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, and a fixed Cartan subalgebra $\mathfrak h$ in the nilpotent self-normalizing sense.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]. Under it, a Cartan subalgebra is maximal toral by [[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]], and any two are conjugate by [[thm-cartan-subalgebras-are-conjugate-in-a-complex-semisimple-lie-algebra]].

[F1] The published full proof of [[thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate]], steps 1.1, 2.1, 2.2, 3.1 and 6.1, explicitly establishes under AC: (i) the locus $\mathfrak g^{\rm sr}$ minimizing the generalized zero-eigenspace dimension $n(x)$ of $\operatorname{ad}_x$ is the complement of a nonzero polynomial zero set, hence dense open; (ii) for each Cartan $\mathfrak h$, the conjugate orbit of $\mathfrak h_{\rm reg}$ is nonempty open, and $n(h)=\dim\mathfrak h$ on it; (iii) every $x\in\mathfrak g^{\rm sr}$ is semisimple and its centralizer is a Cartan subalgebra. Its step 3.1 also gives $\min_x n(x)=\dim\mathfrak h$ for each Cartan.

## Proof

**Proof technique:** direct.

1.1 Under [A1, F1], put $\rho=\min_x n(x)=\dim\mathfrak h$. The locus $U=\operatorname{Ad}(G)\mathfrak h_{\rm reg}$ is nonempty Euclidean open by [F1]. The ordinary regular locus is dense by [[lem-regular-elements-form-a-connected-dense-open-subset]], so it meets $U$. At a point of the intersection, the centralizer dimension is both $\operatorname{rank}\mathfrak g$ and $\dim\mathfrak h$, by [F1] and [[prop-centralizer-of-a-cartan-element-from-its-vanishing-roots]]. Hence $\operatorname{rank}\mathfrak g=\rho=\dim\mathfrak h$. [A1, F1, given]

2.1 If $x\in\mathfrak g^{\rm sr}$, [F1] makes $x$ semisimple, so its generalized zero eigenspace is its actual centralizer and has dimension $n(x)=\rho=\operatorname{rank}\mathfrak g$ by step 1.1. Thus $x$ is regular semisimple. Conversely, if $x$ is regular semisimple, its adjoint operator is diagonalizable, so $n(x)=\dim C_{\mathfrak g}(x)=\operatorname{rank}\mathfrak g=\rho$, and $x\in\mathfrak g^{\rm sr}$. Therefore the regular semisimple locus equals the dense open set $\mathfrak g^{\rm sr}$ of [F1]. [F1, step 1.1, algebra]

3.1 For regular semisimple $x$, [F1] makes $C_{\mathfrak g}(x)$ a Cartan subalgebra, and $x$ lies in it. By [A1] conjugate that Cartan to the fixed $\mathfrak h$. The conjugate $h$ of $x$ has centralizer dimension $\dim\mathfrak h$ by steps 1.1 and 2.1; the root centralizer formula [[prop-centralizer-of-a-cartan-element-from-its-vanishing-roots]] forces $\alpha(h)\ne0$ for every root $\alpha$, so $h\in\mathfrak h_{\rm reg}$ by [[def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra]]. This proves the second assertion. [A1, F1, step 1.1, step 2.1] ∎
