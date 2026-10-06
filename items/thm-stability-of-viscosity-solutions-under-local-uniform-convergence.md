---
id: thm-stability-of-viscosity-solutions-under-local-uniform-convergence
kind: theorem
title: Stability of viscosity sub-, super- and solutions under locally uniform convergence
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-viscosity-subsolution-and-supersolution
- def-discontinuous-viscosity-solution
- lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation
- def-hamilton-jacobi-cauchy-problem
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
- cor-euclidean-closed-balls-and-spheres-are-compact
- def-metric-compactness
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 1 Section 4, Theorem 1.13 and its proof, printed pp. 21--22
  - title: Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)
    url: https://arxiv.org/pdf/math/9207212
    locator: Section 6, Lemma 6.1 and Remark 6.4, printed pp. 34--35 (half-relaxed stability and its relation to local uniform convergence)
  - title: Alberto Bressan, Viscosity Solutions of Hamilton--Jacobi Equations and Optimal Control Problems, complete author lecture notes, Penn State University (PDF records Fall 2019 revision)
    url: https://sites.psu.edu/bressan/files/2025/05/HJlnotes24.pdf
    locator: Section 4, stability, printed pp. 12--14
verification:
  precheck: pass
---

## Statement

Let $O\subseteq\mathbb R^n$ be open, $T>0$, $Z=O\times(0,T)$, and
$Z_0=O\times[0,T)$. Let
$H_k,H:O\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous with
$H_k\to H$ uniformly on every compact subset as $k\to\infty$. For each $k$,
let $u_k:Z_0\to\mathbb R$ be continuous, with $u_k$ restricted to $Z$ a
viscosity subsolution of $(u_k)_t+H_k(x,t,Du_k)=0$ and with
$u_k(x,0)=u_0^{(k)}(x)$. Suppose $u_0^{(k)}\to u_0$ locally uniformly on $O$
and $u_k\to u$ locally uniformly on $Z_0$. Then $u$ is a viscosity subsolution
of $u_t+H(x,t,Du)=0$ in $Z$ and its continuous initial trace is $u_0$. The
same statement holds for supersolutions, and combining the two, locally
uniform limits of viscosity solutions are viscosity solutions. The conclusion
is insensitive to the sign of the approximation: no differentiability and no
monotonicity of convergence is used, only local uniformity up to the initial
face. No choice principle is used.

## Facts & Assumptions

**Given:** Open $O\subseteq\mathbb R^n$, $T>0$, $Z=O\times(0,T)$, $Z_0=O\times[0,T)$, continuous $H_k,H$, continuous $u_k:Z_0\to\mathbb R$ with $u_k\to u$ locally uniformly on $Z_0$, continuous data $u_0^{(k)}\to u_0$ locally uniformly on $O$, and $u_k|_Z$ a viscosity subsolution of $(u_k)_t+H_k(x,t,Du_k)=0$.

[F1] $u_k|_Z$ is upper semicontinuous and satisfies $\phi_t(z_0)+H_k(z_0,D\phi(z_0))\le0$ at every $z_0\in Z$ at which $u_k-\phi$ has a local maximum, $\phi\in C^1(Z)$ ([[def-viscosity-subsolution-and-supersolution]]).

[F2] If $v-\phi$ has a local maximum at $z_0$ for a $C^1$ test $\phi$, and $r>0$ is such that $v-\phi\le v(z_0)-\phi(z_0)$ on $\overline B(z_0,r)\subseteq U$, then for every $\varepsilon>0$ the function $\phi_\varepsilon:=\phi+\varepsilon|z-z_0|^4$ is $C^1$ with $\phi_\varepsilon(z_0)=\phi(z_0)$, $D\phi_\varepsilon(z_0)=D\phi(z_0)$ and $v-\phi_\varepsilon$ strictly maximised over $\overline B(z_0,r)$ at $z_0$ ([[lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation]]).

[F3] A nonempty subset of $\mathbb R^m$ is compact if and only if it is closed and bounded, and every continuous real-valued function on a nonempty compact subset attains a maximum and a minimum there ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F4] In this statement, local uniform convergence on $Z_0$ means that for every compact $K\subseteq Z_0$ and every $\eta>0$ there is $N$ such that $|u_k(z)-u(z)|<\eta$ for all $k\ge N$ and $z\in K$; the Hamiltonians and data have the analogous meaning on their stated domains. Compactness here is intrinsic ([[def-metric-compactness]]). In particular $u$ is continuous: on a small compact relative neighbourhood of any point, approximate $u$ within $\eta/3$ by one continuous $u_k$, then use continuity of that $u_k$ and the triangle inequality to bound the variation of $u$ by $\eta$. This convergence condition is an explicit convention here.

