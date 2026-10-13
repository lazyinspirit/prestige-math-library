---
id: pthm-nrqm-light-matter-dipole-selection-rules
aliases: [nrqm-light-matter-dipole-selection-rules]
kind: physics-theorem
domain: physics
title: "Electric-dipole selection rules of the declared hydrogenic finite-level model: necessary angular conditions and the parity (Laporte) consequence"
status: draft
origin: pipeline
dependency_level: 15
deps: [post-nrqm-approximations-static-finite-level-dipole-coupling, def-nrqm-light-matter-framework-finite-level-coupled-model, def-nrqm-central-framework-coulomb-and-hydrogen-model, pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy, thm-nrqm-coulomb-atomic-dipole-matrix-element-domain, thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension, thm-nrqm-orbital-and-spin-associated-polynomial-normalization, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, def-monomials-multidegree-and-total-degree, def-homogeneous-polynomial-and-homogeneous-ideal, def-laplacian-of-a-c2-function, def-directional-and-partial-derivatives, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, post-nrqm-framework-state-and-composition, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-hilbert-orthogonal-projection, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice, thm-lebesgue-measure-under-dilations-and-reflections]
dependency_roles:
  post-nrqm-approximations-static-finite-level-dipole-coupling: physical-assumption
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  def-nrqm-central-framework-coulomb-and-hydrogen-model: formulation-prerequisite
  pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy: physical-result
  thm-nrqm-coulomb-atomic-dipole-matrix-element-domain: mathematical-premise
  thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension: mathematical-premise
  thm-nrqm-orbital-and-spin-associated-polynomial-normalization: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  def-monomials-multidegree-and-total-degree: mathematical-premise
  def-homogeneous-polynomial-and-homogeneous-ideal: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-hilbert-orthogonal-projection: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-lebesgue-measure-under-dilations-and-reflections: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
empirical_premises: []
physical_scope: "The electric-dipole matrix elements of the declared hydrogenic model: the uncompressed relative-coordinate dipole components -q_el Q_q, their bound-state matrix elements, the necessary angular conditions l' = l + 1 with m' = m + q or l >= 1 with l' = l - 1 and m' = m + q, the accompanying opposite-parity (Laporte) condition, and the transfer of these vanishing conditions to compressed dipole matrices when the declared finite-level subspace is spanned by a declared finite subfamily of bound states and its declared orthonormal basis is chosen from that same subfamily. The theorem states necessary conditions only: it asserts no transition rate, oscillator strength, line intensity, observed spectrum or 'allowed transition' beyond the non-vanishing of the matrix element."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.3 printed pages 219-220 (PDF pages 227-228): the electric-dipole selection rules for the magnetic quantum number and the orbital angular momentum, with the explicit warning that the neglected next terms can give slower forbidden transitions"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', Section 3 (spherical-harmonic orthogonality and azimuthal dependence in the polar chart)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
---

## Statement

