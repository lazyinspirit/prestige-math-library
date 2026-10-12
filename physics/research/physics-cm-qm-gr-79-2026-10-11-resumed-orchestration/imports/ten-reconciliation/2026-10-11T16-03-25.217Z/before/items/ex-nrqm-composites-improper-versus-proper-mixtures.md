---
id: ex-nrqm-composites-improper-versus-proper-mixtures
aliases:
- nrqm-composites-improper-versus-proper-mixtures
kind: example
domain: physics
title: 'Improper and proper mixtures with the same reduced preparation: the singlet
  marginal versus a fair random mixture'
status: draft
origin: session
dependency_level: 14
deps:
- def-countable-choice
- def-nrqm-composites-framework-composite-systems-and-local-readouts
- def-nrqm-composites-framework-reduced-preparations
- def-nrqm-composites-separable-and-entangled-states
- def-nrqm-state-geometry-framework-state-space
- lem-nrqm-composites-density-and-scalar-spectral-probability
- lem-nrqm-composites-hilbert-tensor-construction
- lem-nrqm-composites-rank-one-operator-calculus
- lem-nrqm-composites-separable-partial-trace
- prop-nrqm-orbital-and-spin-finite-spin-matrices
- pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws
- pthm-nrqm-composites-local-readout-laws-and-reduced-preparations
- pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement
- texp-nrqm-composites-singlet-correlations
- thm-nrqm-orbital-and-spin-tensor-spin-composition
- thm-trace-class-is-a-two-sided-banach-operator-ideal
dependency_roles:
  def-countable-choice: mathematical-premise
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-composites-framework-reduced-preparations: formulation-prerequisite
  def-nrqm-composites-separable-and-entangled-states: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-separable-partial-trace: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws: physical-result
  pthm-nrqm-composites-local-readout-laws-and-reduced-preparations: physical-result
  pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement: physical-result
  texp-nrqm-composites-singlet-correlations: physical-result
  thm-nrqm-orbital-and-spin-tensor-spin-composition: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: 'An exact comparison in the declared framework between the reduced
  preparation of the two-factor spin singlet and a fair classical randomization of
  the two spin-up and spin-down preparations of one factor: the two density operators
  coincide, the composite descriptions differ, and the joint directional correlations
  distinguish them. The example asserts no measured correlation, no experiment and
  no empirical fact, and it makes no claim about any interpretation of the mixture.'
sources:
  references:
  - title: 'J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.3
      and Section 6.3.1, printed pages 121-127 (PDF pages 129-135): density operators,
      reduced density operators and the loss of information in a reduction'
    url: https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf
  - title: 'B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 ''Multiparticle
      States and Tensor Products'', Sections 2 and 5, chapter pages 8-9 and 16-19:
      the singlet, partial measurement, and the competing distribution of definite-spin
      pairs'
    url: https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf
verification:
  precheck: pass
---
## Example

Adopt the declared internal-factor composite of two spin-half factors and the
singlet preparation $\rho=T_{\Psi,\Psi}$ of
[[texp-nrqm-composites-singlet-correlations]], with $V=\mathbb C^{2}$,
orthonormal basis $(e_{+},e_{-})$, spin matrices $S_{i}=\hbar J_{i}$ and
$S_{n}=\sum_{i}n_{i}S_{i}$ for unit $n\in\mathbb R^{3}$
([[prop-nrqm-orbital-and-spin-finite-spin-matrices]],
[[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]]), and let
[[def-nrqm-composites-framework-reduced-preparations]] and
[[pthm-nrqm-composites-schmidt-reduction-and-pure-entanglement]] supply the
reading of the reduced preparations. Assume the Axiom of Countable Choice
([[def-countable-choice]]). Declare:
 
(a) the **improper mixture** of factor $A$: the reduced preparation
$\rho_{A}=\operatorname{Tr}_{B}\rho$ of the singlet;
 
(b) the **proper mixture** of factor $A$: the declared preparation in which a
fair classical randomization selects the pure preparation $T_{e_{+},e_{+}}$
with probability $\tfrac12$ and $T_{e_{-},e_{-}}$ with probability $\tfrac12$,
so that
$$\rho_{\mathrm{proper}}:=\tfrac12T_{e_{+},e_{+}}+\tfrac12T_{e_{-},e_{-}};$$
 
