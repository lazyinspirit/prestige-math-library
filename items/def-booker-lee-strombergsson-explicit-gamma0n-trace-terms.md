---
id: def-booker-lee-strombergsson-explicit-gamma0n-trace-terms
kind: definition
title: Booker–Lee–Strömbergsson Explicit Γ₀(N) Trace-Formula Terms
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - lem-dirichlet-character-factorization-under-crt
  - lem-pure-even-character-excludes-2-adic-conductor-exponents-one-and-two
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "§2.1–§2.2, local character factorization, Theorem 2.1, equations (2.13)–(2.28), (2.33)–(2.34); printed pp. 11–16."
---

## Facts & Assumptions

**Given:** $N\ge1$, a Dirichlet character $\chi$ modulo $N$ with $\chi(-1)=1$, and its conductor $q\mid N$.

[F1] [[def-dirichlet-character-modulo-q]]: a Dirichlet character is a homomorphism on the unit group of its modulus and is extended by zero on nonunits.

[F2] [[def-primitive-dirichlet-character-and-conductor]]: the conductor is the modulus of the unique primitive ancestor.

[F3] [[lem-dirichlet-character-factorization-under-crt]]: CRT gives unique local factors $\chi_p$ with $\chi=\prod_{p\mid N}\chi_p$, and $s_p=\operatorname{ord}_p(q)$ is each factor's least exponent.

[F4] [[lem-pure-even-character-excludes-2-adic-conductor-exponents-one-and-two]]: if $\chi$ is even and each odd local factor takes $-1$ to $1$, then $s_2$ is neither $1$ nor $2$.

## Definition

Let $N\ge1$, and let $\chi$ be a Dirichlet character modulo $N$ satisfying
$\chi(-1)=1$ (an even character). Put
$q=\operatorname{cond}(\chi)\mid N$. Write $N=\prod_{p\mid N}p^{e_p}$ and
$q=\prod_{p\mid N}p^{s_p}$. For each prime $p\mid N$, put
$e_p=\operatorname{ord}_p(N)$ and $s_p=\operatorname{ord}_p(q)$. Write
$\chi=\prod_{p\mid N}\chi_p$, where $\chi_p$ is the local Dirichlet-character
factor modulo $p^{e_p}$, extended by zero on nonunits. Set $e_2=s_2=0$ when
$2\nmid N$. For a nonzero integer $a$, $\operatorname{ord}_p(a)$ is the
largest $k\ge0$ for which $p^k\mid a$; set $\operatorname{ord}_p(0)=+\infty$.
Let $h$ be an even function, holomorphic on
$|\operatorname{Im}r|\le\frac12+\delta$ for some $\delta>0$, and satisfying
$|h(r)|\le A(1+|\operatorname{Re}r|)^{-2-\delta}$ there. Put
$$g(u)=\frac1{2\pi}\int_{\mathbb R}h(r)e^{-iru}\,dr.$$
Here $\Gamma(z)$ is Euler's gamma function in the analytic factors below,
while $\Gamma$ without an argument denotes the matrix group defined below;
$\log$ is the natural logarithm,
$\Lambda(m)=\log p$ when $m$ is a positive power of a prime $p$ and
$\Lambda(m)=0$ otherwise, and $\omega(N)=\#\{p:p\mid N\}$. For a condition
$P$, write $\mathbf 1_P=1$ if $P$ holds and $0$ otherwise. The floor
$\lfloor x\rfloor$ is the greatest integer not exceeding $x$.

