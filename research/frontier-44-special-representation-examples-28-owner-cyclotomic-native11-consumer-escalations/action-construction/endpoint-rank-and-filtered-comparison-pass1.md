# Endpoint coefficient rank and finite filtered comparison

First-pass construction by `/root/repair_klr_global_basis/cyclotomic_action_construction`, run `frontier-44-special-representation-examples-28`. This checks the specific missing combinatorics in the trace helper's `endpoint-normal-form-construction.md`. It is an author construction, not independent item acceptance. Its inputs are the explicitly constructed canonical rho maps, the integral divided-difference leading-term lemma, and the trace helper's displayed sliding/straightening calculation and finite nil-Coxeter projectivity factorization.

## Formal recursive coefficients and exact count

Let m,n≥0, r=m−n+λ<0 and R=−r>0. For 0≤i≤min(m,n), the desired finite coefficient module L_i has basis consisting of:

* a minimal coset in S_m/S_{m−i}, with m!/(m−i)! possibilities;
* a minimal coset in S_n/S_{n−i}, with n!/(n−i)! possibilities;
* a partition in an i×(R−i) rectangle, with binom(R,i) possibilities.

The rectangle count follows by sending its weakly decreasing parts μ_1≥…≥μ_i≥0 to the strictly decreasing i-tuple (μ_1+i−1,…,μ_i), a subset of {0,…,R−1}. If R<i the count is zero. Thus

$$\operatorname{rank}L_i=\frac{m!}{(m-i)!}\frac{n!}{(n-i)!}\binom Ri.$$

The recursive coefficient module must initially be a **formal direct sum** of free modules. Do not identify it with the sum of its images in NH_m⊗_{NH_i}NH_n before independence is proved. Its two families at level i are:

Old: L(m,n−1,i,λ), whose rectangle bound is R−1−i, because its r is r+1.

New: L(m,n−1,i−1,λ) times the n=1 coefficient module L(m−i+1,1,1,λ−2(n−i)). The latter has r_new=r−n+i, and rank (m−i+1)(R+n−i).

Define

$$K=\frac{m!}{(m-i)!}\frac{(n-1)!}{(n-i)!}.$$

For i>0, the old family has rank

$$(n-i)K\binom{R-1}{i},$$

including the zero case n=i. The new family's rank is

$$\left[\frac{m!}{(m-i+1)!}\frac{(n-1)!}{(n-i)!}\binom{R-1}{i-1}\right](m-i+1)(R+n-i)=K(R+n-i)\binom{R-1}{i-1}.$$

The total is exactly the desired rank:

$$(n-i)\binom{R-1}{i}+(R+n-i)\binom{R-1}{i-1}=n\binom Ri.$$

Indeed subtract n times Pascal's identity. The remainder is −i binom(R−1,i)+(R−i)binom(R−1,i−1)=0, the latter equality being immediate by counting i-subsets with a marked element (or by factorials). Boundary i=R has first term zero and second term n; i>R has both sides zero. At i=0 there is only the unchanged identity/crossing coefficient. Consequently there is no extra multiplicity in the recursive **formal** coefficient family.

## Socle multiplicity, with the necessary projectivity condition explicit

Raw rank alone does not determine the socle of an arbitrary finite nil-Coxeter module. Let C_a denote the finite nil-Coxeter algebra with basis T_w, w∈S_a; dim C_a=a!. The actual coefficient bimodule used before tensoring the remaining functor is L_i multiplied on the right by C_{m−i}⊗C_{n−i}^{op}. Its rank is

$$\operatorname{rank}L_i\,(m-i)!(n-i)!=m!n!\binom Ri.$$

The finite-C coefficient factorization is the essential additional input. By the PBW coset basis, induction from C_{m−i} to C_m and C_{n−i} to C_n is free on the stated cosets. By the Artin polynomial basis, the nil-Hecke module on a remaining block is free over its finite nil-Coxeter subalgebra: {T_w(z_a)} is its explicit basis over symmetric coefficients, where z_a is the normalized staircase. Tensoring this factorization with the remaining functor gives relative projectivity for the coefficient bimodule, exactly as displayed in the trace construction. In particular, **after this explicit relative-free factorization**, multiplication by Ω=T_{w_m}⊗T_{w_n} picks one coordinate per C_m⊗C_n regular factor. The socle coefficient multiplicity is therefore binom(R,i). Applying the same extension to the formal recursive family and its just-computed equal rank gives the same binom(R,i). This is the multiplicity check that a count of rectangle partitions alone did not supply.

