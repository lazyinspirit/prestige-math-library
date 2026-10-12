---
id: lem-cyclotomic-normalized-functors-give-an-integrable-quantum-action
kind: lemma
title: "Normalized cyclotomic functors give an integrable quantum action"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 9
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-graded-grothendieck-group-shift-module-and-cartan-map,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-generic-klr-induction-and-restriction-mixed-relations,
       lem-mixed-relations-and-local-nilpotence-give-an-integrable-quantum-action,
       thm-cyclotomic-klr-induction-is-projective-on-the-right,
       thm-cyclotomic-klr-sl-two-categorical-commutator]
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
      locator: "Section 6: the two normalized operator diagrams on K_0 and G_0, Lemma 6.1 and its degree-homogeneity, and the resulting integrable U_q(g)-actions."
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991) 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "Sections 1.4-2.6: local nilpotence and integrable type-one modules."
---

## Statement

For the standard graded quotient over arbitrary $k$ and graded admissible $Q$,
let $h=\langle h_i,\Lambda-\beta\rangle$. On projective $K_0$ take
$F_i=F_i^{\mathrm{basic}}$ and $E_i=q_i^{1-h}E_i^{\mathrm{basic}}$ on input
$\beta+i$ to output $\beta$. On module $G_0$ take the KK action
$E_i=E_i^{\mathrm{basic}}$ and $F_i=q_i^{1-h}F_i^{\mathrm{basic}}$ on input
$\beta$; also the canonical action with the SAME shifts as projectives. The
torus acts on root component $\beta$ by
$K_a=q^{\langle a,\Lambda-\beta\rangle}$. Each action satisfies all mixed
relations, and $E_i,F_i$ are locally nilpotent. After scalar extension to
$\mathbb Q(q)$ these are integrable type-one $U_q(\mathfrak g)$-modules. This
does not assert a decomposition into finite-dimensional full-$\mathfrak g$
submodules and does not cover ungraded monic deformations.

## Facts & Assumptions

**Given:** The standard cyclotomic quotient $R^\Lambda$ and its graded
Grothendieck groups as in
[[def-graded-grothendieck-group-shift-module-and-cartan-map]]; the basic
functors and the projectivity results of
[[thm-cyclotomic-klr-induction-is-projective-on-the-right]].

[F1] The basic categorical commutator
([[thm-cyclotomic-klr-sl-two-categorical-commutator]]):
$q_i^{-2}F_iE_i\oplus\bigoplus_{k=0}^{h-1}q_i^{2k}\mathrm{Id}\cong
E_iF_i$ for $h\ge0$, and its negative counterpart.

[F2] The generic mixed relations
([[lem-generic-klr-induction-and-restriction-mixed-relations]]): for $i\ne j$
$E_iF_j\cong q^{-(\alpha_i\mid\alpha_j)}F_jE_i$, and the equal-colour
decomposition of [F1].

[F3] Finite root strings and dot nilpotence
([[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]):
$R^\Lambda(\beta+n\alpha_i)=0$ for $n$ large, so $F_i^n$ vanishes on each
component; and the mixed-relations-to-integrable-action lemma
([[lem-mixed-relations-and-local-nilpotence-give-an-integrable-quantum-action]]).

## Proof

**Proof technique:** compute the normalized operators on the two Grothendieck
groups from the basic categorical commutator, check the mixed relations and
local nilpotence, and apply the abstract integrability lemma.

1.1 The normalized operators. Projectivity of the cyclotomic bimodules supplies exact functors preserving finite projectives, so the displayed shifts define $A$-linear operators on the graded Grothendieck groups, where $A=\mathbb Z[q,q^{-1}]$. The torus acts on the root component $\beta$ by $K_a=q^{\langle a,\Lambda-\beta\rangle}$, and each Grothendieck element has finite root support. [F3, algebra]

2.1 The mixed relation on $K_0$. In the basic commutator at target $\beta$ of [F1], multiply the composite $E_iF_i$ by $q_i^{1-h}$: the term $q_i^{-2}F_iE_i$ becomes precisely the normalized $F_iE_i$ at its changed target $\beta+\alpha_i$, and the identity terms become $\sum_{k=0}^{h-1}q_i^{1-h+2k}=[h]_i\mathrm{Id}$; the negative case gives the signed counterpart. This is exactly the relation $E_iF_i-F_iE_i=(K_i-K_i^{-1})/(q_i-q_i^{-1})$ evaluated on the root component $\beta$, with $K_i=q_i^{h}$. [step 1.1, F1]

3.1 The remaining mixed relations and the second action. For $i\ne j$ the basic crossing shift $q^{-b_{ij}}$ cancels the change of the normalizing $h_i$ under removing or adding a $j$-strand, so [F2] gives $E_iF_j=q^{-(\alpha_i\mid\alpha_j)}F_jE_i$ in the normalized action. In the KK $G_0$-action the same factors are carried by $F$ instead of $E$, and in the canonical action by $E$, so the identical computation holds on $G_0$; restriction lowers root height and is compatible with the torus labels. [step 2.1, F2]

4.1 Local nilpotence and integrability. By [F3], $R^\Lambda(\beta+n\alpha_i)=0$ for $n$ large, so the induction operator $F_i$ is locally nilpotent componentwise; restriction lowers height, so $E_i$ is locally nilpotent as well. The toral conjugation, mixed relations and local nilpotence are exactly the hypotheses of the abstract lemma [F3], which then proves both full symmetrizable Serre families and equips the scalar extension to $\mathbb Q(q)$ with the unique integrable type-one $U_q(\mathfrak g)$-module structure. No finite-dimensionality of full weight spaces and no ungraded monic deformation is asserted; no cyclic input from vacuum generation or the integral highest-module identification is used. [step 2.1, step 3.1, F3] ∎
