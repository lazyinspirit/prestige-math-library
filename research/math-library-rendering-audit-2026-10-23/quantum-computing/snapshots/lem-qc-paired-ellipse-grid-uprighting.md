---
id: lem-qc-paired-ellipse-grid-uprighting
kind: lemma
title: Effective simultaneous grid uprighting of paired ellipses
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-cyclotomic-bullet-automorphism
  - lem-integer-part
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Appendix A
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 2
---

## Statement

Let $E,F$ be ellipses in $\mathbb R^2$, specified by their centers and positive definite symmetric matrices. Normalize their matrices separately to determinant one, obtaining $D_0,\Delta_0$. Suppose the eigenvalues of both normalized matrices lie in $[H^{-1},H]$, $H\ge2$. There is a constructive real linear map $G$ such that $G\mathbb Z[\omega]=\mathbb Z[\omega]$, $\det G=\pm1$, $(Gu)^\bullet=G^\bullet u^\bullet$, and both $G(E)$ and $G^\bullet(F)$ have area at least $1/6$ of their axis-aligned bounding-box area. It uses $O(\log H)$ matrix/arithmetic/logarithm/exponentiation operations and $O(\log H)$ integer-part operations. All real quantities to which integer parts are applied have magnitude $H^{O(1)}$, so implementing those parts by comparisons and binary search costs $O((\log H)^2)$ operations overall. The entries of $G,G^\bullet$ have magnitude $H^{O(1)}$.

## Facts & Assumptions

**Given:** The two normalized matrices, centers and $H$ as in the Statement. Square roots may be evaluated as positive real exponentiation; this is an arithmetic-operation bound, not a bit-time claim about arbitrary real inputs.

[F1] The bullet map negates $\sqrt2$ and fixes $i$ ([[def-qc-cyclotomic-bullet-automorphism]]).

[F2] Integer parts exist ([[lem-integer-part]]).

## Proof


1.1 Put $\lambda=1+\sqrt2$ and define $R=\frac1{\sqrt2}\left(\begin{smallmatrix}1&-1\\1&1\end{smallmatrix}\right)$, $A=\left(\begin{smallmatrix}1&-2\\0&1\end{smallmatrix}\right)$, $B=\left(\begin{smallmatrix}1&\sqrt2\\0&1\end{smallmatrix}\right)$, $K=\frac1{\sqrt2}\left(\begin{smallmatrix}-\lambda^{-1}&-1\\\lambda&1\end{smallmatrix}\right)$, $X=\left(\begin{smallmatrix}0&1\\1&0\end{smallmatrix}\right)$, $Z=\operatorname{diag}(1,-1)$, and $L=\operatorname{diag}(\lambda,\lambda^{-1})$. Express a determinant-one positive matrix as $D=\left(\begin{smallmatrix}e\lambda^{-z}&b\\b&e\lambda^z\end{smallmatrix}\right)$, $e=\sqrt{1+b^2}$; use $\beta,f,\zeta$ for $\Delta$. Define skew $S=b^2+\beta^2$ and bias $\zeta-z$. For a matrix $T$, act on the pair by $(T^{\mathsf T}DT,(T^\bullet)^{\mathsf T}\Delta T^\bullet)$. In real/imaginary coordinates, with $s=1/\sqrt2$, the additive group $O=\mathbb Z[\omega]$ is $\{(a+sb,c+sd):a,b,c,d\in\mathbb Z,\ b\equiv d\pmod2\}$. For integer matrices $P,Q$, the real matrix $M=P+sQ$ maps $O$ into $O$ exactly when the sum of the four entries of $P$ is even and all four entries of $Q$ have the same parity; applying $M$ to $(1,0),(0,1),(s,s),(-s,s)$ gives these conditions. In the order (sum parity of $P$, common parity of $Q$, determinant), each of $R,R^{-1}$ has (even, odd, $1$); each of $A,A^{-1}$ has (even, even, $1$); each of $B,B^{-1}$ has (even, even, $1$); each of $K,K^{-1}$ has (even, odd, $1$); $X$ has (even, even, $-1$); $Z$ has (even, even, $-1$); and each of $L,L^{-1}$ has (even, even, $1$). Thus these matrices preserve $O$ and have the stated determinants. Their entries lie in $\mathbb Q(\sqrt2)$, so [F1] gives the conjugation identity. [F1, given, construct, algebra]

