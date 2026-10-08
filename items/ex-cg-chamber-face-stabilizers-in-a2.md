---
id: ex-cg-chamber-face-stabilizers-in-a2
kind: example
title: "Chamber faces and their stabilizers in $A_2$"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 14
deps: ["def-cg-tits-cone-and-fundamental-chamber", "thm-cg-dual-chamber-intersections-and-point-stabilizers", "thm-cg-tits-cone-interior-and-local-finiteness", "def-cg-real-coxeter-form-and-reflection", "lem-cg-reflection-form-invariance-and-rank-two-orders", "def-cg-canonical-reflection-homomorphism", "def-cg-dual-chambers-and-reflection-hyperplanes", "lem-cg-dual-action-and-chamber-faces-exist", "thm-cg-root-sign-and-simple-reflection-positivity", "thm-cg-root-length-criterion-and-faithfulness", "def-hh-coxeter-matrix-word-group-and-length", "def-generated-subgroup", "thm-quarter-turn-values-and-shift-formulas", "thm-sine-and-cosine-addition-formulas", "cor-trigonometric-parity-and-pythagorean-identity", "thm-sine-cosine-signs-monotonicity-and-ranges", "def-pi-via-first-positive-cosine-zero"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix D.1, printed pp. 440-441 (Lemma D.1.5 and its Case 1, the infinite dihedral picture); Appendix D.2, printed pp. 442-445 (Examples D.2.1, Lemmas D.2.2-D.2.5, Theorems D.2.6-D.2.7); Chapter 6, printed pp. 90-91 (Lemma 6.6.8, whose proof is reused by Lemma D.2.5)"
    - title: "Nicolas Perrin, Introduction to Kac-Moody groups and Lie algebras (lecture notes, November 9, 2015)"
      url: "https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf"
      locator: "Chapter 6, Section 6.5 'Dominant chambers and Tits cone', printed pp. 55-56 (Definition 6.5.1 and Theorem 6.5.2 (i)-(vi) with proof)"
verification:
  precheck: pass
---

## Statement

Let $S=\{s,t\}$ with $m(s,t)=3$, so that $c=\cos(\pi/3)=\tfrac12$ and $B(e_s,e_t)=-\tfrac12$ (the value of $c$ is derived in Verification step 1.1 from [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-quarter-turn-values-and-shift-formulas]] and [[thm-sine-cosine-signs-monotonicity-and-ranges]]; the form is [[def-cg-real-coxeter-form-and-reflection]]), let $W$ be the Coxeter group of type $A_2=I_2(3)$ with length $\ell$ ([[def-hh-coxeter-matrix-word-group-and-length]]), and let $C$, the faces $C_I$, the chambers $wC$, the Tits cone $U$ and its interior $U^\circ$ be as in [[def-cg-tits-cone-and-fundamental-chamber]]. Write $f=(x_s,x_t)$ and $u:=st$. Then:

**(i) The six sectors.** The generators act on $V^*$ by
$$s:(x_s,x_t)\mapsto(-x_s,\ x_s+x_t),\qquad t:(x_s,x_t)\mapsto(x_s+x_t,\ -x_t).$$
The three root lines $H_{e_s}=\{x_s=0\}$, $H_{e_t}=\{x_t=0\}$ and $H_{e_s+e_t}=\{x_s+x_t=0\}$ cut the plane into six closed sectors; these are exactly the six chambers $wC$ ($w\in W$), and $W$ acts simply transitively on them, so $|W|=6$.

**(ii) Wall stabilizers.** For $f=(0,1)$ one has $S(f)=\{s\}$ and
$$\operatorname{Stab}_W(f)=W_{\{s\}}=\{1,s\};$$
every point of the open face $C_{\{s\}}=\{x_s=0,\ x_t>0\}$ has stabilizer $\{1,s\}$, and symmetrically every point of $C_{\{t\}}=\{x_t=0,\ x_s>0\}$ has stabilizer $\{1,t\}$.

**(iii) Interior and vertex stabilizers.** For $f=(1,1)\in C^\circ$ one has $\operatorname{Stab}_W(f)=\{1\}$, and $\operatorname{Stab}_W(0)=W$, of order $6$.

**(iv) An orbit and the intersection rule.** $W\cdot(0,1)=\{(0,1),(1,-1),(-1,0)\}$, of cardinality $3=|W|/|\operatorname{Stab}_W(0,1)|$, and its unique point in $C$ is $(0,1)$; for the reflection $s$ one has $sC\cap C=\{f\in C:x_s=0\}=\{x_s=0,\ x_t\ge0\}$.

**(v) The whole plane is the Tits cone.** $U=U^\circ=V^*$.

## Facts & Assumptions

