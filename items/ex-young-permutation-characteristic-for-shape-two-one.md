---
id: ex-young-permutation-characteristic-for-shape-two-one
kind: example
title: "The Young permutation characteristic for shape $(2,1)$"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-characteristic-of-a-young-permutation-character-is-complete
  - thm-youngs-rule-for-permutation-modules
  - lem-kostka-change-of-basis-is-dominance-unitriangular
  - def-semistandard-tableau-and-kostka-number
  - thm-character-of-a-permutation-representation-counts-fixed-points
  - ex-frobenius-characteristic-dictionary-for-s3
  - thm-elementary-and-complete-families-freely-generate-the-stable-ring
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item ex-young-permutation-characteristic-for-shape-two-one; evidence research/frontier-38-owner-30-reader-18.md, research/frontier-38-owner-30-reader-findings-18.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "§7.3 and Example 1, printed pp. 114–116"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26 (Young's rule and fixed tabloids for shape $(2,1)$)"
---

## Example

For $S_3$, the Young permutation module $M^{(2,1)}$ has
$\operatorname{ch}(M^{(2,1)})=h_2h_1=s_{(3)}+s_{(2,1)}$, and its character
takes the values $(3,1,0)$ on cycle types $(1^3),(2,1),(3)$, decomposing as
$\chi^{(3)}+\chi^{(2,1)}$; this agrees with Young's rule
$M^{(2,1)}\cong S^{(3)}\oplus S^{(2,1)}$ and with the dictionary table.

## Facts & Assumptions

**Given:** The partition $(2,1)$ of $3$, the cycle types $(1^3),(2,1),(3)$ of $S_3$, and a permutation $w\in S_3$.

[F1] $\operatorname{ch}(\varphi^{(2,1)})=h_{(2,1)}=h_2h_1$, where $\varphi^{(2,1)}$ is the character of $M^{(2,1)}$, and $h_\lambda=\prod_ih_{\lambda_i}$ ([[lem-characteristic-of-a-young-permutation-character-is-complete]], [[thm-elementary-and-complete-families-freely-generate-the-stable-ring]]).

[F2] $\varphi^{(2,1)}(w)$ is the number of $(2,1)$-tabloids fixed by $w$ ([[thm-character-of-a-permutation-representation-counts-fixed-points]]).

[F3] Young's rule: $M^{(2,1)}\cong(S^{(3)})^{\oplus K_{(3),(2,1)}}\oplus(S^{(2,1)})^{\oplus K_{(2,1),(2,1)}}\oplus(S^{(1,1,1)})^{\oplus K_{(1,1,1),(2,1)}}$, with $K_{\lambda\mu}$ the number of semistandard $\lambda$-tableaux of content $\mu$ ([[thm-youngs-rule-for-permutation-modules]], [[def-semistandard-tableau-and-kostka-number]]).

[F4] For partitions of the same integer, $h_\mu=\sum_\lambda K_{\lambda\mu}s_\lambda$ with $K_{\lambda\mu}=0$ unless $\lambda\unrhd\mu$ and $K_{\mu\mu}=1$ ([[lem-kostka-change-of-basis-is-dominance-unitriangular]]).

[F5] In the dictionary example for $S_3$, $s_{(3)}=\frac{p_1^3+3p_1p_2+2p_3}{6}$, $s_{(2,1)}=\frac{p_1^3-p_3}{3}$, with $\chi^{(3)}=(1,1,1)$ and $\chi^{(2,1)}=(2,0,-1)$ on the cycle types $(1^3),(2,1),(3)$ ([[ex-frobenius-characteristic-dictionary-for-s3]]).

## Verification

**Proof technique:** direct.

1.1 Listing the three $(2,1)$-tabloids by their two-element row: $\{12\}|\{3\}$, $\{13\}|\{2\}$, $\{23\}|\{1\}$. The identity fixes all three; the transposition $(12)$ fixes exactly $\{12\}|\{3\}$, because a fixed tabloid must have both its row sets $w$-invariant, and $(12)$ preserves $\{1,2\}$ and $\{3\}$ but moves $\{1,3\}$ to $\{2,3\}$ and $\{2,3\}$ to $\{1,3\}$; the $3$-cycle $(123)$ fixes none, since a row set of size $2$ is never invariant under a $3$-cycle. Hence $\varphi^{(2,1)}=(3,1,0)$ on the cycle types $(1^3),(2,1),(3)$. [F2, given]

1.2 By [F1], $\operatorname{ch}(\varphi^{(2,1)})=h_2h_1$. [F1]

1.3 The Kostka numbers for $\mu=(2,1)$ are $K_{(3),(2,1)}=1$ (the single semistandard tableau $1\,1\,2$ of shape $(3)$) and $K_{(2,1),(2,1)}=1$ (the tableau with first row $1\,1$ and second row $2$), while $K_{(1,1,1),(2,1)}=0$ both because two entries equal to $1$ would have to occur in the same column and because $(1,1,1)$ does not dominate $(2,1)$ [F4]; so Young's rule [F3] gives $M^{(2,1)}\cong S^{(3)}\oplus S^{(2,1)}$. [F3, F4, given, algebra]

2.1 By [F5] the dictionary example gives $s_{(3)}+s_{(2,1)}=\frac{p_1^3+3p_1p_2+2p_3}{6}+\frac{p_1^3-p_3}{3}=\frac{3p_1^3+3p_1p_2}{6}=\frac{p_1^3+p_1p_2}{2}$; on the other hand $h_2=\frac{p_1^2+p_2}{2}$, so $h_2h_1=\frac{(p_1^2+p_2)p_1}{2}=\frac{p_1^3+p_1p_2}{2}$. Therefore $h_2h_1=s_{(3)}+s_{(2,1)}$, and step 1.2 identifies this with $\operatorname{ch}(\varphi^{(2,1)})$. [F1, F5, step 1.2, algebra]

2.2 Adding the values of $\chi^{(3)}$ and $\chi^{(2,1)}$ from [F5] gives $(1,1,1)+(2,0,-1)=(3,1,0)$ on the cycle types $(1^3),(2,1),(3)$, exactly the values computed for $\varphi^{(2,1)}$ in step 1.1. [F5, step 1.1, algebra]

3.1 The two routes agree: directly, $\varphi^{(2,1)}=(3,1,0)=1\cdot\chi^{(3)}+1\cdot\chi^{(2,1)}$ by step 2.2, matching the Young's-rule decomposition $M^{(2,1)}\cong S^{(3)}\oplus S^{(2,1)}$ of step 1.3; symmetrically, $\operatorname{ch}(\varphi^{(2,1)})=h_2h_1=s_{(3)}+s_{(2,1)}$ by steps 1.2 and 2.1, matching the dictionary table of [F5]. [F5, step 1.3, step 2.1, step 2.2] ∎
