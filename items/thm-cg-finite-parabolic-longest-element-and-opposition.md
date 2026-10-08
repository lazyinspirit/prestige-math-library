---
id: thm-cg-finite-parabolic-longest-element-and-opposition
kind: theorem
title: "The longest element as the opposition of the chamber, and longest elements of finite parabolics"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [def-cg-canonical-reflection-homomorphism, def-cg-dual-chambers-and-reflection-hyperplanes, def-cg-finite-reflection-arrangement-and-spherical-chambers, def-cg-geometric-inversion-set, def-cg-real-coxeter-form-and-reflection, def-generated-subgroup, def-hh-coxeter-matrix-word-group-and-length, lem-cg-reflection-form-invariance-and-rank-two-orders, lem-cg-reflection-representation-descends-and-root-norms, thm-cg-finite-chamber-tiling-and-coset-face-identification, thm-cg-finite-type-positive-definite-criterion, thm-cg-root-inversion-formulas-and-strong-exchange, thm-cg-root-length-criterion-and-faithfulness, thm-cg-root-sign-and-simple-reflection-positivity, thm-hh-parabolic-minimal-representatives-and-length-additivity]
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (Princeton University Press 2008, first-edition author manuscript PDF)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Chapter 4, section 4.6 (Lemma 4.6.1 and Lemma 4.6.2 with proofs, printed pp. 51-53); Chapter 4, section 4.7 (printed pp. 53-54); Chapter 5, Example 5.2.7 and section 5.3 (printed pp. 66-68)"
    - title: "Jean Michel, Lectures on Coxeter groups (Beijing lecture notes, April-May 2014, author-hosted PDF)"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/cox.pdf"
      locator: "Section 4 (Proposition 4.6 on the longest element, printed pp. 5-6); section 5 (Lemma 5.1 and Proposition 5.4, printed pp. 6-9)"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Let $(W,S)$ be a Coxeter system with $S$ finite, length function $\ell$, canonical reflection
representation $\rho$ on $V$, form $B$, root system $\Phi=\Phi_+\sqcup\Phi_-$ and reflections
$T$ ([[def-hh-coxeter-matrix-word-group-and-length]],
[[def-cg-canonical-reflection-homomorphism]],
[[thm-cg-root-sign-and-simple-reflection-positivity]]), with inversion sets
$N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$
([[def-cg-geometric-inversion-set]]), and let $C$ and $C^\circ$ be the chamber and its
interior in $V^*$ ([[def-cg-dual-chambers-and-reflection-hyperplanes]]).

**(1) The opposition and the longest element of a finite Coxeter system.** Suppose $W$ is
finite. Then:

(i) there is a unique $w_0\in W$ with $w_0\cdot C=-C$; equivalently $w_0$ is the unique
element of $W$ with $N(w_0)=\Phi_+$ (equivalently with $N(w_0^{-1})=\Phi_+$);

(ii) $\ell(w_0)=|N(w_0)|=|\Phi_+|=|T|$, and $\rho(w_0)\Phi_+=\Phi_-$;

(iii) $\ell(w_0w)=\ell(w_0)-\ell(w)$ and $\ell(ww_0)=\ell(w_0)-\ell(w)$ for every $w\in W$;
consequently $\ell(w_0)=\max\{\ell(w):w\in W\}$ and $w_0$ is the unique element of that
length (the element of longest length);

(iv) $w_0^2=1$;

(v) $w_0Sw_0^{-1}=S$, and there is a permutation $\sigma$ of $S$ with
$\rho(w_0)e_s=-e_{\sigma(s)}$, equivalently $w_0sw_0=\sigma(s)$, for every $s\in S$.

