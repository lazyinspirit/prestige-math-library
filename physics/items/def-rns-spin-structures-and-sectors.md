---
id: def-rns-spin-structures-and-sectors
kind: definition
title: RNS Spin Structures and Sectors
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
deps:
  - post-rns-flat-worldsheet-model
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - def-cft-r5-free-fermion-spin-theory
dependency_roles:
  post-rns-flat-worldsheet-model: physical-assumption
  def-given-spin-and-spinc-structures-and-associated-spinor-bundles: mathematical-premise
  def-cft-r5-free-fermion-spin-theory: mathematical-premise
physical_scope: "Supplied Euclidean spin-line data for closed RNS conformal-field sectors and algebraic Lorentzian free-RNS sectors on closed cylinders or open NN strips; no existence theorem for spin structures, global supermoduli construction, or spin-structure sum is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapter 6.3, printed pp. 131–136, equations (6.25)–(6.52), closed and open NS/R boundary sectors and mode expansions."
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, §§7.2–7.5, printed pp. 98–112, NS/R sectors, torus spin structures, and spin-structure transformations."
    - title: "Oliver Schlotterer, Scattering amplitudes in open superstring theory"
      url: "https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf"
      locator: "§§2.2.1–2.2.4, printed pp. 35–40 (PDF pp. 56–61), fermion sectors, zero modes and spin fields."
    - title: "Spencer Dembner, Notes on Conformal Geometry, Uniformization, and Ricci Flow (2020)"
      url: "https://bpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/1/1946/files/2020/08/Math_319.pdf"
      locator: "§2a, Lemma 2.9 and Theorem 2.10: smooth Riemannian surfaces admit local isothermal coordinates; the lemma constructs a compatible complex structure from orientation-preserving isothermal charts. The theorem refers to Spivak, A Comprehensive Introduction to Differential Geometry, Vol. IV, Addendum 1 to Chapter 9, for a full proof."
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

Let $D\in\mathbb Z_{>0}$, let $M=\mathbb R^{1,D-1}$ carry the Minkowski metric $\eta=\operatorname{diag}(-,+,\ldots,+)$ from the adopted RNS model, and let $X:\Sigma\to M$ be a $C^2$ target map. For the closed Euclidean conformal-field formulation, take $\Sigma$ to be a connected smooth oriented two-manifold without boundary with a smooth Riemannian metric $h$; its conformal structure makes it a Riemann surface. Write $K_\Sigma=T^{*(1,0)}\Sigma$ for its holomorphic cotangent line bundle. In the chiral-line description, a spin structure is a holomorphic line bundle $S\to\Sigma$ together with an isomorphism $S^{\otimes2}\cong K_\Sigma$. For one common geometric nonchiral spin structure set $S_L=S$ and $S_R=\overline S$, so $S_L^{\otimes2}\cong K_\Sigma$ and $S_R^{\otimes2}\cong\overline{K_\Sigma}$. A factorized chiral state-space description may instead supply these two square-root line bundles independently before projection; that independent choice is additional sector data, not one common geometric spin structure. If spin data are recorded as a frame-bundle lift, it means a principal $\operatorname{Spin}(2)$-bundle $P$ and a $\operatorname{Spin}(2)$-equivariant two-fold map $\widetilde\lambda:P\to P_{SO}(T\Sigma,h)$ covering the identity and satisfying $\widetilde\lambda(pg)=\widetilde\lambda(p)\lambda_2(g)$ for the covering homomorphism $\lambda_2:\operatorname{Spin}(2)\to SO(2)$, where $P_{SO}(T\Sigma,h)$ is the principal bundle of positively oriented $h$-orthonormal tangent frames; the associated spinor bundle is $P\times_\tau W$ for a specified real Clifford module $W$ and representation $\tau$. No existence criterion or equivalence theorem between these two presentations is used here. These Euclidean conformal-field data are part of the chosen quantum-sector formulation of the Lorentzian RNS model; this definition does not prove a Euclidean path integral or equivalence of Lorentzian and Euclidean observables.

