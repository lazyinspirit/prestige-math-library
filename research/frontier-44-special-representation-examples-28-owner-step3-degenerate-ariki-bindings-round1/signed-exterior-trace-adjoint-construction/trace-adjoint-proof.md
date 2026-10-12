# Signed exterior quotient: exact symmetric-trace calculation

Construction within the existing source18 focused round2/max2. No historical round, source-retrieval budget, canonical item, consumer, gate, readiness, manifest or engine state has been changed. Parent `/root/repair_klr_global_basis` owns integration, supplier checks and final sufficiency. The global Codex configuration was read: `model_auto_compact_token_limit=500000` and scope `total` are present; no configuration change or adoption by this already-running session is claimed.

The algebraic exterior-image gap is closed by the calculation below, provided the actual finite-W tensor transport and regular-corner identification used in the existing supplier chain are established. This proves the exact quotient-to-signed-ideal map; it does not by itself prove the separately retained exterior tilting-decomposition assertion (4.15), or repair all consumers.

## 1. Actual ground, action and corner types

The cached BK0901.0057 PDF **page41, equation(4.14) uses ordinary $I^\Lambda$, not $\widetilde I^\Lambda$**. This was checked directly with PyMuPDF text spans from the cached PDF: the symbol before $I$ is the large opening bracket (`CMEX10`, extracted glyph `h` at x253.319,y659.672); $I$ is `CMMI10` at x258.359,y672.337, with superscript $\Lambda$ and no tilde accent. The text-cache replacement character before `IΛ` is that bracket. The identical ordinary ground is defined following(4.4), with scalar $q_1+\cdots+q_{i-1}+m_i$ on the $i$th Levi block. No opposite ground or twisting functor is required for this exterior quotient calculation.

For lower cut $k$, take $q_i=m_i+1-k$, $n=q_1=\max_iq_i$ (the number of rows), $N=\sum_iq_i$ (so $\mathfrak g=\mathfrak{gl}_N$), and common finite-W origin $c=n+k-1$. Here the admitted charges are in the column order $m_1\ge\cdots\ge m_l$, as required for this left-justified pyramid. Use the source’s actual **head** character convention $\rho_{\mathrm{head},i}=n-(q_1+\cdots+q_i)$: BK0605217, introduction, defines $\mathbb C_{-\rho}$ by $E_{ab}\mapsto\delta_{ab}(q_1+\cdots+q_{\operatorname{col}(b)}-n)$. This is distinct from the **tail** shift defining its finite-W embedding, $\eta(E_{ab})=E_{ab}+\delta_{ab}(n-\sum_{h\ge\operatorname{col}(b)}q_h)$. The latter is the convention used in Lemma3.3 and the actual Whittaker right action by $\eta(u)$; it is not substituted for the head parabolic ground. The origin twist is $\eta_c(E_{ab})=E_{ab}+\delta_{ab}c$, so the character $\mathbb C_{-\rho_{\mathrm{head}}}\otimes\mathbb C_c$ then has scalar
$$q_1+\cdots+q_i-n+c=q_1+\cdots+q_{i-1}+m_i.$$
Its transported roots are $c+q_i-n=m_i$. Thus the ordinary induced module(4.14) and the deformed tensor model have exactly the same ground including its scalar centre. Choosing a sufficiently low cut gives at least $d$ longest rows while keeping all roots $m_i$ unchanged. Charges may repeat.

Write $H=H_d(m_1,\ldots,m_l)$, $J=\prod_{i,r}S_{\nu^{(i)}_r}$ with $\nu^{(i)}=(\lambda^{(i)})^{\mathsf T}$, arranged in the reversed factor order $l,l-1,\ldots,1$. Let $t_j$ be the original column type of position $j$. Then $t_1\ge\cdots\ge t_d$, and $t_j$ is constant on every wedge block. Put
$$p=\prod_{j=1}^d\prod_{i=1}^{t_j-1}(x_j-m_i),\qquad a_-=\sum_{u\in J}\operatorname{sgn}(u)u,\qquad g=pa_-.$$
This $p$ is exactly $\prod_{i<l}\prod_{j\le d_{i+1}+\cdots+d_l}(x_j-m_i)$ from(4.12). The polynomial is invariant under permutations inside each wedge block, so the affine cross relations show it commutes with $J$: for an adjacent transposition, the divided difference of an invariant polynomial is zero. Consequently $pa_-=a_-p$ and $g^*=g$ under the generator-fixing anti-involution.

Let $U=\mathbb C_c\otimes V^{\otimes d}$ with the actual transported $W$ action and right $H$ action. Let $e_S$ select $d$ distinct longest row names, once each, and let $w$ have those row names in fixed order, all in column $l$. The regular bimodule identification is
$$\mathrm{reg}:H\longrightarrow e_SU,\qquad b\longmapsto wb,$$
with left corner action $h(a)\mathrm{reg}(b)=\mathrm{reg}(ab)$. Its right action is the tensor Hecke action. Distinguish these two actions throughout.

