---
id: "thm-lewy-stampacchia-bounds-in-the-sourced-obstacle-regularity-class"
kind: "theorem"
title: "Lewy–Stampacchia distribution bound for bounded-coefficient obstacle forms"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 11
deps:
  - "cor-obstacle-complementarity-in-distribution-form"
  - "def-axiom-of-choice"
  - "def-bounded-c-k-domain-and-boundary-charts"
  - "def-closed-convex-obstacle-set-and-variational-inequality"
  - "def-countable-choice"
  - "def-distribution"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-hk-and-hk-zero-notation"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-test-function-space-d-of-an-open-set"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-elliptic-form-is-well-defined-and-bounded"
  - "lem-compact-support-zero-extension-in-wkp"
  - "cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn"
  - "lem-test-function-cutoffs-and-euclidean-localization"
  - "lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces"
  - "lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions"
  - "lem-positive-part-is-an-admissible-weak-test-by-truncation"
  - "lem-weak-leibniz-rule-with-a-smooth-factor"
  - "thm-dominated-convergence"
  - "thm-existence-and-uniqueness-for-the-obstacle-problem"
  - "thm-holder-inequality-for-integrals"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Stanislas Ouaro and Sado Traore, Entropy solutions to the obstacle problem for nonlinear elliptic problems with variable exponent and L1-data (complete publisher-hosted article, vol. 5 no. 1, 2009, pp. 127-141; received 7 September 2007, accepted 22 November 2008)"
      url: "http://www.ybook.co.jp/online-p/PJO/vol5/pjov5n1p127.pdf"
      locator: "Section 2, Theorem 2.5 and display (2.10), printed pp. 131–132 (entropy-solution Lewy–Stampacchia inequality); §4, pp. 139–140 gives the approximation/Mosco proof. Cited as corroboration for the lower-order-free principal-part special case; the present bounded lower-order extension is proved by the local truncation calculation in the item strategy. The cited source has the additional bounded-positive-part hypothesis on the obstacle; it is corroboration only for the lower-order-free principal-part case."
---

## Statement

Assume Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), inherited through the existence, density, truncation and sign suppliers cited below. Let $n\ge1$ and let $\Omega\subseteq\mathbb R^n$ be a bounded open set of the two kinds of [[def-closed-convex-obstacle-set-and-variational-inequality]]: a bounded interval when $n=1$, and a bounded $C^1$ domain when $n\ge2$ ([[def-bounded-c-k-domain-and-boundary-charts]]). Let $L$ be a real symmetric uniformly elliptic divergence-form operator with bounded measurable real coefficients and coercive form $a$ ([[def-uniformly-elliptic-divergence-form-operator]]), let $f\in L^2(\Omega;\mathbb R)$, and let the real obstacle $\psi\in H^2(\Omega;\mathbb R)\cap H^1_0(\Omega;\mathbb R)$ ([[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]]) satisfy the additional hypothesis that its distributional image $L\psi$ is represented by an $L^2(\Omega;\mathbb R)$ function; put $h:=L\psi-f\in L^2(\Omega;\mathbb R)$. Let $u\in K=\{v\in H^1_0(\Omega;\mathbb R):v\ge\psi\}$ solve the obstacle problem ([[thm-existence-and-uniqueness-for-the-obstacle-problem]], [[def-wkp-zero-as-a-sobolev-closure]]) with reaction $\Lambda_u(\varphi)=a(u,\varphi)-\int_\Omega f\varphi$ on test functions ([[cor-obstacle-complementarity-in-distribution-form]], [[def-distribution]], [[def-test-function-space-d-of-an-open-set]]). Then, in the sense of distributions,
$$0\le\Lambda_u\le (L\psi-f)^+,$$
that is, $\Lambda_u$ is a nonnegative distribution bounded above by the $L^2$ function $h^+$.

## Facts & Assumptions

**Given:** The bounded open set $\Omega$ of the two kinds above with $n\ge1$; a real symmetric uniformly elliptic divergence-form operator $L=-D_i(a^{ij}D_j\,\cdot)+b^iD_i\,\cdot+c\,\cdot$ with bounded measurable real coefficients and coercive form $a(u,v)=\int_\Omega(a^{ij}D_juD_iv+b^iD_iu\,v+cuv)\,dx$ of [[def-uniformly-elliptic-divergence-form-operator]]; $f\in L^2(\Omega;\mathbb R)$ and the functional $F(v)=\int_\Omega fv$; the obstacle $\psi\in H^2(\Omega;\mathbb R)\cap H^1_0(\Omega;\mathbb R)$ with $L\psi$ represented by an $L^2$ function; $h=L\psi-f$; the admissible set $K=\{v\in H^1_0(\Omega;\mathbb R):v\ge\psi\text{ a.e.}\}$ and the unique obstacle solution $u\in K$ with reaction $\Lambda_u(\varphi)=a(u,\varphi)-F(\varphi)$.

