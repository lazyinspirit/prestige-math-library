---
id: lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate
kind: lemma
title: A nonsingular formal arc on a normal Noetherian surface becomes regular
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-cm-local-codimension-and-regular-quotient-ext-concentration
- lem-local-normal-surface-modification-dimension-and-projective-cohomology
- lem-normal-domain-implies-s-two
- thm-affine-blowup-standard-charts
- thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
- thm-nakayama-lemma
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: The Stacks Project, Resolution of Surfaces, Lemma 54.10.2, full generator/exponent termination argument
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
---

## Statement

Assume AC and DC. Let $A$ be a normal Noetherian local domain of dimension two with a surjection onto a complete DVR $V$ inducing its residue-field identification. The successive point blowups along this nonsingular arc become regular at the arc centre after finitely many steps.

## Facts & Assumptions

**Given:** A normal Noetherian local domain $A$ of dimension two with a surjection onto a complete DVR $V$ inducing the residue-field identification, and the successive point blowups along this nonsingular arc.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-cm-local-codimension-and-regular-quotient-ext-concentration.* Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the resolution and Ext suppliers below ([[def-axiom-of-choice]], [[def-dependent-choice]]). Let $(R,\mathfrak m)$ be a Noetherian Cohen--Macaulay local ring of dimension $D$. ([[lem-cm-local-codimension-and-regular-quotient-ext-concentration]])

[F4] *lem-local-normal-surface-modification-dimension-and-projective-cohomology.* Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

[F5] *lem-normal-domain-implies-s-two.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Every commutative Noetherian integrally closed domain satisfies $(S_2)$. ([[lem-normal-domain-implies-s-two]])

[F6] *thm-affine-blowup-standard-charts.* Assume the Axiom of Choice as inherited from the Proj construction. Let $A$ be a ring, $I=(f_0,\dots,f_r)\subseteq A$, $S=R(I)=\bigoplus I^nt^n$ and $B_i=A[I/f_i]=\bigl(S[(f_it)^{-1}]\bigr)_0$. The standard opens $U_i=D_+(f_it)=\operatorname{Spec}B_i$ cover $\operatorname{Bl}_I\operatorname{Spec}A$. Put $u_{ij}=(f_jt)/(f_it)$ in $B_i$. ([[thm-affine-blowup-standard-charts]])

[F7] *thm-height-one-localisation-of-normal-noetherian-domain-is-dvr.* Let $R$ be a Noetherian integrally closed domain, and let $\mathfrak p$ be a prime ideal of height $1$. Then the localisation $R_{\mathfrak p}$ is a discrete valuation ring. ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]])

[F8] *thm-nakayama-lemma.* Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$. ([[thm-nakayama-lemma]])

## Proof

1.1 Let $P=\ker(A\to V)$ and let $t\mapsto$ a uniformizer of $V$; minimally generate $P$ by $u_2,\dots,u_r$, so that $\mathfrak m=(t,u_2,\dots,u_r)$. The codimension formula for the Cohen--Macaulay local ring $A$ makes $P$ of height one, so $A_P$ is a discrete valuation ring; a generator of its maximal ideal occurs among the $u_i$, and after relabelling we may take it to be $u_2$. [F3, F5, F7, given]

2.1 The finite module $P/(P^2+(u_2))$ vanishes at $P$ and is a module over $A/P=V$; being torsion over the discrete valuation ring, it is killed by a power of $t$, so for every $i>2$ there are $n_i\ge0$ and $a_i\in A$ with $t^{n_i}u_i-a_iu_2\in P^2$. [F7, step 1.1]

3.1 If some $n_i=0$, the relation expresses $u_i$ in terms of $u_2$ and $P^2$, so Nakayama removes $u_i$ from the kernel generators. If some $a_i$ is a unit, it instead removes $u_2$; the relation at $A_P$, where $t$ is a unit, then shows that $u_i$ can serve as the new uniformizer. Otherwise, when $a_i\in P$ absorb $a_iu_2$ into $P^2$. For $a_i\notin P$, write its residue in $V$ as a unit times $t^{m_i}$, with $m_i>0$, and lift that unit to $A$; the difference contributes to $P^2$. The relations thus have the form $t^{n_i}u_i\in P^2$ or $t^{n_i}u_i-c_it^{m_i}u_2\in P^2$, with $n_i,m_i>0$ and $c_i$ a unit. In the $t$-chart set $v_i=u_i/t$ and divide by $t^2$: the exponents become $n_i-1,m_i-1$, and the right sides lie in $(v_2,\ldots,v_r)^2$. At the arc centre the induced map to $V$ has kernel generated by these $v_i$, with the same uniformizer $t$. [F6, F7, F8, step 2.1]

4.1 Termination: if the minimal number of generators of the kernel drops, restart with that smaller number. Each successor local ring is Noetherian and maps onto $V$ with the same residue field. Its kernel is a nonzero, nonmaximal prime of its two-dimensional local domain, hence has height one, and its localization is the original DVR $A_P$, since $t$ is outside $P$ and the blowups are isomorphisms there; otherwise the nonnegative exponents decrease at each step until one becomes zero, which forces a generator drop by Nakayama's lemma. Hence there are only finitely many drops and the process terminates. [F4, F7, F8, step 3.1]

5.1 Every arc centre is a closed point of the integral modification of $\operatorname{Spec}A$, since its residue field is the original residue field. By [F4] its local dimension is two. At termination the kernel is principal and the maximal ideal of the local ring at the arc centre is generated by two elements; that local ring has dimension two by the dimension computation for local normal surface modifications, hence is regular, so the blowups become regular at the arc centre after finitely many steps. The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F4, step 4.1] ∎

## Remarks

- The decreasing invariant is the pair consisting of the minimal number of generators and the exponents n_i, m_i; each drop strictly reduces it.
- Neither completeness nor equicharacteristic of $A$ is needed; the complete DVR $V$ is part of the arc data.
- The final step uses dimension two to convert a two-generator maximal ideal into regularity.
