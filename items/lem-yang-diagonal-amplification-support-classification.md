---
dependency_level: 5
id: lem-yang-diagonal-amplification-support-classification
kind: lemma
title: "Yang's Diagonal Amplification-Support Classification"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-yang-2026-amplified-test-function-data
  - thm-smith-normal-form-existence-over-a-pid
  - thm-p-adic-digit-expansion
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Liyang Yang, Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n), Lemma 6.2"
      url: "https://arxiv.org/pdf/2309.07534v2"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $n\geq2$, let $p$ be a prime, put $G'=\mathrm{GL}_n(\mathbb Q_p)$, $K'_p=\mathrm{GL}_n(\mathbb Z_p)$, let $B'$ be the upper-triangular subgroup, let $N'$ be the upper-unitriangular subgroup, and let $W'$ be the permutation-matrix Weyl group. For $t=\operatorname{diag}(t_1,\ldots,t_n)$ write $\delta_{B'}(t)=\prod_{i<j}|t_i/t_j|_p$. Let $\ell=i$ with $0\leq i\leq\ell_{p_0}$, and let $f_p$ be the $p=p_0$ factor of the diagonal test function $f^{\mathrm{diag}}_{p_0,i}$. Given $y\in G'$ and $x\in\mathbb Q_p^n$ as a column vector, suppose the minimum valuations of the entries of $y$ and $x$ are $-e$ and $-e'$, respectively, for integers $e,e'\geq0$. There is a choice of $w\in W'$, $u\in N'(\mathbb Q_p)$, $k\in K'_p$, and integers $r_1\geq\cdots\geq r_{n-1}\geq0$ in a decomposition

$$wy=tuk,\qquad t=\operatorname{diag}(p^{r_1-e},\ldots,p^{r_{n-1}-e},p^{-e}),$$

with $tut^{-1}\in K'_p$. The choice is constructed by the finite Gaussian algorithm in the proof; if $y\in K'_p$, choose $w$ putting a coordinate of $x$ of minimum valuation last and take $t=u=I_n$, $k=wy$. Write $wx=\binom{x'}{\alpha}$, with $x'=\binom{x'_1}{x'_2}$, $x'_2\in\mathbb Q_p^{n-2}$, and $\alpha\in\mathbb Q_p$. If

$$f_p\!\left(\begin{pmatrix}y&x\\0&1\end{pmatrix}\right)\ne0,$$

then $\delta_{B'}(t)^{-1}\leq p^{2(n-1)\ell}$ and one of the following alternatives holds. For $n=2$, all blocks and vectors of size $n-2$ below are omitted. Put

$$U(c,u''_1,u''_2)=\begin{pmatrix}1&c&u''_1\\0&I_{n-2}&u''_2\\0&0&1\end{pmatrix},$$

where $c$ is a row vector of length $n-2$.

**(A)** If $e\geq e'$, one of these cases holds.

**(A.1)** $e=\ell$ and

$$wy=\operatorname{diag}(p^\ell,I_{n-2},p^{-\ell})U(c,u''_1,u''_2)k,$$

where $(u''_1,u''_2)\in p^{-2\ell}\mathbb Z_p\oplus p^{-\ell}\mathbb Z_p^{n-2}$, $c\in p^{-\ell}\mathbb Z_p^{n-2}$, $k\in K'_p$, $x'-\alpha p^\ell(p^\ell u''_1,u''_2)\in\mathbb Z_p^{n-1}$, and $\alpha\in p^{-\ell}\mathbb Z_p$.

**(A.2)** $\ell<e\leq2\ell$. Put $r_1=3\ell-e$. Then

$$wy=\operatorname{diag}(p^{-e+r_1},p^{\ell-e}I_{n-2},p^{-e})U(c,u''_1,u''_2)k,$$

where $u''_2\in p^{-\ell}\mathbb Z_p^{n-2}$, $u''_1\in p^{-r_1}\mathbb Z_p$, $c\in p^{\ell-r_1}\mathbb Z_p^{n-2}$, $k\in K'_p$, $\alpha\in p^{-e}\mathbb Z_p$, and $x'-\alpha(p^{r_1}u''_1,p^\ell u''_2)\in p^{\ell-e}\mathbb Z_p^{n-1}$.

**(B)** If $e<e'$, one of these cases holds, and in each $\alpha\in p^{-e'}\mathbb Z_p^\times$.

**(B.1)** $2e'-e=\ell$, $x'\in p^{-e'}\mathbb Z_p^{n-1}$, and

$$wy=\operatorname{diag}(p^{\ell+e'-e},p^{e'-e}I_{n-2},p^{-e})U(c,u''_1,u''_2)k,$$

where $c\in p^{-\ell}\mathbb Z_p^{n-2}$, $k\in K'_p$, and $(u''_1,u''_2)-\operatorname{diag}(p^{-\ell},I_{n-2})p^{-e'}\alpha^{-1}x'\in p^{-\ell}\mathbb Z_p\oplus\mathbb Z_p^{n-2}$.

**(B.2)** $2e'-e=2\ell$ and

$$wy=\operatorname{diag}(p^{e'-e-\ell},p^{e'-e-\ell}I_{n-2},p^{-e})U(0,u''_1,u''_2)k,$$

where $k\in K'_p$ and $(u''_1,u''_2)-p^{\ell-e'}\alpha^{-1}x'\in\mathbb Z_p^{n-1}$.

