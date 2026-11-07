---
id: thm-thorner-zaman-explicit-log-free-density-for-hecke-l-functions
kind: theorem
title: Explicit Thorner–Zaman log-free density estimate for Hecke L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 27
deps:
- def-hecke-l-zero-counting-function
- thm-thorner-zaman-large-sieve-for-ideals
- lem-kolesnik-straus-offset-power-sum-lower-bound
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
- lem-hecke-congruence-family-cardinality-and-primitive-reduction
- lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives
- lem-hecke-prime-zero-detector-with-padded-offset
- lem-primitive-hecke-analytic-landau-page-family-core
- lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals
- thm-exponential-beats-every-polynomial
- thm-logarithm-derivative-and-integral
proof_strategy: primitive reduction, padded prime detection, field-uniform large sieve,
  and exact exponent ledger
axiom_use: AC, Countable Choice and Dependent Choice retain the original public scope;
  the actual arithmetic, canonical-product and L2 inputs use AC and CC. No class-field
  realization or exceptional-zero lower bound is used.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Jesse Thorner and Asif Zaman, A bound for the least prime ideal in the
      Chebotarev density theorem
    url: https://msp.org/ant/2017/11-5/ant-v11-n5-p04-s.pdf
    locator: Theorems 3.2 and 5.3, Proposition 5.1, and complete proof in §§5–6, printed
      pp. 1160–1170.
  - title: Asif Zaman, Analytic Estimates for the Chebotarev Density Theorem and Their
      Applications
    url: https://www.math.toronto.edu/zaman/files/thesis.pdf
    locator: Chapter 5, printed pp. 115–138; proof context for the zero-detection
      estimate and density theorem.
---

## Statement

Assume AC, Countable Choice, and Dependent Choice. Let $K$ be a number field of degree $n_K$ and absolute discriminant $D_K$, and let $H$ be a congruence class group of $K$. Put $Q=\max_{\chi\bmod H}N_{K/\mathbb Q}\mathfrak f_\chi$ and let $N(\sigma,T,\chi)$ count with multiplicity zeros $\rho$ of $L(s,\chi)$ with $\sigma<\operatorname{Re}\rho<1$ and $|\operatorname{Im}\rho|\le T$. If
$$\frac12\le\sigma<1,\qquad T\ge\max\left\{n_K^{5/6}(D_K^{4/3}Q^{4/9})^{-1/n_K},1\right\},$$
then
$$\sum_{\chi\bmod H}N(\sigma,T,\chi)\ll\left\{e^{O(n_K)}D_K^2QT^{n_K+2}\right\}^{81(1-\sigma)}.$$
If $1-10^{-3}\le\sigma<1$, the exponent $81$ may be replaced by $73.5$. The implied constants are absolute and effective.

## Statement references

[[def-hecke-l-zero-counting-function|Hecke zero-counting convention]]

[[thm-thorner-zaman-large-sieve-for-ideals|Hecke ideal large sieve]]

## Facts & Assumptions

**Given:** AC, Countable Choice, and Dependent Choice, and exactly the parameters and zero-counting convention in the Statement. Write $n=n_K$, $D=D_K$, $\Delta=1-\sigma$, and $h=\#\widehat H$.

[F1] The zero-counting definition counts occurrences with their function-theoretic multiplicities. [[def-hecke-l-zero-counting-function]]

[F2] Primitive reduction preserves the finite family, $h,Q$ and positive-critical zeros with multiplicities; its primitive representative has $N\operatorname{rad}(\mathfrak m_0)\le Q^2$. For every fixed $\varepsilon>0$, $h\le C_\varepsilon^nD^{1/2+\varepsilon}Q^{1+\varepsilon}$. [[lem-hecke-congruence-family-cardinality-and-primitive-reduction]]