(c) the **EPR-type product mixture** of the composite: the declared
preparation
$$M:=\tfrac12T_{e_{+}\otimes e_{-},\,e_{+}\otimes e_{-}}+\tfrac12T_{e_{-}\otimes e_{+},\,e_{-}\otimes e_{+}},$$
in which each factor carries a definite spin along the $z$-axis and the two
spins are opposite.
 
Then:
 
(i) $\rho_{A}=\rho_{\mathrm{proper}}=\tfrac12 I$ and the marginals of $M$ are
$\operatorname{Tr}_{B}M=\tfrac12I=\operatorname{Tr}_{A}M$: the two
preparations of factor $A$ and the marginal of $M$ are the same density
operator, and $\rho$ and $M$ are not the same composite preparation;
 
(ii) for unit directions $a,b$, writing $a_{3}=a\cdot e_{z}$ and
$b_{3}=b\cdot e_{z}$ with $e_{z}$ the direction of the $z$-axis of the basis
$(e_{+},e_{-})$, the directional correlation of the singlet is
$\mathbb E_{\rho}(a,b)=-\cos\theta=-a\cdot b$ while that of the product mixture
is
$$\mathbb E_{M}(a,b)=-\tfrac12a_{3}b_{3}-\tfrac12a_{3}b_{3}=-a_{3}b_{3};$$
in particular $\mathbb E_{\rho}(z,z)=\mathbb E_{M}(z,z)=-1$ but
$\mathbb E_{\rho}(x,x)=-1$ and $\mathbb E_{M}(x,x)=0$ for the orthogonal
direction $x$;
 
(iii) $M$ is a convex combination of the two pure product states
$T_{e_{+}\otimes e_{-},\,\cdot}$ and $T_{e_{-}\otimes e_{+},\,\cdot}$, hence a
separable preparation in the sense of clause (b) of
[[def-nrqm-composites-separable-and-entangled-states]], while $\rho$ is a
non-product pure preparation; and every local readout law of factor $A$ is
the same in $\rho$, in $\rho_{\mathrm{proper}}$ extended by any preparation of
$B$, and in $M$, because all three have the reduced preparation $\tfrac12I$ on
$A$;
 
(iv) consequently the density operator $\tfrac12I$ alone does not determine
whether the preparation of factor $A$ arises as the reduction of an entangled
composite preparation (the improper case) or from a classical randomization
of factor preparations (the proper case): the two cases are distinguished by
the joint statistics with the other factor, not by any local statistic of
$A$.
 
The comparison is a conditional computation of the declared framework; it
asserts no measured correlation, no experiment and no empirical fact.

## Verification

**Given:** The internal-factor composite $V\widehat\otimes V$; the singlet preparation $\rho$ and its reductions; the proper mixture $\rho_{\mathrm{proper}}$; the product mixture $M$; unit directions $a,b$; the Axiom of Countable Choice.

[L1] **Singlet data.** $\rho_{A}=\rho_{B}=\frac12I$ and $\mathbb E_{\rho}(a,b)=-a\cdot b$ for all unit $a,b$ ([[texp-nrqm-composites-singlet-correlations]] clauses (a), (c)).

