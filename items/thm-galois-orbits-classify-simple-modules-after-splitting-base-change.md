---
id: thm-galois-orbits-classify-simple-modules-after-splitting-base-change
kind: theorem
title: Galois orbits classify simple modules after splitting base change
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Weizhe Zheng, Lectures on Algebra (10 January 2025)
      url: https://server.mcm.ac.cn/~zheng/algebra.pdf
      locator: Proposition 4.3.2, pp.145–146 (block/scalar-extension multiplicities); Theorem 3.8.1, pp.132–133;
        Theorem 4.1.6, p.139 (averaging proof, expanded here in finite dimension)
    - title: Gábor Wiese, Galois Representations
      url: https://math.uni.lu/wiese/notes/GalRep.pdf
      locator: Lemma 2.2.9, Proposition 2.2.11 and Corollary 2.2.12, pp.29–30
status: published
origin: pipeline
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
deps: ["def-semilinear-galois-action-on-a-scalar-extended-algebra", "lem-galois-orbit-sums-of-split-central-idempotents-descend", "lem-a-descended-galois-orbit-idempotent-is-primitive", "thm-wedderburn-artin-theorem", "thm-simple-modules-over-semisimple-rings", "thm-uniqueness-of-wedderburn-artin-data", "thm-tensor-products-commute-with-arbitrary-direct-sums", "thm-tensor-product-basis-from-bases", "thm-group-actions-and-group-ring-modules-correspond", "def-splitting-field-for-a-finite-group", "thm-jordan-holder-theorem-for-modules", "thm-dimension-of-a-linear-subspace", "lem-characteristic-and-additive-order", "def-field", "def-finite-sum-in-a-commutative-monoid", "lem-finite-sum-reindexing-and-fubini", "thm-strong-induction", "def-semisimple-module", "def-semisimple-ring", "thm-group-ring-is-a-unital-algebra-with-basis-g"]
---

## Statement

In ZFC, let $A$ be a finite-dimensional semisimple unital $F$-algebra and let
$E/F$ be finite Galois with group $\Gamma$, such that $B=E\otimes_F A$ is split
semisimple. There is a canonical bijection between simple left $A$-module
isomorphism classes and $\Gamma$-orbits $O$ of simple left $B$-module classes.
For the class $S$ corresponding to $O$ there is a unique positive integer
$m_S$ such that
$$E\otimes_F S\cong\bigoplus_{[W]\in O}W^{\oplus m_S}.$$
Distinct simple $A$-modules have disjoint constituent sets, and every simple
$B$-module occurs. For $A=0$, both sets of classes are empty.

In particular, let $G$ be a finite group, let $F$ have characteristic zero,
and let $E/F$ be a finite Galois extension which is a splitting field for $G$.
The assertions apply to $A=F[G]$ and $B=E[G]$. Neither algebraic closure of
$F$ nor multiplicity one is assumed. This is conditional on the given $E$;
it makes no assertion about existence of a finite Galois splitting field.

## Facts & Assumptions

[F1] Canonical semilinear tensor actions and inverse-pullback twists are specified in [[def-semilinear-galois-action-on-a-scalar-extended-algebra]].

[F2] Split primitive central idempotents correspond to simple classes, equivariantly, and their orbit sums descend: [[lem-galois-orbit-sums-of-split-central-idempotents-descend]].

[F3] The descended orbit idempotents are precisely the primitive central idempotents of $A$, with one simple type per block and $D=\operatorname{End}_A(S)^{\mathrm{op}}$: [[lem-a-descended-galois-orbit-idempotent-is-primitive]].

[F4] Nonzero semisimple rings are finite products of matrix rings over division rings: [[thm-wedderburn-artin-theorem]].

[F5] The simple left modules of such a product are its factor column modules: [[thm-simple-modules-over-semisimple-rings]].

[F6] Tensoring over $F$ commutes with direct sums, by the coordinate maps: [[thm-tensor-products-commute-with-arbitrary-direct-sums]].

[F7] Product bases describe tensors of free modules, also for empty bases: [[thm-tensor-product-basis-from-bases]].

[F8] The simple factors of two finite composition series agree with multiplicity: [[thm-jordan-holder-theorem-for-modules]].

[F9] Finite-dimensional subspaces have finite bases, independent sets extend to bases, and a proper subspace has strictly smaller dimension: [[thm-dimension-of-a-linear-subspace]].

[F10] In characteristic zero the additive order of $1$ is infinite: [[lem-characteristic-and-additive-order]].

[F11] Every nonzero field element has an inverse: [[def-field]].

[F12] Finite sums in a commutative monoid include the empty sum $0$: [[def-finite-sum-in-a-commutative-monoid]].

[F13] Finite sums are unchanged by bijective reindexing: [[lem-finite-sum-reindexing-and-fubini]].

[F14] Strong induction permits assuming all smaller natural-number cases: [[thm-strong-induction]].

[F15] Linear $G$-actions and $k[G]$-module structures correspond, as do equivariant maps and module homomorphisms: [[thm-group-actions-and-group-ring-modules-correspond]].