**(B.3)** $\ell<2e'-e<2\ell$. Put $j=e'-\ell$ and $r_1=3\ell-3e'+2e$, so $1\leq j-e+r_1<\ell$. Then

$$wy=\operatorname{diag}(p^{3\ell-3e'+e},p^{\ell-e'}I_{n-2},p^{-e})U(c,u''_1,u''_2)k,$$

where $c\in p^{2e'-e-2\ell}\mathbb Z_p^{n-2}$, $u''_2\in p^{e'-e-\ell}\mathbb Z_p^{n-2}$, $u''_1\in p^{3e'-2e-3\ell}\mathbb Z_p$, $k\in K'_p$, and

$$ (u''_1,u''_2)-\operatorname{diag}(p^{3e'-2e-3\ell},p^{e'-e-\ell}I_{n-2})\alpha^{-1}x'\in p^{2e'-e-2\ell}\mathbb Z_p\oplus\mathbb Z_p^{n-2}.$$

Here the suitable decomposition is the constructive choice described above, not an arbitrary triangular decomposition; valuations are normalized by $v_p(p)=1$.

## Statement references

[Liyang Yang, *Relative Trace Formula, Subconvexity and Quantitative Nonvanishing of Rankin–Selberg L-Functions for GL(n+1) × GL(n)*, Lemma 6.2, §6.3](https://arxiv.org/pdf/2309.07534v2)

## Facts & Assumptions

**Given:** Exactly the original prime, rank, diagonal test factor, $\ell$ range, and pair $(y,x)$ with valuation minima $-e,-e'$. The suitable decomposition is to be constructed, not assumed. Put $O=\mathbb Z_p$ and $K=\mathrm{GL}_{n+1}(O)$.

[F1] The diagonal local factor with $\ell=i$ is the central projection of $p^{-n\ell}\mathbf1_{K\operatorname{diag}(p^\ell,I_{n-1},p^{-\ell})K}$. Nonzero value therefore implies membership in a central multiple of that double coset. [[def-yang-2026-amplified-test-function-data]]

[F2] Every finite matrix over a PID has a Smith diagonal form under invertible row/column operations. [[thm-smith-normal-form-existence-over-a-pid]]

[F3] Unique $p$-adic digits imply that nonzero elements of $O$ are units times nonnegative powers of $p$; the least valuation in any nonzero ideal makes $O$ a PID. [[thm-p-adic-digit-expansion]]

## Proof

**Proof technique:** constructive Gaussian decomposition and a single cyclic positive complement.

1.1 Construct a refined Gaussian decomposition of $y$. In a nonzero square invertible block choose a least-valuation entry, breaking ties by finite lexicographic row/column order, move it to the last row and column, and absorb its unit into a column scaling. Its row and column entries are divisible by this pivot. Integral column operations clear the rest of its row; integral upper-unipotent row operations then clear the entries above it. The remaining block still has all valuations at least that of the pivot, because each Schur-complement entry is an original entry minus a product of two entries divided by the pivot. Repeat on that block. The finite induction gives $wy=vtk$, where $w$ is a permutation, $k\in K'_p$, $v\in N'(O)$, and $t$ has nonincreasing diagonal valuations, the last equal to $-e$. Set $u=t^{-1}vt$; then $wy=tuk$ and $tut^{-1}=v\in K'_p$. The intermediate permutations occur only in the remaining upper block and conjugate the already formed last-column eliminations to upper-unipotent eliminations, so the resulting left factor is indeed upper unipotent. If $y\in K'_p$, instead choose the least index of a minimum-valuation coordinate of $x$, permute it last, and take $t=u=I_n$, $k=wy$. This is still refined and has $e=0$ and every $r_a=0$. Thus the prescribed choice exists for every original pair $(y,x)$ with no new hypothesis. Write $wx=\binom{v_x}{\alpha}$, with $v_x=x'$. [given, F3, construct]

2.1 Suppose first that $\ell=0$ and the local factor is nonzero. By [F1], $p^j\begin{pmatrix}y&x\\0&1\end{pmatrix}\in K$ for some integer $j$. The minimum entry valuation gives $j=\max(e,e')\ge0$, while the inverse's bottom-right entry gives $j\le0$. Hence $j=e=e'=0$ and $y\in K'_p$. The chosen decomposition has $t=u=I_n$, so (A.1) holds with $c_*,u''_1,u''_2$ zero and $k=wy$, and $x',\alpha$ integral. Its modulus is1. Henceforth assume $\ell\ge1$. [given, F1, step 1.1, algebra]

2.2 By [F2] and [F3], a matrix of the required Smith type has exponents $(-\ell,0,\ldots,0,\ell)$. Its determinant valuation is zero; its minimum entry valuation and minimum $2\times2$-minor valuation are at least $-\ell$, with the entry minimum equal to $-\ell$, and its inverse has all entry valuations at least $-\ell$. By [F1] there is $j\in\mathbb Z$ with the centrally scaled matrix of this Smith type. After the integral left permutation and right $k^{-1}$, write it as $p^jH$ with $H=\begin{pmatrix}Du_0&Db&v_x\\0&c_*&\alpha\\0&0&1\end{pmatrix}$, where $D=\operatorname{diag}(p^{r_a-e})_{a<n}$, $c_*=p^{-e}$, and $u=\begin{pmatrix}u_0&b\\0&1\end{pmatrix}$. The entry minimum gives $j=\max(e,e')-\ell$, and the bottom-right entries of the matrix and inverse give $-\ell\le j\le\ell$. The determinant gives $\sum_{a<n}r_a-ne+(n+1)j=0$. Refinement implies $v_0=Du_0D^{-1}\in N_{n-1}(O)$ and $p^eDb\in O^{n-1}$. If any entry of valuation $-\ell$ is isolated by integral operations, the remaining $n\times n$ complement has Smith type $(0,\ldots,0,\ell)$, equivalently is integral with cyclic cokernel of order $p^\ell$. This last criterion follows from Smith form: its nonnegative exponents sum to $\ell$ and its reduction modulo $p$ has rank $n-1$. In particular, for a complement $\begin{pmatrix}p^jDu_0&z\\0&d\end{pmatrix}$, put $a_i=j+r_i-e$ and $h=v_p(d)$. These are nonnegative by integrality. Left multiplication by $\operatorname{diag}(v_0^{-1},1)$ changes its upper-left block to $\operatorname{diag}(p^{a_i})$. If two $a_i$ were positive, those two columns would vanish modulo $p$, leaving rank at most $n-2$. Thus at most one is positive; orderedness gives $a_2=\cdots=a_{n-1}=0$, $a=a_1\ge0$, and the determinant gives $a+h=\ell$. This is the common finite-complement criterion used below. [given, F1, F2, F3, step 1.1, construct, algebra]

3.1 Suppose $e\ge e'$. Then $j=e-\ell$, and both $Db/c_*$ and $\alpha/c_*$ are integral. Eliminate them as row/column multiples using the pivot $p^jc_*$ of valuation $-\ell$. The complement is $p^j\begin{pmatrix}Du_0&v_x-\alpha p^eDb\\0&1\end{pmatrix}$. Its lower diagonal valuation is $h=j\ge0$; step 2.2 gives $a+j=\ell$, $r_1=2\ell-j=3\ell-e$, and $r_a=\ell$ for $2\le a<n$. Hence $\ell\le e\le2\ell$. The middle subblock of $u_0$ is integral, since the corresponding entries of $D$ are equal and $v_0$ is integral. Absorb that block into $k$ to put $u$ in the displayed three-block form $U(c_0,b_1,b_2)$; this absorption leaves $b$ unchanged. The integral first-to-middle block of $v_0$ gives $c_0\in p^{-a}O^{n-2}$, and the refined last column gives $b_1\in p^{-r_1}O$, $b_2\in p^{-\ell}O^{n-2}$. Integrality of the complement's last column gives $v_x-\alpha(p^{r_1}b_1,p^\ell b_2)\in p^{-j}O^{n-1}$. [given, step 2.2, construct, algebra]

3.2 Suppose $e<e'$, so $j=e'-\ell$. We claim $v_p(\alpha)=-e'$. Otherwise some coordinate $(v_x)_m$ has valuation $-e'$, while $v_p(\alpha)>-e'$. The minor on rows $m,n$ and columns $n,n+1$ in $H$ is $(Db)_m\alpha-c_*(v_x)_m$. Since $Db$ has entry valuations at least $-e$, its valuation is exactly $-e-e'$. The scaled minor bound gives $2j-e-e'\ge-\ell$, that is $j\ge e$. The determinant identity in step 2.2 now gives $0\le\sum r_a=ne-(n+1)j\le-e$. Therefore $e=j=0$ and every $r_a=0$. Refinement then gives $y\in K'_p$. But in this branch the decomposition was chosen in step 1.1 to put a minimum-valuation coordinate of $x$ last, a contradiction. Hence $\alpha\in p^{-e'}O^\times$ and $v_x\in p^{-e'}O^{n-1}$. This handles the boundary $y\in K'_p$ rather than making a false claim for arbitrary row permutations. [given, step 1.1, step 2.2, algebra]

4.1 In case $e\ge e'$ of step 3.1, if $j=0$, then $e=\ell$, $r_1=2\ell$ and $a=\ell$. The formulas of step 3.1 become exactly (A.1), with $c=c_0$, $u''_1=b_1$, $u''_2=b_2$: the first residual term is $\alpha p^{2\ell}b_1$, the second is $\alpha p^\ell b_2$, and $\alpha\in p^{-\ell}O$ follows from $e'\le e$. If $j>0$, they give (A.2), with $\ell<e\le2\ell$, the same $r_1=3\ell-e$, $c_*\in p^{\ell-r_1}O^{n-2}$, and $\alpha\in p^{-e}O$. In particular the first residual has coefficient $p^{r_1}$, not the incorrect $p^\ell$; no stronger bound on $\alpha$ follows or is asserted. [given, step 3.1, algebra]

4.2 Continue case $e<e'$ of step 3.2 and isolate the pivot $p^j\alpha$ by subtracting $v_x/\alpha$ and $1/\alpha$ times row $n$ from the top and last rows, then $c_*/\alpha$ times the last column from column $n$. All ratios are integral because $e'>e\ge0$. The complement is $B=p^j\begin{pmatrix}Du_0&Db-(c_*/\alpha)v_x\\0&-c_*/\alpha\end{pmatrix}$. Up to a unit its lower diagonal entry is $p^h$, where $h=j+e'-e=2e'-e-\ell$. Step 2.2 gives $0\le h\le\ell$, $a=\ell-h$, $r_1=e-j+a$ and $r_m=e-j$ for $1<m<n$. Absorb the integral middle block of $u_0$ as before. Writing $b=(b_1,b_2)$, refinement gives $c_0\in p^{-a}O^{n-2}$, $b_1\in p^{-r_1}O$ and $b_2\in p^{j-e}O^{n-2}$. The last-column condition of $B$ is exactly $b_1-p^{j-e-a}\alpha^{-1}(v_x)_1\in p^{-a}O$ and $b_2-p^{j-e}\alpha^{-1}(v_x)_2\in O^{n-2}$. These relations use integrality alone; the cyclic-cokernel criterion also retains any additional joint unit condition needed for the converse support test. [given, step 2.2, step 3.2, construct, algebra]

5.1 In the complement of step 4.2, if $h=0$, then $2e'-e=\ell$, $a=\ell$, $r_1=\ell+e'$ and $r_m=e'$. Consequently $D=\operatorname{diag}(p^{\ell+e'-e},p^{e'-e}I_{n-2})$, giving (B.1). Since $j-e=-e'$ and $j-e-a=-e'-\ell$, its residual ideal is $p^{-\ell}O\oplus O^{n-2}$ as stated. Replacing that first ideal by $O$, as in the source, would be false. [given, step 4.2, algebra]

5.2 In the complement of step 4.2, if $h=\ell$, then $2e'-e=2\ell$ and $a=0$. All top diagonal entries of $D$ are $p^{e'-e-\ell}$, and $u_0$ is integral; absorb it entirely into $k$, so $c_0=0$. As $j-e=\ell-e'$, the last-column condition is $b-p^{\ell-e'}\alpha^{-1}v_x\in O^{n-1}$. This is (B.2). If $0<h<\ell$, put $j=e'-\ell$ and $r_1=e-j+a=3\ell-3e'+2e$. Then $a=j-e+r_1$ satisfies $1\le a<\ell$, the top exponent of $D$ is $3\ell-3e'+e$, the middle exponents are $\ell-e'$, and $-a=2e'-e-2\ell$. Also $j-e-a=3e'-2e-3\ell$. Substitution in step 4.2 gives every matrix, vector bound and residual ideal in (B.3). Thus the three cases exhaust (B). [given, step 4.2, construct, algebra]

6.1 For the chosen $t$, direct summation of the diagonal exponents in $\delta_{B'}$ gives: in (A.1), $\delta^{-1}=p^{2(n-1)\ell}$; in (A.2), $\delta^{-1}=p^{(n-1)(2\ell-j)}\le p^{2(n-1)\ell}$; in (B.1), $\delta^{-1}=p^{(n-1)(\ell+e')}<p^{2(n-1)\ell}$ because $\ell-e'=e'-e>0$; in (B.2), $\delta^{-1}=p^{(n-1)(e'-\ell)}<p^{2(n-1)\ell}$ because $e'<2\ell$; in (B.3), $\delta^{-1}=p^{(n-1)r_1}<p^{2(n-1)\ell}$ because $r_1=a+e-e'+\ell<2\ell$. Step 2.1 handled $\ell=0$. The construction and complement argument work unchanged when $n=2$, with empty middle blocks. No restriction on the prime was used. This proves the corrected full-domain constructive classification and the original modulus bound. [given, step 2.1, step 4.1, step 5.1, step 5.2, algebra] ∎

## Source correction and proof status

Complete finite-matrix proof of the corrected constructive statement. The old source/transcription was not proved or silently retained: the vector is an upper-right column and $wx$ is column concatenation; a suitable refined Gaussian decomposition must be constructed rather than allowing arbitrary choices; the source (A.2) alpha bound and first congruence weight, and the source (B.1) first residual ideal, are false as printed. Authentic old source bytes and explicit prime-independent matrix counterexamples are preserved in the accompanying repair evidence. The revised statement keeps every original $(y,x)$, prime, rank and allowed $\ell$, constructs the required choice, retains all five diagonal/range alternatives and the modulus bound, and supplies the actual necessary congruences. It introduces no extra hypothesis. The full global geometric estimate remains held: its counting/volume proof must use the corrected conditions, and no original saving is inferred here.
