---
id: def-set-theoretic-l-and-s-spaces
kind: definition
title: L-spaces, S-spaces, and strong S-spaces
status: draft
origin: pipeline
deps:
  - def-regular-and-t3-spaces
  - def-hausdorff-space
  - def-separable-space
  - def-compactness-variants
  - def-hereditary-property
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 7, printed p. 21"
      url: https://arxiv.org/pdf/math/0501524
    - title: "Hart and Kunen, Ultra Strong S-Spaces, Section 1, printed p. 1"
      url: https://www.uwosh.edu/faculty_staff/hartj/ultra.pdf
---

## Definition

A topological space is **hereditarily separable** when every one of its
subspaces is separable, and it is **hereditarily Lindelöf** when every one of
its subspaces is Lindelöf.  Here every subset carries its subspace topology,
as in [[def-hereditary-property]]; separability and Lindelöfness have the
meanings in [[def-separable-space]] and [[def-compactness-variants]].

Using this library's convention that regularity does not itself include any
separation axiom, a space is

- an **L-space** if it is regular and Hausdorff, hereditarily Lindelöf, and
  nonseparable;
- an **S-space** if it is regular and Hausdorff, hereditarily separable, and
  not Lindelöf; and
- a **strong S-space** if every nonempty finite power is an S-space.

Thus a strong S-space is itself an S-space (take the first power), and every
finite power of a strong S-space is hereditarily separable.  Empty powers are
not part of the definition: the zeroth power is a singleton, hence Lindelöf
and not an S-space, so including it would make the notion impossible.

The regular-plus-Hausdorff clause implies $T_3$ under the conventions of
[[def-regular-and-t3-spaces]] and [[def-hausdorff-space]].  It is nevertheless
written in the literature's customary form so that regularity is not silently
given a different meaning.

Some sources call any regular Hausdorff, hereditarily separable but not
hereditarily Lindelöf space an S-space.  The two conventions have the same
existence content: under that broader wording, choose a subspace that is not
Lindelöf; regularity, Hausdorffness, and hereditary separability pass to that
subspace, which is an S-space in the definition above.  Conversely, a space
that is not Lindelöf is certainly not hereditarily Lindelöf.  We keep the
narrower definition rather than silently exchanging the two statements.

These definitions make no choice.  Later assertions that construct examples
simultaneously along $\omega_1$, or that use PFA or CH in ZFC, declare those
axioms at the point of use.
