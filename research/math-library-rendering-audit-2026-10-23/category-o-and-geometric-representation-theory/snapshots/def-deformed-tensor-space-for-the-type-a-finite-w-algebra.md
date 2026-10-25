---
id: def-deformed-tensor-space-for-the-type-a-finite-w-algebra
kind: definition
title: "The deformed tensor space for the type-A finite W-algebra"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e,
       thm-skryabins-equivalence-for-the-type-a-whittaker-pair,
       def-arakawa-suzuki-casimir-operators-on-tensor-functors,
       def-degenerate-cyclotomic-hecke-algebra,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character,
       thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations,
       thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer,
       def-classical-complex-matrix-lie-algebras, def-universal-enveloping-algebra,
       def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra,
       def-axiom-of-choice]
axiom_use: "Inherited AC from the actual Skryabin equivalence and Vust double-centralizer suppliers; the column-trace character calculation and unital-image comparison are choice-free."
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Sections 3.1-3.6, printed pp. 10-15: fixed loop chart, the distinct graded representations phi_d,c=phi_d composed eta_c and their identical unital images (Section 3.2), the actual balanced mu maps (3.5)-(3.9), the full Casimir computation in Lemma 3.3, and the filtered centralizer inclusions. Complete relevant sections newly read for this construction; no claim of a fresh complete-article reading."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 8, Sections 8.1-8.3, printed pp. 81-86: Skryabin's model, the actual balanced tensor map in Corollary 8.2, coherent associativity (8.8)-(8.10), and transported Casimir/place operators (8.13)-(8.23). The relevant full tensor passage and the initial translation-operator passage were newly read; no claim of fresh full-memoir reading."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Definition

Fix the pyramid $\lambda=(0\le p_1\le\cdots\le p_n)$ with columns
$q_1\ge\cdots\ge q_l$, its box-labelled natural module $V=\mathbb C^N$,
an arbitrary origin $c=(c_1,\dots,c_l)\in\mathbb C^l$, and $d\ge0$.
Assume AC [[def-axiom-of-choice]] for the imported Skryabin and Vust inputs.
For $X\in\mathfrak p$ define the column-trace character
$$\kappa_c(X)=\sum_{b=1}^l c_b\operatorname{tr}(X_{bb}),$$
where $X_{bb}$ is its $b$th column-Levi diagonal block. Write
$\eta_c(X)=X+\kappa_c(X)1$ for the resulting automorphism of $U(\mathfrak p)$,
so $\eta_c(e_{a,b})=e_{a,b}+\delta_{a,b}c_{\operatorname{col}(a)}$.
Let $\mathbb C_c$ be the corresponding one-dimensional $\mathfrak p$-module
and set $a_b=c_b+q_b-n$ and $\Lambda=\sum_{b=1}^l\Lambda_{a_b}$, with a
separate integer chain for each complex coset as in
[[def-degenerate-cyclotomic-hecke-algebra]].

The **truncated (deformed) tensor space** $E_c=V_c^{\otimes d}$ is
$E=V^{\otimes d}$ with the left $U(\mathfrak p)$-action obtained by composing
the ordinary total tensor representation $\rho_d$ with $\eta_c$.
Equivalently it is $\mathbb C_c\otimes V^{\otimes d}$, with one character
factor; the origin twist is applied once to the total action. For $d\ge1$
its right $H_d(\Lambda)$-action is determined by place permutations $s_i$ and
$$x_1\mapsto\Bigl(e+\sum_{j=1}^N(c_{\operatorname{col}(j)}+q_{\operatorname{col}(j)}-n)e_{j,j}\Bigr)\otimes1^{\otimes(d-1)}-\sum_{k=2}^d\sum_{\operatorname{col}(i)<\operatorname{col}(j)}e_{i,j}\otimes1^{\otimes(k-2)}\otimes e_{j,i}\otimes1^{\otimes(d-k)},$$
with $x_{j+1}=s_jx_js_j+s_j$. Here the generator-fixing anti-involution of
the Hecke algebra converts the displayed operators into a right action.
For $d=0$ there are no $x_j,s_i$, $H_0(\Lambda)=\mathbb C$, and $E_c=\mathbb C_c$.

