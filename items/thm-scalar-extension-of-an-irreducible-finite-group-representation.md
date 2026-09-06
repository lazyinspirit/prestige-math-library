---
id: thm-scalar-extension-of-an-irreducible-finite-group-representation
kind: theorem
title: "Scalar extension of an irreducible finite-group representation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-splitting-field-for-a-finite-group, def-galois-conjugate-representation, lem-base-change-of-intertwiner-spaces, lem-galois-conjugates-have-equal-scalar-extension-multiplicity, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Proposition 2.2.11 and Corollary 2.2.12"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Proposition 4.3.2"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Statement

Let $F$ be characteristic $0$, $G$ finite, $E/F$ finite Galois and a splitting
field for $G$, and $V$ an irreducible $F$-representation.  Then there are an
absolutely irreducible constituent $U$ of $E\otimes_FV$ and an integer $m\ge1$
such that
$$E\otimes_FV\cong m\bigoplus_{\sigma\in\operatorname{Gal}(E/F)/\operatorname{Stab}(U)}{}^{\sigma}U.$$
The displayed summands are pairwise inequivalent.

## Facts & Assumptions

**Given:** $F$, $G$, $E$, $V$ as in the statement.

[L1] $E$ being a splitting field means every irreducible $E$-representation has only scalar $G$-endomorphisms ([[def-splitting-field-for-a-finite-group]]).

[L2] Intertwiner spaces commute with extension of scalars ([[lem-base-change-of-intertwiner-spaces]]).

[L3] The conjugates of any constituent of $E\otimes_FV$ have equal multiplicities ([[lem-galois-conjugates-have-equal-scalar-extension-multiplicity]]).

[L4] Every finite-dimensional $E$-representation of $G$ is completely reducible ([[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], decompose $E\otimes_FV$ into irreducibles and choose a constituent $U$.  The Galois action permutes its isomorphism classes. [L4, choose]

2.1 Let $X$ be the sum of the isotypic components in the Galois orbit of $U$.  The canonical semilinear $\Gamma=\operatorname{Gal}(E/F)$-action on $E\otimes_FV$ preserves $X$.  To make descent explicit, choose trace-dual $F$-bases $(x_i)$ and $(y_i)$ of $E$.  For $w\in X$, every $T(y_iw)=\sum_{\sigma\in\Gamma}\sigma(y_iw)$ lies in $X^\Gamma$, and the separability identity $\sum_i x_i\sigma(y_i)=\delta_{\sigma,1}$ gives $w=\sum_i x_iT(y_iw)$.  Hence $X=E\otimes_FX^\Gamma$.  Under $(E\otimes_FV)^\Gamma=V$, the $G$-stable space $X^\Gamma$ is an $F$-subrepresentation of $V$; irreducibility therefore forces $X=E\otimes_FV$. [given, step 1.1, algebra]

3.1 By [L3], every member of this orbit has one common multiplicity $m$.  The orbit is indexed without repetition by $\operatorname{Gal}(E/F)/\operatorname{Stab}(U)$, which gives the formula. [L3, step 2.1]

4.1 Let $\overline E$ be an algebraic closure of $E$.  For any irreducible constituent $U$, [L1] and [L2] give $$\operatorname{End}_G(\overline E\otimes_EU) \cong\overline E\otimes_E\operatorname{End}_G(U)=\overline E.$$ The scalar extension is semisimple by [L4]; if it were reducible, projection onto a proper summand would be a nonscalar endomorphism.  Hence $U$ is absolutely irreducible.  Distinct orbit points are inequivalent by the definition of the stabilizer. [L1, L2, L4, step 3.1] ∎
