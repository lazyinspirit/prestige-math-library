---
id: lem-transverse-divisor-green-star-associativity
kind: lemma
title: Associativity of logarithmic Green products for transverse smooth divisors
authoring_scope: Smooth transverse divisor case only; no arbitrary-cycle or arithmetic Chow descent claim.
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-arithmetic-chow-group-with-green-currents
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Henri Gillet and Christophe Soulé, Arithmetic intersection theory
      url: https://www.numdam.org/article/PMIHES_1990__72__93_0.pdf
      locator: Section 2.2.14, printed p. 123, for the broader properly-intersecting-cycle result; only the transverse smooth divisor calculation is reconstructed here.
---

## Statement

Let $M$ be a complex manifold, and let $D_1,D_2,D_3$ be smooth complex hypersurfaces whose union has simple normal crossings, with distinct local components. Let $g_i$ be real locally integrable functions such that near each point of $D_i$,
$$g_i=-\log|z_i|^2+\phi_i,$$
where $z_i$ is a local defining coordinate of $D_i$ and $\phi_i$ is smooth. Suppose $\omega_i:=dd^c g_i+\delta_{D_i}$ is smooth, with $d^c=\frac{i}{4\pi}(\bar\partial-\partial)$. Write $\delta_{ij}$ and $\delta_{123}$ for integration currents on the transverse intersections, with the complex orientations.

The following iterated star products are well-defined as currents and are equal:
$$ (g_1*g_2)*g_3=g_1*(g_2*g_3)=g_1\delta_{23}+\omega_1g_2\delta_3+\omega_1\omega_2g_3.$$
Here $g_i\delta_J$ means integration of the locally integrable restriction to the indicated transverse intersection, and the ordered product of Green representatives is $g_i*g_j=g_i\delta_j+\omega_i g_j$. Its curvature is $\omega_i\omega_j$ and its cycle current is $\delta_{ij}$. This is a literal current equality; it does not assert the product for singular cycles, higher-codimension Green currents, nontransverse intersections, or arithmetic rational-equivalence classes.

## Statement references

[[def-arithmetic-chow-group-with-green-currents]]

## Facts & Assumptions

**Given:** The manifold, simple-normal-crossing hypersurfaces, logarithmic Green functions and smooth forms of the statement.

[F1] The arithmetic-current convention is $d^c=\frac{i}{4\pi}(\bar\partial-\partial)$ and $dd^c=\frac{i}{2\pi}\partial\bar\partial$; smooth forms act on currents by exterior multiplication and $\delta_D$ denotes integration over $D$ with complex orientation. [[def-arithmetic-chow-group-with-green-currents]]

## Proof

**Proof technique:** use canonical restrictions to transverse intersections and expand the two ordered products as the same current.

1.1 Fix one point and choose simultaneous holomorphic coordinates in which the divisors passing through that point are coordinate hyperplanes. On any intersection of some of the other divisors, the restriction of $g_i$ has the same form $-\log|z_i|^2+$ smooth when $D_i$ meets that intersection, and is smooth otherwise. The integral of $|\log r|r\,dr$ is finite near zero; Fubini on compact coordinate polydiscs therefore makes every indicated restriction locally integrable, including on a triple intersection. Integrating these restrictions against test forms defines $g_i\delta_J$. Since the restrictions agree on overlaps, the resulting currents are canonical and need no selection of a local equation. Complex orientations make the restriction of $\delta_{D_j}$ to a transverse $D_k$ equal $\delta_{jk}$. [F1, given, construct, algebra]

2.1 We verify the local residue identity in the normalization of [F1]. For a compactly supported test form, remove $|z_i|<\varepsilon$ and apply Stokes. The only nonvanishing normal boundary term tends to the test form at $z_i=0$, because the circular integral of $d^c\log|z_i|^2$ is $1$; the terms involving $\log\varepsilon$ without the singular normal derivative vanish. Thus $dd^c\log|z_i|^2=\delta_{D_i}$. The same argument on each transverse intersection gives $dd^c(g_i|_{D_J})+\delta_{D_i\cap D_J}=\omega_i|_{D_J}$. It also shows that exterior multiplication by the integration current followed by $dd^c$ agrees with pushforward of this restricted identity. [F1, step 1.1, given, algebra]

3.1 The currents $\delta_{D_i}$ are $d$-closed. Applying $d$ to $dd^c g_i+\delta_{D_i}=\omega_i$ therefore gives $d\omega_i=0$. The restricted residue identity in step 2.1 gives $dd^c(g_i\delta_j)=\omega_i\delta_j-\delta_{ij}$. Since $\omega_i$ is a smooth closed form of pure type, the product rule gives $dd^c(\omega_i g_j)=\omega_i(\omega_j-\delta_j)$. Hence $g_i*g_j=g_i\delta_j+\omega_i g_j$ is a Green current for the intersection, with $dd^c(g_i*g_j)+\delta_{ij}=\omega_i\omega_j$. [F1, step 2.1, given, algebra]

4.1 Restrict the explicitly represented $g_1*g_2$ to $D_3$. Step 1.1 gives $(g_1\delta_2)|_{D_3}=g_1\delta_{23}$ and $(\omega_1 g_2)|_{D_3}=\omega_1 g_2\delta_3$, in the sense of integration currents. Using its curvature from step 3.1, the left-associated product is therefore $g_1\delta_{23}+\omega_1 g_2\delta_3+\omega_1\omega_2g_3$. On the other hand, $g_2*g_3=g_2\delta_3+\omega_2g_3$ is a Green current for $D_2\cap D_3$, so the right-associated product is $g_1\delta_{23}+\omega_1(g_2\delta_3+\omega_2g_3)$. Smooth forms commute with these even-degree currents, and the two expressions coincide literally. The same formulas cover empty intersections by the zero current. [F1, step 1.1, step 2.1, step 3.1, given, construct, algebra] ∎
