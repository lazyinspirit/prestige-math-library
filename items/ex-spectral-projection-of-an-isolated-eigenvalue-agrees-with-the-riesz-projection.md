---
id: ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection
kind: example
title: Spectral projection of an isolated eigenvalue agrees with the riesz projection
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-spectral-projections-and-resolution-of-the-identity, def-riesz-spectral-projection, thm-riesz-spectral-projection-properties, thm-bounded-linear-maps-commute-with-bochner-integration, def-bochner-integrable-function, thm-cauchy-integral-formula-circle, cor-cauchy-theorem-convex-domain, thm-borel-functional-calculus-for-bounded-normal-operators, thm-bounded-borel-pvm-integral, def-borel-functional-calculus-for-a-bounded-normal-operator, thm-continuous-functional-calculus-for-bounded-normal-operators, def-spectrum-and-resolvent-of-a-bounded-operator, def-hilbert-space, def-axiom-of-choice, def-banach-space, thm-uniform-limit-theorem, thm-bounded-operator-space-is-banach, thm-spectral-theorem-for-bounded-normal-operators-pvm-form]
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
verification:
  audited: 2026-09-22
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

[A3] A bounded linear map between Banach spaces commutes with Bochner integration ([[thm-bounded-linear-maps-commute-with-bochner-integration]]). Integrable simple approximations converging in integral norm define the Bochner integral ([[def-bochner-integrable-function]]); continuity and the required approximations for this contour are proved below, not inferred from the resolvent definition.

[A4] Scalar Cauchy facts: if $f$ is holomorphic on the disc $D(a,R)$ and $\gamma$ is the positively oriented circle $|\zeta-a|=r$ with $0<r<R$, then $f(z)=\frac{1}{2\pi i}\int_\gamma\frac{f(\zeta)}{\zeta-z}d\zeta$ for $|z-a|<r$; and for a holomorphic $f$ on a convex domain and a closed rectifiable contour in it, $\int_\gamma f=0$ ([[thm-cauchy-integral-formula-circle]], [[cor-cauchy-theorem-convex-domain]]).

[A5] For every bounded Borel $h$ one has $\Phi_E(\mathbf 1_B)=E(B)$ and $\Phi_E$ is linear and bounded, with $\|\Phi_E(h)\|\le\|h\|_\infty$ ([[thm-bounded-borel-pvm-integral]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]], [[def-hilbert-space]]).

