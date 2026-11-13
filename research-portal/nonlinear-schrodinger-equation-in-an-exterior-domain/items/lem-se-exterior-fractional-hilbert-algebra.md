---
id: lem-se-exterior-fractional-hilbert-algebra
kind: lemma
domain: mathematics
title: Fractional Hilbert Sobolev algebra on a smooth exterior domain
status: published
deps:
  - lem-se-sobolev-extension-retraction
  - math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - math:thm-young-convolution-inequality
  - math:thm-holder-inequality-for-integrals
  - math:thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis
  - math:thm-fourier-inversion-on-schwartz-space
  - math:lem-schwartz-dense-in-fourier-bessel-potential-space
  - math:thm-sharp-trace-theorem-for-w-one-p
  - math:lem-weak-derivatives-are-polynomial-fourier-multipliers
  - math:thm-plancherel
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:thm-sobolev-spaces-are-banach-spaces
  - math:def-schwartz-space-and-its-seminorms
  - math:thm-lp-trace-operator-on-a-bounded-c-one-domain
dependency_roles:
  lem-se-sobolev-extension-retraction: mathematical-premise
  math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces: mathematical-premise
  math:thm-young-convolution-inequality: mathematical-premise
  math:thm-holder-inequality-for-integrals: mathematical-premise
  math:thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis: mathematical-premise
  math:thm-fourier-inversion-on-schwartz-space: mathematical-premise
  math:lem-schwartz-dense-in-fourier-bessel-potential-space: mathematical-premise
  math:thm-sharp-trace-theorem-for-w-one-p: mathematical-premise
  math:lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  math:thm-plancherel: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-sobolev-space-wkp-and-its-norm: mathematical-premise
  math:thm-sobolev-spaces-are-banach-spaces: mathematical-premise
  math:def-schwartz-space-and-its-seminorms: mathematical-premise
  math:thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
formulation_deps:
  - lem-se-sobolev-extension-retraction
  - math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - math:thm-sharp-trace-theorem-for-w-one-p
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:thm-lp-trace-operator-on-a-bounded-c-one-domain
argument_deps:
  - lem-se-sobolev-extension-retraction
  - math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces
  - math:thm-young-convolution-inequality
  - math:thm-holder-inequality-for-integrals
  - math:thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis
  - math:thm-fourier-inversion-on-schwartz-space
  - math:lem-schwartz-dense-in-fourier-bessel-potential-space
  - math:thm-sharp-trace-theorem-for-w-one-p
  - math:lem-weak-derivatives-are-polynomial-fourier-multipliers
  - math:thm-plancherel
  - math:def-axiom-of-choice
  - math:def-sobolev-space-wkp-and-its-norm
  - math:thm-sobolev-spaces-are-banach-spaces
  - math:def-schwartz-space-and-its-seminorms
  - math:thm-lp-trace-operator-on-a-bounded-c-one-domain
---

## Statement

Assume the Axiom of Choice. Let $n\in\{2,3\}$, $n/2<s\le2$, and let $\Omega$ be the complement of a compact obstacle with smooth boundary. Write $H^s(\Omega)$ for restrictions to $\Omega$ of whole-space Bessel-potential functions, with the infimum of the whole-space $H^s$ norms over extensions as its norm. Then there is a constant $C$ depending on $n,s,\Omega$ such that $\|u\|_{L^\infty(\Omega)}\le C\|u\|_{H^s(\Omega)}$ and $\|uv\|_{H^s(\Omega)}\le C\|u\|_{H^s(\Omega)}\|v\|_{H^s(\Omega)}$.

