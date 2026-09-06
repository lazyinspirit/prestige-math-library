---
id: def-pullback-and-pushout-of-an-extension
kind: definition
title: "Pullback and pushout of an extension"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extension-of-an-object-by-an-object-in-an-abelian-category, def-pullbacks-and-pushouts, lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms]
verification:
  audited: 2026-09-06
  precheck: n/a
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
## Definition

Let
$$
\xi:\qquad 0\longrightarrow N\xrightarrow{i}E\xrightarrow{p}M\longrightarrow0
$$
be an extension in an abelian category.

For a morphism $f:M'\to M$, the **pullback extension** $f^*\xi$ is
$$0\longrightarrow N\xrightarrow{i'}E\times_M M'\xrightarrow{q_2}M'\longrightarrow0,$$
where $q_1:E\times_M M'\to E$ and $q_2:E\times_M M'\to M'$ are the
pullback projections of $p$ and $f$, and $i'$ is the unique map satisfying
$q_1i'=i$ and $q_2i'=0$. Thus pullback is contravariant in the quotient
variable.

For a morphism $g:N\to N'$, the **pushout extension** $g_*\xi$ is
$$0\longrightarrow N'\xrightarrow{j_{N'}}N'\amalg_N E\xrightarrow{p'}M\longrightarrow0,$$
where $j_E:E\to N'\amalg_N E$ and $j_{N'}:N'\to N'\amalg_N E$ are the
pushout maps of $i$ and $g$, and $p'$ is the unique map satisfying
$p'j_E=p$ and $p'j_{N'}=0$. For modules the pushout is
$(N'\oplus E)/\langle(g(n),-i(n)):n\in N\rangle$. Thus pushout is
covariant in the subobject variable. The two displayed sequences are exact
because pullbacks preserve kernels of epimorphisms and pushouts preserve
cokernels of monomorphisms in an abelian category.
