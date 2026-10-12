---
id: ex-projective-versus-simple-grothendieck-classes-in-a-small-block
kind: example
title: "Projective and simple Grothendieck classes in a small non-semisimple block"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 41
deps: [prop-qg8-categorification-transports-across-the-hecke-klr-bridge,
       thm-ariki-canonical-basis-theorem-in-characteristic-zero,
       thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero,
       def-graded-module-and-projective-grothendieck-groups-for-klr-towers,
       def-graded-cartan-pairing-between-projectives-and-modules,
       def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention,
       prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras,
       def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks,
       lem-cyclotomic-klr-block-satisfies-the-hecke-relations,
       def-affine-and-cyclotomic-type-a-hecke-algebras,
       cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading,
       def-graded-specht-module-by-homogeneous-standard-tableaux]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3, Adv. Math. 222 (2009) 1883-1942 (complete 57-page article)"
      url: "https://arxiv.org/pdf/0901.4450"
      locator: "Section 4.2, printed p. 31: the level-one Hecke presentation; Section 3.4-3.7, printed pp. 16-21: Fock space and restricted multipartitions; Section 5.1-5.4, printed pp. 45-52: the canonical-basis transport and the e=2 transition data. Complete passages read."
    - title: "Alexander Kleshchev, Representation theory of symmetric groups and related Hecke algebras, arXiv:0909.4844v1, Bull. Amer. Math. Soc. 47 (2010) 419-481 (complete 66-page survey)"
      url: "https://arxiv.org/pdf/0909.4844"
      locator: "Section 2, printed pp. 6-17: cyclotomic Hecke conventions and blocks; Section 8.1-8.5, printed pp. 33-39: Fock space and canonical bases. Complete passages read."
verification:
  precheck: pass
---

## Example

Take $F=\mathbb C$, $\xi=-1$ (so $e=2$), level one $\Lambda_0$ and $d=2$.
Then $H^\Lambda_2=H_{\mathbb C,-1}(S_2)$ with $T_1^2=-2T_1-1$, i.e.
$(T_1+1)^2=0$; the algebra is $\mathbb C[t]/(t^2)$ with $t=T_1+1$, a local
algebra whose unique simple is $D=\mathbb C$ with $t$ acting as $0$, and whose
regular module is the unique indecomposable projective $P=H^\Lambda_2$. Both
partitions of $2$ have content $\alpha_0+\alpha_1$ in the charge-$0$
convention, so $\alpha_0+\alpha_1$ is the only nonzero block and
$H^\Lambda_{\alpha_0+\alpha_1}=\mathbb C[t]/(t^2)$; its transported grading
has $\deg t=2$ (the KLR block is the rank-two $e=2$ block
$F[t]/(t^2)$ with $\deg y_2=2$). The graded Specht modules are the
one-dimensional modules $S(2)=\mathbb C$ and $S(1,1)=\mathbb C$, both with
trivial underlying action of $t$, and the graded composition series of $P$ is
$0\subset tP\subset P$ with $tP\cong D\{2\}$, so
$$[P]=(1+q^2)[D]\quad\text{in }G_0^{\rm gr}(H^\Lambda_{\alpha_0+\alpha_1}),\qquad [P]\notin\{[D],q^{\pm1}[D],\dots\}.$$
The restricted label is $(1,1)$ (since $(1,1)$ is $2$-restricted and $(2)$ is
not), the edge degrees of the two shapes are $\deg(S(1,1))=0$ and
$\deg(S(2))=1$, so the graded Specht classes are $[S(1,1)]=[D]$ and
$[S(2)]=q[D]$, and the level-one Fock data give
$G(1,1)=M_{1,1}+qM_{(2)}$ and $G^*(1,1)=(M_{1,1}+qM_{(2)})/(1+q^2)$; hence
under the transported identifications of
[[thm-ariki-canonical-basis-theorem-in-characteristic-zero]]
$$[P]\longmapsto G(1,1)=M_{1,1}+qM_{(2)}=(1+q^2)G^*(1,1),\qquad [D]\longmapsto G^*(1,1).$$
The graded Cartan pairing of
[[def-graded-cartan-pairing-between-projectives-and-modules]] has
$h([P],[D])=1$ and $h([P],[P])=1+q^2$, while the graded composition
multiplicity is $[P:D]_q=1+q^2$ (ungraded value $2$). Thus the projective class
$[P]$ is not a simple class, and the two bases are dual to each other under $h$
without being equal as classes. All computations are finite and explicit;
choice is inherited only through the transported identifications cited.

## Facts & Assumptions

**Given:** The field $\mathbb C$, the parameter $\xi=-1$, the level-one
fundamental weight $\Lambda_0$, and $d=2$.

