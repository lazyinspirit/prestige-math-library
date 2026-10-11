---
id: thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric
kind: theorem
title: "Cyclotomic KLR blocks are finite-dimensional graded symmetric algebras"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-finitely-generated-graded-projective-module,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-the-klr-cartan-pairing,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates,
       lem-cyclotomic-klr-word-traces-assemble-a-perfect-symmetric-form]
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
    - title: "Ben Webster, Knot invariants and higher representation theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Theorem 1.4, printed pp.13–16, actual partial flag maps; Proposition 1.7, printed pp.17–19, actual adjunction transport; Theorem 1.8 and its full proof with Figure 6, printed pp.19–22, and Remark 1.9, p.19. The new local suppliers construct the bimodule dual bases and full terminal residual rather than treating the source proof's easy-calculation phrase as a premise."

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

[F2] The actual composed word adjunctions and perfect symmetric functional of [[lem-cyclotomic-klr-word-traces-assemble-a-perfect-symmetric-form]], constructed from the cap/Casimir maps of [[lem-cyclotomic-klr-coherent-graded-biadjunction-and-crossing-mates]]. Its inversion weights use the typed closure ratio $t_{ij}/t_{ji}$ for $p=\tau e(ij)$; the full two-color residual is proved before quotienting, not assumed from projectivity or a categorical commutator.

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

2.1 The actual perfect word form. Compose the actual second caps along $\nu$ to obtain $\epsilon_\nu$, and put $\tau(a)=\sum_\nu\epsilon_\nu(e(\nu)ae(\nu))$. By [F2], the composed shift is $t_\beta=(\beta,\beta)-2(\Lambda,\beta)=-2\operatorname{def}_\Lambda(\beta)$. The actual word adjunctions identify $\operatorname{HOM}_B(M,B)$ with $DM\{-t_\beta\}$; at $M=B$ the isomorphism is $a\mapsto[b\mapsto\tau(ba)]$. It proves perfectness of every opposite-corner pairing, including off-diagonal corners, rather than assuming that a nonzero diagram closure detects every ideal. [step 1.1, F2]

3.1 Symmetry and its exact weights. Choose a total order on the finite color support and set $c_\nu=\prod_{a<b,\nu_a>\nu_b}t_{\nu_a\nu_b}/t_{\nu_b\nu_a}$, $c=\sum c_\nu e(\nu)$. The inversion product is intrinsic to the word and gives $c_{s_r\nu}/c_\nu=t_{ji}/t_{ij}$ for a bottom pair $(i,j)$. By [F2], $\tau(pa)=(t_{ij}/t_{ji})\tau(ap)$; hence $\operatorname{tr}(a)=\tau(ca)$ is cyclic on unequal crossings. It is cyclic on dots, idempotents and equal-color crossings by the actual native mate identities. Moving generators successively through the functional proves symmetry on every product. All $c_\nu$ are nonzero degree-zero scalars, so multiplication by $c$ is invertible, preserving perfectness and degree. The symmetric pairing therefore identifies $DB$ with $B\{t_\beta\}$ as graded bimodules. [step 2.1, F2, F3, construct, algebra]

4.1 Finite projectives, boundaries and monic specialization. Evaluating the symmetric bimodule isomorphism on shifted free modules and cutting by an idempotent gives $D_\psi P\cong\operatorname{HOM}_B(P,DB)^\psi\cong P^\#\{t_\beta\}$ for every finite projective $P$. Thus vector duality preserves projectives, without asserting $P^\#=P$ for every shift or self-duality of every finite module. At a zero block the form is zero and its pairing is zero-to-zero; at rank zero it is the identity of $k$. At one strand it is the monic top-coefficient form, with degree $-2d_i(\lambda_i-1)$ in the standard homogeneous case. The actual cap/terminal identities of [F2] are monic identities descended before taking the quotient. They therefore construct the same perfect symmetric form in every monic field deformation with shifts forgotten. Finite dimension and finite root strings in that branch come independently from [F1]; neither nilpotence nor homogeneous trace degree is claimed there. [step 3.1, F1, F2, F3, algebra] ∎
