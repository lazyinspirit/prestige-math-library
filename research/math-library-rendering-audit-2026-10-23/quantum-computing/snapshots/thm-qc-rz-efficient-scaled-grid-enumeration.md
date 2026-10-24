---
id: thm-qc-rz-efficient-scaled-grid-enumeration
kind: theorem
title: Complete scaled-grid enumeration with expected polynomial prefix cost
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - alg-qc-rz-efficient-scaled-grid-iterator
  - lem-qc-cyclotomic-one-dimensional-grid-enumeration
  - lem-qc-paired-ellipse-grid-uprighting
  - lem-qc-cyclotomic-scaled-grid-finiteness
  - def-qc-cyclotomic-bullet-automorphism
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ross and Selinger, Optimal ancilla-free Clifford+T approximation of z-rotations, Theorem 5.18 and Propositions 5.21–5.22
      url: https://arxiv.org/pdf/1403.2975
dependency_level: 5
---

## Statement

The iterator [[alg-qc-rz-efficient-scaled-grid-iterator]] enumerates exactly once every $u\in\mathbb Z[\omega,1/2]$ satisfying $u\in A$, $u^\bullet\in B$, in increasing least $\sqrt2$ denominator exponent. Let $L=1+\log(1/\varepsilon)$. Its startup costs $O(L^2)$ ideal exact-real arithmetic/comparison operations. In a layer $k$ having $N$ solutions, its explicit proposal domain has size $M\le C(N+1)$ for an absolute constant $C$, without filtering already emitted lower-denominator points. Empty layers cost $\operatorname{poly}(k+L)$. For $1\le j\le N$, the expected work through its first $j$ distinct outputs is $O(j(1+\log j)\operatorname{poly}(k+L))$; the $r$th moment of that prefix work is $O_r(j^{2r}\operatorname{poly}(k+L)^r)$ for every fixed positive integer $r$. Complete-layer work is $O((N+1)\operatorname{poly}(k+L))$ in expectation. These are arithmetic bounds with random-bit generation charged, and do not assert bit-time bounds for unspecified real inputs or worst-case polynomial delay.

## Facts & Assumptions

**Given:** The arithmetic/comparison and real-input contract of the algorithm, independent unbiased random bits, and exact algebraic coefficient arithmetic.

[F1] One-dimensional intervals have the proposal and counting bounds of [[lem-qc-cyclotomic-one-dimensional-grid-enumeration]].

[F2] The paired-ellipse construction makes both outer ellipses at least $1/6$ upright, with all map entries polynomially bounded in $1/\varepsilon$ ([[lem-qc-paired-ellipse-grid-uprighting]]).

[F3] Simultaneous disk bounds give at most $(2\lfloor2^{k/2}\rfloor+1)^4=2^{O(k+1)}$ coefficient tuples at exponent $k$ ([[lem-qc-cyclotomic-scaled-grid-finiteness]]).

[F4] Bullet negates $\sqrt2$ and sends $\omega$ to $-\omega$ ([[def-qc-cyclotomic-bullet-automorphism]]).

## Proof


1.1 The ring $O=\mathbb Z[\omega]$ has exactly four residue classes modulo $\sqrt2 O$, represented by $0,1,\omega,1+\omega$. Indeed $\sqrt2\omega=1+i$ and $\sqrt2=\omega-\omega^3$ imply $i\equiv1$, $\omega^3\equiv\omega$, and $2\equiv0$. Conversely the coefficient map $a_0+a_1\omega+a_2\omega^2+a_3\omega^3\mapsto(a_0+a_2,a_1+a_3)\bmod2$ annihilates every multiple of $\sqrt2$: multiplying by $\sqrt2=\omega-\omega^3$ gives even sums in both coordinates. Thus those four residues are distinct and exhaustive. Consequently for $k\ge1$ the three chosen affine subproblems describe precisely the elements of least exponent $k$. For $k=0$, the algorithm scans all $81$ coefficient tuples in $\{-1,0,1\}^4$; [F3] bounds every nonzero grid candidate in this layer by that box, and zero fails the cap because $1-\varepsilon^2/2>0$. The two further cosets $\mathbb Z[\sqrt2]+i\mathbb Z[\sqrt2]$ and its translate by $\omega$ partition $O$: expand a power-basis element's real and imaginary parts and separate the parity of $a_1+a_3$. Thus all affine subproblems are disjoint. The lattice bijection [F2] and the exact filters preserve every solution, while the emitted set suppresses revisits. The exhaustive background scan makes every finite layer terminate for every sequence of random bits. [given, F2, F3, F4, construct, algebra]

