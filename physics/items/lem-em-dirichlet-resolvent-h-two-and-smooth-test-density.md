---
id: lem-em-dirichlet-resolvent-h-two-and-smooth-test-density
kind: lemma
domain: mathematics
title: "The L-two Dirichlet resolvent and smooth zero-boundary test density"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 1
deps: [lem-em-zero-boundary-coercivity, lem-em-symmetric-coercive-variational-solver, def-axiom-of-choice, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-bounded-c-k-domain-and-boundary-charts, cor-cauchy-schwarz-inequality-for-l-two, lem-c-k-boundary-flattening-preserves-wkp-locally, cor-c-one-change-of-variables-for-l-one-functions, lem-finite-ambient-partitions-for-euclidean-boundary-integration, lem-test-function-cutoffs-and-euclidean-localization, lem-weak-leibniz-rule-with-a-smooth-factor, def-first-difference-quotient, lem-difference-quotient-integration-by-parts, lem-tangential-difference-quotient-test-function, thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one, thm-riesz-representation-for-hilbert-space, thm-riesz-fischer-completeness-of-l-p, thm-wkp-extension-from-a-half-space, thm-trace-estimate-on-the-half-space, thm-lp-trace-operator-on-a-bounded-c-one-domain, lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts, thm-kernel-of-the-trace-is-w-one-p-zero, lem-compact-support-zero-extension-in-wkp, lem-complex-translation-and-approximate-identity-interfaces, lem-mollification-commutes-with-weak-derivatives-in-the-interior, thm-tonelli-and-fubini-for-completed-product-measures, thm-newton-leibniz-with-interior-derivative, thm-clairaut-schwarz-mixed-partials]
dependency_roles:
  lem-em-zero-boundary-coercivity: mathematical-premise
  lem-em-symmetric-coercive-variational-solver: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-wkp-zero-as-a-sobolev-closure: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  lem-c-k-boundary-flattening-preserves-wkp-locally: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  lem-finite-ambient-partitions-for-euclidean-boundary-integration: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-weak-leibniz-rule-with-a-smooth-factor: mathematical-premise
  def-first-difference-quotient: mathematical-premise
  lem-difference-quotient-integration-by-parts: mathematical-premise
  lem-tangential-difference-quotient-test-function: mathematical-premise
  thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  thm-riesz-fischer-completeness-of-l-p: mathematical-premise
  thm-wkp-extension-from-a-half-space: mathematical-premise
  thm-trace-estimate-on-the-half-space: mathematical-premise
  thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts: mathematical-premise
  thm-kernel-of-the-trace-is-w-one-p-zero: mathematical-premise
  lem-compact-support-zero-extension-in-wkp: mathematical-premise
  lem-complex-translation-and-approximate-identity-interfaces: mathematical-premise
  lem-mollification-commutes-with-weak-derivatives-in-the-interior: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Dyatlov, Lecture notes for 18.155: distributions, elliptic regularity, and applications (MIT), Sections 9.2 and 15.1 (elliptic regularity in Sobolev spaces)"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Sections 9.2 and 15.1 concern interior elliptic regularity and elliptic operators on manifolds, respectively; no bounded-domain Dirichlet resolvent or zero-boundary H2 density theorem is attributed to them. The run's source-coverage record maps this supplier to the batch for elliptic regularity. The boundary-flattening, difference-quotient, normal-recovery, reflection and density arguments below are supplied locally and attribute no further claim to the source."
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014), Chapters 4.1-4.3 and 4.11-4.12"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapters 4.1-4.3 (weak formulation and H^{-1} data) and 4.11-4.12 (interior and boundary regularity) as the contextual weak-formulation reference of the batch. The explicit difference-quotient estimate, the Riesz representation step and the flat-gluing density argument are local."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega$ be a bounded $C^\infty$ domain in $\mathbb R^3$ in the graph sense of [[def-bounded-c-k-domain-and-boundary-charts]]; connectedness is unnecessary. Write $H^m(\Omega)=W^{m,2}(\Omega;\mathbb R)$ with the multi-index integral norm ([[def-sobolev-space-wkp-and-its-norm]]) and $H_0^1(\Omega)$ for the $H^1$ closure of $C_c^\infty(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]]). For every real $f\in L^2(\Omega)$ there is a unique $u\in H_0^1(\Omega)\cap H^2(\Omega)$ satisfying

