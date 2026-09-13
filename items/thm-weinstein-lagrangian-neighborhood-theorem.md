---
id: thm-weinstein-lagrangian-neighborhood-theorem
kind: theorem
title: Weinstein Lagrangian neighborhood theorem
status: published
origin: pipeline
deps: ["def-countable-choice", "def-canonical-symplectic-model-near-the-zero-section-of-t-star-l", "thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure", "thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold", "thm-relative-moser-theorem"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Lemma 5.13 and Theorem 5.14 with proof, pp. 62--63
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 8, Theorem 8.4 and proof, pp. 48--49
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $i:L\hookrightarrow(M,\omega)$ is a closed
Lagrangian embedding, then there are neighbourhoods $U$ of $i(L)$ in $M$ and
$V$ of the zero section in $(T^*L,-d\lambda)$ and a symplectomorphism
$\Phi:V\to U$ satisfying $\Phi(0_x)=i(x)$ for every $x\in L$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the closed Lagrangian embedding in the
statement.

[F1] Under the assumed choice principle, $(M,\omega)$ admits a compatible
almost-complex structure. [[thm-every-symplectic-manifold-admits-a-compatible-almost-complex-structure]].

[F2] The cotangent zero section with $-d\lambda$ is the canonical model.
[[def-canonical-symplectic-model-near-the-zero-section-of-t-star-l]].

[F3] Closed embeddings have tubular neighbourhoods, and relative Moser
corrects two forms agreeing as tensors along the submanifold.
[[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]],
[[thm-relative-moser-theorem]].

## Proof

**Proof technique:** direct.

1.1 Choose a compatible $J$ by [F1]. Then $J(TL)$ is a Lagrangian complement to $TL$: it is Lagrangian because $J$ preserves $\omega$, and if $Ju\in TL$ then $0=\omega(u,Ju)=g_J(u,u)$ forces $u=0$. The map $J(TL)\to T^*L$, $w\mapsto\alpha_w$ with $\alpha_w(u)=\omega(u,w)$, is an isomorphism. [F1, given, algebra]

2.1 At the zero section, $T(T^*L)=TL\oplus T^*L$ and $\omega_{\mathrm{can}}((u,\alpha),(v,\beta))=\beta(u)-\alpha(v)$. Hence step 1.1 gives a symplectic bundle isomorphism $TM|_L\to T(T^*L)|_L$ equal to the identity on $TL$. Use tubular neighbourhoods from [F3] to realize it as the differential of a diffeomorphism $h$ between neighbourhoods, fixed on $L$. [F2, F3, step 1.1, construct]

3.1 The forms $h^*\omega$ and $\omega_{\mathrm{can}}$ agree as tensors along the zero section. Their convex interpolation is symplectic after shrinking, so relative Moser in [F3] gives a correction fixed on the zero section. Composing it with $h$ yields $\Phi$ and proves the claim, including noncompact closed $L$ through variable-radius neighbourhoods. [F3, step 2.1] ∎
