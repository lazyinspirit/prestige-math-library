---
id: thm-l-two-kernels-give-hilbert-schmidt-operators
kind: theorem
title: L two kernels give Hilbert–Schmidt operators
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-hilbert-schmidt-operator, thm-hilbert-schmidt-norm-is-basis-independent, def-hilbert-space, def-square-summable-family-on-an-arbitrary-index-set, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-finite-sigma-finite-and-semifinite-measures, thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique, def-completed-product-measure, thm-completion-of-a-measure-space, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-sections-of-product-measurable-sets-are-measurable, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-nonnegative-lebesgue-integral, def-integral-of-a-nonnegative-simple-function, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, lem-l-two-with-the-integral-pairing-is-a-hilbert-space, thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p, lem-product-rectangle-kernels-are-dense-in-product-l-two, thm-completion-measurable-functions-have-base-measurable-representatives, thm-parseval-equivalences-for-a-complete-orthonormal-family, thm-hilbert-space-fourier-expansion, thm-bessel-inequality-for-an-arbitrary-orthonormal-family, lem-finite-bessel-inequality, thm-zorn, thm-orthogonal-decomposition-by-a-closed-subspace, def-hilbert-space-adjoint, thm-hilbert-adjoint-properties, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-countable-choice, def-bounded-linear-operator, def-operator-norm]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Roe, Lectures on Analysis — Lecture 13, Proposition 13.5, printed pp. 67–68"
      url: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/1/4020/files/2017/12/analysis-slides-278829v.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.23 and the matrix-coefficient characterization, printed pp. 93–95"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis — product-measure Fubini/Tonelli and Lp approximation, §§7A, 10C"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(X,\mathcal A,\mu)$
and $(Y,\mathcal B,\nu)$ be sigma-finite measure spaces
([[def-finite-sigma-finite-and-semifinite-measures]]), let $\mu\times\nu$ be
their product measure
([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]),
let $\overline{\mu\times\nu}$ be its completion
([[def-completed-product-measure]]), and let $k$ be a class in
$L^2(\overline{\mu\times\nu};\mathbb C)$. Write $L^2(\nu;\mathbb C)$ and
$L^2(\mu;\mathbb C)$ for the complex $L^2$ spaces of the original measures,
with $\langle f,g\rangle=\int f\overline g$ linear in the first variable
([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]],
[[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]). Then:

1. **(representative of finite norm)** there is a
   $(\mathcal A\otimes\mathcal B)$-measurable representative $k_0$ of $k$ with
   $\int|k_0|^2\,d(\mu\times\nu)<+\infty$, and its norm equals $\|k\|_2$;
2. **(the kernel operator)** for every $f\in L^2(\nu;\mathbb C)$ the section
   integral $(T_kf)(x):=\int_Yk_0(x,y)f(y)\,d\nu(y)$ converges for
   $\mu$-almost every $x$, agrees almost everywhere with a $\mu$-measurable
   function, and its class in $L^2(\mu;\mathbb C)$ depends only on the classes
   of $f$ and $k$; the resulting map $T_k:L^2(\nu;\mathbb C)\to
   L^2(\mu;\mathbb C)$ is linear and bounded with
   $\|T_k\|\le\|k\|_2$ ([[def-bounded-linear-operator]],
   [[def-operator-norm]]);
3. **(exact Hilbert–Schmidt norm)** every Hilbert space admits a Hilbert basis
   under the Axiom of Choice
   ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]),
   and for every Hilbert basis $E$ of $L^2(\nu;\mathbb C)$ and every Hilbert
   basis $F$ of $L^2(\mu;\mathbb C)$,
   $$\sum_{e\in E}\|T_ke\|^2=\sum_{f\in F}\|T_k^*f\|^2=\|k\|_2^2,$$
   the sums being finite-subset suprema
   ([[def-square-summable-family-on-an-arbitrary-index-set]]); consequently
   $T_k$ is Hilbert–Schmidt relative to every such basis and
   $\|T_k\|_{HS}=\|k\|_2$ ([[def-hilbert-schmidt-operator]],
   [[thm-hilbert-schmidt-norm-is-basis-independent]]).

The operator is interpreted through the representative $k_0$ of claim 1, and
claim 2 asserts that no other choice of representative changes the resulting
classes; this is the sense in which a kernel of the completed product defines
an operator on the $L^2$ spaces of the original factors.

## Facts & Assumptions

