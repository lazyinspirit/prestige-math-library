---
id: lem-tame-torus-boundary-jets-admit-pointwise-fixing-target-normalizations
kind: lemma
title: "Tame torus boundary jets admit pointwise-fixing target normalizations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - lem-boundary-preserving-local-addition-for-transverse-product-tori
  - thm-euclidean-inverse-function-theorem
  - thm-higher-regularity-of-local-inverses
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Section6 discusses comparison of auxiliary almost-complex data; the precise boundary-jet normalization is proved locally here."
---

## Statement

Assume Countable Choice. Let $X$ be a compact smooth manifold, and let $L_0,L_1$ be compact transverse submanifolds of half its dimension with finite intersection. On a neighborhood of their union supply a symplectic form $\omega$ making them Lagrangian, and a compatible almost-complex structure $J_b$. Supply common disjoint linear generator charts near their intersections. Let $a$ range over a compact finite-dimensional cube. For $e=0,1$ supply smooth $\omega$-tame complex structures $J^e_a$ along $L_e$, equal to $J_b$ on larger fixed generator neighborhoods. A prescribed protected closed subset of $X$ is disjoint from both tori and the generator neighborhoods.

There are smooth parameter-dependent diffeomorphisms $P_a:X\to X$, isotopic to the identity through an explicitly constructed smooth family $P_{a,r}$, $0\le r\le1$, fixing both $L_e$ POINTWISE, identity near the protected set and on smaller generator neighborhoods, such that
$$ (P_a^*J^e_a)|_{L_e}=J_b|_{L_e}. $$
Every prescribed parameter face on which both $J^e_a=J_b$ along $L_e$ has $P_{a,r}=\mathrm{Id}$ for all $r$. All finite derivatives have uniform bounds on compact parameter sets. No equality on an entire torus neighborhood is asserted.

When $X$ is a smooth symmetric product, the protected set contains a neighborhood of its discriminant and its prescribed point divisors, and all nonidentity support lies in the off-diagonal locus, the construction has a genuine smooth permutation-equivariant ordered lift, identity near the partial diagonals and prescribed point divisors. It does not use a symmetric power of a nonholomorphic surface map.

## Statement references

[[def-countable-choice]]

[[lem-boundary-preserving-local-addition-for-transverse-product-tori]]

## Facts & Assumptions

[F1] A finite-dimensional smooth local addition $\mathcal E(p,v)$ is available, preserving each tangent subbundle, with $\mathcal E(p,0)=p$ and $d_v\mathcal E(p,0)=I$. Its proof gives explicit finite-chart Picard flows with smooth parameter dependence and finite-order derivative bounds. ([[lem-boundary-preserving-local-addition-for-transverse-product-tori]])

[F2] The actual parameter local inverse results are [[thm-euclidean-inverse-function-theorem]] and [[thm-higher-regularity-of-local-inverses]].

[A1] The supplied compact parameter family, reference, tame boundary structures, protected set and generator neighborhoods have the stated properties. Countable Choice suffices for the explicit analytic limits; chart choices and cutoffs below are finite. ([[def-countable-choice]])

## Proof

**Given:** The actual data and Countable Choice in the Statement.

1.1 At a point of $L_e$ split $TX=TL_e\oplus J_bTL_e$. Define the real bundle map $A^e_a$ by $A^e_av=v$ and $A^e_a(J_bv)=J^e_av$ for $v\in TL_e$. On these two summands it satisfies $A^e_aJ_b=J^e_aA^e_a$, including $A^e_aJ_b(J_bv)=-v=J^e_aJ^e_av$. Its block matrix is $\left(\begin{smallmatrix}I&C_a\\0&D_a\end{smallmatrix}\right)$. Put $g(v,w)=\omega(v,J_bw)$ on $TL_e$. Since this subspace is Lagrangian, $$g(v,D_av)=\omega(v,J^e_av)>0\quad(v\ne0).$$ Thus $D_{a,r}=(1-r)I+rD_a$ is invertible for every $0\le r\le1$: a vector in its kernel would have $(1-r)|v|_g^2+r g(v,D_av)=0$. Consequently $A^e_{a,r}=I+r(A^e_a-I)$ is an explicit smooth invertible bundle path fixing $TL_e$ pointwise. It equals I wherever $J^e_a=J_b$. Tameness, not compatibility of $J^e_a$, is the property used here. [A1, given, construct, algebra]

