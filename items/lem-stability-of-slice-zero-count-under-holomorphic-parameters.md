---
id: lem-stability-of-slice-zero-count-under-holomorphic-parameters
kind: lemma
title: "Nearby slices of a regular germ have the same zero count"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-holomorphic-germ, prop-holomorphic-functions-are-continuous-and-separately-holomorphic, thm-rouche-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, Section 6.3"
      url: "https://jirilebl.github.io/scv/scv.pdf"
    - title: "Jaap Korevaar and Jan Wiegerinck, Several Complex Variables, Section 4.4"
      url: "https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf"
pipeline_run: frontier-22
---

## Statement

Let $f\in\mathcal O_{m,0}$ be regular in $z_m$ of order $d$. Then there are a
representative of $f$ on a neighbourhood of $0$, a radius $r>0$, and a
neighbourhood $V\subseteq\mathbb C^{m-1}$ of $0$ such that, for every
$z'\in V$, the one-variable slice $\zeta\mapsto f(z',\zeta)$ has no zero on
$|\zeta|=r$ and has exactly $d$ zeros inside $|\zeta|<r$, counted with
multiplicity.

## Facts & Assumptions

**Given:** A germ $f\in\mathcal O_{m,0}$ that is regular in $z_m$ of order $d$.

[L1] Regularity of order $d$ means that on the central slice one has $f(0,\zeta)=\zeta^d h(\zeta)$ with $h$ holomorphic and $h(0)\ne0$ ([[def-regular-holomorphic-germ]]).

[L2] Holomorphic functions are continuous ([[prop-holomorphic-functions-are-continuous-and-separately-holomorphic]]).

[L3] If two holomorphic one-variable functions satisfy $|f-g|<|g|$ on a closed contour, they have the same number of zeros inside, counted with multiplicity ([[thm-rouche-theorem]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], choose a representative on a neighbourhood of $0$ for which $f(0,\zeta)=\zeta^d h(\zeta)$ and $h(0)\ne0$. By continuity from [L2], after shrinking there is $r>0$ such that $h(\zeta)\ne0$ on $|\zeta|\le r$. Hence the central slice has no zero on $|\zeta|=r$ and exactly the order-$d$ zero at $\zeta=0$ inside $|\zeta|<r$. [given, L1, L2, choose]

2.1 The compact set $\{0\}\times\{|\zeta|=r\}$ is contained in the domain of the chosen representative, and step 1.1 gives $|f(0,\zeta)|>0$ there. By continuity from [L2], after shrinking the $z'$-neighbourhood to some $V$ we have $$|f(z',\zeta)-f(0,\zeta)|<|f(0,\zeta)|\qquad(z'\in V,\ |\zeta|=r).$$ Then [L3] applied to the functions $\zeta\mapsto f(z',\zeta)$ and $\zeta\mapsto f(0,\zeta)$ shows that each nearby slice has the same zero count $d$ inside $|\zeta|<r$. The strict boundary inequality also makes $f(z',\zeta)\ne0$ on $|\zeta|=r$. [step 1.1, L2, L3] ∎
