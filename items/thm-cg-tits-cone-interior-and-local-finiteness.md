---
id: thm-cg-tits-cone-interior-and-local-finiteness
kind: theorem
title: "The interior of the Tits cone, finite parabolic stabilizers, and local finiteness"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 13
deps: ["def-cg-tits-cone-and-fundamental-chamber", "thm-cg-tits-cone-finite-negativity-and-convexity", "thm-cg-dual-chamber-intersections-and-point-stabilizers", "thm-cg-root-sign-and-simple-reflection-positivity", "def-cg-geometric-inversion-set", "thm-cg-root-inversion-formulas-and-strong-exchange", "def-cg-real-coxeter-form-and-reflection", "lem-cg-reflection-form-invariance-and-rank-two-orders", "def-cg-canonical-reflection-homomorphism", "def-cg-dual-chambers-and-reflection-hyperplanes", "lem-cg-dual-action-and-chamber-faces-exist", "def-hh-coxeter-matrix-word-group-and-length", "thm-hh-coxeter-exchange-deletion-and-faithfulness", "def-generated-subgroup", "def-real-and-complex-inner-product-space", "def-bilinear-symmetric-skew-and-alternating-forms", "def-dual-family-associated-to-a-basis", "thm-dual-family-is-a-basis-in-finite-dimension", "def-linear-subspace", "def-linear-combination-and-span", "def-linear-basis", "def-finite-cardinality", "lem-finite-set-has-max", "def-metric-space", "def-metric-topology", "def-metric-ball", "def-metric-interior-closure-boundary", "def-metric-compactness", "lem-compactness-is-intrinsic", "thm-riesz-representation-in-finite-dimensions", "def-algebraic-dual-and-linear-functional"]
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

Let $S$, $m$, $W$, $\ell$, $V$, $B$, $\rho$, $\Phi$, $C$, $C^\circ$, the faces $C_I$, the chambers $wC$, the walls, the Tits cone $U$, its interior $U^\circ$ and $\operatorname{Neg}(f)$ be as in [[def-cg-tits-cone-and-fundamental-chamber]] and [[thm-cg-dual-chamber-intersections-and-point-stabilizers]]; for $I\subseteq S$ put $W_I=\langle s:s\in I\rangle$ ([[def-generated-subgroup]]) and $\overline C_I=\{f\in C:f(e_s)=0\text{ for all }s\in I\}$.

**(1) Interior criterion.** Let $f\in C$ and $I:=S(f)=\{s\in S:f(e_s)=0\}$. Then
$$f\in U^\circ\iff W_I\ \text{is finite}.$$

**(2) The interior is the union of the spherical faces.** $U^\circ$ is $W$-invariant, and with $C^f:=\bigcup\{C_I:I\subseteq S,\ W_I\ \text{finite}\}=\{f\in C:W_{S(f)}\ \text{finite}\}$,
$$U^\circ=\bigcup_{w\in W}w\cdot C^f .$$

**(3) Local finiteness.** Let $f\in U^\circ$, write $f=w\cdot f_0$ with $f_0\in C$ and put $I:=S(f_0)$. Then there is $\varepsilon>0$ such that
(i) $\{g:d(f,g)<\varepsilon\}\subseteq\bigcup_{u\in W_I}w\,uC$;
(ii) every chamber meeting $\{g:d(f,g)<\varepsilon\}$ is one of the chambers $w\,uC$, $u\in W_I$;
(iii) every wall meeting $\{g:d(f,g)<\varepsilon\}$ is one of the walls $w\,uH_{e_s}$, $u\in W_I$, $s\in S$.
Consequently every point of $U^\circ$ has a neighborhood meeting only finitely many chambers and only finitely many walls, and every compact subset of $U^\circ$ is met by only finitely many chambers and only finitely many walls.

