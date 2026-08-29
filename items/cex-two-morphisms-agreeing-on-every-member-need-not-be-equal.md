---
id: cex-two-morphisms-agreeing-on-every-member-need-not-be-equal
kind: counterexample
title: "Two morphisms agreeing on every member need not be equal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-each-object-has-a-zero-member-and-each-member-has-a-negative,
       prop-a-morphism-carries-members-to-members-and-preserves-equivalence,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement refuted

If two morphisms $f,g:A \to B$ satisfy
$$f x \equiv g x$$
for every member $x$ of $A$, then $f = g$.

## Facts & Assumptions

**Given:** The abelian category $\mathbf{Ab}$ and the two endomorphisms
$1_{\mathbb Z}, -1_{\mathbb Z} : \mathbb Z \to \mathbb Z$.

[L1] The category $\mathbf{Ab}$ is abelian
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] Every member has a negative, and equivalence to zero is literal equality
([[prop-each-object-has-a-zero-member-and-each-member-has-a-negative]]).

## Counterexample

**Proof technique:** direct.

1.1 Let $x:X \to \mathbb Z$ be any member. Then $(-1_{\mathbb Z}) x = x (-1_X)$, and the automorphism $-1_X$ is epic. Therefore $1_{\mathbb Z} x \equiv (-1_{\mathbb Z}) x$. [L1, L2, algebra]

1.2 Nevertheless $1_{\mathbb Z} \neq -1_{\mathbb Z}$, since they send $1 \in \mathbb Z$ to different integers. So memberwise equivalence of composites does not force equality of the morphisms themselves. [L1, algebra]

2.1 This refutes the statement. [step 1.1, step 1.2] ∎
