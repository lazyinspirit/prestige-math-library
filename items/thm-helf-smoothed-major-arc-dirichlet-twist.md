---
id: thm-helf-smoothed-major-arc-dirichlet-twist
kind: theorem
title: "Explicit Major-Arc Estimate for the Smoothed von Mangoldt Twist"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-smoothed-prime-exponential-sum
  - lem-helf-general-explicit-formula-for-smoothed-dirichlet-twists
  - thm-platt-bounded-grh-for-primitive-dirichlet-l-functions
  - cor-jensen-zero-counting-bound
  - thm-dirichlet-character-orthogonality
  - thm-dirichlet-l-euler-product
  - thm-primitive-dirichlet-l-functional-equation
  - lem-fourier-transform-of-a-gaussian
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "H. A. Helfgott, Major arcs for Goldbach's problem"
      url: "https://arxiv.org/pdf/1305.2897v4"
      locator: "Theorem 1.4, printed p. 4; §4.6, printed pp. 56–58."
    - title: "David J. Platt, Numerical Computations Concerning the GRH, arXiv:1305.3087v1"
      url: "https://arxiv.org/pdf/1305.3087v1"
      locator: "§7, Theorem 7.1, printed p. 14; imported under the run authorization."
---

## Statement

Define $h(t)=t^2(2-t)^3e^{t-1/2}$ for $0\le t\le2$ and $h(t)=0$ otherwise. For $H>0$, put
$$F_H(y)=\begin{cases}\dfrac{\sin(H\log y)}{\pi\log y},&y\ne1,\\[2pt]\dfrac H\pi,&y=1,\end{cases}\qquad h_H(t)=\int_0^\infty h(t/y)F_H(y)\,\frac{dy}{y},\qquad \eta_+(t)=h_{200}(t)t e^{-t^2/2}.$$
For every real $x\ge10^{12}$, every primitive Dirichlet character $\chi$ modulo $q$ with $1\le q\le150{,}000$ when $q$ is odd or $1\le q\le300{,}000$ when $q$ is even, and every $\delta\in\mathbb R$ satisfying $|\delta|\le600{,}000\,\gcd(q,2)/q$, there is a complex $E$ such that
$$S_{\eta_+,\chi}(\delta/x,x)=\mathbf1_{q=1}\widehat{\eta_+}(-\delta)x+Ex,$$
where $S_{\eta_+,\chi}(\delta/x,x)=\sum_{n\ge1}\Lambda(n)\chi(n)e(\delta n/x)\eta_+(n/x)$ and $\widehat{\eta_+}(\xi)=\int_0^\infty\eta_+(t)e(-\xi t)\,dt$, and
$$|E|\le\frac{6.18\cdot10^{-12}}{\sqrt q}+\frac{1.14\cdot10^{-10}}q+\frac1{\sqrt x}\left(\frac{499100}{\sqrt q}+52\right).$$
For $q=1$ the sharper bound $|E|\le3.34\cdot10^{-11}+251100/\sqrt x$ holds. Put $r(q)=150{,}000$ for odd $q$ and $r(q)=300{,}000$ for even $q$. The source proof uses $T_H(q)=200+250r(q)/q$, which is at most
$$T_q=\begin{cases}\max(10^8/q,\;7.5\cdot10^7/q+200),&q\text{ even},\\[2pt]\max(10^8/q,\;37.5\cdot10^6/q+200),&q\text{ odd},\end{cases}$$
the Platt finite zero-verification height, whose parity convention is the parity of the modulus $q$.

## Statement references

[[def-smoothed-prime-exponential-sum|$S_\eta$ uses $e(t)=e^{2\pi it}$ and the von Mangoldt weights $\Lambda(n)$]]

[[def-primitive-dirichlet-character-and-conductor|primitive means not induced from a proper divisor of the modulus]]