[F1] [[def-closed-convex-obstacle-set-and-variational-inequality]], [[thm-existence-and-uniqueness-for-the-obstacle-problem]]: $K$ is nonempty and $u\in K$ satisfies $a(u,v-u)\ge F(v-u)$ for every $v\in K$; in particular $u\ge\psi$ almost everywhere on $\Omega$. The form $a$ is symmetric, bounded and coercive.

[F2] [[def-uniformly-elliptic-divergence-form-operator]], [[lem-elliptic-form-is-well-defined-and-bounded]]: the form $a$ is a well-defined bounded bilinear form on $H^1(\Omega)$ with $|a(u,v)|\le M\|u\|_{H^1}\|v\|_{H^1}$, and for every $w\in H^1(\Omega)$ and every $\varphi\in C_c^\infty(\Omega)$ the distribution $Lw$ pairs as $\langle Lw,\varphi\rangle=a(w,\varphi)$; the calculation below retains the bounded drift term, and does not require it to vanish.

[F3] [[def-wkp-zero-as-a-sobolev-closure]], [[def-test-function-space-d-of-an-open-set]]: $H^1_0(\Omega)$ is the closure of $C_c^\infty(\Omega)$ in the $H^1$ norm, so $C_c^\infty(\Omega)$ is dense in $H^1_0(\Omega)$; every $H^1$ class vanishing almost everywhere outside a compact subset of $\Omega$ lies in $H^1_0(\Omega)$: extend it by zero using [[lem-compact-support-zero-extension-in-wkp]], approximate the extension by [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], and multiply the approximants by a fixed interior smooth cutoff equal to one near its support ([[lem-test-function-cutoffs-and-euclidean-localization]], [[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]]). The resulting interior tests converge in $H^1$.

[F4] [[lem-positive-part-is-an-admissible-weak-test-by-truncation]]: truncations and compactly supported cutoff products have the stated $H^1$/$H^1_0$ membership and gradient formulas. Its weak-test interface extends a local inequality to a cutoff test when the local source is in $L^2$, and permits a global $H^1_0$ test when the source functional is continuous on $H^1_0$; it does not pair a general $L^1_{\mathrm{loc}}$ source with an arbitrary $H^1_0$ function.

[F5] [[lem-weak-leibniz-rule-with-a-smooth-factor]]: for $\eta\in C_c^\infty(\Omega)$ and $z\in H^1(\Omega)$ the product $\eta z$ lies in $H^1(\Omega)$ with $D(\eta z)=\eta\,Dz+z\,D\eta$ a.e.

[F6] [[def-uniformly-elliptic-divergence-form-operator]]: uniform ellipticity gives $a^{ij}D_jwD_iw\ge\theta|Dw|^2\ge0$ a.e. for every real $w\in H^1(\Omega)$.

[F7] [[thm-dominated-convergence]]: if measurable functions converge pointwise a.e. and are dominated in absolute value by one integrable function, their integrals converge.

[F8] [[lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions]]: an $L^2$ class whose pairings with all nonnegative test functions are nonnegative is itself nonnegative almost everywhere.

[F9] [[def-l-p-space-as-a-quotient-by-null-functions]], [[thm-holder-inequality-for-integrals]]: for $h\in L^2(\Omega)$ and $\varphi\in C_c^\infty(\Omega)$ the product $h\varphi$ is in $L^1(\Omega)$, and $h\mathbf 1_E\le h^+$ pointwise for every measurable set $E$, with both classes in $L^2(\Omega)$; all pointwise statements are read on representatives and hold a.e. independently of the representative.

[F10] The reaction $\Lambda_u(v)=a(u,v)-\int_\Omega fv$ is a bounded functional on $H^1_0(\Omega)$: boundedness of $a$ is [F2], and $f\in L^2$ acts continuously by Cauchy--Schwarz and $\|v\|_{L^2}\le\|v\|_{H^1}$. Under the real specialization of [[def-h-minus-one-as-the-dual-of-h-one-zero]], this is exactly an $H^{-1}$ source functional, so the global test-extension clause of [F4] applies.

## Proof

**Proof technique:** direct.

