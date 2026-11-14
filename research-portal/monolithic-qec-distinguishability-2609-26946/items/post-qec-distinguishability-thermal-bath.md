---
id: post-qec-distinguishability-thermal-bath
kind: postulate
domain: physics
title: Thermal photon bath and partition function
status: draft
origin: session
deps:
  - post-qec-distinguishability-photon-field
  - post-qec-prereq-regularized-photon-dipole-model
  - lem-qec-prereq-bosonic-thermal-moment-contract
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - physics:def-qftx-photon-helicity-bundle
  - physics:thm-qftx-photon-rotations-helicity
dependency_roles:
  post-qec-distinguishability-photon-field: formulation-prerequisite
  post-qec-prereq-regularized-photon-dipole-model: formulation-prerequisite
  lem-qec-prereq-bosonic-thermal-moment-contract: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  physics:def-qftx-photon-helicity-bundle: mathematical-premise
  physics:thm-qftx-photon-rotations-helicity: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 12, section S3, opening paragraph and text preceding equation
        (S3.4); page 11, section S3 opening paragraph
      statement: The article assumes an isotropic photon bath, introduces its thermal
        state and photon-number basis, and writes its partition function as a
        product over photon modes before deriving bath correlations.
      hypotheses: The idealized free photon bath and finite-temperature treatment of
        section S3, in units with hbar equal to one.
      reading_limits: Read the supplied original PDF pages 11–12 and the corresponding
        extracted text. This citation attributes the physical model and formal
        partition expression; it supplies no proof of normalization, isotropy,
        or a regulator-removal limit.
    - title: Jan Dereziński, Introduction to Representations of the Canonical
        Commutation and Anticommutation Relations (ESI 1741, 2005)
      url: https://www.esi.ac.at/preprints/esi1741.pdf
      locator: Section 9.3, printed pp. 40–42 (PDF pages 41–43), equation (73), the
        left Araki–Woods construction, and Theorem 40(1),(4).
      statement: For a complex Hilbert space and a self-adjoint $0\leq\gamma\leq I$
        with $\ker(I-\gamma)=0$, put $N=\gamma(I-\gamma)^{-1}$. The left
        Araki–Woods Weyl representation exists on $D(N^{1/2})$; its vacuum
        expectation is $\exp[-\|g\|^2/4-\langle g,Ng\rangle/2]$, and its field
        two-point function is $\langle g,f\rangle/2+\operatorname{Re}\langle
        g,Nf\rangle$ when these expressions are defined.
      hypotheses: Complex Hilbert space, the stated self-adjoint contraction and
        kernel condition; Weyl labels in the square-root domain. The present
        compactly supported transverse tests avoid zero momentum, so all
        displayed multiplier pairings are finite.
      reading_limits: Read the construction and Theorem 40(1),(4) in the institutional
        PDF, with the surrounding parameter definitions. These statements are
        imported, not locally reproved. No assertion about the later factor
        classification, interacting equilibrium, point fields, or convergence of
        regulators is used.
physical_scope: "An idealized free photon bath: finite positive-frequency
  oscillator Gibbs preparations, and an explicitly specified isotropic algebraic
  thermal preparation on transverse smeared observables. The latter supplies a
  rotation and correlation interface, not a limit of the finite-mode regulators.
  No laboratory observation, unsmeared point-field operator, or infinite-volume
  Gibbs density is asserted."
dependency_level: 4
proof_strategy: direct
---

## Postulate

Adopt the article's idealized isotropic photon bath. The algebraic preparation and rotation equations below give a precise meaning to its isotropy for transverse smeared fields. A finite selection of plane-wave modes need not itself have exact rotational symmetry; its Gibbs preparation is specified separately.

Use units with $\hbar=1$ and let $k_B>0$ be Boltzmann's constant. For a finite regulator with modes $\lambda=(\mathbf k,\epsilon)$ of frequencies $\omega_\lambda=c|\mathbf k|>0$, assume independent bosonic oscillators with free Hamiltonian $H_B=\sum_\lambda\omega_\lambda a_\lambda^\dagger a_\lambda$. Here $\mathbf k$ is a nonzero wave vector, $\epsilon$ labels a transverse polarization, and $a_\lambda$ and $a_\lambda^\dagger$ are the mode annihilation and creation operators. The number basis $|\{n_\lambda\}\rangle$ is indexed by nonnegative integer occupation numbers, one for each retained mode.

