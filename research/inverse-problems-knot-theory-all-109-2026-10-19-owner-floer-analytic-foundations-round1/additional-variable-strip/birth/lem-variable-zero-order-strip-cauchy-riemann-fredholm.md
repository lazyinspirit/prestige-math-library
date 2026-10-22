---
id: lem-variable-zero-order-strip-cauchy-riemann-fredholm
kind: lemma
title: "A strip Cauchy–Riemann operator with nondegenerate constant limits is Fredholm"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, def-fredholm-operator-cokernel-and-index, lem-transverse-linear-strip-cauchy-riemann-isomorphism]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §3.2"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Lipshitz, A cylindrical reformulation of Heegaard Floer homology, §3 and Appendix A"
      url: "https://arxiv.org/pdf/math/0502404"
---

## Statement

Assume Countable Choice. On $S=\mathbb R\times[0,1]$ use the real Hilbert domain $H^1_\theta$ with product-line boundary conditions at angles $0<\theta_j<\pi$: it is the $H^1$ completion of smooth maps compactly supported in the first coordinate and satisfying $u(s,0)\in\mathbb R^m$, $u(s,1)\in\prod_j e^{i\theta_j}\mathbb R$. Let $B(s,t)$ be a bounded measurable real linear endomorphism of $\mathbb C^m$. Suppose there are real diagonal constant matrices $B_\pm=\operatorname{diag}(b_{\pm,1},\ldots,b_{\pm,m})$ such that
$$\underset{\pm s>R,\ 0<t<1}{\operatorname{ess\,sup}}\|B(s,t)-B_\pm\|\longrightarrow0\quad(R\longrightarrow\infty),$$
and $\theta_j-b_{\pm,j}\notin\pi\mathbb Z$ for every $j$ and each sign. Then
$$T=\partial_s+i\partial_t+B(s,t):H^1_\theta\longrightarrow L^2(S;\mathbb C^m)$$
is bounded and Fredholm over $\mathbb R$: its kernel and cokernel are finite dimensional and its range is closed. There are bounded left and right parametrices whose errors are operator-norm limits of finite-rank operators. No index value or identification with a Maslov index is asserted.

## Statement references

[[def-countable-choice]]

[[def-fredholm-operator-cokernel-and-index]]

[[lem-transverse-linear-strip-cauchy-riemann-isomorphism]]

## Facts & Assumptions

**Given:** Countable Choice, the strip domain, $B$, its specified diagonal limits, and their nondegeneracy.

[F1] The constant product-line operator $D=\partial_s+i\partial_t$ has a bounded inverse from $L^2$ to the specified $H^1$ boundary completion whenever all boundary angles lie strictly between zero and $\pi$, by [[lem-transverse-linear-strip-cauchy-riemann-isomorphism]]. Its proof also gives the coefficient characterization of that completion and one-dimensional smooth $H^1$ approximation.

## Proof

1.1 Set $X=H^1_\theta$ and $Y=L^2(S;\mathbb C^m)$ with their real Hilbert structures. The operator $T:X\to Y$ is bounded because $B$ is essentially bounded and both first derivatives are controlled by the $X$ norm. There are bounded inverses $Q_0$ for $D$ and $Q_\pm$ for $D+B_\pm$. For the latter take $\phi_{\pm,j}\in(0,\pi)$ representing $\theta_j-b_{\pm,j}$ modulo $\pi$. The multiplication $U_\pm(t)=\operatorname{diag}(e^{ib_{\pm,j}t})$ maps $H^1_{\phi_\pm}$ boundedly and invertibly onto $X$, since its derivative is bounded and it maps the endpoint real lines to the desired lines. Direct differentiation gives $(D+B_\pm)U_\pm v=U_\pm Dv$. Thus [F1] provides $Q_\pm=U_\pm D_{\phi_\pm}^{-1}U_\pm^{-1}$. These identities hold on the dense smooth subspaces and hence on their completions. [F1, given, construct, algebra]

