---
id: lem-real-clifford-signature-recurrences-and-periodicity
kind: lemma
title: "Real Clifford signature recurrences and eightfold periodicity"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 5
deps:
  - def-real-quaternion-matrix-algebra-notation
  - lem-real-clifford-low-dimensional-models
  - lem-real-division-algebra-tensor-identities
  - lem-clifford-zero-dimensional-algebra-is-base-field
  - def-clifford-algebra-of-a-quadratic-space
  - lem-clifford-polarized-relations
  - thm-universal-property-of-clifford-algebra
  - thm-clifford-pbw-basis-and-associated-graded
  - thm-reals-ordered-field
  - thm-symmetry-and-associativity-over-a-commutative-ring
  - thm-tensor-products-commute-with-arbitrary-direct-sums
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.6, Lemma 1.15 and Theorem 1.17"
      url: https://arxiv.org/pdf/0805.0311
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Part I, §4, Table 1"
      url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §1.4.1, Theorem 1.4.4 and Table 1.1"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Let $\mathrm{Cl}_{p,q}$ be the real algebra for the form with $p$ positive and $q$ negative squares, using $v^2=Q(v)1$. As ungraded real algebras, for $p,q,n\ge0$,

$$\mathrm{Cl}_{p+1,q+1}\cong\mathrm{Cl}_{p,q}\otimes_{\mathbb R}M_2(\mathbb R),\qquad \mathrm{Cl}_{n+2,0}\cong\mathrm{Cl}_{0,n}\otimes_{\mathbb R}M_2(\mathbb R),\qquad \mathrm{Cl}_{0,n+2}\cong\mathrm{Cl}_{n,0}\otimes_{\mathbb R}\mathbb H.$$

The pure-signature algebras through dimension eight are

| $n$ | $\mathrm{Cl}_{n,0}$ | $\mathrm{Cl}_{0,n}$ |
|---:|---|---|
| $0$ | $\mathbb R$ | $\mathbb R$ |
| $1$ | $\mathbb R\oplus\mathbb R$ | $\mathbb C$ |
| $2$ | $M_2(\mathbb R)$ | $\mathbb H$ |
| $3$ | $M_2(\mathbb C)$ | $\mathbb H\oplus\mathbb H$ |
| $4$ | $M_2(\mathbb H)$ | $M_2(\mathbb H)$ |
| $5$ | $M_2(\mathbb H)\oplus M_2(\mathbb H)$ | $M_4(\mathbb C)$ |
| $6$ | $M_4(\mathbb H)$ | $M_8(\mathbb R)$ |
| $7$ | $M_8(\mathbb C)$ | $M_8(\mathbb R)\oplus M_8(\mathbb R)$ |
| $8$ | $M_{16}(\mathbb R)$ | $M_{16}(\mathbb R)$ |

For every $n\ge0$, the pure algebras satisfy

$$\mathrm{Cl}_{n+8,0}\cong M_{16}(\mathrm{Cl}_{n,0}),\qquad \mathrm{Cl}_{0,n+8}\cong M_{16}(\mathrm{Cl}_{0,n}).$$

## Facts & Assumptions

**Given:** The standard real quadratic forms with signature $(p,q)$ and the positive-square-first convention.

[F1] Each canonical Clifford generator squares to its assigned $+1$ or $-1$ value ([[def-clifford-algebra-of-a-quadratic-space]]).

[F2] A linear map satisfying the quadratic relation extends uniquely to a Clifford algebra homomorphism ([[thm-universal-property-of-clifford-algebra]]).

[F3] A real Clifford algebra on $m$ generators has dimension $2^m$ by its ordered square-free basis ([[thm-clifford-pbw-basis-and-associated-graded]]).

[F4] The low-dimensional algebras are $\mathrm{Cl}_{1,0}=\mathbb R\oplus\mathbb R$, $\mathrm{Cl}_{0,1}=\mathbb C$, $\mathrm{Cl}_{2,0}=M_2(\mathbb R)$, $\mathrm{Cl}_{1,1}=M_2(\mathbb R)$, and $\mathrm{Cl}_{0,2}=\mathbb H$ ([[lem-real-clifford-low-dimensional-models]]).

[F5] The real coefficient tensor identities include $\mathbb C\otimes\mathbb H\cong M_2(\mathbb C)$, $\mathbb H\otimes\mathbb H\cong M_4(\mathbb R)$, and $M_m(D)\otimes M_n(\mathbb R)\cong M_{mn}(D)$ ([[lem-real-division-algebra-tensor-identities]]).

[F6] $\mathbb R$ is a field ([[thm-reals-ordered-field]]).

[F7] The Clifford algebra of the zero real vector space is $\mathbb R$ ([[lem-clifford-zero-dimensional-algebra-is-base-field]]).

