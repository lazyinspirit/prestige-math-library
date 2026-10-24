---
id: thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements
kind: theorem
title: "Irreducible Brauer characters are independent on p-regular elements"
status: published
origin: pipeline
deps: [lem-modular-trace-functions-of-simple-modules-are-linearly-independent, lem-modular-trace-depends-only-on-the-p-regular-part, lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces, def-discrete-valuation-ring]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Pound/Martin, Modular Representation Theory, Lemma 6.6, p.18"
      url: "https://ep455.user.srcf.net/pdfs/MRTnotes.pdf"
    - title: "Webb, A Course in Finite Group Representation Theory, Section 10.1 pp.169–171 and Theorem 10.2.2 p.176"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Fix a splitting $p$-modular system $(K,\mathcal O,k)$ for a finite group $G$. Brauer characters of pairwise nonisomorphic simple $kG$-modules are linearly independent over $K$ as functions on the $p$-regular elements, and remain so over every field extension of $K$. Their values also give independent complex functions under any fixed embedding of their cyclotomic value field into $\mathbb C$.

## Facts & Assumptions

**Given:** The splitting system and simple kG-modules in the Statement.

[F1] The modular trace functions of distinct split simple modules are independent on G ([[lem-modular-trace-functions-of-simple-modules-are-linearly-independent]]).

[F2] Modular trace at g equals modular trace at its p-regular part ([[lem-modular-trace-depends-only-on-the-p-regular-part]]).

[F3] Reduction of each lifted trace gives the modular trace on p-regular elements ([[lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces]]).

[F4] Integral coefficients have nonnegative discrete valuation ([[def-discrete-valuation-ring]]).

## Proof

1.1 Consider any finite relation $\sum_{i=1}^r c_i\varphi_i=0$ over $K$. If some coefficient is nonzero, let $b=\min_{c_i\ne0}v(c_i)$ and replace every $c_i$ by $\pi^{-b}c_i$. Then all coefficients lie in $\mathcal O$ and at least one has valuation zero, hence has nonzero residue. [F4, given, algebra]

2.1 Reduce the relation at every p-regular element. It becomes $\sum_i\bar c_i\operatorname{tr}(s|S_i)=0$. For arbitrary $g$, replace each trace by its trace at the same p-regular part $s$ of $g$. Thus $\sum_i\bar c_i\operatorname{tr}(g|S_i)=0$ for every $g\in G$. [F2, F3, step 1.1, algebra]

3.1 Since k splits G, modular trace independence forces every $\bar c_i=0$, contradicting step 1.1. Hence the original relation has all coefficients zero. This includes the empty family. [F1, step 1.1, step 2.1, algebra]

4.1 For any finite family the matrix of values on the finite p-regular set has independent columns. Successive elimination using nonzero pivots therefore supplies a square minor of full column size with nonzero determinant. That determinant remains nonzero under any field embedding, proving independence after extension. All entries lie in the subfield $E\subseteq K$ generated over $\mathbb Q$ by the finitely many lifted roots used here; these are roots of unity, so E is cyclotomic. The same minor lies in E and remains nonzero under a fixed embedding $E\to\mathbb C$. No embedding of all of K into C is assumed. [step 3.1, algebra] ∎
