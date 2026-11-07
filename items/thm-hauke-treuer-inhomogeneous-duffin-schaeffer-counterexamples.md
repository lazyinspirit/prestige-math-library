---
dependency_level: 1
id: thm-hauke-treuer-inhomogeneous-duffin-schaeffer-counterexamples
kind: theorem
title: "Counterexamples for the inhomogeneous Duffin–Schaeffer conjecture at specified shifts"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line
  - lem-exponential-dominates-one-plus-x
  - thm-exponential-limits-and-range
  - thm-natural-logarithm-laws
  - cor-exponential-reciprocal-and-positivity
  - lem-real-and-complex-modulus-rules
  - thm-well-ordering-principle
  - def-inhomogeneous-reduced-rational-approximation-limsup-set
  - def-coprime
  - def-common-divisor-and-gcd
  - def-unit-group-modulo-n-and-euler-totient
  - def-number-of-distinct-prime-divisors
  - cor-sum-of-reciprocals-of-primes-diverges
  - thm-second-mertens-theorem-for-primes
  - thm-sum-of-totients-over-divisors
  - thm-fundamental-theorem-of-arithmetic
  - thm-euler-totient-product-formula
  - thm-chinese-remainder-theorem
  - thm-standard-representatives-modulo-n
  - thm-rationals-countable
  - lem-int-embeds-rat
  - lem-subset-of-countable
  - thm-product-of-countable
  - lem-countable-iff-surjection-from-n
  - lem-countable-sets-are-null
  - def-measure-zero-and-content-zero
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - lem-qa-29-certified-natural-logarithm-series
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Manuel Hauke-Treuer, James Maynard, and Andrew Pollington, Counterexamples to the Inhomogeneous Duffin–Schaeffer Conjecture, Theorem 1 and §3"
      url: "https://arxiv.org/pdf/2609.30921v1"
    - title: "Dimitris Koukoulopoulos and James Maynard, On the Duffin–Schaeffer conjecture, Theorem 1"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v192-n1-p05-s.pdf"
---

## Statement

Assume the Axiom of Countable Choice, and let $\mathbb Z_{>0}:=\{n\in\mathbb Z:n\ge1\}$. Suppose $\gamma\in\mathbb R\setminus\{0\}$ satisfies $|\gamma-r/s|<\exp(-s^{12})$ for infinitely many pairs $(r,s)\in\mathbb Z\times\mathbb Z_{>0}$. Then there is a function $\psi:\mathbb Z_{>0}\to[0,\infty)$ for which

$$
\sum_{q=1}^{\infty}\frac{\varphi(q)\psi(q)}q=\infty
$$

but the set of $\alpha\in[0,1)$ for which there are infinitely many distinct $q\in\mathbb Z_{>0}$ and integers $a$ with $\gcd(a,q)=1$ and $|\alpha-(a+\gamma)/q|\le\psi(q)/q$ has Lebesgue measure zero.

## Statement references

[[def-inhomogeneous-reduced-rational-approximation-limsup-set|Inhomogeneous reduced rational-approximation limsup set and ordinary coprimality convention]]

[[def-unit-group-modulo-n-and-euler-totient|Euler totient function]]

[[def-measure-zero-and-content-zero|Lebesgue nullity by interval covers]]

[[def-countable-choice|Axiom of Countable Choice]]

[[thm-lebesgue-measure-is-a-complete-measure|Lebesgue measure under countable choice]]

