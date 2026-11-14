---
id: post-qec-distinguishability-ule-coupling
kind: postulate
domain: physics
title: ULE system–bath coupling and short bath memory
status: published
origin: session
deps:
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - pthm-qec-prereq-ule-jump-and-lamb-contract
  - math:def-countable-choice
  - math:def-hilbert-space
  - math:lem-nrqm-composites-hilbert-tensor-construction
  - math:def-unbounded-linear-operator-domain-and-graph
  - math:def-symmetric-self-adjoint-and-essentially-self-adjoint
  - math:def-self-adjoint-positive-unitary-and-normal-operator
  - math:def-trace-class-operator
  - math:def-trace-of-a-trace-class-operator
  - math:thm-trace-is-absolutely-convergent-and-basis-independent
  - math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group
  - physics:lem-nrqm-composites-nuclear-bounded-cyclicity
  - math:def-axiom-of-choice
  - math:def-operator-norm
dependency_roles:
  def-qec-prereq-stationary-spectrum-kernel-contract: mathematical-premise
  pthm-qec-prereq-ule-jump-and-lamb-contract: formulation-prerequisite
  math:def-countable-choice: mathematical-premise
  math:def-hilbert-space: mathematical-premise
  math:lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  math:def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  math:def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  math:def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  math:def-trace-class-operator: mathematical-premise
  math:def-trace-of-a-trace-class-operator: mathematical-premise
  math:thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  physics:lem-nrqm-composites-nuclear-bounded-cyclicity: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-operator-norm: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 9, Eqs. (S2.1)–(S2.2) and following paragraph; PDF p. 10, Eqs.
        (S2.5)–(S2.10); PDF p. 11, S3 introductory paragraph
      statement: The article adopts a Hermitian system–bath coupling with strength
        parameter gamma and a steady bath, describes effective Markovianity when
        bath correlations decay much faster than bath-induced system evolution,
        and states that the resulting Markovianity is independent of system
        details and depends on the bath.
      hypotheses: The article's stated system–bath model and weak-coupling/Born–Markov
        discussion.
      reading_limits: The supplied extracted article text at the cited locations was
        read. This reference attributes the article's formulation; it is not an
        independent proof of the approximation.
    - title: Universal Lindblad equation for open quantum systems
      url: https://arxiv.org/pdf/2004.01469
      locator: PDF p. 1, abstract; pp. 4–6, Secs. II and IIA
      statement: The ULE validity criterion is expressed using bath and system–bath
        coupling properties without a restriction on the system level structure;
        the source assumes a Gaussian bath and remote-past decoupling for the
        stated approximation discussion.
      hypotheses: The source's normalized coupling, Gaussian bath, preparation and
        correlation-time assumptions.
      reading_limits: Read the PDF text of the abstract, coupling normalization,
        remote-past preparation, Gaussianity and Markovianity discussion at the
        cited locations. The microscopic derivation was not reconstructed; no
        page-image inspection or model-specific bath verification is claimed.
physical_scope: An assumed finite-system coupling and a conditional short-memory
  approximation; neither an observation nor exact Markovian reduced dynamics is
  asserted.
dependency_level: 5
---

## Postulate

Assume the Axiom of Choice and Countable Choice. In units with $\hbar=1$, let the system and bath have nonzero complex Hilbert spaces $\mathcal H_S$ and $\mathcal H_B$, with $\dim\mathcal H_S<\infty$; no finite-dimensionality of $\mathcal H_B$ is assumed. Inner products are linear in the first argument. The composite space is the Hilbert tensor product $\mathcal H_S\widehat\otimes\mathcal H_B$: the completion of the algebraic tensor product with $\langle u\otimes v,u'\otimes v'\rangle=\langle u,u'\rangle\langle v,v'\rangle$. Tensor operators act by $(A\otimes D)(u\otimes v)=Au\otimes Dv$ wherever the factors are defined. A density operator here means a bounded self-adjoint trace-class operator $\rho$ with $\langle\rho v,v\rangle\geq0$ for all $v$ and $\operatorname{Tr}\rho=1$. The trace is the basis-independent trace on trace-class operators, including on an infinite-dimensional bath.

