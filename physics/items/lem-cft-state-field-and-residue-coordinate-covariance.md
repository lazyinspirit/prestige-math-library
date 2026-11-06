---
id: lem-cft-state-field-and-residue-coordinate-covariance
kind: lemma
title: Formal field and residue covariance for generalized VOA modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-grading-restricted-generalized-vertex-module
  - def-formal-laurent-series-and-residue
  - def-cft-contragredient-generalized-module
  - lem-cft-formal-coordinate-change-action
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-formal-laurent-series-and-residue: mathematical-premise
  def-cft-contragredient-generalized-module: mathematical-premise
  lem-cft-formal-coordinate-change-action: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Bin Gui, Lectures on Vertex Operator Algebras and Conformal Blocks"
      url: https://arxiv.org/pdf/2305.03822v1
      locator: "Theorem 10.6, (10.25)-(10.26), and complete proof in §10.9, printed pp. 103-106; generalized-module and joint-module details supplied locally."
    - title: "Bin Gui and Hao Zhang, Analytic Conformal Blocks of C2-cofinite Vertex Operator Algebras I"
      url: https://arxiv.org/pdf/2305.10180v4
      locator: "§§1.4-1.5, (1.22)-(1.25); §2.1, (2.3)-(2.4) and Remark 2.6."
---

## Statement

Let $V$ be a CFT-type conformal vertex algebra over $\mathbb C$ and $M$ a grading-restricted generalized left $V$-module. Fix the same normalization on every module: define $H_M$ on $M_{[h]}$ as the scalar $\lfloor\operatorname{Re}h\rfloor\in\mathbb Z$. It is an integral grading bounded below, although it need not be nonnegative. For a formal coordinate $\rho(t)=a\exp(\sum_{n>0}c_nt^{n+1}\partial_t)t$, $a\ne0$, put
$$
U_M^H(\rho)=a^{H_M}\exp\!\left(\sum_{n>0}c_nL_M(n)\right),\qquad \rho_z(t)=\rho(z+t)-\rho(z).
$$
These are well-defined operators and $U_M^H$ is a representation of the formal coordinate group, natural in all module homomorphisms. Let $U_V$ be its integral-weight state-space coordinate operator. For every $v\in V$ the following identity holds coefficientwise on each vector of $M$:
$$
U_M^H(\rho)Y_M(v,z)U_M^H(\rho)^{-1}=Y_M\!\left(U_V(\rho_z)v,\rho(z)\right).
$$
Here the right-hand side is expanded as a formal Laurent series; the state argument lies in a finite-dimensional weight truncation tensored with $\mathbb C\llbracket z\rrbracket$.

If $A(z)\in V_{\le d}\otimes\mathbb C((z))$ is a state-valued differential coefficient, define $B(w)$ by
$$
B(\rho(z))\rho'(z)=U_V(\rho_z)A(z).
$$
Then $B(w)$ is again a finite-weight state-valued Laurent series and the residue operators satisfy
$$
\operatorname{Res}_{w=0}Y_M(B(w),w)\,dw=U_M^H(\rho)\left(\operatorname{Res}_{z=0}Y_M(A(z),z)\,dz\right)U_M^H(\rho)^{-1}.
$$
Each residue is a finite sum on every module vector. This proves covariance of the residue actions used for fixed marked coordinates. The argument does not require the sum of all generalized-weight spaces below a bound, or any full auxiliary $H_M$-grade, to be finite dimensional. It does use the finite-dimensional individual generalized-weight spaces required by the stated module hypothesis; in the component extension, each joint block is likewise finite dimensional as stated.

The component extension means finitely many commuting left V-module actions $Y_j$ on M, with commuting operators $L_j(0)$ and an algebraic joint generalized-weight direct sum $M=\bigoplus_{\lambda\in\mathbb C^k}M_{[\lambda]}$. Each joint block is finite dimensional, every vector has finite weight support, and for each j there is a real lower bound for the occurring $\operatorname{Re}\lambda_j$. Define $H_j$ on that block as $\lfloor\operatorname{Re}\lambda_j\rfloor$ and use the jth Virasoro operators in $U_j^H$. The component residue identities hold with these operators; the sum of local actions conjugates by their commuting product, naturally for maps commuting with every component field.

