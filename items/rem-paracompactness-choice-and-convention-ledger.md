---
id: rem-paracompactness-choice-and-convention-ledger
kind: remark
title: "Choice and convention ledger for paracompactness, Stone's theorem, and partitions of unity"
status: published
origin: session
deps: [def-paracompact-space, thm-paracompact-hausdorff-implies-normal, thm-subordinate-partitions-of-unity-exist, lem-metric-open-covers-have-point-finite-refinements, lem-metric-point-finite-refinements-can-be-made-locally-finite, thm-stone-metric-spaces-are-paracompact]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/S0002-9939-1969-0242120-3/S0002-9939-1969-0242120-3.pdf"
    - title: "C. Good, I. J. Tree and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://doi.org/10.1090/S0002-9939-98-04163-X"
pipeline_run: null
---

Paracompactness here means the open-cover refinement property alone; Hausdorffness
is not hidden in the word. It is therefore stated in the regularity, normality,
shrinking, and partition-of-unity results that use it. The proofs of
[[thm-paracompact-hausdorff-implies-normal]] and its regularity predecessor use
families of all eligible neighbourhoods, so they make no simultaneous choice.
The cover-shrinking construction is recorded under the Axiom of Choice, and the
partition theorem records Choice and Dependent Choice separately: Choice handles
cover assignments, while the cited Urysohn construction is carried out under
Dependent Choice.

The accessible primary text of Ornstein's proof has two distinct parts. Part (A)
well orders the cover, removes closures of selected dyadic balls, and obtains a
point-finite refinement. Part (B) renames that point-finite cover, assigns
controlled-radius balls to their first containing member, and upgrades it to a
locally finite refinement. Its local-finiteness test uses point-finiteness of
the Part (A) output, so the locally finite lemma depends on the point-finite
lemma. Stone's theorem is proved here under Choice as a sufficient assumption
only; no exact-strength claim is made.