[F8] Ordinary tensor products of real vector spaces have canonical associative reparenthesizations and flips on elementary tensors ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[F9] Tensoring over $\mathbb R$ commutes with direct sums, including the isomorphism $(A\oplus B)\otimes C\cong(A\otimes C)\oplus(B\otimes C)$ ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[F10] Images of orthogonal Clifford vectors anticommute, by $\bar x\bar y+\bar y\bar x=2B(x,y)1$ ([[lem-clifford-polarized-relations]]).

## Proof

**Proof technique:** generator maps, PBW dimensions, and iteration.

1.1 Let $u,v$ generate $\mathrm{Cl}_{1,1}$ with $u^2=1$, $v^2=-1$, and $uv=-vu$ by [F10], and put $\tau=uv$. Then $\tau^2=-u^2v^2=1$, and $\tau$ anticommutes with both $u$ and $v$. Send each old positive or negative generator $x_i$ of $\mathrm{Cl}_{p,q}$ to $x_i\otimes\tau$, and send the new positive and negative generators to $1\otimes u$ and $1\otimes v$. The images satisfy the standard quadratic relations: the old squares are unchanged because $\tau^2=1$, the new squares are $+1,-1$, old pairs anticommute by [F10], and all cross anticommutators vanish because $\tau$ anticommutes with $u,v$. Thus every linear combination has its prescribed square, and [F2] gives a homomorphism $\mathrm{Cl}_{p+1,q+1}\to\mathrm{Cl}_{p,q}\otimes\mathrm{Cl}_{1,1}$. [given, F1, F2, F10, construct, algebra]

1.2 Let $r,s$ be the positive generators of $\mathrm{Cl}_{2,0}$. By [F10], $rs=-sr$; put $\sigma=rs$. Then $\sigma^2=rsrs=-r^2s^2=-1$, and $\sigma$ anticommutes with $r,s$. Send each negative generator $y_i$ of $\mathrm{Cl}_{0,n}$ to $y_i\otimes\sigma$ and the two new positive generators to $1\otimes r,1\otimes s$. Each old image squares to $(-1)(-1)=+1$, the new images square to $+1$, old pairs anticommute by [F10], and the cross anticommutators vanish. Hence every linear combination has its prescribed square, and [F2] gives the homomorphism used in the second recurrence. [F1, F2, F4, F10, construct, algebra]

1.3 Let $r,s$ be the two negative generators of $\mathrm{Cl}_{0,2}\cong\mathbb H$. By [F10], $rs=-sr$; put $\sigma=rs$, so $\sigma^2=rsrs=-r^2s^2=-1$ and $\sigma$ anticommutes with each. Send every positive generator $x_i$ of $\mathrm{Cl}_{n,0}$ to $x_i\otimes\sigma$ and the two new negative generators to $1\otimes r,1\otimes s$. Old images square to $-1$, new images square to $-1$, old pairs anticommute by [F10], and cross anticommutators vanish. Thus every linear combination has its prescribed square, and [F2] gives a homomorphism $\mathrm{Cl}_{0,n+2}\to\mathrm{Cl}_{n,0}\otimes\mathbb H$. [F1, F2, F4, F10, construct, algebra]

1.4 Since $\mathbb R$ is a field by [F6], specialize [F7] to identify $\mathrm{Cl}_{0,0}$ with $\mathbb R$. This supplies the $n=0$ row of both pure-signature columns. [F6, F7, algebra]

2.1 The map in step 1.1 is surjective: its image contains $1\otimes u,1\otimes v$, hence $1\otimes\tau$ and the second factor; multiplying $x_i\otimes\tau$ by $1\otimes\tau$ recovers $x_i\otimes1$, which generates the first factor (when $p+q=0$, the first factor is just the scalar algebra generated by the unit). The source dimension is $2^{p+q+2}$ by [F3], equal to the target dimension $2^{p+q}\cdot4$ by [F3]–[F4]. Therefore the map is an isomorphism. Substituting $\mathrm{Cl}_{1,1}\cong M_2(\mathbb R)$ from [F4] proves the first recurrence. [F3, F4, step 1.1, algebra]

2.2 The images generate the two tensor factors because $\sigma$ is invertible (when $n=0$, the first factor is only the scalar algebra), and both sides have dimension $2^{n+2}$: the source has this dimension by [F3], while the target has dimension $2^n\cdot4$ by [F3] and [F4]. Thus the homomorphism is an isomorphism. [F3, F4, step 1.3, algebra]

2.3 Using the generator-map construction in step 1.2, the images generate both tensor factors because $\sigma$ is invertible (when $n=0$, the first factor is only the scalar algebra), so the induced homomorphism is surjective. Its source and target both have dimension $2^{n+2}$ by [F3] and [F4]; hence it is an isomorphism, and [F4] identifies the second factor with $M_2(\mathbb R)$. [F3, F4, step 1.2, algebra]

