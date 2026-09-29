---
id: thm-acl-characterisation-of-w-one-p
kind: theorem
title: The ACL characterisation of $W^{1,p}$
status: draft
origin: pipeline
deps: [def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, def-absolute-continuity-on-almost-every-coordinate-line, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, def-integral-over-a-measurable-set, lem-acl-representatives-reconstruct-weak-gradients-by-fubini, lem-weak-derivatives-are-unique-almost-everywhere, lem-complex-translation-and-approximate-identity-interfaces, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-c1-lipschitz-ac-bv-hierarchy, thm-tonelli-and-fubini-for-completed-product-measures, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, thm-holder-inequality-for-integrals, thm-lebesgue-measure-of-a-box-of-every-kind, thm-fatou-lemma, thm-riesz-fischer-completeness-of-l-p, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable, thm-extreme-value-metric, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice, lem-test-function-cutoffs-and-euclidean-localization, thm-heine-borel-rn]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 2 §2.6
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Theorem 2.36 (Nikodym, ACL characterisation), statement printed p. 55, proof pp. 56–59
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 2 §2.6, Theorem 2.36 (Nikodym,
  ACL characterisation), statement printed p. 55 and proof pp. 56–59, as
  recorded for [[def-absolute-continuity-on-almost-every-coordinate-line]].
  The source selects summable smooth approximations on an increasing sequence
  of relatively compact subdomains, converts the summability to almost every
  line by Fubini, and reads off an absolutely continuous representative whose
  line derivatives are the weak derivatives. The proof below is written from
  the library interfaces cited in its Facts; it derives the derivative-convolution identity by testing and uses the
  published approximate-identity lemma for convergence.

## Statement

Assume the Axiom of Choice, used through the cited Countable-Choice and
Dependent-Choice interfaces (completed-product Fubini, approximate identities,
the fundamental theorem of calculus for absolutely continuous functions), for
the countable selections of cutoffs and mollifier scales below, and through the
earlier ACL reconstruction lemma. Let $\Omega\subseteq\mathbb R^n$ be
open, $n\ge1$, let $1\le p<\infty$, and let $\mathbb K\in\{\mathbb R,\mathbb C\}$.
For an almost-everywhere class $u$ on $\Omega$ the following are equivalent:

1. $u\in W^{1,p}(\Omega;\mathbb K)$;
2. $u\in L^p(\Omega;\mathbb K)$ and $u$ has one measurable ACL representative
   $u^*$ whose classical coordinate derivatives $\partial_i u^*$ exist almost
   everywhere, are measurable, and belong to $L^p(\Omega;\mathbb K)$.

In that case $\partial_i u^*$ is a representative of $D_i u$ for every
$i$, that is, $D_i u=\partial_i u^*$ almost everywhere.

If $\Omega=\varnothing$, there is only the zero class, its representative
$u^*=0$ is ACL, and every displayed assertion holds vacuously.

## Facts & Assumptions

**Given:** AC, an open $\Omega\subseteq\mathbb R^n$, $n\ge1$, an exponent $1\le p<\infty$, a field $\mathbb K\in\{\mathbb R,\mathbb C\}$, and an almost-everywhere class $u$ on $\Omega$.

[F1] An ACL representative is one measurable representative whose sections along almost every line in each coordinate direction are absolutely continuous on compact subintervals, with exceptional sets allowed to depend on the direction ([[def-absolute-continuity-on-almost-every-coordinate-line]]).

[F2] $u\in W^{1,p}(\Omega;\mathbb K)$ means $u\in L^p$ and every $D_i u$ has an $L^p$ representative, and $D_i u$ is the weak derivative ([[def-sobolev-space-wkp-and-its-norm]]).

[F3] If $u\in L^p_{\mathrm{loc}}$ has one measurable ACL representative $u^*$ and measurable $g_i\in L^p_{\mathrm{loc}}$ whose sections are the one-dimensional derivatives of the sections of $u^*$ almost everywhere on almost every line, then $g_i$ is the weak derivative $D_i u$ ([[lem-acl-representatives-reconstruct-weak-gradients-by-fubini]]).

