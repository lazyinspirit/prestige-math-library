---
id: lem-kummer-cohomology-of-roots-of-unity
kind: lemma
title: "Kummer cohomology of roots of unity over a field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-absolute-galois-group-of-a-field
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - thm-hilbert-90-for-absolute-galois-group
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §2"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "The Kummer sequence and its cohomology sequence, printed pp. 24–27."
    - title: "J. S. Milne, Fields and Galois Theory, version 5.10, Chapter IV, §5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
      locator: "Hilbert theorem 90 for the absolute Galois group, used in the degree-one term."
verification:
  precheck: pass
---

## Statement

Let $F$ be a field of characteristic zero, fix a separable closure $F_s$, put
$G_F=\operatorname{Gal}(F_s/F)$, and let $n\ge2$. Let
$\mu_n(F_s)=\{x\in F_s^\times:x^n=1\}$ with its natural discrete
$G_F$-action. Then the natural Kummer map is an isomorphism
$$F^\times/(F^\times)^n\xrightarrow{\sim}H^1_{\mathrm{cont}}(G_F,\mu_n(F_s)).$$
Moreover, the map induced by inclusion $\mu_n(F_s)\hookrightarrow F_s^\times$
identifies $H^2_{\mathrm{cont}}(G_F,\mu_n(F_s))$ with
$$\ker\!\left(n:H^2_{\mathrm{cont}}(G_F,F_s^\times)\to H^2_{\mathrm{cont}}(G_F,F_s^\times)\right).$$

## Statement references

[[def-absolute-galois-group-of-a-field]]

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[thm-hilbert-90-for-absolute-galois-group]]

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I §2](https://www.jmilne.org/math/Books/ADTnot.pdf)

[J. S. Milne, *Fields and Galois Theory*, Chapter IV §5](https://www.jmilne.org/math/Books/FT0.pdf)

## Facts & Assumptions

**Given:** A characteristic-zero field $F$, a separable closure $F_s$, its absolute Galois group $G_F$, and an integer $n\ge2$.

[F1] The absolute Galois group is the profinite group of automorphisms of $F_s$ over $F$. [[def-absolute-galois-group-of-a-field]]

[F2] Continuous cohomology uses the discrete natural Galois modules in the Statement. [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[F3] $H^1_{\mathrm{cont}}(G_F,F_s^\times)=0$ by Hilbert theorem 90. [[thm-hilbert-90-for-absolute-galois-group]]

## Proof

**Proof technique:** apply the continuous cohomology long exact sequence to the Kummer short exact sequence.

**Given:** The data in the Statement.

1.1 The map $F_s^\times\xrightarrow{x\mapsto x^n}F_s^\times$ is surjective because every polynomial $X^n-a$ with $a\ne0$ has a root in the separably closed field $F_s$; characteristic zero makes that polynomial separable. Its kernel is $\mu_n(F_s)$. Hence $1\longrightarrow\mu_n(F_s)\longrightarrow F_s^\times\xrightarrow{n}F_s^\times\longrightarrow1$ is a short exact sequence of discrete $G_F$-modules. [F1, F2, given, construct]

2.1 The degree-one part of the continuous cohomology long exact sequence of step 1.1 is $F^\times\xrightarrow{n}F^\times\longrightarrow H^1(G_F,\mu_n(F_s))\longrightarrow H^1(G_F,F_s^\times)$. The last group is zero by [F3], and the first map has image $(F^\times)^n$. Exactness therefore gives the stated Kummer isomorphism. [F1, F2, F3, step 1.1]

3.1 The next part of the same long exact sequence is $H^1(G_F,F_s^\times)\xrightarrow{n}H^1(G_F,F_s^\times)\longrightarrow H^2(G_F,\mu_n(F_s))\longrightarrow H^2(G_F,F_s^\times)\xrightarrow{n}H^2(G_F,F_s^\times)$. Both degree-one groups vanish by [F3]. Exactness makes the indicated map from $H^2(G_F,\mu_n(F_s))$ injective and its image exactly the kernel of multiplication by $n$ on $H^2(G_F,F_s^\times)$. This proves the second assertion. [F2, F3, step 1.1, algebra] ∎
