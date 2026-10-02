---
id: cex-radial-boundary-limit-does-not-force-tangential-limit
kind: counterexample
title: "A radial Poisson limit does not control a tangential path"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-circle-maximal-function-and-nontangential-region, def-complex-lp-and-euclidean-test-function-conventions, def-integral-of-a-nonnegative-simple-function, def-integral-over-a-measurable-set, def-l-one-of-a-measure, def-poisson-integral-of-finite-boundary-measure, def-poisson-kernel-on-the-disc, def-the-one-dimensional-torus-and-normalized-haar-integral, lem-poisson-kernel-properties-on-the-disc, lem-sine-positive-and-cosine-decreasing-on-zero-two, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, cor-sine-and-cosine-are-one-lipschitz, cor-trigonometric-parity-and-pythagorean-identity, thm-complex-holder-minkowski-and-the-quotient-norm, thm-double-angle-and-power-reduction-identities, thm-fatou-nontangential-boundary-theorem-harmonic, thm-monotone-convergence-for-the-integral, thm-poisson-extension-lp-contraction-and-norm-limit, prop-order-and-scalar-rules-for-the-nonnegative-integral]
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
generation:
  role: counterexample
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  references: []
---

## Statement refuted

Let $u$ be the Poisson integral of a function on the torus. The implication
"if $u(r\zeta_0)\to L$ as $r\uparrow1$, then $u(z)\to L$ along every sequence
$z\to\zeta_0$ in $\mathbb D$" is false, even for $L=0$ and even for bounded
data with values in $\{0,1\}$. Explicitly, put $t_n:=2^{-n}$ and
$w_n:=2^{-3n}$ for integers $n\ge3$, let $I_n:=I_{w_n}(q(t_n))$ be the centred
torus arc of radius $w_n$, set $E:=\bigcup_{n\ge3}I_n$, $f:=\mathbf 1_E$, and
let $u:=P[f]$ be the Poisson integral of the density measure $fm$. Then $f$ is
a bounded Borel function with values in $\{0,1\}$, the boundary values of $f$
have no limit at $\varphi([0])=1$, and

- $u(r\varphi([0]))\to0$ as $r\uparrow1$, that is, the radial limit of $u$ at
  the boundary point $1$ exists and equals $0$; while
- for $z_n:=(1-w_n)\varphi([t_n])$ one has $u(z_n)\ge(\pi+1)^{-2}$ for every
  $n\ge3$, $z_n\to1$, and $|z_n-1|\big/(1-|z_n|)\to\infty$.

Thus convergence along the radius to a boundary point does not force
convergence along other sequences tending to that point. The failure occurs
outside every nontangential region: each $z_n$ eventually lies outside every
$\Gamma_A(1)$, so the almost-everywhere nontangential Fatou theorem is not
affected.

## Facts & Assumptions

**Given:** Countable choice, the torus data $t_n,w_n,I_n,E,f,u,z_n$ of the Statement, and the following facts.

[L1] The torus $\mathbb T=\mathbb R/\mathbb Z$ is identified with the unit circle by $\varphi([t])=e^{2\pi it}$, the quotient map $q:\mathbb R\to\mathbb T$ is continuous, and $m$ is the normalized Haar probability measure; for $\zeta\in\mathbb T$ and $0<h<\frac12$, the centred arc is $I_h(\zeta)=\{\eta\in\mathbb T:d(\zeta,\eta)<h\}$, while $I_{1/2}(\zeta)=\mathbb T$; every $I_h(\zeta)$ with $0<h\le\frac12$ is open and has $m(I_h(\zeta))=2h$; for $A>1$ the nontangential region is $\Gamma_A(\zeta)=\{z\in\mathbb D:|z-\zeta|<A(1-|z|)\}$ ([[def-the-one-dimensional-torus-and-normalized-haar-integral]], [[def-circle-maximal-function-and-nontangential-region]]).

