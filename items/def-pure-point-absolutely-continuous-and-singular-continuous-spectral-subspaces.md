---
id: def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces
kind: definition
title: "Pure point, absolutely continuous and singular continuous spectral subspaces"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-unbounded-integral-against-a-pvm, def-atom-of-a-measure-on-r, def-mutually-singular-measures, def-absolutely-continuous-with-respect-to-a-positive-measure, thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition, def-axiom-of-choice, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-resolvent-and-spectrum-of-a-closed-unbounded-operator]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 3.3, (3.86)-(3.88), pp.117-119"
---

## Definition

Assume the Axiom of Choice. Let $T$ be a self-adjoint operator on $H$. If
$H\ne\{0\}$, let $E$ be its spectral projection valued measure on $\mathbb R$
from [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]; if
$H=\{0\}$, let $E(B)=0$ for every Borel $B$, the unique PVM on the zero space.
In either case put $E_x(B)=\langle E(B)x,x\rangle$
([[def-unbounded-integral-against-a-pvm]]). Call a finite Borel measure on
$\mathbb R$ **purely atomic** (equivalently, **discrete**) when it is
concentrated on a countable subset of $\mathbb R$. Then
$$H_{\mathrm{pp}}=\{x\in H:\ E_x\text{ is purely atomic}\},$$
$$H_{\mathrm{ac}}=\{x\in H:\ E_x\ll\lambda\ \text{(Lebesgue measure)}\},$$
$$H_{\mathrm{sc}}=\{x\in H:\ E_x\text{ is atomless and singular with respect to }\lambda\},$$
where atoms are as in [[def-atom-of-a-measure-on-r]], absolute continuity is
that of [[def-absolutely-continuous-with-respect-to-a-positive-measure]] and
singularity that of [[def-mutually-singular-measures]].

**Well-definedness.** Every finite Borel measure on $\mathbb R$ has a unique
decomposition into a discrete (hence, by the convention above, purely atomic),
an absolutely continuous and an atomless singular part
([[thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition]]), and the three classes of nonzero measures are mutually
exclusive; hence each $x$ either satisfies one of the three defining
conditions or none, and the zero vector lies in all three subspaces. Whether
the three subspaces do cover $H$ and are closed is not part of this definition
and is the content of
the canonical spectral type decomposition theorem below.

**Conventions.** For each type one writes
$\sigma_{\mathrm{type}}(T)=\sigma(T|_{H_{\mathrm{type}}})$ for the restriction
of $T$ to the closed invariant subspace $H_{\mathrm{type}}$ constructed in
the canonical spectral type decomposition theorem below; these restrictions are
self-adjoint there. The point spectrum is not $\sigma_{\mathrm{pp}}$:
$\sigma_{\mathrm{pp}}(T)$ is the closure of the set of eigenvalues of $T$,
and the three sets $\sigma_{\mathrm{pp}},\sigma_{\mathrm{ac}},
\sigma_{\mathrm{sc}}$ may overlap, so they do not partition $\sigma(T)$.
