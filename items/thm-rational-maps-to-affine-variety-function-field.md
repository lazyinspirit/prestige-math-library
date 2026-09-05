---
id: thm-rational-maps-to-affine-variety-function-field
kind: theorem
title: "Dominant rational maps to an affine variety correspond to injective homomorphisms of function fields"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-open-subset-classical-variety, def-domain-of-definition-rational-map, def-dominant-morphism-and-rational-map, def-function-field-variety, def-coordinate-ring-affine-algebraic-set, def-vanishing-ideal-affine-set, lem-dominant-map-pullback-function-fields, thm-affine-morphisms-coordinate-ring-anti-equivalence, thm-coordinate-ring-principal-open]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 5.38"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Theorem 3.2.1 together with §3.1-§3.2"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $X$ and $Y$ be classical affine varieties. Sending a dominant rational map
$$ \eta:X \dashrightarrow Y $$
to its pullback on function fields gives a canonical bijection
$$ \{\text{dominant rational maps }X \dashrightarrow Y\}\cong \operatorname{Hom}_{k\text{-fld}}^{\mathrm{inj}}(k(Y),k(X)). $$

## Facts & Assumptions

**Given:** Classical affine varieties $X \subseteq \mathbf A_k^n$ and $Y \subseteq \mathbf A_k^m$ over an algebraically closed field $k$.

[L1] A dominant rational map $X \dashrightarrow Y$ induces an injective pullback homomorphism $k(Y) \hookrightarrow k(X)$, functorially ([[lem-dominant-map-pullback-function-fields]]).

[L2] The function field of a classical affine variety is the fraction field of its coordinate ring ([[def-function-field-variety]]).

[L3] If $Y \subseteq \mathbf A_k^m$, then $k[Y]=k[y_1,\ldots,y_m]/I(Y)$ ([[def-coordinate-ring-affine-algebraic-set]]).

[L4] The ideal $I(Y)$ consists exactly of the polynomials vanishing on $Y$ ([[def-vanishing-ideal-affine-set]]).

[L5] Every affine open of $X$ is a principal open on this page, and for $U=D_X(d)$ one has $k[U]=k[X]_d$ ([[def-affine-open-subset-classical-variety]], [[thm-coordinate-ring-principal-open]]).

[L6] Morphisms from an affine variety to $Y$ correspond to $k$-algebra homomorphisms out of $k[Y]$ ([[thm-affine-morphisms-coordinate-ring-anti-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every dominant rational map $\eta:X \dashrightarrow Y$ determines an injective $k$-homomorphism $\eta^*:k(Y)\hookrightarrow k(X)$. [L1, given]

1.2 Conversely, let $\sigma:k(Y)\hookrightarrow k(X)$ be an injective $k$-homomorphism. For the coordinate classes $\overline y_1,\ldots,\overline y_m \in k[Y]$ from [L3], write $$ \sigma(\overline y_i)=\frac{a_i}{d_i} $$ with $a_i,d_i \in k[X]$ and $d_i \ne 0$ in the domain $k[X]$. Put $d=d_1\cdots d_m$ and $U=D_X(d)$. By [L5], each $a_i/d_i$ is regular on $U$, so each $\sigma(\overline y_i)$ lies in $k[U]$. [L2, L3, L5, given, construct]

2.1 Define a $k$-algebra homomorphism $\alpha:k[Y]\to k[U]$ by sending $\overline y_i$ to $\sigma(\overline y_i)|_U$. This is well defined because [L4] identifies $I(Y)$ as the defining ideal of $Y$, and if $g \in I(Y)$, then its class is $0$ in $k[Y]$ by [L3], hence $$ g\big(\sigma(\overline y_1),\ldots,\sigma(\overline y_m)\big)=\sigma(g)=0 $$ in $k(X)$. Therefore every relation of $I(Y)$ is respected. [L2, L3, L4, step 1.2, algebra]

3.1 By [L6], the homomorphism $\alpha$ corresponds to a morphism $\varphi:U \to Y$. Its rational-map class gives a rational map $\eta_\sigma:X \dashrightarrow Y$. [L6, step 2.1]

4.1 The rational map $\eta_\sigma$ is dominant. If its image were not dense in $Y$, then some nonzero $h \in k[Y]$ would vanish on $\varphi(U)$. Then $\alpha(h)=0$ in $k[U]$, so $\sigma(h)=0$ in $k(X)$ by step 2.1, contradicting injectivity of $\sigma$. [step 2.1, step 3.1]

5.1 The pullback $(\eta_\sigma)^*$ agrees with $\sigma$ on the coordinate classes $\overline y_i$, hence on the whole coordinate ring $k[Y]$, and therefore on its fraction field $k(Y)$ by [L2]. Thus the construction of steps 1.2-4.1 is inverse to the construction in step 1.1. [L2, L3, step 1.1, step 4.1]

6.1 Steps 1.1 and 5.1 give the stated bijection between dominant rational maps $X \dashrightarrow Y$ and injective $k$-homomorphisms $k(Y)\hookrightarrow k(X)$. [step 1.1, step 5.1] ∎
