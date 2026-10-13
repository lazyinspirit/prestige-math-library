---
id: pthm-em-electrostatic-bvp-uniqueness
kind: physics-theorem
title: "Uniqueness and flux compatibility for the electrostatic boundary value problem"
status: published
origin: session
dependency_level: 17
domain: physics
deps: [cor-classical-dirichlet-and-poisson-problems-are-unique, cor-neumann-solutions-are-unique-modulo-componentwise-constants, def-axiom-of-choice, def-bounded-c-k-domain-and-boundary-charts, def-classical-normal-derivative, def-countable-choice, def-em-electrostatic-regime, def-em-fields, def-em-si-conventions, def-fractional-sobolev-space-on-a-compact-c-one-boundary, def-laplacian-of-a-c2-function, lem-em-prescribed-fractional-dirichlet-existence, lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain, lem-em-weak-neumann-and-transmission-existence, lem-laplace-fundamental-solution-is-harmonic-off-its-pole, lem-neumann-compatibility-from-the-divergence-theorem, post-em-electrostatic-conductor-model, pthm-em-electrostatic-potential, thm-algebra-of-derivatives, thm-em-elliptic-boundary-existence, cor-first-green-identity-on-a-bounded-c-one-domain, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, thm-zero-derivative-on-connected-open-euclidean-set-iff-constant, lem-euclidean-balls-have-positive-finite-lebesgue-measure, lem-em-mean-zero-coercivity-on-a-c-one-domain]
dependency_roles:
  cor-classical-dirichlet-and-poisson-problems-are-unique: mathematical-premise
  cor-neumann-solutions-are-unique-modulo-componentwise-constants: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  def-classical-normal-derivative: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fractional-sobolev-space-on-a-compact-c-one-boundary: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  lem-laplace-fundamental-solution-is-harmonic-off-its-pole: mathematical-premise
  lem-neumann-compatibility-from-the-divergence-theorem: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  thm-zero-derivative-on-connected-open-euclidean-set-iff-constant: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  lem-em-prescribed-fractional-dirichlet-existence: mathematical-premise
  lem-em-weak-neumann-and-transmission-existence: mathematical-premise
  thm-em-elliptic-boundary-existence: mathematical-premise
  lem-em-mean-zero-coercivity-on-a-c-one-domain: mathematical-premise
  lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain: mathematical-premise
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  post-em-electrostatic-conductor-model: physical-assumption
  pthm-em-electrostatic-potential: physical-result
physical_scope: "Uniqueness for the classical and weak Dirichlet/Neumann electrostatic boundary value problems in a bounded vacuum region of a named inertial frame, with the componentwise Neumann freedom, the necessary flux compatibility, and the conductor-potential reading: identical complete Dirichlet data determine the potential and field exactly; compatible Neumann data determine the field and leave one potential constant per connected component until a normalization is fixed. The statement is conditional on the stated boundary, decay and regularity data and on the cited mathematical suppliers; it asserts no existence, no arbitrary-boundary solvability, no material interfaces beyond the declared sheet branch, and no empirical claim."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "Sections 3.1.5-3.1.6 printed pp. 116-121 (first and second uniqueness theorems, cavity corollary); Problem 3.4 on mixed boundary data."
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term 2015, 236 PDF pages)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "Section 2.4.2 printed pp. 33-35 (Dirichlet/Neumann boundary value problems, the uniqueness theorem with its divergence-identity proof, and the Green-identity uniqueness argument)."
    - title: "John K. Hunter, Notes on Partial Differential Equations (University of California, Davis, 2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.5 Theorems 2.23-2.24 printed p. 32 (Green identity, classical Dirichlet/Neumann uniqueness and the Neumann flux compatibility)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Choice and Countable Choice as declared by the cited weak-solvability and trace suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $\Omega_v\subset\mathbb R^3$ be a bounded $C^\infty$ domain with finitely many connected components (the vacuum region of the additional bounded $C^\infty$ ambient branch of [[post-em-electrostatic-conductor-model]] by [[lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain]], or any bounded smooth domain), let $\rho$ be continuous on $\overline{\Omega_v}$ (the fixed-time volume source density, C m$^{-3}$ of [[def-em-si-conventions]]), and let $\varphi_1,\varphi_2\in C^2(\overline{\Omega_v})$ be real potentials of the pure electrostatic regime [[def-em-electrostatic-regime]] with fields $E_i:=-\nabla\varphi_i$ of [[def-em-fields]] and

