---
id: lem-author-10a0d5e0c110-psd-expander-rigidity
title: Positive-reference expanders have only synchronized critical PSD phases
kind: lemma
domain: mathematics
status: draft
origin: pipeline
deps:
  - lem-author-10a0d5e0c110-psd-tests-and-mass
  - lem-author-10a0d5e0c110-psd-kernel-and-half-circle
  - lem-author-10a0d5e0c110-psd-tail-growth
  - lem-author-10a0d5e0c110-strict-parameter-budgets
  - def-expander-sync-two-sided-expander
  - def-expander-prereq-phase-torus
  - prop-expander-prereq-ordered-angle-inequalities
  - prop-expander-prereq-geometric-growth-budget
  - math:def-principal-inverse-sine-and-cosine
  - math:thm-sine-cosine-signs-monotonicity-and-ranges
  - math:cor-trigonometric-parity-and-pythagorean-identity
  - math:thm-quarter-turn-values-and-shift-formulas
  - math:thm-natural-logarithm-laws
  - math:thm-algebra-of-continuous-functions
  - math:thm-composition-of-continuous-functions
dependency_roles:
  lem-author-10a0d5e0c110-psd-tests-and-mass: mathematical-premise
  lem-author-10a0d5e0c110-psd-kernel-and-half-circle: mathematical-premise
  lem-author-10a0d5e0c110-psd-tail-growth: mathematical-premise
  lem-author-10a0d5e0c110-strict-parameter-budgets: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
  def-expander-prereq-phase-torus: mathematical-premise
  prop-expander-prereq-ordered-angle-inequalities: mathematical-premise
  prop-expander-prereq-geometric-growth-budget: mathematical-premise
  math:def-principal-inverse-sine-and-cosine: mathematical-premise
  math:thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  math:cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  math:thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:thm-algebra-of-continuous-functions: mathematical-premise
  math:thm-composition-of-continuous-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 8
---

## Statement

Let $G$ satisfy the two-sided expander inequalities with $d>0$, $0<a\le1/5$, $c_->-1$ and $32a(1+4c_+-3c_-)\log((1+c_++a)/(2a))/(1+c_-)^2<1$. Then every critical point of the Kuramoto energy with positive-semidefinite angular Hessian is fully synchronized. The graph may have loops and need not be regular.

## Facts & Assumptions

[F1] The two-sided expander inequalities and matrix conventions are those of [[def-expander-sync-two-sided-expander]]. The critical-PSD mass bound and its energy formula, phase normalization and function $H$ are supplied by [[lem-author-10a0d5e0c110-psd-tests-and-mass]]. The kernel inequality and half-circle rigidity are supplied by [[lem-author-10a0d5e0c110-psd-kernel-and-half-circle]], the tail sets $C_t$ and their two growth estimates by [[lem-author-10a0d5e0c110-psd-tail-growth]], and $s,B,q,K$ and both strict angle budgets by [[lem-author-10a0d5e0c110-strict-parameter-budgets]]. No local-minimum hypothesis is assumed.

[F2] The phase-state space is $T_V=\mathbb R^V/(2\pi\mathbb Z)^V$, with local angular lifts and chart transitions that are translations ([[def-expander-prereq-phase-torus]]). Criticality and positive semidefiniteness of the angular Hessian have the meaning specified in the mass lemma. Its energy depends only on phase differences, so a common rotation leaves the energy and these angular derivative conditions unchanged.

[F3] The principal inverse sine maps $[0,1]$ into $[0,\pi/2]$ and satisfies $\sin(\arcsin v)=v$ for $0\le v\le1$ ([[math:def-principal-inverse-sine-and-cosine]]). For the same arguments, $\arcsin v\le(\pi/2)v$ ([[prop-expander-prereq-ordered-angle-inequalities]]).

[F4] Sine is strictly increasing on $[-\pi/2,\pi/2]$ and has range $[-1,1]$ ([[math:thm-sine-cosine-signs-monotonicity-and-ranges]]). It is odd, cosine is even, and $\sin^2t+\cos^2t=1$ ([[math:cor-trigonometric-parity-and-pythagorean-identity]]). The shift identity $\sin(t+\pi/2)=\cos t$ and the value $\sin(\pi/2)=1$ hold ([[math:thm-quarter-turn-values-and-shift-formulas]]). Oddness gives $\sin0=0$; hence sine is nonnegative on $[0,\pi/2]$. The shift identity at $t=-\pi/4$ and evenness give $\sin(\pi/4)=\cos(\pi/4)$, so the Pythagorean identity gives $\sin^2(\pi/4)=1/2$.

[F5] The natural logarithm is continuous on $(0,\infty)$ ([[math:thm-natural-logarithm-laws]]). Constants, the identity, sums, products and quotients with nonzero denominator preserve continuity ([[math:thm-algebra-of-continuous-functions]]). Composing continuous functions preserves continuity when the inner function takes values in the outer function's domain ([[math:thm-composition-of-continuous-functions]]).

