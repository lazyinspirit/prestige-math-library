---
id: thm-freedman-disk-embedding-for-good-groups
kind: theorem
title: "Freedman disk-embedding theorem for good groups"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-freedman-good-group-and-disk-embedding-data
  - def-good-fundamental-group-for-disk-embedding
  - lem-freedman-casson-handle-skyscraper-and-surgery-modules
  - thm-freedman-disk-embedding-theorem-proof-modules
  - def-countable-choice
  - lem-finite-framed-locally-flat-links-in-smooth-three-manifolds-have-smooth-image-models
  - thm-collar-neighborhood-theorem
  - thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf"
      locator: "§5.1, Theorems 5.1A–5.1B, printed pp.85–87"
    - title: "Stefan Behrens et al., The Disc Embedding Theorem"
      url: "https://doi.org/10.1093/oso/9780198841319.001.0001"
      locator: "Chapter 11, disc-embedding theorem statement and intersection hypotheses"
---

## Statement

Assume the Axiom of Countable Choice. Let $X$ be a compact connected oriented smooth $4$-manifold with nonempty boundary and good fundamental group $G=\pi_1(X)$. Let $f_1,\ldots,f_n:(D^2,S^1)\looparrowright(X,\partial X)$ be proper generic immersed disks with pairwise disjoint embedded boundary circles. Suppose they admit framed immersed algebraically dual spheres $g_1,\ldots,g_n$ with $\lambda(f_i,g_j)=\delta_{ij}$, $\lambda(g_i,g_j)=0$, and $\mu(g_i)=0$, and suppose $\lambda(f_i,f_j)=0$ for $i\ne j$ and $\mu(f_i)=0$ for all $i$, in the equivariant intersection conventions of the disk-embedding data definition. Then the disks are homotopic rel boundary, preserving the boundary framings, to pairwise disjoint locally flat properly embedded disks in $X$.

## Statement references

[[def-freedman-good-group-and-disk-embedding-data|The relative disk data and equivariant intersection hypotheses]]

[[def-good-fundamental-group-for-disk-embedding|The good-group condition]]

[[thm-freedman-disk-embedding-theorem-proof-modules|The standardized-tower core construction]]

[[def-countable-choice|Axiom of Countable Choice used by the tower construction]]

Michael H. Freedman and Frank Quinn, *Topology of 4-Manifolds*, §5.1, Theorems 5.1A–5.1B, https://archive.mpim-bonn.mpg.de/4789/1/FreedmanQuinn-TopologyOf4Manifolds-PMS39.pdf

## Facts & Assumptions

**Given:** Countable Choice, good $G$, and the stated finite algebraically unobstructed disk datum. The disk data specify actual boundary normal-microbundle framings, not merely stable classes; the relative extension obstruction is separate, and each dual sphere has a full normal-microbundle trivialization.

[F1] [[def-freedman-good-group-and-disk-embedding-data]] gives locally flat TOP sheet charts, prescribed disk-boundary normal framings, framed spheres and the signed group-labelled intersection conventions. A disk's relative framing-extension obstruction is tracked separately and is not assumed to vanish from the algebraic Wall conditions.

[F2] [[def-good-fundamental-group-for-disk-embedding]] is the good-group property, invariant under a based group isomorphism.

[F3] [[lem-freedman-casson-handle-skyscraper-and-surgery-modules]] supplies the proved smooth-input good-group construction: in a supplied smooth neighborhood it gives disjoint locally flat disks in the original relative homotopy classes, with the supplied extending frames and retained geometric duals. Its Sections13–14 give relative approximation, finite affine-jet genericity and the relative Euler/intersection comparison; these operations are used below, rather than assuming TOP transversality. Its standard handle charts supply [[thm-freedman-disk-embedding-theorem-proof-modules]].

[F4] [[lem-finite-framed-locally-flat-links-in-smooth-three-manifolds-have-smooth-image-models]] gives, under CC, a supported boundary ambient TOP isotopy smoothing a finite locally flat link, positive source-circle reparametrizations, and smooth representatives of its full transported rank-two normal-microbundle framing classes.

