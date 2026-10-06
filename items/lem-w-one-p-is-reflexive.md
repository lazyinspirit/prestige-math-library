---
id: lem-w-one-p-is-reflexive
kind: lemma
title: "W^{1,p}(Omega) is reflexive for 1<p<infinity"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [thm-sobolev-spaces-are-banach-spaces, thm-reflexivity-of-lp-for-one-less-p-less-infinity, thm-closed-subspaces-of-reflexive-spaces-are-reflexive, cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence, def-reflexive-banach-space, def-sobolev-space-wkp-and-its-norm, def-ultrafilter-extension-principle, def-dependent-choice, def-hahn-banach-extension-principle-relative, lem-dependent-choice-implies-countable-choice, def-banach-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 2 Section 2, reflexivity of W^{1,p} and Banach-Alaoglu, printed pp. 33-36"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, first paragraph (reflexive spaces and weak compactness), printed p. 296"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the ultrafilter lemma, DC and HB ([[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]). Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, and let $1<p<\infty$. Then the real Banach space $W^{1,p}(\Omega)$ of [[def-sobolev-space-wkp-and-its-norm]] is reflexive ([[def-reflexive-banach-space]]).

## Facts & Assumptions

**Given:** The ultrafilter lemma, DC and HB; an open set $\Omega\subseteq\mathbb R^n$, $n\ge1$; and $1<p<\infty$.

[F1] The Sobolev norm is the $\ell^p$-sum norm $\|u\|_{W^{1,p}(\Omega)}=(\sum_{|\alpha|\le1}\|D^\alpha u\|_{L^p(\Omega)}^p)^{1/p}$ over the finitely many multi-indices $|\alpha|\le1$ ([[def-sobolev-space-wkp-and-its-norm]]).

[F2] $W^{1,p}(\Omega)$ is a complete normed space ([[thm-sobolev-spaces-are-banach-spaces]]); its statement assumes the Axiom of Choice, used there only to derive Countable Choice, which follows from the DC assumed here ([[lem-dependent-choice-implies-countable-choice]]).

[F3] For every measure space and every $1<p<\infty$, $L^p$ is reflexive under Countable Choice ([[thm-reflexivity-of-lp-for-one-less-p-less-infinity]]), and Countable Choice holds here because DC does ([[lem-dependent-choice-implies-countable-choice]]).

[F4] Under the ultrafilter lemma, DC and HB, a real Banach space $X$ is reflexive if and only if every norm-bounded sequence in $X$ has a subsequence converging weakly to a point of $X$ ([[cor-reflexive-iff-every-bounded-sequence-has-a-weakly-convergent-subsequence]], [[def-reflexive-banach-space]]).

[F5] Under HB, a closed linear subspace of a reflexive Banach space, with the restricted norm, is reflexive ([[thm-closed-subspaces-of-reflexive-spaces-are-reflexive]]).

## Proof

**Proof technique:** direct, by embedding $W^{1,p}(\Omega)$ isometrically into a finite product of reflexive $L^p$ spaces.

1.1 The gradient embedding. Write $\mathcal A_1=\{0,e_1,\dots,e_n\}$ and define $\Phi(u):=(D^\alpha u)_{\alpha\in\mathcal A_1}$ for $u\in W^{1,p}(\Omega)$, regarded as an element of the real vector space $Y:=\prod_{\alpha\in\mathcal A_1}L^p(\Omega)$ equipped with the $\ell^p$-sum norm $\|(w_\alpha)\|_Y:=(\sum_\alpha\|w_\alpha\|_{L^p(\Omega)}^p)^{1/p}$. By [F1] the map $\Phi$ is linear and $\|\Phi(u)\|_Y=\|u\|_{W^{1,p}(\Omega)}$ for every $u$; hence $\Phi$ is a linear isometry onto its image $S:=\Phi(W^{1,p}(\Omega))$, and $Y$ is a Banach space (a finite $\ell^p$-sum of the Banach spaces $L^p(\Omega)$). [F1, F2, given]

1.2 $W^{1,p}(\Omega)$ is complete. By [F2] the space $W^{1,p}(\Omega)$ is a complete normed space, the Countable Choice needed there being supplied by DC. [F2, given]

2.1 Finite sums of reflexive spaces are reflexive. Each factor $L^p(\Omega)$ is reflexive by [F3]; we show that a finite $\ell^p$-sum of reflexive Banach spaces is reflexive. For two factors $X,Z$: a bounded sequence in $X\oplus_pZ$ has bounded coordinate sequences, so two successive extractions using [F4] give a subsequence $(x_k,z_k)$ with $x_k\rightharpoonup x$ in $X$ and $z_k\rightharpoonup z$ in $Z$; every bounded linear functional on $X\oplus_pZ$ has the form $(x,z)\mapsto f(x)+g(z)$ with $f\in X^*$, $g\in Z^*$ bounded by the norm of the functional (restrict the functional to each factor), so $f(x_k)+g(z_k)\to f(x)+g(z)$ and the subsequence converges weakly in $X\oplus_pZ$; [F4] then makes $X\oplus_pZ$ reflexive. Induction over the finitely many factors gives the reflexivity of $Y$. [F3, F4, step 1.1]

2.2 $S$ is closed. Since $\Phi$ is a surjective isometry from the complete space $W^{1,p}(\Omega)$ onto $S$ by steps 1.1 and 1.2, the space $S$ is complete, and a complete subset of the normed space $Y$ is closed. [step 1.1, step 1.2]

3.1 $Y$ is reflexive. By step 2.1 the finite $\ell^p$-sum $Y$ of the reflexive spaces $L^p(\Omega)$ is reflexive. [step 2.1]

4.1 $S$ is reflexive. By steps 2.2 and 3.1, $S$ is a closed linear subspace of the reflexive Banach space $Y$; [F5] therefore makes $S$, with the restricted norm, reflexive. [F5, step 2.2, step 3.1]

5.1 Reflexivity transfers to $W^{1,p}(\Omega)$. The isometry $\Phi:W^{1,p}(\Omega)\to S$ satisfies $\Phi^{**}\circ J_{W^{1,p}(\Omega)}=J_S\circ\Phi$ for the canonical maps: both sides send $u$ to the functional $s^*\mapsto s^*(\Phi(u))$ on $S^*$. If $\psi\in W^{1,p}(\Omega)^{**}$ is given, then $\Phi^{**}\psi\in S^{**}$ and, $S$ being reflexive by step 4.1, $\Phi^{**}\psi=J_S(s)$ for some $s\in S$; writing $s=\Phi(u)$ gives $J_S(\Phi(u))=\Phi^{**}(J_{W^{1,p}(\Omega)}(u))$, hence $J_{W^{1,p}(\Omega)}(u)=\psi$ because $\Phi^{**}$ is injective. So the canonical map of $W^{1,p}(\Omega)$ is surjective, that is, $W^{1,p}(\Omega)$ is reflexive. [F4, step 4.1] ∎ 