For a complex polynomial $P(z,\bar z)$ of degree at most five with $P(0,0)=0$, there is a constant $C_P$ such that $\|P(u,\bar u)\|_{H^s}\le C_P\sum_{j=1}^5\|u\|_{H^s}^j$ and $\|P(u,\bar u)-P(v,\bar v)\|_{H^s}\le C_P\|u-v\|_{H^s}\sum_{j=1}^5(\|u\|_{H^s}+\|v\|_{H^s})^{j-1}$. In particular this covers cubic and quintic nonlinearities. The Dirichlet trace means the $H^1$ trace on the obstacle boundary, defined using a bounded smooth collar. If both factors have zero Dirichlet trace, their product has zero Dirichlet trace. No endpoint assertion at $s=n/2$ is made.

## Facts & Assumptions

**Given:** The hypotheses, spaces and conventions in the Statement.

[F1] The Axiom of Choice supplies the countable-choice assumptions of the Fourier and convolution inputs. [[math:def-axiom-of-choice]]

[F2] Whole-space $H^s$ is the completion of Schwartz functions with norm $\|\langle\xi\rangle^s\widehat f\|_2$, where $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$ and the Fourier transform uses the negative-sign $2\pi$ convention. Schwartz functions are dense in this norm for the present $s$. [[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]] [[math:lem-schwartz-dense-in-fourier-bessel-potential-space]]

[F3] For Schwartz functions Fourier inversion is absolutely convergent, and the transform of their product is the convolution of their transforms. Holder's inequality and Young's $L^1*L^2\to L^2$ inequality apply to the indicated nonnegative functions. [[math:thm-fourier-inversion-on-schwartz-space]] [[math:thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis]] [[math:thm-holder-inequality-for-integrals]] [[math:thm-young-convolution-inequality]]

[F4] On the smooth exterior, restriction-quotient spaces have the compatible collar and free-tail extension/retraction described by [[lem-se-sobolev-extension-retraction]]. For a bounded smooth collar $G\subset\Omega$ whose boundary contains the obstacle boundary $B=\partial\Omega$, the $p=2$, $\mathbb K=\mathbb C$ instance of [[math:thm-lp-trace-operator-on-a-bounded-c-one-domain]] gives a bounded $T_G:W^{1,2}(G;\mathbb C)\to L^2(\partial G;\mathbb C)$ agreeing with classical restriction on continuous Sobolev functions. Restrict its output to $B$ and write $Tu=(T_G(u|_G))|_B$; restriction to these boundary components does not increase the $L^2$ norm. This is the same trace operator appearing in [[math:thm-sharp-trace-theorem-for-w-one-p]].

[F5] Fourier transformation is unitary on $L^2$, and distributional differentiation corresponds to multiplication by $2\pi i\xi_j$. [[math:thm-plancherel]] [[math:lem-weak-derivatives-are-polynomial-fourier-multipliers]]

[F6] Schwartz functions are actual smooth complex functions $f$ for which $\sup_{x\in\mathbb R^n}|x^\alpha\partial^\beta f(x)|<\infty$ for every pair of multi-indices $\alpha,\beta$. [[math:def-schwartz-space-and-its-seminorms]]

[F7] For any open set $D$, the weak $H^1(D)$ notation means $W^{1,2}(D;\mathbb C)$, consisting of $L^2$ classes with first weak derivatives in $L^2$, with norm $\|h\|_{W^{1,2}(D)}=(\|h\|_2^2+\sum_{k=1}^n\|\partial_k h\|_2^2)^{1/2}$. Under the assumed AC this space is complete. [[math:def-sobolev-space-wkp-and-its-norm]] [[math:thm-sobolev-spaces-are-banach-spaces]]

## Proof

**Given:** The hypotheses, spaces and conventions in the Statement.

[F1] The Axiom of Choice supplies the countable-choice assumptions of the Fourier and convolution inputs. [[math:def-axiom-of-choice]]

[F2] Whole-space $H^s$ is the completion of Schwartz functions with norm $\|\langle\xi\rangle^s\widehat f\|_2$, where $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$ and the Fourier transform uses the negative-sign $2\pi$ convention. Schwartz functions are dense in this norm for the present $s$. [[math:thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]] [[math:lem-schwartz-dense-in-fourier-bessel-potential-space]]

