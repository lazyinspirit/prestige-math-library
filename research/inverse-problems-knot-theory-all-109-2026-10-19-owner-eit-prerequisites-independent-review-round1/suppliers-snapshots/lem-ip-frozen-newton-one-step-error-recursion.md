---
id: lem-ip-frozen-newton-one-step-error-recursion
kind: lemma
title: A frozen Newton step yields a controlled error inequality
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-differential-range-invariance
  - def-ip-relaxed-range-invariance-objective
  - def-ip-banach-convex-subgradient-and-dual-pairing
  - def-ip-bregman-distance
  - def-ip-variational-source-condition
  - lem-ip-index-function-young-conjugate-bound
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Barbara Kaltenbacher, Convergence rates under a range invariance condition with application to electrical impedance tomography, equations (2.31)–(2.41)"
      url: "https://arxiv.org/pdf/2403.18704"
    - title: "Frederic Weidling, Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs, Theorem 2.20"
      url: "https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1"
---

## Statement

Let $1\le p<\infty$. Let $X,Y,Z$ be real Banach spaces, let $X_0$ be a closed linear subspace of $X$, and let $D,U\subseteq X$. Let $x_0,x^\dagger\in D\cap U\cap X_0$, let $F:D\to Y$, $K\in\mathcal L(Z,Y)$, and $r:D\to Z$ satisfy $F(x)-F(x_0)=Kr(x)$ for all $x\in D$. Assume $r|_U:U\to\widetilde U$ is a bijection, $r$ is Lipschitz on $D$ with constant $L_r$, and $r$ has bounded linear Gâteaux derivatives on $U$. Let $P:X\to X$ be a bounded linear projection with $P^2=P$, $P|_{X_0}=0$, and $(I-P)(X)\subseteq X_0$. Assume $P(x^\dagger)=0$ and $(I-P)r^{-1}(\widehat r)\in D\cap X_0$ for each admitted $\widehat r\in\widetilde U$.

Let $\check R:X_0\to[0,+\infty]$ be proper and convex, choose $\xi^\dagger\in\partial\check R(x^\dagger)$, and write

$$D_{\check R}^{\xi^\dagger}(z,x^\dagger):=\check R(z)-\check R(x^\dagger)-\langle\xi^\dagger,z-x^\dagger\rangle_{X_0^*,X_0}.$$

Suppose that, on the stated sublevel $\check R(z)\le R_0$, the variational source inequality

$$-\langle\xi^\dagger,z-x^\dagger\rangle_{X_0^*,X_0}\le bD_{\check R}^{\xi^\dagger}(z,x^\dagger)+\psi\!\left(\|F(z)-F(x^\dagger)\|_Y^p\right)$$

holds for some $R_0\ge\check R(x^\dagger)$ and $0\le b<1$. Assume that $\psi:[0,\infty)\to[0,\infty)$ is continuous, nondecreasing and concave, with $\psi(0)=0$, and that for a constant $C_\psi>0$,

$$\psi(a+b)\le C_\psi\bigl(\psi(a)+\psi(b)\bigr)\qquad(a,b\ge0).$$

Let $H(q):=\sup_{s\ge0}(\psi(s)-qs)$, and assume the values of $H$ used below are finite. Let $\gamma>C_\psi$, $C_P\ge2^{p-1}\|K\|^pL_r^p$, and $\widetilde C_Q>0$. Let $R_P:P(X)\to[0,+\infty]$ satisfy $R_P(0)=0$ and

$$R_P(z)\ge\gamma\psi(C_P\|z\|_X^p)\qquad(z\in P(X)).$$

For each admitted $\widehat r\in\widetilde U$, put $u(\widehat r):=r^{-1}(\widehat r)$ and $\check x(\widehat r):=(I-P)u(\widehat r)$. Assume the compatibility bound

$$\|\widehat r-r(x^\dagger)\|_Z^p\le\widetilde C_Q\left(D_{\check R}^{\xi^\dagger}(\check x(\widehat r),x^\dagger)+\psi(C_P\|Pu(\widehat r)\|_X^p)\right).$$

