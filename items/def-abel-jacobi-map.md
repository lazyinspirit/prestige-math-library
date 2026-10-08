---
id: def-abel-jacobi-map
kind: definition
title: The Abel-Jacobi map
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 21
deps:
  - cor-complex-analytic-functions-have-local-primitives
  - def-axiom-of-choice
  - def-riemann-surface-and-holomorphic-atlas
  - thm-connected-and-locally-path-connected-implies-path-connected
  - def-divisor-principal-and-canonical-divisor-riemann-surface
  - def-holomorphic-map-and-complex-jacobian
  - def-jacobian-of-a-compact-riemann-surface
  - def-meromorphic-differential-on-a-riemann-surface
  - def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface
  - def-period-pairing-and-period-lattice
  - lem-period-pairing-is-well-defined-and-computed-by-integration
  - thm-componentwise-holomorphy-in-several-complex-variables
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 7 §2, Lemma 7.2 and Corollary 7.3: the point map $I^q_p$, its holomorphy, and its extension $I:\\operatorname{Div}^0(S)\\to\\operatorname{Jac}(S)$, printed pp. 60-61."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, the Abel-Jacobi map $\\varphi:\\operatorname{Div}^0(X)\\to\\operatorname{Jac}(X)$ with $\\varphi(\\sum Q_i-P_i)(\\omega)=\\sum\\int_{P_i}^{Q_i}\\omega$ and the point map $f(Q)=\\varphi(Q-P)$, printed p. 129."
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2 §21.6, printed pp. 170-171: the map $\\Phi:\\operatorname{Div}^0(X)\\to\\operatorname{Jac}(X)$ sending $D$ to the class of $(\\int_c\\omega_1,\\dots,\\int_c\\omega_g)$ for a chain $c$ with $\\partial c=D$, determined by $D$ modulo the period lattice."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the Jacobian
definition. Let $X$ be a compact connected Riemann surface of genus $g$ with
Jacobian $\operatorname{Jac}(X)=\Omega(X)^*/\Lambda$ and quotient projection
$\pi:\Omega(X)^*\to\operatorname{Jac}(X)$
([[def-jacobian-of-a-compact-riemann-surface]]), and let $p_0\in X$ be a base
point.

**Point map.** Coordinate disks make $X$ locally path connected; its connectedness therefore makes it path connected ([[def-riemann-surface-and-holomorphic-atlas]], [[thm-connected-and-locally-path-connected-implies-path-connected]]). For $p\in X$ choose a path $\gamma$ in $X$ from $p_0$ to $p$ and set
$$u_{p_0}(p):=\Bigl[\omega\mapsto\int_\gamma\omega\Bigr]\in\operatorname{Jac}(X),$$
where $[\xi]=\xi+\Lambda$ denotes the class modulo the period lattice and
$\int_\gamma\omega$ is the path integral of the holomorphic differential
([[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]]). The
value is independent of the path: if $\gamma,\gamma'$ are two paths from $p_0$ to
$p$, then the closed curve $\gamma*\gamma'^{-1}$ is a continuous singular cycle
and
$$\int_\gamma\omega-\int_{\gamma'}\omega=\int_{\gamma*\gamma'^{-1}}\omega=P\bigl([\gamma*\gamma'^{-1}],\omega\bigr)=e\bigl([\gamma*\gamma'^{-1}]\bigr)(\omega)$$
for every $\omega\in\Omega(X)$ ([[def-period-pairing-and-period-lattice]],
[[lem-period-pairing-is-well-defined-and-computed-by-integration]]), so the two
functionals differ by the element $e([\gamma*\gamma'^{-1}])\in\Lambda$ of the
period lattice. The resulting map $u_{p_0}:X\to\operatorname{Jac}(X)$ is the
**Abel-Jacobi map** of $X$ with base point $p_0$. It is **holomorphic** in the
atlas of the Jacobian definition, in the following explicit sense: for every
$q\in X$ there are an open neighbourhood $U$ of $q$ and a holomorphic map
$\xi:U\to\Omega(X)^*$ with $\pi\circ\xi=u_{p_0}|_U$. It satisfies the addition
rule
$$u_{p_0}(q)-u_{p_0}(p)=\Bigl[\omega\mapsto\int_p^q\omega\Bigr]$$
for all $p,q\in X$, where the integral is taken along any path from $p$ to $q$.

**Divisors.** Writing points as degree-one divisors, extend $u_{p_0}$ by
linearity: for $D=\sum_pn_p[p]\in\operatorname{Div}(X)$ set
$$u_{p_0}(D):=\sum_pn_p\,u_{p_0}(p)\in\operatorname{Jac}(X);$$
the sum is finite because divisors on a compact Riemann surface have finite
support ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]). For
$\deg D=0$ the class $u(D)$ is independent of the base point $p_0$: the addition
rule gives $u_{q_0}(p)=u_{p_0}(p)-u_{p_0}(q_0)$ for every $p$, so replacing
$p_0$ by $q_0$ adds $-\bigl(\sum_pn_p\bigr)u_{p_0}(q_0)=0$ whenever
$\sum_pn_p=\deg D=0$. Hence on the subgroup
$\operatorname{Div}^0(X)$ of degree-zero divisors the notation $u(D)$ is
base-point free, $u:\operatorname{Div}^0(X)\to\operatorname{Jac}(X)$ is a group
homomorphism, and
$$u\bigl((q)-(p)\bigr)=\Bigl[\omega\mapsto\int_p^q\omega\Bigr].$$
Base-point dependence for divisors of nonzero degree is recorded explicitly:
for $\deg D\ne0$ the two base points give different classes exactly when
$(\deg D)u_{p_0}(q_0)\ne0$. A nonzero torsion shift can therefore cancel in nonzero degree.

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$ of genus $g$, the Jacobian quotient $\operatorname{Jac}(X)=\Omega(X)^*/\Lambda$ with projection $\pi$, the period pairing $P$ and period homomorphism $e$, and a base point $p_0\in X$.

