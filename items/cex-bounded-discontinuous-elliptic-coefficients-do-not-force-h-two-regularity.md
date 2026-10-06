---
id: cex-bounded-discontinuous-elliptic-coefficients-do-not-force-h-two-regularity
kind: counterexample
title: "Bounded discontinuous elliptic coefficients need not give $H^2$ solutions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [thm-interior-h-two-regularity-for-divergence-form-equations, def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-weak-derivative-of-a-locally-integrable-function, def-hk-and-hk-zero-notation, thm-absolute-continuity-of-the-integral, lem-smooth-bump-between-concentric-euclidean-balls, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.13, composite media with discontinuous coefficients and the jump conditions of the weak formulation, printed p. 120 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, Lemma 10.16 and its $W^{1,\\infty}$ coefficient hypothesis, printed p. 240 (read in full)"
---

## Statement refuted

Assume Countable Choice. Bounded measurable uniformly elliptic coefficients together with $f=0$ force
every $H^1$ weak solution of $-(a^{ij}D_ju)'_i=f$ into $H^2_{\mathrm{loc}}$,
without any regularity hypothesis on the coefficients.

## Facts & Assumptions

**Given:** The interval $\Omega=(-1,1)$; the coefficient
$$a(x)=\begin{cases}1,&x<0,\\ 2,&x>0,\end{cases}$$
the primitive-shaped function
$$u(x)=\begin{cases}x,&x<0,\\ x/2,&x>0,\end{cases}$$
and the operator $Lu=-(au')'$, so that $a^{11}=a$ and $b=c=0$.

[F1] A class $u\in H^1(-1,1)$ is a local weak solution of $Lu=0$ on
$(-1,1)$ if $\int_{-1}^1a\,u'\,\overline{v'}\,dx=0$ for every
$v\in C_c^\infty(-1,1)$.
([[def-local-weak-solution-for-a-divergence-form-operator]],
[[def-uniformly-elliptic-divergence-form-operator]])

[F2] The coefficient $a$ is measurable and bounded with $1\le a\le2$, so
$|a^{11}|\le M_a=2$, and $\operatorname{Re}(a^{11}\xi\overline\xi)=a|\xi|^2\ge|\xi|^2$
for all $\xi\in\mathbb C$; hence $L$ is uniformly elliptic with $\theta=1$,
$M_a=2$, $M_b=M_c=0$.
([[def-uniformly-elliptic-divergence-form-operator]])

[F3] The Heaviside class $H=\mathbf 1_{(0,\infty)}$ on $I=(-1,1)$ has no weak
derivative in $L^1_{\mathrm{loc}}(I)$: if $v\in L^1_{\mathrm{loc}}(I)$
satisfied the weak-derivative identity
$\int_IH\varphi'\,dx=-\int_Iv\varphi\,dx$ for every
$\varphi\in C_c^\infty(I)$, then the fundamental theorem of calculus would
give $\int_Iv\varphi\,dx=\varphi(0)$ for every test $\varphi$, whereas the
shrinking bumps $\varphi_\epsilon(x)=\eta(x/\epsilon)$ (with $\eta$ the
published smooth bump equal to $1$ on $[-1/2,1/2]$ and supported in $(-1,1)$)
satisfy $\varphi_\epsilon(0)=1$ and
$\bigl|\int_Iv\varphi_\epsilon\,dx\bigr|\le\int_{[- \epsilon,\epsilon]}|v|\,dx\to0$
as $\epsilon\downarrow0$ by absolute continuity of the integral; this
contradiction shows that no locally integrable function represents the
distributional derivative, which is the Dirac mass at $0$ on $I$.
([[def-weak-derivative-of-a-locally-integrable-function]],
[[thm-absolute-continuity-of-the-integral]],
[[lem-smooth-bump-between-concentric-euclidean-balls]])