The normalized dilation generator is $H_M$, which need not equal the conformal operator $L_M(0)$. For any $\alpha\in\mathbb C$ with $e^\alpha=a$, the operator
$$
K_M(\rho,\alpha)=e^{\alpha L_M(0)}\exp\!\left(\sum_{n>0}c_nL_M(n)\right)
$$
has the same conjugation action on every module field and residue operator as $U_M^H(\rho)$, and these $K_M$ intertwine every module homomorphism when the same $\alpha$ is used. Their conjugation action is independent of $\alpha$. The branch-free normalized representation is not asserted to have infinitesimal dilation $L_M(0)$. Retaining that particular generator instead uses the logarithm lift; its loop acts by $e^{2\pi iL_M(0)}$, which may be nontrivial.

For outgoing dual factors the same residue convention uses the left contragredient action. For a Laurent polynomial state-valued differential in the two-point inversion $w=z^{-1}$, its defining opposite-field transpose gives the ordinary negative transpose of the incoming residue after transforming the state-valued differential; no additional outgoing sign is inserted in the sum of local residue actions. This last assertion is a pairing identity for the specified candidate action and does not independently assert its module axioms.

## Statement references

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-module]]

[[def-grading-restricted-generalized-vertex-module]]

[[def-formal-laurent-series-and-residue]]

[[def-cft-contragredient-generalized-module]]

[[lem-cft-formal-coordinate-change-action]]

## Facts & Assumptions

[F1] [[def-conformal-vertex-algebra]] supplies the nonnegative integral state grading, $L(-1)=T$, the Virasoro relations, and creation $Y(v,x)\mathbf1=e^{xT}v$.

[F2] [[def-vertex-algebra-module]] supplies module vacuum, lower truncation, and its full formal delta-function Jacobi identity, with the stated expansion conventions. [[def-grading-restricted-generalized-vertex-module]] supplies the generalized weight direct sum and lower real weight bound.

[F3] [[lem-cft-formal-coordinate-change-action]] supplies the state-space representation $U_V$ on complex holomorphic germs, its finite-weight restrictions and holomorphic parameter variation. The formal-jet extension needed here is derived in step 3.2, rather than assumed as an additional supplier conclusion.

[F4] Residue is the coefficient of $z^{-1}$, as in [[def-formal-laurent-series-and-residue]]. The opposite-field transpose convention is exactly [[def-cft-contragredient-generalized-module]].

## Proof

**Given:** The state algebra, module, coordinates and differential coefficients in the Statement. Formal expressions on modules are interpreted after application to an individual vector. No analytic convergence of the logarithmic vector field is assumed.

1.1 First derive module translation from Jacobi rather than assuming it. Apply the module Jacobi identity with its second state equal to $\mathbf1$ to $m\in M$. Choose $N\ge0$ such that $x_1^NY_M(v,x_1)m\in M\llbracket x_1\rrbracket$, multiply by $x_1^N$, and take $\operatorname{Res}_{x_1}$. The second product term has no $x_1^{-1}$ coefficient because its delta function is expanded in nonnegative powers of $x_1$; the other two delta substitutions give $(x_0+x_2)^NY_M(v,x_0+x_2)m=(x_0+x_2)^NY_M(e^{x_0T}v,x_2)m$. Expand in nonnegative powers of $x_0$ and cancel the scalar factor, a unit in $\mathbb C((x_2))\llbracket x_0\rrbracket$. Its coefficient of $x_0$ is $Y_M(Tv,x_2)m=\partial_{x_2}Y_M(v,x_2)m$. This works for every m. [F1, F2, algebra]

1.2 Choose a basis $v_1,\ldots,v_N$ of $V_{\le d}$ and write $A(z)=\sum_{j=1}^Nv_j a_j(z)$, each scalar Laurent series having a finite pole. For a fixed m, choose one upper mode bound valid for every $v_j$. In $\operatorname{Res}_zY_M(A(z),z)m=\sum_{j,k}(a_j)_k(v_j)^M_{(k)}m$, k has a lower bound from the poles and an upper bound from module truncation, so the sum is finite. Since $U_V(\rho_z)$ preserves $V_{\le d}$ and is a power-series matrix, division by the unit $\rho'(z)$ and substitution by $\rho^{-1}$ produce $B(w)\in V_{\le d}\otimes\mathbb C((w))$. Both its field and A's field are lower-bounded Laurent series on every m. [F1, F2, F3, F4, algebra]

