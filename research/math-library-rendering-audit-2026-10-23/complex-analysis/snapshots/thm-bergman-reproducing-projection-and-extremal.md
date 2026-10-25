---
id: thm-bergman-reproducing-projection-and-extremal
kind: theorem
title: Reproducing property, Bergman projection and the extremal characterization
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 4
proof_strategy: direct
deps:
  - def-bergman-space-and-kernel
  - def-countable-choice
  - def-hilbert-orthogonal-projection
  - lem-orthogonal-projection-is-linear-self-adjoint-contractive
  - thm-bergman-basis-expansion-and-closedness
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-orthogonal-decomposition-by-a-closed-subspace
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Zbigniew Błocki, The Bergman Kernel and Metric (lecture notes)
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed pp. 1–4: the Riesz representer and reproducing identity
        (pp. 1–2), followed by the diagonal extremal formula
        $K_\Omega(w,w)=\|K_\Omega(\cdot,w)\|^2=\sup\{|f(w)|^2:\|f\|\le1\}$
        (p. 4). Błocki assumes bounded domains throughout this section unless
        stated otherwise; the local Hilbert-space proof here applies to the
        library's general nonempty open domains.
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables (book)
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §5.2, the Bergman kernel definition and reproducing identity (5.1),
        printed p. 162, and Exercise 5.2.5, printed p. 164, which gives the
        uniqueness characterization but no proof.
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]), let $m\ge1$, and let
$\Omega\subseteq\mathbb C^m$ be a nonempty open set. Write
$k_w=K_\Omega(\cdot,w)$ for the Riesz section at $w\in\Omega$, and let
$P:L^2(\Omega)\to A^2(\Omega)$ be the Hilbert orthogonal projection. Then for
every $w\in\Omega$:

1. For every $f\in A^2(\Omega)$,
   $f(w)=\langle f,k_w\rangle=\int_\Omega f(z)\overline{K_\Omega(z,w)}\,d\lambda_\Omega(z)$.
2. For every $f\in L^2(\Omega)$,
   $Pf(w)=\langle f,k_w\rangle=\int_\Omega f(z)\overline{K_\Omega(z,w)}\,d\lambda_\Omega(z)$;
   $P$ is linear, self-adjoint and contractive, and $Pf=f$ for $f\in A^2(\Omega)$.
3. $K_\Omega(w,w)=\|k_w\|_2^2=\sup\{|f(w)|^2:f\in A^2(\Omega),\|f\|_2\le1\}$ and
   $|f(w)|^2\le K_\Omega(w,w)\|f\|_2^2$ for every $f\in A^2(\Omega)$. If
   $k_w\ne0$, the maximizers in the supremum are exactly
   $\lambda k_w/\|k_w\|_2$ with $|\lambda|=1$; if $k_w=0$, every member of
   the closed unit ball attains the supremum, which is $0$.

## Facts & Assumptions

[A1] The only choice principle is $\mathrm{AC}_\omega$, inherited through the Bergman Hilbert-space structure and the orthogonal-decomposition and projection suppliers; no full Axiom of Choice is used ([[def-countable-choice]]).

[F1] $A^2(\Omega)$ is a closed complex linear subspace of the Hilbert space $L^2(\Omega)$, with the first-variable-linear integral pairing and unique holomorphic representatives ([[def-bergman-space-and-kernel]], [[thm-bergman-basis-expansion-and-closedness]]).

[F2] For a closed subspace $M$ of a Hilbert space, each $x$ has a unique decomposition $x=P_Mx+(x-P_Mx)$ with $P_Mx\in M$ and $x-P_Mx\in M^\perp$; $P_M$ is the Hilbert orthogonal projection and is the identity on $M$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]], [[def-hilbert-orthogonal-projection]]).

[F3] The Hilbert orthogonal projection is linear, self-adjoint and contractive ([[lem-orthogonal-projection-is-linear-self-adjoint-contractive]]).

[F4] Evaluation at $w$ has unique Riesz representer $k_w\in A^2(\Omega)$, $f(w)=\langle f,k_w\rangle$, and $K_\Omega(z,w)=k_w(z)$ ([[def-bergman-space-and-kernel]]).

[F5] Cauchy–Schwarz gives $|\langle f,k_w\rangle|\le\|f\|_2\|k_w\|_2$, with equality exactly when the pair is linearly dependent ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** direct, using the Riesz representation and orthogonal projection.

**Given:** $\mathrm{AC}_\omega$, a nonempty open $\Omega\subseteq\mathbb C^m$, its Bergman space $A^2(\Omega)$, and $w\in\Omega$.

1.1 By [F4], evaluation at $w$ is represented by $k_w=K_\Omega(\cdot,w)$, so for each $f\in A^2(\Omega)$, $f(w)=\langle f,k_w\rangle=\int_\Omega f(z)\overline{k_w(z)}\,d\lambda_\Omega(z)$. The definition $K_\Omega(z,w)=k_w(z)$ gives the stated reproducing integral. [A1, F1, F4, given]

1.2 By [F1], $A^2(\Omega)$ is a closed subspace of $L^2(\Omega)$, so [F2]
defines its unique orthogonal projection $P$. The projection lemma [F3] gives linearity, self-adjointness and contractivity; [F2] also gives $Pf=f$ for $f\in A^2(\Omega)$. [A1, F1, F2, F3, given]

2.1 For $f\in L^2(\Omega)$, [F2] gives $f-Pf\in A^2(\Omega)^\perp$ and $k_w\in A^2(\Omega)$ by [F4]. Hence $\langle f-Pf,k_w\rangle=0$. Applying step 1.1 to $Pf\in A^2(\Omega)$ and using linearity in the first variable, $Pf(w)=\langle Pf,k_w\rangle=\langle f,k_w\rangle$; expanding $k_w(z)$ as $K_\Omega(z,w)$ gives the displayed integral. [A1, F1, F2, F4, step 1.1, step 1.2, given]

3.1 Applying step 1.1 to $k_w$ gives $K_\Omega(w,w)=k_w(w)=\langle k_w,k_w\rangle=\|k_w\|_2^2$. For any $f\in A^2(\Omega)$, [F4] and [F5] imply $|f(w)|^2\le\|f\|_2^2\|k_w\|_2^2$, so the supremum over the unit ball is at most $\|k_w\|_2^2$. If $k_w\ne0$, the unit vector $k_w/\|k_w\|_2$ attains this bound. Any other maximizer must give equality in [F5], hence is linearly dependent on $k_w$; its norm must be $1$, so it is exactly $\lambda k_w/\|k_w\|_2$ with $|\lambda|=1$. If $k_w=0$, step 1.1 gives $f(w)=0$ for every $f\in A^2(\Omega)$, so the supremum is $0$ and every function in the unit ball attains it. [A1, F1, F4, F5, step 1.1, given] ∎
