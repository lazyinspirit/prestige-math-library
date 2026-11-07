---
id: thm-chen-switched-triple-product-upper-bound
kind: theorem
title: "Upper bound for Chen's switched prime and three-factor contribution"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - lem-chen-singular-series-specialization
  - lem-selberg-optimized-upper-sieve-for-declared-local-densities
  - lem-chen-pan-divisor-weighted-triple-product-distribution
  - lem-squarefree-multiplicative-logarithmic-sums
  - thm-choice-free-siegel-walfisz-from-mobius-cancellation
  - thm-composite-simpson-error-bound
  - thm-logarithm-derivative-and-integral
  - thm-logarithm-slower-than-every-positive-power
  - def-prime
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Zihao Liu, A Corrected Simplified Proof of Chen's Theorem, Sections II–IV"
      url: "https://arxiv.org/pdf/2203.07871v1"
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes, Lemma 8"
      url: "https://raw.githubusercontent.com/lixiang90/chen_theorem/main/pdf/main_en.pdf"
    - title: "Heini Halberstam, A proof of Chen's theorem, Sections 3–5"
      url: "https://www.numdam.org/item/AST_1975__24-25__281_0.pdf"
proof_strategy: direct
axiom_use: Finite arithmetic, proper Riemann integrals and the literal unqualified distribution inputs; no choice hypothesis.
---

## Statement

For either a sufficiently large even integer $N$ with $h=-N$, $x=N$, or a
fixed nonzero even shift $h$ with $x$ sufficiently large, let
$\Omega_{\rm sw}(h,x)$ count ordered prime quadruples $(p,p_1,p_2,p_3)$
satisfying

$$0<|p+h|=p_1p_2p_3\le x,\qquad x^{1/10}<p_1\le x^{1/3}<p_2\le\left(\frac x{p_1}\right)^{1/2}, \qquad p_3\le\frac x{p_1p_2}.$$

Then

$$\Omega_{\rm sw}(h,x)\le3.94033\,C(h)\frac{x}{(\log x)^2},$$

where $C(h)$ is the positive even-shift product defined by

$$C(h)=\prod_{\substack{q\mid h\\q>2}}\frac{q-1}{q-2} \prod_{q>2}\left(1-\frac1{(q-1)^2}\right).$$

The quadruples are ordered by the displayed factor ranges; repetitions among
$p_1,p_2,p_3$ are permitted when those ranges allow them. In the fixed-shift
case the Halberstam bound is $3.928C(h)x/(\log x)^2$, which implies the
displayed weaker constant $3.94033$.

## Statement references

Liu, *A Corrected Simplified Proof of Chen's Theorem*, SectionsII–IV; Halberstam, *A proof of Chen's theorem*, Section3.

[[lem-chen-pan-divisor-weighted-triple-product-distribution]]

[[lem-selberg-optimized-upper-sieve-for-declared-local-densities]]

## Facts & Assumptions

**Given:** The two branches and complete prime ranges of the Statement. Write $L=\log x$ and fix $\varepsilon=10^{-8}$ throughout.

[F1] [[lem-chen-pan-divisor-weighted-triple-product-distribution]] supplies its exact squarefree $3^{\omega(q)}$-weighted progression estimate, with all logarithmic savings, for the present $f_x(a)$ and prime-product endpoint $y=x$. Here $a\le x^{2/3}$, so its truncated logarithmic integral is the ordinary integral at $x/a>2$.

[F2] [[lem-selberg-optimized-upper-sieve-for-declared-local-densities]] gives, for any declared $g(p)\in[0,1)$, the finite weights $\rho(1)=1$, $|\rho|\le1$, the exact quadratic factor $1/H$, and the lcm coefficients $\lambda(q)$ supported on squarefree $q<Z^2$ with $|\lambda(q)|\le3^{\omega(q)}$.

[F3] [[lem-squarefree-multiplicative-logarithmic-sums]] supplies its uniform one-variable sum $c_b(Q)\log X+O(K(Q))$, its exact product formula for $c_b(Q)$ and $K(Q)\ll(1+\log\log(3Q))^2$. The admissible weight used here is $b_2=0$, $b_p=1/(p-2)$ for $p>2$.

[F4] [[lem-chen-singular-series-specialization]] gives $C(h)$ as the displayed positive product. In particular $C(2)>0$ is an absolute constant.

