---
id: thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining
aliases: [nrqm-controlled-dynamics-cook-isometry-and-intertwining]
kind: theorem
domain: mathematics
title: "Cook isometry and intertwining"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-controlled-dynamics-cook-domain-criterion, def-infinitesimal-generator-of-a-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-cook-domain-criterion: mathematical-premise
  def-infinitesimal-generator-of-a-unitary-group: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 12 pp. 245-256 (wave operators, intertwining and Cook's criterion)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Scattering Theory pp. 209-211 (the scattering operator as the intertwining object)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]) and adopt all
hypotheses of
[[thm-nrqm-controlled-dynamics-cook-domain-criterion]], writing its Hilbert
space as $\mathcal H$ and renaming its operators $A_0,A$ as $H_0,H$: these
are self-adjoint operators on $\mathcal H$ with
$D(H_0)\subseteq D(H)$, $D\subseteq D(H_0)$ dense and $e^{-itH_0}$-invariant,
$\int_{\text{half-line}}\|(H-H_0)e^{-itH_0}\psi\|dt<\infty$ for $\psi\in D$,
$t\mapsto(H-H_0)e^{-itH_0}\psi$ norm-continuous for each $\psi\in D$, and
$\Omega_\pm$ the extensions constructed there. Then:

(a) *Intertwining.* $\Omega_\pm e^{-isH_0}=e^{-isH}\Omega_\pm$ for all
$s\in\mathbb R$, as bounded operators on $\mathcal H$.

(b) *Domain and commutation.* $\Omega_\pm D(H_0)\subseteq D(H)$ and
$H\Omega_\pm\psi=\Omega_\pm H_0\psi$ for every $\psi\in D(H_0)$.

(c) *Range invariance.* The closed subspace $\operatorname{ran}\Omega_\pm$
is invariant under $e^{-isH}$ for every $s$, and
$e^{-isH}|_{\operatorname{ran}\Omega_\pm}
=\Omega_\pm e^{-isH_0}\Omega_\pm^{-1}$ in the sense of the isometric
identification $\Omega_\pm:\mathcal H\to\operatorname{ran}\Omega_\pm$.

(d) $\Omega_\pm^*\Omega_\pm=I$, $\|\Omega_\pm\eta\|=\|\eta\|$ for every
$\eta\in\mathcal H$; no surjectivity onto $\mathcal H$ and no identification of
$\operatorname{ran}\Omega_\pm$ with an absolutely continuous subspace is
asserted.

## Facts & Assumptions

**Given:** the data and conclusions of
[[thm-nrqm-controlled-dynamics-cook-domain-criterion]]; $s\in\mathbb R$; vectors
$\psi\in D$ and $\eta\in D(H_0)$.

[F1] $\Omega_\pm$ are bounded linear isometries extending the full strong limits on all vectors; $\Omega_\pm^*\Omega_\pm=I$ and $\|\Omega_\pm\|\le1$ ([[thm-nrqm-controlled-dynamics-cook-domain-criterion]]). Their norm is exactly $1$ when the Hilbert space is nonzero, since the norm of every unit vector is preserved, and exactly $0$ on the zero Hilbert space.

[F2] The explicit autonomous construction and adjoint-testing generator characterization in [[thm-nrqm-controlled-dynamics-cook-domain-criterion]] give strongly continuous groups on arbitrary Hilbert spaces under CC, with $\eta\in D(A)$ exactly when $(e^{-itA}\eta-\eta)/t$ has a strong limit, then equal to $-iA\eta$. These are the full generator domains in [[def-infinitesimal-generator-of-a-unitary-group]].

## Proof

1.1 [Correct time shift on the full strong limits] For any real $s,t$, the two group laws give $F(t)e^{-isH_0}=e^{-isH}F(t+s)$, because both sides equal $e^{itH}e^{-i(t+s)H_0}$. The criterion gives full strong limits on every vector, and a fixed time shift preserves either infinite-time direction. Taking $t\to+\infty$ or $t\to-\infty$ and using boundedness of the fixed group factors therefore gives $\Omega_\pm e^{-isH_0}=e^{-isH}\Omega_\pm$ on the whole Hilbert space. This proves (a). [F1, F2, given, algebra]

2.1 [Domain invariance and commutation] Fix $\eta\in D(H_0)$ and consider the difference quotient $\frac1t\bigl(e^{-itH}\Omega_+\eta-\Omega_+\eta\bigr)$. By step 1.1 this equals $\Omega_+\frac1t\bigl(e^{-itH_0}\eta-\eta\bigr)$; since $\eta\in D(H_0)$, the quotient converges to $\Omega_+(-iH_0\eta)$ by [F2] and [F1]. Applying [F2] to self-adjoint $H$ shows $\Omega_+\eta\in D(H)$ and $-iH\Omega_+\eta=-i\Omega_+H_0\eta$, that is $H\Omega_+\eta=\Omega_+H_0\eta$. The argument for $\Omega_-$ is identical. [step 1.1, F1, F2, algebra]

2.2 [Range invariance] Fix either sign. For $\eta=\Omega_\pm\psi\in\operatorname{ran}\Omega_\pm$ and $s\in\mathbb R$, step 1.1 gives $e^{-isH}\eta=\Omega_\pm(e^{-isH_0}\psi)$, which lies in $\operatorname{ran}\Omega_\pm$; hence the range is invariant, and the displayed operator identity holds on the range because $\Omega_\pm$ is injective with $\Omega_\pm^{-1}\eta=\psi$ on the range. [step 1.1, F1, algebra]

3.1 [Conclusion] Claims (a), (b), (c) are steps 1.1, 2.1, 2.2, and (d) is part of [F1]. No surjectivity or absolute-continuity statement has been used. [step 1.1, step 2.1, step 2.2, F1] ∎

## Remarks

For a bounded isometry $\Omega$, convergence $F(t)\psi\to\Omega\psi$ implies $\Omega F(t)\psi-F(t)\psi\to\Omega^2\psi-\Omega\psi$. Isometry alone does not make this limit zero; no such assertion is used in the proof.