$$-\Delta\varphi_i=\rho/\varepsilon_0\qquad\text{pointwise on }\Omega_v,\qquad \Delta=\operatorname{div}\nabla.$$

The Laplacian convention is [[def-laplacian-of-a-c2-function]]. Let $\nu$ denote the outward unit normal of $\Omega_v$ ([[def-classical-normal-derivative]]). Then:

(a) [Classical Dirichlet uniqueness] if $\varphi_1=\varphi_2$ on $\partial\Omega_v$, then $\varphi_1=\varphi_2$ on $\overline{\Omega_v}$, and hence $E_1=E_2$. The conclusion holds component by component; each connected component of a bounded $C^\infty$ domain is again a bounded $C^\infty$ domain, to which the connected-domain uniqueness corollary applies.

(b) [Classical Neumann uniqueness and compatibility] if $\partial_\nu\varphi_1=\partial_\nu\varphi_2$ on $\partial\Omega_v$, then $\varphi_1-\varphi_2$ is constant on each connected component of $\Omega_v$, and conversely adding one real constant per component to a solution preserves both the equation and the Neumann data; hence the field $E$ is unique while the potential is determined only up to componentwise constants. Moreover the Neumann data are necessarily compatible:

$$\int_{\Omega_v^{(j)}}\rho\,dx+\varepsilon_0\int_{\partial\Omega_v^{(j)}}\partial_\nu\varphi\,dS=0\qquad\text{for every connected component }\Omega_v^{(j)}.$$

This compatibility is necessary, not sufficient, and is exactly the flux identity of the divergence theorem for the Poisson equation.

(c) [Weak variants] (i) if $g\in H^{1/2}(\partial\Omega_v)$ ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]) is prescribed as a trace and $\varphi_1,\varphi_2\in H^1(\Omega_v)$ are weak solutions of the Dirichlet problem with the same trace $g$, then $\varphi_1=\varphi_2$; (ii) if the conormal data are prescribed compatibly, weak $H^1$ solutions are unique modulo constants on each connected component, and for connected $\Omega_v$ this is the normalised solution of [[lem-em-weak-neumann-and-transmission-existence]]; (iii) [sheet/transmission variant] for the finite disjoint smooth interfaces and outer Dirichlet data of [[thm-em-elliptic-boundary-existence]](c), the globally $H^1$ solution is unique, and for compatible outer Neumann data it is unique modulo componentwise constants until the componentwise means are fixed.

(d) [Physics reading and conductor case] on a star-shaped vacuum domain the curl-free $C^1$ field has an interior $C^2$ potential by [[pthm-em-electrostatic-potential]]. This alone does not supply closure regularity, $H^1$ membership, a trace, or prescribed boundary data; each application of (a)-(c) additionally requires its stated regularity and identical boundary/source data. In the bounded conductor model, prescribed absolute conductor potentials $V_j$ and absolute outer Dirichlet data determine the potential and field uniquely in the admitted classical or weak class. Grounding fixes the additive constant exactly. If only relative potential differences are prescribed and the outer/reference data are also allowed to shift by the same constant, the common gauge constant is free; merely omitting outer boundary data does not establish field uniqueness.

