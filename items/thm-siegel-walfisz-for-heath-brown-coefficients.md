---
id: thm-siegel-walfisz-for-heath-brown-coefficients
kind: theorem
title: "Siegel–Walfisz property for Heath–Brown coefficient factors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-siegel-walfisz-coefficient-sequence
  - thm-heath-brown-identity-for-von-mangoldt-sums
  - def-dirichlet-convolution
  - def-number-theoretic-mobius-function
  - def-divisor-counting-function
  - def-dirichlet-character-modulo-q
  - lem-dirichlet-character-values
  - thm-dirichlet-character-orthogonality
  - lem-nonprincipal-dirichlet-character-partial-sums
  - thm-mobius-character-sum-zero-free-log-saving
  - thm-canonical-prime-factorisation
  - thm-geometric-series
  - thm-euler-totient-product-formula
  - def-unit-group-modulo-n-and-euler-totient
  - thm-natural-logarithm-laws
  - thm-logarithm-slower-than-every-positive-power
  - def-real-power
  - thm-real-power-laws
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "Definition 2; §3.1 assumes the Siegel–Walfisz input; later coefficient family B, condition (3), printed p. 37"
    - title: "D. H. J. Polymath, New equidistribution estimates of Zhang type, and bounded gaps between primes"
      url: "https://arxiv.org/pdf/1402.0811v3"
      locator: "Definition 2.5 and complete Lemma 3.4(iii), printed pp. 9–10 and 19–20; localized positive-power-scale groups. The omitted one-variable argument is supplied locally from the accepted Möbius character estimate"
proof_strategy: direct
axiom_use: None. The only analytic input is the accepted unqualified Möbius character-sum bound; the new argument uses finite arithmetic, finite summation by parts and explicit scalar geometric tails.
---

## Statement

Fix an integer $K\ge1$ and fixed family parameters $\epsilon,C_s,c_*,W>0$, $0<c_0<C_0$ and $B\ge0$. For each real $x>1$ write $L=1+\log x$, put $V=(2x)^{1/K}$, and let $1\le j\le K$. For $1\le i\le2j$ choose a real scale $1\le M_i\le(2x)^{C_s}$ and a complex weight $w_i(n;x)$ on the positive integers, supported in $[c_0M_i,C_0M_i]$. Put $w_i(0;x)=0$ and assume the uniform finite variation bound
$$\|w_i\|_\infty+\sum_{n\ge0}|w_i(n+1;x)-w_i(n;x)|\le W L^B.$$
The weights and scales may depend on $x$, but are common to all progression and coprimality parameters below. Define the localized one-variable Heath–Brown factors by
$$f_i(n;x)=\begin{cases}w_i(n;x)\mu(n)\mathbf1_{n\le V},&1\le i\le j,\\w_i(n;x),&j<i<2j,\\w_{2j}(n;x)\log n,&i=2j.\end{cases}$$
For a nonempty subset $S\subseteq\{1,\ldots,2j\}$ put $N=\prod_{i\in S}M_i$ and suppose
$$N\ge c_*x^\epsilon.$$
Let $I$ be any real interval, allowing an empty interval, and define the grouped factor by the finite localized convolution
$$\beta(n;x)=\mathbf1_I(n)\sum_{\substack{(m_i)_{i\in S}\in\mathbb Z_{>0}^{S}\\\prod_{i\in S}m_i=n}}\prod_{i\in S}f_i(m_i;x).$$
Only the selected factors are convolved; complementary variables form a separate factor. Then for every fixed $A>1$, all $x>1$, positive integers $q,r$, and integers $a$ with $(a,q)=1$,
$$\left|\sum_{\substack{n\equiv a\ (\mathrm{mod}\ q)\\(n,r)=1}}\beta(n;x)-\frac1{\varphi(q)}\sum_{\substack{(n,qr)=1}}\beta(n;x)\right|\ll_{A,K,\epsilon,C_s,c_*,c_0,C_0,W,B}\tau(qr)^2\frac{N}{(\log x)^A}.$$
The constant is uniform in $x,q,r,a,I,j,S$, the scales and all weight values satisfying the fixed controls. This includes sharp dyadic and smooth localized factors, their fixed polylogarithmic normalizations, and an additional sharp grouped-product cutoff. It gives the Siegel–Walfisz bound for the source's positive-power-scale groups; the scale condition cannot be omitted.