[F3] The full field-uniform Hecke prime-ideal large sieve applies for $\nu\ge\epsilon>0$ with threshold $v\ge C_\epsilon\{h n^{(5/4+\nu)n}D^{3/2+\nu}Q^{1/2}T^{n/2+1}\}^{1+\epsilon}$, denominator $(1+\epsilon)^{-1}\log(v/h)-\mathcal L'$ and exact $\mathcal L'=\frac12\log D+\frac12\log Q+\frac14n\log n+(\frac12n+1)\log T+O_\epsilon(1)$. Finite prime polynomials are within its full weighted-square-summable scope. [[thm-thorner-zaman-large-sieve-for-ideals]]

[F4] For $\mathcal L=\log D+\frac12\log Q+(\frac12n+1)\log(T+3)+\Theta n$, $\Theta\ge100$, the uniform local zero count is $2u\mathcal L+4$ for discs of radius $u\le3/4$ centred at $1+r+it$, $r\le1/16$; also $P_1(w)\le3(\log w+\mathcal L)$. [[lem-hecke-local-zero-mass-and-higher-logarithmic-derivatives]]

[F5] The padded prime detector has $\lambda_0=1/16{,}000{,}000$, $\xi=1001/1000$, $\xi A_1<4$, $\xi B<146.7$, and cutoffs $x=e^{X_\lambda\mathcal L}$, $y=e^{Y_\lambda\mathcal L}$ with $X_\lambda>Y_\lambda>4.7$ and uniformly bounded $X_\lambda,Y_\lambda$ for $\lambda\ge\lambda_0$. At each target zero within radius $r$, it bounds $r^4\log(x/y)\int_y^x|W(u,t)|^2du/u+\delta_\chi\mathbf1_{|t|<Ar}$ below by $c_0e^{-B r\mathcal L}$. Its finite offset estimate is proved locally, including repeated zeros, by the exact Kolesnik–Straus supplier. [[lem-hecke-prime-zero-detector-with-padded-offset]] [[lem-kolesnik-straus-offset-power-sum-lower-bound]]

[F6] For conductor discriminant at most $Q'$ and height at most $T'$, when $\log(Q'T'^n)\ge n$, the primitive family has at most one zero occurrence in $\beta\ge1-c_1/\log(Q'T'^n)$, with $c_1=1/4{,}000{,}000$. This analytic common region needs no quadratic class field or exceptional-zero lower bound. [[lem-primitive-hecke-analytic-landau-page-family-core]]

[F7] Under CC a bounded Borel Riemann-integrable function on any nondegenerate finite box has equal Lebesgue and Riemann integrals. Exponential decay dominates fixed polynomial factors; logarithms have their integral laws. [[lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals]] [[thm-exponential-beats-every-polynomial]] [[thm-logarithm-derivative-and-integral]]

[A1] Retain AC, CC and DC from the original Statement. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Apply [F2] and replace $H$ by its primitive congruence representative, preserving the desired count exactly. Its distinct characters have distinct primitive ancestors; all primes of norm greater than $Q^2$ avoid its modulus and have the same character value as the ancestor. Fix $\varepsilon=\epsilon=1/1000$, $\nu=1/10$ throughout. Constants depending on these fixed numbers are absolute and effective. Choose an absolute $\Theta\ge100$ below large enough for the fixed large-sieve constants, and normalize $\mathcal L$ as in [F4]. This is an auxiliary proof parameter, not an additional public assumption. The family is finite, and each count used below is finite by [F4] and a finite cover of a bounded rectangle. [A1, F1, F2, F3, F4, given, construct]

2.1 First suppose $\lambda=\Delta\mathcal L<\lambda_0$. Put $Q'=e^nDQ$, $T'=T+3$. Then $n\le\log(Q'T'^n)\le2\mathcal L$, and every primitive conductor discriminant is at most $Q'$. Since $2\lambda_0=c_1/2<c_1$, every counted zero lies in the strip of [F6]. Consequently the entire desired count is at most one. This includes arbitrarily small positive $\Delta$ and does not assume an effective lower bound for an exceptional zero. [F1, F2, F4, F5, F6, step 1.1, algebra]

