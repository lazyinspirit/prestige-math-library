---
id: lem-abel-jacobi-map-is-well-defined-and-base-point-independent
kind: lemma
title: The Abel-Jacobi map is well defined and its degree-zero extension is base-point independent
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 22
deps:
  - cor-complex-analytic-functions-have-local-primitives
  - def-abel-jacobi-map
  - def-axiom-of-choice
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
      locator: "Ch. 7 §2, the computation $\\tilde I_{\\gamma'}-\\tilde I_\\gamma=e([\\gamma*\\gamma'])$ and Lemma 7.2 (holomorphy of $q\\mapsto I^q_o$), printed p. 60."
    - title: "Karl Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "http://ronan.terpereau.perso.math.cnrs.fr/Master_Class_2023_Dijon/FORSTER_Lectures%20on%20Riemann%20Surfaces.pdf"
      locator: "Ch. 2 §21.6, printed pp. 170-171: $\\Phi(D)$ is determined by $D$ up to a period and is a group homomorphism; the local Jacobi map of Theorem 21.4(a)."
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, the Abel-Jacobi map and point map, and $D\\varphi_P(Q)=(\\omega_1(Q),\\dots,\\omega_g(Q))$, printed pp. 129-130."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
Jacobian definition. Let $X$ be a compact connected Riemann surface, let
$p_0\in X$ and let $u=u_{p_0}:X\to\operatorname{Jac}(X)$ be the Abel-Jacobi map
of [[def-abel-jacobi-map]]. Then:

