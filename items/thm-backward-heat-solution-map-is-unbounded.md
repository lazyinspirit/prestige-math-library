---
id: thm-backward-heat-solution-map-is-unbounded
kind: theorem
title: The backward heat solution map is unbounded
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - thm-chain-rule
  - thm-derivative-of-exponential
  - def-countable-choice
  - lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval
  - lem-ltwo-normalisation-of-sine-modes-on-the-interval
  - def-heat-equation-heat-operator-and-cauchy-problem
  - def-laplacian-of-a-c2-function
  - thm-sine-and-cosine-derivatives
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-exponential-beats-every-polynomial
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-l-p-space-as-a-quotient-by-null-functions
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
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: 'Chapter 5, §5.1.3, printed pp. 131–132, Example 5.6 ($f_n=e^{-n}\sin(nx)$, $u_n=e^{-n}\sin(nx)e^{n^2t}$: loss of continuous dependence for the backward heat equation)'
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.2, Remark 3.2.3(c), printed p. 111–112 (the initial-value problem in the direction of negative time is ill-posed)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: '§3.1, printed pp. 50–54 (Dirichlet sine modes and the energy method on $(0,1)$); §6.4, printed pp. 162–163, Theorem 6.21 (backwards uniqueness, used through the local backward-uniqueness lemma)'
---

## Statement

Assume Countable Choice. Let $T>0$ and consider the heat equation
$u_t=u_{xx}$ on $(0,\pi)\times(0,T]$ with homogeneous Dirichlet boundary data
$u(0,t)=u(\pi,t)=0$.

**Well-definedness of the terminal-to-initial map.** If a $C^{4,2}$ function $w$
on $[0,\pi]\times[0,T]$ solves this problem with $w(x,T)=0$ for all $x$, then
$w\equiv0$
([[lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval]]). Hence
on the class of $C^{4,2}$ solutions the terminal data determine the solution, and
the map $S$ sending a terminal datum $u(\cdot,T)$ to the initial state
$u(\cdot,0)$ is well defined.

**Unboundedness.** For every integer $k\ge1$ the function
$$u_k(x,t):=e^{k^2(T-t)}\sin(kx)$$
is a classical solution of $u_t=u_{xx}$ on $(0,\pi)\times(0,T]$ with
$u_k(0,t)=u_k(\pi,t)=0$, initial state $u_k(\cdot,0)=e^{k^2T}\sin(k\cdot)$ and
terminal data $u_k(\cdot,T)=\sin(k\cdot)$. Consequently there is no constant
$C<\infty$ with
$$\|u(\cdot,0)\|_{L^2(0,\pi)}\le C\,\|u(\cdot,T)\|_{L^2(0,\pi)}$$
for all $C^{4,2}$ solutions $u$ of this problem: the solutions
$\tilde u_k(x,t)=e^{-k^2t}\sin(kx)$ have terminal data
$g_k=e^{-k^2T}\sin(k\cdot)$ with
$\|g_k\|_2=\sqrt{\pi/2}\,e^{-k^2T}\to0$ while
$\|\tilde u_k(\cdot,0)\|_2=\sqrt{\pi/2}$ for every $k$. Since
$Sg_k=\sin(k\cdot)=e^{k^2T}g_k$, the terminal-to-initial map multiplies the
$k$-th sine mode by $e^{k^2T}$ and is unbounded with respect to the
$L^2(0,\pi)$ norms on its domain and range: the backward heat problem on a
bounded interval has no norm-stable solution operator, and the amplification
factor of the $k$-th Dirichlet mode is exactly $e^{k^2T}$.

## Facts & Assumptions

**Given:** Countable Choice, $T>0$, the interval $(0,\pi)$, and an integer $k\ge1$.

[A1] Countable Choice is the ambient hypothesis, inherited through the backward-uniqueness and $L^2$ suppliers ([[def-countable-choice]]).

[F1] Backward uniqueness: a $C^{4,2}$ function on $[0,\pi]\times[0,T]$ satisfying $w_t=w_{xx}$, $w(0,t)=w(\pi,t)=0$ and $w(x,T)=0$ vanishes identically ([[lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval]]).

