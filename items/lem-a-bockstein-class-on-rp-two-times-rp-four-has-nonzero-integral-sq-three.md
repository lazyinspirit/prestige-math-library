---
id: lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three
kind: lemma
title: A Bockstein class on RP-two times RP-four has nonzero integral Sq-three
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square, lem-mod-two-cohomology-ring-of-infinite-real-projective-space, thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism, thm-cartan-formula-for-steenrod-squares, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; AC is used only for the field Kunneth isomorphism supplying the product-ring basis."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, §3.2.4 and Proposition 3.12, printed pp. 11–12"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "§3.2.4 and Proposition 3.12, printed pp. 11–12"
---

## Statement

Assume AC. Let $u\in H^1(\mathbb{RP}^2;\mathbb F_2)$ and
$v\in H^1(\mathbb{RP}^4;\mathbb F_2)$ be the nonzero degree-one generators; by
the field Künneth theorem they generate the mod-two cohomology of
$\mathbb{RP}^2\times\mathbb{RP}^4$ with relations $u^3=0=v^5$. For
$$z=\beta_{\mathbb Z}(uv)\in H^3(\mathbb{RP}^2\times\mathbb{RP}^4;\mathbb Z)$$
one has
$$Sq^3_{\mathbb Z}(z)=\beta_{\mathbb Z}(uv^4)\ne0.$$

## Facts & Assumptions

[A1] Assume AC. For every space, reduction modulo two of the integral Bockstein is the first Steenrod square: $\rho_2\beta_{\mathbb Z}=Sq^1$ ([[lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square]]).

[A2] Assume AC. $H^*(\mathbb{RP}^\infty;\mathbb F_2)\cong\mathbb F_2[a]$ with $|a|=1$, and restriction to each finite projective space is the corresponding truncation; for the field $\mathbb F_2$ the Künneth cross product is a ring isomorphism, so $H^*(\mathbb{RP}^2\times\mathbb{RP}^4;\mathbb F_2)\cong\mathbb F_2[u,v]/(u^3,v^5)$ with $|u|=|v|=1$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]], [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[A3] On projective space $Sq^i(a^j)=\binom{j}{i}a^{j+i}$; the Cartan formula computes squares of products ([[thm-cartan-formula-for-steenrod-squares]] and the standard binomial formula for squares on projective space).

## Proof

**Proof technique:** direct.

**Given:** Assume AC and let $u,v$ be the degree-one generators of the mod-two cohomology of $\mathbb{RP}^2$ and $\mathbb{RP}^4$, with relations $u^3=0$, $v^5=0$.

1.1 By [A2] the mod-two cohomology of the product is $\mathbb F_2[u,v]/(u^3,v^5)$ with $u,v$ in degree one, so $uv\ne0$ and $uv^4\ne0$. [A2]

1.2 The Cartan formula and the projective-space power formula give $Sq^1(uv)=u^2v+uv^2$; then $Sq^2(u^2v)=0$ because $Sq^2(u^2)=u^4$ and $u^4v=0$ while the mixed terms vanish, and $Sq^2(uv^2)=uv^4$ because $Sq^2(v^2)=v^4$ and the other Cartan terms vanish; hence $Sq^2(u^2v+uv^2)=uv^4$. [A3]

2.1 By [A1] we have $\rho_2z=Sq^1(uv)=u^2v+uv^2$, so step 1.2 gives $Sq^2(\rho_2z)=uv^4$. [A1, step 1.2]

3.1 Therefore $Sq^3_{\mathbb Z}(z)=\beta_{\mathbb Z}(Sq^2(\rho_2z))=\beta_{\mathbb Z}(uv^4)$; its reduction is $\rho_2\beta_{\mathbb Z}(uv^4)=Sq^1(uv^4)=u^2v^4\ne0$ by [A1], [A3] and step 1.1, so the class $Sq^3_{\mathbb Z}(z)$ is nonzero. [A1, A3, step 1.1, step 2.1]

4.1 Steps 2.1 and 3.1 identify $Sq^3_{\mathbb Z}(z)$ with $\beta_{\mathbb Z}(uv^4)$ and show that it does not vanish. [step 3.1] ∎

## Source notes

Compare [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), §3.2.4 and Proposition 3.12, printed pp. 11–12, for the $d_3$ computation on $\mathbb{RP}^2\times\mathbb{RP}^4$ and the description of $d_3$ as the integral operation; the particular Bockstein class displayed here supplies the local calculation.
