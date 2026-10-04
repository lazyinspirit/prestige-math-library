---
id: cex-size-without-cancellation-does-not-give-a-principal-value-operator
kind: counterexample
title: "Size without cancellation does not give a principal value"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-calderon-zygmund-kernel-and-principal-value-operator, def-maximal-truncated-singular-integral, thm-polar-coordinates-formula-for-lebesgue-measure, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.3.2, conditions (5.3.4)–(5.3.12) and the role of cancellation, printed pp. 358–359"
    - title: "Terence Tao, Math 247A Lecture Notes 4"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Remark 2.5 on the logarithmic Schur-test divergence and the need for cancellation, printed p. 6"
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]).

The positive kernel $k(x)=|x|^{-n}$ satisfies the pointwise size bound
$|k(x)|=|x|^{-n}$, but its symmetric truncations diverge: for
$f=\mathbf 1_{B(0,1)}$ one has
$$T_\varepsilon f(0)=\int_{\varepsilon<|y|<1}|y|^{-n}\,dy=|S^{n-1}|\log\frac1\varepsilon\to\infty \qquad(\varepsilon\downarrow0).$$
Hence the pointwise size condition alone gives neither a principal-value
distribution along this sequence nor a finite maximal truncated operator, and
cancellation needed for principal values is not implied by size, even together with Hörmander smoothness.

## Facts & Assumptions

**Given:** The kernel $k(x)=|x|^{-n}$ on $\mathbb R^n\setminus\{0\}$, the indicator $f=\mathbf 1_{B(0,1)}$, the truncations $T_\varepsilon,T^{(\varepsilon,N)}$ and the maximal operators $T^*,T^{**}$ of [[def-maximal-truncated-singular-integral]], and Countable Choice.

[F1] The polar-coordinates formula identifies $\int_{\mathbb R^n}g(x)\,dx=\int_0^\infty\int_{S^{n-1}}g(r\theta)\,d\sigma_{n-1}(\theta)\,r^{n-1}dr$ for Borel $g\ge0$, with $\sigma_{n-1}(S^{n-1})=|S^{n-1}|$ the surface measure of the unit sphere ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F2] For $f\in L^p$, $1\le p<\infty$, and $k$ with $|k(x)|\le A_1|x|^{-n}$, the truncations $T_\varepsilon f(x)$ and $T^{(\varepsilon,N)}f(x)$ are absolutely convergent for every $x$, and the maximal operators are $T^*f(x)=\sup_{\varepsilon>0}|T_\varepsilon f(x)|$, $T^{**}f(x)=\sup_{0<\varepsilon<N}|T^{(\varepsilon,N)}f(x)|$ ([[def-maximal-truncated-singular-integral]]).

[F3] A principal-value distribution for $k$ is a tempered distribution $W$ agreeing with $k$ on $\mathbb R^n\setminus\{0\}$ for which some sequence $\delta_j\downarrow0$ gives $\langle W,\varphi\rangle=\lim_j\int_{|x|\ge\delta_j}k(x)\varphi(x)\,dx$ for every $\varphi\in\mathcal S(\mathbb R^n)$ ([[def-calderon-zygmund-kernel-and-principal-value-operator]]).

## Counterexample

**Proof technique:** direct.

1.1 Since $k$ obeys the size bound with $A_1=1$ and $f=\mathbf 1_{B(0,1)}\in L^1\cap L^2$, [F2] applies, and polar coordinates [F1] give, for every $0<\varepsilon<1$, $$T_\varepsilon f(0)=\int_{\varepsilon<|y|<1}|y|^{-n}\,dy=\int_\varepsilon^1 r^{-n}|S^{n-1}|r^{n-1}\,dr=|S^{n-1}|\int_\varepsilon^1\frac{dr}{r}=|S^{n-1}|\log\frac1\varepsilon,$$ with $|S^{n-1}|>0$; the doubly truncated integral likewise equals $|S^{n-1}|\log(\min\{1,N\}/\varepsilon)$ for $0<\varepsilon<\min\{1,N\}$, and it vanishes if $\varepsilon\ge1$; fixing $N=2$ and sending $\varepsilon\downarrow0$ proves $T^{**}f(0)=+\infty$. [F1, F2, given, algebra]

2.1 Consequently $\lim_{\varepsilon\downarrow0}T_\varepsilon f(0)=+\infty$: the symmetric truncations do not converge at the origin, and the maximal truncated operator is infinite there, although every individual truncation is finite. [step 1.1, algebra]

3.1 No principal-value distribution for $k$ exists along any sequence $\delta_j\downarrow0$. Indeed, take the nonnegative Schwartz test $\varphi(x)=e^{-|x|^2}$, with $\varphi(0)=1$; by continuity of $\varphi$ there is $\rho>0$ with $\varphi\ge\varphi(0)/2$ on $B(0,\rho)$, so for every $\delta\in(0,\rho)$ polar coordinates give $$\int_{|x|\ge\delta}k(x)\varphi(x)\,dx\ge\int_{\delta<|x|<\rho}|x|^{-n}\frac{\varphi(0)}{2}\,dx=\frac{\varphi(0)}{2}|S^{n-1}|\log\frac\rho\delta,$$ which tends to $+\infty$ as $\delta\downarrow0$; hence the limit in [F3] fails for this $\varphi$ and every sequence $\delta_j\downarrow0$. Together with step 2.1 and [F2] this shows that the pointwise size condition by itself yields neither a principal-value distribution nor a finite maximal truncated operator, so principal-value cancellation is an additional requirement. In fact $k$ also satisfies Hörmander's condition: $|\nabla k(z)|=n|z|^{-n-1}$ gives $|k(x-y)-k(x)|\le n2^{n+1}|y||x|^{-n-1}$ on $|x|\ge2|y|$, whose integral is bounded uniformly in $y$ by polar coordinates. Thus these kernel bounds alone do not assert a principal value or an associated $L^2$-bounded operator. [F1, F2, F3, step 2.1, algebra] ∎