**(4) Boundary.** Let $f\in C$ with $W_{S(f)}$ infinite, and put $I:=S(f)$. Then $f\notin U^\circ$; more precisely, with $f_s\in V^*$ the dual basis functionals of $(e_s)$ and $\delta_I:=\sum_{s\in I}f_s$:
(i) $f-t\,\delta_I\notin U$ for every $t>0$, and $d(f-t\,\delta_I,f)=t\to0$; hence every neighborhood of $f$ contains points outside $U$;
(ii) every neighborhood of $f$ meets infinitely many distinct chambers, namely all $uC$ with $u\in W_I$.
No local finiteness is claimed at such a point $f$, or at the boundary of $U$ in general.

**(5) The vertex.** $0\in U^\circ$ if and only if $W$ is finite.

## Facts & Assumptions

**Given:** A finite set $S$, a Coxeter matrix $m$, the presented group $W$ with length $\ell$, $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection homomorphism $\rho$ with root system $\Phi$, the signed root system $\Phi=\Phi_+\sqcup\Phi_-$, the closed chamber $C$, its interior $C^\circ$, the faces $C_I$, the chambers $wC$, the Tits cone $U$ with its interior $U^\circ$, the coordinate metric $d$, and the negative-root sets $\operatorname{Neg}(f)$, all as in [[def-cg-tits-cone-and-fundamental-chamber]] and [[def-cg-dual-chambers-and-reflection-hyperplanes]]; for $I\subseteq S$ let $W_I=\langle s:s\in I\rangle$ and $\overline C_I=\{f\in C:f(e_s)=0\ \text{for all}\ s\in I\}$.

[F1] The Tits cone is $U=\bigcup_{w\in W}wC$, $U^\circ$ is its interior for the coordinate metric $d$ (the maximum formula for $S\ne\emptyset$, and $d(0,0)=0$ for $S=\emptyset$), a neighborhood of $f$ contains a ball $\{g:d(f,g)<\varepsilon\}$, and $w'U=U$ for every $w'\in W$. ([[def-cg-tits-cone-and-fundamental-chamber]] (2)-(3)).

[F2] Criterion of finite negativity: $f\in U$ if and only if $\operatorname{Neg}(f)$ is finite; and $\operatorname{Neg}(f)=\emptyset$ if and only if $f\in C$. ([[thm-cg-tits-cone-finite-negativity-and-convexity]] (1)-(2)).

[F3] Collision and stabilizers: if $f,g\in C$, $w\in W$ and $w\cdot f=g$, then $f=g$ and $w\in W_{S(f)}$; consequently $\operatorname{Stab}_W(f)=W_{S(f)}$ for $f\in C$, and $wH_{e_s}=H_{\rho(w)e_s}$ for all $w,s$. ([[thm-cg-dual-chamber-intersections-and-point-stabilizers]] (1), (3)-(4)).

[F4] Every root has a sign: $\Phi=\Phi_+\sqcup\Phi_-$, every root lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$ and not in both, every $f\in C^\circ$ is positive on $\Phi_+$ and negative on $\Phi_-$, and each $r_s$ permutes $\Phi_+\setminus\{e_s\}$ with $r_se_s=-e_s$. ([[thm-cg-root-sign-and-simple-reflection-positivity]] (2)-(3)).

[F5] For $u\in W$ the inversion set is $N(u)=\Phi_+\cap\rho(u)^{-1}\Phi_-$. ([[def-cg-geometric-inversion-set]] (1)).

[F6] For every reduced expression $u=s_1\cdots s_n$ one has $N(u)=\{\rho(s_{i+1}\cdots s_n)^{-1}e_{s_i}:1\le i\le n\}$ and $|N(u)|=\ell(u)$. ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (2)).

[F7] The reflection with normal $e_s$ is $r_sv=v-2B(v,e_s)e_s$ with $B(e_s,e_s)=1$. ([[def-cg-real-coxeter-form-and-reflection]] (2)-(3)).

[F8] Each $r_s$ is a linear involution and fixes pointwise every $v$ with $B(v,e_s)=0$. ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)).

[F9] One has $\rho(s)=r_s$ for every $s$, the positive cone is $V_+=\{\sum_s\lambda_se_s:\lambda_s\ge0\}$, and $\Phi=\{\rho(w)e_s:w\in W,\ s\in S\}$. ([[def-cg-canonical-reflection-homomorphism]] (1)-(3)).

