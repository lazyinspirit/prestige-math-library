---
id: thm-cg-dual-chamber-intersections-and-point-stabilizers
kind: theorem
title: "Chamber collisions, point stabilizers, and the intersection rule"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 12
deps: ["def-cg-tits-cone-and-fundamental-chamber", "thm-cg-root-sign-and-simple-reflection-positivity", "thm-cg-root-length-criterion-and-faithfulness", "def-cg-real-coxeter-form-and-reflection", "lem-cg-reflection-form-invariance-and-rank-two-orders", "def-cg-canonical-reflection-homomorphism", "def-cg-dual-chambers-and-reflection-hyperplanes", "lem-cg-dual-action-and-chamber-faces-exist", "def-hh-coxeter-matrix-word-group-and-length", "thm-hh-coxeter-exchange-deletion-and-faithfulness", "def-generated-subgroup", "def-group", "def-algebraic-dual-and-linear-functional", "def-linear-basis"]
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

Let $S$, $m$, $W$, $\ell$, $V$, $B$, $\rho$, $\Phi$, $C$, $C^\circ$, the chambers $wC$ and the Tits cone $U$ be as in [[def-cg-tits-cone-and-fundamental-chamber]]; for $I\subseteq S$ put $W_I:=\langle s:s\in I\rangle$ ([[def-generated-subgroup]]) and for $f\in V^*$ put $S(f):=\{s\in S:f(e_s)=0\}$.

**(1) Walls are root hyperplanes.** For all $w\in W$ and $s\in S$,
$$wH_{e_s}=H_{\rho(w)e_s};$$
hence the walls of the chamber system are exactly the root hyperplanes $H_\alpha$, $\alpha\in\Phi$.

**(2) Side rule.** For all $w\in W$ and $s\in S$,
$$wC^\circ\subseteq\{f\in V^*:f(e_s)>0\}\iff\ell(sw)>\ell(w),\qquad wC^\circ\subseteq\{f\in V^*:f(e_s)<0\}\iff\ell(sw)<\ell(w),$$
and exactly one of the two alternatives holds. If $\ell(sw)<\ell(w)$ then $C\subseteq\{f:f(e_s)\ge0\}$ and $wC\subseteq\{f:f(e_s)\le0\}$: the chambers $C$ and $wC$ lie on opposite sides of the wall $H_{e_s}$.

**(3) Collision.** If $f,g\in C$, $w\in W$ and $w\cdot f=g$, then $f=g$ and $w\in W_{S(f)}$.

**(4) Point stabilizers.** For every $f\in C$, $\operatorname{Stab}_W(f)=W_{S(f)}$. For $f\in U$ and $w\in W$ with $w^{-1}\cdot f\in C$ one has
$$\operatorname{Stab}_W(f)=w\,W_{S(w^{-1}\cdot f)}\,w^{-1}.$$

**(5) The intersection rule.** For every $w\in W$, with $\overline C_T:=\{f\in C:f(e_s)=0\text{ for all }s\in T\}$,
$$wC\cap C=\{f\in C:w\in W_{S(f)}\}=\bigcup_{\substack{T\subseteq S\\ w\in W_T}}\overline C_T .$$

**(6) Strict fundamental domain.** Every $W$-orbit contained in $U$ meets $C$ in exactly one point. In particular the open chambers $wC^\circ$ ($w\in W$) are pairwise disjoint, and the chambers meeting in a face are described by (5).

## Facts & Assumptions

**Given:** A finite set $S$, a Coxeter matrix $m$, the presented group $W$ with length $\ell$, $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection homomorphism $\rho$ with root system $\Phi$, the closed chamber $C$, its interior $C^\circ$, the chambers $wC$, the Tits cone $U$ and the root hyperplanes $H_\alpha$, all as in [[def-cg-tits-cone-and-fundamental-chamber]] and [[def-cg-dual-chambers-and-reflection-hyperplanes]]; for $I\subseteq S$ let $W_I=\langle s:s\in I\rangle$, and for $f\in V^*$ let $S(f)=\{s\in S:f(e_s)=0\}$.

[F1] The chamber system and the Tits cone are $wC=\{w\cdot f:f\in C\}$ and $U=\bigcup_{w\in W}wC$, and $w'U=U$ for every $w'\in W$. ([[def-cg-tits-cone-and-fundamental-chamber]] (1)-(2)).

[F2] The dual action is $(w\cdot f)(v)=f(\rho(w)^{-1}v)$, and it is a left action: $\mathrm{id}\cdot f=f$ and $w_1\cdot(w_2\cdot f)=(w_1w_2)\cdot f$; the closed chamber is $C=\{f:f(e_s)\ge0\ \text{for all}\ s\}$, the open chamber is $C^\circ=\{f:f(e_s)>0\ \text{for all}\ s\}$, and the root hyperplane is $H_\alpha=\{f:f(\alpha)=0\}$. ([[def-cg-dual-chambers-and-reflection-hyperplanes]] (1)-(2), [[lem-cg-dual-action-and-chamber-faces-exist]] (1)).

