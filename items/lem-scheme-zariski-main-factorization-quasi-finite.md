---
id: lem-scheme-zariski-main-factorization-quasi-finite
kind: lemma
title: "Scheme Zariski Main factorization for separated quasi-finite morphisms"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-quasi-finite-morphism-schemes
  - def-finite-morphism-schemes
  - lem-finite-morphism-affine
  - lem-relative-normalization-finite-stage
  - thm-quasi-finite-algebra-open-finite-factorization
  - lem-fibre-product-open-restriction
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, More on Morphisms, Section 37.43 (Zariski Main Theorem)"
      url: https://stacks.math.columbia.edu/download/more-morphisms.pdf
---

## Statement

Assume the Axiom of Choice. If $f:X\to S$ is separated and quasi-finite
and $S$ is quasi-compact and quasi-separated, then there is a factorization
$$X\xrightarrow{\ j\ }\overline X\xrightarrow{\ g\ }S$$
with $j$ an open immersion and $g$ finite. For arbitrary $S$, such a
factorization exists Zariski locally on $S$: each point of $S$ has an
affine open neighbourhood on which the restricted morphism factors in this
way. The local factorizations are not asserted to glue without the qcqs
hypothesis.

This is the scheme-level factorization. The affine algebra factorization
[[thm-quasi-finite-algebra-open-finite-factorization]] alone does not prove
it for a nonaffine source. The proof below reduces the qcqs claim to the
finite-stage relative-normalization conclusion of
[[lem-relative-normalization-finite-stage]], whose étale local descent and finite-stage construction are proved locally.

## Facts & Assumptions

**Given:** AC and the separated quasi-finite morphism of the Statement.

[F1] For a separated quasi-finite morphism over a qcqs base, the relative
normalization construction has an open $X$-image in a finite relative
spectrum stage. Its recorded proof uses locally proved qcqs finite-subalgebra
extension, standard étale local structure, and descent of the local open immersion
([[lem-relative-normalization-finite-stage]]).

[F2] A finite morphism is affine and has module-finite coordinate algebras
over every affine base open ([[def-finite-morphism-schemes]],
[[lem-finite-morphism-affine]]). Affine quasi-finite algebras have an open
finite-algebra model; this handles an affine chart but has no gluing claim
([[thm-quasi-finite-algebra-open-finite-factorization]]).

[F3] Fibre products commute with restriction to open subschemes
([[lem-fibre-product-open-restriction]]). Quasi-finite means finite type with
finite fibres ([[def-quasi-finite-morphism-schemes]]).

[F4] AC is the choice-function axiom ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** apply the finite-stage relative-normalization lemma,
then restrict to affine base opens.

1.1 Suppose first that $S$ is qcqs. By [F1] there is a finite quasi-coherent $\mathcal O_S$-algebra $\mathcal C_0$ and an open immersion $j:X\hookrightarrow\overline X:=\operatorname{Spec}_S\mathcal C_0$ whose composite with the relative-spectrum projection is $f$. On every affine base open $V=\operatorname{Spec}A$, the inverse image in $\overline X$ is $\operatorname{Spec}C_0(V)$ and $C_0(V)$ is a finite $A$-module by [F1], so $g:\overline X\to S$ is finite by [F2]. This is exactly the claimed factorization. [F1, F2]

2.1 Let $S$ be arbitrary and let $s\in S$. Choose an affine open $V\subseteq S$ containing $s$. The base change $f_V:X_V\to V$ is again separated and quasi-finite by restriction to an open base, using [F3]; the affine scheme $V$ is qcqs. Step 1.1 applied to $f_V$ gives an open immersion $X_V\to\overline X_V$ followed by a finite morphism $\overline X_V\to V$. This proves the Zariski-local assertion, with no claim that the finite models on different affine opens agree. [F1, F2, F3, step 1.1]

3.1 The empty source factors through the empty finite scheme $\operatorname{Spec}_S0$. No Noetherian or reducedness assumption is used; nonreduced finite fibres are allowed. The converse direction is not part of the claim. AC is inherited from [F1] and [F2], and the finite-stage and open-immersion inputs are proved in [F1]. [F1, F2, F3, F4, step 1.1, step 2.1] ∎
