---
id: def-categorical-local-langlands-framework
kind: definition
title: "Fargues–Scholze categorical local Langlands framework"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-schematic-and-analytic-local-langlands-categories
  - def-weil-group-of-a-local-field
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Laurent Fargues and Peter Scholze, Geometrization of the Local Langlands Correspondence, Chapter VIII §1 and Chapter X §1"
      url: "https://arxiv.org/pdf/2102.13459v4"
    - title: "David Hansen and Lucas Mann, The Categorical Local Langlands Conjecture, §§1.1 and 1.4"
      url: "https://arxiv.org/pdf/2606.00983v2"
    - title: "David Hansen, Beijing Notes on the Categorical Local Langlands Conjecture, §§1.3–1.4"
      url: "https://arxiv.org/pdf/2310.04533"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Let $E$ be a finite extension of $\mathbb Q_p$,
let $\ell\ne p$, set $\Lambda=\overline{\mathbb Q}_\ell$, and fix an abstract field isomorphism
$\Lambda\cong\mathbb C$ for comparison with complex-valued
local parameters. Let
$G/E$ be a smooth connected affine group with trivial connected unipotent
radical and an $E$-defined Borel subgroup. Write $W_E$ for the Weil
group of $E$ with inertia subgroup $I_E$ and arithmetic Frobenius coset
generating $W_E/I_E\cong\mathbb Z$. This convention does not choose a lift of
Frobenius in $W_E$. Let $\widehat G$ be the Langlands dual group over
$\Lambda$ with the $W_E$-action induced by the Galois action on its
based root datum, and put
$\,{}^LG=\widehat G\rtimes W_E$. The **parameter stack**
$\operatorname{Par}_G$ is the quotient stack of continuous $1$-cocycles
$W_E\to\widehat G(\Lambda)$ for the $\ell$-adic coefficient topology by $\widehat G$-conjugacy; equivalently, it parametrizes
continuous homomorphisms $W_E\to{}^LG$ whose projection to $W_E$ is the
identity.

The **automorphic stack** $\operatorname{Bun}_G$ is the analytic stack whose
test points are $G$-bundles on relative Fargues–Fontaine curves, and
$D(\operatorname{Bun}_G):=D_{\mathrm{lis}}(\operatorname{Bun}_G,\Lambda)$
is its category of lisse-étale $\ell$-adic sheaves. The dual group and the parameter stack are over $\Lambda$. The spectral category
$\operatorname{IndCoh}(\operatorname{Par}_G)$ is the ind-completion of the
category of bounded coherent complexes with quasi-compact support on the
derived parameter stack. A Whittaker
datum $(B,\psi)$ consists of an $E$-defined Borel subgroup $B$ with unipotent
radical $U$ and a generic character $\psi:U(E)\to\Lambda^\times$.
Its Whittaker representation, formed over $\Lambda$, is
$W_\psi=\operatorname{c-Ind}_{U(E)}^{G(E)}\psi$, and the corresponding
Whittaker sheaf is $i_{1!}W_\psi$, where $i_1$ includes the basic stratum of
$\operatorname{Bun}_G$ for the trivial isocrystal class. The spectral action
of $\operatorname{QCoh}(\operatorname{Par}_G)$ on $D(\operatorname{Bun}_G)$
defines $a_\psi(F)=F\star i_{1!}W_\psi$; write $c_\psi$ for its right
adjoint. When $c_\psi$ sends compact objects to bounded coherent complexes
with quasi-compact support,
$L_\psi:D(\operatorname{Bun}_G)\to\operatorname{IndCoh}(\operatorname{Par}_G)$
denotes the ind-extension of its restriction to compact objects. The
categorical local Langlands conjecture asks whether this Whittaker-normalized
functor is an equivalence with the expected spectral-action compatibilities.

## Definition references

[[def-schematic-and-analytic-local-langlands-categories]]

[[def-weil-group-of-a-local-field]]

[[def-axiom-of-choice]]

[Laurent Fargues and Peter Scholze, *Geometrization of the Local Langlands Correspondence*, Chapter VIII §1 and Chapter X §1](https://arxiv.org/pdf/2102.13459v4)

[David Hansen and Lucas Mann, *The Categorical Local Langlands Conjecture*, §§1.1 and 1.4](https://arxiv.org/pdf/2606.00983v2)

[David Hansen, *Beijing Notes on the Categorical Local Langlands Conjecture*, §§1.3–1.4](https://arxiv.org/pdf/2310.04533)


## Coefficient convention and limits

All automorphic sheaf categories, the dual group and parameter stack, coherent categories and Whittaker objects in this setup use $\Lambda$-coefficients. They may also be regarded as $\mathbb Q_\ell$-linear by restricting their scalar enrichment along $\mathbb Q_\ell\hookrightarrow\Lambda$. This does not identify $D_{\mathrm{lis}}(\operatorname{Bun}_G,\Lambda)$ with $D_{\mathrm{lis}}(\operatorname{Bun}_G,\mathbb Q_\ell)$ or descend the Whittaker object to the latter category. The chosen $\Lambda\cong\mathbb C$ compares coefficient fields; it alone proves no comparison of the raw $\ell$-adic parameter moduli functor with the smooth Weil–Deligne pair moduli problem.

This coupled coefficient convention is visible in Hansen–Mann §1.4, printed pp.10–12: both the sheaf categories and the generic character use $\overline{\mathbb Q}_\ell$. The local typing correction supplies neither representability of the parameter stack, construction of the spectral action or adjoints, nor a categorical equivalence. Those deeper definedness and theorem obligations remain held.

The earlier schematic/analytic category definition has torsion coefficients. It supplies geometric conventions here; passage to the rational $\Lambda$-coefficient category is a separate held construction, not an identification with those torsion categories.
