---
id: ex-slit-plane-green-function-from-square-root
kind: example
title: "Green kernel of a slit plane via the square-root map"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-biholomorphic-map
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-domain
  - def-complex-power-from-holomorphic-logarithm-branch
  - def-green-function-plane-domain
  - lem-log-modulus-is-harmonic-off-its-centre
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-maximum-and-minimum-principles-for-plane-harmonic-functions
  - thm-slit-plane-root-branch-biholomorphism-to-a-sector
sources:
  references:
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Section 10.3, printed pp. 164-166: Green functions of simply connected domains and the square-root model"
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, Section 3"
      url: https://arxiv.org/pdf/1010.3760
      locator: "Section 3, PDF pp. 19-25: Green functions with a logarithmic pole, exterior maps and the slit plane"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Example

Let $\Omega=\mathbb C\setminus(-\infty,0]$ be the slit plane, let $a,z\in\Omega$
with $z\ne a$, and let $\sqrt{\ }$ be the principal square root of
[[def-complex-power-from-holomorphic-logarithm-branch]], so that
$\operatorname{Re}\sqrt{w}>0$ for $w\in\Omega$. Then the canonical Green kernel
of [[def-green-function-plane-domain]] is
$$g_\Omega(z,a)=\log\left|\frac{\sqrt z+\overline{\sqrt a}}{\sqrt z-\sqrt a}\right|.$$
The kernel tends to zero at every point of the slit and at infinity. This is an
unbounded domain, and no general Euclidean boundary map is used: the boundary
value at the slit is read off directly from the explicit formula.

## Facts & Assumptions

**Given:** The slit plane $\Omega=\mathbb C\setminus(-\infty,0]$, points $a,z\in\Omega$ with $z\ne a$, and the right half-plane $H=\{w\in\mathbb C:\operatorname{Re}w>0\}$. Conjugates and moduli are those of [[def-complex-conjugate-real-imaginary-part-and-modulus]], complex domains are those of [[def-complex-domain]], and the canonical Green kernel is that of [[def-green-function-plane-domain]].

[F1] For a proper plane domain $D$ and $b\in D$ the canonical Green function $g_D(\cdot,b)$, when it exists, is the pointwise least nonnegative function that is harmonic on $D\setminus\{b\}$ and satisfies: $g_D(\cdot,b)+\log|\cdot-b|$ extends harmonically across $b$ ([[def-green-function-plane-domain]]).

[F2] For every integer $n\ge1$, the map $R_n(z)=\exp(\operatorname{Log}z/n)$ is a biholomorphism from the slit plane onto the sector $V_n=\{re^{i\theta}:r>0,\ |\theta|<\pi/n\}$, with inverse $w\mapsto w^n$; for $n=2$ this is a biholomorphism $\sqrt{\ }:\Omega\to H$ with inverse $w\mapsto w^2$, and both $\Omega$ and $H$ are complex domains ([[thm-slit-plane-root-branch-biholomorphism-to-a-sector]], [[def-biholomorphic-map]], [[def-complex-power-from-holomorphic-logarithm-branch]]).

[F3] The function $\log|\cdot|$ is harmonic on $\mathbb C\setminus\{0\}$ ([[lem-log-modulus-is-harmonic-off-its-centre]]), and the composition of a harmonic function with a holomorphic map is harmonic ([[thm-conformal-invariance-of-plane-harmonicity]]).

[F4] If $u$ is continuous on the closure of a bounded complex domain and harmonic inside, then $\sup_{\overline D}u=\sup_{\partial D}u$ and $\inf_{\overline D}u=\inf_{\partial D}u$ ([[thm-maximum-and-minimum-principles-for-plane-harmonic-functions]]).

## Verification

**Proof technique:** direct.