**(2) Longest elements of finite parabolics.** Let $I\subseteq S$ with
$W_I=\langle s:s\in I\rangle$ finite ([[def-generated-subgroup]]); this holds automatically
for every $I\subseteq S$ when $W$ is finite. Then $W_I$ has a unique longest element
$w_0(I)$: it is the unique $u\in W_I$ with $\ell(uw)=\ell(u)-\ell(w)$ for every $w\in W_I$,
and it satisfies $w_0(I)^2=1$, $\ell(w_0(I))=\max\{\ell(w):w\in W_I\}$,
$\ell(w_0(I)w)=\ell(w_0(I))-\ell(w)$ and $\ell(ww_0(I))=\ell(w_0(I))-\ell(w)$ for every
$w\in W_I$, and $w_0(I)Iw_0(I)^{-1}=I$. With the parabolic subsystem
$V_I:=\mathrm{span}\{e_s:s\in I\}$, $V_I^+:=\{\sum_{s\in I}\lambda_se_s:\lambda_s\ge0\}$ and
$\Phi_I:=\{\rho(u)e_s:u\in W_I,\ s\in I\}$, one has
$\ell(w_0(I))=|\Phi_I\cap V_I^+|$.

## Facts & Assumptions

**Given:** A Coxeter system $(W,S)$ with $S$ finite, the space $V=\mathbb R^S$ with Coxeter form $B$, the canonical reflection homomorphism $\rho$, root system $\Phi=\Phi_+\sqcup\Phi_-$, reflections $T$, length $\ell$, inversion sets $N(w)$, chamber $C$ and its interior $C^\circ$ in $V^*$. For part (1), $W$ is finite, so the identification $V\cong V^*$ of [[def-cg-finite-reflection-arrangement-and-spherical-chambers]] is available; for part (2) only the subsystem is identified with its dual after its finiteness is assumed.

[F1] Structure and elementary length facts: $B$ is symmetric bilinear with $B(e_s,e_s)=1$ and $B(e_s,e_t)=-\cos(\pi/m(s,t))$ (or $-1$ for $m(s,t)=\infty$), every $\rho(w)$ preserves $B$, the reflection formula is $r_a(v)=v-\frac{2B(v,a)}{B(a,a)}a$ for $B(a,a)\ne0$ ([[def-cg-real-coxeter-form-and-reflection]], [[lem-cg-reflection-form-invariance-and-rank-two-orders]], clauses (1)-(2), [[lem-cg-reflection-representation-descends-and-root-norms]]); the length is the least word length, so $\ell(x)=0$ if and only if $x=1$, reversing a word gives $\ell(w^{-1})=\ell(w)$, and $\ell(x)=1$ means $x\in S$ ([[def-hh-coxeter-matrix-word-group-and-length]]); and every root satisfies $B(\alpha,\alpha)=1$ ([[lem-cg-reflection-representation-descends-and-root-norms]], clause (3)).

[F2] Tiling of the finite chamber system: $V\setminus\bigcup_{\alpha\in\Phi}H_\alpha$ has the sets $wC^\circ$ $(w\in W)$ as its connected components, the map $w\mapsto wC^\circ$ is a bijection from $W$ onto the set of chambers and $\overline{wC^\circ}=wC$ ([[thm-cg-finite-chamber-tiling-and-coset-face-identification]], clause (1)).

[F3] Root signs: $\Phi=\Phi_+\sqcup\Phi_-$, $\Phi_-=-\Phi_+$ and $e_s\in\Phi_+$ for every $s$; moreover for $\alpha\in\Phi$ one has $\alpha\in\Phi_+$ if and only if $f(\alpha)>0$ for every $f\in C^\circ$, and $\alpha\in\Phi_-$ if and only if $f(\alpha)<0$ for every $f\in C^\circ$ ([[thm-cg-root-sign-and-simple-reflection-positivity]], clauses (2)-(3)).

[F4] Inversions and the root-reflection dictionary: $|N(w)|=\ell(w)$ for every $w$, the map $\Phi_+\to T$, $\alpha\mapsto t_\alpha$, is a bijection, and for $\alpha,\beta\in\Phi$ one has $t_\alpha=t_\beta$ if and only if $\alpha=\pm\beta$ ([[thm-cg-root-inversion-formulas-and-strong-exchange]], clauses (1)-(2)).