[F5] [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] at modulus one gives the unqualified prime-number estimate with every fixed logarithmic saving. Its von Mangoldt weights include all prime powers.

[F6] [[thm-composite-simpson-error-bound]] gives the proper Riemann integral error at even $n$ as at most $(b-a)^5\max|f^{(4)}|/(180n^4)$. [[thm-logarithm-derivative-and-integral]] gives the logarithm derivative and its integral law.

[F7] [[def-prime]] gives positive integer prime variables. [[thm-logarithm-slower-than-every-positive-power]] absorbs each fixed logarithmic power into any positive power of $x$.

## Proof

1.1 Put $f=f_x$ as in [F1]. Its values are zero or one, and its support lies in $x^{13/30}<a\le x^{2/3}$. A triple $(p_1,p_2,p_3)$ in the stated ranges with $ap_3\le x$ determines at most one prime $p$ in the Goldbach branch, namely $p=x-ap_3$, and at most one in the fixed-shift branch with $p+h>0$, namely $p=ap_3-h$. The remaining fixed-shift branch has $p+h<0$, hence $p<|h|$ and $ap_3\le|h|$; it contributes $O_h(1)$ ordered tuples, since all factors are positive integers. Thus it suffices to bound the triples for which $|ap_3-h|$ is prime, using $h=x=N$ in the Goldbach branch; changing the sign of $h$ there leaves $C(h)$ unchanged. All ordered factors and permitted repetitions are retained. [F1, F4, F7, given, algebra]

2.1 We first obtain the needed precise prime-pair main term directly from [F5]. Removing prime powers costs $O(\sqrt t\log^2(2t))$. Finite partial summation then gives $\pi(t)=\int_2^t du/\log u+O_H(t\log^{-H}t)$ for each fixed $H$, and a further summation with $1/t$ yields, uniformly for fixed $1/10\le s\le t\le1/2$, [F5, F7, step 1.1, algebra]
$$\sum_{x^s<p\le x^t}\frac1p=\log(t/s)+O_H(L^{-H}).$$
Indeed the prime-number error contributes at most $O_H(L^{-H})$ to the two endpoint terms and to the integral over $[x^s,x^t]$, after increasing its input saving exponent by two. The main density is $du/(u\log u)$, whose integral is $\log(t/s)$. These bounds also hold for a moving pair of endpoints in the displayed fixed compact range. [F5, F7, step 1.1, algebra]

3.1 Set $\alpha=\log p_1/L$, $\beta=\log p_2/L$. Apply finite partial summation to step2.1 in the inner prime sum with weight $(1-\alpha-\beta)^{-1}$ on $1/3<\beta\le(1-\alpha)/2$. The denominator is at least $1/3$ throughout. Its function and first derivatives are uniformly bounded; the moving upper endpoint causes no loss. The resulting inner integral and its first derivative in $\alpha\in[1/10,1/3]$ are uniformly bounded as well. A second use of step2.1 for $p_1$ consequently gives [F5, F6, step 2.1, algebra]
$$\sum_a\frac{f(a)}{a\log(x/a)}=\frac{J+o(1)}L,\qquad J=\int_{1/10}^{1/3}\frac{d\alpha}{\alpha}\int_{1/3}^{(1-\alpha)/2}\frac{d\beta}{\beta(1-\alpha-\beta)}.$$
The same argument with weight one gives $\sum_a f(a)/a=O(1)$. Integration of the inner rational function using [F6] gives [F5, F6, step 2.1, algebra]
$$J=\int_{1/10}^{1/3}\frac{\log(2-3t)}{t(1-t)}\,dt.$$
Finally $\int_2^zdu/\log u=z/\log z+O(z/\log^2z)$ uniformly for $z\ge x^{1/3}$: integrate by parts once, and bound its residual integral by splitting at $\sqrt z$. It follows that [F5, F6, step 2.1, algebra]
$$F:=\sum_a f(a)\operatorname{li}(x/a)=(J+o(1))\frac{x}L.$$
All errors concern fixed ranges and are independent of the varying integer $h$ in the Goldbach branch. [F5, F6, step 2.1, algebra]