At inverse temperature $\beta>0$, corresponding to temperature $T=1/(k_B\beta)$, postulate the free bath preparation $\rho_B=Z(\beta)^{-1}e^{-\beta H_B}$, where $Z(\beta)=\operatorname{Tr}(e^{-\beta H_B})=\prod_\lambda(1-e^{-\beta\omega_\lambda})^{-1}$. The trace and product in this regulated statement are over the finite collection of modes, although each oscillator has infinitely many occupation levels. This state is stationary under the free bath dynamics. The article first treats finite temperature and subsequently considers the vacuum limit.

For the isotropic preparation use the transverse space $\mathfrak h=\{g\in L^2(\mathbb R^3,d^3k;\mathbb C^3):\mathbf k\cdot g(\mathbf k)=0\text{ a.e.}\}$, with $\langle g,f\rangle=\int\overline g\cdot f\,d^3k$ linear in $f$. Let $\mathcal D=\{g\in C_c^\infty(\mathbb R^3\setminus\{0\};\mathbb C^3):\mathbf k\cdot g(\mathbf k)=0\}$ and $\omega(\mathbf k)=c|\mathbf k|$. Define $N_\beta$ to be multiplication by $(e^{\beta\omega(\mathbf k)}-1)^{-1}$ on its maximal $L^2$ domain. Every test in $\mathcal D$ lies in that domain.

The observable algebra $\mathcal A$ consists of finite complex linear combinations of formal symbols $W(g)$, $g\in\mathcal D$, with unit $W(0)$, product $W(g)W(f)=e^{-i\operatorname{Im}\langle g,f\rangle/2}W(g+f)$ and involution $W(g)^*=W(-g)$. Postulate the preparation given by the complex-linear functional $\varpi_\beta$ determined by

$$\varpi_\beta(W(g))=\exp\left[-\frac14\langle g,(I+2N_\beta)g\rangle\right].$$

It is a normalized positive functional: $\varpi_\beta(W(0))=1$ and $\varpi_\beta(A^*A)\geq0$ for every $A\in\mathcal A$. Its physical adoption is the postulate; positivity is supported by the imported representation below. This algebraic state does not require a density operator on the original infinite-volume photon Fock space.

Here rotations are $SO(3)=\{R\in M_3(\mathbb R):R^TR=I,\det R=1\}$, acting by $U_Rg(\mathbf k)=Rg(R^{-1}\mathbf k)$. Define $\alpha_R(W(g))=W(U_Rg)$ and the free evolution $\tau_t(W(g))=W(e^{i\omega t}g)$, extending both linearly. These are algebra automorphisms and $\alpha_R\alpha_S=\alpha_{RS}$. The preparation is isotropic and stationary in the explicit sense $\varpi_\beta\circ\alpha_R=\varpi_\beta$ and $\varpi_\beta\circ\tau_t=\varpi_\beta$.

Field correlations mean the derivatives of the Weyl expectations: for $g_1,\ldots,g_n\in\mathcal D$, $t_1,\ldots,t_n\in\mathbb R$, define

$$C_\beta(g_1,t_1;\ldots;g_n,t_n)=i^{-n}\left.\partial_{s_1}\cdots\partial_{s_n}\varpi_\beta\left(W(s_1e^{i\omega t_1}g_1)\cdots W(s_ne^{i\omega t_n}g_n)\right)\right|_{s_1=\cdots=s_n=0}.$$

