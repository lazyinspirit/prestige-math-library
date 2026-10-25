---
id: lem-finite-valued-convex-hamiltonian-equals-its-biconjugate
kind: lemma
title: A finite-valued convex Hamiltonian equals its biconjugate
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-legendre-transform-of-a-hamiltonian
- def-convex-and-strictly-convex-functions-on-euclidean-sets
- def-extended-reals
- lem-extended-reals-complete
- def-euclidean-inner-product
- def-infimum
- cor-convex-functions-on-open-convex-sets-are-continuous
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
aliases: []
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2, Theorem 2.13(ii) and Remark 2.14, printed pp. 62--63; Appendix, the characterization of the Legendre transform, printed pp. 246--247
  - title: Christian Clason, Nonsmooth Analysis and Optimization, lecture notes winter 2021/22, February 18, 2022
    url: https://imsc.uni-graz.at/clason/skripte/NonsmoothNotes21.pdf
    locator: 'Theorem 5.1(iii), printed pp. 44--45: a proper function equals its biconjugate exactly when convex and lower semicontinuous. This is source-only orientation for the extended velocity cost; the finite-valued Hamiltonian identity has its local Moreau proof.'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$ and let $H:\mathbb R^n\to\mathbb R$ be convex
([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]), with Legendre
transform $L$ as in [[def-legendre-transform-of-a-hamiltonian]] and the
convention $p\cdot v-(+\infty):=-\infty$. Then for every $p\in\mathbb R^n$
$$H(p)=\sup_{v\in\mathbb R^n}\bigl(p\cdot v-L(v)\bigr),$$
so that $H=L^*=H^{**}$ is the biconjugate of $H$. Equivalently, the Moreau envelopes
$$e_\lambda H(p):=\inf_{q\in\mathbb R^n}\Bigl\{H(q)+\frac{|p-q|^2}{2\lambda}\Bigr\}\qquad(\lambda>0)$$
satisfy $e_\lambda H\le L^*\le H$ for every $\lambda>0$, and
$e_\lambda H(p)\to H(p)$ as $\lambda\downarrow0$ for every $p$. No
superlinearity, differentiability, smoothness, coercivity or strict convexity
of $H$ is assumed, and no choice principle is used; in particular the
supporting-hyperplane route is not needed.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a convex function $H:\mathbb R^n\to\mathbb R$, its Legendre transform $L(v)=\sup_{p}\bigl(p\cdot v-H(p)\bigr)$ with the convention $p\cdot v-(+\infty):=-\infty$, the biconjugate $L^*(p)=\sup_v\bigl(p\cdot v-L(v)\bigr)$, and the Moreau envelopes $e_\lambda H(p)=\inf_q\bigl\{H(q)+|p-q|^2/(2\lambda)\bigr\}$ for $\lambda>0$.

[F1] $L(v)=\sup_{p\in\mathbb R^n}(p\cdot v-H(p))$ is the least upper bound in $\overline{\mathbb R}$ of the set $\{p\cdot v-H(p):p\in\mathbb R^n\}$, and in the biconjugate the convention $p\cdot v-(+\infty):=-\infty$ is adopted ([[def-legendre-transform-of-a-hamiltonian]]).

[F2] $H$ is convex: $H((1-t)x+ty)\le(1-t)H(x)+tH(y)$ for all $x,y\in\mathbb R^n$ and $t\in[0,1]$ ([[def-convex-and-strictly-convex-functions-on-euclidean-sets]]).

[F3] Every convex function on an open convex set is continuous on it; in particular $H$ is continuous on $\mathbb R^n$ ([[cor-convex-functions-on-open-convex-sets-are-continuous]]).

[F4] A nonempty subset of $\mathbb R^n$ is compact if and only if it is closed and bounded, and every continuous real-valued function on a nonempty compact subset attains a maximum and a minimum there ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F5] Every subset of $\overline{\mathbb R}$ has a least upper bound and a greatest lower bound in $\overline{\mathbb R}$, and on a nonempty subset of $\mathbb R$ bounded in $\mathbb R$ these agree with the real supremum and infimum ([[lem-extended-reals-complete]]).

[F6] If $S\subseteq\mathbb R$ is nonempty and $\ell=\inf S$, then $\ell\le s$ for every $s\in S$ and $\ell'\le\ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

## Proof