4.1 Here is a fully rational certificate that $J<122749/250000=0.490996$. Write $v(t)=\log(2-3t)$, $g(t)=1/t+1/(1-t)$, so the integrand is $v(t)g(t)$. On $[1/10,1/3]$, $0\le v\le1$, and for $1\le j\le4$, $|v^{(j)}|\le(j-1)!3^j$. Also $|g^{(l)}|\le l!(10^{l+1}+(3/2)^{l+1})$. The Leibniz rule therefore bounds its fourth derivative by [F6, step 3.1, algebra]
$$\sum_{j=0}^4\binom4j a_j(4-j)!\bigl(10^{5-j}+(3/2)^{5-j}\bigr)=\frac{13026345}4<4000000,\quad(a_0,a_1,a_2,a_3,a_4)=(1,3,9,54,486).$$
The function is $C^4$ on this closed interval because all its denominators are strictly positive. [F6, step 3.1, algebra]

5.1 For clarity the finite computation in the certificate is written completely. Put $n=128$, $D=10^9$, $t_i=(3n+7i)/(30n)$ and $z_i=(7n-7i)/(27n-7i)$ for $0\le i\le n$. Define [F6, step 4.1, construct, algebra]
$$u_i=2\sum_{j=0}^{11}\frac{z_i^{2j+1}}{2j+1}+\frac{2z_i^{25}}{25(1-z_i^2)},\qquad r_i=\left\lceil\frac{D u_i}{t_i(1-t_i)}\right\rceil.$$
The FINITE geometric identity $1/(1-u^2)=\sum_{j=0}^{11}u^{2j}+u^{24}/(1-u^2)$, integrated on $[0,z]$, gives $\log((1+z)/(1-z))=2\sum_{j=0}^{11}z^{2j+1}/(2j+1)+2\int_0^z u^{24}/(1-u^2)\,du$. Its nonnegative final integral is at most $2z^{25}/(25(1-z^2))$. Here $0\le z_i\le7/27<1$, and $(1+z_i)/(1-z_i)=2-3t_i$. Thus the integrand at $t_i$ is at most $r_i/D$. The exact integer list $(r_0,\ldots,r_{128})$ is:
```text
5895869457, 5766837182, 5642137799, 5521544686, 5404846600, 5291846392, 5182359848, 5076214647
4973249407, 4873312836, 4776262949, 4681966362, 4590297651, 4501138761, 4414378475, 4329911919
4247640120, 4167469590, 4089311953, 4013083595, 3938705351, 3866102204, 3795203021, 3725940301
3658249944, 3592071039, 3527345664, 3464018707, 3402037693, 3341352625, 3281915842, 3223681882
3166607351, 3110650807, 3055772654, 3001935031, 2949101724, 2897238070, 2846310876, 2796288341
2747139981, 2698836558, 2651350019, 2604653434, 2558720936, 2513527673, 2469049751, 2425264191
2382148882, 2339682540, 2297844666, 2256615513, 2215976044, 2175907907, 2136393393, 2097415414
2058957474, 2021003638, 1983538509, 1946547205, 1910015335, 1873928976, 1838274655, 1803039329
1768210365, 1733775524, 1699722942, 1666041117, 1632718891, 1599745440, 1567110253, 1534803127
1502814147, 1471133680, 1439752362, 1408661083, 1377850984, 1347313440, 1317040056, 1287022653
1257253265, 1227724125, 1198427661, 1169356486, 1140503393, 1111861345, 1083423472, 1055183060
1027133550, 999268528, 971581720, 944066988, 916718324, 889529846, 862495788, 835610503
808868452, 782264206, 755792433, 729447902, 703225475, 677120106, 651126832, 625240777
599457140, 573771201, 548178308, 522673883, 497253412, 471912446, 446646597, 421451534
396322983, 371256721, 346248578, 321294428, 296390193, 271531838, 246715368, 221936825
197192288, 172477872, 147789721, 123124010, 98476941, 73844744, 49223668, 24609990
0
```
Each entry is obtained solely by the finite rational formula above, including its explicit ceiling; it is independently replayable by integer multiplication and division. With Simpson weights $c_0=c_{128}=1$, $c_i=4$ for odd $i$ and $c_i=2$ for the remaining even $i$, direct integer summation gives $\sum_i c_i r_i=808037820847$. By [F6] and step4.1, [F6, step 4.1, construct, algebra]
$$J\le\frac{5656264745929}{11520000000000}+\frac{16807}{293534171136}=\frac{1407459833389864303}{2866544640000000000}<\frac{122749}{250000}.$$
The strict final gap is $2118671575697/2866544640000000000$. This is a written finite rational proof, not a numerical approximation or an external computation input. [F6, step 4.1, construct, algebra]

