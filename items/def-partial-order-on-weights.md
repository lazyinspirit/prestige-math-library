---
id: def-partial-order-on-weights
kind: definition
title: Root order on weights
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-positive-system-and-base-of-simple-roots, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.1, (8.10)"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §1"
---

## Definition

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra with
Cartan subalgebra $\mathfrak h$ and root system $\Phi$, and let
$\Phi^+$ be a chosen positive system with base
$\Delta=\{\alpha_1,\dots,\alpha_r\}$ of simple roots
([[def-positive-system-and-base-of-simple-roots]],
[[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]).
By
[[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]
$\Delta$ is a basis of $E=\operatorname{span}_{\mathbb R}\Phi$, so every
element of $E$ has unique real coefficients in this basis; the **root lattice**
$Q$ consists of the integral combinations of $\Delta$
([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]). Put
$$Q_+:=\Bigl\{\sum_{i=1}^rn_i\alpha_i:\ n_i\in\mathbb Z_{\ge0}\Bigr\} \subseteq Q .$$

For $\lambda,\mu\in\mathfrak h^*$ write $\mu\le\lambda$ when
$\lambda-\mu\in Q_+$; in words, when $\lambda-\mu$ is a nonnegative integral
combination of the chosen simple roots. This is the **root order** on
$\mathfrak h^*$. In particular $\mu\le\lambda$ forces
$\lambda-\mu\in E$, so comparable functionals lie in the same affine coset
of $E$ in $\mathfrak h^*$; neither functional need itself lie in $E$.

**The root order is a partial order.** Reflexivity holds with $n_i=0$.
Antisymmetry: if $\mu\le\lambda$ and $\lambda\le\mu$, then
$\sum_i(m_i+n_i)\alpha_i=0$ with $m_i,n_i\ge0$, and linear independence of the
simple roots forces $m_i+n_i=0$, so $m_i=n_i=0$ and $\lambda=\mu$.
Transitivity: if $\nu\le\mu$ and $\mu\le\lambda$, then
$\lambda-\nu=(\lambda-\mu)+(\mu-\nu)$ is a sum of two elements of $Q_+$, hence
lies in $Q_+$ and $\nu\le\lambda$. Thus $\le$ is a partial order on
$\mathfrak h^*$; restricted to any set of weights it is a partial order on that
set, and every comparison chain of weights is finite whenever the weight set is
finite, because a strict increase adds a nonzero element of $Q_+$.
