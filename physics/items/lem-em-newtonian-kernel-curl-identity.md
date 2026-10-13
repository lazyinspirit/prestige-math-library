---
id: "lem-em-newtonian-kernel-curl-identity"
kind: "lemma"
title: "Divergence and curl of the Newtonian potential of a smooth compact vector field"
domain: mathematics
status: published
origin: session
dependency_level: 1
deps: ["def-bounded-piecewise-c-one-euclidean-domain", "def-ck-euclidean-maps-and-diffeomorphisms", "def-cross-product-in-r3", "def-directional-and-partial-derivatives", "def-divergence-and-curl-of-a-c1-vector-field", "def-euclidean-inner-product", "def-integral-over-a-measurable-set", "def-integrable-real-and-complex-functions-and-their-integrals", "def-laplace-fundamental-solution-with-positive-minus-laplacian-sign", "def-newtonian-potential", "def-surface-integral-on-a-compact-c-one-hypersurface", "lem-em-smooth-newtonian-upgrade", "lem-euclidean-chart-measure-agrees-with-polar-surface-measure", "thm-algebra-of-derivatives", "thm-divergence-theorem-for-bounded-piecewise-c-one-domains", "thm-dominated-convergence", "thm-integral-triangle-inequality", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-polar-coordinates-formula-for-lebesgue-measure", "def-countable-choice", "prop-order-and-scalar-rules-for-the-nonnegative-integral"]
dependency_roles:
  "def-bounded-piecewise-c-one-euclidean-domain": "mathematical-premise"
  "def-ck-euclidean-maps-and-diffeomorphisms": "mathematical-premise"
  "def-cross-product-in-r3": "mathematical-premise"
  "def-directional-and-partial-derivatives": "mathematical-premise"
  "def-divergence-and-curl-of-a-c1-vector-field": "mathematical-premise"
  "def-euclidean-inner-product": "mathematical-premise"
  "def-integral-over-a-measurable-set": "mathematical-premise"
  "def-integrable-real-and-complex-functions-and-their-integrals": "mathematical-premise"
  "def-laplace-fundamental-solution-with-positive-minus-laplacian-sign": "mathematical-premise"
  "def-newtonian-potential": "mathematical-premise"
  "def-surface-integral-on-a-compact-c-one-hypersurface": "mathematical-premise"
  "lem-em-smooth-newtonian-upgrade": "mathematical-premise"
  "lem-euclidean-chart-measure-agrees-with-polar-surface-measure": "mathematical-premise"
  "thm-algebra-of-derivatives": "mathematical-premise"
  "thm-divergence-theorem-for-bounded-piecewise-c-one-domains": "mathematical-premise"
  "thm-dominated-convergence": "mathematical-premise"
  "thm-integral-triangle-inequality": "mathematical-premise"
  "thm-linearity-of-the-lebesgue-integral-on-l-one": "mathematical-premise"
  "thm-polar-coordinates-formula-for-lebesgue-measure": "mathematical-premise"
  "def-countable-choice": "mathematical-premise"
  "prop-order-and-scalar-rules-for-the-nonnegative-integral": "mathematical-premise"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 5.3.2 printed pp. 222-225 (the product-rule computation of $\\nabla\\cdot B$ and $\\nabla\\times B$ from the volume Biot-Savart integral, with the switching $\\nabla\\to-\\nabla'$ and the integration by parts (5.50)-(5.53) that this lemma makes rigorous at the singular kernel); read in the stamped scanned full text."
    - title: "W. C. Chew, Lectures on Electromagnetic Field Theory, Purdue University (Fall 2020, 497 pp.)"
      url: "https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf"
      locator: "Lecture 4 Section 4.1 printed pp. 39-41 (the Green's-function solution $A=\\mu/4\\pi\\int J/R\\,dV'$ and its differentiated kernel); read in the stamped full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 3.2.3 printed pp. 49-52 (computation of $B=\\nabla\\times A$ from the integral for $A$, with the remark that the derivative acts on the observation point); read in the stamped 236-page PDF."
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Let $f\in C_c^\infty(\mathbb R^3;\mathbb R^3)$ and define componentwise
$$A_i(x):=\frac1{4\pi}\int_{\mathbb R^3}\frac{f_i(y)}{|x-y|}\,dy,\qquad A:=(A_1,A_2,A_3),\qquad x\in\mathbb R^3,$$
so that $A=N(f)$ componentwise with the Newtonian-potential transform $N$ of [[lem-em-smooth-newtonian-upgrade]] and [[def-newtonian-potential]]. Then $A\in C^\infty(\mathbb R^3;\mathbb R^3)$, both integrals below are absolutely convergent for every $x$, and for every $x\in\mathbb R^3$
$$\operatorname{div}A(x)=N(\operatorname{div}f)(x)=\frac1{4\pi}\int_{\mathbb R^3}\frac{(\operatorname{div}f)(y)}{|x-y|}\,dy,$$
$$\operatorname{curl}A(x)=\frac1{4\pi}\int_{\mathbb R^3}\frac{f(y)\times(x-y)}{|x-y|^3}\,dy .$$
The curl identity needs no divergence-free hypothesis and holds pointwise at every point of $\mathbb R^3$, including points of the support of $f$; the kernel is differentiated, its smoothness at the pole is not assumed. Countable Choice is inherited from the smooth Newtonian supplier and the polar-coordinate and surface-measure interfaces of the estimates.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, let $f\in C_c^\infty(\mathbb R^3;\mathbb R^3)$, and let $A=N(f)$ componentwise be as in the Statement.

[F1] In dimension three the fundamental solution of $-\Delta$ is $\Phi(z)=1/(4\pi|z|)$ for $z\ne0$, with an arbitrary finite value at the pole, and the Newtonian potential of compactly supported data is $Nh(x)=\int_{\mathbb R^3}\Phi(x-y)h(y)\,dy$ at every point where the integral is absolutely finite ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[def-newtonian-potential]]).