**Given:** The setting above, the obstacle solution $u\in K$, the class $w:=u-\psi\in H^1_0(\Omega;\mathbb R)$, and the reaction functional $\Lambda(v):=a(u,v)-F(v)$ defined on $H^1_0(\Omega)$.

1.1 For every $q\in H^1_0(\Omega;\mathbb R)$ with $q\ge0$ a.e. one has $u+q\in K$, because $u+q\in H^1_0(\Omega)$ and $(u+q)-\psi=w+q\ge0$ a.e. by [F1]; testing the variational inequality [F1] at $v=u+q$ gives $\Lambda(q)\ge0$. [given, F1]

1.2 The classes $w=u-\psi$ and $q=w$ satisfy $w\in H^1_0(\Omega)$ and $w\ge0$ a.e. by [F1]. For every $v\in C_c^\infty(\Omega)$ the definition of $L\psi$ gives $a(\psi,v)=\langle L\psi,v\rangle=\int_\Omega(L\psi)v$ [F2]; both $v\mapsto a(\psi,v)$ and $v\mapsto\int_\Omega(L\psi)v$ are bounded linear functionals on $H^1_0(\Omega)$ — the first by [F2], the second because $\|v\|_{L^2}\le\|v\|_{H^1}$ and $L\psi\in L^2$ — and they agree on the dense subspace $C_c^\infty(\Omega)$ [F3], so they agree on all of $H^1_0(\Omega)$. Hence, for every $v\in H^1_0(\Omega)$, $\Lambda(v)=a(w,v)+\int_\Omega hv$ by bilinearity of $a$ and $u=w+\psi$. [given, F1, F2, F3, F9]

1.3 Testing the variational inequality at $v=\psi\in K$ gives $a(u,\psi-u)\ge F(\psi-u)$, that is $-\Lambda(w)\ge0$ or $\Lambda(w)\le0$; testing at $v=u+w=2u-\psi\in K$, which is admissible because $(2u-\psi)-\psi=2w\ge0$ a.e., gives $\Lambda(w)\ge0$. Hence $\Lambda(w)=0$. [given, F1]

1.4 For $\delta>0$ put $\theta_\delta:=(1-w/\delta)^+=\delta^{-1}(w-\delta)^-$ and $m_\delta:=1-\theta_\delta=\min\{w/\delta,1\}$; these are the truncations of [F4] at the level $\delta$, so $\theta_\delta,m_\delta\in H^1(\Omega;\mathbb R)$ with $0\le\theta_\delta,m_\delta\le1$, $m_\delta=w/\delta$ on $\{w\le\delta\}$, and
$$D\theta_\delta=-\delta^{-1}\mathbf 1_{\{0<w<\delta\}}Dw,\qquad Dm_\delta=\delta^{-1}\mathbf 1_{\{0<w<\delta\}}Dw\quad\text{a.e.},$$
the indicator being restricted to $\{0<w<\delta\}$ because $Dw=0$ a.e. on the level set $\{w=0\}$ [F4]; moreover $Dw=0$ a.e. on $E:=\{w=0\}$. [given, F4]

2.1 Let $\varphi\in C_c^\infty(\Omega)$ with $\varphi\ge0$ and let $\delta>0$. The products $\varphi m_\delta$ and $(\|\varphi\|_\infty/\delta)w-\varphi m_\delta$ lie in $H^1_0(\Omega)$ by [F3] and [F5], and both are nonnegative a.e.: the first because $\varphi\ge0$ and $m_\delta\ge0$, the second because $\varphi m_\delta\le\|\varphi\|_\infty m_\delta\le(\|\varphi\|_\infty/\delta)w$. The global H$^{-1}$ test clause of [F4] applies by [F10]; independently, [F1] states the obstacle variational inequality for every such $H^1_0$ competitor. Thus step 1.1 gives $\Lambda(\varphi m_\delta)\ge0$ and $\Lambda\bigl((\|\varphi\|_\infty/\delta)w-\varphi m_\delta\bigr)\ge0$; by linearity and $\Lambda(w)=0$ of step 1.3 the second inequality reads $-\Lambda(\varphi m_\delta)\ge0$. Hence $\Lambda(\varphi m_\delta)=0$, and since $\varphi\theta_\delta=\varphi-\varphi m_\delta$, linearity gives $\Lambda(\varphi\theta_\delta)=\Lambda(\varphi)$. [step 1.1, step 1.3, F1, F3, F4, F5, F10]

