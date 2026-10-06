---
id: ex-frobenius-characteristic-dictionary-for-s3
kind: example
title: "The Frobenius characteristic dictionary for $S_3$"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients
  - thm-standard-polytabloid-basis
  - thm-jacobi-trudi-and-dual-jacobi-trudi-identities
  - lem-complete-homogeneous-expansion-in-power-sums
  - prop-omega-conjugates-schur-functions
  - thm-frobenius-characteristic-sends-specht-characters-to-schur-functions
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for ex-frobenius-characteristic-dictionary-for-s3 and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-18; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"e71768a0a4a68d3fd89ff5fc43d6c085f107465cf5cd343e23dd0a078401db42","evidence":["research/frontier-38-owner-30-reader-18.md","research/frontier-38-owner-30-reader-findings-18.json","research/frontier-38-owner-30-dispatch/reader-reader-18.result.json","research/frontier-38-owner-30-step5-hash-18-post-5a.json","research/frontier-38-owner-30-alpha-batch-18-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-18.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/ex-frobenius-characteristic-dictionary-for-s3.md","historical_raw_sha256":"56286aefc6142762d0905879a5567efcf8aceb1bf6ebc50fe978b6c75e32eab7","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:31:05.901Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "(7.5)–(7.7) and Example 1, printed pp. 114–116"
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, §6"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§6, printed pp. 22–26 (the $S_3$ character table as a check)"
---

## Example

For $n=3$, expand the three Schur functions $s_{(3)},s_{(2,1)},s_{(1,1,1)}$
in the power-sum basis and recover the character table of $S_3$. The expansion
is

$$s_{(3)}=h_3=\frac{p_1^3+3p_1p_2+2p_3}{6},\qquad s_{(2,1)}=h_2h_1-h_3=\frac{p_1^3-p_3}{3},\qquad s_{(1,1,1)}=e_3=\frac{p_1^3-3p_1p_2+2p_3}{6},$$

so the coefficients of $p_\rho/z_\rho$ give the table, on cycle types
$(1^3),(2,1),(3)$ respectively:

$$\chi^{(3)}=(1,1,1),\qquad \chi^{(2,1)}=(2,0,-1),\qquad \chi^{(1,1,1)}=(1,-1,1).$$

The degrees are $f^{(3)}=f^{(1,1,1)}=1$ and $f^{(2,1)}=2$, matching the number
of standard tableaux, and the columns are orthogonal with
$\sum_\lambda f^\lambda\chi^\lambda(1)=1+4+1=6=|S_3|$.

## Facts & Assumptions

**Given:** The partitions $(3),(2,1),(1,1,1)$ of $3$ and the cycle types $(1^3),(2,1),(3)$ of $S_3$.

[F1] Jacobi–Trudi and dual Jacobi–Trudi: $s_{(3)}=h_3$, $s_{(2,1)}=\det\bigl(\begin{smallmatrix}h_2&h_3\\h_0&h_1\end{smallmatrix}\bigr)=h_2h_1-h_3$, and $s_{(1,1,1)}=e_3$, with $h_0=e_0=1$ ([[thm-jacobi-trudi-and-dual-jacobi-trudi-identities]]).

[F2] $h_3=\sum_{\rho\vdash3}p_\rho/z_\rho=\frac{p_1^3+3p_1p_2+2p_3}{6}$, using $z_{(1^3)}=6$, $z_{(2,1)}=2$, $z_{(3)}=3$; likewise $h_2=\frac{p_1^2+p_2}{2}$ and $h_1=p_1$ ([[lem-complete-homogeneous-expansion-in-power-sums]]).

[F3] The involution $\omega$ satisfies $\omega(h_r)=e_r$, $\omega(p_1)=p_1$, $\omega(p_2)=-p_2$, $\omega(p_3)=p_3$, and it is an algebra homomorphism, so $e_3=\omega(h_3)=\frac{p_1^3-3p_1p_2+2p_3}{6}$ ([[prop-omega-conjugates-schur-functions]]).

[F4] $\operatorname{ch}(\chi^\lambda)=s_\lambda$ for every $\lambda\vdash3$, and $\chi^\lambda(\rho)$ is the coefficient of $p_\rho/z_\rho$ in the power-sum expansion of $s_\lambda$, i.e. $\chi^\lambda(\rho)=\langle s_\lambda,p_\rho\rangle_H$ ([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]], [[cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients]]).

[F5] $f^\lambda=\dim_{\mathbb C}S^\lambda$ is the number of standard $\lambda$-tableaux, so $f^{(3)}=f^{(1,1,1)}=1$ and $f^{(2,1)}=2$ ([[thm-standard-polytabloid-basis]]).

## Verification

**Proof technique:** direct.

1.1 The cycle types of $S_3$ are $(1^3),(2,1),(3)$, with $z_{(1^3)}=1^3\cdot3!=6$, $z_{(2,1)}=2\cdot1=2$ and $z_{(3)}=3$, so [F2] gives $h_1=p_1$, $h_2=\frac{p_1^2+p_2}{2}$ and $h_3=\frac{p_1^3+3p_1p_2+2p_3}{6}$. [F2, given]

1.2 The three relevant Schur functions are $s_{(3)}=h_3$, $s_{(2,1)}=h_2h_1-h_3$ and $s_{(1,1,1)}=e_3=\omega(h_3)$ by [F1] and [F3]. [F1, F3]

1.3 The numbers of standard tableaux are $f^{(3)}=1$, $f^{(2,1)}=2$ and $f^{(1,1,1)}=1$ by [F5]. [F5, given]

2.1 Substituting step 1.1 into step 1.2: $s_{(3)}=\frac{p_1^3+3p_1p_2+2p_3}{6}$; $s_{(2,1)}=\frac{p_1^2+p_2}{2}\,p_1-\frac{p_1^3+3p_1p_2+2p_3}{6}=\frac{3p_1^3+3p_1p_2-p_1^3-3p_1p_2-2p_3}{6}=\frac{p_1^3-p_3}{3}$; and $s_{(1,1,1)}=\omega(h_3)=\frac{p_1^3-3p_1p_2+2p_3}{6}$. [F3, step 1.1, step 1.2, algebra]

3.1 By [F4], $\chi^\lambda(\rho)$ is the coefficient of $p_\rho/z_\rho$ in the expansion of step 2.1; since $z_{(1^3)}=6$, $z_{(2,1)}=2$, $z_{(3)}=3$, the coefficients of $p_{(1^3)}/6,p_{(2,1)}/2,p_{(3)}/3$ in $s_{(3)},s_{(2,1)},s_{(1,1,1)}$ are respectively $(1,1,1)$, $(2,0,-1)$ and $(1,-1,1)$. [F4, step 2.1, algebra]

4.1 The identity-column sum is $1\cdot1+2\cdot2+1\cdot1=6=|S_3|$. The weighted squared row norms are $\frac16+\frac12+\frac13=1$, $\frac46+0+\frac13=1$, and $\frac16+\frac12+\frac13=1$ in the displayed row order. The weighted products of the three distinct row pairs are $\frac26-\frac13=0$, $\frac16-\frac12+\frac13=0$, and $\frac26-\frac13=0$. The column squared norms are $1+4+1=6$, $1+0+1=2$, and $1+1+1=3$, and the distinct column products are $1-1=0$, $1-2+1=0$, and $1-1=0$. Thus the rows are orthonormal with weights $1/z_\rho$, and the columns are orthogonal with squared norms $z_\rho$. [step 1.3, step 3.1, algebra] ∎
