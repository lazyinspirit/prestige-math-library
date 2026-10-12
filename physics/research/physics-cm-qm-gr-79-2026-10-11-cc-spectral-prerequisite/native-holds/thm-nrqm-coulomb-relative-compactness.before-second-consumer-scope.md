---
id: thm-nrqm-coulomb-relative-compactness
aliases: [nrqm-coulomb-coulomb-relative-compactness]
kind: theorem
domain: mathematics
title: "Coulomb relative compactness"
status: draft
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-coulomb-three-dimensional-hardy-bound, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-relative-compactness-with-respect-to-an-operator, def-relative-boundedness-with-respect-to-an-operator, def-compact-linear-operator, def-nrqm-coulomb-ltwo-kernel-operators, lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, thm-self-adjoint-resolvent-estimate, thm-plancherel, def-fourier-transform-on-l-one-of-rn, cor-schwartz-convolution-and-product-transform-laws, def-schwartz-space-and-its-seminorms, lem-schwartz-space-is-dense-in-l-two, thm-norm-limit-of-compact-operators-is-compact, thm-tonelli-theorem-for-sigma-finite-product-spaces, cor-cauchy-schwarz-inequality-for-l-two, thm-dominated-convergence, lem-compositions-with-a-compact-operator-are-compact, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-relative-compactness-with-respect-to-an-operator: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-compact-linear-operator: mathematical-premise
  def-nrqm-coulomb-ltwo-kernel-operators: mathematical-premise
  lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  thm-plancherel: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  cor-schwartz-convolution-and-product-transform-laws: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-schwartz-space-is-dense-in-l-two: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-compositions-with-a-compact-operator-are-compact: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.4 pp. 145-149 (relatively compact operators, the discrete and essential spectrum (6.27)-(6.28), and Weyl's theorem) and Section 10.1 pp. 221-222 (Theorem 10.2: V in L^infinity_infinity + L^2 is relatively compact with respect to H_0)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis (ETH lecture notes, 2017), Section 5.2.3 pp. 224-227 (the spectrum of a compact operator) and Section 5.3.4 pp. 243-246 (the spectrum of a self-adjoint operator)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, let
$H_0=-\Delta$ with $D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$ be the free operator
of [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]],
let $M u=u/|\cdot|$ be the multiplier of
[[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] with $D(M)\supseteq D(H_0)$,
and let $V:=-\gamma M$, so that $Vf=-\gamma f/|\cdot|$. For $z\notin\mathbb R$
write $R_0(z):=(H_0-z)^{-1}$
([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]],
[[thm-self-adjoint-resolvent-estimate]]). Then:

(a) for every $z\notin\mathbb R$ there holds $R_0(z)=\mathcal F_2^*M_{m_z}\mathcal F_2$ with $m_z(\xi):=(4\pi^2|\xi|^2-z)^{-1}\in L^2(\mathbb R^3)$, and $\|R_0(z)f\|_\infty\le\|m_z\|_2\|f\|_2$ for every $f\in L^2(\mathbb R^3)$;

(b) for every $z\notin\mathbb R$ there is $g_z\in L^2(\mathbb R^3)$ with $R_0(z)f=g_z*f$ for every $f\in L^2$;

(c) for every bounded measurable $\chi$ with compact support the operator $M_\chi R_0(z)$ is Hilbert–Schmidt, hence compact;

(d) $V$ is $H_0$-compact ([[def-relative-compactness-with-respect-to-an-operator]]): $V$ is graph-norm bounded with respect to $H_0$ and $VR_0(z)$ is a compact operator for one, equivalently every, $z\notin\mathbb R$; explicitly $VR_0(z)=-\gamma M R_0(z)$ is compact.

No statement is made about compactness of $M$ itself, about point spectrum or
about any other spectral property of $H_0+V$; no physical interpretation is
asserted.

## Facts & Assumptions

**Given:** the self-adjoint free operator $H_0=-\Delta$ with $D(H_0)=W^{2,2}(\mathbb R^3;\mathbb C)$; the multiplier $M$; the number $\gamma>0$; a nonreal $z$; a bounded compactly supported $\chi$.