Grade the box basis by $\deg v_a=l-\operatorname{col}(a)$, use the total
tensor grading and its induced endomorphism filtration, and use the fixed
loop chart $\zeta\colon\operatorname{gr}W(\lambda)\to U(\mathfrak g^e)$ of
[[thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e]]:
$\zeta(\operatorname{gr}_rT_{i,j}^{(r+1)})=(-1)^re_{i,j;r}$, $(i,j,r)\in K$.
The coefficient index remains the actual unshifted $T=FDE$ index of
[[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]].
The restricted character on the fixed centralizer basis is
$$\kappa_c(e_{i,j;r})=\delta_{i,j}\delta_{r,0}\sigma_i(c),\qquad \sigma_i(c)=\sum_{b=1}^{p_i}c_b.$$
Consequently the **full graded left representation** in this fixed chart is
$$\varphi_{d,c}(X)=\sum_{t=1}^d X^{(t)}+\kappa_c(X)\operatorname{id}_E\qquad(X\in\mathfrak g^e),$$
where $X^{(t)}$ acts in tensor position $t$. In particular its complete
mode-symbol dictionary is
$$\operatorname{gr}_r\Phi_{d,c}(T_{i,j}^{(r+1)})=(-1)^r\left(\sum_{t=1}^d e_{i,j;r}^{(t)}+\delta_{i,j}\delta_{r,0}\sigma_i(c)\operatorname{id}_E\right),$$
where $\Phi_{d,c}$ is the restricted $W(\lambda)$-action. On the right,
$\operatorname{gr}_1x_j=e^{(j)}$ and $\operatorname{gr}_0s_i$ is the place
permutation. Thus the graded bimodule is the character-twisted Vust module
$\mathbb C_{\kappa_c|\mathfrak g^e}\otimes E$, with the ordinary truncated
polynomial/permutation action. It need not be the untwisted Vust module in
the fixed chart. Nevertheless its unital left image algebra and its
commutant are exactly the untwisted Vust image algebra and commutant, as
proved below.

The displayed right operators commute with $W(\lambda)$; full
$\mathfrak p$-commutation is not asserted. They make $E_c$ a filtered
$(W(\lambda),H_d(\Lambda))$-bimodule. The actual balanced Skryabin map gives
a coherent isomorphism
$\mu_d\colon\mathbb C_c\circledast V^{\circledast d}\to E_c$ of
$(W(\lambda),H_d)$-bimodules. For every complex origin, every pyramid and
every $d$, the two filtered image algebras are mutual centralizers, and their
associated graded image algebras are the unital Vust image algebras. No
admissibility or stable-range restriction enters this centralizer assertion.

If the pyramid is empty, $N=l=0$, use $V=0$ and $W=U(\mathfrak g^e)=\mathbb C$.
For $d=0$ all structures are scalar; for $d>0$, $E=0$ and the empty
cyclotomic product is $1$, giving the zero quotient and zero endomorphism
algebra. All formulas and centralizer identities then have these evident
empty interpretations.

## Facts & Assumptions

**Given:** The pyramid, its fixed box/row basis and $K$-index convention, arbitrary $c$, $d\ge0$, and the left and right operators in the Definition. Assume AC for the imported equivalence and Vust theorem.

[F1] The pyramid gives $\deg e_{a,b}=\operatorname{col}(b)-\operatorname{col}(a)$, $\mathfrak p=\bigoplus_{r\ge0}\mathfrak g_r$, $e\in\mathfrak g_1$, and $e_{i,j;r}=\sum e_{a,b}$ over row pair $(i,j)$ and column displacement $r$; the $J\leftrightarrow K$ bijection retains the physical box labels ([[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]]).

[F2] The finite $W$ model uses $\eta(e_{a,b})=e_{a,b}+\delta_{a,b}\rho_{\operatorname{col}(a)}$ with $\rho_b=n-\sum_{h\ge b}q_h$. The canonical loop chart is the inclusion $\operatorname{gr}W\subseteq U(\mathfrak p)$ identified with $U(\mathfrak g^e)$, and its mode symbols are $(-1)^re_{i,j;r}$, without a $u^{s_{i,j}}$ multiplier ([[def-the-type-a-finite-w-algebra-and-whittaker-category]], [[thm-the-loop-filtration-on-the-type-a-finite-w-algebra-has-associated-graded-u-of-g-e]], [[def-shifted-yangian-and-pyramid-generators-for-the-type-a-finite-w-algebra]]).

[F3] For a $\mathfrak p$-module $M$, Skryabin supplies the actual balanced $W$-linear tensor map $(\eta(u)1_\chi\otimes m)\otimes v\mapsto um\otimes v$, its triangular inverse and coherent associativity. On the ambient genuine $\mathfrak g$-module the trace-form Casimir and places are natural intertwiners satisfying the affine Hecke relations; restriction to Whittaker vectors therefore transports these operators as $W$-endomorphisms ([[thm-skryabins-equivalence-for-the-type-a-whittaker-pair]], [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]], [[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]]).

