---
id: thm-compact-connected-semisimple-lie-groups-are-classified-up-to-isogeny-by-root-systems
kind: theorem
title: Semisimple compact groups up to isogeny
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part, thm-cartan-killing-classification-of-complex-simple-lie-algebras, thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras, prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group, def-axiom-of-choice, thm-lie-second-fundamental-theorem, thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI §§1–2, Theorem 6.11 and Corollaries 6.20–6.21 (compact forms and their conjugacy)"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter V §8 (compact integration of highest-weight modules)"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Reduced crystallographic root systems classify
compact connected semisimple Lie groups up to finite central isogeny: two such
groups with isomorphic root systems are centrally isogenous, and conversely a
finite central isogeny preserves the Lie algebra and the root system.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, two compact connected semisimple Lie groups $G_1,G_2$ with maximal tori $T_i$ and root systems $\Phi_i=\Phi(G_i,T_i)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the compact-form and integration theory of [L2] and [L3].

[L1] $\Phi_i$ are reduced crystallographic root systems on the semisimple parts of $\operatorname{Lie}(T_i)$ ([[thm-compact-group-roots-form-a-reduced-crystallographic-root-system-on-the-semisimple-part]]).

[L2] Complex simple Lie algebras are classified by connected Dynkin diagrams, equivalently by reduced crystallographic root systems ([[thm-cartan-killing-classification-of-complex-simple-lie-algebras]]).

[L3] The Lie functor from connected simply connected real Lie groups to finite-dimensional real Lie algebras is an equivalence, and integration of a Lie-algebra homomorphism from a simply connected group is unique ([[thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras]], [[thm-lie-second-fundamental-theorem]]).

[L4] For a compact connected semisimple group the character lattice satisfies $Q\subseteq X^*(T)\subseteq P$, and the simply connected compact form has $X^*(T)=P$ ([[prop-root-and-weight-lattice-sandwich-for-a-compact-semisimple-group]]). Every connected Lie group is the quotient of its simply connected integration by a discrete central subgroup ([[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\Phi_1\cong\Phi_2$. Then the complexifications of the semisimple parts of the Lie algebras are isomorphic by [L2]; fix such an isomorphism $\psi$ carrying the root system of $T_1$ to that of $T_2$. [L1, L2]

1.2 Compact real forms exist and are conjugate: for a complex semisimple Lie algebra with root system $\Phi$ one constructs a compact real form as the real span of the vectors $iH_\alpha$, $X_\alpha-X_{-\alpha}$, $i(X_\alpha+X_{-\alpha})$ for normalised Chevalley generators over a basis of simple roots; the resulting form has negative-definite Killing form and is independent of the choices up to conjugacy by an inner automorphism, because two such involutions, after multiplying by a suitable positive automorphism with a positive fourth root, commute and the $\pm1$ eigenspace decomposition would make the invariant form both positive and negative definite unless they coincide. [L2, L3]

2.1 Hence the compact Lie algebras $\operatorname{Lie}(G_1)$ and $\operatorname{Lie}(G_2)$ are isomorphic. Let $G_{sc}$ be their common simply connected compact form, supplied by [L4]. Integrating the Lie-algebra isomorphisms by [L3] gives homomorphisms $p_i:G_{sc}\to G_i$ with isomorphic differentials. Each image is therefore open, hence is all of the connected group $G_i$, and each kernel is discrete and central by [L4]. The kernel is also closed in the compact group $G_{sc}$, so it is a compact discrete space and therefore finite. Thus each $G_i$ is a quotient of the common $G_{sc}$ by a finite central subgroup, and $G_1,G_2$ are centrally isogenous. [L3, L4, step 1.1, step 1.2]

3.1 Conversely a finite central isogeny $G_1\to G_2$ is a smooth homomorphism with finite central kernel, hence an isomorphism of Lie algebras and a local isomorphism of groups, so it identifies the maximal tori and the root data; therefore it preserves the root system. Thus the root system determines the compact connected semisimple group exactly up to finite central isogeny. [A1, L1, step 2.1]∎
