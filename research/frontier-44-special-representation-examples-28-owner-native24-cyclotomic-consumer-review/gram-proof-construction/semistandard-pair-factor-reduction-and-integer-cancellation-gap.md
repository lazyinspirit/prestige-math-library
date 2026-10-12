# Exact semistandard pair-factor reduction and the remaining integer identity

Author: `/root/repair_klr_global_basis/native24_schur_weight_gram_construction`.
Run: `frontier-44-special-representation-examples-28`.
Research construction only; the signed cancellation remains open. This note consumes the monic transition proof in this directory and the J constructor's actual local symmetrizer/Specht norm computations in `../jantzen-proof-construction/explicit-parabolic-factor-and-schur-gram-product.md`. That sibling file was read in full as a local draft; this is not a new source read or an acceptance of any supplier.

## 1. An inversion-set formula for the actual seminormal norm

Fix a shape $\lambda$ and order its nodes by the initial physical row-reading order: first component, then row, then column. Write $x<y$ for this order and $r_x=U_{a(x)}z^{\operatorname{content}(x)}$. For a semistandard $T$, let $L_T(x)$ be its type-row label in the total type order (first type component, then its row). Within each equal-label class, the dominance-minimal standard refinement orders physical components and physical rows in reverse order, and the nodes inside a single physical row left-to-right. Write $t_T(x)$ for its resulting integer.

Define

$$C(A,B)=\frac{zB-A}{B-A},\qquad R(A,B)=\frac{(zB-A)(B-zA)}{(B-A)^2}.$$

The initial norm and the actual adjacent standard-swap recurrence from the J constructor give

$$\gamma_{t_T}=\gamma_{t^\lambda}\prod_{\substack{x<y\\t_T(x)>t_T(y)}}R(r_x,r_y).\tag{1}$$

**Proof.** Standard tableaux are linear extensions of the Young-node order. Bubble-sort the target extension toward the initial extension, swapping adjacent inverted nodes. Every swapped pair is incomparable: comparable nodes have the same order in both extensions. Each target inversion is swapped exactly once and no other pair is swapped. Reversing the swaps gives a standard path from $t^\lambda$ to $t_T$, along which the actual norm recurrence multiplies by $R$. The expression $R(A,B)$ is unchanged on exchanging $A,B$, as seen by reversing both numerator factors and the denominator. Thus its factor depends only on the unordered node pair, and the path gives exactly (1). This is an inversion-set evaluation, rather than an unspecified path algorithm.

Every factor is nonzero in the universal field and in the LM generic field. Incomparable nodes in one component have content difference of absolute value at least two: an upper incomparable node is strictly to the right of a lower node, giving at least one column plus one row difference. Distinct components of the fixed size-$n$ shape have content difference bounded by $n-2$, so neither that difference nor that difference shifted by one can cancel the exponent $n(a-b)$. No zero factor is canceled formally.

## 2. Cancel the component factors and the physical row factorials exactly

The initial component product divided by $u_T$ is

$$\frac{\gamma_{t^\lambda}}{u_T}=P_\lambda(z)B_T,\qquad B_T=\prod_{x\in[\lambda]}\prod_{a(x)<b\le a_T(x)}(r_x-U_b),\tag{2}$$

where $a_T(x)$ is the type component of its label. The flag condition $a(x)\le a_T(x)$ makes this a literal cancellation of nested finite products. No omitted denominator or unit remains.

For the nodes in one physical row of length $r$, their residues in row-reading order are $A_j=A_1z^{j-1}$. Hence

$$\prod_{i<j}C(A_i,A_j)=\prod_{d=1}^{r-1}\left(\frac{z^{d+1}-1}{z^d-1}\right)^{r-d}=\prod_{k=2}^{r}\frac{z^k-1}{z-1}=[r]_z!.$$

Each exponent on the middle expression is the number $r-d$ of pairs at column distance $d$. Subtracting the numerator and denominator exponents leaves exponent one for $z^k-1$, $2\le k\le r$, and exponent $-(r-1)$ for $z-1$, proving the displayed telescoping identity. Thus

$$P_\lambda(z)=\prod_{\substack{x<y\\x,y\text{ in the same physical row}}}C(r_x,r_y).\tag{3}$$

Now divide the monic norm product by the actual symmetrizer coefficient $C_{t_T}$. For each $x<y$ there are only the following cases.

* If the nodes are in the same physical row and have the same label, their order in $t_T$ is unchanged. The denominator contributes $C(r_x,r_y)$ and (3) cancels it; no inversion factor occurs.
* If they are in the same physical row and have different labels, row weakness forces $L_T(x)<L_T(y)$. The physical-row factor $C(r_x,r_y)$ remains, with no symmetrizer or inversion factor.
* If they are in different physical rows (including different components) and have the same label, the minimal refinement reverses their order. The numerator has the inversion factor $R(r_x,r_y)$ and the symmetrizer denominator has $C(r_y,r_x)=(r_y-zr_x)/(r_y-r_x)$. Their quotient is exactly $C(r_x,r_y)$.
* If they are in different physical rows and have different labels, there is no physical-row or symmetrizer factor. An inversion factor $R(r_x,r_y)$ occurs exactly when $L_T(x)>L_T(y)$.

This case division is exhaustive, and therefore the Schur norm is the exact rational product

