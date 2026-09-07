---
id: ex-sum-check-three-variable-transcript
kind: example
title: "A complete sum-check transcript over F_101"
status: draft
origin: pipeline
deps: [def-sum-check-instance-and-protocol, thm-sum-check-soundness]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), \u00a74.1 Example Execution pp.36\u201337"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Example

Over $\mathbb F_{101}$ let $g(X,Y,Z)=2X^3+XZ+YZ$, with individual bounds $(3,1,1)$ and claimed sum $H=12$. An honest transcript with successive challenges $2,3,6$ has messages
$$h_1(X)=8X^3+2X+1,\qquad h_2(Y)=34+Y,\qquad h_3(Z)=16+5Z.$$
The successive scalar claims are $69,37,46$, and the terminal equality holds. For this polynomial, a false initial sum claim is accepted with probability at most $5/101$ by the randomized protocol; a displayed fixed challenge sequence alone is not a soundness proof.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Honest messages are partial cube sums, with coefficient, endpoint-consistency and terminal checks ([[def-sum-check-instance-and-protocol]]).

[F2] For any false initial claim, acceptance is at most min(1,sum_i d_i/|F|) under fresh independent challenges and trusted evaluation ([[thm-sum-check-soundness]]).

## Verification

1.1 Sum $g$ over Boolean $Y,Z$ to obtain $q_1(X)=8X^3+2X+1$. Then $q_1(0)+q_1(1)=1+11=12$ and $q_1(2)=64+4+1=69$. This also computes the cube sum by splitting over $X$. [F1, algebra]

2.1 After $r_1=2$, sum $g(2,Y,Z)$ over $Z=0,1$: $q_2(Y)=16+(16+2+Y)=34+Y$. Its endpoint sum is $34+35=69$, and its value at $r_2=3$ is $37$. [F1, step 1.1, algebra]

3.1 With that prefix $q_3(Z)=g(2,3,Z)=16+5Z$. Its endpoint sum is $16+21=37$. At $r_3=6$ its value is $46$, also $g(2,3,6)=16+12+18=46$. The coefficient lists have lengths $4,2,2$ and the degrees meet $(3,1,1)$, so all checks pass modulo 101. [F1, step 2.1, algebra]

4.1 For any false initial claim the soundness theorem applies to the fixed polynomial and trusted degree bounds, giving error at most $(3+1+1)/101=5/101$ over fresh independent challenges. It asserts this for all adaptive provers, separately from the honest transcript just computed. [F2, algebra] ∎