[F4] Under Countable Choice two locally integrable weak derivatives of the same class agree almost everywhere ([[lem-weak-derivatives-are-unique-almost-everywhere]]).

[F5] $v$ is the weak $\partial_i$-derivative of $u$ exactly when $\int_\Omega u\,\partial_i\varphi=-\int_\Omega v\varphi$ ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F6] Assume countable choice. For the unit-mass mollifier $\rho_\varepsilon$ the convolution $\rho_\varepsilon*f$ of a locally integrable $f$ is smooth with $\partial^\alpha(\rho_\varepsilon*f)=(\partial^\alpha\rho_\varepsilon)*f$; for every $K\in L^1$ with $\int K=1$ the scaled family $K_\varepsilon(x)=\varepsilon^{-n}K(x/\varepsilon)$ satisfies $K_\varepsilon*f\to f$ in $L^p$ for $p<\infty$ whenever $f\in L^p$ ([[lem-complex-translation-and-approximate-identity-interfaces]]).

[F7] For nonnegative measurable $f$ and measurable $E$, integration over $E$ means integrating $f\chi_E$ ([[def-integral-over-a-measurable-set]]). For integrable real or complex $f$, the same convention follows by applying the nonnegative restriction definition to positive and negative parts, then real and imaginary parts ([[def-integrable-real-and-complex-functions-and-their-integrals]]). Integrable sums may be split by [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F8] Let $\overline{\mu\times\nu}$ be a completed product of sigma-finite measures. If $f$ is $\overline{\mu\times\nu}$-integrable, then outside measurable null sets its sections are integrable and the iterated integrals agree with the product integral ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F9] Under Countable Choice, Lebesgue measure on $\mathbb R^{m+n}$ is the completion of the product of the factor Lebesgue measures ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F10] Hölder's inequality includes the endpoint pairs and gives $\int|fg|\le\|f\|_p\|g\|_{p'}$ with finite right side ([[thm-holder-inequality-for-integrals]]).

[F11] Assume Countable Choice. Every box in $\mathbb R^n$ with $a_i\le b_i$ is Lebesgue measurable with measure given by the product of the side lengths, hence finite on bounded boxes ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F12] Assume Countable and Dependent Choice. An absolutely continuous $F:[a,b]\to\mathbb R$ satisfies $F(x)-F(a)=\int_a^xF'$ for every $x\in[a,b]$; its derivative exists almost everywhere and lies in $L^1[a,b]$ ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]). Conversely, for any $H\in L^1[a,b]$, its indefinite integral is absolutely continuous by [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]], and has derivative $H$ almost everywhere under Countable Choice by [[thm-first-fundamental-theorem-of-calculus-for-l-one]].

[F13] A function on $[a,b]$ that is differentiable on $(a,b)$ with derivative extending continuously to $[a,b]$ is absolutely continuous ([[thm-c1-lipschitz-ac-bv-hierarchy]]).

[F14] Countable unions and intersections of measurable sets are measurable, and pointwise limits of measurable real functions are measurable; for complex-valued functions this applies to their real and imaginary parts ([[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]).

[F15] Fatou: for nonnegative measurable functions, $\int\liminf_j f_j\le\liminf_j\int f_j$ ([[thm-fatou-lemma]]).

[F16] $L^p$ is complete, every norm-convergent sequence in $L^p$ has a subsequence of measurable representatives converging almost everywhere to a representative of the limit, and in particular every Cauchy sequence in real $L^1(a,b)$ has an $L^1$ limit ([[thm-riesz-fischer-completeness-of-l-p]]). The complex versions used below follow by applying these assertions first to real parts and then to imaginary parts along the resulting subsequence, using $|\operatorname{Re}z|,|\operatorname{Im}z|\le|z|\le|\operatorname{Re}z|+|\operatorname{Im}z|$.

[F17] A continuous real function on a nonempty compact interval attains its minimum ([[thm-extreme-value-metric]]).

[F18] In ZF, AC implies Countable Choice and the prescribed-start form of Dependent Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]), and AC is the axiom asserting choice functions for every family of nonempty sets ([[def-axiom-of-choice]]).

