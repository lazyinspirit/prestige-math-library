---
id: lem-author-32887006bdff-relation-comparison
kind: lemma
title: The source Chern classes are the supplied projective-relation classes
status: draft
domain: mathematics
deps:
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - thm-author-32887006bdff-non-a1-whitney-input
  - def-motivic-chern-classes
  - lem-chern-relation-uniqueness
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  lem-author-32887006bdff-actual-orientation: mathematical-premise
  thm-author-32887006bdff-non-a1-whitney-input: mathematical-premise
  def-motivic-chern-classes: mathematical-premise
  lem-chern-relation-uniqueness: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 17
sources:
  references:
    - title: Annala–Iwasa, Motivic spectra and universality of K-theory (author PDF
        dated April 14, 2025)
      url: https://ryomei.com/papers/MotSp.pdf
      locator: Definition 4.4.1 and Lemma 4.4.3, printed pp. 30–31; sections 2.1.1 and
        2.1.5, p. 14
      reading_limits: Read the dated title page, the smooth-site and quotient
        conventions, Definition 4.4.1, and Lemma 4.4.3 with its proof through p.
        31 in the author PDF. Visually checked printed p. 30 against the local
        primary PDF. The definition starts at positive rank. The model,
        orientation and coefficient-uniqueness constructions are used through
        the current supplied interfaces; their deeper prerequisites are not
        re-audited here.
---

## Statement
Assume the Axiom of Choice and the compatible universe and site-size bounds of the supplied motivic constructions. Let $k$ be any field, $S$ a quasi-compact quasi-separated $k$-scheme, $Y$ a smooth qcqs $S$-scheme, and $V$ a finite locally free sheaf of constant rank $r\geq0$ on $Y$. Write $H^{a,b}(Y)=H^{a,b}_{\mathrm{mot}}(Y,\mathbb Z)$. For $r>0$, the Chern coefficients of Annala–Iwasa Definition 4.4.1 agree with the supplied coefficients $c_i(V)$ under the natural identifications $\mathcal E_S^{2i,i}(Y)\cong H^{2i,i}(Y)$, for $0\leq i\leq r$.

Extend the source-side polynomial locally by $\widetilde c_i(V)=0$ for $i>r$ and by $\widetilde c_t(0)=1$ for the rank-zero bundle. With these explicitly declared extensions, $\widetilde c_i(V)=c_i(V)$ for every $i\geq0$ and every constant rank. The rank-zero extension is a local convention, not a prescription in Definition 4.4.1. For a line, the first coefficient is the original additive EM orientation and all higher coefficients are zero. No smoothness of $S$ over $k$ is required.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]], and the compatible universe and site-size bounds of the supplied constructions. This discharges the foundational hypotheses of [F1] and [F2] when applying their model, orientation and coefficient-uniqueness conclusions in steps 1.1–2.1.

[F1] For positive rank, [[thm-author-32887006bdff-non-a1-whitney-input]] supplies the source quotient-projective relation, with $\widetilde c_0=1$. For the stated qcqs $k$-base $S$ and smooth qcqs $Y/S$, [[lem-author-32887006bdff-em-p1-model]] and [[lem-author-32887006bdff-actual-orientation]] identify its groups, products, quotient tautological class and actual additive first class with those of the supplied EM theory.

[F2] [[def-motivic-chern-classes]] and [[lem-chern-relation-uniqueness]] give the unique positive-rank coefficients of the supplied quotient-projective relation, and separately prescribe the rank-zero series $1$ and zero coefficients above rank. The supplied definition applies to every qcqs $k$-scheme, including $Y$.

## Proof
**Given:** $k,S,Y,V$ as stated, with constant rank $r$, the assumptions [A1], and the explicitly extended source-side coefficients.

**Goal:** Identify the actual coefficients, their signs and their zero-rank extension.

1.1 The smooth qcqs $S$-scheme $Y$ is a qcqs $k$-scheme, so both supplied constructions apply. For $r>0$ the source relation is $\sum_{j=0}^r(-1)^j\xi^j\pi^*\widetilde c_{r-j}(V)=0$, where $\pi:\mathbb P_Y(V)\to Y$ classifies rank-one quotients and $\xi$ is the first class of its tautological quotient line. Multiplying by $(-1)^r$ and setting $i=r-j$ gives $\xi^r+\sum_{i=1}^r(-1)^i\pi^*\widetilde c_i(V)\xi^{r-i}=0$. The actual orientation and quotient line agree by [F1], including after evaluation on this projective bundle, which is again smooth qcqs over $S$. Coefficient uniqueness in [F2] gives $\widetilde c_i(V)=c_i(V)$ for $1\leq i\leq r$, and the zeroth coefficients are both the unit. [A1, F1, F2, given]

2.1 For $r=1$, the quotient projective bundle is $Y$ and its tautological quotient is $V$; the relation is $\xi-c_1(V)=0$. Thus the first coefficient is the original EM line class, additive under tensor product by [F1]. For every positive rank, the explicitly extended source polynomial and the supplied convention both have zero coefficients above rank. For rank zero, both series are $1$ by the declared local extension and [F2], without applying a relation on an empty projective bundle. This proves agreement in every nonnegative degree and rank, together with the line normalization. [A1, F1, F2, step 1.1] ∎
