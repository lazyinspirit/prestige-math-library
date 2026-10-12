# Signed rim hooks converted exactly to a finite beta/Jacobi–Trudi identity

Author: `/root/repair_klr_global_basis/native24_cyclotomic_jantzen_construction`. Same pending native24 first construction pass. This advances the remaining cancellation R beyond naming the original theorem: the signed hook side is converted, with a full local proof, into a finite explicit alternating determinant polynomial. Its equality with the explicit norm-factor count polynomial is the ONE unproved combinatorial identity below. No source retry, consumer review, native edit, or mathematical acceptance is made.

## 1. Characters as actual finite symmetric polynomials

Fix d>=n row labels per type component, with ordered variables x_(a,r), 1<=a<=ell,1<=r<=d. Put Y_a={x_(b,r):b>=a}, with the inherited order. For a shape lambda, Q's semistandard flag condition says that its physical component a is an ordinary semistandard tableau over alphabet Y_a. These components can be selected independently, so

$$\operatorname{ch}_\lambda(x)=\sum_{T\in\operatorname{SStd}(\lambda)}x^{\operatorname{wt}(T)}=\prod_{a=1}^{\ell}s_{\lambda^{(a)}}(Y_a).$$

The coefficient of x^nu is precisely K_{lambda nu}. This is the actual nested-alphabet character of the flagged Schur standards, not the Hecke residue character.

Here s_rho(Y)=det(h_{rho_i-i+j}(Y))_{1<=i,j<=N}, for any N>=length(rho), h_0=1,h_k=0 for k<0. For completeness this determinant equals the ordinary semistandard generating polynomial by a finite cancellation proof. A path from (-j,1) to (rho_i-i,m), using east and north unit steps and weighting an east step at height r by y_r, has generating polynomial h_{rho_i-i+j}(Y). Expand the determinant as signed families of these paths with permuted ends. Choose the first intersection in a fixed coordinate/lexicographic order and exchange the two tails after it. The exchange is an involution, preserves monomial weight, and reverses the end permutation's sign; thus all intersecting families cancel. In a nonintersecting family the planar order of the start and end points forces the identity matching, and the east-step heights in path i are the entries of row i. The offset by -i means nonintersection is exactly strict increase down columns, while east/north ordering gives weak increase along rows. Hence the surviving families are precisely semistandard tableaux with positive sign. This also proves the empty and short-row cases; paths of negative horizontal length do not exist. Thus no unproved Schur-character formula is being used as the cancellation sought below.

## 2. Generalized beta determinants and their signs

Choose N>=n, put beta_(a,i)=lambda_i^(a)+N-i (append zero parts), and for any nonnegative integer array v=(v_(a,i)) define

$$\chi(v;x)=\prod_{a=1}^{\ell}\det\big(h_{v_{a,i}-N+j}(Y_a)\big)_{1\le i,j\le N}.$$

If two entries in one component of v agree, its determinant has equal rows and is zero. Otherwise sort that component into strictly decreasing order v'_1>...>v'_N>=0. It determines a partition rho_i=v'_i-N+i: the distinct nonnegative entries imply v'_i>=N-i, and adjacent differences imply rho_i>=rho_(i+1). Permuting the determinant's rows gives

$$\chi(v;x)=\varepsilon(v)\prod_a s_{\rho^{(a)}}(Y_a),$$

where epsilon is the product of the sorting-permutation signs. These are literal determinant identities over Z[x]. In particular every coefficient is the signed Kostka multiplicity, including zero when a shifted beta array has a repeated bead.

A beta move from a bead v+L to an unoccupied position v removes a rim hook of length L. Its foot content is v-N+1, and its leg length is the number of beads strictly between v and v+L. Here is the elementary boundary argument, so this correspondence is not a citation: trace the southeast boundary of the partition as a sequence of horizontal/vertical unit steps, labelling successive positions by integers. Vertical steps correspond to the occupied beta positions lambda_i+N-i. Swapping the vertical step at v+L with the horizontal step at v cuts off the contiguous boundary strip between those steps. There are L boxes in that strip (one for every intervening boundary position), the vertical interior steps are exactly its leg increments, and the final vertical coordinate yields foot content v-N+1. Reversing this swap adds that strip. Equivalently, sorting the beta list after lowering one bead crosses exactly the rows occupied by those interior vertical steps, one transposition per leg box. Thus its permutation sign is (-1)^leg. The same proof applies to an addition from v to v+L, and also proves uniqueness of the rim hook from the source/target bead pair.

