---
id: cor-the-unitary-dual-of-a-compact-group-is-fell-discrete
kind: corollary
title: The unitary dual of a compact group is Fell discrete
deps:
  - def-fell-topology-on-the-unitary-dual
  - def-unitary-dual-of-a-locally-compact-group
  - def-unitary-dual-of-a-compact-group
  - def-continuous-function-of-positive-type
  - def-matrix-coefficient-of-a-unitary-representation
  - def-normalized-irreducible-matrix-coefficient-basis
  - thm-l2-peter-weyl-orthonormal-basis
  - lem-positive-type-functions-satisfy-translation-estimates
  - def-axiom-of-choice
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from the choice of representatives and bases in the Peter-Weyl family; the orthogonality and separation arguments add no further choice."
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.2: Example F.2.5 and the discussion of the Fell topology; §F.1 on normalized coefficients"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.C: Proposition 1.C.6 and the example of compact groups"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $K$ be a compact Hausdorff group with its
unitary dual $\widehat K$
([[def-unitary-dual-of-a-compact-group]],
[[def-unitary-dual-of-a-locally-compact-group]]) and the Fell topology on the
dual [[def-fell-topology-on-the-unitary-dual]]. Then every point of
$\widehat K$ is isolated: the singleton $\{[\pi]\}$ is open for every
$\pi\in\widehat K$. Consequently $\widehat K$ is a discrete topological
space: if a net $(\pi_i)$ in $\widehat K$ converges to $\pi$ in the Fell
topology, then $\pi_i$ is unitarily equivalent to $\pi$ for all sufficiently
large $i$.

## Facts & Assumptions

**Given:** AC; a compact Hausdorff group $K$ with normalized Haar probability $\mu$; a class $\pi\in\widehat K$ with a representative on $H_\pi$, $d_\pi=\dim_{\mathbb C}H_\pi$, fixed orthonormal basis $e^\pi_1,\dots,e^\pi_{d_\pi}$; the Fell topology on $\widehat K$.

[F1] Peter-Weyl: the normalized block $\mathcal B=(u^\pi_{ij})$, $u^\pi_{ij}(k)=\sqrt{d_\pi}\langle\pi(k)e^\pi_i,e^\pi_j\rangle$, is an orthonormal basis of $L^2(K)$; in particular $\int_Ku^\pi_{ij}\overline{u^\rho_{kl}}\,d\mu=\delta_{\pi\rho}\delta_{ik}\delta_{jl}$, so the closed spans $M_\pi$ of the coefficient blocks of two inequivalent classes are orthogonal ([[thm-l2-peter-weyl-orthonormal-basis]], [[def-normalized-irreducible-matrix-coefficient-basis]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F2] A diagonal coefficient of a representation $\rho$ at a vector $\eta$ is a finite linear combination of matrix coefficients $\langle\rho(k)e_i,e_j\rangle$, and a function of positive type associated to $\rho$ is a single diagonal coefficient; hence every such function and every finite sum of them lies in $M_\rho$ ([[def-continuous-function-of-positive-type]], [[def-matrix-coefficient-of-a-unitary-representation]]).

[F3] Fell basis: for $\pi$ and data $(\phi,Q,\epsilon)$ the set $W(\pi;\phi,Q,\epsilon)$ of classes whose members admit a finite sum $\psi$ of functions of positive type associated to them with $\sup_{k\in Q}|\phi(k)-\psi(k)|<\epsilon$ is a neighbourhood of $[\pi]$ (taking $\phi$ itself as witness), and these sets generate the topology ([[def-fell-topology-on-the-unitary-dual]], [[def-unitary-dual-of-a-compact-group]]).

[F4] A normalized coefficient satisfies $|\phi(k)|\le1$ for all $k$ and $\|\phi\|_1\le1$ since $\mu$ is a probability measure ([[lem-positive-type-functions-satisfy-translation-estimates]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a compact group $K$, a class $\pi\in\widehat K$ and a normalized coefficient $\phi(k)=\langle\pi(k)\xi,\xi\rangle$ with $\|\xi\|=1$.

1.1 Write $\xi=\sum_ia_ie^\pi_i$ with $\sum_i|a_i|^2=1$. Then $\phi=(1/\sqrt{d_\pi})\sum_{i,j}a_i\bar a_j u^\pi_{ij}$, a linear combination of the orthonormal block elements of [F1] with coefficients $a_i\bar a_j/\sqrt{d_\pi}$; Parseval in the orthonormal basis gives $c:=\int_K|\phi|^2\,d\mu=(1/d_\pi)\sum_{i,j}|a_i|^2|a_j|^2=1/d_\pi>0$. In particular $\phi\in M_\pi$ and $c$ is strictly positive, while $c=1$ holds only in the one-dimensional case. [F1]

2.1 Orthogonality to other classes: if $\rho\in\widehat K$ is inequivalent to $\pi$ and $\psi$ is a finite sum of functions of positive type associated to $\rho$, then $\int_K\phi\bar\psi\,d\mu=0$. Indeed $\phi\in M_\pi$ by step 1.1 and $\psi\in M_\rho$ by [F2], and $M_\pi\perp M_\rho$ since the two classes are inequivalent in the Peter-Weyl orthonormal basis. [F1, F2, step 1.1]

3.1 The Fell neighbourhood $W(\pi;\phi,K,\epsilon)$ with $\epsilon:=c/(1+\|\phi\|_1)>0$ meets $\widehat K$ exactly in $\{[\pi]\}$. It contains $[\pi]$ by [F3]. Conversely let $[\rho]\in W$, so there is a finite sum $\psi$ of functions of positive type associated to $\rho$ with $\sup_K|\phi-\psi|<\epsilon$; then $\bigl|\int_K\phi\bar\psi\,d\mu-c\bigr|=\bigl|\int_K\phi(\bar\psi-\bar\phi)\,d\mu\bigr|\le\sup_K|\phi-\psi|\,\|\phi\|_1<\epsilon\|\phi\|_1<c$ by [F4], so $\int_K\phi\bar\psi\,d\mu\neq0$; step 2.1 forces $\rho$ to be unitarily equivalent to $\pi$. Hence $W\cap\widehat K=\{[\pi]\}$. [F3, F4, step 1.1, step 2.1]

4.1 By step 3.1 the singleton $\{[\pi]\}$ is the intersection with $\widehat K$ of an open set, hence is open in the dual; therefore it is a neighbourhood of $[\pi]$, so a net in $\widehat K$ converging to $[\pi]$ is eventually in $\{[\pi]\}$, and a net with limit $[\pi]$ is eventually equivalent to $\pi$. Since $\pi$ was arbitrary, every point is isolated and the dual is discrete. [F3, step 3.1]

5.1 The Axiom of Choice is inherited from the choice of representatives and orthonormal bases in the Peter-Weyl family; the orthogonality computation, the choice of $\epsilon$ and the separation argument add no further choice ([[def-axiom-of-choice]]). [given, F1] ∎ 