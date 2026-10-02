---
id: lem-nevanlinna-poisson-jensen-derivative-bound
kind: lemma
title: "Separated-radius Poisson–Jensen derivative bound"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-poisson-jensen-formula-meromorphic-function
  - def-nevanlinna-counting-proximity-and-characteristic
  - thm-nevanlinna-quantities-well-defined
  - thm-nevanlinna-first-main-theorem
  - thm-nevanlinna-characteristic-elementary-laws
  - thm-jensens-integral-inequality
  - thm-zero-order-factorization-holomorphic-function
  - thm-pole-characterizations
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Goldberg–Ostrovskii, Value Distribution of Meromorphic Functions"
      url: "https://www.math.purdue.edu/~eremenko/dvi/GOmainfile.pdf"
      locator: "Ch. 3 §1, Theorem 1.1 and its proof, printed pp. 88–89: the separated-radius derivative estimate (1.1) with the intermediate estimates (1.3) and (1.3′)"
    - title: "I. Laine, Complex Analysis III lecture notes"
      url: "https://integraali.com/courses/lecture_notes/Laine_Complex_analysis_3_notes.pdf"
      locator: "§§5–6.1, printed pp. 35–43: the lemma on the logarithmic derivative with separated radii"
---

## Statement

Let $f$ be a nonconstant meromorphic function on $\mathbb C$, let $0<\alpha<1$,
and let $2\le r<R$. Denote by $m_0$ the standard proximity,
$m_0(r,f'/f)=\frac1{2\pi}\int_0^{2\pi}\log^+|f'(re^{it})/f(re^{it})|\,dt$,
with the logarithmic singularities interpreted as an integrable angular
integrand. Then there are constants $C_{f,\alpha}<\infty$ (depending only on
$f$ and $\alpha$) and $C_\alpha<\infty$ (depending only on $\alpha$) with
$$ m_0(r,f'/f)\le C_{f,\alpha}+C_\alpha\Bigl(\log^+T(R,f)+\log R+\log^+\frac1{R-r}\Bigr). $$
No limit $R\downarrow r$ is asserted: the bound depends on the separation
$R-r$.

## Facts & Assumptions

**Given:** A nonconstant meromorphic $f$ on $\mathbb C$, $0<\alpha<1$ and radii $2\le r<R$.

[F1] Poisson–Jensen formula on $|z|<s$: for meromorphic $h$ on a neighbourhood of $|z|\le s$ with no zero or pole on $|z|=s$, $\log|h(z)|=\frac1{2\pi}\int_0^{2\pi}P_s(z,se^{it})\log|h(se^{it})|dt-\sum m_bG_s(\cdot)$ contributions of the zeros and poles, with $G_s(z,a)=\log\bigl|\frac{s^2-\bar az}{s(z-a)}\bigr|$; at a divisor radius the identity is the limit through regular radii ([[thm-poisson-jensen-formula-meromorphic-function]]).

[F2] Counting, proximity and characteristic: for finite $w$, $\log\frac1{\delta(w,\infty)}=\frac12\log(1+|w|^2)$; $T=m(\cdot,\infty)+N(\cdot,\infty)$; the centre-regularized count is $N(r,a;h)=n(0,a;h)\log r+\int_0^r\frac{n(t,a;h)-n(0,a;h)}{t}dt$ ([[def-nevanlinna-counting-proximity-and-characteristic]]). The bounds $\log^+|w|\le\frac12\log(1+|w|^2)$ and $\log^+|1/w|\le\frac12\log(1+|w|^{-2})$ control the two standard proximities separately.

[F3] First Main Theorem for nonconstant meromorphic $h$, with exact centre constant: $m(r,a;h)+N(r,a;h)=T(r,h)+C(h,a)$ for every sphere target $a$, with $C(h,\infty)=0$; for finite $a$ and $h(z)-a=c_az^{k_a}+\dots$, $C(h,a)=\frac12\log(1+|a|^2)-\log|c_a|$ ([[thm-nevanlinna-first-main-theorem]]). In particular $m(r,a;h)\le T(r,h)+C(h,a)$.

[F4] Characteristic laws: $T(r,1/h)=T(r,h)+O_h(1)$ and $T(r,gh)\le T(r,g)+T(r,h)+O(1)$ as $r\to\infty$ ([[thm-nevanlinna-characteristic-elementary-laws]]).

[F5] $n(r,a;h)$ is finite on bounded discs, and $N(\cdot,a;h)$ and $m(\cdot,a;h)$ are finite and continuous; for $s<R$, $N(R,a;h)-N(s,a;h)=\int_s^R n(t,a;h)\frac{dt}{t}$ ([[thm-nevanlinna-quantities-well-defined]]).

[F6] A zero of finite order $k$ at the centre factors as $h(z)=z^kg(z)$ with $g$ holomorphic and $g(0)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F7] At a pole, the reciprocal has a zero of the same order ([[thm-pole-characterizations]]).

[F8] On a probability space, Jensen's integral inequality for the convex function $x\mapsto-\log(1+x)$ gives $\mathbb E\log(1+X)\le\log(1+\mathbb E X)$ for nonnegative integrable $X$; the logarithm is integrable since $\log(1+X)\le X$ ([[thm-jensens-integral-inequality]]).

## Proof

**Proof technique:** normalize the centre value; differentiate the Poisson–Jensen formula; bound the boundary kernel by the characteristic and the divisor kernels by $1/|z-c|$; use $\alpha$-power angular means and Jensen's inequality to obtain the proximity bound.

1.1 (Reduction to centre value $1$) Let $k\in\mathbb Z$ be the signed order of $f$ at $0$ (negative for a pole), and write $f(z)=c z^k h(z)$ with $c\ne0$, $h$ meromorphic on $\mathbb C$, and $h(0)=1$. The local zero and pole factorizations justify this form; when $k=0$, take $c=f(0)$. Then $f'/f=k/z+h'/h$. The proximity sum inequality gives, for $r\ge2$, $$m_0(r,f'/f)\le m_0(r,h'/h)+\log^+(|k|/r)+\log2\le m_0(r,h'/h)+\log^+|k|+\log2,$$ where the $k/z$ term is zero when $k=0$. If $h$ is constant then $h\equiv1$, so $f'/f=k/z$ and $m_0(r,f'/f)\le\log^+|k|$ for $r\ge2$, proving the stated bound directly with a constant depending on $f$. In all subsequent steps assume $h$ is nonconstant. The characteristic laws and the direct rational-map estimate $T(R,c^{-1}z^{-k})=|k|\log R+O_f(1)$ for $R\ge2$ give $$T(R,h)\le T(R,f)+|k|\log R+O_f(1).$$ [F4, F6, F7, algebra]

1.2 (Vanishing centre constants) For $h$ with $h(0)=1$, [F3] gives $C(h,0)=\frac12\log1-\log1=0$ and $C(h,\infty)=0$, hence $m(s,0;h)+N(s,0;h)=T(s,h)=m(s,\infty;h)+N(s,\infty;h)$. For every $w$ one has $\log^+|w|\le\frac12\log(1+|w|^2)$ and $\log^+\frac1{|w|}\le\frac12\log(1+|w|^{-2})$, so taking angular means gives $ \frac1{2\pi}\int_0^{2\pi}\bigl|\log|h(se^{it})|\bigr|dt\le m(s,0;h)+m(s,\infty;h)\le2T(s,h). $ [F2, F3, algebra]

1.3 (Differentiated Poisson–Jensen) Let $0<r<s<R$ with $|z|=s$ carrying no zero or pole of $h$; [F1] applies on $|z|<s$. Differentiation in $z$ of [F1], whose boundary kernel and Green kernels are smooth for $|z|<s$ and whose divisor sum is finite, gives for $|z|<s$ $ \frac{h'(z)}{h(z)}=\frac1{2\pi}\int_0^{2\pi}\log|h(se^{it})|\frac{2se^{it}}{(se^{it}-z)^2}\,dt+\sum_{h(c)=0}\frac{s^2-|c|^2}{(s^2-\bar cz)(z-c)}-\sum_{p\ \mathrm{pole}}\frac{s^2-|p|^2}{(s^2-\bar pz)(z-p)}, $ the divisor sums running over the zeros and poles in $|z|<s$ with multiplicity; at a radius $s$ meeting the divisor, take regular $s_j\downarrow s$ and pass to the limit using the continuity of [F5]. [F1, F5, algebra]

1.4 (Angular integral of one kernel) For any $c$ and every $\varphi$ one has $|re^{i\varphi}-c|\ge r|\sin\varphi|$ after rotating $c$ to $|c|$: indeed $r^2-2r|c|\cos\varphi+|c|^2-r^2\sin^2\varphi=(r\cos\varphi-|c|)^2\ge0$. Hence, using $\sin\varphi\ge2\varphi/\pi$ on $[0,\pi/2]$, $ \frac1{2\pi}\int_0^{2\pi}\frac{d\varphi}{|re^{i\varphi}-c|^\alpha}\le\frac1{2\pi r^\alpha}\int_0^{2\pi}\frac{d\varphi}{|\sin\varphi|^\alpha}\le\frac{2}{(1-\alpha)r^\alpha}. $ [algebra]

2.1 (Kernel bounds) For $|z|=r<s$: $\bigl|\frac{2se^{it}}{(se^{it}-z)^2}\bigr|\le\frac{2s}{(s-r)^2}$; and for a divisor point $c$ with $|c|<s$, using $|s^2-\bar cz|\ge s^2-|c|r$, $ \Bigl|\frac{s^2-|c|^2}{(s^2-\bar cz)(z-c)}\Bigr|=\frac{(s+|c|)(s-|c|)}{|s^2-\bar cz|\,|z-c|}\le\frac{s+|c|}{s}\cdot\frac1{|z-c|}\le\frac2{|z-c|}, $ because $\frac{(s-|c|)s}{s^2-r|c|}\le1$ for $0\le|c|<s$ and $r<s$. [step 1.3, algebra]

3.1 (Pointwise bound) Combining steps 1.3 and 2.1 with step 1.2 at $|z|=r$, $ \Bigl|\frac{h'(z)}{h(z)}\Bigr|\le\frac{2s}{(s-r)^2}\cdot2T(s,h)+2\sum_{|c|<s}\frac1{|z-c|}=\frac{4sT(s,h)}{(s-r)^2}+2\Sigma(z), $ where the last sum extends over all zeros and poles of $h$ in $|z|<s$ (each repeated according to multiplicity) and is finite by [F5]. [F5, step 1.2, step 1.3, step 2.1, algebra]

4.1 ($\alpha$-power mean) Fix $\alpha\in(0,1)$. By $(x+y)^\alpha\le x^\alpha+y^\alpha$ for $x,y\ge0$, $ \frac1{2\pi}\int_0^{2\pi}\Bigl|\frac{h'(re^{i\varphi})}{h(re^{i\varphi})}\Bigr|^\alpha d\varphi\le\Bigl(\frac{4sT(s,h)}{(s-r)^2}\Bigr)^\alpha+\frac{2^\alpha}{2\pi}\int_0^{2\pi}\Sigma(re^{i\varphi})^\alpha d\varphi, $ and $\Sigma(re^{i\varphi})^\alpha\le\sum_{|c|<s}|re^{i\varphi}-c|^{-\alpha}$ again by the subadditivity for exponent $\alpha<1$. [step 3.1, algebra]

4.2 (Counting the divisor) Let $n(s;0,\infty):=n(s,0;h)+n(s,\infty;h)$. From [F5], $N(R,a;h)-N(s,a;h)\ge n(s,a;h)\log(R/s)$ for $a=0,\infty$; by [F3], $N(R,a;h)\le T(R,h)+C(h,a)$, and $\log\frac Rs\ge\frac{R-s}{R}$ for $s<R$. With $s:=\frac{R+r}2$ this gives $n(s,a;h)\le\frac{2R\,(T(R,h)+C(h,a))}{R-r}$, hence $ n(s;0,\infty)\le\frac{4R\,T(R,h)}{R-r}+C_h' $ for a constant $C_h'\ge0$. [F3, F5, step 3.1, algebra]

5.1 (Proximity bound) On normalized angular measure put $X(\varphi):=|h'(re^{i\varphi})/h(re^{i\varphi})|^\alpha$, defined arbitrarily at its measure-zero singularities. Step 4.1 gives $X\in L^1$, so $\log(1+X)\in L^1$. For $u\ge0$, $\log^+u\le\alpha^{-1}\log(1+u^\alpha)$; applying this pointwise and [F8] to $X$ yields $$m_0(r,h'/h)\le\frac1\alpha\log\left(1+\frac1{2\pi}\int_0^{2\pi}X(\varphi)\,d\varphi\right).$$ For $s=\frac{R+r}2$, steps 4.1 and 4.2 bound the integral mean by $A^\alpha+B$, where $$A:=\frac{16RT(R,h)}{(R-r)^2},\qquad B:=\frac{2^{\alpha+1}}{(1-\alpha)r^\alpha}\left(\frac{4RT(R,h)}{R-r}+C_h'\right).$$ Thus $m_0(r,h'/h)\le\alpha^{-1}\log(1+A^\alpha+B)$. Since $r\ge2$, $$\log(1+A^\alpha+B)\le\log3+\log^+A+\log^+B,$$ while $\log^+A\le\log^+T(R,h)+\log R+2\log^+\frac1{R-r}+\log16$ and $$\log^+B\le C_\alpha+C_h+\log^+T(R,h)+\log R+\log^+\frac1{R-r}.$$ Absorbing fixed terms into $C_{h,\alpha}$ and enlarging $C_\alpha$ proves the required bound. [F8, step 1.2, step 4.1, step 4.2, algebra]

6.1 (Undoing the normalization) By step 1.1, $T(R,h)\le T(R,f)+O_f(\log R)$ and $\log^+T(R,h)\le\log^+T(R,f)+\log R+O_f(1)$ for $R\ge2$ after enlarging the fixed constants, by continuity on any remaining compact radius interval; absorbing the constants depending on $f$ (including $\log^+|k|$ and the fixed normalization terms) into $C_{f,\alpha}$ and the numerical factors into $C_\alpha$ yields $ m_0(r,f'/f)\le C_{f,\alpha}+C_\alpha\Bigl(\log^+T(R,f)+\log R+\log^+\frac1{R-r}\Bigr) $ for all $2\le r<R$. [step 1.1, step 5.1, algebra] ∎
