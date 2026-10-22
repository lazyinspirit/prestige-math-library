---
id: lem-csm-frontier-finite-box-cube-max-fiber-influence
kind: lemma
title: "Maximum endpoint influence for an increasing finite-box set"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Geoffrey Grimmett, Svante Janson, and James Norris, Influence in Product Spaces"
      url: https://arxiv.org/pdf/1207.1780
      locator: "Theorem 2.3 and Remark 2.1: influence bounds and the endpoint/nonconstant-fiber convention; the finite-box increasing-set specialization is proved here."
    - title: "Ryan O'Donnell, Analysis of Boolean Functions"
      url: https://arxiv.org/pdf/2105.10386
      locator: "Section 9.3, Theorem 9.18, and Section 9.4: two-point hypercontractivity and its product extension. The scalar and tensor estimates needed here are proved locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement

Let $n\ge2$ be an integer and let $C\subseteq[0,1]^n$ be coordinatewise increasing and a finite union of axis-parallel boxes, with specified open or closed endpoint conventions. Degenerate boxes are allowed. Let $v_r$ denote elementary $r$-dimensional box volume: a box has the product of its side lengths as volume, and finite unions are evaluated by a common coordinate-endpoint subdivision, with coordinate faces assigned volume zero. Put $f=\mathbf1_C$, $a=v_n(C)$, and

$$F_i=v_{n-1}\{x_{-i}\in[0,1]^{n-1}:f(x_{-i},1)-f(x_{-i},0)=1\},\qquad M=\max_{1\le i\le n}F_i.$$

If $M=0$, then $a(1-a)=0$. If $M>0$, then

$$a(1-a)\le\frac{2\sum_{i=1}^nF_i}{1+\log(1/M)}.$$

In every case,

$$\max_{1\le i\le n}F_i\ge\frac14a(1-a)\frac{\log n}{n}.$$

Logarithms are natural. Endpoint influence uses the actual values on the faces. The assertion and proof use only finite box volumes, finite probability spaces and elementary real calculus; they require no countable product measure or choice principle.

## Facts & Assumptions

**Given:** An integer $n\ge2$ and an increasing finite-box set $C$ as in the statement. A rectangular step function is constant on every open cell of a finite coordinate grid, with its restrictions to grid hyperplanes also rectangular step functions in the remaining coordinates. Its elementary integral is the sum of its full-dimensional cell values times products of cell lengths. To integrate an endpoint section, first restrict the actual function to the specified face and then use the same rule in the remaining dimensions. Dimension-zero integration means evaluation. All continuous-cube integrals below have this finite meaning. Norms on finite probability spaces are normalized probability norms.

## Proof

1.1 The elementary integral is well-defined: adjoining an endpoint splits an interval into two whose lengths sum to its original length, so finite common refinement leaves each integral unchanged. Indicators of finite-box sets, their fixed-coordinate sections, and their finite products and differences are rectangular step functions. Common refinement proves linearity, positivity and the integral triangle inequality. It also proves equality of iterated and full integrals, because both sum the same finitely many cell values times products of lengths; outer grid endpoints have zero length. A translation preserves side lengths, so a piecewise translation bijectively exchanging finitely many boxes preserves these integrals. These are all the continuous-cube integration rules used below. [given, construct, algebra]

1.2 For $1\le p\le2$ and real $u,v$, we prove $(u^2+(p-1)v^2)^{1/2}\le((|u+v|^p+|u-v|^p)/2)^{1/p}$. At $p=1$ this follows from the triangle inequality, and at $p=2$ it is equality. For $1<p<2$ signs can be removed. If $|v|>|u|$, interchange their absolute values: the right side is unchanged and the squared left side increases by $(2-p)(v^2-u^2)$. It therefore suffices to take $u>0$ and $0\le t=v/u\le1$, apart from the trivial zero case. For $t<1$ put $H(t)=((1+t)^p+(1-t)^p)/2$. The convexity of $s^{p-2}$, obtained by two differentiations, gives $H''(t)\ge p(p-1)$. Since $H(0)=1$ and $H'(0)=0$, integration twice gives $H(t)\ge1+p(p-1)t^2/2$. Concavity of $s^{p/2}$ gives $(1+(p-1)t^2)^{p/2}\le1+p(p-1)t^2/2$. Multiply by $u^p$ and take the $p$th root; continuity includes $t=1$. This proves the claimed two-point inequality. [given, algebra]