The Grassmann-odd classical chiral matter fields are sections of $S_L\otimes X^*TM_{\mathbb C}$ and $S_R\otimes X^*TM_{\mathbb C}$, respectively, where $TM_{\mathbb C}=TM\otimes_{\mathbb R}\mathbb C$; in the Lorentzian local field domain of the adopted postulate their components are $C^1$. The modes below are algebraic state-space data and assert no operator-domain completion. The Lorentzian target metric remains $\eta$; no positive target inner product is imported from the auxiliary Euclidean worldsheet description. On the spatial circle use $\tau\in\mathbb R$ and $S^1=\mathbb R/(2\pi\mathbb Z)$; NS means $\psi^\mu(\tau,\sigma+2\pi)=-\psi^\mu(\tau,\sigma)$ and has modes $r\in\mathbb Z+\tfrac12$; R means periodicity $\psi^\mu(\tau,\sigma+2\pi)=\psi^\mu(\tau,\sigma)$ and has modes $n\in\mathbb Z$.

For one chirality, let $M_{\mathbb C}=M\otimes_{\mathbb R}\mathbb C$. The NS algebraic Fock space is the exterior algebra generated by the negative half-integer modes acting on a vacuum $|0\rangle_{NS}$; every positive mode annihilates that vacuum. In R, choose a nonzero complex vector space $V_R$ with operators $\Gamma^\mu$ satisfying $\Gamma^\mu\Gamma^\nu+\Gamma^\nu\Gamma^\mu=2\eta^{\mu\nu}I_{V_R}$, and set $\psi_0^\mu=\Gamma^\mu/\sqrt2$. The algebraic R Fock space is the exterior algebra generated by the negative nonzero integer modes over $V_R$; every positive integer mode annihilates $V_R$. Thus both sectors obey $\{\psi_r^\mu,\psi_s^\nu\}=\eta^{\mu\nu}\delta_{r+s,0}I$, with the integer zero modes acting in the explicitly supplied target module. No positive inner product on these covariant modules is asserted. The closed factorized sectors are NS-NS, NS-R, R-NS, and R-R, with independent chiral labels before projection; a geometric nonchiral spin structure supplies the common left/right geometry described above.

For an open NN strip use the $C^1$ Lorentzian components $\psi_+^\mu,\psi_-^\mu$ of the adopted Majorana field on $(\tau,\sigma)\in\mathbb R\times[0,\pi]$, with signs $\epsilon_0,\epsilon_\pi\in\{+1,-1\}$ in the endpoint conditions $\psi_+^\mu(\tau,0)=\epsilon_0\psi_-^\mu(\tau,0)$ and $\psi_+^\mu(\tau,\pi)=\epsilon_\pi\psi_-^\mu(\tau,\pi)$. Doubling across the two endpoints gives monodromy $\epsilon_0\epsilon_\pi$ around the doubled spatial circle; hence the doubled modes are NS when this product is $-1$ and R when it is $+1$. Mixed ND/DN target directions are outside this convention.

## Definition references

[[post-rns-flat-worldsheet-model]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]

[[def-cft-r5-free-fermion-spin-theory]]

[Timo Weigand, *Introduction to String Theory*, Chapter 6.3](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

[Paul Ginsparg, *Applied Conformal Field Theory*, Chapter 7](https://arxiv.org/pdf/hep-th/9108028v1)

[Oliver Schlotterer, *Scattering amplitudes in open superstring theory*, §§2.2.1–2.2.4](https://edoc.ub.uni-muenchen.de/13381/1/Schlotterer_Oliver.pdf)

[Spencer Dembner, *Notes on Conformal Geometry, Uniformization, and Ricci Flow*, §2a, Lemma 2.9 and Theorem 2.10](https://bpb-us-w2.wpmucdn.com/voices.uchicago.edu/dist/1/1946/files/2020/08/Math_319.pdf)

## Remarks

The free-fermion supplier is used for the Euclidean square-root spin-structure and NS/R mode conventions; its positive Fock inner product, Euclidean target metric, and common nonchiral spin sum are not imported. The Lorentzian target Clifford module and its $\eta$-CAR are specified above. Ginsparg, Chapter 7, treats a single nonchiral spin structure and is used only for the NS/R and spin-structure conventions. No claim is made about mixed ND/DN target directions or a global spin-structure measure.
