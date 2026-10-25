---
id: cex-schauder-estimates-fail-at-the-holder-endpoint-alpha-one
kind: counterexample
title: The Schauder estimate fails at the H\"older endpoint $\alpha=1$
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 4
deps: [def-countable-choice, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-newtonian-potential, lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials, thm-harmonic-functions-are-real-analytic, thm-interior-schauder-estimate-for-uniformly-elliptic-equations, thm-newtonian-potential-for-holder-data-is-classical]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Xu-Jia Wang, Schauder Estimates for Elliptic and Parabolic Equations (Australian National University, 2006; complete 7-page note)"
      url: "https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf"
      locator: "§1, Theorem 1 with (1.2)-(1.4): for $f\\in C^{0,1}$ the modulus is only $d(\\sup|u|+\\|f\\|_{C^{0,1}}|\\log d|)$; the remark after Corollary 1 and the discussion in §3.3 record that the estimate is sharp, printed pp. 1-2 and 4-6 (read in full)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014; complete 242-page graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§2.7.1-2.7.2, Theorem 2.26 and Corollary 2.27, and the remark in the proof of Theorem 2.28 that the far-field integral does not converge at infinity when $\\alpha=1$, printed pp. 37-43 (read in full)"
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8, the standing restriction $\\alpha\\in(0,1)$ before Theorem 8.2 and Exercise 8.3 with $\\alpha\\in(0,1]$, printed pp. 139-140 (read in full)"
---

## Statement refuted

The interior Schauder estimate of [[thm-interior-schauder-estimate-for-uniformly-elliptic-equations]] does not extend to the endpoint $\alpha=1$: there is no constant $C<\infty$ such that $[D^2Nf]_{C^{0,1}(\mathbb R^2)}\le C\|f\|_{C^{0,1}(\mathbb R^2)}$ for every compactly supported Lipschitz source $f$ and its Newtonian potential $Nf$. The explicit counterexample below uses a Lipschitz source whose angular profile is the degree-one homogeneous mode $r\cos3\theta$; the second derivatives inherit an $r\log r$ term, which tends to zero but is not Lipschitz at the origin. Wang's theory gives the sharp bound with the logarithm $|x||\log|x||$ and the example shows that this logarithm cannot be removed.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the cut-off function $\chi$ with $\chi=1$ on $[0,1]$, $\chi(r)=2-r$ for $1<r<2$ and $\chi(r)=0$ for $r\ge2$ (with $\chi(r):=0$ for $r<0$), the source $f(x_1,x_2):=\chi(r)\,(x_1^3-3x_1x_2^2)/r^2$ for $r>0$ and $f(0):=0$, the local function $p(r,\theta):=-\tfrac16r^3\log r\cos3\theta$ on $0<r<1$ with $p(0):=0$, and its Newtonian potential $Nf$.

[A1] The only choice principle used is Countable Choice $\mathrm{AC}_\omega$; no full Axiom of Choice is used. ([[def-countable-choice]])

[F1] The Newtonian potential $Nf$ is the convolution integral with the kernel $\Phi$ wherever defined ([[def-newtonian-potential]]); $\Phi$ is the kernel candidate for $-\Delta$, with the sign convention fixed in [[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]]. The pointwise equation $-\Delta Nf=f$ used below is supplied by [F2].

[F2] For $f\in C_c^{0,\alpha}(\mathbb R^2)$, $0<\alpha<1$, the potential $Nf$ is $C^2$ and satisfies $-\Delta Nf=f$ pointwise; the local Hölder classes are those of [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]], and the cancelled representation of the second derivatives is the one of [[lem-cancellation-formula-for-second-derivatives-of-newtonian-potentials]]. ([[thm-newtonian-potential-for-holder-data-is-classical]])

[F3] Harmonic functions are real analytic, so on every compact subset of their domain all partial derivatives are bounded and, in particular, the Hessian is Lipschitz. ([[thm-harmonic-functions-are-real-analytic]])

## Counterexample

**Proof technique:** direct.

1.1 The source is compactly supported and Lipschitz. For $r>0$ one has $x_1^3-3x_1x_2^2=r^3\cos3\theta$, so $f(x)=\chi(r)\,r\cos3\theta$, a product of the radial function $\chi$ with the degree-one homogeneous function $g(x):=r\cos3\theta$. The function $g$ is smooth off the origin, satisfies $|g|\le r$ and, being $1$-homogeneous, has $|\nabla g|\le C_0$ globally, while $\chi$ is Lipschitz with support in $\bar B_2$; hence $f$ is compactly supported, $\sup|f|\le2$ and $[f]_{0,1}\le C_0\|\chi\|_\infty+2[\chi]_{0,1}<\infty$, that is $f\in C_c^{0,1}(\mathbb R^2)$ with finite $C^{0,1}$ norm. [given, algebra, A1]

