---
id: lem-bounded-bilateral-sequence-ball-is-complete
kind: lemma
title: "The bounded functions on a set form a complete metric space in the supremum metric, and the coding map of the two-sign shift space is an isometry"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [lem-of-triangle-inequality, def-bilateral-symbol-and-bounded-sequence-space, lem-cm-bilateral-shift-metric-and-sequential-compactness, lem-sup-metric-is-a-metric, def-metric-space, def-cauchy-in-metric, def-metric-convergence, def-complete-metric-space, thm-cauchy-criterion-via-lub, lem-limit-preserves-order, def-sequence, def-bounded-set, lem-sup-unique, def-complete-ordered-field, lem-of-abs-value, def-abs-value]
dependency_roles:
  lem-of-triangle-inequality: mathematical-premise
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  lem-cm-bilateral-shift-metric-and-sequential-compactness: mathematical-premise
  lem-sup-metric-is-a-metric: mathematical-premise
  def-metric-space: mathematical-premise
  def-cauchy-in-metric: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-complete-metric-space: mathematical-premise
  thm-cauchy-criterion-via-lub: mathematical-premise
  lem-limit-preserves-order: mathematical-premise
  def-sequence: mathematical-premise
  def-bounded-set: mathematical-premise
  lem-sup-unique: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-abs-value: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Section 11.5, the metric (11.35) on two-sided sequence spaces and Lemma 11.15"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 14 Section 14.6, the distance between itineraries"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
verification:
  precheck: pass
---

## Statement

Let $S$ be a nonempty set, let $\mathcal B(S)$ be the set of bounded functions $S\to\mathbb R$ and let $d_\infty$ be the supremum metric on $\mathcal B(S)$ ([[lem-sup-metric-is-a-metric]]); write $0$ for the zero function. For $R\ge0$ put

$$B_R(S):=\{\,f\in\mathcal B(S)\ :\ |f(s)|\le R\ \text{for every }s\in S\,\}.$$

Let $X_{\pm}$, $\varphi$, $X_2$, $d_2$, $D_\pm$ be as in [[def-bilateral-symbol-and-bounded-sequence-space]]. Then:

1. $(\mathcal B(S),d_\infty)$ is a complete metric space ([[def-complete-metric-space]]);
2. for every $R\ge0$, $(B_R(S),d_\infty)$ is a complete metric space;
3. $D_\pm(s,t)=d_2(\varphi(s),\varphi(t))$ is a metric on $X_\pm$ ([[def-metric-space]]), and $\varphi:(X_\pm,D_\pm)\to(X_2,d_2)$ is a bijective isometry ([[def-metric-convergence]] for the underlying notion of distance);
4. consequently $\ell^{\infty}(\mathbb Z)$ with the distance $\|x-y\|_\infty$ is a complete metric space, $B_R$ is complete for every $R\ge0$, and the same holds for the one-sided bounded sequences, that is for $S=\mathbb N$.

## Facts & Assumptions

**Given:** A nonempty set $S$, the space $\mathcal B(S)$ of bounded real functions on $S$ with supremum metric $d_\infty$, the numbers $R\ge0$, and the objects $X_\pm,\varphi,X_2,d_2,D_\pm$ of [[def-bilateral-symbol-and-bounded-sequence-space]].

