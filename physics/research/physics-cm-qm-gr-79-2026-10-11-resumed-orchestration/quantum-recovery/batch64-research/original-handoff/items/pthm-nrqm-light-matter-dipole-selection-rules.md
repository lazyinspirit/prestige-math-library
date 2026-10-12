---
id: pthm-nrqm-light-matter-dipole-selection-rules
aliases: [nrqm-light-matter-dipole-selection-rules]
kind: physics-theorem
domain: physics
title: "Electric-dipole selection rules of the declared hydrogenic finite-level model: necessary angular conditions and the parity (Laporte) consequence"
status: draft
origin: pipeline
dependency_level: 15
deps: [post-nrqm-approximations-static-finite-level-dipole-coupling, def-nrqm-light-matter-framework-finite-level-coupled-model, def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, thm-nrqm-coulomb-atomic-dipole-matrix-element-domain, thm-nrqm-orbital-and-spin-dipole-angular-selection-rules, thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, post-nrqm-framework-state-and-composition, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-hilbert-orthogonal-projection, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-approximations-static-finite-level-dipole-coupling: physical-assumption
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  thm-nrqm-coulomb-atomic-dipole-matrix-element-domain: mathematical-premise
  thm-nrqm-orbital-and-spin-dipole-angular-selection-rules: mathematical-premise
  thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-hilbert-orthogonal-projection: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
empirical_premises: []
physical_scope: "The electric-dipole matrix elements of the declared hydrogenic model: the uncompressed relative-coordinate dipole components -q Q_q, their bound-state matrix elements, the necessary angular conditions l' = l + 1 with m' = m + q or l >= 1 with l' = l - 1 and m' = m + q, the accompanying opposite-parity (Laporte) condition, and the transfer of these vanishing conditions to the compressed dipole matrices of any declared finite-level subspace spanned by bound states. The theorem states necessary conditions only: it asserts no transition rate, oscillator strength, line intensity, observed spectrum or 'allowed transition' beyond the non-vanishing of the matrix element."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.3 printed pages 219-220 (PDF pages 227-228): the electric-dipole selection rules for the magnetic quantum number and the orbital angular momentum, with the explicit warning that the neglected next terms can give slower forbidden transitions"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', Section 3 (comments on spherical harmonics and the angular integrals of the dipole operator)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Adopt the declared charged pair of
[[post-nrqm-approximations-static-finite-level-dipole-coupling]] clauses
(i)-(ii): the relative-coordinate factor $L^{2}(\mathbb R^{3};\mathbb C)$ of the
declared two-body Coulomb model
([[def-nrqm-central-framework-coulomb-and-hydrogen-model]]), the coordinate
multipliers $Q_{j}$ with maximal domains $D(Q_{j})=\{\psi:\xi_{j}\psi\in
L^{2}\}$ and the dipole components $D_{j}=-q\,Q_{j}$ ($q>0$ coulombs).
Let $(\psi_{nlm})$ be the bound eigenfunctions of the Coulomb Hamiltonian of
[[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] with their angular
labels $l\ge0$, $m\in\{-l,\dots,l\}$. Write
$Q_{0}:=x_{3}$, $Q_{\pm}:=(x_{1}\pm ix_{2})/\sqrt2$ and $D_{q}:=-q\,Q_{q}$ for
$q\in\{-1,0,1\}$, and let $(Y_{lm})$ be the spherical harmonics and
$u_{nl}$ the reduced radial functions of
[[thm-nrqm-coulomb-atomic-dipole-matrix-element-domain]]. Assume the Axioms of
Countable Choice and of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Then:

(a) (domain and finiteness) every bound state satisfies $\psi_{nlm}\in D(Q_{j})$
for $j=1,2,3$, and for all labels and every $q\in\{-1,0,1\}$ the matrix element
$\langle\psi_{n'l'm'},D_{q}\psi_{nlm}\rangle$ is absolutely convergent;

(b) (factorisation and angular condition) for all labels and every
$q\in\{-1,0,1\}$,
$$\langle\psi_{n'l'm'},D_{q}\psi_{nlm}\rangle =-q\Bigl(\int_{0}^{\infty}r\,u_{n'l'}(r)\overline{u_{nl}(r)}\,dr\Bigr) \Bigl(\int_{S^{2}}Y_{l'm'}(\Omega)\overline{Q_{q}(\Omega)Y_{lm}(\Omega)} \,d\sigma(\Omega)\Bigr),$$
and the angular factor vanishes unless
$$l'=l+1\ \text{and}\ m'=m+q,\qquad\text{or}\qquad l\ge1,\ l'=l-1\ \text{and}\ m'=m+q;$$

(c) (necessary conditions only) consequently a nonvanishing matrix element
requires $m'-m=q\in\{0,\pm1\}$ and $|l'-l|=1$; these are necessary conditions
on the matrix element: the radial factor may vanish for an allowed angular
pair, and no transition probability, rate, oscillator strength, line intensity
or claim that an "allowed" transition occurs is asserted;

(d) (parity consequence) let $(\Pi_{\mathrm{par}}\psi)(x):=\psi(-x)$ on
$L^{2}(\mathbb R^{3};\mathbb C)$; then
$\Pi_{\mathrm{par}}\psi_{nlm}=(-1)^{l}\psi_{nlm}$ and
$\Pi_{\mathrm{par}}Q_{q}\Pi_{\mathrm{par}}=-Q_{q}$ for $q\in\{-1,0,1\}$; hence
a nonvanishing matrix element $\langle\psi_{n'l'm'},D_{q}\psi_{nlm}\rangle$
requires $(-1)^{l'}=-(-1)^{l}$, i.e. opposite parity of the two bound states
(the Laporte condition), consistently with $|l'-l|=1$;

(e) (transfer to the compressed model matrices) if the declared
finite-dimensional subspace $W$ of
[[def-nrqm-light-matter-framework-finite-level-coupled-model]] clause (b) is
the span of a declared finite subfamily of the bound states, with an
orthonormal basis chosen from that subfamily, then for all $w,w'\in W$
$$\bigl\langle w',D^{W}_{q}w\bigr\rangle=\bigl\langle w',D_{q}w\bigr\rangle,$$
so the model's compressed dipole matrices inherit every vanishing condition of
clauses (b)-(d) entry by entry;

(f) (scope) clauses (a)-(e) are conditional statements about the declared
Coulomb pair and its compressions. They say nothing about transition rates,
lineshapes, observed spectra or selection-rule violations by higher-order
terms; the neglected next-order terms of the long-wavelength expansion and the
magnetic-moment interaction are outside this theorem, and no empirical
spectrum is claimed.

## Facts & Assumptions

**Given:** the declared Coulomb pair with charge magnitude $q>0$ and relative-coordinate factor $L^{2}(\mathbb R^{3};\mathbb C)$, the coordinate multipliers $Q_{j}$ and spherical components $Q_{q}$, the dipole components $D_{q}=-qQ_{q}$, the bound states $\psi_{nlm}=u_{nl}(r)Y_{lm}(\Omega)/r$, the spherical harmonics $(Y_{lm})$, a declared finite subfamily spanning $W$, and the parity map $\Pi_{\mathrm{par}}$.

[F1] **Coordinate domains and matrix elements.** Each $Q_{i}$ is self-adjoint on its maximal domain, every bound state lies in every $D(Q_{i})$, and for all labels and $q$ the matrix element factors as displayed with an absolutely convergent angular integral ([[thm-nrqm-coulomb-atomic-dipole-matrix-element-domain]] clauses (a),(b); [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] **Angular selection rules.** For the multiplier $Q_{q}$ acting on the spherical harmonics, the angular matrix element $\langle Y_{l'm'},Q_{q}Y_{lm}\rangle$ can be nonzero only if $l'=l+1$, $m'=m+q$, or $l\ge1$, $l'=l-1$, $m'=m+q$; the rule is a necessary condition on the angular integral only ([[thm-nrqm-orbital-and-spin-dipole-angular-selection-rules]] clause (d); [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]]).

[F3] **Parity of the spherical harmonics.** Each $Y_{lm}$ has a polynomial representative $h_{lm}$ that is homogeneous of degree $l$, and restriction to $S^{2}$ is the identification used in [F2]; hence $Y_{lm}(-\Omega)=(-1)^{l}Y_{lm}(\Omega)$, and for the polynomial $Q_{q}$ of degree one, $Q_{q}(-x)=-Q_{q}(x)$ ([[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] clauses (b),(c); [[thm-nrqm-orbital-and-spin-dipole-angular-selection-rules]]).

[F4] **Compression.** For a closed subspace $W$ of a Hilbert space with orthogonal projection $\Pi_{W}$, the compression $\Pi_{W}A|_{W}$ is represented in any orthonormal basis of $W$ by the matrix with entries $\langle w',Aw\rangle$, and for $w\in W$ one has $\Pi_{W}w=w$ ([[def-hilbert-orthogonal-projection]], [[def-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]); the bound states of the declared Coulomb model are those of [[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] with $u_{nl}\in L^{2}(0,\infty)$.

[F5] **Framework reading.** The model's dipole components, its finite-level data and its units are those of [[post-nrqm-approximations-static-finite-level-dipole-coupling]] clauses (ii),(iii), [[def-nrqm-light-matter-framework-finite-level-coupled-model]] clause (b) and [[def-nrqm-framework-quantities-and-units]]; the compression is the model's declared replacement of the unbounded dipole, and the bound states are read through the model's observable vocabulary [[def-nrqm-observables-framework-observable-and-outcome-law]] under P1 ([[post-nrqm-framework-state-and-composition]]).

## Proof

**Proof technique:** direct; instantiate the cited matrix-element factorisation and angular selection rules for the model's dipole components, transport the degree of the harmonic representative to the parity condition, and evaluate the compression on the selected subfamily.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Domain and factorisation] Clause (a) is [F1]: each bound state lies in every $D(Q_{i})$, so $D_{q}\psi_{nlm}=-qQ_{q}\psi_{nlm}$ is defined and the matrix element is absolutely convergent. For clause (b), [F1] gives the factorisation $\langle\psi_{n'l'm'},D_{q}\psi_{nlm}\rangle=-q\langle\psi_{n'l'm'},Q_{q}\psi_{nlm}\rangle$ with the displayed radial and angular factors. [F1, algebra]

2.1 [Angular vanishing] By [F2] the angular factor in step 1.1 vanishes unless $(l',m')$ is one of the two displayed pairs; because the radial factor is finite, a vanishing angular factor makes the whole matrix element zero. This proves (b). [F1, F2, step 1.1, algebra]

3.1 [Necessary conditions] Clause (c) restates step 2.1: $m'-m=q\in\{0,\pm1\}$ and $l'-l\in\{-1,+1\}$ are necessary for a nonvanishing matrix element; the radial factor is not controlled by [F2], so no nonvanishing statement is made for an allowed angular pair, and no probability or rate is defined. [step 2.1, algebra, F2]

3.2 [Parity] By [F3], for the harmonic representatives, $\Pi_{\mathrm{par}}\psi_{nlm}=(-1)^{l}\psi_{nlm}$ because the reduced radial function depends on $|x|$ only. Let $u,v\in L^{2}(\mathbb R^{3};\mathbb C)$ with $\Pi_{\mathrm{par}}u=\sigma u$, $\Pi_{\mathrm{par}}v=\sigma'v$, $\sigma,\sigma'\in\{-1,1\}$; then $\langle v,Q_{q}u\rangle=\langle\Pi_{\mathrm{par}}v,\Pi_{\mathrm{par}}Q_{q}\Pi_{\mathrm{par}}\Pi_{\mathrm{par}}u\rangle=\sigma\sigma'\langle v,-Q_{q}u\rangle$, so $\langle v,Q_{q}u\rangle\ne0$ forces $\sigma\sigma'=-1$, i.e. opposite parity; applying this with $u=\psi_{nlm}$, $v=\psi_{n'l'm'}$ gives $(-1)^{l'}=-(-1)^{l}$, which is the stated Laporte condition. This proves (d). [F3, step 2.1, algebra]

4.1 [Compression] If $W$ is the span of a declared finite subfamily of the bound states and $w,w'\in W$, then $\Pi_{W}w=w$ and $\langle w',D^{W}_{q}w\rangle=\langle\Pi_{W}w',D_{q}w\rangle=\langle w',D_{q}w\rangle$ by [F4]; each entry of the compressed matrix is therefore the corresponding uncompressed matrix element, which vanishes whenever steps 2.1 or 3.2 give a vanishing condition. This proves (e). [F4, step 1.1, step 2.1, step 3.2, algebra]

5.1 [Scope and assembly] Steps 1.1 and 2.1 prove (a) and (b), step 3.1 proves (c), step 3.2 proves (d) and step 4.1 proves (e). Only matrix elements of the declared model's dipole components entered; no transition probability, rate, lineshape or observed spectrum was formed, and the neglected higher-order terms are recorded as outside the theorem, which is (f). [F5, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **Necessary, not sufficient.** A vanishing angular factor forbids an electric-dipole matrix element; a nonvanishing angular factor does not force a nonvanishing matrix element, because the radial integral may vanish. The theorem is therefore a statement about the model's dipole matrices, not about observed line strengths.
- **Why the parity clause is included.** The angular rule $|l'-l|=1$ already implies opposite parity for the hydrogenic bound states; clause (d) records the parity mechanism explicitly because it is the form of the rule that transfers to any finite-level subspace whose basis states have definite parity.
