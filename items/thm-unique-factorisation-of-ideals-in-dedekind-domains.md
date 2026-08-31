---
id: thm-unique-factorisation-of-ideals-in-dedekind-domains
kind: theorem
title: "Unique factorization of nonzero fractional ideals into prime powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-prime-ideal-valuations-on-fractional-ideals, lem-finite-support-of-ideal-valuations, thm-localisation-of-modules-is-exact, thm-local-criterion-for-zero-modules-and-maps]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §20"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $R$ be a Dedekind domain. Every nonzero fractional ideal $I$ of $R$ has a unique factorization $I=\prod_{\mathfrak p}\mathfrak p^{v_{\mathfrak p}(I)}$, where all but finitely many exponents are zero. If $I$ is an integral ideal, then every exponent is nonnegative.

## Facts & Assumptions

**Given:** A Dedekind domain $R$ and a nonzero fractional ideal $I$.

[F1] The valuation $v_{\mathfrak p}(I)$ is defined by the equality $I_{\mathfrak p}=\mathfrak p^{v_{\mathfrak p}(I)}R_{\mathfrak p}$ ([[def-prime-ideal-valuations-on-fractional-ideals]]).

[L1] Only finitely many valuations of a fixed fractional ideal are nonzero, and valuations add under products ([[lem-finite-support-of-ideal-valuations]]).

[L2] Localisation of modules preserves short exact sequences ([[thm-localisation-of-modules-is-exact]]).

[L3] Assuming Choice, a module is zero exactly when all maximal localisations vanish ([[thm-local-criterion-for-zero-modules-and-maps]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], only finitely many integers $v_{\mathfrak p}(I)$ are nonzero, so $J:=\prod_{\mathfrak p}\mathfrak p^{v_{\mathfrak p}(I)}$ is a well-defined nonzero fractional ideal. Fix a nonzero prime ideal $\mathfrak q$. If $\mathfrak p\neq\mathfrak q$, choose $x\in\mathfrak p\setminus\mathfrak q$; then $x/1$ is a unit in $R_{\mathfrak q}$, so $(\mathfrak p^{v_{\mathfrak p}(I)})_{\mathfrak q}=R_{\mathfrak q}$. Hence only the $\mathfrak q$-factor survives after localizing, and $J_{\mathfrak q}=\mathfrak q^{v_{\mathfrak q}(I)}R_{\mathfrak q}=I_{\mathfrak q}$. [F1, L1, given, algebra]

2.1 Let $M:=(I+J)/J$. Localizing the short exact sequence $0\to J\to I+J\to M\to0$ and using [L2], we get $M_{\mathfrak m}\cong(I_{\mathfrak m}+J_{\mathfrak m})/J_{\mathfrak m}$ for every maximal ideal $\mathfrak m$. Step 1.1 gives $I_{\mathfrak m}=J_{\mathfrak m}$, so $M_{\mathfrak m}=0$ for all $\mathfrak m$. Therefore [L3] gives $M=0$, hence $I\subseteq J$. The same argument with $(I+J)/I$ gives $J\subseteq I$, so $I=J$. This proves existence of the factorization. [L2, L3, step 1.1]

3.1 If also $I=\prod_{\mathfrak p}\mathfrak p^{n_{\mathfrak p}}$, localising at a fixed nonzero prime $\mathfrak q$ gives $\mathfrak q^{v_{\mathfrak q}(I)}R_{\mathfrak q}=I_{\mathfrak q}=\mathfrak q^{n_{\mathfrak q}}R_{\mathfrak q}$. Uniqueness of powers in the DVR $R_{\mathfrak q}$ forces $n_{\mathfrak q}=v_{\mathfrak q}(I)$, so the factorization is unique. [F1, step 2.1, algebra]

4.1 If $I\subseteq R$, then $I_{\mathfrak p}\subseteq R_{\mathfrak p}$ for every nonzero prime ideal $\mathfrak p$, so the exponent in the DVR equality $I_{\mathfrak p}=\mathfrak p^{v_{\mathfrak p}(I)}R_{\mathfrak p}$ must be nonnegative. Hence integral ideals have only nonnegative exponents. [F1, step 2.1, algebra] ∎