**Given:** $S=\{s,t\}$ with $m(s,t)=3$, the presented group $W$ with length $\ell$, $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection homomorphism $\rho$ with root system $\Phi$, the closed chamber $C$, the faces $C_I$, the chambers $wC$, the Tits cone $U$ and its interior $U^\circ$, as in [[def-cg-tits-cone-and-fundamental-chamber]] and [[def-cg-dual-chambers-and-reflection-hyperplanes]]; write $f=(x_s,x_t)$ for a functional.

[F1] $U=\bigcup_{w\in W}wC$, $U^\circ$ is the interior of $U$, $wC=\{w\cdot f:f\in C\}$ and $wU=U$ for every $w\in W$. ([[def-cg-tits-cone-and-fundamental-chamber]] (1)-(3)).

[F2] For $f\in C$, $f\in U^\circ$ if and only if $W_{S(f)}$ is finite. ([[thm-cg-tits-cone-interior-and-local-finiteness]] (1)).

[F3] If $f,g\in C$ and $w\cdot f=g$, then $f=g$ and $w\in W_{S(f)}$; for $f\in C$ one has $\operatorname{Stab}_W(f)=W_{S(f)}$; and $wC\cap C=\bigcup_{T\subseteq S,\ w\in W_T}\overline C_T$ with $\overline C_T=\{f\in C:f(e_s)=0\ \text{for all}\ s\in T\}$. ([[thm-cg-dual-chamber-intersections-and-point-stabilizers]] (3)-(5)).

[F4] $B(e_s,e_s)=B(e_t,e_t)=1$ and $B(e_s,e_t)=-c(s,t)$ with $c(s,t)=\cos(\pi/m(s,t))$; for $B(a,a)=1$ the reflection is $r_av=v-2B(v,a)a$. ([[def-cg-real-coxeter-form-and-reflection]] (2)-(3)).

[F5] Each $r_s$ is a linear involution. ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)).

[F6] $\rho(s)=r_s$ for every generator $s$, and $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$. ([[def-cg-canonical-reflection-homomorphism]] (1)-(2)).

[F7] The dual action is $(w\cdot f)(v)=f(\rho(w)^{-1}v)$, a left action with $w_1\cdot(w_2\cdot f)=(w_1w_2)\cdot f$ and $\mathrm{id}\cdot f=f$; $C=\{f:f(e_s)\ge0,\ f(e_t)\ge0\}$; $C^\circ=\{f:f(e_s)>0,\ f(e_t)>0\}$; the open face $C_{\{s\}}$ is $\{f:f(e_s)=0,\ f(e_t)>0\}$ and symmetrically for $C_{\{t\}}$; and $H_\alpha=\{f:f(\alpha)=0\}$. ([[def-cg-dual-chambers-and-reflection-hyperplanes]] (1)-(2)).

[F8] For distinct $s,t$ with $m(s,t)=m<\infty$ the $2m$ chambers $wC_P$ ($w\in W_{s,t}$) are exactly the $2m$ closed sectors cut out in $P^*$ by the $m$ root lines, they have pairwise disjoint interiors, their union is $P^*$, and $W_{s,t}$ acts simply transitively on them. ([[lem-cg-dual-action-and-chamber-faces-exist]] (3)(i)).

[F9] The canonical reflection homomorphism $\rho:W\to\mathrm{GL}(V)$ is injective, so $W$ is isomorphic to its image $\rho(W)$. ([[thm-cg-root-length-criterion-and-faithfulness]] (3)).

[F10] $W$ is the presented group with length $\ell$, generated by $S$; and $W_I=\langle s:s\in I\rangle$ is the subgroup generated by $I$. ([[def-hh-coxeter-matrix-word-group-and-length]], [[def-generated-subgroup]]).

[F11] The subgroup generated by a set is closed under products and inverses, and $\langle\emptyset\rangle=\{1\}$. ([[def-generated-subgroup]]).

