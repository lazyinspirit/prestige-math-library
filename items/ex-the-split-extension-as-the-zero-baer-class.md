---
id: ex-the-split-extension-as-the-zero-baer-class
kind: example
title: "The split extension as the zero Baer class"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-split-extension-class, thm-baer-sum-makes-extension-classes-an-abelian-group]
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Example

Compute the Baer sum of a split extension with an arbitrary extension and exhibit the induced equivalence with the original representative.

## Facts & Assumptions

**Given:** An extension $e:0\to N\xrightarrow{i}E\xrightarrow{p}M\to0$ and the split extension $s:0\to N\to N\oplus M\to M\to0$.

## Verification

**Proof technique:** direct.

1.1 The pullback of $e\oplus s$ along $\Delta:M\to M\oplus M$ is canonically $E\oplus N$: the morphism $(1_E,\,1_N\oplus p):E\oplus N\to E\oplus(N\oplus M)$ exhibits the pullback. Under this identification its kernel map is $(a,b)\mapsto(i(a),b)$ from $N\oplus N$. [given, construct]

2.1 The morphism $(1_E,i):E\oplus N\to E$ agrees on that kernel with $i\circ\nabla:N\oplus N\to E$. Hence the universal property of the pushout along $\nabla$ gives a morphism from the Baer-sum middle object to $E$ that is the identity on both endpoints. A morphism of short exact sequences that is the identity on the endpoints is an isomorphism, so the sum is equivalent to $e$. Thus the split class is zero without using elements or module quotients. [step 1.1, algebra] ∎