All $s_j$ are real. These derivatives exist, and $C_\beta(U_Rg_1,t_1;\ldots;U_Rg_n,t_n)=C_\beta(g_1,t_1;\ldots;g_n,t_n)$. In particular, $C_\beta(g,t;f,0)=\langle e^{i\omega t}g,f\rangle/2+\operatorname{Re}\langle e^{i\omega t}g,N_\beta f\rangle$. To specify vector components at the emitter, take the emitter as spatial origin, fix any nonzero smooth radial smearing $\chi\in C_c^\infty((0,\infty);\mathbb C)$, and set $g_v(\mathbf k)=\chi(|\mathbf k|)(I-\hat{\mathbf k}\hat{\mathbf k}^T)v$ for $v\in\mathbb R^3$, $\hat{\mathbf k}=\mathbf k/|\mathbf k|$. Overall field normalization and radial frequency factors belong to the chosen $\chi$. The smeared electric-field component $E_v(t)$ denotes the field whose correlations are $C_\beta(g_v,t;\ldots)$, equivalently the generator of $s\mapsto W(se^{i\omega t}g_v)$ in the imported regular representation. Thus $U_Rg_v=g_{Rv}$ and its components transform by $E_v(t)\mapsto E_{Rv}(t)$; for the Cartesian basis $e_\alpha$ this is $E_{e_\alpha}(t)\mapsto\sum_\delta R_{\delta\alpha}E_{e_\delta}(t)$.

The article also writes its Gibbs expression and partition product in unregulated photon-mode notation; those trace expressions remain formal here. The specified algebraic preparation supplies smeared correlations and their exact isotropy, but does not establish an infinite-volume trace-class Gibbs operator, unsmeared point fields, or a limit of the finite-mode Gibbs regulators. Removing the chosen smearing or relating the two preparations requires a separate convergence contract.

## Postulate references

[[post-qec-distinguishability-photon-field]]

[[post-qec-prereq-regularized-photon-dipole-model]]

[[lem-qec-prereq-bosonic-thermal-moment-contract]]

[[physics:def-qftx-photon-helicity-bundle]]

[[physics:thm-qftx-photon-rotations-helicity]]

## Facts & Assumptions

[F1] The photon-field model assigns the nonzero wave vector, two transverse polarizations, and frequency $\omega_{\mathbf k}=c|\mathbf k|$; its unrestricted mode sum is model notation. [[post-qec-distinguishability-photon-field]]

[F2] The regulated dipole model permits finitely many independent positive-frequency oscillators and treats their thermal preparation as an additional choice; it does not assert a continuum Gibbs density operator. [[post-qec-prereq-regularized-photon-dipole-model]]

[F3] For finitely many bosonic modes with positive frequencies and $\beta>0$, the Gibbs exponential is trace class, its trace is the stated finite product, and its normalized exponential is a density operator. [[lem-qec-prereq-bosonic-thermal-moment-contract]]

[F4] The transverse Hilbert space, smooth compact transverse tests away from zero, projector $P(\hat{\mathbf k})=I-\hat{\mathbf k}\hat{\mathbf k}^T$, and unitary passage between the weighted and Lebesgue realizations are specified in [[physics:def-qftx-photon-helicity-bundle]].

[F5] Under Choice, $U_Rg(\mathbf k)=Rg(R^{-1}\mathbf k)$ is a unitary representation preserving transversality; the same formula acts in the Lebesgue realization. [[physics:thm-qftx-photon-rotations-helicity]]

