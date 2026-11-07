---
id: thm-linear-sieve-fundamental-lemma
kind: theorem
title: "Fundamental lemma of sieve theory under dimension and level hypotheses"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-linear-sieve-level-of-distribution
  - def-number-theoretic-mobius-function
  - def-real-exponential-function-and-e
  - lem-exponential-factorial-tail-bound
  - thm-exponential-addition-formula
justified_by: []
proof_strategy: direct
axiom_use: Finite stopped weights, finite arithmetic and real exponential series; no choice hypothesis.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dimitris Koukoulopoulos, The Distribution of Prime Numbers, Theorems 18.11 and 19.1"
      url: "https://dms.umontreal.ca/~koukoulo/documents/publications/primes.pdf"
    - title: "H.-E. Richert, Lectures on Sieve Methods, Chapter 11 (full-text copy hosted by the University of Toledo)"
      url: "https://www.math.utoledo.edu/~codenth/Spring_13/3200/NT-books/Lectures_on_Sieve_Methods-Richert.pdf"
---

## Statement

Let $x\ge3$, let $\mathcal P$ be a finite nonempty set of primes, put
$y=\max\mathcal P$, and let $a_n\ge0$ be supported on $1\le n\le x$. For
each squarefree $d\mid\prod_{p\in\mathcal P}p$, let
$A_d=X\nu(d)/d+r_d$, where $X>1$, $\nu$ is multiplicative,
$0\le\nu(p)<p$, and define

$$S(\mathcal A,\mathcal P):=\sum_{\substack{n\le x\\(n,\prod_{p\in\mathcal P}p)=1}}a_n, \qquad V(\mathcal P):=\prod_{p\in\mathcal P}\left(1-\frac{\nu(p)}p\right).$$

Assume the local-product bound of dimension $\kappa>0$ and constant $C\ge1$:

$$\prod_{p\in\mathcal P\cap(w,z]}\left(1-\frac{\nu(p)}p\right)^{-1} \le\left(1+\frac C{\log w}\right) \left(\frac{\log z}{\log w}\right)^\kappa \quad(3/2\le w\le z\le y).$$

Let $D=y^u$ with $u\ge1$. Then

$$S(\mathcal A,\mathcal P)=X V(\mathcal P) +O_{\kappa,C}\!\left(u^{-u/2}X V(\mathcal P) +\sum_{\substack{d\mid\prod_{p\in\mathcal P}p\\d\le D}}|r_d|\right).$$

Moreover, put

$$u_\kappa:=1+\frac{2}{e^{0.53/\kappa}-1}.$$

If $u\ge u_\kappa$, if
$\sum_{d\mid\prod_{p\in\mathcal P}p,\ d\le D}|r_d|
\le X/(\log X)^{\kappa+1}$, and if $\log X\ge c\log y$ for some fixed
$c>0$, then, for sufficiently large $X$ and $D$ in terms of $\kappa,C,c$,

$$\frac{X}{100}V(\mathcal P)\le S(\mathcal A,\mathcal P) \le5X V(\mathcal P).$$

## Statement references

[[def-linear-sieve-level-of-distribution|Level and density hypotheses]]

[[thm-brun-combinatorial-sieve-inequalities|Finite inclusion–exclusion and Brun bounds]]

Koukoulopoulos, *The Distribution of Prime Numbers*, Chapters 18–19, Theorems 18.11 and 19.1

Richert, *Lectures on Sieve Methods*, Chapter 11, Theorems 11.11–11.13

## Facts & Assumptions

**Given:** The data in the Statement. Write $g(d)=\nu(d)/d$, $P=\prod_{p\in\mathcal P}p$, $V=\prod_{p\in\mathcal P}(1-g(p))$, and $R=\sum_{d\mid P,d\le D}|r_d|$. In particular $A_d=\sum_{d\mid n}a_n$ as in [F1]. All products and sieve sums below are finite.

[F1] [[def-linear-sieve-level-of-distribution]] supplies the local-density and remainder notation, with its corrected source endpoint convention $(w,z]$.

