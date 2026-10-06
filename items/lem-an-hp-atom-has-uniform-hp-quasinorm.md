---
id: lem-an-hp-atom-has-uniform-hp-quasinorm
kind: lemma
title: "Atoms have uniformly bounded $H^p$ quasi-norm and uniformly bounded test pairings"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [def-hp-atom-with-moment-order, def-real-hardy-space-by-a-radial-maximal-function, def-grand-maximal-test-class-of-order-n, lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions, lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable, def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, def-ck-and-multi-index-notation-in-several-variables, def-multidimensional-rectangle-and-volume, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, prop-measure-monotonicity, thm-monotone-convergence-for-the-integral, def-complex-lp-and-euclidean-test-function-conventions, def-tempered-distribution, thm-multivariable-taylor-formula-with-lagrange-remainder, cor-c-one-change-of-variables-for-l-one-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "the paragraph after Theorem 1, printed p. 61 (PDF p. 3): the standard uniform atom estimate"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 7.35 and its proof, printed pp. 40-41: the complete $p=1$ near/far computation for cube-supported atoms"
    - title: "Stefano Meda, Peter Sjogren, Maria Vallarino, Atomic decompositions and operators on Hardy spaces, Revista de la Union Matematica Argentina 50 (2009), no. 2, 15-22"
      url: "https://inmabb.criba.edu.ar/revuma/pdf/v50n2/v50n2a02.pdf"
      locator: "section 1, p. 16: 'It is easy to verify that any $(p,q)$-atom is in $H^p$'"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $n\ge1$, $0<p\le1$,
$s\ge\lfloor n(1/p-1)\rfloor$, fix the admissible
kernel $\varphi$ defining $H^p$, and let
$N\ge\max(N_0(n,p,\varphi),n+s+1)$ be an admissible grand-maximal order. There
are constants $C_0=C_0(n,p,s)<\infty$ and
$C_1=C_1(n,p,s,N,\varphi)<\infty$ such that every $(p,\infty,s)$-atom $a$
supported in an axis-parallel cube $Q$
([[def-hp-atom-with-moment-order]]) satisfies

1. $\|M_Na\|_{L^p}\le C_0$ and hence $\|a\|_{H^p}\le C_1$;
2. for every $\psi\in\mathcal S(\mathbb R^n)$, $$|\langle a,\psi\rangle|\le C_0\min\bigl(|Q|^{1-1/p+(s+1)/n},|Q|^{1-1/p}\bigr)\max\bigl(\|\psi\|_{L^\infty(Q)},\|\psi\|_{C^{s+1}(Q)}\bigr),$$ where $\|\psi\|_{C^{s+1}(Q)}=\max_{|\beta|\le s+1}\sup_Q|\partial^\beta\psi|$;
3. in particular $\sup_j|\langle a_j,\psi\rangle|<\infty$ for every fixed $\psi\in\mathcal S$ and every family $(a_j)$ of such atoms.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $0<p\le1$, $s\ge\lfloor n(1/p-1)\rfloor$, the fixed admissible kernel $\varphi$, an admissible order $N\ge\max(N_0(n,p,\varphi),n+s+1)$, and a $(p,\infty,s)$-atom $a$ supported in a cube $Q$ with centre $c_Q$ and side length $\ell=\ell(Q)$.

[L1] $a$ is measurable, $\operatorname{supp}a\subseteq Q$, $|a|\le|Q|^{-1/p}$ a.e., and $\int a(y)y^\alpha\,dy=0$ for every multi-index $|\alpha|\le s$ ([[def-hp-atom-with-moment-order]]).

[F1] The cube $Q$ has side length $\ell$, is contained in the closed ball $\overline{B(c_Q,\sqrt n\ell/2)}$, and $|y-c_Q|\le\sqrt n\ell/2$ for $y\in Q$ ([[def-multidimensional-rectangle-and-volume]]).

[F2] For $\Psi\in\mathcal F_N$, $\Psi_t(w)=t^{-n}\Psi(w/t)$ and each derivative through order $N+1$ satisfies $|\partial^\beta\Psi(u)|\le(1+|u|)^{-N}$; in particular $|\Psi(u)|\le(1+|u|)^{-N}$ and $\|\Psi\|_1\le C_n$ because $N\ge n+1$ ([[def-grand-maximal-test-class-of-order-n]], [[def-schwartz-space-and-its-seminorms]]).

[F3] Domination: $M^0_\varphi a\le2^NP_N(\varphi)M_Na$ for the fixed admissible kernel $\varphi$, so $\|a\|_{H^p}\le2^NP_N(\varphi)\|M_Na\|_{L^p}$ ([[lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions]]).

[F4] Taylor remainder: for real $G\in C^{s+1}(\mathbb R^n)$, the multivariable Lagrange formula gives $G(y)=T_sG(c;y-c)+R_G(y)$ and $|R_G(y)|\le C_{n,s}|y-c|^{s+1}\max_{|\beta|=s+1}\sup_{z\in[c,y]}|\partial^\beta G(z)|$ ([[thm-multivariable-taylor-formula-with-lagrange-remainder]], [[def-ck-and-multi-index-notation-in-several-variables]]). For complex $G$, apply the real formula to $\operatorname{Re}G$ and $\operatorname{Im}G$ and add the two remainder bounds; each component derivative is bounded by $|\partial^\beta G|$ ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F5] Under Countable Choice, a closed axis-parallel box is Lebesgue measurable with measure equal to the product of its side lengths, and Lebesgue measure is monotone ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[prop-measure-monotonicity]], [[def-countable-choice]]).

