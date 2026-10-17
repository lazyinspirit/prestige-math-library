---
id: def-qsm-identical-particle-fock-sectors
kind: definition
title: "Symmetric and antisymmetric identical-particle Fock spaces"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-countable-choice
  - thm-cauchy-schwarz-in-an-inner-product-space
  - lem-nrqm-composites-hilbert-tensor-construction
  - lem-nrqm-composites-permutation-sector-projections
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lecture 22, Hilbert Space of Identical Particles"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/7f26f530bdda5d69c399057bd4b1bd28_MIT8_333F13_Lec22.pdf"
    - title: "David Tong, Statistical Physics, §§3.5.1 and 3.6.1"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Definition

Assume the Axiom of Countable Choice, written $\mathrm{AC}_\omega$
([[def-countable-choice]]). Let $I$ be a specified finite or countably infinite
mode set with a fixed enumeration, and let $\mathfrak h=\ell^2(I)$ have its
coordinate orthonormal basis $(e_j)_{j\in I}$. Put
$\mathfrak h^{\otimes 0}=\mathbb C$, $\mathfrak h^{\otimes 1}=\mathfrak h$,
and define each completed tensor power recursively by
$\mathfrak h^{\otimes(n+1)}=\mathfrak h^{\otimes n}\widehat\otimes\mathfrak h$,
using the first-variable-linear product inner product of
[[lem-nrqm-composites-hilbert-tensor-construction]]. For $n\ge1$, let
$U_\pi$ permute the tensor factors for $\pi\in S_n$, and let
$$
P_\pm^{(n)}=\frac1{n!}\sum_{\pi\in S_n}\chi_\pm(\pi)U_\pi, \qquad \chi_+(\pi)=1,\quad \chi_-(\pi)=\operatorname{sgn}(\pi),
$$
with $P_\pm^{(0)}=I_{\mathbb C}$. The permutation-sector theorem
[[lem-nrqm-composites-permutation-sector-projections]] makes these orthogonal
projections. Define the symmetric and antisymmetric sectors
$\mathcal H_\pm^{(n)}:=\operatorname{ran}P_\pm^{(n)}$. Define
$$
\mathcal F_\pm(\mathfrak h):=\left\{\psi=(\psi_n)_{n\ge0}:\psi_n\in\mathcal H_\pm^{(n)},\ \sum_{n\ge0}\|\psi_n\|^2<\infty\right\}, \qquad \langle\psi,\varphi\rangle:=\sum_{n\ge0}\langle\psi_n,\varphi_n\rangle.
$$
The vector $\Omega=(1,0,0,\ldots)$ is the vacuum, and the finite-particle
subspace consists of vectors with only finitely many nonzero components.

This is a mathematical construction for a specified mode basis. Choosing its
symmetric or antisymmetric sector for a physical species is a separate model
postulate. No spin-statistics theorem or physical species assignment is part of
the definition.

## Facts & Assumptions

**Given:** A finite or countable enumerated mode set $I$, the coordinate Hilbert space $\ell^2(I)$, its completed tensor powers, and the symmetric-group action.

[A1] [[def-countable-choice]]: every at most countable family of nonempty sets has a choice function.

[F1] [[lem-nrqm-composites-hilbert-tensor-construction]], Statement (c)–(d): the completed tensor product of complex Hilbert spaces has the product inner product, is complete, and the products of complete orthonormal families form a complete orthonormal family.

[F2] [[lem-nrqm-composites-permutation-sector-projections]], Statement (a)–(c): the factor permutations are unitary, and their symmetric and antisymmetric averages are orthogonal projections whose ranges are the fixed and sign-transforming subspaces.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: the inner product pairing satisfies the Cauchy–Schwarz inequality.

## Proof

1.1 The tensor factors and product pairing in the Definition are supplied by [F1]. For every $n\ge1$, [F2] makes $P_\pm^{(n)}$ an orthogonal projection. The range of an orthogonal projection is closed: if $P x_k=x_k$ and $x_k\to x$, boundedness of $P$ gives $P x=\lim_k P x_k=\lim_k x_k=x$. Therefore each $\mathcal H_\pm^{(n)}$ is a closed subspace of the complete tensor Hilbert space and is itself complete. [given, A1, F1, F2, algebra]

1.2 For $\psi,\varphi\in\mathcal F_\pm(\mathfrak h)$, Cauchy–Schwarz for the square-summable nonnegative sequences $(\|\psi_n\|)_n$ and $(\|\varphi_n\|)_n$ gives
$\sum_n|\langle\psi_n,\varphi_n\rangle|\le(\sum_n\|\psi_n\|^2)^{1/2}(\sum_n\|\varphi_n\|^2)^{1/2}<\infty$. Hence the displayed pairing converges absolutely, is sesquilinear, and is positive definite because $\langle\psi,\psi\rangle=\sum_n\|\psi_n\|^2=0$ forces every coordinate to vanish. [given, F1, F3, algebra]

2.1 Let $(\psi^{(k)})_k$ be Cauchy in this norm. For each fixed $n$, $(\psi_n^{(k)})_k$ is Cauchy in the complete sector $\mathcal H_\pm^{(n)}$, so it converges to some $\psi_n\in\mathcal H_\pm^{(n)}$. If $k\ge K$ and $\|\psi^{(k)}-\psi^{(m)}\|\le\varepsilon$ for all $m\ge K$, then for every finite $N$, passing $m\to\infty$ in the finite sum yields $\sum_{n\le N}\|\psi_n-\psi_n^{(k)}\|^2\le\varepsilon^2$. Also $\sum_{n\le N}\|\psi_n\|^2\le2\|\psi^{(k)}\|^2+2\varepsilon^2$. Taking suprema over finite $N$ proves $\sum_n\|\psi_n\|^2<\infty$, so $\psi\in\mathcal F_\pm(\mathfrak h)$, and then $\|\psi^{(k)}-\psi\|\le\varepsilon$ for all $k\ge K$. Thus the direct sum is complete. [step 1.1, step 1.2, algebra]

3.1 For $\psi\in\mathcal F_\pm(\mathfrak h)$, truncating after sector $N$ changes its squared norm by $\sum_{n>N}\|\psi_n\|^2\to0$. Therefore the finite-particle subspace is dense and $\Omega$ is a unit vector. [step 1.2, algebra] ∎
