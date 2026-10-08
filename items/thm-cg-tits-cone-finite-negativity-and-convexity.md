---
id: thm-cg-tits-cone-finite-negativity-and-convexity
kind: theorem
title: "The finite-negativity criterion, the reduction step, and convexity of the Tits cone"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 12
deps: ["def-cg-tits-cone-and-fundamental-chamber", "thm-cg-root-sign-and-simple-reflection-positivity", "def-cg-geometric-inversion-set", "thm-cg-root-inversion-formulas-and-strong-exchange", "def-cg-real-coxeter-form-and-reflection", "def-cg-canonical-reflection-homomorphism", "lem-cg-reflection-form-invariance-and-rank-two-orders", "def-cg-dual-chambers-and-reflection-hyperplanes", "def-hh-coxeter-matrix-word-group-and-length", "def-algebraic-dual-and-linear-functional", "def-linear-combination-and-span", "def-finite-cardinality", "thm-induction-principle"]
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
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Let $S$, $m$, $W$, $\ell$, $V$, $B$, $\rho$, $\Phi=\Phi_+\sqcup\Phi_-$, $V_+$, $C$, $C^\circ$, the chambers $wC$, the Tits cone $U$ and the negative-root sets $\operatorname{Neg}(f)$ be as in [[def-cg-tits-cone-and-fundamental-chamber]].

**(1) Finite-negativity criterion.** For every $f\in V^*$,
$$f\in U\iff\operatorname{Neg}(f)\ \text{is finite}.$$

**(2) The chamber as the empty negative-root set.** For every $f\in V^*$, $\operatorname{Neg}(f)=\emptyset$ if and only if $f\in C$.

**(3) Reduction step.** Let $f\in V^*$ with $\operatorname{Neg}(f)$ finite and $f\notin C$, and let $s\in S$ with $f(e_s)<0$ (such an $s$ exists). Then $e_s\in\operatorname{Neg}(f)$ and
$$\operatorname{Neg}(s\cdot f)=r_s\bigl(\operatorname{Neg}(f)\setminus\{e_s\}\bigr),\qquad |\operatorname{Neg}(s\cdot f)|=|\operatorname{Neg}(f)|-1.$$
Iterating, after exactly $|\operatorname{Neg}(f)|$ steps one reaches an element $w\in W$ with $w\cdot f\in C$.

**(4) Convexity.** $U$ is closed under nonnegative scalar multiples and under convex combinations:
$$f\in U,\ \lambda\ge0\ \Longrightarrow\ \lambda f\in U;\qquad f,g\in U,\ t\in[0,1]\ \Longrightarrow\ (1-t)f+tg\in U .$$

**(5) Inversion-set bounds.** If $f\in U$ and $w\in W$ satisfies $w\cdot f\in C$, then
$$\operatorname{Neg}(f)\subseteq N(w)\qquad\text{and}\qquad |\operatorname{Neg}(f)|\le\ell(w).$$

## Facts & Assumptions

**Given:** A finite set $S$, a Coxeter matrix $m$, the presented group $W$ with length $\ell$, $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection homomorphism $\rho$, the signed root system $\Phi=\Phi_+\sqcup\Phi_-$, the positive cone $V_+$, the closed chamber $C$, its interior $C^\circ$, the chambers $wC$, the Tits cone $U$ and the negative-root sets $\operatorname{Neg}(f)$, all as in [[def-cg-tits-cone-and-fundamental-chamber]].

[F1] The Tits cone is $U=\bigcup_{w\in W}wC$, the closed chamber is $C=\{f\in V^*:f(e_s)\ge0\ \text{for all}\ s\}$, the open chamber is $C^\circ=\{f:f(e_s)>0\ \text{for all}\ s\}$, the negative-root set is $\operatorname{Neg}(f)=\{\alpha\in\Phi_+:f(\alpha)<0\}$, the dual action is $(w\cdot f)(v)=f(\rho(w)^{-1}v)$, and $w'U=U$ for every $w'\in W$. ([[def-cg-tits-cone-and-fundamental-chamber]] (1)-(4)).

