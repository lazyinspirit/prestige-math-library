---
id: thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies
kind: theorem
title: "Termwise Hochschild homology respects bimodule chain homotopies"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-termwise-hochschild-homology-complex-and-iterated-homology
  - def-chain-homotopy
  - thm-a-chain-map-induces-a-well-defined-map-on-homology
  - def-hochschild-chain-complex-of-a-bimodule
  - def-cohomology-object-of-a-cochain-complex
  - def-enveloping-algebra-and-bimodule-module-dictionary
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - thm-chain-homotopic-maps-induce-the-same-map-on-homology
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §3.8.6, printed p.38"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "§3.8.6: the termwise Hochschild complex of a complex of bimodules and its functoriality in the coefficient complex."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1, printed pp.300–304"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "§9.1.1–9.1.5: $HH_j$ as a functor of the coefficient bimodule, additive in direct sums."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 1, §1.4, Lemma 1.4.5, printed p.17"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
      locator: "Homotopic chain maps induce the same map on homology."
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $k$ be a field, let $A$ be a unital associative $k$-algebra, and let
$F=(F^i,d_F^i)$ and $G=(G^i,d_G^i)$ be bounded cochain complexes of
$k$-central $A$-bimodules with differentials of internal degree zero
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).
Let $f,g:F\to G$ be bimodule-linear cochain maps of cochain degree zero and
let $h:F\to G$ be a bimodule-linear cochain homotopy of cochain degree $-1$
with
$$f-g=d_Gh+h\,d_F$$
on $F^\bullet$ ([[def-chain-homotopy]]).

Then for every $j\geq0$ the induced maps
$HH_j(A,f),HH_j(A,g):HH_j(A,F^\bullet)\to HH_j(A,G^\bullet)$ on the termwise
Hochschild complexes of
[[def-termwise-hochschild-homology-complex-and-iterated-homology]] are
cochain-homotopic; the homotopy is induced by
$HH_j(A,h):HH_j(A,F^i)\to HH_j(A,G^{i-1})$, and hence $HH_j(A,f)$ and
$HH_j(A,g)$ induce the same map
$H^i(HH_j(A,F))\to H^i(HH_j(A,G))$ for every $i$
([[def-cohomology-object-of-a-cochain-complex]]). Consequently a bimodule
chain-homotopy equivalence $F\to G$ induces isomorphisms
$H^i(HH_j(A,F))\to H^i(HH_j(A,G))$ for all $i,j$. Everything here is
choice-free, and no invariance of the termwise groups under arbitrary
quasi-isomorphisms is asserted.

## Facts & Assumptions

**Given:** a field $k$, a unital associative $k$-algebra $A$, bounded cochain complexes $F,G$ of $k$-central $A$-bimodules with internal-degree-zero differentials, bimodule-linear cochain maps $f,g:F\to G$ of cochain degree zero, and a bimodule-linear cochain homotopy $h:f\simeq g$ of cochain degree $-1$ with $f-g=d_Gh+hd_F$.

[F1] The Hochschild chain complex of a $k$-central bimodule $M$ has $C_j(A,M)=M\otimes_kA^{\otimes_kj}$ with boundary $b_j$ the alternating sum of faces; the termwise complex of a bounded complex $F$ in Hochschild degree $j$ is $HH_j(A,F^\bullet)$ with differentials $HH_j(A,d_F^i)$ induced by the bimodule maps $d_F^i$, and its cohomology is $H^i(HH_j(A,F^\bullet))$ ([[def-hochschild-chain-complex-of-a-bimodule]], [[def-termwise-hochschild-homology-complex-and-iterated-homology]]).

[F2] $HH_j(A,F^i)=H_j(C_\bullet(A,F^i))$ is the homology of the Hochschild chain complex, and a chain map $u:C_\bullet\to D_\bullet$ induces a well-defined map $H_j(u)$ ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[F3] A chain homotopy $s$ between chain maps of chain complexes satisfies $f_n-g_n=d_{n+1}s_n+s_{n-1}d_n$ in each degree; homotopic chain maps induce the same map on homology ([[def-chain-homotopy]]).

[F4] A map of $k$-central $A$-bimodules commutes with every Hochschild face, since the faces multiply the coefficient by algebra elements on either side; hence a bimodule map $u:M\to N$ induces a chain map $C_\bullet(A,u):C_\bullet(A,M)\to C_\bullet(A,N)$ natural in the bimodule ([[def-hochschild-chain-complex-of-a-bimodule]], [[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F5] For fixed $j$ and composable bimodule maps the assignment $u\mapsto C_j(A,u)$ is additive: $C_j(A,u+v)=C_j(A,u)+C_j(A,v)$, because the tensor product of a map with an identity is linear in the map; it also preserves identities and composition, so $HH_j(A,-)$ is additive on maps ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F6] Chain-homotopic maps induce the same map on homology; after reindexing cochain degree $i$ as homological degree $-i$, homotopic cochain maps induce the same map on cohomology ([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 Fix $j\geq0$. For each $i$ the bimodule map $d_F^i:F^i\to F^{i+1}$ commutes with every Hochschild face by [F4], so it induces a chain map $C_\bullet(A,d_F^i):C_\bullet(A,F^i)\to C_\bullet(A,F^{i+1})$, and hence a map $HH_j(A,d_F^i)$ on homology by [F2]. The same applies to $d_G$, $f$, $g$ and $h$; the homotopy $h$ has cochain degree $-1$, so $C_\bullet(A,h)$ is a degree-$(-1)$ family of maps of Hochschild complexes. [F1, F2, F4, given, algebra]

1.2 Because $C_\bullet(A,-)$ is additive on maps by [F5], applying it to the homotopy identity $f-g=d_Gh+hd_F$ gives exactly $C_\bullet(A,f)-C_\bullet(A,g)=C_\bullet(A,d_G)C_\bullet(A,h)+C_\bullet(A,h)C_\bullet(A,d_F)$. Passing to homology with [F2], this is the displayed homotopy identity $HH_j(A,f)-HH_j(A,g)=HH_j(A,d_G)HH_j(A,h)+HH_j(A,h)HH_j(A,d_F)$ in Hochschild degree $j$, valid in every cochain degree; the family $HH_j(A,h)$ has cochain degree $-1$ and is a cochain homotopy of the termwise complexes by [F3]. [F1, F2, F3, F5, given, algebra]

2.1 Applying [F6] in each cochain degree $i$, the cochain-homotopic maps $HH_j(A,f)$ and $HH_j(A,g)$ induce the same map $H^i(HH_j(A,F))\to H^i(HH_j(A,G))$ on the cohomology of the termwise complex, and the induced map depends only on the cochain-homotopy class of the map of coefficient complexes. Everything in the argument is a computation of maps of $k$-vector spaces, so no choice is used, and no statement about arbitrary quasi-isomorphisms is made. In the graded case the statement is ungraded unless $f,g,h$ are also internal-degree-zero; under that extra condition the induced homotopy and maps preserve internal degree. [F2, F6, step 1.1, step 1.2, given, algebra]

3.1 Now let $f:F\to G$ be a bimodule chain-homotopy equivalence, with bimodule-linear homotopy inverse $g:G\to F$ of cochain degree zero and two bimodule-linear homotopies $fg\simeq\mathrm{id}_G$ and $gf\simeq\mathrm{id}_F$ of cochain degree $-1$. By 2.1 and functoriality, the induced maps on $H^i(HH_j(A,-))$ compose to the identity in both orders, so they are inverse isomorphisms for every $i,j$. [F2, F3, step 2.1, given, algebra] ∎
