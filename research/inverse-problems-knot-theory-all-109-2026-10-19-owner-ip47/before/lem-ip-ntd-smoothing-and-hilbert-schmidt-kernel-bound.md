---
id: lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound
kind: lemma
title: NtD smoothing and Hilbert–Schmidt kernel bounds
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - def-ip-mean-zero-ntd-and-smoothed-kernel-observation
  - lem-ip-calderon-rough-dn-map-wellposedness
  - lem-ip-boundary-spectral-counting-and-sobolev-scale
  - thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel
  - thm-l-two-kernels-give-hilbert-schmidt-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Lemmas 3.4–3.7 and Appendix A, elliptic NtD smoothing, kernel identification and norm inequalities, printed pp. 14–18 and 31–34."
    - title: "Daniel R. Rondi, On the regularization of the inverse conductivity problem with discontinuous conductivities"
      url: "https://www.aimsciences.org/article/doi/10.3934/ipi.2008.2.397"
      locator: "Theorem 4.2 and Remark 4.5, forward-map continuity interface used by the later compactness item."
---

## Statement

Assume the Axiom of Choice and Countable Choice, let $d\ge2$, let $\Omega\subset(0,1)^d$ be nonempty, bounded, connected and $C^\infty$, and let $\gamma\in X_d(R)$. Write $M=\partial\Omega$, $n=d-1$, and let $A_\gamma$ and $\widetilde A_\gamma$ be the mean-zero smoothed NtD observation and its extension from the preceding definition. Then $\widetilde A_\gamma$ is Hilbert–Schmidt on $L^2(M)$ and has a unique zero-mean-in-each-variable kernel $\kappa_\gamma\in L^2(M\times M)$, with
$$\|\kappa_\gamma\|_{L^2(M\times M)}=\|\widetilde A_\gamma\|_{\mathrm{HS}}.$$
The Hilbert–Schmidt norms are uniformly bounded over $X_d(R)$. Moreover, there is $C<\infty$, depending only on the fixed class and domain, such that
$$\|\dot\Lambda_\gamma-\dot\Lambda_{\gamma_0}\|_{\mathcal L(\dot{\mathcal D},\dot{\mathcal D}^{*})}\le C\|\kappa_\gamma-\kappa_{\gamma_0}\|_{L^2(M\times M)}\qquad(\gamma,\gamma_0\in X_d(R)).$$

## Statement references

[[def-ip-mean-zero-ntd-and-smoothed-kernel-observation|The mean-zero NtD observation and its zero-mean kernel convention.]]

[[lem-ip-boundary-spectral-counting-and-sobolev-scale|The boundary eigenvalue counting bound and spectral Sobolev norms.]]

[[thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel|The Hilbert–Schmidt to square-integrable kernel correspondence.]]

[de Hoop et al., Lemmas 3.4–3.7 and Appendix A](https://arxiv.org/pdf/2511.20361)

## Facts & Assumptions

**Given:** the domain, conductivity class and smoothing exponent in the statement.

[F1] For $n=d-1$, the boundary eigenvalues satisfy $N_M(\Lambda)\le C(1+\Lambda)^{n/2}$, so $\sum_j(1+\lambda_j)^{-1-r_d}<\infty$. ([[lem-ip-boundary-spectral-counting-and-sobolev-scale]])

[F2] The smoothed observation is $A_\gamma=\mathscr R_\gamma C_M^{r_d/2}$ on mean-zero $L^2$, extended to kill constants and have mean-zero range. ([[def-ip-mean-zero-ntd-and-smoothed-kernel-observation]])

[F3] Every Hilbert–Schmidt operator on the compact boundary has a unique $L^2$ kernel with the same norm, and the zero-mean operator extension gives the zero-mean-in-each-variable kernel convention. ([[thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel]])

[F4] An $L^2$ kernel defines a Hilbert–Schmidt integral operator with norm equal to the kernel norm. ([[thm-l-two-kernels-give-hilbert-schmidt-operators]])

[A1] The required uniform elliptic boundary estimate is not yet proved here: for every $0\le s\le r_d$, prove $\|\mathscr R_\gamma f\|_{H^{s+1}_\Delta(M)}\le C_s\|f\|_{H^s_\Delta(M)}$, uniformly over the stated rough interior conductivities with fixed background collar.

[A2] The required inverse-operator estimate is not yet proved here: the difference of the smoothed NtD kernels must control the weak DN operator difference in the displayed norm, including the inverse and Sobolev-scale factors.

## Proof

**Given:** the data in the statement.

1.1 In the spectral basis, $C_M^{r_d/2}$ is an isometry from $L^2_0(M)$ into $H^{r_d}_\Delta(M)$ because
$$\|C_M^{r_d/2}f\|_{H^{r_d}_\Delta}^2=\sum_j(1+\lambda_j)^{r_d}(1+\lambda_j)^{-r_d}|\langle f,e_j\rangle|^2=\|f\|_2^2.$$
If the unresolved estimate [A1] is supplied, $A_\gamma$ factors as the bounded map $L^2_0\to H^{r_d+1}_\Delta$ followed by the inclusion $J_{r_d+1}:H^{r_d+1}_\Delta\hookrightarrow L^2_0$. In the normalized eigenbasis, $J_{r_d+1}$ has squared Hilbert–Schmidt norm $\sum_j(1+\lambda_j)^{-(r_d+1)}$, finite by [F1]. Therefore $A_\gamma$ is Hilbert–Schmidt, uniformly in $\gamma$, with $\|A_\gamma\|_{\mathrm{HS}}\le\|J_{r_d+1}\|_{\mathrm{HS}}C_{r_d}$. [A1, F1, F2, given, algebra]

1.2 If step 1.1 is established, apply [F3] to $\widetilde A_\gamma$ to obtain the unique kernel $\kappa_\gamma$ and the exact Hilbert–Schmidt norm identity. The extension kills constants on input and has mean-zero range, so its kernel has zero integral in each variable. [F3, step 1.1]

2.1 The displayed kernel-to-DN estimate requires [A2]. By [F4], an established $L^2$ kernel difference has the same Hilbert–Schmidt norm as its integral operator; the missing step is a uniform estimate from this norm to the weak DN quotient norm for the exact rough-conductivity class and smoothing power. No complete local proof has yet been supplied, so the item remains escalated and no such inequality is asserted as proved. [A2, F4]

## Proof status

Step 1 is conditional on the uniform boundary regularity estimate [A1], and Step 2 is blocked by the inverse-operator estimate [A2]. These gaps affect the existence and uniform Hilbert–Schmidt bound for $\kappa_\gamma$, and the transfer of kernel distance to the IP-45 DN norm. Proposed local supplier placement is recorded in the batch notes; owner reconciliation is required before readiness. 
