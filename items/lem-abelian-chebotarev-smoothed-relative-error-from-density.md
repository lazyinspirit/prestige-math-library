---
id: lem-abelian-chebotarev-smoothed-relative-error-from-density
kind: lemma
title: Abelian smoothed Chebotarev with a uniform exceptional relative error
status: draft
dependency_level: 27
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-finite-convolution-chebotarev-smoothing-and-laplace-bounds
- lem-uniform-hecke-contour-shift-and-infinite-smoothed-explicit-formula
- thm-thorner-zaman-exception-sensitive-hecke-zero-density
- lem-primitive-hecke-analytic-landau-page-family-core
- lem-hecke-congruence-family-cardinality-and-primitive-reduction
- lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives
- lem-effective-dedekind-real-zero-gap-from-unit-lattice-packing
- lem-quadratic-number-field-principal-product-and-canonical-hecke-character
- lem-quadratic-hecke-conductor-discriminant-and-real-signs
- lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness
- thm-fundamental-theorem-of-finite-galois-theory
- thm-primitive-hecke-l-analytic-continuation-and-functional-equation
- thm-global-artin-reciprocity-and-norm-index
- lem-global-idele-norm-subgroup-is-open
- thm-number-field-ray-class-field-artin-isomorphism
- thm-local-artin-reciprocity-and-norm-index
- thm-local-artin-unramified-frobenius-normalization
- lem-unramified-local-unit-norms-and-cohomology
- lem-complete-discrete-valuation-extension-degree-and-tame-norm
- lem-character-orthogonality-for-finite-abelian-groups
- thm-decomposition-inertia-exact-sequence
- thm-ftc-second-part
- thm-natural-logarithm-laws
- thm-real-power-continuity-and-derivatives
- def-complex-exponential
- thm-geometric-series
- thm-exponential-beats-every-polynomial
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: Original AC+CC+DC retained through actual global/local Artin, Hecke and
  finite-ray providers. Finite smoothing, empirical summation and explicit scalar
  tails introduce no further choice.
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A unified and improved Chebotarev density
      theorem
    url: https://arxiv.org/pdf/1803.02823v3
    locator: Full cached §§2.2,4 and5 read. Local proof replaces the source sharp-Stark/conductor-discriminant
      coarse-error route by the recorded weak effective gap and primitive-family cardinality;
      no theorem is imported.
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $E/K$ be finite abelian with group $G$, $h=|G|$, $K$ of degree $n$ and discriminant $D$, and its associated primitive Hecke family have maximum finite conductor norm $Q_0$. Put $A=DQ_0n^n>1$ and $a=\log A$. Fix $\kappa=1/16{,}000{,}000$. Designate as $\beta_1$ the zero occurrence, if any, satisfying
$$\beta_1>1-\frac\kappa{a+n\log3},\qquad \operatorname{Im}\beta_1=0.$$
There is at most one such occurrence in the whole family; it is simple and belongs to a real character $\chi_1$. Every other nontrivial zero $\rho=\beta+i\gamma$ satisfies
$$1-\beta\ge\frac\kappa{a+n\log(|\gamma|+3)}.$$
In particular $0<(1-\beta_1)a<1/8$ when it exists. For $g\in G$ put $\theta_g=\chi_1(g)$ and $\nu=(1-\beta_1)a$ if it exists; otherwise put $\theta_g=0$, $\nu=1$ and omit all terms involving $\beta_1$. Define $g_g(t)=t-\theta_gt^{\beta_1}/\beta_1$ with this convention.