## 3. Finite alternating polynomial for the complete hook side

Write V(f)=nu_(t-1)(f) under the EXACT LM deformation z=q_H t,U_a=Q_a t^(na). Monomial factors in z and U_a are units and have valuation zero. In each sum below omit terms for which chi is the zero polynomial BEFORE evaluating V: a zero determinant cannot multiply an infinite valuation. The displayed factors on every nonzero retained term are nonzero by the foot-exponent separation proof. Define

$$\mathcal B_\lambda(x)=\sum_{1\le a<b\le\ell}\ \sum_{i,j=1}^N\ \sum_{h=1}^{\beta_{a,i}}\chi(\beta-h e_{a,i}+h e_{b,j};x)\,V(U_a z^{\beta_{a,i}-h}-U_b z^{\beta_{b,j}})+\sum_{a=1}^{\ell}\ \sum_{1\le i<j\le N}\ \sum_{h=1}^{\beta_{a,i}-\beta_{a,j}-1}\chi(\beta-h e_{a,i}+h e_{a,j};x)\,V(U_a z^{\beta_{a,i}-h}-U_a z^{\beta_{a,j}}).$$

**Proved identity.** This finite expression is exactly

$$\mathcal B_\lambda(x)=\sum_{\mu:\lambda\triangleright\mu}J_{\lambda\mu}\operatorname{ch}_\mu(x),$$

where J is the actual equal-length rim-hook, foot-residue valuation coefficient specified by LM.

**Full proof for crosscomponent terms.** Remove a hook of length h from physical component a by moving beta_(a,i) to beta_(a,i)-h. Add a hook of length h to component b by moving beta_(b,j) to beta_(b,j)+h. If a<b, removing h boxes earlier and adding them later gives lambda strictly dominating the result: within a the removed diagram is a subdiagram, between a and b the total deficit is h, and within b no initial-row increase can exceed h. If a>b the earlier component instead gains h, so lambda cannot dominate the result and that term is absent from J. Every permitted pair of hooks in different components occurs once by the unique bead description.

If a source removal target is occupied, the shifted array in component a has repeated entries and chi=0. The same holds if the addition target is occupied in component b. Conversely a nonzero shifted determinant means both targets are unoccupied, and both moves are valid hooks. The range h<=beta_(a,i) guarantees the lowered position is nonnegative. This range contains every actual removal; an h exceeding the component's size cannot leave N distinct nonnegative beads because their sum would be below N(N-1)/2, so these spurious terms also have chi=0. Sorting the shifted arrays has sign (-1)^(removed leg+added leg), by §2. The foot contents are beta_(a,i)-h-N+1 and beta_(b,j)-N+1. Their deformed residue difference is z^(-N+1)(U_a z^(beta_(a,i)-h)-U_b z^beta_(b,j)). The prefactor is a unit, giving exactly the valuation in the displayed crosscomponent sum. Every such contribution therefore agrees with its full J summand, with its sign and character.

**Full proof for one component.** The two moved beads must be distinct; restoring the very bead just removed gives mu=lambda, excluded from J. Write the removed bead as beta_i and the added bead as beta_j. If i>j, the transfer subtracts from the smaller bead and adds to the larger, making the sorted beta list strictly more spread out. It therefore makes mu dominate lambda, rather than the required reverse dominance. If i<j, put D=beta_i-beta_j>0. For 0<h<D both resulting bead values lie strictly inside the old interval [beta_j,beta_i], with the same sum; replacing two coordinates by this inward transfer can only decrease every sorted initial-coordinate sum, with at least one strict decrease. Subtracting the fixed staircase from sorted beta coordinates preserves these dominance inequalities, so lambda strictly dominates mu. If h=D, the two beads are exchanged and mu=lambda. If h>D, both new extreme values lie outside the old interval, so the reverse strict dominance holds. This proves that precisely the finite range 1<=h<=D-1 is required. One can justify the sorted-sum assertion directly: the sum of the k largest coordinates is max_{|S|=k}sum_{r in S}v_r; for a two-coordinate inward transfer with fixed sum and reduced max, all such maxima weakly decrease, and the reverse argument handles the outward transfer.