1.1 Put $\beta:=\sqrt a$, so that $\beta\in H$ by [F2] and $\operatorname{Re}\beta>0$. Define $$q(w):=\log|w+\overline\beta|-\log|w-\beta|\qquad(w\in H\setminus\{\beta\}).$$ The translations $w\mapsto w+\overline\beta$ and $w\mapsto w-\beta$ are holomorphic and are nonzero on $H$ and $H\setminus\{\beta\}$, respectively; by [F3], their logarithmic moduli are harmonic on those sets. (The real part of $w-\beta$ may vanish away from $\beta$, but the complex number $w-\beta$ is still nonzero there.) Hence $q$ is harmonic on $H\setminus\{\beta\}$. Writing $w=u+iv$ with $u=\operatorname{Re}w$ and $\beta=\alpha+i\gamma$, $\alpha>0$, gives $|w+\overline\beta|^2-|w-\beta|^2=(u+\alpha)^2-(u-\alpha)^2=4u\alpha$, so $|w+\overline\beta|\ge|w-\beta|$ with equality exactly on the imaginary axis; thus $q\ge0$ on $H$. Finally $q(w)+\log|w-\beta|=\log|w+\overline\beta|$ is harmonic across $w=\beta$, since $\beta+\overline\beta=2\alpha\ne0$ makes $w+\overline\beta$ nonvanishing near $\beta$. So $q$ is a nonnegative logarithmic-pole candidate at $\beta$ in the sense of [F1]. [F1, F2, F3, given, algebra]

2.1 Let $k$ be any nonnegative logarithmic-pole candidate at $\beta$ on $H$ and put $u:=k-q$. On $H\setminus\{\beta\}$ the function $u$ is harmonic as a difference of harmonic functions, and it extends harmonically across $\beta$: by the defining property in [F1] both $k(w)+\log|w-\beta|$ and $q(w)+\log|w-\beta|=\log|w+\overline\beta|$ are harmonic in a neighbourhood of $\beta$, and $u$ is their difference off $\beta$. [F1, step 1.1]

2.2 Define $G(z):=q(\sqrt z)=\log\bigl|(\sqrt z+\overline\beta)/(\sqrt z-\beta)\bigr|$ for $z\in\Omega\setminus\{a\}$. Then $G\ge0$ by step 1.1, and $G$ is harmonic on $\Omega\setminus\{a\}$ by [F3], because $\sqrt{\ }:\Omega\to H$ is holomorphic by [F2] and $\sqrt z=\beta$ holds exactly for $z=a$, by the inverse property in [F2]. [F2, F3, step 1.1]

3.1 Fix $R>|\beta|$ and $\delta\in(0,\alpha/2)$, where $\alpha=\operatorname{Re}\beta$, and set $D:=\{w:\operatorname{Re}w>\delta,\ |w|<R\}$, a bounded complex domain with $\overline D\subseteq H$. By step 2.1 the function $-u$ is harmonic on $D$ and continuous on $\overline D$, so its supremum on $\overline D$ is attained on $\partial D$ by [F4]. On the circular arc $\{|w|=R,\ \operatorname{Re}w\ge\delta\}$ one has $|w+\overline\beta|\le R+|\beta|$ and $|w-\beta|\ge R-|\beta|>0$, hence $$-u=q-k\le q\le\log\frac{R+|\beta|}{R-|\beta|}=:c_R,$$ because $k\ge0$ and $q\ge0$. On the vertical segment $\{\operatorname{Re}w=\delta,\ |w|\le R\}$ one has $-u\le q$ and, since $|w-\beta|\ge\alpha/2$ there, $$|w+\overline\beta|-|w-\beta|=\frac{|w+\overline\beta|^2-|w-\beta|^2}{|w+\overline\beta|+|w-\beta|}=\frac{4\delta\alpha}{|w+\overline\beta|+|w-\beta|}\le\frac{4\delta\alpha}{\alpha/2}=8\delta,$$ so $q=\log\bigl(1+\frac{|w+\overline\beta|-|w-\beta|}{|w-\beta|}\bigr)\le\frac{8\delta}{\alpha/2}=\frac{16\delta}{\alpha}$. Therefore $-u\le\max\{c_R,16\delta/\alpha\}$ on $D$. Letting $\delta\downarrow0$ for fixed $w\in H$ with $R>|w|$ gives $-u(w)\le c_R$, and letting $R\to\infty$ gives $-u(w)\le0$, since $c_R=\log\bigl(1+\frac{2|\beta|}{R-|\beta|}\bigr)\to0$. Hence $k\ge q$ on $H$, and $q$ is the canonical Green kernel $g_H(\cdot,\beta)$ of the half-plane by [F1]. [F1, F4, step 1.1, step 2.1, algebra]

