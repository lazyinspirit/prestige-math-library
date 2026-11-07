---
id: thm-finite-cusp-eisenstein-transform-completeness
kind: theorem
title: Finite-cusp Eisenstein transform completeness
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-cusp-pseudo-laplacian-data
- def-axiom-of-choice
- thm-finite-cusp-eisenstein-meromorphic-continuation
- lem-outgoing-automorphic-resolvent-jump
- lem-cusp-average-cutoff-laplacians-have-compact-resolvent
- thm-spectral-theorem-for-unbounded-self-adjoint-operators
- thm-fourier-basis-and-parseval-on-the-n-torus
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Yves Colin de Verdière, Pseudo-laplaciens II, Annales de l'Institut Fourier 33(2) (1983), 87–113
    url: https://www.numdam.org/article/AIF_1983__33_2_87_0.pdf
    locator: 'Sections 1–2, printed pp. 89–92 / PDF pp. 4–7: pseudo-Laplacian continuation and spectral context; the full finite-cusp PVM decomposition is reconstructed locally.'
  - title: Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh
    url: https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf
    locator: 'Sections 5.3–5.6, printed pp. 24–30 / PDF pp. 24–30: one-cusp continuous spectrum and finite-cusp outline; exact finite-cusp Plancherel and point-spectrum decomposition are proved here.'
dependency_level: 11
axiom_use: Axiom of Choice is an explicit public hypothesis; Countable and Dependent Choice follow.
---

## Statement

Assume the Axiom of Choice and the public finite-cusp data. The full energy Laplacian $A$ has only point and absolutely continuous spectrum, with no singular-continuous spectrum. Every point eigenspace is the orthogonal sum of its cusp eigenspace, consisting of eigenfunctions whose constant coefficients vanish at every open cusp, and the span of the square-integrable Eisenstein residues $\operatorname{Res}_{s=s_0}E_j(s)$ at poles with $s_0>1/2$. For $0\leq\lambda_0<1/4$, let $s_0>1/2$ satisfy $s_0(1-s_0)=\lambda_0$, and let $C_j(v)$ be the coefficient of $y^{1-s_0}$ in the constant term of $v\in\ker(A-\lambda_0)$ at cusp $j$. Write $P(B)$ for the spectral projection-valued measure of $A$ and $P_{\lambda_0}=P(\{\lambda_0\})$ for the projection onto that eigenspace. Then for every compactly supported smooth section $f$,
$$\langle f,\operatorname{Res}_{s=s_0}E_j(s)\rangle_H=C_j(P_{\lambda_0}f).$$
If $\mathcal B_{\mathrm{disc}}$ is any orthonormal basis of the cusp-plus-residual space and
$$F_{f,j}(t)=\int_X f(z)\overline{E_j(z,\tfrac12+it)}\,d\mu(z),$$
then compactly supported smooth $f,g$ satisfy
$$\langle f,g\rangle_H=\sum_{u\in\mathcal B_{\mathrm{disc}}}\langle f,u\rangle_H\overline{\langle g,u\rangle_H}+\frac1{4\pi}\sum_{j\in J}\int_{\mathbb R}F_{f,j}(t)\overline{F_{g,j}(t)}\,dt.$$
The sum over a basis is in the finite-subset-net sense. The transform $f\mapsto(F_{f,j})_{j\in J}$ extends by density to a bounded map from $H$ to $L^2(\mathbb R,\mathbb C^J;dt/(4\pi))$, and its adjoint is the weak Eisenstein synthesis integral; this recovers the full absolutely continuous projection and gives the orthogonal discrete/continuous decomposition of $H$. For each real $t$, $E_j(z,\tfrac12+it)$ satisfies the eigen-equation with eigenvalue $\tfrac14+t^2$; it is nonzero for $t\ne0$, while a zero at $t=0$ is allowed. In an unnormalized scaling $\sigma_j$ satisfying $\sigma_j^{-1}\Delta_{\xi_j}\sigma_j=\langle z\mapsto z+n w_j:n\in\mathbb Z\rangle$ with width $w_j>0$, the continuous coefficient is $1/(4\pi w_j)$.

## Statement references