**Given:** The Axiom of Choice, sigma-finite $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, their product $\rho:=\mu\times\nu$ and completed product $\overline{\rho}$, and a class $k\in L^2(\overline{\rho};\mathbb C)$.

[F2] The product measure is the unique measure on $\mathcal A\otimes\mathcal B$ with $(\mu\times\nu)(A\times B)=\mu(A)\nu(B)$ on measurable rectangles and is sigma-finite; the completed product is its completion, so it is a complete measure extending $\rho$ and agrees with $\rho$ on every $(\mathcal A\otimes\mathcal B)$-measurable set ([[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[def-completed-product-measure]], [[thm-completion-of-a-measure-space]]).

[F3] Tonelli applies to a nonnegative $(\mathcal A\otimes\mathcal B)$-measurable function $g$: the section-integral function is measurable and $\int g\,d\rho=\int_X\bigl(\int_Yg_x\,d\nu\bigr)d\mu$; sections of $(\mathcal A\otimes\mathcal B)$-measurable sets are measurable, $\rho$ is countably additive and monotone, and a nonnegative measurable function has zero integral exactly when it vanishes almost everywhere ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-sections-of-product-measurable-sets-are-measurable]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F4] Fubini applies to every $g\in L^1(\rho;\mathbb C)$: for $\mu$-almost every $x$ the section $g_x$ is $\nu$-integrable, the section integrals form a $\mu$-integrable function after zero extension, and the iterated integral equals $\int g\,d\rho$ ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F5] On complex $L^2$ the pairing $\langle h_1,h_2\rangle=\int h_1\overline{h_2}$ is representative-independent, linear in the first variable, conjugate-symmetric and positive definite, satisfies Cauchy–Schwarz, and complex $L^2$ of a measure space is a Hilbert space under Countable Choice ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

[F6] Finite complex simple functions with finite-measure nonzero sets are dense in complex $L^2$ ([[thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p]]).

[F7] Finite complex linear combinations of finite-measure rectangle kernels are dense in $L^2(\rho;\mathbb C)$ and in $L^2(\overline{\rho};\mathbb C)$ ([[lem-product-rectangle-kernels-are-dense-in-product-l-two]]).

[F8] Under Countable Choice every $\overline{\rho}$-measurable real function agrees $\overline{\rho}$-almost everywhere with an $(\mathcal A\otimes\mathcal B)$-measurable function ([[thm-completion-measurable-functions-have-base-measurable-representatives]]).

[F9] The nonnegative integral is the supremum of the integrals of the nonnegative simple functions it dominates, and the integral of a nonnegative simple function is the corresponding finite sum of set values ([[def-nonnegative-lebesgue-integral]], [[def-integral-of-a-nonnegative-simple-function]]).

[F10] For a Hilbert basis $G$ of a Hilbert space and $h$ in it, $\|h\|^2=\sum_{g\in G}|\langle h,g\rangle|^2$, and the finite-subset net of partial sums converges to $h$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[thm-hilbert-space-fourier-expansion]]).

[F11] For an orthonormal family $(\psi_i)$ in an inner-product space and $h$ in it, $\sum_i|\langle h,\psi_i\rangle|^2\le\|h\|^2$; if $h$ lies in the span of a finite orthonormal family $A$, then $\sum_{\psi\in A}|\langle h,\psi\rangle|^2=\|h\|^2$ (the finite Parseval identity) ([[thm-bessel-inequality-for-an-arbitrary-orthonormal-family]], [[lem-finite-bessel-inequality]]).

[F12] Assuming Choice, every nonempty poset in which every chain has an upper bound has a maximal element; and in a Hilbert space a proper closed subspace has a nonzero orthogonal vector, every vector decomposing as $h=m+n$ with $m$ in the subspace and $n$ orthogonal to it ([[thm-zorn]], [[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F13] Choice implies Countable Choice and Dependent Choice; Countable Choice is the hypothesis consumed by the completion-representative interface, the Hilbert structure of $L^2$, and Parseval, and Riesz representation supplies the Hilbert adjoint $T_k^*$ with $\langle T_ke,f\rangle=\langle e,T_k^*f\rangle$ ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-countable-choice]], [[def-hilbert-space-adjoint]], [[thm-hilbert-adjoint-properties]]).

