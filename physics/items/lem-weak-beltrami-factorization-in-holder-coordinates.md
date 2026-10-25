---
id: lem-weak-beltrami-factorization-in-holder-coordinates
kind: lemma
title: "Weak solutions factor holomorphically in Hölder coordinates"
status: published
origin: pipeline
deps:
  - cor-mean-value-theorem
  - def-ck-and-multi-index-notation-in-several-variables
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-domain
  - def-countable-choice
  - def-distributional-harmonicity-and-poisson-equation-in-rn
  - def-holder-spaces-c-k-alpha-and-their-scaled-norms
  - def-locally-integrable-function-on-r-n
  - def-measurable-beltrami-coefficient
  - def-regular-distribution-from-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - def-weak-derivative-of-a-locally-integrable-function
  - def-weak-solution-beltrami-equation
  - def-wirtinger-derivatives
  - lem-c-k-boundary-flattening-preserves-wkp-locally
  - lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets
  - lem-classical-derivatives-are-weak-derivatives
  - lem-complex-conjugation-and-modulus-laws
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - lem-nondegenerate-local-holder-beltrami-coordinates
  - lem-weak-derivatives-are-unique-almost-everywhere
  - lem-weak-derivative-linearity-locality-and-commutation
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-complex-holder-minkowski-and-the-quotient-norm
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-continuous-partials-and-cauchy-riemann-imply-holomorphic
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-distributional-differentiation-is-continuous-and-commutes
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-number-lemma
  - thm-locally-integrable-functions-embed-in-distributions
  - thm-rational-points-and-boxes-in-rn
  - thm-weyl-lemma-for-the-laplacian
dependency_level: 2
proof_strategy: direct
axiom_use: >-
  Assume Countable Choice, inherited through the Sobolev coordinate-change,
  null-set, Lebesgue-measure, distribution, and Weyl interfaces. Choosing
  exceptional null sets across the countable patch cover also uses only
  Countable Choice; no full Axiom of Choice is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §14.1, printed p. 196: Weyl's lemma turns the composition of two homeomorphic Beltrami solutions into a conformal map; contextual only, since this item does not assume injectivity of its weak solution."
    - title: "Kari Astala, Albert Clop, Daniel Faraco, Jarmo Jääskeläinen and Aleksis Koski, Nonlinear Beltrami operators, Schauder estimates and bounds for the Jacobian, Ann. Inst. H. Poincaré Anal. Non Lineaire 34 (2017), 1543–1559"
      url: "https://ems.press/content/serial-article-files/16835"
      locator: "§2.4, printed pp. 1552–1554: differentiation of an autonomous nonlinear Beltrami equation in its gradient variable and comparison with a linear constant-coefficient system; contextual only, not the weak pullback proof here."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
aliases: []
---

## Statement

Assume Countable Choice. Fix an integer $k\ge0$, $0<\alpha<1$ and $0\le k_0<1$. Let $U\subseteq\mathbb C$ be a complex domain ([[def-complex-domain]]), let $\mu\in C^{k,\alpha}(U)$ satisfy $|\mu|\le k_0$, and let $\Phi:V\to\Phi(V)$ be a nondegenerate $C^{k+1,\alpha}$ Beltrami chart for $\mu$ on an open set $V\subseteq U$ as in [[lem-nondegenerate-local-holder-beltrami-coordinates]]. Let $\Omega\subseteq\mathbb C$ be open, put $W:=\Omega\cap V$, and suppose $f\in W^{1,2}_{\mathrm{loc}}(\Omega;\mathbb C)$ satisfies $f_{\bar z}=\mu f_z$ almost everywhere on $W$ ([[def-weak-solution-beltrami-equation]]). No injectivity of $f$ is assumed.

Then $Y:=\Phi(W)$ is open, and the almost-everywhere class $h:=f\circ\Phi^{-1}$ is well-defined in $W^{1,2}_{\mathrm{loc}}(Y;\mathbb C)$ and satisfies $h_{\bar w}=0$ almost everywhere on $Y$. It therefore has a holomorphic representative $H:Y\to\mathbb C$. The original class $f$ agrees almost everywhere on $W$ with $H\circ\Phi$, and $H\circ\Phi\in C^{k+1,\alpha}_{\mathrm{loc}}(W;\mathbb C)$. In particular, every weak solution with a $C^{k,\alpha}$ coefficient has a local $C^{k+1,\alpha}$ representative. No nonvanishing claim about $f_z$ is made.