[F2] For $h\in C_c^\infty(\mathbb R^3;\mathbb R)$ the potential satisfies $Nh\in C^\infty(\mathbb R^3)$, $-\Delta Nh=h$ pointwise, and $D^\alpha Nh=N(D^\alpha h)$ for every multi-index $\alpha$ ([[lem-em-smooth-newtonian-upgrade]]).

[F3] Partial derivatives on open subsets of $\mathbb R^3$ are the ordinary one-variable derivatives along coordinate lines, and $\operatorname{div}F=\partial_1F_1+\partial_2F_2+\partial_3F_3$, $\operatorname{curl}F=(\partial_2F_3-\partial_3F_2,\ \partial_3F_1-\partial_1F_3,\ \partial_1F_2-\partial_2F_1)$ for $C^1$ fields; a map is $C^k$ when all components are ([[def-directional-and-partial-derivatives]], [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F4] On each coordinate line the ordinary sum and product rules hold, so for smooth $g,h$ one has $\partial_j(gh)=(\partial_jg)h+g\,\partial_jh$ pointwise ([[thm-algebra-of-derivatives]]).

[F5] The spherical shell $\Omega_\varepsilon=B_R(x)\setminus\overline{B_\varepsilon(x)}$, $0<\varepsilon<R$, carries the specified finite piecewise $C^1$ presentation of [[def-bounded-piecewise-c-one-euclidean-domain]] given by coordinate-maximal faces of its two sphere boundary components, with outward normals $\nu_R=(y-x)/|y-x|$ on the outer sphere and $\nu_\varepsilon=-(y-x)/|y-x|$ on the inner sphere; the divergence theorem of [[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]] then holds for every $C^1$ field on a neighborhood of the compact closure.

[F6] The surface integral is that of [[def-surface-integral-on-a-compact-c-one-hypersurface]]; under $\mathrm{AC}_\omega$ the sphere $\partial B_\varepsilon(x)$ has surface measure $\varepsilon^2|S^2|$, and $|S^2|=3|B_1|$ is finite ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]]).

