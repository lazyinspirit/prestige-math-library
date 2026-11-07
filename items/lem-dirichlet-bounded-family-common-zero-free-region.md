---
dependency_level: 2
id: lem-dirichlet-bounded-family-common-zero-free-region
kind: lemma
title: "A choice-free common zero-free region for a bounded Dirichlet family"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-dirichlet-global-zero-powers-and-square-mass
  - lem-primitive-dirichlet-l-zero-count-in-unit-window
  - thm-dirichlet-l-euler-product
  - lem-dirichlet-character-values
  - def-von-mangoldt-function
  - thm-fundamental-theorem-of-arithmetic
  - thm-dirichlet-series-absolute-half-plane-holomorphy
  - cor-derivative-operators-are-continuous-for-local-uniform-convergence
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - thm-dirichlet-l-nonzero-at-one
  - thm-identity-theorem-holomorphic-functions
  - thm-ftc-second-part
  - lem-continuous-functions-riemann-integrable
  - lem-riemann-integral-linearity
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-p-series-real-exponents
  - def-dirichlet-character-modulo-q
  - thm-dirichlet-character-primitive-induction
  - def-primitive-dirichlet-character-and-conductor
  - def-induced-dirichlet-character
  - thm-euclids-lemma
justified_by: []
proof_strategy: direct
axiom_use: "No choice premise. All zero sums have the specified indexing of the global-zero supplier; limit and integration passages have explicit positive scalar tails. Only finitely many selected zeros or characters enter each contradiction."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ian Petrow, Introduction to Analytic Number Theory (2018)"
      url: "https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf"
      locator: "Chapter9 §§2–3, printed pp.71–73, complete quantitative zeta and Dirichlet zero-free/reality/simplicity argument. The global first-kernel bridge and all constants are reconstructed below."
    - title: "Sheng-Chi Liu, Lecture Notes in Analytic Number Theory"
      url: "https://bpb-us-w2.wpmucdn.com/faculty.umaine.edu/dist/1/19/files/2022/08/analyticnumbertheory.pdf"
      locator: "Theorem31.1.1 and Page corollary, printed pp.79–80; four-function positivity for cross-character uniqueness, reconstructed here from Euler series."
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "§28.7, printed pp.216–217, (28.61), definition of N*, Theorem28.14 and Corollary28.15. This helper explicitly includes the ordinate bound of the adjacent N* definition; the source's Exceptional Zero Statement omits it in its own sentence."
---

## Statement

There is an absolute effective constant $c>0$ with the following property; one may take $c=10^{-17}$. Let $Q,T\ge2$ be real. In the product of the primitive Dirichlet $L$-functions of integer conductors $q\le Q$, the region
$$\operatorname{Re}s>1-\frac{c}{\log(Q(T+3))},\qquad |\operatorname{Im}s|\le T$$
contains at most one zero occurrence, counting all multiplicities and all primitive characters separately. Any such occurrence is a real simple zero $\beta\in(0,1)$ of a real nonprincipal primitive character, necessarily quadratic. No choice axiom is assumed.

## Statement references

[Petrow, Chapter9 §§2–3, printed pp.71–73](https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf)

