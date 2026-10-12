---
id: thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra
kind: theorem
title: "Nonzero cell heads classify the simple modules of a cellular algebra"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cellular-algebra-basis-and-cell-module, def-composition-series-and-length-of-a-module, def-simple-module, lem-cell-form-is-associative-and-its-radical-is-a-submodule, thm-jordan-holder-theorem-for-modules, thm-murphy-tableau-elements-form-a-cellular-basis]
justified_by: []
aliases: []
landmark: false
dependency_level: 3
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Corollary 2.3, Proposition 2.7, (2.8) with Corollary 2.11, Lemma 2.12, Theorem 2.13 and Corollary 2.14, printed pp. 9-16 (Graham-Lehrer classification); note that the source's remark after Theorem 2.13 says 'non-degenerate' where 'not identically zero' is the correct hypothesis, and the statement here uses the corrected form"
    - title: "Andrew Mathas and Marcos Soriano, Seminormal forms and Gram determinants for cellular algebras, arXiv:math/0604108; J. reine angew. Math. 619 (2008) 141-173; complete 29-page author-hosted preprint, SHA-256 a2cd21ced7f35dee695388304c26804ef8ac9c54b661a5d624501c80864698a1"
      url: "https://arxiv.org/pdf/math/0604108"
      locator: "Section 2, equations (2.2)-(2.3) and the paragraph after them, pp. 2-4: the cell form, its associativity, the radical and the Graham-Lehrer classification (with a reference to [6, Theorem 3.4] for absolute irreducibility and completeness)"
---

## Statement

Let $F$ be a field and $A$ a finite-dimensional unital cellular $F$-algebra with
cellular basis $(C,\Lambda)$ over the finite poset $\Lambda$
([[def-cellular-algebra-basis-and-cell-module]]). For $\lambda\in\Lambda$
put $D^{\lambda}:=C^{\lambda}/\mathrm{rad}\,C^{\lambda}$, where
$\mathrm{rad}\,C^{\lambda}$ is the radical of the cell form
([[lem-cell-form-is-associative-and-its-radical-is-a-submodule]]). Then:

1. if $D^{\lambda}\ne0$ then $D^{\lambda}$ is an absolutely irreducible
   (absolutely simple) $A$-module: it is simple over $F$ and remains simple
   after every extension of scalars to a larger field;
2. $\{D^{\lambda}:\lambda\in\Lambda,\ D^{\lambda}\ne0\}$ is a complete set of
   pairwise non-isomorphic simple $A$-modules ([[def-simple-module]],
   [[thm-jordan-holder-theorem-for-modules]]);
3. $D^{\lambda}\ne0$ if and only if the cell form
   $\langle\ ,\ \rangle_\lambda$ is not identically zero, if and only if
   $\mathrm{rad}\,C^{\lambda}\ne C^{\lambda}$; and, when these equivalent
   conditions hold, $\mathrm{rad}\,C^{\lambda}$ is the unique maximal proper
   submodule and the Jacobson radical of $C^{\lambda}$, so $D^{\lambda}$ is its
   simple head. If the form is identically zero, the cell-form quotient
   $D^{\lambda}$ is zero; no assertion about the Jacobson radical or the actual
   head of $C^{\lambda}$ is made.

No semisimplicity of $A$ is assumed; the theorem is the Graham-Lehrer
classification and applies in particular to $A=H_{F,q}(S_n)$ for every field
$F$ and every $q\in F^{\times}$.

## Facts & Assumptions

**Given:** A field $F$, a finite-dimensional unital cellular $F$-algebra $A$ with cellular basis $(C,\Lambda)$ over the finite poset $\Lambda$, cell modules $C^{\lambda}$ and cell forms $\langle\ ,\ \rangle_\lambda$ ([[def-cellular-algebra-basis-and-cell-module]]).

[F1] Cell-form calculus ([[lem-cell-form-is-associative-and-its-radical-is-a-submodule]]): the form $\langle\ ,\ \rangle_\lambda$ is the unique bilinear form with $c^{\lambda}_{us}c^{\lambda}_{tv}\equiv\langle c^{\lambda}_s,c^{\lambda}_t\rangle_\lambda c^{\lambda}_{uv}\pmod{A^{\rhd\lambda}}$; it is symmetric and associative, $\langle xa,y\rangle_\lambda=\langle x,i(a)y\rangle_\lambda$; $x\,c^{\lambda}_{uv}=\langle x,c^{\lambda}_u\rangle_\lambda c^{\lambda}_v$ for $x\in C^{\lambda}$; and $\mathrm{rad}\,C^{\lambda}$ is the kernel of $x\mapsto\langle x,-\rangle_\lambda$, an $A$-submodule.

