---
id: thm-conormal-node-composition-multiplicities-under-residue-induction
kind: theorem
title: "Conormal-node composition multiplicities under residue induction"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-residue-signature-normal-good-conormal-and-cogood-nodes,
       def-generalized-jm-primary-idempotents-and-residue-summand-functors,
       thm-normal-node-composition-multiplicities-under-residue-restriction,
       lem-type-a-modular-root-interval-essential-subset-basis-and-count,
       thm-kleshchev-first-level-branching-multiplicity,
       thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors,
       thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell,
       prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 15
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, Bull. Amer. Math. Soc. 47 (2010) 419-481, author arXiv version; §11.4 with Theorem 11.7(ii), printed pp. 53-54 (the count of conormal i-nodes weakly above B), attributed there to [29]. Complete 66-page text, SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab"
      url: "https://arxiv.org/pdf/0909.4844"
    - title: "Alexander Kleshchev, On decomposition numbers and branching coefficients for symmetric and special linear groups, Proc. London Math. Soc. (3) 75 (1997) 497-558; Part I essential-subset counts and endpoint-shift recurrence. The actual local basis/count supplier is used below; the tensor/signature argument is proved here."
      url: "https://darkwing.uoregon.edu/~klesh/BrIV.ps"
---

## Statement

In the notation of
[[thm-normal-node-composition-multiplicities-under-residue-restriction]], let
$B$ be an addable $i$-node of the $p$-restricted partition $\mu$ such that
$\nu=\mu\cup B$ is again $p$-restricted, and let $F_i$ be the residue-summand
induction functor of
[[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]. Then
$$[\,F_iD(\mu):D(\nu)\,]=0$$
if $B$ is not a conormal $i$-node of $\mu$, and
$$[\,F_iD(\mu):D(\nu)\,]=\#\{B':\ B'\ \text{conormal }i\text{-node of }\mu\text{ weakly above }B\}$$
(counting $B$ itself) if $B$ is conormal. The dual Specht-to-induction Hom
criterion (Kleshchev survey Theorem 11.7(i), Brundan 1998 Theorem 2.5 dual
form) is a distinct statement and is not asserted here.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $p>0$, a $p$-restricted partition $\mu$ of $d$, an addable residue-$i$ node $B$ such that $\nu=\mu+B$ is $p$-restricted, and the actual residue induction functor $F_i$.

[F1] The actual Schur coefficient foundation and root-interval basis/count supplier holds over every field, for arbitrary dominant polynomial weights and all intervals. Negative coefficient words span, positive coefficient words detect, binary-root weight spaces have dimension $E_a(r,s)=\varepsilon_a(r,s)$, and the finite integer recurrence is $E_a(r,s)=\nu_a(r,s)+\sum_{u=r+1}^sE'_a(r,u-1)\nu_a(u,s)$, with $E'_a(r,t)=E_{a+\omega_t}(r,t)$. Its normal-stack proof includes zero coordinates and killed roots ([[lem-type-a-modular-root-interval-essential-subset-basis-and-count]]).

[F2] The proved local $q=1$ Schur/group corner in steps 14.1–15.1 of [[thm-kleshchev-first-level-branching-multiplicity]] identifies the regular Weyl corner and cell form with the Murphy cell and form, with scalar $1$, and proves equality of their radical corners. Thus $L_N(\lambda)e=D(\lambda)$ for restricted $\lambda$ and is zero otherwise; surviving labels are distinct. Its tensorword convention is explicit, and its proof uses ordinary-group survival rather than the held finite-$e$ classifier. The integral ordinary Specht basis and signed-conjugate identification are [[thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell]] and [[prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality]].

[F3] On the complex ordinary Specht module, the joint Jucys–Murphy spectrum is the tableau-content spectrum ([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]]). Only its integral central operator-identity consequence is used, not any characteristic-zero composition count.

[F4] The boundary signature is read top to bottom with addable $+$, removable $-$ and cancellation $-+$ ([[def-residue-signature-normal-good-conormal-and-cogood-nodes]]). The actual primary projections define the direct residue decomposition of induction ([[def-generalized-jm-primary-idempotents-and-residue-summand-functors]]). Neither primitive-block classification nor an adjunction transfer of composition counts is used.

