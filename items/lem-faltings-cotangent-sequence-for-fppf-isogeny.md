---
id: lem-faltings-cotangent-sequence-for-fppf-isogeny
kind: lemma
title: "Invariant cotangent modules of an fppf group quotient form a right-exact sequence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-group-scheme-over-a-scheme
  - def-pullback-module-ringed-spaces
  - lem-differentials-commute-base-change-schemes
  - thm-right-exactness-of-tensor-products
  - thm-transitivity-sequence-schemes
justified_by: []
proof_strategy: direct
axiom_use: "The proof is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings, ‘Endlichkeitssätze für abelsche Varietäten über Zahlkörpern,’ §4, Lemma 5"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/355/9132-elc.pdf"
      locator: "Printed p. 358; the isogeny differential map has kernel-cotangent cokernel."
verification:
  precheck: pending
---

## Statement

Let $S$ be a scheme, let $G_1,G_2$ be smooth $S$-group schemes with identity sections $e_1,e_2$, and let $\phi:G_1\to G_2$ be a faithfully flat homomorphism. Put $H=G_1\times_{G_2,e_2}S$ and assume that $H$ is finite flat over $S$. Write $\omega_i=e_i^*\Omega^1_{G_i/S}$ and $\omega_H=e_H^*\Omega^1_{H/S}$. Then the sequence
$$\omega_2\xrightarrow{\phi^*}\omega_1\longrightarrow\omega_H\longrightarrow0$$
is exact; injectivity of the first map is not asserted.

## Statement references

[[def-group-scheme-over-a-scheme]]

[[def-finite-flat-group-scheme-and-cartier-dual]]

[[thm-transitivity-exact-sequence-differentials]]

[[lem-differentials-commute-base-change-schemes]]

[Stacks Project, Algebra, Lemma 10.131.7](https://stacks.math.columbia.edu/download/algebra.pdf)

[Stacks Project, Morphisms, Lemma 29.33.10](https://stacks.math.columbia.edu/tag/01UY)

## Facts & Assumptions

**Given:** A scheme $S$, smooth $S$-group schemes $G_1,G_2$, a faithfully flat homomorphism $\phi:G_1\to G_2$, and its finite flat kernel $H$.

[F1] [[def-group-scheme-over-a-scheme]]: each $G_i$ is a group object over $S$, and $\phi$ respects multiplication and identity sections.

[F2] [[def-finite-flat-group-scheme-and-cartier-dual]]: $H$ is finite locally free over $S$.

[F3] [[lem-differentials-commute-base-change-schemes]]: the relative differential sheaf of a fibre product is the pullback of the relative differential sheaf.

[F4] [[thm-transitivity-sequence-schemes]]: for morphisms $S\to G_2\to G_1$, the sequence $\phi^*\Omega^1_{G_2/S}\to\Omega^1_{G_1/S}\to\Omega^1_{G_1/G_2}\to0$ is right-exact.

[F5] [[def-pullback-module-ringed-spaces]] and [[thm-right-exactness-of-tensor-products]]: pullback of modules is tensor product with the local structure map, and this tensor operation preserves right-exact sequences.

## Proof

**Given:** [F1]–[F5] and the stated fppf quotient square.

1.1 The fibre of $\phi$ over the identity section $e_2:S\to G_2$ is the kernel $H$, with its identity section $e_H$. By [F3], pulling $\Omega^1_{G_1/G_2}$ back along $H\hookrightarrow G_1$ identifies it with $\Omega^1_{H/S}$. Pulling further along $e_H$ identifies $e_1^*\Omega^1_{G_1/G_2}$ with $\omega_H$. [F1, F3, given, algebra]

1.2 Pull back the right-exact transitivity sequence [F4] along $e_1$. Pullback of modules is right-exact by [F5], and $\phi\circ e_1=e_2$, so the resulting sequence is $\omega_2\xrightarrow{\phi^*}\omega_1\to e_1^*\Omega^1_{G_1/G_2}\to0$. [F1, F4, F5, step 1.1, algebra]

2.1 Substitute $e_1^*\Omega^1_{G_1/G_2}\cong\omega_H$ from step 1.1 into step 1.2. This gives the asserted right-exact sequence and makes no injectivity claim for $\phi^*$. [step 1.1, step 1.2, algebra] ∎

## Remarks

The displayed square is Cartesian by the definition $H=G_1\times_{G_2,e_2}S$. Its top arrow is the kernel inclusion, its left arrow is the identity section of $H$, its bottom arrow is $e_2$, and its right arrow is $\phi$. It records the fibre used for base change; the proof of right exactness is the cotangent-sequence argument above.

```tikzcd
H \arrow[r,hook,"i"] \arrow[d,"e_H"'] & G_1 \arrow[d,"\\phi"] \\
S \arrow[r,"e_2"'] & G_2
```