## Facts & Assumptions

**Given:** Countable Choice; $k\ge0$, $0<\alpha<1$, $0\le k_0<1$; the coefficient $\mu$ and chart $\Phi$ in the Statement; an open $\Omega$; and $f\in W^{1,2}_{\mathrm{loc}}(\Omega;\mathbb C)$ satisfying the displayed equation on $W$.

[F1] The coefficient obeys $|\mu|\le k_0<1$, the complex domain is open in the Euclidean plane, and the nondegenerate chart is a $C^{k+1,\alpha}$ diffeomorphism onto an open image with $\Phi_{\bar z}=\mu\Phi_z$ and $J_\Phi>0$ ([[def-measurable-beltrami-coefficient]], [[def-complex-domain]], [[lem-nondegenerate-local-holder-beltrami-coordinates]]).

[F2] A weak solution is a $W^{1,2}_{\mathrm{loc}}$ class whose weak Wirtinger derivatives satisfy the equation almost everywhere; Sobolev derivatives restrict locally and are unique a.e. classes ([[def-weak-solution-beltrami-equation]], [[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]], [[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F3] On relatively compact patches, precomposition by a $C^1$ diffeomorphism with bounded chart and inverse derivatives preserves $W^{1,2}$ and has the weak chain-rule formula ([[lem-c-k-boundary-flattening-preserves-wkp-locally]]).

[F4] A $C^1$ diffeomorphism of open Euclidean sets and its inverse map Lebesgue-null sets to null sets ([[lem-c-one-diffeomorphisms-map-lebesgue-null-sets-to-null-sets]]).

[F5] The real differential has the Wirtinger form $Df(q)=f_wq+f_{\bar w}\bar q$; weak differentiation is complex-linear and local, so the same coordinate formulas hold for weak derivatives ([[def-wirtinger-derivatives]], [[lem-weak-derivative-linearity-locality-and-commutation]]).

[F6] Distributional derivatives commute, and distributional harmonicity means $\Delta T=0$ for $\Delta=\partial_x^2+\partial_y^2$ ([[thm-distributional-differentiation-is-continuous-and-commutes]], [[def-distributional-harmonicity-and-poisson-equation-in-rn]]).

[F7] A $W^{1,2}_{\mathrm{loc}}$ class and its first derivatives are locally integrable: on each ball, complex Hölder bounds the $L^1$ norm by the $L^2$ norm times the square root of the finite ball measure ([[def-sobolev-space-wkp-and-its-norm]], [[def-locally-integrable-function-on-r-n]], [[thm-complex-holder-minkowski-and-the-quotient-norm]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F8] Every distributionally harmonic distribution has a unique smooth harmonic representative ([[thm-weyl-lemma-for-the-laplacian]]).

[F9] Classical derivatives of a smooth function are its weak derivatives ([[lem-classical-derivatives-are-weak-derivatives]]).

[F10] For a locally integrable class $q$, $T_q$ denotes its regular distribution, and the map $q\mapsto T_q$ is injective under Countable Choice ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[F11] Real and imaginary parts are the Euclidean coordinates of a complex function ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F12] Every nonempty Euclidean ball has positive measure ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F13] A smooth map satisfying the pointwise Cauchy–Riemann equations on an open set is holomorphic there ([[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]]).

[F14] $C^{k+1,\alpha}_{\mathrm{loc}}$ means all coordinate derivatives through order $k+1$ exist and are continuous, with the top derivatives locally $\alpha$-Hölder; the multi-index convention is fixed ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F15] Continuous first partials give total differentiability; the first-order chain rule, coordinatewise product rule, scalar mean-value bound, and complex modulus triangle inequality give the finite chain/product and Hölder estimates on compact balls ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[cor-mean-value-theorem]], [[lem-complex-conjugation-and-modulus-laws]]).