[F3] Every root has a sign: $\Phi=\Phi_+\sqcup\Phi_-$, every root lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$ and not in both, and every $f\in C^\circ$ satisfies $f(\alpha)>0$ for $\alpha\in\Phi_+$ and $f(\alpha)<0$ for $\alpha\in\Phi_-$. ([[thm-cg-root-sign-and-simple-reflection-positivity]] (2)).

[F4] Root-length criterion: for all $w\in W$ and $s\in S$, $\ell(ws)>\ell(w)$ if and only if $\rho(w)e_s\in\Phi_+$, and $\ell(ws)<\ell(w)$ if and only if $\rho(w)e_s\in\Phi_-$. ([[thm-cg-root-length-criterion-and-faithfulness]] (1)).

[F5] The reflection with normal $e_s$ is $r_sv=v-2B(v,e_s)e_s$ and $B(e_s,e_s)=1$. ([[def-cg-real-coxeter-form-and-reflection]] (2)-(3)).

[F6] Each $r_s$ is a linear involution fixing pointwise every $v$ with $B(v,e_s)=0$. ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)).

[F7] One has $\rho(s)=r_s$ for every $s\in S$, and $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$. ([[def-cg-canonical-reflection-homomorphism]] (1)-(2)).

[F8] Every $w\in W$ has a reduced expression $w=s_1\cdots s_k$ with $k=\ell(w)$; reversing a reduced word for $w$ gives a word of the same length for $w^{-1}$, so $\ell(w^{-1})\le\ell(w)$, and applying the same argument to $w^{-1}$ gives $\ell(w^{-1})=\ell(w)$. ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F9] Parity and exchange: $\ell(sw)=\ell(w)\pm1$ for all $w$ and $s$; and if $\ell(sw)=\ell(w)-1$ then $w$ has a reduced expression beginning with $s$, so $w=sw'$ with $\ell(w')=\ell(w)-1$. ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (1)-(2)).

[F10] $W_I=\langle s:s\in I\rangle$ is the subgroup generated by $I$, and $\langle\emptyset\rangle=\{1\}$. ([[def-generated-subgroup]]).

[F11] Two linear functionals agreeing on the basis $(e_s)_{s\in S}$ of $V$ are equal, and $(e_s)$ is a basis. ([[def-linear-basis]]).

[F12] The dual space carries pointwise addition and scalar multiplication, and its elements are linear. ([[def-algebraic-dual-and-linear-functional]]).

## Proof

**Proof technique:** direct, by the side rule and induction on word length.

1.1 Walls are root hyperplanes. For $w\in W$, $s\in S$ and $f\in V^*$ one has $f\in wH_{e_s}$ if and only if $(w^{-1}\cdot f)(e_s)=0$, and by the dual action this is $f(\rho(w)e_s)=0$, that is $f\in H_{\rho(w)e_s}$; hence $wH_{e_s}=H_{\rho(w)e_s}$. As $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$, the walls $wH_{e_s}$ of the chambers are exactly the root hyperplanes $H_\alpha$ with $\alpha\in\Phi$. This is (1). [F1, F2, F7, algebra]

1.2 The side rule. Let $w\in W$, $s\in S$, $x\in C^\circ$ and put $\beta:=\rho(w)^{-1}e_s$, so that $(w\cdot x)(e_s)=x(\beta)$. By the signed root system, either $\beta\in\Phi_+$ and then $x(\beta)>0$, or $\beta\in\Phi_-$ and then $x(\beta)<0$, so the sign of $(w\cdot x)(e_s)$ is the same for every $x\in C^\circ$. By the root-length criterion applied to $w^{-1}$, $\beta=\rho(w^{-1})e_s\in\Phi_+$ if and only if $\ell(w^{-1}s)>\ell(w^{-1})$, and $\ell(w^{-1}s)=\ell(sw)$, $\ell(w^{-1})=\ell(w)$ because lengths are inversion-invariant; hence $wC^\circ\subseteq\{f:f(e_s)>0\}$ if and only if $\ell(sw)>\ell(w)$, and $wC^\circ\subseteq\{f:f(e_s)<0\}$ if and only if $\ell(sw)<\ell(w)$. Parity $\ell(sw)=\ell(w)\pm1$ makes the two alternatives exclusive and exhaustive. If $\ell(sw)<\ell(w)$ and $x\in C$, then $\beta\in\Phi_-$, so $\beta=-b$ with $b\in\Phi_+\setminus\{0\}$ and $(w\cdot x)(e_s)=x(-b)=-x(b)\le0$ because $x\ge0$ on $V_+$ and $\Phi_+\subseteq V_+\setminus\{0\}$; thus $wC\subseteq\{f:f(e_s)\le0\}$, while $C\subseteq\{f:f(e_s)\ge0\}$ by definition. This is (2). [F2, F3, F4, F8, F9, algebra]

1.3 Collision, claim and base case. Claim: if $f,g\in C$, $w\in W$ and $w\cdot f=g$, then $f=g$ and $w\in W_{S(f)}$. Proceed by induction on $k:=\ell(w)$. For $k=0$ one has $w=1$, so $f=g$ and $1\in W_{S(f)}$. [F1, F10, algebra]

