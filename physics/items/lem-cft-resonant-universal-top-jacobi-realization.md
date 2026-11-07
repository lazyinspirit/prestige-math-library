---
id: lem-cft-resonant-universal-top-jacobi-realization
kind: lemma
title: Universal singular-top induction from module Jacobi identities
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-resonant-induced-top-return-data
  - lem-cft-resonant-zhu-associative-algebra
  - lem-cft-zhu-zero-mode-identities-on-singular-vectors
  - lem-cft-locality-to-jacobi-residue-calculus
  - lem-pbw-for-countably-presented-kac-moody-lie-algebras
  - lem-module-jacobi-formal-delta-substitution-identity
  - def-admissible-vertex-algebra-module
  - def-vertex-algebra-module
  - def-universal-enveloping-algebra-as-a-tensor-quotient
dependency_roles:
  def-cft-resonant-induced-top-return-data: mathematical-premise
  lem-cft-resonant-zhu-associative-algebra: mathematical-premise
  lem-cft-zhu-zero-mode-identities-on-singular-vectors: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
  lem-pbw-for-countably-presented-kac-moody-lie-algebras: mathematical-premise
  lem-module-jacobi-formal-delta-substitution-identity: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-universal-enveloping-algebra-as-a-tensor-quotient: mathematical-premise
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: voa-resonant-induction-and-projective-socles
physical_scope: Pure mathematics; no physical premises or physical claim.
axiom_base: ZF
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras
      url: https://arxiv.org/pdf/math/0607679v1
      locator: "§§2–3, n=0 Zhu induction and the simple-top correspondence. The mode algebra and top verification are reconstructed below."
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Vertex operator algebras and associative algebras
      url: https://arxiv.org/pdf/q-alg/9612010
      locator: "§§2–4, the Borcherds current Lie algebra and induced-module construction; the local n=0 presentation is proved here."
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "§§5.1–5.2, printed pp. 113–120; Zhu algebra and admissible top conventions."
verification:
  precheck: pending
---

## Statement

Let \(V\) be a conformal vertex algebra of CFT type over \(\mathbb C\), and let \(A(V)\) and \(M(U)\) have the presentations fixed in the preceding definition. Then \(A(V)\) is associative and unital, the quotient \(M(U)\) is an admissible \(V\)-module with \(M(U)(0)=U\), and it is functorial in unital left \(A(V)\)-modules \(U\). For any weak \(V\)-module \(W\), every \(A(V)\)-module map \(f:U\to\Omega_0(W)\) extends uniquely to a grading-preserving \(V\)-module map \(M(U)\to W\). Here \(\Omega_0(W)\) is the subspace annihilated by all modes of negative operator degree. If \(U\) is simple, the sum \(J(U)\) of all graded submodules of \(M(U)\) disjoint from its degree-zero copy of \(U\) is the unique largest such submodule, and \(M(U)/J(U)\) is a simple weak module. Conversely, every simple admissible \(V\)-module, after shifting its specified grading so its first nonzero grade is zero, is the unique quotient \(M(U)/J(U)\) for its simple Zhu top \(U\).

## Statement references

[[def-cft-resonant-induced-top-return-data]]

[[lem-cft-resonant-zhu-associative-algebra]]

[[lem-cft-zhu-zero-mode-identities-on-singular-vectors]]

[[def-admissible-vertex-algebra-module]]

## Facts & Assumptions

**Given:** A CFT-type VOA \(V\), a unital left \(A(V)\)-module \(U\), and the graded mode presentation from the preceding definition.

[F1] [[def-cft-resonant-induced-top-return-data]] defines the operator degree, the induced mode presentation \(M(U)\), \(\Omega_0\), and all-word top-return maps; it asserts no top injectivity.

[F2] [[lem-cft-resonant-zhu-associative-algebra]] proves the associative unital Zhu product, the zero-mode commutator formula, and the higher circle-residue relations: for homogeneous \(a\in V_r\), every \(C_k(a,b)=\sum_{i=0}^r\binom ri a_{(i-k)}b\) lies in \(O(V)\) when \(k\ge2\), while \(C_1=a*b\). The general \(C_{m,n}\) residue proof is Step 1.1 of that supplier.

[F3] [[lem-cft-zhu-zero-mode-identities-on-singular-vectors]]: zero modes preserve \(\Omega_0(W)\), kill \(O(V)\) there, act unitaly, and satisfy \(o(a*b)=o(a)o(b)\). No grading or finite-dimensionality of \(W\) is assumed.

