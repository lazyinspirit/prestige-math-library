---
id: lem-em-rectangular-transverse-mode-completeness
kind: lemma
domain: mathematics
title: "The sine and cosine systems are complete orthogonal systems of L^2 on an interval and on a rectangle"
status: published
origin: pipeline
dependency_level: 1
deps: [cor-c-one-change-of-variables-for-l-one-functions, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, def-l-p-space-as-a-quotient-by-null-functions, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-hilbert-space-fourier-expansion, thm-linear-change-of-variables-for-lebesgue-measure, thm-trigonometric-system-is-complete-in-l-two-of-the-torus, lem-em-rectangle-mode-profile-identities, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-ftc-second-part, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-trigonometric-parity-and-pythagorean-identity, def-the-one-dimensional-torus-and-normalized-haar-integral]
dependency_roles:
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-trigonometric-system-is-complete-in-l-two-of-the-torus: mathematical-premise
  lem-em-rectangle-mode-profile-identities: mathematical-premise
  thm-sine-and-cosine-addition-formulas: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-the-one-dimensional-torus-and-normalized-haar-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Beisert, Elektrodynamik, Vorlesungsskript, ETH Zurich, 2024 FS (German), Chapter 13 'Wellenleiter' and 'Kavitaeten', PDF pp. 153-162 (printed pp. 13.1-13.10); complete 176-page author-hosted PDF and official TeX read, with the conjugate-error in (13.26), the 'Wendepunkt' mislabel and the general group-velocity restriction recorded as source defects not copied"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin, 2006-02-02), node 105 'Wave-guides', complete author-hosted HTML node read in the run's pinned full-notes snapshot"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node105.html"
    - title: "D. J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596-page full scan), sections 9.5.1-9.5.3 printed pp. 405-412 (wave guides, TE waves in a rectangular wave guide, coaxial transmission line), read in the stamped full text; OCR noise cross-checked against the other treatments"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $L>0$ and $R=(0,L_1)\times(0,L_2)$ with $L_1,L_2>0$.
(a) [One interval] The families $\{\cos(m\pi x/L)\}_{m\ge0}$ and $\{\sin(m\pi x/L)\}_{m\ge1}$ are orthogonal complete systems in the real Hilbert space $L^2(0,L)$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]): each is orthogonal, and its closed linear span is all of $L^2(0,L)$.
(b) [Rectangle] With $m,n$ ranging over $\mathbb N_0$ in cosine slots and over $\mathbb N_{\ge1}$ in sine slots, each of the four product families $\{\cos\frac{m\pi x_1}{L_1}\cos\frac{n\pi x_2}{L_2}\}$, $\{\cos\frac{m\pi x_1}{L_1}\sin\frac{n\pi x_2}{L_2}\}$, $\{\sin\frac{m\pi x_1}{L_1}\cos\frac{n\pi x_2}{L_2}\}$ and $\{\sin\frac{m\pi x_1}{L_1}\sin\frac{n\pi x_2}{L_2}\}$ is an orthogonal complete system in $L^2(R)$; in particular the Neumann family $\{h_{mn}\}_{m,n\ge0}$ and the Dirichlet family $\{e_{mn}\}_{m,n\ge1}$ of [[lem-em-rectangle-mode-profile-identities]] are orthogonal complete systems in $L^2(R)$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice; a length $L>0$, rectangle dimensions $L_1,L_2>0$; the real Hilbert space $L^2(0,L)$ (similarly $L^2(R)$) of [[def-l-p-space-as-a-quotient-by-null-functions]] with inner product $\langle f,g\rangle=\int fg$ and norm $\|\cdot\|_2$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]); and the one-interval families $c_m(x):=\cos(m\pi x/L)$ ($m\ge0$), $s_p(x):=\sin(p\pi x/L)$ ($p\ge1$).