[F5] Conjugation: for $w\in W$, $s\in S$ and $\alpha\in\Phi$ one has $\rho(wsw^{-1})=r_{\rho(w)e_s}$ and $\rho(t_\alpha)=r_\alpha$ ([[lem-cg-reflection-representation-descends-and-root-norms]], clause (4), [[thm-cg-root-inversion-formulas-and-strong-exchange]], clause (1)(ii)).

[F6] Standard parabolics: for $I\subseteq S$ the pair $(W_I,I)$ is a Coxeter system, its intrinsic length function agrees on $W_I$ with the restriction of $\ell$, and $W_I\cap S=I$ ([[thm-hh-parabolic-minimal-representatives-and-length-additivity]], clauses (1)-(2)).

[F7] Universal property of the presented group: any assignment of generators satisfying the Coxeter relations extends uniquely to a homomorphism ([[def-hh-coxeter-matrix-word-group-and-length]]).

## Proof

**Proof technique:** direct; (1) is proved for a general finite Coxeter system from the tiling, the root signs and the inversion dictionary, and (2) instantiates it to the parabolic subsystem.

1.1 Since $\Phi_-=-\Phi_+$ [F3], the arrangement $\bigcup_{\alpha\in\Phi}H_\alpha$ is invariant under the antipodal map $v\mapsto-v$ (as $H_{-\alpha}=H_\alpha$), and that map is a homeomorphism permuting the connected components of the complement; hence $-C^\circ$ is a connected component of $V\setminus\bigcup_\alpha H_\alpha$, and by the tiling [F2] there is a unique $w_0\in W$ with $-C^\circ=w_0C^\circ$; taking closures with [F2] gives $-C=w_0C$. [F2, F3, algebra]

1.2 By [F1] the length is the least word length, so $\ell(x)=0$ if and only if $x=1$; reversing a word gives $\ell(w^{-1})=\ell(w)$ for every $w$; and $\ell(x)=1$ means that $x$ is represented by a one-letter word, that is, $x\in S$. [F1, algebra]

2.1 For $\alpha\in\Phi$ one has $\alpha\in\Phi_+$ exactly when $f(\alpha)>0$ for every $f\in C^\circ$, and $\alpha\in\Phi_-$ exactly when $f(\alpha)<0$ for every $f\in C^\circ$ [F3]; as $f$ runs over $C^\circ$ the points $w_0\cdot f$ run over $-C^\circ$, and $(-g)(\alpha)=-g(\alpha)$, so $\alpha\in\Phi_+$ is equivalent to $f(\rho(w_0)^{-1}\alpha)<0$ for every $f\in C^\circ$, that is, to $\rho(w_0)^{-1}\alpha\in\Phi_-$; hence $\rho(w_0)^{-1}\Phi_+=\Phi_-$, equivalently $\rho(w_0)\Phi_+=\Phi_-$, which is the equality $N(w_0)=\Phi_+$, and $\rho(w_0)^{-1}\Phi_+=\Phi_-$ is $N(w_0^{-1})=\Phi_+$. [step 1.1, F3, algebra]

3.1 If $w'\in W$ satisfies $w'C=-C$, then $w'C^\circ=\operatorname{int}(w'C)=\operatorname{int}(-C)=-C^\circ=w_0C^\circ$, so $w'=w_0$ by the injectivity of $w\mapsto wC^\circ$ in [F2]; together with step 1.1 this proves uniqueness of the opposite chamber. If $v\in W$ satisfies $N(v)=\Phi_+$ or $N(v^{-1})=\Phi_+$, then $\rho(v)^{-1}\Phi_+=\Phi_-$: in the first case $\rho(v)\Phi_+\subseteq\Phi_-$ is equality because $\Phi$ is finite and the two sign sets have equal cardinality, and negation gives $\rho(v)\Phi_-=\Phi_+$; in the second case this is the inversion-set definition. For $f\in C^\circ$ and $s\in S$, [F3] now gives $(v\cdot f)(e_s)=f(\rho(v)^{-1}e_s)<0$, so $vC^\circ\subseteq-C^\circ$. Both sets are connected components by [F2] and step 1.1, so they are equal and $v=w_0$ by [F2]. Conversely step 2.1 gives both full inversion sets for $w_0$, proving all equivalences in (i). [step 1.1, step 2.1, F2, F3, algebra]