[F16] A splitting field for $G$ has scalar endomorphisms for every irreducible representation: [[def-splitting-field-for-a-finite-group]].

[F17] A module is semisimple when it is a direct sum of simple submodules, allowing the empty sum: [[def-semisimple-module]].

[F18] A ring is semisimple when its left regular module is semisimple: [[def-semisimple-ring]].

[F19] The group algebra has the group basis, with multiplication $[g][h]=[gh]$: [[thm-group-ring-is-a-unital-algebra-with-basis-g]].

## Proof

**Given:** The algebra and field hypotheses in the statement; all modules are unital left modules.

1.1 If $A=0$, $B=0$ and every unital module is zero, since $w=1w=0w=0$. There are no simple classes, so the empty map is the asserted bijection. Henceforth take $A\ne0$. By F2–F3, each orbit $O$ gives a block $Ae_O\cong M_{n_O}(D_O)$ with one simple type $S_O=D_O^{n_O}$, where $n_O\ge1$. F4–F5 show that these exhaust all simple $A$-modules with no repetition. In particular these simples are finite-dimensional, because each is a column left ideal of the finite-dimensional algebra. [F2, F3, F4, F5, algebra]

1.2 For completeness, any finite-dimensional module $M$ over $M_d(E)$ is a sum of column modules by an explicit map. The orthogonal $E_{jj}$ give $M=\bigoplus_{j=1}^d E_{jj}M$. Choose an $E$-basis $(v_t)_{t=1}^h$ of $E_{11}M$ by F9, and send the $j$th standard vector in column copy $t$ to $E_{j1}v_t$. Matrix multiplication $E_{ab}E_{j1}=\delta_{bj}E_{a1}$ proves module linearity. Every $x\in E_{jj}M$ equals $E_{j1}(E_{1j}x)$, proving spanning. Applying $E_{1j}$ to a relation $\sum_{k,t}\lambda_{kt}E_{k1}v_t=0$ gives $\sum_t\lambda_{jt}v_t=0$, proving independence. Thus $M\cong(E^d)^{\oplus h}$. For a product of matrix rings, first decompose by its coordinate identities and apply this argument to each coordinate. It includes $h=0$. [F9, algebra]

1.3 For the finite-group specialization, let $G,F,E$ satisfy the finite-group hypotheses, and fix $k=F$ or $k=E$. The field inclusion makes $k$ characteristic zero. Let $V$ be a finite-dimensional $k[G]$-module and $U\subseteq V$ a submodule. F9 supplies a finite basis $u_1,\ldots,u_r$ of $U$ extended to a basis $u_1,\ldots,u_r,v_{r+1},\ldots,v_d$ of $V$. Define $P(\sum_{j\le r}a_ju_j+\sum_{j>r}a_jv_j)=\sum_{j\le r}a_ju_j$. Coordinate uniqueness makes $P$ linear, with image $U$ and $P|_U=\operatorname{id}$. This includes $U=0$ and $U=V$. [F9, algebra]

2.1 Separating a matrix into its $n_O$ columns gives $Ae_O\cong S_O^{\oplus n_O}$ as left $A$-modules. Scalar extension yields $Bc_O\cong (E\otimes_F S_O)^{\oplus n_O}$: the first identification sends $e\otimes ae_O$ to $(e\otimes a)c_O$; it is onto and injective by regrouping the tensor basis along a basis of $Ae_O$. The direct-sum isomorphism is F6, and its coordinate formula commutes with the $B$-action. F7 similarly gives $\dim_E(E\otimes_F S_O)=\dim_F S_O$. [F1, F6, F7, step 1.1, algebra]

2.2 Since $G$ contains its identity, $N=|G|\ge1$. F10 gives $N\cdot1_k\ne0$, and F11 gives its inverse $N^{-1}$. In the additive commutative monoid of linear endomorphisms set $Q=N^{-1}\sum_{g\in G}gPg^{-1}$. This finite sum is defined by F12. Composition and evaluation distribute over it: for an empty list both sides are zero, and adjoining one term follows from binary distributivity; induction on the list length proves the finite identity. Thus $Q$ is a linear map. [F10, F11, F12, F14, step 1.3, algebra]

3.1 Put $M=E\otimes_F S_O$. By step 1.2 it has a finite simple decomposition. The regular module $Bc_O$ consists of exactly the split factors indexed by $O$, each with its nonzero column multiplicity. Comparing step 2.1 with these decompositions, F8 gives $n_O$ times the multiplicity of each class in $M$ equal to its regular-block multiplicity. Since $n_O>0$, precisely the classes in $O$ occur in $M$, each positively; no other class occurs. The use of F8 is legitimate because ordering the summands of a finite simple direct sum gives a composition series. [F2, F5, F8, step 2.1, step 1.2, algebra]