Call $\chi$ pure if $\chi_p(-1)=1$ for every odd prime $p\mid N$. Define
$$I_\chi=\mathbf 1_{\chi\text{ is pure}},\qquad
I_{q,4}=\mathbf 1_{p\equiv1\pmod4\text{ for every }p\mid q}.$$
For integers $t$ and $n\in\{1,-1\}$ with $D=t^2-4n$ not a rational square,
write uniquely $D=d\ell^2$ with $\ell\in\mathbb Z_{>0}$ and $d$ a fundamental
discriminant. A fundamental discriminant is a squarefree integer congruent
to $1$ modulo $4$, or an integer $4D_0$ where $D_0$ is squarefree and
$D_0\equiv2$ or $3\pmod4$. Put
$$K_d=\mathbb Q(\sqrt d),\qquad
\mathfrak r[f]=\mathbb Z+f\frac{d+\sqrt d}{2}\mathbb Z,\qquad
H(d)=h^+(K_d),$$
where $h^+(K_d)$ is the narrow ideal-class number. For $d>0$, a unit is
totally positive if both real embeddings are positive; let $\epsilon_1>1$
generate this group of units of $\mathfrak r[1]$. For $d<0$, put
$\mathfrak r[1]^1=\{u\in\mathfrak r[1]^\times:N_{K_d/\mathbb Q}(u)=1\}$.
The symbol $\bigl(\frac d p\bigr)$ is the Kronecker symbol: for odd $p$ it is
the Legendre symbol, and at $p=2$ it is $0$ for even $d$, $1$ for
$d\equiv\pm1\pmod8$, and $-1$ for $d\equiv\pm3\pmod8$.

For $e\ge1$ and $0\le s\le e$, define
$$\Psi_1(p^e,p^s)=
\begin{cases}
2p^{e-s},&e<2s,\\
p^{\lfloor e/2\rfloor}+p^{\lfloor(e-1)/2\rfloor},&e\ge2s,
\end{cases}$$
and, for $e\ge0$ and $0\le s\le e$,
$$\Psi_2(p^e,p^s)=
\begin{cases}
1,&e=0,\\
2e,&p\text{ odd},\ e>0,\ s=0,\\
2(e-2s+1),&p\text{ odd},\ s>0,\ e\ge2s,\\
e+1,&p=2,\ e\in\{1,2\},\ s=0,\\
2(e-1),&p=2,\ e\in\{3,4\},\ s=0,\\
4(e-3),&p=2,\ e\ge5,\ s=0,\\
4(e-2s-1),&p=2,\ s\ge3,\ e\ge2s+1,\\
0,&\text{otherwise}.
\end{cases}$$
For $e\ge0$ and $0\le s\le e$, define the character-dependent factor by
$$\widetilde\Psi_2(p^e,\chi_p)=
\begin{cases}
1,&e=0,\\
\min\{e+1,4\},&p=2,\ s=0,\\
2,&p\equiv-1\pmod4,\ s=0,\\
\chi_p(i)\Psi_2(p^e,p^s),&p\equiv1\pmod4\text{ and }\chi_p\text{ is even},\\
0,&\text{otherwise},
\end{cases}$$
where the $e=0$ value $1$ is the formal empty-factor convention; for $e\ge1$
$\chi_p$ is a local character modulo $p^e$ with conductor exponent $s$. In the
fourth case $i$ is either square root of $-1$ modulo $p$, and $\chi_p$ is even, meaning
$\chi_p(-1)=1$. The value is independent of the choice of $i$. For
$e\ge0$ and $0\le s\le e$, define
$$\Psi_3(p^e,p^s)=
\begin{cases}
0,&e=0,\\
p^{e-s}(4s-1),&e<2s,\\
\bigl(p^{\lfloor e/2\rfloor}+p^{\lfloor(e-1)/2\rfloor}\bigr)
\left(e-\frac1{p-1}\right)+\frac2{p-1}
+\mathbf 1_{s>0}\left(p^{s-1}+2\frac{p^{s-1}-1}{p-1}\right),&e\ge2s.
\end{cases}$$
For $j=1,2$, put
$$\Psi_j(N,q)=\prod_{p\mid N}\Psi_j(p^{e_p},p^{s_p}),\qquad
\widetilde\Psi_2(N,\chi)=\prod_{p\mid N}\widetilde\Psi_2(p^{e_p},\chi_p).$$
All products over an empty prime set have value $1$.