The quotient $D=\mathbb C_c\otimes\bigotimes_{i=l}^1\bigwedge^{\nu^{(i)}}(V/V_{i-1})$ is obtained from $U$ by killing a tensor with column $<t_j$ in position $j$, and imposing the alternating relation inside each wedge block. These relations are $\mathfrak p$-stable: each $V_{i-1}$ is a $\mathfrak p$-submodule, and exterior quotients are natural for the diagonal action. The ground is unchanged. Hence the quotient $q:U\twoheadrightarrow D$ is $U(\mathfrak p)$-linear and therefore $W$-linear. Both modules factor through the same tensor-image algebra $W_d$, since $D$ is its quotient. Restricting gives $q_S:e_SU\twoheadrightarrow e_SD$.

In particular $q_S\mathrm{reg}$ is **left** $H$-linear:
$$q_S\mathrm{reg}(ab)=q_S(h(a)\mathrm{reg}(b))=h(a)q_S\mathrm{reg}(b).$$
Thus $K=\ker(q_S\mathrm{reg})$ is a left ideal and $Q=e_SD\cong H/K$. Right tensor-Hecke linearity of $q$ is neither asserted nor needed.

## 2. Explicit adjoint-one-vector calculation

For a tensor with the selected distinct row names, let $\phi_{\mathbf c}$ be the coordinate covector at the tensor having those row names in their original order and columns $\mathbf c=(c_1,\ldots,c_d)$. Write $\phi_0=\phi_{(1,\ldots,1)}$. On the regular row space the full operator formula is
$$v_{\mathbf b}x_j=v_{L_j\mathbf b}+m_{c_j}v_{\mathbf b}+\sum_{k<j:\ c_k\ge c_j}v_{\mathbf b\cdot(k\ j)}-\sum_{k>j:\ c_k<c_j}v_{\mathbf b\cdot(j\ k)}.$$
This is BK0605217 Lemma3.3 with the reconciled roots. It follows also from the existing explicit first-operator transport and $x_{j+1}=s_jx_js_j+s_j$.

Denote right multiplication by $R_b$. Transposing the displayed formula at a target coordinate of columns $\mathbf c$ gives one raising term $\phi_{R_j\mathbf c}$, diagonal term $m_{c_j}\phi_{\mathbf c}$, positive swap covectors only when $k<j$ and $c_j\ge c_k$, and negative swap covectors only when $k>j$ and $c_j<c_k$. Row names in a swap covector are swapped too. The raising term exists whenever $c_j<l$ because every selected row is longest. The reversed inequalities come from taking the input tensor to be the target tensor with positions $k,j$ swapped.

Compute $\phi_0\circ R_p$ by processing $j=1,\ldots,d$, and for each position applying $x_j-m_1,\ldots,x_j-m_{t_j-1}$. Polynomial commutativity permits this order. Just before applying $x_j-m_i$, the covector has columns
$$c_k=t_k\ (k<j),\qquad c_j=i,\qquad c_k=1\ (k>j).$$
For $k<j$, $c_k=t_k\ge t_j>i=c_j$, so no positive swap covector exists. For $k>j$, $c_k=1\le i=c_j$, so no negative swap covector exists. The diagonal coefficient is $m_i-m_i=0$. Therefore this operation gives **exactly** the next raising covector, with coefficient one. Induction proves
$$\boxed{\phi_0\circ R_p=\phi_{\mathbf t}.}$$
This calculation is valid when roots coincide; it subtracts the actual current diagonal root and never divides by a root difference.

Since $p$ commutes with $a_-$,
$$\phi_0\circ R_g=\phi_0\circ R_p\circ R_{a_-}=\phi_{\mathbf t}\circ R_{a_-}.$$
The order is justified by first rewriting $g=a_-p$: for right action $R_{a_-p}=R_p\circ R_{a_-}$. Let $\ell=\phi_{\mathbf t}\circ R_{a_-}$. This covector is the alternating sum of coordinates of the tensor with column bounds exactly $t_j$, with row names permuted inside wedge blocks. Its support contains no forbidden column. For $u\in J$ it obeys $\ell(vu)=\operatorname{sgn}(u)\ell(v)$. Hence it vanishes on every defining exterior-quotient relation, and it factors as a covector $\lambda\in Q^*$ with $\ell=\lambda q_S$. Explicitly, $\lambda$ is the coefficient of the minimal-column wedge tensor with the original ordered row names in each wedge. No factorial normalization is needed because every selected row occurs once: each tensor coordinate has a unique contributing permutation.

## 3. Trace identification and exact kernel inclusion