[Liu, Theorem31.1.1 and Page corollary](https://bpb-us-w2.wpmucdn.com/faculty.umaine.edu/dist/1/19/files/2022/08/analyticnumbertheory.pdf)

[Montgomery–Vaughan, §28.7, printed pp.216–217](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** Real $Q,T\ge2$. Zeros always carry their actual multiplicities. Put $\mathcal L=\log(Q(T+3))$.

[F1] For every actual character modulo $m$, $F_\chi=(s-1)^{e_\chi}L(s,\chi)$ is entire, all its zeros have real part at most one, and its differentiated logarithmic derivative has the exact normally convergent zero-power identity; its full zero mass at $2+it$ is bounded by an absolute multiple of $\log(m(|t|+3))$, with specified indexing and no choice premise. Its proof identifies the negative primitive zeros as the simple parity progression and the additional induction zeros on real part zero. [[lem-dirichlet-global-zero-powers-and-square-mass]]

[F2] The proved unit-window Jensen argument uses centre $3/2+it$, radii $10/7$ and $149/100$, upper bounds $100q(|t|+3)$ for nonprincipal characters and $C_1(|t|+3)^2$ for conductor one, and lower centre bound $c_*/2$, where $c_*\ge e^{-2}$. These are the explicit inequalities in the actual proof, not an ineffective zero-counting asymptotic. [[lem-primitive-dirichlet-l-zero-count-in-unit-window]]

[F3] The Euler product is nonzero on real part greater than one; character values are zero or have modulus one; prime powers have unique factorization and $\Lambda(p^k)=\log p\ge0$. Dirichlet series converge absolutely in that half-plane. [[thm-dirichlet-l-euler-product]] [[lem-dirichlet-character-values]] [[def-von-mangoldt-function]] [[thm-fundamental-theorem-of-arithmetic]] [[thm-dirichlet-series-absolute-half-plane-holomorphy]]

[F4] Locally uniform holomorphic convergence permits derivative convergence, identity extends holomorphic equalities, and continuous scalar functions on a compact interval have the usual Riemann integral, order and FTC. Logarithms have their integral formula and product laws, and real $p$-series converge for $p>1$. [[cor-derivative-operators-are-continuous-for-local-uniform-convergence]] [[thm-identity-theorem-holomorphic-functions]] [[thm-ftc-second-part]] [[lem-continuous-functions-riemann-integrable]] [[lem-riemann-integral-linearity]] [[thm-logarithm-derivative-and-integral]] [[thm-natural-logarithm-laws]] [[thm-p-series-real-exponents]]

[F5] On real part greater than zero, $\zeta(s)=s/(s-1)-s\int_1^\infty\{x\}x^{-s-1}dx$. Every nonprincipal Dirichlet $L$-function is nonzero at one. [[thm-riemann-zeta-continuation-to-the-right-half-plane]] [[thm-dirichlet-l-nonzero-at-one]]

[F6] The product of two distinct primitive real nonprincipal characters of conductors $q_1,q_2\ge3$ is a real nonprincipal character of actual modulus $m=q_1q_2$. Here is its finite local proof. Each factor is periodic modulo $m$ and multiplicative, so the product is too. If $(n,m)>1$, a prime divisor divides at least one $q_i$, forcing that factor and the product to vanish. At units both factors have values $\pm1$, so the product is a real character. If it were principal, then on units $\chi_1(n)\chi_2(n)=1$ implies $\chi_1(n)=\chi_2(n)$. Their induced characters modulo $m$ would therefore agree on units and would both vanish on nonunits. Uniqueness of the primitive ancestor forces the original primitive characters, including their conductors, to be identical, a contradiction. This proves the stated nonprincipality directly from earlier finite-character interfaces, without a later Siegel-page result. [[def-dirichlet-character-modulo-q]] [[lem-dirichlet-character-values]] [[thm-dirichlet-character-primitive-induction]] [[def-primitive-dirichlet-character-and-conductor]] [[def-induced-dirichlet-character]] [[thm-euclids-lemma]]

## Proof

**Given:** [F1]–[F6] and the data in the Statement.

1.1 For any character of actual modulus $m$ and $\operatorname{Re}s>1$, form $H(s)=\sum_p\sum_{k\ge1}\chi(p)^kp^{-ks}/k$. On a compact sub-half-plane, both this sum and its differentiated sum have scalar absolute majorants: choose $1<a<\min\operatorname{Re}s$ and use $\log n\ll_a n^{(a-1)/2}$ to dominate $\sum_{n\ge2}(\log n)n^{-a}$ by a convergent $p$-series. The scalar identity $\exp(\sum_{k\ge1}z^k/k)=(1-z)^{-1}$ for $|z|<1$ follows by differentiating the power series, multiplying by $1-z$, and using its value at zero. Applying it to finite products and their locally uniform absolute limits gives $e^{H(s)}=L(s,\chi)$. Differentiation by [F4] yields $$D_\chi(\sigma,t):=-\operatorname{Re}\frac{L'}L(\sigma+it,\chi)=\sum_{n\ge1}\Lambda(n)n^{-\sigma}\operatorname{Re}(\chi(n)n^{-it}).$$ The series is absolutely convergent, and at $2+it$, $|L'/L|\le\sum_{n\ge2}(\log n)n^{-2}<4$, by splitting off $n=2$ and integrating the decreasing tail from $2$ to infinity. All real or complex characters are included. [F3, F4, given, construct, algebra]

2.1 We make the mass constant in [F1] effective without using a height or character-dependent entire-order constant. In [F2] one may take $C_1=200$: on the Jensen circle $|s|\le|t|+3$ and $|s-1|\le(4/3)(|t|+3)$, so the displayed integral bound gives this number. Also $\sum_{n\ge2}n^{-3/2}\le2$ implies $c_*\ge e^{-2}$. Since $\log((149/100)/(10/7))=\log(1043/1000)>1/25$, the Jensen inequalities in [F2] give at most $1000\log(q(|v|+3))$ zeros in each primitive window of width two. The reflection and possible extra origin zero explicitly proved in [F1] therefore bound ALL primitive zeros in $0\le\operatorname{Re}\rho\le1$ in such a window by $3000\log(q(|v|+3))$. For the two bands $n\le|t-\operatorname{Im}\rho|<n+1$, their square contribution is at most $$6000\frac{\log(q(|t|+3))+\log(n+4)}{1+n^2}.$$ Here windows are centred at $t\pm(n+1/2)$; assign endpoints to half-open bands. Integral comparison gives $\sum_{n\ge0}(1+n^2)^{-1}<3$ and $\sum_{n\ge0}\log(n+4)/(1+n^2)<20$: use $\log(n+4)\le2+2\sqrt{n+1}$ and compare $n^{-3/2}$ with its integral. Thus this contribution is less than $200000\log(q(|t|+3))$. The negative primitive progression contributes less than two. Each extra induction factor has zero spacing $2\pi/\log p$, hence at most $1+\log p$ zeros in a width-two window and square mass at most $6(1+\log p)$. Summing over the distinct primes dividing $m$ gives less than $20\log m$, since their product divides $m$. Consequently the explicit safe bound $$\sum_{\rho\in Z_\chi}|2+it-\rho|^{-2}\le M\log(m(|t|+3)),\qquad M=10^8,$$ holds for every actual character. This just unpacks the positive scalar estimates in the proved suppliers; no ineffective lower bound for $L(1,\chi)$ enters. [F1, F2, F3, F4, step 1.1, algebra]

3.1 For $1<\sigma\le2$ put $s=\sigma+it$, $s_0=2+it$, and let $Z^+_\chi$ consist of the full zeros with $0\le\operatorname{Re}\rho\le1$. Integrate the $h=1$ identity [F1] horizontally, using its locally uniform convergence on the zero-free half-plane, to obtain $$\frac{L'}L(s)-\frac{L'}L(s_0)=\sum_{\rho\in Z_\chi}\left(\frac1{s-\rho}-\frac1{s_0-\rho}\right)-e_\chi\left(\frac1{s-1}-\frac1{s_0-1}\right).$$ For $\operatorname{Re}\rho<0$ and $1\le u\le2$, $|u+it-\rho|\ge|2+it-\rho|/2$, so the sum of the absolute integrated differences of these terms is at most four times the square mass in step 2.1. For $\rho\in Z^+_\chi$, $\operatorname{Re}(s_0-\rho)^{-1}=(2-\operatorname{Re}\rho)|s_0-\rho|^{-2}\le2|s_0-\rho|^{-2}$. Their REAL-kernel series at $s$ converges: for fixed $\sigma>1$ compare $|s-\rho|$ with $|s_0-\rho|$, using the positive lower ratio $\min\{1,(\sigma-1)/2\}$ and the numerator bound $0<\sigma-\operatorname{Re}\rho\le2$. Dropping the nonpositive $-e_\chi\operatorname{Re}(s_0-1)^{-1}$ term and using step 1.1 yields, for every finite submultiset $B\subseteq Z^+_\chi$, $$D_\chi(\sigma,t)\le A\log(m(|t|+3))+e_\chi\frac{\sigma-1}{(\sigma-1)^2+t^2}-\sum_{\rho\in B}\operatorname{Re}\frac1{\sigma+it-\rho},\qquad A=10^9.$$ All omitted strip terms are positive. Crucially, the divergent first sum over negative trivial zeros was never separated: only its absolutely controlled DIFFERENCE was integrated. [F1, F4, step 1.1, step 2.1, algebra]

4.1 The Euler series in step 1.1 gives three positivity inequalities without a new supplier or choice premise. For $z=\chi(n)n^{-it}$ of modulus one, $3+4\operatorname{Re}z+\operatorname{Re}z^2=2(1+\operatorname{Re}z)^2\ge0$; when $\chi(n)=0$, use the positive constant term $3$. Therefore $$3D_\zeta(\sigma,0)+4D_\chi(\sigma,t)+D_{\chi^2}(\sigma,2t)\ge0.$$ For real characters, $(1+\chi(n))\ge0$ and $(1+\chi_1(n))(1+\chi_2(n))\ge0$, so $$D_\zeta(\sigma,0)+D_\chi(\sigma,0)\ge0,\qquad D_\zeta(\sigma,0)+D_{\chi_1}(\sigma,0)+D_{\chi_2}(\sigma,0)+D_{\chi_1\chi_2}(\sigma,0)\ge0.$$ These formulas use the full zeta at modulus one and actual characters at their own moduli, so nonunits also satisfy the pointwise inequalities. All sums are absolutely convergent. For $q\le Q$, $|t|\le T$, the kernel errors in these inequalities are bounded in total by $B\mathcal L$, with $B=10^{11}$: $\log(q(2T+3))\le2\mathcal L$ and $\log(q_1q_2\cdot3)\le3\mathcal L$ bound even the product-modulus case. [F3, F6, step 1.1, step 3.1, algebra]

5.1 Set $b=10^{-14}=1/(1000B)$ and $c=b/1000=10^{-17}$. Suppose a primitive nonprincipal character has a zero $\rho=\beta+i\gamma$ in the stated rectangle, and put $\delta=1-\beta$. By [F1], $0\le\delta<c/\mathcal L$, and $0<\beta\le1$. If the character is not real, then its square is nonprincipal: square-principality says its unit values are $\pm1$. Apply the first positivity inequality of step 4.1 at $t=\gamma$, $\sigma=1+x$, $x=b/\mathcal L$, retaining the chosen zero in its middle term. Only zeta contributes a pole, and thus $$0\le\frac3x-\frac4{x+\delta}+B\mathcal L\le\mathcal L\left(\frac3b-\frac4{b+c}+B\right)<0,$$ since $c=b/1000$ and $Bb=1/1000$. This contradiction excludes every nonreal character. [F1, F3, step 3.1, step 4.1, algebra, contradiction]

6.1 Suppose next that the primitive nonprincipal character is real and $|\gamma|\ge b/\mathcal L$. Its square is principal at its actual modulus, so the same inequality has an additional pole contribution $x/(x^2+4\gamma^2)\le1/(5x)$. Hence $$0\le\frac{16}{5x}-\frac4{x+\delta}+B\mathcal L\le\mathcal L\left(\frac{16}{5b}-\frac4{b+c}+B\right)<0.$$ Thus every possible zero for a real nonprincipal character in this rectangle has $|\gamma|<b/\mathcal L$. [F3, step 3.1, step 4.1, step 5.1, algebra, contradiction]

6.2 The only primitive principal character has conductor one and L-function zeta. The integral in [F5] gives for $|s-1|\le1/8$, $$|(s-1)\zeta(s)-1|\le|s-1|\left(1+\frac{|s|}{\operatorname{Re}s}\right)\le\frac18\left(1+\frac{9}{7}\right)<1.$$ Thus this disc contains no zero of zeta. A zero in our rectangle must therefore have $|\gamma|>1/16$, since $\delta<c/\mathcal L<1/16$. In the first positivity inequality, all three functions are zeta. At $t=\gamma$ and $x=b/\mathcal L$, the extra pole kernels at $\gamma$ and $2\gamma$ are bounded by $8$ and $4$ respectively, because $x/(x^2+u^2)\le1/(2|u|)$. Their weighted sum is at most $36$, already absorbed by the safe bound $B\mathcal L$ in place of the smaller error $9A\mathcal L$. Thus exactly the contradiction of step 5.1 excludes this zero. This also handles all boundary heights and conductor one without a Hecke or separate zero-free theorem. [F1, F5, step 3.1, step 4.1, step 5.1, algebra, contradiction]

7.1 A real character has conjugation-symmetric zeros with equal multiplicity: conjugation preserves its real-coefficient initial series, and [F4] extends that identity. If a zero from step 6.1 were nonreal, retain it and its conjugate in the second positivity inequality of step 4.1 at $\sigma=1+y$, $y=10b/\mathcal L$. Each retained kernel equals $a/(a^2+\gamma^2)$ with $a=y+\delta$. Since $a\le(10b+c)/\mathcal L$, $a\ge10b/\mathcal L$ and $|\gamma|<b/\mathcal L$, one has $a+\gamma^2/a<11b/\mathcal L$, so each kernel is greater than $\mathcal L/(11b)$. It follows that $$0\le\mathcal L\left(\frac1{10b}-\frac2{11b}+B\right)<0,$$ a contradiction. The same estimate applies to any two occurrences of real zeros for this character, including two copies of one multiple zero. Therefore it has at most one occurrence in the rectangle, and that occurrence is real and simple. It is below one by [F5]. [F1, F3, F4, F5, step 3.1, step 4.1, step 6.1, algebra, contradiction]

8.1 Finally suppose two different primitive characters contribute occurrences in the rectangle. By steps 5.1–7.1 they are distinct real nonprincipal characters, with real zeros $\beta_1,\beta_2\in(0,1)$ and $0<1-\beta_j<c/\mathcal L$. Their conductors are at least three, since moduli one and two have only principal characters and the primitive principal conductor is one. Their product is nonprincipal at modulus $q_1q_2$ by [F6]. Apply the last positivity inequality of step 4.1 at $\sigma=1+y$, $y=10b/\mathcal L$, retaining these two zeros. Only zeta contributes a pole, and each retained kernel exceeds $\mathcal L/(11b)$. Again $$0\le\mathcal L\left(\frac1{10b}-\frac2{11b}+B\right)<0.$$ This proves cross-character uniqueness. A real nonprincipal character has order exactly two on its unit group and hence is quadratic. All possible zero occurrences have now been counted, with multiplicity. The displayed numerical constants are absolute and effective, and every infinite passage used an explicit scalar tail or the specified zero indexing of [F1]; no choice hypothesis has been introduced. [F1, F3, F6, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 6.2, algebra, contradiction] ∎

## Remarks

This is a bounded-ordinate common region. It does not assert a fixed zero-free strip at arbitrarily large heights. In the current cached Montgomery–Vaughan text the Exceptional Zero Statement before (28.62) omits an ordinate bound in its own sentence; the adjacent definition of $N^*(\theta,T)$ and Corollary28.15 explicitly impose $|\gamma|\le T$. No unrestricted-height assertion is inferred here. The existing AC/CC/DC Hecke-specialization theorem is not a premise or a target of this reconstruction.