[F16] Rational boxes form a countable basis of $\mathbb R^2$; closed bounded balls are compact and continuous real functions are bounded on compact metric spaces ([[thm-rational-points-and-boxes-in-rn]], [[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F17] Continuous images of compact sets are compact ([[thm-continuous-image-of-a-compact-space-is-compact]]).

[F18] Under Countable Choice, planar Lebesgue measure is a complete measure; countable subadditivity therefore makes a countable union of measurable null sets measurable and null ([[thm-lebesgue-measure-is-a-complete-measure]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[F19] Countable Choice is the assertion that every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F20] Every open cover of a compact metric space has a Lebesgue number ([[thm-lebesgue-number-lemma]]).

**Choice use.** Countable Choice is used by the Sobolev coordinate-change, null-set, Lebesgue-measure, Weyl, and regular-distribution interfaces [F3], [F4], [F8], [F10], [F18], and in step 2.1 to collect one exceptional null set for each member of the countable rational-patch cover. No full Axiom of Choice is used.

## Proof

**Proof technique:** direct.

1.1 Put $W=\Omega\cap V$ and $Y=\Phi(W)$. Since $\Phi$ is a $C^1$ diffeomorphism of $V$ onto the open set $\Phi(V)$, its restriction maps the open set $W$ diffeomorphically onto the open set $Y$. Composition of the given a.e. class with $\Phi^{-1}$ is well-defined by [F4]. The rational open boxes whose closures lie in $Y$ form a countable cover by [F16]. For such a box $B$, put $W_B:=\Phi^{-1}(B)$. Its closure is compact in $W$: $\overline B$ is compact by [F16], and its image under $\Phi^{-1}$ is compact by [F17]. Apply [F3] to $\Phi^{-1}:B\to W_B$ and $f|_{W_B}\in W^{1,2}(W_B)$; the chart and inverse derivatives are bounded on these compact patches by [F1]. Thus $h=f\circ\Phi^{-1}$ lies in $W^{1,2}(B)$ with $$Dh(w)=Df(\Phi^{-1}w)\,D\Phi^{-1}(w)$$ almost everywhere on $B$. The countable cover, locality, and uniqueness of weak derivatives in [F2] give $h\in W^{1,2}_{\mathrm{loc}}(Y)$. [F1, F2, F3, F4, F16, F17, given]

2.1 On each box $B$ of step 1.1, the chain identity there and $D\Phi^{-1}(\Phi z)D\Phi(z)=I$ imply $$Df(z)=Dh(\Phi z)D\Phi(z)$$ for almost every $z\in W_B$: the exceptional null set pulls back to a null set by [F4]. Rewriting this real-linear identity in Wirtinger coordinates [F5] gives $$f_z=(h_w\circ\Phi)\Phi_z+(h_{\bar w}\circ\Phi)\overline{\Phi_{\bar z}},\qquad f_{\bar z}=(h_w\circ\Phi)\Phi_{\bar z}+(h_{\bar w}\circ\Phi)\overline{\Phi_z}.$$ Subtract $\mu f_z$ from $f_{\bar z}$, use the weak equation for $f$ and $\Phi_{\bar z}=\mu\Phi_z$, and obtain $$0=(h_{\bar w}\circ\Phi)(\overline{\Phi_z}-\mu\overline{\Phi_{\bar z}})=(h_{\bar w}\circ\Phi)(1-|\mu|^2)\overline{\Phi_z}$$ almost everywhere on $W_B$. By [F1], the last factor is nowhere zero, since $J_\Phi=(1-|\mu|^2)|\Phi_z|^2>0$. Hence $h_{\bar w}\circ\Phi=0$ almost everywhere on each $W_B$. By [F19], choose one exceptional null set for each box in the countable cover. Their images under $\Phi$ are null by [F4], and [F18] makes their union null, so $h_{\bar w}=0$ almost everywhere on all of $Y$. [F1, F2, F4, F5, F18, F19, step 1.1, given]

3.1 Write $h=u+iv$ with real locally integrable classes $u,v$; local integrability follows from [F7]. Let $T_q$ denote the regular distribution of each locally integrable class $q$ as in [F10]. The equation $h_{\bar w}=0$ says $u_x-v_y=0$ and $v_x+u_y=0$ almost everywhere, hence the same equalities hold for their regular distributions. Using [F6], $$\Delta T_u=\partial_xT_{u_x}+\partial_yT_{u_y}=\partial_xT_{v_y}-\partial_yT_{v_x}=0,$$ $$\Delta T_v=\partial_xT_{v_x}+\partial_yT_{v_y}=-\partial_xT_{u_y}+\partial_yT_{u_x}=0.$$ Apply [F8] separately to these real distributions. There are smooth harmonic functions $U,V$ on $Y$ with $u=U$ and $v=V$ almost everywhere. [F2, F5, F6, F7, F8, F10, F11, F19, step 2.1, given]

4.1 Since $T_U=T_u$ and $T_V=T_v$, the distributional identities $\partial_xT_U-\partial_yT_V=0$ and $\partial_xT_V+\partial_yT_U=0$ follow from step 3.1. By [F9], these distributions are the regular distributions of $U_x-V_y$ and $V_x+U_y$; [F10] makes both continuous functions zero almost everywhere. They vanish everywhere: if either were nonzero at a point, continuity would keep its modulus positive on a ball of positive measure by [F12]. Thus $U,V$ satisfy the Cauchy–Riemann equations at every point. By [F13], $H:=U+iV$ is holomorphic on $Y$ and represents $h$. [F9, F10, F12, F13, step 3.1]

5.1 Fix $z_0\in W$. Choose a convex ball $B_z$ with $z_0\in B_z$ and $\overline{B_z}\subset W$, and a convex ball $B_w$ with $\overline{B_w}\subset Y$ such that $\Phi(\overline{B_z})\subset B_w$; this is possible by continuity of $\Phi$ and openness of $Y$. By [F16], the closed balls are compact and the derivatives of the smooth $H$ through order $k+2$ are bounded on $\overline{B_w}$. The chart bounds in [F1] bound the derivatives of $\Phi$ through order $k+1$ on $B_z$, with the top-order $\alpha$-seminorm finite. Repeated use of the chain rule [F15] and the coordinate product rule expresses each derivative of $H\circ\Phi$ through order $k+1$ as a finite sum of products of derivatives of $H$ composed with $\Phi$ and derivatives of $\Phi$. The mean-value bound [F15] makes each composed derivative of $H$ Lipschitz on $B_z$; it also makes derivatives of $\Phi$ through order $k$ Lipschitz there. These fields are bounded, while derivatives of $\Phi$ of order $k+1$ are $\alpha$-Hölder by [F1]. The inequality $[FG]_{0,\alpha}\le\|F\|_\infty[G]_{0,\alpha}+\|G\|_\infty[F]_{0,\alpha}$, from [F15], shows each finite product and sum has the same local Hölder bound. Thus $H\circ\Phi$ has the required norm on each such ball. For any $O\Subset W$, compactness of $\overline O$ gives a finite subcover by these balls; [F20] gives a Lebesgue number for that cover. Pairs in $O$ closer than this number lie in one ball and use its Hölder bound; pairs farther apart are controlled by the bounded derivative suprema and the positive lower distance. Hence $H\circ\Phi\in C^{k+1,\alpha}(O)$ for every $O\Subset W$, so it belongs to $C^{k+1,\alpha}_{\mathrm{loc}}(W)$. [F1, F14, F15, F16, F20, given, step 4.1]

6.1 Since $h=f\circ\Phi^{-1}$ as an a.e. class and $H=h$ almost everywhere on $Y$, composition by the C$^1$ diffeomorphism $\Phi$ preserves this equality by [F4]. Hence $f=H\circ\Phi$ almost everywhere on $W$. Steps 4.1 and 5.1 give the asserted holomorphic factor and the local $C^{k+1,\alpha}$ representative. The argument used only the nondegeneracy of $\Phi$ and never divided by $f_z$ or assumed $f$ injective. [F4, step 1.1, step 4.1, step 5.1] ∎

## Source notes

Lyubich §14.1 obtains a conformal transition by composing two quasiconformal homeomorphic solutions with an inverse; this is contextual only because the present $f$ need not be injective. Astala et al. §2.4 differentiates a nonlinear equation in its gradient variable and compares with a constant-coefficient system, a different regularity argument. Here the factorization follows from the weak chain rule in the published Sobolev coordinate-change lemma, the nondegenerate chart constructed in this pair, distributional commutation, and Weyl's lemma.
