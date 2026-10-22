---
id: lem-ip-ntd-smoothing-and-hilbert-schmidt-kernel-bound
kind: lemma
title: NtD smoothing and Hilbert–Schmidt kernel bounds
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - def-ip-mean-zero-ntd-and-smoothed-kernel-observation
  - lem-ip-calderon-rough-dn-map-wellposedness
  - lem-ip-boundary-spectral-counting-and-sobolev-scale
  - thm-ip-hilbert-schmidt-operator-admits-square-integrable-kernel
  - thm-l-two-kernels-give-hilbert-schmidt-operators
  - lem-ip-ntd-boundary-smoothing-for-fixed-background-collar
  - thm-spectral-theorem-for-compact-self-adjoint-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Lemma 3.4, PDF p.16; Lemma 3.5 and proof, PDF pp.16–18; Lemma 3.6 and kernel Definition 1, PDF pp.18–19; Lemma 3.7, PDF p.21; complete fixed-collar proof in Appendix A, PDF pp.53–58, in the actual 80-page version."
    - title: "Luca Rondi, On the regularization of the inverse conductivity problem with discontinuous conductivities"
      url: "https://www.aimsciences.org/article/doi/10.3934/ipi.2008.2.397"
      locator: "Theorem 4.2 and Remark 4.5, printed pp.405–406 (PDF pp.9–10): contextual forward NtD continuity, with Lambda denoting the NtD map; the local stronger kernel continuity is proved separately."
---

## Statement

Assume the Axiom of Choice and Countable Choice, let $d\ge2$, let $\Omega\subset(0,1)^d$ be nonempty, bounded, connected and $C^\infty$, and let $\gamma\in X_d(R)$. Write $M=\partial\Omega$, $n=d-1$, and let $A_\gamma$ and $\widetilde A_\gamma$ be the mean-zero smoothed NtD observation and its extension from the preceding definition. Then $\widetilde A_\gamma$ is Hilbert–Schmidt on $L^2(M)$ and has a unique zero-mean-in-each-variable kernel $\kappa_\gamma\in L^2(M\times M)$, with
$$\|\kappa_\gamma\|_{L^2(M\times M)}=\|\widetilde A_\gamma\|_{\mathrm{HS}}.$$
The Hilbert–Schmidt norms are uniformly bounded over $X_d(R)$. Moreover, there is $C<\infty$, depending only on the fixed class and domain, such that
$$\|\dot\Lambda_\gamma-\dot\Lambda_{\gamma_0}\|_{\mathcal L(\dot{\mathcal D},\dot{\mathcal D}^{*})}\le C\|\kappa_\gamma-\kappa_{\gamma_0}\|_{L^2(M\times M)}^{1/2}\qquad(\gamma,\gamma_0\in X_d(R)).$$

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

[F5] Uniformly in the conductivity, $\mathscr R_\gamma:L^2_0(M)\to H^1_\Delta(M)$ is bounded. For $B=\mathscr R_\gamma-\mathscr R_{\gamma_0}$, every $L>0$ gives $|b_{ij}|\le C_L(w_iw_j)^{-L}$ in the boundary basis, with $w_j=1+\lambda_j$. The spectral half-order norms equal the quotient trace norms up to fixed constants. ([[lem-ip-ntd-boundary-smoothing-for-fixed-background-collar]])

[F6] The weak DN and NtD maps are bounded mutually inverse maps on the quotient trace and its dual; the DN bounds are uniform in the ellipticity class. This also follows directly from the two weak formulations and uniqueness. ([[lem-ip-calderon-rough-dn-map-wellposedness]], [[def-ip-mean-zero-ntd-and-smoothed-kernel-observation]])

[F7] A compact self-adjoint Hilbert operator has an orthonormal eigenbasis on the complement of its kernel. ([[thm-spectral-theorem-for-compact-self-adjoint-operators]])

[A1] The Axiom of Choice and Countable Choice are inherited at the weak-solution, spectral and trace interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** the data in the Statement. If the conductivity class is empty, its uniform assertions are vacuous; otherwise its collar forces $m\le1\le M$.

