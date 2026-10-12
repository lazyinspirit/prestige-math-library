---
id: thm-nrqm-controlled-dynamics-dollard-channel-completeness
aliases: [nrqm-controlled-dynamics-dollard-channel-completeness]
kind: theorem
domain: mathematics
title: "Dollard channel completeness"
status: draft
origin: pipeline
dependency_level: 11
deps: [thm-nrqm-controlled-dynamics-dollard-integrable-remainder, thm-nrqm-coulomb-onto-radial-continuum-transform, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators, thm-nrqm-orbital-and-spin-sphere-onb, thm-canonical-spectral-type-decomposition, def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces, def-projection-valued-measure, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-dollard-integrable-remainder: mathematical-premise
  thm-nrqm-coulomb-onto-radial-continuum-transform: mathematical-premise
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-canonical-spectral-type-decomposition: mathematical-premise
  def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. D. Dollard, Asymptotic convergence and the Coulomb interaction, Journal of Mathematical Physics 5 (1964) 729-738 (completeness of the modified Coulomb wave operators)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.3 pp. 195-202 and Chapter 12 pp. 245-256 (radial spectral transforms and scattering)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $\gamma>0$,
$H_0=-\Delta$, $H_\gamma=-\Delta-\gamma/|\cdot|$ on $H^2(\mathbb R^3)$, and let
$U_D(t)$ be the Dollard-modified evolution of
[[thm-nrqm-controlled-dynamics-dollard-integrable-remainder]], with modified
wave operators $\Omega_{D\pm}$ (whose existence on all of $L^2$ is established
there). Then:

(a) $\Omega_{D\pm}e^{-isH_0}=e^{-isH_\gamma}\Omega_{D\pm}$ for all $s$;

(b) *Per-channel form.* With the Coulomb angular-radial unitary
$\widehat T_{\gamma,l}$ of [[thm-nrqm-coulomb-onto-radial-continuum-transform]]
and its free analogue $\widehat T_{0,l}$, the operator $\Omega_{D\pm}$ acts in
each angular channel as multiplication by a bounded Borel function $b_{l,\pm}(E)$
of the energy;

(c) *Completeness.* $|b_{l,\pm}(E)|=1$ for a.e. $E>0$, hence
$\operatorname{ran}\Omega_{D\pm}=H_{\mathrm{ac}}(H_\gamma)=H_{\mathrm{c}}(H_\gamma)$
and the modified scattering operator $S_D=\Omega_{D+}^*\Omega_{D-}$ is unitary
on $L^2(\mathbb R^3)$.

The statement covers the exactly Coulombic two-body model with $\gamma>0$; it
does not assert explicit scattering amplitudes or measured cross sections.

## Facts & Assumptions

**Given:** $\gamma>0$, the operators $H_0,H_\gamma$, the modified wave operators $\Omega_{D\pm}$.

[F1] Existence, isometry and the integrable remainder are established in [[thm-nrqm-controlled-dynamics-dollard-integrable-remainder]]; the intertwining $\Omega_{D\pm}e^{-isH_0}=e^{-isH_\gamma}\Omega_{D\pm}$ follows from the same shifted-limit argument as for unmodified Cook wave operators (the extra logarithmic phase satisfies $\log|t+s|-\log|t|\to0$ strongly by dominated convergence) ([[thm-nrqm-controlled-dynamics-dollard-integrable-remainder]], [[def-operator-norm]]).

[F2] Angular channel decomposition: $L^2(\mathbb R^3)=\bigoplus_{l,m}L^2((0,\infty),dr)$ through the polar unitary, and both $H_0$ and $H_\gamma$ are rotationally invariant, so the angular projections commute with the evolution and with the wave operators; the Casimir eigenspaces are preserved ([[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]], [[thm-nrqm-orbital-and-spin-sphere-onb]]).

[F3] Radial continuum transforms: for each $l$ the operators $\widehat T_{0,l},\widehat T_{\gamma,l}$ are unitary from the positive radial spectral subspace onto $L^2((0,\infty),dE)$ and conjugate the radial Hamiltonian to multiplication by $E$; the positive spectrum is purely absolutely continuous, and the negative spectrum consists of finitely many eigenvalues with fixed multiplicity recovered from [[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]] ([[thm-nrqm-coulomb-onto-radial-continuum-transform]], [[thm-canonical-spectral-type-decomposition]], [[def-pure-point-absolutely-continuous-and-singular-continuous-spectral-subspaces]]).

## Proof

1.1 [Channel reduction] By [F2] fix an angular channel $(l,m)$ and let $\Omega_{D\pm}^{(l)}$ be the restriction. Conjugating by the unitaries $\widehat T_{0,l},\widehat T_{\gamma,l}$ of [F3] represents it as a bounded operator on scalar $L^2(dE)$ that commutes with multiplication by every indicator $\mathbf 1_B$ of a Borel set $B$: indeed it intertwines the free and Coulomb energy multiplication operators by the channel form of [F1], and the functional calculus is multiplicity-free in each channel [F3]. A bounded operator on $L^2(dE)$ commuting with all indicator multiplications is multiplication by a bounded Borel function $b_{l,\pm}$, determined a.e. [F1, F2, F3, algebra]

2.1 [Unitarity of the channel multipliers] Since $\Omega_{D\pm}$ is an isometry, $\|b_{l,\pm}g\|_2=\|g\|_2$ for every $g\in L^2(dE)$ in the dense simple-function span, so $|b_{l,\pm}|=1$ a.e.; multiplication by $\overline{b_{l,\pm}}$ is then a bounded inverse and the channel map is onto $L^2((0,\infty),dE)$. [step 1.1, F3, algebra]

3.1 [Assembly] Taking the orthogonal sum over all channels $(l,m)$ and adding the negative-eigenvalue channels (on which the wave operators act trivially in the asymptotic comparison), the channel-wise surjectivity gives $\operatorname{ran}\Omega_{D\pm}=H_{\mathrm{ac}}(H_\gamma)=H_{\mathrm{c}}(H_\gamma)$; the modified scattering operator $S_D=\Omega_{D+}^*\Omega_{D-}$ is a product of two unitaries from $H$ onto the same subspace and hence unitary on $L^2$. [step 2.1, F3, algebra] ∎
