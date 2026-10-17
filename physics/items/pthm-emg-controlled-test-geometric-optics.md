---
id: pthm-emg-controlled-test-geometric-optics
kind: physics-theorem
title: Controlled test-wave rays, polarization and Maxwell residual
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
proof_strategy: direct
deps:
  - post-emg-background-maxwell-test
  - lem-emg-controlled-maxwell-wkb
  - lem-emg-source-and-test-scaling
dependency_roles:
  post-emg-background-maxwell-test: physical-assumption
  lem-emg-controlled-maxwell-wkb: mathematical-premise
  lem-emg-source-and-test-scaling: mathematical-premise
physical_scope: "C4 real phase and C3 complex amplitudes under the exact four finite-order constraints; finite compact-chart component residual and leading-field bounds only; local affine null rays and the two-dimensional transverse polarization quotient. The construction is interpreted as a fixed-background Maxwell test field and gives no convergence, global caustic control, exact-solution error, Einstein equation, or backreaction estimate."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Harte, Gravitational lensing beyond geometric optics: I. Formalism and observables, arXiv:1808.06203v2 (2018), complete 38-page article"
      url: https://arxiv.org/pdf/1808.06203v2
      locator: "§§3.1–3.3, equations (40)–(55), PDF pp. 10–13, treat the curved Maxwell potential ansatz, transport/gauge constraints, leading field and polarization; Appendix A, equations (A.2)–(A.5), PDF pp. 33–34, identifies the gauge-gradient residual. The exact finite-ε identities and bounds are proved by the listed mathematical supplier."
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, complete 125-page notes, §6.2"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Equations (6.12)–(6.14), PDF pp. 63–64, derive null geometric-optics rays in curved spacetime. Reall's leading-order discussion does not supply the finite-ε residual bound used here."
    - title: "David Tong, General Relativity, complete author-hosted 290-page lecture notes (2019)"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "§§2.4.2 and 4.5, PDF pp. 105–109 and 190–204, give the differential-form Maxwell field and curved-spacetime field equations/stress context. The local finite-order field calculation follows the exact mathematical supplier and local SI conventions."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Use the fixed-background Maxwell test model of [[post-emg-background-maxwell-test]] on a smooth oriented, time-oriented Lorentzian four-manifold with signature $(-,+,+,+)$ and its adopted length-coordinate SI conventions. Let $U\subseteq M$ be open. Let $\theta\in C^4(U,\mathbb R)$ be dimensionless, set $k=d\theta$, and assume $k$ is nowhere zero and $g^{-1}(k,k)=0$. Let $a_0,a_1\in C^3(U;T^*M\otimes_\mathbb R\mathbb C)$, with covariant derivatives and contractions extended complex-linearly. Use $[k]=\mathrm{m}^{-1}$, $[a_0]=[a_1]=\mathrm{T\,m}$, and dimensionless $\epsilon$, as in [[lem-emg-controlled-maxwell-wkb]]. Define

$$ (\Box a)_b:=g^{ac}\nabla_a\nabla_c a_b,\qquad (Pa)_b:=(\Box a)_b-\operatorname{Ric}_b{}^c a_c,\qquad (La)_b:=2k^c\nabla_ca_b+(\nabla_ck^c)a_b. $$

Assume the four pointwise constraints $g^{-1}(k,a_0)=0$, $La_0=0$, $iLa_1+Pa_0=0$, and $ik^a(a_1)_a+\nabla^a(a_0)_a=0$. For $0<\epsilon\le1$, form the complex ansatz $A_\epsilon=\epsilon e^{i\theta/\epsilon}(a_0+\epsilon a_1)$ and its real potential $\widehat A_\epsilon:=\operatorname{Re}A_\epsilon$ with real field $\widehat F_\epsilon:=d\widehat A_\epsilon$. Use the fixed-chart component max norm $\|\cdot\|_{\infty,K}$ of [[lem-emg-controlled-maxwell-wkb]], which is zero on an empty compact set. On a nonempty compact coordinate set $K$, assume finite constants $K_0,D_0,C_0,B_0,B_1$ satisfy $\|k\|_{\infty,K}\le K_0$, $\|d_1\|_{\infty,K}\le D_0$, $\|Pa_1-\nabla d_1\|_{\infty,K}\le C_0$, $\|da_0+ik\wedge a_1\|_{\infty,K}\le B_0$, and $\|da_1\|_{\infty,K}\le B_1$. The real field obeys $d\widehat F_\epsilon=0$ and

$$ \|\nabla^a(\widehat F_\epsilon)_{ab}\|_{\infty,K}\le\epsilon K_0D_0+\epsilon^2C_0,\qquad \|\widehat F_\epsilon-\operatorname{Re}(e^{i\theta/\epsilon}ik\wedge a_0)\|_{\infty,K}\le\epsilon B_0+\epsilon^2B_1. $$

Each local integral curve of $k^\sharp$ is an affinely parameterized null geodesic. Along it $a_0$ is transported according to the supplied scalar transport amplitude, and the leading physical polarization is the class in $k^\perp/\operatorname{span}_\mathbb C\{k\}$, a two-dimensional complex space with positive induced Hermitian form. These are exact finite-order deductions under the displayed ansatz constraints. The residual is a component norm in the chosen chart, not an observer-independent tensor norm. The conclusion asserts no convergent WKB series, existence of amplitudes across caustics, exact Maxwell solution for a nonzero residual, solution-distance estimate, or coupled Einstein–Maxwell family.

## Facts & Assumptions

**Given:** The adopted fixed metric and Maxwell test-field interpretation of [[post-emg-background-maxwell-test]], the stated phase and amplitude regularities, the four pointwise constraints, $0<\epsilon\le1$, and the compact-chart coefficient bounds when $K$ is nonempty.

[F1] [[post-emg-background-maxwell-test]]: the metric is fixed; the real field is interpreted as source-free or as having a separately supplied smooth source, and no Einstein equation is imposed on the unchanged metric. Its test-body/source exclusions are model assumptions, not a derived smallness limit.

[F2] [[lem-emg-controlled-maxwell-wkb]]: with the exact $C^4/C^3$ regularity, null nonzero phase gradient, four stated constraints, and compact-chart bounds, the complex ansatz has the exact field expansion and divergence residual; taking real parts preserves the residual and leading-field bounds, and the local phase rays and polarization quotient have the conclusions stated above. It asserts no convergence or exact-solution error.

[F3] [[lem-emg-source-and-test-scaling]]: a fixed-background Maxwell residual is an exact consistency calculation; it does not provide a nearby coupled metric or a solution-distance estimate without separate existence and stability hypotheses.

[A1] The phase, amplitudes, four ansatz constraints, and finite component bounds in the Statement are explicit hypotheses. No global transport solution, boundary data, initial data, or higher-order convergence assumption is added.

## Proof

1.1 The regularity, null-gradient, four constraint, and compact-chart bound hypotheses in [A1] agree with the mathematical statement of [F2]. The fixed metric and real-field interpretation agree with [F1]. Applying [F2] gives $d\widehat F_\epsilon=0$, the two displayed finite-$\epsilon$ bounds, the affine null rays, and the transported polarization class. [given, F1, F2, A1]

2.1 The divergence estimate in step 1.1 is a residual for this prescribed trial field. [F3] states that such a residual alone supplies neither a nearby coupled solution nor a solution-distance estimate, and [F1] imposes no Einstein equation on the fixed metric. Therefore the result is only the stated fixed-background conditional prediction; it does not promote a nonzero residual to an exact Maxwell solution or a coupled Einstein–Maxwell solution. [F1, F3, step 1.1] ∎
