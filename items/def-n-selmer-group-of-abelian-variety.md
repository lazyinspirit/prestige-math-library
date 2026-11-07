---
id: def-n-selmer-group-of-abelian-variety
kind: definition
title: "n-Selmer group of an abelian variety over a global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - thm-fppf-kummer-exact-sequence-for-abelian-variety
  - cor-global-kummer-exact-sequence-for-abelian-variety
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-fppf-h1-of-commutative-group-sheaves-as-torsors
  - lem-contracted-product-and-pushout-of-commutative-fppf-torsors
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, Chapter I, §6"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Printed p. 75, definition of the Selmer groups as kernels of localization to local cohomology."
    - title: "J. S. Milne, Elliptic Curves, Chapter IV, §2"
      url: "https://www.jmilne.org/math/Books/EC2.pdf"
      locator: "Printed pp. 118–121, Kummer maps and Selmer group for elliptic curves."
verification: {}
---

## Definition

Assume the Axiom of Choice and Dependent Choice, as in the fppf Kummer
sequence and local-field conventions. Let $K$ be a global field, let $A/K$
be an abelian variety, and let $n\ge2$. For each place $v$, the fppf Kummer
sequence gives a connecting map
$$
\delta_v:A(K_v)/nA(K_v)\longrightarrow H^1_{\mathrm{fppf}}(K_v,A[n]),
$$
where $A[n]=\ker([n]:A\to A)$ is the scheme-theoretic kernel and
$H^1_{\mathrm{fppf}}$ denotes the group of fppf torsor classes. The
**n-Selmer group** is
$$
\operatorname{Sel}_n(A/K)=\left\{\xi\in H^1_{\mathrm{fppf}}(K,A[n]):
\operatorname{res}_v(\xi)\in\operatorname{im}(\delta_v)\text{ for every
place }v\right\}.
$$
All cohomology groups in this definition are fppf torsor cohomology; this
convention is retained when the characteristic of $K$ divides $n$.

## Definition references

[[thm-fppf-kummer-exact-sequence-for-abelian-variety|Fppf Kummer sheaf sequence]]

[[cor-global-kummer-exact-sequence-for-abelian-variety|Cohomological Kummer sequence]]

[[def-global-field|Global field]]

[[def-place-of-a-global-field|Place of a global field]]

[[def-completion-of-a-global-field-at-a-place|Completion at a place]]

[[def-fppf-h1-of-commutative-group-sheaves-as-torsors|Fppf torsor cohomology]]

[[lem-contracted-product-and-pushout-of-commutative-fppf-torsors|Group law on fppf torsor classes]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

## Facts & Assumptions

**Given:** AC and DC, a global field $K$, an abelian variety $A/K$, an integer
$n\ge2$, and its places $v$ with completions $K_v$.

[A1] AC and DC are assumed by the abelian Kummer sheaf sequence; DC also
underlies the derived continuous-cohomology convention.
([[def-axiom-of-choice]], [[def-dependent-choice]],
[[thm-fppf-kummer-exact-sequence-for-abelian-variety]])

[F1] On the big fppf site of a field, the sequence
$0\to A[n]\to A\xrightarrow{[n]}A\to0$ is exact.
([[thm-fppf-kummer-exact-sequence-for-abelian-variety]])

[F2] Its cohomology sequence identifies the local connecting map with a
homomorphism $A(K_v)/nA(K_v)\to H^1_{\mathrm{fppf}}(K_v,A[n])$ and is natural
under localization. ([[cor-global-kummer-exact-sequence-for-abelian-variety]])

[F3] Fppf $H^1$ of a commutative group sheaf is a group of torsor classes;
contracted product supplies its abelian group law.
([[def-fppf-h1-of-commutative-group-sheaves-as-torsors]],
[[lem-contracted-product-and-pushout-of-commutative-fppf-torsors]])

## Proof

**Proof technique:** define the local Kummer conditions using the natural
cohomological boundary maps.

**Given:** The data above.

1.1 Apply [F1] over $K$ and over each completed field $K_v$. The long exact
cohomology sequence supplies a global group $H^1_{\mathrm{fppf}}(K,A[n])$ and
each local boundary map $\delta_v$ of [F2]. [A1, F1, F2, given]

1.2 The condition that a class localizes into $\operatorname{im}(\delta_v)$
is a subgroup condition because each boundary map is a homomorphism and its
image is a subgroup. Intersecting these inverse images over all places
therefore defines a subgroup of $H^1_{\mathrm{fppf}}(K,A[n])$.
[F2, step 1.1, algebra]

2.1 The groups and local images in the Definition use the same fppf torsor
convention supplied by [F3], including when $n$ is divisible by the
characteristic. This verifies that the intersection defining
$\operatorname{Sel}_n(A/K)$ is a subgroup. [F2, F3, step 1.2] ∎