[F4] The cyclotomic quotient for arbitrary complex roots has its bounded monomial basis and polynomial filtration, with graded algebra $B^0=\mathbb C[X_1,\dots,X_d]/(X_1^l,\dots,X_d^l)\rtimes\mathbb C[S_d]$; the generator-fixing anti-involution descends ([[def-degenerate-cyclotomic-hecke-algebra]]).

[F5] On the untwisted tensor space $E$, the unital image $A^0=\varphi_{d,0}(U(\mathfrak g^e))$ and the operator image $D^0$ of $B^0$ are mutual centralizers for every nilpotent shape and degree, including scalar degree zero ([[thm-vust-double-centralizer-for-the-type-a-nilpotent-centralizer]]).

## Proof

**Proof technique:** direct.

**Given:** The data and actual supplier maps of F1–F5, with AC as stated. Endomorphism algebras below use their induced finite integer filtrations; right image algebras are viewed as algebras of operators when taking commutants.

1.1 The column-trace function $\kappa_c$ kills $[\mathfrak p,\mathfrak p]$: the diagonal column block of the commutator of two block-upper-triangular matrices is the commutator of their diagonal blocks, and its trace is zero. Therefore $X\mapsto X+\kappa_c(X)1$ respects Lie brackets and extends to the unital automorphism $\eta_c$ of $U(\mathfrak p)$, with inverse $\eta_{-c}$. It preserves the column grading, since only degree-zero generators receive degree-zero scalars. The coproduct gives $\rho_d\eta_c(X)=\rho_d(X)+\kappa_c(X)\operatorname{id}$, exactly the action on $\mathbb C_c\otimes E$; no factor $d$ multiplies the character. Its restriction to $W$ is the stated filtered left action. [F1, F2, construct, algebra]

2.1 Use the actual isomorphism $\mu_{\mathbb C_c,V^{\otimes d}}$ of F3, composed with coherent transported associativity, to identify $\mathbb C_c\circledast V^{\circledast d}$ with $\mathbb C_c\otimes E$. The left action is the one in step 1.1, because the balanced map intertwines $\Delta\eta(w)$ on Whittaker vectors with $\Delta(w)$ on the target. Indeed $(\eta\otimes\mathrm{id})\Delta(w)=\Delta\eta(w)$ and the evaluation map obeys $\psi(\eta(u)q)=u\psi(q)$. The ambient universal operators $\Omega_{0j}+\sum_{k<j}P_{kj}$ and $P_{j,j+1}$ preserve the Whittaker subspace and commute with its $W$-action; transporting them through this actual map gives a right Hecke action commuting with $W$. Naturality transports the places to ordinary tensor permutations. This argument makes no claim about commutation with the full target $\mathfrak p$-action. [F2, F3, step 1.1, construct, algebra]

2.2 Each $e_{i,j;r}$ has degree $r$. If $r>0$ it contains no diagonal matrix units; if $r=0$ it contains diagonal matrix units only when $i=j$, and then precisely one in each column $1,\dots,p_i$. Consequently $\kappa_c(e_{i,j;r})=\delta_{ij}\delta_{r0}\sum_{b=1}^{p_i}c_b$. Since $\mathfrak g^e\subset\mathfrak p$, the character of step 1.1 restricts to a Lie character on $\mathfrak g^e$. Thus $\eta_c$ restricts to the graded unital automorphism $\tau_c$ of $U(\mathfrak g^e)$, $X\mapsto X+\kappa_c(X)1$, with inverse $\tau_{-c}$. No assertion that $\eta_c$ preserves $W$ is needed. [F1, step 1.1, algebra]

3.1 To compute the transported $x_1$, write $Q_c=Q_\chi\otimes_W\mathbb C_c$ and $\pi_c(\eta(u)1_\chi\otimes1_c)=u1_c$. The evaluation is balanced by F3. For a tensor basis vector $v_{\mathbf j}$, write its actual Whittaker preimage as $z=\sum_{\mathbf i}z_{\mathbf i}\otimes v_{\mathbf i}$; then $\pi_c(z_{\mathbf i})=\delta_{\mathbf i,\mathbf j}$. For $E_{ab}\in\mathfrak p$, $\pi_c(E_{ab}z_{\mathbf i})=\delta_{ab}(c_{\operatorname{col}(a)}-\rho_{\operatorname{col}(a)})\delta_{\mathbf i,\mathbf j}$. For $E_{ab}\in\mathfrak m$, the actual Whittaker equation instead reads $E_{ab}z_{\mathbf i}=\chi(E_{ab})z_{\mathbf i}-\sum_{t:i_t=a}z_{\mathbf i[a\mapsto b\text{ at }t]}$. These two identities compute every coefficient of $(\pi_c\otimes1)\Omega_{01}z$. [F2, F3, step 2.1, construct, algebra]

