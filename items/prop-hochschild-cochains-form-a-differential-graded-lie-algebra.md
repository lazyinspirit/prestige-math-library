---
id: prop-hochschild-cochains-form-a-differential-graded-lie-algebra
kind: proposition
title: The shifted Hochschild cochains form a differential graded Lie algebra
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-hh-cochain-complex-and-gerstenhaber-bracket
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sarah J. Witherspoon, Hochschild Cohomology for Algebras
      url: https://people.tamu.edu/~sjw/pub/gsm204.pdf
      locator: Chapter 1, §1.4, Definition 1.4.1 and Lemma 1.4.3
    - title: Nima Moshayedi, Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory
      url: https://arxiv.org/pdf/2012.14662
      locator: §4.2.5, Proposition 4.2.40 and Proposition 4.2.43 (PDF pp. 97–98)
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
proof_strategy: direct
---

## Statement

Let $A$ be a unital associative real algebra and use the cochains, standard
Hochschild differential $\delta$, and Gerstenhaber bracket of
[[def-hh-cochain-complex-and-gerstenhaber-bracket]]. Give
$C^p(A,A)$ shifted degree $p-1$, and put
$\partial\phi=[m,\phi]_G$, where $m(a,b)=ab$. Then
$L^j=C^{j+1}(A,A)$, $j\geq0$, is a differential graded Lie algebra:
the bracket has degree zero and satisfies graded skew-symmetry and Jacobi;
$\partial$ has degree $+1$, squares to zero, and obeys
$$\partial[\phi,\psi]_G=[\partial\phi,\psi]_G +(-1)^{|\phi|}[\phi,\partial\psi]_G.$$
For $\phi\in C^p$, $\partial\phi=(-1)^{p-1}\delta\phi$. In particular,
the standard Hochschild cochains form a cochain complex. When
$A=C^\infty(M,\mathbb R)$, the normalized multidifferential cochains are
closed under both $\delta$ and $[\ ,\ ]_G$.

Here a differential graded Lie algebra means a graded Lie bracket and a
degree-one square-zero differential satisfying the displayed signed
derivation rule. The base field is $\mathbb R$, so division by $2$ is
valid.

## Facts & Assumptions

**Given:** A unital associative real algebra $A$, its multiplication
$m\in C^2(A,A)$, and the cochains, differential, and insertion bracket
defined in [F1].

[F1] [[def-hh-cochain-complex-and-gerstenhaber-bracket]]: a $p$-cochain
has shifted degree $p-1$; $\phi\circ\psi$ is the signed sum of all
insertions of $\psi$ into $\phi$,
$[\phi,\psi]_G=\phi\circ\psi-(-1)^{(p-1)(q-1)}\psi\circ\phi$, and
$\delta$ is the displayed Hochschild coboundary.

## Proof

1.1 Write $\phi\circ_i\psi$ for insertion of a $q$-cochain into slot $i$ of a $p$-cochain, with slots numbered from $0$, so $\phi\circ\psi=\sum_{i=0}^{p-1}(-1)^{i(q-1)}\phi\circ_i\psi$. In $(\phi\circ\psi)\circ\chi-\phi\circ(\psi\circ\chi)$, terms where $\chi$ is inserted into the block occupied by $\psi$ cancel. If that block starts at slot $i$ and $\chi$ is inserted into its local slot $s$, the first expression has coefficient $(-1)^{i(q-1)+(i+s)(r-1)}$, while the second has coefficient $(-1)^{i(q+r-2)+s(r-1)}$; these exponents agree. Every remaining term is a pair of insertions into distinct original slots of $\phi$. For original slots $i<j$, the coefficient with $\psi$ inserted first and $\chi$ second is $(-1)^{i(q-1)+(j+q-1)(r-1)}$; with the insertion order swapped it is $(-1)^{j(r-1)+i(q-1)}$. Their ratio is $(-1)^{(q-1)(r-1)}$. The same comparison for $j<i$ puts the earlier insertion first and gives that same ratio. Thus, with $|\psi|=q-1$ and $|\chi|=r-1$, $$\operatorname{as}(\phi,\psi,\chi) =(-1)^{|\psi||\chi|}\operatorname{as}(\phi,\chi,\psi), \qquad \operatorname{as}(u,v,w):=(u\circ v)\circ w-u\circ(v\circ w).$$ [F1, given, construct, algebra]

