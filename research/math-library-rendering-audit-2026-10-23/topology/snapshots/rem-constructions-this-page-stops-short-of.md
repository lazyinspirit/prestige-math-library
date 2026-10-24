---
id: rem-constructions-this-page-stops-short-of
kind: remark
title: "What the theory of these constructions still owes at this point in the reading order: preservation of quotient maps under products, separation beyond Hausdorff, and the invariants that tell the glued spaces apart"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [def-quotient-topology, def-product-topology, def-disjoint-union-topology,
       def-adjunction-cone-suspension, def-hausdorff-space,
       thm-product-universal-property, thm-coproduct-universal-property,
       lem-open-or-closed-surjection-is-quotient,
       def-hereditary-property, cor-metrizability-and-first-countability-are-hereditary,
       lem-product-topology-on-rn]
justified_by: []
aliases: []
landmark: false
short: "what this page leaves open"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 046bbd117fe6508ae9f03bfe523ce450b166f903d538d5077f4ab7ef98ed9bfb
    item_sha256: e9b9e080cfe2cf64df5e31e91732b47ad489f36c814136ecbc8be03b5d2596d1
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
    - title: "Separation axiom (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Separation_axiom"
    - title: "Homotopy (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Homotopy"
pipeline_run: null
---

This page builds three constructions, the product, the coproduct and the
quotient, proves the characteristic property of each, and develops further the
subspace topology introduced earlier in the reading order. Four questions that
a reader will ask immediately are deliberately left open, and this remark records
which they are and why. Each is a question whose answer needs vocabulary that is
not available at this point in the reading order; none of them is a defect of the
constructions.

**1. Is a product of quotient maps a quotient map?** If $q : X \to Y$ and
$q' : X' \to Y'$ are quotient maps ([[def-quotient-topology]]), is the map
$q \times q' : X \times X' \to Y \times Y'$ ([[def-product-topology]]) a quotient
map? It is a continuous surjection, and it is a quotient map when **both** $q$ and
$q'$ are open: the image of a basic open box $U \times U'$ under $q \times q'$ is
$q[U] \times q'[U']$ ([[def-product-topology]]), so $q \times q'$ is then an open
continuous surjection, and an open continuous surjection is a quotient map
([[lem-open-or-closed-surjection-is-quotient]], clause 1). That both factors are
open is not a convenience of the argument: **one of the two being open is not
enough**, and the standard counterexample is of exactly that shape, its second
factor being an identity map, which is open. In general, then, the answer is
*no*, and neither the standard counterexample nor the standard positive theorem
is stated here. The positive theorem takes the form "if $q$ is a quotient map and
$Z$ is suitably small, then $q \times \mathrm{id}_Z$ is a quotient map", and the
smallness condition it needs is a compactness condition, which is later in the
reading order. The counterexample that shows some such condition is necessary is a
nested construction over an enumeration of $\mathbb{Q}$, out of proportion to what
this page uses; nothing on this page or its companion depends on either.

**2. Separation beyond the Hausdorff condition.** [[def-hausdorff-space]] is
introduced here in its minimal form and for one purpose only: to state and refute
the claim that a quotient of a Hausdorff space is Hausdorff. The Hausdorff
condition is the second of a graded family of separation conditions, and the
questions that family raises, in particular which of its members are hereditary
in the sense of [[def-hereditary-property]] and which are preserved by products,
are not available at this point in the reading order. No statement on this page
anticipates any of them, and in particular nothing here asserts or denies that
any separation condition other than the Hausdorff one is hereditary.

**3. The invariants that would distinguish the glued spaces.**
[[def-adjunction-cone-suspension]] builds the adjunction space, the cone and the
suspension, and the companion page builds $\mathbb{R}/\mathbb{Z}$, the torus, the cylinder and
the Mobius band as quotients of an interval or a square. These are constructions,
not classifications. Deciding that two of them are *not* homeomorphic requires an
invariant, and the standard invariants for these particular spaces are
connectedness, compactness and the homotopy notions. None of the three is
available here in the form the question needs: connectedness and compactness are
developed earlier in the reading order only for subsets of $\mathbb{R}$ and for
metric spaces, neither of which covers a quotient that has not been shown
metrizable, and the homotopy notions are developed only later in the reading order.
Accordingly no item on this page or its companion
claims that two of these spaces differ; where two constructions are shown to agree,
an explicit homeomorphism is exhibited.

**4. Metrizability of a product.** [[cor-metrizability-and-first-countability-are-hereditary]]
shows that metrizability passes to subspaces. Whether it passes to products is a
different question, and this page answers it only in named instances, never in
general: [[lem-product-topology-on-rn]] metrises the product of $n$ copies of
$\mathbb{R}$, and the companion page metrises the Hilbert cube
$[0,1]^{\mathbb{N}}$ by the explicit
$\sum_k |x_k - y_k| / 2^{\,k+1}$, while its identification of $\{0,1\}^{\mathbb{N}}$
with the Cantor set metrises that product too, as a by-product of a homeomorphism
rather than as an aim. No general theorem about products of metrizable spaces is
stated here, in any number of factors, and the reader should not read any of these
instances as more than the single instance it is.

**One thing that is settled, and is worth separating from the four above.** The
coproduct raises no such question: a disjoint union of spaces is described
completely by its traces ([[def-disjoint-union-topology]]), maps out of it are
described completely by their restrictions
([[thm-coproduct-universal-property]]), and every summand sits inside it as a
clopen subspace. Everything a reader might want to know about
the coproduct at this point is proved on this page.