2.1 Taking $\operatorname{Res}_{x_0}$ and then $\operatorname{Res}_{x_1}x_1^r$ in module Jacobi gives $[u^M_{(r)},Y_M(v,z)]=\sum_{j=0}^r\binom rj z^{r-j}Y_M(u_{(j)}v,z)$ for integers $r\ge0$: the right-hand delta substitutes $x_1=z+x_0$, whose rth power expands by the finite binomial formula. With $u=\omega$ and $r=n+1$, this and step 1.1 give $$ [L_M(n),Y_M(v,z)]=z^{n+1}\partial_zY_M(v,z)+\sum_{j=0}^n\binom{n+1}{j+1}z^{n-j}Y_M(L(j)v,z)\quad(n\ge0). $$ Creation gives $L(k)\mathbf1=0$ for $k\ge-1$ and $\omega=L(-2)\mathbf1$. The state Virasoro brackets therefore give $L(0)\omega=2\omega$, $L(1)\omega=0$, $L(2)\omega=(c/2)\mathbf1$, and $L(k)\omega=0$ for $k\ge3$. Substituting $v=\omega$ into the displayed formula and comparing modes proves $[L_M(m),L_M(n)]=(m-n)L_M(m+n)$ for $m,n\ge0$; the only central coefficient is $(c/2)\binom{m+1}{3}\delta_{m+n,0}$, which vanishes in this range. Thus the required positive Virasoro relations follow from the module axioms. [F1, F2, step 1.1, algebra]

3.1 For $v\in V_q$, the $n=0$ case gives $[L_M(0),v^M_{(r)}]=(q-r-1)v^M_{(r)}$. Consequently $v^M_{(r)}M_{[h]}\subset M_{[h+q-r-1]}$, since $(L_M(0)-h-q+r+1)^Nv^M_{(r)}m=v^M_{(r)}(L_M(0)-h)^Nm$. Since $\lfloor\operatorname{Re}(h+k)\rfloor=\lfloor\operatorname{Re}h\rfloor+k$ for every integer k, the stated $H_M$ is an integral semisimple grading bounded below and satisfies $[H_M,v^M_{(r)}]=(q-r-1)v^M_{(r)}$. In particular $[H_M,L_M(n)]=-nL_M(n)$. Choose an integer b bounding the H-weights below, and let $D\ge b$, $N=D-b$. Positive modes and their sums are locally nilpotent; on $M_{H\le D}$ every product of $N+1$ positive modes and every $L_M(n)$ with $n>N$ vanishes. None of these assertions requires this truncation to be finite dimensional. [F1, F2, step 2.1, construct, algebra]