[F7] The polar formula gives $\int_{B_R(x)}|x-y|^{-1}d\lambda_3=\frac{R^2}{2}|S^2|$ and $\int_{B_R(x)}|x-y|^{-2}d\lambda_3=R\,|S^2|$, both finite because the polar surface measure is finite ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F8] The integral triangle inequality $|\int g|\le\int|g|$, monotonicity and positive homogeneity of the nonnegative integral, and finite additivity of the integral on integrable functions hold ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-integral-over-a-measurable-set]]).

[F9] Dominated convergence: if $g_\varepsilon\to g$ pointwise and $|g_\varepsilon|\le G$ with $G$ integrable on the region, then $\int g_\varepsilon\to\int g$ ([[thm-dominated-convergence]]).

[F10] For $u,v,w\in\mathbb R^3$, $u\times v=(u_2v_3-u_3v_2,\ u_3v_1-u_1v_3,\ u_1v_2-u_2v_1)$ and $(u\times v)_i=\varepsilon_{ijk}u_jv_k$, so $-\varepsilon_{ijk}a_jb_k=(b\times a)_i$; the Euclidean inner product is $\langle u,v\rangle=\sum_iu_iv_i$ ([[def-cross-product-in-r3]], [[def-euclidean-inner-product]]).

[F11] $\mathrm{AC}_\omega$ is the countable-choice principle invoked by the polar and surface-measure interfaces above ([[def-countable-choice]]).

## Proof

**Proof technique:** the componentwise derivative identity of the smooth Newtonian upgrade, then a finite excision (spherical shell) integration by parts and one dominated limit.

1.1 Since each $f_i$ is smooth and compactly supported, [F2] gives $A_i=N(f_i)\in C^\infty(\mathbb R^3)$ with $D^\alpha A_i=N(D^\alpha f_i)$ for every multi-index $\alpha$; in particular $A\in C^\infty(\mathbb R^3;\mathbb R^3)$ by [F3], and $\partial_iA_i=N(\partial_if_i)$ for each $i$. Summing over $i$ and using finite additivity of the integral [F8], $\operatorname{div}A=\sum_i\partial_iA_i=N(\sum_i\partial_if_i)=N(\operatorname{div}f)$ pointwise on $\mathbb R^3$, which is the first displayed identity; its integral is absolutely convergent because $|\operatorname{div}f|\le\|\operatorname{div}f\|_\infty$ is bounded and compactly supported and $\int_{B_R(x)}|x-y|^{-1}d\lambda_3<+\infty$ by [F7]. [given, F1, F2, F3, F7, F8]

1.2 Fix $x\in\mathbb R^3$ and $j,k\in\{1,2,3\}$, let $\Phi(z)=1/(4\pi|z|)$, and choose $R>0$ with $\operatorname{supp}f\subset B_R(x)$. For $0<\varepsilon<R$ let $\Omega_\varepsilon:=B_R(x)\setminus\overline{B_\varepsilon(x)}$, presented as in [F5]. On a neighborhood of the compact closure the scalar product $y\mapsto f_k(y)\Phi(x-y)$ is $C^1$, and by [F4] its partial derivative is $\partial_{y_j}(f_k\Phi(x-y))=(\partial_jf_k)(y)\Phi(x-y)+f_k(y)\partial_{y_j}\Phi(x-y)$. Applying the divergence theorem [F5] to the field $f_k\Phi(x-\cdot)e_j$ on $\Omega_\varepsilon$ gives $\int_{\Omega_\varepsilon}(\partial_jf_k)\Phi(x-y)\,d\lambda_3(y)=\int_{\partial B_R(x)}f_k\Phi(x-y)(\nu_R)_j\,dS+\int_{\partial B_\varepsilon(x)}f_k\Phi(x-y)(\nu_\varepsilon)_j\,dS-\int_{\Omega_\varepsilon}f_k(y)\partial_{y_j}\Phi(x-y)\,d\lambda_3(y)$. The outer sphere contributes $0$ because $f=0$ there; the inner sphere term is bounded in absolute value, by [F8] and the bound $|\Phi|=1/(4\pi|y-x|)=1/(4\pi\varepsilon)$ there, by $\|f_k\|_\infty\frac1{4\pi\varepsilon}\,|\partial B_\varepsilon(x)|=\|f_k\|_\infty\frac{|S^2|}{4\pi}\varepsilon\to0$ as $\varepsilon\to0$ by [F6]. [given, F4, F5, F6, F8]

