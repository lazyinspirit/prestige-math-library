---
id: thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda
kind: theorem
title: "Simple and indecomposable-projective crystals agree with $B(\\Lambda)$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-axiom-of-choice,
       def-crystal-graph-epsilon-phi-and-weight,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-cyclotomic-klr-induction-and-restriction-functors,
       lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       lem-klr-one-step-simple-restriction-induction-and-first-dot-index,
       lem-klr-two-color-jump-formula-and-strict-elementary-embeddings,
       thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module,
       thm-the-highest-weight-crystal-b-lambda-exists]
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
      locator: "Introduction (1.2) and Section 6: the identification of the crystal of the cyclotomic simples with B(Lambda) and the projective-cover graph."
    - title: "Aaron D. Lauda and Monica Vazirani, Crystals from categorified quantum groups, Advances in Math. 228 (2011) 803-861, arXiv:0909.1810v2"
      url: "https://arxiv.org/pdf/0909.1810v2"
      locator: "Sections 2.5-2.6 and Section 6, Theorems 6.10-6.11: the crystal operators on simples and the highest-weight quotient."
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]].

For the standard homogeneous cyclotomic quotient over any field with the
general real symmetrizable datum and graded KLR parameters, let
$\mathcal B_\Lambda$ be the normalized $D_\psi$-self-dual simple classes. Set
$\operatorname{wt}(S)=\Lambda-\beta$,
$\varepsilon_i(S)=\max\{r:(E_i^{\mathrm{basic}})^rS\ne0\}$ and
$\varphi_i(S)=\varepsilon_i(S)+\langle h_i,\operatorname{wt}(S)\rangle$. For
$\varepsilon_i>0$, define $\widetilde e_iS$ by the unique simple isomorphism
type in the socle of one-step right restriction, with its unique self-dual
normalization, and set $\widetilde e_iS=0$ when $\varepsilon_i(S)=0$;
define $\widetilde f_iS$ by the unique self-dual normalization of the simple
head of right induction when nonzero, otherwise zero. The one-step socle/head is one shifted copy, not
a quantum-factorial multiplicity. These data form a crystal canonically
isomorphic to $B(\Lambda)$, with vacuum sent to $u_\Lambda$. The normalized
indecomposable projectives carry the same crystal by their normalized simple
heads and covers. The projective graph here is explicitly transported from
these labels, rather than obtained by applying linear Kashiwara operators to an
unspecified projective basis. The highest-weight quotient has simple survivors
exactly when $\varepsilon_i^{\mathrm{LEFT}}(S)\le\lambda_i$ for every $i$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the standard cyclotomic quotient over any field with general real
symmetrizable datum and graded KLR parameters, and the normalized simple and
projective labels of
[[lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient]]
and [[def-cyclotomic-klr-diagram-duality-and-graded-module-duals]].

[F1] The one-step theorem
[[lem-klr-one-step-simple-restriction-induction-and-first-dot-index]]: for a
cyclotomic (or generic) simple $S$, one-step restriction has a single simple
socle and head once, with $\varepsilon_i$ decreasing by one, induction has the
unique simple head $f_iS$ occurring once, and the first-dot index identifies
the first-strand ideal criterion with
$\varepsilon_i^{\mathrm{LEFT}}\le\lambda_i$; this works over the original
field including positive characteristic.

[F2] The two-colour jump formula and strict elementary embeddings
[[lem-klr-two-color-jump-formula-and-strict-elementary-embeddings]]: the full
general-$Q$ jump formula, strictness and everywhere-positive extraction, from
actual shuffle filtrations and divided restriction multiplicities; the linear
Serre relation is applied in $G_0$, not to a non-linear simple operator.

[F3] The canonical elementary extraction and survivors
[[lem-canonical-elementary-crystal-extraction-and-highest-weight-survivors]],
the crystal $B(\Lambda)$ of [[thm-the-highest-weight-crystal-b-lambda-exists]],
and the epsilon/phi conventions of [[def-crystal-graph-epsilon-phi-and-weight]];
the two Grothendieck identifications
[[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]]
and [[thm-cyclotomic-klr-module-g-zero-is-the-dual-integral-highest-weight-module]].

## Proof

**Proof technique:** inflate to the generic algebra, apply the one-step and
two-colour inputs to the simple graph, identify it with the canonical crystal
and its highest-weight quotient, and transport the labels to projective covers.

1.1 The simple graph. Inflate a cyclotomic simple to the generic algebra; by [F1] the one-step restriction has a single simple socle and head once and induction has the unique simple head, giving well-defined operators $\widetilde e_i,\widetilde f_i$ on shift orbits with $\varepsilon_i$ decreasing by one under $\widetilde e_i$ and increasing by one under $\widetilde f_i$. By [F2] the graph is lowering-generated with strict elementary extractions and positive extraction at every nonvacuum vertex, over every field including positive characteristic. The normalized-label supplier in the Given identifies each simple shift orbit with its unique $D_\psi$-self-dual representative. Taking that representative for each nonzero socle and induction head lifts both operators to $\mathcal B_\Lambda$ and preserves their partial-inverse identities. [given, F1, F2]

2.1 Identification with $B(\Lambda)$. Apply the canonical elementary extraction of [F3]: the generic simple graph is canonically $B(\infty)$ and the first-strand cyclotomic survivors are exactly the vertices with $c_i(b)\le\lambda_i$ for all $i$, which is the crystal $B(\Lambda)$ with vacuum $u_\Lambda$; the survivor criterion is $\varepsilon_i^{\mathrm{LEFT}}(S)\le\lambda_i$ for every $i$ by the first-dot index of [F1]. The one-step socle/head is one shifted copy, so no quantum-factorial multiplicity enters. [step 1.1, F3]

3.1 Projective labels. The normalized indecomposable projectives carry the same crystal by their normalized simple heads and covers: the quotient-cover lemma pairs each projective cover with its simple head without scaling and preserves the label under the quotient, while the two Grothendieck identifications of [F3] record the same labels on $K_0$ and $G_0$. The projective graph is therefore explicitly transported from the simple labels, not obtained by applying linear Kashiwara operators to an unspecified projective basis. The assumed Axiom of Choice supplies the inherited hypotheses of the canonical-extraction and Grothendieck-identification suppliers of [F3], including the integral projective theorem and its restricted-dual consequence; transporting normalized cover labels introduces no further choice. [step 2.1, F3] ∎