3.2 Write $p(z)=\sum_{n>0}c_nz^{n+1}$, $f_s(z)=\exp(sp\partial_z)z$ and $A=\sum_{n>0}c_nL_M(n)$. Each coefficient of $f_s$ is a polynomial in s. Put $B_s(z)=U_V((f_s)_z)$, with $(f_s)_z(t)=f_s(z+t)-f_s(z)$. On every finite state-weight truncation, its entries belong to $\mathbb C[s]\llbracket z\rrbracket$. Here is the required formal-jet construction. For $f(t)=t+\sum_{j\ge1}b_jt^{j+1}$, the coefficient of $t^{n+1}$ in $\exp(\sum_{j\ge1}c_jt^{j+1}\partial_t)t$ is $c_n$ plus a polynomial with rational coefficients in $c_1,\ldots,c_{n-1}$. Indeed the linear term of the exponential contributes $c_n$, whereas each longer operator word contributing at this order has positive indices summing to $n$ and hence uses smaller indices. Induction solves $c_n=b_n-\text{that polynomial}$ over any commutative complex coefficient ring. For a general invertible linear coefficient $a$, first divide by $a$; the resulting finite-jet operator on $V_{\le d}$ has entries polynomial in finitely many $b_j,a,a^{-1}$. Its group identities hold for all complex jets: every such finite jet is realized by a polynomial germ with nonzero derivative, to which F3 applies. A Laurent polynomial vanishing for all such complex coefficients is zero, coefficient by coefficient, so the identities persist under substitution into any commutative complex algebra. For $(f_s)_z$, the linear coefficient $f_s'(z)$ is a unit in $\mathbb C[s]\llbracket z\rrbracket$, and each coefficient of its inverse is polynomial in $s$. The recursion and the finite state exponentials therefore have the asserted coefficientwise polynomial dependence on $s$. The finite-jet identities for $U_V$ are Laurent polynomial identities in finitely many jet coefficients, so their validity for complex coefficients implies validity over the formal coefficient ring as well. The centered composition identity $(f_{s+\epsilon})_z=(f_\epsilon)_{f_s(z)}\circ(f_s)_z$ and [F3] imply $$ \partial_sB_s(z)=\left(\sum_{j\ge0}\frac{p^{(j+1)}(f_s(z))}{(j+1)!}L(j)\right)B_s(z). $$ To see the derivative without assuming a new theorem, $(f_\epsilon)_x(t)=t+\epsilon\sum_{k\ge1}p^{(k)}(x)t^k/k!+O(\epsilon^2)$; its coordinate operator is $I+\epsilon\sum_{k\ge1}p^{(k)}(x)L(k-1)/k!+O(\epsilon^2)$ by the same triangular recursion. The j-sum above is finite on every state truncation. [F3, step 2.1, algebra]

4.1 Here is the finite-jet integration argument for this potentially infinite-dimensional truncation. On $\mathbb C[t]/(t^{N+2})$ put $D_n=t^{n+1}\partial_t$ and $J(D_n)=L_M(n)|_{M_{H\le D}}$. Their brackets have opposite signs, so J reverses brackets. For a path of tangent-to-identity jets f(s), let $S_f:h\mapsto h\circ f$ and $X=S_f^{-1}\partial_sS_f$. X is a derivation raising degree, hence a linear combination of $D_1,\ldots,D_N$. Solve $\partial_sR=J(X)R$, $R(0)=I$, by the finite ordered-integral sum $I+\sum_{k=1}^N\int_{0<s_k<\cdots<s_1<s}J(X(s_1))\cdots J(X(s_k))\,ds_k\cdots ds_1$. Every integral is a scalar linear combination of finitely many operator words. Differentiation and finite iteration verify existence and uniqueness, so infinite dimension introduces no analytic operator integration. [F3, step 2.1, step 3.1, construct, algebra]

4.2 Set $F_s(z)=Y_M(B_s(z)v,f_s(z))$. Differentiate using step 1.1, $\partial_sf_s=p(f_s)$, and step 3.2. The result is $\partial_sF_s=[A,F_s]$ by step 2.1, since $p^{(j+1)}(x)/(j+1)!=\sum_{n>0}c_n\binom{n+1}{j+1}x^{n-j}$. Also $G_s=e^{sA}Y_M(v,z)e^{-sA}$ satisfies the identical equation and $F_0=G_0=Y_M(v,z)$. Formal s-coefficient comparison gives uniqueness: $(r+1)T_{r+1}=[A,T_r]$. All infinite sums here are legitimate. The finitely many states in a basis of $V_{\le\mathrm{wt}(v)}$ have a common field truncation bound on a fixed m. Their state coefficients have nonnegative z-order; for a fixed z-power this leaves only finitely many field modes. The factors $z^{n-j}$ in the commutator force all sufficiently large n to use modes beyond that bound. The locally nilpotent A makes each coefficient of $G_sm$ a polynomial in s; the same finite-mode bounds, step 3.2 and $f_s(z)\in z(1+z\mathbb C[s]\llbracket z\rrbracket)$ make every coefficient of $F_sm$ polynomial in s. Thus the formal identity may be evaluated at $s=1$, proving the field formula for tangent-to-identity coordinates. Extend by linearity from homogeneous v. [F1, F2, step 1.1, step 2.1, step 3.1, step 3.2, algebra]

