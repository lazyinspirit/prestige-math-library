---
id: thm-stone-resolvent-formula-for-spectral-projections
kind: theorem
title: Stone resolvent formula for spectral projections
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-borel-functional-calculus-for-bounded-normal-operators, def-borel-functional-calculus-for-a-bounded-normal-operator, thm-pvm-integral-is-a-star-homomorphism, thm-bounded-borel-pvm-integral, thm-bounded-linear-maps-commute-with-bochner-integration, def-bochner-integrable-function, thm-bochner-integrability-criterion, lem-spectrum-of-a-self-adjoint-operator-is-real, def-spectrum-and-resolvent-of-a-bounded-operator, def-projection-valued-measure, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., Theorem 4.3, printed pp.113–115"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, Lemma 5.79, printed pp.285–288"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume AC. Let $T$ be a bounded self-adjoint operator on a nonzero complex
Hilbert space $H$ with spectral projection valued measure $E$ on the compact set
$\sigma(T)\subseteq\mathbb R$, and let $a<b$ be real. Then, with the resolvents
$(T-(t\pm i\varepsilon))^{-1}$ defined for $\varepsilon>0$ by
[[def-spectrum-and-resolvent-of-a-bounded-operator]] and the integral of a
continuous $\mathcal B(H)$-valued function understood in the Bochner sense
([[def-bochner-integrable-function]]),

$$\frac{1}{2\pi i}\int_a^b\Bigl[(T-(t+i\varepsilon))^{-1}-(T-(t-i\varepsilon))^{-1}\Bigr]dt \ \longrightarrow\ E\bigl((a,b)\bigr)+\frac{E(\{a\})+E(\{b\})}{2}$$

in the strong operator topology as $\varepsilon\downarrow0$. In particular, if
$a,b\notin\sigma(T)$ then the limit is the spectral projection $E((a,b))$, and
the half-masses at $a$ and $b$ appear exactly when these points are atoms of the
spectrum.

## Facts & Assumptions

[A1] For $z\notin\mathbb R$ the function $g_z(\lambda):=(\lambda-z)^{-1}$ is bounded and Borel on $\sigma(T)$, with $\|g_z\|_\infty\le|\operatorname{Im}z|^{-1}$, and its Borel calculus value satisfies $(T-zI)^{-1}=\Phi_E(g_z)$: indeed $(T-zI)\Phi_E(g_z)=\Phi_E((\lambda-z)g_z)=\Phi_E(\mathbf 1)=I$ and $\Phi_E(g_z)(T-zI)=I$ by linearity and multiplicativity of the Borel calculus ([[thm-borel-functional-calculus-for-bounded-normal-operators]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A2] $\sigma(T)\subseteq\mathbb R$ for self-adjoint $T$, so the functions $g_z$ are defined on the spectrum ([[lem-spectrum-of-a-self-adjoint-operator-is-real]]).

[A3] A continuous function on the compact interval $[a,b]$ with values in the Banach space $\mathcal B(H)$ is Bochner integrable, and a bounded linear map $\Phi$ satisfies $\Phi(\int_Ef\,d\mu)=\int_E\Phi f\,d\mu$ ([[thm-bochner-integrability-criterion]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[A4] The Borel calculus is a unital star-homomorphism: $\Phi_E(\mathbf 1_B)=E(B)$, and uniformly bounded pointwise $E$-almost everywhere convergence implies strong convergence ([[thm-pvm-integral-is-a-star-homomorphism]], [[def-projection-valued-measure]]).

[A5] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** A bounded self-adjoint operator $T$ with spectral PVM $E$ on $\sigma(T)\subseteq\mathbb R$, real numbers $a<b$, and $\varepsilon>0$.

1.1 Resolvent identity: since $\sigma(T)\subseteq\mathbb R$, the function $g_z$ is bounded Borel for $z=t\pm i\varepsilon$ and (A1) identifies $(T-(t\pm i\varepsilon))^{-1}=\Phi_E(g_{t\pm i\varepsilon})$, so the integrand $t\mapsto\Phi_E(g_{t+i\varepsilon})-\Phi_E(g_{t-i\varepsilon})$ is a continuous $\mathcal B(H)$-valued function on the compact interval and the Bochner integral converges. [A1, A2, A3]

1.2 Scalar kernel: for real $\lambda$ and $t$ one computes $(\lambda-(t+i\varepsilon))^{-1}-(\lambda-(t-i\varepsilon))^{-1}=\frac{2i\varepsilon}{(\lambda-t)^2+\varepsilon^2}$, hence the bounded Borel function $K_\varepsilon(\lambda):=\frac1{2\pi i}\int_a^b[(\lambda-(t+i\varepsilon))^{-1}-(\lambda-(t-i\varepsilon))^{-1}]dt$ equals $\frac1\pi\int_a^b\frac{\varepsilon\,dt}{(\lambda-t)^2+\varepsilon^2}=\frac1\pi[\arctan\frac{b-\lambda}{\varepsilon}-\arctan\frac{a-\lambda}{\varepsilon}]$, with $|K_\varepsilon|\le1$ and, for every real $\lambda$, $K_\varepsilon(\lambda)\to\mathbf 1_{(a,b)}(\lambda)+\frac12\mathbf 1_{\{a,b\}}(\lambda)$ as $\varepsilon\downarrow0$. [A2, algebra]

2.1 The operator integral is the calculus value of the kernel: by linearity of $\Phi_E$ and commutation of the bounded linear map $\Phi_E$ with Bochner integration, $\frac1{2\pi i}\int_a^b\bigl[(T-(t+i\varepsilon))^{-1}-(T-(t-i\varepsilon))^{-1}\bigr]dt=\frac1{2\pi i}\int_a^b\bigl[\Phi_E(g_{t+i\varepsilon})-\Phi_E(g_{t-i\varepsilon})\bigr]dt=\Phi_E\Bigl(\frac1{2\pi i}\int_a^b\bigl[g_{t+i\varepsilon}-g_{t-i\varepsilon}\bigr]dt\Bigr)=\Phi_E(K_\varepsilon)$. [step 1.1, step 1.2, A3]

3.1 Strong limit: $|K_\varepsilon|\le1$ and $K_\varepsilon\to\mathbf 1_{(a,b)}+\frac12\mathbf 1_{\{a,b\}}$ pointwise, so the strong-convergence clause of the calculus gives $\Phi_E(K_\varepsilon)\to\Phi_E(\mathbf 1_{(a,b)}+\frac12\mathbf 1_{\{a,b\}})=E((a,b))+\frac12(E(\{a\})+E(\{b\}))$ in the strong operator topology. [step 2.1, A4]

4.1 Therefore the resolvent expression converges strongly to $E((a,b))+\frac12(E(\{a\})+E(\{b\}))$ as $\varepsilon\downarrow0$; if $a,b\notin\sigma(T)$ the endpoint atoms vanish and the limit is the open-interval spectral projection $E((a,b))$. [step 3.1, A5] ∎
