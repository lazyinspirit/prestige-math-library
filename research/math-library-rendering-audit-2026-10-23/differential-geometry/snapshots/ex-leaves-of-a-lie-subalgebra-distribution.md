---
id: ex-leaves-of-a-lie-subalgebra-distribution
kind: example
title: "Leaves of a Lie subalgebra distribution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-frobenius-local-coordinate-theorem,
       thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Local and global Frobenius theorems"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/frobthm.pdf"
---

## Example

Let $G = GL_2(\mathbb R)$ and let $\mathfrak h$ be the one-dimensional Lie
subalgebra spanned by
$$E_{12} = \begin{pmatrix}0&1\\0&0\end{pmatrix}.$$
The left translates
$$\mathcal D_g := d(L_g)_I(\mathfrak h)$$
form a rank-$1$ distribution on $G$. Its leaves are the left cosets of the
subgroup
$$H = \{I + tE_{12} : t \in \mathbb R\}.$$

## Facts & Assumptions

**Given:** The subgroup $H = \{I + tE_{12} : t \in \mathbb R\}$ of $GL_2(\mathbb R)$.

[L1] Through each point of an integrable distribution there is a unique maximal connected integral manifold, its leaf ([[thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]]).

[A1] Left translation sends $\mathfrak h$ to tangent lines of left cosets of $H$.

## Verification

**Proof technique:** direct.

1.1 The map $t \mapsto I + tE_{12}$ is a one-parameter subgroup because [given] $E_{12}^2 = 0$, so $$(I+sE_{12})(I+tE_{12}) = I + (s+t)E_{12}.$$ Hence $H$ is a connected immersed Lie subgroup with tangent space $T_IH = \mathfrak h$. [given, algebra]

1.2 For any $g \in G$, the left coset $gH$ has tangent line [given] $d(L_g)_I(\mathfrak h)$ at the point $g$. Thus each coset is an integral manifold of the distribution $\mathcal D$. [given]

2.1 For each $g \in G$, the curve $c_g(t)=g(I+tE_{12})$ has image $gH$ and [given] derivative $$c_g'(t)=gE_{12}=d(L_{c_g(t)})_I(E_{12}),$$ so it is an integral curve of the nowhere-zero rank-$1$ distribution $\mathcal D$. Hence any connected integral manifold through $g$ is locally an open piece of that same integral curve and is contained in $gH$. Since step 1.2 shows that $gH$ itself is a connected integral manifold through $g$, [L1] identifies $gH$ as the leaf through $g$. Varying $g$ gives all leaves. [L1, step 1.2, given] ∎
