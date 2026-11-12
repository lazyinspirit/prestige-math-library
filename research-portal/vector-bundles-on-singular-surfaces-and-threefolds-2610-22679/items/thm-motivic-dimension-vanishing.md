---
id: thm-motivic-dimension-vanishing
kind: theorem
title: Motivic dimension vanishing
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-cohomology
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses
  - lem-author-0bac6b264f4a-motivic-dim-fiber-bound
  - lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing
  - lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-scheme-over-base
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  lem-author-0bac6b264f4a-motivic-dim-general-interface: mathematical-premise
  lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses: mathematical-premise
  lem-author-0bac6b264f4a-motivic-dim-fiber-bound: mathematical-premise
  lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing: mathematical-premise
  lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: v1, Theorem 1.13, printed p. 8; Theorem 8.1, printed p. 53;
        introduction footnote 1, printed p. 2
      statement: For j≥0 and finite-dimensional Noetherian equicharacteristic X,
        motivic cohomology vanishes in degrees i>j+dimX.
      hypotheses: Global equicharacteristic factorization through SpecQ or SpecF_p; X
        Noetherian and finite-dimensional; j≥0.
      reading_limits: "Current consumer maintenance read the complete assigned
        theorem, all 13 direct supplier interfaces, the independent
        dimension-input contracts and their citation records, the reachable
        declared dependency graph, and the sole direct consumer. Fresh
        primary-source reading was limited to Elmanto-Morrow v1 Theorem 1.13,
        Theorem 8.1 and introduction footnote 1 in PDF text. The older Section
        8.2 and Proposition 8.10/8.12 proof-reading record below remains
        historical, not fresh credit. No reconstruction, supplier-source defect
        audit or independent acceptance is claimed. Historical incoming
        citation-repair reading record: For this citation repair, freshly read
        the versioned primary PDF text of the complete Theorems 1.13 and 8.1 and
        introduction footnote 1. Also read the Section 8.2 paragraph after
        Remark 8.8 and Propositions 8.10 and 8.12 with their proofs, printed pp.
        56–58, to check the independent geometric input chain. Read the current
        local dimension interfaces and their declared dependencies. The local
        two-step application and fixed-field identification are retained; no
        reconstruction or independent audit of the geometric foundations or
        their upstream sources is claimed. Choice and universe assumptions are
        inherited from the current local interfaces, not additional geometric
        hypotheses of the published theorem."
dependency_level: 13
formulation_deps:
  - def-motivic-cohomology
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-cohomology
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-scheme-over-base
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - def-motivic-cohomology
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-b747b28c359f-derived-cohomology
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses
  - lem-author-0bac6b264f4a-motivic-dim-fiber-bound
  - lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing
  - lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-scheme-over-base
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice and fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, with all field and scheme data below in $U$. Universe existence is a separate size assumption. Use the supplied unbounded derived enhancement of complexes of $V$-small abelian groups, considered in $W$, and its ordinary derived homotopy category $D(\mathbb Z)$.

Let $X$ be a Noetherian equicharacteristic scheme of finite dimension $d$, and let $j\geq0$ be an integer. Then, for every integer $i$,
$$H^{i,j}_{\mathrm{mot}}(X,\mathbb Z)=0\qquad\text{if }i>j+d.$$
Here Noetherian means locally Noetherian and quasi-compact, equivalently admitting a finite affine open cover by spectra of Noetherian rings. For nonempty $X$, $d=\dim |X|$ is the supremum of lengths $s$ of strict chains $Z_0\subsetneq\cdots\subsetneq Z_s$ of nonempty irreducible closed subsets of the underlying space; a one-member chain has length zero. Irreducible means not a union of two proper closed subsets. Set $\dim\varnothing=-\infty$ and $j+(-\infty)=-\infty$; the empty case means vanishing in every integer degree, and the finite-dimensional hypothesis imposes a finite nonnegative integer bound when $X$ is nonempty.

