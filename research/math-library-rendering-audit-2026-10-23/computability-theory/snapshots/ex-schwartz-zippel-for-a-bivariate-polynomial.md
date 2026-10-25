---
id: "ex-schwartz-zippel-for-a-bivariate-polynomial"
kind: "example"
title: "Schwartz zippel for a bivariate polynomial"
status: published
origin: "pipeline"
deps: ["thm-schwartz-zippel-over-finite-fields", "thm-z-mod-p-is-a-field"]
justified_by: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Local example of Arora–Barak Appendix A Lemma A.25"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
generation:
  role: example
proof_strategy: "direct"
---

## Example

For the nonzero formal polynomial $f(X,Y)=XY-1$ over $\mathbb F_5$, total degree is two. Of the 25 independent uniform pairs, precisely $(1,1),(2,3),(3,2),(4,4)$ are roots. The actual zero probability is $4/25$, strictly below the Schwartz–Zippel bound $2/5$.

## Facts & Assumptions

**Given:** Independent uniform X,Y in the five-element residue field.

[F1] A nonzero total-degree-d polynomial on a nonempty uniform product set A has zero probability at most $\min(1,d/|A|)$ ([[thm-schwartz-zippel-over-finite-fields]]).

[F2] Residues modulo a prime form a field ([[thm-z-mod-p-is-a-field]]).

## Verification

1.1 Five has no positive proper divisors other than one: 2,3,4 leave remainders 1,2,1. Thus F2 supplies $\mathbb F_5$, with distinct residues 0 through 4. At X=0, $XY-1=-1=4\ne0$. At each nonzero X, the unique Y solving $XY=1$ is its inverse: $1\cdot1=1$, $2\cdot3=6=1$, $3\cdot2=6=1$, $4\cdot4=16=1$ modulo 5. Cancellation rules out any additional Y for the same X. These are all five possibilities for X, so exactly the four listed pairs are roots. [F2, given]

2.1 Each pair has mass $1/25$, so the count gives probability $4/25$. The formal coefficient of XY is one and its total degree is two; the constant term is nonzero but has degree zero, so it does not change total degree. F1 with m=2, d=2 and A equal to the field gives $\min(1,2/5)=2/5=10/25$. Consequently $4/25<10/25$. The comparison is an upper bound, not a claimed equality; independence is used to give every pair the same mass. [step 1.1, F1] ∎