## Proof

**Proof technique:** direct.

1.1 For $d>0$ take $N=d+1$, pad $\mu$ by zeros, set $a_j=\mu_j-\mu_{j+1}$, let $L=L_N(\mu)$ be the actual Schur simple, $V=F^N$, and $M=V\otimes L$. Tensor coefficient operators are the actual polynomial Schur operators of degree $d+1$, obtained by multiplying the two polynomial matrix actions. This works over finite fields without replacing coefficient actions by evaluated group elements. The case $d=0$ is treated below. [given, F1, F2, construct]

2.1 Here is the local component identity used below. If a binary root deficit has separated connected components (a zero simple-root coefficient between consecutive components), its negative words split into products supported on those components. All cross-component positive and negative root operators commute, and their Cartan characters on the other component are unchanged: their simple-root supports are nonadjacent. Move the positive words past the other components and evaluate their highest coefficients one component at a time. The positive/negative coefficient matrix is consequently the tensor product of the component matrices. Negative-word spanning and positive detection identify its quotient by the common positive-test kernel with the actual simple weight space. Hence this weight space is the tensor product of the component quotients, including when one is zero. This proves the assertion directly from coefficient words; it does not assume a tensor-product decomposition of the whole simple module. [step 1.1, F1, F2, construct]

3.1 In particular fix one component $\delta$. Choose a negative basis $f_1v,\ldots,f_tv$ of its quotient and positive tests $e_1,\ldots,e_t$ dual to it. They are finite linear combinations of actual coefficient words, with coefficients in $F$; their existence follows from positive detection and ordinary finite-dimensional linear algebra. Then $P_\delta=\sum_{h=1}^t f_he_h$ is the identity on every binary weight space having this component and any separated other components. The same tests apply because the other components change none of the Cartan data of $\delta$. If $t=0$, these weight spaces are zero. This is an identity of coefficient operators on those spaces, so it descends to subquotients. [step 2.1, F1, F2, construct]

4.1 Write $\xi_i=\mu+\epsilon_i$. Suppose a simple composition factor with highest weight $\eta$ contributes at $\xi_i$. All weights of $M$ are at most $\mu+\epsilon_1$, and weights of that factor are at most $\eta$. Thus $\xi_i\le\eta\le\mu+\epsilon_1.$. [step 3.1, F1, F2, construct]

5.1 The deficit $\Gamma=\mu+\epsilon_1-\eta$ has simple-root coefficients $0$ or $1$ in positions $1,\ldots,i-1$ and zero elsewhere. On a tensor summand $v_j\otimes L_{\eta-\epsilon_j}$ the deficit in $L$ is $\Gamma-(\alpha_1+\cdots+\alpha_{j-1}).$. [step 4.1, F1, F2, construct]

6.1 It must be nonnegative. Consequently every possible label $j$ lies before the first missing coefficient in $\Gamma$. If $\Gamma$ has a component $\delta$ after that first gap, every positive or negative coefficient word supported on $\delta$ fixes the $V$ factor (its nonconstant terms annihilate each of these labels). Its action on this tensor weight is therefore purely its action on $L$. The preceding $P_\delta$ is the identity on the entire weight $M_\eta$, not just on individual tensor summands. [step 5.1, F1, F2, construct]

7.1 Choose a composition series and a lift $x\in M_\eta$ of the nonzero highest vector of the proposed factor in its series quotient. Each $e_hx$ lies in the preceding submodule because it has strictly higher weight, and each $f_h$ preserves that submodule. But $P_\delta x=x$ would then place $x$ in it, a contradiction. If the component quotient is zero there was no such tensor weight to start with. Thus $\Gamma$ has no later component. Its only possible nonzero coefficients form one initial interval, and $\eta=\mu+\epsilon_u\quad\text{for some }u\le i.$. [step 6.1, F1, F2, construct]

