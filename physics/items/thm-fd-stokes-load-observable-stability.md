---
id: thm-fd-stokes-load-observable-stability
kind: theorem
title: "Lipschitz stability of bounded Stokes pressure observations"
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-bounded-stokes-observation-interface
  - def-na-stokes-zero-mean-pressure-and-velocity-spaces
  - thm-na-weak-stokes-solvability-lipschitz-domain
  - thm-na-bounded-lipschitz-domain-divergence-right-inverse
dependency_roles:
  def-fd-bounded-stokes-observation-interface: mathematical-premise
  def-na-stokes-zero-mean-pressure-and-velocity-spaces: mathematical-premise
  thm-na-weak-stokes-solvability-lipschitz-domain: mathematical-premise
  thm-na-bounded-lipschitz-domain-divergence-right-inverse: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 53 — Stokes Equations"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf
      locator: "Chapter 53, §§53.2.1–53.2.2, Lemma 53.9 and Theorem 53.11: weak formulation, divergence lifting, well-posedness, and pressure stability."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "§§4.2.1–4.2.3, Example 4.2.2, and §8.2.1, pp. 225–229, 233–234, and 462–463: mixed Hilbert-space stability and the Stokes pressure gauge."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. Let $d\in\{2,3\}$, let $D\subset\mathbb R^d$ be a nonempty bounded connected Lipschitz open set, and let $\nu>0$. Set $V=H^1_0(D;\mathbb R^d)$ with $\|v\|_V=\|\nabla v\|_{L^2(D)}$ and $Q=L^2_0(D)$ with the $L^2$ norm. For each $F\in V'$, let $(u_F,p_F)\in V\times Q$ be the unique pair satisfying
$$2\nu\int_D\varepsilon(u_F):\varepsilon(v)\,dx-\int_Dp_F\,\operatorname{div}v\,dx=F(v)\quad(v\in V),\qquad-\int_Dq\,\operatorname{div}u_F\,dx=0\quad(q\in Q),$$
where $V'$ is the continuous real dual of $V$ and $\varepsilon(u)=(\nabla u+\nabla u^T)/2$. Write $C_{\rm div}(D)$ for a finite constant in a bounded right inverse estimate $\operatorname{div}B_Dq=q$ and $\|\nabla B_Dq\|_{L^2(D)}\le C_{\rm div}(D)\|q\|_{L^2(D)}$ for $q\in Q$. For a positive integer $m$ and bounded pressure sensors $S_1,\ldots,S_m\in Q'$, define $\mathcal O(F)=(S_1(p_F),\ldots,S_m(p_F))\in\mathbb R^m$. Then $F\mapsto p_F$ and $\mathcal O$ are real-linear, and for all $F,G\in V'$
$$\|\mathcal O(F)-\mathcal O(G)\|_{\mathbb R^m}\le 3C_{\rm div}(D)\left(\sum_{j=1}^m\|S_j\|_{Q'}^2\right)^{1/2}\|F-G\|_{V'},$$
where $\mathbb R^m$ has its Euclidean norm.

## Statement references

[Guermond, MATH 661, Chapter 53](https://people.tamu.edu/~guermond/M661_FALL_2025/chap53.pdf), §§53.2.1–53.2.2, Lemma 53.9 and Theorem 53.11, weak formulation, divergence lifting, well-posedness and pressure stability.

[Boffi–Brezzi–Fortin, *Mixed Finite Element Methods and Applications*](https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf), §§4.2.1–4.2.3, Example 4.2.2 and §8.2.1, pp. 225–229, 233–234, and 462–463, mixed Hilbert-space stability and Stokes pressure gauge.

## Facts & Assumptions

**Given:** Countable Choice; $d\in\{2,3\}$; a nonempty bounded connected Lipschitz domain $D$; $\nu>0$; the real spaces $V=H^1_0(D;\mathbb R^d)$ and $Q=L^2_0(D)$ with the stated norms; a load in $V'$; and a finite family of bounded pressure sensors.

[A1] Countable Choice is required by the weak Stokes solvability result used below. [[thm-na-weak-stokes-solvability-lipschitz-domain]]

[F1] [[thm-na-weak-stokes-solvability-lipschitz-domain]]: for every $F\in V'$ there is a unique weak Stokes pair $(u_F,p_F)\in V\times Q$, with mean-zero pressure.

[F2] [[thm-na-weak-stokes-solvability-lipschitz-domain]]: the pressure estimate is $\|p_F\|_{L^2(D)}\le3C_{\rm div}(D)\|F\|_{V'}$.

[F3] [[thm-na-bounded-lipschitz-domain-divergence-right-inverse]]: $C_{\rm div}(D)$ is finite and independent of a finite-element mesh for the chosen bounded connected Lipschitz domain.

[F4] [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]]: the forms $a_\nu(u,v)=2\nu\int_D\varepsilon(u):\varepsilon(v)$ and $b(v,q)=-\int_Dq\,\operatorname{div}v$ are real-bilinear on the stated spaces.

[F5] [[def-fd-bounded-stokes-observation-interface]]: each $S_j$ is real-linear and $|S_j(q)|\le\|S_j\|_{Q'}\|q\|_{L^2(D)}$ for $q\in Q$.

## Proof

1.1 For any $a,b\in\mathbb R$ and $F,G\in V'$, bilinearity in [F4] makes $(a u_F+b u_G,a p_F+b p_G)$ satisfy both weak equations with load $aF+bG$. Uniqueness in [F1] therefore gives $p_{aF+bG}=a p_F+b p_G$; hence the pressure map and each sensor output are real-linear. [given, A1, F1, F4, algebra]

2.1 Applying the pressure estimate in [F2] to $F-G$ and using step 1.1 yields $\|p_F-p_G\|_{L^2(D)}=\|p_{F-G}\|_{L^2(D)}\le3C_{\rm div}(D)\|F-G\|_{V'}$. The constant is finite by [F3]. [A1, F2, F3, step 1.1]

3.1 For each $j$, [F5] gives $|S_j(p_F-p_G)|^2\le\|S_j\|_{Q'}^2\|p_F-p_G\|_{L^2(D)}^2$. Sum these finitely many inequalities, take square roots, and use step 2.1 to obtain the asserted Euclidean observation bound. [F5, step 2.1, algebra] ∎
