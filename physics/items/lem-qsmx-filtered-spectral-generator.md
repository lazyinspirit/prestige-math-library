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
  - thm-the-standard-flat-function-is-smooth-and-flat-at-zero
  - thm-chain-rule
  - thm-algebra-of-derivatives
  - thm-dominated-convergence
dependency_roles:
  def-qsmx-summable-interaction-norm: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
  thm-residue-theorem-null-homologous-cycle: mathematical-premise
  thm-the-standard-flat-function-is-smooth-and-flat-at-zero: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-dominated-convergence: mathematical-premise
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic
        Equivalence within Gapped Phases of Quantum Lattice Systems, Proposition
        2.4, Lemma 2.6, and Corollary 2.8"
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

[F5] [[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]: the function $u:\mathbb R\to\mathbb R$ given by $u(t)=\exp(-1/t)$ for $t>0$ and $u(t)=0$ for $t\le0$ is smooth on $\mathbb R$, with $u^{(m)}(0)=0$ for every $m\ge0$. The one-variable chain rule and sum, scalar-multiple and product derivative rules apply on $\mathbb R$ ([[thm-chain-rule]], [[thm-algebra-of-derivatives]]).

[F6] [[thm-dominated-convergence]]: on a measure space, measurable complex functions converging pointwise almost everywhere and dominated in modulus by one nonnegative integrable function have convergent integrals. Apply this scalar result to each entry in a fixed finite orthonormal matrix basis; the existing Countable Choice assumption [A1] supplies the adopted Lebesgue-measure interfaces.

## Proof

**Proof technique:** direct.

**Given:** [A1], [F1]–[F6], a locally fixed selected spectral cluster separated by $\gamma>0$, and dimensionless energy units.

1.1 Let $u$ be the standard flat function of [F5] and put $q(\omega):=1-(\omega/\gamma)^2$ and $\chi(\omega):=e\,u(q(\omega))$. Since $\gamma>0$, $q$ is a smooth real polynomial. The chain and product rules in [F5], iterated at each derivative order, make $\chi$ smooth on all of $\mathbb R$: every positive-order derivative is a finite sum of products of a derivative $u^{(m)}\circ q$, with $m\ge1$, and derivatives of $q$. At $\omega=\pm\gamma$, one has $q(\omega)=0$ and every such $u^{(m)}(0)=0$, so all these derivatives vanish and match the exterior zero branch. The value itself also vanishes there because $u(0)=0$. Since $q>0$ exactly when $|\omega|<\gamma$, this formula is exactly $e\exp(-1/(1-(\omega/\gamma)^2))$ inside that interval and zero outside. Thus $\chi$ is real, even, smooth, compactly supported in $[-\gamma,\gamma]$, and $\chi(0)=e\exp(-1)=1$. Define $w(t)=(2\pi)^{-1}\int\chi(\omega)e^{-it\omega}\,d\omega$. By [A1], [F3], and the sign/scale conversion stated in [F3], $w$ is Schwartz, real and even, its Fourier transform $\widehat w(\omega)=\int w(t)e^{it\omega}dt$ equals $\chi(\omega)$, and $\int w=1$. For $t>0$ put $W_\gamma(t)=\int_t^\infty w(v)\,dv$; for $t<0$ put $W_\gamma(t)=-\int_{-\infty}^t w(v)\,dv$; set $W_\gamma(0)=0$. Evenness and unit integral make $W_\gamma$ odd with one-sided limits $W_\gamma(0^\pm)=\pm\frac12$. For every $N$, a Schwartz bound $|w(v)|\le c(1+|v|)^{-N-2}$ on either tail gives $|W_\gamma(t)|\le c'(1+|t|)^{-N-1}$; hence $W_\gamma\in L^1$ and has the stated tail estimate. Integration by parts on the two half-lines, accounting for the jump of size $1$ at zero and using $W_\gamma'=-w$ away from zero, gives $-\widehat w(\omega)=-1-i\omega\widehat W_\gamma(\omega)$. Thus $\widehat W_\gamma(\omega)=i(1-\chi(\omega))/\omega$ for $\omega\ne0$, so it equals $i/\omega$ for $|\omega|\ge\gamma$. [given, A1, F3, F5, construct, algebra]

1.2 Fix $s_0$. By the locally fixed spectral-cluster hypothesis and [F2], choose a finite union of positively oriented contours $\Gamma$ surrounding exactly the selected eigenvalues and staying a positive distance from the remaining spectrum, with the same selected eigenvalues enclosed for nearby $s$. For $s$ near $s_0$, $\|H_\Lambda(s)-H_\Lambda(s_0)\|$ is small; factoring $zI-H_\Lambda(s)$ through $zI-H_\Lambda(s_0)$ and using the norm-convergent Neumann series keeps every $z\in\Gamma$ in the resolvent set. The contour projection $P_\Lambda(s)=\frac{1}{2\pi i}\int_\Gamma(zI-H_\Lambda(s))^{-1}\,dz$ is therefore $C^1$, since the inverse matrix is $C^1$ in $s$. [F1, F2, F4, given, algebra]

2.1 In an orthonormal eigenbasis of $H_\Lambda(s)$, write its eigenvalues as $E_m$ and the band indicator as $p_m\in\{0,1\}$. Differentiating $P^2=P$ gives $P'_{mn}=0$ when $p_m=p_n$. Differentiating $HP=PH$ gives $P'_{mn}=(p_m-p_n)H'_{mn}/(E_m-E_n)$ when $p_m\ne p_n$; the denominator has magnitude at least $\gamma$. The integral defining $D_\Lambda$ converges in norm because $W_\gamma\in L^1$; it is self-adjoint because $W_\gamma$ is real and each conjugated $H_\Lambda'$ is self-adjoint. For each fixed $t$, the matrix exponential series for $e^{\pm itH_\Lambda(s)}$ converges uniformly in $s\in[0,1]$: if $M=\sup_s\|H_\Lambda(s)\|<\infty$, its order-$r$ term has norm at most $(|t|M)^r/r!$. The terms are continuous in $s$, so both exponentials, and hence their product with the continuous $H_\Lambda'(s)$, are norm-continuous in $s$. For any sequence $s_m\to s$ in $[0,1]$, each matrix entry of the difference of the filtered integrands tends pointwise to zero and has modulus at most $2\sup_v\|H_\Lambda'(v)\||W_\gamma(t)|$, an integrable majorant by step 1.1 and compact-interval boundedness of $H_\Lambda'$. The entries are measurable in $t$, since the exponentials are continuous in $t$ and $W_\gamma$ is measurable. Applying [F6] entrywise gives convergence of every entry of $D_\Lambda(s_m)-D_\Lambda(s)$. If the matrix dimension is $m_\Lambda$, then $\|R\|\le m_\Lambda\max_{i,j}|R_{ij}|$: for a unit vector $x$, $|(Rx)_i|\le\max_{i,j}|R_{ij}|\sum_j|x_j|\le\sqrt{m_\Lambda}\max_{i,j}|R_{ij}|$, and summing squares over $i$ proves the bound. Thus entrywise convergence gives norm convergence, proving norm-continuity of $D_\Lambda$ without an undeclared norm-equivalence theorem. Its matrix entries are $(D_\Lambda)_{mn}=H'_{mn}\widehat W_\gamma(E_m-E_n)=iH'_{mn}/(E_m-E_n)$ across the band gap. Hence $i[D_\Lambda,P_\Lambda]_{mn}=(p_n-p_m)i(D_\Lambda)_{mn}=(p_m-p_n)H'_{mn}/(E_m-E_n)=P'_{mn}$ across the gap, and both sides vanish within either band block. This proves the identity in every matrix entry. [given, A1, F1, F2, F6, step 1.1, step 1.2, algebra] ∎
