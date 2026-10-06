---
id: lem-fell-closure-of-a-single-representation-is-its-weak-containment-closure
kind: lemma
title: The Fell closure of a single representation is its weak containment closure
deps:
  - def-fell-topology-on-the-unitary-dual
  - def-weak-containment-of-unitary-representations
  - def-matrix-coefficient-of-a-unitary-representation
  - def-continuous-function-of-positive-type
  - def-axiom-of-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the Fell topology and unitary dual suppliers; the neighbourhood unwinding is choice-free."
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.2: Proposition F.2.2"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.C: Proposition 1.C.6 and the Fell basis definition"
status: draft
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be a topological group and let
$\pi,\rho\in\widehat G$ be irreducible strongly continuous unitary
representations, viewed as points of the unitary dual with the Fell topology
([[def-fell-topology-on-the-unitary-dual]]). Then $\rho$ belongs to the Fell
closure of the singleton $\{\pi\}$ if and only if $\rho$ is weakly contained in
$\pi$, $\rho\prec\pi$
([[def-weak-containment-of-unitary-representations]]).

## Facts & Assumptions

**Given:** AC; a topological group $G$; irreducible strongly continuous unitary representations $\pi$ and $\rho$; the Fell topology on the unitary dual.

[F1] A basis of neighbourhoods of $\rho$ in the Fell topology is formed by the sets $W(\rho;\phi_1,\dots,\phi_n,Q,\epsilon)$ consisting of the classes $\sigma$ such that each $\phi_i$ is within $\epsilon$ on the compact set $Q$ of a finite sum of functions of positive type associated to $\sigma$, where each $\phi_i$ is itself a single diagonal matrix coefficient of $\rho$ ([[def-fell-topology-on-the-unitary-dual]], [[def-matrix-coefficient-of-a-unitary-representation]], [[def-continuous-function-of-positive-type]]).

[F2] $\rho\prec\pi$ means that for every $\xi$ in the carrier of $\rho$, every compact $Q\subseteq G$ and every $\epsilon>0$ there are finitely many vectors $\eta_1,\dots,\eta_m$ in the carrier of $\pi$ with $\sup_Q|c_{\xi,\xi}-\sum_jc_{\eta_j,\eta_j}|<\epsilon$ ([[def-weak-containment-of-unitary-representations]], [[def-matrix-coefficient-of-a-unitary-representation]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a topological group $G$, irreducible representations $\pi,\rho$, and the Fell basis of [F1].

1.1 By [F1], a basic neighbourhood of $\rho$ is determined by finitely many functions $\phi_1,\dots,\phi_n$ of positive type associated to $\rho$, a compact $Q$ and $\epsilon>0$, and it consists exactly of the classes $\sigma$ for which each $\phi_i$ is within $\epsilon$ on $Q$ of a finite sum of functions of positive type associated to $\sigma$. In particular the singleton $\{\pi\}$ meets this neighbourhood if and only if $\pi$ belongs to it, that is, if and only if each $\phi_i$ admits such an approximation by coefficients of $\pi$. [F1]

1.2 It is enough to test single diagonal coefficients. If every diagonal coefficient $c_{\xi,\xi}$ of $\rho$ is, for every compact $Q$ and $\epsilon>0$, within $\epsilon$ on $Q$ of a finite sum of coefficients of $\pi$, then so is every finite sum $\phi=\sum_{i=1}^nc_{\xi_i,\xi_i}$: choose for each summand an approximating finite sum with error less than $\epsilon/n$ on $Q$ and add these finitely many identities. Conversely, a single diagonal coefficient is itself a finite sum of this form, with $n=1$. [F2, algebra]

2.1 Consequently, for a basic neighbourhood of $\rho$ as in step 1.1, $\{\pi\}$ meets it if and only if each tested $\phi_i$ is approximated by coefficients of $\pi$; by step 1.2 and the basis property of [F1], this happens for every basic neighbourhood of $\rho$ if and only if every diagonal coefficient of $\rho$ is approximated, uniformly on compacta, by finite sums of coefficients of $\pi$. [F1, step 1.1, step 1.2]

3.1 Since a point of a topological space lies in the closure of a set $S$ exactly when every basic neighbourhood of the point meets $S$, step 2.1 with $S=\{\pi\}$ gives: $\rho\in\overline{\{\pi\}}$ if and only if every diagonal coefficient of $\rho$ is approximated on compacta by finite sums of coefficients of $\pi$, which by [F2] is exactly $\rho\prec\pi$. The Axiom of Choice is inherited from the unitary dual and Fell topology suppliers of [F1]; the unwinding of the neighbourhood basis uses no choice ([[def-axiom-of-choice]]). [F1, F2, step 2.1] ∎ 