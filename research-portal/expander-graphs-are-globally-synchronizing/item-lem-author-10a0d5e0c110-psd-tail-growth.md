---
title: "Kernel phases on two-sided expanders: the two tail-growth estimates"
status: published
research_item: lem-author-10a0d5e0c110-psd-tail-growth
dependency_level: 7
---

## Prerequisites

- [lem-author-10a0d5e0c110-psd-kernel-and-half-circle](item-lem-author-10a0d5e0c110-psd-kernel-and-half-circle)
- [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander)
- [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)
- [math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)
- [math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity)


## Statement

Let $G$ have vertex set $V$ with $n=|V|>0$ and symmetric binary adjacency matrix $A$, allowing loops. Let $D$ be diagonal with $D_{xx}=\sum_y A_{xy}$, put $L=D-A$, and let $I$ and $J$ be the identity and all-ones matrices. Use the operator norm induced by the standard norm on $\mathbb C^V$ and the Loewner order on Hermitian matrices. Let $d>0$, $a>0$, $-1<c_-\le0\le c_+$, $w=c_+-c_->0$, $s=1+c_-$, $B=1+c_++a$. Suppose $\|A-(d/n)J\|\le ad$ and $c_-dI\preceq L-dI+(d/n)J\preceq c_+dI$.

Choose phase representatives $\theta_x\in(-\pi,\pi]$ normalized so that $\rho=n^{-1}\sum_xe^{i\theta_x}$ is real and nonnegative. For $u,v\in(-\pi,\pi]$, define $K(u,v)=\sin(|u|-\min(|v|,\pi/2))$. Assume $\sum_{x\in V}A_{xy}K(\theta_x,\theta_y)\ge0$ for every $y\in V$. Set $C_t=\{x\in V:|\theta_x|\ge t\}$ and $m_0=|C_{\pi/2}|>0$. For $0<\gamma<\beta\le\pi/2$, $0<\epsilon<s$, and $u>0$:

(a) if $\sin(\beta-\gamma)\ge2(1+u)a/(s-\epsilon)$, then $|C_\gamma|\ge\min\{(1+\epsilon/w)|C_\beta|,ua n,n/2\}$;

(b) if $\sin(\beta-\gamma)\ge2Bm_0/((s-\epsilon)|C_\beta|)$, then $|C_\gamma|\ge\min\{(1+\epsilon/w)|C_\beta|,n/2\}$.

## Facts & Assumptions

[F1] Graph and matrix conventions are supplied by [def-expander-sync-two-sided-expander](item-def-expander-sync-two-sided-expander), and phase normalization and kernel notation by [lem-author-10a0d5e0c110-psd-kernel-and-half-circle](item-lem-author-10a0d5e0c110-psd-kernel-and-half-circle). Elementary angular conventions are supplied by [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities). The kernel inequality is assumed directly here; no critical-point, Hessian or local-minimum hypothesis is imposed. All additional notation used below is defined in the Statement or Proof.

[F2] Sine is strictly increasing on $[-\pi/2,\pi/2]$ and has range $[-1,1]$ ([math:thm-sine-cosine-signs-monotonicity-and-ranges](https://alphabetamath.cc/item/thm-sine-cosine-signs-monotonicity-and-ranges)). For every real $t$, $\sin(-t)=-\sin t$ ([math:cor-trigonometric-parity-and-pythagorean-identity](https://alphabetamath.cc/item/cor-trigonometric-parity-and-pythagorean-identity)).

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Prove both tail-growth estimates for every configuration satisfying the stated spectral and kernel hypotheses.

1.1 For sets define $e(U,W)=\sum_{x\in U,y\in W}A_{xy}$ and $p(U)=e(U,U^c)$. Testing the centered-adjacency bound on $\mathbf1_U$ gives $e(U,U)\le(d/n)|U|^2+ad|U|$. Testing the centered-Laplacian inequalities on $\mathbf1_U-(|U|/n)\mathbf1$ gives $(1+c_-)d|U||U^c|/n\le p(U)\le(1+c_+)d|U||U^c|/n$. Therefore $e(U,V)=e(U,U)+p(U)\le Bd|U|$, since $c_+\ge0$. These tests include loops under the stated degree convention. [F1, algebra]

1.2 Suppose $\varnothing\ne X\subseteq Y$, $|Y|<n/2$, and $|Y|<(1+\epsilon/w)|X|$. Put $x=|X|$, $y=|Y|$, $Z=Y\setminus X$, $z=|Z|<\epsilon x/w$. The identity $2e(X,Y^c)=p(X)+p(Y)-p(Z)$ and the two cut bounds give
$e(X,Y^c)\ge(1+c_-)dx(n-y)/n-wdz(n-z)/(2n)>(s-\epsilon)dx(n-y)/n$.
Indeed, $z(n-z)<(\epsilon x/w)n<2(\epsilon x/w)(n-y)$. This inequality is strict also at $z=0$, because $\epsilon x(n-y)>0$. [F1, algebra]

1.3 Sum the kernel inequality over $y\in X=C_\beta$, and split $x$ into $X$, $Y\setminus X$, $Y^c$ with $Y=C_\gamma$. On these regions the kernel is at most $1$, $0$, and $-\sin(\beta-\gamma)$ respectively: the bounds follow by expanding its definition separately at $|\theta_y|\le\pi/2$ and $|\theta_y|\ge\pi/2$. Thus $e(X,X)\ge\sin(\beta-\gamma)e(X,Y^c)$. A second bound is obtained from $K(u,v)+K(v,u)\le\mathbf1_{|u|\ge\pi/2}+\mathbf1_{|v|\ge\pi/2}$. If both absolute phases are below $\pi/2$ the sum is zero; if just one is above, the sum is at most $1$ because the other kernel term is nonpositive; if both are above each term is at most $1$. Symmetrizing the internal sum gives $e(C_{\pi/2},X)\ge\sin(\beta-\gamma)e(X,Y^c)$. [F1, F2, algebra]

2.1 To prove (a), suppose the conclusion fails. Then $y<n/2$, $y<(1+\epsilon/w)x$ and $y<ua n$, hence $x<ua n$. Steps 1.1–1.2 yield $e(X,X)\le(1+u)ad x$ and $e(X,Y^c)>(s-\epsilon)dx/2$. The sine hypothesis and step 1.3 now give $e(X,X)> (1+u)ad x$, a contradiction. To prove (b), failure gives the first two strict size inequalities. Steps 1.1–1.3 give $Bd m_0\ge e(C_{\pi/2},X)\ge\sin(\beta-\gamma)e(X,Y^c)> Bd m_0$, also impossible. This proves both estimates. [F1, algebra] ∎
