---
id: thm-numerable-vector-bundles-admit-bundle-metrics
kind: theorem
title: Numerable vector bundles admit bundle metrics
status: draft
origin: pipeline
deps: [def-real-and-complex-topological-vector-bundle, def-partition-of-unity-subordinate-to-a-cover, thm-subordinate-partitions-of-unity-exist, lem-ac-supplies-dependent-choice-for-vector-bundle-constructions, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Proposition 1.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Metric construction, printed pp.11–12"
    - title: "MIT 18.906 notes, Lecture 16"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Numerations and metrics, printed pp.53–55"
---

## Statement

Assume the Axiom of Choice. Every numerable real vector bundle has a
continuous positive-definite fiber inner product, and every numerable complex
vector bundle has a continuous Hermitian metric. Consequently this holds for
bundles over paracompact Hausdorff bases.

AC supplies the dependent-choice consequence required by the published
partition theorem. Once numerating charts and their subordinate partition are
supplied, the metric construction is choice-free.

## Facts & Assumptions

**Given:** AC and a finite-rank real or complex vector bundle $E\to X$.

[F1] A numeration consists of linear charts $E|_{U_i}\cong
U_i\times\mathbb F^n$ and a locally finite partition $(\rho_i)$ with
$\operatorname{supp}\rho_i\subseteq U_i$
([[def-real-and-complex-topological-vector-bundle]],
[[def-partition-of-unity-subordinate-to-a-cover]]).

[F2] Under AC and DC, every open cover of a paracompact Hausdorff space has a
subordinate locally finite partition of unity
([[thm-subordinate-partitions-of-unity-exist]]).

[A1] AC is the stated choice principle, and it implies DC
([[def-axiom-of-choice]],
[[lem-ac-supplies-dependent-choice-for-vector-bundle-constructions]]).

## Proof

**Proof technique:** direct.

1.1 First suppose the numeration in [F1] is supplied. Transport the standard Euclidean or Hermitian form to $E|_{U_i}$ and call it $h_i$. Define on each fiber $h_x(v,w)=\sum_i\rho_i(x)h_{i,x}(v,w)$, taking the $i$th term to be zero off $U_i$. Since $\operatorname{supp}\rho_i\subseteq U_i$, this zero extension is continuous near every point outside $U_i$, and local finiteness makes the sum continuous. [F1]

2.1 Each summand is positive semidefinite. At every $x$, some $\rho_i(x)>0$ because the coefficients sum to one; for $v\ne0$, the corresponding $h_{i,x}(v,v)>0$. Hence $h_x(v,v)>0$. The formula is symmetric bilinear over $\mathbb R$ or conjugate-symmetric sesquilinear over $\mathbb C$, so it is the required metric. [F1, step 1.1, algebra]

3.1 If $X$ is paracompact Hausdorff, apply [A1] to obtain DC and then [F2] to the linear chart cover of $E$. This supplies a numeration, so steps 1.1–2.1 give a metric. AC is used only through this invocation of the published partition theorem; with supplied data those two steps make no choices. [F2, A1, step 1.1, step 2.1] ∎