[Yves Colin de Verdière, Pseudo-laplaciens II, Ann. Inst. Fourier 33(2) (1983), 87–113](https://www.numdam.org/item/AIF_1983__33_2_87_0.pdf)

[Peter Sarnak, Spectral Theory of Automorphic Forms; notes by Tony Feng and Gyujin Oh](https://web.math.princeton.edu/~gyujino/Sarnak_course.pdf)

## Facts & Assumptions

**Given:** The complete objects, conventions and PUBLIC Axiom of Choice in the Statement.

[F1] The complete finite-cusp data with PUBLIC AC ([[def-finite-cusp-pseudo-laplacian-data]]).

[F2] Critical regularity, FE and simple L² residue eigenfunctions ([[thm-finite-cusp-eisenstein-meromorphic-continuation]]).

[F3] Full compact-cutoff resolvent continuation, exact jump, local density and locally finite exceptional set off threshold ([[lem-outgoing-automorphic-resolvent-jump]]).

[F4] Compact cutoff spectrum, including every cusp eigenvalue ([[lem-cusp-average-cutoff-laplacians-have-compact-resolvent]]).

[F5] The full PVM gives all point projections and their eigenvector characterization ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

## Proof

1.1 There is no missing singular-continuous spectral subspace. For compactf, the finite positive measureP_ff is absolutely continuous on the union of the countably many open intervals treated in [F3]. Its remaining support is the locally finite pole set off threshold, together with the single threshold point. This is countable and carries only atoms: a finite measure on a countable set is the sum of its point masses by countable additivity. All atoms of a self-adjoint PVM are exactly the corresponding L² eigenspace projections, directly from[F5]. Compact smooth functions are dense in H, so this classification exhausts the full PVM and leaves no undetected subspace. Nonnegativity excludes negative eigenvalues. [given, F1, F2, F3, F4, F5]

2.1 All L² eigenvectors with λ≥1/4 are cuspidal: their open constant solutions are y^(1/2±it), or y^1/2 andy^1/2logy at threshold; no nonzero combination is in L²(dy/y²). All closed cusp modes decay. If0≤λ0<1/4, put s0∈(1/2,1] with λ0=s0(1−s0). The L² eigenvectors have constants C_j(u)y^(1−s0). Let P0 be that eigenprojection. Comparing the residues of the identity in [F3] gives, for every compactf, ⟨f,Res_(s=s0)E_j(s)⟩=C_j(P0f). Indeed R_out(s) has pole −P0/[λ'(s0)(s−s0)] and 2s0−1=−λ'(s0), so the factors cancel. The resolvent's simple pole and residue follow directly from[F5] by the scalar limit (λ0−z)R(z)→P0 strongly; higher cutoff Laurent poles would violate ||R(z)||≤|Imz|^−1. Thus, on the finite-dimensional eigenspace, residues are the adjoints of the constant-coefficient mapC. Their span is(kerC)^⊥; kerC is exactly its cusp eigenspace. Finite-dimensionality follows becausekerC is an A_Y eigenspace anddim ranC≤|J|. Every point spectral space therefore splits into cusp and residual spaces exactly. There is no third kind of L² discrete eigenvector. [given, F1, F2, F3, F4, F5, step 1.1]

3.1 Cusp and residual spaces are mutually orthogonal. Initial unfolding gives⟨E_j(s),u_cusp⟩=0 as in[F2], and taking residues proves the claim; distinct eigenvalues are already orthogonal by self-adjointness. Pairing the full PVM identity with compactf,g, summing its atoms in any orthonormal basis and using [F3] on an exhaustion of the half-line gives ⟨f,g⟩=Σ_disc⟨f,u⟩overline(⟨g,u⟩) +1/(2π)∫_0∞Σ_jFf_j(t)overline(Fg_j(t))dt. For f=g, monotone convergence of the positive spectral measure proves convergence and equality. Polarization gives the general identity and absolute integrability of the continuous cross term by Cauchy–Schwarz. The discrete series has the same absolute convergence by Bessel/Cauchy–Schwarz. [given, F1, F2, F3, F4, F5, step 2.1]

4.1 The FE relation in [F3] and unitarity imply Σ_jFf_j(−t)overline(Fg_j(−t))=Σ_jFf_j(t)overline(Fg_j(t)). The positive-half-line integral is therefore half the whole real-line integral, yielding coefficient1/(4π). At every realt the eigen-equation holds by regularity and meromorphic continuation; for t≠0 the incoming powersy^s andy^(1−s) are independent, so no E_j(s) is zero. A possible zero family member at t=0 is harmless. This proves the generalized-eigenfunction assertion, with even more precise exceptional set. [given, F1, F2, F3, F4, F5, step 3.1]

5.1 Restore integral cusp scalings. If their width isw_j, the unit-period Eisenstein function isE_j^(1)(s)=w_j^(−s)E_j(s). Therefore its transform isF_j^(1)f(t)=w_j^(−1/2+it)F_jf(t), and the Hermitian product contributes exactly1/w_j. step 3.1 thus becomes the stated integral-width formula. [given, F1, F2, F3, F4, F5, step 4.1]

6.1 Finally the norm identity on the dense compact smooth domain extends the combined discrete/continuous transform isometrically to H, with closed range. Its discrete component is the orthogonal point projection and its continuous component is the absolutely continuous spectral projection by [F3] and the preceding steps. To identify the continuous span explicitly, on each compact t-band avoiding0 and poles, take vector-valued smooth compactly supported amplitudes and synthesize∫E_j(1/2+it)a_j(t)dt. [F3]'s projection kernel identifies these as the adjoints of the restricted transform and places them in the corresponding absolutely continuous spectral band. Exhausting the bands shows their closed span is the full absolutely continuous space: a vector orthogonal to every such packet has transform zero almost everywhere there, hence zero norm by step 3.1 after removal of its discrete projection. Thus the claimed discrete/continuous orthogonal decomposition follows, not merely an inequality or a partial isometry. [given, F1, F2, F3, F4, F5, step 5.1] ∎


## Source notes

The source locators above record actual reading limits. Every proof step is supplied locally; no external spectral theorem, computation or source-only proof is imported. The general cofinite theorem under PUBLIC AC is used for the congruence consumer36, whose public AC hypothesis matches. This item makes no choice-free claim for 95.
