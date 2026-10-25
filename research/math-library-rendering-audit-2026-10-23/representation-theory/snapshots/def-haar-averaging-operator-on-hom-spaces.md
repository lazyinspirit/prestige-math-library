---
id: def-haar-averaging-operator-on-hom-spaces
kind: definition
title: "Haar averaging of bounded operators as a weak operator integral"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-axiom-of-choice, cor-normalized-haar-probability-on-a-compact-group, def-strongly-continuous-unitary-representation, def-hilbert-space, def-bounded-linear-operator, def-real-and-complex-inner-product-space, thm-riesz-representation-for-hilbert-space, thm-cauchy-schwarz-in-an-inner-product-space, lem-inner-product-is-jointly-continuous, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous]
justified_by: [lem-haar-averaging-projects-onto-the-intertwiner-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: n/a
sources:
  references:
    - title: "David Vogan, Review of Harmonic Analysis on Compact Groups, §§2.1–2.16"
      url: "https://math.mit.edu/~dav/compactrev.ps"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups, §§5.2–5.6"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a compact
Hausdorff group with normalized Haar probability measure $\mu$
([[cor-normalized-haar-probability-on-a-compact-group]]). Under the assumed
Axiom of Choice the Axiom of Countable Choice holds as well
([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

Let $\pi:K\to U(H)$ and $\sigma:K\to U(J)$ be strongly continuous unitary
representations of $K$ on complex Hilbert spaces $H$ and $J$
([[def-strongly-continuous-unitary-representation]], [[def-hilbert-space]]),
and let $T\in\mathcal B(H,J)$ be a bounded linear operator
([[def-bounded-linear-operator]]). The pairing below is linear in the first
variable and conjugate-linear in the second
([[def-real-and-complex-inner-product-space]]).

**The scalar integrals.** Fix $v\in H$ and $w\in J$ and put

$$b_v(w):=\int_K\langle\sigma(k)T\pi(k)^{-1}v,\,w\rangle\,d\mu(k).$$

The integrand is continuous on $K$. Indeed, $k\mapsto T\pi(k)^{-1}v$ is
continuous because $\pi$ is strongly continuous and $T$ is bounded, and for a
continuous map $\psi$ into $J$ the map $k\mapsto\sigma(k)\psi(k)$ is continuous
because every $\sigma(k)$ is an isometry: for fixed $k_0$,

$$\|\sigma(k)\psi(k)-\sigma(k_0)\psi(k_0)\|\le\|\psi(k)-\psi(k_0)\|+\|(\sigma(k)-\sigma(k_0))\psi(k_0)\|,$$

and both terms tend to zero as $k\to k_0$. A continuous complex function on the
compact space $K$ is bounded and Borel, so the displayed integral is a finite
complex number; and $\bigl|\langle\sigma(k)T\pi(k)^{-1}v,w\rangle\bigr|\le
\|T\|\,\|v\|\,\|w\|$ for every $k$ by the Cauchy–Schwarz inequality
([[thm-cauchy-schwarz-in-an-inner-product-space]]), so
$|b_v(w)|\le\|T\|\,\|v\|\,\|w\|$. For fixed $v$ the assignment
$w\mapsto b_v(w)$ is conjugate-linear and $\|w\|\mapsto\|b_v(w)\|$ is bounded
by $\|T\|\,\|v\|$; hence

$$\varphi_v(w):=\overline{b_v(w)}=\int_K\langle w,\sigma(k)T\pi(k)^{-1}v\rangle\,d\mu(k)$$

is a bounded linear functional on $J$ of norm at most $\|T\|\,\|v\|$.

**The definition.** Under Countable Choice the Hilbert space $J$ has the Riesz
representation property ([[thm-riesz-representation-for-hilbert-space]]): there
is a unique vector $A(T)v\in J$ with $\varphi_v(w)=\langle w,A(T)v\rangle$ for
every $w\in J$, equivalently

$$\langle A(T)v,w\rangle=b_v(w)=\int_K\langle\sigma(k)T\pi(k)^{-1}v,\,w\rangle\,d\mu(k)\qquad(v\in H,\ w\in J).$$

This determines $A(T)$ as a map $H\to J$, the **Haar average** of $T$ with
respect to the pair $(\sigma,\pi)$.

**Well-definedness.** For each $v$ the vector $A(T)v$ is unique, so $A(T)$ is a
well-defined function. It is linear: if $v=a v_1+b v_2$ then, by the
conjugate-linearity in $f$ of the representing vector recorded in
[[thm-riesz-representation-for-hilbert-space]], the vector representing
$\varphi_{av_1+bv_2}=\overline a\,\varphi_{v_1}+\overline b\,\varphi_{v_2}$ is
$aA(T)v_1+bA(T)v_2$; and $\|A(T)v\|=\|\varphi_v\|\le\|T\|\,\|v\|$ because the
Riesz representation is isometric, so $A(T)$ is a bounded linear operator with
$\|A(T)\|\le\|T\|$. The assignment $A$ is itself linear in $T$: for fixed $v,w$
the integrand is linear in $T$, so the scalar integral is, and equality of the
weak matrix elements together with uniqueness of the Riesz vector gives
$A(aT+bT')=aA(T)+bA(T')$. Thus
$A:\mathcal B(H,J)\to\mathcal B(H,J)$ is a well-defined map.

**This is a weak operator integral.** Only scalar functions are integrated in
the definition: for fixed $v$ and $w$, the continuous function
$k\mapsto\langle\sigma(k)T\pi(k)^{-1}v,w\rangle$ is integrated against the
scalar measure $\mu$, and the vector $A(T)v$ is then produced by the Riesz
representation theorem. No operator-norm continuity of the orbit
$k\mapsto\sigma(k)T\pi(k)^{-1}$ of an arbitrary bounded operator $T$ is assumed
or asserted. For finite-rank $T:H\to J$, it follows from
[[lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous]] as
follows. Equip $H\oplus J$ with the sum inner product; it is a Hilbert space
because Cauchy sequences converge in each coordinate. The representation
$\tau(k)(v,w)=(\pi(k)v,\sigma(k)w)$ is unitary and strongly continuous.
The bounded finite-rank operator $S(v,w)=(0,Tv)$ satisfies
$\tau(k)S\tau(k)^{-1}(v,w)=(0,\sigma(k)T\pi(k)^{-1}v)$.
The cited lemma makes this conjugation orbit norm continuous, and restriction
to $H\oplus\{0\}$ followed by projection onto $J$ does not increase operator
norm, proving the claimed continuity for $T$. Only
the Axiom of Choice is used, through normalized Haar measure and Countable
Choice. That $A$ is an idempotent contraction onto the bounded intertwiners,
with operator norm one exactly when $\operatorname{Hom}_K(H,J)\ne\{0\}$, is the
content of [[lem-haar-averaging-projects-onto-the-intertwiner-space]], which
justifies the present definition.
