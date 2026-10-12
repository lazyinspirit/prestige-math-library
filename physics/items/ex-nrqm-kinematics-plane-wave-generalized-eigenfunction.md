---
id: ex-nrqm-kinematics-plane-wave-generalized-eigenfunction
aliases: [nrqm-kinematics-plane-wave-generalized-eigenfunction]
kind: example
domain: mathematics
title: "The plane wave as a generalized momentum eigenfunctional"
status: draft
origin: session
dependency_level: 0
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-fourier-transform-on-l-one-of-rn, def-schwartz-space-and-its-seminorms, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-cauchy-schwarz-in-an-inner-product-space, thm-monotone-convergence-for-the-integral, thm-plancherel, thm-tonelli-theorem-for-sigma-finite-product-spaces]
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.2.3, printed pages 75-76 (PDF pages 78-79): momentum eigenstates, the delta orthogonality relation and the Fourier transform"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave Mechanics', Section 6, printed pages 22-24 (PDF pages 22-24): momentum eigenstates are plane waves and are not normalizable"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
verification:
  precheck: pass
---
## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Fix $d\ge1$,
$\hbar>0$ and $k\in\mathbb R^{d}$, and define on the Schwartz space
$\mathcal S(\mathbb R^{d};\mathbb C)$ of
[[def-schwartz-space-and-its-seminorms]] the conjugate-linear functional
$$u_{k}(\varphi):=\int_{\mathbb R^{d}}e^{ik\cdot x}\,\overline{\varphi(x)}\,dx.$$
Let $\mathcal F_{2}$ be the negative-sign $2\pi$-normalized Fourier transform,
$\mathcal F_{2}\psi(\xi)=\int\psi(x)e^{-2\pi ix\cdot\xi}dx$ on
$L^{1}(\mathbb R^{d};\mathbb C)$
([[def-fourier-transform-on-l-one-of-rn]], [[thm-plancherel]]). Then:

(a) $u_{k}$ is well defined, conjugate-linear and continuous in the Schwartz
topology. Writing $p_{\alpha,0}(\varphi)=\sup_x|x^{\alpha}\varphi(x)|$ for the
seminorms of [[def-schwartz-space-and-its-seminorms]], one has the explicit
bound
$$|u_{k}(\varphi)|\le\int_{\mathbb R^{d}}|\varphi(x)|\,dx\le C_{d}\sum_{\alpha\in\{0,2\}^{d}}p_{\alpha,0}(\varphi),\qquad C_{d}:=\left(\int_{\mathbb R}(1+t^{2})^{-1}\,dt\right)^{d}<\infty;$$
moreover $u_{k}(\varphi)=\mathcal F_{2}\bigl(\overline{\varphi}\bigr)\bigl(-\tfrac{k}{2\pi}\bigr)$
for every $\varphi$;

(b) for every $\varphi\in\mathcal S(\mathbb R^{d};\mathbb C)$ and every
$j\in\{1,\dots,d\}$, with $P_{j}\varphi:=-i\hbar\,\partial_{j}\varphi$ the
componentwise momentum action on Schwartz classes,
$$u_{k}(P_{j}\varphi)=\hbar k_{j}\,u_{k}(\varphi),\qquad u_{k}(P_{j}^{2}\varphi)=(\hbar k_{j})^{2}\,u_{k}(\varphi):$$
the functional is a generalized eigenfunctional of every momentum component
with eigenvalue $\hbar k_{j}$;

(c) there is no $L^{2}$ class $F\in L^{2}(\mathbb R^{d};\mathbb C)$ with
$u_{k}(\varphi)=\int_{\mathbb R^{d}}F(x)\overline{\varphi(x)}\,dx$ for all
$\varphi\in\mathcal S(\mathbb R^{d};\mathbb C)$; in particular the functions
$x\mapsto e^{ik\cdot x}$ and its nonzero scalar multiples are not elements of
$L^{2}(\mathbb R^{d};\mathbb C)$;

(d) the statements are purely mathematical: $u_{k}$ is a conjugate-linear
functional on the Schwartz space, no normalizable class represents it, and no
physical state, preparation or outcome probability is attached to it by this
example.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; $d\ge1$; $\hbar>0$; $k\in\mathbb R^{d}$; Schwartz classes $\varphi,\psi\in\mathcal S(\mathbb R^{d};\mathbb C)$; the functional $u_{k}$; the transform $\mathcal F_{2}$; a class $F\in L^{2}(\mathbb R^{d};\mathbb C)$.