[F6] For $q>1$, a positive sequence satisfying $b_{j+1}=\min(qb_j,M)$ reaches any positive cap $M$ in finitely many updates; before its first cap crossing it equals its untruncated geometric progression ([[prop-expander-prereq-geometric-growth-budget]]).

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Establish its conclusions for critical points with positive-semidefinite Hessian.

1.1 Since $\Delta_L\mathbf1=0$ and $d>0$, testing the two order inequalities at $\mathbf1$ gives $c_-\le0\le c_+$. For $v\perp\mathbf1$, $v^TLv\ge(1+c_-)d\|v\|^2>0$. If the graph were disconnected, subtracting the mean from the indicator of a component would give a nonzero mean-zero vector with $Lv=0$, a contradiction. Thus the graph is connected. A one-vertex graph already satisfies the conclusion. [F1, algebra]

2.1 First assume $w=c_+-c_->0$, and use $s,B,q,K$ from the numerical-budget lemma. If a nonsynchronized critical PSD state existed on the phase torus, use the mass lemma's common rotation and choose angular representatives in $(-\pi,\pi]$ with real nonnegative phasor average. The PSD tests and mass lemma applies because $a<1/32$. The kernel/half-circle lemma gives $m_0=|C_{\pi/2}|>0$, while the mass bound gives $m_0\le\sum H<5a^2n/2<an$. Start at $\beta_0=\pi/2$, $b_0=m_0$. As long as the cap $an$ has not been reached and the index is below $K$, decrease the angle by $\eta=\arcsin(8a/s)$ and set $b_{j+1}=\min(qb_j,an)$. The tail-growth lemma (a), with $\epsilon=s/2$ and $u=1$, proves $|C_{\beta_{j+1}}|\ge b_{j+1}$ by induction. Every prospective angle remains above $3\pi/8$ by the first numerical budget, so its hypotheses hold before each update. [F1, F2, F3, step 1.1, algebra]

3.1 If the cap is reached by index $K$, stop there. Then $b_M=an$ and $\beta_M>3\pi/8>\pi/4$, whence $b_M\sin^2\beta_M>an/2>5a^2n/2$. If no cap is reached, $b_K=q^Km_0$ and $q^K\ge B/(2a)$. For each subsequent index, set $\eta_j=\arcsin(4Bm_0/(s b_j))$, $\beta_{j+1}=\beta_j-\eta_j$, $b_{j+1}=\min(qb_j,n/2)$, and stop at the first $b_M=n/2$. Before the final cap, $b_j=q^jm_0$, so the inverse-sine arguments are at most $8a/s<1$. By the inverse-sine bound, $\eta_j\le(\pi/2)4B/(s q^j)$. Their total decrement, including every prospective step, is therefore bounded by the second numerical budget; thus all angles exceed $\pi/4$. Tail-growth (b) gives the cardinality induction because its required sine is $4Bm_0/(s|C_{\beta_j}|)\le4Bm_0/(s b_j)$. The geometric-growth stopping bound applies to this positive sequence with cap $n/2$ and $q>1$, so the cap is reached in finitely many steps. At the end, $b_M\sin^2\beta_M>n/4>5a^2n/2$. [F1, F3, F4, F6, step 2.1, algebra]

4.1 In either stopping case, $H(t)\ge\sin^2\beta_M$ whenever $|t|\ge\beta_M$ and $0\le\beta_M\le\pi/2$, from the piecewise definition of $H$, oddness of sine, its range bound and its monotonicity on $[0,\pi/2]$. Consequently $\sum_xH(\theta_x)\ge|C_{\beta_M}|\sin^2\beta_M\ge b_M\sin^2\beta_M>5a^2n/2$, contradicting the mass lemma. Hence no nonsynchronized critical PSD state exists when $w>0$. [F1, F4, step 2.1, step 3.1, algebra]

5.1 If $w=0$, step 1.1 forces $c_-=c_+=0$. Replace these two bounds by $c'_-=-t$, $c'_+=t$ with $t>0$ sufficiently small. The same matrix inequalities still hold, $c'_->-1$, and the strict numerical inequality persists by continuity at $t=0$: its left side becomes $f(t)=32a(1+7t)\log((1+t+a)/(2a))/(1-t)^2$, which is continuous on $(-1/2,1/2)$ by [F5], since $a>0$, $1+t+a>0$ and $1-t\ne0$. As $f(0)<1$, continuity with tolerance $(1-f(0))/2$ gives $f(t)<1$ for all sufficiently small $t>0$. The perturbed width is $2t>0$, so steps 2.1–1.4 apply without changing $G,d,a,\theta$. This proves the conclusion also in the zero-width case. [F1, F5, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎
