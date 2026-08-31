---
id: thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible
kind: theorem
title: "A chain map is a homotopy equivalence exactly when its cone is contractible"
status: draft
origin: pipeline
landmark: true
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-chain-homotopy-equivalence, def-contractible-complex, def-mapping-cone-of-a-chain-map, def-chain-homotopy, prop-cones-preserve-chain-homotopy-equivalences-of-arrows, thm-the-cone-of-an-identity-map-is-contractible]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 13.9: Cones and termwise split sequences"
      url: "https://stacks.math.columbia.edu/tag/014D"
pipeline_run: frontier-26
---

## Statement

Let $f:C_\bullet\to D_\bullet$ be a chain map. Then $f$ is a chain homotopy
equivalence if and only if $\operatorname{Cone}(f)$ is contractible.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] A chain homotopy equivalence is a chain map with a homotopy inverse ([[def-chain-homotopy-equivalence]]).

[L2] A complex is contractible exactly when its identity is null-homotopic ([[def-contractible-complex]]).

[L3] A chain homotopy is a degree-one family whose commutator with the differential gives the difference of chain maps ([[def-chain-homotopy]]).

[L4] The cone differential is $$d(y,x)=(d^D(y)+f(x),-d^C(x))$$ ([[def-mapping-cone-of-a-chain-map]]).

[L5] Cones preserve chain-homotopy equivalences of arrows ([[prop-cones-preserve-chain-homotopy-equivalences-of-arrows]]).

[L6] The cone of an identity map is contractible ([[thm-the-cone-of-an-identity-map-is-contractible]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $f$ has homotopy inverse $g$. Apply [L5] to the arrow comparison from $f:C_\bullet\to D_\bullet$ to $1_D:D_\bullet\to D_\bullet$ using $u=f$, $v=1_D$, the trivial homotopy $1_Df\simeq1_Df$, and the given homotopy $fg\simeq1_D$. This gives a chain-homotopy equivalence $$\Phi:\operatorname{Cone}(f)\to\operatorname{Cone}(1_D).$$ By [L6], the target cone is contractible; the second sentence of [L2] then shows that $\operatorname{Cone}(f)$ is contractible as well. [L1, L2, L5, L6, given, algebra]

2.1 Conversely, suppose $\operatorname{Cone}(f)$ is contractible. By [L2] and [L3], choose a degree-one endomorphism $H$ of $\operatorname{Cone}(f)$ with $$dH+Hd=1_{\operatorname{Cone}(f)}.$$ Write $$H_n(y,x)=\bigl(a_n(y)+b_{n-1}(x),g_n(y)+u_{n-1}(x)\bigr),$$ where $a_n:D_n\to D_{n+1}$, $b_{n-1}:C_{n-1}\to D_{n+1}$, $g_n:D_n\to C_n$, and $u_{n-1}:C_{n-1}\to C_n$. Expanding $dH+Hd=1$ with [L4] and comparing the bottom-left, bottom-right, and top-left components gives $$g_{n-1}d_n^D=d_n^Cg_n,\qquad g_{n-1}f_{n-1}-d_n^Cu_{n-1}-u_{n-2}d_{n-1}^C=1_{C_{n-1}},$$ $$d_{n+1}^Da_n+a_{n-1}d_n^D+f_ng_n=1_{D_n}.$$ Thus $g$ is a chain map, $u$ is a homotopy $gf\simeq1_C$, and $-a$ is a homotopy $fg\simeq1_D$. Therefore $g$ is a homotopy inverse of $f$, so [L1] makes $f$ a chain homotopy equivalence. [L1, L2, L3, L4, given, construct, algebra] ∎
