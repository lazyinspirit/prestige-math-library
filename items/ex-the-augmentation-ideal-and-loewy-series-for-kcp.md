---
id: ex-the-augmentation-ideal-and-loewy-series-for-kcp
kind: example
title: "The augmentation ideal and Loewy series of kCp can be written explicitly"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-module-radical-socle-head-and-loewy-series, thm-kg-is-local-iff-g-is-a-p-group]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Example

For $C_p=\langle g\rangle$ over a field $k$ of characteristic $p$, write
$x=g-1$. Then

$$ kC_p\cong k[x]/(x^p), $$

the augmentation ideal is $(x)$, and the Loewy series of the regular module is

$$ kC_p\supset (x)\supset (x^2)\supset\cdots\supset (x^{p-1})\supset (x^p)=0. $$

## Facts & Assumptions

**Given:** The cyclic group $C_p=\langle g\rangle$ and a field $k$ of characteristic $p$.

[F1] The head and Loewy series are the quotient by the radical and its iterated powers
([[def-module-radical-socle-head-and-loewy-series]]).

[L1] Over every field of characteristic $p$, the group algebra $kC_p$ is local
([[thm-kg-is-local-iff-g-is-a-p-group]]).

## Verification

**Proof technique:** direct.

1.1 In characteristic $p$, one has $g^p-1=(g-1)^p=x^p$, so the relation $g^p=1$ becomes $x^p=0$. Every element of $kC_p$ is a polynomial in $g$, hence in $x=g-1$, and the basis $1,g,\ldots,g^{p-1}$ becomes the basis $1,x,\ldots,x^{p-1}$. Therefore $kC_p\cong k[x]/(x^p)$. [given, algebra]

2.1 Under that identification, the augmentation map kills $x$ and sends $1$ to $1$, so its kernel is $(x)$. Since [L1] makes the ring local, $(x)$ is its radical. Therefore [F1] gives the displayed Loewy series by successive powers of $(x)$. [F1, L1, step 1.1, algebra] ∎