[F2] [[def-number-theoretic-mobius-function]] gives $\mu(d)=(-1)^{\omega(d)}$ for squarefree $d$ and $\mu(1)=1$.

[F3] [[def-real-exponential-function-and-e]] defines the real exponential by $\sum_{j\ge0}t^j/j!$. [[lem-exponential-factorial-tail-bound]] bounds its tail after $N$ by $2|t|^{N+1}/(N+1)!$ when $N+2\ge2|t|$.

[F4] [[thm-exponential-addition-formula]] gives $\exp(s+t)=\exp(s)\exp(t)$. Positivity follows from [F3] for nonnegative arguments and from $\exp(t)\exp(-t)=1$ otherwise. In particular $e^n\ge n^n/n!$ by the $n$th nonnegative series term, so $n!\ge(n/e)^n$ for every positive integer $n$.

## Proof

1.1 We first construct the needed finite weights. The construction is valid also for an empty subset of primes below an auxiliary upper bound $y$. For a strictly decreasing list $p_1>\cdots>p_r$ from $\mathcal P$, put $d=p_1\cdots p_r$. Let $(Y_j)_{j\ge1}$ be a nonincreasing sequence in $[2,y]$. Define $\mathcal D^+$ by requiring $p_j\le Y_j$ at every ODD index $j\le r$, and $\mathcal D^-$ by the same requirement at every EVEN index. The empty list is admitted. Put $\lambda^\pm(d)=\mu(d)1_{d\in\mathcal D^\pm}$ and set the weights to zero off the squarefree divisors of $P$. Thus $\lambda^\pm(1)=1$ and $|\lambda^\pm|\le1$. The pointwise bounds are [F2, given, construct]
$$\sum_{d\mid n}\lambda^-(d)\ \le\ 1_{(n,P)=1}\ \le\ \sum_{d\mid n}\lambda^+(d).$$
To verify them without any restriction on $g$, expand the finite identity $1_{(n,P)=1}=\sum_{d\mid(n,P)}\mu(d)$. Partition omitted lists by the FIRST restricted index $j$ for which $p_j>Y_j$. For its prefix $p_1,\ldots,p_j$, the unrestricted remaining suffix is any subset of $\{q\in\mathcal P:q<p_j,\ q\mid n\}$, so its alternating sum is either0 or1. Each omitted prefix therefore contributes a nonpositive term when $j$ is odd and a nonnegative term when $j$ is even. Subtracting these omitted contributions proves both bounds, including $n=1$ and empty sets. [F2, given, algebra]

2.1 The same first-failure partition, now weighted by $g(d)$, gives EXACTLY [F2, step 1.1, algebra]
$$\sum_d\lambda^+(d)g(d)=V+\sum_{j\text{ odd}}E_j,\qquad \sum_d\lambda^-(d)g(d)=V-\sum_{j\text{ even}}E_j,$$
where $E_j$ sums $g(p_1)\cdots g(p_j)V_{<p_j}$ over the strictly decreasing prefixes with $p_j>Y_j$ and every earlier restricted index passing its cutoff, and $V_{<t}=\prod_{p\in\mathcal P,p<t}(1-g(p))$. The suffix contributes precisely $V_{<p_j}$ by multiplying out its finite Euler product. Every $E_j\ge0$; there is no multiplicity, no omitted largest prime, and only finitely many nonzero terms. [F2, step 1.1, algebra]

