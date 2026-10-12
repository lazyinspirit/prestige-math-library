---
id: lem-whitney-stratifications-admit-compatible-control-data
kind: lemma
title: Whitney stratifications admit compatible control data
status: draft
origin: session
deps: [def-finite-complex-algebraic-whitney-stratification-and-control-data, lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions, lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts, thm-euclidean-tubular-neighbourhood-theorem, thm-smooth-partitions-of-unity-exist-on-manifolds, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: John Mather, Notes on topological stability
      url: https://doi.org/10.1090/S0273-0979-2012-01383-6
---

## Statement

Assume AC. Let $W\subseteq\mathbb R^N$ have a finite smooth Whitney (a),(b) frontier stratification by locally closed embedded strata. There are tube control data $(T_S,\pi_S,\rho_S)$, with $\rho_S$ a squared bundle radius, such that incident overlap compositions are defined and satisfy $\pi_R\pi_S=\pi_R$, $\rho_R\pi_S=\rho_R$ for $R<S$. Incomparable strata have disjoint tubes, $(\pi_R,\rho_R)$ is a submersion on incident upper strata, and the tube data have local properness over compact lower-stratum slices. If a smooth ambient map $f$ is a submersion on every stratum, the tubes can additionally satisfy $f\pi_S=f$. The statement is about compatible data; continuous controlled flows are a separate construction.

## Facts & Assumptions

**Given:** AC, the finite locally closed Whitney stratification of $W$, and optionally a smooth ambient $f$ submersive on every stratum.

[F1] Ordinary Euclidean tubes exist ([[thm-euclidean-tubular-neighbourhood-theorem]]), and their radius/projection pairs are submersive on incident Whitney strata after shrinking ([[lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts]]).

[F2] A tube retraction of a new stratum can preserve a finite locally active chain of submersions on prescribed closed base subsets, with arbitrary positive radius and displacement bounds ([[lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions]]).

[F3] Smooth locally finite partitions give positive smooth minorants of locally positive size bounds and smooth functions supported on an open set and positive on a closed subset of that open set ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]): cover the closed subset by relatively compact coordinate balls inside the open set, put positive bumps there, and sum a locally finite family.

[A1] AC supplies the countable-choice assumptions of [F1]–[F3] ([[def-axiom-of-choice]]).

## Proof

1.1 Induct on stratum dimension, retaining the actual tube maps on outer collars while shrinking their final tube domains. Give every tube map $E_R(r,v)$ the displacement bound $\|E_R(r,v)-r\|<\operatorname{dist}(r,\overline R\setminus R)/3$ whenever the frontier is nonempty, and cap displacement and radius by one. These are positive local bounds on the locally closed $R$ and may be enforced by [F2],[F3]. Consequently a convergent sequence of tube points whose base points tend to the frontier has the same frontier limit: the displacement tends to zero. In particular, a tube's smaller closed-radius band, intersected with a stratum of at least its dimension different from it, has relative closure inside the retained outer tube. If the base limit instead lies in $R$, this follows directly from the strict smaller radius and continuity; if it lies on the frontier, the point limit would lie in a strictly lower-dimensional stratum, which is impossible. [F1, F2, F3, A1, construct]

2.1 Tubes of incomparable strata can be made disjoint. Their ambient closures miss the other's stratum by the frontier axiom. Impose the additional positive displacement bound $\operatorname{dist}(r,\overline S)/3$ on a tube based at $r\in R$, and the symmetric bound on a tube based at $s\in S$. If a point belonged to both tubes, $\|r-s\|\le\|x-r\|+\|x-s\|<(\operatorname{dist}(r,\overline S)+\operatorname{dist}(s,\overline R))/3\le2\|r-s\|/3$, a contradiction. There are finitely many pairs; shrinking retains every previously established equation and submersion condition. Thus active lower-stratum controllers always form a chain. [F3, step 1.1, algebra]

