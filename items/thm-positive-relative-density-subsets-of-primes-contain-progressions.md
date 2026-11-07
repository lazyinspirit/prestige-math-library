---
id: thm-positive-relative-density-subsets-of-primes-contain-progressions
kind: theorem
title: "Every positive-relative-upper-density subset of the primes contains all fixed progression lengths"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - lem-positive-count-yields-nondegenerate-progression
  - lem-unwrap-w-tricked-progression-to-primes
  - thm-szemeredi-relative-to-a-pseudorandom-measure
  - thm-w-trick-all-residue-window-majorants
  - thm-choice-free-siegel-walfisz-from-mobius-cancellation
  - def-prime-progression-discrepancy
  - def-unit-group-modulo-n-and-euler-totient
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-prime-counting-chebyshev-partial-summation
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "Theorem 1.2, printed p. 482, and §11, printed pp. 540–541; §11 states the reduced-residue modification and leaves details to the reader"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "§10, ‘Szemerédi’s theorem in the primes’; extension stated, proof details not supplied there"
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics, MIT OpenCourseWare full lecture notes"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
      locator: "Chapter 9.1, Theorem 9.1.3, printed p. 285; high-level overview, analytic majorant proof omitted"
---
## Statement

Let $\mathbb P$ be the set of positive integers $q>1$ whose positive divisors are exactly $1$ and $q$, and for each integer $N\ge2$ let $\pi(N)=|\mathbb P\cap\{1,\ldots,N\}|$. For $A\subseteq\mathbb P$, define its relative upper density among the primes by

$$\overline d_{\mathbb P}(A)=\limsup_{N\to\infty}\frac{|A\cap\{1,\ldots,N\}|}{\pi(N)}.$$

If $\overline d_{\mathbb P}(A)>0$, then for every fixed integer $k\ge3$ there are infinitely many distinct pairs of positive integers $(a,d)$ with $d>0$ such that $a,a+d,\ldots,a+(k-1)d$ all belong to $A$.

## Statement references

[Green and Tao, Theorem 1.2 and §11](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, §10](https://arxiv.org/pdf/1403.2957)

[Zhao, Chapter 9.1, Theorem 9.1.3](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf)

## Facts & Assumptions

**Given:** A set $A\subseteq\mathbb P$ with positive relative upper density and a fixed integer $k\ge3$.

[F1] [[thm-szemeredi-relative-to-a-pseudorandom-measure]]: On the full prime-indexed sequence, a nonnegative function bounded by a $k$-pseudorandom measure and having mean at least a fixed $\eta>0$ has normalized $k$-term progression count at least $c(k,\eta)-o(1)>0$.

[F2] [[thm-w-trick-all-residue-window-majorants]]: Write $\epsilon=1/[2^k(k+4)!]$ and $c_k=1/(k2^{k+5})$. At $I_P=[\epsilon P,2\epsilon P]\cap\mathbb Z$, every prescribed nondecreasing cutoff $w(P)\to\infty$ with $w\log w=o(\log\log\log P)$, including plateaux, supplies the $k$-pseudorandom measures $\nu_{b,P}$ uniformly in all reduced representatives $1\le b<W=\prod_{p\le w}p$. They dominate $c_k\widetilde\Lambda_{b,W}\mathbf1_{I_P}$, where $\widetilde\Lambda_{b,W}(n)=(\varphi(W)/W)\log(Wn+b)\mathbf1_{\{Wn+b\text{ prime}\}}$. Under the full von Mangoldt discrepancy displayed in that supplier, their prime weights have mean $|I_P|/P+o(1)$ uniformly in $b$. Finitely many excluded prime indices can use measure1 and weight1. No choice axiom is required.

[F3] [[thm-choice-free-siegel-walfisz-from-mobius-cancellation]], [[def-prime-progression-discrepancy]]: For every fixed $D,B>0$ and every real $x\ge3$, $|E_\psi(x;q,a)|\le C_{D,B}x(\log x)^{-B}$ for all reduced $a\bmod q$ and $q\le(\log x)^D$. This is unqualified, includes $q=1$, and counts all prime powers with weight $\log p$. In particular it supplies exactly the additional discrepancy hypothesis of [F2].

[F4] [[lem-positive-count-yields-nondegenerate-progression]]: For fixed $0<\epsilon<1/(8k)$, functions supported on $I_P$, bounded by $C\log P$, and having positive limiting normalized progression count admit finite extraction of a nonzero-difference progression; its standard representatives form a nonconstant integer progression, in increasing or decreasing order.

[F5] [[lem-unwrap-w-tricked-progression-to-primes]]: For positive integer $W$, an increasing integer progression of indices whose values $Wn+b$ are primes unwraps to a prime progression with positive difference.

[F6] [[lem-prime-counting-chebyshev-partial-summation]]: For $x\ge2$, $\pi(x)=\vartheta(x)/\log x+\int_2^x\vartheta(t)/(t\log^2t)\,dt$, where $\vartheta(x)=\sum_{p\le x}\log p$.

[F7] [[def-unit-group-modulo-n-and-euler-totient]]: There are $\varphi(W)$ reduced representatives modulo $W$, and $1\le\varphi(W)\le W$.

[F8] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]: The natural logarithm is strictly increasing and $\log(xy)=\log x+\log y$ for positive $x,y$.

