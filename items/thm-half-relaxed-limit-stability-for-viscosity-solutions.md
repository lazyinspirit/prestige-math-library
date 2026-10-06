---
id: thm-half-relaxed-limit-stability-for-viscosity-solutions
kind: theorem
title: Half-relaxed limits of sub- and supersolutions with vanishing perturbations
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-half-relaxed-limits
- def-viscosity-subsolution-and-supersolution
- def-discontinuous-viscosity-solution
- lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation
- def-hamilton-jacobi-cauchy-problem
- thm-euclidean-semicontinuous-extreme-value-theorem
- def-metric-compactness
- lem-compactness-is-intrinsic
- def-countable-choice
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: 'Section 6: equation (6.1), Lemma 6.1, Remarks 6.2--6.4 and Theorem 6.5, printed pp. 34--35; these are stability background, not the explicit sin estimate.'
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 4, Lemma 4.1 and Theorem 4.1, printed pp. 13--14 (uniform-stability and viscous-limit background); the half-relaxed argument is proved here.
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 4, printed pp. 21--22
verification:
  precheck: pass
---

## Statement

Let $O\subseteq\mathbb R^n$ be open, $T>0$, $Z=O\times(0,T)$, let
$H_\varepsilon,H:O\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous for
$\varepsilon\in(0,1)$, and let $(u_\varepsilon)$ be a locally bounded family of
real functions on $Z$ that are upper semicontinuous in the subsolution case.
Assume one of the two forms of the Hamiltonian condition: (a)
$H_\varepsilon\to H$ uniformly on compact subsets of
$O\times[0,T]\times\mathbb R^n$; or (b) the exact limit-inferior condition:
for all sequences $\varepsilon_j\downarrow0$, $z_j\to z\in Z$ and
$p_j\to p$ one has $\liminf_jH_{\varepsilon_j}(z_j,p_j)\ge H(z,p)$. Suppose
moreover that for every $\phi\in C^1(Z)$ and every local maximum point
$z_\varepsilon\in Z$ of $u_\varepsilon-\phi$ there holds
$$\phi_t(z_\varepsilon)+H_\varepsilon(z_\varepsilon,D\phi(z_\varepsilon))\le c_\varepsilon(z_\varepsilon),$$
where $c_\varepsilon:Z\to[0,\infty)$ is locally bounded with
$c_\varepsilon\to0$ locally uniformly. Then the upper half-relaxed limit
$\overline u$ ([[def-half-relaxed-limits]]) is a viscosity subsolution of
$u_t+H(x,t,Du)=0$ in $Z$. If in addition
$u_\varepsilon(x,0)\le u_0^{(\varepsilon)}(x)$ in the relaxed sense with
$u_0^{(\varepsilon)}\to u_0$ locally uniformly on $O$ and the family is locally
equicontinuous up to the initial face, then $\overline u$ carries the initial
datum $u_0$ in the relaxed sense. The dual statement with $\limsup_jH_{\varepsilon_j}(z_j,p_j)\le H(z,p)$,
$\ge-c_\varepsilon$ and the lower half-relaxed limit holds for supersolutions.
**Choice.** Under hypothesis (a) the proof is choice-free. Under hypothesis
(b) it extracts a sequence of near-maximisers at the relaxed limit and
therefore uses Countable Choice ([[def-countable-choice]]), which is declared
as a dependency; the extraction is the only place where the principle is
consumed.

## Facts & Assumptions

**Given:** The open sets $O\subseteq\mathbb R^n$, $Z=O\times(0,T)$, continuous Hamiltonians $H_\varepsilon,H$, a locally bounded family $(u_\varepsilon)$ of real functions on $Z$, locally bounded perturbations $c_\varepsilon\ge0$ with $c_\varepsilon\to0$ locally uniformly, and the half-relaxed limits $\overline u,\underline u$ of [[def-half-relaxed-limits]].

