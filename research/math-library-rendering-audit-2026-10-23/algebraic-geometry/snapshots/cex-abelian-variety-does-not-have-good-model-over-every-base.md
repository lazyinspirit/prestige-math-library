---
id: cex-abelian-variety-does-not-have-good-model-over-every-base
kind: counterexample
title: "Not every abelian variety over a Dedekind function field extends to an abelian scheme"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - ex-elliptic-curve-good-and-bad-reduction
  - def-good-reduction-and-abelian-scheme-model
  - lem-multiplication-by-n-on-abelian-scheme
  - lem-finite-etale-lifting-over-complete-dvr
  - lem-two-torsion-and-uniqueness-of-plane-cubic-group-law
  - thm-valuative-criterion-properness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Elliptic Curves, v2.0, Chapter VII (bad reduction examples)"
      url: "https://www.jmilne.org/math/Books/ectext6.pdf"
    - title: "D. Lombardo, Abelian varieties lecture notes (2018), Chapter 1 sections 1-7 (absence of good models)"
      url: "https://people.dm.unipi.it/lombardo/Teaching/VarietaAbeliane1718/Notes.pdf"
---

## Statement refuted

Every abelian variety over the function field of a Dedekind scheme extends to an abelian scheme over that scheme, i.e. has good reduction.

## Facts & Assumptions

**Given:** AC and DC, inherited from the cited suppliers; an algebraically closed field $k$ of characteristic not $2$ or $3$, the complete discrete valuation ring $R=k[\![t]\!]$ with fraction field $K=k(\!(t)\!)$, and the smooth cubic $E_t:Y^2Z=X^3+tZ^3$ with origin $O=[0:1:0]$, an elliptic curve over $K$.

[F1] Multiplication by $2$ on an abelian scheme of relative dimension one over a base where $2$ is invertible is finite etale of rank $4$, and over a complete DVR with separably closed residue field reduction of a finite etale scheme is a bijection on points ([[lem-multiplication-by-n-on-abelian-scheme]], [[lem-finite-etale-lifting-over-complete-dvr]]).

[F2] The two-torsion of $E_t$ is $\{O\}$ together with the points with $y=0$, i.e. the roots of $x^3+t=0$ in $K$ ([[lem-two-torsion-and-uniqueness-of-plane-cubic-group-law]], [[thm-valuative-criterion-properness]]); good reduction means the existence of an abelian scheme model ([[def-good-reduction-and-abelian-scheme-model]]).

## Counterexample

**Proof technique:** direct, by contradiction with the two-torsion count.

1.1 The curve $E_t$ is an elliptic curve over $K$ by the chord-tangent construction, and $x^3+t$ has no root in $K=k(\!(t)\!)$: a root would satisfy $3v(x)=v(t)=1$ for the valuation $v$, impossible for an integer valuation. Hence $E_t[2](K)=\{O\}$ by [F2], a set with one element. [F2, given, algebra]

2.1 Suppose there were an abelian scheme model $A\to\operatorname{Spec}R$ with generic fibre $E_t$. By [F1] multiplication by $2$ is finite etale of rank $4$ on $A$, so $A[2]$ is finite etale over $R$; properness of $A$ extends each $K$-point of $A[2]$ uniquely to $R$, and finite etale lifting identifies $A[2](R)$ with $A[2](k)$. The special fibre is an elliptic curve over $k$ (characteristic not $2$), so $A[2](k)=\mathbb Z/2\times\mathbb Z/2$ has four elements by the multiplication theorem, whence $A[2](K)=E_t[2](K)$ would have four elements, contradicting step 1.1. [F1, F2, step 1.1, algebra]

3.1 This contradiction proves that no abelian scheme model of $E_t$ over $R$ exists: the elliptic curve $E_t$ has bad reduction. The companion example records the explicit ramified extension $k(\!(s)\!)$ with $s^6=t$ over which the curve acquires good reduction, so the absence of a model over $R$ is genuinely a failure of descent and not an artifact of the chosen equation. [F1, given, step 2.1, algebra] ∎ 