---
id: rem-coherent-needs-noetherian-or-coherent-ring-care
kind: remark
title: "Finite type need not mean coherent"
status: published
origin: pipeline
deps:
  - def-coherent-module-scheme
  - thm-coherent-sheaves-abelian-noetherian-scheme
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Cohomology of Schemes §30.9"
      url: "https://stacks.math.columbia.edu/tag/01XY"
    - title: "The Stacks Project, Properties of Schemes, §§28.20, 28.26"
      url: "https://stacks.math.columbia.edu/download/properties.pdf"
pipeline_run: frontier-36-complete
---

## Remark

Assume the Axiom of Choice as inherited by the coherence theory
([[def-coherent-module-scheme]],
[[thm-coherent-sheaves-abelian-noetherian-scheme]]). The theorem that coherent
coincides with finite type
([[thm-coherent-sheaves-abelian-noetherian-scheme]]) is a statement about
locally Noetherian schemes, and its proof uses the Noetherian hypothesis on the
affine charts. It is not a definition, and it does not extend to arbitrary
bases: over a general scheme, finite type, and even finite presentation or
finite local freeness, do not by themselves imply coherence, and the
relation-kernel condition in the definition of coherence
([[def-coherent-module-scheme]]) is a genuine additional hypothesis that must
be checked.

The warning is not formal. The definition carries an explicit example: for
$A=k[x,y_1,y_2,\dots]/(xy_i,\;y_iy_j:\ i,j\ge1)$ the module $A$ is free of
rank one, hence of finite type and finitely presented, but the kernel of
multiplication by $x$, viewed as the $A$-linear endomorphism $\psi:A\to A$, is
$\operatorname{Ann}_A(x)=\bigoplus_{i\ge1}k[x]y_i$, which is not finitely
generated; the associated morphism $\mathcal O_X\to\mathcal O_X$ on
$X=\operatorname{Spec}A$ therefore has a kernel that is not of finite type, and
$\mathcal O_X$ is not coherent on $X$
([[def-coherent-module-scheme]],
[[thm-coherent-sheaves-abelian-noetherian-scheme]]).

Consequences for consumers of this page:

- an implication "finite type $\Rightarrow$ coherent" may be invoked only on a
  locally Noetherian scheme, where it is the theorem above;
- a finitely presented module over a non-Noetherian ring needs a separate
  argument for the kernel condition before its associated sheaf may be called
  coherent;
- a locally free sheaf of finite rank over a non-Noetherian scheme need not be
  coherent, so coherence hypotheses must be stated explicitly when
  Noetherianness is dropped;
- the theorem's locally Noetherian hypothesis is used in an essential way, and
  the example above shows that it cannot simply be deleted.
