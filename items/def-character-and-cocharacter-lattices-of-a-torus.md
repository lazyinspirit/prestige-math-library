---
id: def-character-and-cocharacter-lattices-of-a-torus
kind: definition
title: Character and cocharacter lattices
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: []
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
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix K, character and cocharacter lattices"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §7, integral forms"
---

## Definition

Let $T$ be a torus, i.e. a compact connected abelian Lie group. Write
$S^1=\mathbb R/\mathbb Z$ for the circle group.

- The **character lattice** of $T$ is
  $$X^*(T):=\operatorname{Hom}(T,S^1),$$
  the group of continuous (equivalently smooth) group homomorphisms
  $T\to S^1$, with pointwise multiplication.
- The **cocharacter lattice** of $T$ is
  $$X_*(T):=\operatorname{Hom}(S^1,T),$$
  the group of continuous group homomorphisms $S^1\to T$, with pointwise
  multiplication.
- **Pairing.** For $\chi\in X^*(T)$ and $\eta\in X_*(T)$ the composite
  $\chi\circ\eta:S^1\to S^1$ is a continuous homomorphism; every such
  homomorphism has the form $z\mapsto z^n$ for a unique $n\in\mathbb Z$, and the
  **pairing** is
  $$\langle\chi,\eta\rangle:=n,\qquad\text{where}\quad \chi(\eta(z))=z^n.$$
  The pairing is biadditive in $\chi$ and $\eta$.

The identity element of either lattice is the trivial homomorphism; the inverse
of $\chi$ is the character $t\mapsto\chi(t)^{-1}$ for $t\in T$ and is written
$\chi^{-1}$, while the inverse of $\eta$ is the cocharacter
$z\mapsto\eta(z)^{-1}$ and is written $\eta^{-1}$. Both lattices are abelian
groups.

## Remarks

- Both lattices are finitely generated free abelian groups: for
  $T\cong(S^1)^r$ one has $X^*(T)\cong\mathbb Z^r$ and
  $X_*(T)\cong\mathbb Z^r$, and the pairing becomes the standard dot product in
  the dual coordinates. This is proved on this page by differentiating
  characters; the definition itself asserts no freeness.
- The duality between $X^*$ and $X_*$ is *perfect*: a character is trivial
  exactly when it pairs to zero with every cocharacter and a cocharacter is
  trivial exactly when it pairs to zero with every character. This is proved
  with the differentiation theorem on this page.
- In the following, characters of a maximal torus $T$ are written
  multiplicatively, and the integer $n$ of the pairing is the *weight* of the
  cocharacter; the roots of $(G,T)$ are characters, so they pair integrally
  with the cocharacters supplied by the compact root $SU(2)$ subgroups.
