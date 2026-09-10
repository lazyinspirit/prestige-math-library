---
id: thm-the-kunneth-sequence-splits-nonnaturally
title: "The Kunneth sequence splits nonnaturally"
kind: theorem
status: published
origin: pipeline
deps: ["thm-kunneth-theorem-for-free-complexes-over-a-pid", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid", "thm-free-modules-are-projective-with-choice-boundary", "def-tensor-product-total-complex-of-chain-complexes", "def-axiom-of-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. For free abelian complexes with finite diagonals,
the Kunneth short exact sequence splits after choices, but no natural splitting
is claimed.

## Proof

**Given:** free abelian complexes $C,D$ with finite diagonals, and the Axiom of Choice ([[def-axiom-of-choice]]).

1.1 Write the sequence of [[thm-kunneth-theorem-for-free-complexes-over-a-pid]] as $0\to U_n\xrightarrow\alpha V_n\xrightarrow\beta W_n\to0$, where $U_n=\bigoplus_{p+q=n}H_pC\otimes H_qD$ and $V_n=H_n(C\otimes D)$. The map $\alpha$ is the cycle cross product. [given]

2.1 For $E=C,D$, the exact sequence $0\to Z_pE\to E_p\to B_{p-1}E\to0$ is supplied by [[lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid]]. Under AC its last term is free by [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]], hence projective by [[thm-free-modules-are-projective-with-choice-boundary]]. Choose sections in every degree and both complexes, using AC for this family as well as the free-module lifts. They give retractions $r_p:E_p\to Z_pE$. [step 1.1, choose]

3.1 Let $H(E)$ denote the zero-differential complex with terms $H_pE$, and define $\pi_{E,p}(x)=[r_p(x)]$. This is a chain map: $d_Ex$ is a boundary and a cycle, so $r_{p-1}(d_Ex)=d_Ex$ has zero homology class. On cycles, $\pi_E$ is the usual homology quotient. [step 2.1, algebra]

4.1 Tensor the two chain maps using [[def-tensor-product-total-complex-of-chain-complexes]]. The target $H(C)\otimes H(D)$ has zero differential and degree-$n$ term $U_n$, so the induced homology map is $r:V_n\to U_n$. On a cross-product generator $[z]\otimes[w]$, one has $r\alpha([z]\otimes[w])=[z]\otimes[w]$; therefore $r\alpha=1$. [step 1.1, step 3.1, algebra]

5.1 The restriction $\beta:\ker r\to W_n$ is bijective. Indeed, any lift $v$ of $w$ can be replaced by $v-\alpha r(v)\in\ker r$ without changing its image; and if $v\in\ker r\cap\ker\beta$, exactness gives $v=\alpha(u)$, whence $u=r(v)=0$. Its inverse followed by inclusion is a homomorphism $s:W_n\to V_n$ satisfying $\beta s=1$ and $s\beta=1-\alpha r$. This is the required section. It depends on the selected retractions, and no natural selection is asserted. [step 1.1, step 4.1, algebra] ∎
