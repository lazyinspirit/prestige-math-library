---
id: fs-canonical-factor-maps-into-every-group-pushout-are-injective
kind: false-statement
title: "FALSE: canonical factor maps into every group pushout are injective"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-kernels-of-amalgamating-maps-collapse-in-the-pushout, thm-group-pushout-as-an-amalgamated-quotient, prop-integers-modulo-n-as-a-quotient-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "George D. Torres, Combinatorial Group Theory, §2"
      url: "https://web.ma.utexas.edu/users/gdavtor/notes/comb_group_theory.pdf"
    - title: "B. H. Neumann, Lectures on Topics in the Theory of Infinite Groups, Ch. 9"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr21.pdf"
pipeline_run: null
---
## Statement

**False claim:** both canonical factor maps into every group pushout are injective.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] For a pushout of $f:K\to G$ and $h:K\to H$, $$i_H(h(\ker f))=\{e\},\qquad i_G(f(\ker h))=\{e\}.$$ Hence canonical factor maps in an arbitrary group pushout need not be injective. No equality with their full kernels is asserted. ([[prop-kernels-of-amalgamating-maps-collapse-in-the-pushout]]).

[L2] For homomorphisms $f:K\to G$ and $h:K\to H$, let $N$ be the normal closure in $G\ast H$ of $$\{j_G(f(k))j_H(h(k))^{-1}:k\in K\}.$$ Then $(G\ast H)/N$, with the induced factor maps $j_G$ and $j_H$, is a pushout of $f$ and $h$. ([[thm-group-pushout-as-an-amalgamated-quotient]]).

[L3] For every $n\in\mathbb N$, view $n$ as its canonical nonnegative integer and put $n\mathbb Z:=\{nk:k\in\mathbb Z\}$. Then the left cosets of $n\mathbb Z$ in $(\mathbb Z,+)$ are exactly the congruence classes modulo $n$, and coset addition is the published addition of congruence classes. Thus $$(\mathbb Z,+)/n\mathbb Z=(\mathbb Z/n,+)$$ as the same group on the same underlying set. This includes $n=0$ and $n=1$. ([[prop-integers-modulo-n-as-a-quotient-group]]).

## Refutation

**Proof technique:** direct.

1.1 Take $K=C_2$, $G=1$, $H=C_2$, with $f:K\to G$ trivial and $h:K\to H$ the identity. [given, L1, L2, L3]

2.1 The amalgamating relation kills the generator of $H$, so the quotient construction makes the pushout trivial. Equivalently, kernel collapse kills $h(\ker f)=H$. [step 1.1]

3.1 The canonical map $H=C_2\to1$ is not injective, refuting the claim. [step 2.1] ∎
