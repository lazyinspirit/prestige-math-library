---
id: lem-countable-choice-quantitative-newton-correction-and-smooth-zero-chart
kind: lemma
title: "Quantitative Newton correction and smooth split zero charts under countable choice"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, def-banach-space, def-frechet-derivative-between-banach-spaces, def-c-k-map-between-banach-spaces]
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Countable Choice only; the fixed-point sequence and Neumann series are explicitly prescribed. No Hahn–Banach functional, open mapping theorem, or stronger-choice inverse function theorem is used."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Chin-Lung Wang, Banach Calculus, §§3.1–3.3, printed pp.9–11"
      url: "https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf"
      locator: "Full contraction and inverse/implicit-function proofs read; quantitative right-inverse correction and the choice audit are supplied locally"
---

## Statement

Assume countable choice. Let $E,Y$ be real Banach spaces, $f$ a $C^1$ map on an open neighborhood of the closed ball $\overline B_E(0,r)$, and $D=df(0)$. Suppose a specified bounded linear map $Q:Y\to E$ satisfies $DQ=I_Y$. Fix $M>0$, $L\ge0$ with $\|Q\|\le M$ and
$$\|df(x)-df(y)\|\le L\|x-y\|\quad(x,y\in\overline B_E(0,r)).$$
Put $\varepsilon=\|f(0)\|$. If
$$2M\varepsilon<r,\qquad MLr\le\tfrac12,$$
then there is a unique $x\in\operatorname{im}Q\cap\overline B_E(0,r)$ with $f(x)=0$. It satisfies
$$\|x\|\le2M\varepsilon,\qquad \|x+Qf(0)\|\le2M^3L\varepsilon^2.$$
The sequence $x_0=0$,
$$x_{n+1}=-Qf(0)-Q\bigl(f(x_n)-f(0)-Dx_n\bigr)$$
converges to this correction, with contraction ratio at most $1/2$. At the corrected zero $df(x)$ is still surjective, with specified right inverse
$$Q_x=Q\bigl[I_Y+(df(x)-D)Q\bigr]^{-1},\qquad \|Q_x\|\le2M.$$

The following local smooth conclusions also hold. If $f(0)=0$, $f$ is $C^q$, $1\le q\le\infty$, and $D$ has the specified bounded right inverse $Q$, continuity of $df$ alone suffices for a local $C^q$ zero-set chart. With $K=\ker D$ and $V=\operatorname{im}Q$, there is a $C^q$ map $v$ from a neighborhood of $0$ in $K$ to $V$, with $v(0)=dv(0)=0$, such that, in a product neighborhood for $E=K\oplus V$,
$$f(k+w)=0\quad\Longleftrightarrow\quad w=v(k).$$
For a $C^q$ family $f(p,z)$, $p$ in any Banach parameter space, the same assertion holds locally with $v=v(p,k)$ whenever $f(p_0,0)=0$ and $d_zf(p_0,0)Q=I_Y$. In particular, if $Q(p)$ is a specified $C^q$ family of right inverses to $d_zf(p,0)$ and the quantitative hypotheses hold strictly with locally uniform constants, the unique corrections in $\operatorname{im}Q(p)$ depend $C^q$ on $p$.

This is an abstract correction and chart theorem. It assumes the right inverse and all displayed estimates; it supplies no geometric pregluing, uniform right-inverse construction, Fredholm index, or gluing exhaustion theorem.

## Statement references

[[def-countable-choice]]

[[def-banach-space]]

[[def-frechet-derivative-between-banach-spaces]]

[[def-c-k-map-between-banach-spaces]]

## Facts & Assumptions

**Given:** The complete real normed spaces, specified right inverse and quantitative or local smooth hypotheses in the Statement. Differentiability is in the norm-remainder sense and higher derivatives in operator norm.

[F1] [[def-banach-space]] supplies completeness. [[def-frechet-derivative-between-banach-spaces]] and [[def-c-k-map-between-banach-spaces]] fix the norm-remainder derivative and recursive continuous higher derivatives.

## Proof

