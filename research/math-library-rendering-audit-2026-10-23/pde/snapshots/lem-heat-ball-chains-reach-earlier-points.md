---
id: lem-heat-ball-chains-reach-earlier-points
kind: lemma
title: Heat-ball chains reach earlier points
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - def-countable-choice
  - def-heat-ball-and-its-slices
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
  - thm-exponential-beats-every-polynomial
  - def-lipschitz-holder-contraction
  - thm-of-archimedean
  - cor-archimedean-reciprocal
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - def-metric-compactness
  - def-metric-ball
  - def-laplacian-of-a-c2-function
  - thm-natural-logarithm-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: '§6.3, printed p. 158, proof of Theorem 6.15 ("consider the heat balls with top point on this path; by compactness finitely many cover the path")'
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 5, §5.1 (normalisation and scaling of the Gaussian kernel used in the slice bound)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, let
$0<t_1<t_0\le T<\infty$, and let $\gamma:[0,1]\to\Omega$ be a Lipschitz path
with compact image $K$. Then there is $\rho>0$ such that
$E_\rho(P)\subseteq\Omega\times(0,T]$ for every $P\in K\times[t_1,t_0]$, and for
every $s\in[t_1,t_0)$ there are $N\ge1$ and points
$P_0=(\gamma(0),t_0),P_1,\dots,P_N=(\gamma(1),s)$, all lying in
$K\times[t_1,t_0]$, with $P_{j+1}\in E_\rho(P_j)$ for all $0\le j<N$.

## Facts & Assumptions

**Given:** Countable Choice, an open set $\Omega\subseteq\mathbb R^n$, times $0<t_1<t_0\le T<\infty$, a Lipschitz path $\gamma:[0,1]\to\Omega$ with compact image $K$, and $s\in[t_1,t_0)$.

[A1] Countable Choice is the ambient hypothesis ([[def-countable-choice]]).

[F1] Heat balls are enclosed in a spatial ball and a time interval: $E_r(t,x)\subseteq\overline B\bigl(x,\frac r2\sqrt{2n/\pi e}\bigr)\times[t-r^2/4\pi,t]$ for all $(t,x)$ and $r>0$ ([[def-heat-ball-and-its-slices]]).

[F6] For $0<\tau<r^2/(4\pi)$ the time slice of $E_r(t,x)$ at depth $\tau$ is the closed ball of radius $\rho_n(\tau)=\sqrt{2n\tau\log\frac{r^2}{4\pi\tau}}$ ([[def-heat-ball-and-its-slices]]).

[F2] For nonempty $A$, put $d_A(x)=\inf_{z\in A}|x-z|$. The triangle inequality gives $d_A(x)\le|x-y|+d_A(y)$ and its reverse, hence $|d_A(x)-d_A(y)|\le|x-y|$. Thus this distance is $1$-Lipschitz and continuous. A continuous real function on a nonempty compact set attains its minimum ([[def-lipschitz-holder-contraction]], [[thm-extreme-value-metric]], [[def-metric-compactness]]).

[F3] $\log:(0,\infty)\to\mathbb R$ is strictly increasing and onto $\mathbb R$ ([[thm-natural-logarithm-laws]]).

[F4] Archimedean property: for every real $x$ there is a natural number $n\ge1$ with $x<n$; and for every $\varepsilon>0$ there is $n\ge1$ with $1/n<\varepsilon$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

[F5] Balls in a metric space are the sets $B(x,r)=\{y:d(x,y)<r\}$ ([[def-metric-ball]]), and a Lipschitz path satisfies $|\gamma(u)-\gamma(v)|\le L|u-v|$ for its Lipschitz constant $L$ ([[def-lipschitz-holder-contraction]]).

## Proof

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^n$, times $0<t_1<t_0\le T<\infty$, a Lipschitz path $\gamma$ with compact image $K$, and $s\in[t_1,t_0)$.

1.1 The image $K$ is nonempty. If $A:=\mathbb R^n\setminus\Omega$ is nonempty, [F2] makes $d_A$ continuous and gives an attained minimum $d=\min_Kd_A>0$: each $x\in K\subseteq\Omega$ has a ball $B(x,r_x)\subseteq\Omega$, so $d_A(x)\ge r_x>0$, including at a minimum point. If $A$ is empty, set $d=1$. [A1, F2, F5, given]


2.1 Choose $\rho>0$ with $\frac\rho2\sqrt{2n/\pi e}<d$ and $\rho^2/(4\pi)<t_1$ (possible by [F4]); then for every $P=(x,t)\in K\times[t_1,t_0]$, [F1] gives $E_\rho(P)\subseteq\overline B(x,\frac\rho2\sqrt{2n/\pi e})\times[t-\rho^2/4\pi,t]$, and the spatial ball lies in $\Omega$ because its radius is less than $d\le d_A(x)$ when $A$ is nonempty, and the inclusion is automatic otherwise, while $t-\rho^2/4\pi\ge t_1-\rho^2/4\pi>0$ and $t\le t_0\le T$; hence $E_\rho(P)\subseteq\Omega\times(0,T]$. [step 1.1, F1, F4, given]

3.1 Let $L$ be a Lipschitz constant of $\gamma$ and put $\delta:=(t_0-s)/N>0$ and $P_j:=(\gamma(j/N),t_0-j\delta)$ for $0\le j\le N$, so $P_0=(\gamma(0),t_0)$ and $P_N=(\gamma(1),s)$. By [F5], $|\gamma((j+1)/N)-\gamma(j/N)|\le L/N$, so $P_{j+1}\in E_\rho(P_j)$ holds by [F6] as soon as $L^2/N^2\le2n\delta\log\frac{\rho^2}{4\pi\delta}$, which is implied by $L^2\le2n(t_0-s)\log\frac{\rho^2N}{4\pi(t_0-s)}=:R(N)$ together with $\delta<\rho^2/(4\pi)$; by [F3] the map $N\mapsto R(N)$ is unbounded above and $N>(4\pi(t_0-s))/\rho^2$ for all large $N$, so [F4] supplies such an $N$. [step 2.1, F3, F4, F5, F6, given]

4.1 The $\rho$ of step 2.1 and the chain of step 3.1, together with the fact that $s\in[t_1,t_0)$ was arbitrary, are exactly the assertions of the lemma; the chain points $P_j=(\gamma(j/N),t_0-j\delta)$ lie on the graph of the path, hence in $K\times[s,t_0]\subseteq K\times[t_1,t_0]$, and since $\Omega$ is open and every two points of a connected component of $\Omega$ are joined by a polygonal, hence Lipschitz, path ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]), the chain hypothesis is never vacuous for such points. [step 2.1, step 3.1, given] ∎ 