Take a self-adjoint system Hamiltonian $H_S:\mathcal H_S\to\mathcal H_S$ and a self-adjoint bath Hamiltonian $H_B:D(H_B)\to\mathcal H_B$. Let $n$ be a positive integer, $\gamma>0$, and let $X_\alpha$ be Hermitian operators on $\mathcal H_S$ with operator norm $\|X_\alpha\|\leq1$. Each bath coupling operator $B_\alpha:D(B_\alpha)\to\mathcal H_B$ is densely defined and Hermitian, meaning $\langle B_\alpha u,v\rangle=\langle u,B_\alpha v\rangle$ for $u,v\in D(B_\alpha)$; bounded operators are included. Require a specified dense subspace $D_B\subseteq D(H_B)\cap\bigcap_{\alpha=1}^nD(B_\alpha)$. With $\odot$ denoting the algebraic tensor product and $I_S,I_B$ the identity operators on the named factors, on $\mathcal H_S\odot D_B$ set $H_{\rm int}=\sqrt\gamma\sum_{\alpha=1}^nX_\alpha\otimes B_\alpha$ and require a specified self-adjoint realization $H$ extending $H_S\otimes I_B+I_S\otimes H_B+H_{\rm int}$ there. Thus $H=H_S+H_B+H_{\rm int}$ uses the tensor-factor convention and this realization; existence of the realization is an assumption, not a consequence of Hermiticity.

Let $\rho_B$ be a bath density operator and write $V_B(t)=e^{-iH_Bt}$ for the unitary group supplied by the self-adjoint bath Hamiltonian. Stationarity means $V_B(t)\rho_BV_B(t)^\dagger=\rho_B$ for every real $t$; this is the meaning of the shorthand $[H_B,\rho_B]=0$ here, without asserting that the two unbounded products exist everywhere. Define $\widetilde B_\alpha(t)=V_B(t)^\dagger B_\alpha V_B(t)$ on $D(\widetilde B_\alpha(t))=V_B(t)^\dagger D(B_\alpha)$. Require that the products $\rho_B B_\alpha$, $B_\alpha\rho_B$, and $\widetilde B_\alpha(t)\widetilde B_\beta(s)\rho_B$ on their natural composition domains are densely defined and have bounded trace-class extensions for every channel and real $s,t$. A trace of such a product means the trace of that extension, which is unique by density. Require the same trace-existence condition for the higher products used in the Gaussian assumption. Assume the coupling observables are centered, $\operatorname{Tr}_B(\rho_BB_\alpha)=\operatorname{Tr}_B(B_\alpha\rho_B)=0$, and Gaussian, meaning their higher correlations are determined by two-point correlations through Wick pairings. Assume the ULE supplier's remote-past factorized preparation $\rho_{SB}(t_0)=\rho_S(t_0)\otimes\rho_B$, with $\rho_S(t_0)$ a system density operator and the remote-past formulation $t_0\to-\infty$.

With these trace and domain hypotheses, define $C_{\alpha\beta}(t-s)=\operatorname{Tr}_B(\widetilde B_\alpha(t)\widetilde B_\beta(s)\rho_B)$. Adopt the stationary spectral and jump-kernel contract, including its integrability, positive spectral matrix, and finite nonzero zeroth and finite first kernel moments. Write $h$ for its kernel and put $\Gamma=4\gamma(\int\|h(t)\|_{2,1}dt)^2$ and $\tau=\int|t|\|h(t)\|_{2,1}dt/\int\|h(t)\|_{2,1}dt$. The short-memory regime is the additional approximation assumption $\Gamma\tau\ll1$: the kernel correlation time $\tau$ is much shorter than the inverse bath-induced rate scale $\Gamma^{-1}$.

Under these assumptions the cited ULE contract supplies a Lindblad-form approximation with a correction; the postulate does not assert exact Markovian dynamics. The article characterizes Markovianity in this regime as independent of system details and dependent only on the bath. In the cited ULE formulation the criterion is independent of the system's level structure, but also depends on the coupling strength and on the stated normalization and preparation assumptions. The article's atomic and molecular application additionally invokes electric-dipole coupling and weak-coupling/Born–Markov assumptions; this postulate alone does not establish those assumptions for a particular photon bath.

## Postulate references

[[math:def-operator-norm]]