Choose $c_{\beta\alpha}>0$ with $c_{\beta\alpha}\le\min\{1-b,\gamma-C_\psi\}/(4\widetilde C_Q)$, and set

$$m:=\min\{1-b,\gamma-C_\psi\},\quad a:=2^{1-p},\quad \lambda:=2^{1-p},\quad t:=2^{2-2p}-2^{p-1}c_{\rm tcr}^p,\quad v:=(1+2^{p-1})c_{\rm tcr}^p,\quad \overline C:=C_\psi 2^{2p-2}.$$

Assume $0<c_{\rm tcr}<1$ and $t>0$, and for all $x_1,x_2\in U$ assume

$$\|r(x_1)-r(x_2)-r'(x_2)(x_1-x_2)\|_Z\le c_{\rm tcr}\|r(x_1)-r(x_2)\|_Z.$$

Assume the candidate projected point satisfies $\check R(\check x(\widehat r_{n+1}))\le R_0$.

Let $Q(a,b):=\|a-b\|_Z$. Fix $\delta>0$, $y^\delta\in Y$ with $\|y^\delta-F(x^\dagger)\|_Y\le\delta$, and $\alpha_n>0$, with $\beta_n:=c_{\beta\alpha}\alpha_n$. Suppose $(\widehat r_{n+1},x_{n+1})\in\widetilde U\times U$ satisfies, for some $\eta_n\ge0$,

$$\mathcal J_n^\delta(\widehat r_{n+1},x_{n+1})\le\mathcal J_n^\delta(\widehat r,x)+\eta_n\qquad((\widehat r,x)\in\widetilde U\times U),$$

where $\mathcal J_n^\delta$ is the frozen objective in the Joint and frozen-Newton objectives definition, with regularizer $\mathcal R(\widehat r)=\check R(\check x(\widehat r))+R_P(Pu(\widehat r))$ and distance $Q$.

Define

$$E_{n+1}:=\frac{c_{\beta\alpha}}{C_\psi}\left(\lambda\|\widehat r_{n+1}-r(x^\dagger)\|_Z^p+t\|r(x_{n+1})-r(x^\dagger)\|_Z^p\right),$$

$$S_{n+1}:=\frac{1}{C_\psi}\left(2^{1-p}\|K(\widehat r_{n+1}-r(x^\dagger))\|_Y^p+\|Px_{n+1}\|_X^p\right),$$

and

$$d_n:=\frac{c_{\beta\alpha}}{C_\psi}\alpha_n v\|r(x_n)-r(x^\dagger)\|_Z^p+\frac{2\delta^p+\eta_n}{C_\psi}.$$

Then

$$S_{n+1}+\alpha_nE_{n+1}\le d_n+\alpha_n\psi(\overline C S_{n+1}).$$

Consequently,

$$E_{n+1}\le\frac{d_n}{\alpha_n}+H\!\left(\frac{1}{\overline C\alpha_n}\right),\qquad S_{n+1}\le2\left(d_n+\alpha_nH\!\left(\frac{1}{2\overline C\alpha_n}\right)\right).$$

## Statement references

[[def-ip-differential-range-invariance|Range-invariance factorization and domains]]

[[def-ip-relaxed-range-invariance-objective|Joint and frozen-Newton objective definitions]]

