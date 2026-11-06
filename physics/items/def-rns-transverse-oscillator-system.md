---
id: def-rns-transverse-oscillator-system
kind: definition
title: RNS Transverse Oscillator Fock System
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - post-rns-flat-worldsheet-model
  - pthm-rns-flat-action-variation
  - def-rns-spin-structures-and-sectors
  - def-st-bosonic-matter-oscillator-modes
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
  pthm-rns-flat-action-variation: physical-result
  def-rns-spin-structures-and-sectors: formulation-prerequisite
  def-st-bosonic-matter-oscillator-modes: formulation-prerequisite
physical_scope: "Algebraic light-cone transverse RNS Fock modules at fixed momentum in a chart with p^+ nonzero; no proof that every momentum lies in that chart, no BRST cohomology, positivity theorem for covariant states, or interacting spectrum is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.3, printed pp. 131–136, NS/R mode expansions; §§6.4.3–6.6, pp. 137–143, transverse light-cone constraints and spectra."
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§§2.2.1–2.2.4 and §3.1.4, printed pp. 35–40 and 60–61 (PDF pp. 56–61 and 81–82), fermion sectors and open-string mass shell."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For $D\ge3$, use the target metric $\eta=\operatorname{diag}(-,+,\ldots,+)$ and momentum convention of the bosonic matter oscillator definition: $p=(p^\mu)\in\mathbb R^{1,D-1}$ is a contravariant target momentum with dimension $L^{-1}$. Work at fixed $p$ in the light-cone chart with $p^+=(p^0+p^{D-1})/\sqrt2\ne0$, and put $i=1,\ldots,D-2$. For open strings impose NN boundary conditions in every target direction; for closed strings use independent left and right mode systems. On the finite-particle algebraic Fock domain, transverse bosonic modes obey
$$[\alpha_m^i,\alpha_n^j]=m\delta^{ij}\delta_{m+n,0}I,$$
and the transverse fermions obey
$$\{\psi_r^i,\psi_s^j\}=\delta^{ij}\delta_{r+s,0}I,$$
with $r\in\mathbb Z+\tfrac12$ in NS and $r\in\mathbb Z$ in R. Closed strings have commuting barred copies. Positive modes annihilate the selected sector vacuum; R zero modes act in a chosen representation of the Euclidean Clifford algebra on $D-2$ transverse directions. No target-space spin representation is constructed here.

Use the open/closed bosonic zero-mode normalization $\alpha_0^\mu=\sqrt{2\alpha'}p^\mu$ for open strings and $\alpha_0^\mu=\widetilde\alpha_0^\mu=\sqrt{\alpha'/2}\,p^\mu$ for closed strings. Define the nonnegative weighted oscillator level operator for the open system by
$$N=N_B+N_F,\qquad N_B=\sum_{i=1}^{D-2}\sum_{n\ge1}\alpha_{-n}^i\alpha_n^i,$$
so the number operator $\alpha_{-n}^i\alpha_n^i/n$ at mode $n$ contributes level $n$, and
$$N_F=\sum_i\sum_{r>0}r\,\psi_{-r}^i\psi_r^i.$$
In R the zero modes do not contribute to $N_F$. The sums act finitely on each finite-particle vector. For closed strings define $N_L=N_{B,L}+N_{F,L}$ and $N_R=N_{B,R}+N_{F,R}$ by these same formulas applied separately to the left and right mode families. The normal-ordering constant is not included in any level operator and is specified separately below.

For the selected light-cone Hamiltonian prescription, the unregularized open-string vacuum terms are $A_B=\frac{D-2}{2}\sum_{n\ge1}n$ and $A_F=-\frac{D-2}{2}\sum_{r>0}r$, where $r$ ranges over positive half-integers in NS and positive integers in R. For closed strings define $A_{B,L},A_{F,L}$ and $A_{B,R},A_{F,R}$ by the same sums for the corresponding left and right mode families, and set $A_L=A_{B,L}+A_{F,L}$ and $A_R=A_{B,R}+A_{F,R}$. The divergent sums are assigned zeta values as a stated regularization prescription; a separate lemma proves the needed continuation values. This prescription is part of the quantization convention, not an empirical measurement.

Impose the residual chiral zero-mode constraints in this gauge. For an open string $L_0^{\rm lc}=\frac12\alpha_0\cdot\alpha_0+N+A_B+A_F=0$; for a closed string impose both $L_0^{\rm lc}=\frac12\alpha_0^2+N_L+A_L=0$ and $\widetilde L_0^{\rm lc}=\frac12\widetilde\alpha_0^2+N_R+A_R=0$. These are the gauge-fixed free-string state constraints, not BRST cohomology claims.

## Definition references

[[post-rns-flat-worldsheet-model]]

[[pthm-rns-flat-action-variation]]

[[def-st-bosonic-matter-oscillator-modes]]

[[def-rns-spin-structures-and-sectors]]

[[lem-rns-hurwitz-zeta-at-minus-one]]

[Timo Weigand, *Introduction to String Theory*, Chapters 6.3–6.6](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §§2.2 and 3.1.4](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

## Remarks

The commutator and open/closed zero-mode factors agree with [[def-st-bosonic-matter-oscillator-modes]]; the fermion modes use the RNS sector convention in [[def-rns-spin-structures-and-sectors]]. The finite-particle Fock space is a chosen quantization convention. This definition does not assert the BRST/no-ghost identification of that space with a covariant physical-state space.
