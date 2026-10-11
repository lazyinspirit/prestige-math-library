---
id: thm-q-schur-weyl-weight-space-gram-determinant-hook-product
kind: theorem
title: "The q-Schur Weyl weight-space Gram determinant is a hook product"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-alternating-weyl-and-specht-symbols-from-beta-sequences, def-hook-arm-leg-and-hook-length, def-partition-young-diagram-and-conjugate-partition, def-q-integer-q-factorial-and-q-multinomial, def-removable-border-strip-and-height, def-type-a-q-schur-algebra-and-weyl-modules, lem-hooks-correspond-to-removable-border-strips, thm-separated-hecke-residues-give-seminormal-idempotents-and-bases, thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]
justified_by: []
aliases: []
landmark: false
dependency_level: 13
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Theorem 5.18, Corollary 5.19 and Lemmas 5.22-5.27, printed pp. 46-57: orthogonalisation of the semistandard basis, the norm q^{ell(d(last(T)))} times gamma_T, the beta-sequence regrouping of the weight-space Gram determinant and the hook-length product formula"
---


## Statement

Let $R$ be an integral domain, $q\in R^\times$, $d,n\ge1$, and let $W^\lambda$ be the Weyl module of $S(d,n)$ for a partition $\lambda\vdash n$ with at most $d$ parts. For a composition $\mu$ of $n$ of length $d$, let $G^\lambda_\mu$ be the Gram determinant of its $\mu$-weight space in the semistandard basis ([[def-type-a-q-schur-algebra-and-weyl-modules]]). Put $\beta_j=\lambda'_j+n-j$ and $h_{ab}=\lambda_a-b+\lambda'_b-a+1$. Then $$G^\lambda_\mu=q^N\prod_{\substack{(a,b),(a,c)\in[\lambda]\\b<c}}  \left(\frac{[h_{ab}]_q}{[h_{ac}]_q}\right)^{  d_\mu(\beta+h_{ac}\mathbf e_b-h_{ac}\mathbf e_c)},$$ where $N=\sum_{T\in T_0(\lambda,\mu)}\ell(d(\operatorname{last}(T)))$. Here $\operatorname{last}(T)$ is the least-dominant standardization in the fiber of $T$, and $d_\mu$ is the exact alternating semistandard number of [[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]. **Both beta shifts use the same removed hook length $h_{ac}$.**

The exponent is the sorting sign times $|T_0(\eta,\mu)|$ if that balanced beta sequence has distinct nonnegative entries and recovers $\eta$; it is zero otherwise. Equivalently, remove the rim strip $R_{ac}$ and rewrap its $h_{ac}$ boxes with lowest node in column $b$. The sign is the parity of the heights of the removed strip and the newly added strip, the latter measured in the new diagram $\eta$; it is not generally the sum of two old $\lambda$ hook legs ([[def-removable-border-strip-and-height]], [[lem-hooks-correspond-to-removable-border-strips]]).

Form the product first in the universal field $\mathbb Q(Q)$. It equals a Laurent polynomial in $\mathbb Z[Q,Q^{-1}]$, namely the universal integral Gram determinant divided by its displayed unit $Q^N$. Over $R$ the formula means the specialization of that Laurent polynomial. It does not require inverting a vanishing hook number or evaluating $0/0$. All weights and $d<n$ are retained; an empty weight space has determinant $1$.

## Facts & Assumptions

**Given:** The normalized semistandard maps, weight projections and Weyl cell form of the q-Schur Definition; the beta symbols and branching identity; and the hook-to-bead-gap correspondence in the cited suppliers.

[F1] The ordinary cell maps have the normalization $\varphi_{ST}(m_\nu h)=m_{ST}h$, with $m_{ST}=\sum_{\mu(s)=S,\nu(t)=T}m_{st}$. Their star swaps the indices, and their four-index cell product defines the Weyl form ([[def-type-a-q-schur-algebra-and-weyl-modules]]). The actual regular corner identifies this product with the Murphy product with factor $1$ ([[thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules]]).

[F2] Over $K=\mathbb Q(Q)$, the corrected intrinsic Murphy seminormal basis has its unitriangular normalization, adjacent-generator action and self-adjoint JM operators ([[thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]]). For a semistandard $T$ and node $(i,j)$ of entry $v$, its predecessor set is precisely $$\Gamma_T(i,j)=\{(k,l):l<j,\ T(k,l)<v,\  T(k',l)>v\text{ for every }k'>k\}.$$ Equivalently $T(k,l)<v<T(k+1,l)$ with sentinel $+\infty$ below the column. Both inequalities are strict; an equal $v$ below excludes that column. Define $$\gamma_T:=\prod_{(i,j)}\prod_{(k,l)\in\Gamma_T(i,j)}  \frac{[j-i+k-l+1]_Q}{[j-i+k-l]_Q}.$$ The standard-tableau version is defined by the same rule.

[F3] The signed Kostka numbers satisfy $d_\mu(a)=\sum_{|C|=z}d_{\bar\mu}(a-\mathbf1_C)$, with zero values for repeated or negative beta entries ([[def-alternating-weyl-and-specht-symbols-from-beta-sequences]]).



## Proof

**Proof technique:** direct.

1.1 Preserve small alphabets. Enlarge to $D=\max(d,n)$ temporarily. The sum of permutation summands with types supported on the first $d$ letters is a literal summand of the $D$-alphabet permutation module, with projection $p$ and $pS(D,n)p=S(d,n)$. The normalized maps whose two types have that support, their cell multiplication and their Weyl form coefficients are unchanged. Every semistandard shape with these types has at most $d$ rows. Thus proving the weight norm in the enlarged algebra, where the regular corner exists, proves the original norm as well. No hypothesis $d\ge n$ is added. [given, F1]

1.2 Compute the standard norms. For the canonical standard tableau, $\gamma_{t^\lambda}$ telescopes rowwise to $[\lambda]!_Q$, also its norm by $x_\lambda^2=[\lambda]!_Qx_\lambda$. If $s$ dominates $t=s(i,i+1)$, the adjacent action gives $f_t=f_s(T_i+\alpha)$ with $\alpha=1/[\rho]_Q$. Contravariance, orthogonality and the quadratic relation imply $\langle f_t,f_t\rangle=(Q+\alpha)(1-\alpha) \langle f_s,f_s\rangle$. The two swapped predecessor ratios give $\gamma_t=Q^{-1}(Q+\alpha)(1-\alpha)\gamma_s$: use $[\rho+1]=1+Q[\rho]$ and $[\rho-1]=Q^{-1}([\rho]-1)$. Increasing-length adjacent swaps of incomparable boxes reach every standard tableau, so $\langle f_t,f_t\rangle=Q^{\ell(d(t))}\gamma_t$. [F1, F2]

2.1 Compute the semistandard norms, including the missing scalar. Sums of JM elements over each label block commute with the corresponding row symmetrizer. Evaluation of the normalized map at $m_\mu$ gives their triangular action with leading eigenvalues $\sum_{T(i,j)=k}[j-i]_Q$. The joint eigenvalues distinguish $T$ over $K$: for every initial-label subshape they give its content multiset, whose diagonal counts determine the Young diagram. Finite triangular orthogonalization therefore gives $\psi_T=\varphi_T+$ more dominant terms. Let $U_T,V_T$ be the mutually adjoint cell maps between this weight and the regular weight, and let $\pi_t$ be the product of the axial ratios at standard predecessors with the **same** $T$-entry. Evaluation at $m_\mu$ gives $V_Tf_t=\pi_t\psi_T$: at the first standardization its scalar is the factorial of the row-intersection subgroup, also the telescoped $\pi_t$; an adjacent swap within a label block multiplies both scalars by $Q+\alpha$, since that row symmetrizer has $T_i$-eigenvalue $Q$. Finite bubble sorting connects the standardizations, proving the scalar for every $t$ in the fiber. For $t=\operatorname{last}(T)$, the strict boundary in [F2] partitions the standard predecessor set into $\Gamma_T$ and these same-entry predecessors, so $\gamma_t=\pi_t\gamma_T$. Also $U_T\psi_T$ has leading coefficient $1$ at $f_t$, all other terms more dominant, by the normalized map and the unitriangular basis changes. Hence adjointness gives $$\pi_t\langle\psi_T,\psi_T\rangle  =\langle f_t,U_T\psi_T\rangle  =Q^{\ell(d(t))}\gamma_t,$$ so $\langle\psi_T,\psi_T\rangle=Q^{\ell(d(t))}\gamma_T$. The transition determinant is $1$, yielding $G^\lambda_\mu=Q^N g^\lambda_\mu$ with $g^\lambda_\mu=\prod_T\gamma_T$. No norm is replaced by $Q^{\ell}$ alone. [F1, F2, step 1.1, step 1.2]

3.1 Prove the normalized beta product at the level of formal exponents. For $h\ge1$ put $$A_h(\beta,\mu)=-\sum_{b\ne c,\ \beta_b-h<\beta_c}  d_\mu(\beta-h\mathbf e_b+h\mathbf e_c).$$ A nonzero term requires $0\le\beta_b-h$, so the product is finite. Repeated beta entries cancel by exchanging the equal indices; a negative entry cannot become a valid term because, if it is the receiver, the lowered donor is still smaller. Thus these invalid sequences contribute zero exponents. Delete the largest semistandard label, occurring $z$ times in column feet $C$, to get $\beta-\mathbf1_C,\bar\mu$. The strict predecessor boundary excludes every column also in $C$. Consequently the literal exponent $E_h$ in $g$ obeys $$E_h(\beta,\mu)=\sum_{|C|=z}E_h(\beta-\mathbf1_C,\bar\mu)  +\sum_{|C|=z}\sum_{b\notin C,c\in C}  (\mathbf1_{\beta_b-\beta_c+1=h}-\mathbf1_{\beta_b-\beta_c=h})  d_{\bar\mu}(\beta-\mathbf1_C).$$ The final sum is exactly the axial ratio contributed by each deleted largest-label box. [F2, F3, step 2.1]

4.1 Verify the same recurrence for $A_h$. Apply [F3] to its summands and compare with $\sum_C A_h(\beta-\mathbf1_C,\bar\mu)$. Set $\delta=\beta_b-\beta_c-h$. The original condition is $\delta<0$ and the deleted one $\delta-\mathbf1_C(b)+\mathbf1_C(c)<0$. They differ only when $b\in C,c\notin C,\delta=0$ or $b\notin C,c\in C,\delta=-1$. In the first case, exchanging the two shifted beta entries turns the contribution into $-d_{\bar\mu}(\beta-\mathbf1_{C'})$ with $C'=C-b+c$, giving the negative term of step 3.1. In the second case, the exchanged entries give $+d_{\bar\mu}(\beta-\mathbf1_C)$, giving its positive term. Every other case cancels. At degree $0$ both exponent families vanish: a nonzero shifted empty beta sequence would have to exchange two entries with $h=\beta_b-\beta_c$, excluded by the strict condition. Induction gives $E_h=A_h$ and therefore $$g^\lambda_\mu=  \prod_{h\ge1}\prod_{b\ne c,\ \beta_b-h<\beta_c}  [h]_Q^{-d_\mu(\beta-h\mathbf e_b+h\mathbf e_c)}.$$ This proves the regrouping without copying the inconsistent signs in the printed display. [F3, step 3.1]

5.1 Convert to hooks. A surviving lowered bead $\beta_b-h$ is a nonnegative gap, so the bead-gap correspondence makes $h=h_{ab}$ for a node $(a,b)$. The remaining condition $\beta_c>\beta_b-h_{ab}=n-1-\lambda_a+a$ is equivalent to $c\le\lambda_a$; the paired nodes therefore lie in the same row. For $b<c$ write $h=h_{ab}$ and $k=h_{ac}$. Since $h-k=\beta_b-\beta_c$, the two ordered displaced sequences $\beta-h\mathbf e_b+h\mathbf e_c$ and $\beta-k\mathbf e_c+k\mathbf e_b$ exchange their two changed entries. Their signed numbers are negatives of each other, and their factors are exactly $([h]_Q/[k]_Q)^{d_\mu(\beta+k\mathbf e_b-k\mathbf e_c)}$. This proves the stated balanced hook product. Removing and rewrapping the $k$-strip is precisely this bead transfer; sorting counts its crossings, which are the heights of the removed and **new** strips. Colliding or negative sequences vanish by definition. [given, F3, step 4.1]

6.1 Specialize integrally. The semistandard form matrix has entries in $\mathbb Z[Q,Q^{-1}]$, so its determinant and $Q^{-N}G^\lambda_\mu$ are Laurent polynomials. Steps 2.1-3.1 identify the rational products with these same polynomials in $\mathbb Q(Q)$. Base change of the free semistandard basis and its form now proves the identity over the given domain, including singular specializations and weights of dimension zero. No individual vanishing ratio is evaluated. All constructions are finite; no choice principle is used. [given, step 2.1, step 4.1, step 5.1] ∎