1.1 Write $r=r_d\ge0$, $n=d-1$ and $w_j=1+\lambda_j$ on the total-mean-zero subspace. The counting estimate [F1] implies $w_j^{-1/2}\le C(1+j)^{-1/n}$, after enlarging the constant for finitely many low modes. By [F5], $R=\mathscr R_\gamma$ maps the $L^2$ unit ball into a uniformly bounded $H^1_\Delta$ ball. If $P_J$ is the first $J$-mode projection, then $R_J=P_JR$ has rank at most $J$ and $\|R-R_J\|\le C(1+J)^{-1/n}$. Likewise $S=C_M^{r/2}$ has the rank-$J$ approximation $S_J=P_JS$ with $\|S-S_J\|\le C(1+J)^{-r/n}$; for $r=0$ this means the bound one and does not assert that $S$ is compact. [A1, F1, F2, F5, given, construct]

2.1 The rank-at-most-$2J$ map $R_JS+(R-R_J)S_J$ approximates $RS$ with error $(R-R_J)(S-S_J)$, bounded by $C(1+J)^{-(1+r)/n}$. The compact operator $RS$ therefore has singular values $s_j\le C(1+j)^{-(1+r)/n}$. To justify this implication, apply [F7] to $(RS)^*(RS)$: truncating its orthogonal singular expansion gives a rank-$k$ approximation with error $s_{k+1}$, and any other rank-$k$ approximation has a kernel vector in the span of the first $k+1$ right singular vectors, so its error is at least $s_{k+1}$. Since $2(1+r)>n$ by the actual dimension-dependent choice of $r$, $\sum_js_j^2<\infty$ uniformly. Thus $A_\gamma=RS$ and its zero extension are Hilbert–Schmidt. Apply [F3] to obtain the unique $L^2$ kernel and norm equality. Input and output annihilation of the constant mode mean that its integral in either variable is zero, by testing the integral operator and its adjoint on the constant function. [F3, F7, step 1.1, algebra]

3.1 Put $B=\mathscr R_\gamma-\mathscr R_{\gamma_0}$ and $s=\|\kappa_\gamma-\kappa_{\gamma_0}\|_2$. By [F4], $s^2=\sum_{i,j}|b_{ij}|^2w_j^{-r}$. Choose $L$ so large that both $\sum_iw_i^{1-2L}$ and $\sum_jw_j^{r+1-2L}$ converge by [F1]. Then [F5] gives $T:=\sum_{i,j}|b_{ij}|^2w_iw_j^{r+1}\le C$, uniformly over every conductivity pair. Cauchy–Schwarz now yields $\sum_{i,j}w_i^{1/2}w_j^{1/2}|b_{ij}|^2\le (\sum|b_{ij}|^2w_j^{-r})^{1/2}(\sum|b_{ij}|^2w_iw_j^{r+1})^{1/2}\le C s$. The left side is the squared Hilbert–Schmidt norm from $H^{-1/2}_\Delta$ to $H^{1/2}_\Delta$: the normalized input basis is $w_j^{1/4}e_j$. Taking square roots and [F5]'s quotient norm equivalence gives $\|B\|_{\mathcal L(\dot{\mathcal D}^*,\dot{\mathcal D})}\le C s^{1/2}$, also when $s=0$. [F1, F4, F5, step 2.1, algebra]

4.1 For clarity, the inverse assertion in [F6] uses no boundary pointwise differentiability: the Dirichlet weak solution with boundary class $g$ has Neumann functional $\dot\Lambda_\gamma g$, and uniqueness of the weak Neumann problem gives $\mathscr R_\gamma\dot\Lambda_\gamma g=g$; conversely the weak Neumann solution satisfies its own Dirichlet problem, giving $\dot\Lambda_\gamma\mathscr R_\gamma F=F$. Therefore $\dot\Lambda_\gamma-\dot\Lambda_{\gamma_0}=\dot\Lambda_\gamma(\mathscr R_{\gamma_0}-\mathscr R_\gamma)\dot\Lambda_{\gamma_0}$. Uniform DN operator bounds in [F6] and step 3.1 prove the displayed square-root comparison. Together with step 2.1 this establishes all assertions. [F6, step 2.1, step 3.1, algebra] ∎
