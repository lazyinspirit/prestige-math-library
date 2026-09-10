---
id: prop-positive-tor-vanishes-when-the-resolved-variable-is-projective
title: "Positive Tor vanishes when the resolved variable is projective"
kind: proposition
status: published
origin: pipeline
deps: ["def-tor-by-resolving-the-left-module", "def-tor-by-resolving-the-right-module", "def-projective-module", "thm-universal-property-of-module-tensor-products"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
    - title: "Stacks Project, Projective modules, Lemma 10.77.2 (splitting argument)"
      url: https://stacks.math.columbia.edu/tag/05CD
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
    model: Codex
    verdict: locally-repaired
    date: 2026-09-10
    scope: "Owner-authorized finite-degree splitting repair for arbitrary supplied resolutions; no independent judge"
    delegated_by: owner
---

## Statement

If the variable being resolved is projective, its resolution-defined $\operatorname{Tor}^R_i$ vanishes for every $i>0$.

This holds for every supplied projective resolution, over an arbitrary unital
ring, without AC or dependent choice.

## Facts & Assumptions

[F1] Projectivity is the lifting property for surjective module maps ([[def-projective-module]]); the right-module version uses the same lifting property with right-linear maps.

[L1] Tensor maps induced by module homomorphisms exist uniquely, and preserve sums, identities and composition: check these identities on elementary tensors using [[thm-universal-property-of-module-tensor-products]].

[F2] The two resolution constructions are the homology of the supplied tensored complexes ([[def-tor-by-resolving-the-left-module]], [[def-tor-by-resolving-the-right-module]]).

## Proof

**Given:** a projective left module $M$, a right module $N$, a supplied projective resolution $P_\bullet\to M$, and an integer $i>0$.

1.1 Put $K_{-1}=M$, let $q_0:P_0\to K_{-1}$ be the augmentation, and put $K_0=\ker q_0$. For $j\ge1$, exactness factors the differential as $d_j=\iota_{j-1}q_j$, where $q_j:P_j\twoheadrightarrow K_{j-1}$ is surjective, $K_j=\ker q_j$, and $\iota_j:K_j\hookrightarrow P_j$ is inclusion. [given, F2]

2.1 If $K_{j-1}$ is projective, [F1] applied to its identity gives a section $s_j:K_{j-1}\to P_j$ of $q_j$. The map $p\mapsto p-s_jq_j(p)$ takes values in $K_j$; write it $r_j:P_j\to K_j$. Then $r_j\iota_j=1$ and $\iota_jr_j+s_jq_j=1$. A retract of a projective module is projective: for $f:K_j\to B$ and a surjection $E\to B$, lift $fr_j:P_j\to B$ and restrict the lift along $\iota_j$. Thus $K_j$ is projective. [F1, step 1.1, algebra]

3.1 Starting with the projective $K_{-1}=M$, repeat step 2.1 through $j=i+1$. This is a finite succession of existential choices for the fixed integer $i$, not a simultaneous choice of splittings in all degrees. It needs neither AC nor dependent choice. [given, step 2.1]

4.1 Write $T(f)=1_N\otimes f$. If $z\in N\otimes_RP_i$ is a cycle, then $T(\iota_{i-1})T(q_i)z=0$. Since $T(r_{i-1})T(\iota_{i-1})=1$, it follows that $T(q_i)z=0$. The identity from step 2.1 therefore gives $z=T(\iota_i)T(r_i)z$. [L1, step 1.1, step 2.1, step 3.1, algebra]

5.1 Set $w=T(s_{i+1})T(r_i)z\in N\otimes_RP_{i+1}$. Then $T(d_{i+1})w=T(\iota_i)T(q_{i+1})T(s_{i+1})T(r_i)z=T(\iota_i)T(r_i)z=z$. Every cycle is a boundary, so $H_i(N\otimes_RP_\bullet)=0$. [L1, step 1.1, step 2.1, step 4.1, algebra]

6.1 For a projective right module $N$ and any supplied right projective resolution $Q_\bullet\to N$, perform the same construction with right-linear maps and apply $T(f)=f\otimes1_M$. The identities in steps 4.1 and 5.1 are unchanged and give $H_i(Q_\bullet\otimes_RM)=0$. Since $i>0$ was arbitrary, [F2] gives both claimed vanishings for every supplied resolution, without selecting a family of splittings over all $i$. [F1, F2, L1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎
