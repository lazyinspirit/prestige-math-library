---
id: ex-cg-mixed-sign-vector-is-not-a-root
kind: example
title: "A vector with mixed signs is not a root, while every root has a sign"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 9
deps: [thm-cg-root-sign-and-simple-reflection-positivity, def-cg-real-coxeter-form-and-reflection, def-cg-canonical-reflection-homomorphism, lem-cg-reflection-representation-descends-and-root-norms, def-linear-combination-and-span, def-hh-coxeter-matrix-word-group-and-length, lem-cg-reflection-form-invariance-and-rank-two-orders, lem-cg-rank-two-prefix-and-chamber-length-induction, thm-hh-coxeter-exchange-deletion-and-faithfulness, thm-sine-and-cosine-addition-formulas, cor-trigonometric-parity-and-pythagorean-identity, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, def-pi-via-first-positive-cosine-zero]
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press, 2008; author's complete institutional PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix D.1, printed pp. 439-442 (Theorem D.1.1, Corollary D.1.2, Lemma D.1.5); read in the extracted full text; figures and exercises excluded"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted full PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "S4.2, printed pp. 93-97 (Propositions 4.2.1 and 4.2.5, Theorem 4.2.7); S4.4, printed pp. 101-105 (Definition 4.4.1, Lemma 4.4.3, Proposition 4.4.4); read in the extracted full text; exercises excluded"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s,t\}$ with $m(s,t)\ge3$, $V=\mathbb R^S$, $B$ the Coxeter form and $\Phi$ the root system of the canonical reflection representation ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]). Then:

(i) the vector $v:=e_s-e_t$ has coefficient $-1$ at $e_t$, so $v\notin V_+\cup(-V_+)$: it has mixed signs;

(ii) consequently $v\notin\Phi$, although it is nonzero and $B$-non-isotropic, because by [[thm-cg-root-sign-and-simple-reflection-positivity]] (2) every root lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$; explicitly $B(v,v)=2+2c(s,t)>0$ while every root has $B$-norm $1$ ([[lem-cg-reflection-representation-descends-and-root-norms]] (3)), so $v$ fails both the sign test and the norm test;

(iii) for $m(s,t)=3$ one has $B(v,v)=3$ and the comparison case $e_s+e_t$ has $B(e_s+e_t,e_s+e_t)=1$ and lies in $\Phi_+$; for $m(s,t)=\infty$ one has $B(v,v)=4$ and $v$ still fails to be a root.

## Facts & Assumptions

**Given:** a two-element set $S=\{s,t\}$ with $m:=m(s,t)\ge3$, the space $V=\mathbb R^S$ with basis $(e_s,e_t)$, the Coxeter form $B$, the canonical reflection homomorphism $\rho$, the root system $\Phi=\Phi_+\sqcup\Phi_-$ and the positive cone $V_+$.

[F1] $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-c$ with $c:=c(s,t)$ equal to $\cos(\pi/m)$ when $m<\infty$ and to $1$ when $m=\infty$; the reflection with normal $e_t$ is $r_t(u)=u-2B(u,e_t)e_t$, so $\rho(t)e_s=r_te_s=e_s+2ce_t$; and $V_+=\{\lambda e_s+\mu e_t:\lambda\ge0,\ \mu\ge0\}$ with $-V_+=\{u:-u\in V_+\}$ ([[def-cg-real-coxeter-form-and-reflection]], [[def-cg-canonical-reflection-homomorphism]]).

[F2] Every root lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$, and not in both; every root $\alpha$ satisfies $B(\alpha,\alpha)=1$; $\Phi_+=\Phi\cap V_+$ ([[thm-cg-root-sign-and-simple-reflection-positivity]], [[lem-cg-reflection-representation-descends-and-root-norms]]).

[F3] For every $x\in W$ and every generator $s$ one has $xC^\circ\subseteq B_s$ or $xC^\circ\subseteq sB_s$, and $xC^\circ\subseteq sB_s$ if and only if $\ell(sx)<\ell(x)$; moreover $\rho(y)e_s\in\Phi_+\iff y^{-1}C^\circ\subseteq B_s$ for the root $\rho(y)e_s$ ([[lem-cg-rank-two-prefix-and-chamber-length-induction]], [[thm-cg-root-sign-and-simple-reflection-positivity]]).

[F4] The simple generators are distinct in $W$, so $s\ne t$, and $\ell(t)=1$; moreover $\ell(x)=0$ implies $x=1$ ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]], [[def-hh-coxeter-matrix-word-group-and-length]]).

[F5] The addition formulas $\sin(x+y)=\sin x\cos y+\cos x\sin y$, $\cos(x+y)=\cos x\cos y-\sin x\sin y$ hold for all real $x,y$; $\sin(-x)=-\sin x$, $\cos(-x)=\cos x$ and $\sin^2x+\cos^2x=1$; $\cos(\pi/2)=0$ and $\cos\pi=-1$; cosine is strictly decreasing on $[0,\pi]$; and $\pi>0$ ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[def-pi-via-first-positive-cosine-zero]]).

[F6] Every $x\in V=\mathbb R^{\{s,t\}}$ equals $x(s)e_s+x(t)e_t$; evaluating at $s$ and $t$ shows that these coordinates are unique ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (1)).

## Verification

**Proof technique:** direct.

1.1 **Set-up.** By [F1] the vector $v=e_s-e_t$ has coordinates $v(s)=1$ and $v(t)=-1$ in the basis $(e_s,e_t)$, and $B(v,v)=B(e_s,e_s)-2B(e_s,e_t)+B(e_t,e_t)=2+2c$. The constant $c$ is positive: $c=1>0$ for $m=\infty$, while for finite $m\ge3$ one has $0<\pi/m\le\pi/3<\pi/2$ and cosine is strictly decreasing on $[0,\pi]$ with $\cos(\pi/2)=0$ by [F5], so $c=\cos(\pi/m)>\cos(\pi/2)=0$. Hence $B(v,v)>2>0$, so $v\ne0$ and $v$ is $B$-non-isotropic. [F1, F5, algebra]

1.2 **The vector has mixed signs.** By [F6] the coordinates of a vector in the basis $(e_s,e_t)$ are unique, so $u\in V_+$ exactly when both coordinates of $u$ are $\ge0$ and $u\in-V_+$ exactly when both coordinates are $\le0$. Since $v$ has the coordinates $1$ and $-1$, it lies in neither cone: $v\notin V_+\cup(-V_+)$. This is (i). [F1, F6, algebra]

2.1 **The value $c=\cos(\pi/3)$.** For $x$ with $\cos x=:q$ and $\sin x=:r$, the addition formulas and $\sin^2x+\cos^2x=1$ of [F5] give $\cos(2x)=q^2-r^2=2q^2-1$ and $\sin(2x)=2qr$, hence $\cos(3x)=\cos(2x)\cos x-\sin(2x)\sin x=(2q^2-1)q-2qr^2=2q^3-q-2q(1-q^2)=4q^3-3q$. Applied to $x=\pi/3$ and combined with $\cos\pi=-1$ this gives $4c^3-3c+1=0$, that is $(c+1)(2c-1)^2=0$. Since $c>0$ by 1.1, the factor $c+1$ does not vanish, so $(2c-1)^2=0$ and $c=1/2$. Consequently $2c=1$, $B(v,v)=2+1=3$, and $\rho(t)e_s=e_s+2ce_t=e_s+e_t$; moreover $B(e_s+e_t,e_s+e_t)=1+1-2c=2-1=1$. [F1, F5, step 1.1, algebra]

2.2 **$v$ is not a root.** By [F2] every root lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$, and every root has $B$-norm $1$. By 1.2 the vector $v$ lies in neither cone, so it is not a root; independently, by 1.1 its $B$-norm is $2+2c>2\ne1$, so it also fails the norm test for roots. This is (ii). [F2, step 1.1, step 1.2]

3.1 **The comparison vector $e_s+e_t$ is positive.** By [F3] applied to $x=t$ either $tC^\circ\subseteq B_s$ or $tC^\circ\subseteq sB_s$. In the second case $\ell(st)<\ell(t)=1$ by [F3], so $\ell(st)=0$ and hence $st=1$ by [F4], which gives $s=t^{-1}=t$ and contradicts $s\ne t$; therefore $tC^\circ\subseteq B_s$, and the equivalence of [F3] with $y=t$ gives $\rho(t)e_s\in\Phi_+$. By 2.1, $\rho(t)e_s=e_s+e_t$ when $m=3$, so $e_s+e_t\in\Phi_+$ with $B(e_s+e_t,e_s+e_t)=1$. [F3, F4, step 2.1]

4.1 **The cases $m=3$ and $m=\infty$.** If $m=3$ then $c=1/2$ by 2.1, so $B(v,v)=3$, and $e_s+e_t=\rho(t)e_s$ is a positive root of $B$-norm $1$ by 3.1. If $m=\infty$ then $c=1$ by [F1], so $B(v,v)=4$, and $v\notin\Phi$ by 2.2. With (i) from 1.2 and (ii) from 2.2, all three clauses are verified: the sign theorem applies to the $W$-orbit of the simple roots, not to arbitrary vectors of $V$. [step 2.1, step 2.2, step 3.1, F1] ∎
