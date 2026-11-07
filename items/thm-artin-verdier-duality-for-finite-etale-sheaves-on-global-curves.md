---
id: thm-artin-verdier-duality-for-finite-etale-sheaves-on-global-curves
kind: theorem
title: "Artin–Verdier duality for finite étale sheaves on global curves"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
  - def-constructible-etale-sheaf-of-finite-modules
  - def-global-field
  - def-axiom-of-choice
  - def-finite-field-and-its-order
  - def-algebraic-curve-over-field
  - def-number-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - thm-global-function-field-brauer-hasse-sequence
justified_by: []
proof_strategy: direct
axiom_use: "The current proof route uses AC through the global-field and Brauer–Hasse suppliers, and DC through the function-field cohomology branch. The Statement remains unqualified; no choice-free proof branch is established."
provenance:
  statement: literature-derived
  proof: escalated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter II, §3, Theorem 3.1 and Corollaries 3.2–3.4"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §2 and §5"
      url: "https://arxiv.org/pdf/1804.03941"
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter II, §3"
      url: "https://www.jmilne.org/math/CourseNotes/LEC.pdf"
verification: {}
---

## Statement

Let $U$ be a nonempty open subscheme of either the spectrum of the ring of
integers of a number field or a smooth proper geometrically integral curve
over a finite field. Let $F$ be a finite locally constant constructible étale
sheaf of abelian groups on $U$, annihilated by an integer $n$ that is
invertible on $U$, and let $F^D=\underline{\operatorname{Hom}}(F,\mathbb G_m)$.
For every integer $r$, cup product and the compact-support trace induce a
perfect pairing of finite groups, meaning each group maps isomorphically to
the group of homomorphisms from the other group to $\mathbb Q/\mathbb Z$. The pairing is
$$H^r_{\acute et}(U,F^D)\times H^{3-r}_{c,\mathrm{fppf}}(U,F)
\longrightarrow H^3_{c,\mathrm{fppf}}(U,\mathbb G_m)
\xrightarrow{\operatorname{tr}_U}\mathbb Q/\mathbb Z,$$
with the modified Tate convention at real places and the completed local
restriction convention fixed in the Definition.

## Statement references

[[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]

[[def-constructible-etale-sheaf-of-finite-modules]]

[[def-algebraic-curve-over-field]]

[[def-finite-field-and-its-order]]

[[thm-global-brauer-hasse-noether-exact-sequence-number-field]]

[[thm-global-function-field-brauer-hasse-sequence]]

[Milne, *Arithmetic Duality Theorems*, Chapter II, §3](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Demarche–Harari, §§2 and 5](https://arxiv.org/pdf/1804.03941)

[Milne, *Lectures on Étale Cohomology*, Chapter II, §3](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** The global curve $U$ and finite locally constant sheaf $F$ in the
Statement.

[F1] [[def-constructible-etale-sheaf-of-finite-modules]]: $F$ is a finite
locally constant constructible étale sheaf on the small étale site.

[F2] [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]]:
compact support uses completed local fields and the Tate correction at real
places.

[F3] [[thm-global-brauer-hasse-noether-exact-sequence-number-field]] supplies
the number-field Brauer invariant exact sequence. Its actual draft proof is
escalated because finite-support localization and global reciprocity are not
proved there.

[F4] [[thm-global-function-field-brauer-hasse-sequence]] supplies the
finite-constant function-field Brauer invariant sequence. Its current proof
has an unresolved degree-three principal-divisor cohomology step.

[F5] [[def-finite-field-and-its-order]] defines the finite base field and
[[def-algebraic-curve-over-field]] defines smooth proper geometrically
integral curves; [[def-global-field]], [[def-number-field]],
[[def-place-of-a-global-field]], and
[[def-completion-of-a-global-field-at-a-place]] fix the two global-curve cases
and their finite-place completion conventions.

[A1] [[def-axiom-of-choice]]: AC is assumed by the current global-field and
Brauer–Hasse proof route; this is a proof-route assumption, not a claim that the
Artin–Verdier pairing itself requires AC.

[A3] DC is inherited through the real-place Tate convention in [F2] and the
function-field Brauer proof route in [F4]. It is not stated as a hypothesis of
the Artin–Verdier theorem.

[L1] Milne, Chapter II, §3, constructs the trace
$H_c^3(U,\mathbb G_m)\cong\mathbb Q/\mathbb Z$ and proves the
Artin–Verdier pairing by reduction to locally constant constructible sheaves,
finite-cover descent, and localization; the real-place terms use modified
Tate cohomology.
[Milne, Chapter II, §3](https://www.jmilne.org/math/Books/ADTnot.pdf)

[A2] To complete the source reduction from a finite Galois module to an
arbitrary finite locally constant sheaf, the proof needs the exact
finite-cover descent and local-to-global diagram, including exactness at the
real places. This is not proved by the current two Brauer-sequence supplier
bodies. The missing source-level argument is retained as an escalation rather
than inferred from those statements.

## Proof

**Proof technique:** construct the cup-product pairing and reduce its
perfectness to the finite-cover local-to-global diagram.

**Given:** AC by [A1], [F1]–[F5], [L1], and the unresolved
finite-cover comparison [A2], with the source-route axiom branch [A3].

1.1 The evaluation morphism $F^D\times F\to\mathbb G_m$ and cup product give
the displayed pairing. By [F2], its target trace uses the completed finite
places and the modified real-place complexes. [F1, F2, construct]

1.2 Since $n$ is invertible on $U$, the coefficient sheaves are finite étale
and their fppf and étale cohomology comparison applies. On a finite étale cover
trivializing $F$, the source proof reduces the pairing to finite Galois-module
duality and the local-to-global restriction diagram; the local trace terms are
controlled by [F3] in the number-field case and [F4] in the function-field
case. [F1, F2, F3, F4, F5, A1, A3, L1, step 1.1]

2.1 If the missing exact descent and real-place compatibility in [A2] is
supplied, the two rows of that restriction diagram are exact and its local
vertical maps are dualities; the five lemma then gives perfectness of the
middle global pairing. The present direct Brauer suppliers do not establish
[A2], so this step is conditional and the item remains escalated.
[F3, F4, A1, A2, A3, step 1.2, algebra] ∎