[F2] The cellular axioms ([[def-cellular-algebra-basis-and-cell-module]]): $C$ is an $F$-basis of $A$; $A^{\rhd\lambda}=\langle c^{\mu}_{uv}:\mu\rhd\lambda\rangle_F$; condition (ii) reads $c^{\lambda}_{st}a\equiv\sum_vr_vc^{\lambda}_{sv}\pmod{A^{\rhd\lambda}}$ for all $s$, and its image under the anti-automorphism $i$ reads $ac^{\lambda}_{st}\equiv\sum_ur'_uc^{\lambda}_{ut}\pmod{A^{\rhd\lambda}}$ for all $t$.

[F3] A finite-dimensional algebra over a field is artinian, and an artinian module has finite length; the Jordan-Hölder theorem gives well-defined composition multiplicities ([[def-composition-series-and-length-of-a-module]], [[thm-jordan-holder-theorem-for-modules]]).



## Proof

**Proof technique:** direct.

1.1 For $\lambda\in\Lambda$ the spans $A^{\unrhd\lambda}$ and $A^{\rhd\lambda}$ are two-sided ideals: by [F2] both $c^{\lambda}_{st}a$ and $ac^{\lambda}_{st}$ are congruent modulo $A^{\rhd\lambda}$ to combinations of the $c^{\lambda}$-elements, so $A^{\unrhd\lambda}\cdot A\subseteq A^{\unrhd\lambda}$ and $A\cdot A^{\unrhd\lambda}\subseteq A^{\unrhd\lambda}$, and $A^{\rhd\lambda}$, the sum of the ideals $A^{\unrhd\mu}$ over $\mu\rhd\lambda$, is a two-sided ideal as well. Consequently $A^{\unrhd\nu}A^{\unrhd\lambda}\subseteq A^{\unrhd\nu}\cap A^{\unrhd\lambda}$ and $A^{\unrhd\lambda}A^{\unrhd\nu}\subseteq A^{\unrhd\nu}\cap A^{\unrhd\lambda}$, because a product of a $c^{\nu}$-element and a $c^{\lambda}$-element lies in $A^{\unrhd\nu}$ by the ideal property of $A^{\unrhd\nu}$ and in $A^{\unrhd\lambda}$ by that of $A^{\unrhd\lambda}$. The intersection $A^{\unrhd\nu}\cap A^{\unrhd\lambda}$ is spanned by the $c^{\gamma}$ with $\gamma\unrhd\nu$ and $\gamma\unrhd\lambda$; if $\lambda\not\unrhd\nu$ then no such $\gamma$ equals $\lambda$, since $\gamma=\lambda$ would force $\lambda\unrhd\nu$, so all of them satisfy $\gamma\rhd\lambda$ and $A^{\unrhd\nu}\cap A^{\unrhd\lambda}\subseteq A^{\rhd\lambda}$. Hence, when $\lambda\not\unrhd\nu$, every product $c^{\lambda}_{tt}b$ with $b\in A^{\unrhd\nu}$ lies in $A^{\rhd\lambda}$; the right action of $b$ on $C^{\lambda}$ is read off from $c^{\lambda}_{tt}b\equiv\sum_vr_vc^{\lambda}_{tv}\pmod{A^{\rhd\lambda}}$ with unique coefficients $r_v$, so $b$ acts as the zero operator on $C^{\lambda}$, that is, $A^{\unrhd\nu}\cdot C^{\lambda}=0$. [given, F2, algebra]

1.2 Generation by vectors outside the radical: let $x\in C^{\lambda}$ with $x\notin\mathrm{rad}\,C^{\lambda}$. Since $\mathrm{rad}\,C^{\lambda}=\{z:\langle z,-\rangle_\lambda=0\}$ there is $y\in C^{\lambda}$ with $\langle x,y\rangle_\lambda\ne0$, and after rescaling $y$ we may assume $\langle x,y\rangle_\lambda=1$. Write $y=\sum_ua_uc^{\lambda}_u$ and put $y_v:=\sum_ua_uc^{\lambda}_{uv}\in A$ for $v\in T(\lambda)$. Then [F1] gives $xy_v=\sum_ua_u(xc^{\lambda}_{uv})=\sum_ua_u\langle x,c^{\lambda}_u\rangle_\lambda c^{\lambda}_v=\langle x,y\rangle_\lambda c^{\lambda}_v=c^{\lambda}_v$, so every basis vector of $C^{\lambda}$ lies in the submodule $xA$, hence $xA=C^{\lambda}$. [given, F1, algebra]

