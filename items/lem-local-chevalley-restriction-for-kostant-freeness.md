---
id: "lem-local-chevalley-restriction-for-kostant-freeness"
kind: "lemma"
title: "Local Chevalley restriction for Kostant freeness"
deps: ["def-kostant-harmonic-subspace-of-the-symmetric-algebra", "lem-finite-semisimple-cartan-root-and-string-structure", "lem-finite-semisimple-pbw-and-highest-weight-construction", "lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums", "def-finite-linear-invariant-and-coinvariant-polynomial-algebras"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, Theorem10.1 pp54\u201355; local polynomial-density and finite character proof"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ and any Cartan subalgebra $\mathfrak h$, restriction of polynomial functions gives a graded algebra isomorphism
$$\mathbb C[\mathfrak g]^{\mathfrak g}\longrightarrow\mathbb C[\mathfrak h]^W.$$
Equivalently, under the Killing identifications it is the graded isomorphism $S(\mathfrak g)^{\mathfrak g}\cong S(\mathfrak h)^W$, where restriction on symmetric algebras is the algebra map induced by the Killing-orthogonal projection $\mathfrak g\to\mathfrak h$. This holds also in rank zero and uses no AC.

## Facts & Assumptions

**Given:** The indicated Cartan and the corresponding finite Weyl group.

[F1] The Killing identification with polynomial functions and the symmetric adjoint action are [[def-kostant-harmonic-subspace-of-the-symmetric-algebra]].

[F2] Cartan/root decomposition, the nondegenerate Cartan restriction, simple triples, root-vector adjoint nilpotence and the finite Weyl/weight lattice structure are [[lem-finite-semisimple-cartan-root-and-string-structure]].

[F3] The finite-dimensional modules $L(\lambda)$ of every dominant integral weight exist and have the proved weight decompositions by [[lem-finite-semisimple-pbw-and-highest-weight-construction]].

[F4] Their characters and distinct-element orbit sums have finite mutually inverse triangular expansions by [[lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums]].

[F5] Polynomial-function faithfulness and the finite Reynolds projection onto invariants are [[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]].

## Proof

1.1 For a root vector $e$, the nilpotent derivation $A=\operatorname{ad}_e$ of $\mathfrak g$ has a finite exponential $E(t)=\sum_{k\ge0}t^kA^k/k!$. The binomial product rule for a derivation proves $E(t)[x,y]=[E(t)x,E(t)y]$ by matching the finite coefficients, and the same binomial identity gives $E(t)E(-t)=1$. Thus it is a Lie automorphism depending polynomially on $t$. If $p\in\mathbb C[\mathfrak g]$ corresponds by F1 to an adjoint-invariant symmetric tensor, then $dp_x([z,x])=0$ for every $z,x$: on a generator $p(x)=B(y,x)$, invariance gives $(\operatorname{ad}_z p)(x)=B([z,y],x)=-dp_x([z,x])$, and the product rule extends this identity to all polynomials. Therefore $\frac{d}{dt}p(E(t)x)=0$, and a polynomial in $t$ with zero derivative is constant in characteristic zero. Hence $p$ is unchanged by every root exponential. [F1, F2, F5, given, algebra]

1.2 For fixed $d$, the powers $\lambda^d$ of dominant integral linear forms span $S^d(\mathfrak h^*)$. Indeed choose the fundamental-weight basis $\omega_1,\ldots,\omega_r$ supplied by F2. If their indicated span were proper, finite-dimensional linear algebra would give a nonzero linear functional $\ell$ on $S^d(\mathfrak h^*)$ vanishing on it. The polynomial $q(t)=\ell((\sum_i t_i\omega_i)^d)$ would vanish for every $t\in\mathbb Z_{\ge0}^r$. A polynomial vanishing on that grid is zero: fix the first $r-1$ nonnegative integer coordinates and use the infinitely many zeros in the last coordinate to kill each coefficient, then induct on $r$. Expanding $q$ gives coefficient $\binom d{a_1,\ldots,a_r}\ell(\omega_1^{a_1}\cdots\omega_r^{a_r})$ at $t_1^{a_1}\cdots t_r^{a_r}$. These nonzero multinomial factors force $\ell$ to vanish on the monomial basis, a contradiction. For $d=0$ the powers are $1$ and the claim is immediate; for $r=0,d>0$ the space is zero. [F2, F5, given, algebra]

2.1 For a normalized simple triple put $N_i=\exp(\operatorname{ad}_{e_i})\exp(-\operatorname{ad}_{f_i})\exp(\operatorname{ad}_{e_i})$. Direct use of its three brackets gives $N_i(h_i)=-h_i$: the successive images of $h_i$ are $h_i-2e_i$, then $-h_i-2e_i$, then $-h_i$. If $h\in\mathfrak h$, its component $h-\alpha_i(h)h_i/2$ commutes with $e_i,f_i$ and is fixed by all three exponentials. Thus $N_i(h)=h-\alpha_i(h)h_i$, the reflection on $\mathfrak h$ dual to $s_i$. By step 1.1 invariant $p$ is unchanged by $N_i$, so its restriction is fixed by every simple reflection and hence by $W$. Restriction is visibly a graded algebra homomorphism into the required invariant ring. [step 1.1, F2, F5, algebra]

2.2 For $\lambda$ dominant integral and integer $d\ge0$, put $T_{\lambda,d}(x)=\operatorname{tr}_{L(\lambda)}(\rho_\lambda(x)^d)$, interpreting the zeroth power as the identity. F3 makes this a homogeneous polynomial of degree $d$ (a constant when $d=0$). For $d>0$ its derivative in direction $[z,x]$ is $d\operatorname{tr}([\rho_\lambda(z),\rho_\lambda(x)]\rho_\lambda(x)^{d-1})=0$ by cyclicity; the constant case is immediate. Step 1.1's infinitesimal identity therefore makes it invariant. On the Cartan it equals $\sum_\nu(\dim L(\lambda)_\nu)\nu(h)^d$ by the weight decomposition. Define a linear map on the formal group algebra by $e^\nu\mapsto\nu^d$; at $d=0$ each image is $1$, including $\nu=0$. Applying it to F4's finite inverse character expansion expresses the orbit moment $M_{\lambda,d}=\sum_{\nu\in W\lambda}\nu^d$ as a finite integer combination of the restrictions of $T_{\mu,d}$. [step 1.1, F3, F4, algebra]

2.3 To prove injectivity, choose a regular $h_0\in\mathfrak h$, so $\alpha(h_0)\ne0$ for each root. Such a point exists by avoiding the finitely many nonzero linear root equations, using the finite polynomial-curve argument. Enumerate all roots and choose one nonzero vector $e_\alpha$ from each root space. Define the polynomial map from $\mathbb C^{|\Phi|}\times\mathfrak h$ to $\mathfrak g$ by $F((t_\alpha),h)=\prod_\alpha\exp(t_\alpha\operatorname{ad}_{e_\alpha})h$ in that fixed order. At $(0,h_0)$ its linear part sends the Cartan variation $u$ to $u$ and the $\alpha$-coordinate to $[e_\alpha,h_0]=-\alpha(h_0)e_\alpha$. F2's direct root decomposition makes this linear map invertible. If a nonzero polynomial $p$ vanished on the image, translate the input by $(0,h_0)$ and the output by $h_0$. Write the lowest nonzero homogeneous part of $p(h_0+y)$ as $q(y)$. The lowest part of its composition with $F-h_0$ is $q(Ly)$, where $L$ is the invertible linear part. This is nonzero, a contradiction. Polynomial-function faithfulness from F5 justifies passing from pointwise vanishing to the polynomial identity. Now if an invariant $p$ restricts to zero on $\mathfrak h$, step 1.1 makes it zero on the image of $F$, so it is zero. [step 1.1, F2, F5, algebra]

3.1 Average the spanning family in step 1.2 over $W$. F5 makes averaging surjective onto the invariant homogeneous polynomials. Each average of $\lambda^d$ is $M_{\lambda,d}/|W\lambda|$, since each distinct orbit point has the same stabilizer multiplicity in the group sum. Thus the orbit moments span $S^d(\mathfrak h^*)^W$. Step 2.2 places each of them in the image of restriction, proving surjectivity in every degree. Step 2.3 proves injectivity, and step 2.1 proves the algebra and grading assertions. Finally F2's orthogonal root decomposition implies that restricting the linear function $B(x,\cdot)$ to $\mathfrak h$ is $B(\operatorname{pr}_{\mathfrak h}x,\cdot)$; extending on generators proves the symmetric-algebra formulation. In rank zero both invariant algebras are $\mathbb C$ and restriction is the identity. All modules used are individually finite-dimensional and every orbit average, coordinate choice and expansion is finite; no AC occurs. [step 2.1, step 2.2, step 2.3, step 1.2, F1, F2, F5, given, algebra] ∎