[F10] The dual action is $(w\cdot f)(v)=f(\rho(w)^{-1}v)$; the closed chamber is $C=\{f:f(e_s)\ge0\ \text{for all}\ s\}$, the open chamber is $C^\circ=\{f:f(e_s)>0\ \text{for all}\ s\}$, and the root hyperplane is $H_\alpha=\{f:f(\alpha)=0\}$. ([[def-cg-dual-chambers-and-reflection-hyperplanes]] (1)-(2)).

[F11] $W_I=\langle s:s\in I\rangle$ is the subgroup generated by $I$, and $W_\emptyset=\{1\}$. ([[def-generated-subgroup]]).

[F12] Every element of $W$ is the image of a word in $S$; a reduced expression of $w$ has length exactly $\ell(w)$, and reversing it expresses $w^{-1}$, so $\ell(w^{-1})=\ell(w)$. ([[def-hh-coxeter-matrix-word-group-and-length]]).

[F13] Deletion: every word in $S$ representing a given element can be shortened step by step, deleting two letters at each step, until a reduced expression of that element remains. ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]] (3)).

[F14] A real inner product is bilinear, symmetric and positive definite: $\langle\varphi,\varphi\rangle>0$ for $\varphi\ne0$. ([[def-real-and-complex-inner-product-space]], [[def-bilinear-symmetric-skew-and-alternating-forms]]).

[F15] $V_I=\operatorname{span}\{e_s:s\in I\}$ is a linear subspace, and $V_I^*$ is the dual of $V_I$. ([[def-linear-subspace]], [[def-linear-combination-and-span]], [[def-algebraic-dual-and-linear-functional]]).

[F16] The coordinate functionals $f_s$ of the basis $(e_s)_{s\in S}$ satisfy $f_s(e_t)=\delta_{st}$, and every $h\in V^*$ is linear in these coordinates: $h(v)=\sum_{s\in S}v(s)h(e_s)$ for $v=\sum_{s\in S}v(s)e_s$. Writing $\|v\|_1:=\sum_{s\in S}|v(s)|$ and $\|h\|_\infty:=d(0,h)$ (equal to $\max_{s\in S}|h(e_s)|$ when $S\ne\emptyset$) one has $|h(v)|\le\|h\|_\infty\|v\|_1$; in particular $\delta_I:=\sum_{s\in I}f_s$ takes the value $\delta_I(\alpha)=\sum_{s\in I}c_s$ at $\alpha=\sum_{s\in I}c_se_s$. ([[def-dual-family-associated-to-a-basis]], [[def-algebraic-dual-and-linear-functional]], [[def-linear-basis]]).

[F17] A finite set $N$ has a cardinality $|N|\in\mathbb N$ ([[def-finite-cardinality]]); every nonempty finite subset of $\mathbb R$ has a maximum and a minimum ([[lem-finite-set-has-max]]); and $W_I=\langle s:s\in I\rangle$ is a subgroup of $W$, hence contains the identity and is nonempty ([[def-generated-subgroup]]).

[F18] Compactness: every family of ambient open sets covering a compact subset of a metric space has a finite subfamily covering it, including the empty subfamily for the empty subset. ([[def-metric-compactness]], [[lem-compactness-is-intrinsic]] (2)).

[F19] Riesz representation: for every linear functional $\varphi\mapsto\varphi(e_t)$ on the finite-dimensional inner product space $V_I^*$ there is a unique $z_t\in V_I^*$ with $\langle\varphi,z_t\rangle=\varphi(e_t)$ for all $\varphi$. ([[thm-riesz-representation-in-finite-dimensions]]).

[F20] The dual action is a left action by linear maps: $\mathrm{id}\cdot f=f$, $w_1\cdot(w_2\cdot f)=(w_1w_2)\cdot f$, and $f\mapsto w\cdot f$ is linear for every $w\in W$. ([[lem-cg-dual-action-and-chamber-faces-exist]] (1)).

[F21] The face $C^\circ$ is nonempty: the sum $\sum_{s\in S}f_s$ of the coordinate functionals has value $1$ at every $e_s$, so it lies in $C^\circ$. ([[lem-cg-dual-action-and-chamber-faces-exist]] (2), [[def-dual-family-associated-to-a-basis]]).