2.1 Restriction $X\to L^2([-R,R]\times[0,1])$ is an operator-norm limit of finite-rank maps for each positive integer $R$. Indeed partition the rectangle into squares of side $h=1/N$ and replace a function on each square $C$ by its average $u_C$. For smooth $u$, the variance identity and the coordinate-segment fundamental theorem of calculus give $$\int_C|u-u_C|^2=\frac1{2|C|}\int_C\int_C|u(x)-u(y)|^2dxdy\le h^2\int_C(|u_s|^2+|u_t|^2).$$ For the inequality insert the intermediate point $(y_1,x_2)$, bound the square of the sum by twice the sum of squares, and bound each coordinate difference by $h$ times the integral of the squared corresponding derivative along that segment; integrating the other coordinates and dividing by $2h^2$ gives the displayed bound. Sum over the finite grid and pass to the defining smooth completion of $X$. The cell-average map has finite-dimensional range and its error has norm at most $h$. Consequently multiplication $X\to Y$ by any bounded measurable matrix or scalar supported in such a rectangle is a norm limit of finite-rank maps: compose restriction, cell averaging, and multiplication. No extension theorem or general Rellich theorem is used. [F1, construct, algebra]

3.1 We record the elementary Hilbert facts used below under precisely Countable Choice. Every closed subspace $Z$ of a Hilbert space has an orthogonal projection: for $x$, countable choice selects $z_n\in Z$ with $\|x-z_n\|^2<a^2+1/n$, where $a=\inf_{z\in Z}\|x-z\|$. The parallelogram identity makes $(z_n)$ Cauchy, because $\|z_n-z_l\|^2\le2/n+2/l$. Its limit $z\in Z$ minimizes the distance; applying minimality to $z+tv$ for all real $t$ gives $x-z\perp Z$. Uniqueness then makes the projection linear and contractive. In particular a closed subspace and its orthogonal complement give an orthogonal direct sum. Also the image of the unit ball under a norm limit of finite-rank operators is totally bounded: approximate the operator within any given positive tolerance and use a finite net for the bounded finite-dimensional image. Every sequence in such an image has a Cauchy subsequence, by taking at each successively finer finite cover the first member containing infinitely many of the remaining indices and then taking the least next index; completeness gives convergence. Countable choice suffices to select finite covers at the countably many scales in advance, and the subsequent recursion is deterministic. [given, construct, algebra]

4.1 Here is the needed parametrix criterion, proved without a general Atkinson theorem. Suppose a bounded operator $A:H\to G$ between real Hilbert spaces has bounded $L:G\to H$, $R:G\to H$ with $LA=I+K_H$ and $AR=I+K_G$, where both $K$'s are norm limits of finite-rank maps. Then $\ker A$ is finite dimensional. Choose a finite-rank $F$ with $\|K_H-F\|<1/2$. For $x\in\ker A$, $x=-K_Hx$ implies $\|x\|\le\|Fx\|+\|x\|/2$. Thus $F$ is injective on the kernel, identifying it with a subspace of its finite-dimensional range. [step 3.1, construct, algebra]

5.1 The range of $A$ is closed. Put $Z=(\ker A)^\perp$. There is $c>0$ with $\|Ax\|\ge c\|x\|$ for $x\in Z$. Otherwise Countable Choice chooses unit vectors $x_n\in Z$ with $\|Ax_n\|<1/n$. Step 3.1 supplies a subsequence on which $K_Hx_n$ converges. The identity $x_n=LAx_n-K_Hx_n$ then makes $x_n$ converge in $H$ to a unit vector in $Z\cap\ker A$, impossible. Given a convergent sequence $Ax_n$ in the range, replace each $x_n$ by its orthogonal projection onto $Z$; the lower bound makes these new preimages Cauchy, and their limit maps to the specified target limit. Thus the range is sequentially closed and hence closed in the metric space $G$. [step 3.1, step 4.1, construct, algebra]