[F4] [[lem-cft-locality-to-jacobi-residue-calculus]] supplies the actual mode commutator, iterate identity, state-product weights, translation and regular-module Jacobi in the non-super convention.

[F5] [[def-admissible-vertex-algebra-module]] gives the nonnegative mode-degree grading convention; [[def-vertex-algebra-module]] gives lower truncation, vacuum and module Jacobi.

[F6] [[lem-pbw-for-countably-presented-kac-moody-lie-algebras]] has the general statement for any complex Lie algebra with a supplied countable ordered basis: ordered words form a basis of its universal enveloping algebra. [[def-universal-enveloping-algebra-as-a-tensor-quotient]] defines that quotient.

[F7] [[lem-module-jacobi-formal-delta-substitution-identity]] gives the formal delta identity used to pass from weak commutativity and weak associativity to the full module-Jacobi coefficients.

## Proof

1.1 For \(a\in V_r\), write \([a]\) for its Zhu class. The mode commutator in [F4] defines the current Lie algebra \(\widehat V\) with degree \(\deg a(m)=r-m-1\); state Jacobi proves the bracket Jacobi identity and the translation relation preserves degree. Its nonpositive-degree subspace \(\mathfrak p\) is a Lie subalgebra. Let negative-degree modes act by zero on \(U\) and let the degree-zero mode \(a(r-1)\) act by \([a]\). The bracket of two zero-degree modes acts as \([a][b]-[b][a]\) by [F2], while a bracket involving a negative-degree mode again has negative degree and acts by zero. The translation relation agrees with \([Ta]=-r[a]\), which follows from \(a\circ\mathbf1=Ta+ra\). The vacuum mode acts as the identity and the other vacuum modes as zero. This verifies that \(U\) is a \(\mathfrak p\)-module. [F1, F2, F4, F5, algebra]

2.1 Form \(E(U)=U(\widehat V)\otimes_{U(\mathfrak p)}U\). Order a countable homogeneous basis with positive-degree modes before nonpositive-degree modes. By [F6], ordered PBW words identify \(E(U)\) with the span of finite words in positive-degree modes applied to \(U\). Each word has nonnegative total degree; only the empty word has degree zero. Thus \(E(U)\) is nonnegatively graded and its degree-zero projection \(p:E(U)\to U\) is the identity on the induced copy of \(U\). For every fixed vector, sufficiently large mode indices have negative degree beyond its current grade and therefore act as zero, so the fields are lower truncated. [F1, F5, F6, step 1.1, algebra]

3.1 For homogeneous \(a\in V_r,b\in V_s\), denote the zero-mode action on \(U\) by \(A_c=[c]|_U\). Projecting the ordered product onto degree zero gives, in the expansion \(|z_1|>|z_2|\),
\[
pY_E(a,z_1)Y_E(b,z_2)u
=z_1^{-r}z_2^{-s}\left(A_aA_b+\sum_{j\ge0}A_{a_{(j)}b}\sum_{t\ge1}\binom{r-1+t}{j}(z_2/z_1)^t\right)u .
\]
Indeed the intermediate grade-zero term is \(A_aA_b\); at intermediate grade \(t>0\), commute the lowering mode \(a_{(r-1+t)}\) past \(b_{(s-1-t)}\) and use the mode commutator in [F4]. Only finitely many \(j\) occur because \(a_{(j)}b=0\) for large \(j\). Put \(w=(z_1-z_2)/z_2\). For each \(j\), the identity
\[
\sum_{t\ge1}\binom{r-1+t}{j}(1+w)^{-t}
=\sum_{i=0}^{j}\binom ri w^{i-j-1}
\]
follows by extracting the coefficient of \(x^j\) in \((1+x)^r/(w-x)\). The projected iterate is \(z_2^{-r-s}\sum_n A_{a_{(n)}b}w^{-n-1}u\). After multiplication by \((1+w)^r\), its coefficient of \(w^{k-1}\), for \(k\ge1\), is the action of \(C_k(a,b)=\sum_{i=0}^r\binom ri a_{(i-k)}b\). Thus the constant coefficient \(C_1\) is \(A_{a*b}=A_aA_b\), and every positive-power coefficient \(C_k\), \(k\ge2\), is zero by the higher circle-residue identities [F2]. The negative-power coefficients are exactly the rational expansion from the projected ordered product: the coefficient of \(w^{-t}\), \(t\ge1\), is \(\sum_{j\ge0}\binom{r-1+t}{j}A_{a_{(j)}b}\), by the binomial identity in the preceding paragraph. Hence the two expansions agree coefficientwise after multiplication by \(z_1^r\), proving weak associativity on the top \(U\). [F1, F2, F3, F4, step 2.1, algebra]