## Proof

**Proof technique:** an averaged invariant inner product on the finite parabolic, then an explicit negative-root perturbation.

1.1 The empty-rank case and the parabolic span. If $S=\emptyset$, then $W=\{1\}$, $V^*=C=U=U^\circ=\{0\}$, there is one chamber and no walls, and all five clauses hold with radius $1$; hence assume $S\ne\emptyset$. Let $I\subseteq S$, put $V_I:=\operatorname{span}\{e_s:s\in I\}$ and let $f\in C$ with $S(f)=I$. The finite words in $I$ form a subgroup containing $I$, and any subgroup containing $I$ contains every such word; therefore their values are exactly $W_I$. For a generator $t\in I$ the reflection formula gives $r_tv=v-2B(v,e_t)e_t$ and $r_te_s-e_s=-2B(e_s,e_t)e_t\in V_I$ for every $s\in S$; since $r_t$ is an involution, this shows by induction on a product of generators — no finiteness of $W_I$ is used — that $\rho(u)$ preserves $V_I$ and that $\rho(u)^{-1}e_s-e_s\in V_I$ for every $u\in W_I$ and every $s\in S$. In particular $\rho(u)^{-1}e_s\in V_I$ for $s\in I$, and $f$ vanishes on $V_I$ because $S(f)=I$. [F1, F7, F8, F9, F11, F12, F15, algebra]

1.2 An invariant inner product on $V_I^*$. Assume $W_I$ finite and $I\ne\emptyset$. On the finite-dimensional dual $V_I^*$ consider the action $(u\cdot\varphi)(v)=\varphi(\rho(u)^{-1}v)$ and the positive definite form $\langle\varphi,\psi\rangle_0:=\sum_{s\in I}\varphi(e_s)\psi(e_s)$ (positive definite because a functional on $V_I$ vanishing on the basis $(e_s)_{s\in I}$ is zero). Since $W_I$ is a finite group, the average
$$\langle\varphi,\psi\rangle:=\frac1{|W_I|}\sum_{u\in W_I}\langle u\cdot\varphi,u\cdot\psi\rangle_0$$
is well defined, bilinear and symmetric; it is positive definite because for $\varphi\ne0$ every summand is $\ge0$ and the summand with $u=1$ equals $\sum_{s\in I}\varphi(e_s)^2>0$. Hence $\langle\cdot,\cdot\rangle$ is an inner product on $V_I^*$, and it is $W_I$-invariant: substituting $u'=ut$ in the sum shows $\langle t\cdot\varphi,t\cdot\psi\rangle=\langle\varphi,\psi\rangle$ for every $t\in W_I$. [F14, F17, algebra]

1.3 Reflections of this inner product. For $t\in I$ the functional $\varphi\mapsto\varphi(e_t)$ on $V_I^*$ is nonzero (evaluate at any $\varphi$ with $\varphi(e_t)\ne0$), so by Riesz representation there is $z_t\in V_I^*$ with $\langle\varphi,z_t\rangle=\varphi(e_t)$ for all $\varphi$; then $z_t\ne0$, and $z_t$ is orthogonal to the hyperplane $H_t:=\{\varphi:\varphi(e_t)=0\}$. The action of $t$ is an involution fixing $H_t$ pointwise, because $t\cdot\varphi=\varphi$ holds exactly when $\varphi$ vanishes on $(\rho(t)-\mathrm{id})V_I=\mathbb Re_t$. As $t$ is an isometry of $\langle\cdot,\cdot\rangle$, for all $\psi$ one has $\langle t\cdot\psi,z_t\rangle=\langle t^2\cdot\psi,t\cdot z_t\rangle=\langle\psi,t\cdot z_t\rangle$, while also $\langle t\cdot\psi,z_t\rangle=(t\cdot\psi)(e_t)=\psi(r_te_t)=\psi(-e_t)=-\langle\psi,z_t\rangle$. Hence $\langle\psi,t\cdot z_t\rangle=-\langle\psi,z_t\rangle$ for all $\psi$, and positive definiteness gives $t\cdot z_t=-z_t\ne z_t$. Every $\psi$ decomposes as $\psi=(\psi-\frac{\langle\psi,z_t\rangle}{\|z_t\|^2}z_t)+\frac{\langle\psi,z_t\rangle}{\|z_t\|^2}z_t$ with the first summand orthogonal to $z_t$, and $t$ agrees with $R(\psi):=\psi-\frac{2\langle\psi,z_t\rangle}{\|z_t\|^2}z_t$ on $z_t^\perp$ and on $z_t$; hence
$$t\cdot\psi=\psi-2\frac{\psi(e_t)}{\|z_t\|^2}z_t\qquad(\psi\in V_I^*).$$
[F4, F8, F9, F10, F14, F19, algebra]

