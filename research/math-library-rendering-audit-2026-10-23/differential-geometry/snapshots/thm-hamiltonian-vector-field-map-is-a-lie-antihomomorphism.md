---
id: thm-hamiltonian-vector-field-map-is-a-lie-antihomomorphism
kind: theorem
title: The Hamiltonian vector-field map is a Lie antihomomorphism
status: published
origin: pipeline
deps: ["def-poisson-bracket-on-a-symplectic-manifold", "prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed", "prop-cartan-commutator-identities"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Proposition 18.3 and discussion after Definition 18.5, pp. 108--109
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

With $\iota_{X_H}\omega=dH$ and
$\{F,G\}=\omega(X_F,X_G)$,

$$[X_F,X_G]=-X_{\{F,G\}}.$$

## Facts & Assumptions

**Given:** Smooth functions $F,G$ on $(M,\omega)$.

[F1] $X_F$ is symplectic, so $\mathcal L_{X_F}\omega=0$. [[prop-a-vector-field-is-symplectic-iff-iota-x-omega-is-closed]].

[F2] Cartan calculus gives $\iota_{[X,Y]}=\mathcal L_X\iota_Y-\iota_Y\mathcal L_X$. [[prop-cartan-commutator-identities]].

[F3] $X_F(G)=-\{F,G\}$ in the library convention. [[def-poisson-bracket-on-a-symplectic-manifold]].

## Proof

**Proof technique:** direct.

1.1 Apply [F2] to $\omega$: $$\iota_{[X_F,X_G]}\omega=\mathcal L_{X_F}(dG)-\iota_{X_G}(\mathcal L_{X_F}\omega)=d(X_FG)=-d\{F,G\}.$$ [F1, F2, F3, given]

2.1 The right side is $\iota_{-X_{\{F,G\}}}\omega$. Nondegeneracy makes contraction injective, so the vector fields are equal. [step 1.1] ∎
