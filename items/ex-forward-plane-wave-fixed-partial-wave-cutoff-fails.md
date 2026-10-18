---
id: ex-forward-plane-wave-fixed-partial-wave-cutoff-fails
kind: example
title: A fixed partial-wave cutoff misses the forward high-frequency plane wave
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-spherical-harmonic-partial-wave-conventions, lem-spherical-harmonics-form-complete-basis-and-addition-formula, def-countable-choice, def-dependent-choice, def-polar-surface-measure-on-the-unit-sphere, thm-polar-coordinates-formula-for-lebesgue-measure, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-linear-change-of-variables-for-lebesgue-measure, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice and Dependent Choice are carried from the harmonic supplier used for the projection kernel; the decay bound itself is finite integration by parts."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
      locator: "PDF pp. 17–21, plane-wave partial-wave decomposition; the fixed-cutoff forward-error conclusion is proved locally."
    - title: "Maximilian Kreuzer, Quantum Theory: Lecture Notes, version July 15, 2009, Chapter 8"
      url: "https://hep.itp.tuwien.ac.at/~kreuzer/Quanten.15.07.09.pdf"
      locator: "PDF pp. 145–150, plane-wave expansion and spherical-harmonic addition identity."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Assume Countable Choice and Dependent Choice. For a fixed direction $d\in S^2$, consider the incident plane wave $g_k(\omega)=e^{ikd\cdot\omega}$ on the unit sphere. Let $\Pi_L$ denote projection onto degrees $0,\ldots,L$. For each fixed $L$, its value at the forward direction tends to zero as $k\to\infty$, whereas $g_k(d)=e^{ik}$ has modulus one. Thus a fixed angular cutoff has forward error tending to one; uniform high-frequency accuracy below one requires the cutoff to tend to infinity.

## Verification

**Given:** $d\in S^2$, $k>0$, and integer $L\ge0$.

[F1] The addition kernel for degree $\ell$ is $Z_\ell(\omega,\eta)=\frac{2\ell+1}{4\pi}P_\ell(\omega\cdot\eta)$. Expanding the finite orthogonal projection in an orthonormal basis gives its kernel $Z_\ell$, so $(\Pi_Lg)(d)=\sum_{\ell=0}^L\int_{S^2}Z_\ell(d,\omega)g(\omega)d\sigma(\omega)$ ([[lem-spherical-harmonics-form-complete-basis-and-addition-formula]]).

[F2] In the coordinates $\omega(t,\phi)=(\sqrt{1-t^2}\cos\phi,\sqrt{1-t^2}\sin\phi,t)$, the map $T(r,t,\phi)=r\omega(t,\phi)$ is a $C^1$ diffeomorphism from $(0,1)\times(-1,1)\times(0,2\pi)$ onto the open unit ball with its meridional half-plane removed, and $|\det DT|=r^2$. The omitted half-plane is null by the singular clause of the linear change-of-variables theorem. The $C^1$ change-of-variables theorem and the radial-cone definition of $d\sigma$ therefore give $d\sigma=dt\,d\phi$ on this chart. Rotations preserve $d\sigma$ because they preserve radial cones and have determinant one ([[def-polar-surface-measure-on-the-unit-sphere]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-linear-change-of-variables-for-lebesgue-measure]]). Choosing a rotation taking $d$ to the north pole yields $\int_{S^2}h(d\cdot\omega)d\sigma(\omega)=2\pi\int_{-1}^1h(t)dt$ for every continuous $h$.

[F3] For real $t$, the complex derivative theorem gives $\frac{d}{dt}e^{ikt}=ik e^{ikt}$; this follows from the difference quotient with complex increment $ikh$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F4] For real $k$, $|e^{ik}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

1.1 By [F1] and [F2], $(\Pi_Lg_k)(d)=\sum_{\ell=0}^{L}\frac{2\ell+1}{2}\int_{-1}^1e^{ikt}P_\ell(t)dt$. For a fixed polynomial $P_\ell$, integration by parts gives $\left|\int_{-1}^{1}e^{ikt}P_\ell(t)dt\right|\le\frac{|P_\ell(1)|+|P_\ell(-1)|+\int_{-1}^1|P_\ell'(t)|dt}{k}$. Summing finitely many terms yields $|(\Pi_Lg_k)(d)|\le C_L/k$ for a finite constant $C_L$ independent of $k$. [F1, F2, F3, given, algebra]

2.1 Since $|g_k(d)|=|e^{ik}|=1$, step 1.1 and the reverse triangle inequality give $|g_k(d)-(\Pi_Lg_k)(d)|\ge1-C_L/k\to1$. If integer cutoffs $L(k)$ failed to tend to infinity as $k\to\infty$, there would be $L_0$ and a sequence $k_n\to\infty$ with $L(k_n)\le L_0$; the finite maximum $C=\max_{0\le j\le L_0}C_j$ would give the same lower bound $1-C/k_n\to1$ along that sequence. Thus a cutoff with uniform error bounded by any fixed $\varepsilon<1$ for all sufficiently large $k$ must satisfy $L(k)\to\infty$. [F4, step 1.1, algebra] ∎
