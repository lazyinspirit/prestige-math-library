---
id: ex-gelfand-transform-of-l-one-of-an-lca-group
kind: example
title: Fourier transform as the Gelfand transform of an LCA group algebra
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-lca-scalar-unitization-character-space-and-spectrum, def-gelfand-transform, def-axiom-of-choice, thm-complex-plane-is-complete]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — Example 3.10, printed p. 9"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/ex-gelfand-transform-of-l-one-of-an-lca-group.json
---

## Example

Assume the Axiom of Choice. Let $G$ be a locally compact Hausdorff abelian
group with a fixed nonzero Haar measure $m$. With convolution and
conjugate-reflection as in
[[lem-lca-scalar-unitization-character-space-and-spectrum]], the space
$A=L^1(G,m;\mathbb C)$ is a commutative Banach star algebra, unital exactly
when $G$ is discrete. These analytical assertions are proved in the cited lemma; AC implies the Dependent Choice used there.

For nondiscrete $G$, put $B=\mathbb C\oplus A$ and set
$$ \|(z,f)\|=|z|+\|f\|_1,\qquad (z,f)(v,g)=(zv,zg+vf+f*g),\qquad (z,f)^*=(\overline z,f^*). $$
Then $B$ is a commutative unital Banach star algebra. Under the proved
identification of $\Delta(B)$ with the one-point compactification of
$\widehat G$, its Gelfand transform is
$$ \Gamma_B(z,f)(h_w)=z+\widehat f(w),\qquad \widehat f(w)=\int_G f(t)w(t)\,dm(t),\qquad \Gamma_B(z,f)(q)=z. $$
The cited lemma uses the conjugate-phase convention: here $h_w=h^+_{\overline w}$, since $\overline{\overline{w(t)}}=w(t)$. Conjugation $w\mapsto\overline w$ is a homeomorphism of the compact-open dual, so this reparametrization preserves the asserted topology. Thus the Fourier transform with this character convention is precisely the
restriction of $\Gamma_B(0,f)$ to $\widehat G$. No C-star norm assertion is
made.

## Facts & Assumptions

**Given:** The Axiom of Choice, $G,m,A$ and, in the nondiscrete case, $B$ as
displayed.

[F1] The $L^1$ convolution algebra, norm and involution facts, the unit
criterion, and the complete character/topology identification for $B$ are
proved in the scalar-unitization lemma
([[lem-lca-scalar-unitization-character-space-and-spectrum]]).

[F2] For a commutative unital complex algebra the Gelfand transform is
$\Gamma_B(b)(\chi)=\chi(b)$ ([[def-gelfand-transform]]).

[F3] The complex numbers are complete ([[thm-complex-plane-is-complete]]).

## Verification

1.1 For $b=(z,f)$ and $c=(v,g)$, the norm estimate in [F1] gives $\|bc\|\leq |zv|+|z|\|g\|_1+|v|\|f\|_1+\|f\|_1\|g\|_1=(|z|+\|f\|_1)(|v|+\|g\|_1)$. A Cauchy sequence in $B$ has Cauchy scalar and $A$ coordinates; completeness of $\mathbb C$ from [F3] and of $A$ from [F1] makes it converge in the sum norm. [F1, F3, given, algebra]

2.1 Bilinearity and commutativity follow from [F1], and $(1,0)$ is the identity. For $b=(z,f)$, $c=(v,g)$ and $d=(u,k)$, either bracketing of $bcd$ has scalar part $zvu$ and $A$ part $zv k+zu g+vu f+z(g*k)+v(f*k)+u(f*g)+(f*g)*k$, by convolution associativity. Conjugate-linearity, involutivity and isometry of the star follow coordinatewise from [F1]; expanding the product and applying $(f*g)^*=g^* * f^*$ gives $(bc)^*=c^*b^*$. [F1, step 1.1, given, algebra]

3.1 In the conjugate-phase notation of [F1], set $\gamma=\overline w$. Then $h^+_\gamma(z,f)=z+\int_G f(t)\overline{\gamma(t)}\,dm(t)=h_w(z,f)$. The map $w\mapsto\overline w$ is its own inverse and preserves uniform convergence on each compact set, hence is a homeomorphism of the compact-open dual. Therefore [F1] makes every character of $B$ one of the displayed $h_w$ or $q$, with the asserted topology. Applying [F2] gives $\Gamma_B(z,f)(h_w)=h_w(z,f)=z+\widehat f(w)$ and $\Gamma_B(z,f)(q)=q(z,f)=z$. Taking $z=0$ and restricting to the dual gives the Fourier/Gelfand identity. [F1, F2, step 2.1, algebra] ∎