3.2 The fixed loop chart F2 identifies the graded inclusion of $W$ in $U(\mathfrak p)$ with the ordinary inclusion of $U(\mathfrak g^e)$. The ordinary tensor representation $\rho_d$ and $\eta_c$ are graded maps. Therefore taking symbols of their restriction gives $\operatorname{gr}\Phi_{d,c}=\varphi_{d,0}\tau_c\zeta$. This is equality of the full graded representation, not merely equality of its image. It proves $\varphi_{d,c}(X)=\sum_tX^{(t)}+\kappa_c(X)\operatorname{id}$ and the complete displayed $T_{i,j}^{(r+1)}$ symbol dictionary. The term $\sigma_i(c)$ survives in degree zero; for positive degree it is absent. The coefficient index, sign $(-1)^r$, finite $K$-range and physical box labels are unchanged. [F1, F2, step 1.1, step 2.2, algebra]

4.1 In that computation the nonnegative-column terms give $(c_{\operatorname{col}(j_1)}+\sum_{h\ge\operatorname{col}(j_1)}q_h-n)v_{\mathbf j}$. The character terms from negative matrices give $v_{L_1(\mathbf j)}$, since $\chi(E_{ab})=1$ exactly when $b=L(a)$. In the remaining negative sum, replacement in the first tensor position gives $-\sum_{h>\operatorname{col}(j_1)}q_h\,v_{\mathbf j}$, and replacement in position $k>1$ gives $-v_{\mathbf j\cdot(1\ k)}$ exactly when $\operatorname{col}(j_k)<\operatorname{col}(j_1)$. Adding yields $v_{\mathbf j}x_1=v_{L_1(\mathbf j)}+a_{\operatorname{col}(j_1)}v_{\mathbf j}-\sum_{k>1:\operatorname{col}(j_k)<\operatorname{col}(j_1)}v_{\mathbf j\cdot(1\ k)}$, precisely the matrix-unit display in the Definition. A nonexistent left neighbour contributes zero. Recursion with the place permutations gives all higher $x_j$, and their affine relations already hold by transport in step 2.1. Thus the displayed action is the transported action, rather than an unrelated action satisfying a recursion alone. [F1, F2, F3, step 3.1, algebra]

5.1 For $d\ge1$ and $l\ge1$, let $C_k$ be the span of tensors whose first box has column at most $k$. The preceding formula preserves every $C_k$ and gives $C_k(x_1-a_k)\subseteq C_{k-1}$. Successively applying the factors from column $l$ down to column $1$ kills $C_l=E$; they are polynomials in one operator and commute, so $\prod_{b=1}^l(x_1-a_b)=0$. This proves the quotient factorization directly for arbitrary complex origins, including repeated roots. In the total grading $\deg v_a=l-\operatorname{col}(a)$, the left-shift part has degree one; the diagonal part and each two-position exchange have total degree zero. Hence $\operatorname{gr}_1x_1=e^{(1)}$. Since the longest Jordan string has length $l$, $(e^{(1)})^k\ne0$ for $0\le k<l$ on this nonzero tensor space. A monic annihilating polynomial of degree $k<l$ would have that nonzero degree-$k$ symbol. Therefore the displayed degree-$l$ polynomial is the exact minimal polynomial, consistent with F4. [F1, F4, step 4.1, construct, algebra]

6.1 The right action is filtered with $x_j$ of degree one and places of degree zero: this holds for $x_1$ by step 5.1 and for each $x_{j+1}$ by $x_{j+1}=s_jx_js_j+s_j$. Taking degree-one symbols gives $e^{(j+1)}=s_je^{(j)}s_j$; the extra $s_j$ has degree zero. By F4 the resulting graded right map is the ordinary map $X_j\mapsto e^{(j)}$, $w\mapsto P_w$ on $B^0$. Together with step 3.2 this identifies the entire graded bimodule with the character-twisted Vust module in the Definition. [F4, step 5.1, step 3.2, algebra]

7.1 Since $\tau_c$ is an automorphism, $\varphi_{d,c}(U(\mathfrak g^e))=\varphi_{d,0}(U(\mathfrak g^e))=A^0$ as unital graded subalgebras of $\operatorname{End}(E)$. Equivalently each shifted generator differs from its untwisted operator by the explicitly known scalar multiple of the identity, and either set generates the other together with the common unit. Consequently their commutants are identical as well. By F5, $A^0$ and the unchanged right image $D^0$ are mutual centralizers. This proves the required Vust comparison without identifying the two fixed-chart modules. [F5, step 2.2, step 3.2, step 6.1, algebra]