1.2 Since $m$ has shifted degree $1$, $$[m,m]_G(a,b,c)=2\bigl((ab)c-a(bc)\bigr)=0$$ by associativity of $A$. Thus $\partial=[m,-]_G$ has degree $+1$. [given, F1, algebra]

2.1 The bracket is graded skew by its defining formula. Put $e_{uv}=(-1)^{|u||v|}$. Expanding the graded Jacobi identity, the difference between its right and left sides is $$\begin{aligned} &\operatorname{as}(\phi,\psi,\chi)-e_{\phi\psi}\operatorname{as}(\psi,\phi,\chi) +e_{\phi\psi}e_{\phi\chi}\operatorname{as}(\psi,\chi,\phi) -e_{\phi\psi}e_{\phi\chi}e_{\psi\chi}\operatorname{as}(\chi,\psi,\phi)\\ &\hspace{2em}{}+e_{\phi\chi}e_{\psi\chi}\operatorname{as}(\chi,\phi,\psi) -e_{\psi\chi}\operatorname{as}(\phi,\chi,\psi). \end{aligned}$$ Step 1.1 gives $\operatorname{as}(\phi,\psi,\chi)=e_{\psi\chi}\operatorname{as}(\phi,\chi,\psi)$, $\operatorname{as}(\psi,\phi,\chi)=e_{\phi\chi}\operatorname{as}(\psi,\chi,\phi)$, and $\operatorname{as}(\chi,\psi,\phi)=e_{\phi\psi}\operatorname{as}(\chi,\phi,\psi)$. Substitution cancels the six terms in three pairs, proving graded Jacobi. [F1, step 1.1, algebra]

3.1 Apply the graded Jacobi identity from step 2.1 with the first two entries equal to $m$. It gives $2\partial^2\phi=\bigl[\,[m,m]_G,\phi\bigr]_G=0$, so $\partial^2=0$ over $\mathbb R$. Applying the same identity with entries $m,\phi,\psi$ gives $\partial[\phi,\psi]_G=[\partial\phi,\psi]_G+ (-1)^{|\phi|}[\phi,\partial\psi]_G$. Hence these operations form a differential graded Lie algebra. [given, step 2.1, step 1.2, algebra]

4.1 Substitute $m$ and $\phi$ into the insertion formula in [F1]. The two outer insertions give $\phi(a_1,\ldots,a_p)a_{p+1}$ and $(-1)^{p-1}a_1\phi(a_2,\ldots,a_{p+1})$. The internal insertions give $-(-1)^{p-1}\sum_{i=1}^{p}(-1)^{i-1} \phi(a_1,\ldots,a_{i-1},a_i a_{i+1},a_{i+2},\ldots,a_{p+1})$. Comparing this with the displayed formula for $\delta$ in [F1] gives $\partial\phi=(-1)^{p-1}\delta\phi$. Since $\partial^2=0$, this also proves $\delta^2=0$. [F1, step 3.1, algebra]

5.1 If a normalized cochain is evaluated on a tuple containing $1$, every insertion term vanishes: the unit either enters the inner cochain, which is normalized, or remains an input of the outer one. In $\delta\phi$, the only potentially nonzero terms when $a_j=1$ are the two neighboring products (or the corresponding endpoint product and boundary term); they have identical cochain arguments and opposite signs, so cancel. Finally, finite compositions of local finite-order differential operators remain finite-order differential operators by the product and chain rules. Thus the normalized multidifferential cochains are closed under the differential and the bracket. [F1, step 4.1, algebra] ∎
