---
id: rem-where-the-archimedean-hypothesis-is-needed
kind: remark
title: "Which of the five completeness properties carry the Archimedean property on their own, and which must be handed it"
status: published
origin: session
deps: [def-completeness-properties, def-archimedean-field, thm-completeness-equivalences, lem-lub-implies-nested-intervals, lem-bw-implies-archimedean, lem-mct-implies-archimedean, fs-nested-intervals-implies-lub, fs-cauchy-complete-implies-lub, thm-of-archimedean, lem-laurent-non-archimedean, thm-laurent-cauchy-complete, cor-laurent-nested-intervals]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
pipeline_run: null
---

The statement of [[thm-completeness-equivalences]] attaches the Archimedean
property to two of its five clauses and not to the other three. This remark says
exactly why, clause by clause, and records what is proved on this page rather
than what is customary.

**The three that carry it.** Each of the following is proved here, with no
Archimedean hypothesis anywhere in sight:

- (LUB) implies the Archimedean property. This is claim 1 of
  [[lem-lub-implies-nested-intervals]], which is [[thm-of-archimedean]] applied
  to the field: a complete ordered field is Archimedean, because otherwise the
  canonical naturals would be a nonempty set $A$ bounded above, and then
  $\sup A - 1$, being smaller than $\sup A$, is not an upper bound of $A$, so
  some $n \cdot 1_F$ exceeds it and $(n+1)\cdot 1_F$ exceeds $\sup A$.
- (BW) implies the Archimedean property, by [[lem-bw-implies-archimedean]]. If
  the canonical naturals were bounded they would form a bounded sequence, and
  every subsequence of it has consecutive terms at distance at least $1$, so no
  subsequence converges.
- (MCT) implies the Archimedean property, by [[lem-mct-implies-archimedean]]. If
  the canonical naturals were bounded above they would be a nondecreasing
  bounded sequence, hence convergent, hence Cauchy, which the gap of $1$ between
  consecutive terms forbids.

**The two that do not.** Neither (NIP) nor (CC) implies the Archimedean
property, and one field refutes both: the formal Laurent series field
$K = \mathbb{R}((t^{-1}))$ is not Archimedean
([[lem-laurent-non-archimedean]]), has (CC) ([[thm-laurent-cauchy-complete]])
and has (NIP) in the shrinking form of [[def-completeness-properties]]
([[cor-laurent-nested-intervals]]). The consequences are the two false
statements of this page, [[fs-nested-intervals-implies-lub]] and
[[fs-cauchy-complete-implies-lub]]: without the Archimedean hypothesis neither
clause 2 nor clause 4 of the equivalence theorem implies clause 1.

**What distinguishes the two groups.** (LUB), (BW) and (MCT) each quantify over
an object that is assumed only to be *bounded*: a bounded set, a bounded
sequence, a nondecreasing sequence bounded above. In a non-Archimedean field the
canonical naturals are such an object, so each of the three can be tested
against them directly, and each fails on them at once. (NIP) and (CC) quantify
instead over data that are already forced together: nested intervals whose
lengths tend to $0$ in the field, and sequences whose terms get arbitrarily close
to each other in the field. In a non-Archimedean field that is a much stronger
hypothesis than it looks, because "arbitrarily close" now means below every
infinitesimal as well; so few sequences and few interval families qualify, and
the ones that do converge for reasons that have nothing to do with the naturals
being cofinal.

**Two corollaries worth stating plainly.**

- An Archimedean hypothesis is never needed alongside (LUB), (BW) or (MCT), and
  writing one there is not merely redundant but misleading, since it suggests
  the property is weaker than it is.
- The customary phrase "complete ordered field" is ambiguous in exactly one
  place, and that place is (CC). This library resolves it by reserving
  *complete* for the least-upper-bound property
  ([[def-complete-ordered-field]]) and always writing *Cauchy complete* for the
  other, as [[thm-laurent-cauchy-complete]] does. A text that says "the reals
  are the unique complete ordered field" and means (CC) is stating something
  false, and $K$ is the counterexample.

**A note on what is not claimed.** Nothing above says that (NIP) and (CC) are
equivalent to each other, or that either is equivalent to the Archimedean
property's negation, or that $K$ is the only witness. What is proved is the
implication pattern of [[thm-completeness-equivalences]] and the two failures
just named.