[F14] A pointwise almost-everywhere limit of a sequence of measurable functions is measurable when represented by its limit superior ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F15] The operator $T_k$ is Hilbert–Schmidt relative to a Hilbert basis $G$ of $L^2(\nu;\mathbb{C})$ exactly when $\sum_{e\in G}\|T_ke\|^2<+\infty$, its Hilbert–Schmidt norm is then the square root of that sum, and the finiteness and the value are independent of $G$ ([[def-hilbert-schmidt-operator]], [[thm-hilbert-schmidt-norm-is-basis-independent]]).

## Proof

**Proof technique:** direct.

**Given:** Choice, sigma-finite $(X,\mathcal A,\mu)$, $(Y,\mathcal B,\nu)$, the product measure $\rho=\mu\times\nu$ with completion $\overline{\rho}$, a class $k\in L^2(\overline{\rho};\mathbb C)$, and the complex $L^2$ spaces $L^2(\nu;\mathbb C)$, $L^2(\mu;\mathbb C)$ with their first-variable-linear pairings.

1.1 **Hilbert bases exist.** For a real or complex Hilbert space $H$, let $\mathcal P$ be the set of orthonormal subsets of $H$ ordered by inclusion; $\mathcal P$ is nonempty because $\varnothing$ is orthonormal, and the union of a chain in $\mathcal P$ is orthonormal, because any two of its elements already lie in a common member of the chain, so it is an upper bound. By [F12] there is a maximal element $E$. If the closed linear span $M$ of $E$ were a proper closed subspace, then [F12] applied to some $x\notin M$ would give $x=m+n$ with $m\in M$ and $n$ orthogonal to $M$ and $n\ne0$; then $e:=n/\|n\|$ would satisfy $\|e\|=1$ and be orthogonal to every element of $E\subseteq M$, so $E\cup\{e\}$ would be an orthonormal set strictly containing $E$, contradicting maximality; hence $M=H$ and $E$ is a Hilbert basis of $H$. In particular $L^2(\nu;\mathbb{C})$ and $L^2(\mu;\mathbb{C})$, being Hilbert spaces by [F5], admit Hilbert bases. [F5, F12, F13]

1.2 **A base-measurable representative with the same norm.** Apply [F8] to the real and imaginary parts of $k$ and replace infinite values of the resulting representatives by $0$; combining them gives an $(\mathcal A\otimes\mathcal B)$-measurable complex function $k_0$ with $k_0=k$ $\overline{\rho}$-almost everywhere. Then $g:=|k_0|^2$ is $(\mathcal A\otimes\mathcal B)$-measurable and nonnegative. For every nonnegative simple $(\mathcal A\otimes\mathcal B)$-measurable $s\le g$, the integrals against $\rho$ and $\overline{\rho}$ agree, because the two measures agree on the finitely many base-measurable level sets occurring in $s$ by [F2] and [F9]. Conversely, let $t\le g$ be a nonnegative $\overline{\rho}$-measurable simple function and write its positive-level representation as $t=\sum_{j=1}^m c_j\mathbf 1_{E_j}$, where the $c_j>0$ and the completed-measurable sets $E_j$ are pairwise disjoint. By the definition of the completion, write $E_j=A_j\cup N_j$, where $A_j$ is $(\mathcal A\otimes\mathcal B)$-measurable and $N_j$ is contained in a base-measurable $\rho$-null set. Since $A_j\subseteq E_j$, the sets $A_j$ remain pairwise disjoint, and
$$s:=\sum_{j=1}^m c_j\mathbf 1_{A_j}$$
is a base-measurable simple function satisfying $0\le s\le t\le g$. Moreover [F2] and [F9] give $\int s\,d\rho=\sum_jc_j\rho(A_j)=\sum_jc_j\overline\rho(E_j)=\int t\,d\overline\rho$. Thus every completed-simple minorant contributes the value of a base-simple minorant, while every base-simple minorant is also completed-simple; the two suprema in [F9] coincide and $\int g\,d\rho=\int g\,d\overline\rho$. Finally $|k_0|=|k|$ $\overline\rho$-almost everywhere, so the norm of the class $k$ gives $\int g\,d\overline\rho=\int|k|^2\,d\overline\rho<+\infty$. Hence $k_0\in L^2(\rho;\mathbb C)$ and $\|k_0\|_{L^2(\rho)}=\|k\|_2$. [F2, F8, F9, F13]

