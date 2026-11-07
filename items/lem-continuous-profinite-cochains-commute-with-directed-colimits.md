---
dependency_level: 1
id: lem-continuous-profinite-cochains-commute-with-directed-colimits
kind: lemma
title: "Continuous profinite cochains commute with directed colimits"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - thm-finite-products-of-compact-spaces
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - def-filtered-category-and-filtered-colimit
  - lem-equality-in-a-filtered-colimit-of-sets-is-eventual
  - lem-filtered-colimits-of-abelian-groups-are-exact
  - def-dependent-choice
sources:
  references:
    - title: "J. S. Milne, Class Field Theory v4.03, Chapter II §4, Lemma4.1 and Proposition4.4, printed pp.86,88"
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
---

## Statement

Let $P$ be a compact profinite group and let $(A_i)$ be a small directed system of discrete continuous left $P$-modules with equivariant transition maps, which need not be injective. Give $A=\operatorname*{colim}_iA_i$ its discrete topology and induced action. This action is continuous. For every $n\geq0$, the natural map of normalized continuous cochain groups is an isomorphism

$$\operatorname*{colim}_i C^n_{\mathrm{cts}}(P,A_i)\cong C^n_{\mathrm{cts}}(P,A),$$

compatible with differentials. Consequently

$$\operatorname*{colim}_i H^n_{\mathrm{cts}}(P,A_i)\cong H^n_{\mathrm{cts}}(P,A).$$

These identifications are natural in the directed system. The cochain argument uses compactness as given and finite selections only. For the supplied derived-cohomology interpretation assume Dependent Choice and the supplied-resolution convention; no full Axiom of Choice is needed in this compactness branch.

## Statement references

[Milne, *Class Field Theory*, Chapter II §4, Lemma4.1 and Proposition4.4, printed pp.86,88](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

Milne states the directed-union case of Proposition4.4. The version allowing noninjective transitions follows by the same finite-image argument and the eventual-equality criterion for directed colimits, proved explicitly below.

## Facts & Assumptions

**Given:** Compact $P$, the small directed system $(A_i)$, and its colimit $A$ in the Statement.

[F1] [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]: a discrete group action is continuous exactly when each element has an open stabilizer; normalized continuous cochains with the inhomogeneous differential compute continuous cohomology. [[thm-finite-products-of-compact-spaces]]: every finite power of compact $P$ is compact without additional choice.

[F2] [[def-filtered-category-and-filtered-colimit]] and [[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]: every colimit element has a representative at some stage, and equality of two representatives holds at a common later stage. Finitely many stages or equality constraints have a common later stage by directedness.

[F3] [[lem-filtered-colimits-of-abelian-groups-are-exact]]: filtered colimits preserve kernels, images and cokernels, and commute with cohomology of cochain complexes.

[A1] [[def-dependent-choice]] is retained only for the supplied-resolution interpretation of [F1]. Compactness is an explicit premise here.

## Proof

1.1 If $a\in A$ is represented by $a_i\in A_i$, its stabilizer contains the open stabilizer of $a_i$, so the induced action on the discrete $A$ is continuous by [F1]. In degree zero the cochain comparison is the identity comparison $\operatorname*{colim}_iA_i=A$. [F1, F2, given, construct]

1.2 For $n>0$, let $c:P^n\to A$ be continuous and normalized. Its image is finite because $P^n$ is compact and $A$ is discrete. Lift its finitely many values to a common stage $A_i$ using [F2], choosing zero for the zero value if it occurs. Define $c_i$ by the chosen value on each fibre of $c$. The fibres are clopen, so $c_i$ is continuous. A tuple with an identity coordinate has value zero, hence $c_i$ is normalized. Its image in $A$ is $c$, proving surjectivity. [F1, F2, given, construct]

2.1 A continuous cochain $c_i:P^n\to A_i$ whose image in $A$ is zero has finitely many values, including in degree zero just one value. Each becomes zero at some later stage by [F2]. One common later stage kills all of them, so the cochain becomes zero there. Comparing two representatives after first taking a common stage proves injectivity of the cochain comparison. Equivariant coefficient maps commute with the inhomogeneous differential term by term, so these degreewise isomorphisms form an isomorphism of complexes. [F1, F2, step 1.1, step 1.2, algebra]

3.1 Apply [F3] to the directed cochain complexes in step 2.1 to obtain the displayed cohomology isomorphism. Every comparison was induced by the coefficient maps, so the cochain and cohomology isomorphisms are natural. [A1, F1, F3, step 2.1, algebra] ∎
