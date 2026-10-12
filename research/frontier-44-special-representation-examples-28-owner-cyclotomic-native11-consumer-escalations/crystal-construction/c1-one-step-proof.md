# C1: one-step restriction, nonreduced induction, and dot index

This is a local proof-construction carrier for the owner, not native acceptance. All simples are finite-dimensional graded; statements of uniqueness compare shift orbits unless a shift is explicitly fixed. The base field is arbitrary. Use original10 maximal first/last block lemma, its absolute simplicity, actual PBW/Mackey, and finite-dimensional graded psi-duality. Let e_i forget the final k[x] factor after last-i restriction.

## Nil-Hecke branching computation

Let L_r be the nil-Hecke simple, modeled by the coinvariant algebra C_r=k[t_1,...,t_r]/(e_1,...,e_r) with polynomial multiplication and divided differences. Put z=t_r, and write E_a for elementary symmetric polynomials in t_1,...,t_(r-1). The equations e_a=E_a+z E_(a-1)=0 give E_a=(-z)^a for 1<=a<=r-1, and the final equation gives z^r=0. Consequently

    C_r = k[t_1,...,t_(r-1)] tensor_(k[E_1,...,E_(r-1)]) k[z]/(z^r),

where E_a acts on the second factor by (-z)^a. This is an equality of presented algebras, not a dimension heuristic. The polynomial representation of NH_(r-1) is a free module of rank (r-1)! over its symmetric center and identifies NH_(r-1) with the full matrix algebra over that center. After this specialization its image on C_r is Mat_((r-1)!)(k[z]/(z^r)), and C_r is its standard column module. Thus its graded socle and head are each one shifted L_(r-1), its simple composition coefficient is a shifted [r]_i, and multiplication by z has nilpotence index exactly r. The simple socle is the column over z^(r-1)k, the head the column modulo z. For r=1 this is the statement C_1=k and z=0. The same calculation with the first variable distinguished gives first-end branching. Matrix units and a monic Artin polynomial basis make the computation valid in all characteristics.

The induction NH_r tensor NH_n -> NH_(r+n) of L_r tensor L_n is L_(r+n), up to shift. Every positive full symmetric polynomial acts by zero, since its coproduct is a sum of products of block symmetric polynomials with at least one positive factor. Hence the induced module is a module over the full nil-Hecke central matrix quotient. PBW freeness computes its dimension as binomial(r+n,r)r!n!=(r+n)!, exactly the standard column dimension; it is therefore one simple column, not a factorial number of simples.

## Restriction has a simple socle

Let S have epsilon_i(S)=r>0. The maximum possible epsilon_i of a composition factor of e_i S is r-1 by the exact defining corners. Let U be any simple subobject of e_i S, and put t=epsilon_i(U). The final dot z commutes with R(beta-alpha_i) and acts nilpotently on e_i S: this holds on the whole S by positive dot degree and finite grading support. It preserves the socle and its ungraded isotypic components. On the isotypic component containing U, a suitable nonzero power image has a nonzero kernel copy of the same underlying simple type, killed by z. Absolute simplicity and the finite graded semisimple decomposition let one choose that copy homogeneously, with the appropriate shift. The induction–restriction adjunction therefore gives a nonzero map Ind(U,L_1)->S, hence a surjection. The graded shuffle formula bounds every induced tail by t+1, so r<=t+1. The preceding upper bound gives t=r-1.

Now apply the maximal (r-1)-tail corner p to e_i S, retaining R(beta-r alpha_i) tensor NH_(r-1). Original10 gives Delta_i^r S=N tensor L_r, with epsilon_i(N)=0. Hence

    p(e_i S)=N tensor Res_(NH_(r-1))L_r.

The right side has a single simple socle by the nil-Hecke computation and the absolute simplicity of N. Every simple subobject U of e_i S has t=r-1, so original10 makes pU a nonzero simple object. Exactness of p makes p(soc e_i S) semisimple and injects it into the one-simple socle of p(e_i S). Thus soc e_i S is itself a single simple object, once, with epsilon r-1. This also proves detection: any nonzero submodule of e_i S contains a simple graded submodule U, whose pU is nonzero.

## Simple head and global dot index

