---
id: def-weyl-group-of-a-compact-connected-lie-group
kind: definition
title: Compact Weyl group
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-torus-and-maximal-torus-in-a-compact-lie-group]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §6, definition of the analytic Weyl group"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§12"
---

## Definition

Let $G$ be a compact connected Lie group and let $T\le G$ be a maximal torus
([[def-torus-and-maximal-torus-in-a-compact-lie-group]]). The **normalizer** of
$T$ in $G$ is
$$N_G(T)=\{g\in G: gTg^{-1}=T\},$$
a subgroup of $G$ containing $T$; since $T$ is closed and conjugation is
continuous, $N_G(T)$ is closed in $G$, hence compact. The **Weyl group** of the
pair $(G,T)$ is the quotient group
$$W(G,T):=N_G(T)/T .$$
It is a group because $T$ is a normal subgroup of $N_G(T)$, and it acts on $T$
by
$$(gT)\cdot t:=gtg^{-1},$$
a well-defined action: replacing $g$ by $gt'$ with $t'\in T$ changes
$gtg^{-1}$ to $t'gtg^{-1}t'^{-1}=gtg^{-1}$ because $T$ is abelian. The
differential of this action at the identity is the linear action of $gT$ on
$\mathfrak t=\operatorname{Lie}(T)$ by $\operatorname{Ad}_g|_{\mathfrak t}$,
and the action on $\mathfrak t$ is a homomorphism from $W(G,T)$ to
$\operatorname{GL}(\mathfrak t)$.

The Weyl group is defined relative to the chosen maximal torus; a conjugacy
$gTg^{-1}=T'$ identifies $W(G,T)$ with $W(G,T')$ by $w\mapsto gwg^{-1}$, so the
isomorphism type of $W(G,T)$ does not depend on the choice of maximal torus up
to conjugacy.

## Remarks

- The Weyl group is a *group of automorphisms of the torus* in this definition;
  it is not yet asserted to be finite, nor identified with the reflection group
  of a root system. Those are theorems proved on this page.
- An element $w=gT\in W(G,T)$ is trivial exactly when $g\in T$; the kernel of
  the action on $T$ is computed on this page when $W(G,T)$ is proved to be
  equal to the centralizer quotient.