Use the proven PBW top trace $\tau$, the coefficient of $x_1^{l-1}\cdots x_d^{l-1}\cdot1$. Its symmetric pairing is nondegenerate. Put tensor degree $\deg v_b=l-\operatorname{col}(b)$ and $D=d(l-1)$. The operator formula has leading symbol $L_j$ of degree one; all diagonal and swap terms have degree zero. For every bounded PBW monomial $x^{\mathbf r}u$, $\mathrm{reg}(x^{\mathbf r}u)$ has degree at most $\sum r_j$. Only the monomials with every $r_j=l-1$ can reach degree $D$; their degree-$D$ tensors have every column1 and row order permuted by $u$. Therefore
$$\tau(b)=\phi_0(\mathrm{reg}(b))\quad\text{for all }b\in H.$$
The regular identification respects the right tensor action, so the boxed computation gives the exact identity
$$\boxed{\tau(bg)=\lambda(q_S\mathrm{reg}(b))\quad(b\in H).}$$
For $b\in K$ this is zero. More strongly, for every $a\in H$, $ab\in K$ by the proved left-linearity; hence $\tau(abg)=0$. Nondegeneracy of $\tau$ implies $bg=0$. Thus
$$K\subseteq\operatorname{Ann}_{\mathrm{left}}(g),$$
and the previously missing map is well defined:
$$F:Q\longrightarrow Hg,\qquad q_S\mathrm{reg}(b)\longmapsto bg.$$
It is visibly left $H$-linear and surjective. The trace calculation supplies the actual well-definedness; dimension or self-duality does not substitute for it.

## 4. Equality, basis and adjoint image

A basis of $Q$ assigns the distinct row names to wedge positions modulo $J$, and assigns each position $j$ any allowed column in $\{t_j,\ldots,l\}$. Alternating signs identify the choices within a wedge; no repeated row name occurs, so no basis vector vanishes. Consequently
$$\dim Q=\frac{d!}{|J|}\prod_j(l-t_j+1).$$
In the truncated polynomial/permutation associated graded algebra, $\operatorname{gr}(g)=X^{\mathbf b}a_-$ with $b_j=t_j-1$. For coset representatives $u\in S_d/J$ and $0\le r_j\le l-t_j$, the elements
$$uX^{\mathbf r+\mathbf b}a_-$$
are independent: different cosets have disjoint permutation supports, and within one coset different exponent vectors have distinct polynomial support. They are nonzero because all exponents are at most $l-1$. Their filtered lifts $u x^{\mathbf r}g$ therefore are independent (first take the greatest degree of any proposed relation). This proves $\dim Hg\ge\dim Q$. The surjection $F$ gives the reverse inequality. Hence $F$ is an isomorphism and
$$\boxed{K=\operatorname{Ann}_{\mathrm{left}}(g),\qquad Q\cong Hg.}$$
For the requested adjoint formulation, note the side carefully. The bare symmetric-trace identification $\iota(z)(b)=\tau(bz)$ sends the image of $(q_S\mathrm{reg})^*:Q^*\hookrightarrow H^*$ to $K^\perp=\{z:\tau(Kz)=0\}$. This is a **right** ideal. It contains $gH$ because $Kg=0$, and the dimensions coincide: $\dim K^\perp=\dim Q=\dim Hg=\dim gH$, the last equality following from $g^*=g$. Thus the bare adjoint image is exactly $gH$.

With the standard generator-fixing contragredient dual convention, apply $*$ after $\iota^{-1}$. The resulting adjoint has image exactly $(gH)^*=Hg$, and it sends the explicit covector $\lambda$ to $g^*=g$. This is the requested left-module adjoint-one-vector identity. Concretely the convention is $a\cdot f(b)=f(a^*b)$; its trace identification is $f(b)=\tau(bz^*)$, under which $a\cdot f$ corresponds to $az$. Omitting this anti-involution would incorrectly call a right ideal a left ideal.

All conclusions restrict to any central block idempotent $e_\alpha$: the left-linear isomorphism restricts to $e_\alpha Q\cong H e_\alpha g$, and the block trace is nondegenerate. Thus the actual block generator is $g_A=e_\alpha g$.

## 5. Integration boundary and scope

This proof closes the exact regular-row exterior kernel and signed-generator seam in arbitrary level over $\mathbb C$, including all admitted repeated integral charges and arbitrary supported blocks. The algebraic covector calculation even allows arbitrary complex diagonal roots when the same typed tensor transport is available. For $d=0$ all spaces and maps are $\mathbb C$ and the empty products are1; for $l=1$ it is the ordinary exterior antisymmetrizer quotient and the same argument applies.

The passage from $Q=e_SD$ to $\operatorname{Hom}_\mathfrak g(T^\Lambda,E(A))$ consumes the genuine local finite-W/Whittaker tensor transport, the regular-corner Hom evaluation, and stable-realization/corner restriction already assigned in the existing supplier chain. Under their actual statements, $\mathcal V(E(A))=D$ because(4.14) has the ordinary ground just checked, and Lemma6.8 evaluation gives the stable-range Hom image $Q$. For removing auxiliary rows, the row-deletion projection acts by selecting tensor row names; it preserves the forbidden-column and wedge relations and commutes with the quotient. Consequently its restriction gives the same exterior quotient in the smaller pyramid, to which the existing proved corner-transfer supplier applies. This is an explicit compatibility assertion, not a new proof of that supplier or of Skryabin equivalence.

Parent must check those supplier statements and their current local proofs before integrating the conclusion(4.16). The independent decomposition(4.15), all-Col indecomposable extraction and downstream Ringel/Fock conclusions remain with the parent. No closure is asserted merely from the source citation, from this research artifact, or from a format validator. No canonical-item checks were run because no canonical item was edited.