4.1 For a homogeneous source vector \(v\in E(U)(p)\), define the weak-associativity defect by taking coefficients of
\[
D_{r+p}(a,b;v)
=(z_0+z_2)^{r+p}\bigl(Y_E(a,z_0+z_2)Y_E(b,z_2)v-Y_E(Y(a,z_0)b,z_2)v\bigr).
\]
The power makes the substitution coefficientwise well-defined because \(a_{(m)}v=0\) for \(m\ge r+p\). The mode commutator and iterate identities give, for an unweighted defect \(D\),
\[
[c(m),D(a,b)]=\sum_{i\ge0}\binom mi z_1^{m-i}D(c_{(i)}a,b)+\sum_{i\ge0}\binom mi z_2^{m-i}D(a,c_{(i)}b).
\]
For the iterate term, expand \(c_{(j)}(Y(a,z_0)b)\) by the iterate identity; the coefficient of each \(i\) is \(\sum_{j\ge i}\binom mj\binom ji z_2^{m-j}z_0^{j-i}=\binom mi(z_0+z_2)^{m-i}\), also for negative \(m\). Both sums are finite on each coefficient because state products truncate. [F4, F5, step 3.1, algebra]

5.1 First take \(v=u\in U\), so \(p=0\). We prove \(p\,xD_r(a,b;u)=0\) for every finite mode word \(x\), by induction on its length. The empty word case is step 3.1. PBW-sort a nonempty word with positive degrees left, zero degrees next, and negative degrees right; each interchange contributes a shorter commutator word, already covered by induction. A positive-degree leftmost mode has zero degree-zero projection. A zero-degree leftmost mode acts on the projection as \(A_c\) and can be removed. If the leftmost remaining mode has negative degree, commute the negative mode nearest the defect through it by step 4.1 until it reaches \(u\), where it kills \(u\). For a term involving \(c_{(i)}a\), the defect exponent exceeds its new first-state weight by \(m-\mathrm{wt}(c)+1\ge0\); for a term involving \(c_{(i)}b\), it is unchanged. Thus each is a nonnegative polynomial multiple of a defect already covered by the shorter-word induction. This proves the assertion for all words on the top. [F1, F2, F4, F6, step 3.1, step 4.1, induction]

6.1 Now induct on the length of a positive-degree PBW word generating \(v\), proving \(p\,xD_{r+p}(a,b;v)=0\) simultaneously for every preceding word \(x\). The zero-length case is step 5.1. Write \(v=c(m)v_0\) with \(q=\mathrm{wt}(c)-m-1>0\) and \(p=p_0+q\). Commute \(c(m)\) through the defect by step 4.1. The term where it remains before the defect has exponent \(r+p\ge r+p_0\), so it is a nonnegative power times the source-word induction hypothesis. For the term with state \(c_{(i)}a\), its exponent is \(r+p+m-i=(r+\mathrm{wt}(c)-i-1)+p_0\), exactly the required exponent for the new first-state weight. The \(c_{(i)}b\) term has exponent at least \(r+p_0\). All three terms vanish after \(p\,x\) by induction. Hence every defining defect coefficient and every left mode word on it has zero top projection. [F4, F6, step 4.1, step 5.1, induction]

