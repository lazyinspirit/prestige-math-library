---
id: thm-cft-r5-dirac-bosonization-torus-and-fields
kind: theorem
title: Bosonization of two Dirac fermions and the compact boson
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-free-fermion-spin-theory
  - lem-cft-r5-free-fermion-spin-structure-characters
  - def-cft-r5-compact-boson-full-theory
  - def-cft-r5-compact-boson-charge-lattice-and-cocycle
  - thm-cft-r5-compact-boson-spectrum-modular-duality
  - lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local
  - def-cft-r5-circle-reflection-orbifold-sectors
  - thm-jacobi-theta-triple-product
dependency_roles:
  def-cft-r5-free-fermion-spin-theory: mathematical-premise
  lem-cft-r5-free-fermion-spin-structure-characters: mathematical-premise
  def-cft-r5-compact-boson-full-theory: mathematical-premise
  def-cft-r5-compact-boson-charge-lattice-and-cocycle: mathematical-premise
  thm-cft-r5-compact-boson-spectrum-modular-duality: mathematical-premise
  lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local: mathematical-premise
  def-cft-r5-circle-reflection-orbifold-sectors: mathematical-premise
  thm-jacobi-theta-triple-product: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: Sections 6.2–6.3, 7.3–7.5, and 8.1–8.4, printed pp. 74–79, 91–100, and 108–124, fermion bosonization, spin-structure sums, compact-boson charges, and the reflection orbifold.
    - title: Pavel Mnev and Nicolai Reshetikhin, Lecture notes on conformal field theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: Sections 6.3.10.3–6.3.11.5, printed pp. 218–223, two Majoranas as one Dirac field, the bosonized current, charge sectors, and the radius convention.
verification:
  precheck: pending
---

## Statement

