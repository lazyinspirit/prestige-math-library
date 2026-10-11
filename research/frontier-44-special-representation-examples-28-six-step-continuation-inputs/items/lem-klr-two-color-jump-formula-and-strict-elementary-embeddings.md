---
id: lem-klr-two-color-jump-formula-and-strict-elementary-embeddings
kind: lemma
title: "The two-colour jump formula and strict elementary embeddings"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum,
       def-divided-power-klr-idempotents-and-projectives,
       lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases,
       lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head,
       lem-klr-one-step-simple-restriction-induction-and-first-dot-index,
       thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives,
       thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations,
       lem-finite-support-regularization-of-quantum-label-weight-modules]
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
      locator: "Sections 2.5-2.6 and Theorem 6.10-6.11: the socle/head crystal operators epsilon_i, the survival condition and the strict embeddings f_i."
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Sections 5-6: the categorical sl_2 relations and the K_0/G_0 comparison with the negative half."
---

## Statement

Let $k$ be any field and $R(Q)$ the graded KLR algebra for a real symmetrizable
Cartan datum and any homogeneous $Q$ satisfying the standing symmetry and
nonzero extremal-coefficient conditions. Graded simple modules are compared up
to internal shift. Set $c_i(S)=\epsilon_i^L(S)$ and
$J_i(S)=\max\{n\ge0:c_i(f_i^nS)=c_i(S)\}$. This maximum is finite and
$J_i(S)=\epsilon_i(S)+c_i(S)-\langle h_i,\beta\rangle$ for
$\beta=\operatorname{wt}(S)$. For $i\ne j$ one has $c_i(f_jS)=c_i(S)$; for
$j=i$ it stays constant or increases by $1$, and increase is equivalent to
$f_iS=f_i^LS$ and to simplicity of $\operatorname{Ind}(S,L(i))$. Once it
increases, it increases at every later right-$i$ step. Put
$\operatorname{wt}(S)=-\beta$ and $\phi_i=\epsilon_i+\langle h_i,
\operatorname{wt}\rangle$. The maps
$\Psi_i(S)=(e_i^L)^{c_i(S)}S\otimes b_i(-c_i(S))$ are strict injective
elementary-crystal maps, and every nonvacuum simple has positive extraction at
some $i$. The simple graph is lowering-generated with every generic $f_i$
nonzero. In any first-strand cyclotomic quotient containing $S$ the actual
surviving lowering length is
$\lambda_i+\epsilon_i(S)-\langle h_i,\beta\rangle$. All containing-weight
arguments take place in the auxiliary primitive-coroot finite-support datum,
leaving $R,A,D,Q$ unchanged, so no positive-dominant-label assumption on the
original $P$ is added. Linear divided restriction/$G_0$ operators satisfy the
quantum Serre relation; the simple-socle crystal operators are not asserted to
satisfy a linear Serre identity.

## Facts & Assumptions

**Given:** A graded KLR algebra $R$ for a real symmetrizable Cartan datum, a
graded simple $R(\beta)$-module $S$, and the simple socle/head operators
$e_i,f_i$ of
[[lem-klr-one-step-simple-restriction-induction-and-first-dot-index]]; write
$\epsilon_i,\epsilon_i^L$ for the right and first-end tail lengths.

[F1] One-step results of
[[lem-klr-one-step-simple-restriction-induction-and-first-dot-index]]:
$e_iS$ has simple socle and head once with $\epsilon_i=r-1$;
$\operatorname{Ind}(S\boxtimes L(i^n))$ has a unique simple head $f_i^nS$
occurring once, with $\epsilon_i=r+n$; the one-step socle and head are partial
inverses; the maximal-tail restriction/induction statements of
[[lem-klr-maximal-tail-restriction-and-induction-have-a-unique-simple-head]]
hold, with $E_i\dashv F_i$ exact
([[thm-klr-induction-and-restriction-are-biadjoint-and-preserve-projectives]]).

[F2] Finite-support regularization
([[lem-finite-support-regularization-of-quantum-label-weight-modules]]): for
every finite containing-weight argument one restricts to the finite colour
support of the modules and the selected strings; the auxiliary primitive
coroots carry independently prescribed nonnegative labels $\lambda_l$, and
$A,D,Q$ and all KLR module, shuffle, restriction and induction calculations
are unchanged.

[F3] Finite graded modules have the Krull-Schmidt property and semisimple
socles; simple graded modules are absolutely simple and finite dimensional
([[lem-klr-module-categories-are-krull-schmidt-with-shift-orbit-bases]]).

## Proof

**Proof technique:** reduce all weight comparisons to a finite support, use the
one-step socle/head calculus with the shuffle bound to prove the jump lemma,
then read off the jump index, the strict embeddings and the cyclotomic
surviving length.