8.1 Let $C=\Phi_{d,c}(W)$ and $D$ be the algebra of right Hecke operators, with filtrations induced from $\operatorname{End}(E)$. They commute by step 2.1. The symbol maps in steps 3.2 and 6.1 have images $A^0,D^0$, respectively, which are contained in $\operatorname{gr}C,\operatorname{gr}D$. For any commuting filtered operator algebras, taking the largest homogeneous terms of a commutator gives the inclusions $\operatorname{gr}C\subseteq\operatorname{gr}Z(D)\subseteq Z(\operatorname{gr}D)$, where $Z$ denotes the commutant in the relevant endomorphism algebra. Therefore $A^0\subseteq\operatorname{gr}C\subseteq\operatorname{gr}Z(D)\subseteq Z(\operatorname{gr}D)\subseteq Z(D^0)=A^0$. The same argument with $C,D$ interchanged gives $D^0\subseteq\operatorname{gr}D\subseteq\operatorname{gr}Z(C)\subseteq Z(\operatorname{gr}C)\subseteq Z(A^0)=D^0$. Every inclusion is equality. This also proves strict equality of the graded image algebras, rather than presuming that an arbitrary filtered representation is strict. [F5, step 2.1, step 7.1, algebra]

9.1 Since $C\subseteq Z(D)$ and their induced associated graded spaces agree by step 8.1, a member of $Z(D)$ can have its leading homogeneous term matched by a member of $C$ of the same filtration degree. Subtraction lowers the integer degree. The finite grading of $E$ bounds the endomorphism filtration below, so iteration terminates and gives $Z(D)=C$. Similarly $Z(C)=D$. Restoring the right-action opposite convention gives $\Phi_{d,c}(W)=\operatorname{End}_{H_d(\Lambda)}(E_c)$ and $\operatorname{End}_W(E_c)^{\mathrm{op}}=\Psi_d(H_d(\Lambda))$. All arguments hold for arbitrary $c$ and every $d$; no stable injectivity or admissible-origin Morita assertion was used. [step 8.1, construct, algebra]

10.1 For $d=0$, $E_c=\mathbb C_c$, $\varphi_{0,c}(X)=\kappa_c(X)$ and $\mu_0$ is the identity; the right algebra is $\mathbb C$. Both unital operator images and commutants are scalar, even when the fixed-chart character is nonzero. For an empty pyramid the positive tensor powers are zero and both operator image algebras and both commutants in $\operatorname{End}(0)$ are zero; degree zero is scalar. Thus the exceptional cases stated in the Definition are covered without evaluating a nonexistent $x_1$ or invoking a positive-string Vust hypothesis. [F3, F4, step 1.1, step 9.1, algebra]

11.1 In the one-box case $p=(1)$, $q_1=n=1$, $c_1=1$, $d=1$, the fixed-chart loop generator is $T_{11}^{(1)}=E_{11}$, and step 3.2 gives its operator $1+1=2$; the untwisted Vust operator is $1$. Both unital images remain $\mathbb C$, exactly as step 7.1 proves. Separately, for $\mathfrak{gl}_2$, $p=(2)$, $c=(0,0)$ and $d=1$, the displayed $x_1$ is $E_{12}$ and $H=E_{11}-E_{22}\in\mathfrak p$ obeys $[H,x_1]=2E_{12}\ne0$. This witnesses why the correct commutation claim is the transported $W$-commutation established in steps 2.1, 3.1 and 4.1. The full filtered bimodule, coherent $\mu_d$, exact graded character chart and all-origin mutual centralizers have now all been proved. [F1, F2, step 4.1, step 3.2, step 7.1, step 9.1, step 10.1, algebra] ∎

## Remarks

- The prefix-order cross-column sum has total tensor degree zero; it does not lower the total degree by one. The individual $e$ operator has degree one. This fixes the filtration while retaining all physical indices and the existing unshifted FDE mode convention.

- Equality of unital image algebras is weaker than equality of fixed-chart representations. The representation here is explicitly $\varphi_{d,0}\tau_c$; its degree-zero origin character is retained, including on $V_c^{\otimes0}$.

- The origin shift $\eta_c$ on $U(\mathfrak p)$ and the head/tail shift $\eta$ defining the Whittaker model have separate roles. The proof uses the actual balanced $\mu_d$ and ambient trace-form Casimir to establish the raw right operators and their $W$-linearity.
