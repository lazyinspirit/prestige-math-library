---
title: "Regular critical PSD phases: a direct mass bootstrap at 0.0816"
status: published
research_item: lem-author-8ada42a8dac6-regular-psd-mass
dependency_level: 4
---

## Prerequisites

- [def-expander-sync-energy](item-def-expander-sync-energy)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)
- [math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point)
- [math:def-definite-and-indefinite-hessian-quadratic-forms](https://alphabetamath.cc/item/def-definite-and-indefinite-hessian-quadratic-forms)
- [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)
- [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)
- [prop-expander-prereq-complex-quadratic-tests](item-prop-expander-prereq-complex-quadratic-tests)
- [prop-expander-sync-energy-derivatives](item-prop-expander-sync-energy-derivatives)


## Statement

Let $a=0.0816$, and let $G$ be a finite nonempty undirected graph with symmetric binary adjacency $A$ (loops allowed), every row sum equal to $d>0$, and $\|A-(d/n)J\|\le ad$. Let $\theta$ be a critical point of $E=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$ with positive-semidefinite angular Hessian. Rotate and choose representatives in $(-\pi,\pi]$ so $\rho=n^{-1}\sum_xe^{i\theta_x}\ge0$ is real. Write $X=\rho^2$, $r=|n^{-1}\sum_xe^{2i\theta_x}|$, $H(t)=\sin^2t$ for $|t|\le\pi/2$ and $H(t)=1$ otherwise, and $M=n^{-1}\sum_xH(\theta_x)$. Then $X>4/5$, $M<a^2/4<0.00832$, and for each $y$, $(Ae^{i\theta})_y=r_ye^{i\theta_y}$ with $r_y\ge0$. In particular $|\{x:|\theta_x|\ge\xi\}|\sin^2\xi<0.00832n$ for $0<\xi<\pi/2$.

## Facts & Assumptions

[F1] Use the graph, phase, algebraic and analytic interfaces of [def-expander-sync-energy](item-def-expander-sync-energy), [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation), [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus), [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities). Every configuration assumed here is a critical point with positive-semidefinite Hessian; local minimality is never inferred from that condition.

[F2] In the open angular boxes of [def-expander-prereq-phase-torus](item-def-expander-prereq-phase-torus), the finite cosine sum defining the energy has continuous second derivatives. A critical point has zero coordinate gradient and its angular Hessian is the matrix of second partial derivatives ([math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point)). Positive semidefiniteness means $h^TBh\ge0$ for every real coordinate vector $h$, where $B$ is that Hessian ([math:def-definite-and-indefinite-hessian-quadratic-forms](https://alphabetamath.cc/item/def-definite-and-indefinite-hessian-quadratic-forms)). Changes between these angular lifts are locally translations, so the gradient and Hessian conventions agree on overlaps.

[F3] Vector norms and adjoints are those of the finite-dimensional complex vertex space [def-expander-prereq-vertex-hilbert-space](item-def-expander-prereq-vertex-hilbert-space); matrix norms are its induced operator norms ([math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)). Scaling a nonzero vector to a unit vector gives $\|Tv\|\le\|T\|\|v\|$, and the inequality also holds for $v=0$. Cauchy–Schwarz gives $|v^*Tv|\le\|v\|\|Tv\|\le\|T\|\|v\|^2$ ([math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)). Its linear-first convention has the same norm and absolute pairing as the vertex convention.

[F4] A real symmetric quadratic form nonnegative on real vectors is nonnegative on complex vectors: for $z=u+iv$, $z^*Bz=u^TBu+v^TBv$. For real symmetric weights $b_{xy}$, its Laplacian has quadratic form $\frac12\sum_{x,y}b_{xy}|z_x-z_y|^2$, including signed weights ([prop-expander-prereq-complex-quadratic-tests](item-prop-expander-prereq-complex-quadratic-tests)).

[F5] For the finite symmetric binary adjacency in this statement, including loops, [prop-expander-sync-energy-derivatives](item-prop-expander-sync-energy-derivatives) gives the angular gradient components $\sum_xA_{xy}\sin(\theta_y-\theta_x)$ and the Hessian $B=\operatorname{diag}(\sum_xb_{xy})-b$, where $b_{xy}=A_{xy}\cos(\theta_x-\theta_y)$. Diagonal loop terms cancel from the Hessian, and the formulas are independent of angular lifts.

## Proof

**Given:** The hypotheses of the Statement.

**Goal:** Establish its conclusions directly for critical PSD phases.

1.1 Apply [F5] to the energy in an open angular box. Its hypotheses hold because the vertex set is finite and nonempty and $A$ is symmetric and binary, with loops permitted. By [F2], criticality makes the gradient vanish; reversing the sine difference gives $\sum_xA_{xy}\sin(\theta_x-\theta_y)=0$. The Hessian is the real symmetric matrix $B=\operatorname{diag}(\sum_xb_{xy})-b$ with $b_{xy}=A_{xy}\cos(\theta_x-\theta_y)$. By [F4], $z^*Bz=\frac12\sum_{x,y}A_{xy}\cos(\theta_x-\theta_y)|z_x-z_y|^2\ge0$ for every complex $z$. Its real coordinate-vector test shows $\sum_{x\ne y}A_{xy}\cos(\theta_x-\theta_y)\ge0$. Adding $A_{yy}\ge0$ proves $r_y=\sum_xA_{xy}\cos(\theta_x-\theta_y)\ge0$, and criticality gives the phasor identity. [F1, F2, F4, F5, algebra]

2.1 Set $f_x=e^{i\theta_x}$, $g_x=e^{2i\theta_x}$ and $\Delta=A-(d/n)J$. Both vectors have squared norm $n$, so [F3] and the norm bound give $f^*Af\le dnX+adn$, $g^*Ag\ge dnr^2-adn$, while $\mathbf1^TA\mathbf1=dn$ by regularity. The PSD test $z=f$ in step 1.1, using $|f_x-f_y|^2=2(1-\cos(\theta_x-\theta_y))$, gives $\sum A_{xy}\cos(\theta_x-\theta_y)\ge\sum A_{xy}\cos^2(\theta_x-\theta_y)$. Using $\cos^2t=(1+\cos2t)/2$ yields $X\ge(1+r^2)/2-3a/2\ge1/2-3a/2=0.3776>1/3$. [F1, F3, step 1.1, algebra]

3.1 Since $\Delta\mathbf1=0$ and $\|f-\rho\mathbf1\|^2=n(1-X)$, [F3] gives $\|W\|^2\le a^2d^2n(1-X)$ for $W=\Delta f=\Delta(f-\rho\mathbf1)$. By step 1.1, $e^{-i\theta_y}W_y=r_y-d\rho e^{-i\theta_y}$. Its imaginary part is $d\rho\sin\theta_y$. For $|\theta_y|\ge\pi/2$, its real part is at least $-d\rho\cos\theta_y\ge0$, so the sum of its squared real and imaginary parts is at least $d^2X$. Thus $|W_y|^2\ge d^2XH(\theta_y)$ for every $y$, giving $M\le a^2(1-X)/X$. With $X>1/3$ from step 2.1, this is $M<2a^2$. Put $\rho_2=n^{-1}\sum_xe^{2i\theta_x}$, so $r=|\rho_2|$. Since $\operatorname{Re}\rho_2=1-(2/n)\sum\sin^2\theta_x\ge1-2M$, we have $r>1-4a^2=0.97336576>0.97$. Inserting this into step 2.1 gives $X>(1+0.97^2)/2-0.1224=0.84805>4/5$. Therefore $M<a^2/4=0.00166464<0.00832$. [F1, F3, step 1.1, step 2.1, algebra]

4.1 On the tail $|\theta_x|\ge\xi$, $H(\theta_x)\ge\sin^2\xi$ directly from the piecewise definition and sine monotonicity on $[0,\pi/2]$ (equivalently, cosine monotonicity there and $\sin t=\cos(\pi/2-t)$). Summing gives $|\{x:|\theta_x|\ge\xi\}|\sin^2\xi\le nM<0.00832n$. Every argument above uses criticality and PSD rather than a local-minimum hypothesis. [F1, step 3.1, algebra] ∎
