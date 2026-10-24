---
id: def-weak-containment-of-unitary-representations
kind: definition
title: Weak containment of unitary representations
deps:
  - def-continuous-function-of-positive-type
  - def-matrix-coefficient-of-a-unitary-representation
  - def-strongly-continuous-unitary-representation
  - lem-diagonal-unitary-coefficients-have-positive-type
dependency_level: 0
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.C: Definition 1.C.1 and Remark 1.C.2"
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.1: Definition F.1.1 and Remark F.1.2"
status: published
origin: pipeline
---
## Definition

Let $G$ be a topological group and let $\pi$ and $\rho$ be strongly continuous
unitary representations on Hilbert spaces $H_\pi$ and $H_\rho$
([[def-strongly-continuous-unitary-representation]]). Write $\pi\prec\rho$ and
say that $\pi$ is **weakly contained in** $\rho$ if every continuous function
of positive type associated to $\pi$ can be approximated, uniformly on every
compact subset of $G$, by finite sums of functions of positive type associated
to $\rho$: for every $\xi\in H_\pi$, every compact $Q\subseteq G$ and every
$\epsilon>0$ there exist finitely many $\eta_1,\dots,\eta_n\in H_\rho$ with
$$\sup_{g\in Q}\Bigl|\langle\pi(g)\xi,\xi\rangle-\sum_{i=1}^n\langle\rho(g)\eta_i,\eta_i\rangle\Bigr|<\epsilon.$$
Write $\pi\sim\rho$ when both $\pi\prec\rho$ and $\rho\prec\pi$.

## Remarks

- **Coefficient form.** The vector $\xi$ of the definition is arbitrary, so the
  functions tested are exactly the diagonal matrix coefficients
  $c_{\xi,\xi}(g)=\langle\pi(g)\xi,\xi\rangle$ of $\pi$
  ([[def-matrix-coefficient-of-a-unitary-representation]]); each is continuous
  and of positive type
  ([[lem-diagonal-unitary-coefficients-have-positive-type]]), and so is each
  of the approximating functions
  ([[def-continuous-function-of-positive-type]]). Containment of a
  representation in another, when defined by subrepresentations, plainly
  implies weak containment; no multiplicity or dimension hypotheses are
  imposed, and the zero representation is allowed on either side.
- **Reflexivity and invariance of the relation.** Taking $n=1$ and
  $\eta_1=\xi$ shows $\pi\prec\pi$. If $U:H_\pi\to H_{\pi'}$ is a unitary
  intertwiner and $V:H_\rho\to H_{\rho'}$ is one, then $V$ carries every
  diagonal coefficient of $\rho$ to a diagonal coefficient of $\rho'$,
  so $\pi\prec\rho$ implies $\pi'\prec\rho'$: the relation is well defined on
  unitary equivalence classes.
- **Transitivity.** If $\pi\prec\rho$ and $\rho\prec\sigma$, then
  $\pi\prec\sigma$. Indeed, fix $\xi\in H_\pi$, compact $Q$ and
  $\epsilon>0$. Since $\pi\prec\rho$, choose $\eta_1,\dots,\eta_n\in H_\rho$
  with $\sup_Q|c_{\xi,\xi}-\sum_j c_{\eta_j,\eta_j}|<\epsilon/2$. Applying
  $\rho\prec\sigma$ to each of the finitely many vectors $\eta_j$ on the same
  compact $Q$ with tolerance $\epsilon/(2n)$ produces, for each $j$, finitely
  many vectors $\zeta_{j,k}\in H_\sigma$ with
  $\sup_Q|c_{\eta_j,\eta_j}-\sum_k c_{\zeta_{j,k},\zeta_{j,k}}|<\epsilon/(2n)$;
  summing the $n$ inequalities gives a finite family of vectors of
  $H_\sigma$ whose coefficient sum differs from $c_{\xi,\xi}$ on $Q$ by less
  than $\epsilon$.