1.1 We first establish the needed mean-value estimate without selecting a dual functional. If a differentiable Banach-valued path $g$ on $[a,b]$ has $\|g'(t)\|\le C$, then $\phi(t)=\|g(t)-g(a)\|$ has upper right Dini derivative at most $C$, by the derivative remainder and the triangle inequality. For $\eta>0$, put $h(t)=\phi(t)-(C+\eta)(t-a)$. If $h(b)>h(a)$, its minimum on the compact interval is attained at some $t_0<b$; all sufficiently small right differences there are nonnegative, contradicting the strictly negative upper right Dini derivative. Thus $\phi(b)\le(C+\eta)(b-a)$; let $\eta\downarrow0$. Applying this argument to each subinterval proves the segment estimate $\|g(b)-g(a)\|\le C(b-a)$. For a continuous Banach-valued function, its dyadic Riemann sums are Cauchy by uniform continuity, hence converge by completeness; comparison with arbitrary fine partitions identifies the same integral. The difference-quotient estimate for this integral gives its derivative equal to the integrand. The segment estimate just proved makes a differentiable path with zero derivative constant. Consequently the Banach-valued fundamental theorem holds for $C^1$ paths. Applied to $N(z)=f(z)-f(0)-Dz$, it gives $$\|N(z)\|\le\tfrac{L}{2}\|z\|^2,\qquad \|N(z)-N(w)\|\le Lr\|z-w\|$$ on the closed radius-$r$ ball. The first bound integrates $\|(df(tz)-D)z\|\le Lt\|z\|^2$; the second uses the segment estimate and $\|dN\|\le Lr$. [F1, given, construct, algebra]

2.1 The operators $QD$ and $P=I_E-QD$ are bounded complementary projections: $(QD)^2=QD$, $DP=0$, $P|_{\ker D}=I$, and $QD$ is the identity on $V=\operatorname{im}Q$. Their ranges are closed, since a bounded projection's range is the kernel of its complementary projection. Thus $E=K\oplus V$, and the closed ball in $V$ is complete. On the radius-$\rho$ ball in $V$, $\rho=2M\varepsilon<r$, define $T(z)=-Qf(0)-QN(z)$. Step 1.1 and $MLr\le1/2$ give $$\|T(z)\|\le M\varepsilon+MLr\|z\|\le\rho,\qquad \|T(z)-T(w)\|\le\tfrac12\|z-w\|.$$ Starting with $x_0=0$, iterate this one prescribed map. Its increments are at most $2^{-n}\|x_1-x_0\|$, so the geometric tail bound makes the sequence Cauchy and complete convergence gives a fixed point $x$. If $\varepsilon=0$ the ball is the singleton zero and the same conclusion holds directly. On $V$, applying $D$ to $z=T(z)$ gives $Dz=-f(0)-N(z)$, hence $f(z)=0$; conversely every zero in $V$ satisfies this fixed-point identity because $QDz=z$. The Lipschitz estimate holds on the entire radius-$r$ ball, so any two zeros in that larger ball coincide as well. [F1, step 1.1, construct, algebra]

3.1 The norm bound is $\|x\|\le\rho$. The equation $x+Qf(0)=-QN(x)$ and the quadratic bound of step 1.1 give $$\|x+Qf(0)\|\le\tfrac{ML}{2}\rho^2=2M^3L\varepsilon^2.$$ Write $A=(df(x)-D)Q$. Then $\|A\|\le LM\|x\|\le MLr\le1/2$. The explicit series $\sum_{n\ge0}(-A)^n$ converges in bounded-operator norm, since its tails have geometric norm bounds and the operator space is complete pointwise with the uniform limit bound. Multiplication of finite partial sums and passage to the limit show that it is a two-sided inverse of $I_Y+A$, of norm at most two. Therefore $df(x)Q_x=(I_Y+A)(I_Y+A)^{-1}=I_Y$, and $\|Q_x\|\le2M$. No choice of a new complement or inverse has been made. [step 1.1, step 2.1, construct, algebra]