1. **Path independence.** For any two paths $\gamma,\gamma'$ from $p_0$ to $p$
the functionals $\omega\mapsto\int_\gamma\omega$ and
$\omega\mapsto\int_{\gamma'}\omega$ differ by an element of the period lattice
$\Lambda$, namely by $P([\gamma*\gamma'^{-1}],\cdot)=e([\gamma*\gamma'^{-1}])$,
with $*$ concatenation and $\gamma'^{-1}$ the reversal
([[def-period-pairing-and-period-lattice]],
[[lem-period-pairing-is-well-defined-and-computed-by-integration]]). Hence $u$
is well defined.
2. **Derivative.** $u$ is holomorphic in the atlas of the Jacobian definition;
in a holomorphic chart $z$ at $p$ and a holomorphic lift $\xi$ of $u$ near $p$,
the derivative of $\xi$ at $z(p)$ is the linear map
$$\mathbb C\longrightarrow\mathbb C^g\cong\Omega(X)^*,\qquad 1\longmapsto\bigl(\omega_1(\partial_z),\ldots,\omega_g(\partial_z)\bigr),$$
where $\omega_1,\ldots,\omega_g$ is the basis of $\Omega(X)$ used by the Jacobian
definition and $\omega_i(\partial_z)$ is the local coefficient of $\omega_i$ in
the chart $z$. This derivative is nonzero (equivalently, injective) if and only
if some holomorphic differential does not vanish at $p$
([[cor-complex-analytic-functions-have-local-primitives]]).
3. **Base-point independence and additivity on degree zero.** For degree-zero
divisors $D=\sum_pn_p[p]$ the class
$\sum_pn_p\,u_{p_0}(p)$ is independent of $p_0$, and
$u:\operatorname{Div}^0(X)\to\operatorname{Jac}(X)$ is a group homomorphism.
Moreover $u((q)-(p))+u((r)-(q))=u((r)-(p))$ for all $p,q,r\in X$, and
$u(D_1+D_2)=u(D_1)+u(D_2)$ for degree-zero divisors $D_1,D_2$
([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).
4. **Cocycle form.** For each $\omega\in\Omega(X)$ the function
$x\mapsto u(x)(\omega)$ is locally a primitive of $\omega$, in the sense that
near each point it coincides with a local primitive of $\omega$ up to an additive
constant modulo $\Lambda_\omega$, where $\Lambda_\omega\subseteq\mathbb C$ is
the image of $\Lambda$ under evaluation at $\omega$. Consequently, along any
path $\gamma$ from $p$ to $q$,
$$u(q)(\omega)-u(p)(\omega)=\int_\gamma\omega \quad\text{in }\mathbb C/\Lambda_\omega .$$

## Facts & Assumptions

**Given:** Full AC, a compact connected Riemann surface $X$ of genus $g$, the Jacobian $\operatorname{Jac}(X)=\Omega(X)^*/\Lambda$, a base point $p_0\in X$, and the map $u=u_{p_0}$ with its divisor extension.

[F1] For a path $\gamma$ from $p_0$ to $p$ the point class is $u_{p_0}(p)=[\omega\mapsto\int_\gamma\omega]\in\operatorname{Jac}(X)$, this class is independent of $\gamma$, and $u$ is holomorphic in the explicit chart sense of the definition ([[def-abel-jacobi-map]], [[def-jacobian-of-a-compact-riemann-surface]]).

[F2] $u$ satisfies the addition rule $u_{p_0}(q)-u_{p_0}(p)=[\omega\mapsto\int_p^q\omega]$; its linear extension to divisors is base-point independent on $\operatorname{Div}^0(X)$, is a group homomorphism there, and satisfies $u((q)-(p))=[\omega\mapsto\int_p^q\omega]$ ([[def-abel-jacobi-map]], [[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F3] The period pairing and homomorphism are $e(\gamma)(\omega)=P(\gamma,\omega)$ and $\Lambda=e(H_1(X;\mathbb Z))$; for $g\ge1$ a basis $\omega_1,\ldots,\omega_g$ of $\Omega(X)$ is fixed ([[def-period-pairing-and-period-lattice]], [[def-jacobian-of-a-compact-riemann-surface]]).

[F4] For every $\gamma\in H_1(X;\mathbb Z)$ and every continuous singular cycle $c$ representing $\gamma$, $P(\gamma,\omega)=\int_c\omega$ for all $\omega\in\Omega(X)$ ([[lem-period-pairing-is-well-defined-and-computed-by-integration]]).

[F5] The path integral of a holomorphic differential is additive under concatenation, changes sign under reversal, and is $\mathbb C$-linear in the differential; on a simply connected coordinate disk a holomorphic differential $\omega=h(z)\,dz$ has a holomorphic primitive $H$ with $H'=h$ ([[def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface]], [[def-meromorphic-differential-on-a-riemann-surface]]).

[F6] A map into $\mathbb C^g$ is holomorphic exactly when its components are holomorphic, and holomorphic functions are differentiable with the derivative computed in coordinates ([[def-holomorphic-map-and-complex-jacobian]], [[thm-componentwise-holomorphy-in-several-complex-variables]], [[cor-complex-analytic-functions-have-local-primitives]]).

[F7] Divisors on compact $X$ have finite support and their degree is the sum of the coefficients, $\deg D:=\sum_pD(p)$; hence degrees add and the divisors of degree zero form a subgroup ([[def-divisor-principal-and-canonical-divisor-riemann-surface]]).

[F8] Full AC is inherited from the Jacobian definition, which uses it to select the bases of [F3]; no additional arbitrary selection is made here ([[def-axiom-of-choice]], [[def-jacobian-of-a-compact-riemann-surface]]).

## Proof

**Proof technique:** direct.

1.1 Let $p\in X$ and let $\gamma,\gamma'$ be paths from $p_0$ to $p$. By [F5], $\int_\gamma\omega-\int_{\gamma'}\omega=\int_{\gamma*\gamma'^{-1}}\omega$ for every $\omega\in\Omega(X)$, and the closed curve $\gamma*\gamma'^{-1}$ is a continuous singular cycle with class $\delta\in H_1(X;\mathbb Z)$. By [F4] and [F3], the right-hand side equals $P(\delta,\omega)=e(\delta)(\omega)$, an element of $\Lambda$ as a functional. Hence the two functionals differ by $e(\delta)=P(\delta,\cdot)\in\Lambda$, and by [F1] they define the same class $u(p)$; this is clause 1. [F1, F3, F4, F5]

1.2 Fix $p\in X$ and a holomorphic chart $z:U\to D$ at $p$ with $z(p)=0$. Write $\omega_i=h_i(z)\,dz$ on $U$ and let $H_i$ be the holomorphic primitive of $h_i$ on $D$ with $H_i(0)=0$, which exists by [F5]. Fixing a path from $p_0$ to $p$, the same concatenation argument as [F1] shows that the lift $\xi(x)=\xi_0+(H_1(z(x)),\ldots,H_g(z(x)))$, where $\xi_0$ is the functional of the fixed path from $p_0$ to $p$, satisfies $\pi\circ\xi=u$ on $U$. Each component is holomorphic, so $\xi$ is holomorphic by [F6], and its derivative at $0$ is $DH_i(0)=h_i(0)=\omega_i(\partial_z)$, giving the displayed linear map $\mathbb C\to\mathbb C^g$. This map is zero exactly when $h_i(0)=0$ for all $i$, i.e. when every holomorphic differential vanishes at $p$, since the $\omega_i$ are a basis. This is clause 2. [F1, F3, F5, F6]

1.3 Let $q_0\in X$ be a second base point and $D=\sum_pn_p[p]$. By the addition rule of [F2], $u_{p_0}(p)-u_{p_0}(q_0)=[\omega\mapsto\int_{q_0}^p\omega]=u_{q_0}(p)$ for every $p$, so $u_{q_0}(p)=u_{p_0}(p)-u_{p_0}(q_0)$; summing with coefficients $n_p$ shows that the two linear extensions differ by $(\deg D)u_{p_0}(q_0)$, which is zero when $\deg D=0$. For $D_1,D_2\in\operatorname{Div}^0(X)$ the linear extension satisfies $u(D_1+D_2)=u(D_1)+u(D_2)$ because finite sums in an abelian group add, and $u((q)-(p))=u(q)-u(p)$ for all $p,q\in X$. This is clause 3. [F2, F7]

1.4 Fix $\omega\in\Omega(X)$ and a chart $z:U\to D$ at a point $p$ with local primitive $H$ of the coefficient of $\omega$, so $H'=h$ and $\omega=h\,dz$ on $U$. For $x\in U$ the class $u(x)$ is represented by the functional $\omega\mapsto\int_{p_0}^x\omega$, which by [F5] differs from $H(z(x))$ by an additive constant. Hence $x\mapsto u(x)(\omega)$ is, modulo the constant and modulo $\Lambda_\omega$, the primitive $H$; and along a path $\gamma$ from $p$ to $q$ contained in $U$ the increment $u(q)(\omega)-u(p)(\omega)$ equals $H(z(q))-H(z(p))=\int_\gamma\omega$ in $\mathbb C/\Lambda_\omega$. For a general path subdivide it into finitely many chart pieces, on each of which the increment equals the corresponding path integral; the increments telescope and give the same identity. This is clause 4. [F1, F2, F5]

2.1 By steps 1.1, 1.3 and 1.4, respectively, the map is well defined, its divisor extension on $\operatorname{Div}^0(X)$ is base-point free and additive, and each evaluation $x\mapsto u(x)(\omega)$ is locally a primitive; together with the derivative computation of step 1.2 this proves all four clauses under the inherited full AC of [F8]. In particular $u((q)-(p))+u((r)-(q))=u((r)-(p))$ follows by applying the homomorphism property of step 1.3 to $(q)-(p)+(r)-(q)=(r)-(p)$, and $u(D_1+D_2)=u(D_1)+u(D_2)$ is the additivity just recalled. [F2, F7, F8, step 1.1, step 1.2, step 1.3, step 1.4] ∎


## Source notes

Clause 1 is Looijenga's computation
$\tilde I_{\gamma'}-\tilde I_\gamma=e([\gamma*\gamma'])$ in *Riemann
Surfaces*, Ch. 7 §2 (printed p. 60); clause 2 is the holomorphy of the point map
in Lemma 7.2 there and the derivative formula
$D\varphi_P(Q)=(\omega_1(Q),\ldots,\omega_g(Q))$ in McMullen, *Riemann
Surfaces*, Ch. 15 (printed pp. 129-130); clause 3 is Forster, *Lectures on
Riemann Surfaces*, §21.6 (printed pp. 170-171), where $\Phi$ is determined by
$D$ up to a period and is a homomorphism; clause 4 is the local read-off of the
path integral from a chart primitive. The item proves the four clauses from the
definition's explicit chart construction and the local-primitive interface, so
the topological side-loop representatives may be integrated without smoothness
assumptions.

The scaffold's direct edge to
`prop-reversal-and-concatenation-of-complex-line-integrals` was removed: the
reversal and concatenation identities used here are those of the Riemann-surface
path integral in `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface`,
and the plane contour identities are not invoked.
