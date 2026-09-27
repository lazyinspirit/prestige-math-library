---
id: "rem-conormal-map-need-not-injective"
kind: "remark"
title: "The conormal sequence is only right exact"
status: draft
origin: "pipeline"
pipeline_run: frontier-35-ten-categories
deps: ["thm-conormal-exact-sequence-algebra", "lem-differentials-polynomial-algebra-free"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.131.9"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil 22.2.12-13, pp.579-580"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Remark

For a homomorphism of commutative rings $A\to P$, an ideal $I\subseteq P$ and
$B=P/I$, the conormal sequence
$$I/I^{2}\longrightarrow B\otimes_{P}\Omega_{P/A}\longrightarrow \Omega_{B/A}\longrightarrow0$$
of [[thm-conormal-exact-sequence-algebra]] is exact at the middle and final
terms only: the left arrow is **not** asserted to be injective, and it need not
be. The kernel of that arrow is therefore genuine information about the pair
$(I,P)$, not a defect of the construction.

The smallest witness is $P=k[x]$ with $k$ a field, $I=(x^{2})$ and
$B=k[x]/(x^{2})$. Then $I/I^{2}=(x^{2})/(x^{4})$, and the class $[x^{3}]$ is
nonzero there, because $x^{3}\notin(x^{4})$ by degrees. Its image under the
conormal map is $1\otimes\mathrm d(x^{3})$. By
[[lem-differentials-polynomial-algebra-free]] the module $\Omega_{k[x]/k}$ is
free on $\mathrm dx$ with $\mathrm dg=g'(x)\,\mathrm dx$, so
$\mathrm d(x^{3})=3x^{2}\,\mathrm dx$; after identifying
$B\otimes_{P}\Omega_{P/k}\cong B\,\mathrm dx$ this becomes
$3x^{2}\,\mathrm dx=0$, because $x^{2}=0$ in $B$. The class $[x^{3}]$ thus lies
in the kernel of the left arrow, in every characteristic: for $p=3$ the
coefficient $3$ is already zero in $k$, and otherwise the coefficient dies only
after passing to $B$.

Two qualifications. First, the failure is not an artefact of a badly chosen
presentation: it depends on the ideal $I$ and not on the number of generators
used to describe it. Second, with additional regularity hypotheses on $I$ the
left arrow can become injective, so that the sequence starts as a short exact
sequence; no such hypothesis is part of the general statement, and the
injectivity is never to be used on this page without an explicit regular
hypothesis. The companion examples page records the witness above as a
counterexample with the same computation.