**Proof technique:** conjugate monotonicity plus an attained Moreau minimiser; the supporting inequality is derived from two-point convexity at the minimiser.

1.1 $L^*(p)\le H(p)$ for every $p$. Fix $p$ and $v$. By [F1] and the least-upper-bound property of [F5], $p\cdot v-H(p)\le L(v)$, that is $p\cdot v-L(v)\le H(p)$; if $L(v)=+\infty$ this reads $-\infty\le H(p)$ by the convention of [F1], so the inequality holds in all cases. Hence $H(p)$ is an upper bound in $\overline{\mathbb R}$ of $\{p\cdot v-L(v):v\in\mathbb R^n\}$, and since $L^*(p)$ is the least upper bound of that set by [F1] and [F5], $L^*(p)\le H(p)$. [F1, F5, algebra]

1.2 A linear-growth lower bound for $H$. By [F3] the function $H$ is continuous, and the closed unit ball $\overline B(0,1)$ is nonempty, closed and bounded; by [F4] it is compact and $H$ attains on it a minimum $m\in\mathbb R$ and a maximum $M\in\mathbb R$. Put $D:=\max\{|M-H(0)|,|m-H(0)|\}$, so that $|H(u)-H(0)|\le D$ for every $|u|\le1$. For $|q|\ge1$ put $u:=q/|q|$, so that $u=(1/|q|)q+(1-1/|q|)\cdot0$ is a convex combination of $q$ and $0$; convexity [F2] gives $H(u)\le(1/|q|)H(q)+(1-1/|q|)H(0)$, hence $H(q)\ge|q|\bigl(H(u)-H(0)\bigr)+H(0)\ge-|q|\,\bigl|H(u)-H(0)\bigr|-|H(0)|\ge-(D+|H(0)|)|q|$. For $|q|\le1$ we have $H(q)\ge m\ge-(D+|H(0)|)$. Thus with $C:=D+|H(0)|+1$ we get $H(q)\ge-C(1+|q|)$ for every $q\in\mathbb R^n$. [F2, F3, F4, algebra]

1.3 $e_\lambda H(p)\to H(p)$ as $\lambda\downarrow0$, for fixed $p$. The competitor $q=p$ gives $e_\lambda H(p)\le H(p)$ for every $\lambda>0$. Fix $\varepsilon>0$. By continuity of $H$ at $p$ [F3] there is $\delta>0$ with $|H(q)-H(p)|\le\varepsilon$ whenever $|q-p|\le\delta$. With $r:=|q-p|$ and $\varphi(q):=H(q)+r^2/(2\lambda)$: if $r\le\delta$ then $\varphi(q)\ge H(p)-\varepsilon$; if $r\ge\delta$, put $u:=(q-p)/r$, so that $p+\delta u=(1-\delta/r)p+(\delta/r)q$ and convexity [F2] gives $H(p+\delta u)\le(1-\delta/r)H(p)+(\delta/r)H(q)$, that is $H(q)\ge H(p)+(r/\delta)\bigl(H(p+\delta u)-H(p)\bigr)\ge H(p)-(\varepsilon/\delta)r$. Hence for $r\ge\delta$ we have $\varphi(q)\ge H(p)-(\varepsilon/\delta)r+r^2/(2\lambda)$, and the right-hand side is minimised over $r\ge\delta$ at $r=\delta$ whenever $\lambda\le\delta^2/\varepsilon$, with value $H(p)-\varepsilon+\delta^2/(2\lambda)\ge H(p)-\varepsilon/2$. Therefore $H(p)-\varepsilon$ is a lower bound of the set $\{\varphi(q):q\in\mathbb R^n\}$ whenever $0<\lambda\le\delta^2/\varepsilon$, and since $e_\lambda H(p)$ is its greatest lower bound [F6] we get $e_\lambda H(p)\ge H(p)-\varepsilon$ for all such $\lambda$. As $\varepsilon>0$ was arbitrary, $\liminf_{\lambda\downarrow0}e_\lambda H(p)\ge H(p)$, which with the upper bound gives $e_\lambda H(p)\to H(p)$. [F2, F3, F6, algebra]

