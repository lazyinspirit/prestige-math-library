---
id: thm-chen-weighted-sifted-lower-bound
kind: theorem
title: "Lower bound for Chen's weighted rough-prime sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-chen-kuehn-weighted-sifted-sum
  - lem-chen-singular-series-specialization
  - lem-finite-buchstab-refinements-for-prime-translate-sieves
  - lem-dickman-method-of-steps-existence-uniqueness-and-positivity
  - lem-dickman-entire-laplace-transform
  - thm-composite-trapezoidal-rule-error-bound
  - thm-choice-free-siegel-walfisz-from-mobius-cancellation
  - thm-logarithm-slower-than-every-positive-power
  - def-prime
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jing-run Chen, On the representation of a large even integer as the sum of a prime and the product of at most two primes, Lemma 9"
      url: "https://raw.githubusercontent.com/lixiang90/chen_theorem/main/pdf/main_en.pdf"
    - title: "Heini Halberstam, A proof of Chen's theorem, Section 2"
      url: "https://www.numdam.org/item/AST_1975__24-25__281_0.pdf"
proof_strategy: direct
axiom_use: Six specified finite Buchstab refinements, explicitly enclosed integer arithmetic and actual unqualified prime distribution; no choice hypothesis or external computation input.
---

## Statement

For the Goldbach specialization, let $N$ be a sufficiently large even integer
and set $h=-N$, $x=N$. For the fixed-shift specialization, let $h$ be any
fixed nonzero even integer and let $x$ be sufficiently large. In both cases,
specialize Chen's weighted sifted sum to $u=3$, $v=10$, and $\lambda=2$.
In the Goldbach branch,

$$W_{-N}(N;3,10,2)\ge 2.6408\,C(N)\frac{N}{(\log N)^2},$$

and for each fixed nonzero even $h$ and all sufficiently large $x$,

$$W_h^{\le x}(x;3,10,2)\ge 2.6408\,C(h)\frac{x}{(\log x)^2}-O_h(1).$$

where

$$C(h)=\prod_{\substack{q\mid h\\q>2}}\frac{q-1}{q-2} \prod_{q>2}\left(1-\frac1{(q-1)^2}\right).$$

For $h=-N$ the translate is $|p+h|=N-p$. In either specialization,
$W_h^{\le x}(x;3,10,2)$ sums over primes $p\le x$ with
$0<|p+h|\le x$ and no
eligible prime divisor below $x^{1/10}$; it subtracts one half for each
distinct eligible prime divisor in $(x^{1/10},x^{1/3}]$.

## Statement references

[[def-chen-kuehn-weighted-sifted-sum]]

[[lem-finite-buchstab-refinements-for-prime-translate-sieves]]

Chen, Lemma9; Halberstam, Section2. The strict numerical bound below uses six specified refinements, not an imported optimal linear-sieve limit.

## Facts & Assumptions

**Given:** Exactly the two branches and the fixed parameters $u=3,v=10,\lambda=2$ in the Statement. Put $L=\log x$.

[F1] [[lem-finite-buchstab-refinements-for-prime-translate-sieves]] supplies its explicitly defined finite envelopes $F_j,f_j$, Selberg–Dickman base $F_0(s)=c/E(s/2)$, $c=e^\gamma$, uniform prime-translate bounds with actual remainder weights, the unqualified all-saving divisor-weight remainder estimate at every fixed level $\alpha<1/2$, and $V_h(z)=2C(h)/(c\log z)(1+o(1))$.

[F2] [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]] gives the positive continuous Dickman function, its delay equation and integral identity. [[lem-dickman-entire-laplace-transform]] gives $c=\int_0^\infty\rho=e^\gamma$ with absolute convergence.

[F3] [[def-chen-kuehn-weighted-sifted-sum]] gives the exact finite distinct-prime Kuhn weight and its translated/truncated sums. [[lem-chen-singular-series-specialization]] gives $C(h)>0$ by the literal Euler product, so $C(h)\ge C(2)>0$ for every nonzero even $h$.

