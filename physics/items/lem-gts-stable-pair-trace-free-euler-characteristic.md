---
id: lem-gts-stable-pair-trace-free-euler-characteristic
kind: lemma
title: Trace-free Euler characteristic of a stable-pair complex
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds
  - thm-grothendieck-riemann-roch-for-projective-morphisms
  - lem-k-zero-vector-bundles-versus-coherent-sheaves
  - def-chern-character-and-todd-class
  - thm-normalization-reduced-curve-exists-finite
  - def-axiom-of-choice
dependency_roles:
  def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds: mathematical-premise
  thm-grothendieck-riemann-roch-for-projective-morphisms: mathematical-premise
  lem-k-zero-vector-bundles-versus-coherent-sheaves: mathematical-premise
  def-chern-character-and-todd-class: mathematical-premise
  thm-normalization-reduced-curve-exists-finite: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "R. Pandharipande and R. P. Thomas, Curve Counting via Stable Pairs in the Derived Category"
      url: "https://arxiv.org/pdf/0707.2348v5"
      locator: "Section 2.3, Theorem 2.14: the trace-free Euler-characteristic virtual-dimension formula; the proof here reconstructs its Riemann–Roch calculation."
dependency_level: 1
---

## Statement

Assume the inherited Axiom of Choice. Let $X$ be a nonsingular projective threefold over $\mathbb C$, let $s:\mathcal O_X\to F$ be a stable pair, and put $I^\bullet=[\mathcal O_X\to F]$ in degrees $0,1$. Write $\beta=[F]_1$ for the integral one-cycle with coefficient at each support component equal to the generic length of $F$. Let $R\operatorname{Hom}_X(I^\bullet,I^\bullet)_0$ denote the trace-free summand of its derived global endomorphism complex. Then
$
-\chi\bigl(R\operatorname{Hom}_X(I^\bullet,I^\bullet)_0\bigr)=\int_\beta c_1(T_X).
$
This is an Euler-characteristic calculation; it does not assert the perfect-obstruction-theory axioms or construct an integral virtual class.

## Facts & Assumptions

**Given:** $X,F,s,I^\bullet,\beta$ as in the Statement, and the Axiom of Choice inherited from the algebraic-geometric suppliers.

[F1] [[def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds]] supplies the pair convention, purity, the one-cycle and the cohomological placement.

[F2] On regular $X$, coherent and vector-bundle $K$-groups agree, so the coherent sheaves used here have their perfect-complex classes. Chern character is additive and multiplicative, derived dual changes the sign of its odd-degree components, and $\operatorname{td}_1(T_X)=c_1(T_X)/2$. [[lem-k-zero-vector-bundles-versus-coherent-sheaves]] [[def-chern-character-and-todd-class]]

[F3] Grothendieck–Riemann–Roch for the projective maps to $X$ used below and for $X\to\operatorname{Spec}\mathbb C$ identifies the pushforward characters and the Euler characteristic with the degree of $\operatorname{ch}(\cdot)\operatorname{td}(T_X)$. [[thm-grothendieck-riemann-roch-for-projective-morphisms]]

[F4] A reduced curve has a finite regular normalization. It is used here over $\mathbb C$, where its regular components are smooth. [[thm-normalization-reduced-curve-exists-finite]] The choice assumption is [[def-axiom-of-choice]].

## Proof

1.1 We first justify the character of the one-dimensional sheaf, including its multiplicities. A power of the radical ideal of the support annihilates $F$, so its finite filtration by those powers has quotients on the reduced support. Remove finitely many intersections of distinct components; each quotient then has a generic rank on each integral support curve. Comparison with its finite normalization has kernel and cokernel supported at finitely many points. On a normalized smooth curve a coherent sheaf of generic rank $r$, modulo its finite-support part, differs in its Grothendieck class from $r\mathcal O$ only by finite-support classes: choose a rational generic basis, clear its finitely many poles by an effective divisor, and compare the resulting rank-$r$ inclusion with its finite-length cokernel; the divisor exact sequence compares each twist with $\mathcal O$. Adding the filtration shows that in $G_0(X)$ modulo finite-support classes, $[F]$ is the sum of the normalized curve structure-sheaf pushforwards with coefficients equal to its generic lengths. These coefficients are exactly $\beta$. [F1, F2, F4, given, algebra]

2.1 Apply GRR to a normalization map $j:\widetilde C\to X$. Its formula $\operatorname{ch}(j_*\mathcal O_{\widetilde C})\operatorname{td}(T_X)=j_*\operatorname{td}(T_{\widetilde C})$ has no terms of codimension zero or one on the right, and its codimension-two term is $j_*[\widetilde C]=[C]$. The same formula for a closed point has no term below codimension three. Since the Todd class starts with $1$, step 1.1 proves $\operatorname{ch}_0(F)=\operatorname{ch}_1(F)=0$ and $\operatorname{ch}_2(F)=\beta$. Write $\operatorname{ch}(F)=\beta+\gamma$ with $\gamma\in A^3(X)_{\mathbb Q}$. [F2, F3, step 1.1, algebra]

3.1 In $K_0(X)$, $[I^\bullet]=[\mathcal O_X]-[F]$. Hence $\operatorname{ch}(I^\bullet)=1-\beta-\gamma$ and $\operatorname{ch}((I^\bullet)^\vee)=1-\beta+\gamma$. Multiplication and truncation above dimension three give $\operatorname{ch}((I^\bullet)^\vee\otimes^{\mathbf L}I^\bullet)=1-2\beta$. The identity and trace maps split the endomorphism complex: their composite on $\mathcal O_X$ is multiplication by the virtual rank of $I^\bullet$, which is $1$. Thus the trace-free derived endomorphism class has character $-2\beta$, after subtracting the scalar $\mathcal O_X$ summand. The trace statement can also be checked on any finite vector-bundle resolution: the evaluation trace of the identity is the alternating sum of its ranks. [F2, step 2.1, algebra]

4.1 GRR for $X\to\operatorname{Spec}\mathbb C$ now gives $\chi(R\operatorname{Hom}(I^\bullet,I^\bullet)_0)=\int_X(-2\beta)\operatorname{td}(T_X)=-\int_X\beta c_1(T_X)$. Only $\operatorname{td}_1$ can contribute because $\beta$ has codimension two on a threefold. Negating gives the claimed formula; its right-hand side is the integer degree of the integral cycle $\beta$ intersected with the Cartier class $c_1(T_X)$. No POT or virtual-cycle comparison is used in this computation. [F2, F3, step 3.1, algebra] ∎
