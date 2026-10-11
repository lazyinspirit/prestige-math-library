---
id: lem-whitney-stratifications-admit-compatible-control-data
kind: lemma
title: "Whitney stratifications admit compatible control data"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-axiom-of-choice,
       def-finite-complex-algebraic-whitney-stratification-and-control-data,
       lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions,
       lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-euclidean-tubular-neighbourhood-theorem,
       thm-smooth-partitions-of-unity-exist-on-manifolds]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "John Mather, Notes on Topological Stability (1970)"
      url: "https://doi.org/10.1090/S0273-0979-2012-01383-6"
      locator: "Sections 5-7 (compatible tube control data)"
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "Section 8.7 (Thom-Mather control-data triples)"
---

## Statement

Assume AC. Let $W\subseteq\mathbb R^N$ be locally closed and have a finite smooth Whitney (a),(b)
frontier stratification by locally closed embedded strata. There are tube
control data $(T_S,\pi_S,\rho_S)$, with $\rho_S$ a squared bundle radius, such
that incident overlap compositions are defined and satisfy
$\pi_R\pi_S=\pi_R$, $\rho_R\pi_S=\rho_R$ for $R<S$. Incomparable strata have
disjoint tubes, $(\pi_R,\rho_R)$ is a submersion on incident upper strata, and
the tube data have local properness over compact lower-stratum slices. If a
smooth ambient map $f$ is a submersion on every stratum, the tubes can
additionally satisfy $f\pi_S=f$. The statement is about compatible data;
continuous controlled flows are a separate construction.

## Facts & Assumptions

**Given:** AC, a locally closed subset $W\subseteq\mathbb R^N$ with a finite Whitney (a),(b) frontier stratification by locally closed strata, and optionally a smooth ambient $f$ that is a submersion on every stratum.

[F1] Ordinary Euclidean tubes exist, and after shrinking their projection/radius pairs are submersive on incident Whitney strata ([[thm-euclidean-tubular-neighbourhood-theorem]], [[lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts]]).

[F2] Given an embedded smooth manifold $S$, finitely many submersions that remain submersive on $S$, relatively closed constraint subsets, and the local chain condition, there is a tube retraction whose tube map is a smooth embedding from a variable-radius normal domain, preserving each active submersion over its constraint set, with size bounds locally bounded below by positive constants ([[lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions]]).

[F3] Smooth locally finite partitions of unity give positive smooth minorants of locally positive bounds, and smooth nonnegative functions supported in an open set and positive on a closed subset of it ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[A1] AC implies $\mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]), supplying the countable-choice hypotheses of [F1]-[F3]; this is the full choice use ([[def-axiom-of-choice]], [[def-finite-complex-algebraic-whitney-stratification-and-control-data]] for the definition of tube control data).

## Proof

**Proof technique:** direct.

1.1 Induct on stratum dimension, retaining the already constructed tube maps on outer collars while shrinking their final tube domains. Give each tube map $E_R(r,v)$ the displacement bound $\|E_R(r,v)-r\|<\operatorname{dist}(r,\overline R\setminus R)/3$ when the frontier is nonempty, and cap displacement and radius by one; these are positive local bounds on the locally closed $R$ and can be enforced by [F2] and [F3]. Consequently a convergent sequence of tube points whose base points tend to the frontier has the same frontier limit, since the displacement tends to zero. In particular, the smaller closed-radius band of a tube, intersected with a stratum different from it, has relative closure inside the retained outer tube: if the base limit lies in $R$ this follows from the strict radius inequality and continuity, and if it lies on the frontier then the point limit would lie in a strictly lower-dimensional stratum, which is impossible. [F1, F2, F3, A1, construct]

2.1 Make the tubes of incomparable strata disjoint. Their ambient closures miss the other stratum by the frontier axiom $\overline R=\coprod_{Q\le R}Q$. Impose on a tube based at $r\in R$ the displacement bound $\operatorname{dist}(r,\overline S)/3$ and the symmetric bound for a tube based at $s\in S$. If a point $x$ lay in both tubes, then $\|r-s\|\le\|x-r\|+\|x-s\|<(\operatorname{dist}(r,\overline S)+\operatorname{dist}(s,\overline R))/3\le2\|r-s\|/3$, a contradiction. There are finitely many pairs, and shrinking retains every previously established identity and submersion property. Hence the active lower-stratum controllers at any point of a stratum form a chain. [F3, step 1.1, algebra]