[F6] The grand maximal function $M_Na$ is Borel measurable ([[lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable]]).

[F7] For nonnegative measurable functions, integration over an increasing union of measurable sets is the limit of the integrals over the finite unions ([[thm-monotone-convergence-for-the-integral]]).

[F8] Normalized dilation preserves the $L^1$ norm: $\|\Psi_t\|_1=\|\Psi\|_1$ by [[cor-c-one-change-of-variables-for-l-one-functions]] applied to $T(w)=tw$ and the integrand $|\Psi|$.

[F9] The tempered-distribution test pairing is bilinear: $\langle u,\psi\rangle=u(\psi)$ with no conjugation of $\psi$ ([[def-tempered-distribution]]).



**Proof technique:** near/far splitting with the Taylor remainder and the moment conditions.

## Proof

**Proof technique:** direct.

1.1 Near estimate. For $x\in\mathbb R^n$, $\Psi\in\mathcal F_N$, $t>0$, and every convolution centre $y$ with $|y-x|\le t$, the atom bound gives $|(a*\Psi_t)(y)|\le\|a\|_\infty\int_Q|\Psi_t(y-z)|\,dz\le |Q|^{-1/p}\|\Psi_t\|_1=|Q|^{-1/p}\|\Psi\|_1\le C|Q|^{-1/p}$. The last constant is uniform over $\Psi\in\mathcal F_N$ by [F2] and $N\ge n+1$. By [F8], $\|\Psi_t\|_1=\|\Psi\|_1$. Taking the suprema over $\Psi$, $t$, and all $y$ with $|y-x|\le t$ proves this bound for every $x$. Let $Q^*$ be the concentric closed cube of side $4\sqrt n\,\ell$. By [F5], $|Q^*|=(4\sqrt n)^n|Q|$, and hence $$\int_{Q^*}(M_Na)^p\le C^p|Q|^{-1}|Q^*|\le C^p(4\sqrt n)^n.$$ [L1, F1, F2, F5, F6, F8, algebra]

