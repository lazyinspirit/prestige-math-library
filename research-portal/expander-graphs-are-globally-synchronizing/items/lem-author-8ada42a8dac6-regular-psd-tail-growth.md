---
id: lem-author-8ada42a8dac6-regular-psd-tail-growth
title: "Critical PSD kernel phases: quantitative tail growth"
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-8ada42a8dac6-regular-psd-half-circle
  - def-expander-sync-two-sided-expander
  - prop-expander-prereq-ordered-angle-inequalities
  - math:thm-sine-cosine-signs-monotonicity-and-ranges
  - math:cor-trigonometric-parity-and-pythagorean-identity
dependency_roles:
  lem-author-8ada42a8dac6-regular-psd-half-circle: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  math:thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement

Let $d>0$, $a>0$, $-1<c_-\le0\le c_+$, $w=c_+-c_->0$, $s=1+c_-$, $B=1+c_++a$. Suppose $\|A-(d/n)J\|\le ad$ and $c_-dI\preceq L-dI+(d/n)J\preceq c_+dI$. For normalized phases satisfying the preceding kernel inequality set $C_t=\{x:|\theta_x|\ge t\}$ and $m_0=|C_{\pi/2}|>0$. For $0<\gamma<\beta\le\pi/2$, $0<\epsilon<s$, and $u>0$:

(a) if $\sin(\beta-\gamma)\ge2(1+u)a/(s-\epsilon)$, then $|C_\gamma|\ge\min\{(1+\epsilon/w)|C_\beta|,ua n,n/2\}$;

(b) if $\sin(\beta-\gamma)\ge2Bm_0/((s-\epsilon)|C_\beta|)$, then $|C_\gamma|\ge\min\{(1+\epsilon/w)|C_\beta|,n/2\}$.

## Facts & Assumptions

[F1] Use the graph, phase, algebraic and analytic interfaces of [[lem-author-8ada42a8dac6-regular-psd-half-circle]], [[def-expander-sync-two-sided-expander]], [[prop-expander-prereq-ordered-angle-inequalities]]. Every configuration assumed here is a critical point with positive-semidefinite Hessian; local minimality is never inferred from that condition.

[F2] Sine is strictly increasing on $[-\pi/2,\pi/2]$ and has range $[-1,1]$ ([[math:thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F3] Sine is odd: $\sin(-t)=-\sin t$ for every real $t$, and consequently $\sin0=0$ ([[math:cor-trigonometric-parity-and-pythagorean-identity]]).

## Proof

**Given:** The hypotheses of the Statement.

**Goal:** Establish its conclusions directly for critical PSD phases.

1.1 For sets define $e(U,W)=\sum_{x\in U,y\in W}A_{xy}$ and $p(U)=e(U,U^c)$. Testing the centered-adjacency bound on $\mathbf1_U$ gives $e(U,U)\le(d/n)|U|^2+ad|U|$. Testing the centered-Laplacian inequalities on $\mathbf1_U-(|U|/n)\mathbf1$ gives $(1+c_-)d|U||U^c|/n\le p(U)\le(1+c_+)d|U||U^c|/n$. Therefore $e(U,V)=e(U,U)+p(U)\le Bd|U|$, since $c_+\ge0$. These tests include loops under the stated degree convention. [F1, algebra]

1.2 Suppose $\varnothing\ne X\subseteq Y$, $|Y|<n/2$, and $|Y|<(1+\epsilon/w)|X|$. Put $x=|X|$, $y=|Y|$, $Z=Y\setminus X$, $z=|Z|<\epsilon x/w$. The identity $2e(X,Y^c)=p(X)+p(Y)-p(Z)$ and the two cut bounds give
$e(X,Y^c)\ge(1+c_-)dx(n-y)/n-wdz(n-z)/(2n)>(s-\epsilon)dx(n-y)/n$.
Indeed, $z(n-z)<(\epsilon x/w)n<2(\epsilon x/w)(n-y)$. This inequality is strict also at $z=0$, because $\epsilon x(n-y)>0$. [F1, algebra]

1.3 Sum the kernel inequality over $y\in X=C_\beta$, and split $x$ into $X$, $Y\setminus X$, $Y^c$ with $Y=C_\gamma$. On these regions the kernel is at most $1$, $0$, and $-\sin(\beta-\gamma)$ respectively: for $x\in Y\setminus X$ the sine argument lies in $[-\pi/2,0]$, and for $x\in Y^c$ it lies in $[-\pi/2,-(\beta-\gamma)]$; monotonicity, oddness and the sine range give these bounds. Thus $e(X,X)\ge\sin(\beta-\gamma)e(X,Y^c)$. A second bound is obtained from $K(u,v)+K(v,u)\le\mathbf1_{|u|\ge\pi/2}+\mathbf1_{|v|\ge\pi/2}$. If both absolute phases are below $\pi/2$ the sum is zero by oddness; if just one is above, the sum is at most $1$ because the other kernel term is nonpositive; if both are above each term is at most $1$. Symmetrizing the internal sum gives $e(C_{\pi/2},X)\ge\sin(\beta-\gamma)e(X,Y^c)$. [F1, F2, F3, algebra]

2.1 To prove (a), suppose the conclusion fails. Then $y<n/2$, $y<(1+\epsilon/w)x$ and $y<ua n$, hence $x<ua n$. Steps 1.1–1.2 yield $e(X,X)\le(1+u)ad x$ and $e(X,Y^c)>(s-\epsilon)dx/2$. The sine hypothesis and step 1.3 now give $e(X,X)> (1+u)ad x$, a contradiction. To prove (b), failure gives the first two strict size inequalities. Steps 1.1–1.3 give $Bd m_0\ge e(C_{\pi/2},X)\ge\sin(\beta-\gamma)e(X,Y^c)> Bd m_0$, also impossible. This proves both estimates. [F1, algebra] ∎
