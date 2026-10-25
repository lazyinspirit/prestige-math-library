---
id: def-coded-first-order-zf-theory
kind: definition
title: "The set of first-order ZF axiom sentences"
status: published
origin: pipeline
deps: [def-language-of-set-theory, def-axiom-of-extensionality, def-axiom-schema-of-separation, def-axiom-of-pairing, def-axiom-of-union, def-axiom-of-power-set, def-axiom-schema-of-replacement, def-axiom-of-infinity, def-axiom-of-foundation, def-set-coded-terms-and-formulas, lem-countable-henkin-syntax-coding, def-free-variables-and-syntactic-substitution]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Exact published axiom Definition sections listed here; comparison: Moschovakis, Lecture Notes in Logic (2014), Definition 1G.12, printed pp.33–34, and Definition 1A.5, pp.3–4. Published local Power Set and Infinity forms retained."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
justified_by: []
forward_refs: []
---

## Definition

Work in the external metatheory ZF. Use the pure membership signature with logical equality and the finite-word constructors of [[def-set-coded-terms-and-formulas]]. For any displayed ordinary formula below, its **code** is obtained by expanding abbreviations and serializing those constructors. In particular $\phi\leftrightarrow\psi$ means $(\phi\to\psi)\land(\psi\to\phi)$, implication, disjunction and universal quantification have the earlier primitive expansions, and

$$\exists!w\,\phi(w)\quad\text{means}\quad\exists w\bigl(\phi(w)\land\forall v(\phi[v/w]\to v=w)\bigr),$$

with $v$ the least-index variable absent from $\phi$ and distinct from $w$. Bounded quantifiers mean $\forall x\in A\,\phi:=\forall x(x\in A\to\phi)$ and $\exists x\in A\,\phi:=\exists x(x\in A\land\phi)$. All bound-variable renamings and substitutions are capture-free. These are finite syntactic operations, not new logical primitives.

Let $T_{\mathrm{ZF}}$ contain the codes of exactly the following six sentences, together with all instances of the two schemas below. The six sentences are those in [[def-axiom-of-extensionality]], [[def-axiom-of-pairing]], [[def-axiom-of-union]], [[def-axiom-of-power-set]], [[def-axiom-of-infinity]] and [[def-axiom-of-foundation]]:

$$\forall x\forall y\bigl(\forall z(z\in x\leftrightarrow z\in y)\to x=y\bigr);$$

$$\forall x\forall y\exists z\forall t\bigl(t\in z\leftrightarrow(t=x\lor t=y)\bigr);$$

$$\forall x\exists y\forall z\bigl(z\in y\leftrightarrow\exists s(s\in x\land z\in s)\bigr);$$

$$\forall x\exists y\forall z\bigl(\forall t(t\in z\to t\in x)\to z\in y\bigr);$$

$$\exists I\bigl(\exists e(e\in I\land\neg\exists t(t\in e))\land\forall y(y\in I\to\exists s(s\in I\land\forall t(t\in s\leftrightarrow(t\in y\lor t=y))))\bigr);$$

$$\forall S\bigl(\exists t(t\in S)\to\exists s(s\in S\land\neg\exists u(u\in s\land u\in S))\bigr).$$

Power Set deliberately has the implication-only form of the published supplier. Infinity deliberately uses von Neumann successor, exactly as in the supplier, rather than the singleton-closure presentation in Moschovakis 1A.5.

For every membership-language formula $\phi(z,\bar p)$, choose distinct fresh variables $x,y$ absent from it and include the universal closure of

$$\exists y\forall z\bigl(z\in y\leftrightarrow(z\in x\land\phi(z,\bar p))\bigr).$$

This is the Separation schema of [[def-axiom-schema-of-separation]], with the input $x$ and all parameters universally quantified. For every $\phi(z,w,\bar p)$ choose distinct fresh $A,B$ absent from it and include the universal closure of

$$\forall z(z\in A\to\exists!w\phi(z,w,\bar p))\to\exists B\forall w\bigl(w\in B\leftrightarrow\exists z(z\in A\land\phi(z,w,\bar p))\bigr).$$

This is the functional-image form of [[def-axiom-schema-of-replacement]]. Parameters are precisely the other free variables, listed in increasing variable-index order; they may be an empty list. Distinct variables $z,w$ are used for the two designated places. Choose fresh variables by their least available indices, renaming bound occurrences first if necessary. Universal closure binds every remaining free variable in increasing index order. This convention changes only variable names and closure order, and leaves no free parameter in an axiom sentence.

The alphabet is explicitly countable, and [[lem-countable-henkin-syntax-coding]] supplies an injection of its sentence set into $\omega$. Schema membership and these finite transformations are set-definable, so Separation on the set of sentence codes (equivalently Replacement over the set of admissible formulas and designated variable lists) forms $T_{\mathrm{ZF}}$ as a set. It is a sentence theory, not a class-sized collection. AC is excluded. No consistency, set-model existence, transitivity or external well-foundedness of models is asserted.

Conventions and prerequisites: [[def-language-of-set-theory]], [[def-free-variables-and-syntactic-substitution]].