2.1 **Almost every section is square integrable.** By [F3] applied to the nonnegative function $(x,y)\mapsto|k_0(x,y)|^2$, whose integral is $\|k_0\|_{L^2(\rho)}^2<+\infty$ by [step 1.2], the function $x\mapsto\int_Y|k_0(x,y)|^2\,d\nu(y)$ is measurable with finite integral; hence $\|k_0(x,\cdot)\|_{L^2(\nu)}<+\infty$ for $\mu$-almost every $x$, and $\int_X\|k_0(x,\cdot)\|_{L^2(\nu)}^2\,d\mu(x)=\|k_0\|_{L^2(\rho)}^2$. [step 1.2, F3]

3.1 **The section integral exists almost everywhere and is bounded by the section norm.** Let $f\in L^2(\nu;\mathbb{C})$. For every $x$ with $\|k_0(x,\cdot)\|_{L^2(\nu)}<+\infty$ the section $k_0(x,\cdot)$ is $\mathcal B$-measurable by [F3] and $f$ is $\nu$-measurable, so $y\mapsto k_0(x,y)f(y)$ is $\nu$-measurable, and Cauchy–Schwarz in $L^2(\nu)$ by [F5] gives $\int_Y|k_0(x,y)f(y)|\,d\nu(y)\le\|k_0(x,\cdot)\|_{L^2(\nu)}\|f\|_{L^2(\nu)}<+\infty$ together with $|(T_{k_0}f)(x)|=\bigl|\int_Yk_0(x,y)f(y)\,d\nu(y)\bigr|\le\|k_0(x,\cdot)\|_{L^2(\nu)}\|f\|_{L^2(\nu)}$. By [step 2.1] these estimates hold for $\mu$-almost every $x$, which is where $(T_{k_0}f)(x)$ is defined. [step 2.1, F3, F5]

4.1 **Measurability.** If $f=\sum_{j<m}c_j\mathbf 1_{B_j}$ is a finite simple function with $\nu(B_j)<+\infty$, then for every $j$ the indicator $\mathbf 1_{B_j}$ lies in $L^2(\nu;\mathbb{C})$ because $\nu(B_j)<+\infty$, so [step 3.1] applied to it shows that the integral $x\mapsto\int_Yk_0(x,y)\mathbf 1_{B_j}(y)\,d\nu(y)$ is defined and finite for $\mu$-almost every $x$. It is also $\mu$-measurable: the four nonnegative functions $(\operatorname{Re}g_j)^+,(\operatorname{Re}g_j)^-,(\operatorname{Im}g_j)^+,(\operatorname{Im}g_j)^-$, where $g_j(x,y):=k_0(x,y)\mathbf 1_{B_j}(y)$ is $(\mathcal A\otimes\mathcal B)$-measurable, have $\mu$-measurable section integrals by Tonelli [F3], and on the conull set where the integral of $g_j$ is finite the real and imaginary parts of that integral are differences of these measurable functions, so zero-extension over the exceptional null set makes the section-integral function measurable; a finite linear combination of these is $\mu$-measurable, so $T_{k_0}f$ is $\mu$-measurable for such $f$. For arbitrary $f\in L^2(\nu;\mathbb{C})$, [F6] gives finite simple functions $f_j$ with $\|f_j-f\|_{L^2(\nu)}\to0$; by [step 3.1], $|T_{k_0}(f_j-f)(x)|\le\|k_0(x,\cdot)\|_{L^2(\nu)}\|f_j-f\|_{L^2(\nu)}\to0$ for $\mu$-almost every $x$, so $T_{k_0}f$ agrees $\mu$-almost everywhere with the limit superior of the measurable functions $T_{k_0}f_j$, which is $\mu$-measurable by [F14]. [step 3.1, F3, F5, F6, F14]

4.2 **Independence of representatives and linearity.** If $f=f'$ $\nu$-almost everywhere then $k_0(x,\cdot)(f-f')=0$ $\nu$-almost everywhere for every $x$, so $T_{k_0}f=T_{k_0}f'$ wherever both are defined, in particular $\mu$-almost everywhere. If $k_1$ is a second $(\mathcal A\otimes\mathcal B)$-measurable representative of $k$ of finite $L^2(\rho)$ norm, then $|k_0-k_1|$ has $\rho$-integral $0$, so [F3] gives $\int_Y|k_0(x,y)-k_1(x,y)|\,d\nu(y)=0$ for $\mu$-almost every $x$, hence the sections agree $\nu$-almost everywhere for $\mu$-almost every $x$ and $T_{k_0}f=T_{k_1}f$ $\mu$-almost everywhere; linearity in $f$ is linearity of the integral. [step 3.1, F3, F5]