2.2 Expanding the form and using $D(\varphi\theta_\delta)=\theta_\delta D\varphi+\varphi D\theta_\delta$ [F5] and the decomposition of step 1.2, for every $\varphi\in C_c^\infty(\Omega)$ and $\delta>0$ one has
$$\Lambda(\varphi\theta_\delta)=\int_\Omega\theta_\delta a^{ij}D_jwD_i\varphi-\delta^{-1}\int_{\{0<w<\delta\}}\varphi\,a^{ij}D_jwD_iw+\int_\Omega b^iD_iw\,\varphi\theta_\delta+\int_\Omega cw\varphi\theta_\delta+\int_\Omega h\varphi\theta_\delta .$$
[step 1.2, step 1.4, F5]

3.1 Fix $\varphi\in C_c^\infty(\Omega)$ with $\varphi\ge0$ and abbreviate the five terms of step 2.2 as $A_\delta$, $-T_\delta$, $B_\delta$, $C_\delta$, $H_\delta$, so that $\Lambda(\varphi)=\Lambda(\varphi\theta_\delta)=A_\delta-T_\delta+B_\delta+C_\delta+H_\delta$ by steps 2.1 and 2.2, with $T_\delta\ge0$ because $\varphi\,a^{ij}D_jwD_iw\ge\theta\varphi|Dw|^2\ge0$ a.e. by [F6]. As $\delta\downarrow0$: $A_\delta\to0$ by [F7], since $\theta_\delta\to\mathbf 1_E$ a.e., $|{\theta_\delta a^{ij}D_jwD_i\varphi}|\le nM_a|Dw||D\varphi|\in L^1(\Omega)$, and $Dw=0$ a.e. on $E$; $B_\delta\to0$ by [F7], since $|b^iD_iw\varphi\theta_\delta|\le nM_b|Dw||\varphi|$ is integrable and the pointwise limit vanishes on $E$ via $Dw=0$ a.e. there; $C_\delta\to0$ by [F7], since $|cw\varphi\theta_\delta|\le M_c|\varphi|\,\delta/4\le M_c|\varphi|/4$ for $\delta\le1$ and $w\theta_\delta\le\delta/4$; and $H_\delta\to\int_Eh\varphi$ by [F7], since $h\varphi$ is integrable [F9] and $\theta_\delta\to\mathbf 1_E$ a.e. Therefore $T_\delta=A_\delta+B_\delta+C_\delta+H_\delta-\Lambda(\varphi)$ converges to $\int_Eh\varphi-\Lambda(\varphi)$, and $T_\delta\ge0$ gives $\int_Eh\varphi\ge\Lambda(\varphi)$; with $\Lambda(\varphi)\ge0$ from step 1.1, $0\le\Lambda(\varphi)\le\int_Eh\varphi$. [step 1.1, step 2.1, step 2.2, F6, F7, F9]

4.1 The class $g:=h\mathbf 1_E$ lies in $L^2(\Omega)$ by [F9], and step 3.1 gives $\int_\Omega g\varphi=\int_Eh\varphi\ge\Lambda(\varphi)\ge0$ for every $\varphi\in C_c^\infty(\Omega)$ with $\varphi\ge0$; by [F8] therefore $g\ge0$ a.e. on $\Omega$, that is $h\ge0$ a.e. on $E$. [step 3.1, F8, F9]

5.1 For every $\varphi\in C_c^\infty(\Omega)$ with $\varphi\ge0$ one has $\int_Eh\varphi=\int_\Omega(h\mathbf 1_E)\varphi\le\int_\Omega h^+\varphi$ because $h\mathbf 1_E\le h^+$ pointwise [F9], while steps 1.1 and 3.1 give $0\le\Lambda(\varphi)\le\int_Eh\varphi$; hence $0\le\Lambda(\varphi)\le\int_\Omega h^+\varphi$ for every nonnegative test function, which is precisely the distributional statement $0\le\Lambda_u\le(L\psi-f)^+$. Countable Choice is consumed through the existence theorem [F1], the density of $C_c^\infty(\Omega)$ in $H^1_0(\Omega)$ [F3] and the sign lemma [F8], and the Axiom of Choice through the ACL-based truncation calculus [F4] and the trace conventions of the obstacle setting [F1]; no further choice principle is used. [step 1.1, step 3.1, step 4.1, F1, F3, F4, F8, F9] ∎

## Source note

The cited article [OU] proves the Lewy–Stampacchia inequality in the entropy-solution class under a hypothesis that the obstacle’s positive part is bounded and without lower-order terms; it corroborates the principal-part case but is not used to justify the bounded drift and potential terms, which are handled here by the explicit truncation calculation above. The additional hypothesis that $L\psi$ be represented by an $L^2$ function is what makes $h=L\psi-f$ an honest $L^2$ object and the upper bound an $L^2$ function.
