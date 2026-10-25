---
id: ex-presentation-of-the-symmetric-group-on-three-letters
kind: example
title: '$\operatorname{Sym}(\{0,1,2\})\cong\langle s,t\mid s^2,\ t^2,\ (st)^3\rangle$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-group-presentation, thm-von-dyck, def-symmetric-group, lem-symmetric-group-is-a-group, thm-number-of-bijections-of-a-finite-set, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Presentation"
      url: "https://encyclopediaofmath.org/wiki/Presentation"
pipeline_run: null
---

## Example

With rightmost-first composition and transpositions
$s=(0\,1)$ and $t=(1\,2)$,

$$\operatorname{Sym}(\{0,1,2\})\cong\langle s,t\mid s^2,\ t^2,\ (st)^3\rangle.$$

## Facts & Assumptions

**Given:** The set $A=\{0,1,2\}$, the permutations $s=(0\,1)$ and $t=(1\,2)$, and the presentation $P=\langle s,t\mid s^2,t^2,(st)^3\rangle$.

[L1] If a finite set $A$ has $n$ elements, then the set of its bijections has cardinality $n!$ ([[thm-number-of-bijections-of-a-finite-set]]).

[L2] A map of generators that sends every relator to the identity extends uniquely to a homomorphism from the presented group ([[thm-von-dyck]]).

## Verification

**Proof technique:** constructive.

1.1 Direct permutation computation gives $s^2=t^2=\operatorname{id}$ and $(st)^3=\operatorname{id}$, so [L2] constructs a homomorphism $\pi:P\to\operatorname{Sym}(A)$. [L2, construct]

1.2 After cancelling $s^2$ and $t^2$, every word alternates. The relation $(st)^3=e$ gives $stst=ts$ and hence $tst=sts$ after multiplying on the left by $s$; replacing the first three letters of any alternating word of length at least four by the other side creates an adjacent equal pair and shortens the word. [given]

1.3 Their images are respectively $\operatorname{id},(0\,1),(1\,2),(0\,1\,2),(0\,2\,1),(0\,2)$, so they are distinct; [L1] gives $|\operatorname{Sym}(A)|=3!=6$, and these images exhaust it. [L1, given]

2.1 Repeating step 1.2 leaves one of $e,s,t,st,ts,sts$, since the two alternating words of length three are equal. [step 1.2]

3.1 Step 2.1 gives at most six elements in $P$, while step 1.3 gives six distinct images under $\pi$; hence $\pi$ is bijective and is the claimed isomorphism. [step 1.1, step 1.3, step 2.1, discharge-construct] ∎