6.1 Its cokernel is finite dimensional as well. Let $P$ be the orthogonal projection onto $(\operatorname{ran}A)^\perp$, which exists by step 5.1 and step 3.1. From $AR=I+K_G$ one gets $y=-PK_Gy$ for $y\in(\operatorname{ran}A)^\perp$. Approximate $K_G$ within $1/2$ by finite-rank $F$. Then $\|y\|\le\|PFy\|+\|y\|/2$, so $PF$ is injective on this orthogonal complement. It is therefore finite dimensional. The orthogonal decomposition identifies $G/\operatorname{ran}A$ linearly with that complement. Together with steps 4.1–5.1 this proves the criterion. [step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 Construct parametrices for $T$ as follows. Choose three smooth scalar cutoffs $\chi_-,\chi_0,\chi_+$ with $\chi_-^2+\chi_0^2+\chi_+^2=1$, the first supported in $s<-R$, the last in $s>R$, and $\chi_0$ compactly supported. They can have first derivatives bounded by a constant independent of $R$: take fixed smooth transitions over intervals of width one at the two ends and use sine and cosine of a transition angle to obtain a squared partition. Their multiplication norms on both $X$ and $Y$ are then uniformly bounded. Write $B_0=0$, and set $$S=\chi_-Q_-\chi_-+\chi_0Q_0\chi_0+\chi_+Q_+\chi_+:Y\to X.$$ The product rule and $(D+B_i)Q_i=I$, $Q_i(D+B_i)=I$ give $$TS=I+\sum_i\bigl(\chi_i(B-B_i)Q_i\chi_i+\chi_i'Q_i\chi_i\bigr),\qquad ST=I+\sum_i\bigl(\chi_iQ_i\chi_i(B-B_i)-\chi_iQ_i\chi_i'\bigr).$$ These hold first for the defining smooth subspace and then by boundedness. Bounded measurable $B$ requires no derivative in these identities. [step 1.1, construct, algebra]

8.1 In each formula, the $i=0$ term involving $B$ and all the terms with $\chi_i'$ are norm limits of finite-rank maps by step 2.1 and bounded composition. For example $\chi_0BQ_0\chi_0:Y\to Y$ uses the compactly supported multiplier $\chi_0B:X\to Y$ after $Q_0\chi_0$, while $\chi_0Q_0\chi_0 B:X\to X$ uses that multiplier before $\chi_0Q_0$. The analogous derivative terms use $\chi_i':X\to Y$. In the remaining exterior terms $\|B-B_\pm\|$ is uniformly as small as desired when $R$ is large. Since $Q_i$ are fixed and the cutoff multiplication norms are uniformly bounded, the sum of those exterior terms has operator norm below $1/2$ on $Y$ in the first identity and on $X$ in the second, for one sufficiently large $R$. Thus $$TS=I+E_Y+K_Y,\qquad ST=I+E_X+K_X,$$ where $\|E_Y\|,\|E_X\|<1/2$ and both $K$'s are norm limits of finite-rank maps. [step 1.1, step 2.1, step 7.1, given, algebra]

9.1 The geometric series give bounded inverses of $I+E_X$ and $I+E_Y$. Set $L=(I+E_X)^{-1}S$ and $R_0=S(I+E_Y)^{-1}$. Then $$LT=I+(I+E_X)^{-1}K_X,\qquad TR_0=I+K_Y(I+E_Y)^{-1}.$$ The remainders are still norm limits of finite-rank maps, since composition by a bounded operator preserves that property. Apply the criterion of steps 4.1–6.1 with $A=T$. This proves finite-dimensional kernel and cokernel, closed range, and the promised parametrices, with Countable Choice as the only choice axiom used. [step 4.1, step 5.1, step 6.1, step 8.1, algebra] ∎
