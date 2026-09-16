---
id: prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal
kind: proposition
title: Derivations form a Lie algebra and inner derivations an ideal
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-derivation-of-a-lie-algebra, def-lie-subalgebra-ideal-and-center, def-lie-algebra-over-a-field]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, derivations in §3.2"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
---

## Statement

$\operatorname{Der}(\mathfrak g)$ is a Lie subalgebra of
$\operatorname{End}_k(\mathfrak g)$ under the commutator. The map
$\operatorname{ad}:\mathfrak g\to\operatorname{Der}(\mathfrak g)$ is a
Lie-algebra homomorphism, its image is an ideal, and
$\ker(\operatorname{ad})=Z(\mathfrak g)$.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ over $k$.

[L1] Derivations satisfy the Lie Leibniz law of [[def-derivation-of-a-lie-algebra]].

[L2] The bracket of $\mathfrak g$ is alternating and satisfies Jacobi ([[def-lie-algebra-over-a-field]]).

[L3] The center and ideal conditions are those of [[def-lie-subalgebra-ideal-and-center]].

## Proof

**Proof technique:** direct.

1.1 Derivations form a linear subspace of $\operatorname{End}_k(\mathfrak g)$, because the Leibniz identity is linear in $D$. For derivations $D,E$, expansion of $(DE-ED)[x,y]$ gives $[(DE-ED)x,y]+[x,(DE-ED)y]$: the two cross terms $[Dx,Ey]$ and $[Ex,Dy]$ occur once with each sign and cancel. Hence $[D,E]=DE-ED$ is a derivation. [L1, algebra]

1.2 Jacobi rewritten as $[x,{[y,z]}]-[y,{[x,z]}]=[{[x,y]},z]$ says $[\operatorname{ad}_x,\operatorname{ad}_y]=\operatorname{ad}_{[x,y]}$. It also says $\operatorname{ad}_x[y,z]=[\operatorname{ad}_xy,z]+[y,\operatorname{ad}_xz]$, so every $\operatorname{ad}_x$ is a derivation and $\operatorname{ad}$ is a Lie homomorphism. [L2, algebra]

2.1 The endomorphism commutator is bilinear and alternating, and its Jacobi identity follows by expanding the six triple composites. Therefore the closed linear subspace in step 1.1 is a Lie subalgebra. [step 1.1, algebra]

2.2 If $D$ is any derivation, then for every $y$, $[D,\operatorname{ad}_x](y)=D[x,y]-[x,Dy]=[Dx,y]$; hence $[D,\operatorname{ad}_x]=\operatorname{ad}_{Dx}$. Thus the inner derivations form an ideal of $\operatorname{Der}(\mathfrak g)$. [L1, step 1.2]

3.1 Finally, $x\in\ker(\operatorname{ad})$ exactly when $[x,y]=0$ for every $y$, which is exactly $x\in Z(\mathfrak g)$ by [L3]. For an abelian algebra the inner ideal is zero; for the zero algebra all assertions remain valid. [L3, algebra] ∎
