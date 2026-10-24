---
id: lem-klr-one-step-simple-restriction-induction-and-first-dot-index
kind: lemma
title: "One-step simple restriction and induction, and the first-dot index"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-klr-grading-and-diagrammatic-composition,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       def-divided-power-klr-idempotents-and-projectives,
       lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases,
       lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head,
       thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]
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
    - title: "Aaron D. Lauda and Monica Vazirani, Crystals from categorified quantum groups, Advances in Math. 228 (2011) 803-861, arXiv:0909.1810v2"
      url: "https://arxiv.org/pdf/0909.1810v2"
      locator: "Sections 2.5-2.6 and 6: epsilon_i on simple modules, Proposition 2.4 (survival epsilon_i(M)<=lambda_i) and Theorem 6.10 (the simple modules L(i^m))."
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 3 and Section 4.2: the functors E_i,F_i and their exact sequences; Section 5: the categorical sl_2 relations."
---

## Statement

Let $k$ be any field and $R(Q)$ the graded KLR algebra for a real symmetrizable
Cartan datum and any homogeneous $Q$ satisfying the standing symmetry and
nonzero extremal-coefficient conditions. Graded simple modules are compared
up to internal shift. For a simple $S$ of root weight $\beta$ and
$r=\epsilon_i(S)>0$, its ordinary one-step last-$i$ restriction has a single
simple graded socle and a single simple graded head, each once and of the same
shift orbit, with $\epsilon_i=r-1$; its maximum-$\epsilon$ composition part has
coefficient a grading shift of $[r]_i$. The last-dot nilpotence index on that
restriction is exactly $r$. The first-end statements hold with
$\epsilon_i^L$ and the first dot. For every $n\ge1$,
$\operatorname{Ind}(S\boxtimes L(i^n))$ has a unique simple graded head
$f_i^nS$, occurring once in its whole composition series, with
$\epsilon_i=r+n$ (also when $r=0$); all other constituents have smaller
$\epsilon_i$. One-step simple socle and simple induction head are partial
inverses. A simple $S$ survives the first-strand cyclotomic quotient with
exponents $\lambda_i$ exactly when $\epsilon_i^L(S)\le\lambda_i$ for all $i$.
Right restriction preserves surviving simples, while projected right induction
has the same simple head when that generic head survives and is zero
otherwise. These are shift-orbit assertions and do not assert factorial socle
multiplicity.

## Facts & Assumptions

**Given:** A graded KLR algebra $R$ for a real symmetrizable Cartan datum, a color $i$, a graded simple $R(\beta)$-module $S$, and $r:=\epsilon_i(S)=\max\{s:e(\beta-s\alpha_i,s\alpha_i)S\ne0\}$.

