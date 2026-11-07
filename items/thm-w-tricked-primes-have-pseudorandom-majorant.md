---
id: thm-w-tricked-primes-have-pseudorandom-majorant
kind: theorem
title: "W-tricked primes have a pseudorandom majorant"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - alg-goldston-yildirim-pseudorandom-majorant
  - thm-goldston-yildirim-linear-forms-asymptotic
  - thm-siegel-walfisz-prime-distribution
  - def-k-pseudorandom-measure
  - def-w-tricked-von-mangoldt-function
  - def-prime-progression-discrepancy
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-power
  - def-factorial-and-falling-factorial
  - lem-integer-part
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-prime
  - def-integers-modulo-n
  - lem-w-trick-positive-box-lifts-and-linear-forms-condition
  - lem-w-trick-supported-cyclic-correlation-bound
  - def-linear-forms-condition-for-a-measure
  - def-correlation-condition-for-a-measure
  - def-goldston-yildirim-truncated-divisor-sum
  - def-number-theoretic-mobius-function
  - thm-logarithm-slower-than-every-positive-power
  - def-unit-group-modulo-n-and-euler-totient
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§3, 9–10 and Appendix A; exact passages inspected in the complete local full-text snapshot"
    - title: "Daniel A. Goldston and Cem Y. Yıldırım, Higher correlations of divisor sums related to primes III: k-correlations"
      url: "https://arxiv.org/pdf/math/0209102"
      locator: "Theorem 1.1 and §6; independent untricked correlation calculation inspected in full relevant sections"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "§§8–9; complete smooth-cutoff exposition inspected; alternate cutoff/normalization, comparison only"
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 10"
      url: "https://kskedlaya.org/18.785/errorbounds2.pdf"
      locator: "Theorem 10.11; statement/interface inspected, not used as a proof of the current draft supplier"
---
## Statement

Assume the axiom of choice, countable choice, and dependent choice. Fix $k\ge3$ and let $N\to\infty$ through primes. For $N\ge e^{e^e}$ set $w(N)=\max(2,\lfloor\sqrt{\log\log\log N}\rfloor)$ and set $w(N)=2$ below that threshold; put $W=\prod_{p\le w(N)}p$, $R=N^{1/(k2^{k+4})}$, $\epsilon_k=1/(2^k(k+4)!)$, and $I_N=[\epsilon_kN,2\epsilon_kN]\cap\mathbb Z$. Let $\mathbf1_{I_N}(n)$ be $1$ when $n\in I_N$ and $0$ otherwise. For a finite set $S$, write $\mathbb E_{x\in S}F(x)=|S|^{-1}\sum_{x\in S}F(x)$. On standard representatives $0\le n<N$, define $\nu_N(n)=1-\mathbf1_{I_N}(n)+\frac{\varphi(W)}{W\log R}\Lambda_R(Wn+1)^2\mathbf1_{I_N}(n)$ and $\widetilde\Lambda_W(n)=\frac{\varphi(W)}W\log(Wn+1)\mathbf1_{\{Wn+1\text{ prime}\}}$. Assume as an additional hypothesis that, for every fixed $A,B>0$, there is a constant $C_{A,B}>0$ such that for every real $x\ge3$, every integer $1\le q\le(\log x)^A$, and every residue class $a\pmod q$ with $\gcd(a,q)=1$,
$$\left|\sum_{\substack{n\le x\\n\equiv a\pmod q}}\Lambda(n)-\frac{x}{\varphi(q)}\right|\le C_{A,B}x(\log x)^{-B},$$
where $\Lambda(n)=\log p$ when $n=p^a$ for a prime $p$ and integer $a\ge1$, and $0$ otherwise, so prime powers carry full von Mangoldt weight. Then $\nu_N\ge0$, its normalized mean is $\mathbb E_{n\in\mathbb Z/N\mathbb Z}\nu_N(n)=1+o_k(1)$, and
$$\nu_N(n)\ge\frac1{k2^{k+5}}\widetilde\Lambda_W(n)\qquad(n\in I_N)$$
for sufficiently large $N$. The sequence $(\nu_N)$ satisfies the Green–Tao $(k2^{k-1},3k-4,k)$ linear-forms condition and the $2^{k-1}$ correlation condition, and therefore is $k$-pseudorandom in the Green–Tao convention.

