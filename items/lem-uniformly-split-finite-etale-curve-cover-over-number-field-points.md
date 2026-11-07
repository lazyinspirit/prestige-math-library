---
id: lem-uniformly-split-finite-etale-curve-cover-over-number-field-points
kind: lemma
title: "A fixed extension splits all fibres of a finite etale curve cover at rational points"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - def-proper-morphism
  - def-separated-morphism-schemes
  - def-smooth-morphism-schemes
  - lem-dedekind-localisation-at-nonzero-prime-is-dvr
  - cor-morphisms-equal-on-dense-open-reduced-source
  - lem-morphism-schemes-local-on-source-target
  - def-axiom-of-choice
  - def-countable-choice
  - thm-valuative-criterion-properness
  - lem-finite-number-field-extensions-bounded-degree-unramified-outside-s
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-splitting-fields-exist-for-nonzero-polynomials
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
justified_by: []
proof_strategy: direct
axiom_use: "AC supports the local chart and denominator choices used to extend each rational point; Countable Choice is inherited from the bounded-extension lemma; the common splitting compositum is finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter V §2.3, Theorem 2.6, printed pp. 160–161"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Bounded-degree extensions unramified outside a fixed finite set."
verification: {}
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $K$ be a number field, let $S$ be a finite set of finite primes, put $U=\operatorname{Spec}\mathcal O_{K,S}$, and let $\mathcal C\to U$ be a proper separated smooth curve with geometrically connected fibres. Write $C=\mathcal C_K$ for the generic fibre, and let $\mathcal X\to\mathcal C$ be finite etale of constant degree $d$ with $1\le d\le D$, where $D\ge1$. For $P\in C(K)$, define $\mathcal X_P=\mathcal X_K\times_{C,P}\operatorname{Spec}K$; say it splits over $L$ if $\mathcal X_P\times_K L$ is a disjoint union of copies of $\operatorname{Spec}L$. There is a finite extension $L/K$, independent of $P$, over which every $\mathcal X_P$ splits.

## Statement references

[[def-number-field]]

[[def-s-integers-and-s-units-of-a-number-field]]

[[def-etale-morphism-schemes]]

[[def-finite-morphism-schemes]]

[[lem-finite-number-field-extensions-bounded-degree-unramified-outside-s]]

## Facts & Assumptions

**Given:** AC and Countable Choice; $K,S,U,\mathcal C,\mathcal X,D$ as in the Statement.

[A1] AC and Countable Choice are the stated principles. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] The ring $R=\mathcal O_{K,S}$ is Dedekind. For a finite prime $v\notin S$, let $\mathfrak p_v$ be its corresponding nonzero prime of $R$; then $R_v=R_{\mathfrak p_v}$ is a DVR with fraction field $K$. Properness extends a $K$-point of the generic fibre over $R_v$, and separatedness makes the lift unique. [[def-s-integers-and-s-units-of-a-number-field]] [[lem-dedekind-localisation-at-nonzero-prime-is-dvr]] [[thm-valuative-criterion-properness]] [[def-proper-morphism]] [[def-separated-morphism-schemes]]

[F2] A smooth morphism is locally of finite presentation. On an affine chart $\operatorname{Spec}B$ over an affine base $\operatorname{Spec}A$, this gives a finite presentation $B=A[x_1,\ldots,x_r]/(f_1,\ldots,f_m)$ after shrinking the base. [[def-smooth-morphism-schemes]]

[F3] If two morphisms from a reduced integral scheme to a separated scheme over a base agree on a dense open, they agree everywhere. Compatible morphisms on an open cover glue uniquely. [[cor-morphisms-equal-on-dense-open-reduced-source]] [[def-separated-morphism-schemes]] [[lem-morphism-schemes-local-on-source-target]]

