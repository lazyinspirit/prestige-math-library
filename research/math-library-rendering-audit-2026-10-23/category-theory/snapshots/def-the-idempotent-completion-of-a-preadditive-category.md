---
id: def-the-idempotent-completion-of-a-preadditive-category
kind: definition
title: "The idempotent completion of a preadditive category"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-preadditive-category, def-idempotent-and-split-idempotent]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Dixy Msapato, The Karoubi envelope and weak idempotent completion of an extriangulated category, Definition 2.3"
      url: "https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf"
pipeline_run: frontier-20
---

## Definition

Let $\mathcal C$ be preadditive. Its **idempotent completion**
$\operatorname{Kar}(\mathcal C)$ has:

- objects: pairs $(A,e)$ with $A\in\mathcal C$ and $e:A\to A$ idempotent;
- morphisms $(A,e)\to(B,f)$: morphisms $u:A\to B$ in $\mathcal C$ satisfying
  $fue=u$;
- composition: inherited from $\mathcal C$; and
- identity on $(A,e)$: the morphism $e$ itself.

The hom-set condition $fue=u$ is equivalent to $fu=u=ue$, so each hom-set is a
subgroup of the ambient hom-group of [[def-preadditive-category]].

The inherited composition is closed: if $u=fue$ and $v=gvf$, then
$$g(vu)e=gvfue=vu.$$
Moreover $fu=u=ue$ shows that the proposed identities $e$ and $f$ act as
identities on every such $u$. Thus the displayed data do form a category.
