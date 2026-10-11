---
id: thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage
kind: theorem
title: "Cyclotomic Schur standards and corner functor control block linkage"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis,
       lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage,
       lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular,
       def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents,
       def-grothendieck-group-of-an-essentially-small-abelian-category,
       thm-jordan-holder-theorem-for-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Mathas, The representation theory of the Ariki–Koike and cyclotomic q-Schur algebras, math/0204025"
      url: "https://arxiv.org/pdf/math/0204025"
      locator: "PDF pp. 16–19, 27–37: arbitrary-level element conventions and contracts; full local arguments in these registration drafts replace the review sketches."
    - title: "Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Ordinary finite type A only; Garnir/Murphy printed pp. 18–25 and ordinary semistandard/Specht/Schur PDF pp. 45–50 were actually read; no arbitrary-level DJM proof read claimed."
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451v4"
      locator: "Section 2.1–2.3 exact multipartition-summand Schur variant and deformation; no external proof fallback."
---

## Statement

For $C_n=\operatorname{End}_{H_n}\bigl(\bigoplus_{\lambda}m_\lambda H_n\bigr)$
of [[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]] over
a field $F$ with unit parameters, its standards $\Delta_\lambda$ have nonzero
absolutely simple heads $L_\lambda$ indexed by all multipartitions, with
$[\Delta_\lambda:L_\lambda]=1$ and $[\Delta_\lambda:L_\mu]\ne0$ only if
$\lambda\unrhd\mu$; the algebra $C_n$ is split quasihereditary. The standard
classes form a $\mathbb Z$-basis of $G_0(C_n\text{-mod})$, and the weight
dimensions $\dim\Delta_\lambda e_\nu=K_{(\lambda,\nu)}$ form a unitriangular
multipartition Kostka matrix. Over the universal ring and the LM deformation
DVR the standards and their forms are free and the weight idempotents satisfy
$e_\nu^*=e_\nu$. The exact corner functor $V\mapsto Ve_\omega$ gives
$\Delta_\lambda e_\omega\cong S_\lambda$ and $L_\lambda e_\omega\cong D_\lambda$
(possibly $0$), so that $[\Delta_\lambda:L_\mu]=[S_\lambda:D_\mu]$ whenever
$D_\mu\ne0$. The centers $Z(C_n)$ and $Z(H_n)$ are canonically isomorphic
because $M_\omega=H_n$ is a summand, and $\Delta_\lambda,\Delta_\mu$ share a
$C_n$-block if and only if $S_\lambda,S_\mu$ share an $H_n$-block; standard
and Specht linkage is exactly shared-simple-factor linkage. No
equality-of-residue-contents-to-primitive-block assertion is made.

## Facts & Assumptions

**Given:** The Schur datum of [F1], the semistandard endomorphism basis [F2],
the finite cellular-head theory [F3], the block and Grothendieck conventions
[F4]–[F5], and the Jucys–Murphy content triangularity [F6].

[F1] The algebra $H_n$, the summands $M_\lambda=m_\lambda H_n$, the direct sum
$M=\bigoplus_\lambda M_\lambda$ with $\omega=(\varnothing,\dots,\varnothing,(1^n))$
and $m_\omega=1$, the endomorphism algebra $C_n=\operatorname{End}_{H_n}(M)$
with ordinary composition, the presentation involution $*$, and the weight
projections $e_\nu$ onto $M_\nu$
([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]).

[F2] The maps $\varphi_{ST}$ are a free dominance-cellular basis of $C_n$ with
$\varphi_{ST}^*=\varphi_{TS}$ and
$\varphi_{ST}\varphi\equiv\sum_Wr_{(T,W)}(\varphi)\varphi_{SW}\pmod{C_n^{\rhd\lambda}}$,
coefficients independent of $S$
([[lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis]]).

[F3] For a finite-dimensional cellular algebra over a field with cell modules
$C_\lambda$ and quotients $D_\lambda=C_\lambda/R_\lambda$: every nonzero
$D_\lambda$ is an absolutely simple head, all simple modules occur exactly
once, $[C_\lambda:D_\mu]\ne0\Rightarrow\lambda\ge\mu$ and
$[C_\mu:D_\mu]=1$; every nonzero cell module has all composition factors in
one block, and two nonzero cell modules share a block exactly when linked by a
finite chain of nonzero cell modules with neighbouring terms sharing a simple factor
([[lem-finite-cellular-nonzero-form-heads-purity-and-shared-factor-linkage]]).

[F4] Blocks of a finite-dimensional algebra are the primitive-central-idempotent
blocks ([[def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents]]).

[F5] $G_0$ of a finite-dimensional module category with the Jordan–Hölder
theorem: composition classes form a $\mathbb Z$-basis
([[def-grothendieck-group-of-an-essentially-small-abelian-category]],
[[thm-jordan-holder-theorem-for-modules]]).

