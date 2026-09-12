---
id: ex-brauer-correspondence-for-sl2-over-fp
kind: example
title: Brauer correspondence for SL2(Fp) in defining characteristic
deps: ["def-axiom-of-choice", "thm-brauer-first-main-theorem", "thm-brauer-green-nagao-block-compatibility", "thm-blocks-partition-ordinary-and-brauer-irreducible-characters", "cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes", "thm-kg-is-local-iff-g-is-a-p-group", "thm-higman-criterion-for-relative-projectivity", "lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection", "thm-defect-groups-are-maximal-brauer-support", "thm-defect-zero-blocks-are-simple-algebras", "thm-green-vertex-source-existence-and-conjugacy", "lem-relative-projectivity-mackey-intersections-for-finite-modules", "cor-green-correspondence-for-modules-of-vertex-exactly-p"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Saunders, Modular Representation Theory, Examples 4.31 and 5.5
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

Assume AC, let $p>2$ be prime and let $k$ be a splitting residue field for $G=\mathrm{SL}_2(\mathbf F_p)$ and its subgroups. Put $D=\{\begin{pmatrix}1&0\\c&1\end{pmatrix}:c\in\mathbf F_p\}$ and $N=N_G(D)$. In the standard list $V_i=\operatorname{Sym}^{i-1}(k^2)$, $1\le i\le p$, the modules with odd $i<p$ form one block and those with even $i<p$ form the other positive-defect block. Both have defect $D$. They correspond to the two blocks of $kN$, distinguished by the sign of the central element $-I$. The Green correspondent of $V_i$ for $i<p$ is its restriction, whose head has torus weight $i-1$. The remaining $V_p$, the Steinberg module, is projective simple in a defect-zero block.

## Facts & Assumptions

**Given:** The field and matrix groups above; on the natural column basis $X,Y$, a lower unipotent sends $X$ to $X+cY$ and fixes $Y$.

[A1] [[def-axiom-of-choice]] is inherited only in the exact-vertex Green identification.

[F1] [[thm-brauer-first-main-theorem]] is the choice-free block bijection.

[F2] [[thm-brauer-green-nagao-block-compatibility]] matches blocks of vertex-$D$ restriction summands.

[F3] [[thm-blocks-partition-ordinary-and-brauer-irreducible-characters]] assigns each simple module to one block.

[F4] [[cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes]] counts simple modules over the splitting field.

[F5] [[thm-kg-is-local-iff-g-is-a-p-group]] makes $kD$ local.

[F6] [[thm-higman-criterion-for-relative-projectivity]] gives the trace and split counit criteria.

[F7] [[lem-block-idempotents-are-fixed-by-normal-p-subgroup-brauer-projection]] localizes normalizer block idempotents to $kC_N(D)$.

[F8] [[thm-defect-groups-are-maximal-brauer-support]] detects exact defect.

[F9] [[thm-defect-zero-blocks-are-simple-algebras]] characterizes blocks with a projective simple module.

[F10] [[thm-green-vertex-source-existence-and-conjugacy]] supplies vertices.

[F11] [[lem-relative-projectivity-mackey-intersections-for-finite-modules]] places a vertex inside a relative inducing subgroup, up to conjugacy.

[F12] [[cor-green-correspondence-for-modules-of-vertex-exactly-p]] identifies the unique vertex-$D$ restriction summand under AC.

## Proof

1.1 Counting a nonzero first column and then the $p$ second columns with determinant one gives $|G|=p(p^2-1)$, so $D$ is Sylow of order $p$. Its common fixed line is $kY$. A normalizer must preserve that line, hence is lower triangular. Conversely the lower triangular matrices normalize $D$ by direct conjugation. Thus $N=D\rtimes T$, where $T=\{\operatorname{diag}(a,a^{-1}):a\in\mathbf F_p^\times\}$. Such a diagonal conjugates $c$ to $a^{-2}c$, so $C_N(D)=D\times\langle-I\rangle$. [algebra]

1.2 Put $n=i-1<p$. On the basis $X^jY^{n-j}$, the operator $u-1$, for $u$ with $c=1$, lowers the highest $X$-degree by one with leading coefficient $j\ne0$ when $j>0$. Its successive powers on $X^n$ therefore give a triangular basis. It is one Jordan block of size $i$, with kernel $kY^n$. Every nonzero invariant subspace contains a nonzero kernel vector, by applying a maximal nonvanishing power of this nilpotent operator. The upper unipotent acts in the reverse way, and its powers of $h-1$ on $Y^n$ span the whole space. Hence every nonzero $G$-submodule is all of $V_i$: these $p$ modules are simple and have distinct dimensions. This also covers $n=0$. [algebra]

2.1 The $p$-regular matrices in $G$ are exactly the semisimple ones. Indeed finite order prime to $p$ gives a square-free annihilating polynomial; conversely a semisimple matrix has eigenvalues in $\mathbf F_{p^2}^\times$ and hence order prime to $p$. For every trace $t\ne\pm2$, the polynomial $Z^2-tZ+1$ has distinct roots, and its companion matrix gives one $\mathrm{GL}_2(\mathbf F_p)$ class. It gives one $G$ class too: the determinant map from its centralizer is onto. In the split case this follows from diagonal matrices. In the nonsplit case the centralizer is $\mathbf F_{p^2}^\times$ acting by multiplication, with determinant $x^2-dy^2$ for a nonsquare $d$. For each $c\ne0$, the sets of squares and $c+d$ times squares, meaning $\{x^2\}$ and $\{c+dy^2\}$, each have $(p+1)/2$ elements and intersect; thus $x^2-dy^2=c$ has a solution. Multiplying a conjugator by a centralizer element adjusts its determinant to one. Trace $\pm2$ gives only the semisimple matrices $\pm I$. There are exactly $p$ regular classes. F4 proves that the list in step 1.2 exhausts all simple modules. [F4, algebra, step 1.2]

2.2 The subspaces spanned by $Y^n,XY^{n-1},\ldots,X^jY^{n-j}$ are $N$-stable and give a full composition flag. Since $u-1$ is a single Jordan block, its invariant subspaces are precisely these: viewing the module as $k[z]/(z^i)$, submodules are ideals $(z^j)$. Thus restriction to $N$ is indecomposable and has a unique head, the line represented by $X^n$. Define $U_j$ on $N$ by trivial $D$ action and $\operatorname{diag}(a,a^{-1})$ acting by $a^j$. The head is $U_n$, and the factors from head down are $U_n,U_{n-2},\ldots,U_{-n}$. The element $-I$ acts throughout by $(-1)^n$. [step 1.1, step 1.2, algebra]

2.3 By F7 every central block idempotent of $kN$ lies in $kC_N(D)=kD\otimes k\langle-I\rangle$. This commutative algebra is $kD\times kD$, whose only primitive idempotents are $e_+=(1+(-I))/2$ and $e_-=(1-(-I))/2$, by F5. These are central in $kN$, so they are exactly its two block idempotents. Each has nonzero Brauer projection at $D$ (all its support centralizes $D$); since $D$ is Sylow, F8 gives defect $D$ for both. [F5, F7, F8, step 1.1, algebra]

3.1 For either $L=G$ or $N$, every finite $kL$-module is relatively $D$-projective: the relative trace of $[L:D]^{-1}\mathrm{id}$ is the identity, so F6 applies. Also $kD\cong k[z]/(z^p)$, with $z=u-1$. Every finite projective module over this algebra is free. To see this, lift a basis of $P/zP$ to obtain a surjection $A^r\to P$, since its cokernel $C=zC$ vanishes by $z^p=0$. Split this surjection; its kernel $K$ has $K/zK=0$ by dimensions and thus is zero by the same nilpotence argument. Consequently the single Jordan module of dimension $i<p$ is not projective on $D$, and cannot be projective on $L$, since restriction preserves finite free modules and their summands. F10 and F11 give it vertex $D$, the only alternative inside $D$ being $1$, which would imply projectivity by F6's finite counit. This applies to both $V_i$ and its restriction. For $i=p$ the restriction to $D$ is regular free; the split counit from relative $D$-projectivity makes $V_p$ a summand of a free induced module, hence projective. [F6, F10, F11, step 1.1, step 1.2, step 2.2, algebra]

4.1 F1 gives exactly two global blocks with defect $D$; every positive defect is conjugate to $D$ since its order divides the $p$-part $p$ of $|G|$. For $i<p$, step 3.1 and F2 identify the block of $V_i$ with induction of the local block containing its restriction. Step 2.2 identifies this as $e_+$ when $i$ is odd and $e_-$ when $i$ is even. Both sets occur, since $1,2<p$ or $p=3$ with these same two indices. Under A1, F12 identifies the indecomposable vertex-$D$ restriction itself as the Green correspondent. AC is used only in this invocation; the trace, sign and block calculations did not use it. [A1, F1, F2, F12, step 1.1, step 2.2, step 3.1, step 2.3, algebra]

5.1 By F9 the projective simple $V_p$ is alone in a defect-zero block. The exhaustive list in step 2.1 and the partition in F3 leave no further blocks: every nonzero finite block has a simple quotient by a proper left ideal of largest dimension. Thus the two positive-defect blocks and this Steinberg block are all the blocks. The endpoint $i=1$ was included in the constant-polynomial calculation, and $i=p$ is precisely the projective exception. The hypothesis $p>2$ ensures the two sign idempotents exist and are distinct; the assertion does not extend this calculation to $p=2$. [F3, F9, step 2.1, step 3.1, step 4.1, algebra] ∎