[F2] On the interval the heat operator is $\partial_t-\partial_x^2$ ([[def-heat-equation-heat-operator-and-cauchy-problem]], [[def-laplacian-of-a-c2-function]]); the exponential has derivative itself ([[thm-derivative-of-exponential]]) and compositions use [[thm-chain-rule]]; sine and cosine satisfy $(\sin)'=\cos$, $(\cos)'=-\sin$ ([[thm-sine-and-cosine-derivatives]]) and $\sin(m\pi)=0$ for every integer $m$ ([[thm-sine-cosine-zero-sets-and-fundamental-period]]).

[F3] The $L^2(0,\pi)$ inner product is $\langle f,g\rangle=\int_0^\pi fg$ on the quotient space of [[def-l-p-space-as-a-quotient-by-null-functions]], with $\|f\|_2^2=\int_0^\pi f^2$ ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]), and $\|\sin(k\cdot)\|_2=\sqrt{\pi/2}$ ([[lem-ltwo-normalisation-of-sine-modes-on-the-interval]]).

[F4] $e^{-k^2T}\to0$ as $k\to\infty$, faster than every polynomial ([[thm-exponential-beats-every-polynomial]]).

## Proof

**Given:** Countable Choice, $T>0$ and $k\ge1$.

1.1 If $u_1,u_2$ are $C^{4,2}$ solutions with $u_i(0,t)=u_i(\pi,t)=0$ and the same terminal data $u_1(\cdot,T)=u_2(\cdot,T)$, then $w:=u_1-u_2$ is $C^{4,2}$ and satisfies $w_t=w_{xx}$, $w(0,t)=w(\pi,t)=0$ and $w(x,T)=0$, so [F1] gives $w\equiv0$; hence the terminal-to-initial map $S$ is well defined on the terminal data of the class. [A1, F1, given]

1.2 For every $k\ge1$ the function $u_k(x,t)=e^{k^2(T-t)}\sin(kx)$ has $\partial_tu_k=-k^2u_k$ and, by [F2], $\partial_x^2u_k=-k^2\sin(kx)e^{k^2(T-t)}=-k^2u_k$, with boundary values $u_k(0,t)=\sin0=0$ and $u_k(\pi,t)=\sin(k\pi)=0$; the same computation with $e^{-k^2t}$ shows that $\tilde u_k(x,t)=e^{-k^2t}\sin(kx)$ is a solution with $\tilde u_k(\cdot,0)=\sin(k\cdot)$ and terminal data $g_k=e^{-k^2T}\sin(k\cdot)$. [F2, given]

2.1 By [F3] and scaling by the positive factor $e^{-k^2T}$, $\|g_k\|_2=e^{-k^2T}\|\sin(k\cdot)\|_2=\sqrt{\pi/2}\,e^{-k^2T}$, while $\|\tilde u_k(\cdot,0)\|_2=\|\sin(k\cdot)\|_2=\sqrt{\pi/2}$. [step 1.2, F3, given]

2.2 By [F4] the sequence $e^{-k^2T}$ tends to $0$; consequently the terminal data $g_k$ of step 1.2 satisfy $\|g_k\|_2=\sqrt{\pi/2}\,e^{-k^2T}\to0$ while $\|\tilde u_k(\cdot,0)\|_2=\sqrt{\pi/2}$ stays constant. [step 1.2, F4, given]

3.1 Since $g_k$ are admissible terminal data with $\|g_k\|_2\to0$ but $Sg_k=\sin(k\cdot)$ and $\|\sin(k\cdot)\|_2=\sqrt{\pi/2}$ for every $k$, no finite constant $C$ satisfies $\|u(\cdot,0)\|_2\le C\|u(\cdot,T)\|_2$ on the class, so $S$ is unbounded; explicitly $S$ multiplies the $k$-th sine mode by $e^{k^2T}$, which is the amplification factor asserted. [step 1.1, step 1.2, step 2.2, F3, given] ∎ 