3.2 By [F4] one has $\ell(w_0)=|N(w_0)|=|\Phi_+|=|T|$, using step 2.1 and the bijection $\Phi_+\to T$; and for every $w\in W$ the set $N(w_0w)=\{\alpha\in\Phi_+:\rho(w_0)\rho(w)\alpha\in\Phi_-\}$ equals $\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_+\}=\Phi_+\setminus N(w)$, because $\rho(w_0)\beta\in\Phi_-$ if and only if $\beta\in\rho(w_0)^{-1}\Phi_-=\Phi_+$ by step 2.1; hence $\ell(w_0w)=|N(w_0w)|=|\Phi_+|-|N(w)|=\ell(w_0)-\ell(w)$ by [F4]. This proves (ii) and the first identity of (iii). [step 1.2, step 2.1, F4, algebra]

4.1 Taking $w=w_0$ in step 3.2 gives $\ell(w_0^2)=\ell(w_0)-\ell(w_0)=0$, so $w_0^2=1$ by step 1.2; this is (iv). [step 1.2, step 3.2, F1, algebra]

4.2 By step 3.2, $0\le\ell(w_0w)=\ell(w_0)-\ell(w)$ for every $w$, so $\ell(w)\le\ell(w_0)$ and $w_0$ has maximal length; if $\ell(v)=\ell(w_0)$ then $\ell(w_0v^{-1})=\ell(w_0)-\ell(v^{-1})=\ell(w_0)-\ell(v)=0$ by steps 3.2 and 1.2, so $w_0v^{-1}=1$ by step 1.2 and $v=w_0$; hence $\ell(w_0)=\max\{\ell(w):w\in W\}$ and $w_0$ is the unique element of that length. [step 1.2, step 3.2, F1, algebra]

5.1 For every $w\in W$ the identity of step 3.2 applied to $w^{-1}$ gives $\ell(w_0w^{-1})=\ell(w_0)-\ell(w^{-1})$, and inversion invariance together with $w_0^{-1}=w_0$ from step 4.1 gives $\ell(ww_0)=\ell(w_0)-\ell(w)$ by step 1.2; this is the second identity of (iii). [step 1.2, step 3.2, step 4.1, F1, algebra]

6.1 For $s\in S$, step 5.1 with $w=sw_0$ gives $\ell(sw_0w_0)=\ell(w_0)-\ell(sw_0)$, that is, $\ell(s)=\ell(w_0)-\ell(sw_0)$ by step 4.1, so $\ell(sw_0)=\ell(w_0)-1$; then step 3.2 with $w=sw_0$ gives $\ell(w_0sw_0)=\ell(w_0)-\ell(sw_0)=1$, so $w_0sw_0=:s'\in S$ by step 1.2. Conjugation by $w_0$ therefore maps $S$ into $S$, and since $w_0^2=1$ and $S$ is finite it maps $S$ bijectively onto $S$, that is, $w_0Sw_0=w_0Sw_0^{-1}=S$. [step 1.2, step 3.2, step 5.1, step 4.1, F1, algebra]

