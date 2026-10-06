---
id: lem-viscosity-testing-by-first-order-jets
kind: lemma
title: Viscosity testing by first-order jets, and closure of the jet inequality
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
- def-euclidean-local-extrema-and-critical-points
- thm-ftc-first-part
- thm-continuous-implies-integrable
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
- thm-euclidean-semicontinuous-extreme-value-theorem
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: (2.1)--(2.7), Definition 2.2 and Remark 2.4, printed pp. 9--12
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Sections 1--2, one-sided differentials and the test-function equivalence, printed pp. 15--18
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 2, one-sided differentials, printed pp. 6--9
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $U\subseteq\mathbb R^{n+1}$ be open and let
$H:U\times\mathbb R^n\to\mathbb R$ be continuous. For $w:U\to\mathbb R$ and
$z_0\in U$ define the first-order superjet and subjet
$$D^+w(z_0):=\{p=(p_x,p_t)\in\mathbb R^n\times\mathbb R:\ w(z)\le w(z_0)+\langle p,z-z_0\rangle+o(|z-z_0|)\ \ (z\to z_0)\},$$
$$D^-w(z_0):=-D^+(-w)(z_0)=\{p:\ w(z)\ge w(z_0)+\langle p,z-z_0\rangle+o(|z-z_0|)\ (z\to z_0)\}.$$
Then: (1) an upper semicontinuous $u:U\to\mathbb R$ is a viscosity subsolution
of $u_t+H(x,t,Du)=0$ in $U$ if and only if
$$p_t+H(z_0,p_x)\le0\qquad\text{for all }z_0\in U\text{ and all }p\in D^+u(z_0);$$
(2) a lower semicontinuous $v$ is a viscosity supersolution if and only if
$p_t+H(z_0,p_x)\ge0$ for all $z_0\in U$ and all $p\in D^-v(z_0)$; (3) if $u$
is such a subsolution, $z_k\to z_0$ in $U$ with $u(z_k)\to u(z_0)$, and
$p_k\in D^+u(z_k)$ with $p_k\to p$, then $p_t+H(z_0,p_x)\le0$; the analogous
closure statement holds for supersolutions and subjets. The closure statement
does not assert that $p$ itself belongs to $D^+u(z_0)$; that membership may
fail, and it is not needed. No choice principle is used.

## Facts & Assumptions

**Given:** An open $U\subseteq\mathbb R^{n+1}$, continuous $H:U\times\mathbb R^n\to\mathbb R$, an upper semicontinuous $u:U\to\mathbb R$, a lower semicontinuous $v:U\to\mathbb R$, and the superjet and subjet of the statement.

[F1] $u$ is a viscosity subsolution of $u_t+H(x,t,Du)=0$ in $U$ when $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$ holds for every $\phi\in C^1(U)$ and every $z_0\in U$ at which $u-\phi$ has a local maximum; $v$ is a viscosity supersolution when the reverse inequality holds at every local minimum of $v-\phi$ ([[def-viscosity-subsolution-and-supersolution]]).

[F2] A map $f$ defined near $a$ is totally differentiable at $a$ with derivative $Df(a)$ exactly when $f(a+h)=f(a)+Df(a)h+r(h)$ with $\|r(h)\|/\|h\|\to0$ as $h\to0$ ([[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]]).

[F3] If $g:[0,\rho]\to\mathbb R$ is continuous and $G(r):=\int_0^rg$, then $G$ is differentiable at every $r\in[0,\rho]$ with $G'(r)=g(r)$ ([[thm-ftc-first-part]]), the integral existing because a continuous function on a closed bounded interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

[F4] Closed bounded Euclidean sets are compact, and a finite-valued upper semicontinuous function on a nonempty compact set is bounded above ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[thm-euclidean-semicontinuous-extreme-value-theorem]]).

## Proof

**Proof technique:** a test function gives its own jet directly; conversely a jet is converted into a $C^1$ majorant whose radial part is built by integrating a continuous dyadic modulus.

1.1 Test functions produce jets. Suppose $\phi\in C^1(U)$ and $u-\phi$ has a local maximum at $z_0$; then for $z$ near $z_0$ we have $u(z)-u(z_0)\le\phi(z)-\phi(z_0)=\langle D\phi(z_0),z-z_0\rangle+o(|z-z_0|)$ by [F2], so $D\phi(z_0)\in D^+u(z_0)$. If instead $v-\phi$ has a local minimum at $z_0$, the same computation with the inequality reversed gives $D\phi(z_0)\in D^-v(z_0)$. Hence the jet inequality for all jets implies the test-function inequality of [F1], in both the sub- and the supersolution case. [F1, F2, algebra]

