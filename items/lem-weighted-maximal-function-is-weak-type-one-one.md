---
id: lem-weighted-maximal-function-is-weak-type-one-one
kind: lemma
title: The weighted maximal function of a doubling weight is weak (1,1)
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [def-weighted-maximal-function-relative-to-a-doubling-weight, thm-vitali-covering-lemma-for-balls-with-fivefold-dilates, thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity, def-sublinear-operator-weak-and-strong-type-p-q, thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact, prop-ball-average-is-continuous-in-centre-and-radius, def-countable-choice, def-weight-and-weighted-lp-space]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249, 2014)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "The estimates (7.1.28)-(7.1.29) and Remark 7.1.11, printed pp. 508-511"
    - title: "Juha Kinnunen, Harmonic Analysis (Aalto University lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/harmonic_analysis.pdf"
      locator: "The weighted weak type estimate (4.27) and Theorem 4.29, printed pp. 81-83"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $v$ be a
weight on $\mathbb R^n$ whose measure $v\,d\lambda$ is doubling with constant
$c_v$, and let $M^v$ be the weighted maximal function of
[[def-weighted-maximal-function-relative-to-a-doubling-weight]]. Then there is
$C(n,c_v)<\infty$ such that for every $f\in L^1(v)$ and every $\lambda>0$,
$$v(\{M^vf>\lambda\})\le C(n,c_v)\,\lambda^{-1}\int_{\mathbb R^n}|f|\,v\,d\lambda.$$
Consequently $M^v$ is of strong type $(q,q)$ with respect to $v\,d\lambda$ for
every $1<q<\infty$
([[def-sublinear-operator-weak-and-strong-type-p-q]]), with norm depending only
on $n$, $q$ and the doubling constant $c_v$.

## Facts & Assumptions

**Given:** Countable Choice, a weight $v$ with $v\,d\lambda$ doubling of
constant $c_v$, the weighted maximal function $M^v$, $f\in L^1(v)$ and
$\lambda>0$.

[F1] $M^vf(x)=\sup_{r>0}v(B(x,r))^{-1}\int_{B(x,r)}|f|v\,d\lambda$; for each
fixed $r$ the function $x\mapsto v(B(x,r))^{-1}\int_{B(x,r)}|f|v\,d\lambda$ is
continuous, and $v\,d\lambda$ is a locally finite regular Borel measure whose
level sets are Borel
([[def-weighted-maximal-function-relative-to-a-doubling-weight]],
[[def-weight-and-weighted-lp-space]],
[[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]]).

[F2] Doubling: $v(B(x,2r))\le c_vv(B(x,r))$, so iterating gives
$v(5B)\le c_v^3v(B)$ for every ball $B$, since $5r\le8r$.

[F3] Fivefold Vitali covering: a finite family of balls $B_1,\dots,B_m$ has a
pairwise disjoint subfamily $B_{i_1},\dots,B_{i_\ell}$ with
$\bigcup_jB_j\subseteq\bigcup_k5B_{i_k}$
([[thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]]).

[F4] Inner regularity: for the regular Borel measure $v\,d\lambda$ and a Borel
set $E$, $v(E)=\sup\{v(K):K\subseteq E\text{ compact}\}$
([[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]]).

[F5] Marcinkiewicz interpolation: a sublinear operator that is weak $(1,1)$
with constant $A$ and strong $(\infty,\infty)$ with constant $B$ is strong
$(p,p)$ for every $1<p<\infty$ with norm at most
$2(Ap/(p-1))^{1/p}B^{1-1/p}$
([[thm-marcinkiewicz-interpolation-for-weak-one-one-and-strong-infinity]],
[[def-sublinear-operator-weak-and-strong-type-p-q]]).

## Proof

**Proof technique:** direct.

1.1 The level set $E_\lambda:=\{M^vf>\lambda\}$ is open, being the union over $r>0$ of the open sets $\{x:v(B(x,r))^{-1}\int_{B(x,r)}|f|v\,d\lambda>\lambda\}$, which are open because the displayed functions are continuous by [F1]. By [F4] its $v$-measure is the supremum of $v(K)$ over compact $K\subseteq E_\lambda$. [F1, F4, given]

1.2 Let $K\subseteq E_\lambda$ be compact. Each $x\in K$ admits $r_x>0$ with $\int_{B(x,r_x)}|f|v\,d\lambda>\lambda v(B(x,r_x))$; finitely many of these open balls cover $K$, and [F3] selects pairwise disjoint balls $B_1,\dots,B_\ell$ among them with $K\subseteq\bigcup_j5B_j$ and $\int_{B_j}|f|v>\lambda v(B_j)$ for every $j$. [F1, F3, given, choose]

2.1 By [F2] and the selection of step 1.2, $v(K)\le\sum_jv(5B_j)\le c_v^3\sum_jv(B_j)\le c_v^3\lambda^{-1}\sum_j\int_{B_j}|f|v\,d\lambda\le c_v^3\lambda^{-1}\int_{\mathbb R^n}|f|v\,d\lambda$, where the last inequality uses the pairwise disjointness of the $B_j$. [F2, step 1.2, given, algebra]

3.1 Taking the supremum over compact $K\subseteq E_\lambda$ in step 2.1 and using the inner regularity of step 1.1 gives $v(\{M^vf>\lambda\})\le c_v^3\lambda^{-1}\int|f|v\,d\lambda$, which is the asserted weak $(1,1)$ bound with $C(n,c_v)=c_v^3$. [step 1.1, step 2.1, given, algebra]

4.1 $M^v$ is sublinear and homogeneous; besides the weak $(1,1)$ bound of step 3.1 with constant $A=c_v^3$, it satisfies the trivial strong $(\infty,\infty)$ bound with constant $B=1$ with respect to the measure $v\,d\lambda$. Hence [F5] applies and gives, for every $1<q<\infty$, $\|M^vf\|_{L^q(v)}\le2(Aq/(q-1))^{1/q}\|f\|_{L^q(v)}$ for all $f\in L^q(v)$, a constant depending only on $n$, $q$ and $c_v$. [F5, step 3.1, given, algebra] ∎ 