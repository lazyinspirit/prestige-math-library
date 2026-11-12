---
id: lem-author-0bac6b264f4a-motivic-dim-fiber-bound
kind: lemma
title: The global dimension bound for the specified comparison fiber
status: published
domain: mathematics
deps:
  - lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses
  - thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - math:def-scheme-over-base
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-canonical-t-structure-on-a-derived-category
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses: mathematical-premise
  thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input: mathematical-premise
  lem-author-0bac6b264f4a-motivic-dim-general-interface: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-canonical-t-structure-on-a-derived-category: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 11
formulation_deps:
  - thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - math:def-scheme-over-base
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-canonical-t-structure-on-a-derived-category
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses
  - thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - math:def-scheme-over-base
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-canonical-t-structure-on-a-derived-category
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice and fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, with all field and scheme data in $U$, as in the actual comparison-fiber interface. Existence of these universes is a separate size assumption. For every prime field $F=\mathbb Q$ or $\mathbb F_p$ with $p$ prime, every Noetherian $F$-scheme $X$ of finite dimension $d$, and every $j\geq0$, the actual comparison fiber satisfies
$$F_{j,F}(X)\in D(\mathbb Z)^{\leq j+d}.$$
Here an $F$-scheme is a scheme equipped with a structure morphism to $\operatorname{Spec}F$, and $d=\dim X$ is the Krull dimension in the dimension criterion. The target $D(\mathbb Z)$ is the ordinary derived homotopy category of the supplied unbounded stable derived enhancement, and $D(\mathbb Z)^{\leq n}$ denotes the objects whose cohomology vanishes in every degree greater than $n$. Equivalently $H^i(F_{j,F}(X))=0$ for $i>j+d$.

## Statement references
[[lem-author-0bac6b264f4a-motivic-dim-general-interface]]

[[thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input]]

[[math:def-scheme-over-base]]

[[math:def-locally-noetherian-and-noetherian-scheme]]

[[math:def-canonical-t-structure-on-a-derived-category]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

## Facts & Assumptions
**Given:** The stated Choice and universe assumptions, $F,X,d,j$ as stated, and the actual fiber rather than an abstract object with matching groups.

**Goal:** Apply the geometric criterion and undo the normalization with the correct cochain sign.

[A1] [[math:def-axiom-of-choice]] and [[math:def-grothendieck-universe-closure-convention]] specify the foundational assumptions. They are inherited when using the actual fiber construction of [[lem-author-0bac6b264f4a-motivic-dim-general-interface]], whose stable derived enhancement uses Choice and the stated universe hierarchy. The present application makes no additional selection of representatives or cones.

[F1] [[lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses]] checks all the criterion hypotheses for $W_{j,F}=F_{j,F}[j]$, with $H^n(C[j])=H^{n+j}(C)$.

[F2] [[thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input]] applies to every finite-dimensional Noetherian scheme over the chosen base ring and specifies the Krull dimension used here. [[lem-author-0bac6b264f4a-motivic-dim-general-interface]] specifies the actual pointwise comparison fiber.

[F3] The scheme-over-base and Noetherian conventions are [[math:def-scheme-over-base]] and [[math:def-locally-noetherian-and-noetherian-scheme]]. The upper cohomological range is the canonical convention of [[math:def-canonical-t-structure-on-a-derived-category]].

## Proof
1.1 Under [A1], take the base ring in [F2] to be $F$. The criterion's conclusion applies directly to the Noetherian $F$-scheme $X$ of finite dimension $d$. All its sheaf and relative hypotheses for $W_{j,F}$ are supplied by [F1], so it gives $W_{j,F}(X)\in D(\mathbb Z)^{\leq d}$. [A1, F1, F2, F3, given]

2.1 If $i>j+d$, then $i-j>d$. The shift convention in [F1] gives $H^i(F_{j,F}(X))=H^{i-j}(W_{j,F}(X))=0$ by step 1.1. By [F3] this is the claimed upper bound on the actual fiber. No conclusion has been extracted from a spectral sequence abutting to total K-groups. [F1, F3, step 1.1] ∎
