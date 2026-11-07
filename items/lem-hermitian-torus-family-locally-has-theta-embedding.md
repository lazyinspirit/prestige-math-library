---
id: lem-hermitian-torus-family-locally-has-theta-embedding
kind: lemma
title: "Local theta embeddings for balanced Hermitian torus families"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [lem-balanced-hermitian-domain-carries-analytic-torus-family, thm-rational-riemann-form-makes-complex-torus-projective, lem-integral-riemann-form-defines-a-positive-holomorphic-line-bundle, thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne, Hodge Cycles on Abelian Varieties, notes by J. S. Milne"
      url: "https://www.jmilne.org/math/Documents/Deligne82.pdf"
      locator: "Section 4, proof of Theorem 4.8, printed pages 32–34: the analytic family is constructed there, while its algebraization is not imported below."
verification: {}
---

## Statement

Assume AC. Let $\pi:\mathcal T\to\mathcal D$ be the analytic torus family constructed as a quotient of a holomorphic vector bundle by the fixed lattice $\Lambda$, with integral positive Riemann form $\psi$, as in [[lem-balanced-hermitian-domain-carries-analytic-torus-family]]. For any $s_0\in\mathcal D$ there is an open neighbourhood $U$ of $s_0$, a positive integer $M$, and a holomorphic map $\mathcal T|_U\to\mathbb P^N\times U$ over $U$ whose restriction to each fibre is a holomorphic embedding. The map is given by a finite holomorphic family of theta sections with no common zero.

For any compact path in the connected domain, one may choose a connected open neighbourhood of that path, one integer $M$ and one such theta map that embeds every fibre over the neighbourhood. This is an analytic embedding statement. It does not assert that the neighbourhood, the total space, or the embedding is algebraic.

## Facts & Assumptions

**Given:** AC and the analytic family, lattice and form in the Statement.

[F1] The analytic family has torus fibres with fixed full lattice; their complex structures make $\psi$ a positive integral Riemann form ([[lem-balanced-hermitian-domain-carries-analytic-torus-family]]).

[F2] A positive integral Riemann form supplies a holomorphic line bundle via the explicit finite-basis semicharacter and automorphy factors; some positive tensor power of that bundle has finitely many sections whose projective map embeds the individual torus ([[lem-integral-riemann-form-defines-a-positive-holomorphic-line-bundle]], [[thm-rational-riemann-form-makes-complex-torus-projective]]).

[F3] Locally uniformly convergent holomorphic series in several variables have holomorphic sums and locally uniformly convergent derivatives ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

## Proof

**Proof technique:** use an integral symplectic basis, explicit theta Fourier series and stability of an embedding on compact fibres.

1.1 The integral alternating form $\psi$ is nondegenerate. Choose lattice vectors $x,y$ with least positive pairing $d=\psi(x,y)$. Euclidean division and minimality show that $d$ divides both $\psi(x,z)$ and $\psi(y,z)$ for every lattice vector $z$. The integral map $z\mapsto z+\psi(y,z)x/d-\psi(x,z)y/d$ projects onto the orthogonal complement of $\mathbb Zx\oplus\mathbb Zy$ and splits off that rank-two summand. Its complement has nondegenerate restricted form, so induction yields a basis $x_1,\ldots,x_g,y_1,\ldots,y_g$ with $\psi(x_i,x_j)=\psi(y_i,y_j)=0$ and $\psi(x_i,y_j)=d_i\delta_{ij}$, $d_i>0$. No divisibility ordering of the $d_i$ is needed. If $g=0$, the family is a point and the constant map proves the Statement. [F1, given, choose, construct, algebra]

2.1 In the holomorphic quotient bundle specified in the given construction, the constant vectors $x_i$ give holomorphic sections forming a complex basis at every parameter: if their real span met its $J$-image nontrivially, its isotropy would contradict $\psi(v,Jv)>0$. Send $x_i$ to $d_i e_i$, and let the images of $y_j$ be the columns of a holomorphic matrix $\tau=X+iY$. The lattice becomes $D\mathbb Z^g+\tau\mathbb Z^g$, $D=\operatorname{diag}(d_i)$. The map $(u,v)\mapsto u+\tau v$ on real pairs is invertible, so $Y$ is invertible. In these coordinates $\psi(u+\tau v,u'+\tau v')=u^tv'-v^tu'$. Substituting $v=Y^{-1}\operatorname{Im}z$ into $\psi(iz,iw)=\psi(z,w)$ gives $Y=Y^t$ and $X=X^t$; positivity of $\psi(z,iz)$ then gives $Y>0$. Thus $\tau$ is a holomorphic map to Siegel space. [F1, given, step 1.1, construct, algebra]

3.1 Fix $M\ge1$ and $a\in(MD)^{-1}\mathbb Z^g/\mathbb Z^g$. The series $$\theta_a(\tau,z)=\sum_{m\in\mathbb Z^g}e^{\pi iM(m+a)^t\tau(m+a)+2\pi iM(m+a)^tz}$$ converges normally on compact sets because $\operatorname{Im}\tau$ has a uniform positive lower eigenvalue there. By [F3] it and its derivatives are holomorphic. Direct reindexing gives $\theta_a(z+D\ell)=\theta_a(z)$ and $\theta_a(z+\tau n)=e^{-\pi iMn^t\tau n-2\pi iMn^tz}\theta_a(z)$. The factors obey the lattice cocycle, so these series are sections of one holomorphic line bundle $L_M$ over the family. Every section on a fixed fibre is a periodic entire function with those factors. Its Fourier–Laurent expansion on $(\mathbb C^*)^g$, obtained by Cauchy integrals on products of annuli, has coefficients $c_q$, $q\in D^{-1}\mathbb Z^g$, satisfying $c_{q+Mn}=c_qe^{\pi iMn^t\tau n+2\pi iq^t\tau n}$. Thus the $M^g\det D$ theta functions form a basis: one coefficient for each coset of $M\mathbb Z^g$ is free, and the theta functions have disjoint such cosets. The same coefficient integrals vary holomorphically with the parameter. [F3, given, step 2.1, construct, algebra]

4.1 Fix $s_0$ and put $Y_0=\operatorname{Im}\tau(s_0)$. Set $H(z,w)=z^tY_0^{-1}\bar w$ and $f(z)=e^{\pi z^tY_0^{-1}z/2}$. Use the ordered lattice basis $D e_i,\tau(s_0)e_i$ in the explicit semicharacter construction of [F2]. The change of frame by $f$ transforms its Appell–Humbert factors into $1$ for translations by $D e_i$ and $e^{-\pi i\tau_{ii}-2\pi iz_i}$ for translations by $\tau e_i$; the cocycle gives the theta factors for all lattice elements. Hence the positive Riemann bundle of [F2] is $L_1$ at $s_0$. By [F2], some $L_M=L_1^{\otimes M}$ has a finite subsystem of sections embedding the central fibre. Step 3.1 says the full theta basis spans those sections, so its complete projective map also separates points and tangent vectors and has no base point; hence it embeds that fibre. [F2, given, step 2.1, step 3.1, choose, construct, algebra]

5.1 The theta map and its first derivatives vary continuously on compact sets by step 3.1. Identify nearby fibres smoothly with the fixed compact real torus $V/\Lambda$ using [F1]. At the central fibre, finitely many projective coordinate charts and nonzero differential minors cover the torus; by the inverse function theorem and compactness, after shrinking $U$ the maps are injective on a common neighbourhood of the diagonal in each fibre square. Outside that neighbourhood, compactness of the central fibre square and the central embedding give finitely many pair neighbourhoods on which two points remain separated after shrinking $U$. The finitely many nonvanishing theta coordinates also remain without common zero. Thus the theta map is an injective immersion on each nearby compact fibre and hence an embedding. It is holomorphic in the total space and the parameter by step 3.1. [F1, given, step 3.1, step 4.1, choose, construct, algebra]

6.1 Cover a compact path by finitely many such neighbourhoods in a connected chain, with embedding exponents $M_i$. Choose a common positive multiple $M$ of the $M_i$. On each neighbourhood, $L_M$ is a positive tensor power of the locally embedding bundle, so its complete sections contain the corresponding Veronese coordinates and still embed every fibre. The theta basis of step 3.1 supplies one holomorphic coordinate map with this common $M$ on the union of the chain, a connected open neighbourhood of the path. No algebraic parameter scheme or algebraization is used. [given, step 3.1, step 5.1, choose, construct, algebra] ∎

## Boundary

The construction is analytic. It does not supply the Hilbert/graph classifying map to an algebraic parameter scheme or the relative cohomological comparison required for absolute-Hodge propagation.
