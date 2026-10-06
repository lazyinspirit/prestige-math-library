---
id: ex-reentrant-sector-harmonic-singularity-has-explicit-sobolev-threshold
kind: example
title: "The reentrant sector singularity has an explicit Sobolev threshold"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [cex-boundary-h-two-regularity-needs-domain-regularity, def-local-weak-solution-for-a-divergence-form-operator, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, thm-polar-coordinates-formula-for-lebesgue-measure, thm-chain-rule-for-total-derivatives, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, Example 10.1 and the sector computation, printed p. 242 (read in full)"
---

## Example

Assume Countable Choice. Let $\pi<\omega<2\pi$, let $S_\omega=\{(r\cos\theta,r\sin\theta):0<r<1,\ 0<\theta<\omega\}$
be the reentrant sector, let $\alpha=\pi/\omega\in(0,1)$, and let
$u(r,\theta)=r^{\alpha}\sin(\alpha\theta)$. Then $\Delta u=0$ in $S_\omega$,
$u$ vanishes on the two radial edges $\theta=0$ and $\theta=\omega$, and for
every integer $m\ge0$
$$u\in H^m(S_\omega)\iff m<1+\alpha=1+\frac{\pi}{\omega};$$
in particular $u\in H^1(S_\omega)\setminus H^2(S_\omega)$ and each additional
whole derivative beyond $H^1$ is unavailable exactly by the deficit
$1-\pi/\omega$. For noninteger $s=m+t$ with integer $m\ge0$ and $0<t<1$, define the intrinsic Slobodeckij scale here by requiring $u\in H^m(S_\omega)$ and finite seminorm $\int_{S_\omega}\int_{S_\omega}\frac{|D^\beta u(x)-D^\beta u(y)|^2}{|x-y|^{2+2t}}\,dx\,dy$ for each weak derivative with $|\beta|=m$. With this convention, for every real $s\ge0$, $u\in H^s(S_\omega)\iff s<1+\alpha=1+\frac{\pi}{\omega}$. The integer threshold follows from polar-coordinate integrals; the fractional threshold follows from a dyadic-shell estimate and a matching scaled-pair lower bound.

## Facts & Assumptions

**Given:** $\omega\in(\pi,2\pi)$, the sector $S_\omega$ above, $\alpha=\pi/\omega\in(0,1)$, and $u(r,\theta)=r^{\alpha}\sin(\alpha\theta)$.

[F1] A class in $H^1(S_\omega)$ is a local weak solution of $-\Delta u=0$ on $S_\omega$ if $\int_{S_\omega}\nabla u\cdot\overline{\nabla v}\,dx=0$ for every $v\in C_c^\infty(S_\omega)$. ([[def-local-weak-solution-for-a-divergence-form-operator]])

[F2] For every $C^2$ function $w$ on the punctured plane, the chain rule gives $\Delta w=w_{rr}+r^{-1}w_r+r^{-2}w_{\theta\theta}$ in polar coordinates; in particular $\Delta(r^{\alpha}\sin(\alpha\theta))=0$ on the sector. ([[thm-chain-rule-for-total-derivatives]], [[def-weak-derivative-of-a-locally-integrable-function]])

[F3] Polar integration on the sector is $\int_{S_\omega}f\,dx=\int_0^{\omega}\int_0^1f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta$. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

[F4] A class $u$ lies in $H^m(S_\omega)$ for an integer $m\ge0$ exactly when all its weak partial derivatives of order $\le m$ lie in $L^2(S_\omega)$; the weak derivatives of the smooth function $u$ on $S_\omega\setminus\{0\}$ are the classical ones, and on the sector $r>0$ the classical derivatives $D^ju$ are bounded by constant multiples of $r^{\alpha-j}$. Along each fixed ray $x=re_r$, the radial derivative satisfies $\partial_r^m u(r,\theta)=D^m u(re_r)[e_r,\ldots,e_r]$; since $|e_r|=1$, if all Cartesian derivatives of order $m$ lie in $L^2$, then this radial derivative also lies in $L^2$. ([[def-sobolev-space-wkp-and-its-norm]], [[def-weak-derivative-of-a-locally-integrable-function]])

[F5] The reentrant sector is a bounded Lipschitz domain that fails the $C^1$ boundary-chart condition at its vertex, and $u$ is a local weak solution of $-\Delta u=0$ on it with $u\in H^1(S_\omega)\setminus H^2(S_\omega)$. ([[cex-boundary-h-two-regularity-needs-domain-regularity]])

[F6] Let $w(r,\theta)=r^\gamma\Psi(\theta)$ on this sector, where $\gamma>-1$ and $\Psi$ is smooth on $[0,\omega]$. For $0<t<1$, the intrinsic seminorm $\int_{S_\omega}\int_{S_\omega}\frac{|w(x)-w(y)|^2}{|x-y|^{2+2t}}\,dx\,dy$ is finite if $t<\gamma+1$. To see this, put $A_j=\{2^{-j-1}<r<2^{-j},0<\theta<\omega\}$ and $\lambda_j=2^{-j}$. The angular formula extends smoothly to a slightly larger interval because $\omega<2\pi$, so near pairs in comparable shells satisfy $|w(x)-w(y)|\le C\lambda_j^{\gamma-1}|x-y|$; integrating such pairs gives $C\lambda_j^{2\gamma+2-2t}$. Separated pairs in comparable shells give the same bound from $|w|\le C\lambda_j^\gamma$ and $|x-y|\ge c\lambda_j$. For noncomparable shells $A_j,A_k$ with $k\ge j+2$, $|x-y|\ge c\lambda_j$; integrating the two terms $\lambda_j^{2\gamma}$ and $\lambda_k^{2\gamma}$ in $|w(x)-w(y)|^2$ and summing over $k$ gives at most $C\lambda_j^{2\gamma+2-2t}$, with the inner sum geometric since $\gamma>-1$. The final sum over $j$ converges exactly when $t<\gamma+1$.

[F7] For $Du=\nabla u=\alpha r^{\alpha-1}(\sin((\alpha-1)\theta),\cos((\alpha-1)\theta))$, choose two small disjoint balls $A,B$ compactly contained in $\{1/2<r<1,\ 0<\theta<\omega\}$, centered at the same radius and at angles $\omega/4$ and $3\omega/4$. Their gradient values differ because the direction-angle difference is $(\alpha-1)\omega/2=(\pi-\omega)/2\ne0$; shrinking the balls gives $|Du(x)-Du(y)|\ge c>0$ on $A\times B$. By homogeneity $Du(\lambda x)=\lambda^{\alpha-1}Du(x)$, the order-$t$ seminorm integral over $2^{-j}A\times2^{-j}B$ is at least $c'2^{-j(2\alpha-2t)}$. These product sets are pairwise disjoint as $j$ varies, so their sum diverges for $t\ge\alpha$.

## Verification

1.1 Harmonicity and edge vanishing. By [F2] the polar Laplacian of $w=r^{\alpha}\sin(\alpha\theta)$ is $\big(\alpha(\alpha-1)+\alpha-\alpha^2\big)r^{\alpha-2}\sin(\alpha\theta)=0$, so $u$ is harmonic and $C^\infty$ on $S_\omega$; and $\sin(\alpha\cdot0)=\sin(\pi)=0=\sin(\alpha\omega)$ shows that $u$ vanishes on both radial edges. [F2, algebra, given]

1.2 Membership below the threshold. Since $|D^ju(r,\theta)|\le C_jr^{\alpha-j}$ for the classical derivatives by [F4], [F3] gives $\int_{S_\omega}|D^ju|^2dx\le C_j^2\int_0^\omega\int_0^1r^{2\alpha-2j}r\,dr\,d\theta=C_j'\!\int_0^1r^{2\alpha-2j+1}dr$, which is finite whenever $2\alpha-2j+1>-1$, that is $j<\alpha+1$. Hence every weak derivative of order $j\le m$ lies in $L^2(S_\omega)$ whenever the integer $m$ satisfies $m<1+\alpha$, and then $u\in H^m(S_\omega)$ by [F4]. [F3, F4, algebra]

1.3 Non-membership at and above the threshold. Let $m\ge\alpha+1$ be an integer, so $m\ge1$ because $\alpha<1$, and put $c_m:=\alpha(\alpha-1)\cdots(\alpha-m+1)\ne0$. Differentiating along a fixed ray gives $\partial_r^mu=c_mr^{\alpha-m}\sin(\alpha\theta)$. Since $2\alpha-2m+1\le-1$ and $\int_0^\omega\sin^2(\alpha\theta)\,d\theta>0$, [F3] gives $$\int_{S_\omega}|\partial_r^mu|^2\,dx=c_m^2\Big(\int_0^\omega\sin^2(\alpha\theta)\,d\theta\Big)\Big(\int_0^1r^{2\alpha-2m+1}\,dr\Big)=+\infty .$$ By [F4], membership in $H^m$ would force this radial derivative to lie in $L^2$, so $u\notin H^m(S_\omega)$. [F3, F4, algebra]

2.1 The integer threshold. Steps 1.2 and 1.3 give, for every integer $m\ge0$, $$u\in H^m(S_\omega)\iff m<1+\alpha .$$ [step 1.2, step 1.3]

2.2 The stated particular cases. For $m=1$ the criterion gives $1<1+\alpha$ because $\alpha>0$, so $u\in H^1(S_\omega)$; for $m=2$ it gives $2<1+\alpha$, which fails because $\alpha<1$ and $\omega>\pi$; hence $u\notin H^2(S_\omega)$. These conclusions agree with the local weak-solution statement of [F5], which records the same function as the reentrant-corner witness and with [F1]'s definition of a local weak solution. [F1, F5, step 1.2, algebra]

2.3 Fractional membership below the threshold. Let $s=m+t$ be noninteger with $m=0$ or $m=1$ and $0<t<1$. If $m=0$, then $u\in L^2$ by step 1.2 and [F6] applies with $\gamma=\alpha$, giving finite $H^t$ seminorm since $t<1<1+\alpha$. If $m=1$, then $u\in H^1$ and each component of $Du$ has the form in [F6] with degree $\gamma=\alpha-1$; its $H^t$ seminorm is finite when $t<\gamma+1=\alpha$, exactly when $s=1+t<1+\alpha$. [F6, step 1.2, algebra]

3.1 Fractional nonmembership and all higher orders. For $1+\alpha\le s<2$, put $t=s-1\ge\alpha$. By [F7], $Du$ has infinite order-$t$ seminorm, so the defining condition for $H^s$ fails. For $s\ge2$, membership in the defined real-order scale entails membership in $H^2(S_\omega)$, which step 2.2 rules out; $s=0$ is covered by $u\in L^2$. Together with step 2.3 and the integer criterion of step 2.1, this proves $u\in H^s(S_\omega)$ exactly when $s<1+\alpha$. [F7, step 2.1, step 2.2, algebra] ∎


## Scope note

The real-order statement uses the intrinsic Slobodeckij convention specified in the statement; this fixes the fractional scale on the reentrant sector and does not rely on an unstated extension or boundary regularity theorem.

## Source notes

Teschl's Example 10.1 (printed p. 242) is the source for the harmonic model function and the failure of $H^2$ in a reentrant sector. The quantitative threshold for integer orders follows from the explicit $r^{\alpha-j}$ derivative bounds, the polar integral, and the directional-derivative bound in [F4].