[F3] For Schwartz functions Fourier inversion is absolutely convergent, and the transform of their product is the convolution of their transforms. Holder's inequality and Young's $L^1*L^2\to L^2$ inequality apply to the indicated nonnegative functions. [[math:thm-fourier-inversion-on-schwartz-space]] [[math:thm-fourier-transform-of-a-product-under-an-integrable-transform-hypothesis]] [[math:thm-holder-inequality-for-integrals]] [[math:thm-young-convolution-inequality]]

[F4] On the smooth exterior, restriction-quotient spaces have the compatible collar and free-tail extension/retraction described by [[lem-se-sobolev-extension-retraction]]. For a bounded smooth collar $G\subset\Omega$ whose boundary contains the obstacle boundary $B=\partial\Omega$, the $p=2$, $\mathbb K=\mathbb C$ instance of [[math:thm-lp-trace-operator-on-a-bounded-c-one-domain]] gives a bounded $T_G:W^{1,2}(G;\mathbb C)\to L^2(\partial G;\mathbb C)$ agreeing with classical restriction on continuous Sobolev functions. Restrict its output to $B$ and write $Tu=(T_G(u|_G))|_B$; restriction to these boundary components does not increase the $L^2$ norm. This is the same trace operator appearing in [[math:thm-sharp-trace-theorem-for-w-one-p]].

[F5] Fourier transformation is unitary on $L^2$, and distributional differentiation corresponds to multiplication by $2\pi i\xi_j$. [[math:thm-plancherel]] [[math:lem-weak-derivatives-are-polynomial-fourier-multipliers]]

[F6] Schwartz functions are actual smooth complex functions $f$ for which $\sup_{x\in\mathbb R^n}|x^\alpha\partial^\beta f(x)|<\infty$ for every pair of multi-indices $\alpha,\beta$. [[math:def-schwartz-space-and-its-seminorms]]

[F7] For any open set $D$, the weak $H^1(D)$ notation means $W^{1,2}(D;\mathbb C)$, consisting of $L^2$ classes with first weak derivatives in $L^2$, with norm $\|h\|_{W^{1,2}(D)}=(\|h\|_2^2+\sum_{k=1}^n\|\partial_k h\|_2^2)^{1/2}$. Under the assumed AC this space is complete. [[math:def-sobolev-space-wkp-and-its-norm]] [[math:thm-sobolev-spaces-are-banach-spaces]]



**Given:** The hypotheses and conventions in the Statement.

**Goal:** Prove the embedding, multiplication and polynomial estimates, and the trace assertion.

1.1 Since $2s>n$, polar integration gives $A=\|\langle\xi\rangle^{-s}\|_2<\infty$. For Schwartz $f$, Holder gives $\|\widehat f\|_1\le A\|f\|_{H^s}$, and inversion gives $\|f\|_\infty\le A\|f\|_{H^s}$. Moreover $\langle\xi\rangle^s\le C_s(\langle\eta\rangle^s+\langle\xi-\eta\rangle^s)$: use $\langle\xi\rangle\le\langle\eta\rangle+\langle\xi-\eta\rangle$ and the elementary inequality for positive powers. The product formula and Young's inequality therefore give $\|fg\|_{H^s}\le C_s(\|\langle\cdot\rangle^s\widehat f\|_2\|\widehat g\|_1+\|\widehat f\|_1\|\langle\cdot\rangle^s\widehat g\|_2)\le 2C_sA\|f\|_{H^s}\|g\|_{H^s}$. [F2, F3, F6, given]

