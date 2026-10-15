---
id: thm-hh-finite-dual-coalgebra-and-hopf-descent
kind: theorem
title: "The finite dual is a coalgebra and descends through bialgebras and Hopf algebras"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps:
  - def-hh-finite-dual-of-an-associative-algebra
  - def-algebraic-dual-and-linear-functional
  - def-hh-scalar-and-tensor-conventions
  - lem-hh-tensor-coherence-on-elementary-tensors
  - lem-hh-finite-matrix-and-module-preliminaries
  - lem-hh-finite-tensor-duality-and-canonical-coevaluation
  - def-hh-bialgebra-and-bialgebra-map
  - thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
  - prop-functoriality-of-module-tensor-products
  - thm-tensor-product-of-algebras-over-a-commutative-ring
  - lem-hh-counit-uniqueness-and-finite-sweedler-calculus
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, §§3.8–3.9"
      url: "https://www.math.csi.cuny.edu/abhijit/iiser2018/reading/Hopf-lecture_notes.pdf"
---
 
## Statement

Let $k$ be a field and $A$ a unital associative $k$-algebra. The finite dual $A^\circ$ is a vector subspace of $A^*$, and $m_A^*(f)$ lies in $A^\circ\otimes A^\circ$ for every $f\in A^\circ$. With $\Delta^\circ(f)=m_A^*(f)$ and $\varepsilon^\circ(f)=f(1_A)$, it is a coalgebra.

Moreover, $f\in A^\circ$ exactly when $f$ is a matrix coefficient of a finite-dimensional left $A$-module. If $H$ is a bialgebra, $H^\circ$ is a bialgebra with convolution product, unit $\varepsilon_H$, coproduct $m_H^*$, and counit $f\mapsto f(1_H)$. If $H$ is a Hopf algebra, $H^\circ$ is closed under $S_H^*(f)=f\circ S_H$, and this map is an antipode on $H^\circ$. No finite-dimensionality or bijectivity of $S_H$ is assumed in the last two conclusions.

## Facts & Assumptions

**Given:** A field $k$, a unital associative $k$-algebra $A$, and, in the final clauses, a bialgebra or Hopf algebra $H$ over $k$.

[F1] [[def-hh-finite-dual-of-an-associative-algebra]]: $A^\circ$ consists of functionals vanishing on a finite-codimensional two-sided ideal, and $m_A^*(f)(a\otimes b)=f(ab)$ is the candidate coproduct.

[F2] [[lem-hh-finite-matrix-and-module-preliminaries]]: every subspace of a finite-dimensional vector space is finite-dimensional; this is the finite-dimensional fact used for intersections of cofinite ideals.

[F3] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: for finite-dimensional $V$, $W$, the canonical map $V^*\otimes W^*\to(V\otimes W)^*$ is an isomorphism.

[F4] [[def-hh-bialgebra-and-bialgebra-map]]: $\Delta_H$ and $\varepsilon_H$ are unital algebra maps, and the tensor-product algebra has $(a\otimes b)(c\otimes d)=ac\otimes bd$.

[F5] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: the antipode satisfies both convolution equations and is anti-multiplicative: $S_H(ab)=S_H(b)S_H(a)$.

[F6] [[prop-functoriality-of-module-tensor-products]] and [[thm-tensor-product-of-algebras-over-a-commutative-ring]]: tensor maps are well-defined on elementary tensors, and the tensor product algebra multiplies componentwise.

[F7] [[lem-hh-counit-uniqueness-and-finite-sweedler-calculus]]: Sweedler notation records a finite tensor sum, and every contraction is a well-defined linear map on that tensor.

## Proof

**Proof technique:** direct.

1.1 If $f\in A^\circ$ vanishes on a finite-codimensional two-sided ideal $I$, and $g\in A^\circ$ vanishes on such an ideal $J$, then $f,g$ and every linear combination vanish on $I\cap J$. The map $A/(I\cap J)\to A/I\oplus A/J$, $a+(I\cap J)\mapsto(a+I,a+J)$, is injective, so its image is a subspace of a finite-dimensional vector space and is finite-dimensional by [F2]. Thus $A^\circ$ is a vector subspace. [given, F1, F2, algebra]

1.2 Let $q:A\to A/I$ be the quotient map and write $f=\bar f q$. Since $A/I$ is finite-dimensional, [F3] identifies $((A/I)\otimes(A/I))^*$ with $(A/I)^*\otimes(A/I)^*$; the transpose of multiplication on $A/I$ therefore gives a finite tensor $\sum_i\bar f_i\otimes\bar g_i$ with $\bar f(ab)=\sum_i\bar f_i(a+I)\bar g_i(b+I)$. Pulling the factors back along $q$ yields $\Delta^\circ(f)=\sum_i(\bar f_iq)\otimes(\bar g_iq)\in A^\circ\otimes A^\circ$, and its evaluation on $a\otimes b$ is $f(ab)$. [given, F1, F3, construct]

1.3 If $f(a)=\ell(\rho(a)v)$ is a coefficient of a finite-dimensional representation $\rho:A\to\operatorname{End}_k(V)$, then $\ker\rho$ is a two-sided ideal of finite codimension and $f(\ker\rho)=0$, so $f\in A^\circ$. Conversely, if $f$ vanishes on a finite-codimensional ideal $I$, the finite-dimensional quotient $V=A/I$ is a left $A$-module by $a\cdot(b+I)=ab+I$; the vector $v=1+I$ and functional $\ell(b+I)=f(b)$ are well-defined and satisfy $f(a)=\ell(a\cdot v)$. Thus the finite-dual functionals are exactly the finite-dimensional matrix coefficients. [given, F1, algebra]

