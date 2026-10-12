---
id: texp-nrqm-bell-singlet-arrangement-contrast
aliases: [nrqm-bell-singlet-arrangement-contrast]
kind: thought-experiment
domain: physics
title: "The singlet arrangement: directional sign tables, CHSH value 2 sqrt 2 and the failure of local-response models at violating settings"
status: draft
origin: session
dependency_level: 13
deps: [def-nrqm-bell-declared-spin-arrangement, def-nrqm-bell-binary-correlation-models, def-nrqm-bell-local-response-representation, lem-nrqm-bell-singlet-pairings, thm-nrqm-bell-local-representations-satisfy-chsh, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-composites-density-and-scalar-spectral-probability, pthm-nrqm-composites-local-instruments-and-no-signalling, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-bell-declared-spin-arrangement: formulation-prerequisite
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  def-nrqm-bell-local-response-representation: mathematical-premise
  lem-nrqm-bell-singlet-pairings: mathematical-premise
  thm-nrqm-bell-local-representations-satisfy-chsh: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  pthm-nrqm-composites-local-instruments-and-no-signalling: physical-result
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A conditional model computation for the declared spin correlation arrangement in the singlet preparation of two declared spin-half factors: the four directional sign tables, their correlations, the CHSH value at the specified directions, the setting-independent marginals and the failure of local-response representability at settings whose CHSH value exceeds 2. The item is a thought experiment of the declared framework; it asserts no spatial separation, no temporal order, no relativistic consideration, no apparatus, no detection and no measured correlation, and it excludes only the declared class of local-response models of these tables, not hidden-variable theories in general."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 6.1.4, printed pages 111-115 (PDF pages 119-123): the electron-positron singlet, the correlation -a.b, the inequality of Bell for a setting-independent response model and its violation by the singlet"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Section 5, chapter pages 16-19: the singlet state, the probabilities P(a,b), the EPR-type definite-spin ensemble and the Bell inequality P(a,b) <= P(a,c) + P(c,b) that it violates"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section II.C.1.a, PDF pages 12-13: the Bell operator of the CHSH expression and the quantum bound 2 sqrt 2, attained by the singlet correlations"
      url: "https://arxiv.org/pdf/1303.2849"
verification:
  precheck: pass
---

## Statement

Adopt the declared spin correlation arrangement of
[[def-nrqm-bell-declared-spin-arrangement]]: the composite
$V\widehat\otimes V$ of two declared spin-half factors with orthonormal basis
$(e_{+},e_{-})$, a declared preparation $\rho\in D(V\widehat\otimes V)$, the
setting directions $a_{0},a_{1},b_{0},b_{1}\in\mathbb R^{3}$ and the four
declared joint sign measurements with outcome laws
$$\nu^{\rho}_{ij}(\varepsilon,\delta) =\operatorname{tr}\bigl(\rho\,(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta})\bigr), \qquad P_{a,\varepsilon}=\tfrac12(I+\varepsilon\,a\cdot\sigma) .$$
Assume the Axiom of Countable Choice and the Axiom of Choice, the hypotheses of
the cited suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]), and
take the **singlet preparation**
$$\Psi:=\frac{1}{\sqrt2}\Bigl(\kappa(e_{+}\otimes e_{-})-\kappa(e_{-}\otimes e_{+})\Bigr), \qquad \rho_{\Psi}:=T_{\Psi,\Psi},$$
where $T_{\Psi,\Psi}$ is the rank-one operator of
[[lem-nrqm-composites-rank-one-operator-calculus]]. Then:

(a) for every $(i,j)\in\{0,1\}^{2}$ and all $\varepsilon,\delta\in\Sigma$,
$$\nu^{\rho_{\Psi}}_{ij}(\varepsilon,\delta) =\bigl\langle(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta})\Psi,\Psi\bigr\rangle =\tfrac14\bigl(1-\varepsilon\delta\,a_{i}\cdot b_{j}\bigr);$$

