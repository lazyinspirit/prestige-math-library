---
id: lem-relative-symmetric-product-families-admit-a-common-two-torus-boundary-structure
kind: lemma
title: "Relative symmetric-product families admit one common two-torus boundary structure"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-finite-parameter-relative-symmetric-products-have-adapted-parallel-transports, lem-product-integrable-generator-neighborhoods-and-relative-tame-extension]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "McDuff and Salamon, Introduction to Symplectic Topology"
      url: "https://global.oup.com/academic/product/introduction-to-symplectic-topology-9780198794905"
      locator: "Tame complex structures; the actual relative Cayley construction and compatible boundary choice are proved below"
---

## Statement

Assume Countable Choice. Let $j_{b,s}$ be the actual smooth compact-cube family of positive surface complex structures in the finite-parameter relative symmetric-product transport lemma. Fix a positive area form $\eta$ on $\Sigma$, two transverse systems of $m$ disjoint attaching circles, their product tori $L_0,L_1$, and finitely many protected surface points off both systems. Let $\Delta$ denote the repeated-point locus and $E$ the union of the protected incidence divisors. Choose the transports $\Phi_{b,s}$ to be the raw identity on one common neighborhood of $L_0\cup L_1$, which is disjoint from $\Delta\cup E$. Work locally over any parameter cube on which the initial fibers have already been smoothly identified, by these same adapted transports, with a reference fiber $X$. Assume those identifications too are raw identities near the two tori. Write $K_{b,s}$ for the pulled-back fiber complex structure and $\Omega_{b,s}$ for the pulled-back descended product area form on $X\setminus\Delta$. Then there exists ONE smooth $\Omega_{b,s}$-compatible almost complex structure $J_\partial$ on a common neighborhood of $L_0\cup L_1$, independent of $(b,s)$, and a smooth family $J_{b,s}$ on $X$ such that:

- $J_{b,s}=J_\partial$ on a smaller common neighborhood of both tori, as full ambient endomorphisms;
- $J_{b,s}=K_{b,s}$ on a common neighborhood of $\Delta\cup E$;
- $J_{b,s}$ tames $\Omega_{b,s}$ off $\Delta$;
- in common, parameter-independent product charts near every generator, $L_0,L_1$ are $\mathbb R^m,i\mathbb R^m$ and $J_\partial=J_{b,s}=i$.

In particular the two tori are totally real for the entire family. No simultaneous analyticity of both surface curve systems for $j_{b,s}$ is required.

There is the following exact relative endpoint assertion. Suppose $K_{b,s}$ and $\Omega_{b,s}$ are independent of $s$ on fixed initial and terminal collars. If prescribed smooth endpoint families $\Theta_{b,0},\Theta_{b,1}$ already tame the corresponding endpoint forms, already equal this SAME $J_\partial$ near both tori, and already equal $K_{b,e}$ near a common protected neighborhood, the family may also be chosen equal to $\Theta_{b,e}$ on smaller endpoint collars. All neighborhoods in these requirements are common over the compact parameter cube. This assertion does not compare arbitrary endpoint full boundary structures, or assert positivity, compactness or continuation-map identities for a source-dependent equation.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual family, adapted identifications, area form, curve systems and protected data in the Statement; for the relative assertion, the additional common-collar endpoint hypotheses stated there.

[F1] Relative symmetric products have actual smooth finite-parameter adapted transports and smooth equivariant ordered lifts. Off the diagonal their raw tuple charts are ordinary product charts. ([[lem-finite-parameter-relative-symmetric-products-have-adapted-parallel-transports]])

[F2] The product-generator lemma constructs finite disjoint positive real crossing charts with both tori equal to the real and imaginary product planes, and proves the actual tame Cayley formula and its inverse. ([[lem-product-integrable-generator-neighborhoods-and-relative-tame-extension]])

## Proof

1.1 On the common raw neighborhood of $L_0\cup L_1$, all pulled-back product forms are the SAME form $\Omega$: the underlying tuple coordinates and their differentials are unchanged, and the surface form $\eta$ is fixed. Each torus is Lagrangian there. Indeed locally it is a product of one-dimensional curves in distinct surface factors, so the product two-form restricts to zero, and its dimension is half the ambient real dimension. Its finite quotient changes neither assertion in the actual off-diagonal charts. The standard $K_{b,s}$ is compatible with $\Omega_{b,s}$ everywhere off the diagonal: on the ordered product each surface structure preserves its positive two-form, and $\eta(v,j_{b,s}v)>0$; direct sums and pullback preserve these identities. On the common neighborhood, fix one reference value $K_*$ of this smooth family. It is compatible with the fixed $\Omega$ there. This reference is a fixed endomorphism field, not an arbitrary choice at infinitely many points. [F1, given, construct, algebra]

1.2 Record precisely the compatible part of the tame Cayley calculation. For a compatible $K$ put $g(v,w)=\Omega(v,Kw)$. If $J$ is tame, [F2] gives $A=-KJ$, $B=(A-I)(A+I)^{-1}$, $BK=-KB$, $\|B\|_g<1$, and $J=K(I+B)(I-B)^{-1}$. Conversely every such $B$ gives a tame complex structure, since for $v=(I-B)w$ one has $\Omega(v,Jv)=\|w\|_g^2-\|Bw\|_g^2$. It is compatible exactly when $B$ is $g$-selfadjoint. To verify the last equivalence, $g(v,Aw)=\Omega(v,Jw)$ is symmetric exactly when $A$ is selfadjoint. Symmetry of $\Omega(\cdot,J\cdot)$ for a complex structure implies $\Omega(Jv,Jw)=\Omega(v,w)$ by replacing the second argument with $Jw$, and conversely compatibility implies this symmetry. Finally $A=(I+B)(I-B)^{-1}$ is selfadjoint exactly when $B=(A-I)(A+I)^{-1}$ is selfadjoint: rational functions of a selfadjoint finite-dimensional operator with invertible real denominators are selfadjoint. Thus compatible Cayley coefficients form the convex set of selfadjoint $K$-anticommuting operators of norm less than one. This is an actual pointwise matrix argument, valid smoothly over the parameter and spatial variables. [F2, construct, algebra]

