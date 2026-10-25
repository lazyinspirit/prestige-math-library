---
id: cex-classical-parabolic-corner-regularity-needs-compatible-initial-and-boundary-data
kind: counterexample
title: Incompatible initial and boundary values prevent corner continuity
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - def-parabolic-cylinder-and-parabolic-boundary
  - def-metric-continuity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§6.3, printed p. 159, problem (6.60); p. 160, Problem 6.13 explicitly imposes g restricted to boundary equals a"
    - title: "Per Kristen Jakobsen, An Introduction to Partial Differential Equations (2019)"
      url: "https://arxiv.org/pdf/1901.03022"
      locator: "Chapter 4, printed pp. 19–21, initial and boundary conditions"
---

## Statement refuted

The claim refuted is that the interval Dirichlet heat problem on
$(0,\pi)\times(0,T]$ with initial data $u(x,0)=1$ for $0<x<\pi$ and lateral data
$u(0,t)=u(\pi,t)=0$ for $t>0$ can be solved by a function $u$ that is
continuous on $[0,\pi]\times[0,T]$ and attains its data: no such continuous
function exists, because the two prescriptions disagree at the corners.

## Facts & Assumptions

**Given:** $T>0$, the rectangle $[0,\pi]\times[0,T]$, and the prescribed data $u(x,0)=1$ on $(0,\pi)$, $u(0,t)=u(\pi,t)=0$ on $(0,T]$.

[F1] Continuity at a point means the $\varepsilon$-$\delta$ condition of [[def-metric-continuity]]; in particular, if $p_k\to p$ in the domain then $u(p_k)\to u(p)$.

[F2] In the parabolic-cylinder vocabulary the initial face is $\overline\Omega\times\{0\}$, the lateral face is $\partial\Omega\times[0,T]$, and the closure of the cylinder contains the corners $(\partial\Omega\times\{0\})$ ([[def-parabolic-cylinder-and-parabolic-boundary]]).

## Counterexample

**Given:** $T>0$ and the data $u(x,0)=1$ on $(0,\pi)$, $u(0,t)=u(\pi,t)=0$ on $(0,T]$.

1.1 If $u$ is continuous on $[0,\pi]\times[0,T]$, then at the corner $(0,0)$ the sequence $(1/(k+1),0)$ lies in the initial face, converges to $(0,0)$, and $u(1/(k+1),0)=1$ for every $k\ge0$; [F1] therefore forces $u(0,0)=\lim_ku(1/(k+1),0)=1$. [F1, F2, given]

1.2 Along the lateral face, the sequence $(0,T/(k+1))$ converges to $(0,0)$ with $u(0,T/(k+1))=0$ for every $k\ge0$, so the same continuity forces $u(0,0)=\lim_ku(0,T/(k+1))=0$. [F1, F2, given]

2.1 Steps 1.1 and 1.2 assign the two different values $1$ and $0$ to $u(0,0)$, a contradiction; hence no function continuous on $[0,\pi]\times[0,T]$ attains both data sets. [step 1.1, step 1.2, given]

3.1 The obstruction is exactly the incompatibility of the limiting initial and lateral values at the parabolic corner, and it is independent of any interior solution theory: even a mild solution of the heat equation with these data cannot be made continuous up to the corner. [step 2.1, F2, given] ∎ 