[F6] $X_r$ acts dominance-triangularly on $S_\lambda$ with diagonal
$U_az^{j-i}$ at the node carrying $r$
([[lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular]]).

## Proof

**Proof technique:** direct.

**Given:** The data and suppliers of [F1]–[F6].

1.1 Centers and blocks of an endomorphism algebra containing the regular module. Let $M$ be a finite right $H$-module containing $H$ as a direct summand with projection $e$, and $C=\operatorname{End}_H(M)$. Then $eCe=\operatorname{End}_H(H)\cong H$ by left multiplication, and $Ce\cong\operatorname{Hom}_H(H,M)\cong M$ by evaluation at $1$. If $c\in Z(C)$, then $c$ restricts on the $H$-summand to left multiplication by some $h$; for each $m\in M$ the $H$-map $f_m:H\to M$, $a\mapsto ma$, is the off-diagonal block $j f_m\pi\in C$ through $H$, and commuting it with $c$ and evaluating at $1$ gives $c(m)=mh$. Since $c$ is $H$-linear, $c(ab)=c(a)b$ for $a,b\in H$ gives $ab h=ahb$, so with $a=1$ we get $hb=bh$ and $h\in Z(H)$. Conversely every $h\in Z(H)$ defines the $H$-linear endomorphism $m\mapsto mh$, which commutes with every $H$-endomorphism of $M$, hence is central in $C$. These constructions are inverse unital algebra maps, so $Z(C)\cong Z(H)$ and primitive central idempotents correspond bijectively ([F4]). For $M=\bigoplus_\lambda M_\lambda$ we have $M_\omega=H_n$, so this applies with $e=e_\omega$. [F1, F4, algebra]

1.2 Schur standards and nonzero heads. By [F2] the right cell module $\Delta_\lambda$ of $C_n$ has basis the $v_T$ over semistandard $T$ of shape $\lambda$. The unique tableau $T^\lambda$ of shape and type $\lambda$ gives $\varphi_{(T^\lambda,T^\lambda)}=e_\lambda$, the identity projection onto $M_\lambda$, an actual idempotent; evaluating the cell form at $v_{T^\lambda}$ gives $\langle v_{T^\lambda},v_{T^\lambda}\rangle=1$, so every standard is nonzero with nonzero form. Applying the finite cellular-head theory [F3] to $C_n$ (finite-dimensional and cellular over $F$ by [F2]) shows every head $L_\lambda=\Delta_\lambda/\mathrm{rad}\,\Delta_\lambda$ is nonzero, absolutely simple, the $L_\lambda$ are pairwise distinct and exhaust the simple $C_n$-modules, and $[\Delta_\lambda:L_\mu]\ne0$ implies $\lambda\unrhd\mu$ with $[\Delta_\lambda:L_\lambda]=1$. [F1, F2, F3, algebra]

1.3 Split quasiheredity by an explicit heredity chain. Order the multipartitions in a linear extension of dominance and remove the maximal remaining cell layers successively; in the relevant quotient algebra $B$ the next layer $J$ has basis $c_{st}$ with a distinguished index $u$ whose Gram value is $G(u,u)=1$. Then $e=c_{uu}$ is idempotent, $c_{su}c_{ut}=c_{st}$, and the multiplication map $Be\otimes_FeB\to J$ is an isomorphism on these basis elements; also $eBe=Fe$, since the cell law and maximality of $J$ show every $ebe$ is a scalar multiple of $e$. Hence $Be$ is projective, $J$ is a direct sum of copies of $Be$, and $e\,\mathrm{rad}(B)\,e=0$ because the corner is a field. Thus $J$ is a split heredity ideal, and iterating gives a split heredity chain whose standards are the cell modules $\Delta_\lambda$; so $C_n$ is split quasihereditary over $F$. [F2, F3, algebra]

1.4 Weight dimensions and the unitriangular Kostka matrix. The weight projections $e_\nu=\varphi_{(T^\nu,T^\nu)}$ are self-adjoint because $\varphi_{ST}^*=\varphi_{TS}$ ([F2]), and the cell action gives $v_Te_\nu=\delta_{\operatorname{type}(T),\nu}v_T$, so $\dim\Delta_\lambda e_\nu$ is the number $K_{(\lambda,\nu)}$ of semistandard tableaux of shape $\lambda$ and type $\nu$; this already shows the standards and their forms are defined over the universal ring, free on the $v_T$. A semistandard tableau of shape $\lambda$ and type $\nu$ forces $\lambda\unrhd\nu$: for a component $k$ and row cutoff $r$, labels of type components below $k$ cannot occupy physical components at least $k$, labels of type component $k$ with row at most $r$ cannot occupy physical components greater than $k$ and occupy at most $r$ nodes per column of physical component $k$ by strict column increase, so the count $\sum_{a<k}|\nu^{(a)}|+\sum_{i\le r}\nu^{(k)}_i$ is at most $\sum_{a<k}|\lambda^{(a)}|+\sum_{i\le r}\lambda^{(k)}_i$, which is exactly the multipartition dominance inequality; and $T^\lambda$ is the unique tableau of shape and type $\lambda$, so the Kostka matrix is unitriangular. [F1, F2, F6, algebra]

