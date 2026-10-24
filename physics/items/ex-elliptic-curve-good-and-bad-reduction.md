---
id: ex-elliptic-curve-good-and-bad-reduction
kind: example
title: "An elliptic curve with good reduction and an elliptic curve with bad reduction"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-good-reduction-and-abelian-scheme-model
  - lem-multiplication-by-n-on-abelian-scheme
  - lem-finite-etale-lifting-over-complete-dvr
  - thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre
  - cor-good-reduction-admits-a-neron-model
  - lem-abelian-scheme-base-change-and-products
  - thm-plane-cubic-chord-tangent-group-law
  - lem-two-torsion-and-uniqueness-of-plane-cubic-group-law
  - thm-valuative-criterion-properness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "J. S. Milne, Elliptic Curves, v2.0, Chapter VII (good and bad reduction)"
      url: "https://www.jmilne.org/math/Books/ectext6.pdf"
    - title: "D. Lombardo, Abelian varieties lecture notes (2018), Chapter 1 sections 1-7 (examples of reduction)"
      url: "https://people.dm.unipi.it/lombardo/Teaching/VarietaAbeliane1718/Notes.pdf"
---

## Example

Assume AC and DC, inherited from the cited suppliers. Let $R=\mathbf C[\![t]\!]$ with fraction field $K=\mathbf C(\!(t)\!)$, and let $E_0$ be a complex elliptic curve, for instance the smooth projective cubic with the chord-tangent group law of [[thm-plane-cubic-chord-tangent-group-law]] over $\mathbf C$. The constant family $A=E_0\times_{\mathbf C}R\to\operatorname{Spec}R$ is an abelian scheme of relative dimension $1$ with generic fibre $E_0\otimes_{\mathbf C}K$; its special fibre is $E_0$. By [[thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre]] it is the Neron model of its generic fibre, so this generic fibre has good reduction.

For the bad case let $k$ be an algebraically closed field of characteristic not $2$ or $3$, let $R=k[\![t]\!]$, $K=k(\!(t)\!)$, and let $E_t$ be the smooth cubic $Y^2Z=X^3+tZ^3$ with origin $O=[0:1:0]$, an elliptic curve over $K$ by [[thm-plane-cubic-chord-tangent-group-law]].

## Verification

**Given:** AC and DC; the constant complex family over $\mathbf C[\![t]\!]$ of the first paragraph; and, independently, an algebraically closed field $k$ with $\operatorname{char}k\ne2,3$, the complete DVR $R=k[\![t]\!]$ with fraction field $K=k(\!(t)\!)$, and $E_t:Y^2Z=X^3+tZ^3$ with origin $O$.

[F1] Reduction of finite etale schemes over a complete DVR with separably closed residue field is a bijection on points, and finite etale $R$-algebras of rank $d$ are products of copies of $R$ ([[lem-finite-etale-lifting-over-complete-dvr]], [[lem-multiplication-by-n-on-abelian-scheme]]).

[F2] The two-torsion of the cubic is computed by $2P=O\iff P=-P$, i.e. by the points with $y=0$ in characteristic not $2$ besides $O$ ([[lem-two-torsion-and-uniqueness-of-plane-cubic-group-law]]); the valuative criterion of properness extends $K$-points of proper models ([[thm-valuative-criterion-properness]]); good reduction and Neron models behave as in [[def-good-reduction-and-abelian-scheme-model]], [[cor-good-reduction-admits-a-neron-model]].

1.1 The constant family is an abelian scheme: $E_0$ is a smooth projective curve of genus one with a rational point, base change preserves smoothness, properness and the group law ([[lem-abelian-scheme-base-change-and-products]]), and its special fibre is $E_0$; this proves the good-reduction clause. [F2, given, algebra]

2.1 Suppose $E_t$ had an abelian scheme model $A\to\operatorname{Spec}R$. By [F1] multiplication by $2$ on $A$ is finite etale of rank $4$, so $A[2]$ is finite etale over $R$; [F1] then makes reduction $A[2](R)\to A[2](k)$ a bijection, and $A[2](k)=\mathbb Z/2\times\mathbb Z/2$ because the special fibre is an elliptic curve in characteristic not $2$. Hence $A[2](K)=E_t[2](K)$ would have four elements, while the two-torsion of $E_t$ is $\{O\}$ together with the roots in $K$ of $x^3+t=0$ by [F2]; the polynomial $x^3+t$ has no root in $K=k(\!(t)\!)$, since a root would satisfy $3v(x)=v(t)=1$, impossible for an integer valuation. This contradiction shows that no abelian scheme model exists, so $E_t$ has bad reduction. [F1, F2, step 1.1, algebra]

3.1 The contrast is sharp: over the totally ramified extension $k(\!(s)\!)$ with $s^6=t$, the substitution $x=s^2x'$, $y=s^3y'$ identifies $E_t\otimes_{k(\!(t)\!)}k(\!(s)\!)$ with $Y^2Z=X^3+Z^3$, the base change from $k$ of an elliptic curve of good reduction, so $E_t$ has bad reduction over $k[\![t]\!]$ but acquires good reduction after a finite ramified extension. In step 2.1 the properness of a hypothetical model is what extends each $K$-point of $A[2]$ uniquely to $R$; no claim that the singular chosen equation alone excludes a different smooth model is made. [F1, F2, step 2.1, algebra] ∎