(b) the correlations of the arrangement are
$E_{ij}(\nu^{\rho_{\Psi}})=-a_{i}\cdot b_{j}$ and
$$S(\nu^{\rho_{\Psi}}) =-\bigl[a_{0}\cdot b_{0}+a_{0}\cdot b_{1}+a_{1}\cdot b_{0}-a_{1}\cdot b_{1}\bigr] =-\,(a_{0}\cdot(b_{0}+b_{1})+a_{1}\cdot(b_{0}-b_{1}));$$
in particular, for the unit directions
$a_{0}=(0,0,1)$, $a_{1}=(1,0,0)$, $b_{0}=(1,0,1)/\sqrt2$ and
$b_{1}=(-1,0,1)/\sqrt2$ one has $S(\nu^{\rho_{\Psi}})=-2\sqrt2$, so
$\bigl|S(\nu^{\rho_{\Psi}})\bigr|=2\sqrt2>2$;

(c) consequently the correlation table $\nu^{\rho_{\Psi}}$ of the arrangement
at those directions admits no local-response model in the sense of clause (e)
of [[def-nrqm-bell-declared-spin-arrangement]]: there is no local-response
representation of the four tables
([[def-nrqm-bell-local-response-representation]]) with these laws;

(d) the marginal sign laws of the arrangement are
$\nu^{\rho_{\Psi},A}_{ij}(\varepsilon)=\tfrac12=
\nu^{\rho_{\Psi},B}_{ij}(\delta)$ for every setting pair and every direction, so
the table is no-signalling in the sense of clause (c) of
[[def-nrqm-bell-binary-correlation-models]]; and a discarded declared local
instrument on either factor leaves the reduced preparation of the other factor
and every local outcome law of that factor unchanged
([[pthm-nrqm-composites-local-instruments-and-no-signalling]] clause (b)).

The item is a conditional model computation: it asserts no measured
correlation, no apparatus and no empirical fact, and its exclusion is exactly
of the declared local-response class of these four tables. Higher singleton
claims about hidden variables in general are not asserted.

## Facts & Assumptions

**Given:** The declared spin correlation arrangement with the singlet preparation $\rho_{\Psi}$; setting directions $a_{0},a_{1},b_{0},b_{1}$; the test directions $a_{0}=(0,0,1)$, $a_{1}=(1,0,0)$, $b_{0}=(1,0,1)/\sqrt2$, $b_{1}=(-1,0,1)/\sqrt2$; the Axiom of Countable Choice and the Axiom of Choice.

[F1] The arrangement's outcome law is $\nu^{\rho}_{ij}(\varepsilon,\delta)=\operatorname{tr}(\rho(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta}))$, its correlations and CHSH functional are the ones of the binary correlation model $\nu^{\rho}$, and its local-response models are the local-response representations of $\nu^{\rho}$ ([[def-nrqm-bell-declared-spin-arrangement]] clauses (d), (e), [[def-nrqm-bell-binary-correlation-models]] clauses (b), (d)).

[F2] For unit $a,b$ the pairings of the singlet are $\langle(P_{a,\varepsilon}\otimes P_{b,\delta})\Psi,\Psi\rangle=\tfrac14(1-\varepsilon\delta\,a\cdot b)$ and the associated marginal sums are $\tfrac12$ and the correlation is $-a\cdot b$ ([[lem-nrqm-bell-singlet-pairings]] clauses (b), (c), (d)).

[F3] For a unit vector $w$ and a bounded operator $B$ one has $\operatorname{tr}(T_{w,w}B)=\langle Bw,w\rangle$: $T_{w,w}B=T_{w,B^{*}w}$ and $\operatorname{tr}(T_{u,v})=\langle u,v\rangle$ ([[lem-nrqm-composites-rank-one-operator-calculus]] clauses (b), (d)); the singlet preparation $\rho_{\Psi}=T_{\Psi,\Psi}$ is a pure density operator with $\|\Psi\|=1$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] clauses (a), (b), [[lem-nrqm-bell-singlet-pairings]] clause (b)).

[F4] If a binary correlation model on $I=J=\{0,1\}$ admits a local-response representation, then $|S|\le2$ ([[thm-nrqm-bell-local-representations-satisfy-chsh]]).

[F5] A discarded declared local instrument of one factor of a declared composite leaves the reduced preparation of the other factor unchanged, and hence every local outcome law of that factor ([[pthm-nrqm-composites-local-instruments-and-no-signalling]] clause (b)).

## Proof