## Proof

**Proof technique:** compact maximum localisation and passage to the limit in the test inequality.

1.1 The strict-contact case. Let $\phi\in C^1(Z)$ and suppose $u-\phi$ has a strict local maximum at $z_0\in Z$. Choose $r>0$ with $K:=\overline B(z_0,r)\subseteq Z$ and strict inequality at every point of $K\setminus\{z_0\}$. For each $k$, let $M_k$ be the nonempty compact set of maximisers of $u_k-\phi$ on $K$; it is compact because $u_k-\phi$ is continuous. For every $r_0\in(0,r)$, the upper semicontinuous function $u-\phi$ has a strict gap below its value at $z_0$ on the compact annulus $K\setminus B(z_0,r_0)$. Uniform convergence on $K$ therefore puts every point of $M_k$ inside $B(z_0,r_0)$ for all sufficiently large $k$. Since $r_0$ is arbitrary, $\sup_{z\in M_k}|z-z_0|\to0$, without choosing a maximiser for each $k$. Every point $z\in M_k$ is then an interior local maximum of $u_k-\phi$ and satisfies [F1]. If the desired residual $\phi_t(z_0)+H(z_0,D\phi(z_0))$ were positive, continuity would make $\phi_t(z)+H(z,D\phi(z))$ positive on a neighbourhood of $z_0$; uniform convergence of $H_k$ to $H$ on the compact set $K\times D\phi(K)$ would make $\phi_t(z)+H_k(z,D\phi(z))>0$ there for all large $k$. This contradicts [F1] at every point of the nonempty set $M_k$. Hence the subsolution inequality holds at $z_0$. [F1, F3, F4, algebra]

2.1 The initial trace and the supersolution case. The local uniform convergence on $Z_0$ makes $u$ continuous on $Z_0$ with $u(x,0)=\lim_ku_k(x,0)=\lim_ku_0^{(k)}(x)=u_0(x)$ for every $x\in O$, the convergence on compact subsets of $O$ being uniform; hence $u$ has the continuous initial trace $u_0$ and satisfies the relaxed initial condition $\limsup_{(y,s)\to(x,0),s>0}u(y,s)=u_0(x)$. The same argument as in step 1.1 with local minima in place of local maxima, and the supersolution inequality of [F1] in place of the subsolution inequality, shows that a locally uniform limit of supersolutions is a supersolution with the same initial trace; no sign of the convergence is used, only that the test function is fixed. [F1, F4, algebra]

3.1 Removal of strictness and conclusion. If $u-\phi$ merely has a (nonstrict) local maximum at $z_0$, fix $r>0$ with $\overline B(z_0,r)\subseteq Z$ on which the maximum inequality holds and strictify: by [F2], $\phi_\varepsilon=\phi+\varepsilon|z-z_0|^4$ satisfies $D\phi_\varepsilon(z_0)=D\phi(z_0)$, $\partial_t\phi_\varepsilon(z_0)=\phi_t(z_0)$ and makes $u-\phi_\varepsilon$ strictly maximised at $z_0$ over $\overline B(z_0,r)$; step 1.1 applied to $\phi_\varepsilon$ gives $\phi_t(z_0)+H(z_0,D\phi(z_0))\le0$. Hence $u$ is a viscosity subsolution of the limit equation in $Z$, and by step 2.1 it carries the datum $u_0$; the supersolution statement and the solution statement follow by step 2.1 and by combining the two one-sided conclusions. [step 1.1, step 2.1, F2] ∎

## Remarks

- **Where local uniformity up to $t=0$ is needed.** The interior equation only uses convergence on compact subsets of $Z$; the initial trace uses the convergence on compact subsets of $Z_0$, which includes the initial face. Interior convergence alone would not imply the boundary conclusion, and the theorem does not claim it.
- **Choice.** The proof uses the sets of maximisers on compact balls and the uniform strict gap away from the limiting contact; it selects no sequence of points and uses no choice principle.