[F1] $H_0=\mathcal F_2^*M_{4\pi^2|\xi|^2}\mathcal F_2$ is self-adjoint with $D(H_0)=\{f:|\xi|^2\mathcal F_2f\in L^2\}=W^{2,2}(\mathbb R^3;\mathbb C)$ (as a set, with equivalent norms), and $H_0\ge0$ ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[def-relative-boundedness-with-respect-to-an-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F2] $M$ is self-adjoint with $D(H_0)\subseteq D(M)$ and $H_0$-bound zero: for every $\eta>0$, $\|Mf\|_2\le\eta\|H_0f\|_2+\eta^{-1}\|f\|_2$ ([[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] (b), [[def-relative-boundedness-with-respect-to-an-operator]]).

[F3] $\mathcal F_2$ is unitary on $L^2$ and extends the $L^1$ transform $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$ ([[thm-plancherel]], [[def-fourier-transform-on-l-one-of-rn]]).

[F4] For Schwartz $f,g$ the convolution $f*g$ is Schwartz and $\mathcal F_2(f*g)=\widehat f\widehat g$ ([[cor-schwartz-convolution-and-product-transform-laws]], [[def-schwartz-space-and-its-seminorms]]).

[F5] If $k\in L^2(\mathbb R^3\times\mathbb R^3;\mathbb C)$ then the kernel operator $T_k$ of [[def-nrqm-coulomb-ltwo-kernel-operators]] is defined on all of $L^2$, is bounded with $\|T_kf\|_2\le\|k\|_2\|f\|_2$, and is compact; in particular it is a Hilbert–Schmidt operator in the sense of that definition ([[lem-nrqm-coulomb-ltwo-kernel-operators-bounded-and-compact]]).

[F6] For nonnegative product-measurable functions the iterated and double integrals agree ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F7] Cauchy-Schwarz and dominated convergence in their $L^2$ and integral forms ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-dominated-convergence]]).

[F8] If $T$ is compact and $B$ is bounded then $BT$ is compact ([[lem-compositions-with-a-compact-operator-are-compact]], [[def-compact-linear-operator]]).

[F9] A uniform limit of compact operators is compact ([[thm-norm-limit-of-compact-operators-is-compact]]).

[F10] The Schwartz classes are dense in $L^2(\mathbb R^3;\mathbb C)$ ([[lem-schwartz-space-is-dense-in-l-two]]).

## Proof

1.1 [The resolvent as a Fourier multiplier] Fix $z\notin\mathbb R$ and define $m_z(\xi):=(4\pi^2|\xi|^2-z)^{-1}$. Since $|4\pi^2|\xi|^2-z|\ge|\operatorname{Im}z|$ one has $|m_z(\xi)|\le|\operatorname{Im}z|^{-1}$ everywhere; and whenever $4\pi^2|\xi|^2\ge2|\operatorname{Re}z|$ one has $|4\pi^2|\xi|^2-z|\ge4\pi^2|\xi|^2-|\operatorname{Re}z|\ge\tfrac12\,4\pi^2|\xi|^2$, so that $|m_z(\xi)|\le\frac1{2\pi^2|\xi|^2}$. With $\rho>0$ defined by $4\pi^2\rho^2=2|\operatorname{Re}z|$ this yields $\int_{\mathbb R^3}|m_z|^2\le|\operatorname{Im}z|^{-2}\,|B(0,\rho)|+\frac1{4\pi^4}\int_{|\xi|>\rho}|\xi|^{-4}d\xi<\infty$, because $\int_{|\xi|>\rho}|\xi|^{-4}d\xi=4\pi\int_\rho^\infty r^{-2}dr$; so $m_z\in L^2(\mathbb R^3)$; moreover $m_z(\xi)(4\pi^2|\xi|^2-z)=1$ for a.e. $\xi$. Define $R_0(z):=\mathcal F_2^*M_{m_z}\mathcal F_2$; then for $f\in L^2$ the vector $R_0(z)f$ lies in $D(H_0)$, because $|\xi|^2m_z(\xi)\mathcal F_2f(\xi)=\mathcal F_2f(\xi)+zm_z(\xi)\mathcal F_2f(\xi)$ is a sum of two $L^2$ functions, and $(H_0-z)R_0(z)f=f$ since $\mathcal F_2((H_0-z)R_0(z)f)=(4\pi^2|\xi|^2-z)m_z(\xi)\mathcal F_2f=\mathcal F_2f$; conversely for $g\in D(H_0)$ the function $(4\pi^2|\xi|^2-z)\mathcal F_2g$ is in $L^2$, so $R_0(z)(H_0-z)g$ is defined and its transform is $m_z(\xi)(4\pi^2|\xi|^2-z)\mathcal F_2g=\mathcal F_2g$. Hence $R_0(z)=(H_0-z)^{-1}$ and $\|R_0(z)\|\le|\operatorname{Im}z|^{-1}$. [F1, F3, given, algebra]