[F12] The addition formulas $\cos(x+y)=\cos x\cos y-\sin x\sin y$, $\sin(x+y)=\sin x\cos y+\cos x\sin y$, and the Pythagorean identity $\cos^2x+\sin^2x=1$ hold. ([[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[F13] $\cos(\pi/2)=0$ and $\cos\pi=-1$. ([[thm-quarter-turn-values-and-shift-formulas]]).

[F14] Cosine is strictly decreasing on $[0,\pi]$. ([[thm-sine-cosine-signs-monotonicity-and-ranges]]).

[F15] $\pi$ is twice the smallest positive zero of cosine, so $\pi>0$. ([[def-pi-via-first-positive-cosine-zero]]).

## Verification

**Proof technique:** direct computation in the rank-two plane.

1.1 The set-up and the six sectors, (i). Put $c=\cos(\pi/3)$. To derive $c=\tfrac12$, the addition formulas give $\cos2x=\cos^2x-\sin^2x$ and $\sin2x=2\sin x\cos x$, hence $\cos3x=\cos(2x+x)=\cos2x\cos x-\sin2x\sin x=4\cos^3x-3\cos x$; at $x=\pi/3$ this reads $-1=\cos\pi=4c^3-3c$, that is $(c+1)(2c-1)^2=0$, and $c>0$ because $0<\pi/3<\pi/2$ and cosine is strictly decreasing on $[0,\pi]$ with $\cos(\pi/2)=0$, while $\pi>0$; hence $c=\tfrac12$. Here $c=\cos(\pi/3)=\tfrac12$, so $2c=1$ and $B(e_s,e_t)=-\tfrac12$, while $B(e_s,e_s)=B(e_t,e_t)=1$; the reflection formula gives $r_se_s=-e_s$, $r_te_t=-e_t$ and $r_se_t=e_t+2ce_s=e_t+e_s$, $r_te_s=e_s+2ce_t=e_s+e_t$, so the dual action is $s\cdot f=(-x_s,\ x_s+x_t)$ and $t\cdot f=(x_s+x_t,\ -x_t)$. The three displayed lines $H_{e_s}=\{x_s=0\}$, $H_{e_t}=\{x_t=0\}$ and $H_{e_s+e_t}=\{x_s+x_t=0\}$ are root hyperplanes, since $e_s+e_t=r_te_s$ is a root. The rank-two picture with $m=3$ and $P=\mathbb Re_s+\mathbb Re_t=V$ states that the $2m=6$ closed sectors cut out by these root lines are exactly the chambers $wC_P$ with $w\in W_{s,t}$, that these chambers have pairwise disjoint interiors and tile the plane, and that $W_{s,t}$ acts on them simply transitively. Here $W=\langle s,t\rangle$, so $\rho(W)=\langle\rho(s),\rho(t)\rangle=W_{s,t}$, and by [F9] the homomorphism $\rho$ is an isomorphism $W\to W_{s,t}$; hence $W$ acts on the same six sectors, the transitivity and freeness of the $W_{s,t}$-action pass to $W$, and the six sectors are exactly the six chambers $wC$ with $|W|=|W_{s,t}|=2m=6$. [F4, F5, F6, F7, F8, F9, F10, F12, F13, F14, F15, algebra]

1.2 Wall stabilizers, (ii). The functional $f=(0,1)$ lies in $C$ with $f(e_s)=0$ and $f(e_t)=1$, so $S(f)=\{s\}$ and the stabilizer formula gives $\operatorname{Stab}_W(f)=W_{\{s\}}=\{1,s\}$; every point of the open face $C_{\{s\}}=\{x_s=0,\ x_t>0\}$ has the same zero set $\{s\}$, so the same formula applies to all of them, and symmetrically every point of $C_{\{t\}}=\{x_t=0,\ x_s>0\}$ has stabilizer $\{1,t\}$. [F3, F7, F10, F11, algebra]

2.1 Interior and vertex stabilizers, (iii). The functional $(1,1)$ lies in $C^\circ$ and has empty zero set, so its stabilizer is $W_\emptyset=\{1\}$; the origin has $S(0)=\{s,t\}$, so its stabilizer is $W_S=W$, of order $6$ by step 1.1. [F3, F10, F11, step 1.1, algebra]

2.2 An orbit and the intersection rule, (iv). Using the generator formulas, $s\cdot(0,1)=(0,1)$, $t\cdot(0,1)=(1,-1)$ and $st\cdot(0,1)=(-1,0)$; moreover the three-element set $S_0:=\{(0,1),(1,-1),(-1,0)\}$ is stable under $s$ and $t$, since $s$ fixes $(0,1)$ and interchanges $(1,-1)$ with $(-1,0)$, while $t$ interchanges $(0,1)$ with $(1,-1)$ and fixes $(-1,0)$; hence $W\cdot(0,1)\subseteq S_0$. Conversely $(0,1)$, $t\cdot(0,1)$ and $st\cdot(0,1)$ are three distinct elements of the orbit, so $W\cdot(0,1)=S_0$, of cardinality $3=|W|/|\operatorname{Stab}_W(0,1)|=6/2$ by steps 1.1 and 1.2, and only $(0,1)$ has both coordinates $\ge0$, so it is the unique point of the orbit in $C$, in accordance with the collision theorem. Finally, for $f\in C$, membership in $sC$ is equivalent to $s\cdot f=(-x_s,x_s+x_t)\in C$, hence to $x_s=0$; therefore $sC\cap C=\{x_s=0,\ x_t\ge0\}$, as asserted. [F3, F10, step 1.1, step 1.2, algebra]

3.1 The whole plane is the Tits cone, (v). Every standard parabolic subgroup of the finite group $W$ is finite, so every point of $C$ has finite $W_{S(f)}$ and the interior criterion gives $C\subseteq U^\circ$. Since $U^\circ$ is $W$-invariant and the six chambers cover $V^*$ by step 1.1, one has $V^*=\bigcup_{w\in W}wC\subseteq U^\circ\subseteq U\subseteq V^*$, so all three sets are equal. [F1, F2, F3, F10, step 1.1, algebra] ∎
