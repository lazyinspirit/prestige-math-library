---
id: lem-ip-born-linearization-of-the-scattering-map
kind: lemma
title: The first Born data are the Fréchet linearization at zero contrast
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-banach-space
  - def-countable-choice
  - def-frechet-derivative-between-banach-spaces
  - def-fourier-transform-on-l-one-of-rn
  - def-ip-fixed-frequency-far-field-data
  - lem-complex-norm-realification-is-a-real-norm
  - lem-ip-small-contrast-scattering-map-well-defined
  - lem-volume-integral-operator-well-defined-and-bounded
  - prop-essential-supremum-is-attained-as-the-least-essential-bound
  - thm-complex-lp-completeness-and-almost-everywhere-subsequences
  - thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz
  - thm-volume-integral-scattering-born-neumann-error
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is used through L-infinity completeness, the volume model, and the Neumann-series theorem. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Fioralba Cakoni, David Colton, and Houssem Haddar, Inverse Scattering Theory and Transmission Eigenvalues, CBMS 88"
      url: "https://sites.math.rutgers.edu/~fc292/CCH-Book-Final.pdf"
      locator: "Chapter 1, §1.2, printed pp. 10–11, first Born far-field formula; §1.2.2, pp. 18–19, Fréchet derivative statement"
    - title: "Otmar Scherzer and Leonidas Mindrinos, Inverse Problems: Lecture Notes, University of Vienna, Sommersemester 2015"
      url: "https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf"
      locator: "Chapter 5, §5.2.6, printed pp. 79–82, volume equation and outgoing far-field convention"
    - title: "Semyon Dyatlov, MIT 18.155 Lecture Notes: Distributions, Elliptic Regularity, and Applications to PDEs"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "§11.1.1, Definition 11.1, printed p. 119; frequency rescaling matches the library 2π convention"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the hypotheses and notation of the fixed-frequency far-field definition. For $q\in\mathcal U_{D,k}$ put $\rho=\rho_k(q)$. Uniformly over all incident and observation directions,
$$\sup_{\theta,d\in S^2}\left|\mathcal S_k(q)(\theta,d)-\mathcal B_kq(\theta,d)\right|\le\frac{M}{4\pi}\|q\|_\infty\frac{\rho}{1-\rho}.$$
Whenever $C_D\|q\|_\infty<1$, this implies
$$\sup_{\theta,d\in S^2}\left|\mathcal S_k(q)(\theta,d)-\mathcal B_kq(\theta,d)\right|\le\frac{M C_D}{4\pi}\frac{\|q\|_\infty^2}{1-C_D\|q\|_\infty}.$$
For each fixed $(\theta,d)$, the scalar map $q\mapsto\mathcal S_k(q)(\theta,d)$ on the open domain $\mathcal U_{D,k}$, with $L^\infty(D;\mathbb C)$ and $\mathbb C$ viewed as real Banach spaces, is Fréchet differentiable at $q=0$ and has derivative $h\mapsto\mathcal B_kh(\theta,d)$. The remainder bound is uniform in $(\theta,d)$; it asserts no nonlinear uniqueness or stability result.

## Statement references

[[def-ip-fixed-frequency-far-field-data|The exact scattering family, small-norm domain, and first Born data formula.]]

[[lem-ip-small-contrast-scattering-map-well-defined|The small-norm solution, data integrals, and open contrast domain are well-defined.]]

[[lem-volume-integral-operator-well-defined-and-bounded|The operator-norm estimate $\rho_k(q)\le C_D\|q\|_\infty$.]]

[[thm-volume-integral-scattering-born-neumann-error|For $\rho<1$, the Lippmann–Schwinger solution satisfies the first partial-sum tail bound.]]

[[def-frechet-derivative-between-banach-spaces|Fréchet differentiability means a bounded real-linear first-order approximation with remainder $o(\|h\|)$.]]

[[thm-complex-lp-completeness-and-almost-everywhere-subsequences|Countable Choice makes complex $L^\infty$ complete.]]

[[def-countable-choice|The declared axiom for L-infinity completeness and volume-scattering suppliers.]]

## Facts & Assumptions

**Given:** Countable Choice; the data in the fixed-frequency definition; a contrast $q\in\mathcal U_{D,k}$; and directions $\theta,d\in S^2$.

[F1] The definition fixes $K_{q,k}$, $\rho_k(q)$, $\mathcal S_k(q)$, and $\mathcal B_kq$ on the stated quotient spaces and gives $C_D=\sqrt{M\operatorname{diam}(D)/(4\pi)}$ ([[def-ip-fixed-frequency-far-field-data]]).

[F2] The volume operator is linear in $q$ and obeys $\|K_{q,k}\|_{L^2\to L^2}\le C_D\|q\|_\infty$ ([[lem-volume-integral-operator-well-defined-and-bounded]]).

[F3] For $\rho<1$, the unique solution $u=f+K_{q,k}u$ satisfies $\|u-\sum_{j=0}^{N}K_{q,k}^jf\|_2\le \rho^{N+1}\|f\|_2/(1-\rho)$ ([[thm-volume-integral-scattering-born-neumann-error]]).

[F4] The complex L2 pairing is representative-independent and satisfies Cauchy–Schwarz ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F5] The Fourier transform convention is $\widehat g(\xi)=\int g(y)e^{-2\pi i y\cdot\xi}\,dy$ for $g\in L^1(\mathbb R^3;\mathbb C)$ ([[def-fourier-transform-on-l-one-of-rn]]).

