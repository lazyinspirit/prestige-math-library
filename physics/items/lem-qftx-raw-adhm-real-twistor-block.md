---
id: lem-qftx-raw-adhm-real-twistor-block
kind: lemma
title: Exact raw ADHM block, real monad and stereographic ASD projection
status: "published"
origin: session
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles
  - def-curvature-of-a-vector-bundle-connection
  - thm-the-complex-numbers-are-algebraically-closed
  - def-axiom-of-choice
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles: mathematical-premise
  def-curvature-of-a-vector-bundle-connection: mathematical-premise
  thm-the-complex-numbers-are-algebraically-closed: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_base: ZF + AC inherited through the bundle suppliers; all displayed matrix calculations use finite operations
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting
      url: https://arxiv.org/pdf/hep-th/0206161
      locator: Sections3.1–3.3, raw moment maps; the exact real monad, incidence and sign calculations are supplied here.
    - title: Simon K. Donaldson, The ADHM construction of Yang–Mills instantons
      url: https://arxiv.org/pdf/2205.08639
      locator: Sections2–3 and6, quaternionic projection construction; the displayed source equations are not used as the normalization of this lemma.
verification:
  precheck: pending
---

## Statement

Assume AC. Let $V=\mathbb C^k$ and $W=\mathbb C^N$, $N\ge1$, $k\ge0$, with their standard Hermitian products. Let $B_i\in\operatorname{End}_{\mathbb C}(V)$, $I:W\to V$, and $J:V\to W$. Define the raw moment maps

$$\mu_{\mathbb C}=[B_1,B_2]+IJ,\qquad \mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J,$$

and assume $\mu_{\mathbb C}=0$. Put $K=V\oplus V\oplus W$. For $z=(z_1,z_2)\in\mathbb C^2$ put

$$a_z=(B_1-z_1,B_2-z_2,J)^T,\qquad b_z=(-B_2^\dagger+\bar z_2,B_1^\dagger-\bar z_1,I^\dagger)^T,\qquad D_z=\begin{pmatrix}b_z^\dagger\\a_z^\dagger\end{pmatrix}.$$

Then

$$D_zD_z^\dagger=\begin{pmatrix}b_z^\dagger b_z&\mu_{\mathbb C}\\\mu_{\mathbb C}^\dagger&a_z^\dagger a_z\end{pmatrix},\qquad b_z^\dagger b_z-a_z^\dagger a_z=\mu_{\mathbb R}.$$

The maps $b_z^\dagger$ are onto for every $z$ exactly when the datum is stable; the maps $a_z$ are injective for every $z$ exactly when it is costable. Consequently, when both moments vanish, regularity is equivalent to $D_z$ being onto for every $z$. On this locus $f_z=a_z^\dagger a_z=b_z^\dagger b_z$ is positive definite and

$$P_z=1-D_z^\dagger\operatorname{diag}(f_z^{-1},f_z^{-1})D_z$$

is the smooth orthogonal projection onto a rank-$N$ bundle over $\mathbb R^4$. The projection connection $\nabla=P\,d$ is unitary and satisfies $F^+=0$ for the positive stereographic orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, where $z_1=x^0+ix^1$, $z_2=x^2+ix^3$.

In homogeneous coordinates $[\lambda_1:\lambda_2:\mu_1:\mu_2]$ on $\mathbb P^3$, put $A=B_1\lambda_1-B_2^\dagger\lambda_2-\mu_1$, $C=B_2\lambda_1+B_1^\dagger\lambda_2-\mu_2$ and

$$\alpha=(A,C,J\lambda_1+I^\dagger\lambda_2)^T,\qquad\beta=(-C,A,I\lambda_1-J^\dagger\lambda_2).$$