[F2] Every root has a sign: $\Phi=\Phi_+\sqcup\Phi_-$, every root lies in $V_+\setminus\{0\}$ or in $-V_+\setminus\{0\}$ and not in both, and $e_s\in\Phi_+$ for every $s\in S$. ([[thm-cg-root-sign-and-simple-reflection-positivity]] (2)).

[F3] For every $s\in S$ one has $r_s(\Phi_+\setminus\{e_s\})=\Phi_+\setminus\{e_s\}$ and $r_se_s=-e_s$. ([[thm-cg-root-sign-and-simple-reflection-positivity]] (3)).

[F4] The inversion set of $w\in W$ is $N(w)=\Phi_+\cap\rho(w)^{-1}\Phi_-=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$. ([[def-cg-geometric-inversion-set]] (1)).

[F5] For every $w\in W$ one has $|N(w)|=\ell(w)$. ([[thm-cg-root-inversion-formulas-and-strong-exchange]] (2)).

[F7] Each $r_s$ is linear, $r_s^2=\mathrm{id}_V$, and $r_s$ fixes pointwise every $v$ with $B(v,e_s)=0$. ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (2)).

[F8] One has $\rho(s)=r_s$ for every $s\in S$, and $V_+=\{\sum_{s\in S}\lambda_se_s:\lambda_s\in\mathbb R,\ \lambda_s\ge0\}$ is the cone generated by the $e_s$. ([[def-cg-canonical-reflection-homomorphism]] (1), (3)).

[F10] Functionals are linear, $f(\sum_sc_se_s)=\sum_sc_sf(e_s)$, and the dual space carries pointwise addition and scalar multiplication. ([[def-algebraic-dual-and-linear-functional]]).

[F11] Induction principle: a property of natural numbers that holds for $0$ and is inherited from $n$ to $n+1$ holds for every natural number. ([[thm-induction-principle]]).

[F12] The cardinality $|N|$ of a finite set $N$ is a natural number, and $|N|=0$ if and only if $N=\emptyset$. ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct, with induction on the number of negative roots.

1.1 Let $f\in U$ and let $w\in W$ satisfy $g:=w\cdot f\in C$; such a $w$ exists because $U=\bigcup_{u\in W}uC$. For $\alpha\in\operatorname{Neg}(f)$, the dual action gives $g(\rho(w)\alpha)=f(\alpha)<0$. Since $g$ is nonnegative on $V_+$ and $\rho(w)\alpha$ is a signed root, this forces $\rho(w)\alpha\in\Phi_-$, hence $\alpha\in N(w)$. Thus $\operatorname{Neg}(f)\subseteq N(w)$ and $|\operatorname{Neg}(f)|\le|N(w)|=\ell(w)$, proving the forward implication of (1) and all of (5). [F1, F2, F4, F5, F8, F10, algebra]

1.2 For every $f\in V^*$ one has $\operatorname{Neg}(f)=\emptyset$ if and only if $f\in C$. If $f\in C$ and $\alpha\in\Phi_+$, write $\alpha=\sum_sc_se_s$ with $c_s\ge0$; then $f(\alpha)=\sum_sc_sf(e_s)\ge0$, so no positive root is negative at $f$ and $\operatorname{Neg}(f)=\emptyset$. Conversely, if $\operatorname{Neg}(f)=\emptyset$ then $f(e_s)\ge0$ for every $s$, because $e_s\in\Phi_+$ and $f(e_s)<0$ would put $e_s$ into $\operatorname{Neg}(f)$; hence $f\in C$. This is clause (2). [F1, F2, F8, F10, algebra]

2.1 Let $N:=\operatorname{Neg}(f)$ be finite and nonempty, with $n:=|N|$, and let $f\notin C$, so that $N\ne\emptyset$ by step 1.2. Since $N\subseteq V_+\setminus\{0\}$, an element $\alpha=\sum_sc_se_s$ of $N$ has all coefficients $\ge0$ and some coefficient $>0$, and the strict inequality $f(\alpha)=\sum_sc_sf(e_s)<0$ forces $f(e_s)<0$ for some $s\in S$; for that $s$ one has $e_s\in\Phi_+$ and $e_s\in N$. This is the existence clause of (3). [step 1.2, F2, F8, F10, algebra]

