---
id: def-cft-strongly-local-unitary-voa-data
kind: definition
title: Strongly local unitary VOA data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
deps:
  - def-cft-2d-conformal-net-on-circle
  - def-conformal-vertex-algebra
  - def-real-and-complex-inner-product-space
  - def-hilbert-space
  - def-von-neumann-algebra-and-commutant
  - def-strong-and-weak-operator-topologies
  - def-axiom-of-choice
  - lem-qsmx-linear-closed-polar-decomposition
  - thm-unbounded-borel-functional-calculus
dependency_roles:
  def-cft-2d-conformal-net-on-circle: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-von-neumann-algebra-and-commutant: mathematical-premise
  def-strong-and-weak-operator-topologies: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-qsmx-linear-closed-polar-decomposition: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
axiom_use: "Assume AC for the selected concrete von Neumann-algebra bounded-adjoint interface, the closed-operator polar decomposition, and the unbounded Borel calculus; the polar supplier's Countable Choice premise is supplied from AC there. No other choice is used."
provenance:
  statement: literature-derived
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
      locator: Sections 4.3, 5.1, 6.1–6.7, PDF pp. 29–53; invariant form, unitarity, energy bounds, smeared fields and strong locality.
category: quantum-field-theory-mathematics
page: cft-euclidean-axioms-and-sewing
reference: items/def-cft-strongly-local-unitary-voa-data.md
---

## Definition

For this page, a **VOA** means a conformal vertex algebra in the CFT-type convention fixed by the library: it has the state–field map, vacuum, translation, conformal vector, Virasoro action, nonnegative integer grading, finite-dimensional weight spaces, and $V_0=\mathbb C\mathbf1$ stated there. It is **simple** when its only ideals are $0$ and $V$. The PCT map $\theta$ is an antilinear bijection preserving the vacuum, translation, conformal vector, and state-field products, and satisfies $\theta^2=1$. The energy operator $L_0$ acts by $d$ on each weight space $V_d$. In the state-field series $Y(a,z)=\sum_{n\in\mathbb Z}a_{(n)}z^{-n-1}$, $a_{(n)}$ is the $n$th mode from the fixed state-field convention.

A **normalized invariant unitary structure** consists of a positive-definite Hermitian form and an antilinear involutive VOA automorphism $\theta$ (the PCT involution) such that $\|\mathbf1\|=1$ and the induced invariant bilinear form satisfies, for all $a,b,c\in V$,
$$
(Y(a,z)b,c)_{\mathrm{bil}}=(b,Y(e^{zL_1}(-z^{-2})^{L_0}a,z^{-1})c)_{\mathrm{bil}}.
$$
The library inner product convention is linear in its first argument. To match the source's linear-in-the-second convention, write $(u|v)_{\mathrm{src}}=\overline{\langle u,v\rangle}$ and $(a,b)_{\mathrm{bil}}=(\theta a|b)_{\mathrm{src}}$; this makes the displayed form bilinear and preserves positivity of $(u|u)_{\mathrm{src}}=\langle u,u\rangle$. The PCT operator also fixes the conformal vector.

For homogeneous $a\in V_d$, polynomial **energy bounds** mean that there are constants $M_a>0$ and integers $s_a,k_a\geq0$ such that
$$
\|a_{(n)}b\|\leq M_a(1+|n|)^{s_a}\|(1+L_0)^{k_a}b\|\quad(n\in\mathbb Z,\ b\in V).
$$
For homogeneous $a\in V_d$, use the **energy modes** $a_n=a_{(n+d-1)}$, so $[L_0,a_n]=-n a_n$. For $f\in C^\infty(S^1)$ define $\widehat f_n=\int_{-\pi}^{\pi}f(e^{i\vartheta})e^{-in\vartheta}\,d\vartheta/(2\pi)$ and on the algebraic finite-energy domain $V$ set $Y_0(a,f)b=\sum_{n\in\mathbb Z}\widehat f_n a_n b$. The Fourier coefficients decrease faster than every power; shifting the index in the energy bound preserves a polynomial bound, so this series converges in norm for every $b\in V$. Extend linearly to inhomogeneous states. The Hilbert space $H_V$ is the completion of $V$ in its positive Hermitian norm.