2.1 For arbitrary whole-space $H^s$ elements choose Schwartz approximating sequences. The preceding estimates make them Cauchy both uniformly and in the product norm. The uniform limits represent the original $L^2$ classes, since $\|h\|_2\le\|h\|_{H^s}$; consequently the limiting product is their pointwise product almost everywhere. Bilinearity and the difference identity $f_jg_j-f_kg_k=(f_j-f_k)g_j+f_k(g_j-g_k)$ give the same estimates for all whole-space factors. Complex conjugation preserves the norm because its Fourier transform is the conjugate reflected transform. [F2, F3, F6, step 1.1]

3.1 For $u,v\in H^s(\Omega)$ choose whole-space extensions $U,V$. Restriction of $UV$ is $uv$, so the quotient norm and step 2.1 give $\|uv\|_{H^s(\Omega)}\le C\|U\|_{H^s(\mathbb R^n)}\|V\|_{H^s(\mathbb R^n)}$. Taking infima independently over the two nonempty extension classes gives the product estimate. The same infimum argument gives the $L^\infty$ estimate, and conjugating extensions shows $\|\bar u\|_{H^s(\Omega)}=\|u\|_{H^s(\Omega)}$. [F2, F4, step 2.1, given]

3.2 Let $U_j,V_j$ be Schwartz approximations to extensions $U,V$ of $u,v$. In the weak Sobolev convention of [F7], the Fourier derivative and Plancherel identities give $\|h\|_{W^{1,2}(\mathbb R^n)}^2=\|\widehat h\|_2^2+4\pi^2\sum_{k=1}^n\|\xi_k\widehat h\|_2^2\le C\|h\|_{H^s(\mathbb R^n)}^2$ for Schwartz $h$, because $s>1$. This bound and step 2.1 make $U_j,V_j,U_jV_j$ Cauchy in $W^{1,2}(\mathbb R^n;\mathbb C)$. Completeness from [F7] gives limits in that space, and their $L^2$ limits identify them with $U,V,UV$, respectively. Restriction decreases the integrals defining the weak Sobolev norm, so the restrictions and products converge in weak $H^1$ on a bounded smooth collar containing the obstacle boundary. They also converge uniformly by steps 1.1 and 2.1. [F2, F5, F6, F7, step 1.1, step 2.1, given]

4.1 Apply the product estimate repeatedly to each monomial $u^a\bar u^b$, where $1\le a+b\le5$. For differences telescope the $a+b$ factors, replacing one factor at a time; each difference is either $u-v$ or its conjugate. Summing the finitely many monomials gives both displayed polynomial inequalities, with a constant depending on the coefficients and the algebra constant. The zero constant term is needed because the exterior has infinite measure. [step 3.1, algebra]

4.2 Apply the bounded-domain $L^2$ trace operator $T_G$ from F4 to the collar $G$ and restrict its values to the obstacle boundary $B$. Step 3.2 and its boundedness give $T(U_j|_\Omega)\to Tu$, $T(V_j|_\Omega)\to Tv$ and $T((U_jV_j)|_\Omega)\to T(uv)$ in $L^2(B)$. Here $T(U_j|_\Omega)=(T_G(U_j|_G))|_B$, with the analogous notation for the other factors and products. Since the smooth restrictions belong to $C(\overline G)\cap W^{1,2}(G;\mathbb C)$, the classical-restriction property in F4 gives $T(U_jV_j)=T(U_j)T(V_j)$ on $B$. Uniform convergence on the compact boundary and convergence of the other trace in $L^2$ show that these products converge to $(Tu)(Tv)$ in $L^2$. Hence $T(uv)=(Tu)(Tv)$; in particular it vanishes if both traces vanish. The bounded-collar definition is independent of the chosen collar because smooth restrictions agree on the common obstacle boundary and are dense in the relevant approximations. [F4, step 3.2]

5.1 Steps 3.1 and 4.1 establish the embedding, algebra and polynomial estimates, and step 4.2 establishes the zero-trace consequence. The integrability used in step 1.1 requires $2s>n$, so the proof makes no endpoint claim. [step 1.1, step 3.1, step 4.1, step 4.2] ∎