[F19] For compact $K\subseteq\Omega$ there is $\eta\in C_c^\infty(\Omega)$ equal to $1$ on a neighborhood of $K$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F20] Closed bounded subsets of $\mathbb R^n$ are compact ([[thm-heine-borel-rn]]); the distance to a nonempty closed set is continuous by the triangle inequality.

## Proof

**Proof technique:** compact cutoffs, mollification, summable selection, and Fubini on coordinate boxes.

1.1 Assume (2) of the Statement. Then $u\in L^p\subseteq L^1_{\mathrm{loc}}$, and each $g_i:=\partial_i u^*$ is measurable and lies in $L^p\subseteq L^1_{\mathrm{loc}}$. By [F1] the sections of $u^*$ along almost every line in direction $i$ are absolutely continuous with one-dimensional derivative the section of $g_i$. So [F3] applies and gives that $g_i$ is the weak derivative $D_i u$ for every $i$; since $u\in L^p$ and $g_i\in L^p$, definition [F2] yields $u\in W^{1,p}(\Omega;\mathbb K)$. Moreover, whenever a class in $L^p$ has the representative $u^*$, the weak derivative class $D_i u$ is unique by [F4], so $g_i=\partial_i u^*$ represents $D_i u$ almost everywhere. This proves (2)$\Rightarrow$(1) and the final identity of the Statement under (2). [F1, F2, F3, F4, given]

1.2 Assume (1) of the Statement. By [F2], $u$ and each $D_i u$ have representatives in $L^p(\Omega;\mathbb K)$. If $\Omega\ne\varnothing$, let $d(x)=\operatorname{dist}(x,\mathbb R^n\setminus\Omega)$, with $d\equiv+\infty$ when $\Omega=\mathbb R^n$, and, for integers $j\ge1$, set $U_j=\{x\in\Omega:|x|<j,\ d(x)>1/j\}$. These sets increase and exhaust $\Omega$. Their closures are bounded and lie in $\{x:|x|\le j,\ d(x)\ge1/j\}$; continuity of $d$ and [F20] show that each $K_j:=\overline U_j$ is compactly contained in $\Omega$. By [F19] choose $\eta_j\in C_c^\infty(\Omega)$ equal to $1$ on a neighborhood of $K_j$. Select measurable representatives $\hat u,\hat g_i$ of $u,D_i u$ and define $\tilde u_j=\eta_j\hat u$ on $\Omega$ and $0$ outside, and $H_{j,i}=\eta_j\hat g_i+\hat u\,\partial_i\eta_j$ on $\Omega$ and $0$ outside. These functions lie in $L^p(\mathbb R^n)$ because the cutoff factors are bounded with compact support. For $\psi\in C_c^\infty(\mathbb R^n)$, $\eta_j\psi|_\Omega$ is a test function and the weak identity [F5] gives $$\int_{\mathbb R^n}\tilde u_j\,\partial_i\psi=\int_\Omega u\eta_j\partial_i\psi=-\int_\Omega(D_i u)\eta_j\psi-\int_\Omega u(\partial_i\eta_j)\psi=-\int_{\mathbb R^n}H_{j,i}\psi.$$ Thus $H_{j,i}$ is the weak derivative of $\tilde u_j$ on $\mathbb R^n$. On $U_j$, $\tilde u_j=u$ and $H_{j,i}=D_i u$ almost everywhere. AC supplies Countable Choice via [F18] for the sequence of cutoffs. [F2, F5, F7, F18, F19, F20, given]

2.1 Fix a real $\rho\in C_c^\infty(\mathbb R^n)$ with $\int\rho=1$ and put $\rho_\varepsilon(x)=\varepsilon^{-n}\rho(x/\varepsilon)$ and $v_{j,\varepsilon}=\rho_\varepsilon*\tilde u_j$. By [F6] this function is smooth. For fixed $x$, the function $y\mapsto\rho_\varepsilon(x-y)$ is a test function, and $\partial_{x_i}\rho_\varepsilon(x-y)=-\partial_{y_i}\rho_\varepsilon(x-y)$. Applying the weak identity of step 1.2 therefore gives $$\partial_i v_{j,\varepsilon}(x)=\int\tilde u_j(y)\partial_{x_i}\rho_\varepsilon(x-y)\,dy=\int H_{j,i}(y)\rho_\varepsilon(x-y)\,dy=(\rho_\varepsilon*H_{j,i})(x).$$ [F6, step 1.2, given]

