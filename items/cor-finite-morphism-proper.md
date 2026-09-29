---
id: cor-finite-morphism-proper
kind: corollary
title: Finite morphisms are proper
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - thm-finite-morphism-integral-closed
  - def-proper-morphism
  - def-finite-morphism-schemes
  - lem-finite-morphism-affine
  - lem-affine-morphism-separated
  - def-finite-type-and-module-finite-algebras
  - def-locally-finite-type-and-finite-type-morphism
  - cor-affine-scheme-quasi-compact
  - lem-base-change-quasi-compact-morphisms
  - def-scheme
  - def-axiom-of-choice
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.44.4 and Lemma 29.45.4 (tag 01WG)"
      url: https://stacks.math.columbia.edu/tag/01WG
    - title: "The Stacks Project, Morphisms of Schemes, Lemmas 29.20.1-29.20.3 (tag 01K2)"
      url: https://stacks.math.columbia.edu/tag/01K2
---

## Statement

Assume the Axiom of Choice. Every finite morphism of schemes is proper. No
Noetherian, reducedness or nonemptiness hypothesis is used, the empty morphism
and the zero ring are included, and the Axiom of Choice enters only through the
universal closedness of finite morphisms.

## Facts & Assumptions

**Given:** The Axiom of Choice and a finite morphism $f:X\to S$.

[F1] A morphism $f:X\to S$ is **finite** when for every affine open $U=\operatorname{Spec}A\subseteq S$ the inverse image is affine, $f^{-1}(U)=\operatorname{Spec}B$, and the induced $A$-algebra $B$ is module-finite over $A$; the zero ring is allowed. ([[def-finite-morphism-schemes]])

[F2] Every finite morphism is affine; the finite-to-affine implication follows directly from the definition and is choice-free. ([[lem-finite-morphism-affine]])

[F3] Every affine morphism of schemes is separated. ([[lem-affine-morphism-separated]])

[F4] If $b_1,\dots,b_n$ generate an $R$-algebra $A$ as an $R$-module then $R[b_1,\dots,b_n]$, being a subring containing $\eta_A(R)$ and every $b_i$, contains every $R$-linear combination $\sum_i\eta_A(r_i)b_i$ and hence all of $A$; so $A=R[b_1,\dots,b_n]$ is of finite type over $R$. ([[def-finite-type-and-module-finite-algebras]])

[F5] $f$ is **locally of finite type** if every point of $X$ has an affine open neighbourhood $U$ with $f(U)$ contained in an affine open $V=\operatorname{Spec}A\subseteq S$ such that $U=\operatorname{Spec}B$ and $A\to B$ is of finite type; $f$ is **of finite type** if it is locally of finite type and quasi-compact. ([[def-locally-finite-type-and-finite-type-morphism]])

[F6] Every affine scheme is quasi-compact. ([[cor-affine-scheme-quasi-compact]])

[F7] A morphism $f:X\to S$ is quasi-compact if and only if the inverse image of every affine open of $S$ is quasi-compact, and equivalently if and only if some affine open cover of $S$ has quasi-compact inverse images. ([[lem-base-change-quasi-compact-morphisms]])

[F8] A scheme is a locally ringed space in which every point has an open neighbourhood which, with the restricted structure sheaf, is an affine scheme. ([[def-scheme]])

[F9] Assume AC. Every finite morphism is universally closed. ([[thm-finite-morphism-integral-closed]])

[F10] A morphism is **proper** if and only if it is separated, of finite type and universally closed. ([[def-proper-morphism]])

[F11] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct: finiteness gives affineness and separatedness, the affine charts give local finite typeness, affineness over affine opens gives quasi-compactness, and the finite-integral theorem gives universal closedness.

1.1 By [F2] the morphism $f$ is affine: for every affine open $U=\operatorname{Spec}A\subseteq S$ the inverse image $f^{-1}(U)$ is affine. This implication uses only the definition of finiteness and no choice. [F1, F2]

1.2 The morphism $f$ is locally of finite type. Let $x\in X$. By [F8] the point $f(x)$ has an affine open neighbourhood $V=\operatorname{Spec}A\subseteq S$; then $U:=f^{-1}(V)$ is affine, say $U=\operatorname{Spec}B$, and contains $x$, and $B$ is module-finite over $A$ by [F1]. Hence $B$ is of finite type over $A$ by [F4], and $f(U)\subseteq V$; so $x$ has a finite-type affine chart over an affine open of $S$, and since $x$ was arbitrary, $f$ is locally of finite type by [F5]. [F1, F4, F5, F8]

1.3 The morphism $f$ is quasi-compact. For every affine open $V\subseteq S$ the inverse image $f^{-1}(V)$ is affine by [F1] and hence quasi-compact by [F6]; by the criterion [F7] this makes $f$ quasi-compact. [F1, F6, F7]

2.1 By [F3] the affine morphism $f$ is separated. [F3, step 1.1]

2.2 By [F5] the morphism $f$ is of finite type, being locally of finite type by step 1.2 and quasi-compact by step 1.3. [F5, step 1.2, step 1.3]

2.3 By [F9] the finite morphism $f$ is universally closed; this is the only step that uses the Axiom of Choice. [F9, step 1.1]

3.1 Steps 2.1, 2.2 and 2.3 give separatedness, finite typeness and universal closedness, so $f$ is proper by [F10]. The Axiom of Choice [F11] enters exactly through [F9], whose proof uses lying over for the integral maps $A\to B$; the finite-to-affine implication of [F2] used in step 1.1 is choice-free by its statement, and no further selection occurs. The empty morphism is included: if $X=\varnothing$ then $f^{-1}(U)=\varnothing=\operatorname{Spec}0$ over any affine $U$, and the zero ring is module-finite over $A$ by [F1], so $f$ is finite and the same argument applies; the finite-type chart condition of step 1.2 is vacuous in that case and the criterion of step 1.3 is satisfied by the empty scheme, which is affine and hence quasi-compact. [F1, F2, F9, F10, F11, step 2.1, step 2.2, step 2.3] ∎