2.1 The finite-parabolic lemma. If $I=\emptyset$, then $V_I^*=\{0\}$ and $u=1$ gives the conclusion; assume $I\ne\emptyset$. Let $\varphi\in V_I^*$ and let $\gamma\in V_I^*$ be the functional $\gamma(v):=\sum_{s\in I}c_s$ for $v=\sum_{s\in I}c_se_s$; then $\gamma(e_t)=1$ for every $t\in I$ and $\gamma=0$ when $I=\emptyset$. Choose $u\in W_I$ maximizing the real number $\langle u\cdot\varphi,\gamma\rangle$ over the nonempty finite set $\{\langle v\cdot\varphi,\gamma\rangle:v\in W_I\}$. If $(u\cdot\varphi)(e_t)<0$ for some $t\in I$, then step 1.3 applied to $\psi:=u\cdot\varphi$ gives
$$\langle t\cdot(u\cdot\varphi),\gamma\rangle=\langle u\cdot\varphi,\gamma\rangle-\frac{2(u\cdot\varphi)(e_t)}{\|z_t\|^2}\langle z_t,\gamma\rangle=\langle u\cdot\varphi,\gamma\rangle-\frac{2(u\cdot\varphi)(e_t)}{\|z_t\|^2}>\langle u\cdot\varphi,\gamma\rangle,$$
using $\langle z_t,\gamma\rangle=\gamma(e_t)=1$; this contradicts maximality, so $(u\cdot\varphi)(e_s)\ge0$ for every $s\in I$. Thus every element of $V_I^*$ has a $W_I$-translate in the closed chamber of $V_I^*$. [F17, step 1.2, step 1.3, algebra]

2.2 The infinite-parabolic case (4)(i): points outside $U$ arbitrarily close to $f$. Let $f\in C$ with $I=S(f)$ and $W_I$ infinite. If lengths were bounded on $W_I$ by some $N$, every element of $W_I$ would have a reduced expression of length at most $N$, hence would be the image of one of the finitely many words in $S$ of length at most $N$, and $W_I$ would be finite; so $\ell$ is unbounded on $W_I$. Every element of $W_I$ has a reduced expression with letters in $I$: writing it as a product of elements of $I$ and repeatedly deleting two letters until no further deletion shortens the word produces a reduced expression whose letters are among the original ones, hence lie in $I$. For such a reduced expression $u=s_1\cdots s_n$ with $s_i\in I$, the suffix formula exhibits every element of $N(u)$ as $\rho(v)^{-1}e_s$ with $v\in W_I$, $s\in I$; since $\rho(v)$ preserves $V_I$, these roots lie in $\Phi_+\cap V_I$. As $|N(u)|=\ell(u)$ is unbounded on $W_I$, the set $\Phi_+\cap V_I$ is infinite. Now let $\delta_I:=\sum_{s\in I}f_s$ for the dual basis functionals $f_s$, and put $g_t:=f-t\,\delta_I$ for $t>0$. Every $\alpha\in\Phi_+\cap V_I$ is a nonnegative combination $\alpha=\sum_{s\in I}c_se_s$, so $f(\alpha)=\sum_sc_sf(e_s)=0$ and $\delta_I(\alpha)=\sum_sc_s>0$, whence $g_t(\alpha)=-t\,\delta_I(\alpha)<0$; therefore $\operatorname{Neg}(g_t)$ is infinite and $g_t\notin U$ by the criterion of finite negativity. Since $g_t-f=-t\,\delta_I$ has coordinate $-t$ on $I$ and $0$ outside $I$, one has $d(g_t,f)=t$, and $t$ can be taken arbitrarily small; hence every neighborhood of $f$ contains points outside $U$, and $f\notin U^\circ$. This proves the reverse direction of (1) and clause (4)(i). [F1, F2, F5, F6, F12, F13, F16, step 1.1, algebra]

