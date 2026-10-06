---
id: lem-envelopes-are-the-least-semicontinuous-majorants
kind: lemma
title: "The envelopes are the least upper and greatest lower semicontinuous functions"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-upper-and-lower-semicontinuous-envelopes, def-semicontinuity-on-euclidean-subsets, def-infimum, lem-sup-epsilon, def-metric-topology]
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
    - title: "Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)"
      url: "https://arxiv.org/pdf/math/9207212"
      locator: "Section 4, the display before Theorem 4.1 and Lemma 4.2, printed pp. 22--24"
    - title: "Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)"
      url: "https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf"
      locator: "Chapter 1 Section 8, the upper-envelope computation in the proof of Lemma 1.25, printed pp. 33--34"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A\subseteq\mathbb R^m$ be nonempty and let $u:A\to\mathbb R$ be bounded,
with envelopes $u^*,u_*$ as in
[[def-upper-and-lower-semicontinuous-envelopes]]. Then $u^*$ is upper
semicontinuous on $A$, $u_*$ is lower semicontinuous on $A$, and
$u_*\le u\le u^*$ pointwise. Moreover: (1) $u^*$ is the least upper
semicontinuous function $w:A\to\overline{\mathbb R}$ with $w\ge u$ pointwise,
and $u^*=u$ if and only if $u$ is upper semicontinuous; (2) $u_*$ is the
greatest lower semicontinuous function $w:A\to\overline{\mathbb R}$ with
$w\le u$ pointwise, and $u_*=u$ if and only if $u$ is lower semicontinuous;
(3) $(u^*)^*=u^*$ and $(u_*)_*=u_*$. No choice principle is used.

## Facts & Assumptions

**Given:** A nonempty set $A\subseteq\mathbb R^m$, a bounded function $u:A\to\mathbb R$, the local suprema $M_r(x)=\sup\{u(y):y\in A,\ |y-x|\le r\}$ and local infima $m_r(x)=\inf\{u(y):y\in A,\ |y-x|\le r\}$ for $x\in A$, $r>0$, all computed in $\overline{\mathbb R}$, and the envelopes $u^*(x)=\inf_{r>0}M_r(x)$, $u_*(x)=\sup_{r>0}m_r(x)$.

[F1] For every $x\in A$ the sets $\{M_r(x):r>0\}$ and $\{m_r(x):r>0\}$ are nonempty and bounded (by the bounds of $u$); $u^*(x)=\inf_{r>0}M_r(x)$ is the greatest lower bound of the first set, $u_*(x)=\sup_{r>0}m_r(x)$ is the least upper bound of the second, and $m_r(x)\le u(x)\le M_r(x)$ for every $r>0$. In particular $u^*(x)\le M_r(x)$ and $m_r(x)\le u_*(x)$ for every $r>0$ ([[def-upper-and-lower-semicontinuous-envelopes]]).

[F2] For real-valued functions, upper and lower semicontinuity have the local $\varepsilon$ characterizations: near $a$, respectively $f(x)<f(a)+\varepsilon$ and $f(x)>f(a)-\varepsilon$ ([[def-semicontinuity-on-euclidean-subsets]]). For an extended-real upper semicontinuous $w$, we use the standard strict-sublevel convention $\{w<c\}$ open for every real $c$; if $w(a)$ is finite, applying it with $c=w(a)+\varepsilon$ gives the same local upper bound. The dual strict-superlevel convention for lower semicontinuity gives the local lower bound when $w(a)$ is finite. These are exactly the finite-value cases used in steps 1.3 and 1.4; the infinite endpoint cases are disposed of there directly.

[F3] If $S\subseteq\mathbb R$ is nonempty and $\ell=\inf S$, then $\ell\le s$ for every $s\in S$, and $\ell'\le\ell$ for every lower bound $\ell'$ of $S$ ([[def-infimum]]).

[F4] If $S\subseteq\mathbb R$ is nonempty, bounded above and $v\in\mathbb R$ is an upper bound of $S$, then $v=\sup S$ if and only if for every $\varepsilon>0$ there is $s\in S$ with $v-\varepsilon<s$; in particular a supremum of $S$ in $\mathbb R$ is an upper bound of $S$ ([[lem-sup-epsilon]]).

## Proof

**Proof technique:** monotone localisation; the envelopes are compared with a competing semicontinuous function by testing the defining infimum and supremum.

1.1 $u^*$ is upper semicontinuous on $A$ and $u_*\le u\le u^*$. Fix $x\in A$ and $\varepsilon>0$. Since $u^*(x)+2^{-1}\varepsilon>u^*(x)$ is not a lower bound of the nonempty set $\{M_r(x):r>0\}$ by the leastness clause of [F3], there is $r>0$ with $M_r(x)<u^*(x)+2^{-1}\varepsilon$. For $z\in A$ with $|z-x|<r$ put $\delta:=r-|z-x|>0$; every $w\in A$ with $|w-z|\le\delta$ satisfies $|w-x|\le|w-z|+|z-x|\le r$, so the set defining $M_\delta(z)$ is contained in the set defining $M_r(x)$ and therefore $M_\delta(z)\le M_r(x)<u^*(x)+2^{-1}\varepsilon$; since $u^*(z)\le M_\delta(z)$ by [F1], we get $u^*(z)<u^*(x)+\varepsilon$. Thus $u^*$ is upper semicontinuous at $x$ by [F2], and $x$ was arbitrary. Next, $u(x)$ is a lower bound of $\{M_r(x):r>0\}$ by [F1], so $u(x)\le u^*(x)$ by the greatest-lower-bound clause of [F3]. Finally $u(x)$ is an upper bound of $\{m_r(x):r>0\}$ by [F1]; if $u_*(x)>u(x)$ held, then $\eta:=u_*(x)-u(x)>0$ and [F4] would give $r>0$ with $u_*(x)-\eta<m_r(x)$, that is $u(x)<m_r(x)$, contradicting $m_r(x)\le u(x)$; hence $u_*(x)\le u(x)$. [F1, F2, F3, F4, algebra]