[F4] The weak derivative is characterized by $\int u\varphi'=-\int u'\varphi$
for every compactly supported smooth test. Integrating the displayed
piecewise formula for $u$ by parts on $(-1,0)$ and $(0,1)$ gives $u'=1$ on
$(-1,0)$ and $u'=1/2$ on $(0,1)$, with no point mass because $u$ is continuous
at $0$. Weak differentiation is linear in the class: if a class has a weak
derivative in $L^1_{\mathrm{loc}}$, every linear combination with constant
coefficients has the corresponding linear combination of weak derivatives.
([[def-weak-derivative-of-a-locally-integrable-function]])

[F5] Assume Countable Choice. If $u\in H^2_{\mathrm{loc}}(-1,1)$, then its
first weak derivative $u'$ has a weak derivative in $L^2_{\mathrm{loc}}$, and
that weak derivative is the distributional second derivative of $u$.
([[def-weak-derivative-of-a-locally-integrable-function]],
[[def-hk-and-hk-zero-notation]])

## Counterexample

1.1 The solution class and its derivative. By [F4], integration by parts on the two half-intervals gives the weak derivative $u'(x)=1$ for $x<0$ and $u'(x)=1/2$ for $x>0$; the boundary terms at $0$ cancel because $u$ is continuous there. Both $u$ and $u'$ lie in $L^2(-1,1)$, so $u\in H^1(-1,1)$, and equivalently $u'=1-\tfrac12\mathbf 1_{(0,\infty)}$ almost everywhere. [F4, given, algebra]

2.1 The weak equation with zero datum. Since $au'\equiv1$ by step 1.1, for every $v\in C_c^\infty(-1,1)$ one has $\int_{-1}^1a\,u'\,\overline{v'}\,dx=\int_{-1}^1\overline{v'}\,dx=0$, the last integral vanishing because $v$ is compactly supported. Hence $u$ is a local weak solution of $-(au')'=0$ on $(-1,1)$ by [F1]. [F1, step 1.1, algebra]

2.2 Failure of $H^2$ membership. Suppose $u\in H^2_{\mathrm{loc}}(-1,1)$; by [F5] the weak derivative $u'$ then has a weak derivative $w\in L^2_{\mathrm{loc}}(-1,1)\subseteq L^1_{\mathrm{loc}}(-1,1)$. By step 1.1, $\mathbf 1_{(0,\infty)}=2(1-u')$ a.e., so by linearity of weak differentiation [F4] the Heaviside class would have the locally integrable weak derivative $-2w$, contradicting [F3]. Hence $u\notin H^2(-1,1)$, and the distributional second derivative of $u$ is the measure $-\tfrac12\delta_0$ rather than an $L^2$ function. [F3, F4, F5, step 1.1, algebra]

3.1 Sharpness of the $W^{1,\infty}$ hypothesis and the flux. By [F2] the operator is uniformly elliptic with bounded measurable coefficients, and by step 2.1 it has the $H^1$ weak solution $u\notin H^2$ with datum $0$; since $a=1+\mathbf 1_{(0,\infty)}$, [F3] and linearity of weak differentiation [F4] show that $a$ has no locally integrable weak derivative either, so $a\notin W^{1,\infty}_{\mathrm{loc}}(-1,1)$. Therefore bounded measurability of the coefficients cannot replace the Lipschitz hypothesis $a^{ij}\in W^{1,\infty}(\Omega)$, with a global derivative bound, of [[thm-interior-h-two-regularity-for-divergence-form-equations]]. Moreover $u'$ jumps from $1$ to $1/2$ at $0$ while the flux $au'$ is identically $1$ on both sides: the quantity continuous across the interface is the flux, not the derivative. [F2, F3, F4, step 2.1, step 2.2, algebra] ∎

## Source notes

Hunter's discussion of composite media (printed p. 120) introduces
discontinuous coefficients with continuity of the flux across the interface;
Teschl's Lemma 10.16 (printed p. 240) assumes $A\in W^{1,\infty}$ and is
therefore not available here. The failure is exhibited at the level of the
weak derivative: the coefficient commutator of the differentiated equation is
a measure rather than an $L^2$ function, so the difference-quotient method
of the interior theorem stops exactly at the interface.