$$\int_\Omega(\nabla u\cdot\nabla v+uv)=\int_\Omega fv\qquad(v\in H_0^1(\Omega)).$$

It satisfies $(1-\Delta)u=f$ distributionally and almost everywhere as an $L^2$ identity, and

$$\|u\|_{H^1(\Omega)}\le\|f\|_{L^2(\Omega)},\qquad\|u\|_{H^2(\Omega)}\le C_\Omega\|f\|_{L^2(\Omega)}.$$

Moreover $D=\{\varphi\in C^\infty(\overline\Omega):\varphi|_{\partial\Omega}=0\}$ is dense in $H^2(\Omega)\cap H_0^1(\Omega)$ in the $H^2$ norm: every such $w$ has $\varphi_j\in D$ with $\varphi_j\to w$ in $H^2$. Here smoothness on the closure means restriction of a smooth function on a neighbourhood of the closure, equivalently the smooth chart representatives used below. In particular $\nabla\varphi_j\to\nabla w$ in the graph norm of $H(\operatorname{curl})\cap H(\operatorname{div})$, with zero curl and $\operatorname{div}\nabla w=\Delta w$; every $\nabla\varphi_j$ is smooth and PEC since its tangential derivatives vanish at the boundary. For precision, let $X_\Omega$ be the graph-norm closure of smooth vector fields on a neighbourhood of the closure with $\nu\times v=0$ on the boundary, where $\nu$ is the outward Euclidean unit normal. The ambient graph space consists of real $L^2$ vector fields whose distributional $\operatorname{div}v=\sum_i\partial_iv_i$ and $\operatorname{curl}v=(\partial_2v_3-\partial_3v_2,\partial_3v_1-\partial_1v_3,\partial_1v_2-\partial_2v_1)$ lie in $L^2$; its norm squared is $\|v\|_2^2+\|\operatorname{curl}v\|_2^2+\|\operatorname{div}v\|_2^2$. Thus $\nabla w$ belongs to this explicitly defined $X_\Omega$, the same completion used by the later cavity item. No equality with every maximal trace realisation is asserted.

No smoothness of $f$, no classical boundary value for general $u$, and no general nonsmooth-domain, Neumann, interface, or variable-coefficient claim is included. Zero boundary condition means membership in $H_0^1$; the published trace theorem identifies its trace as zero.

## Facts & Assumptions
**Given:** The Axiom of Choice; a bounded $C^\infty$ graph domain $\Omega\subseteq\mathbb R^3$; $f\in L^2(\Omega;\mathbb R)$; the spaces $H^m(\Omega)$, $H_0^1(\Omega)$, the graph space and its closure $X_\Omega$ of the Statement; the variational form $a(w,v)=\int_\Omega(\nabla w\cdot\nabla v+wv)$ and $\ell(v)=\int_\Omega fv$.

[F1] **Zero-boundary coercivity.** Under AC, $H^1(\Omega)=W^{1,2}(\Omega;\mathbb R)$ is complete, $H_0^1(\Omega)$ is a closed complete subspace, the $W^{1,2}$ norm is a Hilbert norm, and $\|v\|_2\le2L\|\nabla v\|_2$ whenever $\Omega\subseteq(-L,L)^3$ ([[lem-em-zero-boundary-coercivity]]).