(e) [Scope] uniqueness is conditional on the stated boundary or decay data: on an unbounded exterior region without a decay condition uniqueness fails: on $\Omega_R=\{x:|x|>R\}$ the functions $0$ and $u(x)=1-R/|x|$ are two distinct bounded harmonic functions with the same zero boundary trace and different limits at infinity, so the boundary, decay and regularity hypotheses above cannot be dropped. No existence is inferred from uniqueness; the classical branch requires $C^2$ up to the closure, the weak branches carry their own domain, coefficient and trace hypotheses, and no dielectric material coefficient or empirical claim is included. For the admitted conductor class with connected vacuum, fixed absolute conductor potentials and identical outer Neumann data also give exact uniqueness: this is a mixed boundary problem with a nonempty Dirichlet part, so there is no surviving additive constant. Existence for those mixed data is not asserted here. In that weak mixed branch, write $\mathcal V_D=\{v\in H^1(\Omega_v):Tv=0\text{ on }\partial D\}$. The compared potentials have the same prescribed conductor trace and satisfy $\varepsilon_0\int_{\Omega_v}\nabla v\cdot\nabla\varphi=\int_{\Omega_v}\rho v+\varepsilon_0\int_{\partial\Omega}g\,Tv$ for every $v\in\mathcal V_D$, with the same smooth outer normal datum $g$.

## Facts & Assumptions


**Given:** A bounded $C^\infty$ domain $\Omega_v$ with finitely many connected components, a continuous $\rho$ on $\overline{\Omega_v}$, classical potentials $\varphi_i\in C^2(\overline{\Omega_v})$ with $-\Delta\varphi_i=\rho/\varepsilon_0$ on $\Omega_v$ and fields $E_i=-\nabla\varphi_i$, all in the pure electrostatic regime with the SI constants of [[def-em-si-conventions]].

[F1] Classical Dirichlet and Neumann uniqueness and flux compatibility: for a bounded connected $C^1$ domain with $u_1,u_2\in C^2(\overline\Omega)$, equal $-\Delta u_i$ and equal Dirichlet traces imply $u_1=u_2$ on the closure; equal $-\Delta u_i$ and equal outward normal derivatives imply $u_1-u_2$ constant; and for a solution $-\Delta u=f$, $\partial_\nu u=g$ one necessarily has $\int_\Omega f=-\int_{\partial\Omega}g\,dS$ ([[cor-classical-dirichlet-and-poisson-problems-are-unique]], [[lem-neumann-compatibility-from-the-divergence-theorem]]).

[F2] Componentwise Neumann uniqueness: if a bounded $C^1$ domain has finitely many connected components and $u,v\in C^2(\overline\Omega)$ solve the same Poisson equation with the same outward normal derivative on $\partial\Omega$, then $u-v$ is constant on each connected component ([[cor-neumann-solutions-are-unique-modulo-componentwise-constants]]).

[F3] Components of a bounded smooth domain are again bounded smooth domains: each connected component $U$ of $\Omega_v$ is an open bounded $C^k$ domain and its boundary is a union of compact pieces of $\partial\Omega_v$ ([[lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain]](d)); adding constants preserves the Poisson equation and the normal derivative ([[def-laplacian-of-a-c2-function]], [[thm-algebra-of-derivatives]], [[def-classical-normal-derivative]]).

[F4] Weak Dirichlet uniqueness with prescribed trace: for a bounded $C^1$ domain and prescribed $g\in H^{1/2}(\partial\Omega)$ there is exactly one $u\in H^1(\Omega)$ with trace $g$ solving the weak Dirichlet problem; in particular two weak solutions with the same trace and data coincide ([[lem-em-prescribed-fractional-dirichlet-existence]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]).

[F5] Weak Neumann existence and uniqueness: a weak Neumann solution with data $\ell$ exists exactly when $\ell(1)=0$ and is then unique up to an additive constant, the normalisation $\int_\Omega u=0$ making it unique; on finitely many components both conditions are imposed per component; the transmission problem with sheet charge has the same uniqueness structure ([[lem-em-weak-neumann-and-transmission-existence]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]).

[F6] Combined elliptic boundary existence and uniqueness: outer Dirichlet data give a globally $H^1$ transmission solution that is unique; compatible outer Neumann data give existence and uniqueness modulo componentwise constants, with zero componentwise means giving uniqueness; the smooth branch is $C^\infty$ on each closed side ([[thm-em-elliptic-boundary-existence]](a)-(c)).

