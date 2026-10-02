---
id: def-termwise-hochschild-homology-complex-and-iterated-homology
kind: definition
title: "Termwise Hochschild homology and iterated homology"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-hochschild-chain-complex-of-a-bimodule
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - thm-a-chain-map-induces-a-well-defined-map-on-homology
  - def-cohomology-object-of-a-cochain-complex
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Beliakova–Putyra–Wehrli, Quantum Link Homology via Trace Functor I, §§3.8.4–3.8.6, printed pp.37–39"
      url: "https://arxiv.org/pdf/1605.03523"
      locator: "§3.8.6, printed p.38: $HH_\\bullet$ applied componentwise to a complex of bimodules, equation (3.44)."
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, printed pp.5–7"
      url: "https://arxiv.org/pdf/math/0510265"
      locator: "pp.6–7: the termwise Hochschild complex of a complex of graded bimodules and its three gradings."
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1, printed pp.300–304"
      url: "https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf"
      locator: "§9.1.1–9.1.5: $HH_j$ as a functor of the coefficient bimodule."
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Definition

Let $k$ be a field, let $A$ be a unital associative $k$-algebra, and let
$F=(F^i,d_F^i)_{i\in\mathbb Z}$ be a bounded cochain complex of $k$-central
$A$-bimodules with differentials of internal degree zero
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).
Fix $j\geq0$. Each differential $d_F^i:F^i\to F^{i+1}$ is a map of
$A$-bimodules, so it commutes with every Hochschild face of the chains
$C_j(A,-)=(-)\otimes_kA^{\otimes_kj}$ and therefore induces a chain map
$$C_\bullet(A,d_F^i):\bigl(C_\bullet(A,F^i),b\bigr)\longrightarrow\bigl(C_\bullet(A,F^{i+1}),b\bigr)$$
([[def-hochschild-chain-complex-of-a-bimodule]]). Writing
$HH_j(A,F^i)=H_j(C_\bullet(A,F^i))$, the induced map on homology is the
$k$-linear map
$$HH_j(A,d_F^i):HH_j(A,F^i)\longrightarrow HH_j(A,F^{i+1})$$
provided by [[thm-a-chain-map-induces-a-well-defined-map-on-homology]]. Because
$d_F^{i+1}d_F^i=0$, the composite chain map $C_\bullet(A,d_F^{i+1})C_\bullet(A,d_F^i)$ is
induced by the zero bimodule map and is therefore the zero chain map, so the
composite $HH_j(A,d_F^{i+1})HH_j(A,d_F^i)$ vanishes; the functoriality in the
same cited theorem also gives $HH_j(A,d_F^i)=\mathrm{id}$ when $d_F^i$ is an
identity and $HH_j(C_2)HH_j(C_1)=HH_j(C_2C_1)$ for composable bimodule maps.
Hence
$$\bigl(HH_j(A,F^\bullet),\,HH_j(A,d_F^\bullet)\bigr)$$
is a cochain complex of $k$-modules, the **termwise Hochschild complex** of $F$
in Hochschild degree $j$, and its cohomology is defined
([[def-cohomology-object-of-a-cochain-complex]]):
$$H^i\bigl(HH_j(A,F^\bullet)\bigr)=\frac{\ker\bigl(HH_j(A,d_F^i)\bigr)}{\operatorname{im}\bigl(HH_j(A,d_F^{i-1})\bigr)}.$$
The differentials $HH_j(A,d_F^i)$ are induced by maps of bimodules, so they are
$k$-linear and preserve whatever outer structure the construction carries; in
particular, if $F$ is a complex of graded bimodules and every $d_F^i$ has
internal degree zero, then each internal-degree piece of $HH_j(A,F^i)$ is
mapped to the same internal degree of $HH_j(A,F^{i+1})$.

In the internally graded case the three indices are kept separately: the
Hochschild degree $j\geq0$, the cochain index $i$ of $F$, and the internal
degree, together with the cohomological degree $i$ of
$H^i(HH_j(A,F^\bullet))$. No identification between these indices is asserted
by this definition. In particular this construction is **not** defined to
coincide with the Hochschild hyperhomology
$\mathrm{HH}^{\mathrm{hyper},i-j}(A,F)$ of
[[def-hochschild-hyperhomology-of-a-bimodule-complex]]: the latter is the
cohomology of the total complex in which the Hochschild boundary $b$ and the
cochain differential $d_F$ are combined into one differential, whereas here $b$
is used first, separately for each $i$, and only the induced maps
$HH_j(A,d_F^i)$ are totalized. The two constructions agree in general only
through the spectral sequence of
[[thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex]],
whose second page is exactly the iterated group $H^i(HH_j(A,F^\bullet))$ and
which may carry higher differentials.

Two degenerate readings fix the conventions. If $F$ is concentrated in a single
cochain degree $r$, then the termwise complex has one term in degree $r$ and
$H^r(HH_j(A,F^\bullet))=HH_j(A,F^r)$, with all other iterated groups zero. If
$F=0$ then the termwise complex is zero, so every iterated group vanishes. If
the differential of $F$ vanishes then all maps $HH_j(A,d_F^i)$ vanish, so
$H^i(HH_j(A,F^\bullet))=HH_j(A,F^i)$ in the sense that the termwise complex is
the direct sum of its terms with zero differential; this is the situation of
the matrix and two-term examples on the companion page.