3.1 Here are choices that ensure level support. Set $a=53001/100000$ and $b=26501/50000$. Put [given, algebra, construct, step 2.1]
$$\delta_\kappa=\frac2{e^{0.53/\kappa}-1}-\frac2{e^{a/\kappa}-1}>0,\qquad 0<\eta\le\min\{10^{-5},\kappa/10,\delta_\kappa/2\}.$$
Fix a sufficiently large $u_*=u_*(\kappa,\eta)$, at least $100$ and $(15\max\{\kappa,1\})^{20}$. For $u_\kappa\le u\le u_*$ take $J=0$, $\alpha=e^{-a/\kappa}$; for $u>u_*$ take $J=\lfloor29u/100\rfloor$, $\alpha=e^{-5/u}$. In the latter range put $\beta=5\kappa/u$; in the former put $\beta=a$. Increase $u_*$ so that in the latter range $\beta\le1/6$. Choose $y_*=y_*(\kappa,C,\eta)$ large enough that, for $y\ge y_*$, $w=\eta\log y/4$ satisfies $2\le w<y$ and $\log(1+C/\log w)\le\eta$. Define [given, algebra, construct]
$$T_j=y\quad(j\le J),\qquad T_j=\max\{w,y^{\alpha^{j-J}}\}\quad(j>J),\qquad Y_{2j-1}=Y_{2j}=T_j.$$
These are finite-data explicit choices; the infinitely written cutoff sequence is only used up to $|\mathcal P|$. [given, algebra, construct]

4.1 An elementary bound suffices for small primes: $\prod_{p\le t}p\le8^{\lfloor t\rfloor}$ for $t\ge2$. Indeed, by induction, primes in $(m,2m]$ divide $\binom{2m}m\le2^{2m}$, while primes in $(m+1,2m+1]$ divide $\binom{2m+1}m\le2^{2m+1}$. Applying the induction hypothesis to the smaller cutoff proves the bound at $2m$; at $2m+1$ use $8^{m+1}2^{2m+1}\le8^{2m+1}$ for $m\ge1$. The initial cases are immediate. Consequently the product of primes $\le w$ is at most $e^{3w}<y^\eta$. If $d\in\mathcal D^-$, its primes above $w$ have their first $2J+1$ logarithms at most $\log y$ and each subsequent pair at most $\alpha^{j-J}\log y$. Hence [step 1.1, step 3.1, algebra]
$$\frac{\log d}{\log y}\le\eta+2J+1+2\sum_{j>J}\alpha^{j-J}=\eta+2J+1+\frac2{\alpha^{-1}-1}.$$
For $\mathcal D^+$ the same bound holds with $2J$ instead of $2J+1$. In the bounded-$u$ range the displayed expression is at most $\eta+1+2/(e^{a/\kappa}-1)<u_\kappa\le u$. In the large-$u$ range, $e^{5/u}-1\ge5/u$ and $2J\le0.58u$, so it is at most $\eta+0.98u+1\le u$. Thus both weights are supported on $d\le y^u=D$. The floor and the coefficient $0.29$ are deliberate: replacing this by $\lceil0.3u\rceil$ does not give a valid uniform support estimate. [F3, step 3.1, algebra]

5.1 For a failed index $m=2j-h$, $h\in\{0,1\}$, necessarily $j>J$. Put $\ell=j-J$. Since $T_j\ge w$ and $\log T_j\ge\alpha^\ell\log y$, the corrected product hypothesis gives [given, step 3.1, algebra, step 4.1]
$$\frac{V_{\le T_j}}V=\prod_{p\in\mathcal P\cap(T_j,y]}(1-g(p))^{-1}\le e^{\beta\ell+\eta},\qquad \sum_{p\in\mathcal P\cap(T_j,y]}g(p)\le\beta\ell+\eta,$$
where $V_{\le t}=\prod_{p\le t,p\in\mathcal P}(1-g(p))$. The second inequality follows from $g(p)\le-\log(1-g(p))$; this elementary inequality follows, for $0\le v<1$, by summing $-\log(1-v)=\sum_{r\ge1}v^r/r\ge v$, or equivalently by integrating $1/(1-v)\ge1$. In the first-failure sum $p_m>T_j$, hence $V_{<p_m}\le V_{\le T_j}$. Discarding the earlier-prefix restrictions only increases this nonnegative sum. Ordering the distinct $m$ primes and then dropping distinctness gives [step 2.1, step 3.1, algebra]
$$0\le\frac{E_{2j-h}}V\le\frac{e^{\beta\ell+\eta}(\beta\ell+\eta)^{2J+2\ell-h}}{(2J+2\ell-h)!}.$$
This proves the full finite-error estimate directly, with the endpoint convention used at precisely the indicated interval. [given, step 2.1, step 3.1, algebra]

