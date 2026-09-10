---
id: thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic
title: "The left and right projective constructions of Tor are naturally isomorphic"
kind: theorem
status: published
origin: pipeline
deps: ["def-tor-by-resolving-the-left-module", "def-tor-by-resolving-the-right-module", "lem-the-rows-of-the-augmented-tensor-double-complex-are-exact", "lem-the-columns-of-the-augmented-tensor-double-complex-are-exact", "def-tensor-double-complex-of-two-projective-resolutions", "thm-projective-comparison-map-exists", "thm-projective-comparison-maps-are-unique-up-to-chain-homotopy", "thm-long-exact-sequence-in-homology", "def-dependent-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
  verified:
    model: codex
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local DC dependency-interface repair; no independent judge
    delegated_by: owner
---

## Statement

Assume the Axiom of Dependent Choice ([[def-dependent-choice]]). For every right $R$-module $N$ and left
$R$-module $M$ with supplied projective resolutions $Q_\bullet\to N$ and
$P_\bullet\to M$, there is a natural isomorphism
$H_i(N\otimes_RP_\bullet)\cong H_i(Q_\bullet\otimes_RM)$.

## Proof

**Given:** the first-quadrant double complex $K_{p,q}=Q_p\otimes_RP_q$ with finite direct-sum totalization.

1.1 The augmentations give degreewise surjective chain maps $a:\operatorname{Tot}K\to N\otimes_RP_\bullet$ and $b:\operatorname{Tot}K\to Q_\bullet\otimes_RM$, supported respectively on $p=0$ and $q=0$. Their surjectivity and exact augmented fixed-$q$ and fixed-$p$ complexes follow from [[lem-the-columns-of-the-augmented-tensor-double-complex-are-exact]] and [[lem-the-rows-of-the-augmented-tensor-double-complex-are-exact]], respectively. The differential is $d_h+d_v$, with $d_v=(-1)^p(1\otimes d_P)$ as in [[def-tensor-double-complex-of-two-projective-resolutions]]. [given, construct]

2.1 The kernel of $a$ is the total of the double complex obtained by replacing $K_{0,q}$ by $\ker(Q_0\otimes P_q\to N\otimes P_q)$. Every fixed-$q$ horizontal complex is exact. For a total cycle $z$ of degree $n\geq0$, take its largest nonzero $q$ component $z_{p,q}$. The cycle equation at that $q$ says $d_h z_{p,q}=0$, because the next higher $q$ component is zero. Horizontal exactness gives $y_{p+1,q}$ with $d_h y=z_{p,q}$. Subtracting $d y$ removes that component and introduces only a component at $q-1$. Repeating terminates at $q=0$ and expresses $z$ as a boundary. Thus $\ker a$ is acyclic, including degree zero; negative degrees are zero. This is the filtration by $q$, not by $p$. [step 1.1, algebra]

2.2 The kernel of $b$ is obtained by replacing $K_{p,0}$ by $\ker(Q_p\otimes P_0\to Q_p\otimes M)$. Its fixed-$p$ vertical complexes are exact, with multiplication of their differentials by $(-1)^p$ harmless. Now eliminate a cycle's largest $p$ component by solving $d_v y=z_{p,q}$ in bidegree $(p,q+1)$. Subtracting $d y$ leaves only lower $p$ components; finitely many repetitions show that $\ker b$ is acyclic. This uses the filtration by $p$, not by $q$. [step 1.1, algebra]

3.1 The short exact sequences of each kernel, total complex and edge, together with [[thm-long-exact-sequence-in-homology]], make both $a$ and $b$ quasi-isomorphisms. Hence $$H_i(N\otimes_RP_\bullet)\xleftarrow{H_i(a)}H_i(\operatorname{Tot}K)\xrightarrow{H_i(b)}H_i(Q_\bullet\otimes_RM)$$ gives the asserted isomorphism $H_i(b)H_i(a)^{-1}$. [step 2.1, step 2.2, algebra]

4.1 Under DC, maps of modules lift to maps of their supplied resolutions by [[thm-projective-comparison-map-exists]]. The resulting tensor double-complex maps commute with $a,b$, proving naturality of the ratio in step 3.1. Two lifts are chain-homotopic by [[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]. Tensor homotopies in the first factor are $h_Q\otimes1$ and in the second factor $(-1)^p1\otimes h_P$; direct substitution gives the total homotopy equation. Thus induced homology maps are independent of lifts. Taking module identities also gives independence and coherence under change of the supplied resolutions. [step 3.1, algebra] ∎