[F5] [[thm-collar-neighborhood-theorem]] and [[thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold]] supply actual smooth collars and smooth tubes under CC.

[A1] [[def-countable-choice]]: Countable Choice is available. All subsequent choices beyond [F3]–[F5] are finite.

## Proof

1.1 The normal microbundle in [F1] is a neighborhood germ with its zero section and retraction, not merely an abstract stable vector bundle. On the embedded boundary of a proper locally flat sheet, its relative half-space chart is $(\mathbb R^2_+\times\mathbb R^2,\mathbb R^2_+\times0)$. Restricting the given normal trivialization to its boundary gives a TOP tube germ of that boundary circle in $\partial X$; its normal fiber is the second $\mathbb R^2$. Compactness permits a sufficiently small representative around each of the finitely many circles, and disjointness permits these representatives to be disjoint. This uses the GIVEN normal germ, not a theorem constructing normal neighborhoods for arbitrary TOP surfaces. Apply [F4] to this boundary link in the given compact smooth three-manifold $\partial X$. Denote its isotopy by $h_s$ and its smooth framing representatives by $\eta_i$. [given, F1, F4, A1]

2.1 Extend the actual isotopy over a smooth collar $c:\partial X\times[0,a)\to X$ from [F5]. Choose a cutoff $\beta$ equal to one near zero and zero before $a$. Set $H_s(c(x,r))=c(h_{s\beta(r)}(x),r)$, and use the identity outside the collar. The inverse uses $h_{s\beta(r)}^{-1}$, so $H_s$ is an orientation-preserving ambient TOP isotopy with joint inverse. Transport all maps, whiskers and normal classes by $H_1$. Every old signed intersection and group label is transported by the same based group isomorphism; goodness is unchanged. For the positive circle homeomorphism $\theta_i$ of [F4], let $\Theta_i:D^2\to D^2$ be its radial cone, and replace the disk temporarily by $H_1f_i\Theta_i$. Its boundary MAP is now a smooth regular parametrization. At the end we undo both $H_1$ and $\Theta_i$, so no change of the original boundary parameter is concealed. [F1, F2, F4, F5, step 1.1]

3.1 Construct a NEW smooth source collar. In the product of a smooth boundary-circle tube and the ambient collar, write the transported map on a small source collar as $(b_i(\theta,t),v_i(\theta,t),r_i(\theta,t))$, with boundary values $(\theta,0,0)$ and $r_i>0$ for $t>0$. Uniform continuity gives a unique small real lift of $b_i-\theta$ after restricting the collar. For $\kappa(t)$ equal to one on a smaller collar and zero outside the chosen one, interpolate these coordinates to $(\theta,0,\rho t)$ by $((1-s\kappa)b_i+s\kappa\theta,(1-s\kappa)v_i,(1-s\kappa)r_i+s\kappa\rho t)$. Choose the finite positive $\rho$ and collar small enough to stay in the coordinate tube. The last coordinate is positive for every interior point throughout this homotopy, and the boundary is fixed. At its end the smaller collar is smooth. The homotopy may pass through nongeneric maps: the conclusion requires a homotopy, not a regular homotopy of the old TOP ribbons. It can be arbitrarily small, and its support misses all old double points. [F1, F5, step 2.1, construct]

4.1 Use [F3]'s relative smooth approximation and finite affine-jet perturbations simultaneously on the disks and spheres, fixed on these smaller smooth collars. In a target with boundary perform approximation in its smooth double, with error less than half the positive target-boundary distance on the remaining compact source interiors; the output therefore stays in $X$. The same retraction interpolation gives a homotopy fixed on the collars. Independent value and first-jet bumps avoid the rank-deficient jet strata, make the two-point evaluation transverse to the diagonal and avoid triple points; compactness then gives only finitely many double points. This is exactly the finite genericity operation already proved in [F3]. Denote the resulting smooth generic maps by $f'_i,g'_j$. [F3, A1, step 3.1]