3.1 Keep $N$, $f$ and $s$ from step 2.1, so that $e_s\in N$ and $f(e_s)<0$, and let $\beta\in\Phi_+$. Because $\rho(s)=r_s$ is an involution, the dual action gives $(s\cdot f)(\beta)=f(r_s\beta)$. For $\beta=e_s$ this is $f(r_se_s)=f(-e_s)=-f(e_s)>0$, so $e_s\notin\operatorname{Neg}(s\cdot f)$. For $\beta\ne e_s$ the reflection $r_s$ permutes $\Phi_+\setminus\{e_s\}$, so $r_s\beta\in\Phi_+\setminus\{e_s\}$, and $\beta\in\operatorname{Neg}(s\cdot f)$ if and only if $f(r_s\beta)<0$, that is if and only if $r_s\beta\in N\setminus\{e_s\}$; since $\beta\mapsto r_s\beta$ is a bijection of $\Phi_+\setminus\{e_s\}$ onto itself, this gives $\operatorname{Neg}(s\cdot f)=r_s(N\setminus\{e_s\})$ and $|\operatorname{Neg}(s\cdot f)|=|N\setminus\{e_s\}|=n-1$. This is the reduction identity of (3). [step 2.1, F1, F2, F3, F7, F8, algebra]

4.1 Claim: every $f\in V^*$ with $\operatorname{Neg}(f)$ finite lies in $U$. Induct on the natural number $n=|\operatorname{Neg}(f)|$. For $n=0$ step 1.2 gives $f\in C\subseteq U$. For $n\ge1$ one has $f\notin C$ by step 1.2, so step 2.1 supplies $s\in S$ with $e_s\in N$, and step 3.1 gives $|\operatorname{Neg}(s\cdot f)|=n-1$, so by the induction hypothesis $s\cdot f\in U$, say $s\cdot f=u\cdot g$ with $g\in C$; then $f=s\cdot(s\cdot f)=(su)\cdot g\in U$ because $w'U=U$ for every $w'\in W$. Iterating the reduction step decreases the size of the negative-root set by exactly one each time and stops precisely when that set is empty, which by step 1.2 is exactly when the current element lies in $C$; hence after exactly $n=|\operatorname{Neg}(f)|$ steps one reaches $w\in W$ with $w\cdot f\in C$. This proves the converse direction of (1) and the iteration clause of (3). [step 1.2, step 2.1, step 3.1, F1, F11, F12, algebra]

5.1 For $\lambda>0$ one has $\operatorname{Neg}(\lambda f)=\operatorname{Neg}(f)$, since $(\lambda f)(\alpha)=\lambda f(\alpha)$ and $\lambda>0$; also $\operatorname{Neg}(0)=\emptyset$, because $0(\alpha)=0$ is not $<0$. For $t\in[0,1]$, if $\alpha\in\operatorname{Neg}((1-t)f+tg)$ then $(1-t)f(\alpha)+tg(\alpha)<0$, which forces $f(\alpha)<0$ or $g(\alpha)<0$, since both coefficients are $\ge0$; hence $\operatorname{Neg}((1-t)f+tg)\subseteq\operatorname{Neg}(f)\cup\operatorname{Neg}(g)$. By the criterion of steps 1.1 and 4.1, every $f\in U$ satisfies $\lambda f\in U$ for all $\lambda\ge0$ (the case $\lambda=0$ is $0\in C\subseteq U$), and $(1-t)f+tg\in U$ for all $f,g\in U$ and $t\in[0,1]$, endpoints $t=0$ and $t=1$ included. This is (4). [step 1.1, step 4.1, F1, F10, algebra]

6.1 No Choice is used: the induction is finite, and each reduction instantiates a single simple reflection with negative coordinate. Steps 1.1–5.1 establish all five clauses. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
