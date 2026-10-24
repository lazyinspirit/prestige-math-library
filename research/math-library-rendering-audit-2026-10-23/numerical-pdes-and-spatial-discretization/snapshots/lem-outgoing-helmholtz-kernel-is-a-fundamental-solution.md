---
id: lem-outgoing-helmholtz-kernel-is-a-fundamental-solution
kind: lemma
title: The outgoing three-dimensional Helmholtz kernel is a fundamental solution
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-volume-integral-scattering-model, def-complex-exponential, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-complex-exponential-is-entire-with-derivative-itself, thm-polar-coordinates-formula-for-lebesgue-measure, cor-second-green-identity-on-a-bounded-c-one-domain, def-integrable-real-and-complex-functions-and-their-integrals, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-and-fubini-for-completed-product-measures, thm-finite-and-countable-subadditivity-of-measures, def-countable-choice, def-test-function-space-d-of-an-open-set, def-test-function-topology, def-fixed-support-test-function-frechet-space, def-distribution, def-distributional-derivative, def-regular-distribution-from-a-locally-integrable-function, thm-locally-integrable-functions-embed-in-distributions]
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is required by the polar-coordinate, second-Green, and locally-integrable-to-distribution interfaces. The point-source identity is a test-function calculation; no full Axiom of Choice is used."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, Sommersemester 2015, Chapter 5, §5.2.6"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "PDF pp. 79–82, outgoing Helmholtz volume potential and the Lippmann–Schwinger equation; the distributional normalization is verified locally."
    - title: "Pierre Capel, Introduction to Scattering Theory, TALENT lecture notes"
      url: "https://indico.mitp.uni-mainz.de/event/279/sessions/1001/attachments/2951/3418/Capel1TALENTFB22ho.pdf"
      locator: "PDF pp. 16–19, outgoing radial Helmholtz solution and Green-function convention."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. For real $k$, let $\Phi_k(x)=e^{ik|x|}/(4\pi|x|)$ for $x\ne0$. In the sense of distributions on $\mathbb R^3$,
$$(-\Delta-k^2)\Phi_k=\delta_0.$$
Here $\delta_0$ is the point-mass distribution defined by $\langle\delta_0,\varphi\rangle=\varphi(0)$ for every $\varphi\in C_c^\infty(\mathbb R^3)$. Consequently, if $g\in L^1(\mathbb R^3)$ has bounded support, the integral $\int_{\mathbb R^3}\Phi_k(x-y)g(y)\,dy$ is absolutely finite for almost every $x$. Define $V$ by this integral almost everywhere (and arbitrarily on the exceptional null set). Then $V\in L^1_{\rm loc}$ and $(-\Delta-k^2)V=g$ distributionally.

## Facts & Assumptions

**Given:** Countable Choice, real $k$, the outgoing kernel convention in [[def-volume-integral-scattering-model]], and a compactly supported $g\in L^1(\mathbb R^3)$.

[F1] [[def-volume-integral-scattering-model]]: $\Phi_k(r)=e^{ikr}/(4\pi r)$ for $r>0$.

[F2] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: radial integration in $\mathbb R^3$ uses $r^2dr\,d\sigma$ with $\sigma(S^2)=4\pi$.

[F3] [[cor-second-green-identity-on-a-bounded-c-one-domain]]: assuming Countable Choice, Green's second identity applies on the smooth annulus to real $C^2$ functions; its complex-bilinear form follows by splitting both functions into real and imaginary parts.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] and [[thm-tonelli-and-fubini-for-completed-product-measures]]: absolutely integrable product functions may be integrated in either order, with the stated almost-everywhere section interpretation.

[F5] [[def-test-function-space-d-of-an-open-set]], [[def-test-function-topology]], [[def-fixed-support-test-function-frechet-space]], [[def-distribution]], and [[def-distributional-derivative]]: $\mathcal D(\mathbb R^3)=C_c^\infty$; a distribution is a continuous complex-linear functional on this test space, and derivatives are defined by integration by parts against tests. The seminorm $p_0(\varphi)=\sup_x|\varphi(x)|$ is continuous on each fixed-support test space, so point evaluation $\varphi\mapsto\varphi(0)$ is continuous.

[F6] A locally integrable function defines a regular distribution, and under Countable Choice the embedding is continuous ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-countable-choice]]).