2.1 Let $\varepsilon\to0$ in the identity of step 1.2. The shell integrands $(\partial_jf_k)\Phi(x-y)\mathbf 1_{\Omega_\varepsilon}$ are dominated on $B_R(x)$ by $\|\partial_jf_k\|_\infty|\Phi|$, and the shell integrands $f_k\partial_{y_j}\Phi(x-y)\mathbf 1_{\Omega_\varepsilon}$ by $\|f_k\|_\infty|\partial_{y_j}\Phi|\le\|f_k\|_\infty\frac{1}{4\pi}|x-y|^{-2}$; both majorants are integrable on $B_R(x)$ by [F7], and both families converge pointwise off the null singleton $\{x\}$ to the corresponding unrestricted integrands. Dominated convergence [F9] therefore gives $\int_{B_R(x)}(\partial_jf_k)\Phi(x-y)\,d\lambda_3(y)=-\int_{B_R(x)}f_k(y)\partial_{y_j}\Phi(x-y)\,d\lambda_3(y)$; the left side is $N(\partial_jf_k)(x)=\partial_jA_k(x)$ by step 1.1, and since $\partial_{y_j}\Phi(x-y)=\frac{x_j-y_j}{4\pi|x-y|^3}$ for $y\ne x$, this reads $\partial_jA_k(x)=-\frac1{4\pi}\int_{\mathbb R^3}\frac{f_k(y)(x_j-y_j)}{|x-y|^3}\,dy$, the integral being absolutely convergent because $|f_k(y)(x_j-y_j)|\le\|f_k\|_\infty|x-y|$ on $B_R(x)$ and $\int_{B_R(x)}|x-y|^{-2}d\lambda_3<+\infty$ by [F7]. [step 1.1, step 1.2, F4, F7, F9]

3.1 Summing the identity of step 2.1 with the alternating symbol, $(\operatorname{curl}A)_i=\varepsilon_{ijk}\partial_jA_k=-\frac1{4\pi}\int_{\mathbb R^3}\frac{\varepsilon_{ijk}f_k(y)(x_j-y_j)}{|x-y|^3}\,dy=\frac1{4\pi}\int_{\mathbb R^3}\frac{(f(y)\times(x-y))_i}{|x-y|^3}\,dy$ by the component identity of [F10] and finite linearity of the integral [F8]; as this holds for each $i$, $\operatorname{curl}A(x)=\frac1{4\pi}\int_{\mathbb R^3}\frac{f(y)\times(x-y)}{|x-y|^3}\,dy$, and the integral is absolutely convergent because $|f(y)\times(x-y)|\le\|f\|_\infty|x-y|$ and $\int_{B_R(x)}|x-y|^{-2}<+\infty$ by [F7]. With step 1.1 this proves both displayed identities at the arbitrary point $x$; the point was allowed to lie in $\operatorname{supp}f$, since the excision argument only removed a ball around it and used the bound on the differentiated kernel, so no smoothness of the kernel at the pole is assumed. Countable Choice is used only through the polar and surface-measure interfaces [F11] and the stated choice assumption of the smooth-newtonian supplier, and no stronger principle occurs. [step 1.1, step 2.1, F7, F8, F10, F11] ∎

## Source notes

Griffiths, Section 5.3.2, printed pp. 222-225, carries out exactly this product-rule-and-integration-by-parts computation with $\nabla\to-\nabla'$; the excision above replaces the formal treatment of the singular kernel by a rigorous shell argument, and step 2.1 records that the differentiated kernel, not the kernel itself, is what the estimates require. Chew, Lecture 4 Section 4.1, printed pp. 39-41, and Tong, Section 3.2.3, printed pp. 49-52, present the same Newtonian construction of $A$ and the differentiated-kernel computation of $B=\operatorname{curl}A$.