Let $d\ge1$ be a fixed absolute effective integer witness for the proved exception-sensitive density theorem. Set $\ell=4dn$, $\varepsilon=8\ell x^{-1/(8\ell)}$ and let $f=f(\cdot;x,\ell,\varepsilon)$ be the finite-convolution test. There are absolute effectively computable $C_2,c_3,B>0$ such that for every $x\ge A^{C_2}$, $0<\varepsilon<1/4$ and
$$h\widetilde\psi_g(x;f)=g_g(x)\left(1+O\left(e^{-c_3\log x/\log A}+e^{-\sqrt{c_3\log x/n}}\right)\right),$$
where
$$\widetilde\psi_g(x;f)=\sum_{\substack{\mathfrak p\text{ unramified in }E/K}}\sum_{\substack{k\ge1\\\operatorname{Frob}_{\mathfrak p}^{k}=g}}\log N\mathfrak p\,f\left(\frac{\log (N\mathfrak p)^k}{\log x}\right).$$
The implied constant is absolute and effective, uniformly in $g$ and all field data. Moreover $\nu\ge A^{-B}$ and $g_g(x)\gg\nu x$ on this range; for every $t\ge10$, $g_g(t)>0$ and $0\le t g_g'(t)\le2g_g(t)$. The designation above is a fixed sufficiently-small common-region exceptional zero, not a claim of uniqueness of all real zeros in every wider numerical strip. No sharp Stark bound is assumed.

## Facts & Assumptions

**Given:** The finite abelian extension, primitive Artin-associated family, normalizations and fixed density witness in the Statement.

[F1] The common-region theorem has $c_1=1/4{,}000{,}000$ and scale $\log(Q'T^n)\ge n$; its unique near-one occurrence is real/simple with real primitive character. Primitive family reduction preserves multiplicities and gives $h\le C^nD^{3/2}Q_0^2$ and $N\operatorname{rad}\mathfrak m_0\le Q_0^2$ for its least full modulus. [[lem-primitive-hecke-analytic-landau-page-family-core]] [[lem-hecke-congruence-family-cardinality-and-primitive-reduction]]

[F2] The recorded exception-sensitive theorem gives $N^\circ(\sigma,T)\le C B(T)(AT^n)^{d(1-\sigma)}$ for all $0<\sigma<1$, $T\ge1$, where $B(T)=\min\{1,(1-\beta_1)\log(AT^n)\}$ or1 if no exceptional zero. Its count explicitly omits the designated occurrence. [[thm-thorner-zaman-exception-sensitive-hecke-zero-density]]

[F3] The finite-convolution test has its full positivity/support/Laplace bounds, including the difference estimate for $x-x^\beta/\beta$ and integrated left-line bound with $(4\ell/\varepsilon)^\ell$. The recorded quantitative contour theorem applies to its compact $C^2$ test $W_x(u)=f(\log u/\log x)$ and every finite ray quotient, with exact prime deletions and zero-at0 term. [[lem-finite-convolution-chebotarev-smoothing-and-laplace-bounds]] [[lem-uniform-hecke-contour-shift-and-infinite-smoothed-explicit-formula]]

[F4] Local completed-zero counts in discs about $1+it$ of radius $u\le3/4$ are at most $2u\mathcal L+4$ with $\mathcal L=\log D+\frac12\log Q_0+(\frac12n+1)\log(T+3)+100n$. The primitive FE reflects critical occurrences with their multiplicities in the conjugate family. [[lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives]] [[thm-primitive-hecke-l-analytic-continuation-and-functional-equation]]

[F5] Every real Dedekind zero in degree $m$ and discriminant $D_M$ has gap at least $C^{-m}m^{-m}D_M^{-1}$. A GIVEN quadratic subextension has its forward canonical primitive character, split/inert values, full zeta factorization and exact $D_M=D^2N\mathfrak f_0$. Primitive characters with identical common pullbacks are identical, and the finite Galois correspondence constructs $E^{\ker\eta}$. [[lem-effective-dedekind-real-zero-gap-from-unit-lattice-packing]] [[lem-quadratic-number-field-principal-product-and-canonical-hecke-character]] [[lem-quadratic-hecke-conductor-discriminant-and-real-signs]] [[lem-ray-modulus-kernel-intersection-and-primitive-conductor-uniqueness]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F6] Actual global Artin reciprocity has norm kernel, and that kernel is open. Ray classes are the corresponding finite idèle congruence quotients. Local Artin has its finite norm kernel and arithmetic unramified Frobenius normalization; unramified local units are norms and $v_K(Nb)=f v_M(b)$ in degree $ef$. Finite characters separate finite abelian groups. [[thm-global-artin-reciprocity-and-norm-index]] [[lem-global-idele-norm-subgroup-is-open]] [[thm-number-field-ray-class-field-artin-isomorphism]] [[thm-local-artin-reciprocity-and-norm-index]] [[thm-local-artin-unramified-frobenius-normalization]] [[lem-unramified-local-unit-norms-and-cohomology]] [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]] [[lem-character-orthogonality-for-finite-abelian-groups]] [[thm-decomposition-inertia-exact-sequence]]