1.3 Nontrivial action of the upward ideal: suppose $D^{\mu}\ne0$. Since $\mathrm{rad}\,C^{\mu}\ne C^{\mu}$ there is $t\in T(\mu)$ with $c^{\mu}_t\notin\mathrm{rad}\,C^{\mu}$; by definition of the radical there is $u\in T(\mu)$ with $\langle c^{\mu}_t,c^{\mu}_u\rangle_\mu\ne0$, and then $c^{\mu}_u\notin\mathrm{rad}\,C^{\mu}$ as well. By [F1] the element $c^{\mu}_{ut}\in A^{\unrhd\mu}$ acts on $C^{\mu}$ by $c^{\mu}_t\cdot c^{\mu}_{ut}=\langle c^{\mu}_t,c^{\mu}_u\rangle_\mu c^{\mu}_t$, so on the quotient $D^{\mu}$ it sends the nonzero class of $c^{\mu}_t$ to its nonzero multiple $\langle c^{\mu}_t,c^{\mu}_u\rangle_\mu[c^{\mu}_t]\ne0$. Thus $A^{\unrhd\mu}$ does not annihilate $D^{\mu}$. [given, F1, algebra]

2.1 Consequences for the radical: every proper submodule $M\subsetneq C^{\lambda}$ is contained in $\mathrm{rad}\,C^{\lambda}$, since $x\in M$ with $x\notin\mathrm{rad}\,C^{\lambda}$ would give $C^{\lambda}=xA\subseteq M$ by step 1.2, a contradiction. Hence, if $\mathrm{rad}\,C^{\lambda}\ne C^{\lambda}$, then $\mathrm{rad}\,C^{\lambda}$ contains every proper submodule, is the unique maximal proper submodule, and equals the Jacobson radical of $C^{\lambda}$; then $D^{\lambda}=C^{\lambda}/\mathrm{rad}\,C^{\lambda}$ is simple, because a nonzero submodule of the quotient has the form $N/\mathrm{rad}\,C^{\lambda}$ with $N\supsetneq\mathrm{rad}\,C^{\lambda}$ a submodule, and $N=C^{\lambda}$ by maximality. Moreover $D^{\lambda}\ne0$ if and only if $\mathrm{rad}\,C^{\lambda}\ne C^{\lambda}$ if and only if the form $\langle-,-\rangle_\lambda$ is not identically zero: the radical is the kernel of $x\mapsto\langle x,-\rangle_\lambda$, so it is all of $C^{\lambda}$ exactly when $\langle x,y\rangle_\lambda=0$ for all $x,y$, and otherwise this kernel is a proper subspace containing $0$. [given, step 1.2, F1, F3]

2.2 Pairwise distinctness: suppose $D^{\lambda}\cong D^{\mu}\ne0$. If $\lambda$ does not dominate $\mu$, then step 1.1 gives $A^{\unrhd\mu}\cdot C^{\lambda}=0$, hence $A^{\unrhd\mu}\cdot D^{\lambda}=0$, and transporting this along the isomorphism gives $A^{\unrhd\mu}\cdot D^{\mu}=0$, contradicting step 1.3. Hence $\lambda\unrhd\mu$; the same argument with the roles of $\lambda$ and $\mu$ exchanged gives $\mu\unrhd\lambda$, so $\lambda=\mu$ by antisymmetry of the poset. Thus the nonzero cell heads are pairwise non-isomorphic. [step 1.1, step 1.3]

