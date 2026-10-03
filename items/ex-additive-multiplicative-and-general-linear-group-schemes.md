---
id: ex-additive-multiplicative-and-general-linear-group-schemes
kind: example
title: The group schemes Ga, Gm, and GLn
deps:
- def-group-scheme-over-a-field
- def-morphism-and-closed-subgroup-scheme
- thm-affine-scheme-ring-anti-equivalence
- thm-affine-fibre-product-tensor-ring
- cor-inverse-matrix-by-adjugate
- thm-determinant-multiplicative
- thm-ring-matrix-arithmetic-laws
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: J. S. Milne, Algebraic Groups (corrected 2022 printing)
    url: https://www.jmilne.org/math/Books/iAG2022.pdf
    locator: Chapter2 sections2.1–2.5/2.8, printed pp.39–41, and2.14 printedp.44 (PDF50–52/55); explicit affine formulas and alpha_p/mu_p scheme comparison read.
  - title: The Stacks Project, complete Groupoid Schemes chapter
    url: https://stacks.math.columbia.edu/download/groupoids.pdf
    locator: §5 Examples5.1–5.4, tags022U/040M/022V/022W, printed pp.5–6; all coordinate formulas and scheme-valued point descriptions read.
status: draft
origin: pipeline
proof_strategy: direct
---
## Example

Over every field $k$, the additive group $\mathbf G_a=\operatorname{Spec}k[x]$, multiplicative group $\mathbf G_m=\operatorname{Spec}k[t,t^{-1}]$, and general linear group
$$\operatorname{GL}_n=\operatorname{Spec}k[x_{ij},d^{-1}],\qquad d=\det(x_{ij}),\quad n\ge1,$$
are group schemes of finite type. For every commutative $k$-algebra $R$, their groups of points are respectively $(R,+)$, $R^\times$, and the invertible $n\times n$ matrices over $R$. Their structure morphisms are regular on the displayed schemes, including when $R$ is nonreduced.

## Verification

**Given:** A field $k$, a positive integer $n$, and a commutative unital $k$-algebra $R$.

[F1] Group schemes and their homomorphisms are defined in [[def-group-scheme-over-a-field]] and [[def-morphism-and-closed-subgroup-scheme]].

[F2] Ring maps correspond to affine scheme morphisms, and affine product rings are tensor products. ([[thm-affine-scheme-ring-anti-equivalence]], [[thm-affine-fibre-product-tensor-ring]])

[F3] Matrix multiplication is associative and unital, determinants multiply over every commutative ring, and a matrix with unit determinant has inverse $d^{-1}\operatorname{adj}(X)$. ([[thm-ring-matrix-arithmetic-laws]], [[thm-determinant-multiplicative]], [[cor-inverse-matrix-by-adjugate]])

1.1 For $\mathbf G_a$, the comorphisms of multiplication, identity and inverse send $x$ respectively to $x\otimes1+1\otimes x$, $0$, and $-x$. They are algebra maps and hence morphisms by [F2]. Evaluation on $R$ identifies its points with $R$ and its operations with addition, zero, and negation. For $\mathbf G_m$, the corresponding formulas are $t\mapsto t\otimes t$, $t\mapsto1$, and $t\mapsto t^{-1}$. Each image of $t$ is a unit, so these maps are defined on the Laurent algebra. Evaluation identifies its points with $R^\times$ and its operations with multiplication, one and inversion. These formulas satisfy the group-object identities as ring identities and hence as scheme morphisms by [F1]–[F2]. [F1, F2, given, algebra]

1.2 For $X=(x_{ij})$, define multiplication by $x_{ij}\mapsto\sum_l x_{il}\otimes x_{lj}$. Its determinant is $(d\otimes1)(1\otimes d)$ by [F3], a unit, so the formula extends to the localized coordinate ring. The identity has $x_{ij}\mapsto\delta_{ij}$, with determinant one. Define inversion by the entries of $d^{-1}\operatorname{adj}(X)$; they belong to the same localized algebra. Its determinant is a unit, since the adjugate identity gives $XX^{-1}=I$ and determinant multiplicativity gives $\det(X^{-1})=d^{-1}$. Thus inversion also gives a morphism. The points of the localized spectrum are exactly matrices with unit determinant, equivalently invertible matrices by [F3]. [F2, F3, construct, algebra]

2.1 Matrix associativity, the identity matrix, and the two inverse identities in [F3] verify all group identities on $\operatorname{GL}_n(R)$, for every $R$. They also verify the scheme identities: each domain in those identities is affine by [F2]; testing its coordinate algebra with its universal point tests the morphisms themselves. All three displayed coordinate algebras are finitely generated over $k$ (write the determinant inverse as a generator subject to $zd-1=0$), so the schemes are finite type. They are therefore group schemes by [F1]. No field-valued-point or smoothness argument substitutes for these formulas. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎
