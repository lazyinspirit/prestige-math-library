---
id: def-qa-16-nonnegative-adversary-bound
kind: definition
title: Nonnegative-weight adversary bound
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - def-qa-16-input-mismatch-matrices
  - lem-qa-16-general-adversary-finite-and-attained
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-qa-16-general-adversary-bound
  - thm-heine-borel-rn
  - thm-extreme-value-metric
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition


For nonconstant f let
$
\operatorname{Adv}(f):= \max_{\substack{\Gamma=\Gamma^{\mathsf T}\in\mathbb R^{D\times D},\ \Gamma\ne0,\ \Gamma\circ F=0\\ \Gamma_{xy}\ge0\ \forall x,y}} \frac{\|\Gamma\|}{\max_i\|\Gamma\circ\Delta_i\|}.
$
Set $\operatorname{Adv}(f)=0$ if f is constant. This is the nonnegative-weight adversary bound under exactly the same masks and query normalization as $\operatorname{Adv}^{\pm}(f)$.

## Facts & Assumptions

**Given:** A finite Boolean query problem with mismatch masks and same-output matrix F.



[F1] [[def-qa-16-general-adversary-bound]]: admissible real symmetric matrices vanish on equal-output pairs and are normalized by max_i||Γ∘Δ_i||.

[F2] [[lem-qa-16-general-adversary-finite-and-attained]]: every nonzero admissible matrix has positive denominator; its proof establishes continuity of the matrix operator norm, compactness of the normalized set $d(\Gamma)\le1$, and the entrywise bound $|\Gamma_{xy}|\le1$ on that set.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: the norm is homogeneous.

[F4] [[thm-heine-borel-rn]]: closed bounded subsets of finite-dimensional real Euclidean spaces are compact.

[F5] [[thm-extreme-value-metric]]: a continuous function on a nonempty compact metric space attains its maximum.

## Proof

1.1 For nonconstant $f$, choose $x,y\in D$ with $f(x)\ne f(y)$ and put $\Gamma_{xy}=\Gamma_{yx}=1$, with all other entries zero. This is a nonnegative admissible matrix; the inputs differ in some coordinate, so its mismatch denominator is exactly one. Hence the nonnegative feasible set contains a nonzero witness. Restrict the admissible matrices of [F1] to entrywise nonnegative matrices and use the same mismatch denominator; define their maximum ratio to be Adv(f), with value zero for constant f. [given, F1, construct]

2.1 Let $K_+$ be the set of real symmetric matrices with $\Gamma\circ F=0$, $\Gamma\ge0$, and $d(\Gamma):=\max_i\|\Gamma\circ\Delta_i\|\le1$. It is closed because its linear and entrywise inequalities are closed and each filtered norm is continuous; the norm continuity follows from $|\|A\|-\|B\||\le\|A-B\|$. If $\Gamma\in K_+$ has a nonzero entry $\Gamma_{xy}$, then $f(x)\ne f(y)$ and some coordinate i differs, so $|\Gamma_{xy}|=| (\Gamma\circ\Delta_i)_{xy}|\le\|\Gamma\circ\Delta_i\|\le1$ by the operator-norm entry bound in [F2,F3]. Hence $K_+$ is bounded, and [F4] makes it compact. It is nonempty by step 1.1, so [F5] gives a finite maximum of the continuous norm on $K_+$. Every nonzero admissible matrix has positive denominator by [F2]; scaling identifies this normalized maximum with the ratio supremum, and a nonzero norm maximizer must have $d(\Gamma)=1$ because otherwise it could be scaled up in $K_+$. Thus the nonnegative maximum is finite and attained with the same normalization as Adv±. [given, F2, F3, F4, F5, step 1.1, algebra] ∎