2.1 Collision, induction step. Let $k\ge1$ and suppose the claim known for all elements of length $k-1$. A reduced expression of $w$ begins with some $s\in S$ and has length $k$, so $w=sw'$ with $\ell(w')=k-1$ and $\ell(sw)=k-1<\ell(w)$. By step 1.2 the chambers $C$ and $wC$ lie on opposite sides of the wall $H_{e_s}$: $C\subseteq\{f:f(e_s)\ge0\}$ and $wC\subseteq\{f:f(e_s)\le0\}$. Since $g=w\cdot f$ lies in both, $g(e_s)=0$. Then $s\cdot g=g$: for $t\ne s$ the reflection formula gives $r_se_t=e_t-2B(e_t,e_s)e_s$, so $(s\cdot g)(e_t)=g(r_se_t)=g(e_t)-2B(e_t,e_s)g(e_s)=g(e_t)$ using $g(e_s)=0$; and $(s\cdot g)(e_s)=g(r_se_s)=g(-e_s)=0=g(e_s)$. Two linear functionals agreeing on the basis $(e_s)_{s\in S}$ are equal, so $s\cdot g=g$ and hence $g=s\cdot g=s\cdot(w\cdot f)=(sw)\cdot f=w'\cdot f$. The induction hypothesis applied to $w'$ and the pair $(f,g)$ gives $f=g$ and $w'\in W_{S(f)}$. Since $g(e_s)=0$ and $f=g$, also $s\in S(f)$; therefore $w=sw'\in W_{S(f)}$ because $W_{S(f)}$ is the subgroup generated by $S(f)$. This completes (3). [F2, F5, F6, F7, F10, F11, F12, step 1.2, step 1.3, algebra]

3.1 Point stabilizers. Let $f\in C$. If $s\in S(f)$, the computation of step 2.1 with $g=f$ gives $s\cdot f=f$, so every element of the subgroup $W_{S(f)}$ generated by these $s$ fixes $f$; hence $W_{S(f)}\subseteq\operatorname{Stab}_W(f)$. Conversely, if $w\cdot f=f$ with $f\in C$, then (3) applied to the pair $(f,f)$ gives $w\in W_{S(f)}$; hence $\operatorname{Stab}_W(f)=W_{S(f)}$. For the second formula, $\operatorname{Stab}_W(w\cdot g)=w\operatorname{Stab}_W(g)w^{-1}$ holds in any group action: an element $x$ fixes $g$ if and only if $wxw^{-1}$ fixes $w\cdot g$. Given $f\in U$ and $w$ with $w^{-1}\cdot f\in C$, applying the first formula to $g:=w^{-1}\cdot f$ gives $\operatorname{Stab}_W(f)=w\,W_{S(w^{-1}\cdot f)}\,w^{-1}$. This is (4). [F1, F10, step 2.1, algebra]

4.1 The intersection rule. Let $f\in C$ and $w\in W$. If $f\in wC\cap C$, then $w^{-1}\cdot f\in C$ and (3) applied to the element $w^{-1}$ and the pair $(f,\,w^{-1}\cdot f)$ gives $f=w^{-1}\cdot f$ and $w^{-1}\in W_{S(f)}$, that is $w\in W_{S(f)}$; conversely, if $f\in C$ and $w\in W_{S(f)}$, then $w\cdot f=f$ by step 3.1, so $f\in wC\cap C$. This proves $wC\cap C=\{f\in C:w\in W_{S(f)}\}$. For the second description, note that $f\in\overline C_T$ means $f\in C$ and $f(e_s)=0$ for all $s\in T$, so $T\subseteq S(f)$; hence if $f\in\overline C_T$ and $w\in W_T$ then $w\in W_{S(f)}$, and conversely for $f\in C$ with $w\in W_{S(f)}$ one has $f\in\overline C_{S(f)}$ with $w\in W_{S(f)}$. Therefore $wC\cap C=\{f\in C:w\in W_{S(f)}\}=\bigcup_{T\subseteq S,\,w\in W_T}\overline C_T$. This is (5). [step 2.1, step 3.1, F10, algebra]

5.1 The strict fundamental domain. Every $f\in U$ lies in some chamber $wC$, so $w^{-1}\cdot f\in C$: every $W$-orbit contained in $U$ meets $C$. If $x,y\in C$ lie in one orbit, say $y=w\cdot x$, then (3) gives $x=y$. For the disjointness of open chambers, if $z\in wC^\circ\cap vC^\circ$ put $f:=w^{-1}\cdot z$ and $g:=v^{-1}\cdot z$, so that $f,g\in C^\circ$ and $g=(v^{-1}w)\cdot f$; (3) applied to the element $v^{-1}w$ gives $f=g$ and $v^{-1}w\in W_{S(f)}=W_\emptyset=\{1\}$, so $v^{-1}w=1$ and $w=v$. The chambers meeting in a face are described by step 4.1. This is (6). [F1, F10, step 2.1, step 4.1, algebra] ∎
