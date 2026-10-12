# Research construction: the local conormal induction count

This is a construction packet for the parent reviewer, not a canonical item, acceptance record, or new-item authorization. It preserves the target Statement. It replaces the alleged adjunction transfer with a tensor-weight computation. Only factors contributing to the near weights are classified below; other tensor composition factors are allowed. All equalities of multiplicities and dimensions are equalities of ordinary integers.

## Inputs and scope

Let $F$ be any field of characteristic $p>0$, let $\mu$ be a $p$-restricted partition of $d$, and let $B$ be an addable node such that $\mu+B$ is $p$-restricted. Its residue is its column minus its row modulo $p$. The signature convention is the actual definition: read boundary nodes from top to bottom, write addable $+$ and removable $-$ of the chosen residue, cancel $-+$, and call the surviving $+$ conormal. The desired answer is zero if $B$ is not conormal and otherwise the number of conormal nodes of that residue weakly above $B$.

The accepted prerequisite is `lem-type-a-modular-root-interval-essential-subset-basis-and-count`: actual Schur simples, integer coefficient operators, binary-root weight dimensions $E_a(r,s)=\varepsilon_a(r,s)$, normal-stack counts $\nu_a(r,s)$, and the proved finite recurrence

$$E_a(r,s)=\nu_a(r,s)+\sum_{u=r+1}^s E'_{a}(r,u-1)\nu_a(u,s),\qquad E'_a(r,t)=E_{a+\omega_t}(r,t).$$

We use its explicit tensorword Schur foundation, positive detection, and negative-word spanning. We also use the accepted local $q=1$ Schur/group corner argument in the actual first-level Kleshchev theorem: Schur cell forms restrict with unit $1$ to the Murphy forms; the radical corner is the corner radical; $L_N(\lambda)e$ is $D(\lambda)$ precisely for restricted $\lambda$, and is zero otherwise. Its proof uses the ordinary-group restricted survival criterion and is independent of the held finite-$e$ classifier. No branching-count theorem is an input. Observed prerequisite bytes and exact source hashes are in `input-guards.json`.

Take $N=d+1$ (take $N=1$ when $d=0$), pad $\mu$ with zeros, put $a_j=\mu_j-\mu_{j+1}$, let $L=L_N(\mu)$ and $V=F^N$, and set $M=V\otimes L$. Tensor coefficient operators are the actual polynomial Schur operators of degree $d+1$, obtained by multiplying the two polynomial matrix actions. Thus this definition works over finite fields without replacing coefficient actions by the span of evaluated group elements.

## 1. Separated binary components and the near-weight support lemma

Here is the local component identity used below. If a binary root deficit has separated connected components (a zero simple-root coefficient between consecutive components), its negative words split into products supported on those components. All cross-component positive and negative root operators commute, and their Cartan characters on the other component are unchanged: their simple-root supports are nonadjacent. Move the positive words past the other components and evaluate their highest coefficients one component at a time. The positive/negative coefficient matrix is consequently the tensor product of the component matrices. Negative-word spanning and positive detection identify its quotient by the common positive-test kernel with the actual simple weight space. Hence this weight space is the tensor product of the component quotients, including when one is zero. This proves the assertion directly from coefficient words; it does not assume a tensor-product decomposition of the whole simple module.

In particular fix one component $\delta$. Choose a negative basis $f_1v,\ldots,f_tv$ of its quotient and positive tests $e_1,\ldots,e_t$ dual to it. They are finite linear combinations of actual coefficient words, with coefficients in $F$; their existence follows from positive detection and ordinary finite-dimensional linear algebra. Then

$$P_\delta=\sum_{h=1}^t f_he_h$$

is the identity on every binary weight space having this component and any separated other components. The same tests apply because the other components change none of the Cartan data of $\delta$. If $t=0$, these weight spaces are zero. This is an identity of coefficient operators on those spaces, so it descends to subquotients.

Write $\xi_i=\mu+\epsilon_i$. Suppose a simple composition factor with highest weight $\eta$ contributes at $\xi_i$. All weights of $M$ are at most $\mu+\epsilon_1$, and weights of that factor are at most $\eta$. Thus

