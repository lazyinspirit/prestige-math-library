# Distinguished hook representatives and their tensor products

This is new mathematical authoring for the unresolved epsilon tensor operation. It is not a new audit of the accepted stable-core, two-hook, grid, analytic, duality or connected-sum suppliers. It proves the algebra needed by the original epsilon lemma; it does not admit a geometric staircase.

Let R=F₂[U,U⁻¹]. A finite based R-complex C has a Maslov grading, a split integer bifiltration, U of degree (-2;-1,-1), and differential of degree -1 nonincreasing in both filtrations. Suppose its vertical homology is one-dimensional with its class ξ in Maslov degree zero. Use the original epsilon definition's V=C{i=0}, N_s=C{min(i,j-s)=0}, S_s=C{max(i,j-s)=0}, maps F_s: H(V)→H(N_s), G_s:H(S_s)→H(V), and threshold s=τ(C). Suppose the same knot-type conditions apply to the R-dual and tensor complexes in use. In applying the result to knots, their normalized tensor and reverse-mirror identifications are the already supplied interfaces, not new premises inferred from the following algebra.

After filtered elementary cancellations, write π_v and π_h for projection to the vertical line i=0 and horizontal line j=s, respectively. There is a homogeneous element x supported in i≤0,j≤s, with nonzero corner part, such that π_v(x) is a vertical cycle representing ξ. The following more specific choices are possible:

* F_s=0 if and only if such an x can be chosen with π_h(x) a horizontal boundary.
* G_s≠0 if and only if such an x can be chosen with π_h(x) a horizontal cycle.
* If F_s and G_s are nonzero, every x obtained from a southwest-hook lift has π_h(x) a horizontal cycle that is not a horizontal boundary.

Each x can be made a distinguished element of a homogeneous bifiltered R-basis. No claim that an arbitrary horizontal noncycle detects epsilon=-1 is needed. In that case the obstruction is the nonexistence of a southwest-hook lift, equivalently G_s=0.

These representatives yield the two full epsilon tensor rules. In particular this proof does not infer epsilon of a tensor product just from one horizontal noncycle in a selected basis.

## Explicit reduction and its homotopies

Normalize each basis generator at i=0. A differential coefficient preserving both coordinates is a single Laurent monomial (homogeneity determines its exponent); rescale its target so it is 1. If da=b+r with a,b at the same bifiltration and r not involving b, replace b by b'=da. This is an invertible homogeneous filtered basis change: its inverse is b=b'+r, with all terms of r no higher than b. For any other basis element c, subtract the coefficient of b' in dc times a from c. This is again a filtered basis change, because that differential coefficient can appear only at coordinates no higher than c and a,b' have identical coordinates. The new differentials have no b' component. Their a component vanishes too: d²c=0 and da=b' would otherwise leave a nonzero b' coefficient. Thus C splits as the filtered direct sum of the pair a→b' and a smaller complex.

