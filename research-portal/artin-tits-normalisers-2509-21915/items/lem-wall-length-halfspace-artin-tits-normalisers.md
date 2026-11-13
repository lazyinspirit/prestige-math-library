---
id: lem-wall-length-halfspace-artin-tits-normalisers
kind: lemma
title: Length additivity and the base-chamber half-space
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - def-separating-hyperplane-artin-tits-normalisers
  - thm-chamber-labelling-artin-tits-normalisers
  - prop-root-inversion-interface-artin-tits-prerequisites
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - math:thm-cg-root-length-criterion-and-faithfulness
  - math:thm-cg-root-inversion-formulas-and-strong-exchange
  - math:thm-hh-parabolic-minimal-representatives-and-length-additivity
  - def-chambers-walls-artin-tits-normalisers
  - math:thm-cg-parabolic-intersections-and-coset-factorization
dependency_roles:
  def-coxeter-data-artin-tits-normalisers: mathematical-premise
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  def-chamber-labels-artin-tits-normalisers: mathematical-premise
  def-simple-wall-crossing-artin-tits-normalisers: mathematical-premise
  def-separating-hyperplane-artin-tits-normalisers: mathematical-premise
  thm-chamber-labelling-artin-tits-normalisers: mathematical-premise
  prop-root-inversion-interface-artin-tits-prerequisites: mathematical-premise
  prop-finite-opposition-interface-artin-tits-prerequisites: mathematical-premise
  math:thm-cg-root-length-criterion-and-faithfulness: mathematical-premise
  math:thm-cg-root-inversion-formulas-and-strong-exchange: mathematical-premise
  math:thm-hh-parabolic-minimal-representatives-and-length-additivity: mathematical-premise
  def-chambers-walls-artin-tits-normalisers: mathematical-premise
  math:thm-cg-parabolic-intersections-and-coset-factorization: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 11, Lemma 3.20(2)
      statement: For adjacent $(x,I)$ and $\omega_{a,I}(x,I)$, length additivity
        $\ell(xv_{a,I})=\ell(x)+\ell(v_{a,I})$ is equivalent to the base chamber
        and $(x,I)$ lying in the same half-space of $H_{x\alpha_a}$.
      hypotheses: The article's Coxeter-system and relative-chamber conventions, with
        $a\notin I$ and $W_{[I,a]}$ finite.
      reading_limits: The frozen extracted statement was inspected for attribution. It
        is not used as a proof premise; the article's cited Proposition 1.42 was
        not independently read for this item.
dependency_level: 13
formulation_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - def-separating-hyperplane-artin-tits-normalisers
  - thm-chamber-labelling-artin-tits-normalisers
  - def-chambers-walls-artin-tits-normalisers
argument_deps:
  - def-coxeter-data-artin-tits-normalisers
  - def-coxeter-arrangement-artin-tits-normalisers
  - def-chamber-labels-artin-tits-normalisers
  - def-simple-wall-crossing-artin-tits-normalisers
  - def-separating-hyperplane-artin-tits-normalisers
  - thm-chamber-labelling-artin-tits-normalisers
  - prop-root-inversion-interface-artin-tits-prerequisites
  - prop-finite-opposition-interface-artin-tits-prerequisites
  - math:thm-cg-root-length-criterion-and-faithfulness
  - math:thm-cg-root-inversion-formulas-and-strong-exchange
  - math:thm-hh-parabolic-minimal-representatives-and-length-additivity
  - math:thm-cg-parabolic-intersections-and-coset-factorization
---

## Statement

Let $(W,S)$ be a finite-rank Coxeter system with simple generators $s_i$ and simple roots $\alpha_i$ indexed by $\Gamma_0$. Use its standard geometric representation, root signs, word length $\ell$, dual space $\Theta$, and contragredient action. For $L\subseteq\Gamma_0$, write $W_L=\langle s_i:i\in L\rangle$. Fix $J\subseteq\Gamma_0$ and a label $(x,I)\in\mathrm{Cham}(J)$, so $W_Jx=xW_I$ and $x$ has minimum length in $xW_I$. The label represents the relative chamber $xC_I$, where $C_I$ consists of dual vectors vanishing on $\alpha_i$ for $i\in I$ and positive on the other simple roots.

Choose $a\notin I$, let $D=[I,a]$ be the component containing $a$ of the diagram induced on $I\cup\{a\}$, and suppose $W_D$ is finite. Put $v_{a,I}=w_{D\setminus\{a\}}w_D$, using the longest elements of the indicated finite parabolics. Suppose the pair $\omega_{a,I}(x,I)$ is a label adjacent to $(x,I)$. Then $\ell(xv_{a,I})=\ell(x)+\ell(v_{a,I})$ if and only if the base chamber $C_J$ and $xC_I$ lie in the same open half-space of $H_{x\alpha_a}=\{f\in\Theta:f(x\alpha_a)=0\}$.

## Statement references

[[def-coxeter-data-artin-tits-normalisers]]

[[def-coxeter-arrangement-artin-tits-normalisers]]

[[def-chamber-labels-artin-tits-normalisers]]

[[def-simple-wall-crossing-artin-tits-normalisers]]

[[def-chambers-walls-artin-tits-normalisers]]

[[def-separating-hyperplane-artin-tits-normalisers]]