[F1] The level-one Hecke algebra is the finite algebra
$H_{F,\xi}(S_2)$ with $T_1^2=(\xi-1)T_1+\xi$, and its residue-content blocks
are the $e_\alpha H^\Lambda_d$
(`prop-cyclotomic-hecke-algebras-of-level-one-are-finite-hecke-algebras`,
`def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks`).

[F2] The transported grading (nontrivial for this $e=2$ rank-two block, the
corollary's explicit witness) and the blockwise KLR identification are
supplied by `cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading`;
the KLR block satisfies the Hecke relations
(`lem-cyclotomic-klr-block-satisfies-the-hecke-relations`).

[F3] The graded Specht modules, their degree recursion and the degree of a
standard tableau are those of
[[def-graded-specht-module-by-homogeneous-standard-tableaux]]; the level-one
transition data in the $e=2$ case are the recorded computation of
[[def-level-one-global-basis-transition-polynomials-in-the-symmetric-group-convention]].

[F4] The graded Grothendieck groups, their shift action and the graded Cartan
pairing $h$ are those of
[[def-graded-module-and-projective-grothendieck-groups-for-klr-towers]] and
[[def-graded-cartan-pairing-between-projectives-and-modules]]; the projective
and simple classes are matched with $G(1,1)$ and $G^*(1,1)$ by
[[thm-ariki-canonical-basis-theorem-in-characteristic-zero]], and the graded
multiplicities by
[[thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero]].

## Proof

**Proof technique:** direct.

1.1 **The algebra and its block.** With $\xi=-1$ the relation $T_1^2=(\xi-1)T_1+\xi$ becomes $T_1^2=-2T_1-1$, i.e. $(T_1+1)^2=0$ with $t=T_1+1$ [F1]. The algebra $\mathbb C[t]/(t^2)$ is local with radical $(t)$ and unique simple $D=\mathbb C$; its regular module is projective and indecomposable, so $P=H^\Lambda_2$ is the unique indecomposable projective [F1]. The nodes of $(2)$ have residues $0,1$ and those of $(1,1)$ have residues $0,-1\equiv1$, so both partitions lie in the block of content $\alpha_0+\alpha_1=\alpha_1+\alpha_0$, which is therefore the only nonzero block and equals $\mathbb C[t]/(t^2)$ [F1, F2]. [F1, F2]

1.2 **The graded composition series.** Multiplication by $t$ raises the degree by $\deg t=2$ in the transported grading, so $tP\cong D\{2\}$ and $P\cong D\oplus D\{2\}$ as graded vector spaces; hence the graded composition series is $0\subset tP\subset P$ with $[P]=(1+q^2)[D]$ in $G_0^{\mathrm{gr}}(H^\Lambda_{\alpha_0+\alpha_1})$, which is not a shift of $[D]$ [F2, F4]. [F2, F4]

1.3 **Specht degrees and Fock data.** The unique tableau of shape $(2)$ has degree $d_A(2)=1$ (the addable $1$-node $(2,1)$ lies strictly below the removable node $(1,2)$, and there is no removable $1$-node below it), and the unique tableau of $(1,1)$ has degree $0$; hence $[S(2)]=q[D]$ and $[S(1,1)]=[D]$ [F3]. The recorded $e=2$ Fock computation gives $G(1,1)=M_{1,1}+qM_{(2)}$ and $G^*(1,1)=(M_{1,1}+qM_{(2)})/(1+q^2)$, so $G(1,1)=(1+q^2)G^*(1,1)$ [F3]. [F3]

2.1 **The identifications and the pairing.** By [F4] the projective class $[P]$ corresponds to $G(1,1)$ and the simple class $[D]$ to $G^*(1,1)$, giving $[P]=(1+q^2)[D]\mapsto G(1,1)$ and $[D]\mapsto G^*(1,1)$ under the transported identifications. The graded Cartan pairing is read from $\operatorname{Hom}^0(P,D)=\mathbb C$ and $\operatorname{gdim}\operatorname{HOM}(P,P)=1+q^2$ (endomorphisms are the identity and multiplication by $t$, of degree $2$), so $h([P],[D])=1$ and $h([P],[P])=1+q^2$; the graded composition multiplicity is $[P:D]_q=1+q^2$ with ungraded value $2$ [F4]. Hence the projective class is not a simple class, and the projective and simple families are dual but not equal [F4]. [F3, F4, step 1.2]

3.1 **Choice.** The computation uses the explicit two-dimensional algebra, its two partitions and the recorded $e=2$ polynomials; no family of nonempty sets is selected, so choice is inherited only through the transported identifications cited in [F4]. [F4, given] ∎