Use the Ginsparg normalization and the zero-mode parity convention specified for the free-fermion spin theory. The common-spin-structure GSO projection of the two real Majorana components, one nonchiral complex Dirac field, has torus partition function $Z_D(\tau)=Z_{\mathrm{circ}}(1;\tau)$. Its projected charge pairs $(Q_L,Q_R)$ map bijectively to the compact-boson lattice by $m=Q_L+Q_R$, $n=(Q_L-Q_R)/2$, so $Q_L=p_L(m,n;1)$ and $Q_R=p_R(m,n;1)$; oscillator levels and weights agree. The local projected field algebra maps to the integer-lattice vertex algebra, with the chiral generators identified, up to the fixed phase and Klein factors, by $e^{\pm iX_L}\leftrightarrow i(\psi^1\pm i\psi^2)/\sqrt2$ and the analogous right-moving formula. The chosen Klein factors use $\varepsilon((m,n),(m',n'))=(-1)^{mn'}$, so all projected vertex OPE coefficients agree.

If instead the spin structures of the two real Majorana theories are summed independently, their torus partition function is $Z_M(\tau)^2=Z_{\mathrm{orb}}(1;\tau)$. The reflection $X\mapsto-X$ corresponds to $\psi^1\mapsto\psi^1$, $\psi^2\mapsto-\psi^2$: the invariant untwisted sectors agree, and the two Ramond twist fields $\sigma^1,\sigma^2$ map to the two fixed-point twist fields $\sigma_0,\sigma_\pi$. Each has weights $(1/16,1/16)$ and the same square-root current monodromy because the reflection current $J=i\psi^1\psi^2$ changes sign around either twist field. These are torus and genus-zero sector/field identifications; no higher-genus sewing statement is included.

## Statement references

[[def-cft-r5-free-fermion-spin-theory]]

[[lem-cft-r5-free-fermion-spin-structure-characters]]

[[def-cft-r5-compact-boson-full-theory]]

[[def-cft-r5-compact-boson-charge-lattice-and-cocycle]]

[[thm-cft-r5-compact-boson-spectrum-modular-duality]]

[[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]]

[[def-cft-r5-circle-reflection-orbifold-sectors]]

[Ginsparg, Sections 6.2–6.3, 7.3–7.5 and 8.1–8.4](https://arxiv.org/pdf/hep-th-9108028v1)

[Mnev–Reshetikhin, Sections 6.3.10.3–6.3.11.5](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf)

## Facts & Assumptions

**Given:** The common-spin and independent-Majorana trace conventions, the radius-one compact-boson data, and the stated fermion/boson cocycle normalization.

[F1] [[def-cft-r5-free-fermion-spin-theory]] fixes the CAR, current-charge sectors, NS/R charge ranges, Ramond parity shift, spin sums, and twist-field monodromy.

[F2] [[lem-cft-r5-free-fermion-spin-structure-characters]] proves the common-spin trace formula $Z_D=\frac12(a_2^2+a_3^2+a_4^2)$ and the independent-Majorana formula $Z_M^2=\frac14(a_2+a_3+a_4)^2$.

[F3] [[def-cft-r5-compact-boson-full-theory]] fixes $p_L=m/(2r)+nr$, $p_R=m/(2r)-nr$, the compact state space, the local vertex fields, and their cocycle convention.

[F4] [[def-cft-r5-compact-boson-charge-lattice-and-cocycle]] defines the charge labels, lattice vertex fields, and exact cocycle $\varepsilon((m,n),(m',n'))=(-1)^{mn'}$.

[F5] [[thm-cft-r5-compact-boson-spectrum-modular-duality]] proves $Z_{\mathrm{circ}}(r;\tau)=|\eta(\tau)|^{-2}\sum_{m,n\in\mathbb Z}q^{p_L^2/2}\bar q^{p_R^2/2}$.

[F6] [[lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local]] proves the lattice cocycle identity, the local OPE coefficients, and convergence of oscillator OPEs on nested radial domains.

[F7] [[def-cft-r5-circle-reflection-orbifold-sectors]] fixes the reflection action, the invariant untwisted sector, the two half-integer-mode twisted sectors, their ground weights, and the commuting-holonomy trace convention.

[F8] [[thm-jacobi-theta-triple-product]] gives the Jacobi product identity, including the theta products and $\theta_2\theta_3\theta_4=2\eta^3$ for $|q|<1$.

[A1] The Euclidean coordinates and action use the Ginsparg dimensionless worldsheet convention; a dimensional target-space radius is not inferred.

[L1] For the complex fermion current charges define $m=Q_L+Q_R$ and $n=(Q_L-Q_R)/2$; the GSO convention keeps $Q_L+Q_R$ even in NS and odd in R.

## Proof

**Given:** $\tau\in\mathfrak H$, $r=1$, and the definitions and assumptions above.

1.1 The chiral NS occupation trace with current fugacity $y$ is $q^{-1/24}\prod_{k\ge0}(1+yq^{k+1/2})(1+y^{-1}q^{k+1/2})$. The Jacobi triple product rewrites it as $\eta(\tau)^{-1}\sum_{Q\in\mathbb Z}y^Qq^{Q^2/2}$. In the R sector the two zero-mode states have charges $\pm\frac12$, and the trace is $q^{1/12}(y^{1/2}+y^{-1/2})\prod_{k\ge1}(1+yq^k)(1+y^{-1}q^k)=\eta(\tau)^{-1}\sum_{Q\in\mathbb Z+1/2}y^Qq^{Q^2/2}$. Thus in either sector the multiplicity at charge $Q$ has oscillator character $q^{Q^2/2}/\eta(\tau)$, exactly the charged Heisenberg Fock character. [F1, F7, given, algebra]

1.2 In each of the two twisted sectors, the ground contribution is $|q|^{1/24}$ and the half-integer oscillators give $\prod_{k\ge1}|1-q^{k-1/2}|^{-2}$. The centralizer-even projection averages this trace with the trace having a minus sign for every half-integer oscillator. The two fixed points and the factor $1/2$ in the projection leave one copy of each product: $|q|^{1/24}\prod_{k\ge1}|1-q^{k-1/2}|^{-2}+|q|^{1/24}\prod_{k\ge1}|1+q^{k-1/2}|^{-2}$. The product formulas [F8] identify these terms with $|\eta/\theta_4|$ and $|\eta/\theta_3|$. [F7, F8, algebra]

2.1 In NS, $Q_L,Q_R\in\mathbb Z$ and the GSO condition makes their sum even; hence $m\in2\mathbb Z$ and $n\in\mathbb Z$. In R, $Q_L,Q_R\in\mathbb Z+\frac12$ and the zero-mode-shifted GSO condition makes their sum odd; hence $m\in2\mathbb Z+1$ and $n\in\mathbb Z$. Conversely, for any $(m,n)\in\mathbb Z^2$, $Q_L=m/2+n$ and $Q_R=m/2-n$ are both integers when $m$ is even and both half-integers when $m$ is odd, with the required parity in either case. This proves the charge-sector bijection in [L1]. [F1, L1, step 1.1, algebra]

2.2 The CAR contractions give $J(z)J(w)\sim(z-w)^{-2}$ for $J=i{:}\psi^1\psi^2{:}$, and $J(z)\psi^\pm(w)\sim\pm\psi^\pm(w)/(z-w)$. Point-splitting the normal-ordered product gives $T=-\frac12\sum_a{:}\psi^a\partial\psi^a{:}=\frac12{:}JJ{:}$; the two single contractions contribute $-\frac12{:}\psi^a\partial\psi^a{:}$ for each $a$, and the double contraction is exactly the subtracted $(z-w)^{-2}$ term. Hence $[J_m,J_n]=m\delta_{m+n,0}I$. The negative current modes generate a Heisenberg Fock submodule in each charge sector; its character $q^{Q^2/2}/\eta$ equals the full charge-sector character by Step 1.1, and positivity makes the generated map injective. Since each graded piece is finite-dimensional, equality of characters makes it surjective. Thus the current descendants exhaust every fermion charge sector. [F1, F3, step 1.1, algebra]

3.1 Substituting $r=1$ into [F3] gives $p_L=m/2+n=Q_L$ and $p_R=m/2-n=Q_R$. Step 1.1 matches the oscillator partition at each fixed charge, and the formulas $h=Q_L^2/2+N$, $\bar h=Q_R^2/2+\bar N$ therefore agree term by term with the compact-boson weights. Summing over the bijection of Step 2.1 and using [F2] and [F5] proves $Z_D=Z_{\mathrm{circ}}(1;\tau)$. [F2, F3, F5, step 1.1, step 2.1, algebra]

3.2 The fields of current charges $Q_L=\pm1,Q_R=0$ and $Q_L=0,Q_R=\pm1$ are the chiral boson exponentials $e^{\pm iX_L}$ and $e^{\pm iX_R}$. With the fixed phases their fermion representatives are $i(\psi^1\pm i\psi^2)/\sqrt2$ and $i(\bar\psi^1\mp i\bar\psi^2)/\sqrt2$; direct CAR contraction gives the same simple-pole and regular same-charge OPEs as these exponentials. For a fixed charge pair, the commutator $[J_k,W_Q(z)]=Qz^kW_Q(z)$ recursively determines each oscillator coefficient from the highest-weight coefficient: at level $N$, commuting the positive modes through a partition of $N$ determines the coefficient of each oscillator monomial, and the Heisenberg commutator makes this system triangular with nonzero diagonal. The charge-state basis map of Step 2.1 fixes the highest-weight coefficient; the compact charge-shift operators $U_q$ fix the remaining phases by $U_qU_{q'}=\varepsilon(q,q')U_{q+q'}$. Thus every fermion charge intertwiner has the normal-ordered bosonic vertex formula of [F3,F4], and [F6] verifies its cocycle, locality, and associativity. The current-mode bijection then extends the map to all finite oscillator descendants. [F1, F3, F4, F6, step 1.1, step 2.1, step 2.2, algebra]

3.3 Under the current/fermion dictionary, $\rho$ sends $J$ to $-J$ and fixes $T$, exactly as $X\mapsto-X$ acts on the compact-boson current and stress tensor. The untwisted invariant projection on the boson side keeps $V_q+V_{-q}$ and the oscillator states with total reflection eigenvalue $+1$; on the fermion side it keeps precisely the same eigenvalue subspace because $\rho$ flips $\psi^2$ and its descendants. [F1, F3, F4, F7, step 2.2, algebra]

4.1 On the untwisted boson Hilbert space, the trace with $\rho$ inserted vanishes on every nonzero charge sector because $\rho$ sends $(m,n)$ to $(-m,-n)$. In the zero-charge sector it changes the sign of every positive oscillator, so its trace is $(q\bar q)^{-1/24}\prod_{k\ge1}(1+q^k)^{-1}(1+\bar q^k)^{-1}$: an oscillator of energy $k$ contributes $\sum_{s\ge0}(-1)^sq^{ks}=(1+q^k)^{-1}$. The invariant untwisted trace is half the sum of this trace and $Z_{\mathrm{circ}}(1;\tau)$. From the product formula for $\theta_2$ in [F8], half of the inserted trace equals $|\eta/\theta_2|$. Thus $Z_{1}^{+}=\frac12 Z_{\mathrm{circ}}(1;\tau)+|\eta/\theta_2|$. [F3, F5, F7, F8, step 3.1, algebra]

5.1 Adding Steps 4.1 and 1.2 gives $Z_{\mathrm{orb}}(1;\tau)=\frac12Z_{\mathrm{circ}}(1;\tau)+|\eta/\theta_2|+|\eta/\theta_3|+|\eta/\theta_4|$. The identity $\theta_2\theta_3\theta_4=2\eta^3$ rewrites the last three terms as $\frac12(a_2a_3+a_2a_4+a_3a_4)$. By Step 3.1, $\frac12 Z_{\mathrm{circ}}(1;\tau)=\frac14(a_2^2+a_3^2+a_4^2)$, so $Z_{\mathrm{orb}}(1;\tau)=\frac14(a_2+a_3+a_4)^2=Z_M(\tau)^2$ by [F2]. In this expansion, the untwisted projection is $\frac14(a_2^2+a_3^2+a_4^2)+\frac12a_3a_4$, while the twisted projection is $\frac12a_2a_3+\frac12a_2a_4$. The latter cross terms are the two assignments of the spatial Ramond sector to one or the other independently spin-summed Majorana; their ground fields are $\sigma^1$ and $\sigma^2$. Thus the match identifies the two twisted sectors as well as the total character. [F2, F5, F8, step 3.1, step 4.1, step 1.2, algebra]

6.1 A spatial $\rho$ twist changes the sign of $J$ around the insertion, so its modes are half-integer and it has no zero mode. A spin field $\sigma^1$ twists $\psi^1$ and a spin field $\sigma^2$ twists $\psi^2$; in either case $J=i\psi^1\psi^2$ changes sign. The two bosonic twisted ground states and the two independent-Majorana fields $\sigma^1,\sigma^2$ each have weights $(1/16,1/16)$ and the same chosen square-root branch. Their excited states are generated by the same half-integer current modes. The centralizer lift in [F7] retains both ground states and the even-oscillator eigenspace, exactly the two spin-twisted choices in the independent-Majorana sum. The OPE $J\sigma_j\sim\tau_j/(z-w)^{1/2}$ agrees with the fermionic twist OPEs in [F1]: with the stated phases set $\tau_0=i e^{i\pi/4}\mu^1\psi^2/\sqrt2$ and $\tau_\pi=i e^{i\pi/4}\psi^1\mu^2/\sqrt2$, with right-moving conjugate factors. Hence $\sigma_0\mapsto\sigma^1$ and $\sigma_\pi\mapsto\sigma^2$ give the claimed bijection of projected twisted-sector states and their generating current/twist OPEs. Together with Step 3.3 this proves the claimed operator-sector map. [F1, F7, step 2.2, step 3.3, algebra] ∎
## Remarks

The phrase “two Dirac fermions” in the cited lecture is interpreted as two real chiral $c=1/2$ Majorana components and their right-moving partners, hence one nonchiral complex Dirac field. Two independent complex Dirac species would have $c_L=c_R=2$ and are not covered. The unprojected half-winding charge cover contains the elementary odd fermion fields; only its GSO-even integer-lattice subalgebra is the bosonic compact-boson local algebra.