[F7] On a star-shaped open set a curl-free $C^1$ field $-E$ has an interior $C^2$ potential $\varphi$ with $\nabla\varphi=-E$ and $-\Delta\varphi=\operatorname{div}E$; no boundary regularity or normalisation at infinity is supplied ([[pthm-em-electrostatic-potential]]).

[F8] The $n=3$ fundamental solution $\Phi(z)=1/(4\pi|z|)$ is smooth and harmonic off its pole, and constant multiples and sums of $C^2$ functions with zero Laplacian have zero Laplacian; the radius function satisfies $\Delta(1)=0$ and $\Delta(R/|x|)=0$ on $|x|>0$ ([[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]], [[def-laplacian-of-a-c2-function]], [[thm-algebra-of-derivatives]]).

[F9] Green's first identity on a bounded $C^1$ domain: $\int_\Omega|\nabla w|^2=\int_{\partial\Omega}w\,\partial_\nu w\,dS$ for harmonic $w\in C^2(\overline\Omega)$ with the outward normal $\nu$; the nonnegative integral of $|\nabla w|^2$ vanishes exactly when $\nabla w=0$ almost everywhere; a totally differentiable function on a connected open set with vanishing differential is constant ([[cor-first-green-identity-on-a-bounded-c-one-domain]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]]).