[F4] A finite étale morphism is finite locally free; over a connected base its generic fibre is a finite étale scheme, hence a finite product of finite separable field extensions. Its local factors at finite primes of $U$ are unramified, and the degrees of its generic field factors are at most its rank. [[def-etale-morphism-schemes]] [[def-finite-morphism-schemes]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[L1] Under AC and Countable Choice, [[lem-finite-number-field-extensions-bounded-degree-unramified-outside-s]] gives finitely many $K$-isomorphism classes of extensions unramified outside $S$ with any fixed positive integer degree bound. Apply it here with the positive integer $d$, the constant cover degree: every generic field factor has degree at most $d\le D$. Thus the original parameter $D$ need not itself be an integer. The bounded-extension supplier and its local-discriminant inputs are now supplied at this exact choice scope.

[F5] Every finite separable extension $E/K$ has a finite splitting field containing all its $K$-embeddings, and for such a field $L$, $E\otimes_KL\cong\prod_{\sigma:E\hookrightarrow L}L$. [[thm-primitive-element-theorem-for-finite-separable-extensions]] [[thm-splitting-fields-exist-for-nonzero-polynomials]]
## Proof

1.1 If $C(K)=\varnothing$, take $L=K$. Otherwise let $P\in C(K)$ be arbitrary. For each finite prime $v\notin S$, [F1] extends $P$ uniquely to $\operatorname{Spec}R_v\to\mathcal C$, where $R_v=\mathcal O_{K,v}$. [A1, F1, given, choose]

2.1 To spread each local section, choose an affine base neighbourhood $W=\operatorname{Spec}A$ of $v$, write $\mathfrak m_v\subset A$ for its corresponding prime, and choose an affine chart $V=\operatorname{Spec}B$ in $\mathcal C_W$ containing the image of the closed point. By [F2], shrink $W$ if needed and write $B=A[x_1,\ldots,x_r]/(f_1,\ldots,f_m)$. The section gives a map $B\to A_{\mathfrak m_v}$; its finitely many generator images have denominators outside $\mathfrak m_v$, so after inverting their product $s\notin\mathfrak m_v$ they lie in $A_s$. Since $A_s\hookrightarrow A_{\mathfrak m_v}$, the finitely many defining relations still vanish there, giving a section on the neighbourhood $D(s)$ of $v$ with generic restriction $P$. These neighbourhoods, as $v$ varies, cover $U$. Any two local sections agree on the dense generic point, so [F3] makes them agree on their overlap; they glue to a section $\widetilde P:U\to\mathcal C$. [A1, F2, F3, step 1.1, choose, construct]

3.1 Pull back $\mathcal X\to\mathcal C$ along $\widetilde P$. This is a finite étale $U$-scheme of degree $d\le D$. Each field factor of its generic fibre has degree at most $D$ and is unramified at every finite prime outside $S$ by [F4]. Since $P$ was arbitrary, [L1] places all field factors arising from all $P$ in one finite set of $K$-isomorphism classes. [F4, L1, step 2.1, given, construct]

4.1 Choose one representative for each class in that finite set. By [F5], choose a finite splitting field for each representative and let $L$ be their compositum. There are finitely many representatives, so $L/K$ is finite. [A1, F5, step 3.1, choose, construct]

5.1 For every $P\in C(K)$, each field factor of $\mathcal X_P$ is isomorphic to a representative chosen in step 4.1 by step 3.1. Its embeddings therefore have image in $L$, so its base change to $L$ is a product of copies of $L$. Taking the product over the field factors proves that $\mathcal X_P\times_KL$ is a disjoint union of copies of $\operatorname{Spec}L$, uniformly in $P$. [step 3.1, step 4.1, algebra] ∎
## Proof status

The complete five-step argument uses the now-supplied bounded-extension lemma [L1] at the integer cover degree $d$, under the literal AC and Countable Choice hypotheses. Its former local-discriminant supplier hold is closed. This lemma splits the fibres of the given finite etale cover over one fixed finite extension; it does not construct a Parshin cover or prove the Shafarevich or Mordell finiteness theorems. Focused independent review of this current supplier use is recorded separately; no native readiness or broader theorem acceptance is asserted here.