[F4] [[thm-composite-trapezoidal-rule-error-bound]] gives, on a single $C^2$ panel of width $h$, the exact proper-Riemann error bound $h^3\sup|g''|/12$, with one-sided endpoint derivatives.

[F5] [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]] at modulus one supplies unqualified prime-number asymptotics with every fixed logarithmic saving. Prime powers are included with their actual Mangoldt weights.

[F6] [[def-prime]] gives positive integer prime variables. [[thm-logarithm-slower-than-every-positive-power]] absorbs every fixed logarithmic loss into any fixed positive power.

## Proof

1.1 Write $z=x^{1/10}$ and $y=x^{1/3}$. For the Definition's half-open endpoint convention the exact finite identity is [F1, F3, given, algebra]
$$W_h(x;3,10,2)=S_h(1,z)-\frac12\sum_{\substack{z\le p<y\\p\nmid h}}S_h(p,z).$$
Each translate contributes once to the first sum and once for each DISTINCT eligible prime divisor in the second, irrespective of multiplicity in its prime factorization. The alternative endpoint convention stated in the theorem differs at most at the two primes equal to $z$ or $y$. Each such divisibility condition selects at most $x/p+1\ll x^{9/10}+1$ primes, so its total difference is $O(x^{9/10})$. It suffices to prove the strict bound for the exact half-open identity; this error will be absorbed. [F1, F3, F6, given, algebra]

2.1 We first certify a sufficient finite-envelope inequality, without using any optimal-limit sieve theorem. The delay identity in [F2] gives $\rho(u)\le1/\lfloor u\rfloor!$, so $\int_v^\infty\rho\le2/\lfloor v\rfloor!$ for $v\ge2$. The functions in [F1] satisfy $1\le F_j\le F_0$, $0\le f_j\le1$, $f_j\ge f_1$ for $j\ge1$, and are respectively nonincreasing and nondecreasing: differentiate their integral candidates and use finite minima/maxima. The same factorial tail gives [F1, F2, step 1.1, algebra]
$$\int_{40}^\infty(F_j(t-1)-1)\,dt\le8/19!,\qquad \int_{40}^\infty(1-f_j(t-1))\,dt\le32/19!\quad(j\ge1).$$
For the second inequality use $1-f_1(u)\le8/[u\lfloor(u-1)/2\rfloor!]$ and split the remaining integral into length-two intervals. These are upper bounds, not discarded tails. On each interval between consecutive integers, differentiating the delay equation gives $|\rho''(u)|\le3$ for $u>0$. For $g(u)=\rho(u-1)/u$, $u>1$, one has $|g''(u)|\le4$. On $(1,2)$ this is $g(u)=1/u$; above two use $|\rho|\le1$, $|\rho'|\le1$, $|\rho''|\le3$ in $g''=\rho''(u-1)/u-2\rho'(u-1)/u^2+2\rho(u-1)/u^3$. The one-sided formulas at integer endpoints suffice, since every panel below is aligned with integers. [F1, F2, step 1.1, algebra]

3.1 Here are the entire rational enclosure rules. Use integer scale $S=10^{18}$, mesh parameter $N=1500$, endpoint $T=40$, and $D=2N$ for the Dickman grid. This code-local $D$ denotes only grid resolution; the arithmetic sieve level used later is $x^\alpha$. Arrays $a_i,b_i$ enclose $S\rho(i/D)$, initially both $S$ for $i\le D$. A single trapezoid for the integral of $g$ in step2.1 has scaled error at most $S/(3D^3)$; rounding every lower quantity down and every upper quantity up gives the recurrence in the code below. The subsequent integral arrays enclose $S E(i/D)$ with panel error at most $S/(4D^3)$ by [F4]. Thus $c_-=E^-_{20D}$ and $c_+=E^+_{20D}+\lceil2S/20!\rceil$ enclose $Sc$. The initial envelope at $s=i/N$ is enclosed by $S c_-/E^+_i$ and $S c_+/E^-_i$, with outward integer rounding. All denominators are positive for $i\ge N$. For each refinement, decreasing integrands permit left-endpoint upper sums and right-endpoint lower sums on $[s,40]$; add the exact outward tail bounds of step2.1. Clipping, maxima and minima preserve inclusion. This proves inductively that the arrays in the code enclose the EXACT functions in [F1], rather than numerical ODE approximations. [F1, F2, F4, step 2.1, construct, algebra]