$$\frac{\gamma_{t_T}}{C_{t_T}u_T}=B_T\prod_{(x,y)\in\mathcal C(T)}C(r_x,r_y)\prod_{(x,y)\in\mathcal I(T)}R(r_x,r_y),\tag{4}$$

where $\mathcal C(T)$ consists of pairs $x<y$ with either the same physical row and different labels, or different physical rows and the same label; and $\mathcal I(T)$ consists of pairs $x<y$ in different physical rows with $L_T(x)>L_T(y)$. Equal-label nodes in different rows of the same component form a horizontal strip, so their contents differ by at least two; within a physical row the contents strictly increase. These observations again exclude zero numerator/denominator factors in (4).

The determinant-one transition now gives

$$\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}B_T\prod_{x<y}C(r_x,r_y)^{c_{xy}}R(r_x,r_y)^{i_{xy}},\tag{5}$$

with the explicit nonnegative integers

$$c_{xy}=\#\{T:(x,y)\in\mathcal C(T)\},\qquad i_{xy}=\#\{T:(x,y)\in\mathcal I(T)\}.$$

Also set $b_{xb}=\#\{T:a_T(x)\ge b\}$ for $a(x)<b$. Then $\prod_T B_T=\prod_x\prod_{b>a(x)}(r_x-U_b)^{b_{xb}}$. Formula (5) reduces the left side to three kinds of plain semistandard counts, with no uncomputed spectral norms, transitions, or permutations.

## 3. The smallest outstanding combinatorial equality

A useful exact sufficient form of the remaining cancellation is an integer identity for each irreducible binomial divisor. Work in the UFD

$$\mathscr R=\mathbb Z[z^{\pm1},U_1^{\pm1},\ldots,U_\ell^{\pm1}].$$

Every nonzero factor in (5), and every nonzero rim-hook foot difference, is, up to a Laurent monomial and sign, either a crosscomponent binomial $U_a z^h-U_b$ with $a<b$, or a same-component factor $z^h-1$ with $h\ne0$. The former is irreducible because its monomial exponent difference has a coefficient $1$ in a $U$ variable: eliminate that variable to identify its quotient with a Laurent polynomial domain, and use degree one in that variable. The latter decomposes into the integer cyclotomic polynomials $\Phi_d(z)$ for $d\mid |h|$, each once. Negative exponents differ only by a Laurent unit. Thus these factors have no integer-prime divisors and the relevant irreducibles are precisely $U_a z^h-U_b$ and $\Phi_d(z)$.

For such an irreducible $p$, write $v_p$ for its multiplicity in a nonzero rational function over $\mathscr R$. Define the entirely explicit integer

$$M_p=\sum_x\sum_{b>a(x)}b_{xb}v_p(r_x-U_b)+\sum_{x<y}c_{xy}\bigl(v_p(zr_y-r_x)-v_p(r_y-r_x)\bigr)+\sum_{x<y}i_{xy}\bigl(v_p(zr_y-r_x)+v_p(r_y-zr_x)-2v_p(r_y-r_x)\bigr).\tag{6}$$

For the prescribed signed equal-length rim-hook pairs define

$$H_p=\sum_{\mu:\lambda\triangleright\mu}K_{\mu\nu}\sum_{\substack{x\in[\lambda],y\in[\mu]\\[\lambda]\setminus r_x^\lambda=[\mu]\setminus r_y^\mu}}(-1)^{\operatorname{leg}(r_x^\lambda)+\operatorname{leg}(r_y^\mu)}v_p\bigl(\operatorname{res}(f_x^\lambda)-\operatorname{res}(f_y^\mu)\bigr).\tag{7}$$

The unresolved uniform combinatorial assertion is

$$M_p=H_p\qquad\text{for every such }p,\text{ every }\lambda,\nu,\ell,n.\tag{8}$$

This is now a specific equality between three semistandard pair/component counts and signed rim-hook multiplicities. It is not an appeal to the desired Jantzen theorem. If (8) were proved, UFD factorization would make the rational product in (5) equal, up to a Laurent monomial and sign, to the signed rim-hook product. All used binomials remain nonzero under the LM specialization by the local pair bounds and the parent's rim-hook foot-exponent separation proof. Laurent units specialize to units at $t=1$. The equality would therefore imply exactly the requested valuation identity over every $F$, even when distinct integer cyclotomic factors merge after reduction in characteristic $p$. One must specialize the rational product equality, rather than claim its irreducible factors remain distinct over $F$.

Assertion (8) is stronger than necessary for a fixed LM DVR, but it is a precise sufficient supplier whose arbitrary-characteristic consequence is fully justified. Conversely the desired single-DVR valuation identity does not imply (8). No equivalence in that direction is claimed.

## 4. Boundary and coordinated next action

The inversion-set formula, component cancellation, row-factorial telescoping, and pair cases prove (4)–(6) from the reviewed local algebraic inputs. They do not prove (8). The J constructor owns a separate beta-number/Jacobi–Trudi conversion of (7), so that derivation is not duplicated here. Combining its exact signed beta sum with (6) would leave one explicit combinatorial identity involving semistandard pair counts and straightened Jacobi–Trudi determinants. That identity still needs a genuine proof, for example a sign-reversing tableau/path argument that retains component flags and every hook leg sign. Merely writing that there is a cancellation, replacing it by small enumerations, or treating the known source formula as proof would be unsound.

No native item, plan, gate, acceptance, counter, or source-recovery budget was changed. The full Schur rim-hook Gram valuation formula remains open at (8), preserving arbitrary field and arbitrary level.