The invariant form gives a densely defined adjoint on $V$, so $Y_0(a,f)$ is closable. Write $Y(a,f)$ for its closure. For a closed densely defined operator $T$, its polar decomposition is $T=V_T|T|$, where $V_T$ is the partial isometry and $|T|=(T^*T)^{1/2}$ is positive self-adjoint with $D(|T|)=D(T)$. Let $E_{|T|}(B)$ denote the spectral projection of $|T|$ for a Borel set $B\subseteq[0,\infty)$. For each interval $I$, define $\mathcal A_V(I)=W^*(\mathcal G_I)$, where $\mathcal G_I$ consists of the $V_T$ and all $E_{|T|}(B)$ for $T=Y(a,f)$, $a\in V$, $f\in C_c^\infty(I)$, and Borel $B\subseteq[0,\infty)$. Here $W^*$ is the weak-operator closure of the unital $*$-algebra generated by bounded operators, as in the concrete von Neumann-algebra definition. A closed densely defined operator $T$ is affiliated with a von Neumann algebra $M$ if every unitary $u\in M'$ maps $D(T)$ onto itself and satisfies $uT\xi=Tu\xi$ on that domain. Every $T=Y(a,f)$ is affiliated with $\mathcal A_V(I)$: unitaries in $\mathcal A_V(I)'$ commute with $V_T$ and the spectral projections of $|T|$, hence preserve $D(|T|)$ and commute with $|T|$ by the spectral calculus, and then preserve $D(T)$ and commute with $T=V_T|T|$. This uses closed affiliated fields and does not assume essential self-adjointness from polynomial energy bounds alone.

The grades $V_d$ are mutually orthogonal by invariance of the form. On $H_V$, use the self-adjoint extension of $L_0$ given by $L_0\xi=\sum_{d\ge0}d\xi_d$, with domain $\{\xi=\sum_{d\ge0}\xi_d:\xi_d\in V_d,\ \sum_{d\ge0}d^2\|\xi_d\|^2<\infty\}$. Its **smooth-energy domain** is $H_V^\infty=\bigcap_{r\in\mathbb Z_{\ge0}}D((1+L_0)^r)$. This is a common core for all $Y(a,f)$: a core for a closed operator $T$ means a subspace $D\subseteq D(T)$ whose restriction $T|_D$ has closure $T$. Indeed, the energy bound and $[L_0,a_n]=-na_n$ give, for homogeneous $a$, every integer $r\ge0$ and $b\in V$,
$$\|(1+L_0)^rY_0(a,f)b\|\le C_{a,r}\left(\sum_{n\in\mathbb Z}|\widehat f_n|(1+|n|)^{s_a+r}\right)\|(1+L_0)^{k_a+r}b\|.$$
The sum is finite. Finite-energy truncations converge in every indicated weighted norm, so the closed fields extend this action to $H_V^\infty$, preserve it, and have it as a core since it contains their defining core $V$.

A homogeneous vector $a\in V_d$ is **quasi-primary** when $L_1a=0$. For such $a$, invariance gives the mode adjoint $\langle a_nb,c\rangle=\langle b,(-1)^d(\theta a)_{-n}c\rangle$ for $b,c\in V$. Summing against the Fourier coefficients and taking graph closures yields $Y(a,f)^*\supseteq(-1)^dY(\theta a,\bar f)$, where $\bar f(z)=\overline{f(z)}$. In particular both sides are defined and agree on $H_V^\infty$; the inclusion also covers the entire domain of the closed operator on its right. Thus Hermitian combinations satisfy $a=(-1)^d\theta a$; theta-fixed odd-weight states alone are not asserted to give symmetric real smearings. For descendants the complete adjoint is determined by the invariant-form identity above. The algebra definition includes all closed fields, so no restricted Hermitian generating set is silently substituted.

The **strong-locality condition** is the operator inclusion
$$\mathcal A_V(I)\subseteq\mathcal A_V(I')'$$
for every $I\in\mathcal I$. The inclusion is not replaced by equality, and this definition claims no theorem that every unitary VOA is strongly local. A strongly local unitary VOA datum is a simple VOA with the normalized invariant unitary structure, polynomial energy bounds, and this local-algebra inclusion.

## Definition references

[[def-cft-2d-conformal-net-on-circle]]

[[def-conformal-vertex-algebra]]

[[def-real-and-complex-inner-product-space]]

[[def-hilbert-space]]

[[def-von-neumann-algebra-and-commutant]]

[[def-strong-and-weak-operator-topologies]]

[[def-axiom-of-choice]]

[[lem-qsmx-linear-closed-polar-decomposition]]

[[thm-unbounded-borel-functional-calculus]]
