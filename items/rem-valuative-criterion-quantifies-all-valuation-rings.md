---
id: rem-valuative-criterion-quantifies-all-valuation-rings
kind: remark
title: The valuative criterion quantifies over all valuation rings
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-valuative-criterion-separatedness, def-valuative-diagram-separatedness, def-valuation-ring, def-discrete-valuation-ring, def-axiom-of-choice]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, Theorems 13.7.1 and 13.7.4, printed pp.381-383"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Schemes, Lemmas 26.22.1-2, printed p.44"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $f:X\to S$ be
quasi-separated. The criterion proved on this page tests separatedness by
uniqueness of lifts of valuative diagrams
([[def-valuative-diagram-separatedness]]) whose ring is an **arbitrary**
valuation ring ([[def-valuation-ring]]) $R$ with fraction field $K$, with no
Noetherian, finite-type, finiteness or dimension restriction
([[thm-valuative-criterion-separatedness]]).

The quantifier cannot be narrowed to discrete valuation rings without extra
hypotheses. A companion calculation on the examples page glues two copies of
$\operatorname{Spec}V$ along $\operatorname{Spec}K$, where
$V=\bigcup_{n\ge1}k[t^{1/n}]_{(t^{1/n})}$ inside
$K=\bigcup_{n\ge1}k(t^{1/n})$. The result is a quasi-separated morphism that is
not separated over $\operatorname{Spec}V$, yet every valuative diagram over a
discrete valuation ring ([[def-discrete-valuation-ring]]) has at most one lift;
the diagram over the rank-one valuation ring $V$, whose value group is
$\mathbb Q$, has two lifts, one for each glued closed point. The mechanism is
arithmetic: a local homomorphism $V\to A$ into a DVR $A$ whose generic
map factors through $K$ sends $t$ to a nonzero element, since the field map
$K\to\operatorname{Frac}(A)$ is injective. It would send every
$t^{1/n}$ into the maximal ideal, so the finite positive integer $v_A(t)=n\,v_A(t^{1/n})$ would
have to be divisible by every $n\ge1$, which is impossible. Local maps
that kill $t$, such as $V\to k\to k\lbrack\lbrack u\rbrack\rbrack$, do exist; their generic
image is a closed point of the glued scheme and they do not give this
obstruction. In that case both lifts land in the same chart and the fixed
map to $\operatorname{Spec}V$ determines them uniquely.

A DVR-only criterion is nevertheless a theorem in the context that makes the
reduction possible: for a morphism of finite type between locally Noetherian
schemes, separatedness is equivalent to at-most-one lift for every diagram over
a discrete valuation ring (Vakil, Theorem 13.7.1). No hypothesis of that kind
is present in the general criterion, and none is available for an arbitrary
quasi-separated morphism, so no such reduction may be used implicitly.

Finally, the general criterion also ranges over valuation rings that happen to
be fields, and those diagrams never obstruct uniqueness: if $R=K$ is a field
then $\operatorname{Spec}R=\operatorname{Spec}K$ is the source of the generic
map, and the only compatible lift is that generic map itself. What the
counterexample exploits is therefore not the exclusion of fields from
[[def-discrete-valuation-ring]] but the absence of any discreteness or
finiteness hypothesis on the valuation ring; a restatement of the criterion
that quantifies only over DVRs is false without the finite-type and locally
Noetherian hypotheses above.
