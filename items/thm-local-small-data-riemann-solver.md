---
id: thm-local-small-data-riemann-solver
kind: theorem
title: "Local small-data Riemann solver near a strictly hyperbolic state"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-hyperbolic-system-and-characteristic-families
  - def-rankine-hugoniot-and-lax-shocks
  - lem-rankine-hugoniot-jump-is-a-weak-solution
  - lem-local-rarefaction-fan
  - lem-local-characteristic-shock-curve
  - lem-linearly-degenerate-characteristic-contact
  - def-mixed-characteristic-wave-curve
  - lem-mixed-wave-curves-are-c1
  - thm-euclidean-implicit-function-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Alberto Bressan, Hyperbolic Conservation Laws: An Illustrated Tutorial"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§§3.3–3.4, printed pp. 24–29: elementary waves and the local wave-composition construction"
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Chs. 7–8, §§7.6, 8.1–8.3, printed pp. 79–87: local system Riemann problems and integral curves"
---

## Statement

Let $f:G\to\mathbb R^m$ be $C^3$, let $\bar u\in G$, and suppose on an open
neighborhood $N$ of $\bar u$ the system is strictly hyperbolic and each
characteristic field is either genuinely nonlinear or linearly degenerate. Then
there are $\delta,\eta>0$ such that, whenever
$\|u_L-\bar u\|_2<\delta$ and $\|u_R-\bar u\|_2<\delta$, there is a unique
strength vector $\sigma\in(-\eta,\eta)^m$ satisfying
$$u_R=\Psi_m(\sigma_m;\Psi_{m-1}(\sigma_{m-1};\cdots\Psi_1(\sigma_1;u_L)\cdots)).$$
For the Riemann initial datum $u_0(x)=u_L$ for $x<0$ and $u_R$ for $x>0$,
the corresponding ordered superposition, with waves in increasing family
order, is a self-similar weak solution, meaning it has the form
$u(t,x)=q(x/t)$ for $t>0$. Its nonzero
genuinely nonlinear waves are rarefactions when $\sigma_iD\lambda_i r_i>0$
and strict Lax shocks when $\sigma_iD\lambda_i r_i<0$; its linearly-degenerate
waves are contacts. The neighborhoods are local to $f,N,\bar u$; no arbitrary
large-data solution or uniqueness among all weak solutions is asserted.

## Facts & Assumptions

**Given:** A $C^3$ flux, a strictly hyperbolic base state, and a neighborhood on which each field is genuinely nonlinear or linearly degenerate.

[F1] [[def-hyperbolic-system-and-characteristic-families]]: the ordered eigenvalues are simple, the right eigenvectors form characteristic families, and each field has the stated nonlinearity type.

[F2] [[def-mixed-characteristic-wave-curve]]: $\Psi_i$ connects states by the local $i$-rarefaction/shock/contact curve.

[F3] [[lem-mixed-wave-curves-are-c1]]: each $\Psi_i$ is $C^1$ and $D_\sigma\Psi_i(0;\bar u)=r_i(\bar u)$.

[F4] [[thm-euclidean-implicit-function-theorem]]: a $C^1$ equation with invertible derivative in its unknown block has a unique local solution in that block.

[F5] [[lem-rankine-hugoniot-jump-is-a-weak-solution]]: each shock or contact satisfying Rankine–Hugoniot is a weak moving jump.

[F6] [[lem-local-characteristic-shock-curve]]: small shocks in the compressive strength direction satisfy the strict Lax inequalities.

[F7] [[lem-linearly-degenerate-characteristic-contact]]: a linearly-degenerate wave is a Rankine–Hugoniot contact.

[F8] [[lem-local-rarefaction-fan]]: when the characteristic speed increases along the curve, its self-similar fan solves the system and has the prescribed Riemann trace.

## Proof

1.1 Define $\mathcal W(u_L,\sigma)=\Psi_m(\sigma_m;\Psi_{m-1}(\sigma_{m-1};\cdots\Psi_1(\sigma_1;u_L)\cdots))$ and $F(u_L,u_R,\sigma)=\mathcal W(u_L,\sigma)-u_R$. By [F2] and [F3], $F$ is $C^1$, $F(\bar u,\bar u,0)=0$, and the columns of $D_\sigma F(\bar u,\bar u,0)$ are $r_1(\bar u),\ldots,r_m(\bar u)$. [given, F1, F2, F3, construct]

2.1 These eigenvectors are linearly independent by strict hyperbolicity, so $D_\sigma F$ is invertible. Applying [F4] with parameter $(u_L,u_R)$ gives neighborhoods $P$ of $(\bar u,\bar u)$ and $Q$ of $0$, and a unique $C^1$ vector $\sigma(u_L,u_R)\in Q$ for every pair in $P$. If $u_L=u_R$, then $\sigma=0$ solves the composition equation by [F2], so this is the unique strength vector. Choose $\eta>0$ with $(-\eta,\eta)^m\subseteq Q$. Since the IFT solution $\sigma(u_L,u_R)$ is continuous and vanishes at $(\bar u,\bar u)$, shrink $\delta>0$ so both radius-$\delta$ state balls lie in $P$ and every corresponding IFT solution lies in $(-\eta,\eta)^m$. [step 1.1, F1, F2, F3, F4, choose]

3.1 Shrink these neighborhoods so all intermediate states stay in $N$. Since $N$ is a neighborhood of $\bar u$ and there are finitely many continuous wave curves, this is possible. The characteristic-speed gaps at $\bar u$ are positive; continuity of eigenvalues, shock speeds and rarefaction speeds lets us further shrink the neighborhoods until the speed range of each family lies in a disjoint interval ordered by $i$. [step 2.1, F1, F2, algebra, choose]

4.1 For each strength, use the rarefaction fan from [F8] when $\sigma_iD\lambda_i r_i>0$, the Lax shock from [F6] when it is negative, and the contact from [F7] for a linearly-degenerate family. Each shock/contact satisfies Rankine–Hugoniot, hence is a weak jump by [F5]. [F5, F6, F7, F8, step 3.1, algebra]

5.1 The family speed intervals from step 3.1 are disjoint and ordered, so the elementary waves paste into a single-valued self-similar profile from $u_L$ to $u_R$. Each fan satisfies the equation classically by [F8]; integration by parts across each shock/contact gives boundary coefficient $[f]-s[u]=0$ by [F5], [F6], and [F7], and the continuous fan edges contribute no jump term. Thus the pasted profile is a distributional weak solution. Its wave speeds are bounded, so its nonconstant region has length at most a constant times $t$ and its $L^1_{\rm loc}$ trace is the Riemann step as $t\downarrow0$. The endpoint states match by the composition equation in step 1.1. Uniqueness of $\sigma$ from step 2.1 gives uniqueness of this ordered local elementary-wave construction, not of arbitrary weak solutions. [given, F2, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1, step 4.1] ∎
