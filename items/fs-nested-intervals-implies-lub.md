---
id: fs-nested-intervals-implies-lub
kind: false-statement
title: "FALSE: the nested interval property alone implies the least-upper-bound property"
status: published
origin: session
deps: [cex-laurent-nested-intervals-empty, thm-completeness-equivalences, def-completeness-properties, def-archimedean-field, def-sequences-in-an-ordered-field, def-complete-ordered-field, cor-laurent-nested-intervals, cor-laurent-not-lub-complete, lem-laurent-non-archimedean, thm-laurent-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Formal power series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formal_power_series"
pipeline_run: null
---

## Statement

**False claim:** every ordered field with the nested interval property (NIP) of
[[def-completeness-properties]] has the least-upper-bound property (LUB).

This is clause 2 of [[thm-completeness-equivalences]] with its Archimedean
hypothesis deleted, and the deletion is exactly what makes it false. The witness
is the formal Laurent series field $K = \mathbb{R}((t^{-1}))$, which satisfies
(NIP) and has no least upper bound for the set of its own canonical naturals.

Note that the false claim is being refuted in the *shrinking* form of (NIP),
which is the weaker hypothesis and therefore the harder claim to refute; the
unrestricted form fails in $K$ outright ([[cex-laurent-nested-intervals-empty]]),
so a refutation stated against it would prove much less.

## Facts & Assumptions

**Given:** The formal Laurent series field $K = \mathbb{R}((t^{-1}))$.

[L1] $K$ is an ordered field ([[thm-laurent-ordered-field]]).

[L2] Every nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has exactly one point in its intersection ([[cor-laurent-nested-intervals]]); intervals, nesting and lengths tending to $0$ in an ordered field are as in [[def-sequences-in-an-ordered-field]], and (NIP) asks exactly that such an intersection be nonempty ([[def-completeness-properties]]).

[L3] $K$ is not a complete ordered field: the set $A = \{\, n \cdot 1_K : n \in \mathbb{N}\,\}$ is nonempty and bounded above by $t$ and has no least upper bound in $K$ ([[cor-laurent-not-lub-complete]], [[def-complete-ordered-field]]).

[L4] $K$ is not Archimedean, since $n \cdot 1_K < t$ for every natural $n$ ([[lem-laurent-non-archimedean]], [[def-archimedean-field]]).

[L5] For an ordered field, the Archimedean property together with (NIP) does imply (LUB) ([[thm-completeness-equivalences]], clause 2 implies clause 1).

## Refutation

**Proof technique:** direct.

1.1 $K$ is an ordered field. [L1]

1.2 $K$ has (NIP): any nested sequence of closed intervals of $K$ whose lengths tend to $0$ in $K$ has a point in its intersection, indeed exactly one. [L2]

1.3 $K$ does not have (LUB), the set of its canonical naturals being nonempty, bounded above and without a least upper bound. [L3]

2.1 So $K$ is an ordered field with (NIP) and without (LUB), and the claim is false. [step 1.1, step 1.2, step 1.3]

3.1 What fails in $K$ is precisely the hypothesis that the claim deleted: $K$ is not Archimedean, and with that hypothesis restored the implication is true. [step 1.1, L4, L5] ∎

## Remarks

- **The failure is not an accident of one field.** By
  [[lem-lub-implies-nested-intervals]] every field with (LUB) is Archimedean, so
  any witness at all must be non-Archimedean; and in a non-Archimedean field the
  shrinking hypothesis in (NIP) is a severe restriction, because a length that
  tends to $0$ in the order of the field must get below every infinitesimal.
  That is why $K$ satisfies the shrinking form while failing the unrestricted
  one, and it is why $K$ can satisfy (NIP) while failing (LUB) at all.

- **$\mathbb{R}(t)$ will not do as a witness**, although it is the library's
  other non-Archimedean ordered field ([[cex-ordered-field-not-archimedean]]).
  Nothing in this library establishes any nested interval property for it, and
  the page that built $K$ says why a new field was constructed rather than
  reusing that one.

- **The companion failure** is [[fs-cauchy-complete-implies-lub]], refuted by the
  same field. Together they are the exact content of the Archimedean hypotheses
  in clauses 2 and 4 of [[thm-completeness-equivalences]].
