---
id: def-isotypic-component-of-a-completely-reducible-representation
kind: definition
title: "The isotypic component of a completely reducible representation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-completely-reducible-representation, def-subrepresentation-and-irreducible-representation, def-intertwiner-equivalent-and-faithful-representations]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Corollary 1.2.7"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Proposition 2.2"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a completely reducible representation of a group $G$ over a field
$k$, and let $S$ be an irreducible representation of $G$ over $k$. The
**isotypic component of $V$ of type $S$** is

$$
V_{(S)}:=\sum \{U \le V : U \text{ is an irreducible subrepresentation equivalent to } S\}.
$$

If no irreducible subrepresentation of $V$ is equivalent to $S$, this sum is
$0$.

Only the equivalence class of $S$ matters: if $S \cong S'$, then the defining
collections of irreducible subrepresentations are the same, so
$V_{(S)}=V_{(S')}$.