6.1 Put $Z=\lceil x^{1/4-\varepsilon}\rceil-1/2$ and let $P$ be the product of the primes $q<Z$ not dividing $h$. The integer $h$ is even, so $2$ is absent. Use [F2] with $g(q)=1/(q-1)$ at these primes; then its multiplicative $h(q)$, denoted $b(q)$ here to avoid confusing it with the shift, is $1/(q-2)$. It gives the explicit finite weights $\rho$ and $\lambda$ and [F2, F7, step 5.1, construct, algebra]
$$\sum_q\frac{\lambda(q)}{\varphi(q)}=\frac1H,\quad H=\sum_{d\mid P,d<Z}\mu(d)^2\prod_{q\mid d}\frac1{q-2},\quad|\lambda(q)|\le3^{\omega(q)},\quad q\mid P,\ q<Z^2.$$
The displayed quadratic identity follows because $g(q)=1/\varphi(q)$ on squarefree divisors. No density equal to a literal fraction of integer residue classes has been assumed. [F2, F7, step 5.1, construct, algebra]

7.1 Any $d<Z$ has all its prime factors below $Z$, so the sum defining $H$ is exactly the sum in [F3] at $Q=|h|$ and cutoff $\lfloor Z\rfloor$. Since $h$ is even, prime2 is excluded in both. Direct multiplication of the local factors in [F3] gives [F3, F4, step 6.1, algebra]
$$c_b(|h|)=\frac1{2C(h)},\qquad H=\frac{\log Z}{2C(h)}+O(K(|h|)).$$
Replacing $\log\lfloor Z\rfloor$ by $\log Z$ costs $O(c_b(|h|)/Z)$, absorbed in the displayed error since $c_b(|h|)\le1/(2C(2))$. For a varying $h=x$, the error is relative $o(1)$ uniformly. Indeed for every odd prime $q$, $(q-1)/(q-2)\le(1+1/q)^3$ (expand the positive polynomials, including $q=3$). Therefore $C(h)\ll K(|h|)^3\ll(1+\log\log(3|h|))^6$. Hence $C(h)K(|h|)/\log x=o(1)$ for $|h|=x$, and the same is automatic for fixed $h$. We conclude [F3, F4, step 6.1, algebra]
$$\frac1H=\left(\frac8{1-4\varepsilon}+o(1)\right)\frac{C(h)}L.$$
This proves the required normalizer uniformly in the Goldbach branch without applying a fixed-shift asymptotic to a growing shift. [F3, F4, step 6.1, algebra]

8.1 If $|ap_3-h|$ is prime and exceeds $Z$, it is coprime to $P$, and the finite divisor square $\bigl(\sum_{d\mid P,d\mid(ap_3-h)}\rho(d)\bigr)^2$ equals one. Every such square is nonnegative on every triple, including those with $ap_3=h$. The latter are allowed as extra nonnegative terms, so no sequence at the integer zero is fed into [F2]. For each possible prime at most $Z$, there are at most two possible values of $ap_3$ and at most $x^{2/3}$ supported values of $a$, each determining $p_3$ uniquely. Thus step1.1 and the square majorant give [F2, F7, step 1.1, step 7.1, algebra]
$$\Omega_{\rm sw}(h,x)\le\sum_{a,p_3:\ ap_3\le x}f(a)\left(\sum_{\substack{d\mid P\\d\mid(ap_3-h)}}\rho(d)\right)^2+O(Zx^{2/3})+O_h(1).$$
Here the final $O_h(1)$ occurs only for the fixed-shift branch. Since $Z\ll x^{1/4-\varepsilon}$, the exceptional error is $O(x^{11/12-\varepsilon})$. Expand the FINITE square to obtain $\sum_{q\mid P,q<Z^2}\lambda(q)T_x(x;q,h)$. The residue $h$ is reduced for all those $q$ by the definition of $P$. [F2, F7, step 1.1, step 7.1, algebra]