[F2] **Symmetric coercive solver.** With Countable Choice, a symmetric bounded bilinear form on a real Hilbert space with $a(v,v)\ge\alpha\|v\|^2$ and a bounded linear functional $\ell$ admit a unique $u$ with $a(u,v)=\ell(v)$ for all $v$, and $\|u\|\le\|\ell\|/\alpha$ ([[lem-em-symmetric-coercive-variational-solver]]).

[F3] **Domain charts.** A bounded $C^k$ graph domain carries a finite atlas of interior patches and boundary graph charts, with the boundary presented as graphs over coordinate hyperplanes ([[def-bounded-c-k-domain-and-boundary-charts]]); finite ambient partitions subordinate to the chart cover exist ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]), and smooth cutoffs equal to one on prescribed compact subsets exist ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] **Flattening.** A $C^k$ diffeomorphism $\Phi:U\to V$ with bounded derivatives through order $k$ on the relevant compact patches maps $W^{k,p}$ locally into $W^{k,p}$, with the chain rule for weak derivatives and a norm bound $\|u\circ\Phi\|_{W^{k,p}(U_0)}\le C\|u\|_{W^{k,p}(V_0)}$ ([[lem-c-k-boundary-flattening-preserves-wkp-locally]]). Change of variables for Lebesgue integrals is available for the $C^1$ charts ([[cor-c-one-change-of-variables-for-l-one-functions]]), and the weak Leibniz rule for products with a smooth factor holds ([[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F5] **Difference quotients.** $\delta_h^iu(x)=(u(x+he_i)-u(x))/h$ on $\Omega_{i,h}$ ([[def-first-difference-quotient]]). Discrete integration by parts holds ([[lem-difference-quotient-integration-by-parts]]); for $u\in H^1$ and a cutoff $\eta$, the class $v=-\delta_{-h}^i(\eta^2\delta_h^iu)$ is an admissible compactly supported $H_0^1$ test, and on the half-space with a tangential index $j<n$ it lies in $H_0^1(H)$ and is admissible for an $L^2$ datum ([[lem-tangential-difference-quotient-test-function]]). For $u\in W^{1,2}$ the increment bound $\|\delta_h^iu\|_{L^2(\Omega')}\le\|D_iu\|_{L^2(\Omega)}$ holds on $\Omega'\Subset\Omega$, and the converse characterizes $W^{1,p}$ by uniform increment bounds ([[thm-difference-quotient-characterisation-of-w-one-p-for-p-greater-than-one]]).

[F6] **Riesz representation and $L^2$ completeness.** For a closed subspace of a real Hilbert space, every bounded linear functional is represented by a unique element of the subspace ([[thm-riesz-representation-for-hilbert-space]]); $L^2$ is complete ([[thm-riesz-fischer-completeness-of-l-p]]).

[F7] **Extensions, traces, kernels.** The half-space admits bounded linear $W^{2,2}$ extension operators to $\mathbb R^3$ ([[thm-wkp-extension-from-a-half-space]]); the flat trace satisfies the $W^{1,p}$ boundary estimate ([[thm-trace-estimate-on-the-half-space]]); a bounded $C^1$ domain has a bounded trace operator into $L^p(\partial\Omega)$ ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]]), traces commute with smooth boundary cutoffs and match across a smooth interface ([[lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts]]), and $\{u:Tu=0\}=W_0^{1,p}(\Omega)$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]]).

[F8] **Extension and mollification in the interior.** Compactly supported $W^{k,p}$ functions admit zero extensions ([[lem-compact-support-zero-extension-in-wkp]]); whole-space mollification converges in $W^{k,p}$ and commutes with weak derivatives ([[lem-complex-translation-and-approximate-identity-interfaces]], [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]]).

[F9] **Fubini and one-variable calculus.** Tonelli/Fubini hold for completed product measures ([[thm-tonelli-and-fubini-for-completed-product-measures]]), and the Newton-Leibniz formula with interior derivative holds ([[thm-newton-leibniz-with-interior-derivative]]); smooth mixed partials commute ([[thm-clairaut-schwarz-mixed-partials]]).