[F1] $\operatorname{Jac}(X)=\Omega(X)^*/\Lambda$ is the quotient of the algebraic dual $\Omega(X)^*$ by the period subgroup $\Lambda=e(H_1(X;\mathbb Z))$, with group law $[\xi]+[\eta]=[\xi+\eta]$ and projection $\pi$; for $g\ge1$ the definition also fixes a $\mathbb C$-basis $\omega_1,\ldots,\omega_g$ of $\Omega(X)$, and its charts are local inverses of $\pi$ ([[def-jacobian-of-a-compact-riemann-surface]]).

[F2] The period homomorphism is $e(\gamma)(\omega)=P(\gamma,\omega)$, and $\Lambda=e(H_1(X;\mathbb Z))$ ([[def-period-pairing-and-period-lattice]]).

[F3] For every $\gamma\in H_1(X;\mathbb Z)$, every continuous singular cycle $c$ representing $\gamma$, and every $\omega\in\Omega(X)$, one has $P(\gamma,\omega)=\int_c\omega$; the period pairing is independent of the cycle representative and of the chosen symplectic basis ([[lem-period-pairing-is-well-defined-and-computed-by-integration]]).

[F4] The path integral of a holomorphic differential is additive under concatenation, changes sign under path reversal, vanishes on a constant path, and is $\mathbb C$-linear in the differential ([[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]]).

[F5] On a simply connected coordinate disk with coordinate $z$, a holomorphic differential $\omega=h(z)\,dz$ has a holomorphic local primitive $H$ with $H'=h$; the definition of the path integral is the sum of endpoint differences of such primitives along a finite subdivision ([[cor-complex-analytic-functions-have-local-primitives]], [[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F6] A map into $\mathbb C^n$ defined on an open set is holomorphic exactly when its components are holomorphic ([[def-holomorphic-map-and-complex-jacobian]], [[thm-componentwise-holomorphy-in-several-complex-variables]]).

[F7] On compact $X$ every divisor has finite support, $\operatorname{Div}^0(X)$ is the subgroup of divisors of degree zero, and degrees are additive ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F8] Full AC is assumed by the Jacobian definition to select the symplectic and holomorphic bases used in [F1]; here it is inherited, and the local computations make no further arbitrary selection ([[def-axiom-of-choice]], [[def-jacobian-of-a-compact-riemann-surface]]).

[F9] A Riemann surface is connected and has coordinate disks, hence is locally path connected and therefore path connected ([[def-riemann-surface-and-holomorphic-atlas]], [[thm-connected-and-locally-path-connected-implies-path-connected]]).

## Verification

**Given:** The objects and conventions in the Definition.

