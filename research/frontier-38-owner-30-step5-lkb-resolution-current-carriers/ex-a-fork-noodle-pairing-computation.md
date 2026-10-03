---
id: ex-a-fork-noodle-pairing-computation
kind: example
title: A fork-noodle pairing computation
status: draft
origin: pipeline
deps: [def-forks-noodles-and-their-lkb-intersection-pairing, def-lexicographic-order-on-fork-noodle-deck-monomials]
justified_by: []
aliases: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Section 2.1, printed pp. 475-476: explicit computation of the pairing from the intersections z_i, z'_j, the monomials m_{i,j} and the signs epsilon_{i,j}"
verification:
  precheck: n/a
---
## Example

We compute a fork–noodle polynomial with four tine crossings and actual cancellation, using [[def-forks-noodles-and-their-lkb-intersection-pairing]] and [[def-lexicographic-order-on-fork-noodle-deck-monomials]]. All coordinates below are exact terminating decimals. Write $[v_0,\ldots,v_r]$ for the polygonal arc through those vertices, oriented in that order, and set
$$p_1=(-0.4,0),\quad p_2=(0,0),\quad p_3=(0.4,0),\quad d_1=(-0.8,-0.6),\quad d_2=(0.8,-0.6).$$
The noodle is
$$N=[d_1,(0.2,-0.3),(0.2,0.3),(0.7,0.3),(0.7,-0.3),d_2].$$
Its union with the lower boundary arc encloses only $p_3$. The fork tine and its right-hand parallel tine are
$$T=[p_1,(-0.3,0.1),(0.25,0.1),(0.25,0.07),(0.15,0.07),(0.15,0.04),(0.3,0.04),(0.3,0.1),(0.5,0.1),(0.5,-0.15),(-0.1,-0.15),p_2],$$
$$T'=[p_1,(-0.3,0.095),(-0.28,0.095),(0.245,0.095),(0.245,0.075),(0.145,0.075),(0.145,0.035),(0.305,0.035),(0.305,0.095),(0.495,0.095),(0.495,-0.145),(-0.095,-0.145),p_2].$$
The handles are
$$H=[d_1,(-0.3,-0.3),(-0.3,0.1)],\qquad H'=[d_2,(-0.28,-0.35),(-0.28,0.095)].$$
They end at the indicated tine vertices. Each tree is embedded, meets the outer boundary only at its handle start, and meets $P$ only at $p_1,p_2$. The tine interiors are disjoint. Their orientations put their respective handles to the right. The narrow parallel strips and the handle strip give the parallel-copy convention of Bigelow 2001 Figure 1; the handles need not avoid the other tree's tine. The extra hairpin near $(0.2,0.07)$ lies in a puncture-free rectangle and adds two removable crossings.

## Verification

**Given:** the exact polygonal configuration above. In each of the three stages defining $\delta_{i,j}$, give each segment of each mobile track equal time within that track; this supplies explicit continuous parametrizations. The handles are disjoint, the tine interiors are disjoint, and the returns run to opposite ends of $N$, so each paired path stays in $C$.

1.1 All intersections lie on $x=\frac{1}{5}$. In increasing order along $N$ the tine points have heights $(-\frac{3}{20},\frac{1}{25},\frac{7}{100},\frac{1}{10})$ and the parallel points have heights $(-\frac{29}{200},\frac{7}{200},\frac{3}{40},\frac{19}{200})$. Thus the combined order is $z_1,z'_1,z'_2,z_2,z_3,z'_3,z'_4,z_4$. The loops $\xi_i$ that follow the handle and tine to $z_i$ and return to $d_1$ along $N$ have total puncture windings $(-2,-1,-1,-1)$: the first clockwise loop encloses $p_2,p_3$, while each of the other loops encloses only $p_2$. The hairpin changes none of these windings. The clockwise loop $N$ followed by the lower boundary return has $A_0=-1$. The labelled-loop formula $a_{i,j}=a_i+a_j+A_0$ therefore gives $$ (a_{i,j})=\begin{pmatrix}-5&-4&-4&-4\\-4&-3&-3&-3\\-4&-3&-3&-3\\-4&-3&-3&-3\end{pmatrix}. $$ [given, construct, algebra]

2.1 Here is an exact ray-crossing calculation of the mutual exponents, rather than an inference from their parities. Let $D_{i,j}$ be the difference of the two labelled tracks along $\delta_{i,j}$. Merge the rational segment-time breakpoints of the two tracks; the resulting difference is piecewise affine with rational vertices and never zero. Count signed crossings of the ray in direction $1+\mathrm i/10$: for consecutive difference vertices $(x,y),(X,Y)$ a crossing occurs when $g=y-x/10$ and $G=Y-X/10$ have opposite signs and, at $u=-g/(G-g)$, $x+u(X-x)+(y+u(Y-y))/10>0$. Its sign is positive when $g<0<G$, negative in the reverse case. No difference vertex lies on this ray. If the labels return, this closed difference path has signed count $-1$, so $b=2(-1)=-2$. If they exchange, concatenate the difference path with its negative; the resulting closed path has signed count $-1$, so $b=-1$. Substitution of the listed vertices gives these counts for every pair. The returning case is exactly $z_i$ preceding $z'_j$ along $N$, yielding $$ (b_{i,j})=\begin{pmatrix}-2&-2&-2&-2\\-1&-1&-2&-2\\-1&-1&-2&-2\\-1&-1&-1&-1\end{pmatrix}. $$ Together with step 1.1 this specifies every monomial $m_{i,j}=q^{a_{i,j}}t^{b_{i,j}}$. [given, step 1.1, construct, algebra]

3.1 The diagonal exponents are $(-2,-1,-2,-1)$. Applying $\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}$ to step 2.1 gives $$ (\epsilon_{i,j})=\begin{pmatrix}-1&1&-1&1\\-1&1&1&-1\\1&-1&-1&1\\-1&1&-1&1\end{pmatrix}. $$ The two exponent matrices and this sign matrix list all sixteen labelled contributions; no pair is omitted. [step 1.1, step 2.1, algebra]

4.1 Rows two and three of the signed monomial table cancel entry by entry. In row one, columns two and three cancel; in row four, columns three and four cancel. The four remaining terms give $$\langle N,F\rangle=-q^{-5}t^{-2}+q^{-4}t^{-2}-q^{-4}t^{-1}+q^{-3}t^{-1}=q^{-5}t^{-2}(q-1)(1+qt)\ne0.$$ Thus geometrically distinct terms really do cancel, although the collected polynomial is nonzero. The sum of the sixteen signs is zero, so the ordinary algebraic intersection number of the projected surfaces vanishes. The deck-labelled polynomial retains information lost by this unweighted count. [step 1.1, step 2.1, step 3.1, algebra] ∎