The polynomial identity is $\beta\alpha=\lambda_1^2\mu_{\mathbb C}+\lambda_1\lambda_2\mu_{\mathbb R}-\lambda_2^2\mu_{\mathbb C}^\dagger$. With $\sigma(\lambda_1,\lambda_2,\mu_1,\mu_2)=(-\bar\lambda_2,\bar\lambda_1,-\bar\mu_2,\bar\mu_1)$, one has $\beta(v)=\alpha(\sigma v)^\dagger$. The real line over $z$ is $\mu_1=z_1\lambda_1-\bar z_2\lambda_2$, $\mu_2=z_2\lambda_1+\bar z_1\lambda_2$; the line at infinity is $\lambda_1=\lambda_2=0$. For regular zero-moment data these maps form a holomorphic bundle monad, trivial on each real line, with middle cohomology on the line over $z$ canonically $\ker D_z$. Its framing at infinity is $W$. The torus acts on the homogeneous coordinates by $(\lambda_1,t_1t_2\lambda_2,t_1\mu_1,t_2\mu_2)$ and on the raw data by $(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$; the monad isomorphism has source, middle and target factors $(t_1t_2)^{-1}$, $\operatorname{diag}(t_2^{-1},t_1^{-1},h)$ and $1$, respectively. It preserves the framing representation $W$ with weights $e_\alpha^{-1}$.

This proves a forward raw block construction. It does not assert that every real Ward monad has this normal form, that its inverse extraction is unique, or that the connection extends with charge $k$; those global correspondence and charge assertions require their separate proofs.

## Statement references

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[Nekrasov, §§3.1–3.3](https://arxiv.org/pdf/hep-th/0206161)

[Donaldson, §§2–3 and6](https://arxiv.org/pdf/2205.08639)

## Facts & Assumptions

**Given:** The exact raw equation, Hermitian spaces, polynomial maps and coordinate conventions in the Statement.

[F1] The raw moment maps, stable word span, costability and gauge/framing action have their stated finite-dimensional meanings. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] A constant-rank smooth bundle map has smooth kernel and image subbundles. [[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]

[F3] The curvature of a connection is its square, and in a frame is $d\omega+\omega\wedge\omega$. [[def-curvature-of-a-vector-bundle-connection]]

[F4] Commuting complex matrices on a nonzero finite-dimensional vector space have a common eigenvector: choose an eigenspace of the first, which is invariant under the second, and then an eigenvector of its restriction. The same applies to dual matrices. [[thm-the-complex-numbers-are-algebraically-closed]]

[F5] The explicit positive stereographic, twistor and real-structure convention is that of the local definition. AC is inherited through the bundle supplier. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]], [[def-axiom-of-choice]]

## Proof

**Given:** The data of the Statement.

1.1 Matrix multiplication gives $b_z^\dagger a_z=(-B_2+z_2)(B_1-z_1)+(B_1-z_1)(B_2-z_2)+IJ=\mu_{\mathbb C}$. Taking adjoints gives the other off-diagonal entry of $DD^\dagger$. Subtracting $a_z^\dagger a_z$ from $b_z^\dagger b_z$ cancels every scalar and linear-in-$z$ term and leaves $[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J=\mu_{\mathbb R}$. This proves both identities with their exact signs. [F1, algebra]

2.1 Failure of surjectivity of $b_z^\dagger=(-B_2+z_2,B_1-z_1,I)$ gives a nonzero covector $\ell$ with $\ell B_i=z_i\ell$ and $\ell I=0$, contradicting the stable spanning set. Conversely, if the stable word span $S$ is proper, the induced pair on $V/S$ commutes since $[B_1,B_2]=-IJ$ has image in $S$. Its dual has a common eigenvector by [F4], and the resulting covector annihilates $I$ and both rows at the corresponding $z$, so surjectivity fails there. A kernel vector of $a_z$ is a common eigenvector of $B_i$ in $\ker J$ and contradicts costability. Conversely, on any nonzero common invariant $S\subset\ker J$, the pair commutes by the complex equation and has a common eigenvector by [F4], producing such a kernel. This proves both equivalences. [F1, F4, step 1.1, algebra]

2.2 Expanding $[A,C]+(I\lambda_1-J^\dagger\lambda_2)(J\lambda_1+I^\dagger\lambda_2)$ gives the stated polynomial with coefficients $\mu_{\mathbb C},\mu_{\mathbb R},-\mu_{\mathbb C}^\dagger$. Substitution of $\sigma v$ in $\alpha$, followed by adjoint, gives exactly $(-C,A,I\lambda_1-J^\dagger\lambda_2)=\beta(v)$. On a real line the same substitution gives $\alpha=a_z\lambda_1+b_z\lambda_2$ and $\beta=b_z^\dagger\lambda_1-a_z^\dagger\lambda_2$. The scalar-coordinate matrix $\left(\begin{smallmatrix}\lambda_1&-\bar\lambda_2\\\lambda_2&\bar\lambda_1\end{smallmatrix}\right)$ is invertible whenever $(\lambda_1,\lambda_2)\ne0$. Solving the two displayed incidence equations similarly recovers a unique $z$ from each point with $\lambda\ne0$; their real-linear coefficient matrix has determinant $(|\lambda_1|^2+|\lambda_2|^2)^2$. The points with $\lambda=0$ form $L_\infty$. Thus these lines cover $\mathbb P^3$. [F1, F5, step 1.1, algebra]

3.1 At zero real moment, step 1.1 gives $DD^\dagger=\operatorname{diag}(f,f)$ with $f=a^\dagger a=b^\dagger b$. Regularity makes $f$ positive definite by injectivity of $a$, and hence makes $D$ onto. Conversely, surjectivity of $D$ makes both diagonal blocks positive definite; $a$ is injective and $b^\dagger$ onto, so step 2.1 gives regularity. Direct multiplication shows $P^\dagger=P$, $P^2=P$, $DP=0$, and $P$ is the identity on $\ker D$. Inversion of positive matrices is smooth, so [F2] gives the rank-$N$ smooth kernel bundle. Projection of the trivial Hermitian connection is a metric connection because for kernel sections $s,t$, $d\langle s,t\rangle=\langle Pds,t\rangle+\langle s,Pdt\rangle$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Differentiate $DP=0$ and its adjoint to obtain $dP\,P=-D^\dagger(DD^\dagger)^{-1}dD\,P$ and $P\,dP=-P\,dD^\dagger(DD^\dagger)^{-1}D$. Thus [F3] gives $F=P\,dP\wedge dP\,P=P\,dD^\dagger\operatorname{diag}(f^{-1},f^{-1})\wedge dD\,P$. Its nonzero differential blocks are $dD=\left(\begin{smallmatrix}dz_2&-dz_1\\-d\bar z_1&-d\bar z_2\end{smallmatrix}\right)$. The resulting two-form blocks are multiples of $dz_1\wedge d\bar z_1-dz_2\wedge d\bar z_2$, $2dz_1\wedge d\bar z_2$ and $2dz_2\wedge d\bar z_1$, with coefficient $f^{-1}$; the $W$ blocks vanish. Expanding in real coordinates shows that these forms are complex linear combinations of $dx^0\wedge dx^1-dx^2\wedge dx^3$, $dx^0\wedge dx^2+dx^1\wedge dx^3$ and $dx^0\wedge dx^3-dx^1\wedge dx^2$. Each has Hodge star minus itself for the positive Euclidean orientation. Multiplication by the degree-zero matrices $P$ preserves this property, so $F^+=0$. [F3, F5, step 3.1, algebra]

4.2 For regular zero-moment data the maps $a_z,b_z$ have orthogonal images and equal positive Gram matrix $f_z$. Therefore $a_z\lambda_1+b_z\lambda_2$ is injective for every nonzero $\lambda$, since its squared norm on $v$ is $(|\lambda_1|^2+|\lambda_2|^2)\langle v,f_zv\rangle$. The identity with $\sigma$ makes $\beta$ surjective as well. At $L_\infty$, $\alpha=(-\mu_1,-\mu_2,0)^T$ and $\beta=(\mu_2,-\mu_1,0)$ have the same properties. A nonzero maximal minor locally solves each kernel and image equation by holomorphic matrix inversion, so their kernels, images and middle quotient have holomorphic local frames. Hence the middle cohomology is a holomorphic bundle. On a finite real line, split $K=\operatorname{im}a_z\oplus\operatorname{im}b_z\oplus\ker D_z$. Using $a_z,b_z$ to identify the first two summands with $V\oplus V$, and multiplying the target by $f_z^{-1}$, the first two summands form $V$ copies of the Euler complex $\mathcal O(-1)\xrightarrow{(\lambda_1,\lambda_2)}\mathcal O^2\xrightarrow{(-\lambda_2,\lambda_1)}\mathcal O(1)$, whose middle cohomology is zero. The remaining summand is the constant $\ker D_z$, proving the canonical linewise identification. The identical Euler calculation at infinity leaves $W$ with its standard framing. [F2, step 3.1, step 2.2, algebra]

5.1 Under the stated simultaneous torus transformation, $A$ and $C$ acquire factors $t_1,t_2$ and the third component of $\alpha$ acquires $t_1t_2h$. Dividing the resulting middle map by $t_1t_2$ gives $U_K=\operatorname{diag}(t_2^{-1},t_1^{-1},h)$, with source factor $(t_1t_2)^{-1}$ and target factor $1$; direct substitution verifies both chain squares. At infinity the Euler blocks cancel and the induced framing action is precisely $h$. This projective torus action preserves the real-line incidence and commutes with $\sigma$ projectively. In the chart $\lambda_1=1,\lambda_2=0$, the holomorphic coordinates are $(\lambda_2,\mu_1,\mu_2)$ with $(\mu_1,\mu_2)=(z_1,z_2)$, so vertical complex orientation followed by the positive stereographic orientation is the complex orientation of $\mathbb P^3$. For $k=0$, $D$ is the unique map to the zero space, $P=1_W$, and all formulas reduce to the framed trivial bundle. No inverse normal-form theorem or global charge calculation was used. [F1, F5, step 2.2, step 4.2, algebra] ∎