8.1 This excludes only highest weights of factors contributing to $\xi_i$. It asserts nothing about distant tensor factors. [step 7.1, F1, F2, construct]

9.1 Since every weight of $L$ is at most $\mu$, $M_{\xi_i}=\bigoplus_{j\le i}v_j\otimes L_{\mu+\epsilon_i-\epsilon_j},\qquad d_i:=\dim M_{\xi_i}=1+\sum_{j<i}E_a(j,i-1).$. [step 8.1, F1, F2, construct]

10.1 Let $b_u$ be the actual composition multiplicity of $L_N(\mu+\epsilon_u)$ in $M$ when that weight is dominant; set $b_u=0$ otherwise. No restrictedness condition is imposed on these auxiliary factors. The support lemma and the one-dimensional highest spaces give $d_i=b_i+\sum_{u<i}b_uE_{a+\omega_u}(u,i-1).$ (equation C). [step 9.1, F1, F2, construct]

11.1 Indeed $\mu+\epsilon_u-\xi_i=\alpha_u+\cdots+\alpha_{i-1}$. On this interval the fundamental coordinates of the dominant weight $\mu+\epsilon_u$ are those of $a$ with its first coordinate $u$ increased by one; the coordinate $u-1$ changed by minus one lies outside the interval. Nondominant rows have multiplicity zero, so their formal summands cause no alteration of (C). [step 10.1, F1, F2, construct]

12.1 For completeness the weight-dimension symmetry needed here is local. Permutation matrices permute the integer weight spaces of $L$. Hence its lowest weight is $w_0\mu$, its space is one dimensional, and every weight lies between $w_0\mu$ and $\mu$. The contragredient dual twisted by $\det^d$ is a polynomial simple of highest weight $\mu^*=(d-\mu_N,\ldots,d-\mu_1).$. [step 11.1, F1, F2, construct]

13.1 One can verify polynomiality without a rational-module classification theorem. The tensorword Schur algebra acts faithfully on $V^{\otimes d}$; its regular module embeds in a finite direct sum of copies of this tensor space by its action on a basis. Thus every simple is a subquotient of copies of this tensor space. Duality and the twist make it a subquotient of $(V^*\otimes\det)^{\otimes d}$; the explicit exterior-complement pairing gives $V^*\otimes\det\cong\bigwedge^{N-1}V$ over every field. It is therefore polynomial. Positive and negative coefficients interchange under duality, so the highest weight just identified determines the same actual Schur simple as in the accepted foundation. These statements are coefficient identities; over a finite field they can equivalently be checked over $F(t)$ and descended as the identical finite matrices. [step 12.1, F1, F2, construct]

14.1 Put $\bar a_t=a_{N-t}$. Duality reverses roots and preserves weight dimensions, yielding $E_a(j,i-1)=E_{\bar a}(N-i+1,N-j).$. [step 13.1, F1, F2, construct]

15.1 This argument applies also to any dominant shifted weight. In particular the first-coordinate shift at $u$ becomes the final-coordinate shift at $N-u$ on the reversed interval. No restriction on its fundamental coordinates is needed. [step 14.1, F1, F2, construct]

16.1 Reverse the indices: $r=N-i+1$, $\bar b_r=b_i$, $\bar d_r=d_i$. On indices $1,\ldots,N$, let the strictly upper triangular matrices be $A[r,v]=\nu'_{\bar a}(r,v-1),\qquad B[r,v]=E'_{\bar a}(r,v-1)\quad(r<v).$. [step 15.1, F1, construct]

17.1 The accepted recurrence, applied after an endpoint shift, gives $B=A+AB$; the earlier intervals do not see that endpoint shift. Therefore $(I+B)^{-1}=I-A.$. [step 16.1, F1, construct]

18.1 Let $H_r=\sum_{s=r}^{N-1}\nu_{\bar a}(r,s)$, with $H_N=0$. Applying the accepted recurrence separately for every endpoint and summing gives $\bar d=\mathbf1+(I+B)H.$. [step 17.1, F1, construct]