[L1] **Schwartz classes are integrable, and the transform is an automorphism.** $\mathcal S(\mathbb R^{d};\mathbb C)\subseteq L^{1}(\mathbb R^{d};\mathbb C)$ and $\mathcal F_{2}$ maps $\mathcal S$ bijectively onto itself, continuously in the Schwartz topology; on Schwartz classes the transform is the integral $\mathcal F_{2}\psi(\xi)=\int\psi(x)e^{-2\pi ix\cdot\xi}dx$ ([[def-schwartz-space-and-its-seminorms]], [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]], no choice beyond countable choice for the $L^{2}$ extension).

[L2] **Fourier multipliers.** For $\psi\in\mathcal S$ and any coordinate $j$, $\mathcal F_{2}(\partial_{j}\psi)(\xi)=2\pi i\xi_{j}\mathcal F_{2}\psi(\xi)$ for almost every $\xi$; both sides are Schwartz functions, hence continuous, so the identity holds for every $\xi$ ([[lem-weak-derivatives-are-polynomial-fourier-multipliers]], [[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]).

[L3] **Modulus one.** $|e^{i\theta}|=1$ for real $\theta$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]), so $|e^{ik\cdot x}|=1$ for every $x$.

[L4] **Local test-function density.** For every bounded open $\Omega\subseteq\mathbb R^{d}$, $C_{c}^{\infty}(\Omega;\mathbb C)$ is dense in $L^{2}(\Omega;\mathbb C)$; consequently, if $h\in L^{2}(\Omega)$ and $\int_{\Omega}h\overline v=0$ for every $v\in C_{c}^{\infty}(\Omega)$, then $h=0$ in $L^{2}(\Omega)$, by continuity of the $L^{2}$ pairing and density ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[thm-cauchy-schwarz-in-an-inner-product-space]]). Integrals of nonnegative measurable functions on expanding boxes converge to the full integral ([[thm-monotone-convergence-for-the-integral]]).

[L5] **Product weight.** The one-dimensional integral $\int_{\mathbb R}(1+t^{2})^{-1}dt$ is finite, since its integrand is bounded by $1$ on $[-1,1]$ and by $t^{-2}$ for $|t|\ge1$. Tonelli's theorem therefore gives $\int_{\mathbb R^{d}}\prod_{j=1}^{d}(1+x_{j}^{2})^{-1}\,dx=C_{d}<\infty$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

## Verification

**Proof technique:** direct; identify the functional with the $L^{1}$ Fourier transform of the conjugate test class, use the Fourier multiplier identity for the eigenrelation, and use the density of test classes and the non-integrability of the constant modulus to rule out an $L^{2}$ representative.

**Given:** The data of the example and [L1]-[L5].

1.1 [Well-definedness and continuity] For $\varphi\in\mathcal S$, [L3] gives $|e^{ik\cdot x}|=1$, and [L5] plus $\prod_{j}(1+x_j^{2})=\sum_{\alpha\in\{0,2\}^{d}}x^{\alpha}$ gives
$$\int_{\mathbb R^{d}}|\varphi(x)|\,dx\le C_{d}\sum_{\alpha\in\{0,2\}^{d}}p_{\alpha,0}(\varphi)<\infty.$$
Thus the defining integral is absolutely convergent and has the bound in (a). Since this bound is by a finite sum of defining Schwartz seminorms, $u_k$ is continuous in the Schwartz topology. Conjugate-linearity is immediate from the definition, and $u_{k}(\varphi)=\int\overline{\varphi(x)}e^{-2\pi ix\cdot(-k/2\pi)}dx=\mathcal F_{2}(\overline{\varphi})(-k/(2\pi))$ by [L1]. This proves (a). [L1, L3, L5, algebra]