2.1 Far estimate. Set $m:=n+s+1$. If $x\notin Q^*$, put $r:=|x-c_Q|>2\sqrt n\,\ell$. Fix $\Psi\in\mathcal F_N$, $t>0$, and any $y$ with $|y-x|\le t$; all estimates below are uniform in this $y$, so taking the suprema over $y,t,\Psi$ at the end gives the estimate for $M_Na(x)$. For $z\in Q$, $|z-c_Q|\le\sqrt n\,\ell/2$. When $0<t\le\ell$, the triangle inequality gives $|y-z|\ge r-t-\sqrt n\,\ell/2\ge r/4$. Thus [F2] and $N\ge m$ imply $|(a*\Psi_t)(y)|\le |Q|^{-1/p}|Q|t^{-n}(1+r/(4t))^{-m}\le C|Q|^{-1/p}(\ell/r)^m(t/\ell)^{s+1}\le C|Q|^{-1/p}(\ell/r)^m$, using $|Q|=\ell^n$ and $m-n=s+1$. When $t\ge\ell$, expand the complex function $z\mapsto\Psi_t(y-z)$ about $c_Q$ through degree $s$, applying [F4] to its real and imaginary parts. The Taylor polynomial integrates to zero against $a$ because each $(z-c_Q)^\alpha$, $|\alpha|\le s$, is a linear combination of monomials $z^\beta$ of degree at most $s$, whose moments vanish by [L1]. For every remainder point $\zeta$ on the segment from $c_Q$ to $z\in Q$, the cone condition and $t\ge\ell$ give $r\le |x-y|+|y-\zeta|+|\zeta-c_Q|\le t+|y-\zeta|+\frac{\sqrt n}{2}\ell\le(1+\sqrt n/2)(t+|y-\zeta|)$. If $|\beta|=s+1$, [F2] yields $|\partial^\beta\Psi_t(y-\zeta)|\le t^{-n-s-1}(1+|y-\zeta|/t)^{-m}=(t+|y-\zeta|)^{-m}\le (1+\sqrt n/2)^m r^{-m}$. The Taylor remainder and $|z-c_Q|\le\sqrt n\,\ell/2$ now give $|(a*\Psi_t)(y)|\le C|Q|^{1-1/p}\ell^{s+1}r^{-m}=C|Q|^{-1/p}(\ell/r)^m$. These bounds hold for every $\Psi,t,y$ in the grand-maximal supremum. Therefore $M_Na(x)\le C|Q|^{-1/p}(1+r/\ell)^{-m}$. Since $s\ge\lfloor n(1/p-1)\rfloor$, $pm>n$. Cover the far region by shells $E_j=\{x:2^jR_0\le|x-c_Q|<2^{j+1}R_0\}$, $j\ge0$, with $R_0=2\sqrt n\,\ell$. Each is contained in a concentric closed cube of side $2^{j+2}R_0$, so [F5] gives $|E_j|\le C_n2^{jn}|Q|$. By [F7] and the pointwise bound, $$\int_{\mathbb R^n\setminus Q^*}(M_Na)^p\le\sum_{j\ge0}C|Q|^{-1}2^{-jmp}|E_j|\le C\sum_{j\ge0}2^{-j(pm-n)}<\infty.$$ [step 1.1, L1, F1, F2, F4, F5, F7, algebra]

3.1 Conclusion of (a). Steps 1.1 and 2.1 give $\int_{\mathbb R^n}(M_Na)^p\le C_0^p$ after enlarging $C_0=C_0(n,p,s)$, independently of $Q$, $a$ and admissible $N$; measurability is [F6]. Hence $\|M_Na\|_{L^p}\le C_0$, and [F3] gives $\|a\|_{H^p}\le2^NP_N(\varphi)C_0=:C_1(n,p,s,N,\varphi)$. This proves assertion 1. [step 1.1, step 2.1, F3, F6, algebra]

4.1 Pairing bounds. The atom function induces a tempered distribution by $|\int_Qa(y)\psi(y)\,dy|\le|Q|^{1-1/p}p_{00}(\psi)$, and [F9] fixes the bilinear convention. Thus for a complex test $\psi$, $\langle a,\psi\rangle=\int_Qa(y)\psi(y)\,dy$; this integral is absolutely convergent by [L1] and boundedness of $\psi$ on $Q$. The plain estimate is $|\langle a,\psi\rangle|\le |Q|^{1-1/p}\|\psi\|_{L^\infty(Q)}$. For the Taylor estimate, apply [F4] separately to $\operatorname{Re}\psi$ and $\operatorname{Im}\psi$ and use the same moment cancellation as in step 2.1. The combined remainder obeys $\sup_Q|R_\psi|\le C_{n,s}\ell^{s+1}\|\psi\|_{C^{s+1}(Q)}$, hence $$|\langle a,\psi\rangle|=|\int_Qa(y)R_\psi(y)\,dy|\le C_{n,s}|Q|^{1-1/p+(s+1)/n}\|\psi\|_{C^{s+1}(Q)}.$$ Taking the smaller of the plain and Taylor bounds proves assertion 2 after enlarging $C_0$. Put $X=n(1/p-1)\ge0$: then $1-1/p+(s+1)/n=(s+1-X)/n>0$, whereas $1-1/p\le0$ (including equality when $p=1$). Thus the two powers have one positive and one nonpositive exponent, and $\min(|Q|^{1-1/p+(s+1)/n},|Q|^{1-1/p})\le1$ for all $|Q|>0$. Since a Schwartz test and its derivatives through order $s+1$ are bounded globally, assertion 3 follows uniformly over every family of atoms. [step 3.1, L1, F4, F5, F9, algebra]

5.1 Conclusion. Steps 1.1 and 2.1 give the uniform grand-maximal estimate, [F3] gives the kernel/order-dependent $H^p$ bound, and step 4.1 proves the uniform pairing estimates. Countable Choice is used for the explicit box measures and maximal-function measurability in [F5]--[F6]. This proves the lemma. [step 1.1, step 2.1, step 3.1, step 4.1, F5, F6] ∎