Let I and P be inclusion/projection of that smaller complex and let H(b')=a, H(a)=0, H=0 on the smaller part. Then PI=1 and IP+1=dH+Hd. H has Maslov degree +1 and preserves both filtrations. There are finitely many R-basis elements; repeating removes all equal-bifiltration arrows. The resulting reduced differential strictly lowers at least one coordinate on every term. Compose the finitely many I,P,H identities to obtain the full filtered equivalence and its homotopies. All subquotient maps and hook maps commute with these equivalences.

Tensoring any displayed identity with a second complex preserves it: the extra differential terms cancel in characteristic two, so (d⊗1+1⊗d)(H⊗1)+(H⊗1)(d⊗1+1⊗d)=(dH+Hd)⊗1. Dualizing does likewise. Consequently reduction is compatible with both tensor operations and the homotopies actually used below. There is no unsupported simultaneous Gaussian elimination of unrelated row and column complexes.

## Representative construction from F_s=0

Choose a homogeneous vertical cycle z supported in j≤s representing ξ. Its corner z_c is nonzero, since otherwise ξ would have a representative at j≤s-1, contradicting τ(C)=s. Its image in N_s is z_c. If F_s=0, choose a homogeneous chain b of Maslov degree one in N_s with d_N b=z_c. Decompose b as b_+ + b_0 + b_r, where b_+ is strictly above the corner on i=0, b_0 is its corner part, and b_r is strictly right on j=s.

The strictly upper part of d_v b_+ is zero, because neither b_0 nor b_r can contribute there and d_N b has no such part. Put z'=z+d_v b_+. Then z' represents ξ and remains supported in j≤s. Let q=b_0+b_r be the horizontal part of b. Its horizontal boundary h=d_hq has no strictly right component; its corner is z'_c, by the corner equation d_Nb=z_c. Define x=z'+h_left, taking h_left to be the strictly left part of h. It is supported southwest, has π_vx=z', and has π_hx=h=d_hq. Thus x is the desired distinguished vertical representative with horizontal boundary. The nonzero corner follows again from the threshold property for z'.

Conversely, suppose x has vertical cycle z representing ξ and horizontal part d_hq, with support southwest. In N_s the horizontal chain q contributes exactly x_c: discard its strictly left part, since that part cannot reach the corner or right ray. Since π_hx has no right component, the same is true of the boundary in N_s. Hence x_c is a boundary in N_s and F_s(ξ)=0.

## Representative construction from G_s≠0

Choose a homogeneous southwest-hook cycle y mapping to ξ. Regard y as the sum of its vertical part z (including its corner) and its strictly left horizontal part ℓ. Reduction makes the two boundary equations exactly d_vz=0 and d_h(z_c+ℓ)=0: all retained terms of the southwest hook lie on those two rays, and its corner has no equal-bifiltration differential. Put x=z+ℓ. Then x has the required vertical class and π_hx is a horizontal cycle. Conversely any such x projects to a southwest-hook cycle mapping to ξ, proving G_s≠0.

If this horizontal cycle were d_hq, the preceding converse for F_s would show F_s=0. Thus when F_s≠0 it is not a horizontal boundary. This gives the required boundary/cycle-nonboundary alternatives for the distinguished representatives, without asserting the false converse that every noncycle representative forces G_s=0.

## Extending the representative to a basis

Some coordinate of x at the corner is nonzero. Choose one such original generator e, translated to that corner. Its coefficient is 1. There is no additional term in x from the same R-basis generator at a nonzero U exponent: homogeneity of x fixes that exponent uniquely. Every other term in x has coordinates no higher than e and the same Maslov grading. Replacing e by x and keeping the other generators is therefore an invertible homogeneous filtered elementary basis change; its inverse expresses e as x plus those lower terms. This is the promised distinguished basis element. Separate row and column simplifications can keep that element when their indicated boundary/cycle behavior permits it; the tensor proof requires only the explicitly constructed representatives and uses no unproved full simultaneous simplified basis.

## Dual hooks and threshold

The finite dual vertical complex has threshold -s. For a direct proof, let B be the vertical boundary space and choose z representing ξ at level s. Since ξ is not represented at levels ≤s-1, z is not in B+V^{≤s-1}. Finite-dimensional basis extension gives a cocycle functional λ annihilating B+V^{≤s-1}, with λ(z)=1. Under negation of the filtration, λ has level at most -s and represents nonzero dual homology. A dual cocycle of level at most -s-1 vanishes on V^{≤s}, hence on z; it induces the zero functional on the one-dimensional homology and is a dual boundary. This proves τ(C*)=-τ(C), without any geometric choice or grading ambiguity.

The finite pairing identifies the dual of N_s(C) with S_-s(C*), and the dual of V(C) with V(C*). Quotient/include arrows reverse, so the transpose of F_s(C) is G_-s(C*). Dually the transpose of G_s(C) is F_-s(C*). These are actual finite chain-level transpose identities, not a comparison of selected representatives. Finite-dimensional linear duality preserves the zero/nonzero property of the induced homology maps. Thus epsilon(C*)=-epsilon(C).

## Tensor rules with actual representatives

Normalize the bases of C,D at i=0. The vertical slice of C⊗_R D is the ordinary F₂ tensor product of their vertical slices: a differential term survives at algebraic level zero precisely when its corresponding factor term preserves that level. The same assertion holds for the horizontal slices at levels s,t and their sum s+t. In particular the two differentials are d_v⊗1+1⊗d_v and d_h⊗1+1⊗d_h. The finite-dimensional chain Kunneth statement here has an elementary proof: split each vector-space complex into its boundary pairs and homology representatives; each boundary pair tensored with anything is contractible by its pair homotopy. Thus z⊗w represents the nonzero tensor vertical class.

Use τ(C⊗D)=s+t, as supplied for the knot tensor category in question (or as the ordinary filtered field-complex tensor threshold, proved by the same filtered pair splitting). If epsilon(C)=epsilon(D)=1, choose the horizontal-boundary representatives x,y constructed above. Both horizontal parts are cycles, and if π_hx=d_ha, then π_h(x⊗y)=d_h(a⊗π_hy). The vertical class is the tensor generator. The converse F construction therefore gives F_{s+t}=0, so epsilon(C⊗D)=1. The same argument applies when epsilon(C)=0 and epsilon(D)=1, using the southwest-lift cycle representative for C and boundary representative for D.

If epsilon(C)=epsilon(D)=0, choose southwest-lift cycle representatives in both factors. Their tensor is a southwest-hook cycle mapping to the nonzero vertical tensor class, so G_{s+t}≠0. Apply the identical argument to C*,D*, which also have epsilon zero by the dual transpose identities. It gives G_{-(s+t)}((C⊗D)*)≠0 and hence F_{s+t}(C⊗D)≠0. Therefore the tensor has epsilon zero. Finally apply duality to the already proved positive cases to obtain the negative/negative and zero/negative cases. These are exactly both tensor rules in the original Statement, and every reduction, basis change, representative and inverse homotopy has been explicitly described.

## Original-facing integration boundary

The argument replaces the unsupported original proof 1.2 and its A4 premise. It preserves every original Statement clause. It also supplies the reverse-mirror sign clause algebraically from the already accepted geometric duality interface. It does not supply the exact geometric torus/cable admission in original proof4.1 or the trefoil admission in proof2.1. Those remain separate genuine obligations, so the complete original epsilon lemma is not accepted by this donor alone.
