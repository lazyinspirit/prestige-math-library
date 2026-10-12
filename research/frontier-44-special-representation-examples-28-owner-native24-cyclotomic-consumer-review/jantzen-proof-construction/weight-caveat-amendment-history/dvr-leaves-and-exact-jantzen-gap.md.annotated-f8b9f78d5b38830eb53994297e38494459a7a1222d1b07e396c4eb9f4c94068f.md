# Native24 J construction: proved linear-algebra leaves and exact open core

**Binding weight scope.** The actual Schur algebra C has only multipartition summands/weights. Polynomial and Γ series that allow arbitrary composition monomials are AUXILIARY combinatorial tableau series. Their coefficients at actual multipartition nu equal the required Kostka multiplicities and actual Schur weight determinants; no Schur modules, summands, or idempotents for other compositions are asserted.

Author: `/root/repair_klr_global_basis/native24_cyclotomic_jantzen_construction`.
Run: `frontier-44-special-representation-examples-28`.
This is proof construction, not a mathematical acceptance or consumer review. No canonical items, manifests, native evidence, plans, ready decisions, or gates were changed.

## Exact intended J interface

Proposed theorem ID: `thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations`.
Let F be ANY field, let q_H in F have finite multiplicative order e >= 2, let level ell be arbitrary, and let Q_a=q_H^{c_a}. Fix n>=1. Put O=F[t,t^{-1}]_{(t-1)}, pi=t-1, K=F(t), z=q_H t, X_a=Q_a t^{na}. Use the cyclotomic q-Schur algebra S_O(z;X), its standard Weyl lattice Delta_O(lambda), and its cellular bilinear form. Its generic fiber is to be split semisimple. The required formula, in the integer Grothendieck group of finite-dimensional S_F-modules, is

$$\sum_{s>0}[\Delta_F(\lambda)^s]=\sum_{\mu}J_{\lambda\mu}[\Delta_F(\mu)].$$