5.1 For a fixed-endpoint homotopy set $Y=S_f^{-1}\partial_uS_f$, $A=J(X)$, $B=J(Y)$. Differentiating inverses gives $\partial_uX-\partial_sY=[X,Y]$, whence $\partial_uA-\partial_sB=-[A,B]$. Therefore $W=\partial_uR-BR$ satisfies $\partial_sW=AW$, $W(0)=0$, so $W=0$; at the fixed endpoint $B=0$ implies $\partial_uR=0$. The jet coefficient space is $\mathbb C^N$, so linear interpolation contracts any two paths with the same endpoints. Since $S_{f\circ g}=S_gS_f$, concatenating a path to g with $f(s)\circ g$ gives $R(f\circ g)=R(f)R(g)$. On $f(s)=\exp(s\sum c_nD_n)t$, this solution is $\exp(s\sum c_nL_M(n))$. The triangular recursion gives compatible jet restrictions. Finally, $a^{-H_M}L_M(n)a^{H_M}=a^nL_M(n)$ proves the scaling semidirect-product relation, just as for state operators. This proves the claimed representation $U_M^H$ on the whole algebraic direct sum. [F3, step 3.1, step 4.1, algebra]

5.2 For $a\ne0$, the H-grading relation on modes gives $a^{H_M}Y_M(v,x)a^{-H_M}=Y_M(a^{L(0)}v,ax)$ directly, since on a weight-q state the coefficient of $x^{-r-1}$ is multiplied by $a^{q-r-1}$. For $\rho=af$ one has $\rho_z=s_a\circ f_z$, hence $U_V(\rho_z)=a^{L(0)}U_V(f_z)$. Combine this identity with step 4.2 and the scaling formula to obtain the full stated field formula. [F3, step 3.1, step 4.2, algebra]

6.1 Scalar residue change follows on each monomial from $\rho(z)^k\rho'(z)=(\rho(z)^{k+1})'/(k+1)$ for $k\ne-1$, and $\rho'(z)/\rho(z)=z^{-1}$ plus a power series for $k=-1$. Derivatives have zero residue. Only finitely many negative monomials can contribute in a lower-bounded Laurent series, so the same identity holds for vector-valued series. Apply it to $Y_M(B(w),w)m$, substitute the definition of B, and then apply the field formula, extended linearly to the finite state basis with Laurent coefficients. This gives exactly the displayed residue conjugacy, with all sums finite by step 1.2. [F4, step 5.2, step 1.2, algebra]

7.1 Put $C_M=H_M-L_M(0)$. The two identical mode commutator formulas in steps 2.1 and 3.1 show that $C_M$ commutes with every module mode and with the positive Virasoro operators. It is locally finite on each generalized weight block. Thus $e^{\alpha C_M}$ is well-defined using its scalar part and an exponential of its locally nilpotent part, finite on each input vector, and commutes with every field. Since H and $L_M(0)$ commute, $U_M^H(\rho)=e^{\alpha C_M}K_M(\rho,\alpha)$, proving equality of their conjugation actions. Moreover $e^{2\pi iL_M(0)}=e^{-2\pi iC_M}$ because $e^{2\pi iH_M}=I$, so changing the logarithm changes K only by a field-commuting factor. A module map intertwines $L(0)$, its generalized weight blocks and their finite block exponentials, and every positive mode; hence $fK_M(\rho,\alpha)=K_N(\rho,\alpha)f$. Moreover f preserves each generalized weight h, so it also intertwines the same scalar $\lfloor\operatorname{Re}h\rfloor$ on that block. Therefore $fU_M^H(\rho)=U_N^H(\rho)f$. Unlike per-module subtraction of the lowest occurring coset weight, this normalization is identical across the entire module category. Its infinitesimal dilation is H, whereas K retains $L_M(0)$ and its possible nontrivial loop. These are distinct explicitly specified coordinate conventions. [step 2.1, step 3.1, step 5.2, step 6.1, algebra]