3.2 The function $G$ has the logarithmic pole at $a$. For $z\in\Omega\setminus\{a\}$ the factorization $z-a=(\sqrt z-\beta)(\sqrt z+\beta)$ of [F2] gives $\log|\sqrt z-\beta|=\log|z-a|-\log|\sqrt z+\beta|$, hence $$G(z)+\log|z-a|=\log|\sqrt z+\overline\beta|+\log|\sqrt z+\beta|=\log\bigl|z+2(\operatorname{Re}\beta)\sqrt z+|\beta|^2\bigr|,$$ and the holomorphic function $h(z):=z+2(\operatorname{Re}\beta)\sqrt z+|\beta|^2$ on $\Omega$ satisfies $h(a)=4\beta\operatorname{Re}\beta\ne0$. So $z\mapsto\log|h(z)|$ is harmonic on a neighbourhood of $a$ by [F3], and $G+\log|\cdot-a|$ extends harmonically across $a$. Together with steps 1.1 and 2.2 this shows that $G$ is a nonnegative logarithmic-pole candidate at $a$ on $\Omega$. [F1, F2, F3, step 2.2, algebra]

4.1 Leastness on $\Omega$: let $k$ be any nonnegative logarithmic-pole candidate at $a$ on $\Omega$ and define $K(w):=k(w^2)$ for $w\in H$. Then $K\ge0$, and $K$ is harmonic on $H\setminus\{\beta\}$ by [F3], since $w\mapsto w^2$ is holomorphic by [F2] and $w^2=a$ holds exactly for $w=\beta$. Moreover, for $w\ne\beta$ the identity $w^2-a=(w-\beta)(w+\beta)$ gives $$K(w)+\log|w-\beta|=\bigl(k(w^2)+\log|w^2-a|\bigr)-\log|w+\beta|,$$ where $k(\cdot)+\log|\cdot-a|$ is harmonic near $a$ by [F1], so its composition with $w\mapsto w^2$ is harmonic near $\beta$, and $\log|w+\beta|$ is harmonic near $\beta$ because $2\beta\ne0$. Thus $K$ is a nonnegative logarithmic-pole candidate at $\beta$ on $H$, and step 3.1 gives $K\ge q$ on $H$. For $z\in\Omega$, writing $z=w^2$ with $w=\sqrt z\in H$ by [F2], we obtain $k(z)=K(w)\ge q(w)=G(z)$. Hence every candidate dominates $G$, so $G$ is the pointwise least candidate and $g_\Omega(z,a)=G(z)=\log\bigl|(\sqrt z+\overline{\sqrt a})/(\sqrt z-\sqrt a)\bigr|$ by [F1]. [F1, F2, F3, step 3.1, step 2.2, step 3.2, algebra]

5.1 Boundary limits on the slit. Let $\zeta\le0$ and let $z_n\in\Omega$ with $z_n\to\zeta$; put $w_n:=\sqrt{z_n}\in H$. Since $w_n^2=z_n$, the identity $2(\operatorname{Re}w_n)^2=|w_n|^2+\operatorname{Re}(w_n^2)=|z_n|+\operatorname{Re}z_n$ gives $\operatorname{Re}w_n\to0$ because $|z_n|+\operatorname{Re}z_n\to|\zeta|+\zeta=0$ for $\zeta\le0$. Consequently $|w_n+\overline\beta|^2-|w_n-\beta|^2=4(\operatorname{Re}w_n)(\operatorname{Re}\beta)\to0$ by step 1.1, while $|w_n-\beta|\ge\operatorname{Re}\beta-\operatorname{Re}w_n\ge\operatorname{Re}\beta/2$ for all large $n$; hence the quotient $|w_n+\overline\beta|/|w_n-\beta|$ tends to $1$ and $g_\Omega(z_n,a)=q(w_n)\to0$. So the kernel has limit $0$ at every point of the slit $(-\infty,0]=\partial\Omega$. [F2, step 1.1, step 4.1, algebra]

6.1 Limit at infinity. For $|z|>4|\beta|^2$ one has $|w|=|\sqrt z|>2|\beta|$, so $$0\le g_\Omega(z,a)=q(w)\le\log\frac{|w|+|\beta|}{|w|-|\beta|}=\log\Bigl(1+\frac{2|\beta|}{|w|-|\beta|}\Bigr)\le\frac{2|\beta|}{|w|-|\beta|},$$ which tends to $0$ as $|z|\to\infty$. Thus the kernel vanishes at the slit and at infinity, as claimed; all of the above is an explicit choice-free calculation, the boundary behaviour being read off from the formula $z\mapsto q(\sqrt z)$ rather than from any Euclidean boundary correspondence. [given, step 1.1, step 4.1, algebra] ∎
