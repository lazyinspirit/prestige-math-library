---
id: thm-real-hone-bmo-duality
kind: theorem
title: "Real H1-BMO duality"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 12
deps: [thm-bmo-defines-a-bounded-functional-on-hone, lem-hone-functional-has-compatible-local-ltwo-representatives, lem-the-dual-representative-has-uniform-bmo-oscillation, lem-bmo-classes-are-determined-by-their-atom-pairings, lem-finite-atomic-sums-are-dense-in-hone, lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Theorem 7.40 ((a) and (b)) and the surrounding construction, printed pp. 47-48"
    - title: "Brooke Wilson, Math 581A Classical and Multilinear Harmonic Analysis (University of Washington, Fall 2024), lecture 21"
      url: "https://sites.math.washington.edu/~blwilson/581AFall2024/Lectures/lecture21.pdf"
      locator: "the dyadic atomic decomposition and duality template, scanned pages 1-3"
    - title: "Brooke Wilson, Math 581A Classical and Multilinear Harmonic Analysis (University of Washington, Fall 2024), lecture 22"
      url: "https://sites.math.washington.edu/~blwilson/581AFall2024/Lectures/lecture22.pdf"
      locator: "the concluding duality step, scanned pages 1-2"
---

## Statement

Assume the Axiom of Choice, with the fixed $H^1$ kernel $\varphi$ and auxiliary
order $\widetilde N$ used in
[[lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone]]. The map
$\Phi:\mathrm{BMO}(\mathbb R^n)/\mathbb C\to(H^1(\mathbb R^n))^*$,
$b\mapsto\Lambda_b$ of the preceding theorem is a linear bijection, and there
are constants $0<c_{n,\widetilde N,\varphi}\le
C_{n,\widetilde N,\varphi}<\infty$ with
$c_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}\le\|\Lambda_b\|\le
C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}$ for every class $b$. Thus
$(H^1(\mathbb R^n))^*$ is isomorphic to
$\mathrm{BMO}(\mathbb R^n)/\mathbb C$ with equivalent norms.

## Facts & Assumptions

**Given:** The Axiom of Choice and a bounded functional $\Lambda\in(H^1(\mathbb R^n))^*$, with the map $\Phi$ of [[thm-bmo-defines-a-bounded-functional-on-hone]].

[F1] The map $\Phi$ is linear and bounded: for every $b\in\mathrm{BMO}(\mathbb R^n)$ the functional $\Lambda_b$ satisfies $\Lambda_b(a)=\int ab$ on atoms and $\|\Lambda_b\|\le C_{n,\widetilde N,\varphi}^+\|b\|_{\mathrm{BMO}}$, and $\Lambda_b=0$ for constant $b$ ([[thm-bmo-defines-a-bounded-functional-on-hone]]).

[F2] The atom pairings determine the class: if $\int ab=0$ for every atom $a$, then $b$ is constant almost everywhere; equivalently $\Phi$ is injective ([[lem-bmo-classes-are-determined-by-their-atom-pairings]]).

[F3] For every $\Lambda\in(H^1)^*$ the preceding local representatives produce a locally integrable $u$ with $u-u_Q$ constant almost everywhere on every cube $Q$, where $u_Q\in L^2_0(Q)$ represents $\Lambda|_{L^2_0(Q)}$, and $\|u\|_{\mathrm{BMO}}\le C_{n,\widetilde N,\varphi}^-\|\Lambda\|$ ([[lem-hone-functional-has-compatible-local-ltwo-representatives]], [[lem-the-dual-representative-has-uniform-bmo-oscillation]]).

[F4] The finite atomic sums are dense in $H^1$ ([[lem-finite-atomic-sums-are-dense-in-hone]]), and two bounded functionals agreeing on a dense subspace agree everywhere.

## Proof

**Proof technique:** direct.

1.1 The map $\Phi$ is linear by [F1]; it is bounded with $\|\Lambda_b\|\le C_{n,\widetilde N,\varphi}^+\|b\|_{\mathrm{BMO}}$ by [F1]; and it is injective because a class in its kernel has vanishing pairings with all atoms and is therefore the class of the constants by [F2]. [F1, F2]

2.1 Surjectivity. Let $\Lambda\in(H^1)^*$ and let $u$ be the representative of [F3], so that $\|u\|_{\mathrm{BMO}}\le C_{n,\widetilde N,\varphi}^-\|\Lambda\|$. For an atom $a$ supported in a cube $Q$ one has $a\in L^2_0(Q)$, hence $\Lambda(a)=\int_Qu_Qa=\int_Q(u-c_Q)a=\int ua$ because $\int a=0$ and $u-u_Q=c_Q$ almost everywhere on $Q$; meanwhile $\Lambda_u(a)=\int au$ by the definition of $\Phi$ [F1]. Thus $\Lambda$ and $\Lambda_u$ agree on every atom, hence on every finite atomic sum by linearity, and therefore on all of $H^1$ by density and continuity [F4]; that is, $\Lambda=\Phi(u)$ and $\Phi$ is surjective. [step 1.1, F1, F3, F4]

3.1 The reverse norm bound. Given a class $b$, apply step 2.1 to $\Lambda_b$: there is $u$ with $\Lambda_b=\Phi(u)$ and $\|u\|_{\mathrm{BMO}}\le C_{n,\widetilde N,\varphi}^-\|\Lambda_b\|$. By injectivity of $\Phi$ from step 1.1 and [F2], $b-u$ is constant almost everywhere, so $\|b\|_{\mathrm{BMO}}=\|u\|_{\mathrm{BMO}}\le C_{n,\widetilde N,\varphi}^-\|\Lambda_b\|$; combined with step 1.1 this gives $c_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}\le\|\Lambda_b\|\le C_{n,\widetilde N,\varphi}\|b\|_{\mathrm{BMO}}$ with $c_{n,\widetilde N,\varphi}:=1/C_{n,\widetilde N,\varphi}^-$ and $C_{n,\widetilde N,\varphi}:=C_{n,\widetilde N,\varphi}^+$. [step 1.1, step 2.1, F2]

4.1 Steps 1.1, 2.1 and 3.1 show that $\Phi$ is a linear bijection with the two-sided norm bound, so $(H^1(\mathbb R^n))^*$ is isomorphic to $\mathrm{BMO}(\mathbb R^n)/\mathbb C$ with equivalent norms. The Axiom of Choice is inherited from the construction of $\Lambda_b$ and from the local representatives. [step 1.1, step 2.1, step 3.1] ∎ 
