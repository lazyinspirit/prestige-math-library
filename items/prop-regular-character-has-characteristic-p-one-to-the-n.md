---
id: prop-regular-character-has-characteristic-p-one-to-the-n
kind: proposition
title: "The regular character has characteristic $p_1^n$"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-frobenius-characteristic-map
  - thm-character-of-the-regular-representation
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
  - thm-standard-polytabloid-basis
  - cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - thm-complex-irreducibles-of-symmetric-groups-are-specht-modules
  - cor-distinct-specht-modules-are-inequivalent
  - def-standard-inner-product-on-complex-class-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-18.md"
      - "research/frontier-38-owner-30-alpha-batch-18-5a.md"
      - "research/frontier-38-owner-30-step5-hash-18-post-5a.json"
    content_sha256: "822f88ce09c3aebd11806576f0acdc03304e49935fd8133eb1300e5f113689d3"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "§7.3, printed p. 114 (ch of the trivial character and the expansion of p_1^n)"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6 and §16"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26; §16 (Theorem 16.4 and Corollary 16.5), printed pp. 60–64"
---

## Statement

Let $\chi_{\mathrm{reg}}$ be the regular character of $S_n$ and let
$f^\lambda:=\dim_{\mathbb C}S^\lambda$, the number of standard
$\lambda$-tableaux ([[thm-standard-polytabloid-basis]]). Then

$$\operatorname{ch}(\chi_{\mathrm{reg}})=p_1^{\,n},\qquad\text{and expanding in the Schur basis}\qquad p_1^{\,n}=\sum_{\lambda\vdash n}f^\lambda\,s_\lambda .$$

## Facts & Assumptions

**Given:** An integer $n\ge0$, the regular representation $\mathbb C[S_n]$ with character $\chi_{\mathrm{reg}}$, and the Specht modules $S^\lambda$ with characters $\chi^\lambda$ and dimensions $f^\lambda=\dim_{\mathbb C}S^\lambda$.

[F1] $\operatorname{ch}(f)=\sum_{\rho\vdash n}f(\rho)p_\rho/z_\rho$ for class functions $f\in\mathrm{cf}(S_n)$, with $z_\rho=\prod_ii^{m_i(\rho)}m_i(\rho)!$ positive ([[def-frobenius-characteristic-map]]).

[F2] $\chi_{\mathrm{reg}}(1)=n!=|S_n|$ and $\chi_{\mathrm{reg}}(w)=0$ for $w\ne1$ ([[thm-character-of-the-regular-representation]]).

[F3] $\mathbb C[S_n]$ is a finite-dimensional complex representation of the finite group $S_n$ and is completely reducible, by Maschke's theorem applied to the characteristic-zero field $\mathbb C$ ([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F4] The modules $\{S^\lambda:\lambda\vdash n\}$ form a complete irredundant list, up to isomorphism, of the irreducible complex $S_n$-representations ([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]], [[cor-distinct-specht-modules-are-inequivalent]]).

[F5] If $V\cong\bigoplus_jm_jV_j$ with $V_j$ a complete set of representatives of the irreducible representations and $\chi_j=\chi_{V_j}$, then $m_j=\langle\chi_V,\chi_j\rangle$ ([[cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product]]).

[F6] The standard inner product is $\langle\varphi,\psi\rangle=\frac1{n!}\sum_{w\in S_n}\varphi(w)\overline{\psi(w)}$ ([[def-standard-inner-product-on-complex-class-functions]]).

[F7] $\dim_{\mathbb C}S^\lambda=f^\lambda$, the number of standard $\lambda$-tableaux ([[thm-standard-polytabloid-basis]]).

[F8] $\operatorname{ch}(\chi^\lambda)=s_\lambda$ for every $\lambda\vdash n$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]).

## Proof

**Proof technique:** direct.

1.1 By [F2], $\chi_{\mathrm{reg}}$ vanishes except at the identity, whose cycle type is $(1^n)$; for that partition $m_1((1^n))=n$, so $z_{(1^n)}=1^n\cdot n!=n!$. [F2, given]

1.2 By [F3] the regular representation is completely reducible, and by [F4] its irreducible summands are copies of the Specht modules, so $\mathbb C[S_n]\cong\bigoplus_{\lambda\vdash n}m_\lambda S^\lambda$ for nonnegative integers $m_\lambda$; by [F5] and [F6] each multiplicity is $m_\lambda=\langle\chi_{\mathrm{reg}},\chi^\lambda\rangle=\frac1{n!}\sum_{w\in S_n}\chi_{\mathrm{reg}}(w)\overline{\chi^\lambda(w)}$, and [F2] reduces the sum to its identity term. [F3, F4, F5, F6]

2.1 Substituting $f=\chi_{\mathrm{reg}}$ into [F1] and using step 1.1, $\operatorname{ch}(\chi_{\mathrm{reg}})=\sum_{\rho\vdash n}\chi_{\mathrm{reg}}(\rho)p_\rho/z_\rho=n!\,p_{(1^n)}/n!=p_1^{\,n}$, since $p_{(1^n)}=p_1^n$ by the product convention for power sums. [F1, step 1.1, algebra]

2.2 By step 1.2, $m_\lambda=\frac1{n!}\,n!\,\overline{\chi^\lambda(1)}=f^\lambda$, because $\chi_{\mathrm{reg}}$ vanishes away from $1$ and $\chi^\lambda(1)=\dim_{\mathbb C}S^\lambda=f^\lambda$ is a nonnegative integer by [F7], so it equals its conjugate. Hence $\chi_{\mathrm{reg}}=\sum_{\lambda\vdash n}f^\lambda\chi^\lambda$. [F5, F6, F7, step 1.2, algebra]

3.1 Applying the linear map $\operatorname{ch}$ to step 2.2 and using [F8] gives $p_1^{\,n}=\operatorname{ch}(\chi_{\mathrm{reg}})=\sum_{\lambda\vdash n}f^\lambda\operatorname{ch}(\chi^\lambda)=\sum_{\lambda\vdash n}f^\lambda s_\lambda$, the displayed Schur expansion. [F1, F8, step 2.1, step 2.2, algebra] ∎

The identity is a consistency check of the dictionary: it does not reprove the RSK sum-of-squares formula $\sum_\lambda(f^\lambda)^2=n!$.