2.1 On a uniform bit $x\in\{-1,1\}$ define $T_\rho(u+vx)=u+\rho vx$, for $0\le\rho\le1$. Step 1.2 with $p=1+\rho^2$ proves $\|T_\rho h\|_2\le\|h\|_p$. To extend this to $d$ bits, first note that finite-sum Minkowski gives $\|h\|_{L_y^2(L_x^p)}\le\|h\|_{L_x^p(L_y^2)}$ for finite probability spaces and $1\le p\le2$: its $p$th-power form is the triangle inequality for $\mathbb E_x|h(x,\cdot)|^p$ in $L_y^{2/p}$. For completeness, finite weighted Minkowski at exponent $r>1$ follows by multiplying $|z+w|\le|z|+|w|$ by $|z+w|^{r-1}$, summing, applying Hölder and dividing by $\|z+w\|_r^{r-1}$ if nonzero. Weighted Hölder follows by normalizing the two norms and summing Young's inequality $ab\le a^r/r+b^{r'}/r'$, which follows by minimizing $a^r/r-ab$ in $a\ge0$; zero norms and $r=1$ are immediate. If $T_X,T_Y$ contract $L^p$ into $L^2$ on two blocks, apply the $X$ contraction pointwise in $y$, the mixed-norm inequality, and then the $Y$ contraction pointwise in $x$ to obtain $\|T_XT_Yh\|_2\le\|T_Yh\|_{L_y^2(L_x^p)}\le\|T_Yh\|_{L_x^p(L_y^2)}\le\|h\|_p$. Induction therefore gives $\|T_\rho h\|_2\le\|h\|_{1+\rho^2}$ on every finite Boolean cube, where $T_\rho$ applies the one-bit operator in each coordinate. [step 1.2, construct, algebra]

2.2 Put $N=2^m$ for $m\ge1$ and partition $[0,1)^n$ into the dyadic cells $Q_a=\prod_i[a_i/N,(a_i+1)/N)$, with $0\le a_i<N$. On $Q_a$ let $\ell_m=f(a/N)$, $u_m=f((a+\mathbf1)/N)$ and $g_m=N^n\int_{Q_a}f$. Faces at coordinate one may be assigned arbitrary values for integration. Monotonicity gives $\ell_m\le f,g_m\le u_m$. Telescope each difference $u_m-\ell_m$ one coordinate at a time. For coordinate $i$, summation over $a_i$ at fixed remaining upper/lower corner coordinates telescopes to a difference of values at coordinate one and zero, at most one. There are $N^{n-1}$ choices of the other indices, hence $\int(u_m-\ell_m)\le n/N$ and $\delta_m:=\int|g_m-f|\le n/N$. Cell averaging gives $\int g_m=\int f=a$, while $|g_m^2-f^2|\le2|g_m-f|$. Therefore $|\operatorname{Var}(g_m)-a(1-a)|\le2\delta_m\to0$. This uses an explicit numerical error bound, not a theorem interchanging a limit and an integral. [given, step 1.1, construct, algebra]

3.1 On $\{-1,1\}^d$ let $x^{(j)}$ flip bit $j$ and set $D_jh=(h(x)-h(x^{(j)}))/2$. Suppose numbers $b_j\in[0,1]$ satisfy $\|D_jh\|_p\le b_j^{1/p}/2$ for every $1\le p\le2$. We will prove $\operatorname{Var}(h)\le\sum_j b_j/(1+\log(1/b_j))$, interpreting the summand at zero as zero. For $S\subseteq\{1,\ldots,d\}$ define $\chi_S(x)=\prod_{j\in S}x_j$. Independence and zero mean of each bit show these $2^d$ functions are orthonormal. Since the function space has dimension $2^d$, they form a basis; write $h=\sum_S\widehat h(S)\chi_S$. Then $D_jh=\sum_{S\ni j}\widehat h(S)\chi_S$ and $T_\rho\chi_S=\rho^{|S|}\chi_S$. Parseval and finite-sum integration yield the exact identity
$$\operatorname{Var}(h)=2\sum_j\int_0^1\|T_\rho D_jh\|_2^2\,\frac{d\rho}{\rho},$$
because the coefficient of each $\widehat h(S)^2$ for nonempty $S$ is $2|S|\int_0^1\rho^{2|S|-1}\,d\rho=1$. These are ordinary one-variable Riemann integrals of finite polynomials after cancellation of the factor $\rho$; no singularity at zero occurs. [given, step 2.1, construct, algebra]