[F10] **Cauchy-Schwarz for $L^2$.** $\int|fg|\le\|f\|_2\|g\|_2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]).



## Proof

**Proof technique:** direct.

1.1 On $H_0^1$ with the full norm $\|v\|_{H^1}^2=\|v\|_2^2+\|\nabla v\|_2^2$ the form $a$ is symmetric and bounded, since $|a(w,v)|\le\|w\|_{H^1}\|v\|_{H^1}$ by [F10] applied to the four-component $L^2$ tuple; it is coercive with $a(v,v)=\|v\|_{H^1}^2$, and $\ell$ is bounded with $\|\ell\|\le\|f\|_2$ because $|\ell(v)|\le\|f\|_2\|v\|_2\le\|f\|_2\|v\|_{H^1}$; [F1] makes $H_0^1$ a complete real Hilbert space, so [F2] with $\alpha=1$ (Countable Choice covered by the assumed AC) gives a unique $u\in H_0^1$ with $a(u,v)=\ell(v)$ for all $v\in H_0^1$ and $\|u\|_{H^1}\le\|\ell\|\le\|f\|_2$; testing with $\varphi\in C_c^\infty(\Omega)\subseteq H_0^1$ gives $\int(\nabla u\cdot\nabla\varphi+u\varphi)=\int f\varphi$, that is $(1-\Delta)u=f$ distributionally. [given, F1, F2, F10, algebra]

1.2 Cover the compact closure by finitely many interior patches and boundary graph patches, shrink each twice and choose cutoffs equal to one on the inner patches by [F3]; flattening the boundary charts and possibly reversing the last coordinate sends the domain side to $t>0$ and, by [F4], maps the local $H^1$ and $H^2$ classes with bounded norms. Writing $y=\Phi(x)$, $U=u\circ\Phi^{-1}$, $J=|\det D(\Phi^{-1})|$, the local weak equation becomes $\int A_{ij}\partial_jU\partial_iV+cUV=\int FV$ with $A=J(D\Phi)(D\Phi)^{\mathsf T}$, $c=J$ and $F=J(f\circ\Phi^{-1})$, where $A$ is symmetric and uniformly positive, the coefficients and their first derivatives are bounded on the patch, and $\|F\|_2\le C\|f\|_2$ locally; all identities are justified by the change-of-variables formula and the weak chain rule of [F4]. [given, F3, F4, algebra]

1.3 A localized flattened $U$ lies in $H_0^1$ of the half-space: multiplying the test functions approximating $u$ in $H_0^1(\Omega)$ by the patch cutoff and pulling back through the flattening gives smooth compactly supported functions on the open half-space converging in $H^1$ by [F4], so that the closure characterization of [F1] applies; their supports need not have a uniform distance from the boundary. Consequently tangential difference quotients and smooth cutoffs preserve this closure by [F5]. [given, F3, F4, F5]

2.1 For $k=1,2$ (tangential directions) put $w_h=\delta_h^kU$ and $V=-\delta_{-h}^k(\eta^2w_h)$, pulled back and extended by zero outside the chart; by the half-space part of [F5] each $V$ is an admissible $H_0^1$ test for the localized flattened equation whenever $0<|h|$ is small, and a larger preliminary localization equal to one on the quotient neighbourhood ensures that the cutoff does not change the equation on the test support; interior patches allow all three quotient directions, while no normal quotient crosses the boundary. [step 1.3, F5, algebra]

2.2 For arbitrary $w\in H^2(\Omega)\cap H_0^1(\Omega)$ choose a finite smooth ambient partition with one interior part and boundary parts compactly contained in graph charts by [F3]; multiplication by the partition and flattening preserve $H^2$ by [F4], and each boundary part becomes a compactly supported $W\in H^2(H)$ on the half-space whose flat trace is zero, either by chart compatibility and bounded trace continuity [F7] or by transporting the $H_0^1$ approximating sequence of step 1.3; its support is separated from the artificial edges of the chart. [given, F3, F4, F7]

