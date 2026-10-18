---
id: thm-pe12-monotone-fem-limit
kind: theorem
title: Conditional monotone finite-element convergence
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-pe12-gelfand-triple, def-pe12-monotone-diffusion-flux, def-pe12-stable-conforming-fem-family, lem-pe12-w1p-compact-l2-embedding, lem-pe12-evolution-energy-chain-rule, thm-pe12-discrete-aubin-lions-compactness, thm-pe12-backward-euler-galerkin-existence-energy, lem-pe12-space-time-gradient-weak-compactness, lem-pe12-minty-identification, lem-pe12-bochner-lp-mollification, lem-parabolic-discrete-energy-identity, thm-reflexivity-of-lp-for-one-less-p-less-infinity, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, def-reflexive-banach-space, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, def-countable-choice, lem-dependent-choice-implies-countable-choice, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, thm-ultrafilter-lemma, thm-hahn-banach-dominated-extension, def-hilbert-space, thm-holder-inequality-for-integrals, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-pe12-l2-projector-w1p-stability]
verification:
  precheck: pass
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Marvin Fritz, Monotone Operators in Nonlinear PDEs, JKU lecture notes, WS 2023/2024
      url: https://numa.jku.at/media/filer_public/ff/80/ff80a871-94c4-4785-8314-028a46d185ed/lecturenotes.pdf
      locator: §9, evolution equation and Galerkin convergence; §0, Minty trick; Theorem 8.8, compactness, PDF pp. 33–43.
    - title: Tomáš Roubíček, Nonlinear Partial Differential Equations with Applications, 2nd ed., Birkhäuser, 2005
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/M/MC/MCde/Roubicek%20T.%20Nonlinear%20partial%20differential%20equations%20with%20applications%20%282ed.%2C%202005%29%28ISBN%209783034805124%29%28O%29%28457s%29_MCde_.pdf
      locator: §7.2, evolution energy identity; §7.3, Lemma 7.7 and proof, printed pp. 205–210.
    - title: Christian Clason, Introduction to Finite Element Methods, lecture notes, arXiv:1709.08618v2
      url: https://arxiv.org/pdf/1709.08618v2.pdf
      locator: Chapters 11–12, evolution triples, backward Euler and Galerkin approximation, PDF pp. 96–108.
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, Springer Universitext, 2011
      url: https://www.math.toronto.edu/almut/Brezis.pdf
      locator: Theorem 5.16, Minty–Browder identification, PDF p. 159 (printed p. 145).
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, let $\Omega\subset\mathbb R^d$ be
a bounded open set, let $1<p<\infty$ satisfy
$p>\max(1,2d/(d+2))$, and let $T>0$. Let $V=W_0^{1,p}(\Omega;\mathbb R)$
with gradient norm, $H=L^2(\Omega;\mathbb R)$, and let
$a(x,\xi)$ satisfy [[def-pe12-monotone-diffusion-flux]], including the
norm-continuity of its induced operator $A:V\to V^*$. Assume an admissible
stable conforming FEM sequence $(V_k,\Pi_k,\mathcal P_k)$ from
[[def-pe12-stable-conforming-fem-family]]. For $f\in L^{p'}(0,T;V^*)$ and
$u_0\in H$, set $f_k^n=|I_k^n|^{-1}\int_{I_k^n}f$ and $U_k^0=\Pi_ku_0$.
For each $k$, let $(U_k^n)$ be any solution of the backward Euler equations
in [[thm-pe12-backward-euler-galerkin-existence-energy]].

There are a subsequence, still indexed by $k$, and a unique
$u\in L^p(0,T;V)\cap L^\infty(0,T;H)\cap C([0,T];H)$ such that
$$\overline U_k\to u\quad\text{strongly in }L^r(0,T;H) \text{ for every }1\le r<\infty,\qquad \overline U_k\rightharpoonup u\text{ in }L^p(0,T;V),$$
the fluxes $a(x,\nabla\overline U_k)$ converge weakly in
$L^{p'}((0,T)\times\Omega;\mathbb R^d)$ to $a(x,\nabla u)$, and
$$u'+A(u)=f\quad\text{in }L^{p'}(0,T;V^*),\qquad u(0)=u_0.$$
Existence of each discrete solution and uniform energy bounds are included
in [[thm-pe12-backward-euler-galerkin-existence-energy]]. The abstract
convergence claim is conditional on the FEM projector clauses. For
$\Omega=(0,1)$ in $d=1$ and $\Omega=(0,1)^d$ in each $d\ge2$, the explicit
fixed-degree interval and Kuhn/Freudenthal simplex families of
[[thm-pe12-l2-projector-w1p-stability]] verify those clauses for any
independent time partitions with vanishing maximum step. These are concrete
nonempty instances of the theorem on the full approved strict $p$ range.

## Facts & Assumptions

**Given:** The Axiom of Choice; the stated domain, exponents, flux,
projectors, partitions, load and initial datum; and a sequence of discrete
solutions.

[F1] The strict threshold gives the dense compact inclusion
$W_0^{1,p}(\Omega)\Subset L^2(\Omega)$, and the flux definition fixes
$V,H,V^*$ and the canonical pairings
([[lem-pe12-w1p-compact-l2-embedding]],
[[def-pe12-monotone-diffusion-flux]],
[[def-pe12-gelfand-triple]]).

[F2] The FEM sequence has $H$-orthogonal projections bounded uniformly
$V\to V$, converging strongly to the identity on $V$, with maximum time
step tending to zero
([[def-pe12-stable-conforming-fem-family]]).

[F3] The nonlinear backward Euler equations have solutions and those
solutions have uniform $L^p(V)$, $L^\infty(H)$, and $L^{p'}(V^*)$ discrete
derivative bounds ([[thm-pe12-backward-euler-galerkin-existence-energy]]).

[F4] Bochner interval averages on partitions with vanishing maximum cell
length converge strongly to the load in $L^{p'}(0,T;V^*)$
([[lem-pe12-bochner-lp-mollification]]).

[F5] The piecewise-constant reconstructions with these bounds are relatively
compact in $L^p(0,T;H)$; a uniform $L^\infty(H)$ bound upgrades the same
subsequence to every finite $L^r(H)$
([[thm-pe12-discrete-aubin-lions-compactness]]).

[F6] A sequence bounded in $L^p(0,T;W_0^{1,p})$ and convergent strongly in
$L^p(0,T;H)$ has a subsequence weakly convergent in the Bochner Sobolev space,
with its space-time gradients weakly convergent
([[lem-pe12-space-time-gradient-weak-compactness]]).

[F7] Scalar real $L^{p'}$ is reflexive, and under the ultrafilter lemma,
Dependent Choice and Hahn–Banach, bounded sequences in reflexive Banach
spaces have weakly convergent subsequences
([[thm-reflexivity-of-lp-for-one-less-p-less-infinity]],
[[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]],
[[def-reflexive-banach-space]]).

[F8] Functions in $L^p(V)$ whose derivative is in $L^{p'}(V^*)$ and which
are bounded in $L^\infty(H)$ have a continuous $H$ representative and obey
the integrated energy identity
([[lem-pe12-evolution-energy-chain-rule]]).

[F9] If the weak gradient limit and weak flux limit satisfy the Minty limsup
inequality, monotonicity and the growth bound identify the flux as
$a(x,\nabla u)$ almost everywhere
([[lem-pe12-minty-identification]],
[[def-pe12-monotone-diffusion-flux]]).

[F10] The Hilbert discrete energy identity is
$2(x-y,x)=\|x\|^2-\|y\|^2+\|x-y\|^2$
([[lem-parabolic-discrete-energy-identity]],
[[def-hilbert-space]]).

[F11] Hölder makes the variational pairings of $L^{p'}(V^*)$ and $L^p(V)$
integrable ([[thm-holder-inequality-for-integrals]]).

[F12] A scalar $W^{1,1}(0,T)$ class has an absolutely continuous
representative on $[0,T]$, so its integration-by-parts formula includes the
endpoint values
([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]).

[F13] The fixed-degree zero-boundary Lagrange spaces on the uniform Kuhn
meshes of $(0,1)^d$, $d\ge2$, and on uniform interval partitions of $(0,1)$,
$d=1$, have $L^2$ projectors uniformly bounded on $W_0^{1,p}$ and converging
strongly there for every $1<p<\infty$; the same projections converge strongly
on $L^2$ ([[thm-pe12-l2-projector-w1p-stability]]).

[A1] Axiom of Choice supplies Countable and Dependent Choice, the ultrafilter
lemma and Hahn–Banach through the cited choice interfaces; these are used in
compact Sobolev embedding and weak subsequence extraction
([[def-axiom-of-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]],
[[thm-ultrafilter-lemma]],
[[thm-hahn-banach-dominated-extension]],
[[def-countable-choice]], [[def-dependent-choice]],
[[def-ultrafilter-extension-principle]],
[[def-hahn-banach-extension-principle-relative]]).

## Proof

1.1 The orthogonal projections are contractions on $H$, and for any $v\in V$, $\Pi_kv\to v$ in $V$ and hence in $H$. Given $u_0\in H$, choose $v\in V$ close to $u_0$ using density in [F1]. Then $$\|\Pi_ku_0-u_0\|_H \le2\|u_0-v\|_H+\|\Pi_kv-v\|_H\to2\|u_0-v\|_H.$$ Letting $v$ approach $u_0$ proves $\Pi_ku_0\to u_0$ in $H$. Also [F4] gives $f_k\to f$ strongly in $L^{p'}(V^*)$ for the piecewise-constant averages $f_k(t)=f_k^n$ on $I_k^n$. [F1, F2, F4, given, algebra]

1.2 By [F3], the reconstructions $\overline U_k$ are uniformly bounded in $L^p(V)$ and $L^\infty(H)$, and their discrete derivatives $D_k$ are uniformly bounded in $L^{p'}(V^*)$. The maximum partition step tends to zero, so [F5] gives a subsequence converging strongly in $L^p(H)$ and, by the $L^\infty(H)$ bound, in every finite $L^r(H)$. Applying [F6] to this subsequence gives a further subsequence and $u\in L^p(V)$ such that $\overline U_k\rightharpoonup u$ in $L^p(V)$, its image in $L^p(H)$ is the strong limit, and $\nabla\overline U_k\rightharpoonup\nabla u$ in $L^p(Q;\mathbb R^d)$. [A1, F3, F5, F6, given]

1.3 If $u$ and $\widetilde u$ are two solutions with the same data, their difference $w=u-\widetilde u$ has zero initial value and satisfies $w'+A(u)-A(\widetilde u)=0$. By [F8], for every $t$, $$\frac12\|w(t)\|_H^2+ \int_0^t\langle A(u)-A(\widetilde u),w\rangle=0.$$ Pointwise monotonicity in [F1] makes the integral nonnegative, so $w(t)=0$ for every $t$. This proves uniqueness in the abstract conclusion. [F1, F8, given, algebra]

2.1 Put $q_k(t,x)=a(x,\nabla\overline U_k(t,x))$. Measurability and the growth hypothesis [F1] give $$\|q_k\|_{L^{p'}(Q)} \le C\bigl(T^{1/p'}\|g\|_{L^{p'}(\Omega)} +\|\nabla\overline U_k\|_{L^p(Q)}^{p-1}\bigr),$$ so $(q_k)$ is bounded in vector-valued $L^{p'}(Q)$. Each of its $d$ coordinates is bounded in scalar $L^{p'}(Q)$ and hence has a weakly convergent subsequence by [F7]. Successive extraction over the finite coordinate set gives one subsequence weakly convergent in every coordinate; restriction of any bounded functional on the finite product to its coordinate embeddings shows weak convergence of the vector fields. Write the limit as $q\in L^{p'}(Q;\mathbb R^d)$. [A1, F1, F7, step 1.2, algebra]

3.1 For each fixed $v\in V$ and $\phi\in C_c^\infty(0,T)$, integrate the discrete equation against $\phi$ and test with $\Pi_kv$. If $\widehat U_k$ is the piecewise-affine reconstruction, integration by parts gives $$-\int_0^T(\widehat U_k,\Pi_kv)_H\phi' +\int_Q q_k\cdot\nabla\Pi_kv\,\phi =\int_0^T\langle f_k,\Pi_kv\rangle\phi.$$ On each cell, $\|\widehat U_k-\overline U_k\|_{V^*}\le\tau_k^n\|D_k\|_{V^*}$, hence $$\|\widehat U_k-\overline U_k\|_{L^{p'}(0,T;V^*)} \le\delta_k\|D_k\|_{L^{p'}(0,T;V^*)}\to0.$$ Now [F2] gives $\Pi_kv\to v$ in $V$; steps 1.2 and 2.1 give the strong state convergence and weak flux convergence; [F4] gives strong convergence of $f_k$. Hölder [F11] therefore permits passage in every term, yielding $$-\int_0^T(u,v)_H\phi' +\int_Qq\cdot\nabla v\,\phi =\int_0^T\langle f,v\rangle\phi.$$ Thus the distributional derivative of $u$ is $f-B_q$, where $\langle B_q(t),v\rangle=\int_\Omega q(t,x)\cdot\nabla v(x)\,dx$ and $B_q\in L^{p'}(0,T;V^*)$. [F2, F4, F5, F11, step 1.2, step 2.1, given]

4.1 The uniform bound $\|\overline U_k(t)\|_H\le M$ and strong $L^p(H)$ convergence imply $\bigl(\|u(t)\|_H-M\bigr)_+\le\|u(t)-\overline U_k(t)\|_H$ almost everywhere. Taking $L^p$ norms and passing to the limit shows $u\in L^\infty(0,T;H)$. Step 3.1 places $u$ in $L^p(V)$ with derivative $f-B_q\in L^{p'}(V^*)$; [F8] therefore gives its continuous $H$ representative and energy identity. [F3, F8, step 1.2, step 3.1, algebra]

5.1 Fix $v\in V$. The scalar affine interpolants $\alpha_k(t)=(\widehat U_k(t),v)_H$ are uniformly bounded, and $\alpha_k'(t)=\langle D_k(t),v\rangle$ is uniformly bounded in $L^{p'}$. Hölder gives a common modulus $|\alpha_k(t)-\alpha_k(s)|\le C_v|t-s|^{1/p}$. The reconstruction defect in step 3.1 and the strong state convergence imply $\alpha_k\to\alpha:=(u,v)_H$ in $L^1(0,T)$; $\alpha$ is continuous by step 4.1. This convergence is uniform: if $|\alpha_k(t_k)-\alpha(t_k)|\ge\varepsilon$ along a subsequence, the common modulus and continuity of $\alpha$ give a fixed $\delta>0$ on which the difference is at least $\varepsilon/3$ around $t_k$. The intersected interval has length at least $\min(\delta,T)$, contradicting $L^1$ convergence. Therefore $(U_k^{N_k},v)_H=\alpha_k(T)\to(u(T),v)_H$. [A1, F2, F11, step 3.1, step 4.1, given]

5.2 Use a smooth $\phi$ with $\phi(0)=1$ and $\phi(T)=0$. Integrating the discrete equation by parts in time gives $$-(U_k^0,\Pi_kv)_H-\int_0^T(\widehat U_k,\Pi_kv)_H\phi' +\int_Qq_k\cdot\nabla\Pi_kv\,\phi =\int_0^T\langle f_k,\Pi_kv\rangle\phi.$$ The convergence arguments of step 3.1 and $\Pi_ku_0\to u_0$ from step 1.1 pass this identity to the limit. By step 3.1 the distributional derivative of $t\mapsto(u(t),v)_H$ is $\langle f-B_q,v\rangle\in L^1(0,T)$; [F12] gives its absolutely continuous representative, which agrees with the continuous $H$ representative from step 4.1. Its integration-by-parts formula gives the same limit identity with $u(0)$ in place of $u_0$. Therefore $(u(0),v)_H=(u_0,v)_H$ for every $v\in V$, and density of $V$ in [F1] proves $u(0)=u_0$. [F1, F2, F4, F11, F12, step 1.1, step 3.1, step 4.1, given]

6.1 The nodal values are uniformly bounded in $H$ by [F3]. Step 5.1 gives $U_k^{N_k}\rightharpoonup u(T)$ against every $v\in V$; density of $V$ in $H$ and the uniform $H$ bounds extend this to weak convergence in $H$. Consequently $\|u(T)\|_H^2\le\liminf_k\|U_k^{N_k}\|_H^2$: if $u(T)\ne0$, test the weak convergence against $u(T)$ and apply Cauchy–Schwarz; the zero case is immediate. [F1, F3, step 4.1, step 5.1, algebra]

7.1 Testing each discrete equation with $U_k^n$, summing the exact identity [F10], and dropping the nonnegative jump sum gives $$\int_Q q_k\cdot\nabla\overline U_k \le\int_0^T\langle f_k,\overline U_k\rangle +\frac12\|U_k^0\|_H^2-\frac12\|U_k^{N_k}\|_H^2.$$ Strong convergence $f_k\to f$ and weak convergence $\overline U_k\rightharpoonup u$ make the first term on the right converge to $\int_0^T\langle f,u\rangle$. Steps 1.1 and 6.1 therefore imply $$\limsup_k\int_Q q_k\cdot\nabla\overline U_k \le\int_0^T\langle f,u\rangle+ \frac12\|u_0\|_H^2-\frac12\|u(T)\|_H^2.$$ The continuous equation from step 3.1 and the energy identity in step 4.1 make the right-hand side equal to $\int_Qq\cdot\nabla u$. [F4, F8, F10, step 1.1, step 1.2, step 3.1, step 4.1, step 6.1, algebra]

8.1 Apply [F9] to the weak gradient convergence in step 1.2, the weak flux convergence in step 2.1, and the limsup inequality in step 7.1. It gives $q=a(x,\nabla u)$ almost everywhere. Hence $B_q=A(u)$ and step 3.1 is the claimed weak evolution equation. [F1, F9, step 1.2, step 2.1, step 3.1, step 7.1]

9.1 For the unit interval in $d=1$, [F13] supplies the projector sequence for every $p>1$, which is the stated strict threshold. For the unit cube in any $d\ge2$, [F13] supplies it for every $p>\max(1,2d/(d+2))$. Choose any time partitions with maximum step tending to zero, independently of the spatial index. The resulting mesh/projector/time sequences satisfy every hypothesis used in the preceding convergence proof, so the abstract convergence and uniqueness conclusion holds on these explicit nonempty standard-mesh families without an additional projector assumption. [F13, given, step 1.1, step 1.3] ∎