2.1 The evaluation map $A^*\otimes A^*\to(A\otimes A)^*$ is injective: write a finite tensor as $\sum_{i=1}^r\phi_i\otimes\psi_i$ with the $\phi_i$ linearly independent, by choosing a basis of the finite span of its first factors and rewriting. The map $A\to k^r$, $a\mapsto(\phi_1(a),\dots,\phi_r(a))$, is surjective, since a proper subspace of the finite-dimensional space $k^r$ has a nonzero annihilating linear functional, which would give a nontrivial dependence among the $\phi_i$. Choose $a_j$ mapping to the $j$-th standard vector; if the tensor evaluates to zero on every $a\otimes b$, then $\psi_j(b)=0$ for every $b$ and every $j$, so the tensor is zero. Therefore the tensor characterized in step 1.2 is independent of the chosen ideal $I$. [step 1.2, algebra]

2.2 For coefficients $f(a)=\ell(\rho(a)v)$ and $g(a)=\mu(\sigma(a)w)$ of finite-dimensional representations on $V,W$, define $(\rho\otimes\sigma)(a\otimes b)=\rho(a)\otimes\sigma(b)$. By [F6], this is well-defined; on pure tensors it preserves products because $(\rho(aa')\otimes\sigma(bb'))=(\rho(a)\rho(a')\otimes\sigma(b)\sigma(b'))=(\rho(a)\otimes\sigma(b))(\rho(a')\otimes\sigma(b'))$, and it preserves the unit. Composing with the unital algebra map $\Delta_H$ from [F4] gives a finite-dimensional unital representation. Its coefficient at $\ell\otimes\mu,v\otimes w$ is $\sum f(h_1)g(h_2)=(f*g)(h)$, so convolution preserves $H^\circ$. [step 1.3, F4, F6, F7, algebra]

2.3 If $f(a)=\ell(\rho(a)v)$, define an action on $V^*$ by $(h\cdot\lambda)(v')=\lambda(\rho(S_H(h))v')$. By [F5], $S_H(hh')=S_H(h')S_H(h)$, whence $(h\cdot(h'\cdot\lambda))(v')=\lambda(S_H(h')S_H(h)v')=((hh')\cdot\lambda)(v')$, and the unit acts as the identity. The coefficient of this finite-dimensional representation at vector $\ell\in V^*$ and functional $\operatorname{ev}_v(\lambda)=\lambda(v)$ is $f(S_H(h))$. Therefore $S_H^*(f)\in H^\circ$. [step 1.3, F5, algebra]

3.1 For $f\in A^\circ$, evaluation of $(\Delta^\circ\otimes\mathrm{id})\Delta^\circ(f)$ and $(\mathrm{id}\otimes\Delta^\circ)\Delta^\circ(f)$ on $a\otimes b\otimes c$ gives $f((ab)c)$ and $f(a(bc))$, equal by associativity. The evaluation map on three finite tensor factors is injective by repeating the finite-independent-family argument of step 2.1. Evaluating $(\varepsilon^\circ\otimes\mathrm{id})\Delta^\circ(f)$ and $(\mathrm{id}\otimes\varepsilon^\circ)\Delta^\circ(f)$ at $a$ gives $f(1_Aa)=f(a)=f(a1_A)$, so these maps are the identity. [step 1.2, step 2.1, algebra]

3.2 The functional $\varepsilon_H$ lies in $H^\circ$: its kernel is a two-sided ideal, and the induced map $H/\ker\varepsilon_H\to k$ is injective by definition of the kernel and surjective since $\varepsilon_H(1_H)=1$. The two counit equations for $H$ show that it is the left and right convolution unit on $H^\circ$. Convolution is associative on $H^\circ$: by step 2.2 its products stay in $H^\circ$, and because the bialgebra hypothesis gives a coassociative coproduct, for $f,g,r\in H^\circ$ and $h\in H$ we have $((f*g)*r)(h)=\sum_{(h)}f(h_1)g(h_2)r(h_3)=(f*(g*r))(h)$; the finite Sweedler contractions are well-defined by [F7]. The coproduct $\Delta^\circ(f)$ is a finite tensor by step 1.2. For $f,g\in H^\circ$ and $a,b\in H$, $\Delta^\circ(f*g)(a\otimes b)=(f*g)(ab)=\sum f(a_1b_1)g(a_2b_2)=(\Delta^\circ(f)\Delta^\circ(g))(a\otimes b)$, because [F4] makes $\Delta_H$ an algebra map. By the tensor-evaluation injectivity of step 2.1, this proves coproduct multiplicativity. Also $\Delta^\circ(\varepsilon_H)=\varepsilon_H\otimes\varepsilon_H$ since $\varepsilon_H(ab)=\varepsilon_H(a)\varepsilon_H(b)$, and the counit is multiplicative since $(f*g)(1_H)=(f\otimes g)(\Delta_H(1_H))=f(1_H)g(1_H)$. Thus the convolution product is associative and unital, and all bialgebra identities hold. [given, step 1.2, step 2.1, step 2.2, F4, F7, algebra]

4.1 Write $\Delta^\circ(f)=\sum_i f_i\otimes g_i$, so $\sum_i f_i(a)g_i(b)=f(ab)$. Then $\sum_i(S_H^*f_i*g_i)(h)=\sum_{(h)}f(S_H(h_1)h_2)=\varepsilon_H(h)f(1_H),$ and $\sum_i(f_i*S_H^*g_i)(h)=\sum_{(h)}f(h_1S_H(h_2))=\varepsilon_H(h)f(1_H).$ These are the two antipode equations for $S_H^*$ in $H^\circ$, by [F5]. Thus the finite dual of every Hopf algebra is Hopf, without an inverse $S_H^{-1}$. [step 1.2, F5, F7, algebra] ∎
