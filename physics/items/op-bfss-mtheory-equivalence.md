---
id: op-bfss-mtheory-equivalence
kind: open-problem
title: BFSS Mtheory Equivalence
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: physics
library: physics
deps: []
dependency_roles: {}
aliases: []
physical_scope: "Open equivalence question for the BFSS U(N) matrix quantum mechanics and a specified infinite-momentum/light-cone sector of M-theory; no general-background or all-observable equivalence is asserted."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Tom Banks, Willy Fischler, Stephen H. Shenker, and Leonard Susskind, M Theory As A Matrix Model: A Conjecture, arXiv:hep-th/9610043v3"
      url: "https://arxiv.org/pdf/hep-th/9610043v3"
      locator: "§1; §3, Eq. (3.1), where R is the spatial x11 circle radius; §4, Eq. (4.1), for the matrix action in source conventions; §§4–5 and 8–9 for evidence and derivation caveats."
    - title: "Washington Taylor, The M(atrix) model of M-theory, arXiv:hep-th/0002016v2"
      url: "https://arxiv.org/pdf/hep-th/0002016v2"
      locator: "Introduction and §§3.2–3.5, especially §3.5 Eqs. (3.6)–(3.21), PDF pp. 2–28: the matrix Hamiltonian, null-circle radius, distinct spacelike regulator, Seiberg–Sen scaling, finite-N DLCQ sector, and conditions required for the light-front M-theory interpretation."
    - title: "Aidan Herderschee and Juan Maldacena, Three Point Amplitudes in Matrix Theory, arXiv:2312.12592v4"
      url: "https://arxiv.org/pdf/2312.12592v4"
      locator: "Abstract, Introduction, §§2–4, and Conclusions, PDF pp. 1–18: one compactified supersymmetric-index three-graviton amplitude and its finite-N check."
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-04
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step4-independent-batch-reader; delegated by /root under owner authorization
---

## Open problem

In the source’s flat eleven-dimensional light-cone convention, let $x^0$ be time, $x^{11}$ the chosen longitudinal coordinate, take metric signature $(-,+,\ldots,+)$, and define $x^{\pm}=(x^0\pm x^{11})/\sqrt2$ with light-front time $t=x^+$. Discrete light-cone quantization (DLCQ) means imposing a periodic identification of $x^-$ and restricting to a sector in which its conjugate longitudinal momentum is quantized.

For each $N\in\mathbb Z_{>0}$, let $M_N(\mathbb C)$ denote the complex $N\times N$ matrices and $U(N)=\{U\in M_N(\mathbb C):U^\dagger U=I_N\}$. Hermitian means $M^\dagger=M$. An adjoint matrix transforms by $M\mapsto UMU^{-1}$. The transverse rotation group is $SO(9)=\{O\in M_9(\mathbb R):O^{\mathsf T}O=I_9,\det O=1\}$; choose real symmetric $16\times16$ Clifford matrices satisfying $\gamma_i\gamma_j+\gamma_j\gamma_i=2\delta_{ij}I_{16}$. For $u\in\mathbb R^9$, put $\gamma(u)=\sum_i u_i\gamma_i$ and define $\operatorname{Spin}(9)\subset GL_{16}(\mathbb R)$ as the group of products $\gamma(u_1)\cdots\gamma(u_{2m})$, where $m\ge0$ and every $u_j$ has Euclidean norm one (the empty product is $I_{16}$). Its spin representation on $\mathbb R^{16}$ is matrix multiplication; its vector action is the rotation $O$ determined by $S\gamma(v)S^{-1}=\gamma(Ov)$ for $S\in\operatorname{Spin}(9)$ and $v\in\mathbb R^9$. Grassmann-odd components anticommute.