[F1] The nil-Hecke algebra of rank $m$ acts on the coinvariant algebra $C_m=k[t_1,\dots,t_m]/(e_1,\dots,e_m)$ by polynomial multiplication and divided differences, $C_m=k[t_1,\dots,t_{m-1}]\otimes_{k[E_1,\dots,E_{m-1}]} k[z]/(z^m)$ with $E_a=(-z)^a$ and $z=t_m$, every positive symmetric polynomial acts by zero, and $C_m$ is the unique $\mathrm{NH}_m$ simple up to shift, with composition multiplicity one. After restriction to $\mathrm{NH}_{m-1}$ for $m\ge1$ (with $\mathrm{NH}_0=k$), its graded socle and head are one shifted $\mathrm{NH}_{m-1}$ simple each and its composition coefficient is a shift of $[m]_i$ ([[def-divided-power-klr-idempotents-and-projectives]], [[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

[F2] Finite graded modules have the Krull-Schmidt property, finite graded semisimple socles, and finite-dimensional graded simples ([[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]]). Absolute simplicity is the separate conclusion of [[lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head]].

[F3] Maximal-tail restriction: for simple $S$ with $r=\epsilon_i(S)>0$ there is a simple $N$ with $\epsilon_i(N)=0$ and $\Delta_i^rS\cong N\boxtimes L(i^r)$, and dually $\operatorname{Ind}(N\boxtimes L(i^r))$ has a unique simple graded head occurring once, with maximal tail ([[lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head]]).

[F4] Block induction is left adjoint to block restriction; restriction is left adjoint to coinduction, which is reversed-block induction with its stated shift. All these functors are exact. The one-step simple-induction adjunction uses the $R(\alpha_i)$-factor $L(i)$ and therefore the last-dot-zero part of block restriction. The shuffle bound is: the maximal $i$-tail of a constituent of $E_iT$ is at most the maximal tail of $T$ minus one, and an induced module has no tail larger than the sum of the two input tails ([[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]]).

## Proof

**Proof technique:** compute the nil-Hecke branching explicitly, then use adjunction, the maximal-tail recursion and the shuffle bound to pin the socle, head and dot index of one-step restriction, and read off the induction head and the cyclotomic survival criterion.

1.1 Nil-Hecke branching. Put $z=t_r$ and write $E_a$ for the elementary symmetric polynomials in $t_1,\dots,t_{r-1}$. The relations $e_a=E_a+zE_{a-1}=0$ give $E_a=(-z)^a$ for $1\le a\le r-1$, and the top relation gives $z^r=0$; hence $C_r=k[t_1,\dots,t_{r-1}]\otimes_{k[E_1,\dots,E_{r-1}]}k[z]/(z^r)$ with $E_a$ acting by $(-z)^a$. The polynomial representation of $\mathrm{NH}_{r-1}$ is free of rank $(r-1)!$ over its symmetric center and identifies $\mathrm{NH}_{r-1}$ with the matrix algebra over that center; after the specialization its image on $C_r$ is $\mathrm{Mat}_{(r-1)!}(k[z]/(z^r))$ with standard column $C_r$. Therefore the graded socle and head of $C_r$ are each one shifted copy of the nil-Hecke simple, the simple composition coefficient is a shift of $[r]_i$, multiplication by $z$ has nilpotence index exactly $r$, the socle is the column over $z^{r-1}k$ and the head the column modulo $z$. For $r=1$ this reads $C_1=k$, $z=0$. The same computation with the first variable distinguished gives first-end branching, and matrix units plus a monic Artin basis make it valid in every characteristic. More generally, induction of $L(i^r)\boxtimes L(i^n)$ is killed by the positive symmetric center: each total elementary symmetric function restricts to a sum of products of the positive elementary functions in the two blocks. Its dimension is $\binom{r+n}{r}r!n!=(r+n)!$ by the shuffle basis. The augmentation quotient of $\mathrm{NH}_{r+n}$ is the full matrix algebra with simple column dimension $(r+n)!$, so this induced module is one shifted copy of $L(i^{r+n})$. [F1, F4, algebra]

1.2 Simple socle of one-step restriction. Let $S$ have $r=\epsilon_i(S)>0$ and let $U\subseteq E_iS$ be a simple subobject with $t=\epsilon_i(U)$. The final dot $z$ commutes with $R(\beta-\alpha_i)$ and acts nilpotently on $E_iS$ (positive dot degree and finite graded support), preserving the socle and its ungraded isotypic components; on the isotypic component containing $U$ a nonzero power of $z$ has a nonzero kernel copy of the same simple type killed by $z$, and absolute simplicity and the finite graded semisimple decomposition let that copy be chosen homogeneously with the appropriate shift. Adjunction therefore produces a nonzero map $\operatorname{Ind}(U,L_1)\to S$, hence a surjection, and the shuffle bound [F4] gives $r\le t+1$ while the exact defining corners give $t\le r-1$; so $t=r-1$. [F1, F2, F4]

2.1 The maximal corner. Apply the maximal $(r-1)$-tail corner $p$ to $E_iS$, retaining $R(\beta-r\alpha_i)\otimes\mathrm{NH}_{r-1}$. By [F3], $\Delta_i^rS\cong N\boxtimes L(i^r)$ with $\epsilon_i(N)=0$, so $p(E_iS)=N\boxtimes\operatorname{Res}_{\mathrm{NH}_{r-1}}L(i^r)$; by step 1.1 and the absolute simplicity of $N$ this has a single simple socle. Every simple subobject $U$ of $E_iS$ has $t=r-1$ by step 1.2, so [F3] makes $pU$ a nonzero simple object; exactness of $p$ makes $p(\operatorname{soc}E_iS)$ semisimple and injects it into the one-simple socle of $p(E_iS)$. Hence $\operatorname{soc}E_iS$ is a single simple object, once, with $\epsilon_i=r-1$; moreover every nonzero submodule of $E_iS$ contains a simple graded submodule whose $p$-image is nonzero (detection). [step 1.2, F3]

3.1 Simple head, detection and the dot index. Finite graded duality $D$ is exact, takes simples to simples, fixes corner idempotents and commutes with restriction, so applying step 2.1 to $DS$ (same $\epsilon_i$) and dualising gives a single simple head of $E_iS$, once; the maximal corner of its head is the head of $N\boxtimes\operatorname{Res}L(i^r)$, while the maximal corner of its socle is that tensor's socle. By step 1.1 these are shifts of the same $N\boxtimes L(i^{r-1})$. The unique-head recursion of [F3] therefore identifies their simple shift orbits. On $p(E_iS)$, step 1.1 gives $z^r=0$ and $z^{r-1}\ne0$; the image of $z^r$ on all of $E_iS$ is a graded submodule with zero $p$-corner, so detection in step 2.1 forces it to be zero, while nonvanishing of $z^{r-1}$ in the corner forces it to be nonzero globally. Hence the last-dot nilpotence index on $E_iS$ is exactly $r$; repeating with the first variable gives first-dot index exactly $\epsilon_i^L(S)$. [step 2.1, F1, F2]

4.1 Nonreduced induction and its unique head. Put $M_n=\operatorname{Ind}(S\boxtimes L(i^n))$, $n\ge1$. Its maximum tail is at most $r+n$ by the shuffle bound; at tail $r+n$ the Mackey filtration retains exactly all $n$ added $i$-strands together with $r$ terminal $i$-strands of $S$, its surviving corner is $N\boxtimes\operatorname{Ind}_{\mathrm{NH}_r\otimes\mathrm{NH}_n}^{\mathrm{NH}_{r+n}}(L(i^r)\boxtimes L(i^n))$. The final computation of step 1.1 makes this $N\boxtimes L(i^{r+n})$ up to the fixed shift. Every simple quotient $T$ of $M_n$ has that maximum tail: adjunction gives a nonzero injection $S\boxtimes L(i^n)\hookrightarrow\Delta_i^nT$, and restricting the first factor to the maximal $r$-tail retains a nonzero corner of $T$'s maximal corner, so $\epsilon_i(T)\ge r+n$, and the shuffle bound gives equality. Hence the finite semisimple head of $M_n$ has only constituents detected by its simple maximal corner, so it is one simple constituent, once; the kernel of $M_n\to\operatorname{hd}M_n$ has zero maximal corner, so every other composition factor has smaller $\epsilon_i$ and the head occurs exactly once in the whole composition series. Write $f_iS:=\operatorname{hd}M_1$. [step 1.1, step 3.1, F3, F4]

5.1 Partial inverses, iterates and the cyclotomic criterion. Adjunction realises $S$ in $E_i(f_iS)$, so step 2.1 gives $\operatorname{soc}E_if_iS=S$ with shifts restored; conversely $S=\operatorname{soc}E_iT$ implies $T$ is a simple quotient of $\operatorname{Ind}(S,L_1)$, hence $T=f_iS$. Thus one-step socle and head are partial inverses, $f_i$ raises $\epsilon_i$ by one and $\operatorname{soc}E_i$ lowers it by one; iterating the one-strand argument gives $\operatorname{hd}\operatorname{Ind}(S\boxtimes L(i^n))=f_i^nS$. Let $J^\Lambda$ be generated by $x_1^{\lambda_i}$ on every word beginning with $i$; it annihilates a simple $S$ exactly when each first-$i$ corner has first-dot index at most $\lambda_i$, which by step 3.1 is $\epsilon_i^L(S)$, so $J^\Lambda S=0$ iff $\epsilon_i^L(S)\le\lambda_i$ for every $i$; if a generator is nonzero, simplicity forces $J^\Lambda S=S$. Right restriction preserves first strands, hence the cyclotomic subcategory; for induction, the generic unique head either survives, in which case the quotient induction has the same head, or dies, in which case the quotient induction is zero because every nonzero finite module has a simple quotient. The maximal-$\epsilon$ composition part is the same simple shift orbit as the head and socle, with coefficient a shift of $[r]_i$ by step 1.1. No choice and no self-dual representative is used. [step 2.1, step 3.1, step 4.1, F1, F2] ∎