[[lem-helf-general-explicit-formula-for-smoothed-dirichlet-twists|the smoothed $L'/L$ explicit formula with zero sum and stated error]]

[[thm-platt-bounded-grh-for-primitive-dirichlet-l-functions|the finite zero-verification height $T_q$ with parity taken from the modulus]]

[Helfgott, *Major arcs for Goldbach's problem*, Theorem 1.4 and §4.6](https://arxiv.org/pdf/1305.2897v4)

[Platt, *Numerical Computations Concerning the GRH*, §7 Theorem 7.1](https://arxiv.org/pdf/1305.3087v1)

## Partial proof of the smoothing interface

The following verifies the smoothing interface to the explicit formula. It does not establish the quantitative major-arc constants. For $H>0$ define $h,F_H,h_H$ as in that theorem and put $\eta_H(t)=t e^{-t^2/2}h_H(t)$ for $t>0$, $\eta_H(0)=0$. Then $\eta_H\in C^1([0,\infty))$, $\eta_H(0)=\eta_H'(0)=0$, and
$$\|\eta_H\|_2+\|\eta_H'\|_2<\infty,\qquad\int_0^\infty (|\eta_H(t)|+|\eta_H'(t)|)t^{\sigma-1}dt<\infty\quad(\sigma>0).$$
In particular $\eta_+=\eta_{200}$ satisfies the full hypotheses of the repaired general explicit formula for every real twist $\delta$.

**Proof.** Set $g(v)=h(e^v)$. Since $h$ vanishes above $2$ and $|h(t)|\le8e^{3/2}t^2$ for $0\le t\le2$,
$$\|g\|_1=\int_0^2|h(t)|\frac{dt}t\le16e^{3/2}<\infty.$$
Writing $t=e^v$ and $y=e^u$ gives
$$h_H(e^v)=\int_{\mathbb R}g(v-u)\frac{\sin(Hu)}{\pi u}du.$$
The kernel is continuous at $u=0$ with value $H/\pi$ and bounded by that value, so this integral is absolutely convergent. Since
$$\frac{\sin(Hu)}{\pi u}=\frac1{2\pi}\int_{-H}^{H}e^{i\xi u}d\xi,$$
finite Fubini gives
$$h_H(e^v)=\frac1{2\pi}\int_{-H}^{H}\widehat g(\xi)e^{i\xi v}d\xi,\qquad\widehat g(\xi)=\int_{\mathbb R}g(u)e^{-i\xi u}du.$$
Here $\widehat g$ is continuous and bounded by $\|g\|_1$. Differentiation under the compact frequency integral gives a continuous derivative in $v$, with the concrete bounds
$$|h_H(e^v)|\le\frac H\pi\|g\|_1,\qquad\left|\frac d{dv}h_H(e^v)\right|\le\frac{H^2}{2\pi}\|g\|_1.$$
The Riemann–Lebesgue lemma applied to the two integrable compactly supported functions $1_{[-H,H]}\widehat g$ and $1_{[-H,H]}\xi\widehat g$ shows that both displayed quantities tend to zero as $v\to-\infty$. It can be proved for these particular functions by finite step-function approximation and integration of each exponential; no arbitrary sequence of choices is needed.

Writing $H_0(v)=h_H(e^v)$, for $t>0$ we have
$$\eta_H'(t)=e^{-t^2/2}\left[(1-t^2)H_0(\log t)+H_0'(\log t)\right].$$
The two limits at $-\infty$ give $\eta_H(t)/t\to0$ and $\eta_H'(t)\to0$ as $t\downarrow0$. Thus the extension by zero is $C^1$ and both values at zero vanish. The bounds above imply $|\eta_H(t)|\ll_H t e^{-t^2/2}$ and $|\eta_H'(t)|\ll_H(1+t^2)e^{-t^2/2}$. These dominate both square integrals and the weighted integrals for every $\sigma>0$: near zero the latter behave no worse than $t^{\sigma-1}$, and at infinity the Gaussian dominates every power. This verifies the explicit-formula interface. ∎


## Partial quantitative smoothing bounds

For the exact weight in `thm-helf-smoothed-major-arc-dirichlet-twist`, with $H=200$,
$$\|\eta_+\|_2<\frac{20011}{25000}=0.80044.$$
This proves one concrete numerical input in Helfgott §B.3. It does not provide the remaining transform, zero-tail or derivative-norm estimates needed for the major-arc theorem.

**Proof.** Write $g(v)=h(e^v)$ and let $g_H(v)=h_H(e^v)$. The compact-frequency representation in `smoothing-interface.md` gives $g_H(v)=(2\pi)^{-1}\int_{-H}^H\widehat g(\xi)e^{i\xi v}d\xi$. Put $P_0(t)=t^2(2-t)^3=8t^2-12t^3+6t^4-t^5$ and define $P_{j+1}(t)=t(P_j'(t)+P_j(t))$. For $t=e^v<2$, $g^{(j)}(v)=e^{t-1/2}P_j(t)$. The first two derivatives join continuously to zero at $v=\log2$, while $g'''$ jumps from $-192e^{3/2}$ to zero. Four integrations by parts, with this boundary jump included, give
$$|\widehat g(\xi)|\le\frac{\operatorname{Var}(g''')}{|\xi|^4},\qquad \operatorname{Var}(g''')\le\int_{-\infty}^{\log2}|g^{(4)}(v)|dv+192e^{3/2}.$$
The fourth polynomial is $$P_4(t)=128t^2-452t^3-124t^4+537t^5+27t^6-97t^7-20t^8-t^9.$$
Write $R(t)=P_4(t)/t$. An exact midpoint ledger on $N=10000$ equal subintervals of $[0,2]$ gives
$$\frac2N\sum_{i=0}^{N-1}\left|R\!\left(\frac{2i+1}{N}\right)\right|<367.$$
The coefficient bound $|R'(t)|\le\sum_j j|r_j|2^{j-1}=51376$ on $[0,2]$ gives total midpoint error at most $51376/N$. The rational exponential-series bound $e^{3/2}<9/2$ therefore yields
$$\int_{-\infty}^{\log2}|g^{(4)}(v)|dv=\int_0^2e^{t-1/2}|R(t)|dt<\frac92\left(367+\frac{51376}{10000}\right)<1700,$$
while the jump is $<864$. Thus $\operatorname{Var}(g''')<2564$ and Fourier inversion gives, uniformly in $v$,
$$|g_{200}(v)-g(v)|\le\frac1\pi\int_{200}^\infty\frac{2564}{\xi^4}d\xi<\frac{2564}{9\cdot200^3},$$
using $\pi>3$. All Fourier integrals here are absolutely convergent; the inversion may be proved by Gaussian regularization and the explicit integrable $|\xi|^{-4}$ tail.

Put $\eta_{\mathrm{base}}(t)=t e^{-t^2/2}h(t)$. Its norm is exactly
$$\|\eta_{\mathrm{base}}\|_2^2=\int_{-1}^1(1-u^2)^6e^{-u^2}du.$$
On $0\le u^2\le1$, the alternating exponential series through the positive fourth term is an upper bound. Integrating the finite polynomial gives
$$\|\eta_{\mathrm{base}}\|_2^2\le\sum_{k=0}^{4}\sum_{j=0}^{6}\frac{2(-1)^{k+j}\binom6j}{k!(2(k+j)+1)}=\frac{1643776}{2567565}<\left(\frac{4001}{5000}\right)^2.$$
Finally $\|t e^{-t^2/2}\|_2<1$, so the preceding sup bound and the triangle inequality imply
$$\|\eta_+\|_2<\frac{4001}{5000}+\frac{2564}{9\cdot200^3}<\frac{20011}{25000}.$$
Every midpoint is the rational $(2i+1)/N$. `research/number-theory-all-141-2026-10-25-escalations/helf-major-arc-interface/norm-certificate.py` replays the finite midpoint inequality, derivative coefficient bound, fourth-order exponential integral and final rational comparisons with integers and fractions only. The bound $e^{3/2}<9/2$ is also checked there by nine exponential-series terms plus a geometric upper tail. No external finite-computation input is used. ∎

### Derivative and weighted norms

The same Fourier tail also gives
$$\|\eta_+'\|_2<7<10.845789,\qquad \int_0^\infty|\eta_+(t)|(t^{-1/2}+t^{1/2})dt<2,\qquad \int_0^\infty|\eta_+'(t)|(t^{-1/2}+t^{1/2})dt<6.$$
Consequently the explicit-formula origin bound satisfies
$$c_0<4+\frac{8\pi}3|\delta|<6.536232+9.319578|\delta|.$$

Indeed, the variation bound also yields $\sup|g_{200}'-g'|\le2564/(2\pi200^2)<11/1000$ and the preceding bound is $d_0:=\sup|g_{200}-g|<36/10^6$. For the unfiltered base, with $u=t-1$,
$$\eta_{\mathrm{base}}'(t)=-u e^{-u^2/2}\bigl[6(1-u^2)^2+(1-u^2)^3\bigr]\quad(0<t<2),$$
and it vanishes outside $[0,2]$. Hence $|\eta_{\mathrm{base}}'|\le7|u|$, so its squared $L^2$ norm is at most $98/3<36$. The derivative difference is
$$\eta_+'-\eta_{\mathrm{base}}'=e^{-t^2/2}\bigl[(1-t^2)(g_{200}-g)(\log t)+(g_{200}'-g')(\log t)\bigr].$$
Both $\|e^{-t^2/2}\|_2$ and $\|(1-t^2)e^{-t^2/2}\|_2$ are $<1$, by the Gaussian moments and $\pi<4$. Thus $\|\eta_+'\|_2<6+d_0+11/1000<7$.

For $A=\int|\eta_+|(t^{-1/2}+t^{1/2})dt$, dropping $e^{-(t-1)^2/2}$ from the base and integrating the polynomial gives
$$A\le\frac{59392\sqrt2}{45045}+5d_0<2.$$
The error factor $5$ follows by splitting at $t=1$ and bounding $t^{1/2}+t^{3/2}$ by $2t^2$ on $[1,\infty)$. For $A'=\int|\eta_+'|(t^{-1/2}+t^{1/2})dt$, use $|\eta_{\mathrm{base}}'|\le7|1-t|[t(2-t)]^2$ and split the elementary integral at $1$:
$$A'\le\frac{10928-256\sqrt2}{2145}+14d_0+6\frac{11}{1000}<6.$$
The Gaussian integrals multiplying $d_0$ and the derivative error are $<14$ and $<6$, respectively: on $(0,1)$ bound $1+t^2\le2$, and on $[1,\infty)$ bound the relevant weighted expressions by $4t^3$ and $2t^2$. The explicit Gaussian moments are $\int_0^\infty t^3e^{-t^2/2}dt=2$ and $\int_0^\infty2t^2e^{-t^2/2}dt=\sqrt{2\pi}<3$. Substituting $A<2$ and $A'<6$ into the exact residue bound gives $c_0<4+(8\pi/3)|\delta|$; $\pi<22/7$ gives the final comparison. The final rational inequalities are included in the same exact replay. ∎


## Partial critical-zero smoothing norms

The same bounds give
$$\|\eta_+(t)\log t\|_2<\frac{321}{1000}<0.8299818,\qquad\int_0^\infty\frac{|\eta_+(t)|}{\sqrt t}dt<\frac{965}{1000}.$$
For the base weight, use $e^{-(t-1)^2/2}\le1$, $-\log t\le(1-t)/t$ on $(0,1]$, and $\log t\le t-1$ on $[1,2]$. Expanding the resulting polynomials gives
$$\|\eta_{\mathrm{base}}(t)\log t\|_2^2\le\int_0^1(1-t)^2t^4(2-t)^6dt+\int_1^2(t-1)^2t^6(2-t)^6dt=\frac{3049}{30030}<\left(\frac{319}{1000}\right)^2.$$
For the low-pass difference, the already proved inequality $|\log t|\le\frac23(t^{-1/2}+t^{1/2})$ gives
$$\int_0^\infty t^2e^{-t^2}|\log t|^2dt\le\frac89\int_0^\infty(t+t^3)e^{-t^2}dt=\frac89<1.$$
Hence $\|(\eta_+-\eta_{\mathrm{base}})\log t\|_2\le d_0$. For the second displayed norm, direct integration after dropping the Gaussian gives
$$\int_0^2\frac{|\eta_{\mathrm{base}}(t)|}{\sqrt t}dt\le\frac{2048\sqrt2}{3003},\qquad \int_0^\infty t^{1/2}e^{-t^2/2}dt<3.$$
Using $\sqrt2<99/70$, the bound $d_0<36/10^6$ and the exact rational comparisons in the same replay proves both claims. These bounds control the smoothing norms used by the source's low-zero estimate; they do not supply its explicit zero-count input. ∎


## Partial explicit high-zero bound

The partial zero-count argument uses [[cor-jensen-zero-counting-bound]], [[thm-dirichlet-character-orthogonality]], [[thm-dirichlet-l-euler-product]] and [[thm-primitive-dirichlet-l-functional-equation]]; the local Fourier argument uses [[lem-fourier-transform-of-a-gaussian]].

This local quantitative bound applies to the exact $\eta_+$ in the held major-arc theorem. It proves absolute convergence of its zero sum, but is deliberately much coarser than Helfgott's exponential estimate and does not imply the numerical constants in the major-arc Statement.

For a primitive character modulo $q\ge1$, $\delta\in\mathbb R$, $k\ge3$, define $\lambda=44|\delta|/7$ and polynomials with nonnegative coefficients by
$$P_0(t)=1,\qquad P_{j+1}(t)=tP'_j(t)+(2+t^2+\lambda t)P_j(t).$$
Let $J_0=9/7$, $J_1=1$, and $J_{m+2}=(m+1)J_m$. For $P=\sum_m c_mt^m$ put $I(P)=\sum_m c_m(J_m+J_{m+1})$, and set
$$C_k(\delta)=4800\sum_{j=0}^k\binom kj200^j I(P_{k-j}).$$
Then for $T\ge4$,
$$\sum_{\substack{\rho\text{ nontrivial}\\|\operatorname{Im}\rho|>T}}|G_\delta(\rho)|\le876C_k(\delta)(T-2)^{1-k}\left(\frac{\log(6q(T-2))}{k-1}+\frac1{(k-1)^2}\right).$$
In particular the sum converges absolutely, with multiplicities, even without the finite-GRH hypothesis. The coefficient is an explicit rational polynomial in $|\delta|$.

### Explicit zero-window count Let $t\in\mathbb R$, $s_0=3/2+it$, $r=10/7$ and $R=149/100$. For $q>1$, partial summation and character orthogonality give $L(s,\chi)=s\int_1^\infty A_\chi(u)u^{-s-1}du$ on $\Re s>0$, with $|A_\chi(u)|\le q$. For $q=1$, the same calculation for $(s-1)\zeta(s)$ uses $\lfloor u\rfloor=u-\{u\}$. Both are holomorphic in the disk $|s-s_0|\le R$; on its boundary their modulus is at most $200q(|t|+3)^2$. At the center, the Euler product gives $|L(s_0,\chi)|\ge1/\zeta(3/2)\ge1/3$; in the $q=1$ modified function, the extra factor $|s_0-1|\ge1/2$ leaves a lower bound $1/6$. Jensen's inequality therefore bounds the number of zeros in $|s-s_0|\le r$ by
$$\frac{\log(1200q(|t|+3)^2)}{\log(1043/1000)}\le\frac{1043}{43}\,9\log(q(|t|+3))<219\log(q(|t|+3)).$$
Here $\log(1+u)\ge u/(1+u)$ and $1200<3^7$. The rectangle $1/2\le\Re s\le1$, $|\Im s-t|\le1$ lies inside the smaller disk. The same-character functional symmetry $\rho\mapsto1-\overline\rho$ gives the other half of the critical strip with the same ordinate, so all zeros in a unit window are bounded by twice this quantity. Applying it at both positive and negative heights bounds the zeros with $n\le|\Im\rho|<n+1$ by $876\log(q(n+4))$. No false equality between positive- and negative-ordinate counts is used.

### Transform bound Put $g(v)=h(e^v)$ and $g_{200}(v)=h_{200}(e^v)$. The finite-frequency representation in the smoothing-interface proof gives $$|g_{200}^{(j)}(v)|\le200^j B,\qquad B=\frac{200}{\pi}\|g\|_1<4800,$$
using $\|g\|_1\le16e^{3/2}<72$ and $\pi>3$. For $s=\beta+i\gamma$, $0\le\beta\le1$, the Mellin integrand in $v=\log t$ is $g_{200}(v)A_\beta(v)e^{i\gamma v}$ with $$A_\beta(v)=t^{\beta+1}e^{-t^2/2}e^{2\pi i\delta t},\qquad t=e^v.$$
Repeated differentiation and the recurrence for $P_j$ imply $|D_v^jA_\beta(v)|\le t^{\beta+1}e^{-t^2/2}P_j(t)$. The boundary terms vanish at both ends. Since $t^\beta\le1+t$, $\pi<22/7$ and the exact Gaussian moments obey $\int_0^\infty t^m e^{-t^2/2}dt\le J_m$, $k$ integrations by parts give $$|G_\delta(\beta+i\gamma)|\le C_k(\delta)|\gamma|^{-k}\qquad(\gamma\ne0).$$
The $J_m$ are rational upper bounds: the zeroth Gaussian moment is $\sqrt{\pi/2}<9/7$, the first is $1$, and integration by parts gives the displayed recurrence.

### Tail Sum the transform bound over the unit windows. For $T\ge4$, comparison with an integral gives
$$\sum_{n\ge\lfloor T\rfloor}\frac{\log(q(n+4))}{n^k}\le\int_{T-2}^\infty\frac{\log(6qu)}{u^k}du=(T-2)^{1-k}\left(\frac{\log(6q(T-2))}{k-1}+\frac1{(k-1)^2}\right).$$
Multiplying by $876C_k(\delta)$ proves the displayed bound. All cutoffs, recurrences and constants are explicit; no external finite computation or symmetric-ordinate equality is used. ∎


## Partial explicit low-zero bound

Under the exact smoothing hypotheses and finite-GRH condition in the major-arc consumer, let $T\ge1$ and suppose all nontrivial zeros of $L(s,\chi)$ with $|\Im\rho|\le T$ lie on $\Re\rho=1/2$. Then
$$\sum_{|\Im\rho|\le T}|G_\delta(\rho)|\le876\sqrt{T+2}\,\log(q(T+5)).$$
This is an explicit quantitative bound without the source's positive/negative-ordinate symmetry assumption. It is much coarser than the source's estimate and does not establish the stated final major-arc constants.

**Proof.** The explicit Jensen argument in `explicit-polynomial-zero-tail.md` shows that every unit-ordinate window on the right half of the critical strip contains at most $219\log(q(|t|+3))$ zeros. On the finite-GRH range every counted zero is in that half. Put $M=219\log(q(T+5))$; every interval of radius one centered within $[-T-1,T+1]$ contains at most $M$ such zeros, counted with multiplicity. Covering $[-T,T]$ by at most $T+2$ intervals of length two gives $N(T)\le(T+2)M$.

For $F(u)=G_\delta(1/2+iu)$, elementary averaging and the fundamental theorem of calculus give, for every real $v$,
$$|F(v)|^2\le2\int_{v-1}^{v+1}(|F(u)|^2+|F'(u)|^2)du.$$
The interval overlap is at most $M$ on the relevant range, so summing over zeros gives
$$\sum_{|\Im\rho|\le T}|F(\Im\rho)|^2\le2M\int_{\mathbb R}(|F(u)|^2+|F'(u)|^2)du.$$
The smoothing-interface proof and the two exact norm bounds give $\eta_+,\eta_+\log t\in L^1\cap L^2$. With $t=e^v$, their Fourier transforms are $F(u)$ and $F'(u)/i$. Gaussian regularization gives the ordinary Plancherel identity for these two explicit functions, without a choice-qualified general $L^2$ extension:
$$\int_{\mathbb R}(|F|^2+|F'|^2)du=2\pi(\|\eta_+\|_2^2+\|\eta_+\log\|_2^2)<2\pi,$$
because $(20011/25000)^2+(321/1000)^2<1$. Cauchy–Schwarz now yields
$$\sum_{|\Im\rho|\le T}|F(\Im\rho)|\le\sqrt{N(T)}\sqrt{4\pi M}<4M\sqrt{T+2},$$
using $\pi<4$. This is the stated coefficient $4\cdot219=876$. The argument counts each sign separately as it occurs and never equates their counts. ∎


## Partial certified high-zero contribution

Under the exact conductor and $\delta$ ranges in `thm-helf-smoothed-major-arc-dirichlet-twist`, let $T_q$ be the full authorized Platt height stated there. Then, for the exact $\eta_+$ and every $x\ge1$,
$$\frac1x\sum_{\substack{\rho\text{ nontrivial}\\|\Im\rho|>T_q}}|G_\delta(\rho)x^\rho|<10^{-14}.$$
Every nontrivial zero has $0<\Re\rho<1$, so the factor $x^{\Re\rho-1}$ is at most one. This upper bound is smaller than the theorem's displayed $6.18\cdot10^{-12}/\sqrt q+1.14\cdot10^{-10}/q$ for every eligible $q$, and is also smaller than its separate $q=1$ allowance $3.34\cdot10^{-11}$. This proves the high-zero part only; it does not prove the remaining low-zero numerical estimate.

### Band split and rotated Mellin bound Retain the notation of `explicit-exponential-zero-tail.md`: $g(v)=h(e^v)$, $H=200$, $F_\delta(w)=\int_0^\infty t^{w-1}e^{-t^2/2}e^{2\pi i\delta t}dt$, and
$$G_\delta(s)=\frac1{2\pi}\int_{-200}^{200}\widehat g(r)F_\delta(s+1-ir)dr.$$
The exact local frequency-mass ledger gives $(2\pi)^{-1}\int_{\mathbb R}|\widehat g|<51/10$, and the four-integration bound gives
$$\frac1{2\pi}\int_{|r|>100}|\widehat g(r)|dr\le\frac{2564}{3\pi\,100^3}<\frac{2564}{9\cdot100^3}.$$
Split at $|r|=100$. For any $0<\theta\le29/100$, define
$$a=\cos(2\theta),\quad b=2\pi|\delta|\sin\theta,\quad Q=(1+b/a)\sqrt{2\pi/a}+1/a,\quad z=e^{-\theta}.$$
The contour rotation proved in the exponential-tail note gives, on the inner and outer bands respectively,
$$|G_{\delta,\mathrm{in}}(\beta+i\gamma)|\le\frac{51}{10}Qe^{b^2/(2a)}e^{-\theta(|\gamma|-100)},\qquad |G_{\delta,\mathrm{out}}(\beta+i\gamma)|\le\frac{2564}{9\cdot100^3}Qe^{b^2/(2a)}e^{-\theta(|\gamma|-200)}$$
for $0\le\beta\le1$ and $|\gamma|>200$. The precise Jensen argument already inlined in the consumer bounds the zeros with $n\le|\Im\rho|<n+1$ by $876\log(q(n+4))$, without assuming any symmetry between positive and negative ordinates. With $m=\lfloor T_q\rfloor$, summing windows and using $\log(q(n+4))\le\log(q(m+4))+(n-m)/(m+4)$ yields a common factor
$$876Q\left[\frac{\log(q(m+4))}{1-z}+\frac{z}{(m+4)(1-z)^2}\right]$$
times the sum of the two displayed band masses and exponentials.

### Uniform exact certificate Put $r=150000$ for odd $q$ and $r=300000$ for even $q$. The given $\delta$ condition is $|\delta|\le4r/q$. In the two ranges use respectively
$$\theta(q)=\min\!\left(\frac{29}{100},\frac{18q}{25r}\right),\qquad \theta(q)=\min\!\left(\frac{29}{100},\frac{9q}{25r}\right).$$
The local replay `research/number-theory-all-141-2026-10-25-escalations/helf-major-arc-interface/high-zero-certificate.py` covers **all** integers $1\le q\le r$ in both ranges, hence in particular the required parity classes. It groups them into 5592 and 6284 disjoint intervals, respectively. For a group $q\in[L,U]$, $\theta_L\le\theta(q)\le\theta_U$ and
$$m\ge m_L:=\left\lfloor\max\!\left(\frac{10^8}{U},200+\frac{250r}{U}\right)\right\rfloor.$$
It uses only the following rational one-sided enclosures:
$$a\ge a_L:=1-2\theta_U^2+\frac{(2\theta_U)^4}{24}-\frac{(2\theta_U)^6}{720},$$
$$b\le b_U:=\frac{176r}{7}\min\!\left(\frac{k}{r},\frac{29}{100L}\right)\left(1-\frac{\theta_L^2}{6}+\frac{\theta_L^4}{120}\right),$$
where $k=18/25$ or $9/25$; $1-e^{-\theta}\ge\theta_L-\theta_L^2/2$; and $Q\le3(1+b_U/a_L)+1/a_L$, since the replay verifies $2\pi/a_L<9$ using $\pi<22/7$. The sine ratio bound follows from the alternating Taylor series and its monotonicity on $[0,29/100]$.

Also $\log(q(m+4))<20$: $q(m+4)\le\max(10^8+4q,250r+204q)<2\cdot10^8$, and the replay verifies $e^{20}>2\cdot10^8$ by a finite positive exponential sum. For each band the exponent is bounded above by $-X_R$, where
$$X_R=\theta_L(m_L-R)-\frac{b_U^2}{2a_L},\qquad R\in\{100,200\}.$$
The replay confirms $X_{200}>41$ in every group. It computes a lower bound for $e^{X_R}$ using 100 positive series terms at scale $10^{12}$, rounding **down** at each integer multiplication/division; its reciprocal is therefore a rigorous upper bound for $e^{-X_R}$. All other operations are exact rational arithmetic. For every group, the resulting complete two-band upper bound is strictly below $10^{-14}$. The final comparison uses $q\le300000<550^2$, so $6.18\cdot10^{-12}/\sqrt q>6.18\cdot10^{-12}/550>10^{-14}$.

The replay prints:
```text
covered conductor intervals: [(150000, 5592), (300000, 6284)]
smallest certified exponent > 41: True
all split-band high-zero tails < 1e-14: True
both displayed major-arc high-zero allowances exceed 1e-14: True
```
This is an explicit local rational certificate and does not import any additional finite computation. The only finite zero verification used to delimit the high-zero range is the exact run-authorized Platt theorem. ∎


## Proof obligation

The certified high-zero contribution is now supplied under the exact stated ranges. The sharper critical-zero estimate and final numerical budget in the stated major-arc theorem remain to be reconstructed.
