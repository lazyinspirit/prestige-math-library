---
id: rem-sierpinski-ultrafilter-not-measurable
kind: remark
title: "Sierpiński 1938: no free ultrafilter on $\\mathbb{N}$ is measurable or has the Baire property"
status: draft
origin: session
proved_here: false
deps: [rem-lebesgue-measure-and-integral]
justified_by: []
forward_refs: [def-ultrafilter, thm-ultrafilter-lemma, thm-ultrafilter-characterisation, fs-every-ultrafilter-principal]
aliases: [rem-free-ultrafilter-nonmeasurable]
landmark: false
short: "a free ultrafilter on $\\mathbb{N}$ is non-measurable and lacks the Baire property"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "W. Sierpinski, Fonctions additives non completement additives et fonctions non mesurables, Fund. Math. 30 (1938), 96-99"
      url: "https://doi.org/10.4064/fm-30-1-96-99"
    - title: "Property of Baire (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Property_of_Baire"
    - title: "Non-measurable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Non-measurable_set"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
pipeline_run: null
---

## Statement

Identify a subset of $\mathbb{N}$ with its characteristic function, so that
$\mathcal{P}(\mathbb{N})$ becomes the Cantor space $\{0,1\}^{\mathbb{N}}$ with its
product topology and its uniform product measure; equivalently, transport it to
$[0,1]$ by binary expansions and use Lebesgue measure. Then:

**no free ultrafilter on $\mathbb{N}$, read as a subset of
$\{0,1\}^{\mathbb{N}}$, is measurable, and none has the Baire property.**

The non-measurability is Sierpiński (1938), where it appears as the
observation that a free ultrafilter yields a non-measurable set and hence a
non-measurable additive function. The category form, that no such set has the
Baire property, is the standard analogue and is recorded in the same place in the
literature on weak choice principles.

The consequence usually wanted is negative: a free ultrafilter can never be
exhibited by a construction that produces only measurable sets, or only sets with
the Baire property. It is a precise sense in which such an object cannot be
written down.

## Remarks

- **Not proved in this library.** The statement needs the product measure on
  $\{0,1\}^{\mathbb{N}}$, or Lebesgue measure on $[0,1]$, and the Baire category
  machinery on a Polish space. Neither track is developed here; measure and
  integration is recorded, not proved, alongside this item.

- **What would prove it.** A free ultrafilter $\mathcal{U}$ is unchanged by
  altering finitely many coordinates, since it contains every cofinite set, so it
  is a tail event: the Kolmogorov zero-one law would force its measure to be $0$
  or $1$, and the topological zero-one law would force it to be meagre or
  comeagre. Complementation $A \mapsto \mathbb{N} \setminus A$ is a
  measure-preserving homeomorphism of $\{0,1\}^{\mathbb{N}}$ that carries
  $\mathcal{U}$ exactly onto its own complement, because an ultrafilter contains
  exactly one of $A$ and $\mathbb{N} \setminus A$
  ([[thm-ultrafilter-characterisation]]). A measurable $\mathcal{U}$ would
  therefore have measure $\tfrac{1}{2}$, and a $\mathcal{U}$ with the Baire
  property would be neither meagre nor comeagre; both contradict the zero-one
  laws. The two zero-one laws are the missing machinery, and they belong to the
  measure-theory and Baire-category tracks.

- **Why it matters elsewhere.** [[thm-ultrafilter-lemma]] produces an ultrafilter
  from Zorn's lemma with no description of it, and
  [[fs-every-ultrafilter-principal]] uses that to produce a free ultrafilter on
  $\mathbb{N}$ and can say nothing further about it. This item is the sharp reason
  why nothing further can be said by the usual means: every free instance of
  [[def-ultrafilter]] on $\mathbb{N}$ lies outside the measurable sets and outside
  the sets with the Baire property.

- **No consistency hypothesis is needed.** Unlike the independence results this
  library also records, this is an outright theorem: it says of any free
  ultrafilter that exists that it is non-measurable, and is vacuously true in a
  model with none.