[A7] The spectrum $K=\sigma(T)$ is nonempty compact ([[thm-spectral-theorem-for-bounded-normal-operators-pvm-form]]). A Banach space is complete in its norm, uniform limits of continuous scalar functions are continuous, and $\mathcal B(H)$ is Banach ([[def-banach-space]], [[thm-uniform-limit-theorem]], [[thm-bounded-operator-space-is-banach]], [[def-hilbert-space]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

[A8] The continuous calculus is isometric, the Borel calculus agrees with it on continuous functions, and $E(\{\lambda\})H=\ker(T-\lambda I)$ ([[thm-continuous-functional-calculus-for-bounded-normal-operators]], [[thm-borel-functional-calculus-for-bounded-normal-operators]], [[cor-spectral-projections-and-resolution-of-the-identity]]).

## Verification

**Proof technique:** direct.

**Given:** A bounded normal $T$, an isolated spectral point $\lambda$, a radius $r>0$ with $\overline{D(\lambda,r)}\cap\sigma(T)=\{\lambda\}$, the circle $\gamma$, and $K=\sigma(T)$.

1.1 First $C_b(K)$ is Banach in the supremum norm. If $(f_m)$ is Cauchy, then $(f_m(\zeta))$ converges for every $\zeta$; call the limit $f(\zeta)$. Fixing one sufficiently late index bounds $f$ uniformly, and letting the other index tend pointwise to its limit in the Cauchy estimate gives $\|f_m-f\|_\infty\to0$. Thus $f$ is continuous by [A7], proving completeness. Now let $\delta=\operatorname{dist}(\gamma,K)>0$, positive since the two compact sets are disjoint. For $z,w$ on the circle, $g_z\in C_b(K)$, $\|g_z\|_\infty\le\delta^{-1}$ and $\|g_z-g_w\|_\infty\le |z-w|\delta^{-2}$, by subtracting the reciprocals pointwise. Thus $t\mapsto g_{\gamma(t)}\gamma\prime(t)$ is continuous, indeed uniformly continuous, into $C_b(K)$ on $[0,2\pi]$. Step functions on successively finer equal subdivisions, with endpoint values as coefficients, approximate it uniformly, hence also in integral norm (error at most $2\pi$ times the uniform error); they show strong measurability and Bochner integrability by definition. Applying the bounded map $\Phi_E:C_b(K)\to\mathcal B(H)$ also proves continuity and Bochner integrability of the resolvent contour integrand, since $\Phi_E(g_z)=(zI-T)^{-1}$. [A2, A3, A5, A7]

1.2 The scalar Cauchy kernel of the contour is the indicator of the enclosed disc: for every $\zeta\in\mathbb C\setminus\gamma([0,2\pi])$ one has $c(\zeta):=\frac{1}{2\pi i}\oint_\gamma(z-\zeta)^{-1}dz=1$ if $|\zeta-\lambda|<r$ and $c(\zeta)=0$ if $|\zeta-\lambda|>r$, by the Cauchy integral formula applied to $f\equiv1$ in the first case and Cauchy's theorem on the convex disc $D(\lambda,|\zeta-\lambda|)$ in the second. [A4]

2.1 By step 1.1 and Bochner commutation, $\frac{1}{2\pi i}\oint_\gamma(zI-T)^{-1}\,dz=\Phi_E(\frac{1}{2\pi i}\int_0^{2\pi}g_{\gamma(t)}\gamma\prime(t)\,dt)$. For every $\zeta\in K$, evaluation $u\mapsto u(\zeta)$ is bounded linear on $C_b(K)$ with norm at most one; applying Bochner commutation once more identifies the function inside $\Phi_E$ pointwise with $c|_K$. All contour integrals here include the derivative of the parametrization. [step 1.1, A3, A5, A7]

3.1 Evaluation on the spectrum: the closed disc $\overline{D(\lambda,r)}$ meets $\sigma(T)$ only at $\lambda$, so for $\zeta\in\sigma(T)$ the value $c(\zeta)$ is $1$ exactly at $\zeta=\lambda$ and $0$ otherwise; hence $c|_{\sigma(T)}=\mathbf 1_{\{\lambda\}}$ and the contour integral equals $\Phi_E(\mathbf 1_{\{\lambda\}})=E(\{\lambda\})$. [step 1.2, step 2.1, A5]

4.1 To check the defining Riesz cycle conditions, choose $R>r$ with $K\setminus\{\lambda\}$ disjoint from $\overline{D(\lambda,R)}$: compactness gives such an $R$ if this complement is nonempty, and any $R>r$ works otherwise. Choose $r<R_1<R_2<R$, set $U_1=D(\lambda,R_1)$ and $U_0=\{z:|z-\lambda|>R_2\}$, and define $\chi=1$ on $U_1$, $\chi=0$ on $U_0$. These are disjoint open neighborhoods of the respective spectral parts. The circle lies in $U_1\setminus K$, has index one at $\lambda$, zero at the other spectral points and zero outside $U_1\cup U_0$, by step 1.2. Thus it is a permitted cycle in the Riesz definition and $\chi=1$ on it. Consequently $P_{\{\lambda\}}=\frac{1}{2\pi i}\oint_\gamma(zI-T)^{-1}\,dz=E(\{\lambda\})$. [step 1.2, step 3.1, A1, A6, A7]

4.2 The isolated spectral point is an eigenvalue. Indeed $\mathbf 1_{\{\lambda\}}$ is a nonzero continuous function on $K$ because the singleton is clopen there, so isometry of the continuous calculus gives $\|\mathbf 1_{\{\lambda\}}(T)\|=1$. Agreement of the calculi and step 3.1 identify this operator with $E(\{\lambda\})$, which is therefore nonzero; since its range equals $\ker(T-\lambda I)$, that eigenspace is nonzero. [step 3.1, A5, A8]

5.1 The spectral projection of the isolated eigenvalue $\lambda$ is therefore exactly the Riesz projection computed from the resolvent $(zI-T)^{-1}$ along a positively oriented circle separating $\lambda$ from the rest of the spectrum. [step 4.1, step 4.2, A1] ∎