3.1 Suppose $\lambda\ge\lambda_0$ and $0<\Delta<1/80$. Put $r=\xi\Delta$, $\lambda_*=\xi\lambda$, with $\xi=1001/1000$, and take the cutoffs $x,y$ of [F5] at $\lambda_*$. Since $\xi A_1<4$, $rA_1<1/20$, so every detector hypothesis holds. For a counted occurrence $\rho=\beta+i\gamma$, put $\Phi_\rho(t)=\mathbf1_{|1+it-\rho|\le r}$ on $[-T,T]$. Its support has length at least $r\sqrt{\xi^2-1}/\xi$: indeed $1-\beta<\Delta$, so the full interval about $\gamma$ has half-length greater than that number, and truncation at an endpoint of $[-T,T]$ retains at least this half-length since $T\ge1>r$. At a fixed $t$, [F4] bounds the sum of these indicators, including all multiplicities for one character, by $2r\mathcal L+4$. Multiply the pointwise detector by $\Phi_\rho/r$, integrate and sum the finite occurrence lists. The polynomial part is bounded by $(2r\mathcal L+4)r^3\log(x/y)J$. For the pole term there is only the one trivial primitive character, and $r^{-1}\int_{-T}^T\mathbf1_{|t|<Ar}dt\le2A$. Thus, writing $N=\sum_\chi N(\sigma,T,\chi)$, $$c_0e^{-B\xi\lambda}N\le C(1+\lambda)r^3\log(x/y)J+C(1+\lambda),\qquad J=\int_y^x\sum_{\chi\bmod H}\int_{-T}^T|W(u,t)|^2dt\,\frac{du}{u},$$ where $W(u,t)=\sum_{y\le N\mathfrak p<u}\chi(\mathfrak p)\log N\mathfrak p/(N\mathfrak p)^{1+it}$. No derivative index has been chosen as a function of $t$. [F1, F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 We verify the full large-sieve threshold uniformly in the field. The public lower bound on $T$ gives $$n\log n\le\frac65n\log T+\frac85\log D+\frac8{15}\log Q.$$ Using [F2] with $\varepsilon=.001$, the logarithm of the size expression $\{h n^{1.35n}D^{1.6}Q^{1/2}T^{n/2+1}\}^{1.001}$ is at most $$4.265261\log D+2.223221\log Q+(2.12212n+1.001)\log T+C n.$$ Every displayed coefficient is strictly smaller than the corresponding coefficient of $4.6\mathcal L$: these are $4.6$, $2.3$, and $2.3n+4.6$. Increase the fixed $\Theta$ so this bound, and the fixed $C_\epsilon$ in [F3], are at most $4.6\mathcal L$. As $Y_{\lambda_*}>4.7$, the threshold $v=y/2$ meets [F3]. It also exceeds $Q^2$ (because $Y_{\lambda_*}\mathcal L>2.35\log Q$), so primitive ancestors and quotient characters agree on every used prime. Similarly substitution into $\mathcal L'$ gives $$\mathcal L'+\frac{\log h}{1.001}\le4\mathcal L,$$ after the same fixed increase of $\Theta$: the respective coefficients are at most $1.401$ for $\log D$, $1.634$ for $\log Q$, and $.8n+1$ for $\log T$, each strictly below those in $4\mathcal L$. Consequently $\frac1{1.001}\log(v/h)-\mathcal L'\ge\mathcal L/2$. The error term $O_\epsilon(v^{-\epsilon/2})$ is at most $C/\mathcal L$, because $v\ge e^{4.6\mathcal L}$ and the maximum of $s e^{-cs}$ is finite with an explicit derivative bound. All enlargements of $\Theta$ and constants are effective and field-independent. [F2, F3, F5, F7, step 1.1, step 3.1, algebra]

5.1 For any $u\in[y,x]$, apply [F3] with $b(\mathfrak p)=\log N\mathfrak p/N\mathfrak p$ for $y\le N\mathfrak p<u$ and zero otherwise, and threshold $v=y/2$. This finite family satisfies the strict support condition even when $y$ is an integer prime norm. Steps 1.1 and 4.1 give $$\sum_\chi\int_{-T}^T|W(u,t)|^2dt\le\frac C{\mathcal L}\sum_{y\le N\mathfrak p<u}\frac{(\log N\mathfrak p)^2}{N\mathfrak p}\le C\mathcal L.$$ For the last inequality use $\log N\mathfrak p\le\log x=X_{\lambda_*}\mathcal L$ and $P_1(x)\le3(\log x+\mathcal L)$; $X_{\lambda_*}$ is absolutely bounded. Integrating $du/u$ over $[y,x]$ gives $J\le C\mathcal L^2$. These are finite prime polynomials: each integrand is bounded Borel and continuous on finitely many prime-norm pieces, and [F7] identifies the compact Riemann integrals with the L2 integrals in [F3]. Finite expansion of the squared polynomials followed by subdivision of the finite rectangles justifies the two integral orders and the finite occurrence sums in step 3.1; each continuous rectangular term separates into one-variable factors. Endpoints lie in finitely many zero-measure segments. Thus no generic improper interchange or measurable choice of a derivative index is involved. [F2, F3, F4, F5, F7, step 3.1, step 4.1, construct, algebra]

6.1 Since $\log(x/y)\le C\mathcal L$ and $r\mathcal L=\xi\lambda$, steps 3.1 and 5.1 yield $$N\le C(1+\lambda)^4e^{B\xi\lambda}\le C e^{146.9\lambda}.$$ The last inequality follows from $B\xi<146.7$ and the finite maximum of $(1+s)^4e^{-.2s}$ on $s\ge0$. Step 2.1 covers the excluded small $\lambda$ as well. Moreover $T+3\le4T$ for $T\ge1$, so $$2\mathcal L\le2\log D+\log Q+(n+2)\log T+(2\Theta+3\log4)n.$$ As $146.9<147=2\cdot73.5$, this proves the required $73.5\Delta$ bound whenever $0<\Delta<1/80$, with an effective absolute $e^{O(n)}$ inside the base. In particular it proves the entire original near-one range $\Delta\le10^{-3}$, and implies the $81\Delta$ bound on this branch. [F4, F5, F7, step 2.1, step 3.1, step 5.1, algebra]

7.1 It remains to prove the global bound when $1/80\le\Delta\le1/2$. Cover $[-T,T]$ by at most $C T$ intervals of length one. A zero with $\beta>1/2$ and ordinate in such an interval lies in the disc of radius $3/4$ centred at $1+it_j$, since its horizontal and vertical distances are at most $1/2$ and $1/2$. The centres satisfy $|t_j|\le T+1$. Apply [F4] with height $T+1$; its new normalization is at most $2\mathcal L$. Summing gives $N\le C h T\mathcal L$. For any fixed $a=.001$, elementary bounds $\log x\le C_a x^a$ and $n\le C_a e^{an}$ give $$\mathcal L\le C_a e^{C_a n}D^aQ^a(T+3)^{an}.$$ Together with [F2] this gives $N\le e^{C n}D^{.502}Q^{1.002}T^{1+.001n}$, increasing the effective absolute $C$ and using $T+3\le4T$. The base $e^{C'n}D^2QT^{n+2}$ to power $81\Delta$ dominates this term: $81\Delta\ge81/80=1.0125>1.002$, its $D$ power is at least $2.025>.502$, and its $T$ power is at least $1.0125(n+2)>1+.001n$. Choose $C'$ to absorb the absolute $e^{Cn}$ uniformly, since $81\Delta$ is bounded below. This proves the remaining global range. All constants in both branches are absolute and effective. The original two public density displays and all their parameter ranges have therefore been proved, without the former Weiss-density baseline or any class-field/exceptional-zero lower-bound premise. [F1, F2, F4, F7, step 1.1, step 6.1, algebra] ∎