7.1 Let \(I_{\mathrm{wa}}\) be the graded current-mode submodule generated by all coefficients of the weak-associativity defects \(D_{r+p}\), and let \(I_{\mathrm{J}}\) be the submodule generated by the full Jacobi coefficient relations in the definition. Steps 5.1–6.1 show \(I_{\mathrm{wa}}\subseteq\ker p\) and, more strongly, \(p x I_{\mathrm{wa}}=0\) for every finite mode word \(x\). In \(E(U)/I_{\mathrm{wa}}\), the fields are lower truncated by the nonnegative grading, have the vacuum action, and satisfy the imposed weak associativity. The current-mode bracket gives weak commutativity: the commutator is the finite delta-derivative sum with coefficients \(Y_E(a_{(j)}b,z_2)\); multiplying by \((z_1-z_2)^N\), with \(N\) larger than every nonzero product index, kills it. To see the full Jacobi identity, fix homogeneous \(a,b\) and \(v\in E(U)(p)\), put \(d=\mathrm{wt}(a)\), and choose such an \(N\). Multiply the Jacobi defect by \(z_0^N z_1^{d+p}\). Expand the two product delta terms by [F7], then on the iterate term substitute \(z_1=z_0+z_2\) in its prescribed nonnegative-\(z_0\) expansion. Weak associativity identifies the first ordered product with this iterate after the factor \(z_1^{d+p}\); weak commutativity identifies its reversed ordered term with the same commutator expansion, so every coefficient of the multiplied defect is zero. Each coefficient is finite: \(a_{(m)}v=0\) for \(m\ge d+p\) bounds the \(z_1\)-substitution, the chosen locality power bounds the \(z_0\)-substitution, and the grading fixes the total mode degree. Multiplication by \(z_0^N z_1^{d+p}\) is injective on formal Laurent distributions, so the original Jacobi defect is zero. Thus \(E(U)/I_{\mathrm{wa}}\) satisfies Jacobi, which gives \(I_{\mathrm{J}}\subseteq I_{\mathrm{wa}}\). Conversely, Jacobi in \(E(U)/I_{\mathrm{J}}\), multiplied by \(z_1^{d+p}\) and followed by \(\operatorname{Res}_{z_1}\), gives the \(D_{d+p}\) relation: the first and iterate terms substitute \(z_1=z_0+z_2\), while the reversed-product term has zero residue because its delta expansion has only nonnegative \(z_1\)-powers and \(a_{(m)}v=0\) for \(m\ge d+p\). Hence \(I_{\mathrm{wa}}\subseteq I_{\mathrm{J}}\), so the two relation submodules agree. In particular \(M(U)=E(U)/I_{\mathrm{wa}}\) retains its entire degree-zero copy of \(U\), by \(I_{\mathrm{wa}}\subseteq\ker p\), and is admissible. Finally an \(A(V)\)-map \(f:U\to\Omega_0(W)\) is a \(\mathfrak p\)-module map; induction extends it uniquely to \(E(U)\), and the target module Jacobi kills \(I_{\mathrm{J}}=I_{\mathrm{wa}}\). The extension therefore factors uniquely through \(M(U)\). [F1, F3, F5, F7, step 5.1, step 6.1, algebra]

8.1 The sum \(J(U)\) of graded submodules disjoint from \(U\) is still disjoint from \(U\), hence is the unique largest one. If \(U\) is simple, any nonzero graded submodule of \(M(U)/J(U)\) either meets the degree-zero copy of \(U\), in which case it contains \(U\) and generates the quotient, or has zero degree-zero part, in which case its preimage is a larger disjoint graded submodule than \(J(U)\). Thus the quotient is graded-simple. [F1, step 7.1, algebra]

9.1 The algebra \(A(V)\) is at most countable dimensional because \(V\) is a countable direct sum of finite-dimensional weight spaces. A simple \(A(V)\)-module \(U\) is therefore countable dimensional. The central class \([\omega]\) acts as a scalar \(h\): if a division-algebra endomorphism \(T\) of \(U\) were nonscalar, the vectors \((T-\lambda)^{-1}u\) for \(\lambda\in\mathbb C\) and fixed \(u\ne0\) would be linearly independent, since a finite relation multiplied by \(\prod(T-\lambda)\) gives a nonzero polynomial in \(T\) annihilating \(u\), impossible in a division algebra over the algebraically closed field \(\mathbb C\). Uncountability contradicts countable dimension. The conformal mode commutator now gives \(L(0)=h+n\) on every generated grade \(n\); polynomial interpolation on the finite grade support of a vector shows every ungraded submodule is graded. Hence \(M(U)/J(U)\) is simple as a weak module. Conversely, for a simple admissible module shifted to first grade zero, any \(A(V)\)-submodule \(T\) of its top generates a graded submodule whose degree-zero part is exactly \(T\), by PBW reordering and the fact that negative-degree modes kill the top. Simplicity makes the top a simple \(A(V)\)-module. The universal map from its induced module is onto and has a top-disjoint kernel; maximality identifies that kernel with \(J(U)\). This proves the normalized top correspondence. [F1, F2, F4, F5, F6, step 7.1, step 8.1, algebra] ∎