3.2 We prove the local chart, including its parameter version, directly. Replace $D$ by $d_zf(p_0,0)$, use the fixed splitting of step 2.1, and set $$T(p,k,w)=w-Qf(p,k+w),\qquad w\in V.$$ Its derivative in $w$ is $I_V-Qd_zf(p,k+w)|_V$, which vanishes at $(p_0,0,0)$. Choose product neighborhoods with $\|d_wT\|\le1/2$ there, by continuity. Choose a closed $V$-ball of radius $b>0$ inside this product, then shrink the open parameter and $K$ neighborhoods so $\|T(p,k,0)\|<b/2$. The segment estimate in step 1.1 makes $T(p,k,\cdot)$ a contraction of that closed ball into itself. Its explicit iteration from zero gives a unique fixed point $v(p,k)$. Since $Q$ is injective ($DQ=I$), the fixed-point equation is equivalent to $f(p,k+v)=0$. Any zero in the product neighborhood is that fixed point. The fixed point is interior because its norm is at most $2\|T(p,k,0)\|<b$. [F1, step 1.1, step 2.1, construct, algebra]

4.1 The fixed point depends continuously, and locally Lipschitz, on $(p,k)$. For two nearby parameters $a,a'$ denoting this combined variable, subtract the fixed-point equations to obtain $$\|v(a')-v(a)\|\le2\|T(a',v(a))-T(a,v(a))\|.$$ Continuity gives continuity; a bounded derivative in the parameter variable on a sufficiently small product ball gives local Lipschitz dependence by step 1.1. Put $H=I_V-d_wT(a,v(a))$. Its Neumann inverse has norm at most two. For a small parameter increment $h$, the $C^1$ remainder, and the Lipschitz bound on $v$, give $$H\bigl(v(a+h)-v(a)\bigr)=d_aT(a,v(a))h+o(\|h\|).$$ Thus $v$ is differentiable, with $$dv(a)=\bigl[I_V-d_wT(a,v(a))\bigr]^{-1}d_aT(a,v(a)).$$ All factors are continuous; hence $v$ is $C^1$. When there is no parameter $p$, at $k=0$ one has $v(0)=0$ and $d_kT=-QD|_K=0$, so $dv(0)=0$. [F1, step 1.1, step 3.1, step 3.2, construct, algebra]

5.1 For completeness, the derivative rules just used require no hidden selection principle. The chain rule follows by substituting the two norm-remainder expansions, with local boundedness of the first derivative controlling the inner remainder. The product rule follows by expanding a bounded bilinear product and bounding the product of the two increments. On the open set of invertible bounded operators, the identity $$ (A+H)^{-1}-A^{-1}=-(A+H)^{-1}HA^{-1}$$ and the Neumann norm bound show continuity; substituting it once more gives derivative $H\mapsto-A^{-1}HA^{-1}$ with quadratic remainder. Differentiating this finite product expression inductively proves smoothness of inversion. If $T$ is $C^q$, the derivative formula in step 4.1 is therefore $C^{j-1}$ whenever $v$ is $C^{j-1}$ and $j\le q$. Induction upgrades $v$ to $C^q$, including every finite order when $q=\infty$. These arguments also prove the smoothness of the explicit linear splitting coordinate maps and the resulting zero-set parametrization $k\mapsto k+v(k)$. [F1, step 3.1, step 4.1, construct, algebra]

6.1 Finally suppose the right inverse varies smoothly with $p$. Work in the fixed space $Y$ and write the correction as $x=Q(p)y$. Put $D(p)=d_zf(p,0)$ and $N(p,z)=f(p,z)-f(p,0)-D(p)z$. The correction equation is exactly $$y=-f(p,0)-N(p,Q(p)y).$$ The right side also equals $y-f(p,Q(p)y)$, so it is $C^q$ without requiring an extra derivative of $D(p)$. At a fixed solution its derivative in $y$ has norm at most $LM\|x\|<1/2$. In a small product neighborhood of that fixed point and parameter, continuity gives a uniform contraction bound less than one. Shrink a closed ball about that fixed point and then the parameter neighborhood so the map preserves that ball, as in step 3.2. The local contraction and differentiability proof in the three preceding chart steps thus applies in $Y$ to give a $C^q$ family $y(p)$, hence $x(p)=Q(p)y(p)$. Uniqueness from step 2.1 identifies it with the quantitative correction. The zero target or zero kernel cases are included: the relevant ball is a singleton and the stated maps and formulas still apply. All infinite objects used were explicit convergent sequences or series, so no stronger choice axiom entered. This proves all assertions. [step 2.1, step 3.2, step 4.1, step 5.1, construct, cases] ∎