4.1 The following complete integer certificate is part of the proof. Every division is explicitly rounded outward, and all factorials are finite integer products. It is also the deterministic replay input: extracting this block from this source and executing it recomputes the entire ledger, with no stored function values or external numerical oracle. [F1, F2, F4, step 3.1, construct, algebra]
```python
# Complete finite integer certificate; all analytic enclosure rules are derived in this proof.
from math import factorial
N=1500
assert N%3==0
T=40;S=10**18;U=T*N;D=2*N
ceildiv=lambda a,b:-(-a//b)
rl=[S]*(U+1);rh=[S]*(U+1)
err=ceildiv(S,3*D**3)
for i in range(D+1,U+1):
 den=2*i*(i-1)
 upper=ceildiv(i*rh[i-D-1]+(i-1)*rh[i-D],den)+err
 lower=(i*rl[i-D-1]+(i-1)*rl[i-D])//den-err
 rl[i]=max(0,rl[i-1]-upper)
 rh[i]=min(S,rh[i-1]-max(0,lower))
el=[0]*(U+1);eh=[0]*(U+1)
errE=ceildiv(S,4*D**3)
for i in range(1,U+1):
 el[i]=el[i-1]+max(0,(rl[i-1]+rl[i])//(2*D)-errE)
 eh[i]=eh[i-1]+ceildiv(rh[i-1]+rh[i],2*D)+errE
cl=el[-1];ch=eh[-1]+ceildiv(2*S,factorial(T//2))
fl=[0]*(U+1);fh=[0]*(U+1)
for i in range(N,U+1):
 fl[i]=S*cl//eh[i]
 fh[i]=ceildiv(S*ch,el[i])
del rl,rh,el,eh
flo=[0]*(U+1);fhi=[0]*(U+1);ledger=[]
for j in range(1,7):
 il=0;ih=ceildiv(8*S,factorial((T-1)//2))
 # Lower function at s=i/N; integrand is F(t-1)-1. F decreasing.
 for i in range(U,2*N,-1):
  if i<U:
   ih+=ceildiv(max(0,fh[i-N]-S),N)
   il+=max(0,fl[i+1-N]-S)//N
  flo[i]=max(flo[i],0,S-ceildiv(N*ih,i))
  fhi[i]=max(fhi[i],0,S-(N*il//i))
 jl=0;jh=ceildiv(32*S,factorial((T-2)//2))
 # Upper function; integrate 1-f(t-1), with f=0 below2.
 newfl=fl[:];newfh=fh[:]
 for i in range(U,N-1,-1):
  if i<U:
   li=flo[i-N] if i-N>2*N else 0
   ri=fhi[i+1-N] if i+1-N>2*N else 0
   jh+=ceildiv(S-li,N);jl+=(S-ri)//N
  newfl[i]=min(fl[i],S+N*jl//i)
  newfh[i]=min(fh[i],S+ceildiv(N*jh,i))
 fl,fh=newfl,newfh
 integ=sum(ceildiv(fh[i],5*N-i-1) for i in range(5*N//3,4*N))
 excess=20*(2*flo[5*N]-integ)*1250-2*ch*3301
 ledger.append((flo[5*N],fh[3*N],integ))
assert (cl,ch)==(1781071103403841018,1781079424764325978)
assert ledger==[(980429026959176834, 1253102916187281410, 1568808882204678011), (993447239893934964, 1214641565289468738, 1544825020033722818), (996743131404976951, 1198948428758513713, 1533491081814433438), (997721583961201007, 1192430444109537818, 1528427757303245044), (998044054703937943, 1189698214836385502, 1526218274812174984), (998159846234876531, 1188545830365015108, 1525264566863007455)]
strict=20*(2*flo[5*N]-integ)*1000-2*ch*2644
assert strict==2754513981156368336 and strict>0
assert S<cl<=ch<2*S
```
Here $a_i,b_i$ use the trapezoid with the two already enclosed delayed endpoints and the stated $S/(3D^3)$ allowance; its enclosing directions follow from subtracting the integral in the Dickman recurrence. The integral arrays use $S/(4D^3)$ as derived in step3.1. At $s=i/N$, the lower candidate divides its integral upper bound by $s$, and the upper candidate divides its integral lower bound by $s$; the upper-envelope update reverses these choices as its sign requires. The final integral is
$$I=\int_{5/3}^{4}\frac{F_6(r)}{5-r}\,dr=\int_{1/10}^{1/3}\frac{F_6(5-10t)}t\,dt.$$
On a grid panel its integrand is at most $F_6(i/N)/(5-(i+1)/N)$, since $F_6$ decreases and the reciprocal denominator increases. The code's positive integer sum therefore bounds $SI$ from above; no assumption of monotonicity of the PRODUCT integrand is needed. The six complete output rows, in order $(S f_j(5)\text{ lower},S F_j(3)\text{ upper},S I_j\text{ upper})$, are exactly the six tuples checked in the block. They imply [F1, F2, F4, step 3.1, construct, algebra]
$$c<2,\qquad \frac{20}{c}\left(f_6(5)-\frac12 I\right)>\frac{2644}{1000}.$$
The final strict scaled excess is $2754513981156368336>0$. Thus this is an explicit finite rational proof, independent of the four authorized external computations. [F1, F2, F4, step 3.1, construct, algebra]