2.1 The standard basis of $G_0$ and block purity. The matrix of standard multiplicities is unitriangular with diagonal $1$ by step 1.2, so inverting it by backward substitution shows that the classes $[\Delta_\lambda]$ form a $\mathbb Z$-basis of $G_0(C_n\text{-mod})$ ([F5]). Projecting to blocks is exact. Every $\Delta_\lambda$ is nonzero and block-pure by [F3], so if a class supported in one block equals $\sum_\lambda a_\lambda[\Delta_\lambda]$, then every coefficient of a standard lying in another block vanishes by this basis independence; this is the block-separation input used by the Jantzen equivalence. [F3, F5, step 1.2, algebra]

2.2 The corner functor and the radical comparison. Put $e=e_\omega$; then $eCe\cong H_n$ by step 1.1, and $V\mapsto Ve$ is exact. Semistandard tableaux of type $\omega$ are canonically standard multitableaux: replacing the label $(r,\ell)$ by $r$ is a bijection onto the standard tableaux, and the surviving standard vectors $v_t$ of $\Delta_\lambda e$ carry the same right-$H_n$ action as the Murphy vectors $m_t$ of $S_\lambda$ by the cell multiplication [F2]; this is an explicit isomorphism $\Delta_\lambda e\cong S_\lambda$. The forms also agree: in $C_n$, $\langle v_s,v_t\rangle e_\lambda\equiv\varphi_{(T^\lambda,s)}\varphi_{(t,T^\lambda)}$ modulo higher $C_n$-shapes, and evaluating the two factors at $m_\lambda$ gives the product $m_{(t^\lambda,s)}m_{(t,t^\lambda)}$, whose coefficient of $m_\lambda$ modulo higher $H_n$-shapes is exactly the Specht form entry; a higher Schur map evaluates to a sum of higher Murphy shapes by its explicit definition, so no shape error is lost. Since $e^*=e$, the $e$ and $1-e$ parts of $\Delta_\lambda$ are orthogonal: if $x$ pairs to zero against $\Delta_\lambda e$, then $\langle x,y(1-e)\rangle=\langle x(1-e),y\rangle=0$, so $\mathrm{rad}(\Delta_\lambda)e=\mathrm{rad}(\Delta_\lambda)\cap\Delta_\lambda e=\mathrm{rad}(\Delta_\lambda e)$. Hence $L_\lambda e\cong D_\lambda$ for every $\lambda$, with $D_\lambda$ allowed to be zero. Applying the exact functor to a composition series of $\Delta_\lambda$, each simple factor $L_\mu$ becomes $D_\mu$ or $0$, and the nonzero $D_\mu$ are pairwise distinct and exhaustive by [F3]; hence $[\Delta_\lambda:L_\mu]=[S_\lambda:D_\mu]$ for every $\mu$ with $D_\mu\ne0$, with no simple-label bijection through $e$ assumed. [F1, F2, F3, step 1.1, algebra]

3.1 Typed Schur/Specht block linkage. The center isomorphism of step 1.1 sends a central block idempotent $b$ of $H_n$ to the same right-action projection on $M$, hence to the corresponding central idempotent $b_{C}$ of $C_n$, and on the corner $Vb_Ce=(Ve)b$. Every $\Delta_\lambda$ is nonzero and block-pure by [F3], and $\Delta_\lambda e\cong S_\lambda$ is nonzero because $S_\lambda$ has its Murphy standard-tableau basis; consequently the block supporting $\Delta_\lambda$ corresponds to exactly the block supporting $S_\lambda$. Therefore $\Delta_\lambda,\Delta_\mu$ share a $C_n$-block if and only if $S_\lambda,S_\mu$ share an $H_n$-block, and [F3] describes both sides as linkage by chains of cell modules with neighbouring terms sharing a simple composition factor; step 2.2 supplies the multiplicity transfers when a nonzero simple is needed. No equality-of-residue-contents assertion is used. [F3, step 1.1, step 2.2, algebra] ∎

## Remarks

The theorem is the algebraic half of the block theory of this page: it proves
that the Schur standards and Specht standards have matching heads and matching
block partitions, using the semistandard cellular basis, the explicit center
isomorphism, and the corner functor. The residue-content/Jantzen computation
that identifies the blocks with combinatorial data is a separate theorem with
its own suppliers. No choice principle is used: all cell layers, bases, and
composition series are finite.