Adopt the declared charged pair of
[[post-nrqm-approximations-static-finite-level-dipole-coupling]] clauses
(i)-(ii): the relative-coordinate factor $L^{2}(\mathbb R^{3};\mathbb C)$ of the
declared two-body Coulomb model
([[def-nrqm-central-framework-coulomb-and-hydrogen-model]]), the Cartesian coordinate
multipliers $X_j$ (the operators denoted $Q_j$ in that supplier), with maximal domains $D(X_j)=\{\psi:\xi_j\psi\in L^2\}$ and Cartesian dipole components $D_j=-q_{\mathrm{el}}X_j$, where $q_{\mathrm{el}}>0$ is the charge magnitude in coulombs.
Let $(\psi_{nlm})$ be the bound eigenfunctions of the Coulomb Hamiltonian of
[[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] with their angular
labels $l\ge0$, $m\in\{-l,\dots,l\}$. Write
$Q_0:=X_3$, $Q_\pm:=(X_1\pm iX_2)/\sqrt2$ and $D_q:=-q_{\mathrm{el}}Q_q$ for
$q\in\{-1,0,1\}$ (the dimensionless spherical-component index), with
$D(Q_q):=\{u\in L^2:Q_q(x)u(x)\in L^2\}$. Thus
$D(Q_0)=D(X_3)$ and $D(Q_\pm)=D(X_1)\cap D(X_2)$;
$D(D_q)=D(Q_q)$ since $q_{\mathrm{el}}>0$. Let $(Y_{lm})$ be the spherical harmonics and
$u_{nl}$ the reduced radial functions of
[[thm-nrqm-coulomb-atomic-dipole-matrix-element-domain]]. Assume the Axioms of
Countable Choice and of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Then:

(a) (domain and finiteness) every bound state satisfies $\psi_{nlm}\in D(X_{j})$
for $j=1,2,3$, and for all labels and every $q\in\{-1,0,1\}$ the matrix element
$\langle\psi_{n'l'm'},D_{q}\psi_{nlm}\rangle$ is absolutely convergent;

(b) (factorisation and angular condition) for all labels and every
$q\in\{-1,0,1\}$,
$$\langle\psi_{n'l'm'},D_{q}\psi_{nlm}\rangle =-q_{\mathrm{el}}\Bigl(\int_{0}^{\infty}r\,u_{n'l'}(r)\overline{u_{nl}(r)}\,dr\Bigr) \Bigl(\int_{S^{2}}Y_{l'm'}(\Omega)\overline{Q_{q}(\Omega)Y_{lm}(\Omega)} \,d\sigma(\Omega)\Bigr),$$
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
$\Pi_{\mathrm{par}}$ is a unitary involution with
$\Pi_{\mathrm{par}}D(Q_q)=D(Q_q)$, and
$\Pi_{\mathrm{par}}Q_q\Pi_{\mathrm{par}}=-Q_q$ as operators on
$D(Q_q)$ for $q\in\{-1,0,1\}$; hence
a nonvanishing matrix element $\langle\psi_{n'l'm'},D_{q}\psi_{nlm}\rangle$
requires $(-1)^{l'}=-(-1)^{l}$, i.e. opposite parity of the two bound states
(the Laporte condition), consistently with $|l'-l|=1$;

(e) (transfer to the compressed model matrices) if the declared
finite-dimensional subspace $W$ of
[[def-nrqm-light-matter-framework-finite-level-coupled-model]] clause (b) is
the span of a declared finite subfamily of the bound states, with an
orthonormal basis chosen from that subfamily, define the spherical
compression $D_q^W:=\Pi_WD_q|_W$; then for all $w,w'\in W$
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

**Given:** the declared Coulomb pair with charge magnitude $q_{\mathrm{el}}>0$ and relative-coordinate factor $L^{2}(\mathbb R^{3};\mathbb C)$, the Cartesian coordinate multipliers $X_j$ and spherical components $Q_{q}$, the dipole components $D_q=-q_{\mathrm{el}}Q_q$, the bound states $\psi_{nlm}=u_{nl}(r)Y_{lm}(\Omega)/r$, the spherical harmonics $(Y_{lm})$, and, for clause (e), a declared finite subfamily spanning $W$ with the declared orthonormal basis chosen from that subfamily, together with the parity map $\Pi_{\mathrm{par}}$.

[F1] **Coordinate domains and matrix elements.** Each Cartesian $X_i$ is self-adjoint on its maximal domain, every bound state lies in every $D(X_i)$ and hence every spherical $D(Q_q)$, and $\langle\psi_{n'l'm'},Q_q\psi_{nlm}\rangle$ has the displayed absolutely convergent radial/angular factorisation. Since the physical scalar $-q_{\mathrm{el}}$ is real, the dipole matrix element is $-q_{\mathrm{el}}$ times that coordinate matrix element even in the linear-first convention ([[thm-nrqm-coulomb-atomic-dipole-matrix-element-domain]] clauses (a),(b) and its explicit spherical maximal domains; [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-inner-product-space]], [[post-nrqm-approximations-static-finite-level-dipole-coupling]] clauses (i),(ii)). Only those domain and factorisation clauses are used here; the separate angular-selection claim of that supplier is not used.

[F2] **Harmonic blocks, angular weight, and polynomial calculus.** For each $l,m$, the polynomial representative $h_{lm}$ is homogeneous harmonic of degree $l$ and restricts to $Y_{lm}$; these restrictions span the degree-$l$ block $V_l$, and distinct $V_l$ are orthogonal; put $V_{-1}:=\{0\}$. Use the chart $\Phi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$; there $Q_0=\cos\theta$ and $Q_{\pm}=\sin\theta(\cos\varphi\pm i\sin\varphi)/\sqrt2$. The operator $L_z$ is the self-adjoint diagonal operator on the full Hilbert space $L^2(S^2,\sigma;\mathbb C)$ with domain $D(L_z)=\{F:\sum_{l,m}m^2|\langle F,Y_{lm}\rangle|^2<\infty\}$ and $L_zY_{lm}=\hbar mY_{lm}$; its algebraic finite span $H=\operatorname{span}\{Y_{lm}\}$ is a core contained in $D(L_z)$, and on $H$ its chart differential expression is $-i\hbar\partial_{\varphi}$ ([[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]] clauses (a)-(c)). On the complexified homogeneous polynomial spaces, $\Delta=\partial_1^2+\partial_2^2+\partial_3^2$ acts complex-linearly; partial derivatives commute on polynomials termwise and obey the product rule, applied componentwise to real and imaginary parts. If $p$ is homogeneous of degree $d$, then $x\cdot\nabla p=dp$, by termwise differentiation of its monomials. In particular, for harmonic homogeneous $p$ of degree $d$, $\Delta(r^2p)= (4d+6)p$; this follows from $\Delta r^2=6$, $\nabla r^2=2x$, and the product rule ([[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] clause (c), [[thm-nrqm-orbital-and-spin-associated-polynomial-normalization]] clauses (c),(d), [[thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain]] clauses (a),(c), [[thm-sine-and-cosine-derivatives]], [[def-laplacian-of-a-c2-function]], [[def-directional-and-partial-derivatives]], [[def-monomials-multidegree-and-total-degree]], [[def-homogeneous-polynomial-and-homogeneous-ideal]], [[thm-algebra-of-derivatives]]).

[F3] **Parity of the spherical harmonics.** Each $Y_{lm}$ has a polynomial representative $h_{lm}$ that is homogeneous of degree $l$; hence $Y_{lm}(-\Omega)=(-1)^{l}Y_{lm}(\Omega)$, and for the polynomial $Q_{q}$ of degree one, $Q_{q}(-x)=-Q_{q}(x)$ ([[thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension]] clause (c)).

[F4] **Compression and linear-first coordinates.** For a closed subspace $W\subseteq D(A)$ and its orthogonal projection $\Pi_W$, $\Pi_WA|_W$ has matrix entries $\langle Aw_j,w_i\rangle$ in an orthonormal basis $(w_i)$, with input column $j$ and output row $i$, because $\Pi_WAw_j=\sum_i\langle Aw_j,w_i\rangle w_i$. Separately, the valid reversed pairing is $\langle w',\Pi_WAw\rangle=\langle w',Aw\rangle$ for $w,w'\in W$; it is the conjugate of the corresponding coordinate entry. This follows from $Aw-\Pi_WAw\in W^\perp$ and the linear-first inner product ([[def-hilbert-orthogonal-projection]], [[def-inner-product-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]). The bound states of the declared Coulomb model are those of [[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] with $u_{nl}\in L^2(0,\infty)$.

[F5] **Framework reading.** The model's dipole components, its finite-level data and its units are those of [[post-nrqm-approximations-static-finite-level-dipole-coupling]] clauses (ii),(iii), [[def-nrqm-light-matter-framework-finite-level-coupled-model]] clause (b) and [[def-nrqm-framework-quantities-and-units]]; the compression is the model's declared replacement of the unbounded dipole, and the bound states are read through the model's observable vocabulary [[def-nrqm-observables-framework-observable-and-outcome-law]] under P1 ([[post-nrqm-framework-state-and-composition]]). The symbol $q_{\mathrm{el}}$ here denotes the positive charge magnitude called $q$ in the postulate; it is independent of the spherical index $q\in\{-1,0,1\}$, and every $D_q$ retains dipole units $\mathrm{C\,m}$.

[F6] **Registered reflection premise.** Reflection $x\mapsto-x$ preserves Lebesgue measurability, null sets and Lebesgue measure on $\mathbb R^3$ ([[thm-lebesgue-measure-under-dilations-and-reflections]] clauses (1)-(3), $n=3$, $c=-1$). Thus pullback by reflection is well defined on almost-everywhere classes and preserves their $L^2$ inner products; its square is the identity. The weighted norm calculation for the unbounded coordinate domains is supplied below.

## Proof

**Proof technique:** direct; use the cited domain and matrix-element factorisation, prove the angular degree and weight restrictions from the harmonic-polynomial decomposition and $L_z$ action, transport homogeneity to the parity condition, and evaluate the compression on the selected subfamily.

**Given:** The data of the statement and [F1]-[F6].

1.1 [Domain and factorisation] Clause (a) is [F1]: each bound state lies in every $D(X_{i})$, so $D_{q}\psi_{nlm}=-q_{\mathrm{el}}Q_q\psi_{nlm}$ is defined and the matrix element is absolutely convergent. For clause (b), [F1] gives the factorisation $\langle\psi_{n'l'm'},D_{q}\psi_{nlm}\rangle=-q_{\mathrm{el}}\langle\psi_{n'l'm'},Q_{q}\psi_{nlm}\rangle$ with the displayed radial and angular factors. [F1, algebra]

2.1 [Angular degree and weight] Let $\mathcal H:=h_{lm}$, the homogeneous harmonic representative of $Y_{lm}$ from [F2]. Write $Q_q=\sum_{i=1}^{3}a_{q,i}x_i$, where $a_{0,i}=\delta_{i3}$ and $a_{\pm,i}=(\delta_{i1}\pm i\delta_{i2})/\sqrt2$; these coefficients match exactly $Q_{\pm}=(x_1\pm ix_2)/\sqrt2$. If $l\ge1$, put $G_q:=(\sum_i a_{q,i}\partial_i\mathcal H)/(2l+1)$; since $\mathcal H$ is harmonic, partial derivatives commute with $\Delta$, so $G_q$ is harmonic homogeneous of degree $l-1$. If $l=0$, put $G_q:=0$. The product rule gives $\Delta(Q_q\mathcal H)=2\sum_i a_{q,i}\partial_i\mathcal H$. For $l\ge1$, [F2] gives $\Delta(r^2G_q)=(4(l-1)+6)G_q=(4l+2)G_q=2\sum_i a_{q,i}\partial_i\mathcal H$; for $l=0$ both sides are zero. Thus $R_q:=Q_q\mathcal H-r^2G_q$ is harmonic homogeneous of degree $l+1$. Restricting to $S^2$, where $r^2=1$, yields $Q_qY_{lm}=R_q|_{S^2}+G_q|_{S^2}$ when $l\ge1$ and only the first term when $l=0$. By [F2], this lies in $V_{l+1}\oplus V_{l-1}$ (with $V_{-1}=\{0\}$), so its pairing with $Y_{l'm'}$ vanishes if $l'\notin\{l-1,l+1\}$. The product $F:=Q_qY_{lm}$ is consequently in the finite span $H$. On the chart, [F2] and the product rule give $\partial_{\varphi}F=iqF+imF=i(m+q)F$: indeed $\partial_{\varphi}Q_q=iqQ_q$, while $\partial_{\varphi}Y_{lm}=imY_{lm}$ follows from $L_zY_{lm}=\hbar mY_{lm}$ and $L_z=-i\hbar\partial_{\varphi}$. Hence $L_zF=\hbar(m+q)F$. If $m'\ne m+q$, self-adjointness of $L_z$ and $L_zY_{l'm'}=\hbar m'Y_{l'm'}$ imply $(m+q-m')\hbar\langle F,Y_{l'm'}\rangle=0$, so $\langle F,Y_{l'm'}\rangle=0$. Since the reversed angular pairing in the Statement is its complex conjugate, it vanishes under the same conditions. This proves the claimed degree and component-dependent weight restrictions. [F1, F2, step 1.1, algebra]

3.1 [Necessary conditions] Clause (c) restates step 2.1: $m'-m=q\in\{0,\pm1\}$ and $l'-l\in\{-1,+1\}$ are necessary for a nonvanishing matrix element; the radial factor is not controlled by [F2], so no nonvanishing statement is made for an allowed angular pair, and no probability or rate is defined. [step 2.1, algebra, F2]

3.2 [Parity on the actual coordinate domains] By [F6], $\Pi_{\mathrm{par}}$ is a unitary involution on $L^2$. For any $u\in L^2$, reflection invariance and $Q_q(-x)=-Q_q(x)$ from [F3] give $\int|Q_q(x)|^2|u(-x)|^2dx=\int|Q_q(-x)|^2|u(x)|^2dx=\int|Q_q(x)|^2|u(x)|^2dx$, allowing infinite values. Consequently $\Pi_{\mathrm{par}}D(Q_q)=D(Q_q)$ and, on that domain, $\Pi_{\mathrm{par}}Q_q\Pi_{\mathrm{par}}=-Q_q$. Also [F3] gives $\Pi_{\mathrm{par}}\psi_{nlm}=(-1)^l\psi_{nlm}$ because its radial factor depends on $|x|$ only. Now let $u\in D(Q_q)$ and $v\in L^2$ satisfy $\Pi_{\mathrm{par}}u=\sigma u$, $\Pi_{\mathrm{par}}v=\sigma'v$ with real $\sigma,\sigma'\in\{-1,1\}$. Unitarity and the defined-domain identity give $\langle v,Q_qu\rangle=\langle\Pi_{\mathrm{par}}v,\Pi_{\mathrm{par}}Q_qu\rangle=-\sigma\sigma'\langle v,Q_qu\rangle$. A nonzero pairing therefore forces $\sigma\sigma'=-1$. The charge $q_{\mathrm{el}}>0$ preserves nonvanishing when $Q_q$ is replaced by $D_q=-q_{\mathrm{el}}Q_q$. Applying this to the bound states, whose input domains are supplied by [F1], gives $(-1)^{l'}=-(-1)^l$ and proves (d). [F1, F3, F6, step 2.1, algebra]

4.1 [Compression] The finite span $W$ of the selected bound states lies in every $D(X_i)$ and hence in every $D(Q_q)=D(D_q)$ by [F1] and linearity of those domains. Thus $D_q^W=\Pi_WD_q|_W$ is defined on all $W$. For $w,w'\in W$, the reversed-pairing identity of [F4] gives $\langle w',D_q^Ww\rangle=\langle w',D_qw\rangle$, which is exactly the valid display of (e). In the selected orthonormal basis the actual coordinate entry is $\langle D_qw_j,w_i\rangle$, the conjugate of $\langle w_i,D_qw_j\rangle$; either vanishes exactly when the other does. Therefore each matrix entry inherits the uncompressed angular and parity vanishing conditions from steps 2.1 and 3.2, including the complex spherical components, proving (e). [F1, F4, step 1.1, step 2.1, step 3.2, algebra]

5.1 [Scope and assembly] Steps 1.1 and 2.1 prove (a) and (b), step 3.1 proves (c), step 3.2 proves (d) and step 4.1 proves (e). Only matrix elements of the declared model's dipole components entered; no transition probability, rate, lineshape or observed spectrum was formed, and the neglected higher-order terms are recorded as outside the theorem, which is (f). [F5, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Remarks

- **Necessary, not sufficient.** A vanishing angular factor forbids an electric-dipole matrix element; a nonvanishing angular factor does not force a nonvanishing matrix element, because the radial integral may vanish. The theorem is therefore a statement about the model's dipole matrices, not about observed line strengths.
- **Why the parity clause is included.** The angular rule $|l'-l|=1$ already implies opposite parity for the hydrogenic bound states; clause (d) records the parity mechanism explicitly because it is the form of the rule that transfers to any finite-level subspace whose basis states have definite parity.