$$\xi_i\le\eta\le\mu+\epsilon_1.$$

The deficit $\Gamma=\mu+\epsilon_1-\eta$ has simple-root coefficients $0$ or $1$ in positions $1,\ldots,i-1$ and zero elsewhere. On a tensor summand $v_j\otimes L_{\eta-\epsilon_j}$ the deficit in $L$ is

$$\Gamma-(\alpha_1+\cdots+\alpha_{j-1}).$$

It must be nonnegative. Consequently every possible label $j$ lies before the first missing coefficient in $\Gamma$. If $\Gamma$ has a component $\delta$ after that first gap, every positive or negative coefficient word supported on $\delta$ fixes the $V$ factor (its nonconstant terms annihilate each of these labels). Its action on this tensor weight is therefore purely its action on $L$. The preceding $P_\delta$ is the identity on the entire weight $M_\eta$, not just on individual tensor summands.

Choose a composition series and a lift $x\in M_\eta$ of the nonzero highest vector of the proposed factor in its series quotient. Each $e_hx$ lies in the preceding submodule because it has strictly higher weight, and each $f_h$ preserves that submodule. But $P_\delta x=x$ would then place $x$ in it, a contradiction. If the component quotient is zero there was no such tensor weight to start with. Thus $\Gamma$ has no later component. Its only possible nonzero coefficients form one initial interval, and

$$\eta=\mu+\epsilon_u\quad\text{for some }u\le i.$$

This excludes only highest weights of factors contributing to $\xi_i$. It asserts nothing about distant tensor factors.

## 2. Actual tensor dimensions and the triangular character equations

Since every weight of $L$ is at most $\mu$,

$$M_{\xi_i}=\bigoplus_{j\le i}v_j\otimes L_{\mu+\epsilon_i-\epsilon_j},\qquad d_i:=\dim M_{\xi_i}=1+\sum_{j<i}E_a(j,i-1).$$

Let $b_u$ be the actual composition multiplicity of $L_N(\mu+\epsilon_u)$ in $M$ when that weight is dominant; set $b_u=0$ otherwise. No restrictedness condition is imposed on these auxiliary factors. The support lemma and the one-dimensional highest spaces give

$$d_i=b_i+\sum_{u<i}b_uE_{a+\omega_u}(u,i-1).\tag{C}$$

Indeed $\mu+\epsilon_u-\xi_i=\alpha_u+\cdots+\alpha_{i-1}$. On this interval the fundamental coordinates of the dominant weight $\mu+\epsilon_u$ are those of $a$ with its first coordinate $u$ increased by one; the coordinate $u-1$ changed by minus one lies outside the interval. Nondominant rows have multiplicity zero, so their formal summands cause no alteration of (C).

## 3. Opposition transports the starting-coordinate shift to the accepted endpoint shift

For completeness the weight-dimension symmetry needed here is local. Permutation matrices permute the integer weight spaces of $L$. Hence its lowest weight is $w_0\mu$, its space is one dimensional, and every weight lies between $w_0\mu$ and $\mu$. The contragredient dual twisted by $\det^d$ is a polynomial simple of highest weight

$$\mu^*=(d-\mu_N,\ldots,d-\mu_1).$$

One can verify polynomiality without a rational-module classification theorem. The tensorword Schur algebra acts faithfully on $V^{\otimes d}$; its regular module embeds in a finite direct sum of copies of this tensor space by its action on a basis. Thus every simple is a subquotient of copies of this tensor space. Duality and the twist make it a subquotient of $(V^*\otimes\det)^{\otimes d}$; the explicit exterior-complement pairing gives $V^*\otimes\det\cong\bigwedge^{N-1}V$ over every field. It is therefore polynomial. Positive and negative coefficients interchange under duality, so the highest weight just identified determines the same actual Schur simple as in the accepted foundation. These statements are coefficient identities; over a finite field they can equivalently be checked over $F(t)$ and descended as the identical finite matrices.

Put $\bar a_t=a_{N-t}$. Duality reverses roots and preserves weight dimensions, yielding

$$E_a(j,i-1)=E_{\bar a}(N-i+1,N-j).$$

