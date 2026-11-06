---
id: def-cft-2d-conformal-net-on-circle
kind: definition
title: Möbius and conformal nets on the circle
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-hilbert-space
  - def-von-neumann-algebra-and-commutant
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - def-strong-and-weak-operator-topologies
  - def-axiom-of-choice
  - thm-unbounded-borel-functional-calculus
dependency_roles:
  def-hilbert-space: mathematical-premise
  def-von-neumann-algebra-and-commutant: mathematical-premise
  thm-double-commutant-theorem-for-concrete-von-neumann-algebras: mathematical-premise
  def-strong-and-weak-operator-topologies: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
axiom_use: "Assume AC for the bounded-adjoint interface in the selected concrete von Neumann-algebra supplier, the double-commutant theorem, and the imported unbounded Borel functional calculus used for the rotation generator; no other choice is used."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Sebastiano Carpi, Yasuyuki Kawahigashi, Roberto Longo, and Mihály Weiner, From Vertex Operator Algebras to Conformal Nets and Back, arXiv:1503.01260v4
      url: https://arxiv.org/pdf/1503.01260
      locator: Sections 3.1–3.3, PDF pp. 18–22; net axioms and consequences.
    - title: Pavel Mnev, Lecture Notes on Conformal Field Theory, Fall 2022
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_2022_notes.pdf
      locator: Sections 1.1.1–1.4.2, PDF pp. 5–17; circle state spaces, oriented boundaries, sewing and projective anomaly.
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/def-cft-2d-conformal-net-on-circle.md
---

## Definition

Set $S^1=\{z\in\mathbb C:|z|=1\}$ with counterclockwise orientation. Define $\mathrm{PSL}(2,\mathbb R)=\mathrm{SL}(2,\mathbb R)/\{\pm I\}$. With $C(t)=(t-i)/(t+i)$ for $t\in\mathbb R$ and $C(\infty)=1$, its action on $S^1$ is $g\cdot C(t)=C((at+b)/(ct+d))$ when $g$ is represented by $\begin{pmatrix}a&b\\c&d\end{pmatrix}$; the fractional-linear formula is interpreted on $\mathbb R\cup\{\infty\}$ and is independent of the representative. Write $r_\alpha(z)=e^{i\alpha}z$ for rotations. The group $\mathrm{Diff}^+(S^1)$ consists of smooth bijections $S^1\to S^1$ with smooth inverses that preserve the orientation, with composition as group operation; use its $C^\infty$ topology, where convergence means uniform convergence of each derivative in local smooth charts. For a Hilbert space $\mathcal H$, let $\mathrm U(\mathcal H)$ be its group of surjective linear isometries and $\mathrm{PU}(\mathcal H)=\mathrm U(\mathcal H)/\mathbb T$, where $\mathbb T=\{\lambda\in\mathbb C:|\lambda|=1\}$ acts by scalar multiples; give $\mathrm{PU}(\mathcal H)$ the quotient of the strong operator topology.