6.1 For uniform explicit positivity, $\beta\ell+\eta\le b\ell$ in both parameter ranges after the stated choices. Increasing $J$ decreases $(b\ell)^{2J+2\ell-h}/(2J+2\ell-h)!$, since each next denominator factor is larger than $b\ell$. Thus the total errors divided by $V$ are at most [step 5.1, algebra]
$$\mathcal E_h:=\sum_{\ell\ge1}\frac{e^{b\ell}(b\ell)^{2\ell-h}}{(2\ell-h)!}\quad(h=0,1).$$
These bounds are locally verified by the following explicit rational certificate, whose finite ledger is reproduced after the proof. Put $r=1699/1000$ and $t_{\ell,h}=r^\ell(b\ell)^{2\ell-h}/(2\ell-h)!$. The series and factorial-tail rule in [F3], at $(t,N)=(b,12),(2,16),(13/12,12)$ respectively, give $e^b<r$, $e^2<739/100$, and $e^{13/12}<3$: in each case sum through $N$ and add $2t^{N+1}/(N+1)!$, which is less than the stated rational upper bound. For $\ell\ge100$ the successive-term ratio for either $h$ is at most [F3, F4, step 5.1, algebra]
$$r b^2\frac{739}{100}\frac{(\ell+1)^2}{2\ell(2\ell+1)}\le r b^2\frac{739}{100}\frac{101^2}{200\cdot201}<\frac9{10}.$$
Indeed $(1+1/\ell)^{2\ell-h}\le e^2$ and the displayed rational factor decreases with $\ell$. The ledger bounds the first100 terms by upward multiples of $10^{-9}$, and the tails by $10t_{101,h}$. It gives $\mathcal E_0<986612390/10^9<987/1000$ and $\mathcal E_1<3722924982/10^9<39/10$. All comparisons are rational after clearing factorials, as specified by the ledger formulas; no external numerical result is used. Combining with step 2.1 proves [F3, F4, step 2.1, step 5.1, algebra]
$$\frac{13}{1000}V<\sum_d\lambda^-(d)g(d)\le V\le\sum_d\lambda^+(d)g(d)<\frac{49}{10}V.$$
The two parity main sums have the required uniform positive bounds. [F3, F4, step 2.1, step 5.1, algebra]

7.1 For the sharper asymptotic suppose $u>u_*$. Put $n=2J+2\ell-h$. Our choices imply $J\ge u/4$ and $\eta\le\beta(J-1/2)$, hence $\beta\ell+\eta\le\beta n/2$. By [F4] and $\beta\le1/6$, each term in step 5.1 is at most [F3, F4, step 3.1, step 5.1, algebra, step 6.1]
$$\left(\frac{e^{1+\beta/2}(\beta\ell+\eta)}n\right)^n\le\left(\frac{15\kappa}u\right)^n.$$
For $\ell\le\eta/\beta$, the inner ratio is at most $3\eta/J\le12\eta/u\le15\kappa/u$; otherwise it is at most $3\beta=15\kappa/u$, since $J\ge1$ and $n\ge2\ell$. Summing the geometric progression bounds either error by $(4/3)(15\kappa/u)^{2J}$. Write $K=15\max\{\kappa,1\}$; for $u\ge K^{20}$ one has $15\kappa/u\le u^{-19/20}$ and $2J\ge0.58u-2$. Thus this bound is at most $(4/3)u^{-0.551u+1.9}\le u^{-u/2}$ for $u\ge100$. For $u_\kappa\le u\le u_*$, the fixed bound from step 6.1 is $O_{\kappa,C}(u^{-u/2})$, since that positive function has a positive minimum on this fixed compact interval. We have obtained both the explicit positive bounds and the original asymptotic at the full level $D$, not a reduced level. [F3, F4, step 3.1, step 5.1, step 6.1, algebra]

