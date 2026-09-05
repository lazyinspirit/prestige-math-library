---
id: thm-function-field-independent-affine-open
kind: theorem
title: "All nonempty affine opens of an irreducible affine variety have the same function field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-affine-open-subset-classical-variety, def-function-field-variety, thm-affine-variety-prime-coordinate-ring, thm-coordinate-ring-principal-open]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, Corollary 1.6.4 and §3.1"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, Proposition 2.6.1 and Definition 3.4.3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

Let $X$ be a classical affine variety. If $U \subseteq X$ is a nonempty affine
open subset, then
$$ \operatorname{Frac}(k[U])\cong k(X) $$
canonically. Hence any two nonempty affine opens of $X$ have canonically
isomorphic function fields.

## Facts & Assumptions

**Given:** The Axiom of Choice, a classical affine variety $X$, and a nonempty affine open subset $U \subseteq X$.

[L1] On this page, an affine open subset of $X$ is a principal open $D_X(\overline f)$, and its coordinate ring is $\mathcal O_X(U)$ ([[def-affine-open-subset-classical-variety]]).

[L2] Assuming the Axiom of Choice, for a principal open $D_X(\overline f)$, the coordinate ring is $k[X]_{\overline f}$ ([[thm-coordinate-ring-principal-open]]).

[L3] The coordinate ring $k[X]$ of a classical affine variety is an integral domain ([[thm-affine-variety-prime-coordinate-ring]]).

[L4] The function field of $X$ is $\operatorname{Frac}(k[X])$ ([[def-function-field-variety]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], write $U=D_X(\overline f)$. Since $U$ is nonempty, the element $\overline f$ is not zero in the domain $k[X]$ of [L3]. By [L2], the coordinate ring of $U$ is $k[X]_{\overline f}$. [L1, L2, L3, given]

2.1 Every fraction in $k[X]_{\overline f}$ is represented by $a/\overline f^{\,n}$ with $a \in k[X]$. Sending that fraction to the same formal quotient in $\operatorname{Frac}(k[X])$ defines an injective ring map $k[X]_{\overline f}\hookrightarrow \operatorname{Frac}(k[X])$. Conversely, if $a/b \in \operatorname{Frac}(k[X])$ with $b \ne 0$, then $b/1$ is nonzero in the domain $k[X]_{\overline f}$, so the same quotient may be read as an element of $\operatorname{Frac}(k[X]_{\overline f})$. Hence each field of fractions contains the other in the obvious way. [L3, step 1.1, algebra]

3.1 Step 2.1 gives $\operatorname{Frac}(k[U])=\operatorname{Frac}(k[X]_{\overline f})\cong \operatorname{Frac}(k[X])=k(X)$ by [L2] and [L4]. Therefore every nonempty affine open of $X$ has the same function field as $X$, and any two such opens have canonically isomorphic function fields. [L2, L4, step 2.1] ∎
