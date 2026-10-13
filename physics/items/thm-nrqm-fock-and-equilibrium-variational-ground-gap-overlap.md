---
id: thm-nrqm-fock-and-equilibrium-variational-ground-gap-overlap
aliases: [nrqm-fock-and-equilibrium-variational-ground-gap-overlap]
kind: theorem
domain: mathematics
title: "Variational ground gap overlap"
status: published
origin: pipeline
dependency_level: 2
deps: [lem-nrqm-composites-density-and-scalar-spectral-probability, thm-spectral-theorem-for-unbounded-self-adjoint-operators, lem-scalar-and-complex-measures-from-a-pvm, def-projection-valued-measure, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-axiom-of-choice, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  lem-scalar-and-complex-measures-from-a-pvm: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 3 and Chapter 4 (spectral theorem, functional calculus) and Sections 4.3-4.4 pp. 117-120 (variational methods and spectral projection estimates)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; retrieved via the Internet Archive snapshot of 2024-04-21), Section 6.2 pp. 87-89 (variational theory and ground-state estimates)"
      url: "http://web.archive.org/web/20240421090356/http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Let $H$ be a self-adjoint
operator on a nonzero complex Hilbert space $\mathfrak H$
([[def-symmetric-self-adjoint-and-essentially-self-adjoint]],
[[def-hilbert-space]]) which is bounded below, let
$E_0:=\inf\sigma(H)\in\mathbb R$, let $E$ be the projection-valued measure of
$H$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-projection-valued-measure]]), put $P:=E(\{E_0\})$, and assume that
$g>0$ is a spectral gap:
$$\sigma(H)\cap(E_0,E_0+g)=\varnothing .$$
For $u\in D(|H|^{1/2})$ write $E_u(B):=\langle E(B)u,u\rangle$ for Borel sets
$B\subseteq\mathbb R$ ([[lem-scalar-and-complex-measures-from-a-pvm]]) and put
$q_H[u]:=\int_{\mathbb R}\lambda\,dE_u(\lambda)$; by
[[lem-nrqm-composites-density-and-scalar-spectral-probability]] (c) this
integral exists for $u\in D(|H|^{1/2})$, and for $u\in D(H)$ it equals
$\langle Hu,u\rangle$. Then for every $u\in D(|H|^{1/2})$ with $\|u\|=1$:

(a) $q_H[u]-E_0=\displaystyle\int_{\mathbb R}(\lambda-E_0)\,dE_u(\lambda)\ \ge\ g\,\|(I-P)u\|^2$;

(b) if $q_H[u]\le E_0+\varepsilon$ for some $\varepsilon\ge0$, then
$\|(I-P)u\|^2\le\varepsilon/g$; in particular, if $\varepsilon<g$ then $Pu\ne0$.

No claim is made about the existence of a ground eigenvector, about $E_0$
being an eigenvalue, or about any physical interpretation of the trial vector.

## Facts & Assumptions

**Given:** the self-adjoint operator $H$ bounded below with bottom $E_0=\inf\sigma(H)$, its projection-valued measure $E$, the ground projection $P=E(\{E_0\})$, a gap $g>0$, and a vector $u\in D(|H|^{1/2})$ with $\|u\|=1$.

[F1] For a self-adjoint $H$ and unit $u\in D(|H|^{1/2})$, the scalar measure $E_u(B)=\langle E(B)u,u\rangle$ is a probability measure and $\int|\lambda|\,dE_u<\infty$, so its signed first moment $\int\lambda\,dE_u$ is finite; if $u\in D(H)$, that moment equals $\langle Hu,u\rangle$ ([[lem-nrqm-composites-density-and-scalar-spectral-probability]] (c), [[lem-scalar-and-complex-measures-from-a-pvm]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). No square-root expectation of $H$ is asserted when $H$ may have negative spectrum.

[F2] $E(\{E_0\})=P$ is an orthogonal projection; for every Borel set $B$, $E_u(B)=\|E(B)u\|^2$, and $E(B)=0$ implies $E_u(B)=0$ ([[def-projection-valued-measure]]).

[F3] $E_0=\inf\sigma(H)$ means $\sigma(H)\subseteq[E_0,\infty)$, so $E((-\infty,E_0))=0$; the gap hypothesis means $E((E_0,E_0+g))=0$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[def-projection-valued-measure]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

## Proof

1.1 [Support of the scalar measure] By [F2] and [F3], $E_u((-\infty,E_0))=\|E((-\infty,E_0))u\|^2=0$ and $E_u((E_0,E_0+g))=\|E((E_0,E_0+g))u\|^2=0$; hence $E_u$ is concentrated on $\{E_0\}\cup[E_0+g,\infty)$ and, since $E_u$ is a probability measure ([F1]), $E_u(\mathbb R)=\|u\|^2=1$, $E_u(\{E_0\})=\|Pu\|^2$ and $E_u([E_0+g,\infty))=\|(I-P)u\|^2$. [F1, F2, F3, algebra]

2.1 [The first-moment inequality] Write $(\lambda-E_0)^+:=(\lambda-E_0)\mathbf 1_{[E_0,\infty)}(\lambda)$, a nonnegative Borel function equal to $\lambda-E_0$ on the support of $E_u$ by step 1.1. Since $\int|\lambda|\,dE_u<\infty$ by [F1] and $E_u(\mathbb R)=1$, $\int(\lambda-E_0)\,dE_u=\int\lambda\,dE_u-E_0=q_H[u]-E_0$. On the support, $(\lambda-E_0)^+\ge g\,\mathbf 1_{[E_0+g,\infty)}(\lambda)$, so $q_H[u]-E_0\ge g\,E_u([E_0+g,\infty))=g\|(I-P)u\|^2$, which is (a); if in addition $q_H[u]\le E_0+\varepsilon$, then $g\|(I-P)u\|^2\le\varepsilon$. [F1, step 1.1, algebra]

3.1 [Failure of the ground component] If $\varepsilon<g$, then $\|(I-P)u\|^2\le\varepsilon/g<1=\|u\|^2$, so $\|Pu\|^2=\|u\|^2-\|(I-P)u\|^2>0$ and $Pu\ne0$; this completes the proof of (b) and of the statement. [step 2.1, algebra] ∎