4.3 **The orthonormal family of product kernels and the pairing identity.** Fix a Hilbert basis $E$ of $L^2(\nu;\mathbb{C})$ and a Hilbert basis $F$ of $L^2(\mu;\mathbb{C})$, both of which exist by [step 1.1], and for $f\in F$, $e\in E$ let $\psi_{f,e}$ be the class in $L^2(\rho;\mathbb{C})$ of $(x,y)\mapsto f(x)\overline{e(y)}$; this function is $(\mathcal A\otimes\mathcal B)$-measurable with $\|\psi_{f,e}\|_{L^2(\rho)}^2=\|f\|_{L^2(\mu)}^2\|e\|_{L^2(\nu)}^2=1$ by Tonelli [F3], and for $f,f'\in F$, $e,e'\in E$ the pairing $\langle\psi_{f,e},\psi_{f',e'}\rangle=\int_Xf\overline{f'}\,d\mu\cdot\overline{\int_Ye\overline{e'}\,d\nu}=\langle f,f'\rangle_{L^2(\mu)}\overline{\langle e,e'\rangle_{L^2(\nu)}}$ vanishes unless $f=f'$ and $e=e'$, again by [F3]; so $(\psi_{f,e})$ is an orthonormal family in $L^2(\rho;\mathbb{C})$. Moreover $\langle T_ke,f\rangle_{L^2(\mu)}=\int_X\bigl(\int_Yk_0(x,y)e(y)\,d\nu(y)\bigr)\overline{f(x)}\,d\mu(x)=\int_{X\times Y}k_0(x,y)e(y)\overline{f(x)}\,d\rho(x,y)=\langle k,\psi_{f,e}\rangle_{L^2(\rho)}$, where the middle equality is Fubini [F4] applied to the $L^1(\rho)$ function $(x,y)\mapsto k_0(x,y)e(y)\overline{f(x)}$, whose absolute value has $\rho$-integral at most $\|k_0\|_{L^2(\rho)}\|e\|_{L^2(\nu)}\|f\|_{L^2(\mu)}$ by Cauchy–Schwarz and Tonelli [F3], [F5]. [step 1.1, step 3.1, F3, F4, F5]

5.1 **Boundedness.** For $f\in L^2(\nu;\mathbb{C})$, the class of $T_{k_0}f$ is in $L^2(\mu;\mathbb{C})$ and $\|T_{k_0}f\|_{L^2(\mu)}^2=\int_X|(T_{k_0}f)(x)|^2\,d\mu(x)\le\int_X\|k_0(x,\cdot)\|_{L^2(\nu)}^2\,d\mu(x)\cdot\|f\|_{L^2(\nu)}^2=\|k_0\|_{L^2(\rho)}^2\|f\|_{L^2(\nu)}^2$ by [step 2.1] and [step 3.1], using measurability from [step 4.1] to integrate the squared estimate; hence $T_k:=T_{k_0}$ is linear and bounded with $\|T_k\|\le\|k_0\|_{L^2(\rho)}=\|k\|_2$ by [step 1.2]. [step 1.2, step 2.1, step 3.1, step 4.1]

5.2 **Rectangle kernels lie in the closed span of the family.** Let $A\in\mathcal A$, $B\in\mathcal B$ have finite measure, so $\mathbf 1_A\in L^2(\mu;\mathbb{C})$ and $\mathbf 1_B\in L^2(\nu;\mathbb{C})$; by [F10] the finite-subset nets $\sum_{f\in G}\langle\mathbf 1_A,f\rangle f$ over finite $G\subseteq F$ and $\sum_{e\in H}\langle\mathbf 1_B,e\rangle e$ over finite $H\subseteq E$ converge to $\mathbf 1_A$ and $\mathbf 1_B$. For such finite $G,H$ the function $u_G(x)\overline{v_H(y)}$ with $u_G:=\sum_{f\in G}\langle\mathbf 1_A,f\rangle f$ and $v_H:=\sum_{e\in H}\langle\mathbf 1_B,e\rangle e$ is a finite linear combination of the functions $f(x)\overline{e(y)}$, hence its class lies in the span of the family $(\psi_{f,e})$; and $\|u\overline v-u_G\overline{v_H}\|_{L^2(\rho)}\le\|u\|_{L^2(\mu)}\|v-v_H\|_{L^2(\nu)}+\|u-u_G\|_{L^2(\mu)}\|v_H\|_{L^2(\nu)}\to0$ by Tonelli [F3] and convergence of the two nets, so the rectangle kernel $\mathbf 1_A(x)\mathbf 1_B(y)=\mathbf 1_A(x)\overline{\mathbf 1_B(y)}$ lies in the closed span of $(\psi_{f,e})$. [step 4.3, F3, F10]