One must not assert a full NH_m⊗NH_n module action on the bounded rectangle source before proving the comparison invertible: a dot can leave the rectangle or mix the pairing levels. Thus the full nil-Hecke primitive-idempotent shortcut is inapplicable to that source. The finite nil-Coxeter projectivity factorization above is retained.

## Why the polynomial leading terms now give a square invertible comparison

Use the deterministic straightening in the trace helper's construction. Filter by the number i of paired units, with terms having j>i handled first. On the Ω coordinate, the old family consists of partitions with maximum part at most R−i−1. The new family contains the one exceptional top exponent l=R+n−i−1. The proved integral leading-term formula sends that exponent and μ in the (i−1)×(R−i) rectangle to

$$m_{\mu\cup\{R-i\}}+\text{terms with maximum part }<R-i.$$

This added part lists **each missing partition exactly once**: any partition in the i×(R−i) rectangle that is not in the smaller i×(R−i−1) rectangle contains a part R−i; deleting one occurrence of that maximum gives a unique (i−1)-part partition in the stated rectangle. Repeated maximum parts do not create multiplicities, since the monomial symmetric basis and the deletion operation both use distinct exponent multisets, and the leading coefficient in the integral lemma is 1. Lower l values and lower inner exponents land either in the old polynomial bound or in already-handled levels j>i. The sliding/straightening equality supplies the actual arrow identities for this reduction, rather than merely an equality of numerical ranks.

Thus the straightening algorithm defines a surjective diagonal comparison on each Ω coefficient coordinate: old partitions plus the unique top-insertion partitions span the whole desired rectangle basis with coefficient 1. The formal recursive and target coordinate modules have equal finite rank, as proved above with the finite-C factorization. Hence this diagonal comparison is an isomorphism. This implication is valid integrally: a surjection between finite free Z-modules of the same rank has a torsion-free kernel of rank zero, so its kernel vanishes; alternatively the explicit pivots give a unit triangular matrix. Base change preserves that integral isomorphism over every field, including positive characteristic. When residual symmetric coefficients occur, the same pivot argument is over their polynomial ring, with the same unit diagonal; it does not require a rank argument over a noncommutative endomorphism ring.

The off-diagonal components produced by moving symmetric coefficients through the smaller σ_{m−i,n−i} comparison map into levels j>i. There are finitely many levels. A block-triangular morphism in any additive category with isomorphisms on its diagonal is invertible: write it as D(1+N), with D diagonal invertible and N strictly triangular; N^{min(m,n)+1}=0, so its inverse is (1−N+N²−… )D^{-1}. This is an explicit finite inverse and does not infer independence of arrow images from ranks. The nil-Coxeter socle criterion from the explicit relative projectivity then upgrades the Ω comparison to the whole map. This closes the recursive equal-rank/diagonal issue in the trace helper's proof, subject to the recorded sliding/straightening identities; no second adjunction has been used.

## Endpoint obtained from that actual comparison

At (m,n,λ)=(N,N,−N), on v with Hv=0, all levels i<N contain a positive rightmost H power and vanish. The surviving coefficient has rectangle N×0 and hence one partition. The finite nil-Hecke primitive projectors on the N G-strands and the N H-strands reduce the (N!)² staircase/coset coefficient space to one regular scalar coordinate, with no factorial inversion. The induced map is exactly the iterated ordinary-adjunction unit

$$v\longrightarrow H^{(N)}G^{(N)}v.$$

The preceding actual comparison therefore makes this unit an isomorphism, not just a K_0 equality. Ordinary adjunction identifies End(G^(N)v) with Hom(v,H^(N)G^(N)v); under that identification G^(N)(f) corresponds to this unit composed with f. Thus End(v)→End(G^(N)v) is an isomorphism.

This endpoint closes the requested nil-Hecke normal-form obstruction when integrated with the trace helper's explicit canonical-rho induction and its finite-C coefficient factorization. It does not assert that a split map S→End(v) is surjective, does not yet identify the formal universal vacuum's whole endomorphism algebra with S, and does not prove different-color crossing mates. Those distinct obligations remain with the trace/model comparison construction.