Define
$$\Omega_1(N,q)=
\begin{cases}
1,&0\le e_2\le1\text{ or }s_2=e_2,\\
\frac32,&e_2=2,\ s_2<e_2,\\
2,&e_2\ge3,\ s_2<e_2,
\end{cases}$$
and define the coefficient $\Omega_2^\chi(N,q)$, which is the only
occurrence of $I_\chi\Omega_2(N,q)$ in the formula below, by
$$\Omega_2^\chi(N,q)=
\begin{cases}
0,&I_\chi=0,\\
\frac12-\frac34e_2,&I_\chi=1,\ 0\le e_2\le2,\\
-2,&I_\chi=1,\ e_2\ge3,\ s_2=0,\\
-2s_2,&I_\chi=1,\ e_2>s_2\ge3,\\
-e_2,&I_\chi=1,\ e_2=s_2\ge3.
\end{cases}$$
These cases exhaust the $I_\chi=1$ possibilities by the pure-even character
2-adic conductor lemma: evenness gives $\chi_2(-1)=1$ when $2\mid N$, while
the unit group modulo $2$ is trivial and the only nontrivial character modulo
$4$ is odd. Consequently $\Omega_2^\chi=I_\chi\Omega_2$ on every case where
the source uses it; setting it to zero when $I_\chi=0$ makes the coefficient
total.

For $m\ge1$ and $p\mid N$, put
$$w_\pm(p,m)=\max\{s_p,e_p-\operatorname{ord}_p(\pm m^2-1)\},\qquad
\Phi_\pm(p^{e_p},m)=\Psi_1(p^{e_p},p^{w_\pm(p,m)}).$$
Let $\operatorname{Re}(z)$ denote the real part of a complex number $z$.
Let
$$B_p(m)=\frac12\bigl(\chi_p(m)+\chi_p(-m)\bigr).$$
Let $\mathbb Z_p$ be the ring of $p$-adic integers. For $\alpha,k\ge1$, set
$$\mathcal R_{p,\alpha,k}(n,t)=
\{\xi+p^k\mathbb Z_p:\xi\in\mathbb Z_p,\ \xi^2-t\xi+n\in p^\alpha\mathbb Z_p\};$$
in the sums below $k\ge e_p$, so evaluating $\chi_p$ on a residue class means
reducing it modulo $p^{e_p}$ and is independent of the representative.
For $p\mid N$, put $e=e_p$, $f=\operatorname{ord}_p(\ell)$ and
$$
S_p(p^e,\chi_p;t,n)=
\sum_{\xi\in\mathcal R_{p,e+2f,e+f}(n,t)}\chi_p(\xi)
+\mathbf 1_{p\mid d}\sum_{\xi\in\mathcal R_{p,e+2f+1,e+f}(n,t)}\chi_p(\xi)
+\left(p-\left(\frac d p\right)\right)
\sum_{\beta\in\{0,1\}}\sum_{j=1}^{f}p^{j-1}
\sum_{\xi\in\mathcal R_{p,e+2f-2j+\beta,e+f-j}(n,t)}\chi_p(\xi).
$$
For $p\nmid N$, put
$$S_p(1,1;t,n)=1+\left(p-\left(\frac d p\right)\right)
\frac{p^{\operatorname{ord}_p(\ell)}-1}{p-1}.$$
The product $\prod_p S_p$ has only finitely many factors different from $1$.

For $D=t^2-4n$, define
$$A_{t,n}[h]=
\begin{cases}
\displaystyle\frac{\log\epsilon_1}{\sqrt D}
g\!\left(\log\frac{(|t|+\sqrt D)^2}{4}\right),&D>0,\\[6pt]
\displaystyle\frac{2}{|\mathfrak r[1]^1|\sqrt{-D}}
\int_{\mathbb R}\frac{e^{-2r\arccos(|t|/2)}}{1+e^{-2\pi r}}h(r)\,dr,&D<0.
\end{cases}$$
Here the second case has $d<0$, so $\mathfrak r[1]^1$ is finite, and
$\arccos$ takes values in $[0,\pi]$.