## Statement references

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Goldston and Yıldırım, Theorem 1.1 and §6](https://arxiv.org/pdf/math/0209102)

[Conlon, §§8–9](https://arxiv.org/pdf/1403.2957)

## Facts & Assumptions

**Given:** Exactly the original Statement, including its full AC/CC/DC premises and displayed uniform Siegel–Walfisz estimate. The construction is unchanged. The two finite-condition suppliers below are independently accepted at their literal unqualified scopes; they do not assert every reduced residue or a freely chosen cutoff.

[A1] [[thm-siegel-walfisz-prime-distribution]] supplies the displayed full-weighted discrepancy estimate under its original AC/CC/DC hypotheses. Its current local proof is independently accepted. Here the estimate is also an explicit original Statement hypothesis. No maximum over endpoints is needed: apply it separately to the two specific endpoints below.

[A2] [[def-axiom-of-choice]] is the original axiom-of-choice hypothesis, retained without weakening the Statement.

[A3] [[def-countable-choice]] is the original countable-choice hypothesis, retained as stated. It is not silently dropped because the newly used sieve suppliers are unqualified.

[A4] [[def-dependent-choice]] is the original dependent-choice hypothesis, likewise retained. These are precisely the declared choice hypotheses of [A1].

[F1] [[alg-goldston-yildirim-pseudorandom-majorant]] defines the same $w,W,R,\epsilon_k,I_N,g_N,\nu_N$ as the Statement. On $I_N$, $\nu_N=c\Lambda_R(Wn+1)^2$ with $c=\varphi(W)/(W\log R)$; outside $I_N$ it equals1.

[F2] [[thm-goldston-yildirim-linear-forms-asymptotic]] gives its unqualified boxed asymptotic for positive integer arguments, nonzero pairwise nonparallel coefficient rows bounded by $\sqrt w/2$, and at least $R^{10m}$ consecutive integers in each coordinate. This will only be used for the one-form interval normalization below.

[F3] [[lem-w-trick-supported-cyclic-correlation-bound]] gives, for EACH $2\le m\le2^{k-1}$, the exact PRODUCT pair bound including repeated shifts and a single family $\tau_{m,N}$ with EVERY fixed positive integer moment bounded. Its construction uses balanced differences and the supported interval; it does not use an integer period $N$ or the held stronger original arbitrary-order theorem.

[F4] [[def-linear-forms-condition-for-a-measure]] includes the nonnegative mean-one family premise and every allowed rational-coefficient test. [[def-correlation-condition-for-a-measure]] adds that premise to exactly the product and moment clauses in [F3]. [[def-k-pseudorandom-measure]] defines $k$-pseudorandomness as the $(k2^{k-1},3k-4,k)$ linear-forms condition AND the $2^{k-1}$ correlation condition.

[F5] [[def-w-tricked-von-mangoldt-function]] gives $\widetilde\Lambda_W(n)=(\varphi(W)/W)\log(Wn+1)$ at primes and zero otherwise.

[F6] [[def-prime-progression-discrepancy]] defines $\psi(x;q,a)=\sum_{n\le x,\ n\equiv a\pmod q}\Lambda(n)$ with full prime-power weight and $E_\psi(x;q,a)=\psi(x;q,a)-x/\varphi(q)$. Integral endpoints receive full weight.

[F7] [[lem-w-trick-positive-box-lifts-and-linear-forms-condition]] applies to this EXACT algorithm and gives nonnegativity, mean $1+o_k(1)$, and the FULL $(k2^{k-1},3k-4,k)$ linear-forms condition, including uniformity over its finite rational coefficient family and all residue shifts. Its whole-box positive lifts and exact bad-box mass require no integer divisor-sum periodicity.

[F8] [[def-goldston-yildirim-truncated-divisor-sum]] and [[def-number-theoretic-mobius-function]] give $\Lambda_R(z)=\sum_{d\mid z,\ 1\le d\le R}\mu(d)\log(R/d)$ and $\mu(1)=1$. [[def-prime]] specifies the two positive divisors of a prime.

[F9] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-power]] and [[thm-logarithm-slower-than-every-positive-power]] give the parameter comparisons below. [[def-unit-group-modulo-n-and-euler-totient]] gives $0<\varphi(W)\le W$. [[def-factorial-and-falling-factorial]], [[lem-integer-part]] and [[def-integers-modulo-n]] fix the factorial, endpoint and residue conventions in the original construction.

## Proof

1.1 Put $T=\log\log\log N$ and $L=\log R$. Eventually $w\le\sqrt T$ and $\log T=o(\sqrt T)$, so $w\log w\le\sqrt T\log T=o(T)$ and $w\to\infty$. The finite product for $W$ has at most $w$ prime factors, each at most $w$, hence $\log W\le w\log w=o(T)$. Thus $W=(\log\log N)^{o(1)}=o(\log N)$ and in particular $W\le N/2$ eventually. Also $L=\log N/(k2^{k+4})$ and $|I_N|=\epsilon_kN+O(1)$. At endpoints $x\asymp WN$ one has $\log x\sim\log N$ and $W\le\log x$ eventually, so [A1] can be used at modulus $W$, reduced class1, and fixed exponents $A=1$, $B=4$. [A1, A2, A3, A4, F1, F9, given, algebra]

1.2 The construction agrees literally with [F7], at fixed $k$ and sufficiently large prime inputs. It follows that $\nu_N\ge0$, $\mathbb E\nu_N=1+o_k(1)$, and every allowed rational nonparallel system with at most $k2^{k-1}$ forms, at most $3k-4$ variables and coefficient height at most $k$ has average $1+o(1)$ uniformly in coefficients and residue shifts. This is the entire linear-forms condition in [F4]. [F1, F4, F7, given]

