---
id: def-vogan-diagram
kind: definition
title: Vogan diagram
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, def-theta-stable-cartan-subalgebra-and-compact-split-parts, thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification, def-positive-system-and-base-of-simple-roots, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI §8, triple definition p.397 and abstract definition p.403; Chapter VI Problem 18, p.429, painting changes under simple reflection"
    - title: "Meng-Kiat Chuah, Automorphisms on Simple Lie Algebras and Vogan Diagrams"
      url: "https://www.math.nthu.edu.tw/~chuah/Notes4.pdf"
      locator: "Definition 1.2.1, p.2; Section 5.1, reflection algorithm (5.1) and its m=2 specialization, p.15"
landmark: false
verification:
  audited: 2026-09-22
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra with
Cartan involution $\theta$, complexification $\mathfrak g$ and Cartan
involution data as in
[[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]]. Let
$\mathfrak h_0$ be a **maximally compact** $\theta$-stable Cartan subalgebra
([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]),
with complexification $\mathfrak h$ and root system $\Phi$. By
[[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]]
the Cartan subalgebra $\mathfrak h_0$ has no real roots, so every root
$\alpha\in\Phi$ is imaginary or complex.

**Compatible positive system.** A positive system $\Delta^{+}$ of $\Phi$
([[def-positive-system-and-base-of-simple-roots]]) is **compatible** with
$(\mathfrak h_0,\theta)$ if it is $\theta$-stable, $\theta(\Delta^{+})=\Delta^{+}$;
equivalently, if its base $\Delta$ satisfies $\theta(\Delta)=\Delta$, where
$\theta\alpha=\alpha\circ\theta^{-1}$ on $\mathfrak h^{*}$. Compatible positive
systems exist. Work on the real vector space
$\mathfrak h_{\mathbb R}=i\mathfrak t_0\oplus\mathfrak a_0$, on which $B$ is
positive definite and roots are real-valued, as proved in steps 1.1 and 2.1 of
[[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]].
Since there are no real roots, each root restricts nontrivially to
$i\mathfrak t_0$. Choose $H\in i\mathfrak t_0$ outside their finitely many
kernels ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]),
and take $\Delta^+=\{\alpha:\alpha(H)>0\}$. This is a positive system under
the Killing identification with the real root space. Because $\theta H=H$,
it is theta-stable. A theta-stable positive system has a theta-stable base
because theta preserves decompositions into sums of positive roots; conversely
a theta-stable base determines a theta-stable positive system by the
nonnegative simple-root expansions
([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).
When the root set is empty, the positive system and base are empty and $H=0$
works.

**The Vogan diagram of a triple.** Let $\Delta^{+}$ be a compatible positive
system with base $\Delta$. The **Vogan diagram** of the triple
$(\mathfrak g_0,\mathfrak h_0,\Delta^{+})$ is the Dynkin diagram of $\Phi$
relative to $\Delta$
([[def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention]]) together
with the following additional structure:

- the involution induced by $\theta$ on $\Delta$: since $\theta(\Delta^{+})=\Delta^{+}$,
  $\theta$ permutes the simple roots, and $\alpha\mapsto\theta\alpha$ is an
  involutive automorphism of the Dynkin diagram; its orbits on $\Delta$ have one
  or two elements, and the two-element orbits are marked (equivalently the two
  vertices of such an orbit are joined by the standard pair-labelling);
- each $\theta$-fixed simple root $\alpha\in\Delta^{\theta}$ is **painted** if
  the root $\alpha$ is noncompact, that is $\mathfrak g_\alpha\subseteq\mathfrak p$,
  and is left unpainted if $\alpha$ is compact, that is
  $\mathfrak g_\alpha\subseteq\mathfrak k$
  ([[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]]).

**Abstract Vogan diagrams.** An abstract Vogan diagram is a finite-type
Dynkin diagram, including its edge multiplicities and arrows, equipped with
an automorphism $\tau$ satisfying $\tau^2=\mathrm{id}$ and a subset $P$ of its
fixed vertices. The vertices of $P$ are painted; fixed vertices outside $P$
are unpainted. Two-element orbits are marked as pairs, and their vertices are
not painted. Disconnected diagrams and permutations of isomorphic components
are allowed; the empty diagram is allowed for the zero algebra.

Equivalently, over a based reduced crystallographic root system
$(\Phi,\Delta)$, these data are a base-preserving root-system involution
$\tau$ and a subset $P\subseteq\Delta^\tau$. A root-system isomorphism here
means a linear bijection carrying roots to roots and preserving the Cartan
integers $2(\alpha,\beta)/(\beta,\beta)$; no absolute choice of scale on
individual irreducible components is part of the diagram.

For a realized triple one can additionally record the eigenvalue
$\varepsilon(\alpha)\in\{1,-1\}$ of $\theta$ on each imaginary root space.
This is well defined by
[[thm-root-spaces-of-a-complex-semisimple-lie-algebra-are-one-dimensional]].
These eigenvalues are properties of the realizing Lie-algebra involution;
an independently assigned function on all fixed roots is not part of an
abstract Vogan diagram. In particular, the rule
$\varepsilon(\alpha+\beta)=\varepsilon(\alpha)\varepsilon(\beta)$ for fixed
roots alone is not a definition of such an extension. In type $A_2$ with the
two simple roots interchanged, their sum is fixed although neither simple
root is fixed, so that rule alone leaves its sign undetermined.

**Equivalence.** The equivalence relation on abstract Vogan diagrams is
generated by the following reversible moves:

1. Relabel by an isomorphism of Dynkin diagrams preserving multiplicities
   and arrows, transporting the involution and the painted subset.
2. At a painted fixed simple vertex $\alpha$, perform the reflection/painting
   move $F_\alpha$. Keep the underlying diagram and its involution, keep
   $\alpha$ painted, and for each other fixed simple vertex $\beta$ reverse
   its color exactly when the Cartan integer
   $2(\beta,\alpha)/(\alpha,\alpha)$ is odd. Vertices in two-element orbits
   remain unpainted.

Thus the second move reverses adjacent fixed colors, except at a longer root
joined to $\alpha$ by a double edge. Nonadjacent colors do not change. The
rule is independent of root-length scale and is involutive, since the same
set of vertices is toggled twice and $\alpha$ stays painted. A chain of zero
moves is allowed. These are the standard finite Vogan reflection/painting
moves; the existence and classification theorems establish their relationship
with real forms. This definition neither assumes a classification result nor
adds arbitrary signs on nonsimple roots.
