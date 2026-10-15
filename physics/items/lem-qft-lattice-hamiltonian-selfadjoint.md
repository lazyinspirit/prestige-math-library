---
id: lem-qft-lattice-hamiltonian-selfadjoint
kind: lemma
title: "Rotor interacting Hamiltonian with exact domain"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-qft-compact-lattice-gauge-data
dependency_roles:
  def-qft-compact-lattice-gauge-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979)"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; relevant Hamiltonian and Gauss-law treatment in §VI.C, printed pp. 694–696. The Rome1 PDF is byte-identical to the previously retrieved full text."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020)"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text arXiv HTML rendition; §§2.1–2.4, printed pp. 3–8. The corresponding complete 32-page PDF was also retrieved and read."
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

Assume the model data of [[def-qft-compact-lattice-gauge-data]]. The nonnegative electric operator $H_0=\lambda_E\sum_e E_e^2$ is self-adjoint on the stated maximal diagonal domain and finite Fourier/occupation sums are a graph core. The finite plaquette and fermion interaction $V=V_B+V_F$ is bounded and self-adjoint. Therefore $H=H_0+V$ is self-adjoint on exactly $D(H_0)$. Moreover $H$ commutes with every gauge transformation $U(\alpha)$ on this domain. No continuum-limit assertion follows.



## Facts & Assumptions

**Given:** The finite graph, joint Fourier/occupation basis, coefficients, operators, and domain in [[def-qft-compact-lattice-gauge-data]].

[F1] [[def-qft-compact-lattice-gauge-data]]: $H_0$ is multiplication by $\lambda_E\sum_e n_e^2$ on the maximal diagonal domain; $W_p$ is a finite product of link multiplication unitaries; $V_B,V_F$ are finite sums of the displayed plaquette and CAR terms. The model definition records the exact conditional statement and current draft status of its CAR supplier.

## Proof

**Given:** The data and operator domains in [F1], with $\lambda_E>0$.

1.1 In the joint basis, $H_0$ multiplies coefficients by the real nonnegative number $h(\mathbf n)=\lambda_E\sum_e n_e^2$. If $\phi\in D(H_0^*)$ with $H_0^*\phi=\eta$, testing against each basis vector gives $\eta_{\mathbf n,\mathbf m}=h(\mathbf n)\phi_{\mathbf n,\mathbf m}$, so $\eta\in\mathcal H_{\rm kin}$ forces $\sum h(\mathbf n)^2|\phi_{\mathbf n,\mathbf m}|^2<\infty$ and $\phi\in D(H_0)$. Conversely that weighted square summability and Cauchy–Schwarz give the adjoint identity. Hence $H_0^*=H_0$. Truncating a vector to finite subsets of the joint basis converges both in norm and in the $H_0$ graph norm, so finite sums are a graph core. [F1, given, algebra]

2.1 Every $W_p$ is unitary, so $\|W_p+W_p^\dagger\|\le2$ and $W_p+W_p^\dagger$ is self-adjoint. Each CAR operator has norm at most one by the conditional supplier in [F1]; every displayed fermion/link term is a finite sum of products of bounded operators, and pairing each term with its adjoint makes $V_F$ self-adjoint. Since the graph, plaquette list, site modes, and matrices are all finite-dimensional or finite in number, $V$ is bounded and self-adjoint. [F1, step 1.1, algebra]

3.1 Let $\beta>\|V\|$ and $z=\pm i\beta$. The diagonal resolvent $R_0(z)=(H_0-z)^{-1}$ satisfies $\|R_0(z)\|\le1/\beta$, and $$H-z=(I+VR_0(z))(H_0-z).$$ The Neumann series $\sum_{k=0}^{\infty}(-VR_0(z))^k$ converges in operator norm because $\|VR_0(z)\|<1$, so $I+VR_0(z)$ is onto and invertible. Thus both $H-i\beta$ and $H+i\beta$ are onto $\mathcal H_{\rm kin}$. [F1, step 2.1, algebra]

4.1 On $D(H_0)$, $H$ is densely defined and symmetric because $H_0$ and $V$ are. To prove self-adjointness directly, take $y\in D(H^*)$ and choose $x\in D(H)$ with $(H+i\beta)x=(H^*+i\beta)y$, using the surjectivity from step 3.1. Then $y-x\in\ker(H^*+i\beta)=\operatorname{Ran}(H-i\beta)^\perp=\{0\}$, again by step 3.1. Therefore $D(H^*)\subseteq D(H)$; symmetry gives the reverse inclusion and $H=H^*$. Its domain is exactly the original $D(H_0)$ because the sum with bounded $V$ was defined there. [step 3.1, step 2.1, algebra]

5.1 Each $U(\alpha)$ is diagonal in the same Fourier/occupation basis as $H_0$, so it preserves $D(H_0)$ and commutes with $H_0$. The link relation $[E_e,U_e]=U_e$ and the CAR relation $[n_x,c_{y\beta}]=-\delta_{xy}c_{y\beta}$ give $U(\alpha)U_eU(\alpha)^\dagger=e^{i(\alpha_{s(e)}-\alpha_{t(e)})}U_e$ and $U(\alpha)c_{x\beta}U(\alpha)^\dagger=e^{i\alpha_x}c_{x\beta}$. A cycle's link phases telescope to $1$; in a hopping term the phases multiply to $e^{-i\alpha_{s(e)}}e^{i(\alpha_{s(e)}-\alpha_{t(e)})}e^{i\alpha_{t(e)}}=1$, and each onsite bilinear has phase $e^{-i\alpha_x}e^{i\alpha_x}=1$. Therefore $U(\alpha)VU(\alpha)^\dagger=V$ and $U(\alpha)HU(\alpha)^\dagger=H$ on $D(H_0)$. [F1, step 2.1, algebra] ∎