Let $G=\operatorname{PGL}_2(\mathbb R)$ and
$\operatorname{PSL}_2(\mathbb Z)=\operatorname{SL}_2(\mathbb Z)/\{\pm I\}$.
Define
$$\Gamma_0(N)=\left\{\left[\begin{psmallmatrix}a&b\\c&d_0\end{psmallmatrix}\right]
\in\operatorname{PSL}_2(\mathbb Z):N\mid c\right\},\qquad
V=\begin{psmallmatrix}-1&0\\0&1\end{psmallmatrix},\qquad
\Gamma=\Gamma_0^\pm(N)=\langle\Gamma_0(N),V\rangle<G.$$
For
$n\in\{1,-1\}$, define the three explicit formula terms by
$$I(\Gamma,\chi;n)=\frac{1+n}{2}
\frac{N\prod_{p\mid N}(1+p^{-1})}{12}
\int_{\mathbb R}rh(r)\tanh(\pi r)\,dr,$$
$$
(NEll+Ell)(\Gamma,\chi;n)=
\sum_{\substack{t\in\mathbb Z,\ D=t^2-4n=d\ell^2\\
\sqrt D\notin\mathbb Q}}
A_{t,n}[h]H(d)
\prod_{p\mid N}S_p(p^{e_p},\chi_p;t,n)
\prod_{p\nmid N}S_p(1,1;t,n),
$$
where the second product has finite support, and
$$\begin{aligned}
(C+Eis)(\Gamma,\chi;1)={}&
\Psi_1(N,q)\left\{\frac14h(0)-\frac1{2\pi}\int_{\mathbb R}h(r)
\left(\frac{\Gamma'}{\Gamma}\left(\frac12+ir\right)
+\frac{\Gamma'}{\Gamma}(1+ir)\right)dr\right\}
-\frac14I_\chi\Psi_2(N,q)h(0)
\\&+\left\{\Psi_1(N,q)\log\frac\pi2
-\sum_{p\mid N}\Psi_3(p^{e_p},p^{s_p})
\prod_{\substack{p'\mid N\\p'\ne p}}
\Psi_1(p'^{e_{p'}},p'^{s_{p'}})\log p\right\}g(0)
\\&+2\sum_{\substack{m\ge1\\(m,q)=1}}\frac{\Lambda(m)}m
\prod_{\substack{p\mid N\\p\nmid m}}
\bigl[(\operatorname{Re}\chi_p(m))\Phi_+(p^{e_p},m)\bigr]g(2\log m),
\end{aligned}$$
and
$$\begin{aligned}
(C+Eis)(\Gamma,\chi;-1)={}&
\frac14I_\chi\left\{2^{\omega(N)}\Omega_1(N,q)
-I_{q,4}\widetilde\Psi_2(N,\chi)\right\}h(0)
-\frac{I_\chi2^{\omega(N)}\Omega_1(N,q)}{2\pi}
\int_{\mathbb R}h(r)\frac{\Gamma'}{\Gamma}(1+ir)\,dr
\\&+2^{\omega(N)}\left\{I_\chi\Omega_1(N,q)
\left(\log\pi-\sum_{\substack{p\mid N\\p>2}}
\max\left\{\frac12,s_p\right\}\log p\right)
+\Omega_2^\chi(N,q)\log2\right\}g(0)
\\&+2\sum_{\substack{m\ge1\\(m,q)=1}}\frac{\Lambda(m)}m
\prod_{\substack{p\mid N\\p\nmid m}}
\bigl[B_p(m)\Phi_-(p^{e_p},m)\bigr]g(2\log m).
\end{aligned}$$
The symbols $I$, $NEll+Ell$, and $C+Eis$ therefore denote respectively the
identity contribution, the elliptic and nonelliptic discriminant sum, and the
combined continuous-spectrum and Eisenstein contribution; the latter has the
two displayed parity branches.

## Definition references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

