---
id: ex-sheaf-locally-constant-functions
kind: example
title: "Locally constant functions form a sheaf and have constant stalks"
status: published
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sheaf-on-topological-space, def-stalk-of-presheaf, def-germ-of-section]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Definition 7.4"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Example

Fix a set $A$. For each open set $U\subseteq X$, let
$$\underline A_{\mathrm{loc}}(U):=\{f:U\to A \text{ locally constant}\}.$$
With the usual restriction maps, this is a sheaf of sets on $X$. For every
$x\in X$, evaluation at $x$ induces a canonical bijection
$$\underline A_{\mathrm{loc},x}\cong A.$$

## Facts & Assumptions

**Given:** A set $A$, an open set $U\subseteq X$, and a point $x\in X$.

[L1] The sheaf condition is locality and unique gluing on open covers
([[def-sheaf-on-topological-space]]).

[F1] The stalk at $x$ is the colimit of sections on neighbourhoods of $x$
([[def-stalk-of-presheaf]]).

[F2] The germ of a section is its class in that stalk
([[def-germ-of-section]]).

## Verification

**Proof technique:** direct.

1.1 Restriction preserves local constancy. If two locally constant functions on $U$ agree on an open cover, then they agree pointwise on $U$. If locally constant functions $f_i:U_i\to A$ are compatible on an open cover of $U$, the pointwise glued function $f$ is well defined and locally constant because near any point it agrees with one of the local functions $f_i$. Hence [L1] holds and $\underline A_{\mathrm{loc}}$ is a sheaf. [L1, given, construct]

2.1 Define $\epsilon_x:\underline A_{\mathrm{loc},x}\to A$ by $\epsilon_x([U,f])=f(x)$. This is well defined because equal germs agree on some neighbourhood of $x$, hence have the same value at $x$. Every $a\in A$ is the value at $x$ of the constant function $a$ on any neighbourhood of $x$, so $\epsilon_x$ is surjective. If $\epsilon_x([U,f])=\epsilon_x([V,g])$, then $f(x)=g(x)$. Since both functions are locally constant, there is a neighbourhood $W$ of $x$ on which $f$ and $g$ are both constantly this common value, so $[U,f]=[V,g]$. Therefore $\epsilon_x$ is bijective. [F1, F2, given] ∎