[L2] **Product reductions and local laws.** For unit $x,y$ one has $\operatorname{Tr}_{B}T_{x\otimes y,x\otimes y}=T_{x,x}$ and $\operatorname{Tr}_{A}T_{x\otimes y,x\otimes y}=T_{y,y}$; the local directional laws read $\mu^{S_{n}}_{\psi}(\{\pm\hbar/2\})=\frac12(1\pm\langle(n\cdot\sigma)\psi,\psi\rangle)$ on $V$ ([[lem-nrqm-composites-separable-partial-trace]] clause (c), [[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] clause (c), [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e)).

[L3] **Local readout law.** If two preparations of the composite have the same reduced preparation on $A$, then every local readout law of $A$ agrees in the two preparations ([[pthm-nrqm-composites-local-readout-laws-and-reduced-preparations]] clause (a)).

[L4] **Mixtures and separability.** A convex combination $\sum_{j}w_{j}T_{\Psi_{j},\Psi_{j}}$ of pure product preparations with weights $w_{j}\ge0$, $\sum_{j}w_{j}=1$ is a preparation of the composite and a separable state in the sense of clause (b) of [[def-nrqm-composites-separable-and-entangled-states]]; outcome laws are affine in the preparation ([[def-nrqm-composites-separable-and-entangled-states]] clause (c), [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (b)).

[L5] The density expansion into an at most countable positive orthonormal rank-one sum and trace-norm completeness are [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a) and [[thm-trace-class-is-a-two-sided-banach-operator-ideal]] clause 3. Partial trace is trace-norm continuous by [[lem-nrqm-composites-separable-partial-trace]] clause (a).

**Proof technique:** direct; compute the two marginals and the two correlation functions from the product structure, and compare the local readout laws through the common reduced preparation.

**Given:** The data of the statement and [L1]-[L4].

1.1 [Marginals] By [L2], $\operatorname{Tr}_{B}T_{e_{+}\otimes e_{-},e_{+}\otimes e_{-}}=T_{e_{+},e_{+}}$ and $\operatorname{Tr}_{B}T_{e_{-}\otimes e_{+},e_{-}\otimes e_{+}}=T_{e_{-},e_{-}}$, so the linearity of the partial trace gives $\operatorname{Tr}_{B}M=\frac12T_{e_{+},e_{+}}+\frac12T_{e_{-},e_{-}}=\frac12I$; likewise $\operatorname{Tr}_{A}M=\frac12I$. Together with $\rho_{A}=\frac12I$ from [L1] and $\rho_{\mathrm{proper}}=\frac12I$ by definition this is (i). [given, L1, L2, algebra]

1.2 [Correlations of the product mixture] By [L2] and [L4] the joint outcome law of the local measurements of $S_{a}\otimes I$ and $I\otimes S_{b}$ in $M$ is the weighted average of the two product laws, so $\mathbb E_{M}(a,b)=\frac12\langle(a\cdot\sigma)e_{+},e_{+}\rangle\langle(b\cdot\sigma)e_{-},e_{-}\rangle+\frac12\langle(a\cdot\sigma)e_{-},e_{-}\rangle\langle(b\cdot\sigma)e_{+},e_{+}\rangle=\frac12(a_{3})(-b_{3})+\frac12(-a_{3})(b_{3})=-a_{3}b_{3}$; with [L1] this is (ii). [given, L1, L2, L4, algebra]

2.1 [Local indistinguishability and separability] Let $\tau_B$ be any preparation of $B$. Its density expansion is $\tau_B=\sum_jq_jT_{z_j,z_j}$ in trace norm, with unit $z_j$, $q_j>0$ and $\sum_jq_j=1$, by [L5]. The independent extension of the proper mixture is the trace-norm sum $\Omega=\sum_j(q_j/2)(T_{e_+\otimes z_j,e_+\otimes z_j}+T_{e_-\otimes z_j,e_-\otimes z_j})$: every summand is positive, and its trace norm equals its nonnegative trace, so the series converges with trace one by [L4], [L5]. The rank-one reduction formula [L2] and trace-norm continuity [L5] give $\operatorname{Tr}_B\Omega=(T_{e_+,e_+}+T_{e_-,e_-})/2=I_A/2$ and $\operatorname{Tr}_A\Omega=\tau_B$, which need not equal $I_B/2$. Since $\rho$ and $M$ also have reduction $I_A/2$ by [L1] and step 1.1, [L3] proves all local-$A$ readout laws agree for $\rho$, $M$ and this arbitrary-$B$ extension. The displayed convex decomposition makes $M$ separable by [L4], while $\rho$ is non-product and pure by [L1] and the purity criterion. Their joint laws differ at $(x,x)$ by step 1.2. This proves (iii) and (iv) with the full arbitrary-extension claim. [given, L1, L2, L3, L4, L5, step 1.1, step 1.2, algebra]

3.1 [Assembly] Step 1.1 is (i), step 1.2 is (ii), step 2.1 is (iii) and (iv); only the declared framework readings and the cited computations were used, so no measured correlation or empirical fact is asserted. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **The reduction is not an ensemble decomposition.** Nothing in the example
  presents $\rho_{A}=\frac12I$ as produced by a classical randomization; the
  reduction is the partial trace of the composite preparation, and the
  randomization of the proper mixture is a separate declared preparation of
  factor $A$ that happens to assign the same density operator.
- **Same local state, different composite.** The comparison is a precise
  instance of the general fact that the reduced preparation determines all
  local statistics of its own factor while the joint statistics depend on the
  composite preparation.
