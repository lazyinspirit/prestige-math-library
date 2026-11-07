---
id: ex-interval-zero-count-certificate
kind: example
title: "Check a bounded zero-count certificate by interval arithmetic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - thm-turing-zero-count-certificate-is-sound
  - alg-interval-arithmetic-for-l-function-zero-counts
  - alg-turing-method-for-rigorous-zero-counts
proof_strategy: direct
sources:
  references:
    - title: "David J. Platt, Isolating some non-trivial zeros of zeta, §§4–5"
      url: "https://community.ams.org/journals/mcom/2017-86-307/S0025-5718-2017-03198-7/S0025-5718-2017-03198-7.pdf"
---

## Example

For the toy holomorphic function $F(z)=1$, take the square $D=\{x+iy:-\tfrac12\le x\le\tfrac12,\ -\tfrac12\le y\le\tfrac12\}$ with positive boundary orientation. Parameterize each edge linearly on $[0,1]$ and use that edge as one target rectangle. A Taylor certificate centred at $0$ with radius $R=2$, target radius $r=1$, degree $100$, coefficients $A_0=[1,1]$ and $A_k=[0,0]$ for $1\le k\le100$, and boundary bound $M=1$ is checked by interval arithmetic and gives zero zeros inside $D$. This toy certificate illustrates the bounded contour checker and makes no claim about a zeta or Dirichlet $L$-function computation.

```tikz
\begin{tikzpicture}
\draw (-0.5,-0.5) -- (0.5,-0.5) -- (0.5,0.5) -- (-0.5,0.5) -- cycle;
\draw[->] (-0.2,-0.5) -- (0.2,-0.5);
\draw[->] (0.5,-0.2) -- (0.5,0.2);
\draw[->] (0.2,0.5) -- (-0.2,0.5);
\draw[->] (-0.5,0.2) -- (-0.5,-0.2);
\fill (0,0) circle (1.5pt);
\node[below left] at (0,0) {$0$};
\node[above right] at (0.5,0.5) {$D$};
\end{tikzpicture}
```

The arrows show the positive orientation; the marked point is the centre of $D$, where $F(0)=1$.

## Example references

[David J. Platt, *Isolating some non-trivial zeros of zeta*, §§4–5](https://community.ams.org/journals/mcom/2017-86-307/S0025-5718-2017-03198-7/S0025-5718-2017-03198-7.pdf)

[[alg-interval-arithmetic-for-l-function-zero-counts]]

[[alg-turing-method-for-rigorous-zero-counts]]

## Facts & Assumptions

**Given:** The exact constant function $F(z)=1$, the positively oriented square $D$, and the stated Taylor certificate.

[F1] [[alg-interval-arithmetic-for-l-function-zero-counts]]: for target radius $r<R$, its value and derivative errors are $E_0=M(r/R)^{n+1}/(1-r/R)$ and $E_1=(M/R)(r/R)^n((n+1)/(1-r/R)+(r/R)/(1-r/R)^2)$.

[F2] [[alg-turing-method-for-rigorous-zero-counts]]: if every boundary value enclosure excludes $0$ and the normalized integral enclosure has a unique integer in its real interval and contains $0$ in its imaginary interval, the algorithm returns that integer.

[F3] [[thm-turing-zero-count-certificate-is-sound]]: an accepted valid certificate returns the exact weighted zero count about the boundary.

## Verification

1.1 The function is entire, its Taylor coefficients are exactly $a_0=1$ and $a_k=0$ for $k\ge1$, and $|F(z)|=1$ on $|z|=2$, so the input bounds are valid. The square edges lie in $|z|\le\sqrt{1/2}<r=1$. Thus [F1] with $\rho=r/R=1/2$ and $n=100$ gives $E_0=2^{-100}$ and $E_1=102\cdot2^{-100}$. The value boxes are $V_j=[1-E_0,1+E_0]+i[-E_0,E_0]$, and the derivative boxes are $W_j=[-E_1,E_1]+i[-E_1,E_1]$. [given, F1, algebra]

1.2 For the interval routine with $N=1$, $A_1(1/5)=74/375$ and $e_1(1/5)=1/15625$, so $\alpha:=\arctan(1/5)\in[74/375,74/375+1/15625]$; also $0<\beta:=\arctan(1/239)<1/239$. The tangent double-angle formula gives $\tan(2\alpha)=5/12$ and $\tan(4\alpha)=120/119$, whence $\tan(4\alpha-\beta)=\frac{120/119-1/239}{1+120/(119\cdot239)}=1$. The bounds $4\alpha>4(74/375)>0.78$, $\beta<1/239<0.01$, and $4\alpha<4/5<1<\pi/2$ place $4\alpha-\beta$ in $(0,\pi/2)$; the last inequality follows because the unit circle circumference exceeds the perimeter of its inscribed square. Hence $4\alpha-\beta=\pi/4$ and $\pi=16\alpha-4\beta$. Exact rational comparison gives $3<16(74/375)-4/239<\pi<16(74/375+1/15625)<4$. Thus the routine's rational interval for $\pi$ lies in $(3,4)$. [given, F1, algebra]

2.1 On every edge $V_j$ excludes $0$. Interval division gives reciprocal real and imaginary coordinate bounds $(1+E_0)/(1-E_0)^2$ and $E_0/(1-E_0)^2$, respectively. Multiplying by $W_j$ shows that each coordinate of the integrand rectangle $G_j=W_j\gamma'/V_j$ is bounded in absolute value by $C=E_1(1+2E_0)/(1-E_0)^2$, since each edge derivative has modulus $1$. [F1, step 1.1, algebra]

3.1 Each edge has parameter length $1$, so summing the four integral rectangles bounds each coordinate of the contour integral by $4C$. Dividing by $2\pi i$ using $\pi>3$ bounds each coordinate of the returned rectangle $Q$ by $2C/3$. Since $E_0<1/1000$, $E_1<1/10000$, and $(1+2E_0)/(1-E_0)^2<2$, we have $2C/3<1/7500<1/1000$. Thus $Q\subset[-1/1000,1/1000]+i[-1/1000,1/1000]$; its real interval contains exactly the integer $0$, and its imaginary interval contains $0$. By [F2] the algorithm returns $0$. [given, F1, F2, step 2.1, algebra]

4.1 The constant function $F(z)=1$ has no zeros or poles, so its weighted zero count is $0$. This agrees with the returned value by [F3]. [given, F3, step 3.1] ∎