5.1 Here is the full group-ring comparison. At each old transverse crossing choose its supplied oriented TOP sheet chart and two small parameter disks. On their four-dimensional product the chart difference of the old sheet maps has one zero, of local degree the old sign, and no zero on the product boundary. For a sufficiently close approximation its chart difference is joined to the old one by a straight homotopy nonzero on that compact boundary. The signed sum of its transverse zeros is therefore the same local degree. All their group labels are the old label, since their connectors lie in that contractible chart. This uses a degree of continuous maps in a TOP chart, not differentiation of that chart. Outside these finitely many products and a neighborhood of each source diagonal, the compact source-pair set has positive image separation. Thus there are no other intersections between DIFFERENT source surfaces. Near a source diagonal both preimages lie in one of finitely many embedded-sheet charts, so a new self-double loop is null in $X$. It follows that every off-diagonal $\lambda$, including every disk–sphere pairing, retains its full original value, and $\mu(f'_i)=n_i1$, $\mu(g'_j)=m_j1$ for integers $n_i,m_j$. These equalities are in the actual sheet-involution quotient, not just after augmentation. [F1, F3, step 3.1, step 4.1, construct]

6.1 The self-pairing $\lambda(g'_j,g'_j)$ is still zero. To compute it without assuming TOP parametric transversality, take a small parallel using the original framed normal germ, with the same whisker. Apply the preceding degree comparison to that pair; it computes the original self-pairing. Approximate the two homotopic representatives smoothly and interpolate their maps in the smooth double, relative any protected collar. The ordinary finite smooth two-value transversality argument computes homotopy invariance of the pairing: the one-dimensional intersection tracks have cancelling signed interior endpoints, with unchanged group labels along each track. Thus the new self-pairing is the old zero. The same argument for a disk and its boundary parallel computes the relative intersection integer determined by a specified boundary framing. [F1, F3, step 4.1, step 5.1, construct]

7.1 Track the actual relative Euler obstruction rather than declaring it zero. For a smooth oriented disk $u$ and a boundary frame $\eta$, a generic normal section extending its first boundary vector has isolated zeros; their signed sum is $e(u,\eta)$. A parallel sheet meets $u$ at those zeros, and at both ordered branches of every self-point. Hence its relative intersection integer is $e(u,\eta)+2\sum_p\epsilon(p)$. The analogous equivariant sphere identity is $\lambda(u,u)=e(u)1+\mu(u)+\overline{\mu(u)}$. These follow by the stated local zero count; the two self-point labels are inverses. Twisting a boundary frame changes its relative Euler integer by the corresponding signed winding, so every desired integer value is realized by a smooth frame, and the difference from $\eta$ is recorded. Vanishing relative Euler is precisely the obstruction to extending that frame over a disk: extend on a finite cell subdivision and move the integer zero indices into one interior two-cell, where index zero extends across the cell. [F1, F3, step 5.1, step 6.1, construct]

8.1 A signed interior cusp changes $(\mu,e)$ by $(\pm1,\mp2)$ and changes no relative map homotopy class or off-diagonal pairing. For concreteness the birth chart is $(x,y)\mapsto(x,y^2,y^3-ty,xy)$: for $t<0$ it is immersed without a double point, and for $t>0$ its sole double pair is $(0,\sqrt t),(0,-\sqrt t)$, with independent tangent planes. Reflecting a normal coordinate changes its sign. Restrict to a small inner chart and join the unchanged outer sheet through the surrounding annulus; the modification is a homotopy in that coordinate ball fixed on its boundary. The change of $e$ is opposite twice the double-point sign by the parallel-sheet count of step 7.1, since the boundary parallel intersection is unchanged. The balls and joining sheets can miss every other source surface. Thus any finite prescribed sum of signed identity-labelled cusps is available without changing a nonidentity Wall coefficient. [F1, F3, step 7.1, construct]

