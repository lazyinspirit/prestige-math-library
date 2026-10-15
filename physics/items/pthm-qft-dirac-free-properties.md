---
id: pthm-qft-dirac-free-properties
kind: physics-theorem
title: Dirac CAR, covariance, graded locality and positive Fock energy
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: "Conditional conclusions for the selected noninteracting Dirac CAR model on flat affine Minkowski spacetime, with fixed (-+++) signature, length coordinates and μ≥0. No empirical premise, interaction, point-field observable or general spin-statistics claim is used."
dependency_level: 8
deps:
  - def-qft-free-dirac-model
  - def-qft-framework-units
  - post-qft-free-field-model
  - lem-qft-free-dirac-car-locality
  - lem-qft-dirac-covariance-spectrum
  - lem-qft-dirac-projection-matrices
  - thm-quarter-turn-values-and-shift-formulas
  - def-countable-choice
dependency_roles:
  def-qft-free-dirac-model: formulation-prerequisite
  def-qft-framework-units: formulation-prerequisite
  post-qft-free-field-model: physical-assumption
  lem-qft-free-dirac-car-locality: mathematical-premise
  lem-qft-dirac-covariance-spectrum: mathematical-premise
  lem-qft-dirac-projection-matrices: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, author-hosted full-text Chapter 4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html
      locator: Complete HTML chapter on the Dirac equation, Clifford algebra, spinor representation and plane-wave solutions.
    - title: David Tong, Quantum Field Theory, author-hosted full-text Chapter 5
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S5.html
      locator: Complete HTML chapter; §§5.1.1–5.3, Hamiltonian, fermionic quantization, vacuum, particles and antiparticles.
    - title: Niklas Beisert, Quantum Field Theory I, ETH Zürich 2025 HS complete lecture notes
      url: https://people.phys.ethz.ch/~nbeisert/lectures/QFT1-25HS-Notes.pdf
      locator: Complete 194-page notes; Chapter 5 §§5.1–5.6, Clifford projectors, spinor covariance, Hamiltonian form and fermionic quantization; pp. 82–83, Dirac-sea comparison.
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume Countable Choice and the adopted Dirac branch of [[post-qft-free-field-model]] as specified by [[def-qft-free-dirac-model]]. For all Schwartz spinor tests $F,G$, the bounded smeared field $\Psi$ is antilinear in its test, satisfies
$$\{\Psi(F),\Psi(G)\}=0,\qquad \{\Psi(F),\Psi(G)^\dagger\}=\langle u_F,u_G\rangle I,$$
and solves the tested free Dirac equation. If $F$ and $G$ have compact spacelike-separated supports, the field-field and field-adjoint anticommutators vanish; consequently, finite even polynomials in the bounded smeared fields commute across spacelike-separated regions.

Let $\widetilde G_D$ be the translation and explicit spin-lift group defined in [[lem-qft-dirac-covariance-spectrum]]. Its strongly continuous unitary Fock representation $U$ satisfies
$$U(\widetilde g)\Psi(F)U(\widetilde g)^{-1}=\Psi(\tau_{\widetilde g}F),\qquad \tau_{\widetilde g}F(x)=(S^{-1})^\dagger F(\Lambda^{-1}(x-a)),$$
for $\widetilde g=(a,\Lambda,S)$. For the explicit spatial rotation lift, $S_R(2\pi)=-I_4$ and $S_R(4\pi)=I_4$; hence the $2\pi$ test pullback is $F\mapsto-F$ and $U_{2\pi}\Psi(F)U_{2\pi}^{-1}=-\Psi(F)$, while the $4\pi$ test pullback and field action are identities. The vacuum is invariant and cyclic for the global graded field algebra. On the $n$-particle sector, $U_{2\pi}=(-1)^n I$ and $U_{4\pi}=I$.

The joint spectrum of translations lies in the closed future cone. If $K_D$ denotes the length-coordinate time-translation generator of [[lem-qft-dirac-covariance-spectrum]], its zero-energy eigenspace is $\ker K_D=\mathbb C\Omega$, where $\Omega$ is the normalized vacuum; thus normalized zero-energy vectors differ from $\Omega$ only by a complex phase. For $\mu>0$, the nonvacuum spectrum has gap at least $\mu$ in inverse-length units, hence $m_{\mathrm{rest,SI}}c^2$ in SI energy units. The physical energy is $H_D^{\mathrm{SI}}=\hbar cK_D\ge0$ on the same domain and has the same kernel. This Fock generator acts on a different Hilbert space from the first-quantized multiplier $h_D$, which has both signs of energy. These are conditional deductions in the adopted model, not empirical claims.

## Facts & Assumptions

**Given:** Countable Choice, $\mu\ge0$, the fixed $(-+++)$ and Fourier conventions, and the exact draft mathematical supplier interfaces stated below.

[A1] [[post-qft-free-field-model]] adopts the free Dirac CAR representation, species/statistics assignment and vacuum. This is a physical model assumption, not a derived theorem or empirical conclusion.

[A2] [[def-countable-choice]] defines the Countable Choice axiom assumed by the Fock and Dirac mathematical suppliers; no stronger choice principle is used.