19.1 Opposition turns (C) into $\bar d=(I+B)\bar b$. Multiplication by $I-A$ gives, as ordinary integers, $b_i=1+\sum_{s=r}^{N-1}\bigl(\nu_{\bar a}(r,s)-\nu'_{\bar a}(r,s)\bigr),\qquad r=N-i+1.$ (equation D). [step 18.1, F1, construct]

20.1 This is finite nilpotent matrix arithmetic. It neither divides in $F$ nor replaces a composition multiplicity by a residue in $F$. [step 19.1, F1, construct]

21.1 Use the accepted normal-stack interpretation. Write $\sigma(r,t)$ for its alive indicator and put $\sigma(r,r-1)=1$. For every dominant coordinate array $\lambda$, $\nu_\lambda(r,s)-\nu'_\lambda(r,s)=\sigma(r,s-1)\left(\mathbf1_{B(r,s)=-1}-\mathbf1_{B(r,s)=0}\right).$ (equation E). [step 20.1, F1, construct]

22.1 If killed before the final step, both counts are zero. Otherwise let its current height be $h\ge1$. The endpoint shift keeps $C(r,s)$ fixed and replaces $B$ and $\lambda_s$ by $B+1$ and $\lambda_s+1$. If $B=-1$ it creates a pop and lowers the count by one; when $\lambda_s=-1$, the unshifted step instead pushes and the shifted zero-coordinate step is neutral, with the same difference. If $B=0$ it removes a pop and increases the count by one; when $\lambda_s=0$, the old step is neutral and the new step pushes, again with that difference. For other $B$ neither change alters the count. If a pop removes the initial root, its new count is zero, still $h-1=0$. At $s=r$ the two counts are $\mathbf1_{\lambda_r\ne0}$ and $\mathbf1_{\lambda_r+1\ne0}$, giving the same formula. These alternatives are exhaustive and valid for $p=2$. [step 21.1, F1, construct]

23.1 Fix an actual addable row $i$ and put $R_j=\mu_j+1-j$, $\rho=R_i\pmod p$. If $i>1$, addability means $a_{i-1}>0$. Since $\mu$ is restricted, $0<a_{i-1}<p$; the reversed root therefore starts alive. For $r=N-i+1$, $s=N-j$, direct substitution gives $B_{\bar a}(r,s)=R_j-R_i-1,\qquad C_{\bar a}(r,s)=R_{j+1}-R_i.$. [step 22.1, F1, F4, construct]

24.1 Thus the two indicators in (E) respectively detect an addable-position residue $\rho$ in row $j$ and a removable-position residue $\rho$ in row $j$. The normal stack processes the boundary in reverse order, starting with the chosen $+$ in row $i$. At step $j$ its $C=0$ push corresponds to the plus in row $j+1$, and its $B=0$ pop to the minus in row $j$. The top-row plus is a pending final event. This reversal is exactly the stack evaluation of $-+$ cancellation: in a reverse scan, a minus cancels the most recently encountered plus. [step 23.1, F1, F4, construct]

25.1 Here is the precise check at flat row blocks and at the endpoints. Let $D_s=1+\sum_{t=r}^s\sigma(r,t-1)\left(\mathbf1_{B(r,t)=-1}-\mathbf1_{B(r,t)=0}\right).$. [step 24.1, F1, F4, construct]

26.1 While the chosen root remains alive, $D_s$ is its current normal-stack height plus the pending indicator $\mathbf1_{R_j=R_i}$, where $j=N-s$. At the initial step the removable event $B(r,r)=0$ cannot occur since $0<a_{i-1}<p$, and this identity follows immediately. At each subsequent live step the change in height is $\mathbf1_{C(r,s)=0}-\mathbf1_{B(r,s)=0}.$. [step 25.1, F1, F4, construct]

27.1 For $a_j\ne0$ these are disjoint push/pop events. For $a_j=0$ the indicators are equal and the step is neutral, as required by the actual stack. Subtracting this height change from the change in $D_s$ gives $\mathbf1_{R_j=R_i}-\mathbf1_{R_{j+1}=R_i},$. [step 26.1, F1, F4, construct]

28.1 which replaces the previous pending indicator by the next. This proves the invariant by induction, including flat blocks. Equivalently, the nonexistent lower plus and upper minus of a flat block cancel one another, with no effect on the actual boundary signature. [step 27.1, F1, F4, construct]

29.1 If the initial root is killed, its preceding height was one, the current event is $B=0$, and $B=-1$ is false. The pending indicator after the step is zero. Thus $D_s=0$, and every later term is zero because the alive indicator remains zero. In the reversed boundary scan, killing the initial plus likewise means that the chosen node is canceled; later pluses above it cannot revive it. At the last step the pending indicator is the actual addable top-row plus. We have therefore evaluated exactly the reverse scan of the prefix ending at the chosen node. A minus below this prefix cannot cancel a plus in it under top-to-bottom $-+$ cancellation; the conormal decisions for this prefix agree with those in the entire signature. [step 28.1, F1, F4, construct]

30.1 Consequently (D) is zero precisely when the chosen plus is canceled. If it survives, (D) is the number of surviving pluses of residue $\rho$ in the prefix, namely the number of conormal nodes weakly above $B$. For $i=1$, (D) is $b_1=1$: the top plus survives and it is the only node weakly above itself. For completeness, a nondominant row $i>1$ has $a_{i-1}=0$; the first endpoint difference is $-1$, killing the virtual initial unit and all later differences, so (D) gives zero as required by (C). These rows were not silently discarded during the integer inversion. [step 29.1, F1, F4, construct]

31.1 Let $\omega=(1^N)$ be the regular degree-$N$ weight. Then $M_\omega=\bigoplus_{j=1}^N v_j\otimes L_{\omega-\epsilon_j}.$. [step 30.1, F2, construct]

32.1 Let $G=\mathfrak S_N$, $H=\mathfrak S_d$ fixing label $N$, and $W=L_{\omega-\epsilon_N}$. The accepted local $q=1$ corner/form identification makes $W$ the left group module $D(\mu)$. The output regular-corner action is ordinary permutation of labels: on tensorwords the corresponding orbit matrix is exactly that label permutation. Since these are identities in the actual tensorword Schur algebra, the same equality holds on $M$; it does not depend on evaluated permutation matrices spanning the Schur algebra. [step 31.1, F2, construct]

33.1 The explicit map $F[G]\otimes_{F[H]}W\longrightarrow M_\omega,\qquad g\otimes w\longmapsto g(v_N\otimes w)$. [step 32.1, F2, construct]

34.1 is well defined and $G$-equivariant. Left cosets of $H$ correspond to the image label $gN$, and their summands map bijectively to the displayed summands of $M_\omega$. It is therefore an isomorphism. This proves $M_\omega\cong\operatorname{Ind}_{\mathfrak S_d}^{\mathfrak S_{d+1}}D(\mu)$, without Frobenius reciprocity or an adjunction multiplicity assertion. [step 33.1, F2, construct]

35.1 Corner projection is exact. Each Schur composition factor $L_N(\eta)$ projects to the distinct restricted group simple $D(\eta)$ if $\eta$ is restricted, and to zero otherwise, by the accepted local form/radical and ordinary-group survival proof. Hence for a restricted $\mu+B=\mu+\epsilon_i$, its total induction multiplicity is exactly $b_i$. Nonrestricted near factors were kept until this exact projection. Distant factors were never excluded; distinct surviving labels ensure that they cannot change this particular count. When $d=0$, the single degree-one tensor/corner gives the unique plus and multiplicity one directly. [step 34.1, F2, construct]

36.1 The generalized Jucys--Murphy induction summands give a direct decomposition of total induction. For the ordinary group elements $L_k=\sum_{j<k}(j,k)$, induction by inserting the letter $n$ into a cycle gives the integral identity $\prod_{k=1}^n(t+L_k)=\sum_{g\in\mathfrak S_n}t^{\#\operatorname{cycles}(g)}g.$. [step 35.1, F2, F3, F4, construct]

37.1 The factor $t$ makes $n$ a new fixed point; each transposition $(j,n)$ inserts $n$ at the uniquely specified place in the cycle containing $j$. These alternatives are disjoint and exhaust the permutations. Coefficients on the right are class sums, so all coefficients of $Q_n(t)=\prod_{k=1}^n(t-L_k)$ are central over the integers and every field. [step 36.1, F2, F3, F4, construct]

38.1 The published [[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]] says that $Q_n(t)$ acts on the complex ordinary Specht module of shape $\lambda$ as $\prod_{A\in\lambda}(t-\operatorname{res}_{\mathbb Z}(A))$. The ordinary integral Specht lattice has the free polytabloid basis provided by the accepted integral bridge. The operator equality has integer matrices on that lattice; its validity after scalar extension to $\mathbb C$ therefore implies its validity over $\mathbb Z$. Reducing and taking its radical quotient proves the same content scalar on ordinary $D^\lambda$ over every field. The accepted signed-conjugate dictionary sends each $L_k$ to $-L_k$ under the sign twist, and transpose negates contents. Hence $Q_n(t)$ acts on restricted $D(\lambda)=D^{\lambda'}\otimes\operatorname{sgn}$ by the content polynomial of $\lambda$. This use of the published complex spectrum is an integral operator-identity descent; none of the multiplicity inversion uses characteristic-zero composition counts or semisimplicity. [step 37.1, F2, F3, F4, construct]

39.1 For clarity the functor idempotent $e=e_\alpha^{(d)}P_{d+1,h}$ implies the following test on $F_hD(\mu)=F\mathfrak S_{d+1}e\otimes_{F\mathfrak S_d}D(\mu)$. On its generating subspace $e\otimes D(\mu)$, the first-$d$ content polynomial has exactly the scalar for $\mu$, and $L_{d+1}-h$ is nilpotent. These operators commute. Since $Q_{d+1}(t)=Q_d(t)(t-L_{d+1})$ has central coefficients, every coefficient minus that of $(t-h)Q_\mu(t)$ acts nilpotently on the full generated module as well: its fixed power kills the generating subspace and centrality kills all translates. On a simple factor a nilpotent central endomorphism is zero, since every nonzero simple-module endomorphism is invertible. Thus every factor in this summand has content polynomial $(t-h)Q_\mu(t)$. [step 38.1, F2, F3, F4, construct]

40.1 Distinct residues give distinct polynomials: $(t-h)Q_\mu(t)-(t-k)Q_\mu(t)=(k-h)Q_\mu(t)\ne0$ for $h\ne k$. The content polynomial of $\mu+B$ appends exactly the residue of $B$. Its factors therefore occur only in the corresponding residue summand. The total multiplicity computed above is exactly the multiplicity in $F_iD(\mu)$ required by the target. This argument does not use primitivity or exhaustiveness of any content-block idempotent. [step 39.1, F2, F3, F4, construct]

41.1 Transpose preserves boundary types. Literally $(\mu\cup B)'=\mu'\cup B^{\mathsf t},\qquad(\mu\setminus A)'=\mu'\setminus A^{\mathsf t}.$. [step 40.1, F4, construct]

42.1 It sends an addable node to an addable node and a removable node to a removable node; it negates the residue. The appropriate boundary reading order is reversed when transporting the signature convention. It does not exchange addable and removable sets. The proof above needs no claimed equality of induction and restriction multiplicities and no transpose transfer of a restriction count. [step 41.1, F4, construct]

43.1 The finite character inversion, boundary-stack calculation, exact induction corner and residue allocation just proved identify the stated multiplicity with zero off conormality and with the conormal weak-above count on conormality. Both cases hold over every field of characteristic $p$, with nonrestricted auxiliary factors retained until projection and no assertion about other tensor factors. [step 42.1, F1, F2, F4, construct] ∎

## Remarks

The survey documents the formula's origin; its count is not a proof premise. Biadjunction does not equate these composition multiplicities: in characteristic $2$, induction of $D(1)$ to $S_2$ has multiplicity $2$ of $D(1,1)$, whereas restricting that simple has multiplicity $1$ of $D(1)$. The proof instead uses actual tensor weights, finite integer inversion and an explicit coset map.
