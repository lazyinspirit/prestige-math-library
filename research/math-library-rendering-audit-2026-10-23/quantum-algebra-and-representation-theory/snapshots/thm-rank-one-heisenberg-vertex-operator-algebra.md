---
id: thm-rank-one-heisenberg-vertex-operator-algebra
kind: theorem
title: "The rank-one Heisenberg vacuum space is a conformal VOA of central charge one"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-rank-one-heisenberg-vertex-algebra, lem-state-field-reconstruction-from-local-generators, def-conformal-vertex-algebra, def-vertex-algebra-state-field, def-formal-distribution-on-a-vector-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "Section 3.1, Proposition 3.1 and Example 3.1; Section 3.3, Example 3.4. The oscillator and central-term calculations are supplied locally."
    - title: "Christophe Nozaradan, Introduction to Vertex Algebras"
      url: "https://arxiv.org/pdf/0809.1380"
      locator: "Sections 2.7.3, 3.4 and 4.3: free bosons, normal products and reconstruction."
---

## Statement

The data in [[def-rank-one-heisenberg-vertex-algebra]] define a vertex algebra with the displayed normal-monomial state fields. With $\omega=\tfrac12x_1^2$ it is a conformal vertex algebra of CFT type in the convention of [[def-conformal-vertex-algebra]], with central charge $1$. Its conformal modes are

$$L(n)=\frac12\sum_{k\in\mathbb Z}{:}a_k a_{n-k}{:},\qquad L(0)=\sum_{r\ge1}r x_r\frac{\partial}{\partial x_r},\qquad L(-1)=T.$$

Each quadratic-mode sum is finite on every vector. The weight-$d$ space is $P_d$, with the finite basis of monomials $\prod_r x_r^{m_r}$ satisfying $\sum_r r m_r=d$; in particular $P_0=\mathbb C\mathbf1$.

## Facts & Assumptions

**Given:** The explicitly based polynomial vacuum space, oscillator operators, translation, candidate fields and conformal vector.

[F1] [[def-rank-one-heisenberg-vertex-algebra]] gives all oscillator and normal-order formulas and the weighted polynomial grading.

[F2] [[lem-state-field-reconstruction-from-local-generators]] constructs a unique vertex algebra from local creative translation-covariant fields whose negative modes span; its construction transports all field residue products to their vacuum states.

[F3] [[def-formal-distribution-on-a-vector-space]] fixes the two binomial expansions and the residue definition of field products.

[F4] [[def-conformal-vertex-algebra]] requires Virasoro modes, $L(-1)=T$, finite nonnegative integer weight spaces and one-dimensional weight zero; [[def-vertex-algebra-state-field]] fixes the vertex-algebra convention.

## Proof

1.1 On every polynomial, differentiation and multiplication give $[a_m,a_n]=m\delta_{m,-n}I$. All sufficiently large positive modes kill that polynomial. Thus $a(z)$ is a field, and its commutator is $\partial_w\delta(z,w)$, obtained by summing $m z^{-m-1}w^{m-1}$. Multiplying this distribution by $(z-w)^2$ gives zero (differentiate $(z-w)\delta(z,w)=0$), so the generator is local with itself. Directly $[T,a_n]=-n a_{n-1}$ and $T1=0$. Also $a(z)1=\sum_{r\ge1}x_rz^{r-1}=e^{zT}x_1$, since $T^j x_1=j!x_{j+1}$. The negative modes are the multiplication operators $x_r$, whose monomials span $P$. All hypotheses of [F2] hold. [given, F1, F2, F3, algebra]

2.1 The reconstruction has precisely the stated normal fields. Indeed the two binomial expansions in [F3], with index $-r$, give $a(z)_{(-r)}B(z)={:}b_r(z)B(z){:}$: taking the residue separates the modes $a_{-r-j}$, with coefficient $\binom{r+j-1}{j}z^j$, from the modes $a_j$, with coefficient $(-1)^{r-1}\binom{r+j-1}{j}z^{-r-j}$. These are the divided derivatives of the negative and nonnegative parts of $a$. By [F2]'s vacuum-state transport, the state of that product is $a_{-r}v=x_rv$ if $B=Y(v,z)$. Induction on the number of factors gives the displayed monomial formula. The same-sign modes commute, so nesting these normal products introduces no extra contractions. This proves the candidate state fields coincide with the reconstructed ones. [F1, F2, F3, step 1.1, algebra]

3.1 Since $Y(\omega,z)=\tfrac12{:}a(z)^2{:}$, its coefficient is the quadratic sum stated. For a fixed $n$ and polynomial, only finitely many terms survive: modes of large positive index kill the polynomial after normal ordering, and the sum of two negative indices is fixed. The oscillator commutator gives $[L(n),a_m]=-m a_{n+m}$ by the two terms $k=-m$ and $n-k=-m$ in that sum. Directly the sums at $n=0,-1$ give $L(0)=\sum_{r\ge1}a_{-r}a_r$ and $L(-1)=\sum_{r\ge1}a_{-r-1}a_r=T$, since $a_0=0$. [F1, step 2.1, algebra]

4.1 Let $C_{m,n}=[L(m),L(n)]-(m-n)L(m+n)$. Step 3.1 and the operator commutator identity show that $C_{m,n}$ commutes with every $a_r$. Any operator commuting with all multiplication operators and all positive derivatives is scalar: its value on $1$ is killed by every partial derivative and hence is constant, and commuting with multiplication determines its value on every monomial. Each $L(n)$ has degree $-n$, so this scalar is zero unless $m+n=0$. For $m>0$, $L(m)1=L(0)1=0$ and $L(-m)1=\tfrac12\sum_{r=1}^{m-1}x_r x_{m-r}$. Applying $L(m)$ with step 3.1 gives $C_{m,-m}1=\tfrac12\sum_{r=1}^{m-1}r(m-r)1=(m^3-m)1/12$. Antisymmetry covers negative $m$, and $m=0$ is zero. Thus $[L(m),L(n)]=(m-n)L(m+n)+(m^3-m)\delta_{m,-n}I/12$. [F1, step 3.1, algebra]

5.1 The explicit Euler operator in step 3.1 has weight $d$ on $P_d$. For fixed $d$, only $x_1,\ldots,x_d$ can occur, with $m_r\le d/r$, so its monomial basis is finite. There are no negative degrees, and degree zero consists of constants. Along with $L(-1)=T$ and the Virasoro relations of step 4.1, these verify every requirement in [F4]. No choice principle or analytic completion is used. [F1, F4, step 1.1, step 3.1, step 4.1, algebra] ∎
