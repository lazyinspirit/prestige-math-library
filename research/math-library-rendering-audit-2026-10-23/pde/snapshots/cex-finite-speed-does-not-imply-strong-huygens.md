---
id: cex-finite-speed-does-not-imply-strong-huygens
kind: counterexample
title: "Finite speed of propagation does not imply strong Huygens"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-countable-choice, cor-compact-support-expands-at-speed-at-most-c, thm-dalembert-formula, thm-poisson-formula-for-the-two-dimensional-wave-equation, def-strong-huygens-principle, def-support-and-compactly-supported-riemann-integral-in-rn, rem-finite-propagation-is-not-huygens-principle, lem-smooth-bump-between-concentric-euclidean-balls, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral, lem-sphere-and-ball-measures-scale, thm-differentiation-under-the-integral-sign, thm-ftc-second-part, thm-continuous-implies-integrable, thm-darboux-equals-riemann, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, thm-algebra-of-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed pp. 171-172: the two- versus three-dimensional contrast and the one-dimensional d'Alembert tail"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #12: Kirchhoff's Formula and Minkowskian Geometry (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/940561a138578640826f762b5a57bcad_MIT18_152F11_lec_12.pdf"
      locator: "Remark 1.0.1: finite speed holds in all dimensions while the sharp Huygens principle fails for $n=1$ and even $n$"
verification:
  precheck: pass
---

## Statement refuted

The finite-speed property ([[cor-compact-support-expands-at-speed-at-most-c]])
coexists with three distinct wave phenomena: the strong Huygens principle can
fail ([[def-strong-huygens-principle]]), regularity need not improve, and
nonnegative displacement data need not produce a nonnegative solution. The
following compactly supported witnesses make these distinctions explicit.

1. **Failure of strong Huygens.** Let $c>0$, $x_0\in\mathbb R^n$,
   $t_0>0$ and $n\in\{1,2\}$. In dimension $1$, choose
   $u_0=0$ and a nonnegative nonzero $u_1\in C_c^1(\mathbb R)$ supported in
   $(x_0-ct_0,x_0+ct_0)$. Then the d'Alembert formula gives
   $u(x_0,t_0)=\frac1{2c}\int u_1>0$. In dimension $2$, choose $u_0=0$ and
   a nonnegative nonzero $u_1\in C_c^2(\mathbb R^2)$ supported in
   $B_r(x_0)$ for some $r<ct_0$; the Poisson formula gives $u(x_0,t_0)>0$.
   In both cases the data vanish on a neighbourhood of
   $S(x_0,ct_0)$, yet the value is nonzero, while finite speed still holds.

2. **No smoothing.** There is a compactly supported $F\in C^2(\mathbb R)$
   that is not $C^3$. The traveling wave $u(x,t)=F(x-ct)$ solves the
   one-dimensional equation and remains $C^2$ but not $C^3$ for every
   $t\ge0$. Its support translates at speed $c$.

3. **No maximum principle.** In dimension $2$, take a nonnegative nonzero
   $u_0\in C_c^\infty(B_r(x_0))$ and $u_1=0$. At any time $t_0>r/c$, the
   displacement term of Poisson's formula gives $u(x_0,t_0)<0$. Thus the
   solution can change sign although the initial displacement is nonnegative
   and the initial velocity is zero.

All four data pairs are compactly supported. The d’Alembert witnesses extend $C^2$ through time zero; for the smooth Poisson witnesses the descended sphere expression $\partial_t[tM^{(3)}_{U_0}((x,0),ct)]+tM^{(3)}_{U_1}((x,0),ct)$ extends smoothly through zero, since the signed-radius means are integrals of smooth data over the fixed compact sphere and may be differentiated there on any compact parameter set. Thus the initial regularity hypothesis is met and [[cor-compact-support-expands-at-speed-at-most-c]] supplies the finite-speed bound. The no-smoothing and sign-change examples are independent of the Huygens witnesses; they show why the qualitative properties listed by Hunter require separate arguments.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$; $c>0$; the compactly supported smooth data chosen in the proof; and a compactly supported $C^2$ profile.

[F1] For $u_0\in C^2(\mathbb R)$ and $u_1\in C^1(\mathbb R)$, the unique
classical solution is
$$u(x,t)=\frac12\bigl(u_0(x-ct)+u_0(x+ct)\bigr)+\frac1{2c}\int_{x-ct}^{x+ct}u_1(y)\,dy.$$
([[thm-dalembert-formula]])

[F2] For $u_0\in C^3(\mathbb R^2)$ and $u_1\in C^2(\mathbb R^2)$, the
two-dimensional solution is the Poisson expression
$$u(x,t)=\frac1{2\pi c}\frac{\partial}{\partial t}\int_{B_{ct}(x)}\frac{u_0(y)}{\sqrt{c^2t^2-|y-x|^2}}\,dy+\frac1{2\pi c}\int_{B_{ct}(x)}\frac{u_1(y)}{\sqrt{c^2t^2-|y-x|^2}}\,dy.$$
([[thm-poisson-formula-for-the-two-dimensional-wave-equation]])

[F3] Finite propagation: for a $C^2$ solution defined on a neighbourhood of the initial slab, with data supported in a compact $K$ and a source supported in $\{(x,t):\operatorname{dist}(x,K)\le ct\}$ (in particular for a zero source), $\operatorname{supp}u(\cdot,t)\subseteq K+\overline B_{ct}(0)$ for every $t$. ([[cor-compact-support-expands-at-speed-at-most-c]])

[F4] The strong Huygens principle in the homogeneous Cauchy setting is the statement that the value is carried by the sphere $S(x_0,ct_0)=\partial B_{ct_0}(x_0)$: admissible perturbations vanishing on a neighbourhood of $S$ do not change $u(x_0,t_0)$. ([[def-strong-huygens-principle]])

[F5] For any centre and radius there is a smooth nonnegative bump equal to one on the concentric half-radius ball and supported inside the full ball, by translating [[lem-smooth-bump-between-concentric-euclidean-balls]].

[F6] A nonnegative integral is monotone and positively homogeneous; it vanishes exactly for functions zero almost everywhere. A continuous function positive somewhere is bounded below by a positive constant on a smaller ball of positive measure. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[lem-sphere-and-ball-measures-scale]])