[F1] On real $L^2(\mu)$ the formula $\langle f,g\rangle=\int fg\,d\mu$ is an inner product with $\langle f,f\rangle=\|f\|_2^2$, $L^2(\mu)$ is complete for the induced norm, and $|\int fg|\le\|f\|_2\|g\|_2$ for $f,g\in L^2$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[cor-cauchy-schwarz-inequality-for-l-two]], [[def-l-p-space-as-a-quotient-by-null-functions]]). A family is orthogonal when its distinct members pair to $0$ and complete when its closed linear span is the whole space ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F2] Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]); the torus $\mathbb T=\mathbb R/\mathbb Z$ carries the normalized Haar integral $m_{\mathbb T}$ and the characters $e_k([t])=\exp(2\pi ikt)$, and the characters form an orthonormal basis of the complex Hilbert space $L^2(\mathbb T;\mathbb C)$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[thm-trigonometric-system-is-complete-in-l-two-of-the-torus]]); for real $\varphi$, $\exp(i\varphi)=\cos\varphi+i\sin\varphi$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F3] Change of variables: invertible linear maps $T$ scale Lebesgue measure by $|\det T|$ ([[thm-linear-change-of-variables-for-lebesgue-measure]]), and a $C^1$ diffeomorphism $T:U\to V$ substitutes in $L^1$ integrands by $\int_Vf=\int_Uf\circ T\,|\det DT|$ ([[cor-c-one-change-of-variables-for-l-one-functions]]); both hold under $\mathrm{AC}_\omega$. In particular the affine substitutions $t\mapsto 2Lt$ and $x\mapsto-x$ below preserve integrability and transform the displayed integrals.

[F4] Fubini for $L^1$: for sigma-finite spaces and $h\in L^1(\mu\times\nu)$, the sections are a.e. integrable, the section-integral functions are integrable, and the iterated and double integrals agree ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] One-variable calculus: $(\sin x)'=\cos x$, $(\cos x)'=-\sin x$ ([[thm-sine-and-cosine-derivatives]]); sums, scalar multiples and products obey the sum, scalar and product rules and composites obey the chain rule, applicable to affine substitutions ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]); a differentiable $G$ on $[a,b]$ with integrable $G'$ satisfies $\int_a^bG'=G(b)-G(a)$ ([[thm-ftc-second-part]]); a continuous function on $[a,b]$ is Riemann integrable ([[thm-continuous-implies-integrable]]) and a bounded Riemann integrable function is Lebesgue measurable with the same integral ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

[F6] $\sin(A+B)=\sin A\cos B+\cos A\sin B$ and $\cos(A+B)=\cos A\cos B-\sin A\sin B$ for real $A,B$ ([[thm-sine-and-cosine-addition-formulas]]); sine is odd, cosine is even, and $\sin^2+\cos^2=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[F7] Every $f\in L^2(R)$ satisfies $\int_R|f|^2<+\infty$; bounded measurable factors on the finite-measure rectangle preserve $L^1$ and $L^2$ membership, and $\int_R|fg|\le\|f\|_2\|g\|_2$ is the Cauchy–Schwarz estimate ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F8] Assume $\mathrm{AC}_\omega$; if $(e_i)_{i\in I}$ is a complete orthonormal family in a real or complex Hilbert space and $x$ is in the space, then the finite-subset net of partial sums $\sum_{i\in F}\langle x,e_i\rangle e_i$ converges to $x$ ([[thm-hilbert-space-fourier-expansion]]).

[F9] The profiles of [[lem-em-rectangle-mode-profile-identities]] satisfy $h_{mn}=c^{(1)}_m\otimes c^{(2)}_n$ and $e_{mn}=s^{(1)}_m\otimes s^{(2)}_n$, where the superscripts select the $x_1$- and $x_2$-families, and the lemma states their rectangle orthogonality and norms. The four families of clause (b) are the products $c^{(i)}\otimes d^{(j)}$ of one cosine or sine family on each factor.

## Proof

**Proof technique:** direct: compute the one-dimensional inner products with the product-to-sum identities and the fundamental theorem, transfer completeness of the trigonometric system of the torus to the interval through even and odd periodic extensions, and obtain the rectangle families by Fubini and one completeness argument applied on each factor.