2.1 The Moreau infimum is attained. Fix $p$ and $\lambda>0$ and put $\varphi(q):=H(q)+|p-q|^2/(2\lambda)$. By [F3] $\varphi$ is continuous on $\mathbb R^n$, and by the bound of step 1.2, $\varphi(q)\ge-C(1+|q|)+|p-q|^2/(2\lambda)$, whose right-hand side tends to $+\infty$ as $|q|\to\infty$ because $|p-q|\ge|q|-|p|$; hence there is $R>|p|$ with $\varphi(q)>\varphi(p)$ for every $|q|\ge R$. The set $S:=\{q\in\mathbb R^n:\varphi(q)\le\varphi(p)\}$ is then nonempty (it contains $p$), contained in the closed ball $\overline B(0,R)$, and closed (it is the preimage under the continuous $\varphi$ of a closed interval); being closed and bounded it is compact by [F4], so $\varphi$ attains on $S$ a minimum at some $q_*\in S$ by [F4]. For $q\notin S$ we have $\varphi(q)>\varphi(p)\ge\varphi(q_*)$, so $q_*$ is a global minimiser of $\varphi$ on $\mathbb R^n$, and by the definition of the infimum [F6] $\varphi(q_*)=\inf_q\varphi(q)=e_\lambda H(p)$. [step 1.2, F3, F4, F6, algebra]

3.1 Supporting inequality and finiteness of $L(v_*)$ at a minimiser. Keep $p,\lambda,q_*$ and $\varphi$ from step 2.1, put $w:=p-q_*$, $v_*:=w/\lambda$, and fix $q\in\mathbb R^n$ with $h:=q-q_*$. For $0<r\le1$ the point $q_*+rh$ belongs to $\mathbb R^n$ and minimality of $q_*$ gives $\varphi(q_*)\le\varphi(q_*+rh)$; convexity [F2] gives $H(q_*+rh)\le(1-r)H(q_*)+rH(q)$. Subtracting and using $|w-rh|^2=|w|^2-2rw\cdot h+r^2|h|^2$, these two inequalities yield $r\bigl(H(q)-H(q_*)\bigr)\ge r\,w\cdot h/\lambda-r^2|h|^2/(2\lambda)$; dividing by $r>0$ and letting $r\downarrow0$ gives $H(q)\ge H(q_*)+v_*\cdot h$. Hence $q\cdot v_*-H(q)\le q_*\cdot v_*-H(q_*)$ for every $q$, with equality at $q=q_*$, so the least upper bound $L(v_*)$ of [F1] equals $q_*\cdot v_*-H(q_*)\in\mathbb R$. [step 2.1, F1, F2, algebra]

4.1 $L^*(p)\ge e_\lambda H(p)$. By [F1] and [F5], $L^*(p)\ge p\cdot v_*-L(v_*)$ for the vector $v_*$ of step 3.1 (the value $L(v_*)$ is real, so $p\cdot v_*-L(v_*)$ is an ordinary real number and no convention is needed). Substituting $L(v_*)=q_*\cdot v_*-H(q_*)$ from step 3.1 and $v_*=(p-q_*)/\lambda$, we get $L^*(p)\ge(p-q_*)\cdot v_*+H(q_*)=|p-q_*|^2/\lambda+H(q_*)\ge|p-q_*|^2/(2\lambda)+H(q_*)=e_\lambda H(p)$, where the last equality is step 2.1. [step 2.1, step 3.1, F1, F5, algebra]

5.1 Conclusion. Steps 1.1 and 4.1 give $e_\lambda H(p)\le L^*(p)\le H(p)$ for every $\lambda>0$ and every $p$, and step 1.3 gives $e_\lambda H(p)\to H(p)$ as $\lambda\downarrow0$; hence $L^*(p)=\sup_{v}(p\cdot v-L(v))=H(p)$ for every $p$, that is $H=L^*$. [step 1.1, step 1.3, step 4.1] ∎

## Remarks

- **What replaces the subgradient theorem.** The only existence input is the attained minimiser of the strictly convex perturbation $q\mapsto H(q)+|p-q|^2/(2\lambda)$, obtained from continuity, a linear lower bound and compactness. The supporting inequality $H(q)\ge H(q_*)+v_*\cdot(q-q_*)$ is then a two-point convexity computation at that minimiser, so no supporting-hyperplane theorem and no choice principle is consumed.
- **Sharpness of hypotheses.** Neither superlinearity nor coercivity of $H$ is used: the quadratic penalty provides the coercivity, and the continuity of $H$ is a consequence of convexity and finite-valuedness by [F3].