[F6] Under Countable Choice, $L^\infty(D;\mathbb C)$ is complete; realification leaves its norm and metric unchanged. The same completeness fact applies to $\mathbb C$ as a finite-dimensional complex L-infinity space ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[lem-complex-norm-realification-is-a-real-norm]]).

[F7] Between real Banach spaces, a Fréchet derivative is a bounded real-linear map whose remainder divided by the input norm tends to zero ([[def-frechet-derivative-between-banach-spaces]], [[def-banach-space]]).

[F8] For real $t$, $|e^{it}|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F9] A measurable representative of the complex contrast satisfies $|q|\le\|q\|_\infty$ almost everywhere ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[F10] The domain $\mathcal U_{D,k}$ is open and contains zero ([[lem-ip-small-contrast-scattering-map-well-defined]]).

[A1] Countable Choice is assumed through [F3] and [F6] ([[def-countable-choice]]).

## Proof

**Given:** The data above.

1.1 For any $h\in L^\infty(D;\mathbb C)$, [F8] gives $|e^{-ik\theta\cdot y}e^{ikd\cdot y}|=1$ and [F9] gives $\int_D|h|\le M\|h\|_\infty$. The integral definition therefore yields $|\mathcal B_kh(\theta,d)|\le M\|h\|_\infty/(4\pi)$. By [F5] and the Fourier formula in [F1], this integral is the stated Born functional. It is complex-linear in $h$, hence bounded and real-linear for every fixed pair of directions. [F1, F5, F8, F9, given]

1.2 Let $f=f_{k,d}$. By the definition and [F8], $|f|=1$ on $D$, so $\|f\|_2=\sqrt M$. The case $N=0$ of [F3] gives $\|u_{q,k,d}-f\|_2\le\rho\sqrt M/(1-\rho)$. [F1, F3, F8, given]

2.1 Subtracting the integral formulas in [F1] yields $\mathcal S_k(q)(\theta,d)-\mathcal B_kq(\theta,d)=\frac1{4\pi}\int_D e^{-ik\theta\cdot y}q(y)\bigl(u_{q,k,d}(y)-f(y)\bigr)\,dy.$ By [F9], $q(u_{q,k,d}-f)$ has $L^2$ norm at most $\|q\|_\infty\|u_{q,k,d}-f\|_2$. The same unit-modulus calculation as step 1.2, with $d$ replaced by $\theta$, gives $\|e^{ik\theta\cdot(\cdot)}\|_2=\sqrt M$. By [F4], the integral's absolute value is at most $\|q\|_\infty\sqrt M\,\|u_{q,k,d}-f\|_2/(4\pi)$; then [F3] and step 1.2 give the first bound, uniformly in the directions. [F1, F3, F4, F9, step 1.2]

3.1 By [F2], $\rho\le C_D\|q\|_\infty$. When $C_D\|q\|_\infty<1$, monotonicity of $t\mapsto t/(1-t)$ on $[0,1)$ gives $\rho/(1-\rho)\le C_D\|q\|_\infty/(1-C_D\|q\|_\infty)$. Substitution into step 2.1 proves the second bound. [F2, step 2.1, algebra]

4.1 For nonzero $q$ with $C_D\|q\|_\infty<1$, divide the second bound by $\|q\|_\infty$; the quotient is at most $\frac{M C_D}{4\pi}\frac{\|q\|_\infty}{1-C_D\|q\|_\infty}$, which tends to zero as $\|q\|_\infty\to0$. Since [F10] makes zero an interior point, the bounded real-linear map from step 1.1 satisfies the Fréchet remainder criterion [F7], with the Banach-space hypotheses in [F6]. Also $\mathcal S_k(0)=0$ by its definition. Thus $D\mathcal S_k(0)(\theta,d)h=\mathcal B_kh(\theta,d)$ for each fixed pair, with the same remainder estimate uniformly over the full direction family. [A1, F1, F6, F7, F10, step 1.1, step 3.1, algebra] ∎
## Remarks

At zero contrast the first Born data are
$$\mathcal B_kh(\theta,d)=\frac1{4\pi}\widehat{h_0}\!\left(\frac{k}{2\pi}(\theta-d)\right).$$
Thus each fixed-frequency direction pair samples one Fourier frequency on the corresponding Ewald surface. The result is local at $q=0$ and does not extend a derivative or inverse-uniqueness assertion to arbitrary contrasts.

## Fourier-transfer geometry

For fixed $k>0$ and unit directions $d,\theta$, the wavevectors $kd$ and $k\theta$ lie on the radius-$k$ sphere in their span. The arrow from $kd$ to $k\theta$ is exactly $k(\theta-d)$; the Fourier variable in the library's $2\pi$ convention is that chord divided by $2\pi$. The diagram is only a geometric description of the frequency label; the Fréchet estimate above is proved by the integral and norm bounds, not by the drawing.

```tikz
\begin{tikzpicture}[>=stealth,scale=1.2]
  \coordinate (O) at (0,0);
  \coordinate (D) at (2,0);
  \coordinate (T) at (1.2,1.6);
  \draw[gray,dashed] (O) circle (2);
  \draw[->,thick] (O) -- (D) node[midway,below] {$kd$};
  \draw[->,thick] (O) -- (T) node[midway,left] {$k\theta$};
  \draw[->,very thick,blue] (D) -- (T) node[midway,right] {$k(\theta-d)$};
  \node[below left] at (O) {$0$};
\end{tikzpicture}
```
