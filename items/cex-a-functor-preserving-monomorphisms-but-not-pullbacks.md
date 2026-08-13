---
id: cex-a-functor-preserving-monomorphisms-but-not-pullbacks
kind: counterexample
title: "A monotone functor between poset categories preserves every monomorphism but need not preserve pullbacks"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-pullbacks-and-pushouts, lem-canonical-comparison-characterises-limit-preservation, def-monomorphism-and-epimorphism, prop-preorders-as-categories-and-monotone-maps-as-functors]
justified_by: []
aliases: []
landmark: false
proof_strategy: finite-poset-counterexample
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references: []
pipeline_run: frontier-12
---

## Statement refuted

Every functor that preserves monomorphisms preserves pullbacks.

## Facts & Assumptions

**Given:** The diamond poset $P=\{0,a,b,1\}$ with
$0<a<1$, $0<b<1$, and $a,b$ incomparable; and the two-element chain
$Q=\{0<1\}$.

[F1] Pullbacks have the compatible-pair universal property
([[def-pullbacks-and-pushouts]]).

[L1] A functor preserves a chosen limit exactly when its canonical comparison
is an isomorphism ([[lem-canonical-comparison-characterises-limit-preservation]]).

[F2] Monomorphisms cancel on the left
([[def-monomorphism-and-epimorphism]]).

[F3] A poset is a category with at most one arrow between any two objects, and
monotone maps are functors
([[prop-preorders-as-categories-and-monotone-maps-as-functors]]).

## Counterexample

**Proof technique:** finite posets.

1.1 Define the monotone map $F:P\to Q$ by $F(0)=0$ and $F(a)=F(b)=F(1)=1$. By [F3] it is a functor. Every arrow in either poset category is monic, since two parallel arrows are automatically equal; hence $F$ preserves every monomorphism. [F2, F3]

1.2 In $P$, the pullback of $a\to1\leftarrow b$ is the meet $a\wedge b=0$, as follows directly from [F1] after translating arrows to inequalities. Its image is $0$. [F1, F3]

2.1 The image cospan in $Q$ is $1\to1\leftarrow1$, whose pullback is $1$. The canonical comparison is the noninvertible arrow $0\to1$, so [L1] says that $F$ does not preserve this pullback. This refutes the statement. [F1, L1, step 1.2] ∎