4.1 Identify each cell index $a_i$ with its $m$ binary digits, most significant first; the uniform distribution of the $nm$ bits is the uniform distribution of the equal-volume cells. Regard $g_m$ as a real function on this finite Boolean cube. For $1\le k\le m$, let $R_{ik}$ flip the $k$th binary digit of coordinate $i$ on $[0,1)$: in every prefix interval of length $2^{1-k}$ translate its lower half up by $2^{-k}$ and its upper half down by $2^{-k}$. Define it arbitrarily at coordinate one. This is a finite piecewise translation preserving elementary integrals, and it pairs the level-$m$ cells with that digit flipped. Let $b_{ik}=\int|f-f\circ R_{ik}|$. The bit derivative of $g_m$ on a cell is the cell average of $(f-f\circ R_{ik})/2$. For such an average $z=|Q|^{-1}\int_Q(f-f\circ R_{ik})$, the finite triangle inequality gives $|z|\le|Q|^{-1}\int_Q|f-f\circ R_{ik}|\le1$, so $|z|^p\le|z|$ for $p\ge1$. Multiplying by $2^{-p}|Q|$ and summing cells yields $\|D_{ik}g_m\|_p^p\le2^{-p}b_{ik}$, the hypothesis of step 3.1. [step 1.1, step 2.2, step 3.1, construct, algebra]

4.2 Write $D_jh=x_jg_j(x_{-j})$. The product noise operator gives $T_\rho D_jh=\rho x_jT_\rho g_j$, so step 2.1 and the norm hypothesis in step 3.1 imply $\|T_\rho D_jh\|_2^2\le\rho^2 b_j^{2/(1+\rho^2)}/4$. For $b=b_j>0$ put $L=\log(1/b)$. Its contribution to the integral in step 3.1 is at most
$$\frac12\int_0^1\rho b^{2/(1+\rho^2)}\,d\rho\le\frac b4\int_0^1e^{-Ls/2}\,ds\le\frac b{1+L}.$$
The middle inequality substitutes $s=1-\rho^2$ and uses $2/(1+\rho^2)\ge1+(1-\rho^2)/2$. The last integral is at most one, proving the last inequality when $0\le L\le1$, and at most $2/L$, proving it when $L\ge1$. At $b_j=0$ the norm hypothesis gives $D_jh=0$. Summing establishes the variance estimate claimed in step 3.1. [step 2.1, step 3.1, algebra]

5.1 Fix the coordinates other than $i$. The fiber indicator is an increasing zero-one function of one real variable, hence a threshold indicator except possibly at its threshold. If the endpoint values agree it is constant everywhere. Otherwise flipping the $k$th digit can change its value only in the single prefix interval of length $2^{1-k}$ containing the threshold. If the threshold is a prefix endpoint, disagreement at that endpoint has length zero; other intervals are constant. Thus the disagreement length is at most $2^{1-k}(f(x_{-i},1)-f(x_{-i},0))$. All these sections and disagreement sets are finite-box sets. Finite-sum iterated integration from step 1.1 gives $b_{ik}\le2^{1-k}F_i$, and consequently $\sum_{k=1}^m b_{ik}\le2F_i$ and $b_{ik}\le M$. [given, step 1.1, step 4.1, algebra]

6.1 If $M=0$, steps 4.1–5.1 make every bit derivative of every $g_m$ zero, so every $g_m$ is constant, and step 2.2 gives $a(1-a)=0$. If $M>0$, apply the variance bound of step 4.2 to $g_m$, using steps 4.1–5.1. Each nonzero denominator is at least $1+\log(1/M)$, giving $\operatorname{Var}(g_m)\le2\sum_iF_i/(1+\log(1/M))$. Taking the limit with the explicit error in step 2.2 proves the first stated inequality. [step 4.2, step 2.2, step 4.1, step 5.1, algebra]

7.1 If $0<M<n^{-1/2}$, step 6.1 gives $a(1-a)\le4nM/\log n$, which is the required lower bound on $M$. If $M\ge n^{-1/2}$, use $a(1-a)\le1/4$ and $\log n\le\sqrt n$ to get $a(1-a)\log n/(4n)\le1/(16\sqrt n)\le M$. The elementary bound $\log t\le\sqrt t$ for $t\ge1$ follows by differentiating $(\log t)/\sqrt t$: its maximum is $2/e<1$. The case $M=0$ was settled in step 6.1. This proves the stated bound for every integer $n\ge2$. [step 6.1, algebra] ∎

## Remarks

The finite-box hypothesis permits every cube integral to be evaluated by finite endpoint subdivision. The only limits are explicit real sequences and one-variable Riemann integrals. This does not assert a choice-free construction of general Lebesgue product measure or the stronger null-invariant influence theorem for arbitrary measurable sets.