9.1 Fix a saving exponent, say $A=30$, in [F1]. Since $Z^2\ll x^{1/2-2\varepsilon}$, its modulus bound eventually contains every $q<Z^2$, regardless of the fixed logarithmic cutoff in [F1]. The coefficient bound in step6.1 consequently gives [F1, F7, step 6.1, step 8.1, algebra]
$$\sum_q\lambda(q)T_x(x;q,h)=\sum_q\frac{\lambda(q)}{\varphi(q)}\sum_{(a,q)=1}f(a)\operatorname{li}(x/a)+O(xL^{-30}).$$
This use is unqualified: it does not replace an old choice-qualified BV Statement by an unconditional one. Substituting the full $F$ from step3.1 into the main term costs at most [F1, F7, step 6.1, step 8.1, algebra]
$$E=\sum_{q\mid P,q<Z^2}\frac{3^{\omega(q)}}{\varphi(q)}\sum_{(a,q)>1}f(a)\operatorname{li}(x/a).$$
The full main term is $F/H$ by step6.1. The correction $E$ is estimated separately next; no nonzero coefficient is being assumed coprime to the sieve modulus. [F1, F7, step 6.1, step 8.1, algebra]

10.1 Each prime divisor of $q\mid P$ is less than $Z<x^{1/3}<p_2$. Thus $(a,q)>1$ forces $p_1\mid q$. Because $q<Z^2<x^{1/2}$ and $p_1>x^{1/10}$, there are at most five possible such prime divisors. By step2.1, uniformly over them the sum of $1/p_2$ in $[x^{1/3},x^{1/2}]$ is bounded. Since $x/a\ge x^{1/3}$ and $\operatorname{li}(x/a)\ll x/(aL)$, [F1, F7, step 2.1, step 9.1, algebra]
$$\sum_{(a,q)>1}f(a)\operatorname{li}(x/a)\ll x^{9/10}/L.$$
Also $\sum_{q\mid P}3^{\omega(q)}/\varphi(q)=\prod_{q\mid P}(1+3/(q-1))\ll(\log(2Z))^3$ by the final product bound of [F3]. Therefore $E\ll x^{9/10}L^2$. This proves the noncoprime correction at the actual sifted moduli, uniformly for both shifts. It is not an inference from a progression estimate requiring $(a,q)=1$. [F1, F3, F7, step 2.1, step 9.1, algebra]

11.1 Combine steps3.1,7.1–10.1. Each error $xL^{-30}$, $x^{9/10}L^2$, $x^{11/12-\varepsilon}$ and the fixed-shift $O_h(1)$ is $o(C(h)x/L^2)$, because $C(h)\ge C(2)>0$. The product main term has no other loss: [F1, F2, F3, F4, F7, step 3.1, step 7.1, step 8.1, step 9.1, step 10.1, algebra]
$$\Omega_{\rm sw}(h,x)\le\left(\frac{8J}{1-4\varepsilon}+o(1)\right)C(h)\frac{x}{L^2}.$$
For the varying Goldbach shift, every $o(1)$ was uniform by step7.1 and the absolute error estimates just proved. For a fixed nonzero even shift its threshold may depend on that shift, exactly as allowed in the Statement. All sieve cutoffs, saving exponents and numerical constants were fixed before $x$ tends to infinity. [F1, F2, F3, F4, F7, step 3.1, step 7.1, step 8.1, step 9.1, step 10.1, algebra]

12.1 The strict rational bound in step5.1 and the fixed choice $\varepsilon=10^{-8}$ give [F7, step 5.1, step 11.1, algebra]
$$\frac{8J}{1-4\varepsilon}<\frac{98199200}{24999999}<\frac{491}{125}=3.928<3.94033.$$
The middle inequality follows by multiplication of positive integers. The strict gap absorbs the $o(1)$ in step11.1 for all sufficiently large $x$. Hence the fixed-shift branch has the original stronger bound $3.928C(h)x/(\log x)^2$, and the Goldbach branch in particular has the displayed bound $3.94033C(h)x/(\log x)^2$. The original ordering, factor ranges, absolute-value convention and repeated-factor cases have not been changed. This completes every assertion of the original Statement. [F7, step 5.1, step 11.1, algebra] ∎

## Source and reconstruction limits

Liu's full seven-page text, Theorem2 and SectionsII–IV, was read. Its referenced Pan distribution and Selberg inputs are not imported: the exact local suppliers named above prove them at the actual coefficient and local-density scopes. Halberstam's Section3, printed pp285–287, gives the sharper integral coefficient0.490996 and the bound3.928; that numerical integral is proved here by the explicit rational enclosure, with no claim to re-audit his separate large-sieve proof. The older qualified SW/BV route is historical and unused. The present complete argument uses the new unqualified constrained-convolution distribution, arbitrary-density finite Selberg weights and the uniform squarefree logarithmic sum; all three interfaces have their exact hypotheses checked above.