5.1 Fix $\eta=10^{-8}$ and $\alpha=1/2-\eta$. We need the sieve level slightly inside $1/2$, not at its endpoint. The preceding exact bound $1<c<2$ and $E(s/2)\ge1/2$ for $s\ge1$ give $F_0(s)\le4$ there. Its derivative has modulus at most four. The same Lipschitz bound passes to every upper refinement by an elementary finite-difference argument. If the new candidate $H(s)=1+J(s)/s$ is selected at $s_2>s_1\ge1$, then $H(s_2)\le F_0(s_2)\le4$ and $0\le J(s_1)-J(s_2)\le s_2-s_1$; hence $H(s_1)-H(s_2)\le H(s_2)(s_2-s_1)/s_1\le4(s_2-s_1)$. If the old envelope is selected at $s_2$, use its inductive bound instead. Taking the minimum at $s_1$ can only decrease the difference. This proves the bound four for $F_6$ without assuming that an unselected candidate is bounded by the envelope. On $4\le s\le5$ a POSITIVE lower candidate has derivative at most $F_{j-1}(s-1)/s\le1$; clipping and finite maxima preserve a bound of five, which is more than sufficient. Hence [F1, F2, step 4.1, algebra]
$$f_6(5-10\eta)\ge f_6(5)-50\eta,\qquad \int_{1/10}^{1/3}\frac{F_6(5-10\eta-10t)}t\,dt\le I+80\eta.$$
We used $\int_{1/10}^{1/3}dt/t=\log(10/3)<2$. Since $20/c<20$, step4.1 yields the strict rational margin [F1, F2, step 4.1, algebra]
$$\frac{20}{c}\left(f_6(5-10\eta)-\frac12\int_{1/10}^{1/3}\frac{F_6(5-10\eta-10t)}t\,dt\right)>\frac{2644}{1000}-1800\eta=\frac{1321991}{500000}>\frac{3301}{1250}=2.6408.$$
Only a fixed finite depth and a fixed interior level have been selected. [F1, F2, step 4.1, algebra]

