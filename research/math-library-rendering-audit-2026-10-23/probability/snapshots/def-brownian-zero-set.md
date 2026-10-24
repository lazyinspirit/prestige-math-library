---
id: def-brownian-zero-set
kind: definition
title: "The Brownian zero set"
status: published
origin: pipeline
deps: [lem-brownian-motion-has-a-jointly-measurable-continuous-version, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Theorem 6.39"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Section 7.4.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Definition

Assume the Axiom of Choice and let $B$ be a standard Brownian motion. Replace
$B$, as permitted by
[[lem-brownian-motion-has-a-jointly-measurable-continuous-version]], by the
indistinguishable version $\widehat B$ whose every path is continuous and whose
evaluation $(t,\omega)\mapsto\widehat B_t(\omega)$ is jointly measurable. The
**Brownian zero set** is
$$Z:=Z(\widehat B):=\{t\ge0:\widehat B_t=0\},$$
and for a horizon $T>0$ one writes $Z_T:=Z\cap[0,T]$.

The following are part of the definition and are used later in this form.

1. **Pathwise closedness.** For every outcome the set $Z$ is closed in
   $[0,\infty)$ and nonempty: it is the preimage of the closed set $\{0\}$
   under the continuous path, and $\widehat B_0=0$ for every outcome. Hence
   $Z_T$ is compact for every $T<\infty$.
2. **Version independence.** Replacing $\widehat B$ by the original $B$ changes
   $Z$ only on a $P$-null set: $B$ and $\widehat B$ are indistinguishable.
   Every almost-sure assertion about $Z$ proved below is therefore an
   almost-sure assertion about the zero set of $B$, and no statement below
   quantifies over versions.
3. **Measurability of the section integrals.** Joint measurability makes
   $(t,\omega)\mapsto1_{\{\widehat B_t=0\}}$ measurable for
   $\mathcal B([0,\infty))\otimes\mathcal F$, so for each $T$ the section
   integral $\omega\mapsto\lambda(Z_T(\omega))=\int_0^T1_{\{\widehat B_t(\omega)=0\}}\,dt$
   is a measurable function of $\omega$, and the Tonelli identity for the
   product measure $dt\otimes P$ applies to it.
4. **Endpoint conventions.** The point $t=0$ belongs to $Z$ for every outcome,
   the singleton $\{0\}$ has Lebesgue measure zero, and a horizon $T$ may be
   replaced by any larger horizon since $Z_T\subseteq Z_{T'}$ for $T\le T'$.

No further structure is assigned: in particular $Z$ is not asserted to be
perfect, uncountable or of measure zero by this definition; those are
statements proved separately on this page.