2.1 [$L^\infty$ bound of the free resolvent] For Schwartz $f$ the function $m_z\mathcal F_2f$ lies in $L^1\cap L^2$, so $R_0(z)f$ has the everywhere-defined representative $x\mapsto\int m_z(\xi)\mathcal F_2f(\xi)e^{2\pi ix\cdot\xi}d\xi$, whose modulus is at most $\|m_z\|_2\|\mathcal F_2f\|_2=\|m_z\|_2\|f\|_2$ by [F7]. For general $f\in L^2$ choose Schwartz $f_n\to f$ in $L^2$; then $R_0(z)f_n\to R_0(z)f$ in $L^2$ and $\|R_0(z)f_n-R_0(z)f_m\|_\infty\le\|m_z\|_2\|f_n-f_m\|_2$, so the representatives converge uniformly to a bounded function $h$ with $\|h\|_\infty\le\|m_z\|_2\|f\|_2$; uniform convergence gives $L^2_{\mathrm{loc}}$ convergence and hence $h=R_0(z)f$ a.e., so $\|R_0(z)f\|_\infty\le\|m_z\|_2\|f\|_2$. [step 1.1, F3, F4, F7, algebra]

2.2 [Convolution kernel] Put $g_z:=\mathcal F_2^*m_z\in L^2$ by [F3]. We first prove $R_0(z)f=g_z*f$ for Schwartz $f$. Choose Schwartz functions $\varphi_n$ with $\varphi_n\to g_z$ in $L^2$ ([F10]). For every $n$ both $\varphi_n$ and $f$ are Schwartz, so [F4] gives $\mathcal F_2(\varphi_n*f)=\widehat{\varphi_n}\widehat f$; here $\widehat{\varphi_n}\to\mathcal F_2g_z=m_z$ in $L^2$ by the isometry [F3], while $|\widehat f(\xi)|\le\|f\|_1<\infty$ for every $\xi$ by the defining integral of the $L^1$ transform [F3] and the integrability of the Schwartz function $f$; hence $\mathcal F_2(\varphi_n*f)=\widehat{\varphi_n}\widehat f\to m_z\widehat f=\mathcal F_2(R_0(z)f)$ in $L^2$. Since $\mathcal F_2$ is an isometry, $\varphi_n*f\to R_0(z)f$ in $L^2$. On the other hand $\varphi_n*f\to g_z*f$ in $L^2$: for $h:=\varphi_n-g_z$ and a.e. $x$, $\int|h(x-y)||f(y)|dy=\int|h(x-y)|\sqrt{|f(y)|}\sqrt{|f(y)|}dy\le\bigl(\int|h(x-y)|^2|f(y)|dy\bigr)^{1/2}\|f\|_1^{1/2}$ by [F7], so Tonelli [F6] gives $\|h*f\|_2^2\le\|f\|_1\iint|h(x-y)|^2|f(y)|dydx=\|f\|_1^2\|h\|_2^2\to0$. Therefore $R_0(z)f=g_z*f$ for Schwartz $f$. This identity also gives $\|g_z*f\|_2=\|R_0(z)f\|_2=\|m_z\mathcal F_2f\|_2\le\|m_z\|_\infty\|f\|_2$ for Schwartz $f$, so $f\mapsto g_z*f$ is bounded on the dense subspace of Schwartz classes and extends uniquely to a bounded operator on $L^2$ by [F10], and this extension agrees with the bounded operator $R_0(z)$ on the dense subspace; hence $R_0(z)f=g_z*f$ for every $f\in L^2$. [step 1.1, F3, F4, F6, F7, F10, algebra]