[L2] For $f\in L^1(\mathbb T,m)$ the Poisson integral is $P[f]=P[fm]$, given by $P[f](z)=\int_{\mathbb T}P(z,\eta)f(\eta)\,dm(\eta)$ with $P(z,\eta)=(1-|z|^2)\big/|\varphi(\eta)-z|^2>0$ for $z\in\mathbb D$ and $\eta\in\mathbb T$; writing $z=r\varphi([t])$ and $\eta=\varphi([s])$ gives $P(z,\eta)=(1-r^2)\big/(1-2r\cos(2\pi(s-t))+r^2)$, and the radial function is $(P_r*f)(\zeta)=P[f](r\zeta)=\int_{\mathbb T}P_r(\zeta-\eta)f(\eta)\,dm(\eta)$, where $P_r(\theta)=(1-r^2)/(1-2r\cos(2\pi\theta)+r^2)$ in torus coordinates ([[def-poisson-integral-of-finite-boundary-measure]], [[def-poisson-kernel-on-the-disc]], [[lem-poisson-kernel-properties-on-the-disc]]).

[L3] If $f\in L^\infty(\mathbb T,m)$ then $f\in L^1(\mathbb T,m)$, the Poisson integral $P[f]$ is complex harmonic on $\mathbb D$, and $\|(P[f])_r\|_\infty\le\|f\|_\infty$ for every $0\le r<1$ ([[thm-poisson-extension-lp-contraction-and-norm-limit]], [[thm-complex-holder-minkowski-and-the-quotient-norm]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[L4] For $0<x\le2$ one has $\sin x\ge x/3>0$; for all real $u,v$ one has $|\sin u-\sin v|\le|u-v|$ and $|\cos u-\cos v|\le|u-v|$; for all real $x$ one has $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$ and $\sin^2x+\cos^2x=1$; and $\cos(2x)=1-2\sin^2x$ while $e^{ix}=\cos x+i\sin x$ with $|e^{ix}|=1$ ([[lem-sine-positive-and-cosine-decreasing-on-zero-two]], [[cor-sine-and-cosine-are-one-lipschitz]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-double-angle-and-power-reduction-identities]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[L5] For a measure space, a nonnegative measurable function $g$ and pairwise disjoint measurable sets $E_n$ with union $E$, monotone convergence gives $\int_E g=\sum_n\int_{E_n}g$; the integral of a nonnegative simple function is additive in its canonical decomposition, so $\int_X c\,\mathbf 1_F\,d\mu=c\,\mu(F)$ for $c\ge0$; and if $0\le g_1\le g_2$ then $\int g_1\le\int g_2$ ([[def-integral-over-a-measurable-set]], [[def-integral-of-a-nonnegative-simple-function]], [[thm-monotone-convergence-for-the-integral]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L6] If $g\in L^1(\mathbb T,m)$, then for $m$-almost every $\zeta\in\mathbb T$ the Poisson integral $P[g]$ converges to $g(\zeta)$ along every fixed nontangential region $\Gamma_A(\zeta)$; the theorem asserts nothing about paths that leave every $\Gamma_A(\zeta)$ ([[thm-fatou-nontangential-boundary-theorem-harmonic]]).

## Counterexample

**Proof technique:** direct.

1.1 Geometry of the arcs. Put $t_n=2^{-n}$ and $w_n=2^{-3n}$ for $n\ge3$; then $0<t_n-w_n$, $t_n+w_n\le t_3+w_3=\frac{65}{512}<\frac14$, and $w_n\le\frac1{64}t_n$. The arcs $I_n=I_{w_n}(q(t_n))$ are pairwise disjoint: for $m>n$ one has $|t_n-t_m|\ge t_{n+1}$ while $w_m+w_n\le w_{n+1}+w_n=\frac98w_n$, and $t_{n+1}=2^{-n-1}\ge\frac98\cdot2^{-3n}=\frac98w_n$; all arcs lie in $\{d(q(0),\cdot)<\frac14\}$, so the circular distance between $q(t_n)$ and $q(t_m)$ is the number $|t_n-t_m|$. Consequently $m(I_n)=2w_n$, the sets $I_n$ are pairwise disjoint, and $E\subseteq I_{1/4}(q(0))$. Moreover $q(t_n)\in I_n$, while $q(\frac32t_n)\notin I_m$ for every $m\ge3$: for $m=n$ the circular distance is $\frac12t_n>w_n$; for $m>n$ it is at least the distance to $t_{n+1}$, namely $t_n>w_m$; and for $m<n$, $t_m\ge2t_n$, so the distance is $t_m-\frac32t_n\ge\frac14t_m>w_m$, since $w_m=t_m^3\le\frac1{64}t_m$. [given, L1, algebra]

2.1 The data and their first properties. By [L1] and step 1.1, $E$ is Borel, so $f=\mathbf 1_E$ is Borel measurable. Since $0\le f\le1$, it lies in $L^\infty(\mathbb T,m)$ with $\|f\|_\infty\le1$; as $m(\mathbb T)=1$, it also lies in $L^1(\mathbb T,m)$ with $\|f\|_1\le1$. Hence the Poisson integral $u=P[f]$ is defined, is complex harmonic on $\mathbb D$, and satisfies $\|u_r\|_\infty\le1$ for every $0\le r<1$. [given, L1, L2, L3, algebra]

2.2 Kernel estimate near the point $q(0)$. Let $0\le r<1$ with $r\ge\frac12$, put $\varepsilon:=1-r$, and let $\eta\in E$; write $d:=d(q(0),\eta)$ and choose the representative $s\in(-\frac14,\frac14)$ of $\eta$, so that $|s|=d$. Since $\pi|s|<\frac{\pi}{4}<2$, [L4] gives $\sin(\pi|s|)\ge\frac{\pi}{3}|s|$, hence $1-\cos(2\pi s)=2\sin^2(\pi|s|)\ge\frac{2\pi^2}{9}|s|^2\ge2d^2$. By [L2], using $\varphi([0])=1$ and $1-2r\cos(2\pi s)+r^2=(1-r)^2+2r(1-\cos(2\pi s))$, and using $r\ge\frac12$ and $1-r^2\le2\varepsilon$, $$P(r,\eta)=\frac{1-r^2}{1-2r\cos(2\pi s)+r^2}\le\frac{2\varepsilon}{\varepsilon^2+2d^2}.$$ If moreover $\eta\in I_n$, then $d\ge t_n-w_n\ge\frac{63}{64}t_n$, so $2d^2\ge t_n^2$ and $P(r,\eta)\le\frac{2\varepsilon}{\varepsilon^2+t_n^2}$; integrating this constant bound over $I_n$ and using $m(I_n)=2w_n$ from step 1.1 gives $\int_{I_n}P(r,\eta)\,dm(\eta)\le\frac{4\varepsilon w_n}{\varepsilon^2+t_n^2}$. [given, step 1.1, L1, L2, L4, L5, algebra]

2.3 A fixed positive value near each arc. Fix $n\ge3$, put $r_n:=1-w_n$ and $z_n:=r_n\varphi([t_n])$, and let $J_n:=I_{w_n/2}(q(t_n))$, so that $J_n\subseteq I_n$ and $m(J_n)=w_n$ by step 1.1. Every $\eta\in J_n$ has a representative $t_n+\sigma$ with $|\sigma|<\frac12w_n$, and then [L4] gives $|e^{2\pi i\sigma}-1|^2=2-2\cos(2\pi\sigma)=4\sin^2(\pi\sigma)\le4\pi^2\sigma^2$, so $|e^{2\pi i\sigma}-1|\le2\pi|\sigma|$ and $$|\varphi(\eta)-z_n|=|e^{2\pi i\sigma}-(1-w_n)|\le|e^{2\pi i\sigma}-1|+w_n\le(\pi+1)w_n.$$ Since the kernel is positive and $f=\mathbf 1_E\ge\mathbf 1_{I_n}\ge\mathbf 1_{J_n}$, [L2] and [L5] give $$u(z_n)\ge\int_{J_n}P(z_n,\eta)\,dm(\eta)\ge m(J_n)\,\frac{1-r_n^2}{(\pi+1)^2w_n^2}=\frac{2-w_n}{(\pi+1)^2}\ge\frac{1}{(\pi+1)^2},$$ where $1-r_n^2=2w_n-w_n^2$. [given, step 1.1, L1, L2, L4, L5, algebra]

2.4 The boundary values have no limit at $1$. By [L1] the quotient map $q$ is continuous and $t_n\to0$, so $q(t_n)\to q(0)$ and $q(\frac32t_n)\to q(0)$. Step 1.1 gives $f(q(t_n))=1$ while $f(q(\frac32t_n))=0$ for every $n\ge3$; along the two sequences in $\mathbb T$ converging to $\varphi([0])=1$, the values of $f$ are constantly $1$ and constantly $0$. Hence $f$ has no limit at $\varphi([0])$. [given, step 1.1, L1, algebra]

3.1 The radial limit is zero. For $\frac12\le r<1$ and $\varepsilon=1-r$, [L2] and $f=\mathbf 1_E$ give $u(r\varphi([0]))=\int_E P(r,\eta)\,dm(\eta)$; since the arcs $I_n$ are pairwise disjoint with union $E$, monotone convergence applied to the partial sums of the nonnegative functions $P(r,\cdot)\mathbf 1_{I_n}$ gives $u(r\varphi([0]))=\sum_{n\ge3}\int_{I_n}P(r,\eta)\,dm(\eta)$, and step 2.2 bounds this by $\sum_{n\ge3}\frac{4\varepsilon w_n}{\varepsilon^2+t_n^2}$. Splitting the sum into the indices with $t_n\ge\varepsilon$ and those with $t_n<\varepsilon$: the first part is at most $4\varepsilon\sum_{n\ge3}w_n/t_n^2=4\varepsilon\sum_{n\ge3}2^{-n}=\varepsilon$, while the second is at most $\frac{4}{\varepsilon}\sum_{t_n<\varepsilon}w_n$, and the indices of the second part form a tail $\{n\ge N_0\}$ with $t_{N_0}<\varepsilon$ and $\sum_{n\ge N_0}2^{-3n}\le2\cdot2^{-3N_0}<2\varepsilon^3$, so the second part is at most $8\varepsilon^2$. Therefore $u(r\varphi([0]))\le\varepsilon+8\varepsilon^2$ for $\frac12\le r<1$, and $u(r\varphi([0]))\to0$ as $r\uparrow1$. [given, step 1.1, step 2.2, L2, L5, algebra]

3.2 The approach is tangential. For $n\ge3$, $|z_n-1|\ge|e^{2\pi it_n}-1|-w_n=2\sin(\pi t_n)-w_n$, and $\pi t_n\le\frac{\pi}{8}<2$, so [L4] gives $2\sin(\pi t_n)\ge\frac{2\pi}{3}t_n\ge2t_n$ and hence $|z_n-1|\ge2t_n-w_n\ge t_n$, because $w_n\le t_n$. Therefore $\frac{|z_n-1|}{1-|z_n|}=\frac{|z_n-1|}{w_n}\ge\frac{t_n}{w_n}=2^{2n}\to\infty$, while $|z_n-1|\le2\pi t_n+w_n\to0$, so $z_n\to1=\varphi([0])$. If $z_n\in\Gamma_A(1)$ for some $A>1$, then $|z_n-1|<A(1-|z_n|)=Aw_n$, contradicting $|z_n-1|\ge2^{2n}w_n$ as soon as $2^{2n}\ge A$; thus for every $A>1$ one has $z_n\notin\Gamma_A(1)$ for all sufficiently large $n$. [given, step 2.3, L1, L4, algebra]

4.1 Assembly. Step 2.1 exhibits a bounded Borel $f$ with values in $\{0,1\}$ whose Poisson integral $u$ is complex harmonic; step 3.1 gives the radial limit $u(r\varphi([0]))\to0$ at $1$, whereas step 2.3 gives $u(z_n)\ge(\pi+1)^{-2}>0$ along the sequence $z_n\to1$ of step 3.2, whose approach ratio $|z_n-1|\big/(1-|z_n|)$ is unbounded; step 2.4 records that the boundary data themselves have no limit at $1$. By step 3.2 each $z_n$ eventually lies outside every region $\Gamma_A(1)$, so the sequence tests a path that the almost-everywhere nontangential theorem [L6] does not control; no contradiction with that theorem arises, and radial convergence at a single boundary point does not force convergence along arbitrary tangential approaches to that point. [given, step 2.1, step 3.1, step 2.3, step 3.2, step 2.4, L6] ∎