[Hauke-Treuer, Maynard, and Pollington, *Counterexamples to the Inhomogeneous Duffin–Schaeffer Conjecture*, Theorem 1](https://arxiv.org/pdf/2609.30921v1)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a nonzero real shift $\gamma$ with $|\gamma-r/s|<e^{-s^{12}}$ for infinitely many integer pairs $(r,s)$ with $s\ge1$.

[A1] The Axiom of Countable Choice is assumed so that Lebesgue measure is a complete countably additive measure. ([[def-countable-choice]], [[thm-lebesgue-measure-is-a-complete-measure]])

[F1] $A_q(\psi,\gamma)$ consists of the $\alpha\in[0,1)$ with $|\alpha-(a+\gamma)/q|\le\psi(q)/q$ for some integer $a$ coprime to $q$, and $W'(\psi,\gamma)=\limsup_q A_q(\psi,\gamma)$. ([[def-inhomogeneous-reduced-rational-approximation-limsup-set]])

[F2] $\varphi(n)$ is the number of units in $(\mathbb Z/n)^\times$. ([[def-unit-group-modulo-n-and-euler-totient]])

[F3] The sum $\sum_p1/p$ over primes diverges. ([[cor-sum-of-reciprocals-of-primes-diverges]])

[F4] $\sum_{p\le x}1/p=\log\log x+B+O(1/\log x)$ for a constant $B$. ([[thm-second-mertens-theorem-for-primes]])

[F5] For $n\ge1$, $\omega(n)$ is the finite number of distinct primes dividing $n$. ([[def-number-of-distinct-prime-divisors]])

[F6] Every integer of absolute value greater than $1$ has a unique prime factorization. ([[thm-fundamental-theorem-of-arithmetic]])

[F7] For every positive integer $n$, $\sum_{d\mid n}\varphi(d)=n$. ([[thm-sum-of-totients-over-divisors]])

[F8] For every positive integer $n$, $\varphi(n)=n\prod_{p\mid n}(1-1/p)$. ([[thm-euler-totient-product-formula]])

[F9] For distinct primes, simultaneous residue classes modulo their product correspond bijectively to the lists of residue classes modulo each prime. ([[thm-chinese-remainder-theorem]])

[F10] $\mathbb Q$ is countably infinite. ([[thm-rationals-countable]])

[F11] The integers embed in $\mathbb Q$, and every subset of an at most countable set is at most countable. ([[lem-int-embeds-rat]], [[lem-subset-of-countable]])

[F12] A product of two at most countable sets is at most countable. ([[thm-product-of-countable]])

[F13] Every nonempty at most countable set is a surjective image of $\mathbb N$. ([[lem-countable-iff-surjection-from-n]])

[F14] Every at most countable subset of $\mathbb R$ is null by interval covers, without a choice principle. ([[lem-countable-sets-are-null]])

[F15] Nullity means that for every $\varepsilon>0$ there is a countable interval cover of total length at most $\varepsilon$. ([[def-measure-zero-and-content-zero]])

[F16] For rational $x>0$, set $y=(x-1)/(x+1)$, $S_N(x)=2\sum_{j=0}^{N-1}y^{2j+1}/(2j+1)$, and $T_N(x)=2|y|^{2N+1}/((2N+1)(1-y^2))$. Then $|\ln x-S_N(x)|\le T_N(x)$. ([[lem-qa-29-certified-natural-logarithm-series]])

[F17] For every positive integer $n$, each class modulo $n$ has a unique representative $b$ with $0\le b<n$. ([[thm-standard-representatives-modulo-n]])

[F18] The gcd of two integers is their greatest nonnegative common divisor. ([[def-common-divisor-and-gcd]])

[F19] The natural logarithm is strictly increasing and is the inverse of the positive real exponential; in particular $e^{\ln c}=c$ for $c>0$. ([[thm-natural-logarithm-laws]])

[F20] Every nonempty subset of $\mathbb N$ has a least element. ([[thm-well-ordering-principle]])

[F21] $1+x\le e^x$ for every real $x$. ([[lem-exponential-dominates-one-plus-x]])

[F22] $e^x\to0$ as $x\to-\infty$ and $e^x\to+\infty$ as $x\to+\infty$. ([[thm-exponential-limits-and-range]])

[F23] For real $x,y$, $|x+y|\le|x|+|y|$ and $|xy|=|x||y|$. ([[lem-real-and-complex-modulus-rules]])

[F24] $e^{-x}=1/e^x$ and $e^x>0$ for every real $x$. ([[cor-exponential-reciprocal-and-positivity]])

[F25] Under the assumed axiom, nullity by countable closed-interval covers implies Lebesgue outer measure zero and then Lebesgue measure zero. ([[thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line]], [[thm-lebesgue-measure-is-a-complete-measure]])

## Proof

1.1 Fix $\rho=21/250$, $c=36/25$, and $\alpha_0=\ln c$. Then $\rho>1/12$ since $252>250$. For $x=2$, [F16] with $N=2$ gives $\ln2\le1123/1620<25/36=1/c$ (the last fraction is $1125/1620$), so $c\ln2-1<0$. For $x=c$, [F16] with $N=2$ gives $\ln c\ge744582949/2042829000>131/360=(c-1+\rho)/c$, because $268049861640>267610599000$ after cross-multiplication. By [F19], $e^{\alpha_0}=c$, so $e^{\alpha_0}-1-c\alpha_0+\rho=c-1-c\ln c+\rho<0$. [given, F16, F19, algebra]

1.2 Fix $\varepsilon>0$ and an integer $X>2$. The denominators in the given approximations are unbounded: for bounded $s$, [F21] and [F24] give $e^{-s^{12}}<1$, and the inequality with [F23] implies $|r|\le(|\gamma|+1)s$, so only finitely many numerators occur. Thus approximating pairs exist above every denominator threshold. By [F22], for all sufficiently large such $s$, $r\ne0$ (otherwise $|\gamma|<e^{-s^{12}}\to0$), and [F23] gives $|r|\le(|\gamma|+1)s$. By [F10]–[F13], fix a surjection $\eta:\mathbb N\to\{(r,s)\in\mathbb Z^2:s\ge1\}$, where the domain $\mathbb N$ is the standard natural numbers. Whenever a later construction requires an approximating pair beyond a specified threshold, take the least index $m$ with $\eta(m)$ satisfying that condition, which exists by [F20]. [given, F10, F11, F12, F13, F20, F21, F22, F23, F24, algebra, construct]

2.1 For any sufficiently large approximating pair $r/s$ from step 1.2, enumerate the primes $p>X$ not dividing $rs$ by repeatedly taking the least eligible prime, and let $p_1<\cdots<p_k$ be the first $k$ in this list. Infinitely many eligible primes exist by [F3] after removing the finitely many prime divisors of $rs$; each least choice exists by [F20]. Put $\Pi=\prod_{i=1}^k p_i$ and $\Sigma=\sum_{i=1}^k1/p_i$. Take the least $k$ with $s\le e^{\rho\Sigma}$, which exists by [F3] and [F22], and use [F20] to select it. Then $\Sigma_{k-1}<\rho^{-1}\log s\le\Sigma_k$ by [F19], and $\Sigma_k-\Sigma_{k-1}=1/p_k\le1/p_1$, so $\rho\Sigma=\log s+O_X(1)$ and $\Sigma\to\infty$. [step 1.2, F3, F19, F20, F22, construct]

3.1 Let $m=\omega(|rs|)$ and list its distinct prime divisors as $u_1<\cdots<u_m$. Since $u_j\ge j+1$, [F6] gives $|rs|\ge(m+1)!$. For $m\ge4$, at least $m/2$ factors in $(m+1)!$ are at least $m/2$, so $\log((m+1)!)\ge(m/2)\log(m/2)$. Since [F23] gives $|rs|=|r|s\le(|\gamma|+1)s^2$, it follows that $m\log m=O(\log s)$ and hence $m=O(\log s/\log\log s)=o(\Sigma)$. By [F4], $\sum_{X<p\le p_k}1/p=\log\log p_k+O_X(1)$; deleting at most $m$ prime reciprocals changes this sum by at most $m$. Thus $\log\log p_k=(1+o(1))\Sigma$. From step 2.1 and [F19], $\log p_k=\exp((1+o(1))\Sigma)=s^{1/\rho+o(1)}$. [step 1.2, step 2.1, F4, F5, F6, F19, F23, algebra]

3.2 Define $\psi_X(q)=q/(2\Pi)$ when $q\mid\Pi$, $q>1$, and $\omega(\Pi/q)<c\Sigma$, and set $\psi_X(q)=0$ otherwise. Put $Y=\Pi$. Because every prime dividing $\Pi$ exceeds $X$, the support of $\psi_X$ lies in $[X,Y]$. [step 2.1, F5, construct]

4.1 The total divisor weight is $\sum_{q\mid\Pi}\varphi(q)=\Pi$ by [F7]. For squarefree $\Pi$, [F8] and factorization over its primes give $\Pi^{-1}\sum_{q\mid\Pi}\varphi(q)e^{\alpha_0\omega(\Pi/q)}=\prod_{p\mid\Pi}(1+(e^{\alpha_0}-1)/p)\le e^{(e^{\alpha_0}-1)\Sigma}$ by [F21]. On the subset with $\omega(\Pi/q)\ge c\Sigma$, each weight is at most its exponential weight times $e^{-\alpha_0c\Sigma}$; hence that subset has at most $e^{(e^{\alpha_0}-1-c\alpha_0)\Sigma}=o(1)$ of the total totient weight. Since $p_i>X>2$, $\Sigma<k/3$ and $c<3$, so $q=1$ has $\omega(\Pi/q)=k>c\Sigma$ and is in this excluded subset. Therefore, for sufficiently large $s$, supported divisors $q>1$ retain at least $2\Pi/3$ totient weight. Consequently $\sum_q\varphi(q)\psi_X(q)/q=(2\Pi)^{-1}\sum_{q\text{ in support}}\varphi(q)\ge1/3$. [step 1.1, step 2.1, step 3.2, F5, F7, F8, F21, algebra]

4.2 For every supported $q$, $\psi_X(q)=1/(2(\Pi/q))$ and $\log(\Pi/q)\le\omega(\Pi/q)\log p_k<c\Sigma\log p_k=s^{1/\rho+o(1)}$. Since $1/\rho=250/21<12$, for sufficiently large $s$ this implies $\log(2\Pi/q)<s^{12}$ and hence $\psi_X(q)>e^{-s^{12}}>|\gamma-r/s|$, using [F19], [F24], and the defining approximation. [step 1.2, step 3.1, step 3.2, F19, F24, algebra]

5.1 For supported $q$, the triangle inequality [F23] and step 4.2 show that the interval in $A_q(\psi_X,\gamma)$ is contained in the interval of radius $2\psi_X(q)/q=1/\Pi$ centered at $(a+r/s)/q$. Modulo integer translation this center has the form $b/(s\Pi)$ with $0\le b<s\Pi$ by [F17]; translating by an integer replaces $a$ by $a+\ell q$ and preserves coprimality. If the residue has a representation, put $e=\Pi/q$, $d=\gcd(b,\Pi)$, and $b=db'$. Since $e\mid b$ and $e\mid\Pi$ with $\Pi$ squarefree, $e\mid d$; and $\gcd(b',\Pi/d)=1$ by the definition of $d$ in [F18]. For $h=d/e$, the representation gives $hb'=sa+r$, hence $hb'\equiv r\pmod s$. Also $(s,q)=1$ because no prime dividing $\Pi$ divides $s$. [step 2.1, step 3.2, step 4.2, F1, F6, F17, F18, F23, algebra]

