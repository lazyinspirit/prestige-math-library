---
id: pthm-csm-ensemble-potentials
kind: physics-theorem
title: "Ensemble entropy and potential identities"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-canonical-preparation
  - post-csm-grand-preparation
  - post-csm-isobaric-preparation
  - def-csm-statistical-state-observable
  - thm-csm-exponential-normalization-covariance
  - thm-csm-relative-gibbs-variational-principle
  - def-td-si-quantities
dependency_roles:
  post-csm-canonical-preparation: physical-assumption
  post-csm-grand-preparation: physical-assumption
  post-csm-isobaric-preparation: physical-assumption
  def-csm-statistical-state-observable: formulation-prerequisite
  thm-csm-exponential-normalization-covariance: mathematical-premise
  thm-csm-relative-gibbs-variational-principle: mathematical-premise
  def-td-si-quantities: formulation-prerequisite
physical_scope: "Finite canonical, grand and isothermal-isobaric preparations with finite entropy and energy moments and differentiable normalizers; identities use the explicitly chosen reference measures and fixed microscopic models."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapters 1–2, §§1.3–1.4 and 2.2"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §§4.4–4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Statement

Adopt the canonical, grand and isothermal-isobaric preparations of
[[post-csm-canonical-preparation]], [[post-csm-grand-preparation]] and
[[post-csm-isobaric-preparation]]. Assume their positive finite normalizers,
finite first moments and integrable $\rho\log\rho$, and assume the local
parameter envelopes needed to differentiate each normalizer. Define the
reference-relative entropy by
$S=-k_B\int\rho\log\rho\,dm$ using the exact joint reference of each
preparation. Then the finite canonical free energy, grand potential and
isothermal-isobaric potential satisfy
$$F=-k_BT\log Z=U-TS,\qquad dF=-S\,dT$$
at fixed canonical model and reference;
$$\Omega=-k_BT\log\Xi=U-TS-\mu\bar N,\qquad d\Omega=-S\,dT-\bar N\,d\mu;$$
and, with $B=H+P_{\rm ext}V$,
$$G_{\rm isoP}=-k_BT\log\Delta=\langle H\rangle+P_{\rm ext}\langle V\rangle-TS, \qquad dG_{\rm isoP}=-S\,dT+\langle V\rangle\,dP_{\rm ext}.$$
For every normalized competing density $p$ with the same reference and the
finite energy and entropy conditions of
[[thm-csm-relative-gibbs-variational-principle]], one also has
$\langle H\rangle_p-TS[p]\ge F$, with equality exactly at the canonical
density almost everywhere.
The differentials hold at fixed remaining model data; integer $N$ is not a
differentiable variable. The identities do not assert thermodynamic-limit
equivalence or derive any preparation from ignorance.

## Facts & Assumptions

**Given:** The three adopted normalized exponential laws, integrable entropy
and energy terms, fixed declared references, and local parameter envelopes.

[A1] Each relevant density is normalized and has finite first energy/number/
volume moments and $\int|\rho\log\rho|dm<\infty$.

[A2] The Hamiltonian and the chosen reference are independent of $T$; grand
and pressure derivatives are taken with the other displayed controls fixed.

[A3] Any competing canonical density in the variational clause has finite
energy and absolutely integrable $p\log p$ against the same reference.

[F1] The ensemble probability laws and reference conventions are the three
adopted preparations ([[post-csm-canonical-preparation]],
[[post-csm-grand-preparation]], [[post-csm-isobaric-preparation]]).

[F2] Normalizer derivatives equal means under their local exponential
envelopes ([[thm-csm-exponential-normalization-covariance]]).

[F3] The entropy integral is interpreted against the selected reference
measure ([[def-csm-statistical-state-observable]]); for a Gibbs density the
relative-entropy identity and equality case hold
([[thm-csm-relative-gibbs-variational-principle]]).

[F4] Temperature, energy and Boltzmann-constant units satisfy
$\beta=(k_BT)^{-1}$ ([[def-td-si-quantities]]).

## Proof

**Given:** [A1]–[A3] and the preparation, differentiation, entropy and unit
interfaces [F1]–[F4].

1.1 For a canonical density $\rho=Z^{-1}e^{-\beta H}$, $\log\rho=-\beta H-\log Z$. Integrating against $\rho$ gives $S=k_B(\log Z+\beta U)$, so $-k_BT\log Z=U-TS$ because $k_BT\beta=1$. For any competitor $p$, [F3] gives $D(p\Vert\rho)=\beta(\langle H\rangle_p-TS[p]-F)\ge0$, with equality exactly when $p=\rho$ almost everywhere. At fixed model, $U=-\partial_\beta\log Z$ by [F2]. Differentiating $F=-\beta^{-1}\log Z$ and using $d\beta/dT=-1/(k_BT^2)$ gives $\partial_TF=-S$, proving the canonical differential. [A1, A2, A3, F1, F2, F3, F4, algebra]

1.2 On the grand disjoint union, $\log\rho=-\beta(H-\mu N)-\log\Xi$. Integration gives $S=k_B(\log\Xi+\beta(U-\mu\bar N))$, hence $\Omega=-k_BT\log\Xi=U-TS-\mu\bar N$. Applying [F2] to the sufficient statistics $H$ and $N$ gives $\partial_\mu\log\Xi=\beta\bar N$ and $-\partial_\beta\log\Xi|_\mu=U-\mu\bar N$. Thus $\partial_\mu\Omega=-\bar N$ and $\partial_T\Omega=-S$, proving the grand differential at fixed model. [A1, A2, F1, F2, F3, F4, algebra]

2.1 For the joint isothermal-isobaric density, $\log\rho=-\beta(H+P_{\rm ext}V)-\log\Delta$. Integration gives $S=k_B(\log\Delta+\beta\langle H+P_{\rm ext}V\rangle)$ and therefore the displayed $G_{\rm isoP}$. Applying [F2] to $B=H+P_{\rm ext}V$ gives $-\partial_\beta\log\Delta|_P=\langle B\rangle$, while $\partial_P\log\Delta=-\beta\langle V\rangle$; hence $\partial_TG_{\rm isoP}=-S$ and $\partial_PG_{\rm isoP}=\langle V\rangle$. This proves the stated differential and completes the conditional identities. [A1, A2, F1, F2, F3, F4, algebra] ∎