This argument applies also to any dominant shifted weight. In particular the first-coordinate shift at $u$ becomes the final-coordinate shift at $N-u$ on the reversed interval. No restriction on its fundamental coordinates is needed.

## 4. Finite integer inversion gives the exact multiplicity expression

Reverse the indices: $r=N-i+1$, $\bar b_r=b_i$, $\bar d_r=d_i$. On indices $1,\ldots,N$, let the strictly upper triangular matrices be

$$A[r,v]=\nu'_{\bar a}(r,v-1),\qquad B[r,v]=E'_{\bar a}(r,v-1)\quad(r<v).$$

The accepted recurrence, applied after an endpoint shift, gives $B=A+AB$; the earlier intervals do not see that endpoint shift. Therefore

$$(I+B)^{-1}=I-A.$$

Let $H_r=\sum_{s=r}^{N-1}\nu_{\bar a}(r,s)$, with $H_N=0$. Applying the accepted recurrence separately for every endpoint and summing gives

$$\bar d=\mathbf1+(I+B)H.$$

Opposition turns (C) into $\bar d=(I+B)\bar b$. Multiplication by $I-A$ gives, as ordinary integers,

$$b_i=1+\sum_{s=r}^{N-1}\bigl(\nu_{\bar a}(r,s)-\nu'_{\bar a}(r,s)\bigr),\qquad r=N-i+1.\tag{D}$$

This is finite nilpotent matrix arithmetic. It neither divides in $F$ nor replaces a composition multiplicity by a residue in $F$.

## 5. Endpoint difference, including every zero-coordinate case

Use the accepted normal-stack interpretation. Write $\sigma(r,t)$ for its alive indicator and put $\sigma(r,r-1)=1$. For every dominant coordinate array $\lambda$,

$$\nu_\lambda(r,s)-\nu'_\lambda(r,s)=\sigma(r,s-1)\left(\mathbf1_{B(r,s)=-1}-\mathbf1_{B(r,s)=0}\right).\tag{E}$$

If killed before the final step, both counts are zero. Otherwise let its current height be $h\ge1$. The endpoint shift keeps $C(r,s)$ fixed and replaces $B$ and $\lambda_s$ by $B+1$ and $\lambda_s+1$. If $B=-1$ it creates a pop and lowers the count by one; when $\lambda_s=-1$, the unshifted step instead pushes and the shifted zero-coordinate step is neutral, with the same difference. If $B=0$ it removes a pop and increases the count by one; when $\lambda_s=0$, the old step is neutral and the new step pushes, again with that difference. For other $B$ neither change alters the count. If a pop removes the initial root, its new count is zero, still $h-1=0$. At $s=r$ the two counts are $\mathbf1_{\lambda_r\ne0}$ and $\mathbf1_{\lambda_r+1\ne0}$, giving the same formula. These alternatives are exhaustive and valid for $p=2$.

## 6. The integer expression is the conormal weak-above count

Fix an actual addable row $i$ and put $R_j=\mu_j+1-j$, $\rho=R_i\pmod p$. If $i>1$, addability means $a_{i-1}>0$. Since $\mu$ is restricted, $0<a_{i-1}<p$; the reversed root therefore starts alive. For $r=N-i+1$, $s=N-j$, direct substitution gives

$$B_{\bar a}(r,s)=R_j-R_i-1,\qquad C_{\bar a}(r,s)=R_{j+1}-R_i.$$

Thus the two indicators in (E) respectively detect an addable-position residue $\rho$ in row $j$ and a removable-position residue $\rho$ in row $j$. The normal stack processes the boundary in reverse order, starting with the chosen $+$ in row $i$. At step $j$ its $C=0$ push corresponds to the plus in row $j+1$, and its $B=0$ pop to the minus in row $j$. The top-row plus is a pending final event. This reversal is exactly the stack evaluation of $-+$ cancellation: in a reverse scan, a minus cancels the most recently encountered plus.

Here is the precise check at flat row blocks and at the endpoints. Let

$$D_s=1+\sum_{t=r}^s\sigma(r,t-1)\left(\mathbf1_{B(r,t)=-1}-\mathbf1_{B(r,t)=0}\right).$$

While the chosen root remains alive, $D_s$ is its current normal-stack height plus the pending indicator $\mathbf1_{R_j=R_i}$, where $j=N-s$. At the initial step the removable event $B(r,r)=0$ cannot occur since $0<a_{i-1}<p$, and this identity follows immediately. At each subsequent live step the change in height is

$$\mathbf1_{C(r,s)=0}-\mathbf1_{B(r,s)=0}.$$

For $a_j\ne0$ these are disjoint push/pop events. For $a_j=0$ the indicators are equal and the step is neutral, as required by the actual stack. Subtracting this height change from the change in $D_s$ gives

$$\mathbf1_{R_j=R_i}-\mathbf1_{R_{j+1}=R_i},$$

which replaces the previous pending indicator by the next. This proves the invariant by induction, including flat blocks. Equivalently, the nonexistent lower plus and upper minus of a flat block cancel one another, with no effect on the actual boundary signature.

If the initial root is killed, its preceding height was one, the current event is $B=0$, and $B=-1$ is false. The pending indicator after the step is zero. Thus $D_s=0$, and every later term is zero because the alive indicator remains zero. In the reversed boundary scan, killing the initial plus likewise means that the chosen node is canceled; later pluses above it cannot revive it. At the last step the pending indicator is the actual addable top-row plus. We have therefore evaluated exactly the reverse scan of the prefix ending at the chosen node. A minus below this prefix cannot cancel a plus in it under top-to-bottom $-+$ cancellation; the conormal decisions for this prefix agree with those in the entire signature.

Consequently (D) is zero precisely when the chosen plus is canceled. If it survives, (D) is the number of surviving pluses of residue $\rho$ in the prefix, namely the number of conormal nodes weakly above $B$. For $i=1$, (D) is $b_1=1$: the top plus survives and it is the only node weakly above itself. For completeness, a nondominant row $i>1$ has $a_{i-1}=0$; the first endpoint difference is $-1$, killing the virtual initial unit and all later differences, so (D) gives zero as required by (C). These rows were not silently discarded during the integer inversion.

## 7. The regular corner is total induction, by an explicit coset map

Let $\omega=(1^N)$ be the regular degree-$N$ weight. Then

$$M_\omega=\bigoplus_{j=1}^N v_j\otimes L_{\omega-\epsilon_j}.$$

Let $G=\mathfrak S_N$, $H=\mathfrak S_d$ fixing label $N$, and $W=L_{\omega-\epsilon_N}$. The accepted local $q=1$ corner/form identification makes $W$ the left group module $D(\mu)$. The output regular-corner action is ordinary permutation of labels: on tensorwords the corresponding orbit matrix is exactly that label permutation. Since these are identities in the actual tensorword Schur algebra, the same equality holds on $M$; it does not depend on evaluated permutation matrices spanning the Schur algebra.

The explicit map

$$F[G]\otimes_{F[H]}W\longrightarrow M_\omega,\qquad g\otimes w\longmapsto g(v_N\otimes w)$$

is well defined and $G$-equivariant. Left cosets of $H$ correspond to the image label $gN$, and their summands map bijectively to the displayed summands of $M_\omega$. It is therefore an isomorphism. This proves $M_\omega\cong\operatorname{Ind}_{\mathfrak S_d}^{\mathfrak S_{d+1}}D(\mu)$, without Frobenius reciprocity or an adjunction multiplicity assertion.

Corner projection is exact. Each Schur composition factor $L_N(\eta)$ projects to the distinct restricted group simple $D(\eta)$ if $\eta$ is restricted, and to zero otherwise, by the accepted local form/radical and ordinary-group survival proof. Hence for a restricted $\mu+B=\mu+\epsilon_i$, its total induction multiplicity is exactly $b_i$. Nonrestricted near factors were kept until this exact projection. Distant factors were never excluded; distinct surviving labels ensure that they cannot change this particular count. When $d=0$, the single degree-one tensor/corner gives the unique plus and multiplicity one directly.

## 8. Passing to the requested residue induction summand

The generalized Jucys--Murphy induction summands give a direct decomposition of total induction. We justify precisely the central content test used here, without the erroneous permutation-orbit expansion in the current definition's proof. For the ordinary group elements $L_k=\sum_{j<k}(j,k)$, induction by inserting the letter $n$ into a cycle gives the integral identity

$$\prod_{k=1}^n(t+L_k)=\sum_{g\in\mathfrak S_n}t^{\#\operatorname{cycles}(g)}g.$$

The factor $t$ makes $n$ a new fixed point; each transposition $(j,n)$ inserts $n$ at the uniquely specified place in the cycle containing $j$. These alternatives are disjoint and exhaust the permutations. Coefficients on the right are class sums, so all coefficients of $Q_n(t)=\prod_{k=1}^n(t-L_k)$ are central over the integers and every field.

The published `thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors` says that $Q_n(t)$ acts on the complex ordinary Specht module of shape $\lambda$ as $\prod_{A\in\lambda}(t-\operatorname{res}_{\mathbb Z}(A))$. The ordinary integral Specht lattice has the free polytabloid basis provided by the accepted integral bridge. The operator equality has integer matrices on that lattice; its validity after scalar extension to $\mathbb C$ therefore implies its validity over $\mathbb Z$. Reducing and taking its radical quotient proves the same content scalar on ordinary $D^\lambda$ over every field. The accepted signed-conjugate dictionary sends each $L_k$ to $-L_k$ under the sign twist, and transpose negates contents. Hence $Q_n(t)$ acts on restricted $D(\lambda)=D^{\lambda'}\otimes\operatorname{sgn}$ by the content polynomial of $\lambda$. This use of the published complex spectrum is an integral operator-identity descent; none of the multiplicity inversion uses characteristic-zero composition counts or semisimplicity.

For clarity the functor idempotent $e=e_\alpha^{(d)}P_{d+1,h}$ implies the following test on $F_hD(\mu)=F\mathfrak S_{d+1}e\otimes_{F\mathfrak S_d}D(\mu)$. On its generating subspace $e\otimes D(\mu)$, the first-$d$ content polynomial has exactly the scalar for $\mu$, and $L_{d+1}-h$ is nilpotent. These operators commute. Since $Q_{d+1}(t)=Q_d(t)(t-L_{d+1})$ has central coefficients, every coefficient minus that of $(t-h)Q_\mu(t)$ acts nilpotently on the full generated module as well: its fixed power kills the generating subspace and centrality kills all translates. On a simple factor a nilpotent central endomorphism is zero, since every nonzero simple-module endomorphism is invertible. Thus every factor in this summand has content polynomial $(t-h)Q_\mu(t)$.

Distinct residues give distinct polynomials: $(t-h)Q_\mu(t)-(t-k)Q_\mu(t)=(k-h)Q_\mu(t)\ne0$ for $h\ne k$. The content polynomial of $\mu+B$ appends exactly the residue of $B$. Its factors therefore occur only in the corresponding residue summand. The total multiplicity computed above is exactly the multiplicity in $F_iD(\mu)$ required by the target. This argument does not use primitivity or exhaustiveness of any content-block idempotent.

## 9. Surgical replacement for the false transpose fact

Transpose preserves boundary types. Literally

$$(\mu\cup B)'=\mu'\cup B^{\mathsf t},\qquad(\mu\setminus A)'=\mu'\setminus A^{\mathsf t}.$$

It sends an addable node to an addable node and a removable node to a removable node; it negates the residue. The appropriate boundary reading order is reversed when transporting the signature convention. It does not exchange addable and removable sets. The proof above needs no claimed equality of induction and restriction multiplicities and no transpose transfer of a restriction count.

## Reading and validation record

This construction uses the actual accepted canonical essential-count supplier and local $q=1$ bridge, not a bibliographic count citation. Selected canonical foundation, recurrence, stack, and corner arguments were read; no complete reading of an external translation-functor paper or whole source book is claimed. The finite executable check independently enumerates literal essential subsets and compares tensor-character reverse substitution with direct reduced signatures for primes $2,3,5$, partition sizes $0$ through $8$: 607 row counts passed. This is supplementary evidence, not the proof. The parent's independent review and all actual consumer checks remain outstanding.
