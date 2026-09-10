---
id: lem-koszul-euler-characteristic-first-element-reduction
kind: lemma
title: "koszul euler characteristic first element reduction"
status: draft
origin: pipeline
deps: [lem-koszul-homology-finite-length-for-an-ideal-of-definition, lem-bounded-finite-length-complex-euler-identities, thm-long-exact-sequence-in-homology, def-axiom-of-choice, thm-support-and-annihilator-of-a-finite-module, thm-localisation-of-modules-is-exact, thm-nakayama-lemma, lem-koszul-complex-concatenation-tensor-isomorphism, thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Hochster, Math 615 Winter 2012, printed p.165, Proposition and following Corollary (last-element Euler reduction); first-element form via signed wedge order"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2024/10/615W12.pdf"
pipeline_run: phase-2-catchup-24
---

## Statement

Assume AC. Let $(R,\mathfrak m)$ be a commutative Noetherian local ring, $M$ a finite $R$-module, $J=(y_1,\ldots,y_s)$ and $\ell_R(M/(x,J)M)<\infty$. Put $C=M/xM$ and $T=0:_M x$. Then $C/JC$ and $T/JT$ have finite length, all homology modules in the following formula have finite length, and
$$\chi(K(x,y_1,\ldots,y_s;M))=\chi(K(y_1,\ldots,y_s;C))-\chi(K(y_1,\ldots,y_s;T)).$$
The sequence $\mathbf y$ may be empty. This does not assert that $T$ itself has finite length.

## Facts & Assumptions

**Given:** AC, a commutative Noetherian local ring $(R,\mathfrak m)$, finite $M$, $J=(y_1,\ldots,y_s)$, and $\ell_R(M/(x,J)M)<\infty$. Set $C=M/xM$ and $T=0:_M x$.

[A1] We assume [[def-axiom-of-choice]].

[F1] For finite modules, closed-point support is equivalent to finite length; $\operatorname{Supp}(L/JL)=\operatorname{Supp}(L)\cap V(J)$; finite-colength sequences have finite-length Koszul homology: [[lem-koszul-homology-finite-length-for-an-ideal-of-definition]].

[F2] Euler characteristic is additive for short exact bounded complexes with finite-length homology, and a shift reverses its sign: [[lem-bounded-finite-length-complex-euler-identities]].

[F3] A short exact sequence of complexes gives the homology LES: [[thm-long-exact-sequence-in-homology]].

[F4] Finite-module support is $V(\operatorname{Ann}(L))$: [[thm-support-and-annihilator-of-a-finite-module]].

[F5] Localization of modules is exact: [[thm-localisation-of-modules-is-exact]].

[F6] Under AC, Nakayama applies to finite modules and ideals in the Jacobson radical: [[thm-nakayama-lemma]].

[F7] Concatenation is the signed tensor Koszul complex: [[lem-koszul-complex-concatenation-tensor-isomorphism]].

[F8] Finite modules over a Noetherian ring have finite submodules: [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]].

## Proof

**Proof technique:** direct.

1.1 The modules $C$ and $T$ are finite, the latter as a submodule of $M$. Direct quotienting gives $C/JC=M/(x,J)M$, of finite length by hypothesis. Further, $xT=0$ and $T\subseteq M$, so $\operatorname{Supp}(T)\subseteq\operatorname{Supp}(M)\cap V(x)$: the first inclusion follows by exact localization of the injection and the second by the annihilator formula. [F4, F5, F8, given]

1.2 Let $B=[M\xrightarrow{x}M]$ in degrees $1,0$. It contains the subcomplex $T[1]$, with $T$ only in degree one. Its quotient is $Q=[M/T\xrightarrow{\bar x}M]$, where $\bar x(m+T)=xm$. This is well-defined and injective: $xm=0$ holds exactly for $m\in T$. The map $Q\to C[0]$, zero in degree one and quotient in degree zero, is onto with kernel $D=[M/T\xrightarrow{\bar x}xM]$. This differential is an isomorphism, since every element of $xM$ is $xm$ and its kernel is zero. Thus $D$ is acyclic. [given, algebra]