6.1 **The kernel lies in that closed span.** By [step 5.2] and [F7] every class of $L^2(\rho;\mathbb{C})$ — in particular $k_0$, whose $L^2(\rho)$ class exists by [step 1.2] — lies in the closed span of the orthonormal family $(\psi_{f,e})$. [step 1.2, step 5.2, F7]

7.1 **Exact norm of the family expansion.** Bessel's inequality [F11] applied to $k_0$ and the orthonormal family $(\psi_{f,e})$ gives $\sum_{f,e}|\langle k_0,\psi_{f,e}\rangle|^2\le\|k_0\|_{L^2(\rho)}^2$. For the reverse inequality fix a real $\varepsilon>0$ and, by [step 6.1], a vector $h$ in the span of finitely many $\psi_{f,e}$ with $\|h-k_0\|_{L^2(\rho)}<\varepsilon$; if $\|k_0\|_{L^2(\rho)}=0$ then $k_0$ is the zero class and both sides vanish, and otherwise $h\ne0$ for small $\varepsilon$ and the finite Parseval identity and Cauchy–Schwarz on the finitely many coefficients give $\sum_{f,e}|\langle k_0,\psi_{f,e}\rangle|^2\ge|\langle k_0,h\rangle|^2/\|h\|_{L^2(\rho)}^2\ge\|k_0\|_{L^2(\rho)}^2(\|k_0\|_{L^2(\rho)}-\varepsilon)^2/(\|k_0\|_{L^2(\rho)}+\varepsilon)^2$, where the last bound uses $|\langle k_0,h\rangle|\ge\|k_0\|^2-\|k_0\|\varepsilon$ and $\|h\|\le\|k_0\|+\varepsilon$ and tends to $\|k_0\|_{L^2(\rho)}^2$ as $\varepsilon\to0$; hence $\sum_{f,e}|\langle k_0,\psi_{f,e}\rangle|^2=\|k_0\|_{L^2(\rho)}^2=\|k\|_2^2$ by [step 1.2]. [step 1.2, step 6.1, F11]

8.1 **Transfer to the basis sums.** For each $e\in E$ the vector $T_ke$ lies in $L^2(\mu;\mathbb{C})$ by [step 5.1], so [F10] applied with the Hilbert basis $F$ gives $\|T_ke\|_{L^2(\mu)}^2=\sum_{f\in F}|\langle T_ke,f\rangle|^2$, and [step 4.3] identifies each summand with $|\langle k_0,\psi_{f,e}\rangle|^2$; since every finite subset of $E\times F$ is contained in a rectangle and all terms are nonnegative, taking suprema over finite subsets gives $\sum_{e\in E}\|T_ke\|^2=\sum_{f,e}|\langle k_0,\psi_{f,e}\rangle|^2=\|k\|_2^2$ by [step 7.1]. The same computation with the roles of $E$ and $F$ interchanged, using the adjoint identity $\langle T_ke,f\rangle=\langle e,T_k^*f\rangle$ of [F13] and Parseval with respect to $E$ applied to the vectors $T_k^*f$, gives $\sum_{f\in F}\|T_k^*f\|^2=\|k\|_2^2$ as well. [step 5.1, step 4.3, step 7.1, F10, F13]

9.1 **Conclusion.** The bases $E$ and $F$ in [step 8.1] were arbitrary Hilbert bases of $L^2(\nu;\mathbb{C})$ and $L^2(\mu;\mathbb{C})$, and by [step 1.1] such bases exist; by [step 8.1] every one of them realizes the value $\|k\|_2^2$, so by [F15] the operator $T_k$ is Hilbert–Schmidt with $\|T_k\|_{HS}=\|k\|_2$, the operator itself being independent of the representative $k_0$ by [step 4.2] and bounded with $\|T_k\|\le\|k\|_2$ by [step 5.1]. This proves all three claims. [step 1.1, step 4.2, step 5.1, step 8.1, F15] ∎