[F6] The imported left Araki–Woods construction supplies a positive vacuum functional with the stated characteristic function and two-point function; its parameter and domain hypotheses are recorded in External input. [Dereziński, section 9.3, Theorem 40(1),(4)](https://www.esi.ac.at/preprints/esi1741.pdf).

[A1] Assume the Axiom of Choice, Countable Choice, and Dependent Choice for the cited constructions. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Justification

**Given:** The finite positive-frequency regulator, $\beta>0$, $c>0$, the transverse test domain, and A1. The numbered argument establishes the mathematical interfaces of the preparations; their physical adoption remains a postulate.

1.1 F1 and F2 supply the finite-mode conventions. On the number basis $H_B$ has eigenvalue $\sum_\lambda\omega_\lambda n_\lambda$. F3 applies because the mode number is finite and all frequencies and $\beta$ are positive; it gives the finite nonzero partition function and normalized Gibbs density. The free evolution and this density are diagonal in the same basis, so conjugation preserves the density, as also established in F2. Choice and Countable Choice are retained for the cited oscillator construction; Dependent Choice is inherited from F2's continuum conventions. [F1, F2, F3, A1, algebra]

1.2 F4 identifies $\mathfrak h$ and $\mathcal D$. The multiplier $\gamma_\beta=e^{-\beta\omega}$ is a self-adjoint contraction with $\ker(I-\gamma_\beta)=0$, since $0<e^{-\beta c|\mathbf k|}<1$ almost everywhere. Each $g\in\mathcal D$ has compact support in an annulus $0<r_0\leq|\mathbf k|\leq r_1$, where $N_\beta$ is bounded, so $g\in D(N_\beta)\subseteq D(N_\beta^{1/2})$. Therefore F6 applies with $N=\gamma_\beta(I-\gamma_\beta)^{-1}=N_\beta$. Its representation sends the formal generators to unitaries with the stated product and involution; pulling back the unit-vacuum expectation proves normalization and positivity of $\varpi_\beta$. The algebra itself is associative because the real-bilinear form $\sigma(g,f)=\operatorname{Im}\langle g,f\rangle$ gives the identity $\sigma(g,f)+\sigma(g+f,h)=\sigma(f,h)+\sigma(g,f+h)$ for its multiplication phases; conjugate-linearity and antisymmetry give the involution laws. No finite-dimensional Weyl-algebra theorem or global Gibbs trace is used. [F4, F6, A1, algebra]

2.1 By F5, $U_R$ is unitary, preserves $\mathcal D$, and obeys the group law; smoothness and compact support are preserved by the invertible linear substitution. Radiality of $\omega$ gives $N_\beta U_R=U_RN_\beta$ on the multiplier domain. Consequently $U_R$ preserves both the multiplication phase and $\langle g,(I+2N_\beta)g\rangle$. The displayed $\alpha_R$ thus preserves products and involutions, has inverse $\alpha_{R^{-1}}$, and leaves $\varpi_\beta$ invariant on every generator and hence every finite linear combination. Multiplication by $e^{i\omega t}$ likewise preserves $\mathcal D$, the inner product and the covariance, proving the same assertions for $\tau_t$ and stationarity. These are local deductions from the explicit preparation, not empirical evidence for it. [F4, F5, step 1.2, algebra]

3.1 Repeated Weyl multiplication expresses the expectation defining $C_\beta$ as an exponential of a finite quadratic polynomial in the real $s_j$; all coefficients are finite on $\mathcal D$. Thus every displayed derivative exists. Step 2.1 leaves that expectation unchanged under simultaneous $U_R$ on all labels, so differentiation proves invariance of every such correlation. For two labels differentiation gives $\langle e^{i\omega t}g,f\rangle/2+\operatorname{Re}\langle e^{i\omega t}g,N_\beta f\rangle$, consistently with F6. Finally $P(R\hat{\mathbf k})=RP(\hat{\mathbf k})R^{-1}$ follows directly from $P(n)=I-nn^T$ and orthogonality. With radial $\chi$ this proves $U_Rg_v=g_{Rv}$; real-linearity in $v$ gives the Cartesian transformation stated above. This verifies the intended preparation and correlation symmetry on the specified smearing domain without imposing it on an arbitrary finite mode selection. [F4, F5, F6, step 1.2, step 2.1, algebra] ∎

## External input

Use Dereziński's section 9.3, equation (73) and Theorem 40(1),(4), for the left Araki–Woods representation and its vacuum functional. The imported hypotheses are a complex Hilbert space, a self-adjoint $0\leq\gamma\leq I$ with $\ker(I-\gamma)=0$, and labels in $D([\gamma(I-\gamma)^{-1}]^{1/2})$. Here $\gamma=\gamma_\beta$; step 1.2 checks these hypotheses. The representation's positivity and field-moment formulas are imported; the rotation, stationarity and application to vector smearings are the local calculations above. The article citation supplies attribution of the physical assumption only.