3.1 The finite case of (1): a neighborhood of $f$ lies in $U$. Keep the notation of step 1.1. Applying the lemma of step 2.1 to $\varphi:=g|_{V_I}$ for an arbitrary $g\in V^*$ gives $u\in W_I$ with $(u\cdot(g|_{V_I}))(e_s)\ge0$ for all $s\in I$; since $\rho(u)^{-1}e_s\in V_I$ for $s\in I$, this is $(u\cdot g)(e_s)\ge0$ for $s\in I$. For $s\notin I$ write $\rho(u)^{-1}e_s=e_s+v_u$ with $v_u\in V_I$; then $(u\cdot g)(e_s)=f(e_s)+(g-f)(e_s)+(g-f)(v_u)$, because $f$ vanishes on $V_I$. If $I\ne S$, put $\delta:=\min_{s\notin I}f(e_s)>0$ and $M:=\max\{\,\|\rho(u)^{-1}e_s-e_s\|_1:u\in W_I,\ s\notin I\,\}<\infty$ (a maximum over the finite set $W_I\times(S\setminus I)$ in the coordinates of [F16]), and let $\varepsilon:=\delta/(1+M)$; if $I=S$ put $\varepsilon:=1$ and skip the estimate outside $I$. Every $g$ with $d(f,g)<\varepsilon$ then satisfies $(u\cdot g)(e_s)\ge f(e_s)-\|g-f\|_\infty-\|g-f\|_\infty M>\delta-\varepsilon(1+M)=0$ for $s\notin I$, by [F16], and $\ge0$ for $s\in I$; that is $u\cdot g\in C$ and $g\in u^{-1}C\subseteq U$. Hence the ball $\{g:d(f,g)<\varepsilon\}$ lies in $U$, so $f\in U^\circ$; this is the finite case of (1). [F1, F2, F10, F16, F17, step 1.1, step 2.1, algebra]

3.2 The boundary meets infinitely many chambers, (4)(ii). Keep $f$ and $I$ from step 2.2. For every $u\in W_I$ the chamber $uC$ contains $f$, because $u\in W_{S(f)}$ fixes $f$; distinct $u$ give distinct chambers: if $uC=u'C$, then with $L:=u'^{-1}u$ one has $L(C)=C$, and for any point $x\in C^\circ$, which is nonempty by [F21] and lies in $C$, the points $x$ and $L(x)$ are in $C$ and $L\cdot x=L(x)$, so the collision theorem gives $L\in W_{S(x)}=W_\emptyset=\{1\}$ and $u=u'$. Since $W_I$ is infinite, the infinitely many distinct chambers $uC$ all contain $f$, so every neighborhood of $f$ meets infinitely many distinct chambers. Together with step 2.2 this is (4). [F3, F10, F11, F21, step 2.2, algebra]