8.1 The construction so far assumed $y\ge y_*$. If $y<y_*$ and $D\ge8^{\lceil y_*\rceil}$, use $\lambda^+=\lambda^-=\mu1_{d\mid P}$; step 4.1 puts every such divisor below $D$, so every main term is exactly $V$. Take a fixed $D_0=D_0(\kappa,C)$ larger than $8^{\lceil y_*\rceil}$ and $2^{u_\kappa}$. Hence for every $u\ge u_\kappa$ and $D\ge D_0$, we have weights with all the preceding properties, also when the prime subset is empty. Multiply their pointwise inequalities by $a_n\ge0$, sum over the finite support and substitute $A_d=Xg(d)+r_d$. Because $|\lambda^\pm|\le1$ and their supports lie below $D$, the two remainder errors have absolute value at most $R$. This proves the claimed asymptotic for $u\ge u_\kappa,D\ge D_0$. It also proves the bounds [F1, step 1.1, step 4.1, step 6.1, step 7.1, algebra]
$$\frac{13}{1000}XV-R\le S(\mathcal A,\mathcal P)\le\frac{49}{10}XV+R.$$
These bounds retain the unweighted summed-remainder budget exactly. [F1, step 1.1, step 4.1, step 6.1, step 7.1, algebra]

9.1 For $1\le u<u_\kappa$ and $D\ge D_0$, put $z=D^{1/u_\kappa}\le y$ and $\mathcal P_z=\mathcal P\cap[2,z]$. Apply the already constructed weights to this subset with upper bound $z$ and level $z^{u_\kappa}=D$. Nonnegativity gives $0\le S(\mathcal A,\mathcal P)\le S(\mathcal A,\mathcal P_z)\le4.9XV_z+R$. Since $z\ge2$ and the original endpoint hypothesis controls $(z,y]$, [given, step 8.1, algebra]
$$1\le V_z/V\le(1+C/\log z)(\log y/\log z)^\kappa\le(1+C/\log2)u_\kappa^\kappa.$$
Therefore $|S-XV|\ll_{\kappa,C}XV+R$. On the fixed interval $[1,u_\kappa]$ this is exactly the required $O_{\kappa,C}(u^{-u/2}XV+R)$. If $D<D_0$, then $y\le D_0$ and $u\le\log D_0/\log2$. The dimension condition at $(3/2,y]$ bounds $V$ below by a positive constant depending only on $\kappa,C,D_0$. Finally $0\le S\le A_1\le X+R$, and the same compact-interval argument proves the claimed asymptotic. This covers every $u\ge1$ and every allowed scale, including finite small cutoffs. [F1, step 8.1, algebra]

10.1 For the moreover assertion, the corrected dimension condition at $(3/2,y]$ gives [given, algebra, step 9.1]
$$V\ge\frac{(\log(3/2))^\kappa}{1+C/\log(3/2)}(\log y)^{-\kappa}.$$
Consequently $R/(XV)\ll_{\kappa,C}(\log y)^\kappa/(\log X)^{\kappa+1}\ll_{\kappa,C,c}1/\log X$. For sufficiently large $X$ this is at most $1/1000$. For sufficiently large $D$ step 8.1 applies at every $u\ge u_\kappa$, and yields $S\ge(12/1000)XV\ge XV/100$ and $S\le(4.9+.001)XV\le5XV$. Thus the explicit original $u_\kappa$, both numerical constants, and the full original $u^{-u/2}$ error are proved. [step 8.1, given, algebra] ∎

## Exact rational series ledger

Let $b=26501/50000$, $r=1699/1000$. Row $\ell$ lists the integers
$$c_{\ell,h}=\left\lceil10^9\frac{r^\ell(b\ell)^{2\ell-h}}{(2\ell-h)!}\right\rceil\quad(h=0,1).$$
Each row is verified by the finite integer inequality $(c_{\ell,h}-1)\operatorname{den}(Q)<\operatorname{num}(Q)\le c_{\ell,h}\operatorname{den}(Q)$ for the displayed rational $Q=10^9t_{\ell,h}$. Thus the table is an explicit list of rational upper bounds, not a floating evaluation.