6.1 Let $S_1$ count represented residues $b$ with $\omega(d)<c\Sigma$. For fixed $d$ and $e\mid d$, put $h=d/e$. Each prime $p\mid\Pi/d$ divides $q=\Pi/e$, but divides neither $h$ nor $r$. The condition $\gcd(b',\Pi/d)=1$ excludes $b'\equiv0\pmod p$, while the represented numerator $a=(hb'-r)/s$ is coprime to $q$ and $p\nmid s$, so $hb'-r\not\equiv0\pmod p$ and $b'\not\equiv r h^{-1}\pmod p$. These are distinct forbidden classes because $p\nmid r$. The congruence $hb'\equiv r\pmod s$ selects one class modulo $s$ because $(h,s)=1$. The interval $0\le b'<s\Pi/d$ is a complete representative range modulo $s\Pi/d$, so [F9] and [F17] give at most $\prod_{p\mid\Pi/d}(p-2)$ such $b'$. There are $2^{\omega(d)}$ choices of $e$. Put $\beta=\log2$; on $\omega(d)<c\Sigma$, $1\le e^{\beta(c\Sigma-\omega(d))}$, so the cutoff factor cancels $2^{\omega(d)}$ and yields $S_1\le e^{\beta c\Sigma}\prod_{p\mid\Pi}((p-2)+1)=e^{c\Sigma\log2}\prod_{p\mid\Pi}(p-1)\le\Pi e^{(c\log2-1)\Sigma}$ by [F21]. [step 1.1, step 5.1, F1, F5, F6, F9, F17, F21, algebra]

6.2 Let $S_2$ count represented residues with $\omega(d)\ge c\Sigma$. Dropping the representation restrictions, there are $s$ copies of each residue modulo $\Pi$. By [F9], the average of $e^{\alpha_0\omega(\gcd(b,\Pi))}$ over residues modulo $\Pi$ is $\prod_{p\mid\Pi}(1+(e^{\alpha_0}-1)/p)$: modulo each prime there is one zero residue and $p-1$ nonzero residues. Therefore the sum over $0\le b<s\Pi$ is at most $s\Pi e^{(e^{\alpha_0}-1)\Sigma}$ by [F21]. Since $\alpha_0=\ln c>0$ by [F19] and $c>1$, on $\omega(d)\ge c\Sigma$ one has $1\le e^{\alpha_0(\omega(d)-c\Sigma)}$. Summing this exponential bound gives $S_2\le s\Pi e^{(e^{\alpha_0}-1-c\alpha_0)\Sigma}$. [step 1.1, step 3.2, step 5.1, F5, F9, F19, F21, algebra]

7.1 Each represented residue contributes an interval of length at most $2/\Pi$, so the measure of the block union is at most $2(S_1+S_2)/\Pi$. Since $s\le e^{\rho\Sigma}$, steps 1.1, 6.1 and 6.2 bound this by $2e^{(c\log2-1)\Sigma}+2e^{(e^{\alpha_0}-1-c\alpha_0+\rho)\Sigma}$, which tends to zero by [F22]. Unbounded approximating denominators from step 1.2 therefore allow a pair large enough that this measure is below $\varepsilon$. Together with step 4.1, for every sufficiently large $X$ there is $Y>X$ and a function supported in $[X,Y]$ with divergence sum at least $1/3$ and block-union measure below $\varepsilon$. [step 1.1, step 1.2, step 2.1, step 4.1, step 6.1, step 6.2, F22, algebra]

8.1 Start with an integer $X_1>2$. For stages $j=1,2,\ldots$, put $\varepsilon_j=2^{-j-2}$. Let $X_0(\varepsilon_j)>2$ be the least integer cutoff above which step 7.1 applies for $\varepsilon_j$, and put $X'_j=\max\{X_j,X_0(\varepsilon_j)\}$. Invoke step 7.1 with $X=X'_j$ and take the least index under the fixed surjection $\eta$ of step 1.2 whose pair produces, by the least-prime and least-$k$ rules of step 2.1, a block supported above $X_j$ with block sum at least $1/3$ and union measure below $\varepsilon_j$. Such an index exists by step 7.1 and unboundedness of the approximating denominators; it is least by [F20]. Denote the block by $[X_j,Y_j]$ and its function by $\psi_j$, and set $X_{j+1}=Y_j+1$. This defines a recursion on standard $\mathbb N$ without countable choice. Set $\psi(q)=\psi_j(q)$ on each block and $0$ elsewhere. The block sums give $\sum_{q=1}^{\infty}\varphi(q)\psi(q)/q=\infty$. Define $L_+:=\{\alpha\in[0,1):\alpha\in A_q(\psi,\gamma)\text{ for infinitely many }q\text{ with }\psi(q)>0\}$. Each block contains finitely many denominators, so every point of $L_+$ lies in every tail union of block events; that union has total interval length at most $\sum_{j\ge J}2^{-j-2}\to0$. Let $E_0=\{(a+\gamma)/q:a\in\mathbb Z,\ q\in\mathbb Z_{>0}\}$; by [F10] and [F11], $\mathbb Z$ and $\mathbb Z_{>0}$ are at most countable, so [F12] makes their product at most countable. By [F13], compose a surjection from standard $\mathbb N$ onto this product with $(a,q)\mapsto(a+\gamma)/q$; hence $E_0$ is at most countable and is null by [F14]. If a point of $W'(\psi,\gamma)$ is not in $L_+$, it lies in $A_q(\psi,\gamma)$ for infinitely many $q$ with $\psi(q)=0$; each such event consists only of points $(a+\gamma)/q$, so the point lies in $E_0$. Thus $W'(\psi,\gamma)\subseteq L_+\cup E_0$. Combining each tail interval cover of $L_+$ with a cover of $E_0$ from [F15] proves $W'(\psi,\gamma)$ null, and [F25] converts this to Lebesgue measure zero under [A1]. [A1, step 1.2, step 2.1, step 7.1, F1, F10, F11, F12, F13, F14, F15, F20, F25, algebra, construct] ∎