For a node x=(i,j,a) of lambda define r_x^lambda={(k,l,a) in [lambda]: k>=i,l>=j,(k+1,l+1,a) notin [lambda]}. Its foot is f_x^lambda=(lambda'_j,j,a), and leg length is lambda'_j-i. Write res_O(i,j,a)=z^{j-i}X_a. For lambda strictly dominating mu,

$$J_{\lambda\mu}=\sum_{x\in[\lambda]}\ \sum_{\substack{y\in[\mu]\\[\lambda]\setminus r_x^\lambda=[\mu]\setminus r_y^\mu}}(-1)^{\operatorname{leg}(r_x^\lambda)+\operatorname{leg}(r_y^\mu)}\nu_\pi(\operatorname{res}_O(f_x^\lambda)-\operatorname{res}_O(f_y^\mu));$$

otherwise J_{lambda mu}=0. Equality of the two remainder diagrams forces equal hook lengths. The formula concerns foot residues, not arbitrary nodes or head residues. In positive characteristic the valuation need not be 1.

This matches Lyle–Mathas, math/0607451v4, Definition 2.5 and Theorem 2.6, PDF pp.5–6. Their Theorem 2.6 cites James–Mathas [21], Theorem 4.3. The correct [21] title is **The Jantzen sum formula for cyclotomic q–Schur algebras**, Trans. AMS 352 (2000), 5381–5404, DOI 10.1090/S0002-9947-00-02492-2. The separate 1997 *A q-analogue of the Jantzen–Schaper theorem* is [20], not this source.

## Leaf A: Jantzen filtration over a DVR (full local proof)

Suggested ID: `lem-dvr-cellular-jantzen-filtration-and-gram-valuation`.

**Statement.** Let O be a DVR with uniformizer pi and residue field F. Let M be a finite free O-module with an O-valued bilinear pairing b whose scalar extension to Frac(O) is nondegenerate. Set M(s)={x:b(x,M) subset pi^s O} and M_F^s=(M(s)+pi M)/pi M. Then M_F^0=M/pi M, M_F^1=rad(b_F), the filtration terminates, and sum_{s>0}dim_F M_F^s=nu_pi(det G) for any Gram matrix G. If A acts on M with anti-involution * and b(ax,y)=b(x,a* y), all M(s), and hence M_F^s, are submodules. If M_F is a cellular standard module with nonzero cellular form, rad(b_F) is its unique maximal submodule and therefore its module radical.

**Proof.** View the form as an O-linear map phi:M -> M*=Hom_O(M,O), x -> b(x,-). Its determinant is nonzero, so it has full rank. A direct Smith reduction needs no characteristic restriction: choose a nonzero matrix entry of least valuation, move it to the upper-left corner, and multiply its row by a unit to make it pi^a. Every entry is divisible by pi^a. Row and column subtraction eliminate its column and row, leaving a smaller matrix over O. Iterate. Since all elimination coefficients belong to O and every operation is invertible over O, this gives independent bases of M and M* in which phi sends u_j to pi^{a_j}v_j, with all a_j>=0. Thus

$$M(s)=\bigoplus_j\pi^{\max(0,s-a_j)}O u_j,\qquad \dim_F M_F^s=\#\{j:a_j\ge s\}.$$

Consequently M_F^s=0 for s>max_j a_j and sum_{s>0}dim M_F^s=sum_j a_j=nu_pi(det G). Reduction mod pi shows directly that M(1)/its reduction consists of exactly the vectors orthogonal to every vector of M_F, proving M_F^1=rad(b_F). Contravariance gives b(ax,y)=b(x,a*y) in pi^s O whenever x in M(s), proving stability.

For the last assertion use the defining cellular multiplication, not merely the word cellularity: in the standard module, for every basis label u and label v the corresponding cell element acts as w -> b_F(v,w)u (with left/right conventions transposed if necessary). If a submodule N contains w outside rad(b_F), choose v with b_F(v,w) !=0. Every basis vector u belongs to N by this rank-one action, so N=M_F. Therefore every proper submodule is contained in rad(b_F). The radical itself is proper because the form is nonzero, and the same argument shows the quotient is simple. It is the unique maximal submodule and equals the module radical. This completes the proof, including characteristic 2: the Smith reduction uses different domain and codomain bases, never diagonalization of a symmetric form.

## Leaf B: selfadjoint weight decomposition (full local proof)

Suggested ID: `lem-selfadjoint-weight-gram-valuations-detect-jantzen-classes`.

**Statement.** In Leaf A suppose 1=sum_nu e_nu is a finite decomposition into pairwise orthogonal idempotents of A, with e_nu*=e_nu. Write M_nu=e_nu M and G_nu for the restricted Gram matrix. Then each M_nu is finite free, each restricted generic form is nondegenerate, and

$$\sum_{s>0}\dim_F e_\nu M_F^s=\nu_\pi(\det G_\nu).$$

For a split finite-dimensional highest-weight algebra S_F whose standard classes [Delta(mu)] form a Z-basis of K0, if the matrix K_{mu nu}=dim e_nu Delta(mu) has a square unitriangular submatrix indexed by partition weights, then the weight-character map ch:K0 -> Z^{weights}, [N] -> (dim e_nu N)_nu is injective. It follows that a class equality involving Jantzen pieces is equivalent to the corresponding equalities of weight Gram valuations.

**Proof.** The decomposition M=sum e_nu M is direct, and each summand is a direct summand of a finite free O-module, hence free: choose generators, use the preceding DVR elimination on the inclusion, or the fact that a submodule of a finite free module over the DVR is free. For nu!=rho, b(e_nu x,e_rho y)=b(x,e_nu e_rho y)=0. A vector in M_nu,K orthogonal to its summand is orthogonal to all summands and is zero by generic nondegeneracy. Thus the restricted form is nondegenerate. Orthogonality gives M(s)=direct sum M_nu(s), and reduction respects this direct sum. Leaf A applied to M_nu proves the displayed equality.

Each functor N -> e_nu N is exact: injectivity and kernels follow by restriction, and a lift of y=e_nu y in a quotient can be replaced by e_nu x. Thus ch is additive and defined on K0. Write an element as sum_mu a_mu[Delta(mu)]. Its coordinates on the partition weights are the integer row vector a multiplied by a unitriangular matrix K. This matrix is invertible over Z by finite triangular elimination. If the character is zero, a=0. Apply this injectivity to sum_s [Delta(lambda)^s] - sum_mu J_{lambda mu}[Delta(mu)] and use the valuation equality just proved. No Schur functor, residue-sequence character, rationalization, or semisimple Hecke Grothendieck group is used.

## Leaf C: exact binomial valuation (full local proof)

Suggested ID: `lem-laurent-binomial-valuation-at-one-over-any-field`.

**Statement.** For nonzero A,B in F and integers u,v, the valuation of A t^u-B t^v is zero if A!=B. If A=B and N=u-v!=0, it is 1 in characteristic zero, and p^{v_p(|N|)} in characteristic p>0. If A=B and N=0 the polynomial is zero and does not have finite valuation.

**Proof.** Multiplication by B t^v is a unit, so reduce to (A/B)t^N-1. If A/B!=1 its value at t=1 is nonzero. When A=B replace negative N by -N by multiplying by the unit -t^N. If char F=0, t^N-1=(t-1)(1+t+...+t^{N-1}), and the second factor evaluates to N!=0. In characteristic p, write N=p^r m with p not dividing m. Frobenius gives t^N-1=(t^m-1)^{p^r}; the same geometric-series factor for t^m-1 evaluates to the nonzero element m. The valuation is p^r. The zero case is immediate.

In the intended J expression, foot residues are Q_a q_H^{j-i} t^{na+j-i}. This leaf computes their difference exactly when it is nonzero and prevents replacing valuations by an equality-of-residues indicator in positive characteristic.

## Exact missing core; theorem J is NOT proved by this packet

Let K_{mu nu} denote the semistandard weight multiplicities supplied by Q, and let G_{lambda nu} be the Gram matrix on e_nu Delta_O(lambda) in an integral weight basis. The remaining necessary identity is

$$\nu_\pi(\det G_{\lambda\nu})=\sum_\mu J_{\lambda\mu}K_{\mu\nu}\quad\text{for EVERY Schur weight }\nu.$$

A sufficient stronger missing supplier is the semistandard weight Gram factorization, up to a unit of O, as a signed product of the foot-residue differences with exponents K_{mu nu} and the rim-hook signs above. Its proof must establish the integral weight Gram matrix, its generic diagonal/seminormal or branching factors, and the cancellation/alternation converting those factors into the signed rim-hook sum. Merely naming that product or citing James–Mathas is not a proof. This is the nontrivial remaining J core, not discharged by any of the leaves above.

Exact proposed Q IDs supplied by the Q constructor are `def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules`, `thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular`, and `thm-cyclotomic-schur-standards-and-schur-functor-control-block-linkage`. They are proposed contracts, not proved accepted suppliers: the Q constructor reports unresolved arbitrary-level Murphy/semistandard basis straightening and independently needed generic semisimplicity. J must not claim those gaps discharged. The precise Q inputs required are: the O-free cellular Schur algebra/standard lattices and contravariance; all finite selfadjoint orthogonal Schur weight idempotents; integral standard weight bases and semistandard multiplicities; split quasiheredity with standard Z-basis of K0 and triangular Kostka submatrix; generic split semisimplicity/nondegenerate standard forms for z=q_H t and X_a=Q_a t^{na}. These Q inputs may depend on Hecke basis/cellularity and elementary semisimple representation theory, but must NOT depend on J, Jantzen equivalence, or block classification. Leaf A identifies the radical once Q supplies nonzero standard forms after specialization.

## Why the lawful alternate does not close this gap

Mathas, *Positive Jantzen sum formulas for cyclotomic Hecke algebras*, arXiv:2106.15486v2, supplies a genuine alternate proof of a classical character sum for **Specht** modules. PDF pp.14–15 Lemma 4.1 and Proposition 4.3 prove the Smith/weight determinant reduction; pp.25–29 give the beta-number/standard-tableau determinant proof through Theorem 5.18. These are Hecke residue-sequence weight spaces indexed by standard tableaux. They do not establish G_{lambda nu} for Schur semistandard weight spaces. Applying the Schur functor to a desired Schur equality yields a Specht equality, but the converse fails without a separate injectivity result; the standard Specht classes need not be independent. LM p.5 explicitly contrasts the independent Weyl classes with potentially dependent Specht classes. Therefore no full integer K0 Schur theorem is claimed from the alternate source.

## Source recovery boundary

The sibling primitive constructor reports six original James–Mathas attempts (initial + five recovery candidates), including official AMS 403 and author guesses 404; cap exhausted. This constructor made zero James–Mathas fulltext fetches and will make no further original-source retries. Metadata-only reads of Mathas's current author index, Crossref and OpenAlex verified the DOI/title and identified no repository fulltext. An Internet Archive author-path CDX metadata search returned an empty array; no archive fulltext was retrieved. No paywall/access restriction was bypassed.

## Durable handoff

This J constructor is finished at the honest proof-construction boundary. Root alone owns any registration, append, integration, consumer review, and acceptance. Next action: obtain or independently prove the missing semistandard weight Gram factorization AND Q basis/generic-nondegeneracy prerequisites before authoring the proposed J theorem as proved. The current packet contains complete local proofs of the three leaves; it deliberately does not supply an acceptance verdict, confidence-one closure, citation-only fallback, or a narrowed characteristic/level theorem.
