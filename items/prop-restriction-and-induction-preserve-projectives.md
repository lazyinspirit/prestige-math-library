---
id: prop-restriction-and-induction-preserve-projectives
kind: proposition
title: "Restriction and induction along a subgroup preserve projective modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-projective-module, thm-projective-module-characterizations, thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules, prop-induced-module-decomposes-over-a-left-transversal]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $H\le G$ be finite groups and let $k$ be a field. Then restriction
$\operatorname{Res}_H^G$ and induction $\operatorname{Ind}_H^G$ both send
projective modules to projective modules.

## Facts & Assumptions

**Given:** A subgroup $H\le G$ and a field $k$.

[F1] Projective modules are characterized by lifting and by being direct
summands of free modules ([[def-projective-module]], [[thm-projective-module-characterizations]]).

[L1] Induction is left adjoint to restriction
([[thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]]).

[L2] A left transversal identifies $\operatorname{Ind}_H^G W$ with a finite
direct sum of copies of $W$ ([[prop-induced-module-decomposes-over-a-left-transversal]]).

## Proof

**Proof technique:** direct.

1.1 Let $P$ be a projective $kG$-module. By [F1], it is a direct summand of a free module $(kG)^n$. Restricting to $H$ preserves direct sums and summands. By [L2] with $W=kH$, the restricted regular module $\operatorname{Res}_H^G(kG)$ is a finite direct sum of copies of $kH$, hence is free as a $kH$-module. Therefore $\operatorname{Res}_H^G P$ is a direct summand of a free $kH$-module and is projective by [F1]. [F1, L2, given, algebra]

2.1 Let $Q$ be a projective $kH$-module. To prove that $\operatorname{Ind}_H^G Q$ is projective, use the lifting characterization in [F1]. Given a surjection $u:X\to Y$ of $kG$-modules and a map $\phi:\operatorname{Ind}_H^G Q\to Y$, adjunction [L1] turns $\phi$ into a map $\psi:Q\to\operatorname{Res}_H^G Y$. The restriction of $u$ is still surjective, so projectivity of $Q$ lifts $\psi$ to $\widetilde\psi:Q\to\operatorname{Res}_H^G X$. Applying [L1] again yields a lift $\widetilde\phi:\operatorname{Ind}_H^G Q\to X$ of $\phi$. Thus $\operatorname{Ind}_H^G Q$ is projective. [F1, L1, step 1.1, algebra]

3.1 Steps 1.1 and 2.1 prove that both restriction and induction preserve projectives. [step 1.1, step 2.1] ∎
