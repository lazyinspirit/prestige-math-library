---
id: def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone
kind: definition
title: BF perfect obstruction theory and intrinsic-normal-cone class
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: physics
deps:
  - def-derived-scheme-and-cotangent-complex
  - def-cotangent-complex-of-a-scheme-morphism
  - def-gts-classical-dm-stack-cotangent-complex
  - def-gts-chow-groups-and-zero-section-gysin
dependency_roles:
  def-derived-scheme-and-cotangent-complex: mathematical-premise
  def-cotangent-complex-of-a-scheme-morphism: mathematical-premise
  def-gts-classical-dm-stack-cotangent-complex: mathematical-premise
  def-gts-chow-groups-and-zero-section-gysin: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Behrend and Fantechi, The Intrinsic Normal Cone"
      url: "https://arxiv.org/pdf/alg-geom/9601010v1"
      locator: "§§3–5, especially Definition 5.1, the global-resolution construction, and Proposition 5.3."
    - title: "The Stacks Project, The Cotangent Complex, Chapter 92"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "The scheme cotangent-complex convention in Definitions 92.18.2 and 92.24.1."
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Assume the Axiom of Choice carried by the derived-scheme and cotangent-complex suppliers. Let $X$ be a separated Deligne–Mumford stack locally of finite type over a field $k$, and write $L_X=L_{X/k}$ for the cotangent complex obtained by étale descent from the scheme complexes on atlases. A **perfect obstruction theory** is a morphism $\phi:E^\bullet\to L_X$ in the derived category of quasi-coherent étale sheaves such that $E^\bullet$ is perfect of amplitude $[-1,0]$, $h^0(\phi)$ is an isomorphism, and $h^{-1}(\phi)$ is surjective. Its **virtual-rank function** is the well-defined locally constant integer-valued function $n:X\to\mathbb Z$ given by $n(x)=\operatorname{rk}_x(E^0)-\operatorname{rk}_x(E^{-1})$ in any local two-term vector-bundle presentation. Different open-and-closed components of $X$ may have different virtual ranks. For each integer $r$, the rank locus $X_r=n^{-1}(r)$ is open and closed, and the obstruction theory, its vector-bundle stack and the intrinsic cone restrict to it. This family of loci need not be finite when $X$ is not quasi-compact. No Chow theory of locally finite cycles, or virtual Chow class on a non-finite-type stack, is asserted here; the Chow suppliers below cover finite-type Deligne–Mumford stacks.

For an étale-local closed embedding $U\hookrightarrow M$ into a smooth scheme, its normal cone is $C_{U/M}=\operatorname{Spec}_U\bigl(\bigoplus_{j\ge0} I^j/I^{j+1}\bigr)$, where $I$ is the embedding ideal. Quotienting by the action of $T_M|_U$ gives local cone-stack charts that glue to the **intrinsic normal cone** $C_X\hookrightarrow h^1/h^0(L_X^\vee)$. A perfect obstruction theory induces a closed immersion $C_X\hookrightarrow h^1/h^0((E^\bullet)^\vee)$; for a two-term presentation this vector-bundle stack is $[(E^{-1})^\vee/(E^0)^\vee]$. For the virtual-class construction assume additionally that $X$ is of finite type over $k$; the locally-finite-type hypotheses above suffice for the POT and intrinsic cone, but do not provide a finite fundamental cycle. If the source's stated global two-term vector-bundle resolution $F^\bullet=[F^{-1}\to F^0]$ exists, put $F_1=(F^{-1})^\vee$ and pull back $C_X$ to obtain a closed cone $C(F^\bullet)\subset F_1$. Let $X_{a,b}\subset X$ be the open-and-closed locus where $\operatorname{rk}(F^{-1})=a$ and $\operatorname{rk}(F^0)=b$, and let $S$ be the finite set of pairs $(a,b)$ for which this locus is nonempty. Finiteness follows from finite type and local constancy of the two ranks. Write $i_{a,b}:X_{a,b}\hookrightarrow X$, $F_{1,a,b}=F_1|_{X_{a,b}}$, and $C_{a,b}=C(F^\bullet)|_{X_{a,b}}$. On this locus the cone cycle has dimension $b$, so its zero-section Gysin image has dimension $b-a$. Define the componentwise Behrend–Fantechi class by
$$[X,E^\bullet]^{\mathrm{vir}}:=\sum_{(a,b)\in S}(i_{a,b})_*\,0_{F_{1,a,b}}^![C_{a,b}]\in A_*(X)_{\mathbb Q}.$$
Here each summand belongs to $A_{b-a}(X)_{\mathbb Q}$, using the rational Chow and refined-Gysin conventions below. The finite open-and-closed decomposition respects cycles and rational equivalence: each integral cycle and each principal-divisor relation lies in one piece. Equivalently, for the canonical rank loci $X_r=n^{-1}(r)$, the restriction of the virtual class to $X_r$ is homogeneous in $A_r(X_r)_{\mathbb Q}$. If $n$ is globally constant with value $r$, this recovers $[X,E^\bullet]^{\mathrm{vir}}\in A_r(X)_{\mathbb Q}$. If $X$ is empty the sum is zero. The definition uses a chosen global resolution; independence on every constant-virtual-rank locus, and hence of the finite sum, is the separate theorem on the A page.

## Definition references

[[def-derived-scheme-and-cotangent-complex]]

[[def-cotangent-complex-of-a-scheme-morphism]]

[[def-gts-classical-dm-stack-cotangent-complex]]

[[def-gts-chow-groups-and-zero-section-gysin]]
