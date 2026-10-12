---
id: ex-projective-simple-cartan-pairing-in-a-small-cyclotomic-block
kind: example
title: "The projective-simple Cartan pairing in a small cyclotomic block"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-divided-power-klr-idempotents-and-projectives,
       def-the-klr-cartan-pairing,
       ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]
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
      locator: "Section 6: the perfect pairing between [Proj] and [Rep], the normalized self-dual representatives and the rank-one values; Theorem 6.2."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Section 3.1, Example 3.23: NH_2 = P_{i,2}^{[2]_{q_i}!} and the self-pairing ([P_{i,2}],[P_{i,2}])=(1-q^2)^{-1}(1-q^4)^{-1} in the unquotiented rank-one case."
---

## Example

For rank one $d_i=1$, $\lambda=2$, let $B_r=R^\Lambda(r\alpha_i)$. The
normalized simples are $S_0=k$, $S_1=k$ with $x=0$, and
$S_2=C\{-1\}$ of graded dimension $q^{-1}+q$, where
$C=k[x_1,x_2]/(x_1+x_2,x_1x_2)$. Their normalized projective covers are
$P_0=k$, $P_1=k[x]/x^2$, $P_2=S_2$. Then $T(P_r,S_s)=\delta_{rs}$, with
distinct roots paired by zero. Under the integral projective identification
$P_0,P_1,P_2$ map to $v,Fv,F^{(2)}v$, respectively, while
$[B_2]=(q+q^{-1})[P_2]$ maps to $F^2v$. In $G_0$ the correct regular classes
are $[B_1]=(1+q^2)[S_1]$ and $[B_2]=(q+q^{-1})[S_2]$. The canonical
restricted-dual map sends $S_r$ to the form-dual of the corresponding divided
lower vector; it does not identify $B_1$ with $S_1$.

## Verification

**Given:** The rank-one datum $I=\{i\}$, $(\alpha_i\mid\alpha_i)=2$, $d_i=1$, $q_i=q$, $\lambda=2$, with the blocks $B_r=R^\Lambda(r\alpha_i)$ of [[ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two]].

[F1] The rank-one blocks: $B_0=k$, $B_1=k[x]/x^2$, and $B_2=NH_2/(x_1^2)\cong P_{i,2}^{\oplus(q+q^{-1})}$; the centered polynomial column reproduces $C=k[x_1,x_2]/(x_1+x_2,x_1x_2)$ with the shift $-d_i$ ([[ex-cyclotomic-klr-quotients-in-ranks-zero-one-and-two]], [[def-divided-power-klr-idempotents-and-projectives]]).

[F2] The quotient-cover pairing: $T(P,S)=\operatorname{gdim}(P^\psi\otimes_BS)=\delta_{P,S}$ in normalized cover/simple bases, and the normalized covers are the nonzero extensions of generic covers ([[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]]).

[F3] The integral identifications: $\phi(P_0)=v$, $\phi(P_1)=Fv$, $\phi(P_2)=F^{(2)}v$ under the normalized projective basis, and the canonical restricted-dual map sends simples to form-dual lower vectors ([[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]], [[thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module]]).

**Verification.**

1.1 The blocks and their composition structure. By [F1] the three nonzero blocks have graded dimensions $1$, $1+q^2$ and $(q+q^{-1})^2$; the first regular module $B_1$ has two composition factors $S_1,S_1\{2\}$ with graded dimensions $1+q^2$, and the second block is the endomorphism matrix algebra of the graded column $S_2$, whose regular left module is the column tensored with its graded vector dual of dimension $q+q^{-1}$. [F1]

2.1 The Cartan pairing. The normalized cover-to-head Hom space is $k$ in degree zero and there are no other simple types in a block, so quotient-cover evaluation of [F2] identifies the tensor pairing with $T(P_r,S_s)=\delta_{rs}$, with distinct roots paired by zero. The integral identification of [F3] maps $P_0,P_1,P_2$ to $v,Fv,F^{(2)}v$ and $[B_2]=(q+q^{-1})[P_2]$ to $F^2v$, and in $G_0$ the regular classes are $[B_1]=(1+q^2)[S_1]$ and $[B_2]=(q+q^{-1})[S_2]$. [step 1.1, F2, F3]

3.1 The restricted dual. The canonical restricted-dual map sends $S_r$ to the form-dual of the corresponding divided lower vector, and since $T$ pairs $P_r$ with $S_s$ by $\delta_{rs}$ it does not identify $B_1$ with $S_1$; the scalar $q+q^{-1}$ is not removed by the pairing. This is a cover/simple pairing computation, not a claim that the Cartan matrix is all ones or that a trace removes a denominator, and it is a finite computation using no choice. [step 2.1, F3] ∎