1.1 [One-interval inner products] Let $m,m'\ge0$ and $p,p'\ge1$ be integers. By [F6], $\cos\frac{m\pi x}{L}\cos\frac{m'\pi x}{L}=\frac12\bigl[\cos\frac{(m-m')\pi x}{L}+\cos\frac{(m+m')\pi x}{L}\bigr]$ and $\sin\frac{p\pi x}{L}\sin\frac{p'\pi x}{L}=\frac12\bigl[\cos\frac{(p-p')\pi x}{L}-\cos\frac{(p+p')\pi x}{L}\bigr]$; for every nonzero integer $k$ the function $x\mapsto\frac{L}{k\pi}\sin\frac{k\pi x}{L}$ has derivative $\cos\frac{k\pi x}{L}$ on $[0,L]$ by [F5], so $\int_0^L\cos\frac{k\pi x}{L}dx=\frac{L}{k\pi}\bigl[\sin(k\pi)-\sin0\bigr]=0$ by [F5], [F6] (the case $k=0$, i.e. $m=m'$ or $p=p'$, leaves the constant $1$ or the difference $0$). The integrands are continuous, hence Riemann integrable [F5], and their Riemann and Lebesgue integrals agree [F5]. Therefore $\langle c_m,c_{m'}\rangle=0$ for $m\ne m'$, $\langle s_p,s_{p'}\rangle=0$ for $p\ne p'$, while $\langle c_m,c_m\rangle=\frac{L}{2}(1+\delta_{m0})$ and $\langle s_p,s_p\rangle=\frac{L}{2}$ are nonzero; each displayed member is nonzero because it equals $1$ at some point of $[0,L]$. Hence both families of clause (a) are orthogonal in the sense of [F1]. [F5, F6, algebra]

1.2 [Even extensions have vanishing torus coefficients] Let $f\in L^2(0,L)$ satisfy $\langle f,c_m\rangle=0$ for every $m\ge0$. Define $F(x):=f(|x|)$ on $(-L,L)$ and let $G$ be the $2L$-periodic extension of $F$ to $\mathbb R$; define $g([t]):=G(2Lt)$ on $\mathbb T$. Then $g$ is a real-valued element of $L^2(\mathbb T;\mathbb C)$: by [F1], [F3] the change of variables $x\mapsto2Lt$ and the periodicity give $\int_{\mathbb T}|g|^2dm_{\mathbb T}=\int_0^1|G(2Lt)|^2dt=\frac1{2L}\int_0^{2L}|G|^2=\frac1{2L}\int_{-L}^{L}|F|^2=\frac1L\|f\|_2^2<\infty$. Splitting the integral at $0$, substituting $x\mapsto-x$ on $(-L,0)$ by [F3] and using $F(-x)=F(x)$, its character coefficients are $\widehat g(k)=\int_0^1G(2Lt)e^{-2\pi ikt}dt=\frac1{2L}\int_{-L}^{L}F(x)e^{-i\pi kx/L}dx=\frac1{2L}\int_0^Lf(x)\bigl(e^{-i\pi kx/L}+e^{i\pi kx/L}\bigr)dx=\frac1L\int_0^Lf(x)\cos\frac{k\pi x}{L}dx=\frac1L\langle f,c_{|k|}\rangle=0$ for every $k\in\mathbb Z$, using the affine substitutions, the periodicity of $G$, the cartesian form of [F2] and the parity of [F6] for the identification with $\cos\frac{k\pi x}{L}=\cos\frac{|k|\pi x}{L}$. [F1, F2, F3, F6, algebra]

1.3 [Trivial orthogonal complement in $L^2$] We record the Hilbert-space step used below. Let $H$ be a real or complex Hilbert space, let $V\subseteq H$ be the closed linear span of a family $(v_i)_{i\in I}$, and suppose the only $w\in H$ with $\langle w,v_i\rangle=0$ for every $i$ is $w=0$. Then $V=H$: for $u\in H$ put $d:=\inf_{v\in V}\|u-v\|$; under [F2] (countable choice) choose $v_n\in V$ with $\|u-v_n\|\to d$, and the parallelogram identity $\|v_n-v_m\|^2=2\|u-v_n\|^2+2\|u-v_m\|^2-4\|u-\tfrac{v_n+v_m}2\|^2\le2\|u-v_n\|^2+2\|u-v_m\|^2-4d^2$ of [F1] makes $(v_n)$ Cauchy, so $v_n\to v_*\in V$ by closedness and completeness; if $d>0$ then $z:=u-v_*\ne0$ and for every $w\in V$ and real $\varepsilon$ one has $d^2\le\|z-\varepsilon w\|^2=d^2-2\varepsilon\operatorname{Re}\langle z,w\rangle+\varepsilon^2\|w\|^2$, so taking $\varepsilon=\operatorname{Re}\langle z,w\rangle/\|w\|^2$ for $w\ne0$ forces $\operatorname{Re}\langle z,w\rangle=0$; when $H$ is complex, applying that conclusion to $iw$ in place of $w$ gives $\operatorname{Im}\langle z,w\rangle=0$ as well, so $\langle z,w\rangle=0$ in either case; in particular $\langle z,v_i\rangle=0$ for all $i$, contradicting the hypothesis, so $d=0$ and $u\in V$. [F1, F2, algebra]

1.4 [Torus elements with all coefficients zero vanish] If $h\in L^2(\mathbb T;\mathbb C)$ has $\widehat h(k)=0$ for every $k$, then $h=0$: by [F2] the characters are complete orthonormal, so Cauchy–Schwarz [F1] makes $\langle h,\varphi\rangle=0$ for every $\varphi$ in their closed span, which is all of $L^2(\mathbb T;\mathbb C)$, and $\langle h,h\rangle=0$ gives $h=0$. [F1, F2]

2.1 [Odd extensions have vanishing torus coefficients] Let $f\in L^2(0,L)$ satisfy $\langle f,s_p\rangle=0$ for every $p\ge1$. Define $F(x):=\operatorname{sgn}(x)f(|x|)$ (so $F$ is odd and $F=f$ on $(0,L)$) and define $G,g$ from $F$ as in step 1.2. The same change of variables and periodicity give $\|g\|^2=\frac1L\|f\|_2^2<\infty$, and now the reflection substitution yields $\widehat g(k)=\frac1{2L}\int_{-L}^{L}F(x)e^{-i\pi kx/L}dx=\frac1{2L}\int_0^Lf(x)\bigl(e^{-i\pi kx/L}-e^{i\pi kx/L}\bigr)dx=-\frac iL\int_0^Lf(x)\sin\frac{k\pi x}{L}dx$; by the parity of sine this is $-\frac{i\operatorname{sgn}(k)}L\langle f,s_{|k|}\rangle=0$ for $k\ne0$ and $0$ for $k=0$. [step 1.2, F1, F2, F3, F6, algebra]

2.2 [Interval completeness, cosine case] Let $f\in L^2(0,L)$ be orthogonal to every $c_m$. Step 1.2 produces $g\in L^2(\mathbb T;\mathbb C)$ whose character coefficients all vanish, so $g=0$ by step 1.4, and hence $G(2Lt)=0$ for almost every $t\in[0,1)$. By [F3] (the linear map $t\mapsto2Lt$ scales Lebesgue measure by $2L$) the set of $x\in(0,2L)$ with $G(x)\ne0$ is null, so $F$, hence $f$, vanishes almost everywhere on $(0,L)$. Thus the only element of $L^2(0,L)$ orthogonal to the cosine family is $0$; by step 1.3 with the family $(c_m)$ the closed span of the cosine family is $L^2(0,L)$, and step 1.1 gives orthogonality. [step 1.1, step 1.2, step 1.3, step 1.4, F3]

2.3 [Rectangle orthogonality] Let $c$ denote either of the two $x_1$-families and $d$ either of the two $x_2$-families of clause (b); all members are continuous, hence bounded and measurable on the closed rectangle. For members $c_m\otimes d_n$ and $c_{m'}\otimes d_{n'}$, the product $(c_mc_{m'})(d_nd_{n'})$ is bounded and measurable on the finite-measure rectangle, hence in $L^1$, and Fubini [F4] factors the inner product as $\langle c_m\otimes d_n,\,c_{m'}\otimes d_{n'}\rangle=\langle c_m,c_{m'}\rangle\langle d_n,d_{n'}\rangle$; this vanishes whenever $(m,n)\ne(m',n')$ by step 1.1 (a member with a matching index has nonzero squared norm $\frac{L_1}2(1+\delta_{m0})$ or $\frac{L_1}2$, or the analogous $x_2$-norm). Hence each of the four product families is orthogonal in $L^2(R)$. [step 1.1, F4, F7, algebra]

3.1 [Interval completeness, sine case] The same argument with step 2.1 in place of step 1.2 shows that the only element of $L^2(0,L)$ orthogonal to the sine family is $0$, so its closed span is $L^2(0,L)$ by step 1.3, and it is orthogonal by step 1.1; this proves clause (a) together with step 2.2. [step 1.1, step 1.3, step 1.4, step 2.1, F3]

4.1 [Rectangle completeness] Fix one of the four product families $c\otimes d$ in $L^2(R)$ and let $f\in L^2(R)$ be orthogonal to every $c_m\otimes d_n$. By Fubini applied to the integrable function $|f|^2$ [F4], the section $f(\cdot,x_2)$ lies in $L^2(0,L_1)$ for almost every $x_2$, and the identities of [F4] applied to the integrable function $f c_m$ define measurable functions $\varphi_m(x_2):=\int_0^{L_1}f(x_1,x_2)c_m(x_1)dx_1$ almost everywhere, with $\int_0^{L_2}|\varphi_m|^2\le\|c_m\|_2^2\|f\|_2^2<\infty$ by Cauchy–Schwarz [F7], so $\varphi_m\in L^2(0,L_2)$; and Fubini applied to $fc_md_n$ gives $\langle\varphi_m,d_n\rangle=\langle f,c_m\otimes d_n\rangle=0$ for every $n$. Since the $d$-family is complete in $L^2(0,L_2)$ by step 2.2 or step 3.1, Cauchy–Schwarz [F1] makes $\varphi_m$ orthogonal to the whole closed span, so $\varphi_m=0$ almost everywhere. There are countably many $m$, so [F2] (countable choice) selects the countably many exceptional null sets whose union $N$ is null, and for every $x_2\notin N$ the section $f(\cdot,x_2)\in L^2(0,L_1)$ is orthogonal to every $c_m$, hence vanishes almost everywhere in $x_1$ by step 2.2 or step 3.1. Fubini applied to $|f|^2$ [F4] now gives $\|f\|_2^2=0$, so $f=0$. By step 1.3 the closed span of the product family is $L^2(R)$; with step 2.3 this proves the first claim of clause (b) for all four parity choices, and the identification of [F9] gives the claim for the Neumann family $\{h_{mn}\}$ and the Dirichlet family $\{e_{mn}\}$. [step 1.3, step 2.2, step 2.3, step 3.1, F1, F4, F7, F9, choose]

5.1 [Expansions] For each system $(u_i)$ of clauses (a) and (b), put $v_i:=u_i/\|u_i\|_2$; the norms are nonzero and $(v_i)$ is a complete orthonormal system of [F1]. By [F8], every $f$ in the space is the norm limit of the finite-subset net $\sum_{i\in F}\langle f,v_i\rangle v_i$. Since $\langle f,v_i\rangle v_i=(\langle f,u_i\rangle/\|u_i\|_2^2)u_i$, the corresponding coefficients in the original orthogonal system are $\langle f,u_i\rangle/\|u_i\|_2^2$, obtained by dividing the normalized coefficients by $\|u_i\|_2$. [step 1.1, step 2.2, step 2.3, step 3.1, step 4.1, F1, F8, algebra] ∎