Let $\mathcal I$ be the set of nonempty connected open subsets $I\subset S^1$ with $\overline I\ne S^1$ (the interval convention used here), and let $I'$ be the interior of $S^1\setminus\overline I$. A **Möbius-covariant net** on a complex Hilbert space $\mathcal H$ assigns a concrete von Neumann algebra $\mathcal A(I)\subseteq\mathcal B(\mathcal H)$ to each $I\in\mathcal I$. Here a von Neumann algebra is a unital, self-adjoint operator algebra closed in the weak operator topology. For $\mathcal S\subseteq\mathcal B(\mathcal H)$, define $\mathcal S'=\{T\in\mathcal B(\mathcal H):TS=ST\text{ for every }S\in\mathcal S\}$ and $\mathcal S''=(\mathcal S')'$. The cited double-commutant theorem gives $\mathcal M=\mathcal M''$ for every such von Neumann algebra $\mathcal M$. Here $\mathcal B(\mathcal H)$ is the bounded-operator algebra. These use a complete Hilbert norm, weak operator closure, and the concrete commutant convention.

The assignment satisfies **isotony**, $\mathcal A(I_1)\subseteq\mathcal A(I_2)$ whenever $I_1\subseteq I_2$, and **locality**, $[\mathcal A(I_1),\mathcal A(I_2)]=0$ whenever $I_1\cap I_2=\varnothing$. It has a strongly continuous unitary representation $U$ of $\mathrm{PSL}(2,\mathbb R)$, the Möbius group acting on $S^1$. Positive energy and a specified vacuum vector $\Omega$, as defined below, are required parts of the net data. Here a unitary representation is a group homomorphism into the surjective linear isometries of $\mathcal H$, and strong continuity means $\|U(g)\xi-U(g_0)\xi\|\to0$ as $g\to g_0$ for each $\xi\in\mathcal H$. Its smooth-vector domain is
$$\mathcal H_U^\infty=\{\xi\in\mathcal H:g\mapsto U(g)\xi\text{ is a norm-}C^\infty\text{ map on }\mathrm{PSL}(2,\mathbb R)\}.$$
For a real Lie algebra element $X\in\mathfrak{psl}_2(\mathbb R)$, the infinitesimal generator on this domain is $dU(X)\xi=\left.\frac{d}{dt}\right|_{t=0}U(\exp(tX))\xi$; extend $dU$ complex-linearly to $\mathfrak{psl}_2(\mathbb C)$. The operators $L_{-1},L_0,L_1$ below are the complexified infinitesimal generators in the Möbius basis, with their normalization fixed by the displayed brackets, adjoint relations, and rotation convention. In this convention,
$$U(g)\mathcal A(I)U(g)^*=\mathcal A(gI).$$
On $\mathcal H_U^\infty$, the generators satisfy $[L_m,L_n]=(m-n)L_{m+n}$ for $m,n\in\{-1,0,1\}$. Their adjoint convention on this domain is the form identity $\langle L_{-1}\xi,\eta\rangle=\langle\xi,L_1\eta\rangle$ and $\langle L_0\xi,\eta\rangle=\langle\xi,L_0\eta\rangle$ for all $\xi,\eta\in\mathcal H_U^\infty$. The self-adjoint generator of the rotation subgroup is normalized by $U(r_\alpha)=e^{i\alpha L_0}$, and positive energy means its spectrum is contained in $[0,\infty)$. Since $r_{2\pi}$ is the identity, $e^{2\pi iL_0}=I$; the unbounded Borel functional calculus then gives $E_{L_0}(\mathbb R\setminus\mathbb Z)=0$. Positivity restricts this support to $\mathbb Z_{\ge0}$. Define $\mathcal H_{\mathrm{fin}}=\operatorname{span}_{\mathrm{alg}}\{\ker(L_0-nI):n\in\mathbb Z_{\ge0}\}$. The increasing projections $E_{L_0}([0,N])=\sum_{n=0}^N E_{L_0}(\{n\})$ converge strongly to $I$, so $\mathcal H_{\mathrm{fin}}$ is dense in $\mathcal H$. A **vacuum vector** is a unit vector $\Omega\in\mathcal H$ with $U(g)\Omega=\Omega$ for all $g$ and with $\Omega$ cyclic for the global algebra $\bigvee_{I\in\mathcal I}\mathcal A(I)$; cyclic means that the span of $\{A\Omega:A\in\bigvee_I\mathcal A(I)\}$ is dense. The symbol $\bigvee$ denotes the smallest von Neumann algebra containing the listed local algebras.

A **conformal net** additionally has a continuous group homomorphism $\mathrm{Diff}^+(S^1)\to\mathrm{PU}(\mathcal H)$, called a strongly continuous projective unitary representation, extending the Möbius representation and satisfying the same interval covariance. Equivalently, unitary lifts represent multiplication up to scalar phases, or define a genuine representation of a specified central extension. It also satisfies local diffeomorphism implementation: if $\gamma\in\mathrm{Diff}^+(S^1)$ equals the identity on an interval $I$, then $U(\gamma)AU(\gamma)^*=A$ for every $A\in\mathcal A(I)$; this is independent of the lift's phase. Equivalently, a diffeomorphism supported in $I'$ acts trivially on $\mathcal A(I)$. No Haag-duality or geometric modular-action property is assumed by this axiom. A net is **irreducible** when $\bigvee_{I\in\mathcal I}\mathcal A(I)=\mathcal B(\mathcal H)$. Irreducibility is a separate condition, not part of the two covariance definitions.

The selected concrete von Neumann-algebra supplier assumes full Axiom of Choice for its bounded-adjoint interface; this item carries that exact assumption through the selected concrete von Neumann-algebra interface. No claim is made that every formulation of a conformal net uses choice.

## Definition references

[[def-hilbert-space]]

[[def-von-neumann-algebra-and-commutant]]

[[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]

[[def-strong-and-weak-operator-topologies]]

[[def-axiom-of-choice]]

[[thm-unbounded-borel-functional-calculus]]