2.1 For a prime $\mathfrak p\ne\mathfrak m$ containing $(x,J)$, the finite-length hypothesis makes $M_{\mathfrak p}/(x,J)_{\mathfrak p}M_{\mathfrak p}=0$. Here the local ring $R_{\mathfrak p}$ has maximal ideal $\mathfrak pR_{\mathfrak p}$ containing $(x,J)_{\mathfrak p}$ and $M_{\mathfrak p}$ is finite. Nakayama under AC gives $M_{\mathfrak p}=0$, hence $T_{\mathfrak p}=0$. If $\mathfrak p$ does not contain $x$, $T_{\mathfrak p}=0$ because $x$ is an invertible annihilator; if it does not contain $J$, then $(T/JT)_{\mathfrak p}=0$. These cases cover every $\mathfrak p\ne\mathfrak m$, so $T/JT$ has closed-point support and finite length. Consequently all three Koszul complexes in the statement have finite-length homology. [A1, F1, F5, F6, step 1.1]

2.2 Put $P=K(\mathbf y;R)$. Define the total tensor differential on $B_i\otimes P_j$ by $d_B\otimes1+(-1)^i1\otimes d_P$. Identifying $m\otimes(e_x\wedge w)$ with the corresponding ordered wedge places the $x$ term first. Deleting that first factor gives $xm\otimes w$, and deleting a $y$ factor has the extra sign $(-1)^i$ from passing the $i$ $x$-factors. Thus this total complex is $K(x,\mathbf y;M)$, as in the concatenation interface (the coefficient $M$ may be moved between tensor factors via $m\otimes(a\otimes w)\mapsto a\otimes(w\otimes m)$). [F7, step 1.2]

3.1 Every $P_j$ is finite free. Tensoring either $0\to T[1]\to B\to Q\to0$ or $0\to D\to Q\to C[0]\to0$ with $P_j$ gives a finite direct sum of that exact sequence. Taking finite sums in each total degree therefore preserves exactness, yielding short exact total complexes. No flatness of $T$ or $M/T$ is needed. [step 1.2, step 2.2]

4.1 To prove $D\otimes P$ acyclic, filter it by columns $j\leq k$ for $k=-1,0,\ldots,s$. The differential in $D$ preserves $j$, and that in $P$ lowers it, so these are subcomplexes. The initial subcomplex is zero. The quotient at stage $k$ is $D\otimes P_k$ shifted in total degree by $k$, with only the $D$ differential. It is a finite direct sum of the two-term isomorphism $D$, and hence acyclic. The LES at each of the finitely many stages shows that the total complex is acyclic. Applying the LES to the second tensor exact sequence gives $H_i(Q\otimes P)\cong H_i(K(\mathbf y;C))$. [F3, step 1.2, step 3.1]

5.1 The first tensor exact sequence has left complex $T[1]\otimes P=K(\mathbf y;T)[1]$: in its terms the total differential on $P$ is $-d_P$, exactly the shift convention. The middle complex is $K(x,\mathbf y;M)$ and the right has the homology just computed. All these homologies have finite length by the earlier support calculation. Euler additivity and the shift sign give precisely $\chi(K(x,\mathbf y;M))=\chi(K(\mathbf y;C))-\chi(K(\mathbf y;T))$. [F2, step 2.1, step 2.2, step 3.1, step 4.1]

6.1 If $s=0$, then $P=R[0]$, and the calculation reads $\chi([M\xrightarrow{x}M])=\ell_R(C)-\ell_R(T)$; their lengths are finite by the support argument. If $M=0$, every complex is zero. If $(x,J)=R$, the same support cases prove the required finiteness and the tensor argument still applies; no step required this ideal to be proper. If $x$ is a unit, then $C=T=0$ and $B$ is an isomorphism complex. If $x=0$, then $C=T=M$ and the formula gives zero by cancellation. Thus all asserted cases are included. [step 2.1, step 1.2, step 5.1, algebra] ∎

## Remarks

Source locator: Hochster, Math 615, printed p.165, Proposition and Corollary comparing the quotient and annihilator when the last element is removed. The displayed formula here removes the first element; the signed tensor calculation proves that convention explicitly. The acyclic-kernel argument and finite column filtration replace any generic two-row spectral-sequence appeal.
