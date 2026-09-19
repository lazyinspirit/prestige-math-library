---
id: ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection
kind: example
title: Spectral projection of an isolated eigenvalue agrees with the riesz projection
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-spectral-projections-and-resolution-of-the-identity, def-riesz-spectral-projection, thm-riesz-spectral-projection-properties, thm-bounded-linear-maps-commute-with-bochner-integration, def-bochner-integrable-function, thm-cauchy-integral-formula-circle, cor-cauchy-theorem-convex-domain, thm-borel-functional-calculus-for-bounded-normal-operators, thm-bounded-borel-pvm-integral, def-borel-functional-calculus-for-a-bounded-normal-operator, def-spectrum-and-resolvent-of-a-bounded-operator, def-hilbert-space, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §4.1, Problem 4.1 and the resolvent convention, printed pp.113–115"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.7, printed pp.293–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Assume AC. Let $T$ be a bounded normal operator on a nonzero complex Hilbert
space $H$, let $\lambda$ be an isolated point of $\sigma(T)$, and let $r>0$ be
such that the closed disc $\overline{D(\lambda,r)}$ meets $\sigma(T)$ in
$\{\lambda\}$ alone; let $\gamma(t)=\lambda+r\exp(it)$, $0\le t\le2\pi$, be the
positively oriented circle. Then the spectral projection of the singleton
equals the Riesz spectral projection,
$$E(\{\lambda\})=\frac{1}{2\pi i}\oint_\gamma(zI-T)^{-1}\,dz ,$$
where the contour integral is the Banach-algebra-valued integral of
[[def-riesz-spectral-projection]] (with resolvent $(zI-T)^{-1}$, matching its
convention $R(z,a)=(z\mathbf 1-a)^{-1}$, and not the opposite sign
$(T-zI)^{-1}$), and where $E$ is the spectral PVM of
[[cor-spectral-projections-and-resolution-of-the-identity]].

## Facts & Assumptions

[A1] $\{\lambda\}$ is clopen in $\sigma(T)$, so the Riesz spectral projection $P_{\{\lambda\}}=\frac{1}{2\pi i}\int_\Gamma\chi_{\{\lambda\}}(z)(zI-T)^{-1}dz$ is defined and lies in $\mathcal B(H)$; it is an idempotent commuting with $T$ ([[def-riesz-spectral-projection]], [[thm-riesz-spectral-projection-properties]]).

[A2] For $z\notin\sigma(T)$ the function $g_z(\zeta):=(z-\zeta)^{-1}$ is bounded Borel on $\sigma(T)$ and $(zI-T)^{-1}=\Phi_E(g_z)$: $zI-T=\Phi_E(z-\zeta)$ and multiplying by $z-\zeta$, using multiplicativity of the Borel calculus, gives $(zI-T)\Phi_E(g_z)=\Phi_E((z-\zeta)g_z)=\Phi_E(\mathbf 1)=I$ and $\Phi_E(g_z)(zI-T)=I$ ([[thm-borel-functional-calculus-for-bounded-normal-operators]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A3] The function $z\mapsto(zI-T)^{-1}$ is norm continuous on $\rho(T)$, hence Bochner integrable along the compact contour $\gamma$; a bounded linear map commutes with the Bochner integral ([[thm-bounded-linear-maps-commute-with-bochner-integration]], [[def-bochner-integrable-function]], [[def-spectrum-and-resolvent-of-a-bounded-operator]]).

[A4] Scalar Cauchy facts: if $f$ is holomorphic on the disc $D(a,R)$ and $\gamma$ is the positively oriented circle $|\zeta-a|=r$ with $0<r<R$, then $f(z)=\frac{1}{2\pi i}\int_\gamma\frac{f(\zeta)}{\zeta-z}d\zeta$ for $|z-a|<r$; and for a holomorphic $f$ on a convex domain and a closed rectifiable contour in it, $\int_\gamma f=0$ ([[thm-cauchy-integral-formula-circle]], [[cor-cauchy-theorem-convex-domain]]).

[A5] For every bounded Borel $h$ one has $\Phi_E(\mathbf 1_B)=E(B)$ and $\Phi_E$ is linear and bounded, with $\|\Phi_E(h)\|\le\|h\|_\infty$ ([[thm-bounded-borel-pvm-integral]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]], [[def-hilbert-space]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** A bounded normal $T$, an isolated spectral point $\lambda$, a radius $r>0$ with $\overline{D(\lambda,r)}\cap\sigma(T)=\{\lambda\}$, the circle $\gamma$, and the function $\chi_{\{\lambda\}}$ which is $1$ on $D(\lambda,r)$ and $0$ outside a larger disc avoiding $\sigma(T)\setminus\{\lambda\}$.

1.1 On $\gamma$ the resolvent identity holds: since $\gamma\subseteq\rho(T)$, for $z\in\gamma$ the identity $(zI-T)^{-1}=\Phi_E(g_z)$ of fact (A2) applies, and $g_z$ is bounded by $\operatorname{dist}(\gamma,\sigma(T))^{-1}$. [A2, A3]

1.2 The scalar Cauchy kernel of the contour is the indicator of the enclosed disc: for every $\zeta\in\mathbb C$ one has $c(\zeta):=\frac{1}{2\pi i}\oint_\gamma(z-\zeta)^{-1}dz=1$ if $|\zeta-\lambda|<r$ and $c(\zeta)=0$ if $|\zeta-\lambda|>r$, by the Cauchy integral formula applied to $f\equiv1$ in the first case and Cauchy's theorem on the convex disc $D(\lambda,|\zeta-\lambda|)$ in the second. [A4]

2.1 Bochner commutation: because $z\mapsto(zI-T)^{-1}=\Phi_E(g_z)$ is continuous on the compact contour and $\Phi_E$ is a bounded linear map, $\frac{1}{2\pi i}\oint_\gamma(zI-T)^{-1}dz=\Phi_E\bigl(\frac{1}{2\pi i}\oint_\gamma g_z\,dz\bigr)=\Phi_E(c|_{\sigma(T)})$, the scalar function $c$ restricted to the spectrum. [step 1.1, A3, A5]

3.1 Evaluation on the spectrum: the closed disc $\overline{D(\lambda,r)}$ meets $\sigma(T)$ only at $\lambda$, so for $\zeta\in\sigma(T)$ the value $c(\zeta)$ is $1$ exactly at $\zeta=\lambda$ and $0$ otherwise; hence $c|_{\sigma(T)}=\mathbf 1_{\{\lambda\}}$ and the contour integral equals $\Phi_E(\mathbf 1_{\{\lambda\}})=E(\{\lambda\})$. [step 1.2, step 2.1, A5]

4.1 The Riesz projection is given by the same contour with the same locally constant function $\chi_{\{\lambda\}}$, which equals $1$ on $\gamma$; therefore $P_{\{\lambda\}}=\frac{1}{2\pi i}\oint_\gamma(zI-T)^{-1}dz$ and this equals the spectral projection $E(\{\lambda\})$ computed by the Borel calculus. [step 3.1, A1, A6]

5.1 The spectral projection of an isolated eigenvalue is therefore exactly the Riesz projection computed from the resolvent $(zI-T)^{-1}$ along a positively oriented circle separating $\lambda$ from the rest of the spectrum. [step 4.1, A1] ∎