3.1 Absolute irreducibility: let $F'/F$ be a field extension and let $C'^{\lambda}=C^{\lambda}\otimes_FF'$ be the base-changed cell module of the base-changed cellular algebra $A'=A\otimes_FF'$. The cellular axioms and the cell form base change, so the Gram matrix of the form on $C'^{\lambda}$ is the scalar extension of the Gram matrix on $C^{\lambda}$; the rank of a matrix is the largest size of a minor with nonzero determinant, a field-independent computation with the polynomial determinants of the entries, so $\dim_{F'}\mathrm{rad}\,C'^{\lambda}=\dim_F\mathrm{rad}\,C^{\lambda}$. If $D^{\lambda}\ne0$ then $D'^{\lambda}:=C'^{\lambda}/\mathrm{rad}\,C'^{\lambda}\cong D^{\lambda}\otimes_FF'$ is nonzero, and steps 1.2 and 2.1 applied over $F'$ show that every element of $C'^{\lambda}$ outside $\mathrm{rad}\,C'^{\lambda}$ generates $C'^{\lambda}$, so $\mathrm{rad}\,C'^{\lambda}$ is the unique maximal submodule of $C'^{\lambda}$ and $D'^{\lambda}$ is simple over $F'$. Hence $D^{\lambda}$ remains simple after every extension of scalars, i.e. it is absolutely irreducible. [given, step 1.2, step 2.1, F1, algebra]

3.2 Completeness: every simple right $A$-module $S$ is isomorphic to some $D^{\lambda}$ with $D^{\lambda}\ne0$. Order $\Lambda$ as $\lambda_1,\dots,\lambda_N$ so that $\lambda_i\rhd\lambda_j$ implies $i<j$, so larger labels come first, and put $A_j:=\langle c^{\lambda_i}_{uv}:i\le j\rangle_F$; then each $A_j$ is a two-sided ideal (if $\mu$ occurs among $\lambda_1,\dots,\lambda_j$ and $\gamma\unrhd\mu$, then $\gamma$ occurs there too, so $A^{\unrhd\mu}\subseteq A_j$ and the claim follows from step 1.1), $A_0=0$, $A_N=A$. Moreover $A_j/A_{j-1}\cong A^{\unrhd\lambda_j}/A^{\rhd\lambda_j}$, which as a right $A$-module is the direct sum over $s\in T(\lambda_j)$ of the column spans $\langle c^{\lambda_j}_{sv}+A^{\rhd\lambda_j}:v\in T(\lambda_j)\rangle\cong C^{\lambda_j}$ (the right action preserves the first index by [F2], and $A^{\rhd\lambda_j}\subseteq A_{j-1}$ while $A^{\unrhd\lambda_j}\cap A_{j-1}=A^{\rhd\lambda_j}$). Let $S\ne0$ be simple and let $j$ be least with $SA_j\ne0$ (such $j$ exists since $SA_N=SA=S$ by unitality). Then $SA_j$ is a nonzero submodule of $S$, so $SA_j=S$, while $SA_{j-1}=0$ by minimality of $j$; choosing $s\in S$ with $sA_j\ne0$, the map $A_j/A_{j-1}\to S$, $a+A_{j-1}\mapsto sa$, is a well-defined nonzero $A$-module surjection. As $A_j/A_{j-1}$ is a direct sum of copies of $C^{\lambda_j}$, the images of these copies sum to $S\ne0$, so some copy surjects onto the simple module $S$; thus $S$ is a simple quotient of $C^{\lambda_j}$. If the form on $C^{\lambda_j}$ were identically zero, then $c^{\lambda_j}_{st}c^{\lambda_j}_{uv}\equiv0\pmod{A^{\rhd\lambda_j}}$ for all $s,t,u,v$ by [F1]; since $A^{\unrhd\lambda_j}A^{\unrhd\lambda_i}\subseteq A^{\unrhd\lambda_i}\subseteq A_{j-1}$ for $i<j$ and $A^{\unrhd\lambda_j}A^{\rhd\lambda_j}+A^{\rhd\lambda_j}A^{\unrhd\lambda_j}\subseteq A^{\rhd\lambda_j}\subseteq A_{j-1}$, this gives $A_j^2\subseteq A_{j-1}$, whence $S=SA_j=SA_j^2\subseteq SA_{j-1}=0$, a contradiction. Hence the form on $C^{\lambda_j}$ is not identically zero, so by step 2.1 $\mathrm{rad}\,C^{\lambda_j}$ is the unique maximal submodule and the simple quotient $S$ of $C^{\lambda_j}$ satisfies $S\cong D^{\lambda_j}$ with $D^{\lambda_j}\ne0$. [given, step 1.1, step 2.1, F1, F2, F3]

4.1 Assembly: part 1 is step 3.1; part 2 is step 3.2 (exhaustion) together with step 2.2 (pairwise non-isomorphism) and step 2.1 (each nonzero $D^{\lambda}$ is simple); part 3 is step 2.1. The proof classifies right modules, and since the anti-automorphism $i$ identifies right and left $A$-modules, the statement holds on either side. The classification applies to $A=H_{F,q}(S_n)$ because the Murphy basis of [[thm-murphy-tableau-elements-form-a-cellular-basis]] is a cellular basis of the type-$A$ Hecke algebra over every field. No semisimplicity was assumed, all posets and tableau sets are finite, and no choice principle is used. [step 2.1, step 2.2, step 3.1, step 3.2] ∎
