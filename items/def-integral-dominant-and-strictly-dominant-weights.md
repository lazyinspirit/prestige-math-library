---
id: def-integral-dominant-and-strictly-dominant-weights
kind: definition
title: Integral, dominant, and strictly dominant weights
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-coroot-of-a-lie-algebra-root, def-positive-system-and-base-of-simple-roots, def-fundamental-weights, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.2"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §1"
---

## Definition

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and a chosen
positive system whose base is the set of simple roots
$\Delta=\{\alpha_1,\dots,\alpha_r\}$
([[def-positive-system-and-base-of-simple-roots]],
[[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]).
For $\lambda\in\mathfrak h^*$ write
$$\langle\lambda,\alpha_i^\vee\rangle:=\lambda(h_{\alpha_i})$$
for the pairing with the simple coroots
([[def-coroot-of-a-lie-algebra-root]]). Then $\lambda$ is:

* **integral** if $\langle\lambda,\alpha_i^\vee\rangle\in\mathbb Z$ for every $i$;
* **dominant integral** if $\langle\lambda,\alpha_i^\vee\rangle\in\mathbb Z_{\ge0}$ for every $i$;
* **strictly dominant** if $\langle\lambda,\alpha_i^\vee\rangle>0$ for every $i$;
* **antidominant** if $\langle\lambda,\alpha_i^\vee\rangle\le0$ for every $i$.

These notions depend on the chosen base $\Delta$ and hence on the positive
system: the same functional may be dominant for one choice and antidominant for
another. Only the integer and the sign of the finitely many pairings enter, so
the definitions are finite verifications.

**Integral weights are the weight lattice.** By
[[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]
and step (v) of
[[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]] the
simple roots form a basis of $E=\operatorname{span}_{\mathbb R}\Phi$ and the
simple coroots form a basis of $\mathfrak h$, so a functional
$\lambda\in E$ is determined by its pairings with the simple coroots. The
fundamental weights $\omega_1,\dots,\omega_r$ are dual to the simple coroots,
$(\omega_i,\alpha_j^\vee)=\delta_{ij}$
([[def-fundamental-weights]]), and they form a basis of the weight lattice
$P$ ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).
Hence every $\lambda\in E$ has the unique expansion
$$\lambda=\sum_{i=1}^r\langle\lambda,\alpha_i^\vee\rangle\,\omega_i ,$$
so for $\lambda\in E$ integrality is equivalent to $\lambda\in P$. Conversely
an integral $\lambda\in\mathfrak h^*$ automatically lies in $E$: the simple
coroots form a real basis of $\mathfrak h_{\mathbb R}$ by loc. cit., the values
$\lambda(h_{\alpha_i})$ are real, hence $\lambda$ is real valued on
$\mathfrak h_{\mathbb R}$, which is exactly the condition defining $E$ inside
$\mathfrak h^*$. Thus the integral weights are the elements of $P\subseteq E$,
and the dominant integral weights are those elements of $P$ whose
fundamental-weight coefficients are nonnegative integers.  By contrast, the
strictly dominant weights are all elements of $E$ whose fundamental-weight
coefficients are positive real numbers; they need not be integral or belong to
$P$.