1.2 $u_*$ is lower semicontinuous on $A$. Fix $x\in A$ and $\varepsilon>0$. By [F4] applied to the nonempty bounded-above set $\{m_r(x):r>0\}$ with supremum $u_*(x)$, there is $r>0$ with $u_*(x)-\varepsilon<m_r(x)$. For $z\in A$ with $|z-x|<r$ put $\delta:=r-|z-x|>0$; every $w\in A$ with $|w-z|\le\delta$ satisfies $|w-x|\le r$, so $m_\delta(z)\ge m_r(x)$, and $u_*(z)\ge m_\delta(z)$ by [F1]; hence $u_*(z)>u_*(x)-\varepsilon$, which is lower semicontinuity at $x$ by [F2]. [F1, F2, F4, algebra]

1.3 Least upper semicontinuous majorant. Let $w:A\to\overline{\mathbb R}$ be upper semicontinuous with $w\ge u$, fix $x\in A$ and $\varepsilon>0$. Since $w\ge u$ and $u$ is real-valued, $w$ takes no value $-\infty$; if $w(x)=+\infty$ then $u^*(x)\le w(x)$ holds because $u^*$ is real-valued by [F1] and boundedness of $u$, so assume $w(x)\in\mathbb R$. By [F2] there is $r_0>0$ with $w(y)<w(x)+\varepsilon$ for all $y\in A$ with $|y-x|<r_0$. For $y\in A$ with $|y-x|\le r_0/2$ we then have $u(y)\le w(y)<w(x)+\varepsilon$, so $w(x)+\varepsilon$ is an upper bound of the set defining $M_{r_0/2}(x)$, whence $M_{r_0/2}(x)\le w(x)+\varepsilon$. Since $u^*(x)=\inf_{r>0}M_r(x)\le M_{r_0/2}(x)$ by [F3], we get $u^*(x)\le w(x)+\varepsilon$, and letting $\varepsilon\downarrow0$ gives $u^*(x)\le w(x)$. Hence $u^*\le w$ for every upper semicontinuous majorant $w$ of $u$. [F1, F2, F3, algebra]

1.4 Greatest lower semicontinuous minorant. Let $w:A\to\overline{\mathbb R}$ be lower semicontinuous with $w\le u$, fix $x\in A$ and $\varepsilon>0$. Since $w\le u$, $w(x)\in\mathbb R\cup\{-\infty\}$; if $w(x)=-\infty$ then $u_*(x)\ge w(x)$ is automatic, so assume $w(x)\in\mathbb R$. By [F2] there is $r_0>0$ with $w(y)>w(x)-\varepsilon$ for all $y\in A$ with $|y-x|<r_0$. For $y\in A$ with $|y-x|\le r_0/2$ we have $w(y)>w(x)-\varepsilon$ and $w(y)\le u(y)$, so $w(x)-\varepsilon$ is a lower bound of the set defining $m_{r_0/2}(x)$, whence $m_{r_0/2}(x)\ge w(x)-\varepsilon$. Since $u_*(x)$ is an upper bound of $\{m_r(x):r>0\}$ by [F1], we get $u_*(x)\ge m_{r_0/2}(x)\ge w(x)-\varepsilon$, and letting $\varepsilon\downarrow0$ gives $u_*(x)\ge w(x)$. [F1, F2, algebra]

2.1 The two equivalences. If $u$ is upper semicontinuous, then $u$ is an upper semicontinuous majorant of itself, so $u^*\le u$ by step 1.3; with $u\le u^*$ from step 1.1 this gives $u^*=u$. Conversely, if $u^*=u$, then $u$ is upper semicontinuous because $u^*$ is, by step 1.1. The same two lines with step 1.4 and step 1.2 show that $u_*=u$ if and only if $u$ is lower semicontinuous. [step 1.1, step 1.2, step 1.3, step 1.4]

3.1 Idempotence. The function $u^*$ is bounded and upper semicontinuous on $A$ by step 1.1, and it is its own upper semicontinuous majorant; applying the equivalence of step 2.1 to $u^*$ in place of $u$ gives $(u^*)^*=u^*$. Likewise $u_*$ is bounded and lower semicontinuous by steps 1.1 and 1.2, so $(u_*)_*=u_*$. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **Where boundedness is used.** Boundedness of $u$ keeps every $M_r(x)$ and $m_r(x)$ in $\mathbb R$, so the infimum and supremum over $r$ are taken in the ordered field and the elementary leastness arguments of steps 1.1--1.4 apply directly. For unbounded $u$ the envelopes can be infinite; idempotence in that setting must use the same local formulas extended to extended-valued inputs, whereas the present statement and [[def-upper-and-lower-semicontinuous-envelopes]] take real-valued input.
- **Strictness is not needed.** The proof nowhere requires the contact or the majorant to be strict: the least-majorant property is proved by a direct pointwise comparison against an arbitrary upper semicontinuous majorant.
