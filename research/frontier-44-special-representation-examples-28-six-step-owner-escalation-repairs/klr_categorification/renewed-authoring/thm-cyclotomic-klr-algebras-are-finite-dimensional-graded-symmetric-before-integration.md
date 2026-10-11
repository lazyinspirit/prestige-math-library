---
id: thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric
kind: theorem
title: "Cyclotomic KLR algebras are finite-dimensional graded symmetric algebras"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-finitely-generated-graded-projective-module,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-the-klr-cartan-pairing,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates]
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
      locator: "Section 4.1, Corollary 4.4 (finite generation) and Section 6 (the symmetric trace and the self-duality of the regular module)."
    - title: "Raphael Rouquier, 2-Kac-Moody Algebras, arXiv:0812.5023v3"
      url: "https://arxiv.org/pdf/0812.5023"
      locator: "Section 3.2.2 and Section 5.2: the symmetric (Frobenius) trace of the nil-Hecke and cyclotomic quotients and its degree."
---

## Statement

For the STANDARD graded cyclotomic quotient over any degree-zero field and
admissible graded real symmetrizable KLR datum, every block
$B=R^\Lambda(\beta)$ is finite-dimensional, all dots are nilpotent, and
$R^\Lambda(\beta+n\alpha_i)=0$ for large $n$. Put
$\operatorname{def}_\Lambda(\beta)=(\Lambda,\beta)-(\beta,\beta)/2$. A nonzero
block has a perfect symmetric homogeneous functional
$\operatorname{tr}_\beta:B\to k$ of degree
$t_\beta=-2\operatorname{def}_\Lambda(\beta)$; on a zero block perfectness is
vacuous and the functional is zero. Thus $DB\cong B\{t_\beta\}$ as graded
bimodules. For finite projective $P$, with
$P^\#=\operatorname{HOM}_B(P,B)^\psi$, one has
$D_\psi P\cong P^\#\{t_\beta\}$, so vector duality preserves projectives.
This does not assert $P^\#=P$ for every shifted projective, nor self-duality
of every indecomposable finite module. For arbitrary monic deformation
polynomials the separate conclusion is finite-dimensional and symmetric
UNGRADED, with finite root strings and monic dot annihilators; nilpotence and
homogeneous trace degree are not asserted. In rank one the standard trace is
the top coefficient on $k[x]/x^{\lambda_i}$ and has degree
$-2d_i(\lambda_i-1)$.

## Facts & Assumptions

**Given:** The standard cyclotomic quotient $R^\Lambda$ of
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]] and a block
$B=R^\Lambda(\beta)$.

[F1] The dot-annihilator/root-string lemma
([[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]):
$B$ is finite dimensional, every dot is nilpotent in the standard case, and
$R^\Lambda(\beta+n\alpha_i)=0$ for large $n$; in the monic branch the
statements are ungraded.

[F2] The coherent graded biadjunction
([[lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates]]):
for each word induction from the vacuum $E_\nu\{t_\beta\}\dashv F_\nu\dashv
E_\nu$, because $\sum t_i(\gamma)=-2((\Lambda,\beta)-(\beta,\beta)/2)$ is
independent of the word.

[F3] The KLR Cartan pairing of [[def-the-klr-cartan-pairing]] and the
finitely generated graded projective module conventions of
[[def-finitely-generated-graded-projective-module]], with internal shifts of
[[def-graded-ring-module-bimodule-and-internal-shift]].

## Proof

**Proof technique:** sum the vacuum-word projectives to the regular module, use
the shifted second adjunction to produce a natural degree-$t_\beta$ functional,
show its induced pairing is perfect and symmetric, then restrict to finite
projectives.

1.1 Finite dimensionality and the regular module. By [F1] every block $B$ is finite dimensional (ungraded in the monic branch), every dot is nilpotent in the standard case, and $R^\Lambda(\beta+n\alpha_i)=0$ for large $n$. Sum the vacuum word projectives $F_\nu k=Be(\nu)$ over the words $\nu$ of weight $\beta$ to obtain the regular module $B=\bigoplus_\nu Be(\nu)$. [F1]

2.1 The trace from the second adjunction. For each word induction from the vacuum, [F2] gives $E_\nu\{t_\beta\}\dashv F_\nu\dashv E_\nu$ with the same shift, since $\sum t_i(\gamma)$ is independent of the word and equals $-2\operatorname{def}_\Lambda(\beta)$. The second adjunction therefore gives a natural isomorphism $\operatorname{HOM}_B(M,B)\cong D\operatorname{HOM}_B(B,M)\{-t_\beta\}$. The image of $1_B$ is a degree-$t_\beta$ functional, and naturality identifies the induced pairing with composition; the isomorphism proves perfectness rather than assuming that a nonzero diagram closure detects every ideal. [step 1.1, F2]

3.1 Symmetry and cyclicity. Dot and equal-color mate coherence makes the raw form cyclic on those generators. For an unequal crossing the proved oriented mixed identity is $\tau(pa)=(t_{ji}/t_{ij})\tau(ap)$ with NE/SW color $i$; choose a reference word and nonzero diagonal weights $c_\nu$ with $c_{s\nu}(t_{ji}/t_{ij})=c_\nu$, whose inversion-pair product is path independent by Coxeter moves. Rescaling by $c=\sum_\nu c_\nu e(\nu)$ makes the trace cyclic for every generator and hence every product; multiplication by $c$ is invertible, preserving perfectness and degree. Hence $\operatorname{tr}_\beta$ is a perfect symmetric homogeneous functional of degree $t_\beta$, and the symmetric pairing identifies $B\{t_\beta\}$ with $DB$. [step 2.1, F3]

4.1 Finite projectives and the monic branch. Finite-projective evaluation gives $D_\psi P\cong P^\#\{t_\beta\}$, so vector duality preserves projectives; no claim is made that $P^\#=P$ for every shifted projective. The monic ungraded formal quotient and dual-basis construction proves the same symmetry after forgetting shifts, with no flatness assumption, and no Frobenius theorem is used to establish its own adjunction supplier. In rank one the trace computation of [F1] gives the top coefficient on $k[x]/x^{\lambda_i}$, of degree $-2d_i(\lambda_i-1)$. [step 3.1, F1] ∎