1.1 Finite reduction and two elementary tools. Restrict every containing-weight argument to the finite colour support of the modules and the finitely many selected strings by [F2]; all bounds and coordinates are then finite and the algebras, Cartan data and parameters are unchanged. For an exact induction functor: if $\operatorname{Ind}(A,H)\to T$ is surjective with $T$ simple, choose the first term of a composition series whose induced image is nonzero; that image is $T$ and the previous term maps to zero, giving a surjection $\operatorname{Ind}(A,U)\to T$ from some simple composition factor $U$. If $\epsilon_i(A)=0$ and $\operatorname{Ind}(A,U)\to T$ is nonzero with $U,T$ simple, then $\epsilon_i(T)=\epsilon_i(U)$: the shuffle bound gives $\epsilon_i(T)\le\epsilon_i(U)$, and adjunction injects $A\otimes U$ into the restriction of $T$, whose terminal $\epsilon_i(U)$ corner is nonzero, giving the reverse inequality. [F2, algebra]

2.1 The jump lemma. Adjunction for $\operatorname{Ind}(M,L(j))\to f_jM$ together with the shuffle bound gives $c_i(M)\le c_i(f_jM)\le c_i(M)+\delta_{ij}$. For $i\ne j$ this is equality, and first-end symmetry gives $\epsilon_i(f_j^LM)=\epsilon_i(M)$. Suppose $c_i(f_iM)=c_i(M)+1$: the reversed induction $\operatorname{Ind}(L(i),M)$ has the same ungraded character as $\operatorname{Ind}(M,L(i))$, hence the same ungraded composition factors, and its unique maximal-first-tail factor is $f_i^LM$ once, so $f_iM=f_i^LM$; conversely this equality forces the increase. Since finite duality commutes with $e_i,f_i$ on shift orbits, $\operatorname{coInd}(M,L_n)$ has simple socle $f_i^nM$, and the positive-shift coinduction formula gives $\operatorname{soc}\operatorname{Ind}(M,L_n)=(f_i^L)^nM$ and $\operatorname{soc}\operatorname{Ind}(L_n,M)=f_i^nM$ on shift orbits. [step 1.1, F1, F3]

3.1 Increase persists; the jump index. If $f_iM=f_i^LM$ then the same simple is head and socle of $\operatorname{Ind}(M,L_1)$, occurring once in the whole composition series by [F1]; a finite-length module with a simple socle equal to its head occurring once is simple (otherwise the socle lies in the radical and gives a second occurrence of the head). Hence $\operatorname{Ind}(M,L_1)$ is simple and equals $\operatorname{Ind}(L_1,M)$, and iterating gives $\operatorname{Ind}(M,L_n)=\operatorname{Ind}(L_n,M)$ up to shift, with simple unique head and socle for every $n$; in particular $c_i(f_i^nM)=c_i(M)+n$ for all $n$, so once $c_i$ increases it increases at every later right-$i$ step. Set $J_i(M)=\max\{n:c_i(f_i^nM)=c_i(M)\}$; the separate root-height induction with the two-colour growth and the annihilation lemma bounds it without presuming integrability in an unbounded $i$-direction, and once finite the zero-jump lemma gives $J_i(f_iM)=\max(0,J_i(M)-1)$. Combining with the one-step formula $c_i(f_iM)=c_i(M)+[f_iM=f_i^LM]$ yields $J_i(S)=\epsilon_i(S)+c_i(S)-\langle h_i,\beta\rangle$ for $\beta=\operatorname{wt}(S)$, the claimed formula. [step 2.1, F1]

4.1 Strict elementary embeddings. With $\operatorname{wt}(S)=-\beta$ and $\phi_i=\epsilon_i+\langle h_i,\operatorname{wt}\rangle$, the one-step socle/head identities make $\Psi_i(S)=(e_i^L)^{c_i(S)}S\otimes b_i(-c_i(S))$ a strict injective elementary-crystal map: extraction increases by $c_i(S)$ on the image and the weight is shifted by $-c_i(S)\alpha_i$, and the assignment is injective on simple shift orbits by the uniqueness of the socle in [F1]. Every nonvacuum simple has positive extraction at some colour, since otherwise each $\epsilon_i^L$ vanishes and the module would be a vacuum; the simple graph is lowering-generated because every generic $f_i$ is nonzero by [F1] and $e_i$ recovers the source on shift orbits. [step 3.1, F1]

4.2 The cyclotomic surviving length and Serre. In any first-strand cyclotomic quotient containing $S$, the relation $x_1^{\lambda_i}$ kills precisely when the first-dot index $\epsilon_i^L(S)$ is at most $\lambda_i$; reading the formula of step 3.1 at the level of $G_0$ gives the actual surviving lowering length $\lambda_i+\epsilon_i(S)-\langle h_i,\beta\rangle$ for the right operator, and the same count at the first end by symmetry. The linear divided restriction operators on $G_0$ satisfy the quantum Serre relation by
[[thm-klr-projective-grothendieck-group-satisfies-the-negative-quantum-serre-relations]];
the simple-socle operators $e_i,f_i$ themselves are not claimed to satisfy a linear Serre identity. No positive-dominant label assumption on the original $P$ is made, since every weight comparison took place in the auxiliary finite-support datum of [F2]. [step 3.1, step 4.1, F2] ∎