1.2 The cap is sandwiched between $E$ and its concentric $1/8$-dilate. In coordinates $u=xw+y iw$, cap points have $1-h\le x\le1$ and $y^2\le2h$, so $(x-(1-h/2))^2/h^2+y^2/(4h)\le1/4+1/2<1$. Conversely the $1/8$-ellipse lies in $|x-(1-h/2)|\le h/8$, $|y|\le\sqrt h/4$, hence $x\ge1-h$ and $x^2+y^2\le(1-3h/8)^2+h/16<1$ for $0<h<1/8$. The normalized outer ellipse eigenvalues are $2/\sqrt h$ and $\sqrt h/2$, within $[H^{-1},H]$ for $H=4/\varepsilon$; the disk matrix is the identity. Therefore [F2] applies with $\log H=O(L)$. For a final normalized ellipse matrix $\left(\begin{smallmatrix}a&b\\b&d\end{smallmatrix}\right)$ with $b^2\le15$, its centered bounding box has half-widths $\sqrt d,\sqrt a$. At its box scaled by $1/8$, the quadratic form is at most $2(ad+|b|\sqrt{ad})/64\le1$, since $ad=1+b^2\le16$. Each transformed cap therefore contains its outer ellipse's bounding box scaled concentrically by $1/64$, and the same weaker bound holds for the transformed disk. Affine shifts, negative scalar dilations, and coset translations preserve these inclusions. [given, F2, construct, algebra]

2.1 At $k=0$ the direct coefficient scan has at most $81$ proposals, hence $M=O(N+1)$ for the number $N$ of layer solutions. For $k\ge1$, consider one of the at most six subproblems. If $P_x,P_y\ge T$, the two inner axis rectangles from step 1.2 supply independent coordinate grid problems with length products $P_x/64^2$ and $P_y/64^2$. Both exceed $4\lambda^3$, so [F1] gives at least $cP_x$ and $cP_y$ solutions, with a fixed $c>0$. Their Cartesian product lies inside both true constraints, giving $N_{\rm sub}\ge c^2P_xP_y$. The two outer one-dimensional proposal lengths are $O(P_x+1)$ and $O(P_y+1)$, so their product is $O(N_{\rm sub})$. If one coordinate product is below $T$, its entire proposal list and filtered coordinate list have bounded length by [F1]. Each remaining exact slice gives $O(N_x+1)$ proposals by the same result, including singleton slices. Summing over the constantly many coordinate solutions gives $O(N_{\rm sub}+1)$ proposals. Combining the at most six disjoint subproblems proves $M=O(N+1)$. In particular an empty layer has only constantly many proposals; no exponentially large lower-denominator list is generated. [F1, step 1.1, step 1.2, algebra]

3.1 The bound [F2] on $G$ and the affine scalings $2^{k/2}$ bounds all outer centers and widths above by $\exp(O(k+L))$. A nonzero outer width is bounded below by $\exp(-O(k+L))$, by the ellipse eigenvalue bounds and $\det G=\pm1$. Thus the integer parts in outer one-dimensional preprocessing cost $O(k+L)$ comparisons each. There are only constantly many exact slice intervals in the small-coordinate branch. A positive slice can have arbitrarily small width, so the algorithm pads it before the [F1] normalization: replace a slice width $\delta$ smaller than $1/(\Delta+1)$ by that value, keeping its center and filtering the original slice. Its product is at most one and it creates constantly many proposals. Otherwise $\delta\ge1/(\Delta+1)$, so both positive widths used for normalization are at least $\exp(-O(k+L))$, since $\Delta$ is bounded by the outer width. The same padding handles singleton slices, and an empty slice is skipped. In either branch the [F1] unit-rescaling exponents are $O(k+L)$, all floor operands have magnitude $\exp(O(k+L))$, and the earlier $O(N_x+1)$ bound is retained. Root and line-intersection calculations use boundedly many source arithmetic operations; sign decisions are charged exact comparisons. Finally $M=O(N+1)$ and [F3] give $\log(M+1)=O(k+1)$, so each random proposal attempt uses $O(k+1)$ random bits and is accepted with probability at least $1/2$. A balanced comparison tree on exact coefficient tuples handles the emitted set in $O(\log(N+2))=O(k+1)$ comparisons per visit. Thus each proposal visit and all layer preprocessing cost $\operatorname{poly}(k+L)$ in expectation, with polynomial moments. [F1, F2, F3, step 1.2, step 2.1, construct, algebra]

4.1 Every actual solution occupies exactly one proposal index. For $N\ge1$, after $s<N$ distinct solutions have been drawn, an independent random attempt produces a new solution with probability at least $(N-s)/(2M)$. Ignoring the background scan can only delay obtaining $j$ solutions. The expected number of random draws to obtain them is at most $\sum_{s<j}2M/(N-s)\le2C(N+1)\sum_{s<j}1/(N-s)\le4Cj\sum_{t=1}^j1/t$, since $N/(N-s)\le j/(j-s)$ for $N\ge j$. This is $O(j(1+\log j))$. Moreover each waiting time is dominated by a geometric variable with success probability $1/(4C(s+1))$, whose $r$th moment is $O_r((s+1)^r)$: sum its geometric tail, or bound the sum by the integral of $r x^{r-1}\exp(-x/(4C(s+1)))$. The inequality $(\sum_{s<j}x_s)^r\le j^{r-1}\sum_{s<j}x_s^r$ gives the stated $O_r(j^{2r})$ draw-moment bound. Each random draw adds only one background visit. Independently, after at most $M$ such pairs the deterministic scan ends the layer, bounding complete-layer work by $O((N+1)\operatorname{poly}(k+L))$. Combining these estimates with step 3.1 proves all complexity claims. They control prefixes as well as complete output sizes, so they do not hide a whole-layer precomputation before the first candidate. [given, F3, step 1.1, step 2.1, step 3.1, algebra] ∎