3.1 [Localized resolvent is Hilbert–Schmidt] Let $\chi$ be bounded with compact support. By step 2.2, $M_\chi R_0(z)f=\chi\cdot(g_z*f)$, so the operator $M_\chi R_0(z)$ has the kernel $k(x,y):=\chi(x)g_z(x-y)$. The function $k$ is product-measurable and $\int\int|k(x,y)|^2dx\,dy=\int|\chi(x)|^2\Bigl(\int|g_z(x-y)|^2dy\Bigr)dx=\|\chi\|_2^2\|g_z\|_2^2<\infty$ by [F6]; hence $M_\chi R_0(z)=T_k$ is Hilbert–Schmidt in the sense of [[def-nrqm-coulomb-ltwo-kernel-operators]] and compact by [F5]. [step 2.2, F5, F6, algebra]

3.2 [Short-range and tail estimates] For $\varepsilon>0$ let $B_\varepsilon:=\{x:|x|<\varepsilon\}$. By step 2.1, $\|M_{\gamma|\cdot|^{-1}\mathbf 1_{B_\varepsilon}}R_0(z)f\|_2\le\gamma\Bigl(\int_{B_\varepsilon}|x|^{-2}dx\Bigr)^{1/2}\|R_0(z)f\|_\infty\le\gamma\sqrt{4\pi\varepsilon}\,\|m_z\|_2\|f\|_2$, so the operator norm is at most $\gamma\sqrt{4\pi\varepsilon}\|m_z\|_2$. For $R>0$, $\|M_{\gamma|\cdot|^{-1}\mathbf 1_{\{|x|>R\}}}R_0(z)\|\le\gamma R^{-1}\|R_0(z)\|\le\gamma R^{-1}|\operatorname{Im}z|^{-1}$. [step 2.1, F2, F3, given, algebra]

4.1 [Compactness of $MR_0(z)$] Fix $R>\varepsilon>0$ and choose a bounded measurable $\chi$ with $0\le\chi\le1$, $\chi=1$ on $\{\varepsilon\le|x|\le R\}$ and $\chi=0$ off $\{\varepsilon/2\le|x|\le2R\}$; this is possible with compact support. Since $\chi=1$ on the closed annulus $\{\varepsilon\le|x|\le R\}$, the function $1-\chi$ vanishes there and satisfies the pointwise domination $0\le\gamma\frac{1-\chi(x)}{|x|}\le\gamma\frac{\mathbf 1_{B_\varepsilon}(x)}{|x|}+\gamma\frac{\mathbf 1_{\{|x|>R\}}(x)}{|x|}$. Hence $\gamma MR_0(z)=M_{\gamma|\cdot|^{-1}\chi}R_0(z)+M_{\gamma|\cdot|^{-1}(1-\chi)}R_0(z)$, where the first summand is compact by step 3.1 and the second has operator norm at most $\gamma\sqrt{4\pi\varepsilon}\|m_z\|_2+\gamma R^{-1}|\operatorname{Im}z|^{-1}$ by step 3.2, because its multiplier is pointwise dominated by the sum of the two multipliers of step 3.2. Given $\delta>0$ choose $\varepsilon$ and $R$ making this bound smaller than $\delta$. Thus $\gamma MR_0(z)$ lies within $\delta$ of a compact operator for every $\delta>0$, hence is compact by [F9]. [step 3.1, step 3.2, F9, algebra]

5.1 [Conclusion] By step 4.1 and [F8], $VR_0(z)=-\gamma MR_0(z)$ is compact; the graph-norm boundedness of $V$ with respect to $H_0$ is [F2]. Hence $V$ is $H_0$-compact in the sense of [[def-relative-compactness-with-respect-to-an-operator]], and the equivalent formulations in (a)–(c) are steps 1.1, 2.1, 2.2 and 3.1. [step 4.1, F2, F8] ∎
