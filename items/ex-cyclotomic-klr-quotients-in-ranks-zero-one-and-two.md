---
id: ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two
kind: example
title: "Cyclotomic KLR quotients in ranks zero, one and two"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-divided-power-klr-idempotents-and-projectives,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric,
       thm-klr-pbw-basis-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 4.1, rank-one examples after Corollary 4.4, and Section 5.1-5.2 (the sl_2 categorical relation)."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Section 2.2, Example 3 and Section 3.1, Example 3.23: the nil-Hecke algebra NH_m, the coinvariant column and the decomposition NH_m = P_{i,m}^{[m]_{q_i}!}."
---

## Example

Work over any field $k$ with a real symmetrizable Cartan datum, arbitrary symmetrizers $d_i$, dominant $\Lambda$ and the STANDARD homogeneous polynomials $a_i=u^{\lambda_i}$.
(a) $R^\Lambda(0)=k$ has one normalized simple and projective, the vacuum.
(b) For every color $i$, $R^\Lambda(\alpha_i)=k[x]/x^{\lambda_i}$ with $\deg x=2d_i$ and graded dimension $\sum_{r=0}^{\lambda_i-1}q^{2d_ir}$ when $\lambda_i\ge1$. Its unique normalized simple is $k$, its normalized projective HOM-self-dual cover is the regular module, and the coefficient-of-$x^{\lambda_i-1}$ Frobenius FUNCTIONAL has degree $-2d_i(\lambda_i-1)$. If $\lambda_i=0$ the block is zero and has NO simple; if $\lambda_i=1$ it is $k$.
(c) In rank one $I=\{i\}$, for $n\ge1$ the algebra is the cyclotomic nil-Hecke quotient $NH_n/(x_1^{\lambda_i})$; at $n=0$ it is $k$, as in (a). The root block is nonzero precisely for $0\le n\le\lambda_i$. At each such root it has exactly one normalized self-dual simple, and zero blocks have none; hence there are $\lambda_i+1$ normalized simple classes in total, matching the rank-one highest-weight module. For $1\le n\le\lambda_i$ its symmetric corner is $k[e_1,\ldots,e_n]/(h_{\lambda_i-n+1},\ldots,h_{\lambda_i})$, the graded Grassmannian coinvariant ring, and the algebra is the associated graded polynomial-column matrix algebra. The normalized simple column has graded dimension $[n]_{q_i}!$, where $q_i=q^{d_i}$.
(d) Explicitly at $\lambda_i=2,n=2$, the block is $\operatorname{End}_k(C\{-d_i\})$ with $C=k[x_1,x_2]/(x_1+x_2,x_1x_2)$, its basis $1,x_1$ in degrees $0,2d_i$. Its unique self-dual simple $S_2=C\{-d_i\}$ has graded dimension $q_i^{-1}+q_i$ and is also the normalized indecomposable projective $P_2$. It is NOT a one-dimensional module with both dots zero. The regular class is $[R^\Lambda(2\alpha_i)]=[2]_{q_i}[P_2]$ in $K_0$ and $[2]_{q_i}[S_2]$ in $G_0$.
(e) Arbitrary monic $a_i$ gives the ungraded deformation: $\lambda_i=2$, $a_i=u(u-1)$ gives $k\oplus k$ at root $\alpha_i$. Ordinary finiteness/symmetry remain true, but this is not the standard graded $V(2)$ identification.

## Verification

**Proof technique:** compute the nil-Hecke first-power ideal as a matrix-entry ideal over the symmetric polynomials, using a finite companion algebra and its unit trace-dual basis; then identify the unique graded simple column and the explicit rank-two block.

**Given:** The standard homogeneous cyclotomic datum of the Example over any degree-zero field, with $\lambda_i=\langle h_i,\Lambda\rangle$ and $q_i=q^{d_i}$.

[F1] The standard first-strand quotient is defined in [[def-cyclotomic-klr-quotient-at-a-dominant-weight]]. The rank-one nil-Hecke matrix model is $NH_n=\operatorname{End}_{S_n}(P_n)$ with $S_n=k[e_1,\ldots,e_n]$ and $P_n=k[x_1,\ldots,x_n]$, its Artin monomial basis, integral perfect trace and centered divided-power polynomial column ([[def-divided-power-klr-idempotents-and-projectives]], [[thm-klr-pbw-basis-theorem]]).

