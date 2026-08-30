---
id: cor-a-finite-group-with-an-irreducible-complex-character-of-degree-greater-than-one-is-nonabelian
kind: corollary
title: "A finite group with an irreducible complex character of degree greater than $1$ is nonabelian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one]
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 4.1.5"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
verification:
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Statement

If a finite group $G$ has an irreducible complex character $\chi$ with
$\chi(1)>1$, then $G$ is nonabelian.

## Facts & Assumptions

**Given:** A finite group $G$ with an irreducible complex character $\chi$ such
that $\chi(1)>1$.

[F1] A finite group is abelian if and only if all its irreducible complex
characters have degree $1$
([[thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ were abelian, then [F1] would force every irreducible complex character of $G$ to have degree $1$. [F1, given, assume-contra]

2.1 That contradicts the hypothesis $\chi(1)>1$. Therefore $G$ is nonabelian. [step 1.1, discharge-contradiction] ∎
