---
id: lem-real-division-algebra-tensor-identities
kind: lemma
title: "Tensor identities for the real division algebras"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-complex-clifford-classification-and-graded-products
dependency_level: 2
deps:
  - def-real-quaternion-matrix-algebra-notation
  - lem-real-quaternions-form-a-division-algebra
  - thm-universal-property-of-module-tensor-products
  - thm-complex-numbers-form-a-field
  - thm-tensor-product-basis-from-bases
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
    - title: "Jean Gallier, Clifford Algebras, Clifford Groups, and a Generalization of the Quaternions: The Pin and Spin Groups, §1.6, Proposition 1.16"
      url: https://arxiv.org/pdf/0805.0311
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry, §1.4.1, Proposition 1.4.6"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

With $\mathbb H$, $M_m(D)$, and direct sums as in [[def-real-quaternion-matrix-algebra-notation]], the following are real-algebra isomorphisms:

$$\mathbb C\otimes_{\mathbb R}\mathbb C\cong\mathbb C\oplus\mathbb C,\qquad \mathbb C\otimes_{\mathbb R}\mathbb H\cong M_2(\mathbb C),\qquad \mathbb H\otimes_{\mathbb R}\mathbb H\cong M_4(\mathbb R).$$

and, for $D,E\in\{\mathbb R,\mathbb C,\mathbb H\}$ and positive integers $m,n$,

$$M_m(D)\otimes_{\mathbb R}M_n(E)\cong M_{mn}(D\otimes_{\mathbb R}E).$$

## Facts & Assumptions

**Given:** The real, complex, and quaternion algebras and their matrix notation, together with the ordinary algebra tensor product over $\mathbb R$.

[F1] The quaternion basis satisfies the standard Hamilton relations, and $\bar h=a-bi-cj-dk$ reverses products ([[lem-real-quaternions-form-a-division-algebra]]).

[F2] Every real-bilinear map from two real vector spaces into an abelian group induces a unique homomorphism from their tensor product ([[thm-universal-property-of-module-tensor-products]]).

[F3] $\mathbb C$ is a real field extension with real basis $1,i$ ([[thm-complex-numbers-form-a-field]]).

[F4] If two free modules have specified bases, tensors of basis elements form a basis of their tensor product ([[thm-tensor-product-basis-from-bases]]).

## Proof

**Proof technique:** explicit algebra maps and bases.

1.1 Define $\phi:\mathbb C\otimes_{\mathbb R}\mathbb C\to\mathbb C\oplus\mathbb C$ by $\phi(z\otimes w)=(zw,z\bar w)$. The formula is real-bilinear in $(z,w)$, so [F2] extends it linearly. Since $\mathbb C$ is commutative, componentwise multiplication gives $\phi((z\otimes w)(z'\otimes w'))=\phi(z\otimes w)\phi(z'\otimes w')$. The images of $1\otimes1$, $i\otimes1$, $1\otimes i$, and $i\otimes i$ are $(1,1)$, $(i,i)$, $(i,-i)$, and $(-1,1)$. If a real linear combination with coefficients $a,b,c,d$ vanishes, its real coordinates give $a-d=a+d=0$ and its imaginary coordinates give $b+c=b-c=0$, so all coefficients vanish. They form a basis of the four-dimensional target by [F3], hence $\phi$ is an isomorphism. [given, F2, F3, construct, algebra]

1.2 Regard $\mathbb H$ as a two-dimensional left $\mathbb C$-vector space with basis $1,j$, so $k=ij$ and $jz=\bar z j$ for $z\in\mathbb C$, using the real basis of $\mathbb H$ from [F1] and the field $\mathbb C$ from [F3]. Define $\psi:\mathbb C\otimes_{\mathbb R}\mathbb H\to\operatorname{End}_{\mathbb C}(\mathbb H)$ by $\psi(y\otimes z)(x)=yx\bar z$. The formula is real-bilinear and therefore defines a linear map by [F2]. It is multiplicative because $\psi(y\otimes z)\psi(y'\otimes z')(x)=yy'x\,\overline{zz'}$. In the basis $1,j$, the maps $\psi(1\otimes z)$ for $z=1,i,j,k$ have matrices $I$, $\begin{pmatrix}-i&0\\0&i\end{pmatrix}$, $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, and $\begin{pmatrix}0&-i\\-i&0\end{pmatrix}$. Their diagonal entries force the coefficients of the first two matrices in a linear relation to vanish, and their upper-right and lower-left entries force the other two coefficients to vanish; hence they are linearly independent over $\mathbb C$. They form a basis of the four-dimensional complex vector space $\operatorname{End}_{\mathbb C}(\mathbb H)$, so $\psi$ is an algebra isomorphism with $M_2(\mathbb C)$. [given, F1, F2, F3, construct, algebra]

1.3 Define $\theta:\mathbb H\otimes_{\mathbb R}\mathbb H\to\operatorname{End}_{\mathbb R}(\mathbb H)$ by $\theta(a\otimes b)(x)=ax\bar b$. The real-bilinearity gives a well-defined linear map by [F2]. It is multiplicative since $\theta(a\otimes b)\theta(c\otimes d)(x)=acx\,\overline{bd}$. Set $T_{u,v}(x)=ux\bar v$ for basis units $u,v\in\{1,i,j,k\}$. Direct multiplication using [F1] gives the trace matrix $\bigl(\operatorname{Tr}T_{u,v}\bigr)_{u,v=1,i,j,k}=\begin{pmatrix}4&0&0&0\\0&0&0&0\\0&0&0&0\\0&0&0&0\end{pmatrix}$, with rows and columns ordered $1,i,j,k$. Equip $\mathbb H$ with the real inner product making $1,i,j,k$ orthonormal. Each $T_{a,b}$ is a signed permutation of this basis, hence orthogonal with $T_{a,b}^{T}=T_{\bar a,\bar b}$. The composition formula and trace matrix give $\langle T_{a,b},T_{c,d}\rangle_{\mathrm{HS}}=\operatorname{Tr}(T_{a,b}^{T}T_{c,d})=4\delta_{a,c}\delta_{b,d}$. The sixteen nonzero images are linearly independent; since $\operatorname{End}_{\mathbb R}(\mathbb H)$ has dimension $16$, $\theta$ is an isomorphism with $M_4(\mathbb R)$. [given, F1, F2, construct, algebra]

2.1 Choose real bases of $D$ and $E$; these exist for $\mathbb R,\mathbb C,\mathbb H$ by their displayed coordinate descriptions. The corresponding matrix units with basis coefficients form bases of $M_m(D)$ and $M_n(E)$, and [F4] makes their elementary tensors a basis of the tensor product. They multiply by the two Kronecker-delta rules in their matrix indices and by $(d\otimes e)(d'\otimes e')=dd'\otimes ee'$ in their coefficients. Sending such a basis tensor $E_{ij}(d)\otimes E_{kl}(e)$ to the matrix unit indexed by row $(i,k)$ and column $(j,l)$ with coefficient $d\otimes e$ sends this basis bijectively to the corresponding basis of $M_{mn}(D\otimes_{\mathbb R}E)$ and is multiplicative. This proves the stated matrix identity. [given, F4, algebra] ∎
