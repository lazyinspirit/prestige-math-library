---
id: thm-cyclotomic-klr-functors-define-an-integrable-quantum-action-on-k-zero-and-g-zero
kind: theorem
title: "Cyclotomic KLR functors define an integrable quantum action on $K_0$ and $G_0$"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 17
deps: [def-cyclotomic-klr-induction-and-restriction-functors,
       def-graded-grothendieck-group-shift-module-and-cartan-map,
       def-the-klr-cartan-pairing,
       lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]
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
      locator: "Section 6: the normalized operator diagrams on K_0 and G_0, the perfect pairing between [Proj] and [Rep], and the adjointness of the two normalized actions."
    - title: "Ben Webster, Knot Invariants and Higher Representation Theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Section 1.3-1.4: the pairing between projective and module Grothendieck groups and the biadjointness of the normalized functors."
---

## Statement

For the STANDARD graded cyclotomic quotient over any field and any real
symmetrizable Cartan datum with admissible graded KLR parameters, put
$A=\mathbb Z[q,q^{-1}]$, $h_i(\beta)=\langle h_i,\Lambda-\beta\rangle$, and
$q_i=q^{d_i}$. On projective $K_0$ use $F_i=F_i^{\mathrm{basic}}$ and
$E_i|_\beta=q_i^{-1-h_i(\beta)}E_i^{\mathrm{basic}}$; on module $G_0$ use
either the SAME canonical normalization, or the Kang--Kashiwara normalization
$E_i^{\mathrm{KK}}=E_i^{\mathrm{basic}}$,
$F_i^{\mathrm{KK}}|_\beta=q_i^{1-h_i(\beta)}F_i^{\mathrm{basic}}$. In all cases
$K_i|_\beta=q_i^{h_i(\beta)}$. These operators satisfy the full quantum mixed
and Serre relations and are locally nilpotent; their scalar extensions to
$\mathbb Q(q)$ are integrable weight modules. No decomposition into
finite-dimensional full-$\mathfrak g$ submodules is asserted in affine or
indefinite type.

The tensor pairing
$T_\beta(P,M)=\operatorname{gdim}(P^\psi\otimes_{R^\Lambda(\beta)}M)$ is
$A$-BILINEAR and weightwise perfect in normalized projective-cover/simple
bases. The Hom pairing $h(P,M)=\operatorname{gdim}\operatorname{HOM}(P,M)$
instead satisfies $h(P,M)=T(P^\#,M)$ and is first-bar-sesquilinear. For $T$,
projective $E_i$ is adjoint to module $F_i^{\mathrm{KK}}$ and projective $F_i$
to module $E_i^{\mathrm{KK}}$. The two module actions are conjugate by the
weight rescaling $q^{\operatorname{def}_\Lambda(\beta)}$, where
$\operatorname{def}_\Lambda(\beta)=(\Lambda,\beta)-(\beta,\beta)/2$.

## Facts & Assumptions

**Given:** The standard cyclotomic quotient $R^\Lambda$, its graded
Grothendieck groups and Cartan map
([[def-graded-grothendieck-group-shift-module-and-cartan-map]]), and the
normalized-action lemma
[[lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action]].

[F1] The normalized operators displayed in the Statement on both Grothendieck groups satisfy the
mixed relations and the full symmetrizable Serre families, with local
nilpotence and torus action $K_i|_\beta=q_i^{h_i(\beta)}$
([[lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action]]).

[F2] The tensor and Hom pairings and the normalized cover/simple bases
([[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]]);
the Cartan pairing conventions of [[def-the-klr-cartan-pairing]].

[F3] The basic functors and their adjunctions
([[def-cyclotomic-klr-induction-and-restriction-functors]]).

## Proof

**Proof technique:** combine the two normalizations, verify the pairings and the
adjointness by corner tensor evaluation, and compare the two module actions by
the defect rescaling.

1.1 The two normalizations agree with the actions. The normalized-action supplier [F1] gives, for $E_i$ applied to input root $\beta+\alpha_i$, the exponent $-1-h_i(\beta+\alpha_i)=1-h_i(\beta)$, exactly the target-weight normalization; the same computation with the factor on $F$ gives the Kang--Kashiwara normalization. Both satisfy the mixed relations, the full Serre families and local nilpotence, and $K_i|_\beta=q_i^{h_i(\beta)}$ in all cases; hence all four displayed operator families are integrable weight module structures after scalar extension to $\mathbb Q(q)$, with no assertion of finite-dimensional full-$\mathfrak g$ submodules in affine or indefinite type. [F1]

2.1 Bilinearity and perfectness of $T$. Tensor products of finite modules are finite, so $T$ has Laurent-polynomial values. The quotient-cover lemma [F2] gives absolutely simple normalized heads and $T(P(S),S')=\delta_{S,S'}$, proving weightwise perfectness in normalized bases; shifting either tensor factor multiplies by the same power of $q$, which is exactly $A$-bilinearity. Finite-projective evaluation identifies $\operatorname{HOM}(P,M)$ with $(P^\#)^\psi\otimes M$, so $h(P,M)=T(P^\#,M)$, which is first-bar-sesquilinear rather than bilinear. [step 1.1, F2]

3.1 Adjointness of the two normalized actions. For the corner $A_\beta\to eB_{\beta+i}e$, associativity of the balanced tensor over the corner gives $T_B(F^{\mathrm{basic}}P,M)=T_A(P,E^{\mathrm{basic}}M)$: both sides are the dimension of the same balanced tensor. The generator-fixing anti-involution flips balanced tensors, so $T_B(P,F^{\mathrm{basic}}M)=T_A(E^{\mathrm{basic}}P,M)$ as well, the corner factors becoming $eB$ and $Be$ in opposite order with multiplication giving the evaluation isomorphism. Multiplying the second identity by $q_i^{1-h_i(\beta)}$ gives the first normalized adjoint statement, and the first identity gives the other; neither the Frobenius theorem nor the highest-weight $K_0$ theorem is used. [step 2.1, F3]

4.1 The defect rescaling. Adding an $i$ changes the defect by $d_i(h_i(\beta)-1)$, so the two module actions of step 1.1 are conjugate by the weight rescaling $q^{\operatorname{def}_\Lambda(\beta)}$ with $\operatorname{def}_\Lambda(\beta)=(\Lambda,\beta)-(\beta,\beta)/2$; the same computation applies on projective $K_0$ with the roles of $E$ and $F$ exchanged. Hence the canonical and Kang--Kashiwara normalizations define the same quantum structure up to the stated conjugation, completing the proof. [step 1.1, step 3.1, F1] ∎