2.1 The extra maps in the shifted-map factorization also preserve the lattice, including their inverses. With the criterion of step 1.1, $U=\operatorname{diag}(\lambda,1)$, $U^{-1}$, $\lambda I$, and $\lambda^{-1}I$ each have even total integer part and even entries in their $s$-coefficient matrix; hence all four map $O$ into itself. Applying the same criterion to each inverse gives equality with $O$. [step 1.1, algebra, construct]

3.1 A skew-preserving temporary shift replaces $(z,\zeta,b,\beta)$ by $(z-q,\zeta+q,b,(-1)^q\beta)$, where $q=\lfloor(1-(\zeta-z))/2\rfloor$. It puts the bias in $[-1,1]$. This is conjugation by $\sigma^q=\operatorname{diag}(\lambda^{q/2},\lambda^{-q/2})$ on $D$ and by $\tau^q=\operatorname{diag}(\lambda^{-q/2},(-1)^q\lambda^{q/2})$ on $\Delta$. If a lattice map $T$ reduces the shifted pair, then $T'=\sigma^qT\sigma^q$ reduces the original skew by the same factor: shifting again preserves skew and gives precisely the action of $T'$, whose bullet is $(-\tau)^qT^\bullet\tau^q$. This $T'$ is still a lattice map. For $q=1$, its entries are $\left(\begin{smallmatrix}\lambda t_{11}&t_{12}\\t_{21}&\lambda^{-1}t_{22}\end{smallmatrix}\right)$, the product $\lambda^{-1}I\operatorname{diag}(\lambda,1)T\operatorname{diag}(\lambda,1)$ of lattice maps; the same argument applies to inverse shifts. Finally apply $Z$ if necessary to make $\beta\ge0$, and $X$ if necessary to make $z+\zeta\ge0$. These preserve skew and the bias strip. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 Assume $S\ge15$ and the normalization of step 3.1. In the central region $|z|,|\zeta|\le4/5$, use $R$. Its new off-diagonals are $e\sinh_\lambda z,f\sinh_\lambda\zeta$, where $\sinh_\lambda x=(\lambda^x-\lambda^{-x})/2$. Thus $S'\le S(17/15)\sinh_\lambda^2(4/5)<(9/10)S$. For an explicit strict bound, $\lambda^{4/5}<21/10$ follows from $\lambda<5/2$ and $(5/2)^4<(21/10)^5$, so $\sinh_\lambda(4/5)<341/420$ and $(17/15)(341/420)^2<9/10$. [step 1.1, step 3.1, algebra]

4.2 If $b\ge0$, $z\le3/10$, and $\zeta\ge4/5$, use $K$. Its off-diagonal squares sum to $(\sqrt2 b-e\cosh_\lambda(z+1))^2+(\sqrt2\beta-f\cosh_\lambda(\zeta-1))^2$. Both arguments belong to $[-1/5,13/10]$. For $c=\cosh_\lambda x=(\lambda^x+\lambda^{-x})/2$, the inequality $be\ge b^2$ gives $(\sqrt2 b-ec)^2\le b^2(\sqrt2-c)^2+c^2$, and likewise for $\beta$. On this interval $1\le c<109/60<2\sqrt2-1$, so $(\sqrt2-c)^2\le(\sqrt2-1)^2$. Here the rational bound follows from $\lambda<17/7$, $\lambda^{1/5}<6/5$, $\lambda^{1/10}<11/10$, and $\lambda^{13/10}>12/5$: hence $c<((17/7)(6/5)(11/10)+5/12)/2<109/60$. All fractional-power comparisons follow by raising positive sides to powers five or ten. Therefore $S'/S\le(\sqrt2-1)^2+(2/15)(109/60)^2<9/10$. For $z\ge4/5$, $\zeta\le3/10$, use $K^\bullet$ and exchange the two matrices. [step 1.1, step 3.1, algebra]

4.3 If $b\ge0$ and $z,\zeta\ge3/10$, put $c=\min(z,\zeta)$, $n=\max(1,\lfloor\lambda^c/2\rfloor)$ and use $A^n$. The new off-diagonals are $b-2ne\lambda^{-z}$ and $\beta-2nf\lambda^{-\zeta}$. Expanding their squares and using $be\ge b^2$, $\beta f\ge\beta^2$ gives $S'/S\le\max_{x\in\{z,\zeta\}}(1-2n\lambda^{-x})^2+(8/15)n^2\lambda^{-2c}$. If $\lfloor\lambda^c/2\rfloor\ge1$, then $\lambda^c/4\le n\le\lambda^c/2$ and $c\le z,\zeta\le c+1$; the displayed bound is at most $(1-1/(2\lambda))^2+2/15<9/10$. Otherwise $n=1$, $\lambda^c<2$, and the two arguments $\lambda^{-x}$ lie in $[1/(2\lambda),\lambda^{-3/10}]$. The quadratic's maximum is at the left endpoint: $\lambda^{3/10}>13/10$ and $\lambda>12/5$ verify the endpoint comparison. The bound is then at most $(1-1/\lambda)^2+(8/15)\lambda^{-3/5}<(3/5)^2+8/15<9/10$. [F2, step 1.1, step 3.1, algebra]