## Facts & Assumptions

[F1] The stationary-kernel contract defines the spectral matrix, its positive square-root kernel, the mixed norm and the required moments; its Fourier-inversion special case assumes countable choice. [[def-qec-prereq-stationary-spectrum-kernel-contract]] [[math:def-countable-choice]]

[F2] For the normalized finite-system coupling, centered stationary Gaussian bath, remote-past factorized preparation and stated kernel conditions, the ULE supplier gives a conditional Lindblad-form approximation in the regime $\Gamma\tau\ll1$; it does not assert residual-free exact dynamics. [[pthm-qec-prereq-ule-jump-and-lamb-contract]]

[F3] Complex Hilbert spaces are complete inner-product spaces; under Countable Choice the specified algebraic tensor pairing has a Hilbert completion. [[math:def-hilbert-space]] [[math:lem-nrqm-composites-hilbert-tensor-construction]]

[F4] An unbounded operator includes its domain as data. Hermitian means symmetric on that domain; self-adjointness requires equality with the adjoint, including domains. Bounded self-adjoint, positive and unitary operators have their usual Hilbert-space meanings. [[math:def-unbounded-linear-operator-domain-and-graph]] [[math:def-symmetric-self-adjoint-and-essentially-self-adjoint]] [[math:def-self-adjoint-positive-unitary-and-normal-operator]]

[F5] Under Countable Choice, trace-class operators are compact operators with summable singular values and have a well-defined basis-independent complex trace; supplied Hilbert bases give the same absolutely convergent diagonal sum. [[math:def-trace-class-operator]] [[math:def-trace-of-a-trace-class-operator]] [[math:thm-trace-is-absolutely-convergent-and-basis-independent]]

[F6] Under the Axiom of Choice, a self-adjoint bath Hamiltonian defines the strongly continuous unitary group $V_B(t)=e^{-iH_Bt}$. [[math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]

[F7] The trace is cyclic for a bounded multiplier and a trace-class operator; in particular it is invariant under unitary conjugation. This fact does not cyclically permute unbounded observables. [[physics:lem-nrqm-composites-nuclear-bounded-cyclicity]]

[A1] Assume the Axiom of Choice for the self-adjoint unitary-group supplier, and Countable Choice for the Hilbert tensor, operator and trace suppliers and the Fourier-inversion special case. [[math:def-axiom-of-choice]] [[math:def-countable-choice]]

## Justification

The Hilbert construction in [F3] supplies the composite space. The tensor action specifies that the system and bath operators act on separate factors. On the stipulated common domain the finite Hermitian sum is a formal interaction, using the operator meanings in [F4]. Its self-adjoint Hamiltonian realization is separately required; no self-adjointness theorem for arbitrary unbounded sums is inferred. The density-operator definition uses [F5] on either space and does not apply a finite-dimensional density definition to an infinite-dimensional bath. Each required product has at most one bounded extension because two bounded extensions agreeing on a dense domain agree everywhere. The trace-class-extension assumption and [F5] therefore make every displayed expectation and two-point trace a uniquely defined finite scalar.

By [F6], $V_B$ has the group law. Write $T_{\alpha\beta}(t,s)$ for the trace-class extension of $\widetilde B_\alpha(t)\widetilde B_\beta(s)\rho_B$. Stationarity and the transformed domains give $T_{\alpha\beta}(t+r,s+r)=V_B(r)^\dagger T_{\alpha\beta}(t,s)V_B(r)$: the identity holds on the corresponding dense natural composition domains and then for their unique bounded extensions. By [F7] these extensions have the same trace. Taking $r=-s$ makes the trace depend only on $t-s$, as used in the definition of $C$. This argument moves only bounded unitaries around the trace-class extension, not the individual unbounded bath observables.

The kernel assumptions in [F1] make the two displayed moment expressions finite and the denominator nonzero. Thus $\Gamma$ and $\tau$ are defined within that contract. The assumptions of [F2] are stated separately because a stationary bath or a short correlation time by itself does not supply Gaussianity, factorization, or the required kernel moments. The approximation is a modeling input with the stated hypotheses, not a measured property of every physical bath. The article's broad characterization is retained as attribution; the independently cited ULE statement specifies the coupling dependence and the level-structure scope.