4.1 Chambers and walls near $f$, the case $w=1$. Keep $\varepsilon$ from step 3.1 and let $vC$ be a chamber meeting the ball $\{g:d(f,g)<\varepsilon\}$ at a point $g$; by step 3.1 there is $u\in W_I$ with $g\in uC$, so $u^{-1}\cdot g\in C$ and $v^{-1}\cdot g\in C$. Apply the collision theorem to the pair $(u^{-1}\cdot g,\,v^{-1}\cdot g)$ and the element $v^{-1}u$: since $(v^{-1}u)\cdot(u^{-1}\cdot g)=v^{-1}\cdot g$, we get $v^{-1}u\in W_{S(u^{-1}\cdot g)}$. For $s\notin I$ one has $(u^{-1}\cdot g)(e_s)=g(\rho(u)e_s)=f(e_s)+(g-f)(e_s)+(g-f)(\rho(u)e_s-e_s)>0$, because $\|\rho(u)e_s-e_s\|_1\le M$ (the map $u\mapsto u^{-1}$ permutes $W_I$) and $d(f,g)<\varepsilon$, by [F16]; hence $S(u^{-1}\cdot g)\subseteq I$ and $v^{-1}u\in W_I$, so $v\in uW_I\subseteq W_I$ and $vC$ is one of the chambers $u'C$ with $u'\in W_I$. If instead a wall $vH_{e_r}$ meets the ball, put $\alpha:=\rho(v)e_r\in\Phi$, so that $vH_{e_r}=H_\alpha$; for every $u\in W_I$ the intersection $H_\alpha\cap uC^\circ$ is empty, because a point $u\cdot x$ with $x\in C^\circ$ has $(u\cdot x)(\alpha)=x(\rho(u)^{-1}\alpha)\ne0$ as $\rho(u)^{-1}\alpha$ is a root and $x$ is strictly signed on roots. Any point $y\in H_\alpha$ in the ball lies in some $uC$ with $u\in W_I$ by the covering of step 3.1, and $y\notin uC^\circ$, so $y$ is a boundary point of the closed polyhedral cone $uC=\{f:f(\rho(u)e_s)\ge0\ \text{for all}\ s\}$ and therefore lies in some wall $uH_{e_s}$. Thus the nonempty open subset $H_\alpha\cap\{g:d(f,g)<\varepsilon\}$ of the hyperplane $H_\alpha$ is covered by the finitely many subspaces $H_\alpha\cap uH_{e_s}$ ($u\in W_I$, $s\in S$), each of which is either $H_\alpha$ or a proper subspace; a finite union of proper subspaces of a real vector space cannot contain a nonempty open set (given a point of the open set outside the first $m-1$ subspaces, the affine line through it in a direction outside the last subspace meets each remaining subspace in at most one parameter, so some nearby parameter lies in the open set but in no subspace), so $H_\alpha=uH_{e_s}$ for some $u\in W_I$ and $s\in S$, and the wall is one of the walls $uH_{e_s}$ of the chambers $uC$, $u\in W_I$. [F3, F4, F10, F16, step 3.1, algebra]