[[thm-chamber-labelling-artin-tits-normalisers]]

## Facts & Assumptions

[F1] Roots have exactly one sign, and for $N(w)=\{\beta\in\Phi^+:w\beta\in\Phi^-\}$ one has $|N(w)|=\ell(w)=\ell(w^{-1})$. [[prop-root-inversion-interface-artin-tits-prerequisites]]

[F2] A minimal representative $x$ of $xW_I$ satisfies $\ell(xs_i)>\ell(x)$ for every $i\in I$; the root-length criterion then gives $x\alpha_i\in\Phi^+$. [[math:thm-hh-parabolic-minimal-representatives-and-length-additivity]] [[math:thm-cg-root-length-criterion-and-faithfulness]]

[F3] For $Q=D$ and $Q=E=D\setminus\{a\}$, the standard subsystem has root set $\Phi_Q=\Phi\cap\operatorname{span}\{\alpha_i:i\in Q\}$ with the inherited signs, by part 2 of [[math:thm-cg-parabolic-intersections-and-coset-factorization]]. The longest elements $w_D,w_E$ are involutions and send their respective positive subsystem roots to negative roots. [[prop-finite-opposition-interface-artin-tits-prerequisites]]

[F4] The inversion roots of a reduced expression of an element of $W_D$ belong to $\Phi_D$; their number is its length. [[math:thm-hh-parabolic-minimal-representatives-and-length-additivity]] [[math:thm-cg-root-inversion-formulas-and-strong-exchange]]

[F5] The label $(x,I)$ represents $xC_I$ in the relative space $\Theta_J=\{f:f(\alpha_j)=0\text{ for }j\in J\}$, and the base label $(1,J)$ represents $C_J$. The dual action obeys $(xf)(\beta)=f(x^{-1}\beta)$. [[thm-chamber-labelling-artin-tits-normalisers]] [[def-coxeter-data-artin-tits-normalisers]]

## Proof
**Given:** The finite-rank Coxeter data, label, vertex $a$, finite component $D$, and adjacency in the Statement. Put $E=D\setminus\{a\}$ and $v=w_Ew_D$.


**Proof technique:** direct.

**Goal:** Prove the equivalence between length additivity and the stated same-half-space condition.

1.1 **Inversions of the crossing element.** Every generator indexed by $E$ changes only its own simple-root coordinate. Thus $w_E$ preserves the coefficient of $\alpha_a$. If $\beta\in\Phi_D^+$ has positive $\alpha_a$ coefficient, then $w_E\beta$ is a root with positive $\alpha_a$ coefficient and hence is positive by [F1]. If that coefficient is zero, [F3] identifies $\beta$ with a root of $\Phi_E^+$, and $w_E\beta$ is negative. Since $w_D$ exchanges the two signs in $\Phi_D$ and $v^{-1}=w_Dw_E$, it follows that $N(v^{-1})\cap\Phi_D=\Phi_D^+\setminus\Phi_E^+$. By [F4] all inversions of $v^{-1}$ lie in $\Phi_D$, so this is the entire inversion set. In particular $\alpha_a\in N(v^{-1})$. [F1, F3, F4, given]

2.1 **Length criterion.** For arbitrary $u,t\in W$, partitioning positive roots by the signs of $t^{-1}\beta$ and $u\beta$ gives $\ell(ut)=\ell(u)+\ell(t)-2|N(u)\cap N(t^{-1})|$. Indeed, the roots in the intersection are precisely the cancellations between inversions of $t$ and those of $u$, after the sign-preserving bijection induced by $t$ on the other sign classes; all sets involved are finite by [F1]. Consequently $\ell(xv)=\ell(x)+\ell(v)$ exactly when $x$ sends every root in $N(v^{-1})$ to a positive root. By [F2], $x\alpha_i$ is positive for $i\in E$. If $x\alpha_a$ is positive, every positive root supported on $D$ is a nonzero nonnegative combination of simple roots whose images are positive, so its image is positive. Conversely, $\alpha_a$ itself belongs to $N(v^{-1})$ by 1.1. Therefore length additivity is equivalent to $x\alpha_a\in\Phi^+$. [F1, F2, step 1.1]

3.1 **Translate to half-spaces.** For $f\in C_I$, the dual-action formula gives $(xf)(x\alpha_a)=f(\alpha_a)>0$. Hence the linear functional $g\mapsto g(x\alpha_a)$ is nonzero on $\Theta_J$, because $xC_I\subseteq\Theta_J$ by [F5]. Write $x\alpha_a$ in the simple-root basis. By [F1] its nonzero coefficients all have the same sign, and nonvanishing on $\Theta_J$ means at least one coefficient outside $J$ is nonzero. Every $g\in C_J$ vanishes on the $J$ coordinates and is strictly positive on the others, so $g(x\alpha_a)>0$ exactly when $x\alpha_a$ is positive, and is negative otherwise. Thus $C_J$ and $xC_I$ are in the same open half-space of $H_{x\alpha_a}$ exactly when $x\alpha_a$ is positive. Combining this with step 2.1 proves the assertion. [F1, F5, step 2.1, given] ∎

## Source notes

The article citation records attribution of the retained claim. The proof above uses the declared suppliers and does not invoke the article's claim as a premise.
