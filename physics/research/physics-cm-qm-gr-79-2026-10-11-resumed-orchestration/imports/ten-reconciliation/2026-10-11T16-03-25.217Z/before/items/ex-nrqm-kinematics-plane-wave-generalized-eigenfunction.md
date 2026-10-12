---
id: ex-nrqm-kinematics-plane-wave-generalized-eigenfunction
aliases: [nrqm-kinematics-plane-wave-generalized-eigenfunction]
kind: example
domain: mathematics
title: "The plane wave as a generalized momentum eigenfunctional"
status: draft
origin: session
dependency_level: 0
deps: [cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space, def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-fourier-transform-on-l-one-of-rn, def-schwartz-space-and-its-seminorms, lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set, lem-weak-derivatives-are-polynomial-fourier-multipliers, thm-monotone-convergence-for-the-integral, thm-plancherel]
dependency_roles:
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-plancherel: mathematical-premise
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

(a) $u_{k}$ is well defined, conjugate-linear, and bounded in every Schwartz
seminorm in the sense that
$$|u_{k}(\varphi)|\le\int_{\mathbb R^{d}}|\varphi(x)|\,dx<\infty;$$
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

[L4] **Density and monotone convergence.** $C_{c}^{\infty}(\mathbb R^{d};\mathbb C)$ is dense in $L^{2}(\mathbb R^{d};\mathbb C)$, and if $h\in L^{2}$ satisfies $\int h\overline{v}=0$ for all $v\in C_{c}^{\infty}$ then $h=0$ ([[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]); integrals of nonnegative measurable functions on expanding boxes converge to the full integral ([[thm-monotone-convergence-for-the-integral]]).

## Verification

**Proof technique:** direct; identify the functional with the $L^{1}$ Fourier transform of the conjugate test class, use the Fourier multiplier identity for the eigenrelation, and use the density of test classes and the non-integrability of the constant modulus to rule out an $L^{2}$ representative.

**Given:** The data of the example and [L1]-[L4].

1.1 [Well-definedness and continuity] For $\varphi\in\mathcal S$ the product $e^{ik\cdot x}\overline{\varphi(x)}$ has modulus $|\varphi(x)|$ by [L3] and is measurable, so the integral converges absolutely by [L1]: $|u_{k}(\varphi)|\le\int|\varphi|<\infty$. Conjugate-linearity in $\varphi$ is immediate from the definition, and $u_{k}(\varphi) =\int\overline{\varphi(x)}e^{-2\pi ix\cdot(-k/2\pi)}dx =\mathcal F_{2}(\overline{\varphi})(-k/(2\pi))$ by [L1] applied to the Schwartz class $\overline{\varphi}$. This proves (a). [L1, L3, algebra]

2.1 [Eigenrelation] Let $\varphi\in\mathcal S$ and put $\psi:=\overline{\varphi}$, a Schwartz class. Since $\overline{P_{j}\varphi}=\overline{-i\hbar\partial_{j}\varphi} =i\hbar\,\partial_{j}\overline{\varphi}=i\hbar\,\partial_{j}\psi$, one has $u_{k}(P_{j}\varphi)=\int e^{ik\cdot x}\overline{P_{j}\varphi}\,dx =i\hbar\int e^{ik\cdot x}\partial_{j}\psi(x)\,dx =i\hbar\,\mathcal F_{2}(\partial_{j}\psi)\Bigl(-\frac{k}{2\pi}\Bigr),$ where the last step evaluates the $L^{1}$ transform at $-k/(2\pi)$. By [L2], $\mathcal F_{2}(\partial_{j}\psi)(\xi)=2\pi i\xi_{j}\mathcal F_{2}\psi(\xi)$ for every $\xi$, so at $\xi=-k/(2\pi)$, $u_{k}(P_{j}\varphi)=i\hbar\cdot2\pi i\Bigl(-\frac{k_{j}}{2\pi}\Bigr)\mathcal F_{2}\psi\Bigl(-\frac{k}{2\pi}\Bigr) =\hbar k_{j}\,u_{k}(\varphi),$ using step 1.1. Applying the same identity to $P_{j}\varphi$ (again a Schwartz class) gives $u_{k}(P_{j}^{2}\varphi)=\hbar k_{j}u_{k}(P_{j}\varphi) =(\hbar k_{j})^{2}u_{k}(\varphi)$. This proves (b). [step 1.1, L1, L2, algebra]

2.2 [No $L^{2}$ representative] Suppose $F\in L^{2}$ satisfies $\int F\overline{\varphi}=u_{k}(\varphi)$ for all $\varphi\in\mathcal S$, and put $G:=e^{-ik\cdot x}F\in L^{2}$, a class of the same norm because the multiplier has modulus one [L3]. Replacing $\varphi$ by $e^{ik\cdot x}\varphi$, which is again a Schwartz class, in the assumed identity gives $\int G\,\overline{\varphi} =\int F\,\overline{e^{ik\cdot x}\varphi} =u_{k}\bigl(e^{ik\cdot x}\varphi\bigr) =\int e^{ik\cdot x}\overline{e^{ik\cdot x}\varphi}\,dx =\int\overline{\varphi},$ that is $\int(G-1)\overline{\varphi}=0$ for every $\varphi\in\mathcal S$ and hence for every $\varphi\in C_{c}^{\infty}$; by [L4] the class $G-1\in L^{2}$ vanishes, so $G=1$ almost everywhere. But then $\int_{\mathbb R^{d}}|G|^{2}=\int_{\mathbb R^{d}}1=+\infty$ by monotone convergence on expanding boxes [L4], contradicting $G\in L^{2}$. Hence no such $F$ exists. Applying the same computation to $F=ze^{ik\cdot x}$ for $z\in\mathbb C\setminus\{0\}$ shows that no nonzero scalar multiple is represented either. This proves (c). [step 1.1, L3, L4, algebra]

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