2.1 Use $N_e=J_bTL_e$ as the smooth normal complement. The map $\Psi_e(p,n)=\mathcal E(p,n)$ on its disk bundle has differential $(v,n)\mapsto v+n$ on the zero section, hence is a local diffeomorphism by [F2]. Compactness gives one positive radius on which it is injective: otherwise collisions tending to the zero section have a convergent base subsequence, contradicting the local inverse there. Define the germ $$H^e_{a,r}(\Psi_e(p,n))=\mathcal E(p,A^e_{a,r}n).$$ A tangent component of $A^e_{a,r}n$ is allowed in the ambient local addition. This germ fixes $L_e$, has full derivative $A^e_{a,r}$ along it, and is identity for $r=0$. The parameter version of [F2] and compactness of the cube times $[0,1]\times L_e$ give common smaller domains and common image neighborhoods on which these are smooth invertible germs. Injectivity is proved by the same collision argument uniformly in the compact parameters. [F1, F2, step 1.1, construct]

3.1 On this common image neighborhood set $V^e_{a,r}=(\partial_r H^e_{a,r})\circ(H^e_{a,r})^{-1}$. It is smooth, zero along $L_e$, and identically zero near every generator where the bundle path was identity. Extend it by a smooth finite cutoff, equal to one on the compact union of the images of a still smaller closed tube, and zero off the common germ image neighborhood. Its support can be kept in the prescribed torus neighborhood and off the protected set. Compactly supported finite-chart flows in [F1] integrate it for $0\le r\le1$, with all parameters. Uniqueness identifies this global flow with $H^e_{a,r}$ on a still smaller tube: every such germ trajectory remains in the cutoff-one region by the chosen compact image inclusion. In particular the flow has the prescribed full derivative and fixes every point of $L_e$. [F1, F2, step 2.1, construct]

4.1 Make the two constructions compatible. Remove smaller generator neighborhoods whose closures lie in the larger neighborhoods where every $A^e_{a,r}=I$. The remaining compact pieces of $L_0$ and $L_1$ are disjoint and have positive separation. The nonzero germ velocities can therefore be cut off in neighborhoods avoiding the OTHER torus and the smaller generator neighborhoods. Each resulting global flow is identity on a neighborhood of the other torus; although it may act near its own torus, it fixes that torus pointwise. Compose the two flows to obtain $P_{a,r}$. Their supports may be chosen disjoint outside the fixed generator regions; in any case their derivatives along the other torus are identity, so $dP_a=A^e_a$ on $L_e$. Step1.1 gives $P_a^*J^e_a=J_b$ there. At $r=0$ both flows are identity. If both boundary structures equal $J_b$ on a parameter face, all corresponding germ velocities are zero, so the constructed flow is literally identity on that face. There is no assumed return-holonomy identity. [F1, step 1.1, step 3.1, construct, algebra]

5.1 Compact parameter domains, compact vector-field support and the explicit smooth Picard dependence give uniform bounds on each finite derivative of $P_{a,r}$ and its inverse; its inverse is the reverse compact flow. If $a=a(s)$ is stationary on source-end collars, so is $P_{a(s)}$. Put $u(s,t)=P_{a(s)}v(s,t)$, $K=P_{a(s)}^*J(s,t)$ and $W=-(dP_{a(s)})^{-1}\partial_sP_{a(s)}$. The chain rule gives $$u_s+J(s,t,u)u_t=0\quad\Longleftrightarrow\quad v_s+K(s,t,v)v_t=W(s,v).$$ Because every $P_a$ fixes both tori POINTWISE, $\partial_sP_a=0$ there; hence $W|_{L_0\cup L_1}=0$. This does not imply neighborhood vanishing. The full values of K on the physical boundaries are precisely $J_b$, and W is independent of t. Stationary end diffeomorphisms conjugate the actual endpoint equations and linearizations by their bounded invertible differentials, including their integer Sobolev realizations. The natural taming form for K is $P_a^*\omega$, not a falsely unchanged $\omega$. [F1, step 4.1, construct, algebra]

6.1 In the symmetric-product case lift each compact vector field away from the discriminant using the local inverse of the ordered quotient differential. Its finite-cover local definitions agree by uniqueness and are permutation-equivariant. The original vector field is identically zero near the discriminant; its lift is consequently zero on an open neighborhood of every partial diagonal and extends smoothly by zero there, with bounded derivatives on the compact product. It is also zero near the prescribed point divisors. Integrating this actual lifted field gives a smooth equivariant flow, and uniqueness of the quotient flow proves $q\widetilde P_{a,r}=P_{a,r}q$. Thus all prescribed divisors and collision strata are genuinely preserved. Every construction used finite choices and specified countable Picard limits. The asserted normalization, relative prescriptions, lift and exact equation follow. [F1, A1, step 3.1, step 4.1, step 5.1, construct] ∎
