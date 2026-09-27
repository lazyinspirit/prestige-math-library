---
id: lem-null-meagre-ideal-transfer-cantor-real
kind: lemma
title: Transfer of null and meagre invariants between Cantor space and the line
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-cantor-coin-measure-from-binary-expansion, thm-continuity-from-above-for-measures, lem-cantor-and-baire-sequence-coding, thm-lebesgue-measure-of-a-box-of-every-kind, def-null-and-meagre-cardinal-invariants, def-null-meagre-borel-master-codes, def-nowhere-dense-meagre-and-residual-subsets, prop-countable-subsets-of-rn-are-lebesgue-null, prop-null-sets-form-a-sigma-ideal-in-a-complete-space, prop-meagre-subsets-form-a-sigma-ideal, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tomek Bartoszyński, Invariants of Measure and Category, Cantor-space convention in Definition 3.1, printed pp.4–5"
      url: "https://arxiv.org/pdf/math/9910015"
verification:
  precheck: pending
---

## Statement

In ZFC, let $\mathcal N_{\mathcal C}$ and $\mathcal M_{\mathcal C}$ be the Cantor-space
ideals defined in [[def-null-meagre-borel-master-codes]], and put
$\mathcal N_{\mathbb R}:=\mathcal N$ and $\mathcal M_{\mathbb R}:=\mathcal M$
for the real-line ideals of [[def-null-and-meagre-cardinal-invariants]]. For
each space $X\in\{\mathcal C,\mathbb R\}$ and its corresponding ideal
$\mathcal I_X\in\{\mathcal N_X,\mathcal M_X\}$, use the four cardinal
definitions of [[def-null-and-meagre-cardinal-invariants]] with $X$ and
$\mathcal I_X$. Then the four values for each Cantor-space ideal equal the
corresponding values for its real-line ideal. Here $\mathcal C=2^\omega$ carries
the fair-coin Borel probability measure and $\mathbb R$ carries Lebesgue
measure.

## Facts & Assumptions

**Given:** The two spaces and their indicated measures and ideals.

[F1] Fair-coin measure gives each length-$m$ binary cylinder mass $2^{-m}$; Lebesgue measure gives each half-open interval its length. ([[lem-cantor-coin-measure-from-binary-expansion]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

[F2] The four invariants are defined by the minima over ideal families, covers, nonideal sets, and inclusion-cofinal bases. Apply those general formulas to the two explicitly named space-ideal pairs in the statement; the real-line application is the one evaluated on the definition page. ([[def-null-and-meagre-cardinal-invariants]], [[def-null-meagre-borel-master-codes]])

[F3] Countable sets belong to both corresponding ideals in either space. In $\mathcal C$, a singleton is the intersection of its nested length-$m$ cylinders, whose measures tend to zero; it is nowhere dense because Cantor space has no isolated points. A countable union of members of $\mathcal N_{\mathcal C}$ is contained in the union of selected Borel null hulls, which is Borel and null; $\mathcal M_{\mathcal C}$ is a sigma-ideal under Countable Choice, and both are closed under subsets. On $\mathbb R$, countable null sets and the two sigma-ideal properties are supplied by the cited facts. ([[lem-cantor-coin-measure-from-binary-expansion]], [[thm-continuity-from-above-for-measures]], [[lem-cantor-and-baire-sequence-coding]], [[def-null-meagre-borel-master-codes]], [[def-axiom-of-choice]], [[def-nowhere-dense-meagre-and-residual-subsets]], [[prop-countable-subsets-of-rn-are-lebesgue-null]], [[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]], [[prop-meagre-subsets-form-a-sigma-ideal]])

[F4] The Axiom of Choice makes arbitrary witness families well-orderable and lets their cardinalities be compared. The countable component and exceptional-set matchings below are explicit and choice-free. ([[def-axiom-of-choice]])

## Proof

**Proof technique:** a single global bijection preserving both ideals.

1.1 Let $E\subseteq2^\omega$ be the countable set of eventually constant binary sequences, and let $D\subseteq\mathbb R$ be the dyadic rationals. The binary-value map $b:2^\omega\setminus E\to(0,1)\setminus D$ is a bijection. It is a homeomorphism: a finite prefix fixes a dyadic interval; at a nondyadic point that interval can be made arbitrarily small, and every sufficiently small neighborhood avoiding adjacent dyadic endpoints fixes a finite prefix. The inverse binary digit map sends a length-$m$ cylinder to the corresponding half-open dyadic interval of length $2^{-m}$ after the countable dyadic exceptions are removed. Thus [F1] and the $\pi$-$\lambda$ argument show that binary value pushes fair-coin measure to Lebesgue measure on $(0,1)$; the discarded countable sets have measure zero. Therefore $b$ and its inverse preserve null sets: arbitrary null subsets are contained in Borel null hulls; restricting to the two conull cores preserves the completed null ideals. A homeomorphism preserves meagreness on the cores. [F1, F3]
2.1 The complement $\mathbb R\setminus D$ splits into the disjoint relative clopen components $I_z=(z,z+1)\setminus D$ for $z\in\mathbb Z$. The Cantor core $2^\omega\setminus E$ splits into the disjoint relative clopen components $J_k=[0^k1]\setminus E$ for $k\in\omega$. Choose a fixed bijection $z\leftrightarrow k$. On $I_z$ first translate by $-z$, then apply $b^{-1}$, then prefix the resulting binary sequence by $0^k1$. This gives a homeomorphism $h$ between the two cores. On this component, prefixing scales fair-coin measure by the positive constant $2^{-(k+1)}$: this holds first for cylinders by [F1], then for Borel sets by the $\pi$-$\lambda$ argument and for arbitrary null subsets by Borel hulls. Translation preserves Lebesgue null sets. Thus $h$ preserves null sets in both directions, as well as relative meagre sets on the two cores. Countable unions across the components preserve both ideal properties. [step 1.1, F3, F4]
3.1 Both omitted sets $D$ and $E$ are countably infinite, so both cores are dense in their ambient spaces. For any dense subspace $Y\subseteq X$ and $A\subseteq Y$, $A$ is nowhere dense in $Y$ exactly when it is nowhere dense in $X$: if $\overline A^X$ contained a nonempty open $U$, then $U\cap Y$ would be a nonempty relative open subset of $\overline A^Y$; conversely, if $\overline A^Y$ contained a nonempty relative open $U\cap Y$, density of $Y$ would force $U\subseteq\overline A^X$. Taking countable unions gives the same equivalence for meagreness. Extend $h$ by a fixed bijection $D\to E$ to a bijection $H:\mathbb R\to2^\omega$. For any $A\subseteq\mathbb R$, the difference between $H[A]$ and $h[A\setminus D]$ is a subset of $E$. Conversely, the difference between $H^{-1}[B]$ and $h^{-1}[B\setminus E]$ is a subset of $D$. By [F3], both null and meagre ideal membership are therefore preserved in both directions by $H$. [step 2.1, F3, F4]
4.1 The bijection $H$ preserves ideal membership, unions, and set containment. Since [F2] gives the real-line minima, $H$ induces bijections between the candidate-witness collections in the four definitions and their Cantor-space counterparts, so the Cantor minima also exist and have the same values. Applying $H^{-1}$ gives the reverse cardinal inequalities and hence equality for all eight invariants. AC is used to compare cardinalities of arbitrary witness families in [F2]; the component and exceptional-set matchings themselves are explicit. ∎ [step 3.1, F2, F4]