2.1 Use the finite disjoint generator charts from [F2]. In each, the constant $i$ structure is compatible with the local product form: that form is a sum of positive functions times $dx_a\wedge dy_a$. Compute the Cayley coefficient of this $i$ relative to $K_*$ on that chart. It is selfadjoint by step1.2. Multiply it by a smooth cutoff supported in the chart and equal to one on a smaller generator neighborhood; outside the charts use coefficient zero. The supports are disjoint, and all coefficients have norm less than one. The resulting structure $J_\partial$ on the common raw neighborhood is compatible with $\Omega$, agrees with $i$ in the smaller generator charts and equals $K_*$ elsewhere. This choice is independent of all parameters. Compatibility and the Lagrangian calculation in step1.1 make both tori totally real: if $v,J_\partial v$ were both tangent to one torus with $v\ne0$, their pairing would be zero by the Lagrangian condition and positive by compatibility, a contradiction. Since the union of tori is compact and disjoint from $\Delta\cup E$, choose nested common neighborhoods $N_0\Subset N_1\Subset N_2$ in that raw neighborhood, with all generator subcharts in $N_0$, and a smooth cutoff $\chi$ equal to one on $N_0$ and supported in $N_1$. The structure $J_\partial$ is needed only on $N_2$. [F2, step 1.1, step 1.2, construct, algebra]

3.1 For each parameter and each point of $N_2$, compute the coefficient $B_{\partial,b,s}$ of $J_\partial$ relative to $K_{b,s}$ using step1.2. Both structures are compatible with the same $\Omega$ there. Hence $B_{\partial,b,s}$ is selfadjoint in the metric of $K_{b,s}$, anticommutes with $K_{b,s}$, and has norm less than one. Define $B_{b,s}=\chi B_{\partial,b,s}$ on $N_2$ and zero outside the support of $\chi$. This extension is smooth. The Cayley formula gives $J_{b,s}$ off the protected set, and set $J_{b,s}=K_{b,s}$ where $B_{b,s}=0$, including a whole neighborhood of $\Delta\cup E$. These definitions agree on open overlaps, so yield a genuine smooth structure on all of $X$, without extending a singular product form across $\Delta$. On $N_0$ it is exactly $J_\partial$, and elsewhere off $\Delta$ it is compatible, hence tame, for $\Omega_{b,s}$. The finite covering and compact parameter set give all fixed-order derivative bounds on compact subsets of the form's domain and on the entire smooth complex-structure family. Common exact generator charts are those of step2.1. [F1, step 1.1, step 1.2, step 2.1, construct, algebra]

4.1 For the relative endpoint assertion compute the tame Cayley coefficients $B_{b,e}$ of $\Theta_{b,e}$ relative to $K_{b,e}$, on $X\setminus\Delta$, and extend them by zero across the common protected neighborhood where the structures agree. They are smooth on all of $X$. On each fixed endpoint collar regard them as constant in $s$; there $K_{b,s}$ and $\Omega_{b,s}$ are constant too, so they still anticommute with $K_{b,s}$ and have norm less than one. Choose scalar cutoffs $\beta_0,\beta_1$ supported in the disjoint endpoint collars, equal to one on smaller collars, with $0\le\beta_0+\beta_1\le1$. Replace the coefficient in step3.1 by $$B_{b,s}=\beta_0(s)B_{b,0}+\beta_1(s)B_{b,1}+(1-\beta_0(s)-\beta_1(s))\chi B_{\partial,b,s}.$$ Each endpoint summand is defined only on its collar and extended by zero where its cutoff vanishes; choose cutoffs with support compactly inside those collars, so these extensions are smooth. At every point the nonzero terms anticommute with the SAME $K_{b,s}$ and have norm strictly less than one in its SAME metric. Their convex combination has norm less than one by the triangle inequality, so the tame formula is valid. On a smaller common boundary neighborhood, the endpoint structures are already $J_\partial$ and $\chi=1$, so all three active coefficients coincide there; the family still has full boundary value $J_\partial$. Near the protected set all coefficients vanish. On the smaller endpoint collars the formula is exactly the prescribed endpoint structure. No compatibility of the prescribed endpoints beyond tameness is used. [F2, step 1.2, step 2.1, step 3.1, construct, algebra]

5.1 The construction is smooth in every extra cube parameter: all denominators are invertible finite matrices, all cutoffs are fixed smooth functions, and all coefficient fields are the actual smooth families furnished by [F1]. On a compact parameter cube the norms stay uniformly below one on every relevant compact support, so all inverse-matrix derivatives have uniform bounds of each fixed order. This proves both the full two-torus boundary assertion and its precise relative form. Arbitrary endpoint boundary values would not coincide with $B_{\partial,b,s}$ on that common boundary neighborhood, so the proof supplies no such stronger comparison. Analytic positivity or energy for the resulting source-dependent strip equation remains a separate obligation. [step 1.2, step 3.1, step 4.1, construct, algebra] ∎
