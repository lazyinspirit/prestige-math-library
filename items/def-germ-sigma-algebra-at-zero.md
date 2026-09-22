---
id: def-germ-sigma-algebra-at-zero
kind: definition
title: "The Brownian germ sigma-algebra at zero"
status: published
origin: pipeline
deps: [def-natural-and-usual-augmented-brownian-filtrations, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Definition 6.10 and Theorem 6.13"
      url: "http://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 7.2.3"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Choice and let $B$ be a standard Brownian motion with raw
natural filtration $(\mathcal F^0_t)$ and usual augmentation
$(\mathcal F_t)$ [[def-natural-and-usual-augmented-brownian-filtrations]]. The
**germ sigma-algebra at zero** is
$$\mathcal F^0_{0+}:=\bigcap_{t>0}\mathcal F^0_t .$$
It records the events observable at arbitrarily small positive times in the
uncompleted filtration.

Three elementary descriptions are part of the definition.

1. **Countable intersection.** Since $t\mapsto\mathcal F^0_t$ is increasing,
   $\mathcal F^0_{0+}=\bigcap_{q\in\mathbb Q,\,q>0}\mathcal F^0_q$. Indeed every
   positive rational is a positive real, giving one inclusion, while for a real
   $t>0$ one may choose a rational $q\in(0,t)$ and use
   $\mathcal F^0_q\subseteq\mathcal F^0_t$, so the countable intersection is
   contained in every $\mathcal F^0_t$.
2. **Position relative to the usual augmentation.**
   $\mathcal F^0_{0+}\subseteq\mathcal F_0$. For $u>0$ one has
   $\mathcal F^0_{u/2}\subseteq\mathcal F^0_u\subseteq
   \overline{\mathcal F}{}^0_u$, so
   $\mathcal F^0_{0+}\subseteq\mathcal F^0_{u/2}\subseteq
   \overline{\mathcal F}{}^0_u$ for every $u>0$; intersecting over $u>0$ gives
   the claim. In particular every germ event is an event of the usual
   sigma-algebra at time zero.
3. **No completion is included.** The definition uses the raw sigma-algebras.
   The completed and augmented objects of
   [[def-natural-and-usual-augmented-brownian-filtrations]] are not substituted
   for them, and the companion examples page records a counterexample showing
   that $\mathcal F^0_{0+}\ne\mathcal F^0_0$ in the canonical realization.

AC is declared only because the ambient filtration definition inherits the
Brownian construction's assumption; the intersection and its two descriptions
make no selection.

## Source notes

Sousi, Definition 6.10 and Theorem 6.13, and Durrett, Theorem 7.2.3, use the
germ sigma-algebra at zero as the home of Blumenthal's zero-one law. The
countable-intersection description is the form in which the increasing
filtration is used, and the containment in the time-zero usual sigma-algebra is
recorded because the zero-one law consumes it.
