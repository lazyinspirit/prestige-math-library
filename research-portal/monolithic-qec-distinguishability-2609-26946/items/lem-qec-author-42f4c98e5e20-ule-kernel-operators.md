---
id: lem-qec-author-42f4c98e5e20-ule-kernel-operators
kind: lemma
domain: mathematics
title: Convergent jump integrals and Hermitian Lamb operators
status: draft
origin: session
deps:
  - lem-qec-author-42f4c98e5e20-ule-normalization
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - math:def-countable-choice
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - math:thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - math:thm-integral-triangle-inequality
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
  - math:def-measurable-function-between-measurable-spaces
  - math:def-product-sigma-algebra-and-finite-product-sigma-algebras
  - math:thm-arithmetic-and-lattice-operations-preserve-measurability
  - math:def-complex-lp-and-euclidean-test-function-conventions
dependency_roles:
  lem-qec-author-42f4c98e5e20-ule-normalization: mathematical-premise
  def-qec-prereq-stationary-spectrum-kernel-contract: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  math:thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions: mathematical-premise
  math:def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  math:thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  math:thm-integral-triangle-inequality: mathematical-premise
  math:thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  math:def-measurable-function-between-measurable-spaces: mathematical-premise
  math:def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  math:thm-arithmetic-and-lattice-operations-preserve-measurability: mathematical-premise
  math:def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 2
formulation_deps:
  - lem-qec-author-42f4c98e5e20-ule-normalization
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - math:def-countable-choice
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:def-measurable-function-between-measurable-spaces
  - math:def-complex-lp-and-euclidean-test-function-conventions
argument_deps:
  - lem-qec-author-42f4c98e5e20-ule-normalization
  - def-qec-prereq-stationary-spectrum-kernel-contract
  - math:def-countable-choice
  - math:thm-tonelli-and-fubini-for-completed-product-measures
  - math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - math:thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions
  - math:def-integrable-real-and-complex-functions-and-their-integrals
  - math:thm-linearity-of-the-lebesgue-integral-on-l-one
  - math:thm-integral-triangle-inequality
  - math:thm-cauchy-schwarz-and-the-euclidean-norm
  - math:def-measurable-function-between-measurable-spaces
  - math:def-product-sigma-algebra-and-finite-product-sigma-algebras
  - math:thm-arithmetic-and-lattice-operations-preserve-measurability
  - math:def-complex-lp-and-euclidean-test-function-conventions
---

## Statement

Assume countable choice. All integrals are entrywise Lebesgue integrals, and matrix measurability means measurability of every entry. Use $h,G,\gamma$ from the normalization lemma. On a finite-dimensional system let $X_\alpha(s)$ be measurable Hermitian matrices with operator norm at most one, $1\leq\alpha\leq n$. The jumps $K_\lambda(t)=\sqrt\gamma\sum_\alpha\int h_{\lambda\alpha}(t-s)X_\alpha(s)\,ds$ exist absolutely and satisfy $\|K_\lambda(t)\|\leq\sqrt{\gamma n}G$. Define $\phi(u,v)=h(u)h(-v)\operatorname{sgn}(u-v)$ and $Q(t)=\frac{\gamma}{2i}\sum_{\alpha\beta}\int\!\int X_\alpha(t+u)X_\beta(t+v)\phi_{\alpha\beta}(u,v)\,du\,dv$. This integral is absolutely convergent and $Q(t)$ is Hermitian. Here $A^\dagger$ is the conjugate transpose and $\|A\|=\sup_{\|z\|_2=1}\|Az\|_2$ is the operator norm on the finite-dimensional complex system space.

## Facts & Assumptions

[F1] The normalized kernel has finite mixed-norm integral $G$ and satisfies $h(-u)=h(u)^\dagger$. Its defining contract gives $\|A\|_{2,1}=\sum_b(\sum_a|A_{ab}|^2)^{1/2}$ and integrable frequency entries $h_{ab}(\omega)$ with $h_{ab}(t)=\int h_{ab}(\omega)e^{-i\omega t}d\omega$. [[lem-qec-author-42f4c98e5e20-ule-normalization]] [[def-qec-prereq-stationary-spectrum-kernel-contract]]

[A1] Assume the Axiom of Countable Choice for the product-integration and change-of-variables suppliers. [[math:def-countable-choice]]

