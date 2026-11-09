---
id: thm-author-9b282fc59773-asok-fasel-comparison-input
kind: theorem
title: Asok–Fasel Chern-compatible comparison and lifting input
status: published
domain: mathematics
deps:
  - def-author-9b282fc59773-chern-map-and-fibers
dependency_roles:
  def-author-9b282fc59773-chern-map-and-fibers: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Aravind Asok and Jean Fasel, A cohomological classification of vector
        bundles on smooth affine threefolds
      url: https://arxiv.org/pdf/1204.0770v5
      locator: Theorem 1, p. 2; §6, pp. 22–26
      statement: The comparison/lifting interface in the Statement, extracted from the
        proof of Theorem 6.6; Theorem 1 gives its resulting pointed bijection.
      hypotheses: k algebraically closed, characteristic not 2; X a smooth affine
        k-scheme of finite type of pure dimension 3; ordinary Chow-theoretic
        Chern classes; line bundles arbitrary.
      reading_limits: Read Theorem 1 and introductory outline, pp. 2–3; §6, pp. 22–26,
        including Theorem 6.1, Proposition 6.2 and its proof, Proposition 6.3
        and its proof, Proposition 6.5 and the complete proof of Theorem 6.6.
        Also read Theorem 3.3 statement (p. 10), Proposition 4.16 statement (p.
        17), and Proposition 5.1, Corollary 5.3 and Proposition 5.4 with the
        adjacent displayed arguments (pp. 20–21). Visually inspected PDF p. 26.
        Did not reconstruct §§2–5, Morel Remark 7.22, the cited representability
        theorem, Bloch identification, or the zero-cycle divisibility theorem;
        these remain part of the explicit published external input, not locally
        proved results.
dependency_level: 13
---

## Statement
Let $k$ be algebraically closed of characteristic different from two, and $X$ a smooth affine $k$-scheme of finite type of pure dimension three. For the defined $V=\mathrm{Vect}_2(X)$ and $T=\operatorname{Pic}(X)\times\mathrm{CH}^2(X)$, there exist sets $M,N$, bijections $v:V\to M$, $b:N\to T$, and a surjection $t:M\to N$ with $b t v=C_X$. For every $n\in N$, there are abelian groups $A_n,H_n,D_n$ and homomorphisms exact at the middle group in $A_n\to H_n\to D_n$, with $A_n=D_n=0$, such that the nonempty fiber $t^{-1}(n)$ is a surjective image of the underlying set of $H_n$. Under the ordinary divisor-class identification $\operatorname{Pic}(X)\cong\mathrm{CH}^1(X)$, the first coordinate $[\det E]$ is the usual first Chern class $c_1(E)$; the second coordinate is the usual Chow-theoretic $c_2(E)$, with its standard projective-bundle sign convention.

## Statement references
[[def-author-9b282fc59773-chern-map-and-fibers]]

## External input
This is an explicitly imported established theorem interface, extracted from Asok–Fasel, arXiv:1204.0770v5, Theorem 1 (p. 2), Proposition 6.2 (p. 24), Proposition 6.3 and Proposition 6.5 (p. 25), and the complete proof of Theorem 6.6 (p. 26). It is not a locally reconstructed obstruction-theory theorem. The sets-and-maps formulation records exactly what is needed for the local application; none of the extra symbols is defined by circular appeal to the desired classification.

In the source, $M=[X,B\mathrm{GL}_2]_{\mathbb A^1}$ is the set of morphisms in the unstable $\mathbb A^1$-homotopy category, that is, the category of simplicial Nisnevich sheaves localized at Nisnevich local weak equivalences and at the projections $U\times\mathbb A^1\to U$. Here $B\mathrm{GL}_2$ is the simplicial classifying space of the sheaf of invertible two-by-two matrices, and brackets denote unpointed homotopy classes. The map $v$ is affine vector-bundle representability. The set $N$ is the set of maps to its second Postnikov stage: the truncation preserving homotopy sheaves through degree two and killing the higher ones. The map $t$ is induced by that truncation. These constructions and representability are imported, not proved here.

Proposition 6.3 describes the second stage by a line bundle $L$ and a degree-two class with coefficients in the $L$-twisted Milnor–Witt K-theory sheaf. Corollary 5.3 identifies that degree-two cohomology with ordinary Milnor K-theory cohomology, hence with $\mathrm{CH}^2(X)$ by the source's Chow identification. The first two paragraphs of the proof of Theorem 6.6 identify the resulting maps, not merely the groups: the first stage is determinant, and the second coordinate is the composite with the universal second Chern class (using Morel, Remark 7.22). This is the map-level content of $b t v=C_X$.

For precision about the imported uniqueness mechanism, the groups in the statement are the source's Nisnevich cohomology groups
$$A_n=H^3_{\mathrm{Nis}}(X,T'_4),\qquad H_n=H^3_{\mathrm{Nis}}(X,\pi^{\mathbb A^1}_3(B\mathrm{GL}_2)(\xi)),\qquad D_n=H^3_{\mathrm{Nis}}(X,\mathrm{GW}^2_3(L)).$$
Here $L$ is the line-bundle coordinate of $b(n)$ and $\xi$ its associated multiplicative-group torsor (the complement of its zero section); twisting uses that torsor. Nisnevich cohomology means the derived cohomology of sections on the site of étale maps with covers admitting a residue-field-preserving lift of each point. The symbols $\pi^{\mathbb A^1}_3$, $T'_4$ and $\mathrm{GW}^2_3$ denote respectively the homotopy sheaf, the kernel sheaf of Theorem 3.3 for $n=1$, and the Grothendieck–Witt sheaf in the source; their constructions are part of this external input, not additional locally defined suppliers. The exact sequence is displayed in the proof of Theorem 6.6. Proposition 6.2 supplies surjectivity of $t$ in dimension three; the preceding lifting discussion, pp. 23–24, supplies the quotient description of a nonempty lift fiber used in the statement. In that description one may choose a representative and a lift; only existence of the resulting surjection of sets is asserted here.

The last paragraph of the proof of Theorem 6.6 establishes $A_n=D_n=0$. It uses Theorem 3.3, Proposition 6.5, Proposition 5.1 to kill the relevant fundamental-ideal sheaf, Proposition 5.4 with modulus twelve to kill the top Milnor-K quotient cohomology, and Proposition 4.16 to make the twisted Grothendieck–Witt group a quotient of $\mathrm{CH}^3(X)/2$. Divisibility of zero-cycles on this smooth affine threefold makes this last quotient zero. Thus the imported input includes all hypotheses needed for both existence and uniqueness, for every determinant class, not merely the trivial determinant.

## Source notes
Read Theorem 1 and introductory outline, pp. 2–3; §6, pp. 22–26, including Theorem 6.1, Proposition 6.2 and its proof, Proposition 6.3 and its proof, Proposition 6.5 and the complete proof of Theorem 6.6. Also read Theorem 3.3 statement (p. 10), Proposition 4.16 statement (p. 17), and Proposition 5.1, Corollary 5.3 and Proposition 5.4 with the adjacent displayed arguments (pp. 20–21). Visually inspected PDF p. 26. Did not reconstruct §§2–5, Morel Remark 7.22, the cited representability theorem, Bloch identification, or the zero-cycle divisibility theorem; these remain part of the explicit published external input, not locally proved results.
