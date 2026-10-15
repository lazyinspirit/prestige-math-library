---
id: ex-tdmath-pure-state-versus-average-entropy
kind: example
title: "Pure-state entropy and entropy of a dephased average"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps: ["def-complex-exponential","def-natural-logarithm","def-real-and-complex-inner-product-space","thm-logarithm-derivative-and-integral","cor-complex-exponential-cartesian-form-modulus-and-eulers-identity","thm-complex-exponential-is-entire-with-derivative-itself","thm-ftc-second-part"]
justified_by: []
dependency_roles: {"def-complex-exponential":"mathematical-premise","def-natural-logarithm":"mathematical-premise","def-real-and-complex-inner-product-space":"mathematical-premise","thm-logarithm-derivative-and-integral":"mathematical-premise","cor-complex-exponential-cartesian-form-modulus-and-eulers-identity":"mathematical-premise","thm-complex-exponential-is-entire-with-derivative-itself":"mathematical-premise","thm-ftc-second-part":"mathematical-premise"}
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
      locator: "Complete author-hosted HTML chapter read; §§1.2–1.4, finite canonical and microcanonical ensemble conventions."
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

## Example

Use $\mathcal H=\mathbb C^2$ with $\langle z,w\rangle=z_1\overline{w_1}+z_2\overline{w_2}$, linear in the first argument, and $u_1=(1,0)$, $u_2=(0,1)$. Choose real $E_1\ne E_2$ and define the self-adjoint energy operator $A(z_1,z_2)=(E_1z_1,E_2z_2)$. Fix $\hbar>0$. For $t\in\mathbb R$ set $U_tu_j=e^{-iE_jt/\hbar}u_j$, and define $P_jz=\langle z,u_j\rangle u_j$, $\rho_t=U_t\rho U_t^*$, and for $T\in(0,\infty)$ define $\bar\rho_T=T^{-1}\int_0^T\rho_t\,dt$ by entrywise integration. All limits below are as $T\to+\infty$. Let $\psi=(u_1+u_2)/\sqrt2$, $\rho=|\psi\rangle\langle\psi|$. Define the finite-dimensional entropy of a density matrix with eigenvalues $p_i$ as $S(\rho)=-k_B\sum_i p_i\log p_i$, with $0\log0=0$ and fixed $k_B>0$. Every instantaneous unitary state $\rho_t$ is pure and has entropy zero. The Cesàro states converge to $\rho_{\rm diag}=(P_1+P_2)/2$, whose entropy is $k_B\log2$. In fact $S(\bar\rho_T)\to k_B\log2$, whereas $T^{-1}\int_0^T S(\rho_t)\,dt=0$ for every $T>0$. Entropy of the averaged state and average instantaneous entropy are distinct quantities.

## Facts & Assumptions

**Given:** The two-level discrete-spectrum model, pure initial density, and entropy convention in the statement.

[A1] $u_1,u_2$ are orthonormal, $E_1\ne E_2$, $\hbar>0$, $t\in\mathbb R$, $T>0$, and $\rho=|\psi\rangle\langle\psi|$ for $\psi=(u_1+u_2)/\sqrt2$.

[F1] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-complex-exponential-is-entire-with-derivative-itself]], and [[thm-ftc-second-part]]: imaginary exponential phases have modulus one, their derivatives give the explicit antiderivative, and the real and imaginary integrals are evaluated componentwise. The finite-dimensional Cesàro limit is computed here and does not invoke an uninstantiated infinite-dimensional Gibbs-spectrum theorem.

[F2] [[def-real-and-complex-inner-product-space]] gives the orthonormal-coordinate inner product; [[def-complex-exponential]] defines the complex exponential; [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] gives $|e^{iy}|=e^0=1$ for real $y$.

[F3] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: $\log$ is continuous on positive reals and $\log2$ is finite.

## Verification



**Given:** [A1] and the entropy convention.

1.1 The unitary evolution sends $\psi$ to $(e^{-iE_1t/\hbar}u_1+e^{-iE_2t/\hbar}u_2)/\sqrt2$, which remains a unit vector by [F2]. Its rank-one density has eigenvalues $1,0$, so its entropy is $-k_B(1\log1+0\log0)=0$ for every $t$. [A1, F2, algebra]

2.1 The two energy eigenspaces are one-dimensional. The matrix entry between them is an exponential with nonzero frequency; by [F1] its average has magnitude at most $\hbar/(T|E_1-E_2|)$ and tends to zero. The diagonal entries remain $1/2$, so the direct finite-dimensional average yields $\rho_{\rm diag}=\tfrac12P_1+\tfrac12P_2$. Its eigenvalues are $(1/2,1/2)$, so $$S(\rho_{\rm diag})=-k_B\left(\tfrac12\log\tfrac12+\tfrac12\log\tfrac12\right)=k_B\log2.$$ Since every $S(\rho_t)=0$, the time average of instantaneous entropy is exactly zero. [A1, F1, F3, step 1.1]

3.1 In the basis $(u_1,u_2)$, $\bar\rho_T$ has diagonal entries $1/2$ and off-diagonal entry $$c_T=\frac1{2T}\int_0^T e^{-i(E_1-E_2)t/\hbar}\,dt,$$ whose magnitude is at most $\hbar/(T|E_1-E_2|)$ by direct integration. Its eigenvalues are $1/2\pm|c_T|$, so both tend to $1/2$. Continuity of $x\mapsto-x\log x$ at $1/2$ gives $S(\bar\rho_T)\to k_B\log2$. Thus entropy of the averaged state has a nonzero limit even though the averaged instantaneous entropy remains zero. [A1, F2, F3, step 2.1, algebra] ∎