[F10] AC and AC$_\omega$ are declared mathematical assumptions of the cited weak-solvability, trace and measure suppliers ([[def-axiom-of-choice]], [[def-countable-choice]]); $\varepsilon_0>0$ and $\Omega_v$, $\rho$, $\varphi_i$, $E_i$ are the objects of [[def-em-si-conventions]], [[def-em-electrostatic-regime]] and [[def-em-fields]]; the conductor model supplies the bounded smooth ambient branch and its connectedness requirement ([[post-em-electrostatic-conductor-model]]), and the mean-zero coercivity inequality is available on each connected bounded component ([[lem-em-mean-zero-coercivity-on-a-c-one-domain]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

## Proof

**Proof technique:** direct.

1.1 Classical Dirichlet uniqueness. Let $U$ be a connected component of $\Omega_v$. By [F3] $U$ is a bounded connected $C^1$ domain with $\overline U\subseteq\overline{\Omega_v}$ and the restrictions $\varphi_i|_{\overline U}\in C^2(\overline U)$ satisfy $-\Delta(\varphi_i|_U)=\rho/\varepsilon_0$ there, with equal traces on $\partial U$ when $\varphi_1=\varphi_2$ on $\partial\Omega_v$. By [F1] claim 1 applied on $U$, $\varphi_1=\varphi_2$ on $\overline U$; as $U$ was an arbitrary component, $\varphi_1=\varphi_2$ on all of $\overline{\Omega_v}$, and then $E_1=-\nabla\varphi_1=-\nabla\varphi_2=E_2$ by [F3]. This is (a). [F1, F3, given]

1.2 Classical Neumann uniqueness. Assume $\partial_\nu\varphi_1=\partial_\nu\varphi_2$ on $\partial\Omega_v$. Applying [F2] to the bounded $C^1$ domain $\Omega_v$ with its finitely many components gives that $\varphi_1-\varphi_2$ is constant on each component. Conversely, if $u$ solves the equation and $c_j$ is a constant on each component that is added to $u$, then $\Delta(u+c_j)=\Delta u$ and $\partial_\nu(u+c_j)=\partial_\nu u$ because the gradient of a constant vanishes [F3], so the equation and the Neumann data are preserved; hence the field $E=-\nabla u$ is unique while the potential is determined only up to componentwise constants. This is the uniqueness half of (b). [F2, F3, given]

1.3 Weak variants. Clause (c)(i) is the uniqueness content of [F4]: two weak $H^1$ Dirichlet solutions with the same prescribed trace and the same right-hand side coincide. Clause (c)(ii) is the uniqueness-modulo-constants and normalisation clause of [F5], with the trace space of [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]; the componentwise statement is the same clause on each component. Clause (c)(iii) is the uniqueness clause of [F6](c): outer Dirichlet data give a unique globally $H^1$ transmission solution, and compatible outer Neumann data give uniqueness modulo componentwise constants, fixed by zero means. This is (c). [F4, F5, F6, given]

1.4 Physics reading. On a star-shaped vacuum domain, [F7] supplies an interior $C^2$ potential for a curl-free $C^1$ field and nothing more: closure regularity, $H^1$ membership, a trace and boundary data are additional hypotheses, exactly as assumed in (a)-(c). For the bounded conductor model with its connected vacuum region [F10], fixed absolute conductor potentials and identical outer Dirichlet data are the Dirichlet data of (a) or (c)(i), so the difference of two admitted solutions has zero boundary data and is zero by the same uniqueness clause; grounding fixes the additive constant, while shifting both a relative-potential datum and every reference datum by a common constant leaves the difference of two solutions with the same data and hence with the same (fixed) uniqueness conclusion only for identical data — omitting outer data supplies no field uniqueness. This is (d). [F7, F10, given]

2.1 Neumann flux compatibility. Let $U$ be a connected component of $\Omega_v$, with outward normal $\nu$ and boundary $\partial U$ a union of compact pieces of $\partial\Omega_v$ [F3]. Applying [F1] claim 3 (equivalently [[lem-neumann-compatibility-from-the-divergence-theorem]]) to $u=\varphi|_{U}$ with $f=-\Delta\varphi=\rho/\varepsilon_0$ and $g=\partial_\nu\varphi$ gives $\int_U\rho/\varepsilon_0=-\int_{\partial U}\partial_\nu\varphi\,dS$, that is $\int_U\rho+\varepsilon_0\int_{\partial U}\partial_\nu\varphi\,dS=0$, the displayed identity for the component; no solvability is inferred from it. This completes (b). [F1, F3, given, step 1.2]

2.2 Mixed conductor data. Suppose the vacuum region is connected, $m\ge1$, $w$ is the difference of two admitted classical solutions with equal absolute conductor potentials and equal outer Neumann data. Then $w$ is harmonic, $w=0$ on the nonempty conductor boundary $\partial D$ and $\partial_\nu w=0$ on the outer boundary $\partial\Omega$. Green's first identity [F9] gives $\int_{\Omega_v}|\nabla w|^2=\int_{\partial\Omega_v}w\,\partial_\nu w\,dS$, and each boundary piece carries one zero factor, so the integral vanishes; by [F9], $\nabla w=0$ almost everywhere, and since $\nabla w$ is continuous on the connected open $\Omega_v$ it vanishes everywhere, so $w$ is constant by the vanishing-differential characterisation; its zero conductor trace forces the constant to be $0$. In the weak mixed branch, the difference of two admitted solutions has zero conductor trace, so it is an admissible test in the homogeneous difference equation and the same zero-energy argument applies, with the mean-zero coercivity inequality of [F10] converting $\nabla w=0$ into $w=w_{\Omega_v}$ as an $H^1$ class whose constant trace on the nonempty conductor boundary is zero. This sharpens (d); existence for mixed data remains unasserted. [F9, F10, given, step 1.4]

3.1 The unbounded witness and scope. On $\Omega_R=\{x:|x|>R\}$ put $u(x):=1-R/|x|$, and take the comparison potential $\varphi\equiv0$. Then $u\in C^\infty(\Omega_R)$; since $R/|x|=4\pi R\,\Phi(x)$ is a constant multiple of the $n=3$ fundamental solution, it is harmonic off the origin [F8], and the constant $1$ has zero Laplacian, so $\Delta u=0$; moreover $u=0$ on $|x|=R$, $0<u<1$ on $\Omega_R$ and $u(x)\to1$ as $|x|\to\infty$. Thus $0$ and $u$ are two distinct bounded harmonic functions with the same zero boundary trace and different limits at infinity, witnessing that the boundary and decay hypotheses of (a)-(c) cannot be dropped. No existence statement is inferred from uniqueness anywhere above; the classical branch requires $C^2$ up to the closure, the weak branches carry their own domain, coefficient and trace hypotheses, and no dielectric coefficient, empirical value or measurement is included. This is (e). [F8, given] ∎