3.1 Suppose all tubes of lower-dimensional strata are constructed, and consider a new stratum $S$. Inside the currently retained tube of each $R<S$ choose three variable squared-radius bands with bounds $\epsilon_R>\epsilon_R/2>\epsilon_R/4$, the outer bound smaller than the actual parameter radius squared. Let $C_R$ be the closure in $S$ of the middle band intersected with $S$; by step 1.1 it is relatively closed in $S$, contained in the outer tube, and the ambient closure $A_R$ of the inner band satisfies $A_R\cap S\subseteq\operatorname{int}_S C_R$. The map $F_R=(\pi_R,\rho_R)$ is submersive on $S$ by the induction hypothesis. On an overlap with $R<T<S$ the old identities give $F_R=F_R|_T\circ F_T$ wherever the compositions are defined, so every active lower controller factors through the maximal active one, and by step 2.1 the simultaneously active indices are totally ordered. Thus the chain hypothesis of [F2] holds. If the root map $f$ is present, treat it as an everywhere active controller: on lower tubes $f=f|_R\circ\pi_R$, and it is submersive on $S$ where no lower controller is active. [F2, step 1.1, step 2.1, construct]

4.1 Apply [F2] to the manifold $S$, the finitely many controllers $F_R$ with constraint sets $C_R$ (and $f$ if present), obtaining $E_S$ and $\pi_S$ that preserve $F_R$ whenever the base point lies in $C_R$, and preserve $f$ in the root case. Arrange that every point of the new tube lying in an inner $R$-band has its $S$-base in $C_R$: choose by [F3] a smooth nonnegative $\psi_R$ supported in $\operatorname{int}_S C_R$ and positive on the relatively closed $A_R\cap S$, put $b_R(s)=\operatorname{dist}(s,A_R)+\psi_R(s)>0$, and impose $\|E_S(s,v)-s\|<b_R(s)/2$ for every $R$ using the size-bound clause of [F2]. If $s\notin C_R$ and $E_S(s,v)\in A_R$, then $\psi_R(s)=0$ and $\operatorname{dist}(s,A_R)\le\|E_S(s,v)-s\|<\operatorname{dist}(s,A_R)/2$, a contradiction; so $s\in C_R$ and $F_R(E_S(s,v))=F_R(s)$. Both the radius and its base-dependent bound depend only on $F_R$, so membership in the inner $R$-band is also preserved under $\pi_S$. Restricting every old final tube to its inner band keeps the compositions defined on the actual intersections and keeps $\pi_R\pi_S=\pi_R$ and $\rho_R\pi_S=\rho_R$ there. [F2, F3, step 3.1, algebra]

5.1 Set $\rho_S(E_S(s,v))=\|v\|^2$ in the Euclidean quotient-bundle norm; its zero set is $S$. This map need not be the ordinary nearest-point tube, but it is related to one by a smooth ambient diffeomorphism: identify the quotient bundle with the orthogonal normal bundle, let $E_0$ be ordinary normal addition shrunk into its diffeomorphism domain, and put $\Phi=E_0E_S^{-1}$, which fixes $S$, carries $\pi_S$ to the ordinary tube projection and $\rho_S$ to squared normal distance. Whitney (a),(b) are preserved by the ambient diffeomorphism: derivatives transform tangent limits, and the integral mean-value formula gives $\Phi(x_j)-\Phi(y_j)=D\Phi(y)(x_j-y_j)+o(\|x_j-y_j\|)$ for sequences tending to $y$, so secant limits transform by the same invertible differential. Applying [F1] to the transformed incident upper strata and shrinking the new tube makes $(\pi_S,\rho_S)$ submersive on every incident upper stratum, since squaring the positive radius does not change the rank; no prior control identity is lost. [F1, step 4.1, construct, algebra]

6.1 This completes the finite induction over strata. At each stage one may again impose the incomparable-displacement bounds of step 2.1 on the new tube and shrink the finitely many old tubes accordingly; the proved identities are retained, and the smaller old radius bands are preserved because their $F_R$-values are. Every shrink leaves a positive radius at every base point, so each final tube is a neighbourhood of its stratum. For local properness fix a compact base slice in a sufficiently small neighbourhood where $W$ is closed in the ambient open set; such a neighbourhood exists because $W$ is locally closed. A sufficiently small uniform closed fiber-radius ball over that slice is compact inside the tube parameter domain and this ambient open set. Its image under the tube embedding is compact, and its intersection with the relatively closed $W$ is compact. This intersection is exactly the closed-radius inverse image in the stratified tube, proving local properness. All imposed size bounds are continuous positive functions, or admit local positive lower bounds before choosing their smooth minorants. The optional root-controller construction yields $f\pi_S=f$ throughout each final tube. Thus the stated compatible tube control data exist; continuous stratified flows are not supplied by this construction. [F1, F2, F3, A1, step 1.1, step 4.1, step 5.1] ∎

## Remarks

- The construction produces compatible data stratum by stratum, shrinking outer collars rather than rebuilding them, which is why the overlap identities survive; it deliberately makes no assertion about continuous controlled flows, simultaneity of Mather identities beyond the stated ones, or semialgebraicity of the resulting radii.
