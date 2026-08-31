---
id: thm-principal-divisor-exact-sequence
kind: theorem
title: "The principal-divisor exact sequence for a Dedekind domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-divisor-group-of-a-dedekind-domain, def-ideal-class-group-of-a-domain, def-prime-ideal-valuations-on-fractional-ideals, thm-unique-factorisation-of-ideals-in-dedekind-domains, lem-ideal-class-group-well-defined]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mircea Mustata, Introduction to Commutative Algebra, §8.5"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "J. P. May, Notes on Dedekind Rings"
      url: "https://www.math.uchicago.edu/~may/MISC/Dedekind.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Dedekind domain with fraction field $K$. Then the valuation maps
fit into an exact sequence
$$
0\longrightarrow R^\times\longrightarrow K^\times\xrightarrow{\operatorname{div}}\operatorname{Div}(R)\xrightarrow{\operatorname{cl}}\operatorname{Cl}(R)\longrightarrow0,
$$
where
$$
\operatorname{div}(x)=\sum_{\mathfrak p}v_{\mathfrak p}((x))[\mathfrak p]
$$
and
$$
\operatorname{cl}\!\left(\sum_{\mathfrak p}n_{\mathfrak p}[\mathfrak p]\right)=\left[\prod_{\mathfrak p}\mathfrak p^{n_{\mathfrak p}}\right].
$$

## Facts & Assumptions

**Given:** The Axiom of Choice and a Dedekind domain $R$ with fraction field $K$.

[F1] The divisor group is the free abelian group on the nonzero prime ideals ([[def-divisor-group-of-a-dedekind-domain]]).

[F2] The class group is the quotient of nonzero fractional ideals by principal fractional ideals ([[def-ideal-class-group-of-a-domain]]).

[F3] The integer $v_{\mathfrak p}(I)$ is defined by the equality $I_{\mathfrak p}=\mathfrak p^{v_{\mathfrak p}(I)}R_{\mathfrak p}$ ([[def-prime-ideal-valuations-on-fractional-ideals]]).

[L1] Nonzero fractional ideals factor uniquely into finite products of prime powers ([[thm-unique-factorisation-of-ideals-in-dedekind-domains]]).

[L2] The class-group quotient is well defined ([[lem-ideal-class-group-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 The map $\operatorname{cl}$ is well defined and surjective: by [L1], every divisor is a finite sum and therefore determines a unique fractional ideal $\prod\mathfrak p^{n_{\mathfrak p}}$, and every ideal class has such a representative. [F1, F2, L1, L2]

1.2 If $x\in K^\times$, then [L1] applied to the principal fractional ideal $(x)$ gives
$$
(x)=\prod_{\mathfrak p}\mathfrak p^{v_{\mathfrak p}((x))}.
$$
Therefore $\operatorname{cl}(\operatorname{div}(x))=[(x)]=0$ in $\operatorname{Cl}(R)$. So $\operatorname{im}(\operatorname{div})\subseteq\ker(\operatorname{cl})$. [F2, F3, L1]

1.3 Conversely, if $D=\sum n_{\mathfrak p}[\mathfrak p]$ satisfies $\operatorname{cl}(D)=0$, then the ideal $\prod\mathfrak p^{n_{\mathfrak p}}$ is principal, say equal to $(x)$ with $x\in K^\times$. Uniqueness in [L1] then forces $D=\operatorname{div}(x)$. Thus $\ker(\operatorname{cl})=\operatorname{im}(\operatorname{div})$. [F2, F3, L1, L2]

2.1 If $x\in R^\times$, then $(x)=R$, so all valuations of $(x)$ are zero and $\operatorname{div}(x)=0$. Conversely, if $\operatorname{div}(x)=0$, then [L1] gives $(x)=R$, which is exactly the statement that $x$ is a unit of $R$. Hence $\ker(\operatorname{div})=R^\times$. [F3, L1, step 1.2]

3.1 Steps 1.1, 1.2, 1.3, and 2.1 prove exactness of the displayed sequence. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