1.2 The explicit local solution. Put $P(x):=x_1^3-3x_1x_2^2$, so that $P=r^3\cos3\theta$ and $p=-\tfrac16P\log r$ for $0<r<1$. The polynomial $P$ is harmonic: $\partial_{11}P=6x_1$, $\partial_{22}P=-6x_1$, hence $\Delta P=0$; moreover $\nabla P\cdot\nabla\log r=P_i x_i/r^2$ with $P_i x_i=3(x_1^2-x_2^2)x_1+(-6x_1x_2)x_2=3x_1(x_1^2-3x_2^2)=3r^3\cos3\theta$, so $\nabla P\cdot\nabla\log r=3r\cos3\theta$; and $\Delta\log r=0$ for $r>0$. Therefore, for $0<r<1$, $$\Delta p=-\tfrac16\bigl(\Delta P\log r+2\nabla P\cdot\nabla\log r+P\Delta\log r\bigr)=-\tfrac16\cdot2\cdot3r\cos3\theta=-r\cos3\theta=-f(x),$$ because $\chi(r)=1$ there. At the origin $p$ is $C^2$ with $D^2p(0)=0$: indeed $p=O(r^3|\log r|)$, $\partial_ip=O(r^2|\log r|)$ and $\partial_i\partial_jp=O(r|\log r|)$ as $r\downarrow0$, as the three terms of the product rule show, so $\Delta p(0)=0=f(0)$ and the identity $-\Delta p=f$ holds pointwise on all of the unit disc. [given, algebra]

2.1 The potential differs from $p$ by a harmonic function. The source $f$ is Lipschitz, hence belongs to $C_c^{0,\alpha}(\mathbb R^2)$ for every $0<\alpha<1$, so by [F2] the potential $Nf$ is $C^2$ with $-\Delta Nf=f$ pointwise. Step 1.2 gives $-\Delta p=f$ pointwise on the unit disc, so $\Delta(Nf-p)=0$ there; by [F3] the function $H:=Nf-p$ is real analytic on the unit disc and its Hessian is Lipschitz on $B_{1/2}(0)$, say $|D^2H(x)-D^2H(y)|\le M|x-y|$ for $x,y\in B_{1/2}(0)$. [step 1.2, F1, F2, F3, algebra]

3.1 Failure of the Lipschitz bound. On the positive $x_1$-axis $p(x_1,0)=-\tfrac16x_1^3\log x_1$ for $0<x_1<1$, so $$\partial_{11}p(x_1,0)=-\tfrac16\bigl(6x_1\log x_1+5x_1\bigr)=-x_1\log x_1-\tfrac56x_1,\qquad \partial_{11}p(0,0)=0.$$ By step 2.1, $\partial_{11}Nf(x_1,0)=-x_1\log x_1-\tfrac56x_1+\partial_{11}H(x_1,0)$ and the last term deviates from its value at $0$ by at most $Mx_1$. Hence for $0<x_1<\tfrac12$, $$\frac{|\partial_{11}Nf(x_1,0)-\partial_{11}Nf(0,0)|}{x_1}\ge|\log x_1|-\tfrac56-M\longrightarrow+\infty\qquad(x_1\downarrow0).$$ Therefore $[D^2Nf]_{0,1}=\sup_{x\ne y}|D^2Nf(x)-D^2Nf(y)|/|x-y|\ge\limsup_{x_1\downarrow0}(\ldots)=+\infty$, while $\|f\|_{C^{0,1}}=\sup|f|+[f]_{0,1}<\infty$ by step 1.1. [step 1.1, step 1.2, step 2.1, algebra]

4.1 Conclusion. The compactly supported Lipschitz source $f$ of step 1.1 has finite $C^{0,1}$ norm, but its Newtonian potential has $[D^2Nf]_{0,1}=+\infty$ by step 3.1; hence no finite constant $C$ can satisfy $[D^2Nf]_{C^{0,1}(\mathbb R^2)}\le C\|f\|_{C^{0,1}(\mathbb R^2)}$, and the endpoint $\alpha=1$ version of the Schauder estimate is false. The example is consistent with the true sharp result: $D^2Nf$ is bounded and has the logarithmic modulus $|x||\log|x||$, so the failure is exactly the loss of one logarithm, not a loss of boundedness. [step 1.1, step 3.1, given] ∎

## Remarks

- The computation is the standard sharpness construction: the degree-one homogeneous forcing $r\cos3\theta$ produces a degree-three logarithmic potential, and the positive axis is where the $\log$ term is visible. The angular factor is immaterial; the angular mode $\cos3\theta$ is resonant with the degree-three radial ansatz. A degree-one spherical harmonic instead gives linear forcing and does not produce this logarithmic obstruction.
- The example refutes the endpoint case of the *interior* estimate for the Laplacian; it does not contradict the strict-range estimate for $0<\alpha<1$, which is proved for compactly supported H\"older data and has no uniform Lipschitz-endpoint constant. Wang equation (1.4) bounds the Hessian increment by $C_nd(\sup|u|+\|f\|_{C^{0,1}}|\log d|)$, with $d=|x-y|$.