[F2] The ordinary cyclotomic blocks are finite dimensional, including standard homogeneous specializations ([[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]). This is used only after the exact matrix ideal calculation, not to infer its precise ideal or the exact pure-$i$ cutoff.

1.1 The empty word gives $R^\Lambda(0)=k$. One strand has no crossings, so its presentation is $k[x]/x^{\lambda_i}$ with $\deg x=2d_i$. For $\lambda_i>0$ the monomials $1,x,\ldots,x^{\lambda_i-1}$ give the stated Hilbert series. The unique graded simple is $k$ at degree zero, and the regular module is its indecomposable projective cover. Evaluation identifies $\operatorname{HOM}_B(B,B)^\psi$ with $B$, so this is the projective Hom-self-dual normalization, without a vector-dual centering shift. The coefficient-of-$x^{\lambda_i-1}$ functional pairs the monomial basis anti-diagonally with unit entries; it is a nondegenerate symmetric Frobenius functional of degree $-2d_i(\lambda_i-1)$. If $\lambda_i=0$, its defining relation is $1=0$, so the block is zero and has no simple; if $\lambda_i=1$, it is $k$. [F1, construct, algebra]

1.2 For $n\ge1$, put $S=S_n$ and $C=S[z]/(z^n-e_1z^{n-1}+\cdots+(-1)^ne_n)$, embedded in $P_n$ by $z=x_1$. Let $e'_a$ be the elementary symmetric functions of $x_2,\ldots,x_n$. The identities $e_a=e'_a+ze'_{a-1}$, $e'_0=1$, express the $e'_a$ recursively in $z,e_1,\ldots,e_a$; the final $e'_n=0$ is precisely the displayed monic relation. Hence $C=k[x_1,e'_1,\ldots,e'_{n-1}]$, and the Artin basis for the remaining $n-1$ variables makes $P_n$ free of rank $(n-1)!$ over $C$. On its $S$-basis $1,z,\ldots,z^{n-1}$, multiplication by $z^{\lambda_i}$ is repeated $(n-1)!$ times in multiplication by $x_1^{\lambda_i}$ on $P_n$. In a full matrix algebra over $S$, left and right matrix units isolate each matrix entry and insert it into any chosen entry. Therefore its two-sided ideal is the matrix ideal of exactly those scalar entries, so the cyclotomic quotient is the polynomial-column matrix algebra over their quotient of $S$. [F1, construct, algebra]

2.1 Define $\epsilon:C\to S$ to be the coefficient of $z^{n-1}$ in the power basis. The matrix $\epsilon(z^{a+b})$ for $0\le a,b<n$ is zero for $a+b<n-1$ and one for $a+b=n-1$, hence anti-triangular with unit anti-diagonal and invertible over $S$. Its dual basis is therefore integral over $S$. Pairing multiplication by $z^{\lambda_i}$ with this invertible trace matrix shows that its entry ideal is exactly the ideal generated by $\epsilon(z^{\lambda_i+a+b})$, $0\le a,b<n$. Put $h_r=0$ for $r<0$ and $h_0=1$; the monic equation gives the recurrence $h_r=e_1h_{r-1}-e_2h_{r-2}+\cdots+(-1)^{n-1}e_nh_{r-n}$. Induction on the power gives $\epsilon(z^{n-1+r})=h_r$, including the stated initial values. All indices in the entry list are between $\lambda_i-n+1$ and $\lambda_i+n-1$. The first consecutive $n$ indices $h_{\lambda_i-n+1},\ldots,h_{\lambda_i}$ occur, and the recurrence expresses every higher one using them. Thus the exact corner ideal is $(h_{\lambda_i-n+1},\ldots,h_{\lambda_i})$. [F1, step 1.2, construct, algebra]

3.1 If $n>\lambda_i$, the consecutive list contains $h_0=1$, and the quotient is zero. If $1\le n\le\lambda_i$, every index in that list is positive, so the ideal is contained in the augmentation ideal of $S$ and the corner quotient is nonzero. It is finite dimensional by F2 and the full matrix description of step 1.2. Its degree-zero part is $k$, and its positive-degree ideal is nilpotent because the graded vector space is finite and positively graded. It is therefore graded local with exactly one simple up to shift, its augmentation quotient. Matrix equivalence gives exactly one graded simple column in each nonzero root block. For $n=0$ there is the vacuum, so the total number of normalized rank-one simples is exactly $\lambda_i+1$. [F2, step 1.2, step 2.1, algebra]

4.1 The augmentation simple column is $P_n\otimes_S k$, the ordinary coinvariant polynomial representation with its Artin basis, centered by $-d_i\binom n2$. Its Hilbert series is $q_i^{-\binom n2}\prod_{r=1}^n(1+q_i^2+\cdots+q_i^{2(r-1)})=[n]_{q_i}!$. The integral perfect Artin trace in F1 pairs complementary degrees, so this centering makes its generator-fixing finite vector dual isomorphic to itself. This yields the unique normalized simple in every nonzero block. The same matrix model retains the symmetric corner of step 2.1 and its polynomial-column projectives, proving all ranks of part (c), rather than identifying the whole algebra with a commutative quotient. [F1, step 3.1, algebra]

5.1 At $n=\lambda_i=2$, the corner is $k[e_1,e_2]/(h_1,h_2)=k$, since $h_1=e_1$, $h_2=e_1^2-e_2$. The polynomial column is $C_2=k[x_1,x_2]/(x_1+x_2,x_1x_2)$, with basis $1,x_1$ and $x_2=-x_1$, $x_1^2=0$, so its centered column $S_2=C_2\{-d_i\}$ has Hilbert series $q_i^{-1}+q_i$. The block is $\operatorname{End}_k(S_2)$; its unique simple column is also its normalized indecomposable projective. The regular left module is $S_2\otimes S_2^*$, with the second factor giving shifts $\pm d_i$, and thus its class is $[2]_{q_i}[P_2]$ in projective $K_0$ and $[2]_{q_i}[S_2]$ in module $G_0$. The matrix identification and these formulas hold in characteristic two as well. A one-dimensional zero-dot module would violate the equal-colour mixed relation with unit right side, so no such simple exists. [F1, step 2.1, step 4.1, algebra]

6.1 Finally the coprime polynomials $u,u-1$ give $k[u]/(u(u-1))=k\oplus k$, with two ordinary simples at root $\alpha_i$. This is the ungraded monic deformation: ordinary finiteness and symmetry retain their stated scope, but it is not the standard homogeneous graded rank-one highest-weight identification. Parts (a)–(d) follow from steps 1.1–5.1 with arbitrary symmetrizer and every field, and part (e) from this finite coprime-factor calculation. [step 1.1, step 3.1, step 5.1, algebra] ∎
