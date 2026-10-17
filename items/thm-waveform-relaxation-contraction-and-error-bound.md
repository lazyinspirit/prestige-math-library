---
id: thm-waveform-relaxation-contraction-and-error-bound
title: "Contraction and finite-sweep error bound for synchronous waveform relaxation"
kind: theorem
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-synchronous-waveform-relaxation-finite-window
  - lem-vector-valued-continuous-curve-space-is-complete
  - thm-complete-subspace-iff-closed
  - thm-banach-fixed-point
  - thm-norm-inequality-for-the-vector-valued-integral
  - def-vector-valued-derivative-and-integral
  - prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation
  - thm-continuous-implies-integrable
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Ekachai Lelarasmee, The Waveform Relaxation Method for Time-Domain Analysis of Large Scale Integrated Circuits: Theory and Applications, UCB/ERL M82/40 (1982)"
      url: "https://www2.eecs.berkeley.edu/Pubs/TechRpts/1982/Archive/ERL-82-40.pdf"
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, Lecture 34: Global Analysis of One-Step Integrators (2016)"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
---

## Statement

Let $r,s\ge1$ and $d=r+s$, write $u=(x,z)\in\mathbb R^r\times\mathbb R^s$, and let $F=(f,g):D\to\mathbb R^d$ be continuous on an open set $D\subseteq\mathbb R^d$. Fix $u_0\in D$, $\Delta>0$, and a closed ball $\overline B_R(u_0)\subseteq D$ with radius $R\ge0$. Suppose $\|F(u)\|_2\le M$ and $\|F(u)-F(v)\|_2\le K\|u-v\|_2$ on that ball, where $M,K\ge0$, $M\Delta\le R$, and $q:=K\Delta<1$. Let $X_R$ be the set of continuous waveforms $U:[0,\Delta]\to\mathbb R^d$ with $U(0)=u_0$ and $\sup_t\|U(t)-u_0\|_2\le R$, with the supremum metric, and define $\Phi(U)(t)=u_0+\int_0^t F(U(s))\,ds$. Then $\Phi:X_R\to X_R$ is a contraction with factor $q$. It has a unique fixed point $U^*$, which solves $U'=F(U)$ with $U(0)=u_0$. For any starting waveform $U^0\in X_R$, if $U^{k+1}=\Phi(U^k)$ and $\delta_0:=\|U^1-U^0\|_\infty$, then
$$\|U^k-U^*\|_\infty\le\frac{q^k}{1-q}\,\delta_0\qquad(k\ge1).$$
Thus the finite-window algorithm certifies tolerance $\varepsilon$ after $k$ sweeps whenever this displayed bound is at most $\varepsilon$; budget exhaustion without that inequality supplies no such certificate.

## Facts & Assumptions

**Given:** The domain, initial value, bounded/Lipschitz field, radius and window conditions, and waveform map in the Statement.

[F1] [[alg-synchronous-waveform-relaxation-finite-window]]: $X_R$ is the closed radius-$R$ set of continuous curves with initial value $u_0$, and $\Phi(U)(t)=u_0+\int_0^tF(U(s))\,ds$ updates both component waveforms from the previous pair.

[F2] Continuous $\mathbb R^d$-valued curves on a nonempty compact interval form a complete space in the supremum metric ([[lem-vector-valued-continuous-curve-space-is-complete]]).

[F3] A closed subset of a complete metric space is complete in ZF, without a choice axiom ([[thm-complete-subspace-iff-closed]], claim 2).

[F4] For an integrable vector function on an increasing interval, $\|\int_a^b V(s)\,ds\|_2\le\int_a^b\|V(s)\|_2\,ds$ ([[thm-norm-inequality-for-the-vector-valued-integral]]).

[F5] The vector Riemann integral is componentwise and additive over subintervals ([[def-vector-valued-derivative-and-integral]]). A continuous real-valued function on a compact interval is Riemann integrable, so the continuous vector integrand is componentwise integrable ([[thm-continuous-implies-integrable]]).

[F6] A contraction of a nonempty complete metric space into itself has a unique fixed point, its iterates converge, and for $m\ge k$ the iterates satisfy $d(U^m,U^k)\le q^k d(U^1,U^0)/(1-q)$ ([[thm-banach-fixed-point]]).

[F7] A continuous curve solves the first-order IVP exactly when it satisfies the associated Volterra equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[A1] $M\Delta\le R$ and $q=K\Delta<1$; the stated field bounds hold throughout the closed ball.

## Proof

1.1 The constant waveform $U(t)=u_0$ belongs to $X_R$, so $X_R$ is nonempty. By [F2] the ambient continuous-curve space is complete. If $U_n\in X_R$ and $U_n\to U$ uniformly, then $U(0)=u_0$ and, for every $t$, $\|U(t)-u_0\|_2\le\|U-U_n\|_\infty+R$; letting $n\to\infty$ gives $\|U(t)-u_0\|_2\le R$. Hence $X_R$ is closed and complete by the choice-free direction [F3]. [F1, F2, F3, given, algebra]

1.2 For $U\in X_R$, continuity of $U$ and the field Lipschitz bound imply $\|F(U(t))-F(U(t_0))\|_2\le K\|U(t)-U(t_0)\|_2\to0$ as $t\to t_0$; this holds with one-sided limits at endpoints. Thus $F\circ U$ is continuous and componentwise integrable by [F5]. For $0\le s\le t\le\Delta$, additivity and [F4] give $\|\Phi(U)(t)-\Phi(U)(s)\|_2\le M(t-s)$; also $\Phi(U)(0)=u_0$ and $\|\Phi(U)(t)-u_0\|_2\le Mt\le M\Delta\le R$. Thus $\Phi(U)\in X_R$. [F1, F4, F5, A1, algebra]

1.3 For $U,V\in X_R$ and $t\in[0,\Delta]$, [F4] and the field Lipschitz bound yield $\|\Phi(U)(t)-\Phi(V)(t)\|_2\le\int_0^tK\|U(s)-V(s)\|_2\,ds\le K\Delta\|U-V\|_\infty=q\|U-V\|_\infty$. Taking the supremum proves that $\Phi$ is a contraction with $q<1$. [F1, F4, A1, algebra]

2.1 By [F1], [F2]–[F3], and step 1.3, [F6] applies to the nonempty complete space $X_R$ and the map $\Phi:X_R\to X_R$. It gives a unique fixed point $U^*$ and convergence of the iterates from every $U^0\in X_R$. [F1, F2, F3, F6, step 1.1, step 1.2, step 1.3]

3.1 The fixed-point identity is $U^*(t)=u_0+\int_0^tF(U^*(s))\,ds$. By [F7], this is equivalent to the IVP $U'=F(U)$, $U(0)=u_0$. [F1, F7, step 2.1]

4.1 Fix $k\ge1$. By [F6], for every $m\ge k$, $\|U^m-U^k\|_\infty\le q^k\delta_0/(1-q)$. Since $U^m\to U^*$ in $X_R$, the triangle inequality gives $\bigl|\|U^*-U^k\|_\infty-\|U^m-U^k\|_\infty\bigr|\le\|U^*-U^m\|_\infty\to0$; passing to the limit proves the stated bound. The algorithm reports `tolerance-certified` only when this bound is at most $\varepsilon$; when the finite budget ends first, it reports `budget-exhausted` without claiming the requested tolerance. [F1, F6, step 2.1, algebra] ∎