3.1 Applying the second and third recurrences to [F4] gives $\mathrm{Cl}_{3,0}\cong\mathrm{Cl}_{0,1}\otimes M_2(\mathbb R)\cong M_2(\mathbb C)$, $\mathrm{Cl}_{4,0}\cong\mathrm{Cl}_{0,2}\otimes M_2(\mathbb R)\cong M_2(\mathbb H)$, $\mathrm{Cl}_{0,3}\cong\mathrm{Cl}_{1,0}\otimes\mathbb H\cong\mathbb H\oplus\mathbb H$, and $\mathrm{Cl}_{0,4}\cong\mathrm{Cl}_{2,0}\otimes\mathbb H\cong M_2(\mathbb H)$. The first two use $\mathbb C\otimes M_2(\mathbb R)\cong M_2(\mathbb C)$ and $\mathbb H\otimes M_2(\mathbb R)\cong M_2(\mathbb H)$ from [F5]; the third uses $(\mathbb R\oplus\mathbb R)\otimes\mathbb H\cong\mathbb H\oplus\mathbb H$ by [F9], and the fourth uses $M_2(\mathbb R)\otimes\mathbb H\cong M_2(\mathbb H)$ by [F5]. [F4, F5, F9, step 2.3, step 2.2, algebra]

4.1 Applying the recurrences again and the tensor identities [F5] yields $\mathrm{Cl}_{5,0}\cong(\mathbb H\oplus\mathbb H)\otimes M_2(\mathbb R)\cong M_2(\mathbb H)\oplus M_2(\mathbb H)$, $\mathrm{Cl}_{6,0}\cong M_2(\mathbb H)\otimes M_2(\mathbb R)\cong M_4(\mathbb H)$, $\mathrm{Cl}_{7,0}\cong M_4(\mathbb C)\otimes M_2(\mathbb R)\cong M_8(\mathbb C)$, $\mathrm{Cl}_{8,0}\cong M_8(\mathbb R)\otimes M_2(\mathbb R)\cong M_{16}(\mathbb R)$, $\mathrm{Cl}_{0,5}\cong M_2(\mathbb C)\otimes\mathbb H\cong M_4(\mathbb C)$, $\mathrm{Cl}_{0,6}\cong M_2(\mathbb H)\otimes\mathbb H\cong M_8(\mathbb R)$, $\mathrm{Cl}_{0,7}\cong(M_2(\mathbb H)\oplus M_2(\mathbb H))\otimes\mathbb H\cong M_8(\mathbb R)\oplus M_8(\mathbb R)$, and $\mathrm{Cl}_{0,8}\cong M_4(\mathbb H)\otimes\mathbb H\cong M_{16}(\mathbb R)$. The recurrences used are respectively $\mathrm{Cl}_{n+2,0}\cong\mathrm{Cl}_{0,n}\otimes M_2(\mathbb R)$ and $\mathrm{Cl}_{0,n+2}\cong\mathrm{Cl}_{n,0}\otimes\mathbb H$; [F9] distributes tensor products across the split factors, [F4] supplies the initial rows through $n=2$, and step 1.4 supplies $n=0$. Thus these entries give every row of the displayed pure-signature table. [F4, F5, F9, step 2.3, step 2.2, step 1.4, step 3.1, algebra]

5.1 Iterating the second recurrence in step 2.3 and the third recurrence in step 2.2 gives $\mathrm{Cl}_{n+8,0}\cong\mathrm{Cl}_{0,n+6}\otimes M_2(\mathbb R)\cong\mathrm{Cl}_{n+4,0}\otimes\mathbb H\otimes M_2(\mathbb R)\cong\mathrm{Cl}_{0,n+2}\otimes M_2(\mathbb R)\otimes\mathbb H\otimes M_2(\mathbb R)\cong\mathrm{Cl}_{n,0}\otimes\mathbb H\otimes M_2(\mathbb R)\otimes\mathbb H\otimes M_2(\mathbb R)$ and $\mathrm{Cl}_{0,n+8}\cong\mathrm{Cl}_{n+6,0}\otimes\mathbb H\cong\mathrm{Cl}_{0,n+4}\otimes M_2(\mathbb R)\otimes\mathbb H\cong\mathrm{Cl}_{n+2,0}\otimes\mathbb H\otimes M_2(\mathbb R)\otimes\mathbb H\cong\mathrm{Cl}_{0,n}\otimes M_2(\mathbb R)\otimes\mathbb H\otimes M_2(\mathbb R)\otimes\mathbb H$. The reassociations and flips in [F8] preserve multiplication on elementary tensors, so they are algebra isomorphisms; they reorder the four extra factors as $\mathbb H\otimes\mathbb H\otimes M_2(\mathbb R)\otimes M_2(\mathbb R)$. By [F5], $\mathbb H\otimes\mathbb H\cong M_4(\mathbb R)$ and then $M_4(\mathbb R)\otimes M_2(\mathbb R)\otimes M_2(\mathbb R)\cong M_{16}(\mathbb R)$. This proves both eightfold identities. [F5, F8, step 2.3, step 2.2, algebra] ∎