7.1 For $s\in S$ let $\sigma(s):=s'$, so that $w_0sw_0=\sigma(s)$ by step 6.1; applying the homomorphism $\rho$ and the conjugation formula [F5] gives $r_{\rho(w_0)e_s}=\rho(w_0)\rho(s)\rho(w_0)^{-1}=\rho(\sigma(s))=r_{e_{\sigma(s)}}$, that is, $t_{\rho(w_0)e_s}=t_{e_{\sigma(s)}}$ in the dictionary [F4]; since $t_\alpha=t_\beta$ for $\alpha,\beta\in\Phi$ only when $\alpha=\pm\beta$, one has $\rho(w_0)e_s=\pm e_{\sigma(s)}$, and the sign is negative because $\rho(w_0)e_s\in\Phi_-$ by step 2.1 while $e_{\sigma(s)}\in\Phi_+$ [F3]; hence $\rho(w_0)e_s=-e_{\sigma(s)}$ for every $s\in S$, and $\sigma$ is a permutation of $S$. This completes (v). [step 2.1, step 6.1, F3, F4, F5, algebra]

8.1 Let $I\subseteq S$ with $W_I$ finite. By [F6] the pair $(W_I,I)$ is a Coxeter system, its intrinsic length function is the restriction of $\ell$, and $W_I\cap S=I$; moreover $I$ is finite. The canonical reflection representation of $(W_I,I)$ (on $V_I=\mathbb R^I$ with the restricted Coxeter form $B_I=B|_{V_I\times V_I}$) is the restriction of $\rho$ to $V_I$: each $s\in I$ has $\rho(s)e_t=e_t-2B(e_t,e_s)e_s\in V_I$ for $t\in I$ and $\rho(s)v=v$ for $v\in V_I^\perp$, so $\rho$ preserves $V_I$ and acts there by the reflection of $B_I$ with normal $e_s$, and both maps are homomorphisms on the presented group $(W_I,I)$ agreeing on generators, hence equal by the universal property [F7]. Therefore the argument of steps 1.1-7.1, which used only the tiling [F2], the root signs [F3], the inversion dictionary [F4], the conjugation formula [F5] and the length facts [F1] - all available verbatim for the Coxeter system $(W_I,I)$ with its intrinsic length - applies to $(W_I,I)$: there is a unique $w_0(I)\in W_I$ with $N_I(w_0(I))=(\Phi_I)_+$, it satisfies $w_0(I)^2=1$, it has maximal length in $W_I$ and is the unique element with $\ell(w_0(I)w)=\ell(w_0(I))-\ell(w)$ and $\ell(ww_0(I))=\ell(w_0(I))-\ell(w)$ for all $w\in W_I$, and $w_0(I)Iw_0(I)^{-1}=I$. To verify the asserted uniqueness for the length-complement characterization, if $u\in W_I$ satisfies $\ell(uw)=\ell(u)-\ell(w)$ for every $w\in W_I$, put $w=w_0(I)$ and $L:=\ell(w_0(I))$. Then $0\le\ell(uw_0(I))=\ell(u)-L$, while maximality gives $\ell(u)\le L$, so $\ell(u)=L$ and uniqueness of the maximal-length element gives $u=w_0(I)$. [step 7.1, F1, F2, F3, F4, F5, F6, F7, algebra]

9.1 By the instance (ii) of the argument in step 8.1 one has $\ell(w_0(I))=|(\Phi_I)_+|$, where $(\Phi_I)_+$ is the positive root system of the subsystem; by the intrinsic form of [F3] applied to $(W_I,I)$ (whose dual chamber is $\{g\in V_I^*:g(e_s)\ge0\text{ for }s\in I\}$) a root $\alpha\in\Phi_I\subseteq V_I$ is positive exactly when it lies in the subsystem's positive cone $V_I\cap V_+$, which is $V_I^+=\{\sum_{s\in I}\lambda_se_s:\lambda_s\ge0\}$; hence $(\Phi_I)_+=\Phi_I\cap V_I^+$ and $\ell(w_0(I))=|\Phi_I\cap V_I^+|$, as asserted in (2). [step 8.1, F3, F6, algebra] ∎