4.4 If $b\le0$ and $z,\zeta\ge-1/5$, put $c=\min(z,\zeta)$, $n=\max(1,\lfloor\lambda^c/\sqrt2\rfloor)$ and use $B^n$. Its off-diagonals are $b+\sqrt2ne\lambda^{-z}$ and $\beta-\sqrt2nf\lambda^{-\zeta}$. Since $be\le-b^2$ and $\beta f\ge\beta^2$, expansion gives $S'/S\le\max_{x\in\{z,\zeta\}}(1-\sqrt2 n\lambda^{-x})^2+(4/15)n^2\lambda^{-2c}$. When the floor is positive, $\lambda^c/(2\sqrt2)\le n\le\lambda^c/\sqrt2$, giving at most $(1-1/(2\lambda))^2+2/15<9/10$. Otherwise $n=1$ and $\lambda^{-x}\in[1/(\sqrt2\lambda),\lambda^{1/5}]$. The absolute value at both endpoints is less than $5/7$: use $1-1/\lambda<3/5$, $\sqrt2<10/7$, and $\lambda^{1/5}<6/5$. The remaining term is below $(4/15)(6/5)^2=48/125$, so $S'/S<25/49+48/125<9/10$. [F2, step 1.1, step 3.1, algebra]

5.1 These cases cover the normalized strip. If the central region fails, one coordinate exceeds $4/5$: a coordinate below $-4/5$ would, by $z+\zeta\ge0$, force bias magnitude greater than one. When $b\ge0$, either both coordinates are at least $3/10$, or the smaller is at most $3/10$ and a $K$ case applies. When $b\le0$, a coordinate below $-1/5$ forces the other below $4/5$ by the bias strip, putting both in the central region. Undo the temporary shift as in step 3.1 and repeat. Each iteration reduces $S$ by $9/10$, so after $O(\log H)$ iterations $S<15$, since initially $S\le2H^2$. For a determinant-one ellipse, its area-to-box ratio is $\pi/(4\sqrt{1+b^2})$: its area is $\pi$ and box half-widths are $\sqrt d,\sqrt a$ when the matrix is $\left(\begin{smallmatrix}a&b\\b&d\end{smallmatrix}\right)$. Thus the final ratios exceed $\pi/16>1/6$. The inverse cumulative map is the desired $G$, including translated centers. [step 3.1, step 4.1, step 4.2, step 4.3, step 4.4, algebra]

6.1 To control integer parts, after every contraction balance the top-left coefficients $a,\alpha$ using a right action $L^r$ with $\lambda^{-2}\le(a/\alpha)\lambda^{4r}\le\lambda^2$; this preserves skew. Let $T$ be the cumulative lattice map. Each column $v$ has some nonzero coordinate in $2^{-1/2}\mathbb Z[\sqrt2]$, so $\|v\|^2\|v^\bullet\|^2\ge1/4$ by its nonzero rational norm, whose absolute value is at least $1/2$. Hence $a\alpha\ge H^{-2}/4$, and likewise $d\delta\ge H^{-2}/4$. Since $(ad)(\alpha\delta)=(1+b^2)(1+\beta^2)\le(1+2H^2)^2$, both products are also at most $4H^2(1+2H^2)^2$. Balancing makes $a,\alpha$ individually $H^{O(1)}$ and bounded below by $H^{-O(1)}$; $d=(1+b^2)/a$ and $\delta=(1+\beta^2)/\alpha$ have the same bounds. The quadratic forms then bound the entries of $T,T^\bullet$ by $H^{O(1)}$. At each iteration the temporary shifts and powers in step 3.1 and step 4.1 and step 4.2 and step 4.3 and step 4.4 have exponents $O(\log H)$ and values $H^{O(1)}$ as well. Integer parts are therefore computable by binary search within integer bounds $H^{O(1)}$ in $O(\log H)$ comparisons each. Balancing does not alter any skew estimate or termination bound, proving the quantitative claims without a free floor oracle. [F2, step 1.1, step 3.1, step 5.1, algebra] ∎