[F1] $\overline u(z)=\inf_{\delta>0}\sup\{u_\varepsilon(y):0<\varepsilon<\min\{1,\delta\},\ y\in Z,\ |y-z|<\delta\}$ and $\underline u(z)=\sup_{\delta>0}\inf\{u_\varepsilon(y):0<\varepsilon<\min\{1,\delta\},\ y\in Z,\ |y-z|<\delta\}$; local boundedness makes both real-valued on compact subsets of $Z$; $\overline u$ is upper semicontinuous and $\underline u$ lower semicontinuous ([[def-half-relaxed-limits]]).

[F2] At every local maximum of $u_\varepsilon-\phi$ with $\phi\in C^1(Z)$ the assumed inequality $\phi_t(z_\varepsilon)+H_\varepsilon(z_\varepsilon,D\phi(z_\varepsilon))\le c_\varepsilon(z_\varepsilon)$ holds; a viscosity subsolution of the limit equation is a function that satisfies $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$ at every local maximum of the function and test function ([[def-viscosity-subsolution-and-supersolution]]).

[F3] If $v-\phi$ has a local maximum at $z_0$ and $\overline B(z_0,r)\subseteq U$ is a ball on which $v-\phi\le v(z_0)-\phi(z_0)$, then for every $\varepsilon>0$ the perturbed test $\phi_\varepsilon=\phi+\varepsilon|z-z_0|^4$ has the same value and first jet as $\phi$ at $z_0$ and makes $v-\phi_\varepsilon$ strictly maximised over $\overline B(z_0,r)$ at $z_0$ ([[lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation]]).

[F4] Every upper semicontinuous real-valued function on a nonempty compact subset of $\mathbb R^m$ attains its maximum there ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).

[F5] Countable Choice is the principle that every sequence $(S_j)_{j\ge1}$ of nonempty sets has a sequence of choices $(s_j)$ with $s_j\in S_j$ ([[def-countable-choice]]).

[F6] A compact metric space has a finite subcover from every intrinsic open cover ([[def-metric-compactness]]); for a compact Euclidean subset, every family of ambient open balls covering it has finitely many members covering it, also with their indices retained ([[lem-compactness-is-intrinsic]], clauses 2--3).

[F7] Local equicontinuity up to the initial face gives each $u_\varepsilon$ a continuous trace $u_\varepsilon^0(x):=\lim_{(y,s)\to(x,0),\ s>0}u_\varepsilon(y,s)$ and a common local modulus there; the relaxed initial inequality implies $u_\varepsilon^0(x)\le u_0^{(\varepsilon)}(x)$.

## Proof

**Proof technique:** separate the uniform case (a) from the sequential case (b); in case (a) the argument uses a single near-maximal pair and one compact maximiser, and in case (b) a sequence of near-maximisers is extracted at the relaxed limit.