Equicharacteristic has the precise EM meaning: the structure map $X\to\operatorname{Spec}\mathbb Z$ factors through $\operatorname{Spec}F$ for a prime field $F=\mathbb Q$ or $\mathbb F_p$ with $p$ prime. An $F$-scheme here is a scheme equipped with that structure morphism to $\operatorname{Spec}F$. For such $X$ the groups mean $H^i(M_{j,F}(X))$ in the general prime-field interface, with $H^i$ the cochain cohomology functor on $D(\mathbb Z)$. If $X$ is over the standing field $k$, this interface is exactly the theory already defined on $\mathrm{Sch}_k$, by restriction along its prime subfield. The theorem does not require that every $X$ be over that one standing field.

## Statement references
[[def-motivic-cohomology]]

[[lem-author-0bac6b264f4a-motivic-dim-general-interface]]

[[lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:def-dimension-noetherian-topological-space]]

[[math:def-scheme-over-base]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

## Facts & Assumptions
**Given:** The stated Choice and universe assumptions, Noetherian finite-dimensional globally equicharacteristic scheme, nonnegative integer weight and compatible actual EM interface.

**Goal:** Prove the unrestricted prime-field statement and identify its standing fixed-field specialization.

[A1] [[math:def-axiom-of-choice]] and [[math:def-grothendieck-universe-closure-convention]] specify the foundational assumptions. Choice is inherited through the supplied unbounded derived enhancement and the actual comparison-fiber and outer-bound interfaces in [F1]–[F3]; universe existence is assumed separately. The present application introduces no further choice of resolutions or cones.

[F1] [[lem-author-0bac6b264f4a-motivic-dim-general-interface]] defines the actual general EM groups and proves compatibility with the completed fixed-field definition, including pullbacks and zero values at the empty scheme.

[F2] [[lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses]] and [[lem-author-0bac6b264f4a-motivic-dim-fiber-bound]] check and apply the imported geometric dimension criterion to the actual shifted comparison fiber, under [A1].

[F3] [[lem-author-0bac6b264f4a-motivic-dim-cohomological-glueing]] and [[lem-author-0bac6b264f4a-motivic-dim-prime-field-vanishing]] combine the actual fiber bound with the precise cdh outer bound through the long exact sequence. The prime-field supplier's nonempty conclusion applies to every Noetherian prime-field scheme of finite integer dimension; its empty case gives zero complexes in every degree.

[F4] [[math:def-locally-noetherian-and-noetherian-scheme]], [[math:def-dimension-noetherian-topological-space]] and [[math:def-scheme-over-base]] give the Noetherian, chain-dimension (including $\dim\varnothing=-\infty$), and structure-morphism conventions used in the Statement.

[F5] [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies the actual prime-field motivic sheaf, its field restriction and empty-cover descent; [[lem-author-b747b28c359f-derived-cohomology]] supplies functorial cohomology on its derived homotopy category. [[def-motivic-cohomology]] is the standing fixed-field definition used in [F1].

## External input
Reference 0 records the published vanishing statement in Elmanto–Morrow v1, Theorems 1.13 and 8.1, with the global equicharacteristic convention of its introduction footnote 1. The geometric inputs are used through [F1]–[F3] with their own explicit import limits; the application and fixed-field identification below are local deductions, not a reconstruction of the published geometric proofs. The foundational assumptions in [A1] come from the current local supplier contracts.

## Proof
1.1 Work under [A1]. If $X$ is nonempty, its assumed equicharacteristic factorization equips it with an $F$-scheme structure as in [F4]. Its Noetherian and finite-dimensional hypotheses give a finite integer $d\geq0$ in precisely the convention of [F2]–[F4]. Apply [F3], using the fiber bound checked in [F2], to obtain $H^i(M_{j,F}(X))=0$ whenever $i>j+d$. By [F1] and [F5] these are the claimed general motivic groups. For the empty scheme [F1] and [F5] give the zero complex by empty-cover descent, so all integer-degree groups vanish, agreeing with the convention in [F4]. [A1, F1, F2, F3, F4, F5]

2.1 When $X$ additionally carries the standing $k$-structure, [F1] identifies this very complex and its pullbacks with those of the standing definition in [F5] by actual restriction, so step 1.1 gives its stated specialization under the same foundational assumptions. No finite-type, smoothness, regularity or fixed-$k$ restriction has replaced the original Noetherian equicharacteristic hypotheses. This proves the theorem for exactly the defined range $j\geq0$. [A1, F1, F3, F5, step 1.1] ∎
