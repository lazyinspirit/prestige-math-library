---
id: def-cut-addition
kind: definition
title: "Addition, negation, and subtraction of Dedekind cuts"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-dedekind-cut, def-real-dedekind]
aliases: []
verification:
  precheck: n/a
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
    - title: "M. Girotti, Addendum — Construction of $\\mathbb{R}$ via Dedekind's method (MATH 317, Advanced Calculus of One Variable)"
      url: "https://mathemanu.github.io/ConstructionofR.pdf"
    - title: "Construction of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Construction_of_the_real_numbers"
    - title: "Math 331 course handout: Dedekind Cuts and Real Numbers (Hobart and William Smith Colleges)"
      url: "https://math.hws.edu/~mitchell/Math331S14/DedekindCutsHandOUt.pdf"
pipeline_run: null
---

## Definition

Let $A, B \in \mathbb{R}$ be Dedekind cuts of $\mathbb{Q}$
([[def-dedekind-cut]], [[def-real-dedekind]]).

**Sum.** The sum is the Minkowski sumset in $\mathbb{Q}$:
$$A + B := \{\, a + b : a \in A,\ b \in B \,\}.$$

**Additive identity.** $0^{*} := \{\, q \in \mathbb{Q} : q < 0 \,\}$, the cut of
the rational $0$ under the embedding $q \mapsto q^{*} = \{\, r \in \mathbb{Q} : r < q \,\}$
([[def-real-dedekind]]).

**Additive inverse.** For a cut $A$,
$$-A := \{\, p \in \mathbb{Q} : \exists\, r \in \mathbb{Q},\ r > 0,\ \text{with } -p - r \notin A \,\}.$$
Equivalently, $p \in -A$ iff there is a rational $s \notin A$ with $s < -p$
(set $s = -p - r$; conversely $r = -p - s > 0$). Intuitively $-p$ is bounded
away from $A$ from below: some rational strictly beneath $-p$ already fails to
lie in $A$.

**Subtraction.** $A - B := A + (-B)$.

## Remarks

The sum $A + B$ is again a cut, and $(\mathbb{R}, +)$ is an abelian group with
identity $0^{*}$: closure, commutativity, associativity, and the identity law
are [[lem-cut-add-well-defined]], and existence of inverses is
[[lem-cut-additive-inverse]].

The $r > 0$ slack in the definition of $-A$ is essential and is not cosmetic.
Neither $\{-a : a \in A\}$ nor $\{-a : a \notin A\}$ is a cut in general: the
first need not be downward closed, and the second can acquire a greatest
element. Excising the boundary rational (the "$-p - r$ with $r > 0$" clause)
makes $-A$ a genuine cut with no greatest element and forces the exact identity
$A + (-A) = 0^{*}$, not merely $A + (-A) \subsetneq 0^{*}$
([[lem-cut-additive-inverse]]).