## Proof

1.1 Fix a rational $0<\delta<\overline d_{\mathbb P}(A)$; arbitrarily large integers $X$ satisfy $|A\cap[1,X]|\ge\delta\pi(X)$, and call these integers good. [given, F3, F6, F8, algebra]
By [F3] at $q=1$ and $B=4$, $\psi(x)=x+O(x/\log^4x)$. The total weight of powers $p^a\le x$ with $a\ge2$ is at most $O(\sqrt x\log^2x)$: there are at most $\sqrt x$ bases, at most $\log x/\log2$ exponents per base, and each weight is at most $\log x$. Thus $\vartheta(x)=x+o(x)$. In [F6] the integral is $O(x/\log^2x)$, by splitting at $\sqrt x$ and using $\vartheta(t)=O(t)$, so $\pi(x)\sim x/\log x$. Fix an integer $M$ with $2^{-M}<\delta/4$. For every sufficiently large good $X$, $\pi(X/2^M)<(\delta/2)\pi(X)$; hence at least $(\delta/2)\pi(X)$ elements of $A$ lie in $(X/2^M,X]$. Among its $M$ disjoint dyadic windows choose the least $m\in\{1,\ldots,M\}$ maximizing the count, and put $Y=X/2^m$. Since $\log X\le2\log Y$ eventually, this gives
$$|A\cap(Y,2Y]|\ge\frac{\delta X}{4M\log X}\ge \rho\,\frac Y{\log Y},\qquad \rho=\frac{\delta}{8M}>0.$$
Only a single rational and integer and finite least choices have been used. [given, F3, F6, F8, algebra]

2.1 For sufficiently large real $Y$ put $w(Y)=\max(2,\lfloor(\log\log\log Y)^{1/3}\rfloor)$, $W(Y)=\prod_{p\le w(Y)}p$, $Z(Y)=Y/(\epsilon W(Y))$, and let $P(Y)$ be the least prime at least $Z(Y)$. [F2, F3, F8, step 1.1, algebra]
Indeed $\log W\le w\log w=o(\log\log\log Y)$, so $W=(\log\log Y)^{o(1)}\le\log Y$ eventually and $\log Z\sim\log Y$. Subtracting the two $q=1$, $B=4$ estimates in [F3] shows that $(Z,Z+Z/\log^2 Z]$ has von Mangoldt mass $Z/\log^2Z+O(Z/\log^4Z)$. Removing $O(\sqrt Z\log^2 Z)$ higher-power weight leaves a positive prime weight. The least prime therefore exists and satisfies
$$Z\le P(Y)\le Z+Z/\log^2 Z,\qquad \epsilon W(Y)P(Y)=Y+O(Y/\log^2Y),\qquad \log P(Y)\sim\log Y.$$
All implied constants depend only on fixed $k$. [F2, F3, F8, step 1.1, algebra]

3.1 Define an increasing sequence of good integer cutoffs by least-integer recursion, taking $X_1$ to be the least good integer beyond the thresholds above and taking $X_j$ to be the least good integer satisfying $X_j\ge2^{M+1}X_{j-1}$ and $P(X_j/2^m)>P_{j-1}$ for every $1\le m\le M$. [given, F2, F8, step 1.1, step 2.1, algebra]
Here $m_j$ is the least maximizing window from step 1.1, $Y_j=X_j/2^{m_j}$, $w_j=w(Y_j)$, $W_j=W(Y_j)$, and $P_j=P(Y_j)$. The defining set is nonempty at each stage: good cutoffs are unbounded, and each of the finitely many functions $P(X/2^m)$ tends to infinity. Thus the recursion is uniquely defined in the natural numbers, with no countable or dependent choice. We have $Y_j\ge2Y_{j-1}$, $P_j>P_{j-1}$, and $w_j$ nondecreasing and tending to infinity. On prime indices $P_j\le P<P_{j+1}$ prescribe $w(P)=w_j$, and put $w(P)=2$ below $P_1$. Every prime has a unique such finite interval or is below $P_1$. At the left endpoints $\log\log\log P_j\sim\log\log\log Y_j$, so $w_j\log w_j=o(\log\log\log P_j)$. Between endpoints the denominator only increases. This proves exactly the plateau hypothesis of [F2], with $w(P_j)=w_j$. [given, F2, F8, step 1.1, step 2.1, algebra]