Finite graded psi-duality D is exact, takes simples to simples, fixes the corner idempotents and commutes with restriction; it needs no self-dual representative. Apply the socle proof to DS, whose epsilon equals r, and dualize. It follows that e_i S has a single simple head, once. The maximum-tail restriction of the head and socle have the same first factor N up to the corresponding duals and grading shifts: the nil-Hecke head/socle differ only by shift. Original10's unique-head recursion therefore identifies their shift orbits.

On p(e_i S), z^r=0 while z^(r-1)!=0 by the explicit nil-Hecke model. The image of z^r on all of e_i S is a graded submodule. Its p-corner is zero; the just-proved detection property forces that image to be zero. Nonvanishing of z^(r-1) in the p-corner implies its nonvanishing globally. Therefore the last-dot nilpotence index on e_i S is exactly r. Repeating the proof for the first-end maximal restriction gives first-dot nilpotence index exactly epsilon_i^L(S). Notice that this argument uses detection of all submodules; knowing the index only on the maximal corner would not suffice on its own.

## Nonreduced induction and partial inverses

Put M_n=Ind(S,L_n), n>=1. Its maximum tail is at most r+n by shuffle. At tail r+n the Mackey filtration can only retain all n added i-strands and precisely r original terminal i-strands: taking fewer added strands would require more than r from S, while taking fewer original strands would not fill the requested tail. Thus the maximum corner is

    Delta_i^(r+n)M_n = N tensor Ind_(NH_r tensor NH_n)^(NH_(r+n))(L_r tensor L_n)
                      = N tensor L_(r+n),

up to the fixed grading shift. This is one actual surviving filtration term and is simple.

Every simple quotient T of M_n has that maximum tail. Indeed adjunction gives a nonzero injection S tensor L_n -> Delta_i^n T. Restrict its first factor to S's maximal r-tail; the resulting nonzero corner implies epsilon_i(T)>=r+n. The shuffle bound gives equality. The finite semisimple head of M_n therefore has only constituents detected by its simple maximum corner; exactness implies that head is one simple constituent, once. Its maximum corner is the displayed simple module. The kernel of M_n->hd M_n has zero maximum corner, so every other composition factor has smaller epsilon and the head occurs once in the entire composition series.

For n=1 write f_i S=hd M_1 and e-tilde_i T=soc e_i T. Adjunction realizes S in e_i(f_i S), so the simple-socle result gives e-tilde_i f_i S=S, with shifts restored. Conversely if S=soc e_i T, adjunction gives T as a simple quotient of Ind(S,L_1), hence T=f_i S. These are actual partial inverses. The raising operator decreases epsilon by1; lowering increases it by1. Iterating partial inverses shows hd Ind(S,L_n)=f_i^n S: strip the maximum-tail head n times using the unique original10 recursion, or apply the same adjunction and uniqueness at each one-strand stage. All statements hold at the first end by the identical first-end Mackey and dot arguments.

## Exact cyclotomic criterion

Let J^Lambda be generated by x_1^lambda_i on every word beginning with i. It annihilates a simple S exactly when each first-i corner has first-dot index at most lambda_i. The preceding theorem proves that index is epsilon_i^L(S). Thus

    J^Lambda S=0 iff epsilon_i^L(S)<=lambda_i for every i.

If a generator is nonzero, simplicity makes J^Lambda S=S and the quotient projection vanishes. If every generator vanishes, projection is S. This proves the criterion over all fields and Q without citing the omitted proof of LV Proposition2.4. Since first strands are preserved by right restriction, raising preserves the cyclotomic subcategory. For right induction, its generic unique head either survives, in which case quotient induction has that same unique head, or dies, in which case the quotient induction is zero: any nonzero finite module has a simple quotient, and any such quotient of the original induction must be its unique head.

## Proof boundaries

The socle multiplicity here is one. The coefficient [r]_i is the entire maximum-epsilon composition part, up to shifts; [r]!_i applies to forgetting an entire r-strand nil-Hecke block. No normalization or generic canonical/global-basis theorem is used. The exact shift of the one-step head and socle should be recorded with the owner's selected normalization; uniqueness of shift orbit and dot index are shift-independent. The original10 maximal-tail, actual Mackey, nil-Hecke matrix and duality suppliers remain explicit dependencies rather than literature citations.