[Barbara Kaltenbacher, *Convergence rates under a range invariance condition with application to electrical impedance tomography*, equations (2.31)–(2.41)](https://arxiv.org/pdf/2403.18704)

[Frederic Weidling, *Variational Source Conditions and Conditional Stability Estimates for Inverse Problems in PDEs*, Theorem 2.20](https://univerlag.uni-goettingen.de/bitstream/handle/3/isbn-978-3-86395-411-6/weidling.pdf?sequence=1)

## Facts & Assumptions

**Given:** All spaces, maps, penalties, parameters, source inequalities, compatibility inequalities, and the approximate frozen step satisfy the hypotheses in the Statement.

[A1] The projected point $\check x(\widehat r_{n+1})$ belongs to the regularizer sublevel where the VSC holds.

[F1] [[def-ip-differential-range-invariance]]: $F(x)-F(x_0)=Kr(x)$ on the specified domain, and $r|_U$ is invertible onto $\widetilde U$.

[F2] [[def-ip-relaxed-range-invariance-objective]]: the frozen objective has data term $\|K\widehat r+F(x_0)-y^\delta\|^p$, regularizer $\alpha_n\mathcal R(\widehat r)$, coupling $\beta_n\|\ell_n(x)-\widehat r\|^p$, and penalty $\|Px\|^p$, where $\ell_n(x)=r(x_n)+r'(x_n)(x-x_n)$.

[F3] [[def-ip-banach-convex-subgradient-and-dual-pairing]]: $\xi^\dagger\in\partial\check R(x^\dagger)$ means $\check R(z)\ge\check R(x^\dagger)+\langle\xi^\dagger,z-x^\dagger\rangle$ for every $z\in X_0$.

[F4] [[def-ip-bregman-distance]]: $D_{\check R}^{\xi^\dagger}(z,x^\dagger)=\check R(z)-\check R(x^\dagger)-\langle\xi^\dagger,z-x^\dagger\rangle$.

[F5] [[def-ip-variational-source-condition]]: $-\langle\xi^\dagger,z-x^\dagger\rangle\le bD_{\check R}^{\xi^\dagger}(z,x^\dagger)+\psi(\|F(z)-F(x^\dagger)\|^p)$ on the stated sublevel.

[F6] [[lem-ip-index-function-young-conjugate-bound]]: if $r+\alpha e\le d+\alpha\psi(Cr)$, then $e\le d/\alpha+H(1/(C\alpha))$ and $r\le2(d+\alpha H(1/(2C\alpha)))$.

## Proof

1.1 Write $r^\dagger:=r(x^\dagger)$, $u:=r^{-1}(\widehat r_{n+1})$, $\check x:=(I-P)u$, and $\ell_n(x):=r(x_n)+r'(x_n)(x-x_n)$. Compare the approximate-minimum inequality with $(\widehat r,x)=(r^\dagger,x^\dagger)$. The competitor has data residual at most $\delta^p$, penalty $R_P(0)=0$, and $Px^\dagger=0$. If $g:=K\widehat r_{n+1}+F(x_0)-y^\delta$, then $K(\widehat r_{n+1}-r^\dagger)=g+(y^\delta-y)$; convexity of $s\mapsto s^p$ gives $\|K(\widehat r_{n+1}-r^\dagger)\|^p\le2^{p-1}(\|g\|^p+\delta^p)$. Thus the comparison gives $2^{1-p}\|K(\widehat r_{n+1}-r^\dagger)\|^p+\alpha_n(\mathcal R(\widehat r_{n+1})-\check R(x^\dagger))+\beta_n\|\ell_n(x_{n+1})-\widehat r_{n+1}\|^p+\|Px_{n+1}\|^p\le2\delta^p+\eta_n+\beta_n\|\ell_n(x^\dagger)-r^\dagger\|^p$. The remainder hypothesis at $(x^\dagger,x_n)$ and $c_{\rm tcr}<1$ imply $\|\ell_n(x^\dagger)-r^\dagger\|^p\le c_{\rm tcr}^p\|r(x_n)-r^\dagger\|^p$. [A1, F1, F2, given, algebra]

1.2 Let $A:=\|r(x_{n+1})-\widehat r_{n+1}\|$, $B:=\|\ell_n(x_{n+1})-\widehat r_{n+1}\|$, and $D_n:=\|r(x_{n+1})-\ell_n(x_{n+1})\|$. The triangle inequality gives $A\le B+D_n$, hence $B^p\ge2^{1-p}A^p-D_n^p$. Applying the same power inequality to $\|r(x_{n+1})-r^\dagger\|\le A+\|\widehat r_{n+1}-r^\dagger\|$ gives $A^p\ge2^{1-p}\|r(x_{n+1})-r^\dagger\|^p-\|\widehat r_{n+1}-r^\dagger\|^p$. The Taylor hypothesis and another triangle-power estimate give $D_n^p\le2^{p-1}c_{\rm tcr}^p(\|r(x_{n+1})-r^\dagger\|^p+\|r(x_n)-r^\dagger\|^p)$. Therefore $\|\ell_n(x_{n+1})-\widehat r_{n+1}\|^p\ge t\|r(x_{n+1})-r^\dagger\|^p-\lambda\|\widehat r_{n+1}-r^\dagger\|^p-2^{p-1}c_{\rm tcr}^p\|r(x_n)-r^\dagger\|^p$, with $t=2^{2-2p}-2^{p-1}c_{\rm tcr}^p$ and $\lambda=2^{1-p}$. [given, algebra]

1.3 Set $z:=Pu$. Since $\|r(\check x)-r(u)\|\le L_r\|z\|$, the factorization and power inequality give $\|F(\check x)-F(x^\dagger)\|^p\le2^{p-1}\|K(\widehat r_{n+1}-r^\dagger)\|^p+2^{p-1}\|K\|^pL_r^p\|z\|^p$. By the VSC [F5], the Bregman identity [F4], the penalty lower bound, and $\psi(a+b)\le C_\psi(\psi(a)+\psi(b))$, we obtain $\mathcal R(\widehat r_{n+1})-\check R(x^\dagger)\ge m(D_{\check R}^{\xi^\dagger}(\check x,x^\dagger)+\psi(C_P\|z\|^p))-C_\psi\psi(2^{p-1}\|K(\widehat r_{n+1}-r^\dagger)\|^p)$. Indeed, the VSC yields coefficient $1-b$ on the Bregman term, and the penalty leaves coefficient $\gamma-C_\psi$ on the penalty-index term; their minimum is $m$. [A1, F1, F4, F5, given, algebra]

2.1 Substituting steps 1.1–1.3 into the objective comparison and applying the compatibility inequality gives $C_\psi S_{n+1}+\alpha_nmT+\beta_nt\|r(x_{n+1})-r^\dagger\|^p\le\beta_nv\|r(x_n)-r^\dagger\|^p+\beta_n\lambda\|\widehat r_{n+1}-r^\dagger\|^p+\alpha_nC_\psi\psi(2^{p-1}\|K(\widehat r_{n+1}-r^\dagger)\|^p)+2\delta^p+\eta_n$, where $T:=D_{\check R}^{\xi^\dagger}(\check x,x^\dagger)+\psi(C_P\|Pu\|^p)$. By [F3], $D_{\check R}^{\xi^\dagger}(\check x,x^\dagger)\ge0$, so $T\ge0$. Since $\|\widehat r_{n+1}-r^\dagger\|^p\le\widetilde C_QT$ and $\beta_n\lambda\widetilde C_Q\le\alpha_nm/4$, the left regularizer term absorbs the displayed compatibility term and a second copy of it, leaving $\alpha_nmT/2$; in particular it bounds another $\beta_n\lambda\|\widehat r_{n+1}-r^\dagger\|^p$. The resulting inequality is $C_\psi S_{n+1}+\beta_n\lambda\|\widehat r_{n+1}-r^\dagger\|^p+\beta_nt\|r(x_{n+1})-r^\dagger\|^p\le\beta_nv\|r(x_n)-r^\dagger\|^p+\alpha_nC_\psi\psi(2^{p-1}\|K(\widehat r_{n+1}-r^\dagger)\|^p)+2\delta^p+\eta_n$. [step 1.1, step 1.2, step 1.3, A1, F1, F3, F4, F5, given, algebra]

3.1 Divide step 2.1 by $C_\psi$ and use $\beta_n=c_{\beta\alpha}\alpha_n$. Since $C_\psi S_{n+1}\ge2^{1-p}\|K(\widehat r_{n+1}-r^\dagger)\|^p$, we have $2^{p-1}\|K(\widehat r_{n+1}-r^\dagger)\|^p\le C_\psi2^{2p-2}S_{n+1}=\overline C S_{n+1}$. Monotonicity of $\psi$ gives $S_{n+1}+\alpha_nE_{n+1}\le d_n+\alpha_n\psi(\overline C S_{n+1})$. Applying [F6] with $c_1=c_2=1$, $C_3=\overline C$, $r=S_{n+1}$, and $e=E_{n+1}$ proves both conjugate bounds. [step 2.1, F6, given, algebra] ∎