9.1 Let $e_i=e(f'_i,\eta_i)$. Choose an auxiliary smooth boundary frame $\eta_i^a$ with $e(f'_i,\eta_i^a)=-2n_i$, and record its integer difference from the prescribed $\eta_i$. Insert cusps with signed sum $-n_i$. The resulting smooth disks have $\mu=0$ and extending auxiliary frames. For spheres, steps 5.1–7.1 give $0=\lambda(g'_j,g'_j)=(e(g'_j)+2m_j)1$, so the cusps of sum $-m_j$ give both $\mu=0$ and $e=0$. Their oriented smooth normal bundles are therefore trivialized: after choosing frames on the one-skeleton, the only two-cell obstruction is this Euler integer. All disk–sphere and off-diagonal pairings remain exactly those of the hypothesis. [F1, step 5.1, step 6.1, step 7.1, step 8.1, construct]

10.1 If the prescribed original disk framing extended, its original boundary-parallel intersection integer was zero, since its Euler obstruction and original $\mu$ were zero. Steps 6.1–7.1 show that $e_i+2n_i=0$, so in that case $\eta_i^a$ is the prescribed class $\eta_i$ itself. If only an external boundary framing was specified, keep its recorded integer difference from $\eta_i^a$ on every later boundary tube. This preserves the specified external framing class and does not assert that a nonextending external class has become extending. Both readings of the literal datum are thus respected; no assertion that merely prescribing a frame forces $e_i=0$ was used. [F1, step 6.1, step 7.1, step 9.1]

11.1 More explicitly, let $\tau_i$ be an auxiliary extending frame on an output product normal tube. Along its boundary write the recorded external frame as $\eta_i=\tau_i A_i$, with $A_i:S^1\to GL^+(2,\mathbb R)$; the smooth boundary representatives of [F4] allow this description. On a sufficiently thin boundary annulus use $(z,t,v)\mapsto(z,t,A_i(z)v)$, shrinking the fiber radii if necessary. Its inverse uses $A_i(z)^{-1}$, so this is a genuine change of collar coordinates carrying the entire prescribed boundary frame. It changes neither the zero-section disk nor its homotopy. An arbitrary winding of $A_i$ is allowed because these coordinates are required only on the annulus, not over the disk. Thus a nonzero relative Euler obstruction forbids an extending frame with that boundary value, but does not forbid retaining that value on the boundary of the embedded disk. The framing in the Statement is explicitly this boundary framing. [F1, F3, F4, step 10.1, construct]

12.1 Apply [F3] in the supplied smooth neighborhood $V=X$ to these corrected smooth framed maps. Their group is the original good group under the transport of step 2.1, and all hypotheses hold over its actual group ring. It gives pairwise disjoint proper locally flat disks and fixed-boundary homotopies, with extending auxiliary frames. Their actual product normal tubes carry the original external classes by the recorded boundary winding of step 10.1; when the input frame extended, it is already the extending output frame. No TOP-generic smoothing theorem or controlled five-dimensional normal-bundle theorem is being imported in this application. [F2, F3, A1, step 2.1, step 9.1, step 10.1, step 11.1]

13.1 Concatenate the finite collar, approximation, cusp and [F3] homotopies, then apply $H_1^{-1}$ and precompose each disk homotopy with $\Theta_i^{-1}$. At every time the boundary is $H_1^{-1}(H_1f_i\Theta_i\Theta_i^{-1})|_{S^1}=f_i|_{S^1}$ pointwise. Properness and local flatness survive the ambient and source homeomorphisms. The full normal-class comparisons of [F4] and step 10.1 pull back to the prescribed original boundary framings. This proves the stated TOP-input conclusion in the given smooth ambient manifold. Only the finite boundary operation and the accepted CC smooth construction were used; the seven accepted construction/Alexander/open-problem carriers require no alteration. ∎ [F1, F3, F4, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 8.1, step 12.1]

