---
id: lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three
kind: lemma
title: A Bockstein class on RP-two times RP-four has nonzero integral Sq-three
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism", "thm-cartan-formula-for-steenrod-squares", "def-axiom-of-choice", "lem-real-projective-space-cellular-homology-and-pinch-map", "thm-cellular-homology-computes-singular-homology", "cor-cohomology-over-a-field-is-dual-to-homology-over-that-field", "prop-steenrod-square-normalization-instability-and-top-square", "thm-steenrod-squares-are-well-defined-and-natural"]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited by projective-space cohomology, field duality and the Kunneth ring isomorphism."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Caleb Ji, The Atiyah–Hirzebruch Spectral Sequence, §3.2.4 and Proposition 3.12, printed pp. 11–12"
      url: https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf
      locator: "§3.2.4 and Proposition 3.12, printed pp. 11–12"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $u\in H^1(\mathbb{RP}^2;\mathbb F_2)$ and
$v\in H^1(\mathbb{RP}^4;\mathbb F_2)$ be the nonzero degree-one generators; viewed on the product by the two projection pullbacks. They generate the mod-two cohomology of
$\mathbb{RP}^2\times\mathbb{RP}^4$ with relations $u^3=0=v^5$. For
$$z=\beta_{\mathbb Z}(uv)\in H^3(\mathbb{RP}^2\times\mathbb{RP}^4;\mathbb Z)$$
one has
$$Sq^3_{\mathbb Z}(z)=\beta_{\mathbb Z}(uv^4)\ne0.$$
Here the integral operation is defined by
$Sq^3_{\mathbb Z}:=\beta_{\mathbb Z}Sq^2\rho_2$.

## Facts & Assumptions

**Given:** AC, the product $Y=\mathbb{RP}^2\times\mathbb{RP}^4$, the projection pullbacks $u,v$ of its degree-one generators, and $z=\beta_{\mathbb Z}(uv)$. The operation here is defined by $Sq^3_{\mathbb Z}=\beta_{\mathbb Z}Sq^2\rho_2$.

[F1] For every space and nonnegative degree, $\rho_2\beta_{\mathbb Z}=Sq^1$ ([[lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square]]).

[F2] Under AC, $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$, and restriction to $\mathbb{RP}^m$ is an isomorphism through degree $m$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F3] The finite space $\mathbb{RP}^m$ has one cell in degrees $0,\ldots,m$, with cellular incidence numbers zero or two ([[lem-real-projective-space-cellular-homology-and-pinch-map]]). Cellular homology with any coefficient group computes singular homology ([[thm-cellular-homology-computes-singular-homology]]). Under AC, cohomology over a field is the full dual of homology over that field ([[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]).

[F4] Under AC the cohomological Künneth cross product is a graded-ring isomorphism over a PID if every homology group of one factor is finite free over that PID ([[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]).

[F5] Squares are additive and natural; $Sq^0x=x$, $Sq^k x=0$ for $k>|x|$, and $Sq^{|x|}x=x^2$; Cartan computes squares of products ([[thm-steenrod-squares-are-well-defined-and-natural]], [[prop-steenrod-square-normalization-instability-and-top-square]], [[thm-cartan-formula-for-steenrod-squares]]).

[A1] AC is assumed ([[def-axiom-of-choice]]) through [F2], field duality in [F3] and the additive Künneth isomorphism in [F4]. The Bockstein and finite square calculations use no additional choices.

## Proof

**Proof technique:** direct.

1.1 Reduce the cellular incidence numbers in [F3] modulo two. The cellular chain complex of $\mathbb{RP}^m$ is then $\mathbb F_2$ in degrees $0,\ldots,m$, zero elsewhere, with zero differential. Thus its mod-two singular homology is one-dimensional in that range and zero above $m$. Field duality gives the same dimensions and vanishing for cohomology. By [F2], restriction sends $a^j$ to the nonzero power $a_m^j$ for $0\le j\le m$; restriction preserves products. Higher powers vanish by the just-proved cohomological vanishing. Therefore the finite ring is exactly $\mathbb F_2[a_m]/(a_m^{m+1})$. [F2, F3, A1, algebra]


1.2 For a degree-one class $t$, [F5] gives $Sq^0t=t$, $Sq^1t=t^2$, and $Sq^it=0$ for $i>1$. Repeated Cartan says that in $Sq^i(t^j)$ only choices of $i$ among the $j$ factors to receive $Sq^1$ contribute; each contributes $t^{j+i}$. Thus $Sq^i(t^j)=\binom ji t^{j+i}$, with the binomial coefficient reduced modulo two. This is a finite product computation, valid directly for the classes $u,v$ on $Y$. In particular $Sq^1(t^2)=0$, $Sq^2(t^2)=t^4$, and $Sq^1(t^4)=0$. [F5, algebra]
2.1 The homology groups of both finite projective factors are finite free over $\mathbb F_2$ by step 1.1, so the full hypothesis of [F4] holds. Its cross-product ring isomorphism gives $H^*(Y;\mathbb F_2)=\mathbb F_2[u,v]/(u^3,v^5)$, with basis $u^iv^j$ for $0\le i\le2$, $0\le j\le4$. In particular $uv$, $uv^4$ and $u^2v^4$ are nonzero. The two summands $u^2v$ and $uv^2$ are distinct basis elements. [step 1.1, F4, A1, algebra]


3.1 Cartan gives $Sq^1(uv)=u^2v+uv^2$. Also $Sq^2(u^2v)=u^4v+0+0=0$ since $u^3=0$, whereas $Sq^2(uv^2)=0+0+uv^4=uv^4$. Additivity therefore gives $Sq^2(u^2v+uv^2)=uv^4$. [step 2.1, step 1.2, F5, algebra]

4.1 By [F1], $\rho_2z=Sq^1(uv)=u^2v+uv^2$, which is nonzero by step 2.1, so $z$ is also nonzero. Step 3.1 gives $Sq^2\rho_2z=uv^4$, and the specified definition implies $Sq^3_{\mathbb Z}(z)=\beta_{\mathbb Z}(uv^4)$. Finally $\rho_2\beta_{\mathbb Z}(uv^4)=Sq^1(uv^4)=u^2v^4+u\,Sq^1(v^4)=u^2v^4\ne0$ by steps 2.1 and 1.2 and Cartan. A zero integral class would have zero reduction, so this proves the claimed integral nonvanishing without asserting injectivity of reduction. [step 2.1, step 1.2, step 3.1, F1, F5, given] ∎

## Source notes

Compare [Ji](https://www.math.columbia.edu/~calebji/atiyah-hirzebruch-final.pdf), §3.2.4 and Proposition 3.12, printed pp. 11–12, for the $d_3$ computation on $\mathbb{RP}^2\times\mathbb{RP}^4$ and the description of $d_3$ as the integral operation; the particular Bockstein class displayed here supplies the local calculation.
