---
id: "rem-spectral-sequence-belongs-homological-algebra"
kind: "remark"
title: "Spectral-sequence algebra is external to this pair"
status: published
origin: pipeline
deps: [thm-cech-to-sheaf-cohomology-comparison, thm-leray-acyclic-cover-theorem, lem-acyclic-rows-and-columns-of-cech-double-complex]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Lemma 20.11.5 (tag 01ES, the Čech-to-cohomology spectral sequence) and Lemma 20.11.6 (tag 01ET, degeneration at E2 for an acyclic cover)"
---

## Remark

The Stacks Project proves the comparison between fixed-cover Čech cohomology and
sheaf cohomology in the form of a spectral sequence. For a ringed space $X$, an
open cover $\mathcal U$ of $X$ and a sheaf $\mathcal F$ of
$\mathcal O_X$-modules — in particular for the abelian sheaves on a topological
space that are used here — there is a spectral sequence
$(E_r,d_r)_{r\ge0}$, functorial in $\mathcal F$, with
$$E_2^{p,q}=\check H^p\bigl(\mathcal U,H^q(\mathcal F)\bigr)\quad\Longrightarrow\quad H^{p+q}(X,\mathcal F),$$
where $H^q(\mathcal F)$ denotes the presheaf $V\mapsto H^q(V,\mathcal F)$
(Stacks Project, Cohomology of Sheaves, Lemma 20.11.5, tag 01ES). The
acyclicity hypothesis of the Leray comparison enters there as a degeneration
statement: if $H^i(U_{i_0}\cap\cdots\cap U_{i_p},\mathcal F)=0$ for all $i>0$ and
all increasing tuples, then $E_2^{p,q}=0$ for $q\ne0$, the spectral sequence
degenerates at the $E_2$ page, and its edge map is the isomorphism
$\check H^p(\mathcal U,\mathcal F)\cong H^p(X,\mathcal F)$ (ibid., Lemma
20.11.6, tag 01ET).

Nothing of this machinery is constructed or invoked on this page, and the
acyclic-cover statement proved here as [[thm-leray-acyclic-cover-theorem]] does
not depend on it. The comparison map itself is built here from the
Čech–Godement double complex
([[thm-cech-to-sheaf-cohomology-comparison]]), and the acyclic-cover statement
is then obtained from [[lem-acyclic-rows-and-columns-of-cech-double-complex]]:
the two augmentations $u$ and $w$ of the double complex are shown to be
quasi-isomorphisms — the first from exactness of the rows, the second from the
acyclicity of the columns — by filtering the total complex and applying the
mapping-cone criterion, the total complex being formed on finite diagonals.

So the page replaces a spectral-sequence argument by an elementary
double-complex argument, and it asserts no spectral-sequence theorem of its own:
it neither constructs $E_2$-pages, degenerate pages or convergence, nor appeals
to a spectral-sequence theorem proved elsewhere. A consumer who needs the
general statement of Lemma 20.11.5 — for instance for a cover that is not
acyclic, where the comparison need not be an isomorphism — must take it from a
homological-algebra development of spectral sequences; it is cited here only to
record where the classical packaging of this comparison lives.
