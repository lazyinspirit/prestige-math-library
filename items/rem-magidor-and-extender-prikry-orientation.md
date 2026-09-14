---
id: rem-magidor-and-extender-prikry-orientation
kind: remark
title: Magidor and extender Prikry forcing are orientation, not substitutes
status: draft
origin: pipeline
deps:
  - thm-prikry-forcing-preserves-cardinals
  - def-lc-fine-ultrafilters-strong-compactness-and-supercompactness
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Dimitriou, Symmetric Models, Singular Cardinal Patterns, and Indiscernibles, Chapter 2"
      url: https://d-nb.info/1020630655/34
    - title: "Poveda Ruzafa, Contributions to the theory of Large Cardinals through the method of Forcing, Section 7.1"
      url: https://diposit.ub.edu/bitstreams/d2c6bc55-7884-4c44-ae09-820e7c3f0fbb/download
    - title: "Merimovich, Prikry on Extenders, Revisited"
      url: https://arxiv.org/abs/math/0305269
---

## Remark

Ordinary Prikry forcing uses one normal measure and, as
[[thm-prikry-forcing-preserves-cardinals]] proves, changes the cofinality of its
measurable cardinal to $\omega$ without collapsing cardinals. Two related
families explain the surrounding landscape but supply none of the later Gitik
arguments on this page.

**Magidor forcing.** With an appropriate coherent sequence of measures and the
corresponding Mitchell-order hypothesis, Magidor forcing can change the
cofinality of the large cardinal to a prescribed smaller regular cardinal. The
word “prescribed” does not mean that every regular target is available from one
fixed measurable-cardinal hypothesis: the measure sequence must be long enough
for the chosen target. Poveda Ruzafa, Section 7.1, states this parameter and
hypothesis explicitly.

**Extender-based Prikry forcing.** Extender-based variants coordinate many
measure projections rather than using the single normal measure of ordinary
Prikry forcing. Merimovich's *Prikry on Extenders, Revisited* is a concrete
example: its forcing changes cofinality to $\omega$ without adding bounded
subsets while also controlling the power set. “Extender-based” is therefore a
family label, not a claim that every such forcing has one common cofinality or
preservation profile.

Neither family is a substitute for the construction below. Gitik's target here
uses a proper class of strongly compact cardinals, fine complete ultrafilters as
in [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]], a
definable proper-class forcing relation, and a finite-support symmetric
submodel. No later item cites this remark as a proof of any of those features.