[F7] A parameter derivative may pass under the integral when dominated by a fixed integrable function on the parameter interval. ([[thm-differentiation-under-the-integral-sign]])

[F8] Chain, product and real-power rules apply to the explicit profile off its join points; the integral of a continuous derivative is its endpoint difference, and Darboux, Riemann and Lebesgue interval integrals agree. ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[thm-darboux-equals-riemann]], [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

## Proof

1.1 The one-dimensional Huygens witness: choose $u_0=0$ and a smooth nonnegative nonzero bump $u_1$ as in [F5] supported in $(x_0-ct_0,x_0+ct_0)$. Formula [F1] gives $$u(x_0,t_0)=\frac1{2c}\int_{x_0-ct_0}^{x_0+ct_0}u_1(y)\,dy>0.$$ The data are compactly supported inside the open base interval, hence vanish on a neighbourhood of its boundary sphere; [F3] supplies finite speed. [given, F1, F3, F4, F5, F6]

1.2 The two-dimensional Huygens witness: choose $0<r<ct_0$ and the nonnegative nonzero smooth bump $u_1$ of [F5] supported in $B_r(x_0)$, with $u_0=0$. Formula [F2] gives $$u(x_0,t_0)=\frac1{2\pi c}\int_{B_r(x_0)}\frac{u_1(y)}{\sqrt{c^2t_0^2-|y-x_0|^2}}\,dy>0.$$ Again the data vanish on a neighbourhood of $S(x_0,ct_0)$, and [F3] applies. [given, F2, F3, F4, F5, F6]

1.3 Compact traveling wave with no smoothing: define $$F(s):=\begin{cases}(1-s^2)^3|s|^{5/2},&|s|<1,\\0,&|s|\ge1.\end{cases}$$ At $s=\pm1$ the factor $(1-s^2)^3$ makes $F,F',F''$ tend to zero, so the extension by zero is compactly supported and $C^2$. The power and product rules [F8] give $F\to0$ and $F'(s)=\tfrac52\operatorname{sgn}(s)|s|^{3/2}+O(|s|^{7/2})\to0$ as $s\to0$. The difference quotients of $F$ and $F'$ at zero tend to zero, so $F'(0)=F''(0)=0$. Near $s=0$, $$F''(s)=\frac{15}{4}|s|^{1/2}+O(|s|^{5/2}),$$ so $F''(h)/h\to+\infty$ as $h\downarrow0$; hence $F$ is not $C^3$. Take $u_0=F$, $u_1=-cF'$. In [F1], by the FTC in [F8], the integral term equals $-\frac12(F(x+ct)-F(x-ct))$, so the solution simplifies to $u(x,t)=F(x-ct)$. It is $C^2$ and not $C^3$ at $x=ct$, and its compact support is translated exactly at speed $c$. [given, F1, F8]

1.4 Nonnegative displacement becomes negative: take the nonnegative nonzero smooth bump $u_0$ of [F5] supported in $B_r(x_0)$, $u_1=0$, and $t_0>r/c$. Since the support is strictly inside $B_{ct}(x_0)$ for $t$ near $t_0$, on a small closed time interval about $t_0$ the quantity $c^2t^2-r^2$ has a positive lower bound. Thus the integrand and its time derivative are uniformly bounded on the compact support, providing a constant integrable majorant; [F7] permits differentiating the displacement integral in [F2] over the fixed support: $$u(x_0,t_0)=-\frac{ct_0}{2\pi}\int_{B_r(x_0)}\frac{u_0(y)}{(c^2t_0^2-|y-x_0|^2)^{3/2}}\,dy<0.$$ The strict inequality follows by [F6] because the kernel is positive and $u_0$ is nonnegative and nonzero. Thus positivity is not preserved, despite nonnegative displacement and zero initial velocity; [F3] still gives finite speed. [given, F2, F3, F5, F6, F7]

2.1 Huygens conclusion: in steps 1.1 and 1.2 each data pair is supported strictly inside the relevant base ball, so it agrees with the zero pair on a neighbourhood of the sphere but gives a nonzero value at the vertex. This contradicts the defining data-insensitivity in [F4]. Finite propagation [F3] remains true; therefore finite speed does not imply strong Huygens, as recorded in [[rem-finite-propagation-is-not-huygens-principle]]. [step 1.1, step 1.2, F3, F4]

3.1 Regularity and positivity conclusions: step 1.3 retains a second-derivative cusp under translation, so the wave flow has no smoothing; step 1.4 gives an explicit failure of positivity preservation, hence of a maximum principle. [step 1.3, step 1.4] ∎

