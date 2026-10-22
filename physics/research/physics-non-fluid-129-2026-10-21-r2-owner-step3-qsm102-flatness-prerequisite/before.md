---
id: lem-qsmx-filtered-spectral-generator
kind: lemma
title: Filtered derivative of an isolated finite-volume band
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
deps:
  - def-qsmx-summable-interaction-norm
  - def-countable-choice
  - lem-qsm-matrix-state-calculus
  - thm-fourier-inversion-on-schwartz-space
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
  - thm-residue-theorem-null-homologous-cycle
dependency_roles:
  def-qsmx-summable-interaction-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
  thm-residue-theorem-null-homologous-cycle: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems, Proposition 2.4, Lemma 2.6, and Corollary 2.8"
      url: "https://arxiv.org/pdf/1102.0842"
---

## Statement

Assume Countable Choice. Let $H_\Lambda(s)$ be the finite-volume self-adjoint matrix of a $C^1$ interaction path on the dimensionless parameter $s\in[0,1]$, and let the selected spectral band be a locally fixed spectral cluster, separated from its complement by $\gamma>0$ uniformly in $s$, in the sense of the interaction definition. Choose a positive reference energy $E_0$ and measure physical energies in units of $E_0$; $H_\Lambda$, $H'_\Lambda$, and $\gamma$ in this statement are dimensionless, and the Fourier evolution uses $\hbar=1$. Let $P_\Lambda(s)$ be the orthogonal spectral projection onto that band. Then $P_\Lambda$ is $C^1$. There is a real, odd, integrable function $W_\gamma\in L^1(\mathbb R)$, with Fourier convention

$$\widehat W_\gamma(\omega):=\int_{\mathbb R}W_\gamma(t)e^{it\omega}\,dt,$$

such that $\widehat W_\gamma(\omega)=i/\omega$ whenever $|\omega|\ge\gamma$, and for every integer $N\ge0$ there is $c_N<\infty$ with

$$\int_{|t|>T}|W_\gamma(t)|\,dt\le c_N(1+T)^{-N}\qquad(T\ge0).$$

The finite matrix

$$D_\Lambda(s):=\int_{\mathbb R}W_\gamma(t)e^{itH_\Lambda(s)} H_\Lambda'(s)e^{-itH_\Lambda(s)}\,dt$$

is self-adjoint and satisfies

$$P_\Lambda'(s)=i[D_\Lambda(s),P_\Lambda(s)].$$

## Statement references

[[def-qsmx-summable-interaction-norm]]

[[def-countable-choice]]

[[lem-qsm-matrix-state-calculus]]

[[thm-fourier-inversion-on-schwartz-space]]