3.1 Substituting $V$ into the local equation of step 1.2 and using the discrete integration by parts and the quotient product rule of [F5], with $S=F-cU\in L^2$, the principal term satisfies $\int\eta^2A_{ij}(y+he_k)\partial_jw_h\partial_iw_h\ge\alpha\|\eta\nabla w_h\|_2^2$ and the remaining principal terms are $\int\eta^2(\delta_hA_{ij})\partial_jU\partial_iw_h$ and $\int[A_{ij}(y+he_k)\partial_jw_h+(\delta_hA_{ij})\partial_jU](\partial_i\eta^2)w_h$, whose absolute sum is at most $C(\|U\|_{H^1}+\|w_h\|_2)\|\eta\nabla w_h\|_2+C\|U\|_{H^1}\|w_h\|_2$. [step 1.2, step 2.1, F4, F5, F10, algebra]

3.2 Unrestricted smooth $H^2$ approximants of $W$ are obtained from the half-space extension of [F7] followed by multiplication by a fixed compact cutoff equal to one on the support and by whole-space mollification [F8]; they converge in $H^2$, so the traces of the functions and of their first derivatives converge in $L^2$ by the flat trace estimate [F7]; for $\zeta\in C_c^\infty(\mathbb R^2)$ and tangential $k$, the classical boundary integration by parts for the smooth approximants gives $\int T(\partial_kW)\zeta=-\int TW\,\partial_k\zeta=0$, hence $T(\partial_kW)=0$ as a distribution and almost everywhere. [step 2.2, F7, F8, F9, algebra]

4.1 Here $\|\delta_hA\|_\infty\le\|\partial_kA\|_\infty$ on the patch by [F5], and the increment bound of [F5] at $p=2$ gives $\|w_h\|_2\le C\|U\|_{H^1}$ on the required enlarged quotient neighbourhood; the undifferentiated right-hand side obeys $\bigl|\int S\,\delta_{-h}^k(\eta^2w_h)\bigr|\le C\|S\|_2(\|\eta\nabla w_h\|_2+\|w_h\|_2)$ because the same increment bound applies to $\eta^2w_h$ in that direction. [step 3.1, F5, F10, algebra]

4.2 Define the odd reflection $W_o(y,t)=W(y,t)$ for $t>0$ and $-W(y,-t)$ for $t<0$; a piecewise $H^1$ function whose two traces agree is globally $H^1$, proved by testing each half against a compact smooth ambient test, using smooth half-space approximation, one-variable integration and Fubini [F8, F9], the sole interface contribution being the difference of the two traces, which cancels; applying the gluing calculation first to $W_o$ (both traces zero) and then to its first derivatives, whose tangential components are odd reflections of $\partial_kW$ with both traces zero by step 3.2 and whose normal component is the even reflection of $\partial_tW$ with identical traces, shows $W_o\in H^2(\mathbb R^3)$ with $\|W_o\|_{H^2}=\sqrt2\|W\|_{H^2}$ and no delta layer. [step 2.2, step 3.2, F8, F9, algebra]

5.1 Cauchy-Schwarz and the elementary absorption $2ab\le\varepsilon a^2+b^2/\varepsilon$ with a fixed small $\varepsilon$ let the principal gradient square absorb the corresponding right-hand contributions, yielding $\|\eta\nabla\delta_h^kU\|_2\le C(\|F\|_2+\|U\|_{H^1})$ uniformly for all sufficiently small nonzero $h$; this estimates the actual $L^2$ datum, and no difference quotient of $F$ or derivative of $f$ appears. [step 3.1, step 4.1, algebra]

