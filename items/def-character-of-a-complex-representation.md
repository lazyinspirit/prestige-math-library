---
id: def-character-of-a-complex-representation
kind: definition
title: "The character $\\chi_V(g)=\\operatorname{tr}(\\rho_V(g))$ of a finite-dimensional complex representation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-trace-of-an-endomorphism]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Proposition 3.1.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Definition

Let $\rho:G\to\operatorname{GL}(V)$ be a finite-dimensional complex
representation ([[def-finite-dimensional-representation-of-a-group-over-a-field]]).
Its **character** is the function

$$\chi_V:G\longrightarrow\mathbb C,\qquad \chi_V(g):=\operatorname{tr}\!\bigl(\rho_V(g)\bigr),$$

where the trace is the basis-independent trace of an endomorphism
([[def-trace-of-an-endomorphism]]); one writes $\chi_\rho$ or $\chi$ when the
representation or the group is fixed.

The definition is well posed in two senses, recorded here because both are used
throughout the page. First, the value does not depend on a choice of basis of
$V$: matrices of one endomorphism in two ordered bases are similar, and similar
matrices have equal trace
([[def-trace-of-an-endomorphism]]). Second, equivalent representations have
equal characters: if $T:V\to W$ is an invertible intertwiner, then
$\rho_W(g)=T\rho_V(g)T^{-1}$, so
$\operatorname{tr}(\rho_W(g))=\operatorname{tr}(\rho_V(g)T^{-1}T)=\operatorname{tr}(\rho_V(g))$
by the identity $\operatorname{tr}(AB)=\operatorname{tr}(BA)$
([[thm-trace-of-ab-equals-trace-of-ba]]). Thus the character depends only on the
equivalence class of the representation.
