---
id: thm-nrqm-controlled-dynamics-cook-isometry-and-intertwining
aliases: [nrqm-controlled-dynamics-cook-isometry-and-intertwining]
kind: theorem
domain: mathematics
title: "Cook isometry and intertwining"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-controlled-dynamics-cook-domain-criterion, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, thm-stone-one-parameter-unitary-groups, def-infinitesimal-generator-of-a-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-cook-domain-criterion: mathematical-premise
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  thm-stone-one-parameter-unitary-groups: mathematical-premise
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
hypotheses and notation of
[[thm-nrqm-controlled-dynamics-cook-domain-criterion]]: $H_0,H$ self-adjoint with
$D(H_0)\subseteq D(H)$, $D\subseteq D(H_0)$ dense and $e^{-itH_0}$-invariant,
$\int_{\text{half-line}}\|(H-H_0)e^{-itH_0}\psi\|dt<\infty$ for $\psi\in D$, and
$\Omega_\pm$ the extensions constructed there. Then:

(a) *Intertwining.* $\Omega_\pm e^{-isH_0}=e^{-isH}\Omega_\pm$ for all
$s\in\mathbb R$, as bounded operators on $H$.

(b) *Domain and commutation.* $\Omega_\pm D(H_0)\subseteq D(H)$ and
$H\Omega_\pm\psi=\Omega_\pm H_0\psi$ for every $\psi\in D(H_0)$.

(c) *Range invariance.* The closed subspace $\operatorname{ran}\Omega_\pm$
is invariant under $e^{-isH}$ for every $s$, and
$e^{-isH}|_{\operatorname{ran}\Omega_\pm}
=\Omega_\pm e^{-isH_0}\Omega_\pm^{-1}$ in the sense of the isometric
identification $\Omega_\pm:H\to\operatorname{ran}\Omega_\pm$.

(d) $\Omega_\pm^*\Omega_\pm=I$, $\|\Omega_\pm\eta\|=\|\eta\|$ for every
$\eta\in H$; no surjectivity onto $H$ and no identification of
$\operatorname{ran}\Omega_\pm$ with an absolutely continuous subspace is
asserted.

## Facts & Assumptions

**Given:** the data and conclusions of
[[thm-nrqm-controlled-dynamics-cook-domain-criterion]]; $s\in\mathbb R$; vectors
$\psi\in D$ and $\eta\in D(H_0)$.

[F1] $\Omega_\pm$ are bounded linear isometries extending the limits on $D$; $\Omega_\pm^*\Omega_\pm=I$ and $\|\Omega_\pm\|=1$ ([[thm-nrqm-controlled-dynamics-cook-domain-criterion]]).

[F2] Strong continuity and generator identification: for every self-adjoint $A$, $e^{-itA}\to I$ strongly as $t\to0$, and $\eta\in D(A)$ if and only if $\lim_{t\to0}\frac1t(e^{-itA}\eta-\eta)$ exists, in which case the limit is $-iA\eta$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[thm-stone-one-parameter-unitary-groups]], [[def-infinitesimal-generator-of-a-unitary-group]]).

[F3] $\Omega_\pm$ commute with the limits: $\|\Omega_\pm(F(t)\psi)-F(t)\psi\|\to0$ if $\|F(t)\psi-\Omega_\pm\psi\|\to0$, by isometry ([[thm-nrqm-controlled-dynamics-cook-domain-criterion]]).

## Proof

1.1 [Shifting the limit] Fix $\psi\in D$ and $s\in\mathbb R$. For $t\to+\infty$, $F(t)e^{-isH_0}\psi=e^{itH}e^{-i(t+s)H_0}\psi=e^{isH}\bigl[e^{i(t-s)H}e^{-itH_0}\psi\bigr]=e^{isH}F(t-s)\psi$, because $e^{-isH_0}$ and the group laws give $e^{-i(t+s)H_0}=e^{-isH_0}e^{-itH_0}$ and $e^{itH}=e^{isH}e^{i(t-s)H}$. Since $e^{isH}$ is a bounded operator and $F(t-s)\psi\to\Omega_-\psi$ or $\Omega_+\psi$ as $t-s\to\pm\infty$, the limit of $F(t)e^{-isH_0}\psi$ as $t\to+\infty$ is $e^{isH}\Omega_+\psi$. On the other hand, by [F1] applied to the vector $e^{-isH_0}\psi\in D$, the limit is $\Omega_+e^{-isH_0}\psi$. Hence $\Omega_+e^{-isH_0}\psi=e^{isH}\Omega_+\psi$ for $\psi\in D$; replacing $t$ by $-t$ gives $\Omega_-e^{-isH_0}\psi=e^{isH}\Omega_-\psi$. Both sides are bounded in $\psi$, and $D$ is dense, so the identities extend to all of $H$, which is (a) after relabelling $s\mapsto -s$ (equivalently, apply (a) with $s$ replaced by $-s$). [F1, F3, given, algebra]

2.1 [Domain invariance and commutation] Fix $\eta\in D(H_0)$ and consider the difference quotient $\frac1t\bigl(e^{-itH}\Omega_+\eta-\Omega_+\eta\bigr)$. By step 1.1 this equals $\Omega_+\frac1t\bigl(e^{-itH_0}\eta-\eta\bigr)$; since $\eta\in D(H_0)$, the quotient converges to $\Omega_+(-iH_0\eta)$ by [F2] and [F1]. Applying [F2] to self-adjoint $H$ shows $\Omega_+\eta\in D(H)$ and $-iH\Omega_+\eta=-i\Omega_+H_0\eta$, that is $H\Omega_+\eta=\Omega_+H_0\eta$. The argument for $\Omega_-$ is identical. [step 1.1, F1, F2, algebra]

2.2 [Range invariance] For $\eta=\Omega_+\psi\in\operatorname{ran}\Omega_+$ and $s\in\mathbb R$, step 1.1 gives $e^{-isH}\eta=\Omega_+(e^{-isH_0}\psi)$, which lies in $\operatorname{ran}\Omega_+$; hence the range is invariant, and the displayed operator identity holds on the range because $\Omega_+$ is injective with $\Omega_+^{-1}\eta=\psi$ on the range. [step 1.1, F1, algebra]

3.1 [Conclusion] Claims (a), (b), (c) are steps 1.1, 2.1, 2.2, and (d) is part of [F1]. No surjectivity or absolute-continuity statement has been used. [step 1.1, step 2.1, step 2.2, F1] ∎