[F1] $d_\infty$ is a metric on $\mathcal B(S)$ and $d_\infty(f,g)=\sup\{|f(s)-g(s)|:s\in S\}$ ([[lem-sup-metric-is-a-metric]], [[def-metric-space]]); the defining set is nonempty and bounded above, its supremum exists and is unique ([[lem-sup-unique]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[F2] $d_2$ is a metric on $X_2$ ([[lem-cm-bilateral-shift-metric-and-sequential-compactness]], clause 1) and $D_\pm(s,t)=d_2(\varphi(s),\varphi(t))$ by definition of $D_\pm$; $\varphi$ is a bijection with inverse $t\mapsto(2t_k-1)_{k\in\mathbb Z}$ ([[def-bilateral-symbol-and-bounded-sequence-space]]).

[F3] Cauchy sequences, convergence and completeness are those of [[def-cauchy-in-metric]], [[def-metric-convergence]] and [[def-complete-metric-space]]; a sequence in a metric space converges to $z$ exactly when the distances to $z$ tend to $0$.

[F4] Every Cauchy sequence of reals converges to a real number ([[thm-cauchy-criterion-via-lub]], [[def-sequence]]).

[F5] Limits preserve eventual inequalities: if the real sequences $(x_j)$ and $(y_j)$ converge and $x_j\le y_j$ eventually, then $\lim_j x_j\le\lim_j y_j$ ([[lem-limit-preserves-order]], [[def-sequence]]).

[F6] Absolute value: $|a|\ge0$, $|a|=0$ exactly for $a=0$, $|a-b|=|b-a|$, $|a+b|\le|a|+|b|$ and $|a|\le M$ exactly when $-M\le a\le M$ for $M\ge0$ ([[def-abs-value]], [[lem-of-abs-value]], [[lem-of-triangle-inequality]]).



## Proof

**Proof technique:** direct; take coordinatewise limits of a Cauchy sequence and estimate the supremum distance by an eventual coordinate bound.

1.1 Let $(f_j)_{j\in\mathbb N}$ be a Cauchy sequence in $(\mathcal B(S),d_\infty)$ and fix $s\in S$. For all $j,k$ one has $|f_j(s)-f_k(s)|\in\{|f_j(s')-f_k(s')|:s'\in S\}$ and therefore $|f_j(s)-f_k(s)|\le d_\infty(f_j,f_k)$ by [F1] and [F6]. Hence $(f_j(s))_j$ is a Cauchy sequence of reals, so it converges; define $f(s):=\lim_j f_j(s)\in\mathbb R$. This defines a function $f:S\to\mathbb R$. [given, F1, F3, F4, F6]

1.2 Isometry property: for $s,t\in X_\pm$ put $\Phi(s,t):=d_2(\varphi(s),\varphi(t))$. Then $\Phi(s,t)=0$ if and only if $\varphi(s)=\varphi(t)$ (by [F2], [F6] and definiteness of $d_2$), if and only if $s=t$ since $\varphi$ is injective ([F2]). Symmetry holds because $d_2$ is symmetric, and the triangle inequality follows from that of $d_2$: $D_\pm(s,u)=d_2(\varphi s,\varphi u)\le d_2(\varphi s,\varphi t)+d_2(\varphi t,\varphi u)=D_\pm(s,t)+D_\pm(t,u)$ ([F2], [F6]). Finally $D_\pm(s,t)=d_2(\varphi s,\varphi t)$ says exactly that the bijection $\varphi$ preserves distances, so it is an isometry onto $(X_2,d_2)$. [given, F2, F6]

2.1 Boundedness of $f$: since $(f_j)$ is Cauchy, there is $N$ with $d_\infty(f_j,f_N)\le1$ for all $j\ge N$; then $|f_j(s)|\le|f_N(s)|+1\le\sup_{s'}|f_N(s')|+1=:M$ for all $j\ge N$ and all $s$, where $M<\infty$ because $f_N$ is bounded ([F1], [F6]). For fixed $s$, the bounds $-M\le f_j(s)\le M$ pass to the limit by [F5], giving $-M\le f(s)\le M$, hence $|f(s)|\le M$ by [F6]. Thus $f\in\mathcal B(S)$. [step 1.1, F1, F5, F6]

3.1 Uniform error estimate: given $\varepsilon>0$, choose $N$ with $d_\infty(f_j,f_k)\le\varepsilon$ for all $j,k\ge N$. Fix $j\ge N$ and $s\in S$; then $|f_k(s)-f_j(s)|\le d_\infty(f_k,f_j)\le\varepsilon$ for every $k\ge N$ ([F1], [F6]), thus $f_j(s)-\varepsilon\le f_k(s)\le f_j(s)+\varepsilon$. Passing these inequalities to the coordinate limit with [F5] gives $f_j(s)-\varepsilon\le f(s)\le f_j(s)+\varepsilon$, or $|f(s)-f_j(s)|\le\varepsilon$ by [F6]. Taking the supremum over $s$ in [F1] gives $d_\infty(f,f_j)\le\varepsilon$ for every $j\ge N$, so $f_j\to f$ in $(\mathcal B(S),d_\infty)$. [step 1.1, step 2.1, F1, F3, F5, F6]

4.1 The space $(B_R(S),d_\infty)$ is complete: if $(f_j)$ is Cauchy in $(B_R(S),d_\infty)$, then by steps 2.1 and 3.1 its pointwise limit $f$ lies in $\mathcal B(S)$ and $f_j\to f$; for each $s$ one has $-R\le f_j(s)\le R$ for all $j$, so [F5] gives $-R\le f(s)\le R$, hence $|f(s)|\le R$ by [F6]; hence $f\in B_R(S)$ and the Cauchy sequence converges inside $B_R(S)$. [step 2.1, step 3.1, F1, F5, F6]

5.1 Conclusion. Clause 1 is proved by steps 1.1, 2.1 and 3.1: the pointwise limit of a Cauchy sequence of bounded functions is bounded (step 2.1) and is the uniform limit (step 3.1). Clause 2 is step 4.1, and clause 3 is step 1.2. For clause 4, take $S=\mathbb Z$: by the definitions of [[def-bilateral-symbol-and-bounded-sequence-space]] the space $\mathcal B(\mathbb Z)$ is exactly $\ell^\infty(\mathbb Z)$ and $d_\infty(f,g)=\sup_k|f_k-g_k|=\|f-g\|_\infty$, so clauses 1 and 2 give completeness of $\ell^\infty(\mathbb Z)$ and of each $B_R$, $R\ge0$; with $S=\mathbb N$ the same identifications give the one-sided statement, the argument being identical since it never uses any structure of the index set beyond its nonemptiness. [step 3.1, step 4.1, step 1.2, given, F1] ∎


## Remarks

- The proof is a coordinatewise limit argument plus one uniform two-index estimate; no choice principle is used, since the limit function is defined by the uniquely determined real limits of the coordinate sequences.

- Clause 3 is the only point of contact between the two-sign space and the published two-symbol space: because $\varphi$ is a bijective isometry, every metric statement about $(X_2,d_2)$ transfers verbatim, and it will be used in this form for sequential compactness and for the chaos properties of the shift.