4.1 Set $I_j=[\epsilon P_j,2\epsilon P_j]\cap\mathbb Z$ and choose the least reduced $b_j\in\{1,\ldots,W_j-1\}$ maximizing [F2, F7, F8, step 1.1, step 2.1, step 3.1, algebra]
$$T_{j,b}=\sum_{\substack{n\in I_j\\W_jn+b\in A}}\log(W_jn+b).$$
[F2, F7, F8, step 1.1, step 2.1, step 3.1, algebra]
For each reduced $b$, the endpoints of the integer arguments $W_j I_j+b$ differ from $Y_j,2Y_j$ by $O(Y_j/\log^2Y_j+W_j)$. Every prime $p\in(Y_j,2Y_j]$ is larger than $w_j$ eventually, so its residue modulo $W_j$ is reduced. If it is farther than this error from both endpoints, its unique representation $p=W_jn+b$ has $n\in I_j$. Consequently at most $O(Y_j/\log^2Y_j+W_j)$ integers in the original window are lost in the union over all reduced classes. This is $o(Y_j/\log Y_j)$, and each remaining prime has logarithm at least $\frac12\log Y_j$. Step 1.1 and finite averaging over the $\varphi(W_j)$ classes give, eventually,
$$\sum_{(b,W_j)=1}T_{j,b}\ge\rho Y_j/4,\qquad T_{j,b_j}\ge\frac{\rho Y_j}{4\varphi(W_j)}.$$
Let
$$f_{P_j}(n)=c_k\frac{\varphi(W_j)}{W_j}\log(W_jn+b_j) \mathbf1_A(W_jn+b_j)\mathbf1_{I_j}(n).$$
Its normalized mean is at least $c_k\rho Y_j/(4W_jP_j)\ge c_k\rho\epsilon/8$ for large $j$, and its maximum is $O_k(\log P_j)$ because $\varphi(W_j)\le W_j$ and $\log(W_jP_j)\sim\log P_j$. [F2, F7, F8, step 1.1, step 2.1, step 3.1, algebra]

5.1 Complete this to a family on all sufficiently large prime indices: at a selected $P_j$ use $b(P_j)=b_j$ and the function above; at every other prime put $b(P)=1$ and $f_P=c_k\widetilde\Lambda_{1,W(P)}\mathbf1_{I_P}$. [F2, F3, step 3.1, step 4.1, algebra]
Take $\nu_P=\nu_{b(P),P}$ from [F2]. Its uniformity in reduced $b$ gives a single $k$-pseudorandom prime-indexed family, and $0\le f_P\le\nu_P$ pointwise. For nonselected primes, [F3] supplies the displayed normalization hypothesis in [F2], giving $\mathbb E f_P=c_k|I_P|/P+o(1)=c_k\epsilon+o(1)$. At selected primes step 4.1 supplies the fixed positive lower bound. Choose
$$0<\eta<\min\{c_k\rho\epsilon/16,c_k\epsilon/4,1/2\}.$$
After a finite threshold every mean is at least $\eta$. At the finitely many earlier primes set $f_P=\nu_P=1$; this finite modification is expressly allowed in [F2] and leaves the asymptotic pseudorandomness conditions intact. Thus the full prime-indexed family, rather than just a subsequence, meets [F1]. All residues were chosen by finite least maximization. [F2, F3, step 3.1, step 4.1, algebra]

6.1 Apply [F1] to obtain normalized progression count at least $c(k,\eta)-o(1)$ on the full family. [F1, F4, F7, F8, step 4.1, step 5.1, algebra]
Now replace its finitely many initial functions by zero. This changes no asymptotic progression-count assertion. Every function is then supported on $I_P$, and $\max f_P\le C_k\log P$: this was proved for the selected indices in step 4.1, and for the other large indices it follows from $\varphi(W)/W\le1$ and $\log(WP+W)=O(\log P)$, since the prescribed cutoff has $W\le\log P$ eventually. Also $0<\epsilon=1/[2^k(k+4)!]<1/(8k)$ for every $k\ge3$. Thus the literal support, pointwise and full-sequence count hypotheses of [F4] all hold. [F1, F4, F7, F8, step 4.1, step 5.1, algebra]

7.1 For every sufficiently large selected prime $P_j$, [F4] extracts a nonconstant integer progression of supported indices. [F4, F5, step 2.1, step 3.1, step 4.1, step 6.1, algebra]
If its integer difference is negative, reverse its order, giving indices $n_0,n_0+d,\ldots,n_0+(k-1)d$ with $d>0$. At this selected index all positive function values mean $W_jn+b_j\in A$. By [F5] their images are a positive-prime progression with difference $W_jd>0$. Its least term is at least $\epsilon W_jP_j-O(W_j)=Y_j+O(Y_j/\log^2Y_j)-O(W_j)$, which tends to infinity. Hence the first terms are unbounded and infinitely many distinct pairs occur. This uses a finite extraction for each sufficiently large selected index; no simultaneous choice of infinitely many witnesses is required. [F4, F5, step 2.1, step 3.1, step 4.1, step 6.1, algebra] ∎

## Proof status

Complete at the original unqualified Statement. The previously missing all-residue/plateau majorant and relative Szemerédi interfaces are now supplied. The active distribution premise is the unqualified choice-free full-endpoint theorem [F3], not the historical AC/CC/DC-qualified Siegel–Walfisz route. Natural-number least recursion, finite residue maximization and finite witness extraction introduce no choice hypothesis. Filling the other prime indices with full-prime weights makes the application of the full prime-indexed relative theorem literal. The historical preimage is retained in the focused repair evidence; no source theorem is imported.
