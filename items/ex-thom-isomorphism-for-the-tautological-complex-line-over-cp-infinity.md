---
id: ex-thom-isomorphism-for-the-tautological-complex-line-over-cp-infinity
kind: example
title: Thom isomorphism for the tautological complex line over CP infinity
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-stiefel-space-grassmannian-and-tautological-bundle, thm-milnor-join-model-is-a-contractible-free-g-space, def-r-oriented-vector-bundle-and-orientation-local-system, thm-thom-isomorphism-for-oriented-vector-bundles, def-axiom-of-choice]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles and K-Theory, canonical line bundle and Thom discussion"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Canonical complex line bundle, printed pp.8–9; Thom isomorphism, printed pp.77–81"
---

## Example

Assume AC.  Let $\lambda\to\mathbb {CP}^{\infty}$ be the tautological complex
line.  Its underlying real rank-two bundle has the complex orientation, is
numerable, and has a unique normalized class

$$u_\lambda\in H^2(D(\lambda),S(\lambda);\mathbb Z).$$

For every integer $k$, multiplication by this class gives an isomorphism

$$H^k(\mathbb {CP}^{\infty};\mathbb Z)\xrightarrow{\ \cong\ }H^{k+2}(D(\lambda),S(\lambda);\mathbb Z);\quad a\longmapsto\pi^*a\smile u_\lambda.$$

## Facts & Assumptions

**Given:** AC, the standard weak-CW model of $\mathbb {CP}^{\infty}$, and its tautological complex line $\lambda$.

[F1] [[def-stiefel-space-grassmannian-and-tautological-bundle]] defines $\operatorname {Gr}_1(\mathbb C^\infty)$ as the space of complex lines and its tautological bundle as the pairs $(\ell,v)$ with $v\in\ell$.

[F2] [[thm-milnor-join-model-is-a-contractible-free-g-space]] identifies the selected $BS^1$ with this standard weak CW colimit and makes its unit-vector principal $S^1$-bundle numerable.

[F3] [[def-r-oriented-vector-bundle-and-orientation-local-system]] defines an integral orientation as a compatible family of generators of the real fiber disk-pair groups.

[F4] [[thm-thom-isomorphism-for-oriented-vector-bundles]] gives the unique normalized class and degree-$n$ cup-product isomorphism for an oriented numerable real rank-$n$ bundle over a CW complex under AC.

[A1] [[def-axiom-of-choice]] is assumed exactly to invoke [F4].

## Verification

**Proof technique:** verify numerability and orientation, then apply Thom.

1.1 By definition, $\mathbb {CP}^{\infty}$ is the weak colimit of complex lines in $\mathbb C^{N+1}$, so [F1] identifies it with $\operatorname {Gr}_1(\mathbb C^\infty)$ and $\lambda$ with the pairs $(\ell,v)$, $v\in\ell$.  Its unit vectors therefore form the standard principal $S^1$-bundle.  A principal chart with local unit section $s_i(\ell)$ gives the linear chart $(\ell,c s_i(\ell))\mapsto(\ell,c)$ of $\lambda$; hence the support-subordinate numeration in [F2] is also a numeration of $\lambda$.  The base is the stated weak CW complex. [F1, F2]

1.2 A nonzero vector $v$ in a complex fiber orders its underlying real plane by $(v,iv)$.  Replacing $v$ by $zv$ for $z\in\mathbb C^\times$ changes this ordered basis by the real matrix of multiplication by $z$, whose determinant is $|z|^2>0$.  Thus all complex-linear transition functions preserve the corresponding generator in [F3], and these generators define the complex orientation of the underlying real rank-two bundle. [F1, F3]

2.1 Apply [F4] with $R=\mathbb Z$, $n=2$, the numeration from step 1.1, and the orientation from step 1.2.  It gives the unique normalized $u_\lambda$ and exactly the displayed isomorphism for every $k$; no Euler or characteristic-class identification is used. [F4, A1, step 1.1, step 1.2]

3.1 The base is nonempty and the coefficients are the nonzero ring $\mathbb Z$, so empty-base and zero-ring cases are outside this example.  The single complex line, its zero vector and a coordinate-line point $\mathbb {CP}^0\subset\mathbb {CP}^{\infty}$ are included in steps 1.1–1.2.  At the input-degree endpoint $k=0$, the unit maps to $u_\lambda$; negative-degree and zero inputs map between zero groups or to zero as covered by [F4].  AC is used only through [A1] in [F4]; the explicit orientation and the supplied numeration require no additional choice. [F1, F2, F4, A1, step 1.1, step 1.2, step 2.1] ∎