[F8] A countable union of measurable null sets is null ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F7] The complex exponential has derivative $\exp'(z)=\exp z$ ([[thm-complex-exponential-is-entire-with-derivative-itself]]), and for real $t$ it satisfies $|e^{it}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]). For real $r$ and $k\ne0$, its real-parameter derivative follows directly from the complex difference quotient:
$$\frac{e^{ik(r+h)}-e^{ikr}}{h}=ik\frac{e^{ikr+ikh}-e^{ikr}}{ikh}\longrightarrow ik e^{ikr}.$$
For $k=0$ the function is constant. The defining exponential series also gives $e^{ik\epsilon}=1+ik\epsilon+O(\epsilon^2)$ as $\epsilon\downarrow0$ ([[def-complex-exponential]]).

## Proof

**Given:** The data in the Statement and an arbitrary $\varphi\in C_c^\infty(\mathbb R^3)$.

1.1 Writing $r=|x|$, [F7] gives $\Phi_k'(r)=e^{ikr}(ikr-1)/(4\pi r^2)$; direct substitution yields $\Phi_k''+2\Phi_k'/r+k^2\Phi_k=0$ for $r>0$. Also [F7] gives $|\Phi_k(x)|=1/(4\pi|x|)$, whose integral over each centered ball is finite by [F2]. Hence $\Phi_k\in L^1_{\rm loc}$ and [F6] supplies its regular distribution. Point evaluation is continuous by [F5], so $\delta_0$ is also a distribution. Thus $(-\Delta-k^2)\Phi_k=0$ away from the origin as a classical equation and the distributional pairing in the next step is defined. [F1, F2, F5, F6, F7, algebra]

2.1 Choose an outer sphere beyond $\operatorname{supp}\varphi$ and apply [F3] on the annulus between it and radius $\epsilon$. Apply the real identity to the four real/imaginary pairings to obtain the complex bilinear identity. The outer boundary term is zero, and the inner boundary orientation yields $\int_{|x|>\epsilon}\Phi_k(x)(-\Delta-k^2)\varphi(x)\,dx=\int_{|x|=\epsilon}(\Phi_k\partial_r\varphi-\varphi\partial_r\Phi_k)\,dS$. The first term is $O(\epsilon)$ since $\Phi_k=O(\epsilon^{-1})$ and the sphere area is $4\pi\epsilon^2$. From the derivative formula in step 1.1 and the exponential series, $e^{ik\epsilon}(ik\epsilon-1)=-1+O(\epsilon^2)$, so $\partial_r\Phi_k=-1/(4\pi\epsilon^2)+O(1)$. The second term therefore tends to $\varphi(0)$: after writing $x=\epsilon\omega$, it equals $\int_{S^2}\varphi(\epsilon\omega)/(4\pi)\,d\sigma+O(\epsilon^2)$. The omitted ball contributes $o(1)$ because $|\Phi_k|=O(1/r)$ is locally integrable by [F2]. By [F6], this limit is precisely $\langle(-\Delta-k^2)\Phi_k,\varphi\rangle=\langle\delta_0,\varphi\rangle$. [F2, F3, F5, F6, F7, step 1.1, algebra]

3.1 Let $A$ be any bounded measurable set and let $C$ be a bounded set containing the support of $g$. Polar coordinates show $\sup_{y\in C}\int_A|\Phi_k(x-y)|dx<\infty$, since $A-y$ lies in a fixed-radius ball and $\int_0^R r^{-1}r^2dr<\infty$. Tonelli then gives $\int_A\int_C|\Phi_k(x-y)||g(y)|dy\,dx<\infty$, so the defining convolution is absolutely finite for almost every $x\in A$ and belongs to $L^1(A)$. Taking $A=B(0,n)$ for each integer $n\ge1$ and using [F8] on the countable union of exceptional null sets proves absolute finiteness for almost every $x\in\mathbb R^3$. For every bounded measurable $A$, the same estimate gives $V\in L^1(A)$, hence $V\in L^1_{\rm loc}$. With $A=\operatorname{supp}\varphi$, the same bound makes $g(y)\Phi_k(x-y)(-\Delta-k^2)\varphi(x)$ absolutely integrable, so [F4] permits Fubini. Step 2.1 translated by $y$ gives $\langle(-\Delta-k^2)V,\varphi\rangle=\int g(y)\varphi(y)\,dy$. The preceding argument proves $V\in L^1_{\rm loc}$ and the a.e. existence of its integral representative. [F2, F3, F4, F8, step 2.1, algebra] ∎
