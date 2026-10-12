---
id: ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy
kind: example
title: "A cyclic geometric weight-zero monodromy system"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-smooth-projective-gauss-manin-local-systems-are-semisimple, def-geometric-polarizable-hodge-variation]
sources:
  references:
    - title: "Pierre Deligne, Theorie de Hodge II"
      url: "https://www.numdam.org/item/PMIHES_1971__40__5_0/"
    - title: "Pierre Deligne, Theorie de Hodge III"
      url: "https://www.numdam.org/item/PMIHES_1974__44__5_0/"
---

## Example

The finite étale morphism $f:\mathbb C^\times\to\mathbb C^\times$, $z\mapsto z^r$, for $r\ge1$, gives a rank-$r$ geometric pure weight-zero local system $R^0f_*\mathbb Q$. Its monodromy cyclically permutes the $r$ sheets and its complexification is a direct sum of one-dimensional root-of-unity characters.

## Verification

**Given:** The displayed map and geometric category [[def-geometric-polarizable-hodge-variation]]. The equation $Z^r=tW^r$ embeds its graph as a closed subscheme of $\mathbb C^\times\times\mathbb P^1$: $t\ne0$ forces $Z,W\ne0$, so it is precisely the source. Thus the map is projective. The derivative $rz^{r-1}$ is nonzero on the source.

1.1 Each fiber is a set of $r$ points, so its degree-zero cohomology has the sheet indicator basis and type $(0,0)$. A positive loop in the base multiplies a chosen root by $e^{2\pi i/r}$, cyclically permuting the sheets. The ordinary dot product in the indicator basis is a flat rational positive polarization. [given, construct, algebra]

2.1 Over $\mathbb C$ the vectors $v_j=\sum_{a=0}^{r-1}e^{-2\pi ija/r}e_a$ are eigenvectors of this cyclic permutation with its distinct $r$-th-root eigenvalues. Their Fourier matrix is invertible because these roots are distinct, yielding a direct sum of rank-one characters. The geometric semisimplicity theorem [[thm-smooth-projective-gauss-manin-local-systems-are-semisimple]] supplies the same semisimplicity over every characteristic-zero coefficient field, even when that field does not contain all roots. [step 1.1, algebra] ∎
