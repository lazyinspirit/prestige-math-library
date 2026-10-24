---
id: ex-decomposition-inertia-in-a-quadratic-field
title: "Decomposition inertia in a quadratic field"
kind: example
status: published
origin: pipeline
deps: [cor-galois-prime-decomposition-efg, cor-orders-of-decomposition-and-inertia-groups, thm-frobenius-order-is-residue-degree]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a79.2.1 and \u00a79.3.2"
      url: https://wstein.org/books/ant/ant.pdf
proof_strategy: direct argument
---

## Example

In a quadratic Galois extension of number fields, let $G=C_2$. For any nonzero base prime the three possibilities are:
split: $(e,f,g)=(1,1,2)$, $D=I=1$, Frobenius identity;
inert: $(1,2,1)$, $D=C_2$, $I=1$, Frobenius the nonidentity element;
ramified: $(2,1,1)$, $D=I=C_2$, arithmetic Frobenius coset identity in D/I.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[cor-galois-prime-decomposition-efg]]: For a finite Galois extension L/K and nonzero prime p, every P above p has the same ramification index e and residue degree f. If there are g such primes, then $efg=[L:K]$.

[F2] [[cor-orders-of-decomposition-and-inertia-groups]]: For finite Galois L/K and nonzero $P\mid p$, writing e and f for its ramification index and residue degree, $|D(P/p)|=ef,\qquad |I(P/p)|=e,\qquad |D(P/p)/I(P/p)|=f.$ The prime P is unramified over p if and only if its inertia group is trivial.

[F3] [[thm-frobenius-order-is-residue-degree]]: For finite Galois L/K and nonzero $P\mid p$, the arithmetic Frobenius coset has order $f(P/p)$ in D/I. If P is unramified, $\operatorname{Frob}_P$ has the same order in D.

## Verification

1.1 Positive integers e,f,g with efg=2 have exactly the three displayed triples: the single factor 2 occurs in exactly one coordinate. These correspond respectively to split, inert, and ramified ideal factorizations. [F1]

2.1 The formulas $|D|=ef$ and $|I|=e$ determine the subgroups, since $C_2$ has only its identity subgroup and itself. For e=1 the Frobenius order is f, giving identity in the split case and the unique element of order two in the inert case. In the ramified case D/I has order f=1, so the residue coset is identity; there is no assertion of a unique lift. [F2, F3, step 1.1] ∎
