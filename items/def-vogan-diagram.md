---
id: def-vogan-diagram
kind: definition
title: Vogan diagram
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-theta-stable-cartan-subalgebra-and-compact-split-parts, def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention, def-positive-system-and-base-of-simple-roots, def-axiom-of-choice, thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification, def-cayley-transform-of-a-theta-stable-cartan-subalgebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §8, definition of the Vogan diagram of a triple and abstract Vogan diagram, printed pp. 397-403"
    - title: "Pavel Etingof, Lie Groups and Lie Algebras"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
      locator: "Lecture 40, §40.2, and Lecture 41, §41.1, printed pp. 187-191"
landmark: false
---

## Definition

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra with
Cartan involution $\theta$, complexification $\mathfrak g$ and Cartan
involution data as in
[[def-cayley-transform-of-a-theta-stable-cartan-subalgebra]]. Let
$\mathfrak h_0$ be a **maximally compact** $\theta$-stable Cartan subalgebra
([[def-theta-stable-cartan-subalgebra-and-compact-split-parts]]; existence is
guaranteed because the real-root Cayley transforms increase the compact
dimension, [[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]]),
with complexification $\mathfrak h$ and root system $\Phi$. By
[[thm-cayley-transforms-connect-theta-stable-cartans-in-the-classification]]
the Cartan subalgebra $\mathfrak h_0$ has no real roots, so every root
$\alpha\in\Phi$ is imaginary or complex.

**Compatible positive system.** A positive system $\Delta^{+}$ of $\Phi$
([[def-positive-system-and-base-of-simple-roots]]) is **compatible** with
$(\mathfrak h_0,\theta)$ if it is $\theta$-stable, $\theta(\Delta^{+})=\Delta^{+}$;
equivalently, if its base $\Delta$ satisfies $\theta(\Delta)=\Delta$, where
$\theta\alpha=\alpha\circ\theta^{-1}$ on $\mathfrak h^{*}$. Compatible positive
systems exist: since $\mathfrak h_0$ has no real roots, the kernel of a root
$\alpha$ meets $\mathfrak t_0$ in a proper subspace, and a regular element of
$\mathfrak t_0$ defines a positive system that $\theta$ preserves.

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

**Marked root systems.** An **abstract Vogan diagram over $\Phi$** consists of:
a reduced crystallographic root system $\Phi$ in a real vector space $V$
([[def-reduced-crystallographic-euclidean-root-system]]), a $\theta$-type
involution: an isometry $\tau$ of $V$ with $\tau(\Phi)=\Phi$, $\tau^{2}=\mathrm{id}$
and $\tau(\Delta)=\Delta$ for a base $\Delta$ of $\Phi$, and a function
$\varepsilon$ on the $\tau$-fixed roots $\Phi^{\tau}$ with values in $\{\pm1\}$
satisfying the multiplicativity rule

$$\varepsilon(\alpha+\beta)=\varepsilon(\alpha)\varepsilon(\beta)\qquad \text{whenever }\alpha,\beta,\alpha+\beta\in\Phi^{\tau};$$

the associated Dynkin-diagram decoration is the painted set
$P_{\Delta}=\{\alpha\in\Delta^{\tau}:\varepsilon(\alpha)=-1\}$ together with the
involution $\tau|_{\Delta}$. Since the simple roots are linearly independent,
the values of $\varepsilon$ on the $\tau$-fixed simple roots determine a unique
function $\varepsilon$ on the lattice $\mathbb Z\Delta$ they generate, by
$\varepsilon(\sum_i n_i\alpha_i)=\prod_i\varepsilon(\alpha_i)^{n_i}$, and this
function is additive on that lattice; restricted to the $\tau$-fixed roots it
therefore satisfies the multiplicativity rule automatically. Thus an abstract
Vogan diagram is determined by the involution $\tau$ and the painting of the
$\tau$-fixed simple roots. For a triple $(\mathfrak g_0,\mathfrak h_0,\Delta^{+})$
the marking $\varepsilon$ is defined on every imaginary root $\alpha$ by
$\theta X=\varepsilon(\alpha)X$ for $0\ne X\in\mathfrak g_\alpha$
([[def-root-and-root-space-relative-to-a-cartan-subalgebra]]); this is well
defined because an imaginary root space is $\theta$-stable and one-dimensional,
it satisfies the multiplicativity rule because $\theta[X,Y]=[\theta X,\theta Y]$
for $X\in\mathfrak g_\alpha$, $Y\in\mathfrak g_\beta$ with $\alpha,\beta,\alpha+\beta$
imaginary, and it restricts to the painting of the simple imaginary roots. Thus
the diagram of a triple is an abstract Vogan diagram in the sense above.

**Equivalence of abstract Vogan diagrams.** Two abstract Vogan diagrams over
$\Phi$ are **equivalent** if they are related by a finite chain of moves of the
following two kinds:

1. an isomorphism of the data: an isometry $\varphi$ of $V$ with
   $\varphi(\Phi)=\Phi$, $\varphi\tau\varphi^{-1}=\tau'$, $\varepsilon'\circ\varphi=\varepsilon$
   and $\varphi(\Delta)=\Delta'$, which relabels the decorated Dynkin diagrams;
2. a change of base inside one marked root system: replacing the base
   $\Delta$ by another $\tau$-stable base $\Delta'$ of $\Phi$ while keeping
   $\Phi,\tau,\varepsilon$ fixed.

The second kind of move is the reflection/painting move: for two $\tau$-stable
bases of one root system the painted sets are related by the Borel-de
Siebenthal reflection changes of the painting, as do all choices of a
compatible positive system for a fixed maximally compact Cartan subalgebra.
Equivalence of abstract Vogan diagrams is generated by these moves, and
[[thm-vogan-diagram-of-a-real-semisimple-lie-algebra-is-well-defined-up-to-equivalence]]
shows that the Vogan diagram of a real semisimple Lie algebra is determined by
the algebra up to these moves.