5.2 Choose a real compactly supported mass-one mollifier invariant under $t\mapsto-t$ and convolve $W_o$; the mollifications converge in $H^2(\mathbb R^3)$ by [F8], remain odd and hence vanish at $t=0$, and multiplication by a fixed smooth cutoff in the flattened ambient chart equal to one near the support of $W_o$, with support separated from the artificial edges, preserves this boundary vanishing and the convergence. [step 4.2, F8, algebra]

6.1 On a smaller patch where $\eta=1$, for every compactly supported smooth test $\psi$ the discrete integration by parts [F5] gives $\int\delta_h^k(\partial_jU)\psi=-\int\partial_jU\,\delta_{-h}^k\psi$, whose limit as $h\to0$ is $-\int\partial_jU\,\partial_k\psi$; the uniform bound of step 5.1 makes this a bounded linear functional of $\psi$ in the $L^2$ norm, so it extends continuously to the closed $L^2$ subspace generated by those tests, which is Hilbert by [F6], and the Riesz representation theorem [F6] gives an $L^2$ function representing $\partial_k\partial_jU$ distributionally with the same bound. [step 2.1, step 5.1, F5, F6, algebra]

6.2 Pulling back through the smooth chart and extending by zero outside its artificial support gives globally smooth functions on a neighbourhood of the closure with zero physical boundary value; approximating the interior part by compactly supported smooth functions with radii smaller than its distance from the physical boundary by [F8], and adding the finitely many parts with radii tending to zero (the sequence of radii is chosen by AC), yields $\varphi_j\in D$ with $\varphi_j\to w$ in $H^2$ and hence also in $H^1$, so each $\varphi_j$ lies in $H_0^1$ by the zero-trace kernel theorem [F7]. [step 2.2, step 5.2, F7, F8, algebra]

7.1 Boundary patches thus have every second derivative with at least one tangential index, and weak derivatives commute because for smooth tests the defining pairings reduce to the commutation of smooth mixed partials [F9]; the interior patches already have all second derivatives by applying step 6.1 in all three directions. [step 6.1, F9, algebra]

8.1 The missing normal derivative is recovered from the divergence-form equation with the signs $A_{33}\partial_{33}U=cU-F-\sum_{(i,j)\ne(3,3)}A_{ij}\partial_{ij}U-\sum_{i,j}(\partial_iA_{ij})\partial_jU$; every term on the right is in $L^2$ and $A_{33}\ge\alpha>0$, so division yields $\partial_{33}U\in L^2$ with its bound, this being established distributionally before any almost-everywhere identification. [step 1.2, step 7.1, algebra]

9.1 Returning through the bounded $H^2$ chart maps of [F4] and summing the finitely many patch estimates gives $\|u\|_{H^2}\le C(\|f\|_2+\|u\|_{H^1})\le C_\Omega\|f\|_2$, so the equation holds in $L^2$ and almost everywhere; uniqueness in $H_0^1\cap H^2$ is uniqueness in the larger variational space of step 1.1. [step 1.1, step 8.1, F1, F4, algebra]

10.1 Since $\varphi_j$ is smooth and vanishes on the boundary, $\operatorname{curl}\nabla\varphi_j=0$ and $\operatorname{div}\nabla\varphi_j=\Delta\varphi_j$, while $\nu\times\nabla\varphi_j=0$ follows by differentiating the identically zero smooth boundary restriction; the weak derivatives commute by [F9], so the curls vanish distributionally and $\|\nabla\varphi_j-\nabla w\|_2+\|\operatorname{curl}(\nabla\varphi_j-\nabla w)\|_2+\|\operatorname{div}(\nabla\varphi_j-\nabla w)\|_2\to0$, which is exactly convergence in the graph norm of the Statement; hence $\nabla w\in X_\Omega$ without any maximal-trace-density assumption, and all the claims of the Statement are proved with AC used only through the cited completeness, extension, trace and Riesz interfaces. [step 6.2, F7, F9, algebra] ∎