8.1 The field-covariance argument uses the generalized-weight direct sum, its lower bound and finite state-weight truncations; it does not require finite-dimensional sums of module blocks in a lower-bounded range. The outgoing-dual clause uses the restricted dual of the finite-dimensional generalized-weight blocks specified in [[def-cft-contragredient-generalized-module]]. Thus for k commuting component actions with joint generalized-weight decomposition, define $H_j$ on a joint block of weight $\lambda$ by the scalar $\lfloor\operatorname{Re}\lambda_j\rfloor$. Other component modes preserve that jth weight and commute with $H_j$; component j shifts it as in step 3.1. Thus the sum $\sum H_j$ is an integral grading bounded below, each positive component mode lowers it, and the preceding finite-word arguments apply without finite-dimensional total truncations. Distinct component coordinate operators commute. Applying step 6.1 to each residue shows that the sum of all local residues conjugates by $\prod_jU_j^H(\rho_j)$. For a global state-valued differential, its two local coefficients are related by exactly $B(\rho(z))\rho'(z)=U_V(\rho_z)A(z)$, the state-sheaf transition tensored with the differential chain rule. Thus these identities apply to the global residue action with its fixed marked coordinates. In a holomorphic family with specified marked vertical coordinates the finite-word coefficients are holomorphic; on a local base neighborhood the state section has bounded state weight and bounded pole order, and the finite basis truncation bound from step 1.2 works on each constant input vector. The resulting residue vector is a finite sum of holomorphic functions times fixed module vectors. This proves the fixed-coordinate family action, without asserting a coordinate-free natural module bundle. [F2, F3, step 3.1, step 5.1, step 1.2, step 6.1, step 7.1, algebra]

9.1 Finally set $T_x=e^{xL(1)}(-x^{-2})^{L(0)}$. For inversion the centered transition at z is $t\mapsto(z+t)^{-1}-z^{-1}$; its coordinate operator is $T_z$, by factoring its rational germ and using the scaling conjugation from [F3]. Direct conjugation gives $T_wT_{w^{-1}}=I$: moving $(-w^{-2})^{L(0)}$ past $e^{w^{-1}L(1)}$ changes that exponential to $e^{-wL(1)}$, which cancels $e^{wL(1)}$, and the remaining diagonal factors multiply to 1 on integral state weights. Therefore, for a differential written as $A(z)dz$, its infinity coefficient is $B(w)=-w^{-2}T_{w^{-1}}A(w^{-1})$. For a weight-q state v the opposite rth mode is the finite sum $(-1)^q\sum_{j\ge0}(L(1)^jv)^M_{(2q-j-r-2)}/j!$. Step 3.1 shows that this sends $M_{[h]}$ into $M_{[h+r+1-q]}$; its transpose sends a finitely supported restricted functional into finitely many weight-dual blocks. Thus the finite Laurent polynomial differential produces an actual restricted-dual residue vector, without invoking opposite Jacobi. The defining contragredient pairing yields $$ \left\langle\operatorname{Res}_{w=0}Y_{M'}(B(w),w)\lambda,m\right\rangle=-\operatorname{Res}_{w=0}w^{-2}\left\langle\lambda,Y_M(A(w^{-1}),w^{-1})m\right\rangle=-\operatorname{Res}_{z=0}\langle\lambda,Y_M(A(z),z)m\rangle. $$ The final equality is the coefficient identity $[w^{-1}]w^{-2}F(w^{-1})=[z^{-1}]F(z)$, not an incorrect application of a centered order-one substitution to inversion. For the Laurent polynomial coefficients under consideration it is immediate termwise, and all resulting residues are well-defined. This inversion calculation does not substitute an arbitrary infinite Taylor expansion at zero into infinity: such an expansion need not be meromorphic there. At each actual outgoing mark, one instead uses its own specified local coordinate and finite-pole expansion, to which the local finite-pole and component covariance arguments above apply whenever the outgoing left module has been supplied. This accounts for the negative transpose in the two-point pairing. The definition's global sum of local left-module actions itself retains a plus sign at each marked point; module axioms for the candidate contragredient remain the duty of their separate theorem. [F1, F3, F4, step 1.2, step 3.1, step 6.1, algebra] ∎