For a fixed positive integer $N$ and $R_->0$, let $x^{-}\sim x^{-}+2\pi R_-$ be the lightlike-circle identification and let the compact longitudinal momentum be $P^{+}=N/R_-$. The string-unit type-IIA presentation uses $\hbar=c=\ell_s=1$; let the constant asymptotic dilaton $\Phi_\infty\in\mathbb R$ define the dimensionless coupling $g_s=e^{\Phi_\infty}>0$. The source's relation $R_{11}=g_s\ell_s$ is for the spatial M-theory circle, whereas $R_-$ is the radius of the lightlike circle. In the Seiberg–Sen interpretation of the finite-$N$ DLCQ sector, a separate spacelike regulator radius $R_s$ tends to zero. Here $\ell_{11}$ is the target eleven-dimensional Planck length and $\widetilde\ell_{11}$ is the rescaled Planck unit used for the spacelike regulator. The source's scaling relation is $R_s/\widetilde\ell_{11}^{2}=R_-/\ell_{11}^{2}$; the regulator's IIA coupling and string length satisfy $\widetilde g_s=(R_s/\widetilde\ell_{11})^{3/2}\to0$ and $\widetilde\ell_s^{2}=\widetilde\ell_{11}^{3}/R_s$. For the D0-brane quantum mechanics written in the string-unit variables below, $t$ and $X^i$ denote their dimensionless numerical values and the coupling in its action is $g_s$. Its use as a finite-$N$ DLCQ model is the stated limiting interpretation, not an equality between that action coupling and $R_-$. With light-front time $t=x^{+}$, the model is the quantum mechanics with nine Hermitian adjoint matrices $X^i(t)$, $i=1,\ldots,9$, sixteen real Grassmann-odd adjoint matrices $\Theta_\alpha(t)$ transforming in the spin representation of $\operatorname{Spin}(9)$, and a nondynamical Hermitian $U(N)$ gauge field $A_0(t)$. With $\gamma_i$ the real $16\times16$ Euclidean Clifford matrices, $D_tX^i=\dot X^i-i[A_0,X^i]$, and $D_t\Theta=\dot\Theta-i[A_0,\Theta]$, its string-unit action in the displayed Hermitian-matrix convention is
$$
S=\frac{1}{2g_s}\int dt\,\operatorname{Tr}\left[\sum_i(D_tX^i)^2+\frac12\sum_{i,j}[X^i,X^j][X^i,X^j]+\Theta^{\mathsf T}\left(iD_t\Theta-\sum_i\gamma_i[X^i,\Theta]\right)\right].
$$
Here $\operatorname{Tr}$ is the fundamental matrix trace. Variation of $A_0$ imposes the $U(N)$ Gauss law: physical wavefunctions are invariant under simultaneous conjugation $X^i\mapsto UX^iU^{-1}$, $\Theta\mapsto U\Theta U^{-1}$ for every $U\in U(N)$; equivalently every infinitesimal gauge generator annihilates a physical state. At finite $N$ and $R$, the proposed target is this fixed-momentum DLCQ sector, not all states of uncompactified M-theory. The uncompactified comparison requires a specified scaling of $N$ and $R$; for scattering amplitudes the source takes $N_i,R_-\to\infty$ with each $P_i^+=N_i/R_-$ fixed, and separately specifies transverse-circle limits when present. These limits and the admissible backgrounds and observables are part of the conjecture, not consequences of the finite-$N$ action.

Establish that large-N BFSS U(N) supersymmetric matrix quantum mechanics is equivalent to M-theory in the infinite-momentum/light-cone frame for the declared backgrounds and observables, including finite-N meaning, scattering, compactification and brane sectors. BFSS is a nonperturbative proposal with tests, not proof of M-theory existence or equivalence.

## Open problem references

[Banks, Fischler, Shenker, and Susskind, §1, §3 Eq. (3.1), §4 Eq. (4.1), and §§8–9](https://arxiv.org/pdf/hep-th/9610043v3)

[Taylor, The M(atrix) model of M-theory, Introduction and §§3.2–3.5, especially §3.5](https://arxiv.org/pdf/hep-th/0002016v2)

[Herderschee and Maldacena, §§2–4](https://arxiv.org/pdf/2312.12592v4)

## Status

The source-status review dated 2026-10-30 finds this equivalence unresolved. Banks–Fischler–Shenker–Susskind propose the large-$N$ equivalence and give evidence rather than a proof; their discussion leaves questions about the existence and interpretation of the limit, eleven-dimensional Lorentz invariance, and compactification and brane sectors. Taylor distinguishes the finite-$N$ matrix quantum mechanics and its proposed DLCQ-sector interpretation from the unproved equivalence of its limiting sector with complete M-theory. Herderschee and Maldacena’s selected flat-space three-graviton computation uses nonzero longitudinal momenta and a compactified-index setup with one imaginary transverse momentum; its finite-$N$ agreement tests one protected amplitude and does not establish the full equivalence for other observables or backgrounds. This is a targeted source review through 2026-10-30, not an exhaustive literature claim.