```text
ell c_ell,0 c_ell,1
1 238642560 900503980
2 151867391 573062867
3 110085145 415399963
4 84347262 318279541
5 66654041 251515191
6 53721164 202713721
7 43894436 165633130
8 36227917 136703959
9 30131809 113700648
10 25214731 95146336
11 21204563 80014199
12 17905192 67564211
13 15171229 57247761
14 12892428 48648835
15 10983636 41446118
16 9378082 35387652
17 8022744 30273363
18 6875071 25942682
19 5900603 22265585
20 5071223 19135966
21 4363832 16466667
22 3759346 14185676
23 3241921 12233200
24 2798339 10559371
25 2417536 9122433
26 2090215 7887307
27 1808542 6824427
28 1565893 5908807
29 1356661 5119281
30 1176082 4437875
31 1020102 3849295
32 885268 3340505
33 768629 2900375
34 667663 2519386
35 580209 2189385
36 504416 1903383
37 438692 1655378
38 381670 1440210
39 332175 1253443
40 289193 1091253
41 251851 950345
42 219396 827877
43 191177 721395
44 166633 628779
45 145277 548193
46 126689 478054
47 110506 416987
48 96412 363802
49 84133 317470
50 73434 277096
51 64107 241905
52 55977 211223
53 48886 184467
54 42701 161129
55 37305 140767
56 32596 122999
57 28487 107491
58 24899 93952
59 21766 82131
60 19030 71808
61 16640 62790
62 14553 54913
63 12729 48030
64 11135 42015
65 9742 36758
66 8524 32162
67 7459 28144
68 6528 24631
69 5714 21559
70 5002 18872
71 4379 16521
72 3834 14465
73 3357 12666
74 2940 11092
75 2575 9714
76 2255 8508
77 1975 7453
78 1731 6529
79 1516 5720
80 1328 5011
81 1164 4391
82 1020 3848
83 894 3372
84 784 2955
85 687 2590
86 602 2271
87 528 1991
88 463 1745
89 406 1530
90 356 1341
91 312 1176
92 274 1032
93 240 905
94 211 793
95 185 696
96 162 610
97 142 535
98 125 470
99 110 412
100 96 362
```

The column sums are986611550 and3722921813. The upward bounds for $10^{10}t_{101,h}$ are840 and3169, respectively. Hence the first100terms plus geometric tails are at most986612390/$10^9$ and3722924982/$10^9$. The exact finite factorial/binomial expressions and simple integer signs are the proof; `check-series.py` and `series-ledger.json` in the research packet replay them locally. No external finite computation is assumed.

## Source notes and scope

The complete cached fundamental-lemma construction and deduction in Koukoulopoulos Chapters18–19 (Axiom2 printedp187, Theorem18.11p190, constructionpp192–199) was read. The native endpoint $[w,z)$ missed the largest prime; the source-valid $(w,z]$ is restored, with the authentic preimage and singleton counterexample retained in `research/number-theory-all-141-2026-10-25-escalations/fundamental-sieve135/`. No other Statement scope or error strength changes.

The source's large-$u$ support assertion with $J=\lceil3u/10\rceil$ does not follow from its displayed estimate. Step4.1 repairs the internal construction by $J=\lfloor29u/100\rfloor$, keeping the full original $u^{-u/2}$ conclusion. An elementary binomial primorial bound replaces the source's PNT invocation. The source's unexpanded numerical series check is replaced by the full rational ledger above. All finite parity-stopping and first-failure identities are derived in steps1.1–2.1 and5.1; the finite-weight coauthor's complete research derivation is recorded, not imported as a theorem. Neither Chen, weighted switching, large gaps nor any consumer's remaining specialized sieve argument is proved here.