3.1 Suppose the tubes of lower-dimensional strata have been constructed and consider a new stratum $S$. In the currently retained tube of $R<S$, choose three variable squared-radius bands with bounds $\epsilon_R$, $\epsilon_R/2$, $\epsilon_R/4$, where the outer bound is smaller than the actual parameter radius squared. Let $C_R$ be the closure in $S$ of the middle band intersected with $S$. By step 1.1, $C_R$ is relatively closed in $S$, contained in the outer tube, and the ambient closure $A_R$ of the inner band has $A_R\cap S\subseteq\operatorname{int}_S C_R$. The map $F_R=(\pi_R,\rho_R)$ is submersive on $S$ by induction. On an overlap with $R<T<S$, the old equations say $F_R=F_R|_T\circ\pi_T$, so the lower controllers factor through the maximal active $F_T$. The closed subsets $C_R$ have only chains of simultaneous active indices by step 2.1. Thus the hypotheses of [F2] hold. If $f$ is included, regard it as an additional everywhere active root controller: on lower tubes $f=f|_R\circ\pi_R$, and it is submersive on $S$ when no lower controller is active. [F2, step 1.1, step 2.1, construct]

4.1 Apply [F2] to obtain $E_S$ and $\pi_S$ preserving $F_R$ when its base point lies in $C_R$, and preserving $f$ in the optional case. We ensure that every point of the new tube lying in an inner $R$-band has its $S$-base in $C_R$. Choose by [F3] a smooth nonnegative $\psi_R$ supported in $\operatorname{int}_S C_R$ and positive on the relatively closed $A_R\cap S$. Then $b_R(s)=\operatorname{dist}(s,A_R)+\psi_R(s)$ is positive on $S$. Impose $\|E_S(s,v)-s\|<b_R(s)/2$ for every $R$. If $s\notin C_R$ and $E_S(s,v)\in A_R$, one instead has $\operatorname{dist}(s,A_R)\le\|E_S(s,v)-s\|<\operatorname{dist}(s,A_R)/2$, a contradiction. Thus $s\in C_R$ for every relevant overlap, where $F_R(E_S(s,v))=F_R(s)$. Both the radius and its variable base bound depend only on $F_R$, so membership in the inner $R$-band is also preserved by $\pi_S$. Now restrict every old final tube to its inner band. The compositions on actual tube intersections are defined, and $\pi_R\pi_S=\pi_R$, $\rho_R\pi_S=\rho_R$ hold there. Old equations remain true under this restriction. [F2, F3, step 3.1, algebra]

5.1 Set $\rho_S(E_S(s,v))=\|v\|^2$, using the Euclidean quotient-bundle norm. Its zero set is $S$. The new map need not be an ordinary nearest-point tube, but it is related to one by a smooth ambient diffeomorphism: identify the quotient bundle with the orthogonal normal bundle, take its ordinary normal-addition map $E_0$, shrink the parameter domain into its diffeomorphism domain, and put $\Phi=E_0E_S^{-1}$. This map fixes $S$, takes $\pi_S$ to the ordinary tube projection, and takes $\rho_S$ to ordinary squared normal distance. Whitney (a),(b) are preserved by a smooth ambient diffeomorphism: derivatives transform tangent limits, and the integral mean-value formula gives $\Phi(x_j)-\Phi(y_j)=D\Phi(y)(x_j-y_j)+o(\|x_j-y_j\|)$ for moving sequences tending to $y$, so secant limits transform by the same invertible differential. Apply [F1] to the transformed incident upper strata. Shrinking the new tube therefore makes $(\pi_S,\rho_S)$ submersive on every incident upper stratum; squaring the positive radius does not change rank. No prior control equality is lost. [F1, step 4.1, construct, algebra]

6.1 Complete the finite dimension induction. At every stage one may again impose step 2.1's incomparable-displacement bounds on the new tube and shrink the finitely many old tubes accordingly; the proved equations are retained, and preservation of the smaller old radius bands follows from preservation of their $F_R$ values. Each shrink leaves a positive radius at every base point, so every final tube is a neighborhood of its stratum. Local properness is explicit in the bundle model: over a compact base slice, a sufficiently small uniform closed fiber-radius ball is compact and lies inside the positive variable-radius domain; its image under the tube embedding is compact and contained in the tube. The optional root-controller construction yields $f\pi_S=f$ throughout each final tube. This proves the complete stated data, without supplying continuous stratified flows by assertion. [F1, F2, F3, A1, step 1.1, step 4.1, step 5.1] ∎

## Source and integrity note

The Mather DOI is provenance for the established theorem; its full proof text was not retrieved. The local construction here uses the separately supplied relative-tube proof, the Whitney normal-tube bound, explicit inner/middle/outer shrinking and the actual existing smooth partition/ODE suppliers. It remains a research draft needing independent mathematical review; no native acceptance is claimed.
