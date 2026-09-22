---
id: def-root-datum-of-a-compact-connected-lie-group
kind: definition
title: Root datum of a compact connected Lie group
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-character-and-cocharacter-lattices-of-a-torus, def-roots-of-a-compact-connected-lie-group, thm-analytic-and-root-system-weyl-groups-agree, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix V, root data and marked quotients"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §§7–8"
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Choice. A **reduced compact root datum** is a quadruple
$(X,\Phi,X^\vee,\Phi^\vee)$ in which:

1. $X$ and $X^\vee$ are finite free abelian groups of the same rank, equipped
   with a perfect $\mathbb Z$-bilinear pairing
   $\langle\cdot,\cdot\rangle:X\times X^\vee\to\mathbb Z$;
2. $\Phi\subseteq X$ and $\Phi^\vee\subseteq X^\vee$ are finite subsets
   with a fixed bijection $\Phi\to\Phi^\vee$, $\alpha\mapsto\alpha^\vee$, such
   that $\langle\alpha,\alpha^\vee\rangle=2$ for every root;
3. the **paired reflections**
   $$s_\alpha(x)=x-\langle x,\alpha^\vee\rangle\alpha,\qquad s_\alpha^\vee(y)=y-\langle\alpha,y\rangle\alpha^\vee$$
   preserve $\Phi$ and $\Phi^\vee$ and are compatible: if
   $s_\alpha(\beta)=\gamma$ then $s_\alpha^\vee(\beta^\vee)=\gamma^\vee$;
4. $\Phi$ is **reduced**: if $\alpha,c\alpha\in\Phi$ for $c\in\mathbb Z$, then
   $c=\pm1$ (equivalently, no root is a nontrivial integral multiple of
   another).

For a compact connected Lie group $G$ with maximal torus $T$, the **root datum
of $(G,T)$** is
$$(X,\Phi,X^\vee,\Phi^\vee)=\bigl(X^*(T),\ \Phi(G,T),\ X_*(T),\ \Phi^\vee\bigr),$$
where $X^*(T)$ and $X_*(T)$ are the character and cocharacter lattices
([[def-character-and-cocharacter-lattices-of-a-torus]]), $\Phi(G,T)$ is the
root system of the pair ([[def-roots-of-a-compact-connected-lie-group]]), and
$\Phi^\vee=\{\alpha^\vee\}$ consists of the cocharacters supplied by the compact
root $SU(2)$ subgroups, so that $\langle\alpha,\alpha^\vee\rangle=2$
([[thm-analytic-and-root-system-weyl-groups-agree]]). The pairing is the perfect
character–cocharacter pairing of the definition above; the reflections are
preserved by the identification of the root Weyl group with $W(G,T)$.

Central torus directions are retained: the roots vanish on $Z(G)^0$ and do not
span $X$ when the centre is positive-dimensional, and the datum records the
central character lattice as part of $X$ rather than discarding it.

## Remarks

- Two root data are **isomorphic** when there are isomorphisms of $X$ and
  $X^\vee$ preserving the pairings and the root and coroot sets; identifying the
  source of the isomorphism is the exact sense in which the classification by
  root data holds on this page.
- The reflection formula in (3) is the abstract form of the geometric
  reflection $s_\alpha(\lambda)=\lambda-\langle\lambda,\alpha^\vee\rangle\alpha$
  of the root systems page, written additively for the lattice $X$.
- The definition of a root datum here is deliberately symmetric in $X$ and
  $X^\vee$; the perfect pairing is data, not a consequence of the axioms.
- Empty root and coroot sets are allowed. In particular, a torus has root datum
  $(X,\varnothing,X^\vee,\varnothing)$; the root-indexed conditions above are
  then vacuous.