Within that range, if a removal or addition target is occupied by an unchanged bead, the final array has a repeated entry and chi=0. A target occupied by the other moved bead would require h=D, already excluded. Thus nonzero determinant terms correspond exactly to valid samecomponent hook pairs with common remainder. Their signs are again the product of the two bead-sorting signs; if the moving beads cross each other in the two-step motion, that crossing is counted in the appropriate leg and in the final sorting permutation alike. The same unit z^(-N+1) converts the beta difference to the two foot residues. Hence these summands agree exactly with the one-component part of J. No hook pair has been lost or added, proving the identity.

## 4. ONE precise remaining combinatorial identity

The sibling exact pair-factor reduction defines the finite polynomial

$$\mathcal L_\lambda(x)=\sum_{T\in\operatorname{SStd}(\lambda)}x^{\operatorname{wt}(T)}\,V\left(\frac{\gamma_{t_T}}{C_{t_T}u_T}\right),$$

with t_T the dominance-MINIMAL standard refinement. By the local parabolic computation and the sibling monic Schur eigenbasis, its coefficient at x^nu is V(det G_(lambda nu)). Moreover its summands now have only the following explicit factors, with no unspecified Gram determinant: boundary factors (r_x-U_b) for physicalcomponent(x)<b<=typecomponent_T(x); C+(A,B)=(zB-A)/(B-A) for same physical row/different labels and different physical rows/same label; and R(A,B)=(zB-A)(B-zA)/(B-A)^2 for different-label row-reading inversion pairs. All factors and node-pair ordering are fixed by the tableau. This is the sibling's genuine norm-factor cancellation, not the desired final identity.

The sole remaining combinatorial assertion is the finite polynomial equality

$$\boxed{\mathcal L_\lambda(x)=\mathcal B_\lambda(x).}$$

Both sides have been reduced to completely explicit, independent finite enumerations. On the left are flagged semistandard tableaux and their boundary/pair factors; on the right are shifted beta arrays and alternating Jacobi–Trudi determinants. Establishing their equality requires a weight-preserving cancellation/bijection converting the left node-pair constraints into the right signed bead moves. That final cancellation has NOT been constructed. Calling the boxed equality a known Jantzen determinant formula would only rename the missing proof, and is not done here. Its coefficientwise form is precisely what the full integer K0 J theorem needs, but the construction has now isolated it as an explicit combinatorial polynomial problem rather than a missing algebraic Schur construction, generic nondegeneracy argument, or source quotation.

## 5. Two exact sanity identities, not a general proof

For level1 lambda=(2), N=2 and beta=(3,0), the two nonzero shifted determinants are chi(2,1)=s_(1,1) and chi(1,2)=-s_(1,1). Thus B_lambda=(V(z²-1)-V(z-1))s_(1,1), exactly the ordinary [2]_z factor. Since q_H!=1, V(z-1)=0 in the current scope, but retaining it displays the actual rational factor.

For level1 lambda=(3), N=3 and beta=(5,1,0), direct row sorting gives B_lambda=(V(z³-1)-V(z-1))s_(2,1)+(V(z²-1)-V(z³-1))s_(1,1,1). At weight (1,1,1), the Kostka multiplicities are2 and1, so the total valuation is V([2]_z[3]_z), agreeing with the explicit row-reading Specht norm. At weight (1,2), the multiplicities are1 and0, giving V([3]_z), agreeing with the Schur norm ratio. These examples check the signs, ranges, and foot shift; they do not prove the boxed identity for arbitrary lambda.

## Durable handoff

Full J remains unproved pending the boxed combinatorial cancellation. The earlier exhausted original-source record remains binding. The next action is a genuine tableau-pair to alternating-beta cancellation proof; algebraic construction, exact norm product, radical/filtration leaves, and finite foot valuations have local routes and must remain separately bound. Root alone integrates or accepts any supplier. No source full-proof reading or native acceptance was claimed by this continuation.