3.1 For each fixed $j$, [F6] gives $v_{j,\varepsilon}\to\tilde u_j$ and $\partial_i v_{j,\varepsilon}\to H_{j,i}$ in $L^p(\mathbb R^n)$ as $\varepsilon\downarrow0$. Since $U_j$ is bounded, [F11] gives it finite measure, and [F10] converts these local $L^p$ convergences into $L^1(U_j)$ convergence. Hence choose $\varepsilon_j>0$ so that, with $v_j:=v_{j,\varepsilon_j}$, $$\|v_j-\tilde u_j\|_{L^p(\mathbb R^n)}+\sum_i\|\partial_i v_j-H_{j,i}\|_{L^p(\mathbb R^n)}<2^{-j},\qquad \|v_j-u\|_{L^1(U_j)}+\sum_i\|\partial_i v_j-D_i u\|_{L^1(U_j)}<2^{-j}.$$ Both conditions hold for all sufficiently small $\varepsilon_j$, and Countable Choice [F18] selects one such scale for each $j$. [F6, F10, F11, F18, step 2.1, given]

4.1 Let $Q$ be an open box with $\overline Q\subseteq\Omega$. Since $\overline Q$ is compact and the increasing open sets $U_j$ cover $\Omega$, there is $J$ with $Q\subseteq U_J$. For $j\ge J+2$, $Q\subseteq U_{j-1}\subseteq U_j$, so $$\int_Q\left(|v_j-v_{j-1}|+\sum_{i=1}^n|\partial_i v_j-\partial_i v_{j-1}|\right)\le2^{-j}+2^{-(j-1)}.$$ The right side is summable. Thus the measurable nonnegative function $$F_Q:=\sum_{j\ge J+2}\left(|v_j-v_{j-1}|+\sum_{i=1}^n|\partial_i v_j-\partial_i v_{j-1}|\right)$$ satisfies $\int_QF_Q<\infty$, by applying Fatou [F15] to its finite partial sums. [F14, F15, F20, step 3.1, algebra]

5.1 Fix a coordinate direction $i$ and such a box $Q$. If $n=1$, $F_Q\in L^1(Q)$ directly. For $n\ge2$, decompose $\mathbb R^n=\mathbb R^{n-1}\times\mathbb R$ along direction $i$. By [F9], Lebesgue measure on $Q$ is the completed product of the factor measures, so [F8] applied to $F_Q$ shows that for almost every transverse parameter $y$ the section $t\mapsto F_Q(y,t)$ is integrable on the side interval $I_{i,Q}$. For each such good $y$, $$\sum_{j\ge J+2}\int_{I_{i,Q}}\left(|v_j-v_{j-1}|+\sum_{r=1}^n|\partial_r v_j-\partial_r v_{j-1}|\right)(y,t)\,dt<\infty,$$ and the same bound holds on every compact subinterval $[a,b]\subset I_{i,Q}$. [F8, F9, step 4.1]

6.1 Fix a good line and a compact interval $[a,b]\subset I_{i,Q}$. For $k>j>J$, the smooth function $w=v_j-v_k$ is absolutely continuous on $[a,b]$ by [F13], so apply the fundamental theorem [F12] on that line. If $s$ minimizes $|w|$ on $[a,b]$, then [F17] gives $|w(s)|\le(b-a)^{-1}\int_a^b|w|$; hence $$\|w\|_{L^\infty(a,b)}\le\frac1{b-a}\int_a^b|w|+\int_a^b|\partial_iw|.$$ For complex $w$ the integral identity is applied to real and imaginary parts, while the displayed modulus estimate follows from the triangle inequality. Telescoping the differences and using step 5.1 shows that $(v_j)$ is uniformly Cauchy and $(\partial_i v_j)$ is Cauchy in $L^1(a,b)$. [F12, F13, F16, F17, step 5.1]