[F1] [[def-qft-free-dirac-model]] fixes the selected $\mu\ge0$ branch, signature, length coordinates, one-particle branches and bounded smeared field; [[def-qft-framework-units]] specifies that inverse-length energy $\omega$ converts to SI energy $\hbar c\omega$.

[F2] [[lem-qft-free-dirac-car-locality]] assumes Countable Choice and the stated Dirac projections, Fock/CAR and Fourier suppliers. Its complete local draft proof establishes the continuous bounded smeared field, the two CAR identities and the tested Dirac equation.

[F3] The same [[lem-qft-free-dirac-car-locality]] proof establishes causal support of the anticommutator kernel and vanishing anticommutators for compact spacelike-separated tests; its statement derives graded locality. Its current mathematical supplier chain remains conditionally escalated on the scalar-causal and upstream QFT-MF01/MF02 inputs.

[F4] [[lem-qft-dirac-covariance-spectrum]] assumes Countable Choice and the exact Dirac, CAR, mass-shell, Lorentz and translation-spectrum suppliers. Its complete local draft proof establishes unitary spin-lift covariance, an invariant cyclic vacuum, the $2\pi$ and $4\pi$ actions, forward-cone spectrum, zero-energy eigenspace $\mathbb C\Omega$ and positive-mass gap. Its current mathematical supplier chain remains conditionally escalated on the local CAR prerequisite and QFT-MF01/MF02 page inputs.

[F5] [[lem-qft-dirac-projection-matrices]] defines $S_R(\theta)=\cos(\theta/2)I_4-i\sin(\theta/2)\Sigma_{\mathbf n}$ for a unit rotation axis and proves it is the explicit spin lift used by [F4].

[F6] [[thm-quarter-turn-values-and-shift-formulas]] proves $\sin(x+\pi)=-\sin x$ and $\cos(x+\pi)=-\cos x$, with $\sin\pi=0$ and $\cos\pi=-1$; setting $x=\pi$ gives $\sin2\pi=0$ and $\cos2\pi=1$.

## Proof

1.1 Under [A1], the physical field and conventions are those fixed in [F1]. The mathematical construction [F2], with the Countable-Choice hypothesis [A2] and its Fock/CAR hypotheses, establishes the displayed smeared CAR relations and tested Dirac equation. Its causal-support conclusion [F3] gives vanishing anticommutators between fields supported in compact spacelike-separated regions; taking adjoints gives the adjoint-adjoint case. Thus every generator from one region anticommutes with every generator from the other. Reordering monomials of degrees $r$ and $s$ contributes $(-1)^{rs}$; for even $r,s$ this is $+1$, so bilinearity gives commutation of finite even polynomials. This deduction does not establish that the adopted model describes nature. [A1, A2, F1, F2, F3, given, algebra]

2.1 The covariance and Fock-representation conclusions follow from [F4] under [A2] for the same $\mu$, metric, projection and CAR conventions. For a $2\pi$ spatial rotation, [F5] and [F6] give $S_R=\cos\pi I_4-i\sin\pi\Sigma_{\mathbf n}=-I_4$; the spacetime rotation is the identity, so the displayed pullback is $-F$ and antilinearity gives $U_{2\pi}\Psi(F)U_{2\pi}^{-1}=-\Psi(F)$. Substituting $x=\pi$ into the pi-shift identities in [F6] gives $\cos2\pi=1$ and $\sin2\pi=0$, hence $S_R(4\pi)=I_4$ and both pullback and field action are identities. The Fock action on each sector is supplied by [F4]. The same covariance supplier gives a strongly continuous unitary representation, invariant vacuum and cyclic global field algebra. [A2, F1, F4, F5, F6, step 1.1]

3.1 The covariance supplier in [F4] identifies its pure time-translation subgroup with the representation in its translation-spectrum supplier. That supplier defines the length-coordinate generator $H$ on the maximal multiplication domain by $U_{\mathrm{trans}}(a^0)=\chi(a^0H)$, where $\chi(s)=\cos s+i\sin s$; its joint spectrum is contained in the closed future cone, its kernel is $\mathbb C\Omega$, and for $\mu>0$ the nonvacuum spectrum has gap at least $\mu$. Write $K_D:=H$ for the generator named in the Statement. Since $x^0=ct$, the SI time-evolution convention in [F1] gives
$$U_{\mathrm{evol}}(t)=U_{\mathrm{trans}}(-ct)=\chi(-ctK_D)=\exp(-ictK_D)=\exp(-itH_D^{\mathrm{SI}}/\hbar),$$
where $H_D^{\mathrm{SI}}=\hbar cK_D$ as in the Statement. Thus the forward-cone spectral result gives $K_D\ge0$ and hence $H_D^{\mathrm{SI}}\ge0$. Since $\hbar c>0$, the domains and kernels of these two generators agree; a vector $z\Omega$ has norm one exactly when $|z|=1$. For $\mu>0$ the SI gap is $\hbar c\mu=m_{\mathrm{rest,SI}}c^2$. The same supplier distinguishes this Fock generator from the two-signed first-quantized multiplier $h_D$, which acts on a different Hilbert space. [F1, F4, algebra] ∎