1.1 Case (a): the strict-contact case, choice-free. Let $\phi\in C^1(Z)$ and let $\overline u-\phi$ have a strict local maximum at $z_0=(x_0,t_0)\in Z$. Choose $\rho>0$ with $\overline B(z_0,\rho)\subseteq Z$ and strict inequality away from $z_0$. Assume for contradiction that $\theta:=\phi_t(z_0)+H(z_0,D\phi(z_0))>0$. By continuity there is $r\in(0,\rho/2)$ such that $\phi_t(z)+2(t-t_0)+H(z,D\phi(z)+2(x-x_0))>3\theta/4$ for $|z-z_0|\le r$. The compact annulus $A_r:=\{z:r/2\le|z-z_0|\le r\}$ has a strict gap $g:=\overline u(z_0)-\phi(z_0)-\max_{A_r}(\overline u-\phi)>0$ by [F1, F4]. Write $z=(x,t)$ and $z_0=(x_0,t_0)$. For each $z\in A_r$, the defining infimum for $\overline u(z)$ gives $\delta_z>0$ such that $u_\varepsilon(y)<\overline u(z)+g/8$ whenever $0<\varepsilon<\delta_z$ and $|y-z|<\delta_z$; shrink $\delta_z$ so also $|\phi(y)+|y-z_0|^2-\phi(z)-|z-z_0|^2|<g/8$ there. Use the collection of all pairs $(z,\delta)$ satisfying these bounds; their balls $B(z,\delta/2)$ cover $A_r$ without choosing one radius at each point. By compactness and [F6], finitely many such balls $B(z_i,\delta_i/2)$ cover $A_r$; let $\varepsilon_A:=\min_i\delta_i$. For every $0<\varepsilon<\varepsilon_A$ and $y\in A_r$, these bounds give $$u_\varepsilon(y)-\phi(y)-|y-z_0|^2<\overline u(z_i)-\phi(z_i)-|z_i-z_0|^2+g/4\le\overline u(z_0)-\phi(z_0)-3g/4$$ for some $i$. Uniform convergence $H_\varepsilon\to H$ on compact subsets and local uniform convergence $c_\varepsilon\to0$ provide $\varepsilon_H>0$ such that for $\varepsilon<\varepsilon_H$ and $|z-z_0|\le r$, the corresponding upper-test residual with gradient $D\phi(z)+2(x-x_0)$ is $>\theta/2$ and $c_\varepsilon(z)<\theta/2$. Choose $0<\eta<g/12$ and then $\delta<\min\{r/4,\varepsilon_A,\varepsilon_H\}$ so that $|\phi(y)-\phi(z_0)|<\eta$ and $|y-z_0|^2<\eta$ when $|y-z_0|<\delta$. By [F1] there is one pair $(\varepsilon,y)$ with $0<\varepsilon<\delta$, $|y-z_0|<\delta$ and $u_\varepsilon(y)>\overline u(z_0)-\eta$. Let $z_\varepsilon$ maximise the upper semicontinuous function $u_\varepsilon(z)-\phi(z)-|z-z_0|^2$ on the compact ball $\overline B(z_0,r)$, possible by [F4]. Its value is $>\overline u(z_0)-\phi(z_0)-3\eta$, so the uniform annulus bound forces $|z_\varepsilon-z_0|<r/2$. Thus $u_\varepsilon-(\phi+|z-z_0|^2)$ has a local maximum at $z_\varepsilon$. Writing $z_0=(x_0,t_0)$ and $z_\varepsilon=(x_\varepsilon,t_\varepsilon)$, the test has time derivative $\phi_t(z_\varepsilon)+2(t_\varepsilon-t_0)$ and spatial gradient $D\phi(z_\varepsilon)+2(x_\varepsilon-x_0)$; its residual is $>\theta/2$ while $c_\varepsilon(z_\varepsilon)<\theta/2$, contradicting the assumed subsolution inequality. Hence $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$ at every strict local maximum. [F1, F2, F4, F6, algebra]

