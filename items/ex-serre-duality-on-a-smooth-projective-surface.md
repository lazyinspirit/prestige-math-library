---
id: ex-serre-duality-on-a-smooth-projective-surface
kind: example
title: "Surface duality for twists and a skyscraper on the projective plane"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme", "rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case", "thm-cohomology-projective-space-twisting-sheaves", "lem-projective-space-top-cohomology-residue-pairing", "thm-flasque-sheaves-acyclic"]
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Stacks, Lemma 48.27.5: surface coherent Ext duality"
      url: https://stacks.math.columbia.edu/tag/0FVZ
    - title: "Vakil 2025, 29.2.2\u20133: twisting and locally free specializations"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
---

## Example

Assume AC. On the smooth projective surface $X=\mathbb P^2_k$, $\omega_X=\mathcal O(-3)$. For $m\ge0$, duality pairs the $\binom{m+2}{2}$ monomials in $H^0(X,\mathcal O(m))$ with $H^2(X,\mathcal O(-m-3))$. It also gives $\operatorname{Ext}_X^2(k_p,\omega_X)=k$ and $\operatorname{Ext}_X^1(k_p,\omega_X)=\operatorname{Hom}_X(k_p,\omega_X)=0$ at any $k$-rational point $p$.

## Verification

**Given:** $k,m\ge0$, $X$ and $p\in X(k)$, with AC.

[F1] The A theorem and its smooth specialization are [[thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]] and [[rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case]].

[F2] Twisting cohomology and the Laurent residue coefficient pairing are [[thm-cohomology-projective-space-twisting-sheaves]] and [[lem-projective-space-top-cohomology-residue-pairing]]; flasque sheaves have no higher cohomology ([[thm-flasque-sheaves-acyclic]]).

1.1 The three affine charts are polynomial planes, so $X$ is smooth, projective and pure of dimension two. The smooth specialization in [F1] gives $\omega_X=\mathcal O(-3)$. A basis of $H^0(\mathcal O(m))$ consists of $x_0^{a_0}x_1^{a_1}x_2^{a_2}$ with nonnegative exponents summing to $m$. By [F2], the dual basis of $H^2(\mathcal O(-m-3))$ is $x_0^{-a_0-1}x_1^{-a_1-1}x_2^{-a_2-1}$. Multiplication followed by the coefficient of $(x_0x_1x_2)^{-1}$ gives the Kronecker pairing. This is the A theorem's $i=0$ pairing for $F=\mathcal O(m)$ under the locally free Ext identification. [F1, F2, given, algebra]

2.1 The point sheaf has $H^0=k$ and no higher cohomology, since it is flasque and [F2] applies. Applying the A theorem [F1] with $F=k_p$ in degrees $i=0,1,2$ gives respectively the stated Ext degree two, degree one, and degree zero groups. Thus the same surface theorem handles a coherent sheaf which is not locally free, as well as the twisting bundles. AC is inherited through [F1]–[F2]. [F1, F2, step 1.1, algebra] ∎