[[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]

[[thm-residue-theorem-null-homologous-cycle]]

## Facts & Assumptions

**Given:** Countable Choice, a finite region $\Lambda$, a $C^1$ path $H_\Lambda(s)=H_\Lambda(s)^*$ from the interaction definition, a selected nonempty spectral band that is a locally fixed spectral cluster in the sense of the interaction definition, and its uniform gap $\gamma>0$.

[A1] [[def-countable-choice]]: Countable Choice, as required by the supplied Fourier inversion theorem.

[F1] [[def-qsmx-summable-interaction-norm]]: $H_\Lambda(s)$ is a finite self-adjoint matrix and $H_\Lambda'(s)$ exists in matrix norm.

[F2] [[lem-qsm-matrix-state-calculus]]: each finite Hermitian matrix has an orthonormal eigenbasis with real eigenvalues and its spectral projections are basis independent.

[F3] [[thm-fourier-inversion-on-schwartz-space]] and [[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]: the negative-sign $2\pi$-normalized Fourier transform maps Schwartz space to itself and Fourier inversion holds there; after $\omega=2\pi\xi$ and reflection, the inverse for $\int f(t)e^{it\omega}\,dt$ is $(2\pi)^{-1}\int\widehat f(\omega)e^{-it\omega}\,d\omega$.

[F4] [[thm-residue-theorem-null-homologous-cycle]]: entrywise contour integration of the finite-matrix resolvent encircling selected real eigenvalues returns the sum of their orthogonal eigenspace projections.

## Proof

**Proof technique:** direct.

**Given:** [A1], [F1]–[F4], a locally fixed selected spectral cluster separated by $\gamma>0$, and dimensionless energy units.

1.1 Define $\chi(\omega)=e\exp(-1/(1-(\omega/\gamma)^2))$ for $|\omega|<\gamma$, and $\chi(\omega)=0$ otherwise. The exponential tends to zero faster than every power at the endpoints, so $\chi$ is real, even, smooth, compactly supported in $[-\gamma,\gamma]$, and $\chi(0)=1$. Define $w(t)=(2\pi)^{-1}\int\chi(\omega)e^{-it\omega}\,d\omega$. By [A1], [F3], and the sign/scale conversion stated in [F3], $w$ is Schwartz, real and even, its Fourier transform $\widehat w(\omega)=\int w(t)e^{it\omega}dt$ equals $\chi(\omega)$, and $\int w=1$. For $t>0$ put $W_\gamma(t)=\int_t^\infty w(v)\,dv$; for $t<0$ put $W_\gamma(t)=-\int_{-\infty}^t w(v)\,dv$; set $W_\gamma(0)=0$. Evenness and unit integral make $W_\gamma$ odd with one-sided limits $W_\gamma(0^\pm)=\pm\frac12$. For every $N$, a Schwartz bound $|w(v)|\le c(1+|v|)^{-N-2}$ on either tail gives $|W_\gamma(t)|\le c'(1+|t|)^{-N-1}$; hence $W_\gamma\in L^1$ and has the stated tail estimate. Integration by parts on the two half-lines, accounting for the jump of size $1$ at zero and using $W_\gamma'=-w$ away from zero, gives $-\widehat w(\omega)=-1-i\omega\widehat W_\gamma(\omega)$. Thus $\widehat W_\gamma(\omega)=i(1-\chi(\omega))/\omega$ for $\omega\ne0$, so it equals $i/\omega$ for $|\omega|\ge\gamma$. [given, A1, F3, construct, algebra]

1.2 Fix $s_0$. By the locally fixed spectral-cluster hypothesis and [F2], choose a finite union of positively oriented contours $\Gamma$ surrounding exactly the selected eigenvalues and staying a positive distance from the remaining spectrum, with the same selected eigenvalues enclosed for nearby $s$. For $s$ near $s_0$, $\|H_\Lambda(s)-H_\Lambda(s_0)\|$ is small; factoring $zI-H_\Lambda(s)$ through $zI-H_\Lambda(s_0)$ and using the norm-convergent Neumann series keeps every $z\in\Gamma$ in the resolvent set. The contour projection $P_\Lambda(s)=\frac{1}{2\pi i}\int_\Gamma(zI-H_\Lambda(s))^{-1}\,dz$ is therefore $C^1$, since the inverse matrix is $C^1$ in $s$. [F1, F2, F4, given, algebra]

2.1 In an orthonormal eigenbasis of $H_\Lambda(s)$, write its eigenvalues as $E_m$ and the band indicator as $p_m\in\{0,1\}$. Differentiating $P^2=P$ gives $P'_{mn}=0$ when $p_m=p_n$. Differentiating $HP=PH$ gives $P'_{mn}=(p_m-p_n)H'_{mn}/(E_m-E_n)$ when $p_m\ne p_n$; the denominator has magnitude at least $\gamma$. The integral defining $D_\Lambda$ converges in norm because $W_\gamma\in L^1$; it is self-adjoint because $W_\gamma$ is real and each conjugated $H_\Lambda'$ is self-adjoint. Dominated convergence, using continuity and boundedness of $H_\Lambda'(s)$ on the compact interval and the integrable majorant $2\sup_s\|H_\Lambda'(s)\||W_\gamma(t)|$, shows $D_\Lambda(s)$ is norm-continuous. Its matrix entries are $(D_\Lambda)_{mn}=H'_{mn}\widehat W_\gamma(E_m-E_n)=iH'_{mn}/(E_m-E_n)$ across the band gap. Hence $i[D_\Lambda,P_\Lambda]_{mn}=(p_n-p_m)i(D_\Lambda)_{mn}=(p_m-p_n)H'_{mn}/(E_m-E_n)=P'_{mn}$ across the gap, and both sides vanish within either band block. This proves the identity in every matrix entry. [given, A1, F1, F2, step 1.1, step 1.2, algebra] ∎