[F2] For two sigma-finite measure spaces, under countable choice, Tonelli applies to nonnegative functions measurable for the completed product, and Fubini applies to its integrable complex functions; the iterated and product integrals agree, with section assertions outside null sets. [[math:thm-tonelli-and-fubini-for-completed-product-measures]]

[F3] Under countable choice, a $C^1$ diffeomorphism $T:U\to V$ of open Euclidean sets preserves Lebesgue measurability and satisfies $\int_V f=\int_U(f\circ T)|\det DT|$ for nonnegative Lebesgue measurable $f$. In particular translations and reflections on $\mathbb R$ have absolute Jacobian one. [[math:thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

[F4] The Fourier transform of a complex $L^1(\mathbb R)$ function, in the convention $\widehat f(\xi)=\int f(\omega)e^{-2\pi i\omega\xi}d\omega$, is bounded and uniformly continuous. [[math:thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions]]

[F5] Complex integrability means finite integral of the modulus, and the integral is defined through real and imaginary parts. The integral is complex-linear on $L^1$ and satisfies $|\int f|\leq\int|f|$. [[math:def-integrable-real-and-complex-functions-and-their-integrals]] [[math:thm-linearity-of-the-lebesgue-integral-on-l-one]] [[math:thm-integral-triangle-inequality]]

[F6] For $x,y\in\mathbb R^n$, the finite Euclidean Cauchy–Schwarz inequality is $|\sum_{a=1}^n x_a y_a|\leq(\sum_{a=1}^n x_a^2)^{1/2}(\sum_{a=1}^n y_a^2)^{1/2}$. [[math:thm-cauchy-schwarz-and-the-euclidean-norm]]

[F7] A map between measurable spaces is measurable when inverse images of all measurable codomain sets are measurable. For measurable spaces $(X,\mathcal A)$ and $(Y,\mathcal B)$, $\mathcal A\otimes\mathcal B$ is the sigma-algebra generated by the rectangles $A\times B$ with $A\in\mathcal A$ and $B\in\mathcal B$. [[math:def-measurable-function-between-measurable-spaces]] [[math:def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F8] On any measurable space, finite real-valued measurable functions are closed under scalar multiplication, sums and products. A finite-valued complex function $f=p+iq$ is measurable exactly when $p,q$ are real measurable; complex products and moduli preserve measurability, using $fg=(pr-qs)+i(ps+qr)$ for $g=r+is$ and $|f|=\sqrt{p^2+q^2}$. [[math:thm-arithmetic-and-lattice-operations-preserve-measurability]] [[math:def-complex-lp-and-euclidean-test-function-conventions]]

## Proof

**Given:** Countable choice, the normalized kernel, and the stated measurable norm-bounded Hermitian matrices. **Goal:** Prove absolute convergence, the jump bound, and Hermiticity.

1.1 The frequency entries in [F1] are in $L^1(\mathbb R)$, so [F4] with $\xi=t/(2\pi)$ makes every time-kernel entry continuous. Its real and imaginary parts have open inverse images of open sets, hence are Borel and therefore Lebesgue measurable by [F7] and [F8]. Translations and reflections in [F3] preserve measurability of the stated $X_\alpha$ entries and of the kernel entries. Lebesgue measure on $\mathbb R$ is sigma-finite, using the finite-measure intervals $[-m,m]$, $m\geq1$. [given, F1, F3, F4, F7, F8]

2.1 Write $\mathcal L$ for the Lebesgue sigma-algebra on $\mathbb R$. If $f:\mathbb R\to\mathbb R$ is Lebesgue measurable and $B\subseteq\mathbb R$ is Borel, then $\{(u,v):f(u)\in B\}=f^{-1}(B)\times\mathbb R$ and $\{(u,v):f(v)\in B\}=\mathbb R\times f^{-1}(B)$. These are rectangles in $\mathcal L\otimes\mathcal L$ by [F7], proving the coordinate-pullback assertion directly. Apply this to the real and imaginary parts of the translated and reflected entries from step 1.1; [F8] then gives their complex measurability on this product sigma-algebra. [F7, F8, step 1.1]

3.1 In particular the coordinate functions $u,v$ are product-measurable, and [F8] makes $d(u,v)=u-v$ measurable. The sets $E_+=\{d>0\}$ and $E_-=\{d<0\}$ are measurable. For a measurable set $E$, every inverse image under its indicator $\mathbf1_E$ is one of $\varnothing,E,E^c,\mathbb R^2$, so [F7] makes the indicator measurable. Thus $\operatorname{sgn}(u-v)=\mathbf1_{E_+}-\mathbf1_{E_-}$ is measurable by [F8]. The same fact supplies finite sums and products of the lifted complex entries. Nonnegative square roots are measurable as well: for measurable $r\geq0$, $\{\sqrt r>c\}=\{r>c^2\}$ when $c\geq0$, and this set is the whole space when $c<0$. Consequently the mixed norm $a(u)=\|h(u)\|_{2,1}$, the majorants used below, every entry of the jump integrand, and every entry of the Lamb integrand are measurable on their stated one-variable or product spaces. Product-measurable functions are measurable for the completion, as the latter sigma-algebra contains the former. Fixing either variable gives the same finite arithmetic constructions on measurable one-variable functions, so every section is measurable too. This establishes the measurability hypotheses needed for [F2]. [F2, F7, F8, step 1.1, step 2.1]

4.1 Put $a(u)=\|h(u)\|_{2,1}$ and $S(A)=\sum_{a,b}|A_{ab}|$. Apply [F6] in each column $b$ to the real vectors $x_a=|A_{ab}|$ and $y_a=1$, $1\leq a\leq n$. This gives $\sum_a|A_{ab}|\leq\sqrt n(\sum_a|A_{ab}|^2)^{1/2}$; summing over $b$ yields $S(A)\leq\sqrt n\|A\|_{2,1}$. Hence $\sum_\alpha|h_{\lambda\alpha}(t-s)|\leq\sqrt n\,a(t-s)$. By [F3] with $s\mapsto t-s$, $\int a(t-s)ds=G$. The jump integrand has norm at most $\sqrt{\gamma n}\,a(t-s)$, so every entry is integrable. For a matrix-valued integrable function $M$ and unit vectors $z,w$, [F5] gives $|w^\dagger(\int M)z|=|\int w^\dagger Mz|\leq\int\|M\|$; taking the supremum over $z,w$ yields $\|\int M\|\leq\int\|M\|$. This proves absolute convergence and $\|K_\lambda(t)\|\leq\sqrt{\gamma n}G$. [given, F1, F3, F5, F6, step 3.1]

5.1 The entrywise product estimate is $S(AB)\leq S(A)S(B)$, by expanding each entry and applying the finite triangle inequality. Since $\|X_\alpha X_\beta\|\leq1$ directly from the operator-norm definition, the norm of the numerator integrand $\sum_{\alpha\beta}X_\alpha(t+u)X_\beta(t+v)\phi_{\alpha\beta}(u,v)$ is at most $S(h(u)h(-v))\leq n a(u)a(-v)$. Apply the nonnegative part of [F2] to this measurable majorant. Its iterated integral is $n(\int a(u)du)(\int a(-v)dv)=nG^2<\infty$, with the second factor evaluated by reflection in [F3]. This proves absolute convergence before any complex Fubini interchange. Each section is also integrable, since fixing either variable leaves a finite value of one factor times an integrable function of the other. [given, A1, F1, F2, F3, step 3.1, step 4.1]

6.1 By the integrable part of [F2], applied entrywise using step 5.1, either order of integration gives the same numerator matrix $N(t)$ of $Q(t)$. By [F5], conjugation commutes with an absolutely convergent scalar integral: write $f=p+iq$ with real integrable $p,q$, and use $\int\overline f=\int p-i\int q=\overline{\int f}$. Linearity handles finite matrix sums, so adjoints can be taken inside $N(t)$. [A1, F2, F5, step 5.1]

7.1 The adjoint symmetry in [F1] and the real antisymmetric sign function give $\phi(v,u)^\dagger=(h(v)h(-u))^\dagger\operatorname{sgn}(v-u)=-h(u)h(-v)\operatorname{sgn}(u-v)=-\phi(u,v)$. Taking the adjoint of $N(t)$ reverses the two Hermitian $X$ factors. Fubini as justified in step 6.1 permits exchanging integration order; then relabel $u,v$ and $\alpha,\beta$. The resulting scalar coefficient is $\overline{\phi_{\beta\alpha}(v,u)}=-\phi_{\alpha\beta}(u,v)$, so $N(t)^\dagger=-N(t)$. Since $\gamma$ is real, $(\gamma N(t)/(2i))^\dagger=\gamma N(t)/(2i)$, proving that $Q(t)$ is Hermitian, with the asserted convergence and jump bound already established. [given, F1, F2, step 4.1, step 5.1, step 6.1] ∎
