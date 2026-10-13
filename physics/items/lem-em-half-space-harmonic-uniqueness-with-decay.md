---
id: lem-em-half-space-harmonic-uniqueness-with-decay
kind: lemma
title: "Uniqueness for harmonic functions on a punctured half-space with zero trace, decaying at the pole and at infinity"
status: published
origin: session
dependency_level: 0
domain: mathematics
deps: [thm-weak-maximum-principle-for-the-laplacian, def-laplacian-of-a-c2-function, def-laplace-fundamental-solution-with-positive-minus-laplacian-sign, lem-laplace-fundamental-solution-is-harmonic-off-its-pole, def-metric-ball, def-metric-topology, def-metric-space, def-metric-interior-closure-boundary, def-metric-continuity, thm-metric-closure-characterisation, cor-euclidean-closed-balls-and-spheres-are-compact, def-ck-euclidean-maps-and-diffeomorphisms, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-componentwise-limits-and-continuity, def-countable-choice]
dependency_roles:
  thm-weak-maximum-principle-for-the-laplacian: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-laplace-fundamental-solution-with-positive-minus-laplacian-sign: mathematical-premise
  lem-laplace-fundamental-solution-is-harmonic-off-its-pole: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-interior-closure-boundary: mathematical-premise
  def-metric-continuity: mathematical-premise
  thm-metric-closure-characterisation: mathematical-premise
  cor-euclidean-closed-balls-and-spheres-are-compact: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations (University of California, Davis, 2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§2.3.1 Theorem 2.17 and following subharmonic extension, printed pp. 27-28 (weak maximum principle for the Laplacian on bounded open sets)."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript)"
      url: https://web.archive.org/web/20250601000000id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf
      locator: "§5.4, maximum principle and uniqueness discussion, printed pp. 124-128."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $H:=\{x\in\mathbb R^3:x_3>0\}$ be the open upper half-space, let $a>0$ and $p:=a e_3\in H$, where $e_3:=(0,0,1)$. Let $w:\overline H\setminus\{p\}\to\mathbb R$ be a function (closure as in [[def-metric-interior-closure-boundary]]) with:

(i) $w$ is continuous ([[def-metric-continuity]]) on $\overline H\setminus\{p\}$ and of class $C^2$ with $\Delta w=0$ on $H\setminus\{p\}$ ([[def-laplacian-of-a-c2-function]], [[def-ck-euclidean-maps-and-diffeomorphisms]]);

(ii) $w=0$ on $\partial H=\{x_3=0\}$;

(iii) $|x-p|w(x)\to0$ as $x\to p$, $x\ne p$;

(iv) $w(x)\to0$ as $|x|\to\infty$ within $H$: for every $\varepsilon>0$ there is $R>0$ with $|w(x)|\le\varepsilon$ for all $x\in H\setminus\overline B_R(0)$.

Then $w=0$ on $H\setminus\{p\}$.

The conclusion is a uniqueness statement for the stated class only: no removable-singularity theorem, no pole condition beyond the sub-Coulomb growth (iii), no boundary regularity of $\partial H$ beyond the flat graph, and no claim about $w$ outside $H$ are asserted.

## Facts & Assumptions


**Given:** The open upper half-space $H=\{x_3>0\}$, the point $p=ae_3$ with $a>0$, and a function $w:\overline H\setminus\{p\}\to\mathbb R$ satisfying (i)-(iv) of the statement. Write $B_r(q)$ for the open ball and use the Euclidean norm and metric on $\mathbb R^3$.

[F1] The weak maximum principle: if $\Omega\subseteq\mathbb R^n$, $n\ge2$, is bounded, nonempty and open and $u\in C^2(\Omega)\cap C(\overline\Omega)$ satisfies $\Delta u\ge0$ on $\Omega$, then $\max_{\overline\Omega}u=\max_{\partial\Omega}u$ ([[thm-weak-maximum-principle-for-the-laplacian]]).

[F2] A $C^2$ function is harmonic where $\Delta u=0$; $\Delta$ is defined as the sum of the pure second partial derivatives, is linear on $C^2$ functions and annihilates constants ([[def-laplacian-of-a-c2-function]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] For $n=3$ the fundamental solution is $\Phi(x)=|x|^{-1}/\omega_2$ with $\omega_2>0$, and for every pole $q$ the function $x\mapsto\Phi(x-q)$ is smooth and harmonic on $\mathbb R^3\setminus\{q\}$; the function $b_q(x):=|x-q|^{-1}=\omega_2\,\Phi(x-q)$ is therefore a positive constant multiple of a harmonic function, hence $C^\infty$ and harmonic off $q$, and it is continuous wherever it is defined ([[def-laplace-fundamental-solution-with-positive-minus-laplacian-sign]], [[lem-laplace-fundamental-solution-is-harmonic-off-its-pole]], [[def-laplacian-of-a-c2-function]]).

[F4] An open ball is open, its closure is the corresponding closed ball, and $x\mapsto|x-q|$ is continuous for the Euclidean metric; the reciprocal $t\mapsto1/t$ is continuous on $t>0$; a function with $|x-q|\ge\delta>0$ on its domain has $|b_q(x)-b_q(y)|\le|x-y|/\delta^2$ there, by the reverse triangle inequality ([[def-metric-ball]], [[def-metric-topology]], [[def-metric-space]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-metric-continuity]], [[thm-componentwise-limits-and-continuity]]).

[F5] Closure is the smallest closed superset: if $A\subseteq F$ and $F$ is closed then $\overline A\subseteq F$; closed balls and spheres in $\mathbb R^3$ are compact, hence closed ([[thm-metric-closure-characterisation]], [[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[F6] The boundary of the open set $U$ is $\partial U=\overline U\setminus U$; for an open set the interior is the set itself ([[def-metric-interior-closure-boundary]]).

[F7] Unwinding hypothesis (iii): for every $\varepsilon>0$ there is $\delta>0$ with $|w(x)|\le\varepsilon/|x-p|$ for all $x$ in $\overline H\setminus\{p\}$ with $0<|x-p|<\delta$ ([[def-metric-continuity]]).

[F8] Hypothesis (iv) says exactly that for every $\varepsilon>0$ there is $\rho>0$ with $|w(x)|\le\varepsilon$ for all $x\in H$ with $|x|>\rho$ ([[def-metric-ball]]).

[F9] Countable Choice holds in the ambient measure conventions inherited from the kernel supplier; the argument below is pointwise and uses no choice principle ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix $y\in H\setminus\{p\}$ and $\eta>0$. By [F8] there is $\rho>0$ with $|w|\le\eta$ on $H\cap\{|x|>\rho\}$; put $R:=\max\{\rho,2a,|y|\}+1$, so that $R>|p|+a$, $R>|y|$ and $|w|\le\eta$ on $H\cap\{|x|\ge R\}$. By [F7] there is $\delta_0>0$ with $|w(x)|\le\eta/|x-p|$ whenever $0<|x-p|<\delta_0$; put $\delta:=\tfrac12\min\{\delta_0,a/2,|y-p|,R-|p|\}$, so $0<\delta<a/2$, $\delta<|y-p|$, $\delta<R-|p|$ and $\delta<\delta_0$. Define the open set $U:=H\cap B_R(0)\cap\{x:|x-p|>\delta\}$, the barrier $b(x):=|x-p|^{-1}$, and $v_\pm:=\pm w-\eta(1+b)$ on $U$. [given, F3, F7, F8]

2.1 $U$ is bounded, nonempty and open, and $y\in U$; explicitly, $R>|y|$ and $\delta<|y-p|$ put $y$ in $U$. The closure satisfies $\overline U\subseteq\overline H\cap\overline{B_R(0)}\cap\{x:|x-p|\ge\delta\}$: each of $\overline H$, $\overline{B_R(0)}$ and $\{x:|x-p|\ge\delta\}$ is closed (the last is the complement of the open ball $B_\delta(p)$) and contains $U$, so [F5] applies factor by factor. In particular $|x-p|\ge\delta>0$ on $\overline U$, so $p\notin\overline U$ and $\overline U\subseteq\overline H\setminus\{p\}$. [F4, F5, F8, step 1.1]

3.1 Each $v_\pm$ lies in $C^2(U)\cap C(\overline U)$ and satisfies $\Delta v_\pm=0$ on $U$. Indeed $U\subseteq H\setminus\{p\}$ by construction, where $w$ is $C^2$ and $\Delta w=0$, while $b=\omega_2\Phi(\cdot-p)$ is $C^\infty$ and harmonic off $p$ [F3]; constants are $C^\infty$; $\Delta$ is linear and annihilates constants [F2], so $\Delta v_\pm=\pm\Delta w-\eta(0+\Delta b)=0$. Continuity on $\overline U$ holds because $w$ is continuous there by (i) and step 2.1, and $b$ is continuous on $\overline U$ by [F3] and [F4], the bound $|x-p|\ge\delta$ giving $|b(x)-b(y)|\le|x-y|/\delta^2$; sums and scalar multiples of continuous functions are continuous [F4]. [F2, F3, F4, step 1.1, step 2.1]

3.2 Each $v_\pm$ is nonpositive on $\partial U$. Let $x\in\partial U=\overline U\setminus U$ [F6]. Since $x\in\overline U$ and $x\notin U$, at least one of $x_3=0$, $|x|=R$, $|x-p|=\delta$ holds, by the description of $\overline U$ in step 2.1 and the definition of $U$. If $x_3=0$ then $w(x)=0$ by (ii), so $v_\pm(x)=-\eta(1+b(x))<0$. Otherwise $x_3>0$, and since at least one of the three conditions holds, $|x|=R$ or $|x-p|=\delta$ (or both); if $|x|=R$ then $|w(x)|\le\eta$ by the choice of $R$ in step 1.1, so $v_\pm(x)\le\eta-\eta(1+b(x))=-\eta b(x)<0$, and if $|x-p|=\delta$ then $|w(x)|\le\eta/\delta=\eta/|x-p|$ by the choice of $\delta$ in step 1.1 (and $x\in\overline H\setminus\{p\}$ by step 2.1), so $v_\pm(x)\le\eta b(x)-\eta(1+b(x))=-\eta<0$. [F6, given, step 1.1, step 2.1]

4.1 The weak maximum principle applies to each $v_\pm$ on the bounded nonempty open set $U$ [step 2.1, step 3.1] and gives $\max_{\overline U}v_\pm=\max_{\partial U}v_\pm\le0$ by step 3.2, so $v_\pm\le0$ on $\overline U$. In particular at $y\in U\subseteq\overline U$, $\pm w(y)\le\eta(1+|y-p|^{-1})$. [F1, step 3.1, step 3.2]

5.1 Since $\eta>0$ was arbitrary in step 1.1 and the bound of step 4.1 holds for every $\eta>0$, the real number $t:=|w(y)|$ satisfies $t\le\eta(1+|y-p|^{-1})$ for every $\eta>0$; if $t>0$ then $\eta:=t/\bigl(2(1+|y-p|^{-1})\bigr)>0$ gives $t\le t/2<t$, a contradiction, so $t=0$, that is $w(y)=0$. As $y\in H\setminus\{p\}$ was arbitrary, $w=0$ on $H\setminus\{p\}$. This proves uniqueness in the stated sub-Coulomb class; no removable-singularity theorem, no boundedness or growth assumption beyond (iii)-(iv), and no boundary regularity beyond the flat trace (ii) was used, and the only ambient choice convention is the one inherited from the kernel interfaces [F9]. [given, F9, step 1.1, step 4.1] ∎