1.2 Jets produce test functions. Assume $u$ is an upper semicontinuous subsolution in the test-function sense and let $p\in D^+u(z_0)$. Choose $\rho>0$ with $\overline B(z_0,\rho)\subseteq U$ and put $R(h):=u(z_0+h)-u(z_0)-\langle p,h\rangle$ for $|h|\le\rho$. By the definition of $D^+u(z_0)$, $\limsup_{h\to0}R(h)/|h|\le0$, so $r^+(h):=\max\{R(h),0\}=o(|h|)$. Define $\mu(s):=\sup\{r^+(h)/|h|:0<|h|\le s\}$ for $0<s\le\rho$. This supremum is finite: the jet condition bounds the quotient near $h=0$, and on every remaining closed annulus $u(z_0+h)$ is bounded above by upper semicontinuity and compactness [F4]. Thus $\mu$ is finite and nondecreasing, $\mu(s)\to0$ as $s\downarrow0$, and $r^+(h)\le\mu(|h|)|h|$. The function $\mu$ need not be continuous, so we first construct a continuous majorant. Put $r_k:=2^{-k}\rho$ and $a_k:=\mu(r_k)$ for $k\ge0$. Define $\nu(0):=0$, set $\nu(r_k):=a_{k-1}$ for $k\ge1$, interpolate linearly on each $[r_{k+1},r_k]$, and set $\nu(s):=a_0$ on $[\rho/2,\rho]$. The definitions agree at $r_1=\rho/2$, $\nu$ is continuous with $\nu(s)\to0$ at $0$, and $\nu(s)\ge\mu(s)$: on $[r_{k+1},r_k]$, $\nu(s)\ge a_k=\mu(r_k)\ge\mu(s)$, while on $[\rho/2,\rho]$ it equals $\mu(\rho)$. Let $\sigma(s):=\max\{0,\min\{1,2(\rho-s)/\rho\}\}$, continuous with $\sigma=1$ on $[0,\rho/2]$ and $\sigma(\rho)=0$, and put $g(s):=2\nu(\min\{2s,\rho\})\sigma(s)$; this is continuous on $[0,\rho]$, with $g(0)=g(\rho)=0$. Define $\lambda(r):=\int_0^r g(s)\,ds$ for $0\le r\le\rho$ and $\lambda(r):=\lambda(\rho)$ for $r>\rho$. By [F3], $\lambda'(r)=g(r)$ on $[0,\rho]$, and $g(\rho)=0$ makes the constant extension $C^1$. For $0<r\le\rho/2$, $$\lambda(r)\ge\int_{r/2}^r2\nu(2s)\,ds\ge\int_{r/2}^r2\mu(r)\,ds=r\mu(r),$$ because $2s\ge r$, $\nu(2s)\ge\mu(2s)\ge\mu(r)$ and $\sigma=1$ there. Hence $\lambda(|h|)\ge r^+(h)\ge R(h)$ for $0<|h|\le\rho/2$. Define $\phi(z):=u(z_0)+\langle p,z-z_0\rangle+\lambda(|z-z_0|)$ on $U$. Then $u-\phi$ has a local maximum at $z_0$, and $D\phi(z_0)=p$ because $\lambda(r)/r\le\max_{0\le s\le r}g(s)\to0$. The radial term has gradient $g(|z-z_0|)(z-z_0)/|z-z_0|$ off $z_0$, which tends to $0$ there; thus $\phi\in C^1(U)$. The subsolution inequality [F1] gives $p_t+H(z_0,p_x)\le0$. The subjet case applies this construction to $-v$ and $-p$, then negates the resulting test function, giving $p_t+H(z_0,p_x)\ge0$ for every $p\in D^-v(z_0)$. [F1, F2, F3, F4, algebra]

2.1 Parts (1) and (2). Step 1.1 shows that the jet inequalities imply the test-function inequalities. Step 1.2 proves the reverse implication by constructing a $C^1$ test for every prescribed jet, with signs reversed for subjets. Hence both equivalences (1) and (2) hold. [step 1.1, step 1.2, F1]

3.1 Closure. Let $u$ be a subsolution in the test-function sense, let $z_k\to z_0$ in $U$, and let $p_k\in D^+u(z_k)$ with $p_k\to p$. Fix $k$. By step 2.1, part (1), applied at $z_k$, we have $p_k^t+H(z_k,p_k^x)\le0$. Since $(z_k,p_k)\to(z_0,p)$ and $H$ is continuous, passing to the limit in the inequality gives $p_t+H(z_0,p_x)\le0$, which is the closure statement for subsolutions; the same argument with the inequalities reversed and subjets in place of superjets gives the supersolution statement. The limit $p$ need not lie in $D^+u(z_0)$, and this is not used. [step 2.1, algebra] ∎ 