**Proof technique:** direct; evaluate the pure preparation pairing with the rank-one trace identity, read the directional numbers off the singlet pairings, compute the specified-angle value of the CHSH combination, and apply the CHSH bound for representable models.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Outcome laws] For every $(i,j)$ and $(\varepsilon,\delta)$ the measurement reading [F1] and the trace identity [F3] give $\nu^{\rho_{\Psi}}_{ij}(\varepsilon,\delta)=\operatorname{tr}(T_{\Psi,\Psi}(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta}))=\langle(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta})\Psi,\Psi\rangle=\tfrac14(1-\varepsilon\delta\,a_{i}\cdot b_{j})$ by [F2]; this is (a). [given, F1, F2, F3, algebra]

2.1 [Correlations and CHSH combination] By [F1], [F2] and step 1.1, $E_{ij}(\nu^{\rho_{\Psi}})=\sum_{\varepsilon,\delta}\varepsilon\delta\,\nu^{\rho_{\Psi}}_{ij}(\varepsilon,\delta)=-a_{i}\cdot b_{j}$, so $S(\nu^{\rho_{\Psi}})=E_{00}+E_{01}+E_{10}-E_{11}=-[a_{0}\cdot b_{0}+a_{0}\cdot b_{1}+a_{1}\cdot b_{0}-a_{1}\cdot b_{1}]=-[a_{0}\cdot(b_{0}+b_{1})+a_{1}\cdot(b_{0}-b_{1})]$, the last equality by bilinearity of the Euclidean pairing. [given, F1, F2, step 1.1, algebra]

2.2 [Marginals and no-signalling] Summing the formula of step 1.1 with [F2] gives $\nu^{\rho_{\Psi},A}_{ij}(\varepsilon)=\tfrac14(1-\varepsilon a_{i}\cdot b_{j})+\tfrac14(1+\varepsilon a_{i}\cdot b_{j})=\tfrac12$ for both values of $\varepsilon$, independent of $j$, and symmetrically $\nu^{\rho_{\Psi},B}_{ij}(\delta)=\tfrac12$ independent of $i$; hence the table is no-signalling. The discarded-instrument statement is [F5]. This is (d). [step 1.1, F2, F5, algebra]

3.1 [Specified directions] For $a_{0}=(0,0,1)$, $a_{1}=(1,0,0)$, $b_{0}=(1,0,1)/\sqrt2$, $b_{1}=(-1,0,1)/\sqrt2$ one has $a_{0}\cdot b_{0}=a_{0}\cdot b_{1}=a_{1}\cdot b_{0}=1/\sqrt2$ and $a_{1}\cdot b_{1}=-1/\sqrt2$; substituting into step 2.1 gives $S(\nu^{\rho_{\Psi}})=-[1/\sqrt2+1/\sqrt2+1/\sqrt2+1/\sqrt2]=-4/\sqrt2=-2\sqrt2$, so $|S(\nu^{\rho_{\Psi}})|=2\sqrt2>2$. This is the second part of (b). [given, step 2.1, algebra]

4.1 [No local-response model] If the four tables $\nu^{\rho_{\Psi}}$ at the specified directions admitted a local-response representation, then [F4] would give $|S(\nu^{\rho_{\Psi}})|\le2$, contradicting step 3.1; hence no such representation exists, which is (c) at those directions. [step 3.1, F4, algebra]

5.1 [Assembly and scope] Step 1.1 is (a), steps 2.1 and 3.1 are (b), step 4.1 is (c) and step 2.2 is (d). Only the declared arrangement, the singlet pairings, the rank-one trace identity and the CHSH bound for representable models were used; no measurement, apparatus, spatial separation or recorded data entered, and the exclusion is only of the declared local-response class of these four tables. [step 1.1, step 2.1, step 2.2, step 3.1, step 4.1] ∎

## Remarks

- **The value $2\sqrt2$ is the largest possible for this arrangement.** The
  general bound $|S|\le2\sqrt2$ over every preparation and every choice of
  directions is proved as [[pthm-nrqm-bell-tsirelson-bound-for-arrangements]];
  the present computation shows that the singlet at the displayed directions
  attains it.
- **What is excluded.** The four tables of the arrangement do not admit a
  representation by one setting-independent specification space with
  per-station response laws. The computation does not address models of these
  tables outside that class, and it makes no claim that any laboratory
  procedure realizes the arrangement or that any measured correlation agrees
  with $\nu^{\rho_{\Psi}}$.
