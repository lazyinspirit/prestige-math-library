---
id: def-jacobson-radical-and-semisimple-commutative-banach-algebra
kind: definition
title: Jacobson radical and semisimple commutative Banach algebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-prime-and-maximal-ideals]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definition 3.1.23 and Remark 3.1.24, printed pp. 62–63"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.63 and §5.5.1, printed pp. 262–266"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Definition

Let $A$ be a commutative unital complex algebra
([[def-character-and-maximal-ideal-space]] for the algebra convention and
[[def-prime-and-maximal-ideals]] for ideals). The **Jacobson radical** of $A$ is

$$\operatorname{rad}(A) \;:=\; \bigcap \{\, M \;:\; M \text{ is a maximal ideal of } A \,\},$$

the intersection of all maximal ideals of $A$; when $A$ has no maximal ideals
the intersection is over the empty family and the radical is $A$ by the
convention that an empty intersection is the whole ring. The algebra $A$ is
called **semisimple** when

$$\operatorname{rad}(A) = \{0\}.$$

The radical is an ideal: it is the intersection of a family of ideals, hence
closed under addition and under multiplication by arbitrary elements of $A$.
The definition is stated for commutative unital complex algebras only, which is
the class for which the radical is used in this page; it is **not** the general
noncommutative Jacobson radical, and no noncommutative radical
characterization is invoked anywhere in this library's Gelfand theory.

## Remarks

- **Two equivalent readings for Banach algebras.** For a commutative unital
  Banach algebra the intersection of all maximal ideals is the same as the
  intersection of the kernels of all characters, because the maximal ideals are
  exactly the character kernels
  ([[thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra]]); this
  equality is used in [[thm-kernel-of-the-gelfand-transform-is-the-radical]],
  not assumed here.
- **Semisimplicity is an algebraic condition.** It says that the maximal ideals
  separate points of $A$ in the weak sense of having trivial intersection; it
  does not by itself say anything about the norm, and it is compatible with
  $\Gamma$ failing to be isometric.
