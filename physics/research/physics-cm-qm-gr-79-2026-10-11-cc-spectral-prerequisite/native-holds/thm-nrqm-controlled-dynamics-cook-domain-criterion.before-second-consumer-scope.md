---
id: thm-nrqm-controlled-dynamics-cook-domain-criterion
aliases: [nrqm-controlled-dynamics-cook-domain-criterion]
kind: theorem
domain: mathematics
title: "Cook domain criterion"
status: draft
origin: pipeline
dependency_level: 0
deps: [lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-hilbert-space, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, lem-bochner-integral-norm-inequality, def-countable-choice]
dependency_roles:
  lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves: mathematical-premise
  lem-bochner-integral-norm-inequality: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Lemma 12.3 p. 248 (Cook's criterion) and Section 5.1 pp. 123-126 (Stone's theorem)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Scattering Theory pp. 209-211 (scattering states and the scattering operator)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space, let $H_0$ and $H$ be self-adjoint operators on $H$ with
$D(H_0)\subseteq D(H)$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-adjoint-of-a-densely-defined-unbounded-operator]]), let
$e^{-itH_0}$ and $e^{-itH}$ be their unitary groups
([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]),
and let $D\subseteq D(H_0)$ be a linear subset that is dense in $H$ and
invariant under $e^{-itH_0}$ for all real $t$. Assume that for every $\psi\in D$
the function $t\mapsto (H-H_0)e^{-itH_0}\psi$ is norm-continuous and has
norm-integrable restriction to $[0,\infty)$ and to $(-\infty,0]$, i.e.
$$\int_0^\infty\bigl\|(H-H_0)e^{-itH_0}\psi\bigr\|\,dt<\infty,\qquad \int_{-\infty}^0\bigl\|(H-H_0)e^{-itH_0}\psi\bigr\|\,dt<\infty.$$
For $t\in\mathbb R$ put $F(t):=e^{itH}e^{-itH_0}\in\mathcal B(H)$. Then:

(a) *Existence of wave operators.* For every $\psi\in D$ the curve
$t\mapsto F(t)\psi$ is Cauchy as $t\to+\infty$ and as $t\to-\infty$; denote the
limits by $\Omega_+\psi$ and $\Omega_-\psi$. Moreover for every $s\ge0$,
$$\|\Omega_+\psi-F(s)\psi\|\le\int_s^\infty\bigl\|(H-H_0)e^{-itH_0}\psi\bigr\|\,dt,\qquad \|\Omega_-\psi-F(-s)\psi\|\le\int_{-\infty}^{-s}\bigl\|(H-H_0)e^{-itH_0}\psi\bigr\|\,dt.$$

(b) *Isometry on $D$.* $\|\Omega_\pm\psi\|=\|\psi\|$ for every $\psi\in D$.

(c) *Extension.* $\Omega_\pm$ extend uniquely to bounded linear isometries
$\Omega_\pm:H\to H$; the extension is again denoted $\Omega_\pm$ and satisfies
$\|\Omega_\pm\eta\|=\|\eta\|$ for every $\eta\in H$, $\Omega_\pm^*\Omega_\pm=I$,
and $\|\Omega_\pm\eta\|=0$ for $\eta=0$ only. The ranges $\operatorname{ran}\Omega_\pm$
are closed subspaces of $H$.

Range equality with the absolutely continuous subspace, and all asymptotic
completeness statements, are not asserted; they are separate theorems.

## Facts & Assumptions

**Given:** the Hilbert space $H$; self-adjoint $H_0\subseteq H$ with
$D(H_0)\subseteq D(H)$; the dense $e^{-itH_0}$-invariant linear set
$D\subseteq D(H_0)$; the integrability hypothesis; $\psi\in D$.

[F1] Stone's theorem and group properties: $t\mapsto e^{-itH_0}\psi$ and $t\mapsto e^{itH}\eta$ are strongly continuous, $e^{-itH_0}D\subseteq D$, $e^{-itH_0}D(H_0)\subseteq D(H_0)$ and $H_0e^{-itH_0}\psi=e^{-itH_0}H_0\psi$ for $\psi\in D(H_0)$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F2] Differentiability of the two-parameter formula: on the dense set of vectors in $D(H_0)\subseteq D(H)$ the curve $t\mapsto e^{itH}e^{-itH_0}\psi$ is differentiable with $\frac{d}{dt}F(t)\psi=i\,e^{itH}(H-H_0)e^{-itH_0}\psi$; this is the difference-quotient computation for unitary groups of self-adjoint operators ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-adjoint-of-a-densely-defined-unbounded-operator]]).

[F3] The Bochner integral satisfies $\|\int_a^bf(s)ds\|\le\int_a^b\|f(s)\|ds$, and a continuous $H$-valued curve with integrable speed is Cauchy along its half-lines ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]], [[lem-bochner-integral-norm-inequality]], [[def-hilbert-space]]).

[F4] Each $F(t)$ is unitary, hence $\|F(t)\eta\|=\|\eta\|$ and $\|F(t)\eta-F(t)\zeta\|=\|\eta-\zeta\|$ for all $\eta,\zeta\in H$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]]).

## Proof

1.1 [The Cauchy estimate] Fix $\psi\in D$ and $s<t$ in $[0,\infty)$. By [F1], $\psi\in D(H_0)$ and $e^{-itH_0}\psi\in D(H_0)\subseteq D(H)$ for every $t$, so [F2] applies and $\frac{d}{dt}F(t)\psi=i\,e^{itH}(H-H_0)e^{-itH_0}\psi$ is continuous with $H$-valued norm $\|(H-H_0)e^{-itH_0}\psi\|$ by [F4]. Hence the fundamental theorem of calculus [F3] gives $F(t)\psi-F(s)\psi=i\int_s^te^{irH}(H-H_0)e^{-irH_0}\psi\,dr$, and therefore $\|F(t)\psi-F(s)\psi\|\le\int_s^t\|(H-H_0)e^{-irH_0}\psi\|dr$, which tends to $0$ as $s,t\to\infty$ by the integrability hypothesis. Thus $F(t)\psi$ is Cauchy and $\Omega_+\psi$ exists; letting $t\to\infty$ in the displayed inequality gives the estimate of (a). The half-line $(-\infty,0]$ is identical with $e^{-itH_0}$ replaced by its inverse group. [F1, F2, F3, F4, given, algebra]

2.1 [Isometry on $D$] Since each $F(t)$ is unitary, $\|F(t)\psi\|=\|\psi\|$ for all $t$ by [F4]; passing to the norm limit gives $\|\Omega_\pm\psi\|=\|\psi\|$. [step 1.1, F4]

3.1 [Extension by density] For $\eta\in H$ choose $\psi_n\in D$ with $\psi_n\to\eta$. Then $\Omega_+\psi_n$ is Cauchy because $\|\Omega_+\psi_n-\Omega_+\psi_m\|=\|\psi_n-\psi_m\|$ by step 2.1, so $\Omega_+\eta:=\lim_n\Omega_+\psi_n$ exists and is independent of the choice of the sequence (two sequences can be interleaved); the resulting map is linear because the limit is linear on the dense set, and it is isometric: $\|\Omega_+\eta\|=\lim\|\psi_n\|=\|\eta\|$. Being an isometry, it is injective, $\Omega_+^*\Omega_+=I$, and the range is complete, hence closed. The same holds for $\Omega_-$. [step 1.1, step 2.1, F4, algebra] ∎