1.1 For $p\in X$, [F9] supplies a path from $p_0$ to $p$. Let $\gamma,\gamma'$ be paths from $p_0$ to $p$. The concatenation $c:=\gamma*\gamma'^{-1}$ is a continuous closed curve, hence a continuous singular $1$-cycle; write $\delta:=[c]\in H_1(X;\mathbb Z)$ for its homology class. By [F4], $\int_\gamma\omega-\int_{\gamma'}\omega=\int_c\omega$ for every $\omega\in\Omega(X)$; by [F3] and [F2], $\int_c\omega=P(\delta,\omega)=e(\delta)(\omega)$. Hence the two functionals differ by the element $e(\delta)\in\Lambda$, so they represent the same class in $\operatorname{Jac}(X)$ and $u_{p_0}(p)$ is well defined. [F1, F2, F3, F4]

2.1 Fix $q\in X$, take a holomorphic chart $z:U\to D$ at $q$ with $U$ a simply connected coordinate disk, and use the basis $\omega_1,\ldots,\omega_g$ of [F1], whose selection is covered by the inherited full AC of [F8]. On $U$ write $\omega_i=h_i(z)\,dz$ with $h_i$ holomorphic; by [F5] there are holomorphic primitives $H_i$ on $D$ with $H_i(z(q))=0$. Fixing any path from $p_0$ to $q$, concatenation with a path inside $U$ from $q$ to $p$ gives $\int_{p_0}^p\omega_i=\int_{p_0}^q\omega_i+H_i(z(p))$ for $p\in U$, by [F4] and [F5]. In the coordinates of [F1], the functional $\omega\mapsto\int_{p_0}^p\omega$ is therefore the sum of the constant functional with coordinates $\int_{p_0}^q\omega_i$ and the $\mathbb C^g$-valued function $p\mapsto(H_1(z(p)),\ldots,H_g(z(p)))$, which is holomorphic by [F5] and [F6]. This functional-valued map is the holomorphic lift $\xi:U\to\Omega(X)^*$ with $\pi\circ\xi=u_{p_0}|_U$; after shrinking $U$, its image lies in one injective quotient chart from [F1], so $u_{p_0}$ is holomorphic there. [F1, F4, F5, F6, F8, step 1.1]

2.2 Let $p,q\in X$, let $\gamma_1$ be a path from $p_0$ to $p$ and $\gamma_2$ a path from $p$ to $q$. By [F4], $\int_{\gamma_1*\gamma_2}\omega=\int_{\gamma_1}\omega+\int_{\gamma_2}\omega$ for every $\omega\in\Omega(X)$; taking classes modulo $\Lambda$ and using step 1.1 for the well-definedness of both sides gives $u_{p_0}(q)=u_{p_0}(p)+[\omega\mapsto\int_{\gamma_2}\omega]$, that is, $u_{p_0}(q)-u_{p_0}(p)=[\omega\mapsto\int_p^q\omega]$. The right-hand side is independent of the path from $p$ to $q$ by the same cycle argument as step 1.1. [F4, step 1.1]

3.1 Let $q_0\in X$ be a second base point. Applying step 2.2 to the pair $p,q_0$ gives $u_{p_0}(p)-u_{p_0}(q_0)=[\omega\mapsto\int_{q_0}^p\omega]=u_{q_0}(p)$ for every $p\in X$. Hence $u_{q_0}(p)=u_{p_0}(p)-u_{p_0}(q_0)$, and for $D=\sum_pn_p[p]$ the two linear extensions differ by $\bigl(\sum_pn_p\bigr)u_{p_0}(q_0)=(\deg D)\,u_{p_0}(q_0)$; this vanishes when $\deg D=0$, proving base-point independence on $\operatorname{Div}^0(X)$. In nonzero degree the two base points give the same class exactly when $(\deg D)u_{p_0}(q_0)=0$, which allows torsion cancellation. [F7, step 2.2]

4.1 For $D_1=\sum_pn_p[p]$ and $D_2=\sum_pm_p[p]$ the linear extension satisfies $u_{p_0}(D_1+D_2)=\sum_p(n_p+m_p)u_{p_0}(p)=u_{p_0}(D_1)+u_{p_0}(D_2)$, and $u_{p_0}(0)=0$; combined with step 3.1 this makes $u:\operatorname{Div}^0(X)\to\operatorname{Jac}(X)$ a base-point-free group homomorphism. For the difference of two points, step 2.2 gives $u((q)-(p))=u_{p_0}(q)-u_{p_0}(p)=[\omega\mapsto\int_p^q\omega]$. If $g=0$, then [F1] with $\Omega(X)=0$ gives $\operatorname{Jac}(X)=0$ and all statements are trivial. [F1, F7, step 2.2, step 3.1] ∎


## Source notes

The construction is the standard integration of holomorphic differentials along paths, modulo the period lattice. Looijenga, *Riemann Surfaces*, Ch. 7 §2, Lemma 7.2 and Corollary 7.3 (printed pp. 60-61), computes $\tilde I_{\gamma'}-\tilde I_\gamma=e([\gamma*\gamma'])$ and extends the point map to $\operatorname{Div}^0(S)$; McMullen, *Riemann Surfaces*, Ch. 15 (printed p. 129), defines $\varphi$ and the point map $f(Q)=\varphi(Q-P)$; Forster, *Lectures on Riemann Surfaces*, §21.6 (printed pp. 170-171), defines the same map through chains and states that it is determined by $D$ up to the period lattice. The item proves the well-definedness, holomorphy and the addition rule from the local path-integral interface, which accepts the continuous paths used by the polygon side-loop model.

The original scaffold cited `def-complex-line-integral-over-a-rectifiable-path` and `def-complex-contours-reversal-concatenation-and-closedness` for $\int_\gamma\omega$; those interfaces concern plane contour integrals, while the integral here is taken on a Riemann surface along continuous paths. The direct dependency is now the local-primitive path integral `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface`, which supplies additivity, reversal and the holomorphy computations used above. The unused scaffold edge to `thm-riemann-bilinear-relations` was removed: only the quotient structure of the Jacobian, not the full-lattice property, enters the definition.
