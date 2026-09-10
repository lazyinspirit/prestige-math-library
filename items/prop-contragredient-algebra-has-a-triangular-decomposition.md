---
id: prop-contragredient-algebra-has-a-triangular-decomposition
kind: proposition
title: "Contragredient algebra has a triangular decomposition"
status: published
origin: pipeline
deps: ["def-contragredient-lie-algebra-before-the-maximal-ideal-quotient", "lem-free-lie-construction-for-finite-kac-moody-generators"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Theorem 1.3.3, pp.13–16; full tensor-module argument"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

The Cartan map is injective and $\widetilde{\mathfrak g}=\widetilde{\mathfrak n}^-\oplus\mathfrak h\oplus\widetilde{\mathfrak n}^+$. Each half is free on its indicated generators. This is a $Q$-graded weight decomposition with zero part $\mathfrak h$ and all other degrees in $\pm(Q^+\setminus\{0\})$.

## Facts & Assumptions

**Given:** The contragredient relations and a minimal realization.

[F1] The presentation and its homogeneous degrees are fixed. ([[def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]]).

[F2] The free Lie algebra embeds as bracket words in the tensor algebra. ([[lem-free-lie-construction-for-finite-kac-moody-generators]]).

## Proof

1.1 On $T(\mathbb C^n)$ with letters $v_j$, let $F_j$ be left concatenation and let $H_h$ multiply a word of degree $-\beta$ by $(\lambda-\beta)(h)$, for any fixed $\lambda\in\mathfrak h^*$. Define $E_i1=0$ and $E_i(v_ja)=v_jE_i(a)+\delta_{ij}H_{h_i}(a)$. Thus $[E_i,F_j]=\delta_{ij}H_{h_i}$ directly, the $H_h$ commute, and $[H_h,F_j]=-\alpha_j(h)F_j$. Every term of $E_i(a)$ has weight equal to the weight of $a$ plus $\alpha_i$, by induction on word length (the extra term occurs only when $i=j$). Hence $[H_h,E_i]=\alpha_i(h)E_i$. All defining relations hold and give a representation for each $\lambda$. [F1, given]

2.1 A negative bracket word acts by left multiplication by the same tensor commutator word. Its value on 1 is that word. The composite of the free negative Lie algebra with this evaluation is the injection of F2, so its map into $\widetilde{\mathfrak n}^-$ is injective as well as surjective. Also $H_h1=\lambda(h)$ for every $\lambda$, so a Cartan element killed by the presentation must be zero. The assignment $e_i\mapsto-f_i$, $f_i\mapsto-e_i$, $h\mapsto-h$ preserves each relation: for example $[-f_i,-e_j]=-\delta_{ij}h_i$. Its square is the identity. It proves freeness of the positive half too. [F1, F2, step 1.1]

3.1 Jacobi gives $[f_i,[e_j,u]]=-\delta_{ij}[h_i,u]+[e_j,[f_i,u]]$. Induction on the length of the positive word $u$ therefore gives $[f_i,\widetilde{\mathfrak n}^+]\subset\mathfrak h+\widetilde{\mathfrak n}^+$. The analogous inclusion holds with signs reversed. The span $S=\widetilde{\mathfrak n}^-+\mathfrak h+\widetilde{\mathfrak n}^+$ is consequently stable under brackets with every generator, so iterated brackets span only $S$ and $S=\widetilde{\mathfrak g}$. [F1, step 2.1]

4.1 If $u_-+h+u_+=0$, evaluation on 1 in step 1.1 gives $u_-(1)+\lambda(h)1=0$. The first term has positive tensor length, so both terms vanish. Varying $\lambda$ kills $h$, and F2 kills $u_-$. Then $u_+=0$ as well. Homogeneity of the defining ideal gives a direct grading; Jacobi gives $[h,x]=\beta(h)x$ in degree $\beta$. Independence of the $\alpha_i$ identifies distinct degrees with distinct weights. Thus the displayed grading has exactly the asserted signs and zero part. [F1, F2, step 1.1, step 2.1, step 3.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Theorem 1.3.3, pp.13–16; full tensor-module argument.