6.1 Apply [F1] with this $\alpha$, $\beta=1/10$, and $j=6$ to the first term of step1.1. It has $q=1$, $s=5-10\eta$. For each prime $p$ in the subtracted sum use its UPPER bound with $q=p$ and the same cutoff $z$. These are precisely the permitted rough fixed factors, and [F1, F3, step 1.1, step 5.1, algebra]
$$s_p=5-10\eta-10\log p/L\in[5/3-10\eta,4-10\eta].$$
This is a fixed compact subset of $(0,\infty)$; the lower bound is applied only at $s>2$. The error for $q=1$ has the given divisor weight, and the sum of the errors over $q=p$ is at most one more divisor power: each combined modulus $d$ has at most $\tau(d)$ possible designated prime divisors. Thus all these remainders are $O_A(xL^{-A})$ for arbitrary fixed $A$ by [F1]. There is no endpoint maximum and no variable choice of a logarithmic saving after taking a limit. [F1, F3, step 1.1, step 5.1, algebra]

7.1 Finite partial summation of the modulus-one estimate [F5] gives $\sum_{x^a<p\le x^b}1/p=\log(b/a)+o(1)$ uniformly on the fixed interval $1/10\le a\le b\le1/3$. Replacing $1/p$ by $1/(p-1)$ costs $O(x^{-1/10})$; removing primes dividing $h$ costs $O(x^{-1/10})$ uniformly for $|h|\le x$, since there are at most ten of them in this range. The decreasing bounded function $F_6$ is Riemann integrable and has bounded variation, so another finite partial summation gives [F1, F5, step 6.1, algebra]
$$\sum_{\substack{z\le p<y\\p\nmid h}}\frac{F_6(s_p)}{p-1}=\int_{1/10}^{1/3}\frac{F_6(5-10\eta-10t)}t\,dt+o(1).$$
The uniform $o(1)$ from [F1] can also be summed here, because $\sum_{z\le p<y}1/(p-1)=O(1)$. Since $X=\operatorname{li}(x)=(1+o(1))x/L$, and $V_h(z)=(20C(h)/(cL))(1+o(1))$ uniformly, steps1.1 and6.1 imply [F1, F5, step 6.1, algebra]
$$W_h(x;3,10,2)\ge\frac{20C(h)x}{cL^2}\left(f_6(5-10\eta)-\frac12\int_{1/10}^{1/3}\frac{F_6(5-10\eta-10t)}t\,dt-o(1)\right).$$
Take any fixed $A>4$ for the absolute remainder; $C(h)\ge C(2)>0$ absorbs it. The strict margin in step5.1 therefore proves a lower bound STRICTLY larger than $2.6408C(h)x/L^2$ for all sufficiently large $x$, uniformly even for $h=-x$ with even $x$. [F1, F3, F5, step 6.1, algebra]

8.1 In the Goldbach branch, $h=-N$, $x=N$, every nonzero translate with prime $p\le N$ has $|p-N|=N-p\le N$; for large even $N$, the excluded equality $p=N$ cannot be prime. Thus the first original claim follows directly. For fixed $h>0$, the only terms removed on passing from $W_h$ to $W_h^{\le x}$ have $x-h<p\le x$, at most $h$ integers. For $x\ge\max(h,1024)$ each translate is at most $2x$ and has at most eleven distinct prime divisors at least $x^{1/10}$; its weight has absolute value at most six. The removal costs at most $6h=O_h(1)$. For fixed $h<0$, all nonzero translates already have absolute value at most $x$ when $x\ge|h|$, so no term is lost. Finally step1.1's possible endpoint differences cost $O(x^{9/10})$, which the STRICT asymptotic margin absorbs as well. This proves both original numerical inequalities and every endpoint/roughness convention stated with them, without assuming an optimal linear-sieve theorem or altering the public hypotheses. The full optimal Kuhn bracket with its specified logarithmic error remains a separate theorem. [F1, F3, F6, step 1.1, step 5.1, step 7.1, algebra] ∎

## Reconstruction and source limits

The finite Selberg/Buchstab mechanism is reconstructed in the actual local supplier. Richert's Chapter11 leaves convergence to the optimal functions to a further argument; that omitted result is not assumed here. Six explicitly specified refinements already give the strict margin needed for the original Chen constant. The deterministic integer certificate has no external data or floating-point premise. Its entire input, recurrences, outward error bounds and six checked output rows are written in this proof and replayed directly from it. Earlier qualified SW/BV references are historical; the active route uses the literal unqualified distribution ledger. No statement or proof of any previously accepted packet is changed.