5.1 Local finiteness at every point of $U^\circ$: (3)(i)-(iii). Let $f\in U^\circ$ and write $f=w\cdot f_0$ with $f_0\in C$, and put $I:=S(f_0)$; this is possible because $U=\bigcup_wwC$. The map $L(x):=w\cdot x$ is linear by [F20] and is a bijection with inverse $L^{-1}(x)=w^{-1}\cdot x$; both are given in the coordinates $(e_s)$ by real matrices $(m_{st})$ and $(m'_{st})$, so $d(Lx,Ly)\le C\,d(x,y)$ and $d(L^{-1}x,L^{-1}y)\le C'\,d(x,y)$ with $C:=\max_s\sum_t|m_{st}|$ and $C':=\max_s\sum_t|m'_{st}|$ (if $S=\emptyset$ then $V^*=\{0\}$ and there is nothing to prove), by [F16]; in particular $C>0$ when $S\ne\emptyset$. Since $f\in U^\circ$ there is $\varepsilon'>0$ with $B(f,\varepsilon')\subseteq U$; then $L(B(f_0,\varepsilon'/C))\subseteq B(f,\varepsilon')\subseteq U$, so $B(f_0,\varepsilon'/C)\subseteq L^{-1}(U)=U$ because $L(U)=U$ by [F1]; hence $f_0\in U^\circ$, and since $f_0\in C$, the contrapositive of step 2.2 gives that $W_I$ is finite. By steps 3.1 and 4.1 applied to $f_0$ there is $\varepsilon_0>0$ such that the ball about $f_0$ of radius $\varepsilon_0$ is covered by the chambers $uC$ ($u\in W_I$), every chamber meeting it is one of them, and every wall meeting it is one of the walls $uH_{e_s}$ ($u\in W_I$, $s\in S$). Hence $L(B(f_0,\varepsilon_0))\supseteq B(f,\varepsilon)$ for $\varepsilon:=\varepsilon_0/C'$: for $y\in B(f,\varepsilon)$ the point $x:=L^{-1}(y)$ satisfies $d(x,f_0)=d(L^{-1}y,L^{-1}f)\le C'd(y,f)<\varepsilon_0$. So the ball about $f$ is contained in $\bigcup_{u\in W_I}wuC$, since $L(uC)=wuC$ for every $u$ by [F20]. If a chamber $A=vC$ meets $B(f,\varepsilon)$ at $y$, then $L^{-1}(A)=w^{-1}vC$ meets $B(f_0,\varepsilon_0)$ at $x$, so $w^{-1}vC=uC$ for some $u\in W_I$ by the $w=1$ case of step 4.1, that is $A=wuC$; and if a wall $A=vH_{e_s}$ meets $B(f,\varepsilon)$, then $L^{-1}(A)=(w^{-1}v)H_{e_s}$ meets $B(f_0,\varepsilon_0)$, so $w^{-1}vH_{e_s}=uH_{e_r}$ for some $u\in W_I$, $r\in S$ by step 4.1, that is $A=(wu)H_{e_r}$. Thus every chamber meeting the ball about $f$ is one of the chambers $wuC$ and every wall meeting it is one of the walls $wuH_{e_s}$ with $u\in W_I$, $s\in S$. This is (3) for general $f$. [F1, F10, F16, F20, step 2.2, step 3.1, step 4.1, algebra]

6.1 Compact subsets. Let $K\subseteq U^\circ$ be compact and let $\mathcal B$ be the family of all balls $B(x,r)$ with $x\in K$, $r>0$, that meet only finitely many chambers and walls. Step 5.1 shows that $\mathcal B$ covers $K$, without selecting a radius at each point. These balls are open: for $y\in B(x,r)$, the triangle inequality gives $B(y,r-d(x,y))\subseteq B(x,r)$. By [F18], finitely many members of $\mathcal B$ cover $K$ (none if $K=\emptyset$). Every chamber or wall meeting $K$ meets one of these balls, so only finitely many chambers and walls meet $K$. [F1, F18, step 5.1, algebra]

7.1 Clause (2) and the vertex (5). First, $U^\circ$ is $W$-invariant: for each $w$, the map $L_w(x)=w\cdot x$ is a linear bijection by [F20], and as in step 5.1 its two coordinate matrices give $d(L_wx,L_wy)\le C_wd(x,y)$ and $d(L_w^{-1}x,L_w^{-1}y)\le C_w'd(x,y)$ by [F16], so $L_w$ is a homeomorphism; since $L_w(U)=U$ by [F1], the image $L_w(U^\circ)$ is open and contained in $U$, hence $L_w(U^\circ)\subseteq U^\circ$, and applying the same to $L_w^{-1}$ gives $L_w(U^\circ)=U^\circ$. Now if $f\in U^\circ$ then $f=w\cdot g$ with $g\in C$, and $g\in U^\circ$ by this invariance, so the criterion (1), whose two directions are steps 2.2 and 3.1, makes the group $W_{S(g)}$ finite and $g\in C^f$, whence $f\in w\cdot C^f$; conversely every point of $w\cdot C^f$ lies in $U^\circ$ by the finite case of (1) applied to its $w$-translate in $C$ and the $W$-invariance of $U^\circ$. Since $C^f=\bigcup\{C_I:I\subseteq S,\ W_I\ \text{finite}\}$ and $f\in C_I$ means $S(f)=I$, this is the identification $C^f=\{f\in C:W_{S(f)}\ \text{finite}\}$ and hence $U^\circ=\bigcup_{w\in W}w\cdot C^f$. Applying (1) to $f=0$, whose zero set is $S(0)=S$, gives $0\in U^\circ$ if and only if $W_S=W$ is finite; this is (5). [F1, F10, F11, F16, F20, step 2.2, step 3.1, step 5.1, algebra] ∎
