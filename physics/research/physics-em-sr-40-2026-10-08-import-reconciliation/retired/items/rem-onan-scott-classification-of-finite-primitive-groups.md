---
id: rem-onan-scott-classification-of-finite-primitive-groups
kind: remark
title: "The O'Nan-Scott classification of finite primitive groups (recorded)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-supplied
deps: [def-affine-almost-simple-diagonal-product-action-and-twisted-wreath-types]
landmark: true
proved_here: false
external_dependency:
  source_url: "https://doi.org/10.1017/S144678870003216X"
  exact_statement: "Every finite primitive permutation group is permutation equivalent to one of LPS types I, II, III(a), III(b), or III(c)."
  local_proof_attempt: "The preceding local argument took the entire five-type existence and exclusivity assertion as [A2], so it did not prove the classification."
  necessity: "A complete local derivation must supply the case analysis, including the two Schreier-dependent branches on LPS printed pp. 394–396, or an alternative proof of the same exact five-type claim."
sources:
  scraped: []
  references:
    - title: "M. W. Liebeck, C. E. Praeger and J. Saxl, On the O'Nan-Scott Theorem for Finite Primitive Permutation Groups, J. Austral. Math. Soc. Ser. A 44 (1988), 389–396"
      url: "https://doi.org/10.1017/S144678870003216X"
    - title: "Leonard H. Soicher, Primitive permutation groups, section 'The O'Nan-Scott theorem'"
      url: "https://web.archive.org/web/20180712185154if_/http://www.maths.qmul.ac.uk:80/~lsoicher/designtheory.org/library/encyc/topics/primitive.pdf"
verification:
  precheck: n/a
  sources_checked:
    date: '2026-09-24'
    scope: Cited statement and missing local prerequisite examined; no proof-completion
      verdict. See /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl
    by: agent-06 (owner-delegated GPT-6-Sol xhigh)
---

## Statement

Every finite primitive permutation group of degree at least $2$ belongs to exactly one of the five
coarse O'Nan-Scott types used on this page: affine, almost simple, diagonal,
product action, or twisted wreath.

## Source status

Liebeck–Praeger–Saxl (LPS), printed p. 392, states the five-branch theorem in
the convention used here. Its proof on pp. 392–396 is a genuine case analysis,
not a consequence merely of the socle split or of the five definitions. The
previous local [A2] assumed exactly the theorem to be proved.

In Case 2(a), printed p. 394, LPS uses solvability of outer automorphism
groups of finite simple groups (the Schreier theorem) to prove the kernel
$Y$ of the factor action equals the socle $M$; this is needed to identify the
twisted-wreath action. At the end, printed pp. 395–396, it uses Schreier again
to exclude a regular simple socle in the almost-simple branch and to complete
the product-action branch. The complete local proof of these steps, or an
alternative exact five-type proof, is still missing. This item therefore
records the cited classification without claiming it is proved here.
