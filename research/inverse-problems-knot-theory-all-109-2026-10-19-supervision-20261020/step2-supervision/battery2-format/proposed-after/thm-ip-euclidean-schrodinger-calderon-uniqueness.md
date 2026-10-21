---
id: thm-ip-euclidean-schrodinger-calderon-uniqueness
kind: theorem
title: "Full-data uniqueness for the Euclidean Schrödinger Calderón problem"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-conductivity-dirichlet-to-neumann-map
  - lem-ip-alessandrini-identity
  - lem-ip-euclidean-cgo-solvability
  - cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Calderon problem, full lecture notes (2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Section 3.3, Theorem 3.2 and its complete proof from the Alessandrini identity through Euclidean CGO solutions and Fourier uniqueness, PDF pp. 26-27."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $n\geq3$, let $\Omega\subset\mathbb R^n$ be a bounded, nonempty, connected smooth domain, and let $q_1,q_2\in C^\infty(\overline\Omega,\mathbb R)$. Suppose zero is not a Dirichlet eigenvalue of either $-\Delta+q_j$, and the full Schrödinger Dirichlet-to-Neumann maps satisfy $\Lambda_{q_1}=\Lambda_{q_2}$ on all of $H^{1/2}(\partial\Omega)$. Then $q_1=q_2$ on $\Omega$.

## Statement references

[[def-ip-conductivity-dirichlet-to-neumann-map|Full Schrödinger Dirichlet-to-Neumann map]]

[[lem-ip-euclidean-cgo-solvability|Euclidean exact CGO solutions]]

[[lem-ip-alessandrini-identity|Schrödinger Alessandrini identity]]

## Facts & Assumptions

**Given:** AC and Countable Choice; a bounded smooth Euclidean domain in dimension $n\geq3$; real smooth nonresonant potentials $q_1,q_2$; and equality of their full boundary maps.

[A1] [[def-axiom-of-choice]] is assumed by the finite-measure Fourier uniqueness supplier [F3].

[A2] [[def-countable-choice]] is assumed by the Euclidean CGO Fourier-basis construction [F2].

[F1] [[lem-ip-alessandrini-identity]] and [[def-ip-conductivity-dirichlet-to-neumann-map]]: the Alessandrini Statement gives the Schrödinger identity for smooth boundary values, while the DN definition gives weak boundary forms on $H^{1/2}$. The exact $H^1$ solutions used below have only $H^{1/2}$ traces, so step 1.1 derives the needed extension directly from those forms.

[F2] [[lem-ip-euclidean-cgo-solvability]]: for each large null $\zeta$, the equation $(-\Delta+q)u=0$ has an exact solution $u=e^{i\zeta\cdot x}(1+r)$ with $\|r\|_{L^2}=O(|\zeta|^{-1}\|q\|_2)$.

[F3] [[cor-uniqueness-of-finite-borel-measures-from-their-fourier-transforms]]: finite complex Borel measures on $\mathbb R^n$ with the same Fourier transform are equal.

## Proof

**Given:** the data in the Statement.

1.1 Set $Q=q_1-q_2$. For exact $H^1$ solutions $u_j$ let $f_j=\operatorname{tr}u_j\in H^{1/2}(\partial\Omega)$ and define the Hermitian weak forms $a_j(v,w)=\int_\Omega(\nabla v\cdot\nabla\overline w+q_jv\overline w)\,dx$. By the weak DN definition, $\langle\Lambda_{q_1}f_1,f_2\rangle=a_1(u_1,u_2)$. Let $\widetilde u_1\in H^1(\Omega)$ be the $q_2$ solution with trace $f_1$, which exists by nonresonant weak solvability. Then $\langle\Lambda_{q_2}f_1,f_2\rangle=a_2(\widetilde u_1,u_2)$. Since $u_1-\widetilde u_1\in H_0^1(\Omega)$ and $u_2$ solves the $q_2$ weak equation, $a_2(u_1-\widetilde u_1,u_2)=\overline{a_2(u_2,u_1-\widetilde u_1)}=0$, where the conjugation uses real-valuedness of $q_2$. Subtracting the two weak pairings gives $\langle(\Lambda_{q_1}-\Lambda_{q_2})f_1,f_2\rangle=\int_\Omega Q u_1\overline{u_2}\,dx$. The maps agree on all of $H^{1/2}(\partial\Omega)$, so this integral vanishes. This establishes the weak-trace extension of [F1] used here. [F1, given, algebra]

2.1 Fix $\xi\in\mathbb R^n$. Since $n\geq3$, choose orthonormal $\omega_1,\omega_2\in\mathbb R^n$ perpendicular to $\xi$; when $\xi=0$, choose any orthonormal pair. For $\tau\geq1$, set $\sigma_\tau=(\tau^2+|\xi|^2/4)^{1/2}$ and $$\zeta_1=\tau\omega_1+i\sigma_\tau\omega_2+\xi/2,\qquad \zeta_2=-\tau\omega_1-i\sigma_\tau\omega_2+\xi/2.$$ The orthogonality gives $\zeta_j\cdot\zeta_j=\tau^2-\sigma_\tau^2+|\xi|^2/4=0$, $\zeta_1+\zeta_2=\xi$, and $|\zeta_j|\to\infty$. Apply [F2] to $q_1$ with phase $\zeta_1$ and to $q_2$ with phase $-\overline{\zeta_2}$; the latter is null, and reality of $q_2$ lets us conjugate the resulting solution. Thus $$u_1=e^{i\zeta_1\cdot x}(1+r_1),\qquad u_2=e^{-i\overline{\zeta_2}\cdot x}(1+r_2),\qquad \|r_j\|_{L^2(\Omega)}=O(\tau^{-1}).$$ Substitute in step 1.1. Since $Q\in L^2(\Omega)\cap L^\infty(\Omega)$, $$\left|\int_\Omega Qe^{i\xi\cdot x}\big(r_1+\overline{r_2}+r_1\overline{r_2}\big)\,dx\right| \leq \|Q\|_2(\|r_1\|_2+\|r_2\|_2)+\|Q\|_\infty\|r_1\|_2\|r_2\|_2=O(\tau^{-1}).$$ Taking $\tau\to\infty$ proves $\int_\Omega Qe^{i\xi\cdot x}\,dx=0$ for every $\xi\in\mathbb R^n$. [A2, F2, given, step 1.1, algebra, construct]

3.1 Define the finite complex Borel measure $\mu(E)=\int_{E\cap\Omega}Q(x)\,dx$ on $\mathbb R^n$. It has finite total variation because $\Omega$ is bounded and $Q$ is bounded. The identity in step 2.1 gives $\widehat\mu(\eta)=0$ for every $\eta\in\mathbb R^n$ (take $\xi=-2\pi\eta$). By [F3], $\mu=0$. Hence $\int_E\operatorname{Re}Q\,dx=\int_E\operatorname{Im}Q\,dx=0$ for every Borel $E$; applying this to the sets $\{\operatorname{Re}Q\geq1/m\}$, $\{\operatorname{Re}Q\leq-1/m\}$, and their imaginary-part analogues shows $Q=0$ almost everywhere. Continuity of $Q$ gives $Q=0$ throughout $\Omega$. [A1, F3, given, step 2.1, algebra] ∎