2.1 For $n\in I_N$ put $z=Wn+1$. If $z$ is prime, then $z\ge\epsilon_kN>R$ eventually. Its only positive divisor not exceeding $R$ is1, so [F8] gives $\Lambda_R(z)=L$. By step 1.1, $z\le WN+1\le N^2$ eventually, whence $\log z\le2\log N$. Consequently $$\nu_N(n)=\frac{\varphi(W)}W L\ge\frac1{k2^{k+5}}\frac{\varphi(W)}W\log z=\frac1{k2^{k+5}}\widetilde\Lambda_W(n).$$ If $z$ is not prime the right side iszero and nonnegativity gives the same bound. This proves the original exact numerical domination, including both endpoints of $I_N$. [F1, F5, F8, F9, step 1.1, step 1.2, algebra]

2.2 The original interval normalization is also retained. Apply [F2] with $m=t=1$ and $\psi(x)=x$ on $I_N$: its arguments $Wx+1$ are positive, coefficient1 is eventually at most $\sqrt w/2$, and $|I_N|\sim\epsilon_kN\ge R^{10}$ because $10/(k2^{k+4})<1$. Its average squared divisor sum is $(1+o)W\log R/\varphi(W)$, so the average of $g_N$ ON $I_N$ is $1+o(1)$. Since $\nu_N=1$ outside $I_N$ and $|I_N|/N=\epsilon_k+O(N^{-1})$, this also recovers its global mean $1+o_k(1)$, consistently with step 1.2. [F1, F2, F9, step 1.1, step 1.2, algebra]

2.3 Preserve the extra prime-supported normalization under the displayed SW hypothesis. Set $n_0=\lceil\epsilon_kN\rceil$, $n_1=\lfloor2\epsilon_kN\rfloor$, $x_0=Wn_0$, $x_1=Wn_1+1$. The class1 terms with $x_0<z\le x_1$ are EXACTLY $z=Wn+1$, $n_0\le n\le n_1$: the previous such term is $W(n_0-1)+1\le x_0$. Thus [A1] at the two endpoints and [F6] give $$S_N:=\sum_{n=n_0}^{n_1}\Lambda(Wn+1)=\frac{W(n_1-n_0)+1}{\varphi(W)}+O\left(\frac{WN}{(\log N)^4}\right)=\frac{W\epsilon_kN}{\varphi(W)}+O\left(\frac W{\varphi(W)}+\frac{WN}{(\log N)^4}\right).$$ In particular the exact endpoint difference is $W(n_1-n_0)+1$, not $W(n_1-n_0+1)$. Terms from prime powers of exponent at least2 contribute $Q_N=O(\sqrt{WN}(\log N)^2)$: their bases are at most $\sqrt{x_1}$, their exponents at most $\log x_1/\log2$, and their weights at most $\log x_1$. The remaining terms are exactly the primes in [F5]. Therefore $$\frac1N\sum_{n\in I_N}\widetilde\Lambda_W(n)=\frac{\varphi(W)}{WN}(S_N-Q_N)=\epsilon_k+O\left(N^{-1}+\frac W{(\log N)^4}+\sqrt{\frac WN}(\log N)^2\right)=\epsilon_k+o(1),$$ using step 1.1 and $\varphi(W)\le W$. This retains the sound extra conditional conclusion of the original proof, without changing the Statement or dropping its hypotheses. [A1, A2, A3, A4, F5, F6, F9, step 1.1, algebra]

2.4 For every required $2\le m\le2^{k-1}$, [F3] supplies the PRODUCT bound for every tuple of shifts, including repetitions, and all fixed integer moments for a single family $\tau_{m,N}$. Step 1.2 supplies the separate nonnegative mean-one family premise. Hence the correlation condition of [F4] holds at exactly its required order. [F3, F4, step 1.2]

3.1 Steps 1.2 and2.4 are precisely the two conditions defining $k$-pseudorandomness in [F4]. Together with step 2.1 they prove every conclusion of the original Statement, and steps 2.2–2.3 preserve the original interval normalizations. All original AC/CC/DC and displayed SW premises are retained; no unqualified prime-pattern conclusion is inferred. [A1, A2, A3, A4, F4, step 1.2, step 2.1, step 2.2, step 2.3, step 2.4] ∎

## Proof status

The proof establishes the full original conditional Statement using the accepted positive-box linear-forms and bounded supported-correlation helpers at their literal scopes. Its original AC/CC/DC and displayed SW assumptions are unchanged. The extra conditional prime-weight mean is retained with exact endpoint arithmetic. The different stronger arbitrary-order/unwrapped-discriminant cyclic theorem remains held; no all-residue/freely-slow majorant, finite-density Szemerédi, finite-complexity transfer, or full prime-pattern theorem is supplied here.
