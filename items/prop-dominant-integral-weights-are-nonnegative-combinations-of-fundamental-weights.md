---
id: prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights
kind: proposition
title: Dominant weights in fundamental coordinates
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-integral-dominant-and-strictly-dominant-weights, def-fundamental-weights, prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.2"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §1"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and a chosen base
of simple roots, and let $\omega_1,\dots,\omega_r$ be the fundamental weights
([[def-fundamental-weights]]). For $\lambda\in\mathfrak h^*$ the following are
equivalent:

(i) $\lambda$ is dominant integral
([[def-integral-dominant-and-strictly-dominant-weights]]);

(ii) $\lambda=\sum_{i=1}^rn_i\omega_i$ with integers $n_i\ge0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$ and a chosen base of simple roots $\alpha_1,\dots,\alpha_r$ with fundamental weights $\omega_1,\dots,\omega_r$.

[A1] The Axiom of Choice is assumed; it enters through the root-space theory supplying the real form and the coroot basis of [L1] ([[def-axiom-of-choice]]).

[L1] The simple coroots $h_{\alpha_1},\dots,h_{\alpha_r}$ form a basis of $\mathfrak h$; the simple roots form a basis of $E=\operatorname{span}_{\mathbb R}\Phi$; and the fundamental weights are the dual basis to the simple coroots, $(\omega_i,\alpha_j^\vee)=\delta_{ij}$, and form a basis of the weight lattice $P$ ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[def-fundamental-weights]], [[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]]).

[L2] $\lambda$ is integral when $\langle\lambda,\alpha_i^\vee\rangle=\lambda(h_{\alpha_i})\in\mathbb Z$ for all $i$, dominant integral when all these integers are nonnegative, and every integral functional lies in $E$; for $\lambda\in E$ the expansion in the dual basis is $\lambda=\sum_i\langle\lambda,\alpha_i^\vee\rangle\omega_i$ ([[def-integral-dominant-and-strictly-dominant-weights]]).

## Proof

**Proof technique:** direct.

1.1 Assume (i): then by [L2] $\lambda\in E$ and $n_i:=\langle\lambda,\alpha_i^\vee\rangle\in\mathbb Z_{\ge0}$ for every $i$, so the expansion $\lambda=\sum_in_i\omega_i$ of [L2] exhibits $\lambda$ in the form (ii). [A1, L2]

1.2 Conversely assume (ii), say $\lambda=\sum_in_i\omega_i$ with $n_i\in\mathbb Z_{\ge0}$; then $\lambda\in P\subseteq E$ by [L1], and by the duality $(\omega_i,\alpha_j^\vee)=\delta_{ij}$ of [L1] we get $\langle\lambda,\alpha_j^\vee\rangle=\sum_in_i\delta_{ij}=n_j\in\mathbb Z_{\ge0}$ for each $j$. [L1]

2.1 By [L2] the pairings of step 1.2 are exactly the values that make $\lambda$ dominant integral; hence (ii) implies (i), and steps 1.1 and 2.1 prove the equivalence. [L2, step 1.1, step 1.2] ∎