## Statement references

[Polymath8a, Definition 2.5 and Lemma 3.4(iii), including its complete convolution argument](https://arxiv.org/pdf/1402.0811v3)

[Stadlmann, Definition 2, §3.1 and the later coefficient family B with grouped-scale condition](https://arxiv.org/pdf/2309.00425v3)

[[thm-heath-brown-identity-for-von-mangoldt-sums]]

[[thm-mobius-character-sum-zero-free-log-saving]]

## Facts & Assumptions

**Given:** The displayed fixed family parameters and finite group of localized factors. All sums in the discrepancy and in each convolution are finite. Write $\mathcal D(\beta;q,a;r)$ for the difference inside its absolute value.

[F1] The finite Heath–Brown identity on $[x,2x]$ has terms $(-1)^{j-1}\binom Kj\mu_{\le V}^{*j}*\mathbf1^{*(j-1)}*\log$. Dirichlet convolution is the finite divisor sum, equivalently the sum over ordered factorizations. Coefficient-sequence and Siegel–Walfisz terminology has its stated size and discrepancy conventions ([[thm-heath-brown-identity-for-von-mangoldt-sums]], [[def-dirichlet-convolution]], [[def-siegel-walfisz-coefficient-sequence]]).

[F2] The Möbius function is zero on integers with a square prime divisor and equals $(-1)^k$ on a product of $k$ distinct primes, including $\mu(1)=1$. The divisor function $\tau(n)$ counts its positive divisors. Positive integers have unique finite prime-power factorizations ([[def-number-theoretic-mobius-function]], [[def-divisor-counting-function]], [[thm-canonical-prime-factorisation]]).

[F3] Characters are homomorphisms on the unit group extended by zero on nonunits, are multiplicative and have modulus at most one. Character orthogonality has both finite forms, and the unit group has $\varphi(q)$ elements, with $\varphi(1)=1$. A nonprincipal character modulo its actual modulus $q$ has partial sums bounded by $q$ at every real endpoint at least one ([[def-dirichlet-character-modulo-q]], [[lem-dirichlet-character-values]], [[thm-dirichlet-character-orthogonality]], [[def-unit-group-modulo-n-and-euler-totient]], [[lem-nonprincipal-dirichlet-character-partial-sums]]).

[F4] For every fixed $H>0$ the accepted unqualified estimate is $|\sum_{n\le t}\mu(n)\chi(n)|\le C_H\sqrt q\,t(\log t)^{-H}$ for all real $t\ge2$, every actual modulus $q\ge1$ and every character modulo $q$, including imprimitive and principal characters. Its constant may be ineffective ([[thm-mobius-character-sum-zero-free-log-saving]]).

[F5] A real geometric series of ratio in $[0,1)$ has its usual sum. Euler's finite formula is $\varphi(n)=n\prod_{p\mid n}(1-1/p)$, including $n=1$ ([[thm-geometric-series]], [[thm-euler-totient-product-formula]]).

[F6] Natural logarithm is increasing and has its product and reciprocal laws. Positive real powers have their usual logarithm/exponential laws. Every fixed power of $\log x$ is smaller than every fixed positive power of $x$ as $x\to\infty$: raise the logarithm-versus-power limit to that fixed power ([[thm-natural-logarithm-laws]], [[def-real-power]], [[thm-real-power-laws]], [[thm-logarithm-slower-than-every-positive-power]]).

## Proof

1.1 Put $h=|S|\le2K$. The support has $n\in[c_0^hN,C_0^hN]$, so it is finite even without $I$. A weight has at most $(C_0+1)M_i$ possible positive integer indices. Each factor has absolute value at most $C L^b$ with one fixed $b=B+1$: for the logarithmic factor, $\log n\le\log(C_0M_i+1)\le C L$ by $M_i\le(2x)^{C_s}$. Its underlying weight $w_i\log n$ also has finite variation norm at most $C L^b$. Indeed write its successive differences as $(\log(n+1))\Delta w_i(n)+w_i(n)\log((n+1)/n)$ for $n\ge1$; the second positive logarithms telescope on $1\le n\le\lceil C_0M_i\rceil$, and the first term is bounded by the largest logarithm times the variation of $w_i$. The value at zero is defined as zero. Multiplying a weight by $\mathbf1_{n\le V}$ or by an arbitrary real interval adds at most two jumps, hence costs at most a fixed multiple of its variation norm. These estimates are uniform in all cutoff endpoints and values. In particular every factor is either $v_i(n)$ or $\mu(n)v_i(n)$ with $\|v_i\|_\infty+\sum|\Delta v_i|\le C L^b$, allowing further interval restriction. [F1, F2, F6, given, construct, algebra]

1.2 For a positive integer $r$, let $\mathcal R_r$ be the integers all of whose prime divisors divide $r$, including one. Finite prime-factor calculations give the identity $\mu(n)\mathbf1_{(n,r)=1}=\sum_{d\mid n,\ d\in\mathcal R_r}\mu(n/d)$. At a prime dividing $r$, an exponent $e\ge1$ contributes $\sum_{k=0}^e\mu(p^{e-k})=1-1=0$; at primes not dividing $r$ the ordinary Möbius coefficient remains. Multiplicativity of the finite prime-factor products proves the identity also at $n=1$. Twisting by a character and interchanging finite sums gives, with $M_\chi(u)=\sum_{n\le u}\mu(n)\chi(n)$, $$M_{\chi,r}(t):=\sum_{n\le t,(n,r)=1}\mu(n)\chi(n)=\sum_{d\le t,\ d\in\mathcal R_r}\chi(d)M_\chi(t/d).$$ Character values zero on nonunits cause no exception, because multiplicativity still holds. [F2, F3, construct, algebra]

2.1 We will use only finite summation by parts. If $A(t)=\sum_{1\le n\le t}a_n$ and $v$ is finitely supported with $v(0)=0$, expansion and cancellation give $\sum_{n\ge1}a_nv(n)=\sum_{n\ge1}A(n)(v(n)-v(n+1))$. Thus a bound $|A(t)|\le E$ for every endpoint up to the end of the support gives $|\sum a_nv(n)|\le E\sum|\Delta v|$. Extra interval restrictions are covered by step 1.1; endpoints may be real, integral or empty, and all finite point values are included literally in the sums. This proves the needed weighted estimate without an integral or a convergence theorem. [F6, step 1.1, construct, algebra]

2.2 Write $\omega(r)$ for the number of distinct prime divisors of $r$. The $2^{\omega(r)}$ squarefree divisors are distinct, so $2^{\omega(r)}\le\tau(r)$. Geometric sums in these finitely many primes give $$\sum_{d\in\mathcal R_r}\frac1d=\prod_{p\mid r}(1-p^{-1})^{-1}\le\tau(r),\qquad \sum_{d\in\mathcal R_r}\frac1{\sqrt d}=\prod_{p\mid r}(1-p^{-1/2})^{-1}\le\tau(r)^2.$$ The first factor is at most two per prime. The second is less than four per prime, since $p\ge2$ and $1/\sqrt2<3/4$. These formulas may be obtained by first restricting each exponent to $0,\ldots,J$ and expanding a finite product; the omitted tails tend to zero by the geometric formula and a finite union bound. Consequently $\sum_{d>\sqrt t,\ d\in\mathcal R_r}d^{-1}\le t^{-1/4}\tau(r)^2$. Empty products cover $r=1$. No uniformity in $r$ is lost in these explicit bounds. [F2, F5, F6, step 1.2, construct, algebra]

2.3 Choose an index $i_0\in S$ of largest scale, using the least index to break ties, and put $M=M_{i_0}$, $P=N/M$. This is a single finite maximum. Since $h\le2K$ and $N\ge c_*x^\epsilon$, we have $M\ge N^{1/h}\ge c'x^\eta$ for the fixed $\eta=\epsilon/(2K)>0$ and $c'=\min(1,c_*)>0$. For sufficiently large $x$, it follows that $\log M\ge\eta\log x/2$ and $M\ge2$. The complementary tuple has at most $C P$ possible indices and its absolute coefficient mass is at most $C P L^E$ for a fixed $E=2Kb$; multiply the elementary individual support counts and sup norms from step 1.1. If $h=1$, the complementary tuple is the single empty tuple with product and weight one, so $P=1$ and the same assertion holds. [F1, F6, step 1.1, construct, algebra]

3.1 For $t\ge4$, split the finite identity of step 1.2 at $d=\sqrt t$. In its first part $t/d\ge\sqrt t\ge2$, so [F4] and $\log(t/d)\ge\tfrac12\log t$ bound it by $C_H\sqrt q\,\tau(r)t(\log t)^{-H}$. In the second part the trivial bound $|M_\chi(t/d)|\le t/d$ and step 2.2 give $\tau(r)^2t^{3/4}$. Since $t^{-1/4}(\log t)^H$ is bounded by [F6], and $\sqrt q\ge1$, both parts are at most $C_H'\sqrt q\,\tau(r)^2t(\log t)^{-H}$. For $2\le t<4$ this same assertion follows by $|M_{\chi,r}(t)|\le t$ after one enlargement of the constant. Hence for every fixed $H>0$, $$|M_{\chi,r}(t)|\le C_H'\sqrt q\,\tau(r)^2t(\log t)^{-H}\quad(t\ge2),$$ uniformly in arbitrarily large $r$ and all actual characters. This adds no period $qr$, $\sqrt r$ or $\log r$ to the accepted estimate. [F3, F4, F6, step 1.2, step 2.2, algebra]

3.2 For a nonprincipal character, finite inclusion-exclusion instead gives $$\sum_{n\le t,(n,r)=1}\chi(n)=\sum_{e\mid\operatorname{rad}(r)}\mu(e)\chi(e)\sum_{m\le t/e}\chi(m).$$ There are $2^{\omega(r)}\le\tau(r)$ terms. [F3] bounds each inner sum by $q$ when its endpoint is at least one and it is zero otherwise. Its endpoint-uniform absolute bound is therefore $q\tau(r)$. Applying step 2.1 to a localized constant or logarithmic factor yields $|\sum_{n\in J,(n,r)=1}f_i(n)\chi(n)|\le Cq\tau(r)L^b$, for every additional interval $J$. Only nonprincipal characters are asserted to cancel in this step; no principal main term is discarded. [F2, F3, step 1.1, step 2.1, step 2.2, algebra]

3.3 We supply an independent elementary large-modulus bound. Use the same fixed longest scale $M$ and keep its complementary tuple rather than merging it into $g$. In a reduced class $dm\equiv a\pmod q$, a contributing complementary product $d$ must be coprime to $q$, and the long variable occupies one class modulo $q$. There are at most $C M/q+1$ such integers in its support interval. All coprimality, cap and output-interval restrictions only delete possibilities. The complementary tuple count is at most $C P$ by step 2.3, and the absolute weight of a full tuple is at most $C L^{E+b}$ by step 1.1. Consequently the absolute reduced-class sum is at most $C L^{E+b}(N/q+P)$. The full absolute coefficient mass is at most $CNL^{E+b}$. These counts include empty or singleton supports and require no divisor bound in arithmetic progressions. [F1, F3, step 1.1, step 2.3, construct, algebra]

4.1 For $M$ sufficiently large and every endpoint $0\le t\le C_0M+1$, split at $t=\sqrt M$. Below that point use $|M_{\chi,r}(t)|\le\sqrt M$; above it use step 3.1, $\log t\ge\tfrac12\log M$ and $t\le(C_0+1)M$. By [F6] the first bound is also at most $C_H\sqrt q\,\tau(r)^2M(\log M)^{-H}$. Thus this last expression is an endpoint-uniform bound throughout the support of any factor of scale $M$. Step 2.1 and the variation control in step 1.1 prove, for every localized Möbius factor and every additional interval $J$, $$\left|\sum_{n\in J,(n,r)=1}f_i(n)\chi(n)\right|\le C_H\sqrt q\,\tau(r)^2M_i L^b(\log M_i)^{-H}$$ whenever $M_i$ is sufficiently large. The cap $n\le V$ is already part of its controlled weight, so the estimate is uniform even when this cap cuts through the support or removes it completely. [F4, F6, step 1.1, step 2.1, step 3.1, algebra]

4.2 Euler's finite formula gives $q/\varphi(q)=\prod_{p\mid q}(1-1/p)^{-1}\le2^{\omega(q)}\le\tau(q)$, also at $q=1$. Thus the absolute unit-average term is at most $C\tau(q)NL^{E+b}/q$. Combining with step 3.3 and $P=N/M$ yields $|\mathcal D|\le C\tau(q)L^{E+b}(N/q+N/M)$. Choose now the fixed $D>A+E+b+2$. When $q>(\log x)^D$, the first term has the desired saving. The second does too, because $M\ge c'x^\eta$ from step 2.3 and [F6] absorbs any fixed logarithmic power. We obtain $|\mathcal D|\le C\tau(q)N(\log x)^{-A}\le C\tau(qr)^2N(\log x)^{-A}$. This completes ALL moduli without an imported sieve, prime-distribution theorem or residue-average estimate. [F2, F5, F6, step 1.1, step 2.2, step 2.3, step 3.3, algebra]

5.1 Fix a modulus cutoff exponent $D>0$ and a desired saving exponent $J>0$. For $q\le(\log x)^D$, choose $H>J+b+D/2+2$ in step 4.1 and use step 2.3. Every nonprincipal character then has its long Möbius-factor sum bounded by $C\tau(r)^2M(\log x)^{-J}$, uniformly in extra interval cutoffs. If the long factor is constant or logarithmic, step 3.2 gives the same bound, because $qL^b\ll M(\log x)^{-J}$ by $M\ge c'x^\eta$ and [F6]. Thus the ONE selected longest factor has this common bound irrespective of which of the three factor types it has. All constants depend only on the displayed fixed parameters, $D$ and $J$, not on the actual weight values. [F6, step 4.1, step 3.2, step 2.3, algebra]

6.1 Write $g$ for the convolution of the selected complementary factors, using the identity sequence at one when $h=1$. For every nonprincipal character, finite multiplication gives the EXACT identity $$\sum_{n,(n,r)=1}\beta(n)\chi(n)=\sum_{d,(d,r)=1}g(d)\chi(d)\sum_{m:\ dm\in I,\ (m,r)=1}f_{i_0}(m)\chi(m).$$ For each fixed positive $d$, the condition $dm\in I$ is an interval condition on $m$. The support remains finite. Use step 5.1 with $J=A+E+2$ and step 2.3's complementary mass bound to obtain $|\sum\beta(n)\chi(n)\mathbf1_{(n,r)=1}|\le C\tau(r)^2N(\log x)^{-A}$ for all sufficiently large $x$ and $q\le(\log x)^D$. No sums over arbitrary complementary variables are included in the definition of $\beta$; this is only its exact finite factorization identity. [F1, F3, F6, step 2.3, step 5.1, algebra]

7.1 At $q=1$ both terms of the discrepancy are identical, so it is zero. For $q>1$, evaluate character orthogonality at the unit one to see that there are $\varphi(q)$ characters. Its first relation gives $$\mathcal D(\beta;q,a;r)=\frac1{\varphi(q)}\sum_{\substack{\chi\bmod q\\\chi\ne\chi_0}}\overline{\chi(a)}\sum_{n,(n,r)=1}\beta(n)\chi(n).$$ The principal character term is exactly the subtracted unit average, including the output interval and the coprimality cutoff. There are at most $\varphi(q)$ remaining terms and each character value at $a$ has modulus one. Step 6.1 therefore bounds this discrepancy by $C\tau(r)^2N(\log x)^{-A}\le C\tau(qr)^2N(\log x)^{-A}$ in the small-modulus range. The divisor inequality here follows by injecting each divisor of $r$ into the divisors of $qr$. [F2, F3, step 6.1, algebra]

8.1 Choose one $x_0>1$ covering all preceding large-$x$ requirements for the fixed family parameters and $A$. For $1<x\le x_0$, the direct support/sup-norm product bound is $\sum|\beta(n)|\le CNL^{2Kb}$, uniformly in the scales, interval and weight values. Since $\varphi(q)\ge1$, the discrepancy is at most twice this mass, independently of $q,r,a$. On this bounded $x$ range, $(\log x)^A L^{2Kb}$ has a fixed upper bound; enlarging the constant proves the same required estimate there. Together with steps 7.1 and 4.2 this proves the full displayed inequality for every $x>1$, including $q=1$, $r=1$, empty intervals, all-zero factors and all endpoint equalities. The exponent of $\tau(qr)$ is the fixed number two, independent of $A$, and no choice axiom or new analytic prerequisite is used. [F1, F2, F3, F6, step 1.1, step 7.1, step 4.2, algebra] ∎

## Remarks

The original unrestricted-subset Statement was false: a dyadic Möbius factor localized to $n=1$ is $\delta_1$, even inside a valid full Heath–Brown tuple of total scale comparable to $x$. At $(q,r,a)=(3,1,1)$ its discrepancy is $1/2$, whereas $N=1$ makes the proposed logarithmically saving bound tend to zero. The fixed positive-power lower bound on the GROUPED scale and the exact selected-factor convolution are therefore necessary source-scope corrections, not an omission of a harder valid case. Polymath Lemma 3.4(iii) has precisely this scale guard; Stadlmann's later family B also requires it. Complementary factors remain separate; unspecified complementary summations are not coefficient factors.

The proof covers the full source smooth family and a richer sharp/finite-variation version, including an extra sharp product interval. Only the already proved unqualified Möbius character estimate is used analytically; the formerly listed qualified classical zero-free, Landau–Page, Siegel, continuation, functional-equation and Perron chains are bypassed, not re-audited or newly assumed. Constants may inherit the accepted Möbius theorem's ineffectivity. Original source-fetch/retry histories and the original false preimage are preserved in the repair packet.

For real-valued source weights and $x\ge3$, the coefficient-size convention is automatic: at most $\tau(n)^{h-1}$ ordered factorizations contribute, so $|\beta(n;x)|\le C\tau(n)^{h-1}L^{2Kb}$; this is of the size required by [[def-siegel-walfisz-coefficient-sequence]]. That definition's literal use of a positive power of $\log x$ on the ENTIRE range $x>1$ imposes an additional finite-initial-range size convention. If that literal convention is needed, require it or extend the family by zero for $1<x<3$. The displayed discrepancy inequality proved here holds for the unmodified localized factors on all $x>1$, without changing $\log x$ in its denominator. No repair of that separate definition or consumer proof chain is asserted here.