2.1 [Eigenrelation] Let $\varphi\in\mathcal S$ and put $\psi:=\overline{\varphi}$, a Schwartz class. Since $\overline{P_{j}\varphi}=\overline{-i\hbar\partial_{j}\varphi} =i\hbar\,\partial_{j}\overline{\varphi}=i\hbar\,\partial_{j}\psi$, one has $u_{k}(P_{j}\varphi)=\int e^{ik\cdot x}\overline{P_{j}\varphi}\,dx =i\hbar\int e^{ik\cdot x}\partial_{j}\psi(x)\,dx =i\hbar\,\mathcal F_{2}(\partial_{j}\psi)\Bigl(-\frac{k}{2\pi}\Bigr),$ where the last step evaluates the $L^{1}$ transform at $-k/(2\pi)$. By [L2], $\mathcal F_{2}(\partial_{j}\psi)(\xi)=2\pi i\xi_{j}\mathcal F_{2}\psi(\xi)$ for every $\xi$, so at $\xi=-k/(2\pi)$, $u_{k}(P_{j}\varphi)=i\hbar\cdot2\pi i\Bigl(-\frac{k_{j}}{2\pi}\Bigr)\mathcal F_{2}\psi\Bigl(-\frac{k}{2\pi}\Bigr) =\hbar k_{j}\,u_{k}(\varphi),$ using step 1.1. Applying the same identity to $P_{j}\varphi$ (again a Schwartz class) gives $u_{k}(P_{j}^{2}\varphi)=\hbar k_{j}u_{k}(P_{j}\varphi) =(\hbar k_{j})^{2}u_{k}(\varphi)$. This proves (b). [step 1.1, L1, L2, algebra]

2.2 [No $L^{2}$ representative] Suppose $F\in L^{2}$ satisfies $\int F\overline{\varphi}=u_{k}(\varphi)$ for all $\varphi\in\mathcal S$, and put $G:=e^{-ik\cdot x}F\in L^{2}$, a class of the same norm because the multiplier has modulus one [L3]. Multiplication by $e^{ik\cdot x}$ preserves the Schwartz class, since its derivatives are constant multiples of itself and Leibniz's rule expresses every derivative of the product as a finite sum of a polynomial times a derivative of $\varphi$. Replacing $\varphi$ by $e^{ik\cdot x}\varphi$ in the assumed identity gives $\int G\,\overline{\varphi} =\int F\,\overline{e^{ik\cdot x}\varphi} =u_{k}\bigl(e^{ik\cdot x}\varphi\bigr) =\int\overline{\varphi},$ so $\int(G-1)\overline{\varphi}=0$ for every $\varphi\in\mathcal S$. For each $n\ge1$ let $\Omega_n:=(-n,n)^{d}$; the restriction $(G-1)|_{\Omega_n}$ belongs to $L^{2}(\Omega_n)$ because $G\in L^{2}(\mathbb R^{d})$ and $1\in L^{2}(\Omega_n)$. Its pairing with every $v\in C_c^{\infty}(\Omega_n)$ is zero, so [L4] gives $G=1$ almost everywhere on $\Omega_n$. Since $\bigcup_{n\ge1}\Omega_n=\mathbb R^{d}$, it follows that $G=1$ almost everywhere on $\mathbb R^{d}$. But then $\int_{\mathbb R^{d}}|G|^{2}=\int_{\mathbb R^{d}}1=+\infty$ by monotone convergence on expanding boxes [L4], contradicting $G\in L^{2}$. Hence no such $F$ exists. For $z\ne0$, $|ze^{ik\cdot x}|=|z|$ on a set of infinite Lebesgue measure, so no nonzero scalar multiple of the plane wave belongs to $L^{2}$ either. This proves (c). [step 1.1, L3, L4, algebra]

3.1 [Conclusion] Statement (d) records that only Schwartz classes and the functional $u_{k}$ were used; no normalizable class and no probability law is attached to $u_{k}$ by this example. [given, step 1.1, step 2.1, step 2.2] ∎

## Remarks

- **The delta normalization is formal.** Formally writing
  $u_{k}(\varphi)=\int\overline{\varphi(x)}e^{ikx}dx$ as a pairing against
  $e^{ikx}$ suggests the orthogonality symbol $\int e^{i(k-k')x}dx=2\pi\delta(k-k')$
  familiar from physics texts; the functional $u_{k}$ is the precise object,
  and the delta is a formal notation for it, not an $L^{2}$ inner product.
- **Why this is not a state.** By clause (c), no element of $L^{2}$ represents
  $u_{k}$; the framework's state assignment requires a nonzero $L^{2}$ class,
  so the plane wave is not a preparation, and no position or momentum
  probability density attaches to it. The example establishes the
  distributional eigenrelation only.
