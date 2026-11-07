---
id: lem-f-finite-regular-scheme-has-finite-flat-frobenius
kind: lemma
title: "Finite flat Frobenius on regular schemes over F-finite fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - thm-completion-preserves-regular-local-rings
  - thm-faithful-flatness-of-jacobson-adic-completion
  - cor-complete-local-domain-finite-over-a-regular-power-series-ring
  - thm-associated-graded-ring-of-a-regular-local-ring
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the regular local, completion and coefficient-field suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, regular rings and Frobenius"
      url: "https://stacks.math.columbia.edu/tag/0EC0"
      locator: "Regular-to-flat Frobenius context; the F-finite completion argument is reconstructed here and does not use the converse."
verification: {}
---

## Statement

Assume AC. Let $k$ be a field of characteristic $p>0$ with $[k:k^p]<\infty$, and let $X$ be a regular scheme of finite type over $k$. The absolute Frobenius $F_X:X\to X$ is finite locally free. In particular this applies over every global function field, including an imperfect one. Only the regular-to-flat direction is asserted.

## Facts & Assumptions

**Given:** The F-finite field and regular finite-type scheme in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Regular local rings are domains, their maximal-adic completions are regular, and those completion maps are faithfully flat. [[thm-regular-local-rings-are-domains-and-cohen-macaulay]] [[thm-completion-preserves-regular-local-rings]] [[thm-faithful-flatness-of-jacobson-adic-completion]]

[F2] A complete equicharacteristic Noetherian local domain has a coefficient field. [[cor-complete-local-domain-finite-over-a-regular-power-series-ring]]

[F3] A cotangent basis of a regular local ring gives a polynomial associated graded ring. [[thm-associated-graded-ring-of-a-regular-local-ring]]

## Proof

**Proof technique:** use a finite p-basis after regular completion, then descend flatness.

1.1 If $A=k[x_1,\dots,x_m]/I$, the monomials $x^e$ with $0\le e_i<p$, multiplied by a finite $k^p$-basis of $k$, generate $A$ as an $A^p$-module. Localization preserves finite generation because $a/s=as^{p-1}/s^p$. Thus Frobenius is finite on each affine finite-type chart and its localizations. A global function field is F-finite: it is finitely generated over a finite field and each chosen generator has its $p$th power in $K^p$, so finitely many bounded monomials span $K$ over $K^p$. [given, construct, algebra]

2.1 Let $(R,\mathfrak m,\kappa)$ be a local ring of $X$. Its residue field is finitely generated over $k$, so it is F-finite by the same bounded-monomial argument. By [F1], $R$ and its completion $\widehat R$ are regular local domains and $R\to\widehat R$ is faithfully flat. By [F2], $\widehat R$ has a coefficient field identified with $\kappa$. [A1, F1, F2, step 1.1, choose, construct, algebra]

3.1 Choose lifts $x_1,\dots,x_d$ of a $\kappa$-basis of its cotangent space. Successively matching homogeneous terms gives a surjection $\kappa\llbracket X_1,\dots,X_d\rrbracket\to\widehat R$ by completeness. By [F3], a nonzero series has a first nonzero homogeneous term which cannot map to zero in the associated graded, so the map is injective. [F3, step 2.1, choose, construct, algebra]

4.1 Let $b_1,\dots,b_s$ be a finite $\kappa^p$-basis of $\kappa$. Grouping terms by exponents modulo $p$ and decomposing their coefficients in that basis shows that $F_*\widehat R$ is free over $\widehat R$ with basis $b_jx_1^{e_1}\cdots x_d^{e_d}$, $0\le e_i<p$. Here scalar action is through $a\mapsto a^p$. This includes $d=0$. [step 3.1, choose, construct, algebra]

5.1 The finite $R$-module $F_*R$ has completion $\widehat R\otimes_RF_*R$. Its maximal-adic filtration corresponds to the ideals $(\mathfrak m^{[p]})^jR$ in the underlying ring; these are cofinal with the ordinary $\mathfrak m$-adic powers because $\mathfrak m^{[p]}\subseteq\mathfrak m$ and a finite generating set gives a sufficiently high ordinary power inside $\mathfrak m^{[p]}$. Hence $\widehat R\otimes_RF_*R\cong F_*\widehat R$. The latter is free by step 4.1. For an injection of $R$-modules, the kernel after tensoring with $F_*R$ becomes zero after the faithfully flat tensor $\widehat R$; faithfulness therefore makes it zero already. Thus $F_*R$ is flat. Since Frobenius is finite by step 1.1, it is finite flat and hence locally free. The case of the empty scheme is vacuous. [F1, step 1.1, step 4.1, algebra] ∎