1.2 The initial trace. Assume the relaxed initial inequality and data convergence of the statement, and use the traces of [F7]. Fix $x\in O$ and $\eta>0$. By local equicontinuity and continuity of $u_0^{(\varepsilon)}\to u_0$ there is a neighbourhood $V$ of $(x,0)$ such that, for all sufficiently small $\varepsilon$ and $(y,s)\in V\cap Z$, $$u_\varepsilon(y,s)\le u_\varepsilon^0(x)+\eta\le u_0^{(\varepsilon)}(x)+\eta\le u_0(x)+2\eta.$$ Shrink to a neighbourhood $V'$ whose closure lies in $V$. For each $z'\in V'\cap Z$ sufficiently close to $(x,0)$, the neighborhoods in the definition of $\overline u(z')$ can be taken inside $V$, so the same bound gives $\overline u(z')\le u_0(x)+2\eta$. Therefore $\limsup_{(y,s)\to(x,0),\ s>0}\overline u(y,s)\le u_0(x)+2\eta$; letting $\eta\downarrow0$ proves the relaxed subsolution initial condition. The lower-limit argument is the dual one. [F1, F7, algebra]

2.1 Case (b): the strict-contact case with near-maximiser extraction. Assume the exact limit-inferior condition and let $\phi$ and $z_0$ be as in step 1.1. For each $j\ge1$, consider triples $(\varepsilon,y,z)$ with $0<\varepsilon<\min\{1,1/j\}$, $y\in Z$, $|y-z_0|<\min\{\rho/2,1/j\}$, $u_\varepsilon(y)>\overline u(z_0)-1/j$, and $z$ a maximiser of $u_\varepsilon(\cdot)-\phi(\cdot)-|\cdot-z_0|^2$ on $\overline B(z_0,\rho)$. This set is nonempty by [F1] and [F4]; Countable Choice [F5] selects triples $(\varepsilon_j,y_j,z_j)$. Then $\varepsilon_j\to0$, $y_j\to z_0$ and the maximal values satisfy $u_{\varepsilon_j}(z_j)-\phi(z_j)-|z_j-z_0|^2\ge\overline u(z_0)-\phi(z_0)-o(1)$. Fix any $r\in(0,\rho)$. The strict maximum of $\overline u-\phi$ gives a positive gap on the compact annulus $r/2\le|z-z_0|\le\rho$; the finite-cover argument of step 1.1 then bounds $u_\varepsilon(z)-\phi(z)-|z-z_0|^2$ strictly below $\overline u(z_0)-\phi(z_0)$ on this annulus for all sufficiently small $\varepsilon$. Since $\varepsilon_j\to0$ and the maximizing values are at least that limit minus $o(1)$, eventually $|z_j-z_0|<r/2$. As $r>0$ was arbitrary, $z_j\to z_0$. By taking the canonical strictly decreasing subsequence of $(\varepsilon_j)$ (at each stage use the least later index with smaller $\varepsilon$, which exists because $\varepsilon_j\to0$) and relabelling, we may assume $\varepsilon_j\downarrow0$; then $z_j\to z_0$ still. Eventually $z_j$ is interior to $\overline B(z_0,\rho)$, so $\psi_j:=\phi+|z-z_0|^2$ is a local upper test for $u_{\varepsilon_j}$ there. Thus $$\phi_t(z_j)+2(t_j-t_0)+H_{\varepsilon_j}(z_j,D\phi(z_j)+2(x_j-x_0))\le c_{\varepsilon_j}(z_j).$$ Writing $z_j=(x_j,t_j)$, the extra time derivative $2(t_j-t_0)$ tends to zero. Since the gradients converge and $c_{\varepsilon_j}(z_j)\to0$, taking the limit inferior of the displayed inequality and using (b) gives $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$. Condition (a) implies (b) by uniform convergence on compact sets, so this proves the strict-contact case. [F1, F2, F4, F5, F6, algebra]

3.1 General contacts, the dual statement and conclusion. If $\overline u-\phi$ merely has a local maximum at $z_0$, strictify with [F3] and apply the strict-contact conclusion of steps 1.1 or 2.1 to the strictified test; the perturbed test has the same value and first jet at $z_0$, so the resulting inequality is exactly $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$. Hence $\overline u$ is a viscosity subsolution of the limit equation, and by step 1.2 it carries the initial datum when the additional hypotheses hold. The dual argument, replacing $u_\varepsilon$ by $-u_\varepsilon$ and local maxima by local minima, shows that $\underline u$ is a viscosity supersolution with the dual initial condition. The half-relaxed limits themselves are computed as infima and suprema over sets, and only step 2.1 involves a countable selection, so under hypothesis (a) no choice principle is used and under hypothesis (b) Countable Choice is used exactly as declared. [step 1.1, step 1.2, step 2.1, F3] ∎

## Remarks

- **The role of $c_\varepsilon$.** The vanishing perturbation $c_\varepsilon$ is the fixed-test mechanism used for the viscous equation $u_t+H(x,t,Du)=\varepsilon\Delta u$, where the extra term $\varepsilon\Delta\phi$ is locally bounded and tends to $0$ uniformly on compact sets for a fixed $C^{1,2}$ test. This is not directly the theorem's hypothesis for all $C^1$ tests with one common error function; [[thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations]] supplies the fixed-test argument and smooth approximation needed there.
- **Choice ledger.** Case (a), which is the case used by the vanishing-viscosity argument of this page, is choice-free: a single near-maximal pair and a single compact maximiser suffice. Case (b) needs Countable Choice to turn the defining infimum-of-suprema at the relaxed limit into a sequence of near-maximisers; this is the use of choice declared in the statement.