[F7] Compact FTC, logarithmic/positive-power laws and exponential series apply. Real geometric series have their explicit tails, and exponential decay dominates fixed polynomial factors. [[thm-ftc-second-part]] [[thm-natural-logarithm-laws]] [[thm-real-power-continuity-and-derivatives]] [[def-complex-exponential]] [[thm-geometric-series]] [[thm-exponential-beats-every-polynomial]]

[A1] AC, CC and DC retain the actual Artin, finite-ray, Hecke and local-field scopes. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Put $a=\log A$. Since $A\ge2$ and $A\ge n^n$, $n\le2a$: for $n\ge2$ use $n\log n\le a$ and $\log2>1/2$, and for $n=1$ use $a\ge\log2$. The last scalar bound follows from the exponential series $e<3<4$. For a zero of ordinate $\gamma$, apply [F1] with conductor cutoff $Q'=e^nDQ_0$ and height $T'=|\gamma|+3$. Its scale is at least $n$ and at most $3(a+n\log T')$. Because $3\kappa<c_1$, a zero violating the asserted region must be the real/simple occurrence in that core. For $\gamma\ne0$ this is impossible; for $\gamma=0$ it is exactly the unique possible designated $\beta_1$. This proves both the nonexceptional region and designation. Its character is real, and $\delta a<\kappa<1/8$, $\beta_1>3/4$, where $\delta=1-\beta_1$. [A1, F1, F7, given, construct, algebra]

2.1 We bind the actual arithmetic prime interpretation. By [F6] choose a modulus with congruence subgroup inside the open Artin norm kernel; its ray quotient maps onto $G$ and has the stated Frobenius values outside its support. Reduce the associated family to its least full modulus using [F1], preserving that quotient, $h,Q_0$, and giving $R=\log N\operatorname{rad}\mathfrak m_0\le2\log Q_0$. Its finite support is exactly the ramified primes of $E/K$. To see the local assertion explicitly, in a completion of degree $ef$, valuation modulo $f$ maps $K_v^\times/NM_w^\times$ onto $\mathbb Z/f$ by [F6], and its kernel is represented by units, so the local Artin image of units has order $e$. Those units are killed on the maximal unramified quotient because its units are norms; hence their image is exactly inertia, whose order is $e$. All finite characters of $G$ kill this image precisely when inertia is trivial. By definition of least Hecke conductor, that is precisely when the prime is absent from every character conductor. Thus prime-to-modulus classes in this quotient are exactly the unramified primes needed in $\widetilde\psi_g$. Finally [F1] and $n\le2a$ give $h\le A^{C_h}$ for an effective absolute $C_h$. This uses no general conductor–discriminant equality. [F1, F6, F7, step 1.1, construct, algebra]

3.1 If $\beta_1$ exists, let $\eta$ be its real character of $G$. For nontrivial $\eta$, the GIVEN extension contains the quadratic field $M=E^{\ker\eta}$; the associated primitive Hecke character equals the canonical forward character of $M/K$. At unramified primes both have the same split/inert values, so their common ray pullbacks agree on prime generators, and primitive uniqueness in [F5] identifies them. Its zeta factorization transfers $\beta_1$ to $\zeta_M$; if $\eta$ is trivial take $M=K$ and transfer is immediate. Thus $m=[M:\mathbb Q]\le2n$ and $D_M\le D^2Q_0\le A^2$. The weak gap in [F5] gives $\delta\ge C^{-m}m^{-m}D_M^{-1}\ge A^{-B_0}$ for an effective absolute $B_0$, because $m^m\le4^n(n^n)^2\le4^nA^2$ and $n\le2a$ absorbs the fixed exponential. Since $a\ge\log2>1/2$, enlarging $B_0$ by one gives $\nu=\delta a\ge A^{-B}$; with no exceptional zero $\nu=1$ has the same bound. The general sharp Stark or relative exponent2 theorem is not used. [F1, F5, F7, step 1.1, step 2.1, construct, algebra]

3.2 First separate the small-modulus critical zeros. The reflection in [F4] sends $|\rho|\le1/4$ into the disc of radius $1/4$ about one in the conjugate family. Its occurrence count is at most $Ch(\log(DQ_0)+n)\le A^C$, by [F4] at a fixed height and steps 1.1–2.1. The crude positive-real-part Laplace bound in [F3] therefore gives $\sum_{\chi,|\rho|\le1/4}|F(-\rho\log x)|\le C A^Cx^{1/4}$. The exceptional zero is outside this disc by step 1.1. All multiplicities and both signs of heights are retained. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 For the remaining nonexceptional zeros, set $T_1=1$, $T_j=2^{j-1}$ for $j\ge2$, and use disjoint bands $|\gamma|\le1$, $T_{j-1}<|\gamma|\le T_j$. A zero $\rho=\beta+i\gamma$ with $|\rho|\ge1/4$ satisfies $|\rho|\ge T_j/4$ and $|\rho|\ge(|\gamma|+3)/16$. Write $v=1-\beta$. Taking $\theta=\ell v$ in [F3], using $2\ell/\varepsilon=x^{1/(8\ell)}/4$, and $x\ge A^{8d}$ yields [given, algebra] $$\frac{\log x}x|F(-\rho\log x)|\le CT_j^{-1/2}(|\gamma|+3)^{-1/2}x^{-v/2}(AT_j^n)^{-2dv}.$$ Indeed the unused $x^{-3v/8}$ bounds $A^{-2dv}$, and $T_j^{-\ell v}$ bounds $T_j^{-2dnv}$ because $\ell=4dn$. Step 1.1 bounds the middle pair by $e^{-\eta(x)/2}$, where $\eta(x)=\inf_{t\ge3}\{\kappa\log x/(a+n\log t)+\log t\}$. No constant raised to $\ell$ has been hidden: the exact $T_j/4$ lower bound cancels the4 in $2\ell/\varepsilon$. [F1, F3, F7, step 1.1, step 3.2, algebra]

5.1 For $Y=AT_j^n$, finite empirical integration by parts gives $\sum_{\rho\ne\beta_1,|\gamma|\le T_j}Y^{-2d(1-\beta)}=Y^{-2d}N^\circ(0,T_j)+2d\log Y\int_0^1Y^{-2du}N^\circ(1-u,T_j)du$. The endpoint count is the limit as $\sigma\downarrow0$ of the finite list in [F2]; finite discontinuities do not affect the integral. Applying [F2] bounds this expression by $CB(T_j)$, since $\log Y\int_0^1Y^{-du}du\le1/d$. If an exceptional zero exists, $B(T)T^{-1/4}\le\delta(a+n\log T)T^{-1/4}\le C\delta a=C\nu$, as $n\le2a$ and $\sup_{T\ge1}\log T\,T^{-1/4}=4/e$; otherwise $B(T)=\nu=1$. Thus the dyadic geometric tail in step 4.1 gives [given, algebra] $$\log x\sum_{\chi}\sum_{\substack{\rho\ne\beta_1\\|\rho|\ge1/4}}|F(-\rho\log x)|\le C\nu x e^{-\eta(x)/2}.$$ The argument bounds all finite partial sums and their explicit geometric tails, proving absolute convergence too. All empirical sums are finite and all scalar integrals piecewise continuous. [F2, F3, F7, step 1.1, step 4.1, algebra]

6.1 Put $L=\log x$. With $t=e^u$, the definition of $\eta$ is bounded below by the infimum for $u\ge0$ of $\kappa L/(a+nu)+u$. If $\kappa Ln\le a^2$, its derivative is nonnegative and its minimum is $\kappa L/a$. Otherwise AM–GM gives a lower bound $2\sqrt{\kappa L/n}-a/n\ge\sqrt{\kappa L/n}$. Therefore $e^{-\eta(x)/2}\le e^{-\kappa L/(2a)}+e^{-\sqrt{\kappa L/n}/2}$. For $x\ge A^{C_2}$, with a sufficiently large fixed effective $C_2$, the chosen $\varepsilon$ lies in $(0,1/4)$: one may already impose $C_2\ge8192d^2$, using $n\log n\le a$ for $n\ge2$ and $a\ge\log2$ for $n=1$. Moreover $\varepsilon\le C_d e^{-\sqrt{L/n}}$ after increasing $C_2$, since $L/n\ge C_2\log n$ and $\varepsilon=32dn e^{-L/(32dn)}$. All these choices depend only on the fixed absolute $d$. [F3, F7, step 1.1, step 4.1, step 5.1, algebra]

7.1 Apply the quotient version of the quantitative contour formula [F3] to the quotient of step 2.1 and $W_x$, whose Mellin transform is $LF(-sL)$. After multiplication by $h$, its zero-at0 and exact deleted-prime terms are at most $C A^C L$, since $m_\chi(0)\le n$, $F(0)<3/4$, $R\le2\log Q_0$ and $\|W_x\|_\infty\le1$. Its left-line term is at most $C A^C x^{-1/4}(4\ell/\varepsilon)^\ell\le C A^Cx^{-1/8}$, by the integrated bound in [F3] and $4\ell/\varepsilon=x^{1/(8\ell)}/2$. Steps 3.2, 5.1 and the pole/difference formula in [F3] now give [given, algebra] $$h\widetilde\psi_g(x;f)=g_g(x)(1+O(\varepsilon))+O\bigl(\nu x e^{-\eta(x)/2}+A^C Lx^{1/4}+x^{1/2}\bigr).$$ Here $\theta_g=\pm1$ when present, so the two signs in the pole formula cover both cases; only the trivial character contributes the pole. Every remaining term is an actual finite-prime or absolutely convergent contour/zero term, not an imported error assertion. [F1, F3, F6, step 2.1, step 3.2, step 5.1, step 6.1, algebra]

8.1 We bind the relative main term. For $\theta_g\le0$, $g_g(x)\ge x\ge\nu x$. For $\theta_g=1$ put $u=\delta L$. If $u\le1$, $e^{-u}\le1-u+u^2/2$ gives $g_g(x)/x\ge[\delta(L-1)-u^2/2]/\beta_1\ge u/4$ when $L\ge4$. If $u\ge1$, $\beta_1>3/4$ gives $g_g(x)/x\ge1-4/(3e)>0$. Thus $g_g(x)\ge c\nu x$ whenever $L\ge a$ and $L\ge4$. Step 3.1 gives $\nu\ge A^{-B}$. Increase $C_2$ to at least $8(C+B+1)$ for the exponent in step 7.1. Then its two coarse errors divided by $g_g(x)$ are at most $Cx^{-1/4}$, using $L\le Cx^{1/8}$. This and $\varepsilon$ from step 6.1 are bounded by the displayed final error for a sufficiently small fixed effective $c_3\le\kappa/4$. This proves the full relative estimate. Finally for $t\ge10$, $t^{\beta_1}/\beta_1^2\le t$ follows from $-2\log\beta_1/(1-\beta_1)\le8\log(4/3)<\log10$, as $65536<65610$. Hence, for $\theta_g=1$, $g_g(t)>0$ and $t g_g'(t)=g_g(t)+\delta t^{\beta_1}/\beta_1\le2g_g(t)$; for $\theta_g=-1$ the derivative is positive and at most $g_g(t)/t$, and with no exceptional zero equality $t g_g'=g_g$ holds. This establishes all asserted uniformity and scaling bounds. [F3, F5, F7, step 1.1, step 3.1, step 6.1, step 7.1, algebra] ∎
