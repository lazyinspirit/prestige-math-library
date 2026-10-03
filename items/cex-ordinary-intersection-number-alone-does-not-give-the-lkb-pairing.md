---
id: cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing
kind: counterexample
title: Ordinary intersection number alone does not give the LKB pairing
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
      locator: "Section 2.1, printed pp. 475-476 (the sum <N,F> = sum epsilon_{i,j} m_{i,j}, Claim 3.3) and section 3.1, printed pp. 480-481"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement refuted

The LKB fork–noodle polynomial is determined by the ordinary total algebraic intersection number of the projected surfaces in $C$.

## Counterexample

**Given:** $p_1=(-0.4,0)$, $p_2=(0,0)$, $p_3=(0.4,0)$, $d_1=(-0.8,-0.6)$ and $d_2=(0.8,-0.6)$. A bracketed vertex list denotes its polygonal arc. Use the noodle
$$N=[d_1,(0.2,-0.3),(0.2,0.3),(0.7,0.3),(0.7,-0.3),d_2],$$
the tine and parallel tine
$$T=[p_1,(-0.3,0.1),(0.5,0.1),(0.5,-0.15),(-0.1,-0.15),p_2],\qquad T'=[p_1,(-0.3,0.08),(-0.28,0.08),(0.48,0.08),(0.48,-0.13),(-0.08,-0.13),p_2],$$
and handles
$$H=[d_1,(-0.3,-0.3),(-0.3,0.1)],\qquad H'=[d_2,(-0.28,-0.35),(-0.28,0.08)].$$
These give embedded forks with disjoint tine interiors and the standard parallel-copy orientation of [[def-forks-noodles-and-their-lkb-intersection-pairing]]. Each handle stays on the right of its oriented tine. The noodle and lower boundary arc enclose only $p_3$.

1.1 The tine crossings are $z_1=(\frac{1}{5},-\frac{3}{20})$ and $z_2=(\frac{1}{5},\frac{1}{10})$; their parallel crossings are $z'_1=(\frac{1}{5},-\frac{13}{100})$ and $z'_2=(\frac{1}{5},\frac{2}{25})$. Their order along $N$ is $z_1,z'_1,z'_2,z_2$. The handle–tine–noodle loops $\xi_1,\xi_2$ go clockwise around respectively $p_2,p_3$ and only $p_2$, so $(a_1,a_2)=(-2,-1)$; the noodle–lower-boundary loop has $A_0=-1$. The explicit labelled-loop formula of [[def-lexicographic-order-on-fork-noodle-deck-monomials]] gives $$ (a_{i,j})=\begin{pmatrix}-5&-4\\-4&-3\end{pmatrix}. $$ [given, construct, algebra]

2.1 Parametrize each segment of each track by equal time within its stage of $\delta_{i,j}$, and merge their rational breakpoints. The difference path $D$ is nonzero and piecewise affine. Counting crossings of the ray in direction $1+\mathrm i/10$ is exact rational arithmetic: on a segment from $(x,y)$ to $(X,Y)$ solve $y+u(Y-y)=(x+u(X-x))/10$ and retain the solution only when $0<u<1$ and the real coordinate in that ray direction is positive. The sign is that of $(Y-X/10)-(y-x/10)$. For each returning pair the closed difference path has total count $-1$; for each exchanged pair $D$ followed by $-D$ has count $-1$. Thus $$ (b_{i,j})=\begin{pmatrix}-2&-2\\-1&-1\end{pmatrix},\qquad (\epsilon_{i,j})=\begin{pmatrix}-1&1\\-1&1\end{pmatrix}, $$ the sign matrix following from $\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}$. The four projected intersections are distinct and transverse, and their signed count is $-1+1-1+1=0$. [given, step 1.1, construct, algebra]

3.1 The four monomial-weighted terms instead give $$\langle N,F\rangle=-q^{-5}t^{-2}+q^{-4}t^{-2}-q^{-4}t^{-1}+q^{-3}t^{-1}=q^{-5}t^{-2}(q-1)(1+qt)\ne0.$$ The four exponent vectors are distinct, so this Laurent polynomial is nonzero without any specialization. For comparison, a fork tine placed to the left of $x=\frac{1}{5}$ misses $N$ and has both ordinary count and pairing zero. The two configurations have the same ordinary count, zero, and different LKB values. Hence the proposed determination by ordinary intersection number alone fails. [step 1.1, step 2.1, algebra] ∎