3.2 For $h\in G$, distributing composition and reindexing by $g\mapsto hg$ gives $hQh^{-1}=N^{-1}\sum_g(hg)P(hg)^{-1}=Q$. Hence $Q$ is $G$-equivariant and is a module map by F15. Since $U$ is $G$-stable, each $gPg^{-1}$ maps into $U$ and is identity on $U$. Therefore $Q(V)\subseteq U$ and $Q(u)=N^{-1}Nu=u$ for $u\in U$. [F13, F15, step 1.3, step 2.2, algebra]

4.1 The canonical map $T_\sigma(e\otimes s)=\sigma(e)\otimes s$ is an isomorphism ${}^\sigma M\to M$: for $b\in B$, $T_\sigma(\sigma_B^{-1}(b)m)=bT_\sigma(m)$, and its inverse is $T_{\sigma^{-1}}$. Twisting a direct-sum decomposition therefore permutes the simple types of $M$ without changing their multiplicities, by F8. Any two classes in $O$ are related by a twist, so all the positive multiplicities of step 3.1 equal one integer $m_{S_O}$. F8 also proves its uniqueness. [F1, F8, step 3.1, algebra]

4.2 For $v\in V$, the vector $v-Qv$ lies in $\ker Q$ because $Qv\in U$ and $Q$ fixes $U$. Thus $v=Qv+(v-Qv)$ belongs to $U+\ker Q$. If $u\in U\cap\ker Q$, then $u=Qu=0$, proving $V=U\oplus\ker Q$. The kernel is a submodule since $Q$ is a module map. [step 3.2, algebra]

5.1 The assignment $[S_O]\mapsto O$ is independent of the displayed matrix decomposition: F2 defines the orbit intrinsically via central idempotents, and F3 gives its unique simple class downstairs. Step 3.1 shows different orbits have disjoint supports and that every simple $B$-class is in the support assigned to its orbit. Conversely that support recovers $O$ from $S_O$. This proves bijectivity in both directions. If $E=F$, all orbits are singletons and $E\otimes_F S\cong S$, so the multiplicity is $1$. [F2, F3, step 3.1, step 4.1, algebra]

5.2 Apply strong induction on $d=\dim_k V$ to the assertion that every such $V$ is a finite direct sum of simple submodules. For $d=0$ use the empty sum. For $d>0$, a simple $V$ is already one summand. Otherwise the definition of simplicity supplies a nonzero proper submodule $U$. Step 4.2 splits it off; both $U$ and $\ker Q$ are proper, the latter because $Q$ is identity on the nonzero $U$. F9 gives dimensions strictly below $d$ for both. The induction hypothesis decomposes each into finitely many simple submodules, whose combined direct sum is $V$. F14 proves the assertion for every $d$, and F17 identifies these modules as semisimple. [F9, F14, F17, step 4.2, algebra]

6.1 The group ring has the finite group basis $[g]$, with $[g][h]=[gh]$; its regular action is one of the actions in F15. Apply step 5.2 to $V=k[G]$, whose dimension is $N$, and then F18 to obtain semisimplicity of $k[G]$ for both $k=F,E$. The basis map $E\otimes_F F[G]\to E[G]$, $e\otimes[g]\mapsto e[g]$, is bijective by F7 and multiplicative by the group-basis product. For the trivial group this is just $E\otimes_F F\cong E$, and averaging above is $Q=P$. [F19, F7, F15, F18, step 5.2, algebra]

7.1 Apply F4 to the nonzero semisimple algebra $E[G]$. For a factor $M_n(D)$, its column module $W=D^n$ is simple by F5. To compute its endomorphisms without assuming splitting, let $f$ commute with the factor action. Commuting with $E_{11}$ forces $f(e_1)=e_1d$ for some $d\in D$; commuting with $E_{j1}$ gives $f(e_j)=e_jd$, and commuting with diagonal left multiplications gives $f(x)=xd$ for every column $x$. Conversely each right multiplication commutes with all matrices. Their compositions reverse multiplication in $D$, so $\operatorname{End}(W)\cong D^{\mathrm{op}}$ as an $E$-algebra. F15 identifies this endomorphism ring with $\operatorname{End}_G(W)$; by the given splitting-field condition F16 it is exactly the scalar field $E$. Taking the opposite ring leaves $E$ unchanged, so every division factor is $E$ as an $E$-algebra. Hence $E[G]$ is split semisimple. The general classification in step 5.1 now applies to $F[G]$ and the given finite Galois extension and prove the specialization. All selections in this argument concern finite-dimensional spaces or finite decompositions; no additional arbitrary-index choice assumption is used. [F4, F5, F15, F16, step 5.1, step 6.1, algebra] QED

## Remarks

Zheng, Proposition 4.3.2, pp.145–146, gives scalar-extension multiplicities;
Wiese, Lemma 2.2.9 and Corollary 2.2.12, pp.29–30, give their Galois-orbit
behavior. The local proof obtains it from descended central idempotents.
The specialization steps expand Zheng's averaging argument (Theorem 4.1.6, p.139) using
finite basis extension and strict dimension induction. They provide the
needed finite-group semisimplicity directly.