7.1 Define the measurable Cauchy set $$E:=\bigcap_{m=1}^\infty\bigcup_{N=1}^\infty\bigcap_{r,s\ge N}\{x:|v_r(x)-v_s(x)|<1/m\}$$ and define $u^*(x):=\lim_j\mathbf1_E(x)v_j(x)$. Each set in the definition of $E$ is measurable, and on $E$ the sequence $(v_j(x))$ is Cauchy in $\mathbb K$; outside $E$ the displayed sequence is identically zero. Thus its finite pointwise limit $u^*$ is measurable by applying [F14] to real and imaginary parts. On every good line of step 5.1 the convergence of $v_j$ is uniform on compact subintervals, so the line limit agrees there with $u^*$; also $\partial_i v_j$ converges in $L^1(a,b)$ to some $H$. Passing to the limit in the integral identity of step 6.1 gives $u^*(t)-u^*(s)=\int_s^tH$ for all $s,t\in[a,b]$. The indefinite-integral assertions in [F12], applied componentwise for complex values, shows that this section of $u^*$ is absolutely continuous. Taking the countable union of the exceptional line sets over rational boxes and the finite set of directions still gives null exceptional sets, so $u^*$ is ACL. [F1, F12, F14, F16, step 5.1, step 6.1]

8.1 On almost every coordinate line through a fixed box $Q$, step 7.1 gives $v_j\to u^*$ pointwise, hence this convergence holds almost everywhere in $Q$ by [F8, F9]. Fatou [F15] and the local error bound in step 3.1 give $$\int_Q|u^*-u|\le\liminf_j\int_Q|v_j-u|=0,$$ since $Q\subseteq U_j$ for all sufficiently large $j$. Thus $u^*=u$ almost everywhere on each rational box with closure in $\Omega$, and hence on $\Omega$. [F8, F9, F15, step 3.1, step 7.1, given]

8.2 Fix such a box $Q$ and direction $i$. For all sufficiently large $j$, $Q\subseteq U_j$, so step 3.1 gives $\partial_i v_j\to D_i u$ in $L^p(Q)$. By [F16] a subsequence converges almost everywhere on $Q$ to a representative of $D_i u$. Fubini [F8, F9] restricts this convergence to almost every coordinate line. On the same good lines, step 5.1 makes the series of derivative increments summable in $L^1$ on every compact subinterval, so the full sequence $\partial_i v_j$ converges pointwise almost everywhere there; this pointwise limit agrees with its $L^1$ limit $H$. The subsequence also converges pointwise to a representative of $D_i u$, so that representative equals $H$ almost everywhere on those lines. By step 7.1 this $H$ is the classical derivative of the section of $u^*$, so $\partial_i u^*=D_i u$ almost everywhere on $Q$. The rational boxes cover $\Omega$ countably, giving this identity almost everywhere on $\Omega$ for every $i$. Consequently the classical derivatives, assigned value $0$ where they fail to exist, are measurable (they agree almost everywhere with measurable $L^p$ representatives) and belong to $L^p$. Hence $u$ satisfies (2). [F8, F9, F16, step 3.1, step 5.1, step 7.1]

9.1 Steps 1.1 and 1.2 with the constructions of steps 2.1–8.2 prove the two implications: (2)$\Rightarrow$(1) in step 1.1, and (1)$\Rightarrow$(2) in steps 1.2 and 2.1–8.2. The final clause of the Statement is step 1.1 under (2) and step 8.2 under (1), where the two computed representatives agree almost everywhere. The empty domain is the case $\Omega=\varnothing$ noted in the Statement. The Axiom of Choice is used through [F18], which supplies the Countable Choice and Dependent Choice hypotheses of [F8], [F12] and [F16] and licenses the countable cutoff and scale selections in steps 1.2 and 3.1, and through the earlier ACL reconstruction lemma [F3]. $\square$ [F3, F18, step 1.1, step 1.2, step 8.2]
